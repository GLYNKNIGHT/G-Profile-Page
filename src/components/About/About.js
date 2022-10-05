import Styles from './About.module.css';
import Heading from '../Heading/Heading';


const About = ()=>{

 
    
    return<div id='about'>
        <Heading heading={'About'}/>
        <div className={Styles.about_content}>
        <img width='25%' height='25%' src='/Profile.jpg' alt='Me'/>
       
        <p>Hi, thanks for visiting my profile page. I'm Glyn, I live in the North West on England with my wife, 2 young children and a springer spainel. <br/>
        <br/> After leaving school I served in the British Army for 9 years as a telecommunications engineer during this I learned to solve problems and work effectively while under pressure. After leaving the forces I became a self-employed personal trainer and sports massage therapist I had to constantly adapt to meet my client's needs and deliver a quality service. 
        Providing solutions for people's needs has been at the heart of my career and I carry this forward in to my new career in tech. <br/>
        <br/>At the start of 2022 I applied for a place on the School of Code Bootcamp and gained one of 150 places from over 2000 applicants. The first stage of my journey has just finished after 16 awesome weeks. The next stages are yet to be determined but I'm excited and ready for whatever lies ahead.
        Now in tech, I have a hunger to develop my own knowledge and skills and to be able to reach more people and help find solutions for them. </p>
      
    </div>
    </div>
}

export default About
