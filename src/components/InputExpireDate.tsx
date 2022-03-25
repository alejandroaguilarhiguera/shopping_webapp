import validateOnlyNumbers from '../utils/validateOnlyNumbers';

interface Prop {
  value?: string;
  onChange: (value?: string) => void;
}

export const InputExpireDate = (prop: Prop): JSX.Element => {
  const { value = '', onChange } = prop;

  return (
    <div className="flex">
      <input
        className="absolute w-40 h-10 pl-3 text-transparent bg-transparent border-none outline-none"
        type="text"
        placeholder="MM / YYYY"
        maxLength={6}
        value={value}
        onKeyPress={(e) => validateOnlyNumbers(e)}
        onChange={(e) => onChange(e?.target?.value || '')}
      />

      <div>
        <div className="content-center w-40 h-10 text-center bg-white border-2 rounded">
          {value.substring(0, 2)}
          {value.length >= 2 ? ' / ' : ''}
          {value.substring(2, 6)}
        </div>
      </div>

    </div>
  );
};

export default InputExpireDate;
