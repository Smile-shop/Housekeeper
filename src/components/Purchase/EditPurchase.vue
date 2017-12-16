<template>
	<div class="Purchase_container">
		<p class="Purchase_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>编辑进货信息</span>
		</p>
		<div class="main">
			<div class="select">
			    <el-form :label-position="labelPosition" label-width="95px">
			      <el-form-item label="供货企业:">
				   <el-select v-model="companyName" placeholder="请选择供货企业"  @change="getCompany">
				      <el-option v-for="(arr,index) in company" :label="arr.enterprise_name" :value="arr.id"></el-option>
				    </el-select><br>
				  </el-form-item>
				  <el-form-item label="产品名称:">
				    <el-select v-model="pname" placeholder="请选择产品名称" @change="getpname">
				      <el-option v-for="(arr,index) in product" :label="arr.product_name" :value="arr.id" ></el-option>
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
				    <el-input v-model="sl" type=number placeholder="数量只能填数字！"></el-input>
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
					<el-radio class="radio" v-model="radio1" :label="0">通过</el-radio>
	  				<el-radio class="radio" v-model="radio1" :label="1">不通过</el-radio><br>
	  				<span class="bq">标签:</span>
					<el-radio class="radio" v-model="radio2" :label="0">通过</el-radio>
	  				<el-radio class="radio" v-model="radio2" :label="1">不通过</el-radio><br>
	  				<span class="bz">广告文宣:</span>
					<el-radio class="radio" v-model="radio3" :label="0">通过</el-radio>
	  				<el-radio class="radio" v-model="radio3" l:abel="1">不通过</el-radio><br>
	  				<span class="wx">质量情况:</span>
					<el-radio class="radio" v-model="radio4" :label="0">通过</el-radio>
	  				<el-radio class="radio" v-model="radio4" label="1">不通过</el-radio><br>
	  				<span class="zl">包装情况:</span>
					<el-radio class="radio" v-model="radio5" :label="0">通过</el-radio>
	  				<el-radio class="radio" v-model="radio5" :label="1">不通过</el-radio><br>
	  				<span class="zl1">外观质量:</span>
					<el-radio class="radio" v-model="radio6" :label="0">通过</el-radio>
	  				<el-radio class="radio" v-model="radio6" :label="1">不通过</el-radio><br>
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
			getData(){//获取供货企业
				this.$http.post(baseUrl+'/searchSupplier').then((res)=>{
					// console.log(res)
	              	if(res.data.retCode === 0){
	              		this.company = res.data.data;
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		          	console.log(err)
		          });
				//获取进货详情
				let obj = {id:this.$route.params.id}
				this.$http.get(baseUrl+'/findPurchaseDetail', {params:obj}).then((res)=>{
						console.log(res)
		              	if(res.data.retCode === 0){
							let data1 = res.data.data;
							this.companyName = data1.enterprise_id;
							this.companyId = data1.enterprise_id;
							//获取产品名称
							let obj = {enterprise_id:data1.enterprise_id}
							this.$http.post(baseUrl+'/searchProduct',obj).then((res)=>{
				              	if(res.data.retCode === 0){
				              		this.product = res.data.data;
									this.pname = data1.product_id;
									this.productId = data1.product_id;
									this.wenhao = data1.apply_sn;
									this.cpmc = data1.product_name;
									this.ghqy = data1.enterprise_name;
									this.pzwh = data1.apply_sn;
									this.sccs = data1.manufacturer;
									this.scxkzh = data1.produce_permit;
									this.gg = data1.specification;
									this.sl = data1.quatity;
									this.scrq = data1.manufacture_date.split(' ')[0];
									this.scph = data1.batch_id;
									this.yxq = data1.expire_date.split(' ')[0];
									this.imageUrl = ['http://api.credunion.org/h1/dl?table=purchase_info&id=' + data1.id + '&field=check_report'];
									this.radio1 = data1.QC_OK;
									this.radio2 = data1.label_OK;
									this.radio3 = data1.package_OK;
									this.radio4 = data1.advertise_OK;
									this.radio5 = data1.quality_OK;
									this.radio6 = data1.outward_OK;
									this.Tel = data1.contact;
									this.jl = data1.results;
									this.Notes = data1.notes;
				              	}else{
				              		this.$messagebox.alert(res.data.retMessage);
				              		this.product = '';
				              	}
					          },(err)=>{
					          });
		              	}else{
		              		this.$messagebox.alert(res.data.retMessage);
		              	}
			          },(err)=>{
			              console.log(err);
			          });
			},
			goback(){
				this.$router.go(-1)
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
		    openPicker1() {
		        this.$refs.picker1.open();
		        let a = new Date();
				let y = a.getFullYear();
				let M = a.getMonth()+1;
				let d = a.getDate();
				M = M < 10 ? '0' + M : M
				d = d < 10 ? '0' + d : d
				let time = `${y}-${M}-${d}`;
				this.pickerValue1 = time;
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
				if(this.yxq != ''){
					if(this.yxq<this.yxq){
						this.$messagebox.alert("生产日期必须小于有效日期！");
						this.yxq = ''
					}
				}
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
				if(this.scrq != ''){
					if(this.scrq>this.yxq){
						this.$messagebox.alert("生产日期必须小于有效日期！");
						this.yxq = ''
					}
				}
		    },
			getCompany(){
				this.pname = '';
				this.wenhao = '';
				this.cpmc = '';
				this.pzwh = '';
				this.sccs = '';
				this.scxkzh = '';
				this.productId = '';
				this.gg = '';
				this.sl = '';
				this.yxq = '';
				this.scrq = '';
				this.scph = '';
				this.radio1 = '';
				this.radio2 = '';
				this.radio3 = '';
				this.radio4 = '';
				this.radio5 = '';
				this.radio6 = '';
				this.file1 = '';
				this.imageUrl = '';
				this.Tel = '';
				this.jl = '';
				this.Notes = '';
				let obj = {enterprise_id:this.companyName}
				// console.log(obj)
				this.$http.post(baseUrl+'/searchProduct',obj).then((res)=>{
					// console.log(res)
	              	if(res.data.retCode === 0){
	              		this.product = res.data.data;
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              		this.product = '';
	              	}
		          },(err)=>{
		          });
			},
			getpname(){
				let obj = {id:this.pname}
				this.$http.post(baseUrl+'/findProduct',obj).then((res)=>{
					console.log(res)
	              	if(res.data.retCode === 0){
			            this.wenhao = res.data.data.apply_sn;
						this.cpmc = res.data.data.product_name;
						this.pzwh = this.wenhao;
						this.sccs = res.data.data.manufacturer;
						this.scxkzh = res.data.data.produce_permit;
						this.productId = res.data.data.id;
						this.gg = res.data.data.specification;
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              		
	              	}
		          },(err)=>{
		          });
				// this.sl = '';
				// this.yxq = '';
				// this.scrq = '';
				// this.scph = '';
				// this.radio1 = '';
				// this.radio2 = '';
				// this.radio3 = '';
				// this.radio4 = '';
				// this.radio5 = '';
				// this.radio6 = '';
				// this.file1 = '';
				// this.imageUrl = '';
				// this.Tel = '';
				// this.jl = '';
				// this.Notes = '';
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
	            formData.append('id', this.$route.params.id);
	            formData.append('is_check', 0);

	            let config = {
	              headers: {
	                'Content-Type': 'multipart/form-data'
	              }
	            }
 				this.$http.post(baseUrl+'/updatePurchase',formData,config).then((res)=>{
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
					  		this.$router.push({name:'workStatus'})

 						});
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		          	console.log(err)
		        });
 			},
		}
	}
</script>
<style lang="scss" src="./Purchase.scss"></style>