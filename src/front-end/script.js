// ==== SET GLOBAL VARIABLES ====
const max_tokens = 60; // maximum token pool
let tokens_pool = max_tokens; // total tokens left in pool

let token_value = 1; // default token value

// global variables to store *token_value* selection elements
let token1 = $("#token-value-1");
let token5 = $("#token-value-5");
let token10 = $("#token-value-10");

// global variables to store arcade machine (and their counters) elements
let arcade_a = $("#arcade-a");
let arcade_b = $("#arcade-b");
let arcade_c = $("#arcade-c");
let counter_a = $("#counter-a");
let counter_b = $("#counter-b");
let counter_c = $("#counter-c");

let piggyBal = $("#piggy-bank-balance"); // global variable to store piggy bank balance element
let piggy = $("#piggy-bank"); // global variable to store piggy bank image element

piggyBal.text(max_tokens); // set piggy bank to max pool size

// ==== SET (CHOOSE) TOKEN VALUE ===

token1.click(function (e) {
	e.preventDefault();
	token_value = 1;

	$(".tkn--is-selected").removeClass("tkn--is-selected");
	token1.addClass("tkn--is-selected");
});

token5.click(function (e) {
	e.preventDefault();
	token_value = 5;

	$(".tkn--is-selected").removeClass("tkn--is-selected");
	token5.addClass("tkn--is-selected");
});

token10.click(function (e) {
	e.preventDefault();
	token_value = 10;

	$(".tkn--is-selected").removeClass("tkn--is-selected");
	token10.addClass("tkn--is-selected");
});

// ==== ARCADE A ====
// checks that the piggy-bank has been clicked and does something
arcade_a.mousedown(function (e) {
	let tokens_spent = parseInt(counter_a.text());

	TokenTransaction(e, counter_a, tokens_spent);
	SortCounters();

	JiggleMe(piggy);
	BounceMe(counter_a);
});

arcade_a.mouseup(function (e) {
	RemoveJiggle(piggy);
	RemoveBounce(counter_a);
});

// ==== ARCADE B ====
// checks that the piggy-bank has been clicked and does something
arcade_b.mousedown(function (e) {
	let tokens_spent = parseInt(counter_b.text());

	TokenTransaction(e, counter_b, tokens_spent);
	SortCounters();

	JiggleMe(piggy);
	BounceMe(counter_b);
});

arcade_b.mouseup(function (e) {
	RemoveJiggle(piggy);
	RemoveBounce(counter_b);
});
// ==== ARCADE C ====
// checks that the piggy-bank has been clicked and does something
arcade_c.mousedown(function (e) {
	let tokens_spent = parseInt(counter_c.text());

	TokenTransaction(e, counter_c, tokens_spent);
	SortCounters();

	JiggleMe(piggy);
	BounceMe(counter_c);
});

arcade_c.mouseup(function (e) {
	RemoveJiggle(piggy);
	RemoveBounce(counter_c);
});
// ==== Transaction Function ====
// Function to determine what kind of click triggered the event and add or deduct accordingly

function TokenTransaction(event, counter, spent) {
	console.log(`spent: ${spent}`);
	console.log(`pool: ${tokens_pool}`);

	switch (event.which) {
		// increments count by *token_value* and updates the text of the element (ie. 30 -> 31, 35, or 40)
		case 1: // LEFT CLICK
			// checks two things:
			// 1. that we aren't deducting more than we have available in our bank
			// 2. Even if we have a *token_value* selected that is greater than our bank, it will only deduct what is left
			if (token_value > tokens_pool) {
				let leftovers = parseInt(piggyBal.text());
				counter.text(spent + leftovers);
				// reset values to zero since everything is expended
				piggyBal.text(0);
				tokens_pool = 0;
				spent = 0;
				break;
			} else {
				counter.text(spent + token_value);
				tokens_pool -= token_value;
				piggyBal.text(tokens_pool);
				break;
			}

		case 2: // MIDDLE CLICK
			break;

		// decrements count by *token_value* and updates the text of the element (ie. 30 -> 29, 25, or 20)
		case 3: // RIGHT CLICK
			// checks that there are not too many tokens in the piggy bank to add back the *token_value*
			if (spent < token_value) {
				let leftovers = parseInt(counter.text());
				tokens_pool += leftovers;
				piggyBal.text(tokens_pool);
				counter.text(0);
				break;
			} else {
				counter.text(spent - token_value);
				tokens_pool += token_value;
				piggyBal.text(tokens_pool);
				break;
			}

		default:
			break;
	}
}

// ==== Sort Counters Function ====
// Sorts counters least to greatest and colors them accordingly

function SortCounters() {
	// grabs integer (token count) of each counter
	cntr_a = parseInt(counter_a.text());
	cntr_b = parseInt(counter_b.text());
	cntr_c = parseInt(counter_c.text());

	// add token count to an array and sort smallest to largest
	let tokenArray = [cntr_a, cntr_b, cntr_c];
	tokenArray = tokenArray.sort((a, b) => a - b);

	// create array of all three counter elements
	// iterates through and decides which has the most tokens and which the least
	// counters w/ most turn green, counters w/ anything less turn red
	let counterArray = [counter_a, counter_b, counter_c];
	counterArray.forEach((e) => {
		// resets the colors of the existing counters
		e.removeClass("cntr--is-most");
		e.removeClass("cntr--is-least");
		e.removeClass("bg-white");

		if (e.text() == 0) {
			e.addClass("bg-white"); // colors counter white
		} else if (e.text() == tokenArray[2]) {
			e.addClass("cntr--is-most"); // colors counter green
		} else {
			e.addClass("cntr--is-least"); // colors counter red
		}
	});
}

// applies jiggle class to element (jiggle animation)
function JiggleMe(element) {
	let value = GetRandomInt(0, 10);
	if (value % 2 == 0) {
		element.addClass("jiggleright");
	} else {
		element.addClass("jiggleleft");
	}
}

// resets jiggle animation
function RemoveJiggle(element) {
	element.removeClass(["jiggleleft", "jiggleright"]);
}

// for random animation direction
function GetRandomInt(min, max) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function BounceMe(element) {
	element.addClass("bounce");
}

function RemoveBounce(element) {
	element.removeClass("bounce");
}

// Login form submission
document.querySelector('#login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const passcode = document.querySelector('#passcode').value;

  fetch('/api/login', { // Ensure the URL is correct, consider using a full path if necessary
    method: 'POST',
    body: JSON.stringify({ passcode }),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(response => response.json())
  .then(data => {
    if (data.redirect) {
      // If login is successful and a redirect URL is provided
      window.location.href = data.redirect;
    } else {
      // Handle login failure, perhaps show an error message to the user
      alert("Login failed. Please check your passcode.");
    }
  }).catch(error => {
    console.error('Error:', error);
  });
});
