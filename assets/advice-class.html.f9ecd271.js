import{_ as e,o as l,c as o,a as s,b as n,d as r,e as a,r as i}from"./app.bd2aade7.js";const c={},p=r(`<h1 id="\u8868\u8FBE\u5F0F\u6838\u5FC3\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u8868\u8FBE\u5F0F\u6838\u5FC3\u53D8\u91CF" aria-hidden="true">#</a> \u8868\u8FBE\u5F0F\u6838\u5FC3\u53D8\u91CF</h1><p>\u65E0\u8BBA\u662F\u5339\u914D\u8868\u8FBE\u5F0F\u4E5F\u597D\u3001\u89C2\u5BDF\u8868\u8FBE\u5F0F\u4E5F\u7F62\uFF0C\u4ED6\u4EEC\u6838\u5FC3\u5224\u65AD\u53D8\u91CF\u90FD\u662F\u56F4\u7ED5\u7740\u4E00\u4E2A Arthas \u4E2D\u7684\u901A\u7528\u901A\u77E5\u5BF9\u8C61 <code>Advice</code> \u8FDB\u884C\u3002</p><p>\u5B83\u7684\u7B80\u7565\u4EE3\u7801\u7ED3\u6784\u5982\u4E0B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Advice</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ClassLoader</span> loader<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ArthasMethod</span> method<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> target<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> params<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> returnObj<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Throwable</span> throwExp<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> isBefore<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> isThrow<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> isReturn<span class="token punctuation">;</span>

    <span class="token comment">// getter/setter</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u5217\u4E00\u4E2A\u8868\u683C\u6765\u8BF4\u660E\u4E0D\u540C\u53D8\u91CF\u7684\u542B\u4E49</p><table><thead><tr><th style="text-align:right;">\u53D8\u91CF\u540D</th><th style="text-align:left;">\u53D8\u91CF\u89E3\u91CA</th></tr></thead><tbody><tr><td style="text-align:right;">loader</td><td style="text-align:left;">\u672C\u6B21\u8C03\u7528\u7C7B\u6240\u5728\u7684 ClassLoader</td></tr><tr><td style="text-align:right;">clazz</td><td style="text-align:left;">\u672C\u6B21\u8C03\u7528\u7C7B\u7684 Class \u5F15\u7528</td></tr><tr><td style="text-align:right;">method</td><td style="text-align:left;">\u672C\u6B21\u8C03\u7528\u65B9\u6CD5\u53CD\u5C04\u5F15\u7528</td></tr><tr><td style="text-align:right;">target</td><td style="text-align:left;">\u672C\u6B21\u8C03\u7528\u7C7B\u7684\u5B9E\u4F8B</td></tr><tr><td style="text-align:right;">params</td><td style="text-align:left;">\u672C\u6B21\u8C03\u7528\u53C2\u6570\u5217\u8868\uFF0C\u8FD9\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5982\u679C\u65B9\u6CD5\u662F\u65E0\u53C2\u65B9\u6CD5\u5219\u4E3A\u7A7A\u6570\u7EC4</td></tr><tr><td style="text-align:right;">returnObj</td><td style="text-align:left;">\u672C\u6B21\u8C03\u7528\u8FD4\u56DE\u7684\u5BF9\u8C61\u3002\u5F53\u4E14\u4EC5\u5F53 <code>isReturn==true</code> \u6210\u7ACB\u65F6\u5019\u6709\u6548\uFF0C\u8868\u660E\u65B9\u6CD5\u8C03\u7528\u662F\u4EE5\u6B63\u5E38\u8FD4\u56DE\u7684\u65B9\u5F0F\u7ED3\u675F\u3002\u5982\u679C\u5F53\u524D\u65B9\u6CD5\u65E0\u8FD4\u56DE\u503C <code>void</code>\uFF0C\u5219\u503C\u4E3A null</td></tr><tr><td style="text-align:right;">throwExp</td><td style="text-align:left;">\u672C\u6B21\u8C03\u7528\u629B\u51FA\u7684\u5F02\u5E38\u3002\u5F53\u4E14\u4EC5\u5F53 <code>isThrow==true</code> \u6210\u7ACB\u65F6\u6709\u6548\uFF0C\u8868\u660E\u65B9\u6CD5\u8C03\u7528\u662F\u4EE5\u629B\u51FA\u5F02\u5E38\u7684\u65B9\u5F0F\u7ED3\u675F\u3002</td></tr><tr><td style="text-align:right;">isBefore</td><td style="text-align:left;">\u8F85\u52A9\u5224\u65AD\u6807\u8BB0\uFF0C\u5F53\u524D\u7684\u901A\u77E5\u8282\u70B9\u6709\u53EF\u80FD\u662F\u5728\u65B9\u6CD5\u4E00\u5F00\u59CB\u5C31\u901A\u77E5\uFF0C\u6B64\u65F6 <code>isBefore==true</code> \u6210\u7ACB\uFF0C\u540C\u65F6 <code>isThrow==false</code> \u548C <code>isReturn==false</code>\uFF0C\u56E0\u4E3A\u5728\u65B9\u6CD5\u521A\u5F00\u59CB\u65F6\uFF0C\u8FD8\u65E0\u6CD5\u786E\u5B9A\u65B9\u6CD5\u8C03\u7528\u5C06\u4F1A\u5982\u4F55\u7ED3\u675F\u3002</td></tr><tr><td style="text-align:right;">isThrow</td><td style="text-align:left;">\u8F85\u52A9\u5224\u65AD\u6807\u8BB0\uFF0C\u5F53\u524D\u7684\u65B9\u6CD5\u8C03\u7528\u4EE5\u629B\u5F02\u5E38\u7684\u5F62\u5F0F\u7ED3\u675F\u3002</td></tr><tr><td style="text-align:right;">isReturn</td><td style="text-align:left;">\u8F85\u52A9\u5224\u65AD\u6807\u8BB0\uFF0C\u5F53\u524D\u7684\u65B9\u6CD5\u8C03\u7528\u4EE5\u6B63\u5E38\u8FD4\u56DE\u7684\u5F62\u5F0F\u7ED3\u675F\u3002</td></tr></tbody></table><p>\u6240\u6709\u53D8\u91CF\u90FD\u53EF\u4EE5\u5728\u8868\u8FBE\u5F0F\u4E2D\u76F4\u63A5\u4F7F\u7528\uFF0C\u5982\u679C\u5728\u8868\u8FBE\u5F0F\u4E2D\u7F16\u5199\u4E86\u4E0D\u7B26\u5408 OGNL \u811A\u672C\u8BED\u6CD5\u6216\u8005\u5F15\u5165\u4E86\u4E0D\u5728\u8868\u683C\u4E2D\u7684\u53D8\u91CF\uFF0C\u5219\u9000\u51FA\u547D\u4EE4\u7684\u6267\u884C\uFF1B\u7528\u6237\u53EF\u4EE5\u6839\u636E\u5F53\u524D\u7684\u5F02\u5E38\u4FE1\u606F\u4FEE\u6B63<code>\u6761\u4EF6\u8868\u8FBE\u5F0F</code>\u6216<code>\u89C2\u5BDF\u8868\u8FBE\u5F0F</code></p>`,7),d=a("\u7279\u6B8A\u7528\u6CD5\u8BF7\u53C2\u8003\uFF1A"),k={href:"https://github.com/alibaba/arthas/issues/71",target:"_blank",rel:"noopener noreferrer"},u=a("https://github.com/alibaba/arthas/issues/71"),h=a("OGNL \u8868\u8FBE\u5F0F\u5B98\u7F51\uFF1A"),g={href:"https://commons.apache.org/proper/commons-ognl/language-guide.html",target:"_blank",rel:"noopener noreferrer"},v=a("https://commons.apache.org/proper/commons-ognl/language-guide.html");function m(y,b){const t=i("ExternalLinkIcon");return l(),o("div",null,[p,s("ul",null,[s("li",null,[d,s("a",k,[u,n(t)])]),s("li",null,[h,s("a",g,[v,n(t)])])])])}var w=e(c,[["render",m],["__file","advice-class.html.vue"]]);export{w as default};