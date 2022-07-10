<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const status = ref<number>();
const statusText = ref<string>();
const path = ref<string>();
const message = ref<string>();

if (route.params && route.params.status && route.params.statusText) {
  if (route.params.status) status.value = Number(route.params.status);
  if (route.params.statusText)
    statusText.value = route.params.statusText.toString();
  if (route.params.path) path.value = route.params.path.toString();
  if (route.params.message) message.value = route.params.message.toString();
} else {
  router.push("/login");
}
</script>

<template>
  <div class="h-100 position-absolute container-fluid bg-dark">
    <div class="h-100 d-flex flex-column justify-content-center">
      <div class="d-flex flex-row justify-content-center align-items-end">
        <p class="fs-1 fw-bold text-white m-1">{{ statusText }}</p>
        <p class="fs-3 fw-bold text-muted m-1">Error</p>
        <p class="fs-3 fw-bold text-muted m-1">{{ status }}</p>
      </div>

      <div
        v-if="path"
        class="d-flex flex-row justify-content-center align-items-end"
      >
        <p class="fs-3 text-muted">Path : {{ path }}</p>
      </div>

      <div
        v-if="message"
        class="d-flex flex-row justify-content-center align-items-end p-3"
      >
        <p class="fs-5 text-white">{{ message }}</p>
      </div>

      <div class="d-flex flex-row justify-content-center p-3">
        <button class="btn btn-primary" @click="router.go(-1)">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
          GO BACK
        </button>
      </div>
    </div>
  </div>
</template>
