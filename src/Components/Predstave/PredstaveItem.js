import Card from "../UI/Card"
import React from "react";
import classes from "./PredstaveItem.module.css"

function PredstavaItem(props) {
    return (
        <Card>
            <li className={classes.item}>
            <div className={classes.div}>
                <h3>{props.nazivPredstave}</h3>
                <p>{props.zanr}</p>
                <p>{props.brojIzvodjenja}</p>
                <p>{props.datumPremijere}</p>
                <button>Rezervisi karte</button>

            </div>
        </li>
        </Card>
        
    )
}
export default PredstavaItem