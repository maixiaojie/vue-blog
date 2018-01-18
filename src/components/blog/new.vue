<template>
	<div class="form-ctrl">
		<Row>
			<Col span="24">
				 <Form :model="form" :label-width="80">
				 	<FormItem label="标题">
			            <Input v-model="form.title" placeholder="输入文章标题"></Input>
			        </FormItem>
			        <FormItem label="分类">
			            <Select v-model="form.type">
			                <Option value="beijing">New York</Option>
			                <Option value="shanghai">London</Option>
			                <Option value="shenzhen">Sydney</Option>
			            </Select>
			        </FormItem>
			        <FormItem label="tags">
			            <Input v-model="form.tags" placeholder="输入自定义标签，多个用逗号分割"></Input>
			        </FormItem>
			        <FormItem label="摘要">
			            <Input v-model="form.intro" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="输入文章摘要"></Input>
			        </FormItem>
			        <FormItem label="正文">
			            <mavon-editor style="height: 500px" v-model="form.content">
			        	</mavon-editor>
			        </FormItem>		
			        <FormItem>
			        	<Button @click="postData" type="primary">保存</Button>
			        </FormItem>	       
				 </Form>
			</Col>
		</Row>
	</div>
</template>
<script type="text/javascript">
 import { mavonEditor } from 'mavon-editor'
 import 'mavon-editor/dist/css/index.css'
	export default {
		name: 'BlogNew',	
		components: {
            mavonEditor
        },	
		data() {
			return {
				form: {
					title: '',
					type: '',
					intro: '',
					tags: '',
					content: ''
				}
			}
		},
		methods: {
			postData() {
				console.log(this.form)
			}
		}
	}
</script>
<style type="text/css">
	.form-ctrl {
		margin: auto;
		width: 1200px;
		margin-top: 30px;
		min-height: 400px;
	}
	#editor {
        margin: auto;
        width: 90%;
        height: 580px;
    }
</style>