import './App.css'
import About from './components/About';
import Nav from "./components/Nav";
import TeamMember from './components/TeamMember';

function AboutUs(){
    return(
        <div>
            <div className='about-us'>
                <div className="app-home">
                    <Nav />
                </div>
                <div className='product-main'>
                    <h4 style={{color:'red',fontSize:'22px',fontWeight:'700',marginBottom:'15px'}}>about us</h4>
                    <h2 style={{fontSize:'62px',letterSpacing:'5px', marginTop:'0'}}>our company</h2>
                </div>
            </div>
            <div className='about-background'>
                <About />
            </div>
            <div className='about'>
                <div>
                    <div className='about-head'>
                        <h2>our team members</h2>
                        <hr />
                    </div>
                    <div>
                        <TeamMember />
                        <hr style={{marginTop:'40px'}}/>
                        <div className='footer-copy'>
                            <p>COPYRIGHT © 2023 E-COMMERCE CO.. LTD. - DESIGN: <a href='#Main'>Raheem Fayyaz</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AboutUs;