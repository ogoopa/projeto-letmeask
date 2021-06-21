/* o ButtonProps é a tipagem que fala quais são todas as propriedades do Button. O nome XxxxProps é o padrão dessa tipagem 

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

import { useState } from "react";

export function Button() {
  // o nome da variável let vem de let it change (deixe mudar)
  // let counter = 0;

  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <button onClick={increment}>
      {counter}
    </button>
  )
}