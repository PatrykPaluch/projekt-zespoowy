import axios from "axios";
// axios.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
// }, function (error) {
//     if(error.response && error.response.status) {
//         return error.response;
//     }
//     // Do something with response error
//     return Promise.reject(error);
// });

const apiUrl = "http://localhost:8080"

export class Api {
    static invalidateSession(){
        console.log("403 Unauthorized");
        localStorage.removeItem('user');
        this.logout();
    }

    static logout(){
        return this.post("/api/auth/signout")
    }

    static checkStatus(response){
        //if(response.status === 403)
        //    this.invalidateSession();
    }

    static get(url) {
        return axios.get(apiUrl + url, {withCredentials: true})
            .then( response  => {
                this.checkStatus(response);
                return response;
            });
    }

    static post(url, body) {
        return axios.post(apiUrl + url, body, {withCredentials: true})
            .then( response  => {
                this.checkStatus(response);
                return response;
            });
    }

    static me() {
        return this.get("/api/@me");
    }

    static users() {
        return this.get("/api/users");
    }

    static parents() {
        return this.get("/api/parents");
    }

    static children() {
        return this.get("/api/children");
    }

    /*
    //kolejne funkcje w stylu
    static nazwaFunkcji() {
        return this.get("url")
    }
    // lub
    static nazwaFunkcji() {
        return this.post("url", {treść body})
    }

    // przykład: */
    static sendMessage(idReciever, messageTitle, messageContent) {
        return this.post("/api/messages", {
            idReceiver: idReciever,
            title: messageTitle,
            contents: messageContent
        });
    }

    static messages() {
        return this.get("/api/messages");
    }

    static getStudent(id){
        return this.get(`/api/students/${id}`);
    }

    static getStudentClass(id){
        return this.get(`/api/students/${id}`);
    }

    static getStudentTeachers(id){
        return this.get(`/api/students/${id}/teachers`);
    }

    static getTeacherSubject(idTeacher){
        return this.get(`/api/teachers/${idTeacher}/teacherSubject`);
    }


    static getAnnoucements(){
        return this.get(`/api/announcements`);
    }

    static getClassAnnoucements(){
        return this.get(`/api/announcements/class`);
    }

    //Callendar

    static getTimetableForClass(id){
        return this.get('/api/classes/'+id+'/timetable');
    }


    static getClasses(){
        return this.get('/api/classes');
    }

    static getSubjects(){
        return this.get('/api/subjects');
    }

    static addToClass(id, who){
        return this.post(`/api/classes/${id}/students`, {
            userIds: [who]
        });
    }

    static printErrResponse(err){
        if (err.response){
            console.error(`response status ${err.response.status}`)
            console.error(err.response.data.message)
            console.error(err.response.data)
        } else {
            console.error(err)
        }
    }

    static addTeacherSubject(subId, teachId){
        return this.post(`/api/teachersubject`, {
            subjectId: subId,
            teacherId: teachId
        })
    }

    static addChildToParent(parId, childId) {
        return this.post(`/api/parents/${parId}/children`, {
            userId: childId
        })
    }

    static getUserByPesel(pesel) {
        let urlParams = new URLSearchParams();
        urlParams.append("pesel", pesel);

        return this.get(`/api/users?` + urlParams.toString())
    }

}

/*
    Api.me().then(response => {
        //obsługa jeźeli wszystko poszło ok
        //response.status nadal może być różny od 200, więc coś poszło nie tak (po stronie frontu)
    }).catch(info => {
        //obsługa jeżeli coś się popsuło
    })

* */