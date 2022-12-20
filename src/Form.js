import axios from 'axios';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Form = ({setUserBackground, userText, setUserText, setInputFields, inputFields, setFont, setFontColor, setBackgroundColor}) => {

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
    

    // ************ Functions for font changes ************ //
    const handleFontChange = (selectedFont) => {
        setFont(selectedFont);
    }

    const handleFontColorChange = (selectedFontColor) => {
        setFontColor(selectedFontColor)
    }

    // ************ Function for background changes ************ //
    const handleBackgroundColorChange = (selectedBackgroundColor) => {
        setBackgroundColor(selectedBackgroundColor)
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

                <div className='colorButtons'>
                    <button className='redButton colorButton' onClick={() => handleBackgroundColorChange('redBackground')}></button>
                    <button className='orangeButton colorButton' onClick={() => handleBackgroundColorChange('orangeBackground')}></button>
                    <button className='greenButton colorButton' onClick={() => handleBackgroundColorChange('greenBackground')}></button>
                    <button className='blueButton colorButton' onClick={() => handleBackgroundColorChange('blueBackground')}></button>
                    <button className='pacificBlueButton colorButton' onClick={() => handleBackgroundColorChange('pacificBlueBackground')}></button>
                    <button className='fluorescentBlueButton colorButton' onClick={() => handleBackgroundColorChange('fluorescentBlueBackground')}></button>
                    <button className='greenLizardButton colorButton' onClick={() => handleBackgroundColorChange('greenLizardBackground')}></button>
                    <button className='lemonYellowButton colorButton' onClick={() => handleBackgroundColorChange('lemonYellowBackground')}></button>
                    <button className='sunglowButton colorButton' onClick={() => handleBackgroundColorChange('sunglowBackground')}></button>
                    <button className='chromeYellowButton colorButton' onClick={() => handleBackgroundColorChange('chromeYellowBackground')}></button>
                    <button className='lightCoralButton colorButton' onClick={() => handleBackgroundColorChange('lightCoralBackground')}></button>
                    <button className='magentaCrayolaButton colorButton' onClick={() => handleBackgroundColorChange('magentaCrayolaBackground')}></button>
                    <button className='heliotropeButton colorButton' onClick={() => handleBackgroundColorChange('heliotropeBackground')}></button>
                    <button className='purpleButton colorButton' onClick={() => handleBackgroundColorChange('purpleBackground')}></button>
                    <button className='blackButton colorButton' onClick={() => handleBackgroundColorChange('blackBackground')}></button>
                    <button className='whiteButton colorButton' onClick={() => handleBackgroundColorChange('whiteBackground')}></button>
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
                                    value={`${result.urls.full}, ${result.alt_description}`}
                                />
                                    <img src={result.urls.thumb} alt={result.alt_description}></img>
                                </label>

                            </div>
                        )
                    })}
                </div>
            </form>

        </section>


        <section className="sideBarSection">

            <Link to="/" className='routerLink homeLink'>Back to Home</Link>

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

            <div className='sideBar'>

                <div className='colorButtons'>
                    <button className='redButton colorButton' onClick={() => handleFontColorChange('redFont')}></button>
                    <button className='orangeButton colorButton' onClick={() => handleFontColorChange('orangeFont')}></button>
                    <button className='greenButton colorButton' onClick={() => handleFontColorChange('greenFont')}></button>
                    <button className='blueButton colorButton' onClick={() => handleFontColorChange('blueFont')}></button>
                    <button className='pacificBlueButton colorButton' onClick={() => handleFontColorChange('pacificBlueFont')}></button>
                    <button className='fluorescentBlueButton colorButton' onClick={() => handleFontColorChange('fluorescentBlueFont')}></button>
                    <button className='greenLizardButton colorButton' onClick={() => handleFontColorChange('greenLizardFont')}></button>
                    <button className='lemonYellowButton colorButton' onClick={() => handleFontColorChange('lemonYellowFont')}></button>
                    <button className='sunglowButton colorButton' onClick={() => handleFontColorChange('sunglowFont')}></button>
                    <button className='chromeYellowButton colorButton' onClick={() => handleFontColorChange('chromeYellowFont')}></button>
                    <button className='lightCoralButton colorButton' onClick={() => handleFontColorChange('lightCoralFont')}></button>
                    <button className='magentaCrayolaButton colorButton' onClick={() => handleFontColorChange('magentaCrayolaFont')}></button>
                    <button className='heliotropeButton colorButton' onClick={() => handleFontColorChange('heliotropeFont')}></button>
                    <button className='purpleButton colorButton' onClick={() => handleFontColorChange('purpleFont')}></button>
                    <button className='blackButton colorButton' onClick={() => handleFontColorChange('blackFont')}></button>
                    <button className='whiteButton colorButton' onClick={() => handleFontColorChange('whiteFont')}></button>
                </div>

                <form action="" className='textForm'>
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

                    
                    {inputFields.map((field, index) => {
                    return (
                        <Fragment>
                            <div key = {index} className='linkInput'>
                                <label htmlFor="websiteName">Website Name</label>
                                <input 
                                type="text"
                                name='websiteName'
                                value={field.websiteName}
                                placeholder='Website Name'
                                onChange = {event => handleUrlFormChange(index, event)}
                                />

                                <label htmlFor="link">Link</label>
                                <input 
                                type="text"
                                name ='link'
                                value={field.link}
                                placeholder='Enter URL'
                                onChange = {event => handleUrlFormChange(index, event)}
                                />
                                <button onClick={(event) => removeFields(index, event)} className='delete'>Remove Link</button>
                            </div>
                        </Fragment>
                    )
                    
                } )}
                    <button onClick = {addFields} className='add'>Add Link</button>
                </form>

            </div>



        </section>

        </Fragment>  


    )
    
  
}

 
    


export default Form