import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function useTheme() {
  const value = useContext(ThemeContext)

  return value;
}

/* para o botão do tema, inserir na página da Home o seguinte botão: */
/* <button onClick={toggleTheme}>Toggle</button> */