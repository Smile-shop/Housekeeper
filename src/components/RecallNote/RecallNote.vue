<template>
	<div class="RecallNote_container">
		<p class="RecallNote_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>召回通知单</span>
		</p>
		<div class="main">
		    <el-input v-model="sjr" placeholder="收件人"></el-input>
		    <el-input type="textarea" v-model="zw" placeholder="正文"></el-input>
		    <el-input v-model="fjr" placeholder="发件人"></el-input>
			<mt-button type="primary" class="yijianbtn" @click="yijian">提交</mt-button>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	//import './RecallNote.scss'
	export default {
		data(){
			return {
				sjr:'',
				fjr:'',
				zw:'',
				
			}
		},
		created(){
			this.$http.get(baseUrl+'/findStore').then((res)=>{
	              	console.log(res)
	              	if(res.data.retCode === 0){
	              		
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
	              	if (res.data.data.status === 2) {
	              		this.text = '查看制度'
	              	}else if(res.data.data.status === 1){
	              		this.text = '一键制度'
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
			aa(){
		    	let a = new Date(this.pickerValue);
				let y = a.getFullYear();
				let M = a.getMonth()+1;
				let d = a.getDate();
				M = M < 10 ? '0' + M : M
				d = d < 10 ? '0' + d : d
				let pickerValue = `${y}-${M}-${d}`
				this.pickerValue = pickerValue;
				this.zhsj = this.pickerValue;
		    },
		    openPicker() {
		        this.$refs.picker.open();
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
<style lang="scss" src="./RecallNote.scss"></style>