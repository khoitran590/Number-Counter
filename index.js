const decreaseBtn = document.getElementById("btn-decrease");
const increaseBtn = document.getElementById("btn-increase");
const resetBtn = document.getElementById("btn-reset");
const countLabel = document.getElementById("countLabel");
const randomize = document.getElementById("Randomize")

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
randomize.onclick = function(){
    count = Math.floor(Math.random() * 100);
    countLabel.textContent = count;
}