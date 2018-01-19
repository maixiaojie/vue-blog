<template>
	<div @click="contentClick">
		<Row >
			<Col class="b-top" span="24" :style="{'height': height + 'px'}">
				<h1 class="b-top-title"><Icon type="chatbubble-working"></Icon>&nbsp;说点啥</h1>
				<div class="postContainer">
					<div class="b-container">
						<div class="b-con-l">
							<div class="b-con-l-t">
								<img src="../../assets/default.jpg" height="50" width="50"></div>
							<div class="b-con-l-b">你的大名</div>
						</div>
						<div class="b-con-r" :class="[textClass]">
							<textarea v-on:focus="focusText" v-on:blur="blurText" v-model="form.content"></textarea>							
						</div>
					</div>
					<div class="btnContainer" :style="{'height': btnHeight + 'px'}">
						<div class="btn" @click="postData" :style="{'display': isBtnShow}">发布</div>
					</div>
				</div>				
			</Col>
			<Col span="24">
				
			</Col>

		</Row>	
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'Bless',
		data() {
			return {
				form: {
					content: '评论屌一点，BUG少一点！'
				},
				height: 500,
				btnHeight: 0,
				textClass: 'b-con-r',
				isBtnShow: 'none'
			}
		},
		created() {
			this.height = this.getHeight() - 100
		},
		methods: {
			getHeight() {
				return window.innerHeight
			},
			focusText() {
				this.textClass = 'b-con-r-focus'
				this.btnHeight = 50
				this.isBtnShow = 'block'
				if(this.form.content === '评论屌一点，BUG少一点！') {
					this.form.content = ''
				}
			},
			blurText() {
				this.textClass = 'b-con-r'
				if(this.form.content === '') {
					this.form.content = '评论屌一点，BUG少一点！'
				}
			},
			postData() {
				console.log('1')
			},
			contentClick(e) {				
				if(e.target.className === 'b-top-title' || e.target.className === 'postContainer' || e.target.className === 'b-top ivu-col ivu-col-span-24') {
					this.btnHeight = 0
					this.isBtnShow = 'none'
				}
			}
		}
	}
</script>
<style type="text/css">
	.b-top {
		background: url('../../assets/comment_2_@2x.4679e0fc.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 50%;
	}
	.b-top-title {
		color: white;
		text-align: center;
		font-size: 38px;
		padding: 30px;
	}
	.b-container{
		width: 700px;
		margin:0 auto;
		background: white;
		height: 120px;
		padding: 20px 30px;
	}
	.btnContainer {
		width: 700px;
		background: white;
		margin: 0 auto;
		transition: all .1s linear;
	}
	.btnContainer .btn {
		float: right;
		margin-right: 30px;
		width: 50px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		background: #fa0;
		color: white;
	}
	.b-con-l {
		width: 80px;
		height: 80px;
		float: left;
	}
	.b-con-l-t {
		width: 60px;
		padding: 5px;
		height: 60px;
		float: left;
	}
	.b-con-l-t img {
		border-radius: 10px;
	}
	.b-con-l-b {
		width: 60px;
		height: 20px;
		float: left;
		text-align: center;
	}
	.b-con-r {
		width: 560px;
		height: 80px;
		border: 1px solid red;
		padding: 5px;
		position: relative;
		float: left;
		border: 1px solid #ddd;
		position: relative;
	}
	.b-con-r-focus {
		border-color: #fa0 !important;
	}
	.b-con-r-focus:before {
		border-color: #fa0 !important;
	}

	.b-con-r:before {
		content: "";
		width: 14px;
		height: 14px;
		display: block;
		border: 1px solid #ddd;
		border-width: 0 0 1px 1px;
		position: absolute;
		top: 15px;
		left: -7px;
		background: white;
		transform: rotate(45deg);
	}
	.b-con-r textarea {
		width: 100%;
		padding: 5px;
		border:0;
		color: #666;
		height: 70px;
		font-size: 16px;
		resize: none;
	}
	.b-con-r textarea:focus {
		outline: none;
	}
</style>