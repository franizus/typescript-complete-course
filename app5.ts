import * as Circle from "./math/circle";
import calc from "./math/rectangle";

console.log(Circle.PI);
console.log(Circle.calculateCirumcumference(10));
console.log(calc(20, 50));

namespace MyMath {
    const PI = 3.14;

    export function calculateCircumference(diameter: number) {
        return diameter * PI;
    }

    export function calculateRectangle(width: number, length: number) {
        return width * length;
    }
}

console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculateCircumference(5));
