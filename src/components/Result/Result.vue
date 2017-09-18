<template>
	<div class="Result_container">
		<p class="Result_text">
			<img src="../../assets/imgs/arrow (1).png" class="goback" @click='goback'>
			<span>查询结果</span>
		</p>
		<div class="main">
			<div class="notfound" v-show="show">
				<img src="../../assets/imgs/enquiries@3x.png" alt="">
				<p>无结果</p>
				<mt-button type="primary" class="pedit" @click="addCompany">添加首营企业</mt-button> 
			</div>
			<div class="get" v-show="show1">
				<div class="list">
					<el-radio class="radio" v-model="radio" :label="a[0]" v-for= "a in a">{{a[0]}}</el-radio>
				</div>
				<el-form :label-position="labelPosition" label-width="95px">
				  <el-form-item label="产品名称:">
				    <el-input v-model="cpmc"></el-input>
				  </el-form-item>
				</el-form>
				<mt-button type="primary" class="pedit" @click="search">搜索</mt-button> 
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	//import './Result.scss'
	export default {
		data(){
			return {
				labelPosition:'right',
				cpmc:'',
				show:'',
				show1:'',
				radio:'',
				a:[['aa'],['bb']]
			}
		},
		created(){
			let a = this.$route.params.data;
			console.log(a.length)
			if(a.length == 0){
				this.show = true;
				this.show1 =false;
				console.log(this.show,123)
			}else{
				this.show = false;
				this.show1 = true;
			}
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
			addCompany(){
				this.$router.push({name:'FirstBusiness'})
			},
		    search(){
		    	if(this.radio===''){
		    		this.$messagebox.alert('请选择公司名称!')
		    	}else if(this.cpmc===''){
		    		this.$messagebox.alert('请选择公司名称!')
		    	}else{
			     	console.log(this.radio)
			     	this.$router.push({name:'Result1'})
		    	}
		     }
		}
	}
</script>
<style lang="scss" src="./Result.scss"></style>