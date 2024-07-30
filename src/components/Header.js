import hamburger from "../utils/icons/hamburger-menu.svg"
import youtubeLogo from "../utils/icons/youtube-logo.svg"
import upload from "../utils/icons/upload.svg"
import searchIcon from "../utils/icons/search.svg"
import voiceIcon from "../utils/icons//voice-search-icon.svg"
import youtubeApps from "../utils/icons/youtube-apps.svg"
import notifications from "../utils/icons/notifications.svg"
import profileImg from "../utils/images/my-channel.jpeg"

const Header = () => {
    return (
        <div className="header">
            <div className="left-section">
                <img className="hamburger-menu" src={hamburger} />
                <img className="youtube-logo" src={youtubeLogo} />
            </div>
            <div className="middle-section">
                <input className="input" placeholder="Search" />
                <button className="search-btn">
                    <img className="search-icon" src={searchIcon} />
                    <div className="toolTip">Search</div>
                </button>
                <button className="voice-btn">
                    <img className="voice-icon" src={voiceIcon} />
                    <div className="toolTip">Search with your voice</div>
                </button>
            </div>
            <div className="right-section">
                <div className="uploadIcon-con">
                    <img className="uploadIcon" src={upload} />
                    <div className="toolTip">Create</div>
                </div>
                <div className="appsIcon-con">
                    <img className="appsIcon" src={youtubeApps} />
                    <div className="toolTip">YouTube Apps</div>
                </div>
                <div className="notificationsIcon-con">
                    <img className="notificationsIcon" src={notifications} />
                    <div className="number">3</div>
                    <div className="toolTip">Notifications</div>
                </div>
                <img className="profileImg" src={profileImg} />
            </div>
        </div>
    )
}

export default Header