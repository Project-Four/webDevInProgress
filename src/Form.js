import axios from 'axios';
import { useEffect, useState } from "react";



const Form = () => {

  useEffect(() => {
    const apiKey = 'umteXz05fepLWaDMu_Yu1DojetM-vqfROB2kZ2JmJq4 '
    
    axios({
        url: 'https://api.unsplash.com/search/photos',
        method: 'GET',
        dataResponse: 'json',
        params: {
            client_id: apiKey,
            query: 'background',
            per_page: 6,
            content_filter: 'high',
            orientation: 'landscape',
            alt_description: true
        }
        
    })
    .then((res) => {
        setData(res.data.results)
    })
}, [])


// dynamic form section

// create a piece of state to hold the user input details. 
const [inputFields, setInputFields] = useState([ {name: '', age:''} ])
  
// pass the values of index and event from the onChange function.
const handleFormChange = (index , event) => {

    // store inoutFields into userData variable.
    let userData = [...inputFields];

    // target the userData index and userData name of the property.
    userData[index][event.target.name] = event.target.value

    // store this new userData back into the inputFields array with state.
    setInputFields(userData);
}

// allow the user to add more fields.
const addFields = () => {
  let newField = { name: '', age: '' }

  // set newField into state.
  setInputFields([...inputFields,newField])
}

// input data into fields
const submit = (event) => {
  event.preventDefault();
}


return(
    <div>
      <form onSubmit= {submit}>
        {inputFields.map((input, index) => {
          return (
             <div key = {index}>
                <input 
                  name ='name'
                  placeholder='Name'
                  value = {input.name}
                  onChange = {event => handleFormChange=(index, event)}
                />
                <input
                  name = 'age'
                  placeholder='Age'
                  value = {input.age}
                  onChange = {event => handleFormChange (index, event)}
                />
             </div>
          )
       } )}
      </form>

      <button onClick = {addFields}>Add</button>
      <button onClick={submit}>Submit</button>
    </div>
);
  

}

export default Form