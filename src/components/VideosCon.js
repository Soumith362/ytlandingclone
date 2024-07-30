import { Link } from "react-router-dom"
import VIDEOS_DATA from "../mockData/data"
import VideoBox from "./VideoBox"


const VideosCon = () => {
    return (
        <div className="grid-con">
            {VIDEOS_DATA.map((data) => <Link className="text-link" to={data.link}><VideoBox key={data.id} details={data} /></Link>)}
        </div>
    )
}

export default VideosCon