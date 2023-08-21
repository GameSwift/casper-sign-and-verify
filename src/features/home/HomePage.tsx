import { SignAndVerifyMessageForm } from './components'

export const HomePage = () => (
  <section className="layout-section items-center gap-8 text-center">
    <h1 className="font-extrabold font-main text-4xl max-sm:text-3xl">
      <span className="text-primary">Casper network</span> sign & verify
    </h1>
    <SignAndVerifyMessageForm />
  </section>
)
