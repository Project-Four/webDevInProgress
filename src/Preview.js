const Preview = ({userBackground, userText, inputFields}) => {

    return (
        
        
        <section className="previewSection">
            <div className="wrapper">

                <div className="preview">
                    <div className="previewText">
                        <h1 className="name">{userText.name}</h1>
                        <h2 className="subtitle">{userText.subtitle}</h2>
                        {inputFields.map((field, index) => {
                                    return (
                                        <div key={index}>
                                            <a className="link" target="_blank" href={field.link}>{field.websiteName}</a>
                                        </div>
                                    )
                        })}
                    </div>
        
                    <div className="backgroundContainer">
                    <img src={userBackground.image} alt={userBackground.alt} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Preview