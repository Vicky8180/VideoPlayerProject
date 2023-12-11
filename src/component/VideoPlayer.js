import React, { useState } from 'react'
import "./Total.css"
import VideoPlay from './Videos/VideoPlay'
import { useSelector } from 'react-redux';
export default function VideoPlayer() {
    const listData = useSelector((state) => state.SelectedVideo);
console.log(listData)
  return (
   <>

<div className='videoplayer-1'>

<div className='vp-1'> 
<VideoPlay   videoid={listData}/>
</div>


</div>

   </>
  )
}
