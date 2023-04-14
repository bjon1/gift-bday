
import { useState } from 'react';

const Gift = ({update}) => {

    const [isClicked, setisClicked] = useState(false);

    const click = isClicked ? 'click fade' : ' ';

    const openGift = () => {
        console.log("clicked");
        update();
        setisClicked(true); //flips the state of the switch case, true for rotate and false for not rotate.
    }

    return(
        <div className={`gift ${click}`} onClick={openGift}>
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