import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function(SpecificComponent, option, adminRoute = null) {
    // option
    // null => 아무나 출입 가능
    // true => 로그인한 유저만 출입 가능
    // false => 로그인한 유저는 출입 불가능

    function AuthenticationCheck(props) {

        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth()).then(response => {
                console.log(response)

                // Not logged in
                if(!response.payload.isAuth) {
                    if (option) {
                        props.history.push('/login');
                    }
                } else {
                    // Logged in
                    if (adminRoute && !response.payload.isAdmin) {
                        props.history.push('/');
                    } else {
                        if (option === false) {
                            props.history.push('/');
                        }
                    }
                }
            })
        }, [])

        return (
            <SpecificComponent />
        )
    }

    return AuthenticationCheck
}