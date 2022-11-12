const clickImg = document.querySelector("#clickme");

clickImg.addEventListener("click", () => {
	if (
		clickImg.style.border == null ||
		clickImg.style.border != "thick solid rgb(58, 136, 145)"
	) {
		let clickBorder = (clickImg.style.border = "thick solid #F08080");
	} else {
		let clickBorder = (clickImg.style.border = "none");
	}
});
/* Desaf 1 fin */
/* Desaf 2 */
const pHierbas = document.querySelector("#p-hierbas");
const btnPlantas = document.querySelector("#btn-plantas");

btnPlantas.addEventListener("click", () => {
	const img_1 = document.querySelector("#imagen1").value;
	const img_2 = document.querySelector("#imagen2").value;
	const img_3 = document.querySelector("#imagen3").value;
	const imgTotal = parseFloat(imagen1) + parseFloat(imagen2) + parseFloat(imagen3);
	const imgTotals1 =
		parseFloat(imagen1) + parseFloat(imagen2) ||
		parseFloat(imagen1) + parseFloat(imagen3) ||
		parseFloat(imagen2) + parseFloat(imagen3);
	const plantaLength = imagen2.length + imagen2.length + imagen3.length;

	if (plantaLength === 0) {
		pHierbas.textContent = "Debes ingresar una cantidad";
		return;
	}

	if (
		TotalHierbas > 10 ||
		imagen1 > 10 ||
		imagen2 > 10 ||
		imagen3 > 10 ||
		TotalsHierbas1 > 10
	) {
		pHierbas.textContent = "Llevas demasiados pokemons, recuerda que son solo 10.";
	} else {
		pHierbas.textContent = `¡Partimos en una nueva aventura! Espero que tengas un buen viaje con tus ${pokeTotal} pokemons`;
	}
});
/* Desaf 2 fin*/
/* Desaf 3 */
const btnPass = document.querySelector("#btn-pass");
const pPass = document.querySelector("#pPass");

btnPass.addEventListener("click", () => {
	const firstPass = document.querySelector("#firstSelect").value;
	const secondPass = document.querySelector("#secondSelect").value;
	const thridPass = document.querySelector("#thridSelect").value;

	if (firstPass == 9 && secondPass == 1 && thridPass == 1) {
		pPass.textContent = "Password 1 correcta";
	} else if (firstPass == 7 && secondPass == 1 && thridPass == 4) {
		pPass.textContent = "Password 2 correcta";
	} else {
		pPass.textContent = "Password incorrecta";
	}
});