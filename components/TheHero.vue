<script setup>
import Image from 'assets/images/hero.png';
import { VueWriter } from 'vue-writer'

const word = ['creative', 'innovative', 'efficient', 'flexible', 'bold', 'collaborative', 'committed'];
</script>

<template>
    <section class="TheHero">
        <div class="TheHero__Content">
            <div class="TheHero__HeadlineBox">
                <h1 class="TheHero__Title">
                    <span>{{ $t("title1") }}</span>
                    {{ $t("title2") }}
                </h1>
                <h2 class="TheHero__Headline">
                    {{ $t("headline1") }}
                    <br>
                    <I18nT keypath="headline2">
                        <template #adjective>
                            <span class="TheHero__HeadlineAdjective">
                                <I18nT keypath="headlineQuality" tag="spans">
                                    <template #quality>
                                        <VueWriter :array="word" />
                                    </template>
                                </I18nT>
                            </span>
                        </template>
                    </I18nT>

                </h2>
            </div>
            <div class="TheHero__cta">
                <BaseButton icon="download">
                    {{ $t('download') }}
                </BaseButton>
                <BaseButton variant="secondary">
                    {{ $t('donate') }}
                </BaseButton>
            </div>
        </div>
        <div class="TheHero__ImageWrapper">
            <img :src="Image" alt="Space options" class="TheHero__Image">
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/mixins/respondTo' as *;
.TheHero {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;

    &__Content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 32px;
        max-width: 640px;

        @include respondTo(lg) {
            align-items: flex-start;
            text-align: initial;
        }
    }

    &__HeadlineBox {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__Title {
        font-size: 18px;
        font-weight: 700;
        line-height: 20px;

        span {
            color: #021cfc;
        }
    }

    &__Headline {
        font-size: 50px;
        font-weight: 700;
        line-height: 56px;
    }

    &__HeadlineAdjective {
        color: #FF5A36;

        div {
            display: inline-block;
        }
    }



    &__cta {
        display: flex;
        gap: 16px;
    }

    &__ImageWrapper {
        display: none;
        width: 100%;
        max-width: 40%;

        @include respondTo(lg) {
            display: block;
        }
    }
}
</style>
