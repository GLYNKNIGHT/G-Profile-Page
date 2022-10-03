import Styles from './Header.module.css'
import Divider from '../Divider/Divider'
const Header = ()=>{
    return <div className={Styles.header}>
   <h1> Glyn Knight</h1>
   <img  className={Styles.logo} src='./inner-logo.png' alt='innerlogo'/>
   
<Divider/>
    </div>
}

export default Header