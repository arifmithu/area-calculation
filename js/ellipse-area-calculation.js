function ellipseAreaCalculation(){
    const getMainAxisHtml = document.getElementById("main-axis");
    const getMainAxisInnerText = getMainAxisHtml.value;
    const mainAxis = Number(getMainAxisInnerText)
    const getSecondaryAxisHtml = document.getElementById("secondary-axis");
    const getSecondaryAxisInnerText = getSecondaryAxisHtml.value;
    const secondaryAxis = Number(getSecondaryAxisInnerText);
    const area = 3.14 * mainAxis * secondaryAxis;
    const updateHtml = document.getElementById("ellipse-area");
    updateHtml.innerText = area;
}