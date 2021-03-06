// import * as React from 'react';
// import './timeTable.scss';
// import { HoverDivAnimation } from '../hoverDivAnimation/hoverDivAnimation';

// import * as _ from 'lodash';

// export class TimeTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentTab: 'all',
//       dayOfWeekMapping: [
//         'monday',
//         'tuesday',
//         'wednesday',
//         'thursday',
//         'friday',
//         'saturday',
//         'sunday'
//       ],
//       dayOfWeekVietnamese: [
//         'Thứ hai',
//         'Thứ ba',
//         'Thứ tư',
//         'Thứ năm',
//         'Thứ sáu',
//         'Thứ bảy',
//         'Chủ nhật'
//       ],
//       timeTableListData: {
//         monday: [],
//         tuesday: [],
//         wednesday: [],
//         thursday: [],
//         friday: [],
//         saturday: [],
//         sunday: []
//       },
//       timeTableData: {
//         first: {
//           monday: [],
//           tuesday: [],
//           wednesday: [],
//           thursday: [],
//           friday: [],
//           saturday: [],
//           sunday: []
//         },
//         second: {
//           monday: [],
//           tuesday: [],
//           wednesday: [],
//           thursday: [],
//           friday: [],
//           saturday: [],
//           sunday: []
//         },
//         third: {
//           monday: [],
//           tuesday: [],
//           wednesday: [],
//           thursday: [],
//           friday: [],
//           saturday: [],
//           sunday: []
//         },
//         fourth: {
//           monday: [],
//           tuesday: [],
//           wednesday: [],
//           thursday: [],
//           friday: [],
//           saturday: [],
//           sunday: []
//         }
//       }
//     };
//   }

//   componentDidMount() {
//     let timeTableData = {
//       first: {
//         monday: [],
//         tuesday: [],
//         wednesday: [],
//         thursday: [],
//         friday: [],
//         saturday: []
//       },
//       second: {
//         monday: [],
//         tuesday: [],
//         wednesday: [],
//         thursday: [],
//         friday: [],
//         saturday: []
//       },
//       third: {
//         monday: [],
//         tuesday: [],
//         wednesday: [],
//         thursday: [],
//         friday: [],
//         saturday: []
//       },
//       fourth: {
//         monday: [],
//         tuesday: [],
//         wednesday: [],
//         thursday: [],
//         friday: [],
//         saturday: []
//       }
//     };
//     let timeTableListData = {
//       monday: [],
//       tuesday: [],
//       wednesday: [],
//       thursday: [],
//       friday: [],
//       saturday: [],
//       sunday: []
//     };
//     const LAST_FIRST_HOUR = 360;
//     const LAST_SECOND_HOUR = 420;
//     const LAST_THIRD_HOUR = 1110;
//     const LAST_FOURTH_HOUR = 1200;
//     let timeTableItems = this.props.timeTables.forEach(timeTable => {
//       const courseName = timeTable.course.name;
//       const className = timeTable.class.name;
//       const classCode = timeTable.class.code;
//       let teacherName = timeTable.class.teacher
//         ? timeTable.class.teacher.firstName +
//           ' ' +
//           timeTable.class.teacher.lastName
//         : null;
//       const teacherNameArr = teacherName.split(' ');
//       teacherName = teacherNameArr
//         .slice(teacherNameArr.length - 2, teacherNameArr.length)
//         .join(' ');
//       timeTable.items.forEach(item => {
//         let data = [
//           <div
//             className={`time-table__table-events__class-info time-table__table-events__class-info-${timeTable.course._id} time-table__table-events__my-tooltip`}
//             key={item._id}
//           >
//             <div className="time-table__table-events__my-tooltip__content">
//               {item.endTime.number - item.startTime.number} phút
//               <i />
//             </div>
//             <a
//               className="time-table__table-events__class-info__class-name"
//               href="#"
//               title={item.topic}
//             >
//               {item.topic}
//             </a>
//             <div className="time-table__table-events__class-info__class-time">
//               {/* {item.startTime.hour}:
//               {item.startTime.minute === 0 ? "00" : item.startTime.minute} -{" "}
//               {item.endTime.hour}:
//               {item.endTime.minute === 0 ? "00" : item.endTime.minute} */}
//               {classCode}
//             </div>
//             <div className="time-table__table-events__class-info__class-teacher">
//               {teacherName}
//             </div>
//           </div>
//           // <hr className="divider" />
//         ];
//         let listItemData = (
//           <div
//             className={`time-table__list-events__event__class-info time-table__list-events__event__class-info-${timeTable.course._id}`}
//             key={item._id}
//           >
//             <a
//               href="#"
//               className="time-table__list-events__event__class-info__class-name"
//             >
//               {courseName} - {item.topic}
//             </a>
//             <div className="time-table__list-events__event__class-info__class-time">
//               {item.startTime.hour}:
//               {item.startTime.minute === 0 ? '00' : item.startTime.minute} -{' '}
//               {item.endTime.hour}:
//               {item.endTime.minute === 0 ? '00' : item.endTime.minute}
//             </div>
//           </div>
//         );
//         timeTableListData[item.dayOfWeek].push(listItemData);
//         if (item.endTime.number <= LAST_FIRST_HOUR) {
//           timeTableData.first[item.dayOfWeek].push(data);
//         } else if (item.endTime.number <= LAST_SECOND_HOUR) {
//           timeTableData.second[item.dayOfWeek].push(data);
//         } else if (item.endTime.number <= LAST_THIRD_HOUR) {
//           timeTableData.third[item.dayOfWeek].push(data);
//         } else {
//           timeTableData.fourth[item.dayOfWeek].push(data);
//         }
//       });
//     });
//     this.setState({ timeTableData, timeTableListData });
//   }
//   changeTab = tabId => {
//     this.setState({ currentTab: tabId });
//     if (tabId === 'all') {
//       $("div[class*='time-table__table-events__class-info-']").show();
//       $("div[class*='time-table__list-events__event__class-info-']").show();
//     } else {
//       //$(`div:not(.time-table__table-events__class-info-${tabId})`).hide()
//       $("div[class*='time-table__table-events__class-info-']")
//         .not($(`.time-table__table-events__class-info-${tabId}`))
//         .hide();
//       $(`.time-table__table-events__class-info-${tabId}`).show();
//       $("div[class*='time-table__list-events__event__class-info-']")
//         .not($(`.time-table__list-events__event__class-info-${tabId}`))
//         .hide();
//       $(`.time-table__list-events__event__class-info-${tabId}`).show();
//     }
//   };
//   render() {
//     return (
//       <div className="time-table">
//         <div className="time-table__tabs">
//           <ul>
//             <li
//               onClick={() => {
//                 return this.changeTab('all');
//               }}
//               className={`time-table__tabs__active`}
//             >
//               <HoverDivAnimation title="Tất cả" />
//             </li>
//             {this.props.courses.items.map(course => {
//               return (
//                 <li
//                   onClick={() => {
//                     return this.changeTab(course._id);
//                   }}
//                   key={course._id}
//                 >
//                   <HoverDivAnimation title={course.name} />
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//         <div className="time-table__list-events">
//           {this.state.dayOfWeekMapping.map((dayOfWeek, index) => {
//             return (
//               <div className="time-table__list-events__event" key={index}>
//                 <div className="time-table__list-events__event__date">
//                   {this.state.dayOfWeekVietnamese[Number(index)]}
//                 </div>
//                 {this.state.timeTableListData[dayOfWeek].map(item => {
//                   return item;
//                 })}
//               </div>
//             );
//           })}
//         </div>
//         <div className="time-table__table-events">
//           <div className="time-table__table-events__background" />
//           <table>
//             <thead>
//               <tr>
//                 <th>Thời gian</th>
//                 <th>Thứ hai</th>
//                 <th>Thứ ba</th>
//                 <th>Thứ tư</th>
//                 <th>Thứ năm</th>
//                 <th>Thứ sáu</th>
//                 <th>Thứ bảy</th>
//                 <th>Chủ nhật</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>
//                   <div className="time-table__table-events__class-time">
//                     5h00 - 6h00
//                   </div>
//                 </td>
//                 {this.state.dayOfWeekMapping.map(dayOfWeek => {
//                   return (
//                     <td key={dayOfWeek}>
//                       {this.state.timeTableData.first[dayOfWeek]}
//                     </td>
//                   );
//                 })}
//               </tr>
//               <tr>
//                 <td>
//                   <div className="time-table__table-events__class-time">
//                     6h00 - 7h00
//                   </div>
//                 </td>
//                 {this.state.dayOfWeekMapping.map(dayOfWeek => {
//                   return (
//                     <td key={dayOfWeek}>
//                       {this.state.timeTableData.second[dayOfWeek]}
//                     </td>
//                   );
//                 })}
//               </tr>
//               <tr>
//                 <td>
//                   <div className="time-table__table-events__class-time">
//                     17h30 - 18h30
//                   </div>
//                 </td>
//                 {this.state.dayOfWeekMapping.map(dayOfWeek => {
//                   return (
//                     <td key={dayOfWeek}>
//                       {this.state.timeTableData.third[dayOfWeek]}
//                     </td>
//                   );
//                 })}
//               </tr>
//               <tr>
//                 <td>
//                   <div className="time-table__table-events__class-time">
//                     19h00 - 20h00
//                   </div>
//                 </td>
//                 {this.state.dayOfWeekMapping.map(dayOfWeek => {
//                   return (
//                     <td key={dayOfWeek}>
//                       {this.state.timeTableData.fourth[dayOfWeek]}
//                     </td>
//                   );
//                 })}
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// }

import * as React from "react";
import "./timeTable.scss";
import { HoverDivAnimation } from "../hoverDivAnimation/hoverDivAnimation";

import * as _ from "lodash";

export class TimeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "all",
      dayOfWeekMapping: [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday"
      ],
      dayOfWeekVietnamese: [
        "Thứ hai",
        "Thứ ba",
        "Thứ tư",
        "Thứ năm",
        "Thứ sáu",
        "Thứ bảy",
        "Chủ nhật"
      ],
      timeTableListData: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: []
      },
      timeTableData: {
        morning: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: []
        },
        afternoon: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: []
        },
        night: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: []
        }
      }
    };
  }
  componentDidMount() {
    let timeTableData = {
      morning: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: []
      },
      afternoon: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: []
      },
      night: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: []
      }
    };
    let timeTableListData = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    };
    const LAST_MORNING_HOUR = 720;
    const LAST_AFTERNOON_HOUR = 1080;
    let timeTableItems = this.props.timeTables.forEach(timeTable => {
      const courseName = timeTable.course.name;
      const className = timeTable.class.name;
      const classCode = timeTable.class.code;
      let teacherName = timeTable.class.teacher
        ? timeTable.class.teacher.firstName +
        ' ' +
        timeTable.class.teacher.lastName
        : null;
      const teacherNameArr = teacherName.split(' ');
      teacherName = teacherNameArr
        .slice(teacherNameArr.length - 2, teacherNameArr.length)
        .join(' ');
      timeTable.items.forEach(item => {
        let data = [
          <div
            className={`time-table__table-events__class-info time-table__table-events__class-info-${timeTable.course._id} time-table__table-events__my-tooltip`}
            key={item._id}
          >
            <div className="time-table__table-events__my-tooltip__content">
              {item.endTime.number - item.startTime.number} phút
              <i />
            </div>
            <a
              className="time-table__table-events__class-info__class-name"
              href="#"
              title={item.topic}
            >
              {item.topic}
            </a>
            <div className="time-table__table-events__class-info__class-time">
              {/* {item.startTime.hour}:
              {item.startTime.minute === 0 ? "00" : item.startTime.minute} -{" "}
              {item.endTime.hour}:
              {item.endTime.minute === 0 ? "00" : item.endTime.minute} */}
              {classCode}
            </div>
            <div className="time-table__table-events__class-info__class-teacher">
              {teacherName}
            </div>
          </div>
          // <hr className="divider" />
        ];
        let listItemData = (
          <div
            className={`time-table__list-events__event__class-info time-table__list-events__event__class-info-${timeTable.course._id}`}
            key={item._id}
          >
            <a
              href="#"
              className="time-table__list-events__event__class-info__class-name"
            >
              {courseName}
            </a>
            <div className="time-table__list-events__event__class-info__class-time">
              {item.startTime.hour}:
              {item.startTime.minute === 0 ? "00" : item.startTime.minute} -{" "}
              {item.endTime.hour}:
              {item.endTime.minute === 0 ? "00" : item.endTime.minute}
            </div>
          </div>
        );
        timeTableListData[item.dayOfWeek].push(listItemData);
        if (item.endTime.number < LAST_MORNING_HOUR) {
          timeTableData.morning[item.dayOfWeek].push(data);
        } else if (item.endTime.number < LAST_AFTERNOON_HOUR) {
          timeTableData.afternoon[item.dayOfWeek].push(data);
        } else {
          timeTableData.night[item.dayOfWeek].push(data);
        }
      });
    });
    this.setState({ timeTableData, timeTableListData });
  }
  changeTab = tabId => {
    this.setState({ currentTab: tabId });
    if (tabId === "all") {
      $("div[class*='time-table__table-events__class-info-']").show();
      $("div[class*='time-table__list-events__event__class-info-']").show();
    } else {
      //$(`div:not(.time-table__table-events__class-info-${tabId})`).hide()
      $("div[class*='time-table__table-events__class-info-']")
        .not($(`.time-table__table-events__class-info-${tabId}`))
        .hide();
      $(`.time-table__table-events__class-info-${tabId}`).show();
      $("div[class*='time-table__list-events__event__class-info-']")
        .not($(`.time-table__list-events__event__class-info-${tabId}`))
        .hide();
      $(`.time-table__list-events__event__class-info-${tabId}`).show();
    }
  };
  render() {
    return (
      <div className="time-table">
        <div className="time-table__tabs">
          <ul>
            <li
              onClick={() => {
                return this.changeTab("all");
              }}
              className={`time-table__tabs__active`}
            >
              <HoverDivAnimation title="Tất cả" />
            </li>
            {this.props.courses.items.map(course => {
              return (
                <li
                  onClick={() => {
                    return this.changeTab(course._id);
                  }}
                  key={course._id}
                >
                  <HoverDivAnimation title={course.name} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="time-table__list-events">
          {this.state.dayOfWeekMapping.map((dayOfWeek, index) => {
            return (
              <div className="time-table__list-events__event" key={index}>
                <div className="time-table__list-events__event__date">
                  {this.state.dayOfWeekVietnamese[Number(index)]}
                </div>
                {this.state.timeTableListData[dayOfWeek].map(item => {
                  return item;
                })}
              </div>
            );
          })}
        </div>
        <div className="time-table__table-events">
          <div className="time-table__table-events__background" />
          <table>
            <thead>
              <tr>
                <th>Thời gian</th>
                <th>Thứ hai</th>
                <th>Thứ ba</th>
                <th>Thứ tư</th>
                <th>Thứ năm</th>
                <th>Thứ sáu</th>
                <th>Thứ bảy</th>
                <th>Chủ nhật</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="time-table__table-events__class-time">
                    Buổi sáng
                  </div>
                </td>
                {this.state.dayOfWeekMapping.map(dayOfWeek => {
                  return (
                    <td key={dayOfWeek}>
                      {this.state.timeTableData.morning[dayOfWeek]}
                    </td>
                  );
                })}

              </tr>
              <tr>
                <td>
                  <div className="time-table__table-events__class-time">
                    Buổi chiều
                  </div>
                </td>
                {this.state.dayOfWeekMapping.map(dayOfWeek => {
                  return (
                    <td key={dayOfWeek}>
                      {this.state.timeTableData.afternoon[dayOfWeek]}
                    </td>
                  );
                })}

              </tr>
              <tr>
                <td>
                  <div className="time-table__table-events__class-time">
                    Buổi tối
                  </div>
                </td>
                {this.state.dayOfWeekMapping.map(dayOfWeek => {
                  return (
                    <td key={dayOfWeek}>
                      {this.state.timeTableData.night[dayOfWeek]}
                    </td>
                  );
                })}

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
