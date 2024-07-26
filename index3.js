

// Manually list the IDs and perform operations
const ids = ['item1', 'item2', 'item3'];

ids.forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener('click', () => {
      console.log(`Clicked on ${id}`);
    });
  }
});
const ids = ['item1', 'item2', 'item3'];
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
