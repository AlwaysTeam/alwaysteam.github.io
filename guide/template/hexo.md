# Hexo

快速、简洁且高效的博客框架

> 本模版 基于 [Butterfly 主题](https://github.com/jerryc127/hexo-theme-butterfly) 搭建

## 模版示例

<iframe v-if='flag' src="//team.zhangsifan.com/hexo-template/" style="border: none; width: 100%; height: 768px" ></iframe>

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
