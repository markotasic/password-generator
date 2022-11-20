import { getPasswordStrength } from '../utils/getPasswordStrength';

interface PasswordStrengthProps {
  passwordLength: number;
}

export const PasswordStrength = ({ passwordLength }: PasswordStrengthProps) => {
  return (
    <div className='password-generator__password-strength'>
      <p className='password-generator__strength-text'>STRENGTH</p>
      <div
        className={`password-generator__strength-indicator ${getPasswordStrength(
          passwordLength
        )}`}
      >
        <p>{getPasswordStrength(passwordLength)}</p>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};
