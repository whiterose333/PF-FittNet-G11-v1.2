import React from "react";
import img from '../../asets/images/benefits(uf).jpg'
import logo from '../../asets/images/logoPF.jpg'
import style from '../LegendUf/style/LegendUf.module.css'
import NavBar from '../NavBar/NavBar'

export default function LegendUf (){
    
    return(
        <div>
            <NavBar />
            <div className={style.img}>
                <img src={img} alt='' />
            </div>
            <div className={style.containLegend}>
                <h3>Nuestro propósito es facilitar el acceso a la práctica de actividad física de alta calidad,
                al mismo tiempo brindarte una manera fácil y segura de organizar tu agenda de actividades y tus objetivos
                de manera personalizada!
                <br></br>
                <br></br>
                En un solo lugar, podrás ver todas las posibilidades y elegir el gimnasio que mejor se adapte a tu perfil deportivo y
                ubicación!
                <br></br>
                <br></br>
                Podrás elegir inscribirte de forma mensual o tambien optar por tomar clases individuales, 
                abonando de forma segura y sin moverte de tu casa!
                </h3>
                <br></br>
                <h2>Que esperas para formar parte de la evolucion del mundo deportivo?</h2>
                <button className={style.btn}><a href={'/registration'} ></a>REGISTRATE</button>
                </div>
        </div>
    )
}