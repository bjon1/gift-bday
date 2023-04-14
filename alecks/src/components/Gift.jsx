
import { useState } from 'react';

const Gift = () => {

    const [isClicked, setisClicked] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const click = isClicked ? 'click fade' : ' ';
    const hover = isHover ? 'hover' : ' ';

    const openGift = () => {
        console.log("clicked");
        setisClicked(!isClicked); //flips the state of the switch case, true for rotate and false for not rotate.
        setIsHover(false);
    }

    const hoverGift = () => {
        setIsHover(true);
    }

    const leaveGift = () => {
        setIsHover(false);
    }

    return(
        <div className={`gift ${click} ${hover}`} onClick={openGift} onMouseEnter={hoverGift} onMouseLeave={leaveGift}>
            <div className="gift_bow"></div>
            <div className="gift_box"></div>
            <div>
                <div className="gift_lid"></div>
                <div className="bow-left">
                    <div className="bow-left-inner"></div>
                </div>
                <div className="bow-right">
                    <div className="bow-right-inner"></div>
                </div>
            </div>
        </div>
    )
}

export default Gift;