const Form = () => {

    // API call
    axios({
    url: 'https://api.unsplash.com/search/photos',
    params: {
      method: 'GET',
      client_id: 'hBNNU3fausksBX8Iir21vcSOZhnQmtoEut-59TPJj7Q',
      query: 'background',
      per_page: 6,
      content_filter: 'high',
      orientation: 'landscape'
    }
  })
    .then((res) => {
      console.log(res)
    })


    

}

export default Form