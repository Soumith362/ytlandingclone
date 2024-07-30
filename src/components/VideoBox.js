const VideoBox = ({ details }) => {

    const { videoTitle, channelName, videoStacts, timeStamps, id } = details

    return (
        <div className="video-con">
            <div className="thumbnail-con">
                <img src={"https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-" + id + ".webp"} />
                <div className="timeStamps">{timeStamps}</div>
            </div>
            <div className="info-con">
                <div className="channelIcon-con">
                    <img src={"https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-" + id + ".jpeg"} />
                </div>
                <div className="channel-info">
                    <p className="video-title">
                        {videoTitle}
                    </p>
                    <p className="channel-name">{channelName}</p>
                    <p className="video-stacts">{videoStacts}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoBox