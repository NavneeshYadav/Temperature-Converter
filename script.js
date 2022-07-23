const calculateTemp= () =>{
    const numberTemp=document.getElementById("temp").value;
    const tempSelected =document.getElementById("temp_diff");
    const valueTemp=tempSelected.options[tempSelected.selectedIndex].value;
    

    const celToFah = (cel) =>{
        let fahrenheit =(cel* 9/5) +32;
        return fahrenheit.toFixed(2);
    }
    const fahToCel= (fah)=>{
        let celsius =((fah-32)*5/9);
        return celsius.toFixed(2);
    }
    let result;

    if(valueTemp=="cel"){
        result=celToFah(numberTemp);
        document.getElementById("resultContainer").innerHTML=`<strong>Result :-</strong> ${numberTemp} °Celsius= ${result} °Fahrenheit`;
    }
    else{
        result=fahToCel(numberTemp);
        document.getElementById("resultContainer").innerHTML=`<strong>Result :-</strong> ${numberTemp} °Fahrenheit= ${result} °Celsius`;
    }
}
