import React, { useState } from "react";
import { Grid } from '@material-ui/core';
import PokemonCard from './PokemonCard';


const PackView = ({ selectedPack, changePackDetails }) => {

    const [rolls, setRolls] = useState([])
    const [rollsView, setRollsView] = useState(false)

    const rollPack = () => {
        const obj = {
            pack_id: selectedPack.id
        }

        fetch("http://localhost:5000/packs/roll_pack", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        }).then(r => r.json())
        .then(data => setRolls(data))
        setRollsView(!rollsView)


    }
    return(
        <>
            { !rollsView ?
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    id="pack-view-main-container"
                    >
                    <Grid 
                        item 
                        xs
                        textAlign="center"
                        className="pack-view-image-container"
                        >
                        <img src={selectedPack.art} id="pack-view-image" />
                    </Grid>

                    <Grid 
                        item 
                        xs 
                    >
                        <button onClick={() => changePackDetails(selectedPack)} > back </button>
                        <div> {selectedPack.description} </div>
                        <button onClick={rollPack}> Roll Pack </button>
                    </Grid>

                </Grid>
                :
                <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                id="pack-view-main-container"
                spacing={10}
                >
                    {rolls.map(roll => 
                    <Grid item xs={3} style={{textAlign: "center"}}>
                        <PokemonCard roll={roll}/>
                    </Grid>
                    )}

            </Grid>
            }

        </>
    ) 
}


export default PackView;