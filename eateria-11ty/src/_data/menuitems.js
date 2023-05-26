const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  let url = "https://eateria.azurewebsites.net/api/menuitems?limit=999";

  /* This returns a promise */
  return EleventyFetch(url, {
    duration: "1d", // save for 1 day
    type: "json"    // we’ll parse JSON for you
  });
};

// module.exports = [
//     {
//         "id": "646c5004465cd2c6e0bc03d1",
//         "name": "SLICE OF APPLE PIE",
//         "category": "Desserts",
//         "description": " ",
//         "price": 7,
//         "calories": 375,
//         "customerRating": 3.7,
//         "createdAt": "2023-05-23T05:32:52.215Z",
//         "updatedAt": "2023-05-23T05:32:52.215Z"
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03cf",
//         "name": "CANNOLIS ",
//         "category": "Desserts",
//         "description": "Two",
//         "price": 5,
//         "calories": 425,
//         "customerRating": 4.4,
//         "createdAt": "2023-05-23T05:32:52.206Z",
//         "updatedAt": "2023-05-23T06:12:03.599Z",
//         "photo": {
//             "id": "646c592e465cd2c6e0bc05c8",
//             "alt": "cann",
//             "filename": "Desserts cannolis.jpg",
//             "mimeType": "image/jpeg",
//             "filesize": 9928,
//             "width": 274,
//             "height": 184,
//             "sizes": {
//                 "card": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 },
//                 "feature": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 }
//             },
//             "createdAt": "2023-05-23T06:11:58.607Z",
//             "updatedAt": "2023-05-23T06:11:58.607Z",
//             "url": "https://eateria.azurewebsites.net/media/Desserts cannolis.jpg"
//         }
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03cd",
//         "name": "SLICE OF CHEESECAKE",
//         "category": "Desserts",
//         "description": "",
//         "price": 7,
//         "calories": -1,
//         "customerRating": 4.7,
//         "createdAt": "2023-05-23T05:32:52.198Z",
//         "updatedAt": "2023-05-23T06:11:13.690Z",
//         "photo": {
//             "id": "646c58ff465cd2c6e0bc059d",
//             "alt": "cheeseck",
//             "filename": "Dessert Slice of cheesecake.jpg",
//             "mimeType": "image/jpeg",
//             "filesize": 8871,
//             "width": 225,
//             "height": 225,
//             "sizes": {
//                 "card": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 },
//                 "feature": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 }
//             },
//             "createdAt": "2023-05-23T06:11:11.069Z",
//             "updatedAt": "2023-05-23T06:11:11.069Z",
//             "url": "https://eateria.azurewebsites.net/media/Dessert Slice of cheesecake.jpg"
//         }
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03cb",
//         "name": "COFFEE / HOT TEA",
//         "category": "Beverages",
//         "description": "",
//         "price": 1.95,
//         "calories": 25,
//         "customerRating": -1,
//         "createdAt": "2023-05-23T05:32:52.188Z",
//         "updatedAt": "2023-05-23T06:03:49.776Z",
//         "photo": {
//             "id": "646c5742465cd2c6e0bc044c",
//             "alt": "coffee",
//             "filename": "Beverage coffee.jpg",
//             "mimeType": "image/jpeg",
//             "filesize": 9622,
//             "width": 299,
//             "height": 168,
//             "sizes": {
//                 "card": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 },
//                 "feature": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 }
//             },
//             "createdAt": "2023-05-23T06:03:46.514Z",
//             "updatedAt": "2023-05-23T06:03:46.514Z",
//             "url": "https://eateria.azurewebsites.net/media/Beverage coffee.jpg"
//         }
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03c8",
//         "name": "FOUNTAIN DRINK",
//         "category": "Beverages",
//         "description": "Coke, Diet Coke, Sprite, Root Beer, Dr. Pepper, Cherry Coke, Lemonade, Unsweetened Iced Tea, Orange Fanta, Apple Juice",
//         "price": 2.25,
//         "calories": 175,
//         "customerRating": -1,
//         "createdAt": "2023-05-23T05:32:52.180Z",
//         "updatedAt": "2023-05-23T06:04:47.363Z",
//         "photo": {
//             "id": "646c5778465cd2c6e0bc047a",
//             "alt": "drink",
//             "filename": "Beverage fountain drink.jpg",
//             "mimeType": "image/jpeg",
//             "filesize": 8848,
//             "width": 290,
//             "height": 174,
//             "sizes": {
//                 "card": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 },
//                 "feature": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 }
//             },
//             "createdAt": "2023-05-23T06:04:40.219Z",
//             "updatedAt": "2023-05-23T06:04:40.219Z",
//             "url": "https://eateria.azurewebsites.net/media/Beverage fountain drink.jpg"
//         }
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03c6",
//         "name": "CHEESE STEAK SPECIAL",
//         "category": "Sandwiches",
//         "description": "On a 12 long Italian roll with mushrooms, green peppers, fried onions and sharp provolone cheese",
//         "price": 12.5,
//         "calories": 950,
//         "customerRating": 4.2,
//         "createdAt": "2023-05-23T05:32:52.158Z",
//         "updatedAt": "2023-05-23T05:32:52.158Z"
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03c4",
//         "name": "\"SAUSAGE, PEPPERS & ONIONS\"",
//         "category": "Sandwiches",
//         "description": "On a 12 long Italian roll with marinara sauce",
//         "price": 10.5,
//         "calories": 850,
//         "customerRating": 4.3,
//         "createdAt": "2023-05-23T05:32:52.150Z",
//         "updatedAt": "2023-05-23T05:32:52.150Z"
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03c2",
//         "name": "ROAST PORK",
//         "category": "Sandwiches",
//         "description": "On a 12 long Italian roll with sharpe provolone cheese",
//         "price": 10.5,
//         "calories": 750,
//         "customerRating": 4.1,
//         "createdAt": "2023-05-23T05:32:52.142Z",
//         "updatedAt": "2023-05-23T05:32:52.142Z"
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03bf",
//         "name": "HOT ROAST BEEF",
//         "category": "Sandwiches",
//         "description": "On a 12 long Italian roll with sharpe provolone cheese",
//         "price": 10.5,
//         "calories": 850,
//         "customerRating": 4.1,
//         "createdAt": "2023-05-23T05:32:52.134Z",
//         "updatedAt": "2023-05-23T05:32:52.134Z"
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03bc",
//         "name": "CHEESESTEAK PIZZA",
//         "category": "Pizza",
//         "description": "12 Mozzarella cheese & american cheese",
//         "price": 15,
//         "calories": 1100,
//         "customerRating": 4.9,
//         "createdAt": "2023-05-23T05:32:52.126Z",
//         "updatedAt": "2023-05-23T05:32:52.126Z"
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03ba",
//         "name": "THE WORKS",
//         "category": "Pizza",
//         "description": "12 Tomato sauce, pepperoni, sausage, mushrooms, green peppers, onions, mozzarella cheese",
//         "price": 15,
//         "calories": 1400,
//         "customerRating": 5,
//         "createdAt": "2023-05-23T05:32:52.115Z",
//         "updatedAt": "2023-05-23T05:32:52.115Z"
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03b7",
//         "name": "ROASTED VEGGIE",
//         "category": "Pizza",
//         "description": "12 Tomato sauce, zucchini, eggplant, mushrooms, tomatoes, onions, roasted red peppers",
//         "price": 13.5,
//         "calories": 450,
//         "customerRating": 4.1,
//         "createdAt": "2023-05-23T05:32:52.095Z",
//         "updatedAt": "2023-05-23T05:32:52.095Z"
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03b5",
//         "name": "GLUTEN FREE",
//         "category": "Pizza",
//         "description": "10” pre-made gluten free pizza shell",
//         "price": 13.5,
//         "calories": 450,
//         "customerRating": 3.8,
//         "createdAt": "2023-05-23T05:32:52.087Z",
//         "updatedAt": "2023-05-23T05:32:52.087Z"
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03b3",
//         "name": "BRUSCHETTA",
//         "category": "Pizza",
//         "description": "12 Tomatoes, fresh mozzarella, red onions, basil, oil and oregano with balsamic glaze",
//         "price": 13.5,
//         "calories": 875,
//         "customerRating": 4.9,
//         "createdAt": "2023-05-23T05:32:52.080Z",
//         "updatedAt": "2023-05-23T05:32:52.080Z"
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03b1",
//         "name": "MARGHERITA",
//         "category": "Pizza",
//         "description": "12 Tomato sauce, fresh mozzarella, parmigiana, basil",
//         "price": 13.5,
//         "calories": 900,
//         "customerRating": 4.2,
//         "createdAt": "2023-05-23T05:32:52.073Z",
//         "updatedAt": "2023-05-23T05:32:52.073Z"
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03af",
//         "name": "PARMIGIANA",
//         "category": "Chicken",
//         "description": "Topped with marinara sauce, melted mozzarella and parmesan cheese",
//         "price": 18.5,
//         "calories": 700,
//         "customerRating": 4,
//         "createdAt": "2023-05-23T05:32:52.065Z",
//         "updatedAt": "2023-05-23T05:32:52.065Z"
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03ac",
//         "name": "MARSALA",
//         "category": "Chicken",
//         "description": "Sauteed with fresh mushrooms in a marsala wine sauce",
//         "price": 18.5,
//         "calories": 450,
//         "customerRating": 4.1,
//         "createdAt": "2023-05-23T05:32:52.058Z",
//         "updatedAt": "2023-05-23T06:10:20.460Z",
//         "photo": {
//             "id": "646c58c8465cd2c6e0bc0569",
//             "alt": "mars",
//             "filename": "chicken marsala.jpg",
//             "mimeType": "image/jpeg",
//             "filesize": 13703,
//             "width": 225,
//             "height": 225,
//             "sizes": {
//                 "card": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 },
//                 "feature": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 }
//             },
//             "createdAt": "2023-05-23T06:10:16.804Z",
//             "updatedAt": "2023-05-23T06:10:16.804Z",
//             "url": "https://eateria.azurewebsites.net/media/chicken marsala.jpg"
//         }
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03aa",
//         "name": "FLORENTINE",
//         "category": "Chicken",
//         "description": "Sauteed in a garlic, white wine and lemon sauce, topped with spinach and mozzarella cheese",
//         "price": 18.5,
//         "calories": 525,
//         "customerRating": 4.3,
//         "createdAt": "2023-05-23T05:32:52.049Z",
//         "updatedAt": "2023-05-23T06:07:59.036Z",
//         "photo": {
//             "id": "646c583a465cd2c6e0bc050d",
//             "alt": "ch flor",
//             "filename": "chicken florentine.jpg",
//             "mimeType": "image/jpeg",
//             "filesize": 17049,
//             "width": 225,
//             "height": 225,
//             "sizes": {
//                 "card": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 },
//                 "feature": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 }
//             },
//             "createdAt": "2023-05-23T06:07:54.547Z",
//             "updatedAt": "2023-05-23T06:07:54.547Z",
//             "url": "https://eateria.azurewebsites.net/media/chicken florentine.jpg"
//         }
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03a8",
//         "name": "FRANCESE",
//         "category": "Chicken",
//         "description": "Egg battered and sauteed in a lemon butter sauce",
//         "price": 18.5,
//         "calories": 425,
//         "customerRating": 4.9,
//         "createdAt": "2023-05-23T05:32:52.026Z",
//         "updatedAt": "2023-05-23T06:09:12.663Z",
//         "photo": {
//             "id": "646c5885465cd2c6e0bc0541",
//             "alt": "ch fran",
//             "filename": "chicken francese.jpg",
//             "mimeType": "image/jpeg",
//             "filesize": 11574,
//             "width": 274,
//             "height": 184,
//             "sizes": {
//                 "card": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 },
//                 "feature": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 }
//             },
//             "createdAt": "2023-05-23T06:09:09.163Z",
//             "updatedAt": "2023-05-23T06:09:09.163Z",
//             "url": "https://eateria.azurewebsites.net/media/chicken francese.jpg"
//         }
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03a5",
//         "name": "EGGPLANT PARMIGIANA",
//         "category": "Specialties",
//         "description": "Topped with marinara sauce, melted mozzarella and parmesan sauce. Includes pasta.",
//         "price": 16.5,
//         "calories": 700,
//         "customerRating": 4.5,
//         "createdAt": "2023-05-23T05:32:52.016Z",
//         "updatedAt": "2023-05-23T06:14:46.462Z",
//         "photo": {
//             "id": "646c59cf465cd2c6e0bc064b",
//             "alt": "egg parm",
//             "filename": "eggplant parmesean.jpg",
//             "mimeType": "image/jpeg",
//             "filesize": 13422,
//             "width": 286,
//             "height": 176,
//             "sizes": {
//                 "card": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 },
//                 "feature": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 }
//             },
//             "createdAt": "2023-05-23T06:14:39.500Z",
//             "updatedAt": "2023-05-23T06:14:39.500Z",
//             "url": "https://eateria.azurewebsites.net/media/eggplant parmesean.jpg"
//         }
//     },
//     {
//         "id": "646c5004465cd2c6e0bc03a3",
//         "name": "BAKED GNOCCHI",
//         "category": "Specialties",
//         "description": "With tomato sauce, topped with mozzarella cheese",
//         "price": 15.5,
//         "calories": 450,
//         "customerRating": 4.6,
//         "createdAt": "2023-05-23T05:32:52.008Z",
//         "updatedAt": "2023-05-23T06:02:59.703Z",
//         "photo": {
//             "id": "646c56fe465cd2c6e0bc0424",
//             "alt": "gnocchi",
//             "filename": "baked gnocchi.jpg",
//             "mimeType": "image/jpeg",
//             "filesize": 12630,
//             "width": 269,
//             "height": 187,
//             "sizes": {
//                 "card": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 },
//                 "feature": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 }
//             },
//             "createdAt": "2023-05-23T06:02:38.486Z",
//             "updatedAt": "2023-05-23T06:02:38.486Z",
//             "url": "https://eateria.azurewebsites.net/media/baked gnocchi.jpg"
//         }
//     },
//     {
//         "id": "646c5003465cd2c6e0bc03a1",
//         "name": "STUFFED SHELLS",
//         "category": "Specialties",
//         "description": "With ricotta cheese, topped with tomato sauce and mozzarella cheese",
//         "price": 15.5,
//         "calories": 550,
//         "customerRating": 4.8,
//         "createdAt": "2023-05-23T05:32:52.000Z",
//         "updatedAt": "2023-05-23T05:32:52.000Z"
//     },
//     {
//         "id": "646c5003465cd2c6e0bc039f",
//         "name": "HOMEMADE MANICOTTI",
//         "category": "Specialties",
//         "description": "Stuffed with ricotta cheese, topped with tomato sauce and mozzarella cheese",
//         "price": 15.5,
//         "calories": 750,
//         "customerRating": 4.9,
//         "createdAt": "2023-05-23T05:32:51.985Z",
//         "updatedAt": "2023-05-23T18:59:23.295Z",
//         "photo": {
//             "id": "646d0cfe04c6ec50b17cade6",
//             "alt": "mani",
//             "filename": "Homemade manicotti.jpg",
//             "mimeType": "image/jpeg",
//             "filesize": 9826,
//             "width": 183,
//             "height": 275,
//             "sizes": {
//                 "card": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 },
//                 "feature": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 }
//             },
//             "createdAt": "2023-05-23T18:59:10.772Z",
//             "updatedAt": "2023-05-23T18:59:10.772Z",
//             "url": "https://eateria.azurewebsites.net/media/Homemade manicotti.jpg"
//         }
//     },
//     {
//         "id": "646c5003465cd2c6e0bc039d",
//         "name": "EGGPLANT ROLLATINI",
//         "category": "Specialties",
//         "description": "Lightly breaded eggplant cutlets rolled and stuffed with ricotta and mozzarella, topped in a marinara sauce",
//         "price": 15.5,
//         "calories": 650,
//         "customerRating": 4.3,
//         "createdAt": "2023-05-23T05:32:51.978Z",
//         "updatedAt": "2023-05-23T06:13:55.635Z",
//         "photo": {
//             "id": "646c599b465cd2c6e0bc061f",
//             "alt": "roll",
//             "filename": "Eggplant Rollatini.jpg",
//             "mimeType": "image/jpeg",
//             "filesize": 14491,
//             "width": 275,
//             "height": 183,
//             "sizes": {
//                 "card": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 },
//                 "feature": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 }
//             },
//             "createdAt": "2023-05-23T06:13:47.943Z",
//             "updatedAt": "2023-05-23T06:13:47.943Z",
//             "url": "https://eateria.azurewebsites.net/media/Eggplant Rollatini.jpg"
//         }
//     },
//     {
//         "id": "646c5003465cd2c6e0bc039b",
//         "name": "LASAGNA",
//         "category": "Specialties",
//         "description": "Noodles stuffed with cheese, topped with marinara sauce and mozzarella cheese",
//         "price": 14.5,
//         "calories": 600,
//         "customerRating": 4.1,
//         "createdAt": "2023-05-23T05:32:51.970Z",
//         "updatedAt": "2023-05-23T05:32:51.970Z"
//     },
//     {
//         "id": "646c5003465cd2c6e0bc0399",
//         "name": "Add Shrimp",
//         "category": "Add_Ons",
//         "description": "Three medium grilled shrimp",
//         "price": 6,
//         "calories": 120,
//         "customerRating": -1,
//         "createdAt": "2023-05-23T05:32:51.962Z",
//         "updatedAt": "2023-05-23T05:32:51.962Z"
//     },
//     {
//         "id": "646c5003465cd2c6e0bc0397",
//         "name": "Add Grilled Chicken",
//         "category": "Add_Ons",
//         "description": "Slices of chargrilled chicken breast",
//         "price": 5,
//         "calories": 120,
//         "customerRating": -1,
//         "createdAt": "2023-05-23T05:32:51.954Z",
//         "updatedAt": "2023-05-23T05:32:51.954Z"
//     },
//     {
//         "id": "646c5003465cd2c6e0bc0395",
//         "name": "CAESAR SALAD",
//         "category": "Salads",
//         "description": "Romaine, shaved parmesan & baked croutons with Caesar dressing",
//         "price": 9,
//         "calories": 280,
//         "customerRating": 3.8,
//         "createdAt": "2023-05-23T05:32:51.946Z",
//         "updatedAt": "2023-05-23T06:05:51.124Z",
//         "photo": {
//             "id": "646c57bb465cd2c6e0bc04b1",
//             "alt": "caesar",
//             "filename": "caesar salad.jpg",
//             "mimeType": "image/jpeg",
//             "filesize": 14480,
//             "width": 225,
//             "height": 225,
//             "sizes": {
//                 "card": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 },
//                 "feature": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 }
//             },
//             "createdAt": "2023-05-23T06:05:47.624Z",
//             "updatedAt": "2023-05-23T06:05:47.624Z",
//             "url": "https://eateria.azurewebsites.net/media/caesar salad.jpg"
//         }
//     },
//     {
//         "id": "646c5003465cd2c6e0bc0392",
//         "name": "GARDEN SALAD",
//         "category": "Salads",
//         "description": "Mixed greens, tomatoes, cucumbers, carrots and red onions with your choice of dressing",
//         "price": 9,
//         "calories": 100,
//         "customerRating": 3.9,
//         "createdAt": "2023-05-23T05:32:51.936Z",
//         "updatedAt": "2023-05-23T05:32:51.936Z"
//     },
//     {
//         "id": "646c5003465cd2c6e0bc038f",
//         "name": "CHEF SALAD",
//         "category": "Salads",
//         "description": "Mixed lettuce, ham, turkey, American cheese, chopped tomato, hard-boiled egg & red onions with your choice of dressing",
//         "price": 12.5,
//         "calories": 125,
//         "customerRating": 4.5,
//         "createdAt": "2023-05-23T05:32:51.927Z",
//         "updatedAt": "2023-05-23T06:06:46.000Z",
//         "photo": {
//             "id": "646c57f2465cd2c6e0bc04e2",
//             "alt": "chef",
//             "filename": "Chef salad.jpg",
//             "mimeType": "image/jpeg",
//             "filesize": 13533,
//             "width": 275,
//             "height": 183,
//             "sizes": {
//                 "card": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 },
//                 "feature": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 }
//             },
//             "createdAt": "2023-05-23T06:06:42.294Z",
//             "updatedAt": "2023-05-23T06:06:42.294Z",
//             "url": "https://eateria.azurewebsites.net/media/Chef salad.jpg"
//         }
//     },
//     {
//         "id": "646c5003465cd2c6e0bc038d",
//         "name": "CLIFF SALAD",
//         "category": "Salads",
//         "description": "Romaine, grilled chicken, penne pasta, hard-boiled egg and baked croutons with your choice of dressing",
//         "price": 12.5,
//         "calories": 199,
//         "customerRating": 4.1,
//         "createdAt": "2023-05-23T05:32:51.919Z",
//         "updatedAt": "2023-05-23T05:32:51.919Z"
//     },
//     {
//         "id": "646c5003465cd2c6e0bc0389",
//         "name": "FRIED ZUCCHINI CHIPS",
//         "category": "Appetizers",
//         "description": "Three Fresh zucchini batter dipped, then fried to a golden crisp, served with a side of marinara sauce",
//         "price": 8.5,
//         "calories": 220,
//         "customerRating": 4,
//         "createdAt": "2023-05-23T05:32:51.895Z",
//         "updatedAt": "2023-05-23T05:32:51.895Z"
//     },
//     {
//         "id": "646c5003465cd2c6e0bc0387",
//         "name": "STACKED EGGPLANT",
//         "category": "Appetizers",
//         "description": "Breaded eggplant, fresh mozzarella, ricotta cheese, lightly drizzled with balsamic vinaigrette, oven roasted and served with a side of marinara sauce",
//         "price": 11.5,
//         "calories": 150,
//         "customerRating": 3.9,
//         "createdAt": "2023-05-23T05:32:51.885Z",
//         "updatedAt": "2023-05-23T06:13:05.205Z",
//         "photo": {
//             "id": "646c596b465cd2c6e0bc05f1",
//             "alt": "stack",
//             "filename": "eggplant stack.jpg",
//             "mimeType": "image/jpeg",
//             "filesize": 11102,
//             "width": 225,
//             "height": 225,
//             "sizes": {
//                 "card": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 },
//                 "feature": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 }
//             },
//             "createdAt": "2023-05-23T06:12:59.128Z",
//             "updatedAt": "2023-05-23T06:12:59.128Z",
//             "url": "https://eateria.azurewebsites.net/media/eggplant stack.jpg"
//         }
//     },
//     {
//         "id": "646c5003465cd2c6e0bc0384",
//         "name": "FRIED MOZZARELLA WEDGES",
//         "category": "Appetizers",
//         "description": "Three Hand cut fresh mozzarella, breaded and fried golden brown, served with a side of marinara sauce",
//         "price": 9.5,
//         "calories": 600,
//         "customerRating": 4.6,
//         "createdAt": "2023-05-23T05:32:51.877Z",
//         "updatedAt": "2023-05-23T06:15:31.524Z",
//         "photo": {
//             "id": "646c59fe465cd2c6e0bc0676",
//             "alt": "mozz",
//             "filename": "Fried Mozarella Wedges.jpg",
//             "mimeType": "image/jpeg",
//             "filesize": 7552,
//             "width": 266,
//             "height": 190,
//             "sizes": {
//                 "card": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 },
//                 "feature": {
//                     "url": null,
//                     "width": null,
//                     "height": null,
//                     "mimeType": null,
//                     "filesize": null,
//                     "filename": null
//                 }
//             },
//             "createdAt": "2023-05-23T06:15:26.305Z",
//             "updatedAt": "2023-05-23T06:15:26.305Z",
//             "url": "https://eateria.azurewebsites.net/media/Fried Mozarella Wedges.jpg"
//         }
//     },
//     {
//         "id": "646c5003465cd2c6e0bc0381",
//         "name": "BRICK OVEN WINGS",
//         "category": "Appetizers",
//         "description": "8 Jumbo party wings marinated and brick oven roasted, fried crispy and tossed in your choice of mild, hot, barbecue, honey mustard or garlic parmesan. Includes bleu cheese or ranch and celery",
//         "price": 11.5,
//         "calories": 699,
//         "customerRating": 4.2,
//         "createdAt": "2023-05-23T05:32:51.860Z",
//         "updatedAt": "2023-05-23T05:32:51.860Z"
//     }
// ];