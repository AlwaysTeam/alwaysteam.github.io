---
layout: page
title: 关于
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/40380551?v=4',
    name: 'JCAlways',
    title: '创造者',
    links: [
      { icon: 'github', link: 'https://github.com/JCAlways' },
      { icon: 'gitlab',link: 'https://gitlab.com/JCAlways' },
      { icon: 'gitee', link: 'https://gitee.com/JCAlways' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
      AlwaysTeam的开发由一个中国团队指导，其中一些人选择成为下面展示的团队。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>