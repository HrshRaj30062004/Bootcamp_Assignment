function calcArea(event){
    event.preventDefault();

    var radius=parseFloat(document.getElementsByClassName("area")[0].value);
    var area=Math.PI * radius * radius;
    alert("Area of Circle is "+ area);
}
