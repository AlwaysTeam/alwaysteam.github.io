---
layout: page
title: About
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
    title: 'Creator',
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
      Our Team
    </template>
    <template #lead>
      The development of AlwaysTeam is guided by a Chinese
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>