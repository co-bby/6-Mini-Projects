const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const downButton= document.querySelector('.down-button');
const upButton= document.querySelector('.up-button');
const slideLength= slideRight.querySelectorAll('div').length;

let activeSlideIndex= 0;
 /* This code substracts 1 from the right-slide(images) and multiply it by 100(height) 
 so that it takes the last image of the right-slide */
slideLeft.style.top = `-${(slideLength-1) * 100}vh`;

upButton.addEventListener('click',()=>changeSlide('up'));
downButton.addEventListener('click', ()=>changeSlide('down'));

/* The clientHeight property returns the viewable height of an element in pixels, 
including padding,but not the border, scrollbar or margin.
The reason why the "viewable" word is specified,
 is because if the element's content is taller than the actual height of the element, 
this property will only return the height that is visible */
const changeSlide= (direction)=>{
	const sliderHeight = sliderContainer.clientHeight;
	if (direction==='up'){
		activeSlideIndex++;
		if(activeSlideIndex > slideLength - 1){
			activeSlideIndex=0
	}
}
	else if (direction ==='down'){
		activeSlideIndex --;
		if(activeSlideIndex< 0){
			activeSlideIndex= slideLength -1

	}
}

	
	
slideRight.style.transform= ` translateY(-${activeSlideIndex * sliderHeight}px )`
slideLeft.style.transform= ` translateY(+${activeSlideIndex * sliderHeight}px )`
}

