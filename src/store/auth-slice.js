import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { HOST } from "../utils/host";

export const AuthSlice = createSlice({
    name: "auth-slice",

    initialState: {
        signin: {
            status: null,
            token: null,
        },
        signup: {
            status: null,
        },
    },

    reducers: {
        setSignIn: (state, action) => {
            state.signin.status = action.payload.status;
            state.signin.token = action.payload.token;
        },
        setSignUp: (state, action) => {
            state.signup.status = action.payload.status;
        },
    },
});

export const SignUpThunk = (username, password, name, age, phone) => {
    return async (dispatch) => {
        dispatch(
            AuthActions.setSignUp({
                status: "fetching",
            })
        );

        const request = async () => {
            const response = await fetch(`/api/v1/signup`, {
                method: "POST",
                // credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    name: name,
                    age: age,
                    phoneNumber: phone,
                    roles: "ROLE_USER",
                }),
            });
            if (!response.ok) throw new Error("회원가입 실패");
            return response.json();
        };

        try {
            const data = await request();
            dispatch(
                AuthActions.setSignUp({
                    status: "success",
                })
            );
        } catch (err) {
            dispatch(
                AuthActions.setSignUp({
                    status: "failed",
                })
            );
        }
    };
};

export const SignInThunk = (id, pw) => {
    return async (dispatch) => {
        dispatch(
            AuthActions.setSignIn({
                status: "fetching",
                token: null,
            })
        );

        const request = async () => {
            const response = await fetch(`${HOST}/api/v1/login`, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    username: id,
                    password: pw,
                }),
            });
            if (!response.ok) throw new Error("로그인 실패");
            return response.headers();
        };

        try {
            console.log("req");
            const headers = await request();
            console.log(headers);

            dispatch(
                AuthActions.setSignIn({
                    status: "success",
                    data: data,
                })
            );
        } catch (err) {
            dispatch(
                AuthActions.setSignIn({
                    status: "failed",
                    data: null,
                })
            );
        }
    };
};

export const AuthActions = AuthSlice.actions;
