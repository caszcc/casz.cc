import { a as Ce } from "./chunk-B2D67XKC.mjs";
import { b as A } from "./chunk-W5X4LWQ7.mjs";
import { b as fe, c as pe } from "./chunk-RIXMVMLJ.mjs";
import { b as de, c as me, d as ce, e as ue } from "./chunk-NCVY67BF.mjs";
import { w as ie, x as ae, y as se } from "./chunk-PWZM5W7F.mjs";
import { Ja as ne } from "./chunk-4QAUNZ3V.mjs";
import { b as D } from "./chunk-SZTHVK5Z.mjs";
import { c as V } from "./chunk-6P3J2XDB.mjs";
import { o as le } from "./chunk-K26TV6WB.mjs";
import {
  $u as F,
  Zv as re,
  _q as P,
  _u as oe,
  cv as E,
  dh as T,
  fv as w,
  hv as L,
  kg as Z,
  ks as ee,
  zg as $,
} from "./chunk-7T4JEMTU.mjs";
import {
  Nd as S,
  Vn as te,
  do as R,
  ha as H,
  ia as U,
  io as N,
  ma as G,
  na as q,
  pm as Fe,
  rk as x,
  sa as J,
  ua as h,
} from "./chunk-CXXFSPZR.mjs";
import { h as Y } from "./chunk-UYIYJ4FN.mjs";
import { gf as M } from "./chunk-UUS4WEGC.mjs";
import { a as g } from "./chunk-JTCAKYEM.mjs";
import { b as I, m as X } from "./chunk-LA34HORX.mjs";
import { a as B } from "./chunk-W774OHJB.mjs";
import { b as v } from "./chunk-4JY5UMT2.mjs";
import { e as y } from "./chunk-WLHSDIGQ.mjs";
var k = y(B(), 1);
var ye = y(B(), 1),
  Ie = y(Fe(), 1);
var Ve = y(g(), 1);
function Ee(t) {
  return { ...H(t), transformTemplate: U(t) };
}
function we(t) {
  if (!(t.width === "auto" && t.height === "auto")) return t.width ?? "auto";
}
function Le(t) {
  return ((t.__fromCanvasComponent = !0), (t.width = we(t)), t);
}
var be = { [ee]: !0 };
Object.freeze(be);
function ve({
  node: t,
  combinedValueMap: e,
  frameProps: o,
  getCodeComponentProps: r,
  renderVectorWithIdentifier: i,
}) {
  let n = S(t.dynamicVectorSetIdentifier)
      ? t.resolveValue("dynamicVectorSetIdentifier", e)
      : t.codeComponentIdentifier,
    s = R(n) ? n?.identifier : I(n) && h(n) ? n : void 0,
    a = h(s),
    l = o.id ?? Y(t.id),
    d = t.isVisible(),
    f = (0, ye.useRef)(null);
  G({ id: l, _needsMeasure: o._needsMeasure, visible: d }, f);
  let [c] = q(Le(o));
  return !s || !n || !d
    ? null
    : a
      ? i(s, () => ({
          ...be,
          ...Ee(o.center),
          ...r(),
          ref: f,
          id: l,
          style: c,
          "data-framer-component-type": "Frame",
        }))
      : (0, Ie.isValidElementType)(n)
        ? (0, Ve.jsx)(n, { ...r(), ref: f, id: l, style: c, "data-framer-component-type": "Frame" })
        : null;
}
var m = y(g(), 1);
function he(t) {
  return k.default.forwardRef((e, o) => {
    let r = A(),
      [i, n] = D(r, t);
    switch (i.status) {
      case "loading":
        return (0, m.jsx)("div", {
          className: e.className,
          style: e.style,
          children: (0, m.jsx)(V, {}),
        });
      case "error":
        return (0, m.jsx)("div", {
          className: e.className,
          style: e.style,
          children: (0, m.jsx)(V, { error: { title: i.title, message: i.message } }),
        });
      default: {
        let s = i.definition.class;
        return (0, m.jsx)(n, { children: (0, m.jsx)(s, { ...e, ref: o }) });
      }
    }
  });
}
var Ae = k.default.forwardRef(function ({ tracker: e, identifier: o, getProps: r }, i) {
  let [n, s] = D(e.modulesRuntime, o),
    { id: a, style: l, className: d, ...f } = r();
  switch (n.status) {
    case "loading":
      return (
        a && e.trackLoading(a),
        (0, m.jsx)(M.div, { className: d, style: l, children: (0, m.jsx)(V, {}) })
      );
    case "error":
      return (
        a && e.trackLoaded(a),
        (0, m.jsx)(M.div, {
          className: d,
          style: l,
          children: (0, m.jsx)(V, { error: { title: n.title, message: n.message } }),
        })
      );
    default: {
      let c = n.definition.class;
      return (
        a && e.trackLoaded(a),
        (0, m.jsx)(s, {
          children: (0, m.jsx)(c, {
            ref: i,
            ...f,
            id: a,
            style: l,
            "data-framer-component-type": "Frame",
          }),
        })
      );
    }
  }
});
function ke({ identifier: t }) {
  let e = A();
  return (D(e, t), null);
}
function mt({ tracker: t, node: e, activeLocale: o, combinedValueMap: r, frameProps: i }) {
  return ve({
    node: e,
    combinedValueMap: r,
    frameProps: i,
    getCodeComponentProps() {
      return e.getCodeComponentProps(
        t.componentLoader,
        pe(),
        r,
        o,
        t.createFetchDataValueResolver(e)
      );
    },
    renderVectorWithIdentifier(n, s) {
      let a = S(e.dynamicVectorSetIdentifier)
          ? e.resolveValue("dynamicVectorSetIdentifier", r)
          : e.codeComponentIdentifier,
        l = R(a) ? a.identifier : a;
      return (0, m.jsxs)(m.Fragment, {
        children: [
          l !== e.codeComponentIdentifier &&
          h(e.codeComponentIdentifier) &&
          J(e.codeComponentIdentifier)
            ? (0, m.jsx)(ke, { identifier: e.codeComponentIdentifier })
            : null,
          (0, m.jsx)(Ae, { tracker: t, getProps: s, identifier: n }),
        ],
      });
    },
  });
}
var W = class {
  constructor(e, o, r, i, n) {
    this.tree = e;
    this.componentLoader = o;
    this.collectionNode = r;
    this.locale = i;
    this.visibility = n;
    let s = de(r.variables),
      a = r.getPropertyControls(e, o),
      l = Object.entries(a),
      d = {
        id: { type: "string", isNullable: !1 },
        [w]: { type: "date", isNullable: !0 },
        [L]: { type: "date", isNullable: !0 },
        [F]: { type: "string", isNullable: !0 },
        [E]: { type: "string", isNullable: !0 },
      };
    for (let [u, p] of l) {
      let C = ue(p);
      C && (d[u] = C);
    }
    this.schema = d;
    let f = r.getSortedChildren(n, "group-drafts"),
      c = i ? f.filter((u) => ne(e, u, i.id)) : f;
    for (let u = 0; u < c.length; u++) {
      let p = c.at(u);
      if (!p) continue;
      let C = c[u - 1],
        z = c[u + 1],
        O = {
          id: { type: "string", value: p.id },
          [w]: p.createdAt ? { type: "date", value: new Date(p.createdAt).toISOString() } : null,
          [L]: p.updatedAt ? { type: "date", value: new Date(p.updatedAt).toISOString() } : null,
          [F]: C ? { type: "string", value: C.id } : null,
          [E]: z ? { type: "string", value: z.id } : null,
        };
      for (let [Q, K] of l) {
        let _ = me(Q, K, s, a, p);
        if (!_) continue;
        let Ne = ce({ control: K, controlProp: _, resolvers: this.resolvers, locale: this.locale });
        O[Q] = Ne ?? null;
      }
      let Me = { pointer: String(u), data: O };
      this.items.push(Me);
    }
  }
  tree;
  componentLoader;
  collectionNode;
  locale;
  visibility;
  schema;
  items = [];
  indexes = [];
  assetResolver = fe();
  usedComponents = new Map();
  resolvers = {
    resolveColor: (e) => e,
    resolveFile: (e) => this.assetResolver(e),
    resolveImage: (e, o) => {
      let r = this.assetResolver(e);
      if (!X(r)) return { src: r, ...o };
    },
    resolveLink: (e) => $(this.tree, e),
    resolveRichTextPointer: (e) => e,
    resolveVectorSetItemPointer: (e) => e,
  };
  resolveRichText(e) {
    v(x(e), "Pointer must be rich text");
    for (let o of je(e)) {
      let r = this.componentLoader.reactComponentForIdentifier(o);
      r && this.usedComponents.set(o, r);
    }
    return le(e, {
      componentLoader: this.componentLoader,
      resolveVectorSetItem: (o) => he(o),
      tree: this.tree,
    });
  }
  resolveVectorSetItem(e) {
    return e;
  }
  async scanItems() {
    return this.items;
  }
  async resolveItems(e) {
    return e.map((o) => {
      let r = Number(o),
        i = this.items[r];
      return (v(i, "Item must exist"), i);
    });
  }
  compareItems(e, o) {
    return Number(e.pointer) - Number(o.pointer);
  }
};
function je(t) {
  if (I(t)) return T(t);
  let e = new Set();
  return (
    P(t, {
      module(o) {
        e.add(o.identifier);
      },
    }),
    e
  );
}
var ge = new WeakMap();
function Se(t, e, o, r, i) {
  let n = ge.get(o) ?? [];
  ge.set(o, n);
  let s = n.findIndex((d) => d.visibility === i && d.locale === r),
    a = n[s];
  if (a && ze(a, e)) return a;
  let l = new W(t, e, o, r, i);
  return (s >= 0 ? (n[s] = l) : n.push(l), l);
}
function ze(t, e) {
  for (let [o, r] of t.usedComponents) if (e.reactComponentForIdentifier(o) !== r) return !1;
  return !0;
}
var xe = new WeakMap();
function Te(t, e) {
  let o = xe.get(e);
  if (o) return o;
  let r = new Set();
  r.add("id");
  let i = Ce(t, e),
    n = e.getPrimaryId();
  for (let s of i) s.providerId === n && r.add(s.id);
  return (xe.set(e, r), r);
}
function Gt(t, e) {
  let o = e.collectionPaginationPageSize;
  (t.limit?.type === "LiteralValue" &&
    typeof t.limit.value == "number" &&
    (o = Math.min(o, t.limit.value)),
    (t.limit = { type: "LiteralValue", value: o }));
}
function qt(t, e, o, r, i) {
  let n = new oe(t, e, o);
  return new re(n, r, i);
}
function Pe(t, e, o, r, i, n = "public-only") {
  let s = Z(t, r);
  if (s) return (s.linkTo(o.id), Se(t, e, s, i, n));
  let a = e.dataForIdentifier(r);
  return (v(a, "Data definition not found"), a.class);
}
function Jt(t, e, o, r, i, n, s, a = "public-only") {
  let l = new Set(),
    d = ie(r),
    f = Te(t, r),
    c = new Set(f),
    u = se(o, c, l, d, (C) => Pe(t, e, i, C, n, a));
  return {
    from: ae(r.dataIdentifier, o, l, d, (C) => Pe(t, e, i, C, n, a)),
    select: u,
    where: {
      type: "BinaryOperation",
      operator: "==",
      left: { type: "Identifier", name: "id", collection: d },
      right: { type: "LiteralValue", value: s },
    },
    limit: { type: "LiteralValue", value: 1 },
  };
}
var b = new WeakMap();
function Re(t, e) {
  return t && e
    ? "with-localized-and-initial-values"
    : t
      ? "with-localized-values"
      : e
        ? "with-initial-values"
        : "default";
}
function Qe(t, e, o, r, i) {
  let n = Re(o, r),
    s = i ? b.get(t)?.[n] : void 0;
  if (s) return s;
  let a = new Set();
  for (let l of e) {
    if (N(l)) {
      let d = t.getControlProp(l.id);
      d?.type === "richtext" ? De(d, a, o) : r && j(l.initialValue, a);
      continue;
    }
    te(l) && Ke(t.getControlProp(l.id), l, a, o);
  }
  if (i) {
    let l = b.get(t) ?? {};
    ((l[n] = a), b.set(t, l));
  }
  return a;
}
function De(t, e, o) {
  if (t?.type === "richtext" && (j(t.value, e), !!o))
    for (let r of Object.values(t.valueLocalized ?? {})) j(r?.value, e);
}
function Ke(t, e, o, r) {
  if (t?.type !== "array") return;
  let i = e.itemVariables.filter(N);
  if (i.length !== 0) {
    for (let n of t.value) if (n.value) for (let s of i) De(n.value[s.id], o, r);
  }
}
function j(t, e) {
  if (x(t)) for (let o of _e(t)) e.add(o);
}
function _e(t) {
  if (I(t)) return T(t);
  let e = new Set();
  return (
    P(t, {
      module(o) {
        e.add(o.identifier);
      },
    }),
    e
  );
}
function Xt(t, e = { includeLocalizedValues: !1, includeVariableInitialValues: !1, useCache: !0 }) {
  let o = e.includeLocalizedValues === !0,
    r = e.includeVariableInitialValues === !0,
    i = e.useCache !== !1 && e.collectionItems === void 0,
    n = Re(o, r),
    s = i ? b.get(t)?.[n] : void 0;
  if (s) return s;
  let a = new Set(),
    l = e.collectionItems ?? t.getUnsortedChildren();
  for (let d of l) {
    let f = Qe(d, t.variables, o, r, i);
    for (let c of f) a.add(c);
  }
  if (i) {
    let d = b.get(t) ?? {};
    ((d[n] = a), b.set(t, d));
  }
  return a;
}
export { ve as a, he as b, mt as c, Te as d, Gt as e, qt as f, Pe as g, Jt as h, Xt as i };
//# sourceMappingURL=https://app.framerstatic.com/chunk-FTI7GAEF.mjs.map
