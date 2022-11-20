import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from '../../utils/utils';
import './slider.scss';

interface SliderProps {
  length: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Slider = ({ length, onChange }: SliderProps) => {
  const convertedWidth =
    ((length - MIN_PASSWORD_LENGTH) /
      (MAX_PASSWORD_LENGTH - MIN_PASSWORD_LENGTH)) *
    100;

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
          background:
            'linear-gradient(to right, #a5ffaf 0%, #a5ffaf ' +
            convertedWidth +
            '%, #18171f ' +
            convertedWidth +
            '%, #18171f 100%)',
        }}
      />
    </div>
  );
};
