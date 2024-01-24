import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been converted to upper case","success")
    }

    const handleLoClick =()=>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Text has been converted to lower case","success")
  }

  const handleClClick =()=>{
    let newText = "";
    setText(newText)
    props.showAlert("Text has been cleared","success")
}

const handleScClick = () => {
  let currentText = text;
  let sentences = currentText.split(/(?<=[.!?])\s+/);
  let newText = sentences.map(sentence => {
    if (sentence.charAt(0) === sentence.charAt(0).toUpperCase()) {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
    } else {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }
  }).join(' ');
  setText(newText);
  props.showAlert("Text has been converted to sentence case","success");
};



const handleCcClick = () => {
  let words = text.split(" ");
  let capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  let newText = capitalizedWords.join(' ');
  setText(newText);
  props.showAlert("Text has been converted to capitalized case","success")
};

  const handleCpClick = () => {
    let textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    props.showAlert("Text has been copied to clipboard","success")
  };

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

  return (
    <>
    <div style={{color: props.mode==='dark' ? 'white' : 'black'}}>
    <h1 style={{ textAlign: 'left' }}>{props.heading}</h1>
    </div>
<div className="mb-3">   
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleScClick}>Convert to sentence case</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCcClick}>Convert to capitalized case</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCpClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard me-2" viewBox="0 0 16 16" >
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
      </svg>
       Copy
    </button>
    
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
      <h1>Your text summary</h1>
      <p>{text.trim().split(/\s+/).filter(word => word !== '').length} words and {text.trim().split(/\s+/).join('').length} characters</p>
      <p>{0.008 * text.trim().split(/\s+/).join('').length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    
    </>
  )
}
