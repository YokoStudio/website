<script setup>
import TheLogo from '~/assets/images/logo.svg'
import externalLinks from '~/constants/externalLinks'

const version = 'v0.0.0'
</script>

<template>
    <header class="TheHeader">
        <div class="TheHeader__first">
            <img :src="TheLogo" alt="space">
            {{ version }}
        </div>
        <div class="TheHeader__last">
            <SocialLink name="instagram" :href="externalLinks.instagram" />
            <SocialLink name="x" :href="externalLinks.x" />
            <SocialLink name="linkedIn" :href="externalLinks.linkedIn" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
.TheHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    padding: 34px 0;

    &__first {
        display: flex;
        align-items: end;
        gap: 16px;
    }

    &__last {
        display: flex;
        gap: 8px;
    }
}
</style>
