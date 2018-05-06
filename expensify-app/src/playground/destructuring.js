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
