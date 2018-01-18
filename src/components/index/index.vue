<template>
	<div class="canvasbg" :style="{height: windowHeight+ 'px'}">

		<vue-particles
	        color="#dedede"
	        :particleOpacity="0.7"
	        :particlesNumber="80"
	        shapeType="circle"
	        :particleSize="4"
	        linesColor="#dedede"
	        :linesWidth="1"
	        :lineLinked="true"
	        :lineOpacity="0.4"
	        :linesDistance="150"
	        :moveSpeed="3"
	        :hoverEffect="true"
	        hoverMode="grab"
	        :clickEffect="true"
	        clickMode="push"
	      >
	      </vue-particles>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'index',
		data() {
			return {
				windowHeight: 500
			}
		},
		mounted() {
			this.getHeight()
		},
		methods: {
			getHeight() {
				this.windowHeight = window.innerHeight
			}
		}
	}
</script>
<style type="text/css">
	.canvasbg {
		width: 100%;
		background: url('../../assets/sky.871d198.jpg');
		background-size: cover;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>