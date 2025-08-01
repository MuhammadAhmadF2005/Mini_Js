const input = document.getElementById("input")

function reversedString(str) {
    return str.split("").reverse().join("")
}

function Check() {
    const value = input.value
    alert(value)
    const reverse = reversedString(value)

    if (value === reverse) {
        alert("P A L I N D R O M E")
    }
    else {
        alert("Not today !")
    }

    input.value = ""
}

