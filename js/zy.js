var httpRequest = new XMLHttpRequest();
			var lb_id=document.getElementById("lb")
			var xh=0,mc,dx,lx,xz;
			httpRequest.open('GET', 'lb.json', true);
			httpRequest.send();
			httpRequest.onreadystatechange = qq_fh;

			function qq_fh() {
				if (httpRequest.readyState == 4 && httpRequest.status == 200) {
					var sj = httpRequest.responseText;	 //获取并接受返回数据
					sj=JSON.parse(sj);//字符串转成对象
					//循环输出到页面
					for(i=0;i<sj.text.length;i++){
						xh="<th scope='row'>"+(i+1)+"</th>";
						mc="<td>"+sj.text[i].name_all+"</td>"
						dx="<td>"+sj.text[i].size+"</td>"
						lx="<td>"+sj.text[i].icon+"</td>";
						xz="<td>"+sj.text[i].id+"</td>";
						lb_id.innerHTML+="<tr><a name='"+sj.text[i].id+"'>"+xh+mc+dx+lx+xz+"</a></tr>";
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