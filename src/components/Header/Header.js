import Styles from './Header.module.css'

const Header = ()=>{
    return <div className={Styles.header}>
   <h1> Glyn Knight</h1>
   <img  className={Styles.logo} src='./inner-logo.png' alt='innerlogo'/>
    </div>
}

export default Header