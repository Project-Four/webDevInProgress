import Form from './Form.js'
import Preview from './Preview.js'
import Download from './Download.js'
import Footer from './Footer.js'
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

    // Font color picker state variable
    const [fontColor, setFontColor] = useState('fc000')

    // Background color picker state variable
    const [backgroundColor, setBackgroundColor] = useState('')

    return (
        <main className='mainWrapper'> 

            <Form 
                setUserBackground={setUserBackground}
                userText={userText}
                setUserText={setUserText}
                setInputFields={setInputFields}
                inputFields={inputFields}
                setFont={setFont}
                setFontColor={setFontColor}
                setBackgroundColor={setBackgroundColor}
            />
            <Preview
                userBackground={userBackground}
                userText={userText}
                inputFields={inputFields}
                font={font}
                fontColor={fontColor}
                backgroundColor={backgroundColor}
            />
            <Download
                userBackground={userBackground}
                userText={userText}
                inputFields={inputFields}
                font={font}
                fontColor={fontColor}
                backgroundColor={backgroundColor}
            />
        
            <Footer />
        </main>
    )
    
}

export default Main