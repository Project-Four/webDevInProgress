import { Link } from "react-router-dom"

const Download = ({userBackground, userText, inputFields}) => {
    return (
        <section className="downloadSection">
            <div className="wrapper">
                <Link to="/main" className='routerLink homeLink'>Back</Link>

                <div className="userCopy">
                    <div className="copyHtml">
                        {/* HEAD */}
                        <pre>
                            <p>&lt;!DOCTYPE html&gt;</p>
                            <p>&lt;html lang="en"&gt;</p>
                            <p>&lt;head&gt;</p>
                            <p>    &lt;meta charset="UTF-8" /&gt;</p>
                            <p>    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;</p>
                            <p>    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;</p>
                            <p>    &lt;title&gt;Document&lt;/title&gt;</p>
                            <p>&lt;/head&gt;</p>

                            {/* BODY */}
                            <p>&lt;body&gt;</p>
                            {/* BACKGROUND CONTAINER */}
                            <p>    &lt;div class="backgroundContainer"&gt;</p>
                            {/* WRAPPER */}
                            <p>        &lt;div class="wrapper"&gt;</p>
                            {/* TEXT CONTAINER */}
                            <p>            &lt;div class="textContainer"&gt;</p>
                            <p>                &lt;h1&gt;{userText.name}&lt;/h1&gt;</p>
                            <p>                &lt;h2&gt;{userText.subtitle}&lt;/h2&gt;</p>
                            {/* Map through links */}
                            {inputFields.map((field, index) => {
                                return (
                                    <div key={index}>
                                    <p>                &lt;a href="{field.link}"&gt;{field.websiteName}&lt;/a&gt;</p>
                                    </div>
                                )
                            })}              
                            <p>            &lt;/div&gt;</p>
                            <p>    &lt;/div&gt;</p>     
                            <p>&lt;/body&gt;</p>
                            <p>&lt;/html&gt;</p>
                        </pre>
                    </div>

                    <div className="copyCss">
                    
                            

                    </div>{/* END copyCss */}
                </div>{/* END userCopy */}
            </div>
        </section>
    )
}

export default Download
