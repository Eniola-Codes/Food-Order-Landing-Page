# HOMELY food order application

A simulation of an Application where you can order and pay for food

**End Result**

Click the link : https://foodapp-by-eniola.netlify.com

# Description

**Details**

Homely is an single page application with a well structured layout, where you view both information  of the web app and order food items by adding them to the cart. 

The application let you see both the name and image of each product then gives you the flexibility to add between one to five 5 items to the cart at once with a single button click. 

![item image](https://github.com/Eniola-Codes/Food-Order-Landing-Page/blob/main/src/assets/image/Item.png?raw=true)

The Cart button located at the navbar in the header section, this buttons contains a counter in a badge, which counts the number of items in the cart an if there are no items in the cart, it displays 0. For a better user experience on the frontend of the application, the button undergoes a subtle bump whenever an item has being added to the cart.

![Cart button](https://github.com/Eniola-Codes/Food-Order-Landing-Page/blob/main/src/assets/image/cart_button.png?raw=true)

A click of the cart button opens the cart, the cart systems allows you to view the image, name and quantity of each particular good you have added to cart. It also gives you the flexibility to remove and add to the quantity of any particular item. You can close or open the cart at any given time.

![Cart item](https://github.com/Eniola-Codes/Food-Order-Landing-Page/blob/main/src/assets/image/cart_item.png?raw=true)

All navbar links are functioning, on clicking them, they scroll you to the respective sections in the page.

**Technologies**

Technologies i used to build this are  React.js, Css, react-bootstrap, react-scroll, animation on scroll library, sweetalert.js library

I used React.js framework to bootstrap this project because of the limitless functionalities and flexibilities it brings to me, examples of the these are : 

- useContext hook which i used this to manage the state of some components in my application which includes the functioning cart system
- Props to pass some data from component to component with ease.
- Access to 3rd party libraries that made the app much better like react-scroll and react-bootstrap, 

I then used animation on scroll for the scroll animation and sweetalert for the order validation.

**Challenges**

The challenge i faced while building was using useContext to manage the app wide state, becausei am more familiar with redux and redux toolkit for managing state.

**Features to be added**

This is the version 1.0 of the food order application but i hope to improve the app and make it even better in future versions. The features i will love to add are :

- A checkout form
- Implement a dummy flutterwave payment gateway
- Store user order in firebase
- Making the code more cleaner and improving the user experience.
- Css modules to prevent clashing of class names across components

# Installation and Running

git clone or pull the project in your terminal, open the project folder on your local laptop in a code editor and run "npm start" in your editors terminal.



