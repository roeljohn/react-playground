import React from "react"; 

function Car(props) {
    const { brand, model, year, color } = props.cars;
    return <li>I am a { brand } { model } { year } { color }</li>;
}
export default Car;