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
    

     

      while (flag) {
        
        flag = false;
        
        if (state.operator && !state.display) {
  
     
          setState((prevState:any) => {
            const newRecord = [...prevState.record]; // Crear una copia del array record
            newRecord.push(value); // Agregar el nuevo elemento al final del array
            const newDisplay = add(newRecord.at(-3), newRecord.at(-1))

            
            return {...prevState, record: newRecord, display: newDisplay}; // Retornar un nuevo objeto con el nuevo array record
          });
        
        }
        else if(state.operator && state.display ){
          let totalDisplay = state.display
          setState((prevState:any) => {
            const newRecord = [...prevState.record]; // Crear una copia del array record
            newRecord.push(value); // Agregar el nuevo elemento al final del array
            let newDisplay  
        if(state.operator === "+") newDisplay = add(totalDisplay, newRecord.at(-1))
        if(state.operator === "-") newDisplay = sustract(totalDisplay, newRecord.at(-1))
        if(state.operator === "x") newDisplay = multiply(totalDisplay, newRecord.at(-1))
        if(state.operator === "÷") newDisplay = split(totalDisplay, newRecord.at(-1))
            
            return {...prevState, record: newRecord, display: newDisplay}; // Retornar un nuevo objeto con el nuevo array record
          });
        }
        else{
          setState({
            ...state,
            record: [...state.record, value],
            display: state.display + value,
          });
      
  
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
      
      }
      else {
        setState((prevState:any) => {
          const newRecord = [...prevState.record]; // Crear una copia del array record
          newRecord.pop(); // Remover el último elemento del array
          newRecord.push(value); // Agregar el nuevo elemento al final del array
          return {...prevState, record: newRecord, operator: value}; // Retornar un nuevo objeto con el nuevo array record
        });
      
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

const add = (num1: string , num2: string ) => {

  let result = parseInt(num1, 10) + parseInt(num2, 10);
  
  
  
  return result.toString();
};
const sustract = (num1: string , num2: string ) => {
  
  let result = parseInt(num1, 10) - parseInt(num2, 10);
  
  return result.toString();
};
const multiply = (num1: string = "0", num2: string = "0") => {
  let result = parseInt(num1, 10) * parseInt(num2, 10);
  
  return result.toString();
};
const split = (num1: string = "0", num2: string = "0") => {
  let result = parseInt(num1, 10) / parseInt(num2, 10);
  
  return result.toString();
 
};

export default handlePress;
