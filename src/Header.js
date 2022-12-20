import { Link } from 'react-router-dom';
const Header = () => {
  

    return(
        <header>
            
            <div className="wrapper">

                <div className="bblob">
                    <h1>Web Dev in Progress</h1>
                </div>

                    <h2>If you are in the midst of creating or upgrading your Web Developer portfolio, but need a placeholder - this is just what you need. Here you can easily create a quick, but stylish, landing page for your up and coming portfolio:</h2>
                
                <ul>
                    <li>Customize your background by searching up any image or choosing a colour</li>
                    <li>Enter your name, your position title or a mini blurb about yourself</li>
                    <li>Add or remove important links like GitHub, LinkedIn and Twitter.</li>
                    <li>Customize your information with a few font options</li>
                    <li>Download the HTML and CSS directly to your computer and your personalized landing page is ready to go</li>
                </ul>

                <p>Click the button below to get started!</p>

                <Link to="/main" className='routerLink'>Get Started</Link>

            </div>
        </header>
            
    )
}

export default Header;