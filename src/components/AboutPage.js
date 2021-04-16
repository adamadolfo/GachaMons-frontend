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
                    <li> Start with a Budget of $1500 </li>
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
                    <caption>Achievements</caption>
                    <tr>
                        <th>Achievement</th>
                        <th>Points</th>
                    </tr>
                    <tr>
                        <td>Win.</td>
                        <td>$300</td>
                    </tr> <tr>
                        <td>Lose.</td>
                        <td>$150</td>
                    </tr>
                    <tr>
                        <td>6-0 Opponent.</td>
                        <td>$500</td>
                    </tr>
                    <tr>
                        <td>Win 0-0.</td>
                        <td>$500</td>
                    </tr>
                    <tr>
                        <td>Get 6 kills with one Pokemon.</td>
                        <td>$500</td>
                    </tr>
                    <tr>
                        <td>Get 5 kills with one Pokemon.</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>Get 4 kills with one Pokemon.</td>
                        <td>$200</td>
                    </tr>
                    <tr>
                        <td>Win without momentum moves (u-turn, volt-switch, teleport, flip turn, baton pass).</td>
                        <td>$200</td>
                    </tr>
                    <tr>
                        <td>Win without hazards (stealth rock, spikes, toxic spikes, sticky web).</td>
                        <td>$200</td>
                    </tr>
                    <tr>
                        <td>Opponent quits.</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>3+ kills with low tier(NU and below).</td>
                        <td>$200</td>
                    </tr>
                    <tr>
                        <td>Set reflect, light screen, and safeguard in one game.</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>Set manual weather.</td>
                        <td>$200</td>
                    </tr>
                    <tr>
                        <td>Set manual terrain.</td>
                        <td>$200</td>
                    </tr>
                    <tr>
                        <td>Win without a Pokemon over 80 base speed.</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>Win with trick room in effect during the last turn.</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>Bring no items.</td>
                        <td>$250</td>
                    </tr>
                    <tr>
                        <td>Click only STAB moves.</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>Click only status or non attacking moves.</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>No health recovered.</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>No hazard removal.</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>Do not boost a stat.</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>Set up 3 different hazards</td>
                        <td>$200</td>
                    </tr>
                    


                    <tr>
                        <td>Every Pokemon has a nickname(for every Pokemon who touches the field).</td>
                        <td>$50</td>
                    </tr>
                    <tr>
                        <td>Watch a game live as a spectator.</td>
                        <td>$50</td>
                    </tr>
                </table>

                </Grid>
            </Grid>
        </div>
    )
}

export default AboutPage