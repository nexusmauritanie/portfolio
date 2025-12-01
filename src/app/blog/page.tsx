import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  const toc = [
    { title: "Articles récents", id: "articles-recents", display: true, items: [] },
    { title: "Articles précédents", id: "articles-precedents", display: true, items: [] },
  ];

  return (
    <Column maxWidth="m" paddingTop="24">
      <TableOfContents
        structure={toc}
        about={{ tableOfContent: { display: true, subItems: false } }}
      />
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading
        id="articles-recents"
        marginBottom="l"
        variant="heading-strong-xl"
        marginLeft="24"
      >
        {blog.title}
      </Heading>
      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 1]} thumbnail />
        <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
        <Mailchimp marginBottom="l" />
        <Heading
          id="articles-precedents"
          as="h2"
          variant="heading-strong-xl"
          marginLeft="l"
        >
          Earlier posts
        </Heading>
        <Posts range={[4]} columns="2" />
      </Column>
    </Column>
  );
}
