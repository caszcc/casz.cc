import { d as t, e as u } from "chunk-AYNVEX5D.mjs";
import { a as R } from "chunk-W774OHJB.mjs";
import { e as r } from "chunk-WLHSDIGQ.mjs";
var f = r(R());
function i(e, n) {
  if (t(e)) {
    e(n);
    return;
  }
  if (u(e)) {
    e.current = n;
    return;
  }
}
function o(...e) {
  return (n) => {
    e.forEach((c) => {
      i(c, n);
    });
  };
}
function a(...e) {
  return (0, f.useMemo)(() => o(...e), e);
}
export { a };
//# sourceMappingURL=chunk-SGA4DRGG.mjs.map
