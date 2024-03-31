<script lang="ts" setup>
defineOgImageComponent("NuxtSeo", {
  theme: 'EC4899'
});

useSeoMeta({
  title: 'Torben Haack',
  ogTitle: 'Torben Haack - trbn.dev',
  description: 'Software Engineer, Computer Science Expert and Media Creator from Berlin.',
  ogDescription: 'Software Engineer, Computer Science Expert and Media Creator from Berlin.',
})
useSeoMeta({
  ogTitle: 'Torben Haack - trbn.dev',
  ogDescription: 'Software Engineer, Computer Science Expert and Media Creator from Berlin.',
  ogUrl: 'https://trbn.dev/',
  twitterTitle: 'Torben Haack - trbn.dev',
  twitterDescription: 'Software Engineer, Computer Science Expert and Media Creator from Berlin.',
  twitterCard: 'summary'
})
</script>


<template>
  <div class="flex flex-col gap-8">
    <section>
      <p>Software Engineer, <UTooltip text="Subject Area: Data and Process Analysis">
          Computer Science Expert</UTooltip>
        and Media Creator from Berlin.
      </p>
      <p>
        Currently working at <ULink to="https://www.mercedes-benz.com" target="_blank">Mercedes-Benz</ULink>.
      </p>
    </section>
    <section class="flex flex-col gap-6">
      <h3 class="font-medium">Projects</h3>
      <ContentList path="/projects">
        <template #default="{ list }">
          <div v-for="project in list" :key="project._path"
            class="hover:cursor-pointer select-none hover:bg-black/20 p-3 -m-3 rounded-lg">
            <ULink :to="project._path">
              <div class="flex gap-4 items-center">
                <h4>{{ project.title }}</h4>
                <UBadge :color="project.status.color" variant="soft" size="xs">{{ project.status.label }}</UBadge>
              </div>
              <p class="opacity-80 line-clamp-1">{{ project.description }}</p>
            </ULink>
          </div>
        </template>
        <template #not-found>
          <div class="opacity-50 flex gap-2 items-center">
            <UIcon name="i-uil-desert" class="w-5 h-5" dynamic />
            <p>No projects here yet.</p>
          </div>
        </template>
      </ContentList>
    </section>
    <section class="flex flex-col gap-4">
      <h3 class="font-medium">Writing</h3>
      <ContentList path="/writing">
        <template #default="{ list }">
          <div v-for="writing in list" :key="writing._path"
            class="hover:cursor-pointer select-none hover:bg-black/20 p-3 -m-3 rounded-lg">
            <ULink :to="writing._path">
              <div class="flex gap-4 items-center">
                <h4>{{ writing.title }}</h4>
              </div>
              <p class="opacity-80 line-clamp-1">{{ writing.description }}</p>
            </ULink>
          </div>
        </template>
        <template #not-found>
          <div class="opacity-50 flex gap-2 items-center">
            <UIcon name="i-uil-desert" class="w-5 h-5" dynamic />
            <p>There is not much here yet.</p>
          </div>
        </template>
      </ContentList>
    </section>
  </div>
</template>
