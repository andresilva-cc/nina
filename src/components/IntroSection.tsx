import { Text } from './Text'

export function IntroSection() {
  return (
    <section>
      <Text variant="h1" className="mb-8 text-amber-500">Nina</Text>
      <Text className="max-w-prose mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      <Text variant="handwritten" className="mt-8">Lorem ipsum dolor sit amet</Text>
    </section>
  )
}