import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Logout from "../Logout/Logout";
import SelecAvatar from "../SelectAvatar/SelectAvatar";
import GymCards from "../GymCards/GymCards";
import UserCards from "../UserCards/UserCards";
import NavBarProfile from "../NavBarProfile/NavBarProfile";
import PartnerCards from "../PartnerCards/PartnerCards";
import { getAllGyms } from "../../redux/actions";
import { useDispatch } from "react-redux";


// import SelectAvatar from "./views/SelectAvatar";
export default function HomeMain() {
    let { userId , name, type, avatar } = useParams(); 
    // debería llegarme por params si es un 
    // "user" con sin avatar o un "partner" o incluso un "admin"

    const dispatch = useDispatch();

    useEffect(()=>{
        // dispachar la action ¿pero qué voy a escuchar??? No sé si sea userId
        // console.log('sale la action de traer gyms')
        dispatch(getAllGyms());

    },[userId])



    // Esto es una vista para un usuario sin avatar
    if (type === 'user' && !avatar) {
        return (
            
            <div> 
                <SelecAvatar/>
                <Logout/>                
                <a href='/'>Volver</a>                
            </div>         
        )
    }

    // Esto es una vista para un usuario con avatar
    if (type === 'user' && avatar) {
        return (            
            <div>                
                <NavBarProfile/>
                <GymCards/>               
            </div>         
        )
    }
    
    // Esto es una para cliente empresa
    if (type === 'partner') {
        return (            
            <div> 
                <NavBarProfile/>
                <h3>Qué más quiero ver como Ciente Empresa cuando llego a home???</h3>   
                <UserCards/>
                <h4>Promociones y descuentos</h4>
            </div>         
        )
    }

    // Esto es una para un administrador de sitio
    if (type === 'admin') {
        return (            
            <div> 
                <NavBarProfile/>
                <h3>Qué más quiere ver un usuario Admin en su home???</h3>
                <PartnerCards/>
                <UserCards/>
                <h3>Una vista como user</h3>
                <h3>Una vista como partner</h3>
            </div>         
        )
    }
}