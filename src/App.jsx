import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState({
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    contact: '',
    subject: '',
    upload: '',
    url: '',
    about: ''
  })
  const handleChanges = (e) => {
    setValue({...value, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
  }
  return (
    <div className="container">
      
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <label htmlFor="firstname" >First Name:</label>
        <input type="text" placeholder='Enter first name' name='firstname' onChange={(e =>handleChanges(e))} required/>

        <label htmlFor="lastname">Last Name:</label>
        <input type="text" placeholder='Enter last name' name='lastname' onChange={(e =>handleChanges(e))} required/>

        <label htmlFor="email">Email:</label>
        <input type="email" placeholder='Enter email' name='email' onChange={(e =>handleChanges(e))} required/>

        <label htmlFor="contact">Contact:</label>
        <input type="number" placeholder='Contact' name='contact' onChange={(e =>handleChanges(e))} required/>

        <label htmlFor="gender">Gender:</label>
        <div className="gend">
          <input type="radio" name='gender' onChange={(e =>handleChanges(e))}/>Male
        <input type="radio" name='gender' onChange={(e =>handleChanges(e))}/>Female
        <input type="radio" name='gender' onChange={(e =>handleChanges(e))}/>Other
        </div>

        <label htmlFor="subject">Subject:</label>
        <select name='subject' onChange={(e =>handleChanges(e))}>
          <option value="Math">Math</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
        </select>

        <label htmlFor="upload" className='upload'>Upload File:</label>
        <input type="file" name='upload' onChange={(e =>handleChanges(e))} required/>

        <label htmlFor="url">URL</label>
        <input type="text" placeholder='Enter url' name='url' onChange={(e =>handleChanges(e))}/>

        <label htmlFor="about">About</label>
        <textarea name="about" placeholder='Enter description' cols="30" rows="8" onChange={(e =>handleChanges(e))}></textarea>

        
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
