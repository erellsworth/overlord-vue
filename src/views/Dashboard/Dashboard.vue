
<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="fas fa-bars" @click="menuOpen = !menuOpen" />

        <q-toolbar-title>Dashboard</q-toolbar-title>
        <q-btn flat round dense icon="fas fa-user">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section @click="logout">Sign Out</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/about" label="About" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="menuOpen" side="left" overlay elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script lang="ts" src="./Dashboard.ts"></script>
