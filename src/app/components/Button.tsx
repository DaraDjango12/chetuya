// components/Button.tsx
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
import { ReactNode } from 'react';


interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
}

const Button: React.FC<CustomButtonProps> = ({ children, ...rest }) => {
  return (
    <ChakraButton
      
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
