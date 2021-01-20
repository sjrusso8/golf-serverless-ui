import { ref } from "vue";
import { backendBase } from "@/common/backendAPI.js";

const LOGIN_URL = "token";
// const USER_URL = "users/";

export default function userAuth() {
    let accessToken = ref(localStorage.getItem("access_token") || null);
    let refreshToken = ref(localStorage.getItem("refresh_token") || null);
    let user = ref("");

    function getToken(credentials) {
        backendBase.post(LOGIN_URL, credentials)
            .then(response => {
                if (response.data.access) 
                {
                    accessToken.value = response.data.access;
                    refreshToken.value = response.data.refresh;
                    user.value = JSON.parse(
                        atob(response.data.access.split(".")[1])
                    );
                    console.log("Login Payload", response.data);
                }
            }
        )
    }
    return { accessToken, refreshToken, user, getToken }
}