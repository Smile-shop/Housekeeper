<template>
	<div class="EnterpriseSelfExamination_container">
		<p class="EnterpriseSelfExamination_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>企业自查</span>
		</p>
		<div class="main">
			<div class="Eleft">
				<ul v-for = "(arr,index) in left">
					<router-link :to="arr[1]">
						<li @click="choose(index)" :class="{active: active == index}">{{arr[0]}}</li>
					</router-link>
				</ul>
			</div>
			<div class="Eright">
				<keep-alive><legitimate v-show="isshow"></legitimate></keep-alive>
				<keep-alive><router-view></router-view></keep-alive>
			</div>
		</div>
		<mt-button type="primary" class="qedit" @click="sub">提交</mt-button><br>	
	</div>
</template>

<script type="text/javascript">
	// import './EnterpriseSelfExamination.scss'
	import legitimate from '../legitimate/legitimate.vue'
	export default {
		data(){
			return {
				left:[['化妆品合法性','/legitimate'],
				     ['化装品标识标签','/Identification'],
				     ['购货验收','/Acceptance'],
				     ['产品保质期','/Term'],
				     ['储藏条件、卫生情况','/StorageCondition'],
				     ['产品宣传、店内宣传','/Propaganda'],
				     ['其他违法行为','/Others']],
				isshow:true,
				active:0,
			}
		},
		components: {
			'legitimate': legitimate
		},
		created(){
			this.getRoute();
			sessionStorage.setItem('index',0);
			this.active = sessionStorage.getItem('index');
		},
		methods: {
			goback(){
				this.$router.push({name:'index'});
				sessionStorage.removeItem('leg');
				sessionStorage.removeItem('ide');
				sessionStorage.removeItem('guoqi');
				sessionStorage.removeItem('pro');
				sessionStorage.removeItem('sto');
				sessionStorage.removeItem('zizhi');
				sessionStorage.removeItem('acc');
			},
			choose(index){
				this.active = index;
				sessionStorage.setItem('index',index)
			},
			getRoute(){
				if(this.$route.path!=='/EnterpriseSelfExamination'){
					this.isshow = false;
				}else{
					this.isshow = true;
				}
			},
			sub(){
				let leg = JSON.parse(sessionStorage.getItem('leg'));
				let ide = JSON.parse(sessionStorage.getItem('ide'));
				let guoqi = JSON.parse(sessionStorage.getItem('guoqi'));
				let pro = JSON.parse(sessionStorage.getItem('pro'));
				let sto = JSON.parse(sessionStorage.getItem('sto'));
				let zizhi = JSON.parse(sessionStorage.getItem('zizhi'));
				let acc = JSON.parse(sessionStorage.getItem('acc'));
				
				let obj = {is_manufacture_ok:leg.xukezheng,
					       have_sproduct_apply_sn:leg.pizhunwenhao,
					       have_import_app_no:leg.beianpingzheng,
					       have_simport_app_no:leg.xukepingjian,
					       is_simport_app_no_valid:leg.youxiaoqi,
					       is_import_inspected:leg.jianyan, 
					       is_qc_mark_ok:ide.hegebiaozhi,
					       is_name_regular:ide.guiding,
					       is_manu_name_addr_ok:ide.qiyedizhi,
					       is_imp_name_addr_ok:ide.dailidizhi,
					       is_manu_date_limit_ok:ide.shiyongdate,
					       is_health_permit_ok:ide.bianhao,
					       is_scosmetic_appno_ok:ide.pzwenhao,
					       is_import_app_no_ok:ide.bawenhao,
					        have_checked_date:guoqi.guoqi,
					         is_regular_check:acc.chayanzhidu,
					       have_get_legal_file:acc.zhengjiancailiao,
					       have_supplier_file:acc.qiyedangan,
					       have_purchase_file:acc.jinhuotaizhang,
					        is_area_clean:sto.neiwaizhengjie,
					       is_equipment_ok:sto.shesi1,
					       is_anti_pollution_ok:sto.wuranshesi,
					       is_storage_ok:sto.huazhuangpin,
					        is_medical_effect_ad:pro.xuanchuanliaoxiao,
					       is_medical_term:pro.yiliaoshuyu,
					       is_indications_marked:pro.shiyingzheng,
					       is_false_publicity:pro.kuada,
					       have_treatment_ad:pro.weigui,
					        have_homemade:zizhi.zizhi}
				console.log(obj);
				this.$http.post(baseUrl+'/addSelfCheck',obj).then((res)=>{
					console.log(res)
	              	if(res.data.retCode === 0){
	              		this.$messagebox.alert('操作成功!');
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		        },(err)=>{
		             this.$messagebox.alert('操作失败,请稍后再试!');
		        });
			}
		},
		watch: {
          // 如果路由有变化，会再次执行该方法
          "$route": "getRoute"
        },
	}
</script>
<style lang="scss" src="./EnterpriseSelfExamination.scss"></style>