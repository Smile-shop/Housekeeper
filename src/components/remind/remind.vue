<template>
	<div class="remind_container">
		<p class="remind_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click=goback>
			<span>产品近效期提醒</span>
		</p>
		<div class="main">
			<div class="psearch">
				<input type="text" class="jobx" placeholder="产品名称" v-model = proName>
				<input type="text" class="jobx" placeholder="产品批次" v-model = proBatch>
				<mt-button type="primary" class="search" @click=search>查询</mt-button><br>
			</div>
			<p class="rtips">系统默认提醒时间为三个月,特殊产品需更改请查询后更改</p>
			<el-form label-width="1.422222rem">
				<el-form-item label="查询">
				    <el-input :disabled="true" class="input1" v-model = query></el-input>
				</el-form-item>
				<el-form-item label="生产批号">
				    <el-input :disabled="true" class="input1" v-model = bacth></el-input>
				</el-form-item>
				<el-form-item label="提醒时间">
				    <el-select v-model="dataTime" placeholder="请选择时间">
				      <el-option label="三个月" value="三个月"></el-option>
				    </el-select>
				</el-form-item>
				<el-form-item label="到期时间">
				    <el-input :disabled="true" class="input1" v-model = dtime></el-input>
				</el-form-item>
				<el-form-item label="库存数量">
				    <el-input :disabled="true" class="input1" v-model = number></el-input>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script type="text/javascript">
	//import './remind.scss'
	export default {
		data(){
			return {
				query:'zidong',
				dataTime:'',
				bacth:'',
				dtime:'',
				number:'',
				proName:'',
				proBatch:'',
				formInline: {
		          user: '',
		          region: ''
		        },
		        jod:[['店长'],['进货岗'],['销售岗'],['质量安全岗'],['质量追踪岗']]
			}
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
		    search(){
		     	
		     }
		}
	}
</script>
<style lang="scss" src="./remind.scss"></style>