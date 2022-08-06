<template>
<q-layout view="lHh Lpr lFf" class="bg-green-3">
    <q-header elevated class="bg-green-7">
      <q-toolbar class="glossy">
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-avatar>
          <img
            src="https://i.pinimg.com/564x/98/29/21/9829215db6f9210c0ae4e318e854cb1f.jpg"
          />
        </q-avatar>
        <q-toolbar-title> Rick y Morty Web API </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-green-2"
    >
      <q-list>
        <q-div class="q-pa-md">
          <img
            src="https://es.apkshki.com/storage/6182/icon_5f563b54cb9c8_6182_w256.png.webp"
          />
        </q-div>
        <q-item-label header> Im Pickle Rick! </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { linksList } from "src/router/link-list.js";

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
