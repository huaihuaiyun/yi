<template>
    <div class="ydc-tabPanel">
		<div>
			<ul>
				<li v-for="data,index in datas" :class="index==cur?'hit':''" @click="cur=index">{{data.title}}</li>
			</ul>
        </div>
		<div class="ydc-panes">
			<div class="ydc-pane" v-for="data,index in datas" :style="{display: index==cur?'block':'none'}">
				<ol class="ydc-pane-list">
					<li v-for="news in data.data">
						<a :href="news.href" target="_blank">{{news.title}}<i v-if="news.isNew">new</i></a>
						<span>{{news.time}}</span>
					</li>
				</ol>
                <Pagination/>
			</div>
			<div class="ydc-pane">
				<ol class="ydc-pane-list">
					<li>
						<a href="https://www.toutiao.com/i6553905796478927364/" target="_blank">大号“思域”全新十代雅阁，革新换代后的全新十代雅阁到底如何！<i>new</i></a>
						<span>2017-04-17 10:00:00</span>
					</li>
				</ol>
                <Pagination/>
			</div>
		</div>
	</div>
</template>
<script>
import Pagination from '@/components/pagination'
export default {
	name: 'tabPanel',
	data(){
		return {
			cur: 0,
			datas:[
				{title: '公告栏',data: [
					{id: 2, title: '一点车点讯号平台关于封禁违规账号的通知', isNew: true, href: 'https://www.baidu.com', time: 1555604498510},
					{id: 4, title: '一点车点讯号平台关于封禁违规账号的通知2', isNew: false, href: 'https://www.baidu.com', time: 1555604398510},
					{id: 6, title: '一点车点讯号平台关于封禁违规账号的通知3', isNew: false, href: 'https://www.baidu.com', time: 1555604298510},
					{id: 8, title: '一点车点讯号平台关于封禁违规账号的通知4', isNew: false, href: 'https://www.baidu.com', time: 1555604198510}
				]},
				{title: '一点车资讯',data: [
					{id: 1, title: '一点车点讯号平台关于封禁违规账号的通知11', isNew: true, href: 'https://www.baidu.com', time: 1555604498510},
					{id: 3, title: '一点车点讯号平台关于封禁违规账号的通知22', isNew: false, href: 'https://www.baidu.com', time: 1555604398510},
					{id: 5, title: '一点车点讯号平台关于封禁违规账号的通知33', isNew: false, href: 'https://www.baidu.com', time: 1555604298510},
					{id: 7, title: '一点车点讯号平台关于封禁违规账号的通知44', isNew: false, href: 'https://www.baidu.com', time: 1555604198510}
				]}
			]
		}
	},
    components: {
        Pagination
    }
}
</script>
<style scoped>
</style>
