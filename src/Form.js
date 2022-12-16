import axios from 'axios';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Form = ({setUserBackground, userText, setUserText, setInputFields, inputFields, setFont}) => {

    // Unsplash Search State Variables
    const [userSearch, setUserSearch] = useState('')
    const [userSearchResults, setUserSearchResults] = useState( [] )

    // ************ Functions for user social media urls form ************ //
    const handleUrlFormChange = (index , event) => {
        // store inputFields into userData variable.
        const userData = [...inputFields];
        // access the userData index number and userData name of the property (through bracket notation) and set it to the value of the user's input.
        userData[index][event.target.name] = event.target.value
        // store this new userData back into the inputFields array with state.
        setInputFields(userData);
    }

    // allow the user to add more fields.
    const addFields = (e) => {
        e.preventDefault();
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

    // ************ Functions for background images form ************ //
    // API call to Unsplash
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
            console.log(res.data.results)
            setUserSearchResults(res.data.results)
        })
    }

    // Background image search functions (CHANGE NAME)
    const handleChange = (e) => {
        setUserSearch(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        getImages();
    }

    const backgroundHandleChange = (e) => {
 
        const backgroundSplit = e.target.value.split(",")
        const image = backgroundSplit[0]
        const alt = backgroundSplit[1]
        
        setUserBackground({
            image: image,
            alt: alt
        })
    }
        

    const userTextHandleChange = (e) => {
        const {name, value} = e.target

        setUserText((prev) => {
            return {...prev, [name]: value}
        })
    }

    // ************ Function for font changes ************ //
    const handleFontChange = (selectedFont) => {
        setFont(selectedFont);
    }


    return (
        <Fragment>
        <section className='backgroundForm'>
            {/* Form to search Unsplash API for photos */}
            <form 
                className='searchForm'
                onSubmit={handleSubmit}
            >
                <div className="searchBar">
                    <label htmlFor="userAPISearch"></label>
                    <input 
                        placeholder='Search for a background image!'
                        type="text" 
                        name="userAPISearch"
                        onChange={handleChange}
                    />
                    <button type='submit' className='submit'>Search</button>
                </div>
                <div className="searchResults">
                    {userSearchResults.map((result) => {
                        return (
                            <div key={result.id} className="optionContainer">

                                <label 
                                    className='searchImage'
                                    htmlFor="url"
                                    key={result.blur_hash} 
                                >
                                <input
                                    onChange={backgroundHandleChange}
                                    name='url'
                                    type= 'radio'
                                    // value='{"url": "result.urls.full", "alt": "result.alt_description"}'
                                    value={`${result.urls.full}, ${result.alt_description}`}
                                />
                                    <img src={result.urls.thumb} alt={result.alt_description}></img>
                                </label>

                            </div>
                        )
                    })}
                </div>
            </form>

            <form className='colourForm'>

                 {/* Background Colours */}
                 <label htmlFor="url">Background Colour</label>
                
                 <input 
                    onChange={backgroundHandleChange}
                    type="radio" 
                    id='white' 
                    name="url" 
                    value='https://www.colorbook.io/imagecreator.php?hex=FFFFFF&width=1920&height=1080, white'
                 />
                 <label htmlFor="red"><img src="https://i.imgur.com/tpJaVIY.png" alt="a white square" /></label>
                
                 <input 
                    onChange={backgroundHandleChange}
                    type="radio" 
                    id='red' 
                    name="url" 
                    value='https://www.colorbook.io/imagecreator.php?hex=FF0000&width=1920&height=1080, red'
                 />
                 <label htmlFor="red"><img src="https://i.imgur.com/7QOkRzF.png" alt="a red square" /></label>
                
                 <input 
                    onChange={backgroundHandleChange}
                    type="radio" 
                    id='blue' 
                    name="url" 
                    value='https://www.colorbook.io/imagecreator.php?hex=0000FF&width=1920&height=1080, blue'
                 />
                 <label htmlFor="blue"><img src="https://i.imgur.com/Hx1Qo6e.png" alt="a blue square" /></label>

            </form>

        </section>


        <section className="textForm">

        <Link to="/" className='routerLink homeLink'>Back to Home</Link>

            <form className='sideBar' action="">
                <label htmlFor="">Name</label>
                <input 
                type="text" 
                name="name"
                value={userText.name}
                onChange={userTextHandleChange}
                />

                <label htmlFor="">Subtitle</label>
                <input 
                type="text" 
                name="subtitle"
                value={userText.subtitle}
                onChange={userTextHandleChange}
                />
            </form>
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

                <button onClick = {addFields}>Add</button>
            </form>

            <div className='fontOptions'>
                <button className='barlow' onClick={() => handleFontChange('barlow')}>A</button>
                <button className='anton' onClick={() => handleFontChange('anton')}>A</button>
                <button className='comfortaa' onClick={() => handleFontChange('comfortaa')}>A</button>
                <button className='lobster' onClick={() => handleFontChange('lobster')}>A</button>
                <button className='fade' onClick={() => handleFontChange('fade')}>A</button>
                <button className='spraypaint' onClick={() => handleFontChange('spraypaint')}>A</button>
                <button className='storm' onClick={() => handleFontChange('storm')}>A</button>
                <button className='vinyl' onClick={() => handleFontChange('vinyl')}>A</button>
                <button className='unbounded' onClick={() => handleFontChange('unbounded')}>A</button>
                <button className='zendots' onClick={() => handleFontChange('zendots')}>A</button>
            </div>
        </section>

        </Fragment>




    )



    
  
}

export default Form