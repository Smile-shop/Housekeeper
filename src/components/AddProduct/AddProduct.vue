<template>
	<div class="AddProduct_container">
		<p class="AddProduct_text">
			<img src="../../assets/imgs/arrow (3).png" class="AddProductback" @click="goback">
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
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="产品名称:">
			    <el-input v-model="a.cpmc"></el-input>
			  </el-form-item>
			  <el-form-item label="企业类别:">
			    <el-input v-model="lb1" :disabled="true"></el-input>
			  </el-form-item>
			  <el-form-item label="供货企业名称:">
			    <el-input v-model="ghqymc1" :disabled="true"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>国产非特备案凭证</p>
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="备案凭证号:">
			    <el-input v-model="a.bapzh1"></el-input>
			  </el-form-item>
			  
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>生产厂商</p>
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="企业名称:">
			    <el-input v-model="a.qymc1"></el-input>
			  </el-form-item>
			   <el-form-item label="企业代码:">
			    <el-input v-model="a.qydm1"></el-input>
			  </el-form-item>
			   <el-form-item label="生产许可证号:">
			    <el-input v-model="a.scxkzh1"></el-input>
			  </el-form-item>
			  <div class="bac"></div>
			  <p class="pz"><span class="el-icon-minus"></span>产品信息</p>
			  <el-form-item label="类型:">
				  <el-select v-model="a.lx1" placeholder="请选择产品类型">
				      <el-option label="粉状" value="粉状" ></el-option>
				      <el-option label="液体" value="液体" ></el-option>
				      <el-option label="固态" value="固态" ></el-option>
				  </el-select>
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
			<span class="yy1">生产许可证:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic2"
			  :auto-upload="false">
			  <img v-if="a.imageUrl2" :src="a.imageUrl2" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">卫生许可证:</span>
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
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="检验结论:">
			    <el-input v-model="a.jyjl"></el-input>
			  </el-form-item>
			</el-form>
		    <mt-button type="primary" class="pedit" @click="guochan">提交</mt-button>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <p class="title">供货企业合规信息登记表B</p>
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			   <el-form-item label="产品名称:">
			    <el-input v-model="b.cpmc"></el-input>
			  </el-form-item>
			  <el-form-item label="企业类别:">
			    <el-input v-model="lb1" :disabled="true"></el-input>
			  </el-form-item>
			  <el-form-item label="供货企业名称:">
			    <el-input v-model="ghqymc1" :disabled="true"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>进口非特备案凭证</p>
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="备案凭证号:">
			    <el-input v-model="b.zcpzh1"></el-input>
			  </el-form-item>
			   
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>在华申报单位</p>
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="备案凭证号:">
			    <el-input v-model="b.zcpzh2"></el-input>
			  </el-form-item>
			  
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>进口总代</p>
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="企业代码:">
			    <el-input v-model="b.qydm2"></el-input>
			  </el-form-item>
			   <el-form-item label="总代凭证号:">
			    <el-input v-model="b.zdph2"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>生产厂商</p>
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="生产国家:">
			    <el-input v-model="b.scgj1"></el-input>
			  </el-form-item>
			   <el-form-item label="企业名称:">
			    <el-input v-model="b.qymc1"></el-input>
			  </el-form-item>
			   <el-form-item label="生产品牌:">
			    <el-input v-model="b.scpp1"></el-input>
			  </el-form-item>
			  <div class="bac"></div>
			  <p class="pz"><span class="el-icon-minus"></span>产品信息</p>
			   <el-form-item label="类型:">
			     <el-select v-model="b.lx1" placeholder="请选择产品类型">
				      <el-option label="粉状" value="粉状" ></el-option>
				      <el-option label="液体" value="液体" ></el-option>
				      <el-option label="固态" value="固态" ></el-option>
				  </el-select>
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
			<span class="yy1">生产许可证:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic2"
			  :auto-upload="false">
			  <img v-if="b.imageUrl2" :src="b.imageUrl2" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">卫生许可证:</span>
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
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="检验结论:">
			    <el-input v-model="b.jyjl"></el-input>
			  </el-form-item>
			</el-form>
		    <mt-button type="primary" class="pedit" @click="jinkou">提交</mt-button>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <p class="title">供货企业合规信息登记表C</p>
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="产品名称:">
			    <el-input v-model="c.cpmc"></el-input>
			  </el-form-item>
			  <el-form-item label="企业类别:">
			    <el-input v-model="lb1"  :disabled="true"></el-input>
			  </el-form-item>
			  <el-form-item label="供货企业名称:">
			    <el-input v-model="ghqymc1"  :disabled="true"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>国产特殊许可批件</p>
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="注册凭证号:">
			    <el-input v-model="c.zcpzh1"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>生产厂商</p>
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="企业名称:">
			    <el-input v-model="c.qymc1"></el-input>
			  </el-form-item>
			   <el-form-item label="企业代码:">
			    <el-input v-model="c.qydm1"></el-input>
			  </el-form-item>
			   <el-form-item label="生产许可证号:">
			    <el-input v-model="c.scxkzh1"></el-input>
			  </el-form-item>
			  <div class="bac"></div>
			  <p class="pz"><span class="el-icon-minus"></span>产品信息</p>
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
			<span class="yy1">生产许可证:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic2"
			  :auto-upload="false">
			  <img v-if="c.imageUrl2" :src="c.imageUrl2" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">卫生许可证:</span>
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
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="检验结论:">
			    <el-input v-model="c.jyjl"></el-input>
			  </el-form-item>
			</el-form>
		    <mt-button type="primary" class="pedit" @click="guochanteshu">提交</mt-button>
		  </mt-tab-container-item>
		   <mt-tab-container-item id="4">
		    <p class="title">供货企业合规信息登记表D</p>
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="产品名称:">
			    <el-input v-model="d.cpmc"></el-input>
			  </el-form-item>
			  <el-form-item label="企业类别:">
			    <el-input v-model="lb1"  :disabled="true"></el-input>
			  </el-form-item>
			  <el-form-item label="供货企业名称:">
			    <el-input v-model="ghqymc1"  :disabled="true"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>进口特殊许可批件</p>
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="备案凭证号:">
			    <el-input v-model="d.zcpzh1"></el-input>
			  </el-form-item>
			  
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>在华申报单位</p>
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="备案凭证号:">
			    <el-input v-model="d.zcpzh2"></el-input>
			  </el-form-item>
			   
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>进口总代</p>
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="企业代码:">
			    <el-input v-model="d.qydm2"></el-input>
			  </el-form-item>
			   <el-form-item label="总代凭证号:">
			    <el-input v-model="d.zdph2"></el-input>
			  </el-form-item>
			</el-form>
			<div class="bac"></div>
			<p class="pz"><span class="el-icon-minus"></span>生产厂商</p>
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="生产国家:">
			    <el-input v-model="d.scgj1"></el-input>
			  </el-form-item>
			   <el-form-item label="企业名称:">
			    <el-input v-model="d.qydm1"></el-input>
			  </el-form-item>
			   <el-form-item label="生产品牌:">
			    <el-input v-model="d.scxkzh1"></el-input>
			  </el-form-item>
			  <div class="bac"></div>
			  <p class="pz"><span class="el-icon-minus"></span>产品信息</p>
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
			<span class="yy1">生产许可证:</span>
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-change="getpic2"
			  :auto-upload="false">
			  <img v-if="d.imageUrl2" :src="d.imageUrl2" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<span class="yy1">卫生许可证:</span>
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
			<el-form :label-position="labelPosition" label-width="1.688889rem">
			  <el-form-item label="检验结论:">
			    <el-input v-model="d.jyjl"></el-input>
			  </el-form-item>
			</el-form>
			<mt-button type="primary" class="pedit" @click="jinkouteshu">提交</mt-button>
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
				id:'',
				labelPosition:'right',
				lb1:'',
				ghqymc1:'',
				a:{
					cpmc:'',bapzh1:'',jybg1:'',qymc1:'',qydm1:'',scxkzh1:'',lx1:'',gg1:'',cctj1:'',qt1:'',radio1:'',radio2:'',radio3:'',radio4:'',jyjl:'',file1:'',file2:'',file3:'',file4:'',file5:'',file6:'',file7:'',file8:'',file9:'',imageUrl1:'',imageUrl2:'',imageUrl3:'',imageUrl4:'',imageUrl5:'',imageUrl6:'',imageUrl7:'',imageUrl8:'',
				},
				b:{
					cpmc:'',bapzh1:'',bapzh2:'',jybg2:'',qydm2:'',zdph2:'',scgj1:'',qymc1:'',scpp1:'',lx1:'',gg1:'',cctj1:'',qt1:'',radio1:'',radio2:'',radio3:'',radio4:'',jyjl:'',file1:'',file2:'',file3:'',file4:'',file5:'',file6:'',file7:'',file8:'',file9:'',imageUrl1:'',imageUrl2:'',imageUrl3:'',imageUrl4:'',imageUrl5:'',imageUrl6:'',imageUrl7:'',imageUrl8:'',
				},
				c:{
					cpmc:'',zcpzh1:'',jybg1:'',qymc1:'',qydm1:'',scxkzh1:'',lx1:'',gg1:'',cctj1:'',qt1:'',radio1:'',radio2:'',radio3:'',radio4:'',jyjl:'',file1:'',file2:'',file3:'',file4:'',file5:'',file6:'',file7:'',file8:'',file9:'',imageUrl1:'',imageUrl2:'',imageUrl3:'',imageUrl4:'',imageUrl5:'',imageUrl6:'',imageUrl7:'',imageUrl8:'',
				},
				d:{cpmc:'',bapzh1:'',jybg1:'',bapzh2:'',jybg2:'',qydm2:'',zdph2:'',scgj1:'',qymc1:'',scpp1:'',lx1:'',gg1:'',cctj1:'',qt1:'',radio1:'',radio2:'',radio3:'',radio4:'',jyjl:'',file1:'',file2:'',file3:'',file4:'',file5:'',file6:'',file7:'',file8:'',file9:'',imageUrl1:'',imageUrl2:'',imageUrl3:'',imageUrl4:'',imageUrl5:'',imageUrl6:'',imageUrl7:'',imageUrl8:'',
				},
			}
		},
		created(){
			let aa = JSON.parse(sessionStorage.getItem('aaa'));
			this.ghqymc1 = aa[0].enterprise_name;
			this.id = aa[0].id;
			console.log(this.id)
			if(aa[0].enterprise_type == 1){
				this.lb1 = "生产企业";
			}else if(aa[0].enterprise_type == 2){
				this.lb1 = "经营企业";
			}
		},
		methods:{
			jinkou(){
			    let formData = new FormData();
			    formData.append('enterprise_id', this.id);
	            formData.append('product_type', this.selected);
	            formData.append('product_name', this.b.cpmc);
	            formData.append('apply_sn', this.b.bapzh1);
	            formData.append('declare_scid', this.b.bapzh2);
	            formData.append('manufacturer_scid', this.b.qydm2);
	            formData.append('agent_license', this.b.zdph2);
	            formData.append('produce_country', this.b.scgj1);
	            formData.append('manufacturer', this.b.qymc1);
	            formData.append('brand', this.b.scpp1);
	            formData.append('product_form', this.b.lx1);
	            formData.append('specification', this.b.gg1);
	            formData.append('storage_spec', this.b.cctj1);
	            formData.append('other_spec', this.b.qt1);
	            formData.append('QC_OK', this.b.radio1);
	            formData.append('label_OK', this.b.radio2);
	            formData.append('package_OK', this.b.radio3);
	            formData.append('advertise_OK', this.b.radio4);
	            formData.append('results', this.b.jyjl);
	            formData.append('apply_img', this.b.file1);
	            formData.append('cosmetic_permits', this.b.file2);
	            formData.append('health_permits', this.b.file3);
	            formData.append('check_report', this.b.file4);
	            formData.append('qc_img', this.b.file5);
	            formData.append('label_img', this.b.file6);
	            formData.append('pkg_img', this.b.file7);
	            formData.append('other_img', this.b.file8);

	            let config = {
	              headers: {
	                'Content-Type': 'multipart/form-data'
	              }
	            }
	            this.$http.post(baseUrl+'/addProduct',formData,config).then((res)=>{
		              	console.log(res)
		              	if(res.data.retCode === 0){
		              		this.$messagebox.alert('操作成功！点击确定按钮跳回主页。').then(action => {
		              			this.$router.push({name:'index'})
 							});
		              	}else{
		              		this.$messagebox.alert(res.data.retMessage);
		              	}
			          },(err)=>{
			              console.log(err)
			          });
			},
			jinkouteshu(){
			    let formData = new FormData();
			    formData.append('enterprise_id', this.id);
	            formData.append('product_type', this.selected);
	            formData.append('product_name', this.d.cpmc);
	            formData.append('apply_sn', this.d.bapzh1);
	            formData.append('declare_scid', this.d.bapzh2);
	            formData.append('manufacturer_scid', this.d.qydm2);
	            formData.append('agent_license', this.d.zdph2);
	            formData.append('produce_country', this.d.scgj1);
	            formData.append('manufacturer', this.d.qymc1);
	            formData.append('brand', this.d.scpp1);
	            formData.append('product_form', this.d.lx1);
	            formData.append('specification', this.d.gg1);
	            formData.append('storage_spec', this.d.cctj1);
	            formData.append('other_spec', this.d.qt1);
	            formData.append('QC_OK', this.d.radio1);
	            formData.append('label_OK', this.d.radio2);
	            formData.append('package_OK', this.d.radio3);
	            formData.append('advertise_OK', this.d.radio4);
	            formData.append('results', this.d.jyjl);
	            formData.append('apply_img', this.d.file1);
	            formData.append('cosmetic_permits', this.d.file2);
	            formData.append('health_permits', this.d.file3);
	            formData.append('check_report', this.d.file4);
	            formData.append('qc_img', this.d.file5);
	            formData.append('label_img', this.d.file6);
	            formData.append('pkg_img', this.d.file7);
	            formData.append('other_img', this.d.file8);

	            let config = {
	              headers: {
	                'Content-Type': 'multipart/form-data'
	              }
	            }
	            this.$http.post(baseUrl+'/addProduct',formData,config).then((res)=>{
		              	console.log(res)
		              	if(res.data.retCode === 0){
		              		this.$messagebox.alert('操作成功！点击确定按钮跳回主页。').then(action => {
		              			this.$router.push({name:'index'})
 							});
		              	}else{
		              		this.$messagebox.alert(res.data.retMessage);
		              	}
			          },(err)=>{
			              console.log(err)
			          });
			},
			guochan(){
			    let formData = new FormData();
			    formData.append('enterprise_id', this.id);
	            formData.append('product_type', this.selected);
	            formData.append('product_name', this.a.cpmc);
	            formData.append('apply_sn', this.a.bapzh1);
	            formData.append('manufacturer', this.a.qymc1);
	            formData.append('manufacturer_scid', this.a.qydm1);
	            formData.append('produce_permit', this.a.scxkzh1);
	            formData.append('product_form', this.a.lx1);
	            formData.append('specification', this.a.gg1);
	            formData.append('storage_spec', this.a.cctj1);
	            formData.append('other_spec', this.a.qt1);
	            formData.append('QC_OK', this.a.radio1);
	            formData.append('label_OK', this.a.radio2);
	            formData.append('package_OK', this.a.radio3);
	            formData.append('advertise_OK', this.a.radio4);
	            formData.append('results', this.a.jyjl);
	            formData.append('apply_img', this.a.file1);
	            formData.append('cosmetic_permits', this.a.file2);
	            formData.append('health_permits', this.a.file3);
	            formData.append('check_report', this.a.file4);
	            formData.append('qc_img', this.a.file5);
	            formData.append('label_img', this.a.file6);
	            formData.append('pkg_img', this.a.file7);
	            formData.append('other_img', this.a.file8);

	            let config = {
	              headers: {
	                'Content-Type': 'multipart/form-data'
	              }
	            }
	            this.$http.post(baseUrl+'/addProduct',formData,config).then((res)=>{
		              	console.log(res)
		              	if(res.data.retCode === 0){
		              		this.$messagebox.alert('操作成功！点击确定按钮跳回主页。').then(action => {
		              			this.$router.push({name:'index'})
 							});
		              	}else{
		              		this.$messagebox.alert(res.data.retMessage);
		              	}
			          },(err)=>{
			              console.log(err)
			          });				
			},
			guochanteshu(){
			    let formData = new FormData();
			    formData.append('enterprise_id', this.id);
	            formData.append('product_type', this.selected);
	            formData.append('product_name', this.c.cpmc);
	            formData.append('apply_sn', this.c.bapzh1);
	            formData.append('manufacturer', this.c.qymc1);
	            formData.append('manufacturer_scid', this.c.qydm1);
	            formData.append('produce_permit', this.c.scxkzh1);
	            formData.append('product_form', this.c.lx1);
	            formData.append('specification', this.c.gg1);
	            formData.append('storage_spec', this.c.cctj1);
	            formData.append('other_spec', this.c.qt1);
	            formData.append('QC_OK', this.c.radio1);
	            formData.append('label_OK', this.c.radio2);
	            formData.append('package_OK', this.c.radio3);
	            formData.append('advertise_OK', this.c.radio4);
	            formData.append('results', this.c.jyjl);
	            formData.append('apply_img', this.c.file1);
	            formData.append('cosmetic_permits', this.c.file2);
	            formData.append('health_permits', this.c.file3);
	            formData.append('check_report', this.c.file4);
	            formData.append('qc_img', this.c.file5);
	            formData.append('label_img', this.c.file6);
	            formData.append('pkg_img', this.c.file7);
	            formData.append('other_img', this.c.file8);

	            let config = {
	              headers: {
	                'Content-Type': 'multipart/form-data'
	              }
	            }
	            this.$http.post(baseUrl+'/addProduct',formData,config).then((res)=>{
		              	console.log(res)
		              	if(res.data.retCode === 0){
		              		this.$messagebox.alert('操作成功！点击确定按钮跳回主页。').then(action => {
		              			this.$router.push({name:'index'})
 							});
		              	}else{
		              		this.$messagebox.alert(res.data.retMessage);
		              	}
			          },(err)=>{
			              console.log(err)
			          });
			},
			goback(){
				this.$router.go(-1);
			},
			getpic1(file) {
				if(this.selected == 1){
			        this.a.imageUrl1 = URL.createObjectURL(file.raw);
			        this.a.file1 = file.raw;
				}else if(this.selected == 2){
					this.b.imageUrl1 = URL.createObjectURL(file.raw);
			        this.b.file1 = file.raw;
				}else if(this.selected == 3){
			        this.c.imageUrl1 = URL.createObjectURL(file.raw);
			        this.c.file1 = file.raw;
				}else if(this.selected == 4){
			        this.d.imageUrl1 = URL.createObjectURL(file.raw);
			        this.d.file1 = file.raw;
				}
		    },
		    getpic2(file) {
		       if(this.selected == 1){
			        this.a.imageUrl2 = URL.createObjectURL(file.raw);
			        this.a.file2 = file.raw;
				}else if(this.selected == 2){
					this.b.imageUrl2 = URL.createObjectURL(file.raw);
			        this.b.file2 = file.raw;
				}else if(this.selected == 3){
			        this.c.imageUrl2 = URL.createObjectURL(file.raw);
			        this.c.file2 = file.raw;
				}else if(this.selected == 4){
			        this.d.imageUrl2 = URL.createObjectURL(file.raw);
			        this.d.file2 = file.raw;
				}
		    },
		    getpic3(file) {
		        if(this.selected == 1){
			        this.a.imageUrl3 = URL.createObjectURL(file.raw);
			        this.a.file3 = file.raw;
				}else if(this.selected == 2){
					this.b.imageUrl3 = URL.createObjectURL(file.raw);
			        this.b.file3 = file.raw;
				}else if(this.selected == 3){
			        this.c.imageUrl3 = URL.createObjectURL(file.raw);
			        this.c.file3 = file.raw;
				}else if(this.selected == 4){
			        this.d.imageUrl3 = URL.createObjectURL(file.raw);
			        this.d.file3 = file.raw;
				}
		    },
		    getpic4(file) {
		        if(this.selected == 1){
			        this.a.imageUrl4 = URL.createObjectURL(file.raw);
			        this.a.file4 = file.raw;
				}else if(this.selected == 2){
					this.b.imageUrl4 = URL.createObjectURL(file.raw);
			        this.b.file4 = file.raw;
				}else if(this.selected == 3){
			        this.c.imageUrl4 = URL.createObjectURL(file.raw);
			        this.c.file4 = file.raw;
				}else if(this.selected == 4){
			        this.d.imageUrl4 = URL.createObjectURL(file.raw);
			        this.d.file4 = file.raw;
				}
		    },
		    getpic5(file) {
		        if(this.selected == 1){
			        this.a.imageUrl5 = URL.createObjectURL(file.raw);
			        this.a.file5 = file.raw;
				}else if(this.selected == 2){
					this.b.imageUrl5 = URL.createObjectURL(file.raw);
			        this.b.file5 = file.raw;
				}else if(this.selected == 3){
			        this.c.imageUrl5 = URL.createObjectURL(file.raw);
			        this.c.file5 = file.raw;
				}else if(this.selected == 4){
			        this.d.imageUrl5 = URL.createObjectURL(file.raw);
			        this.d.file5 = file.raw;
				}
		    },
		    getpic6(file) {
		        if(this.selected == 1){
			        this.a.imageUrl6 = URL.createObjectURL(file.raw);
			        this.a.file6 = file.raw;
				}else if(this.selected == 2){
					this.b.imageUrl6 = URL.createObjectURL(file.raw);
			        this.b.file6 = file.raw;
				}else if(this.selected == 3){
			        this.c.imageUrl6 = URL.createObjectURL(file.raw);
			        this.c.file6 = file.raw;
				}else if(this.selected == 4){
			        this.d.imageUrl6 = URL.createObjectURL(file.raw);
			        this.d.file6 = file.raw;
				}
		    },
		    getpic7(file) {
		        if(this.selected == 1){
			        this.a.imageUrl7 = URL.createObjectURL(file.raw);
			        this.a.file7 = file.raw;
				}else if(this.selected == 2){
					this.b.imageUrl7 = URL.createObjectURL(file.raw);
			        this.b.file7 = file.raw;
				}else if(this.selected == 3){
			        this.c.imageUrl7 = URL.createObjectURL(file.raw);
			        this.c.file7 = file.raw;
				}else if(this.selected == 4){
			        this.d.imageUrl7 = URL.createObjectURL(file.raw);
			        this.d.file7 = file.raw;
				}
		    },
		    getpic8(file) {
		        if(this.selected == 1){
			        this.a.imageUrl8 = URL.createObjectURL(file.raw);
			        this.a.file8 = file.raw;
				}else if(this.selected == 2){
					this.b.imageUrl8 = URL.createObjectURL(file.raw);
			        this.b.file8 = file.raw;
				}else if(this.selected == 3){
			        this.c.imageUrl8 = URL.createObjectURL(file.raw);
			        this.c.file8 = file.raw;
				}else if(this.selected == 4){
			        this.d.imageUrl8 = URL.createObjectURL(file.raw);
			        this.d.file8 = file.raw;
				}
		    },
		},
		watch:{

		}
	
	}
</script>
<style lang="scss" src="./AddProduct.scss"></style>