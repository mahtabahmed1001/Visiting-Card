import React from "react"
import "./footer.css"
import {FaFacebookSquare, FaLinkedinIn, FaTwitterSquare, FaInstagramSquare} from "react-icons/fa"

export default function FooterD(){
    return (
        <>
        <div className="footer">
        <div><a href="#" ><FaFacebookSquare className="facebook"/></a></div>
        <div><a href="#" ><FaLinkedinIn className="linkedin"/></a></div>
        <div><a href="#" ><FaTwitterSquare className="twitter"/></a></div>
        <div><a href="#" ><FaInstagramSquare className="instagram"/> </a></div>
        </div>
        </>
        
    )
}