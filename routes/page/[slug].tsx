import { PageProps } from "$fresh/server.ts";
import { render } from "https://deno.land/x/gfm@0.2.1/mod.ts";
const __dirname = new URL(".", import.meta.url).pathname;

export default function BlogPost(props: PageProps) {
  const { slug } = props.params;
  try {
    const md = new TextDecoder().decode(
      Deno.readFileSync(`${__dirname}/../../content/${slug}.md`),
    );
    const BodyContent = render(md);
    return (
      <main class="mx-auto items-center flex flex-col">
        <div class="prose p-8 bg-chaos-primary prose-code:before:content-none prose-code:after:content-none" dangerouslySetInnerHTML={{ __html: BodyContent }}>
        </div>
      </main>
    );
  } catch (e) {
    return (
      <main>
        <div class="prose">
          An error occured
        </div>
      </main>
    );
  }
}
