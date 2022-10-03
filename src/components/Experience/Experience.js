import Heading from '../Heading/Heading';
import Styles from './Experience.module.css';


const Experience = () =>{
    return<div id='experience'>
    <Heading heading={'Experience'} />
    <div className={Styles.experience_grid}>
    
        <img src='./html5_icon.png' alt='HTML'/>
        <img src='./css3_icon.png' alt='HTML'/>
        <img src='./javascript.png' alt='HTML'/>
        <img src='./typescript.png' alt='HTML'/>
        <img src='./react_icon.png' alt='HTML'/>
        <img src='./js_node_icon.png' alt='HTML'/>
        <img src='./postgresql_icon.png' alt='HTML'/>
       
    </div>
   
    </div>
}
export default Experience