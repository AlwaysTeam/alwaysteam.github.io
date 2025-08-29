# VitePress

## Template Example

<iframe v-if='flag' src="//team.zhangsifan.com/vitepress-template/" style="border: none; width: 100%; height: 768px" ></iframe>

<script setup>
import { ref,onMounted } from 'vue'

const flag = ref(false)

onMounted(() => {
   setTimeout(() => {
      flag.value = true
    }, 300)
})
</script>