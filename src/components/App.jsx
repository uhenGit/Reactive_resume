import React from 'react';

import Header from './Header';
import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';
import resumeAPI from '../resumeData'


const App = () => {
    const data = resumeAPI.getAll();
    return (
        <div>
            <Header data={data.main} />
            <Navigation />
            <Main data={data}/>
            <Footer data={data.main}/>
        </div>
    )
}

export default App
