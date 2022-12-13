import { Fragment } from 'react'
import Form from './Form.js'
import Preview from './Preview.js'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Main = () => {

    const [userBackground, setUserBackground] = useState ([]);

    



    return (
        <Fragment> 

            <Link to="/" className='routerLink'>Back to Home</Link>

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