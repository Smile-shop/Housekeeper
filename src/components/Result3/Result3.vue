<template>
	<div class="Result3_container">
		<p class="Result3_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click='goback'>
			<span>查询结果</span>
		</p>
		<div class="main">
			<div class="notfound">
				<img src="../../assets/imgs/enquiries@3x.png" alt="">
				<p>无结果</p>
				<mt-button type="primary" class="pedit" @click="addCompany">添加首营企业</mt-button> 
			</div>
			
		</div>
	</div>
</template>

<script type="text/javascript">
	//import './Result3.scss'
	export default {
		data(){
			return {

			}
		},
		created(){
			
		},
		methods: {
			goback(){
				this.$router.push({name:'FirstSelf'})
			},
			addCompany(){
				this.$router.push({name:'FirstBusiness'})
			},
		}
	}
</script>
<style lang="scss" src="./Result3.scss"></style>