import React from "react";
import Img1 from "../Images/Photo.jpg"
import './info.css'
import { MdEmail, MdDatasetLinked} from "react-icons/md";

export default function InfoMain(){
    return (
        <>
        <div className="mainInfo">
        <div className="imgOne"> <img src={Img1 } /> </div>
        <h2>Mahtab Ahmed</h2>
        <h4>Web Developer</h4>
        <h6>Freelancer</h6>
        <div className="buttons">
            <button className="button1"><span className="emailIcon"><MdEmail/></span>E-mail</button>
            <button className="button2"><span className="emailIcon2"><MdDatasetLinked/></span>Linkedin</button>

        </div>
        </div>
        
        </>
)}