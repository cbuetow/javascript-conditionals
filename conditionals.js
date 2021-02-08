$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickForm").submit(countClick);
    $("#ageForm").submit(checkAge);
    $("#taxForm").submit(calcSalesTax);
    $("#catForm").submit(recommendFood);
    $("#cardForm").submit(drawCard);

    let clickCounter = 0;

    function countClick(event) {
	    event.preventDefault();

		// Increment a variable that tracks the
		// number of button clicks
        clickCounter++;

		// Print the current number of clicks to the
		// <p> with ID "clickCountOutput"
        $("p#clickCountOutput").text(clickCounter);

		// When the count gets to 10, reset it to 0
        if (clickCounter === 10)
        {
            clickCounter = 0;
        }


	}


    function checkAge(event) {
        event.preventDefault();

        // Get the user's birth year from the text
        // box with ID of "birthYear"
        let userYear = $("input#birthYear").val();

        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"
        let age = 2021 - userYear;
        if (age < 18)
        {
            $("p#birthYearOutput").text("Child")
        }
        // If they are 18 or over, print "Adult" instead
            else $("p#birthYearOutput").text("Adult");

    }

    function calcSalesTax(event) {
        event.preventDefault();

        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        let purchaseAmount = parseFloat($("input#purchaseAmount").val());

        // Get the state from the text box with ID "state"
        let state = $("input#state").val();

        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%
        let WI = 0.05;
        let IL = 0.08;
        let MN = 0.075;
        let MI = 0.055;

        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"
        let wiTax = purchaseAmount * WI;
        let ilTax = purchaseAmount * IL;
        let mnTax = purchaseAmount * MN;
        let miTax = purchaseAmount * MI;

        if (state === "WI")
        {
            $("p#salesTaxOutput").text("$" + wiTax.toFixed(2));
        }
        else if (state === "IL")
        {
            $("p#salesTaxOutput").text("$" + ilTax.toFixed(2));
        }
        else if (state === "MN")
        {
            $("p#salesTaxOutput").text("$" + mnTax.toFixed(2));
        }
        else if (state === "MI")
        {
            $("p#salesTaxOutput").text("$" + miTax.toFixed(2));
        }

        // If the user enters a state not listed above,
        // print "Error" instead
        else (alert("Error"));


    }

    function recommendFood(event) {
        event.preventDefault();

        // Get the cat's age from the text box with
        // ID of "catAge"
        let catAge = parseInt($("input#catAge").val());

        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"
        if (catAge < 2)
        {
            $("p#catAgeOutput").text("Buy kitten chow");
        }
        else if (catAge < 11)
        {
            $("p#catAgeOutput").text("Buy adult chow");
        }
        else
        {
            $("p#catAgeOutput").text("Buy senior chow");
        }

        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"


    }

    function drawCard(event) {
        event.preventDefault();

        // Generate a random card face value (1 - 13)
        let faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        let suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        let description = "";

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"
        if (faceValue === 1)
        {
            description = "Ace";
        }
        else if (faceValue === 11)
        {
            description = "Jack";
        }
        else if (faceValue === 12)
        {
            description = "Queen";
        }
        else if (faceValue === 13)
        {
            description = "King";
        }
        else (description = faceValue);

        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"
        if (suit === 1)
        {
            description += " of Clubs"
        }
        if (suit === 2)
        {
            description += " of Spades"
        }
        if (suit === 3)
        {
            description += " of Hearts"
        }
        if (suit === 4)
        {
            description += " of Diamonds"
        }

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"
        $("p#drawCardOutput").text(description);


    }

});