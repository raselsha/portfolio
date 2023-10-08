import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'gatsby'

const imgStyle = {
    height:' 200px',
    objectFit: 'cover',
    width: '100%',
}


export default function Card(props) {
  return (
    
    <div className="col col-3">
        <div className="card my-2" >
        <Link to={props.link} target='_blank'><img src={props.img} className="card-img-top" alt={props.title}  style={imgStyle}/></Link>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>

                <Link to={props.link} className="btn btn-primary" target='_blank'>View project</Link>
            </div>
        </div>
    </div>
  
    )
}
