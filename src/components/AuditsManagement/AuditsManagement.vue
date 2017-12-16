<template>
	<div class="AuditsManagement_container">
		<p class="AuditsManagement_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>审核管理</span>
		</p>
		<div class="main" v-show="s">
			<table class="jodtable">
		      <thead>
		        <tr>
		          <th>类型</th>
		          <th>名称</th>
		          <th>日期</th>
		          <!-- <th>人员</th> -->
		          <th>操作</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr v-for = "(arr,index) in data">
		          <td>{{arr.TableType}}</td>
		          <td>{{arr.name}}</td>
		          <td>{{arr.create_time.split(' ')[0]}}</td>
		          <!-- <td>{{arr.staff}}</td> -->
		          <td>
			         <mt-button type="primary" class="audit" @click="audit(index)">审核</mt-button><br>
		          </td>
		        </tr>
		      </tbody>
		    </table>
		</div>
		<div class="z" v-show="a" @click = "a4"></div>
		<div class="detail" v-show="!s">
			<div>详细信息</div>
			<span class="cacel" @click="xiao()">x</span>
		    <div v-show='syqy'>
		      <p><span>企业名称：{{data1.enterprise_name}}</span></p>
		      <p><span>企业类型：{{data1.enterprise_type == 1 ? '生产企业' : '经营企业' }}</span></p>
		      <p><span>组织机构代码：{{data1.enterprise_scid}}</span></p>
		      <p><span>组织机构代码证：<img :class="{scale: isScale1}" @click="isScale1 = !isScale1" :src="syqy1.img1" alt=""></span></p>
		      <p><span>卫生许可证号：{{data1.health_permit}}</span></p>
		      <p><span>卫生许可证：<img :class="{scale: isScale2}" @click="isScale2 = !isScale2" :src="syqy1.img2" alt=""></span></p>
		      <p><span>检验结论：{{data1.conclusion}}</span></p>
		      <p><span>增加时间：{{zjsj}}</span></p>
		    </div>
		    <div v-show='sycp'>
		      <p><span>产品名称：{{data1.product_name}}</span></p>
		      <p><span>产品类别：{{data1.product_type == 1 ? '国产非特' : (data1.product_type == 2 ? '进口非特' : (data1.product_type == 3 ? '国产特殊' : '进口特殊'))}}</span></p>
		      <p v-show="data1.produce_country != null"><span>生产国：{{data1.produce_country}}</span></p>
		      <p v-show="data1.declare_unit != null"><span>在华申报单位企业名称：{{data1.declare_unit}}</span></p>
		      <p v-show="data1.declare_scid != null"><span>在华申报单位备案凭证号：{{data1.declare_scid}}</span></p>
		      <p><span>生产企业名称：{{data1.manufacturer}}</span></p>
		      <p><span>生产企业社会信用代码：{{data1.manufacturer_scid}}</span></p>
		      <p v-show="data1.brand != null"><span>生产品牌：{{data1.brand}}</span></p>
		      <p v-show="data1.agent_name != null"><span>进口总代名称：{{data1.agent_name}}</span></p>
		      <p v-show="data1.agent_scid != null"><span>进口总代企业代码：{{data1.agent_scid}}</span></p>
		      <p v-show="data1.agent_license != null"><span>进口总代凭证号：{{data1.agent_license}}</span></p>
		      <p><span>产品备案凭证号：{{data1.apply_sn}}</span></p>
		      <p><span>产品类型：{{data1.product_form}}</span></p>
		      <p><span>产品规格：{{data1.specification}}</span></p>
		      <p><span>存储条件：{{data1.storage_spec}}</span></p>
		      <p><span>其它：{{data1.other_spec}}</span></p>
		      <p><span>合格证：{{data1.QC_OK == 1 ? '通过' : '不通过'}}</span></p>
		      <p><span>标签：{{data1.label_OK == 1 ? '通过' : '不通过'}}</span></p>
		      <p><span>包装：{{data1.package_OK == 1 ? '通过' : '不通过'}}</span></p>
		      <p><span>文宣禁忌用词：{{data1.advertise_OK == 1 ? '通过' : '不通过'}}</span></p>
		      <p>
		      	<span>备案注册：<img :class="{scale: isScale}" @click="isScale = !isScale" :src="sycp1.img" alt="">
		      	</span>
		      </p>
		      <p><span>生产许可证：<img :class="{scale: isScale1}" @click="isScale1 = !isScale1" :src="sycp1.img1" alt=""></span></p>
		      <p><span>卫生许可证：<img :class="{scale: isScale2}" @click="isScale2 = !isScale2" :src="sycp1.img2" alt=""></span></p>
		      <p><span>产品检验报告及检验依据（国产）、检疫报告（进口）：<img :class="{scale: isScale7}" @click="isScale7 = !isScale7" :src="sycp1.img7" alt=""></span></p>
		      <p><span>合格证：<img :class="{scale: isScale3}" @click="isScale3 = !isScale3" :src="sycp1.img3" alt=""></span></p>
		      <p><span>标签：<img :class="{scale: isScale4}" @click="isScale4 = !isScale4" :src="sycp1.img4" alt=""></span></p>
		      <p><span>包装：<img :class="{scale: isScale5}" @click="isScale5 = !isScale5" :src="sycp1.img5" alt=""></span></p>
		      <p><span>其他：<img :class="{scale: isScale6}" @click="isScale6 = !isScale6" :src="sycp1.img6" alt=""></span></p>
		      <p><span>验收结论：{{data1.results}}</span></p>
		      <p><span>增加时间：{{zjsj}}</span></p>
		    </div>
		    <div v-show='jhjl'>
		      <p><span>供货企业：{{data1.enterprise_name}}</span></p>
		      <p><span>产品名称：{{data1.product_name}}</span></p>
		      <p><span>批准文号：{{data1.apply_sn}}</span></p>
		      <p><span>生产厂商：{{data1.manufacturer}}</span></p>
		      <p><span>生产许可证号：{{data1.produce_permit}}</span></p>
		      <p><span>规格：{{data1.specification}}</span></p>
		      <p><span>数量：{{data1.quatity}}</span></p>
		      <p><span>生产日期：{{scrq}}</span></p>
		      <p><span>生产批号：{{data1.batch_id}}</span></p>
		      <p><span>有效期：{{yxq}}</span></p>
		      <p><span>批次检查报告：<img :class="{scale: isScale7}" @click="isScale7 = !isScale7" :src="jhda1.img" alt=""></span></p>
		      <p><span>合格证：{{data1.QC_OK == 1 ? '通过' : '不通过'}}</span></p>
		      <p><span>标签：{{data1.label_OK == 1 ? '通过' : '不通过'}}</span></p>
		      <p><span>包装：{{data1.package_OK == 1 ? '通过' : '不通过'}}</span></p>
		      <p><span>文宣禁忌用词：{{data1.advertise_OK == 1 ? '通过' : '不通过'}}</span></p>
		       <p><span>质量情况：{{data1.quality_OK == 1 ? '通过' : '不通过'}}</span></p>
		      <p><span>外观情况：{{data1.outward_OK == 1 ? '通过' : '不通过'}}</span></p>
		      <p><span>联系方式：{{data1.contact}}</span></p>
		      <p><span>验收结论：{{data1.results}}</span></p>
		      <p v-show="data1.notes !== ''"><span>备注：{{data1.notes}}</span></p>
		      <p><span>增加时间：{{zjsj}}</span></p>
		    </div>
		    <div v-show='xsjl'>
		      <p><span>用户姓名：{{data1.user_name}}</span></p>
		      <p><span>用户电话：{{data1.user_mobile}}</span></p>
		      <p><span>用户地址：{{data1.user_addr}}</span></p>
		      <p><span>销售日期：{{xsrq}}</span></p>
		      <p><span>销售人员：{{data1.saler}}</span></p>
		      <p><span>产品名称：{{data1.product_name}}</span></p>
		      <p><span>规格：{{data1.specification}}</span></p>
		      <p><span>数量：{{data1.quantity}}</span></p>
		      <p><span>生产批号：{{data1.batch_id}}</span></p>
		      <p><span>有效期：{{yxq}}</span></p>
		      <p><span>增加时间：{{zjsj}}</span></p>
		    </div>
		      <mt-button type="primary" class="audit1" @click="Pass()">通过</mt-button>
		      <mt-button type="danger" class="audit2" @click="reject()">不通过</mt-button>
		 </div>
	</div>
</template>

<script type="text/javascript">
	// import './AuditsManagement.scss'
	export default {
		data(){
			return {
				data:'',
				s:true,
				data1:'',
				id:'',
				id1:'',
				zjsj:'',
				syqy:false,
				sycp:false,
				jhjl:false,
				xsjl:false,
				isScale:false,isScale1:false,isScale2:false,isScale3:false,isScale4:false,isScale5:false,isScale6:false,isScale7:false,
				a:false,
				syqy1:{img1:'',img2:''},
				sycp1:{img:'',img1:'',img2:'',img3:'',img4:'',img5:'',img6:'',img7:'',},
		        jhda1:{img:''},
				type:'',
				scrq:'',
				yxq:'',
				xsrq:'',
			}
		},
		created(){
			this.getDate();
		},
		methods: {
			getDate(){
				this.$http.get(baseUrl+'/getAuditRecord').then((res)=>{
	              	if(res.data.retCode === 0){
	              		let a = res.data.enterprises;
	              		let b = res.data.products;
	              		let c = res.data.purchases;
	              		let d = res.data.sales;
	              		let aa =a.concat(b).concat(c).concat(d)
	              		this.data = aa;
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
		    audit(index){
		    	this.s= false
		    	this.id = this.data[index].id;
		    	this.type = this.data[index].TableType;
		    	if (this.type == '首营企业') {
		    		this.id1 = 0
		    		this.syqy =true
		    		this.sycp =false
					this.jhjl =false
					this.xsjl =false
		    	}else if (this.type == '首营产品') {
		    		this.id1 = 1
		    		this.sycp =true
		    		this.syqy =false
					this.jhjl =false
					this.xsjl =false
		    	}else if (this.type == '进货记录') {
		    		this.id1 = 2
		    		this.jhjl =true
		    		this.sycp =false
		    		this.syqy =false
					this.xsjl =false
		    	}else if (this.type == '销售记录') {
		    		this.id1 = 3
		    		this.jhjl =false
		    		this.sycp =false
		    		this.syqy =false
					this.xsjl =true
		    	}
		    	let obj = {id:this.id}
		    	let jiekou = ['/findSupplier','/findProduct','/findPurchaseDetail','/findSaleDetail'];
		    	this.$http.get(baseUrl+jiekou[this.id1], {params:obj}).then((res)=>{
					console.log(res)
	              	if(res.data.retCode === 0){
						this.data1 = res.data.data;
						//首营企业图片
						if(this.data1.enterprise_scid_img != null && this.data1.enterprise_scid_img != undefined){
							this.syqy1.img1 = ['http://api.credunion.org/h1/dl?table=enterprise_info&id=' + this.data1.id + '&field=enterprise_scid_img']
						}
						if(this.data1.health_permit_img != null && this.data1.health_permit_img != undefined){
							this.syqy1.img2 = ['http://api.credunion.org/h1/dl?table=enterprise_info&id=' + this.data1.id + '&field=health_permit_img']
						}
						//首营产品图片
						if(this.data1.apply_img != null && this.data1.apply_img != undefined){
							this.sycp1.img = ['http://api.credunion.org/h1/dl?table=first_product&id=' + this.data1.id + '&field=apply_img']
						}
						if(this.data1.cosmetic_permits != null && this.data1.cosmetic_permits != undefined){
							this.sycp1.img1 = ['http://api.credunion.org/h1/dl?table=first_product&id=' + this.data1.id + '&field=cosmetic_permits']
						}
						if(this.data1.health_permits != null && this.data1.health_permits != undefined){
							this.sycp1.img2 = ['http://api.credunion.org/h1/dl?table=first_product&id=' + this.data1.id + '&field=health_permits']
						}
						if(this.data1.qc_img != null && this.data1.qc_img != undefined){
							this.sycp1.img3 = ['http://api.credunion.org/h1/dl?table=first_product&id=' + this.data1.id + '&field=qc_img']
						}
						if(this.data1.label_img != null && this.data1.label_img != undefined){
							this.sycp1.img4 = ['http://api.credunion.org/h1/dl?table=first_product&id=' + this.data1.id + '&field=label_img']
						}
						if(this.data1.pkg_img != null && this.data1.pkg_img != undefined){
							this.sycp1.img5 = ['http://api.credunion.org/h1/dl?table=first_product&id=' + this.data1.id + '&field=pkg_img']
						}
						if(this.data1.other_img != null && this.data1.other_img != undefined){
							this.sycp1.img6 = ['http://api.credunion.org/h1/dl?table=first_product&id=' + this.data1.id + '&field=other_img']
						}
						if(this.data1.check_report != null && this.data1.check_report != undefined){
							this.sycp1.img7 = ['http://api.credunion.org/h1/dl?table=first_product&id=' + this.data1.id + '&field=check_report']
						}
						//进货图片
						if(this.data1.check_report != null && this.data1.check_report != undefined){
							this.jhda1.img = ['http://api.credunion.org/h1/dl?table=purchase_info&id=' + this.data1.id + '&field=check_report']
						}
						if(this.data1.create_time != null && this.data1.create_time != undefined){
							this.zjsj = this.data1.create_time.split(' ')[0]
						}
						if(this.data1.manufacture_date != null && this.data1.manufacture_date != undefined){
							this.scrq = this.data1.manufacture_date.split(' ')[0]
						}
						if(this.data1.expire_date != null && this.data1.expire_date != undefined){
							this.yxq = this.data1.expire_date.split(' ')[0]
						}
						if(this.data1.sale_time != null && this.data1.sale_time != undefined){
							this.xsrq = this.data1.sale_time.split(' ')[0]
						}
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              console.log(err);
		          });
		     },
		    Pass(){
		     	let obj = {TableType:this.type,id:this.id}
		    	console.log(obj)
		     	this.$http.post(baseUrl+'/auditRecord',obj).then((res)=>{
	              	console.log(res)
	              	if(res.data.retCode === 0){
	              		this.$messagebox.alert('操作成功!').then(action => {
	              			this.getDate();
	              			this.s = true;
 						});
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		             console.log(err)
		          });
		    },
		    reject(){
		    	let obj = {TableType:this.type,id:this.id}
		    	console.log(obj)
		     	this.$http.post(baseUrl+'/rejectRecord',obj).then((res)=>{
	              	console.log(res)
	              	if(res.data.retCode === 0){
	              		this.$messagebox.alert('操作成功!').then(action => {
	              			this.getDate();
	              			this.s = true;
 						});
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		             console.log(err)
		          });
		    },
		    xiao(){
		    	this.s = true;
		    },
		    a4(){
		    	this.a =false;
		    	this.isScale =false;
		    	this.isScale1 =false;
		    	this.isScale2 =false;
		    	this.isScale3 =false;
		    	this.isScale4 =false;
		    	this.isScale5 =false;
		    	this.isScale6 =false;
		    	this.isScale7 =false;
		    },
		},
		watch:{
			isScale:{
	        handler(){
	            var _this = this;
	           if(_this.isScale == true){
	           		_this.a = true;
	           }else{
	           	_this.a = false;
	           }
	        },
	         deep:true
	      },
	      isScale1:{
	        handler(){
	            var _this = this;
	           if(_this.isScale1 == true){
	           		_this.a = true;
	           }else{
	           	_this.a = false;
	           }
	        },
	         deep:true
	      },isScale2:{
	        handler(){
	            var _this = this;
	           if(_this.isScale2 == true){
	           		_this.a = true;
	           }else{
	           	_this.a = false;
	           }
	        },
	         deep:true
	      },isScale3:{
	        handler(){
	            var _this = this;
	           if(_this.isScale3 == true){
	           		_this.a = true;
	           }else{
	           	_this.a = false;
	           }
	        },
	         deep:true
	      },isScale4:{
	        handler(){
	            var _this = this;
	           if(_this.isScale4 == true){
	           		_this.a = true;
	           }else{
	           	_this.a = false;
	           }
	        },
	         deep:true
	      },isScale5:{
	        handler(){
	            var _this = this;
	           if(_this.isScale5 == true){
	           		_this.a = true;
	           }else{
	           	_this.a = false;
	           }
	        },
	         deep:true
	      },isScale6:{
	        handler(){
	            var _this = this;
	           if(_this.isScale6 == true){
	           		_this.a = true;
	           }else{
	           	_this.a = false;
	           }
	        },
	         deep:true
	      },isScale7:{
	        handler(){
	            var _this = this;
	           if(_this.isScale7 == true){
	           		_this.a = true;
	           }else{
	           	_this.a = false;
	           }
	        },
	         deep:true
	      },
		}
	}
</script>
<style lang="scss" src="./AuditsManagement.scss"></style>