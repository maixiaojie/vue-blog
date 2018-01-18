<template>
	<div class="blog">
		<div class="top">
			<div class="mac">
				<div class="alogo">
					<h1><img src="../../assets/logo.png" height="90" width="90"></h1>
					<h3>lalala啦啦啦</h3>					
				</div>
			</div>
		</div>
		<Affix :offset-top="54">
			<div class="tagsConteniner">
				<div class="tags">
					<a class="tag tag-active" href="javascript:;">全部标签<span>23</span></a>
					<a class="tag" href="javascript:;" v-for="tag in tags">{{tag.tagname}}<span>{{tag.count}}</span></a>				
				</div>
			</div>
			
		</Affix>
		<div class="blogContainer">
			<div class="blogList">
				<div class="aticleItem" v-for="item in blog">
					<a :href="'#/blog/' + item.id ">
						<div class="pic">						
							<img src="//dn-lay.qbox.me/blog/toucher/Qzone.jpg?imageView2/2/w/420/q/85">
						</div>
						<div class="title">{{item.title}}</div>
						<div class="intro">{{item.intro}}</div>
					</a>
					<div class="info">
						<div class="blogTags">
							<strong>tags</strong>
							<a href="">javascript</a>
							<a href="">javascript</a>
							<a href="">javascript</a>						
						</div>
						<div class="time">10-12 2017</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	// import { Waterfall, WaterfallSlot } from 'vue-waterfall'
	export default {
		name: 'Blog',
		components: {
			// Waterfall,
			// WaterfallSlot
		},
		data() {
			return {
				tags: [{
					tagname: 'javascript',
					count: 20
				},{
					tagname: 'javascript',
					count: 20
				},{
					tagname: 'javascript',
					count: 20
				},{
					tagname: 'javascript',
					count: 20
				},{
					tagname: 'javascript',
					count: 20
				}],
				blog: []
			}
		},
		created() {
			for(var i=0; i<10; i++) {
				this.blog.push({					
					id: 1,
					title: '移动手势的秘密',
					img: '',
					intro: '再次见到合肥，在历经五年的沪漂之后，以一种渴望被接纳的姿态来到合肥。这篇文章作为【上海 · 再见】的下篇，原计划在2017年9月前后完成。很遗憾一直拖到了四个月后的2018年。既然已经拖了这么久，索性就当作2017年全年回顾好了。以八月为分界线，聊聊小剧这一年的经历。',
					tags: ['javascript', 'vue', 'reload'],
					times: 256,
					time: '01-01 2018'					
				})
			}
		}
	}
</script>
<style type="text/css">
	.blog{
		width: 100%;
		text-align: center;
		float: left;
	}
	.top {
		padding-top: 15px;
		width: 100%;
		margin:auto 0;
		float: left;
		background: #fafafa;
	}
	.mac {
		margin: auto;
		position: relative;
		width: 270px;
		height: 160px;
		background: linear-gradient(to right bottom, #fff, #eee);
		border:5px solid black;
		border-width: 5px 6px 6px;
		border-radius: 10px 10px 0 0;
		margin-bottom: 20px;
	}
	.mac::after {
		content: ' ';
		position: absolute;
		background: #ccc;
		width: 130%;
		height: 6px;
		left:-15%;
		bottom: -12px;
		border-radius: 0 0 40px 40px/0 0 5px 5px;
	}
	.tagsConteniner {
		width: 100%;
		float: left;
		height: 40px;
		background: white;  		
	}
	.tags {
		margin: auto;    	  
		text-align: left;
		width: 1200px;
		line-height: 40px;
		height: 40px;
	}
	.alogo {
	    width: 100%;
	    height: 140px;
	    float: left;
	}
	.alogo h1 {
		height: 100px;
	}
	.alogo h3 {
		height: 40px;
	}
	.tag {
		position: relative;
		background: #eee;
		padding: 8px 18px;
		color: black;
		border-radius: 0 5px 5px 0;
	}
	.tag::before {
		content: "";
		left: 0;
		bottom: 0;
		width: 0;
		height: 0;
		position: absolute;
		border-width:15px 15px 15px 0;
		border-color:#fafafa transparent; 
		border-style: solid;
	}
	.tag::after{
		content: "";
		position: absolute;
		width: 4px;
		height: 4px;
		left: 8px;
		top:14px;
		border-radius: 4px;
		background: white;
	}
	.tag:hover {
		background: black;
		color: white;
	}
	.tag-active {
		background: #f70;
		color: white;
	}
	.tag-active:hover {
		background: #f70;
		color: white;
	}
	.tag span {
		opacity: .4;
		padding: 0 0 0 5px;
	}
	.blogContainer {
		width: 100%;		
		background: #dee3e7;
		float: left;
	}
	.blogList {
		margin:0 auto;
		padding-top: 20px;
		width: 1200px;
	}
	.aticleItem {
		float: left;
		width: 300px;
		padding:0 5px 0px 5px;
		margin-bottom: 10px;
	}
	.aticleItem:hover {
	    box-shadow: 0px 6px 30px -3px rgba(0,0,0,.2);
	}
	.aticleItem a {
		display: block;
		background: white;
	}
	.aticleItem .pic:hover {
		opacity: 0.9;
	}
	.aticleItem img {
		height: 200px;
		width: 100%;
		max-width: 100%;
	}
	.aticleItem .title {
		font-weight: 400;
		color: #000;
		font-size: 18px;
		text-align: center;
		word-break: keep-all;
		overflow: hidden;
		padding: 0 0.5em;
	}
	.aticleItem .intro {
		color: #888;
		text-indent: 2em;
		font-size: 13px;
		line-height: 1.4;
		text-align: left;
		padding: 0.5em;
		height: 130px;
		overflow: hidden;
	}
	.aticleItem .info{
		width: 100%;
		background: #fbfbfb;
		border-top: 1px solid #e8e8e8;

		padding: 10px 0.5em;
	}
	.aticleItem .info .blogTags {
		float: left;

	}
	.aticleItem .info strong {
		margin-right: 5px;
		color: #aaa;
		font-weight: 400;
	}
	.aticleItem .info a {
		display: inline-block;
		background: #fbfbfb;
		margin-right: 5px;
    	color: #777;
	}
	.aticleItem .info .time {
		white-space: nowrap;
	    color: #888;
	    font-size: 12px;
	}
</style>