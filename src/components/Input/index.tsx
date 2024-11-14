import clsx from 'clsx';

type InputProps = {
  label: string;
  labelClassName?: string;
  value?: string | number | readonly string[] | undefined;
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
  currency?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputProps) {
  const {
    label,
    labelClassName,
    value,
    className,
    placeholder = '0.00',
    readOnly,
    currency,
    onChange,
  } = props;

  return (
    <div>
      <label
        className={clsx(
          'block text-sm/6 font-medium text-stormy-gray',
          labelClassName
        )}
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          id="price"
          name="price"
          type="text"
          placeholder={placeholder}
          value={value}
          readOnly={readOnly}
          onChange={onChange}
          className={clsx(
            `block w-full rounded-md border-0 py-3 pl-7 pr-20 text-stormy-gray ring-1 ring-inset ring-cloudy-gray placeholder:text-cloudy-gray focus:ring-2 focus:ring-inset focus:ring-cloudy-gray focus-visible:outline-none sm:text-sm/6`,
            className
          )}
        />
        {currency && (
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center pl-3">
            <span className="text-stormy-gray sm:text-sm">{currency}</span>
          </div>
        )}
      </div>
    </div>
  );
}
