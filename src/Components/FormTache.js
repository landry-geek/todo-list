import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function FormTache(props){
    const [tache,setTache]=useState({
        nameTask:"",
        DescTask:""
    })
    //redirection en utilisant useNavigate()
    const navigate = useNavigate()
    const rediriger=()=>{
        navigate("/listes")
    }
    const {handleAddTaches}=props
    function handleSubmit(evt){
        evt.preventDefault()
        rediriger()
        handleAddTaches(tache)
        setTache({
            nameTask:"",
            DescTask:"" 
        })
    }
    function handleChange(evt){
        const {name,value}=evt.target
        setTache({...tache, [name]:value})
    }
    return(
        <div className='formTache'>
        <form onSubmit={(evt)=>handleSubmit(evt)}>
            <label htmlFor='nameTask'>Nom de la tâche</label>
            <input type='text' name='nameTask' className='nameTask' value={tache.nameTask} onChange={(evt)=>handleChange(evt)}/>
            <br />
            <label htmlFor='DescTask'>Description</label>
            <textarea name='DescTask' className='DescTask'value={tache.DescTask} onChange={(evt)=>handleChange(evt)}/>
            <br />
            <input type='submit' value={"Ajouter"} className='submitTache' />
        </form>
    </div>
    )
}