/**
 * WanderWorld – Contact Page
 *
 * Interactive contact information with icons and clickable links.
 * Styled via shared Contact* components from styles/index.js.
 */

import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdSchedule,
} from 'react-icons/md';
import {
  SiX,
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
  SiTiktok,
  SiPinterest,
} from 'react-icons/si';
import {
  ContactMain,
  ContactTitle,
  ContactContainer,
  ContactSectionTitle,
  ContactText,
  ContactItem,
  ContactIcon,
  ContactLink,
  ContactSocialGrid,
  ContactHint,
  ContactSocialLink,
} from './ContactStyles';

const SOCIAL_LINKS = [
  { name: 'X', icon: SiX, url: 'https://x.com/wandeworld', handle: '@wandeworld' },
  { name: 'Facebook', icon: SiFacebook, url: 'https://facebook.com/wandeworld', handle: '@wandeworld' },
  { name: 'Instagram', icon: SiInstagram, url: 'https://instagram.com/wandeworld', handle: '@wandeworld' },
  { name: 'LinkedIn', icon: SiLinkedin, url: 'https://linkedin.com/company/wandeworld', handle: '@wandeworld' },
  { name: 'YouTube', icon: SiYoutube, url: 'https://youtube.com/@wandeworld', handle: '@wandeworld' },
  { name: 'TikTok', icon: SiTiktok, url: 'https://tiktok.com/@wandeworld', handle: '@wandeworld' },
  { name: 'Pinterest', icon: SiPinterest, url: 'https://pinterest.com/wandeworld', handle: '@wandeworld' },
];

export default function Contact() {
  const email = 'wandeworld@gmail.com';
  const phone = '+911234567898';
  const address = '123 Main Street, Anytown, USA';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <ContactMain>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactContainer>
        <ContactItem>
          <ContactIcon>
            <MdEmail aria-hidden />
          </ContactIcon>
          <div>
            <ContactSectionTitle>Email</ContactSectionTitle>
            <ContactText>
              <ContactLink href={`mailto:${email}`}>{email}</ContactLink>
            </ContactText>
          </div>
        </ContactItem>

        <ContactItem>
          <ContactIcon>
            <MdPhone aria-hidden />
          </ContactIcon>
          <div>
            <ContactSectionTitle>Phone</ContactSectionTitle>
            <ContactText>
              <ContactLink href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</ContactLink>
            </ContactText>
          </div>
        </ContactItem>

        <ContactItem>
          <ContactIcon>
            <MdLocationOn aria-hidden />
          </ContactIcon>
          <div>
            <ContactSectionTitle>Address</ContactSectionTitle>
            <ContactText>
              <ContactLink href={mapsUrl} target="_blank" rel="noopener noreferrer">
                {address}
              </ContactLink>
              <ContactHint> — Opens in Maps</ContactHint>
            </ContactText>
          </div>
        </ContactItem>

        <ContactItem>
          <ContactIcon>
            <MdSchedule aria-hidden />
          </ContactIcon>
          <div>
            <ContactSectionTitle>Hours</ContactSectionTitle>
            <ContactText>Mon-Fri: 9:00 AM - 5:00 PM</ContactText>
          </div>
        </ContactItem>

        <ContactSectionTitle>Follow Us</ContactSectionTitle>
        <ContactSocialGrid>
          {SOCIAL_LINKS.map(({ name, icon: SocialIcon, url, handle }) => (
            <ContactSocialLink
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={`${name}: ${handle}`}
            >
              <SocialIcon size={18} aria-hidden />
              {name}
            </ContactSocialLink>
          ))}
        </ContactSocialGrid>
      </ContactContainer>
    </ContactMain>
  );
}
