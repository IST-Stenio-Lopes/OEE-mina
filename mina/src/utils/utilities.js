import Check from "../assets/machine-begin/check.svg";
import Build from "../assets/machine-begin/build.svg";
import Pause from "../assets/machine-begin/pause.svg";

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

export function getStateIcon(value) {
  if (value === "funcionando") {
    return /* "check"; */ Check;
  } else if (value === "manutencao") {
    return Build;
  } else if (value === "pausa") {
    return Pause;
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
export function ChangeArrayInputSelect(array) {
  const arraySelect = [];

  for (let i = 0; i < array.length; i++) {
    arraySelect.push({
      value: array[i],
      label: array[i],
    });
  }
  return arraySelect;
}

/* var permissions = []; */
export function HasPermission(permissions, userPermission) {
  /* permissions.indexOf(userPermission) !== -1
    ?  true
    :  false */
  if (permissions.indexOf(userPermission) !== -1) {
    return true;
  }
  return false;
}
