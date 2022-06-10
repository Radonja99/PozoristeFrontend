import PredstavaItem from "./PredstaveItem";

function PredstaveList(props) {
  return (
    <ul>
      {props.predstave.map((predstava) => (
        <PredstavaItem key={predstava.id}
        id={predstava.id}
        nazivPredstave={predstava.nazivPredstave}
        zanr={predstava.zanr}
        brojIzvodjenja={predstava.brojIzvodjenja}
        datumPremijere={predstava.datumPremijere}
          />
      ))}
    </ul>
  );
}

export default PredstaveList;
