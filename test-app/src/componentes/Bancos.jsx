import React, {useState} from 'react'
import {connect} from 'react-redux'
import {getAllBancos, clearAll} from '../redux/bancoDuck'
import Detalle from './Detalle'

const Bancos = ({getAllBancos, bancos, clearAll}) => {

    const [info, setInfo] = useState({})

    const limpiarInfo = () => {
        setInfo({})
        clearAll()
    }

    return (
       <div className="container mt-5">
           <h1 className="text-center">Bancos</h1>
           <hr/>
           <div className="row">
               <div className="col-md-6">
                   <h4 className="text-center">Lista Bancos</h4>
                   <br/>
                   <ul className="list-group mt-3">
                       {
                           bancos.map((e,index) => (
                               <li key={index} className="list-group-item">
                                   <span className="lead">{e.bankName}</span>
                                   <button className="btn btn-dark btn-sm float-right"
                                   onClick={() => setInfo(e)}
                                   >info</button>
                               </li>
                           ))
                       }
                   </ul>
                   <button className="btn btn-dark mt-2 float-right" onClick={() => getAllBancos()}>Buscar</button>
                   <button className="btn btn-warning mt-2 float-right mx-2" onClick={() => limpiarInfo()}>Limpiar</button>
               </div>
               <div className="col-md-6">
                   <h4 className="text-center">Detalle Banco</h4>
                   <Detalle info={info}/>
               </div>
           </div>
       </div>
    )
}

const mapStoreProps = (store) => {
    return {
        bancos: store.bancos.results
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        getAllBancos: () => dispatch(getAllBancos()),
        clearAll: () => dispatch(clearAll())
    }
}

export default connect(mapStoreProps, mapDispatchProps)(Bancos)