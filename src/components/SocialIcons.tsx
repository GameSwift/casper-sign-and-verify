import { ExternalLink } from '@/config'
import { SocialIcon } from './SocialIcon'

export const SocialIcons = () => (
  <div className="flex items-center gap-4">
    <SocialIcon
      href={ExternalLink.twitter}
      iconId="twitter"
      label="twitter"
      className="h-[12px] w-[14px] fill-current"
    />
    <SocialIcon
      href={ExternalLink.discord}
      iconId="discord"
      label="discord"
      className="h-[11px] w-[15px] fill-current"
    />
    <SocialIcon
      href={ExternalLink.telegram}
      iconId="telegram"
      label="telegram"
      className="h-[11px] w-[13px] fill-current"
    />
  </div>
)
