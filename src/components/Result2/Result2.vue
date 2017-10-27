<template>
	<div class="Result2_container">
		<p class="Result2_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click='goback'>
			<span>查询结果</span>
		</p>
		<div class="main">
			<div class="notfound">
				<mt-button type="primary" class="pedit" @click="addPro">添加产品</mt-button> 
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	//import './Result1.scss'
	export default {
		data(){
			return {
				
			}
		},
		created(){
			let obj = {enterprise_name:this.$route.params.qymc}
			console.log(obj)
			this.$http.post(baseUrl+'/searchSupplier',obj).then((res)=>{
				console.log(res)
	          	if(res.data.retCode === 0){
				let data = res.data.data;
				sessionStorage.setItem('aaa',JSON.stringify(data));
	          	}
	        },(err)=>{
	             console.log(err)
	        });
		},
		methods: {
			goback(){
				this.$router.push({name:'FirstSelf'})
			},
			addPro(){
				this.$router.push({name:'AddProduct'})
			},
		}
	}
</script>
<style lang="scss" src="./Result2.scss"></style>