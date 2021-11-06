import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

function LandingPage(props) {
  
  // 10/27(수) : Axios 테스트 
  // useEffect(() => {
  //   axios.get('/api/hello')
  //   .then(response => console.log(response))
  // }, [])


  // 11/01(월) :로그아웃
  const onClickHandler = () => {
    axios.get('/api/users/logout')
         .then(response => {
           if(response.data.logoutSuccess) {
             props.history.push("/")
           }
           else {
             alert('로그아웃할 수 없습니다.')
           }
         })
  }
  
  return (
    <div style={ { display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh' }}>
      <h2>시작 페이지</h2>


      <button onClick={onClickHandler}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LandingPage)