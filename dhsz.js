/*
电话助手通杀 
[rewrite_local]
https://kkyun.com/api/(accounts|numbers|apps)/(user|start_task) url script-response-body https://raw.githubusercontent.com/xiaobai99hao/Rewrite/main/dhzs.js?token=GHSAT0AAAAAACTBWRB47BKJXQDTZVCJ5JOEZS2RVBQ
[mitm]
hostname = kkyun.com

*/
$done({
    body: $response.body.replace(/("vip_status"\s*:\s*)0/g, '$12')
		.replace(/("is_vip"\s*:\s*)false/g, '$1true')
    .replace(/("vip_name"\s*:\s*")[^"]*"/g, '$1永久VIP"')
		.replace(/("status"\s*:\s*)0/g, '$11')		
});
