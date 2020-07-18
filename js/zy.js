var httpRequest = new XMLHttpRequest();
var lb_id = document.getElementById("lb")
var xh = 0,
	mc, dx, lx, xz, xz1;
httpRequest.open('GET', 'lb.json', true);
httpRequest.send();
httpRequest.onreadystatechange = qq_fh;

function qq_fh() {
	if (httpRequest.readyState == 4 && httpRequest.status == 200) {
		var sj = httpRequest.responseText; //获取并接受返回数据
		sj = JSON.parse(sj); //字符串转成对象
		$("#jzz").remove();
		//循环输出到页面
		for (i = 0; i < sj.text.length; i++) {
			xh = "<th scope='row'>" + (i + 1) + "</th>";
			mc = "<td>" + sj.text[i].name_all + "</td>"
			dx = "<td>" + sj.text[i].size + "</td>"
			lx = "<td>" + sj.text[i].icon + "</td>";
			console.log(typeof sj.text[i].id)
			xz1 = "<a id='a_" + i + "' onclick='down(" + i + ")' name='" + sj.text[i].id + "'>点我下载</a>"
			xz = "<td class='xzcl'>" + xz1 + "</td>";
			lb_id.innerHTML += "<tr>" + xh + mc + dx + lx + xz + "</tr>";
			// lb_id.innerHTML+="<tr>";
			// lb_id.innerHTML+="<th scope='row'>"+(i+1)+"</th>";
			// lb_id.innerHTML+="<td>"+sj.text[i].name_all+"</td>";
			// lb_id.innerHTML+="<td>"+sj.text[i].size+"</td>";
			// lb_id.innerHTML+="<td>"+sj.text[i].icon+"</td>";
			// lb_id.innerHTML+="<td>"+sj.text[i].id+"</td>";
			// lb_id.innerHTML+="</tr>";
			// lb_id.innerHTML+="</tbody>";

		}

	}
};

function down(xh_id) {
	console.log(document.getElementById("a_" + xh_id).name);
	var ajax_zhilian = new XMLHttpRequest();
	ajax_zhilian.open('POST', 'http://api.cwsya.com/lanzou/index.php', true);
	ajax_zhilian.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax_zhilian.send("url=https://cws.lanzous.com/" + document.getElementById("a_" + xh_id).name);
	ajax_zhilian.onreadystatechange = function() {

		if (ajax_zhilian.readyState == 4 && ajax_zhilian.status == 200) {

			console.log(ajax_zhilian.responseText);


		}

	}

}
