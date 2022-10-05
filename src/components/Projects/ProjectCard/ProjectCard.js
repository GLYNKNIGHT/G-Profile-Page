import Styles from '../Projects.module.css'
import { useState } from 'react'

const ProjectCard = ({title, url, img, description}) =>{

    const [mouseEnter, setMouseEnter] = useState(false)

    return  <div className={Styles.project_card} onMouseEnter={()=>setMouseEnter(true)}  onMouseLeave={()=>setMouseEnter(false)}>
    <a href={url} target='blank'> 
    <img src={img} alt={title} />
    {(mouseEnter===true)?<div className={Styles.hidden}><p>{title}</p><p>{description}<br></br><br></br>Click to see Git Hub Repo</p></div>: null}
    </a>
    </div>
}

export default ProjectCard