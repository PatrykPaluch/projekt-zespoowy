import axios from "axios";
import {Api} from "../apiHandler/apiHandler";


class AuthService {


    login(user) {
        const bodyFormData = new FormData();
        bodyFormData.append('login', user.pesel)
        bodyFormData.append('password', user.password)

        return axios({
            method: "post",
            url: "http://localhost:8080/api/auth/signin",
            data: bodyFormData,
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true
        })
            .then(function (response) {
                if (response.status === 200) {
                    Api.me()
                        .then(response=> {
                            localStorage.setItem('user', response.data)

                        })
                }
                console.log(response)
            })
            .catch(function (response) {
                console.log(response)
            })
    }
}