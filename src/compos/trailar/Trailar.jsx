import React from 'react'
import './Trailar.css'
import YouTube from 'react-youtube'
import trailarloop from '../../vids_n_gifs/looping_video.mp4'



function Trailar() {

    return (
        <div>
            <div className="trailar">
                <video muted autoPlay loop type="video/mp4" className='trailarloop' src={trailarloop} />
            </div>
                <div className='aboutthegame'  >
                    <h2>ABOUT THE GAME</h2>
                    <br />
                    <br />
                    <p className='setp'><strong>Assassin's Creed Mirage </strong>is an upcoming action-adventure game developed by Ubisoft Bordeaux 
                        and published by Ubisoft. It will be the thirteenth major installment in the Assassin's Creed 
                        series and the successor to 2020's Assassin's Creed Valhalla. Principally set in 9th-century 
                        Baghdad during the anarchy at Samarra, the game will follow Basim Ibn Ishaq (a character first 
                        introduced in Valhalla) and his transition from street thief to fully-fledged member of the 
                        Assassin Brotherhood, who fight for peace and liberty, against the Templar Order, who desire
                         peace through control.
                        The game has been described as a return to the series' roots, with a bigger focus on linear
                         storytelling and stealth gameplay than more recent installments, which primarily focused on 
                         role-playing and open world elements.</p>
                </div>
                

        </div>
    )
}

export default Trailar
