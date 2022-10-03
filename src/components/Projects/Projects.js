import Heading from '../Heading/Heading'
import Styles from './Projects.module.css'

const Projetcs = () =>{
    return <div className={Styles.project_container} id='projects'> 
      <Heading heading={'Projects'}/>

        <div className={Styles.project_grid}>
            <div className={Styles.project_card}>
            <a href='https://github.com/GLYNKNIGHT/Job-Tracking-App-Demo' target='blank'> 
            <img src='./Progress.PNG' alt='progress' />
            </a>
            </div>
            <div className={Styles.project_card}>
            <a href='https://github.com/GLYNKNIGHT/Untrodden-Final-Team-Project' target='blank'> 
                <img src='./untrodden.PNG' alt='untrodden' />
                </a>
            </div>
            <div className={Styles.project_card}>
            <a href='https://github.com/GLYNKNIGHT/Band-Its-Week-8-Hackathon-' target='blank'>  
                <img src='./BandIts.PNG' alt='Band-Its' />
            </a>
            </div>
            <div className={Styles.project_card}>
            <a href='https://github.com/GLYNKNIGHT/Geta-Note--Wk9--Team-Project' target='blank'>  
                <img src='./GetaNote.PNG' alt='GetaNote' />
            </a>
            </div>
            <div className={Styles.project_card}>
                <img src='./ToDo.png' alt='ToDo' />
            </div>
            <div className={Styles.project_card}>
                
                <img src='./Med.PNG' alt='Mediation' />
            </div>
        </div>
    </div>
}

export default Projetcs