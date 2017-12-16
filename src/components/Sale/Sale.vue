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
				  <el-form-item label="销售人员:">
				    <el-input v-model="xsry"></el-input>
				  </el-form-item>
				  <el-form-item label="产品名称:">
					    <el-select v-model="productName" placeholder="请选择产品名称"  @change="getProduct">
					      <el-option v-for="(arr,index) in product" :label="arr.product_name" :value="arr.product_name+'-'+index"></el-option>
					    </el-select><br>
				  </el-form-item>
				  <el-form-item label="进货日期:">
				    <el-input v-model="jhrq"></el-input>
				  </el-form-item>
				   <el-form-item label="销售日期:">
				     <i class="time" @click="openPicker">
		          		<el-input class="time" v-model="xsrq"  placeholder="点击选择时间" :disabled="true"></el-input>
		          	</i>
				  </el-form-item>
				   <el-form-item label="规格:">
				    <el-input v-model="gg"></el-input>
				  </el-form-item>
				  <el-form-item label="进货数量:">
				    <el-input v-model="count"></el-input>
				  </el-form-item>
				  <el-form-item label="销售数量:">
				    <el-input type='number' v-model="sl" @change='change'></el-input>
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
		        count:'',
		        jhrq:'',
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
		              console.log(err)
		          });
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
			change(){
				this.sl = Number(this.sl)
				if(this.sl > this.count){
					this.sl = '';
					this.$messagebox.alert('销售数量不能大于进货数量！');
				}
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
				if(this.xsrq < this.jhrq){
					this.$messagebox.alert('销售日期不能早于进货日期！');
					this.xsrq = '';
				}
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
				this.gg = this.product[index].specification;
				this.count = this.product[index].quatity;
				this.jhrq = this.product[index].create_time.split(' ')[0];
				this.xsrq = '';
				this.sl = '';
			},
		    sub(){
		    	switch (''){
					case this.userName:
						this.$messagebox.alert('用户姓名不能为空！');
						return;
					case this.Opinion:
						this.$messagebox.alert('意见内容不能为空！');
						return;	
				}
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
		              console.log(err)
		          });
		    },
		    sub1(){
		    	switch (''){
					case this.yhxm:
						this.$messagebox.alert('用户姓名不能为空！');
						return;
					case this.yhdh:
						this.$messagebox.alert('用户电话不能为空！');
						return;	
					case this.yhdz:
						this.$messagebox.alert('用户地址不能为空！');
						return;
					case this.xsry:
						this.$messagebox.alert('销售人员不能为空！');
						return;	
					case this.sl:
						this.$messagebox.alert('数量不能为空！');
						return;	
					case this.gg:
						this.$messagebox.alert('规格不能为空！');
						return;
					case this.dadress:
						this.$messagebox.alert('地址不能为空！');
						return;			
				}
		    	let obj = {user_name:this.yhxm,user_mobile:this.yhdh,user_addr:this.yhdz,sale_time:this.xsrq,saler:this.xsry,quantity:this.sl,purchase_id:this.purchase_id};
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
		              console.log(err)
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