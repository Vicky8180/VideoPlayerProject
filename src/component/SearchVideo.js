import React, {useEffect, useState} from 'react'
import axios from "axios"
import "./Total.css"
import { useDispatch } from 'react-redux';
import { ListState } from './action';
export default function SearchVideo() {
    // const api_key = 'AIzaSyAqByub8RUO62_WnAk7yweQHJgWgGzJ-Ig';
    
    console.log(process.env.REACT_APP_api_key)
    
    const max_results = 10;
  

    const [search, setSearch]=useState();
const [ListData , setListData]= useState();
const dispatch = useDispatch();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_api_key}&part=snippet&q=${search}&type=video&maxResults=${max_results}`
          );
  
          const data = response.data;
          console.log(data)
          const updatedListData = data.items.map(item => ({
            video_id: item.id.videoId,
            title: item.snippet.title,
            thambnail: item.snippet.thumbnails.default.url
            ,
          }));
  
          setListData(updatedListData);

          console.log(ListData)
       
            dispatch(ListState(updatedListData));
       
         
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
  
      fetchData();
    }, [ search, max_results]);

    const handleInputChange = (e) => {
        setSearch(e.target.value);
      };

      console.log(search)



  return (
   <>

    <div className='searchvideo-1'>

   <div className='inputsearch'>  <input className='input-real' value={search}    onChange={handleInputChange} placeholder='search here'/></div>
   {/* <div className='searchbutton'> <button >Serach</button></div> */}

    </div>
   </>
  )
}




