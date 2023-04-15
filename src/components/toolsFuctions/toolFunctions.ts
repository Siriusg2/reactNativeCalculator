const handlePress = (value: string, setState: Function, state: any) => {
  let flag = true;

  switch (value) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      flag = true;

     

      while (flag) {
        flag = false;

        setState({
          ...state,
          record: [...state.record, value],
          display: state.display + value,
        });

        if (state.operator === "+" && state.record.legth > 2) {
          const result = add(parseInt(state.record.at(-3)), parseInt(state.record.at(-1)));
          setState({ ...state, display: add(parseInt(state.record.at(-3)), parseInt(state.record.at(-1))) });
        }
      }
      break;
    case "+":
    case "-":
    case "x":
    case "÷":
      if (!isNaN(parseInt(state.record.at(-1)))) {
        setState({
          ...state,
          operator: value,
          record: [...state.record, value],
        });
        flag = false;
      }
      else {
        setState((prevState:any) => {
          const newRecord = [...prevState.record]; // Crear una copia del array record
          newRecord.pop(); // Remover el último elemento del array
          newRecord.push(value); // Agregar el nuevo elemento al final del array
          return {...prevState, record: newRecord, operator: value}; // Retornar un nuevo objeto con el nuevo array record
        });
        flag = false;
      }

      break;

    case "=":
      setState({ ...state, operator: "" });
      flag = false;
      break;

    case "+/-":
    case "%":
      break;
    case "AC":
      setState({ record: [], display: "", operator: "" });

    default:
      break;
  }
};

const add = (num1: number = 0, num2: number = 0) => {

  isNaN(num1) ? (num1 = 0) : null;
  isNaN(num2) ? (num2 = 0) : null;
  let result = num1 + num2;
  return result
};
const sustract = (num1: string = "0", num2: string = "0") => {
  let numone = parseInt(num1);
  let numtwo = parseInt(num2);
  isNaN(numone) ? (numone = 0) : null;
  isNaN(numtwo) ? (numtwo = 0) : null;
  let result = numone - numtwo;

  return result.toString();
};
const multiply = (num1: string = "0", num2: string = "0") => {
  let numone = parseInt(num1);
  let numtwo = parseInt(num2);
  isNaN(numone) ? (numone = 0) : null;
  isNaN(numtwo) ? (numtwo = 0) : null;
  let result = numone * numtwo;

  return result.toString();
};
const split = (num1: string = "0", num2: string = "0") => {
  let numone = parseInt(num1);
  let numtwo = parseInt(num2);
  isNaN(numone) ? (numone = 0) : null;
  isNaN(numtwo) ? (numtwo = 0) : null;
  let result = numone / numtwo;
  return result.toString();
};

export default handlePress;
