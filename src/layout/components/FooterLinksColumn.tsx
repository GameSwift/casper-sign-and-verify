import { LinkProps } from 'next/link'
import { Link, Separator } from '@/components'

type Link = {
  label: string
  to: LinkProps['href']
}

type FooterLinksColumnProps = {
  links: Array<Link>
}

export const FooterLinksColumn: React.FC<FooterLinksColumnProps> = ({
  links
}) => (
  <div className="flex flex-1 flex-col gap-4">
    <Separator className="w-4 bg-white/10" />
    <div className="flex flex-col gap-4 max-md:flex-row max-md:flex-wrap">
      {links.map(({ to, label }) => (
        <Link
          href={to}
          key={label}
          className="whitespace-nowrap text-sm capitalize text-gray hover:text-white"
        >
          {label}
        </Link>
      ))}
    </div>
  </div>
)
