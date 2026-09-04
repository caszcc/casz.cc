import { Xq as m } from "./chunk-7T4JEMTU.mjs";
function A(i, n, t) {
  let e = new O(t);
  return (e.diff([], i, n), e.toResults());
}
var d = Symbol("missing"),
  O = class {
    constructor(n = {}) {
      this.options = n;
    }
    options;
    results = [];
    report(n, t, e, r) {
      let f = "",
        p = r?.id,
        s = r?.__class ?? r?.constructor?.name;
      p && s
        ? (f = ` (id: ${p} class: ${s})`)
        : p
          ? (f = ` (id: ${p})`)
          : s && s !== "Object" && (f = ` (class: ${s})`);
      let g = n.length > 0 ? n.join(".") : "(top)";
      this.results.push(`${g}: ${j(t)} != ${j(e)}${f}`);
    }
    reportDiff(n, t, e) {
      let r = n.length > 0 ? n.join(".") : "(top)";
      this.results.push(`${r}: ${t} != ${e}`);
    }
    toResults() {
      return this.results.length === 0
        ? null
        : this.results.join(`
`);
    }
    diff(n, t, e, r) {
      if (t === e) return;
      let f = typeof t;
      if (f !== typeof e) {
        this.report(n, t, e, r);
        return;
      }
      if (!t || !e) {
        if (Number.isNaN(t) && Number.isNaN(e)) return;
        this.report(n, t, e, r);
        return;
      }
      if (f === "function") {
        if (t.toString() === e.toString()) return;
        this.report(n, t, e);
        return;
      } else if (Array.isArray(t)) {
        if (!Array.isArray(e)) {
          this.report(n, t, e, r);
          return;
        }
        for (let s = 0, g = Math.max(t.length, e.length); s < g; s++) {
          let c = t[s],
            u = e[s];
          if (c === u) continue;
          let y = c === void 0 && t.length <= s,
            o = u === void 0 && e.length <= s;
          if (y || o) {
            if (
              this.options.ignoreMissingOrUndefined &&
              ((y && u === void 0) || (o && c === void 0))
            )
              continue;
            this.report(n.concat(String(s)), y ? d : c, o ? d : u, r);
          } else this.diff(n.concat(String(s)), c, u, void 0);
        }
      } else if (f === "object") {
        if (!this.options.ignorePrototypes) {
          let o = Object.getPrototypeOf(t),
            l = Object.getPrototypeOf(e);
          o !== l && this.reportDiff(n.concat("prototype"), w(o), w(l));
        }
        let s,
          g,
          c = $,
          u = $;
        (m(t) ? ((s = t.keys()), (c = P)) : (s = Object.keys(t)),
          m(e) ? ((g = e.keys()), (u = P)) : (g = Object.keys(e)));
        let y = new Set([...s, ...g]);
        for (let o of y) {
          if (this.options.ignoreKeys?.(o)) continue;
          let l = !c(t, o),
            h = !u(e, o),
            a = t[o],
            k = e[o];
          if (l || h) {
            if (
              (this.options.ignoreMissingOrUndefined &&
                ((l && k === void 0) || (h && a === void 0))) ||
              (this.options.ignoreKnownDynamicKeys &&
                (o.startsWith("$control__") ||
                  o.startsWith("$componentPreset__") ||
                  o.startsWith("$plugin__")))
            )
              continue;
            this.report(n.concat(o), l ? d : a, h ? d : k, t);
          } else this.diff(n.concat(o), a, k, t);
        }
      } else this.report(n, t, e, r);
    }
  };
function j(i) {
  if (i === void 0) return "undefined";
  if (i === d) return "missing";
  if (Number.isNaN(i)) return "NaN";
  let n;
  try {
    n = JSON.stringify(i);
  } catch {
    n = String(i);
  }
  if (!n)
    if (typeof i == "function") {
      let t = String(i)?.replace(/\s+/gu, " ");
      t.startsWith("function") || t.startsWith("class") ? (n = `[${t}]`) : (n = `[Function ${t}]`);
    } else ((n = String(i)), n || (n = typeof i));
  return n.length <= 30 ? n : n.slice(0, 27) + "...";
}
function w(i) {
  return i?.constructor?.name ?? j(i);
}
var N = Object.prototype.hasOwnProperty;
function $(i, n) {
  return N.call(i, n);
}
function P(i, n) {
  return i.hasProp(n);
}
export { A as a };
//# sourceMappingURL=https://app.framerstatic.com/chunk-REHAB5PL.mjs.map
