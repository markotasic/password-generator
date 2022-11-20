import './passwordStrength.scss';

interface PasswordStrengthProps {
  passwordLength: number;
}

export const PasswordStrength = ({ passwordLength }: PasswordStrengthProps) => {
  const isPasswordStrong =
    passwordLength < 8
      ? 'weak'
      : passwordLength < 12
      ? 'medium'
      : passwordLength < 18
      ? 'good'
      : 'strong';

  return (
    <div className='password-generator__password-strength'>
      <p className='password-generator__strength-text'>STRENGTH</p>
      <div
        className={`password-generator__strength-indicator ${isPasswordStrong}`}
      >
        <p>{isPasswordStrong}</p>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};
