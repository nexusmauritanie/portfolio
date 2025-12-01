import { Column, Heading, Meta, Schema, Text, Button, Icon, RevealFx, Row } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: "/images/logos/logo.png",
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingY="24" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <RevealFx translateY="8">
        <Column
          id="projets"
          fillWidth
          padding="xl"
          gap="12"
          radius="l"
          background="surface"
          border="neutral-alpha-weak"
          align="center"
          horizontal="center"
        >
          <Row paddingBottom="4" gap="8" vertical="center">
            <Icon name="rocket" onBackground="brand-strong" />
            <Heading variant="display-strong-s" align="center">
              Projets à venir
            </Heading>
          </Row>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance" align="center">
            Nous préparons la présentation de nos réalisations. Revenez bientôt pour découvrir nos projets.
          </Text>
          <Button href="/#contact-cta" size="m" variant="primary" data-border="rounded" arrowIcon>
            Être informé
          </Button>
        </Column>
      </RevealFx>
    </Column>
  );
}
