<template>
  <v-app>
    <div class="fake-header"></div>
    <v-layout class="main-layout" full-height>
      <v-app-bar
        color="primary"
        title="Expert-overflow"
      >
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-main class="main-container" style="min-height: 100vh">
        <nuxt-page />
      </v-main>
      <v-footer
        class="footer bg-indigo-lighten-1 text-center d-flex flex-column"
        :app="true"
      >
        <v-card
          tile
          width="100%"
          dark
          height="100px"
          class="d-flex align-center justify-center"
        >
          &copy; 2022 Coding Beauty
        </v-card>
      </v-footer>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
const icons = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
];
</script>

<style lang="scss" scoped>

</style>
