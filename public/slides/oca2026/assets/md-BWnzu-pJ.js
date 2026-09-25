import{E as e,Q as t,R as n,S as r,U as i,Z as a,_ as o,g as s,gt as c,vt as l,x as u,y as d}from"./modules/shiki-B4NFgu0j.js";import{nt as f,tt as p}from"./index-BJmLlzN5.js";import{t as m}from"./GraphvizDot-w-uJ9omL.js";import{t as h}from"./slidev/two-cols-header-BIDUNxan.js";var g=`
graph G {
  layout=neato
  bgcolor = "transparent"
  node [shape=circle, style=filled, fillcolor=lightgrey, width = 0.25, fixedsize = true, label="", penwidth=1.5]

  0 [pos="0,1!"]
  1 [pos="-0.951056516295154, 0.309016994374947!"]
  2 [pos="-0.587785252292473, -0.809016994374947!"]
  3 [pos="0.587785252292473, -0.809016994374947!"]
  4 [pos="0.951056516295154, 0.309016994374947!"]

  edge [penwidth = 1.5]
  0 -- 1 -- 2 -- 3 -- 4 -- 0
  0 -- 2 -- 4 -- 1 -- 3 -- 0
}`,_=`
graph G {
  layout=neato
  bgcolor = "transparent"
  node [shape=circle, style=filled, fillcolor=lightgrey, width = 0.25, fixedsize = true, label="", penwidth=1.5]

  0 [pos="0,0!"]
  1 [pos="0,1!"]
  2 [pos="0,2!"]
  3 [pos="2,0!"]
  4 [pos="2,1!"]
  5 [pos="2,2!"]

  edge [penwidth = 1.5]
  0 -- 3
  0 -- 4
  0 -- 5
  1 -- 3
  1 -- 4
  1 -- 5
  2 -- 3
  2 -- 4
  2 -- 5
}`,v=`
graph G {
  layout=neato
  bgcolor = "transparent"
  node [shape=circle, style=filled, fillcolor=lightgrey, width = 0.25, fixedsize = true, label="", penwidth=1.5]

  0 [pos="0,1!"]
  1 [pos="-0.951056516295154, 0.309016994374947!"]
  2 [pos="-0.587785252292473, -0.809016994374947!"]
  3 [pos="0.587785252292473, -0.809016994374947!"]
  4 [pos="0.951056516295154, 0.309016994374947!"]
  5 [pos="0,0!"]

  edge [penwidth = 1.5]
  0 -- 1 -- 2 -- 3 -- 4 -- 0
  5 -- 0
  5 -- 1
  5 -- 2
  5 -- 3
  5 -- 4
}`,y=`
graph G {
  layout=neato
  bgcolor = "transparent"
  node [shape=circle, style=filled, fillcolor=lightgrey, width = 0.25, fixedsize = true, label="", penwidth=1.5]

  0 [pos="0,1!"]
  1 [pos="-0.781831482468030, 0.623489801858734!"]
  2 [pos="-0.974927912181824, -0.222520933956314!"]
  3 [pos="-0.433883739117558, -0.900968867902419!"]
  4 [pos="0.433883739117558, -0.900968867902419!"]
  5 [pos="0.974927912181824, -0.222520933956315!"]
  6 [pos="0.781831482468030, 0.623489801858733!"]
  7 [pos="0,0!"]

  edge [penwidth = 1.5]
  0 -- 1 -- 2 -- 3 -- 4 -- 5 -- 6 -- 0
  7 -- 0
  7 -- 1
  7 -- 2
  7 -- 3
  7 -- 4
  7 -- 5
  7 -- 6

}`,b=`
graph G {
  layout=neato
  bgcolor = "transparent"
  node [shape=circle, style=filled, fillcolor=lightgrey, width = 0.25, fixedsize = true, label="", penwidth=1.5]

   0 [pos = "1,0!"];
   1 [pos = "0.5,0.8660254038!"];
   2 [pos = "-0.5,0.8660254038!"];
   3 [pos = "-1,0!"];
   4 [pos = "-0.5,-0.8660254038!"];
   5 [pos = "0.5,-0.8660254038!"];
   6 [pos = "0,0!"];

  edge [penwidth = 1.5]
  0 -- 1 -- 2 -- 3 -- 4 -- 5 -- 0
  6 -- 0
  6 -- 2
  6 -- 4

}`,x={__name:`slides.md__slidev_32`,setup(x){let{$slidev:S,$nav:C,$clicksContext:w,$clicks:T,$page:E,$renderContext:D,$frontmatter:O}=f();return w.setup(),(f,x)=>{let S=m,C=i(`click`);return n(),o(h,l(e(c(p)(c(O),31))),{left:a(e=>[x[0]||=s(`ul`,null,[s(`li`,null,[s(`p`,null,`平面グラフはグラフマイナーに閉じている`)]),s(`li`,null,[s(`p`,null,[u(`平面グラフの禁止グラフマイナーは`),s(`br`)])])],-1),r(S,{class:`inline-block dark:invert h-20`,dot:g,engine:`neato`}),x[1]||=u(`,`,-1),r(S,{class:`inline-block dark:invert ml-5 h-20`,dot:_,engine:`neato`}),x[2]||=u(`.`,-1),x[3]||=s(`p`,null,`[Kuratowski 1930], [Wagner 1937].`,-1),x[4]||=s(`ul`,null,[s(`li`,null,[u(`任意に固定した平面グラフ `),s(`span`,{class:`katex`},[s(`span`,{class:`katex-mathml`},[s(`math`,{xmlns:`http://www.w3.org/1998/Math/MathML`},[s(`semantics`,null,[s(`mrow`,null,[s(`mi`,null,`H`)]),s(`annotation`,{encoding:`application/x-tex`},`H`)])])]),s(`span`,{class:`katex-html`,"aria-hidden":`true`},[s(`span`,{class:`katex-base`},[s(`span`,{class:`katex-strut`,style:{height:`0.6833em`}}),s(`span`,{class:`mord mathnormal`,style:{"margin-right":`0.0813em`}},`H`)])])]),u(` をマイナーとして含まないグラフクラスのブランチ幅は有界`)])],-1)]),right:a(e=>[t((n(),d(`div`,null,[x[5]||=s(`ul`,null,[s(`li`,null,[s(`p`,null,`円グラフは頂点マイナーに閉じている`)]),s(`li`,null,[s(`p`,null,[u(`円グラフの禁止頂点マイナーは`),s(`br`)])])],-1),r(S,{class:`inline-block dark:invert h-20`,dot:v,engine:`neato`}),x[6]||=u(`,`,-1),r(S,{class:`inline-block dark:invert ml-5 h-20`,dot:y,engine:`neato`}),x[7]||=u(`,`,-1),r(S,{class:`inline-block dark:invert ml-5 mr-5 h-20`,dot:b,engine:`neato`}),x[8]||=u(`.`,-1),x[9]||=s(`p`,null,`[Bouchet 1994].`,-1),x[10]||=s(`ul`,null,[s(`li`,null,[u(`任意に固定した円グラフ `),s(`span`,{class:`katex`},[s(`span`,{class:`katex-mathml`},[s(`math`,{xmlns:`http://www.w3.org/1998/Math/MathML`},[s(`semantics`,null,[s(`mrow`,null,[s(`mi`,null,`H`)]),s(`annotation`,{encoding:`application/x-tex`},`H`)])])]),s(`span`,{class:`katex-html`,"aria-hidden":`true`},[s(`span`,{class:`katex-base`},[s(`span`,{class:`katex-strut`,style:{height:`0.6833em`}}),s(`span`,{class:`mord mathnormal`,style:{"margin-right":`0.0813em`}},`H`)])])]),u(` を頂点マイナーとして含まないグラフクラスのランク幅は有界`),s(`br`),u(` [Geelen, Kwon, McCarty, Wollan 2023].`)])],-1)])),[[C]])]),default:a(()=>[x[11]||=s(`h1`,null,`平面グラフと円グラフ`,-1)]),_:1},16)}}};export{x as default};