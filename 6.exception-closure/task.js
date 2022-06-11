function parseCount(value){
    let parse = parseInt(value)
    if (isNaN(parse)){
        const parseEror = new Error("Невалидное значение");
        throw parseEror
    }

    return parse
}

function validateCount(pars){
    try{
        parseCount(pars)
        return parseCount(pars)
    } catch (parseEror) {
        return parseEror
    }

}

class Triangle {
    constructor(side1, side2, side3){

        if (side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2){
            const triangleError = new Error("Треугольник с такими сторонами не существует");
            throw triangleError;
        }
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter(){
        let perimetr = this.side1 + this.side2 + this.side3
        return perimetr
    }

    getArea(){
        let p = this.getPerimeter() * 0.5;
        let s = Math.sqrt(p * ((p - this.side1) * (p - this.side2) * (p - this.side3)))
        s = +s.toFixed(3)
        return s
    }

}

function getTriangle(side1, side2, side3){
    try{
        new Triangle
        return new Triangle(side1, side2, side3)
    } catch  {
        return {
            getArea(){
                return "Ошибка! Треугольник не существует"
            },

            getPerimeter(){
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}