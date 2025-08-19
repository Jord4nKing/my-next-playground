"use client"

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
  };
  
  export function Button({ children, onClick, variant = "primary" }: ButtonProps) {
    const baseStyles = "px-4 py-2 rounded-lg font-medium transition";
  
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    };
  
    return (
      <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
        {children}
      </button>
    );
  }
  