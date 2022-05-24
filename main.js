
/* prevent default action for page transition*/ 

window.onload = () => {
    const anchors = document.querySelectorAll('a');
    const transition_el = document.querySelector('.page-transition');
  
    setTimeout(() => {
      transition_el.classList.remove('is-active');
    }, 200);
  
    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];
  
        anchor.addEventListener('click', function (e) {

            if (e.target.target == "_blank") return;
            e.preventDefault();
                
            let target = e.target.href;
        
            console.log(transition_el);
        
            transition_el.classList.add('is-active');
        
            console.log(transition_el);
        
            setInterval(() => {
                window.location.href = target;
            }, 200);
      })
    }
}



/* Slideshow for index */

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slideshow");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

