const dummy_numbers = [
  "00000000000",
  "11111111111",
  "22222222222",
  "33333333333",
  "44444444444",
  "55555555555",
  "66666666666",
  "77777777777",
  "88888888888",
  "99999999999"
];

export function MustBeValid(cpf) {
  if (cpf === null || cpf.length !== 11 || dummy_numbers.includes(cpf)) {
    return false;
  } else {
    let num: number = 0;
    let caracter: string = "";
    let numeros: string = "0123456789";
    let j: number = 10;
    let soma: number = 0;
    let resto: number = 0;
    let dig1: number = 0;
    let dig2: number = 0;
    let aux: string = "";
    aux = cpf.substring(0, 9);

    for (let i: number = 0; i < 9; i++) {
      caracter = aux.charAt(i);
      if (numeros.search(caracter) == -1) {
        return false;
      }
      num = Number(caracter);
      soma = soma + num * j;
      j--;
    }
    resto = soma % 11;
    dig1 = 11 - resto;
    if (dig1 > 9) {
      dig1 = 0;
    }
    j = 11;
    soma = 0;
    aux = aux + dig1;
    for (let i: number = 0; i < 10; i++) {
      caracter = aux.charAt(i);
      num = Number(caracter);
      soma = soma + num * j;
      j--;
    }
    resto = soma % 11;
    dig2 = 11 - resto;
    if (dig2 > 9) {
      dig2 = 0;
    }
    aux = aux + dig2;
    if (cpf != aux) {
      return false;
    } else {
      return true;
    }
  }
}
