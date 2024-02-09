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

const submitBtn = $("#submit-button");

piggyBal.text(max_tokens); // set piggy bank to max pool size

// VOTING.html VARIABLES
const cntr_1 = $("#cntr-1");
const cntr_2 = $("#cntr-2");
const cntr_3 = $("#cntr-3");
const cntr_4 = $("#cntr-4");
const cntr_5 = $("#cntr-5");
const cntr_6 = $("#cntr-6");
const cntr_7 = $("#cntr-7");
const cntr_8 = $("#cntr-8");
const cntr_9 = $("#cntr-9");

const prompt_1 = $("#prompt-1");
const prompt_2 = $("#prompt-2");
const prompt_3 = $("#prompt-3");
const prompt_4 = $("#prompt-4");
const prompt_5 = $("#prompt-5");
const prompt_6 = $("#prompt-6");
const prompt_7 = $("#prompt-7");
const prompt_8 = $("#prompt-8");
const prompt_9 = $("#prompt-9");

const voting_counterArray = [
	cntr_1,
	cntr_2,
	cntr_3,
	cntr_4,
	cntr_5,
	cntr_6,
	cntr_7,
	cntr_8,
	cntr_9,
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

	ShowSubmit();
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
prompt_1.mousedown(function (e) {
	let tokens_spent = parseInt(cntr_1.text());

	TokenTransaction(e, cntr_1, tokens_spent);
	SortCounters(voting_counterArray);

	BounceMe(cntr_1);
});

prompt_2.mousedown(function (e) {
	let tokens_spent = parseInt(cntr_2.text());

	TokenTransaction(e, cntr_2, tokens_spent);
	SortCounters(voting_counterArray);

	BounceMe(cntr_2);
});

prompt_3.mousedown(function (e) {
	let tokens_spent = parseInt(cntr_3.text());

	TokenTransaction(e, cntr_3, tokens_spent);
	SortCounters(voting_counterArray);

	BounceMe(cntr_3);
});

prompt_4.mousedown(function (e) {
	let tokens_spent = parseInt(cntr_4.text());

	TokenTransaction(e, cntr_4, tokens_spent);
	SortCounters(voting_counterArray);

	BounceMe(cntr_4);
});

prompt_5.mousedown(function (e) {
	let tokens_spent = parseInt(cntr_5.text());

	TokenTransaction(e, cntr_5, tokens_spent);
	SortCounters(voting_counterArray);

	BounceMe(cntr_5);
});

prompt_6.mousedown(function (e) {
	let tokens_spent = parseInt(cntr_6.text());

	TokenTransaction(e, cntr_6, tokens_spent);
	SortCounters(voting_counterArray);

	BounceMe(cntr_6);
});

prompt_7.mousedown(function (e) {
	let tokens_spent = parseInt(cntr_7.text());

	TokenTransaction(e, cntr_7, tokens_spent);
	SortCounters(voting_counterArray);

	BounceMe(cntr_7);
});

prompt_8.mousedown(function (e) {
	let tokens_spent = parseInt(cntr_8.text());

	TokenTransaction(e, cntr_8, tokens_spent);
	SortCounters(voting_counterArray);

	BounceMe(cntr_8);
});

prompt_9.mousedown(function (e) {
	let tokens_spent = parseInt(cntr_9.text());

	TokenTransaction(e, cntr_9, tokens_spent);
	SortCounters(voting_counterArray);

	BounceMe(cntr_9);
});

prompt_1.mouseup(function (e) {
	RemoveBounce(cntr_1);
});
prompt_2.mouseup(function (e) {
	RemoveBounce(cntr_2);
});
prompt_3.mouseup(function (e) {
	RemoveBounce(cntr_3);
});
prompt_4.mouseup(function (e) {
	RemoveBounce(cntr_4);
});
prompt_5.mouseup(function (e) {
	RemoveBounce(cntr_5);
});
prompt_6.mouseup(function (e) {
	RemoveBounce(cntr_6);
});
prompt_7.mouseup(function (e) {
	RemoveBounce(cntr_7);
});
prompt_8.mouseup(function (e) {
	RemoveBounce(cntr_8);
});
prompt_9.mouseup(function (e) {
	RemoveBounce(cntr_9);
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

function ShowSubmit() {
	if (piggyBal.text() == 0) {
		submitBtn.removeClass("hidden");
	} else {
		submitBtn.addClass("hidden");
	}
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
