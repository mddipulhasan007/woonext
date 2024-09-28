import Image from 'next/image';
import Link from '@components/ui/link';
import cn from 'classnames';
import { siteSettings } from '@settings/site-settings';

import React from "react";

const Logo= ({
  className,
  variant,
  href = siteSettings.logo.href,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn('inline-flex focus:outline-none ', className)}
      {...props}
    >
      {variant === 'black' ? (
        <Image
          src={siteSettings.logo.urlReverse}
          alt={siteSettings.logo.alt}
          loading="eager"
        />
      ) : (
        <Image
          src={siteSettings.logo.url}
          alt={siteSettings.logo.alt}
          loading="eager"
        />
      )}
    </Link>
  );
};

export default Logo;
