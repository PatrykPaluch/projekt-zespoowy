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
        if(response.status === 403)
            this.invalidateSession();
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

    static parents() {
        return this.get("/api/parents");
    }

    static children() {
        return this.get("/api/parents");
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

    static getStudent(id){
        return this.get(`/api/students/${id}`);
    }

    static getStudentTeachers(id){
        return this.get(`/api/students/${id}/teachers`);
    }

    static getTeacherSubject(idTeacher){
        return this.get(`/api/teachers/${idTeacher}/teacherSubject`);
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