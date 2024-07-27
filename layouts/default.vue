<template>
    <main class="DefaultLayout">
        <slot />
    </main>
</template>

<style lang="scss">
.DefaultLayout {
    min-height: 100vh;
    min-height: 100dvh;
    background-image: url('assets/images/pattern.svg');
    background-position: right;
    background-size: contain;
    background-repeat: no-repeat;
}
</style>
