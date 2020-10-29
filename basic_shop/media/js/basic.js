let showNike = document.getElementById('nike');
let showAdidas = document.getElementById('adidas');
let showBalen = document.getElementById('balenciaga');
let showVete = document.getElementById('vetements');
let showMen = document.getElementById('proMen');
let showWoman = document.getElementById('proWomen');
let showApparel = document.getElementById('apparel');
let showShoes = document.getElementById('shoes');
let showAccessories = document.getElementById('accessories');
let showList= document.getElementById("showList");
let search_Text = document.getElementById("search");
let search_btn = document.getElementById("search-btn");
let x = document.getElementsByClassName("silderItems");
//chuyển đọng trái phải silder show
var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for(i = 0 ; i< x.length;i++ ){
    x[i].style.display = 'none';
  }
  slideIndex ++;
  if (slideIndex > x.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  setTimeout(showDivs,2000);
}
// auto run slider

//show sp ra html
function soProduct(img, name, price)
{
    showList.insertAdjacentHTML('beforeEnd', 
    `
    <div class="productItem">
      <div class ="productsImg" style = "position: relative">
        <div class="productImg0" style = "top:0; "><img src="${img[0]}" alt="" ></div>
        <div class="productImg1" style = "position: absolute ; top: 0 ; z-index :-1"><img src="${img[1]}" alt="" ></div>
      </div>
      <div class="productTit">
        <b style ="font-size:10px;">${name}</b>
      </div>
      <div class="productPrice">$${price}</div>
      <button  id="addPro">Add to cart</button>
     </div>
    `
    )
}

function searchResult (name){
  filter-ul.insertAdjacentElement('beforeEnd',
  `
    <div>
      <ul id="filter-ul">
        <li class="filter" >${name}</li>
      </ul>
    </div>
    `
  )
}
// show sản phẩm ra từ đầu
showList.innerHTML = '';
for(let i=0; i< products.length; i++)
{
  // , products[i].description
    soProduct(products[i].img, products[i].name,products[i].price);
    // console.log(products[i].price)
}

// tìm kiếm theo brand + gender
// nike
showNike.addEventListener('click',()=>{
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){
    if(products[i].brand == 'Nike'){

      soProduct(products[i].img, products[i].name, products[i].price);
      
    }
  }
})
// adidas
showAdidas.addEventListener('click',()=>{
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){
    if(products[i].brand == 'adidas'){

      soProduct(products[i].img, products[i].name, products[i].price);
      
    }
  }
})
// balenciaga
showBalen.addEventListener('click',()=>{
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){
    if(products[i].brand == 'balenciaga'){

      soProduct(products[i].img, products[i].name, products[i].price);
      
    }
  }
})
// vetements
showVete.addEventListener('click',()=>{
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){

    if(products[i].brand == 'VETEMENTS'){

      soProduct(products[i].img, products[i].name, products[i].price);
      
    }
  }
})
// show products for men
showMen.addEventListener('click',()=>{
  showList.innerHTML = '';
  // alert(products[1].gender)
  for(let i = 0 ; i < products.length ; i++){
    for(let j = 0 ; j <products[i].gender.length ; j++){
      if(products[i].gender[j] == 'male'){

        soProduct(products[i].img, products[i].name, products[i].price);
        
      }
    }
  }
})
// show products for women
showWoman.addEventListener('click',()=>{
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){
    for(let j = 0 ; j <products[i].gender.length ; j++){
      if(products[i].gender[j] == 'female'){

        soProduct(products[i].img, products[i].name, products[i].price);
        
      }
    }
  }
})

showApparel.addEventListener('click',()=>{
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){
    if(products[i].category == 'apparel'){

      soProduct(products[i].img, products[i].name, products[i].price);
      
    }
  }
})
showShoes.addEventListener('click',()=>{
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){
    if(products[i].category == 'shoes'){

      soProduct(products[i].img, products[i].name, products[i].price);
      
    }
  }
})
showAccessories.addEventListener('click',()=>{
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){
    if(products[i].category == 'accessories'){

      soProduct(products[i].img, products[i].name, products[i].price);
      
    }
  }
})
// tìm kiếm theo tên
function getInputValue(){
  // Selecting the input element and get its value 
  showList.innerHTML ='';
  var inputVal = search_Text.value.toLowerCase();
  for(let i = 0 ; i < products.length ;i++){
    let x = products[i].name.toLowerCase()
      if(x == inputVal){
        soProduct(products[i].img, products[i].name, products[i].price);
        searchResult(products[i].name);
    }
  }
}
 // tìm kiếm search live
function liveSearch(){
  let fillterUl = document.getElementById('filter-ul');
  fillterUl.innerHTML = "  ";
  if (search_Text.value.length > 0) {
    for(let i =0; i<products.length ; i++){
      a = products[i].name;
      if(a.toUpperCase().indexOf((search_Text.value.toUpperCase())) > -1){
        fillterUl.innerHTML += `<li style = "display :  block; background-color: seashell; border-top: solid;"">${a}</li>`
      }
      else {
        fillterUl.innerHTML += `<li style = "display : none; ">${a}</li>`
      }
    }
  }
}
// sắp xếp theo giá 
const sortPro = document.getElementById("sortbyprice");
sortPro.addEventListener('change', (e) => {
  let sortType = sortPro.value;
  if (sortType == "hight_to_low") {
    
    products.sort(function (a, b) {
      let keyA = a.price;
      let keyB = b.price;
      console.log(keyA)
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
      
    });
    for(let i=0;i<products.length; i++){
      soProduct(products[i].img, products[i].name, products[i].price )
      }
    
  }
  else {
    products.sort(function (a, b) {
      let keyA = a.price;
      let keyB = b.price;
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
    for(let i=0;i<products.length; i++){
      soProduct(products[i].img, products[i].name, products[i].price )
      }

  }
});

// function checkPrice(){
//   let keyA = a.price;
//   let keyB = b.price;
//   alert('hello')
//   products.sort(function(a,b){
//     if (keyA < keyB) return -1;
//       if (keyA > keyB) return 1;
//       return 0;
//   });
//   for(let i=0;i<products.length; i++){
//     soProduct(products[i].img, products[i].name, products[i].price )
//   }
// }
