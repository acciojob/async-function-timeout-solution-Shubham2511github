async function changeText() {
	const text = document.getElementById("text").value;
	const time = document.getElementById("delay").value;

	if(!text && !time){
		alert("Enter text and time pls");
		return;
	}

	const ms = parseInt(time) * 1000;
	
	await new Promise((resolve) => setTimeout(resolve ,time));

	document.getElementById("output").textContent = text;
}
document.getElementById("btn").addEventListener("click", changeText);