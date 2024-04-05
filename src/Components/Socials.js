import { memo } from 'react';

import { socialLinks } from '../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Socials = memo(() => {
  return (
    <>
      {socialLinks.map(({ label, Icon, href }) => (
        <a
          aria-label={label}
          className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 sm:-m-3 sm:p-3"
          href={href}
          key={label}>
          <FontAwesomeIcon icon={Icon} className="h-5 w-5 align-baseline sm:h-6 sm:w-6 px-2" />
        </a>
      ))}
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;
