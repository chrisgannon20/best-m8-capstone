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

let piggy = $("#piggy-bank-balance"); // global variable to store piggy bank element

piggy.text(max_tokens); // set piggy bank to max pool size

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
});

// ==== ARCADE B ====
// checks that the piggy-bank has been clicked and does something
arcade_b.mousedown(function (e) {
	let tokens_spent = parseInt(counter_b.text());

	TokenTransaction(e, counter_b, tokens_spent);
});

// ==== ARCADE C ====
// checks that the piggy-bank has been clicked and does something
arcade_c.mousedown(function (e) {
	let tokens_spent = parseInt(counter_c.text());

	TokenTransaction(e, counter_c, tokens_spent);
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
				let leftovers = parseInt(piggy.text());
				counter.text(spent + leftovers);
				// reset values to zero since everything is expended
				piggy.text(0);
				tokens_pool = 0;
				spent = 0;
				break;
			} else {
				counter.text(spent + token_value);
				tokens_pool -= token_value;
				piggy.text(tokens_pool);
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
				piggy.text(tokens_pool);
				counter.text(0);
				break;
			} else {
				counter.text(spent - token_value);
				tokens_pool += token_value;
				piggy.text(tokens_pool);
				break;
			}

		default:
			break;
	}
}
