import { Infoimage } from "./InfoPhoto"
import girl from '/images/girl.png'
import video from '/images/video.png'
import scale from '/images/scale.png'
import glass from '/images/glass.png'
import sklad from '/images/sklad.png'
import baselogo from '/images/baselogo.png'
export const InfoPhotosCards = () => {
    return (
        <div className="about-photos">
        <div className="about-photos-list">
                <Infoimage imgUrl={girl}/>
                <Infoimage imgUrl={video}/>
                <Infoimage imgUrl={scale}/>

        </div>
        <div className="about-photos-list">
                <Infoimage imgUrl={glass}/>
                <Infoimage imgUrl={sklad}/>
                <Infoimage imgUrl={baselogo}/>
        </div>
        </div>
    )
}