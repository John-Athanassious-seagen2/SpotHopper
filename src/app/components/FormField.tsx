interface FormFieldProps {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  name: string;
  required?: boolean;
}

export function FormField({ label, type = 'text', name, required = false }: FormFieldProps) {
  const baseInputStyles = "w-full bg-input border border-border px-4 py-3 text-foreground transition-colors duration-200 focus:outline-none focus:border-accent";
  
  return (
    <div className="space-y-2">
      <label 
        htmlFor={name} 
        className="block uppercase tracking-wider text-sm text-muted-foreground"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={4}
          className={baseInputStyles}
          style={{ fontFamily: "'Inter', sans-serif" }}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          className={baseInputStyles}
          style={{ fontFamily: "'Inter', sans-serif" }}
        />
      )}
    </div>
  );
}
