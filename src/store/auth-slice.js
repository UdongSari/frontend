import { createSlice } from "@reduxjs/toolkit";
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
            const response = await fetch(`${HOST}/api/v1/signup`, {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },
                // credentials: "include",
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

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            username: id,
            password: pw,
        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };

        fetch(`${HOST}/api/v1/login`, requestOptions)
            .then((response) => {
                if (response.status === 401) {
                    throw new Error("아이디 혹은 비밀번호가 일치하지 않습니다");
                }
                return response.text();
            })
            .then((result) => {
                dispatch(
                    AuthActions.setSignIn({
                        status: "success",
                        token: result,
                    })
                );
            })
            .catch((error) => {
                dispatch(
                    AuthActions.setSignIn({
                        status: "failed",
                        token: null,
                    })
                );
            });
    };
};

export const AuthActions = AuthSlice.actions;
