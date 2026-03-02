interface StampedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function StampedButton({ children, variant = 'primary', onClick }: StampedButtonProps) {
  const baseStyles = "px-6 py-3 uppercase tracking-wider transition-all duration-200 border w-full sm:w-auto";
  
  const variantStyles = {
    primary: "bg-primary text-primary-foreground border-primary hover:bg-primary/90",
    secondary: "bg-transparent text-accent border-accent hover:bg-accent/10"
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} font-['Barlow_Condensed'] text-sm`}
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      {children}
    </button>
  );
}