import { Image, Link, SocialIcons } from '@/components'
import { InternalLink, ExternalLink } from '@/config'
import Ships from '@/public/images/shared/footer-ships.webp'
import Logo from '@/public/images/shared/logo-full.webp'
import { FooterLinksColumn } from './FooterLinksColumn'

const FOOTER_LINKS = [
  [
    {
      label: 'Home',
      to: ExternalLink.landingPage
    },
    {
      label: 'Apply us',
      to: ExternalLink.apply
    },
    {
      label: 'Careers',
      to: ExternalLink.careers
    }
  ],
  [
    {
      label: 'Litepaper',
      to: ExternalLink.litepaper
    },
    {
      label: 'Privacy policy',
      to: ExternalLink.privacyPolicy
    },
    {
      label: 'User terms',
      to: ExternalLink.termsOfUse
    }
  ]
]

export const FooterMainRow = () => (
  <div className="layout-section border-t border-t-white/10 py-10">
    <div className="flex gap-6 py-5 max-md:flex-col max-md:items-stretch max-md:py-4">
      <div className="flex flex-1 flex-col gap-4 max-md:flex-row max-md:flex-wrap max-md:justify-between">
        <Link href={InternalLink.home}>
          <Image
            src={Logo}
            alt="logo"
            width={161}
            height={33}
          />
        </Link>
        <p className="max-w-[450px] text-sm text-gray max-md:order-3">
          The ultimate web3 gaming platform, launcher, and infrastructure.
          Playing and building Web3 games made easy.
        </p>
        <SocialIcons />
      </div>

      <div className="flex flex-1 items-center justify-between gap-6">
        <div className="flex items-start gap-12 max-md:flex-col max-md:gap-6">
          {FOOTER_LINKS.map((links, index) => (
            <FooterLinksColumn
              links={links}
              key={index}
            />
          ))}
        </div>
        <div className="relative -my-10 w-auto flex-1 self-stretch max-lg:hidden">
          <Image
            src={Ships}
            alt=""
            fill
            className="h-auto w-auto object-contain"
          />
        </div>
      </div>
    </div>
  </div>
)
