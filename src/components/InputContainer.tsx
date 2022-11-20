import { useLayoutEffect, useRef, useState } from 'react';
import { CopyIcon } from '../icons';

interface InputContainerProps {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export const InputContainer = ({
  password,
  setPassword,
}: InputContainerProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [leftDistance, setLeftDistance] = useState<number>();
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const copyPassword = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setShowTooltip(true);

    setTimeout(() => setShowTooltip(false), 2500);
  };

  useLayoutEffect(() => {
    // Calculate distance from right edge for positioning tooltip
    if (!tooltipRef.current) return;
    const leftDistance =
      document.documentElement.clientWidth -
      tooltipRef.current.getBoundingClientRect().right -
      10;
    leftDistance < 0 && setLeftDistance(leftDistance);
  }, [showTooltip]);

  return (
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
  );
};
