let id = null;
const elem = document.getElementById("animate"); 
let pos = 0;
setTimeout(supplyDrop, 1000*(120+Math.floor(Math.random() * 80+10)));

document.body.style.backgroundColor = "#505050";

var num = 0
var cps = 0
var m1x = 0
var m1y = 1
var m2x = 0
var m2y = 1
var m3x = 0
var m3y = 1
var m4x = 0
var m4y = 1
var m5x = 0
var m5y = 1
var m6x = 0
var m6y = 1
var cx = 0
var cy = 1
var cpsx = 0
var cpsy = 1

var click = 1
var clickers = 0
var cpss = 0

var miners1 = 0
var miners2 = 0
var miners3 = 0
var miners4 = 0
var miners5 = 0
var miners6 = 0


var miner1Cps = 0.1
var miner2Cps = 1
var miner3Cps = 8
var miner4Cps = 47
var miner5Cps = 260
var miner6Cps = 1400

var miner1Price = 15
var miner2Price = 100
var miner3Price = 1100
var miner4Price = 12000
var miner5Price = 130000
var miner6Price = 1400000

var miner1Upgrades = ["Miner1s are twice as efficient", 100, "Miner1s are twice as efficient", 500, "Miner1s are twice as efficient", 10000, "Miner1s are twice as efficient", 100000, "Miner1s are twice as efficient", 10000000, "", ""];
var miner2Upgrades = ["Miner2s are twice as efficient", 1000, "Miner2s are twice as efficient", 5000, "Miner2s are twice as efficient", 50000, "Miner2s are twice as efficient", 5000000, "Miner2s are twice as efficient", 500000000, "", ""];
var miner3Upgrades = ["Miner3s are twice as efficient", 11000, "Miner3s are twice as efficient", 55000, "Miner3s are twice as efficient", 550000, "Miner3s are twice as efficient", 55000000, "Miner3s are twice as efficient", 5500000000, "", ""];
var miner4Upgrades = ["Miner4s are twice as efficient", 120000, "Miner4s are twice as efficient", 600000, "Miner4s are twice as efficient", 6000000, "Miner4s are twice as efficient", 600000000, "Miner4s are twice as efficient", 60000000000, "", ""];
var miner5Upgrades = ["Miner5s are twice as efficient", 1300000, "Miner5s are twice as efficient", 6500000, "Miner5s are twice as efficient", 65000000, "Miner5s are twice as efficient", 6500000000, "Miner5s are twice as efficient", 650000000000, "", "",];
var miner6Upgrades = ["Miner6s are twice as efficient", 14000000, "Miner6s are twice as efficient", 70000000, "Miner6s are twice as efficient", 700000000, "Miner6s are twice as efficient", 70000000000, "Miner6s are twice as efficient", 7000000000000, "", ""];
var clickerUpgrades = ["Clicking gains +2% of your vps", 500, "Clicking gains +2% of your vps", 50000, "Clicking gains +2% of your vps", 5000000, "Clicking gains +2% of your vps", 500000000, "Clicking gains +2% of your vps", 50000000000, "Clicking gains +2% of your vps", 5000000000000, "", ""];
var cpsUpgrades  = ["VPS +5% <br />", 1000, "VPS +5% <br />", 10000, "VPS +5% <br />", 50000, "VPS +5% <br />", 100000, "VPS +5% <br />", 500000, "VPS +5% <br />", 1000000, "VPS +5% <br />", 5000000, "VPS +5% <br />", 10000000, "VPS +5% <br />", 50000000, "VPS +5% <br />", 50000000, "VPS +5% <br />", 50000000, "VPS +5% <br />", 50000000, "VPS +5% <br />", 50000000, "VPS +5% <br />", 100000000, "VPS +5% <br />", 100000000, "VPS +5% <br />", 100000000, "VPS +5% <br />", 100000000, "VPS +5% <br />", 100000000, "VPS +5% <br />", 500000000, "VPS +5% <br />", 500000000, "VPS +5% <br />", 1000000000, "VPS +5% <br />", 5000000000, "VPS +5% <br />", 10000000000, "VPS +5%", 50000000000, "", ""];

document.getElementById("miner1Upgrade").innerHTML = miner1Upgrades[m1x]+"<br />"+ "price - " + miner1Upgrades[m1y];
document.getElementById("miner2Upgrade").innerHTML = miner2Upgrades[m2x]+"<br />"+ "price - " + miner2Upgrades[m2y];
document.getElementById("miner3Upgrade").innerHTML = miner3Upgrades[m3x]+"<br />"+ "price - " + miner3Upgrades[m3y];
document.getElementById("miner4Upgrade").innerHTML = miner4Upgrades[m4x]+"<br />"+ "price - " + miner4Upgrades[m4y];
document.getElementById("miner5Upgrade").innerHTML = miner5Upgrades[m5x]+"<br />"+ "price - " + miner5Upgrades[m5y];
document.getElementById("miner6Upgrade").innerHTML = miner6Upgrades[m6x]+"<br />"+ "price - " + miner6Upgrades[m6y];

document.getElementById("clickerUpgrade").innerHTML = clickerUpgrades[cx]+"<br />"+ "price - " + clickerUpgrades[cy];
document.getElementById("CPSUpgrade").innerHTML = cpsUpgrades[cpsx]+"<br />"+ "price - " + cpsUpgrades[cpsy];


setText()

function hack() {
	if (prompt('whats the password') === "t3discool") {
		num = parseInt(prompt('how much'))
	}
}

function addClick() {
	num = num + click
}

function buyMiner1Upgrade() {
	if (num >= Math.ceil(miner1Upgrades[m1y].toString())) {
		num -= miner1Upgrades[m1y].toString()
		m1x += 2
		m1y += 2
		if (miner1Upgrades[m1x] == "") {
			document.getElementById("miner1Upgrade").remove();
		} else {
			document.getElementById("miner1Upgrade").innerHTML = miner1Upgrades[m1x]+"<br />"+ "price - " + miner1Upgrades[m1y];
		}
	}
}

function buyMiner2Upgrade() {
	if (num >= Math.ceil(miner2Upgrades[m2y].toString())) {
		num -= miner2Upgrades[m2y].toString()
		m2x += 2
		m2y += 2
		if (miner2Upgrades[m2x] == "") {
			document.getElementById("miner2Upgrade").remove();
		} else {
			document.getElementById("miner2Upgrade").innerHTML = miner2Upgrades[m2x]+"<br />"+ "price - " + miner2Upgrades[m2y];
		}
	}
}

function buyMiner3Upgrade() {
	if (num >= Math.ceil(miner3Upgrades[m3y].toString())) {
		num -= miner3Upgrades[m3y].toString()
		m3x += 2
		m3y += 2
		if (miner3Upgrades[m3x] == "") {
			document.getElementById("miner3Upgrade").remove();
		} else {
			document.getElementById("miner3Upgrade").innerHTML = miner3Upgrades[m3x]+"<br />"+ "price - " + miner3Upgrades[m3y];
		}
	}
}

function buyMiner4Upgrade() {
	if (num >= Math.ceil(miner4Upgrades[m4y].toString())) {
		num -= miner4Upgrades[m4y].toString()
		m4x += 2
		m4y += 2
		if (miner4Upgrades[m4x] == "") {
			document.getElementById("miner4Upgrade").remove();
		} else {
			document.getElementById("miner4Upgrade").innerHTML = miner4Upgrades[m4x]+"<br />"+ "price - " + miner4Upgrades[m4y];
		}
	}
}

function buyMiner5Upgrade() {
	if (num >= Math.ceil(miner5Upgrades[m5y].toString())) {
		num -= miner5Upgrades[m5y].toString()
		m5x += 2
		m5y += 2
		if (miner5Upgrades[m5x] == "") {
			document.getElementById("miner5Upgrade").remove();
		} else {
			document.getElementById("miner5Upgrade").innerHTML = miner5Upgrades[m5x]+"<br />"+ "price - " + miner5Upgrades[m5y];
		}
	}
}

function buyMiner6Upgrade() {
	if (num >= Math.ceil(miner6Upgrades[m6y].toString())) {
		num -= miner6Upgrades[m6y].toString()
		m6x += 2
		m6y += 2
		if (miner6Upgrades[m6x] == "") {
			document.getElementById("miner6Upgrade").remove();
		} else {
			document.getElementById("miner6Upgrade").innerHTML = miner6Upgrades[m6x]+"<br />"+ "price - " + miner6Upgrades[m6y];
		}
	}
}

function buyClickerUpgrade() {
	if (num >= Math.ceil(clickerUpgrades[cy].toString())) {
		num -= clickerUpgrades[cy].toString()
		clickers += 1
		cx += 2
		cy += 2
		if (clickerUpgrades[cx] == "") {
			document.getElementById("clickerUpgrade").remove();
		} else {
			document.getElementById("clickerUpgrade").innerHTML = clickerUpgrades[cx]+"<br />"+ "price - " + clickerUpgrades[cy];
		}
	}
}

function buyCPSUpgrade() {
	if (num >= Math.ceil(cpsUpgrades[cpsy].toString())) {
		num -= cpsUpgrades[cpsy].toString()
		cpss += 1
		cpsx += 2
		cpsy += 2
		if (cpsUpgrades[cpsx] == "") {
			document.getElementById("CPSUpgrade").remove();
		} else {
			document.getElementById("CPSUpgrade").innerHTML = cpsUpgrades[cpsx]+"<br />"+ "price - " + cpsUpgrades[cpsy];
		}
	}
}

function buyMiner1() {

	if (num >= Math.ceil(miner1Price)) {
		num -= Math.ceil(miner1Price)
		miners1 += 1
		miner1Price= 15 * (1.15**miners1)
		document.getElementById('miner1').style.backgroundColor = "green";
		document.getElementById('miner1').style.fontSize = 25;
		setTimeout(function(){
    		document.getElementById('miner1').style.backgroundColor = "#00B4F9";
			},200);
		setTimeout(function(){
    		document.getElementById('miner1').style.fontSize = 25;
			},50);
	}
}

function buyMiner2() {

	if (num >= Math.ceil(miner2Price)) {
		num -= Math.ceil(miner2Price)
		miners2 += 1
		miner2Price= 100 * (1.15**miners2)
		document.getElementById('miner2').style.backgroundColor = "green";
		document.getElementById('miner2').style.fontSize = 25;
		setTimeout(function(){
    		document.getElementById('miner2').style.backgroundColor = "#00B4F9";
			},200);
		setTimeout(function(){
    		document.getElementById('miner2').style.fontSize = 25;
			},50);
	}
}

function buyMiner3() {

	if (num >= Math.ceil(miner3Price)) {
		num -= Math.ceil(miner3Price)
		miners3 += 1
		miner3Price= 1100 * (1.15**miners3)
		document.getElementById('miner3').style.backgroundColor = "green";
		document.getElementById('miner3').style.fontSize = 25;
		setTimeout(function(){
    		document.getElementById('miner3').style.backgroundColor = "#00B4F9";
			},200);
		setTimeout(function(){
    		document.getElementById('miner3').style.fontSize = 25;
			},50);
	}
}

function buyMiner4() {

	if (num >= Math.ceil(miner4Price)) {
		num -= Math.ceil(miner4Price)
		miners4 += 1
		miner4Price= 12000 * (1.15**miners4)
		document.getElementById('miner4').style.backgroundColor = "green";
		document.getElementById('miner4').style.fontSize = 25;
		setTimeout(function(){
    		document.getElementById('miner4').style.backgroundColor = "#00B4F9";
			},200);
		setTimeout(function(){
    		document.getElementById('miner4').style.fontSize = 25;
			},50);
	}
}

function buyMiner5() {

	if (num >= Math.ceil(miner5Price)) {
		num -= Math.ceil(miner5Price)
		miners5 += 1
		miner5Price= 130000 * (1.15**miners5)
		document.getElementById('miner5').style.backgroundColor = "green";
		document.getElementById('miner5').style.fontSize = 25;
		setTimeout(function(){
    		document.getElementById('miner5').style.backgroundColor = "#00B4F9";
			},200);
		setTimeout(function(){
    		document.getElementById('miner5').style.fontSize = 25;
			},50);
	}
}

function buyMiner6() {

	if (num >= Math.ceil(miner6Price)) {
		num -= Math.ceil(miner6Price)
		miners6 += 1
		miner6Price= 1400000 * (1.15**miners6)
		document.getElementById('miner6').style.backgroundColor = "green";
		document.getElementById('miner6').style.fontSize = 25;
		setTimeout(function(){
    		document.getElementById('miner6').style.backgroundColor = "#00B4F9";
			},200);
		setTimeout(function(){
    		document.getElementById('miner6').style.fontSize = 25;
			},50);
	}
}


function setText() {
	if (m1x > 1) {
		miner1Cps = 0.1*m1x
	}
	if (m2x > 1) {
		miner2Cps = 1*m2x
	}
	if (m3x > 1) {
		miner3Cps = 8*m3x
	}
	if (m4x > 1) {
		miner4Cps = 47*m4x
	}
	if (m5x > 1) {
		miner5Cps = 260*m5x
	}
	if (m6x > 1) {
		miner6Cps = 1400*m6x
	}

	cps = (miners1*miner1Cps + miners2*miner2Cps + miners3*miner3Cps + miners4*miner4Cps + miners5*miner5Cps + miners6*miner6Cps)
	cps *= (1+(cpss*0.05))
	if (clickers > 0) {
		click = 1 + cps*(0.02*clickers)
	}
	num += cps/50
	document.getElementById("numBox").innerHTML = Math.ceil(num) + " V-Bucks";
	document.getElementById("miner1").innerHTML = "Jonesy - "+(miners1)+"<br />"+ "price - " + Math.ceil(miner1Price);
	document.getElementById("miner2").innerHTML = "Peely - "+(miners2)+"<br />"+ "price - " + Math.ceil(miner2Price);
	document.getElementById("miner3").innerHTML = "Fishstick - "+(miners3)+"<br />"+ "price - " + Math.ceil(miner3Price);
	document.getElementById("miner4").innerHTML = "Reaper - "+(miners4)+"<br />"+ "price - " + Math.ceil(miner4Price);
	document.getElementById("miner5").innerHTML = "Black Knight - "+(miners5)+"<br />"+ "price - " + Math.ceil(miner5Price);
	document.getElementById("miner6").innerHTML = "Skull Trooper - "+(miners6)+"<br />"+ "price - " + Math.ceil(miner6Price);
	document.getElementById('cpsBox').innerHTML = (Math.round(cps * 10) / 10) + " vps";
	setTimeout(setText, 20);

	if (num < Math.ceil(miner1Price)) {
		document.getElementById('miner1').style.opacity = 0.25;
	} else {
		document.getElementById('miner1').style.opacity = 1;
	}

	if (num < Math.ceil(miner2Price)) {
		document.getElementById('miner2').style.opacity = 0.25;
	} else {
		document.getElementById('miner2').style.opacity = 1;
	}

	if (num < Math.ceil(miner3Price)) {
		document.getElementById('miner3').style.opacity = 0.25;
	} else {
		document.getElementById('miner3').style.opacity = 1;
	}

	if (num < Math.ceil(miner4Price)) {
		document.getElementById('miner4').style.opacity = 0.25;
	} else {
		document.getElementById('miner4').style.opacity = 1;
	}

	if (num < Math.ceil(miner5Price)) {
		document.getElementById('miner5').style.opacity = 0.25;
	} else {
		document.getElementById('miner5').style.opacity = 1;
	}

	if (num < Math.ceil(miner6Price)) {
		document.getElementById('miner6').style.opacity = 0.25;
	} else {
		document.getElementById('miner6').style.opacity = 1;
	}

	if (num < Math.ceil(miner1Upgrades[m1y])) {
		document.getElementById('miner1Upgrade').style.opacity = 0.25;
	} else {
		document.getElementById('miner1Upgrade').style.opacity = 1;
	}

	if (num < Math.ceil(miner2Upgrades[m2y])) {
		document.getElementById('miner2Upgrade').style.opacity = 0.25;
	} else {
		document.getElementById('miner2Upgrade').style.opacity = 1;
	}

	if (num < Math.ceil(miner3Upgrades[m3y])) {
		document.getElementById('miner3Upgrade').style.opacity = 0.25;
	} else {
		document.getElementById('miner3Upgrade').style.opacity = 1;
	}

	if (num < Math.ceil(miner4Upgrades[m4y])) {
		document.getElementById('miner4Upgrade').style.opacity = 0.25;
	} else {
		document.getElementById('miner4Upgrade').style.opacity = 1;
	}

	if (num < Math.ceil(miner5Upgrades[m5y])) {
		document.getElementById('miner5Upgrade').style.opacity = 0.25;
	} else {
		document.getElementById('miner5Upgrade').style.opacity = 1;
	}

	if (num < Math.ceil(miner6Upgrades[m6y])) {
		document.getElementById('miner6Upgrade').style.opacity = 0.25;
	} else {
		document.getElementById('miner6Upgrade').style.opacity = 1;
	}

	if (num < Math.ceil(clickerUpgrades[cy])) {
		document.getElementById('clickerUpgrade').style.opacity = 0.25;
	} else {
		document.getElementById('clickerUpgrade').style.opacity = 1;
	}

	if (num < Math.ceil(cpsUpgrades[cpsy])) {
		document.getElementById('CPSUpgrade').style.opacity = 0.25;
	} else {
		document.getElementById('CPSUpgrade').style.opacity = 1;
	}
}

function myMove() {

}

function colour() {
	num += cps*60;
    	document.getElementById("animate").disabled = true;
    	document.getElementById("fn").style.opacity = 0;	
    }

function supplyDrop() {
	var mar = Math.floor(Math.random() * 80+10)
	// document.getElementById("container").style.margin = (mar + "%" + " " + (100-mar) + "%");
	document.getElementById("container").style.marginLeft = (mar + "%");
	document.getElementById("container").style.marginRight = (100-mar) + "%";
	console.log(mar + "%" + " " + (100-mar) + "%")
	document.getElementById("animate").disabled = false;
	document.getElementById("fn").style.opacity = 1;
	pos = 0;
	clearInterval(id);
	id = setInterval(frame, 25);
	function frame() {
    	if (pos == 1000) {
    		elem.disabled = true;
    		document.getElementById("fn").style.opacity = 0;
    	} else {
    		pos++; 
    		elem.style.top = pos + "px"; 
    	}
  	}
	setTimeout(supplyDrop, 1000*(180+Math.floor(Math.random() * 80+10)));
}

function exportSave() {
	var thingys = (((Math.ceil(num)).toString(2)) + " " + (m1x.toString(2)) + " " + (m1y.toString(2)) + " " + (m2x.toString(2)) + " " + (m2y.toString(2)) + " " + (m3x.toString(2)) + " " + (m3y.toString(2)) + " " + (m4x.toString(2)) + " " + (m4y.toString(2)) + " " + (m5x.toString(2)) + " " + (m5y.toString(2)) + " " + (m6x.toString(2)) + " " + (m6y.toString(2)) + " " + (cx.toString(2)) + " " + (cy.toString(2)) + " " + (cpsx.toString(2)) + " " + (cpsy.toString(2)) + " " + (clickers.toString(2)) + " " + (cpss.toString(2)) + " " + (miners1.toString(2)) + " " + (miners2.toString(2)) + " " + (miners3.toString(2)) + " " + (miners4.toString(2)) + " " + (miners5.toString(2)) + " " + (miners6.toString(2)) + " " + ((Math.ceil(miner1Price)).toString(2)) + " " + ((Math.ceil(miner2Price)).toString(2)) + " " + ((Math.ceil(miner3Price)).toString(2)) + " " + ((Math.ceil(miner4Price)).toString(2)) + " " + ((Math.ceil(miner5Price)).toString(2)) + " " + ((Math.ceil(miner6Price)).toString(2)))
	t = btoa(thingys.toString())
	document.getElementById("code").innerHTML = t;
	setTimeout(function(){
    	document.getElementById("code").innerHTML = "";
	},5000);
	navigator.clipboard.writeText(t.toString())
	console.log(btoa(thingys.toString()))
}

function importSave(thingyy) {
	if (thingyy) {
		thingy = atob(thingyy)
		var things = thingy.split(" ")
		console.log(things)
		num = parseInt(things[0], 2)
		m1x = parseInt(things[1], 2)
		m1y = parseInt(things[2], 2)
		m2x = parseInt(things[3], 2)
		m2y = parseInt(things[4], 2)
		m3x = parseInt(things[5], 2)
		m3y = parseInt(things[6], 2)
		m4x = parseInt(things[7], 2)
		m4y = parseInt(things[8], 2)
		m5x = parseInt(things[9], 2)
		m5y = parseInt(things[10], 2)
		m6x = parseInt(things[11], 2)
		m6y = parseInt(things[12], 2)
		cx = parseInt(things[13], 2)
		cy = parseInt(things[14], 2)
		cpsx = parseInt(things[15], 2)
		cpsy = parseInt(things[16], 2)
		clickers = parseInt(things[17], 2)
		cpss = parseInt(things[18], 2)
		miners1 = parseInt(things[19], 2)
		miners2 = parseInt(things[20], 2)
		miners3 = parseInt(things[21], 2)
		miners4 = parseInt(things[22], 2)
		miners5 = parseInt(things[23], 2)
		miners6 = parseInt(things[24], 2)
		miner1Price = parseInt(things[25], 2)
		miner2Price = parseInt(things[26], 2)
		miner3Price = parseInt(things[27], 2)
		miner4Price = parseInt(things[28], 2)
		miner5Price = parseInt(things[29], 2)
		miner6Price = parseInt(things[30], 2)

		document.getElementById("miner1Upgrade").innerHTML = miner1Upgrades[m1x]+"<br />"+ "price - " + miner1Upgrades[m1y];
		document.getElementById("miner2Upgrade").innerHTML = miner2Upgrades[m2x]+"<br />"+ "price - " + miner2Upgrades[m2y];
		document.getElementById("miner3Upgrade").innerHTML = miner3Upgrades[m3x]+"<br />"+ "price - " + miner3Upgrades[m3y];
		document.getElementById("miner4Upgrade").innerHTML = miner4Upgrades[m4x]+"<br />"+ "price - " + miner4Upgrades[m4y];
		document.getElementById("miner5Upgrade").innerHTML = miner5Upgrades[m5x]+"<br />"+ "price - " + miner5Upgrades[m5y];
		document.getElementById("miner6Upgrade").innerHTML = miner6Upgrades[m6x]+"<br />"+ "price - " + miner6Upgrades[m6y];
		if (miner1Upgrades[m1x] == "") {
			document.getElementById("miner1Upgrade").remove();
		}
		if (miner2Upgrades[m2x] == "") {
			document.getElementById("miner2Upgrade").remove();
		}
		if (miner3Upgrades[m3x] == "") {
			document.getElementById("miner3Upgrade").remove();
		}
		if (miner4Upgrades[m4x] == "") {
			document.getElementById("miner4Upgrade").remove();
		}
		if (miner5Upgrades[m5x] == "") {
			document.getElementById("miner5Upgrade").remove();
		}
		if (miner6Upgrades[m6x] == "") {
			document.getElementById("miner6Upgrade").remove();
		}
		if (clickerUpgrades[cx] == "") {
			document.getElementById("clickerUpgrade").remove();
		}
		if (cpsUpgrades[cpsx] == "") {
			document.getElementById("CPSUpgrade").remove();
		}
		document.getElementById("clickerUpgrade").innerHTML = clickerUpgrades[cx]+"<br />"+ "price - " + clickerUpgrades[cy];
		document.getElementById("CPSUpgrade").innerHTML = cpsUpgrades[cpsx]+"<br />"+ "price - " + cpsUpgrades[cpsy];

		document.getElementById("numBox").innerHTML = Math.ceil(num) + " V-Bucks";
		document.getElementById("miner1").innerHTML = "Miner1 - "+(miners1)+"<br />"+ "price - " + Math.ceil(miner1Price);
		document.getElementById("miner2").innerHTML = "Miner2 - "+(miners2)+"<br />"+ "price - " + Math.ceil(miner2Price);
		document.getElementById("miner3").innerHTML = "Miner3 - "+(miners3)+"<br />"+ "price - " + Math.ceil(miner3Price);
		document.getElementById("miner4").innerHTML = "Miner4 - "+(miners4)+"<br />"+ "price - " + Math.ceil(miner4Price);
		document.getElementById("miner5").innerHTML = "Miner5 - "+(miners5)+"<br />"+ "price - " + Math.ceil(miner5Price);
		document.getElementById("miner6").innerHTML = "Miner6 - "+(miners6)+"<br />"+ "price - " + Math.ceil(miner6Price);
		document.getElementById('cpsBox').innerHTML = (Math.round(cps * 10) / 10) + " vps";
	}

}
		