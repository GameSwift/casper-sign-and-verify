import { Link, Image } from '@/components'
import { InternalLink } from '@/config'
import Logo from '@/public/images/shared/logo.webp'
import { HeaderMenu } from './HeaderMenu'

export const Header = () => (
  <header className="layout-container sticky top-0 z-[1] border-b border-b-white/10 bg-black/5 backdrop-blur-xl">
    <div className="layout-section">
      <nav className="flex items-center gap-4">
        <Link
          className="z-[1001] text-4xl"
          href={InternalLink.home}
        >
          <Image
            src={Logo}
            alt="Logo"
            width={48}
            height={34}
          />
        </Link>
        <HeaderMenu />
      </nav>
    </div>
  </header>
)
