import teaPhoto from './assets/teaPhoto.png';
import fruitPhoto from './assets/fruitPhoto.png';
import smoothiePhoto from './assets/smoothiePhoto.png';
import watermelonPhoto from './assets/watermelonPhoto.png';
import mangoPhoto from './assets/mangoPhoto.png';
import strawberryPhoto from './assets/strawberryPhoto.png';
import orangePhoto from './assets/orangePhoto.png';
import strawberryMatchaPhoto from './assets/strawberryMatchaPhoto.png';
import greenTea from './assets/greenTea.png';
// import oolongTea from './assets/oolongTea.png';
import blackTea from './assets/blackTea.png';

const drinks = [
  // popular
  { quantity: 1, category: 'popular', name: "Jasmine Green Tea", info: 'Fresh brewed jasmine green tea leaves imported straight from China', price: 4.50, photo: greenTea },
  { quantity: 1, category: 'popular', name: "Mango Avocado", info: 'Mango green tea with an avocado twist, only for the daring... and healthy', price: 5.50, photo: mangoPhoto },
  { quantity: 1, category: 'popular', name: "Watermelon Green Tea", info: 'Fresh cut watermelon blended with jasmine green tea', price: 5.50, photo: watermelonPhoto },
  { quantity: 1, category: 'popular', name: "Strawberry Matcha", info: 'Deep bitter matcha flown straight from Japan with an optional blend of strawberry', price: 5.50, photo: strawberryMatchaPhoto },
  { quantity: 1, category: 'popular', name: "Tropical Sunset", info: 'Jasmine leaves, cuts of strawberry, kiwi, pineapple, and mango', price: 5.50, photo: smoothiePhoto },

  // fresh
  { quantity: 1, category: 'fresh', name: "Assam Black Tea", info: 'Black assam leaves, the standard tea for boba', price: 4.50, photo: blackTea },
  { quantity: 1, category: 'fresh', name: "Jasmine Green Tea", info: 'Fresh brewed jasmine green tea leaves imported straight from China', price: 4.50, photo: greenTea },
  // { category: 'fresh', name: "Roasted Oolong Tea", info: 'Original oolong tea leaves for an earthy aftertaste', price: 4.50, photo: oolongTea },
  { quantity: 1, category: 'fresh', name: "Osmanthus Oolong Tea", info: 'Oolong tea infused with osmanthus flowers for a floral aroma', price: 4.50, photo: teaPhoto },
  
  // fruit
  { quantity: 1, category: 'fruit', name: "Peach Oolong Tea", info: 'Oolong tea paired with fresh picked blended peaches', price: 4.50, photo: fruitPhoto },
  { quantity: 1, category: 'fruit', name: "Orange Oolong Tea", info: 'Fresh orange squeeze with roasted oolong tea', price: 4.50, photo: orangePhoto },
  { quantity: 1, category: 'fruit', name: "Strawberry Black Tea", info: 'Strawberry and assam black tea pairing for earthy and sweet flavors', price: 4.50, photo: strawberryPhoto },
  { quantity: 1, category: 'fruit', name: "Mango Green Tea", info: 'Jasmine green tea and mellow sweet mango', price: 5.50, photo: mangoPhoto },
  { quantity: 1, category: 'fruit', name: "Watermelon Green Tea", info: 'Fresh cut watermelon blended with jasmine green tea', price: 5.50, photo: watermelonPhoto },
  
  // smoothie
  { quantity: 1, category: 'smoothie', name: "Tropical Sunset", info: 'Jasmine leaves, cuts of strawberry, kiwi, pineapple, and mango', price: 5.50, photo: smoothiePhoto },
  { quantity: 1, category: 'smoothie', name: "Strawberry Matcha", info: 'Deep bitter matcha flown straight from Japan with an optional blend of strawberry', price: 5.50, photo: strawberryMatchaPhoto },
  { quantity: 1, category: 'smoothie', name: "Mango Avocado", info: 'Mango green tea with an avocado twist, only for the daring... and healthy', price: 5.50, photo: mangoPhoto },
  { quantity: 1, category: 'smoothie', name: "Orange Melody", info: 'Refreshing blended orange slices, osmanthus oolong, and lemon juice', price: 5.50, photo: orangePhoto },
  ];

export default drinks;