<template>
    <div class="ydc-entered-box">
		<div class="ydc-content-right">
            <RightHead/>
			<RightBanner/>
			<!-- gongGao begin -->
			<div class="ydc-loading-box">
				<TabPanel/>
			</div>
			<!-- gongGao End -->
		</div>
	</div>
</template>
<script>
import TabPanel from '@/components/tabPanel'
import RightHead from '@/components/rightHead'
import RightBanner from '@/components/rightBanner'
export default {
    name: 'index',
    components: {
        RightHead,RightBanner,TabPanel
    }
}
</script>
<style scoped>

</style>

