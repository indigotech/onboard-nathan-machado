import React from 'react';

type AlertType = 'error' | 'warning' | 'info';
interface AlertMsgProps extends React.BaseHTMLAttributes<HTMLSpanElement> {
  type: AlertType;
}

export function AlertMsg({type, children, ...rest}: AlertMsgProps) {

  const colorByType: Record<AlertType, { color: string }> = {
    error: { color: 'red' },
    warning: { color: 'orange' },
    info: { color: 'blue' },
  };

  return (
    <div>
      <span style={colorByType[type]} {...rest}>{children}</span>
    </div>
  );
};