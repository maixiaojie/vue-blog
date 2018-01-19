<template>
	<div class="footer" :style="{'display': isShow}">footer</div>
</template>

<script type="text/javascript">
	export default {
		name: 'myFooter',
		data() {
			return {
				isShow: 'block'
			}
		},
		created() {

		}
	}
</script>
<style type="text/css">
	.footer {
		width: 100%;
		height: 55px;
		text-align: center;
		line-height: 55px;
	}
</style>