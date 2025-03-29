let b1 = document.getElementById("b1");
let interval;
b1.addEventListener('click', () => {
    interval = setTimeout(() => {
        window.open("index.html");
    }, 3000);
    let y = document.createElement('div');
    // y.style.height = "400px";
    // y.style.width = "700px";
    document.querySelector(".login-container").style.display = "none";
    document.querySelector("body").appendChild(y);

    let f = document.createElement('p');
    let m=document.querySelector("#username").value;
    f.innerHTML = "Welcome " + m + " LET'S EXPLORE";
    
    f.style.fontSize = "100px";
    f.style.color = "linear-gradient(to right, #007bff, #00d4ff)"; 
    f.style.background = "black";
    f.style.webkitBackgroundClip = "text"; 
    f.style.color = "transparent"; 
    f.style.animation = "exploreAnimation 3s ease-in-out";
    y.appendChild(f);
});

const style = document.createElement('style');
style.innerHTML = `
@keyframes exploreAnimation {
    0% {
        opacity: 0;
        transform: scale(0.5);
    }
    50% {
        opacity: 1;
        transform: scale(1.1);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}
`;
document.head.appendChild(style);
