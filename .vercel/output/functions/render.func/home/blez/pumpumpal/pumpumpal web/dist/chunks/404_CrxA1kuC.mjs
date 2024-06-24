/* empty css                        */
import { f as createComponent, g as renderTemplate, i as renderComponent, m as maybeRenderHead } from './astro/server_Vig3oYA4.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './Layout_DG5gukVR.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center justify-center h-screen"> <h1 class="font-bold text-6xl"> <span class="text-red-500">404</span> Not Found
</h1> <p class="text-2xl text-gray-500">
The page you're looking for doesn't exist.
</p> </main> ` })}`;
}, "/home/blez/pumpumpal/pumpumpal web/src/pages/404.astro", void 0);

const $$file = "/home/blez/pumpumpal/pumpumpal web/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
