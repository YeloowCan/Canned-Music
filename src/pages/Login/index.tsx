import axios from 'axios'
import React, { FC, useEffect } from 'react'
import { login } from '../../apis/login'
import style from '../../index.module.scss'

const Login: FC = () => {
  useEffect(() => {
    login('17262637724').then((res) => {
      console.log(res)
    })
    // login('17262637724', 'hhh').then((res) => {
    //   console.log(res)
    // })
  }, [])

  return <div className={style.app}>Loginddd</div>
}

export default Login
