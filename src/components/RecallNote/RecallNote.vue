<template>
	<div class="RecallNote_container">
		<p class="RecallNote_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>召回通知单</span>
		</p>
		<div class="main">
			<div class="jobsearch">
				<el-input v-model="cpmc" class="jobx" placeholder="产品名称"></el-input>
				<el-input v-model="cppc" class="jobx" placeholder="产品批次"></el-input>
				<mt-button type="primary" class="search" @click="search">搜索</mt-button>
			</div>
			<p class="result" v-show = "found">本批次产品在本公司卖出<span>{{quantity}}</span>件，共<span>{{user_count}}</span>人</p>
			<p class="result" v-show = "notfound">没有相应的查找结果！</p>
		    <el-input type="textarea" v-model="zw" placeholder="请输入召回通知内容" v-show = "found"></el-input>
			<mt-button type="primary" class="yijianbtn" @click="yijian" v-show = "found">通知消费者</mt-button>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	//import './RecallNote.scss'
	export default {
		data(){
			return {
				zw:'',
				cpmc:'',
				cppc:'',
				cpmc1:'',
				cppc1:'',
				user_count:'',
				quantity:'',
				found:false,
				notfound:false,				
			}
		},
		created(){
	
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
		    search(){
		    	this.cpmc1 = this.cpmc;
		    	this.cppc1 = this.cppc;
		    	let obj = {product_name:this.cpmc,batch_id:this.cppc}
				this.$http.post(baseUrl+'/getNoticeUsers',obj).then((res)=>{
	              	console.log(res)
	              	this.cpmc = '';
	              	this.cppc = '';
	              	if(res.data.retCode === 0){
	              		this.found = true;
	              		this.user_count = res.data.data.user_count;
	              		this.quantity = res.data.data.quantity;
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
	              	
		        },(err)=>{
	             console.log(err)
	          });
			},
			yijian(){
				let obj = {product_name:this.cpmc1,batch_id:this.cppc1,notice:this.zw}
				this.$http.post(baseUrl+'/noticeUsers',obj).then((res)=>{
	              	console.log(res)
	              	if(res.data.retCode === 0){
	              		this.$messagebox.alert("操作成功！").then(action=>{
	              			this.$router.push({name:'Recall'});
	              		});
	              		
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
	              	
		        },(err)=>{
	             console.log(err)
	          });
			}
		}
	}
</script>
<style lang="scss" src="./RecallNote.scss"></style>