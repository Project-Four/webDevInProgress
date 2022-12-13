import { Fragment } from 'react'
import Form from './Form.js'
import Preview from './Preview.js'
import { useState } from 'react'

const Main = () => {

    const [userBackground, setUserBackground] = useState ([]);

    



    return (
        <main> 

            <Form 
                userBackground={userBackground}
                setUserBackground={setUserBackground}
            />
            <Preview
                userBackground={userBackground}
            />
        </main>
    )
    
}

export default Main