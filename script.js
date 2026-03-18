const container = document.getElementById("recipes");
const searchInput = document.getElementById("search");

function display(data){
  container.innerHTML="";
  data.forEach(r=>{
    container.innerHTML+=`
      <div class="card" onclick="openRecipe('${r.name}')">
        <img src="${r.image}">
        <h3>${r.name}</h3>
      </div>
    `;
  });
}

function openRecipe(name){
  const r=recipes.find(x=>x.name===name);
  document.getElementById("modal").classList.remove("hidden");

  document.getElementById("modalContent").innerHTML=`
    <h2>${r.name}</h2>
    <img src="${r.image}" width="100%">
    <h3>Ingredients</h3>
    <ul>${r.ingredients.map(i=>`<li>${i}</li>`).join("")}</ul>
    <h3>Steps</h3>
    <ol>${r.steps.map(s=>`<li>${s}</li>`).join("")}</ol>
  `;
}

searchInput.addEventListener("input",()=>{
  const val=searchInput.value.toLowerCase();
  display(recipes.filter(r=>r.name.toLowerCase().includes(val) || r.ingredients.join().includes(val)));
});

display(recipes);
