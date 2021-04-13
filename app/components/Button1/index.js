import React from 'react';

// components
import { Spinner } from 'react-bootstrap';

// style
import Button from './style';

export default function ButtonComponent({
  text,
  icon,
  center,
  variant,
  size = 'rg',
  className,
  disabled,
  onClick,
  loading,
  children,
}) {
  return (
    <Button
      center={center}
      variant={variant}
      size={size}
      icon={Boolean(icon)}
      className={className}
      disabled={disabled || loading}
      loading={loading}
      onClick={() => onClick && onClick()}
    >
      {loading && <Spinner variant="light" animation="border" />}
      {!loading && icon && icon}
      {children && !loading && children}
      {text && !loading && text}
    </Button>
  );
}
