import { useRecoilValue, useSetRecoilState } from "recoil";
import { ErroState, listaDeParticipantesState } from "../atom";

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaDeParticipantesState);
  const lista = useRecoilValue(listaDeParticipantesState);
  const setErro = useSetRecoilState(ErroState);
  return (nomeDoParticipante: string) => {
    if (lista.includes(nomeDoParticipante)) {
      setErro("Nomes duplicados não são permitidos");
      setTimeout(() => {
        setErro("");
      }, 5000);
      return;
    }
    return setLista((listaAtual) => [...listaAtual, nomeDoParticipante]);
  };
};
