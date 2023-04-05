<template>
  <v-app id="inspire">
    <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item 
          prepend-icon="mdi-arrow-up-bold-box-outline" 
          size="large"
          title="Upload" 
          value="upload">
          </v-list-item>
          <v-list-item 
          prepend-icon="mdi-arrow-up-bold-box-outline" 
          size="large"
          title="Upload" 
          value="upload">
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-app-bar class="blue white--text">
      <v-toolbar-title class="blue white--text">Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>