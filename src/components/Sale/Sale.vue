<template>
	<div class="Sale_container">
		<p class="Sale_text">
			<img src="../../assets/imgs/arrow (1).png" class="goback" @click='goback'>
			<span>销售管理</span>
		</p>
		<div class="main">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">产品销售记录表</mt-tab-item>
			  <mt-tab-item id="2">客户意见簿</mt-tab-item>
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
				<el-form :label-position="labelPosition" label-width="95px">
				  <el-form-item label="用户姓名:">
				    <el-input v-model="yhxm"></el-input>
				  </el-form-item>
				   <el-form-item label="用户电话:">
				    <el-input v-model="yhdh"></el-input>
				  </el-form-item>
				   <el-form-item label="用户地址:">
				    <el-input v-model="yhdz"></el-input>
				  </el-form-item>
				   <el-form-item label="销售日期:">
				    <el-input v-model="xsrq"></el-input>
				  </el-form-item>
				   <el-form-item label="销售人员:">
				    <el-input v-model="xsry"></el-input>
				  </el-form-item>
				   <el-form-item label="产品名称:">
				    <el-input v-model="cpmc"></el-input>
				  </el-form-item>
				   <el-form-item label="规格:">
				    <el-input v-model="gg"></el-input>
				  </el-form-item>
				   <el-form-item label="数量:">
				    <el-input v-model="sl"></el-input>
				  </el-form-item>
				   <el-form-item label="生产批号:">
				    <el-input v-model="scph"></el-input>
				  </el-form-item>
				   <el-form-item label="有效期:">
				    <el-input v-model="yxq"></el-input>
				  </el-form-item>
				</el-form>
				<mt-button type="primary" class="pedit">提交</mt-button>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			     <p class="title">客户意见</p>
				<el-form :label-position="labelPosition" label-width="95px">
				  <el-form-item label="用户姓名:">
				    <el-input v-model="userName"></el-input>
				  </el-form-item>
				  <el-form-item label="意见内容:">
				    <el-input type="textarea" v-model="Opinion"></el-input>
				  </el-form-item>
				</el-form>
				<mt-button type="primary" class="pedit">提交</mt-button>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script type="text/javascript">
	//import './Sale.scss'
	export default {
		data(){
			return {
				labelPosition:'right',
				selected:'1',
				yhxm:'',
				yhdh:'',
				yhdz:'',
				xsrq:'',
				xsry:'',
				cpmc:'',
				gg:'',
				sl:'',
				scph:'',
				yxq:'',
				userName:'',
				Opinion:''
			}
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
			toIncomplete(){
				this.$router.push({name:'Incomplete'})
			},
		    search(){
		     	console.log(this.formInline.region)
		     	
		     }
		}
	}
</script>
<style lang="scss" src="./Sale.scss"></style>