<template>
	<div class="systemConstruction_container">
		<p class="systemConstruction_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>制度建设</span>
		</p>
		<div class="main">
			<label for="scompanyname" class="qymc" >企业名称：</label>
			<input type="text" id="scompanyname" class="scompanyname" :disabled="true" v-model= "full_name"><br>
			<label for="jyxkzhname" class="jyxkzh">经营许可证号：</label>
			<input type="text" id="jyxkzhname" class="jyxkzhname" :disabled="true" v-model= "code"><br>
			<label for="sfrname" class="sfr">法人：</label>
			<input type="text" id="sfrname" class="sfrname" :disabled="true"  v-model= "legal_person"><br>
			<label for="zlfzrname" class="zlfzr">质量负责人：</label>
			<input type="text" id="zlfzrname" class="zlfzrname" :disabled="true" v-model = "quality_controller"><br>
			<label for="dzzname" class="dzz">地址：</label>
			<textarea id="dzzname" class="dzzname" :disabled="true" v-model = "address"></textarea><br>
			<label for="zdpzrname" class="zdpzr">制度批准人：</label>
			<input type="text" id="zdpzrname" class="zdpzrname" :disabled="true" v-model= "legal_person">
			<mt-button type="primary" class="yijianbtn" @click="yijian">一键制度</mt-button>
		</div>
	</div>
</template>

<script type="text/javascript">
	//import './systemConstruction.scss'
	export default {
		data(){
			return {
				full_name:'',
				code:'',
				legal_person:'',
				quality_controller:'',
				address:'',
				data:'',
				id:''
			}
		},
		created(){
			this.$http.get(baseUrl+'/findStore').then((res)=>{
	              	console.log(res)
	              	if(res.data.retCode === 0){
	              		this.id = res.data.data.id;
						this.full_name = res.data.data.full_name;
						this.code = res.data.data.code;
						this.legal_person = res.data.data.property.legal_person;
						this.quality_controller = res.data.data.property.quality_controller;
						this.address = res.data.data.address;
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              console.log('failed');
		              this.$messagebox.alert("获取信息错误!");
		          });
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
			yijian(){
				this.$http.get(baseUrl+'/findRegularFile').then((res)=>{
	              	console.log(res)
	              	if(res.data.retCode === 0){
	              		this.data = res.data.data;
	              		let data = JSON.stringify({data:this.data})
						sessionStorage.setItem('data',data)
	              		this.$router.push({name:'rules'});
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              console.log('failed');
		              this.$messagebox.alert("获取信息错误!");
		          });
				
			}
		}
	}
</script>
<style lang="scss" src="./systemConstruction.scss"></style>