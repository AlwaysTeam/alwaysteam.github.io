# Vue

Progressive JavaScript Framework

> This template is a backend management system template developed based on [Vue3 <Badge type="tip" text="^3.2.47" />](https://vuejs.org/) + [Element Plus <Badge type="tip" text="^2.2.29" />](https://element-plus.org/en-US/) + [axios <Badge type="tip" text="^1.3.2" />](https://axios-http.com/).

## Template Example

<iframe v-if='flag' src="//team.zhangsifan.com/vue3-elementplus-ts-template/" style="border: none; width: 100%; height: 768px" ></iframe>

<script setup>
import { ref,onMounted } from 'vue'

const flag = ref(false)

onMounted(() => {
   setTimeout(() => {
      flag.value = true
    }, 300)
})
</script>