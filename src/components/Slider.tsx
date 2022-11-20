import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from '../utils/utils';

interface SliderProps {
  length: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Slider = ({ length, onChange }: SliderProps) => {
  const progressWidth =
    ((length - MIN_PASSWORD_LENGTH) /
      (MAX_PASSWORD_LENGTH - MIN_PASSWORD_LENGTH)) *
    100;

  const progressBarStyle =
    'linear-gradient(to right, #a5ffaf 0%, #a5ffaf ' +
    progressWidth +
    '%, #18171f ' +
    progressWidth +
    '%, #18171f 100%)';

  return (
    <div className='slider'>
      <input
        className='slider__input'
        type='range'
        min={MIN_PASSWORD_LENGTH}
        max={MAX_PASSWORD_LENGTH}
        step='1'
        value={length}
        onChange={onChange}
        style={{
          background: progressBarStyle,
        }}
      />
    </div>
  );
};
