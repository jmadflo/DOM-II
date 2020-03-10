// hover over header to make bg yellow
let headerVar = document.querySelector("header");
headerVar.addEventListener('mouseover', () => {
    headerVar.style.backgroundColor = "yellow";
})

// move mouse elsewhere to turn purple
headerVar.addEventListener('mouseleave', () => {
    headerVar.style.backgroundColor = "purple";
})

// rotate images 360 degrees when pressed over the course of two seconds
Array.from(document.getElementsByTagName('img')).forEach(img => {
    img.addEventListener('mousedown', () => {
        img.style.transform = "rotate(360deg)";
        img.style.transition = "2s";
    })
})

// paragraph text turns red when you move your mouse over it
document.querySelectorAll('p').forEach( para => {
    para.addEventListener('mousemove', () => {
        para.style.color = "red";
    })
})

// give images an orange dashed border when you move your finger up after clicking the mouse
document.querySelectorAll('img').forEach( img => {
    img.addEventListener('mouseup', () => {
        img.style.border = "3px dashed orange";
    })
})

// turn body background green when an h2 is pressed
Array.from(document.getElementsByTagName('h2')).forEach( h2Tag => {
    h2Tag.addEventListener('click', () => {
        document.body.style.backgroundColor = "green";
    })
})

// destination block disappears when clicked
document.querySelectorAll('.destination').forEach( dest => {
    dest.addEventListener('click', () => {
        dest.style.display = "none";
    })
})

// footer doubles in height when dbl clicked
let footerVar = document.querySelector('footer');
footerVar.addEventListener('dblclick', () => {
    footerVar.style.transform = "scale(1,2)";
    footerVar.style.transition = "2s";
})

// send an alert when the h1 tag text is copied
let h1Var = document.querySelector('h1');
h1Var.addEventListener('copy', () => {
    alert(`You just copied the text "${h1Var.textContent}" which is an h1 tag`)
})

// when any paragraph is double clicked, add a new paragraph to the end of the section titled "Pick Your Destination"
document.querySelectorAll('p').forEach( para => {
    para.addEventListener('dblclick', () => {
        let newPara = document.createElement("p").appendChild(document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));

        document.querySelector(".content-destination").appendChild(newPara);
    })
})

// first event listener stops propagation of the event, so the event listener after it should never be activated
let navVar = document.querySelector('nav');
navVar.addEventListener('dblclick', event => {
    navVar.style.justifyContent = "flex-start";
    event.stopPropagation();
})

headerVar.addEventListener('dblclick', () => {
    alert("This should not be seen");
})

// prevent default behavior of links
// test by pressing home link which has an href connected to the footer
document.querySelectorAll('.nav-link').forEach( link => {
    link.addEventListener('click', event => {
        event.preventDefault();
    })
})