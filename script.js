
document.addEventListener("DOMContentLoaded", () =>{

  let generateBtn = document.querySelector('#generate-product');
  generateBtn.addEventListener('click', renderEverything)

})

function renderEverything()
{
  let allproductsContainer = document.querySelector('#product-container')
  allproductsContainer.innerText = "";
  fetchaproducts();
}


async function fetchproducts()
{
  const product=await fetch(
    "https://60c98aa8772a760017203b57.mockapi.io/users",
    {
      method: "GET"
    }
  );
}
function fetchproducts(products){
  let url = products.url 
  fetch(url)
  .then(response => response.json())
  .then(function(productsData){
      renderPokemon(productsData)
  })
}

function fetchPokemonData(products){
  let allproductsContainer = document.getElementById('products-container');
  let productsContainer = document.createElement("div") 
  productsContainer.classList.add('ui', 'card');

  createPokeImage(products.id, productsContainer);



  let productsName = document.createElement('h4') 
  productsName.innerText = products.name

  let productsBrand = document.createElement('p')
  productsBrand.innerText = `#${products.brand}`
 
  let productsPrice = document.createElement('p')
  productsPrice.innerText = `#${products.price}`
 
  let productsTypes = document.createElement('ul') 

  createTypes(productsData.types, productsTypes) 

  productsContainer.append(productsName, productsBrand, productsPrice);
  allproductsContainer.appendChild(productsContainer);      
}

function createTypes(types, ul){
  types.forEach(function(type){
      let typeLi = document.createElement('li');
      typeLi.innerText = type['type']['name'];
      ul.append(typeLi)
  })
}

function createproductsImage(productsID, containerDiv){
  let productsImgContainer = document.createElement('div')
  productsImgContainer.classList.add('image')

  let productsImage = document.createElement('img')
  productImage.srcset = `https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande/${productsID}.jpg`

  productsImgContainer.append(productsImage);
  containerDiv.append(productsImgContainer);
}