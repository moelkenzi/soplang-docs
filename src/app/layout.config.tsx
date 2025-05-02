import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { useTheme } from 'next-themes';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <span className="flex items-center gap-2">
          <Image
            src="/Soplang-01.png"
            width={24}
            height={24}
            alt="Soplang Logo"
            className="block dark:hidden"
          />
          <Image
            src="/Soplang-02.png"
            width={24}
            height={24}
            alt="Soplang Logo"
            className="hidden dark:block"
          />
          <span className="font-medium">Soplang</span>
        </span>
      </>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};
