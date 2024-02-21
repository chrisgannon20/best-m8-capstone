// ==== SET GLOBAL VARIABLES ====
// CATEGORY.html VARIABLES
const max_tokens = 100; // maximum token pool
let tokens_pool = max_tokens; // total tokens left in pool

let token_value = 1; // default token value

// global variables to store *token_value* selection elements
const token1 = $("#token-value-1");
const token5 = $("#token-value-5");
const token10 = $("#token-value-10");

// global variables to store arcade machine (and their counters) elements
const arcade_a = $("#arcade-a");
const arcade_b = $("#arcade-b");
const arcade_c = $("#arcade-c");
const counter_a = $("#counter-a");
const counter_b = $("#counter-b");
const counter_c = $("#counter-c");

const category_counterArray = [counter_a, counter_b, counter_c];

const piggyBal = $("#piggy-bank-balance"); // global variable to store piggy bank balance element
const piggy = $("#piggy-bank"); // global variable to store piggy bank image element

const submitBtn = $("#submit-button");

piggyBal.text(max_tokens); // set piggy bank to max pool size

// ==== ARCADE A ====
// checks that the piggy-bank has been clicked and does something
arcade_a.mousedown(function (e) {
	SelectMe(arcade_a);

	ShowSubmit();
});

// ==== ARCADE B ====
// checks that the piggy-bank has been clicked and does something
arcade_b.mousedown(function (e) {
	let tokens_spent = parseInt(counter_b.text());

	TokenTransaction(e, counter_b, tokens_spent);
	SortCounters(category_counterArray);

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
	SortCounters(category_counterArray);

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

function SortCounters(counterArray) {
	let tokenArray = [];

	counterArray.forEach((e) => {
		tokenArray.push(e.text());
	});

	// add token count to an array and sort smallest to largest
	tokenArray = tokenArray.sort((a, b) => a - b);
	console.log(tokenArray);

	// iterates through and decides which has the most tokens and which the least
	// counters w/ most turn green, counters w/ anything less turn red
	counterArray.forEach((e) => {
		// resets the colors of the existing counters
		e.removeClass("cntr--is-most");
		e.removeClass("cntr--is-least");

		if (e.text() == 0) {
			e.addClass("cntr--is-least");
		} else if (e.text() == tokenArray[tokenArray.length - 1]) {
			e.addClass("cntr--is-most"); // colors counter green
		} else {
			e.addClass("cntr--is-least"); // colors counter red
		}
	});
}

function ShowSubmit() {
	if (piggyBal.text() == 0) {
		submitBtn.removeClass("hidden");
	} else {
		submitBtn.addClass("hidden");
	}
}

function SelectMe(arcade) {
	arcade-a.css('box-shadow', '#313350 0 0 10px');
}
