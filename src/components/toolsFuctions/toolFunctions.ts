const handlePress = (value: string, setState: Function, state: any, recordState:any, setStateRecord:Function) => {
 let newDisplayState = state
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
        if(state!=="0"){
setState(newDisplayState + value)
setStateRecord([ state])}
else{
    setState(value)
    setStateRecord([state])}
    

      break;
    case "+":
    

    case "-":

    case "x":

    case "÷":


    case "=":
       

    case "+/-":
    case "%":
      break;
    case "AC":
        setState("0");
      setStateRecord(["0"]);
    default:
      break;
  }
};

export default handlePress;
