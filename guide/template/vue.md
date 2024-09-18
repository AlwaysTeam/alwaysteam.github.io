# Vue

渐进式 JavaScript 框架

> 本模版基于 [Vue3 <Badge type="tip" text="^3.2.47" />](https://vuejs.org/) + [Element Plus <Badge type="tip" text="^2.2.29" />](https://element-plus.org/zh-CN/) + [axios <Badge type="tip" text="^1.3.2" />](https://axios-http.com/) 开发的后台管理系统模版。

## 模版示例

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
