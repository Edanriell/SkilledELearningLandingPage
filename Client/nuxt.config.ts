// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit";
import { fileURLToPath } from "url";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
	devtools: { enabled: true },
	alias: {
		"@features": fileURLToPath(new URL("./features", import.meta.url)),
		"@pages": fileURLToPath(new URL("./pages", import.meta.url)),
		"@shared": fileURLToPath(new URL("./shared", import.meta.url)),
		"@shared/ui": fileURLToPath(new URL("./shared/ui", import.meta.url)),
		"styled-system": resolve("./styled-system")
	},
	modules: ["@nuxt/eslint"],
	css: ["@/app/styles/styles.css", "@/app/styles/base.less"],
	postcss: {
		plugins: {
			"@pandacss/dev/postcss": {}
		}
	},
	dir: {
		pages: "routes"
	}
});

// 375
// 768
// 1440
