// components/Button.js
const Button = ({ text, type = 'primary', ...props }) => {
    const baseStyles = 'py-2 px-4 rounded-lg text-white';
    const primaryStyles = 'bg-accent hover:bg-accent-dark';
    const secondaryStyles = 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white';
  
    const buttonStyles = type === 'primary' ? primaryStyles : secondaryStyles;
  
    return (
      <button className={`${baseStyles} ${buttonStyles}`} {...props}>
        {text}
      </button>
    );
  };
  
  export default Button;
  