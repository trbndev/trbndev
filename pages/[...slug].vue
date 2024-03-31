<script setup lang="ts">
const route = useRoute();

defineOgImageComponent("NuxtSeo", {
    theme: 'EC4899'
});
</script>

<template>
    <div
        class="prose dark:prose-invert prose-headings:font-semibold prose-headings:text-base prose-img:rounded-lg py-6 md:py-16">
        <ContentDoc>
            <template #not-found>
                <Meta name="title" content="Not Found" />
                <h1><span>Oooppss</span><span class="animate-pulse">...</span></h1>
                <p>
                    The page you are looking for does not exist.
                </p>
                <ULink to="/" class="btn">Go back home</ULink>
            </template>
        </ContentDoc>
    </div>
</template>
