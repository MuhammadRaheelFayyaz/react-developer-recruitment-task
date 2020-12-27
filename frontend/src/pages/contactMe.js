import React from 'react';
import ContactRow from '../components/contact-row'

const ContactMePage=()=>{
    return <div className="container">
        <div className="heading">Contact Me</div>
        <div className="contact-sec">
            <ContactRow label="Name" content="Muhammad Raheel"/>
            <ContactRow label="Email" content="raheelfayyaid@gmail.com"/>
            <ContactRow label="Phone" content="+92 348 6226883"/>
            <ContactRow label="GitHub" link={true} content="https://github.com/MuhammadRaheelFayyaz"/>
            <div className="contact-item">Summery:</div>
            <div className="summery">
                Full-stack developer with more than  2 years of well-rounded experience in Full Stack and user interface design, seeks position with a top technology firm.
            </div>
        </div>
    </div>
}


export default ContactMePage;