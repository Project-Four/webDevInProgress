import { Link } from "react-router-dom"

const Download = ({userBackground, userText, inputFields}) => {
    return (
        <section className="downloadSection">
            <div className="wrapper">
                <Link to="/main" className='routerLink homeLink'>Back</Link>

                <div className="userCopy">
                    <div className="copyHtml">
                        <label htmlFor="userHtml">HTML</label>
                        <textarea 
                            name="userHtml" id="userHtml" 
                            cols="30" rows="10"
                            spellCheck="false"
                            readOnly
                            value={
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="backgroundContainer">
        <div class="wrapper">
            <div class="textContainer">
                <h1 class="title">${userText.name}</h1>
                <h2 class="subtitle">${userText.subtitle}</h2>
                <a class="links" href=""></a>
            </div>
        </div>
    </div>
</body>
</html>`
                        }
                        ></textarea>
                    </div>

                    <div className="copyCss">
                        <label htmlFor="userCss">CSS</label>
                        <textarea 
                            name="userHtml" id="userHtml" 
                            cols="30" rows="10"
                            spellCheck="false"
                            readOnly
                            value={
`html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}

html { box-sizing: border-box;}

*, *:before, *:after {box-sizing: inherit}

.sr-only { position: absolute; width: 1px; height: 1px; margin: -1px; border: 0; padding: 0; white-space: nowrap; clip-path: inset(100%); clip: rect(0 0 0 0); overflow: hidden;}`
                            
                            }
                        ></textarea>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Download