/* o ButtonProps é a tipagem que fala quais são todas as propriedades do Button. O nome XxxxProps é o padrão dessa tipagem 
  // o nome da variável let vem de let it change (deixe mudar)
type ButtonProps = {
  text?: string;
}

export function Button(props: ButtonProps) {
  return (
    <button>{props.text || 'Default'}</button> 
    // deve se abrir chaves para chamar qualquer recurso Js ou Tsx dentro do HTML 
  )
}

esse tipo de export é chamado named export. é possível fazer o export default, no final do código, inserindo um export defalt Button, por exemplo, porém não é tão indicado pois pode gerar conflitos caso o nome do componente seja alterado */

import { ButtonHTMLAttributes } from "react";

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <button 
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  )
}