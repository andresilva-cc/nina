import { Text } from './Text'

export function Footer() {
  return (
    <footer className="text-center pt-8 md:pt-12 lg:pt-16">
      <hr className="mb-8 border-gray-700" />
      <Text>
        Developed by <a
          href="https://andresilva.cc/"
          target="_blank"
          className="underline text-amber-500"
        >
          André Silva
        </a>
      </Text>
    </footer>
  )
}