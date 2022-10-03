import Styles from './Nav.module.css';

const Nav = () =>{
    return<div className={Styles.nav_container}>
        <a href='#about'>About</a> 
        <p>|</p>
        <a href='#projects'>Projects</a>  
        <p>|</p>
        <a href='#experience'>Experience</a>  
        <p>|</p>
        <a href='#connect'>Connect</a>  
    </div>
}
export default Nav