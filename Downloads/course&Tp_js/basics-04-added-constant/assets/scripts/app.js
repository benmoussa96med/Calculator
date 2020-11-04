const defaultResult=0;
let currentResult = defaultResult;

function getusernumber(){
    return parseInt(userInput.value);
}
//function global (generates and writwa calsulation log)
 function createAndWriteOutput(operator,resultbefore,calcnumber){
     const CalculationDescription=`${resultbefore} ${operator} ${calcnumber}`;
     outputResult(currentResult,CalculationDescription);
}
//function Add
function Add(){
    const enternumber=getusernumber();//valeur add
const initialresult= currentResult; //valeur before
currentResult=currentResult+enternumber; 
createAndWriteOutput('+',initialresult,currentResult)//calcule net
};
addBtn.addEventListener('click',Add);
//minus
function sustraction(){
    const enternumber=getusernumber();
const initialresult= currentResult;
currentResult=currentResult-enternumber;
createAndWriteOutput('-',initialresult,currentResult)
}
subtractBtn.addEventListener('click',sustraction);

//multiply
function multiply(){
  const enternumber=getusernumber();
  const initialresult=currentResult;
  currentResult=currentResult *enternumber;
  createAndWriteOutput('*',initialresult,currentResult);
}
multiplyBtn.addEventListener('click',multiply);
//dividby
function divid(){
    const enternumber=getusernumber();
    const initialresult=currentResult;
    currentResult=currentResult / enternumber;
    createAndWriteOutput('/',initialresult,currentResult);
  }
  divideBtn.addEventListener('click',divid);

  alert("message for testing");