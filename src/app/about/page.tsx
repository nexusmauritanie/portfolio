import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Text,
  Meta,
  Schema,
  Row,
  RevealFx,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: "/images/logos/logo.png",
    path: about.path,
  });
}

export default function About() {
  const sections = [
    {
      id: "presentation",
      title: "Présentation",
      icon: "globe",
      body: (
        <>
          Nexus Technologies est une entreprise mauritanienne spécialisée dans la conception de
          solutions digitales fiables, modernes et sécurisées. Nous accompagnons les organisations
          dans leur transformation numérique en développant des outils sur mesure : applications
          métiers, plateformes web, intégrations systèmes et solutions d’automatisation.
        </>
      ),
    },
    {
      id: "adn",
      title: "Notre ADN",
      icon: "rocket",
      body: (
        <>
          Nous sommes une équipe d’ingénieurs passionnés, animés par l’envie de construire des
          technologies utiles, durables et accessibles. Notre démarche repose sur une approche
          rigoureuse, une vision claire et un engagement total envers nos clients.
        </>
      ),
    },
    {
      id: "mission",
      title: "Notre mission",
      icon: "document",
      body: (
        <>
          Créer des solutions technologiques robustes, performantes et évolutives, pensées pour
          répondre aux enjeux actuels des organisations et aux standards internationaux.
        </>
      ),
    },
    {
      id: "vision",
      title: "Notre vision",
      icon: "openLink",
      body: (
        <>
          Participer activement à l’évolution du paysage numérique en Mauritanie, en introduisant des
          outils modernes qui renforcent l’efficacité, la transparence et la compétitivité.
        </>
      ),
    },
    {
      id: "valeurs",
      title: "Nos valeurs",
      icon: "book",
      list: [
        "Innovation — Une veille permanente et l’adoption des technologies les plus pertinentes.",
        "Simplicité — Des interfaces intuitives qui facilitent la vie de l’utilisateur.",
        "Fiabilité — Une rigueur technique et des processus qualité éprouvés.",
        "Transparence — Une communication claire, un suivi constant et un accompagnement complet.",
        "Confidentialité — Une protection stricte des données et un engagement total envers la sécurité.",
      ],
    },
    {
      id: "equipe",
      title: "Notre équipe",
      icon: "person",
      body: (
        <>
          Derrière Nexus, une équipe soudée aux compétences complémentaires : stratégie, architecture
          technique, développement, design, sécurité, gestion financière et accompagnement client.
        </>
      ),
    },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.displayLocation ?? person.location}
            </Row>
            {social.length > 0 && (
              <Row wrap gap="8" style={{ maxWidth: "14rem" }}>
                {social
                  .filter((item) => item.essential)
                  .map(
                    (item) =>
                      item.link && (
                        <Button
                          key={item.name}
                          href={item.link}
                          prefixIcon={item.icon}
                          size="s"
                          weight="default"
                          variant="secondary"
                          style={{ flexBasis: "calc(50% - 8px)" }}
                        >
                          {item.name}
                        </Button>
                      ),
                  )}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40} gap="l">
          <RevealFx translateY="6">
            <Column gap="s">
              <Heading id="presentation" variant="display-strong-xl" marginBottom="xs">
                Nexus Technologies
              </Heading>
              <Text variant="display-default-xs" onBackground="neutral-weak">
                Solutions digitales & ingénierie technologique
              </Text>
            </Column>
          </RevealFx>

          {sections.map((section, index) => (
            <RevealFx key={section.id} translateY="6" delay={index * 0.05}>
            <Column
              id={section.id}
              padding="l"
              gap="s"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              className="card-hover"
            >
                <Row gap="8" vertical="center">
                  <Icon name={section.icon} onBackground="brand-strong" />
                  <Heading variant="display-strong-s">{section.title}</Heading>
                </Row>
                {section.body && (
                  <Text textVariant="body-default-l" onBackground="neutral-weak">
                    {section.body}
                  </Text>
                )}
                {section.list && (
                  <Column as="ul" gap="8">
                    {section.list.map((item) => (
                      <Text key={item} as="li" variant="body-default-m">
                        {item}
                      </Text>
                    ))}
                  </Column>
                )}
              </Column>
            </RevealFx>
          ))}
        </Column>
      </Row>
    </Column>
  );
}
