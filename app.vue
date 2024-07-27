<template>
  <NuxtLayout>
    <Container class="App__Container">
      <TheHeader />
      <main class="App__Content">
        <TheHero />
      </main>
    </Container>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.App {

  &__Container {
    min-height: 100vh;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
  }

  &__Content {
    padding: 60px 0;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
