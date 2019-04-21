<template>
    <div class="ydc-tabPanel ydc-tabPanel-release">
        <div class="ydc-release-tab-head">
            <ul>
                <li v-for="tab,index in tabs" :class="index==cur?'hit':''" @click="cur=index">{{tab.title}}</li>
            </ul>
            <slot name="account"></slot>
        </div>
        <div class="ydc-panes">
            <div v-for="tab,index in tabs" class="ydc-pane" :style="{display: index==cur?'block':'none'}">
                <slot :name="tab.slotname"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'tabPanelRelease',
    props: ['tabs'],
    data(){
        return {
            cur:0
        }
    }
}
</script>
<style scoped>

</style>
