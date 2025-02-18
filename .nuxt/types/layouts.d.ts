import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "home"
declare module "../../node_modules/.pnpm/nuxt@3.15.4_i6wvxxjxvtt2ygty2a3vwot5h4/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}