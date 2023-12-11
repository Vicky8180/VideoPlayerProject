import React from 'react'
import List from './List'
import VideoPlayer from "./VideoPlayer"
import "./Total.css"
import SearchVideo from './SearchVideo'
export default function FirstPage() {
  return (
    <>

<SearchVideo/>
<div className='main-1'>

<VideoPlayer/>
  <List/>
</div>




    </>
  )
}
