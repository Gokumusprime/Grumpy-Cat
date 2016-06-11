// grumpy-cat-rpg.js *** JS for the Grumpy Cat text game page.

var health = 100;
var grhealth = 100;
var potionCount = 3;
var magicEnhancementCount = 3;
var magicShieldCount = 3;
var magicEnhancementReset = 0;
var magicShieldReset = 0;
var magicDamage = 0;
var magicDefense = 0;

// Grumpy Cat Attacked
function damageroll() {
	var bigDecimal = Math.random();
	var improvedNum = (bigDecimal * 24) + 1;
	var diceRoll = Math.floor(improvedNum);
	if (diceRoll <= magicDefense) {
		diceRoll = 0;
	}
	else {
		diceRoll = diceRoll - magicDefense;
	}
	var currentHealth = health - diceRoll;
	health = currentHealth;
	if (health <= 0) {
	document.getElementById("percentage").style.width = "0px";
	document.getElementById("damage").innerHTML = "You are dead foo!";
	document.getElementById("textpercentage").innerHTML = "0%";
	document.getElementById("enemydamage").innerHTML = "";
	}
	else {
	document.getElementById("percentage").style.width = (health * 2) + "px";
	document.getElementById("damage").innerHTML = "You take " + diceRoll + " Damage!  You now have " + currentHealth + " health left.";
	document.getElementById("textpercentage").innerHTML = health + "%";
	enemydamageroll();
	}
}

// Giant Rat Attacked
function enemydamageroll() {
	var grbigDecimal = Math.random();
	var grimprovedNum = (grbigDecimal * 16) + 1;
	var grdiceRoll = Math.floor(grimprovedNum);
	grdiceRoll = grdiceRoll + magicDamage;
	var grcurrentHealth = grhealth - grdiceRoll;
	grhealth = grcurrentHealth;
	if (grhealth <= 0) {
	document.getElementById("ratpercentage").style.width = "0px";
	document.getElementById("enemydamage").innerHTML = "The Giant Rat is dead!  It's supper time!";
	document.getElementById("rattextpercentage").innerHTML = "0%";
	magicEnhancementReseter();
	magicShieldReseter();
	}
	else {
	document.getElementById("ratpercentage").style.width = (grhealth * 2) + "px";
	document.getElementById("enemydamage").innerHTML = "The Giant Rat takes " + grdiceRoll + " Damage!  He now has " + grcurrentHealth + " health left.";
	document.getElementById("rattextpercentage").innerHTML = grhealth + "%";
	magicEnhancementReseter();
	magicShieldReseter();
	}
}
	
// Potion
function potion() {
	if (potionCount > 0) {
		if ((health >= 75) && (health < 100)){
		health = 100;
		document.getElementById("percentage").style.width = "200px";
		document.getElementById("damage").innerHTML = "You are at full health!";
		document.getElementById("textpercentage").innerHTML = "100%";
		document.getElementById("enemydamage").innerHTML = "";
		potionCount = potionCount - 1;
		document.getElementById("potionCount").innerHTML = potionCount;
		}
		else if (health < 75) {
		health = health + 25;
		document.getElementById("percentage").style.width = (health * 2) + "px";
		document.getElementById("damage").innerHTML = "You gained 25 health!";
		document.getElementById("textpercentage").innerHTML = health + "%";
		document.getElementById("enemydamage").innerHTML = "";
		potionCount = potionCount - 1;
		document.getElementById("potionCount").innerHTML = potionCount;
		}
		else {
		document.getElementById("damage").innerHTML = "Don't waste a potion.  You're at full health!";
		}
	}
	else {
		document.getElementById("damage").innerHTML = "You ran out of potions!  You're totally screwed!";	
	}
}

// Magic Enhancement
function magicEnhancement() {
	if (magicEnhancementCount !== 0) {
		magicDamage = magicDamage + 10;
		magicEnhancementReset = magicEnhancementReset + 2;
		magicEnhancementCount = magicEnhancementCount - 1;
		document.getElementById("magicEnhancementCount").innerHTML = magicEnhancementCount;
		document.getElementById("damage").innerHTML = "You gained a +10 damage for 2 attacks!";
		document.getElementById("enemydamage").innerHTML = "";
	}
	else {
		document.getElementById("damage").innerHTML = "You ran out of magic enhancements!  You're totally screwed!";
		document.getElementById("enemydamage").innerHTML = "";	
	}
}

// Magic Shield
function magicShield() {
	if (magicShieldCount !== 0) {
		magicDefense = magicDefense + 10;
		magicShieldReset = magicShieldReset + 2;
		magicShieldCount = magicShieldCount - 1;
		document.getElementById("magicShieldCount").innerHTML = magicShieldCount;
		document.getElementById("damage").innerHTML = "You gained a +10 defense for 2 attacks!";
		document.getElementById("enemydamage").innerHTML = "";
	}
	else {
		document.getElementById("damage").innerHTML = "You ran out of magic enhancements!  You're totally screwed!";
		document.getElementById("enemydamage").innerHTML = "";	
	}
}

// Magic Enhancement Reset
function magicEnhancementReseter() {
	if ((magicEnhancementReset !== 0) && (magicEnhancementReset !== 1)) {
		magicEnhancementReset = magicEnhancementReset - 1;
	}
	else if (magicEnhancementReset === 1){
		magicEnhancementReset = magicEnhancementReset - 1;
		magicDamage = 0;
	}
	else {
		magicEnhancementReset = 0;
		magicDamage = 0;
	}
}

// Magic Shield Reset
function magicShieldReseter() {
	if ((magicShieldReset !== 0) && (magicShieldReset !== 1)) {
		magicShieldReset = magicShieldReset - 1;
	}
	else if (magicShieldReset === 1){
		magicShieldReset = magicShieldReset - 1;
		magicDefense = 0;
	}
	else {
		magicShieldReset = 0;
		magicDefense = 0;
	}
}