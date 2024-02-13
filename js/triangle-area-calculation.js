function areaCalculation(){
    const getBaseHtml = document.getElementById("triangle-base");
    const getBaseInnerText = getBaseHtml.value;
    const base = Number(getBaseInnerText)
    const getHeightHtml = document.getElementById("triangle-height");
    const getHeightInnerText = getHeightHtml.value;
    const height = Number(getHeightInnerText);
    const area = 0.5 * base * height;
    const updateHtml = document.getElementById("triangle-area");
    updateHtml.innerText = area;
}