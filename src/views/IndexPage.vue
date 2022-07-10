<script setup lang="ts">
  import { ref } from 'vue'

  interface ImageCardInf {
    img: string
    text: string
    uri: string
  }

  const cards = ref([] as ImageCardInf[])
  console.log(cards)

  cards.value.push({
    img: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg',
    text: 'dashboard sample 1',
    uri: '/ds1',
  } as ImageCardInf)
  cards.value.push({
    img: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg',
    text: 'dashboard sample 2',
    uri: '/ds2',
  } as ImageCardInf)
  cards.value.push({
    img: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg',
    text: 'dashboard sample 3',
    uri: '/ds1',
  } as ImageCardInf)
</script>

<template>
  <header>
    <nav class="navbar sticky-top bg-dark navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="/">dashboard</a>
      </div>
    </nav>
  </header>
  <main>
    <section class="container bg-light py-5 text-center">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Album example</h1>
          <p class="lead text-muted">
            Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it
            entirely.
          </p>
          <p>
            <a href="#" class="btn btn-primary my-2"><i class="bi bi-alarm-fill"></i></a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </div>
    </section>

    <section class="container bg-light py-5 text-center">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div v-for="(card, idx) in cards" :key="idx" class="col">
          <div class="card shadow-sm" @click="$router.push(card.uri)">
            <img class="card-img-top" :src="card.img" />

            <div class="card-body">
              <p class="card-text">{{ card.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <div>
        <a href="/ds1">dashboard 1</a>
      </div>
      <div>
        <a href="/ds2">dashboard 2</a>
      </div>
    </div>
  </main>
  <footer></footer>
</template>
