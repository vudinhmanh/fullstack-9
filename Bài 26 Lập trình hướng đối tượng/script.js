// Sử dụng class và extends

// Định nghĩa lớp Animal
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(this.name + " makes a sound");
  }
}

// Kế thừa từ lớp Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Gọi constructor của lớp cha
    this.breed = breed;
  }

  bark() {
    console.log(this.name + " barks");
  }
}

// Sử dụng lớp Dog
const dog = new Dog("Buddy", "Golden Retriever");
dog.makeSound();
dog.bark();
