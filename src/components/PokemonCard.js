import React from "react"


const PokemonCard = ({ roll }) => {
    return (
        <>
          {/* <img src={roll.image} /> */}
        <img className="pull-image" alt={roll.name} src={`https://play.pokemonshowdown.com/sprites/xyani/${roll.name.toLowerCase()}.gif`} />
        <div> {roll.name} </div>
        </>
    )
}

export default PokemonCard