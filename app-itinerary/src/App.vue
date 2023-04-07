<template>
  <v-app id="inspire" theme="dark">
    <router-view :key="$route.path"></router-view>
    <v-navigation-drawer
        expand-on-hover
        rail
        color="indigo"
      >
        <v-list>
          <v-list-item
            prepend-avatar="/supernature icon.png"
            title="Supernature Travel"
            subtitle="Basic Itinerary"
            to="/"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list density="compact" nav>
          <v-list-item 
          prepend-icon="mdi-view-list" 
          size="large"
          title="Table" 
          value="table"
          to="/table">
          </v-list-item>
          <v-list-item 
          prepend-icon="mdi-arrow-up-bold-box-outline" 
          size="large"
          title="Upload" 
          value="upload"
          to="/upload">
          </v-list-item>
        </v-list>
      </v-navigation-drawer> 
    <v-app-bar>
      <v-toolbar-title>
        Itinerary Toolset
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view :key="$route.path"></router-view>
    </v-main>
  </v-app>
</template>

<script>

  export default {
    data: () => ({ drawer: null }),
  }
</script>
