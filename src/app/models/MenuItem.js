const { Schema, model, models, default: mongoose } = require("mongoose");

const ExtraPriceSchema = new Schema({
  name: String,
  price: Number,
});

const MenuItemsSchema = new Schema(
  {
    image: { type: String },
    name: { type: String },
    description: { type: String },
    category: { types: mongoose.Types.ObjectId },
    basePrice: { type: Number },
    sizes: { type: [ExtraPriceSchema] },
    extraIngredientPrices: { type: [ExtraPriceSchema] },
  },
  { timestamps: true }
);

export const MenuItem = models?.MenuItem || model("MenuItem", MenuItemsSchema);
