import axios from 'axios';
import { useEffect } from 'react';

const Form = () => {
    
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
    
      return (
        <div className="App">
    
        </div>
      );    
}

export default Form