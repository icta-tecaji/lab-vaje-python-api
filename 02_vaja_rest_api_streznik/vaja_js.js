const fetch = require("node-fetch")
const main = async () => {
    try {
// Vašo kodo pišite samo med črti. Vsa koda med črtama je samo primer in jo po želji lahko spreminjate in/ali brišete
// ---------------------------------------------


        const mojId = "82013fb3a531d5414f478747c1aca622";

        //process.argv vsebuje spisek argumentov, ki so bili podani ob zagonu aplikacije. Na začetku spiska je vedno "node" in "vaja.js", naprej so pa argumenti, ki ste jih podali ob zagonu. V tem primeru poženem aplikacijo z "node vaja.js <st. ankete, ki me zanima>"
        const stAnkete = process.argv[2] || 5382 // Ta struktura pomeni, da če process.argv[2] obstaja se bo uporabil, če ne, se bo pa spremenljivka stAnkete nastavila na 5382

        //odgovor1 je JS objekt, ki predstavlja telo odgovora na klic APIja. POMEMBNO: če boste kopirali, ne pozabite spremeniti imena
        let odgovor1 = await (await fetch(`https://api.rtvslo.si/poll/getPollById?client_id=${mojId}&id=${stAnkete}`,{
            method: "GET",
            headers: {},
            body: null,
        })).json();

        //natančno strukturo objekta vidite v dokumentaciji od APIja
        console.log(`Raziskava z vprašanjem: "${odgovor1.response.question}" je bila objavlena ${odgovor1.response.stamp}`)
        console.log("Dobila je sledeče odgovore:")
        console.log(odgovor1.response.answers)

        console.log()//prazen console.log() naredi prazno vrstico
        console.log("Lahko jih zapišemo tudi lepše:")
        // v tem primeru je "answers" spisek (v jsonu z oglatimi oklepaji)
        odgovor1.response.answers.map((odg) => {
            //vse v tem delu se zažene enkrat za vsak element v temu spisku. Ko se zažene, "odg" predstavlja ta element v spisku
            console.log(`${odg.times} ljudi je glasovalo za: ${odg.answer}`)
        })


// ---------------------------------------------
    }
    catch(e){
        console.error("Napaka v programu:")
        console.error(e)
    }
}
main()