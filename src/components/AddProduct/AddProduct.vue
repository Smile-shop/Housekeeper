<template>
	<div class="AddProduct_container">
		<p class="AddProduct_text">
			<img src="../../assets/imgs/arrow (1).png" class="AddProductback" @click="goback">
			<span>添加产品</span>
		</p>
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">A国产非特</mt-tab-item>
		  <mt-tab-item id="2">B进口非特</mt-tab-item>
		  <mt-tab-item id="3">C国产特殊</mt-tab-item>
		  <mt-tab-item id="4">D进口特殊</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <p class="title">供货企业合规信息登记表A</p>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="许可查验人:">
			    <el-input v-model="a.xkcyr1"></el-input>
			  </el-form-item>
			  <el-form-item label="许可查验日期:">
			    <el-input v-model="a.xkcydate1"></el-input>
			  </el-form-item>
			  <el-form-item label="ANO:">
			    <el-input v-model="a.ANO1"></el-input>
			  </el-form-item>
			  <el-form-item label="类别:">
			    <el-input v-model="a.lb1"></el-input>
			  </el-form-item>
			  <el-form-item label="供货企业名称:">
			    <el-input v-model="a.ghqymc1"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>国产非特备案凭证</p>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="备案凭证号:">
			    <el-input v-model="a.bapzh1"></el-input>
			  </el-form-item>
			   <el-form-item label="检验报告:">
			    <el-input v-model="a.jybg1"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>生产厂商</p>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="企业名称:">
			    <el-input v-model="a.qymc1"></el-input>
			  </el-form-item>
			   <el-form-item label="企业代码:">
			    <el-input v-model="a.qydm1"></el-input>
			  </el-form-item>
			   <el-form-item label="生产许可证号:">
			    <el-input v-model="a.scxkzh1"></el-input>
			  </el-form-item>
			   <el-form-item label="类型:">
			    <el-input v-model="a.lx1"></el-input>
			  </el-form-item>
			   <el-form-item label="规格:">
			    <el-input v-model="a.gg1"></el-input>
			  </el-form-item>
			  <el-form-item label="储藏条件:">
			    <el-input v-model="a.cctj1"></el-input>
			  </el-form-item>
			  <el-form-item label="其他:">
			    <el-input v-model="a.qt1"></el-input>
			  </el-form-item>
			</el-form>
			<p class="t">
				<span class="hez">合格证:</span>
				<el-radio class="radio" v-model="a.radio1" label="0">通过</el-radio>
  				<el-radio class="radio" v-model="a.radio1" label="1">不通过</el-radio><br>
  				<span class="bq">标签:</span>
				<el-radio class="radio" v-model="a.radio2" label="0">通过</el-radio>
  				<el-radio class="radio" v-model="a.radio2" label="1">不通过</el-radio><br>
  				<span class="bz">包装:</span>
				<el-radio class="radio" v-model="a.radio3" label="0">通过</el-radio>
  				<el-radio class="radio" v-model="a.radio3" label="1">不通过</el-radio><br>
  				<span class="wx">文宣禁忌用词:</span>
				<el-radio class="radio" v-model="a.radio4" label="0">通过</el-radio>
  				<el-radio class="radio" v-model="a.radio4" label="1">不通过</el-radio><br>
			</p>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>凭证拍照</p>
			<span class="yy">备案注册:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic1"
			  :auto-upload="false">
			  <img v-if="a.imageUrl1" :src="a.imageUrl1" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">营业执照:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic2"
			  :auto-upload="false">
			  <img v-if="a.imageUrl2" :src="a.imageUrl2" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">许可证:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic3"
			  :auto-upload="false">
			  <img v-if="a.imageUrl3" :src="a.imageUrl3" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">检验报告:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic4"
			  :auto-upload="false">
			  <img v-if="a.imageUrl4" :src="a.imageUrl4" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">合格证:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic5"
			  :auto-upload="false">
			  <img v-if="a.imageUrl5" :src="a.imageUrl5" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">标签:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic6"
			  :auto-upload="false">
			  <img v-if="a.imageUrl6" :src="a.imageUrl6" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">包装:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic7"
			  :auto-upload="false">
			  <img v-if="a.imageUrl7" :src="a.imageUrl7" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">其他:</span>
			<el-upload
			  class="avatar-uploader up"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic8"
			  :auto-upload="false">
			  <img v-if="a.imageUrl8" :src="a.imageUrl8" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="检验结论:">
			    <el-input v-model="a.jyjl"></el-input>
			  </el-form-item>
			</el-form>
		    <mt-button type="primary" class="pedit">提交</mt-button>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <p class="title">供货企业合规信息登记表B</p>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="许可查验人:">
			    <el-input v-model="b.xkcyr1"></el-input>
			  </el-form-item>
			  <el-form-item label="许可查验日期:">
			    <el-input v-model="b.xkcydate1"></el-input>
			  </el-form-item>
			  <el-form-item label="ANO:">
			    <el-input v-model="b.ANO1"></el-input>
			  </el-form-item>
			  <el-form-item label="类别:">
			    <el-input v-model="b.lb1"></el-input>
			  </el-form-item>
			  <el-form-item label="供货企业名称:">
			    <el-input v-model="b.ghqymc1"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>进口非特备案凭证</p>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="备案凭证号:">
			    <el-input v-model="b.zcpzh1"></el-input>
			  </el-form-item>
			   <el-form-item label="检验报告:">
			    <el-input v-model="b.jybg1"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>在华申报单位</p>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="备案凭证号:">
			    <el-input v-model="b.zcpzh2"></el-input>
			  </el-form-item>
			   <el-form-item label="检验报告:">
			    <el-input v-model="b.jybg2"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>进口总代</p>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="企业代码:">
			    <el-input v-model="b.qydm2"></el-input>
			  </el-form-item>
			   <el-form-item label="总代凭号:">
			    <el-input v-model="b.zdph2"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>生产厂商</p>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="生产国家:">
			    <el-input v-model="b.scgj1"></el-input>
			  </el-form-item>
			   <el-form-item label="企业名称:">
			    <el-input v-model="b.qydm1"></el-input>
			  </el-form-item>
			   <el-form-item label="生产品牌:">
			    <el-input v-model="b.scxkzh1"></el-input>
			  </el-form-item>
			   <el-form-item label="类型:">
			    <el-input v-model="b.lx1"></el-input>
			  </el-form-item>
			   <el-form-item label="规格:">
			    <el-input v-model="b.gg1"></el-input>
			  </el-form-item>
			  <el-form-item label="储藏条件:">
			    <el-input v-model="b.cctj1"></el-input>
			  </el-form-item>
			  <el-form-item label="其他:">
			    <el-input v-model="b.qt1"></el-input>
			  </el-form-item>
			</el-form>
			<p class="t">
				<span class="hez">合格证:</span>
				<el-radio class="radio" v-model="b.radio1" label="0">通过</el-radio>
  				<el-radio class="radio" v-model="b.radio1" label="1">不通过</el-radio><br>
  				<span class="bq">标签:</span>
				<el-radio class="radio" v-model="b.radio2" label="0">通过</el-radio>
  				<el-radio class="radio" v-model="b.radio2" label="1">不通过</el-radio><br>
  				<span class="bz">包装:</span>
				<el-radio class="radio" v-model="b.radio3" label="0">通过</el-radio>
  				<el-radio class="radio" v-model="b.radio3" label="1">不通过</el-radio><br>
  				<span class="wx">文宣禁忌用词:</span>
				<el-radio class="radio" v-model="b.radio4" label="0">通过</el-radio>
  				<el-radio class="radio" v-model="b.radio4" label="1">不通过</el-radio><br>
			</p>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>凭证拍照</p>
			<span class="yy">备案注册:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic1"
			  :auto-upload="false">
			  <img v-if="b.imageUrl1" :src="b.imageUrl1" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">营业执照:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic2"
			  :auto-upload="false">
			  <img v-if="b.imageUrl2" :src="b.imageUrl2" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">许可证:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic3"
			  :auto-upload="false">
			  <img v-if="b.imageUrl3" :src="b.imageUrl3" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">检验报告:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic4"
			  :auto-upload="false">
			  <img v-if="b.imageUrl4" :src="b.imageUrl4" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">合格证:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic5"
			  :auto-upload="false">
			  <img v-if="b.imageUrl5" :src="b.imageUrl5" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">标签:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic6"
			  :auto-upload="false">
			  <img v-if="b.imageUrl6" :src="b.imageUrl6" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">包装:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic7"
			  :auto-upload="false">
			  <img v-if="b.imageUrl7" :src="b.imageUrl7" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">其他:</span>
			<el-upload
			  class="avatar-uploader up"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic8"
			  :auto-upload="false">
			  <img v-if="b.imageUrl8" :src="b.imageUrl8" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="检验结论:">
			    <el-input v-model="b.jyjl"></el-input>
			  </el-form-item>
			</el-form>
		    <mt-button type="primary" class="pedit">提交</mt-button>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <p class="title">供货企业合规信息登记表C</p>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="许可查验人:">
			    <el-input v-model="c.xkcyr1"></el-input>
			  </el-form-item>
			  <el-form-item label="许可查验日期:">
			    <el-input v-model="c.xkcydate1"></el-input>
			  </el-form-item>
			  <el-form-item label="ANO:">
			    <el-input v-model="c.ANO1"></el-input>
			  </el-form-item>
			  <el-form-item label="类别:">
			    <el-input v-model="c.lb1"></el-input>
			  </el-form-item>
			  <el-form-item label="供货企业名称:">
			    <el-input v-model="c.ghqymc1"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>国产特殊许可批件</p>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="注册凭证号:">
			    <el-input v-model="c.zcpzh1"></el-input>
			  </el-form-item>
			   <el-form-item label="检验报告:">
			    <el-input v-model="c.jybg1"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>生产厂商</p>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="企业名称:">
			    <el-input v-model="c.qymc1"></el-input>
			  </el-form-item>
			   <el-form-item label="企业代码:">
			    <el-input v-model="c.qydm1"></el-input>
			  </el-form-item>
			   <el-form-item label="生产许可证号:">
			    <el-input v-model="c.scxkzh1"></el-input>
			  </el-form-item>
			   <el-form-item label="类型:">
			    <el-input v-model="c.lx1"></el-input>
			  </el-form-item>
			   <el-form-item label="规格:">
			    <el-input v-model="c.gg1"></el-input>
			  </el-form-item>
			  <el-form-item label="储藏条件:">
			    <el-input v-model="c.cctj1"></el-input>
			  </el-form-item>
			  <el-form-item label="其他:">
			    <el-input v-model="c.qt1"></el-input>
			  </el-form-item>
			</el-form>
			<p class="t">
				<span class="hez">合格证:</span>
				<el-radio class="radio" v-model="c.radio1" label="0">通过</el-radio>
  				<el-radio class="radio" v-model="c.radio1" label="1">不通过</el-radio><br>
  				<span class="bq">标签:</span>
				<el-radio class="radio" v-model="c.radio2" label="0">通过</el-radio>
  				<el-radio class="radio" v-model="c.radio2" label="1">不通过</el-radio><br>
  				<span class="bz">包装:</span>
				<el-radio class="radio" v-model="c.radio3" label="0">通过</el-radio>
  				<el-radio class="radio" v-model="c.radio3" label="1">不通过</el-radio><br>
  				<span class="wx">文宣禁忌用词:</span>
				<el-radio class="radio" v-model="c.radio4" label="0">通过</el-radio>
  				<el-radio class="radio" v-model="c.radio4" label="1">不通过</el-radio><br>
			</p>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>凭证拍照</p>
			<span class="yy">备案注册:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic1"
			  :auto-upload="false">
			  <img v-if="c.imageUrl1" :src="c.imageUrl1" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">营业执照:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic2"
			  :auto-upload="false">
			  <img v-if="c.imageUrl2" :src="c.imageUrl2" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">许可证:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic3"
			  :auto-upload="false">
			  <img v-if="c.imageUrl3" :src="c.imageUrl3" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">检验报告:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic4"
			  :auto-upload="false">
			  <img v-if="c.imageUrl4" :src="c.imageUrl4" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">合格证:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic5"
			  :auto-upload="false">
			  <img v-if="c.imageUrl5" :src="c.imageUrl5" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">标签:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic6"
			  :auto-upload="false">
			  <img v-if="c.imageUrl6" :src="c.imageUrl6" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">包装:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic7"
			  :auto-upload="false">
			  <img v-if="c.imageUrl7" :src="c.imageUrl7" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">其他:</span>
			<el-upload
			  class="avatar-uploader up"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic8"
			  :auto-upload="false">
			  <img v-if="c.imageUrl8" :src="c.imageUrl8" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="检验结论:">
			    <el-input v-model="c.jyjl"></el-input>
			  </el-form-item>
			</el-form>
		    <mt-button type="primary" class="pedit">提交</mt-button>
		  </mt-tab-container-item>
		   <mt-tab-container-item id="4">
		    <p class="title">供货企业合规信息登记表D</p>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="许可查验人:">
			    <el-input v-model="d.xkcyr1"></el-input>
			  </el-form-item>
			  <el-form-item label="许可查验日期:">
			    <el-input v-model="d.xkcydate1"></el-input>
			  </el-form-item>
			  <el-form-item label="ANO:">
			    <el-input v-model="d.ANO1"></el-input>
			  </el-form-item>
			  <el-form-item label="类别:">
			    <el-input v-model="d.lb1"></el-input>
			  </el-form-item>
			  <el-form-item label="供货企业名称:">
			    <el-input v-model="d.ghqymc1"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>进口特殊许可批件</p>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="备案凭证号:">
			    <el-input v-model="d.zcpzh1"></el-input>
			  </el-form-item>
			   <el-form-item label="检验报告:">
			    <el-input v-model="d.jybg1"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>在华申报单位</p>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="备案凭证号:">
			    <el-input v-model="d.zcpzh2"></el-input>
			  </el-form-item>
			   <el-form-item label="检验报告:">
			    <el-input v-model="d.jybg2"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>进口总代</p>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="企业代码:">
			    <el-input v-model="d.qydm2"></el-input>
			  </el-form-item>
			   <el-form-item label="总代凭号:">
			    <el-input v-model="d.zdph2"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>生产厂商</p>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="生产国家:">
			    <el-input v-model="d.scgj1"></el-input>
			  </el-form-item>
			   <el-form-item label="企业名称:">
			    <el-input v-model="d.qydm1"></el-input>
			  </el-form-item>
			   <el-form-item label="生产品牌:">
			    <el-input v-model="d.scxkzh1"></el-input>
			  </el-form-item>
			   <el-form-item label="类型:">
			    <el-input v-model="d.lx1"></el-input>
			  </el-form-item>
			   <el-form-item label="规格:">
			    <el-input v-model="d.gg1"></el-input>
			  </el-form-item>
			  <el-form-item label="储藏条件:">
			    <el-input v-model="d.cctj1"></el-input>
			  </el-form-item>
			  <el-form-item label="其他:">
			    <el-input v-model="d.qt1"></el-input>
			  </el-form-item>
			</el-form>
			<p class="t">
				<span class="hez">合格证:</span>
				<el-radio class="radio" v-model="d.radio1" label="0">通过</el-radio>
  				<el-radio class="radio" v-model="d.radio1" label="1">不通过</el-radio><br>
  				<span class="bq">标签:</span>
				<el-radio class="radio" v-model="d.radio2" label="0">通过</el-radio>
  				<el-radio class="radio" v-model="d.radio2" label="1">不通过</el-radio><br>
  				<span class="bz">包装:</span>
				<el-radio class="radio" v-model="d.radio3" label="0">通过</el-radio>
  				<el-radio class="radio" v-model="d.radio3" label="1">不通过</el-radio><br>
  				<span class="wx">文宣禁忌用词:</span>
				<el-radio class="radio" v-model="d.radio4" label="0">通过</el-radio>
  				<el-radio class="radio" v-model="d.radio4" label="1">不通过</el-radio><br>
			</p>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>凭证拍照</p>
			<span class="yy">备案注册:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic1"
			  :auto-upload="false">
			  <img v-if="d.imageUrl1" :src="d.imageUrl1" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">营业执照:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic2"
			  :auto-upload="false">
			  <img v-if="d.imageUrl2" :src="d.imageUrl2" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">许可证:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic3"
			  :auto-upload="false">
			  <img v-if="d.imageUrl3" :src="d.imageUrl3" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">检验报告:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic4"
			  :auto-upload="false">
			  <img v-if="d.imageUrl4" :src="d.imageUrl4" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">合格证:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic5"
			  :auto-upload="false">
			  <img v-if="d.imageUrl5" :src="d.imageUrl5" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">标签:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic6"
			  :auto-upload="false">
			  <img v-if="d.imageUrl6" :src="d.imageUrl6" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">包装:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic7"
			  :auto-upload="false">
			  <img v-if="d.imageUrl7" :src="d.imageUrl7" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">其他:</span>
			<el-upload
			  class="avatar-uploader up"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic8"
			  :auto-upload="false">
			  <img v-if="d.imageUrl8" :src="d.imageUrl8" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<el-form :label-position="labelPosition" label-width="95px">
			  <el-form-item label="检验结论:">
			    <el-input v-model="d.jyjl"></el-input>
			  </el-form-item>
			</el-form>
			<mt-button type="primary" class="pedit">提交</mt-button>
		  </mt-tab-container-item>
		</mt-tab-container>

	</div>
</template>

<script type="text/javascript">
	// import './AddProduct.scss'
	export default {
		data(){
			return {
				selected:'1',
				labelPosition:'right',
				a:{
					xkcyr1:'',
					xkcydate1:'',
					ANO1:'',
					lb1:'',
					ghqymc1:'',
					bapzh1:'',
					jybg1:'',
					qymc1:'',
					qydm1:'',
					scxkzh1:'',
					lx1:'',
					gg1:'',
					cctj1:'',
					qt1:'',
					radio1:'',
					radio2:'',
					radio3:'',
					radio4:'',
					jyjl:'',
					imageUrl1:'',
					imageUrl2:'',
					imageUrl3:'',
					imageUrl4:'',
					imageUrl5:'',
					imageUrl6:'',
					imageUrl7:'',
					imageUrl8:'',
				},
				b:{
					xkcyr1:'',
					xkcydate1:'',
					ANO1:'',
					lb1:'',
					ghqymc1:'',
					bapzh1:'',
					jybg1:'',
					bapzh2:'',
					jybg2:'',
					qydm2:'',
					zdph2:'',
					scgj1:'',
					qymc1:'',
					scpp1:'',
					lx1:'',
					gg1:'',
					cctj1:'',
					qt1:'',
					radio1:'',
					radio2:'',
					radio3:'',
					radio4:'',
					jyjl:'',
					imageUrl1:'',
					imageUrl2:'',
					imageUrl3:'',
					imageUrl4:'',
					imageUrl5:'',
					imageUrl6:'',
					imageUrl7:'',
					imageUrl8:'',
				},
				c:{
					xkcyr1:'',
					xkcydate1:'',
					ANO1:'',
					lb1:'',
					ghqymc1:'',
					zcpzh1:'',
					jybg1:'',
					qymc1:'',
					qydm1:'',
					scxkzh1:'',
					lx1:'',
					gg1:'',
					cctj1:'',
					qt1:'',
					radio1:'',
					radio2:'',
					radio3:'',
					radio4:'',
					jyjl:'',
					imageUrl1:'',
					imageUrl2:'',
					imageUrl3:'',
					imageUrl4:'',
					imageUrl5:'',
					imageUrl6:'',
					imageUrl7:'',
					imageUrl8:'',
				},
				d:{
					xkcyr1:'',
					xkcydate1:'',
					ANO1:'',
					lb1:'',
					ghqymc1:'',
					bapzh1:'',
					jybg1:'',
					bapzh2:'',
					jybg2:'',
					qydm2:'',
					zdph2:'',
					scgj1:'',
					qymc1:'',
					scpp1:'',
					lx1:'',
					gg1:'',
					cctj1:'',
					qt1:'',
					radio1:'',
					radio2:'',
					radio3:'',
					radio4:'',
					jyjl:'',
					imageUrl1:'',
					imageUrl2:'',
					imageUrl3:'',
					imageUrl4:'',
					imageUrl5:'',
					imageUrl6:'',
					imageUrl7:'',
					imageUrl8:'',
				},
			}
		},
		created(){
			this.xkcyr1=1;
			console.log(this.xkcyr1)
		},
		methods:{
			AddProduct(){
				if(this.choose !== this.choose1){
					let obj = {self_check_period:this.choose,id:this.id}
					this.$http.post(baseUrl+'/setSelfCheck',obj).then((res)=>{
		              	console.log(res)
		              	if(res.data.retCode === 0){
		              		this.$messagebox.alert("操作成功!");
		              	}else{
		              		this.$messagebox.alert(res.data.retMessage);
		              	}
			        },(err)=>{
			             this.$messagebox.alert('操作失败,请稍后再试!');
			        });
				}
			},
			goback(){
				this.$router.go(-1);
			},
			getpic1(file) {
		        this.a.imageUrl1 = URL.createObjectURL(file.raw);
		        this.a.file1 = file.raw;
		        this.c.imageUrl1 = URL.createObjectURL(file.raw);
		        this.c.file1 = file.raw;
		    },
		    getpic2(file) {
		        this.a.imageUrl2 = URL.createObjectURL(file.raw);
		        this.a.file2 = file.raw;
		    },
		    getpic3(file) {
		        this.a.imageUrl3 = URL.createObjectURL(file.raw);
		        this.a.file3 = file.raw;
		    },
		    getpic4(file) {
		        this.a.imageUrl4 = URL.createObjectURL(file.raw);
		        this.a.file4 = file.raw;
		    },
		    getpic5(file) {
		        this.a.imageUrl5 = URL.createObjectURL(file.raw);
		        this.a.file5 = file.raw;
		    },
		    getpic6(file) {
		        this.a.imageUrl6 = URL.createObjectURL(file.raw);
		        this.a.file6 = file.raw;
		    },
		    getpic7(file) {
		        this.a.imageUrl7 = URL.createObjectURL(file.raw);
		        this.a.file7 = file.raw;
		    },
		    getpic8(file) {
		        this.a.imageUrl8 = URL.createObjectURL(file.raw);
		        this.a.file8 = file.raw;
		    },
		},
		watch:{

		}
	
	}
</script>
<style lang="scss" src="./AddProduct.scss"></style>