<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
            clipped
            fixed
            v-model="drawer"
            app
    >
      <v-list dense>
        <v-list-tile v-for="(page, index) in pages" :key="index" :to="page.path">
          <v-list-tile-action>
            <v-icon v-html="page.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-html="page.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app fixed></v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: true,
      pages: [
        { title: 'Logs', icon: 'notification_important', path: '/logs' },
        { title: 'Data', icon: 'dns', path: '/data' },
        { title: 'Add Data', icon: 'note_add', path: '/addData' }
      ]
    }),
    methods: {
      socketLogin: function() { this.$socket.emit('login'); }
    },
    mounted() {
      this.socketLogin();
    }
  }
</script>
