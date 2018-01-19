<template>
	<div @click="contentClick">
		<Row>
			<Col class="b-top" span="24" :style="{'height': height + 'px'}">
				<h1 class="b-top-title"><Icon type="chatbubble-working"></Icon>&nbsp;说点啥</h1>
				<div class="postContainer">
					<div class="b-container">
						<div class="b-con-l">
							<div class="b-con-l-t" @click="openInput">
								<img src="../../assets/default.jpg" height="50" width="50"></div>
							<div class="b-con-l-b" @click="openInput">{{form.username}}</div>
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
			<Col span="24" style="background: #f4f4f4;">
				<div class="blessPage">
					<Row :gutter="20">
				        <Col span="18">
					        <div class="listContainer">
					        	<div class="list" v-for="item in items">
					            	<div class="avatar">
					            		<img src="../../assets/default.jpg">
					            	</div>
					            	<div class="content">
					            		<div class="caption">{{item.name}}</div>
					            		<div class="text">{{item.text}}</div>
					            		<div class="foot">{{item.time}}<span class="replyBtn">回复</span></div>
					            	</div>
					            </div>
					        </div>
				            
				        </Col>
				        <Col span="6">
				            <div class="person">col-6</div>
				        </Col>
				    </Row>
				</div>
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
					content: '评论屌一点，BUG少一点！',
					username: '匿名'
				},
				items: [{
					name: 'tracy',
					text: '哈哈哈哈哈',
					time: '13:43 2018-1-18'
				},{
					name: 'tracy',
					text: '哈哈哈哈哈',
					time: '13:43 2018-1-18'
				},{
					name: 'tracy',
					text: '哈哈哈哈哈',
					time: '13:43 2018-1-18'
				},{
					name: 'tracy',
					text: '哈哈哈哈哈',
					time: '13:43 2018-1-18'
				},{
					name: 'tracy',
					text: '哈哈哈哈哈',
					time: '13:43 2018-1-18'
				}],
				height: 500,
				btnHeight: 0,
				textClass: 'b-con-r',
				isBtnShow: 'none'
			}
		},
		created() {
			this.$Progress.start()
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
			openInput() {
				this.$Modal.confirm({
					render: (h) => {
						return h('Input', {
							props: {
								value: this.form.username,
								autofocus: true,
								placeholder: '输入'
							},
							on: {
								input:  (val) => {
									this.form.username = val
								}
							}
						})
					}
				})
			},
			contentClick(e) {				
				if(e.target.className === 'b-top-title' || e.target.className === 'postContainer' || e.target.className === 'b-top ivu-col ivu-col-span-24') {
					this.btnHeight = 0
					this.isBtnShow = 'none'
				}
			},

		}
	}
</script>
<style type="text/css">
	.b-top {
		background: url('../../assets/comment_2_@2x.4679e0fc.jpg') #cef;
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
	.blessPage {
		width: 1200px;
		margin: 0 auto;
		padding: 20px 0px;
	}
	.blessPage .listContainer {
		width: 100%;
		overflow: hidden;
	    background: #fff;
	    border-radius: 2px;
	    box-shadow: 0 0 2px rgba(0,0,0,.2);
	}
	.blessPage .list {
		width: 100%;
		background: white;
		display: flex;
		border-bottom: 1px solid #eee;
	}
	.blessPage .list:hover {
		background: #fafafa;
	}
	.list .avatar {
		width: 80px;
		height: 80px;
		padding: 15px;
	}
	.list .avatar img{
		width: 100%;
		height: 100%;
		border-radius: 5px;
	}
	.list .content {
		flex: 1;
		min-height: 80px;
		padding: 15px 15px 15px 0;
	}
	.content .caption {
		width: 100%;
		margin-bottom: 10px;
		line-height: 18px;
		font-weight: 500px;
		font-size: .85rem;
	}
	.content .text {
		width: 100%;
		min-height: 20px;
		margin-bottom: 10px;
		line-height: 1.5;
		font-size: 0.85rem;
		color: #333;
		word-wrap: break-word;
		word-break: break-all;
	}
	.content .foot {
		width: 100%;
		color: #aaa;
	}
	.content .foot .replyBtn {
		float: right;
		cursor: pointer;
		font-size: 0.85rem;
	}
	.blessPage .person {
		width: 100%;
		background: #eee;
		height: 100px;
	}
</style>