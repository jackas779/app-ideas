console.log('hola mundo en node js');

function bin2Dec(number) {

  let position = 1;
  let string
  if (typeof number === "number") {
    string = number.toString()
  } else {
    string = number
  }

  const numeroVueltas = string.length

  for (let i = 0; i < numeroVueltas; i++) {

    console.log('exponencia es : ', position);

    console.log(Number(string.substring(i, i + 1)));

    position += position
  }

  if (true) {

  }
}

bin2Dec(12345)