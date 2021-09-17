import React from "react"
import Pack from "./Pack"
import NavBar from "./NavBar"
import PackView from "./PackView"
import { Grid } from '@material-ui/core';
import { useState, useEffect } from "react";

const PacksPage = () => {

    // const [typePacks, setTypePacks] = useState([])
    // const [megaPacks, setMegaPacks] = useState([])
    // const [rolePacks, setRolePacks] = useState([])

    const [packDetails, setPackDetails] = useState(false)
    const [selectedPack, setSelectedPack] = useState()

    const typePacks = []
    const megaPacks = []
    const rolePacks = []

    useEffect(() => {
        fetch("http://localhost:5000/packs")
        .then(r => r.json())
        .then(data => data.map(pack => {
            if(pack.typing == "Type") {
                typePacks.push(pack)
            } else if ( pack.typing == "Mega") {
               megaPacks.push(pack)
            } else {
                rolePacks.push(pack)
            }
        }))
    }, [])

    const changePackDetails = (pack) => {
        setSelectedPack(pack)
        setPackDetails(packDetails => !packDetails)
    }

    // if (typePacks.length) {

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
                            {typePacks.map((pack, index) => 
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
                            {megaPacks.map((pack, index) => 
                            <Grid item key={index}>
                                <Pack pack={pack} changePackDetails={changePackDetails}/>
                            </Grid>   
                                )}
                    
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
    // }
    // return null
}

export default PacksPage