<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
    <div class="px-8 md:px-0 min-h-dvh flex flex-col max-w-[80ch] mx-auto py-8 gap-8 box-border">
        <header class="leading-tight flex justify-between opacity-60 hover:opacity-100 transition-opacity delay-175">
            <ULink to="/" class="hover:bg-black/20 px-4 py-2 -mx-4 -my-2 rounded-lg">
                <div class="flex justify-center items-center gap-3">
                    <div>
                        <h1 class=" font-semibold">Torben Haack</h1>
                        <h2 class="opacity-50">trbn.dev</h2>
                    </div>
                </div>
            </ULink>
            <ul class="flex justify-start">
                <li class="hover:bg-black/20 rounded-lg p-2">
                    <UTooltip :text="`@${appConfig.socials.github}`" :popper="{ arrow: true }">
                        <ULink :to="`https://github.com/${appConfig.socials.github}`" target="_blank">
                            <UIcon name="i-mdi-github" dynamic class="w-6 h-6" />
                        </ULink>
                    </UTooltip>
                </li>
                <li class="hover:bg-black/20 rounded-lg p-2 ">
                    <UTooltip :text="`@${appConfig.socials.twitter}`" :popper="{ arrow: true }">
                        <ULink :to="`https://twitter.com/${appConfig.socials.twitter}`" target="_blank">
                            <UIcon name="i-mdi-twitter" dynamic class="w-6 h-6" />
                        </ULink>
                    </UTooltip>
                </li>
                <li class="hover:bg-black/20 rounded-lg p-2">
                    <UTooltip :text="`@${appConfig.socials.linkedin}`" :popper="{ arrow: true }">
                        <ULink :to="`https://linkedin.com/in/${appConfig.socials.linkedin}`" target="_blank">
                            <UIcon name="i-mdi-linkedin" dynamic class="w-6 h-6" />
                        </ULink>
                    </UTooltip>
                </li>
                <li class="hover:bg-black/20 rounded-lg p-2">
                    <UTooltip :text="appConfig.socials.email" :popper="{ arrow: true }">
                        <ULink :to="`mailto:${appConfig.socials.email}`" target="_blank">
                            <UIcon name="i-material-symbols-alternate-email" dynamic class="w-6 h-6" />
                        </ULink>
                    </UTooltip>
                </li>
            </ul>
        </header>
        <main class="leading-relaxed">
            <slot />
        </main>
    </div>
</template>