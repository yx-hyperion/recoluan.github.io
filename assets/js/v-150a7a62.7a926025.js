"use strict";(self.webpackChunkafternoon_grocery_store=self.webpackChunkafternoon_grocery_store||[]).push([[838],{262:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-150a7a62",path:"/blogs/other/2018/121201.html",title:"gitlab-CI 持续集成以及runner的配置简版",lang:"zh-CN",frontmatter:{title:"gitlab-CI 持续集成以及runner的配置简版",tags:["gitlab","runner"],categories:["other"],date:"2018-12-12T00:00:00.000Z"},excerpt:'<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>在我们完成项目开发后，提交到git，当监听提交后，自动进行编译，并进行项目的部署，是不是一想就很爽，所以下面引入我们的主角 —— gitlab-CI，<a href="https://fennay.github.io/gitlab-ci-cn/" target="_blank" rel="noopener noreferrer">中文文档<OutboundLink/></a>。</p>\n</div>',headers:[{level:2,title:"Gitlab CI",slug:"gitlab-ci",children:[]},{level:2,title:"Gitlab-Runner",slug:"gitlab-runner",children:[]},{level:2,title:"配置 gitlab-runner.yml",slug:"配置-gitlab-runner-yml",children:[]},{level:2,title:"其他",slug:"其他",children:[]}],git:{createdTime:159076981e4,updatedTime:159076981e4,contributors:[{name:"reco_luan",email:"recoluan@outlook.com",commits:1}]}}},7270:(n,s,a)=>{a.r(s),a.d(s,{default:()=>_});var e=a(6252);const l={class:"custom-container tip"},r=(0,e._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[(0,e._)("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,e._)("circle",{cx:"12",cy:"12",r:"9"}),(0,e._)("path",{d:"M12 8h.01"}),(0,e._)("path",{d:"M11 12h1v4h1"})])],-1),t=(0,e._)("p",{class:"custom-container-title"},"TIP",-1),p=(0,e.Uk)("在我们完成项目开发后，提交到git，当监听提交后，自动进行编译，并进行项目的部署，是不是一想就很爽，所以下面引入我们的主角 —— gitlab-CI，"),i={href:"https://fennay.github.io/gitlab-ci-cn/",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("中文文档"),o=(0,e.Uk)("。"),u=(0,e.uE)('<h2 id="gitlab-ci" tabindex="-1"><a class="header-anchor" href="#gitlab-ci" aria-hidden="true">#</a> Gitlab CI</h2><p>Gitlab-CI 是 GitLab Continuous Integration（Gitlab持续集成）的简称。 从Gitlab的8.0版本开始，gitlab就全面集成了Gitlab-CI,并且对所有项目默认开启。 只要在项目仓库的根目录添加.gitlab-ci.yml文件，并且配置了Runner（运行器），那么每一次合并请求（MR）或者push都会触发CI pipeline。</p><h2 id="gitlab-runner" tabindex="-1"><a class="header-anchor" href="#gitlab-runner" aria-hidden="true">#</a> Gitlab-Runner</h2><h4 id="安装gitlab-ci-multi-runner-linux" tabindex="-1"><a class="header-anchor" href="#安装gitlab-ci-multi-runner-linux" aria-hidden="true">#</a> 安装gitlab-ci-multi-runner（linux）</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 添加yum源</span>\n<span class="token function">curl</span> -L https://packages.gitlab.com/install/repositories/runner/gitlab-ci-multi-runner/script.rpm.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span>\n\n<span class="token comment"># 安装</span>\nyum <span class="token function">install</span> gitlab-ci-multi-runner\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="使用-gitlab-ci-multi-runner-注册-specific-runners" tabindex="-1"><a class="header-anchor" href="#使用-gitlab-ci-multi-runner-注册-specific-runners" aria-hidden="true">#</a> 使用 gitlab-ci-multi-runner 注册 Specific Runners</h4><p><img src="https://upload-images.jianshu.io/upload_images/4660406-23e31a052864a7a0.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="runners.jpg"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ gitlab-ci-multi-runner register\nRunning <span class="token keyword">in</span> system-mode.\n\nPlease enter the gitlab-ci coordinator URL <span class="token punctuation">(</span>e.g. https://gitlab.com/<span class="token punctuation">)</span>:\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span> 你的URL\n\nPlease enter the gitlab-ci token <span class="token keyword">for</span> this runner:\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span> 你的Token\n\nPlease enter the gitlab-ci description <span class="token keyword">for</span> this runner:\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span> 你对该runner的描述\n\nPlease enter the gitlab-ci tags <span class="token keyword">for</span> this runner <span class="token punctuation">(</span>comma separated<span class="token punctuation">)</span>:\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span> 该runner的标签\n\nWhether to run untagged builds <span class="token punctuation">[</span>true/false<span class="token punctuation">]</span>:\n<span class="token punctuation">[</span>false<span class="token punctuation">]</span>: <span class="token boolean">true</span>\n\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span> 是否运行没有标记的项目（后期可以改）\n\nWhether to lock Runner to current project <span class="token punctuation">[</span>true/false<span class="token punctuation">]</span>:\n<span class="token punctuation">[</span>false<span class="token punctuation">]</span>:\n\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span> 是否锁定只运行当前项目（后期可以改）\n\nRegistering runner<span class="token punctuation">..</span>. succeeded                     <span class="token assign-left variable">runner</span><span class="token operator">=</span>9e48baqx\n\nPlease enter the executor: parallels, docker+machine, ssh, virtualbox, docker-ssh+machine, kubernetes, docker, docker-ssh, shell:\n\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span> 选择runner的类型（根据你的需求选择，我选择的shell，我的项目是node项目）\n\nRunner registered successfully. Feel <span class="token function">free</span> to start it, but <span class="token keyword">if</span> it&#39;s running already the config should be automatically reloaded<span class="token operator">!</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>',8),b=(0,e._)("div",{class:"custom-container warning"},[(0,e._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[(0,e._)("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,e._)("circle",{cx:"12",cy:"12",r:"9"}),(0,e._)("path",{d:"M12 8v4"}),(0,e._)("path",{d:"M12 16h.01"})])]),(0,e._)("p",{class:"custom-container-title"},"WARNING"),(0,e._)("ol",null,[(0,e._)("li",null,[(0,e.Uk)("首先你的项目中的 "),(0,e._)("code",null,"getlab-runner.yml"),(0,e.Uk)(" 文件中的命令需要的环境，你的runner所在的服务器是必须要搭好的，必须你需要执行 "),(0,e._)("code",null,"npm install"),(0,e.Uk)(" 和 "),(0,e._)("code",null,"npm run build"),(0,e.Uk)(" ，那你的服务器必须要有node环境；")]),(0,e._)("li",null,"runner的类型比较重要，你必须要清楚你需要一个什么类型的runner。比如，开始我是需要一个能够运行node项目的runner，但是网上的很多教程统一都是都选择docker，这个时候你电脑上必须要安装了docker才可以，因为这相当于在docker里面又安装了一个docker（docker in docker），所以对于我的需求来说，我选择shell就可以了；"),(0,e._)("li",null,[(0,e.Uk)("通过Gitlab中某个项目的 "),(0,e._)("code",null,"Settings"),(0,e.Uk)(" 下的 "),(0,e._)("code",null,"CI/CD Pipelines"),(0,e.Uk)(" 按钮进入的页面中得到的URL和Token所注册的runner只服务于本项目，当你在其他项目的当前页面时，可以选择让这个runner为当前项目开启服务。")])])],-1),m=(0,e.uE)('<h2 id="配置-gitlab-runner-yml" tabindex="-1"><a class="header-anchor" href="#配置-gitlab-runner-yml" aria-hidden="true">#</a> 配置 gitlab-runner.yml</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mage: node:9.11.1\n\npages:\n cache:\n   paths:\n   - node_modules/\n\n script:\n - cnpm <span class="token function">install</span>\n - <span class="token function">npm</span> run build\n - <span class="token function">sudo</span> <span class="token function">rm</span> -rf /data/ftp/http/files/scfAdminDoc\n - <span class="token function">sudo</span> <span class="token function">mv</span> ./scfAdminDoc /data/ftp/http/files/\n artifacts:\n   paths:\n   - public\n only:\n - master\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>',2),d=(0,e.Uk)("具体配置见"),g={href:"https://fennay.github.io/gitlab-ci-cn/gitlab-ci-yaml.html",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Uk)("文档"),k=(0,e.uE)('<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h4 id="代码推送到gitlab上之后-一直是pending状态-要等很久才pick到一个runner来执行" tabindex="-1"><a class="header-anchor" href="#代码推送到gitlab上之后-一直是pending状态-要等很久才pick到一个runner来执行" aria-hidden="true">#</a> 代码推送到gitlab上之后，一直是pending状态，要等很久才pick到一个runner来执行</h4><p>这个现象一般发生在本机注册了多个runner，之前的都删除了，只留下一个，但是当我们在gitlab管理平台移除了某个runner的时候，并没有完全删除记录，当执行的 <code>gitlab-ci-multi-runner list</code> 的时候你会发现它仍然还在，如果需要彻底删除它，还应该这样做：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/gitlab-runner\n<span class="token function">ls</span>\n\n<span class="token comment"># 你会看到config.toml文件，打开它并删除已有的那些runner记录</span>\n<span class="token function">vim</span> config.toml\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="配置node环境" tabindex="-1"><a class="header-anchor" href="#配置node环境" aria-hidden="true">#</a> 配置node环境</h4><ol><li>下载node-v9.11.1-linux-x64.tar.xz文件</li><li>例如放在 <code>/home</code> 文件夹<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 进入所在目录，解压</span>\n<span class="token function">tar</span> -xvf node-v9.11.1-linux-x64.tar.xz\n\n<span class="token comment"># 重命名文件夹</span>\n<span class="token function">mv</span> node-v9.11.1-linux-x64 nodejs\n\n<span class="token comment"># 建立软链接，配置全局环境变量（源路径和目标路径为相对路径）</span>\n<span class="token function">ln</span> -s /home/nodejs/bin/npm /usr/local/bin/\n<span class="token function">ln</span> -s /home/nodejs/bin/node /usr/local/bin/\n\n<span class="token comment"># 检查是否配置成功</span>\nnode -v\n<span class="token function">npm</span> -v\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li></ol><h4 id="scp上上传" tabindex="-1"><a class="header-anchor" href="#scp上上传" aria-hidden="true">#</a> scp上上传</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 普通</span>\n<span class="token function">scp</span> ./public/* root@192.168.0.226:/data/ftp/http/files/\n<span class="token function">scp</span> 源路径/源文件 用户名<span class="token punctuation">(</span>root<span class="token punctuation">)</span>@服务器IP:目标路径\n\n\n<span class="token comment"># 免密码</span>\nyum <span class="token function">install</span> sshpass\nsshpass -p <span class="token number">111111</span> <span class="token function">scp</span> ./public/* root@192.168.0.226:/data/ftp/http/files/\nsshpass -p 密码 <span class="token function">scp</span> 源路径/源文件 用户名<span class="token punctuation">(</span>root<span class="token punctuation">)</span>@服务器IP:目标路径\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>如果是下载，调换顺序</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> root@192.168.0.226:/data/ftp/http/files/ ./public/*\n<span class="token function">scp</span> 用户名<span class="token punctuation">(</span>root<span class="token punctuation">)</span>@服务器IP:目标路径 源路径/源文件\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',10),f=(0,e.Uk)("个人博客："),v={href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"},x=(0,e._)("strong",null,"午后南杂",-1),w={},_=(0,a(3744).Z)(w,[["render",function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",l,[r,t,(0,e._)("p",null,[p,(0,e._)("a",i,[c,(0,e.Wm)(a)]),o])]),u,b,m,(0,e._)("p",null,[d,(0,e._)("a",g,[h,(0,e.Wm)(a)])]),k,(0,e._)("p",null,[f,(0,e._)("a",v,[x,(0,e.Wm)(a)])])],64)}]])}}]);