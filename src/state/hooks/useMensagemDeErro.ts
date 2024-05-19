import { useRecoilValue } from "recoil";
import { ErroState } from "../atom";

export const useMensagemDeErro = () => {
  const mensagem = useRecoilValue(ErroState);
  return mensagem;
};
