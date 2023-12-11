import './App.css';
import FirstPage from './component/FirstPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPlayer from './component/VideoPlayer';
function App() {
  return (
  <>
  <BrowserRouter>
        <Routes>
         

          <Route exact path='/' element={<FirstPage/>}/>
          <Route exact path='/videoplayer' element={<VideoPlayer/>}/>


        </Routes>
        
        </BrowserRouter>
  </>
  );
}

export default App;
