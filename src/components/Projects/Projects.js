import Heading from '../Heading/Heading'
import Styles from './Projects.module.css'

import ProjectData from './ProjectsData'
import ProjectCard from './ProjectCard/ProjectCard'

const Projects = () => {

  return <div className={Styles.project_container} id='projects'>
    <Heading heading = { 'Projects' } />
    <div className = { Styles.project_grid }>
      { ProjectData.map((project) => {
        return <ProjectCard key = { project.id }
          project = { project }
        />
      }) }
    </div>
  </div>
}

export default Projects