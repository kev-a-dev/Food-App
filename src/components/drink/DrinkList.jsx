import React from "react";
import Drink from "./Drink";
import teaPhoto from '../../assets/teaPhoto.png';
import fruitPhoto from '../../assets/fruitPhoto.png';
import smoothiePhoto from '../../assets/smoothiePhoto.png';
import watermelonPhoto from '../../assets/watermelonPhoto.png';
import mangoPhoto from '../../assets/mangoPhoto.png';
import strawberryPhoto from '../../assets/strawberryPhoto.png';
import orangePhoto from '../../assets/orangePhoto.png';
import strawberryMatchaPhoto from '../../assets/strawberryMatchaPhoto.png';
import greenTea from '../../assets/greenTea.png';
import oolongTea from '../../assets/oolongTea.png';
import blackTea from '../../assets/blackTea.png';
import newTea from '../../assets/newTea.png';

export default function DrinkList() {
  const popular = [
    { name: "Assam Black Tea", info: 'Black assam leaves, the standard tea for boba', price: "$4.50", photo: blackTea },
    { name: "Orange Melody", info: 'Blended orange slices, osmanthus oolong, and a squeeze of lemon for a refreshing summer drink', price: "$5.50", photo: orangePhoto },
    { name: "Peach", info: 'Choice of fresh tea with fresh picked blended peaches', price: "$4.50", photo: fruitPhoto },
    { name: "Strawberry Matcha", info: 'Deep bitter matcha flown straight from Japan with an optional blend of strawberry', price: "$5.50", photo: strawberryMatchaPhoto },
    { name: "Tropical Sunset", info: 'Jasmine leaves, cuts of strawberry, kiwi, pineapple, and mango', price: "$5.50", photo: smoothiePhoto },
  ];

  const fresh = [
    { name: "Assam Black Tea", info: 'Black assam leaves, the standard tea for boba', price: "$4.50", photo: blackTea },
    { name: "Jasmine Green Tea", info: 'Jasmine green leaves, a popular favorite for jasmine green tea lovers', price: "$4.50", photo: greenTea },
    { name: "Roasted Oolong Tea", info: 'Original oolong tea leaves for an earthy aftertaste', price: "$4.50", photo: oolongTea },
    { name: "Osmanthus Oolong Tea", info: 'Oolong tea infused with osmanthus flowers for a floral aroma', price: "$4.50", photo: teaPhoto },
  ];

  const fruit = [
    { name: "Peach", info: 'Choice of fresh tea with fresh picked blended peaches', price: "$4.50", photo: fruitPhoto },
    { name: "Orange", info: 'Fresh orange squeeze with a black assam tea', price: "$4.50", photo: orangePhoto },
    { name: "Strawberry", info: 'Pairs well with assam black tea leaves to showcase earthy and sweet flavors', price: "$4.50", photo: strawberryPhoto },
    { name: "Mango", info: 'Jasmine green tea leaves by default, but you are welcome to try with other bases', price: "$5.50", photo: mangoPhoto },
    { name: "Watermelon", info: 'We suggest jasmine as the base for fresh cut watermelon', price: "$5.50", photo: watermelonPhoto },
  ];

  const smoothie = [
    { name: "Tropical Sunset", info: 'Jasmine leaves, cuts of strawberry, kiwi, pineapple, and mango', price: "$5.50", photo: smoothiePhoto },
    { name: "Strawberry Matcha", info: 'Deep bitter matcha flown straight from Japan with an optional blend of strawberry', price: "$5.50", photo: strawberryMatchaPhoto },
    { name: "Mango Avocado", info: 'Mango green tea with an avocado twist, only for the daring... and healthy', price: "$5.50", photo: mangoPhoto },
    { name: "Orange Melody", info: 'Blended orange slices, osmanthus oolong, and a squeeze of lemon for a refreshing summer drink', price: "$5.50", photo: orangePhoto },
  ];

  const comingSoon = [
    { name: "Assam Black Tea", info: 'Black assam leaves, the standard tea for boba', price: "$4.50", photo: newTea },
    { name: "Jasmine Green Tea", info: 'Jasmine green leaves, a popular favorite for jasmine green tea lovers', price: "$4.50", photo: newTea },
    { name: "Strawberry", info: 'Pairs well with assam black tea leaves to showcase earthy and sweet flavors', price: "$4.50", photo: newTea },
    { name: "Watermelon", info: 'We suggest jasmine as the base for fresh cut watermelon', price: "$5.50", photo: newTea },
  ];

  return (
    <section id="drink-list">
      <section id="popular">
        <h3 className="title">Popular</h3>
        <div className="category">
          {popular.map((drink, index) => (
            <Drink key={index} name={drink.name} info={drink.info} price={drink.price} photo={drink.photo}/>
          ))}
        </div>
      </section>
      <section id="fresh">
        <h3 className="title">Fresh Teas</h3>
        <div className="category">
          {fresh.map((drink, index) => (
            <Drink key={index} name={drink.name} info={drink.info} price={drink.price} photo={drink.photo}/>
          ))}
        </div>
      </section>
      <section id="fruit">
        <h3 className="title">Fruit Teas</h3>
        <div className="category">
          {fruit.map((drink, index) => (
            <Drink key={index} name={drink.name} info={drink.info} price={drink.price} photo={drink.photo}/>
          ))}
        </div>
      </section>
      <section id="smoothies">
        <h3 className="title">Smoothies</h3>
        <div className="category">
          {smoothie.map((drink, index) => (
            <Drink key={index} name={drink.name} info={drink.info} price={drink.price} photo={drink.photo}/>
          ))}
        </div>
      </section>
      <section id="comingSoon">
        <h3 className="title">Coming Soon...</h3>
        <div className="category">
          {comingSoon.map((drink, index) => (
            <Drink key={index} name={drink.name} info={drink.info} price={drink.price} photo={drink.photo}/>
          ))}
        </div>
      </section>
    </section>
  );
}
