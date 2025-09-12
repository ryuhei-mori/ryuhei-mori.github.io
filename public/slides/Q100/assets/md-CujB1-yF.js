import{_ as r}from"./GraphvizDot.vue_vue_type_script_setup_true_lang-BOej_dZ_.js";import{b as p,o as h,w as c,g as s,i as l,ad as a,e,v as u,x as g,T as m}from"./modules/vue-DguiVrL0.js";import{I as d}from"./slidev/default-D1_8C_5H.js";import{u as x,f as w}from"./slidev/context-Bp2XuFjK.js";import"./index-D0zOMphi.js";import"./modules/shiki-DqHqTnHb.js";const y={class:"flex items-baseline"},k=`
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
}`,M=`
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

}`,f=`
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

}`,B={__name:"slides.md__slidev_19",setup(b){const{$clicksContext:i,$frontmatter:o}=x();return i.setup(),(G,t)=>{const n=r;return h(),p(d,u(g(m(w)(m(o),18))),{default:c(()=>[t[4]||(t[4]=s("h1",null,"グラフマイナー理論の類似としての頂点マイナー理論",-1)),l(`

<Statement type="definition" name="頂点マイナー [Bouchet 1987], [Oum 2005]" class="-mt-1">

グラフ $G$ について、**頂点削除と局所反転**で得られるグラフ $H$ を $G$ の**頂点マイナー**という。
</Statement>

`),t[5]||(t[5]=s("p",null,[s("span")],-1)),t[6]||(t[6]=s("ul",null,[s("li",null,[a("二つのグラフが局所反転等価であるかどうか "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"4")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n^4)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"4")])])])])])])]),s("span",{class:"mclose"},")")])])]),a(" 時間判定アルゴリズム [Bouchet 1991].")])],-1)),t[7]||(t[7]=s("p",null,[s("strong",null,"グラフマイナー理論で得られた豊富な結果の類似"),a("が頂点マイナーでも成り立つと予想されており、その一部は証明されている。")],-1)),t[8]||(t[8]=s("ul",null,[s("li",null,[s("strong",null,"頂点マイナー"),a("に閉じたグラフクラスでランク幅有界のものは"),s("strong",null,"有限個の禁止頂点マイナー"),a("で特徴付けられる [Oum 2008].")]),s("li",null,[a("固定したグラフ "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"H")]),s("annotation",{encoding:"application/x-tex"},"H")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H")])])]),a(" と与えられたグラフ "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"G")]),s("annotation",{encoding:"application/x-tex"},"G")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal"},"G")])])]),a(" (ランク幅が定数)について、"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"G")]),s("annotation",{encoding:"application/x-tex"},"G")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal"},"G")])])]),a(" が "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"H")]),s("annotation",{encoding:"application/x-tex"},"H")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H")])])]),a(" と同型なグラフを"),s("strong",null,"頂点マイナー"),a("として含むか "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"3")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n^3)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"3")])])])])])])]),s("span",{class:"mclose"},")")])])]),a(" 時間判定アルゴリズム [Courcelle, Oum 2007].")])],-1)),l(" グラフマイナーの場合は \\[Robertson, Seymour 1995\\]. "),t[9]||(t[9]=s("ul",null,[s("li",null,[a("与えられたグラフ "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"G"),s("mo",{separator:"true"},","),s("mtext",null," "),s("mi",null,"H")]),s("annotation",{encoding:"application/x-tex"},"G,\\,H")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"G"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H")])])]),a(" について、"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"G")]),s("annotation",{encoding:"application/x-tex"},"G")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal"},"G")])])]),a(" が "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"H")]),s("annotation",{encoding:"application/x-tex"},"H")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H")])])]),a(" を"),s("strong",null,"頂点マイナー"),a("として含むかどうかの判定はNP困難 [Dahlberg, Helsen, Wehner 2020].")])],-1)),l(" グラフマイナーの場合は自明。"),l(" * 与えられたグラフ $G$ が円グラフかどうか判定アルゴリズム \\[\\]."),t[10]||(t[10]=s("ul",null,[s("li",null,[a("任意の"),s("strong",null,"円グラフ"),a(),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"H")]),s("annotation",{encoding:"application/x-tex"},"H")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H")])])]),a(" についてある "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"r")]),s("annotation",{encoding:"application/x-tex"},"r")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r")])])]),a(" が存在し、"),s("strong",null,"ランク幅"),a("が "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"r")]),s("annotation",{encoding:"application/x-tex"},"r")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r")])])]),a(" 以上の任意のグラフは "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"H")]),s("annotation",{encoding:"application/x-tex"},"H")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H")])])]),a(" と同型なグラフを"),s("strong",null,"頂点マイナー"),a("として含む [Geelen, Kwon, McCarty, Wollan 2023].")])],-1)),s("div",y,[t[0]||(t[0]=s("ul",null,[s("li",null,[s("strong",null,"円グラフ"),a("の"),s("strong",null,"禁止頂点マイナー"),a("は")])],-1)),e(n,{class:"dark:invert h-20",dot:k,engine:"neato"}),t[1]||(t[1]=a(",",-1)),e(n,{class:"dark:invert ml-5 h-20",dot:M,engine:"neato"}),t[2]||(t[2]=a(",",-1)),e(n,{class:"dark:invert ml-5 mr-5 h-20",dot:f,engine:"neato"}),t[3]||(t[3]=s("p",null,"[Bouchet 1994].",-1))])]),_:1},16)}}};export{B as default};
