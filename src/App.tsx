import { useState } from 'react';
import { InputContainer } from './components/InputContainer';
import { OptionsContainer } from './components/OptionsContainer';

const App = () => {
  const [password, setPassword] = useState('');

  return (
    <div className='password-generator'>
      <h1 className='password-generator__title'>Password Generator</h1>
      <InputContainer password={password} setPassword={setPassword} />
      <OptionsContainer setPassword={setPassword} />
    </div>
  );
};

export default App;
