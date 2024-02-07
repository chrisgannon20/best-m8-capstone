// ==== SET GLOBAL VARIABLES ====
// CATEGORY.html VARIABLES
const max_tokens = 60; // maximum token pool
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

piggyBal.text(max_tokens); // set piggy bank to max pool size

// VOTING.html VARIABLES
const cntr_a = $("#cntr-a");
const cntr_b = $("#cntr-b");
const cntr_c = $("#cntr-c");
const cntr_d = $("#cntr-d");
const cntr_e = $("#cntr-e");
const cntr_f = $("#cntr-f");
const cntr_g = $("#cntr-g");
const cntr_h = $("#cntr-h");
const cntr_i = $("#cntr-i");

const prompt_a = $("#prompt-a");
const prompt_b = $("#prompt-b");
const prompt_c = $("#prompt-c");
const prompt_d = $("#prompt-d");
const prompt_e = $("#prompt-e");
const prompt_f = $("#prompt-f");
const prompt_g = $("#prompt-g");
const prompt_h = $("#prompt-h");
const prompt_i = $("#prompt-i");

const voting_counterArray = [
	cntr_a,
	cntr_b,
	cntr_c,
	cntr_d,
	cntr_e,
	cntr_f,
	cntr_g,
	cntr_h,
	cntr_i,
];

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
	SortCounters(category_counterArray);

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

// ==== ACTION ITEMS ====
prompt_a.mousedown(function (e) {
	let tokens_spent = parseInt(cntr_a.text());

	TokenTransaction(e, cntr_a, tokens_spent);
	SortCounters(voting_counterArray);

	BounceMe(cntr_a);
});

prompt_b.mousedown(function (e) {
	let tokens_spent = parseInt(cntr_b.text());

	TokenTransaction(e, cntr_b, tokens_spent);
	SortCounters(voting_counterArray);

	BounceMe(cntr_b);
});

prompt_c.mousedown(function (e) {
	let tokens_spent = parseInt(cntr_c.text());

	TokenTransaction(e, cntr_c, tokens_spent);
	SortCounters(voting_counterArray);

	BounceMe(cntr_c);
});

prompt_d.mousedown(function (e) {
	let tokens_spent = parseInt(cntr_d.text());

	TokenTransaction(e, cntr_d, tokens_spent);
	SortCounters(voting_counterArray);

	BounceMe(cntr_d);
});

prompt_e.mousedown(function (e) {
	let tokens_spent = parseInt(cntr_e.text());

	TokenTransaction(e, cntr_e, tokens_spent);
	SortCounters(voting_counterArray);

	BounceMe(cntr_e);
});

prompt_f.mousedown(function (e) {
	let tokens_spent = parseInt(cntr_f.text());

	TokenTransaction(e, cntr_f, tokens_spent);
	SortCounters(voting_counterArray);

	BounceMe(cntr_f);
});

prompt_g.mousedown(function (e) {
	let tokens_spent = parseInt(cntr_g.text());

	TokenTransaction(e, cntr_g, tokens_spent);
	SortCounters(voting_counterArray);

	BounceMe(cntr_g);
});

prompt_h.mousedown(function (e) {
	let tokens_spent = parseInt(cntr_h.text());

	TokenTransaction(e, cntr_h, tokens_spent);
	SortCounters(voting_counterArray);

	BounceMe(cntr_h);
});

prompt_i.mousedown(function (e) {
	let tokens_spent = parseInt(cntr_i.text());

	TokenTransaction(e, cntr_i, tokens_spent);
	SortCounters(voting_counterArray);

	BounceMe(cntr_i);
});

prompt_a.mouseup(function (e) {
	RemoveBounce(cntr_a);
});
prompt_b.mouseup(function (e) {
	RemoveBounce(cntr_b);
});
prompt_c.mouseup(function (e) {
	RemoveBounce(cntr_c);
});
prompt_d.mouseup(function (e) {
	RemoveBounce(cntr_d);
});
prompt_e.mouseup(function (e) {
	RemoveBounce(cntr_e);
});
prompt_f.mouseup(function (e) {
	RemoveBounce(cntr_f);
});
prompt_g.mouseup(function (e) {
	RemoveBounce(cntr_g);
});
prompt_h.mouseup(function (e) {
	RemoveBounce(cntr_h);
});
prompt_i.mouseup(function (e) {
	RemoveBounce(cntr_i);
});

$(document).ready(function () {});

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

	// iterates through and decides which has the most tokens and which the least
	// counters w/ most turn green, counters w/ anything less turn red
	counterArray.forEach((e) => {
		// resets the colors of the existing counters
		e.removeClass("cntr--is-most");
		e.removeClass("cntr--is-least");
		e.removeClass("bg-white");

		if (e.text() == 0) {
			e.addClass("bg-white"); // colors counter white
		} else if (e.text() == tokenArray[tokenArray.length - 1]) {
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
