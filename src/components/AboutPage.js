import React from "react"
import NavBar from "./NavBar"
import { Grid } from '@material-ui/core';


const AboutPage = () => {

    return (
        <div style={{textAlign: "center"}}>
            <NavBar />
            <Grid container spacing={4} direction='row' justify="center" >
                <Grid item style={{width: "90%"}} xs={10}>
                    <p className="introduction"> 
                        Welcome to Gatchamons!
                        This format is designed to implement gatcha elements into the competitve pokemon experience.
                        Pokemon fans have been implementing randomized elements to refresh their experience for years such as randomized playthroughs of main series games (nuzlocks). <br /> <br />
                        The purpose of this application is to simulate opening packs and using what you get to have fun with friends or create content with what you receive.
                        Gatchamons can be used for many reasons such as: Rolling a team for smogon play, VGC, in-game, and draft league format. It is designed with youtube content creators in mind.
                        <br /> <br />
                        <strong style={{color: "pink"}}>
                            The main purpose of this application is to benefit the Pokemon competitive draft league experience and will list suggested rules below.
                        </strong>
                    </p>
                </Grid>
                <Grid className="rules"item xs={10}>
                    <h2 style={{color: "pink"}}> Suggested Draft League Format Rules </h2>
                    <div> These rules are suggested and your league should adjust and keep track of any data as the season progresses.</div>
                    <h3 style={{color: "pink"}}> Pack Rules </h3>
                    <li> Start with a Budget of 1500$ </li>
                    <li> Roll A pack which will have a price in the corner. You will be presented the contents of the pack which can be looked up in the Pack Details tab.</li>
                    <li> Pick 1 card to add to your team. The rest will be discarded.</li>
                    <li> You can have between 8-10 pokemon on your team so budget appropriately.</li>
                    <h3 style={{color: "pink"}}> Battle Rules </h3>
                    <li> In order to keep a season fresh and fun you gain more currency as the season progresses to improve your team.</li>
                    <li> The winner of the match gains 300 currency</li>
                    <li> The loser of the match gains 150 currency</li>
                    <li> There is an achievements list that has currency bonuses for completing. It is suggested the player report the bonuses to the commissioner of the league so they can keep track of budgets. </li>
                </Grid>
                <Grid item className="achievements" item xs={10}>
                <table className="achievements-table">
                    <caption>Monthly savings</caption>
                    <tr>
                        <th>Month</th>
                        <th>Savings</th>
                    </tr>
                    <tr>
                        <td>January</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>February</td>
                        <td>$80</td>
                    </tr>
                </table>

                </Grid>
            </Grid>
        </div>
    )
}

export default AboutPage