<template>
	<div class="Result1_container">
		<p class="Result1_text">
			<img src="../../assets/imgs/arrow (1).png" class="goback" @click='goback'>
			<span>查询结果</span>
		</p>
		<div class="main">
			<div class="notfound" v-show="show">
				<img src="../../assets/imgs/enquiries@3x.png" alt="">
				<p>无结果</p>
				<mt-button type="primary" class="pedit" @click="addPro">添加产品</mt-button> 
			</div>
			<div class="get" v-show="show1">
				<p>产品已存在！不需要添加！</p>
			</div>
			<div class="exist">
				
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	//import './Result1.scss'
	export default {
		data(){
			return {
				show:true,
				show1:''
			}
		},
		created(){
			console.log(this.$route.params.companyName)
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
			addPro(){
				this.$router.push({name:'AddProduct'})
			},
		    search(){
		     	console.log(this.radio)
		     }
		}
	}
</script>
<style lang="scss" src="./Result1.scss"></style>