const next = require('next');
const path = require('path');
const LRUCache = require('lru-cache')
const express = require('express')

import * as cors from 'cors'
import * as mongoose from 'mongoose'
import * as morgan from 'morgan'
import * as bodyParser from 'body-parser'
import { config } from './config'

import api from './routers'


class Server {
    constructor() {
        this.dev = process.env.NODE_ENV === 'production' ? false : true;
        this.quiet = process.env.NODE_ENV === 'production' ? false : true;
        this.app = next({ dev: this.dev, dir: './client', quiet: this.quiet });
        this.handle = this.app.getRequestHandler();
        this.port = process.env.PORT || 3000;
        this.server = express();
        this.initDB();
        this.initMiddlewares();
        this.initView();
        this.initRoute();
        this.initStatisFolder();
        this.init();
    }
    dev: boolean
    quiet: boolean
    app: any
    handle: any
    port: any
    server: any

    async initDB() {
        mongoose.connect(config.database.mongo, {
            useNewUrlParser: true,
            useFindAndModify: false
        });
    }

    async initMiddlewares() {
        this.server.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
        this.server.use(bodyParser.urlencoded({ extended: false }));
        this.server.use(bodyParser.json());

    }
    async initRoute() {
        this.server.use('/api/*', cors())
        this.server.use('/api', api)
    }

    async initStatisFolder() {

    }
    async initView() {
        this.server.use(
            express.static(path.join(__dirname, "../client/assets"), {
                maxAge: 31557600000
            })
        );
        this.server.set('view engine', 'html');
    }

    async init() {
        this.app.prepare().then(() => {
            this.handleRequest();
            this.server.get('*', (req, res) => {
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
            this.app.render(req, res, "/manager/member/member");
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

    async initServer() {
        this.server.listen(this.port, (err) => {
            console.log('Server listening on port ', this.port);
        });
    }
}

const server = new Server();
