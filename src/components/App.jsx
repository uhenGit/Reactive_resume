import React, {useState} from 'react';

import Header from './Header';
import Navigation from './Navigation';
import Main from './Main';
import Map from './Map';
import Footer from './Footer';
import resumeAPI from '../resumeData'


const App = () => {
    const [toggleMap, setToggleMap] = useState(false);
    const data = resumeAPI.getAll();
    const changeToggle = () => setToggleMap(!toggleMap);
    return (
        <div>
            <Header data={data.main} />
            <Navigation />
            <button onClick={changeToggle}>Show map</button>
            {toggleMap?<Map/>:null}
            <Main data={data}/>
            <Footer data={data.main}/>
        </div>
    )
}

export default App
