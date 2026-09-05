import { a as o, b as n } from "chunk-273Q3M7H.mjs";
import { b as s } from "chunk-K44FSMQ4.mjs";
import { b as m } from "chunk-4BL4NTEI.mjs";
import { h as i } from "chunk-KPMZENE5.mjs";
var c = i("invite");
async function h(a, t) {
  try {
    let e = await s.post(`/web/projects/${a}/acl`, { ...t, permissions: t.permissions ?? void 0 });
    return { status: 0, aclEntry: { ...e, kind: e.pending ? "invite" : "user" } };
  } catch (e) {
    return o(e)
      ? {
          status: 1,
          editorLimit: e.data.editorLimit,
          licenseType: e.data.licenseType,
          teamId: e.data.teamId,
          teamName: e.data.teamName,
        }
      : n(e)
        ? {
            status: 4,
            projectId: e.data.projectId,
            licenseType: e.data.licenseType,
            editorLimit: e.data.editorLimit,
          }
        : (c.reportError(e), { status: e instanceof m && e.isTemporary ? 2 : 3 });
  }
}
var p = i("invite");
async function g(a, { id: t, role: e, permissions: d }) {
  try {
    return (
      await s.post(`/web/projects/${a}/acl/${t}`, { role: e, permissions: d ?? void 0 }),
      { status: 0 }
    );
  } catch (r) {
    return o(r)
      ? {
          status: 1,
          editorLimit: r.data.editorLimit,
          licenseType: r.data.licenseType,
          teamId: r.data.teamId,
          teamName: r.data.teamName,
        }
      : n(r)
        ? {
            status: 3,
            projectId: r.data.projectId,
            licenseType: r.data.licenseType,
            editorLimit: r.data.editorLimit,
          }
        : (p.reportError(r), { status: 2 });
  }
}
export { h as a, g as b };
//# sourceMappingURL=chunk-UVUCM3RV.mjs.map
