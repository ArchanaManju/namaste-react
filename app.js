import React from "react";
import  ReactDOM from "react-dom/client";

// React.createElement => reactelement as Js object => Htmlelement(on render converted by Babel)
 const heading = React.createElement("h1",{id:"heading"}, "Namaste React") // ==> object need to render this to Dom 
 
 // using Jsx 
 // when Jsx is used its converted into React.createElement by Babel which will give reactelement as Js object => Htmlelement(on render converted by Babel)
 const jsxHeading = <h1 id="heading" >Namaste react using JXS</h1>

 const root = ReactDOM.createRoot(document.getElementById("root"))  // ==> since we need to dispaly in brwser that is dom handling we need to traget rectadom 

 root.render(jsxHeading) //==> redring to dom 