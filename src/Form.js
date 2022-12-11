import axios from 'axios';
import { useEffect, useState } from 'react';

const Form = ({userBackground, setUserBackground}) => {

    const [data, setData] = useState( [] );

    
    
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
            setData(res.data.results)
        })
    }, [])

    console.log(data)

    const handleChange = (e) => {
        setUserBackground(e.target.value)
    }

    return (
        <div>
            <form>

                {/* Background Images */}
                <label htmlFor="backgroundSelection">Background Image</label>
                <select 
                    onChange={handleChange}
                    name="backgroundSelection"
                    id="backgroundSelection"
                    value={userBackground}
                    >
                        <option disabled>Select One</option>
                        {/* Mapping through background images from unsplash to create select options */}
                        {data.map((img) => {
                            return (
                                <option 
                                    value={img.urls.full}
                                    key={img.blur_hash}    
                                >                            
                                    {img.alt_description} Background
                                </option>
                            )
                        })}
                    </select>


                {/* Background Colours */}
                <label htmlFor="backgroundSelection">Background Colour</label>
                
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
                <label htmlFor="blue"><img src="https://i.imgur.com/Hx1Qo6e.png" alt="a blue square" /></label>

            </form>
        </div>


    )


    

}

export default Form