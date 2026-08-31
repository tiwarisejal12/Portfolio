const text1 = "Hi I'm Sejal Tiwari";
const text2 = "B.Sc IT Student | Software Engineer | Web Developer";

let i = 0;
let j = 0;

function typeHeading1() {
    if (i < text1.length) {
        document.getElementById("heading1").innerHTML += text1.charAt(i);
        i++;
        setTimeout(typeHeading1, 100);
    } else {
        setTimeout(typeHeading2, 500);
    }
}

function typeHeading2() {
    if (j < text2.length) {
        document.getElementById("heading2").innerHTML += text2.charAt(j);
        j++;
        setTimeout(typeHeading2, 80);
    }
}

typeHeading1();