import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {

  // option null : 아무나 출입이 가능한 페이지
  // option true : 로그인한 유저만 출입이 가능한 페이지
  // option false : 로그인한 유저는 출입 불가능한 페이지
  // adminRoute : 관리자만 접근 가능한 페이지, 호출 시 true를 넣어준다

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then(response => {
        console.log(response)
      })
    }, [])

    return (
      <SpecificComponent />
    )
  }

  return AuthenticationCheck
}