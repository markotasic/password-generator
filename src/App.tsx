import { useLayoutEffect, useRef, useState } from 'react';
import { Checkbox } from './components/checkbox/Checkbox';
import { checkboxData } from './utils/options';
import { Slider } from './components/slider/Slider';
import { CopyIcon } from './icons';
import { generatePassword } from './utils/generatePassword';
import { MIN_PASSWORD_LENGTH } from './utils/utils';
import { PasswordStrength } from './components/passwordStrength/PasswordStrength';
import { Button } from './components/button/Button';

const App = () => {
  const [length, setLength] = useState(MIN_PASSWORD_LENGTH);
  const [password, setPassword] = useState('');
  const [checkedState, setCheckedState] = useState([true, false, false, false]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [leftDistance, setLeftDistance] = useState<number>();
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const handleOnChange = (checked: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === checked ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const setLengthHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLength(+event.target.value);
  };

  useLayoutEffect(() => {
    // Calculate distance from right edge for positioning alert
    if (!tooltipRef.current) return;
    const leftDistance =
      document.documentElement.clientWidth -
      tooltipRef.current.getBoundingClientRect().right -
      10;
    leftDistance < 0 && setLeftDistance(leftDistance);
  }, [showTooltip]);

  const copyPassword = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setShowTooltip(true);

    setTimeout(() => setShowTooltip(false), 2500);
  };

  return (
    <div className='password-generator'>
      <h1 className='password-generator__title'>Password Generator</h1>
      <div className='password-generator__input-container'>
        <input
          value={password}
          className='password-generator__input'
          type='text'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='P4$5W0rD!'
        />

        <div className='password-generator__copy-icon' onClick={copyPassword}>
          <CopyIcon />
          {showTooltip && (
            <>
              <div
                style={{ left: `${leftDistance}px` }}
                className='password-generator__copy-icon--alert'
                ref={tooltipRef}
              >
                <p>Copied to clipboard!</p>
              </div>
              <div className='password-generator__copy-icon--oblique' />
            </>
          )}
        </div>
      </div>
      <div className='password-generator__options'>
        <div className='password-generator__length'>
          <p className='password-generator__length--text'>Character Length</p>
          <span className='password-generator__length--number'>{length}</span>
        </div>

        <Slider length={length} onChange={setLengthHandler} />

        <ul className='password-generator__checkbox-container'>
          {checkboxData.map(({ name, placeholder }, index) => (
            <li key={index}>
              <Checkbox
                placeholder={placeholder}
                name={name}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
              />
            </li>
          ))}
        </ul>
        <PasswordStrength passwordLength={length} />
        <Button
          disabled={!checkedState.includes(true)}
          onClick={() => setPassword(generatePassword(checkedState, length))}
        >
          GENERATE &#10140;
        </Button>
      </div>
    </div>
  );
};

export default App;
