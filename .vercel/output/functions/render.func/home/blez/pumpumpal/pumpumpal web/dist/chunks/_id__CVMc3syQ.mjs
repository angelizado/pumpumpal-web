/* empty css                        */
import { f as createComponent, g as renderTemplate, i as renderComponent, m as maybeRenderHead } from './astro/server_Vig3oYA4.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './Layout_DG5gukVR.mjs';

const $$id = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "history" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p id="loading" class="flex justify-center items-center h-screen select-none">
Loading...
</p> <main class="m-2 grid gap-2 grid-cols-3 lg:grid-cols-7" id="avatars"></main> ` })} `;
}, "/home/blez/pumpumpal/pumpumpal web/src/pages/avatars/[id].astro", void 0);

const $$file = "/home/blez/pumpumpal/pumpumpal web/src/pages/avatars/[id].astro";
const $$url = "/avatars/[id]";

export { $$id as default, $$file as file, $$url as url };
