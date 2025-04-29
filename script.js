document.getElementById("button").addEventListener("click", button);
// Call Function Store User Input and Implement Action
function button()
{
    let topB = +document.getElementById("1").value;
    let bottomB = +document.getElementById("2").value;
    let height = +document.getElementById("3").value;
    let answer = 1/2 * (topB + bottomB) * height;
    let rounded = answer.toFixed(2);
    let unit = document.getElementById("select").value;
    document.getElementById("span").innerHTML = `${rounded} ${unit}²`;
    document.getElementById("button").classList.add("green");
    document.getElementById("img").classList.add("img");
    document.getElementById("img").src = ("img/t.png");
    document.getElementById("1").value = "";
    document.getElementById("2").value = "";
    document.getElementById("3").value = "";
    document.getElementById("span").classList.add("span");
}
