import React from "react"
import FirePack from "../Fire.png"
import background4 from "../background4.jpg"

const Pack = () => {
    const handleHover = (x) => {
        // x.src = background4
        console.log(x)
    } 


    return (
        <>
            <img className="pack-art" src={FirePack} />
        </>
    )
}

export default Pack