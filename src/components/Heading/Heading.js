import Styles from './Heading.module.css'

const Heading = ({heading}) =>{
    return<div className={Styles.heading}>
        <img width='25px' height='25px' src='./inner-logo.png' alt='logo'/>
        <h2>{heading}</h2>
    </div>
}

export default Heading