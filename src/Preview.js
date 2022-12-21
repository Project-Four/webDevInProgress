import classNames from 'classnames'

const Preview = ({userBackground, userText, inputFields, font, fontColor, backgroundColor}) => {
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
                                        <a target="_blank" rel="noreferrer" href={field.link}>{field.websiteName}</a>
                                    </div>
                                )
                            })}
                    </div>{/* END preview */}
                </div>{/* END previewText wrapper */}

                <div className='backgroundContainer'>
                    <img src={userBackground.image} alt={userBackground.alt} />
                </div>{/* END backgroundContainer */}
            </div>{/* END previewClasses */}

        </section>
    )
}

export default Preview