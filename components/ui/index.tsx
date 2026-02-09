import React from 'react';
import { LucideIcon } from 'lucide-react';

// =====================================================
// BUTTON COMPONENT
// =====================================================

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon: Icon,
  iconPosition = 'right',
  onClick,
  href,
  disabled = false,
  loading = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 disabled:bg-gray-300',
    secondary: 'bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500 disabled:bg-gray-300',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500 disabled:border-gray-300 disabled:text-gray-300',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-400',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const className = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `.trim().replace(/\s+/g, ' ');
  
  const content = (
    <>
      {loading ? (
        <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : Icon && iconPosition === 'left' ? (
        <Icon className="w-5 h-5 mr-2" />
      ) : null}
      
      {children}
      
      {Icon && iconPosition === 'right' && !loading ? (
        <Icon className="w-5 h-5 ml-2" />
      ) : null}
    </>
  );
  
  if (href && !disabled) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }
  
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={className}
    >
      {content}
    </button>
  );
};

// =====================================================
// CARD COMPONENT
// =====================================================

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'outline' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  hover = false,
}) => {
  const variants = {
    default: 'bg-white border border-gray-200',
    gradient: 'bg-gradient-to-br from-primary-600 to-accent-600 text-white',
    outline: 'border-2 border-gray-300 bg-white',
    elevated: 'bg-white shadow-medium',
  };
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const hoverEffect = hover ? 'transition-transform duration-200 hover:scale-105 hover:shadow-large' : '';
  
  return (
    <div className={`rounded-2xl ${variants[variant]} ${paddings[padding]} ${hoverEffect} ${className}`}>
      {children}
    </div>
  );
};

// =====================================================
// SECTION WRAPPER
// =====================================================

interface SectionProps {
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'gradient' | 'brand';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  background = 'white',
  padding = 'md',
  id,
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-rose-50 via-white to-indigo-50',
    brand: 'bg-gradient-to-br from-primary-600 to-accent-600 text-white',
  };
  
  const paddings = {
    sm: 'py-12',
    md: 'py-20',
    lg: 'py-28',
    xl: 'py-36',
  };
  
  return (
    <section id={id} className={`${backgrounds[background]} ${paddings[padding]} px-6`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

// =====================================================
// SECTION HEADER
// =====================================================

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

// =====================================================
// FEATURE CARD
// =====================================================

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: 'primary' | 'accent' | 'success';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  iconColor = 'primary',
}) => {
  const iconColors = {
    primary: 'bg-primary-100 text-primary-600',
    accent: 'bg-accent-100 text-accent-600',
    success: 'bg-success-100 text-success-600',
  };
  
  return (
    <Card hover>
      <div className={`w-12 h-12 rounded-xl ${iconColors[iconColor]} flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </Card>
  );
};

// =====================================================
// TESTIMONIAL CARD
// =====================================================

interface TestimonialProps {
  quote: string;
  author: string;
  context: string;
  avatar?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  context,
  avatar,
}) => {
  return (
    <Card variant="elevated" className="h-full">
      <div className="flex flex-col h-full">
        <p className="text-gray-700 mb-6 italic flex-grow">
          "{quote}"
        </p>
        <div className="flex items-center">
          {avatar ? (
            <img src={avatar} alt={author} className="w-12 h-12 rounded-full mr-4" />
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
              <span className="text-primary-600 font-semibold">
                {author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}
          <div>
            <p className="font-semibold text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">{context}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

// =====================================================
// PRICING CARD
// =====================================================

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  onCtaClick?: () => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  cta,
  highlighted = false,
  onCtaClick,
}) => {
  return (
    <Card
      variant={highlighted ? 'gradient' : 'default'}
      className={highlighted ? 'transform scale-105 shadow-xl' : ''}
    >
      <div className={highlighted ? 'text-white' : ''}>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className={`text-sm mb-4 ${highlighted ? 'text-rose-100' : 'text-gray-600'}`}>
          {description}
        </p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Free" && price !== "Custom" && (
            <span className={highlighted ? 'text-rose-100' : 'text-gray-600'}> /month</span>
          )}
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <svg 
                className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 ${highlighted ? 'text-white' : 'text-success-600'}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button
          variant={highlighted ? 'outline' : 'primary'}
          fullWidth
          onClick={onCtaClick}
        >
          {cta}
        </Button>
      </div>
    </Card>
  );
};

// =====================================================
// BADGE
// =====================================================

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'info';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
}) => {
  const variants = {
    primary: 'bg-primary-100 text-primary-800',
    success: 'bg-success-100 text-success-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
  };
  
  return (
    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};

// =====================================================
// STAT CARD
// =====================================================

interface StatProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
}

export const Stat: React.FC<StatProps> = ({
  value,
  label,
  icon: Icon,
  trend,
}) => {
  return (
    <Card variant="elevated">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
          <p className="text-gray-600">{label}</p>
          {trend && (
            <p className={`text-sm mt-2 ${trend.positive ? 'text-success-600' : 'text-red-600'}`}>
              {trend.positive ? '↑' : '↓'} {trend.value}
            </p>
          )}
        </div>
        {Icon && (
          <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary-600" />
          </div>
        )}
      </div>
    </Card>
  );
};

