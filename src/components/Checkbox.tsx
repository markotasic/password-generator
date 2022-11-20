interface CheckboxProps {
  name: string;
  placeholder: string;
  checked: boolean;
  onChange: (event: React.FormEvent<HTMLLabelElement>) => void;
}

export const Checkbox = ({
  name,
  placeholder,
  checked,
  onChange,
}: CheckboxProps) => {
  return (
    <div>
      <label className='container' onChange={onChange}>
        {placeholder}
        <input defaultChecked={checked} type='checkbox' name={name} />
        <span className='checkmark'></span>
      </label>
    </div>
  );
};
