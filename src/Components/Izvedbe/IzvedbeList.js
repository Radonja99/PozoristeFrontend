import IzvedbeItem from "./IzvedbeItem";

function IzvedbeList(props) {
//  (console.log(props.izvedbe));
  return (
    <ul>
      {props.izvedbe.map((izvedba, index) => (
        <IzvedbeItem
          key={index}
          id={izvedba.izvedbaID}
          datumPrikazivanja={izvedba.datumPrikazivanja}
          gostujucaPredstava={izvedba.gostujucaPredstava}
          brojSlobodnihMesta={izvedba.brojSlobodnihMesta}
          cena={izvedba.cena}
          salaID={izvedba.sala.nazivSale}
          predstavaID={izvedba.predstava.nazivPredstave}
          pozoriste={izvedba.sala.pozoriste.nazivPozorista}
        />
      ))}
    </ul>
  );
}

export default IzvedbeList;
