import { b as T, g as B } from "chunk-QPTL2JCV.mjs";
import { b as u } from "chunk-OGQCKB6U.mjs";
import { c as S } from "chunk-OF47UPEI.mjs";
import { b as P } from "chunk-WUNQ76TS.mjs";
import { a as f } from "chunk-JMQ6KQJV.mjs";
import { a as p } from "chunk-NAOJC7FF.mjs";
import { a as h } from "chunk-V67DAEPT.mjs";
import { a as g } from "chunk-BILIDZA3.mjs";
import { a as l } from "chunk-QFU6OGL3.mjs";
import { a as M } from "chunk-JTCAKYEM.mjs";
import { a as Y } from "chunk-W774OHJB.mjs";
import { c as C } from "chunk-4JY5UMT2.mjs";
import { H as k } from "chunk-VHFKZWVR.mjs";
import { e as y } from "chunk-WLHSDIGQ.mjs";
var c = y(Y());
var N = "cmo005r",
  D = "c1el5atd",
  E = "h1b7gawt",
  R = "hvdfes0",
  A = "ca088ph",
  I = "t1u6i4ej",
  H = "sr94ov4",
  W = "i1wwcg48",
  j = "fuzd4p",
  z = "fyltonr",
  O = "f1si7zjf",
  L = "d2rid4k";
var e = y(M()),
  K = c.default.createContext({});
function w() {
  return c.default.useContext(K);
}
var _ = c.default.forwardRef(function (
  {
    onDismiss: o,
    onConfirm: r,
    keyboardConfirmMode: a = "Enter",
    children: n,
    className: s,
    formClassName: i,
    noSelect: d,
    offsetForDashboardSidebar: b = !1,
    fixPositionAfterMount: x = !1,
    largeModal: F = !1,
    variant: v,
    darkOnDark: V,
    ...G
  },
  q
) {
  let J = c.default.useCallback(
      (m) => {
        (m.preventDefault(), r?.());
      },
      [r]
    ),
    Q = (m) => {
      switch (a) {
        case !1:
          return;
        case "Enter":
          if (
            m.key !== "Enter" ||
            document.activeElement instanceof HTMLButtonElement ||
            document.activeElement instanceof HTMLInputElement
          )
            return;
          r?.();
          break;
        case "CmdOrCtrl+Enter":
          if (!(m.key === "Enter" && k(m))) return;
          r?.();
          break;
        default:
          C(a);
      }
    },
    U = c.default.useMemo(() => ({ onDismiss: o, onConfirm: r }), [o, r]),
    X = v === "darker" ? { variant: v, darkOnDark: V } : { variant: v };
  return (0, e.jsx)(B, {
    visible: !0,
    onKeyDown: Q,
    onDismiss: o,
    className: l(N, s, d && S, b && L, F && D),
    ref: q,
    fixPositionAfterMount: x,
    ...X,
    ...G,
    children: (0, e.jsx)(K.Provider, {
      value: U,
      children: (0, e.jsx)("form", {
        onSubmit: J,
        className: i,
        children: (0, e.jsx)(f, { direction: "column", gap: 0, children: n }),
      }),
    }),
  });
});
function $({
  separator: t = !0,
  closeButton: o = !1,
  className: r,
  children: a,
  accessory: n,
  onDismiss: s,
}) {
  let i = T(),
    { onDismiss: d } = w(),
    x = o
      ? (0, e.jsx)(g, {
          variant: "link",
          title: "Close",
          className: A,
          onClick: s ?? d,
          children: (0, e.jsx)(P, {}),
        })
      : null;
  return (0, e.jsxs)(f, {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    className: l(E, t && R, r),
    children: [
      u(a) ? (0, e.jsx)(p, { id: i, children: a }) : (0, e.jsx)("span", { id: i, children: a }),
      n
        ? (0, e.jsxs)(f, {
            direction: "row",
            alignItems: "center",
            gap: h.css.modalGap,
            children: [n, x],
          })
        : x,
    ],
  });
}
function ee({ children: t, className: o }) {
  return (0, e.jsx)(f, { className: o, gap: h.css.modalGap, children: t });
}
function oe({ children: t, className: o }) {
  return (0, e.jsx)("span", {
    className: l(I, o),
    children: u(t) ? (0, e.jsx)(p, { children: t }) : t,
  });
}
function te({ className: t }) {
  return (0, e.jsx)("span", { className: l(H, t) });
}
function re({ src: t, alt: o, className: r }) {
  return (0, e.jsx)("img", { src: t, alt: o, className: l(W, r), decoding: "async" });
}
function ae({ children: t, separator: o, className: r, direction: a = "row" }) {
  return (0, e.jsx)(f, {
    direction: a,
    gap: h.css.modalGap,
    justifyContent: "space-between",
    className: l(j, a === "row" && z, o && O, r),
    children: t,
  });
}
var ne = c.default.forwardRef(function ({ bold: o = !0, onClick: r, children: a, ...n }, s) {
    let { onDismiss: i } = w();
    return (0, e.jsx)(g, {
      ref: s,
      bold: o,
      onClick: r ?? i,
      ...n,
      children: u(a) ? (0, e.jsx)(p, { children: a }) : a,
    });
  }),
  se = c.default.forwardRef(function (
    { bold: o = !0, variant: r = "primary", onClick: a, type: n = "button", children: s, ...i },
    d
  ) {
    let { onConfirm: b } = w();
    return (0, e.jsx)(g, {
      ref: d,
      bold: o,
      variant: r,
      onClick: a ?? (n === "submit" ? void 0 : b),
      type: n,
      ...i,
      children: u(s) ? (0, e.jsx)(p, { children: s }) : s,
    });
  }),
  ke = {
    Root: _,
    Header: $,
    Content: ee,
    Text: oe,
    Separator: te,
    Image: re,
    Footer: ae,
    CancelButton: ne,
    ActionButton: se,
  };
export { ke as a };
//# sourceMappingURL=chunk-WU3FLKO7.mjs.map
