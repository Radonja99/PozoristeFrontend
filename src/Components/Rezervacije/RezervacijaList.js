import RezervacijaItem from "./RezervacijaItem";

function RezervacijaList(props) {
    return (
        <ul>
            {props.rezervacije.map((rezervacija, index)=> (
                <RezervacijaItem
                key = {index}
                id = {rezervacija.id}
                datumKreiranjaRezervacije = {rezervacija.datumKreiranjaRezervacije}
                datumIstekaRezervacije = {rezervacija.datumIstekaRezervacije}
                placeno = {'Rezervacija je placena: ' + String(rezervacija.placeno)}
                placenobool = {rezervacija.placeno}
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