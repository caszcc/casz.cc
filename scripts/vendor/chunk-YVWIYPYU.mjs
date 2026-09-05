import { a as t } from "chunk-QFU6OGL3.mjs";
import { a as l } from "chunk-JTCAKYEM.mjs";
import { a as m } from "chunk-W774OHJB.mjs";
import { e as o } from "chunk-WLHSDIGQ.mjs";
var e = "wc7ts7t";
var v = o(m());
var s = "shr89u9",
  c = "s17ru26r",
  i = "s1i74306",
  n = "sobdcxs",
  a = "c1e16ne2";
var b = o(l());
function S(r) {
  switch (r) {
    case "horizontal":
      return c;
    case "vertical":
      return i;
    case "both":
      return n;
  }
}
var A = v.default.forwardRef(function (
  {
    className: p,
    children: h,
    direction: w = "vertical",
    showScrollbar: u = !1,
    containOverscroll: y,
    ...f
  },
  d
) {
  return (0, b.jsx)("div", {
    ref: d,
    className: t(s, S(w), !u && e, y && a, p),
    ...f,
    children: h,
  });
});
export { e as a, A as b };
//# sourceMappingURL=chunk-YVWIYPYU.mjs.map
