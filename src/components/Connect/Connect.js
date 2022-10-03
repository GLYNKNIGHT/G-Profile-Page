import Heading from '../Heading/Heading';
import Styles from './Connect.module.css'

const Connect = ()=>{
    return<div id='connect'>
       <Heading heading={'Connect'}/>
       <div className={Styles.connect}>
        <a href='https://github.com/GLYNKNIGHT'><img src='./githubwhite.png' alt='GitHub'/></a>
        <a href='https://www.linkedin.com/in/glyn-knight/'><img src='./linkedwhite.png' alt='Linked In'/></a>
        </div>
    </div>
}

export default Connect
