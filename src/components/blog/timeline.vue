<template>
	<Row class="container">
		<Col>
		<Timeline class="timeline">
			<TimelineItem>
	           <p class="time">2018年01月</p>
	           <p class="content"><a href="">设计 Timeline 时间轴来更精确地控制动画</a><span>2017-08-22</span></p>
	           <p class="content"><a href="">用信号来控制异步流程</a><span>2017-08-22</span></p>
	           <p class="content"><a href="">设计 Timeline 时间轴来更精确地控制动画</a><span>2017-08-22</span></p>
			</TimelineItem>
			<TimelineItem>
	           <p class="time">2018年01月</p>
	           <p class="content"><a href="">设计 Timeline 时间轴来更精确地控制动画</a><span>2017-08-22</span></p>
	           <p class="content"><a href="">用信号来控制异步流程</a><span>2017-08-22</span></p>
	           <p class="content"><a href="">设计 Timeline 时间轴来更精确地控制动画</a><span>2017-08-22</span></p>
			</TimelineItem>
			<TimelineItem>
	           <p class="time">2018年01月</p>
	           <p class="content"><a href="">设计 Timeline 时间轴来更精确地控制动画</a><span>2017-08-22</span></p>
	           <p class="content"><a href="">用信号来控制异步流程</a><span>2017-08-22</span></p>
	           <p class="content"><a href="">设计 Timeline 时间轴来更精确地控制动画</a><span>2017-08-22</span></p>
			</TimelineItem>		
			<TimelineItem>
	           <p class="time">2018年01月</p>
	           <p class="content"><a href="">设计 Timeline 时间轴来更精确地控制动画</a><span>2017-08-22</span></p>
	           <p class="content"><a href="">用信号来控制异步流程</a><span>2017-08-22</span></p>
	           <p class="content"><a href="">设计 Timeline 时间轴来更精确地控制动画</a><span>2017-08-22</span></p>
			</TimelineItem>	
			<TimelineItem>
	           <p class="time">2018年01月</p>
	           <p class="content"><a href="">设计 Timeline 时间轴来更精确地控制动画</a><span>2017-08-22</span></p>
	           <p class="content"><a href="">用信号来控制异步流程</a><span>2017-08-22</span></p>
	           <p class="content"><a href="">设计 Timeline 时间轴来更精确地控制动画</a><span>2017-08-22</span></p>
			</TimelineItem>		
		</Timeline>
		</Col>
	</Row>
</template>
<script type="text/javascript">
	export default {
		name: 'timeline',
		data() {
			return {

			}
		}

	}
</script>
<style type="text/css">
	.container{
		margin:30px;
	}
	.timeline {
		width: 500px;
		margin: 0 auto !important;
	}
	.time{
        font-size: 14px;
        font-weight: bold;
        padding-bottom: 8px;
    }
    .container .ivu-timeline-item:first-child > :last-child > :nth-child(2) a {		
		color: #3A3C49;
		position: relative;
    }
    .container .ivu-timeline-item:first-child > :last-child > :nth-child(2) a:after{		
		content: "new";
		color: red;
		font-size: 10px;
		position: absolute;
		top:-5px;
		left:-18px;

    }
    .content{
        padding-left: 8px;
        margin-bottom: 5px;
    }
    .content a {
    	color:#71777c;
    }
    .content span {
    	padding-left: 10px;
    	color:#71777c;
    	
    }
</style>