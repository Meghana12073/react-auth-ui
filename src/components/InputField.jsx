
const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  placeholder,
  togglePassword,
  showPassword
}) => {
  return (
    <div className="input-group">
      <label>{label}</label>

      <div className="input-wrapper">
        <input
          type={showPassword ? "text" : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />

        {togglePassword && (
          <span className="toggle" onClick={togglePassword}>
            {showPassword ? "Hide" : "Show"}
          </span>
        )}
      </div>

      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default InputField;
