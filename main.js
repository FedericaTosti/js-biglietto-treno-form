// Creo una versione dell’EX del biglietto del treno ricca con un bell’output dinamico;
// Sulla base di quello visto insieme in aula, ma non per forza identico;
// L’importante è usare eventi sui 2 bottoni principali, e sviluppare le logiche che sottendono;
// “Genera” mi calcolerà il prezzo del biglietto a partire dai dati inseriti negli input, e mi draà l’output in pagina, nel modo migliore possibile;
// “Annulla” mi fa tornare allo stato iniziale con output pulito (o nascosto) e campi puliti (non vale fare refresh del browser);
// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.



// creo variabile input nome e cognome passeggero
var nomePass = document.getElementById("nomeCognome");
// creo variabile input km
var km = document.getElementById("km");
// creo variabile input anni
var anni = document.getElementById("anni");
// creo variabile bottone genera
var bottoneGenera = document.getElementById("genera");
// creo  variabile bottone annulla
var bottoneAnnulla = document.getElementById("annulla");
// creo variabile per sezione a comparsa
var calcoloBiglietto = document.getElementById("calcolo-biglietto");

// dopo il click sul bottone genera
bottoneGenera.addEventListener("click",function() {
	// creo varibili e salvo i valori inseriti
	var valNome = nomePass.value;
	var valKm = parseInt(km.value);
	var valAnni = parseInt(anni.value);
	// rendo visibile sezione dopo il click genera
	calcoloBiglietto.style.opacity = 1;

	// stampo in pagina il nome passeggero
	document.getElementById("nomePass").innerHTML = valNome;

	console.log("Nome passeggero:" + " " + valNome);

	// calcolo prezzo viaggio
	// creazione variabile costo biglietto
	var costoBiglietto= valKm*0.21;
	// calcolo costo Biglietto in caso di sconti da applicare (if else)
	if (valAnni == 17) {
	  costoBiglietto=costoBiglietto*0.8;
		document.getElementById("offerta").innerHTML = "Biglietto ridotto";
		document.getElementById("costo").innerHTML = costoBiglietto.toFixed(2) + "€";

	} else if (valAnni == 66) {
	  costoBiglietto=costoBiglietto*0.6;
		document.getElementById("offerta").innerHTML = "Biglietto over 65";
		document.getElementById("costo").innerHTML = costoBiglietto.toFixed(2) + "€";

	} else if (valAnni == 18){
	  costoBiglietto=costoBiglietto;
		document.getElementById("offerta").innerHTML = "Biglietto standard";
		document.getElementById("costo").innerHTML = costoBiglietto.toFixed(2) + "€";
	}
	console.log("Costo biglietto:" + " " + costoBiglietto);

	// creo variabili per valori random e stampo in pagina
	var nCarrozza = Math.floor(Math.random() * 50) + 1;
	var nCodice = Math.floor(Math.random() * 10000) + 1;

	document.getElementById("carrozza").innerHTML = nCarrozza;
	document.getElementById("codice").innerHTML = nCodice;

	console.log("Numero carrozza:" + " " + nCarrozza);
	console.log("Numero codice CP:" + " " + nCodice);

})


// dopo il click sul bottone annulla
bottoneAnnulla.addEventListener("click",function() {

	// cancello valore inserito dall'utente dopo il click annulla
	nomePass.value = "";
	km.value = "";
	anni.value = "";

	// sezione a comparsa non più visibile dopo il click annulla
	calcoloBiglietto.style.opacity = 0;

	// cancello dati calcolati ultimo inserimento
	document.getElementById("offerta").innerHTML = "";
	document.getElementById("costo").innerHTML = "";

})
