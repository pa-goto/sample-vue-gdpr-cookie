import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createGtm } from "vue-gtm";

createApp(App)
  .use(store)
  .use(router)
  .use(
    createGtm({
      id: "GTM-xxxxx", // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
      enabled: false, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
      debug: true, // Whether or not display console logs debugs (optional)
    }))
  .mount("#app");
