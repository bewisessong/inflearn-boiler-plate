import React, { useEffect } from 'react'
import axios from 'axios'

function LandingPage() {
  
  // 10/27(수) : Axios 테스트 
  useEffect(() => {
    axios.get('/api/hello')
    .then(response => console.log(response))
  }, [])

  return (
    <div style={ { display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh' }}>
      시작 페이지
    </div>
  )
}

export default LandingPage