const getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomNumber = () => {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomSymbol = () => {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
};

interface randomFuncProps {
  lower: () => string;
  upper: () => string;
  number: () => number | string;
  symbol: () => string;
}

const randomFunc: randomFuncProps = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

export const generatePassword = (checkedState: boolean[], length: number) => {
  const [lower, upper, number, symbol] = checkedState;
  let generatedPassword = '';
  const typesCount = checkedState.filter((value) => value === true).length;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return '';
  }

  const generatePasswordHandler = (someValue: string | number) => {
    generatedPassword += someValue;
  };

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatePasswordHandler(
        randomFunc[funcName as keyof typeof randomFunc]()
      );
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
};
