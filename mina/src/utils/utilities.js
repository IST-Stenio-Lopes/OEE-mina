export function oeeValue(valor) {
  if (valor > 100) {
    return 100;
  } else if (valor < 0) {
    return 0;
  } else {
    return valor;
  }
}

export function formatWord(word) {
  var wordModified = word.toString();
  wordModified = wordModified.replace(" ", "\n");
  return wordModified;
}

export function getStateMachine(value) {
  if (value === "funcionando") {
    return "FUNCIONANDO";
  } else if (value === "manutencao") {
    return "MAN.MECÂNICA";
  } else if (value === "pausa") {
    return "PARADO";
  }
}

export function getNameStateIcon(value) {
  if (value === "funcionando") {
    return "check";
  } else if (value === "manutencao") {
    return "build";
  } else if (value === "pausa") {
    return "pause";
  }
}

export function adjustSizeWithResolution(value) {
  if (window.screen.width >= 1920) {
    return value;
  }
  if ((window.screen.width <= 1600) & (window.screen.width > 1366)) {
    return value * 0.85;
  }
  if (window.screen.width <= 1366) {
    return value * 0.8;
  } else {
    return value;
  }
}
