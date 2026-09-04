import { b as n } from "./chunk-YWR373UU.mjs";
import { _ as s } from "./chunk-WJKXLTYC.mjs";
import { h as o } from "./chunk-KPMZENE5.mjs";
var p = o("pollProject");
async function P(i, a) {
  let { intervalMillis: c, attempts: r, stopCondition: l } = a;
  try {
    for (let t = 0; t < r; t++) {
      let e = await n.get(`/web/projects/${i}`, {
        includeUsageDataV2: "true",
        includeAiCreditLimit: "true",
      });
      if (l(e)) return { status: 0, project: e };
      t < r - 1 && (await s(c));
    }
    return { status: 1, message: `Polling exceeded ${r} attempts` };
  } catch (t) {
    return (p.reportError(t), { status: 2, error: t });
  }
}
export { P as a };
//# sourceMappingURL=https://app.framerstatic.com/chunk-WUUORSMN.mjs.map
