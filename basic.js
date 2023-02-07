function info() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    let job = document.getElementById("job").value;
    document.getElementById("result").innerHTML = `${fname}<br> ${lname} <br> ${age}<br> <span id="work"> ${job}</span>`;
    if (fname.length < 5) {
        document.getElementById("fname").style.color = "green"
    } else {
        document.getElementById("fname").style.color = "rot"
    }
    if (job == "IT") {
        document.getElementById("work").style.background = "purple"
    } else if (job == "hospitality") {
        document.getElementById("work").style.background = "yellow"
    }

}
document.getElementById("submit").addEventListener("click", info);