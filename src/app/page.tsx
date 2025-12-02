import { Heading, Text, Button, RevealFx, Column, Badge, Row, Schema, Meta, Icon } from "@once-ui-system/core";
import { home, work, about, person, baseURL } from "@/resources";
import { Mailchimp } from "@/components";
import TableOfContents from "@/components/about/TableOfContents";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  const services = [
    {
      icon: "globe",
      title: "Développement Web",
      description: "Sites vitrines et plateformes sur mesure, performants et accessibles.",
    },
    {
      icon: "rocket",
      title: "Applications mobiles",
      description: "Apps iOS et Android, natives ou hybrides, centrées expérience utilisateur.",
    },
    {
      icon: "document",
      title: "Logiciels sur mesure",
      description: "Solutions métier adaptées à vos processus et intégrations existantes.",
    },
    {
      icon: "grid",
      title: "Automatisation",
      description: "Workflows, APIs et scripts pour gagner du temps et réduire les erreurs.",
    },
    {
      icon: "book",
      title: "ERP & systèmes métiers",
      description: "Paramétrage, extensions et interconnexions pour piloter vos opérations.",
    },
    {
      icon: "openLink",
      title: "Cloud & Infrastructure",
      description: "Architecture, déploiement et supervision sécurisée sur le cloud.",
    },
  ];

  const assets = [
    { title: "Innovation", description: "Veille continue et prototypage rapide pour tester vite." },
    { title: "Fiabilité", description: "Process qualité et revues techniques systématiques." },
    { title: "Simplicité", description: "Interfaces claires et parcours utilisateurs fluides." },
    { title: "Sécurité", description: "Bonnes pratiques, audits et protection des données." },
    { title: "Confidentialité", description: "Respect des NDA et hébergement conforme." },
  ];

  const toc = [
    { title: "Accueil", id: "accueil", display: true, items: [] },
    { title: "Ce que nous faisons", id: "ce-que-nous-faisons", display: true, items: [] },
    { title: "Pourquoi nous ?", id: "pourquoi-nous", display: true, items: [] },
    { title: "Contact", id: "contact-cta", display: true, items: [] },
  ];

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <TableOfContents
        structure={toc}
        about={{ tableOfContent: { display: true, subItems: false } }}
      />
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column id="accueil" fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Row gap="12" s={{ direction: "column", align: "stretch" }}>
              <Button
                id="services"
                data-border="rounded"
                href={work.path}
                variant="primary"
                size="m"
                weight="default"
                arrowIcon
              >
                Découvrir nos services
              </Button>
              <Button
                id="contact"
                data-border="rounded"
                href="mailto:contact@nexus.mr"
                variant="secondary"
                size="m"
                weight="default"
              >
                Nous contacter
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="12">
        <Column id="ce-que-nous-faisons" fillWidth gap="l" s={{ hide: true }}>
          <Column gap="8">
            <Heading variant="display-strong-s">Ce que nous faisons</Heading>
            <Text onBackground="neutral-weak" variant="body-default-l">
              Des expertises complémentaires pour bâtir vos produits numériques.
            </Text>
          </Column>
          <Row
            fillWidth
            wrap
            gap="12"
            s={{ direction: "column" }}
          >
            {services.map((service) => (
              <Column
                key={service.title}
                flex={1}
                padding="l"
                gap="8"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                className="card-hover"
                style={{ flexBasis: "calc(50% - 12px)", width: "calc(50% - 12px)", minWidth: "0" }}
                s={{ style: { flexBasis: "100%", width: "100%", minWidth: "100%", maxWidth: "100%" } }}
              >
                <Row gap="8" vertical="center">
                  <Row
                    width="40"
                    height="40"
                    radius="full"
                    background="brand-alpha-weak"
                    horizontal="center"
                    vertical="center"
                    border="brand-alpha-medium"
                  >
                    <Icon name={service.icon} onBackground="brand-strong" />
                  </Row>
                  <Heading as="h3" variant="heading-strong-m">
                    {service.title}
                  </Heading>
                </Row>
                <Text onBackground="neutral-weak" variant="body-default-m">
                  {service.description}
                </Text>
              </Column>
            ))}
          </Row>
        </Column>
        <Column id="ce-que-nous-faisons-mobile" fillWidth gap="12" hide s={{ hide: false }}>
          <Column gap="8">
            <Heading variant="display-strong-s">Ce que nous faisons</Heading>
            <Text onBackground="neutral-weak" variant="body-default-l">
              Des expertises complémentaires pour bâtir vos produits numériques.
            </Text>
          </Column>
          <Column gap="12">
            {services.map((service) => (
              <Column
                key={`${service.title}-mobile`}
                padding="m"
                gap="8"
                radius="l"
                background="surface"
                border="brand-alpha-medium"
                className="card-hover"
                style={{ width: "100%" }}
              >
                <Row gap="8" vertical="center">
                  <Row
                    width={36}
                    height={36}
                    radius="full"
                    background="brand-alpha-weak"
                    horizontal="center"
                    vertical="center"
                    border="brand-alpha-medium"
                  >
                    <Icon name={service.icon} onBackground="brand-strong" />
                  </Row>
                  <Heading as="h3" variant="heading-strong-m">
                    {service.title}
                  </Heading>
                </Row>
                <Text onBackground="neutral-weak" variant="body-default-m">
                  {service.description}
                </Text>
              </Column>
            ))}
          </Column>
        </Column>
      </RevealFx>
      <RevealFx translateY="12" delay={0.1}>
        <Column id="pourquoi-nous" fillWidth gap="l" s={{ hide: true }}>
          <Column gap="8">
            <Heading variant="display-strong-s">Pourquoi nous ?</Heading>
            <Text onBackground="neutral-weak" variant="body-default-l">
              Une équipe engagée, focalisée sur vos résultats.
            </Text>
          </Column>
          <Row fillWidth wrap gap="12">
            {assets.map((asset) => (
              <Column
                key={asset.title}
                flex={1}
                padding="l"
                gap="8"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                className="card-hover"
                style={{ flexBasis: "220px", minWidth: "0" }}
              >
                <Heading as="h3" variant="heading-strong-m">
                  {asset.title}
                </Heading>
                <Text onBackground="neutral-weak" variant="body-default-m">
                  {asset.description}
                </Text>
              </Column>
            ))}
          </Row>
        </Column>
        <Column id="pourquoi-nous-mobile" fillWidth gap="12" hide s={{ hide: false }}>
          <Column gap="6">
            <Heading variant="display-strong-s">Pourquoi nous ?</Heading>
            <Text onBackground="neutral-weak" variant="body-default-l">
              Une équipe engagée, focalisée sur vos résultats.
            </Text>
          </Column>
          <Column gap="12">
            {assets.map((asset) => (
              <Column
                key={`${asset.title}-mobile`}
                padding="m"
                gap="6"
                radius="l"
                background="surface"
                border="brand-alpha-medium"
                className="card-hover"
                style={{ width: "100%" }}
              >
                <Heading as="h3" variant="heading-strong-m">
                  {asset.title}
                </Heading>
                <Text onBackground="neutral-weak" variant="body-default-m">
                  {asset.description}
                </Text>
              </Column>
            ))}
          </Column>
        </Column>
      </RevealFx>
      <Column id="contact-cta" fillWidth>
        <Mailchimp />
      </Column>
    </Column>
  );
}
