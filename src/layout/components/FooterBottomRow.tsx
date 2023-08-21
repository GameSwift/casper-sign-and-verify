import { AppName } from '@/config'
import { getCurrentYear } from '@/utils'

export const FooterBottomRow = () => (
  <div className="layout-section border-t border-t-white/10">
    <p className="text-sm text-gray">
      © {getCurrentYear()}, {AppName}, Inc.
    </p>
  </div>
)
