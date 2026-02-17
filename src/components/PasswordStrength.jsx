

const PasswordStrength = ({ password }) => {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[!@#$%^&*]/.test(password)) score++;

  let strength = "Weak";
  if (score === 2 || score === 3) strength = "Medium";
  if (score === 4) strength = "Strong";

  return (
    <div className={`strength ${strength.toLowerCase()}`}>
      Strength: {strength}
    </div>
  );
};

export default PasswordStrength;
