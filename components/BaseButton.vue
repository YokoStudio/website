<script setup lang="ts">
interface Props {
    variant?: 'primary' | 'secondary';
    icon?: 'figma' | 'heart';
    href?: string;
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary'
})

const tag = props.href ? 'a': 'button'
const hrefObj = { href: props.href }
const capitalize = (str?: string) => str && str[0].toUpperCase().concat(str.slice(1))
</script>

<template>
    <component 
        :is="tag"
        class="BaseButton" 
        :class="[
            `BaseButton--${capitalize($props.variant)}`,
            $props.icon && 'BaseButton--HasIcon'
        ]"
        v-bind="hrefObj"
    >
        <IconFigma v-if="$props.icon === 'figma'" />
        <IconHeart v-else-if="$props.icon === 'heart'" />
        <slot />
    </component>
</template>

<style lang="scss" scoped>
.BaseButton {
    --bg: '';
    --text: '';

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 16px 24px;
    background: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: var(--text);
    background-color: var(--bg);
    border: 2px currentColor;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;

    &:focus-visible {
        outline: 2px solid #000000;
        border: 2px solid #FFFFFF;
    }

    &-HasIcon {
        padding-left: 16px;
    }

    &--Primary {
        --bg: #021CFC;
        --text: #FFFFFF;

        &:hover {
            --bg: #0216CA;
        }

        &:active {
            --bg: #011097;
        }
    }

    &--Secondary {
        --text: #000000;
        border: 1px solid #646464;

        &:hover {
            --bg: #0000000D;
        }

        &:active {
            --bg: #0000001A;

            &:focus {
                --bg: #FFFFFF;
            }
        }
    }

}
</style>
