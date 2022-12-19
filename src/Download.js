import { Fragment } from "react"
import { Link } from "react-router-dom"

const Download = ({userBackground, userText, inputFields}) => {

    return (
        <section className="downloadSection">
            <div className="wrapper">
                <Link to="/main" className='routerLink homeLink'>Back</Link>

                <div className="userCopy">
                    <div className="copyHtml">
                        <pre><code className="language-markup">
                        &lt;!DOCTYPE html&gt;<br/>&lt;html lang="en"&gt;<br/>&lt;head&gt;<br/>    &lt;meta charset="UTF-8" /&gt;<br/>    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;<br/>    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;<br/>    &lt;title&gt;Document&lt;/title&gt;<br/>&lt;/head&gt;<br/>&lt;body&gt;<br/>    &lt;header class="backgroundContainer"&gt;<br/>        &lt;div class="flexContainer"&gt;<br/>            &lt;div class="wrapper"&gt;<br/>                &lt;div class="textContainer"&gt;<br/>                    &lt;h1 class="title"&gt;{userText.name}&lt;/h1&gt;<br/>                    &lt;h2 class="subtitle"&gt;{userText.subtitle}&lt;/h2&gt;<br/>
                        {inputFields.map((field) => { return (
                            <>                    &lt;a href="{field.link}"&gt;{field.websiteName}&lt;/a&gt;<br/></>        
                            )
                        })}                &lt;/div&gt;<br/>            &lt;/div&gt;<br/>        &lt;/div&gt;<br/>    &lt;/header&gt;<br/>&lt;/body&gt;<br/>&lt;/html&gt;<br/>
                        </code></pre>
                    </div>

                    <div className="copyCss">
                        <pre><code className="language-markup">
                        .wrapper &#123;<br/>    width: 90%;<br/>    margin: 0 auto;<br/>    max-width: 1260px;<br/>   
                        &#125;<br/>
                        .flexContainer &#123;<br/>    height: 100vh;<br/>    display: flex;<br/>    align-items: center;<br/>    justify-content: center;<br/>
                        <br/>.backgroundContainer &#123;<br/>    background-image: url({userBackground.image});<br/> 
                        <br/>h1, h2 &#123;<br/>    text-align: center;<br/>
                        &#125;<br/>
                        <br/>.title &#123;<br/>    padding: 75px 100px;<br/>    font-size: 3rem;<br/>
                        &#125;<br/>
                        <br/>.subtitle &#123;<br/>    font-size: 2.5rem;<br/>    padding-bottom: 100px;<br/>
                        &#125;<br/>
                        <br/>.links &#123;<br/>    font-size: 1.5rem;<br/>    padding: 40px;<br/>    margin: 60px;<br/>
                        &#125;<br/>
                        </code></pre>
                    </div>{/* END copyCss */}
                </div>{/* END userCopy */}
            </div>
        </section>
    )
}

export default Download