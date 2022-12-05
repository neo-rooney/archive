import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_actions";

export default function(SpecificComponent, option, adminRoute = null) {
    // null: 아무나 출입이 가능한 페이지
    // true: 로그인한 유저만 출입이 가능한 페이지
    // false: 로그인한 유저는 출입 불가능한 페이지
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(auth()).then(res => {
                if (!res.payload.isAuth) {
                    if (option) {
                        props.history.push("/login");
                    }
                } else {
                    if (adminRoute && !res.payload.isAdmin) {
                        props.history.push("/");
                    } else {
                        if (option === false) {
                            props.history.push("/");
                        }
                    }
                }
            });
        }, []);
        return <SpecificComponent />;
    }

    return AuthenticationCheck;
}
