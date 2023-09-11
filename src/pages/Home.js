import imageImporter from '../images/import.png'
import { useState } from "react";
import FormTache from '../Components/FormTache';

export default function Home(props){
    const [Taches,setTaches]=useState([])
    const [isToggled,setIsToggled]= useState(false)/*tsy fi-stocher-na donnée fotsiny yan kay ny useState 
    fa afk apesaina am conditionnal rendering ian kou */

    const {handleAddTachesPrim}=props;

    function handleAddTaches(tache){
        setTaches([...Taches, tache])
        handleAddTachesPrim(tache)
      }
    

    return(
        <div className='Home'>
            <h1>To Do List</h1>
            <p>Bonjour ! Bienvenue sur cette application</p>
            <div className="ajoutTache" onClick={()=>setIsToggled(!isToggled)}>
                <img src={imageImporter} alt="ajouter" height={"100px"}/>
                <p>Ajouter une tâche dans la liste</p>
            </div>
            {isToggled && <FormTache handleAddTaches={handleAddTaches}/>}
            {/*condition ternaire am JSX misolo && fotsiny ny ?*/}
        </div>     
    )
}