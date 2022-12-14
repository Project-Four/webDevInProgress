import axios from 'axios';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Form = ({setUserBackground, userText, setUserText}) => {

    
    const [userSearch, setUserSearch] = useState('')
    const [userSearchResults, setUserSearchResults] = useState( [] )


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

    return (
        <Fragment>
        <section className='backgroundForm'>
            {/* Form to search Unsplash API for photos */}
            <form onSubmit={handleSubmit}>

                <label htmlFor="userAPISearch"></label>
                <input 
                    placeholder='Search for a background image!'
                    type="text" 
                    name="userAPISearch"
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>

            <form>
                {userSearchResults.map((result) => {
                    return (
                        <Fragment key={result.id}>

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

                        </Fragment>
                    )
                })}

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

        <Link to="/" className='routerLink'>Back to Home</Link>

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


        </section>

        </Fragment>




    )



    
  
}

export default Form