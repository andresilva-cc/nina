import { Text } from './Text';

export function Footer() {
  return (
    <footer className="text-center pt-8 md:pt-12 lg:pt-16">
      <hr className="mb-8 border-gray-700" />
      <Text>
        Desenvolvido por{' '}
        <a
          href="https://andresilva.cc/"
          target="_blank"
          className="underline text-amber-500 hover:opacity-80 active:opacity-60 transition-opacity"
        >
          André Silva
        </a>
      </Text>
    </footer>
  );
}
