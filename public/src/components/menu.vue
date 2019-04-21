<template>
    <div class="ydc-menu">
        <ul>
            <li class="ydc-menu-item" v-for="menu in menus">
                <router-link v-if="menu.type == 'link'" :to="menu.to">
                    <i :class="['ydc-icon', 'fl', menu.icon] "></i>
                    {{menu.title}}
                </router-link>
                <div v-if="menu.type == 'sub'">
                    <span class="ydc-menu-sub-title">
                        <i :class="['ydc-icon', 'fl', menu.icon]"></i>
                        {{menu.title}}
                    </span>
                    <ul>
                        <li v-for="child in menu.children">
                            <router-link :to="child.to">{{child.title}}</router-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'menu',
    data(){
        return {
            menus:[
                {type: 'link', to: {name: 'index',params: ''}, icon: 'ydc-icon-home', title: '首页'},
                {type: 'link', to: {name: 'release',params: ''}, icon: 'ydc-icon-find', title: '发布'},
                {type: 'sub', icon: 'ydc-icon-file', title: '管理', children: [
                    {to: {name: 'xxx',params: ''}, title: '内容管理'},
                    {to: {name: 'xxx',params: ''}, title: '内容同步'},
                    {to: {name: 'xxx',params: ''}, title: '素材中心'},
                ]},
                {type: 'sub', icon: 'ydc-icon-record', title: '数据', children: [
                    {to: {name: 'xxx',params: ''}, title: '订阅数据'},
                    {to: {name: 'xxx',params: ''}, title: '内容数据'},
                    {to: {name: 'xxx',params: ''}, title: '指数星级'},
                ]},
                {type: 'sub', icon: 'ydc-icon-set', title: '设置', children: [
                    {to: {name: 'xxx',params: ''}, title: '账号信息'},
                    {to: {name: 'xxx',params: ''}, title: '账号状态'}
                ]},
                {type: 'sub', icon: 'ydc-icon-customer', title: '客服', children: [
                    {to: {name: 'xxx',params: ''}, title: '在线咨询'}
                ]}
            ]
        }
    }
}
</script>
<style scoped>
</style>

