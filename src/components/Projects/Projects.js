import Heading from '../Heading/Heading'
import Styles from './Projects.module.css'
import { useState } from 'react'
const Projetcs = () =>{
const [mouseEnter, setMouseEnter] = useState(0)


    return <div className={Styles.project_container} id='projects'> 
      <Heading heading={'Projects'}/>

        <div className={Styles.project_grid}>
            <div className={Styles.project_card} onMouseEnter={()=>setMouseEnter(1)}  onMouseLeave={()=>setMouseEnter(0)}>
            <a href='https://github.com/GLYNKNIGHT/Job-Tracking-App-Demo' target='blank'> 
            <img src='./Progress.PNG' alt='progress' />
            {(mouseEnter===1)?<div className={Styles.hidden}><p>Job application tracking App<br></br>Click to see Git Hub Repo</p></div>: null}
            </a>
            </div>
            <div className={Styles.project_card} onMouseEnter={()=>setMouseEnter(2)}  onMouseLeave={()=>setMouseEnter(0)}>
            <a href='https://github.com/GLYNKNIGHT/Untrodden-Final-Team-Project' target='blank'> 
                <img src='./untrodden.PNG' alt='untrodden' />
                {(mouseEnter===2)?<div className={Styles.hidden}><p>Team Project - Shared places to visit<br></br>Click to see Git Hub Repo</p></div>: null}
                </a>
            </div>
            <div className={Styles.project_card} onMouseEnter={()=>setMouseEnter(3)}  onMouseLeave={()=>setMouseEnter(0)}>
            <a href='https://github.com/GLYNKNIGHT/Band-Its-Week-8-Hackathon-' target='blank'>  
                <img src='./BandIts.PNG' alt='Band-Its' />
                {(mouseEnter===3)?<div className={Styles.hidden}><p>Band API<br></br>Click to see Git Hub Repo</p></div>: null}
            </a>
            </div>
            <div className={Styles.project_card} onMouseEnter={()=>setMouseEnter(4)}  onMouseLeave={()=>setMouseEnter(0)}>
            <a href='https://github.com/GLYNKNIGHT/Geta-Note--Wk9--Team-Project' target='blank'>  
                <img src='./GetaNote.PNG' alt='GetaNote' />
                {(mouseEnter===4)?<div className={Styles.hidden}><p>Team Project - Note Sharing App<br></br>Click to see Git Hub Repo</p></div>: null}
            </a>
            </div>
            <div className={Styles.project_card} onMouseEnter={()=>setMouseEnter(5)}  onMouseLeave={()=>setMouseEnter(0)}>
                <img src='./ToDo.png' alt='ToDo' />
                {(mouseEnter===5)?<div className={Styles.hidden}><p>To Do App</p></div>: null}
            </div>
            <div className={Styles.project_card} onMouseEnter={()=>setMouseEnter(6)}  onMouseLeave={()=>setMouseEnter(0)}>
                <img src='./Med.PNG' alt='Mediation' />
                {(mouseEnter===6)?<div className={Styles.hidden}><p>Meditation App</p></div>: null}
            </div>
        </div>
    </div>
}

export default Projetcs