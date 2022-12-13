import axios from 'axios';
import { Fragment, useState } from 'react';
import Preview from './Preview';

const Form = ({userBackground, setUserBackground}) => {

    
    const [userSearch, setUserSearch] = useState('')
    const [userSearchResults, setUserSearchResults] = useState( [] )
    // const [userBackgroundSelect, setUserBackgroundSelect] = useState( [] )

    const [titlePreview, setTitlePreview] = useState('')
    const [subtitlePreview, setSubtitlePreview] = useState('')
    const [linkedinUrl, setLinkedinUrl] = useState('')
    const [githubUrl, setGithubUrl] = useState('')

    // const [inputPreview, setInputPreview] = useState({
    //     title: '',
    //     subtitle: ''
    // })



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
        setUserBackground(backgroundSplit)
        // setUserBackgroundSelect(backgroundSplit)
        
        // const backgroundObject = {}
        
        // backgroundSplit.forEach((elem, i) => {
            //     backgroundObject[i] = elem
            // });
            
            // console.log(backgroundObject)
            // setUserBackground(backgroundObject)
        }
        
    // const backgroundHandleSubmit = (e) => {
    //     e.preventDefault();
    //     setUserBackground(userBackgroundSelect)
    // }



    // Title preview function
    const titlePreviewHandleChange = (e) => {
        setTitlePreview(e.target.value)
    }

    // Subtitle preview function
    const subtitlePreviewHandleChange = (e) => {
        setSubtitlePreview(e.target.value)
    }

    const linkedinUrlHandleChange = (e) => {
        setLinkedinUrl(e.target.value)
    }

    const githubUrlHandleChange = (e) => {
        setGithubUrl(e.target.value)
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
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>

            <form 
            // onSubmit={backgroundHandleSubmit}
            >
                {userSearchResults.map((result) => {
                    return (
                        <Fragment key={result.id}>
                            
                            <input
                                onChange={backgroundHandleChange}
                                name='url'
                                type= 'radio'
                                // value='{"url": "result.urls.full", "alt": "result.alt_description"}'
                                value={`${result.urls.full}, ${result.alt_description}`}
                            ></input>

                            <label 
                                htmlFor="url"
                                key={result.blur_hash} 
                            >
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
{/* 
                 <button type='submit'>Update Background</button> */}
            </form>









            <form className='sideBar' action="">
                <label htmlFor="">Name</label>
                <input 
                type="text" 
                name="name"
                value={titlePreview}
                onChange={titlePreviewHandleChange}
                />

                <label htmlFor="">Subtitle</label>
                <input 
                type="text" 
                name="subtitle"
                value={subtitlePreview}
                onChange={subtitlePreviewHandleChange}
                />

                <label htmlFor="">Linkedin</label>
                <input 
                type="text" 
                name="linkedin"
                value={linkedinUrl}
                onChange={linkedinUrlHandleChange}
                />

                <label htmlFor="">Github</label>
                <input 
                type="text" 
                name="github"
                value={githubUrl}
                onChange={githubUrlHandleChange}
                />

            </form>

            <Preview 
                titlePreview={titlePreview}
                subtitlePreview={subtitlePreview}
                linkedinUrl={linkedinUrl}
                githubUrl={githubUrl}
            />
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