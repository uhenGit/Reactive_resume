import React, { Component } from 'react';
import {jsonKey} from '../key';

class Map extends Component {
    componentDidMount(){
        const script = document.createElement('script');
        script.src = process.env.PUBLIC_URL + '/sdk/tomtom.min.js';
        document.body.appendChild(script);
        script.async = true;
        script.onload = function () {
            window.tomtom.L.map('map', {
                source: 'vector',
                key: jsonKey.tomtomkey,
                center: [37.769167, -122.478468],
                basePath: '/sdk',
                zoom: 15
            })
        }
    }
    render() {
        return (
            <div id='map'>
                
            </div>
        )
    }
}
export default Map