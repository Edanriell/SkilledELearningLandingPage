// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit";
import { fileURLToPath } from "url";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
	devtools: { enabled: true },
	alias: {
		"@app": fileURLToPath(new URL("./app", import.meta.url)),
		"@layouts": fileURLToPath(new URL("./layouts", import.meta.url)),
		"@pages": fileURLToPath(new URL("./pages", import.meta.url)),
		"@routes": fileURLToPath(new URL("./routes", import.meta.url)),
		"@shared": fileURLToPath(new URL("./shared", import.meta.url)),
		"@widgets": fileURLToPath(new URL("./widgets", import.meta.url)),
		"@styled-system": resolve("./styled-system")
	},
	modules: ["@nuxt/eslint"],
	css: ["@/app/styles/base.less", "@/app/styles/styles.css"],
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
