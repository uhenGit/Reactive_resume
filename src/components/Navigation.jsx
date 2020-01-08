import React, {useState} from "react";
import { Link } from "react-router-dom";
//let bio;
const Navigation = () => {
    const [aboutState, changeStateOnce] = useState(true);
    //const [descriptionState, changeStateTwice] = useState(false);
    const changeStateEvent = () => changeStateOnce(!aboutState);
    // let bio = data.data;
    // console.log(typeof bio);
    
    return (
            <nav>
                <ul className='wrap flex'>
                    <li>
                        <Link to="/" className={aboutState?"disabledLink":null} onClick={changeStateEvent}>About</Link>
                    </li>
                    <li>
                        <Link to="/description" className={!aboutState?"disabledLink":null} onClick={changeStateEvent}>Description</Link>
                    </li>
                </ul>
            </nav>    
    );
};

export default Navigation;
