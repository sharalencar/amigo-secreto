import { realizarSorteio } from "./realizarSorteio";

describe("sorteio", () => {
  test("cada participante não sorteie o prórpio nome", () => {
    const participantes = [
      "Namjoon",
      "SeokJin",
      "Agust D",
      "J-Hope",
      "Jimin",
      "V",
      "JungKook",
    ];
    const sorteio = realizarSorteio(participantes);
    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
