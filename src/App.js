import React,{useState,useEffect} from "react";
import "./App.css";
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import FlipCameraIosIcon from '@mui/icons-material/FlipCameraIos';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import MicOffIcon from '@mui/icons-material/MicOff';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
// import StopWatch from "./StopWatch";


const App = () => {
  const [audioOnOff, setAudioOnOff] = useState(true);
  const [cameraFace, setCameraFace] = useState(true);
  const [cameraOnOff, setCameraOnOff] = useState(true);
  const [divCount, setDivCount] = useState(0);
  const [datetime,setDateTime] = useState(new Date());
  // const [time, setTime] = useState(0);
  // const [process, setIsProcess] = useState(false);

  useEffect(() => {
    
    var timer = setInterval(()=>setDateTime(new Date()), 1000 )

    return function cleanup() {
        clearInterval(timer)
    }    
  })

  const addDiv = () => {
    setDivCount(prevCount => prevCount + 1);
    
  };

  const deleteDiv = () => {
    setDivCount(prevCount => prevCount - 1);
  };

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  
  return (
  
    <div className="video-layout">
       {/* Survey id ,date,location */}
       <div className="heading">  
        <p>Survey Id: 11009210892</p>
        <p>Date : {date}</p>
        <p>Location : Chennai</p>
        </div>


        {/* add,delete  */}

        <div className="icons">
        <button onClick={addDiv}><AddIcon/></button>
        <button onClick={deleteDiv}><DeleteIcon/></button>
        </div>

        {/* inside layout icons */}
        <div className="grid-container">
        {[...Array(divCount)].map((_, index) => (
          <div className="grid-items" key={index}>
              <span className="container">
              <h2 align="center" className="time">{datetime.toLocaleTimeString()}</h2>
              <p>{index+1}</p>
              <p className="mute"><MicOffIcon/></p>
              </span>
           
          </div>
        ))}
          </div>

        {/* bottom icons */}
        <span className="footer"> 
        <p  onClick={() => { setAudioOnOff(!audioOnOff);  }}>
                {audioOnOff &&
                  <MicIcon/>
                }
                {!audioOnOff &&
                  <MicOffIcon/>
                }
        </p>
        <p  onClick={() => { setCameraFace(!cameraFace);  }}>
                {cameraFace &&
                  <VideocamIcon/>
                }
                {!cameraFace &&
                  <VideocamOffIcon/>
                }
        </p>
        <p  onClick={() => { setCameraOnOff(!cameraOnOff);  }}>
                {cameraOnOff &&
                  <FlipCameraIosIcon/>
                }
                {!cameraOnOff &&
                  <FlipCameraAndroidIcon/>
                }
        </p>
        <p>      
        <ScreenshotMonitorIcon/>
        </p>
        <p><PhoneDisabledIcon/></p>
        </span>
    </div>
 
  );
};

export default App;