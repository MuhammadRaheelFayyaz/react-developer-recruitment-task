import React from 'react'


const ContactRow=({label,content,link=false})=>{
    return<div className="contact-row">
    <div className="contact-item">{label}:</div>
    {
        link?<a className="contact-item" href={`${content}`} target="_blank">{content}</a>:
        <div className="contact-item">{content}</div>

    }
</div>
}

export default ContactRow;