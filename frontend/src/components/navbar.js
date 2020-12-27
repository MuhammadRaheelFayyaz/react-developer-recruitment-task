import React,{useState,useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';

let activeLink={
    borderBottom:'2px solid #000000'
}

const Navbar=({})=>{
    let history=useHistory()
    let [active,setActive]=useState('')
   
    const goPage=page=>{
        history.push(page)
        setActive(page)
    }
    useEffect(()=>{
      setActive(history.location.pathname)
      console.log("🚀 ~ file: navbar.js ~ line 18 ~ useEffect ~ history.location.pathname", history.location.pathname)
    },[])
    return (
        <div className="nav">
            <div className="left-nav">
                <span className="logo-text">React Developer Recuitment Task </span>
            </div>
            <div className="right-nav" >
                <div className="nav-item" style={active==="/home"?activeLink:{}} 
                    onClick={()=>goPage("/home")} >
                    Home
                </div>
                <div className="nav-item"  style={active==="/contact"?activeLink:{}}
                    onClick={()=>goPage("/contact")}>
                    Contact Me
                </div>
            </div>
        </div>
    )
} 


export default Navbar;