import { NavLink } from "react-router-dom";

export default function Boutons(){
    return(
        <div className="Boutons">
            <p><NavLink to={"/"} className={({ isActive })=>(isActive ? "isActive" : "isNotActive" )} >Accueil</NavLink></p>
            <p><NavLink to={"/listes"} className={({ isActive })=>(isActive ? "isActive" : "isNotActive" )}>Listes</NavLink></p>
        </div>
    )
}