<script setup>
import { computed } from "vue";
import Giscus from "@giscus/vue";
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
const { lang, isDark } = useData();
const giscusLang = computed(() => {
  return lang.value;
});
const giscusTheme = computed(() => {
  return isDark.value ? "dark" : "light";
});
</script>

<template>
  <Layout>
    <template #doc-footer-before>
      <Giscus
        repo="AlwaysTeam/alwaysteam.github.io"
        repoId="R_kgDOH7iQ7A"
        category="General"
        categoryId="DIC_kwDOH7iQ7M4Cvnwg"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        :theme="giscusTheme"
        :lang="giscusLang"
        loading="lazy"
        crossorigin="anonymous"
      />
    </template>
  </Layout>
</template>
