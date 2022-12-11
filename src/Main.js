import { Fragment } from 'react'
import Form from './Form.js'
import Preview from './Preview.js'
import { useState } from 'react'

const Main = () => {

    const [userBackground, setUserBackground] = useState ({
        backgroundSelection: '',
        alt: ''
    });

    



    return (
        <Fragment> 
            <Form 
                userBackground={userBackground}
                setUserBackground={setUserBackground}
            />
            <Preview
                userBackground={userBackground}
            />
        </Fragment>
    )
    
}

export default Main