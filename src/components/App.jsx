import React from 'react';

import Header from './Header';
import Navigation from './Navigation';
import resumeAPI from '../resumeData'

const App = () => {
    const data = resumeAPI.getAll();
    return (
        <div>
            <Header data={data.main} />
            <Navigation />
        </div>
    )
}

export default App
