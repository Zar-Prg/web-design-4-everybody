/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
       document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
       document.getElementById('image').innerHTML = `${previewPic.alt}`;
       }
   
function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
       document.getElementById('image').style.backgroundImage = "url('')";
       document.getElementById('image').innerHTML = 'Hover over an image below to display here.';
    }

function addTab(){
    let images = document.getElementsByClassName('preview');
    console.log(images);
    for(let i = 0; i < images.length; i++){
        images[i].setAttribute('tabindex', '0');
        console.log(images[i])+"tabindex added";
    }
}

function randImage() {
    const images = ["images/pexels-amar-13965342.jpg","images/pexels-cottonbro-7673600.jpg","images/pexels-foadshariyati-29526383.jpg", "images/pexels-marcuschanmedia-18060076.jpg", "images/pexels-victorfreitas-791763.jpg", "images/pexels-ketut-subiyanto-4804336.jpg"];
    
    let imagesHolders = document.getElementsByClassName('preview');
    
    random = images[Math.floor(Math.random() * images.length)];
    
    Array.from(imagesHolders).forEach((image) => {
        let random = images[Math.floor(Math.random() * images.length)];
        image.src = random;
    });
}
