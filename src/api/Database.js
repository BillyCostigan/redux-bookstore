// window.alert('okay');

import firebase from 'firebase';

const config = {
    apiKey: "AAAAB_qNdJ0:APA91bHU_exFrU0srWHyh10MaqEY843G73QAXDivQ2qGP7Hmj6U7fXUY1b7Z6rsCtjZmedc7h4KgPCTuyRgIfdn7HYhThH5YTJ9fFsKknz3S6se5Z83jw8nXE4YxM_O4ECtxkLEa1_6p",
    authDomain: "redux-bookstore-api.firebaseapp.com",
    databaseURL: "https://redux-bookstore-api.firebaseio.com",
    storageBucket: "redux-bookstore-api.appspot.com",
    messagingSenderId: "34268345501"
};

firebase.initializeApp(config);

const Database = firebase.database();


Database.ref('autorzy/0').set({
    autor: "dupa"
});

Database.ref('autorzy').once('value')
    .then(function(snapshot) {
        let authors = snapshot.val();
        console.log(authors);
    });



export default Database;

// class CourseApi {
//     static getAllCourses() {
//         // return new Promise((resolve, reject) => {
//         //     setTimeout(() => {
//         //         resolve(Object.assign([], courses));
//         //     }, 1000);
//         // });
//         return database.ref('/').once('value', snap => {
//             const invite = snap.val();
//             dispatch(getInviteFulfilledAction(invite))
//         })
//     }
// }
//
// export default CourseApi;