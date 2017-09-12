<template>
	<div class="EnterpriseSelfExamination_container">
		<p class="EnterpriseSelfExamination_text">
			<img src="../../assets/imgs/arrow (1).png" class="goback" @click=goback>
			<span>企业自查</span>
		</p>
		<div class="main">
			<div class="Eleft">
				<ul v-for = "(arr,index) in left">
					<li>{{arr[0]}}</li>
				</ul>
			</div>
			<div class="Eright">
				 <router-view></router-view>
			</div>
		</div>
		<mt-button type="primary" class="qedit">提交</mt-button><br>	
	</div>
</template>

<script type="text/javascript">
	// import './EnterpriseSelfExamination.scss'
	export default {
		data(){
			return {
				left:[['化妆品合法性'],['化装品标识标签'],['购货验收'],['产品保质期'],['储藏条件、卫生情况'],['产品宣传、店内宣传'],['其他违法行为']]
			}
		},
		created(){

		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
		},
	}
</script>
<style lang="scss" src="./EnterpriseSelfExamination.scss"></style>