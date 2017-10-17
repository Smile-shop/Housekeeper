<template>
	<div class="Sale_container">
		<p class="Sale_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click='goback'>
			<span>销售管理</span>
		</p>
		<div class="main">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">产品销售记录表</mt-tab-item>
			  <mt-tab-item id="2">客户意见簿</mt-tab-item>
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
				<el-form :label-position="labelPosition" label-width="1.688889rem">
				  <el-form-item label="用户姓名:">
				    <el-input v-model="yhxm"></el-input>
				  </el-form-item>
				   <el-form-item label="用户电话:">
				    <el-input v-model="yhdh"></el-input>
				  </el-form-item>
				   <el-form-item label="用户地址:">
				    <el-input v-model="yhdz"></el-input>
				  </el-form-item>
				   <el-form-item label="销售日期:">
				     <i class="time" @click="openPicker">
		          		<el-input class="time" v-model="xsrq"  placeholder="点击选择时间" :disabled="true"></el-input>
		          	</i>
				  </el-form-item>
				   <el-form-item label="销售人员:">
				    <el-input v-model="xsry"></el-input>
				  </el-form-item>
				   <el-form-item label="产品名称:">
					    <el-select v-model="productName" placeholder="请选择产品名称"  @change="getProduct">
					      <el-option v-for="(arr,index) in product" :label="arr.product_name" :value="arr.product_name+'-'+index"></el-option>
					    </el-select><br>
				  </el-form-item>
				   <el-form-item label="规格:">
				    <el-input v-model="gg"></el-input>
				  </el-form-item>
				   <el-form-item label="数量:">
				    <el-input v-model="sl"></el-input>
				  </el-form-item>
				   <el-form-item label="生产批号:">
				    <el-input v-model="scph"></el-input>
				  </el-form-item>
				   <el-form-item label="有效期:">
				     <i class="time">
		          		<el-input class="time" v-model="yxq"></el-input>
		          	</i>
				  </el-form-item>
				</el-form>
				<mt-button type="primary" class="pedit" @click="sub1">提交</mt-button>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			     <p class="title">客户意见</p>
				<el-form :label-position="labelPosition" label-width="1.688889rem">
				  <el-form-item label="用户姓名:">
				    <el-input v-model="userName"></el-input>
				  </el-form-item>
				  <el-form-item label="意见内容:">
				    <el-input type="textarea" v-model="Opinion"></el-input>
				  </el-form-item>
				</el-form>
				<mt-button type="primary" class="pedit" @click="sub">提交</mt-button>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
		<mt-datetime-picker
		    ref="picker"
		    type="date"
		    yearFormat="{value} 年"
		    monthFormat="{value} 月"
		    dateFormat="{value} 日"
		    v-model="pickerValue"
		    @confirm="aa">
		</mt-datetime-picker>
	</div>
</template>

<script type="text/javascript">
	//import './Sale.scss'
	export default {
		data(){
			return {
				labelPosition:'right',
				selected:'1',
				yhxm:'',
				yhdh:'',
				yhdz:'',
				xsrq:'',
				xsry:'',
				cpmc:'',
				gg:'',
				sl:'',
				scph:'',
				yxq:'',
				userName:'',
				Opinion:'',
				pickerValue:'',
		        pickerValue1:'',
		        product:'',
		        productName:'',
		        productName1:'',
		        purchase_id:'',
			}
		},
		created(){
			this.$http.get(baseUrl+'/getMyPurchase').then((res)=>{
					console.log(res)
	              	if(res.data.retCode === 0){
	              		this.product = res.data.data;
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
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
				this.xsrq = this.pickerValue;
		    },
		    openPicker() {
		        this.$refs.picker.open();
		        let a = new Date();
				let y = a.getFullYear();
				let M = a.getMonth()+1;
				let d = a.getDate();
				M = M < 10 ? '0' + M : M
				d = d < 10 ? '0' + d : d
				let time = `${y}-${M}-${d}`;
				this.pickerValue = time;
		    },
		    getProduct(){
				let index = this.productName.split('-')[1];
				this.productName1 = this.productName.split('-')[0];
				this.scph = this.product[index].batch_id;
				this.yxq = this.product[index].expire_date.split(" ")[0];
				this.purchase_id = this.product[index].id;
			},
		    sub(){
		    	let obj = {consumer_name:this.userName,feedback:this.Opinion};
		    	this.$http.post(baseUrl+'/addFeedback',obj).then((res)=>{
					console.log(res)
	              	if(res.data.retCode === 0){
	              		this.$messagebox.alert("操作成功!").then(acton=>{
	              			this.userName = '';
	              			this.Opinion = '';
	              		})
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              this.$messagebox.alert("获取信息错误!");
		          });
		    },
		    sub1(){
		    	let obj = {user_name:this.yhxm,user_mobile:this.yhdh,user_addr:this.yhdz,create_time:this.xsrq,saler:this.xsry,quantity:this.sl,purchase_id:this.purchase_id};
		    	this.$http.post(baseUrl+'/addSales',obj).then((res)=>{
					console.log(res)
	              	if(res.data.retCode === 0){
	              		this.$messagebox.alert("操作成功!").then(acton=>{
	              			this.yhxm = '';
	              			this.yhdh = '';
	              			this.yhdz = '';
	              			this.xsrq = '';
	              			this.xsry = '';
	              			this.sl = '';
	              			this.gg = '';
	              			this.scph = '';
	              			this.yxq = '';
	              			this.productName = '';
	              		})
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              this.$messagebox.alert("获取信息错误!");
		          });
		    },
			toIncomplete(){
				this.$router.push({name:'Incomplete'})
			},
		    search(){
		     	console.log(this.formInline.region)
		     	
		     }
		}
	}
</script>
<style lang="scss" src="./Sale.scss"></style>