import React from 'react'

const Detalle = (props) => {

    return (
        <div className="card mt-5">
            <div className="card-body">
                <img className="mx-auto d-block" alt="" src={props.info.url}/>
                <div className="card-title">
                    <p className="card-text">Nombre: {props.info.bankName}</p>
                </div>
                <p className="card-text">Descripción: {props.info.description}</p>
            </div>
        </div>
    )
}

export default Detalle
