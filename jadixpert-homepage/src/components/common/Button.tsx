import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', className = '' }) => {
    const baseStyles = 'px-4 py-2 rounded focus:outline-none';
    const variantStyles = variant === 'primary' 
        ? 'bg-blue-500 text-white hover:bg-blue-600' 
        : 'bg-gray-300 text-black hover:bg-gray-400';

    return (
        <button 
            className={`${baseStyles} ${variantStyles} ${className}`} 
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;