/* empty css                        */
import { f as createComponent, g as renderTemplate, i as renderComponent, m as maybeRenderHead } from './astro/server_Vig3oYA4.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './Layout_DG5gukVR.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "privacy policy" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-5xl mx-auto w-full flex flex-col pt-12 px-4"> <div class="!max-w-full prose w-full"> <h1 class="text-4xl">
Privacy Policy<span class="pt-2 text-gray-500 text-sm px-2">Last updated: <strong class="font-bold">2023-10-05</strong> </span> </h1> <p class="pt-2 text-zinc-300">
Any data collected before this date will be subject to the
                previous privacy policy.
</p> <h1 class="text-2xl pt-4">What information do we collect?</h1> <ul class="list-disc list-inside text-zinc-300 space-y-2 pt-2 pl-4 pb-4 pr-4"> <li>Guild IDs</li> <li>Channel IDs</li> <li>Role IDs</li> <li>User IDs</li> <li>Message Timestamps</li> <li>Message IDs</li> <li>
Nicknames and Usernames <span class="text-sm text-gray-500">* (see below)</span> </li> <li>
Avatar Changes <span class="text-sm text-gray-500">* (see below)</span> </li><li>
Last message deleted history (stored for a max of 4
                        hours or less, 20 entries allowed)
</li> <li>
Last message edited history (stored for a max of 4 hours
                        or less, 20 entries allowed)
</li> </ul> <p class="pt-2 text-zinc-300 space-y-2"> <span class="text-sm text-gray-500">*</span>
Nicknames and Usernames are collected in order for the "<strong>namehistory</strong>" command to function.
</p> <p class="pt-2 text-zinc-300 space-y-2"> <span class="text-sm text-gray-500">*</span>
Avatar Changes are collected in order for the "<strong>avatarhistory</strong>" command to function.
</p> <h1 class="text-2xl pt-4">How do we collect this information?</h1> <p class="pt-2 text-zinc-300 space-y-2">
We collect this information through the use of our Discord bot
                and our website.
</p> <p class="pt-2 text-zinc-300 space-y-2">
Deleted and Edited message history are collected in order for
                the "<strong>snipe</strong>" command to function. Administrators
                can clear this data themselves at any time.
</p> <p class="pt-2 text-zinc-300 space-y-2">
Guild IDs, Channel IDs, Role IDs, User IDs, Message Timestamps,
                and Message IDs are collected in order for our system to
                function properly.
</p> <h1 class="text-2xl pt-4">How do we use this information?</h1> <p class="pt-2 text-zinc-300 space-y-2">
We use this information to provide our services to you.
</p> <h1 class="text-2xl pt-4">How do we store this information?</h1> <p class="pt-2 text-zinc-300 space-y-2">
We store this information hashed and encrypted in our database.
</p> <h1 class="text-2xl pt-4">How do we share this information?</h1> <p class="pt-2 text-zinc-300 space-y-2">
We do not share this information with anyone.
</p> <h1 class="text-2xl pt-4">How can you contact us?</h1> <p class="pt-2 text-zinc-300 space-y-2">
You can contact us by joining our <a href="https://discord.gg/M3Jt2reYSp" class="text-zinc-500 hover:text-zinc-400">Discord server</a>.
</p> <h1 class="text-2xl pt-4">How can you delete your data?</h1> <p class="pt-2 text-zinc-300 space-y-2">
You can delete your data by using the "<strong>delete</strong>"
                command.
</p> <h1 class="text-2xl pt-4">How can you request your data?</h1> <p class="pt-2 text-zinc-300 space-y-2">
You can request your data by joining our <a href="https://discord.gg/M3Jt2reYSp" class="text-zinc-500 hover:text-zinc-400">Discord server</a>.
</p> </div> </div> ` })}`;
}, "/home/blez/pumpumpal/pumpumpal web/src/pages/privacy.astro", void 0);

const $$file = "/home/blez/pumpumpal/pumpumpal web/src/pages/privacy.astro";
const $$url = "/privacy";

export { $$Privacy as default, $$file as file, $$url as url };
