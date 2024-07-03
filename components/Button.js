// components/Button.js
const Button = ({ text, type = 'primary', styles, ...props }) => {
  const baseStyles = 'py-2 px-4 rounded- text-white';
  const primaryStyles = 'bg-accent hover:bg-accent-dark bg-[#9945FF] ';
  const secondaryStyles = 'bg-transparent border-2 border-[#9945FF] text-accent hover:bg-accent hover:text-white';

  const buttonStyles = type === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <button className={`${baseStyles} ${buttonStyles}  rounded-br-xl rounded-tl-xl  ${styles}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
