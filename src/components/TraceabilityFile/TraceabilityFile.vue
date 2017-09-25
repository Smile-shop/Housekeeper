<template>
	<div class="TraceabilityFile_container">
		<p class="TraceabilityFile_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click='goback'>
			<span>档案追溯</span>
		</p>
		<div class="main">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">追溯文件台账</mt-tab-item>
			  <mt-tab-item id="2">查询统计</mt-tab-item>
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
				<el-form :label-position="labelPosition" label-width="1.688889rem">
				  <el-form-item label="生产企业:">
				    <el-input v-model="scqy"></el-input>
				  </el-form-item>
				    <el-form-item label="产品名称:">
						<el-select v-model="productName" placeholder="请选择产品名称"  @change="getProduct">
						    <el-option v-for="(arr,index) in product" :label="arr.product_name" :value="arr.product_name+'-'+index"></el-option>
						</el-select><br>
				  </el-form-item>
				  <el-form-item label="批次号:">
				    <el-select v-model="pch" placeholder="请选择批次号"  @change="getProduct">
					    <el-option v-for="(arr,index) in product" :label="arr.product_name" :value="arr.product_name+'-'+index"></el-option>
					</el-select><br>
				  </el-form-item>
				</el-form>
				<mt-button type="primary" class="pedit" @click="sub1">查询</mt-button>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    <el-input v-model="ssmc" placeholder="请输入搜索名称" class="sousuo"></el-input>
				<mt-button type="primary" class="check" @click="sub">查询</mt-button>
				<div class="table">
					<table class="tablelist">
				      <thead>
				        <tr>
				          <th>名称</th>
				          <th>时间</th>
				        </tr>
				      </thead>
				      <tbody>
				        <tr>
				          <td>统计表</td>
				          <td>2017年5月10日</td>
				        </tr>
				      </tbody>
				    </table>
				</div>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script type="text/javascript">
	//import './TraceabilityFile.scss'
	export default {
		data(){
			return {
				labelPosition:'right',
				selected:'1',
				scqy:'',
				cpmc:'',
				pch:'',
				ssmc:'',
				productName:'',
				product:''
				
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
		    	let obj = {user_name:this.yhxm,user_mobile:this.yhdh,user_addr:this.yhdz,create_time:this.xsrq,TraceabilityFiler:this.xsry,quatity:this.sl,purchase_id:this.purchase_id};
		    	this.$http.post(baseUrl+'/addTraceabilityFiles',obj).then((res)=>{
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
<style lang="scss" src="./TraceabilityFile.scss"></style>