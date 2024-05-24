import './Card.css'
const Card = ({animal,deleteAnimal})=>{
    return (
        <>
        <div className='card'>
            <div className="card-header">
                <h2 className='card-title'>{animal.name}</h2>
            </div>
            <div className="card-body">
                <p className="card-text">{animal.desc}</p>
            </div>
            <div className="card-footer">
                <button className="card-btn" onClick={()=>deleteAnimal(animal.id)}>delete</button>
            </div>
        </div>
        </>
    )
}
export default Card