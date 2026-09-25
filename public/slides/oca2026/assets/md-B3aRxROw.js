import{E as e,R as t,S as n,Z as r,_ as i,g as a,gt as o,vt as s}from"./modules/shiki-B4NFgu0j.js";import{nt as c,tt as l}from"./index-B5u5DPUt.js";import{t as u}from"./slidev/default-DVba9ZPs.js";import{t as d}from"./GraphvizDot-BBVEPEeM.js";var f={class:`flex justify-between`},p=`
graph G {
  layout=neato
  bgcolor = "transparent"
  node [shape=circle, style=filled, fillcolor=lightgrey, fontname="Helvetica", fontsize=18, penwidth=2.5]

  0 [pos="0,0!", fillcolor=red]
  1 [pos="0,1!"]
  2 [pos="1,0!"]
  3 [pos="1,1!"]

  edge [penwidth = 2.5, fontname="Helvetica", fontsize=20]
  0 -- 1
  0 -- 2
  0 -- 3
  1 -- 2
  1 -- 3
  2 -- 3
}`,m=`
graph G {
  layout=neato
  bgcolor = "transparent"
  node [shape=circle, style=filled, fillcolor=lightgrey, fontname="Helvetica", fontsize=18, penwidth=2.5]

  0 [pos="0,0!"]
  1 [pos="0,1!"]
  2 [pos="1,0!"]
  3 [pos="1,1!"]

  edge [penwidth = 2.5, fontname="Helvetica", fontsize=20]
  0 -- 1
  0 -- 2
  0 -- 3
}`,h=`
graph G {
  layout=neato
  bgcolor = "transparent"
  node [shape=circle, style=filled, fillcolor=lightgrey, fontname="Helvetica", fontsize=18, penwidth=2.5]

  0 [pos="0,0!"]
  1 [pos="0,1!"]
  2 [pos="1,0!"]
  3 [pos="1,1!"]

  edge [penwidth = 2.5, fontname="Helvetica", fontsize=20]
  1 -- 0
  1 -- 2
  1 -- 3
}`,g=`
graph G {
  layout=neato
  bgcolor = "transparent"
  node [shape=circle, style=filled, fillcolor=lightgrey, fontname="Helvetica", fontsize=18, penwidth=2.5]

  0 [pos="0,0!"]
  1 [pos="0,1!"]
  2 [pos="1,0!"]
  3 [pos="1,1!"]

  edge [penwidth = 2.5, fontname="Helvetica", fontsize=20]
  2 -- 0
  2 -- 1
  2 -- 3
}`,_=`
graph G {
  layout=neato
  bgcolor = "transparent"
  node [shape=circle, style=filled, fillcolor=lightgrey, fontname="Helvetica", fontsize=18, penwidth=2.5]

  0 [pos="0,0!"]
  1 [pos="0,1!"]
  2 [pos="1,0!"]
  3 [pos="1,1!"]

  edge [penwidth = 2.5, fontname="Helvetica", fontsize=20]
  3 -- 0
  3 -- 1
  3 -- 2
}`,v=`
graph G {
  layout=neato
  bgcolor = "transparent"
  node [shape=circle, style=filled, fillcolor=lightgrey, fontname="Helvetica", fontsize=18, penwidth=2.5]

  0 [pos="0,0!"]
  1 [pos="0,1!", fillcolor=red]
  2 [pos="1,0!"]
  3 [pos="1,1!"]

  edge [penwidth = 2.5, fontname="Helvetica", fontsize=20]
  0 -- 1
  1 -- 2
  2 -- 3
}`,y=`
graph G {
  layout=neato
  bgcolor = "transparent"
  node [shape=circle, style=filled, fillcolor=lightgrey, fontname="Helvetica", fontsize=18, penwidth=2.5]

  0 [pos="0,0!"]
  1 [pos="0,1!"]
  2 [pos="1,0!", fillcolor=red]
  3 [pos="1,1!"]

  edge [penwidth = 2.5, fontname="Helvetica", fontsize=20]
  0 -- 1
  1 -- 2
  2 -- 3
  0 -- 2
}`,b=`
graph G {
  layout=neato
  bgcolor = "transparent"
  node [shape=circle, style=filled, fillcolor=lightgrey, fontname="Helvetica", fontsize=18, penwidth=2.5]

  0 [pos="0,0!"]
  1 [pos="0,1!", fillcolor=red]
  2 [pos="1,0!"]
  3 [pos="1,1!"]

  edge [penwidth = 2.5, fontname="Helvetica", fontsize=20]
  0 -- 3
  1 -- 2
  1 -- 3
  2 -- 3
  0 -- 2
}`,x=`
graph G {
  layout=neato
  bgcolor = "transparent"
  node [shape=circle, style=filled, fillcolor=lightgrey, fontname="Helvetica", fontsize=18, penwidth=2.5]

  0 [pos="0,0!"]
  1 [pos="0,1!"]
  2 [pos="1,0!"]
  3 [pos="1,1!"]

  edge [penwidth = 2.5, fontname="Helvetica", fontsize=20]
  0 -- 3
  1 -- 2
  1 -- 3
  0 -- 2
}`,S={__name:`slides.md__slidev_3`,setup(S){let{$slidev:C,$nav:w,$clicksContext:T,$clicks:E,$page:D,$renderContext:O,$frontmatter:k}=c();return T.setup(),(c,S)=>{let C=d;return t(),i(u,s(e(o(l)(o(k),2))),{default:r(()=>[S[0]||=a(`h1`,null,`4頂点連結グラフの同値類(同値関係)`,-1),S[1]||=a(`p`,null,[a(`span`)],-1),S[2]||=a(`p`,null,`完全グラフを含む同値類`,-1),a(`div`,f,[n(C,{class:`dark:invert inline-block h-25`,dot:p,engine:`neato`}),n(C,{class:`dark:invert inline-block h-25`,dot:m,engine:`neato`}),n(C,{class:`dark:invert inline-block h-25`,dot:h,engine:`neato`}),n(C,{class:`dark:invert inline-block h-25`,dot:g,engine:`neato`}),n(C,{class:`dark:invert inline-block h-25`,dot:_,engine:`neato`})]),S[3]||=a(`p`,null,`パスを含む同値類(同型なものでも区別すると11個のグラフを含む)`,-1),a(`div`,null,[n(C,{class:`dark:invert inline-block ml-8 mr-20 h-25`,dot:v,engine:`neato`}),n(C,{class:`dark:invert inline-block ml-8 mr-20 h-25`,dot:y,engine:`neato`}),n(C,{class:`dark:invert inline-block ml-8 mr-20 h-25`,dot:b,engine:`neato`}),n(C,{class:`dark:invert inline-block ml-8 mr-20 h-25`,dot:x,engine:`neato`})]),S[4]||=a(`p`,null,`パスを含む軌道は3つある。`,-1)]),_:1},16)}}};export{S as default};