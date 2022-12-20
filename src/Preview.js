import classNames from 'classnames'
const Preview = ({userBackground, userText, inputFields, font, fontColor, backgroundColor}) => {

    const previewClasses = classNames("wrapper", font, fontColor)
    const previewSectionClasses = classNames("previewSection", backgroundColor)

    return (

            <section className={previewSectionClasses}>
                
                <div className={previewClasses}>

                    <h1>{userText.name}</h1>
                    <h2>{userText.subtitle}</h2>

                    <div>
                        {inputFields.map((field, index) => {
                            return (
                                <div className={fontColor} key={index}>
                                    <a target="_blank" href={field.link}>{field.websiteName}</a>
                                </div>
                            )
                        })}

                        <div className="backgroundContainer">
                        <img src={userBackground.image} alt={userBackground.alt} />
                        </div>
                    </div>
                </div>

            </section>
    )
}

export default Preview