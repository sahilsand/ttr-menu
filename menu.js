// ── Top-level sections ───────────────────────────────────────────
const sections = [
    {
        id: "food",
        label: "Food",
        emoji: "🍽️",
        desc: "Bowls, Pizzas, Pasta & more",
        image: "images/section-food.jpg"
    },
    {
        id: "beverages",
        label: "Beverages",
        emoji: "☕",
        desc: "Coffee, Frappes, Smoothies & more",
        image: "images/section-beverages.jpg"
    },
    {
        id: "desserts",
        label: "Desserts",
        emoji: "🍰",
        desc: "Pancakes, Sweet bites & more",
        image: "images/section-desserts.jpg"
    }
];

const menuData = [

    // ── PARATHA BOWLS ─────────────────────────────────────────
    { section: "food", cat: "Paratha Bowls", name: "Fresh Creamy Paneer", price: "335", img: "images/Fresh Cremy paneer.jpg", desc: "Fresh, creamy paneer stuffed in soft parathas, served warm for a comforting, wholesome bowl rooted in purity and rustic goodness" },
    { section: "food", cat: "Paratha Bowls", name: "Mava Mirchi ⭐", price: "315", img: "images/Mava Mirchi.jpg", desc: "Spiced mava-stuffed green chilies wrapped in soft parathas, offering a bold, earthy bowl with rich, rustic flavors and organic warmth" },
    { section: "food", cat: "Paratha Bowls", name: "Vegetable Keema 🌶️", price: "280", img: "images/Vegetable keema.jpg", desc: "Wholesome veggie keema filled in warm parathas, delivering a savory, textured bowl bursting with earthy spices" },
    { section: "food", cat: "Paratha Bowls", name: "Chickpeas Khoya Bite", price: "270", img: "images/Chickpeas Khoya bites.jpg", desc: "Wholesome chana and rich khoya bites wrapped in soft parathas, creating a sweet-spicy, nourishing bowl full of earthy indulgence" },
    { section: "food", cat: "Paratha Bowls", name: "Matar Magic Dal", price: "300", img: "images/Matar Magic Dal.jpg", desc: "Green peas and yellow dal slow-cooked with aromatic spices—a soul-soothing, flavorful experience packed with organic warmth" },
    { section: "food", cat: "Paratha Bowls", name: "Green Harvest", price: "230", img: "images/Green Harvest.jpg", desc: "Exotic veggies blending vibrant flavors & nourishing goodness for a wholesome, deliciously healthy experience" },
    { section: "food", cat: "Paratha Bowls", name: "Umami Mushroom ⭐", price: "335", img: "images/Luscious Mushroom.jpg", desc: "Delicate mushrooms infused with umami richness, wrapped in tender parathas—earthy, wholesome, comforting, and organically satisfying" },
    { section: "food", cat: "Paratha Bowls", name: "Tandoor Garden 🌶️ ⭐", price: "290", img: "images/Tandoori Garden.jpg", desc: "Charred garden-fresh veggies kissed by tandoor flames, wrapped in soft parathas—smoky, vibrant, and soulfully organic" },
    { section: "food", cat: "Paratha Bowls", name: "Chilli Paneer 🌶️", price: "345", img: "images/Chilli Paneer.jpg", desc: "Fiery chilli paneer tossed in TTR's secret spice blend—bold, aromatic, and soulful" },
    { section: "food", cat: "Paratha Bowls", name: "Paneer Delight ⭐", price: "340", img: "images/Paneer Delight.jpg", desc: "Soft parathas filled with spiced paneer—creamy, comforting, rich in flavor, warmth, and pure organic indulgence" },

    // ── RICE BOWLS ────────────────────────────────────────────
    { section: "food", cat: "Rice Bowls", name: "Green Garden Fresh", price: "330", img: "images/Green Garden Fresh.jpg.jpeg", desc: "Garden-fresh exotic veggies sautéed and served over organic rice—colorful, crunchy, and earthy" },
    { section: "food", cat: "Rice Bowls", name: "Crispy Mushroom (Fry/Sauté)", price: "345", img: "images/Crispy mushroom.jpg.jpeg", desc: "Fried/sauté mushrooms over fragrant rice, infused with organic spices and herbs, with two infused gravies" },
    { section: "food", cat: "Rice Bowls", name: "Corn Affair (Fry/Sauté)", price: "310", img: "images/Corn Afire.jpg.jpeg", desc: "Golden corn and baby corn with fire-roasted spices over organic rice—smoky-sweet, rustic, and naturally comforting" },
    { section: "food", cat: "Rice Bowls", name: "Exotic Veggie (Fry/Sauté)", price: "345", img: "images/Veggie exotic.jpg.jpeg", desc: "Farm-fresh exotic veggies, baby corn, mushrooms tossed in spices over organic rice" },
    { section: "food", cat: "Rice Bowls", name: "Thai Green Curry 🌶️", price: "335", img: "images/Thai green curry.jpg.jpeg", desc: "Thai green curry infused with coconut milk with exotic veggies over organic rice—creamy, herbal, and soulfully nourishing" },
    { section: "food", cat: "Rice Bowls", name: "Rajma Chola Masala", price: "260", img: "images/Rajma chola masala.jpg.jpeg", desc: "Rajma and chola in desi masalas over organic rice—hearty, spicy, and comforting" },
    { section: "food", cat: "Rice Bowls", name: "Shahi Paneer Makhani", price: "370", img: "images/Shahi paneer makhni.jpg.jpeg", desc: "Creamy shahi paneer in buttery makhni gravy over organic rice—regal, spiced, and soulfully nourishing" },
    { section: "food", cat: "Rice Bowls", name: "Dal Makhani", price: "280", img: "images/Dal Makhni.jpg.jpeg", desc: "Slow-cooked Punjabi dal makhni over organic rice—buttery comfort, rich, earthy, and nourishing" },
    { section: "food", cat: "Rice Bowls", name: "Chilli Paneer 🌶️", price: "340", img: "images/Chilli paneer.jpg.jpeg", desc: "Tender organic paneer in fiery chilli sauce over wholesome rice—bold, spicy Indo-Chinese fusion" },
    { section: "food", cat: "Rice Bowls", name: "Ragi Manchurian 🌶️", price: "250", img: "images/Ragi Manchurian.jpg.jpeg", desc: "Crispy ragi manchurian over organic rice, blending ancient grains with zesty spices" },
    { section: "food", cat: "Rice Bowls", name: "Mughlai Dry Fruit Delight", price: "420", img: "images/Mughlai Dry fruit.jpg.jpeg", desc: "Mughlai spices and dry fruits slow-cooked over organic rice—warm, nutty, aromatic indulgence" },

    // ── PIZZA ─────────────────────────────────────────────────────
    // — Sourdough —
    { section: "food", cat: "Pizza", name: "Margherita", price: "120 / 240", img: "images/Margherita.jpg.jpeg", desc: "🫓 Sourdough crust | Fresh tomato sauce, Mozzarella, virgin Olive oil" },
    { section: "food", cat: "Pizza", name: "Farmhouse", price: "260 / 416", img: "images/Farmhouse.jpg.jpeg", desc: "🫓 Sourdough crust | Mozzarella, Capsicum, Onion, Tomato, Mushroom" },
    { section: "food", cat: "Pizza", name: "Cheese N Corn", price: "200 / 320", img: "images/Cheese N Corn.jpg.jpeg", desc: "🫓 Sourdough crust | Cheesy tomato sauce, Mozzarella, American Sweet corn" },
    { section: "food", cat: "Pizza", name: "Mushroom Margherita", price: "210 / 330", img: "images/Mushroom Margherita.jpg.jpeg", desc: "🫓 Sourdough crust | Cheesy tomato sauce, Mozzarella, grilled mushroom" },
    { section: "food", cat: "Pizza", name: "Indi Tandoori Paneer 🌶️", price: "300 / 480", img: "images/Indie-Tandoori paneer.jpg.jpeg", desc: "🫓 Sourdough crust | Tandoori sauce, Paneer, Curd, Tandoori masala, Onion, Capsicum" },

    // — TTR Special Crisp —
    { section: "food", cat: "Pizza", name: "TTR Tomato Basil Crisp", price: "210 / 320", img: "images/TTR Tomato Basil Crisp.jpg.jpeg", desc: "🌿 Thin wheat crust, papad-like crunch OR regular wheat crust | Tomato basil sauce, cherry tomatoes, olives" },
    { section: "food", cat: "Pizza", name: "TTR Veggie Exotic Crisp", price: "210 / 350", img: "images/TTR Veggie Exotic Crisp.jpg.jpeg", desc: "🌿 Thin wheat crust, papad-like crunch OR regular wheat crust | Fresh pizza sauce, seasonal exotic veggies" },
    { section: "food", cat: "Pizza", name: "TTR Makhani Paneer Crisp ⭐", price: "210 / 300", img: "images/TTR Makhni Paneer crisp.jpg.jpeg", desc: "🌿 Thin wheat crust, papad-like crunch OR regular wheat crust | Makhni sauce, fresh paneer with Indian twist" },


    // ── SOYA CHAAP ────────────────────────────────────────────
    { section: "food", cat: "Soya Chaap", name: "Chilli Garlic Soya Chaap ⭐", price: "265 / 320", img: "", desc: "Chilli garlic soya chaap stir-fried spicy savory Indo-Chinese. (Paratha / Rice)" },
    { section: "food", cat: "Soya Chaap", name: "Malai Soya Chaap", price: "370 / 390", img: "", desc: "Malai soya chaap cooked creamy with mild spices and rich flavor. (Paratha / Rice)" },
    { section: "food", cat: "Soya Chaap", name: "Tandoori Soya Chaap 🌶️", price: "330 / 370", img: "", desc: "Marinated, grilled smoky chaap with in-house tandoori sauce. (Paratha / Rice)" },
    { section: "food", cat: "Soya Chaap", name: "Crispy Soya 65", price: "320 / 340", img: "", desc: "Spiced, fried, crunchy, tangy, flavorful. (Paratha / Rice)" },

    // ── PASTA ─────────────────────────────────────────────────
    { section: "food", cat: "Pasta", name: "Aglio e Olio Pasta", price: "300", img: "images/Agglio è olio pasta.jpg.jpeg", desc: "Pasta boiled al dente and tossed with garlic and olive oil" },
    { section: "food", cat: "Pasta", name: "Cheese Sauce Pasta ⭐", price: "320", img: "images/White cheese sauce pasta.jpg.jpeg", desc: "Pasta tossed with in-house creamy cheese sauce and Italian spices" },
    { section: "food", cat: "Pasta", name: "Arrabbiata Pasta 🌶️", price: "310", img: "images/Arrabbiata pasta.jpg.jpeg", desc: "Pasta tossed in fresh and spicy tomato red gravy" },
    { section: "food", cat: "Pasta", name: "Green Pesto Cream Pasta ⭐", price: "400", img: "images/Green pesto creamy pasta.jpg.jpeg", desc: "Pasta tossed with in-house fresh basil creamy pesto sauce" },
    { section: "food", cat: "Pasta", name: "Mushroom Sauce Pasta", price: "320", img: "images/Mushroom sauce Pasta.jpg.jpeg", desc: "Pasta tossed with a creamy and cheesy mushroom sauce" },

    // ── NOODLES ───────────────────────────────────────────────
    { section: "food", cat: "Noodles", name: "Vegetable Noodles", price: "210", img: "images/Vegetable Noodles.jpg.jpeg", desc: "Noodles tossed with fresh veggies and flavorful spices" },
    { section: "food", cat: "Noodles", name: "Schezwan Noodles", price: "250", img: "images/Schezwan Noodles.jpg.jpeg", desc: "Noodles tossed with tomato schezwan sauce" },
    { section: "food", cat: "Noodles", name: "Burnt Garlic Noodles ⭐", price: "250", img: "images/Burnt Garlic Noodles.jpg.jpeg", desc: "Noodles tossed with in-house smoky and garlicky flavored sauce" },
    { section: "food", cat: "Noodles", name: "Singapori Noodles 🌶️", price: "290", img: "images/Singapuri Noodles.jpg.jpeg", desc: "Noodles tossed with sauté paneer and cashews with a twist of spices" },
    { section: "food", cat: "Noodles", name: "Hakka Noodles", price: "280", img: "images/Hakka Noodles.jpg.jpeg", desc: "Noodles tossed with paneer and mushroom" },

    // ── BRUSCHETTA ────────────────────────────────────────────
    { section: "food", cat: "Bruschetta", name: "Italian Classic Bruschetta ⭐", price: "250", img: "images/Indian classic Bruschetta.jpg.jpeg", desc: "Sourdough topped with tomato in garlicky olive oil with cheese" },
    { section: "food", cat: "Bruschetta", name: "Roasted Tomato Bruschetta", price: "260", img: "", desc: "Sourdough topped with roasted tomato in garlicky olive oil, cheese, and fresh basil" },
    { section: "food", cat: "Bruschetta", name: "Green Pesto Bruschetta", price: "300", img: "images/Green Pesto bruschetta.jpg.jpeg", desc: "Sourdough topped with green pesto, tomato in garlicky olive oil, and parmesan cheese" },
    { section: "food", cat: "Bruschetta", name: "Avocado Bruschetta ⭐", price: "350", img: "images/Avocado bruschetta.jpg.jpeg", desc: "Sourdough topped with Guacamole and tossed garlicky tomato" },
    { section: "food", cat: "Bruschetta", name: "Spinach Bruschetta", price: "250", img: "images/Spinach bruschetta.jpg.jpeg", desc: "Sourdough topped with spinach and garlic tossed with tomato and virgin olive oil" },
    { section: "food", cat: "Bruschetta", name: "Cheese Mushroom Bruschetta ⭐", price: "280", img: "images/Cheese Musroom bruschetta.jpg.jpeg", desc: "Sourdough topped with cheesy mixture of mushroom and garlic" },

    // ── MOONGLET ──────────────────────────────────────────────
    { section: "food", cat: "Moonglet", name: "Classic Moonglet", price: "150", img: "images/Classic Moonglet.jpg.jpeg", desc: "Healthy moong dal with spices, onion, garlic, and curry leaves" },
    { section: "food", cat: "Moonglet", name: "Paneer Moonglet ⭐", price: "180", img: "images/Paneer Moonglet.jpg.jpeg", desc: "Moong dal filled with fresh in-house paneer and organic spices" },

    // ── SANDWICH ──────────────────────────────────────────────
    { section: "food", cat: "Sandwich", name: "Coleslaw Sandwich", price: "120", img: "images/Cole-slaw sandwich.jpg.jpeg", desc: "Multigrain bread with loaded fresh cucumber, carrot, infused with in-house cheese sauce" },
    { section: "food", cat: "Sandwich", name: "Hummus Sandwich", price: "199", img: "", desc: "In-house fresh hummus served with a tomato twist on multigrain bread" },
    { section: "food", cat: "Sandwich", name: "Bombay Sandwich", price: "210", img: "", desc: "Indian twist spices with potato, onion & tomato served with grilled multigrain bread" },
    { section: "food", cat: "Sandwich", name: "Paneer Tandoori Sandwich ⭐", price: "220", img: "", desc: "In-house tandoori sauce filled with paneer served with multigrain bread" },
    { section: "food", cat: "Sandwich", name: "Tandoori Soya Sandwich", price: "199", img: "", desc: "Multigrain sandwich with in-house cheese sauce, lettuce, tomato, and cucumber" },
    { section: "food", cat: "Sandwich", name: "Classic Grilled Sandwich", price: "120", img: "images/All other sandwich.jpg.jpeg", desc: "Grilled multigrain sandwich with in-house cheese sauce and fresh veggies" },

    // ── FRENCH FRIES ──────────────────────────────────────────
    { section: "food", cat: "French Fries", name: "Classic Salted French Fries", price: "120", img: "images/Classic salted French fries.jpg.jpeg", desc: "Classic fries seasoned with salt" },
    { section: "food", cat: "French Fries", name: "Peri Peri French Fries", price: "170", img: "images/Peri peri French fries.jpg.jpeg", desc: "Fries seasoned with in-house peri peri spice" },
    { section: "food", cat: "French Fries", name: "Cheese Mexican Fries", price: "210", img: "images/Cheese Mexican fries.jpg.jpeg", desc: "Fries served with in-house cheese sauce" },
    { section: "food", cat: "French Fries", name: "Schezwan French Fries", price: "190", img: "images/Schezwan French fries.jpg.jpeg", desc: "Fries seasoned with spicy schezwan sauce" },

    // ── MUNCHIES ──────────────────────────────────────────────
    { section: "food", cat: "Munchies", name: "Millet Nacho Bhel ⭐", price: "260", img: "images/Millet nacho bhel.jpg.jpeg", desc: "Millet Nachos with in-house fresh cheese sauce and Salsa" },
    { section: "food", cat: "Munchies", name: "European Paneer Pakoda", price: "250", img: "images/European paneer pakoda.jpg.jpeg", desc: "Stuffed with spicy Thai green paste, sourdough coated, lightly fried in organic peanut oil" },
    { section: "food", cat: "Munchies", name: "Indo-European Chola Bhatura ⭐", price: "140", img: "images/Info European chola bhatura.jpg.jpeg", desc: "Mini pleasure with hummus and in-house sauces with freshly made chola" },
    { section: "food", cat: "Munchies", name: "Chilli Paneer Dry", price: "190", img: "images/Chilli paneer dry.jpg.jpeg", desc: "Classic preparation of paneer with sauces" },
    { section: "food", cat: "Munchies", name: "Chilli Ragi Manchurian Dry", price: "170", img: "images/Ragi Manchurian dry.jpg.jpeg", desc: "Classic preparation of ragi manchurian with sauces" },
    { section: "food", cat: "Munchies", name: "Onion Rings ⭐", price: "150", img: "images/Onion rings.jpg.jpeg", desc: "Sourdough coated onion rings, lightly fried in organic peanut oil" },
    { section: "food", cat: "Munchies", name: "Exotic Veg Crunch", price: "180", img: "images/Veggie exotic toast.jpg.jpeg", desc: "Seasonal exotic veggies, sourdough coated, lightly fried in organic peanut oil" },
    { section: "food", cat: "Munchies", name: "Crispy Mushroom", price: "160", img: "images/Crispy mushroom.jpg.jpeg", desc: "Fresh mushrooms, sourdough coated, lightly fried in organic peanut oil" },

    // ── TOASTS ────────────────────────────────────────────────
    { section: "food", cat: "Toasts", name: "Chilli Mushroom Toast", price: "290", img: "images/Chilli mushroom toast.jpg.jpeg", desc: "Sliced mushrooms baked in spicy in-house sauce served on sourdough" },
    { section: "food", cat: "Toasts", name: "Chilli Cheese Garlic Toast", price: "280", img: "images/Chilli cheese garlic toast.jpg.jpeg", desc: "In-house chilli cheese garlic sauce baked with veggies on sourdough" },
    { section: "food", cat: "Toasts", name: "Veggie Exotic Toast", price: "300", img: "images/Veggie exotic toast.jpg.jpeg", desc: "Exotic seasonal vegetables tossed in olive oil, baked with in-house cheese on sourdough" },
    { section: "food", cat: "Toasts", name: "Avocado Toast ⭐", price: "320", img: "images/Avocado toast.jpg.jpeg", desc: "Avocado seasoned in guacamole process and baked on sourdough" },
    { section: "food", cat: "Toasts", name: "Caramelised Onion Mushroom ⭐", price: "300", img: "images/Caramelised onion mushroom.jpg.jpeg", desc: "Sliced onion and mushrooms caramelised in butter and olive oil, seasoned with TTR spices on sourdough" },

    // ── SALADS ────────────────────────────────────────────────
    { section: "food", cat: "Salads", name: "Weight Gain Salad", price: "320", img: "images/Weight gain salad.jpg.jpeg", desc: "Peanuts, chickpea, grilled Paneer, cucumber, berries, olives, bell peppers, sweet corn, basil, lettuce, TTR dressing. (~700 kcal, 41g Protein)" },
    { section: "food", cat: "Salads", name: "Weight Loss Salad ⭐", price: "420", img: "images/Weight loss salad.jpg.jpeg", desc: "Broccoli, grilled Tofu, walnuts, Basil pesto, Chia seeds, Almonds, TTR dressing. (~250 kcal, 20g Protein)" },
    { section: "food", cat: "Salads", name: "Protein Chaat", price: "250", img: "images/Protein chaat salad.jpg.jpeg", desc: "Tomato, boiled moong, Imli chutney, Chickpea, Rajma, curd, TTR dressing. (~360 kcal, 20g Protein)" },
    { section: "food", cat: "Salads", name: "Classic Fruit Salad", price: "299", img: "", desc: "Seasonal fresh fruits seasoned with taste twist" },

    // ── COFFEE (HOT) ──────────────────────────────────────────
    { section: "beverages", cat: "Coffee (Hot)", name: "Bullet Coffee", price: "120", img: "", desc: "Americano with cow ghee" },
    { section: "beverages", cat: "Coffee (Hot)", name: "Irish Coffee", price: "160", img: "", desc: "A rich blend of coffee, Irish whiskey, and cream" },
    { section: "beverages", cat: "Coffee (Hot)", name: "Biscoff Latte", price: "190", img: "", desc: "Lotus biscoff & espresso with thin layered frothed milk" },
    { section: "beverages", cat: "Coffee (Hot)", name: "Chilli Cinnamon Latte", price: "190", img: "", desc: "Espresso with steamed milk, cinnamon & light foam" },

    // ── ICED & FRAPPES ────────────────────────────────────────
    { section: "beverages", cat: "Iced & Frappes", name: "Vietnamese White", price: "200", img: "", desc: "Light-roast coffee, creamy, sweet, smooth" },
    { section: "beverages", cat: "Iced & Frappes", name: "Oreo Coffee", price: "200", img: "", desc: "Cold coffee blended with Oreo" },
    { section: "beverages", cat: "Iced & Frappes", name: "Tiramisu Frappe", price: "240", img: "", desc: "Creamy frappe with rich tiramisu flavor" },
    { section: "beverages", cat: "Iced & Frappes", name: "Nutella Almond Frappe", price: "280", img: "", desc: "Indulgent Nutella and almond blend" },

    // ── MOCKTAILS & MORE ──────────────────────────────────────
    { section: "beverages", cat: "Mocktails & More", name: "Spiced Guava", price: "180", img: "", desc: "Sweet guava juice with a dash of chilli & masala" },
    { section: "beverages", cat: "Mocktails & More", name: "Oats Banana Smoothie", price: "210", img: "", desc: "Healthy oats and banana blend" },
    { section: "beverages", cat: "Mocktails & More", name: "Ragi Milkshake", price: "210", img: "", desc: "Nutritious ragi milkshake" },
    { section: "beverages", cat: "Mocktails & More", name: "Makhana Milkshake", price: "260", img: "", desc: "Creamy makhana based natural milkshake" },

    // ── SMOOTHIES ─────────────────────────────────────────────
    { section: "beverages", cat: "Smoothies", name: "Dates Oats", price: "300", img: "images/Date oats smoothie.jpg.jpeg", desc: "Soaked dates, milk/oat milk. Natural sweetness + slow-release carbs. (~320 kcal)" },
    { section: "beverages", cat: "Smoothies", name: "Banana Peanut Butter", price: "260", img: "images/Banana peanut butter.jpg.jpeg", desc: "Banana, natural peanut butter, milk/oat milk, chia seeds. No added sugar. (~350 kcal)" },
    { section: "beverages", cat: "Smoothies", name: "Coffee Banana Energy ⭐", price: "399", img: "images/Coffee banana smoothie.jpg.jpeg", desc: "Banana, chilled brewed coffee, milk/oat milk, cocoa powder. Natural caffeine + potassium. (~260 kcal)" },
    { section: "beverages", cat: "Smoothies", name: "Chocolate Oats Smoothie ⭐", price: "250", img: "images/Chocolate pats smoothie.jpg.jpeg", desc: "Oats, banana, unsweetened cocoa, milk/oat milk. No sugar, slow carbs. (~310 kcal)" },
    { section: "beverages", cat: "Smoothies", name: "Avocado Smoothie Bowl", price: "360", img: "images/Avocado smoothie.jpg.jpeg", desc: "Ripe avocado, banana, milk/oat milk, honey or dates, chia seeds. (~375 kcal)" },
    { section: "beverages", cat: "Smoothies", name: "Vegan Plant Protein Smoothie", price: "280", img: "images/Vegan plant protein smoothie.jpg.jpeg", desc: "Spinach, banana, milk/oat milk, peanut butter, chia seeds. (~307 kcal)" },

    // ── MILLET PANCAKES ───────────────────────────────────────
    { section: "desserts", cat: "Millet Pancakes", name: "Classic Pancakes", price: "299", img: "images/Classic pancakes.jpg.jpeg", desc: "A classic preparation of millet based pancake" },
    { section: "desserts", cat: "Millet Pancakes", name: "Banana Choco Chip ⭐", price: "330", img: "images/Banana choco chip pancakes.jpg.jpeg", desc: "Millet based pancake loaded with banana and choco chips" },
    { section: "desserts", cat: "Millet Pancakes", name: "Chocolate Pancakes", price: "320", img: "", desc: "Millet based pancake with dark chocolate syrup—perfect for chocolate lovers" },
    { section: "desserts", cat: "Millet Pancakes", name: "Blueberry Pancakes ⭐", price: "350", img: "images/Blueberry pancakes.jpg.jpeg", desc: "Millet based pancake loaded with a refreshing taste of authentic blueberry" },
];

// ── Hero images for bowl categories ─────────────────────────────
const categoryHeroImages = {
    "Paratha Bowls": "images/paratha-bowl-hero.jpg",
    "Rice Bowls": "images/rice-bowl-hero.jpg"
};

// ── Build-your-bowl steps ────────────────────────────────────────
const categorySteps = {
    "Paratha Bowls": {
        intro: "🌟 Let's prepare your Paratha Bowl — The Indian Taco 👨‍🍳",
        steps: [
            { number: "Step 1", title: "Choose Your Flavour" },
            {
                number: "Step 2",
                title: "Choose Your Paratha",
                options: [
                    { name: "Regular Bread", desc: "Wholesome, earthy, organic gehu Sharbati flour—pure nourishment" },
                    { name: "Multigrain Bread", desc: "Nutritious, earthy multigrain flour—wholesome, hearty, naturally pure" },
                    { name: "Exotic Bread", desc: "Gehu ka Atta, richly nut stuffed & seed-garnished, purely nourishing" }
                ]
            }
        ]
    },
    "Rice Bowls": {
        intro: "🍚 Let's prepare your Rice Bowl 👨‍🍳",
        steps: [
            { number: "Step 1", title: "Choose Your Rice Preparation" },
            {
                number: "Step 2",
                title: "Choose Your Rice Flavour",
                options: [
                    { name: "Pesto", desc: "Pesto rice with fresh mint and basil—earthy, organically delightful" },
                    { name: "Tomato", desc: "Tangy tomato rice, spiced gently and organically comforting" },
                    { name: "Chatpati Imli", desc: "Chatpati imli rice—tangy, spiced, earthy, and soulfully organic" },
                    { name: "Lemon", desc: "Zesty lemon rice infused with turmeric, curry leaves, and purity" },
                    { name: "Ghee-Jeera", desc: "Fragrant ghee jeera rice—earthy, simple, and soul-nourishing" },
                    { name: "Asian", desc: "Tossed with fresh carrots, beans, and turmeric—earthy, nourishing" },
                    { name: "Steam", desc: "The classic full grain steam rice, served hot" },
                    { name: "Biryani", desc: "Fragrant biryani rice layered with spices, herbs, and slow-cooked richness" }
                ]
            }
        ]
    }
};

// ── Category footer notes ────────────────────────────────────────
const categoryNotes = {
    "Paratha Bowls": "<strong>Every bite is filled with:</strong> Lettuce, bell peppers, pickled veggies, jalapeños, olives, smoky burnt garlic, onion chutney, peanut chutney, cheese sauce & imli chutney — flavour-packed, organic & complementary.",
    "Rice Bowls": "<strong>Every bite is filled with:</strong> Organic boiled moong, fresh lettuce, sauté bell pepper, falafel tikki, papad, sautéed vegetables, masala ring onions & basil — garnished with dry fruits & paired with makhni and coconut gravy."
};
