import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  download?: boolean;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  className = '',
  download,
  href,
  type = 'button',
}) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-teal-500 hover:bg-teal-600 text-white',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'text-blue-600 hover:bg-blue-50',
  };

  const sizes = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-5 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  const baseClasses = 'rounded-md font-medium transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50';
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const buttonMotion = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        onClick={onClick}
        className={buttonClasses}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        variants={buttonMotion}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {icon && <span>{icon}</span>}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonMotion}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;