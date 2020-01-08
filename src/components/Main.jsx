import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './About';
import Description from './Description';
//let propsText;
const Main = (data) => {
    //console.log("date from Main: ",data.data.bio);
    let propsMain = data.data.main;
    let propsResume = data.data.resume
    return (
        <main>
            <Switch>
                <Route exact path='/' render={()=> <About {...{...propsMain}}/>}/>
                <Route exact path='/description' render={()=><Description {...propsResume}/>} />
            </Switch>
        </main>
    )
}

export default Main
