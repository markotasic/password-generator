export const getPasswordStrength = (passwordLength: number) => {
  switch (true) {
    case passwordLength < 8:
      return 'weak';
    case passwordLength < 12:
      return 'medium';
    case passwordLength < 16:
      return 'good';
    case passwordLength >= 16:
      return 'strong';
  }
};
