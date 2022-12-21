import { Link } from 'react-router-dom';
import Footer from './Footer';
const Header = () => {
  

    return(
        <header>
            <div className="headerContent">                
                <div className="wrapper">

                    <div className="bblob">
                        <h1>Web Dev in Progress</h1>
                    </div>{/* END bblob */}
                    
                        <h2 className='intro'>If you are in the midst of creating or upgrading your Web Developer portfolio, but need a placeholder - this is just what you need. Here you can easily create a quick, but stylish, landing page for your up and coming portfolio:</h2>
                    
                        <ul>
                            <li>Customize your background by searching up any image or choosing a colour</li>
                            <li>Enter your name, your position title or a mini blurb about yourself</li>
                            <li>Add or remove important links like GitHub, LinkedIn and Twitter</li>
                            <li>Customize your information with a few font and colour options</li>
                            <li>Copy and paste the HTML and CSS directly to your code to use your personalized landing page</li>
                        </ul>

                        <Link to="/main" className='routerLink'>Get Started</Link>

                </div>{/* END wrapper */}
            </div>{/* END headerContent */}
                <Footer />
        </header>  
    )
}

export default Header;