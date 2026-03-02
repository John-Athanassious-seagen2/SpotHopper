interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  size?: 'default' | 'large';
}

export function CTAButton({ children, variant = 'primary', onClick, size = 'default' }: CTAButtonProps) {
  const baseStyles = "font-semibold transition-all duration-200 rounded-lg inline-flex items-center justify-center";
  
  const sizeStyles = {
    default: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };
  
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
    secondary: "bg-secondary/60 text-secondary-foreground hover:bg-secondary/80 border border-border backdrop-blur-sm",
    outline: "bg-transparent text-foreground border border-border hover:border-primary hover:text-primary"
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {children}
    </button>
  );
}