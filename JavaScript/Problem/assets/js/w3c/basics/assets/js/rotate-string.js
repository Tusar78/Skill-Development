/*
Write a JavaScript program to rotate the string 'w3resource' in the right direction. 
This is done by periodically removing one letter from the string end and attaching it to the front.  
*/

const rotateStr = document.querySelector('.rotate-str');
let textNode = rotateStr.childNodes[0];
let text = textNode.data;
setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length-1)
    textNode.data = text;
}, 100)


