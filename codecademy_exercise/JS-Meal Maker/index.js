const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
    set mains(mains) {
        this._courses.mains = mains;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        }
        return this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name},${dessert.name}The price is $${totalPrice}.`;
    }
};
menu.addDishToCourse('appetizers', 'ABC', 4.25);
menu.addDishToCourse('appetizers', 'EFG', 5.25);


menu.addDishToCourse('mains', '123', 6.25);
menu.addDishToCourse('mains', '456', 7.25);

menu.addDishToCourse('desserts', 'abc 123', 8.25);
menu.addDishToCourse('desserts', 'efg 456', 9.25);

let meal = menu.generateRandomMeal();
console.log(meal);
