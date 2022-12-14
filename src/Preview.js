const Preview = ({userBackground, userText}) => {

    console.log(userBackground)

    return (
        
        
        <section className="previewSection">
            <div className="wrapper">

                <div className="preview">
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