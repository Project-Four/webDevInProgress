const Preview = ({userBackground, userText, inputFields}) => {

    return (
        
        
        <section className="previewSection">
            <div className="wrapper">

                <div className="preview">
                    {inputFields.map((field, index) => {
                                return (
                                    <div key={index}>
                                        <a target="_blank" href={field.link}>{field.websiteName}</a>
                                    </div>
                                )
                    })}

                    <h1>{userText.name}</h1>
                    <h2>{userText.subtitle}</h2>
                    <div className="backgroundContainer">
                    <img src={userBackground.image} alt={userBackground.alt} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Preview