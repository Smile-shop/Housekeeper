<template>
	<div class="EnterpriseSelfExamination_container">
		<p class="EnterpriseSelfExamination_text">
			<img src="../../assets/imgs/arrow (1).png" class="goback" @click=goback>
			<span>企业自查</span>
		</p>
		<div class="main">
			<div class="Eleft">
				<ul v-for = "(arr,index) in left">
					<router-link :to="arr[1]">
						<li @click="choose(index)" :class="{active: active == index}">{{arr[0]}}</li>
					</router-link>
				</ul>
			</div>
			<div class="Eright">
				<keep-alive><legitimate v-show="isshow"></legitimate></keep-alive>
				<keep-alive><router-view></router-view></keep-alive>
			</div>
		</div>
		<mt-button type="primary" class="qedit">提交</mt-button><br>	
	</div>
</template>

<script type="text/javascript">
	// import './EnterpriseSelfExamination.scss'
	import legitimate from '../legitimate/legitimate.vue'
	export default {
		data(){
			return {
				left:[['化妆品合法性','/legitimate'],
				     ['化装品标识标签','/Identification'],
				     ['购货验收','/Acceptance'],
				     ['产品保质期','/Term'],
				     ['储藏条件、卫生情况','/StorageCondition'],
				     ['产品宣传、店内宣传','/Propaganda'],
				     ['其他违法行为','/Others']],
				isshow:true,
				active:'0'
			}
		},
		components: {
			'legitimate': legitimate
		},
		created(){
			this.getRoute();
			
			this.active = sessionStorage.getItem('index');
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
			choose(index){
				this.active = index;
				sessionStorage.setItem('index',index)
			},
			getRoute(){
				if(this.$route.path!=='/EnterpriseSelfExamination'){
					this.isshow = false;
				}else{
					this.isshow = true;
				}
			},
		},
		watch: {
          // 如果路由有变化，会再次执行该方法
          "$route": "getRoute"
        },
	}
</script>
<style lang="scss" src="./EnterpriseSelfExamination.scss"></style>