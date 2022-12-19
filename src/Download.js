import { Link } from "react-router-dom"

const Download = ({userBackground, userText, inputFields, font}) => {

    // https://bobbyhadz.com/blog/react-capitalize-first-letter
    const capitalize = (string) => {
        return (
            string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
        )
    }

    return (
        <section className="downloadSection">
            <div className="wrapper">
                <Link to="/main" className='routerLink homeLink'>Back</Link>

                <div className="userCopy">
                    <div className="copyHtml">
                        <h2>Your HTML</h2>
                        <pre><code className="language-markup">
                        &lt;!DOCTYPE html&gt;<br/>&lt;html lang="en"&gt;<br/>&lt;head&gt;<br/>    &lt;meta charset="UTF-8" /&gt;<br/>    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;<br/>    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;<br/>    &lt;title&gt;Document&lt;/title&gt;<br/>    &lt;link rel="stylesheet" href="./styles.css"&gt;&lt;/link&gt;<br/>    &lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;<br/>    &lt;link rel="preconnect" href="https://fonts.gstatic.com" crossorigin&gt;<br/>    &lt;link href="https://fonts.googleapis.com/css2?family={capitalize(font)}&display=swap" rel="stylesheet"&gt; 
                        
                        
                        &lt;/head&gt;<br/>&lt;body&gt;<br/>    &lt;header class="backgroundContainer"&gt;<br/>        &lt;div class="flexContainer"&gt;<br/>            &lt;div class="wrapper"&gt;<br/>                &lt;div class="textContainer"&gt;<br/>                    &lt;h1 class="title"&gt;{userText.name}&lt;/h1&gt;<br/>                    &lt;h2 class="subtitle"&gt;{userText.subtitle}&lt;/h2&gt;<br/>
                        {inputFields.map((field) => { return (
                            <>                    &lt;a href="{field.link}"&gt;{field.websiteName}&lt;/a&gt;<br/></>        
                            )
                        })}                &lt;/div&gt;<br/>            &lt;/div&gt;<br/>        &lt;/div&gt;<br/>    &lt;/header&gt;<br/>&lt;/body&gt;<br/>&lt;/html&gt;<br/>
                        </code></pre>
                    </div>

                    <div className="copyCss">
                        <h2>Your CSS</h2>
                        <pre><code className="language-markup">
                        html&#123;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%&#125;body&#123;margin:0&#125;article,aside,footer,header,nav,section&#123;display:block&#125;h1&#123;font-size:2em;margin:.67em 0&#125;figcaption,figure,main&#123;display:block&#125;figure&#123;margin:1em 40px&#125;hr&#123;box-sizing:content-box;height:0;overflow:visible&#125;pre&#123;font-family:monospace,monospace;font-size:1em&#125;a&#123;background-color:transparent;-webkit-text-decoration-skip:objects&#125;abbr[title]&#123;border-bottom:none;text-decoration:underline;text-decoration:underline dotted&#125;b,strong&#123;font-weight:inherit&#125;b,strong&#123;font-weight:bolder&#125;code,kbd,samp&#123;font-family:monospace,monospace;font-size:1em&#125;dfn&#123;font-style:italic&#125;mark&#123;background-color:#ff0;color:#000&#125;small&#123;font-size:80%&#125;sub,sup&#123;font-size:75%;line-height:0;position:relative;vertical-align:baseline&#125;sub&#123;bottom:-.25em&#125;sup&#123;top:-.5em&#125;audio,video&#123;display:inline-block&#125;audio:not([controls])&#123;display:none;height:0&#125;img&#123;border-style:none&#125;svg:not(:root)&#123;overflow:hidden&#125;button,input,optgroup,select,textarea&#123;font-family:sans-serif;font-size:100%;line-height:1.15;margin:0&#125;button,input&#123;overflow:visible&#125;button,select&#123;text-transform:none&#125;button,html [type=button],[type=reset],[type=submit]&#123;-webkit-appearance:button&#125;button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner&#123;border-style:none;padding:0&#125;button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring&#123;outline:1px dotted ButtonText&#125;fieldset&#123;padding:.35em .75em .625em&#125;legend&#123;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal&#125;progress&#123;display:inline-block;vertical-align:baseline&#125;textarea&#123;overflow:auto&#125;[type=checkbox],[type=radio]&#123;box-sizing:border-box;padding:0&#125;[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button&#123;height:auto&#125;[type=search]&#123;-webkit-appearance:textfield;outline-offset:-2px&#125;[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration&#123;-webkit-appearance:none&#125;::-webkit-file-upload-button&#123;-webkit-appearance:button;font:inherit&#125;details,menu&#123;display:block&#125;summary&#123;display:list-item&#125;canvas&#123;display:inline-block&#125;template&#123;display:none&#125;[hidden]&#123;display:none&#125;<br/>
                        
                        <br/>html &#123; box-sizing: border-box;&#125;<br/>
                        
                        <br/>*, *:before, *:after &#123;box-sizing: inherit&#125;<br/>
                        
                        <br/>.sr-only &#123; position: absolute; width: 1px; height: 1px; margin: -1px; border: 0; padding: 0; white-space: nowrap; clip-path: inset(100%); clip: rect(0 0 0 0); overflow: hidden;&#125;<br/>


                        <br/>html &#123;<br/>    font-size: 125%;<br/>    font-family: {capitalize(font)};<br/>
                        &#125;<br/>
                        <br/>.wrapper &#123;<br/>    width: 90%;<br/>    margin: 0 auto;<br/>    max-width: 1260px;<br/>   
                        &#125;<br/>
                        <br/>.flexContainer &#123;<br/>    height: 100vh;<br/>    display: flex;<br/>    align-items: center;<br/>    justify-content: center;<br/>
                        &#125;<br/>
                        <br/>.backgroundContainer &#123;<br/>    background-image: url({userBackground.image});<br/>    height: 100vh;<br/>    background-size: cover;<br/>    background-position: center;<br/>
                        &#125;<br/>

                        <br/>.textContainer &#123;<br/>    display: flex;<br/>    flex-direction: column;<br/>    align-items: center;<br/>    justify-content: space-between;<br/>    height: 50vh;<br/>
                        &#125;<br/>    


                        
                        <br/>.title &#123;<br/>    font-size: 3rem;<br/>
                        &#125;<br/>
                        <br/>.subtitle &#123;<br/>    font-size: 2.5rem;<br/>
                        &#125;<br/>
                        <br/>.links &#123;<br/>    font-size: 1.5rem;<br/>
                        &#125;<br/>
                        </code></pre>
                    </div>{/* END copyCss */}
                </div>{/* END userCopy */}
            </div>
        </section>
    )
}

export default Download
