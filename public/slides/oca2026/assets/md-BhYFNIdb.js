import{E as e,R as t,S as n,Z as r,_ as i,g as a,gt as o,vt as s,x as c}from"./modules/shiki-B4NFgu0j.js";import{nt as l,tt as u}from"./index-D2YjBnqC.js";import{t as d}from"./slidev/default-D5sYzJoy.js";import{t as f}from"./GraphvizDot-LcBiNxX3.js";var p={class:`flex justify-between`},m={class:`text-center`},h={class:`text-center`},g={class:`text-center`},_=`graph six_vertex_4regular {
    /* 描画設定 */
    layout = neato;      // 与えた座標をそのまま使う
    bgcolor = "transparent"
    overlap = false;
    splines = false;

    /* 頂点の共通属性：円・番号をラベルにする */
    node [shape = circle, style=filled, fillcolor=lightgrey, width = 1.2, penwidth=3, fixedsize = true, fontsize=60, fontname="Helvetica"];

    /* ---- 座標 ----
       0 : 上
       1 : 左下
       2 : 右下
       3 : 内左
       4 : 内右
       5 : 下中央
    */
    a [pos = "4,8!"];
    c [pos = "0,0!"];
    b [pos = "8,0!"];
    f [pos = "3,4!"];
    d [pos = "5,4!"];
    e [pos = "4,2!"];

    /* ---- エッジ（無向・細線） ---- */
    edge [penwidth=3];
    a -- b; a -- c; b -- c;      // 外三角形
    a -- f; a -- d;              // 上から内部へ
    c -- e; c -- f;              // 左下から内部へ
    b -- e; b -- d;              // 右下から内部へ
    d -- e; d -- f; e -- f;      // 内部三角形
}`,v=`graph Chord {
  /* ---- レイアウト全体 ---- */
  layout       = neato
  bgcolor = "transparent"
  margin       = 0.25
  outputorder  = "edgesfirst"   // 先に弦→最後にリングを描き，輪郭が上に来る

  /* ---- 円周を描く巨大ノード ---- */
  Ring [shape=circle, label="", fixedsize=true,
        pos="0,0!",             // 円の中心
        width=5,      // 直径 ≒ 6 インチ（座標 3→7 に相当）
         penwidth=3]

  /* ---- 実際の頂点（不可視） ---- */
  node [shape=point, width=0, label=""]

  0  [pos=" 0.000,  2.500!"];  1  [pos=" 1.250,  2.165!"];
  2  [pos=" 2.165,  1.250!"];  3  [pos=" 2.500,  0.000!"];
  4  [pos=" 2.165, -1.250!"];  5  [pos=" 1.250, -2.165!"];
  6  [pos=" 0.000, -2.500!"];  7  [pos="-1.250, -2.165!"];
  8  [pos="-2.165, -1.250!"];  9  [pos="-2.500,  0.000!"];
  10 [pos="-2.165,  1.250!"]; 11 [pos="-1.250,  2.165!"];

  node [shape=plaintext, fontname="Helvetica", fontsize=40];
  b0  [pos=" 0.000,  2.900!", label="a"];
  b1  [pos=" 1.450,  2.511!", label="c"];
  b2  [pos=" 2.511,  1.450!", label="b"];
  b3  [pos=" 2.900,  0.000!", label="a"];
  b4  [pos=" 2.511, -1.450!", label="f"];
  b5  [pos=" 1.450, -2.511!", label="c"];
  b6  [pos=" 0.000, -2.900!", label="e"];
  b7  [pos="-1.450, -2.511!", label="b"];
  b8  [pos="-2.511, -1.450!", label="d"];
  b9  [pos="-2.900,  0.000!", label="f"];
  b10 [pos="-2.511,  1.450!", label="e"];
  b11 [pos="-1.450,  2.511!", label="d"];

  edge [penwidth=3, color="#1f78b4"];
  0--3;
  1--5;
  2--7;
  4--9;
  6--10;
  8--11;

}`,y=`graph circle_graph {
    /* 描画設定 */
    layout = neato;      // 与えた座標をそのまま使う
    bgcolor = "transparent"
    overlap = false;
    splines = false;

    /* 頂点の共通属性：円・番号をラベルにする */
    node [shape = circle, style=filled, fillcolor=lightgrey, width = 0.3, fixedsize = true, fontsize=15, fontname="Helvetica"];
   0 [pos = "0,0!", label="d"];
   1 [pos = "1,0!", label="e"];
   2 [pos = "0,1!", label="f"];
   3 [pos = "1,1!", label="b"];
   4 [pos = "0,2!", label="c"];
   5 [pos = "1,2!", label="a"];

  4 -- 5 -- 3 -- 1 -- 0 -- 2 -- 4;
  4 -- 3 -- 2 -- 1;
}`,b={__name:`slides.md__slidev_28`,setup(b){let{$slidev:x,$nav:S,$clicksContext:C,$clicks:w,$page:T,$renderContext:E,$frontmatter:D}=l();return C.setup(),(l,b)=>{let x=f;return t(),i(d,s(e(o(u)(o(D),27))),{default:r(()=>[b[6]||=a(`h1`,null,[a(`strong`,null,`グラフィック等方システム`),c(`と円グラフ [Bouchet 1987]`)],-1),b[7]||=a(`div`,{class:`text-center`},[c(` Double occurrence word `),a(`p`,{class:`font-mono tracking-[1em]`},`acbafcebdfed`)],-1),a(`div`,p,[a(`div`,m,[n(x,{class:`dark:invert pl-4 h-60`,dot:v,engine:`neato`}),b[0]||=a(`p`,null,`コードダイアグラム`,-1),b[1]||=a(`p`,null,`コードで定義される区間の反転`,-1)]),a(`div`,h,[n(x,{class:`dark:invert pl-4 h-60`,dot:y,engine:`neato`}),b[2]||=a(`p`,null,[a(`strong`,null,`円グラフ (circle graph)`)],-1),b[3]||=a(`p`,null,`局所反転`,-1)]),a(`div`,g,[n(x,{class:`dark:invert pl-4 h-60`,dot:_,engine:`neato`}),b[4]||=a(`p`,null,[c(`連結4正則グラフ(単純とは限らない)`),a(`br`),c(` 上のオイラー閉路`)],-1),b[5]||=a(`p`,null,`オイラー閉路のKotzig変換 [Kotzig 1968]`,-1)])])]),_:1},16)}}};export{b as default};