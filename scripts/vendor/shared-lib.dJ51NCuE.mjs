import { n as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as n,
  E as r,
  F as i,
  L as a,
  N as o,
  O as s,
  P as c,
  _ as l,
  b as u,
  c as d,
  j as f,
  l as p,
  s as m,
  u as h,
  w as g,
  x as _,
  y as ee,
  z as v,
} from "./react.Dfbt0i5D.mjs";
import { S as y, a as te, n as ne, r as re, t as ie } from "./motion.DPkvUqHs.mjs";
import {
  $ as ae,
  A as b,
  C as oe,
  J as se,
  L as x,
  M as S,
  Q as ce,
  S as C,
  X as le,
  Z as ue,
  _ as w,
  a as de,
  at as fe,
  c as pe,
  ct as me,
  et as he,
  g as T,
  h as ge,
  it as _e,
  j as E,
  lt as ve,
  n as ye,
  nt as be,
  o as xe,
  ot as D,
  p as O,
  q as Se,
  r as k,
  st as Ce,
  t as we,
  tt as Te,
  u as Ee,
  ut as De,
  v as Oe,
  w as ke,
  y as A,
} from "./framer.gUt6fAa6.mjs";
function j(e) {
  for (
    var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1;
    n < arguments.length;
    n++
  )
    t += `&args[]=` + encodeURIComponent(arguments[n]);
  return (
    `Minified React error #` +
    e +
    `; visit ` +
    t +
    ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
function Ae(e) {
  return G.call(or, e) ? !0 : G.call(ar, e) ? !1 : ir.test(e) ? (or[e] = !0) : ((ar[e] = !0), !1);
}
function M(e, t, n, r, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
function je(e) {
  return e[1].toUpperCase();
}
function N(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = ur.exec(e);
  if (t) {
    var n,
      r = ``,
      i = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = `&quot;`;
          break;
        case 38:
          t = `&amp;`;
          break;
        case 39:
          t = `&#x27;`;
          break;
        case 60:
          t = `&lt;`;
          break;
        case 62:
          t = `&gt;`;
          break;
        default:
          continue;
      }
      (i !== n && (r += e.substring(i, n)), (i = n + 1), (r += t));
    }
    e = i === n ? r : r + e.substring(i, n);
  }
  return e;
}
function Me(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function Ne(e, t, n) {
  switch (t) {
    case `select`:
      return Me(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return Me(2, null);
    case `math`:
      return Me(3, null);
    case `foreignObject`:
      return Me(1, null);
    case `table`:
      return Me(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return Me(5, null);
    case `colgroup`:
      return Me(7, null);
    case `tr`:
      return Me(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? Me(1, null) : e;
}
function Pe(e, t, n) {
  if (typeof n != `object`) throw Error(j(62));
  for (var r in ((t = !0), n))
    if (G.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = N(r);
          i = N((`` + i).trim());
        } else {
          a = r;
          var o = mr.get(a);
          (o !== void 0 ||
            ((o = N(a.replace(dr, `-$1`).toLowerCase().replace(fr, `-ms-`))), mr.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || G.call(cr, r)
                  ? `` + i
                  : i + `px`
                : N((`` + i).trim())));
        }
        t ? ((t = !1), e.push(` style="`, a, `:`, i)) : e.push(`;`, a, `:`, i);
      }
    }
  t || e.push(`"`);
}
function P(e, t, n, r) {
  switch (n) {
    case `style`:
      Pe(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return;
  }
  if (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) {
    if (((t = K.hasOwnProperty(n) ? K[n] : null), t !== null)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (!t.acceptsBooleans) return;
      }
      switch (((n = t.attributeName), t.type)) {
        case 3:
          r && e.push(` `, n, `=""`);
          break;
        case 4:
          !0 === r ? e.push(` `, n, `=""`) : !1 !== r && e.push(` `, n, `="`, N(r), `"`);
          break;
        case 5:
          isNaN(r) || e.push(` `, n, `="`, N(r), `"`);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(` `, n, `="`, N(r), `"`);
          break;
        default:
          (t.sanitizeURL && (r = `` + r), e.push(` `, n, `="`, N(r), `"`));
      }
    } else if (Ae(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)) return;
      }
      e.push(` `, n, `="`, N(r), `"`);
    }
  }
}
function Fe(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(j(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(j(61));
    ((t = t.__html), t != null && e.push(`` + t));
  }
}
function Ie(e) {
  var t = ``;
  return (
    rr.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function Le(e, t, n, r) {
  e.push(Re(n));
  var i,
    a = (n = null);
  for (i in t)
    if (G.call(t, i)) {
      var o = t[i];
      if (o != null)
        switch (i) {
          case `children`:
            n = o;
            break;
          case `dangerouslySetInnerHTML`:
            a = o;
            break;
          default:
            P(e, r, i, o);
        }
    }
  return (e.push(`>`), Fe(e, a, n), typeof n == `string` ? (e.push(N(n)), null) : n);
}
function Re(e) {
  var t = gr.get(e);
  if (t === void 0) {
    if (!hr.test(e)) throw Error(j(65, e));
    ((t = `<` + e), gr.set(e, t));
  }
  return t;
}
function ze(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(Re(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (G.call(n, u)) {
          var s = n[u];
          if (s != null)
            switch (u) {
              case `children`:
                a = s;
                break;
              case `dangerouslySetInnerHTML`:
                o = s;
                break;
              case `defaultValue`:
              case `value`:
                break;
              default:
                P(e, r, u, s);
            }
        }
      return (e.push(`>`), Fe(e, o, a), a);
    case `option`:
      ((o = i.selectedValue), e.push(Re(`option`)));
      var c = (s = null),
        l = null,
        u = null;
      for (a in n)
        if (G.call(n, a)) {
          var d = n[a];
          if (d != null)
            switch (a) {
              case `children`:
                s = d;
                break;
              case `selected`:
                l = d;
                break;
              case `dangerouslySetInnerHTML`:
                u = d;
                break;
              case `value`:
                c = d;
              default:
                P(e, r, a, d);
            }
        }
      if (o != null)
        if (((n = c === null ? Ie(s) : `` + c), pr(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(` selected=""`);
              break;
            }
        } else `` + o === n && e.push(` selected=""`);
      else l && e.push(` selected=""`);
      return (e.push(`>`), Fe(e, u, s), s);
    case `textarea`:
      for (s in (e.push(Re(`textarea`)), (u = o = a = null), n))
        if (G.call(n, s) && ((c = n[s]), c != null))
          switch (s) {
            case `children`:
              u = c;
              break;
            case `value`:
              a = c;
              break;
            case `defaultValue`:
              o = c;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(j(91));
            default:
              P(e, r, s, c);
          }
      if ((a === null && o !== null && (a = o), e.push(`>`), u != null)) {
        if (a != null) throw Error(j(92));
        if (pr(u) && 1 < u.length) throw Error(j(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(`
`),
        a !== null && e.push(N(`` + a)),
        null
      );
    case `input`:
      for (o in (e.push(Re(`input`)), (c = u = s = a = null), n))
        if (G.call(n, o) && ((l = n[o]), l != null))
          switch (o) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(j(399, `input`));
            case `defaultChecked`:
              c = l;
              break;
            case `defaultValue`:
              s = l;
              break;
            case `checked`:
              u = l;
              break;
            case `value`:
              a = l;
              break;
            default:
              P(e, r, o, l);
          }
      return (
        u === null ? c !== null && P(e, r, `checked`, c) : P(e, r, `checked`, u),
        a === null ? s !== null && P(e, r, `value`, s) : P(e, r, `value`, a),
        e.push(`/>`),
        null
      );
    case `menuitem`:
      for (var f in (e.push(Re(`menuitem`)), n))
        if (G.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(j(400));
            default:
              P(e, r, f, a);
          }
      return (e.push(`>`), null);
    case `title`:
      for (d in (e.push(Re(`title`)), (a = null), n))
        if (G.call(n, d) && ((o = n[d]), o != null))
          switch (d) {
            case `children`:
              a = o;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(j(434));
            default:
              P(e, r, d, o);
          }
      return (e.push(`>`), a);
    case `listing`:
    case `pre`:
      for (c in (e.push(Re(t)), (o = a = null), n))
        if (G.call(n, c) && ((s = n[c]), s != null))
          switch (c) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            default:
              P(e, r, c, s);
          }
      if ((e.push(`>`), o != null)) {
        if (a != null) throw Error(j(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(j(61));
        ((n = o.__html),
          n != null &&
            (typeof n == `string` &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(
                  `
`,
                  n
                )
              : e.push(`` + n)));
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(`
`),
        a
      );
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `embed`:
    case `hr`:
    case `img`:
    case `keygen`:
    case `link`:
    case `meta`:
    case `param`:
    case `source`:
    case `track`:
    case `wbr`:
      for (var p in (e.push(Re(t)), n))
        if (G.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(j(399, t));
            default:
              P(e, r, p, a);
          }
      return (e.push(`/>`), null);
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return Le(e, n, t, r);
    case `html`:
      return (i.insertionMode === 0 && e.push(`<!DOCTYPE html>`), Le(e, n, t, r));
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`) return Le(e, n, t, r);
      for (l in (e.push(Re(t)), (o = a = null), n))
        if (G.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              Pe(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              Ae(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(` `, l, `="`, N(s), `"`);
          }
      return (e.push(`>`), Fe(e, o, a), a);
  }
}
function Be(e, t, n) {
  if ((e.push(`<!--$?--><template id="`), n === null)) throw Error(j(395));
  return (e.push(n), e.push(`"></template>`));
}
function Ve(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return (
        e.push(`<div hidden id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 2:
      return (
        e.push(`<svg aria-hidden="true" style="display:none" id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 3:
      return (
        e.push(`<math aria-hidden="true" style="display:none" id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 4:
      return (
        e.push(`<table hidden id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 5:
      return (
        e.push(`<table hidden><tbody id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 6:
      return (
        e.push(`<table hidden><tr id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 7:
      return (
        e.push(`<table hidden><colgroup id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    default:
      throw Error(j(397));
  }
}
function He(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return e.push(`</div>`);
    case 2:
      return e.push(`</svg>`);
    case 3:
      return e.push(`</math>`);
    case 4:
      return e.push(`</table>`);
    case 5:
      return e.push(`</tbody></table>`);
    case 6:
      return e.push(`</tr></table>`);
    case 7:
      return e.push(`</colgroup></table>`);
    default:
      throw Error(j(397));
  }
}
function Ue(e) {
  return JSON.stringify(e).replace(_r, function (e) {
    switch (e) {
      case `<`:
        return `\\u003c`;
      case `\u2028`:
        return `\\u2028`;
      case `\u2029`:
        return `\\u2029`;
      default:
        throw Error(
          `escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`
        );
    }
  });
}
function We(e, t) {
  return (
    (t = t === void 0 ? `` : t),
    {
      bootstrapChunks: [],
      startInlineScript: `<script>`,
      placeholderPrefix: t + `P:`,
      segmentPrefix: t + `S:`,
      boundaryPrefix: t + `B:`,
      idPrefix: t,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1,
      generateStaticMarkup: e,
    }
  );
}
function Ge(e, t, n, r) {
  return n.generateStaticMarkup
    ? (e.push(N(t)), !1)
    : (t === `` ? (e = r) : (r && e.push(`<!-- -->`), e.push(N(t)), (e = !0)), e);
}
function Ke(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case xr:
      return `Fragment`;
    case br:
      return `Portal`;
    case Cr:
      return `Profiler`;
    case Sr:
      return `StrictMode`;
    case Dr:
      return `Suspense`;
    case Or:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case Tr:
        return (e.displayName || `Context`) + `.Consumer`;
      case wr:
        return (e._context.displayName || `Context`) + `.Provider`;
      case Er:
        var t = e.render;
        return (
          (e = e.displayName),
          (e ||=
            ((e = t.displayName || t.name || ``),
            e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case kr:
        return ((t = e.displayName || null), t === null ? Ke(e.type) || `Memo` : t);
      case Ar:
        ((t = e._payload), (e = e._init));
        try {
          return Ke(e(t));
        } catch {}
    }
  return null;
}
function qe(e, t) {
  if (((e = e.contextTypes), !e)) return Ir;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function Je(e, t) {
  if (e !== t) {
    ((e.context._currentValue2 = e.parentValue), (e = e.parent));
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(j(401));
    } else {
      if (n === null) throw Error(j(401));
      Je(e, n);
    }
    t.context._currentValue2 = t.value;
  }
}
function Ye(e) {
  ((e.context._currentValue2 = e.parentValue), (e = e.parent), e !== null && Ye(e));
}
function Xe(e) {
  var t = e.parent;
  (t !== null && Xe(t), (e.context._currentValue2 = e.value));
}
function Ze(e, t) {
  if (((e.context._currentValue2 = e.parentValue), (e = e.parent), e === null)) throw Error(j(402));
  e.depth === t.depth ? Je(e, t) : Ze(e, t);
}
function Qe(e, t) {
  var n = t.parent;
  if (n === null) throw Error(j(402));
  (e.depth === n.depth ? Je(e, n) : Qe(e, n), (t.context._currentValue2 = t.value));
}
function $e(e) {
  var t = Lr;
  t !== e &&
    (t === null
      ? Xe(e)
      : e === null
        ? Ye(t)
        : t.depth === e.depth
          ? Je(t, e)
          : t.depth > e.depth
            ? Ze(t, e)
            : Qe(t, e),
    (Lr = e));
}
function et(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  ((e.updater = Rr), (e.props = n), (e.state = i));
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue2 : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` && ((o = o(n, i)), (i = o == null ? i : vr({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(),
      t !== e.state && Rr.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (((t = a.queue), (o = a.replace), (a.queue = null), (a.replace = !1), o && t.length === 1))
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = +!!o; o < t.length; o++) {
          var s = t[o];
          ((s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = vr({}, a, s))) : vr(a, s)));
        }
        e.state = a;
      }
    else a.queue = null;
}
function tt(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - Br(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var a = 32 - Br(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - Br(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function nt(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Vr(e) / Hr) | 0)) | 0);
}
function rt(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function it() {
  if (Wr === null) throw Error(j(321));
  return Wr;
}
function at() {
  if (0 < Zr) throw Error(j(312));
  return { memoizedState: null, queue: null, next: null };
}
function ot() {
  return (
    q === null
      ? Kr === null
        ? ((qr = !1), (Kr = q = at()))
        : ((qr = !0), (q = Kr))
      : q.next === null
        ? ((qr = !1), (q = q.next = at()))
        : ((qr = !0), (q = q.next)),
    q
  );
}
function st() {
  ((Gr = Wr = null), (Jr = !1), (Kr = null), (Zr = 0), (q = Xr = null));
}
function ct(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function lt(e, t, n) {
  if (((Wr = it()), (q = ot()), qr)) {
    var r = q.queue;
    if (((t = r.dispatch), Xr !== null && ((n = Xr.get(r)), n !== void 0))) {
      (Xr.delete(r), (r = q.memoizedState));
      do ((r = e(r, n.action)), (n = n.next));
      while (n !== null);
      return ((q.memoizedState = r), [r, t]);
    }
    return [q.memoizedState, t];
  }
  return (
    (e = e === ct ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    (q.memoizedState = e),
    (e = q.queue = { last: null, dispatch: null }),
    (e = e.dispatch = dt.bind(null, Wr, e)),
    [q.memoizedState, e]
  );
}
function ut(e, t) {
  if (((Wr = it()), (q = ot()), (t = t === void 0 ? null : t), q !== null)) {
    var n = q.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!Ur(t[i], r[i])) {
            r = !1;
            break e;
          }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return ((e = e()), (q.memoizedState = [e, t]), e);
}
function dt(e, t, n) {
  if (25 <= Zr) throw Error(j(301));
  if (e === Wr)
    if (
      ((Jr = !0),
      (e = { action: n, next: null }),
      Xr === null && (Xr = new Map()),
      (n = Xr.get(t)),
      n === void 0)
    )
      Xr.set(t, e);
    else {
      for (t = n; t.next !== null; ) t = t.next;
      t.next = e;
    }
}
function ft() {
  throw Error(j(394));
}
function pt() {}
function mt(e) {
  return (console.error(e), null);
}
function ht() {}
function gt(e, t, n, r, i, a, o, s, c) {
  var l = [],
    u = new Set();
  return (
    (t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: r === void 0 ? 12800 : r,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: u,
      pingedTasks: l,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: i === void 0 ? mt : i,
      onAllReady: a === void 0 ? ht : a,
      onShellReady: o === void 0 ? ht : o,
      onShellError: s === void 0 ? ht : s,
      onFatalError: c === void 0 ? ht : c,
    }),
    (n = vt(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = _t(t, e, null, n, u, Ir, null, zr)),
    l.push(e),
    t
  );
}
function _t(e, t, n, r, i, a, o, s) {
  (e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++);
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      (t.push(c), t.length === 1 && jt(e));
    },
    blockedBoundary: n,
    blockedSegment: r,
    abortSet: i,
    legacyContext: a,
    context: o,
    treeContext: s,
  };
  return (i.add(c), c);
}
function vt(e, t, n, r, i, a) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: r,
    boundary: n,
    lastPushedText: i,
    textEmbedded: a,
  };
}
function yt(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`
    );
  return e;
}
function bt(e, t) {
  var n = e.onShellError;
  (n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), e.destination.destroy(t)));
}
function xt(e, t, n, r, i) {
  for (Wr = {}, Gr = t, Yr = 0, e = n(r, i); Jr; )
    ((Jr = !1), (Yr = 0), (Zr += 1), (q = null), (e = n(r, i)));
  return (st(), e);
}
function St(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(j(108, Ke(r) || `Unknown`, s));
      r = vr({}, o, n);
    }
    ((t.legacyContext = r), F(e, t, i), (t.legacyContext = o));
  } else F(e, t, i);
}
function Ct(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = vr({}, t)), (e = e.defaultProps), e)) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function wt(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = qe(n, t.legacyContext);
      var a = n.contextType;
      ((a = new n(r, typeof a == `object` && a ? a._currentValue2 : i)),
        et(a, n, r, i),
        St(e, t, a, n));
    } else {
      ((a = qe(n, t.legacyContext)), (i = xt(e, t, n, r, a)));
      var o = Yr !== 0;
      if (typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0)
        (et(i, n, r, a), St(e, t, i, n));
      else if (o) {
        ((r = t.treeContext), (t.treeContext = tt(r, 1, 0)));
        try {
          F(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else F(e, t, i);
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case Nr:
        case Mr:
        case Sr:
        case Cr:
        case xr:
          F(e, t, r.children);
          return;
        case Or:
          F(e, t, r.children);
          return;
        case jr:
          throw Error(j(343));
        case Dr:
          e: {
            ((n = t.blockedBoundary),
              (i = t.blockedSegment),
              (a = r.fallback),
              (r = r.children),
              (o = new Set()));
            var s = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: o,
                errorDigest: null,
              },
              c = vt(e, i.chunks.length, s, i.formatContext, !1, !1);
            (i.children.push(c), (i.lastPushedText = !1));
            var l = vt(e, 0, null, i.formatContext, !1, !1);
            ((l.parentFlushed = !0), (t.blockedBoundary = s), (t.blockedSegment = l));
            try {
              if (
                (Et(e, t, r),
                e.responseState.generateStaticMarkup ||
                  (l.lastPushedText && l.textEmbedded && l.chunks.push(`<!-- -->`)),
                (l.status = 1),
                kt(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              ((l.status = 4), (s.forceClientRender = !0), (s.errorDigest = yt(e, t)));
            } finally {
              ((t.blockedBoundary = n), (t.blockedSegment = i));
            }
            ((t = _t(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t));
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case Er:
            if (((r = xt(e, t, n.render, r, i)), Yr !== 0)) {
              ((n = t.treeContext), (t.treeContext = tt(n, 1, 0)));
              try {
                F(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else F(e, t, r);
            return;
          case kr:
            ((n = n.type), (r = Ct(n, r)), wt(e, t, n, r, i));
            return;
          case wr:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue2),
              (n._currentValue2 = r),
              (o = Lr),
              (Lr = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              F(e, t, i),
              (e = Lr),
              e === null)
            )
              throw Error(j(403));
            ((r = e.parentValue),
              (e.context._currentValue2 = r === Pr ? e.context._defaultValue : r),
              (e = Lr = e.parent),
              (t.context = e));
            return;
          case Tr:
            ((r = r.children), (r = r(n._currentValue2)), F(e, t, r));
            return;
          case Ar:
            ((i = n._init), (n = i(n._payload)), (r = Ct(n, r)), wt(e, t, n, r, void 0));
            return;
        }
      throw Error(j(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = ze(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = Ne(o, n, r)),
      Et(e, t, a),
      (i.formatContext = o),
      n)
    ) {
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `img`:
      case `input`:
      case `keygen`:
      case `link`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
        break;
      default:
        i.chunks.push(`</`, n, `>`);
    }
    i.lastPushedText = !1;
  }
}
function F(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case yr:
        wt(e, t, n.type, n.props, n.ref);
        return;
      case br:
        throw Error(j(257));
      case Ar:
        var r = n._init;
        ((n = r(n._payload)), F(e, t, n));
        return;
    }
    if (pr(n)) {
      Tt(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (Fr && n[Fr]) || n[`@@iterator`]), (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do (i.push(n.value), (n = r.next()));
        while (!n.done);
        Tt(e, t, i);
      }
      return;
    }
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        j(31, e === `[object Object]` ? `object with keys {` + Object.keys(n).join(`, `) + `}` : e)
      )
    );
  }
  typeof n == `string`
    ? ((r = t.blockedSegment),
      (r.lastPushedText = Ge(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = Ge(t.blockedSegment.chunks, `` + n, e.responseState, r.lastPushedText)));
}
function Tt(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = tt(a, r, i);
    try {
      Et(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function Et(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return F(e, t, n);
  } catch (c) {
    if ((st(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        $e(a),
        c
      );
    n = c;
    var o = t.blockedSegment,
      s = vt(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    (o.children.push(s),
      (o.lastPushedText = !1),
      (e = _t(
        e,
        t.node,
        t.blockedBoundary,
        s,
        t.abortSet,
        t.legacyContext,
        t.context,
        t.treeContext
      ).ping),
      n.then(e, e),
      (t.blockedSegment.formatContext = r),
      (t.legacyContext = i),
      (t.context = a),
      $e(a));
  }
}
function Dt(e) {
  var t = e.blockedBoundary;
  ((e = e.blockedSegment), (e.status = 3), At(this, t, e));
}
function Ot(e, t, n) {
  var r = e.blockedBoundary;
  ((e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 && ((t.status = 2), t.destination !== null && t.destination.push(null)))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(j(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
          return Ot(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r())));
}
function kt(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    ((n.id = t.id), (n.parentFlushed = !0), n.status === 1 && kt(e, n));
  } else e.completedSegments.push(t);
}
function At(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(j(389));
      e.completedRootSegment = n;
    }
    (e.pendingRootTasks--,
      e.pendingRootTasks === 0 && ((e.onShellError = ht), (t = e.onShellReady), t()));
  } else
    (t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && kt(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(Dt, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (kt(t, n),
            t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t))));
  (e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e()));
}
function jt(e) {
  if (e.status !== 2) {
    var t = Lr,
      n = ei.current;
    ei.current = Qr;
    var r = $r;
    $r = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          $e(o.context);
          try {
            (F(s, o, o.node),
              s.responseState.generateStaticMarkup ||
                (c.lastPushedText && c.textEmbedded && c.chunks.push(`<!-- -->`)),
              o.abortSet.delete(o),
              (c.status = 1),
              At(s, o.blockedBoundary, c));
          } catch (e) {
            if ((st(), typeof e == `object` && e && typeof e.then == `function`)) {
              var l = o.ping;
              e.then(l, l);
            } else {
              (o.abortSet.delete(o), (c.status = 4));
              var u = o.blockedBoundary,
                d = e,
                f = yt(s, d);
              if (
                (u === null
                  ? bt(s, d)
                  : (u.pendingTasks--,
                    u.forceClientRender ||
                      ((u.forceClientRender = !0),
                      (u.errorDigest = f),
                      u.parentFlushed && s.clientRenderedBoundaries.push(u))),
                s.allPendingTasks--,
                s.allPendingTasks === 0)
              ) {
                var p = s.onAllReady;
                p();
              }
            }
          }
        }
      }
      (a.splice(0, i), e.destination !== null && Lt(e, e.destination));
    } catch (t) {
      (yt(e, t), bt(e, t));
    } finally {
      (($r = r), (ei.current = n), n === Qr && $e(t));
    }
  }
}
function Mt(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        t.push(`<template id="`),
        t.push(e.placeholderPrefix),
        (e = r.toString(16)),
        t.push(e),
        t.push(`"></template>`)
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) t.push(r[a]);
        i = Nt(e, t, i);
      }
      for (; a < r.length - 1; a++) t.push(r[a]);
      return (a < r.length && (i = t.push(r[a])), i);
    default:
      throw Error(j(390));
  }
}
function Nt(e, t, n) {
  var r = n.boundary;
  if (r === null) return Mt(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    return (
      e.responseState.generateStaticMarkup ||
        ((r = r.errorDigest),
        t.push(`<!--$!-->`),
        t.push(`<template`),
        r && (t.push(` data-dgst="`), (r = N(r)), t.push(r), t.push(`"`)),
        t.push(`></template>`)),
      Mt(e, t, n),
      (e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`)),
      e
    );
  if (0 < r.pendingTasks) {
    ((r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r));
    var i = e.responseState,
      a = i.nextSuspenseID++;
    return (
      (i = i.boundaryPrefix + a.toString(16)),
      (r = r.id = i),
      Be(t, e.responseState, r),
      Mt(e, t, n),
      t.push(`<!--/$-->`)
    );
  }
  if (r.byteSize > e.progressiveChunkSize)
    return (
      (r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      Be(t, e.responseState, r.id),
      Mt(e, t, n),
      t.push(`<!--/$-->`)
    );
  if (
    (e.responseState.generateStaticMarkup || t.push(`<!--$-->`),
    (n = r.completedSegments),
    n.length !== 1)
  )
    throw Error(j(391));
  return (Nt(e, t, n[0]), (e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`)), e);
}
function Pt(e, t, n) {
  return (Ve(t, e.responseState, n.formatContext, n.id), Nt(e, t, n), He(t, n.formatContext));
}
function Ft(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) It(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    t.push(e.startInlineScript),
    e.sentCompleteBoundaryFunction
      ? t.push(`$RC("`)
      : ((e.sentCompleteBoundaryFunction = !0),
        t.push(
          `function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`
        )),
    r === null)
  )
    throw Error(j(395));
  return (
    (n = n.toString(16)),
    t.push(r),
    t.push(`","`),
    t.push(e.segmentPrefix),
    t.push(n),
    t.push(`")<\/script>`)
  );
}
function It(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(j(392));
    return Pt(e, t, r);
  }
  return (
    Pt(e, t, r),
    (e = e.responseState),
    t.push(e.startInlineScript),
    e.sentCompleteSegmentFunction
      ? t.push(`$RS("`)
      : ((e.sentCompleteSegmentFunction = !0),
        t.push(
          `function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`
        )),
    t.push(e.segmentPrefix),
    (i = i.toString(16)),
    t.push(i),
    t.push(`","`),
    t.push(e.placeholderPrefix),
    t.push(i),
    t.push(`")<\/script>`)
  );
}
function Lt(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      (Nt(e, t, n), (e.completedRootSegment = null));
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) t.push(r[n]);
      n < r.length && t.push(r[n]);
    }
    var i,
      a = e.clientRenderedBoundaries;
    for (i = 0; i < a.length; i++) {
      var o = a[i];
      r = t;
      var s = e.responseState,
        c = o.id,
        l = o.errorDigest,
        u = o.errorMessage,
        d = o.errorComponentStack;
      if (
        (r.push(s.startInlineScript),
        s.sentClientRenderFunction
          ? r.push(`$RX("`)
          : ((s.sentClientRenderFunction = !0),
            r.push(
              `function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`
            )),
        c === null)
      )
        throw Error(j(395));
      if ((r.push(c), r.push(`"`), l || u || d)) {
        r.push(`,`);
        var f = Ue(l || ``);
        r.push(f);
      }
      if (u || d) {
        r.push(`,`);
        var p = Ue(u || ``);
        r.push(p);
      }
      if (d) {
        r.push(`,`);
        var m = Ue(d);
        r.push(m);
      }
      if (!r.push(`)<\/script>`)) {
        ((e.destination = null), i++, a.splice(0, i));
        return;
      }
    }
    a.splice(0, i);
    var h = e.completedBoundaries;
    for (i = 0; i < h.length; i++)
      if (!Ft(e, t, h[i])) {
        ((e.destination = null), i++, h.splice(0, i));
        return;
      }
    h.splice(0, i);
    var g = e.partialBoundaries;
    for (i = 0; i < g.length; i++) {
      var _ = g[i];
      e: {
        ((a = e), (o = t));
        var ee = _.completedSegments;
        for (s = 0; s < ee.length; s++)
          if (!It(a, o, _, ee[s])) {
            (s++, ee.splice(0, s));
            var v = !1;
            break e;
          }
        (ee.splice(0, s), (v = !0));
      }
      if (!v) {
        ((e.destination = null), i++, g.splice(0, i));
        return;
      }
    }
    g.splice(0, i);
    var y = e.completedBoundaries;
    for (i = 0; i < y.length; i++)
      if (!Ft(e, t, y[i])) {
        ((e.destination = null), i++, y.splice(0, i));
        return;
      }
    y.splice(0, i);
  } finally {
    e.allPendingTasks === 0 &&
      e.pingedTasks.length === 0 &&
      e.clientRenderedBoundaries.length === 0 &&
      e.completedBoundaries.length === 0 &&
      t.push(null);
  }
}
function Rt(e, t) {
  try {
    var n = e.abortableTasks;
    (n.forEach(function (n) {
      return Ot(n, e, t);
    }),
      n.clear(),
      e.destination !== null && Lt(e, e.destination));
  } catch (t) {
    (yt(e, t), bt(e, t));
  }
}
function zt() {}
function Bt(e, t, n, r) {
  var i = !1,
    a = null,
    o = ``,
    s = {
      push: function (e) {
        return (e !== null && (o += e), !0);
      },
      destroy: function (e) {
        ((i = !0), (a = e));
      },
    },
    c = !1;
  if (
    ((e = gt(
      e,
      We(n, t ? t.identifierPrefix : void 0),
      { insertionMode: 1, selectedValue: null },
      1 / 0,
      zt,
      void 0,
      function () {
        c = !0;
      },
      void 0,
      void 0
    )),
    jt(e),
    Rt(e, r),
    e.status === 1)
  )
    ((e.status = 2), s.destroy(e.fatalError));
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      Lt(e, s);
    } catch (t) {
      (yt(e, t), bt(e, t));
    }
  }
  if (i) throw a;
  if (!c) throw Error(j(426));
  return o;
}
function I(e) {
  for (
    var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1;
    n < arguments.length;
    n++
  )
    t += `&args[]=` + encodeURIComponent(arguments[n]);
  return (
    `Minified React error #` +
    e +
    `; visit ` +
    t +
    ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
function L(e, t) {
  if (t.length !== 0)
    if (512 < t.length)
      (0 < Y && (e.enqueue(new Uint8Array(J.buffer, 0, Y)), (J = new Uint8Array(512)), (Y = 0)),
        e.enqueue(t));
    else {
      var n = J.length - Y;
      (n < t.length &&
        (n === 0 ? e.enqueue(J) : (J.set(t.subarray(0, n), Y), e.enqueue(J), (t = t.subarray(n))),
        (J = new Uint8Array(512)),
        (Y = 0)),
        J.set(t, Y),
        (Y += t.length));
    }
}
function R(e, t) {
  return (L(e, t), !0);
}
function Vt(e) {
  J && 0 < Y && (e.enqueue(new Uint8Array(J.buffer, 0, Y)), (J = null), (Y = 0));
}
function z(e) {
  return ii.encode(e);
}
function B(e) {
  return ii.encode(e);
}
function Ht(e, t) {
  typeof e.error == `function` ? e.error(t) : e.close();
}
function Ut(e) {
  return X.call(si, e) ? !0 : X.call(oi, e) ? !1 : ai.test(e) ? (si[e] = !0) : ((oi[e] = !0), !1);
}
function V(e, t, n, r, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
function Wt(e) {
  return e[1].toUpperCase();
}
function H(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = di.exec(e);
  if (t) {
    var n,
      r = ``,
      i = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = `&quot;`;
          break;
        case 38:
          t = `&amp;`;
          break;
        case 39:
          t = `&#x27;`;
          break;
        case 60:
          t = `&lt;`;
          break;
        case 62:
          t = `&gt;`;
          break;
        default:
          continue;
      }
      (i !== n && (r += e.substring(i, n)), (i = n + 1), (r += t));
    }
    e = i === n ? r : r + e.substring(i, n);
  }
  return e;
}
function Gt(e, t, n, r) {
  return t + (n === `s` ? `\\u0073` : `\\u0053`) + r;
}
function Kt(e, t, n, r, i) {
  ((e = e === void 0 ? `` : e), (t = t === void 0 ? hi : B(`<script nonce="` + H(t) + `">`)));
  var a = [];
  if ((n !== void 0 && a.push(t, z((`` + n).replace(bi, Gt)), gi), r !== void 0))
    for (n = 0; n < r.length; n++) a.push(_i, z(H(r[n])), yi);
  if (i !== void 0) for (r = 0; r < i.length; r++) a.push(vi, z(H(i[r])), yi);
  return {
    bootstrapChunks: a,
    startInlineScript: t,
    placeholderPrefix: B(e + `P:`),
    segmentPrefix: B(e + `S:`),
    boundaryPrefix: e + `B:`,
    idPrefix: e,
    nextSuspenseID: 0,
    sentCompleteSegmentFunction: !1,
    sentCompleteBoundaryFunction: !1,
    sentClientRenderFunction: !1,
  };
}
function qt(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function Jt(e) {
  return qt(
    e === `http://www.w3.org/2000/svg` ? 2 : e === `http://www.w3.org/1998/Math/MathML` ? 3 : 0,
    null
  );
}
function Yt(e, t, n) {
  switch (t) {
    case `select`:
      return qt(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return qt(2, null);
    case `math`:
      return qt(3, null);
    case `foreignObject`:
      return qt(1, null);
    case `table`:
      return qt(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return qt(5, null);
    case `colgroup`:
      return qt(7, null);
    case `tr`:
      return qt(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? qt(1, null) : e;
}
function Xt(e, t, n, r) {
  return t === `` ? r : (r && e.push(xi), e.push(z(H(t))), !0);
}
function Zt(e, t, n) {
  if (typeof n != `object`) throw Error(I(62));
  for (var r in ((t = !0), n))
    if (X.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = z(H(r));
          i = z(H((`` + i).trim()));
        } else {
          a = r;
          var o = Si.get(a);
          (o !== void 0 ||
            ((o = B(H(a.replace(fi, `-$1`).toLowerCase().replace(pi, `-ms-`)))), Si.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || X.call(li, r)
                  ? z(`` + i)
                  : z(i + `px`)
                : z(H((`` + i).trim()))));
        }
        t ? ((t = !1), e.push(Ci, a, wi, i)) : e.push(Ti, a, wi, i);
      }
    }
  t || e.push(Oi);
}
function U(e, t, n, r) {
  switch (n) {
    case `style`:
      Zt(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return;
  }
  if (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) {
    if (((t = Z.hasOwnProperty(n) ? Z[n] : null), t !== null)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (!t.acceptsBooleans) return;
      }
      switch (((n = z(t.attributeName)), t.type)) {
        case 3:
          r && e.push(Ei, n, ki);
          break;
        case 4:
          !0 === r ? e.push(Ei, n, ki) : !1 !== r && e.push(Ei, n, Di, z(H(r)), Oi);
          break;
        case 5:
          isNaN(r) || e.push(Ei, n, Di, z(H(r)), Oi);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(Ei, n, Di, z(H(r)), Oi);
          break;
        default:
          (t.sanitizeURL && (r = `` + r), e.push(Ei, n, Di, z(H(r)), Oi));
      }
    } else if (Ut(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)) return;
      }
      e.push(Ei, z(n), Di, z(H(r)), Oi);
    }
  }
}
function Qt(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(I(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(I(61));
    ((t = t.__html), t != null && e.push(z(`` + t)));
  }
}
function $t(e) {
  var t = ``;
  return (
    ri.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function en(e, t, n, r) {
  e.push(tn(n));
  var i,
    a = (n = null);
  for (i in t)
    if (X.call(t, i)) {
      var o = t[i];
      if (o != null)
        switch (i) {
          case `children`:
            n = o;
            break;
          case `dangerouslySetInnerHTML`:
            a = o;
            break;
          default:
            U(e, r, i, o);
        }
    }
  return (e.push(Ai), Qt(e, a, n), typeof n == `string` ? (e.push(z(H(n))), null) : n);
}
function tn(e) {
  var t = Fi.get(e);
  if (t === void 0) {
    if (!Pi.test(e)) throw Error(I(65, e));
    ((t = B(`<` + e)), Fi.set(e, t));
  }
  return t;
}
function nn(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(tn(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (X.call(n, u)) {
          var s = n[u];
          if (s != null)
            switch (u) {
              case `children`:
                a = s;
                break;
              case `dangerouslySetInnerHTML`:
                o = s;
                break;
              case `defaultValue`:
              case `value`:
                break;
              default:
                U(e, r, u, s);
            }
        }
      return (e.push(Ai), Qt(e, o, a), a);
    case `option`:
      ((o = i.selectedValue), e.push(tn(`option`)));
      var c = (s = null),
        l = null,
        u = null;
      for (a in n)
        if (X.call(n, a)) {
          var d = n[a];
          if (d != null)
            switch (a) {
              case `children`:
                s = d;
                break;
              case `selected`:
                l = d;
                break;
              case `dangerouslySetInnerHTML`:
                u = d;
                break;
              case `value`:
                c = d;
              default:
                U(e, r, a, d);
            }
        }
      if (o != null)
        if (((n = c === null ? $t(s) : `` + c), mi(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(Mi);
              break;
            }
        } else `` + o === n && e.push(Mi);
      else l && e.push(Mi);
      return (e.push(Ai), Qt(e, u, s), s);
    case `textarea`:
      for (s in (e.push(tn(`textarea`)), (u = o = a = null), n))
        if (X.call(n, s) && ((c = n[s]), c != null))
          switch (s) {
            case `children`:
              u = c;
              break;
            case `value`:
              a = c;
              break;
            case `defaultValue`:
              o = c;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(I(91));
            default:
              U(e, r, s, c);
          }
      if ((a === null && o !== null && (a = o), e.push(Ai), u != null)) {
        if (a != null) throw Error(I(92));
        if (mi(u) && 1 < u.length) throw Error(I(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(Ni),
        a !== null && e.push(z(H(`` + a))),
        null
      );
    case `input`:
      for (o in (e.push(tn(`input`)), (c = u = s = a = null), n))
        if (X.call(n, o) && ((l = n[o]), l != null))
          switch (o) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(I(399, `input`));
            case `defaultChecked`:
              c = l;
              break;
            case `defaultValue`:
              s = l;
              break;
            case `checked`:
              u = l;
              break;
            case `value`:
              a = l;
              break;
            default:
              U(e, r, o, l);
          }
      return (
        u === null ? c !== null && U(e, r, `checked`, c) : U(e, r, `checked`, u),
        a === null ? s !== null && U(e, r, `value`, s) : U(e, r, `value`, a),
        e.push(ji),
        null
      );
    case `menuitem`:
      for (var f in (e.push(tn(`menuitem`)), n))
        if (X.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(I(400));
            default:
              U(e, r, f, a);
          }
      return (e.push(Ai), null);
    case `title`:
      for (d in (e.push(tn(`title`)), (a = null), n))
        if (X.call(n, d) && ((o = n[d]), o != null))
          switch (d) {
            case `children`:
              a = o;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(I(434));
            default:
              U(e, r, d, o);
          }
      return (e.push(Ai), a);
    case `listing`:
    case `pre`:
      for (c in (e.push(tn(t)), (o = a = null), n))
        if (X.call(n, c) && ((s = n[c]), s != null))
          switch (c) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            default:
              U(e, r, c, s);
          }
      if ((e.push(Ai), o != null)) {
        if (a != null) throw Error(I(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(I(61));
        ((n = o.__html),
          n != null &&
            (typeof n == `string` &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(Ni, z(n))
              : e.push(z(`` + n))));
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(Ni),
        a
      );
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `embed`:
    case `hr`:
    case `img`:
    case `keygen`:
    case `link`:
    case `meta`:
    case `param`:
    case `source`:
    case `track`:
    case `wbr`:
      for (var p in (e.push(tn(t)), n))
        if (X.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(I(399, t));
            default:
              U(e, r, p, a);
          }
      return (e.push(ji), null);
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return en(e, n, t, r);
    case `html`:
      return (i.insertionMode === 0 && e.push(Ii), en(e, n, t, r));
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`) return en(e, n, t, r);
      for (l in (e.push(tn(t)), (o = a = null), n))
        if (X.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              Zt(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              Ut(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(Ei, z(l), Di, z(H(s)), Oi);
          }
      return (e.push(Ai), Qt(e, o, a), a);
  }
}
function rn(e, t, n) {
  if ((L(e, Hi), n === null)) throw Error(I(395));
  return (L(e, n), R(e, Ui));
}
function an(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return (L(e, Xi), L(e, t.segmentPrefix), L(e, z(r.toString(16))), R(e, Zi));
    case 2:
      return (L(e, $i), L(e, t.segmentPrefix), L(e, z(r.toString(16))), R(e, ea));
    case 3:
      return (L(e, na), L(e, t.segmentPrefix), L(e, z(r.toString(16))), R(e, ra));
    case 4:
      return (L(e, aa), L(e, t.segmentPrefix), L(e, z(r.toString(16))), R(e, oa));
    case 5:
      return (L(e, ca), L(e, t.segmentPrefix), L(e, z(r.toString(16))), R(e, la));
    case 6:
      return (L(e, da), L(e, t.segmentPrefix), L(e, z(r.toString(16))), R(e, fa));
    case 7:
      return (L(e, ma), L(e, t.segmentPrefix), L(e, z(r.toString(16))), R(e, ha));
    default:
      throw Error(I(397));
  }
}
function on(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return R(e, Qi);
    case 2:
      return R(e, ta);
    case 3:
      return R(e, ia);
    case 4:
      return R(e, sa);
    case 5:
      return R(e, ua);
    case 6:
      return R(e, pa);
    case 7:
      return R(e, ga);
    default:
      throw Error(I(397));
  }
}
function sn(e) {
  return JSON.stringify(e).replace(Aa, function (e) {
    switch (e) {
      case `<`:
        return `\\u003c`;
      case `\u2028`:
        return `\\u2028`;
      case `\u2029`:
        return `\\u2029`;
      default:
        throw Error(
          `escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`
        );
    }
  });
}
function cn(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case Pa:
      return `Fragment`;
    case Na:
      return `Portal`;
    case Ia:
      return `Profiler`;
    case Fa:
      return `StrictMode`;
    case Ba:
      return `Suspense`;
    case Va:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case Ra:
        return (e.displayName || `Context`) + `.Consumer`;
      case La:
        return (e._context.displayName || `Context`) + `.Provider`;
      case za:
        var t = e.render;
        return (
          (e = e.displayName),
          (e ||=
            ((e = t.displayName || t.name || ``),
            e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case Ha:
        return ((t = e.displayName || null), t === null ? cn(e.type) || `Memo` : t);
      case Ua:
        ((t = e._payload), (e = e._init));
        try {
          return cn(e(t));
        } catch {}
    }
  return null;
}
function ln(e, t) {
  if (((e = e.contextTypes), !e)) return Ya;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function un(e, t) {
  if (e !== t) {
    ((e.context._currentValue = e.parentValue), (e = e.parent));
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(I(401));
    } else {
      if (n === null) throw Error(I(401));
      un(e, n);
    }
    t.context._currentValue = t.value;
  }
}
function dn(e) {
  ((e.context._currentValue = e.parentValue), (e = e.parent), e !== null && dn(e));
}
function fn(e) {
  var t = e.parent;
  (t !== null && fn(t), (e.context._currentValue = e.value));
}
function pn(e, t) {
  if (((e.context._currentValue = e.parentValue), (e = e.parent), e === null)) throw Error(I(402));
  e.depth === t.depth ? un(e, t) : pn(e, t);
}
function mn(e, t) {
  var n = t.parent;
  if (n === null) throw Error(I(402));
  (e.depth === n.depth ? un(e, n) : mn(e, n), (t.context._currentValue = t.value));
}
function hn(e) {
  var t = Xa;
  t !== e &&
    (t === null
      ? fn(e)
      : e === null
        ? dn(t)
        : t.depth === e.depth
          ? un(t, e)
          : t.depth > e.depth
            ? pn(t, e)
            : mn(t, e),
    (Xa = e));
}
function gn(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  ((e.updater = Za), (e.props = n), (e.state = i));
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` && ((o = o(n, i)), (i = o == null ? i : ja({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(),
      t !== e.state && Za.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (((t = a.queue), (o = a.replace), (a.queue = null), (a.replace = !1), o && t.length === 1))
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = +!!o; o < t.length; o++) {
          var s = t[o];
          ((s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = ja({}, a, s))) : ja(a, s)));
        }
        e.state = a;
      }
    else a.queue = null;
}
function _n(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - $a(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var a = 32 - $a(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - $a(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function vn(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((eo(e) / to) | 0)) | 0);
}
function yn(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function bn() {
  if (ro === null) throw Error(I(321));
  return ro;
}
function xn() {
  if (0 < uo) throw Error(I(312));
  return { memoizedState: null, queue: null, next: null };
}
function Sn() {
  return (
    Q === null
      ? ao === null
        ? ((oo = !1), (ao = Q = xn()))
        : ((oo = !0), (Q = ao))
      : Q.next === null
        ? ((oo = !1), (Q = Q.next = xn()))
        : ((oo = !0), (Q = Q.next)),
    Q
  );
}
function Cn() {
  ((io = ro = null), (so = !1), (ao = null), (uo = 0), (Q = lo = null));
}
function wn(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function Tn(e, t, n) {
  if (((ro = bn()), (Q = Sn()), oo)) {
    var r = Q.queue;
    if (((t = r.dispatch), lo !== null && ((n = lo.get(r)), n !== void 0))) {
      (lo.delete(r), (r = Q.memoizedState));
      do ((r = e(r, n.action)), (n = n.next));
      while (n !== null);
      return ((Q.memoizedState = r), [r, t]);
    }
    return [Q.memoizedState, t];
  }
  return (
    (e = e === wn ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    (Q.memoizedState = e),
    (e = Q.queue = { last: null, dispatch: null }),
    (e = e.dispatch = Dn.bind(null, ro, e)),
    [Q.memoizedState, e]
  );
}
function En(e, t) {
  if (((ro = bn()), (Q = Sn()), (t = t === void 0 ? null : t), Q !== null)) {
    var n = Q.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!no(t[i], r[i])) {
            r = !1;
            break e;
          }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return ((e = e()), (Q.memoizedState = [e, t]), e);
}
function Dn(e, t, n) {
  if (25 <= uo) throw Error(I(301));
  if (e === ro)
    if (
      ((so = !0),
      (e = { action: n, next: null }),
      lo === null && (lo = new Map()),
      (n = lo.get(t)),
      n === void 0)
    )
      lo.set(t, e);
    else {
      for (t = n; t.next !== null; ) t = t.next;
      t.next = e;
    }
}
function On() {
  throw Error(I(394));
}
function kn() {}
function An(e) {
  return (console.error(e), null);
}
function jn() {}
function Mn(e, t, n, r, i, a, o, s, c) {
  var l = [],
    u = new Set();
  return (
    (t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: r === void 0 ? 12800 : r,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: u,
      pingedTasks: l,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: i === void 0 ? An : i,
      onAllReady: a === void 0 ? jn : a,
      onShellReady: o === void 0 ? jn : o,
      onShellError: s === void 0 ? jn : s,
      onFatalError: c === void 0 ? jn : c,
    }),
    (n = Pn(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = Nn(t, e, null, n, u, Ya, null, Qa)),
    l.push(e),
    t
  );
}
function Nn(e, t, n, r, i, a, o, s) {
  (e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++);
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      (t.push(c), t.length === 1 && qn(e));
    },
    blockedBoundary: n,
    blockedSegment: r,
    abortSet: i,
    legacyContext: a,
    context: o,
    treeContext: s,
  };
  return (i.add(c), c);
}
function Pn(e, t, n, r, i, a) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: r,
    boundary: n,
    lastPushedText: i,
    textEmbedded: a,
  };
}
function Fn(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`
    );
  return e;
}
function In(e, t) {
  var n = e.onShellError;
  (n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), Ht(e.destination, t)));
}
function Ln(e, t, n, r, i) {
  for (ro = {}, io = t, co = 0, e = n(r, i); so; )
    ((so = !1), (co = 0), (uo += 1), (Q = null), (e = n(r, i)));
  return (Cn(), e);
}
function Rn(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(I(108, cn(r) || `Unknown`, s));
      r = ja({}, o, n);
    }
    ((t.legacyContext = r), W(e, t, i), (t.legacyContext = o));
  } else W(e, t, i);
}
function zn(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = ja({}, t)), (e = e.defaultProps), e)) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Bn(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = ln(n, t.legacyContext);
      var a = n.contextType;
      ((a = new n(r, typeof a == `object` && a ? a._currentValue : i)),
        gn(a, n, r, i),
        Rn(e, t, a, n));
    } else {
      ((a = ln(n, t.legacyContext)), (i = Ln(e, t, n, r, a)));
      var o = co !== 0;
      if (typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0)
        (gn(i, n, r, a), Rn(e, t, i, n));
      else if (o) {
        ((r = t.treeContext), (t.treeContext = _n(r, 1, 0)));
        try {
          W(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else W(e, t, i);
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case Ka:
        case Ga:
        case Fa:
        case Ia:
        case Pa:
          W(e, t, r.children);
          return;
        case Va:
          W(e, t, r.children);
          return;
        case Wa:
          throw Error(I(343));
        case Ba:
          e: {
            ((n = t.blockedBoundary),
              (i = t.blockedSegment),
              (a = r.fallback),
              (r = r.children),
              (o = new Set()));
            var s = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: o,
                errorDigest: null,
              },
              c = Pn(e, i.chunks.length, s, i.formatContext, !1, !1);
            (i.children.push(c), (i.lastPushedText = !1));
            var l = Pn(e, 0, null, i.formatContext, !1, !1);
            ((l.parentFlushed = !0), (t.blockedBoundary = s), (t.blockedSegment = l));
            try {
              if (
                (Hn(e, t, r),
                l.lastPushedText && l.textEmbedded && l.chunks.push(xi),
                (l.status = 1),
                Gn(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              ((l.status = 4), (s.forceClientRender = !0), (s.errorDigest = Fn(e, t)));
            } finally {
              ((t.blockedBoundary = n), (t.blockedSegment = i));
            }
            ((t = Nn(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t));
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case za:
            if (((r = Ln(e, t, n.render, r, i)), co !== 0)) {
              ((n = t.treeContext), (t.treeContext = _n(n, 1, 0)));
              try {
                W(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else W(e, t, r);
            return;
          case Ha:
            ((n = n.type), (r = zn(n, r)), Bn(e, t, n, r, i));
            return;
          case La:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue),
              (n._currentValue = r),
              (o = Xa),
              (Xa = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              W(e, t, i),
              (e = Xa),
              e === null)
            )
              throw Error(I(403));
            ((r = e.parentValue),
              (e.context._currentValue = r === qa ? e.context._defaultValue : r),
              (e = Xa = e.parent),
              (t.context = e));
            return;
          case Ra:
            ((r = r.children), (r = r(n._currentValue)), W(e, t, r));
            return;
          case Ua:
            ((i = n._init), (n = i(n._payload)), (r = zn(n, r)), Bn(e, t, n, r, void 0));
            return;
        }
      throw Error(I(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = nn(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = Yt(o, n, r)),
      Hn(e, t, a),
      (i.formatContext = o),
      n)
    ) {
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `img`:
      case `input`:
      case `keygen`:
      case `link`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
        break;
      default:
        i.chunks.push(Li, z(n), Ri);
    }
    i.lastPushedText = !1;
  }
}
function W(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case Ma:
        Bn(e, t, n.type, n.props, n.ref);
        return;
      case Na:
        throw Error(I(257));
      case Ua:
        var r = n._init;
        ((n = r(n._payload)), W(e, t, n));
        return;
    }
    if (mi(n)) {
      Vn(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (Ja && n[Ja]) || n[`@@iterator`]), (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do (i.push(n.value), (n = r.next()));
        while (!n.done);
        Vn(e, t, i);
      }
      return;
    }
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        I(31, e === `[object Object]` ? `object with keys {` + Object.keys(n).join(`, `) + `}` : e)
      )
    );
  }
  typeof n == `string`
    ? ((r = t.blockedSegment),
      (r.lastPushedText = Xt(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = Xt(t.blockedSegment.chunks, `` + n, e.responseState, r.lastPushedText)));
}
function Vn(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = _n(a, r, i);
    try {
      Hn(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function Hn(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return W(e, t, n);
  } catch (c) {
    if ((Cn(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        hn(a),
        c
      );
    n = c;
    var o = t.blockedSegment,
      s = Pn(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    (o.children.push(s),
      (o.lastPushedText = !1),
      (e = Nn(
        e,
        t.node,
        t.blockedBoundary,
        s,
        t.abortSet,
        t.legacyContext,
        t.context,
        t.treeContext
      ).ping),
      n.then(e, e),
      (t.blockedSegment.formatContext = r),
      (t.legacyContext = i),
      (t.context = a),
      hn(a));
  }
}
function Un(e) {
  var t = e.blockedBoundary;
  ((e = e.blockedSegment), (e.status = 3), Kn(this, t, e));
}
function Wn(e, t, n) {
  var r = e.blockedBoundary;
  ((e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 && ((t.status = 2), t.destination !== null && t.destination.close()))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(I(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
          return Wn(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r())));
}
function Gn(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    ((n.id = t.id), (n.parentFlushed = !0), n.status === 1 && Gn(e, n));
  } else e.completedSegments.push(t);
}
function Kn(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(I(389));
      e.completedRootSegment = n;
    }
    (e.pendingRootTasks--,
      e.pendingRootTasks === 0 && ((e.onShellError = jn), (t = e.onShellReady), t()));
  } else
    (t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && Gn(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(Un, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (Gn(t, n),
            t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t))));
  (e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e()));
}
function qn(e) {
  if (e.status !== 2) {
    var t = Xa,
      n = mo.current;
    mo.current = fo;
    var r = po;
    po = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          hn(o.context);
          try {
            (W(s, o, o.node),
              c.lastPushedText && c.textEmbedded && c.chunks.push(xi),
              o.abortSet.delete(o),
              (c.status = 1),
              Kn(s, o.blockedBoundary, c));
          } catch (e) {
            if ((Cn(), typeof e == `object` && e && typeof e.then == `function`)) {
              var l = o.ping;
              e.then(l, l);
            } else {
              (o.abortSet.delete(o), (c.status = 4));
              var u = o.blockedBoundary,
                d = e,
                f = Fn(s, d);
              if (
                (u === null
                  ? In(s, d)
                  : (u.pendingTasks--,
                    u.forceClientRender ||
                      ((u.forceClientRender = !0),
                      (u.errorDigest = f),
                      u.parentFlushed && s.clientRenderedBoundaries.push(u))),
                s.allPendingTasks--,
                s.allPendingTasks === 0)
              ) {
                var p = s.onAllReady;
                p();
              }
            }
          }
        }
      }
      (a.splice(0, i), e.destination !== null && $n(e, e.destination));
    } catch (t) {
      (Fn(e, t), In(e, t));
    } finally {
      ((po = r), (mo.current = n), n === fo && hn(t));
    }
  }
}
function Jn(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        L(t, zi),
        L(t, e.placeholderPrefix),
        (e = z(r.toString(16))),
        L(t, e),
        R(t, Bi)
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) L(t, r[a]);
        i = Yn(e, t, i);
      }
      for (; a < r.length - 1; a++) L(t, r[a]);
      return (a < r.length && (i = R(t, r[a])), i);
    default:
      throw Error(I(390));
  }
}
function Yn(e, t, n) {
  var r = n.boundary;
  if (r === null) return Jn(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    ((r = r.errorDigest),
      R(t, Wi),
      L(t, Ki),
      r && (L(t, Ji), L(t, z(H(r))), L(t, qi)),
      R(t, Yi),
      Jn(e, t, n));
  else if (0 < r.pendingTasks) {
    ((r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r));
    var i = e.responseState,
      a = i.nextSuspenseID++;
    ((i = B(i.boundaryPrefix + a.toString(16))),
      (r = r.id = i),
      rn(t, e.responseState, r),
      Jn(e, t, n));
  } else if (r.byteSize > e.progressiveChunkSize)
    ((r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      rn(t, e.responseState, r.id),
      Jn(e, t, n));
  else {
    if ((R(t, Vi), (n = r.completedSegments), n.length !== 1)) throw Error(I(391));
    Yn(e, t, n[0]);
  }
  return R(t, Gi);
}
function Xn(e, t, n) {
  return (an(t, e.responseState, n.formatContext, n.id), Yn(e, t, n), on(t, n.formatContext));
}
function Zn(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) Qn(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    L(t, e.startInlineScript),
    e.sentCompleteBoundaryFunction ? L(t, Sa) : ((e.sentCompleteBoundaryFunction = !0), L(t, xa)),
    r === null)
  )
    throw Error(I(395));
  return ((n = z(n.toString(16))), L(t, r), L(t, Ca), L(t, e.segmentPrefix), L(t, n), R(t, wa));
}
function Qn(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(I(392));
    return Xn(e, t, r);
  }
  return (
    Xn(e, t, r),
    (e = e.responseState),
    L(t, e.startInlineScript),
    e.sentCompleteSegmentFunction ? L(t, va) : ((e.sentCompleteSegmentFunction = !0), L(t, _a)),
    L(t, e.segmentPrefix),
    (i = z(i.toString(16))),
    L(t, i),
    L(t, ya),
    L(t, e.placeholderPrefix),
    L(t, i),
    R(t, ba)
  );
}
function $n(e, t) {
  ((J = new Uint8Array(512)), (Y = 0));
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      (Yn(e, t, n), (e.completedRootSegment = null));
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) L(t, r[n]);
      n < r.length && R(t, r[n]);
    }
    var i,
      a = e.clientRenderedBoundaries;
    for (i = 0; i < a.length; i++) {
      var o = a[i];
      r = t;
      var s = e.responseState,
        c = o.id,
        l = o.errorDigest,
        u = o.errorMessage,
        d = o.errorComponentStack;
      if (
        (L(r, s.startInlineScript),
        s.sentClientRenderFunction ? L(r, Ea) : ((s.sentClientRenderFunction = !0), L(r, Ta)),
        c === null)
      )
        throw Error(I(395));
      if (
        (L(r, c),
        L(r, Da),
        (l || u || d) && (L(r, ka), L(r, z(sn(l || ``)))),
        (u || d) && (L(r, ka), L(r, z(sn(u || ``)))),
        d && (L(r, ka), L(r, z(sn(d)))),
        !R(r, Oa))
      ) {
        ((e.destination = null), i++, a.splice(0, i));
        return;
      }
    }
    a.splice(0, i);
    var f = e.completedBoundaries;
    for (i = 0; i < f.length; i++)
      if (!Zn(e, t, f[i])) {
        ((e.destination = null), i++, f.splice(0, i));
        return;
      }
    (f.splice(0, i), Vt(t), (J = new Uint8Array(512)), (Y = 0));
    var p = e.partialBoundaries;
    for (i = 0; i < p.length; i++) {
      var m = p[i];
      e: {
        ((a = e), (o = t));
        var h = m.completedSegments;
        for (s = 0; s < h.length; s++)
          if (!Qn(a, o, m, h[s])) {
            (s++, h.splice(0, s));
            var g = !1;
            break e;
          }
        (h.splice(0, s), (g = !0));
      }
      if (!g) {
        ((e.destination = null), i++, p.splice(0, i));
        return;
      }
    }
    p.splice(0, i);
    var _ = e.completedBoundaries;
    for (i = 0; i < _.length; i++)
      if (!Zn(e, t, _[i])) {
        ((e.destination = null), i++, _.splice(0, i));
        return;
      }
    _.splice(0, i);
  } finally {
    (Vt(t),
      e.allPendingTasks === 0 &&
        e.pingedTasks.length === 0 &&
        e.clientRenderedBoundaries.length === 0 &&
        e.completedBoundaries.length === 0 &&
        t.close());
  }
}
function er(e, t) {
  try {
    var n = e.abortableTasks;
    (n.forEach(function (n) {
      return Wn(n, e, t);
    }),
      n.clear(),
      e.destination !== null && $n(e, e.destination));
  } catch (t) {
    (Fn(e, t), In(e, t));
  }
}
var tr,
  nr,
  rr,
  G,
  ir,
  ar,
  or,
  K,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  q,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  J,
  Y,
  ii,
  X,
  ai,
  oi,
  si,
  Z,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za,
  Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro,
  io,
  ao,
  Q,
  oo,
  so,
  co,
  lo,
  uo,
  fo,
  po,
  mo,
  $,
  ho,
  go,
  _o,
  vo = t(() => {
    (g(),
      (tr = `default` in r ? _ : r),
      (nr = {}),
      (rr = tr),
      (G = Object.prototype.hasOwnProperty),
      (ir =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (ar = {}),
      (or = {}),
      (K = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          K[e] = new M(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        K[t] = new M(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (e) {
        K[e] = new M(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(
        function (e) {
          K[e] = new M(e, 2, !1, e, null, !1, !1);
        }
      ),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          K[e] = new M(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        K[e] = new M(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        K[e] = new M(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        K[e] = new M(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        K[e] = new M(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (sr = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(sr, je);
          K[t] = new M(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(sr, je);
          K[t] = new M(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(sr, je);
        K[t] = new M(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1);
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        K[e] = new M(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (K.xlinkHref = new M(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        K[e] = new M(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (cr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      }),
      (lr = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(cr).forEach(function (e) {
        lr.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (cr[t] = cr[e]));
        });
      }),
      (ur = /["'&<>]/),
      (dr = /([A-Z])/g),
      (fr = /^ms-/),
      (pr = Array.isArray),
      (mr = new Map()),
      (hr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (gr = new Map()),
      (_r = /[<\u2028\u2029]/g),
      (vr = Object.assign),
      (yr = Symbol.for(`react.element`)),
      (br = Symbol.for(`react.portal`)),
      (xr = Symbol.for(`react.fragment`)),
      (Sr = Symbol.for(`react.strict_mode`)),
      (Cr = Symbol.for(`react.profiler`)),
      (wr = Symbol.for(`react.provider`)),
      (Tr = Symbol.for(`react.context`)),
      (Er = Symbol.for(`react.forward_ref`)),
      (Dr = Symbol.for(`react.suspense`)),
      (Or = Symbol.for(`react.suspense_list`)),
      (kr = Symbol.for(`react.memo`)),
      (Ar = Symbol.for(`react.lazy`)),
      (jr = Symbol.for(`react.scope`)),
      (Mr = Symbol.for(`react.debug_trace_mode`)),
      (Nr = Symbol.for(`react.legacy_hidden`)),
      (Pr = Symbol.for(`react.default_value`)),
      (Fr = Symbol.iterator),
      (Ir = {}),
      (Lr = null),
      (Rr = {
        isMounted: function () {
          return !1;
        },
        enqueueSetState: function (e, t) {
          ((e = e._reactInternals), e.queue !== null && e.queue.push(t));
        },
        enqueueReplaceState: function (e, t) {
          ((e = e._reactInternals), (e.replace = !0), (e.queue = [t]));
        },
        enqueueForceUpdate: function () {},
      }),
      (zr = { id: 1, overflow: `` }),
      (Br = Math.clz32 ? Math.clz32 : nt),
      (Vr = Math.log),
      (Hr = Math.LN2),
      (Ur = typeof Object.is == `function` ? Object.is : rt),
      (Wr = null),
      (Gr = null),
      (Kr = null),
      (q = null),
      (qr = !1),
      (Jr = !1),
      (Yr = 0),
      (Xr = null),
      (Zr = 0),
      (Qr = {
        readContext: function (e) {
          return e._currentValue2;
        },
        useContext: function (e) {
          return (it(), e._currentValue2);
        },
        useMemo: ut,
        useReducer: lt,
        useRef: function (e) {
          ((Wr = it()), (q = ot()));
          var t = q.memoizedState;
          return t === null ? ((e = { current: e }), (q.memoizedState = e)) : t;
        },
        useState: function (e) {
          return lt(ct, e);
        },
        useInsertionEffect: pt,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return ut(function () {
            return e;
          }, t);
        },
        useImperativeHandle: pt,
        useEffect: pt,
        useDebugValue: pt,
        useDeferredValue: function (e) {
          return (it(), e);
        },
        useTransition: function () {
          return (it(), [!1, ft]);
        },
        useId: function () {
          var e = Gr.treeContext,
            t = e.overflow;
          ((e = e.id), (e = (e & ~(1 << (32 - Br(e) - 1))).toString(32) + t));
          var n = $r;
          if (n === null) throw Error(j(404));
          return (
            (t = Yr++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return (it(), t(e._source));
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(j(407));
          return n();
        },
      }),
      ($r = null),
      (ei = rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher),
      (nr.renderToNodeStream = function () {
        throw Error(j(207));
      }),
      (nr.renderToStaticMarkup = function (e, t) {
        return Bt(
          e,
          t,
          !0,
          `The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`
        );
      }),
      (nr.renderToStaticNodeStream = function () {
        throw Error(j(208));
      }),
      (nr.renderToString = function (e, t) {
        return Bt(
          e,
          t,
          !1,
          `The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`
        );
      }),
      (nr.version = `18.2.0`),
      (ti = `default` in r ? _ : r),
      (ni = {}),
      (ri = ti),
      (J = null),
      (Y = 0),
      (ii = new TextEncoder()),
      (X = Object.prototype.hasOwnProperty),
      (ai =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (oi = {}),
      (si = {}),
      (Z = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          Z[e] = new V(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        Z[t] = new V(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (e) {
        Z[e] = new V(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(
        function (e) {
          Z[e] = new V(e, 2, !1, e, null, !1, !1);
        }
      ),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          Z[e] = new V(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        Z[e] = new V(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        Z[e] = new V(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        Z[e] = new V(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        Z[e] = new V(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (ci = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(ci, Wt);
          Z[t] = new V(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(ci, Wt);
          Z[t] = new V(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(ci, Wt);
        Z[t] = new V(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1);
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        Z[e] = new V(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (Z.xlinkHref = new V(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        Z[e] = new V(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (li = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      }),
      (ui = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(li).forEach(function (e) {
        ui.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (li[t] = li[e]));
        });
      }),
      (di = /["'&<>]/),
      (fi = /([A-Z])/g),
      (pi = /^ms-/),
      (mi = Array.isArray),
      (hi = B(`<script>`)),
      (gi = B(`<\/script>`)),
      (_i = B(`<script src="`)),
      (vi = B(`<script type="module" src="`)),
      (yi = B(`" async=""><\/script>`)),
      (bi = /(<\/|<)(s)(cript)/gi),
      (xi = B(`<!-- -->`)),
      (Si = new Map()),
      (Ci = B(` style="`)),
      (wi = B(`:`)),
      (Ti = B(`;`)),
      (Ei = B(` `)),
      (Di = B(`="`)),
      (Oi = B(`"`)),
      (ki = B(`=""`)),
      (Ai = B(`>`)),
      (ji = B(`/>`)),
      (Mi = B(` selected=""`)),
      (Ni = B(`
`)),
      (Pi = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (Fi = new Map()),
      (Ii = B(`<!DOCTYPE html>`)),
      (Li = B(`</`)),
      (Ri = B(`>`)),
      (zi = B(`<template id="`)),
      (Bi = B(`"></template>`)),
      (Vi = B(`<!--$-->`)),
      (Hi = B(`<!--$?--><template id="`)),
      (Ui = B(`"></template>`)),
      (Wi = B(`<!--$!-->`)),
      (Gi = B(`<!--/$-->`)),
      (Ki = B(`<template`)),
      (qi = B(`"`)),
      (Ji = B(` data-dgst="`)),
      B(` data-msg="`),
      B(` data-stck="`),
      (Yi = B(`></template>`)),
      (Xi = B(`<div hidden id="`)),
      (Zi = B(`">`)),
      (Qi = B(`</div>`)),
      ($i = B(`<svg aria-hidden="true" style="display:none" id="`)),
      (ea = B(`">`)),
      (ta = B(`</svg>`)),
      (na = B(`<math aria-hidden="true" style="display:none" id="`)),
      (ra = B(`">`)),
      (ia = B(`</math>`)),
      (aa = B(`<table hidden id="`)),
      (oa = B(`">`)),
      (sa = B(`</table>`)),
      (ca = B(`<table hidden><tbody id="`)),
      (la = B(`">`)),
      (ua = B(`</tbody></table>`)),
      (da = B(`<table hidden><tr id="`)),
      (fa = B(`">`)),
      (pa = B(`</tr></table>`)),
      (ma = B(`<table hidden><colgroup id="`)),
      (ha = B(`">`)),
      (ga = B(`</colgroup></table>`)),
      (_a = B(
        `function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`
      )),
      (va = B(`$RS("`)),
      (ya = B(`","`)),
      (ba = B(`")<\/script>`)),
      (xa = B(
        `function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`
      )),
      (Sa = B(`$RC("`)),
      (Ca = B(`","`)),
      (wa = B(`")<\/script>`)),
      (Ta = B(
        `function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`
      )),
      (Ea = B(`$RX("`)),
      (Da = B(`"`)),
      (Oa = B(`)<\/script>`)),
      (ka = B(`,`)),
      (Aa = /[<\u2028\u2029]/g),
      (ja = Object.assign),
      (Ma = Symbol.for(`react.element`)),
      (Na = Symbol.for(`react.portal`)),
      (Pa = Symbol.for(`react.fragment`)),
      (Fa = Symbol.for(`react.strict_mode`)),
      (Ia = Symbol.for(`react.profiler`)),
      (La = Symbol.for(`react.provider`)),
      (Ra = Symbol.for(`react.context`)),
      (za = Symbol.for(`react.forward_ref`)),
      (Ba = Symbol.for(`react.suspense`)),
      (Va = Symbol.for(`react.suspense_list`)),
      (Ha = Symbol.for(`react.memo`)),
      (Ua = Symbol.for(`react.lazy`)),
      (Wa = Symbol.for(`react.scope`)),
      (Ga = Symbol.for(`react.debug_trace_mode`)),
      (Ka = Symbol.for(`react.legacy_hidden`)),
      (qa = Symbol.for(`react.default_value`)),
      (Ja = Symbol.iterator),
      (Ya = {}),
      (Xa = null),
      (Za = {
        isMounted: function () {
          return !1;
        },
        enqueueSetState: function (e, t) {
          ((e = e._reactInternals), e.queue !== null && e.queue.push(t));
        },
        enqueueReplaceState: function (e, t) {
          ((e = e._reactInternals), (e.replace = !0), (e.queue = [t]));
        },
        enqueueForceUpdate: function () {},
      }),
      (Qa = { id: 1, overflow: `` }),
      ($a = Math.clz32 ? Math.clz32 : vn),
      (eo = Math.log),
      (to = Math.LN2),
      (no = typeof Object.is == `function` ? Object.is : yn),
      (ro = null),
      (io = null),
      (ao = null),
      (Q = null),
      (oo = !1),
      (so = !1),
      (co = 0),
      (lo = null),
      (uo = 0),
      (fo = {
        readContext: function (e) {
          return e._currentValue;
        },
        useContext: function (e) {
          return (bn(), e._currentValue);
        },
        useMemo: En,
        useReducer: Tn,
        useRef: function (e) {
          ((ro = bn()), (Q = Sn()));
          var t = Q.memoizedState;
          return t === null ? ((e = { current: e }), (Q.memoizedState = e)) : t;
        },
        useState: function (e) {
          return Tn(wn, e);
        },
        useInsertionEffect: kn,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return En(function () {
            return e;
          }, t);
        },
        useImperativeHandle: kn,
        useEffect: kn,
        useDebugValue: kn,
        useDeferredValue: function (e) {
          return (bn(), e);
        },
        useTransition: function () {
          return (bn(), [!1, On]);
        },
        useId: function () {
          var e = io.treeContext,
            t = e.overflow;
          ((e = e.id), (e = (e & ~(1 << (32 - $a(e) - 1))).toString(32) + t));
          var n = po;
          if (n === null) throw Error(I(404));
          return (
            (t = co++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return (bn(), t(e._source));
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(I(407));
          return n();
        },
      }),
      (po = null),
      (mo = ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher),
      (ni.renderToReadableStream = function (e, t) {
        return new Promise(function (n, r) {
          var i,
            a,
            o = new Promise(function (e, t) {
              ((a = e), (i = t));
            }),
            s = Mn(
              e,
              Kt(
                t ? t.identifierPrefix : void 0,
                t ? t.nonce : void 0,
                t ? t.bootstrapScriptContent : void 0,
                t ? t.bootstrapScripts : void 0,
                t ? t.bootstrapModules : void 0
              ),
              Jt(t ? t.namespaceURI : void 0),
              t ? t.progressiveChunkSize : void 0,
              t ? t.onError : void 0,
              a,
              function () {
                var e = new ReadableStream(
                  {
                    type: `bytes`,
                    pull: function (e) {
                      if (s.status === 1) ((s.status = 2), Ht(e, s.fatalError));
                      else if (s.status !== 2 && s.destination === null) {
                        s.destination = e;
                        try {
                          $n(s, e);
                        } catch (e) {
                          (Fn(s, e), In(s, e));
                        }
                      }
                    },
                    cancel: function () {
                      er(s);
                    },
                  },
                  { highWaterMark: 0 }
                );
                ((e.allReady = o), n(e));
              },
              function (e) {
                (o.catch(function () {}), r(e));
              },
              i
            );
          if (t && t.signal) {
            var c = t.signal,
              l = function () {
                (er(s, c.reason), c.removeEventListener(`abort`, l));
              };
            c.addEventListener(`abort`, l);
          }
          qn(s);
        });
      }),
      (ni.version = `18.2.0`),
      ($ = {}),
      (ho = nr),
      (go = ni),
      ($.version = ho.version),
      ($.renderToString = ho.renderToString),
      ($.renderToStaticMarkup = ho.renderToStaticMarkup),
      ($.renderToNodeStream = ho.renderToNodeStream),
      ($.renderToStaticNodeStream = ho.renderToStaticNodeStream),
      ($.renderToReadableStream = go.renderToReadableStream),
      $.version,
      $.renderToString,
      $.renderToStaticMarkup,
      $.renderToNodeStream,
      $.renderToStaticNodeStream,
      (_o = $.renderToReadableStream));
  }),
  yo,
  bo,
  xo,
  So = t(() => {
    (x(),
      oe.loadFonts([
        `GF;IBM Plex Sans-700`,
        `Inter-Black`,
        `Inter-BlackItalic`,
        `Inter-BoldItalic`,
      ]),
      (yo = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `IBM Plex Sans`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `IBM Plex Sans`,
              url: `../../assets/fonts/zYXGKVElMYYaJe8bpLHnCwDKr932-G7dytD-Dmu1swZSAXcomDVmadSDDV5zBaI5loa26g.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/X5hj6qzcHUYv7h1390c8Rhm6550.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cugnVhSraaRyANCaUtI5FV17wk.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/5HcVoGak8k5agFJSaKa4floXVu0.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/rZ5DdENNqIdFTIyQQiP5isO7M.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/P2Bw01CtL0b9wqygO0sSVogWbo.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/3ZmXbBKToJifDV9gwcifVd1tEY.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/gcnfba68tfm7qAyrWRCf9r34jg.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (bo = [
        `.framer-yRdsW .framer-styles-preset-g258t7:not(.rich-text-wrapper), .framer-yRdsW .framer-styles-preset-g258t7.rich-text-wrapper h2 { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (xo = `framer-yRdsW`));
  }),
  Co,
  wo,
  To,
  Eo = t(() => {
    (x(),
      oe.loadFonts([]),
      (Co = [{ explicitInter: !0, fonts: [] }]),
      (wo = [
        `.framer-PHEt1 .framer-styles-preset-p5rp4c:not(.rich-text-wrapper), .framer-PHEt1 .framer-styles-preset-p5rp4c.rich-text-wrapper a { --framer-link-hover-text-decoration: underline; --framer-link-text-color: var(--token-3b8e9512-fde0-4cd2-885b-f8f7b8e8b211, #5c5c5c); }`,
      ]),
      (To = `framer-PHEt1`));
  }),
  Do,
  Oo,
  ko,
  Ao = t(() => {
    (x(),
      oe.loadFonts([
        `GF;IBM Plex Sans-regular`,
        `GF;IBM Plex Sans-700`,
        `GF;IBM Plex Sans-700italic`,
        `GF;IBM Plex Sans-italic`,
      ]),
      (Do = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `IBM Plex Sans`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `IBM Plex Sans`,
              url: `../../assets/fonts/zYXGKVElMYYaJe8bpLHnCwDKr932-G7dytD-Dmu1swZSAXcomDVmadSD6llzBaI5loa26g.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `IBM Plex Sans`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `IBM Plex Sans`,
              url: `../../assets/fonts/zYXGKVElMYYaJe8bpLHnCwDKr932-G7dytD-Dmu1swZSAXcomDVmadSDDV5zBaI5loa26g.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `IBM Plex Sans`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `IBM Plex Sans`,
              url: `https://fonts.gstatic.com/s/ibmplexsans/v23/zYXEKVElMYYaJe8bpLHnCwDKhdTEG46kmUZQCX598fQbM4jw8V78x9OWIhp8RKg4tIOm6vje.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `IBM Plex Sans`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `IBM Plex Sans`,
              url: `https://fonts.gstatic.com/s/ibmplexsans/v23/zYXEKVElMYYaJe8bpLHnCwDKhdTEG46kmUZQCX598fQbM4jw8V78x9OWIhqbQ6g4tIOm6vje.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Oo = [
        `.framer-3Bf18 .framer-styles-preset-159ynhm:not(.rich-text-wrapper), .framer-3Bf18 .framer-styles-preset-159ynhm.rich-text-wrapper p { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (ko = `framer-3Bf18`));
  }),
  jo,
  Mo,
  No,
  Po,
  Fo,
  Io,
  Lo,
  Ro,
  zo,
  Bo,
  Vo,
  Ho,
  Uo,
  Wo,
  Go = t(() => {
    (m(),
      x(),
      ie(),
      g(),
      So(),
      Eo(),
      Ao(),
      (jo = {
        cuYBu6e1G: `(min-width: 1200px)`,
        e1EtI7_8U: `(min-width: 810px) and (max-width: 1199.98px)`,
        XrDA4C3Rc: `(max-width: 809.98px)`,
      }),
      (Mo = `framer-Ck5ZE`),
      (No = {
        cuYBu6e1G: `framer-v-v7zdi2`,
        e1EtI7_8U: `framer-v-19tkvcc`,
        XrDA4C3Rc: `framer-v-sri1x7`,
      }),
      (Po = {
        e1EtI7_8U: [
          `.framer-Ck5ZE .framer-y2sfv1 { padding: 0px 40px 0px 40px; width: 70%; }`,
          `.framer-Ck5ZE .framer-1573t9m { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 30px; justify-content: flex-start; }`,
          `.framer-Ck5ZE .framer-11jqmqu, .framer-Ck5ZE .framer-1cyjeds { align-content: flex-start; align-items: flex-start; }`,
        ],
        XrDA4C3Rc: [
          `.framer-Ck5ZE .framer-1afg16h { flex-direction: column; }`,
          `.framer-Ck5ZE .framer-y2sfv1 { padding: 0px 30px 0px 30px; width: 100%; }`,
          `.framer-Ck5ZE .framer-1573t9m { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 30px; justify-content: flex-start; }`,
          `.framer-Ck5ZE .framer-11jqmqu, .framer-Ck5ZE .framer-1cyjeds { align-content: flex-start; align-items: flex-start; }`,
        ],
      }),
      (Fo = Object.keys(Po)),
      (Io = { e1EtI7_8U: `.framer-19tkvcc-override`, XrDA4C3Rc: `.framer-sri1x7-override` }),
      (Lo = [
        `.framer-Ck5ZE.framer-1h7jsxy, .framer-Ck5ZE .framer-1h7jsxy { display: block; }`,
        `.framer-Ck5ZE.framer-v7zdi2 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ck5ZE .framer-1v4s85v { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-Ck5ZE .framer-1afg16h { align-content: flex-start; align-items: flex-start; background-color: var(--token-d292610c-87f6-4102-ac93-51fdf043bf78, #d9d9d9); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; order: 1001; overflow: var(--overflow-clip-fallback, clip); padding: 40px 0px 150px 0px; position: relative; width: 100%; }`,
        `.framer-Ck5ZE .framer-y2sfv1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 50px 0px 50px; position: relative; width: 700px; }`,
        `.framer-Ck5ZE .framer-85f8sr { --border-bottom-width: 4px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #d9d9d9); --border-left-width: 4px; --border-right-width: 4px; --border-style: dashed; --border-top-width: 4px; -webkit-filter: blur(0px); filter: blur(0px); flex: none; height: 2px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-Ck5ZE .framer-1tq4oyt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ck5ZE .framer-1573t9m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ck5ZE .framer-1i4ze0p { flex: none; height: 91px; overflow: visible; position: relative; width: auto; }`,
        `.framer-Ck5ZE .framer-miaxew { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-Ck5ZE .framer-11jqmqu, .framer-Ck5ZE .framer-1cyjeds { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-Ck5ZE .framer-155keu1, .framer-Ck5ZE .framer-17tn2c5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Ck5ZE .framer-siqev0, .framer-Ck5ZE .framer-cuizzz, .framer-Ck5ZE .framer-11koifa, .framer-Ck5ZE .framer-127wyjb { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        ...bo,
        ...Oo,
        ...wo,
        `.framer-Ck5ZE[data-border="true"]::after, .framer-Ck5ZE [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (Ro = {
        cuYBu6e1G: `(min-width: 1200px)`,
        e1EtI7_8U: `(min-width: 810px) and (max-width: 1199.98px)`,
        XrDA4C3Rc: `(max-width: 809.98px)`,
      }),
      (zo = { Desktop: `cuYBu6e1G`, Phone: `XrDA4C3Rc`, Tablet: `e1EtI7_8U` }),
      (Bo = ({ value: e }) =>
        ce()
          ? null
          : p(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Vo = ({ enlaceArriba: e, enlaceContacto: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        gDUC70AIa: t ?? a.gDUC70AIa,
        variant: zo[a.variant] ?? a.variant ?? `cuYBu6e1G`,
        ZCuoFUPLw: e ?? a.ZCuoFUPLw,
      })),
      (Ho = l(function (e, t) {
        let n = s(null),
          r = t ?? n,
          i = ee(),
          { activeLocale: a, setLocale: o } = ae(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: f,
            ZCuoFUPLw: m,
            gDUC70AIa: g,
            children: _,
            ...v
          } = Vo(e),
          [te, ne] = ue(f, jo, !1),
          ie = C(Mo, xo, ko, To);
        return (
          le({}),
          p(xe.Provider, {
            value: {
              activeVariantId: te,
              humanReadableVariantMap: zo,
              isLayoutTemplate: !0,
              primaryVariantId: `cuYBu6e1G`,
              variantClassNames: No,
            },
            children: h(re, {
              id: d ?? i,
              children: [
                p(Bo, { value: `:root body { background: none; }` }),
                h(y.div, {
                  ...v,
                  className: C(ie, `framer-v7zdi2`, u),
                  "data-layout-template": !0,
                  ref: r,
                  style: { ...l },
                  children: [
                    _,
                    p(`div`, { className: `framer-1v4s85v` }),
                    p(y.div, {
                      className: `framer-1afg16h`,
                      "data-framer-name": `Footer`,
                      children: h(`div`, {
                        className: `framer-y2sfv1`,
                        "data-framer-name": `Interior`,
                        children: [
                          p(`div`, {
                            className: `framer-85f8sr`,
                            "data-border": !0,
                            "data-framer-name": `Divisor`,
                          }),
                          p(`div`, {
                            className: `framer-1tq4oyt`,
                            "data-framer-name": `Footer`,
                            children: h(`div`, {
                              className: `framer-1573t9m`,
                              "data-framer-name": `Nombre & Descripción`,
                              children: [
                                p(pe, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 195,
                                    intrinsicWidth: 195,
                                    loading: S(1082),
                                    pixelHeight: 195,
                                    pixelWidth: 195,
                                    sizes: `91px`,
                                    src: `../../assets/images/FExrMSgd32GNBeSSLwHQXdXRNAU.gif`,
                                  },
                                  className: `framer-1i4ze0p`,
                                  fitImageDimension: `width`,
                                }),
                                h(`div`, {
                                  className: `framer-miaxew`,
                                  children: [
                                    h(`div`, {
                                      className: `framer-11jqmqu`,
                                      "data-framer-name": `Primer Opción`,
                                      children: [
                                        p(T, {
                                          __fromCanvasComponent: !0,
                                          children: p(c, {
                                            children: p(`h2`, {
                                              className: `framer-styles-preset-g258t7`,
                                              "data-styles-preset": `fw5vKbidS`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `end` },
                                              children: `Me`,
                                            }),
                                          }),
                                          className: `framer-155keu1`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        p(T, {
                                          __fromCanvasComponent: !0,
                                          children: p(c, {
                                            children: p(`p`, {
                                              className: `framer-styles-preset-159ynhm`,
                                              "data-styles-preset": `Q9AHy1iJd`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `end` },
                                              children: p(Ee, {
                                                href: g,
                                                motionChild: !0,
                                                nodeId: `fIu6qIGSY`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `EB0w5Phyi`,
                                                smoothScroll: !0,
                                                children: p(y.a, {
                                                  className: `framer-styles-preset-p5rp4c`,
                                                  "data-styles-preset": `OaiCFSM3A`,
                                                  children: `Contact`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-siqev0`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        p(T, {
                                          __fromCanvasComponent: !0,
                                          children: p(c, {
                                            children: p(`p`, {
                                              className: `framer-styles-preset-159ynhm`,
                                              "data-styles-preset": `Q9AHy1iJd`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `end` },
                                              children: p(Ee, {
                                                href: `https://casz.cc/casz.asc`,
                                                motionChild: !0,
                                                nodeId: `lMEvixaYH`,
                                                openInNewTab: !0,
                                                relValues: [],
                                                scopeId: `EB0w5Phyi`,
                                                smoothScroll: !1,
                                                children: p(y.a, {
                                                  className: `framer-styles-preset-p5rp4c`,
                                                  "data-styles-preset": `OaiCFSM3A`,
                                                  children: `PGP`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-cuizzz`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    h(`div`, {
                                      className: `framer-1cyjeds`,
                                      "data-framer-name": `Segunda Opción`,
                                      children: [
                                        p(T, {
                                          __fromCanvasComponent: !0,
                                          children: p(c, {
                                            children: p(`h2`, {
                                              className: `framer-styles-preset-g258t7`,
                                              "data-styles-preset": `fw5vKbidS`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `end` },
                                              children: `Site`,
                                            }),
                                          }),
                                          className: `framer-17tn2c5`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        p(T, {
                                          __fromCanvasComponent: !0,
                                          children: p(c, {
                                            children: p(`p`, {
                                              className: `framer-styles-preset-159ynhm`,
                                              "data-styles-preset": `Q9AHy1iJd`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `end` },
                                              children: p(Ee, {
                                                href: m,
                                                motionChild: !0,
                                                nodeId: `jAoeuJxYX`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `EB0w5Phyi`,
                                                smoothScroll: !0,
                                                children: p(y.a, {
                                                  className: `framer-styles-preset-p5rp4c`,
                                                  "data-styles-preset": `OaiCFSM3A`,
                                                  children: `Back to Top`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-11koifa`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        p(T, {
                                          __fromCanvasComponent: !0,
                                          children: p(c, {
                                            children: p(`p`, {
                                              className: `framer-styles-preset-159ynhm`,
                                              "data-styles-preset": `Q9AHy1iJd`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `end` },
                                              children: p(Ee, {
                                                href: `https://devforum.roblox.com/t/rotunnel-a-free-reliable-and-non-restrictive-roblox-proxy/3809046`,
                                                motionChild: !0,
                                                nodeId: `UPH1BwAwt`,
                                                openInNewTab: !0,
                                                relValues: [],
                                                scopeId: `EB0w5Phyi`,
                                                smoothScroll: !1,
                                                children: p(y.a, {
                                                  className: `framer-styles-preset-p5rp4c`,
                                                  "data-styles-preset": `OaiCFSM3A`,
                                                  children: `Rotunnel`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-127wyjb`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                p(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Uo = (e) =>
        e === ge.canvas || e === ge.export
          ? [
              ...Lo,
              ...Fo.flatMap((e) => {
                let t = Io[e];
                return Po[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...Lo, ...Fo.map((e) => `@media ${Ro[e]} { ${Po[e].join(` `)} }`)]),
      (Wo = D(Ho, Uo, `framer-Ck5ZE`)),
      (Wo.displayName = `Navbar y Footer`),
      (Wo.defaultProps = { height: 1e3, width: 1200 }),
      A(Wo, {
        ZCuoFUPLw: { title: `Enlace Arriba`, type: k.Link },
        gDUC70AIa: { title: `Enlace Contacto`, type: k.Link },
      }),
      Oe(
        Wo,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...E(yo),
          ...E(Do),
          ...E(Co),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ko,
  qo,
  Jo,
  Yo,
  Xo = t(() => {
    (m(),
      x(),
      g(),
      (Ko = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 2 13 C 0.895 13 0 12.105 0 11 L 0 2 C 0 0.895 0.895 0 2 0 L 16 0 C 17.105 0 18 0.895 18 2 L 18 11 C 18 12.105 17.105 13 16 13 Z" fill="transparent" height="13px" id="DIiTaH_8Z" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(3 4)" width="18px"/><path d="M 0 0 L 22 0" fill="transparent" height="1px" id="oCeSE_3nk" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(1 20)" width="22px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (qo = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (Jo = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (Yo = D(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...s } = Jo(e);
          return p(qo, {
            ...s,
            className: C(`framer-ja7Tl`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-ja7Tl { -webkit-mask: ${Ko}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${Ko}; width: 24px; }`,
        ],
        `framer-ja7Tl`
      )),
      (Yo.displayName = `Laptop`),
      A(Yo, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: k.Color },
      }));
  }),
  Zo,
  Qo,
  $o,
  es,
  ts,
  ns,
  rs,
  is = t(() => {
    (m(),
      x(),
      g(),
      (Zo = `var(--framer-icon-mask)`),
      (Qo = l(function (e, t) {
        return p(`svg`, { ...e, ref: t, children: e.children });
      })),
      ($o = y.create(Qo)),
      (es = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? p($o, { ...a, layoutId: r, ref: t, children: i })
          : p(`svg`, { ...a, ref: t, children: i });
      })),
      (ts = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 16 8 C 16 3.582 12.418 0 8 0 C 3.582 0 0 3.582 0 8" fill="transparent" height="8px" id="Uke_By6q9" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 13)" width="16px"/><path d="M 0 5 C 0 2.239 2.239 0 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 Z" fill="transparent" height="10px" id="gQ8CXwJSF" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(5 3)" width="10px"/><path d="M 4.45 16.3 C 4.45 12.93 2.45 9.8 0.45 8.3 C 1.785 7.298 2.532 5.696 2.442 4.03 C 2.352 2.363 1.436 0.851 0 0" fill="transparent" height="16.3px" id="yyxa9I4ZI" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(17.55 3.7)" width="4.449999999999999px"/></svg>`),
      (ns = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (rs = D(
        l(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = ns(e),
            l = _e(`2593868513`, ts);
          return p(es, {
            ...c,
            className: C(`framer-57l2F`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: p(`use`, { href: l }),
          });
        }),
        [
          `.framer-57l2F { -webkit-mask: ${Zo}; aspect-ratio: 1; display: block; mask: ${Zo}; width: 24px; }`,
        ],
        `framer-57l2F`
      )),
      (rs.displayName = `Users Round`),
      A(rs, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: k.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: k.Number,
        },
      }));
  }),
  as,
  os,
  ss,
  cs,
  ls,
  us,
  ds,
  fs = t(() => {
    (m(),
      x(),
      g(),
      (as = `var(--framer-icon-mask)`),
      (os = l(function (e, t) {
        return p(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ss = y.create(os)),
      (cs = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? p(ss, { ...a, layoutId: r, ref: t, children: i })
          : p(`svg`, { ...a, ref: t, children: i });
      })),
      (ls = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 5.516 C 0 3.238 1.404 1.196 3.532 0.381 C 5.659 -0.435 8.068 0.146 9.591 1.84 C 9.697 1.954 9.845 2.018 10 2.018 C 10.155 2.018 10.303 1.954 10.409 1.84 C 11.927 0.135 14.343 -0.453 16.475 0.364 C 18.607 1.181 20.011 3.233 20 5.516 C 20 7.806 18.5 9.516 17 11.016 L 11.508 16.329 C 11.131 16.762 10.586 17.012 10.012 17.016 C 9.438 17.02 8.89 16.776 8.508 16.348 L 3 11.016 C 1.5 9.516 0 7.816 0 5.516" fill="transparent" height="17.016074446131555px" id="BmMuopOcR" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 3.984)" width="20.00006277311737px"/></svg>`),
      (us = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (ds = D(
        l(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = us(e),
            l = _e(`79158532`, ls);
          return p(cs, {
            ...c,
            className: C(`framer-Q3GTQ`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: p(`use`, { href: l }),
          });
        }),
        [
          `.framer-Q3GTQ { -webkit-mask: ${as}; aspect-ratio: 1; display: block; mask: ${as}; width: 24px; }`,
        ],
        `framer-Q3GTQ`
      )),
      (ds.displayName = `Heart`),
      A(ds, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: k.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: k.Number,
        },
      }));
  }),
  ps,
  ms,
  hs,
  gs,
  _s = t(() => {
    (m(),
      x(),
      g(),
      (ps = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 2 16 C 0.895 16 0 15.105 0 14 L 0 2 C 0 0.895 0.895 0 2 0 L 14 0 C 15.105 0 16 0.895 16 2 L 16 14 C 16 15.105 15.105 16 14 16 Z" fill="transparent" height="16px" id="eptiDPkPu" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(4 4)" width="16px"/><path d="M 8 8 L 14 8 L 14 14 L 8 14 Z M 8 0 L 8 3 M 14 0 L 14 3 M 8 19 L 8 22 M 14 19 L 14 22 M 19 8 L 22 8 M 19 13 L 22 13 M 0 8 L 3 8 M 0 13 L 3 13" fill="transparent" height="22px" id="NyAqPhUGe" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(1 1)" width="22px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (ms = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (hs = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (gs = D(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...s } = hs(e);
          return p(ms, {
            ...s,
            className: C(`framer-J4Hkl`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-J4Hkl { -webkit-mask: ${ps}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${ps}; width: 24px; }`,
        ],
        `framer-J4Hkl`
      )),
      (gs.displayName = `Microchip`),
      A(gs, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: k.Color },
      }));
  }),
  vs,
  ys,
  bs,
  xs,
  Ss,
  Cs,
  ws,
  Ts = t(() => {
    (m(),
      x(),
      g(),
      (vs = `var(--framer-icon-mask)`),
      (ys = l(function (e, t) {
        return p(`svg`, { ...e, ref: t, children: e.children });
      })),
      (bs = y.create(ys)),
      (xs = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? p(bs, { ...a, layoutId: r, ref: t, children: i })
          : p(`svg`, { ...a, ref: t, children: i });
      })),
      (Ss = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 2 0 L 0 1.9" fill="transparent" height="1.9000000000000004px" id="O5Q5oOSBq" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 4.1)" width="2px"/><path d="M 2.9 0.8 L 0 0" fill="transparent" height="1px" id="bLUrnu6Xa" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2.2 7.2)" width="2.9px"/><path d="M 1.9 0 L 0 2" fill="transparent" height="2px" id="T6wJOe5uz" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4.1 12)" width="1.9000000000000004px"/><path d="M 0 0 L 0.8 2.9" fill="transparent" height="2.8999999999999995px" id="Vw0YQnHlx" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(7.2 2.2)" width="1px"/><path d="M 0.04 0.693 C -0.04 0.506 0.002 0.289 0.146 0.146 C 0.289 0.002 0.506 -0.04 0.693 0.04 L 11.693 4.54 C 11.893 4.622 12.018 4.825 12.001 5.041 C 11.984 5.258 11.83 5.438 11.619 5.489 L 7.27 6.53 C 6.904 6.617 6.618 6.903 6.53 7.269 L 5.49 11.619 C 5.44 11.831 5.259 11.986 5.042 12.003 C 4.825 12.02 4.622 11.894 4.54 11.693 Z" fill="transparent" height="12.004397001187371px" id="O22816X_Q" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8.997 8.997)" width="12.002845573328965px"/></svg>`),
      (Cs = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (ws = D(
        l(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = Cs(e),
            l = _e(`3028356511`, Ss);
          return p(xs, {
            ...c,
            className: C(`framer-Me9wI`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: p(`use`, { href: l }),
          });
        }),
        [
          `.framer-Me9wI { -webkit-mask: ${vs}; aspect-ratio: 1; display: block; mask: ${vs}; width: 24px; }`,
        ],
        `framer-Me9wI`
      )),
      (ws.displayName = `Mouse Pointer Click`),
      A(ws, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: k.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: k.Number,
        },
      }));
  }),
  Es,
  Ds,
  Os,
  ks,
  As = t(() => {
    (m(),
      x(),
      g(),
      (Es = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 3 L 14 3 M 7 0 L 7 3 M 11 3 C 9.667 8.333 6.667 12 2 14 M 4 7 C 5.333 9.667 7.333 11.667 10 13 M 11 20 L 16 9 L 21 20 M 19.6 17 L 12.4 17" fill="transparent" height="20px" id="h505cdQDo" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(2 2)" width="21px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Ds = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (Os = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (ks = D(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...s } = Os(e);
          return p(Ds, {
            ...s,
            className: C(`framer-IwKeG`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-IwKeG { -webkit-mask: ${Es}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${Es}; width: 24px; }`,
        ],
        `framer-IwKeG`
      )),
      (ks.displayName = `Language`),
      A(ks, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: k.Color },
      }));
  }),
  js,
  Ms,
  Ns,
  Ps,
  Fs = t(() => {
    (m(),
      x(),
      g(),
      (js = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 16 20 L 3 20 C 1.343 20 0 18.657 0 17 L 0 3 C 0 1.343 1.343 0 3 0 L 16 0 Z M 0 17 C 0 15.343 1.343 14 3 14 L 16 14 M 6 0 L 6 10 L 9 8 L 12 10 L 12 0 Z" fill="transparent" height="20px" id="LBecWNlNx" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(4 2)" width="16px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Ms = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (Ns = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (Ps = D(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...s } = Ns(e);
          return p(Ms, {
            ...s,
            className: C(`framer-UCoKw`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-UCoKw { -webkit-mask: ${js}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${js}; width: 24px; }`,
        ],
        `framer-UCoKw`
      )),
      (Ps.displayName = `Bookmark Alt`),
      A(Ps, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: k.Color },
      }));
  }),
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks,
  qs = t(() => {
    (m(),
      x(),
      ie(),
      g(),
      (Is = ve(y.div)),
      (Ls = `framer-zAvUx`),
      (Rs = { oHNNtoWf_: `framer-v-kusbr1` }),
      (zs = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Bs = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (Vs = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 2,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Hs = ({ value: e, children: t }) => {
        let r = n(te),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(te.Provider, { value: a, children: t });
      }),
      (Us = y.create(c)),
      (Ws = ({ height: e, hover: t, id: n, width: r, ...i }) => ({
        ...i,
        gBi0K1NLP: t ?? i.gBi0K1NLP,
      })),
      (Gs = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ks = D(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = ae();
          se();
          let { style: c, className: l, layoutId: u, variant: d, gBi0K1NLP: f, ...m } = Ws(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: te,
              gestureVariant: ne,
              isLoading: ie,
              setGestureState: b,
              setVariant: oe,
              variants: x,
            } = fe({ defaultVariant: `oHNNtoWf_`, ref: r, variant: d, variantClassNames: Rs }),
            S = Gs(e, x),
            { activeVariantCallback: ce, delay: le } = Se(g),
            ue = ce(async (...e) => {
              if ((b({ isHovered: !0 }), f && (await f(...e)) === !1)) return !1;
            }),
            w = C(Ls);
          return p(re, {
            id: u ?? i,
            children: p(Us, {
              animate: x,
              initial: !1,
              children: p(Hs, {
                value: zs,
                children: h(y.div, {
                  ...m,
                  ...te,
                  className: C(w, `framer-kusbr1`, l, _),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: S,
                  layoutId: `oHNNtoWf_`,
                  onMouseEnter: ue,
                  ref: r,
                  style: { ...c },
                  children: [
                    p(Is, {
                      __framer__loop: Vs,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopPauseOffscreen: !0,
                      __framer__loopRepeatDelay: 0.5,
                      __framer__loopRepeatType: `loop`,
                      __framer__loopTransition: Bs,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-1bf9uoy`,
                      layoutDependency: S,
                      layoutId: `BfhFVBk7h`,
                      style: {
                        backgroundColor: `rgba(0, 255, 72, 0.7)`,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      },
                    }),
                    p(y.div, {
                      className: `framer-18tpr3u`,
                      layoutDependency: S,
                      layoutId: `B5kkMsKp8`,
                      style: {
                        backgroundColor: `rgb(81, 219, 127)`,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-zAvUx.framer-1wnbdmg, .framer-zAvUx .framer-1wnbdmg { display: block; }`,
          `.framer-zAvUx.framer-kusbr1 { height: 20px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 20px; }`,
          `.framer-zAvUx .framer-1bf9uoy, .framer-zAvUx .framer-18tpr3u { flex: none; height: 12px; left: calc(50.00000000000002% - 12px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 12px / 2); width: 12px; will-change: var(--framer-will-change-override, transform); }`,
        ],
        `framer-zAvUx`
      )),
      (Ks.displayName = `Pulso`),
      (Ks.defaultProps = { height: 20, width: 20 }),
      A(Ks, { gBi0K1NLP: { title: `Hover`, type: k.EventHandler } }),
      Oe(Ks, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  Js,
  Ys,
  Xs,
  Zs,
  Qs = t(() => {
    (m(),
      x(),
      g(),
      (Js = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 18 L 7.5 10.5 M 10.5 7.5 L 18 0 M 5 0 L 0 0 L 13 18 L 18 18 Z" fill="transparent" height="18px" id="KD49WOeur" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(3 3)" width="18px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Ys = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (Xs = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (Zs = D(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...s } = Xs(e);
          return p(Ys, {
            ...s,
            className: C(`framer-A2QNA`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-A2QNA { -webkit-mask: ${Js}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${Js}; width: 24px; }`,
        ],
        `framer-A2QNA`
      )),
      (Zs.displayName = `X`),
      A(Zs, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: k.Color },
      }));
  }),
  $s,
  ec,
  tc,
  nc,
  rc = t(() => {
    (m(),
      x(),
      g(),
      ($s = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0.5 C 0 0.224 0.224 0 0.5 0 C 0.776 0 1 0.224 1 0.5 C 1 0.776 0.776 1 0.5 1 C 0.224 1 0 0.776 0 0.5 Z" fill="transparent" height="1px" id="HKZu7q77F" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(7.5 15.5)" width="1px"/><path d="M 16.042 0 L 20.042 0 L 20.042 5 L 17.042 5 L 17.042 8 L 14.042 8 L 14.042 10 L 11.742 12.3 C 12.541 14.934 11.445 17.773 9.085 19.188 C 6.724 20.603 3.704 20.23 1.757 18.284 C -0.189 16.338 -0.561 13.318 0.854 10.957 C 2.269 8.596 5.108 7.501 7.742 8.3 Z" fill="transparent" height="20.041788789153657px" id="wvFTyAPjD" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(1.958 2)" width="20.041788789153653px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (ec = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (tc = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (nc = D(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...s } = tc(e);
          return p(ec, {
            ...s,
            className: C(`framer-N7j1z`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-N7j1z { -webkit-mask: ${$s}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${$s}; width: 24px; }`,
        ],
        `framer-N7j1z`
      )),
      (nc.displayName = `Key`),
      A(nc, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: k.Color },
      }));
  }),
  ic,
  ac,
  oc,
  sc,
  cc = t(() => {
    (m(),
      x(),
      g(),
      (ic = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 2 16 C 0.895 16 0 15.105 0 14 L 0 2 C 0 0.895 0.895 0 2 0 L 18 0 C 19.105 0 20 0.895 20 2 L 20 14 C 20 15.105 19.105 16 18 16 Z" fill="transparent" height="16px" id="ZF0shDL2X" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(2 4)" width="20px"/><path d="M 20 0 L 10 5 L 0 0" fill="transparent" height="5px" id="bcfRbPfHQ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(2 8)" width="20px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (ac = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (oc = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (sc = D(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...s } = oc(e);
          return p(ac, {
            ...s,
            className: C(`framer-uAH45`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-uAH45 { -webkit-mask: ${ic}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${ic}; width: 24px; }`,
        ],
        `framer-uAH45`
      )),
      (sc.displayName = `Envelope`),
      A(sc, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: k.Color },
      }));
  }),
  lc,
  uc,
  dc,
  fc,
  pc = t(() => {
    (m(),
      x(),
      g(),
      (lc = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 7 21 L 7 18 C 7 16.667 7.333 15.667 8 15 C 5.204 14.981 2.689 13.419 1.602 11.028 C 0.515 8.636 1.064 5.873 3 4 C 2.333 2.667 2.333 1.333 3 0 C 5 0 6.333 0.667 7 2 C 9.333 1.333 11.667 1.333 14 2 C 14.667 0.667 16 0 18 0 C 18.667 1.333 18.667 2.667 18 4 C 19.936 5.873 20.485 8.636 19.398 11.028 C 18.311 13.419 15.796 14.981 13 15 C 13.667 15.667 14 16.667 14 18 L 14 21 M 7 18 C 3 19 3 16 0 15" fill="transparent" height="21px" id="dcxGqZWkS" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(2 1)" width="19.949135305681963px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (uc = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (dc = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (fc = D(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...s } = dc(e);
          return p(uc, {
            ...s,
            className: C(`framer-OmnFp`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-OmnFp { -webkit-mask: ${lc}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${lc}; width: 24px; }`,
        ],
        `framer-OmnFp`
      )),
      (fc.displayName = `Github`),
      A(fc, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: k.Color },
      }));
  }),
  mc,
  hc,
  gc,
  _c = t(() => {
    (x(),
      oe.loadFonts([`GF;IBM Plex Sans-700`, `GF;IBM Plex Sans-700italic`]),
      (mc = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `IBM Plex Sans`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `IBM Plex Sans`,
              url: `../../assets/fonts/zYXGKVElMYYaJe8bpLHnCwDKr932-G7dytD-Dmu1swZSAXcomDVmadSDDV5zBaI5loa26g.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `IBM Plex Sans`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `IBM Plex Sans`,
              url: `https://fonts.gstatic.com/s/ibmplexsans/v23/zYXEKVElMYYaJe8bpLHnCwDKhdTEG46kmUZQCX598fQbM4jw8V78x9OWIhp8RKg4tIOm6vje.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (hc = [
        `.framer-Wyioo .framer-styles-preset-42z49n:not(.rich-text-wrapper), .framer-Wyioo .framer-styles-preset-42z49n.rich-text-wrapper h2 { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 25px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (gc = `framer-Wyioo`));
  });
function vc(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var yc,
  bc,
  xc,
  Sc,
  Cc,
  wc,
  Tc,
  Ec,
  Dc,
  Oc,
  kc,
  Ac,
  jc,
  Mc,
  Nc = t(() => {
    (m(),
      x(),
      ie(),
      g(),
      Qs(),
      rc(),
      cc(),
      pc(),
      Ao(),
      _c(),
      (yc = b(sc)),
      (bc = b(Zs)),
      (xc = b(fc)),
      (Sc = b(nc)),
      (Cc = [`RjV02RmXp`, `W1i25OXhn`]),
      (wc = `framer-Rmxgh`),
      (Tc = { RjV02RmXp: `framer-v-9iwc1b`, W1i25OXhn: `framer-v-1bpwkuw` }),
      (Ec = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (Dc = ({ value: e, children: t }) => {
        let r = n(te),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(te.Provider, { value: a, children: t });
      }),
      (Oc = { "Variant 1": `RjV02RmXp`, "Variant 2": `W1i25OXhn` }),
      (kc = y.create(c)),
      (Ac = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Oc[r.variant] ?? r.variant ?? `RjV02RmXp`,
      })),
      (jc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Mc = D(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = ae();
          se();
          let { style: l, className: u, layoutId: d, variant: f, ...m } = Ac(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: te,
              gestureVariant: ne,
              isLoading: ie,
              setGestureState: b,
              setVariant: oe,
              variants: x,
            } = fe({
              cycleOrder: Cc,
              defaultVariant: `RjV02RmXp`,
              ref: r,
              variant: f,
              variantClassNames: Tc,
            }),
            S = jc(e, x),
            { activeVariantCallback: ce, delay: le } = Se(g),
            ue = ce(async (...e) => {
              (b({ isPressed: !1 }), oe(`W1i25OXhn`));
            }),
            w = ce(async (...e) => {
              (b({ isPressed: !1 }), oe(`RjV02RmXp`));
            }),
            de = C(wc, gc, ko),
            pe = () => g === `W1i25OXhn`;
          return p(re, {
            id: d ?? i,
            children: p(kc, {
              animate: x,
              initial: !1,
              children: p(Dc, {
                value: Ec,
                children: p(y.div, {
                  ...m,
                  ...te,
                  className: C(de, `framer-9iwc1b`, u, _),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: S,
                  layoutId: `RjV02RmXp`,
                  onTap: ue,
                  ref: r,
                  style: { ...l },
                  ...vc({ W1i25OXhn: { "data-framer-name": `Variant 2`, onTap: w } }, g, ne),
                  children: p(y.div, {
                    className: `framer-f9zstw`,
                    "data-framer-name": `Contacto`,
                    layoutDependency: S,
                    layoutId: `XnT963C9x`,
                    children: p(y.div, {
                      className: `framer-73g42x`,
                      "data-border": !0,
                      "data-framer-name": `Tarjeta`,
                      layoutDependency: S,
                      layoutId: `JIFGJUgmo`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, rgb(217, 217, 217))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-74a21abb-ce20-4d02-81dc-502468462d7f, rgb(240, 240, 240))`,
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        boxShadow: `0px 0px 15px -10px var(--token-a81eb0b3-0303-4615-a8d4-302833bfff8d, rgb(217, 217, 217))`,
                      },
                      children: h(y.div, {
                        className: `framer-1lyr9xw`,
                        "data-border": !0,
                        "data-framer-name": `Contenido`,
                        layoutDependency: S,
                        layoutId: `KBLtd24Ec`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, rgb(240, 240, 240))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                          backgroundColor: `var(--token-d292610c-87f6-4102-ac93-51fdf043bf78, rgb(217, 217, 217))`,
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                        children: [
                          p(T, {
                            __fromCanvasComponent: !0,
                            children: p(c, {
                              children: p(y.h2, {
                                className: `framer-styles-preset-42z49n`,
                                "data-styles-preset": `qXsEpTAxV`,
                                dir: `auto`,
                                children: `Contact`,
                              }),
                            }),
                            className: `framer-1phxtxw`,
                            fonts: [`Inter`],
                            layoutDependency: S,
                            layoutId: `BHvWrBxkJ`,
                            style: {
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          pe() &&
                            h(y.div, {
                              className: `framer-10vpi6d`,
                              "data-framer-name": `Contactos`,
                              layoutDependency: S,
                              layoutId: `gyijEE0OI`,
                              children: [
                                pe() &&
                                  p(Ee, {
                                    href: `mailto:caszcc@disroot.org`,
                                    motionChild: !0,
                                    nodeId: `CLVicY6Y1`,
                                    openInNewTab: !0,
                                    scopeId: `YeHVgu8DQ`,
                                    children: h(y.a, {
                                      className: `framer-u9l3y framer-1sbwdno`,
                                      "data-framer-name": `Mail`,
                                      layoutDependency: S,
                                      layoutId: `CLVicY6Y1`,
                                      children: [
                                        p(sc, {
                                          animated: !0,
                                          className: `framer-1l97iv4`,
                                          layoutDependency: S,
                                          layoutId: `AdU2o0FXr`,
                                          style: {
                                            "--1df8v9o": `var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0))`,
                                          },
                                        }),
                                        p(T, {
                                          __fromCanvasComponent: !0,
                                          children: p(c, {
                                            children: p(y.p, {
                                              className: `framer-styles-preset-159ynhm`,
                                              "data-styles-preset": `Q9AHy1iJd`,
                                              dir: `auto`,
                                              children: `caszcc@disroot.org`,
                                            }),
                                          }),
                                          className: `framer-1wc2z5b`,
                                          fonts: [`Inter`],
                                          layoutDependency: S,
                                          layoutId: `X35yR_g10`,
                                          style: {
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                pe() &&
                                  p(Ee, {
                                    href: `https://x.com/Casz_CC`,
                                    motionChild: !0,
                                    nodeId: `iipHwcMOL`,
                                    openInNewTab: !0,
                                    scopeId: `YeHVgu8DQ`,
                                    children: h(y.a, {
                                      className: `framer-1ucesys framer-1sbwdno`,
                                      "data-framer-name": `X`,
                                      layoutDependency: S,
                                      layoutId: `iipHwcMOL`,
                                      children: [
                                        p(Zs, {
                                          animated: !0,
                                          className: `framer-kq0lr4`,
                                          layoutDependency: S,
                                          layoutId: `xDX4z3L2O`,
                                          style: {
                                            "--1df8v9o": `var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0))`,
                                          },
                                        }),
                                        p(T, {
                                          __fromCanvasComponent: !0,
                                          children: p(c, {
                                            children: p(y.p, {
                                              className: `framer-styles-preset-159ynhm`,
                                              "data-styles-preset": `Q9AHy1iJd`,
                                              dir: `auto`,
                                              children: `NotCasz`,
                                            }),
                                          }),
                                          className: `framer-4q8ulf`,
                                          fonts: [`Inter`],
                                          layoutDependency: S,
                                          layoutId: `DP081wNmH`,
                                          style: {
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                p(Ee, {
                                  href: `https://github.com/caszcc`,
                                  motionChild: !0,
                                  nodeId: `qR69KiYuF`,
                                  openInNewTab: !0,
                                  scopeId: `YeHVgu8DQ`,
                                  children: h(y.a, {
                                    className: `framer-1iv1fvw framer-1sbwdno`,
                                    "data-framer-name": `Github`,
                                    layoutDependency: S,
                                    layoutId: `qR69KiYuF`,
                                    children: [
                                      p(fc, {
                                        animated: !0,
                                        className: `framer-e8kuvy`,
                                        layoutDependency: S,
                                        layoutId: `qObADiU0e`,
                                        style: {
                                          "--1df8v9o": `var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0))`,
                                        },
                                      }),
                                      p(T, {
                                        __fromCanvasComponent: !0,
                                        children: p(c, {
                                          children: p(y.p, {
                                            className: `framer-styles-preset-159ynhm`,
                                            "data-styles-preset": `Q9AHy1iJd`,
                                            dir: `auto`,
                                            children: `caszcc`,
                                          }),
                                        }),
                                        className: `framer-dtv47y`,
                                        fonts: [`Inter`],
                                        layoutDependency: S,
                                        layoutId: `NRFqaWOAw`,
                                        style: {
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                }),
                                p(Ee, {
                                  href: `https://keyoxide.org/0207981C7FCB8557504DC3B6C4976427CAE41600`,
                                  motionChild: !0,
                                  nodeId: `YtIx4FdI5`,
                                  openInNewTab: !0,
                                  scopeId: `YeHVgu8DQ`,
                                  children: h(y.a, {
                                    className: `framer-1ohkb1n framer-1sbwdno`,
                                    "data-framer-name": `Keyoxide`,
                                    layoutDependency: S,
                                    layoutId: `YtIx4FdI5`,
                                    children: [
                                      p(nc, {
                                        animated: !0,
                                        className: `framer-1vuegfu`,
                                        layoutDependency: S,
                                        layoutId: `Xc5zDmaCL`,
                                        style: {
                                          "--1df8v9o": `var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0))`,
                                        },
                                      }),
                                      p(T, {
                                        __fromCanvasComponent: !0,
                                        children: p(c, {
                                          children: p(y.p, {
                                            className: `framer-styles-preset-159ynhm`,
                                            "data-styles-preset": `Q9AHy1iJd`,
                                            dir: `auto`,
                                            children: `casz`,
                                          }),
                                        }),
                                        className: `framer-1w1j7w4`,
                                        fonts: [`Inter`],
                                        layoutDependency: S,
                                        layoutId: `GfULm7akI`,
                                        style: {
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          pe() &&
                            p(y.div, {
                              className: `framer-pffi9x`,
                              "data-border": !0,
                              "data-framer-name": `Divisor`,
                              layoutDependency: S,
                              layoutId: `eZwoJ6NkY`,
                              style: {
                                "--border-bottom-width": `4px`,
                                "--border-color": `var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, rgb(217, 217, 217))`,
                                "--border-left-width": `4px`,
                                "--border-right-width": `4px`,
                                "--border-style": `dashed`,
                                "--border-top-width": `4px`,
                                filter: `blur(0px)`,
                                WebkitFilter: `blur(0px)`,
                              },
                            }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-Rmxgh.framer-1sbwdno, .framer-Rmxgh .framer-1sbwdno { display: block; }`,
          `.framer-Rmxgh.framer-9iwc1b { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 600px; }`,
          `.framer-Rmxgh .framer-f9zstw { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
          `.framer-Rmxgh .framer-73g42x { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 3px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Rmxgh .framer-1lyr9xw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 15px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Rmxgh .framer-1phxtxw { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Rmxgh .framer-10vpi6d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Rmxgh .framer-u9l3y, .framer-Rmxgh .framer-1ucesys, .framer-Rmxgh .framer-1iv1fvw, .framer-Rmxgh .framer-1ohkb1n { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
          `.framer-Rmxgh .framer-1l97iv4, .framer-Rmxgh .framer-kq0lr4, .framer-Rmxgh .framer-e8kuvy, .framer-Rmxgh .framer-1vuegfu { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 16px; }`,
          `.framer-Rmxgh .framer-1wc2z5b, .framer-Rmxgh .framer-4q8ulf, .framer-Rmxgh .framer-dtv47y, .framer-Rmxgh .framer-1w1j7w4 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Rmxgh .framer-pffi9x { flex: none; height: 2px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
          `.framer-Rmxgh.framer-v-1bpwkuw .framer-1lyr9xw { gap: 10px; }`,
          `.framer-Rmxgh.framer-v-1bpwkuw .framer-1phxtxw { order: 0; }`,
          `.framer-Rmxgh.framer-v-1bpwkuw .framer-10vpi6d { flex-direction: column; order: 2; }`,
          `.framer-Rmxgh.framer-v-1bpwkuw .framer-u9l3y, .framer-Rmxgh.framer-v-1bpwkuw .framer-1ucesys, .framer-Rmxgh.framer-v-1bpwkuw .framer-1iv1fvw, .framer-Rmxgh.framer-v-1bpwkuw .framer-1ohkb1n { flex: none; width: 100%; }`,
          `.framer-Rmxgh.framer-v-1bpwkuw .framer-pffi9x { order: 1; }`,
          ...hc,
          ...Oo,
          `.framer-Rmxgh[data-border="true"]::after, .framer-Rmxgh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Rmxgh`
      )),
      (Mc.displayName = `Tarjeta Contacto`),
      (Mc.defaultProps = { height: 71, width: 600 }),
      A(Mc, {
        variant: {
          options: [`RjV02RmXp`, `W1i25OXhn`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: k.Enum,
        },
      }),
      Oe(
        Mc,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...yc,
          ...bc,
          ...xc,
          ...Sc,
          ...E(mc),
          ...E(Do),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Pc() {
  let e = { ...Zc };
  nl.forEach((t) => {
    t(e);
  });
}
function Fc(e) {
  return (
    nl.add(e),
    e({ ...Zc }),
    () => {
      nl.delete(e);
    }
  );
}
function Ic() {
  return [...new Set(qc.map(Number).filter((e) => Number.isFinite(e) && e > 0))];
}
async function Lc() {
  if (el) return el;
  let e = Ic();
  if (e.length)
    return (
      (el = (async () => {
        try {
          let t = `${Jc}/v1/games?universeIds=${e.join(`,`)}`;
          console.log(`[Roblox Stats] Games →`, t);
          let n = await fetch(t, { method: `GET`, cache: `no-store` });
          if (!n.ok) throw Error(`HTTP ${n.status}`);
          let r = await n.json();
          if (!Array.isArray(r?.data)) throw Error(`Respuesta de games inválida`);
          let i = 0,
            a = 0;
          for (let e of r.data) ((i += Number(e.playing) || 0), (a += Number(e.visits) || 0));
          ((Zc = { ...Zc, players: i, visits: a }),
            (Qc = Date.now()),
            console.log(`[Roblox Stats] Games ✓`, { players: i, visits: a }),
            Pc());
        } catch (e) {
          console.error(`[Roblox Stats] Games ✗`, e);
        } finally {
          el = null;
        }
      })()),
      el
    );
}
function Rc(e) {
  let t =
      e?.favoritesCount ??
      e?.favorites ??
      e?.favoriteCount ??
      e?.data?.favoritesCount ??
      e?.data?.favorites ??
      e?.data?.favoriteCount,
    n = Number(t);
  if (!Number.isFinite(n) || n < 0)
    throw Error(`Respuesta de favoritos inv\xe1lida: ${JSON.stringify(e)}`);
  return n;
}
async function zc() {
  if (tl) return tl;
  let e = Ic();
  if (e.length)
    return (
      (tl = (async () => {
        try {
          console.log(`[Roblox Stats] Actualizando favoritos...`);
          let t = (
            await Promise.all(
              e.map(async (e) => {
                let t = `${Jc}/v1/games/${e}/favorites/count`;
                console.log(`[Roblox Stats] Favorites ${e} →`, t);
                let n = await fetch(t, { method: `GET`, cache: `no-store` });
                if (!n.ok) throw Error(`Favorites ${e}: HTTP ${n.status}`);
                let r = Rc(await n.json());
                return (console.log(`[Roblox Stats] Favorites ${e} ✓`, r), r);
              })
            )
          ).reduce((e, t) => e + t, 0);
          ((Zc = { ...Zc, favorites: t }),
            ($c = Date.now()),
            console.log(`[Roblox Stats] Favorites ✓ TOTAL:`, t),
            Pc());
        } catch (e) {
          console.error(`[Roblox Stats] Favorites ✗`, e);
        } finally {
          tl = null;
        }
      })()),
      tl
    );
}
function Bc() {
  let e = Date.now();
  (e - Qc >= Yc && Lc(), e - $c >= Xc && zc());
}
function Vc() {
  let [e, t] = i(Zc);
  return (
    o(() => {
      let e = Fc(t);
      Bc();
      let n = v.setInterval(Bc, 1e3);
      return () => {
        (e(), v.clearInterval(n));
      };
    }, []),
    e
  );
}
function Hc(e) {
  return e >= 1e9
    ? Uc(e / 1e9) + `B`
    : e >= 1e6
      ? Uc(e / 1e6) + `M`
      : e >= 1e3
        ? Uc(e / 1e3) + `K`
        : Math.round(e).toLocaleString(`en-US`);
}
function Uc(e) {
  return Math.round(e * 10) / 10 + ``;
}
function Wc(e) {
  return l((t, n) => {
    let r = Vc();
    return p(e, { ref: n, ...t, text: Hc(r.players) });
  });
}
function Gc(e) {
  return l((t, n) => {
    let r = Vc();
    return p(e, { ref: n, ...t, text: Hc(r.favorites) });
  });
}
function Kc(e) {
  return l((t, n) => {
    let r = Vc();
    return p(e, { ref: n, ...t, text: Hc(r.visits) });
  });
}
var qc,
  Jc,
  Yc,
  Xc,
  Zc,
  Qc,
  $c,
  el,
  tl,
  nl,
  rl = t(() => {
    (a(),
      m(),
      g(),
      (qc = [9947971638, 10000907222, 10526961308]),
      (Jc = `https://games.rotunnel.com`),
      (Yc = 1e4),
      (Xc = 3e5),
      (Zc = { players: 0, visits: 0, favorites: 0 }),
      (Qc = 0),
      ($c = 0),
      (el = null),
      (tl = null),
      (nl = new Set()));
  }),
  il,
  al,
  ol,
  sl = t(() => {
    (x(),
      oe.loadFonts([
        `GF;IBM Plex Sans-regular`,
        `GF;IBM Plex Sans-700`,
        `GF;IBM Plex Sans-700italic`,
        `GF;IBM Plex Sans-italic`,
      ]),
      (il = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `IBM Plex Sans`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `IBM Plex Sans`,
              url: `../../assets/fonts/zYXGKVElMYYaJe8bpLHnCwDKr932-G7dytD-Dmu1swZSAXcomDVmadSD6llzBaI5loa26g.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `IBM Plex Sans`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `IBM Plex Sans`,
              url: `../../assets/fonts/zYXGKVElMYYaJe8bpLHnCwDKr932-G7dytD-Dmu1swZSAXcomDVmadSDDV5zBaI5loa26g.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `IBM Plex Sans`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `IBM Plex Sans`,
              url: `https://fonts.gstatic.com/s/ibmplexsans/v23/zYXEKVElMYYaJe8bpLHnCwDKhdTEG46kmUZQCX598fQbM4jw8V78x9OWIhp8RKg4tIOm6vje.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `IBM Plex Sans`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `IBM Plex Sans`,
              url: `https://fonts.gstatic.com/s/ibmplexsans/v23/zYXEKVElMYYaJe8bpLHnCwDKhdTEG46kmUZQCX598fQbM4jw8V78x9OWIhqbQ6g4tIOm6vje.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (al = [
        `.framer-czCtn .framer-styles-preset-1k3mn7p:not(.rich-text-wrapper), .framer-czCtn .framer-styles-preset-1k3mn7p.rich-text-wrapper p { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (ol = `framer-czCtn`));
  }),
  cl,
  ll,
  ul,
  dl = t(() => {
    (x(),
      oe.loadFonts([`GF;IBM Plex Sans-700`, `GF;IBM Plex Sans-700italic`]),
      (cl = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `IBM Plex Sans`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `IBM Plex Sans`,
              url: `../../assets/fonts/zYXGKVElMYYaJe8bpLHnCwDKr932-G7dytD-Dmu1swZSAXcomDVmadSDDV5zBaI5loa26g.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `IBM Plex Sans`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `IBM Plex Sans`,
              url: `https://fonts.gstatic.com/s/ibmplexsans/v23/zYXEKVElMYYaJe8bpLHnCwDKhdTEG46kmUZQCX598fQbM4jw8V78x9OWIhp8RKg4tIOm6vje.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (ll = [
        `.framer-rvXCf .framer-styles-preset-g1hyeb:not(.rich-text-wrapper), .framer-rvXCf .framer-styles-preset-g1hyeb.rich-text-wrapper h1 { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (ul = `framer-rvXCf`));
  }),
  fl,
  pl,
  ml,
  hl = t(() => {
    (x(),
      oe.loadFonts([
        `FS;JetBrains Mono-regular`,
        `FS;JetBrains Mono-bold`,
        `FS;JetBrains Mono-bold italic`,
        `FS;JetBrains Mono-italic`,
      ]),
      (fl = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `JetBrains Mono`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `JetBrains Mono`,
              url: `../../assets/misc/EO5MKE3BUDOZN44BP4HDPXAJAC2BIMCD.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `JetBrains Mono`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `JetBrains Mono`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/BTOY6STFL42WXJYET4IAFJ4R4NWQMPYV/SIRJV64UEOICTYN5EECZFJJ3ML2D6HVV/ATU2C7QZBG7GCVXROP265OYM5E55WHMK.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `JetBrains Mono`,
              source: `fontshare`,
              style: `italic`,
              uiFamilyName: `JetBrains Mono`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/4UER7KOM5ELODXZSILS67WJ47ZOE75JQ/6CQXJGOZP6EVG2LPOOVWXH2KM6JHNSRY/UTZ3OSIQCH2DNRJBPY7UY3LB6YDOZNJX.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `JetBrains Mono`,
              source: `fontshare`,
              style: `italic`,
              uiFamilyName: `JetBrains Mono`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/4CLQH4JOZMAJ6BPWKUFRQYNRRCIRLEBP/3KY6UMEKQ554PCGWM3CWW3ONMSYQ3ELX/O32TDYA5Q7PAMBBEUNMO44BILZFPSQXN.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (pl = [
        `.framer-jzwTc .framer-styles-preset-xqflja:not(.rich-text-wrapper), .framer-jzwTc .framer-styles-preset-xqflja.rich-text-wrapper p { --framer-font-family: "JetBrains Mono", "JetBrains Mono Placeholder", sans-serif; --framer-font-family-bold: "JetBrains Mono", "JetBrains Mono Placeholder", sans-serif; --framer-font-family-bold-italic: "JetBrains Mono", "JetBrains Mono Placeholder", sans-serif; --framer-font-family-italic: "JetBrains Mono", "JetBrains Mono Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (ml = `framer-jzwTc`));
  });
function gl(e, t) {
  return {
    description: `casz.cc website`,
    favicon: `https://framerusercontent.com/assets/FExrMSgd32GNBeSSLwHQXdXRNAU.gif`,
    robots: `max-image-preview:large`,
    title: `casz's home`,
  };
}
var _l = t(() => {});
function vl(e, t) {
  return {
    breakpoints: [
      { hash: `72rtr7`, mediaQuery: `(min-width: 1200px)` },
      { hash: `1epxe3`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1d685co`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: gl(e, t).description,
    elements: { PpqI0Bzwt: `top`, yhfDy_p6a: `contact` },
    robots: `max-image-preview:large`,
    serializationId: `framer-1j7B1`,
    title: gl(e, t).title || `Home`,
    viewport: `width=device-width`,
  };
}
var yl,
  bl,
  xl = t(() => {
    (_l(),
      (yl = 1),
      (bl = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  Sl,
  Cl,
  wl,
  Tl,
  El,
  Dl,
  Ol,
  kl,
  Al,
  jl,
  Ml,
  Nl,
  Pl,
  Fl,
  Il,
  Ll,
  Rl,
  zl,
  Bl,
  Vl,
  Hl,
  Ul,
  Wl,
  Gl,
  Kl,
  ql,
  Jl,
  Yl,
  Xl,
  Zl = t(() => {
    (m(),
      x(),
      ie(),
      g(),
      Xo(),
      is(),
      fs(),
      _s(),
      Ts(),
      As(),
      Fs(),
      qs(),
      Nc(),
      rl(),
      sl(),
      dl(),
      So(),
      Ao(),
      _c(),
      hl(),
      xl(),
      (Sl = b(Ps)),
      (Cl = b(ks)),
      (wl = b(Yo)),
      (Tl = b(gs)),
      (El = me(y.div)),
      (Dl = b(Ks)),
      (Ol = b(rs)),
      (kl = Ce(T, { nodeId: `hBLBdV9G_`, override: Wc, scopeId: `augiA20Il` })),
      (Al = b(ds)),
      (jl = Ce(T, { nodeId: `G5zrCOGcZ`, override: Gc, scopeId: `augiA20Il` })),
      (Ml = b(ws)),
      (Nl = Ce(T, { nodeId: `r25NiESXt`, override: Kc, scopeId: `augiA20Il` })),
      (Pl = b(Mc)),
      (Fl = {
        nqsfvFaAc: `(max-width: 809.98px)`,
        r0rfOgam0: `(min-width: 810px) and (max-width: 1199.98px)`,
        WQLkyLRf1: `(min-width: 1200px)`,
      }),
      (Il = []),
      (Ll = `framer-1j7B1`),
      (Rl = {
        nqsfvFaAc: `framer-v-1d685co`,
        r0rfOgam0: `framer-v-1epxe3`,
        WQLkyLRf1: `framer-v-72rtr7`,
      }),
      (zl = (e, t, n) => (e && t ? `position` : n)),
      (Bl = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Vl = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Bl,
        x: 0,
        y: 10,
      }),
      (Hl = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Bl,
        x: 0,
        y: 0,
      }),
      (Ul = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      }),
      (Wl = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
        let [i, a] = Te({ blockDocumentScrolling: t, dismissWithEsc: r && n });
        return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
      }),
      (Gl = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Kl = { Desktop: `WQLkyLRf1`, Phone: `nqsfvFaAc`, Tablet: `r0rfOgam0` }),
      (ql = ({ value: e }) =>
        ce()
          ? null
          : p(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Jl = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Kl[r.variant] ?? r.variant ?? `WQLkyLRf1`,
      })),
      (Yl = D(
        l(function (e, t) {
          let r = s(null),
            i = t ?? r,
            a = ee(),
            { activeLocale: o, setLocale: l } = ae(),
            u = se(),
            { style: m, className: g, layoutId: _, variant: v, ...ie } = Jl(e);
          he(f(() => vl({}, o), [o]));
          let [b, oe] = ue(v, Fl, !1),
            { activeVariantCallback: x, delay: ce } = Se(void 0),
            fe = ({ overlay: e }) =>
              x(async (...t) => {
                e.show();
              }),
            me = C(Ll, ul, ko, ol, gc, ml, xo),
            ge = n(xe)?.isLayoutTemplate,
            _e = !!n(te)?.transition?.layout,
            E = zl(ge, _e),
            ve = be(`PpqI0Bzwt`),
            D = s(null),
            k = s(null),
            Ce = s(null),
            Te = be(`yhfDy_p6a`),
            Ee = s(null);
          return (
            le({}),
            p(xe.Provider, {
              value: {
                activeVariantId: b,
                humanReadableVariantMap: Kl,
                primaryVariantId: `WQLkyLRf1`,
                variantClassNames: Rl,
              },
              children: h(re, {
                id: _ ?? a,
                children: [
                  p(ql, { value: `html body { background: rgb(255, 255, 255); }` }),
                  p(y.div, {
                    ...ie,
                    className: C(me, `framer-72rtr7`, g),
                    ref: i,
                    style: { ...m },
                    children: p(y.div, {
                      className: `framer-tqpngz`,
                      "data-framer-name": `Principal`,
                      layout: E,
                      children: h(`div`, {
                        className: `framer-1kphyw6`,
                        "data-framer-name": `Interior`,
                        children: [
                          h(`div`, {
                            className: `framer-1b40kbg`,
                            "data-framer-name": `Sobre Mí`,
                            id: ve,
                            ref: D,
                            children: [
                              h(`div`, {
                                className: `framer-1f11fff`,
                                "data-framer-name": `Nombre & Descripción`,
                                children: [
                                  p(T, {
                                    __fromCanvasComponent: !0,
                                    children: p(c, {
                                      children: p(`h1`, {
                                        className: `framer-styles-preset-g1hyeb`,
                                        "data-styles-preset": `FgSnYgMsR`,
                                        dir: `auto`,
                                        children: `Hi, I'm Casz`,
                                      }),
                                    }),
                                    className: `framer-1ajptsa`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  p(T, {
                                    __fromCanvasComponent: !0,
                                    children: p(c, {
                                      children: p(`p`, {
                                        className: `framer-styles-preset-159ynhm`,
                                        "data-styles-preset": `Q9AHy1iJd`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `start` },
                                        children: `I'm a graphics designer on Roblox and a full-time systems engineering student from Colombia. I've contributed to games that have garnered more than 10 million visits (and counting).`,
                                      }),
                                    }),
                                    className: `framer-kggmwf`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              p(O, {
                                breakpoint: b,
                                overrides: {
                                  nqsfvFaAc: { columnMasonryLayoutEnabled: void 0 },
                                  r0rfOgam0: { columnMasonryLayoutEnabled: void 0 },
                                },
                                children: h(El, {
                                  className: `framer-1cftgkx`,
                                  columnMasonryLayoutEnabled: !0,
                                  "data-framer-name": `Logros`,
                                  parentIsDataRepeater: !1,
                                  rowGap: 10,
                                  trackCount: 2,
                                  children: [
                                    p(`div`, {
                                      className: `framer-ytdcj5`,
                                      "data-border": !0,
                                      "data-framer-name": `Escolares`,
                                      children: h(`div`, {
                                        className: `framer-qjn5ma`,
                                        "data-border": !0,
                                        "data-framer-name": `Contenido`,
                                        children: [
                                          p(Ps, {
                                            animated: !1,
                                            className: `framer-1ly86wb`,
                                            layoutId: `hSU8blPk8`,
                                            n2nHSaXfp: !0,
                                          }),
                                          h(`div`, {
                                            className: `framer-rjl782`,
                                            "data-framer-name": `Texto`,
                                            children: [
                                              p(T, {
                                                __fromCanvasComponent: !0,
                                                children: p(c, {
                                                  children: p(`p`, {
                                                    className: `framer-styles-preset-1k3mn7p`,
                                                    "data-styles-preset": `EvBl33G0D`,
                                                    dir: `auto`,
                                                    children: `• Systems Technician Bachelor`,
                                                  }),
                                                }),
                                                className: `framer-5jtqgd`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              p(O, {
                                                breakpoint: b,
                                                overrides: {
                                                  nqsfvFaAc: {
                                                    children: p(c, {
                                                      children: h(`p`, {
                                                        className: `framer-styles-preset-1k3mn7p`,
                                                        "data-styles-preset": `EvBl33G0D`,
                                                        dir: `auto`,
                                                        children: [
                                                          `• Netacad Introduction to `,
                                                          p(`br`, {}),
                                                          `Modern AI`,
                                                        ],
                                                      }),
                                                    }),
                                                  },
                                                },
                                                children: p(T, {
                                                  __fromCanvasComponent: !0,
                                                  children: p(c, {
                                                    children: p(`p`, {
                                                      className: `framer-styles-preset-1k3mn7p`,
                                                      "data-styles-preset": `EvBl33G0D`,
                                                      dir: `auto`,
                                                      children: `• Netacad Introduction to Modern AI`,
                                                    }),
                                                  }),
                                                  className: `framer-6yztux`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    p(`div`, {
                                      className: `framer-yeorrc`,
                                      "data-border": !0,
                                      "data-framer-name": `Lenguaje`,
                                      children: h(`div`, {
                                        className: `framer-n2nrda`,
                                        "data-border": !0,
                                        "data-framer-name": `Contenido`,
                                        children: [
                                          p(ks, {
                                            animated: !1,
                                            className: `framer-ox0dry`,
                                            layoutId: `NgDJYJiUB`,
                                            n2nHSaXfp: !0,
                                          }),
                                          h(`div`, {
                                            className: `framer-1nlt6vr`,
                                            "data-framer-name": `Texto`,
                                            children: [
                                              p(O, {
                                                breakpoint: b,
                                                overrides: {
                                                  nqsfvFaAc: {
                                                    children: p(c, {
                                                      children: p(`p`, {
                                                        className: `framer-styles-preset-1k3mn7p`,
                                                        "data-styles-preset": `EvBl33G0D`,
                                                        dir: `auto`,
                                                        children: `• Native Spanish`,
                                                      }),
                                                    }),
                                                  },
                                                  r0rfOgam0: {
                                                    children: p(c, {
                                                      children: p(`p`, {
                                                        className: `framer-styles-preset-1k3mn7p`,
                                                        "data-styles-preset": `EvBl33G0D`,
                                                        dir: `auto`,
                                                        children: `• Native Spanish`,
                                                      }),
                                                    }),
                                                  },
                                                },
                                                children: p(T, {
                                                  __fromCanvasComponent: !0,
                                                  children: p(c, {
                                                    children: p(`p`, {
                                                      className: `framer-styles-preset-1k3mn7p`,
                                                      "data-styles-preset": `EvBl33G0D`,
                                                      dir: `auto`,
                                                      children: `Native Spanish •`,
                                                    }),
                                                  }),
                                                  className: `framer-1t7t1qz`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              p(O, {
                                                breakpoint: b,
                                                overrides: {
                                                  nqsfvFaAc: {
                                                    children: p(c, {
                                                      children: p(`p`, {
                                                        className: `framer-styles-preset-1k3mn7p`,
                                                        "data-styles-preset": `EvBl33G0D`,
                                                        dir: `auto`,
                                                        children: `• Intermediate English`,
                                                      }),
                                                    }),
                                                  },
                                                  r0rfOgam0: {
                                                    children: p(c, {
                                                      children: p(`p`, {
                                                        className: `framer-styles-preset-1k3mn7p`,
                                                        "data-styles-preset": `EvBl33G0D`,
                                                        dir: `auto`,
                                                        children: `• Intermediate English`,
                                                      }),
                                                    }),
                                                  },
                                                },
                                                children: p(T, {
                                                  __fromCanvasComponent: !0,
                                                  children: p(c, {
                                                    children: p(`p`, {
                                                      className: `framer-styles-preset-1k3mn7p`,
                                                      "data-styles-preset": `EvBl33G0D`,
                                                      dir: `auto`,
                                                      children: `Intermediate English •`,
                                                    }),
                                                  }),
                                                  className: `framer-89oa99`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    p(`div`, {
                                      className: `framer-p68axu`,
                                      "data-border": !0,
                                      "data-framer-name": `Lenguaje`,
                                      children: h(`div`, {
                                        className: `framer-1gozyto`,
                                        "data-border": !0,
                                        "data-framer-name": `Contenido`,
                                        children: [
                                          p(Yo, {
                                            animated: !1,
                                            className: `framer-1a7s78l`,
                                            layoutId: `fNeQ1cziu`,
                                            n2nHSaXfp: !0,
                                          }),
                                          h(`div`, {
                                            className: `framer-1ar6943`,
                                            "data-framer-name": `Texto`,
                                            children: [
                                              p(T, {
                                                __fromCanvasComponent: !0,
                                                children: p(c, {
                                                  children: p(`p`, {
                                                    className: `framer-styles-preset-1k3mn7p`,
                                                    "data-styles-preset": `EvBl33G0D`,
                                                    dir: `auto`,
                                                    children: `• MSI Thin 15 B13VF`,
                                                  }),
                                                }),
                                                className: `framer-1hu1yvr`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              p(T, {
                                                __fromCanvasComponent: !0,
                                                children: p(c, {
                                                  children: p(`p`, {
                                                    className: `framer-styles-preset-1k3mn7p`,
                                                    "data-styles-preset": `EvBl33G0D`,
                                                    dir: `auto`,
                                                    children: `• Arch Linux`,
                                                  }),
                                                }),
                                                className: `framer-rkjegd`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    p(`div`, {
                                      className: `framer-1hw0j0p`,
                                      "data-border": !0,
                                      "data-framer-name": `Lenguaje`,
                                      children: h(`div`, {
                                        className: `framer-9pdin9`,
                                        "data-border": !0,
                                        "data-framer-name": `Contenido`,
                                        children: [
                                          p(gs, {
                                            animated: !1,
                                            className: `framer-1tckl9h`,
                                            layoutId: `F273UbTxL`,
                                            n2nHSaXfp: !0,
                                          }),
                                          h(`div`, {
                                            className: `framer-1osis1v`,
                                            "data-framer-name": `Texto`,
                                            children: [
                                              p(O, {
                                                breakpoint: b,
                                                overrides: {
                                                  nqsfvFaAc: {
                                                    children: p(c, {
                                                      children: p(`p`, {
                                                        className: `framer-styles-preset-1k3mn7p`,
                                                        "data-styles-preset": `EvBl33G0D`,
                                                        dir: `auto`,
                                                        children: `• “Corbanium” Personal Server`,
                                                      }),
                                                    }),
                                                  },
                                                  r0rfOgam0: {
                                                    children: p(c, {
                                                      children: p(`p`, {
                                                        className: `framer-styles-preset-1k3mn7p`,
                                                        "data-styles-preset": `EvBl33G0D`,
                                                        dir: `auto`,
                                                        children: `• “Corbanium” Personal Server`,
                                                      }),
                                                    }),
                                                  },
                                                },
                                                children: p(T, {
                                                  __fromCanvasComponent: !0,
                                                  children: p(c, {
                                                    children: p(`p`, {
                                                      className: `framer-styles-preset-1k3mn7p`,
                                                      "data-styles-preset": `EvBl33G0D`,
                                                      dir: `auto`,
                                                      children: `“Corbanium” Personal Server •`,
                                                    }),
                                                  }),
                                                  className: `framer-h8jkbp`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              p(O, {
                                                breakpoint: b,
                                                overrides: {
                                                  nqsfvFaAc: {
                                                    children: p(c, {
                                                      children: p(`p`, {
                                                        className: `framer-styles-preset-1k3mn7p`,
                                                        "data-styles-preset": `EvBl33G0D`,
                                                        dir: `auto`,
                                                        children: `• Debian 13 (trixie)`,
                                                      }),
                                                    }),
                                                  },
                                                  r0rfOgam0: {
                                                    children: p(c, {
                                                      children: p(`p`, {
                                                        className: `framer-styles-preset-1k3mn7p`,
                                                        "data-styles-preset": `EvBl33G0D`,
                                                        dir: `auto`,
                                                        children: `• Debian 13 (trixie)`,
                                                      }),
                                                    }),
                                                  },
                                                },
                                                children: p(T, {
                                                  __fromCanvasComponent: !0,
                                                  children: p(c, {
                                                    children: p(`p`, {
                                                      className: `framer-styles-preset-1k3mn7p`,
                                                      "data-styles-preset": `EvBl33G0D`,
                                                      dir: `auto`,
                                                      children: `Debian 13 (trixie) •`,
                                                    }),
                                                  }),
                                                  className: `framer-1uewynn`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          h(`div`, {
                            className: `framer-1vaadg3`,
                            "data-framer-name": `Experiencia`,
                            children: [
                              p(`div`, {
                                className: `framer-14ay6e6`,
                                "data-framer-name": `Título`,
                                children: p(T, {
                                  __fromCanvasComponent: !0,
                                  children: p(c, {
                                    children: p(`h2`, {
                                      className: `framer-styles-preset-42z49n`,
                                      "data-styles-preset": `qXsEpTAxV`,
                                      dir: `auto`,
                                      children: `Experience`,
                                    }),
                                  }),
                                  className: `framer-1beevpy`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              h(`div`, {
                                className: `framer-1h4zkgc`,
                                "data-framer-name": `Experiencia`,
                                children: [
                                  p(`div`, {
                                    className: `framer-1oudy2g`,
                                    "data-border": !0,
                                    "data-framer-name": `Herramientas`,
                                    children: h(`div`, {
                                      className: `framer-wp8sz6`,
                                      "data-border": !0,
                                      "data-framer-name": `Contenido`,
                                      children: [
                                        p(T, {
                                          __fromCanvasComponent: !0,
                                          children: p(c, {
                                            children: p(`p`, {
                                              className: `framer-styles-preset-159ynhm`,
                                              "data-styles-preset": `Q9AHy1iJd`,
                                              dir: `auto`,
                                              children: `Tools`,
                                            }),
                                          }),
                                          className: `framer-1fq55tv`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        h(`div`, {
                                          className: `framer-8uof0n`,
                                          "data-framer-name": `Íconos`,
                                          children: [
                                            h(w, {
                                              className: `framer-9uxse9`,
                                              "data-framer-name": `Discord`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21.001 16.261" overflow="visible"><path d="M 17.778 1.348 C 16.416 0.713 14.98 0.26 13.503 0.001 C 13.476 -0.004 13.448 0.009 13.434 0.034 C 13.251 0.367 13.046 0.802 12.902 1.145 C 11.311 0.9 9.692 0.9 8.101 1.145 C 7.941 0.765 7.761 0.394 7.561 0.034 C 7.547 0.01 7.52 -0.003 7.492 0.001 C 6.016 0.26 4.579 0.713 3.218 1.348 C 3.206 1.353 3.197 1.361 3.19 1.372 C 0.467 5.504 -0.28 9.535 0.087 13.514 C 0.089 13.534 0.099 13.552 0.114 13.565 C 1.699 14.758 3.473 15.669 5.358 16.258 C 5.385 16.266 5.415 16.256 5.432 16.233 C 5.837 15.674 6.196 15.081 6.504 14.461 C 6.513 14.444 6.514 14.423 6.507 14.405 C 6.5 14.387 6.486 14.373 6.468 14.367 C 5.903 14.147 5.355 13.881 4.83 13.574 C 4.811 13.562 4.798 13.542 4.797 13.519 C 4.795 13.496 4.805 13.474 4.823 13.46 C 4.934 13.376 5.042 13.289 5.149 13.2 C 5.168 13.185 5.194 13.181 5.216 13.191 C 8.653 14.785 12.374 14.785 15.771 13.191 C 15.793 13.181 15.82 13.184 15.839 13.2 C 15.944 13.287 16.054 13.376 16.165 13.46 C 16.183 13.474 16.193 13.495 16.192 13.518 C 16.191 13.54 16.179 13.561 16.16 13.573 C 15.637 13.883 15.088 14.149 14.521 14.366 C 14.503 14.373 14.489 14.387 14.482 14.405 C 14.475 14.423 14.476 14.443 14.485 14.461 C 14.8 15.081 15.161 15.671 15.557 16.232 C 15.574 16.256 15.603 16.266 15.631 16.257 C 17.519 15.67 19.295 14.759 20.882 13.564 C 20.898 13.553 20.908 13.535 20.91 13.516 C 21.348 8.914 20.177 4.917 17.805 1.374 C 17.799 1.362 17.79 1.352 17.778 1.347 Z M 7.018 11.09 C 5.983 11.09 5.131 10.126 5.131 8.94 C 5.131 7.755 5.967 6.79 7.018 6.79 C 8.077 6.79 8.922 7.764 8.905 8.941 C 8.905 10.126 8.069 11.09 7.018 11.09 Z M 13.996 11.09 C 12.961 11.09 12.109 10.126 12.109 8.94 C 12.109 7.755 12.944 6.79 13.996 6.79 C 15.055 6.79 15.9 7.764 15.883 8.941 C 15.883 10.126 15.056 11.09 13.996 11.09 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                              children: [
                                                p(w, {
                                                  className: `framer-106x5ck`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21.001 16.261" overflow="visible"><path d="M 17.778 1.348 C 16.416 0.713 14.98 0.26 13.503 0.001 C 13.476 -0.004 13.448 0.009 13.434 0.034 C 13.251 0.367 13.046 0.802 12.902 1.145 C 11.311 0.9 9.692 0.9 8.101 1.145 C 7.941 0.765 7.761 0.394 7.561 0.034 C 7.547 0.01 7.52 -0.003 7.492 0.001 C 6.016 0.26 4.579 0.713 3.218 1.348 C 3.206 1.353 3.197 1.361 3.19 1.372 C 0.467 5.504 -0.28 9.535 0.087 13.514 C 0.089 13.534 0.099 13.552 0.114 13.565 C 1.699 14.758 3.473 15.669 5.358 16.258 C 5.385 16.266 5.415 16.256 5.432 16.233 C 5.837 15.674 6.196 15.081 6.504 14.461 C 6.513 14.444 6.514 14.423 6.507 14.405 C 6.5 14.387 6.486 14.373 6.468 14.367 C 5.903 14.147 5.355 13.881 4.83 13.574 C 4.811 13.562 4.798 13.542 4.797 13.519 C 4.795 13.496 4.805 13.474 4.823 13.46 C 4.934 13.376 5.042 13.289 5.149 13.2 C 5.168 13.185 5.194 13.181 5.216 13.191 C 8.653 14.785 12.374 14.785 15.771 13.191 C 15.793 13.181 15.82 13.184 15.839 13.2 C 15.944 13.287 16.054 13.376 16.165 13.46 C 16.183 13.474 16.193 13.495 16.192 13.518 C 16.191 13.54 16.179 13.561 16.16 13.573 C 15.637 13.883 15.088 14.149 14.521 14.366 C 14.503 14.373 14.489 14.387 14.482 14.405 C 14.475 14.423 14.476 14.443 14.485 14.461 C 14.8 15.081 15.161 15.671 15.557 16.232 C 15.574 16.256 15.603 16.266 15.631 16.257 C 17.519 15.67 19.295 14.759 20.882 13.564 C 20.898 13.553 20.908 13.535 20.91 13.516 C 21.348 8.914 20.177 4.917 17.805 1.374 C 17.799 1.362 17.79 1.352 17.778 1.347 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                                p(w, {
                                                  className: `framer-bs5yid`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.775 4.3" overflow="visible"><path d="M 1.887 4.3 C 0.852 4.3 0 3.336 0 2.15 C 0 0.965 0.837 0 1.887 0 C 2.946 0 3.791 0.974 3.775 2.151 C 3.775 3.336 2.938 4.3 1.887 4.3 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                                p(w, {
                                                  className: `framer-1op8i1v`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.775 4.3" overflow="visible"><path d="M 1.887 4.3 C 0.852 4.3 0 3.336 0 2.15 C 0 0.965 0.836 0 1.887 0 C 2.946 0 3.791 0.974 3.775 2.151 C 3.775 3.336 2.947 4.3 1.887 4.3 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            h(w, {
                                              className: `framer-1k40m0t`,
                                              "data-framer-name": `Blender`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.002 19.002" overflow="visible"><path d="M 17.817 13.958 C 16.886 14.928 15.633 15.47 14.329 15.468 C 13.029 15.47 11.78 14.932 10.85 13.968 L 10.851 13.97 C 10.438 13.53 10.117 13.001 9.91 12.419 L 9.9 12.389 C 9.745 11.937 9.667 11.459 9.669 10.978 C 9.669 10.237 9.85 9.541 10.169 8.938 L 10.159 8.959 C 10.427 8.45 10.783 7.999 11.209 7.63 L 11.217 7.623 C 12.104 6.873 13.206 6.466 14.34 6.468 C 15.519 6.468 16.604 6.9 17.461 7.622 L 17.451 7.613 C 17.874 7.976 18.229 8.42 18.497 8.923 L 18.508 8.945 C 18.763 9.425 18.934 9.991 18.986 10.592 L 18.987 10.608 C 19.037 11.217 18.959 11.829 18.76 12.401 L 18.768 12.373 C 18.562 12.967 18.238 13.507 17.818 13.958 Z M 6.723 12.261 C 6.753 12.759 6.837 13.223 6.969 13.665 L 6.958 13.624 C 7.257 14.624 7.758 15.543 8.425 16.316 L 8.42 16.311 C 9.123 17.131 9.977 17.788 10.93 18.24 L 10.977 18.261 C 11.962 18.729 13.112 19.002 14.322 19.002 C 15.542 19.002 16.7 18.725 17.745 18.226 L 17.692 18.249 C 18.66 17.792 19.528 17.128 20.242 16.297 L 20.248 16.29 C 20.902 15.53 21.396 14.629 21.695 13.649 L 21.709 13.598 C 21.895 12.99 22.002 12.29 22.002 11.563 C 22.002 11.224 21.979 10.891 21.934 10.565 L 21.938 10.601 C 21.809 9.628 21.486 8.695 20.99 7.864 L 21.007 7.892 C 20.559 7.133 19.99 6.464 19.324 5.914 L 19.307 5.901 L 19.31 5.901 L 12.411 0.275 C 12.159 0.095 11.862 -0.001 11.559 0 C 11.24 0 10.944 0.104 10.699 0.281 L 10.704 0.277 C 10.472 0.408 10.318 0.655 10.295 0.933 C 10.272 1.211 10.382 1.483 10.589 1.655 L 10.59 1.657 L 10.59 1.657 L 13.458 4.136 L 4.701 4.146 L 4.653 4.145 C 3.959 4.145 3.367 4.617 3.149 5.276 L 3.145 5.287 C 3.004 5.936 3.494 6.474 4.247 6.477 L 4.247 6.478 L 8.679 6.469 L 0.738 12.943 C 0.012 13.42 -0.217 14.429 0.225 15.205 L 0.221 15.198 C 0.51 15.502 0.907 15.69 1.345 15.69 C 1.765 15.69 2.168 15.515 2.467 15.202 L 6.783 11.45 C 6.749 11.716 6.729 11.985 6.725 12.253 L 6.725 12.26 Z M 11.458 10.685 C 11.506 9.925 11.846 9.219 12.399 8.733 L 12.403 8.729 C 12.951 8.25 13.66 7.96 14.433 7.96 C 15.206 7.96 15.915 8.25 16.468 8.734 L 16.462 8.729 C 17.015 9.212 17.357 9.916 17.405 10.675 L 17.406 10.684 C 17.442 11.472 17.153 12.238 16.613 12.781 L 16.612 12.782 C 16.043 13.348 15.276 13.696 14.432 13.696 C 13.589 13.696 12.821 13.348 12.251 12.781 L 12.253 12.782 C 11.711 12.238 11.421 11.469 11.459 10.678 L 11.459 10.684 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                              children: [
                                                p(w, {
                                                  className: `framer-392vtd`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.333 9" overflow="visible"><path d="M 8.149 7.489 C 7.217 8.46 5.964 9.002 4.66 9 C 3.36 9.002 2.112 8.463 1.181 7.5 L 1.182 7.502 C 0.769 7.061 0.448 6.533 0.241 5.951 L 0.231 5.921 C 0.077 5.469 -0.002 4.991 0 4.51 C 0 3.769 0.181 3.073 0.5 2.47 L 0.49 2.491 C 0.758 1.982 1.114 1.53 1.54 1.161 L 1.548 1.155 C 2.435 0.405 3.537 -0.003 4.671 0 C 5.85 0 6.935 0.431 7.793 1.154 L 7.782 1.145 C 8.206 1.507 8.56 1.952 8.828 2.455 L 8.839 2.477 C 9.094 2.957 9.266 3.522 9.317 4.124 L 9.318 4.14 C 9.368 4.748 9.291 5.361 9.091 5.933 L 9.1 5.904 C 8.893 6.499 8.569 7.039 8.149 7.489 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                                p(w, {
                                                  className: `framer-s8yeiv`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.002 19.002" overflow="visible"><path d="M 6.723 12.261 C 6.753 12.759 6.837 13.223 6.969 13.665 L 6.958 13.624 C 7.257 14.624 7.758 15.543 8.425 16.316 L 8.42 16.311 C 9.123 17.131 9.977 17.788 10.93 18.24 L 10.977 18.261 C 11.962 18.729 13.112 19.002 14.322 19.002 C 15.542 19.002 16.7 18.725 17.745 18.226 L 17.692 18.249 C 18.66 17.792 19.528 17.128 20.242 16.297 L 20.248 16.29 C 20.902 15.53 21.396 14.629 21.695 13.649 L 21.709 13.598 C 21.895 12.99 22.002 12.29 22.002 11.563 C 22.002 11.224 21.979 10.891 21.934 10.565 L 21.938 10.601 C 21.809 9.628 21.486 8.695 20.99 7.864 L 21.007 7.892 C 20.559 7.133 19.99 6.464 19.324 5.914 L 19.307 5.901 L 19.31 5.901 L 12.411 0.275 C 12.159 0.095 11.862 -0.001 11.559 0 C 11.24 0 10.944 0.104 10.699 0.281 L 10.704 0.277 C 10.472 0.408 10.318 0.655 10.295 0.933 C 10.272 1.211 10.382 1.483 10.589 1.655 L 10.59 1.657 L 10.59 1.657 L 13.458 4.136 L 4.701 4.146 L 4.653 4.145 C 3.959 4.145 3.367 4.617 3.149 5.276 L 3.145 5.287 C 3.004 5.936 3.494 6.474 4.247 6.477 L 4.247 6.478 L 8.679 6.469 L 0.738 12.943 C 0.012 13.42 -0.217 14.429 0.225 15.205 L 0.221 15.198 C 0.51 15.502 0.907 15.69 1.345 15.69 C 1.765 15.69 2.168 15.515 2.467 15.202 L 6.783 11.45 C 6.749 11.716 6.729 11.985 6.725 12.253 L 6.725 12.26 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                                p(w, {
                                                  className: `framer-88fgq4`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.953 5.737" overflow="visible"><path d="M 0.003 2.725 C 0.05 1.965 0.39 1.259 0.943 0.774 L 0.948 0.77 C 1.495 0.29 2.204 0 2.977 0 C 3.751 0 4.459 0.291 5.012 0.775 L 5.006 0.77 C 5.56 1.253 5.901 1.957 5.949 2.716 L 5.95 2.724 C 5.986 3.513 5.697 4.279 5.157 4.822 L 5.156 4.823 C 4.588 5.389 3.82 5.737 2.977 5.737 C 2.133 5.737 1.365 5.389 0.796 4.821 L 0.797 4.823 C 0.255 4.278 -0.035 3.509 0.003 2.718 L 0.003 2.724 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            p(w, {
                                              className: `framer-1udi7yo`,
                                              "data-framer-name": `Framer`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.993 20.001" overflow="visible"><path d="M 0.052 0.412 C 0.157 0.163 0.406 0 0.682 0 L 14.31 0 C 14.687 0 14.992 0.298 14.992 0.667 L 14.992 7.333 C 14.992 7.702 14.687 8 14.31 8 L 9.141 8 L 14.793 13.528 C 14.988 13.719 15.047 14.006 14.941 14.255 C 14.835 14.505 14.586 14.667 14.31 14.667 L 8.177 14.667 L 8.177 19.333 C 8.178 19.603 8.012 19.847 7.757 19.95 C 7.502 20.054 7.208 19.997 7.014 19.805 L 0.199 13.139 C 0.072 13.013 0 12.844 0 12.667 L 0 7.333 C 0 6.965 0.305 6.667 0.682 6.667 L 5.851 6.667 L 0.199 1.139 C 0.005 0.948 -0.054 0.661 0.052 0.412 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            h(w, {
                                              className: `framer-1a4pctk`,
                                              "data-framer-name": `Photoshop`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22 22" overflow="visible"><path d="M 9.029 7.635 C 8.69 7.493 8.323 7.437 7.947 7.446 C 7.709 7.446 7.498 7.446 7.324 7.456 C 7.141 7.446 7.012 7.456 6.948 7.465 L 6.948 10.624 C 7.077 10.634 7.196 10.643 7.306 10.643 L 7.792 10.643 C 8.149 10.643 8.507 10.587 8.846 10.474 C 9.139 10.389 9.396 10.211 9.597 9.976 C 9.79 9.741 9.882 9.421 9.882 9.007 C 9.891 8.716 9.817 8.424 9.671 8.17 C 9.518 7.926 9.293 7.739 9.029 7.635 Z M 18.104 0 L 3.896 0 C 1.742 0 0 1.786 0 3.996 L 0 18.004 C 0 20.214 1.742 22 3.896 22 L 18.104 22 C 20.258 22 22 20.214 22 18.004 L 22 3.996 C 22 1.786 20.258 0 18.104 0 Z M 11.329 10.953 C 10.963 11.48 10.45 11.875 9.854 12.101 C 9.231 12.336 8.543 12.42 7.792 12.42 C 7.572 12.42 7.425 12.42 7.333 12.411 C 7.242 12.401 7.113 12.401 6.939 12.401 L 6.939 15.419 C 6.948 15.484 6.903 15.542 6.838 15.551 L 5.06 15.551 C 4.987 15.551 4.95 15.513 4.95 15.428 L 4.95 5.754 C 4.95 5.688 4.978 5.651 5.042 5.651 C 5.198 5.651 5.344 5.651 5.555 5.641 C 5.775 5.632 6.004 5.632 6.252 5.622 C 6.499 5.613 6.765 5.613 7.049 5.604 C 7.333 5.594 7.608 5.594 7.883 5.594 C 8.635 5.594 9.258 5.688 9.772 5.886 C 10.23 6.046 10.652 6.309 11 6.657 C 11.293 6.958 11.523 7.324 11.669 7.729 C 11.806 8.123 11.879 8.528 11.879 8.951 C 11.88 9.759 11.697 10.427 11.329 10.953 Z M 17.829 14.611 C 17.573 14.987 17.214 15.277 16.803 15.449 C 16.353 15.645 15.803 15.748 15.142 15.748 C 14.722 15.748 14.308 15.711 13.897 15.626 C 13.576 15.569 13.255 15.466 12.962 15.325 C 12.898 15.289 12.851 15.223 12.86 15.148 L 12.86 13.512 C 12.86 13.485 12.87 13.446 12.898 13.427 C 12.924 13.408 12.953 13.418 12.98 13.437 C 13.338 13.653 13.713 13.804 14.117 13.897 C 14.464 13.991 14.831 14.038 15.198 14.038 C 15.547 14.038 15.794 13.99 15.959 13.906 C 16.106 13.84 16.207 13.68 16.207 13.511 C 16.207 13.378 16.133 13.257 15.987 13.135 C 15.84 13.013 15.538 12.872 15.089 12.692 C 14.622 12.523 14.192 12.297 13.788 12.016 C 13.501 11.805 13.263 11.532 13.09 11.217 C 12.944 10.919 12.872 10.59 12.88 10.257 C 12.88 9.852 12.99 9.467 13.193 9.119 C 13.422 8.743 13.76 8.442 14.154 8.254 C 14.584 8.029 15.125 7.926 15.776 7.926 C 16.152 7.926 16.537 7.954 16.913 8.011 C 17.188 8.048 17.453 8.123 17.701 8.227 C 17.737 8.236 17.774 8.274 17.793 8.311 C 17.802 8.349 17.811 8.387 17.811 8.424 L 17.811 9.957 C 17.811 9.994 17.793 10.032 17.765 10.051 C 17.683 10.07 17.637 10.07 17.6 10.051 C 17.325 9.9 17.032 9.797 16.72 9.731 C 16.381 9.656 16.042 9.609 15.693 9.609 C 15.51 9.6 15.318 9.628 15.142 9.675 C 15.024 9.703 14.922 9.769 14.858 9.863 C 14.812 9.938 14.785 10.032 14.785 10.117 C 14.785 10.201 14.822 10.286 14.878 10.361 C 14.96 10.465 15.069 10.549 15.189 10.615 C 15.399 10.728 15.62 10.831 15.839 10.925 C 16.335 11.094 16.812 11.33 17.252 11.612 C 17.554 11.808 17.802 12.072 17.975 12.392 C 18.122 12.691 18.195 13.022 18.186 13.359 C 18.196 13.802 18.068 14.243 17.829 14.611 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                              children: [
                                                p(w, {
                                                  className: `framer-1kubwc2`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.934 3.198" overflow="visible"><path d="M 2.081 0.189 C 1.742 0.048 1.375 -0.008 0.999 0.001 C 0.761 0.001 0.55 0.001 0.376 0.01 C 0.192 0.001 0.064 0.01 0 0.02 L 0 3.179 C 0.128 3.188 0.248 3.198 0.357 3.198 L 0.843 3.198 C 1.201 3.198 1.558 3.141 1.897 3.028 C 2.191 2.944 2.447 2.765 2.649 2.53 C 2.842 2.295 2.933 1.975 2.933 1.562 C 2.942 1.27 2.869 0.979 2.723 0.725 C 2.57 0.481 2.345 0.293 2.081 0.189 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                                p(w, {
                                                  className: `framer-l4rvnc`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22 22" overflow="visible"><path d="M 18.104 0 L 3.896 0 C 1.742 0 0 1.786 0 3.996 L 0 18.004 C 0 20.214 1.742 22 3.896 22 L 18.104 22 C 20.258 22 22 20.214 22 18.004 L 22 3.996 C 22 1.786 20.258 0 18.104 0 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                                p(w, {
                                                  className: `framer-1pl86gm`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.929 9.957" overflow="visible"><path d="M 6.379 5.359 C 6.013 5.886 5.5 6.281 4.904 6.506 C 4.281 6.741 3.593 6.826 2.842 6.826 C 2.622 6.826 2.475 6.826 2.383 6.817 C 2.292 6.807 2.163 6.807 1.989 6.807 L 1.989 9.824 C 1.998 9.89 1.952 9.947 1.888 9.957 L 0.11 9.957 C 0.037 9.957 0 9.918 0 9.834 L 0 0.16 C 0 0.094 0.027 0.056 0.092 0.056 C 0.247 0.056 0.394 0.056 0.605 0.047 C 0.825 0.038 1.054 0.038 1.302 0.028 C 1.549 0.019 1.815 0.019 2.099 0.009 C 2.383 0 2.658 0 2.933 0 C 3.685 0 4.308 0.094 4.822 0.291 C 5.28 0.451 5.702 0.715 6.05 1.062 C 6.343 1.363 6.572 1.73 6.719 2.134 C 6.856 2.529 6.929 2.933 6.929 3.357 C 6.93 4.165 6.747 4.833 6.379 5.359 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                                p(w, {
                                                  className: `framer-bqcim7`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.328 7.822" overflow="visible"><path d="M 4.97 6.685 C 4.714 7.061 4.355 7.352 3.944 7.523 C 3.495 7.719 2.945 7.822 2.284 7.822 C 1.863 7.822 1.449 7.785 1.038 7.7 C 0.717 7.643 0.396 7.54 0.103 7.399 C 0.039 7.363 -0.008 7.297 0.001 7.222 L 0.001 5.586 C 0.001 5.559 0.011 5.52 0.039 5.501 C 0.065 5.482 0.094 5.492 0.121 5.511 C 0.479 5.727 0.855 5.878 1.258 5.971 C 1.605 6.065 1.972 6.112 2.34 6.112 C 2.688 6.112 2.935 6.064 3.1 5.98 C 3.247 5.914 3.348 5.754 3.348 5.585 C 3.348 5.452 3.275 5.331 3.128 5.209 C 2.981 5.087 2.68 4.946 2.23 4.766 C 1.763 4.597 1.333 4.371 0.929 4.09 C 0.642 3.879 0.404 3.606 0.231 3.291 C 0.086 2.993 0.013 2.664 0.021 2.331 C 0.021 1.926 0.131 1.541 0.334 1.193 C 0.563 0.817 0.901 0.516 1.295 0.328 C 1.725 0.103 2.266 0 2.917 0 C 3.293 0 3.678 0.028 4.054 0.085 C 4.329 0.122 4.595 0.197 4.842 0.301 C 4.878 0.31 4.915 0.348 4.934 0.385 C 4.943 0.423 4.952 0.461 4.952 0.498 L 4.952 2.031 C 4.952 2.068 4.934 2.106 4.906 2.125 C 4.824 2.144 4.778 2.144 4.741 2.125 C 4.466 1.974 4.173 1.871 3.861 1.805 C 3.522 1.73 3.183 1.683 2.835 1.683 C 2.651 1.674 2.459 1.702 2.284 1.749 C 2.165 1.777 2.064 1.843 1.999 1.937 C 1.954 2.012 1.926 2.106 1.926 2.191 C 1.926 2.275 1.963 2.36 2.019 2.435 C 2.101 2.539 2.21 2.623 2.33 2.689 C 2.54 2.802 2.761 2.905 2.98 2.999 C 3.476 3.169 3.953 3.404 4.393 3.686 C 4.695 3.882 4.943 4.146 5.116 4.466 C 5.263 4.765 5.336 5.096 5.327 5.433 C 5.337 5.876 5.209 6.317 4.97 6.685 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            h(w, {
                                              className: `framer-138cp68`,
                                              "data-framer-name": `Illustrator`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22 22" overflow="visible"><path d="M 9.652 9.806 C 9.561 9.515 9.478 9.232 9.387 8.941 C 9.295 8.65 9.212 8.377 9.139 8.104 C 9.066 7.841 9.002 7.597 8.937 7.371 L 8.919 7.371 C 8.837 7.775 8.736 8.179 8.607 8.584 C 8.47 9.035 8.332 9.505 8.186 9.975 C 8.057 10.455 7.92 10.897 7.782 11.291 L 10.111 11.291 C 10.056 11.093 9.982 10.859 9.9 10.614 C 9.817 10.361 9.735 10.088 9.652 9.806 Z M 18.104 0 L 3.896 0 C 1.742 0 0 1.786 0 3.996 L 0 18.004 C 0 20.214 1.742 22 3.896 22 L 18.104 22 C 20.258 22 22 20.214 22 18.004 L 22 3.996 C 22 1.786 20.258 0 18.104 0 Z M 13.475 15.541 L 11.558 15.541 C 11.495 15.55 11.431 15.503 11.412 15.438 L 10.661 13.2 L 7.251 13.2 L 6.554 15.409 C 6.536 15.494 6.462 15.55 6.38 15.542 L 4.657 15.542 C 4.556 15.542 4.528 15.485 4.556 15.373 L 7.507 6.656 C 7.535 6.562 7.562 6.459 7.599 6.346 C 7.636 6.149 7.654 5.942 7.654 5.735 C 7.645 5.688 7.682 5.641 7.727 5.632 L 10.102 5.632 C 10.175 5.632 10.212 5.66 10.221 5.707 L 13.567 15.391 C 13.594 15.493 13.567 15.541 13.475 15.541 Z M 16.592 15.4 C 16.592 15.503 16.556 15.55 16.473 15.55 L 14.676 15.55 C 14.584 15.55 14.538 15.493 14.538 15.4 L 14.538 8.161 C 14.538 8.067 14.576 8.029 14.658 8.029 L 16.473 8.029 C 16.556 8.029 16.592 8.076 16.592 8.161 Z M 16.4 6.91 C 16.181 7.138 15.877 7.258 15.565 7.239 C 15.263 7.249 14.969 7.126 14.748 6.91 C 14.538 6.675 14.426 6.364 14.437 6.045 C 14.427 5.726 14.547 5.425 14.766 5.209 C 14.988 4.992 15.281 4.879 15.583 4.879 C 15.942 4.879 16.215 4.992 16.418 5.209 C 16.619 5.434 16.729 5.735 16.72 6.045 C 16.729 6.365 16.619 6.675 16.4 6.91 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                              children: [
                                                p(w, {
                                                  className: `framer-1ydv24j`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.328 3.921" overflow="visible"><path d="M 1.87 2.435 C 1.778 2.144 1.696 1.862 1.604 1.57 C 1.512 1.279 1.43 1.006 1.357 0.733 C 1.283 0.47 1.219 0.226 1.155 0 L 1.137 0 C 1.054 0.404 0.953 0.809 0.825 1.213 C 0.688 1.664 0.55 2.134 0.403 2.604 C 0.275 3.084 0.137 3.526 0 3.921 L 2.328 3.921 C 2.273 3.722 2.2 3.488 2.118 3.243 C 2.035 2.99 1.952 2.717 1.87 2.435 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                                p(w, {
                                                  className: `framer-1548ojm`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22 22" overflow="visible"><path d="M 18.104 0 L 3.896 0 C 1.742 0 0 1.786 0 3.996 L 0 18.004 C 0 20.214 1.742 22 3.896 22 L 18.104 22 C 20.258 22 22 20.214 22 18.004 L 22 3.996 C 22 1.786 20.258 0 18.104 0 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                                p(w, {
                                                  className: `framer-8izj5s`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.031 9.911" overflow="visible"><path d="M 8.929 9.909 L 7.012 9.909 C 6.949 9.919 6.885 9.872 6.867 9.806 L 6.115 7.568 L 2.705 7.568 L 2.008 9.778 C 1.99 9.862 1.917 9.919 1.834 9.91 L 0.111 9.91 C 0.01 9.91 -0.017 9.853 0.01 9.741 L 2.962 1.025 C 2.989 0.931 3.017 0.827 3.053 0.715 C 3.09 0.517 3.108 0.31 3.108 0.103 C 3.099 0.056 3.136 0.009 3.182 0 L 5.556 0 C 5.629 0 5.666 0.028 5.675 0.075 L 9.021 9.759 C 9.048 9.861 9.021 9.909 8.929 9.909 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                                p(w, {
                                                  className: `framer-1ueniq5`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.053 7.521" overflow="visible"><path d="M 2.053 7.371 C 2.053 7.474 2.018 7.521 1.935 7.521 L 0.137 7.521 C 0.046 7.521 0 7.464 0 7.371 L 0 0.132 C 0 0.038 0.038 0 0.12 0 L 1.935 0 C 2.018 0 2.053 0.047 2.053 0.132 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                                p(w, {
                                                  className: `framer-14x9w7g`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.285 2.362" overflow="visible"><path d="M 1.964 2.031 C 1.745 2.259 1.441 2.379 1.129 2.36 C 0.827 2.369 0.533 2.247 0.312 2.031 C 0.102 1.795 -0.01 1.485 0.001 1.166 C -0.009 0.846 0.111 0.545 0.33 0.329 C 0.552 0.113 0.845 0 1.147 0 C 1.506 0 1.779 0.113 1.982 0.329 C 2.183 0.555 2.293 0.856 2.284 1.166 C 2.293 1.485 2.183 1.796 1.964 2.031 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            h(w, {
                                              className: `framer-72g46r`,
                                              "data-framer-name": `Roblox Studio`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22 22" overflow="visible"><path d="M 18.038 22 L 3.962 22 C 1.775 22 0 20.225 0 18.038 L 0 3.962 C 0 1.775 1.775 0 3.962 0 L 18.038 0 C 20.225 0 22 1.775 22 3.962 L 22 18.038 C 22 20.225 20.225 22 18.038 22 Z M 17.183 12.659 L 12.727 11.464 L 12.263 13.191 L 4.357 11.073 L 3.162 15.525 L 15.525 18.838 L 16.719 14.386 Z M 18.837 6.475 L 6.475 3.162 L 4.817 9.341 L 9.273 10.536 L 9.737 8.809 L 17.643 10.927 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                              children: [
                                                p(w, {
                                                  className: `framer-f6mfwd`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22 22" overflow="visible"><path d="M 18.038 22 L 3.962 22 C 1.775 22 0 20.225 0 18.038 L 0 3.962 C 0 1.775 1.775 0 3.962 0 L 18.038 0 C 20.225 0 22 1.775 22 3.962 L 22 18.038 C 22 20.225 20.225 22 18.038 22 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                                p(w, {
                                                  className: `framer-1fficux`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.021 7.764" overflow="visible"><path d="M 14.021 1.586 L 9.565 0.391 L 9.101 2.118 L 1.195 0 L 0 4.452 L 12.362 7.764 L 13.557 3.313 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                                p(w, {
                                                  className: `framer-1qu38lq`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.021 7.764" overflow="visible"><path d="M 14.021 3.313 L 1.659 0 L 0 6.179 L 4.456 7.373 L 4.92 5.646 L 12.826 7.764 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  p(`div`, {
                                    className: `framer-1w810i2`,
                                    "data-border": !0,
                                    "data-framer-name": `Estadísticas`,
                                    children: h(`div`, {
                                      className: `framer-19c8ic9`,
                                      "data-border": !0,
                                      "data-framer-name": `Contenido`,
                                      children: [
                                        h(`div`, {
                                          className: `framer-1wq06mr`,
                                          "data-framer-name": `Título`,
                                          children: [
                                            p(Wl, {
                                              blockDocumentScrolling: !1,
                                              dismissWithEsc: !1,
                                              children: (e) =>
                                                p(d, {
                                                  children: p(O, {
                                                    breakpoint: b,
                                                    overrides: {
                                                      nqsfvFaAc: {
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          0 +
                                                          50 +
                                                          0 +
                                                          827 +
                                                          0 +
                                                          45 +
                                                          0 +
                                                          91.6 +
                                                          3 +
                                                          0 +
                                                          20 +
                                                          0 +
                                                          2.8,
                                                      },
                                                      r0rfOgam0: {
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          0 +
                                                          50 +
                                                          0 +
                                                          827 +
                                                          0 +
                                                          45 +
                                                          0 +
                                                          91.6 +
                                                          3 +
                                                          0 +
                                                          20 +
                                                          0 +
                                                          2.8,
                                                      },
                                                    },
                                                    children: p(we, {
                                                      height: 20,
                                                      width: `20px`,
                                                      y:
                                                        (u?.y || 0) +
                                                        0 +
                                                        0 +
                                                        50 +
                                                        0 +
                                                        569 +
                                                        0 +
                                                        45 +
                                                        0 +
                                                        3 +
                                                        0 +
                                                        20 +
                                                        0 +
                                                        2.8,
                                                      children: h(ye, {
                                                        className: `framer-1k57x4l-container`,
                                                        id: `1k57x4l`,
                                                        nodeId: `Sm79VeLur`,
                                                        ref: k,
                                                        scopeId: `augiA20Il`,
                                                        children: [
                                                          p(Ks, {
                                                            gBi0K1NLP: fe({ overlay: e }),
                                                            height: `100%`,
                                                            id: `Sm79VeLur`,
                                                            layoutId: `Sm79VeLur`,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            width: `100%`,
                                                          }),
                                                          p(ne, {
                                                            children:
                                                              e.visible &&
                                                              p(de, {
                                                                alignment: `center`,
                                                                anchorRef: k,
                                                                className: C(me),
                                                                collisionDetection: !0,
                                                                collisionDetectionPadding: 20,
                                                                "data-framer-portal-id": `1k57x4l`,
                                                                offsetX: -5272217094898224e-21,
                                                                offsetY: -52.4218777588103,
                                                                onDismiss: e.hide,
                                                                placement: `bottom`,
                                                                safeArea: !0,
                                                                zIndex: 11,
                                                                children: p(y.div, {
                                                                  animate: Hl,
                                                                  className: `framer-1spuarl`,
                                                                  "data-border": !0,
                                                                  exit: Vl,
                                                                  initial: Ul,
                                                                  ref: Ce,
                                                                  role: `dialog`,
                                                                  children: p(T, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: p(c, {
                                                                      children: p(`p`, {
                                                                        className: `framer-styles-preset-1k3mn7p`,
                                                                        "data-styles-preset": `EvBl33G0D`,
                                                                        dir: `auto`,
                                                                        children: `updates in real-time`,
                                                                      }),
                                                                    }),
                                                                    className: `framer-88eq96`,
                                                                    fonts: [`Inter`],
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                }),
                                                              }),
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                            }),
                                            h(`div`, {
                                              className: `framer-175avyi`,
                                              "data-framer-name": `Título`,
                                              children: [
                                                h(w, {
                                                  className: `framer-1vdzxv4`,
                                                  "data-framer-name": `Roblox`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.028 22.028" overflow="visible"><path d="M 3.767 0 L 18.26 0 C 20.341 0 22.028 1.687 22.028 3.767 L 22.028 18.26 C 22.028 20.341 20.341 22.028 18.26 22.028 L 3.767 22.028 C 1.687 22.028 0 20.341 0 18.26 L 0 3.767 C 0 1.687 1.687 0 3.767 0 Z M 3.85 15.379 L 15.345 18.329 L 18.288 6.841 L 6.806 3.884 Z M 9.034 12.389 L 9.941 9.034 L 13.303 9.941 L 12.389 13.303 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                                  withExternalLayout: !0,
                                                  children: [
                                                    p(w, {
                                                      className: `framer-1umgslw`,
                                                      requiresOverflowVisible: !1,
                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.028 22.028" overflow="visible"><path d="M 3.767 0 L 18.26 0 C 20.341 0 22.028 1.687 22.028 3.767 L 22.028 18.26 C 22.028 20.341 20.341 22.028 18.26 22.028 L 3.767 22.028 C 1.687 22.028 0 20.341 0 18.26 L 0 3.767 C 0 1.687 1.687 0 3.767 0 Z" fill="transparent"></path></svg>`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    p(w, {
                                                      className: `framer-16fn4ba`,
                                                      requiresOverflowVisible: !1,
                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.438 14.444" overflow="visible"><path d="M 2.956 0 L 14.438 2.956 L 11.495 14.444 L 0 11.495 Z" fill="transparent"></path></svg>`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    p(w, {
                                                      className: `framer-fx5bph`,
                                                      requiresOverflowVisible: !1,
                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.269 4.269" overflow="visible"><path d="M 3.355 4.269 L 4.269 0.908 L 0.908 0 L 0 3.355 Z" fill="transparent"></path></svg>`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                p(T, {
                                                  __fromCanvasComponent: !0,
                                                  children: p(c, {
                                                    children: p(`p`, {
                                                      className: `framer-styles-preset-159ynhm`,
                                                      "data-styles-preset": `Q9AHy1iJd`,
                                                      dir: `auto`,
                                                      children: `Statistics`,
                                                    }),
                                                  }),
                                                  className: `framer-1qslbfe`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        h(`div`, {
                                          className: `framer-1ld8ez7`,
                                          "data-framer-name": `Íconos`,
                                          children: [
                                            h(`div`, {
                                              className: `framer-t8v0gz`,
                                              "data-border": !0,
                                              "data-framer-name": `Usuarios`,
                                              children: [
                                                p(rs, {
                                                  animated: !1,
                                                  className: `framer-okalni`,
                                                  JEeZYcamG: !0,
                                                  layoutId: `TjfUpGRdk`,
                                                  P_DcoRcrY: !0,
                                                }),
                                                p(kl, {
                                                  __fromCanvasComponent: !0,
                                                  children: p(c, {
                                                    children: p(`p`, {
                                                      className: `framer-styles-preset-xqflja`,
                                                      "data-styles-preset": `x33uokRI8`,
                                                      dir: `auto`,
                                                      children: `18k`,
                                                    }),
                                                  }),
                                                  className: `framer-eo8t4s`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            h(`div`, {
                                              className: `framer-llqf7b`,
                                              "data-border": !0,
                                              "data-framer-name": `Favoritos`,
                                              children: [
                                                p(ds, {
                                                  animated: !1,
                                                  className: `framer-1qwvijh`,
                                                  JEeZYcamG: !0,
                                                  layoutId: `ghTTA1qQ4`,
                                                  P_DcoRcrY: !0,
                                                }),
                                                p(jl, {
                                                  __fromCanvasComponent: !0,
                                                  children: p(c, {
                                                    children: p(`p`, {
                                                      className: `framer-styles-preset-xqflja`,
                                                      "data-styles-preset": `x33uokRI8`,
                                                      dir: `auto`,
                                                      children: `18k`,
                                                    }),
                                                  }),
                                                  className: `framer-1bu355n`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            h(`div`, {
                                              className: `framer-qoc87a`,
                                              "data-border": !0,
                                              "data-framer-name": `Visitas`,
                                              children: [
                                                p(ws, {
                                                  animated: !1,
                                                  className: `framer-1cn84a4`,
                                                  JEeZYcamG: !0,
                                                  layoutId: `O4GlWYpV3`,
                                                  P_DcoRcrY: !0,
                                                }),
                                                p(Nl, {
                                                  __fromCanvasComponent: !0,
                                                  children: p(c, {
                                                    children: p(`p`, {
                                                      className: `framer-styles-preset-xqflja`,
                                                      "data-styles-preset": `x33uokRI8`,
                                                      dir: `auto`,
                                                      children: `18k`,
                                                    }),
                                                  }),
                                                  className: `framer-k82hol`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          h(`div`, {
                            className: `framer-2x3hw7`,
                            "data-framer-name": `Trabajo`,
                            children: [
                              p(`div`, {
                                className: `framer-l9grff`,
                                "data-framer-name": `Título`,
                                children: p(T, {
                                  __fromCanvasComponent: !0,
                                  children: p(c, {
                                    children: p(`h2`, {
                                      className: `framer-styles-preset-42z49n`,
                                      "data-styles-preset": `qXsEpTAxV`,
                                      dir: `auto`,
                                      children: `Work`,
                                    }),
                                  }),
                                  className: `framer-3dd7vb`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              h(`div`, {
                                className: `framer-xv4k64`,
                                "data-framer-name": `Tarjetas Pequeñas`,
                                children: [
                                  p(`div`, {
                                    className: `framer-1wfjapi`,
                                    "data-framer-name": `1st Airfield`,
                                    children: p(`div`, {
                                      className: `framer-1rm75v1`,
                                      "data-border": !0,
                                      "data-framer-name": `Tarjeta`,
                                      children: h(`div`, {
                                        className: `framer-zd2w62`,
                                        "data-border": !0,
                                        "data-framer-name": `Contenido`,
                                        children: [
                                          p(`div`, {
                                            className: `framer-1j7y2zr`,
                                            "data-framer-name": `Rollo`,
                                            children: p(O, {
                                              breakpoint: b,
                                              overrides: {
                                                nqsfvFaAc: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 2048,
                                                    intrinsicWidth: 2048,
                                                    loading: S(
                                                      (u?.y || 0) +
                                                        0 +
                                                        0 +
                                                        50 +
                                                        0 +
                                                        1115.2 +
                                                        0 +
                                                        45 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        3 +
                                                        0 +
                                                        10 +
                                                        0 +
                                                        0
                                                    ),
                                                    pixelHeight: 2048,
                                                    pixelWidth: 2048,
                                                    sizes: `max(${u?.width || `100vw`} - 86px, 1px)`,
                                                    src: `../../assets/images/7a4MzZkkq3dpxDcusBbmYnmptg.png?width=2048&height=2048`,
                                                    srcSet: `../../assets/images/7a4MzZkkq3dpxDcusBbmYnmptg.png 512w,../../assets/images/7a4MzZkkq3dpxDcusBbmYnmptg.png?scale-down-to=1024&width=2048&height=2048 1024w,../../assets/images/7a4MzZkkq3dpxDcusBbmYnmptg.png?width=2048&height=2048 2048w`,
                                                  },
                                                },
                                                r0rfOgam0: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 2048,
                                                    intrinsicWidth: 2048,
                                                    loading: S(
                                                      (u?.y || 0) +
                                                        0 +
                                                        0 +
                                                        50 +
                                                        0 +
                                                        1115.2 +
                                                        0 +
                                                        45 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        3 +
                                                        0 +
                                                        10 +
                                                        0 +
                                                        0
                                                    ),
                                                    pixelHeight: 2048,
                                                    pixelWidth: 2048,
                                                    sizes: `max(${u?.width || `100vw`} * 0.7 - 106px, 1px)`,
                                                    src: `../../assets/images/7a4MzZkkq3dpxDcusBbmYnmptg.png?width=2048&height=2048`,
                                                    srcSet: `../../assets/images/7a4MzZkkq3dpxDcusBbmYnmptg.png 512w,../../assets/images/7a4MzZkkq3dpxDcusBbmYnmptg.png?scale-down-to=1024&width=2048&height=2048 1024w,../../assets/images/7a4MzZkkq3dpxDcusBbmYnmptg.png?width=2048&height=2048 2048w`,
                                                  },
                                                },
                                              },
                                              children: p(pe, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 2048,
                                                  intrinsicWidth: 2048,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      765.6 +
                                                      0 +
                                                      45 +
                                                      0 +
                                                      0 +
                                                      3 +
                                                      0 +
                                                      10 +
                                                      0 +
                                                      0
                                                  ),
                                                  pixelHeight: 2048,
                                                  pixelWidth: 2048,
                                                  sizes: `269px`,
                                                  src: `../../assets/images/7a4MzZkkq3dpxDcusBbmYnmptg.png?width=2048&height=2048`,
                                                  srcSet: `../../assets/images/7a4MzZkkq3dpxDcusBbmYnmptg.png 512w,../../assets/images/7a4MzZkkq3dpxDcusBbmYnmptg.png?scale-down-to=1024&width=2048&height=2048 1024w,../../assets/images/7a4MzZkkq3dpxDcusBbmYnmptg.png?width=2048&height=2048 2048w`,
                                                },
                                                className: `framer-pyugnn`,
                                                "data-framer-name": `FInal`,
                                                fitImageDimension: `height`,
                                              }),
                                            }),
                                          }),
                                          p(`div`, {
                                            className: `framer-2iiqs9`,
                                            "data-framer-name": `Título`,
                                            children: p(T, {
                                              __fromCanvasComponent: !0,
                                              children: p(c, {
                                                children: p(`p`, {
                                                  className: `framer-styles-preset-159ynhm`,
                                                  "data-styles-preset": `Q9AHy1iJd`,
                                                  dir: `auto`,
                                                  children: `1st Airfield`,
                                                }),
                                              }),
                                              className: `framer-vnyg7b`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  p(`div`, {
                                    className: `framer-7i2ahl`,
                                    "data-framer-name": `Galatea Dam`,
                                    children: p(`div`, {
                                      className: `framer-lv4dc6`,
                                      "data-border": !0,
                                      "data-framer-name": `Tarjeta`,
                                      children: h(`div`, {
                                        className: `framer-1p55y91`,
                                        "data-border": !0,
                                        "data-framer-name": `Contenido`,
                                        children: [
                                          p(`div`, {
                                            className: `framer-7c5wx4`,
                                            "data-framer-name": `Rollo`,
                                            children: p(O, {
                                              breakpoint: b,
                                              overrides: {
                                                nqsfvFaAc: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 2048,
                                                    intrinsicWidth: 2048,
                                                    loading: S(
                                                      (u?.y || 0) +
                                                        0 +
                                                        0 +
                                                        50 +
                                                        0 +
                                                        1115.2 +
                                                        0 +
                                                        45 +
                                                        0 +
                                                        378.6 +
                                                        0 +
                                                        0 +
                                                        3 +
                                                        0 +
                                                        10 +
                                                        0 +
                                                        0
                                                    ),
                                                    pixelHeight: 2048,
                                                    pixelWidth: 2048,
                                                    sizes: `max(${u?.width || `100vw`} - 86px, 1px)`,
                                                    src: `../../assets/images/6XCuKq1Epba5MGrgQpNqqjAK4tg.png?width=2048&height=2048`,
                                                    srcSet: `../../assets/images/6XCuKq1Epba5MGrgQpNqqjAK4tg.png 512w,../../assets/images/6XCuKq1Epba5MGrgQpNqqjAK4tg.png?scale-down-to=1024&width=2048&height=2048 1024w,../../assets/images/6XCuKq1Epba5MGrgQpNqqjAK4tg.png?width=2048&height=2048 2048w`,
                                                  },
                                                },
                                                r0rfOgam0: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 2048,
                                                    intrinsicWidth: 2048,
                                                    loading: S(
                                                      (u?.y || 0) +
                                                        0 +
                                                        0 +
                                                        50 +
                                                        0 +
                                                        1115.2 +
                                                        0 +
                                                        45 +
                                                        0 +
                                                        535.6 +
                                                        0 +
                                                        0 +
                                                        3 +
                                                        0 +
                                                        10 +
                                                        0 +
                                                        0
                                                    ),
                                                    pixelHeight: 2048,
                                                    pixelWidth: 2048,
                                                    sizes: `max(${u?.width || `100vw`} * 0.7 - 106px, 1px)`,
                                                    src: `../../assets/images/6XCuKq1Epba5MGrgQpNqqjAK4tg.png?width=2048&height=2048`,
                                                    srcSet: `../../assets/images/6XCuKq1Epba5MGrgQpNqqjAK4tg.png 512w,../../assets/images/6XCuKq1Epba5MGrgQpNqqjAK4tg.png?scale-down-to=1024&width=2048&height=2048 1024w,../../assets/images/6XCuKq1Epba5MGrgQpNqqjAK4tg.png?width=2048&height=2048 2048w`,
                                                  },
                                                },
                                              },
                                              children: p(pe, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 2048,
                                                  intrinsicWidth: 2048,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      765.6 +
                                                      0 +
                                                      45 +
                                                      0 +
                                                      0 +
                                                      3 +
                                                      0 +
                                                      10 +
                                                      0 +
                                                      0
                                                  ),
                                                  pixelHeight: 2048,
                                                  pixelWidth: 2048,
                                                  sizes: `269px`,
                                                  src: `../../assets/images/6XCuKq1Epba5MGrgQpNqqjAK4tg.png?width=2048&height=2048`,
                                                  srcSet: `../../assets/images/6XCuKq1Epba5MGrgQpNqqjAK4tg.png 512w,../../assets/images/6XCuKq1Epba5MGrgQpNqqjAK4tg.png?scale-down-to=1024&width=2048&height=2048 1024w,../../assets/images/6XCuKq1Epba5MGrgQpNqqjAK4tg.png?width=2048&height=2048 2048w`,
                                                },
                                                className: `framer-1o0o6va`,
                                                "data-framer-name": `FInal`,
                                                fitImageDimension: `height`,
                                              }),
                                            }),
                                          }),
                                          p(`div`, {
                                            className: `framer-swyurq`,
                                            "data-framer-name": `Título`,
                                            children: p(T, {
                                              __fromCanvasComponent: !0,
                                              children: p(c, {
                                                children: p(`p`, {
                                                  className: `framer-styles-preset-159ynhm`,
                                                  "data-styles-preset": `Q9AHy1iJd`,
                                                  dir: `auto`,
                                                  children: `Galatea Dam`,
                                                }),
                                              }),
                                              className: `framer-1d4tcxt`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              p(`div`, {
                                className: `framer-p9jx07`,
                                "data-framer-name": `Tarjeta Grande`,
                                children: p(`div`, {
                                  className: `framer-xip16`,
                                  "data-framer-name": `Suburbio`,
                                  children: p(`div`, {
                                    className: `framer-179jpnq`,
                                    "data-border": !0,
                                    "data-framer-name": `Tarjeta`,
                                    children: h(`div`, {
                                      className: `framer-1ckox2`,
                                      "data-border": !0,
                                      "data-framer-name": `Contenido`,
                                      children: [
                                        p(`div`, {
                                          className: `framer-1rvuj93`,
                                          "data-framer-name": `Rollo`,
                                          children: p(O, {
                                            breakpoint: b,
                                            overrides: {
                                              nqsfvFaAc: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1080,
                                                  intrinsicWidth: 1920,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      1115.2 +
                                                      0 +
                                                      802.2 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      3 +
                                                      0 +
                                                      10 +
                                                      0 +
                                                      0
                                                  ),
                                                  pixelHeight: 1080,
                                                  pixelWidth: 1920,
                                                  sizes: `max(${u?.width || `100vw`} - 86px, 1px)`,
                                                  src: `../../assets/images/vqoXPjOZwccphknDyGq6Dv8ZlA.png?width=1920&height=1080`,
                                                  srcSet: `../../assets/images/vqoXPjOZwccphknDyGq6Dv8ZlA.png?scale-down-to=512&width=1920&height=1080 512w,../../assets/images/vqoXPjOZwccphknDyGq6Dv8ZlA.png 1024w,../../assets/images/vqoXPjOZwccphknDyGq6Dv8ZlA.png?width=1920&height=1080 1920w`,
                                                },
                                              },
                                              r0rfOgam0: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1080,
                                                  intrinsicWidth: 1920,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      1115.2 +
                                                      0 +
                                                      1116.2 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      3 +
                                                      0 +
                                                      10 +
                                                      0 +
                                                      0
                                                  ),
                                                  pixelHeight: 1080,
                                                  pixelWidth: 1920,
                                                  sizes: `max(${u?.width || `100vw`} * 0.7 - 106px, 1px)`,
                                                  src: `../../assets/images/vqoXPjOZwccphknDyGq6Dv8ZlA.png?width=1920&height=1080`,
                                                  srcSet: `../../assets/images/vqoXPjOZwccphknDyGq6Dv8ZlA.png?scale-down-to=512&width=1920&height=1080 512w,../../assets/images/vqoXPjOZwccphknDyGq6Dv8ZlA.png 1024w,../../assets/images/vqoXPjOZwccphknDyGq6Dv8ZlA.png?width=1920&height=1080 1920w`,
                                                },
                                              },
                                            },
                                            children: p(pe, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 1080,
                                                intrinsicWidth: 1920,
                                                loading: S(
                                                  (u?.y || 0) +
                                                    0 +
                                                    0 +
                                                    50 +
                                                    0 +
                                                    765.6 +
                                                    0 +
                                                    388.6 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    3 +
                                                    0 +
                                                    10 +
                                                    0 +
                                                    0
                                                ),
                                                pixelHeight: 1080,
                                                pixelWidth: 1920,
                                                sizes: `574px`,
                                                src: `../../assets/images/vqoXPjOZwccphknDyGq6Dv8ZlA.png?width=1920&height=1080`,
                                                srcSet: `../../assets/images/vqoXPjOZwccphknDyGq6Dv8ZlA.png?scale-down-to=512&width=1920&height=1080 512w,../../assets/images/vqoXPjOZwccphknDyGq6Dv8ZlA.png 1024w,../../assets/images/vqoXPjOZwccphknDyGq6Dv8ZlA.png?width=1920&height=1080 1920w`,
                                              },
                                              className: `framer-o7s35k`,
                                              "data-framer-name": `Final`,
                                              fitImageDimension: `height`,
                                            }),
                                          }),
                                        }),
                                        p(`div`, {
                                          className: `framer-1c8x0vs`,
                                          "data-framer-name": `Título`,
                                          children: p(T, {
                                            __fromCanvasComponent: !0,
                                            children: p(c, {
                                              children: p(`p`, {
                                                className: `framer-styles-preset-159ynhm`,
                                                "data-styles-preset": `Q9AHy1iJd`,
                                                dir: `auto`,
                                                children: `Suburbio`,
                                              }),
                                            }),
                                            className: `framer-1u8w04o`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          h(`div`, {
                            className: `framer-1x6yy9v`,
                            "data-framer-name": `Servicios`,
                            children: [
                              p(T, {
                                __fromCanvasComponent: !0,
                                children: p(c, {
                                  children: p(`h2`, {
                                    className: `framer-styles-preset-42z49n`,
                                    "data-styles-preset": `qXsEpTAxV`,
                                    dir: `auto`,
                                    children: `Services`,
                                  }),
                                }),
                                className: `framer-wgp67n`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              h(`div`, {
                                className: `framer-1257f3n`,
                                "data-framer-name": `Tarjetas Pequeñas`,
                                children: [
                                  p(`div`, {
                                    className: `framer-vm8k30`,
                                    "data-framer-name": `Miniatura`,
                                    children: p(`div`, {
                                      className: `framer-115upg4`,
                                      "data-border": !0,
                                      "data-framer-name": `Tarjeta`,
                                      children: h(`div`, {
                                        className: `framer-1s0r061`,
                                        "data-border": !0,
                                        "data-framer-name": `Contenido`,
                                        children: [
                                          h(`div`, {
                                            className: `framer-14y04qq`,
                                            "data-framer-name": `Título`,
                                            children: [
                                              p(T, {
                                                __fromCanvasComponent: !0,
                                                children: p(c, {
                                                  children: h(`h2`, {
                                                    className: `framer-styles-preset-g258t7`,
                                                    "data-styles-preset": `fw5vKbidS`,
                                                    dir: `auto`,
                                                    children: [
                                                      `GFX Design`,
                                                      p(`br`, {}),
                                                      `Thumbails`,
                                                    ],
                                                  }),
                                                }),
                                                className: `framer-4ud3se`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              h(`div`, {
                                                className: `framer-12jry3a`,
                                                "data-framer-name": `Precio`,
                                                children: [
                                                  p(T, {
                                                    __fromCanvasComponent: !0,
                                                    children: p(c, {
                                                      children: p(`p`, {
                                                        className: `framer-styles-preset-1k3mn7p`,
                                                        "data-styles-preset": `EvBl33G0D`,
                                                        dir: `auto`,
                                                        style: { "--framer-text-alignment": `end` },
                                                        children: `starting at`,
                                                      }),
                                                    }),
                                                    className: `framer-zk86rt`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  h(`div`, {
                                                    className: `framer-2cmg3b`,
                                                    "data-framer-name": `Valor`,
                                                    children: [
                                                      h(w, {
                                                        className: `framer-12ukc7d`,
                                                        "data-framer-name": `Robux`,
                                                        requiresOverflowVisible: !1,
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13 14.068" overflow="visible"><path d="M 11.592 2.487 C 12.463 2.987 12.999 3.91 13 4.91 L 13 9.153 C 13 10.153 12.463 11.077 11.592 11.576 L 7.908 13.692 C 7.037 14.193 5.963 14.193 5.092 13.692 L 1.408 11.565 C 0.54 11.068 0.003 10.149 0 9.153 L 0 4.91 C 0.001 3.91 0.537 2.987 1.408 2.487 L 5.092 0.376 C 5.963 -0.125 7.037 -0.125 7.908 0.376 Z M 5.585 1.334 L 1.999 3.397 C 1.431 3.719 1.081 4.319 1.083 4.969 L 1.083 9.088 C 1.082 9.738 1.432 10.338 1.999 10.661 L 5.585 12.723 C 6.152 13.046 6.848 13.046 7.415 12.723 L 11.001 10.661 C 11.568 10.338 11.918 9.738 11.917 9.088 L 11.917 4.969 C 11.919 4.319 11.569 3.719 11.001 3.397 L 7.415 1.334 C 6.848 1.012 6.152 1.012 5.585 1.334 Z M 7.253 2.487 L 10.08 4.102 C 10.542 4.367 10.828 4.854 10.833 5.384 L 10.833 8.614 C 10.834 9.148 10.547 9.642 10.08 9.907 L 7.253 11.522 C 6.788 11.792 6.212 11.792 5.747 11.522 L 2.92 9.907 C 2.465 9.648 2.179 9.173 2.167 8.652 L 2.167 5.384 C 2.174 4.856 2.46 4.371 2.92 4.108 L 5.747 2.492 C 6.212 2.222 6.788 2.222 7.253 2.492 Z M 4.875 8.641 L 8.125 8.641 L 8.125 5.411 L 4.875 5.411 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                                        withExternalLayout: !0,
                                                        children: [
                                                          p(w, {
                                                            className: `framer-7x9vba`,
                                                            requiresOverflowVisible: !1,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13 14.068" overflow="visible"><path d="M 11.592 2.487 C 12.463 2.987 12.999 3.91 13 4.91 L 13 9.153 C 13 10.153 12.463 11.077 11.592 11.576 L 7.908 13.692 C 7.037 14.193 5.963 14.193 5.092 13.692 L 1.408 11.565 C 0.54 11.068 0.003 10.149 0 9.153 L 0 4.91 C 0.001 3.91 0.537 2.987 1.408 2.487 L 5.092 0.376 C 5.963 -0.125 7.037 -0.125 7.908 0.376 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          p(w, {
                                                            className: `framer-1t11u6e`,
                                                            requiresOverflowVisible: !1,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.833 11.873" overflow="visible"><path d="M 4.501 0.242 L 0.915 2.304 C 0.348 2.626 -0.002 3.227 0 3.877 L 0 7.996 C -0.001 8.645 0.349 9.246 0.915 9.568 L 4.501 11.631 C 5.068 11.954 5.765 11.954 6.332 11.631 L 9.918 9.568 C 10.485 9.246 10.834 8.645 10.833 7.996 L 10.833 3.877 C 10.835 3.227 10.486 2.626 9.918 2.304 L 6.332 0.242 C 5.765 -0.081 5.068 -0.081 4.501 0.242 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          p(w, {
                                                            className: `framer-1cy0ak`,
                                                            requiresOverflowVisible: !1,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.667 9.434" overflow="visible"><path d="M 5.086 0.197 L 7.914 1.812 C 8.375 2.077 8.661 2.564 8.667 3.094 L 8.667 6.325 C 8.667 6.858 8.38 7.352 7.914 7.617 L 5.086 9.232 C 4.621 9.502 4.046 9.502 3.58 9.232 L 0.753 7.617 C 0.298 7.359 0.013 6.883 0 6.362 L 0 3.094 C 0.007 2.566 0.293 2.081 0.753 1.818 L 3.58 0.202 C 4.046 -0.067 4.621 -0.067 5.086 0.202 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          p(w, {
                                                            className: `framer-13l6usn`,
                                                            requiresOverflowVisible: !1,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.25 3.231" overflow="visible"><path d="M 0 3.231 L 3.25 3.231 L 3.25 0 L 0 0 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        ],
                                                      }),
                                                      p(T, {
                                                        __fromCanvasComponent: !0,
                                                        children: p(c, {
                                                          children: p(`p`, {
                                                            className: `framer-styles-preset-xqflja`,
                                                            "data-styles-preset": `x33uokRI8`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-alignment": `end`,
                                                            },
                                                            children: `2000`,
                                                          }),
                                                        }),
                                                        className: `framer-1perxvy`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          p(T, {
                                            __fromCanvasComponent: !0,
                                            children: p(c, {
                                              children: p(`p`, {
                                                className: `framer-styles-preset-1k3mn7p`,
                                                "data-styles-preset": `EvBl33G0D`,
                                                dir: `auto`,
                                                children: `High-quality 16:9 renders, any theme, any character, eye-catching. Perfect for games and miniatures.`,
                                              }),
                                            }),
                                            className: `framer-1lnd08x`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  p(`div`, {
                                    className: `framer-104xu8y`,
                                    "data-framer-name": `Portada`,
                                    children: p(`div`, {
                                      className: `framer-q2pvs7`,
                                      "data-border": !0,
                                      "data-framer-name": `Tarjeta`,
                                      children: h(`div`, {
                                        className: `framer-190wvdg`,
                                        "data-border": !0,
                                        "data-framer-name": `Contenido`,
                                        children: [
                                          h(`div`, {
                                            className: `framer-skr0rd`,
                                            "data-framer-name": `Título`,
                                            children: [
                                              h(`div`, {
                                                className: `framer-1mgmpci`,
                                                "data-framer-name": `Precio`,
                                                children: [
                                                  p(T, {
                                                    __fromCanvasComponent: !0,
                                                    children: p(c, {
                                                      children: p(`p`, {
                                                        className: `framer-styles-preset-1k3mn7p`,
                                                        "data-styles-preset": `EvBl33G0D`,
                                                        dir: `auto`,
                                                        style: { "--framer-text-alignment": `end` },
                                                        children: `starting at`,
                                                      }),
                                                    }),
                                                    className: `framer-1ual4tk`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  h(`div`, {
                                                    className: `framer-kwbiv0`,
                                                    "data-framer-name": `Valor`,
                                                    children: [
                                                      p(T, {
                                                        __fromCanvasComponent: !0,
                                                        children: p(c, {
                                                          children: p(`p`, {
                                                            className: `framer-styles-preset-xqflja`,
                                                            "data-styles-preset": `x33uokRI8`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-alignment": `end`,
                                                            },
                                                            children: `600`,
                                                          }),
                                                        }),
                                                        className: `framer-1f10new`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      h(w, {
                                                        className: `framer-9ifiz4`,
                                                        "data-framer-name": `Robux`,
                                                        requiresOverflowVisible: !1,
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13 14.068" overflow="visible"><path d="M 11.592 2.487 C 12.463 2.987 12.999 3.91 13 4.91 L 13 9.153 C 13 10.153 12.463 11.077 11.592 11.576 L 7.908 13.692 C 7.037 14.193 5.963 14.193 5.092 13.692 L 1.408 11.565 C 0.54 11.068 0.003 10.149 0 9.153 L 0 4.91 C 0.001 3.91 0.537 2.987 1.408 2.487 L 5.092 0.376 C 5.963 -0.125 7.037 -0.125 7.908 0.376 Z M 5.585 1.334 L 1.999 3.397 C 1.431 3.719 1.081 4.319 1.083 4.969 L 1.083 9.088 C 1.082 9.738 1.432 10.338 1.999 10.661 L 5.585 12.723 C 6.152 13.046 6.848 13.046 7.415 12.723 L 11.001 10.661 C 11.568 10.338 11.918 9.738 11.917 9.088 L 11.917 4.969 C 11.919 4.319 11.569 3.719 11.001 3.397 L 7.415 1.334 C 6.848 1.012 6.152 1.012 5.585 1.334 Z M 7.253 2.487 L 10.08 4.102 C 10.542 4.367 10.828 4.854 10.833 5.384 L 10.833 8.614 C 10.834 9.148 10.547 9.642 10.08 9.907 L 7.253 11.522 C 6.788 11.792 6.212 11.792 5.747 11.522 L 2.92 9.907 C 2.465 9.648 2.179 9.173 2.167 8.652 L 2.167 5.384 C 2.174 4.856 2.46 4.371 2.92 4.108 L 5.747 2.492 C 6.212 2.222 6.788 2.222 7.253 2.492 Z M 4.875 8.641 L 8.125 8.641 L 8.125 5.411 L 4.875 5.411 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                                        withExternalLayout: !0,
                                                        children: [
                                                          p(w, {
                                                            className: `framer-1mm56pa`,
                                                            requiresOverflowVisible: !1,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13 14.068" overflow="visible"><path d="M 11.592 2.487 C 12.463 2.987 12.999 3.91 13 4.91 L 13 9.153 C 13 10.153 12.463 11.077 11.592 11.576 L 7.908 13.692 C 7.037 14.193 5.963 14.193 5.092 13.692 L 1.408 11.565 C 0.54 11.068 0.003 10.149 0 9.153 L 0 4.91 C 0.001 3.91 0.537 2.987 1.408 2.487 L 5.092 0.376 C 5.963 -0.125 7.037 -0.125 7.908 0.376 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          p(w, {
                                                            className: `framer-1fbmpqf`,
                                                            requiresOverflowVisible: !1,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.833 11.873" overflow="visible"><path d="M 4.501 0.242 L 0.915 2.304 C 0.348 2.626 -0.002 3.227 0 3.877 L 0 7.996 C -0.001 8.645 0.349 9.246 0.915 9.568 L 4.501 11.631 C 5.068 11.954 5.765 11.954 6.332 11.631 L 9.918 9.568 C 10.485 9.246 10.834 8.645 10.833 7.996 L 10.833 3.877 C 10.835 3.227 10.486 2.626 9.918 2.304 L 6.332 0.242 C 5.765 -0.081 5.068 -0.081 4.501 0.242 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          p(w, {
                                                            className: `framer-912uc7`,
                                                            requiresOverflowVisible: !1,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.667 9.434" overflow="visible"><path d="M 5.086 0.197 L 7.914 1.812 C 8.375 2.077 8.661 2.564 8.667 3.094 L 8.667 6.325 C 8.667 6.858 8.38 7.352 7.914 7.617 L 5.086 9.232 C 4.621 9.502 4.046 9.502 3.58 9.232 L 0.753 7.617 C 0.298 7.359 0.013 6.883 0 6.362 L 0 3.094 C 0.007 2.566 0.293 2.081 0.753 1.818 L 3.58 0.202 C 4.046 -0.067 4.621 -0.067 5.086 0.202 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          p(w, {
                                                            className: `framer-1webfca`,
                                                            requiresOverflowVisible: !1,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.25 3.231" overflow="visible"><path d="M 0 3.231 L 3.25 3.231 L 3.25 0 L 0 0 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              p(O, {
                                                breakpoint: b,
                                                overrides: {
                                                  nqsfvFaAc: {
                                                    children: p(c, {
                                                      children: h(`h2`, {
                                                        className: `framer-styles-preset-g258t7`,
                                                        "data-styles-preset": `fw5vKbidS`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-alignment": `start`,
                                                        },
                                                        children: [
                                                          `GFX Design`,
                                                          p(`br`, {}),
                                                          `Covers`,
                                                        ],
                                                      }),
                                                    }),
                                                  },
                                                  r0rfOgam0: {
                                                    children: p(c, {
                                                      children: h(`h2`, {
                                                        className: `framer-styles-preset-g258t7`,
                                                        "data-styles-preset": `fw5vKbidS`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-alignment": `start`,
                                                        },
                                                        children: [
                                                          `GFX Design`,
                                                          p(`br`, {}),
                                                          `Covers`,
                                                        ],
                                                      }),
                                                    }),
                                                  },
                                                },
                                                children: p(T, {
                                                  __fromCanvasComponent: !0,
                                                  children: p(c, {
                                                    children: h(`h2`, {
                                                      className: `framer-styles-preset-g258t7`,
                                                      "data-styles-preset": `fw5vKbidS`,
                                                      dir: `auto`,
                                                      style: { "--framer-text-alignment": `end` },
                                                      children: [
                                                        `GFX Design`,
                                                        p(`br`, {}),
                                                        `Covers`,
                                                      ],
                                                    }),
                                                  }),
                                                  className: `framer-1plwh2e`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                          p(O, {
                                            breakpoint: b,
                                            overrides: {
                                              nqsfvFaAc: {
                                                children: p(c, {
                                                  children: p(`p`, {
                                                    className: `framer-styles-preset-1k3mn7p`,
                                                    "data-styles-preset": `EvBl33G0D`,
                                                    dir: `auto`,
                                                    style: { "--framer-text-alignment": `start` },
                                                    children: `High-quality 1:1 renders, any theme, any character. Eye-catching. Designed for easy recognition and branding.`,
                                                  }),
                                                }),
                                              },
                                              r0rfOgam0: {
                                                children: p(c, {
                                                  children: p(`p`, {
                                                    className: `framer-styles-preset-1k3mn7p`,
                                                    "data-styles-preset": `EvBl33G0D`,
                                                    dir: `auto`,
                                                    style: { "--framer-text-alignment": `start` },
                                                    children: `High-quality 1:1 renders, any theme, any character. Eye-catching. Designed for easy recognition and branding.`,
                                                  }),
                                                }),
                                              },
                                            },
                                            children: p(T, {
                                              __fromCanvasComponent: !0,
                                              children: p(c, {
                                                children: p(`p`, {
                                                  className: `framer-styles-preset-1k3mn7p`,
                                                  "data-styles-preset": `EvBl33G0D`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-alignment": `end` },
                                                  children: `High-quality 1:1 renders, any theme, any character. Eye-catching. Designed for easy recognition and branding.`,
                                                }),
                                              }),
                                              className: `framer-k4tx38`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              p(O, {
                                breakpoint: b,
                                overrides: {
                                  nqsfvFaAc: {
                                    width: `calc(${u?.width || `100vw`} - 60px)`,
                                    y: (u?.y || 0) + 0 + 0 + 50 + 0 + 2193 + 0 + 420,
                                  },
                                  r0rfOgam0: {
                                    width: `calc(${u?.width || `100vw`} * 0.7 - 80px)`,
                                    y: (u?.y || 0) + 0 + 0 + 50 + 0 + 2595 + 0 + 420,
                                  },
                                },
                                children: p(we, {
                                  height: 71,
                                  width: `600px`,
                                  y: (u?.y || 0) + 0 + 0 + 50 + 0 + 1581.8 + 0 + 232.5,
                                  children: p(ye, {
                                    className: `framer-7fkjwa-container`,
                                    id: Te,
                                    nodeId: `yhfDy_p6a`,
                                    ref: Ee,
                                    scopeId: `augiA20Il`,
                                    children: p(Mc, {
                                      height: `100%`,
                                      id: `yhfDy_p6a`,
                                      layoutId: `yhfDy_p6a`,
                                      style: { width: `100%` },
                                      variant: Gl(`RjV02RmXp`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  p(`div`, { id: `overlay` }),
                ],
              }),
            })
          );
        }),
        [
          `.framer-1j7B1.framer-lux5qc, .framer-1j7B1 .framer-lux5qc { display: block; }`,
          `.framer-1j7B1.framer-72rtr7 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
          `.framer-1j7B1 .framer-tqpngz { align-content: flex-start; align-items: flex-start; background-color: var(--token-d292610c-87f6-4102-ac93-51fdf043bf78, #d9d9d9); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-1j7B1 .framer-1kphyw6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 50px 0px 50px; position: relative; width: 700px; }`,
          `.framer-1j7B1 .framer-1b40kbg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-1j7B1 .framer-1f11fff, .framer-1j7B1 .framer-14ay6e6, .framer-1j7B1 .framer-l9grff { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
          `.framer-1j7B1 .framer-1ajptsa, .framer-1j7B1 .framer-5jtqgd, .framer-1j7B1 .framer-6yztux, .framer-1j7B1 .framer-1t7t1qz, .framer-1j7B1 .framer-89oa99, .framer-1j7B1 .framer-1hu1yvr, .framer-1j7B1 .framer-rkjegd, .framer-1j7B1 .framer-h8jkbp, .framer-1j7B1 .framer-1uewynn, .framer-1j7B1 .framer-1beevpy, .framer-1j7B1 .framer-1fq55tv, .framer-1j7B1 .framer-88eq96, .framer-1j7B1 .framer-1qslbfe, .framer-1j7B1 .framer-eo8t4s, .framer-1j7B1 .framer-1bu355n, .framer-1j7B1 .framer-k82hol, .framer-1j7B1 .framer-3dd7vb, .framer-1j7B1 .framer-vnyg7b, .framer-1j7B1 .framer-1d4tcxt, .framer-1j7B1 .framer-1u8w04o, .framer-1j7B1 .framer-wgp67n, .framer-1j7B1 .framer-4ud3se, .framer-1j7B1 .framer-zk86rt, .framer-1j7B1 .framer-1perxvy, .framer-1j7B1 .framer-1ual4tk, .framer-1j7B1 .framer-1f10new, .framer-1j7B1 .framer-1plwh2e { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-1j7B1 .framer-kggmwf, .framer-1j7B1 .framer-1lnd08x, .framer-1j7B1 .framer-k4tx38 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-1j7B1 .framer-1cftgkx { display: grid; flex: none; gap: 10px 10px; height: min-content; padding: 0px; position: relative; width: 100%; }`,
          `.framer-1j7B1 .framer-ytdcj5, .framer-1j7B1 .framer-yeorrc, .framer-1j7B1 .framer-p68axu, .framer-1j7B1 .framer-1hw0j0p { --border-bottom-width: 1px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #d9d9d9); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; align-self: start; background-color: var(--token-74a21abb-ce20-4d02-81dc-502468462d7f, #f0f0f0); border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; box-shadow: 0px 0px 15px -10px var(--token-a81eb0b3-0303-4615-a8d4-302833bfff8d, #d9d9d9); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 3px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1j7B1 .framer-qjn5ma, .framer-1j7B1 .framer-1gozyto, .framer-1j7B1 .framer-wp8sz6 { --border-bottom-width: 1px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #f0f0f0); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-d292610c-87f6-4102-ac93-51fdf043bf78, #d9d9d9); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1j7B1 .framer-1ly86wb, .framer-1j7B1 .framer-ox0dry, .framer-1j7B1 .framer-1a7s78l, .framer-1j7B1 .framer-1tckl9h { --1df8v9o: var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, #000000); aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 24px; }`,
          `.framer-1j7B1 .framer-rjl782, .framer-1j7B1 .framer-1ar6943, .framer-1j7B1 .framer-1mgmpci { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-1j7B1 .framer-n2nrda, .framer-1j7B1 .framer-9pdin9, .framer-1j7B1 .framer-19c8ic9 { --border-bottom-width: 1px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #f0f0f0); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; background-color: var(--token-d292610c-87f6-4102-ac93-51fdf043bf78, #d9d9d9); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1j7B1 .framer-1nlt6vr, .framer-1j7B1 .framer-1osis1v, .framer-1j7B1 .framer-12jry3a { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-1j7B1 .framer-1vaadg3, .framer-1j7B1 .framer-2x3hw7, .framer-1j7B1 .framer-p9jx07 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-1j7B1 .framer-1h4zkgc, .framer-1j7B1 .framer-xip16 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
          `.framer-1j7B1 .framer-1oudy2g, .framer-1j7B1 .framer-1w810i2, .framer-1j7B1 .framer-1rm75v1, .framer-1j7B1 .framer-lv4dc6, .framer-1j7B1 .framer-179jpnq, .framer-1j7B1 .framer-115upg4, .framer-1j7B1 .framer-q2pvs7 { --border-bottom-width: 1px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #d9d9d9); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-74a21abb-ce20-4d02-81dc-502468462d7f, #f0f0f0); border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; box-shadow: 0px 0px 15px -10px var(--token-a81eb0b3-0303-4615-a8d4-302833bfff8d, #d9d9d9); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 3px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1j7B1 .framer-8uof0n, .framer-1j7B1 .framer-1ld8ez7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-1j7B1 .framer-9uxse9 { height: 17px; position: relative; width: 21px; }`,
          `.framer-1j7B1 .framer-106x5ck { height: 17px; left: 0px; position: absolute; top: 0px; width: 21px; }`,
          `.framer-1j7B1 .framer-bs5yid { height: 5px; left: 5px; position: absolute; top: 7px; width: 4px; }`,
          `.framer-1j7B1 .framer-1op8i1v { height: 5px; left: 12px; position: absolute; top: 7px; width: 4px; }`,
          `.framer-1j7B1 .framer-1k40m0t { height: 19px; position: relative; width: 22px; }`,
          `.framer-1j7B1 .framer-392vtd { height: 9px; left: 10px; position: absolute; top: 6px; width: 10px; }`,
          `.framer-1j7B1 .framer-s8yeiv { height: 19px; left: 0px; position: absolute; top: 0px; width: 22px; }`,
          `.framer-1j7B1 .framer-88fgq4 { height: 6px; left: 11px; position: absolute; top: 8px; width: 6px; }`,
          `.framer-1j7B1 .framer-1udi7yo { height: 20px; position: relative; width: 15px; }`,
          `.framer-1j7B1 .framer-1a4pctk, .framer-1j7B1 .framer-138cp68, .framer-1j7B1 .framer-72g46r, .framer-1j7B1 .framer-1vdzxv4 { height: 22px; position: relative; width: 22px; }`,
          `.framer-1j7B1 .framer-1kubwc2 { height: 3px; left: 7px; position: absolute; top: 7px; width: 3px; }`,
          `.framer-1j7B1 .framer-l4rvnc, .framer-1j7B1 .framer-1548ojm, .framer-1j7B1 .framer-f6mfwd, .framer-1j7B1 .framer-1umgslw { height: 22px; left: 0px; position: absolute; top: 0px; width: 22px; }`,
          `.framer-1j7B1 .framer-1pl86gm { height: 10px; left: 5px; position: absolute; top: 6px; width: 7px; }`,
          `.framer-1j7B1 .framer-bqcim7 { height: 8px; left: 13px; position: absolute; top: 8px; width: 6px; }`,
          `.framer-1j7B1 .framer-1ydv24j { height: 4px; left: 8px; position: absolute; top: 7px; width: 3px; }`,
          `.framer-1j7B1 .framer-8izj5s { height: 10px; left: 5px; position: absolute; top: 6px; width: 9px; }`,
          `.framer-1j7B1 .framer-1ueniq5 { height: 8px; left: 15px; position: absolute; top: 8px; width: 2px; }`,
          `.framer-1j7B1 .framer-14x9w7g { height: 3px; left: 14px; position: absolute; top: 5px; width: 3px; }`,
          `.framer-1j7B1 .framer-1fficux { height: 8px; left: 3px; position: absolute; top: 11px; width: 14px; }`,
          `.framer-1j7B1 .framer-1qu38lq { height: 8px; left: 5px; position: absolute; top: 3px; width: 14px; }`,
          `.framer-1j7B1 .framer-1wq06mr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-1j7B1 .framer-1k57x4l-container { flex: none; height: 20px; position: relative; width: 20px; }`,
          `.framer-1j7B1 .framer-1spuarl { --border-bottom-width: 1px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #d9d9d9); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-74a21abb-ce20-4d02-81dc-502468462d7f, #f2f2f2); border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: 0px 0px 15px -10px var(--token-a81eb0b3-0303-4615-a8d4-302833bfff8d, #595959); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 7px 4px 7px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
          `.framer-1j7B1 .framer-175avyi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-1j7B1 .framer-16fn4ba { height: 15px; left: 4px; position: absolute; top: 4px; width: 15px; }`,
          `.framer-1j7B1 .framer-fx5bph { height: 5px; left: 9px; position: absolute; top: 9px; width: 5px; }`,
          `.framer-1j7B1 .framer-t8v0gz, .framer-1j7B1 .framer-llqf7b, .framer-1j7B1 .framer-qoc87a { --border-bottom-width: 1px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #d9d9d9); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-74a21abb-ce20-4d02-81dc-502468462d7f, #f2f2f2); border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 3px 6px 3px 6px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1j7B1 .framer-okalni, .framer-1j7B1 .framer-1qwvijh, .framer-1j7B1 .framer-1cn84a4 { --1m973uw: var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, #000000); --js9iwy: 2; aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 14px; }`,
          `.framer-1j7B1 .framer-xv4k64 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-1j7B1 .framer-1wfjapi, .framer-1j7B1 .framer-7i2ahl, .framer-1j7B1 .framer-vm8k30, .framer-1j7B1 .framer-104xu8y { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
          `.framer-1j7B1 .framer-zd2w62, .framer-1j7B1 .framer-1p55y91, .framer-1j7B1 .framer-1ckox2 { --border-bottom-width: 1px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #f0f0f0); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-d292610c-87f6-4102-ac93-51fdf043bf78, #d9d9d9); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 13px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1j7B1 .framer-1j7y2zr, .framer-1j7B1 .framer-7c5wx4, .framer-1j7B1 .framer-1rvuj93 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-1j7B1 .framer-pyugnn, .framer-1j7B1 .framer-1o0o6va, .framer-1j7B1 .framer-o7s35k { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-1j7B1 .framer-2iiqs9, .framer-1j7B1 .framer-swyurq, .framer-1j7B1 .framer-1c8x0vs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 10px 0px 10px; position: relative; width: 100%; }`,
          `.framer-1j7B1 .framer-1x6yy9v { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-1j7B1 .framer-1257f3n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-1j7B1 .framer-1s0r061 { --border-bottom-width: 1px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #f0f0f0); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-d292610c-87f6-4102-ac93-51fdf043bf78, #d9d9d9); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 15px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1j7B1 .framer-14y04qq, .framer-1j7B1 .framer-skr0rd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-1j7B1 .framer-2cmg3b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-1j7B1 .framer-12ukc7d, .framer-1j7B1 .framer-9ifiz4 { height: 14px; position: relative; width: 13px; }`,
          `.framer-1j7B1 .framer-7x9vba, .framer-1j7B1 .framer-1mm56pa { height: 14px; left: 0px; position: absolute; top: 0px; width: 13px; }`,
          `.framer-1j7B1 .framer-1t11u6e, .framer-1j7B1 .framer-1fbmpqf { height: 12px; left: 1px; position: absolute; top: 1px; width: 11px; }`,
          `.framer-1j7B1 .framer-1cy0ak, .framer-1j7B1 .framer-912uc7 { height: 10px; left: 2px; position: absolute; top: 2px; width: 9px; }`,
          `.framer-1j7B1 .framer-13l6usn, .framer-1j7B1 .framer-1webfca { height: 3px; left: 5px; position: absolute; top: 5px; width: 4px; }`,
          `.framer-1j7B1 .framer-190wvdg { --border-bottom-width: 1px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #f0f0f0); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; background-color: var(--token-d292610c-87f6-4102-ac93-51fdf043bf78, #d9d9d9); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 15px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1j7B1 .framer-kwbiv0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-1j7B1 .framer-7fkjwa-container { flex: none; height: auto; position: relative; width: 100%; }`,
          ...ll,
          ...Oo,
          ...al,
          ...hc,
          ...pl,
          ...bo,
          `.framer-1j7B1[data-border="true"]::after, .framer-1j7B1 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
          `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-1j7B1.framer-72rtr7 { width: 810px; } .framer-1j7B1 .framer-1kphyw6 { padding: 0px 40px 0px 40px; width: 70%; } .framer-1j7B1 .framer-1cftgkx { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: center; } .framer-1j7B1 .framer-ytdcj5, .framer-1j7B1 .framer-yeorrc, .framer-1j7B1 .framer-p68axu, .framer-1j7B1 .framer-1hw0j0p { align-self: unset; } .framer-1j7B1 .framer-n2nrda, .framer-1j7B1 .framer-1nlt6vr, .framer-1j7B1 .framer-9pdin9, .framer-1j7B1 .framer-1osis1v, .framer-1j7B1 .framer-19c8ic9 { align-content: flex-start; align-items: flex-start; } .framer-1j7B1 .framer-1h4zkgc, .framer-1j7B1 .framer-xv4k64, .framer-1j7B1 .framer-xip16, .framer-1j7B1 .framer-1257f3n { flex-direction: column; } .framer-1j7B1 .framer-1oudy2g, .framer-1j7B1 .framer-1w810i2, .framer-1j7B1 .framer-1rm75v1, .framer-1j7B1 .framer-lv4dc6, .framer-1j7B1 .framer-179jpnq, .framer-1j7B1 .framer-115upg4, .framer-1j7B1 .framer-q2pvs7 { flex: none; width: 100%; } .framer-1j7B1 .framer-1k57x4l-container, .framer-1j7B1 .framer-1f10new { order: 1; } .framer-1j7B1 .framer-175avyi, .framer-1j7B1 .framer-9ifiz4, .framer-1j7B1 .framer-1plwh2e { order: 0; } .framer-1j7B1 .framer-1wfjapi, .framer-1j7B1 .framer-7i2ahl, .framer-1j7B1 .framer-vm8k30, .framer-1j7B1 .framer-104xu8y { flex: none; flex-direction: column; width: 100%; } .framer-1j7B1 .framer-1mgmpci { align-content: flex-end; align-items: flex-end; order: 1; } .framer-1j7B1 .framer-kwbiv0 { justify-content: flex-end; }}`,
          `@media (max-width: 809.98px) { .framer-1j7B1.framer-72rtr7 { width: 390px; } .framer-1j7B1 .framer-1kphyw6 { padding: 0px 30px 0px 30px; width: 100%; } .framer-1j7B1 .framer-1cftgkx { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: center; } .framer-1j7B1 .framer-ytdcj5, .framer-1j7B1 .framer-yeorrc, .framer-1j7B1 .framer-p68axu, .framer-1j7B1 .framer-1hw0j0p { align-self: unset; } .framer-1j7B1 .framer-n2nrda, .framer-1j7B1 .framer-1nlt6vr, .framer-1j7B1 .framer-9pdin9, .framer-1j7B1 .framer-1osis1v, .framer-1j7B1 .framer-19c8ic9 { align-content: flex-start; align-items: flex-start; } .framer-1j7B1 .framer-1h4zkgc, .framer-1j7B1 .framer-xv4k64, .framer-1j7B1 .framer-xip16, .framer-1j7B1 .framer-1257f3n { flex-direction: column; } .framer-1j7B1 .framer-1oudy2g, .framer-1j7B1 .framer-1w810i2, .framer-1j7B1 .framer-1rm75v1, .framer-1j7B1 .framer-lv4dc6, .framer-1j7B1 .framer-179jpnq, .framer-1j7B1 .framer-115upg4, .framer-1j7B1 .framer-q2pvs7 { flex: none; width: 100%; } .framer-1j7B1 .framer-1k57x4l-container, .framer-1j7B1 .framer-1f10new { order: 1; } .framer-1j7B1 .framer-175avyi, .framer-1j7B1 .framer-9ifiz4, .framer-1j7B1 .framer-1plwh2e { order: 0; } .framer-1j7B1 .framer-1wfjapi, .framer-1j7B1 .framer-7i2ahl, .framer-1j7B1 .framer-vm8k30, .framer-1j7B1 .framer-104xu8y { flex: none; flex-direction: column; width: 100%; } .framer-1j7B1 .framer-1mgmpci { align-content: flex-end; align-items: flex-end; order: 1; } .framer-1j7B1 .framer-kwbiv0 { justify-content: flex-end; }}`,
        ],
        `framer-1j7B1`
      )),
      (Yl.displayName = `Home`),
      (Yl.defaultProps = { height: 2180, width: 1200 }),
      Oe(
        Yl,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Sl,
          ...Cl,
          ...wl,
          ...Tl,
          ...Dl,
          ...Ol,
          ...Al,
          ...Ml,
          ...Pl,
          ...E(cl),
          ...E(Do),
          ...E(il),
          ...E(mc),
          ...E(fl),
          ...E(yo),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Yl.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([ke(Ks, {}, t), ke(Mc, {}, t)])),
      }),
      (Xl = {
        exports: {
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FrameraugiA20Il`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerImmutableVariables: `true`,
              framerColorSyntax: `true`,
              framerScrollSections: `{"PpqI0Bzwt":{"pattern":":PpqI0Bzwt","name":"top"},"yhfDy_p6a":{"pattern":":yhfDy_p6a","name":"contact"}}`,
              framerIntrinsicHeight: `2180`,
              framerAutoSizeImages: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"r0rfOgam0":{"layout":["fixed","auto"]},"nqsfvFaAc":{"layout":["fixed","auto"]}}}`,
              framerDisplayContentsDiv: `false`,
              framerAcceptsLayoutTemplate: `true`,
              framerResponsiveScreen: `true`,
              framerIntrinsicWidth: `1200`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
async function Ql(e, t, n) {
  let r = eu[e],
    i = r ? await r(t, n) : void 0,
    a = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] };
  for (let t of $l) {
    if (t.pageIds && !t.pageIds.has(e)) continue;
    let n = t.code(i);
    n && a[t.placement].push({ ...t, code: n });
  }
  return a;
}
var $l,
  eu,
  tu,
  nu,
  ru = t(() => {
    (($l = [
      {
        code: (e) => `<meta name="theme-color" content="#f0f0f0">

<style>
  html {
    background: #f0f0f0;
  }

  body {
    margin: 0;
    opacity: 0;
    background: #f0f0f0;
    transition: opacity 0.1s ease;
  }

  body.scroll-ready {
    opacity: 1;
  }

  @media (prefers-color-scheme: dark) {
    html,
    body {
      background: #1c1c1c;
    }
  }
</style>

<script>
(function () {
  const scrollKey = "saved-scroll-position";
  const themeMeta = document.querySelector(
    'meta[name="theme-color"]'
  );
  const darkModeQuery = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );

  function updateThemeColor() {
    const isDark = darkModeQuery.matches;

    if (themeMeta) {
      themeMeta.setAttribute(
        "content",
        isDark ? "#1c1c1c" : "#f0f0f0"
      );
    }

    document.documentElement.style.backgroundColor =
      isDark ? "#1c1c1c" : "#f0f0f0";

    if (document.body) {
      document.body.style.backgroundColor =
        isDark ? "#1c1c1c" : "#f0f0f0";
    }
  }

  function saveScrollPosition() {
    sessionStorage.setItem(
      scrollKey,
      String(window.scrollY)
    );
  }

  function restoreScrollPosition() {
    const savedY = Number(
      sessionStorage.getItem(scrollKey) || 0
    );

    setTimeout(function () {
      window.scrollTo(0, savedY);

      requestAnimationFrame(function () {
        document.body.classList.add("scroll-ready");
      });
    }, 300);
  }

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  updateThemeColor();

  if (darkModeQuery.addEventListener) {
    darkModeQuery.addEventListener(
      "change",
      updateThemeColor
    );
  } else {
    darkModeQuery.addListener(updateThemeColor);
  }

  window.addEventListener(
    "scroll",
    saveScrollPosition,
    { passive: true }
  );

  window.addEventListener(
    "beforeunload",
    saveScrollPosition
  );

  window.addEventListener(
    "load",
    restoreScrollPosition
  );
})();
<\/script>
`,
        id: `X7WQKqfsI`,
        loadMode: `always`,
        name: `UnCutter`,
        placement: `headStart`,
      },
    ]),
      (eu = {}),
      (tu = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [`X7WQKqfsI`] }),
      (nu = {
        exports: {
          snippetsSorting: { type: `variable`, annotations: { framerContractVersion: `1` } },
          getSnippets: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  iu,
  au,
  ou,
  su = t(() => {
    (m(),
      g(),
      x(),
      (iu = () => (
        o(() => {
          let e = document.querySelector(`meta[name="robots"]`);
          e
            ? e.setAttribute(`content`, `noindex`)
            : ((e = document.createElement(`meta`)),
              e.setAttribute(`name`, `robots`),
              e.setAttribute(`content`, `noindex`),
              document.head.appendChild(e));
        }, []),
        p(`div`, {
          className: `__framer-not-found-page`,
          style: {
            display: `flex`,
            height: `100vh`,
            alignItems: `center`,
            justifyContent: `center`,
            backgroundColor: `var(--color-primary)`,
            background: `var(--color-background)`,
            fontSize: `var(--font-size-body)`,
            boxSizing: `border-box`,
            fontFeatureSettings: `"liga", "clig"`,
            fontVariantLigatures: `common-ligatures`,
            textRendering: `optimizeLegibility`,
          },
          children: h(`main`, {
            style: {
              boxSizing: `border-box`,
              fontFamily: `"Inter", sans-serif`,
              fontWeight: 500,
              maxWidth: `240px`,
              width: `100%`,
              display: `flex`,
              alignItems: `center`,
              flexDirection: `column`,
              padding: `0 20px`,
              textWrap: `balance`,
            },
            children: [
              p(`svg`, {
                xmlns: `http://www.w3.org/2000/svg`,
                width: `14`,
                height: `21`,
                style: {
                  verticalAlign: `middle`,
                  color: `var(--color-primary)`,
                  marginBottom: `20px`,
                },
                children: p(`path`, {
                  d: `M 14 0 L 14 7 L 7 7 L 0 0 Z M 14 14 L 7 14 L 7 21 L 0 14 L 0 7 L 7 7 Z`,
                  fill: `currentColor`,
                }),
              }),
              p(`h1`, {
                style: {
                  margin: `0 0 10px 0`,
                  fontSize: `var(--font-size-title)`,
                  color: `var(--color-primary)`,
                  textAlign: `center`,
                },
                children: `Page Not Found`,
              }),
              p(`div`, {
                style: {
                  color: `var(--color-secondary)`,
                  marginBottom: `20px`,
                  lineHeight: `1.5em`,
                  textAlign: `center`,
                },
                children: `The page you are looking for does not exist or may have been moved.`,
              }),
              p(`a`, {
                href: `/`,
                role: `button`,
                style: {
                  backgroundColor: `var(--color-tint)`,
                  color: `#ffffff`,
                  paddingLeft: `8px`,
                  paddingRight: `8px`,
                  borderRadius: `8px`,
                  lineHeight: `30px`,
                  height: `30px`,
                  textDecoration: `none`,
                  verticalAlign: `baseline`,
                },
                children: `Back to Home`,
              }),
            ],
          }),
        })
      )),
      (au = D(iu, [
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+1F00-1FFF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0370-03FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+1F00-1FFF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0370-03FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,
        `@font-face {
      font-family: Inter Placeholder;
      src: local("Arial");
      ascent-override: 89.79%;
      descent-override: 22.36%;
      line-gap-override: 0%;
      size-adjust: 107.89%;
    }`,
        `.__framer-not-found-page {
      --color-background: #ffffff;
      --color-primary: #333;
      --color-secondary: #888;
      --color-tint: #0099ff;
      --font-size-body: 12px;
      --font-size-title: 12px;
    }`,
        `@media (prefers-color-scheme: dark) {
      .__framer-not-found-page {
        --color-background: #000000;
        --color-primary: #fff;
        --color-secondary: #888;
      }
    }`,
      ])),
      (ou = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `component`,
            slots: [],
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  cu = e({ __FramerMetadata__: () => ou, default: () => au }),
  lu = t(() => {
    (su(), su());
  });
function uu() {
  let e = !1;
  try {
    e = v.self !== v.top;
  } catch {
    e = !0;
  }
  if (!e) return !1;
  let t = null,
    n = !1;
  if (v.location.ancestorOrigins && v.location.ancestorOrigins.length > 0) {
    let e = v.location.ancestorOrigins[0];
    try {
      t = new URL(e).host;
    } catch {}
  } else if (document.referrer)
    try {
      t = new URL(document.referrer).host;
    } catch {}
  return (t && (n = t === pu || t.endsWith(`.${pu}`)), n);
}
function du(e) {
  return l((t, n) => {
    let r = u(mu, hu, gu),
      i = ge.current() === ge.canvas;
    return r && !i
      ? null
      : p(e, {
          ...t,
          ref: n,
          onClick: (e) => {
            (e.preventDefault(),
              v.open(
                `https://www.framer.com/r/badge/?utm_campaign=freeplanbadge&utm_source=${encodeURIComponent(v?.location?.origin)}`
              ));
          },
          style: { ...t.style, pointerEvents: `auto` },
          title: `Create a free website with Framer, the website builder loved by startups, designers and agencies.`,
          className: t.className + ` __framer-badge`,
        });
  });
}
function fu(e) {
  return l((t, n) =>
    h(d, {
      children: [
        p(`p`, {
          style: { position: `absolute`, transform: `scale(0.001)` },
          children: `Create a free website with Framer, the website builder loved by startups, designers and agencies.`,
        }),
        p(e, { ...t, ref: n }),
      ],
    })
  );
}
var pu,
  mu,
  hu,
  gu,
  _u = t(() => {
    (a(),
      m(),
      g(),
      x(),
      (pu = `framer.com`),
      (mu = () => () => {}),
      (hu = () => uu()),
      (gu = () => !1));
  }),
  vu,
  yu,
  bu,
  xu,
  Su,
  Cu,
  wu,
  Tu,
  Eu = t(() => {
    (m(),
      x(),
      g(),
      (vu = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 97 10" xmlns="http://www.w3.org/2000/svg"><path d="M 91.736 9.781 L 91.736 2.818 L 93.316 2.818 L 93.316 3.98 L 93.374 3.98 C 93.501 3.577 93.714 3.269 94.014 3.053 C 94.328 2.833 94.704 2.72 95.087 2.729 C 95.185 2.729 95.287 2.733 95.392 2.742 C 95.498 2.75 95.587 2.759 95.659 2.767 L 95.659 4.253 C 95.552 4.23 95.444 4.215 95.335 4.209 C 95.188 4.192 95.039 4.184 94.891 4.184 C 94.603 4.184 94.343 4.247 94.11 4.374 C 93.882 4.497 93.702 4.674 93.57 4.907 C 93.434 5.16 93.366 5.445 93.374 5.732 L 93.374 9.782 L 91.736 9.782 Z M 87.286 9.927 C 86.588 9.927 85.985 9.779 85.477 9.483 C 84.969 9.183 84.577 8.761 84.303 8.22 C 84.032 7.678 83.897 7.048 83.897 6.328 C 83.897 5.618 84.032 4.988 84.303 4.443 C 84.56 3.917 84.96 3.475 85.458 3.167 C 85.953 2.858 86.531 2.704 87.191 2.704 C 87.64 2.704 88.059 2.78 88.448 2.932 C 88.841 3.08 89.186 3.305 89.482 3.605 C 89.779 3.901 90.009 4.272 90.174 4.715 C 90.344 5.155 90.428 5.67 90.428 6.258 L 90.428 6.748 L 84.627 6.748 L 84.627 5.629 L 89.609 5.629 L 88.86 5.946 C 88.868 5.594 88.801 5.243 88.664 4.918 C 88.549 4.641 88.355 4.404 88.105 4.238 C 87.86 4.074 87.559 3.991 87.204 3.991 C 86.852 3.991 86.55 4.074 86.296 4.239 C 86.042 4.404 85.847 4.629 85.712 4.912 C 85.576 5.213 85.509 5.54 85.515 5.87 L 85.515 6.62 C 85.515 7.047 85.587 7.413 85.731 7.717 C 85.879 8.017 86.089 8.248 86.359 8.409 C 86.63 8.566 86.948 8.644 87.312 8.644 C 87.562 8.644 87.786 8.608 87.984 8.536 C 88.177 8.467 88.353 8.356 88.499 8.212 C 88.642 8.072 88.749 7.906 88.816 7.711 L 90.326 7.921 C 90.228 8.313 90.032 8.673 89.756 8.968 C 89.476 9.268 89.125 9.503 88.702 9.672 C 88.282 9.842 87.811 9.926 87.286 9.926 Z M 72.643 9.781 L 72.643 2.818 L 74.191 2.818 L 74.235 4.443 L 74.115 4.443 C 74.225 4.041 74.385 3.713 74.597 3.459 C 74.798 3.212 75.055 3.016 75.347 2.888 C 75.63 2.761 75.928 2.698 76.241 2.698 C 76.753 2.698 77.177 2.854 77.511 3.167 C 77.849 3.48 78.074 3.922 78.184 4.494 L 77.987 4.494 C 78.066 4.132 78.232 3.795 78.469 3.51 C 78.691 3.248 78.972 3.041 79.289 2.907 C 79.615 2.766 79.968 2.695 80.323 2.697 C 80.746 2.697 81.127 2.79 81.465 2.977 C 81.808 3.159 82.077 3.429 82.272 3.789 C 82.47 4.149 82.57 4.591 82.57 5.116 L 82.57 9.781 L 80.939 9.781 L 80.939 5.363 C 80.939 4.923 80.818 4.602 80.577 4.398 C 80.333 4.19 80.021 4.08 79.701 4.088 C 79.434 4.088 79.204 4.145 79.009 4.258 C 78.816 4.371 78.66 4.536 78.559 4.735 C 78.449 4.953 78.394 5.195 78.399 5.439 L 78.399 9.781 L 76.813 9.781 L 76.813 5.287 C 76.813 4.923 76.698 4.633 76.47 4.417 C 76.246 4.197 75.958 4.087 75.606 4.087 C 75.366 4.087 75.143 4.145 74.94 4.259 C 74.737 4.374 74.569 4.543 74.458 4.748 C 74.339 4.963 74.28 5.23 74.28 5.548 L 74.28 9.781 L 72.642 9.781 Z M 67.291 9.915 C 66.724 9.915 66.221 9.771 65.781 9.483 C 65.344 9.191 65 8.776 64.746 8.239 C 64.496 7.701 64.371 7.059 64.371 6.309 C 64.371 5.552 64.498 4.904 64.752 4.367 C 65.01 3.829 65.359 3.419 65.799 3.135 C 66.244 2.851 66.763 2.703 67.291 2.71 C 67.668 2.71 67.987 2.771 68.25 2.894 C 68.516 3.013 68.736 3.164 68.91 3.351 C 69.083 3.533 69.22 3.719 69.322 3.91 L 69.38 3.91 L 69.38 2.818 L 70.998 2.818 L 70.998 9.781 L 69.38 9.781 L 69.38 8.696 L 69.322 8.696 C 69.211 8.908 69.07 9.102 68.903 9.273 C 68.726 9.46 68.503 9.614 68.237 9.737 C 67.938 9.863 67.615 9.923 67.291 9.915 Z M 67.723 8.563 C 68.078 8.563 68.383 8.469 68.637 8.283 C 68.901 8.079 69.101 7.804 69.215 7.49 C 69.35 7.147 69.418 6.751 69.418 6.303 C 69.418 5.85 69.35 5.456 69.214 5.123 C 69.103 4.811 68.902 4.539 68.637 4.341 C 68.387 4.155 68.083 4.062 67.723 4.062 C 67.363 4.062 67.058 4.155 66.809 4.342 C 66.559 4.528 66.369 4.788 66.237 5.122 C 66.107 5.456 66.041 5.85 66.041 6.302 C 66.041 6.752 66.106 7.145 66.237 7.483 C 66.369 7.822 66.559 8.086 66.809 8.277 C 67.063 8.467 67.367 8.563 67.723 8.563 Z M 59.909 9.781 L 59.909 2.818 L 61.489 2.818 L 61.489 3.98 L 61.546 3.98 C 61.673 3.577 61.887 3.269 62.188 3.053 C 62.488 2.837 62.846 2.729 63.26 2.729 C 63.358 2.729 63.46 2.733 63.565 2.742 C 63.671 2.75 63.76 2.759 63.832 2.767 L 63.832 4.253 C 63.725 4.23 63.617 4.215 63.508 4.209 C 63.361 4.192 63.212 4.184 63.064 4.184 C 62.776 4.184 62.516 4.247 62.283 4.374 C 62.054 4.497 61.875 4.674 61.743 4.907 C 61.607 5.16 61.539 5.445 61.546 5.732 L 61.546 9.782 L 59.909 9.782 Z M 52.647 9.781 L 52.647 0.323 L 58.804 0.323 L 58.804 1.758 L 54.336 1.758 L 54.336 4.513 L 58.411 4.513 L 58.411 5.928 L 54.336 5.928 L 54.336 9.781 Z M 43.265 5.744 L 43.265 9.781 L 41.628 9.781 L 41.628 2.818 L 43.195 2.818 L 43.215 4.551 L 43.024 4.551 C 43.223 3.946 43.517 3.489 43.906 3.18 C 44.296 2.867 44.78 2.71 45.36 2.71 C 45.842 2.71 46.263 2.814 46.623 3.021 C 46.987 3.228 47.268 3.531 47.467 3.929 C 47.67 4.322 47.772 4.805 47.772 5.376 L 47.772 9.781 L 46.141 9.781 L 46.141 5.63 C 46.141 5.147 46.018 4.775 45.773 4.513 C 45.531 4.246 45.195 4.113 44.763 4.113 C 44.475 4.113 44.217 4.176 43.989 4.303 C 43.762 4.429 43.576 4.619 43.456 4.849 C 43.329 5.09 43.266 5.389 43.266 5.744 Z M 38.353 9.781 L 38.353 2.818 L 39.99 2.818 L 39.99 9.781 L 38.352 9.781 Z M 39.171 1.815 C 38.919 1.821 38.675 1.728 38.491 1.555 C 38.31 1.389 38.208 1.153 38.212 0.907 C 38.208 0.663 38.31 0.43 38.492 0.267 C 38.674 0.091 38.918 -0.005 39.171 0 C 39.438 0 39.664 0.088 39.851 0.266 C 40.041 0.44 40.136 0.653 40.136 0.907 C 40.136 1.161 40.041 1.377 39.85 1.555 C 39.667 1.728 39.423 1.821 39.171 1.815 Z M 30.741 9.927 C 30.043 9.927 29.44 9.779 28.932 9.483 C 28.426 9.185 28.018 8.746 27.758 8.22 C 27.488 7.678 27.352 7.048 27.352 6.328 C 27.352 5.618 27.487 4.988 27.758 4.443 C 28.015 3.917 28.415 3.475 28.913 3.167 C 29.408 2.858 29.986 2.704 30.646 2.704 C 31.095 2.704 31.514 2.78 31.903 2.932 C 32.293 3.079 32.646 3.308 32.938 3.605 C 33.234 3.901 33.464 4.272 33.629 4.715 C 33.799 5.155 33.883 5.67 33.883 6.258 L 33.883 6.748 L 28.083 6.748 L 28.083 5.629 L 33.066 5.629 L 32.316 5.946 C 32.316 5.553 32.251 5.21 32.12 4.918 C 32.005 4.641 31.811 4.404 31.561 4.238 C 31.316 4.074 31.015 3.991 30.66 3.991 C 30.34 3.983 30.024 4.069 29.752 4.239 C 29.498 4.404 29.303 4.629 29.168 4.912 C 29.032 5.213 28.965 5.54 28.971 5.87 L 28.971 6.62 C 28.971 7.047 29.043 7.413 29.187 7.717 C 29.335 8.017 29.545 8.248 29.816 8.409 C 30.086 8.566 30.404 8.644 30.768 8.644 C 31.018 8.644 31.242 8.608 31.441 8.536 C 31.634 8.467 31.809 8.356 31.955 8.212 C 32.099 8.072 32.205 7.906 32.272 7.711 L 33.782 7.921 C 33.684 8.313 33.488 8.673 33.212 8.968 C 32.932 9.268 32.581 9.503 32.158 9.672 C 31.707 9.847 31.226 9.934 30.742 9.926 Z M 22.312 9.915 C 21.777 9.924 21.251 9.774 20.801 9.483 C 20.361 9.191 20.016 8.776 19.766 8.239 C 19.516 7.701 19.392 7.059 19.392 6.309 C 19.392 5.552 19.519 4.904 19.772 4.367 C 20.027 3.829 20.374 3.419 20.814 3.135 C 21.254 2.852 21.751 2.71 22.305 2.71 C 22.682 2.71 23.001 2.771 23.264 2.894 C 23.53 3.013 23.748 3.164 23.918 3.351 C 24.091 3.533 24.228 3.721 24.33 3.916 L 24.381 3.916 L 24.381 0.323 L 26.019 0.323 L 26.019 9.781 L 24.413 9.781 L 24.413 8.689 L 24.343 8.689 C 24.233 8.904 24.091 9.101 23.923 9.273 C 23.734 9.468 23.51 9.626 23.263 9.737 C 23.001 9.855 22.684 9.915 22.312 9.915 Z M 22.737 8.563 C 23.092 8.563 23.397 8.469 23.651 8.283 C 23.915 8.079 24.115 7.804 24.229 7.49 C 24.364 7.147 24.432 6.751 24.432 6.303 C 24.432 5.85 24.364 5.456 24.229 5.123 C 24.118 4.811 23.917 4.539 23.651 4.341 C 23.385 4.151 23.064 4.053 22.737 4.062 C 22.41 4.053 22.089 4.152 21.823 4.342 C 21.573 4.528 21.383 4.79 21.252 5.128 C 21.118 5.505 21.054 5.903 21.062 6.303 C 21.062 6.751 21.127 7.145 21.258 7.483 C 21.389 7.822 21.58 8.086 21.829 8.277 C 22.079 8.467 22.381 8.563 22.737 8.563 Z M 14.352 9.915 C 13.817 9.924 13.291 9.774 12.841 9.483 C 12.405 9.191 12.061 8.776 11.806 8.239 C 11.556 7.701 11.432 7.059 11.432 6.309 C 11.432 5.552 11.559 4.904 11.812 4.367 C 12.071 3.829 12.42 3.419 12.86 3.135 C 13.3 2.852 13.797 2.71 14.352 2.71 C 14.728 2.71 15.048 2.771 15.31 2.894 C 15.577 3.013 15.797 3.164 15.97 3.351 C 16.144 3.533 16.281 3.719 16.383 3.91 L 16.44 3.91 L 16.44 2.818 L 18.059 2.818 L 18.059 9.781 L 16.44 9.781 L 16.44 8.696 L 16.383 8.696 C 16.272 8.908 16.131 9.102 15.964 9.273 C 15.786 9.46 15.564 9.614 15.298 9.737 C 14.999 9.863 14.676 9.923 14.352 9.915 Z M 14.783 8.563 C 15.139 8.563 15.443 8.469 15.697 8.283 C 15.951 8.093 16.144 7.828 16.275 7.49 C 16.41 7.147 16.478 6.751 16.478 6.303 C 16.478 5.85 16.41 5.456 16.275 5.123 C 16.164 4.811 15.963 4.539 15.697 4.341 C 15.447 4.155 15.143 4.062 14.783 4.062 C 14.423 4.062 14.119 4.155 13.869 4.342 C 13.608 4.543 13.41 4.813 13.298 5.122 C 13.167 5.456 13.101 5.85 13.101 6.302 C 13.101 6.752 13.167 7.145 13.298 7.483 C 13.429 7.822 13.62 8.086 13.869 8.277 C 14.123 8.467 14.428 8.563 14.783 8.563 Z M 0 9.781 L 0 0.323 L 2.507 0.323 L 4.322 5.236 C 4.382 5.418 4.452 5.646 4.532 5.922 C 4.612 6.197 4.695 6.493 4.779 6.811 C 4.864 7.124 4.942 7.428 5.014 7.725 C 5.09 8.017 5.154 8.273 5.204 8.493 L 4.843 8.493 C 5.045 7.633 5.267 6.778 5.509 5.928 C 5.589 5.648 5.662 5.418 5.725 5.236 L 7.509 0.323 L 10.023 0.323 L 10.023 9.781 L 8.347 9.781 L 8.347 4.989 C 8.35 4.443 8.358 3.897 8.372 3.351 L 8.398 2.38 C 8.406 2.054 8.412 1.743 8.417 1.447 L 8.563 1.447 C 8.473 1.773 8.379 2.107 8.277 2.45 L 7.979 3.446 C 7.886 3.764 7.795 4.056 7.706 4.322 C 7.636 4.546 7.561 4.768 7.483 4.989 L 5.719 9.781 L 4.303 9.781 L 2.513 4.989 L 2.291 4.329 C 2.198 4.04 2.107 3.75 2.018 3.459 L 1.713 2.469 C 1.613 2.129 1.514 1.788 1.415 1.447 L 1.593 1.447 C 1.597 1.73 1.603 2.035 1.612 2.361 C 1.62 2.682 1.627 3.006 1.631 3.332 C 1.639 3.654 1.646 3.958 1.65 4.246 C 1.658 4.534 1.663 4.781 1.663 4.989 L 1.663 9.781 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="9.927205036163329px" id="LLqmOOyHA" transform="translate(0 -0.25)" width="95.65900006103517px"/></svg>'), var(--framer-icon-mask, none)`),
      (yu = `alpha, var(--framer-icon-mask-mode, add)`),
      (bu = `no-repeat`),
      (xu = `center`),
      (Su = `auto`),
      (Cu = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (wu = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (Tu = D(
        l(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: s,
            ...c
          } = wu(e);
          return p(Cu, {
            ...c,
            className: C(`framer-g7oZR`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-g7oZR { -webkit-mask-image: ${vu}; -webkit-mask-position: ${xu}; -webkit-mask-repeat: ${bu}; -webkit-mask-size: ${Su}; aspect-ratio: 9.7; background-color: var(--1bd4d3i); mask-image: ${vu}; mask-mode: ${yu}; mask-position: ${xu}; mask-repeat: ${bu}; mask-size: ${Su}; width: 97px; }`,
        ],
        `framer-g7oZR`
      )),
      (Tu.displayName = `Text`),
      A(Tu, {
        Z1QnXqTEb: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: k.Color },
        vtL2DrqsL: { defaultValue: `rgb(0, 0, 0)`, hidden: !0, title: `Fill 2`, type: k.Color },
      }));
  }),
  Du,
  Ou,
  ku,
  Au,
  ju,
  Mu,
  Nu,
  Pu,
  Fu = t(() => {
    (m(),
      x(),
      g(),
      (Du = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 12 0 L 12 6 L 6 6 Z M 0 6 L 6 6 L 12 12 L 6 12 L 6 18 L 0 12 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="18px" id="td4SVg2I8" transform="translate(0 1.5)" width="12px"/></svg>'), var(--framer-icon-mask, none)`),
      (Ou = `alpha, var(--framer-icon-mask-mode, add)`),
      (ku = `no-repeat`),
      (Au = `center`),
      (ju = `auto`),
      (Mu = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (Nu = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (Pu = D(
        l(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: s,
            ...c
          } = Nu(e);
          return p(Mu, {
            ...c,
            className: C(`framer-hcsc7`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-hcsc7 { -webkit-mask-image: ${Du}; -webkit-mask-position: ${Au}; -webkit-mask-repeat: ${ku}; -webkit-mask-size: ${ju}; aspect-ratio: 0.6; background-color: var(--1bd4d3i); mask-image: ${Du}; mask-mode: ${Ou}; mask-position: ${Au}; mask-repeat: ${ku}; mask-size: ${ju}; width: 12px; }`,
        ],
        `framer-hcsc7`
      )),
      (Pu.displayName = `Framer`),
      A(Pu, {
        Z1QnXqTEb: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: k.Color },
        vtL2DrqsL: { defaultValue: `rgb(0, 0, 0)`, hidden: !0, title: `Fill 2`, type: k.Color },
      }));
  }),
  Iu = e({ __FramerMetadata__: () => $u, default: () => Qu }),
  Lu,
  Ru,
  zu,
  Bu,
  Vu,
  Hu,
  Uu,
  Wu,
  Gu,
  Ku,
  qu,
  Ju,
  Yu,
  Xu,
  Zu,
  Qu,
  $u,
  ed = t(() => {
    (m(),
      x(),
      ie(),
      g(),
      _u(),
      Eu(),
      Fu(),
      (Lu = b(Pu)),
      (Ru = b(Tu)),
      (zu = Ce(Tu, { nodeId: `pBR1Ew0r8`, override: fu, scopeId: `PX9hIOIVM` })),
      (Bu = De(ve(Ce(y.a, { nodeId: `HK2sXlagE`, override: du, scopeId: `PX9hIOIVM` })))),
      (Vu = `framer-6jWyo`),
      (Hu = { HK2sXlagE: `framer-v-n0ccwk` }),
      (Uu = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 40, delay: 1, mass: 1.5, stiffness: 350, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Wu = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      }),
      (Gu = { duration: 0, type: `tween` }),
      (Ku = (e, t) => `translate(-50%, -50%) ${t}`),
      (qu = (e, t) => `translateX(-50%) ${t}`),
      (Ju = ({ value: e, children: t }) => {
        let r = n(te),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(te.Provider, { value: a, children: t });
      }),
      (Yu = y.create(c)),
      (Xu = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Zu = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Qu = D(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = ae();
          se();
          let { style: c, className: l, layoutId: u, variant: d, ...f } = Xu(e),
            {
              baseVariant: m,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: te,
              isLoading: ne,
              setGestureState: ie,
              setVariant: b,
              variants: oe,
            } = fe({ defaultVariant: `HK2sXlagE`, ref: r, variant: d, variantClassNames: Hu }),
            x = Zu(e, oe),
            S = C(Vu);
          return p(re, {
            id: u ?? i,
            children: p(Yu, {
              animate: oe,
              initial: !1,
              children: p(Ju, {
                value: Gu,
                children: p(Ee, {
                  href: `https://www.framer.com`,
                  motionChild: !0,
                  nodeId: `HK2sXlagE`,
                  openInNewTab: !1,
                  relValues: [],
                  scopeId: `PX9hIOIVM`,
                  children: h(Bu, {
                    ...f,
                    ...v,
                    __framer__presenceAnimate: Uu,
                    __framer__presenceInitial: Wu,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: `${C(S, `framer-n0ccwk`, l, g)} framer-bmpgw8`,
                    "data-framer-appear-id": `n0ccwk`,
                    "data-framer-name": `Light`,
                    "data-nosnippet": !0,
                    layoutDependency: x,
                    layoutId: `HK2sXlagE`,
                    optimized: !0,
                    ref: r,
                    style: { ...c },
                    children: [
                      p(y.div, {
                        className: `framer-13yxzio`,
                        "data-framer-name": `Backdrop`,
                        layoutDependency: x,
                        layoutId: `IH1cvP0s5`,
                        style: {
                          backgroundColor: `rgb(255, 255, 255)`,
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                          boxShadow: `0px 0.6021873017743928px 1.5656869846134214px -1.5px rgba(0, 0, 0, 0.17), 0px 2.288533303243457px 5.950186588432988px -3px rgba(0, 0, 0, 0.14), 0px 10px 26px -4.5px rgba(0, 0, 0, 0.02)`,
                        },
                      }),
                      h(y.div, {
                        className: `framer-19yaanm`,
                        "data-framer-name": `Content`,
                        layoutDependency: x,
                        layoutId: `U6HIU1IEW`,
                        transformTemplate: Ku,
                        children: [
                          p(y.div, {
                            className: `framer-1kflzx5`,
                            layoutDependency: x,
                            layoutId: `roMJYXHnO`,
                            children: p(Pu, {
                              animated: !0,
                              className: `framer-e50co`,
                              "data-framer-name": `Logo`,
                              layoutDependency: x,
                              layoutId: `O3s3GcxMZ`,
                              style: { "--1bd4d3i": `rgb(0, 0, 0)`, "--otdjsv": `rgb(0, 0, 0)` },
                              transformTemplate: qu,
                            }),
                          }),
                          p(zu, {
                            animated: !0,
                            className: `framer-1um7t9d`,
                            "data-framer-name": `Text`,
                            layoutDependency: x,
                            layoutId: `pBR1Ew0r8`,
                            style: { "--1bd4d3i": `rgb(0, 0, 0)`, "--otdjsv": `rgb(0, 0, 0)` },
                          }),
                        ],
                      }),
                      p(y.div, {
                        className: `framer-j4ugry`,
                        "data-framer-name": `Bottom`,
                        layoutDependency: x,
                        layoutId: `vCwsHyUh8`,
                        style: {
                          borderBottomLeftRadius: 11,
                          borderBottomRightRadius: 11,
                          borderTopLeftRadius: 11,
                          borderTopRightRadius: 11,
                          boxShadow: `inset 0px 0px 0px 1px rgb(0, 0, 0)`,
                          mask: `linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add`,
                          opacity: 0.06,
                          WebkitMask: `linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add`,
                        },
                      }),
                      p(y.div, {
                        className: `framer-jnuwbw`,
                        "data-framer-name": `Border`,
                        layoutDependency: x,
                        layoutId: `ZirFGX8Eh`,
                        style: {
                          borderBottomLeftRadius: 11,
                          borderBottomRightRadius: 11,
                          borderTopLeftRadius: 11,
                          borderTopRightRadius: 11,
                          boxShadow: `inset 0px 0px 0px 1px rgb(0, 0, 0)`,
                          opacity: 0.04,
                        },
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-6jWyo.framer-bmpgw8, .framer-6jWyo .framer-bmpgw8 { display: block; }`,
          `.framer-6jWyo.framer-n0ccwk { gap: 10px; height: 38px; overflow: visible; position: relative; text-decoration: none; width: 140px; }`,
          `.framer-6jWyo .framer-13yxzio { bottom: 1px; flex: none; left: 1px; overflow: hidden; position: absolute; right: 1px; top: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-6jWyo .framer-19yaanm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; width: min-content; }`,
          `.framer-6jWyo .framer-1kflzx5 { flex: none; height: 16px; overflow: visible; position: relative; width: 12px; }`,
          `.framer-6jWyo .framer-e50co { flex: none; height: var(--framer-aspect-ratio-supported, 20px); left: 50%; position: absolute; top: -2px; }`,
          `.framer-6jWyo .framer-1um7t9d { flex: none; height: var(--framer-aspect-ratio-supported, 10px); position: relative; }`,
          `.framer-6jWyo .framer-j4ugry, .framer-6jWyo .framer-jnuwbw { bottom: 0px; flex: none; left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; top: 0px; }`,
        ],
        `framer-6jWyo`
      )),
      (Qu.displayName = `Badge`),
      (Qu.defaultProps = { height: 38, width: 140 }),
      Oe(Qu, [{ explicitInter: !0, fonts: [] }, ...Lu, ...Ru], {
        supportsExplicitInterCodegen: !0,
      }),
      ($u = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerPX9hIOIVM`,
            slots: [],
            annotations: {
              framerAutoSizeImages: `true`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}`,
              framerIntrinsicWidth: `140`,
              framerIntrinsicHeight: `38`,
              framerColorSyntax: `true`,
              framerDisplayContentsDiv: `false`,
              framerImmutableVariables: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export {
  Wo as _,
  nu as a,
  vo as b,
  tu as c,
  Zl as d,
  Il as f,
  yl as g,
  vl as h,
  lu as i,
  Yl as l,
  xl as m,
  ed as n,
  Ql as o,
  bl as p,
  cu as r,
  ru as s,
  Iu as t,
  Xl as u,
  Go as v,
  _o as y,
};
//# sourceMappingURL=shared-lib.dJ51NCuE.mjs.map
