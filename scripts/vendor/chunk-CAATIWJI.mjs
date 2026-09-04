import { a as v } from "./chunk-REHAB5PL.mjs";
import { h as z, n as O, o as W, q as U } from "./chunk-PWZM5W7F.mjs";
import { Cd as N, Dd as F, Ed as B, Fd as g, t as R, u as y, ud as M } from "./chunk-4QAUNZ3V.mjs";
import { Mh as w, ib as K, lj as S } from "./chunk-CXXFSPZR.mjs";
import { o as J } from "./chunk-EERSFQYH.mjs";
import { a as T } from "./chunk-5WDLMAA7.mjs";
import { l as b } from "./chunk-NKL3YJZC.mjs";
import { h as A } from "./chunk-KPMZENE5.mjs";
function Q(t, o) {
  return !(t.master !== o.master || t.inheritsFrom !== o.inheritsFrom);
}
function q(t) {
  return t._data || t;
}
function X(t, o) {
  let e = q(t),
    n = q(o);
  return T(e.blocks, n.blocks) && T(e.entityMap, n.entityMap);
}
function x(t, o, e) {
  return o === e
    ? !0
    : !o || !e
      ? o !== o && e !== e
      : t === "replicaInfo"
        ? Q(o, e)
        : t === "styledText"
          ? X(o, e)
          : T(o, e);
}
function D(t, o) {
  if (t === "replicaInfo") {
    let e = o;
    return (
      e &&
      (e.inheritsFrom ? { master: e.master, inheritsFrom: e.inheritsFrom } : { master: e.master })
    );
  }
  if (t === "styledText") {
    let e = o;
    if (!e) return e;
    let n = e.rawContentState;
    return { __class: e.__class, blocks: n.blocks, entityMap: n.entityMap };
  }
  return o;
}
function $(t, o, e) {
  t[o] = e;
}
function V(t, o, e, n = !1) {
  let r = null,
    s = K(o),
    d = !1;
  for (let a in e) {
    if (a === "_deleted") continue;
    let f = a;
    if (f === "id" || f === "__class") continue;
    let u = e[a];
    if (a === "replicaInfo" && u) {
      let p = o.replicaInfo;
      if (p?.master === u.master && p?.inheritsFrom === u.inheritsFrom) continue;
      u = { ...u, overrides: p?.overrides ?? {} };
    }
    if (x(a, o[f], u)) continue;
    r || (r = o.asDraft(t));
    let c = B(a, u);
    (a.startsWith("$") ? r.setProp(a, c) : $(r, f, c), (d ||= s && S(a)));
  }
  let l = e._deleted;
  if (l)
    for (let a of l) {
      let f = a;
      f === "id" ||
        f === "__class" ||
        (o[f] !== void 0 &&
          (r || (r = o.asDraft(t)),
          n ? r.resetToDefault(a) : a.startsWith("$") ? r.setProp(a, void 0) : $(r, f, void 0),
          (d ||= s && S(a))));
    }
  return (d && o.cache.controlPropVersion++, r);
}
var Z = { id: !0, cache: !0, children: !0, mutable: !0, update: !0, _deleted: !0 };
function I(t, o, e) {
  let n = e.from,
    r = e.to,
    s = w(t) || w(o),
    d = !1,
    l = new Set([...o.keys(), ...t.keys()]);
  for (let a of l) {
    if (s) {
      if (!(a in O)) continue;
    } else {
      if (a === "children") {
        (W(e, t.children, o.children), (e.fromChildren || e.toChildren) && (d = !0));
        continue;
      }
      if (a in Z) continue;
    }
    let f = a,
      u = t[f],
      c = o[f];
    x(a, u, c) ||
      ((d = !0),
      u === void 0 ? (n._deleted || (n._deleted = []), n._deleted.push(a)) : (n[a] = D(a, u)),
      c === void 0 ? (r._deleted || (r._deleted = []), r._deleted.push(a)) : (r[a] = D(a, c)));
  }
  if (!(!d && !e.added && !e.removed)) return e;
}
var m = A("tree-library");
function C(t, o, e) {
  if (o <= 0 || e <= 0) return;
  let n = "faster",
    r = o / e;
  (r < 0 && ((n = "slower"), (r = 1 / r)),
    m.info(t, r.toFixed(2), "times", n, "-- generic:", o.toFixed(2), "fast:", e.toFixed(2)));
}
var Y = 0;
function ee(t) {
  let o = Date.now();
  o - Y < 3e4 || ((Y = o), P(t));
}
function te() {
  if (!b.isDebugBuild) return;
  !g && b.isTest;
}
var oe = { cache: !0, children: !0, mutable: !0, update: !0, contentHash: !0 };
function re() {
  if (!g || !b.isDebugBuild) return !0;
  for (let t of M()) {
    let o = N(t.toJS());
    if (!o) return !1;
    let e = new Set(o.keys()),
      n = new Set(t.keys());
    if (e.size !== n.size) return !1;
    for (let r of t.keys()) {
      if (!e.has(r)) return !1;
      if (!oe[r] && !T(o[r], t[r])) return !1;
    }
  }
  return !0;
}
function P(t, o) {
  let e = (l, a) => (o?.exclude?.[l] ? t.generics[l] : a),
    n = !0,
    r = !1,
    s = t.documentByteSize < 5e7;
  ((t.reconfigure = P), te());
  let d = re();
  if (
    (g
      ? d
        ? b.isDebugBuild
          ? m.debug("FastTreeLibrary build and up to date.")
          : m.debug("FastTreeLibrary build found.")
        : m.warn(
            "FastTreeLibrary build is out of date. Using generic methods instead. See tools/canvas-tree-tool/README.md"
          )
      : m.debug(
          "FastTreeLibrary has not been build. Using generic methods instead. See tools/canvas-tree-tool/README.md"
        ),
    !g || !d)
  ) {
    if (t.mode === "generic") return;
    t.resetIntegration();
    return;
  }
  if (
    (J.isOn("compareFastTreeLibrary") && (r ||= !n || s),
    n && r
      ? ((n = Math.random() < 0.9),
        m.debug("setup, randomizing 10%:", n ? "isFastTree" : r ? "isComparing" : "generic"))
      : m.debug("setup:", n ? "useFast" : r ? "useComparing" : "generic"),
    n)
  ) {
    if (t.mode === "fast") return;
    t.updateIntegration("fast", {
      nodeFromValue: e("nodeFromValue", N),
      valueFromNode: e("valueFromNode", F),
      diffNodes: e("diffNodes", I),
      updateNode: e("updateNode", V),
      copyToNode: e("copyToNode", R),
    });
  } else {
    if (r)
      return t.mode === "comparing"
        ? void 0
        : t.updateIntegration("comparing", {
            nodeFromValue: e("nodeFromValue", ie),
            valueFromNode: e("valueFromNode", de),
            diffNodes: e("diffNodes", se),
            updateNode: e("updateNode", ae),
            copyToNode: e("copyToNode", R),
          });
    if (t.mode === "generic") return;
    t.resetIntegration();
  }
}
var i = {
  timer: 0,
  nodeFromValueTime: 0,
  nodeFromValueFastTime: 0,
  toJsTime: 0,
  toJsFastTime: 0,
  updateNodeTime: 0,
  updateNodeFastTime: 0,
  diffNodesTime: 0,
  diffNodesFastTime: 0,
};
function ne() {
  ((i.timer = 0),
    C("nodeFromValue", i.nodeFromValueTime, i.nodeFromValueFastTime),
    C("toJS", i.toJsTime, i.toJsFastTime),
    C("updateNode", i.updateNodeTime, i.updateNodeFastTime),
    C("diffNodes", i.diffNodesTime, i.diffNodesFastTime),
    (i.nodeFromValueTime = 0),
    (i.nodeFromValueFastTime = 0),
    (i.toJsTime = 0),
    (i.toJsFastTime = 0),
    (i.updateNodeTime = 0),
    (i.updateNodeFastTime = 0),
    (i.diffNodesTime = 0),
    (i.diffNodesFastTime = 0));
}
function h() {
  i.timer || (i.timer = window.setTimeout(ne, 3e4));
}
function j(t) {
  let o = new t.constructor(),
    e = t.children ? [] : void 0;
  return o.assign(t, { cache: o.cache, mutable: !0, update: 1, children: e });
}
function ae(t, o, e, n = !1) {
  h();
  let r = j(o),
    s = performance.now();
  (y.generics.updateNode(t, r, e, n), (i.updateNodeTime += performance.now() - s));
  try {
    let d = j(o),
      l = performance.now();
    (V(t, d, e, n), (i.updateNodeFastTime += performance.now() - l), (d.cache = r.cache));
    let a = v(r, d);
    a &&
      m.reportError(
        "updateNode and updateNodeFast should produce the same result:",
        { differences: a, generic: r.toJS(), fast: d.toJS() },
        { tree: "true" }
      );
  } catch (d) {
    m.reportError(d, { message: "error in updateNodeFast" }, { tree: "true" });
  }
  return z(t, o, e, n);
}
function se(t, o, e) {
  h();
  let n = { id: "id", from: {}, to: {} },
    r = performance.now();
  (y.generics.diffNodes(t, o, n), (i.diffNodesTime += performance.now() - r));
  try {
    let s = { id: "id", from: {}, to: {} },
      d = performance.now();
    (I(t, o, s), (i.diffNodesFastTime += performance.now() - d));
    let l = v(n, s, { ignorePrototypes: !0 });
    l &&
      m.reportError(
        "diffNodes and diffNodesFast should produce the same result:",
        { differences: l, generic: n, fast: s },
        { tree: "true" }
      );
  } catch (s) {
    m.reportError(s, { message: "error in diffNodeFast" }, { tree: "true" });
  }
  return U(t, o, e);
}
function ie(t, o = null, e) {
  h();
  let n = performance.now(),
    r = y.generics.nodeFromValue(t, o, e);
  i.nodeFromValueTime += performance.now() - n;
  try {
    let s = performance.now();
    e && (e = { ...e, errors: [] });
    let d = N(t, o, e);
    i.nodeFromValueFastTime += performance.now() - s;
    let l = v(r, d);
    l &&
      m.reportError(
        "nodeFromValue and nodeFromValueFast should produce the same result:",
        { differences: l },
        { tree: "true" }
      );
  } catch (s) {
    m.reportError(s, { message: "error in nodeFromValueFast" }, { tree: "true" });
  }
  return r;
}
function de(t) {
  h();
  let o = performance.now(),
    e = y.generics.valueFromNode(t);
  i.toJsTime += performance.now() - o;
  try {
    let n = performance.now(),
      r = F(t);
    i.toJsFastTime += performance.now() - n;
    let s = v(e, r);
    s &&
      m.reportError(
        "valueFromNode and valueFromNodeFast should produce the same result:",
        { differences: s, generic: e, fast: r },
        { tree: "true" }
      );
  } catch (n) {
    m.reportError(n, { message: "error in valueFromNodeFast" }, { tree: "true" });
  }
  return e;
}
function _(t, o) {
  return o.map((e) => {
    if (!e) return null;
    let n = e["Average Time (ns)"];
    if (!n) return e;
    if (e["Task Name"] === "baseline") e.Faster = "-";
    else {
      let r = n / 1e6;
      e.Faster = (t / r).toFixed(2);
    }
    return (
      delete e.Margin,
      delete e["Average Time (ns)"],
      (e["Average Time (s)"] = (n / 1e9).toFixed(3)),
      e
    );
  });
}
async function le(t) {
  let { default: o } = await import("https://app.framerstatic.com/dist-2WCISAY3.mjs"),
    e = new o();
  (e.add("baseline", () => y.generics.valueFromNode(t)),
    e.add("new", () => F(t)),
    await e.warmup(),
    await e.run());
  let n = _(e.results[0]?.mean ?? 0, e.table()),
    r = [...t.walk()].length;
  (console.log(`Results for serializing ${t.__class} with ${r} nodes`), console.table(n));
}
async function me(t) {
  let { default: o } = await import("https://app.framerstatic.com/dist-2WCISAY3.mjs"),
    e = t.root.toJS(),
    n = e;
  function r() {
    n = JSON.parse(JSON.stringify(e));
  }
  let s = new o();
  (s.add("baseline", () => y.generics.nodeFromValue(n), { beforeEach: r }),
    s.add("new", () => N(n), { beforeEach: r }),
    await s.warmup(),
    await s.run());
  let d = _(s.results[0]?.mean ?? 0, s.table()),
    l = t.size();
  (console.log(`Results for parsing ${l} nodes`), console.table(d));
}
async function fe(t, o) {
  let {
      loadPartialDocument: e,
      loadOneRootChild: n,
      TreeAssembler: r,
    } = await import("https://app.framerstatic.com/partialDocument-CEKSKKFV.mjs"),
    { VekterEngine: s } = await import("https://app.framerstatic.com/VekterEngine-BUOKQAJK.mjs"),
    { DocumentParser: d } =
      await import("https://app.framerstatic.com/DocumentParser-335YJORU.mjs"),
    { serializeDocument: l } =
      await import("https://app.framerstatic.com/serializeDocument-PWTSKUEA.mjs"),
    { default: a } = await import("https://app.framerstatic.com/dist-2WCISAY3.mjs"),
    f = l(t.toJS()),
    u = new d(f),
    c = () => {
      let E = new s(),
        G = e(u, E.componentLoader, o),
        k = new Map();
      for (; !n(u, k); );
      let L = new r(E, G, k);
      for (; !L.assembleOnePage(); );
      L.buildCompleteTree();
    };
  if (!sessionStorage.getItem("bench")) {
    (console.log("Running once, call with sessionStorage.bench = 1 to use benchmark."),
      console.time("assemblePages"),
      c(),
      console.timeEnd("assemblePages"));
    return;
  }
  let p = new a({});
  (p.add("baseline", c),
    console.log("warmup"),
    await p.warmup(),
    console.log("run"),
    await p.run());
  let H = _(p.results[0]?.mean ?? 0, p.table());
  console.table(H);
}
export { le as a, me as b, fe as c, ee as d, P as e };
//# sourceMappingURL=https://app.framerstatic.com/chunk-CAATIWJI.mjs.map
