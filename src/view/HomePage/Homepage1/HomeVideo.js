import { AiOutlinePlayCircle } from 'react-icons/ai'
import './HomeVideo.css'

function HomeVideo() {
    return (
        <>
            <section className="video">
                <div className="inner gradient_overlay">
                    <div className="container">
                        <div className="video_popup">
                            <a className="popup-vimeo" href="https://preview.eagle-themes.com/html/zante/videos/hero_video.mp4">
                                <AiOutlinePlayCircle  className="Iconvideo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeVideo