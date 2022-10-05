import Styles from './Header.module.css'
import Divider from '../Divider/Divider'
const Header = ()=>{
    return <><div className={Styles.header}>
      <Divider/>
      <img  className={Styles.logo} src='./inner-logo.png' alt='innerlogo'/>

   <div className={Styles.header_text}><h1> Glyn Knight</h1><h3> Software Developer</h3></div>
   
   

    </div>
   
    </>
}

export default Header