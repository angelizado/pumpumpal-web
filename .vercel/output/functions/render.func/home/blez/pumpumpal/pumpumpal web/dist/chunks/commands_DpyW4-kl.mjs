/* empty css                        */
import { f as createComponent, g as renderTemplate, i as renderComponent, m as maybeRenderHead } from './astro/server_Vig3oYA4.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './Layout_DG5gukVR.mjs';

const $$Commands = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "commands" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div class="mb-4"> <h1 class="flex flex-col justify-center items-center p-4"> <span class="mr-2">prefix: <span class="text-stone-200 hover:text-stone-300">,</span> |
          example: <span class="text-stone-200 hover:text-stone-300">,ping</span></span> </h1> <pre class="overflow-auto text-white rounded-md p-4" id="commands">loading...</pre> </div> </main> ` })} `;
}, "/home/blez/pumpumpal/pumpumpal web/src/pages/commands.astro", void 0);

const $$file = "/home/blez/pumpumpal/pumpumpal web/src/pages/commands.astro";
const $$url = "/commands";

export { $$Commands as default, $$file as file, $$url as url };
