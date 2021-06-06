import axios from "axios";

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
        return axios.post(apiUrl + url, {withCredentials: true, body: body})
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
        return this.get(`/api/classes/{id}/timetable`);
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