import axios from 'axios';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Form = ({setUserBackground, userText, setUserText, setInputFields, inputFields, setFont, setFontColor, setBackgroundColor}) => {

    // ************ Unsplash Search State Variables ************ //
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

    // Background image search functions
    const searchHandleChange = (e) => {
        setUserSearch(e.target.value)
    }
    
    const searchHandleSubmit = (e) => {
        e.preventDefault();
        getImages();
    }

    // Background changing functions
    const backgroundHandleChange = (e) => {
        const backgroundSplit = e.target.value.split(",")
        const image = backgroundSplit[0]
        const alt = backgroundSplit[1]
        
        setUserBackground({
            image: image,
            alt: alt
        })
    }
        
    // Text changing functions
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
                onSubmit={searchHandleSubmit}
            >
                <div className="searchBar">
                    <label htmlFor="userAPISearch"></label>
                    <input 
                        placeholder='Search for a background image!'
                        type="text" 
                        name="userAPISearch"
                        onChange={searchHandleChange}
                    />
                    <button type='submit' className='submit'>Search</button>
                </div>

                <div className='colorButtons'>
                    <button className='B80000 colorButton' onClick={() => handleBackgroundColorChange('B80000')}></button>
                    <button className='DB3E00 colorButton' onClick={() => handleBackgroundColorChange('DB3E00')}></button>
                    <button className='bc008B02 colorButton' onClick={() => handleBackgroundColorChange('bc008B02')}></button>
                    <button className='bc004DCF colorButton' onClick={() => handleBackgroundColorChange('bc004DCF')}></button>
                    <button className='bc33A8C7 colorButton' onClick={() => handleBackgroundColorChange('bc33A8C7')}></button>
                    <button className='bc52E3E1 colorButton' onClick={() => handleBackgroundColorChange('bc52E3E1')}></button>
                    <button className='A0E426 colorButton' onClick={() => handleBackgroundColorChange('A0E426')}></button>
                    <button className='FDF148 colorButton' onClick={() => handleBackgroundColorChange('FDF148')}></button>
                    <button className='FECE24 colorButton' onClick={() => handleBackgroundColorChange('FECE24')}></button>
                    <button className='FFAB00 colorButton' onClick={() => handleBackgroundColorChange('FFAB00')}></button>
                    <button className='F77976 colorButton' onClick={() => handleBackgroundColorChange('F77976')}></button>
                    <button className='F050AE colorButton' onClick={() => handleBackgroundColorChange('F050AE')}></button>
                    <button className='D883FF colorButton' onClick={() => handleBackgroundColorChange('D883FF')}></button>
                    <button className='bc9336FD colorButton' onClick={() => handleBackgroundColorChange('bc9336FD')}></button>
                    <button className='bc000 colorButton' onClick={() => handleBackgroundColorChange('bc000')}></button>
                    <button className='fff colorButton' onClick={() => handleBackgroundColorChange('fff')}></button>
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
                    </div>{/* END searchResults */}
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
                </div>{/* END fontOptions */}

                <div className='sideBar'>

                    <div className='colorButtons'>
                        <button className='B80000 colorButton' onClick={() => handleFontColorChange('redFont')}></button>
                        <button className='DB3E00 colorButton' onClick={() => handleFontColorChange('orangeFont')}></button>
                        <button className='bc008B02 colorButton' onClick={() => handleFontColorChange('greenFont')}></button>
                        <button className='bc004DCF colorButton' onClick={() => handleFontColorChange('blueFont')}></button>
                        <button className='bc33A8C7 colorButton' onClick={() => handleFontColorChange('pacificBlueFont')}></button>
                        <button className='bc52E3E1 colorButton' onClick={() => handleFontColorChange('fluorescentBlueFont')}></button>
                        <button className='A0E426 colorButton' onClick={() => handleFontColorChange('greenLizardFont')}></button>
                        <button className='FDF148 colorButton' onClick={() => handleFontColorChange('lemonYellowFont')}></button>
                        <button className='FECE24 colorButton' onClick={() => handleFontColorChange('sunglowFont')}></button>
                        <button className='FFAB00 colorButton' onClick={() => handleFontColorChange('chromeYellowFont')}></button>
                        <button className='F77976 colorButton' onClick={() => handleFontColorChange('lightCoralFont')}></button>
                        <button className='F050AE colorButton' onClick={() => handleFontColorChange('magentaCrayolaFont')}></button>
                        <button className='D883FF colorButton' onClick={() => handleFontColorChange('heliotropeFont')}></button>
                        <button className='bc9336FD colorButton' onClick={() => handleFontColorChange('purpleFont')}></button>
                        <button className='bc000 colorButton' onClick={() => handleFontColorChange('blackFont')}></button>
                        <button className='fff colorButton' onClick={() => handleFontColorChange('whiteFont')}></button>
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

                </div>{/* END sideBar */}
            </section>
        </Fragment>  
    )
}

export default Form