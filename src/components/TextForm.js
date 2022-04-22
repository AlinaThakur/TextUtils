import React,{useState} from "react";



export default function TextForm(props) {
  const [text, setText] = useState("");
    const handleUpClick = () =>{
       // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
     }

  const handleClearlClick =() =>{
     let newText = '';
    setText(newText); 
  }

  const handleLwClick =() =>{
    let newText = text.toLowerCase();
    setText(newText); 
  }


  // const handleReplaceClick =() =>{
  //   let newText = text.replace();
  //   setText(newText); 
  // }
    

    const handleOnChange = (event) =>{
        //console.log("On Change");
        event.preventDefault();
        // let newText = text.split();
        // setText(newText.join[" "]);
        setText(event.target.value);
    }

    const handleCopy = () =>{
 
    let text = document.getElementById("myBox");
     text.select();
      navigator.clipboard.writeText(text.value); 
    }


   
const RemoveExtraSpaces = () =>{
     let newText = text.split(" ");
     setText(newText.join[" "]);
    // handleOnChange();
}


   
//    text="new text"; //wrong way to change the state
//    setText=("new text"); //correct way to change the state

  return (
     <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label for="myBox" className="form-label">
          Example textarea
        </label> */}
        <textarea
          className="form-control" value={text} onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
         {/* <textarea
          className="form-control" value={text} onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea> */}
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
         Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLwClick}>
         Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearlClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-1" onClick={RemoveExtraSpaces}>
        RemoveExtra Text
      </button>
      {/* <button className="btn btn-primary mx-1" onActive={handleReplaceClick}>
       Text Replace
      </button> */}
      </div>

      <div className="container my-2">
          <h1> Your text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          {/* <p>{text.split(" ").length()} words and {text.length} characters</p>*/}
          {/* 1m/125(words)=0.008 */}
          <p> {0.008 * text.split(" ").length} Minutes read</p> 
          <h2>Preview</h2>
          <p>{text}</p>
     </div>
    </>
  );
}
