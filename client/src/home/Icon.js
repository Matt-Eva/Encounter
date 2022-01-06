import React from 'react'
import Image from "react-bootstrap/Image"
import dragonIcon from '../assets/dragonIcon.png'
import { Link } from 'react-router-dom'

const imgStyle={
    height: "50px",
    width: "50px",
}

function Icon() {
    return (
        <Link to="/home"><Image className="rounded-circle" src={dragonIcon} style={imgStyle}/></Link>
    )
}

export default Icon;
