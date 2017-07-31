import ActionTypes from './actionTypes';
import {database, courseApi} from '../api/Database';


export function createCourse(course) {
    return {type: ActionTypes.CREATE_COURSE, course};
}

// export function loadCoursesSuccess(courses) {
//     return {type: ActionTypes.LOAD_COURSES_SUCCESS, courses};
// }
//
// export function loadCourses() {
//     return function (dispatch) {
//         return courseApi.getAllCourses()
//             .then(courses => {
//                 dispatch(loadCoursesSuccess(courses))
//             }).catch(error => {
//                 throw(error);
//             });
//     };
// }
//
// export function getInvite() {
//     return dispatch => {
//         dispatch(getInviteRequestedAction());
//         return database.ref('/').once('value', snap => {
//             const invite = snap.val();
//             dispatch(getInviteFulfilledAction(invite))
//         })
//             .catch((error) => {
//                 console.log(error);
//                 dispatch(getInviteRejectedAction());
//             });
//     }
// }
//
// function getInviteRequestedAction() {
//     return {
//         type: ActionTypes.GetInviteRequested
//     };
// }
//
// function getInviteRejectedAction() {
//     return {
//         type: ActionTypes.GetInviteRejected
//     }
// }
//
// function getInviteFulfilledAction(invite) {
//     return {
//         type: ActionTypes.GetInviteFulfilled,
//         invite
//     };
// }