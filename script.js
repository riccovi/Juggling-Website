// index.html JS
if(window.location.pathname == '/index.html' || window.location.pathname == '/'){
    // Adapted Code: w3schools, 'How TO - Slideshow', 2022. [Online]. Available: https://www.w3schools.com/howto/howto_js_slideshow.asp. [Accessed: 4- Sep- 2022]
    // index.html Carousel
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n){
        showSlides(slideIndex += n);
    }

    function currentSlide(n){
        showSlides(slideIndex = n);
    }


    function showSlides(n){
        let slides = document.getElementsByClassName("carousel-slide");
        let dots = document.getElementsByClassName("dot");

        if(n > slides.length){          // Next after slide 5, go back to slide 1
            slideIndex = 1;
        }

        if(n < 1){                      // Previous before slide 1, go back to slide 5
            slideIndex = 5;             
        }

        for(let i = 0; i< slides.length; i++){
            slides[i].style.display = "none";       //Invisible
        }

        for(let i = 0; i< dots.length; i++){
            dots[i].className = dots[i].className.replace(" active", "");    // When not selected, replace the 'active' class with nothing
        }

        slides[slideIndex-1].style.display = "block";   //Make visible
        dots[slideIndex-1].className += " active";      //Add class 'active', therefore making it visible
    }

    // Header -  Changing Font Size
    let smallA = document.querySelector('.small-a');
    let mediumA = document.querySelector(".medium-a");
    let bigA = document.querySelector(".big-a");
    let body = document.querySelector("body");

    smallA.addEventListener("click",function(){
        body.style.fontSize = ".8em";       //Slightly Smaller
    })

    mediumA.addEventListener("click",function(){
        body.style.fontSize = "1em";        // Default Size
    })

    bigA.addEventListener("click",function(){
        body.style.fontSize = "1.2em";      //Slightly Larger
    })

    // Go to a certain page
    function recordspage(){
    window.location.href = "records.html";
    }

    function jugglerspage(){
        window.location.href = "jugglers.html";
    }

    function patternspage(){
        window.location.href = "patterns.html";
    }

    function propspage(){
        window.location.href = "props.html";
    }
}

// records.html JS
if(window.location.pathname == '/records.html'){
    // records.html Hide/Reveal Tables:
    function tableFunc(type1, type2){
        type1.classList.remove('reveal');       
        type1.classList.add('hide');        // Remove 'reveal' and add 'hide' to table not selected
        type2.classList.remove('hide');
        type2.classList.add('reveal')       // Remove 'hide' and add 'reveal' to table selected
    }

    //Ball Table Variables
    let ballOverallTable = document.querySelector('.ball-overall');
    let ballOneHandTable = document.querySelector('.ball-onehand');
    let ballOverallBtn = document.querySelector('.ball-overall-button');
    let ballOneHandBtn = document.querySelector('.ball-onehand-button');

    //Club Table Variables
    let clubOverallTable = document.querySelector(".club-overall");
    let clubOneHandTable = document.querySelector(".club-onehand");
    let clubOverallBtn = document.querySelector(".club-overall-button");
    let clubOneHandBtn = document.querySelector(".club-onehand-button");

    //Ring Table Variables
    let ringOverallTable = document.querySelector(".ring-overall");
    let ringOneHandTable = document.querySelector(".ring-onehand");
    let ringOverallBtn = document.querySelector(".ring-overall-button");
    let ringOneHandBtn = document.querySelector(".ring-onehand-button");

    //Bounce Table Variables
    let liftBounceTable = document.querySelector(".lift-bounce");
    let forceBounceTable = document.querySelector(".force-bounce");
    let liftBounceBtn = document.querySelector(".lift-bounce-button");
    let forceBounceBtn = document.querySelector(".force-bounce-button");

    // Diabolo Table Variables
    let lowDiaboloTable = document.querySelector(".low-diabolo");
    let highDiaboloTable = document.querySelector(".high-diabolo");
    let lowDiaboloBtn = document.querySelector(".low-diabolo-button");
    let highDiaboloBtn = document.querySelector(".high-diabolo-button");

    // Ball One Handed Button:
    ballOneHandBtn.addEventListener('click',function(){
        tableFunc(ballOverallTable, ballOneHandTable);
    })

    // Ball Overall button:
    ballOverallBtn.addEventListener("click",function(){
        tableFunc(ballOneHandTable, ballOverallTable);
    })

    // Club One handed button:
    clubOneHandBtn.addEventListener("click",function(){
        tableFunc(clubOverallTable,clubOneHandTable);
    })

    // Club Overall button:
    clubOverallBtn.addEventListener("click",function(){
        tableFunc(clubOneHandTable,clubOverallTable);
    })

    // Ring One handed button:
    ringOneHandBtn.addEventListener("click",function(){
        tableFunc(ringOverallTable,ringOneHandTable);
    })

    // Ring Overall button:
    ringOverallBtn.addEventListener("click",function(){
        tableFunc(ringOneHandTable,ringOverallTable);
    })

    // Lift Bounce button:
    liftBounceBtn.addEventListener("click",function(){
        tableFunc(forceBounceTable,liftBounceTable);
    })

    // Force Bounce button:
    forceBounceBtn.addEventListener("click",function(){
        tableFunc(liftBounceTable,forceBounceTable);
    })

    // High Diabolo button:
    highDiaboloBtn.addEventListener("click",function(){
        tableFunc(lowDiaboloTable,highDiaboloTable);
    })

    // Low Diabolo button:
    lowDiaboloBtn.addEventListener("click",function(){
        tableFunc(highDiaboloTable,lowDiaboloTable);
    })    

    // Header -  Changing Font Size
    let smallA = document.querySelector('.small-a');
    let mediumA = document.querySelector(".medium-a");
    let bigA = document.querySelector(".big-a");
    let body = document.querySelector("body");

    smallA.addEventListener("click",function(){
        body.style.fontSize = ".8em";       //Slightly Smaller
    })

    mediumA.addEventListener("click",function(){
        body.style.fontSize = "1em";        // Default Size
    })

    bigA.addEventListener("click",function(){
        body.style.fontSize = "1.2em";      //Slightly Larger
    })
}

// jugglers.html JS
if(window.location.pathname =='/jugglers.html'){
    // jugglers.html - Searching for a specific juggler
    searchInput = document.querySelector("#jugglers-select");
    searchBtn = document.querySelector(".search-juggler");

    searchBtn.addEventListener("click",function(){
        searchItem = searchInput.selectedIndex;  // Selected Index - shows the index of the selected input
        if(searchItem == 0){
            window.location.href = "#anthony-gatto";
        } else if(searchItem == 1){
            window.location.href = "#delaney-bayles";
        } else if(searchItem == 2){
            window.location.href = "#lauge-benjaminsen";
        } else if(searchItem == 3){
            window.location.href = "#alan-sulc";
        } else if(searchItem == 4){
            window.location.href = "#robert-mosher-iii";
        } else if(searchItem == 5){
            window.location.href = "#eden-zak";
        } else if(searchItem == 6){
            window.location.href = "#hiroki-kamei";
        } else if(searchItem == 7){
            window.location.href = "#guillaume-karpowicz";
        } else if(searchItem == 8){
            window.location.href = "#pieter-slachmuylders";
        }
    })

    // Header -  Changing Font Size
    let smallA = document.querySelector('.small-a');
    let mediumA = document.querySelector(".medium-a");
    let bigA = document.querySelector(".big-a");
    let body = document.querySelector("body");

    smallA.addEventListener("click",function(){
        body.style.fontSize = ".8em";       //Slightly Smaller
    })

    mediumA.addEventListener("click",function(){
        body.style.fontSize = "1em";        // Default Size
    })

    bigA.addEventListener("click",function(){
        body.style.fontSize = "1.2em";      //Slightly Larger
    })

    // Go to a certain page
    function tossjugglerspage(){
        window.location.href = "jugglers.html#toss-jugglers";
    }

    function bouncejugglerspage(){
        window.location.href = "jugglers.html#bounce-jugglers";
    }

    function diabolojugglerspage(){
        window.location.href = "jugglers.html#diabolo-jugglers";
    }
    
}

// paterns.html JS
if(window.location.pathname == '/patterns.html'){
    // Adapted Code: w3Schools, 'How TO - CSS/JS Modal', 2022. [Online]. Available: https://www.w3schools.com/howto/howto_css_modals.asp. [Accessed: 4- Sep- 2022]
    // patterns.html - "Did you know?" Modal
    let dykButton = document.querySelector(".did-you-know");
    let dykModal = document.querySelector(".dyk-modal");
    let dykClose = document.querySelector(".close-modal");

    dykButton.addEventListener("click",function(){
        dykModal.style.display = "block";   // Make modal appear
    })

    dykClose.addEventListener("click",function(){
        dykModal.style.display = "none";      // Make modal disappear 
    })

    // If the user clicks outside of the modal, close it as well
    window.onclick = function(event){
    if(event.target == dykModal){
        dykModal.style.display = "none";
    }
    }

    // Adapted Code: freeCodeCamp.org, 'JavaScript DOM Manipulation - Full Course for Beginners', 2022. [Online]. Available: https://youtu.be/5fb2aPlgoys. [Accessed: 4- Sep- 2022]
    //  patterns.html - Random Patterns Generator
    let newPatternBtn = document.querySelector("#new-pattern");
    let patternDescription = document.querySelector(".generator-description");
    let patternGIF = document.querySelector(".generator-gif");
    let patternFigcaption = document.querySelector(".generator-figcaption");

    // Array of objects containing pattern information
    const patternArray = [
        {
            description: "The shower pattern has an interesting name. One hand does all the high throws, while the other does all the passes. It's one of the easiest patterns to learn, but the difficulty quickly ramps up as you add more balls!",
            gif: "images/gifs/shower.webp",
            gifAlt: "gif of the shower pattern",
            figcaption: "Shower"
        },
        {
            description: "The most generic pattern for even-numbered props. The props don't actually switch hands, but rather each hand juggles separately.",
            gif: "images/gifs/fountain.webp",
            gifAlt: "gif of the fountain pattern",
            figcaption: "Fountain"
        },
        {
            description: "The half shower is a variation of the shower pattern. One hand does high throws, while the other hand does low throws, forming a nice type of shape. Easier to learn than the shower, this is a great pattern to impress!",
            gif: "images/gifs/shower.webp",
            gifAlt: "gif of the half shower pattern",
            figcaption: "Half Shower"
        },
        {
            description: "Mills Mess is one of the most famous 3 ball patterns there are. Invented by Steve Mills, this pattern requires you to continuously cross arms. This is quite the brain teaser to wrap your head around!",
            gif: "images/gifs/millsmess.webp",
            gifAlt: "gif of the mills mess pattern",
            figcaption: "Mills Mess"
        },
        {
            description: "9751 is a visually stunning but incredibly difficult trick. Each ball is thrown lower than the previous one, making the first ball you throw, the last you catch. Strength, accuracy and a strong neck is needed for this one!",
            gif: "images/gifs/97531.webp",
            gifAlt: "gif of the 9 7 5 3 1 pattern",
            figcaption: "97531"
        },
        {
            description: "633 is a common siteswap to begin with. One juggles 4 balls, throws 1 up, quickly juggles 3 underneath, then goes back into a 4 ball pattern. Keep practicing until you can do an infinite cycle!",
            gif: "images/gifs/633.webp",
            gifAlt: "gif of the 6 3 3 pattern",
            figcaption: "633"
        },
        {
            description: "The 'Cascade' is the most common, easiest and generic juggling pattern. It's the first juggling pattern anyone learns, and it consists of each hand throwing in an even, alternating rhythm. The cascade can only be juggled with an odd amount of props.",
            gif: "images/gifs/cascadegif.webp",
            gifAlt: "gif of the cascade pattern",
            figcaption: "Cascade"
        },
        {
            description: "Backcrosses are a form of pattern, where every throw is made behind the back. Make sure to throw high to nail this one!",
            gif: "images/gifs/backcrosses.webp",
            gifAlt: "gif of the backcrosses pattern",
            figcaption: "Backcrosses"
        },
        {
            description: "The wimpy pattern is another base pattern for all even-numbered balls. The balls are thrown synchronously just barely missing each other in the air. Get ready for a lot of collisions when learning this one!",
            gif: "images/gifs/wimpy.webp",
            gifAlt: "gif of the wimpy pattern",
            figcaption: "Wimpy"
        },
        {
            description: "423 is one of the easiest 3-ball siteswaps there is. Thrown one straight, throw one across, and repeat! This isn't really visually cool, and is only used to get the hang of siteswap.",
            gif: "images/gifs/423.webp",
            gifAlt: "gif of the 4 2 3 pattern",
            figcaption: "423"
        },
        {
            description: "441 is another easy 3-ball siteswap, yet it can look quite cool. Practice the high throws and passes separately, and you'll get it in no time!",
            gif: "images/gifs/441.webp",
            gifAlt: "gif of the 4 4 1 pattern",
            figcaption: "441",
        },
        {
            description: "5551 is a visually pleasing 4-ball trick, and a great pattern to practice for 5 balls!",
            gif: "images/gifs/5551.webp",
            gifAlt: "gif of the 5 5 5 1 pattern",
            figcaption: "5551",
        },
        {
            description: "This pattern is called chops because, you guessed it, you karate chop the air! Want to be a kung fu master while juggling? Learn chops!",
            gif: "images/gifs/chops.webp",
            gifAlt: "gif of the chops pattern",
            figcaption: "Chops",
        },
        {
            description: "The factory pattern is a visually-stunning and crowd-favourite trick. It is also much easier than it looks to learn, and is one of the first patterns any juggler should know!",
            gif: "images/gifs/factory.webp",
            gifAlt: "gif of the factory pattern",
            figcaption: "Factory",
        },
        {
            description: "The box pattern might boggle your brain at first, but it can result in some great tricks. Do this pattern while standing on a box, for some extra laughs!",
            gif: "images/gifs/box.webp",
            gifAlt: "gif of the box pattern",
            figcaption: "Box",
        },
        {
            description: "7531 is the 4-ball version of 97531. Still visually pleasing, but not nearly as difficult as the 5-ball version. You'll need to master this pattern if you want to do 97531!",
            gif: "images/gifs/7531.webp",
            gifAlt: "gif of the 7 5 3 1 pattern",
            figcaption: "7531",
        },
        {
            description: "885 is another incredible trick. Just as difficult as it looks, but if you can master this, you'll surely be the coolest in town!",
            gif: "images/gifs/885.webp",
            gifAlt: "gif of the 8 8 5 pattern",
            figcaption: "885",
        },
        {
            description: "Ah yes. db97531. The 7-ball version of 97531 and a trick only a few have ever done. You'll need a lot of time and perseverance for this one. But it'll be totally worth it!",
            gif: "images/gifs/db97531.webp",
            gifAlt: "gif of the d b 9 7 5 3 1 pattern",
            figcaption: "db97531",
        },
        {
            description: "645 is a cool 5-ball trick that lies on the intermediate range of difficulty. Execution isn't too difficult, but you'll need to work on your timing for this one!",
            gif: "images/gifs/645.webp",
            gifAlt: "gif of the 6 4 5 pattern",
            figcaption: "645",
        },
        {
            description: "The 3-ball version of 97531. Not the most visually pleasing trick, but it's a great starter for the 5-ball version.",
            gif: "images/gifs/531.webp",
            gifAlt: "gif of the 531 pattern",
            figcaption: "531",
        },
        {
            description: "A surprisingly easy pattern for it's intimidating siteswap! Break the pattern down into each step, and with a little bit of practice, you'll be able to juggle this pattern! ",
            gif: "images/gifs/12345.webp",
            gifAlt: "gif of the 1 2 3 4 5 pattern",
            figcaption: "12345",
        },
        {
            description: "The Boson Mess is a column variation of the standard Mills Mess. Every ball is thrown is the same location, and the hands do all the moving. This isn't such a crowd-favourite like Mills Mess.",
            gif: "images/gifs/bostonmess.webp",
            gifAlt: "gif of the boston mess pattern",
            figcaption: "Boston Mess",
        },
        {
            description: "Invented by Luke Burrage, this 4 ball pattern can be seen as a Wimpy pattern with crossed-arms. Surprisingly, the same hand always catches the same ball. No crossing is actually happening! ",
            gif: "images/gifs/burkesburrage.webp",
            gifAlt: "gif of the burke's burrage pattern",
            figcaption: "Burke's Burrage",
        },
        {
            description: "Cherry Picker is a visually amazing but quite difficult trick to master. This can be thought of as a Boston Mess with claw catches. One hand remains low and does all the throwing, and the other remains high and does all the dropping! ",
            gif: "images/gifs/cherrypicker.webp",
            gifAlt: "gif of the cherry picker pattern",
            figcaption: "Cherry Picker",
        },
        {
            description: "Don't worry, David doesn't actually have a dilemma, but he may have trying to come up with this trick! That being said, it is on the easier sides of tricks, and can be seen as a 2 ball shower with another ball in-between.",
            gif: "images/gifs/davidsdilemna.webp",
            gifAlt: "gif of the david's dilemma pattern",
            figcaption: "David's Dilemma",
        },
        {
            description: "A duplex is any type of throw where 2 or more balls are thrown at once. This can lead to some visually stunning patterns! Pictured, is a 5 ball duplex pattern. That's a total of 10 balls being juggled!",
            gif: "images/gifs/duplex.webp",
            gifAlt: "gif of the duplex pattern",
            figcaption: "Duplex",
        }
    ]


    newPatternBtn.addEventListener('click', function(){
        let random = Math.floor(Math.random()*patternArray.length);   //generates a random number from 0-1, multiplies by the length of array, then floors to get an integer
        // Populate container with correspoding description/gif/giftalt/figcaption, from a random position of the array
        patternDescription.innerText = patternArray[random].description;
        patternGIF.src = patternArray[random].gif;
        patternGIF.alt = patternArray[random].gifAlt;
        patternFigcaption.innerText = patternArray[random].figcaption;
    })    

    // Header -  Changing Font Size
    let smallA = document.querySelector('.small-a');
    let mediumA = document.querySelector(".medium-a");
    let bigA = document.querySelector(".big-a");
    let body = document.querySelector("body");

    smallA.addEventListener("click",function(){
        body.style.fontSize = ".8em";       //Slightly Smaller
    })

    mediumA.addEventListener("click",function(){
        body.style.fontSize = "1em";        // Default Size
    })

    bigA.addEventListener("click",function(){
        body.style.fontSize = "1.2em";      //Slightly Larger
    })
}

// props.html JS
if(window.location.pathname == '/props.html'){

    // Adapted Code: DarkCode, 'Eyes follow mouse cursor using HTML CSS & Javascript', 2019. [Online]. Available: https://youtu.be/AixAmLWzXYg. [Accessed: 4- Sep- 2022]
    // props.html - Tracking Mouse movement
    let propsSection = document.querySelector(".props-section");
    let eyes = document.querySelectorAll(".eyeball");

    document.addEventListener("mousemove",function(event){
        let mouseX = event.clientX * 100 / window.innerWidth + "%";       // clientX/Y = horizontal/vertical coordinate of mouse  
        let mouseY = event.clientY * 100 / window.innerHeight + "%";      // innerWidth/Height of window
        for(let i=0; i<2; i++){
            eyes[i].style.left = mouseX;
            eyes[i].style.top = mouseY;
        }
    })

    // Adapted Code: Web Dev Simplified, 'JavaScript Shopping Cart Tutorial for Beginners', 2019. [Online]. Available: https://youtu.be/YeFzkC2awTM. [Accessed: 4- Sep- 2022] 
    // Implementing the store/cart of props.html 

    //Remove row when 'remove' button is clicked:
    let removeButton = document.getElementsByClassName('btn-remove');        //Get all elements with class 'btn-remove'
    for(let i = 0; i < removeButton.length; i++){
        let button = removeButton[i];
        button.addEventListener('click', removeCartItem);            // Checks if button is clicked, and then calls the 'removeCartItem' function
    }

    // Find the quantity of the input element and change accordingly
    let quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for(let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);       // Checks to see if any value of the input element changes, then calls the function
    }

    // 'Add to Cart' Button
    let addToCartButtons = document.getElementsByClassName('shop-item-button');
    for(let i = 0; i< addToCartButtons.length; i++){
        let button = addToCartButtons[i];
        button.addEventListener('click',addToCartClicked);       //If clicked, calls 'addToCartClicked'     
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseClicked);    //If 'purchase' button is clicked, call 'purchaseClicked' function
        

    //purchaseClicked function
    function purchaseClicked(){
        alert('Thank you for your purchase!');           // alert the user
        let cartItems = document.getElementsByClassName('cart-items')[0];
        while(cartItems.hasChildNodes){          // checks if CartItems element has any children (if there's anything in the cart)
            cartItems.removeChild(cartItems.firstChild);     //keeps removing child (rows) of cartItems until the cart is empty
            updateCartTotal();
        }
    }

    // addToCartClicked function
    function addToCartClicked(event){
        let button = event.target;
        let shopItem = button.parentElement.parentElement;
        let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
        let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
        let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
        addItemToCart(title,price,imageSrc);
        updateCartTotal();
    }

    function addItemToCart(title,price,imageSrc){
        let cartRow = document.createElement('div');          //Create a div element
        cartRow.classList.add('cart-row');
        let cartItems = document.getElementsByClassName('cart-items')[0];
        let cartItemNames = cartItems.getElementsByClassName('cart-item-title');
        for(let i = 0; i < cartItemNames.length; i++){
            if(cartItemNames[i].innerText == title){                    // Check to see if item user is trying to add to cart is not already in the cart
                alert('This item is already in your cart.');             // Alert the user
                return;                              // Don't add item to cart
            }
        }

        let cartRowContents = `    
        <div class="cart-item cart-column">            
            <img class="cart-item-image" src="${imageSrc}" width="50" height="50" alt="Cart Item">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-remove" role="button">Remove</button>
        </div>
        `                                                     // Using back quotes to spread over multiple lines and not interfere with quotation marks, using ${} to use parameters 
        cartRow.innerHTML = cartRowContents;
        cartItems.appendChild(cartRow);                  // Appends the selected cartRow to the end of the Cart
        cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem);
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged);
    }

    //quantityChanged function
    function quantityChanged(event){
        let input = event.target; 
        if(isNaN(input.value) || input.value <= 0){       //checks to see if input is not a number or less than or equal to 0
            input.value = 1;                             // Make 1 the lowest possible value
        }
        updateCartTotal();
    }

    // RemoveCartItem function
    function removeCartItem(event){
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();        // Removes entire row (parent element of parent element of button) from cart
        updateCartTotal();                           // Calls the updateCartTotal function
    }

    //Check and update the 'Total' amount to equal the total amount currently in cart: 
    function updateCartTotal(){
        let cartItemContainer = document.getElementsByClassName('cart-items')[0];       // Get first element with class 'cart-items'
        let cartRows = cartItemContainer.getElementsByClassName('cart-row');
        let total = 0;
        for(let i = 0; i < cartRows.length; i++){
            let cartRow = cartRows[i];
            let priceElement = cartRow.getElementsByClassName('cart-price')[0];            // Get priceElement
            let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];  //Get quantityElement
            let price = parseFloat(priceElement.innerHTML.replace('£',''));                 // Find the actual text of the priceElement, get rid of the Pounds Sign, and convert from string to Float
            let quantity = quantityElement.value; 
            total += (price*quantity);                               // Calculate the price of each item (quantity*price) and them together to get the total price
        }
        total = Math.round(total*100) /100               //Round total to 2 decimals
        document.getElementsByClassName('cart-total-price')[0].innerText = '£' + total;     //Update the 'total' element with the correct amount
    }

    // Header -  Changing Font Size
    let smallA = document.querySelector('.small-a');
    let mediumA = document.querySelector(".medium-a");
    let bigA = document.querySelector(".big-a");
    let body = document.querySelector("body");

    smallA.addEventListener("click",function(){
        body.style.fontSize = ".8em";       //Slightly Smaller
    })

    mediumA.addEventListener("click",function(){
        body.style.fontSize = "1em";        // Default Size
    })

    bigA.addEventListener("click",function(){
        body.style.fontSize = "1.2em";      //Slightly Larger
    })
}