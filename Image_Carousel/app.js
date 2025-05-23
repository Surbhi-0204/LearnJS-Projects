/**
 * Write your challenge solution here
 */
// Image data
const images = [
    {
      url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful Mountain Landscape',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Ocean Sunset View',
    },
    {
      url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Autumn Forest Path',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Urban City Skyline',
    },
  ];
   const carouselTrack = document.getElementById("carouselTrack");
   const caption = document.getElementById("caption");
   const prevButton = document.getElementById("prevButton");
   const nextButton = document.getElementById("nextButton");
   const carouselNav = document.getElementById("carouselNav");
   const autoPlayButton = document.getElementById("autoPlayButton");
   const timerDisplay = document.getElementById("timerDisplay");

   let n = 0;
   let playauto = false;
   let countdown = 5;
   const indicators = [];

//when the initial page loads 
    
   //initial image
   const imageElement = document.createElement('img');
   imageElement.className='carousel-slide'
   imageElement.src = images[n].url;
   carouselTrack.appendChild(imageElement);

    //initial caption
   const imageCaption= document.createElement('span');
   imageCaption.textContent = images[n].caption;
   caption.appendChild(imageCaption);

    //indicators 
    images.forEach((element, index) =>{
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        if (index == 0){
            indicator.classList.add("active");
        }
        carouselNav.appendChild(indicator);
        indicators.push(indicator);
    })
    
//next button function 
    nextButton.addEventListener('click' , ()=> {
        indicators[n].classList.remove("active");

    if ( n < images.length-1){
        n++;
    }else{
        n=0;
    }

    imageElement.src = images[n].url;
    imageCaption.textContent = images[n].caption;
    carouselTrack.appendChild(imageElement);
    caption.appendChild(imageCaption);
    indicators[n].classList.add("active");

   })

//previous button function 
   prevButton.addEventListener('click' , ()=> {
    
    indicators[n].classList.remove("active");

    if (n == 0 ){
        n = images.length-1;
    }else{
        n--;
    }

    imageElement.src = images[n].url;
    imageCaption.textContent = images[n].caption;
    carouselTrack.appendChild(imageElement);
    caption.appendChild(imageCaption);
    indicators[n].classList.add("active");

})

// auto play function
let autoPlayInterval = null
function startAutoPlay(){
    autoPlayInterval = setInterval(() =>{
        indicators[n].classList.remove("active");
        if (n < images.length-1){
            n++;
        }else{
            n=0;
        }
        imageElement.src = images[n].url;
        imageCaption.textContent = images[n].caption;
        indicators[n].classList.add("active");
    },5000);
}

// countdown function
let countdownInterval; 
function startCountdown() {
    countdown = 5;
    // timerDisplay.textContent = `Next slide in ${countdown }s`;
    countdownInterval = setInterval(() => {
      timerDisplay.textContent = `Next slide in ${countdown }s`;
      countdown--;
      if (countdown == 0) {
        countdown = 5;
    }
    }, 1000);
  }

//event listener for auto play button  
autoPlayButton.addEventListener( "click" , () => {
    if ( playauto){
        clearInterval(autoPlayInterval);
        clearInterval(countdownInterval);
        timerDisplay.textContent = "";
        autoPlayButton.textContent="Start Auto Play";
    }else{
        startCountdown();
        startAutoPlay();
        autoPlayButton.textContent="Stop Auto Play";
    }
    playauto=!playauto;
})