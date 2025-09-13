import { _ as __nuxt_component_0 } from './nuxt-link-NCUNSs-6.mjs';
import { ref, watch, withCtx, createTextVNode, unref, useSSRContext } from 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/vue@3.5.19_typescript@5.9.2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot } from 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/vue@3.5.19_typescript@5.9.2/node_modules/vue/server-renderer/index.mjs';
import { u as useRoute } from './server.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/vue-bundle-renderer@2.1.2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/vue@3.5.21_typescript@5.9.2/node_modules/vue/server-renderer/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/node-mock-http@1.0.3/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/unstorage@1.17.1_@netlify+blobs@9.1.2_db0@0.3.2_ioredis@5.7.0/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/unstorage@1.17.1_@netlify+blobs@9.1.2_db0@0.3.2_ioredis@5.7.0/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/unstorage@1.17.1_@netlify+blobs@9.1.2_db0@0.3.2_ioredis@5.7.0/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/unstorage@1.17.1_@netlify+blobs@9.1.2_db0@0.3.2_ioredis@5.7.0/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/unhead@2.0.14/node_modules/unhead/dist/server.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/devalue@5.3.2/node_modules/devalue/index.js';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/unhead@2.0.14/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/vue@3.5.21_typescript@5.9.2/node_modules/vue/index.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/unhead@2.0.14/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/sandhyagautam/Desktop/portfolio/node_modules/.pnpm/vue-router@4.5.1_vue@3.5.19_typescript@5.9.2_/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuOpen = ref(false);
    const route = useRoute();
    watch(() => route.path, () => {
      mobileMenuOpen.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between items-center h-16">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-xl font-bold text-gray-900 hover:text-gray-700 transition duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sandhya Gautam `);
          } else {
            return [
              createTextVNode(" Sandhya Gautam ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex space-x-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: ["text-gray-600 hover:text-gray-900 transition duration-300 font-medium", { "text-gray-900 font-semibold": _ctx.$route.path === "/" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: ["text-gray-600 hover:text-gray-900 transition duration-300 font-medium", { "text-gray-900 font-semibold": _ctx.$route.path === "/about" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About `);
          } else {
            return [
              createTextVNode(" About ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: ["text-gray-600 hover:text-gray-900 transition duration-300 font-medium", { "text-gray-900 font-semibold": _ctx.$route.path === "/projects" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Projects `);
          } else {
            return [
              createTextVNode(" Projects ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: ["text-gray-600 hover:text-gray-900 transition duration-300 font-medium", { "text-gray-900 font-semibold": _ctx.$route.path === "/contact" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact `);
          } else {
            return [
              createTextVNode(" Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="md:hidden text-gray-700 hover:text-gray-900 transition duration-300"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">`);
      if (!unref(mobileMenuOpen)) {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`);
      } else {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`);
      }
      _push(`</svg></button></div><div style="${ssrRenderStyle(unref(mobileMenuOpen) ? null : { display: "none" })}" class="md:hidden pb-4 border-t border-gray-200 mt-4 pt-4"><div class="flex flex-col space-y-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        onClick: ($event) => mobileMenuOpen.value = false,
        class: ["text-gray-600 hover:text-gray-900 transition duration-300 py-2 font-medium", { "text-gray-900 font-semibold": _ctx.$route.path === "/" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        onClick: ($event) => mobileMenuOpen.value = false,
        class: ["text-gray-600 hover:text-gray-900 transition duration-300 py-2 font-medium", { "text-gray-900 font-semibold": _ctx.$route.path === "/about" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About `);
          } else {
            return [
              createTextVNode(" About ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        onClick: ($event) => mobileMenuOpen.value = false,
        class: ["text-gray-600 hover:text-gray-900 transition duration-300 py-2 font-medium", { "text-gray-900 font-semibold": _ctx.$route.path === "/projects" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Projects `);
          } else {
            return [
              createTextVNode(" Projects ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        onClick: ($event) => mobileMenuOpen.value = false,
        class: ["text-gray-600 hover:text-gray-900 transition duration-300 py-2 font-medium", { "text-gray-900 font-semibold": _ctx.$route.path === "/contact" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact `);
          } else {
            return [
              createTextVNode(" Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav><main class="pt-16">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-C2e-3zFt.mjs.map
