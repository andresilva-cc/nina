import { Text } from './Text';

export function IntroSection() {
  return (
    <section>
      <Text variant="h1" className="mb-8 text-amber-500">
        Nina
      </Text>
      <div className="flex flex-col gap-4 max-w-prose mx-auto">
        <Text>
          Nina foi resgatada em 27 de outubro de 2014. Ela estava perdida na rua
          quando meu pai, ao sair inesperadamente do trabalho no meio da manhã,
          a encontrou. Pequena, assustada e sem rumo, foi acolhida por ele e
          levada para casa. A primeira foto da galeria mostra Nina em seu
          primeiro dia no novo lar, ainda um pouco desconfiada.
        </Text>
        <Text>
          Desde então, ela se tornou uma parte essencial da nossa família,
          sempre companheira e trazendo alegria para todos. Costumava esperar no
          portão quando alguém saía de casa e nos recebia com muito carinho na
          volta. Foram anos de carinho, companheirismo e lembranças que ficarão
          para sempre.
        </Text>
        <Text>
          Nina viveu pouco mais de 10 anos, enfrentando um câncer com a mesma
          força que sempre teve. Infelizmente, na manhã de 27 de fevereiro de
          2025, ela nos deixou.
        </Text>
        <Text variant="handwritten" className="mt-4">
          Para sempre em nossos corações
        </Text>
      </div>
    </section>
  );
}
