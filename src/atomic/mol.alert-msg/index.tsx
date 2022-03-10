import { CSSProperties } from 'react';
import { Style } from 'util';
import { SpanProps, Span } from '../atm.span';

interface AlertMsgProps extends SpanProps {
  type: 'error' | 'warning' | 'info';
}

export function AlertMsg({type, children, ...rest}: AlertMsgProps) {

  const resolveColorByType: any = (type: 'error' | 'warning' | 'info') => {
    let style
    switch(type) {
      case 'error':
        style = {color: 'red'};
        break;
      case 'warning':
        style = {color: 'orange'};
        break;
      case 'info':
        style = {color: 'blue'};
        break;
    }
    return style
  }

  return (
    <div>
      <Span style={resolveColorByType(type)} {...rest}>{children}</Span>
    </div>
  );
};