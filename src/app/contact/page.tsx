import {
  Button,
  Column,
  Heading,
  Icon,
  Input,
  Meta,
  Row,
  Schema,
  Text,
  Textarea,
} from "@once-ui-system/core";
import { baseURL, contact, person, social } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(contact.title)}`,
    path: contact.path,
  });
}

export default function Contact() {
  const essentialSocials = social.filter((item) => item.essential);
  const toc = [
    { title: "Introduction", id: "contact-intro", display: true, items: [] },
    { title: "Formulaire", id: "contact-formulaire", display: true, items: [] },
    { title: "Coordonnées", id: "contact-coordonnees", display: true, items: [] },
  ];

  return (
    <Column maxWidth="m" paddingY="12" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={contact.title}
        description={contact.description}
        path={contact.path}
        image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${contact.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column id="contact-intro" gap="m" maxWidth="l">
        <Heading variant="display-strong-m">Contact</Heading>
        <Text variant="body-default-xl" onBackground="neutral-weak" wrap="balance">
          Une question ? Un besoin spécifique ? Notre équipe est à votre disposition.
        </Text>
      </Column>

      <Row gap="16" fillWidth s={{ direction: "column" }}>
        <Column
          id="contact-formulaire"
          flex={2}
          padding="xl"
          radius="l"
          background="surface"
          border="neutral-alpha-weak"
          gap="16"
        >
          <Heading variant="heading-strong-l">Écrivez-nous</Heading>
          <form
            action="mailto:contact@nexus.mr"
            method="post"
            encType="text/plain"
            style={{ width: "100%" }}
          >
            <Column gap="12">
              <Row gap="12" fillWidth s={{ direction: "column" }}>
                <Column gap="4" fillWidth>
                  <Text variant="label-default-s">Nom</Text>
                  <Input id="name" name="Nom" placeholder="Votre nom" required />
                </Column>
                <Column gap="4" fillWidth>
                  <Text variant="label-default-s">Email</Text>
                  <Input
                    id="email"
                    name="Email"
                    type="email"
                    placeholder="vous@exemple.com"
                    required
                  />
                </Column>
              </Row>
              <Column gap="4" fillWidth>
                <Text variant="label-default-s">Téléphone (optionnel)</Text>
                <Input id="phone" name="Téléphone" type="tel" placeholder="+222 ..." />
              </Column>
              <Column gap="4" fillWidth>
                <Text variant="label-default-s">Message</Text>
                <Textarea
                  id="message"
                  name="Message"
                  placeholder="Décrivez votre projet ou votre question"
                  lines={6}
                  resize="vertical"
                  style={{ minHeight: "96px" }}
                  required
                />
              </Column>
              <Row horizontal="end" paddingTop="8">
                <Button type="submit" size="m" data-border="rounded" arrowIcon>
                  Envoyer
                </Button>
              </Row>
            </Column>
          </form>
        </Column>

        <Column
          id="contact-coordonnees"
          flex={1}
          padding="xl"
          radius="l"
          background="surface"
          border="neutral-alpha-weak"
          gap="12"
        >
          <Heading variant="heading-strong-l">Coordonnées</Heading>
          <Column gap="10" onBackground="neutral-weak">
            <Row gap="8" vertical="center">
              <Icon name="email" onBackground="brand-strong" />
              <Text as="span">contact@nexus.mr</Text>
            </Row>
            <Row gap="8" vertical="center">
              <Icon name="whatsapp" onBackground="brand-strong" />
              <Text as="span">+222 22 11 55 39</Text>
            </Row>
          </Column>
          {essentialSocials.length > 0 && (
            <Column gap="8" paddingTop="8">
              <Heading as="h3" variant="heading-strong-m">
                Réseaux sociaux
              </Heading>
              <Row gap="8" wrap>
                {essentialSocials.map((item) => (
                  <Button
                    key={item.name}
                    href={item.link}
                    prefixIcon={item.icon}
                    variant="secondary"
                    size="s"
                    weight="default"
                  >
                    {item.name}
                  </Button>
                ))}
              </Row>
            </Column>
          )}
        </Column>
      </Row>
    </Column>
  );
}
