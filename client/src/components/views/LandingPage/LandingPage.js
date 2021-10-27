import React, { useEffect } from 'react'
import axios from 'axios'

function LandingPage() {
  
  // 10/27(수) : Axios 테스트 
  useEffect(() => {
    axios.get('/api/hello')
    .then(response => console.log(response))
  }, [])

  return (
    <div>
      LandingPage
    </div>
  )
}

export default LandingPage