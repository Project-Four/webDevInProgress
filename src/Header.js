import { useRef } from "react";


const Header = () => {
  
    const main = useRef(null);

    const scroll = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: 'smooth'
        })
      }

    return(
        <div className="header">
            <div className="wrapper">
                <h1>Web Dev in Progress</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptatibus enim similique dolore laborum nisi odit temporibus consequuntur amet. Perspiciatis nemo tempora fugit, facere, eius sapiente, ut inventore ullam corporis consequuntur alias debitis. Odio, assumenda optio. Molestiae esse rerum earum autem eveniet quisquam excepturi voluptate quos error? Cum, ipsum atque?</p>

                <button onClick={() => scroll(main)}>Get Started</button>

            </div>
            
        </div>
        
    )
}

export default Header;