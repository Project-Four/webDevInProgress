import classNames from 'classnames'
const Preview = ({userBackground, userText, inputFields, font}) => {

    const previewClasses = classNames("wrapper", font)

    return (

            <section className="previewSection">
                
                <div className={previewClasses}>

                    <div className="previewText">
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

                    <div className="backgroundContainer">
                        <img src={userBackground.image} alt={userBackground.alt} />
                    </div>
                </div>

            </section>
    )
}

export default Preview