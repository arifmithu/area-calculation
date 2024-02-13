function rhombusAreaCalculation(){
    const getdiameter1Html = document.getElementById("diameter1");
    const getdiameter1InnerText = getdiameter1Html.value;
    const diameter1 = Number(getdiameter1InnerText)
    const getdiameter2Html = document.getElementById("diameter2");
    const getdiameter2InnerText = getdiameter2Html.value;
    const diameter2 = Number(getdiameter2InnerText);
    const area = 0.5 * diameter1 * diameter2;
    const updateHtml = document.getElementById("rhombus-area");
    updateHtml.innerText = area;
}