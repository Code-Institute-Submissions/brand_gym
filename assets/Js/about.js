        
// Variables
const slider = document.querySelector('.about-slider');
const btns = document.querySelectorAll('.about-bttn');
const options = document.querySelectorAll('.about-option');
const slides = document.querySelectorAll('.about-img');
const backgrounds = document.querySelectorAll('.about-img-bg');

var index = 1;
var op_index = 0;
var size = slides[index].clientWidth;
var headline = document.querySelector('.about-headline');
        
        
update();

        
// Functions
function update(){  // Changes Headline; Changes Background; Changes Option
    changeHeadline();
    
	slider.style.transform = "translateX("+ (-size * index) +"px)";

	backgrounds.forEach(img => img.classList.remove('show'));
	backgrounds[op_index].classList.add('show');

	options.forEach(option => option.classList.remove('colored'));
	options[op_index].classList.add('colored');
}

function slide(){ // Activate Slide
	slider.style.transition = "transform .5s ease-in-out";
    update();
}

function btnCheck(){  // Change / Slide Images
	if (this.id === "about-prev"){
		index--;
		if (op_index === 0){
			op_index = 4;
		}
		else {
			op_index--;
		}
	}
	else {
		index++;
		if (op_index === 4){
			op_index = 0;
		}
		else {
			op_index++;
		}
	}

	slide();
//    console.log('indexes', index, op_index);
}

function optionFunc() {  // Changes Option
	let i = Number(this.getAttribute('op-index'));
	op_index = i;
	index = i + 1;

	slide();
}

        
function changeHeadline() {  // Changes Headline when Slide
    switch (index) {
        case 1:
            headline.innerHTML = "We Are...";
            break;
         case 2:
            headline.innerHTML = "Our Goal is...";
            break;
        case 3:
            headline.innerHTML = "Our Mindset...";
            break;
        case 4:
            headline.innerHTML = "Our Range...";
            break;
        case 5:
            headline.innerHTML = "Follow Us...";
            break;
    }
}


        
// Event Listener
slider.addEventListener('transitionend', () => {  // Handles 'Infinite' Slide
	if(slides[index].id === "about-last") {
		slider.style.transition = "none";
		index = slides.length - 2;
		slider.style.transform = "translateX("+ (-size * index) +"px)";
	}
	else if(slides[index].id === "about-first") {
		slider.style.transition = "none";
		index = 1;
		slider.style.transform = "translateX("+ (-size * index) +"px)";
	}
})

// for Buttons and Options 
btns.forEach(btn => btn.addEventListener('click', btnCheck));
options.forEach(option => option.addEventListener('click', optionFunc));
        
        
        
        
// !!! Ask Sensei about Automatic Slider
//setInterval(slide, 1000);
        