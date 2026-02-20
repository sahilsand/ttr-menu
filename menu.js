// ── Top-level sections shown on landing screen ───────────────────
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
        desc: "Coffee, Frappes, Mocktails & more",
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

// ── Menu data with section tag ───────────────────────────────────
const menuData = [
    // PARATHA BOWLS
    { section: "food", cat: "Paratha Bowls", name: "Fresh Creamy Paneer", price: "335", desc: "Fresh, creamy paneer stuffed in soft parathas, served warm for a comforting, wholesome bowl rooted in purity and rustic goodness" },
    { section: "food", cat: "Paratha Bowls", name: "Mava Mirchi ⭐", price: "315", desc: "Spiced mava-stuffed green chilies wrapped in soft parathas, offering a bold, earthy bowl with rich, rustic flavors and organic warmth" },
    { section: "food", cat: "Paratha Bowls", name: "Vegetable Keema 🌶️", price: "280", desc: "Wholesome veggie keema filled in warm parathas, delivering a savory, textured bowl bursting with earthy spices" },
    { section: "food", cat: "Paratha Bowls", name: "Chickpeas Khoya Bite", price: "270", desc: "Wholesome chana and rich khoya bites wrapped in soft parathas, creating a sweet-spicy, nourishing bowl" },
    { section: "food", cat: "Paratha Bowls", name: "Matar Magic Dal", price: "300", desc: "Green peas and yellow dal slow-cooked with aromatic spices—a soul-soothing, flavorful experience" },
    { section: "food", cat: "Paratha Bowls", name: "Green Harvest", price: "230", desc: "Exotic veggies blending vibrant flavors & nourishing goodness for a wholesome, deliciously healthy experience" },
    { section: "food", cat: "Paratha Bowls", name: "Umami Mushroom ⭐", price: "335", desc: "Delicate mushrooms infused with umami richness, wrapped in tender parathas—earthy, wholesome, and satisfying" },
    { section: "food", cat: "Paratha Bowls", name: "Tandoor Garden 🌶️ ⭐", price: "290", desc: "Charred garden-fresh veggies kissed by tandoor flames, wrapped in soft parathas—smoky and vibrant" },
    { section: "food", cat: "Paratha Bowls", name: "Chilli Paneer 🌶️", price: "345", desc: "Fiery chilli paneer tossed in TTR's secret spice blend—bold, aromatic, and soulful" },
    { section: "food", cat: "Paratha Bowls", name: "Paneer Delight ⭐", price: "340", desc: "Soft parathas filled with spiced paneer—creamy, comforting, rich in flavor and warmth" },

    // RICE BOWLS
    { section: "food", cat: "Rice Bowls", name: "Green Garden fresh", price: "330", desc: "Garden-fresh exotic veggies sautéed and served over organic rice—colorful, crunchy, and earthy" },
    { section: "food", cat: "Rice Bowls", name: "Crispy Mushroom (Fry/Sauté)", price: "345", desc: "Fried/sauté mushrooms over fragrant rice, infused with organic spices and herbs, with two infused gravies" },
    { section: "food", cat: "Rice Bowls", name: "Corn Affair (Fry/Sauté)", price: "310", desc: "Golden corn and baby corn with fire-roasted spices over organic rice—smoky-sweet and comforting" },
    { section: "food", cat: "Rice Bowls", name: "Exotic Veggie (Fry/Sauté)", price: "345", desc: "Farm-fresh exotic veggies, baby corn, mushrooms tossed in spices over organic rice" },
    { section: "food", cat: "Rice Bowls", name: "Thai Green Curry 🌶️", price: "335", desc: "Thai green curry infused with coconut milk with exotic veggies over organic rice—creamy and herbal" },
    { section: "food", cat: "Rice Bowls", name: "Rajma Chola Masala", price: "260", desc: "Rajma and chola in desi masalas over organic rice—hearty, spicy, and comforting" },
    { section: "food", cat: "Rice Bowls", name: "Shahi Paneer Makhani", price: "370", desc: "Creamy shahi paneer in buttery makhni gravy over organic rice—regal and nourishing" },
    { section: "food", cat: "Rice Bowls", name: "Dal Makhani", price: "280", desc: "Slow-cooked Punjabi dal makhni over organic rice—buttery, rich, earthy, and nourishing" },
    { section: "food", cat: "Rice Bowls", name: "Chilli Paneer 🌶️", price: "340", desc: "Tender organic paneer in fiery chilli sauce over wholesome rice—bold Indo-Chinese fusion" },
    { section: "food", cat: "Rice Bowls", name: "Ragi Manchurian 🌶️", price: "250", desc: "Crispy ragi manchurian over organic rice, blending ancient grains with zesty spices" },
    { section: "food", cat: "Rice Bowls", name: "Mughlai Dry Fruit Delight", price: "420", desc: "Mughlai spices and dry fruits slow-cooked over organic rice—warm, nutty, aromatic indulgence" },

    // PIZZAS
    { section: "food", cat: "Pizza (Sourdough)", name: "Margherita", price: "120 / 240", desc: "Sourdough base, fresh tomato sauce, Mozzarella, and Olive oil" },
    { section: "food", cat: "Pizza (Sourdough)", name: "Farmhouse", price: "260 / 416", desc: "Mozzarella, Capsicum, Onion, Tomato, Mushroom" },
    { section: "food", cat: "Pizza (Sourdough)", name: "Cheese N Corn", price: "200 / 320", desc: "Cheesy tomato sauce, Mozzarella, American Sweet corn" },
    { section: "food", cat: "Pizza (Sourdough)", name: "Mushroom Margherita", price: "210 / 330", desc: "Cheesy tomato sauce, Mozzarella, grilled mushroom" },
    { section: "food", cat: "Pizza (Sourdough)", name: "Indi Tandoori Paneer", price: "300 / 480", desc: "Tandoori pizza sauce, Paneer, Curd, Tandoori masala, Onion, capsicum" },
    { section: "food", cat: "TTR Special Crisp", name: "Tomato Basil Crisp", price: "320", desc: "Wheat base pizza, cherry tomatoes, and olives with papad-like crunch" },
    { section: "food", cat: "TTR Special Crisp", name: "Veggie Exotic Crisp", price: "350", desc: "Wheat base pizza topped with fresh seasonal exotic veggies" },
    { section: "food", cat: "TTR Special Crisp", name: "Makhani Paneer Crisp ⭐", price: "300", desc: "Wheat base, Makhani sauce, and fresh paneer with an Indian twist" },

    // SOYA CHAAP
    { section: "food", cat: "Soya Chaap", name: "Chilli Garlic Chaap (Rice/Paratha)", price: "265 / 320", desc: "Stir-fried spicy savory Indo-Chinese plant protein" },
    { section: "food", cat: "Soya Chaap", name: "Malai Soya Chaap (Rice/Paratha)", price: "370 / 390", desc: "Cooked creamy with mild spices and rich flavor" },
    { section: "food", cat: "Soya Chaap", name: "Tandoori Soya Chaap (Rice/Paratha)", price: "330 / 370", desc: "Grilled smoky flavorful chaap with in-house tandoori sauce" },

    // PASTA & NOODLES
    { section: "food", cat: "Pasta & Noodles", name: "Aglio e Olio Pasta", price: "300", desc: "Pasta tossed with garlic and olive oil" },
    { section: "food", cat: "Pasta & Noodles", name: "Cheese Sauce Pasta ⭐", price: "320", desc: "Tossed with in-house creamy cheese sauce and Italian spices" },
    { section: "food", cat: "Pasta & Noodles", name: "Arrabbiata Pasta 🌶️", price: "310", desc: "Pasta tossed in fresh and spicy tomato red gravy" },
    { section: "food", cat: "Pasta & Noodles", name: "Green Pesto Cream Pasta ⭐", price: "400", desc: "Pasta tossed with in-house fresh basil creamy pesto sauce" },
    { section: "food", cat: "Pasta & Noodles", name: "Vegetable Noodles", price: "210", desc: "Tossed with fresh veggies and flavorful spices" },
    { section: "food", cat: "Pasta & Noodles", name: "Burnt Garlic Noodles ⭐", price: "250", desc: "Tossed with in-house smoky and garlicky flavored sauce" },

    // MUNCHIES
    { section: "food", cat: "Munchies", name: "Millet Nacho Bhel ⭐", price: "260", desc: "Millet Nachos with in-house fresh cheese sauce and Salsa" },
    { section: "food", cat: "Munchies", name: "Avocado Bruschetta ⭐", price: "350", desc: "Sourdough topped with Guacamole and tossed garlicky tomato" },
    { section: "food", cat: "Munchies", name: "European Paneer Pakoda", price: "250", desc: "Stuffed with spicy Thai green paste, coated with sourdough, fried in peanut oil" },
    { section: "food", cat: "Munchies", name: "Indo-European Chola Bhatura ⭐", price: "140", desc: "Mini pleasure with hummus and in-house sauces with fresh chola" },

    // SALADS
    { section: "food", cat: "Salads", name: "Weight Gain Salad", price: "320", desc: "Peanuts, chickpea, Paneer, berries, olives. (~700 kcal, 41g Protein)" },
    { section: "food", cat: "Salads", name: "Weight Loss Salad ⭐", price: "420", desc: "Broccoli, Tofu, Walnuts, Basil pesto, Chia seeds. (~250 kcal, 20g Protein)" },
    { section: "food", cat: "Salads", name: "Protein Chaat", price: "250", desc: "Boiled moong, Imli chutney, Chickpea, Rajma, curd. (~360 kcal, 20g Protein)" },

    // COFFEE - HOT
    { section: "beverages", cat: "Coffee (Hot)", name: "Bullet Coffee", price: "120", desc: "Americano with cow ghee" },
    { section: "beverages", cat: "Coffee (Hot)", name: "Irish Coffee", price: "160", desc: "A rich blend of coffee, Irish whiskey, and cream" },
    { section: "beverages", cat: "Coffee (Hot)", name: "Biscoff Latte", price: "190", desc: "Lotus biscoff & espresso with thin layered frothed milk" },
    { section: "beverages", cat: "Coffee (Hot)", name: "Chilli Cinnamon Latte", price: "190", desc: "Espresso with steamed milk, cinnamon & light foam" },

    // ICED & FRAPPES
    { section: "beverages", cat: "Iced & Frappes", name: "Vietnamese White", price: "200", desc: "Light-roast coffee, creamy, sweet, smooth" },
    { section: "beverages", cat: "Iced & Frappes", name: "Oreo Coffee", price: "200", desc: "Cold coffee blended with Oreo" },
    { section: "beverages", cat: "Iced & Frappes", name: "Tiramisu Frappe", price: "240", desc: "Creamy frappe with rich tiramisu flavor" },
    { section: "beverages", cat: "Iced & Frappes", name: "Nutella Almond Frappe", price: "280", desc: "Indulgent Nutella and almond blend" },

    // MOCKTAILS & MORE
    { section: "beverages", cat: "Mocktails & More", name: "Spiced Guava", price: "180", desc: "Sweet guava juice with a dash of chilli & masala" },
    { section: "beverages", cat: "Mocktails & More", name: "Oats Banana Smoothie", price: "210", desc: "Healthy oats and banana blend" },
    { section: "beverages", cat: "Mocktails & More", name: "Ragi Milkshake", price: "210", desc: "Nutritious ragi milkshake" },
    { section: "beverages", cat: "Mocktails & More", name: "Makhana Milkshake", price: "260", desc: "Creamy makhana based natural milkshake" },

    // DESSERTS
    { section: "desserts", cat: "Millet Pancakes", name: "Classic Pancakes", price: "299", desc: "A classic preparation of millet based pancake" },
    { section: "desserts", cat: "Millet Pancakes", name: "Banana Choco Chip ⭐", price: "330", desc: "Millet based pancake loaded with banana and choco chips" },
    { section: "desserts", cat: "Millet Pancakes", name: "Chocolate Pancakes", price: "320", desc: "Millet based pancake with dark chocolate syrup—perfect for chocolate lovers" },
    { section: "desserts", cat: "Millet Pancakes", name: "Blueberry Pancakes ⭐", price: "350", desc: "Millet based pancake with a refreshing taste of authentic blueberry" },
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
                    { name: "Chatpati Imli", desc: "Tangy, spiced, earthy, and soulfully organic" },
                    { name: "Lemon", desc: "Zesty lemon rice infused with turmeric and curry leaves" },
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
    "Paratha Bowls": "<strong>Every bite is filled with:</strong> Lettuce, bell peppers, pickled veggies, jalapeños, olives, smoky burnt garlic, onion chutney, peanut chutney, cheese sauce & imli chutney.",
    "Rice Bowls": "<strong>Every bite is filled with:</strong> Organic boiled moong, fresh lettuce, sauté bell pepper, falafel tikki, papad, sautéed vegetables, masala ring onions & basil—garnished with dry fruits & paired with makhni and coconut gravy."
};