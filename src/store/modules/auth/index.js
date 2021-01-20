import * as types from "./mutation-types";
// import router from "@/router";

import { backendBase } from "@/common/backendAPI.js";

const LOGIN_URL = "token/";
const USER_URL = "users/";

const state = () => ({
    accessToken: localStorage.getItem("access_token") || null,
    refreshToken: localStorage.getItem("refresh_token") || null,
    user: "",
    userDetails: {}
});

const getters = {
    GET_userEmail(state) {
        return state.user.email;
    }
};

const mutations = {
    [types.LOGIN]: (state, payload) => {
        // localStorage.setItem('access_token', payload.access)
        // localStorage.setItem('refresh_token', payload.refresh)
        state.accessToken = payload.access;
        state.refreshToken = payload.refresh;
        state.user = payload.user;
    },
    [types.LOGOUT]: state => {
        // localStorage.removeItem('access_token')
        // localStorage.removeItem('refresh_token')
        state.accessToken = null;
        state.refreshToken = null;
        state.user = null;
    },
    [types.REFRESH]: (state, payload) => {
        state.accessToken = payload.access;
    },
    SET_userDetails: (state, payload) => {
        state.userDetails = payload;
    }
};

const actions = {
    async [types.LOGIN]({ commit }, payload) {
        return backendBase
            .post(LOGIN_URL, payload.credential)
            .then(response => {
                if (response.data.access) {
                    let loginPayload = {};
                    loginPayload.access = response.data.access;
                    loginPayload.refresh = response.data.refresh;
                    loginPayload.user = JSON.parse(
                        atob(response.data.access.split(".")[1])
                    );
                    loginPayload.user.authenticated = true;
                    console.log("Login Payload", loginPayload);
                    commit(types.LOGIN, loginPayload);
                }
            })
            .catch(e => {
                console.log(e);
            });
    },
    async [types.LOGOUT]({ commit }) {
        return commit(types.LOGOUT);
    },
    async [types.REFRESH]({ commit }) {
        return backendBase
            .post("api/token/refresh", {
                refresh: state.refreshToken
            })
            .then(response => {
                console.log("New Refresh Token");
                commit(types.REFRESH, response.data.access);
            })
            .catch(err => {
                console.log(err, "Error in Refresh Token");
            });
    },
    async getUserDetails({ commit }, payload) {
        return backendBase
            .get(USER_URL + payload)
            .then(response => {
                commit("SET_userDetails", response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
