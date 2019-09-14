import React, { Component } from "react";

import Head from "next/head";
import Link from "next/link";
import { connect } from "react-redux";
import { api } from "../../services";
import { action } from "../../actions";

import "./addCourse.scss";
import {
  HeaderAdmin,
  Sidebar,
  NewCourseInfo,
  StepsLine,
  TinymceEditor,
  ReviewAddCourse
} from "../../components";
import { AddCourseBenefitsModal } from "./components/addCourseBenefitsModal/addCourseBenefitsModal";

class AddCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerAdmin: {
        avatar:
          "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png",
        name: "Avril Lavigne"
      },
      categories: [
        {
          name: "trang chủ",
          linkHref: "/home/home",
          linkAs: "/",
          key: "home"
        },
        {
          name: "khoá học",
          key: "course",
          subCategories: []
        },
        {
          name: "tin tức",
          key: "news",
          subCategories: [
            {
              name: "khoá học môt",
              linkHref: "/blog/blog?categorySlug=khoa-hoc-not",
              linkAs: "/khoa-hoc-mot"
            },
            {
              name: "khoá học hai",
              linkHref: "/home/home",
              linkAs: "/"
            },
            {
              name: "khoá học ba",
              linkHref: "/home/home",
              linkAs: "/"
            }
          ]
        },
        {
          name: "về chúng tôi",
          linkHref: "/contact/contact",
          linkAs: "/lien-he",
          key: "about"
        }
      ],
      pages: ["newCourseInfo", "tinymceEditor", "reviewAddCourse"],
      curPageNumber: 1,
      isShowAddCourseBenefitsModal: false,
      courseBenefits: []
    };
    this.hideAddCourseBenefitsModal = this.hideAddCourseBenefitsModal.bind(
      this
    );
    this.showAddCourseBenefitsModal = this.showAddCourseBenefitsModal.bind(
      this
    );
    this.addCourseBenefits = this.addCourseBenefits.bind(this);
    this.openPage = this.openPage.bind(this);
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
  }

  openPage = function(pageNumber) {
    var i, page, stepBtns;
    page = document.getElementsByClassName(
      "addCourse__body__card__content__info"
    );
    for (i = 0; i < page.length; i++) {
      page[i].style.display = "none";
    }
    stepBtns = document.getElementsByClassName("stepsLine__btn");
    for (i = 0; i < stepBtns.length; i++) {
      stepBtns[i].style.backgroundColor = "#e1f2f4";
      stepBtns[i].style.color = "#00a3af";
    }
    document.getElementById(this.state.pages[pageNumber - 1]).style.display =
      "block";
    $(".stepsLine__btn-" + pageNumber).css({
      backgroundColor: "#00a3af",
      color: "#fff"
    });
    this.setState({ curPageNumber: pageNumber });
    if (pageNumber == 1) {
      $(".addCourse__body__card__buttons__btn-previous").attr("disabled", true);
    }
  };

  handleClickPrevious = function() {
    let curPageNumber = this.state.curPageNumber - 1;
    if (curPageNumber > 1) {
      this.setState({ curPageNumber });
      this.openPage(curPageNumber);
    } else if (curPageNumber == 1) {
      this.setState({ curPageNumber });
      this.openPage(curPageNumber);
      $(".addCourse__body__card__buttons__btn-previous").attr("disabled", true);
    }
    $(".addCourse__body__card__buttons__btn-next").html(
      "Tiếp theo<i class='fas fa-chevron-right'></i>"
    );
  };

  handleClickNext = function() {
    let curPageNumber = this.state.curPageNumber + 1;
    if (curPageNumber < this.state.pages.length) {
      this.setState({ curPageNumber });
      this.openPage(curPageNumber);
      $(".addCourse__body__card__buttons__btn-previous").attr(
        "disabled",
        false
      );
    } else if (curPageNumber == this.state.pages.length) {
      this.setState({ curPageNumber });
      this.openPage(curPageNumber);
      $(".addCourse__body__card__buttons__btn-next").text("Xác nhận");
    }
  };

  addCourseBenefits = function(body) {
    let benefits = this.state.courseBenefits.slice();
    benefits.push(body);
    this.setState({ courseBenefits: benefits });
  };

  static async getInitialProps({ req, query }) {
    return {};
  }

  hideAddCourseBenefitsModal() {
    this.setState({ isShowAddCourseBenefitsModal: false });
  }
  showAddCourseBenefitsModal() {
    this.setState({ isShowAddCourseBenefitsModal: true });
  }

  async componentDidMount() {
    if (this.props.courses.items.length > 0) {
      const courseCategoryIndex = this.state.categories.findIndex(item => {
        return item.key === "course";
      });
      const subCategories = this.props.courses.items.map(item => {
        return {
          name: item.name,
          linkHref: `/course/course?slug=${item.slug}`,
          linkAs: `/khoa-hoc/${item.slug}`
        };
      });
      this.state.categories[courseCategoryIndex].subCategories = subCategories;
      this.setState({ categories: this.state.categories });
    }
    if (this.props.newCategories.items.length > 0) {
      const newCategoryIndex = this.state.categories.findIndex(item => {
        return item.key === "news";
      });
      const subCategories = this.props.newCategories.items.map(item => {
        return {
          name: item.name,
          linkHref: `/blog/blog?categorySlug=${item.slug}`,
          linkAs: `/${item.slug}`
        };
      });
      this.state.categories[newCategoryIndex].subCategories = subCategories;
      this.setState({ categories: this.state.categories });
    }

    var heightOfHeader = $(
      ".addCourse .addCourse__header .headerAdmin__wrapper"
    ).height();
    $(".addCourse .addCourse__body").css("margin-top", heightOfHeader + "px");
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.courses.items.length === 0 &&
      this.props.courses.items.length > 0
    ) {
      const courseCategoryIndex = this.state.categories.findIndex(item => {
        return item.key === "course";
      });
      const subCategories = this.props.courses.items.map(item => {
        return {
          name: item.name,
          linkHref: `/course/course?slug=${item.slug}`,
          linkAs: `/khoa-hoc/${item.slug}`
        };
      });
      this.state.categories[courseCategoryIndex].subCategories = subCategories;
      this.setState({ categories: this.state.categories });
    }
    if (
      prevProps.newCategories.items.length === 0 &&
      this.props.newCategories.items.length > 0
    ) {
      const newCategoryIndex = this.state.categories.findIndex(item => {
        return item.key === "news";
      });
      const subCategories = this.props.newCategories.items.map(item => {
        return {
          name: item.name,
          linkHref: `/blog/blog?categorySlug=${item.slug}`,
          linkAs: `/${item.slug}`
        };
      });
      this.state.categories[newCategoryIndex].subCategories = subCategories;
      this.setState({ categories: this.state.categories });
    }
  }

  render() {
    return (
      <div className="addCourse">
        <AddCourseBenefitsModal
          show={this.state.isShowAddCourseBenefitsModal}
          hideModal={this.hideAddCourseBenefitsModal}
          addCourseBenefits={this.addCourseBenefits}
        />

        <Head>
          <title>Thêm khoá học</title>
          <meta name="title" content="Thêm khóa học" />
          <meta
            name="description"
            content="Thêm khóa học tại trung tâm Yoga Hiệp Hòa"
          />
        </Head>

        <React.Fragment>
          <div className="background-overlay"></div>
          <div className="addCourse__header">
            <HeaderAdmin
              sidebar={this.state.categories}
              headerAdmin={this.state.headerAdmin}
            ></HeaderAdmin>
          </div>
          <div className="addCourse__sidebar">
            <Sidebar sidebar={this.state.categories}></Sidebar>
          </div>
          <div className="addCourse__body">
            <div className="addCourse__body__card">
              <div className="addCourse__body__card__title">Thêm khóa học</div>
              <div className="addCourse__body__card__content">
                <div className="addCourse__body__card__content__steps">
                  <StepsLine
                    stepQuantity={this.state.pages.length}
                    pages={this.state.pages}
                    openPage={this.openPage}
                  ></StepsLine>
                </div>
                <div
                  id="newCourseInfo"
                  className="addCourse__body__card__content__info animated
                  fadeIn"
                >
                  <NewCourseInfo
                    courseBenefits={this.state.courseBenefits}
                    showAddCourseBenefitsModal={this.showAddCourseBenefitsModal}
                  />
                </div>
                <div
                  id="tinymceEditor"
                  className="addCourse__body__card__content__info animated
                  fadeIn"
                >
                  <TinymceEditor></TinymceEditor>
                </div>
                <div
                  id="reviewAddCourse"
                  className="addCourse__body__card__content__info animated
                  fadeIn"
                >
                  <ReviewAddCourse />
                </div>
              </div>
              <div className="addCourse__body__card__buttons">
                <button
                  className="addCourse__body__card__buttons__btn addCourse__body__card__buttons__btn-previous"
                  onClick={this.handleClickPrevious}
                >
                  <i className="fas fa-chevron-left"></i>Quay lại
                </button>
                <button
                  className="addCourse__body__card__buttons__btn addCourse__body__card__buttons__btn-next"
                  onClick={this.handleClickNext}
                >
                  Tiếp tục<i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
            {/* <div className="addCourse__body__card">
              <div className="addCourse__body__card__title">Thêm khóa học</div>
              <div className="addCourse__body__card__content">
                <div className="addCourse__body__card__content__steps">
                  <StepsLine></StepsLine>
                </div>
                <div className="addCourse__body__card__content__info">
                  <TinymceEditor></TinymceEditor>
                </div>
              </div>
            </div>
            <div className="addCourse__body__card">
              <div className="addCourse__body__card__title">Thêm khóa học</div>
              <div className="addCourse__body__card__content">
                <div className="addCourse__body__card__content__steps">
                  <StepsLine></StepsLine>
                </div>
                <div className="addCourse__body__card__content__info">
                  <ReviewAddCourse />
                </div>
              </div>
            </div> */}
          </div>
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(AddCourse);