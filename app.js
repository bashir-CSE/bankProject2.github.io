const dipositeBtn = document.querySelector(".dipositeBtn");
const witdrawBtn = document.querySelector(".witdrawBtn");

// deposite section
dipositeBtn.addEventListener("click", (e) => {
	// get input from deposite fwilwd
	const dipInpFeild = document.querySelector(".dipInpFeild");
	const dipositeAmmount = parseInt(dipInpFeild.value);
	// get default ammount
	const dipValue = document.querySelector(".dipValue");
	const dipValueText = dipValue.innerText;
	const dipValuenumber = parseInt(dipValueText);
	//set diposit ammount on the deposite dashboard
	dipValue.innerText = dipositeAmmount + dipValuenumber;
	//set diposit ammount on the total dashboard
	const totalValue = document.querySelector(".totalValue");
	const totalValueText = totalValue.innerText;
	const totalValueNumber = parseInt(totalValueText);
	totalValue.innerText = totalValueNumber + dipositeAmmount;
	// clear deposite feild
	dipInpFeild.value = ``;
});
// withdraw section
witdrawBtn.addEventListener("click", (e) => {
	// get withdraw value from witInpFeild
	const witInpFeild = document.querySelector(".witInpFeild");
	const withdrawAmount = parseInt(witInpFeild.value);
	// get withdrawAmount value
	const witValue = document.querySelector(".witValue");
	const withdrawValueNumber = parseInt(witValue.innerText);
	witValue.innerText = withdrawValueNumber + withdrawAmount;
	// set total ammount on the total ammount dashboard
	const totalValue = document.querySelector(".totalValue");
	const totalValueText = totalValue.innerText;
	const totalValueNumber = parseInt(totalValueText);
	totalValue.innerText = totalValueNumber - withdrawAmount;
	witInpFeild.value = "";
});
console.log();