import { Link } from "react-router-dom"

const Download = ({userBackground, userText, inputFields}) => {
    return (
        <section className="downloadSection">

            <Link to="/main" className='routerLink homeLink'>Back</Link>

            <div className="copy">
                {/* HEAD */}
                <p>&lt;!DOCTYPE html&gt;</p>
                <p>&lt;html lang="en"&gt;</p>
                <p>&lt;head&gt;</p>
                <pre><p>    &lt;meta charset="UTF-8" /&gt;</p></pre>
                <pre><p>    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;</p></pre>
                <pre><p>    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;</p></pre>
                <pre><p>    &lt;title&gt;Document&lt;/title&gt;</p></pre>
                <p>&lt;/head&gt;</p>

                {/* BODY */}
                <p>&lt;body&gt;</p>
                    {/* BACKGROUND CONTAINER */}
                    <pre><p>    &lt;div class="backgroundContainer"&gt;</p></pre>

                        {/* WRAPPER */}
                        <pre><p>        &lt;div class="wrapper"&gt;</p></pre>
                            {/* TEXT CONTAINER */}
                            <pre><p>            &lt;div class="textContainer"&gt;</p></pre>

                                <pre><p>                &lt;h1&gt;{userText.name}&lt;/h1&gt;</p></pre>
                                <pre><p>                &lt;h2&gt;{userText.subtitle}&lt;/h2&gt;</p></pre>
                                {/* Map through links */}
                                <pre><p>                &lt;a href=""&gt;&lt;/a&gt;</p></pre>                    

                            <pre><p>            &lt;/div&gt;</p></pre>

                        <pre><p>        &lt;/div&gt;</p></pre>
                            
                    <pre><p>    &lt;/div&gt;</p></pre>
            
                <p>&lt;/body&gt;</p>
                <p>&lt;/html&gt;</p>
            </div>
        </section>
    )
}

export default Download