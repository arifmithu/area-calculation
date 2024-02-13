function parallelogramAreaCalculation(){
    const getBaseHtml = document.getElementById("parallelogram-base");
    const getBaseInnerText = getBaseHtml.value;
    const base = Number(getBaseInnerText)
    const getHeightHtml = document.getElementById("parallelogram-height");
    const getHeightInnerText = getHeightHtml.value;
    const height = Number(getHeightInnerText);
    const area = base * height;
    const updateHtml = document.getElementById("parallelogram-area");
    updateHtml.innerText = area;
}