
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
];
const ramenMenu = document.getElementById("ramen-menu");
function displayRamen(){
    
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen["image"];
        img.alt = ramen["name"];
        img.className = 'image-showers'
        ramenMenu.appendChild(img);
        console.log(img);

    })
}
const form = document.querySelector("form");
form.addEventListener("submit", addSubmitListener);

function addSubmitListener(e){
    e.preventDefault();
    const formData = new FormData(form);
    const newObj = Object.fromEntries(formData);

    const newRamen = {
        id: ramens.length + 1,
        name: newObj.name,
        restaurant: newObj.restaurant,
        image: newObj.image,
        rating: parseInt(newObj.rating),
        comment: newObj.comment
    };
    ramens.push(newRamen)

    const img = document.createElement("img");
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.className = 'image-showers';
    ramenMenu.appendChild(img);

    updateStatsDisplay(newRamen.name, newRamen.restaurant);
    return newObj;
}

const replacedImage = document.getElementById('img-detail');

let imge = ramens[0]["image"];

ramenMenu.addEventListener('click', handleClick);
function handleClick(event) {
    if(event.target.classList.contains('image-showers')) {
      replacedImage.src = event.target.src;
      replacedImage.alt = event.target.alt;
      
      // Find which ramen was clicked
      for(let i = 0; i < ramens.length; i++) {
        if(ramens[i].image === event.target.src.split('/').pop()) {
          // Update the stats 
          updateStatsDisplay(ramens[i].name, ramens[i].restaurant);
          break;
        }
      }
    }
  }

  function updateStatsDisplay(name, restaurant) {
    
    document.querySelector('#stats-left h1').textContent = name;
    document.querySelector('#stats-right h1').textContent = restaurant;
    
    document.querySelector('#text-detail h2').textContent = name;
    document.querySelector('#text-detail h3').textContent = restaurant;
  }

updateStatsDisplay(ramens[0].name, ramens[0].restaurant);

displayRamen()
