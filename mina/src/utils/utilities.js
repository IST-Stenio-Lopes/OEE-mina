export function oeeValue (valor) {
    if(valor > 100){
        return 100;
    }else if(valor <0){
        return 0;
    }else{
        return valor;
    }
}

export function formatWord(word){
   var wordModified = word.toString();
   wordModified = wordModified.replace(" ", "\n");
   return wordModified;
}


