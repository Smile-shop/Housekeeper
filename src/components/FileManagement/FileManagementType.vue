<template>
	<div class="FileManagement_container">
		<p class="FileManagement_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>档案管理</span>
		</p>
		<div class="main">
			<ul class="mchli1">
		    	<li v-for="(item,index) in data" @click='Getindex(index)'><img :src="'static/img/'+item.path" alt="" class="indeximg1"><br>{{item.name}}</li>
		    </ul>	
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				data:[{path:'jiu_03.png',name:'首营企业'},
					  {path:'jiu_05.png',name:'首营产品'},
					  {path:'jiu_09.png',name:'进货档案'},
					  {path:'jiu_10.png',name:'销售档案'},
					  {path:'jiu_13.png',name:'场所设施'},
					  {path:'jiu_14.png',name:'不良反应'},
					  {path:'jiu_18.png',name:'召回通知'},
					  {path:'jiu_17.png',name:'召回记录'},
					  {path:'jiu_21.png',name:'履约自查'},
					  {path:'jiu_25.png',name:'客户意见'},
					  // {path:'Auditorium (3).png',name:'不良反应监测'},
					 ]
			}
		},
		methods: {
			goback(){
				this.$router.push({name:'index'})
			},
			Getindex(index){
				this.$router.push({name:'FileManagement',params:{index:index+1}})
			},

		}	
	}
</script>
<style lang="scss" src="./FileManagement.scss"></style>