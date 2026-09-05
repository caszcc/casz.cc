import { a as o } from "chunk-VWL7KAXC.mjs";
import { c as r } from "chunk-EKYJNLIX.mjs";
import { b as e } from "chunk-VZJCJAEC.mjs";
import { a as s } from "chunk-JTCAKYEM.mjs";
import { e as i } from "chunk-WLHSDIGQ.mjs";
var n = "cq2i6r2",
  p = "o199fue7",
  c = "o16gpm6";
var t = i(s(), 1);
function y({ avatar: l, displayName: m, organization: a }) {
  let f = r(m);
  return (0, t.jsxs)("div", {
    className: n,
    children: [
      (0, t.jsx)(o, { color: e.tint, src: l || void 0, text: f }),
      a &&
        (0, t.jsx)(o, {
          size: "small",
          src: a.avatar || void 0,
          textCustomStyles: c,
          avatarCustomStyles: p,
          color: "#fff",
          text: r(a.displayName),
        }),
    ],
  });
}
export { y as a };
//# sourceMappingURL=chunk-7G3OWHRX.mjs.map
