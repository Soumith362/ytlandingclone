import home from "../utils/icons/home.svg"
import explore from "../utils/icons/explore.svg"
import subscriptions from "../utils/icons/subscriptions.svg"
import originals from "../utils/icons/originals.svg"
import youtubeMusic from "../utils/icons/youtube-music.svg"
import library from "../utils/icons/library.svg"

const Sidebar = () => {
    return (
        <div className="sideBar">
            <div className="sidebar-link">
                <img src={home} />
                <p>Home</p>
            </div>
            <div className="sidebar-link">
                <img src={explore} />
                <p>Explore</p>
            </div>
            <div className="sidebar-link">
                <img src={subscriptions} />
                <p>Subscriptions</p>
            </div>
            <div className="sidebar-link">
                <img src={originals} />
                <p>Originals</p>
            </div>
            <div className="sidebar-link">
                <img src={youtubeMusic} />
                <p>YouTube Music</p>
            </div>
            <div className="sidebar-link">
                <img src={library} />
                <p>library</p>
            </div>
        </div>
    )
}

export default Sidebar