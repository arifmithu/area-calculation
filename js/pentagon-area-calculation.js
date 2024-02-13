function pentagonAreaCalculation(){
    const getperimeterHtml = document.getElementById("pentagon-perimeter");
    const getperimeterInnerText = getperimeterHtml.value;
    const perimeter = Number(getperimeterInnerText)
    const getbaseHtml = document.getElementById("pentagon-base");
    const getbaseInnerText = getbaseHtml.value;
    const base = Number(getbaseInnerText);
    const area = 0.5 * perimeter * base;
    const updateHtml = document.getElementById("pentagon-area");
    updateHtml.innerText = area;
}