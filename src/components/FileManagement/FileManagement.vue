<template>
	<div class="FileManagement_container">
		<p class="FileManagement_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>档案管理</span>
		</p>
		<div class="main">
			<div class="dsearch" v-show="!b">
				<!-- <el-select v-model="fileName" placeholder="请选择档案类型"  @change="getFile">
			      <el-option v-for="(arr,index) in file" :label="arr" :value="arr+'-'+index"></el-option>
			    </el-select> -->
				<i class="time" @click="openPicker">
					<el-input v-model="stime" placeholder="开始时间" class="timestart" :disabled="true"></el-input>
				</i>
				<i class="time" @click="openPicker1">
					<el-input v-model="etime" placeholder="结束时间" class="timeend" :disabled="true"></el-input>
				</i>
				<mt-button type="primary" class="year" @click="preyear">上一年</mt-button>
				<mt-button type="primary" class="year" @click="premonth">上个月</mt-button>
				<mt-button type="primary" class="search" @click="search">搜索</mt-button>
			</div>
			<div v-show="!b">
			<table class="jodtable" v-show='showOrnot'>
		      <thead>
		        <tr>
		          <th>表单、台账、档案名称</th>
		          <th>时间</th>
		          <th>操作</th>
		        </tr>
		      </thead>
		      <tbody>
		      	<tr v-show='s'>
		      		<td colspan="3">暂无数据</td>
		      	</tr>
		        <tr v-for="(arr,index) in data">
		          <td>{{arr.name}}</td>
		          <td>{{arr.create_time.split(' ')[0]}}</td>
		          <td class="cao">
		          	<mt-button type="primary" style="width:1rem;height:.48rem;font-size:10px;" @click="look(index)">查看</mt-button>
		          </td>
		        </tr>
		      </tbody>
		    </table> 
		    </div>
		    <table class="equtable" v-show='b'>
		      <thead>
		        <tr>
		          <th colspan="2">设施、设备、措施、时间</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr>
		          <td><span>*</span>通风</td>
		          <td><textarea disabled class="textearetext" v-model = "tongfeng">{{tongfeng}}</textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>防尘</td>
		          <td><textarea disabled class="textearetext" v-model = "fangchen">{{fangchen}}</textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>防潮</td>
		          <td><textarea disabled class="textearetext" v-model = "fangchao">{{fangchao}}</textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>防虫</td>
		          <td><textarea disabled class="textearetext" v-model = "fangchong">{{fangchong}}</textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>防鼠</td>
		          <td><textarea disabled class="textearetext" v-model = "fangshu">{{fangshu}}</textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>常温储存</td>
		          <td><textarea disabled class="textearetext" v-model = "cwcc">{{cwcc}}</textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>冷藏存储</td>
		          <td><textarea disabled class="textearetext" v-model = "lccc">{{lccc}}</textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>散装防污</td>
		          <td><textarea disabled class="textearetext" v-model = "szfw">{{szfw}}</textarea></td>
		        </tr>
		        <tr>
		          <td>其他设备</td>
		          <td><textarea disabled class="textearetext" v-model = "qtsb">{{qtsb}}</textarea></td>
		        </tr>
		        <tr>
		          <td>备注</td>
		          <td><textarea disabled class="textearetext" v-model = "beizhu">{{beizhu}}</textarea></td>
		        </tr>
		      </tbody>
		    </table>
			
		    <div class="z" v-show="a" @click = "a4"></div>
		  <div class="detail" v-show="!showOrnot">
		    <div>详细信息</div>
			<span class="cacel" @click="backlist">x</span>
		    <div v-show='syqy'>
		      <p><span>企业名称：{{data1.enterprise_name}}</span></p>
		      <p><span>企业类型：{{data1.enterprise_type == 1 ? '生产企业' : '经营企业' }}</span></p>
		      <p><span>组织机构代码：{{data1.enterprise_scid}}</span></p>
		      <p><span>组织机构代码证：<img :class="{scale: isScale8}" @click="isScale8 = !isScale8" :src="syqy1.img1" alt=""></span></p>
		      <p><span>卫生许可证号：{{data1.health_permit}}</span></p>
		      <p><span>卫生许可证：<img :class="{scale: isScale9}" @click="isScale9 = !isScale9" :src="syqy1.img2" alt=""></span></p>
		      <p><span>检验结论：{{data1.conclusion}}</span></p>
		      <p><span>增加时间：{{zjsj}}</span></p>
		      <mt-button type="primary" class="audit2" @click = "backlist">返回列表</mt-button>
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
		      <mt-button type="primary" class="audit2" @click = "backlist">返回列表</mt-button>
		    </div>
		    <div v-show='jhda'>
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
		      <mt-button type="primary" class="audit2" @click = "backlist">返回列表</mt-button>
		    </div>
		    <div v-show='xsda'>
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
		      <mt-button type="primary" class="audit2" @click = "backlist">返回列表</mt-button>
		    </div>
		    <div v-show='blfy'>
		      <p><span>不良反应采集时间：{{cjsj}}</span></p>
		      <p><span>记录人：{{data1.collect_man}}</span></p>
		      <p><span>商标名：{{data1.trade_name}}</span></p>
		      <p><span>通用名：{{data1.common_name}}</span></p>
		      <p><span>购买城市：{{data1.buy_city}}</span></p>
		      <p><span>批准文号：{{data1.approval_number}}</span></p>
		      <p><span>生产厂家：{{data1.manufacturer}}</span></p>
		      <p><span>生产批号：{{data1.batch_number}}</span></p>
		      <p><span>有效期至：{{yxq}}</span></p>
		      <p><span>用户姓名：{{data1.adr_name}}</span></p>
		      <p><span>用户电话：{{data1.adr_mobile}}</span></p>
		      <p><span>购买商家：{{data1.shop}}</span></p>
		      <p><span>有无化妆品过敏史：{{data1.have_cosmetic_allergy_his == 1 ? '有' : (data1.have_cosmetic_allergy_his == 0 ? '无' : '不详')}}</span></p>
		      <p v-show="data1.cosmetic_allergy_his_desc !== ''"><span>具体：{{data1.cosmetic_allergy_his_desc}}</span></p>
		      <p><span>有无药物过敏史：{{data1.have_drug_allergy_his == 1 ? '有' : (data1.have_drug_allergy_his ===0 ? '无' : '不详')}}</span></p>
		      <p v-show="data1.drug_allergy_his_desc !== ''"><span>具体：{{data1.drug_allergy_his_desc}}</span></p>
		      <p><span>有无食物过敏史：{{data1.have_food_allergy_his == 1 ? '有' : (data1.have_food_allergy_his == 0 ? '无' : '不详')}}</span></p>
		      <p v-show="data1.food_allergy_his_desc !== ''"><span>具体：{{data1.food_allergy_his_desc}}</span></p>
		      <p><span>有无其他接触物过敏史：{{data1.have_other_allergy_his == 1 ? '有' : (data1.have_other_allergy_his == 0 ? '无' : '不详')}}</span></p>
		      <p v-show="data1.other_allergy_his_desc !== ''"><span>具体：{{data1.other_allergy_his_desc}}</span></p>
		      <p><span>开始使用日期：{{kssyrq}}</span></p>
		      <p><span>化妆品不良反应发生日期：{{fyrq}}</span></p>
		      <p v-show="data1.condition_desc !== ''"><span>病情描述：{{data1.condition_desc}}</span></p>
		      <p><span>皮损部位：<span v-for="i in data1.skin_broken">{{i}}&nbsp&nbsp</span></span></p>
		      <p v-show="data1.other_skin_broken !== ''"><span>其它：{{data1.other_skin_broken}}</span></p>
		      <p><span>停用可疑化妆品：{{data1.is_stop_use == 1 ? '已停用' : '未停用'}}</span></p>
		      <p v-show="data1.stop_use_date !== ''"><span>停用时间：{{tysj}}</span></p>
		      <p><span>是否就诊：{{data1.is_treatment == 1 ? '已就诊' : '未就诊'}}</span></p>
		      <p v-show="data1.visi_hospital !== ''"><span>就诊医院：{{data1.visi_hospital}}</span></p>
		      <p><span>化妆品不良反应结果：{{data1.acr_results | filter}}</span></p>
		      <p  v-show="data1.acr_results_desc !== ''"><span>备注：{{data1.acr_results_desc}}</span></p>
		      <p><span>增加时间：{{zjsj}}</span></p>
		      <mt-button type="primary" class="audit2" @click = "backlist">返回列表</mt-button>
		    </div>
		    <div v-show='zhtz'>
		      <p><span>召回产品名称：{{data1.product_name}}</span></p>
		      <p><span>召回产品批次号：{{data1.batch_id}}</span></p>
		      <p><span style="line-height:25px;">召回通知内容：{{data1.notice}}</span></p>
		      <p><span>增加时间：{{zjsj}}</span></p>
		      <mt-button type="primary" class="audit2" @click = "backlist">返回列表</mt-button>
		    </div>
		    <div v-show='zhjl'>
		      <p><span>产品名称：{{data1.product_name}}</span></p>
		      <p><span>产品批次：{{data1.batch_id}}</span></p>
		      <p><span>消费者：{{data1.consumer}}</span></p>
		      <p><span>消费者电话：{{data1.mobile}}</span></p>
		      <p><span>召回时间：{{zhsj}}</span></p>
		      <p><span>召回数量：{{data1.recall_quantity}}</span></p>
		      <p><span>产品状况：{{data1.product_status}}</span></p>
		      <p><span>备注：{{data1.notes}}</span></p>
		      <p><span>增加时间：{{zjsj}}</span></p>
		      <mt-button type="primary" class="audit2" @click = "backlist">返回列表</mt-button>
		    </div>
		    <div v-show='lyzc'>
		      <p style="font-weight:bold;font-size:12px;">化妆品合法性</p>
		      <p><span>所经营的国产化妆品是否由取得有效的《化妆品生产企业卫生许可证》的企业生产：{{data1.is_manufacture_ok == 1 ? '是' : '否'}}</span></p>
		      <p><span>国产特殊用途化妆品是否取得“国产特殊用途化妆品批准文号”：{{data1.have_sproduct_apply_sn == 1 ? '是' : '否'}}</span></p>
		      <p><span>进口非特殊用途化妆品是否取得“进口非特殊用途化妆品备案凭证”（查看复印件）：{{data1.have_import_app_no == 1 ? '是' : '否'}}</span></p>
		      <p><span>进口特殊用途化妆品是否取得“进口特殊用途化妆品卫生许可批件”（查看复印件）：{{data1.have_simport_app_no == 1 ? '是' : '否'}}</span></p>
		      <p><span>经营的进口化妆品是否在卫生许可批件或备案凭证有效期内入境：{{data1.is_simport_app_no_valid == 1 ? '是' : '否'}}</span></p>
		      <p><span>进口化妆品是否经过检验检疫部门检验：{{data1.is_import_inspected == 1 ? '是' : '否'}}</span></p>
		      <p style="font-weight:bold;font-size:12px;">化妆品标识标签</p>
		      <p><span>所经营的化妆品是否有质量合格标记：{{data1.is_qc_mark_ok == 1 ? '是' : '否'}}</span></p>
		      <p><span>产品名称是否符合《化妆品命名规定》、《消费品使用说明化妆品通用标签》及其他化妆品标签标识管理相关规定：{{data1.is_name_regular == 1 ? '是' : '否'}}</span></p>
		      <p><span>国产化妆品是否标明生产企业的名称和地址：{{data1.is_manu_name_addr_ok == 1 ? '是' : '否'}}</span></p>
		      <p><span>进口化妆品标明原产国名或地区名、经销商、进口商、在华代理商的名称和地址：{{data1.is_imp_name_addr_ok == 1 ? '是' : '否'}}</span></p>
		      <p><span>产品是否标注生产日期和保质期，或者标注生产批号和限期使用日期：{{data1.is_manu_date_limit_ok == 1 ? '是' : '否'}}</span></p>
		      <p><span>国产化妆品是否标明生产企业的卫生许可证编号：{{data1.is_health_permit_ok == 1 ? '是' : '否'}}</span></p>
		      <p><span>特殊用途化妆品是否标示批准文号：{{data1.is_scosmetic_appno_ok == 1 ? '是' : '否'}}</span></p>
		      <p><span>进口非特殊用途化妆品是否标示备案文号：{{data1.is_import_app_no_ok == 1 ? '是' : '否'}}</span></p>
		      <p style="font-weight:bold;font-size:12px;">购货验收</p>
		      <p><span>检查化妆品经营企业是否执行化妆品进货查验制度：{{data1.is_regular_check == 1 ? '是' : '否'}}</span></p>
		      <p><span>是否索取供货企业的相关合法性证件材料：{{data1.have_get_legal_file == 1 ? '是' : '否'}}</span></p>
		      <p><span>是否建立供货企业档案：{{data1.have_supplier_file == 1 ? '是' : '否'}}</span></p>
		      <p><span>是否建立进货台账：{{data1.have_purchase_file == 1 ? '是' : '否'}}</span></p>
		      <p style="font-weight:bold;font-size:12px;">产品保质期</p>
		      <p><span>抽查化妆品是否过期：{{data1.have_checked_date == 1 ? '是' : '否'}}</span></p>
		      <p style="font-weight:bold;font-size:12px;">储藏条件、卫生情况</p>
		      <p><span>检查化妆品经营企业经营场所和仓库是否保持内外整洁：{{data1.is_area_clean == 1 ? '是' : '否'}}</span></p>
		      <p><span>是否有通风、防尘、防潮、防虫、防鼠等设施：{{data1.is_equipment_ok == 1 ? '是' : '否'}}</span></p>
		      <p><span>散装和供顾客试用的化妆品是否有防污染设施：{{data1.is_anti_pollution_ok == 1 ? '是' : '否'}}</span></p>
		      <p><span>是否按规定的储存条件储存化妆品：{{data1.is_storage_ok == 1 ? '是' : '否'}}</span></p>
		      <p style="font-weight:bold;font-size:12px;">产品宣传，店内宣传</p>
		      <p><span>所经营的化妆品是否宣传疗效：{{data1.is_medical_effect_ad == 1 ? '是' : '否'}}</span></p>
		      <p><span>所经营的化妆品是否使用医疗术语：{{data1.is_medical_term == 1 ? '是' : '否'}}</span></p>
		      <p><span>所经营的化妆品是否标注有适应症：{{data1.is_indications_marked == 1 ? '是' : '否'}}</span></p>
		      <p><span>所经营的化妆品是否存在虚假或夸大宣传：{{data1.is_false_publicity == 1 ? '是' : '否'}}</span></p>
		      <p><span>检查店内宣传资料是否存在宣称预防、治疗疾病功能等违规行为：{{data1.have_treatment_ad == 1 ? '是' : '否'}}</span></p>
		      <p style="font-weight:bold;font-size:12px;">其他违法行为</p>
		      <p><span>是否有自制化妆品行为：{{data1.have_homemade == 1 ? '是' : '否'}}</span></p>
		      <p><span>增加时间：{{zjsj}}</span></p>
		      <mt-button type="primary" class="audit2" @click = "backlist">返回列表</mt-button>
		    </div>
		    <div v-show='khyj'>
		      <p><span>用户姓名：{{data1.consumer_name}}</span></p>
		      <p><span>意见内容：{{data1.feedback}}</span></p>
		      <p><span>增加时间：{{zjsj}}</span></p>
		      <mt-button type="primary" class="audit2" @click = "backlist">返回列表</mt-button>
		    </div>
		 </div>
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
	</div>
</template>

<script type="text/javascript">
	// import './FileManagement.scss'
	export default {
		data(){
			return {
				pickerValue:'',
		        pickerValue1:'',
		        stime:'',
		        etime:'',
		        fileName:'',
		        id:'',
		        id1:'',
		        data:'',
		        s:true,
		        syqy:false,
		        sycp:false,
		        jhda:false,
		        xsda:false,
		        csss:false,
		        blfy:false,
		        zhjl:false,
		        zhtz:false,
		        lyzc:false,
		        khyj:false,
		        scrq:'',
		        yxq:'',
		        xsrq:'',
		        zjsj:'',
		        showOrnot:true,
		        isScale:false,
		        isScale1:false,isScale2:false,isScale3:false,isScale4:false,isScale5:false,isScale6:false,isScale7:false,isScale8:false,isScale9:false,
		        a:false,
		        b:false,
		        tongfeng:'',
				fangchen:'',
				fangchao:'',
				fangchong:'',
				fangshu:'',
				cwcc:'',
				lccc:'',
				szfw:'',
				qtsb:'',
				beizhu:'',
				kssyrq:'',
				fyrq:'',
				tysj:'',
				cjsj:'',
				zhsj:'',
		        data1:{create_time:"2017-09-10 16:01:01"},
		        syqy1:{img1:'',img2:''},
		        sycp1:{img:'',img1:'',img2:'',img3:'',img4:'',img5:'',img6:'',img7:'',},
		        jhda1:{img:''},
			}
		},
		created(){
			this.id = this.$route.params.index;
			if(this.id == 5){
				let obj = {id:this.id,stime:this.stime,etime:this.etime}
				this.$http.post(baseUrl+'/searchFile',obj).then((res)=>{
					console.log(res)
	              	if(res.data.retCode === 0){
		              	this.stime = '';
		              	this.etime = '';
	              		this.tongfeng = res.data.data.ventilation_equipment;
	              		this.fangchen = res.data.data.dustproof_equipment;
	              		this.fangchao = res.data.data.moistureproof_equipment;
	              		this.fangchong = res.data.data.pestproof_equipment;
	              		this.fangshu = res.data.data.mouseproof_equipment;
	              		this.cwcc = res.data.data.storage_equipment;
	              		this.lccc = res.data.data.cold_storage_equipment;
	              		this.szfw = res.data.data.anti_fouling_equipment;
	              		this.qtsb = res.data.data.other_equipment;
	              		this.beizhu = res.data.data.notes;
	              		this.b = true;
	              		
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              console.log(err);
		          });
			}
		},
		methods: {
			goback(){
				this.$router.push({name:'FileManagementType'})
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
				this.stime = this.pickerValue;
				if(this.etime != ''){
					if(this.etime<this.stime){
						this.$messagebox.alert("开始日期不能大于结束日期！");
						this.stime = ''
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
				this.etime = this.pickerValue1;
				if(this.stime != ''){
					if(this.etime<this.stime){
						this.$messagebox.alert("开始日期不能大于结束日期！");
						this.etime = ''
					}
				}
		    },
		    search(){
		    	if(this.id === ''){
		    		this.$messagebox.alert("档案类型不能为空!");
		    		return false;
		    	}else if(this.stime === ''||this.etime === ''){
		    		this.$messagebox.alert("时间不能为空!");
		    		return false;
		    	}

		     	let obj = {id:this.id,stime:this.stime,etime:this.etime}
				this.$http.post(baseUrl+'/searchFile',obj).then((res)=>{
					console.log(res)
	              	if(res.data.retCode === 0){
		              	this.stime = '';
		              	this.etime = '';
	              		this.data = res.data.data;
	              		this.s = false;
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              console.log(err);
		          });
		     },
		     preyear(){
		     	if(this.id === ''){
		    		this.$messagebox.alert("档案类型不能为空!");
		    		return false;
		    	}
		     	let obj = {id:this.id}
				this.$http.post(baseUrl+'/searchFileLastYear',obj).then((res)=>{
					console.log(res)
	              	if(res.data.retCode === 0){
						this.data = res.data.data;
						this.s = false;
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              console.log(err);
		          });
		     },
		     premonth(){
		     	if(this.id === ''){
		    		this.$messagebox.alert("档案类型不能为空!");
		    		return false;
		    	}
		     	let obj = {id:this.id}
				this.$http.post(baseUrl+'/searchFileLastMonth',obj).then((res)=>{
	              	if(res.data.retCode === 0){
						this.data = res.data.data;	
						this.s = false;              		
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              console.log(err);
		          });
		     },
		     look(index){
		     	this.id1 = this.data[index].id;
		     	this.showOrnot = false;
		     	let obj = {id:this.id1};
		     	if(this.id == 1){
		     		this.syqy = true;
		     	}else if(this.id == 2){
		     		this.sycp = true;
		     	}else if(this.id == 3){
		     		this.jhda = true;
		     	}else if(this.id == 4){
		     		this.xsda = true;
		     	}else if(this.id == 5){
		     		this.csss = true;
		     	}else if(this.id == 6){
		     		this.blfy = true;
		     	}else if(this.id == 7){
		     		this.zhtz = true;
		     	}else if(this.id == 8){
		     		this.zhjl = true;
		     	}else if(this.id == 9){
		     		this.lyzc = true;
		     	}else if(this.id == 10){
		     		this.khyj = true;
		     	}
		     	let jiekou = ['/findSupplier','/findProduct','/findPurchaseDetail','/findSaleDetail','/','/findAdrData','/findRecallNotice','/findRecallLog','/findSelfCheck','/findFeedback']
				this.$http.get(baseUrl+jiekou[this.id - 1], {params:obj}).then((res)=>{
					console.log(res)
	              	if(res.data.retCode === 0){
						// this.data1 = eval('(' + (JSON.stringify(res.data.data)) + ')')
						this.data1 = res.data.data
						// let data2 = (JSON.stringify(res.data.data))
						// console.log(eval('(' + data2 + ')'))
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
						if(this.data1.start_use_date != null && this.data1.start_use_date != undefined){
							this.kssyrq = this.data1.start_use_date.split(' ')[0]
						}
						if(this.data1.acr_action_date != null && this.data1.acr_action_date != undefined){
							this.fyrq = this.data1.acr_action_date.split(' ')[0]
						}
						if(this.data1.stop_use_date != null && this.data1.stop_use_date != undefined){
							this.tysj = this.data1.stop_use_date.split(' ')[0]
						}
						if(this.data1.evidence_date != null && this.data1.evidence_date != undefined){
							this.cjsj = this.data1.evidence_date.split(' ')[0]
						}
						if(this.data1.recall_date != null && this.data1.recall_date != undefined){
							this.zhsj = this.data1.recall_date.split(' ')[0]
						}
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              console.log(err);
		          });
		     },
		    backlist(){
		     	this.showOrnot = true;
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
		    	this.isScale8 =false;
		    	this.isScale9 =false;
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
	      },isScale8:{
	        handler(){
	            var _this = this;
	           if(_this.isScale8 == true){
	           		_this.a = true;
	           }else{
	           	_this.a = false;
	           }
	        },
	         deep:true
	      },isScale9:{
	        handler(){
	            var _this = this;
	           if(_this.isScale9 == true){
	           		_this.a = true;
	           }else{
	           	_this.a = false;
	           }
	        },
	         deep:true
	      },
	    },
		filters:{
	        filter(value){
	            let res='';
            	switch(value){
	                case 1:
	                    res="治愈";
	                    break;
	                case 2:
	                    res="好转";
	                    break;
	                case 3:
	                    res="未好转";
	                    break;
	                case 4:
	                    res="有后遗症";
	                    break;
	                case 5:
	                    res="不详";
	                    break;    
	                default:
	                    res=''        
	            }
	            return res;
	        }
	    }
	}
</script>
<style lang="scss" src="./FileManagement.scss"></style>