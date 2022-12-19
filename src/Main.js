import Form from './Form.js'
import Preview from './Preview.js'
import Download from './Download.js'
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
    const [inputFields, setInputFields] = useState([{
        websiteName: '',
        link: ''
    }])

    // State variable for selected font option
    const [font, setFont] = useState('barlow');


    return (
        <main> 

            <Form 
                setUserBackground={setUserBackground}
                userText={userText}
                setUserText={setUserText}
                setInputFields={setInputFields}
                inputFields={inputFields}
                setFont={setFont}
            />
            <Preview
                userBackground={userBackground}
                userText={userText}
                inputFields={inputFields}
                font={font}
            />
            <Download
                userBackground={userBackground}
                userText={userText}
                inputFields={inputFields}
                font={font}
            />
        </main>
    )
    
}

export default Main