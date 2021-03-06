import React, { Component } from 'react';
import * as moment from 'moment';

import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { api } from '../../../services';
import { action } from '../../../actions';
import { bindActionCreators } from 'redux';

import './slider.scss';
import {
  HeaderAdmin,
  Sidebar,
  AdminSidebar,
  SwitchRouter
} from '../../../components';

import { MainSlider } from './main/main';
import { AddSlider } from './add/add';
import { DetailSlider } from './detail/detail';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerAdmin: {
        avatar:
          'https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png',
        name: 'Avril Lavigne'
      },
      number: null
    };
  }

  static async getInitialProps({ req, query }) {
    return {
      number: Math.random()
    };
  }
  componentDidMount() {
    this.checkUserAlreadyLogin();
    this.fetchData();
  }
  fetchData() {
    this.props.fetchSlider({
      query: {
        limit: 0
      }
    });
    if (!this.props.setting.fetched) {
      this.props.fetchSetting();
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ number: Math.random() });
  }
  async checkUserAlreadyLogin() {
    const userType = localStorage.getItem('ut');
    const tokenExpiredAt = localStorage.getItem('exp');
    if (
      !userType ||
      !tokenExpiredAt ||
      moment(tokenExpiredAt).isBefore(moment()) ||
      userType !== 'admin'
    ) {
      Router.push('/dang-nhap/admin');
    }
  }
  render() {
    return (
      <div className="manager">
        <Head>
          <title>Quản lý slider</title>
          <meta name="robots" content="noindex" />
          <meta name="title" content="Quản lý slider" />
          <meta name="description" content="Quản lý slider" />
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
            <AdminSidebar logo={this.props.setting.logo} />
          </div>
          <div className="manager__body">
            <div key={this.state.number}>
              <SwitchRouter
                routes={[
                  {
                    path: '/quan-ly/slider',
                    component: <MainSlider {...this.props} />
                  },
                  {
                    path: '/quan-ly/slider/them',
                    component: <AddSlider {...this.props} />
                  },
                  {
                    path: '/quan-ly/slider/chi-tiet/:sliderId',
                    component: <DetailSlider {...this.props} />
                  }
                ]}
              />
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
      fetchSlider: action.slider.fetch,
      fetchSetting: action.setting.fetch
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider);
