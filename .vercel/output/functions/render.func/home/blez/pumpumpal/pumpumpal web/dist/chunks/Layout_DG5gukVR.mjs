import { e as createAstro, f as createComponent, g as renderTemplate, j as renderHead, k as renderSlot } from './astro/server_Vig3oYA4.mjs';
import 'html-escaper';
import 'clsx';
/* empty css                        */

const $$Astro = createAstro("https://granrey.store");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="bg-zinc-900 text-zinc-100 antialiased leading-tight scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-90 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta property="og:title" content="shiro"><meta property="og:description" content="serial experiments shiro"><meta property="og:image" content="/pom_sit.png"><meta property="og:url" content="https://shiro.vc"><meta name="description" content="cutest bot ever"><link rel="icon" href="/pom_sit.png"><title>pumpumpal - ${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/blez/pumpumpal/pumpumpal web/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
