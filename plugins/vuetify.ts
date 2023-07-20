import { createVuetify } from "vuetify";
// import { md1 } from 'vuetify/blueprints'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // blueprint: md1,
        ssr: true,
        defaults,
        // add theme
        theme: {
            defaultTheme: LIGHT_THEME,
            themes: {
                light,
                dark,
            },
            // add color variations
            //   variations: {
            //     colors: ["primary", "secondary"],
            //     lighten: 3,
            //     darken: 3,
            //   },
        },
        // Add the custom iconset
        icons: {
            defaultSet: "custom",
            aliases,
            sets: {
                custom,
            },
        },
    });

    app.vueApp.use(vuetify);
});
