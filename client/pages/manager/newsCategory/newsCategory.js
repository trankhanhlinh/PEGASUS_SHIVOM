import React, { Component } from "react";

import Head from "next/head";
import Link from "next/link";
import { connect } from "react-redux";
import { api } from "../../../services";
import { action } from "../../../actions";
import { bindActionCreators } from 'redux'

import "./newsCategory.scss";
import {
    HeaderAdmin,
    Sidebar,
    AdminSidebar,
    SwitchRouter
} from "../../../components";

import { MainNewsCategory } from './main/main'
import { AddNewsCategory } from './add/add'
import { DetailNewsCategory } from "./detail/detail";

class NewsCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerAdmin: {
                avatar:
                    "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png",
                name: "Avril Lavigne"
            },
            number: null
        };
    }

    static async getInitialProps({ req, query }) {
        return {
            number: Math.random()
        }
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData() {
        this.props.fetchNewsCategory({
            query: {
                limit: 0
            },
            headers: {
                "x-token":
                    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJfaWQiOiI1ZDQ4ZWM1ZmFiMGRhYTlkMmM0MDgwYzgiLCJleHBpcmVkQXQiOiIyMDE5LTA4LTI1VDIzOjE0OjA3KzA3OjAwIn0.ngV8I2vD652qTIwum2F4lTEx1brQ8TABgiOmVfY7v8M"
            }
        })
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ number: Math.random() })
    }
    render() {
        return (
            <div className="manager">
                <Head>
                    <title>Quản lý mục tin tức</title>
                    <meta name="robots" content="noindex" />
                    <meta name="title" content="Quản lý lơp học" />
                    <meta
                        name="description"
                        content="Thêm khóa học tại trung tâm Yoga Hiệp Hòa"
                    />
                </Head>

                <React.Fragment>
                    <div className="background-overlay"></div>
                    <div className="manager__header">
                        <HeaderAdmin
                            sidebar={this.state.categories}
                            headerAdmin={this.state.headerAdmin}
                        ></HeaderAdmin>
                    </div>
                    <div className="manager__sidebar">
                        <AdminSidebar />
                    </div>
                    <div className="manager__body">
                        <div key={this.state.number}>
                            <SwitchRouter routes={
                                [
                                    { path: "/quan-ly/muc-tin-tuc", component: <MainNewsCategory {...this.props} /> },
                                    { path: "/quan-ly/muc-tin-tuc/them", component: <AddNewsCategory /> },
                                    { path: "/quan-ly/muc-tin-tuc/chi-tiet", component: <DetailNewsCategory /> }
                                ]
                            } />
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchNewsCategory: action.newCategory.fetch
        },
        dispatch
    );


export default connect(mapStateToProps, mapDispatchToProps)(NewsCategory);
