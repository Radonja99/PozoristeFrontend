import RezervacijaItem from "./RezervacijaItem";

function RezervacijaList(props) {
    return (
        <ul>
            {props.rezervacije.map((rezervacija)=> (
                <RezervacijaItem
                key = {rezervacija.id}
                id = {rezervacija.id}
                datumKreiranjaRezervacije = {rezervacija.datumKreiranjaRezervacije}
                placeno = {'Rezervacija je placena: ' + String(rezervacija.placeno)}
                ukupnaCenaRezervacije = {rezervacija.ukupnaCenaRezervacije}
                brojMesta = {'Broj rezervisanih mesta je ' + rezervacija.brojMesta}
                korisnikID = {rezervacija.korisnik.imeKorisnika + ' ' + rezervacija.korisnik.prezimeKorisnika}
                izvedbaID = {rezervacija.izvedba.predstava.nazivPredstave}
                rezervacijaID = {rezervacija.rezervacijaID}
                />
            ))}
        </ul>
    )
}

export default RezervacijaList;