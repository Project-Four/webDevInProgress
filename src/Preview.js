const Preview = ({userBackground, userText, inputFields}) => {

    console.log(userBackground)

    return (
        
        
        <section className="previewSection">
            <div className="wrapper">

                <div className="preview">
                    {inputFields.map((field, index) => {
                                return (
                                    <div key={index}>
                                        <a className="link" target="_blank" href={field.link}>{field.websiteName}</a>
                                    </div>
                                )
                    })}

                    <h1 className="name">{userText.name}</h1>
                    <h2 className="subtitle">{userText.subtitle}</h2>
                    <div className="backgroundContainer">
                    <img src={userBackground.image} alt={userBackground.alt} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Preview