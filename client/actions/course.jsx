import { BaseAction } from "./base";
import { api } from "../services";

export class CourseAction extends BaseAction {
  constructor() {
    super("course", api.course, "courses");
  }
  getTimeTableOfCourse = (courseId, option = {}) => {
    return dispatch => {
      dispatch({
        type: `${this.name}_GET_TIME_TABLE_OF_COURSE_PENDING`
      });
      this.api
        .getTimeTableOfCourse(courseId, option)
        .then(res => {
          dispatch({
            type: `${this.name}_GET_TIME_TABLE_OF_COURSE_SUCCESS`,
            payload: res.result.object
          });
          return res;
        })
        .catch(error => {
          dispatch({
            type: `${this.name}_GET_TIME_TABLE_OF_COURSE_ERROR`,
            payload: error
          });
        });
    };
  };

  // getAllInfoOfCourse = (courseId) => {
  //     return dispatch => {
  //         dispatch({
  //             type: `${this.name}_GET_ALL_INFO_OF_COURSE_PENDING`
  //         })
  //         this.api.getTimeTableOfCourse(courseId)
  //             .then(res => {

  //                 dispatch({
  //                     type: `${this.name}_GET_ALL_INFO_OF_COURSE_SUCCESS`,
  //                     payload: res.result.object
  //                 })
  //                 return res
  //             })
  //             .catch(error => {
  //                 dispatch({
  //                     type: `${this.name}_GET_ALL_INFO_OF_COURSE_ERROR`,
  //                     payload: error
  //                 })
  //             })
  //     }
  // }
}
