'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const page = () => {
  const user = useSelector((state:RootState)=>state.auth.user)
  console.log('Redux user is ',user)
  return (
    <>
       <div>
        <h1>hello</h1>
       </div>
    </>
  )
}

export default page
