# Hexo

快速、简洁且高效的博客框架

> 本模版 基于 [Butterfly 主题](https://github.com/jerryc127/hexo-theme-butterfly) 搭建

## 模版示例

> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP]
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT]
> 对用户达成目标至关重要的信息。

> [!WARNING]
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION]
> 行为可能带来的负面影响。

<iframe v-if='flag' src="//team.zhangsifan.com/hexo-template/" style="border: none; width: 100%; height: 768px" ></iframe>

<script setup>
import { ref } from 'vue'
const flag = ref(false)

onMounted(() => {
    flag.value = true
})
</script>
