//
// Object destructuring
//

const person = {
  name: 'Sebastian',
  age: 29,
  location: {
    city: 'Wolfsburg',
    temp: '22',
  }
};

const { name = 'Anonymous', age } = person;
console.log(`${name} is ${age}`);

const { temp: temperature, city } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature}°C in ${city}`)
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin',
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, arrayCity, state] = address;
console.log(`You are in ${arrayCity} ${state}.`);

const item = ['coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice,] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
