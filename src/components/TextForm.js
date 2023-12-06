import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleRevClick = ()=>{
        let splitText = text.split("");
        let newText = splitText.reverse();
        var joinText = newText.join("");
        setText(joinText);
        props.showAlert("Texts are reversed","success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed", "success");
    }

    // const handleFontchange = (e) => {
    //     setSize(e.target.value);
    // }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
    // const [size, setSize] = useState(15);
    
  return (
    <>
    <div className='container'>
        <h1 style={{color: props.mode === 'dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
            {/* <input type="number" value={size} onChange={handleFontchange}/> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'gray':'white', color: props.mode === 'dark'?'white':'black'}}id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleRevClick}>Reverse</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-2" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
    </div>
    </>
  )
}
