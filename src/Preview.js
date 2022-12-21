import classNames from 'classnames'
const Preview = ({userBackground, userText, inputFields, font, fontColor, backgroundColor}) => {
console.log(backgroundColor)
    const previewClasses = classNames("flexContainer", font, fontColor)
    const previewSectionClasses = classNames("previewSection", backgroundColor)

    return (

            <section className={previewSectionClasses}>
                
                <div className={previewClasses}>
 
                    <div className="previewText wrapper">
                        <h1 className='name'>{userText.name}</h1>
                        <h2 className='subtitle'>{userText.subtitle}</h2>

                        <div className="preview">
                            {inputFields.map((field, index) => {
                                return (
                                    <div key={index} className='link'>
                                        <a target="_blank" href={field.link}>{field.websiteName}</a>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>

                    <div className='backgroundContainer'>
                        <img src={userBackground.image} alt={userBackground.alt} />
                    </div>
                </div>

            </section>
    )
}

export default Preview