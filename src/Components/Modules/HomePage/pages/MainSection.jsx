import React from 'react'
import SameSection from './SameSections';

 const MainSection = () => {
  const SECTION_INFO = [
  {
    title: "Your daily essentials at your doorstep",
    description: "Skip the line at the store and let Cheetay deliver groceries to you We offer the widest variety of best quality products and amazing service. Checking off items from your shopping list has never been easier.",
    imageUrl: "https://www.cheetay.pk/static/images/newLandingPage/grocery.jpg",
    buttonText: "Order groceries now"
  },
  {
    title: "  Your favourite food delivered instantly",
    description: " Craving a burger, pizza, or hummus? Guests showed up unexpectedly? Impromptu movie night with friends? Cheetay has you covered. Thousands of dishes from hundreds of restaurants are now at your fingertips.",
    imageUrl: "https://www.cheetay.pk/static/images/newLandingPage/food.jpg",
    buttonText: "Order food now!"
  },
    {
    title: "    Take care of yourself. We'll take care of the rest",
    description: " You can now get prescription and over-the-counter medicines delivered to your doorstep. Simply upload your prescription onto our app and tap into our one-stop-shop for complete health and wellness.",
    imageUrl: "https://www.cheetay.pk/static/images/newLandingPage/pharma.jpg",
    buttonText: "Order Medicine now!"
  },
    {
    title: "   Introducing Sahar - 100% fresh, full cream cow milk",
    description: "  Sahar is pure, organic, and unadulterated milk that contains no additives or chemicals. We take end-to-end ownership of the entire process to bring you the very best from farm to fridge. Click on the 'Dairy' icon to select your preferred quantity, date,time, and payment method for your delivery. Scan the QR code on the pouch to access quality test results.",
    imageUrl: "https://www.cheetay.pk/static/images/newLandingPage/dairy.jpg",
    buttonText: "Get your Free sample"
  }
];
  
    return (
    <div>

         {SECTION_INFO.map((info,index) => (
        <SameSection key={index} {...info} />
      ))}
    </div>
  )
}
export default MainSection