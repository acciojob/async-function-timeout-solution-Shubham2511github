const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

//your code here
async function showMessage() {
  const message = text.value;
  const delayVal = delay.value;
  const ms = parseInt(delayVal)*1000;
  await new Promise((resolve) => setTimeout(resolve, ms));
  output.innerText = message;
}

btn.addEventListener("click", showMessage);
