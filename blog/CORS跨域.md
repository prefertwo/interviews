#### 同源策略简介
浏览器的同源策略是一个重要的安全策略，不同源的客户端在没有授权的情况下，不能够访问对方的资源，它用于限制一个origin的文档或者它加载的脚本如何能与另一个源的资源进行交互。它能帮助阻隔恶意文档，减少可能被攻击的媒介。


#### 同源的定义
如果两个 URL 的 protocol、port (如果有指定的话)和 host 都相同的话，则这两个 URL 是同源。


#### CORS 全称 Cross-Origin Resource Sharing，跨源资源共享，是跨域的解决方案之一
CORS 跨域资源共享 Cross-origin resource sharing

整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。

因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。
CORS跨域前端不用进行设置，后端设置。


#### JSONP跨域
需要前端和后端同时设置


#### 代理跨域
比如前端开发的 proxy 配置，生产环境不支持 proxy 配置
生产环境则是配置 nginx，后端不用操作。


#### 参考资料

MDN：https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy

CORS：https://segmentfault.com/a/1190000009520221

前端跨域解决方案：https://segmentfault.com/a/1190000022268996
