import React from 'react'
import Template from './Template.js';

// const downloadFile = () => {
//     const copy = [ ` <h1> First and last name </h1>`]

//     const file = new Blob (copy, {type:'text/plain'});

//     const element = document.createElement("a");
//     element.href = URL.createObjectURL(file);
//     element.download = "YOUR TEMPLATE" + Date.now() + ".txt"

//     document.body.appendChild(element);

//     element.click();
// }


const Download = () => {
  return (
    <div>
  
   <a href="./template.html" download>

        <button>Download</button>
      </a>
        


        {/* <button 
            id="dowloadBtn"
            value = "download"
            onClick={downloadFile}
            >Download
        </button> */}
    </div>
  )
}

export default Download;