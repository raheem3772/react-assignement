import Nav from "./components/Nav";
import { useState } from 'react';

function Contact(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [subject,setSubject] = useState('')
    const [des,setDes] = useState('')
    const [message,setMessage] =useState([]);

    function submitForm(e){
      e.preventDefault()
      setMessage(mes => [...mes, [name,email,subject,des]])
      sessionStorage.removeItem('message')
      sessionStorage.setItem('message', JSON.stringify(message))
    }

    return(
        <div>
            <div className='about-us'>
                <div className="app-home">
                    <Nav />
                </div>
                <div className='product-main'>
                    <h4 style={{color:'red',fontSize:'22px',fontWeight:'700',marginBottom:'15px'}}>contact us</h4>
                    <h2 style={{fontSize:'62px',letterSpacing:'5px', marginTop:'0'}}>let's get in touch</h2>
                </div>
            </div>
            <div className='about'>
                <div className='about-head'>
                    <h2>send us a meesage</h2>
                    <hr />
                </div>
                <div className='contact-flex'>
                    <div className='form'>
                        <form onSubmit={submitForm}>
                            <fieldset>
                                <input style={{paddingLeft: '8px',borderRadius: '6px'}} type='text' placeholder='Full Name' value={name} onChange={(e) => {
                                    setName(e.target.value)
                                }} required/>
                            </fieldset>
                            <fieldset>
                                <input style={{paddingLeft: '8px',borderRadius: '6px'}}  type='text' placeholder='Enter Your Email' value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} required/>
                            </fieldset>
                            <fieldset>
                                <input style={{paddingLeft: '8px',borderRadius: '6px'}} type='text' placeholder='Subject' value={subject} onChange={(e) => {
                                    setSubject(e.target.value)
                                }} required/>
                            </fieldset>
                            <fieldset>
                                <textarea style={{paddingLeft: '8px',borderRadius: '6px'}} placeholder='Your Message' value={des} onChange={(e) => {
                                    setDes(e.target.value)
                                }} required/>
                            </fieldset>
                            <button className='btn btn-primary' type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>
                <hr style={{marginTop:'40px'}}/>
                <div className='footer-copy'>
                    <p>COPYRIGHT © 2023 E-COMMERCE CO.. LTD. - DESIGN: <a href='#Main'>Raheem Fayyaz</a></p>
                </div>
            </div>
        </div>
    );
}

export default Contact;