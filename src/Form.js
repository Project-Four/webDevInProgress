import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';

const Form = ({userBackground, setUserBackground}) => {

    
    const [userSearch, setUserSearch] = useState('')
    
    const [userSearchResults, setUserSearchResults] = useState( [] );


    useEffect(() => {
        const apiKey = 'd_goQdbVz1S8P2CqrowdnFHXq8pF0xt7O6Py6INsoAs'
        
        axios({
            url: 'https://api.unsplash.com/search/photos',
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
    }, [])
    

    const handleChange = (e) => {
        const {name, value} = e.target

        setUserBackground(() => {
            return {[name]: value}
        })
        
        
        setUserSearch(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // setUserSearch()
    }

    // console.log("user search", userSearch)
    // console.log("results", userSearchResults)

    return (
        <div>
            {/* Form to search Unsplash API for photos */}
            <form onSubmit={handleSubmit}>

                <label htmlFor="userAPISearch"></label>
                <input 
                    placeholder='Search for a background image!'
                    type="text" 
                    name="userAPISearch"
                    value={userSearch}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>

            <form>
                {userSearchResults.map((result) => {
                    return (
                        <Fragment>
                            
                            <input
                                onChange={handleChange}
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




                {/* Background Images */}
                {/* <label htmlFor="backgroundSelection">Background Image</label>
                <select 
                    onChange={handleChange}
                    name="backgroundSelection"
                    id="backgroundSelection"
                    value={background}
                    > */}
                        {/* <option value="" disabled>Select One</option> */}
                        {/* Mapping through background images from unsplash to create select options */}
                        {/* {data.map((img) => {
                            return (
                                <option 
                                    value={img.urls.full}
                                    key={img.blur_hash}    
                                >                            
                                    {img.alt_description} Background
                                </option>
                            )
                        })}
                </select> */}


                {/* Background Colours */}
                {/* <label htmlFor="backgroundSelection">Background Colour</label>
                
                <input 
                    onChange={handleChange}
                    type="radio" id='white' 
                    name="backgroundSelection" 
                    value='https://www.colorbook.io/imagecreator.php?hex=FFFFFF&width=1920&height=1080'
                />
                <label htmlFor="red"><img src="https://i.imgur.com/tpJaVIY.png" alt="a white square" /></label>

                <input 
                    onChange={handleChange}
                    type="radio" id='red' 
                    name="backgroundSelection" 
                    value='https://www.colorbook.io/imagecreator.php?hex=FF0000&width=1920&height=1080'
                />
                <label htmlFor="red"><img src="https://i.imgur.com/7QOkRzF.png" alt="a red square" /></label>
                
                <input 
                    onChange={handleChange}
                    type="radio" 
                    id='blue' 
                    name="backgroundSelection" 
                    value='https://www.colorbook.io/imagecreator.php?hex=0000FF&width=1920&height=1080'
                />
                <label htmlFor="blue"><img src="https://i.imgur.com/Hx1Qo6e.png" alt="a blue square" /></label> */}

            </form>
        </div>


    )


    
  useEffect(() => {
    const apiKey = 'd_goQdbVz1S8P2CqrowdnFHXq8pF0xt7O6Py6INsoAs'
    
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
        // setData(res.data.results)
        console.log(res);
    })
}, [])
    
      return (
        <div className="App">
    
        </div>
      );    
}

export default Form