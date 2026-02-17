
const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="theme-toggle">
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeToggle;
