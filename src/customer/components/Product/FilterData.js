export const color = [
  "white",
  "Black",
  "Red",
  "marun",
  "Being",
  "Pink",
  "Green",
  "Yellow",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", lable: "White" },
      { value: "beige", lable: "Beige" },
      { value: "blue", lable: "Blue" },
      { value: "brown", lable: "Brown" },
      { value: "green", lable: "Green" },
      { value: "yellow", lable: "Yellow" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", lable: "S" },
      { value: "M", lable: "M" },
      { value: "L", lable: "L" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", lable: "₹159 To ₹399" },
      { value: "399-999", lable: "₹399 To ₹999" },
      { value: "999-1999", lable: "₹999 To ₹1999" },
      { value: "1999-2999", lable: "₹1999 To ₹2999" },
      { value: "3999-4999", lable: "₹3999 To ₹4999" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", lable: "10% And Above" },
      { value: "20", lable: "20% And Above" },
      { value: "30", lable: "30% And Above" },
      { value: "40", lable: "40% And Above" },
      { value: "50", lable: "50% And Above" },
      { value: "60", lable: "60% And Above" },
      { value: "70", lable: "70% And Above" },
      { value: "80", lable: "80% And Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", lable: "In Stock" },
      { value: "out_of_stock", lable: "Out Of Stock" },
    ],
  },
];
