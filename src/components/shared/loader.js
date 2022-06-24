import React from 'react'
import loadgif from '../assets/loader.gif'

function Loader(children){
    return (
        <img src={loadgif} alt="Loading..." style={{
            width: '100vw',
            height: '80vh'
        }}/>
    )
}

export default Loader