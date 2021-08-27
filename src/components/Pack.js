import React from "react"


const Pack = ({ pack , changePackDetails}) => {

    return (
        <>
          <img src={pack.art} className="pack-art" onClick={() => changePackDetails(pack)}/>
          <div className="pack-name"> {pack.name} </div>
        </>
    )
}

export default Pack