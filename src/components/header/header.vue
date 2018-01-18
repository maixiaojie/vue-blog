<template>
	<Affix>
		<Row :class="[headClass]">
			<Col class="headerLeft" span="12">
				<img width="20" src="../../assets/photo.jpg">
				<span class="project"><a href="">simless</a></span>
			</Col>
			<Col span="12">
				<ol>
					<li><a href="/#/blog">博文</a></li>
					<li><a href="/#/timeline">时间轴</a></li>					
					<li><a href="/">实验室</a></li>
					<li><a href="">小游戏</a></li>
					<li><a href="">留言</a></li>
					<li><a href="/#/new">new</a></li>
				</ol>
			</Col>		
		</Row>
	</Affix>
</template>

<script type="text/javascript">
	export default {
		name: 'myHeader',
		data() {
			return {
				headClass: 'headerIndex'
			}
		},
		watch: {
			'$route' (to, from) {
				let that = this
				if(to.path == '/') {
					that.headClass = 'headerIndex'
				}else {
					that.headClass = 'header'
				}
			}
		}
	}
</script>
<style type="text/css">
	.header{
		height: 55px;		
		background: #3A3C49;
		color: white;
		font-family: PingFang SC,Helvetica neue,Helvetica,Tahoma,lantinghei sc,Microsoft Yahei,sans-serif;
		box-shadow: 0 0 15px rgba(0,0,0,.4);
	}
	.headerIndex{
		height: 55px;
		z-index: 1;	
		color: white;
		font-family: PingFang SC,Helvetica neue,Helvetica,Tahoma,lantinghei sc,Microsoft Yahei,sans-serif;
	}
	.header img, .headerIndex img {
		padding-top: 16px;
		margin:0 10px 0 30px;
		float: left;
	}
	.header ol, .headerIndex ol {
		height: 55px;
		line-height: 55px;
		float: right;
		margin-right: 100px;
	}
	.header ol li, .headerIndex ol li{
		height: 55px;
		width: 55px;
		float: left;
		text-align: center;
		line-height: 55px;
	}
	.header ol li a, .headerIndex  ol li a{
		color: white;
		display: inline-block;
		width: 100%;
	}
	.header ol li a:hover, .headerIndex ol li a:hover{
		color: #538D68;
	}
	.project{
		line-height: 55px;
		float: left;
		display: inline-block;
		font-size: 18px;
		font-weight: 200;
	}
	.project a{
		color: white;
	}
</style>