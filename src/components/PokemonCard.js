import React from "react"


const PokemonCard = ({ roll }) => {
    setTimeout(3000)
    return (
        <>
          {/* <img src={roll.image} /> */}
        <img className="pull-image" alt={roll.name} src={`https://play.pokemonshowdown.com/sprites/xyani/${roll.name.toLowerCase()}.gif`} />
        <div> {roll.name} </div>
        </>
    )
}

export default PokemonCard