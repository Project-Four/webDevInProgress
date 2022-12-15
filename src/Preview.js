const Preview = ({userBackground, inputFields}) => {

    return (
        <section className="previewSection">
            <div className="wrapper">

                <div className="preview">

                    <div>
                        {inputFields.map((field, index) => {
                            return (
                                <div key={index}>
                                    <a target="_blank" href={field.link}>{field.websiteName}</a>
                                </div>
                            )
                        })}
                    </div>

                    <div className="backgroundContainer">
                        <img src="" alt="" />   
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Preview