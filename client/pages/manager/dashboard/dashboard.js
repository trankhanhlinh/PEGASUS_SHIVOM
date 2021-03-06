import * as React from 'react';
import * as moment from 'moment';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { api } from '../../../services';
import { action } from '../../../actions';
import { bindActionCreators } from 'redux';
import Swal from 'sweetalert2';

import './dashboard.scss';
import {
  Sidebar,
  HeaderAdmin,
  NumberAdmin,
  PieChart,
  LineChart,
  ColumnChart,
  Table,
  Activity,
  CustomSelect,
  FeedbackAdmin,
  AdminSidebar,
  Loading
} from '../../../components';
import GoogleMapReact from 'google-map-react';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerAdmin: {
        avatar:
          'https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png',
        name: 'Avril Lavigne'
      },
      numberAdmins: {
        isEmpty: true,
        isFetching: false,
        data: {
          onTime: {
            icon: '<i className="fas fa-id-card-alt"></i>',
            about: 'Đi đúng giờ',
            quantity: 0,
            colorIcon: 'rgba(75, 192, 192, 0.6)'
          },
          late: {
            icon: '<i className="fas fa-id-card-alt"></i>',
            about: 'Đi trễ',
            quantity: 0,
            colorIcon: 'rgba(255, 206, 86, 0.6)'
          },
          absent: {
            icon: '<i className="fas fa-id-card-alt"></i>',
            about: 'Vắng',
            quantity: 0,
            colorIcon: 'rgba(255, 99, 132, 0.6)'
          },
          redundant: {
            icon: '<i className="fas fa-id-card-alt"></i>',
            about: 'Đi thừa',
            quantity: 0,
            colorIcon: 'rgba(153, 102, 255, 0.6)'
          }
        }
      },
      customSelect: {
        placeholder: moment().year(),
        options: [2019, 2020, 2021, 2022, 2023],
        values: [2019, 2020, 2021, 2022, 2023]
      },
      birthday: {
        nameTable: 'Sinh nhật học viên',
        content: 'sắp tới ngày sinh'
      },
      newStudent: {
        nameTable: 'Học viên mới tham gia',
        content: 'vừa nhập học'
      },
      topPoint: {
        nameTable: 'Bảng xếp hạng tích điểm',
        content: null
      },
      feedbackAdmin: {
        nameTable: 'Phản hồi từ học viên',
        content: null
      },
      columnChartData: {
        labels: null,
        isFetching: false,
        isEmpty: true,
        datasets: [
          {
            label: 'Số học viên',
            data: null,
            backgroundColor: 'rgba(75, 192, 192, 0.6)'
          }
        ]
      },
      pieChartData: {
        labels: null,
        isFetching: false,
        isEmpty: true,
        datasets: [
          {
            data: null,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)'
            ]
          }
        ]
      },
      lineChartData: {
        labels: null,
        isEmpty: true,
        isFetching: false,
        datasets: [
          {
            label: 'Vắng học',
            fill: false,
            data: null,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 0.6)'
          },
          {
            label: 'Trễ giờ',
            fill: false,
            data: null,
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
            borderColor: 'rgba(255, 206, 86, 0.6)'
          },
          {
            label: 'Đúng giờ',
            fill: false,
            data: null,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 0.6)'
          },
          {
            label: 'Đi thừa',
            fill: false,
            data: null,
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
            borderColor: 'rgba(153, 102, 255, 0.6)'
          }
        ]
      }
    };

    this.updateIgnoreFeedbacks = this.updateIgnoreFeedbacks.bind(this);
    this.updateConfirmFeedbacks = this.updateConfirmFeedbacks.bind(this);
    this.filterByYear = this.filterByYear.bind(this);
  }

  static async getInitialProps({ req, query }) {
    return {};
  }

  filterByYear(value) {
    const startTime = moment()
      .year(value)
      .startOf('year')
      .format('YYYY-MM-DDTHH:mm:ss');

    const endTime = moment()
      .year(value)
      .endOf('year')
      .format('YYYY-MM-DDTHH:mm:ss');

    this.changeIsFetching(true);

    this.fetchDataFollowYear(startTime, endTime);
  }

  fetchDataFollowYear(startTime, endTime) {
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJfaWQiOiI1ZDQ4ZWM1ZmFiMGRhYTlkMmM0MDgwYzgiLCJleHBpcmVkQXQiOiIyMDE5LTA4LTI1VDIzOjE0OjA3KzA3OjAwIn0.ngV8I2vD652qTIwum2F4lTEx1brQ8TABgiOmVfY7v8M';

    this.props.fetchLineChart(
      null,
      'week',
      `${startTime}Z`,
      `${endTime}Z`,
      token
    );

    this.props.fetchPieChart(
      null,
      'year',
      `${startTime}Z`,
      `${endTime}Z`,
      token
    );

    this.props.fetchColumnChart(null, `${startTime}Z`, `${endTime}Z`, token);
  }

  fetchData() {
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJfaWQiOiI1ZDQ4ZWM1ZmFiMGRhYTlkMmM0MDgwYzgiLCJleHBpcmVkQXQiOiIyMDE5LTA4LTI1VDIzOjE0OjA3KzA3OjAwIn0.ngV8I2vD652qTIwum2F4lTEx1brQ8TABgiOmVfY7v8M';

    this.props.fetchBirthday({
      query: {
        endTime: `${moment()
          .endOf('year')
          .subtract(7, 'hours')
          .format('YYYY-MM-DDTHH:mm:ss')}Z`
      },
      headers: {
        'x-token': token
      }
    });

    this.props.fetchNewStudent({
      query: {
        filter: { status: 'active' },
        limit: 10,
        order: { createdAt: -1 }
      },
      headers: {
        'x-token': token
      }
    });

    this.props.fetchTopPoint({
      query: {
        filter: { status: 'active' },
        limit: 10,
        order: { point: -1 }
      },
      headers: {
        'x-token': token
      }
    });

    this.props.fetchFeedBack({
      query: {
        filter: { isReply: false },
        order: { createdAt: -1 },
        populates: ['student']
      },
      headers: {
        'x-token': token
      }
    });

    if (!this.props.setting.fetched) {
      this.props.fetchSetting();
    }
  }

  updateIgnoreFeedbacks(id, body) {
    this.props.updateIgnoreFeedbacks(id, body);
    this.forceUpdate();
  }

  updateConfirmFeedbacks(id, body) {
    this.props.updateConfirmFeedbacks(id, body);
    this.forceUpdate();
  }

  changeIsFetching(isFetching) {
    const newNumberAdmins = this.state.numberAdmins;
    const newPieChartData = this.state.pieChartData;
    const newColumnChartData = this.state.columnChartData;
    const newLineChartData = this.state.lineChartData;

    newNumberAdmins.isFetching = isFetching;
    newPieChartData.isFetching = isFetching;
    newColumnChartData.isFetching = isFetching;
    newLineChartData.isFetching = isFetching;

    this.setState({
      numberAdmins: newNumberAdmins,
      pieChartData: newPieChartData,
      columnChartData: newColumnChartData,
      lineChartData: newLineChartData
    });
  }

  handleScroll = () => {};

  componentWillUnmount() {}

  async componentDidMount() {
    this.checkUserAlreadyLogin();

    this.changeIsFetching(true);

    this.fetchDataFollowYear(
      moment()
        .startOf('year')
        .format('YYYY-MM-DD HH:mm:ss'),
      moment()
        .endOf('year')
        .format('YYYY-MM-DD HH:mm:ss')
    );

    this.fetchData();
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.statisticCourse.statisticForPieChart.fetching &&
      !this.props.statisticCourse.statisticForPieChart.fetching
    ) {
      const newNumberAdmins = prevState.numberAdmins;
      const newPieChartData = prevState.pieChartData;

      // Gán số lượng loại chuyên cần cho component admin
      newNumberAdmins.data.absent.quantity = this.props.statisticCourse.statisticForPieChart.data.totalAbsent;
      newNumberAdmins.data.late.quantity = this.props.statisticCourse.statisticForPieChart.data.totalLate;
      newNumberAdmins.data.onTime.quantity = this.props.statisticCourse.statisticForPieChart.data.totalOnTime;
      newNumberAdmins.data.redundant.quantity = this.props.statisticCourse.statisticForPieChart.data.totalRedundant;

      // Thống kê trên biểu đồ tròn
      newPieChartData.datasets[0].data = this.props.statisticCourse.statisticForPieChart.data.data;
      newPieChartData.labels = this.props.statisticCourse.statisticForPieChart.data.labels;

      newNumberAdmins.isEmpty = newPieChartData.isEmpty = this.props.statisticCourse.statisticForPieChart.data.isEmpty;
      newNumberAdmins.isFetching = newPieChartData.isFetching = this.props.statisticCourse.statisticForPieChart.fetching;

      this.setState({
        numberAdmins: newNumberAdmins,
        pieChartData: newPieChartData
      });
    }

    if (
      prevProps.students.statisticForColumnChart.fetching &&
      !this.props.students.statisticForColumnChart.fetching
    ) {
      const newColumnChartData = prevState.columnChartData;

      // Thống kê trên biểu đồ cột
      newColumnChartData.datasets[0].data = this.props.students.statisticForColumnChart.data.data;
      newColumnChartData.labels = this.props.students.statisticForColumnChart.data.labels;

      newColumnChartData.isEmpty = this.props.students.statisticForColumnChart.data.isEmpty;
      newColumnChartData.isFetching = this.props.students.statisticForColumnChart.fetching;

      this.setState({
        columnChartData: newColumnChartData
      });
    }

    if (
      prevProps.statisticCourse.statisticForLineChart.fetching &&
      !this.props.statisticCourse.statisticForLineChart.fetching
    ) {
      const newLineChartData = prevState.lineChartData;

      // Thông kê trên biểu đồ đường
      newLineChartData.datasets[0].data = this.props.statisticCourse.statisticForLineChart.data.dataAbsents;
      newLineChartData.datasets[1].data = this.props.statisticCourse.statisticForLineChart.data.dataLates;
      newLineChartData.datasets[2].data = this.props.statisticCourse.statisticForLineChart.data.dataOnTimes;
      newLineChartData.datasets[3].data = this.props.statisticCourse.statisticForLineChart.data.dataRedundants;

      newLineChartData.labels = this.props.statisticCourse.statisticForLineChart.data.labels;

      newLineChartData.isEmpty = this.props.statisticCourse.statisticForLineChart.data.isEmpty;
      newLineChartData.isFetching = this.props.statisticCourse.statisticForLineChart.fetching;

      this.setState({
        lineChartData: newLineChartData
      });
    }

    return true;
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
      <div className="dashboard">
        <Head>
          <title>Dashboard</title>
          <meta name="robots" content="noindex" />
          <meta name="title" content="Dashboard" />
          <meta
            name="description"
            content="Dashboard trung tâm yoga Hiệp Hòa"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </Head>
        <React.Fragment>
          <div className="background-overlay"></div>
          <div className="dashboard__header">
            <HeaderAdmin headerAdmin={this.state.headerAdmin}></HeaderAdmin>
          </div>
          <div className="dashboard__sidebar">
            <AdminSidebar logo={this.props.setting.logo} />
          </div>
          <div className="dashboard__body">
            <div className="dashboard__body__numbers">
              <NumberAdmin
                numberAdmin={this.state.numberAdmins.data.absent}
                isFetching={this.state.numberAdmins.isFetching}
                isEmpty={this.state.numberAdmins.isEmpty}
              ></NumberAdmin>

              <NumberAdmin
                numberAdmin={this.state.numberAdmins.data.late}
                isFetching={this.state.numberAdmins.isFetching}
                isEmpty={this.state.numberAdmins.isEmpty}
              ></NumberAdmin>

              <NumberAdmin
                numberAdmin={this.state.numberAdmins.data.onTime}
                isFetching={this.state.numberAdmins.isFetching}
                isEmpty={this.state.numberAdmins.isEmpty}
              ></NumberAdmin>

              <NumberAdmin
                numberAdmin={this.state.numberAdmins.data.redundant}
                isFetching={this.state.numberAdmins.isFetching}
                isEmpty={this.state.numberAdmins.isEmpty}
              ></NumberAdmin>
            </div>
            <div className="dashboard__body__card">
              <div className="dashboard__body__card__title">Thống kê</div>
              <div className="dashboard__body__card__content">
                <div className="dashboard__body__card__content__chart">
                  <div className="dashboard__body__card__content__chart__filter">
                    <CustomSelect
                      customSelect={this.state.customSelect}
                      filterByYear={this.filterByYear}
                    ></CustomSelect>
                  </div>
                  <div className="dashboard__body__card__content__chart__row">
                    <ColumnChart
                      columnChartData={this.state.columnChartData}
                      isFetching={this.state.columnChartData.isFetching}
                      isEmpty={this.state.columnChartData.isEmpty}
                    ></ColumnChart>

                    <PieChart
                      pieChartData={this.state.pieChartData}
                      isFetching={this.state.pieChartData.isFetching}
                      isEmpty={this.state.pieChartData.isEmpty}
                    ></PieChart>
                  </div>
                  <div className="dashboard__body__card__content__chart__row-single">
                    <LineChart
                      lineChartData={this.state.lineChartData}
                      isFetching={this.state.lineChartData.isFetching}
                      isEmpty={this.state.lineChartData.isEmpty}
                    ></LineChart>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard__body__feedback">
              <FeedbackAdmin
                feedbackAdmins={this.props.feedbacks.items}
                staticContent={this.state.feedbackAdmin}
                isFetching={this.props.feedbacks.fetching}
                isEmpty={this.props.feedbacks.items.length}
                updateIgnoreFeedbacks={this.updateIgnoreFeedbacks}
                updateConfirmFeedbacks={this.updateConfirmFeedbacks}
              ></FeedbackAdmin>
            </div>
            <div className="dashboard__body__activities">
              <Activity
                activities={this.props.students.itemsNewStudents.data}
                staticContent={this.state.newStudent}
                isFetching={this.props.students.itemsNewStudents.fetching}
                isEmpty={this.props.students.itemsNewStudents.data.length}
              ></Activity>

              <Activity
                activities={this.props.students.itemsTopPoint.data}
                staticContent={this.state.topPoint}
                isFetching={this.props.students.itemsTopPoint.fetching}
                isEmpty={this.props.students.itemsTopPoint.data.length}
              ></Activity>

              <Activity
                activities={this.props.students.itemsUpcommingBirthday.data}
                staticContent={this.state.birthday}
                isFetching={this.props.students.itemsUpcommingBirthday.fetching}
                isEmpty={this.props.students.itemsUpcommingBirthday.data.length}
              ></Activity>
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
      fetchLineChart: action.statisticCourse.fetchForLineChart,
      fetchPieChart: action.statisticCourse.fetchForPieChart,
      fetchColumnChart: action.student.fetchForColumnChart,
      fetchBirthday: action.student.fetchForUpcommingBirthday,
      fetchNewStudent: action.student.fetchForNewStudents,
      fetchTopPoint: action.student.fetchForTopPoint,
      fetchFeedBack: action.feedback.fetch,
      updateIgnoreFeedbacks: action.feedback.updateIgnoreFeedbacks,
      updateConfirmFeedbacks: action.feedback.updateConfirmFeedbacks,
      fetchSetting: action.setting.fetch
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
