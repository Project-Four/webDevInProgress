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

    return (
        <main> 

            <Form 
                setUserBackground={setUserBackground}
                userText={userText}
                setUserText={setUserText}
            />
            <Preview
                userBackground={userBackground}
                userText={userText}
            />
        </main>
    )
    
}

export default Main