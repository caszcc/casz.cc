import { Wb as s } from "chunk-3J64XJNF.mjs";
var t = new WeakMap();
function i(n, e) {
  let o = t.get(e);
  if (o) return o;
  let a = [];
  if ((s(n, e, "includeInherited", "readsRawNodeData", void 0, (r) => a.push(r)), e.children))
    for (let r of e.children) {
      let c = i(n, r);
      a.push(...c);
    }
  return (t.set(e, a), a);
}
export { i as a };
//# sourceMappingURL=chunk-LAXTKF5D.mjs.map
