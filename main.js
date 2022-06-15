function classificar(valor){
    if (valor <= 18.5){ 
        window.alert(`[Abaixo do peso! Resultado: ${valor}]`); 
    } 
    else if (valor >= 18.6 && valor <= 24.9){
        window.alert(`[Peso normal! Resultado: ${valor}]`); 
    } 
    else if (valor >= 25 && valor <= 29.9){ 
        window.alert(`[Sobrepeso! Resultado: ${valor}]`); 
    } 
    else if (valor >= 30 && valor <= 34.9){ 
        window.alert(`[Obesidade grau I! Resultado: ${valor}]`);
    } 
    else if (valor >= 35 && valor <= 39.9){ 
        window.alert(`[Obesidade grau II! Resultado: ${valor}]`);
    } 
    else if (valor >= 40){
        window.alert(`[Obesidade grau III! Resultado: ${valor}]`);
    }

}

function calcular_imc(peso, altura){
    const result = peso / (altura * altura)
    classificar(result)
}

function imc(){
    const peso = document.getElementById('peso').value;
    const altuta = document.getElementById('altura').value;
    // if (peso !== '' && altuta !== altuta){
    calcular_imc(peso, altuta)
}