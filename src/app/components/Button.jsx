export default function Button({
  isNav = false,
  type = 'primary2',
  children,
  onClick,
  disabled = false,
  className = '',
}) {
  const typeClasses = {
    primary1: 'bg-lightgreen text-green border-lightgreen',
    primary2: 'bg-foreground text-lightgreen border-foreground',
    secondary1: 'bg-transparent text-lightgreen border-lightgreen',
    secondary2:
      'bg-transparent text-foreground border-foreground',
  };

  const sizeClasses = isNav ? 'py-2 px-6 lg:py-2 lg:px-7' : 'py-2 px-6 lg:py-3 lg:px-7';

  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      aria-label={children}
      className={`transition-transform duration-200 ease-in-out hover:scale-95
        ${sizeClasses} border-2 ${
        typeClasses[type] || typeClasses.primary1
      } 
        ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      {children}
    </button>
  );
}
