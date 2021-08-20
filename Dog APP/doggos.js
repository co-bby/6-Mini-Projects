// const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";
// const doggos=document.querySelector(".doggos")
// function addDog(){
// fetch(BREEDS_URL)
// .then(function(response) {
// 	return response.json();
// })
// .then (function(data) {
// 	const img = document.createElement('img');
// 	img.src = data.message;
// 	img.alt = 'cute doggo';

// 	doggos.appendChild(img);
	
// })
// }

const breeds ="https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".breeds");

fetch(breeds)
.then(function(response){ 
	return response.json(); })
.then(function(data){
	const dogsOjects = data.message;
	const dogsArray = Object.keys(dogsOjects)
	
	for (let i = 0; i < dogsArray.length; i++) {
		const option= document.createElement('option');
		option.value= dogsArray[i];
		option.innerHTML=dogsArray[i]
		select.appendChild(option)
	}
  
})
select.addEventListener('change', function(e){
	let url = `https://dog.ceo/api/breed/${e.target.value}/images/random`;
	const dogImg= document.querySelector(".dog-img");
	fetch(url)
	 .then(function(response){
		 return response.json();
	 })
	 .then(function(data){
		 dogImg.src=data.message; 
	 })
})