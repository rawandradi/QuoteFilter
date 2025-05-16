const input = document.getElementById("Input");
const list = document.getElementById("List");
const errorMsg = document.getElementById("errorMsg");

let allQ = [];// list of all quotes

fetch("https://dummyjson.com/quotes")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); 
  })
  .then((data) => {
    allQ = data.quotes;  
    render(allQ);        // Display Q
  })
  .catch((error) => {
    errorMsg.textContent = "Failed to load quotes. Please try again later.";// error msg
  });

function render(Q) {
  list.innerHTML = "";  
  
  Q.forEach((quote) => {
    const li = document.createElement("li");
    li.textContent = quote.quote;
    list.appendChild(li);
  });
}
// apply filter 
input.addEventListener("input", () => {
  const search = input.value.toLowerCase(); 
  const filteredQ = allQ.filter((quote) =>
    quote.quote.toLowerCase().includes(search) 
  );
  render(filteredQ); 
});
