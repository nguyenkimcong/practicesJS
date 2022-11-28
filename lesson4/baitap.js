//Bài 1: Tạo một biến lưu thông tin về một con vật nuôi trong nhà là một object gồm các key sau: type
// (chó, mèo, chim...), name, breed (giống), hairColor, favoriteFood (là một mảng gồm các giá trị chuỗi).
    const type = {
        name: "chó",
        breed: "đực",
        hairColor: "đen",
        favoriteFood: "thịt"
    }
    const type1 = {
        name: "mèo",
        breed: "đực",
        hairColor: "trắng",
        favoriteFood: "cá"
    }
    const type2 = {
        name: "chim",
        breed: "cái",
        hairColor: "vàng",
        favoriteFood: "cám"
    }

Object.keys(type1);
// Bài 2: In ra cửa sổ console giá trị của một key bất kỳ trong object tạo ra từ bài 1.
console.log(type1);
// Bài 3: Thêm vào object ở bài 1 key “yearOld” để bổ sung số tuổi cho con vật, sử dụng giá trị số. In ra
// cửa sổ console dữ liệu của object sau khi đã bổ sung key - value mới.
type.yearOld = 3;
//Bài 4: Viết một hàm nhận tham số là một object giống object của bài 1. Từ các key và giá trị của
// object đó, hàm trả về một chuỗi có nội dung như sau: “Nhà tôi có một con mèo tên là Tom, nó thích
// ăn cá, bánh xèo, bít tết.”
function createString(object) {
    return `Nhà tôi có một con ${object.type} tên là ${object.name}, nó thích ăn ${object.favoriteFood}.`
}

console.log(createString(type));


// Bài 5: Tạo một biến có giá trị là một mảng chứa 3 object giống bài 1. Thông tin về các con vật không
// được trùng nhau quá nhiều và tuổi của chúng phải khác nhau.
var alltype = [
    {
        name: "chó",
        breed: "đực",
        hairColor: "đen",
        favoriteFood: "thịt"
    },
     {
        name: "mèo",
        breed: "đực",
        hairColor: "trắng",
        favoriteFood: "cá"
    },
    {
        name: "chim",
        breed: "cái",
        hairColor: "vàng",
        favoriteFood: "cám"
    }
];
console.log(alltype);

function Car(brand, price, country){
    this.brand = brand;
    this.price = price;
    this.country = country;
    this.speed = function() {
        console.log(`my name is ${this.country}`);
    }
}
car = new Car('bmi', '2toi', 'Germany');


const sampleProto = {
    name: "cong",
    greet(){
        `My name is ${this.name}`
    }
}
sample_1 = Object.create(sampleProto);

sample_1.greet = function() {
    console.log(`not from proto`);
}

function Computer(cpu, ram){
    this.cpu = cpu;
    this.ram = ram;
    this.talk = function(){
    console.log(`i'm ${this.cpu} and ${this.ram}`)
 }
}
//cách 2:
Computer.prototype.talk = function (){
    console.log(`i'm ${this.cpu} and ${this.ram}`)
}

//BÀI 1:

function Airplane (name){
    this.name = name;
    this.isFlying = fall;
}
    const instances = {
        takeOff(){
            this.isFlying = true
        },
        land(){
            this.isFlying = fall
        }
 };
Airplane.prototype = instances;
var airplane = new Airplane('MH370');
airplane.isFlying();
airplane.takeOff();
airplane.isFlying();
airplane.land();
airplane.isFlying();
