export function Button({ variant = "primary", className = "", ...props }) {
  const baseStyles = "px-4 py-2 rounded-full cursor-pointer transition-all";

  const variantStyles = {
    primary: `${baseStyles} bg-primary text-white shadow hover:shadow-lg`,
    outline: `${baseStyles} border-2 border-primary text-primary hover:bg-primary hover:text-white`,
    success: `$${baseStyles} text-green-600 border-green-600 border-2`,
  };

  const styles = variantStyles[variant] || variantStyles.primary;

  return <button {...props} className={`${styles} ${className}`} />;
}
