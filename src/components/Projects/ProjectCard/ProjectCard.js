import Styles from '../Projects.module.css'
import { useState } from 'react'

const ProjectCard = ({ project }) => {

    const [mouseEnter, setMouseEnter] = useState(false)

    return <div className={Styles.project_card} onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)}>
        <a href={project.url} target='blank'>
            <img src={project.img} alt={project.title} />
            {(mouseEnter) ? <div className={ Styles.hidden }><p><strong>{ project.title }</strong></p><p>{ project.description }<br></br>
            <br></br>Click to see Git Hub Repo</p></div> : null}
        </a>
    </div>
}

export default ProjectCard