"use strict"
let sec = document.getElementsByClassName("sec");

let first;

    for (let first = 0; first <sec.length ; first++) {
        sec[first].onclick=function() {
         let panel= document.querySelectorAll("panel");
                [...panel].forEach(element => {
                    element.classlist.toggle(active);
                });
        };
    }
