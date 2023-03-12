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

const categoryList = [
  {title: 'Popular', category: 'Popular'},
  {title: 'Fresh Teas', category: 'Fresh'},
  {title: 'Fruit Teas', category: 'Fruit'},
  {title: 'Smoothies', category: 'Smoothie'}
]

const drinks = [
  // popular
  { quantity: 1, category: 'Popular', name: "Jasmine Green Tea", info: 'Fresh brewed jasmine green tea leaves imported straight from China', price: 4.50, photo: greenTea, sugar: '', ice: '', custom: [] },
  { quantity: 1, category: 'Popular', name: "Mango Avocado", info: 'Mango green tea with an avocado twist, only for the daring... and healthy', price: 5.50, photo: mangoPhoto, sugar: '', ice: '', custom: [] },
  { quantity: 1, category: 'Popular', name: "Watermelon Green Tea", info: 'Fresh cut watermelon blended with jasmine green tea', price: 5.50, photo: watermelonPhoto, sugar: '', ice: '', custom: [] },
  { quantity: 1, category: 'Popular', name: "Strawberry Matcha", info: 'Deep bitter matcha flown straight from Japan with an optional blend of strawberry', price: 5.50, photo: strawberryMatchaPhoto, sugar: '', ice: '', custom: [] },
  { quantity: 1, category: 'Popular', name: "Tropical Sunset", info: 'Jasmine leaves, cuts of strawberry, kiwi, pineapple, and mango', price: 5.50, photo: smoothiePhoto, sugar: '', ice: '', custom: [] },

  // fresh
  { quantity: 1, category: 'Fresh', name: "Assam Black Tea", info: 'Black assam leaves, the standard tea for boba', price: 4.50, photo: blackTea, sugar: '', ice: '', custom: [] },
  { quantity: 1, category: 'Fresh', name: "Jasmine Green Tea", info: 'Fresh brewed jasmine green tea leaves imported straight from China', price: 4.50, photo: greenTea, sugar: '', ice: '', custom: [] },
  // { category: 'fresh', name: "Roasted Oolong Tea", info: 'Original oolong tea leaves for an earthy aftertaste', price: 4.50, photo: oolongTea },
  { quantity: 1, category: 'Fresh', name: "Osmanthus Oolong Tea", info: 'Oolong tea infused with osmanthus flowers for a floral aroma', price: 4.50, photo: teaPhoto, sugar: '', ice: '', custom: [] },
  
  // fruit
  { quantity: 1, category: 'Fruit', name: "Peach Oolong Tea", info: 'Oolong tea paired with fresh picked blended peaches', price: 4.50, photo: fruitPhoto, sugar: '', ice: '', custom: [] },
  { quantity: 1, category: 'Fruit', name: "Orange Oolong Tea", info: 'Fresh orange squeeze with roasted oolong tea', price: 4.50, photo: orangePhoto, sugar: '', ice: '', custom: [] },
  { quantity: 1, category: 'Fruit', name: "Strawberry Black Tea", info: 'Strawberry and assam black tea pairing for earthy and sweet flavors', price: 4.50, photo: strawberryPhoto, sugar: '', ice: '', custom: [] },
  { quantity: 1, category: 'Fruit', name: "Mango Green Tea", info: 'Jasmine green tea and mellow sweet mango', price: 5.50, photo: mangoPhoto, sugar: '', ice: '', custom: [] },
  { quantity: 1, category: 'Fruit', name: "Watermelon Green Tea", info: 'Fresh cut watermelon blended with jasmine green tea', price: 5.50, photo: watermelonPhoto, sugar: '', ice: '', custom: [] },
  
  // smoothie
  { quantity: 1, category: 'Smoothie', name: "Tropical Sunset", info: 'Jasmine leaves, cuts of strawberry, kiwi, pineapple, and mango', price: 5.50, photo: smoothiePhoto, sugar: '', ice: '', custom: [] },
  { quantity: 1, category: 'Smoothie', name: "Strawberry Matcha", info: 'Deep bitter matcha flown straight from Japan with an optional blend of strawberry', price: 5.50, photo: strawberryMatchaPhoto, sugar: '', ice: '', custom: [] },
  { quantity: 1, category: 'Smoothie', name: "Mango Avocado", info: 'Mango green tea with an avocado twist, only for the daring... and healthy', price: 5.50, photo: mangoPhoto, sugar: '', ice: '', custom: [] },
  { quantity: 1, category: 'Smoothie', name: "Orange Melody", info: 'Refreshing blended orange slices, osmanthus oolong, and lemon juice', price: 5.50, photo: orangePhoto, sugar: '', ice: '', custom: [] },
  ];

  const toppings = [
  {name: 'Boba', price: 0.50},
  {name: 'Mini Boba', price: 0.50},
  {name: 'Creme Brulee', price: 1.00},
  {name: 'Pudding', price: 0.50},
  {name: 'Taro', price: 0.50},
  {name: 'Grass Jelly', price: 0.50},
  {name: 'Mochi', price: 0.50},
  {name: 'Aloe', price: 0.50}
  ];

export {drinks, toppings, categoryList};