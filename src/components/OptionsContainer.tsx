import { useState } from 'react';
import { generatePassword } from '../utils/generatePassword';
import { MIN_PASSWORD_LENGTH } from '../utils/utils';
import { Button } from './Button';
import { CheckboxContainer } from './CheckboxContainer';
import { PasswordStrength } from './PasswordStrength';
import { Slider } from './Slider';

interface OptionsContainerProps {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export const OptionsContainer = ({ setPassword }: OptionsContainerProps) => {
  const [length, setLength] = useState(MIN_PASSWORD_LENGTH);
  const [checkedState, setCheckedState] = useState([true, false, false, false]);

  const handleOnChange = (checked: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === checked ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const setLengthHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLength(+event.target.value);
  };
  return (
    <div className='password-generator__options'>
      <div className='password-generator__length'>
        <p className='password-generator__length--text'>Character Length</p>
        <span className='password-generator__length--number'>{length}</span>
      </div>
      <Slider length={length} onChange={setLengthHandler} />
      <CheckboxContainer
        checkedState={checkedState}
        handleOnChange={handleOnChange}
      />
      <PasswordStrength passwordLength={length} />
      <Button
        disabled={!checkedState.includes(true)}
        onClick={() => setPassword(generatePassword(checkedState, length))}
      >
        GENERATE &#10140;
      </Button>
    </div>
  );
};
