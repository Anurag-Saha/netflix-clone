import {  ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";


export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
      <video className="video" autoPlay progress controls src="https://videos.pexels.com/video-files/30442221/13045784_2560_1440_30fps.mp4" />
    </div>
  )
}


