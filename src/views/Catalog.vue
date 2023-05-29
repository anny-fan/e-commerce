<template>
  <div>
    Catalog
    <div is="vue:ThreeCol"></div>
    <div is="vue:OneCol"></div>
    <!-- <n-tabs type="segment">
      <n-tab-pane name="display1" tab="1">
        我这辈子最疯狂的事，发生在我在 Amazon 当软件工程师的时候，故事是这样的：<br /><br />
        那时我和女朋友住在一起，正在家里远程工作。忽然同事给我发来了紧急消息：”我们的服务出现了 SEV
        2 级别的故障！需要所有的人马上协助！“我们组的应用全挂掉了。<br /><br />
        当我还在费力的寻找修复方法的时候，忽然闻到隔壁房间的的焦味，防火报警器开始鸣叫。
        <p class="text-red-400">color</p>
      </n-tab-pane>
      <n-tab-pane name="display2" tab="2">
        “威尔！着火了！快来帮忙！”我听到女朋友大喊。现在一个难题在我面前——是恢复一个重要的 Amazon
        服务，还是救公寓的火。<br /><br />
        我的脑海中忽然出现了 Amazon
        著名的领导力准则”客户至上“，有很多的客户还依赖我们的服务，我不能让他们失望！所以着火也不管了，女朋友喊我也无所谓，我开始
        debug 这个线上问题。
      </n-tab-pane>
    </n-tabs> -->
  </div>
</template>

<script setup>
// import { NTabs, NTabPane } from 'naive-ui'

//  const icon1 = <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
//   <path d="m0 0h138.5v138.5h-138.5zm0 0"></path>
//   <path d="m373.5 0h138.5v138.5h-138.5zm0 0"></path>
//   <path d="m186.75 0h138.5v138.5h-138.5zm0 0"></path>
//   <path d="m0 186.75h138.5v138.5h-138.5zm0 0"></path>
//   <path d="m373.5 186.75h138.5v138.5h-138.5zm0 0"></path>
//   <path d="m186.75 186.75h138.5v138.5h-138.5zm0 0"></path>
//   <path d="m0 373.5h138.5v138.5h-138.5zm0 0"></path>
//   <path d="m373.5 373.5h138.5v138.5h-138.5zm0 0"></path>
//   <path d="m186.75 373.5h138.5v138.5h-138.5zm0 0"></path>
// </svg>

// const icon2 = <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
//   <path d="M0-0.3h113.3v142.5H0V-0.3z"></path>
//   <path d="M149.3-0.3H512v142.5H149.3V-0.3z"></path>
//   <path d="M0,184.6h113.3v142.5H0V184.6z"></path>
//   <path d="M149.3,184.6H512v142.5H149.3V184.6z"></path>
//   <path d="M0,369.5h113.3V512H0V369.5z"></path>
//   <path d="M149.3,369.5H512V512H149.3V369.5z"></path>
// </svg>
</script>

<style lang="scss" scoped>
:deep(.n-tabs .n-tabs-rail) {
  width: 100px;
  background-color: transparent;
}
</style>
