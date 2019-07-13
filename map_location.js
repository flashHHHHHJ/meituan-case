	
window.onload = function(){
		// 百度地图API功能
	var map = new BMap.Map("map-canvas");
	var point = new BMap.Point(108.95384, 34.229471);
	map.centerAndZoom(point,15);
	// map.centerAndZoom(new BMap.Point(108.95384, 34.229471), 18);

	var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
	var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
	var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
	/*缩放控件type有四种类型:
	BMAP_NAVIGATION_CONTROL_LARGE：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/
	
	//添加控件和比例尺
		map.addControl(top_left_control);        
		map.addControl(top_left_navigation);     
		map.addControl(top_right_navigation);    

    //设置点的弹跳坐标--start--
	var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);               // 将标注添加到地图中
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    //设置点的弹跳坐标--end--

    //添加文字标签
    var opts = {
	  position : point,    // 指定文本标注所在的地理位置
	  offset   : new BMap.Size(-60, 0)    //设置文本偏移量
	}
	var label = new BMap.Label("欢迎使用百度地图，祝您用餐愉快~", opts);  // 创建文本标注对象
		label.setStyle({
			 color : "red",
			 fontSize : "14px",
			 height : "20px",
			 lineHeight : "20px",
			 fontFamily:"微软雅黑"
			
		 });
	map.addOverlay(label); 


	
}
	