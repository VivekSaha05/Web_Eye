import React from "react";
import "./LeaderBoard.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
function LeaderBoard() {
    return (
        <>
            <Navbar />
            <div class="back">
                <div class="leaderboard">
                    <header>
                        <h1 class="lead_tittle">Leader Board</h1>
                        <img src="image.jpg" alt="" class="img" />
                        <nav class="nav">
                            {/* <!--       <a href="" class="active">Solo</a>
                            <a href="">Duo</a>
                            <a href="">Squad</a>
                            <a href="">Solo</a> --> */}
                        </nav>
                    </header>
                    <table>
                        <thead>
                            <tr> {/*to add another th and td use the class called kd*/}
                                <th class="rank"></th>
                                <th class="nick">Username</th>
                                <th class="sp">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="rank">1</td>
                                <td class="nick">Vivek Saha</td>
                                <td class="sp">6.308</td>
                            </tr>
                            <tr>
                                <td class="rank">2</td>
                                <td class="nick">Ankit Choudhary</td>
                                <td class="sp">6.301</td>
                            </tr>
                            <tr>
                                <td class="rank">4</td>
                                <td class="nick">Sushant Kumar Bishoi</td>
                                <td class="sp">5.108</td>
                            </tr>
                            <tr>
                                <td class="rank">5</td>
                                <td class="nick">Naimish Kumar Sahu</td>
                                <td class="sp">5.108</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
            <Footer />
        </>
    )
}
export default LeaderBoard;