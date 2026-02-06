import { areaOfCircle,areaOfCylinder,areaOfRectangle,PI} from "./q5_area.js";

console.log(PI);
console.log(areaOfCircle(5));
console.log(areaOfRectangle(3,6));
let [curvedSurfacearea,totalSurfaceArea]=areaOfCylinder(5,12);

console.log(`The Curved Surface area of the Cylinder is ${curvedSurfacearea}`);
console.log(`The Total Surface area of Cylinder is ${totalSurfaceArea}`);