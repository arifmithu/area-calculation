function rectangleAreaCalculation(){
    const getWidthHtml = document.getElementById("rectangle-width");
    const getWidthInnerText = getWidthHtml.value;
    const width = Number(getWidthInnerText);

    const getlengthHtml = document.getElementById("rectangle-length");
    const getLengthInnerText = getlengthHtml.value;
    const length = Number(getLengthInnerText);

    const area = width * length;

    const updateHtml = document.getElementById("rectangle-area");
    updateHtml.innerText = area;
}