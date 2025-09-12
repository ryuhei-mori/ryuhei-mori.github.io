import{_ as c}from"./Statement.vue_vue_type_style_index_0_lang-DnW_MwCw.js";import{_ as h}from"./GraphvizDot.vue_vue_type_script_setup_true_lang-BOej_dZ_.js";import{_ as g}from"./slidev/KaTexBlockWrapper.vue_vue_type_script_setup_true_lang-BYtVfl_q.js";import{b as u,o as d,w as e,g as s,e as t,i as y,ad as l,m as v,v as f,x,T as m}from"./modules/vue-DguiVrL0.js";import{I as w}from"./slidev/default-D1_8C_5H.js";import{u as b,f as k}from"./slidev/context-Bp2XuFjK.js";import"./index-D0zOMphi.js";import"./modules/shiki-DqHqTnHb.js";const _={class:"flex justify-between px-40"},M=`
graph G {
  layout=neato
  bgcolor = "transparent"
  node [shape=circle, fontname="Helvetica", penwidth=1.5]

  0 [pos="0,0!", label="X", style=filled, fillcolor=pink]
  1 [pos="1,0!", label="Z", style=filled, fillcolor=lightgreen]
  2 [pos="1,1!", label="Z", style=filled, fillcolor=lightgreen]
  3 [pos="0,1!", label="Z", style=filled, fillcolor=lightgreen]
  4 [pos="2,0!", label="", style=filled, fillcolor=lightgray]

  edge [penwidth = 1.5]
  0 -- 1
  2 -- 1
  2 -- 3
  0 -- 3
  0 -- 2
  4 -- 1
  4 -- 2
}`,z=`
graph G {
  layout=neato
  bgcolor = "transparent"
  node [shape=circle, fontname="Helvetica", penwidth=1.5]

  0 [pos="0,0!", label="Z", style=filled, fillcolor=lightgreen]
  1 [pos="1,0!", label="Z", style=filled, fillcolor=lightgreen]
  2 [pos="1,1!", label="X", style=filled, fillcolor=pink]
  3 [pos="0,1!", label="Z", style=filled, fillcolor=lightgreen]
  4 [pos="2,0!", label="Z", style=filled, fillcolor=lightgreen]

  edge [penwidth = 1.5]
  0 -- 1
  2 -- 1
  2 -- 3
  0 -- 3
  0 -- 2
  4 -- 1
  4 -- 2
}`,q={__name:"slides.md__slidev_7",setup(V){const{$clicksContext:i,$frontmatter:r}=b();return i.setup(),($,a)=>{const p=g,n=h,o=c;return d(),u(w,f(x(m(k)(m(r),6))),{default:e(()=>[a[3]||(a[3]=s("h1",null,"グラフ状態",-1)),t(o,{type:"definition",name:"グラフ状態 (⊆スタビライザー状態)"},{default:e(()=>[a[1]||(a[1]=s("p",null,[l("グラフ "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"G"),s("mo",null,"="),s("mo",{stretchy:"false"},"("),s("mi",null,"V"),s("mo",{separator:"true"},","),s("mi",null,"E"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"G=(V, E)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal"},"G"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"E"),s("span",{class:"mclose"},")")])])]),l(" について、"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"∣"),s("mi",null,"V"),s("mi",{mathvariant:"normal"},"∣")]),s("annotation",{encoding:"application/x-tex"},"|V|")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"∣"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),s("span",{class:"mord"},"∣")])])]),l(" 量子ビットのパウリ行列")],-1)),t(p,v({},{ranges:[]}),{default:e(()=>[...a[0]||(a[0]=[s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"S"),s("mi",null,"v")]),s("mo",null,[s("mi",{mathvariant:"normal"},"≔")]),s("msub",null,[s("mi",null,"X"),s("mi",null,"v")]),s("mo",null,"⊗"),s("munder",null,[s("mo",null,"⨂"),s("mrow",null,[s("mi",null,"w"),s("mo",null,"∈"),s("mi",null,"N"),s("mo",{stretchy:"false"},"("),s("mi",null,"v"),s("mo",{stretchy:"false"},")")])]),s("msub",null,[s("mi",null,"Z"),s("mi",null,"w")]),s("mspace",{width:"2em"}),s("mi",{mathvariant:"normal"},"∀"),s("mi",null,"v"),s("mo",null,"∈"),s("mi",null,"V"),s("mi",{mathvariant:"normal"},".")]),s("annotation",{encoding:"application/x-tex"},"S_v\\coloneqq X_v\\otimes \\bigotimes_{w\\in N(v)} Z_w \\qquad\\forall v\\in V. ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0576em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"v")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},[s("span",{class:"mrel"},[s("span",{class:"mop",style:{position:"relative",top:"-0.0347em"}},":")]),s("span",{class:"mrel"},[s("span",{class:"mspace",style:{"margin-right":"-0.0667em"}})]),s("span",{class:"mrel"},"=")]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0785em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"v")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⊗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.566em","vertical-align":"-1.516em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.05em"}},[s("span",{style:{top:"-1.809em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mrel mtight"},"∈"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mclose mtight"},")")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"⨂")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.516em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02691em"}},"w")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"2em"}}),s("span",{class:"mord"},"∀"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∈"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),s("span",{class:"mord"},".")])])])])],-1)])]),_:1},16),a[2]||(a[2]=s("p",null,[l("はスタビライザー群の生成元となる。ここで "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"N"),s("mo",{stretchy:"false"},"("),s("mi",null,"v"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"N(v)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mclose"},")")])])]),l(" は "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"v")]),s("annotation",{encoding:"application/x-tex"},"v")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v")])])]),l(" の近傍。 これで定義されるスタビライザー状態を"),s("strong",null,"グラフ状態"),l("という。")],-1)),s("div",_,[t(n,{class:"dark:invert mb-3 h-30",dot:M,engine:"neato"}),t(n,{class:"dark:invert mb-3 h-30",dot:z,engine:"neato"})])]),_:1}),y(`
グラフ $G$ の隣接行列を $A$ とすると、グラフ状態のスタビライザー群の生成行列は

<KaTexBlockWrapper v-bind="{}" :ranges='[]'>

$$
\\begin{bmatrix}
I&|&A
\\end{bmatrix}.
$$
</KaTexBlockWrapper>

`)]),_:1},16)}}};export{q as default};
