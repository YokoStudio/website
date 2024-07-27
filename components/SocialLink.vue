<script setup lang="ts">
import { computed } from 'vue'
import IconInstagram from '~/components/IconInstagram.vue'
import IconLinkedIn from '~/components/IconLinkedIn.vue'
import IconX from '~/components/IconX.vue'

const icons = {
    'instagram': IconInstagram,
    'linkedIn': IconLinkedIn,
    'x': IconX,
};

interface Props {
    name: keyof typeof icons;
    href: string;
}

const props = withDefaults(defineProps<Props>(), {
    href: '#',
});

const icon = computed(() => icons[props.name] ?? null)
</script>

<template>
    <a :href="href" class="SocialLink" target="_blank">
        <component :is="icon" />
    </a>
</template>

<style lang="scss">
.SocialLink {
    padding: 4px;
    color: #646464;

    :hover {
        color: #808080;
    }

    :active {
        color: #9c9c9c;
    }
}
</style>
