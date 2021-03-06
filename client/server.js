const express = require("express");
const next = require("next");
const path = require("path");
const LRUCache = require("lru-cache");

const ssrCache = new LRUCache({
  max: 100 * 1024 * 1024,
  /* cache size will be 100 MB using `return n.length` as length() function */
  length: function (n, key) {
    return n.length;
  },
  maxAge: 1000 * 60 * 60 * 24 * 30
});

class Server {
  constructor() {
    this.dev = process.env.NODE_ENV === "production" ? false : true;
    this.quiet = process.env.NODE_ENV === "production" ? false : true;
    this.app = next({
      dev: this.dev,
      dir: "./client",
      quiet: this.quiet
    });
    this.handle = this.app.getRequestHandler();
    this.port = process.env.PORT || 3000;
    this.server = express();
    this.initStatisFolder();
    this.init();
  }
  async initStatisFolder() {
    this.server.use(
      express.static(path.join(__dirname, "./assets"), {
        maxAge: 31557600000
      })
    );
  }

  async init() {
    this.app.prepare().then(() => {
      this.handleRequest();
      this.server.get("*", (req, res) => {
        return this.handle(req, res);
      });
      this.initServer();
    });
  }

  async handleRequest() {
    this.server.get("/", (req, res) => {
      this.app.render(req, res, "/index");
    });
    // quan ly
    this.server.get("/quan-ly", (req, res) => {
      res.redirect("/quan-ly/tong-quan")
    });
    this.server.get("/quan-ly/tong-quan", (req, res) => {
      this.app.render(req, res, "/manager/dashboard/dashboard");
    });
    // quan ly hoc vien
    this.server.get("/quan-ly/hoc-vien", (req, res) => {
      this.app.render(req, res, "/manager/member/member");
    });
    this.server.get("/quan-ly/hoc-vien/*", (req, res) => {
      this.app.render(req, res, "/manager/member/member", req.params);
    });

    // quan ly khoa hoc
    this.server.get("/quan-ly/khoa-hoc", (req, res) => {
      this.app.render(req, res, "/manager/course/course");
    });
    this.server.get("/quan-ly/khoa-hoc/*", (req, res) => {
      this.app.render(req, res, "/manager/course/course");
    });

    // Quan ly lop hoc
    this.server.get("/quan-ly/lop-hoc", async (req, res, next) => {
      this.app.render(req, res, "/manager/class/class");
    });
    this.server.get("/quan-ly/lop-hoc/*", async (req, res, next) => {
      this.app.render(req, res, "/manager/class/class");
    });

    // Quan ly muc tin tuc
    this.server.get("/quan-ly/muc-tin-tuc", (req, res) => {
      this.app.render(req, res, "/manager/newsCategory/newsCategory");
    });
    this.server.get("/quan-ly/muc-tin-tuc/*", (req, res) => {
      this.app.render(req, res, "/manager/newsCategory/newsCategory");
    });

    // Quan ly tin tuc
    this.server.get("/quan-ly/tin-tuc", (req, res) => {
      this.app.render(req, res, "/manager/news/news");
    });
    this.server.get("/quan-ly/tin-tuc/*", (req, res) => {
      this.app.render(req, res, "/manager/news/news");
    });
    // Quan ly slider
    this.server.get("/quan-ly/slider", (req, res) => {
      this.app.render(req, res, "/manager/slider/slider");
    });
    this.server.get("/quan-ly/slider/*", (req, res) => {
      this.app.render(req, res, "/manager/slider/slider");
    });
    // Thiet lap
    this.server.get("/quan-ly/thiet-lap", (req, res) => {
      this.app.render(req, res, "/manager/setting/setting");
    });
    // Giao dien nguoi dung
    this.server.get("/bai-viet/:newsId", (req, res) => {
      this.app.render(req, res, "/post/post", { newsId: req.params.newsId });
    });
    this.server.get("/khoa-hoc/:slug", (req, res) => {
      this.app.render(req, res, "/course/course", { slug: req.params.slug });
    });
    this.server.get("/khoa-hoc", (req, res) => {
      this.app.render(req, res, "/allCourses/allCourses");
    });
    this.server.get("/hoc-vien", (req, res) => {
      this.app.render(req, res, "/member/member");
    });
    this.server.get("/gioi-thieu", (req, res) => {
      this.app.render(req, res, "/about/about");
    });
    this.server.get("/dang-nhap", (req, res) => {
      this.app.render(req, res, "/login/login", { type: "student" });
    });
    this.server.get("/dang-nhap/admin", (req, res) => {
      this.app.render(req, res, "/login/login", { type: "admin" });
    });
    this.server.get("/lien-he", (req, res) => {
      this.app.render(req, res, "/contact/contact");
    });
    this.server.get("/search", (req, res) => {
      this.app.render(req, res, "/searchResults/searchResults");
    });

    this.server.get("/chi-tiet-khoa-hoc", (req, res) => {
      this.app.render(req, res, "/courseDetails/courseDetails");
    });
    this.server.get("/chi-tiet-hoc-vien", (req, res) => {
      this.app.render(req, res, "/memberDetails/memberDetails");
    });
    this.server.get("404", (req, res) => {
      this.app.render(req, res, "/_error/_error");
    });
    this.server.get("/:categorySlug", (req, res) => {
      this.app.render(req, res, "/blog/blog", {
        categorySlug: req.params.categorySlug
      });
    });
    this.server.get("/:categorySlug/:newsSlug", (req, res) => {
      this.app.render(req, res, "/post/post", {
        newsSlug: req.params.newsSlug
      });
    });

    this.server.get("*", (req, res) => {
      this.app.render(req, res, "/_error/_error");
    });
  }
  getCacheKey(req) {
    return `${req.path}`;
  }

  async renderAndCache(req, res, pagePath) {
    const key = this.getCacheKey(req);

    // If we have a page in the cache, let's serve it
    if (ssrCache.has(key)) {
      //console.log(`serving from cache ${key}`);
      res.setHeader("x-cache", "HIT");
      res.send(ssrCache.get(key));
      return;
    }

    try {
      //console.log(`key ${key} not found, rendering`);
      // If not let's render the page into HTML
      const html = await this.app.renderToHTML(req, res, pagePath);

      // Something is wrong with the request, let's skip the cache
      if (res.statusCode !== 200) {
        res.send(html);
        return;
      }

      // Let's cache this page
      ssrCache.set(key, html);

      res.setHeader("x-cache", "MISS");
      res.send(html);
    } catch (err) {
      app.renderError(err, req, res, req.path, req.query);
    }
  }
  async initServer() {
    this.server.listen(this.port, err => {
      console.log("Server listening on port ", this.port);
    });
  }
}

const server = new Server();
