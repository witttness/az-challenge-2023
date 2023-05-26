import express from 'express';
import payload from 'payload';

require('dotenv').config();
const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  });

  // Perform any Local API operations here
  let menuItems = await payload.find({
    collection: "menuitems",
    // where: {} // optional
  });

  if (menuItems.docs.length == 0) {
    var seedData = [{ "category": "Appetizers", "name": "BRICK OVEN WINGS", "description": "8 Jumbo party wings marinated and brick oven roasted, fried crispy and tossed in your choice of mild, hot, barbecue, honey mustard or garlic parmesan. Includes bleu cheese or ranch and celery", "price": 11.50, "calories": 699, "customerRating": 4.20 }, { "category": "Appetizers", "name": "FRIED MOZZARELLA WEDGES", "description": "Three Hand cut fresh mozzarella, breaded and fried golden brown, served with a side of marinara sauce", "price": 9.50, "calories": 600, "customerRating": 4.60 }, { "category": "Appetizers", "name": "STACKED EGGPLANT", "description": "Breaded eggplant, fresh mozzarella, ricotta cheese, lightly drizzled with balsamic vinaigrette, oven roasted and served with a side of marinara sauce", "price": 11.50, "calories": 150, "customerRating": 3.90 }, { "category": "Appetizers", "name": "FRIED ZUCCHINI CHIPS", "description": "Three Fresh zucchini batter dipped, then fried to a golden crisp, served with a side of marinara sauce", "price": 8.50, "calories": 220, "customerRating": 4.00 }, { "category": "Salads", "name": "CLIFF SALAD", "description": "Romaine, grilled chicken, penne pasta, hard-boiled egg and baked croutons with your choice of dressing", "price": 12.50, "calories": 199, "customerRating": 4.10 }, { "category": "Salads", "name": "CHEF SALAD", "description": "Mixed lettuce, ham, turkey, American cheese, chopped tomato, hard-boiled egg & red onions with your choice of dressing", "price": 12.50, "calories": 125, "customerRating": 4.50 }, { "category": "Salads", "name": "GARDEN SALAD", "description": "Mixed greens, tomatoes, cucumbers, carrots and red onions with your choice of dressing", "price": 9.00, "calories": 100, "customerRating": 3.90 }, { "category": "Salads", "name": "CAESAR SALAD", "description": "Romaine, shaved parmesan & baked croutons with Caesar dressing", "price": 9.00, "calories": 280, "customerRating": 3.80 }, { "category": "Add_Ons", "name": "Add Grilled Chicken", "description": "Slices of chargrilled chicken breast", "price": 5.00, "calories": 120, "customerRating": -1.00 }, { "category": "Add_Ons", "name": "Add Shrimp", "description": "Three medium grilled shrimp", "price": 6.00, "calories": 120, "customerRating": -1.00 }, { "category": "Specialties", "name": "LASAGNA", "description": "Noodles stuffed with cheese, topped with marinara sauce and mozzarella cheese", "price": 14.50, "calories": 600, "customerRating": 4.10 }, { "category": "Specialties", "name": "EGGPLANT ROLLATINI", "description": "Lightly breaded eggplant cutlets rolled and stuffed with ricotta and mozzarella, topped in a marinara sauce", "price": 15.50, "calories": 650, "customerRating": 4.30 }, { "category": "Specialties", "name": "HOMEMADE MANICOTTI", "description": "Stuffed with ricotta cheese, topped with tomato sauce and mozzarella cheese", "price": 15.50, "calories": 750, "customerRating": 4.90 }, { "category": "Specialties", "name": "STUFFED SHELLS", "description": "With ricotta cheese, topped with tomato sauce and mozzarella cheese", "price": 15.50, "calories": 550, "customerRating": 4.80 }, { "category": "Specialties", "name": "BAKED GNOCCHI", "description": "With tomato sauce, topped with mozzarella cheese", "price": 15.50, "calories": 450, "customerRating": 4.60 }, { "category": "Specialties", "name": "EGGPLANT PARMIGIANA", "description": "Topped with marinara sauce, melted mozzarella and parmesan sauce. Includes pasta.", "price": 16.50, "calories": 700, "customerRating": 4.50 }, { "category": "Chicken", "name": "FRANCESE", "description": "Egg battered and sauteed in a lemon butter sauce", "price": 18.50, "calories": 425, "customerRating": 4.90 }, { "category": "Chicken", "name": "FLORENTINE", "description": "Sauteed in a garlic, white wine and lemon sauce, topped with spinach and mozzarella cheese", "price": 18.50, "calories": 525, "customerRating": 4.30 }, { "category": "Chicken", "name": "MARSALA", "description": "Sauteed with fresh mushrooms in a marsala wine sauce", "price": 18.50, "calories": 450, "customerRating": 4.10 }, { "category": "Chicken", "name": "PARMIGIANA", "description": "Topped with marinara sauce, melted mozzarella and parmesan cheese", "price": 18.50, "calories": 700, "customerRating": 4.00 }, { "category": "Pizza", "name": "MARGHERITA", "description": "12 Tomato sauce, fresh mozzarella, parmigiana, basil", "price": 13.50, "calories": 900, "customerRating": 4.20 }, { "category": "Pizza", "name": "BRUSCHETTA", "description": "12 Tomatoes, fresh mozzarella, red onions, basil, oil and oregano with balsamic glaze", "price": 13.50, "calories": 875, "customerRating": 4.90 }, { "category": "Pizza", "name": "GLUTEN FREE", "description": "10” pre-made gluten free pizza shell", "price": 13.50, "calories": 450, "customerRating": 3.80 }, { "category": "Pizza", "name": "ROASTED VEGGIE", "description": "12 Tomato sauce, zucchini, eggplant, mushrooms, tomatoes, onions, roasted red peppers", "price": 13.50, "calories": 450, "customerRating": 4.10 }, { "category": "Pizza", "name": "THE WORKS", "description": "12 Tomato sauce, pepperoni, sausage, mushrooms, green peppers, onions, mozzarella cheese", "price": 15.00, "calories": 1400, "customerRating": 5.00 }, { "category": "Pizza", "name": "CHEESESTEAK PIZZA", "description": "12 Mozzarella cheese & american cheese", "price": 15.00, "calories": 1100, "customerRating": 4.90 }, { "category": "Sandwiches", "name": "HOT ROAST BEEF", "description": "On a 12 long Italian roll with sharpe provolone cheese", "price": 10.50, "calories": 850, "customerRating": 4.10 }, { "category": "Sandwiches", "name": "ROAST PORK", "description": "On a 12 long Italian roll with sharpe provolone cheese", "price": 10.50, "calories": 750, "customerRating": 4.10 }, { "category": "Sandwiches", "name": "\"SAUSAGE, PEPPERS & ONIONS\"", "description": "On a 12 long Italian roll with marinara sauce", "price": 10.50, "calories": 850, "customerRating": 4.30 }, { "category": "Sandwiches", "name": "CHEESE STEAK SPECIAL", "description": "On a 12 long Italian roll with mushrooms, green peppers, fried onions and sharp provolone cheese", "price": 12.50, "calories": 950, "customerRating": 4.20 }, { "category": "Beverages", "name": "FOUNTAIN DRINK", "description": "Coke, Diet Coke, Sprite, Root Beer, Dr. Pepper, Cherry Coke, Lemonade, Unsweetened Iced Tea, Orange Fanta, Apple Juice", "price": 2.25, "calories": 175, "customerRating": -1.00 }, { "category": "Beverages", "name": "COFFEE / HOT TEA", "description": "", "price": 1.95, "calories": 25, "customerRating": -1.00 }, { "category": "Desserts", "name": "SLICE OF CHEESECAKE", "description": "", "price": 7.00, "calories": -1, "customerRating": 4.70 }, { "category": "Desserts", "name": "CANNOLIS ", "description": "Two", "price": 5.00, "calories": 425, "customerRating": 4.40 }, { "category": "Desserts", "name": "SLICE OF APPLE PIE", "description": " ", "price": 7.00, "calories": 375, "customerRating": 3.70 }];

    for (let i = 0; i < seedData.length; i++)
      await payload.create({
        collection: "menuitems",
        data: seedData[i],
      });
  }

  // Add your own express routes here

  app.listen(process.env.PORT);
}

start();
