<template>
	<div class="Purchase_container">
		<p class="Purchase_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>进货管理</span>
		</p>
		<div class="main">
			<div class="select">
				
			    <el-form :label-position="labelPosition" label-width="95px">
			      <el-form-item label="供货企业:">
				   <el-select v-model="companyName" placeholder="请选择供货企业"  @change="getCompany">
				      <el-option v-for="(arr,index) in company" :label="arr.enterprise_name" :value="arr.enterprise_name+'-'+index"></el-option>
				    </el-select><br>
				  </el-form-item>
				  <el-form-item label="产品名称:">
				    <el-select v-model="pname" placeholder="请选择产品名称" @change="getpname">
				      <el-option v-for="(arr,index) in product" :label="arr.product_name" :value="arr.product_name+'-'+index" ></el-option>
				    </el-select><br>
				  </el-form-item>
				  <el-form-item label="批准文号:">
				    <el-input v-model="wenhao" :disabled="true"></el-input>
				  </el-form-item>
				</el-form>
			</div>
			<div class="inputall">
				<p class="title">进货工作记录表<br><span>(记录保存期限不得少于两年)</span></p>
				<el-form :label-position="labelPosition" label-width="95px">
				  
				  <el-form-item label="产品名称*:">
				    <el-input v-model="cpmc" :disabled="true"></el-input>
				  </el-form-item>
				 
				  <el-form-item label="供货企业*:">
				    <el-input v-model="ghqy" :disabled="true"></el-input>
				  </el-form-item>
				  <el-form-item label="批准文号*:">
				    <el-input v-model="pzwh" :disabled="true"></el-input>
				  </el-form-item>
				  <el-form-item label="生产厂商*:">
				    <el-input v-model="sccs" :disabled="true"></el-input>
				  </el-form-item>
				  <el-form-item label="生产许可证号*:">
				    <el-input v-model="scxkzh" :disabled="true"></el-input>
				  </el-form-item>
				  <el-form-item label="规格:">
				    <el-input v-model="gg" :disabled="true"></el-input>
				  </el-form-item>
				  <el-form-item label="数量:">
				    <el-input v-model="sl"></el-input>
				  </el-form-item>
				  <el-form-item label="生产日期:">
				    <i class="time" @click="openPicker">
		          		<el-input class="time" v-model="scrq"  placeholder="点击选择时间" :disabled="true"></el-input>
		          	</i>
				  </el-form-item>
				  <el-form-item label="生产批号:">
				    <el-input v-model="scph"></el-input>
				  </el-form-item>
				  <el-form-item label="有效期:">
				    <i class="time" @click="openPicker1">
		          		<el-input class="time" v-model="yxq"  placeholder="点击选择时间" :disabled="true"></el-input>
		          	</i>
				  </el-form-item>
				  <el-form-item label="批次检查报告:">
					<el-upload
					  class="avatar-uploader"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :show-file-list="false"
					  :on-change="getpic"
					  :auto-upload="false">
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
				  </el-form-item>
				  <p class="t">
					<span class="hez">合格证:</span>
					<el-radio class="radio" v-model="radio1" label="0">通过</el-radio>
	  				<el-radio class="radio" v-model="radio1" label="1">不通过</el-radio><br>
	  				<span class="bq">标签:</span>
					<el-radio class="radio" v-model="radio2" label="0">通过</el-radio>
	  				<el-radio class="radio" v-model="radio2" label="1">不通过</el-radio><br>
	  				<span class="bz">广告文宣:</span>
					<el-radio class="radio" v-model="radio3" label="0">通过</el-radio>
	  				<el-radio class="radio" v-model="radio3" label="1">不通过</el-radio><br>
	  				<span class="wx">质量情况:</span>
					<el-radio class="radio" v-model="radio4" label="0">通过</el-radio>
	  				<el-radio class="radio" v-model="radio4" label="1">不通过</el-radio><br>
	  				<span class="zl">包装情况:</span>
					<el-radio class="radio" v-model="radio5" label="0">通过</el-radio>
	  				<el-radio class="radio" v-model="radio5" label="1">不通过</el-radio><br>
	  				<span class="zl1">外观质量:</span>
					<el-radio class="radio" v-model="radio6" label="0">通过</el-radio>
	  				<el-radio class="radio" v-model="radio6" label="1">不通过</el-radio><br>
				  </p>
				  <el-form-item label="联系方式:">
				    <el-input v-model="Tel"></el-input>
				  </el-form-item>
				  <el-form-item label="验收结论:">
				    <el-input v-model="jl"></el-input>
				  </el-form-item>
				  <el-form-item label="备注:">
				    <el-input v-model="Notes"></el-input>
				  </el-form-item>
				</el-form>
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
			<mt-datetime-picker
			    ref="picker1"
			    type="date"
			    yearFormat="{value} 年"
			    monthFormat="{value} 月"
			    dateFormat="{value} 日"
			    v-model="pickerValue1"
			    @confirm="bb">
			</mt-datetime-picker>
			<mt-button type="primary" class="search" @click="sub">提交</mt-button>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './Purchase.scss'
	export default {
		data(){
			return {
		        company:'',
		        product:'',
		        pickerValue:'',
		        pickerValue1:'',
		        labelPosition:'right',		   
		        companyName:'',
		        pname:'',
		        wenhao:'',
		        productId:'',
		        companyId:'',
		        cpmc:'',
		       	radio4:'',
		       	radio3:'',
		       	radio1:'',
		       	radio2:'',
		       	radio5:'',
		       	radio6:'',
		        ghqy:'',
		        pzwh:'',
		        sccs:'',
		        scxkzh:'',
		        gg:'',
		        sl:'',
		        scrq:'',
		        scph:'',
		        yxq:'',
		        jybg:'',
		        hgz:'',
		        bqywx:'',
		        zlqk:'',
		        bzqk:'',
		        wgzl:'',
		        Tel:'',
		        jl:'',
		        Notes:'',
		        file1:'',
		        imageUrl:''
			}
		},
		created(){
			this.getData();
		},
		methods: {
			getData(){
				console.log(123)
				this.$http.post(baseUrl+'/searchSupplier').then((res)=>{
					console.log(res)
	              	if(res.data.retCode === 0){
	              		this.company = res.data.data;
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              this.$messagebox.alert("获取信息错误!");
		          });
			},
			goback(){
				this.$router.go(-1)
			},
			openPicker() {
		        this.$refs.picker.open();
		    },
		    openPicker1() {
		        this.$refs.picker1.open();
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
				this.scrq = this.pickerValue;
		    },
		    bb(){
		    	let a = new Date(this.pickerValue1);
				let y = a.getFullYear();
				let M = a.getMonth()+1;
				let d = a.getDate();
				M = M < 10 ? '0' + M : M
				d = d < 10 ? '0' + d : d
				let pickerValue1 = `${y}-${M}-${d}`
				this.pickerValue1 = pickerValue1;
				this.yxq = this.pickerValue1;
		    },
			getCompany(){
				let index = this.companyName.split('-')[1];
				this.ghqy = this.companyName.split('-')[0];
				this.companyId = this.company[index].id
				let obj = {enterprise_id:this.companyId}
				// console.log(obj)
				this.$http.post(baseUrl+'/searchProduct',obj).then((res)=>{
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
			getpname(){
				let index = this.pname.split('-')[1];
				this.wenhao = this.product[index].apply_sn;
				this.cpmc = this.product[index].product_name;
				this.pzwh = this.wenhao;
				this.sccs = this.product[index].manufacturer;
				this.scxkzh = this.product[index].produce_permit;
				this.productId = this.product[index].id;
				this.gg = this.product[index].specification
				console.log(477974)
			},
			getpic(file) {
		        this.imageUrl = URL.createObjectURL(file.raw);
		        this.file1 = file.raw;
		    },
 			sub(){
 				let formData = new FormData();
			    formData.append('enterprise_id', this.companyId);
	            formData.append('product_id', this.productId);
	            formData.append('specification', this.gg);
	            formData.append('quatity', this.sl);
	            formData.append('manufacture_date', this.scrq);
	            formData.append('batch_id', this.scph);
	            formData.append('expire_date', this.yxq);
	            formData.append('check_report', this.file1);
	            formData.append('QC_OK', this.radio1);
	            formData.append('label_OK', this.radio2);
	            formData.append('advertise_OK', this.radio3);
	            formData.append('quality_OK', this.radio4);
	            formData.append('package_OK', this.radio5);
	            formData.append('outward_OK', this.radio6);
	            formData.append('contact', this.Tel);
	            formData.append('results', this.jl);
	            formData.append('notes', this.Notes);

	            let config = {
	              headers: {
	                'Content-Type': 'multipart/form-data'
	              }
	            }
 				this.$http.post(baseUrl+'/addPurchase',formData,config).then((res)=>{
	              	console.log(res)
	              	if(res.data.retCode === 0){
	              		this.$messagebox.alert('操作成功!').then(action => {
	              			this.product = '';
	              			this.company = '';
	              			this.companyName = '';
	              			this.pname = '';
	              			this.pzwh = '';
	              			this.wenhao = '';
	              			this.cpmc = '';
	              			this.scxkzh = '';
	              			this.sccs = '';
	              			this.gg = '';
	              			this.ghqy = '';
	              			this.sl = '';
	              			this.scrq = '';
	              			this.scph = '';
	              			this.yxq = '';
	              			this.file1 = '';
	              			this.imageUrl = '';
							this.radio1 = '';
	              			this.radio2 = '';
	              			this.radio3 = '';
	              			this.radio4 = '';
	              			this.radio5 = '';
	              			this.radio6 = '';
	              			this.Tel = '';
	              			this.jl = '';
	              			this.Notes = '';
	              			
	              			this.$http.post(baseUrl+'/searchSupplier').then((res)=>{
								console.log(res)
				              	if(res.data.retCode === 0){
				              		this.company = res.data.data;
				              	}else{
				              		this.$messagebox.alert(res.data.retMessage);
				              	}
					          },(err)=>{
					              this.$messagebox.alert("获取信息错误!");
					          });
					  this.$router.push({name:'index'})

 						});
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              this.$messagebox.alert("获取信息错误!");
		        });
 			},
		}
	}
</script>
<style lang="scss" src="./Purchase.scss"></style>