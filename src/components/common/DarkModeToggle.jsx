import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeToggle = () => {
  // Always start with dark mode enabled
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // On mount, apply dark mode (ignore any saved preference)
    applyTheme(true);
  }, []);

  const applyTheme = (isDark) => {
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    // Save user preference on toggle only
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    applyTheme(newMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 z-50 p-3 dark:bg-white bg-black dark:text-gray-800 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-700 transform"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
};

export default DarkModeToggle;
