
<template>
  <q-page>
    <q-card class="login">
      <q-card-section>
        <q-btn
          color="secondary"
          icon-right="fas fa-lock"
          label="Sign In With The Google"
          @click="login"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts" src="./Login.ts"></script>
<style lang="scss" src="./Login.module.scss"></style>
