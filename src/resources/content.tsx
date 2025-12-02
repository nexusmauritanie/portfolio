import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Nexus",
  lastName: "Technologies",
  name: "Nexus Technologies",
  role: "Solutions digitales et ingénierie",
  avatar: "/images/logos/logo.png",
  email: "contact@nexus.mr",
  location: "Africa/Nouakchott", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  displayLocation: "Nouakchott/Mauritanie",
  languages: ["Français", "Arabe"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Une idée ? Un besoin ?</>,
  description: <>Contactez-nous. Nous vous répondons rapidement.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "#",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "#",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "#",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "#",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:contact@nexus.mr",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/logos/logo.png",
  label: "Accueil",
  title: "Nexus – Solutions digitales",
  description: "Nexus conçoit des solutions numériques fiables et durables.",
  headline: <>Des Solutions Intelligentes pour un monde connecté</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Nexus</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Ingénierie • Innovation
        </Text>
      </Row>
    ),
    href: "/about",
  },
  subline: (
    <>
      Nexus est une entreprise d’ingénierie informatique spécialisée dans le développement web,
      mobile et logiciel.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: "Découvrez Nexus Technologies, entreprise mauritanienne de solutions digitales.",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Présentation de Nexus",
    description: (
      <>
        Nexus Technologies est une entreprise mauritanienne spécialisée dans le développement de
        solutions digitales modernes et sécurisées. Nous créons des outils adaptés aux besoins des
        organisations, du site web à l’application métier sur mesure.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Équipe dirigeante",
    experiences: [
      {
        company: "Mohamed Cheikh MOHAMED",
        timeframe: "CEO",
        role: "Vision stratégique, relation client, supervision globale.",
        achievements: [
              <span key="ceo-1">
                Pilote la stratégie, s’assure de l’alignement client et supervise les projets de bout
                en bout.
              </span>,
              <span key="ceo-2">
                Garant de la qualité et de la satisfaction client sur chaque livraison.
              </span>,
        ],
        images: [],
      },
      {
        company: "El-Havedh MOHAMED SALEH",
        timeframe: "CFO",
        role: "Gestion financière, organisation interne, suivi administratif.",
        achievements: [
              <span key="cfo-1">
                Structure les budgets, suit les performances financières et optimise les ressources.
              </span>,
              <span key="cfo-2">
                Met en place des processus internes fiables pour garantir la continuité des
                opérations.
              </span>,
        ],
        images: [],
      },
      {
        company: "Sidi ZEIDAN SIDI BOUBACAR",
        timeframe: "CTO",
        role: "Architecture technique, développement, sécurité, innovation technologique.",
        achievements: [
              <span key="cto-1">
                Conçoit l’architecture des solutions, supervise le développement et la sécurité.
              </span>,
              <span key="cto-2">
                Introduit les meilleures pratiques et veille technologique pour rester à jour.
              </span>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Notre mission et vision",
    institutions: [
      {
        name: "Notre mission",
        description: (
          <>Concevoir des solutions technologiques robustes, modernes et performantes pour accompagner la transformation digitale des organisations.</>
        ),
      },
      {
        name: "Notre vision",
        description: (
          <>Contribuer activement à l’évolution du paysage numérique mauritanien.</>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Nos valeurs",
    skills: [
      {
        title: "Innovation",
        description: <>Veille permanente et adoption des technologies les plus adaptées.</>,
        tags: [],
        images: [],
      },
      {
        title: "Simplicité",
        description: <>Des interfaces claires et des parcours fluides.</>,
        tags: [],
        images: [],
      },
      {
        title: "Fiabilité",
        description: <>Processus qualité et contrôle rigoureux à chaque étape.</>,
        tags: [],
        images: [],
      },
      {
        title: "Transparence",
        description: <>Communication directe, reporting clair et accompagnement continu.</>,
        tags: [],
        images: [],
      },
      {
        title: "Confidentialité",
        description: <>Protection des données et respect des engagements de sécurité.</>,
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const contact: Gallery = {
  path: "/contact",
  label: "Contact",
  title: "Contact – Nexus",
  description: "Échangez avec l’équipe Nexus pour vos besoins digitaux.",
  images: [],
};

export { person, social, newsletter, home, about, blog, work, contact };
