export enum Options {
  lowercase = 'lowercase',
  uppercase = 'uppercase',
  number = 'number',
  symbol = 'symbol',
}

export const checkboxData = [
  {
    name: Options.lowercase,
    placeholder: 'Include Lowercase Letters',
  },
  {
    name: Options.uppercase,
    placeholder: 'Include Uppercase Letters',
  },
  {
    name: Options.number,
    placeholder: 'Include Numbers',
  },
  {
    name: Options.symbol,
    placeholder: 'Include Symbols',
  },
];
