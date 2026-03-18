const recipes = [];

for (let i = 1; i <= 70; i++) {
  recipes.push({
    name: "Delicious Recipe " + i,
    time: (i % 40) + 10,
    ingredients: ["onion","tomato","cheese","spices"],
    steps: ["Prepare ingredients","Cook properly","Serve hot"],
    image: "https://source.unsplash.com/400x300/?food," + i
  });
}
