import PredstavaItem from "./PredstaveItem";

function PredstaveList(props) {
  return (
    <ul>
      {props.predstave.map((predstava, index) => (
        <PredstavaItem
          key={index}
          id={predstava.id}
          nazivPredstave={predstava.nazivPredstave}
          zanr={predstava.zanr}
          brojIzvodjenja={predstava.brojIzvodjenja}
          datumPremijere={predstava.datumPremijere}
          predstavaID={predstava.predstavaID}
        />
      ))}
    </ul>
  );
}

export default PredstaveList;
