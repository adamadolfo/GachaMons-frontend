import React from "react"
import Pack from "./Pack"
import NavBar from "./NavBar"
import PackView from "./PackView"
import { Grid } from '@material-ui/core';
import { useState, useEffect } from "react";

const PacksPage = () => {

    const [packs, setPacks] = useState([])
    const [packDetails, setPackDetails] = useState(false)
    const [selectedPack, setSelectedPack] = useState()

    useEffect(() => {
        fetch("http://localhost:5000/packs")
        .then(r => r.json())
        .then(data => setPacks(data))
    }, [])

    const changePackDetails = (pack) => {
        setSelectedPack(pack)
        setPackDetails(packDetails => !packDetails)
    }

    if (packs.length) {

        return (
            <>
                <NavBar />
                {
                !packDetails ? 
                    <>
                        {/* <div className="pack-section" >Standard Packs</div> */}
                        <Grid 
                        container
                        direction="row"
                        spacing={6}
                        justify="center" 
                        style={{marginBottom: "1%"}}
                        >
                            {packs.map((pack, index) => 
                            <Grid item key={index}>
                                <Pack pack={pack} changePackDetails={changePackDetails}/>
                            </Grid>   
                                )}
                        </Grid>
            
                        {/* <div className="pack-section" >Type Packs</div> */}
                        <Grid 
                        container
                        direction="row"
                        spacing={6}
                        justify="center" 
                        style={{marginBottom: "1%"}}
                        >
                    
                        </Grid>
            
                        {/* <div className="pack-section" >Role Packs</div> */}
                        <Grid 
                        container
                        direction="row"
                        spacing={6}
                        justify="center" 
                        style={{marginBottom: "1%"}}
                        >
                        
                        </Grid>
                    </> 
                :
                <PackView selectedPack={selectedPack} changePackDetails={changePackDetails}/>
                }
    
            </>
        )
    }
    return null
}

export default PacksPage