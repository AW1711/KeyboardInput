const input = document.getElementById("input");
const button = document.getElementById("button");
const outputList = document.getElementById("outputList");

input.addEventListener("keydown", (event) => {
    const key = event.key;
    const code = event.code;
    const keyCode = event.keyCode || event.which; // Use event.which as a fallback for keyCode

    // Clear previous content in the outputList
    outputList.innerHTML = "";

    // Create separate list items for key, code, and keyCode
    const keyListItem = document.createElement("li");
    keyListItem.textContent = `Key: ${key}`;

    const codeListItem = document.createElement("li");
    codeListItem.textContent = `Code: ${code}`;

    const keyCodeListItem = document.createElement("li");
    keyCodeListItem.textContent = `Key code value: ${keyCode}`;

    // Append the list items to the output list
    outputList.appendChild(keyListItem);
    outputList.appendChild(codeListItem);
    outputList.appendChild(keyCodeListItem);
});


const welcomeTextContainer = document.getElementById("welcomeTextContainer");

welcomeTextContainer.addEventListener("mouseover", () => {
    welcomeTextContainer.style.padding = "20px";
});

welcomeTextContainer.addEventListener("mouseout", () => {
    welcomeTextContainer.style.padding = "10px";
});

