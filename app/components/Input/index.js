import React from 'react';

// components
import { Form } from 'react-bootstrap';

// styles
import Container from './style';

export default function Input({
  type,
  as = 'input',
  label,
  name,
  placeholder,
  options,
  value,
  onChange,
  error,
  icon,
  className,
  containerClassName,
}) {
  return (
    <Container label={label} className={containerClassName}>
      {icon && <div className="input-icon">{icon}</div>}
      {label && <label className="mr-3">{label}</label>}

      <Form.Group>
        {as === 'select' ? (
          <Form.Control
            as={as}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            className={className}
          >
            {as === 'select' &&
              options.map(o => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
          </Form.Control>
        ) : (
          <Form.Control
            as={as}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            className={className}
          />
        )}

        {error && <Form.Text className="err-msg">{error}</Form.Text>}
      </Form.Group>
    </Container>
  );
}
