export function cep(e) {
  e.currentTarget.maxLength = 9;
  let { value } = e.currentTarget;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/g, "$1-$2");
  e.currentTarget.value = value;
  return e;
}

export function tel(e) {
  e.currentTarget.maxLength = 15;
  let { value } = e.currentTarget;
  value = value.replace(/\D/g, "");
  if (value.length <= 14)
    value = value.replace(/(\d{2})(\d{4})(\d)/g, "($1) $2-$3");
  else value = value.replace(/(\d{2})(\d{5})(\d)/g, "($1) $2-$3");
  e.currentTarget.value = value;
  return e;
}

export function cellPhone(e) {
  e.currentTarget.maxLength = 15;
  let { value } = e.currentTarget;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d{5})(\d)/g, "($1) $2-$3");
  e.currentTarget.value = value;
  return e;
}

export function cpf(e) {
  e.currentTarget.maxLength = 14;
  let { value } = e.currentTarget;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1-$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  e.currentTarget.value = value;
  return e;
}

export function cpfOrCnpj(e) {
  e.currentTarget.maxLength = 18;
  let { value } = e.currentTarget;
  value = value.replace(/\D/g, "");

  if (value.length <= 11) {
    value = value.replace(/(\d)(\d{2})$/, "$1-$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  } else {
    value = value.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5"
    );
  }
  e.currentTarget.value = value;
  return e;
}

export function time(e) {
  e.currentTarget.maxLength = 5;
  let { value } = e.currentTarget;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d{2})$/, "$1:$2");
  e.currentTarget.value = value;
  return e;
}

export function date(e) {
  e.currentTarget.maxLength = 10;
  let { value } = e.currentTarget;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d{2})(\d{4})$/, "$1/$2/$3");
  e.currentTarget.value = value;
  return e;
}

export function numberMask(e) {
  let { value } = e.currentTarget;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)/g, "$1");
  e.currentTarget.value = value;
  return e;
}

export function currencyMask(e) {
  let { value } = e.currentTarget;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  value = value.replace(/(\d)/, "R$ $1");
  e.currentTarget.value = value;
  return e;
}

export function metersMask(e) {
  let { value } = e.currentTarget;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)$/g, "$1 m??");
  e.currentTarget.value = value;
  return e;
}
