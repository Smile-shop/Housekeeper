<template>
	<div class="FirstSelf_container">
		<p class="FirstSelf_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click='goback'>
			<span>首营企业与产品自检</span>
		</p>
		<div class="main">
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="企业名称:">
			    <el-input v-model="qymc"  placeholder="请输入公司全称"></el-input>
			  </el-form-item>
			</el-form>
			<mt-button type="primary" class="pedit" @click="search">搜索</mt-button>
		</div>
	</div>
</template>

<script type="text/javascript">
	//import './FirstSelf.scss'
	export default {
		data(){
			return {
				labelPosition:'right',
				qymc:'',
			}
		},
		methods: {
			goback(){
				this.$router.push({name:'index'})
			},
			toIncomplete(){
				
			},
		    search(){
		    	if(this.qymc ===''){
		    		this.$messagebox.alert('请输入企业名称!')
		    	}else{
		    		let obj = {enterprise_name:this.qymc}
		    		this.$http.post(baseUrl+'/searchSupplier',obj).then((res)=>{
		    			console.log(res)
						let data = res.data.data;
						sessionStorage.setItem('aaa',JSON.stringify(data));
						this.$router.push({name:'Result'})
		              	if(res.data.retCode === -11){
		              		
		              	}else{
		              		
		              	}
			        },(err)=>{
			             this.$messagebox.alert('操作失败,请稍后再试!');
			        });
		    	// let companyName = this.qymc;
		     // 	this.$router.push({name:'Result',params:{companyName}})
		    	}
		     }
		}
	}
</script>
<style lang="scss" src="./FirstSelf.scss"></style>