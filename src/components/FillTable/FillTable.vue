<template>
	<div class="FillTable_container">
		<p class="FillTable_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>表格填写说明</span>
		</p>
		<div class="main">
			<table class="jodtable">
		      <thead>
		        <tr>
		          <th colspan="2">不良反应信息采集表</th>
		        </tr>
		      </thead>
		      <tbody>
		      	<tr>
		          <td>不良反应采集时间</td>
		          <td>
		          	<i class="time" @click="openPicker">
		          		<el-input class="time" v-model="cjsj"  placeholder="点击选择时间" :disabled="true"></el-input>
		          	</i>
		          </td>
		        </tr>
		        <tr>
		          <td>记录人</td>
		          <td>
		          	<el-input v-model="jlr" placeholder="" class = "text"></el-input>
		          </td>
		        </tr>
		        <tr>
		          <td>商标名</td>
		          <td>
		          	<el-input v-model="sbm" placeholder="" class = "text"></el-input>
		          </td>
		        </tr>
		        <tr>
		          <td>通用名</td>
		          <td>
		          	<el-input v-model="tym" placeholder="" class = "text"></el-input>
		          </td>
		        </tr>
		        <tr>
		          <td>购买城市</td>
		          <td>
		          	<el-input v-model="gmcs" placeholder="" class = "text"></el-input>
		          </td>
		        </tr>
		        <tr>
		          <td>批准文号（备案号）</td>
		          <td>
		          	<el-input v-model="pzwh" placeholder="" class = "text"></el-input>
		          </td>
		        </tr>
		        <tr>
		          <td>生产厂家</td>
		          <td>
		          	<el-input v-model="sccj" placeholder="" class = "text"></el-input>
		          </td>
		        </tr>
		        <tr>
		          <td>生产批号</td>
		          <td>
		          	<el-input v-model="scph" placeholder="" class = "text"></el-input>
		          </td>
		        </tr>
		        <tr>
		          <td>有效期至</td>
		          <td>
		          	<i class="time" @click="openPicker1">
		          		<el-input class="time" v-model="yxqz"  placeholder="点击选择时间" :disabled="true"></el-input>
		          	</i>
		          </td>
		        </tr>
		         <tr>
		         <td>用户姓名</td>
		          <td>
		          	<el-input v-model="yhxm" placeholder="" class = "text"></el-input>
		          </td>
		        </tr>
		         <tr>
		         <td>用户电话</td>
		          <td>
		          	<el-input v-model="yhdh" placeholder="" class = "text"></el-input>
		          </td>
		        </tr>
		        <tr>
		         <td>购买商家</td>
		          <td>
		          	<el-input v-model="gmsj" placeholder="" class = "text"></el-input>
		          </td>
		        </tr>
		        <tr>
		          <td>有无化妆品过敏史</td>
		          <td>
		          	<el-radio-group v-model="radio5"  @change = "t">
			          	<el-radio :label="1">有</el-radio>
					    <el-radio :label="0">无</el-radio>
					    <el-radio :label="2">不详</el-radio><br>
	 					<el-form label-width="80px" v-show ="huashi">
						  <el-form-item label="具体:">
				          	<el-input class="time" v-model="ywhzpgms"></el-input>
						  </el-form-item>
						 </el-form>
					</el-radio-group>
		          </td>
		        </tr>
				<tr>
		          <td>有无药物过敏史</td>
		          <td>
		          	<el-radio-group v-model="radio6"  @change = "t">
			          	<el-radio :label="1">有</el-radio>
					    <el-radio :label="0">无</el-radio>
					    <el-radio :label="2">不详</el-radio><br>
	 					<el-form label-width="80px" v-show ="yaoshi">
						  <el-form-item label="具体:">
				          	<el-input class="time" v-model="ywywgms"></el-input>
						  </el-form-item>
						 </el-form>
					</el-radio-group>
		          </td>
		        </tr>
		        <tr>
		          <td>有无食物过敏史</td>
		          <td>
		          	<el-radio-group v-model="radio7"  @change = "t">
			          	<el-radio :label="1">有</el-radio>
					    <el-radio :label="0">无</el-radio>
					    <el-radio :label="2">不详</el-radio><br>
	 					<el-form label-width="80px" v-show ="shishi">
						  <el-form-item label="具体:">
				          	<el-input class="time" v-model="ywswgms"></el-input>
						  </el-form-item>
						 </el-form>
					</el-radio-group>
		          </td>
		        </tr>
		        <tr>
		          <td>有无其他接触物过敏史</td>
		          <td>
		          	<el-radio-group v-model="radio8"  @change = "t">
			          	<el-radio :label="1">有</el-radio>
					    <el-radio :label="0">无</el-radio>
					    <el-radio :label="2">不详</el-radio><br>
	 					<el-form label-width="80px" v-show ="jieshi">
						  <el-form-item label="具体:">
				          	<el-input class="time" v-model="ywqtjcwgms"></el-input>
						  </el-form-item>
						 </el-form>
					</el-radio-group>
		          </td>
		        </tr>
		        <tr>
		          <td>开始使用日期</td>
		          <td>
		          	<i class="time" @click="openPicker2">
		          		<el-input class="time" v-model="kssyrq"  placeholder="点击选择时间" :disabled="true"></el-input>
		          	</i>
		          </td>
		        </tr>
		        <tr>
		          <td>化妆品不良反应发生日期</td>
		          <td>
		          	<i class="time" @click="openPicker3">
		          		<el-input class="time" v-model="fsrq"  placeholder="点击选择时间" :disabled="true"></el-input>
		          	</i>
		          </td>
		        </tr>
		        <tr>
		          <td>病情描述</td>
		          <td>
		          	<el-input v-model="bqms" placeholder="" class = "text" type="textarea"></el-input>
		          </td>
		        </tr>
		        <tr>
		          <td>皮损部位</td>
		          <td>
		          	<span class="tips">勾选具体部位或者其他</span><br>
					<el-checkbox-group v-model="checkList">
					    <el-checkbox label="面部"></el-checkbox>
					    <el-checkbox label="额部"></el-checkbox>
					    <el-checkbox label="颊部"></el-checkbox>
					    <el-checkbox label="眼周"></el-checkbox>
					    <el-checkbox label="鼻部"></el-checkbox>
					    <el-checkbox label="口唇"></el-checkbox>
					    <el-checkbox label="口周"></el-checkbox>
					    <el-checkbox label="颏部"></el-checkbox>
					    <el-checkbox label="头皮"></el-checkbox>
					    <el-checkbox label="颈部"></el-checkbox>
					    <el-checkbox label="全身"></el-checkbox>
					    <el-checkbox label="胸部"></el-checkbox>
					    <el-checkbox label="腹部"></el-checkbox>
					    <el-checkbox label="背部"></el-checkbox>
					    <el-checkbox label="腋窝"></el-checkbox>
					    <el-checkbox label="上肢"></el-checkbox>
					    <el-checkbox label="下肢"></el-checkbox>
					    <el-checkbox label="手部"></el-checkbox>
					    <el-checkbox label="甲周"></el-checkbox>
					    <el-checkbox label="甲板"></el-checkbox>
					    <el-checkbox label="外耳廓"></el-checkbox>
					    <el-checkbox label="腹股沟"></el-checkbox>
					 </el-checkbox-group>
					 <el-form label-width="50px">
						  <el-form-item label="其他">
						    <el-input v-model="qt"></el-input>
						  </el-form-item>
					 </el-form>
		          </td>
		        </tr>
		        <tr>
		          <td>停用可疑化妆品</td>
		          <td>
		          	<el-radio-group v-model="radio"  @change = "t">
			          	<el-radio :label="1">已停</el-radio>
					    <el-radio :label="0">未停</el-radio><br>
	 					<el-form label-width="80px" v-show ="tingyong">
						  <el-form-item label="停用日期:">
						    <i class="time" @click="openPicker4">
				          		<el-input class="time" v-model="tyrq"  placeholder="点击选择时间" :disabled="true"></el-input>
				          	</i>
						  </el-form-item>
						 </el-form>
					</el-radio-group>
		          </td>
		        </tr>
		        <tr>
		          <td>是否就诊</td>
		          <td>
		          	<el-radio-group v-model="radio1"  @change = "t">
			          	<el-radio :label="1">是</el-radio>
					    <el-radio :label="0">否</el-radio><br>
 					<el-form label-width="80px" v-show ="jiuzhen">
					  <el-form-item label="就诊医院:">
			          	<el-input class="time" v-model="jzyy"></el-input>
					  </el-form-item>
					 </el-form>
					</el-radio-group>
		          </td>
		        </tr>
		        <tr>
		          <td>化妆品不良反应结果</td>
		          <td>
		          	<el-radio class="radio" v-model="radio2" label="1">治愈</el-radio>
 					<el-radio class="radio" v-model="radio2" label="2">好转</el-radio>
 					<el-radio class="radio" v-model="radio2" label="3">未好转</el-radio>
 					<el-radio class="radio" v-model="radio2" label="4">有后遗症</el-radio>
 					<el-radio class="radio" v-model="radio2" label="5">不详</el-radio>
		          </td>
		        </tr>
		        <tr>
		          <td>备注</td>
		          <td>
		          	<el-input v-model="bz" placeholder="" class = "text"></el-input>
		          </td>
		        </tr>
		      </tbody>
		    </table>
		</div>
		<mt-button type="primary" class="send" @click = "sub">提交</mt-button>
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
		<mt-datetime-picker
		    ref="picker2"
		    type="date"
		    yearFormat="{value} 年"
		    monthFormat="{value} 月"
		    dateFormat="{value} 日"
		    v-model="pickerValue2"
		    @confirm="cc">
		</mt-datetime-picker>
		<mt-datetime-picker
		    ref="picker3"
		    type="date"
		    yearFormat="{value} 年"
		    monthFormat="{value} 月"
		    dateFormat="{value} 日"
		    v-model="pickerValue3"
		    @confirm="dd">
		</mt-datetime-picker>
		<mt-datetime-picker
		    ref="picker4"
		    type="date"
		    yearFormat="{value} 年"
		    monthFormat="{value} 月"
		    dateFormat="{value} 日"
		    v-model="pickerValue4"
		    @confirm="ee">
		</mt-datetime-picker>
	</div>
</template>

<script type="text/javascript">
	// import './FillTable.scss'
	export default {
		data(){
			return {
		        checkList:[],
		        pickerValue:'',
		        pickerValue1:'',
		        pickerValue2:'',
		        pickerValue3:'',
		        pickerValue4:'',
		        qt:'',
		        cjsj:'',
		        yxqz:'',
		        kssyrq:'',
		        fsrq:'',
		        tyrq:'',
		        radio:'',
		        radio1:'',
		        jzyy:'',
		        jlr:'',
		        radio2:'',
		        radio5:'',
		        radio6:'',
		        radio7:'',
		        radio8:'',
		        bz:'',
		        bqms:'',
		        ywqtjcwgms:'',
		        ywswgms:'',
		        ywywgms:'',
		        ywhzpgms:'',
		        gmsj:'',
		        scph:'',
		        sccj:'',
		        pzwh:'',
		        gmcs:'',
		        tym:'',
		        sbm:'',
		        yhxm:'',
		        yhdh:'',
		        tingyong:false,
		        jiuzhen:false,
		        huashi:false,
		        yaoshi:false,
		        shishi:false,
		        jieshi:false,
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
				this.cjsj = this.pickerValue;
		    },
		    bb(){
		    	let a = new Date(this.pickerValue1);
				let y = a.getFullYear();
				let M = a.getMonth()+1;
				let d = a.getDate();
				M = M < 10 ? '0' + M : M
				d = d < 10 ? '0' + d : d
				let pickerValue = `${y}-${M}-${d}`
				this.pickerValue1 = pickerValue;
				this.yxqz = this.pickerValue1;
		    },
		    cc(){
		    	let a = new Date(this.pickerValue2);
				let y = a.getFullYear();
				let M = a.getMonth()+1;
				let d = a.getDate();
				M = M < 10 ? '0' + M : M
				d = d < 10 ? '0' + d : d
				let pickerValue = `${y}-${M}-${d}`
				this.pickerValue2 = pickerValue;
				this.kssyrq = this.pickerValue2;
		    },
		    dd(){
		    	let a = new Date(this.pickerValue3);
				let y = a.getFullYear();
				let M = a.getMonth()+1;
				let d = a.getDate();
				M = M < 10 ? '0' + M : M
				d = d < 10 ? '0' + d : d
				let pickerValue = `${y}-${M}-${d}`
				this.pickerValue3 = pickerValue;
				this.fsrq = this.pickerValue3;
		    },
		    ee(){
		    	let a = new Date(this.pickerValue4);
				let y = a.getFullYear();
				let M = a.getMonth()+1;
				let d = a.getDate();
				M = M < 10 ? '0' + M : M
				d = d < 10 ? '0' + d : d
				let pickerValue = `${y}-${M}-${d}`
				this.pickerValue4 = pickerValue;
				this.tyrq = this.pickerValue4;
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
		    openPicker2() {
		        this.$refs.picker2.open();
		        let a = new Date();
				let y = a.getFullYear();
				let M = a.getMonth()+1;
				let d = a.getDate();
				M = M < 10 ? '0' + M : M
				d = d < 10 ? '0' + d : d
				let time = `${y}-${M}-${d}`;
				this.pickerValue2 = time;
		    },
		    openPicker3() {
		        this.$refs.picker3.open();
		        let a = new Date();
				let y = a.getFullYear();
				let M = a.getMonth()+1;
				let d = a.getDate();
				M = M < 10 ? '0' + M : M
				d = d < 10 ? '0' + d : d
				let time = `${y}-${M}-${d}`;
				this.pickerValue3 = time;
		    },
		    openPicker4() {
		        this.$refs.picker4.open();
		        let a = new Date();
				let y = a.getFullYear();
				let M = a.getMonth()+1;
				let d = a.getDate();
				M = M < 10 ? '0' + M : M
				d = d < 10 ? '0' + d : d
				let time = `${y}-${M}-${d}`;
				this.pickerValue4 = time;
		    },
		    t(){
		    	if(this.radio == 1){
		    		this.tingyong = true;
		    	}else{
		    		this.tingyong = false;
		    		this.tyrq = '';
		    	}
		    	if(this.radio1 == 1){
		    		this.jiuzhen = true;
		    	}else{
		    		this.jiuzhen = false;
		    		this.jzyy = '';
		    	}
		    	if(this.radio5 == 1){
		    		this.huashi = true;
		    	}else{
		    		this.huashi = false;
		    		this.ywhzpgms = '';
		    	}
		    	if(this.radio6 == 1){
		    		this.yaoshi = true;
		    	}else{
		    		this.yaoshi = false;
		    		this.ywywgms = '';
		    	}
		    	if(this.radio7 == 1){
		    		this.shishi = true;
		    	}else{
		    		this.shishi = false;
		    		this.ywswgms = '';
		    	}
		    	if(this.radio8 == 1){
		    		this.jieshi = true;
		    	}else{
		    		this.jieshi = false;
		    		this.ywqtjcwgms = '';
		    	}
		    },
		    sub(){
		    	switch (''){
					case this.cjsj:
						this.$messagebox.alert('采集时间不能为空！');
						return;
					case this.jlr:
						this.$messagebox.alert('记录人不能为空！');
						return;	
					case this.sbm:
						this.$messagebox.alert('商标名不能为空！');
						return;
					case this.tym:
						this.$messagebox.alert('通用名不能为空！');
						return;	
					case this.gmcs:
						this.$messagebox.alert('购买城市不能为空！');
						return;	
					case this.pzwh:
						this.$messagebox.alert('批准文号不能为空！');
						return;
					case this.sccj:
						this.$messagebox.alert('生产厂家不能为空！');
						return;
					case this.scph:
						this.$messagebox.alert('生产批号不能为空！');
						return;	
					case this.yxqz:
						this.$messagebox.alert('有效期不能为空！');
						return;	
					case this.yhxm:
						this.$messagebox.alert('用户姓名不能为空！');
						return;
					case this.yhdh:
						this.$messagebox.alert('用户电话不能为空！');
						return;
					case this.gmsj:
						this.$messagebox.alert('购买商家不能为空！');
						return;	
					case this.radio5:
						this.$messagebox.alert('有无化妆品过敏史不能为空！');
						return;	
					case this.radio6:
						this.$messagebox.alert('有无药物过敏史不能为空！');
						return;
					case this.radio7:
						this.$messagebox.alert('有无食物过敏史不能为空！');
						return;
					case this.radio8:
						this.$messagebox.alert('有无其他接触物过敏史不能为空！');
						return;
					case this.kssyrq:
						this.$messagebox.alert('开始使用日期不能为空！');
						return;	
					case this.fsrq:
						this.$messagebox.alert('化妆品不良反应发生日期不能为空！');
						return;	
					case this.bqms:
						this.$messagebox.alert('病情描述不能为空！');
						return;
					case this.checkList:
						this.$messagebox.alert('皮损部位选项不能为空！');
						return;
					case this.radio:
						this.$messagebox.alert('停用可疑化妆品选项不能为空！');
						return;	
					case this.radio1:
						this.$messagebox.alert('是否就诊选项不能为空！');
						return;	
					case this.radio2:
						this.$messagebox.alert('化妆品不良反应结果选项不能为空！');
						return;
				}
		     	let obj = {
		     		evidence_date:this.cjsj,
		     		collect_man:this.jlr,
		     		trade_name:this.sbm,
		     		common_name:this.tym,
		     		buy_city:this.gmcs,
		     		approval_number:this.pzwh,
		     		manufacturer:this.sccj,
		     		batch_number:this.scph,
		     		expire_date:this.yxqz,
		     		adr_name:this.yhxm,
		     		adr_mobile:this.yhdh,
		     		shop:this.gmsj,
		     		have_cosmetic_allergy_his:this.radio5,
		     		cosmetic_allergy_his_desc:this.ywhzpgms,
		     		have_drug_allergy_his:this.radio6,
		     		drug_allergy_his_desc:this.ywywgms,
		     		have_food_allergy_his:this.radio7,
		     		food_allergy_his_desc:this.ywswgms,
		     		have_other_allergy_his:this.radio8,
		     		other_allergy_his_desc:this.ywqtjcwgms,
		     		start_use_date:this.kssyrq,
		     		acr_action_date:this.fsrq,
		     		condition_desc:this.bqms,
		     		skin_broken:this.checkList,
		     		other_skin_broken:this.qt,
		     		is_stop_use:this.radio,
		     		stop_use_date:this.tyrq,
		     		is_treatment:this.radio1,
		     		visi_hospital:this.jzyy,
		     		acr_results:this.radio2,
		     		acr_results_desc:this.bz,
		     			  }
		     	this.$http.post(baseUrl+'/addAdrData',obj).then((res)=>{
		              	
		              	if(res.data.retCode === 0){
		              		this.$messagebox.alert('提交成功!').then(action => {
		              			this.$router.push({name:'QualityTracking'})
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
<style lang="scss" src="./FillTable.scss"></style>