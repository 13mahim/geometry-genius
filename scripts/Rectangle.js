function calculateRectangleArea(){
    // get length of the rectangle
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const lengthText = rectangleLengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    // get width of the rectangle
    const rectangleWidthInput = document.getElementById("rectangle-width")
    const widthText = rectangleWidthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    // calculate area
    const area = length * width;
    console.log("area of the rectangle is: ", area);

    // display area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}