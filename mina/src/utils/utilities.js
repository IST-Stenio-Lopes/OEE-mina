export function oeeValue (valor) {
    if(valor > 100){
        return 100;
    }else if(valor <0){
        return 0;
    }else{
        return valor;
    }
}