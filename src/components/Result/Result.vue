<template>
	<div class="Result_container">
		<p class="Result_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click='goback'>
			<span>查询结果</span>
		</p>
		<div class="main">
			<div class="get">
				<div class="name">
					搜索到的公司:
					<el-radio class="radio" v-model="radio" label="1" v-for= "arr in a">{{arr.enterprise_name}}</el-radio>
				</div>
				<el-form :label-position="labelPosition" label-width="1.688889rem">
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
				radio:'1',
				a:[['aa'],['bb']],
				id:''
			}
		},
		created(){
			let aa = JSON.parse(sessionStorage.getItem('aaa'));
			console.log(aa)
			if(aa.length == 0){
				this.$router.push({name:'Result3'})
			}else{
				this.a = aa;
				this.id = aa[0].id;
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
		    	if(this.cpmc===''){
		    		this.$messagebox.alert('请输入产品名称!')
		    	}else{
		    		let obj = {enterprise_id:this.id,product_name:this.cpmc}
		    		this.$http.post(baseUrl+'/searchProduct',obj).then((res)=>{
						console.log(res)
						let data = res.data.data;
						this.$router.push({name:'Result1',params:{data}})
		              	if(res.data.retCode === -11){
		              		
		              	}else{
		              		
		              	}
			        },(err)=>{
			             this.$messagebox.alert('操作失败,请稍后再试!');
			        });

			     	// console.log(this.radio)
			     	// this.$router.push({name:'Result1'})
		    	}
		     }
		}
	}
</script>
<style lang="scss" src="./Result.scss"></style>