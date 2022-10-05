import Heading from '../Heading/Heading'
import Styles from './Projects.module.css'

import ProjectData from './ProjectsData'
import ProjectCard from './ProjectCard/ProjectCard'

const Projetcs = () =>{



    return <div className={Styles.project_container} id='projects'> 
      <Heading heading={'Projects'}/>
      <div className={Styles.project_grid}>
        {ProjectData.map((project) => {return <ProjectCard  key={project.id}                                                             
                                                            title={project.title}
                                                            url={project.url}
                                                            img={project.img}
                                                            description={project.description}
                                                       
                                                        
        />})}

         </div>
    </div>
}

export default Projetcs