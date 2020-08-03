
function buttClick() {
    document.getElementById("convertCel").onclick = convertCelClick;
    document.getElementById("convertFa").onclick = convertFaClick;
}

function convertCelClick() {
    var cInput = document.getElementById("c");//.value * 9 / 5 + 32;
    var cOutput = parseFloat(cInput.value);
    document.getElementById("celError").innerText = "";

    if (isNaN(cOutput))
    {
        document.getElementById("celError").innerText = "Value \""
                + cInput.value + "\" is not a number!"
        document.getElementById("celError").style.color = "red";
        setTimeout(function () { document.getElementById("celError").innerText = "" }, 5000);
        return;
    }

    cOutput = cOutput * 9 / 5 + 32;
    document.getElementById("f").value = cOutput;
}

function convertFaClick() {
    var fInput = document.getElementById("f");
    var fOutput = parseFloat(fInput.value);
    document.getElementById("faError").innerText = "";

    if (isNaN(fOutput))
    {
        document.getElementById("faError").innerText = "Value \""
            + fInput.value + "\" is not a number!";
        document.getElementById("faError").style.color = "red";
        setTimeout(function () { document.getElementById("faError").innerText = "" }, 5000);
        return;
    }

    fOutput = (fOutput - 32) * (5 / 9);
    document.getElementById("c").value = fOutput;
}
