<template>
    <div class="app-container">


        <!-- 顶部区域 -->
        <h1>component</h1>
        <mt-header fixed title="固定在顶部"></mt-header>
        <!-- 路由 router-view 区域 -->


        <!-- TabBar区域 -->
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">消息</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">通讯录</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </a>
        </nav>

    </div>
</template>

<script>


</script>


<style lang="scss" scoped>
.app-container{
    padding-top: 40px;
}
</style>
