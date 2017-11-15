E-COMMERCE APP
=============

Demo make e-commerce using server API and server client. Using login fitur with Facebook

List of users routes:

| Routes | HTTP | Description |
|---------------|-------------|---------------|
|`/items`| GET | Get all items to sell |
|`/items`| POST | Adding new item to sell (admin only) |
|`/items/:id`| PUT | Edit a spesific item (admin only) |
|`/items/:id`| DELETE | Delete a spesific item (admin only) |
|`/users/signin`| POST | A user signin into the app using FB |
|`/cart/`| GET | Get all items in cart of user |
|`/cart/`| POST | Add items into cart |
|`/cart/:id`| DELETE | Delete an item from cart |

USAGE
-----

With only npm
> `npm install`

> `npm start`

> `npm run dev`

Access the website via `http://localhost:3000` or API via `http://localhost:3000/api`