import IzvedbeItem from "./IzvedbeItem";

function IzvedbeList(props) {
//  (console.log(props.izvedbe));
  return (
    <ul>
      {props.izvedbe.map((izvedba) => (
        <IzvedbeItem
          key={izvedba.id}
          id={izvedba.izvedbaID}
          datumPrikazivanja={izvedba.datumPrikazivanja}
          gostujucaPredstava={izvedba.gostujucaPredstava}
          brojSlobodnihMesta={izvedba.brojSlobodnihMesta}
          cena={izvedba.cena}
          salaID={izvedba.sala.nazivSale}
          predstavaID={izvedba.predstava.nazivPredstave}
        />
      ))}
    </ul>
  );
}

export default IzvedbeList;
