export default function Listes(props){
    const {Taches,handleDeleteTaches}=props;
    return(
        <div className="Listes">
            {
                Taches.map(tache=>(
                    <div key={tache.nameTask}>
                        <h4>{tache.nameTask}</h4>
                        <p className="PformTache">{tache.DescTask}</p>
                        <button className="ButtonformTache" onClick={()=>handleDeleteTaches(tache.nameTask)}>Faite</button>
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}