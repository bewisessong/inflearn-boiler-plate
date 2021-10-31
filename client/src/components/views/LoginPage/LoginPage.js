import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

// 10/31(일) : 로그인 페이지 만들기
function LoginPage(props) {

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const dispatch = useDispatch();

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }

  const onSubmitHandler = (event) => {
    // preventDefault는 버튼을 누를 때마다 페이지가 Refresh되는 것을 막음
    event.preventDefault();

    //console.log('Email', Email);
    //console.log('Password', Password);

    let body = {
      email: Email,
      password: Password
    }

    // Redux 사용 시. loginUser는 clinet/_actions
    // Redux 사용하지않을 경우에는 loginUser 함수 내에 있는 axiso를 여기서 호출하면 된다
    dispatch(loginUser(body))
    .then(response => {
      if(response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert('Error');
      }
    });
  }

  return (
    /*
      state을 사용하여 email과 password 상태 변경
      -> useState으로 state 생성, input에 state을 value로 넣는다
      -> 여기까지만하면 input에 타이핑 불가
      -> onChange Func으로 변경될 때마다 state 업데이트 필요
    */
    <div style={ { display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh' }}>
      <form style={{ display:'flex', flexDirection:'column'}}
          onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <br />
        <button type="submit">
          Login
        </button>
      </form>

    </div>
  )
}

export default withRouter(LoginPage)