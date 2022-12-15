import Form from './Form.js'
import Preview from './Preview.js'
import { useState } from 'react'

const Main = () => {

    const [userBackground, setUserBackground] = useState ({
        image: '',
        alt: ''
    });
    const [userText, setUserText] = useState ({
        name: '',
        subtitle: '',
    })

        // Links State Variables
    const [inputFields, setInputFields] = useState([ {websiteName: '', link: ''} ])

    return (
        <main> 

            <Form 
                setUserBackground={setUserBackground}
                userText={userText}
                setUserText={setUserText}
                setInputFields={setInputFields}
                inputFields={inputFields}
            />
            <Preview
                userBackground={userBackground}
                userText={userText}
                inputFields={inputFields}
            />
        </main>
    )
    
}

export default Main