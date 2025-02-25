import {  ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";


export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
      <video className="video" autoPlay progress controls src="https://www.youtube.com/embed/p4sNVNL5xhc" />
    </div>
  )
}


