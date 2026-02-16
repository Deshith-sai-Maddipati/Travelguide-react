import styled from 'styled-components';

const ContactMain = styled.div`
  max-width: 800px;
  margin: ${({ theme }) => theme.spacing['3xl']} auto;
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    margin: ${({ theme }) => theme.spacing.lg} auto;
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    margin: ${({ theme }) => theme.spacing.md} auto;
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const ContactTitle = styled.h1`
  color: ${({ theme }) => theme.colors.header};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.35rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const ContactContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const ContactSectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ContactText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ContactSocial = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

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
