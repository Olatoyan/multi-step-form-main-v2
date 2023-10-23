function InputField({ label, type, placeholder, id, value, onChange, error }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-[1.4rem] text-denim sma:text-[1.2rem]"
        >
          {label}
        </label>
        {error && (
          <p className="text-[#ee374a] text-[1.4rem] font-bold">{error}</p>
        )}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className={`rounded-[0.8rem] border border-solid  py-[1.15rem] px-6 w-full placeholder:text-grey text-denim text-[1.6rem] sma:text-[1.5rem] font-medium leading-[2.5rem] focus:outline-none  ${
          error ? "border-[#ee374a] " : "border-border-color"
        }`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
