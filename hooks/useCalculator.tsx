import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  substract = "-",
  multiply = "x",
  divide = "÷"
}

export const useCalculator = () => {
  //lo que estamos viendo en el display
  const [formula, setFormula] = useState("0");

  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator>();

  //el numero que esta en [] es lo que va a trigerear que se ejecute este useEffect
  useEffect(() => {
    //TODO: calcular subresultado
    setFormula(number);
  }, [number]);

  const buildNumber = (numberString: string) => {
    //Verificar si ya existe punto decimal
    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      //Evaluar si es otro cero y no hay punto
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }

      //Evaluar si es diferente de cero, no hay punto y es el primer numero
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }

      //evitar el 000.00
      if (numberString === "0" && !number.includes(".")) {
        return;
      }
    } else {
      setNumber(number + numberString);
    }
  };

  return {
    //Props
    formula,
    number,
    prevNumber,

    //methods

    buildNumber
  };
};
