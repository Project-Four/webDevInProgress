import Form from './Form.js'
import Preview from './Preview.js'
import Download from './Download.js'

import { useState } from 'react'
import { Link } from 'react-router-dom'

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
    const [font, setFont] = useState();

    // Color Picker State Variables
    const [color, setColor] = useState('#fffff')

    const [fontColor, setFontColor] = useState()

    return (
        <main> 

            <Form 
                setUserBackground={setUserBackground}
                userText={userText}
                setUserText={setUserText}
                setInputFields={setInputFields}
                inputFields={inputFields}
                setFont={setFont}
                fontColor={fontColor}
                setFontColor={setFontColor}
            />
            <Preview
                userBackground={userBackground}
                userText={userText}
                inputFields={inputFields}
                font={font}
                fontColor={fontColor}
                setFontColor={setFontColor}
            />
            <Download
                userBackground={userBackground}
                userText={userText}
                inputFields={inputFields}
            />
        </main>
    )
    
}

export default Main