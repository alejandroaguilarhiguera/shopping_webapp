import { useState } from 'react';
import validateOnlyNumbers from '../utils/validateOnlyNumbers';

interface Prop {
  size: number;
  value?: string;
  onChange?: (value: string) => void;
}

export const InputPhoneCode = (prop: Prop): JSX.Element => {
  const { size, value = '', onChange } = prop;
  const [code, setCode] = useState(value);

  function onPhoneChanged(element: string) {
    setCode(element);
    onChange && onChange(element);
  }

  return (
    <div className="flex">
      <input
        className="absolute h-10 pl-3 bg-transparent border-none outline-none w-80"
        style={{ letterSpacing: '2.1em' }}
        type="text"
        maxLength={size}
        value={code}
        onKeyPress={(e) => validateOnlyNumbers(e)}
        onChange={(e) => onPhoneChanged(e.target.value)}
      />

      {/* {(Array(size)).fill().map((_, index) => (
        //  style={{ 'padding-right': '0.1em' }}
        <div>
          <div className={`w-10 h-10 rounded border-2 border-${index < code.length ? 'gray' : 'blue'}-900`} />
        </div>
      ))} */}
    </div>
  );
};

export default InputPhoneCode;
