/* Luna menu data.
   Edit it with edit.html (then 'Copy menu.js' and paste it over this file),
   or change the values below by hand. Everything here is a PLACEHOLDER until you replace it. */

/* =====================================================================
   Everything on the page comes from this block.
   ===================================================================== */
const LUNA = {

  contact: {
    whatsapp: "31600000000",          // country code + number, digits only (no + or spaces)
    email: "hello@example.com",
    whatsappMessage: "Hi Luna, I'd like to order: "
  },

  orderInfo: [
    ["Lead time",  "Please order at least 48 hours ahead"],
    ["Minimum order", "€15"],
    ["Pickup",     "Amsterdam (exact address shared when your order is confirmed)"],
    ["Delivery",   "Available for an extra fee, confirmed when you order"],
    ["Payment",    "Details confirmed when you order"]
  ],

  // To add a photo: put the image next to this file and set photo: "croissant.jpg"
  menu: [
    { name: "Butter Croissants", unit: "box of 4", price: "€14",
      desc: "Laminated by hand, crisp outside and open and tender within.",
      allergens: ["Gluten", "Milk", "Eggs"], photo: "" },

    { name: "Pistachio Tart", unit: "each", price: "€6.50",
      desc: "Sweet pastry shell, pistachio frangipane and a light cream.",
      allergens: ["Gluten", "Milk", "Eggs", "Nuts"], photo: "" },

    { name: "Dark Chocolate Brownies", unit: "box of 6", price: "€15",
      desc: "Dense, fudgy and finished with flaky sea salt.",
      allergens: ["Gluten", "Milk", "Eggs"], photo: "" },

    // Several sizes: use "options" instead of "unit" and "price".
    { name: "Tiramisu",
      desc: "Mascarpone cream, espresso-soaked savoiardi and cocoa.",
      options: [
        { size: "20 cm · serves 10–12", price: "€42" },
        { size: "16 cm · serves 6–8",   price: "€32" },
        { size: "8 cm · serves 2",      price: "€12" }
      ],
      allergens: ["Gluten", "Milk", "Eggs"], photo: "" },

    { name: "Brown Butter Cookies", unit: "box of 8", price: "€12",
      desc: "Chewy centres and crisp edges, with a hint of toffee.",
      allergens: ["Gluten", "Milk", "Eggs"], photo: "" }
  ],

  // Change this block each week. Set to null to hide the section.
  special: {
    label: "This week's special",
    name: "Spiced Pear & Hazelnut Tart",
    unit: "each", price: "€7",
    desc: "Poached pear, hazelnut cream and warm winter spice. Limited quantity, so please order early.",
    allergens: ["Gluten", "Milk", "Eggs", "Nuts"]
  }
};
/* ===================== end of editable block ======================= */
