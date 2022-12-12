const Preview = ({userBackground, titlePreview, subtitlePreview, linkedinUrl, githubUrl}) => {
    // console.log(userBackground)
    return (
        <section className="previewSection">
            <div className="wrapper">

                <div className="preview">
                    <h1>{titlePreview}</h1>
                    <h2>{subtitlePreview}</h2>
                    <a href={linkedinUrl}>Linkedin</a>/ 
                    <a href={githubUrl}>Github</a>
                    <div className="backgroundContainer">
                        <img src="" alt="" />   
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Preview