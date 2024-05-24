import { useState } from 'react'
import Card from './components/Card/Card'
import './App.css'
import { nanoid } from 'nanoid'

function App() {
  const [animals, setAnimals] = useState([{}])
  const [form, setForm] = useState({})

  const handleChange =(event)=> {
    const {name, value} = event.target
    setForm({...form, [name]:value})
  }
  const handleSubmit =(event)=>{
    event.preventDefault();
    const id = nanoid()
    const payload = {...form, id}
    animals.push(payload)
    setAnimals([...animals])
  }
  const deleteAnimal =(id)=>{
    const new_animal = animals.filter(animals => animals.id !== id)
    setAnimals([...new_animal])
  }
  return (
    <>
    <div className="container">
      <div className="form-wrapper">
        <form id='submit' onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange}  name='name' className="form-input" placeholder='Animal name...'/>
          <textarea name="desc" id="" cols="30" rows="10" onChange={handleChange} placeholder='description'  className='form-text'></textarea>
        </form>
        <div className="button-wrapper">
          <button className='form-btn' type='submit' form='submit'>add new</button>
        </div>
      </div>
      <div className="card-wrapper">
        {
          animals.map((item)=>(
            <div className='card-card' key={item.id}>
              <Card animal={item} deleteAnimal={deleteAnimal}/>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default App
