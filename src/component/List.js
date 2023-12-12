
// import React, { useState, useEffect } from 'react';
// import "./Total.css";
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { SelectedVideo } from './action';
// export default function List() {

//   const listData = useSelector((state) => state.ListState);
// const navigate=useNavigate()
//   useEffect(() => {
//     console.log(listData);
//   }, [listData]);
// const dispatch=useDispatch();
//   const sendHandler = (item) => {
//     // navigate('/videoplayer', { state: { data: item } });

//     dispatch(SelectedVideo(item))
//   };
//   return (
//     <>
//       <div className='list-1'>
    
//         {listData.length > 0 ? 
//           listData.map((item, index) => (
//             <>
//             <button  key={index} onClick={() => sendHandler(item.video_id)}> 
//              <div key={index} className='list-2'>  
//                <div className='imgdiv'>  <img  alt="kk"/></div>
//               <div>{item.title}</div>
//             </div>
//             </button>
//             </>
          
//           ))
//           : <div>Loading</div>}
//       </div>
//     </>
//   );
// }


import React, { useEffect } from 'react';
import "./Total.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { SelectedVideo } from './action';

export default function List() {
  const listData = useSelector((state) => state.ListState);
  const dispatch = useDispatch();

  // useEffect will run whenever listData changes
  useEffect(() => {
    console.log(listData);
  }, [listData]);
  console.log(listData);

  const sendHandler = (item) => {
    // navigate('/videoplayer', { state: { data: item } });
    dispatch(SelectedVideo(item));
  };

  return (
    <>
      <div className='list-1'>
        {listData.length > 0 ? 
          listData.map((item, index) => (
            <button className='btnlist' key={index} onClick={() => sendHandler(item.video_id)}> 
              <div key={index} className='list-2'>  
                <div className='imgdiv'>  <img alt="kk"  src={item.thambnail}/></div>
                <div>{item.title}</div>
              </div>
            </button>
          ))
          : <div>Loading</div>}
      </div>
    </>
  );
}
