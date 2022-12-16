import { Link } from 'react-router-dom';
const Header = () => {
  

    return(
        <div className="header">
            <div className="wrapper">
                <h1>Web Dev in Progress</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptatibus enim similique dolore laborum nisi odit temporibus consequuntur amet. Perspiciatis nemo tempora fugit, facere, eius sapiente, ut inventore ullam corporis consequuntur alias debitis. Odio, assumenda optio. Molestiae esse rerum earum autem eveniet quisquam excepturi voluptate quos error? Cum, ipsum atque?</p>

                <Link to="/main" className='routerLink'>Get Started</Link>

            </div>
            
        </div>
        
    )
}

export default Header;