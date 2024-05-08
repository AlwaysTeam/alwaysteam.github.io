# Vue

## 模版示例

<iframe v-if='flag' src="//team.zhangsifan.com/vue3-elementplus-ts-template/" style="border: none; width: 100%; height: 768px" ></iframe>

<script setup>
import { ref,onMounted } from 'vue'

const flag = ref(false)

onMounted(() => {
   setTimeout(() => {
      flag.value = true
    }, 1000)
    console.log(123)
})
</script>
