/**
 * WanderWorld – Contact Page
 *
 * Static contact information: email, phone, address, hours, and social links.
 * Styled via shared Contact* components from styles/index.js.
 */

import {
  ContactMain,
  ContactTitle,
  ContactContainer,
  ContactSectionTitle,
  ContactText,
  ContactSocial,
} from '../styles';

export default function Contact() {
  return (
    <ContactMain>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactContainer>
        <ContactSectionTitle>Email</ContactSectionTitle>
        <ContactText>wandeworld@gmail.com</ContactText>

        <ContactSectionTitle>Phone Number</ContactSectionTitle>
        <ContactText>+91 9876543210</ContactText>

        <ContactSectionTitle>Address</ContactSectionTitle>
        <ContactText>123, Main Street, Anytown, USA</ContactText>

        <ContactSectionTitle>Hours</ContactSectionTitle>
        <ContactText>9:00 AM to 5:00 PM</ContactText>

        <ContactSectionTitle>Social Media</ContactSectionTitle>
        <ContactSocial>Twitter: @wandeworld</ContactSocial>
        <ContactSocial>Facebook: @wandeworld</ContactSocial>
        <ContactSocial>Instagram: @wandeworld</ContactSocial>
        <ContactSocial>LinkedIn: @wandeworld</ContactSocial>
        <ContactSocial>YouTube: @wandeworld</ContactSocial>
        <ContactSocial>TikTok: @wandeworld</ContactSocial>
        <ContactSocial>Pinterest: @wandeworld</ContactSocial>
      </ContactContainer>
    </ContactMain>
  );
}
