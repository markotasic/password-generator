import { checkboxData } from '../utils/options';
import { Checkbox } from './Checkbox';

interface CheckboxContainerProps {
  checkedState: boolean[];
  handleOnChange: (index: number) => void;
}

export const CheckboxContainer = ({
  checkedState,
  handleOnChange,
}: CheckboxContainerProps) => {
  return (
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
  );
};
