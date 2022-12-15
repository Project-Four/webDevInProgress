import axios from 'axios';
import { Fragment, useState } from 'react';
import Preview from './Preview';

const Form = ({userBackground, setUserBackground}) => {

    // ************ State Variables ************ //
    const [userSearch, setUserSearch] = useState('')
    const [userSearchResults, setUserSearchResults] = useState( [] )

    // create a piece of state to hold the URL input entered by the user
    const [inputFields, setInputFields] = useState([ {websiteName: '', link: ''} ])


    // ************ Functions for user social media urls form ************ //
    // pass the index number and event parameters from the onChange function.
    const handleUrlFormChange = (index , event) => {
    // store inputFields into userData variable.
    const userData = [...inputFields];
    // access the userData index number and userData name of the property (through bracket notation) and set it to the value of the user's input.
    userData[index][event.target.name] = event.target.value
    // store this new userData back into the inputFields array with state.
    setInputFields(userData);
}

    // allow the user to add more fields.
    const addFields = () => {
    const newField = {websiteName: '', link: ''}
    // set newField into state with the existing values in inputFields.
    setInputFields([...inputFields, newField])
  }

  // create a button to remove fields if the user no longer needs them.
    const removeFields = (index, event) => {
    event.preventDefault();
    const userData = [...inputFields];
    userData.splice(index, 1)
    setInputFields(userData)
   }


    // ************ Functions for Unsplash API images ************ //
   // declare a function to retrieve image data from Unsplash
    const getImages = () => {
        const apiKey = 'hBNNU3fausksBX8Iir21vcSOZhnQmtoEut-59TPJj7Q'
        
        axios({
            url: `https://api.unsplash.com/search/photos/`,
            method: 'GET',
            dataResponse: 'json',
            params: {
                client_id: apiKey,
                query: userSearch,
                per_page: 6,
                content_filter: 'high',
                orientation: 'landscape',
            }
            
        })
        .then((res) => {
            setUserSearchResults(res.data.results)
        })
    }
    
    // declare a function to set the userSearch state variable to the value the user has entered in the input field
    const handleImageFormChange = (event) => {
        setUserSearch(event.target.value)
    }
    
    // declare a function to call the getImages function when the user submits the search form
    const handleSubmit = (event) => {
        event.preventDefault();
        getImages();
    }


    return (
        <div>
            {/* Form to search Unsplash API for photos */}
            <form onSubmit={handleSubmit}>

                <label htmlFor="userAPISearch"></label>
                <input 
                    placeholder='Search for a background image!'
                    type="text" 
                    name="userAPISearch"
                    onChange={handleImageFormChange}
                />
                <button type='submit'>Submit</button>
            </form>

            <form>
                {userSearchResults.map((result) => {
                    return (
                        <Fragment key={result.id}>
                            
                            <input
                                name='backgroundSelection'
                                type= 'radio'
                                value={`${result.urls.full}, ${result.blur_hash}`}
                            ></input>

                            <label 
                                htmlFor="backgroundSelection"
                                key={result.blur_hash} 
                            >
                                <img src={result.urls.thumb} alt={result.alt_description}></img>
                            </label>

                        </Fragment>
                    )
                })}
            </form>

            {/* Form to add/remove input fields for the user's social media profiles */}
            <form>
                {inputFields.map((field, index) => {
                return (
                    
                    <div key = {index}>
                        <input 
                        type="text"
                        name='websiteName'
                        value={field.websiteName}
                        placeholder='Website'
                        onChange = {event => handleUrlFormChange(index, event)}
                         />

                        <input 
                        type="text"
                        name ='link'
                        value={field.link}
                        placeholder='Enter URL'
                        onChange = {event => handleUrlFormChange(index, event)}
                        />
                        <button onClick={(event) => removeFields(index, event)}>Delete</button>
                    </div>
                )
            } )}
            </form>

            <button onClick = {addFields}>Add</button>


            <Preview 
                inputFields={inputFields}
            />
        </div>

    )
}

export default Form