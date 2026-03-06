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
import { translations } from '../../data/translations';
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

const { contact } = translations;

export default function Contact() {
  const { email, phone, address, hours } = contact.info;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <ContactMain>
      <ContactTitle>{contact.title}</ContactTitle>
      <ContactContainer>
        <ContactItem>
          <ContactIcon>
            <MdEmail aria-hidden />
          </ContactIcon>
          <div>
            <ContactSectionTitle>{contact.sections.email}</ContactSectionTitle>
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
            <ContactSectionTitle>{contact.sections.phone}</ContactSectionTitle>
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
            <ContactSectionTitle>{contact.sections.address}</ContactSectionTitle>
            <ContactText>
              <ContactLink href={mapsUrl} target="_blank" rel="noopener noreferrer">
                {address}
              </ContactLink>
              <ContactHint> {contact.mapsHint}</ContactHint>
            </ContactText>
          </div>
        </ContactItem>

        <ContactItem>
          <ContactIcon>
            <MdSchedule aria-hidden />
          </ContactIcon>
          <div>
            <ContactSectionTitle>{contact.sections.hours}</ContactSectionTitle>
            <ContactText>{hours}</ContactText>
          </div>
        </ContactItem>

        <ContactSectionTitle>{contact.followUs}</ContactSectionTitle>
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
