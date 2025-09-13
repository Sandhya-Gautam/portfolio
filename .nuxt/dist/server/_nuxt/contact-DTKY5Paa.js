import { _ as __nuxt_component_0 } from "./nuxt-link-NCUNSs-6.js";
import { reactive, mergeProps, unref, withCtx, createBlock, createTextVNode, openBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "/Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
import "node:http";
import "node:https";
import "node:zlib";
import "node:stream";
import "node:buffer";
import "node:util";
import "node:url";
import "node:net";
import "node:fs";
import "node:path";
import "/Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs";
import "#internal/nuxt/paths";
import "/Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "/Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs";
import "/Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
import "/Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white relative overflow-hidden" }, _attrs))} data-v-80f01c64><div class="absolute inset-0 z-0 pattern-dots" data-v-80f01c64></div><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10" data-v-80f01c64><div class="text-center mb-16" data-v-80f01c64><h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6" data-v-80f01c64>Get In Touch</h1><p class="text-xl text-gray-600" data-v-80f01c64>Let&#39;s discuss your next project</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-12" data-v-80f01c64><div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg" data-v-80f01c64><h2 class="text-2xl font-bold text-gray-900 mb-6" data-v-80f01c64>Send me a message</h2><form class="space-y-6" data-v-80f01c64><div data-v-80f01c64><label for="name" class="block text-sm font-medium text-gray-700 mb-2" data-v-80f01c64>Name</label><input type="text" id="name"${ssrRenderAttr("value", unref(form).name)} required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition duration-300" data-v-80f01c64></div><div data-v-80f01c64><label for="email" class="block text-sm font-medium text-gray-700 mb-2" data-v-80f01c64>Email</label><input type="email" id="email"${ssrRenderAttr("value", unref(form).email)} required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition duration-300" data-v-80f01c64></div><div data-v-80f01c64><label for="subject" class="block text-sm font-medium text-gray-700 mb-2" data-v-80f01c64>Subject</label><input type="text" id="subject"${ssrRenderAttr("value", unref(form).subject)} required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition duration-300" data-v-80f01c64></div><div data-v-80f01c64><label for="message" class="block text-sm font-medium text-gray-700 mb-2" data-v-80f01c64>Message</label><textarea id="message" rows="5" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition duration-300 resize-none" data-v-80f01c64>${ssrInterpolate(unref(form).message)}</textarea></div><button type="submit" class="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300" data-v-80f01c64> Send Message </button></form></div><div class="space-y-8 flex flex-col justify-center" data-v-80f01c64><div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg" data-v-80f01c64><div class="flex items-center mb-4" data-v-80f01c64><div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4" data-v-80f01c64><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-80f01c64><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-v-80f01c64></path></svg></div><div data-v-80f01c64><h3 class="text-lg font-semibold text-gray-900" data-v-80f01c64>Email</h3><p class="text-gray-600" data-v-80f01c64>gautamsandhya89@gmail.com</p></div></div></div><div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg" data-v-80f01c64><div class="flex items-center mb-4" data-v-80f01c64><div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4" data-v-80f01c64><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-80f01c64><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-v-80f01c64></path></svg></div><div data-v-80f01c64><h3 class="text-lg font-semibold text-gray-900" data-v-80f01c64>Phone</h3><p class="text-gray-600" data-v-80f01c64>+977-9866116561</p></div></div></div><div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg" data-v-80f01c64><div class="flex items-center mb-4" data-v-80f01c64><div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4" data-v-80f01c64><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-80f01c64><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-v-80f01c64></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-v-80f01c64></path></svg></div><div data-v-80f01c64><h3 class="text-lg font-semibold text-gray-900" data-v-80f01c64>Location</h3><p class="text-gray-600" data-v-80f01c64>Imadol, Lalitpur, Nepal</p></div></div></div><div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg" data-v-80f01c64><h3 class="text-lg font-semibold text-gray-900 mb-4" data-v-80f01c64>Social Links</h3><div class="flex space-x-4" data-v-80f01c64><a href="https://x.com/sandhyagautamm" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition duration-300" data-v-80f01c64><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-v-80f01c64><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" data-v-80f01c64></path></svg></a><a href="https://www.linkedin.com/in/sandhya-gautamm/" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition duration-300" data-v-80f01c64><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-v-80f01c64><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-v-80f01c64></path></svg></a><a href="https://github.com/Sandhya-Gautam" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition duration-300" data-v-80f01c64><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-v-80f01c64><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-v-80f01c64></path></svg></a></div></div></div></div><div class="text-center mt-12" data-v-80f01c64>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center text-gray-600 hover:text-gray-900 transition duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-80f01c64${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-80f01c64${_scopeId}></path></svg> Back to Home `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4 mr-2",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15 19l-7-7 7-7"
                })
              ])),
              createTextVNode(" Back to Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-80f01c64"]]);
export {
  contact as default
};
//# sourceMappingURL=contact-DTKY5Paa.js.map
