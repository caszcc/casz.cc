import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  F as i,
  I as a,
  L as o,
  M as s,
  N as c,
  O as l,
  P as u,
  R as d,
  S as f,
  T as p,
  _ as m,
  a as h,
  b as g,
  c as _,
  d as v,
  f as y,
  g as b,
  h as x,
  i as S,
  j as C,
  k as w,
  l as T,
  o as E,
  p as D,
  s as ee,
  u as O,
  v as k,
  w as te,
  x as A,
  y as ne,
  z as j,
} from "./react.Dfbt0i5D.mjs";
import {
  A as re,
  B as ie,
  C as M,
  D as ae,
  E as oe,
  F as se,
  G as N,
  H as ce,
  I as le,
  J as ue,
  K as de,
  L as fe,
  M as pe,
  N as me,
  O as he,
  P as ge,
  Q as _e,
  R as P,
  S as ve,
  T as F,
  U as ye,
  V as I,
  W as be,
  X as L,
  Y as xe,
  Z as Se,
  _ as Ce,
  a as we,
  b as Te,
  c as Ee,
  d as De,
  f as Oe,
  g as ke,
  h as R,
  i as Ae,
  j as je,
  k as Me,
  l as Ne,
  m as Pe,
  n as Fe,
  o as Ie,
  p as Le,
  q as Re,
  r as ze,
  s as Be,
  u as Ve,
  v as He,
  w as Ue,
  x as We,
  y as Ge,
  z as Ke,
} from "./motion.DPkvUqHs.mjs";
function qe(e) {
  return typeof e == `function`;
}
function Je(e) {
  return typeof e == `boolean`;
}
function z(e) {
  return typeof e == `string`;
}
function B(e) {
  return Number.isFinite(e);
}
function Ye(e) {
  return Array.isArray(e);
}
function V(e) {
  return typeof e == `object` && !!e && !Ye(e);
}
function Xe(e) {
  for (let t in e) return !1;
  return !0;
}
function Ze(e) {
  return e === void 0;
}
function Qe(e) {
  return e === null;
}
function $e(e) {
  return e == null;
}
function et(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function tt(e) {
  return V(e) && qe(e.return);
}
function nt(e) {
  return V(e) && qe(e.then);
}
function rt(e) {
  return e instanceof Promise;
}
function it(e) {
  return `url('${at(e)}')`;
}
function at(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function ot(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function st(e, t, n) {
  if (Jg.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (Jg.set(e, t), t))
    .catch((t) => {
      throw (Jg.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(Bg), Jg.set(e, r));
}
function ct(e, t) {
  Vg && (Yg.set(e, t), Xg.has(e) && st(e, t, `registered loader ${e}`));
}
function lt() {
  if (!Vg) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(Zg),
      i = r ? e.slice(Zg.length) : e;
    if (!i) continue;
    Xg.add(i);
    let a = Yg.get(i);
    a ? st(i, a, `registered loader ${i}`) : r && st(i, () => import(n), n);
  }
}
function ut(e) {
  return typeof e == `object` && !!e && !D(e) && $g in e;
}
function dt(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function ft(e, t = `default`, n) {
  n && ct(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !Jg.has(n)) return;
      let e = Jg.get(n);
      rt(e) ? s(() => e) : (i = dt(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = dt(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    l = !1,
    u = m(function (t, r) {
      if (
        (c(() => {
          l = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && Qg !== void 0 && Qg.add(n), !i)) throw s(e);
      return T(i, { ref: r, ...t });
    });
  return (
    (u.preload = () => (o(), s(e))),
    (u.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: l })),
    u
  );
}
function pt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function mt(e) {
  return e === null || !(t_ in e) ? !1 : typeof e.equals == `function`;
}
function ht(e, t) {
  return e === t || (e !== e && t !== t);
}
function gt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!ht(e[r], t[r])) return !1;
  return !0;
}
function _t(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Ct(e[r], t[r], !0)) return !1;
  return !0;
}
function vt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!ht(r, t.get(n))) return !1;
  return !0;
}
function yt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Ct(r, t.get(n), !0)) return !1;
  return !0;
}
function bt(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function xt(e, t) {
  let n = e_(e);
  if (n.length !== e_(t).length) return !1;
  for (let r of n)
    if (!pt(t, r) || (!(r === `_owner` && pt(e, `$$typeof`) && e.$$typeof) && !ht(e[r], t[r])))
      return !1;
  return !0;
}
function St(e, t) {
  let n = e_(e);
  if (n.length !== e_(t).length) return !1;
  for (let r of n)
    if (!pt(t, r) || (!(r === `_owner` && pt(e, `$$typeof`) && e.$$typeof) && !Ct(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Ct(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? _t(e, t) : gt(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? yt(e, t) : vt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return bt(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? mt(e) && mt(t)
        ? e.equals(t)
        : n
          ? St(e, t)
          : xt(e, t)
      : !1;
}
function wt(e, t, n = !0) {
  try {
    return Ct(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function Tt(e) {
  return A.useCallback((t) => e[t], [e]);
}
function Et({ api: e, children: t }) {
  return T(n_.Provider, { value: e, children: t });
}
function Dt() {
  return A.useContext(n_);
}
function Ot({ routes: e, children: t }) {
  let n = Tt(e),
    r = C(() => ({ getRoute: n }), [n]);
  return T(n_.Provider, { value: r, children: t });
}
function kt() {
  let e = Dt(),
    n = t(r_),
    r = n?.routeId ?? e.currentRouteId,
    i = n?.routeId ? n.pathVariables : e.currentPathVariables,
    a = r ? e.getRoute?.(r) : void 0;
  return C(() => {
    if (!(!r || !a)) return { ...a, id: r, pathVariables: i };
  }, [r, i, a]);
}
function At() {
  let e = kt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function jt(e) {
  let t = kt(),
    n = A.useRef(t);
  wt(n.current, t) || !t || ((n.current = t), e(t));
}
function Mt(e) {
  let t = Dt();
  if (e) return t.getRoute?.(e);
}
function Nt(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Pt(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Ft(e, t) {
  let n = kt(),
    r = Mt(t) ?? n;
  return A.useMemo(() => (r ? Nt(r, e) : e), [e, r]);
}
function H(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function U(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function It(e) {
  return e === null || (typeof e != `object` && typeof e != `function`);
}
function Lt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === v_
  );
}
function Rt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function zt(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function Bt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = zt(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Vt(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function Ht(e) {
  return y_.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function Ut(e) {
  return !(!Number.isInteger(e) || e < 0 || e > g_);
}
function Wt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > h_);
}
function Gt(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return Ut(+e);
}
function Kt(e) {
  let t = Object.keys(e);
  for (var n = t.length - 1; n >= 0 && !Gt(t[n]); n--);
  return ((t.length = n + 1), t);
}
function qt(e) {
  return new Uint8Array(e).toBase64();
}
function Jt(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function Yt(e) {
  return Buffer.from(e).toString(`base64`);
}
function Xt(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function Zt(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function Qt(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function $t(e, t) {
  return en(JSON.parse(e), t);
}
function en(e, t) {
  if (typeof e == `number`) return a(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length),
    i = null;
  function a(e, o = !1) {
    if (e === c_) return;
    if (e === u_) return NaN;
    if (e === d_) return 1 / 0;
    if (e === f_) return -1 / 0;
    if (e === p_) return -0;
    if (o || typeof e != `number`) throw Error(`Invalid input`);
    if (e in r) return r[e];
    let s = n[e];
    if (!s || typeof s != `object`) r[e] = s;
    else if (Array.isArray(s))
      if (typeof s[0] == `string`) {
        let o = s[0],
          c = t && Object.hasOwn(t, o) ? t[o] : void 0;
        if (c) {
          let t = s[1];
          if ((typeof t != `number` && (t = n.push(s[1]) - 1), (i ??= new Set()), i.has(t)))
            throw Error(`Invalid circular reference`);
          return (i.add(t), (r[e] = c(a(t))), i.delete(t), r[e]);
        }
        switch (o) {
          case `Date`:
            r[e] = new Date(s[1]);
            break;
          case `Set`:
            let t = new Set();
            r[e] = t;
            for (let e = 1; e < s.length; e += 1) t.add(a(s[e]));
            break;
          case `Map`:
            let i = new Map();
            r[e] = i;
            for (let e = 1; e < s.length; e += 2) i.set(a(s[e]), a(s[e + 1]));
            break;
          case `RegExp`:
            r[e] = new RegExp(s[1], s[2]);
            break;
          case `Object`: {
            let t = s[1];
            if (typeof n[t] == `object` && n[t][0] !== `BigInt`) throw Error(`Invalid input`);
            r[e] = Object(a(t));
            break;
          }
          case `BigInt`:
            r[e] = BigInt(s[1]);
            break;
          case `null`:
            let c = Object.create(null);
            r[e] = c;
            for (let e = 1; e < s.length; e += 2) {
              if (s[e] === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              c[s[e]] = a(s[e + 1]);
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (n[s[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = globalThis[o],
              i = a(s[1]);
            r[e] = s[2] === void 0 ? new t(i) : new t(i, s[2], s[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = s[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            let n = C_(t);
            r[e] = n;
            break;
          }
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`: {
            let t = o.slice(9);
            r[e] = Temporal[t].from(s[1]);
            break;
          }
          case `URL`: {
            let t = new URL(s[1]);
            r[e] = t;
            break;
          }
          case `URLSearchParams`: {
            let t = new URLSearchParams(s[1]);
            r[e] = t;
            break;
          }
          default:
            throw Error(`Unknown type ${o}`);
        }
      } else if (s[0] === m_) {
        let t = s[1];
        if (!Wt(t)) throw Error(`Invalid input`);
        let n = [];
        ((r[e] = n), (n[g_] = void 0), delete n[g_]);
        for (let e = 2; e < s.length; e += 2) {
          let r = s[e];
          if (!Ut(r) || r >= t) throw Error(`Invalid input`);
          n[r] = a(s[e + 1]);
        }
        n.length = t;
      } else {
        let t = Array(s.length);
        r[e] = t;
        for (let e = 0; e < s.length; e += 1) {
          let n = s[e];
          n !== l_ && (t[e] = a(n));
        }
      }
    else {
      let t = {};
      r[e] = t;
      for (let e of Object.keys(s)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        let n = s[e];
        t[e] = a(n);
      }
    }
    return r[e];
  }
  return a(0);
}
function tn(e, t) {
  let n = nn(!1, e, t);
  return typeof n == `string` ? n : `[${n.join(`,`)}]`;
}
function nn(e, t, n) {
  let r = [],
    i = new Map(),
    a = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) a.push({ key: e, fn: n[e] });
  let o = [],
    s = 0;
  function c(n, l) {
    if (n === void 0) return c_;
    if (Number.isNaN(n)) return u_;
    if (n === 1 / 0) return d_;
    if (n === -1 / 0) return f_;
    if (n === 0 && 1 / n < 0) return p_;
    if (i.has(n)) return i.get(n);
    ((l ??= s++), i.set(n, l));
    for (let { key: e, fn: t } of a) {
      let i = t(n);
      if (i) return ((r[l] = `["${e}",${c(i)}]`), l);
    }
    if (typeof n == `function`) throw new __(`Cannot stringify a function`, o, n, t);
    if (typeof n == `symbol`) throw new __(`Cannot stringify a Symbol primitive`, o, n, t);
    let u = ``;
    if (It(n)) u = rn(n);
    else if (typeof n.then == `function`) {
      if (!e)
        throw new __(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          o,
          n,
          t
        );
      u = Promise.resolve(n).then((e) => {
        let t = c(e, l);
        t < 0 && (r[l] = t);
      });
    } else {
      let e = Rt(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          u = `["Object",${c(n.valueOf())}]`;
          break;
        case `Date`:
          u = `["Date","${isNaN(n.getDate()) ? `` : n.toISOString()}"]`;
          break;
        case `URL`:
          u = `["URL",${Bt(n.toString())}]`;
          break;
        case `URLSearchParams`:
          u = `["URLSearchParams",${Bt(n.toString())}]`;
          break;
        case `RegExp`:
          let { source: r, flags: i } = n;
          u = i ? `["RegExp",${Bt(r)},"${i}"]` : `["RegExp",${Bt(r)}]`;
          break;
        case `Array`: {
          let e = !1;
          u = `[`;
          for (let t = 0; t < n.length; t += 1)
            if ((t > 0 && (u += `,`), Object.hasOwn(n, t)))
              (o.push(`[${t}]`), (u += c(n[t])), o.pop());
            else if (e) u += l_;
            else {
              let t = Kt(n),
                r = t.length,
                i = String(n.length).length;
              if ((n.length - r) * 3 > 4 + i + r * (i + 1)) {
                u = `[` + m_ + `,` + n.length;
                for (let e = 0; e < t.length; e++) {
                  let r = t[e];
                  (o.push(`[${r}]`), (u += `,` + r + `,` + c(n[r])), o.pop());
                }
                break;
              } else ((e = !0), (u += l_));
            }
          u += `]`;
          break;
        }
        case `Set`:
          u = `["Set"`;
          for (let e of n) u += `,${c(e)}`;
          u += `]`;
          break;
        case `Map`:
          u = `["Map"`;
          for (let [e, t] of n)
            (o.push(`.get(${It(e) ? rn(e) : `...`})`), (u += `,${c(e)},${c(t)}`), o.pop());
          u += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`:
        case `DataView`: {
          let t = n;
          ((u = `["` + e + `",` + c(t.buffer)),
            t.byteLength !== t.buffer.byteLength && (u += `,${t.byteOffset},${t.length}`),
            (u += `]`));
          break;
        }
        case `ArrayBuffer`:
          u = `["ArrayBuffer","${S_(n)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          u = `["${e}",${Bt(n.toString())}]`;
          break;
        default:
          if (!Lt(n)) throw new __(`Cannot stringify arbitrary non-POJOs`, o, n, t);
          if (Vt(n).length > 0) throw new __(`Cannot stringify POJOs with symbolic keys`, o, n, t);
          if (Object.getPrototypeOf(n) === null) {
            u = `["null"`;
            for (let e of Object.keys(n)) {
              if (e === `__proto__`)
                throw new __(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (o.push(Ht(e)), (u += `,${Bt(e)},${c(n[e])}`), o.pop());
            }
            u += `]`;
          } else {
            u = `{`;
            let e = !1;
            for (let r of Object.keys(n)) {
              if (r === `__proto__`)
                throw new __(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (e && (u += `,`), (e = !0), o.push(Ht(r)), (u += `${Bt(r)}:${c(n[r])}`), o.pop());
            }
            u += `}`;
          }
      }
    }
    return ((r[l] = u), l);
  }
  let l = c(t);
  return l < 0 ? `${l}` : r;
}
function rn(e) {
  let t = typeof e;
  return t === `string`
    ? Bt(e)
    : e === void 0
      ? c_.toString()
      : e === 0 && 1 / e < 0
        ? p_.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function an(e, t, n = `lazy`) {
  switch ((J.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function on(e) {
  return z(e) && (e === `` || T_.test(e));
}
function sn() {
  return { [E_.QueryCache]: new Map(), [E_.CollectionUtilsCache]: new Map() };
}
function cn() {
  if (!Vg) return;
  if (D_ !== void 0) return D_;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      D_ = $t(e.text) ?? sn();
    } catch (e) {
      ((D_ = sn()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      Wg(() => {
        (e?.remove(), (e = null));
      }),
      D_
    );
  }
}
function ln(e, t) {
  let n = cn();
  return n ? n[e].has(t) : !1;
}
function un(e, t) {
  let n = cn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function dn(e) {
  return e?.id ?? a_;
}
function fn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function pn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (j_.has(n)) return j_.get(n);
    let r = new N_(n, t);
    return (j_.set(n, r), r);
  };
}
function mn({ children: e, collectionUtils: t }) {
  let n = C(() => ({ get: pn(t) }), [t]);
  return T(M_.Provider, { value: n, children: e });
}
function hn() {
  return t(M_);
}
function gn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function _n() {
  return d === void 0 ? void 0 : d;
}
function vn() {
  let e = _n();
  return e ? P_.test(e.platform) : !1;
}
function yn() {
  let e = _n();
  return e
    ? F_.test(e.platform)
      ? !0
      : I_.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function bn() {
  return vn() || yn();
}
function xn() {
  let e = _n();
  return e ? L_.test(e.userAgent) : !1;
}
function Sn() {
  let e = _n();
  return e ? R_.test(e.userAgent) && z_.test(e.vendor) && !xn() : !1;
}
function Cn() {
  let e = _n();
  return e ? B_.test(e.userAgent) && V_.test(e.vendor) : !1;
}
function wn() {
  let e = _n();
  return e ? H_.test(e.userAgent) : !1;
}
function Tn() {
  return typeof document == `object`;
}
function En() {
  let e = _n();
  if (!e) return -1;
  let t = U_.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function Dn() {
  let e = _n();
  return e ? W_.test(e.userAgent) : !1;
}
function On() {
  return !1;
}
function kn() {
  let e = _n();
  return e && G_.test(e.userAgent) ? `tablet` : e && K_.test(e.userAgent) ? `phone` : `desktop`;
}
function An() {
  return kn() === `desktop`;
}
function jn(e) {
  return bn() ? e.metaKey : e.ctrlKey;
}
function Mn() {}
function Nn(e) {
  return typeof e == `function` ? e() : e;
}
function Pn() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function Fn(e, t) {
  let n = e?.priority,
    r = Pn();
  return n === `background`
    ? (t?.() ?? gn(1))
    : r?.yield
      ? r.yield(e).catch(Mn)
      : r?.postTask
        ? r.postTask(Mn, e).catch(Mn)
        : t
          ? t()
          : n === `user-blocking`
            ? X_
            : gn(0);
}
function In(e, t, n) {
  let r = -1 / 0,
    i,
    a = new Set();
  function o() {
    for (let e of a) e();
    a.clear();
  }
  function s() {
    return document.hidden ? (o(), !0) : !1;
  }
  function c() {
    Tn() && (document.addEventListener(`visibilitychange`, s), j.addEventListener(`pagehide`, o));
  }
  function l(n) {
    return new Promise((r) => {
      (setTimeout(r, Z_),
        e(() => {
          Fn(n, t).then(r);
        }));
    });
  }
  function u(e) {
    return Tn()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), a.delete(r), t());
            };
          (a.add(r), s() || c(), e.then(r, r));
        })
      : e;
  }
  function d(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? l(a) : Fn(a, t);
    return i ? u(o) : o;
  }
  function f(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let a = d(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (r = performance.now()),
          n && e.pendingPaintYieldCount--,
          i === e && e.pendingPaintYieldCount === 0 && (i = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      a.then(
        () => c(!0),
        () => c(!0)
      ),
      a
    );
  }
  function p(e, t) {
    let a = i;
    if (!a) {
      let n = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? q_ : J_),
        s = Tn() && document.hidden ? Y_ : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return f(a, e, o);
  }
  function m(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !Tn() && !t ? (n ? void 0 : X_) : n ? p(i, r) : d(i);
  }
  return m;
}
function Ln() {
  let e = hn(),
    { getRoute: t } = Dt();
  return s(
    (n, r, i) => {
      if (!n || !t) return;
      let a = t(n),
        { pathVariables: o, locale: s } = r;
      return zn(a, { routeId: n, pathVariables: o, locale: s, collectionUtils: e }, i);
    },
    [t, e]
  );
}
function Rn(e, t = !0) {
  let n = Ln();
  c(() => {
    if (!(!t || !ev)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function zn(e, t, n = {}) {
  if (!ev || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!(!o || !ut(o))) {
    i && (await $_({ priority: r }));
    try {
      let e = await o.preload();
      a && t && e && (await Bn(e, t, r));
    } catch {}
  }
}
async function Bn(e, t, n) {
  let r = e.loader;
  if (!r?.load) return;
  let i = {
    signal: t.signal ?? new AbortController().signal,
    pathVariables: t.pathVariables ?? {},
    routeId: t.routeId,
    locale: t.locale,
    priority: n,
    collectionUtils: t.collectionUtils,
  };
  try {
    await r.load({}, i);
  } catch {}
}
function Vn(e, t) {
  return e.replace(tv, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Hn(e, t = !1) {
  let n = ``;
  if (j !== void 0)
    if (t) n = j.location.search;
    else {
      let e = j.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? j.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? Un(n, e) : e;
}
function Un(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== nv && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Wn(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(tv)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !z(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = rt(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = rt(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = rt(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function Gn(e, t) {
  return t ? `/${t}${e}` : e;
}
async function Kn({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await Wn(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = Gn(u.path, t.slug)),
    o && u.path && (u.path = Hn(u.path, !0)),
    u
  );
}
function qn() {
  if (rv) return;
  rv = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (j.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((j.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), an(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function Jn({ children: e, value: t }) {
  return T(iv.Provider, { value: t, children: e });
}
function Yn() {
  return A.useContext(iv);
}
function Xn(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function Zn(e) {
  let t = av,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < ov;) ((n = e.next(t)), r.push(n.value), (t += av));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - av }
  );
}
function Qn(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function $n(e) {
  let { innerWidth: t, innerHeight: n } = j,
    [r, i] = Qn(e.x),
    [a, o] = Qn(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function er(e) {
  let [t, n] = Qn(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function tr(e) {
  let { x: t, y: n } = $n(e);
  return Math.hypot(Math.max(t, j.innerWidth - t), Math.max(n, j.innerHeight - n));
}
function nr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function rr(e) {
  return e ? lv[e] : void 0;
}
function ir(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (ar(t)) {
    let { easing: e, duration: n } = Zn(
      ae({ keyframes: [0, 1], ...or(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = rr(n?.mask?.type),
    o = nr(n, `start`, e, a),
    s = nr({ ...uv, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function ar(e) {
  return e.type === `spring`;
}
function or(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function sr({ exit: e = fv, enter: t }) {
  let n = document.createElement(`style`);
  n.id = dv;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += ir(`exit`, e)),
    (r += ir(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function cr() {
  Wg(() => {
    R.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(dv);
      e && document.head.removeChild(e);
    });
  });
}
function lr() {
  return !!document.startViewTransition;
}
function ur(e) {
  return new Promise((t) => {
    R.render(() => {
      (performance.mark(`framer-vt-style`), sr(e), t());
    });
  });
}
async function dr(e, t, n) {
  if (!lr()) {
    e();
    return;
  }
  if ((await ur(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(pv),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), cr());
      })
      .catch(pv),
    r
  );
}
function fr() {
  let e = Yn(),
    t = l(void 0);
  return (
    c(() => {
      t.current &&= (t.current(), void 0);
    }),
    s(
      (n, r, i, a) => {
        let o = Xn(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return dr(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function pr(e, t) {
  Wg(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function mr(e, t) {
  Wg(() => {
    let n = document.querySelector(`link[rel='canonical'][data-framer-generated-canonical]`);
    if (
      !e ||
      document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)
    ) {
      n?.remove();
      return;
    }
    let r = new URL(e, t ?? document.baseURI);
    ((r.search = ``), (r.hash = ``));
    let i = n ?? document.createElement(`link`);
    (i.setAttribute(`rel`, `canonical`),
      i.setAttribute(`data-framer-generated-canonical`, ``),
      i.setAttribute(`href`, r.toString()),
      document.head.append(i));
  });
}
function hr(e) {
  Wg(() => {
    let t = Array.from(
      document.querySelectorAll(`link[rel='alternate'][hreflang][data-framer-generated-hreflang]`)
    );
    if (document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)) {
      for (let e of t) e.remove();
      return;
    }
    let n = new Map();
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      t && n.set(t, e);
    }
    let r = new Set();
    for (let { href: t, hrefLang: i } of e) {
      r.add(i);
      let e = n.get(i) ?? document.createElement(`link`);
      (e.setAttribute(`rel`, `alternate`),
        e.setAttribute(`data-framer-generated-hreflang`, ``),
        e.setAttribute(`href`, t),
        e.setAttribute(`hreflang`, i),
        document.head.append(e));
    }
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      (!t || !r.has(t)) && e.remove();
    }
  });
}
function gr(e, t, n, r = f) {
  r(() => {
    let t = async (e) => (await $_({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function _r(e) {
  let t = l(new Set());
  return (
    gr(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    s(
      (n) => {
        let r,
          i = new Promise((e) => {
            ((r = e), t.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: n, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: n,
            ignore: () => {
              ((s = !0), r && (t.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function vr(e) {
  return V(e) && `routeId` in e;
}
function yr(e = j.history.state) {
  return vr(e) ? e : void 0;
}
function br(e) {
  return e?.entryId;
}
function xr(e) {
  gv = e;
}
function Sr() {
  return gv;
}
function Cr() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function wr(e, t) {
  return Tr(e, br(e) ?? br(t));
}
function Tr(e, t = Cr()) {
  return { ...e, entryId: t };
}
function Er(e, t) {
  (performance.mark(`framer-history-replace`), xr(wr(e, yr())), t && pr(t, j.location.href));
  let n =
    !t || t === j.location.href
      ? j.History.prototype.replaceState.bind(j.history)
      : j.history.replaceState.bind(j.history);
  try {
    n(gv, ``, t);
  } catch {}
}
function Dr(e) {
  (performance.mark(`framer-history-replace`),
    xr(Tr(e)),
    History.prototype.replaceState.call(j.history, gv, ``, void 0));
}
function Or(e, t) {
  (performance.mark(`framer-history-push`), xr(Tr(e)), pr(t, j.location.href), qn());
  try {
    j.history.pushState(gv, ``, t);
  } catch {}
}
function kr({ disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r }) {
  f(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let i = j.location.hash ? j.location.hash.slice(1) : void 0;
    Er({ ...yr(), routeId: t, hash: i, pathVariables: n, localeId: r });
  }, []);
}
function Ar(e, t, n) {
  let r = fr(),
    i = _r(`framer-route-change`),
    { onHistoryTraversal: a, usesCustomScrollRestoration: o } = e,
    u = o ? `manual` : `after-transition`,
    d = l(void 0),
    f = s(() => {
      (d.current?.resolve(), (d.current = void 0));
    }, []),
    p = s(
      async ({ state: e }) => {
        if (!vr(e)) return;
        let o = i({ popstate: !0 }),
          s = Pt();
        (o.promise.finally(s), br(Sr()) !== (br(e) ?? br(yr())) && a(), xr(e));
        let { routeId: c, hash: l, pathVariables: d, localeId: p } = e,
          m = z(l) ? l : j.location.hash ? j.location.hash.slice(1) : void 0,
          h = !1,
          g = () => {
            h ||=
              (n(
                c,
                z(p) ? p : void 0,
                m,
                j.location.pathname + j.location.search + j.location.hash,
                V(d) ? d : void 0,
                !0,
                o,
                !1
              ),
              !0);
          },
          _ = u === `after-transition`;
        (await Promise.resolve(r(t.current, c, g))
          .then((e) => e?.updateCallbackDone)
          .catch(g)
          .finally(() => {
            _ || f();
          }),
          await o.promise,
          _ && f(),
          await j.navigation?.transition?.finished.catch(Bg),
          hv(),
          pr(j.location.href));
      },
      [t, i, a, f, n, r, u]
    ),
    m = s(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        vr(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                d.current = { resolve: e, reject: t };
              }),
                (d.current = void 0));
            },
            scroll: u,
          });
      },
      [u]
    );
  c(
    () => (
      j.addEventListener(`popstate`, p),
      _v && j.navigation.addEventListener(`navigate`, m),
      () => {
        (j.removeEventListener(`popstate`, p),
          _v && j.navigation.removeEventListener(`navigate`, m));
      }
    ),
    [p, m]
  );
}
async function jr(e, t, n) {
  if (!e.path || !t) return !1;
  let r = Gn(Vn(e.path, t), n.slug);
  return (await fetch(r, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((j.location.href = j.location.origin + r), !0)
    : !1;
}
function Mr() {
  let e = hn();
  return s((t) => Nr({ ...t, collectionUtils: e }), [e]);
}
async function Nr(e) {
  let t = await Kn(e);
  if (t) {
    try {
      localStorage.preferredLocale = e.nextLocale.code;
    } catch {}
    try {
      if (!z(t.path)) throw Error(`Expected result.path to be a string`);
      if (t.isMissingInLocale && (await jr(e.route, t.pathVariables, e.nextLocale))) return;
    } catch {}
    return t;
  }
}
function Pr(e) {
  let t = l(Promise.resolve()),
    n = l(),
    r = s(
      (r) => {
        if (r.navigationType === `traverse` || !r.canIntercept) return;
        let i = n.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          r.intercept({ handler: () => t.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return s(
    (e, i, a) => {
      if (!_v) {
        a?.();
        return;
      }
      ((t.current = e),
        (n.current = i),
        j.navigation.addEventListener(`navigate`, r),
        a?.(),
        e.finally(() => {
          t.current === e &&
            ((n.current = void 0), j.navigation.removeEventListener(`navigate`, r));
        }));
    },
    [r]
  );
}
function Fr(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function Ir(e) {
  return Fr(e.trim().toLowerCase().replace(vv, `-`));
}
function Lr({ children: e, value: t }) {
  return T(bv.Provider, { value: t, children: e });
}
function Rr() {
  return t(bv);
}
function zr(e, t) {
  let n = i(() => ({ inputs: t, result: e() }))[0],
    r = l(!0),
    a = l(n),
    o =
      r.current || (t && a.current.inputs && wt(t, a.current.inputs, !1))
        ? a.current
        : { inputs: t, result: e() };
  return (
    c(() => {
      ((r.current = !1), (a.current = o));
    }, [o]),
    o.result
  );
}
function Br(e, t) {
  return zr(() => e, t);
}
function Vr() {
  return A.useContext(wv);
}
function Hr() {
  return j.location.search;
}
function Ur() {
  return ``;
}
function Wr(e) {
  return (
    Ev.add(e),
    j.addEventListener(`popstate`, e),
    () => {
      (Ev.delete(e), j.removeEventListener(`popstate`, e));
    }
  );
}
function Gr() {
  for (let e of Ev) e();
}
function Kr({ children: e, routerRenderKey: t, isNavigationCommitPending: n }) {
  let a = Rr() === `preview`,
    [o, c] = i(``),
    u = l(t);
  xv(() => {
    u.current = t;
  }, [t]);
  let d = g(Wr, Hr, Ur),
    f = r(d),
    p = t !== r(t),
    m = a ? o : p ? d : f,
    h = s(
      async (e) => {
        if (a) {
          k(() => {
            c((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let r = n(),
          i = t;
        if ((await $_({ continueAfter: `paint` }), r || n() || u.current !== i)) return;
        let o = yr();
        if (!o) return;
        let s = new URL(j.location.href),
          l = e(s.searchParams).toString();
        s.search = l;
        let d = o.queryParamBackAnchorSearch,
          f = j.location.search.slice(1),
          p = d === void 0 && l !== f,
          m = d !== void 0 && l === d,
          h = { ...o, queryParamBackAnchorSearch: m ? void 0 : (d ?? (p ? f : void 0)) },
          g = s.toString();
        (p || m ? Or(h, g) : Er(h, g), Gr());
      },
      [n, a, t]
    ),
    _ = zr(() => ({ urlSearchParams: new URLSearchParams(m), replaceSearchParams: h }), [m, h]);
  return T(Dv.Provider, { value: _, children: e });
}
function qr(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = Jr(e),
    [r, i] = Jr(t),
    a = Yr(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function Jr(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function Yr(e, t) {
  if (e === t || ((e = `/` + Xr(e)), (t = `/` + Xr(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Av(e, 1 + s);
    if (n !== Av(t, 1 + s)) break;
    n === kv && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (Av(t, 1 + s) === kv) return Mv(t, 1 + s + 1);
      if (s === 0) return Mv(t, 1 + s);
    } else r > a && (Av(e, 1 + s) === kv ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Av(e, s) === kv) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${Mv(t, 1 + o)}`;
}
function Xr(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Av(e, o);
    else if (Fv(a)) break;
    else a = kv;
    if (Fv(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Av(t, t.length - 1) !== Ov || Av(t, t.length - 2) !== Ov) {
            if (t.length > 2) {
              let e = jv(t, Pv);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = Mv(t, 0, e)), (n = t.length - 1 - jv(t, Pv))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          Nv && ((t += t.length > 0 ? `${Pv}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${Pv}${Mv(e, r + 1, o)}`) : (t = Mv(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === Ov && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function Zr(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || j.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function Qr(e, t) {
  let n = e.replace(tv, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function $r(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return Qr(i, r);
  }
  if (e.includes(`:`)) return Qr(e, r);
  let i = t.elements?.[e];
  return i ? Qr(i, r) : e;
}
function ei(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: c,
    onlyHash: l = !1,
    siteCanonicalURL: u,
    localeId: d,
    localeSlug: f,
  }
) {
  let p;
  if ((i && e && (p = $r(i, e, o)), l)) return p ?? ``;
  let m = t ?? `/`;
  (n && d && (m = n[d] ?? m), r && (m = m.replace(tv, (e, t) => String(r[t] || e))));
  let h = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (h = h.replace(tv, (e, t) => String(a[t] || e)));
  let g = !!(m === h && p),
    _ = !g && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && m !== h;
  if (s)
    if (Iv.has(m) && j !== void 0) {
      let e = Zr(u);
      h = qr(j.location.pathname, e + h);
    } else h = qr(m, h);
  else h = Gn(h, f);
  let v = g || _;
  return ((c || v) && (h = Hn(h, v)), p && (h = `${h}#${p}`), h);
}
function ti(e) {
  return Lv in e && e[Lv] === 1;
}
function ni() {
  if (!Rv) return;
  ((Bv = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  Rv.forEach((n) => t.addEventListener(n, zv, e));
}
function ri() {
  return (
    c(() => {
      if (!Bv || !Rv) return;
      let e = { capture: !0 },
        t = document.body;
      (Rv.forEach((n) => t.removeEventListener(n, zv, e)),
        (Rv = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function ii(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function ai(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function oi() {
  ((oy = new ay()), oy.render.markStart());
}
function si() {
  (n(() => {
    oy?.useInsertionEffects.markRouterStart();
  }, []),
    f(() => {
      oy?.useLayoutEffects.markRouterStart();
    }, []),
    c(() => {
      oy?.useEffects.markRouterStart();
    }, []));
}
function ci() {
  (n(() => {
    (oy?.render.markEnd(), oy?.useInsertionEffects.markStart());
  }, []),
    f(() => {
      if ((oy?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        sy = !0;
        return;
      }
      R.read(() => {
        (oy?.browserRendering.requestAnimationFrame.markStart(),
          oy?.unattributedHydrationOverhead.measure());
      });
    }, []),
    c(() => {
      (oy?.useEffects.markStart(),
        oy?.browserRendering.hasStarted ||
          (oy?.mutationEffects.measure(), oy?.useEffects.markAreSynchronous()));
    }, []));
}
function li() {
  (n(() => {
    oy?.useInsertionEffects.markEnd();
  }, []),
    f(() => {
      (oy?.useLayoutEffects.markEnd(),
        !(sy || document.visibilityState !== `visible`) &&
          R.read(() => {
            (oy?.browserRendering.requestAnimationFrame.markEnd(),
              $_().then(() => {
                oy?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    c(() => {
      oy?.useEffects.markEnd();
    }, []));
}
function ui() {
  return (ci(), null);
}
function di() {
  return (li(), null);
}
function fi(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return A.isValidElement(e) ? A.cloneElement(e, n) : T(e, { ...n });
}
function pi() {
  return dy;
}
function mi(e) {
  if (fy?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      H(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: _i(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          H(t, `localizedPath must be defined`);
          let i = _i(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    fy = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: fy.pathRoutes,
    paths: fy.paths,
    pathRoutesLocalized: fy.pathRoutesLocalized,
    pathsLocalized: fy.pathsLocalized,
  };
}
function hi(e, t, n = !0, r = pi()) {
  return gi(e, t, r, n);
}
function gi(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = mi(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = vi(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = vi(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = vi(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = vi(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function _i(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function vi(e, t) {
  let n = [],
    r = yi(t).replace(tv, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function yi(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function bi() {
  if (`PerformanceServerTiming` in j) {
    let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
    if (!e || e.length === 0) return new URLSearchParams();
    let t = e.find((e) => e.name === `abtests`);
    return t ? new URLSearchParams(t.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function xi(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function Si(e, t) {
  for (let [n, r] of t) xi(e, n, r);
}
function Ci(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function wi(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function Ti(e, t) {
  if (j === void 0) return t;
  let n = t;
  if (t) {
    wi(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Si(e, bi()), Ci(e), n);
}
function Ei(e) {
  (c(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    n(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Di(e, ...t) {
  py.has(e) || (py.add(e), console.warn(e, ...t));
}
function Oi(e, t, n) {
  Di(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function ki(e) {
  return (
    typeof e == `object` &&
    !!e &&
    gy in e &&
    e[gy] instanceof Function &&
    _y in e &&
    e[_y] instanceof Function
  );
}
function Ai(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = hy(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function ji(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Mi(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Ni(e) {
  return Math.round(e * 2) / 2;
}
function Pi(e, t) {
  return { x: e, y: t };
}
function Fi(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function Ii(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Li(e) {
  let t = Ri(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function Ri(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function zi(e, t, n) {
  return (
    (by.rgb_r = e / 255),
    (by.rgb_g = t / 255),
    (by.rgb_b = n / 255),
    by.rgbToHsluv(),
    { h: by.hsluv_h, s: by.hsluv_s, l: by.hsluv_l }
  );
}
function Bi(e, t, n, r = 1) {
  return (
    (by.hsluv_h = e),
    (by.hsluv_s = t),
    (by.hsluv_l = n),
    by.hsluvToRgb(),
    { r: by.rgb_r * 255, g: by.rgb_g * 255, b: by.rgb_b * 255, a: r }
  );
}
function Vi(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function Hi(e, t, n) {
  return {
    r: Ii(e) ? Yi(e, 255) * 255 : 0,
    g: Ii(t) ? Yi(t, 255) * 255 : 0,
    b: Ii(n) ? Yi(n, 255) * 255 : 0,
  };
}
function Ui(e, t, n, r) {
  let i = [
    Qi(Math.round(e).toString(16)),
    Qi(Math.round(t).toString(16)),
    Qi(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function Wi(e, t, n) {
  let r,
    i,
    a = Yi(e, 255),
    o = Yi(t, 255),
    s = Yi(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function Gi(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Ki(e, t, n) {
  let r, i, a;
  if (((e = Yi(e, 360)), (t = Yi(t * 100, 100)), (n = Yi(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = Gi(s, o, e + 1 / 3)), (i = Gi(s, o, e)), (a = Gi(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function qi(e, t, n) {
  ((e = Yi(e, 255)), (t = Yi(t, 255)), (n = Yi(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function Ji(e, t, n) {
  ((e = Yi(e, 360) * 6), (t = Yi(t * 100, 100)), (n = Yi(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function Yi(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    Xi(e) && (e = `100%`);
    let t = Zi(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function Xi(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function Zi(e) {
  return typeof e == `string` && e.includes(`%`);
}
function Qi(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function $i(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = yy[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = xy.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = xy.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = xy.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Li(r[2] ?? ``), l: Li(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = xy.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Li(r[2] ?? ``),
              l: Li(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = xy.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Li(r[2] ?? ``), v: Li(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = xy.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Li(r[2] ?? ``),
                  v: Li(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = xy.hex8.exec(t))
                ? {
                    r: ea(r[1] ?? ``),
                    g: ea(r[2] ?? ``),
                    b: ea(r[3] ?? ``),
                    a: ta(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = xy.hex6.exec(t))
                  ? {
                      r: ea(r[1] ?? ``),
                      g: ea(r[2] ?? ``),
                      b: ea(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = xy.hex4.exec(t))
                    ? {
                        r: ea(`${r[1]}${r[1]}`),
                        g: ea(`${r[2]}${r[2]}`),
                        b: ea(`${r[3]}${r[3]}`),
                        a: ta(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = xy.hex3.exec(t))
                      ? {
                          r: ea(`${r[1]}${r[1]}`),
                          g: ea(`${r[2]}${r[2]}`),
                          b: ea(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function ea(e) {
  return parseInt(e, 16);
}
function ta(e) {
  return ea(e) / 255;
}
function na(e) {
  let t = Sy.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function ra(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function ia({ r: e, g: t, b: n, a: r }) {
  return { r: ra(e), g: ra(t), b: ra(n), a: r };
}
function aa(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function oa({ r: e, g: t, b: n, a: r }) {
  return { r: aa(e), g: aa(t), b: aa(n), a: r };
}
function sa({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function ca(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function la({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = ca(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function ua(e) {
  return Ey(Ty(e));
}
function da(e) {
  return wy(Cy(e));
}
function fa(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = ha({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = pa(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? ha(e)
              : ga(e)),
    i
  );
}
function pa(e) {
  let t = $i(e);
  if (t) return t.format === `hsl` ? ga(t) : t.format === `hsv` ? ma(t) : ha(t);
}
function ma(e) {
  let t = Ji(e.h, e.s, e.v);
  return { ...Wi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : _a(e.a) };
}
function ha(e) {
  let t = Hi(e.r, e.g, e.b);
  return { ...Wi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : _a(e.a) };
}
function ga(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Ii(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Ii(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = Ri(e.s)),
    (r = Ii(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = Ri(e.l)),
    (i = Ki(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function _a(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function va() {
  return J.location.origin === `https://screenshot.framer.invalid`;
}
function ya({ children: e }) {
  if (t(By).top) return T(_, { children: e });
  let n = l({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = l({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    i = l(new Set()).current,
    a = l({
      getLayoutId: s(({ id: e, name: t, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = t ? `byName` : `byId`,
          s = n.current[o][e];
        if (s) return s;
        let c = t || e;
        if (!a && !i.has(c) && (!n.current.byLayoutId[c] || n.current.byLayoutId[c] === c))
          return (
            n.current.count[o][c] === void 0 &&
              ((n.current.count[o][c] = 0), (n.current.byLayoutId[c] = c), (r.current[o][e] = c)),
            i.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            H(!!c, `duplicatedId must be defined`);
            let u = n.current[o][c],
              d = n.current.byLastId[c];
            if (d && !l) {
              let e = n.current.byLayoutId[d],
                r = !e || e === t;
              d && !i.has(d) && (!t || r) && (l = [d, c]);
            }
            let f = u ? n.current.byLayoutId[u] : void 0,
              p = !f || f === t;
            if (u && !i.has(u) && (!t || p))
              return ((r.current[o][e] = u), (r.current.byLastId[c] = u), i.add(u), u);
          }
        let u = n.current.byLastId[e];
        if (u && !i.has(u)) return (i.add(u), (r.current.byId[e] = u), u);
        if (l) {
          let [t, n] = l;
          return ((r.current[o][e] = t), (r.current.byLastId[n] = t), i.add(t), t);
        }
        let d = n.current.byPossibleId[e];
        if (d && !i.has(d)) return (i.add(d), (r.current.byId[e] = d), d);
        let f = a?.[0],
          p = t || f || e,
          { layoutId: m, value: h } = ba(p, (n.current.count[o][p] ?? -1) + 1, i);
        if (((n.current.count[o][p] = h), (r.current[o][e] = m), a?.length && !t)) {
          let e = a[a.length - 1];
          if ((e && (r.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (r.current.byPossibleId[t] || (r.current.byPossibleId[t] = m));
            }
        }
        return ((r.current.byLayoutId[m] = c), i.add(m), m);
      }, []),
      persistLayoutIdCache: s(() => {
        ((n.current = {
          byId: { ...n.current.byId, ...r.current.byId },
          byLastId: { ...n.current.byLastId, ...r.current.byLastId },
          byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
          byName: { ...n.current.byName, ...r.current.byName },
          byLastName: { ...n.current.byLastName, ...r.current.byLastName },
          byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
          count: { ...n.current.count, byName: {} },
        }),
          (r.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          i.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return T(By.Provider, { value: a, children: e });
}
function ba(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function xa({ enabled: e = !0, ...n }) {
  let r = t(By),
    i = C(() => ({ ...r, enabled: e }), [e]);
  return T(By.Provider, { ...n, value: i });
}
function Sa(e) {
  let t = l(null);
  return (t.current === null && (t.current = e()), t.current);
}
function Ca(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${wa(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return O(`div`, {
    style: Hy,
    children: [
      T(`div`, { className: `text`, style: Wy, children: r }),
      i && T(`div`, { className: `text`, style: Gy, children: i }),
    ],
  });
}
function wa(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function Ta() {
  let e = X.current();
  return e === X.canvas || e === X.export;
}
function Ea() {
  let [e] = i(() => Ta());
  return e;
}
function Da(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Oa(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of nb) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function ka(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function Aa(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < rb) continue;
    let n = ka(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${ka(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function ja(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of tb) {
    let n = ka(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Ma(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = ja(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: Aa(n, t, Oa(t.pixelWidth, t.pixelHeight)) };
}
function Na() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: it($y.imagePlaceholderSvg),
  };
}
function Pa(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function Fa(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function Ia(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...eb,
    objectPosition: Fa(e.positionX, e.positionY),
    objectFit: Pa(e.fit),
  };
}
function La(e) {
  let t = A.useRef(e ? `auto` : `async`),
    n = s((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = s(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = s(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function Ra({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = $y.useImageSource(e, t, n),
    s = Ia(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = La(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Ma(e.nodeFixedSize, e, o);
  return T(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function za({ image: e, containerSize: t, nodeId: n }) {
  let r = A.useRef(null),
    i = $y.useImageElement(e, t, n),
    a = Ia(e);
  return (
    A.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    T(`div`, { ref: r, style: { display: `contents`, ...eb } })
  );
}
function Ba({ nodeId: e, image: t, containerSize: n }) {
  let r = A.useRef(null),
    i = $y.useImageSource(t, n, e);
  return (
    A.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = Ia(t);
      $y.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    T(`div`, { ref: r, style: { display: `contents`, ...eb } })
  );
}
function Va({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (z(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = B(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Ni(e * (t.pixelWidth / 2)),
        s = $y.useImageSource(t, n);
      ((r = {
        ...ib,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: Fa(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        X.current() === X.canvas
          ? $y.canRenderOptimizedCanvasImage($y.useImageSource(t))
            ? T(Ba, { image: t, ...n })
            : T(za, { image: t, ...n })
          : T(Ra, { image: t, avoidAsyncDecoding: X.current() === X.export, ...n });
  let o = a ? ib : (r ?? { ...ib, ...Na() });
  return i
    ? T(ve.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : T(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function Ha(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function Ua(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...eb,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), T(ve.div, { style: n }))
    : (Ha(e, n, !1), T(ve.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function Wa(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function Ga(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !ob.isImageObject(t)) return;
  let r = null;
  if (((r = z(n) ? { alt: ``, src: n } : hy.get(t, null)), ob.isImageObject(r))) return Wa(r, e);
}
function Ka(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function qa(e) {
  return typeof e != `string` && typeof e != `number`;
}
function Ja(e) {
  return e != null && typeof e != `boolean` && !Ka(e);
}
function W(e) {
  return Number.isFinite(e);
}
function Ya(e) {
  return (Math.PI / 180) * e;
}
function Xa(e) {
  return Ze(e) ? !1 : e === 2 || e === 5;
}
function Za(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function Qa(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return $a(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function $a(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      U(e, `unknown constraint key`);
  }
}
function eo(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(Qa(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Qa(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function to(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(Qa(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Qa(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function no(e, t, n, r, i) {
  let a = to(W(e) ? e : db, n, r, i),
    o = eo(W(t) ? t : fb, n, r, i);
  return (
    W(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (W(n.left) && W(n.right)
        ? (o = a / n.aspectRatio)
        : (W(n.top) && W(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function ro(e, t) {
  return !W(e) || !W(t) ? null : e + t;
}
function io(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function ao(e) {
  return !e._constraints || io(e) ? !1 : e._constraints.enabled;
}
function oo(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    W(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    W(n) && W(r) ? { width: n, height: r } : null
  );
}
function so(e) {
  let t = oo(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return W(n) && W(r) ? { x: n, y: r, ...t } : null;
}
function co(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!ao(e) || r) return so(e);
  let i = lo(e),
    a = uo(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return ub.toRect(i, o, null, n, null);
}
function lo(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = lb.quickfix({
      left: W(t),
      right: W(n),
      top: W(r),
      bottom: W(i),
      widthType: Za(c),
      heightType: Za(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function uo(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function fo() {
  return A.useContext(pb).parentSize;
}
function po(e) {
  return typeof e == `object`;
}
function mo(e) {
  return po(e) ? e.width : e;
}
function ho(e) {
  return po(e) ? e.height : e;
}
function go(e, t) {
  return T(mb, { parentSize: t, children: e });
}
function _o(e) {
  return co(e, fo(), !0);
}
function vo({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function yo(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function bo(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? ve[e] : ve.div;
}
function xo(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function So(e, t, n = gb) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!_b) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) _b = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = _b;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function Co() {
  return va() ? X.preview : X.current();
}
function wo(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? Db.variable(e) : e === `` ? `""` : e;
}
function To(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return Eo(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return Do(r);
    case `lower-roman`:
    case `upper-roman`:
      return ko(r);
    default:
      return Eo(r);
  }
}
function Eo(e) {
  return String(e).length;
}
function Do(e) {
  let t = 1;
  for (; Oo(t) < e;) t++;
  return t;
}
function Oo(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function ko(e) {
  let t = 0;
  for (let n of Ab) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function Ao(e, t) {
  return Db.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function jo(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function Mo() {
  return X.current() === X.preview ? Yb.value : Jb.value;
}
function No(e) {
  return xb(e, Mo, `framer-lib-combinedCSSRules`);
}
function Po(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0));
}
function Fo(e) {
  let t = {};
  return (!e || !Xb || X.current() !== X.canvas || Po(t, e), t);
}
function Io(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function Lo(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = A.Children.map(t, (e) =>
        A.isValidElement(e) ? A.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function Ro(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function zo(e, { specificLayoutId: n, postfix: r } = {}) {
  let { name: i, layoutIdKey: a, duplicatedFrom: o, __fromCodeComponentNode: s = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = t(By);
  return C(() => {
    if (!u) return e.layoutId;
    let t = n || e.layoutId;
    if (!t && (c || !a || s)) return;
    let d = t || l({ id: a, name: i, duplicatedFrom: o });
    if (d) return r ? `${d}-${r}` : d;
  }, [u]);
}
function Bo() {
  let [e, t] = A.useState(0);
  return A.useCallback(() => t((e) => e + 1), []);
}
function Vo(e) {
  let t = Bo();
  c(() => {
    let n = e?.current;
    if (n)
      return (
        $b?.observeElementWithCallback(e.current, t),
        () => {
          $b?.unobserve(n);
        }
      );
  }, [e, t]);
}
function Ho(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(ex)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Uo)
    .map(Wo);
}
function Uo(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function Wo(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(Uo);
  return t ? Wo(t) : e;
}
function Go(e, n, r = () => [], i = {}) {
  let { id: a, visible: o, _needsMeasure: s } = e,
    { skipHook: c = !1 } = i,
    l = t(Zb),
    u = X.current() === X.canvas;
  xv(() => {
    !u ||
      l ||
      c ||
      (n.current && a && o && s && $y.queueMeasureRequest(Io(a), n.current, r(n.current)));
  });
}
function Ko(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && $y.queueMeasureRequest(Io(t.id), t, Ho(t));
}
function qo(e) {
  e.willChange = `transform`;
  let t = X.current() === X.canvas;
  rx && t && (e.translateZ = tx);
}
function Jo(e) {
  ((e.willChange = `transform`), Yo(e, !0));
}
function Yo(e, t) {
  let n = X.current() === X.canvas;
  if (!rx || !n) return;
  let r = (z(e.transform) && e.transform) || ``;
  t ? r.includes(nx) || (e.transform = r + nx) : (e.transform = r.replace(nx, ``));
}
function Xo(e, t, n, r = !0) {
  if (!e) return;
  let i = Ky(e.style),
    a = n || i[t],
    o = () => {
      Zo(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function Zo(e) {
  return z(e) || B(e) || Qe(e);
}
function Qo(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function $o(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  Qo(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function es(e, t) {
  let n = [e, t];
  return sx.test(e) ? e : $o(1e3, cx, n, () => ox.multiplyAlpha(e, t));
}
function ts(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: es(e.value, t) }))
  );
}
function ns(e, t) {
  let n = 0;
  return (
    ts(e, t).forEach((e) => {
      n ^= ax(e.value) ^ e.position;
    }),
    n
  );
}
function rs(e) {
  return e && lx.every((t) => t in e);
}
function is(e) {
  return e && ux.every((t) => t in e);
}
function as({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || ky(t)
      ? (n.backgroundColor = t)
      : Y.isColorObject(e) && (n.backgroundColor = e.initialValue || Y.toRgbString(e))
    : e &&
      ((e = hy.get(e, null)),
      typeof e == `string` || ky(e)
        ? (n.background = e)
        : fx.isLinearGradient(e)
          ? (n.background = fx.toCSS(e))
          : mx.isRadialGradient(e)
            ? (n.background = mx.toCSS(e))
            : Y.isColorObject(e) && (n.backgroundColor = e.initialValue || Y.toRgbString(e)));
}
function G(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function os(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function ss(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function cs(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    Te(n)
      ? (t.cornerShape = re(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    G(e, `size`, t),
    G(e, `width`, t),
    G(e, `height`, t),
    G(e, `minWidth`, t),
    G(e, `minHeight`, t),
    G(e, `top`, t),
    G(e, `right`, t),
    G(e, `bottom`, t),
    G(e, `left`, t),
    G(e, `position`, t),
    G(e, `overflow`, t),
    G(e, `opacity`, t),
    e._border?.borderWidth || G(e, `border`, t),
    G(e, `borderRadius`, t),
    G(e, `radius`, t, `borderRadius`),
    G(e, `color`, t),
    G(e, `shadow`, t, `boxShadow`),
    G(e, `x`, t),
    G(e, `y`, t),
    G(e, `z`, t),
    G(e, `rotate`, t),
    G(e, `rotateX`, t),
    G(e, `rotateY`, t),
    G(e, `rotateZ`, t),
    G(e, `scale`, t),
    G(e, `scaleX`, t),
    G(e, `scaleY`, t),
    G(e, `skew`, t),
    G(e, `skewX`, t),
    G(e, `skewY`, t),
    G(e, `originX`, t),
    G(e, `originY`, t),
    G(e, `originZ`, t),
    as(e, t),
    t
  );
}
function ls(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof Ky(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function us(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (gx.has(t)) return `pointer`;
}
function ds(e) {
  return fs(e) ? !0 : e.style ? !!fs(e.style) : !1;
}
function fs(e) {
  return _x in e && (e[_x] === `scroll` || e[_x] === `auto`);
}
function ps(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = F(e.minWidth),
    h = F(e.minHeight),
    g = F(e.maxWidth),
    _ = F(e.maxHeight);
  return {
    top: F(n),
    left: F(t),
    bottom: F(r),
    right: F(i),
    width: F(a),
    height: F(o),
    size: F(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function ms(e) {
  let n = t(Zb),
    { style: r, _initialStyle: i, __fromCanvasComponent: a, size: o } = e,
    s = ps(e),
    c = _o(s),
    l = {
      display: `block`,
      flex: r?.flex ?? `0 0 auto`,
      userSelect: X.current() === X.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !ls(e) && !e.__fromCanvasComponent && !ds(e),
    d = !e.style || !(`pointerEvents` in e.style);
  u && d && (l.pointerEvents = `none`);
  let f = A.Children.count(e.children) > 0 &&
      A.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    p = cs(e);
  (o === void 0 && !a && (os(p) || (l.width = vx.width), ss(p) || (l.height = vx.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight));
  let m = {};
  (ao(s) &&
    c &&
    !vo(e) &&
    (m = { left: c.x, top: c.y, width: c.width, height: c.height, right: void 0, bottom: void 0 }),
    Object.assign(l, f, i, p, m, r),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    ix.applyWillChange(e, l, !0));
  let h = l;
  l.transform || (h = { x: 0, y: 0, ...l });
  let g = Ta();
  return (
    e.positionSticky
      ? (!g || $y.isOnPageCanvas || n) &&
        ((h.position = `sticky`),
        (h.willChange = `transform`),
        (h.top = e.positionStickyTop),
        (h.right = e.positionStickyRight),
        (h.bottom = e.positionStickyBottom),
        (h.left = e.positionStickyLeft))
      : g &&
        (e.positionFixed
          ? (h.position = $y.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (h.position = `absolute`)),
    `rotate` in h && h.rotate === void 0 && delete h.rotate,
    [h, c]
  );
}
function hs(e) {
  let t = {};
  for (let n in e)
    (We(n) || Jy(n)) && !yx.has(n)
      ? (t[n] = Ky(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof Ky(e)[n] != `boolean` && !e.transition && (t.transition = Ky(e)[n]));
  return t;
}
function gs(e) {
  return `data-framer-name` in e;
}
function _s(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function vs(e) {
  return T(ve.div, { layoutId: Sx, style: Tx, children: e.children });
}
function ys(e, t) {
  qe(e) ? e(t) : bs(e) && (e.current = t);
}
function bs(e) {
  return V(e) && `current` in e;
}
function xs(e) {
  return bs(e) && e.current !== null;
}
function Ss() {
  let e = Sa(() => new Set()),
    t = Sa(() => new Map());
  return Sa(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function Cs(e) {
  let t = l(null),
    n = Ss();
  return Sa(() => (bs(e) ? n(e) : qe(e) ? n(t, e) : n(t)));
}
function ws(e, t, n) {
  let r = l(),
    i = l();
  (zr(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function Ts(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new Ex({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Es(e, n, r) {
  let i = Sa(() => `${r.rootMargin}`),
    a = t(Dx),
    { enabled: o, root: s, rootMargin: c, threshold: l } = r;
  ws(
    e,
    (e) => {
      if (o && e !== null) return Ts(a, i, e, s, n, c, l);
    },
    [o, n, s, c, l]
  );
}
function Ds(e, t, n) {
  let r = A.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  Ox(
    e,
    A.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = ks(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
          return;
        }
        if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
          return;
        }
      },
      [a, o?.y, t]
    ),
    { threshold: kx, rootMargin: s, enabled: i ?? !0 }
  );
}
function Os(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, J.innerHeight);
}
function ks({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && Os(t, e) >= r;
}
function As() {
  return new Map();
}
function js() {
  return Sa(As);
}
function Ms(e, n = []) {
  let { register: r, deregister: i } = t(Px);
  c(() => {
    if (e) return (r(e), () => i(e));
  }, [r, i, ...n]);
}
function Ns(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function Ps(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (W(t.originX) && (r.originX = t.originX),
      W(t.originY) && (r.originY = t.originY),
      W(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (W(n.originX) && (r.originX = n.originX),
      W(n.originY) && (r.originY = n.originY),
      W(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function Fs(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function Is(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return Bx.PushLeft;
    case `left`:
      return Bx.PushRight;
    case `bottom`:
      return Bx.PushUp;
    case `top`:
      return Bx.PushDown;
  }
}
function Ls(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return Bx.OverlayLeft;
    case `left`:
      return Bx.OverlayRight;
    case `bottom`:
      return Bx.OverlayUp;
    case `top`:
      return Bx.OverlayDown;
  }
}
function Rs(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return Bx.FlipLeft;
    case `left`:
      return Bx.FlipRight;
    case `bottom`:
      return Bx.FlipUp;
    case `top`:
      return Bx.FlipDown;
  }
}
function zs(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return Vs(e, t.transition, t.component);
    case `removeOverlay`:
      return Hs(e);
    case `add`:
      return Us(e, t.key, t.transition, t.component);
    case `remove`:
      return Ks(e);
    case `update`:
      return Bs(e, t.key, t.component);
    case `back`:
      return Ws(e);
    case `forward`:
      return Gs(e);
    default:
      return;
  }
}
function Bs(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function Vs(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function Hs(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function Us(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i?.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? Zs(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = Ys(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = qs(e, t, c),
    p = Xs(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function Ws(e) {
  let t = { ...e.containers },
    n = Ks(e);
  if (n) return ((n.containers = t), n);
}
function Gs(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = Us(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function Ks(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (H(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = Js(e, r, n),
    u = Xs(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function qs(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function Js(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function Ys(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function Xs(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = Qs(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function Zs(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1 ||
        !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function Qs(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return $s(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return $s(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return $s(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return $s(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function $s(e, t, n) {
  let r = {},
    i = {};
  return (
    Hx.forEach((e) => {
      ((r[e] = Lx[e]), (i[e] = { ...n, from: Lx[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${Ky(Lx)[a]}%` : Ky(Lx)[a];
        ((Ky(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function ec(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function tc({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function nc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : Kx;
}
function rc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function ic(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function ac(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  } else if (e < n) {
    let t = r[e + 1];
    return !t?.transition || t.transition.backfaceVisible;
  } else {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
}
function oc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function sc(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function cc(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t?.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t?.transition) return t.transition.enter;
    }
}
function lc(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t?.transition?.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t?.transition?.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return Kx;
}
function uc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function dc(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function fc(e) {
  return A.Children.map(e.component, (t) => {
    if (!Ja(t) || !qa(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? V(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      A.cloneElement(t, n)
    );
  });
}
function pc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function mc(e, t) {
  let n = P(),
    r = me();
  return T(Gx, {
    ref: (e) => {
      if (t) {
        if (typeof t == `function`) {
          t(e);
          return;
        }
        t.current = e;
      }
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
function hc(e) {
  return V(e) || qe(e);
}
function gc(e) {
  return !!e && Yx in e && e[Yx] === !0;
}
function _c(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return Je(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return Ze(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return Ye(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return Ye(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = V(e.defaultValue) ? e.defaultValue : {};
        return (V(e.controls) && vc(t, e.controls), t);
      }
      case `array`:
        return Ye(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function vc(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!Ze(i) || gc(r)) continue;
    let a = _c(r);
    Ze(a) || (e[n] = a);
  }
}
function yc(e) {
  if (V(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function bc(e, t) {
  hc(e) && vc(yc(e), t);
}
function xc(e, t) {
  (Object.assign(e, { propertyControls: t }), bc(e, t));
}
function Sc(e) {
  return e.propertyControls;
}
function Cc(e) {
  return tS in e;
}
function wc(e, t) {
  if (!Cc(e)) return;
  let n = hy.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function Tc(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Ec(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function Dc(e, t) {
  let n = [];
  (W(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    W(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    W(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    W(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    W(e.invert) && n.push(`invert(${e.invert / 100})`),
    W(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    W(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    W(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Tc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Oc(e, t) {
  W(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function kc(e, t) {
  (Oc(e, t), Dc(e, t));
}
function Ac(e, t) {
  let n,
    r = (...r) => {
      (J.clearTimeout(n), (n = J.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      J.clearTimeout(n);
    }),
    r
  );
}
function jc(...e) {
  return e.filter(Boolean).join(` `);
}
function Mc(e) {
  if (e.startsWith(oS)) return e.substr(sS);
}
function Nc(e, t, n) {
  let r = p.map(e, (e) => (D(e) ? w(e, t) : e));
  return n ? r : T(_, { children: r });
}
function Pc(e) {
  let t = Sa(() => Fc(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function Fc(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = Ic(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = Ic(t)));
    },
    r = !1;
  function i(i, a) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      p.count(i) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      p.map(i, (e) => {
        if (D(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = qe(a) ? a(e.props) : a;
          return w(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let a = function (e, t) {
    return T(_, { children: i(e, t) });
  };
  return (
    (a.cloneAsArray = i),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: a,
    }
  );
}
function Ic(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (ys(n, e), ys(t, e));
  };
}
function Lc(e, t, n, r, i, a, o, s) {
  let c = A.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !A.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !Vc(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = Bc([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = Bc([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let p = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = T(
        lS.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = zc(e, a, r);
    (f.length
      ? (H(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = T(
          `div`,
          { className: `${uS} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : H(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      p.push(d));
  }
  return (
    H(!s || p.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? p : [...p, T(`div`, { className: dS }, `property-overrides-separator`)]
  );
}
function Rc(e) {
  return e.split(`-`)[2];
}
function zc(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${Rc(a)}`);
  }
  return r;
}
function Bc(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function Vc(e, t) {
  for (let n of Object.keys(t)) if (!wt(e[n], t[n], !0)) return !0;
  return !1;
}
function Hc(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function Uc(e) {
  return A.forwardRef(({ optimized: t, ...n }, r) => {
    let i = A.useContext(cS),
      a = A.useContext(lS)?.variants,
      o = n[yS];
    o && !Tn() && _S.setAll(o, a, t ? n : null, i);
    let s = xS(n);
    return T(e, { ref: r, ...n, ...s });
  });
}
function Wc(e) {
  return z(e) || Array.isArray(e);
}
function Gc(e) {
  return e in wS;
}
function Kc(e, t) {
  let n = Sa(() => ({ values: CS(t ? e : void 0) }));
  return (
    A.useEffect(() => {
      if (!t)
        for (let e of SS) {
          let t = wS[e];
          Ze(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function qc(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: a,
    loopPauseOffscreen: o,
  },
  u
) {
  let d = fe(),
    f = Sa(CS),
    p = l(!1),
    m = OS(),
    h = l(null),
    g = s(async () => {
      if (!a) return;
      let e = n || void 0,
        t = p.current && r === `mirror`,
        i = t ? wS : a,
        o = t ? a : wS;
      return (
        (p.current = !p.current),
        (h.current = Promise.all(
          SS.map((t) => {
            if (!(d && t !== `opacity`))
              return (
                f[t].jump(o[t] ?? wS[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    a = i[t] ?? o[t];
                  typeof a == `number` && Oe(f[t], a, r);
                })
              );
          })
        )),
        h.current
      );
    }, [a, r, n, d]),
    [_, v] = i(!1),
    y = l(!1),
    b = s(async () => {
      !e || !y.current || (await g(), await m(t ?? 0), b());
    }, [g, m, e, t]),
    x = s(() => {
      y.current || ((y.current = !0), k(() => v(!0)), b());
    }, [b]),
    S = s((e = !0) => {
      (SS.forEach((e) => {
        f[e].stop();
      }),
        SS.forEach((e) => {
          f[e].set(wS[e]);
        }),
        (p.current = !1),
        e && ((y.current = !1), k(() => v(!1))));
    }, []),
    w = e && a,
    T = s(() => {
      document.hidden ? S(!1) : y.current && ((y.current = !1), x());
    }, [x, S]);
  (c(() => {
    if (w)
      return (
        document.addEventListener(`visibilitychange`, T),
        () => {
          document.removeEventListener(`visibilitychange`, T);
        }
      );
  }, [w, T]),
    c(() => {
      (w && o) || (w ? x() : S());
    }, [x, S, o, w]),
    c(() => () => S(), [S]));
  let E = l(!1),
    D = s(async () => {
      h.current && (await h.current, !E.current && S());
    }, [S]);
  Ox(
    u,
    s(
      (e) => {
        e.isIntersecting ? ((E.current = !0), x()) : ((E.current = !1), D());
      },
      [x, D]
    ),
    { enabled: w && o }
  );
  let ee = _ || !o;
  return C(() => ({ values: f, style: w && ee ? TS : ES }), [w, ee]);
}
function Jc(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function Yc(e, n, r) {
  let { speed: i = 100, offset: a = 0, adjustPosition: o = !1, parallaxTransformEnabled: s } = e,
    c = A.useRef(null),
    l = fe(),
    u = A.useCallback(
      (e) => (c.current === null || i === 100 ? 0 : Jc(e, c.current, i, a, o)),
      [i, a, o]
    ),
    { scrollY: d } = Ke(),
    f = I(d, u),
    p = se(o && c.current === null ? `hidden` : r),
    m = se(0),
    h = t(Dx);
  return (
    ws(
      n,
      (e) => {
        if (e === null || !s) return;
        let t = Ts(h, `undefined`, e, null, (e) => {
          ((c.current = e.boundingClientRect.top),
            R.update(() => {
              (f.set(u(d.get())), o && p.set(r ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [o, s]
    ),
    jt(() => {
      s && f.set(0);
    }),
    { values: { y: l || !s ? m : f }, style: s ? { ...TS, visibility: p } : ES }
  );
}
function Xc(e) {
  return typeof e == `object` && !!e;
}
function Zc(e) {
  if (Xc(e)) return e?.transition;
}
function Qc(e, t, n, r, i, a) {
  let o = Zc(e);
  return Promise.all(
    SS.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = Xc(e) ? (e?.[s] ?? wS[s]) : wS[s];
          if ((Te(u) && (u = u.get()), !B(u))) return c();
          let d = ce.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (z(i) && !l?.hasAnimated && J.MotionHandoffAnimation) {
            let e = J.MotionHandoffAnimation(i, s, R);
            e && (f = e);
          }
          a ? l.set(u) : Oe(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function $c(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  s,
  c,
  u
) {
  let d = r ?? e,
    f = i ?? t,
    p = a ?? n,
    [m, h] = le(),
    g = l({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    _ = Sa(() => {
      let e = d ?? c;
      if (!V(e)) return { values: CS() };
      let t = {};
      for (let n in e) {
        let r = V(e) ? e[n] : void 0;
        B(r) && (t[n] = r);
      }
      return { values: CS(t) };
    });
  ws(
    o,
    (e) => {
      let { hasMounted: t } = g.current;
      if (t && f) return;
      let n = ce.get(e);
      if (n) {
        Object.assign(g.current, { hasMounted: !0 });
        for (let e in _.values) {
          if (!Gc(e)) continue;
          let t = c?.[e];
          n.setBaseTarget(e, B(t) ? t : wS[e]);
        }
      }
    },
    [f]
  );
  let v = fe();
  ws(o, (e) => {
    if (!s) {
      h?.();
      return;
    }
    if (e === null) return;
    if (m !== g.current.lastPresence) {
      (Object.assign(g.current, { lastPresence: m }),
        m
          ? d &&
            f &&
            (Object.assign(g.current, { running: !0 }),
            Qc(f, _, v, o, u).then(() => Object.assign(g.current, { running: !1 })))
          : p
            ? (Object.assign(g.current, { running: !0 }),
              Qc(p, _, v, o, u)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = g.current;
    wt(f, t) ||
      !f ||
      (Object.assign(g.current, { lastAnimate: f }),
      Qc(f, _, v, o, u, !n).then(() => Object.assign(g.current, { running: !1 })));
  });
  let y = s && f;
  return C(() => ({ values: _.values, style: y ? TS : ES }), [y]);
}
function el(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function tl(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o?.current) continue;
    let c = el(o.current, document.documentElement) - jS - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function nl(e, t = 0) {
  return e < t ? `up` : `down`;
}
function rl(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = At();
  A.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return oe((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = nl(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < MS) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function il(e, t, n) {
  let r = tl(e, t),
    i = [...PS],
    a = r[0];
  if (!B(a)) return FS;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!B(e)) return FS;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function al(e) {
  return {
    x: e?.x ?? wS.x,
    y: e?.y ?? wS.y,
    scale: e?.scale ?? wS.scale,
    opacity: e?.opacity ?? wS.opacity,
    transformPerspective: e?.transformPerspective ?? wS.transformPerspective,
    rotate: e?.rotate ?? wS.rotate,
    rotateX: e?.rotateX ?? wS.rotateX,
    rotateY: e?.rotateY ?? wS.rotateY,
    skewX: e?.skewX ?? wS.skewX,
    skewY: e?.skewY ?? wS.skewY,
    transition: e?.transition ?? void 0,
  };
}
function ol({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return A.useMemo(
    () => ({
      initial: r ?? al({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? al({ opacity: t }),
      exit: i ?? al(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function sl(e, t) {
  let n = fe(),
    r = ol(e),
    i = e.styleAppearEffectEnabled,
    a = Kc(i ? r.initial : r.animate, i),
    o = A.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = At(),
    c = A.useRef(),
    l = A.useCallback(async ({ transition: i, ...o }, s) => {
      let l = i ?? r.animate.transition ?? e.transition;
      await c.current;
      let u = ce.get(t.current);
      c.current = Promise.all(
        SS.map((e) => {
          s && a.values[e].set(r.initial[e] ?? wS[e]);
          let t = o[e] ?? wS[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (B(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...l, onComplete: () => r() };
                typeof t == `number` && Oe(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    u = e.animateOnce && o.current.lastAppearState === !0;
  Ds(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      if (t) {
        o.current.scheduledAppearState = e;
        return;
      }
      ((o.current.scheduledAppearState = void 0),
        (o.current.lastAppearState = e),
        n !== e && l(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !u,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let d = e.targets && i && !e.scrollDirection;
  return (
    A.useEffect(() => {
      if (!d) return;
      let t = { initial: !0 },
        n = `initial`;
      return oe((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = il(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let u = Me(a.current, s, c);
        if ((e.animateOnce && t[u]) || ((t[u] = !0), n === u)) return;
        n = u;
        let d = Ky(r)[u];
        d && l(d);
      });
    }, [s, d]),
    rl(e.scrollDirection, (e) => void l(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    jt(() => {
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of SS) a.values[e].set(r.initial?.[e] ?? wS[e]);
    }),
    C(() => ({ values: a.values, style: i ? TS : ES }), [i])
  );
}
function cl(e, t) {
  let n = A.useRef({});
  A.useEffect(() => {
    if (t !== void 0)
      for (let r of e_(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = Le({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              })));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), R.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function ll(e, t) {
  let n = RS();
  return {
    inputRange: tl(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of SS) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function ul(e) {
  let t = RS();
  for (let { target: n } of e) for (let e of SS) t[e]?.push(n[e]);
  return t;
}
function dl(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  a
) {
  let o = fe(),
    s = Kc(LS(n, o), t),
    c = !t || !n,
    l = e === `onScrollTarget`,
    u = At();
  return (
    f(() => {
      if (!(c || !l))
        return oe((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: a } = ll(n, i * t.containerLength);
          if (r.length !== 0)
            for (let e of SS)
              (o && e !== `opacity`) ||
                (r.length === a[e].length &&
                  a[e][0] !== void 0 &&
                  s.values[e].set(Me(t.current, r, a[e])));
        });
    }, [o, l, i, n, c]),
    ws(
      a,
      (t) => {
        if (c || l || t === null) return;
        let r = ul(n);
        return oe(
          (e, { y: t }) => {
            for (let e of SS)
              (o && e !== `opacity`) ||
                (zS.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  s.values[e].set(Me(t.progress, zS, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [u, o, e, l, n, c]
    ),
    cl(s.values, r),
    jt(() => {
      if (c) return;
      let e = LS(n, o);
      for (let t of SS) s.values[t].set(e?.[t] ?? wS[t]);
    }),
    A.useMemo(() => ({ values: s.values, style: t ? TS : ES }), [t])
  );
}
function fl(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function pl(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = Mc(n);
    if (r) {
      for (let i of VS)
        if (BS[i]?.has(r)) {
          t[i][r] = Ky(e)[n];
          break;
        }
    } else t.forwardedProps[n] = Ky(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = fl(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = fl(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function ml(e) {
  return V(e) && WS in e;
}
function hl(e, t) {
  if (!e || !V(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Te(r) || !Gc(n) || (B(r.get()) && t[n].push(r));
  }
}
function gl(e) {
  return z(e) || Array.isArray(e);
}
function _l() {
  return A.useContext(KS);
}
function vl(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function yl() {
  if (j === void 0 || QS)
    return T(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw eC;
}
function bl({ children: e }) {
  return t(nC) ? T(_, { children: e }) : T(x, { fallback: tC, children: e });
}
function xl() {
  return T(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function Sl(e, t) {
  if (!Vg || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  an(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Cl(...e) {
  console.error(...e);
}
function wl() {
  return X.current() !== X.canvas;
}
function Tl({ getErrorMessage: e, fallback: t, children: n }) {
  return wl()
    ? T(El, { fallback: t, children: T(iC, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function El({ children: e, fallback: t = rC }) {
  return j === void 0 ? T(x, { fallback: t, children: e }) : T(bl, { children: e });
}
function Dl() {
  return A.useContext(oC);
}
function Ol() {
  let e = Dl();
  return A.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function kl({ children: e, scopeId: t, nodeId: n }) {
  let r = Dl(),
    i = A.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return T(oC.Provider, { value: i, children: e });
}
function Al(e, t) {
  return `${sC}${e}:${t}`;
}
function jl(e, t) {
  return Nl(`component`, e, t);
}
function Ml(e, t) {
  return Nl(`override`, e, t);
}
function Nl(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${Al(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function Pl(e, t, n, r, i, a) {
  let o = Il(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function Fl(e, t, n, r) {
  return Il(e, t, n, r);
}
function Il(e, t, n, r) {
  return !!(Ze(n) || (n === 1 && r && e === t));
}
function Ll(e, t, n, r, i, a) {
  let o = Dl();
  if (Ze(t) || Ze(n)) return T(aC, { children: e });
  let { disableCustomCode: s } = XS();
  return s && r
    ? T(`div`, {
        style: {
          padding: `12px 16px`,
          borderWidth: 1,
          borderRadius: 6,
          borderStyle: `solid`,
          borderColor: `rgba(149, 149, 149, 0.15)`,
          backgroundColor: `rgba(149, 149, 149, 0.1)`,
          fontSize: 12,
          color: `#a5a5a5`,
        },
        children: `Code component disabled`,
      })
    : (Pl(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = T(Tl, { getErrorMessage: jl.bind(null, t, n), fallback: null, children: e })),
      i && (e = T(kl, { scopeId: t, nodeId: n, children: e })),
      e);
}
function Rl(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function zl(e) {
  return !(!e || e.placement || e.alignment);
}
function Bl(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      U(e);
  }
}
function Vl(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${Bl(t)}, -100%`;
    case `right`:
      return `0%, ${Bl(t)}`;
    case `bottom`:
      return `${Bl(t)}, 0%`;
    case `left`:
      return `-100%, ${Bl(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function Hl(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(hC)) {
      let e = n.getAttribute(hC);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function Ul(e) {
  let { registerCursors: n } = t(lC),
    r = Sa(() => e),
    i = ne();
  f(() => n(r, i), [n, i]);
}
function Wl(e) {
  return !!(e && typeof e == `object` && _C in e);
}
function Gl(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function Kl() {
  return X.current() === X.canvas;
}
function ql(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function Jl(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function Yl(e, t, n, r) {
  if (z(e)) {
    let i = ql(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = hi(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function Xl(e) {
  return z(e) && e.startsWith(`data:${wC}`);
}
function Zl(e) {
  if (Xl(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(wC.length),
        r = t.searchParams,
        i = r.has(bC) ? r.get(bC) : void 0,
        a,
        o = r.get(xC),
        s = r.get(SC),
        c = r.get(CC);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function Ql(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = Zl(e);
    if (!n?.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function $l(e) {
  if (!Xl(e)) return e;
  let t = Zl(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: eu(i) };
}
function eu(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function tu({ children: e }) {
  return T(TC.Provider, { value: void 0, children: e });
}
function nu(e, n, r, i, a, o) {
  let c = t(TC),
    l = Ol(),
    u = C(() => ({ scopeId: n, nodeId: r, furthestExternalComponent: l }), [n, r, l]),
    d = Dt(),
    f = kt(),
    { locales: m } = Vr(),
    h = C(() => {
      let e = Wl(i) ? i : $l(i);
      if (e) return Yl(e, d, f, m);
    }, [f, i, d, m]),
    g = !!(!Kl() && c?.nodeId && u.nodeId),
    _ = s(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), jn(e))) {
            au(a.href, ``, `_blank`);
            return;
          }
          h ? a.navigate?.() : au(a.href, a.rel, a.target);
        }
      },
      [a, h]
    ),
    y = s(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), au(a.href, ``, `_blank`));
      },
      [a]
    ),
    b = s(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          h ? a.navigate?.() : au(a.href, a.rel, a.target));
      },
      [a, h]
    );
  ws(
    o,
    (e) => {
      e !== null && g && (e.dataset.hydrated = `true`);
    },
    [g]
  );
  let x = e;
  return (
    g &&
      (p.forEach(e, (e) => {
        iu(e) &&
          (H(
            ru(c),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          H(
            ru(u),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          yC.collectNestedLink(c, u));
      }),
      (x = p.map(e, (e) => {
        if (!iu(e)) return e;
        let t = ou(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: _,
            onAuxClick: y,
            onKeyDown: b,
            as: r.as && ou(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return v(t, { ...i, ref: a }, n);
      }))),
    T(TC.Provider, { value: u, children: x })
  );
}
function ru(e) {
  return !Ze(e?.nodeId);
}
function iu(e) {
  return D(e) && (ou(e.type) !== e.type || ou(e.props.as) !== e.props.as);
}
function au(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function ou(e) {
  return e === `a` ? `span` : Ge(e) && je(e) === `a` ? ve.span : e;
}
function su(e) {
  e &&
    R.read(() => {
      let t = document.getElementById(e);
      if (!t) return;
      let n = getComputedStyle(t),
        r = n.getPropertyValue(`--selection-color`).trim(),
        i = n.getPropertyValue(`--selection-background-color`).trim();
      R.render(() => {
        let t = document.querySelectorAll(`[data-framer-portal-id="${e}"]`);
        t.length !== 0 &&
          (r && t.forEach((e) => e.style.setProperty(EC, r)),
          i && t.forEach((e) => e.style.setProperty(DC, i)));
      });
    });
}
function cu(e) {
  return [
    `[data-framer-portal-id="${e}"] * ::selection {
    color: var(${EC});
    background-color: var(${DC});
}`,
  ];
}
function lu({ triggerId: e, children: t }) {
  return (
    A.useLayoutEffect(() => {
      e && su(e);
    }, [e]),
    t
  );
}
function uu(e) {
  return `${e?.x}-${e?.y}`;
}
function du(e) {
  switch (e) {
    case `top`:
      return `bottom`;
    case `right`:
      return `left`;
    case `bottom`:
      return `top`;
    case `left`:
      return `right`;
    default:
      U(e);
  }
}
function fu(e, t, n, r = 0) {
  let i = Math.max(e, r);
  if (e < i) return i;
  let a = t + r;
  return i + a > n ? n - a : i;
}
function pu(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return t.y < 0 || t.y + t.height > n.height ? `y` : void 0;
    case `left`:
    case `right`:
      return t.x < 0 || t.x + t.width > n.width ? `x` : void 0;
    default:
      U(e);
  }
}
function mu(e, t, n, r) {
  switch (pu(t, e, r)) {
    case `x`:
      return { placement: du(t), x: n.x * -1, y: n.y };
    case `y`:
      return { placement: du(t), x: n.x, y: n.y * -1 };
    default:
      return { placement: t, x: n.x, y: n.y };
  }
}
function hu(e, t, n, r, i, a, o) {
  let s = Z.rebaseRectOnto(t, e, n, r),
    c = { x: s.x + i.x, y: s.y + i.y, width: t.width, height: t.height };
  if (!a) return [n, c];
  let { x: l, y: u, placement: d } = mu(c, n, i, a),
    f = Z.rebaseRectOnto(t, e, d, r);
  return [
    d,
    {
      x: fu(f.x + l, t.width, a.width, o),
      y: fu(f.y + u, t.height, a.height, o),
      width: t.width,
      height: t.height,
    },
  ];
}
function gu(e, t, n) {
  return kC.containsPoint([t, ...n], e) ? t : e;
}
function _u(e) {
  return {
    constrainX: (t) => Math.min(Math.max(t, e.x + AC), e.x + e.width - AC),
    constrainY: (t) => Math.min(Math.max(t, e.y + AC), e.y + e.height - AC),
  };
}
function vu({ x: e, y: t }, n, r, { constrainX: i, constrainY: a }) {
  let [o, s, c, l] = Z.points(r);
  switch (n) {
    case `left`: {
      let n = { x: i(e - jC), y: t };
      return [n, gu(l, s, [n, c]), gu(c, o, [n, l])];
    }
    case `right`: {
      let n = { x: i(e + jC), y: t };
      return [n, gu(s, l, [n, o]), gu(o, c, [n, s])];
    }
    case `top`: {
      let n = { x: e, y: a(t - jC) };
      return [n, gu(s, o, [n, l]), gu(l, c, [n, s])];
    }
    case `bottom`: {
      let n = { x: e, y: a(t + jC) };
      return [n, gu(o, s, [n, c]), gu(c, l, [n, o])];
    }
    default:
      U(n);
  }
}
function yu(e, t) {
  switch (e) {
    case `left`:
      return `${Math.min(t.y, 0)}px auto auto 0px`;
    case `right`:
      return `${Math.min(t.y, 0)}px 0px auto auto`;
    case `top`:
      return `0px auto auto ${Math.min(t.x, 0)}px`;
    case `bottom`:
      return `auto auto 0px ${Math.min(t.x, 0)}px`;
    default:
      U(e);
  }
}
function bu(e, t, n, r, i) {
  let a = Math.min(i.x, r.x),
    o = Math.min(i.y, r.y),
    s = Z.merge(r, i),
    c = vu({ x: e, y: t }, n, i, _u(r))
      .map((e) => `${e.x - a}px ${e.y - o}px`)
      .join(`, `);
  return {
    height: `${s.height}px`,
    width: `${s.width}px`,
    clipPath: `polygon(${c})`,
    inset: yu(n, Z.delta(r, i)),
  };
}
function xu(e) {
  switch (e) {
    case `start`:
      return 0;
    case `center`:
      return 0.5;
    case `end`:
      return 1;
    default:
      U(e);
  }
}
function Su(e = `bottom`, t = `center`) {
  switch (e) {
    case `top`:
      return { originX: xu(t), originY: 1 };
    case `right`:
      return { originX: 0, originY: xu(t) };
    case `bottom`:
      return { originX: xu(t), originY: 0 };
    case `left`:
      return { originX: 1, originY: xu(t) };
    default:
      U(e);
  }
}
function Cu(e) {
  let t = e.current,
    n = { position: `absolute`, scrolls: !1 };
  for (; t;) {
    if (
      t?.tagName === `BODY` ||
      (getComputedStyle(t)?.position === `fixed` && (n.position = `fixed`),
      (t.scrollWidth > t.clientWidth || t.scrollHeight > t.clientHeight) && (n.scrolls = !0),
      n.scrolls && n.position === `fixed`)
    )
      return n;
    t = t.parentElement;
  }
  return n;
}
function wu(e) {
  return (R.read(e, !0), () => Pe(e));
}
function Tu(e) {
  let t = 0,
    n = 0;
  return (r, i, a, o) => {
    e.current?.style &&
      ((t = o?.clientX ?? t),
      (n = o?.clientY ?? n),
      Object.assign(e.current.style, bu(t, n, a, r, i)));
  };
}
function Eu(e, t, n, r, i) {
  e.current &&
    Object.assign(e.current.style, {
      position: t,
      visibility: `visible`,
      left: (n?.x ?? 0) + r + `px`,
      top: (n?.y ?? 0) + i + `px`,
    });
}
function Du(e, t, n, { safeArea: r, onDismiss: i }) {
  let a = Sa(() => new Set()),
    o = A.useContext(MC),
    [s, c] = le();
  return (
    A.useEffect(() => {
      if (s) {
        if (!t.current) return;
        ((t.current.style.pointerEvents = ``), o.add(t.current));
      } else {
        if (!t.current) return;
        ((t.current.style.pointerEvents = `none`), o.delete(t.current), c());
      }
    }, [s, c, t, o]),
    A.useEffect(() => {
      if (!r) {
        let e = (e) => {
          e.key === `Escape` && i();
        };
        return (J.addEventListener(`keyup`, e), () => J.removeEventListener(`keyup`, e));
      }
      let o;
      function s() {
        if (!(!o || a.size !== 0)) {
          for (let r of document.elementsFromPoint(o.x, o.y))
            if (r === e.current || r === t.current || r === n.current) return;
          i();
        }
      }
      function c(e) {
        ((o = e), R.read(s));
      }
      return (
        J.addEventListener(`mousemove`, c),
        () => {
          J.removeEventListener(`mousemove`, c);
        }
      );
    }, [i, r, e, n, t]),
    a
  );
}
function Ou({
  placement: e,
  alignment: t,
  offset: n,
  collisionDetectionSize: r,
  collisionDetectionPadding: i,
}) {
  return (a, o) => hu(a, o, e, t, n, r, i);
}
function ku(e, t) {
  return Sa(() => {
    let { originX: n, originY: r } = Su(e, t),
      i = { x: M(n), y: M(r) };
    return [
      i,
      (e) => {
        let n = Su(e, t);
        (i.x.set(n.originX), i.y.set(n.originY));
      },
    ];
  });
}
function Au(e, { x: t, y: n }) {
  if (!e || !Ja(e) || !qa(e) || (!V(e.props.style) && !Ze(e.props.style))) return null;
  let r = { ...e.props.style, originX: t, originY: n };
  return A.cloneElement(e, { style: r });
}
function ju(e, t) {
  if (t || Ze(e)) {
    let e = document.querySelector(`#${PC}`) ?? document.querySelector(`#${NC}`);
    if (e) return e;
  }
  return (z(e) ? document.querySelector(e) : void 0) || document.body;
}
function Mu({
  alignment: e,
  placement: n,
  safeArea: r,
  offsetX: i,
  offsetY: a,
  anchorRef: o,
  className: s,
  children: c,
  portalSelector: l,
  zIndex: u,
  collisionDetection: d = !1,
  collisionDetectionPadding: f,
  onDismiss: p,
  ...m
}) {
  let g = A.useRef(null),
    _ = A.useRef(null),
    v = A.useRef(null),
    [y, b] = ku(n, e);
  A.useLayoutEffect(() => {
    if (!xs(o) || !v.current || !n || !e) return;
    let t = { x: i ?? 0, y: a ?? 0 },
      s,
      c = !1,
      l = !1,
      u,
      p,
      m,
      h,
      y,
      x = 0,
      S = 0,
      C = Cu(o),
      w = C.position,
      T = v.current.getBoundingClientRect(),
      E = Ou({
        placement: n,
        alignment: e,
        offset: t,
        collisionDetectionSize: d ? { width: J.innerWidth, height: J.innerHeight } : void 0,
        collisionDetectionPadding: f,
      }),
      D = () => {
        c || (Eu(g, w, m, x, S), r && y(u, m, p, h), (h = void 0));
      },
      ee = () => {
        ((y = Tu(_)), h ? D() : Eu(g, w, m, x, S), (l = !0));
      },
      O = () => {
        c || b(p);
      },
      k = () => {
        if (!E || c) return;
        (w === `fixed` ? ((x = 0), (S = 0)) : ((x = J.scrollX), (S = J.scrollY)),
          (u = o.current.getBoundingClientRect()));
        let e = E(u, T);
        ((p = e[0]), (m = e[1]));
      };
    if ((k(), O(), ee(), C.scrolls && (s = wu(k)), !r))
      return () => {
        (s?.(), (c = !0));
      };
    let te = (e) => {
        ((h = e), l && (R.read(k, !1, !0), R.update(O, !1, !0), R.render(D, !1, !0)));
      },
      A = o.current;
    return (
      A.addEventListener(`mousemove`, te),
      () => {
        (A.removeEventListener(`mousemove`, te), s?.(), (c = !0));
      }
    );
  }, [r, n, e, i, a, o, d, f, b]);
  let x = Du(o, g, _, { safeArea: r, onDismiss: p }),
    S = t(Zb);
  return h.createPortal(
    O(ve.div, {
      ref: g,
      className: s,
      style: {
        top: 0,
        left: 0,
        visibility: `hidden`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,
        zIndex: u,
      },
      ...m,
      children: [
        r
          ? T(`div`, { ref: _, style: { position: `absolute` }, "data-safearea": !0 })
          : T(`div`, { style: { position: `fixed`, inset: 0 }, "aria-hidden": !0, onClick: p }),
        T(MC.Provider, {
          value: x,
          children: T(tu, {
            children: T(OC, {
              triggerId: o.current?.id ?? void 0,
              children: T(`div`, { ref: v, children: Au(c, y) }),
            }),
          }),
        }),
      ],
    }),
    ju(l, S)
  );
}
function Nu(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Nu(e.parentElement, t)
      : null;
}
function Pu({ children: e }) {
  return T(bl, { children: e });
}
function Fu(e) {
  return m(function (t, n) {
    return T(Pu, { children: T(e, { ...t, ref: n }) });
  });
}
function Iu(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return Ru(e, t, o, s, a, c, l, i, r);
}
function Lu(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && ql(t))
    try {
      let [i, a] = t.split(`#`, 2);
      H(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      H(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = hi(e.routes, o, s, r),
        d = e.getRoute(c);
      if (d)
        return {
          routeId: c,
          route: d,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, l),
          locale: u ? r?.find(({ id: e }) => e === u) : void 0,
        };
    } catch {}
}
function Ru(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = ei(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function zu() {
  let e = t(LC),
    n = kt()?.pathVariables;
  return e || n;
}
function Bu(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(IC)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Vu() {
  let e = d.connection || d.mozConnection || d.webkitConnection || {},
    t = d.deviceMemory && d.deviceMemory > BC,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? VC : HC));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: zC }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    let { id: n, preload: i } = e,
      a = GC.get(n);
    if (!a?.size || WC.has(n)) return;
    (++s, WC.add(n));
    let c = i()?.catch(() => {});
    (o.unobserve(t), UC.delete(t));
    for (let e of a) (o.unobserve(e), UC.delete(e));
    (a.clear(), GC.delete(n), await c, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = UC.get(e);
      if (!n || WC.has(n.id)) {
        (o.unobserve(e), UC.delete(e));
        continue;
      }
      let r = n.id,
        a = GC.get(r),
        l = GC.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (s >= i) continue;
        (a ? a.add(e) : GC.set(r, new Set([e])), setTimeout(c, RC, n, e));
      } else (a && a.delete(e), l <= 1 && GC.delete(r));
    }
  }
  return (e, t, n) => {
    if (!WC.has(n))
      return (
        UC.set(e, { id: n, preload: t }),
        o.observe(e),
        () => {
          (UC.delete(e), o.unobserve(e));
        }
      );
  };
}
function Hu(e, t) {
  let n = ql(e),
    r = {
      href: e === `` || Jl(e, n) ? e : `https://${e}`,
      target: Uu(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = Hn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function Uu(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Wu(e, t) {
  console.warn(
    ot(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function Gu(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Wu(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return rt(i) ? i.catch(Wu) : i;
  } catch (e) {
    Wu(e);
  }
}
function Ku(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Gu(o, r, n);
      rt(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function qu() {
  let e = hn();
  return s((t, n, r, i = []) => Ku(t, n, r, e, i), [e]);
}
function Ju({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = hn();
  return s(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = Wl(r) ? r : $l(r);
      if (!Wl(c))
        return an(
          `published_site_click`,
          {
            ...s,
            href: o ? Yu(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (z(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (rt(n) ? await n : n) ?? null;
        }
      }
      return an(
        `published_site_click`,
        {
          ...s,
          href: o ? Yu(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function Yu(e) {
  try {
    let t = new URL(e, J.document.baseURI);
    return t.origin === J.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function Xu(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function Zu(e, t, n) {
  return async (r) => {
    let i = jn(r),
      a = Nu(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await $_({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function Qu(e, t, n, r, i, a, o, s) {
  if (!n) return Hu(e, r);
  let c = Lu(t, e, s, o);
  if (!c) return Hu(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Hu(e, r);
  let m = ei(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !Hg,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = Uu(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = { pathVariables: f, locale: p },
    v = (e) =>
      Xu(
        t,
        l,
        () =>
          i(l, _, { priority: `user-blocking`, yieldBeforePreload: !1, shouldLoadRouteData: !g }),
        d,
        f,
        r.smoothScroll,
        e
      );
  return {
    href: m,
    target: h,
    onClick: Zu(m, r.trackLinkClick, v),
    navigate: v,
    "data-framer-page-link-current":
      (n && Bu(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, _, { priority: `background`, yieldBeforePreload: !0, shouldLoadRouteData: !g }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
  };
}
function $u(e, t, n) {
  let r = ed(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (qe(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (qe(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function ed(e, t) {
  let n = V(e) ? e : void 0,
    r = n && !Xe(n),
    i = t && !Xe(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function td(e, t, n) {
  if (!(t && yn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: nd } : { ...i, onTap: r }) : e;
}
function nd(e) {
  let t = Nu(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function rd({ EditorBar: e, fast: n = !1 }) {
  let r = t(JC),
    i = g(Gg, n ? ZC : QC, qg),
    a = XS(),
    o = C(() => {
      let e = {},
        t;
      for (t in a)
        a.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = a[t]);
      return e;
    }, [a]);
  return !e || !r || !i
    ? null
    : T(XC, { children: T(x, { children: T(e, { framerSiteId: r, features: o }) }) });
}
function id({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = l(),
    a = l(),
    o = l(t),
    s = l(null);
  ((o.current = t),
    c(() => {
      e && ((r.current ??= new Set()), r.current.add(e), a.current?.(e));
    }, [e]));
  let [u] = i(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        o.current ? od(o.current, o.current.currentRouteId, o.current.currentPathVariables) : ``,
      resolveRoute: (e) => (o.current ? od(o.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        a.current = e;
      },
      sendTrackingEvent: async (e) => {
        o.current && ad(o.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: s,
  }));
  return T($C.Provider, { value: u, children: n });
}
async function ad(e, t) {
  if (!on(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    an(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function od(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? Vn(r.path, n) : r.path) : ``;
}
function sd(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function cd() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((ew = e.timeZone), (tw = e.locale));
}
function ld({ routeId: e, url: t, pathVariables: n, localeId: r }) {
  Or({ routeId: e, pathVariables: n, localeId: r, paginationInfo: yr()?.paginationInfo }, t);
}
function ud(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let { historyPath: i, hash: a, pathVariables: o, localeId: s, currentRoutePath: c } = n,
    l = c !== void 0 && c === r,
    u = yr();
  Or(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      localeId: s,
      queryParamBackAnchorSearch: l ? u?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function dd(e, t, n, r) {
  let i = yr();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    Or(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
      },
      ei(t, n)
    ));
}
function fd() {
  return En() >= 17 ? aw : iw;
}
function pd(e = yd) {
  let t = (e) => {
    e.persisted && Sd();
  };
  Cn() && (j.addEventListener(`pageshow`, t), (rw = Date.now() - fd()));
  let n = md(),
    r = bd(e);
  return function () {
    (j.removeEventListener(`pageshow`, t), n(), r());
  };
}
function md() {
  let e = j.history.scrollRestoration;
  return (
    (j.history.scrollRestoration = `manual`),
    function () {
      j.history.scrollRestoration = e;
    }
  );
}
function hd(e) {
  return V(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function gd() {
  return { x: j.scrollX, y: j.scrollY };
}
function _d() {
  let e = yr();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (hd(t)) return t;
}
function vd(e) {
  let t = yr();
  t && (Er({ ...t, scrollPosition: e }), Cn() && (rw = Date.now()));
}
function yd(e, t = !1) {
  let n = _d();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (Cn() && !t) {
      let e = fd();
      if (Date.now() - rw < e) return;
    }
    vd(e);
  }
}
function bd(e) {
  let t = () => {
      e(gd());
    },
    n = () => {
      e(gd(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r), j.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r), j.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in j)) {
    let e = xd(t);
    return function () {
      (i(), e());
    };
  }
  return (
    j.addEventListener(`scrollend`, t),
    function () {
      (i(), j.removeEventListener(`scrollend`, t));
    }
  );
}
function xd(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), !(t === void 0 || br(yr()) !== t) && e());
    },
    a = () => {
      let e = br(yr());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = Cn() ? fd() : 100;
      t = j.setTimeout(i, a);
    };
  return (
    j.addEventListener(`scroll`, a),
    function () {
      (j.removeEventListener(`scroll`, a), r());
    }
  );
}
function Sd() {
  let e = _d();
  return e ? (j.scrollTo(e.x, e.y), !0) : !1;
}
function Cd(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function wd(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (Cd(n, t), !0);
}
function Td(e, t, n) {
  n !== `preserve-scroll-position` &&
    R.render(
      () => {
        (n === `restore-scroll-position` && Sd()) || wd(e, t) || j.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function Ed(e, t) {
  R.read(() => {
    j.scrollY !== 0 ||
      j.scrollX !== 0 ||
      R.render(
        () => {
          Sd() || wd(e, t);
        },
        !1,
        !0
      );
  });
}
function Dd(e) {
  let t = XS().scrollRestoration,
    n = l(void 0),
    r = l(!1),
    i = !!(t && !e),
    a = s(
      (e) => {
        ((n.current = e), i && (r.current = !0));
      },
      [i]
    ),
    o = s((e, t = !1) => {
      r.current || yd(e, t);
    }, []),
    c = s(() => {
      i && (r.current = !0);
    }, [i]),
    u = s(() => n.current !== void 0 || r.current, []),
    d = s((e, t) => {
      let i = n.current;
      !i ||
        i.routeId !== e ||
        i.remountKey !== t ||
        ((n.current = void 0), (r.current = !1), Td(i.hash, i.shouldSmoothScroll, i.behavior));
    }, []);
  return (
    f(() => {
      if (i) return pd(o);
    }, [i, o]),
    {
      usesCustomScrollRestoration: i,
      isNavigationCommitPending: u,
      onHistoryTraversal: c,
      scheduleScroll: a,
      commitNavigationScroll: d,
    }
  );
}
function Od({ currentRouteId: e, remountKey: t, scrollRestoration: n }) {
  let { commitNavigationScroll: r, usesCustomScrollRestoration: i } = n;
  return (
    f(() => {
      r(e, t);
    }),
    c(() => {
      i && Ed(j.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function kd() {
  let [e, t] = A.useState(0);
  return [e, A.useCallback(() => t((e) => e + 1), [])];
}
function Ad({ children: e, loadSnippetsModule: t }) {
  return T(gw.Provider, { value: t, children: e });
}
function jd() {
  return A.useContext(gw);
}
function Md(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function Nd(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (H(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (H(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      U(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await Pd(a.createContextualFragment(e), r, i));
}
async function Pd(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = Fd(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await Pd(r, e, null)));
  }
}
function Fd(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return Id(r, t, n);
}
function Id(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function Ld(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = fw), (n = pw));
      break;
    case `bodyEnd`:
      ((t = mw), (n = hw));
      break;
    case `headStart`:
      ((t = cw), (n = lw));
      break;
    case `headEnd`:
      ((t = uw), (n = dw));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function Rd(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = Md(e),
    s = t.nextSibling;
  for (; s && s !== n;) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function zd(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = Ld(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = Rd(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((Bd(t, o), s)) {
      await Nd(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = Md(e.id),
      u = `${c}
${e.code}
${l}`,
      d = Hd(e.id, n, r, i);
    d ? await Nd(u, d, `afterend`) : await Nd(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function Bd(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (Vd(n) && n.remove(), (n = e));
  }
}
function Vd(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function Hd(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = Rd(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function Ud() {
  let e = jd();
  return s(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(ow)?.dataset[sw] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await zd(t, n, r);
      }
    },
    [e]
  );
}
function Wd(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function Gd({
  siteCanonicalURL: e,
  activeLocale: t,
  currentRoute: n,
  currentRouteId: r,
  currentPathVariables: i,
  locales: a,
  collectionUtils: o,
}) {
  if (!e || !t || !n?.canonicalLocaleIdByLocaleId) return;
  let s,
    c = [],
    l = n.canonicalLocaleIdByLocaleId[t.id],
    u,
    d;
  for (let e of a)
    if (((u ??= e.id === a_ ? e : void 0), (d ??= e.id === l ? e : void 0), d && u)) break;
  if (d) {
    let { path: a } = await Kn({
      currentLocale: t,
      nextLocale: d,
      defaultLocale: u,
      route: n,
      routeId: r,
      pathVariables: i,
      collectionUtils: o,
      preserveQueryParams: !1,
    });
    a && (s = Wd(a, e));
  }
  let f;
  for (let s of a) {
    if (n.includedLocales && !n.includedLocales.includes(s.id)) continue;
    let { path: a } = await Kn({
      currentLocale: t,
      nextLocale: s,
      defaultLocale: u,
      route: n,
      routeId: r,
      pathVariables: i,
      collectionUtils: o,
      preserveQueryParams: !1,
    });
    if (!a) continue;
    let l = Wd(a, e);
    (c.push({ href: l, hrefLang: s.code }), s.id === a_ && (f = l));
  }
  return (
    f && c.push({ href: f, hrefLang: `x-default` }),
    () => {
      (mr(s, j.location.href), hr(c));
    }
  );
}
function Kd({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: a,
  locales: o,
  siteCanonicalURL: s,
}) {
  let l = hn(),
    u = Ud();
  c(() => {
    let c = !0,
      d = () => void (c = !1);
    return !e || !t || e.id === t.id
      ? (u(i, n ?? {}, e, a).catch((e) => {
          c && Sl(e);
        }),
        d)
      : (Kn({
          currentLocale: e,
          nextLocale: t,
          defaultLocale: o.find(({ id: e }) => e === a_),
          route: r,
          routeId: i,
          pathVariables: n,
          collectionUtils: l,
          preserveQueryParams: !1,
        })
          .then(async (d) => {
            if (!c) return;
            let f = d ? d.pathVariables : n;
            if ((await u(i, f ?? {}, t, a), !c)) return;
            let p = await Gd({
              siteCanonicalURL: s,
              activeLocale: e,
              currentRoute: r,
              currentRouteId: i,
              currentPathVariables: n,
              locales: o,
              collectionUtils: l,
            });
            c && p?.();
          })
          .catch((e) => {
            c && Sl(e);
          }),
        d);
  }, [e, l, t, n, r, i, a, u, o, s]);
}
function qd(e) {
  if (!e) return Bg;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function Jd(e) {
  let t = Pr(e),
    n = l(void 0),
    r = s(() => {
      (n.current?.abort(), (n.current = void 0));
    }, []);
  return {
    startNavigation: s(
      async (e, i, a, o = !0) => {
        r();
        let s = o ? new AbortController() : void 0;
        n.current = s;
        let c = s?.signal,
          l = Pt(c);
        if ((i.promise.finally(l), a === void 0)) return (e(c), i.promise);
        let u,
          d = new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch(Bg);
        if ((t(d, s, a), e(c), await i.promise, c?.aborted)) return;
        let f = j.navigation?.transition;
        u();
        try {
          await f?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        c?.aborted || hv();
      },
      [r, t]
    ),
    cancelPendingNavigation: r,
  };
}
function Yd({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: a,
  routes: o,
  initialLocaleId: d,
  initialCollectionItemId: p,
  locales: m = i_,
  preserveQueryParams: h = !1,
  LayoutTemplate: g,
  EditorBar: _,
  siteCanonicalURL: v,
  adaptLayoutToTextDirection: y,
}) {
  (si(), kr({ disabled: t, routeId: r, initialPathVariables: n, initialLocaleId: d }));
  let b = fr(),
    [x, S] = kd(),
    w = _r(`framer-route-change`),
    E = C(() => (!XS().synchronousNavigationOnDesktop || !An() ? k : (e) => e()), []),
    D = l(!0),
    ee = l(),
    te = l(r),
    A = l(n),
    ne = l(d),
    re = Dd(t),
    { isNavigationCommitPending: ie, usesCustomScrollRestoration: M } = re,
    { startNavigation: ae, cancelPendingNavigation: oe } = Jd(M),
    se = re.scheduleScroll,
    N = ne.current,
    ce = te.current,
    le = o[ce],
    ue = le?.path;
  if (!le) throw Error(`Router cannot find route for ${ce}`);
  let de = C(() => m.find(({ id: e }) => (N ? e === N : e === a_)) ?? null, [N, m]),
    fe = !de || !le.includedLocales || le.includedLocales.includes(de.id),
    pe = C(() => {
      if (!de) return null;
      let e;
      return (
        (e = fe
          ? le?.canonicalLocaleIdByLocaleId?.[de.id]
          : Object.values(o).find((e) => e.path && Iv.has(e.path))?.canonicalLocaleIdByLocaleId?.[
              de.id
            ]),
        e ? (m.find(({ id: t }) => t === e) ?? de) : de
      );
    }, [de, le, m, fe, o]),
    me = de?.textDirection ?? `ltr`,
    he = y ? me : `ltr`;
  f(() => {
    y && document.documentElement.setAttribute(`dir`, me);
  }, [me, y]);
  let ge = Mr(),
    _e = C(
      () => ({
        activeLocale: de,
        contentLocale: pe,
        locales: m,
        setLocale: async (e) => {
          let n = w({ localized: !0 });
          await $_({ priority: `user-blocking`, continueAfter: `paint` });
          let r;
          z(e) ? (r = e) : V(e) && (r = e.id);
          let i = m.find(({ id: e }) => e === a_),
            a = m.find(({ id: e }) => e === r);
          if (!a) return;
          let s = te.current,
            c = o[s];
          if (c)
            try {
              let e = await ge({
                currentLocale: de,
                nextLocale: a,
                route: c,
                routeId: s,
                defaultLocale: i,
                pathVariables: A.current,
                preserveQueryParams: h,
              });
              if (!e) return;
              let r = e.path;
              ((D.current = !1),
                (A.current = e.pathVariables),
                (ne.current = a.id),
                (ee.current = r));
              let o = c.path && e.pathVariables ? Vn(c.path, e.pathVariables) : c.path;
              (se({
                routeId: s,
                remountKey: `${a.id}${o}`,
                hash: void 0,
                shouldSmoothScroll: !1,
                behavior: `preserve-scroll-position`,
              }),
                ae(
                  () => {
                    b(s, s, () => E(S));
                  },
                  n,
                  t
                    ? void 0
                    : r
                      ? () => {
                          ld({
                            routeId: s,
                            url: r,
                            pathVariables: e.pathVariables,
                            localeId: a.id,
                          });
                        }
                      : void 0,
                  !1
                ));
            } catch {}
        },
      }),
      [de, pe, t, S, m, h, o, se, ae, b, w, E, ge]
    ),
    P = s(
      (e, t, n, r, i, a, s, c, l) => {
        D.current = !1;
        let u = te.current,
          d = o[e],
          f = Nt(d, n),
          p = d?.path && i ? Vn(d.path, i) : d?.path;
        if (
          ((te.current = e),
          (A.current = i),
          (ne.current = t),
          (ee.current = r),
          se({
            routeId: e,
            remountKey: `${t}${p}`,
            hash: f,
            shouldSmoothScroll: c ?? !1,
            behavior: a
              ? M
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          a)
        ) {
          (oe(), E(S));
          return;
        }
        ae(
          (t) => {
            b(u, e, () => E(S), t);
          },
          s,
          l,
          !0
        );
      },
      [S, o, M, se, ae, b, E, oe]
    );
  (Ar(re, te, P),
    c(() => {
      if (t) return;
      let e = () => {
        let e = yr(),
          t = j.location.hash === `` ? void 0 : j.location.hash.slice(1);
        (e && Nt(o[e.routeId], e.hash) === t) ||
          Dr({
            ...(e ||
              (Sr() ?? { routeId: te.current, pathVariables: A.current, localeId: ne.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (j.addEventListener(`hashchange`, e), () => j.removeEventListener(`hashchange`, e));
    }, [t, o]));
  let ve = s(
      async (e, n, r, i, a) => {
        let s = o[e],
          c = ut(s?.page) ? s.page.getStatus() : void 0,
          l = c?.hasRendered,
          u = w({ cached: l, preloaded: l ? void 0 : c?.hasLoaded }),
          d = qd(a);
        if (
          ($_({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(d),
          await $_({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = s?.path ?? `/`;
          for (let n of t.matchAll(tv)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = Nt(s, n),
          p = A.current,
          g = ne.current;
        if (sd({ routeId: te.current, pathVariables: p }, { routeId: e, pathVariables: r })) {
          let a = ie();
          if (a) {
            let t = s?.path && r ? Vn(s.path, r) : s?.path;
            se({
              routeId: e,
              remountKey: `${g}${t}`,
              hash: f,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else oe();
          (u.ignore?.(), !a && M && Td(f, i, `scroll-to-hash-or-top`));
          let c = o[e];
          (!t &&
            c &&
            dd(
              e,
              c,
              {
                currentRoutePath: c.path,
                currentRoutePathLocalized: c.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: n,
                localeId: g,
                preserveQueryParams: h,
                siteCanonicalURL: v,
              },
              d
            ),
            !a && !M && Td(f, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!s) return;
        let _ = o[te.current],
          y =
            Zr(v) +
            ei(s, {
              currentRoutePath: _?.path,
              currentRoutePathLocalized: _?.pathLocalized,
              currentPathVariables: p,
              hash: n,
              pathVariables: r,
              localeId: g,
              localeSlug: m.find(({ id: e }) => e === g)?.slug,
              preserveQueryParams: h,
              relative: !1,
              siteCanonicalURL: v,
            });
        P(
          e,
          g,
          n,
          y,
          r,
          !1,
          u,
          i,
          t
            ? void 0
            : () => {
                (d(),
                  ud(e, s, {
                    historyPath: y,
                    currentRoutePath: _?.path,
                    hash: n,
                    pathVariables: r,
                    localeId: g,
                  }));
              }
        );
      },
      [oe, o, m, P, t, h, v, w, M, ie, se]
    ),
    F = Tt(o),
    ye = ee.current,
    I = A.current,
    be = nw(le, ce, ye, I, de, p),
    L = D.current;
  Kd({
    activeLocale: de,
    contentLocale: pe,
    currentPathVariables: I,
    currentRoute: le,
    currentRouteId: ce,
    isInitialNavigation: L,
    locales: m,
    siteCanonicalURL: v,
  });
  let xe = C(
      () => ({
        navigate: ve,
        getRoute: F,
        currentRouteId: ce,
        currentPathVariables: I,
        routes: o,
        collectionUtils: a,
        preserveQueryParams: h,
        pageviewEventData: be,
        siteCanonicalURL: v,
        isInitialNavigation: L,
      }),
      [ve, F, ce, I, o, a, h, v, be, L]
    ),
    Se = ue && I ? Vn(ue, I) : ue,
    Ce = `${N}${Se}`,
    we = Sa(() => ({ ...e, display: `contents` }));
  return T(Et, {
    api: xe,
    children: T(wv.Provider, {
      value: _e,
      children: T(Tv.Provider, {
        value: he,
        children: T(pC, {
          children: T(Kr, {
            routerRenderKey: x,
            isNavigationCommitPending: re.isNavigationCommitPending,
            children: O(id, {
              currentRoutePath: Se,
              routerAPI: xe,
              children: [
                _ && T(rd, { EditorBar: _, fast: !0 }),
                T($S, {
                  children: O(bl, {
                    children: [
                      T(cy.Start, {}),
                      T(Od, { currentRouteId: ce, remountKey: Ce, scrollRestoration: re }),
                      T(uy, {
                        notFoundPage: i,
                        defaultPageStyle: e,
                        routerRenderKey: x,
                        children: T(Xd, {
                          LayoutTemplate: g,
                          webPageId: le?.abTestingVariantId ?? ce,
                          style: e,
                          children: (t) =>
                            T(u, { children: fe ? fi(le.page, t ? we : e) : i && fi(i, e) }, Ce),
                        }),
                      }),
                      _ && T(rd, { EditorBar: _ }),
                      T(ri, {}),
                      T(cy.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function Xd({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? T(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function Zd(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function Qd(e) {
  return typeof e == `object` && !!e;
}
function $d(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!Qd(r)) return;
    r = r[e];
  }
  return r;
}
function ef(e) {
  return `${e.credentials}:${e.url}`;
}
function tf(e) {
  return z(e) && !Number.isNaN(Number(e));
}
function nf(e, t) {
  switch (e) {
    case `string`:
      return z(t) || B(t);
    case `color`:
      return z(t);
    case `boolean`:
      return Je(t);
    case `number`:
      return B(t) || tf(t);
    case `link`:
    case `image`:
      return z(t) && Jl(t, !1);
    default:
      return !1;
  }
}
function rf(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = $d(e.data, t.resultKeyPath);
  if (Ze(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!nf(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function af(e, t) {
  if (X.current() === X.canvas) return !1;
  let n = Math.max(t * 1e3, vw);
  return Date.now() >= e + n;
}
function of(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    routes: s,
    collectionUtils: c,
    notFoundPage: l,
    isReducedMotion: u = !1,
    skipAnimations: d = !1,
    includeDataObserver: f = !1,
    localeId: p,
    locales: m,
    preserveQueryParams: h,
    EditorBar: g,
    defaultPageStyle: _,
    disableHistory: v,
    LayoutTemplate: y,
    siteCanonicalURL: b,
    adaptLayoutToTextDirection: x,
    loadSnippetsModule: S,
    initialCollectionItemId: C,
  } = e;
  return (
    A.useEffect(() => {
      n || Ly.start();
    }, []),
    n
      ? T(Lr, {
          value: r ?? `preview`,
          children: T(Ae, {
            reducedMotion: d ? `always` : u ? `user` : `never`,
            skipAnimations: d,
            children: T(mn, {
              collectionUtils: c,
              children: T(Cw, {
                children: T(JC.Provider, {
                  value: a,
                  children: T(Ad, {
                    loadSnippetsModule: S,
                    children: T(Yd, {
                      initialRoute: i,
                      initialPathVariables: o,
                      initialLocaleId: p,
                      initialCollectionItemId: C,
                      routes: s,
                      collectionUtils: c,
                      notFoundPage: l,
                      locales: m,
                      defaultPageStyle: _ ?? { minHeight: `100vh`, width: `auto` },
                      preserveQueryParams: h,
                      EditorBar: g,
                      disableHistory: v,
                      LayoutTemplate: y,
                      siteCanonicalURL: b,
                      adaptLayoutToTextDirection: x,
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : T(f ? aS : A.Fragment, {
          children: T(Ot, {
            routes: s,
            children: T(qx, { children: A.isValidElement(t) ? t : A.createElement(t, { key: i }) }),
          }),
        })
  );
}
function sf(e) {
  return {
    trace(...t) {
      return $y.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return $y.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return $y.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return $y.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return $y.getLogger(e)?.error(...t);
    },
    get enabled() {
      return $y.getLogger(e) !== void 0;
    },
  };
}
function cf() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for(`Symbol.dispose`),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
function lf() {
  return ww.priority;
}
function uf(e) {
  let t = ww;
  return (
    (ww = e),
    {
      [cf()]() {
        ww = t;
      },
    }
  );
}
function df(e = ww.priority, t = ww.canYield) {
  if (!(!t || e === void 0)) return $_({ batch: !0, priority: Nn(e) });
}
function ff(e) {
  var t = [];
  try {
    Se(t, uf({ priority: ww.priority, canYield: !1 }));
    let n = e.next();
    return (H(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    var n = e,
      r = !0;
  } finally {
    ye(t, n, r);
  }
}
async function pf(e, t, n = ww.priority, r = ww.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0) {
    var o = [];
    try {
      (Se(o, uf(i)), (a = e.next()));
    } catch (e) {
      var s = e,
        c = !0;
    } finally {
      ye(o, s, c);
    }
  }
  for (; !a.done;) {
    var l = [];
    try {
      let t = await a.value,
        o = df(n, r);
      (o && (await o), Se(l, uf(i)), (a = e.next(t)));
    } catch (e) {
      var u = e,
        d = !0;
    } finally {
      ye(l, u, d);
    }
  }
  return a.value;
}
function mf(e, t = ww.priority, n = ww.canYield) {
  var r = [];
  try {
    Se(r, uf({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : pf(e, i, t, n);
  } catch (e) {
    var i = e,
      a = !0;
  } finally {
    ye(r, i, a);
  }
}
function* K(e, t = ww.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (tt(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            pf(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* hf(e, t = ww.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = df(t);
    r && (yield r);
    let o = e[a];
    if (tt(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            pf(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function gf(e) {
  return yf(e) || Sf(e);
}
function _f(e) {
  return Ye(e) && e.every(V);
}
function vf(e) {
  return V(e) && qe(e.read) && qe(e.preload);
}
function yf(e) {
  return _f(e) || vf(e);
}
function bf(e) {
  return V(e) && V(e.schema);
}
function xf(e) {
  return V(e) && V(e.collectionByLocaleId);
}
function Sf(e) {
  return bf(e) || xf(e);
}
function Cf(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = Qf(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function wf(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => Tw.cast(e, t.definition)) };
  }
  return null;
}
function Tf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ef(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Df(e) {
  return Ef(e)?.value ?? !1;
}
function Of(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function kf(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Af(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function jf(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return et(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function Mf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Nf(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function Pf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ff(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function If(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Lf(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function Rf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function zf(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function Bf(e) {
  return zf(e)?.value ?? null;
}
function Vf(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = Qf(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function Hf(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = Tw.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function Uf(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Wf(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function Gf(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Kf(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function qf(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Jf(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function Yf(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Xf(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function Zf(e) {
  return Xf(e)?.value ?? null;
}
function Qf(e, t, n) {
  if (Qe(e) || Qe(t)) return (H(e === t), 0);
  switch (e.type) {
    case `array`:
      return (H(e.type === t.type), Cf(e, t, n));
    case `boolean`:
      return (H(e.type === t.type), Tf(e, t));
    case `color`:
      return (H(e.type === t.type), Of(e, t));
    case `date`:
      return (H(e.type === t.type), Af(e, t));
    case `enum`:
      return (H(e.type === t.type), Mf(e, t));
    case `file`:
      return (H(e.type === t.type), Pf(e, t));
    case `link`:
      return (H(e.type === t.type), If(e, t));
    case `number`:
      return (H(e.type === t.type), Rf(e, t));
    case `object`:
      return (H(e.type === t.type), Vf(e, t, n));
    case `responsiveimage`:
      return (H(e.type === t.type), Uf(e, t));
    case `richtext`:
      return (H(e.type === t.type), Gf(e, t));
    case `vectorsetitem`:
      return (H(e.type === t.type), qf(e, t));
    case `string`:
      return (H(e.type === t.type), Yf(e, t, n));
    default:
      U(e);
  }
}
async function $f(e, t) {
  return vf(e) ? (await e.preload(t), e.read(t)) : e;
}
function ep(e) {
  if (!Sf(e) || !e.id) return;
  let t = Ow.get(e.id);
  if (!t) return (Ow.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function tp(e) {
  let t = ep(e);
  if (t) return t;
  let n = kw.get(e);
  if (n) return n;
  let r = `${Aw}${Math.random().toString(16).slice(2)}`;
  return (kw.set(e, r), r);
}
function np(e, t) {
  if (yf(e)) {
    let n = tp(e) + (t?.id ?? a_),
      r = jw.get(n);
    if (r) return r;
    let i = new Dw(e, t);
    return (jw.set(n, i), i);
  }
  if (bf(e)) return e;
  if (xf(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  U(e, `Unsupported collection type`);
}
function rp(e) {
  return e;
}
function ip(e) {
  return qe(e.getHash);
}
function q(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    if (V(r) && ip(r)) {
      n += r.getHash();
      continue;
    }
    n += JSON.stringify(r) ?? ``;
  }
  return rp(`${n})`);
}
function ap(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function op(e, t) {
  return { collectionId: tp(e), pointer: t };
}
function sp(e) {
  return V(e) && z(e.collectionId);
}
function cp(e, t) {
  return { collectionId: tp(e), pointer: t };
}
function lp(e) {
  return V(e) && z(e.collectionId);
}
function up(e, t) {
  let n = new Map();
  function r(e) {
    if (V(e))
      if (e.type === `Collection` && gf(e.data)) {
        let r = np(e.data, t),
          i = tp(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (Ye(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function dp(e) {
  return e;
}
function fp(e) {
  return e;
}
function pp(e) {
  return e;
}
function mp() {
  return 25;
}
function hp() {
  return 12500;
}
function gp(e) {
  return Array(e).fill({ type: `All` });
}
function _p(e) {
  return e;
}
function vp(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new RT(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function yp(e) {
  let t = new Set();
  if (!e) return t;
  vp(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (vp(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function bp(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) bp(n, t);
      return;
    case `object`:
      for (let n in e.value) bp(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function xp(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function Sp(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Cp(e) {
  return `${e.functionName}(${e.arguments.map((e) => Op(e)).join(`, `)})`;
}
function wp(e) {
  let t = `CASE`;
  e.value && (t += ` ${Op(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Op(n.when)} THEN ${Op(n.then)}`;
  return (e.else && (t += ` ELSE ${Op(e.else)}`), (t += ` END`), t);
}
function Tp(e) {
  let t = Op(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function Ep(e) {
  let t = Op(e.left),
    n = Op(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function Dp(e) {
  return `CAST(${Op(e.value)} as ${e.dataType})`;
}
function Op(e) {
  switch (e.type) {
    case `Identifier`:
      return xp(e);
    case `LiteralValue`:
      return Sp(e);
    case `FunctionCall`:
      return Cp(e);
    case `Case`:
      return wp(e);
    case `UnaryOperation`:
      return Tp(e);
    case `BinaryOperation`:
      return Ep(e);
    case `TypeCast`:
      return Dp(e);
    case `Select`:
      return `${Np(e)}`;
    default:
      U(e);
  }
}
function kp(e) {
  return bf(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Ap(e) {
  let t = `${jp(e.left)} LEFT JOIN ${jp(e.right)}`;
  return (e.constraint && (t += ` ON ${Op(e.constraint)}`), t);
}
function jp(e) {
  switch (e.type) {
    case `Collection`:
      return kp(e);
    case `LeftJoin`:
      return Ap(e);
    default:
      U(e);
  }
}
function Mp(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function Np(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Op(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${jp(e.from)}`),
    e.where && (t += ` WHERE ${Op(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Op(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Op(e.limit)}`),
    e.offset && (t += ` OFFSET ${Op(e.offset)}`),
    Mp(t)
  );
}
function Pp(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(Ze(e) || V(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function Fp(e) {
  let t = l(e);
  return (
    n(() => {
      t.current = e;
    }, [e]),
    Br((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function Ip(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function Lp() {
  return new Set();
}
function Rp(e) {
  let t = Sa(Lp),
    n = Sa(Lp);
  return (
    Ms(() => () => Ip(n, t)),
    c(() => () => Ip(n, t), []),
    c(() => {
      Ip(n, t);
    }, [e]),
    l({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function zp(e, t, n) {
  return A.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function Bp(e) {
  for (let [t, n] of Object.entries(e)) if (J.matchMedia(n).matches) return t;
}
function Vp(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && J.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function Hp(e, n, r = !0) {
  let i = t(Wx),
    a = Ea(),
    o = va(),
    u = Tn() && (!a || o),
    d = l(u ? (Bp(n) ?? e) : e),
    f = l(r && i ? e : d.current),
    p = Bo(),
    m = ge(),
    h = s(
      (e) => {
        if (e !== d.current || e !== f.current) {
          let t = function () {
            ((d.current = f.current = e),
              k(() => {
                p();
              }));
          };
          a
            ? t()
            : m(() => {
                t();
              });
        }
      },
      [m, p, a]
    );
  return (
    xv(() => {
      if (a) {
        if (o) {
          h(Bp(n) ?? e);
          return;
        }
        h(e);
      }
    }, [e, o, a, n, h]),
    xv(() => {
      !r || i !== !0 || h(d.current);
    }, []),
    c(() => {
      if (!u || o) return;
      let e = [];
      for (let [t, r] of Object.entries(n)) {
        let n = J.matchMedia(r),
          i = (e) => {
            e.matches && h(t);
          };
        (Up(n, i), e.push([n, i]));
      }
      return () => e.forEach(([e, t]) => Wp(e, t));
    }, [o, n, h, u]),
    [d.current, f.current]
  );
}
function Up(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Wp(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function Gp(e) {
  setTimeout(e, 1);
}
function Kp(e) {
  let t = new Set(),
    n = Vp(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (qp(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (Ug ? J.requestIdleCallback : Gp)(() => {
    document.querySelector($T)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (qp(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    Jp(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function qp(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Jp(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function Yp(e, t) {
  e !== !1 &&
    R.render(() => {
      let e = document.documentElement.style;
      t ? e.setProperty(`overflow`, `hidden`) : e.removeProperty(`overflow`);
    });
}
function Xp({ blockDocumentScrolling: e = !0, dismissWithEsc: t = !1 } = {}) {
  let [n, r] = A.useState(!1),
    i = A.useCallback(
      async (t) => {
        (await $_({ priority: `user-blocking`, continueAfter: `paint` }), k(() => r(t)), Yp(e, t));
      },
      [e]
    );
  return (
    A.useEffect(
      () => () => {
        $_({ priority: `user-blocking`, continueAfter: `paint` }).then(() => {
          Yp(e, !1);
        });
      },
      [e]
    ),
    A.useEffect(() => {
      if (!t) return;
      let e = (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), i(!1));
      };
      return (J.addEventListener(`keydown`, e), () => J.removeEventListener(`keydown`, e));
    }, [t, i]),
    [n, i]
  );
}
function Zp(e) {
  return V(e) && eE in e && e.page !== void 0;
}
function Qp(e, t) {
  return `${e}-${t}`;
}
function $p(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (H(r !== void 0, `nextVariant should be defined`), r);
}
function em(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function tm(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function nm(e, t) {
  return t[e] || `framer-v-${e}`;
}
function rm(e, t, n) {
  return e && n.has(e) ? e : t;
}
function im() {
  let e = l(),
    t = l(),
    n = s(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    c(
      () => () => {
        n();
      },
      [n]
    ),
    s(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function am() {
  let e = l(),
    n = l(!1),
    r = l(),
    i = t(Dx);
  return (
    c(
      () => () => {
        (e.current?.(), (r.current = void 0), (e.current = void 0));
      },
      []
    ),
    s(
      (t, a) => {
        if (!a?.current || n.current) {
          t();
          return;
        }
        if (((r.current = t), e.current)) return;
        let o = !1;
        e.current = Ts(i, `undefined`, a.current, null, (e) => {
          ((n.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), n.current && r.current?.());
              })));
        });
      },
      [i]
    )
  );
}
function om(e) {
  let t = im(),
    n = am();
  return s(
    (r, i = !1) => {
      if (Hg) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function sm() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (rE = () => {
        (e(), (t = void 0));
      }));
  });
}
function cm(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (nE = sm()));
}
function lm() {
  (performance.mark(`click-received-listener`), (nE = void 0), rE?.(), (rE = void 0));
}
function um(e = !1) {
  c(() => {
    e &&
      (document.addEventListener(`pointerup`, cm, !0),
      document.__proto__.addEventListener.call(document, `click`, lm, !0));
  }, [e]);
}
function dm({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: c,
}) {
  let u = Bo(),
    d = Kl(),
    f = Sa(() => new Set(i));
  um(XS().yieldOnTap);
  let p = om(c),
    m = l({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: rm(e, t, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    h = s((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = m.current,
        o = rm(e, a, f),
        s = tm(i?.[o], t, n, !1, r);
      return [o, s ? Qp(o, s) : void 0];
    }, []),
    g = s(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = h(r);
        if (o === e && s === t) return;
        (a && (m.current.isError = !1),
          (m.current.baseVariant = o || n),
          (m.current.gestureVariant = s));
        let c = XS().yieldOnTap && m.current.isPressedHasUpdated;
        (c &&
          nE &&
          (performance.mark(`wait-for-tap-start`),
          await nE,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await $_({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: l,
          isPressed: d,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: g,
        } = m.current;
        if (l || f || d || g) {
          k(u);
          return;
        }
        p(() => k(u), i);
      },
      [h, u, p]
    ),
    _ = s(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        let r = t !== m.current.isPressed,
          i = e !== m.current.isHovered;
        (e !== void 0 && (m.current.isHovered = e),
          t !== void 0 && (m.current.isPressed = t),
          n !== void 0 && (m.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = m.current;
        ((m.current.isPressedHasUpdated = r),
          (m.current.isHoveredHasUpdated = i),
          g(a, o, s, a, !1));
      },
      [g]
    ),
    v = s(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = m.current,
          o = e === tE ? $p(r || [], i || n) : e;
        g(i, a, n, o, t, !0);
      },
      [g]
    ),
    y = s(() => {
      let { baseVariant: e } = m.current;
      ((m.current.loadedBaseVariant[e] = !0), p(() => k(u), !0));
    }, [u, p]);
  if (e !== m.current.lastVariant) {
    let [t, n] = h(e);
    ((m.current.lastVariant = t),
      (t !== m.current.baseVariant || n !== m.current.gestureVariant) &&
        ((m.current.baseVariant = t), (m.current.gestureVariant = n)));
  }
  let {
      baseVariant: b,
      gestureVariant: x,
      defaultVariant: S,
      enabledGestures: w,
      isHovered: T,
      isPressed: E,
      isError: D,
      loadedBaseVariant: ee,
    } = m.current,
    O = zp(m.current.baseVariant, m.current.gestureVariant, a);
  return C(() => {
    let e = [];
    b !== S && e.push(b);
    let t = w?.[b]?.loading,
      n = !D && !d && !!t && !ee[b],
      r = n ? Qp(b, `loading`) : x;
    r && e.push(r);
    let i = w?.[b],
      a = { onMouseEnter: () => _({ isHovered: !0 }), onMouseLeave: () => _({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => _({ isPressed: !0 }),
          onTapCancel: () => _({ isPressed: !1 }),
          onTap: () => _({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: b,
        gestureVariant: r,
        isLoading: n,
        transition: em(m.current.transitions, b),
        setVariant: v,
        setGestureState: _,
        clearLoadingGesture: y,
        addVariantProps: O,
        gestureHandlers: a,
        classNames: jc(nm(b, o), tm(i, T, E, n, D)),
      }
    );
  }, [b, x, T, E, ee, O, v, S, w, _, y, o]);
}
function fm(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!wl()) return r(e);
  let a = pm(e, r),
    o = !1;
  function s(r, s) {
    let c = Dl(),
      { disableCustomCode: l } = XS();
    if (l) return T(e, { ...r, ref: s });
    if (Fl(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? T(yv.Provider, {
            value: n,
            children: T(Tl, {
              getErrorMessage: Ml.bind(null, t, n),
              fallback: T(e, { ...r, ref: s }),
              children: T(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Cl(a.error), Cl(Ml(t, n)), Sl(a.error), !0)), T(e, { ...r, ref: s }));
    if (a.status === `success`)
      return T(yv.Provider, { value: n, children: T(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return A.forwardRef(s);
}
function pm(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function mm(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function hm(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${pE[e]}` : `${pE[e]} ${n}`;
}
function gm() {
  return j === void 0 ? (hE ?? {}) : hE || ((hE = _m()), hE);
}
function _m() {
  let e = j.location,
    t = j?.bootstrap?.services;
  if (t) return t;
  let n;
  try {
    if (((n = j.top.location.origin), (t = j.top?.bootstrap?.services), t)) return t;
  } catch {}
  if (n && n !== e.origin) throw Error(`Unexpectedly embedded by ${n} (expected ${e.origin})`);
  if (e.origin.endsWith(`framer.com`) || e.origin.endsWith(`framer.dev`))
    throw Error(`ServiceMap data was not provided in document`);
  try {
    let n =
      new URLSearchParams(e.search).get(`services`) ||
      new URLSearchParams(e.hash.substring(1)).get(`services`);
    n && (t = JSON.parse(n));
  } catch {}
  if (t && typeof t == `object` && t.api) return t;
  throw Error(`ServiceMap requested but not available`);
}
function vm(e) {
  return e.key + e.extension;
}
function ym(e) {
  return `${gm().userContent}/assets/${e}`;
}
function bm(e) {
  return ym(vm(e));
}
function xm(e, t) {
  return t ? `${e} ${gE}` : e;
}
function Sm(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return xm(e.name, e.isVariable);
  }
}
function Cm(e) {
  return !!(e && Array.isArray(e));
}
function wm(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    Em(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function Tm(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function Em(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`name` in e && typeof e.name != `string`) ||
    !(`minValue` in e) ||
    typeof e.minValue != `number` ||
    !(`maxValue` in e) ||
    typeof e.maxValue != `number` ||
    !(`defaultValue` in e) ||
    typeof e.defaultValue != `number`
  );
}
function Dm(e) {
  return yE[km(e)];
}
function Om(e, t) {
  let n = e?.find((e) => e.tag === `wght`)?.defaultValue;
  return n !== void 0 && n >= 1 && n <= 1e3 ? n : (t ?? Dm(`variable`) ?? 500);
}
function km(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function Am(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
  );
}
function jm(e, t) {
  return { ...Mm(e, t), ...Nm(e, t) };
}
function Mm(e, t) {
  if (t.length === 0)
    return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };
  let { weight: n, style: r } = e,
    i = new Map(),
    a = new Map();
  for (let r of t)
    r.isVariable === e.isVariable &&
      (i.set(`${r.weight}-${r.style}`, r),
      !(r.weight <= n) && (a.has(r.style) || a.set(r.style, r)));
  let o = a.get(r),
    s = a.get(`italic`),
    c = e.weight;
  c <= 300
    ? ((o = i.get(`400-${r}`) ?? o), (s = i.get(`400-italic`) ?? s))
    : c <= 500
      ? ((o = i.get(`700-${r}`) ?? o), (s = i.get(`700-italic`) ?? s))
      : ((o = i.get(`900-${r}`) ?? o), (s = i.get(`900-italic`) ?? s));
  let l = i.get(`${n}-italic`);
  return { variantBold: o, variantItalic: l, variantBoldItalic: s };
}
function Nm(e, t) {
  if (t.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n, r, i, a;
  for (let o of t) {
    if (!o.isVariable) continue;
    let t = o.weight === e.weight,
      s = o.weight === 400;
    o.style === `normal`
      ? t
        ? (n = o)
        : s
          ? (i = o)
          : (i ||= o)
      : o.style === `italic` && (t ? (r = o) : s ? (a = o) : (a ||= o));
  }
  return { variantVariable: n ?? i, variantVariableItalic: r ?? a };
}
function Pm(e) {
  return !!e.variationAxes;
}
function Fm(e) {
  return Im(e) || Lm(e);
}
function Im(e) {
  return e.startsWith(SE);
}
function Lm(e) {
  return e.startsWith(xE);
}
function Rm(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r) {
      if (r.owner !== t.owner && r.file === t.file)
        return { existingFont: r, index: n, projectDuplicate: !0 };
      if (r && r.selector === t.selector)
        return { existingFont: r, index: n, projectDuplicate: !1 };
    }
  }
}
function zm(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? gE : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function Bm({ fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r }) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = wm(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function Vm(e) {
  if (!(!e.weight || !e.style))
    return { weight: e.weight, style: e.style, isVariable: Pm(e), selector: e.selector };
}
function Hm(e) {
  let t = e.fonts.map((e) => Vm(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = Vm(n);
    if (!e) continue;
    let r = jm(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function Um(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
function Wm(e, t, n) {
  let r = e.get(t);
  r || ((r = new Map()), e.set(t, r));
  let i = r.get(n);
  return (i || ((i = { fonts: [] }), r.set(n, i)), i);
}
function Gm(e, t) {
  return Array.from(e.entries())
    .sort(([e], [t]) => e.localeCompare(t))
    .map(([e, n]) => ({
      family: e,
      variants: Array.from(n.entries())
        .sort(([e], [t]) => e.localeCompare(t))
        .map(([, e]) => ({
          fonts: e.fonts.map((e) => ({
            ...e,
            selected:
              e.font.assetKey && e.font.owner ? t.has(`${e.font.assetKey}:${e.font.owner}`) : !1,
          })),
        })),
    }));
}
async function Km(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-YSYBFRE6.BZ57zP5h.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-TIA7QUPT.CjCmvCKY.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function qm(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-H6SFY4F5.5HW9yzMR.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-PZLWRK4B.CuFl42Lb.mjs`)).default;
    case `framer`:
      return (await import(`./framer-font-RD2SUPQH.BV4yRwNx.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
function Jm(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(Ym);
}
function Ym(e) {
  return wE.includes(e);
}
function Xm(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = Jm(e)[0];
  return n && t[n];
}
function Zm(e) {
  let t = {
    serif: `serif`,
    "sans-serif": `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function Qm(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
function $m(e, t, n, r) {
  return `${e}-${t}-${n}-${r}`;
}
function eh(e, t, n) {
  return `${e}-${t}-${n}`;
}
async function th(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = $m(r, c, s, i);
  if (!BE.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: z(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), HE.set(l, { fontFace: u, doc: t }), nh(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < RE) return th(e, t, n + 1);
          throw new zE(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`
          );
        });
    BE.set(l, d);
  }
  await BE.get(l);
}
async function nh(e, t, n) {
  let r = eh(e, t, n);
  if (!VE.has(r)) {
    let i = new IE.default(e, { style: t, weight: n }).load(null, LE);
    VE.set(r, i);
  }
  try {
    await VE.get(r);
  } catch {
    throw new zE(
      `Failed to check if font is ready (${LE}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`
    );
  }
}
function rh(e) {
  let t = e.style || `normal`,
    { family: n, url: r, weight: i } = e,
    a = $m(n, t, i, r),
    o = HE.get(a);
  (o && (o.doc.fonts.delete(o.fontFace), HE.delete(a)), BE.delete(a), VE.delete(eh(n, t, i)));
}
function ih(e) {
  try {
    if (e === `framer`) return ah(WE) ? WE : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import(`./google-EGNT223R.4Zga1324.mjs`)).default;
          case `fontshare`:
            return (await import(`./fontshare-SXU5BGFE.DwUZJPwH.mjs`)).default;
          default:
            U(e);
        }
      })();
      return ah(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function ah(e) {
  return V(e) && Object.values(e).every(sh);
}
function oh(e) {
  return V(e) && z(e.tag);
}
function sh(e) {
  return Array.isArray(e) && e.every(oh);
}
function ch(e, t) {
  c(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (j.addEventListener(`keyup`, n), () => j.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function lh(e, t, n, r) {
  let i = j.innerHeight - r,
    a = Math.min(j.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function uh(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new j.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function dh() {
  return document.getElementById(PC) ?? document.getElementById(NC) ?? document.body;
}
function fh(e, t) {
  return B(e) ? e : (t ?? 0);
}
function ph(e) {
  return fh(e?.paddingTop, e?.padding) + fh(e?.paddingBottom, e?.padding);
}
function mh(e) {
  return fh(e?.paddingLeft, e?.padding) + fh(e?.paddingRight, e?.padding);
}
function hh(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - mh(e)}px)`,
      srcSet: Ma(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function gh(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in qE)) continue;
    let n = qE[t],
      r = e[t];
    if (!(!B(n) || !B(r)) && n !== r) return !0;
  }
  return !1;
}
function _h(e) {
  let t = ce.get(e.current);
  if (!t) return !1;
  if (gh(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (gh(e.latestValues)) return !0;
  return !1;
}
function vh(e) {
  return m(function ({ lightbox: n, lightboxClassName: r, onClick: a, ...o }, d) {
    let f = t(we),
      p = t(iE),
      m = !!p,
      h = l(null),
      g = d ?? h,
      v = l(),
      y = C(() => hh(n, o.background), [n, o.background]),
      [b, x] = i(!1),
      [w, E] = i(),
      D = s(() => {
        if (n) {
          if (b) {
            k(() => {
              x(!0);
            });
            return;
          }
          R.read(() => {
            if (!g.current) return;
            let e = getComputedStyle(g.current),
              t =
                g.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(g.current, `::after`)
                  : void 0,
              r = g.current.offsetWidth ?? 1,
              i = g.current.offsetHeight ?? 1,
              a = _h(g) || m ? { duration: 0 } : n.transition;
            k(() => {
              (E({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: t?.borderTopWidth,
                borderRight: t?.borderRightWidth,
                borderBottom: t?.borderBottomWidth,
                borderLeft: t?.borderLeftWidth,
                borderStyle: t?.borderStyle,
                borderColor: t?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                x(!0),
                p?.stop());
            });
          });
        }
      }, [n, b, g, p?.stop, m]),
      ee = w?.aspectRatio ?? 1,
      te = Fp(() => {
        if (!n || !y?.src) return;
        let e = v.current?.[y.src];
        if (e) return e;
        let t = lh(ee, n.maxWidth, mh(n), ph(n)),
          r = uh(y, { width: t, height: t * ee });
        return ((v.current = { [y.src]: r }), r);
      }),
      A = s(
        async (e) => {
          (a?.(e), !(b || !n || !y) && (await te(), D()));
        },
        [a, D, b, y, n, te]
      ),
      j = s((e) => {
        (e?.stopPropagation(),
          k(() => {
            x(!1);
          }));
      }, []);
    (ch(b, j),
      c(() => {
        if (!n) return;
        let e;
        function t() {
          e = setTimeout(() => {
            te();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = g.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, te),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, te));
          }
        );
      }, [te, g, n]));
    let re = ne(),
      ie = w?.transition ?? o.transition ?? f.transition,
      M = w?.borderRadius,
      ae = w?.imageRendering,
      oe = w?.filter,
      se = w?.borderTop,
      N = w?.borderRight,
      ce = w?.borderBottom,
      le = w?.borderLeft,
      ue = w?.borderStyle,
      de = w?.borderColor,
      fe = !!(se || N || ce || le || ue || de),
      pe = fe
        ? {
            "--border-top-width": se,
            "--border-right-width": N,
            "--border-bottom-width": ce,
            "--border-left-width": le,
            "--border-style": ue,
            "--border-color": de,
          }
        : void 0,
      me = { [hC]: o.id },
      he = fh(n?.paddingTop, n?.padding),
      ge = fh(n?.paddingBottom, n?.padding),
      _e = fh(n?.paddingLeft, n?.padding),
      P = fh(n?.paddingRight, n?.padding),
      F = w?.borderRadius ? { ...o.style, borderRadius: w.borderRadius } : o.style,
      ye = b ? (o.layoutDependency ? `${o.layoutDependency}-open` : `open`) : o.layoutDependency,
      I = m && b ? void 0 : (o.layoutId ?? (n ? re : void 0));
    return O(_, {
      children: [
        T(e, {
          ...o,
          style: F,
          onClick: A,
          layoutId: I,
          ref: g,
          layoutDependency: ye,
          transition: ie,
        }),
        T(Fe, {
          onExitComplete: () => {
            k(() => {
              (E(void 0), p?.start());
            });
          },
          children:
            b &&
            n &&
            y &&
            T(
              u,
              {
                children: S(
                  O(_, {
                    children: [
                      T(ve.div, {
                        ...me,
                        className: r,
                        onClick: j,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: n.zIndex,
                          backgroundColor: n.backdrop ?? `transparent`,
                        },
                        transition: ie,
                        initial: JE,
                        animate: YE,
                        exit: JE,
                      }),
                      T(ve.div, {
                        ...me,
                        className: r,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${he}px ${P}px ${ge}px ${_e}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: n.zIndex,
                        },
                        children: T(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: ee,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: n.maxWidth,
                          },
                          children: T(ve.div, {
                            layoutId: I,
                            transition: ie,
                            onClick: D,
                            className: `framer-lightbox-container`,
                            "data-border": fe,
                            style: {
                              aspectRatio: ee,
                              borderRadius: M,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: ae,
                              filter: oe,
                              ...pe,
                            },
                            children: T(Va, { image: y, alt: y.alt, draggable: o.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  dh()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function yh(e) {
  return A.isValidElement(e) ? e.props[`data-framer-order-id`] : void 0;
}
function bh(e, t) {
  let n = new Map(),
    r = [],
    i = new Set(t);
  for (let t of e) {
    let e = yh(t);
    e && i.has(e) ? n.set(e, t) : r.push(t);
  }
  let a = [];
  for (let e of t) {
    let t = n.get(e);
    t && a.push(t);
  }
  return [...a, ...r];
}
function xh(e, t) {
  let n = A.Children.toArray(e);
  return t
    ? n.flatMap((e) =>
        A.isValidElement(e) && e.type === A.Fragment ? A.Children.toArray(e.props.children) : e
      )
    : n;
}
function Sh(e, t) {
  let n = Array.from({ length: e }, () => []);
  return (
    t.forEach((t, r) => {
      let i = Th(e, r);
      n[i]?.push(t);
    }),
    n
  );
}
function Ch(e) {
  return { display: `flex`, flexDirection: `column`, rowGap: e, width: `100%` };
}
function wh(e) {
  return `masonry-stack-${e}`;
}
function Th(e, t) {
  return e <= 0 ? 0 : t % e;
}
function Eh(e, t) {
  return eD && !t
    ? Document.parseHTMLUnsafe(e)
    : (($E ??= new DOMParser()), $E.parseFromString(e, t ?? `text/html`));
}
function Dh(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function Oh(e, t, n, r) {
  return e.replace(tD, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = Zl(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!Zp(f) || !Zp(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Nt(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = $l(u);
    if (!_ || z(_)) return e;
    Bu(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(IC, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = qr(m, v)), i + o + `"${Dh(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function kh(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Ah(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function jh(e, t, n) {
  let r = l([]);
  kh(r.current, e) ||
    ((r.current = e),
    KE.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || X.current() !== X.canvas || (e > 0 && Ko(n.current));
    }));
}
function Mh() {
  return { current: null };
}
async function Nh(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function Ph(e) {
  return e in aD;
}
function Fh(e, t) {
  let n = {};
  for (let r in e) {
    if (!Ph(r)) continue;
    let i = e[r],
      a = aD[r];
    Ze(i) || Ze(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function Ih(e, t = `character`, n, r, i) {
  if (r) {
    let t = Mh();
    return (n.add(t), T(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return O(
          u,
          {
            children: [
              T(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(oD)?.map((e, t) => {
                  let r = Mh();
                  return (n.add(r), T(`span`, { ref: r, style: i, children: e }, e + t));
                }),
              }),
              a ? null : ` `,
            ],
          },
          e + t + a
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = Mh();
        return (
          n.add(o),
          O(
            u,
            { children: [T(`span`, { ref: o, style: i, children: e }), a ? null : ` `] },
            e + t + a
          )
        );
      });
    }
    default:
      return e;
  }
}
function Lh(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      U(t);
  }
}
function Rh(e) {
  let t = [];
  return (
    B(e.x) && t.push(`translateX(${e.x}px)`),
    B(e.y) && t.push(`translateY(${e.y}px)`),
    B(e.scale) && t.push(`scale(${e.scale})`),
    B(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    B(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    B(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    B(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    B(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function zh(e, t, n, r) {
  if (!n?.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Rh(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Rh(n.effect),
              };
      }
    default:
      U(i);
  }
}
function Bh(e, t, n) {
  let r = Sa(() => new Set()),
    i = Ta(),
    a = n || !i,
    o = fe(),
    s = l({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let u = e?.trigger ?? `onMount`,
    d = e?.target,
    f = e?.threshold;
  c(() => {
    if (!a || n) return;
    s.current.hasMounted = !0;
    function e() {
      let { effect: e } = s.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && s.current.hasAnimatedOnce) ||
        (e?.type === `appear` && s.current.isAnimating)
      )
        return;
      Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            c = { current: void 0 };
          return (
            Hh(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(s.current, { isAnimating: !1 });
              },
              c
            ),
            () => c.current?.()
          );
        }
        default:
          U(t);
      }
    }
    switch (u) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? ke(n, e, { amount: f ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = d?.ref?.current;
        return t
          ? ke(t, e, {
              amount: f ?? 0,
              root: document,
              margin: d?.offset ? `${d.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        U(u);
    }
  }, [a, r, n, t, d, f, u]);
  let p = !!e,
    m = e ? Lh(e) : void 0;
  return C(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !p)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = s.current,
          c = zh(a, n || Vh(e, t, i), s.current.effect, o);
        return {
          text: (e) => Ih(e, m, r, o, c),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = Mh();
            return (r.add(t), { ref: t, style: { ...e, ...c } });
          },
        };
      },
      play: () => {
        let { effect: e } = s.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            Hh(m, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            U(t);
        }
      },
    }),
    [a, p, r, n, m]
  );
}
function Vh(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function Hh(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = Fh(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await Uh(n, u);
      if (
        e === null ||
        (Oe(e, l, { ...r, restDelta: 0.001, delay: he(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        Oe(e, n, { ...r, restDelta: 0.001, delay: he(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Nh(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (R.read(() => {
          ((e = Wh(n)),
            e.length !== 0 &&
              R.update(() => {
                let t = e.map((e, t) =>
                  Oe(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          Oe(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      U(e);
  }
}
async function Uh(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Nh(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function Wh(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function Gh(e) {
  let t = {};
  for (let n in e) (We(n) || Jy(n)) && (t[n] = e[n]);
  return t;
}
function Kh(e) {
  return e.type === u;
}
function qh(e) {
  return e.type === `br`;
}
function Jh(e, t, n, r, i = {}, a, o = Kh(e) ? -1 : 0) {
  let s = p.toArray(e.props.children);
  Ze(n) || (s = s.slice(0, 1));
  let c = !0;
  s = s.map((e) => {
    if (((!D(e) || !qh(e)) && (c = !1), D(e))) return Jh(e, t, n, r, i, a, o + 1);
    let s = Ze(n) ? e : n;
    return z(s) && a ? a.text(s) : s;
  });
  let { "data-preset-tag": l, ...u } = e.props;
  if (z(e.type) || Ge(e.type)) {
    let n = je(e.type) || e.type,
      d = l || n,
      f = z(d) ? t?.[d] : void 0;
    ((u.className = jc(`framer-text`, u.className, f)),
      a && o === 0 && !c && Object.assign(u, a.props(u.style)));
    let m = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (m && h) {
      let e = Yh(s, i);
      u.id = e;
      let t = jc(`framer-text`, h),
        n = T(`a`, { href: `#${e}`, className: t, children: s });
      ((u.style = { ...u.style, scrollMarginTop: r }), (s = [n]));
    }
    d === `ol` &&
      (u.style = { ...u.style, [kb]: Zh(u.start ?? 1, p.count(u.children), u.style?.[Ob] ?? ``) });
  }
  return w(e, u, ...s);
}
function Yh(e, t) {
  let n = Ir(e.map(Xh).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function Xh(e) {
  return z(e) || B(e)
    ? e.toString()
    : D(e)
      ? Xh(e.props.children)
      : Array.isArray(e)
        ? e.map(Xh).join(``)
        : ``;
}
function Zh(e, t, n) {
  return To(Number(e) || 1, t, n);
}
function Qh(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = Pi(n.x, n.y),
    i = sb(Pi(0.5, 0.5), r),
    a = Z.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: Pi.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  H(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !Pi.isEqual(e, s) && !Pi.isEqual(e, c));
  H(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = sb.intersection(i, sb(s, c)),
    f = sb.intersection(i, sb(l, u));
  return (H(d && f, `linearGradientLine: Must have a start and end point.`), sb(d, f));
}
function $h(e, t) {
  let n = Qh(e.angle),
    r = ts(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = sb.pointAtPercentDistance(n, i),
    s = sb.pointAtPercentDistance(n, a),
    c = He([i, a], [0, 1]);
  return {
    id: `id${t}g${fx.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: ox.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function eg(e, t) {
  return {
    id: `id${t}g${mx.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: ts(e).map((t) => ({
      color: t.value,
      alpha: ox.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function tg(e) {
  if (!z(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return B(parseFloat(t));
}
function ng(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return B(n) ? n : 50;
}
function rg(e) {
  return tg(e) ? ng(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function ig(e) {
  return tg(e) ? ng(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function ag(e, t, n, r) {
  if (((e = hy.get(e, `#09F`)), !ob.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      ((e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2))));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      (r && ((f = n), (p = s)),
        (u = (t.width - c) * rg(e.positionX) + f),
        (d = (t.height - l) * ig(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * ig(e.positionY)))
        : ((n = g), (u = (1 - g) * rg(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function og(e) {
  return e.startsWith(`data:${mD}`);
}
function sg(e, t) {
  if (/^\w+:/u.test(e) && !og(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = X.current() === X.export;
  return $y.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function cg(e, t) {
  return (c(() => bD.subscribeToTemplate(e), [e]), bD.template(e, t));
}
function lg(e) {
  try {
    let t = Eh(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function ug(e, t) {
  fg(e, dg(t));
}
function dg(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function fg(e, t) {
  (pg(e, t),
    Array.from(e.children).forEach((e) => {
      fg(e, t);
    }));
}
function pg(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function mg(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (xD[t[2]] || 1));
}
function hg(e) {
  let t = mg(e.getAttribute(`width`)),
    n = mg(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function gg(e) {
  return e.indexOf(`image`) >= 0;
}
function _g(e) {
  return e.indexOf(`var(--`) >= 0;
}
function vg(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function yg(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? J,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = bD.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && ao(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    W(s) &&
    W(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l?.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function bg(e) {
  return e > ED ? `lazy` : void 0;
}
function xg(e, t, n) {
  let r = wg(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function Sg(e) {
  return e ? (e.fonts ?? pi()) : pi();
}
function Cg(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : wg(e);
}
function wg(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    Tg(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(Eg) })
      : t.fonts.push(Eg(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function Tg(e) {
  return DD in e;
}
function Eg(e) {
  let t = Dg(e) || Og(e) ? e : kg(e);
  return Og(t) ? t : Ag(t);
}
function Dg(e) {
  return `source` in e;
}
function Og(e) {
  return `cssFamilyName` in e;
}
function kg(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function Ag(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${gE}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function jg(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function Mg(e) {
  return e.loader;
}
function Ng(e, t, n) {
  let r = Mg(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var Pg,
  Fg,
  Ig,
  Lg,
  Rg,
  zg,
  Bg,
  Vg,
  Hg,
  Ug,
  Wg,
  Gg,
  Kg,
  qg,
  Jg,
  Yg,
  Xg,
  Zg,
  Qg,
  $g,
  e_,
  t_,
  n_,
  r_,
  i_,
  a_,
  o_,
  s_,
  c_,
  l_,
  u_,
  d_,
  f_,
  p_,
  m_,
  h_,
  g_,
  __,
  v_,
  y_,
  b_,
  x_,
  S_,
  C_,
  J,
  w_,
  T_,
  E_,
  D_,
  O_,
  k_,
  A_,
  j_,
  M_,
  N_,
  P_,
  F_,
  I_,
  L_,
  R_,
  z_,
  B_,
  V_,
  H_,
  U_,
  W_,
  G_,
  K_,
  q_,
  J_,
  Y_,
  X_,
  Z_,
  Q_,
  $_,
  ev,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  Y,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  X,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  Z,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  Q,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  $,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  fD,
  pD,
  mD,
  hD,
  gD,
  _D,
  vD,
  yD,
  bD,
  xD,
  SD,
  CD,
  wD,
  TD,
  ED,
  DD,
  OD = e(() => {
    (o(),
      Ce(),
      _e(),
      te(),
      ee(),
      E(),
      (Pg = be({
        "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
          (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Hsluv = void 0));
          var t = class e {
            constructor() {
              ((this.hex = `#000000`),
                (this.rgb_r = 0),
                (this.rgb_g = 0),
                (this.rgb_b = 0),
                (this.xyz_x = 0),
                (this.xyz_y = 0),
                (this.xyz_z = 0),
                (this.luv_l = 0),
                (this.luv_u = 0),
                (this.luv_v = 0),
                (this.lch_l = 0),
                (this.lch_c = 0),
                (this.lch_h = 0),
                (this.hsluv_h = 0),
                (this.hsluv_s = 0),
                (this.hsluv_l = 0),
                (this.hpluv_h = 0),
                (this.hpluv_p = 0),
                (this.hpluv_l = 0),
                (this.r0s = 0),
                (this.r0i = 0),
                (this.r1s = 0),
                (this.r1i = 0),
                (this.g0s = 0),
                (this.g0i = 0),
                (this.g1s = 0),
                (this.g1i = 0),
                (this.b0s = 0),
                (this.b0i = 0),
                (this.b1s = 0),
                (this.b1i = 0));
            }
            static fromLinear(e) {
              return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
            }
            static toLinear(e) {
              return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
            }
            static yToL(t) {
              return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
            }
            static lToY(t) {
              return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
            }
            static rgbChannelToHex(t) {
              let n = Math.round(t * 255),
                r = n % 16,
                i = ((n - r) / 16) | 0;
              return e.hexChars.charAt(i) + e.hexChars.charAt(r);
            }
            static hexToRgbChannel(t, n) {
              let r = e.hexChars.indexOf(t.charAt(n)),
                i = e.hexChars.indexOf(t.charAt(n + 1));
              return (r * 16 + i) / 255;
            }
            static distanceFromOriginAngle(e, t, n) {
              let r = t / (Math.sin(n) - e * Math.cos(n));
              return r < 0 ? 1 / 0 : r;
            }
            static distanceFromOrigin(e, t) {
              return Math.abs(t) / Math.sqrt(e ** 2 + 1);
            }
            static min6(e, t, n, r, i, a) {
              return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
            }
            rgbToHex() {
              ((this.hex = `#`),
                (this.hex += e.rgbChannelToHex(this.rgb_r)),
                (this.hex += e.rgbChannelToHex(this.rgb_g)),
                (this.hex += e.rgbChannelToHex(this.rgb_b)));
            }
            hexToRgb() {
              ((this.hex = this.hex.toLowerCase()),
                (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
                (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
                (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
            }
            xyzToRgb() {
              ((this.rgb_r = e.fromLinear(
                e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
              )),
                (this.rgb_g = e.fromLinear(
                  e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
                )),
                (this.rgb_b = e.fromLinear(
                  e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
                )));
            }
            rgbToXyz() {
              let t = e.toLinear(this.rgb_r),
                n = e.toLinear(this.rgb_g),
                r = e.toLinear(this.rgb_b);
              ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
                (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
                (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
            }
            xyzToLuv() {
              let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
                n = 4 * this.xyz_x,
                r = 9 * this.xyz_y;
              (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
                (this.luv_l = e.yToL(this.xyz_y)),
                this.luv_l === 0
                  ? ((this.luv_u = 0), (this.luv_v = 0))
                  : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                    (this.luv_v = 13 * this.luv_l * (r - e.refV))));
            }
            luvToXyz() {
              if (this.luv_l === 0) {
                ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
                return;
              }
              let t = this.luv_u / (13 * this.luv_l) + e.refU,
                n = this.luv_v / (13 * this.luv_l) + e.refV;
              ((this.xyz_y = e.lToY(this.luv_l)),
                (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
                (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
            }
            luvToLch() {
              if (
                ((this.lch_l = this.luv_l),
                (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
                this.lch_c < 1e-8)
              )
                this.lch_h = 0;
              else {
                let e = Math.atan2(this.luv_v, this.luv_u);
                ((this.lch_h = (e * 180) / Math.PI),
                  this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
              }
            }
            lchToLuv() {
              let e = (this.lch_h / 180) * Math.PI;
              ((this.luv_l = this.lch_l),
                (this.luv_u = Math.cos(e) * this.lch_c),
                (this.luv_v = Math.sin(e) * this.lch_c));
            }
            calculateBoundingLines(t) {
              let n = (t + 16) ** 3 / 1560896,
                r = n > e.epsilon ? n : t / e.kappa,
                i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
                a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
                o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
                s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
                c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
                l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
                u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
                d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
                f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
              ((this.r0s = i / o),
                (this.r0i = (a * t) / o),
                (this.r1s = i / (o + 126452)),
                (this.r1i = ((a - 769860) * t) / (o + 126452)),
                (this.g0s = s / l),
                (this.g0i = (c * t) / l),
                (this.g1s = s / (l + 126452)),
                (this.g1i = ((c - 769860) * t) / (l + 126452)),
                (this.b0s = u / f),
                (this.b0i = (d * t) / f),
                (this.b1s = u / (f + 126452)),
                (this.b1i = ((d - 769860) * t) / (f + 126452)));
            }
            calcMaxChromaHpluv() {
              let t = e.distanceFromOrigin(this.r0s, this.r0i),
                n = e.distanceFromOrigin(this.r1s, this.r1i),
                r = e.distanceFromOrigin(this.g0s, this.g0i),
                i = e.distanceFromOrigin(this.g1s, this.g1i),
                a = e.distanceFromOrigin(this.b0s, this.b0i),
                o = e.distanceFromOrigin(this.b1s, this.b1i);
              return e.min6(t, n, r, i, a, o);
            }
            calcMaxChromaHsluv(t) {
              let n = (t / 360) * Math.PI * 2,
                r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
                i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
                a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
                o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
                s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
                c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
              return e.min6(r, i, a, o, s, c);
            }
            hsluvToLch() {
              if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
              else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
              else {
                ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
                let e = this.calcMaxChromaHsluv(this.hsluv_h);
                this.lch_c = (e / 100) * this.hsluv_s;
              }
              this.lch_h = this.hsluv_h;
            }
            lchToHsluv() {
              if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHsluv(this.lch_h);
                ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
              }
              this.hsluv_h = this.lch_h;
            }
            hpluvToLch() {
              if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
              else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
              else {
                ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
                let e = this.calcMaxChromaHpluv();
                this.lch_c = (e / 100) * this.hpluv_p;
              }
              this.lch_h = this.hpluv_h;
            }
            lchToHpluv() {
              if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHpluv();
                ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
              }
              this.hpluv_h = this.lch_h;
            }
            hsluvToRgb() {
              (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hpluvToRgb() {
              (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hsluvToHex() {
              (this.hsluvToRgb(), this.rgbToHex());
            }
            hpluvToHex() {
              (this.hpluvToRgb(), this.rgbToHex());
            }
            rgbToHsluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHsluv());
            }
            rgbToHpluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHpluv());
            }
            hexToHsluv() {
              (this.hexToRgb(), this.rgbToHsluv());
            }
            hexToHpluv() {
              (this.hexToRgb(), this.rgbToHpluv());
            }
          };
          ((e.Hsluv = t),
            (t.hexChars = `0123456789abcdef`),
            (t.refY = 1),
            (t.refU = 0.19783000664283),
            (t.refV = 0.46831999493879),
            (t.kappa = 903.2962962),
            (t.epsilon = 0.0088564516),
            (t.m_r0 = 3.240969941904521),
            (t.m_r1 = -1.537383177570093),
            (t.m_r2 = -0.498610760293),
            (t.m_g0 = -0.96924363628087),
            (t.m_g1 = 1.87596750150772),
            (t.m_g2 = 0.041555057407175),
            (t.m_b0 = 0.055630079696993),
            (t.m_b1 = -0.20397695888897),
            (t.m_b2 = 1.056971514242878));
        },
      })),
      (Fg = be({
        "../../../node_modules/eventemitter3/index.js"(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`) throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
                l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (Ig = be({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          e
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      (Lg = be({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = Ig();
        },
      })),
      (Rg = be({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = Lg(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (zg = be({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function n(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t), e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` || document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function r(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function i(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function a(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function o(t, n) {
              function r() {
                var e = i;
                a(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), a(t));
            }
            function s(e, t, n) {
              ((t ||= {}),
                (n ||= j),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n));
            }
            var c = null,
              l = null,
              u = null,
              d = null;
            function f(e) {
              return (
                l === null &&
                  (p(e) && /Apple/.test(j.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        j.navigator.userAgent
                      )),
                      (l = !!e && 603 > parseInt(e[1], 10)))
                    : (l = !1)),
                l
              );
            }
            function p(e) {
              return (d === null && (d = !!e.document.fonts), d);
            }
            function m(e, t) {
              var n = e.style,
                r = e.weight;
              if (u === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                u = i.style.font !== ``;
              }
              return [n, r, u ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((s.prototype.load = function (e, t) {
              var a = this,
                s = e || `BESbswy`,
                l = 0,
                u = t || 3e3,
                d = new Date().getTime();
              return new Promise(function (e, t) {
                if (p(a.context) && !f(a.context)) {
                  var h = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - d >= u
                          ? t(Error(`` + u + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(m(a, `"` + a.family + `"`), s)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    g = new Promise(function (e, t) {
                      l = setTimeout(function () {
                        t(Error(`` + u + `ms timeout exceeded`));
                      }, u);
                    });
                  Promise.race([g, h]).then(function () {
                    (clearTimeout(l), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t = (_ != -1 && v != -1) || (_ != -1 && y != -1) || (v != -1 && y != -1)) &&
                        ((t = _ != v && _ != y && v != y) ||
                          (c === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              j.navigator.userAgent
                            )),
                            (c =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            c &&
                            ((_ == b && v == b && y == b) ||
                              (_ == x && v == x && y == x) ||
                              (_ == S && v == S && y == S)))),
                        (t = !t)),
                        t &&
                          (C.parentNode !== null && C.parentNode.removeChild(C),
                          clearTimeout(l),
                          e(a)));
                    }
                    function f() {
                      if (new Date().getTime() - d >= u)
                        (C.parentNode !== null && C.parentNode.removeChild(C),
                          t(Error(`` + u + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((_ = p.g.offsetWidth),
                          (v = h.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          n()),
                          (l = setTimeout(f, 50)));
                      }
                    }
                    var p = new r(s),
                      h = new r(s),
                      g = new r(s),
                      _ = -1,
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = document.createElement(`div`);
                    ((C.dir = `ltr`),
                      i(p, m(a, `sans-serif`)),
                      i(h, m(a, `serif`)),
                      i(g, m(a, `monospace`)),
                      C.appendChild(p.g),
                      C.appendChild(h.g),
                      C.appendChild(g.g),
                      a.context.document.body.appendChild(C),
                      (b = p.g.offsetWidth),
                      (x = h.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      f(),
                      o(p, function (e) {
                        ((_ = e), n());
                      }),
                      i(p, m(a, `"` + a.family + `",sans-serif`)),
                      o(h, function (e) {
                        ((v = e), n());
                      }),
                      i(h, m(a, `"` + a.family + `",serif`)),
                      o(g, function (e) {
                        ((y = e), n());
                      }),
                      i(g, m(a, `"` + a.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = s)
                : ((j.FontFaceObserver = s),
                  (j.FontFaceObserver.prototype.load = s.prototype.load)));
          })();
        },
      })),
      (Bg = () => {}),
      (Vg = j !== void 0),
      (Hg =
        Vg &&
        (d.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(d.userAgent))),
      (Ug = Vg && typeof j.requestIdleCallback == `function`),
      (Wg = Ug ? j.requestIdleCallback : setTimeout),
      (Gg = () => Bg),
      (Kg = () => !0),
      (qg = () => !1),
      (Jg = new Map()),
      (Yg = new Map()),
      (Xg = new Set()),
      (Zg = `:`),
      (Qg = Vg ? void 0 : new Set()),
      ($g = `preload`),
      (e_ = Object.keys),
      (t_ = `equals`),
      (n_ = A.createContext({})),
      (r_ = A.createContext({})),
      (i_ = []),
      (a_ = `default`),
      (o_ = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (s_ = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && ct(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = o_.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === o_.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === o_.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== o_.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && Qg !== void 0 && Qg.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = o_.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = o_.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && Jg.has(this.cacheHash) ? Jg.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!rt(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === o_.Fulfilled) return this.value;
          throw this.promiseState === o_.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (c_ = -1),
      (l_ = -2),
      (u_ = -3),
      (d_ = -4),
      (f_ = -5),
      (p_ = -6),
      (m_ = -7),
      (h_ = 2 ** 32 - 1),
      (g_ = h_ - 1),
      (__ = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (v_ = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (y_ = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (b_ = typeof Uint8Array.fromBase64 == `function`),
      (x_ = typeof process == `object` && process.versions?.node !== void 0),
      (S_ = b_ ? qt : x_ ? Yt : Zt),
      (C_ = b_ ? Jt : x_ ? Xt : Qt),
      (J = Vg
        ? j
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (w_ = 2),
      (T_ = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (E_ = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (O_ = class {
        payload = sn();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return tn(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (k_ = Vg ? void 0 : new O_()),
      (A_ = E_.CollectionUtilsCache),
      (j_ = new WeakMap()),
      (M_ = a(void 0)),
      (N_ = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new s_(async () => {
              try {
                let t = await e();
                return (H(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(ot(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        collectionId;
        module;
        cacheMap = new Map();
        callUtilsMethod(e, t, n) {
          let r = dn(n),
            i = fn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (k_ !== void 0) {
              if (rt(e)) return e.then((e) => (k_.set(A_, i, e), e));
              k_.set(A_, i, e);
            }
            return e;
          }
          if (ln(A_, i)) {
            let e = un(A_, i);
            return (this.cacheMap.set(i, new s_(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = rt(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e](t, n)) : a?.[e](t, n);
          } catch (e) {
            (console.error(ot(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (k_ !== void 0 && k_.set(A_, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new s_(() =>
            s
              .then((e) => (k_ !== void 0 && k_.set(A_, i, e), e))
              .catch((e) => {
                console.error(ot(`Failed to call CollectionUtils method.`, e));
              })
          );
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
      }),
      (P_ = /Mac/u),
      (F_ = /iPhone|iPod|iPad/iu),
      (I_ = /MacIntel/iu),
      (L_ = /Edg\//u),
      (R_ = /Chrome/u),
      (z_ = /Google Inc/u),
      (B_ = /Safari/u),
      (V_ = /Apple Computer/u),
      (H_ = /Firefox\/\d+\.\d+$/u),
      (U_ = /Version\/([\d.]+)/u),
      (W_ = /FramerX/u),
      (G_ = /tablet|iPad|Nexus 9/iu),
      (K_ = /mobi/iu),
      (q_ = 1e3 / 60),
      (J_ = 1e3 / 25),
      (Y_ = 500),
      (X_ = Promise.resolve()),
      (Z_ = 100),
      (Q_ = (e) => {
        R.read(e, !1, !0);
      }),
      ($_ = In(Q_)),
      (ev = !Hg),
      (tv = RegExp(`:([a-z]\\w*)`, `gi`)),
      (nv = `framer_variant`),
      (rv = !1),
      (iv = A.createContext({ global: void 0, routes: {} })),
      (av = 10),
      (ov = 1e4),
      (sv = (e) => `--view-transition-${e}`),
      (cv = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${sv(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${sv(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${sv(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (lv = {
        circle: {
          makeKeyframe: (e, t) => `${sv(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${sv(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${tr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${sv(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: cv,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${er(e.x)} ${er(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = Qn(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${sv(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${sv(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${sv(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${sv(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${sv(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${sv(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (uv = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (dv = `view-transition-styles`),
      (fv = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (pv = () => {}),
      (hv = () => {
        (mv ||
          ((mv = document.createElement(`div`)),
          mv.setAttribute(`aria-live`, `assertive`),
          mv.setAttribute(`aria-atomic`, `true`),
          (mv.style.position = `absolute`),
          (mv.style.transform = `scale(0)`),
          document.body.append(mv)),
          setTimeout(() => {
            mv.textContent = document.title;
          }, 60));
      }),
      (_v =
        Vg &&
        typeof j.navigation?.back == `function` &&
        !(() => {
          if (d === void 0) return !1;
          let e = d.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !Cn()),
      (vv = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (yv = A.createContext(null)),
      (bv = (() => {
        let e = a(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (xv = typeof document < `u` ? f : c),
      (Sv = async () => {}),
      (Cv = { contentLocale: null, activeLocale: null, locales: [], setLocale: Sv }),
      (wv = (() => {
        let e = A.createContext(Cv);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (Tv = (() => {
        let e = A.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (Ev = new Set()),
      (Dv = (() => {
        let e = a({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (Ov = 46),
      (kv = 47),
      (Av = (e, t) => e.charCodeAt(t)),
      (jv = (e, t) => e.lastIndexOf(t)),
      (Mv = (e, t, n) => e.slice(t, n)),
      (Nv = !1),
      (Pv = `/`),
      (Fv = (e) => e === kv),
      (Iv = new Set([`/404.html`, `/404`, `/404/`])),
      (Lv = `__f_replay`),
      (Rv =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (zv = (e) => {
        e.target?.closest?.(`#main`) &&
          (ti(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (Bv = !1),
      (ry = [ii]),
      (ny = [ii]),
      (ty = [ii]),
      (ey = [ii]),
      ($v = [ii]),
      (Qv = [ii]),
      (Zv = [ii]),
      (Xv = [ii]),
      (Yv = [ii]),
      (Jv = [ii]),
      (qv = [ii]),
      (Kv = [ii]),
      (Gv = [ii]),
      (Wv = [ii]),
      (Uv = [ii]),
      (Hv = [ii]),
      (Vv = [ii]),
      (ay = class {
        constructor() {
          (xe(iy, 5, this),
            ue(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            ue(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            ue(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            ue(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            ue(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            ue(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            ue(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            ai(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            ai(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        }
        markUseLayoutEffectsStart() {
          performance.mark(`framer-hydration-layout-effects-start`);
        }
        markRouterUseLayoutEffectStart() {
          performance.mark(`framer-hydration-router-layout-effect`);
        }
        markUseLayoutEffectsEnd() {
          (performance.mark(`framer-hydration-layout-effects-end`),
            ai(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        }
        markUseEffectsStart() {
          performance.mark(`framer-hydration-effects-start`);
        }
        markUseEffectsRouterStart() {
          performance.mark(`framer-hydration-router-effect`);
        }
        markUseEffectsAreSynchronous() {
          performance.mark(`framer-hydration-effects-sync`);
        }
        markUseEffectsEnd() {
          (performance.mark(`framer-hydration-effects-end`),
            ai(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        }
        markRafStart() {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        }
        markRafEnd() {
          (performance.mark(`framer-hydration-browser-raf-end`),
            ai(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            ai(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            ai(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          ai(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          ai(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (iy = Re(null)),
      N(iy, 1, `markRenderStart`, ry, ay),
      N(iy, 1, `markRenderEnd`, ny, ay),
      N(iy, 1, `markUseInsertionEffectsStart`, ty, ay),
      N(iy, 1, `markUseInsertionEffectRouterStart`, ey, ay),
      N(iy, 1, `markUseInsertionEffectsEnd`, $v, ay),
      N(iy, 1, `markUseLayoutEffectsStart`, Qv, ay),
      N(iy, 1, `markRouterUseLayoutEffectStart`, Zv, ay),
      N(iy, 1, `markUseLayoutEffectsEnd`, Xv, ay),
      N(iy, 1, `markUseEffectsStart`, Yv, ay),
      N(iy, 1, `markUseEffectsRouterStart`, Jv, ay),
      N(iy, 1, `markUseEffectsAreSynchronous`, qv, ay),
      N(iy, 1, `markUseEffectsEnd`, Kv, ay),
      N(iy, 1, `markRafStart`, Gv, ay),
      N(iy, 1, `markRafEnd`, Wv, ay),
      N(iy, 1, `markLayoutStylePaintEnd`, Uv, ay),
      N(iy, 1, `measureMutationEffects`, Hv, ay),
      N(iy, 1, `measureUnattributedHydrationOverhead`, Vv, ay),
      de(iy, ay),
      (sy = !1),
      (cy = { Start: ui, End: di }),
      (ly = class extends Error {}),
      (uy = class extends y {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof ly)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return fi(e, t);
        }
      }),
      (dy = Object.freeze([])),
      (py = new Set()),
      (my = class {
        observers = new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (hy = (() => {
        function e(e) {
          return (
            Oi(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            ki(e) ? e : new vy(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : ki(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              ki(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (gy = `onUpdate`),
      (_y = `finishTransaction`),
      (vy = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new my();
        static interpolationFor(e, t) {
          if (ki(e)) return Ai(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (ki(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Mi(e.x, t.x), y: Mi(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((Pi ||= {})),
      (yy = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (by = new (Pg().Hsluv)()),
      (xy = {
        rgb: RegExp(
          `rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        rgba: RegExp(
          `rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsl: RegExp(
          `hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsla: RegExp(
          `hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsv: RegExp(
          `hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsva: RegExp(
          `hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
      }),
      (Sy =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (Cy = (e) => {
        let { r: t, g: n, b: r, a: i } = ia(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (wy = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        oa({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (Ty = (e) => {
        let { r: t, g: n, b: r, a: i } = ia(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (Ey = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        oa({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (Dy = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return sa(this);
        }
        rgb() {
          return da(this);
        }
        hsl() {
          return Wi(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(la(t));
            case `srgb`:
              return new e(ua(la(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            ua({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = Y(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = na(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!z(t) || !Y.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Oy = new Map()),
      (Y = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Oy.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (Oy.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = fa(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && $i(e) !== !1),
          (e.isColorObject = (e) =>
            V(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => Ui(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && Dy.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...zi(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = qi(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = qi(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = Ui(e.r, e.g, e.b, !0);
            for (let e of Object.keys(yy)) if (yy[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: Fi(i, [0, 1], [t.r, r.r], a),
                g: Fi(i, [0, 1], [t.g, r.g], a),
                b: Fi(i, [0, 1], [t.b, r.b], a),
                a: Fi(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: Fi(i, [0, 1], [u, u + f], a),
                s: Fi(i, [0, 1], [c.s, l.s], a),
                l: Fi(i, [0, 1], [c.l, l.l], a),
                a: Fi(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(Bi(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => Wi(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (ky = (e) => e instanceof Be),
      (Ay = Fg().EventEmitter),
      (jy = class {
        _emitter = new Ay();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (My = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (Ny = J.requestAnimationFrame || My),
      (Py = (e) => Ny(e)),
      (Fy = 1 / 60),
      (Iy = class extends jy {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          Fy = e;
        }
        static get TimeStep() {
          return Fy;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), Py(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * Fy;
        }
        tick = () => {
          this._started &&
            (Py(this.tick),
            this.emit(`update`, this._frame, Fy),
            this.emit(`render`, this._frame, Fy),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (Ly = new Iy()),
      (Ry = { target: va() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (X = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => Ry.target,
        hasRestrictions: () => {
          let e = Ry.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (zy = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      De({
        borderTopWidth: zy(`y`),
        borderLeftWidth: zy(`x`),
        borderRightWidth: zy(`x`),
        borderBottomWidth: zy(`y`),
      }),
      (By = A.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (Vy = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (Hy = {
        ...Vy,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (Uy = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (Wy = { ...Uy, fontWeight: 500 }),
      (Gy = {
        ...Uy,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (Ky = (e) => e),
      (qy =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (Jy = Da(
        (e) =>
          qy.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (Yy = (e) => () => {
        Di(e);
      }),
      (Xy = () => () => {}),
      (Zy = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = $y.useImageSource(e, t, n);
          return C(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        isOnPageCanvas: !1,
      }),
      (Qy = !1),
      ($y = new Proxy(Zy, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? Xy()
              : Yy(
                  Qy
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (eb = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (tb = [1, 2, 2.2]),
      (nb = [512, 1024, 2048, 4096]),
      (rb = 512),
      (ib = { position: `absolute`, ...eb, top: 0, right: 0, bottom: 0, left: 0 }),
      (ab = `src`),
      (ob = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && ab in e;
        },
      }),
      (sb = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = Ya(Pi.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(Pi(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => Pi.distance(e.a, e.b)),
          e
        );
      })()),
      (Z = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => Z.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: ji(e.x, t),
          y: ji(e.y, t),
          width: ji(e.width, t),
          height: ji(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: Z.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: Z.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: Pi.distance(t, n), height: Pi.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(Z.minX)), y: Math.min(...e.map(Z.minY)) },
            n = { x: Math.max(...e.map(Z.maxX)), y: Math.max(...e.map(Z.maxY)) };
          return Z.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: Z.minX(e), y: Z.minY(e) },
          { x: Z.minX(e), y: Z.maxY(e) },
          { x: Z.maxX(e), y: Z.minY(e) },
          { x: Z.maxX(e), y: Z.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < Z.minX(e) ||
            t.x > Z.maxX(e) ||
            t.y < Z.minY(e) ||
            t.y > Z.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of Z.points(t)) if (!Z.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= Z.maxX(e) || Z.maxX(t) <= e.x || t.y >= Z.maxY(e) || Z.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = Z.maxX(e),
            r = Z.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = Z.maxY(e),
            r = Z.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => Z.intersects(t, e)) === void 0,
        isEqual: (e, t) => Z.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > Z.maxX(e) && (n = t.x - Z.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > Z.maxY(e) && (r = t.y - Z.maxY(e)),
            Pi.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: Z.minX(e), y: Z.minY(e) },
            r = { x: Z.minX(t), y: Z.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = Z.minX(e),
            r = Z.minY(e),
            i = Z.maxX(e),
            a = Z.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = Z.cornerPoints(e);
          return [sb(t, n), sb(n, r), sb(r, i), sb(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  U(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              U(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  U(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              U(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = sb(t, Z.center(e)),
            r = Z.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && sb.intersection(n, t, !0)) {
              let n = cb[e];
              return (H(n, () => `Invalid edge name: ${JSON.stringify(cb)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          H(r, `Rect array is empty`);
          let i = Z.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            H(o);
            let s = Z.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (cb = [`top`, `right`, `bottom`, `left`]),
      (lb = {
        quickfix: (e) => (
          (Xa(e.widthType) || Xa(e.heightType)) && (e.aspectRatio = null),
          W(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || Xa(e.widthType) || W(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || Xa(e.heightType) || W(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (ub = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = lb.quickfix({
              left: W(t) || ki(t),
              right: W(n) || ki(n),
              top: W(r) || ki(r),
              bottom: W(i) || ki(i),
              widthType: Za(a),
              heightType: Za(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = hy.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = hy.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? hy.getNumber(t) : null,
              right: d.right ? hy.getNumber(n) : null,
              top: d.top ? hy.getNumber(r) : null,
              bottom: d.bottom ? hy.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? hy.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? hy.getNumber(t?.sizing.height) : null,
            c = ro(e.left, e.right);
          if (o && W(c)) i = o - c;
          else if (n && Xa(e.widthType)) i = n.width;
          else if (W(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                U(e.widthType);
            }
          let l = ro(e.top, e.bottom);
          if (s && W(l)) a = s - l;
          else if (n && Xa(e.heightType)) a = n.height;
          else if (W(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                U(e.heightType);
            }
          return no(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = ub.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? hy.getNumber(l.width) : null,
            d = l ? hy.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? Z.pixelAligned(f) : f;
        },
      }),
      (db = 200),
      (fb = 200),
      (pb = A.createContext({ parentSize: 0 })),
      (mb = (e) => {
        let t = fo(),
          { parentSize: n, children: r } = e,
          i = A.useMemo(() => ({ parentSize: n }), [mo(n), ho(n)]);
        return t === 1
          ? r
            ? T(_, { children: r })
            : null
          : T(pb.Provider, { value: i, children: r });
      }),
      (hb = A.createContext(void 0)),
      (gb = new Set()),
      (vb = `style[data-framer-css-ssr-minified]`),
      (yb = (() => {
        if (!Tn()) return new Set();
        let e = document.querySelector(vb)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (bb = `data-framer-css-ssr`),
      (xb = (e, t, r) =>
        A.forwardRef((i, a) => {
          let { sheet: o, cache: s } = A.useContext(hb) ?? {},
            c = r;
          if (!Tn()) {
            qe(t) && (t = t(Co(), i));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            Cb.add(e, c);
          }
          return (
            n(() => {
              (c && yb.has(c)) ||
                (qe(t)
                  ? t(Co(), i)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && So(e, o, s));
            }, []),
            T(e, { ...i, ref: a })
          );
        })),
      (Sb = class {
        styles = new Set();
        componentIds = new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (Cb = new Sb()),
      (wb = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      (Tb = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.IconContent = `--framer-input-icon-content`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(Tb || {})),
      (Eb = Tb),
      (Db = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (H(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${wo(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            H(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      `${Eb.BorderTopWidth}${Eb.BorderRightWidth}${Eb.BorderBottomWidth}${Eb.BorderLeftWidth}`,
      (Ob = `--list-style-type`),
      (kb = `--max-list-digits`),
      (Ab = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (jb = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (Mb = { display: `inline-block` }),
      (Nb = { display: `block` }),
      (Pb = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${jb.display};
            flex-direction: ${jb.flexDirection};
            justify-content: ${jb.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${Ao([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${Ao([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${Ao([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${Mb.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${Ao([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${Ao([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ao([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Ao([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${Ao([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${Ao([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${Ao([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${Ao([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${Ao([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${Ao([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ao([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${Ao([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${Ao([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ao([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${Ao([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ao([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Ao([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${Ao([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ao([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${Nb.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${kb}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${jo(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (Fb = `--text-truncation-display-inline-for-safari-16`),
      (Ib = `--text-truncation-display-none-for-safari-16`),
      (Lb = `--text-truncation-line-break-for-safari-16`),
      (Rb = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (zb = `(background: -webkit-named-image(i))`),
      (Bb = `(contain-intrinsic-size: inherit)`),
      (Vb = [
        `@supports ${zb} and (not ${Bb}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${Rb.join(`, `)} { display: var(${Fb}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${Rb.map((e) => `${e}::after`).join(`, `)} { content: var(${Lb}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${Ib}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${Fb}, ${Mb.display}) }
    }`,
      ]),
      (Hb = `--framer-will-change-override`),
      (Ub = `--framer-will-change-effect-override`),
      (Wb = `--framer-will-change-filter-override`),
      (Gb = `--overflow-clip-fallback`),
      (Kb = `--one-if-corner-shape-supported`),
      (qb = (e) => {
        let t = [
            `[data-framer-component-type="Text"] { cursor: inherit; }`,
            `[data-framer-component-text-autosized] * { white-space: pre; }`,
            `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
            `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
            `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
            `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
            `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
            `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
          ],
          n = [
            `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
            `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
          ],
          r = [
            `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
            `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
            `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
          ],
          i = [
            `[data-framer-cursor="pointer"] { cursor: pointer; }`,
            `[data-framer-cursor="grab"] { cursor: grab; }`,
            `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
          ],
          a = [
            `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
            `[data-framer-generated] * { pointer-events: unset }`,
          ],
          o = [
            `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
            `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
            `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          ],
          s = `(background: -webkit-named-image(i))`,
          c = (e) =>
            e
              ? [
                  `body { ${Hb}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${Hb}: transform; } }`,
                ]
              : [`body { ${Hb}: none; ${Ub}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${Wb}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${Wb}: filter; } }`,
                ]
              : [`body { ${Wb}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${Gb}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${Kb}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...Pb,
          ...wb,
          `
[data-framer-component-type="Stack"]:not([data-framer-generated]) > *,
[data-framer-component-type="Stack"]:not([data-framer-generated]) > [data-framer-component-type] {
    position: relative;
}`,
          `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
          ...n,
          ...r,
          `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
          `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
          `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
          ...i,
          ...u(e),
          `.svgContainer svg { display: block; }`,
          `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
          ...o,
          d,
          `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
          ...Vb,
          f,
        ];
      }),
      (Jb = xo(() => qb(!1))),
      (Yb = xo(() => qb(!0))),
      (Xb = Sn()),
      (Zb = A.createContext(!1)),
      (Qb = class {
        sharedResizeObserver;
        callbacks = new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      ($b = Tn() ? new Qb() : void 0),
      (ex = `data-framer-size-compatibility-wrapper`),
      (tx = `0.000001px`),
      (nx = ` translateZ(${tx})`),
      (rx = Dn() || Cn() || On()),
      (ix = (() => {
        class e extends y {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? qo(t) : Jo(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !wt(this.props, e);
          }
          componentDidUpdate(e) {
            Ky(this.props).clip &&
              Ky(this.props).radius === 0 &&
              Ky(e).radius !== 0 &&
              Xo(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (ax = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (ox = {
        hueRotate: (e, t) => Y.toHslString(Y.hueRotate(Y(e), t)),
        setAlpha: (e, t) => Y.toRgbString(Y.alpha(Y(e), t)),
        getAlpha: (e) => {
          let t = $i(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => Y.toRgbString(Y.multiplyAlpha(Y(e), t)),
        toHexValue: (e) => Y.toHex(Y(e)).toUpperCase(),
        toHex: (e) => Y.toHexString(Y(e)).toUpperCase(),
        toRgb: (e) => Y.toRgb(Y(e)),
        toRgbString: (e) => Y.toRgbString(Y(e)),
        toHSV: (e) => Y.toHsv(Y(e)),
        toHSL: (e) => Y.toHsl(Y(e)),
        toHslString: (e) => Y.toHslString(Y(e)),
        toHsvString: (e) => Y.toHsvString(Y(e)),
        hsvToHSLString: (e) => Y.toHslString(Y(Vi(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => Y.toHex(Y(Vi(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => Y.toHexString(Y(Vi(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => Y.toRgbString(Y(Vi(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => Vi(e.h, e.s, e.v),
        rgbaToString: (e) => Y.toRgbString(Y(e)),
        rgbToHexValue: (e) => Y.toHex(Y(e)),
        rgbToHexString: (e) => Y.toHexString(Y(e)),
        hslToString: (e) => Y.toHslString(Y(e)),
        hslToRgbString: (e) => Y.toRgbString(Y(e)),
        toColorPickerSquare: (e) => Y.toRgbString(Y({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => Y(e).isValid !== !1,
        equals: (e, t) =>
          Y.isP3String(e) || Y.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = Y(e)),
              typeof t == `string` && (t = Y(t)),
              Y.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = Y(e);
          return t.a === 1 ? Y.toHexString(t) : Y.toRgbString(t);
        },
        toFormatString: (e) => (Y.isP3String(e) ? e : Y.toRgbString(Y(e))),
      }),
      (sx = /var\(.+\)/u),
      (cx = new Map()),
      (lx = [`stops`]),
      (ux = [`start`, `end`]),
      (dx = [`angle`, `alpha`]),
      (fx = {
        isLinearGradient: (e) => V(e) && dx.every((t) => t in e) && (is(e) || rs(e)),
        hash: (e) => e.angle ^ ns(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = ts(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (px = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (mx = {
        isRadialGradient: (e) => V(e) && px.every((t) => t in e) && (is(e) || rs(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ ns(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = ts(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (hx = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (gx = new Set([...hx, ...hx.map((e) => `${e}Capture`)])),
      (_x = `overflow`),
      (vx = { x: 0, y: 0, width: 200, height: 200 }),
      (yx = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (bx = m(function (e, n) {
        let { name: r, center: i, border: a, _border: o, __portal: s } = e,
          { props: c, children: u } = Lo(e),
          d = hs(c),
          f = zo(e),
          p = us(e),
          m = l(null),
          h = n ?? m,
          g = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": p,
            "data-framer-highlight": p === `pointer` || void 0,
            "data-layoutid": f,
            "data-framer-offset-parent-id": Ky(e)[`data-framer-offset-parent-id`],
          };
        !gs(e) && r && (Ky(g)[`data-framer-name`] = r);
        let [v, y] = ms(c),
          b = ps(c),
          x = vo(b);
        (i && !(y && !x && ao(b))
          ? ((d.transformTemplate ||= Ro(i)), Object.assign(g, Fo(i)))
          : (d.transformTemplate ||= void 0),
          Go(e, h));
        let S = Ga(e),
          C = _s(c, b, y, t(Zb)),
          w = go(
            O(_, {
              children: [
                S
                  ? T(Va, {
                      alt: e.alt ?? ``,
                      image: S,
                      containerSize: y ?? void 0,
                      nodeId: e.id && Io(e.id),
                      layoutId: f,
                    })
                  : null,
                u,
                T(Ua, { ...o, border: a, layoutId: f }),
              ],
            }),
            C
          ),
          E = bo(e.as),
          D = yo(S);
        return (
          e.fitImageDimension &&
            D &&
            ((v[e.fitImageDimension] = `auto`), (v.aspectRatio = D.width / D.height)),
          O(E, { ...g, ...d, layoutId: f, style: v, ref: h, children: [w, s] })
        );
      })),
      (xx = No(
        m(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? T(bx, { ...e, ref: t }) : null;
        })
      )),
      (Sx = `__LAYOUT_TREE_ROOT`),
      (Cx = A.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (wx = class extends y {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: t.options.layoutId === Sx && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return T(Cx.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (Tx = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (Ex = class {
        sharedIntersectionObserver;
        callbacks = new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (Dx = a(new Map())),
      (Ox = typeof IntersectionObserver > `u` ? Bg : Es),
      (kx = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (Ax = A.createContext(null)),
      (jx = class extends y {
        layoutMaybeMutated = !1;
        projectionNodes = new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) => e.options.layoutId === Sx && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return T(Ne.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (Mx = (e) => {
        let t = A.useContext(Cx);
        return T(jx, { ...e, sharedLayoutContext: t });
      }),
      (Nx = A.createContext(!0)),
      (Px = a({ register: () => {}, deregister: () => {} })),
      (Fx = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = js(),
          i = l({
            register: s(
              (e) => {
                if (r.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                r.set(e, void 0);
              },
              [r]
            ),
            deregister: s(
              (e) => {
                (r.get(e)?.(), r.delete(e));
              },
              [r]
            ),
          }).current;
        return (
          c(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, qe(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          T(Px.Provider, { value: i, children: n })
        );
      }),
      (Ix = A.memo(function ({
        isLayeredContainer: e,
        isCurrent: n,
        isPrevious: r,
        isOverlayed: i = !1,
        visible: a,
        transitionProps: o,
        children: s,
        backdropColor: u,
        onTapBackdrop: d,
        backfaceVisible: f,
        exitBackfaceVisible: p,
        animation: m,
        exitAnimation: h,
        instant: g,
        initialProps: _,
        exitProps: v,
        position: y = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: b,
        index: x,
        areMagicMotionLayersPresent: S,
        id: C,
        isInitial: w,
      }) {
        let E = pe(),
          D = t(Ee),
          { persistLayoutIdCache: ee } = t(By),
          k = l({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: Ps({}, _, o),
          }),
          te = l(null),
          A = D !== null && !D.isPresent;
        (n && k.current.wasCurrent === void 0 && ee(),
          c(() => {
            if (e || !E) return;
            if (A) {
              k.current = { ...k.current, wasBeingRemoved: A };
              return;
            }
            let { wasPrevious: t, wasCurrent: i } = k.current,
              a = (n && !i) || (!A && k.current.wasBeingRemoved && n),
              s = r && !t,
              c = Ps(k.current.origins, _, o),
              l = k.current.wasReset;
            (a || s
              ? (E.stop(), E.start({ zIndex: x, ...c, ...o }), (l = !1))
              : l === !1 && (E.stop(), E.set({ zIndex: x, ...Lx, opacity: 0 }), (l = !0)),
              (k.current = {
                wasCurrent: !!n,
                wasPrevious: !!r,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [n, r, A]));
        let ne = g ? { type: !1 } : `velocity` in m ? { ...m, velocity: 0 } : m,
          j = g ? { type: !1 } : h || m,
          re = { ...y };
        ((re.left === void 0 || re.right === void 0) && (re.width = `auto`),
          (re.top === void 0 || re.bottom === void 0) && (re.height = `auto`));
        let ie = (Fs(o) || Fs(_)) && (e || n || r) ? 1200 : void 0,
          M = { ...Lx, ...k.current.origins },
          ae = e
            ? {
                initial: { ...M, ..._ },
                animate: { ...M, ...o, transition: ne },
                exit: { ...M, ...v, transition: m },
              }
            : { animate: E, exit: { ...M, ...v, transition: j } },
          oe = !(A || S === !1),
          se = !!n && oe,
          N = n && w;
        return O(xx, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || A || (n && b) ? x : void 0,
            pointerEvents: void 0,
            visibility: a ? `visible` : `hidden`,
            perspective: ie,
          },
          children: [
            e &&
              T(xx, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: m,
                initial: { opacity: g && a ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: u || `transparent`,
                onTap: A ? void 0 : d,
              }),
            T(xx, {
              ...re,
              ...ae,
              transition: {
                default: ne,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: A ? p : f,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!n,
              style: { pointerEvents: void 0, opacity: N || e || (n && b) ? 1 : 0 },
              "data-is-present": oe ? void 0 : !1,
              ref: te,
              children: T(Ax.Provider, {
                value: te,
                children: T(Nx.Provider, {
                  value: se,
                  children: T(Fx, {
                    isCurrent: se,
                    isOverlayed: i,
                    children: T(Mx, {
                      isLead: n,
                      animatesLayout: !!b,
                      transition: ne,
                      isExiting: !oe,
                      isOverlayed: i,
                      id: C,
                      children: s,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, Ns)),
      (Lx = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (Rx = class {
        warning = () => {
          Di(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (zx = a(new Rx())),
      (Bx = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (Vx = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (Hx = e_(Lx)),
      (Ux = A.createContext(void 0)),
      (Wx = A.createContext(void 0)),
      (Gx = (() => {
        class e extends y {
          #e = null;
          state = Vx();
          static defaultProps = { enabled: !0 };
          static contextType = Ux;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !Ja(t) || !qa(t)) return;
            let n = { ...Bx.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = zs(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!Ja(t) || !qa(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, Bx.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = zs(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !Ja(e) || !qa(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, Bx.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, Bx.Fade, t);
          }
          push(e, t) {
            this.#i(e, Is(t), t);
          }
          modal(e, t) {
            this.#i(e, Bx.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, Ls(t), t);
          }
          flip(e, t) {
            this.#i(e, Rs(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, Bx.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = ec(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              H(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              H(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                T(
                  Ix,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: uc(o, e),
                    transitionProps: u,
                    animation: lc(o, e),
                    backfaceVisible: sc(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: T(vs, { children: fc({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              T(
                Ix,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: oc(n, t),
                  transitionProps: cc(n, t),
                  instant: uc(n, t, !0),
                  animation: lc(n, t),
                  exitProps: e.transition.enter,
                  visible: dc(n, t),
                  backdropColor: ic(e.transition),
                  backfaceVisible: ac(n, t),
                  onTapBackdrop: pc(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: fc({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return T(xx, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: T(zx.Provider, {
                value: this,
                children: O(Wx.Provider, {
                  value: i,
                  children: [
                    T(Ix, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: tc(n),
                      animation: nc(n),
                      backfaceVisible: rc(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: T(ya, {
                        children: T(wx, {
                          children: T(Fe, { presenceAffectsLayout: !1, children: a }),
                        }),
                      }),
                    }),
                    T(Fe, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (Kx = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (qx = No(A.forwardRef(mc))),
      L(Rg(), 1),
      (Jx = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.ChangeHandler = `changehandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        (e.Location = `location`),
        e
      ))(Jx || {})),
      (Yx = `optional`),
      L(Rg(), 1),
      L(Rg(), 1),
      (Xx = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (Zx = Symbol(`private`)),
      (Qx = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [Zx]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new my(),
                reset() {
                  for (let t in i)
                    if (Xx(i, t)) {
                      let n = Xx(e, t) ? Ky(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, eS);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[Zx].reset()),
          (e.addObserver = (e, t) => e[Zx].observers.add(t)),
          e
        );
      })()),
      ($x = class {
        set = (e, t, n, r) => {
          if (t === Zx) return !1;
          let i = e[Zx],
            a,
            o;
          if (
            (ki(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = hy(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = Ky(e)[t];
          if (l !== void 0) {
            ki(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (Ky(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === Zx) return Ky(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[Zx].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(Zx);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== Zx) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (eS = new $x()),
      (tS = `opacity`),
      (nS = (() => {
        function e(t = {}) {
          let n = Qx(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => Qx.resetObject(e));
          }),
          (e.addObserver = (e, t) => Qx.addObserver(e, t)),
          e
        );
      })()),
      (rS = { update: 0 }),
      (iS = A.createContext({ update: NaN })),
      (aS = class extends y {
        observers = [];
        state = rS;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), Ly.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), nS.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            nS._stores.forEach((e) => {
              let t = nS.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            T(iS.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      L(Rg(), 1),
      (oS = `__framer__`),
      (sS = oS.length),
      (cS = A.createContext(void 0)),
      (lS = A.createContext(void 0)),
      (uS = `ssr-variant`),
      (dS = `ssr-variant-group-separator`),
      (fS = A.forwardRef(function (e, t) {
        let n = Pc(t),
          r = A.useContext(lS),
          i = A.useSyncExternalStore(Gg, qg, Kg),
          a = Sa(() => (i ? (Tn() ? 1 : 2) : 0)),
          o = A.useContext(cS);
        return zr(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, Hc(t, c, i));
            case 1:
              return Lc(i, s, c, u, l, d, n, t);
            case 2:
              return Lc(i, s, c, u, l, d, Nc, void 0);
            default:
              U(a);
          }
        }, [o, r, n, e]);
      })),
      (pS = xb(fS, `.${uS} { display: contents }`, `PropertyOverrides`)),
      (mS = `default`),
      (hS = new Set([mS])),
      (gS = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (H(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (H(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = mS, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return mS;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = Rc(r)) : mS;
        }
        setAll(e, t = hS, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = qe(n.transformTemplate) ? n.transformTemplate?.({}, vS) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: V(a) ? a : void 0,
              animate: V(o) ? o : void 0,
              transformTemplate: z(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (_S = new gS()),
      (vS = `__Appear_Animation_Transform__`),
      (yS = `data-framer-appear-id`),
      (bS = `data-framer-appear-animation`),
      (xS = (e) => {
        if (Ta())
          return {
            animate: Wc(e.animate) ? e.animate : void 0,
            initial: Wc(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (SS = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (CS = (e) => ({
        x: M(e?.x ?? 0),
        y: M(e?.y ?? 0),
        opacity: M(e?.opacity ?? 1),
        scale: M(e?.scale ?? 1),
        rotate: M(e?.rotate ?? 0),
        rotateX: M(e?.rotateX ?? 0),
        rotateY: M(e?.rotateY ?? 0),
        skewX: M(e?.skewX ?? 0),
        skewY: M(e?.skewY ?? 0),
        transformPerspective: M(e?.transformPerspective ?? 0),
      })),
      (wS = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (TS = { willChange: `transform` }),
      Object.freeze(TS),
      (ES = {}),
      Object.freeze(ES),
      (DS = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (OS = () => {
        let e = l();
        return (
          c(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (kS = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (AS = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (jS = 1),
      (MS = 4),
      (NS = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (PS = [`animate`, `animate`]),
      (FS = { inputRange: [], outputRange: [] }),
      (IS = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (LS = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (RS = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (zS = [0, 1]),
      (BS = { parallax: kS, styleAppear: NS, styleTransform: IS, loop: DS, presence: AS }),
      (VS = e_(BS)),
      (HS = (e) => e.reduce((e, t) => (e += t), 0)),
      (US = (e) => e.reduce((e, t) => (e *= t), 1)),
      (WS = `current`),
      (GS = (e) =>
        A.forwardRef((t, n) => {
          if (t.__withFX)
            return T(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = xS(t);
          if (r) return T(e, { ...t, ...r, ref: n });
          let {
              parallax: i = {},
              styleAppear: a = {},
              styleTransform: o = {},
              presence: s = {},
              loop: c = {},
              forwardedProps: l,
              targetOpacityValue: u,
              withPerspective: d,
              inSmartComponent: f = !1,
            } = pl(t),
            p = Cs(n),
            { values: m, style: h } = $c(s, p, f, t.style, t[Ue]),
            { values: g, style: _ } = Yc(i, p, t.style?.visibility),
            { values: v, style: y } = dl(o, p),
            { values: b, style: x } = sl(a, p),
            { values: S, style: C } = qc(c, p),
            w = A.useMemo(() => {
              let e = new Be(u ?? 1);
              return {
                scale: [b.scale, S.scale, m.scale, v.scale],
                opacity: [b.opacity, S.opacity, m.opacity, e, v.opacity],
                x: [b.x, S.x, m.x, v.x],
                y: [b.y, S.y, g.y, m.y, v.y],
                rotate: [b.rotate, S.rotate, m.rotate, v.rotate],
                rotateX: [b.rotateX, S.rotateX, m.rotateX, v.rotateX],
                rotateY: [b.rotateY, S.rotateY, m.rotateY, v.rotateY],
                skewX: [b.skewX, S.skewX, m.skewX, v.skewX],
                skewY: [b.skewY, S.skewY, m.skewY, v.skewY],
                transformPerspective: [v.transformPerspective, b.transformPerspective],
              };
            }, [u, v, g, b, S, m]);
          hl(t.style, w);
          let E = I(w.scale, US),
            D = I(w.opacity, US),
            ee = I(w.x, HS),
            O = I(w.y, HS),
            k = I(w.rotate, HS),
            te = I(w.rotateX, HS),
            ne = I(w.rotateY, HS),
            j = I(w.skewX, HS),
            re = I(w.skewY, HS),
            ie = I(w.transformPerspective, HS),
            { drag: M, dragConstraints: ae } = l;
          Vo(M && ml(ae) ? ae : void 0);
          let oe = {
            opacity: D,
            scale: E,
            x: ee,
            y: O,
            rotate: k,
            rotateX: te,
            rotateY: ne,
            skewX: j,
            skewY: re,
          };
          Ze(d) && (oe.transformPerspective = ie);
          let se = gl(t.animate) ? t.animate : void 0,
            N = gl(t.initial) ? t.initial : void 0,
            ce = gl(t.exit) ? t.exit : void 0,
            le = f && !s.presenceInitial ? { initial: N, animate: se, exit: ce } : {};
          return T(e, {
            ...l,
            ...le,
            __withFX: !0,
            style: { ...t.style, ..._, ...y, ...C, ...oe, ...x, ...h },
            values: m,
            ref: p,
          });
        })),
      (KS = A.createContext({})),
      (qS = A.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = A.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = Pc(a);
        return T(KS.Provider, { value: o, children: s(r, i) });
      })),
      (JS = (e) =>
        A.forwardRef((t, n) =>
          T(e, { layoutId: zo(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (YS = {}),
      (XS = () => YS),
      (ZS = (e) => {
        YS = e;
      }),
      (QS = !1),
      ($S = class extends y {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!vl(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              ot(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          an(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!vl(e)) throw e;
          return ((QS = !0), this.props.children);
        }
      }),
      (eC = j === void 0 ? null : new Promise(() => {})),
      (tC = T(yl, {})),
      (nC = a(!1)),
      (nC.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (rC = T(xl, {})),
      (iC = class extends y {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Cl(this.props.getErrorMessage(), t?.componentStack), Sl(e, t));
        }
        render() {
          let { children: e, fallback: t = rC } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (aC = class extends y {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            Sl(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (oC = A.createContext(void 0)),
      (sC = `code-crash:`),
      (cC = JS(
        A.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            ...c
          },
          l
        ) {
          let u = Sa(() => (t ? `${t}-container` : void 0)),
            d = bo(n),
            f = Ll(
              A.Children.map(e, (e) =>
                A.isValidElement(e) ? A.cloneElement(e, { layoutId: t }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return T(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: T(Zb.Provider, {
              value: !0,
              children: T(yv.Provider, {
                value: i ?? null,
                children: T(xa, {
                  enabled: !1,
                  children: T(ze, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: f }),
                }),
              }),
            }),
          });
        })
      )),
      (lC = a({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (uC = `framer-cursor-none`),
      (dC = `framer-pointer-events-none`),
      (fC = b(function ({ children: e }) {
        let t = Sa(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = Rl(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = fe();
        return O(lC.Provider, { value: t, children: [e, !n && T(gC, {})] });
      })),
      (pC = xb(
        fC,
        [
          `.${uC}, .${uC} * { cursor: none !important; }`,
          `.${dC}, .${dC} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (mC = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (hC = `data-framer-portal-id`),
      (gC = b(function () {
        let { onRegisterCursors: e } = t(lC),
          [n, r] = i(!1),
          a = se(0),
          o = se(0),
          u = se(0),
          d = l(null),
          p = l({ cursors: {}, cursorHash: void 0 }),
          m = Bo();
        (f(() => {
          let e = J.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? k(() => r(!1)) : r(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || r(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          c(() => {
            if (!n) return;
            let e = 0,
              t = 0;
            function r() {
              (a.set(e), o.set(t), Oe(u, 1, { type: `tween`, duration: 0.2 }));
            }
            let i = () => {
              if (Xe(p.current.cursors)) return;
              let n = Hl(e, t);
              n !== p.current.cursorHash && ((p.current.cursorHash = n), R.update(() => m()));
            };
            function s(n) {
              if (n.pointerType === `touch`) {
                Pe(i);
                return;
              }
              (R.read(i, !0), (e = n.clientX), (t = n.clientY), R.update(r));
            }
            function c(e) {
              if (e.target === d.current || !d.current) return;
              let t = new PointerEvent(e.type, {
                bubbles: !0,
                cancelable: e.cancelable,
                pointerType: e.pointerType,
                pointerId: e.pointerId,
                composed: e.composed,
                isPrimary: e.isPrimary,
                buttons: e.buttons,
                button: e.button,
              });
              R.update(() => {
                d.current?.dispatchEvent(t);
              });
            }
            return (
              J.addEventListener(`pointermove`, s),
              document.addEventListener(`pointerdown`, c),
              document.addEventListener(`pointerup`, c),
              R.read(i, !0),
              () => {
                (J.removeEventListener(`pointermove`, s),
                  document.removeEventListener(`pointerdown`, c),
                  document.removeEventListener(`pointerup`, c),
                  Pe(i));
              }
            );
          }, [u, a, o, m, n]),
          c(() => {
            if (!n) return;
            function e() {
              Oe(u, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              J.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), J.removeEventListener(`blur`, e));
              }
            );
          }, [u, n]),
          f(() => {
            function t(e) {
              ((p.current.cursors = e),
                (p.current.cursorHash = Xe(e) ? null : Hl(a.get(), o.get())),
                m());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(uC, !1));
            };
          }, [a, o, e, m]));
        let { cursors: h, cursorHash: g } = p.current,
          _ = g ? h[g] : null,
          v = zl(_);
        f(() => {
          n && document.body.classList.toggle(uC, v);
        }, [v, n]);
        let y = _?.component,
          b = _?.transition ?? { duration: 0 },
          S = b.duration === void 0 ? b : { ...b, duration: b.duration * 1e3 },
          C = ie(a, S),
          w = ie(o, S),
          E = I(() => C.get() + (_?.offset?.x ?? 0)),
          D = I(() => w.get() + (_?.offset?.y ?? 0)),
          ee = _?.alignment,
          O = _?.placement,
          te = s((e, t) => `translate(${Vl(O, ee)}) ${t}`, [ee, O]);
        return !n || !_ || !y
          ? null
          : T(x, {
              children: T(y, {
                transformTemplate: te,
                style: { ...mC, x: E, y: D, opacity: u },
                globalTapTarget: !0,
                variant: _?.variant,
                ref: d,
                className: dC,
              }),
            });
      })),
      (_C = `webPageId`),
      (vC = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            H(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (H(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((Vg && !On()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(Gl(e), e), this.collectedLinks.set(Gl(t), t));
          let n = this.nestingInfo.get(Gl(e)) ?? new Set();
          (n.add(Gl(t)), this.nestingInfo.set(Gl(e), n));
        }
      }),
      (yC = new vC()),
      (bC = `element`),
      (xC = `collection`),
      (SC = `collectionItemId`),
      (CC = `pathVariables`),
      (wC = `framer/page-link,`),
      (TC = a(void 0)),
      (EC = `--text-selection-color`),
      (DC = `--text-selection-background-color`),
      (OC = xb(lu, (e, t) => cu(t?.triggerId), `InjectSelectionStyle`)),
      (kC = {
        isClockwise: (e) => kC.signedArea(e) <= 0,
        signedArea: (e) => {
          let t = 0,
            n = e.length;
          for (let r = 0; r < n; r++) {
            let i = e[r],
              a = e[(r + 1) % n];
            !i || !a || (t += i.x * -a.y - a.x * -i.y);
          }
          return (1 / 2) * t;
        },
        containsPoint: (e, t) => {
          let n;
          for (let r = 0; r < e.length; r++) {
            if (Pi.isEqual(e[r], t)) return !0;
            let i = e[r]?.x ?? 0,
              a = e[r]?.y ?? 0,
              o = (r + 1) % e.length;
            if (Pi.isEqual(e[o], t)) return !0;
            let s = e[o]?.x ?? 0,
              c = e[o]?.y ?? 0,
              l = (t.x - i) * (c - a) - (t.y - a) * (s - i);
            if (l === 0) continue;
            let u = l > 0;
            if (((n ??= u), n !== u)) return !1;
          }
          return !0;
        },
        intersects: (e, t) => {
          if (e.length < 1 || t.length < 1) return !1;
          let n = Z.boundingRectFromPoints(e),
            r = Z.boundingRectFromPoints(t);
          if (!Z.intersects(n, r)) return !1;
          let i = [],
            a = e.length;
          e.forEach((t, n) => {
            let r = e[(n + 1) % a];
            r && i.push(sb(t, r));
          });
          let o = [],
            s = t.length;
          t.forEach((e, n) => {
            let r = t[(n + 1) % s];
            r && o.push(sb(e, r));
          });
          for (let e of i) for (let t of o) if (sb.intersection(e, t, !0)) return !0;
          return !!(kC.containsPoint(t, e[0]) || kC.containsPoint(e, t[0]));
        },
        contains: (e, t) => {
          for (let n = 0; n < t.length; n++) if (!kC.containsPoint(e, t[n])) return !1;
          return !0;
        },
        clipToRect: (e, t) => {
          let n = Z.edges(t),
            r = new Set(),
            i = e.length,
            a = [],
            o = [];
          for (let s = 0; s < i; s++) {
            let c = e[s],
              l = e[(s + 1) % i];
            if (Z.containsPoint(t, c)) {
              let e = uu(c);
              if ((r.add(e), o.push(c), Z.containsPoint(t, l))) continue;
            }
            let u = sb(c, l);
            n.forEach((e) => {
              let t = sb.intersection(u, e, !0);
              if (!t) return;
              let n = uu(t);
              r.has(n) || (r.add(n), a.push(t));
            });
          }
          return a.length === 0
            ? o
            : (Z.points(t).forEach((t) => {
                kC.containsPoint(e, t) && (r.add(uu(t)), a.push(t));
              }),
              Pi.sortClockwise([...o, ...a]));
        },
      }),
      (AC = 5),
      (jC = 4),
      (MC = (() => {
        let e = A.createContext(new Set());
        return ((e.displayName = `FloatingStackingContext`), e);
      })()),
      (NC = `overlay`),
      (PC = `template-overlay`),
      (FC = class extends y {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((j.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(ot(Hg ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          an(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (Hg && document.getElementById(`main`)?.innerHTML) || ``;
          return T(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${ot()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (IC = /:([a-z]\w*)/gi),
      (LC = a(void 0)),
      (RC = 500),
      (zC = 0.9),
      (BC = 1.7),
      (VC = 4),
      (HC = 1 / 0),
      (UC = new WeakMap()),
      (WC = new Set()),
      (GC = new Map()),
      (KC = !ev || typeof IntersectionObserver > `u` ? null : Vu()),
      (qC = Fu(
        m(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: s,
            scopeId: c,
            motionChild: l,
            ...u
          },
          d
        ) {
          let f = Dt(),
            p = kt(),
            m = zu(),
            { activeLocale: h, locales: g } = Vr(),
            _ = qu(),
            v = Ln(),
            y = Kl(),
            b = Ju({ nodeId: s, clickTrackingId: i, router: f, href: t, activeLocale: h }),
            x = C(() => {
              if (!t) return {};
              let e = Wl(t) ? t : $l(t);
              if (!e) return {};
              if (z(e))
                return Qu(
                  e,
                  f,
                  p,
                  {
                    openInNewTab: n,
                    trackLinkClick: b,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  v,
                  h?.id,
                  g,
                  m
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = _(i, s, h);
              if (rt(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: y,
                  locale: x,
                } = Iu(f, p, e, h, c, m),
                S = Uu(n, !0),
                C = S === `_blank`,
                w = { pathVariables: y, locale: x },
                T = (e) =>
                  Xu(
                    f,
                    l,
                    () =>
                      v(l, w, {
                        priority: `user-blocking`,
                        yieldBeforePreload: !1,
                        shouldLoadRouteData: !C,
                      }),
                    d,
                    y,
                    r,
                    e
                  );
              return {
                href: u,
                target: S,
                onClick: Zu(u, b, T),
                "data-framer-page-link-current": (p && Bu(p, e, m)) || void 0,
                navigate: T,
                preload: () =>
                  v(l, w, {
                    priority: `background`,
                    yieldBeforePreload: !0,
                    shouldLoadRouteData: !C,
                  }),
                _routeId: l,
                _pathVariables: y,
                _locale: x,
              };
            }, [t, f, h, m, n, p, r, b, a, g, o, _, v]),
            S = Cs(D(e) && `ref` in e ? e.ref : void 0),
            { navigate: w, preload: T, _routeId: E, _pathVariables: ee, _locale: O, ...k } = x;
          ws(
            S,
            (e) => {
              if (!(e === null || !E || !T || y))
                return KC?.(e, T, `${E}:${O?.id}:${JSON.stringify(ee)}`);
            },
            [T, E, ee, O, y]
          );
          let te = !!w;
          return nu(
            Pc(d).cloneAsArray(e, (e) => $u(e, { ...u, ...td(k, l, te) }, S)),
            c,
            s,
            t,
            x,
            S
          );
        })
      )),
      (JC = A.createContext(void 0)),
      (YC = `__framer_force_showing_editorbar_since`),
      (XC = class extends y {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (ZC = () => {
        try {
          return !!localStorage[YC];
        } catch {
          return !1;
        }
      }),
      (QC = () => !ZC()),
      ($C = (() => {
        let e = a(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (ew = null),
      (tw = null),
      Wg(cd),
      (nw = (e, n, r, i, a, o) => {
        let s = t(JC),
          u = l(),
          d = hn(),
          f = l(!0);
        return (
          c(() => {
            function t() {
              (!ew || !tw) && cd();
              let t = r ? new URL(r, J.location.href) : J.location,
                c = {
                  version: w_,
                  abTestId: e?.abTestId,
                  framerSiteId: s ?? null,
                  webPageId: e?.abTestingVariantId ?? n,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: t.href,
                  hostname: t.hostname,
                  pathname: t.pathname,
                  search: t.search || null,
                  hash: t.hash || null,
                  timezone: ew,
                  locale: tw,
                },
                l = f.current && o !== void 0 ? o : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = l ?? null;
                    if (l === void 0) {
                      let n = e.collectionId && d?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && z(r)) {
                        let e = n.getRecordIdBySlug(r, a || void 0);
                        t = (rt(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (u.current = t()),
                n = e instanceof Promise ? await e : e;
              ((u.current = n),
                f.current ? (f.current = !1) : an(`published_site_pageview`, n, `eager`));
            })();
            let c = async (e) => {
              if (e.persisted) {
                let e = (u.current = t()),
                  n = e instanceof Promise ? await e : e;
                ((u.current = n), an(`published_site_pageview`, n, `eager`));
              }
            };
            return (
              j.addEventListener(`pageshow`, c),
              () => {
                j.removeEventListener(`pageshow`, c);
              }
            );
          }, [e, n, r, i, a, s, d, o]),
          u
        );
      }),
      (rw = 0),
      (iw = 500),
      (aw = 200),
      (ow = `main`),
      (sw = `framerGeneratedPage`),
      (cw = `<!-- Start of headStart -->`),
      (lw = `<!-- End of headStart -->`),
      (uw = `<!-- Start of headEnd -->`),
      (dw = `<!-- End of headEnd -->`),
      (fw = `<!-- Start of bodyStart -->`),
      (pw = `<!-- End of bodyStart -->`),
      (mw = `<!-- Start of bodyEnd -->`),
      (hw = `<!-- End of bodyEnd -->`),
      (gw = A.createContext(void 0)),
      (_w = { status: `loading`, data: void 0 }),
      (vw = 5e3),
      (yw = () => {}),
      (bw = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = new Map();
        #e = new Map();
        #t = new Set();
        #n = new Map();
        #r = new Map();
        #i = new Map();
        #a = new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = ef(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = ef(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = J.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = this.#r.get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          this.#a.set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              af(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = Ac(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && af(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!Tn() || !Jl(e.url, !1)) return;
          let t = ef(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = rf(n, e);
          return (e.resultOutputType === `image` && z(i) && (await Zd(i).catch(yw)), i);
        }
        async fetchWithCache(e) {
          if (!Tn()) return;
          let t = ef(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && af(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, _w);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !this.#t.has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!Jl(r, !1)) return yw;
          let a = ef(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n &&
                (n.delete(t),
                n.size === 0 && this.#e.delete(a),
                this.#e.size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (xw = a(void 0)),
      (Sw = a(!0)),
      (Cw = ({ children: e, client: t }) => {
        let [n] = i(() => t ?? new bw()),
          [r, a] = i(!0);
        return (
          c(
            () => (
              n.hydrateCache(),
              k(() => {
                a(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          T(Sw.Provider, { value: r, children: T(xw.Provider, { value: n, children: e }) })
        );
      }),
      (Ie.WillChange = Ve),
      (ww = { priority: void 0, canYield: !0 }),
      (Tw = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return wf(e, t);
            case `boolean`:
              return Ef(e);
            case `color`:
              return kf(e);
            case `date`:
              return jf(e);
            case `enum`:
              return Nf(e);
            case `file`:
              return Ff(e);
            case `link`:
              return Lf(e);
            case `number`:
              return zf(e);
            case `object`:
              return Hf(e, t);
            case `responsiveimage`:
              return Wf(e);
            case `richtext`:
              return Kf(e);
            case `string`:
              return Xf(e);
            case `vectorsetitem`:
              return Jf(e);
            case `unknown`:
              return e;
            default:
              U(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Je(e)
            ? { type: `boolean`, value: e }
            : et(e)
              ? { type: `date`, value: e.toISOString() }
              : B(e)
                ? { type: `number`, value: e }
                : z(e)
                  ? { type: `string`, value: e }
                  : Ye(e)
                    ? { type: `array`, value: e.map(Tw.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && Qf(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && Qf(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && Qf(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && Qf(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && Qf(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => Tw.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => Tw.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = Zf(e),
            i = Zf(t);
          return Qe(r) || Qe(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = Zf(e),
            i = Zf(t);
          return Qe(r) || Qe(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = Zf(e),
            i = Zf(t);
          return Qe(r) || Qe(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(Tw.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return z(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              U(e);
          }
        },
      }),
      (Ew = { type: `unknown`, isNullable: !0 }),
      (Dw = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = Sc(e);
          H(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (H(n !== `array`, `Array properties are not supported`),
              H(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        collection;
        locale;
        schema;
        indexes = [];
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if ($e(i)) continue;
            let a = this.schema[t];
            if (!Ze(a)) {
              if ((H(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await $f(this.collection, this.locale))[t]?.[n];
          return s_.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await $f(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = df(e);
            i && (await i);
            let a = t[r];
            H(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await $f(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = df(t);
            e && (await e);
            let a = n[Number(i)];
            (H(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (Ow = new Map()),
      (kw = new WeakMap()),
      (Aw = `$r_`),
      (jw = new Map()),
      (Mw = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = up(e, t)), (this.priority = ap(n)));
        }
        *resolveArrayValue(e) {
          return yield* hf(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* K(t);
        }
        richTextCache = new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          H(sp(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          H(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return nt(t) ? yield t : t;
        }
        vectorSetItemCache = new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          H(lp(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (H(n, `Can't find collection for vector set item pointer`),
            H(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return nt(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (Nw = `index`),
      (Pw = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), q(this.name, ...e));
        }
      }),
      (Fw = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new Lw();
        fields = new Q();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (Iw = class {
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Q();
      }),
      (Lw = class extends Pw {
        name = `Indexes`;
      }),
      (Rw = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          H(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                H(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: op(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                H(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: cp(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Q = class extends Pw {
        name = `Fields`;
      }),
      (zw = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return q(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (Bw = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return q(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== Nw) return !1;
          return !0;
        }
      }),
      (Vw = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        ordering;
        resolvedFields;
        getHash() {
          return q(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (Hw = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (H(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (H(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = new Map();
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new Bw();
        }
        getRequiredResolvedFields() {
          let e = new Q();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new Vw(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          H(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (H(e, `Field must exist`), e.field);
        }
      }),
      (Uw = 1e3),
      ($ = class e {
        constructor(e) {
          this.network = e;
        }
        network;
        static estimate(t, n) {
          let r = mp(),
            i = hp(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (Ww = class {
        pointers = new Map();
        values = new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (Gw = class e {
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        fields;
        tuples;
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (Kw = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (qw = class extends Kw {
        group;
        getGroup() {
          return (H(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (H(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return ff(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return pf(this.evaluate(void 0), void 0, e);
        }
      }),
      (Jw = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return q(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (Yw = class e extends qw {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        projections;
        passthrough;
        inputGroup;
        getHash() {
          return q(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Q();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Q();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new Vw(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new $(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = $.max(i, n);
          }
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new Jw(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* hf(
              n.tuples.map((t) =>
                hf(
                  this.projections.map((n) => K({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new Ww();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            H(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (Xw = { type: 0 }),
      (Zw = class extends Kw {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        evaluateSync() {
          return ff(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return pf(this.evaluate(void 0, void 0));
        }
      }),
      (Qw = { type: 0 }),
      ($w = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return q(`CaseCondition`, this.when, this.then);
        }
      }),
      (eT = class e extends Zw {
        constructor(e, t, n) {
          let r = new Q(),
            i = new Q(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        getHash() {
          return q(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new $(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new $w(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* K({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: hf(
              this.conditions.map((n) =>
                K({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (Tw.equal(n, e, Qw)) return t;
          } else for (let { when: e, then: t } of r) if (Df(e)) return t;
          return i;
        }
      }),
      (tT = class {
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        build() {
          let e = new Hw();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Q(),
            o;
          if (t.orderBy) {
            o = new Bw();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (Ze(t)) continue;
                a.add(t.field);
                let r = new zw(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new Rw(pp(this.fieldId++), void 0, t.definition, void 0),
                  a = new Jw(t, r);
                i.push(a);
                let s = new zw(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Q(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (Ze(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              H(n.alias, `Subqueries should have an alias`);
              let r = pp(this.fieldId++),
                a = n.alias,
                s = new Rw(r, a, t.definition, void 0),
                c = new Jw(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              U(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = np(t.data, this.locale),
            i = t.alias,
            a = new Fw(dp(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new Rw(pp(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new Rw(pp(this.fieldId++), Nw, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: Nw, collectionName: i });
            let t = new Bw(),
              r = new zw(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new Bw(),
              o = new Iw(fp(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new Bw(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              U(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              U(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(Ew, null);
        }
        buildLiteralValue(e) {
          let t = Tw.parse(e.value);
          return this.normalizer.newScalarConstant(Ew, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (H(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                H(n, `Missing argument`),
                H(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                H(n, `Missing argument`),
                H(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              U(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new nT(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new nT(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new $w(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              U(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              U(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (nT = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new Q();
        referencedOuterFields = new Q();
      }),
      (rT = class e extends qw {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        predicate;
        inputGroup;
        getHash() {
          return q(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new Vw(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* hf(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => Df(n[t] ?? null));
        }
      }),
      (iT = class e extends qw {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        index;
        query;
        getHash() {
          return q(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return $.estimate(1, e ? 100 * Uw : 50 * Uw);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, lf()),
            i = lf(),
            a = [];
          for (let n of r) {
            let r = df(i);
            r && (yield r);
            let o = new Ww();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new Gw(n, a);
        }
      }),
      (aT = class e extends qw {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return q(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new Vw(new Bw(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* K({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (oT = class e extends qw {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        collection;
        getHash() {
          return q(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return $.estimate(1, 200 * Uw);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(lf()),
            r = lf(),
            i = [];
          for (let a of n) {
            let n = df(r);
            n && (yield n);
            let o = new Ww();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new Gw(t, i);
        }
      }),
      (sT = class e extends qw {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return q(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new Vw(new Bw(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* K({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (cT = class e extends Zw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Df(n) && Df(r) };
        }
      }),
      (lT = class extends Zw {
        constructor(e, t) {
          let n = new Q(),
            r = new Q();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        definition;
        value;
        getHash() {
          return q(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (uT = { type: 0 }),
      (dT = class e extends Zw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* K({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Tw.contains(n, r, uT) };
        }
      }),
      (fT = { type: 0 }),
      (pT = class e extends Zw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* K({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Tw.endsWith(n, r, fT) };
        }
      }),
      (mT = class e extends Zw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Tw.equal(n, r, Xw) };
        }
      }),
      (hT = class e extends Zw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Tw.greaterThan(n, r, Xw) };
        }
      }),
      (gT = class e extends Zw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Tw.greaterThanOrEqual(n, r, Xw) };
        }
      }),
      (_T = class e extends Zw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Tw.lessThan(n, r, Xw) };
        }
      }),
      (vT = class e extends Zw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Tw.lessThanOrEqual(n, r, Xw) };
        }
      }),
      (yT = class e extends Zw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Tw.equal(n, r, Xw) };
        }
      }),
      (bT = class e extends Zw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Df(n) || Df(r) };
        }
      }),
      (xT = { type: 0 }),
      (ST = class e extends Zw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* K({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Tw.startsWith(n, r, xT) };
        }
      }),
      (CT = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof rT) {
            if (e.predicate instanceof cT) {
              let n = new aT(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof bT) {
              let n = new sT(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof oT)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new iT(n, gp(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof rT) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof oT)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof mT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof lT &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = gp(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new iT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof yT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof lT &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = gp(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new iT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof _T &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof lT &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = gp(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new iT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof vT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof lT &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = gp(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new iT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof hT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof lT &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = gp(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new iT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof gT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof lT &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = gp(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new iT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof dT &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof lT &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = gp(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new iT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ST &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof lT &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = gp(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new iT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof pT &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof lT &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = gp(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new iT(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (wT = class {
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        id;
        relational;
        nodes = [];
        winners = new Map();
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new TT();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          H(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (TT = class {
        node;
        cost = new $(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), $.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (ET = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (DT = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new wT(_p(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new ET(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            H(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (OT = class e extends qw {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        getHash() {
          return q(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Q();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Q(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new Vw(new Bw(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return $.max($.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new Gw(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new Ww();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* K({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof mT) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new Gw(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new Ww();
              (n.merge(i),
                n.merge(a),
                Df(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (kT = class e extends qw {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        limit;
        ordering;
        inputGroup;
        getHash() {
          return q(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new Vw(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* K({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = Bf(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (AT = class e extends qw {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        offset;
        ordering;
        inputGroup;
        getHash() {
          return q(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new Vw(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* K({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = Bf(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (jT = class e extends Zw {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return q(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q(),
            t = Object.values(this.namedFields);
          for (let n of t) Ze(n.collection) || e.add(n);
          return new Vw(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new Ww();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (MT = class e extends Zw {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            H(t.isNullable, `Unsupported non-nullable cast`));
        }
        input;
        definition;
        getHash() {
          return q(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return Tw.cast(n, this.definition);
        }
      }),
      (NT = class e extends Zw {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          return q(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q();
          return (Ze(this.field.collection) || e.add(this.field), new Vw(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new Ww();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (PT = { type: 0 }),
      (FT = class e extends Zw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Tw.in(n, r, PT) };
        }
      }),
      (IT = { type: 1 }),
      (LT = class e extends Zw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return q(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* K({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: Tw.indexOf(n, r, IT) };
        }
      }),
      (RT = class extends Error {}),
      (zT = class e extends Zw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        getHash() {
          return q(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = yp(n),
            a = yp(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (BT = class e extends Zw {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return q(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: Tw.length(n) };
        }
      }),
      (VT = class e extends Zw {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !Df(yield* this.input.evaluate(e, t)) };
        }
      }),
      (HT = { type: 0 }),
      (UT = class e extends Zw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Tw.in(n, r, HT) };
        }
      }),
      (WT = class extends Zw {
        constructor(e, t) {
          H(e.name !== Nw, `Invalid field name`);
          let n = new Q(),
            r = new Q();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        field;
        isOuterField;
        definition;
        getHash() {
          return q(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (H(e, `Context must exist`), e.getValue(this.field))
            : (H(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (GT = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new oT(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new iT(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new OT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof lT && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof OT && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new rT(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new Yw(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof Yw &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new kT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new AT(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof lT) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new WT(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new lT(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof VT)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof mT) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof yT) return this.newScalarEquals(e.left, e.right);
          if (e instanceof _T) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof vT) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof hT) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof gT) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof cT) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof bT) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new VT(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof lT && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof lT && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof lT && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof lT && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new cT(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof lT && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof lT && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof lT && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof lT && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new bT(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof WT;
          if (t instanceof WT && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new mT(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof WT;
          if (t instanceof WT && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new yT(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof WT;
          if (t instanceof WT && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new _T(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof WT;
          if (t instanceof WT && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new vT(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof WT;
          if (t instanceof WT && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new hT(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof WT;
          if (t instanceof WT && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new gT(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new FT(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new UT(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new $w(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new eT(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new dT(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new ST(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new pT(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new BT(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new LT(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new jT(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new NT(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new zT(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new MT(e, t);
          return this.finishScalar(n);
        }
      }),
      (KT = class extends qw {}),
      (qT = class e extends KT {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        fields;
        resolver;
        inputGroup;
        getHash() {
          return q(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Q();
          return new Vw(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return $.estimate(0, 100 * Uw).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          H(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            H(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Q()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) bp(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                H(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new Ww();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (H(s, `Item not found`), H(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (JT = { type: 0 }),
      (YT = class e extends KT {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        ordering;
        inputGroup;
        getHash() {
          return q(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== Nw && (Ze(e.collection) || t.add(e));
          return new Vw(new Bw(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new $(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === Nw) {
                let r = n.collection;
                H(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                H(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                H(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!Tw.equal(a, o, JT)) {
                if (Qe(a) || Tw.lessThan(a, o, JT)) return i ? -1 : 1;
                if (Qe(o) || Tw.greaterThan(a, o, JT)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (XT = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new DT();
        normalizer = new GT(this.memo);
        explorer = new CT(this.normalizer);
        optimize(e) {
          let t = new tT(this.normalizer, this.query, this.locale).build(),
            n = df(e);
          return n ? n.then(() => this.optimizeBuiltQuery(t)) : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (H(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new qT(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new YT(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (ZT = sf(`query-engine`)),
      (QT = class {
        async evalQuery(e, t, n, r) {
          ZT.enabled &&
            ZT.debug(`Query:
${Np(e)}`);
          let i = new Mw(e, t, r),
            a = new XT(e, t, i),
            o = df(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = rt(s) ? await s : s,
            u = df(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = df(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(K(a, r)));
          }
          let h = mf(hf(m, r), r);
          return n ? [rt(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new Mw(t, n, r);
          return mf(
            hf(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return K(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      ($T = `style[data-framer-breakpoint-css]`),
      (eE = `page`),
      (tE = Symbol(`cycle`)),
      (iE = (() => {
        let e = a(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (aE = (e) =>
        A.forwardRef((t, n) => {
          let {
              flowEffectEnabled: r,
              flowEffectTransition: i,
              isNestedFlowEffect: a,
              transition: o,
              ...s
            } = t,
            c = C(() => (i ? { default: o, layout: i } : o), [o, i]);
          if (!r) return T(e, { ...s, ref: n, transition: o });
          let l = T(e, { ...s, ref: n });
          return (
            i && (l = T(Ae, { transition: c, children: l })),
            a || (l = T(ze, { children: l })),
            l
          );
        })),
      (oE = A.createContext(void 0)),
      (sE = () => A.useContext(oE)),
      (cE = {
        Arial: {
          Regular: { selector: `Arial`, weight: void 0 },
          Black: { selector: `Arial-Black`, weight: void 0 },
          Narrow: { selector: `Arial Narrow`, weight: void 0 },
          "Rounded Bold": { selector: `Arial Rounded MT Bold`, weight: void 0 },
        },
        Avenir: {
          Book: { selector: `Avenir`, weight: void 0 },
          Light: { selector: `Avenir-Light`, weight: void 0 },
          Medium: { selector: `Avenir-Medium`, weight: void 0 },
          Heavy: { selector: `Avenir-Heavy`, weight: void 0 },
          Black: { selector: `Avenir-Black`, weight: void 0 },
        },
        "Avenir Next": {
          Regular: { selector: `Avenir Next`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNext-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNext-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNext-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNext-Heavy`, weight: void 0 },
        },
        "Avenir Next Condensed": {
          Regular: { selector: `Avenir Next Condensed`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNextCondensed-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNextCondensed-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNextCondensed-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNextCondensed-Heavy`, weight: void 0 },
        },
        Baskerville: {
          Regular: { selector: `Baskerville`, weight: void 0 },
          "Semi Bold": { selector: `Baskerville-SemiBold`, weight: void 0 },
        },
        "Bodoni 72": {
          Book: { selector: `Bodoni 72`, weight: void 0 },
          Oldstyle: { selector: `Bodoni 72 Oldstyle`, weight: void 0 },
          Smallcaps: { selector: `Bodoni 72 Smallcaps`, weight: void 0 },
        },
        Courier: { Regular: { selector: `Courier`, weight: void 0 } },
        "Courier New": { Regular: { selector: `Courier New`, weight: void 0 } },
        Futura: {
          Medium: { selector: `Futura`, weight: void 0 },
          Condensed: { selector: `Futura-CondensedMedium`, weight: void 0 },
          "Condensed ExtraBold": { selector: `Futura-CondensedExtraBold`, weight: void 0 },
        },
        Georgia: { Regular: { selector: `Georgia`, weight: void 0 } },
        "Gill Sans": {
          Regular: { selector: `Gill Sans`, weight: void 0 },
          Light: { selector: `GillSans-Light`, weight: void 0 },
          SemiBold: { selector: `GillSans-SemiBold`, weight: void 0 },
          UltraBold: { selector: `GillSans-UltraBold`, weight: void 0 },
        },
        Helvetica: {
          Regular: { selector: `Helvetica`, weight: void 0 },
          Light: { selector: `Helvetica-Light`, weight: void 0 },
          Bold: { selector: `Helvetica-Bold`, weight: void 0 },
          Oblique: { selector: `Helvetica-Oblique`, weight: void 0 },
          "Light Oblique": { selector: `Helvetica-LightOblique`, weight: void 0 },
          "Bold Oblique": { selector: `Helvetica-BoldOblique`, weight: void 0 },
        },
        "Helvetica Neue": {
          Regular: { selector: `Helvetica Neue`, weight: void 0 },
          UltraLight: { selector: `HelveticaNeue-UltraLight`, weight: void 0 },
          Thin: { selector: `HelveticaNeue-Thin`, weight: void 0 },
          Light: { selector: `HelveticaNeue-Light`, weight: void 0 },
          Medium: { selector: `HelveticaNeue-Medium`, weight: void 0 },
          Bold: { selector: `HelveticaNeue-Bold`, weight: void 0 },
          Italic: { selector: `HelveticaNeue-Italic`, weight: void 0 },
          "UltraLight Italic": { selector: `HelveticaNeue-UltraLightItalic`, weight: void 0 },
          "Thin Italic": { selector: `HelveticaNeue-ThinItalic`, weight: void 0 },
          "Light Italic": { selector: `HelveticaNeue-LightItalic`, weight: void 0 },
          "Medium Italic": { selector: `HelveticaNeue-MediumItalic`, weight: void 0 },
          "Bold Italic": { selector: `HelveticaNeue-BoldItalic`, weight: void 0 },
          "Condensed Bold": { selector: `HelveticaNeue-CondensedBold`, weight: void 0 },
          "Condensed Black": { selector: `HelveticaNeue-CondensedBlack`, weight: void 0 },
        },
        "Hoefler Text": { Regular: { selector: `Hoefler Text`, weight: void 0 } },
        Impact: { Regular: { selector: `Impact`, weight: void 0 } },
        "Lucida Grande": { Regular: { selector: `Lucida Grande`, weight: void 0 } },
        Menlo: { Regular: { selector: `Menlo`, weight: void 0 } },
        Monaco: { Regular: { selector: `Monaco`, weight: void 0 } },
        Optima: {
          Regular: { selector: `Optima`, weight: void 0 },
          ExtraBlack: { selector: `Optima-ExtraBlack`, weight: void 0 },
        },
        Palatino: { Regular: { selector: `Palatino`, weight: void 0 } },
        "SF Pro Display": {
          Regular: { selector: `__SF-UI-Display-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Black__`, weight: 900 },
          Italic: { selector: `__SF-UI-Display-Italic__`, weight: 400 },
          "Ultralight Italic": { selector: `__SF-UI-Display-Ultralight-Italic__`, weight: 100 },
          "Thin Italic": { selector: `__SF-UI-Display-Thin-Italic__`, weight: 200 },
          "Light Italic": { selector: `__SF-UI-Display-Light-Italic__`, weight: 300 },
          "Medium Italic": { selector: `__SF-UI-Display-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Display-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Display-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Display-Heavy-Italic__`, weight: 800 },
          "Black Italic": { selector: `__SF-UI-Display-Black-Italic__`, weight: 900 },
        },
        "SF Pro Display Condensed": {
          Regular: { selector: `__SF-UI-Display-Condensed-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Condensed-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Condensed-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Condensed-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Condensed-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Condensed-Black__`, weight: 900 },
        },
        "SF Pro Text": {
          Regular: { selector: `__SF-UI-Text-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Heavy__`, weight: 800 },
          Italic: { selector: `__SF-UI-Text-Italic__`, weight: 400 },
          "Light Italic": { selector: `__SF-UI-Text-Light-Italic__`, weight: 200 },
          "Medium Italic": { selector: `__SF-UI-Text-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Text-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Text-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Text-Heavy-Italic__`, weight: 800 },
        },
        "SF Pro Text Condensed": {
          Regular: { selector: `__SF-UI-Text-Condensed-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Condensed-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Condensed-Heavy__`, weight: 800 },
        },
        Tahoma: { Regular: { selector: `Tahoma`, weight: void 0 } },
        Times: { Regular: { selector: `Times`, weight: void 0 } },
        "Times New Roman": { Regular: { selector: `Times New Roman`, weight: void 0 } },
        Trebuchet: { Regular: { selector: `Trebuchet MS`, weight: void 0 } },
        Verdana: { Regular: { selector: `Verdana`, weight: void 0 } },
      }),
      (lE = {
        "__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
        "__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
        "__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
        "__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
        "__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
        "__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
        "__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
        "__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
        "__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
        "__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
        "__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
        "__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
        "__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
        "__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
        "__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
        "__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
        "__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
        "__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
        "__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
        "__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
        "__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
        "__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`,
        "__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`,
        "__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`,
        "__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`,
        "__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`,
        "__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`,
        "__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`,
        "__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
        "__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
        "__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
        "__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
        "__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
        "__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
        "__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
        "__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
        "__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
        "__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
        "__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
        "__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
        "__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
        "__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
        "__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
        "__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
        "__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
        "__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
        "__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
        "__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
        "__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
        "__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
        "__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
        "__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
        "__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
        "__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
        "__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
        "__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
        "__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
        "__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
        "__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
        "__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
        "__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
        "__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
        "__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
        "__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
        "__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
        "__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
        "__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
        "__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
        "__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
        "__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`,
        "__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
        "__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
        "__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
        "__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
        "__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black`,
      }),
      (uE = cE),
      (dE = `System Default`),
      (fE = class {
        name = `local`;
        fontFamilies = [];
        byFamilyName = new Map();
        fontAliasBySelector = new Map();
        fontAliases = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.addFontFamily(t), t);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        importFonts() {
          let e = [];
          for (let t of Object.keys(uE)) {
            let n = uE[t];
            if (!n) continue;
            let r = this.createFontFamily(t);
            for (let e of Object.keys(n)) {
              let t = n[e];
              if (!t) continue;
              let { selector: i, weight: a } = t,
                o = { variant: e, selector: i, weight: a, family: r, cssFamilyName: r.name };
              r.fonts.push(o);
            }
            e.push(...r.fonts);
          }
          for (let [e, t] of Object.entries(lE)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: dE, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = hm(i, r),
                a = `__SystemDefault-${i}-${r}__`,
                o = {
                  variant: n,
                  selector: a,
                  style: r,
                  weight: i,
                  family: e,
                  cssFamilyName: e.name,
                };
              (e.fonts.push(o),
                t.set(
                  a,
                  `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`
                ));
            }
          return { fontFamily: e, aliases: t };
        }
        getFontAliasBySelector(e) {
          return this.fontAliasBySelector.get(e) || null;
        }
        getFontSelectorByAlias(e) {
          return this.fontAliases.get(e) || null;
        }
        isFontFamilyAlias(e) {
          return !!(e && /^__.*__$/u.exec(e));
        }
      }),
      (pE = {
        100: `Thin`,
        200: `Extra Light`,
        300: `Light`,
        400: `Normal`,
        500: `Medium`,
        600: `Semi Bold`,
        700: `Bold`,
        800: `Extra Bold`,
        900: `Black`,
      }),
      (mE = class extends Map {
        _hash = 0;
        get hash() {
          return this._hash;
        }
        set(e, t) {
          return (this._hash++, super.set(e, t));
        }
        delete(e) {
          return (this._hash++, super.delete(e));
        }
        clear() {
          return (this._hash++, super.clear());
        }
      }),
      (gE = `Variable`),
      (_E = `BI;`),
      (vE = class {
        name = `builtIn`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetByKey = new Map();
        importFonts(e) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetByKey.clear());
          let t = [];
          for (let n of e) {
            if (!this.isValidBuiltInFont(n)) continue;
            let { properties: e } = n,
              r = e.font.fontFamily,
              i = this.createFontFamily(r, e.font.foundryName, e.font.fontVersion),
              a = e.font.openTypeData,
              o = e.font.variationAxes,
              s = Array.isArray(o),
              c = s ? `variable` : e.font.fontSubFamily || `regular`,
              l = bm(n),
              u = wm(o),
              d = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: Cm(a),
                variationAxes: u,
                category: e.font.fontCategory,
                weight: s ? Om(u, e.font.faceDescriptors?.weight) : Dm(c),
                style: Am(c),
                cssFamilyName: xm(r, s),
              };
            (i.fonts.push(d), this.assetByKey.set(n.key, n), t.push(d));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = Dm(e.variant),
                r = Dm(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          let t = km(e);
          return {
            weight: t === `variable` || t === `variable-italic` ? 400 : yE[t],
            style: Am(e),
          };
        }
        getFontBySelector(e) {
          let t = this.parseSelector(e);
          if (!t) return;
          let n = this.getFontFamilyByName(t.name);
          if (n) return n.fonts.find((t) => t.selector === e);
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e, t, n) {
          let r = this.byFamilyName.get(e);
          if (r && r.version === n) return r;
          let i = { source: this.name, name: e, fonts: [], foundryName: t, version: n };
          return (this.addFontFamily(i), i);
        }
        getOpenTypeFeatures(e) {
          H(e.assetKey, `Font must have an asset key`);
          let t = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return Cm(t)
            ? t?.map((e) => {
                if (Tm(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        isValidBuiltInFont(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font ||
            !e.properties.font.fontVersion ||
            !e.properties.font.fontFamily
            ? !1
            : `fontFamily` in e.properties.font;
        }
        createSelector(e, t, n) {
          return `${_E}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(_E)) return null;
          let [t, n] = e.split(_E);
          if (n === void 0) return null;
          let [r, i, a] = n.split(`/`);
          return !r || !i || !a
            ? null
            : {
                name: r,
                variant: i,
                source: this.name,
                isVariable: i.toLowerCase().includes(`variable`),
              };
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
      }),
      (yE = {
        ultralight: 100,
        "ultralight-italic": 100,
        thin: 200,
        "thin-italic": 200,
        demi: 200,
        light: 300,
        "light-italic": 300,
        normal: 350,
        base: 400,
        regular: 400,
        classic: 400,
        "regular-slanted": 400,
        italic: 400,
        oblique: 400,
        dense: 400,
        brukt: 300,
        book: 400,
        "book-italic": 400,
        text: 400,
        "text-italic": 400,
        medium: 500,
        solid: 500,
        "medium-oblique": 500,
        "medium-italic": 500,
        mittel: 500,
        semibold: 600,
        "semibold-italic": 600,
        bold: 700,
        "bold-italic": 700,
        "bold-oblique": 700,
        fett: 700,
        ultrabold: 800,
        "ultrabold-italic": 800,
        extrabold: 800,
        "extrabold-italic": 800,
        black: 900,
        extralight: 100,
        "extralight-italic": 100,
        "black-italic": 900,
        "extra-italic": 900,
        "extra-italic-bold": 900,
        satt: 900,
        heavy: 900,
        "heavy-italic": 900,
        serif: 100,
        school: 200,
        expanded: 300,
        gothique: 500,
        "dense-light": 200,
        "dense-regular": 300,
        "dense-medium": 400,
        "dense-bold": 500,
        "solid-light": 600,
        "solid-regular": 700,
        "solid-medium": 800,
        "solid-bold": 900,
        53: 400,
        55: 600,
        "narrow-regular": 350,
        "narrow-black": 850,
        variable: 1e3,
        "variable-italic": 1e3,
      }),
      (bE = sf(`custom-font-source`)),
      (xE = `CUSTOM;`),
      (SE = `CUSTOMV2;`),
      (CE = class e {
        name = `custom`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetsByKey = new Map();
        debugByFamily = new Map();
        debugFamilies;
        importFonts(t) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let n = {},
            r = new Map();
          for (let i of t) {
            if (!this.isValidCustomFontAsset(i)) continue;
            let { family: t, variant: a, weight: o, style: s } = Bm(i.properties.font),
              c = i.properties.font.variationAxes,
              l = Array.isArray(c),
              u = i.properties.font.openTypeData,
              d = bm(i),
              f = Um(i),
              p = zm(i.properties),
              m = e.createLegacySelector(p),
              h = this.createFontFamily(t),
              g = e.createSelector(h.name, a),
              _ = {
                assetKey: i.key,
                family: h,
                selector: g,
                variant: a,
                weight: o,
                style: s,
                file: d,
                hasOpenTypeFeatures: Cm(u),
                variationAxes: wm(c),
                owner: f,
                alternativeSelectors: {
                  [m]: {
                    variant: l ? `variable` : this.inferVariantName(p),
                    cssFamilyName: e.cssFontFamilyFromSelector(m),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(g),
              },
              v = Rm(h.fonts, _);
            if (v?.projectDuplicate) _.owner === `team` && ((h.fonts[v.index] = _), (n[g] = _));
            else if (v) {
              bE.debug(`Duplicate font found for:`, _, `with existing font:`, v.existingFont);
              let e = v.existingFont,
                t = _.file?.endsWith(`.woff2`) ?? !1,
                r = e.file?.endsWith(`.woff2`) ?? !1,
                i = t && !r,
                a = t === r,
                o = _.owner === `team` || e.owner !== `team`;
              (i || (a && o)) && ((h.fonts[v.index] = _), (n[g] = _));
            } else (h.fonts.push(_), (n[g] = _));
            (this.assetsByKey.set(i.key, i),
              Wm(r, t, a).fonts.push({ font: _, asset: i, selected: !1 }));
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && Hm(e);
          return ((this.debugByFamily = r), (this.debugFamilies = void 0), Object.values(n));
        }
        getDebugFamilies() {
          if (this.debugFamilies) return this.debugFamilies;
          let e = new Set();
          for (let t of this.fontFamilies)
            for (let n of t.fonts) n.assetKey && n.owner && e.add(`${n.assetKey}:${n.owner}`);
          return ((this.debugFamilies = Gm(this.debugByFamily, e)), this.debugFamilies);
        }
        static createSelector(e, t) {
          return `${SE}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${xE}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            H(Fm(e), `Selector must be a custom font selector`),
            Lm(e) ? e.slice(xE.length) : e.slice(SE.length)
          );
        }
        isValidCustomFontAsset(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font
            ? !1
            : `fontFamily` in e.properties.font;
        }
        getOpenTypeFeatures(e) {
          H(e.assetKey, `Font must have an asset key`);
          let t = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return Cm(t)
            ? t?.map((e) => {
                if (Tm(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        inferVariantName(e) {
          let t = [
              `thin`,
              `ultra light`,
              `extra light`,
              `light`,
              `normal`,
              `medium`,
              `semi bold`,
              `bold`,
              `extra bold`,
              `black`,
            ],
            n = [...t.map((e) => `${e} italic`), ...t],
            r = e.toLowerCase(),
            i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)],
            a = n.find((e) => i.includes(e) || i.includes(e.replace(/\s+/gu, ``)));
          return a ? a.replace(/^\w|\s\w/gu, (e) => e.toUpperCase()) : `Regular`;
        }
        createFontFamily(e) {
          let t = this.byFamilyName.get(e);
          if (t) return t;
          let n = { source: this.name, name: e, fonts: [] };
          return (this.addFontFamily(n), n);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) || null;
        }
      }),
      (wE = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (TE = `FS;`),
      (EE = {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        ultra: 800,
        black: 900,
        heavy: 900,
      }),
      (DE = Object.keys(EE)),
      (OE = RegExp(`^(?:${[...DE, `italic`, `variable`].join(`|`)})`, `u`)),
      (kE = class e {
        name = `fontshare`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = DE.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return { weight: (n && EE[n]) || 400, style: r === `italic` ? r : `normal` };
        }
        parseSelector(e) {
          if (!e.startsWith(TE)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(TE, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${TE}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${TE}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await Km(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!OE.exec(t) || t.split(` `).includes(`wide`));
                })
                .map((t) => ({
                  ...e.parseVariant(t.name),
                  selector: e.createSelector(a.name, t.name),
                  isVariable: t.is_variable,
                  fontshareVariantName: t.name,
                  file: t.file,
                })),
              o = e.createMetadataSelector(a.name),
              s = n?.[o],
              c = a.name,
              l = this.getFontFamilyByName(c);
            l || ((l = { name: c, fonts: [], source: this.name }), this.addFontFamily(l));
            let u = r[e.createMetadataSelector(a.name)];
            for (let e of t) {
              let {
                  variantBold: n,
                  variantBoldItalic: r,
                  variantItalic: o,
                  variantVariable: c,
                  variantVariableItalic: d,
                } = jm(e, t),
                f = {
                  family: l,
                  variant: e.fontshareVariantName.toLowerCase(),
                  selector: e.selector,
                  selectorBold: n?.selector,
                  selectorBoldItalic: r?.selector,
                  selectorItalic: o?.selector,
                  selectorVariable: c?.selector,
                  selectorVariableItalic: d?.selector,
                  weight: e.weight,
                  style: e.style,
                  file: e.file,
                  category: Xm(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: xm(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await qm(`fontshare`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (AE = `Inter`),
      (jE = `FR;`),
      (ME = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        "": 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
      }),
      (NE = class e {
        name = `framer`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(jE) && !e.startsWith(AE)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && ME[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${jE}${e}`;
        }
        importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = [];
          return (
            t.forEach((t) => {
              let { uiFamilyName: i, ...a } = t,
                o = e.createMetadataSelector(t.uiFamilyName),
                s = n?.[o],
                c = this.getFontFamilyByName(i);
              c ||= this.addFontFamily(i);
              let l = t.selector === t.selectorVariable || t.selector === t.selectorVariableItalic,
                u = { ...a, family: c, variationAxes: l ? s : void 0 };
              (c.fonts.push(u), r.push(u));
            }),
            r
          );
        }
        async getOpenTypeFeatures(t) {
          return (await qm(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (PE = `GF;`),
      (FE = class e {
        name = `google`;
        fontFamilies = [];
        byFamilyName = new Map();
        supportedSubsetsByFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        getSupportedSubsetsByFamilyName(e) {
          return this.supportedSubsetsByFamilyName.get(e) ?? [];
        }
        static parseVariant(e) {
          if (e === `regular`) return { style: `normal`, weight: 400 };
          let t = /(\d*)(normal|italic)?/u.exec(e);
          return t
            ? { weight: parseInt(t[1] || `400`), style: t[2] === `italic` ? `italic` : `normal` }
            : {};
        }
        parseSelector(e) {
          if (!e.startsWith(PE)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : { name: r.replace(PE, ``), variant: i, source: this.name, isVariable: t };
        }
        static createSelector(e, t, n) {
          return `${PE}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${PE}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0),
            this.byFamilyName.clear(),
            this.supportedSubsetsByFamilyName.clear());
          let i = await Km(`google`),
            a = [],
            o = Qm(t, (e) => e.family),
            s = Qm(n, (e) => e.family);
          for (let t in o) {
            let n = o[t];
            if (!n) continue;
            this.supportedSubsetsByFamilyName.set(n.family, n.subsets ?? []);
            let c = this.getFontFamilyByName(n.family);
            c ||= this.addFontFamily(n.family);
            let l = n.variants.map((r) => ({
                ...e.parseVariant(r),
                googleFontsVariantName: r,
                selector: e.createSelector(t, r, !1),
                isVariable: !1,
                file: n.files[r],
              })),
              u = s[t],
              d = u?.axes
                ? u.variants.map((n) => ({
                    ...e.parseVariant(n),
                    googleFontsVariantName: n,
                    selector: e.createSelector(t, n, !0),
                    isVariable: !0,
                    file: u.files[n],
                  }))
                : [],
              f = e.createMetadataSelector(n.family),
              p = r?.[f],
              m = [...l, ...d],
              h = m.filter(mm),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let { weight: t, style: r, selector: i, googleFontsVariantName: o } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (mm(e) ? jm(e, h) : void 0) ?? {},
                m = {
                  family: c,
                  variant: o,
                  selector: i,
                  selectorBold: s?.selector,
                  selectorBoldItalic: u?.selector,
                  selectorItalic: l?.selector,
                  selectorVariable: d?.selector,
                  selectorVariableItalic: f?.selector,
                  weight: t,
                  style: r,
                  category: Zm(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: xm(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await qm(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (IE = L(zg(), 1)),
      (LE = 5e3),
      (RE = 3),
      (zE = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (BE = new Map()),
      (VE = new Map()),
      (HE = new Map()),
      (UE = (e, t) => th(e, t)),
      (WE = {
        "FR;Inter": [
          { tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` },
          { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` },
        ],
      }),
      (GE = class {
        enabled = !1;
        bySelector = new mE();
        loadedSelectors = new Set();
        getGoogleFontsListPromise;
        getFontshareFontsListPromise;
        getBuiltInFontsListPromise;
        customFontsImportPromise = new Promise((e) => {
          this.resolveCustomFontsImportPromise = e;
        });
        constructor() {
          ((this.local = new fE()),
            (this.google = new FE()),
            (this.fontshare = new kE()),
            (this.framer = new NE()),
            (this.custom = new CE()),
            (this.builtIn = new vE()),
            this.importLocalFonts());
        }
        local;
        google;
        fontshare;
        builtIn;
        framer;
        custom;
        get hash() {
          return this.bySelector.hash;
        }
        addFont(e) {
          if ((this.bySelector.set(e.selector, e), e.alternativeSelectors))
            for (let t of Object.keys(e.alternativeSelectors)) this.bySelector.set(t, e);
        }
        bySelectorValuesCache;
        getAvailableFonts() {
          if (
            !this.bySelectorValuesCache ||
            this.bySelectorValuesCache.hash !== this.bySelector.hash
          ) {
            let e = new Map();
            for (let t of this.bySelector.values()) e.set(t, !0);
            this.bySelectorValuesCache = {
              result: Array.from(e.keys()),
              hash: this.bySelector.hash,
            };
          }
          return this.bySelectorValuesCache.result;
        }
        importLocalFonts() {
          for (let e of this.local.importFonts()) (this.addFont(e), this.loadFont(e.selector));
        }
        async importGoogleFonts() {
          return (
            (this.getGoogleFontsListPromise ||= Promise.resolve().then(async () => {
              let { staticFonts: e, variableFonts: t } = await $y.fetchGoogleFontsList(),
                n = await ih(`google`);
              for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
              return { staticFonts: e, variableFonts: t };
            })),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = $y.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await ih(`fontshare`);
            for (let n of await this.fontshare.importFonts(e, t)) this.addFont(n);
          }
          return this.getFontshareFontsListPromise;
        }
        async importAllWebFonts() {
          await Promise.all([
            this.importGoogleFonts(),
            this.importFontshareFonts(),
            this.importBuiltInFonts(),
          ]);
        }
        async importBuiltInFonts() {
          if (!this.getBuiltInFontsListPromise) {
            this.getBuiltInFontsListPromise = $y.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = ih(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e) {
          let t = new Map();
          for (let e of this.loadedSelectors) {
            if (!Fm(e)) continue;
            let n = this.getFontBySelector(e);
            n && t.set(e, n);
          }
          this.bySelector.forEach((e, t) => {
            Fm(t) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e);
          for (let e of n) this.addFont(e);
          for (let [e, n] of t) {
            let t = this.getFontBySelector(e);
            (t && t.file === n.file) ||
              (this.loadedSelectors.delete(e),
              n.file &&
                rh({ family: n.cssFamilyName, url: n.file, weight: n.weight, style: n.style }));
          }
          this.resolveCustomFontsImportPromise();
        }
        getCustomFontsImportPromise() {
          return this.customFontsImportPromise;
        }
        getCustomFontDebugFamilies() {
          return this.custom.getDebugFamilies();
        }
        getFontFamily(e) {
          return this[e.source].getFontFamilyByName(e.name);
        }
        getFontBySelector(e) {
          if (!e) return;
          let t;
          if (((t = this.bySelector.get(e)), t))
            return t.alternativeSelectors && e in t.alternativeSelectors
              ? { ...t, ...t.alternativeSelectors[e] }
              : t;
        }
        getDraftPropertiesBySelector(e) {
          let t = this.getFontBySelector(e);
          if (t)
            return {
              style: t.style,
              weight: t.weight,
              variant: t.variant,
              cssFamilyName: t.cssFamilyName,
              source: t.family.source,
              category: t.category,
            };
          let n = this.google.parseSelector(e);
          if (n) {
            let e = FE.parseVariant(n.variant);
            if (mm(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: Sm(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = kE.parseVariant(r.variant);
            if (mm(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: Sm(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = vE.parseVariant(i.variant);
            if (mm(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: Sm(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return NE.getDraftFontPropertiesBySelector(e) || null;
        }
        isSelectorLoaded(e) {
          return this.loadedSelectors.has(e);
        }
        async loadFont(e) {
          let t = this.getFontBySelector(e);
          if (!t) return 2;
          if (this.loadedSelectors.has(e)) return 0;
          let n = t.cssFamilyName,
            r = t.family.source,
            i = Pm(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((On() || (await nh(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await UE({ family: n, url: t.file, weight: t.weight, style: t.style }, document);
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`: {
              if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
              let r = t.file;
              await UE({ family: n, url: r, weight: t.weight, style: t.style }, document);
              let i = this.getFontBySelector(e);
              return !i || i.file !== r
                ? (rh({ family: n, url: r, weight: t.weight, style: t.style }), 2)
                : (this.loadedSelectors.add(e), 1);
            }
            default:
              U(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(TE)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                Di(`Failed to load Fontshare fonts:`, e);
              })
            ),
            e.some((e) => e.startsWith(PE)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  Di(`Failed to load Google fonts:`, e);
                })
              ),
            e.some((e) => e.startsWith(_E)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  Di(`Failed to load built-in fonts:`, e);
                })
              ),
            e.some(Fm) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  Di(`Failed to load custom fonts:`, e);
                })
              ),
            t.length > 0 && (await Promise.all(t)));
          let n = [];
          for (let t of e) n.push(this.loadFont(t));
          return Promise.allSettled(n);
        }
        async loadFonts(e) {
          return {
            newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
              (e) => e.status === `fulfilled` && e.value === 1
            ).length,
          };
        }
        async loadMissingFonts(e, t) {
          let n = e.filter((e) => !KE.loadedSelectors.has(e));
          n.length !== 0 &&
            (await KE.loadWebFontsFromSelectors(n),
            n.every((e) => KE.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (H(e, `Can’t find Inter font`), e);
        }
        testing = { addFont: this.addFont.bind(this) };
      }),
      (KE = new GE()),
      (qE = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (JE = { opacity: 0 }),
      (YE = { opacity: 1 }),
      (XE = vh(
        A.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: a,
              draggable: o,
              fitImageDimension: s,
              style: c,
              ...l
            } = e,
            u = { ...c },
            d = C(() => yo(n), [n]),
            [f, p] = i();
          A.useEffect(() => {
            if (!n?.src || !s || d) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                k(() => p({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, s, d]);
          let m = d ?? f;
          return (
            s && m && ((u[s] = `auto`), (u.aspectRatio = m.width / m.height)),
            n && delete u.background,
            O(bo(e.as), {
              ...l,
              style: u,
              ref: t,
              draggable: o,
              children: [n && T(Va, { image: n, alt: a, draggable: o }), r],
            })
          );
        })
      )),
      (ZE = A.memo(function ({
        trackCount: e,
        rowGap: t,
        parentIsDataRepeater: n = !1,
        itemsOrder: r,
        children: i,
      }) {
        let a = xh(i, n);
        r?.length && (a = bh(a, r));
        let o = Sh(e, a),
          s = Ch(t);
        return o.map((e, t) => T(`div`, { style: s, children: e }, wh(t)));
      })),
      (QE = (e) =>
        m(function (
          {
            columnMasonryLayoutEnabled: t,
            trackCount: n = 1,
            rowGap: r,
            parentIsDataRepeater: i,
            itemsOrder: a,
            children: o,
            style: s,
            ...c
          },
          l
        ) {
          return t
            ? T(e, {
                ref: l,
                style: { ...s, gridTemplateColumns: `repeat(${n}, 1fr)` },
                ...c,
                children: T(ZE, {
                  trackCount: n,
                  rowGap: r,
                  parentIsDataRepeater: i,
                  itemsOrder: a,
                  children: o,
                }),
              })
            : T(e, { ref: l, style: s, ...c, children: o });
        })),
      (eD = !wn() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (tD =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (nD = `{{ text-placeholder }}`),
      (rD = `rich-text-wrapper`),
      (iD = No(
        m(function (e, n) {
          let {
              id: r,
              name: i,
              html: a,
              htmlFromDesign: o,
              text: s,
              textFromDesign: u,
              fonts: d = [],
              width: f,
              height: p,
              left: m,
              right: h,
              top: g,
              bottom: _,
              center: v,
              className: y,
              stylesPresetsClassName: b,
              visible: x = !0,
              opacity: S,
              rotation: w = 0,
              verticalAlignment: E = `top`,
              isEditable: D = !1,
              environment: ee = X.current,
              withExternalLayout: O = !1,
              positionSticky: k,
              positionStickyTop: te,
              positionStickyRight: A,
              positionStickyBottom: ne,
              positionStickyLeft: j,
              __htmlStructure: re,
              __fromCanvasComponent: ie = !1,
              _forwardedOverrideId: M,
              _forwardedOverrides: ae,
              _usesDOMRect: oe,
              children: se,
              ...N
            } = e,
            ce = fo(),
            le = zo(e),
            ue = l(null),
            de = n ?? ue,
            { navigate: fe, getRoute: pe } = Dt(),
            me = kt();
          (Rn(e.preload ?? []), Go(e, de));
          let he = t(Zb),
            ge = Kl(),
            _e = s,
            P = M ?? r;
          if (P && ae) {
            let e = ae[P];
            typeof e == `string` && (_e = e);
          }
          let F = ``;
          if (_e) {
            let e = Dh(_e);
            F = re ? re.replace(nD, e) : `<p>${e}</p>`;
          } else if (a) F = a;
          else if (u) {
            let e = Dh(u);
            F = re ? re.replace(nD, e) : `<p>${e}</p>`;
          } else o && (F = o);
          let ye = zu(),
            I = C(() => (ge || !pe || !me ? F : Oh(F, pe, me, ye)), [F, pe, me, ye]);
          if (
            (c(() => {
              let e = de.current;
              if (e === null) return;
              function t(e) {
                let t = Nu(e.target, de.current);
                jn(e) ||
                  !fe ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (Ql(fe, t, ye) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [fe, ye]),
            jh(d, ie, de),
            !x)
          )
            return null;
          let be = D && ee() === X.canvas,
            L = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: Ah(E),
              opacity: be ? 0 : S,
              flexShrink: 0,
            },
            xe = X.hasRestrictions(),
            Se = co(e, ce || 0, !1),
            Ce = oe && (f === `auto` || p === `auto`),
            we =
              e.transformTemplate || !Se || !xe || ie || Ce
                ? (e.transformTemplate ?? Ro(v))
                : void 0;
          if (!O) {
            if (Se && xe && !Ce) {
              let e = hy.getNumber(w).toFixed(4);
              ((L.transform = `translate(${Se.x}px, ${Se.y}px) rotate(${e}deg)`),
                (L.width = Se.width),
                (L.minWidth = Se.width),
                (L.height = Se.height));
            } else
              ((L.left = m),
                (L.right = h),
                (L.top = g),
                (L.bottom = _),
                (L.width = f),
                (L.height = p),
                (L.rotate = w));
            k
              ? (!ge || he) &&
                ((L.position = `sticky`),
                (L.willChange = `transform`),
                (L.top = te),
                (L.right = A),
                (L.bottom = ne),
                (L.left = j))
              : ge && (e.positionFixed || e.positionAbsolute) && (L.position = `absolute`);
          }
          return (
            kc(e, L),
            Ec(e, L),
            Object.assign(L, e.style),
            T(ve.div, {
              id: r,
              ref: de,
              ...N,
              style: L,
              layoutId: le,
              "data-framer-name": i,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": v,
              className: jc(y, b, rD),
              transformTemplate: we,
              dangerouslySetInnerHTML: { __html: I },
            })
          );
        })
      )),
      (aD = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (oD = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (sD = m(function (e, t) {
        return T(`svg`, { ...e, ref: t, children: e.children });
      })),
      (cD = ve.create(sD)),
      (lD = m(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return T(cD, {
          ...r,
          ref: i,
          viewBox: t,
          children: T(ve.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (uD = []),
      (dD = `RichTextContainer`),
      (fD = m(function (e, n) {
        let {
            __fromCanvasComponent: r = !1,
            _forwardedOverrideId: i,
            _forwardedOverrides: a,
            _usesDOMRect: o,
            anchorLinkOffsetY: s,
            as: c,
            bottom: u,
            center: d,
            children: f,
            environment: p = X.current,
            fonts: m = uD,
            height: h,
            isEditable: g = !1,
            left: _,
            name: v,
            opacity: y,
            positionSticky: b,
            positionStickyBottom: x,
            positionStickyLeft: S,
            positionStickyRight: w,
            positionStickyTop: E,
            right: D,
            rotation: ee = 0,
            style: O,
            _initialStyle: k,
            stylesPresetsClassNames: te,
            text: A,
            top: ne,
            verticalAlignment: j = `top`,
            visible: re = !0,
            width: ie,
            withExternalLayout: M = !1,
            viewBox: ae,
            viewBoxScale: oe = 1,
            effect: se,
            ...N
          } = e,
          ce = fo(),
          le = p(),
          ue = le === X.canvas,
          de = ue || le === X.export,
          fe = t(Zb),
          pe = zo(e),
          me = l(null),
          he = n ?? me;
        (Go(e, he), jh(m, r, he));
        let ge = Bh(se, he),
          _e = C(() => {
            if (f) return Jh(f, te, A, s, void 0, ge.getTokenizer());
          }, [f, te, A, s, ge]);
        if (!re) return null;
        let P = { opacity: g && ue ? 0 : y },
          ve = Ah(j);
        ve !== jb.justifyContent && (P.justifyContent = ve);
        let F = {},
          ye = X.hasRestrictions(),
          I = co(e, ce || 0, !1),
          be = o && (ie === `auto` || h === `auto`),
          L = e.transformTemplate || !I || !ye || r || be ? (e.transformTemplate ?? Ro(d)) : void 0;
        (M ||
          (I && ye && !be
            ? ((F.x = I.x + (B(O?.x) ? O.x : 0)),
              (F.y = I.y + (B(O?.y) ? O.y : 0)),
              (F.left = 0),
              (F.top = 0),
              (P.rotate = hy.getNumber(ee)),
              (P.width = I.width),
              (P.minWidth = I.width),
              (P.height = I.height))
            : ((P.left = _),
              (P.right = D),
              (P.top = ne),
              (P.bottom = u),
              (P.width = ie),
              (P.height = h),
              (P.rotate = ee)),
          b
            ? (!de || fe) &&
              ((P.position = `sticky`),
              (P.willChange = `transform`),
              (P.top = E),
              (P.right = w),
              (P.bottom = x),
              (P.left = S))
            : ue && (e.positionFixed || e.positionAbsolute) && (P.position = `absolute`)),
          kc(e, P),
          Ec(e, P),
          Object.assign(P, k, O, F),
          pe && (N.layout = `preserve-aspect`));
        let xe = bo(e.as),
          Se = N[`data-framer-name`] ?? v,
          Ce = ue ? Gh(Ky(N)) : N;
        return z(e.viewBox)
          ? e.as === void 0
            ? T(lD, {
                ...Ce,
                ref: he,
                style: P,
                layoutId: pe,
                viewBox: ae,
                viewBoxScale: oe,
                transformTemplate: L,
                "data-framer-name": Se,
                "data-framer-component-type": dD,
                children: _e,
              })
            : T(xe, {
                ...Ce,
                ref: he,
                style: P,
                layoutId: pe,
                transformTemplate: L,
                "data-framer-name": Se,
                "data-framer-component-type": dD,
                children: T(lD, {
                  viewBox: ae,
                  viewBoxScale: oe,
                  style: { width: `100%`, height: `100%` },
                  children: _e,
                }),
              })
          : T(xe, {
              ...Ce,
              ref: he,
              style: P,
              layoutId: pe,
              transformTemplate: L,
              "data-framer-name": Se,
              "data-framer-component-type": dD,
              children: _e,
            });
      })),
      (pD = No(
        m(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (z(a)) {
            !r.stylesPresetsClassName &&
              V(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [z(t) ? `html` : `htmlFromDesign`]: a };
            return T(iD, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && z(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return T(fD, { ...r, ref: i, children: D(a) ? a : void 0 });
        })
      )),
      (mD = `framer/asset-reference,`),
      (hD = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = sg(t);
        return T(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: T(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c
          ),
        });
      }),
      (gD = Tn()),
      (_D = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
        id;
        svg;
        innerHTML;
        viewBox;
        count;
      }),
      (vD = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (yD = class {
        entries = new Map();
        vectorSetItems = new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(ax(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = lg(e);
            (s &&
              (t && ug(s, n),
              (s.id = n),
              (o = hg(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          gD && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = vD),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          gD && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new _D(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !gD) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        gD && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${vD}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/u, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (bD = new yD()),
      (xD = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (SD = m(function (e, t) {
        let n = fo(),
          r = zo(e),
          i = A.useRef(null),
          a = t ?? i,
          o = sE();
        return (
          Go(e, i),
          T(wD, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (CD = 5e4),
      (wD = class e extends ix {
        static supportsConstraints = !0;
        static defaultSVGProps = {
          left: void 0,
          right: void 0,
          top: void 0,
          bottom: void 0,
          style: void 0,
          _constraints: { enabled: !0, aspectRatio: null },
          parentSize: 0,
          rotation: 0,
          visible: !0,
          svg: ``,
          shadows: [],
        };
        static defaultProps = { ...ix.defaultProps, ...e.defaultSVGProps };
        static frame(e) {
          return co(e, e.parentSize || 0);
        }
        container = A.createRef();
        svgElement = null;
        setSVGElement = (e) => {
          ((this.svgElement = e), this.setLayerElement(e));
        };
        previouslyRenderedSVG = ``;
        get frame() {
          return co(this.props, this.props.parentSize || 0);
        }
        unmountedSVG = ``;
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: e } = this.props,
              t = e ? `svg${e}` : null;
            (bD.subscribe(this.unmountedSVG, !e, t),
              (this.previouslyRenderedSVG = this.unmountedSVG));
          }
          this.props.svgContentId || yg(this.container, this.props);
        }
        componentWillUnmount() {
          (bD.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = ``));
        }
        componentDidUpdate(e) {
          if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
          let { fill: t } = this.props;
          (ob.isImageObject(t) &&
            ob.isImageObject(e.fill) &&
            t.src !== e.fill.src &&
            Xo(this.svgElement, `fill`, null, !1),
            yg(this.container, this.props));
        }
        collectLayout(e, t) {
          if (this.props.withExternalLayout) {
            ((t.width = `100%`), (t.height = `100%`), (t.aspectRatio = `inherit`));
            return;
          }
          let n = this.frame,
            {
              rotation: r,
              intrinsicWidth: i,
              intrinsicHeight: a,
              width: o,
              height: s,
            } = this.props,
            c = hy.getNumber(r);
          if (
            ((e.opacity = W(this.props.opacity) ? this.props.opacity : 1), X.hasRestrictions() && n)
          ) {
            (Object.assign(e, {
              transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
              width: `${n.width}px`,
              height: `${n.height}px`,
            }),
              ao(this.props) && (e.position = `absolute`));
            let r = n.width / (i || 1),
              o = n.height / (a || 1);
            t.transformOrigin = `top left`;
            let { zoom: s, target: l } = Ry;
            if (l === X.export) {
              let e = s > 1 ? s : 1;
              ((t.transform = `scale(${r * e}, ${o * e})`), (t.zoom = 1 / e));
            } else t.transform = `scale(${r}, ${o})`;
            i && a && ((t.width = i), (t.height = a));
            return;
          }
          let { left: l, right: u, top: d, bottom: f } = this.props;
          (Object.assign(e, {
            left: l,
            right: u,
            top: d,
            bottom: f,
            width: o,
            height: s,
            rotate: c,
          }),
            Object.assign(t, { left: 0, top: 0, bottom: 0, right: 0, position: `absolute` }));
        }
        render() {
          let {
            id: e,
            visible: t,
            style: n,
            fill: r,
            svg: i,
            intrinsicHeight: a,
            intrinsicWidth: o,
            title: s,
            description: c,
            layoutId: l,
            className: u,
            variants: d,
            withExternalLayout: f,
            innerRef: p,
            svgContentId: m,
            height: h,
            opacity: g,
            width: v,
            requiresOverflowVisible: y,
            ...b
          } = this.props;
          if (!f && (!t || !e)) return null;
          let x = e ?? l ?? `svg`,
            S = this.frame,
            C = S || { width: o || 100, height: a || 100 },
            w = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
            E = {};
          (this.collectLayout(w, E),
            wc(this.props, w),
            kc(this.props, w),
            ix.applyWillChange(this.props, w, !1));
          let D = null;
          if (typeof r == `string` || Y.isColorObject(r)) {
            let e = Y.isColorObject(r) ? r.initialValue || Y.toRgbString(r) : r;
            ((w.fill = e), (w.color = e));
          } else if (fx.isLinearGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${fx.hash(t)}`;
            w.fill = `url(#${n})`;
            let { stops: i, x1: a, x2: o, y1: s, y2: c } = $h(t, x);
            D = T(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: T(`linearGradient`, {
                id: n,
                x1: a,
                x2: o,
                y1: s,
                y2: c,
                children: i.map((e, t) =>
                  T(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (mx.isRadialGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${mx.hash(t)}`;
            w.fill = `url(#${n})`;
            let i = eg(t, x);
            D = T(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: T(`radialGradient`, {
                id: n,
                cy: t.centerAnchorY,
                cx: t.centerAnchorX,
                r: t.widthFactor,
                children: i.stops.map((e, t) =>
                  T(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (ob.isImageObject(r)) {
            let e = ag(r, C, x);
            e &&
              ((w.fill = `url(#${e.id})`),
              (D = T(`svg`, {
                ref: this.setSVGElement,
                width: `100%`,
                height: `100%`,
                style: { position: `absolute` },
                role: `presentation`,
                children: T(`defs`, { children: T(hD, { ...e }) }),
              })));
          }
          let ee = { "data-framer-component-type": `SVG` },
            k = !S;
          k && Object.assign(ee, Fo(this.props.center));
          let te =
              !y &&
              !D &&
              !w.fill &&
              !w.background &&
              !w.backgroundImage &&
              i.length < CD &&
              !gg(i) &&
              !_g(i),
            A = null;
          if (te)
            ((w.backgroundSize = `100% 100%`),
              (w.backgroundImage = it(i)),
              bD.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = ``));
          else {
            let e = m ? `svg${m}` : null,
              t = bD.subscribe(i, !m, e, y);
            (bD.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = i),
              vg(w) && (w.overflow = `hidden`),
              (A = O(_, {
                children: [
                  D,
                  T(
                    `div`,
                    {
                      className: `svgContainer`,
                      style: E,
                      ref: this.container,
                      dangerouslySetInnerHTML: { __html: t },
                    },
                    ob.isImageObject(r) ? r.src : ``
                  ),
                ],
              })));
          }
          let ne = bo(this.props.as),
            { href: j, target: re, rel: ie, onClick: M, onTap: ae } = this.props,
            oe = s || c;
          return T(ne, {
            ...ee,
            ...b,
            layoutId: l,
            transformTemplate: k ? Ro(this.props.center) : void 0,
            id: e,
            ref: p,
            style: w,
            className: u,
            variants: d,
            tabIndex: this.props.tabIndex,
            role: oe ? `img` : void 0,
            "aria-label": s,
            "aria-description": c,
            "aria-hidden": oe ? void 0 : `true`,
            onTap: ae,
            onClick: M,
            href: j,
            target: re,
            rel: ie,
            children: A,
          });
        }
      }),
      (TD = No(SD)),
      (ED = 1e3),
      (DD = `explicitInter`),
      (Be.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = M(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
//! Credit to Astro | MIT License
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
export {
  Vr as $,
  Sg as A,
  oi as B,
  KE as C,
  yS as D,
  _S as E,
  hi as F,
  bD as G,
  Ti as H,
  lt as I,
  _l as J,
  ni as K,
  OD as L,
  bg as M,
  Pp as N,
  vS as O,
  k_ as P,
  Kl as Q,
  ft as R,
  jc as S,
  bS as T,
  Kp as U,
  yC as V,
  ZS as W,
  Ul as X,
  kt as Y,
  Hp as Z,
  TD as _,
  Mu as a,
  dm as at,
  Yb as b,
  XE as c,
  QE as ct,
  Jn as d,
  Uc as dt,
  Ei as et,
  of as f,
  jg as ft,
  pD as g,
  X as h,
  Ca as i,
  cg as it,
  Cg as j,
  bb as k,
  s_ as l,
  GS as lt,
  QT as m,
  cC as n,
  Ft as nt,
  cS as o,
  xb as ot,
  pS as p,
  $_ as pt,
  Rp as q,
  Jx as r,
  Dt as rt,
  FC as s,
  fm as st,
  qS as t,
  Xp as tt,
  qC as u,
  aE as ut,
  xg as v,
  Ng as w,
  Cb as x,
  xc as y,
  Qg as z,
};
//# sourceMappingURL=framer.D89bBObE.mjs.map
