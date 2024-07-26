const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const countlabel= document.getElementById("countlabel");


let count = 0;

increase.onclick= function(){
    count++;
    countlabel.textContent =count;

}
decrease.onclick= function(){
    count--;
    countlabel.textContent =count;
    
}
