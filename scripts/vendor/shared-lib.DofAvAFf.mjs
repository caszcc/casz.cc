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
  dt as he,
  et as ge,
  g as T,
  h as _e,
  it as ve,
  j as E,
  lt as ye,
  n as be,
  nt as xe,
  o as Se,
  ot as D,
  p as O,
  q as Ce,
  r as k,
  st as we,
  t as Te,
  tt as Ee,
  u as De,
  ut as Oe,
  v as ke,
  w as Ae,
  y as A,
} from "./framer.D89bBObE.mjs";
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
function je(e) {
  return G.call(sr, e) ? !0 : G.call(or, e) ? !1 : ar.test(e) ? (sr[e] = !0) : ((or[e] = !0), !1);
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
function Me(e) {
  return e[1].toUpperCase();
}
function N(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = dr.exec(e);
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
function Ne(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function Pe(e, t, n) {
  switch (t) {
    case `select`:
      return Ne(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return Ne(2, null);
    case `math`:
      return Ne(3, null);
    case `foreignObject`:
      return Ne(1, null);
    case `table`:
      return Ne(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return Ne(5, null);
    case `colgroup`:
      return Ne(7, null);
    case `tr`:
      return Ne(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? Ne(1, null) : e;
}
function Fe(e, t, n) {
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
          var o = hr.get(a);
          (o !== void 0 ||
            ((o = N(a.replace(fr, `-$1`).toLowerCase().replace(pr, `-ms-`))), hr.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || G.call(lr, r)
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
      Fe(e, t, r);
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
    } else if (je(n)) {
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
function Ie(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(j(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(j(61));
    ((t = t.__html), t != null && e.push(`` + t));
  }
}
function Le(e) {
  var t = ``;
  return (
    ir.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function Re(e, t, n, r) {
  e.push(ze(n));
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
  return (e.push(`>`), Ie(e, a, n), typeof n == `string` ? (e.push(N(n)), null) : n);
}
function ze(e) {
  var t = _r.get(e);
  if (t === void 0) {
    if (!gr.test(e)) throw Error(j(65, e));
    ((t = `<` + e), _r.set(e, t));
  }
  return t;
}
function Be(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(ze(`select`));
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
      return (e.push(`>`), Ie(e, o, a), a);
    case `option`:
      ((o = i.selectedValue), e.push(ze(`option`)));
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
        if (((n = c === null ? Le(s) : `` + c), mr(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(` selected=""`);
              break;
            }
        } else `` + o === n && e.push(` selected=""`);
      else l && e.push(` selected=""`);
      return (e.push(`>`), Ie(e, u, s), s);
    case `textarea`:
      for (s in (e.push(ze(`textarea`)), (u = o = a = null), n))
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
        if (mr(u) && 1 < u.length) throw Error(j(93));
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
      for (o in (e.push(ze(`input`)), (c = u = s = a = null), n))
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
      for (var f in (e.push(ze(`menuitem`)), n))
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
      for (d in (e.push(ze(`title`)), (a = null), n))
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
      for (c in (e.push(ze(t)), (o = a = null), n))
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
      for (var p in (e.push(ze(t)), n))
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
      return Re(e, n, t, r);
    case `html`:
      return (i.insertionMode === 0 && e.push(`<!DOCTYPE html>`), Re(e, n, t, r));
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`) return Re(e, n, t, r);
      for (l in (e.push(ze(t)), (o = a = null), n))
        if (G.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              Fe(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              je(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(` `, l, `="`, N(s), `"`);
          }
      return (e.push(`>`), Ie(e, o, a), a);
  }
}
function Ve(e, t, n) {
  if ((e.push(`<!--$?--><template id="`), n === null)) throw Error(j(395));
  return (e.push(n), e.push(`"></template>`));
}
function He(e, t, n, r) {
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
function Ue(e, t) {
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
function We(e) {
  return JSON.stringify(e).replace(vr, function (e) {
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
function Ge(e, t) {
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
function Ke(e, t, n, r) {
  return n.generateStaticMarkup
    ? (e.push(N(t)), !1)
    : (t === `` ? (e = r) : (r && e.push(`<!-- -->`), e.push(N(t)), (e = !0)), e);
}
function qe(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case Sr:
      return `Fragment`;
    case xr:
      return `Portal`;
    case wr:
      return `Profiler`;
    case Cr:
      return `StrictMode`;
    case Or:
      return `Suspense`;
    case kr:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case Er:
        return (e.displayName || `Context`) + `.Consumer`;
      case Tr:
        return (e._context.displayName || `Context`) + `.Provider`;
      case Dr:
        var t = e.render;
        return (
          (e = e.displayName),
          (e ||=
            ((e = t.displayName || t.name || ``),
            e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case Ar:
        return ((t = e.displayName || null), t === null ? qe(e.type) || `Memo` : t);
      case jr:
        ((t = e._payload), (e = e._init));
        try {
          return qe(e(t));
        } catch {}
    }
  return null;
}
function Je(e, t) {
  if (((e = e.contextTypes), !e)) return Lr;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function Ye(e, t) {
  if (e !== t) {
    ((e.context._currentValue2 = e.parentValue), (e = e.parent));
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(j(401));
    } else {
      if (n === null) throw Error(j(401));
      Ye(e, n);
    }
    t.context._currentValue2 = t.value;
  }
}
function Xe(e) {
  ((e.context._currentValue2 = e.parentValue), (e = e.parent), e !== null && Xe(e));
}
function Ze(e) {
  var t = e.parent;
  (t !== null && Ze(t), (e.context._currentValue2 = e.value));
}
function Qe(e, t) {
  if (((e.context._currentValue2 = e.parentValue), (e = e.parent), e === null)) throw Error(j(402));
  e.depth === t.depth ? Ye(e, t) : Qe(e, t);
}
function $e(e, t) {
  var n = t.parent;
  if (n === null) throw Error(j(402));
  (e.depth === n.depth ? Ye(e, n) : $e(e, n), (t.context._currentValue2 = t.value));
}
function et(e) {
  var t = Rr;
  t !== e &&
    (t === null
      ? Ze(e)
      : e === null
        ? Xe(t)
        : t.depth === e.depth
          ? Ye(t, e)
          : t.depth > e.depth
            ? Qe(t, e)
            : $e(t, e),
    (Rr = e));
}
function tt(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  ((e.updater = zr), (e.props = n), (e.state = i));
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue2 : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` && ((o = o(n, i)), (i = o == null ? i : yr({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(),
      t !== e.state && zr.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (((t = a.queue), (o = a.replace), (a.queue = null), (a.replace = !1), o && t.length === 1))
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = +!!o; o < t.length; o++) {
          var s = t[o];
          ((s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = yr({}, a, s))) : yr(a, s)));
        }
        e.state = a;
      }
    else a.queue = null;
}
function nt(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - Vr(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var a = 32 - Vr(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - Vr(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function rt(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Hr(e) / Ur) | 0)) | 0);
}
function it(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function at() {
  if (Gr === null) throw Error(j(321));
  return Gr;
}
function ot() {
  if (0 < Qr) throw Error(j(312));
  return { memoizedState: null, queue: null, next: null };
}
function st() {
  return (
    q === null
      ? qr === null
        ? ((Jr = !1), (qr = q = ot()))
        : ((Jr = !0), (q = qr))
      : q.next === null
        ? ((Jr = !1), (q = q.next = ot()))
        : ((Jr = !0), (q = q.next)),
    q
  );
}
function ct() {
  ((Kr = Gr = null), (Yr = !1), (qr = null), (Qr = 0), (q = Zr = null));
}
function lt(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function ut(e, t, n) {
  if (((Gr = at()), (q = st()), Jr)) {
    var r = q.queue;
    if (((t = r.dispatch), Zr !== null && ((n = Zr.get(r)), n !== void 0))) {
      (Zr.delete(r), (r = q.memoizedState));
      do ((r = e(r, n.action)), (n = n.next));
      while (n !== null);
      return ((q.memoizedState = r), [r, t]);
    }
    return [q.memoizedState, t];
  }
  return (
    (e = e === lt ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    (q.memoizedState = e),
    (e = q.queue = { last: null, dispatch: null }),
    (e = e.dispatch = ft.bind(null, Gr, e)),
    [q.memoizedState, e]
  );
}
function dt(e, t) {
  if (((Gr = at()), (q = st()), (t = t === void 0 ? null : t), q !== null)) {
    var n = q.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!Wr(t[i], r[i])) {
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
function ft(e, t, n) {
  if (25 <= Qr) throw Error(j(301));
  if (e === Gr)
    if (
      ((Yr = !0),
      (e = { action: n, next: null }),
      Zr === null && (Zr = new Map()),
      (n = Zr.get(t)),
      n === void 0)
    )
      Zr.set(t, e);
    else {
      for (t = n; t.next !== null;) t = t.next;
      t.next = e;
    }
}
function pt() {
  throw Error(j(394));
}
function mt() {}
function ht(e) {
  return (console.error(e), null);
}
function gt() {}
function _t(e, t, n, r, i, a, o, s, c) {
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
      onError: i === void 0 ? ht : i,
      onAllReady: a === void 0 ? gt : a,
      onShellReady: o === void 0 ? gt : o,
      onShellError: s === void 0 ? gt : s,
      onFatalError: c === void 0 ? gt : c,
    }),
    (n = yt(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = vt(t, e, null, n, u, Lr, null, Br)),
    l.push(e),
    t
  );
}
function vt(e, t, n, r, i, a, o, s) {
  (e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++);
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      (t.push(c), t.length === 1 && Mt(e));
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
function yt(e, t, n, r, i, a) {
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
function bt(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`
    );
  return e;
}
function xt(e, t) {
  var n = e.onShellError;
  (n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), e.destination.destroy(t)));
}
function St(e, t, n, r, i) {
  for (Gr = {}, Kr = t, Xr = 0, e = n(r, i); Yr;)
    ((Yr = !1), (Xr = 0), (Qr += 1), (q = null), (e = n(r, i)));
  return (ct(), e);
}
function Ct(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(j(108, qe(r) || `Unknown`, s));
      r = yr({}, o, n);
    }
    ((t.legacyContext = r), F(e, t, i), (t.legacyContext = o));
  } else F(e, t, i);
}
function wt(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = yr({}, t)), (e = e.defaultProps), e)) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Tt(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = Je(n, t.legacyContext);
      var a = n.contextType;
      ((a = new n(r, typeof a == `object` && a ? a._currentValue2 : i)),
        tt(a, n, r, i),
        Ct(e, t, a, n));
    } else {
      ((a = Je(n, t.legacyContext)), (i = St(e, t, n, r, a)));
      var o = Xr !== 0;
      if (typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0)
        (tt(i, n, r, a), Ct(e, t, i, n));
      else if (o) {
        ((r = t.treeContext), (t.treeContext = nt(r, 1, 0)));
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
        case Pr:
        case Nr:
        case Cr:
        case wr:
        case Sr:
          F(e, t, r.children);
          return;
        case kr:
          F(e, t, r.children);
          return;
        case Mr:
          throw Error(j(343));
        case Or:
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
              c = yt(e, i.chunks.length, s, i.formatContext, !1, !1);
            (i.children.push(c), (i.lastPushedText = !1));
            var l = yt(e, 0, null, i.formatContext, !1, !1);
            ((l.parentFlushed = !0), (t.blockedBoundary = s), (t.blockedSegment = l));
            try {
              if (
                (Dt(e, t, r),
                e.responseState.generateStaticMarkup ||
                  (l.lastPushedText && l.textEmbedded && l.chunks.push(`<!-- -->`)),
                (l.status = 1),
                At(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              ((l.status = 4), (s.forceClientRender = !0), (s.errorDigest = bt(e, t)));
            } finally {
              ((t.blockedBoundary = n), (t.blockedSegment = i));
            }
            ((t = vt(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t));
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case Dr:
            if (((r = St(e, t, n.render, r, i)), Xr !== 0)) {
              ((n = t.treeContext), (t.treeContext = nt(n, 1, 0)));
              try {
                F(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else F(e, t, r);
            return;
          case Ar:
            ((n = n.type), (r = wt(n, r)), Tt(e, t, n, r, i));
            return;
          case Tr:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue2),
              (n._currentValue2 = r),
              (o = Rr),
              (Rr = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              F(e, t, i),
              (e = Rr),
              e === null)
            )
              throw Error(j(403));
            ((r = e.parentValue),
              (e.context._currentValue2 = r === Fr ? e.context._defaultValue : r),
              (e = Rr = e.parent),
              (t.context = e));
            return;
          case Er:
            ((r = r.children), (r = r(n._currentValue2)), F(e, t, r));
            return;
          case jr:
            ((i = n._init), (n = i(n._payload)), (r = wt(n, r)), Tt(e, t, n, r, void 0));
            return;
        }
      throw Error(j(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = Be(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = Pe(o, n, r)),
      Dt(e, t, a),
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
      case br:
        Tt(e, t, n.type, n.props, n.ref);
        return;
      case xr:
        throw Error(j(257));
      case jr:
        var r = n._init;
        ((n = r(n._payload)), F(e, t, n));
        return;
    }
    if (mr(n)) {
      Et(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (Ir && n[Ir]) || n[`@@iterator`]), (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do (i.push(n.value), (n = r.next()));
        while (!n.done);
        Et(e, t, i);
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
      (r.lastPushedText = Ke(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = Ke(t.blockedSegment.chunks, `` + n, e.responseState, r.lastPushedText)));
}
function Et(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = nt(a, r, i);
    try {
      Dt(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function Dt(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return F(e, t, n);
  } catch (c) {
    if ((ct(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        et(a),
        c
      );
    n = c;
    var o = t.blockedSegment,
      s = yt(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    (o.children.push(s),
      (o.lastPushedText = !1),
      (e = vt(
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
      et(a));
  }
}
function Ot(e) {
  var t = e.blockedBoundary;
  ((e = e.blockedSegment), (e.status = 3), jt(this, t, e));
}
function kt(e, t, n) {
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
          return kt(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r())));
}
function At(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    ((n.id = t.id), (n.parentFlushed = !0), n.status === 1 && At(e, n));
  } else e.completedSegments.push(t);
}
function jt(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(j(389));
      e.completedRootSegment = n;
    }
    (e.pendingRootTasks--,
      e.pendingRootTasks === 0 && ((e.onShellError = gt), (t = e.onShellReady), t()));
  } else
    (t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && At(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(Ot, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (At(t, n),
            t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t))));
  (e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e()));
}
function Mt(e) {
  if (e.status !== 2) {
    var t = Rr,
      n = ti.current;
    ti.current = $r;
    var r = ei;
    ei = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          et(o.context);
          try {
            (F(s, o, o.node),
              s.responseState.generateStaticMarkup ||
                (c.lastPushedText && c.textEmbedded && c.chunks.push(`<!-- -->`)),
              o.abortSet.delete(o),
              (c.status = 1),
              jt(s, o.blockedBoundary, c));
          } catch (e) {
            if ((ct(), typeof e == `object` && e && typeof e.then == `function`)) {
              var l = o.ping;
              e.then(l, l);
            } else {
              (o.abortSet.delete(o), (c.status = 4));
              var u = o.blockedBoundary,
                d = e,
                f = bt(s, d);
              if (
                (u === null
                  ? xt(s, d)
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
      (a.splice(0, i), e.destination !== null && Rt(e, e.destination));
    } catch (t) {
      (bt(e, t), xt(e, t));
    } finally {
      ((ei = r), (ti.current = n), n === $r && et(t));
    }
  }
}
function Nt(e, t, n) {
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
        i = Pt(e, t, i);
      }
      for (; a < r.length - 1; a++) t.push(r[a]);
      return (a < r.length && (i = t.push(r[a])), i);
    default:
      throw Error(j(390));
  }
}
function Pt(e, t, n) {
  var r = n.boundary;
  if (r === null) return Nt(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    return (
      e.responseState.generateStaticMarkup ||
        ((r = r.errorDigest),
        t.push(`<!--$!-->`),
        t.push(`<template`),
        r && (t.push(` data-dgst="`), (r = N(r)), t.push(r), t.push(`"`)),
        t.push(`></template>`)),
      Nt(e, t, n),
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
      Ve(t, e.responseState, r),
      Nt(e, t, n),
      t.push(`<!--/$-->`)
    );
  }
  if (r.byteSize > e.progressiveChunkSize)
    return (
      (r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      Ve(t, e.responseState, r.id),
      Nt(e, t, n),
      t.push(`<!--/$-->`)
    );
  if (
    (e.responseState.generateStaticMarkup || t.push(`<!--$-->`),
    (n = r.completedSegments),
    n.length !== 1)
  )
    throw Error(j(391));
  return (Pt(e, t, n[0]), (e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`)), e);
}
function Ft(e, t, n) {
  return (He(t, e.responseState, n.formatContext, n.id), Pt(e, t, n), Ue(t, n.formatContext));
}
function It(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) Lt(e, t, n, r[i]);
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
function Lt(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(j(392));
    return Ft(e, t, r);
  }
  return (
    Ft(e, t, r),
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
function Rt(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      (Pt(e, t, n), (e.completedRootSegment = null));
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
        var f = We(l || ``);
        r.push(f);
      }
      if (u || d) {
        r.push(`,`);
        var p = We(u || ``);
        r.push(p);
      }
      if (d) {
        r.push(`,`);
        var m = We(d);
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
      if (!It(e, t, h[i])) {
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
          if (!Lt(a, o, _, ee[s])) {
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
      if (!It(e, t, y[i])) {
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
function zt(e, t) {
  try {
    var n = e.abortableTasks;
    (n.forEach(function (n) {
      return kt(n, e, t);
    }),
      n.clear(),
      e.destination !== null && Rt(e, e.destination));
  } catch (t) {
    (bt(e, t), xt(e, t));
  }
}
function Bt() {}
function Vt(e, t, n, r) {
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
    ((e = _t(
      e,
      Ge(n, t ? t.identifierPrefix : void 0),
      { insertionMode: 1, selectedValue: null },
      1 / 0,
      Bt,
      void 0,
      function () {
        c = !0;
      },
      void 0,
      void 0
    )),
    Mt(e),
    zt(e, r),
    e.status === 1)
  )
    ((e.status = 2), s.destroy(e.fatalError));
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      Rt(e, s);
    } catch (t) {
      (bt(e, t), xt(e, t));
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
function Ht(e) {
  J && 0 < Y && (e.enqueue(new Uint8Array(J.buffer, 0, Y)), (J = null), (Y = 0));
}
function z(e) {
  return ai.encode(e);
}
function B(e) {
  return ai.encode(e);
}
function Ut(e, t) {
  typeof e.error == `function` ? e.error(t) : e.close();
}
function Wt(e) {
  return X.call(ci, e) ? !0 : X.call(si, e) ? !1 : oi.test(e) ? (ci[e] = !0) : ((si[e] = !0), !1);
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
function Gt(e) {
  return e[1].toUpperCase();
}
function H(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = fi.exec(e);
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
function Kt(e, t, n, r) {
  return t + (n === `s` ? `\\u0073` : `\\u0053`) + r;
}
function qt(e, t, n, r, i) {
  ((e = e === void 0 ? `` : e), (t = t === void 0 ? gi : B(`<script nonce="` + H(t) + `">`)));
  var a = [];
  if ((n !== void 0 && a.push(t, z((`` + n).replace(xi, Kt)), _i), r !== void 0))
    for (n = 0; n < r.length; n++) a.push(vi, z(H(r[n])), bi);
  if (i !== void 0) for (r = 0; r < i.length; r++) a.push(yi, z(H(i[r])), bi);
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
function Jt(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function Yt(e) {
  return Jt(
    e === `http://www.w3.org/2000/svg` ? 2 : e === `http://www.w3.org/1998/Math/MathML` ? 3 : 0,
    null
  );
}
function Xt(e, t, n) {
  switch (t) {
    case `select`:
      return Jt(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return Jt(2, null);
    case `math`:
      return Jt(3, null);
    case `foreignObject`:
      return Jt(1, null);
    case `table`:
      return Jt(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return Jt(5, null);
    case `colgroup`:
      return Jt(7, null);
    case `tr`:
      return Jt(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? Jt(1, null) : e;
}
function Zt(e, t, n, r) {
  return t === `` ? r : (r && e.push(Si), e.push(z(H(t))), !0);
}
function Qt(e, t, n) {
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
          var o = Ci.get(a);
          (o !== void 0 ||
            ((o = B(H(a.replace(pi, `-$1`).toLowerCase().replace(mi, `-ms-`)))), Ci.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || X.call(ui, r)
                  ? z(`` + i)
                  : z(i + `px`)
                : z(H((`` + i).trim()))));
        }
        t ? ((t = !1), e.push(wi, a, Ti, i)) : e.push(Ei, a, Ti, i);
      }
    }
  t || e.push(ki);
}
function U(e, t, n, r) {
  switch (n) {
    case `style`:
      Qt(e, t, r);
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
          r && e.push(Di, n, Ai);
          break;
        case 4:
          !0 === r ? e.push(Di, n, Ai) : !1 !== r && e.push(Di, n, Oi, z(H(r)), ki);
          break;
        case 5:
          isNaN(r) || e.push(Di, n, Oi, z(H(r)), ki);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(Di, n, Oi, z(H(r)), ki);
          break;
        default:
          (t.sanitizeURL && (r = `` + r), e.push(Di, n, Oi, z(H(r)), ki));
      }
    } else if (Wt(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)) return;
      }
      e.push(Di, z(n), Oi, z(H(r)), ki);
    }
  }
}
function $t(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(I(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(I(61));
    ((t = t.__html), t != null && e.push(z(`` + t)));
  }
}
function en(e) {
  var t = ``;
  return (
    ii.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function tn(e, t, n, r) {
  e.push(nn(n));
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
  return (e.push(ji), $t(e, a, n), typeof n == `string` ? (e.push(z(H(n))), null) : n);
}
function nn(e) {
  var t = Ii.get(e);
  if (t === void 0) {
    if (!Fi.test(e)) throw Error(I(65, e));
    ((t = B(`<` + e)), Ii.set(e, t));
  }
  return t;
}
function rn(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(nn(`select`));
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
      return (e.push(ji), $t(e, o, a), a);
    case `option`:
      ((o = i.selectedValue), e.push(nn(`option`)));
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
        if (((n = c === null ? en(s) : `` + c), hi(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(Ni);
              break;
            }
        } else `` + o === n && e.push(Ni);
      else l && e.push(Ni);
      return (e.push(ji), $t(e, u, s), s);
    case `textarea`:
      for (s in (e.push(nn(`textarea`)), (u = o = a = null), n))
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
      if ((a === null && o !== null && (a = o), e.push(ji), u != null)) {
        if (a != null) throw Error(I(92));
        if (hi(u) && 1 < u.length) throw Error(I(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(Pi),
        a !== null && e.push(z(H(`` + a))),
        null
      );
    case `input`:
      for (o in (e.push(nn(`input`)), (c = u = s = a = null), n))
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
        e.push(Mi),
        null
      );
    case `menuitem`:
      for (var f in (e.push(nn(`menuitem`)), n))
        if (X.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(I(400));
            default:
              U(e, r, f, a);
          }
      return (e.push(ji), null);
    case `title`:
      for (d in (e.push(nn(`title`)), (a = null), n))
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
      return (e.push(ji), a);
    case `listing`:
    case `pre`:
      for (c in (e.push(nn(t)), (o = a = null), n))
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
      if ((e.push(ji), o != null)) {
        if (a != null) throw Error(I(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(I(61));
        ((n = o.__html),
          n != null &&
            (typeof n == `string` &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(Pi, z(n))
              : e.push(z(`` + n))));
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(Pi),
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
      for (var p in (e.push(nn(t)), n))
        if (X.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(I(399, t));
            default:
              U(e, r, p, a);
          }
      return (e.push(Mi), null);
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return tn(e, n, t, r);
    case `html`:
      return (i.insertionMode === 0 && e.push(Li), tn(e, n, t, r));
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`) return tn(e, n, t, r);
      for (l in (e.push(nn(t)), (o = a = null), n))
        if (X.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              Qt(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              Wt(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(Di, z(l), Oi, z(H(s)), ki);
          }
      return (e.push(ji), $t(e, o, a), a);
  }
}
function an(e, t, n) {
  if ((L(e, Ui), n === null)) throw Error(I(395));
  return (L(e, n), R(e, Wi));
}
function on(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return (L(e, Zi), L(e, t.segmentPrefix), L(e, z(r.toString(16))), R(e, Qi));
    case 2:
      return (L(e, ea), L(e, t.segmentPrefix), L(e, z(r.toString(16))), R(e, ta));
    case 3:
      return (L(e, ra), L(e, t.segmentPrefix), L(e, z(r.toString(16))), R(e, ia));
    case 4:
      return (L(e, oa), L(e, t.segmentPrefix), L(e, z(r.toString(16))), R(e, sa));
    case 5:
      return (L(e, la), L(e, t.segmentPrefix), L(e, z(r.toString(16))), R(e, ua));
    case 6:
      return (L(e, fa), L(e, t.segmentPrefix), L(e, z(r.toString(16))), R(e, pa));
    case 7:
      return (L(e, ha), L(e, t.segmentPrefix), L(e, z(r.toString(16))), R(e, ga));
    default:
      throw Error(I(397));
  }
}
function sn(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return R(e, $i);
    case 2:
      return R(e, na);
    case 3:
      return R(e, aa);
    case 4:
      return R(e, ca);
    case 5:
      return R(e, da);
    case 6:
      return R(e, ma);
    case 7:
      return R(e, _a);
    default:
      throw Error(I(397));
  }
}
function cn(e) {
  return JSON.stringify(e).replace(ja, function (e) {
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
function ln(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case Fa:
      return `Fragment`;
    case Pa:
      return `Portal`;
    case La:
      return `Profiler`;
    case Ia:
      return `StrictMode`;
    case Va:
      return `Suspense`;
    case Ha:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case za:
        return (e.displayName || `Context`) + `.Consumer`;
      case Ra:
        return (e._context.displayName || `Context`) + `.Provider`;
      case Ba:
        var t = e.render;
        return (
          (e = e.displayName),
          (e ||=
            ((e = t.displayName || t.name || ``),
            e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case Ua:
        return ((t = e.displayName || null), t === null ? ln(e.type) || `Memo` : t);
      case Wa:
        ((t = e._payload), (e = e._init));
        try {
          return ln(e(t));
        } catch {}
    }
  return null;
}
function un(e, t) {
  if (((e = e.contextTypes), !e)) return Xa;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function dn(e, t) {
  if (e !== t) {
    ((e.context._currentValue = e.parentValue), (e = e.parent));
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(I(401));
    } else {
      if (n === null) throw Error(I(401));
      dn(e, n);
    }
    t.context._currentValue = t.value;
  }
}
function fn(e) {
  ((e.context._currentValue = e.parentValue), (e = e.parent), e !== null && fn(e));
}
function pn(e) {
  var t = e.parent;
  (t !== null && pn(t), (e.context._currentValue = e.value));
}
function mn(e, t) {
  if (((e.context._currentValue = e.parentValue), (e = e.parent), e === null)) throw Error(I(402));
  e.depth === t.depth ? dn(e, t) : mn(e, t);
}
function hn(e, t) {
  var n = t.parent;
  if (n === null) throw Error(I(402));
  (e.depth === n.depth ? dn(e, n) : hn(e, n), (t.context._currentValue = t.value));
}
function gn(e) {
  var t = Za;
  t !== e &&
    (t === null
      ? pn(e)
      : e === null
        ? fn(t)
        : t.depth === e.depth
          ? dn(t, e)
          : t.depth > e.depth
            ? mn(t, e)
            : hn(t, e),
    (Za = e));
}
function _n(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  ((e.updater = Qa), (e.props = n), (e.state = i));
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` && ((o = o(n, i)), (i = o == null ? i : Ma({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(),
      t !== e.state && Qa.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (((t = a.queue), (o = a.replace), (a.queue = null), (a.replace = !1), o && t.length === 1))
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = +!!o; o < t.length; o++) {
          var s = t[o];
          ((s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = Ma({}, a, s))) : Ma(a, s)));
        }
        e.state = a;
      }
    else a.queue = null;
}
function vn(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - eo(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var a = 32 - eo(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - eo(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function yn(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((to(e) / no) | 0)) | 0);
}
function bn(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function xn() {
  if (io === null) throw Error(I(321));
  return io;
}
function Sn() {
  if (0 < fo) throw Error(I(312));
  return { memoizedState: null, queue: null, next: null };
}
function Cn() {
  return (
    Q === null
      ? oo === null
        ? ((so = !1), (oo = Q = Sn()))
        : ((so = !0), (Q = oo))
      : Q.next === null
        ? ((so = !1), (Q = Q.next = Sn()))
        : ((so = !0), (Q = Q.next)),
    Q
  );
}
function wn() {
  ((ao = io = null), (co = !1), (oo = null), (fo = 0), (Q = uo = null));
}
function Tn(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function En(e, t, n) {
  if (((io = xn()), (Q = Cn()), so)) {
    var r = Q.queue;
    if (((t = r.dispatch), uo !== null && ((n = uo.get(r)), n !== void 0))) {
      (uo.delete(r), (r = Q.memoizedState));
      do ((r = e(r, n.action)), (n = n.next));
      while (n !== null);
      return ((Q.memoizedState = r), [r, t]);
    }
    return [Q.memoizedState, t];
  }
  return (
    (e = e === Tn ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    (Q.memoizedState = e),
    (e = Q.queue = { last: null, dispatch: null }),
    (e = e.dispatch = On.bind(null, io, e)),
    [Q.memoizedState, e]
  );
}
function Dn(e, t) {
  if (((io = xn()), (Q = Cn()), (t = t === void 0 ? null : t), Q !== null)) {
    var n = Q.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!ro(t[i], r[i])) {
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
function On(e, t, n) {
  if (25 <= fo) throw Error(I(301));
  if (e === io)
    if (
      ((co = !0),
      (e = { action: n, next: null }),
      uo === null && (uo = new Map()),
      (n = uo.get(t)),
      n === void 0)
    )
      uo.set(t, e);
    else {
      for (t = n; t.next !== null;) t = t.next;
      t.next = e;
    }
}
function kn() {
  throw Error(I(394));
}
function An() {}
function jn(e) {
  return (console.error(e), null);
}
function Mn() {}
function Nn(e, t, n, r, i, a, o, s, c) {
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
      onError: i === void 0 ? jn : i,
      onAllReady: a === void 0 ? Mn : a,
      onShellReady: o === void 0 ? Mn : o,
      onShellError: s === void 0 ? Mn : s,
      onFatalError: c === void 0 ? Mn : c,
    }),
    (n = Fn(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = Pn(t, e, null, n, u, Xa, null, $a)),
    l.push(e),
    t
  );
}
function Pn(e, t, n, r, i, a, o, s) {
  (e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++);
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      (t.push(c), t.length === 1 && Jn(e));
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
function Fn(e, t, n, r, i, a) {
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
function In(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`
    );
  return e;
}
function Ln(e, t) {
  var n = e.onShellError;
  (n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), Ut(e.destination, t)));
}
function Rn(e, t, n, r, i) {
  for (io = {}, ao = t, lo = 0, e = n(r, i); co;)
    ((co = !1), (lo = 0), (fo += 1), (Q = null), (e = n(r, i)));
  return (wn(), e);
}
function zn(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(I(108, ln(r) || `Unknown`, s));
      r = Ma({}, o, n);
    }
    ((t.legacyContext = r), W(e, t, i), (t.legacyContext = o));
  } else W(e, t, i);
}
function Bn(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = Ma({}, t)), (e = e.defaultProps), e)) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Vn(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = un(n, t.legacyContext);
      var a = n.contextType;
      ((a = new n(r, typeof a == `object` && a ? a._currentValue : i)),
        _n(a, n, r, i),
        zn(e, t, a, n));
    } else {
      ((a = un(n, t.legacyContext)), (i = Rn(e, t, n, r, a)));
      var o = lo !== 0;
      if (typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0)
        (_n(i, n, r, a), zn(e, t, i, n));
      else if (o) {
        ((r = t.treeContext), (t.treeContext = vn(r, 1, 0)));
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
        case qa:
        case Ka:
        case Ia:
        case La:
        case Fa:
          W(e, t, r.children);
          return;
        case Ha:
          W(e, t, r.children);
          return;
        case Ga:
          throw Error(I(343));
        case Va:
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
              c = Fn(e, i.chunks.length, s, i.formatContext, !1, !1);
            (i.children.push(c), (i.lastPushedText = !1));
            var l = Fn(e, 0, null, i.formatContext, !1, !1);
            ((l.parentFlushed = !0), (t.blockedBoundary = s), (t.blockedSegment = l));
            try {
              if (
                (Un(e, t, r),
                l.lastPushedText && l.textEmbedded && l.chunks.push(Si),
                (l.status = 1),
                Kn(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              ((l.status = 4), (s.forceClientRender = !0), (s.errorDigest = In(e, t)));
            } finally {
              ((t.blockedBoundary = n), (t.blockedSegment = i));
            }
            ((t = Pn(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t));
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case Ba:
            if (((r = Rn(e, t, n.render, r, i)), lo !== 0)) {
              ((n = t.treeContext), (t.treeContext = vn(n, 1, 0)));
              try {
                W(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else W(e, t, r);
            return;
          case Ua:
            ((n = n.type), (r = Bn(n, r)), Vn(e, t, n, r, i));
            return;
          case Ra:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue),
              (n._currentValue = r),
              (o = Za),
              (Za = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              W(e, t, i),
              (e = Za),
              e === null)
            )
              throw Error(I(403));
            ((r = e.parentValue),
              (e.context._currentValue = r === Ja ? e.context._defaultValue : r),
              (e = Za = e.parent),
              (t.context = e));
            return;
          case za:
            ((r = r.children), (r = r(n._currentValue)), W(e, t, r));
            return;
          case Wa:
            ((i = n._init), (n = i(n._payload)), (r = Bn(n, r)), Vn(e, t, n, r, void 0));
            return;
        }
      throw Error(I(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = rn(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = Xt(o, n, r)),
      Un(e, t, a),
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
        i.chunks.push(Ri, z(n), zi);
    }
    i.lastPushedText = !1;
  }
}
function W(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case Na:
        Vn(e, t, n.type, n.props, n.ref);
        return;
      case Pa:
        throw Error(I(257));
      case Wa:
        var r = n._init;
        ((n = r(n._payload)), W(e, t, n));
        return;
    }
    if (hi(n)) {
      Hn(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (Ya && n[Ya]) || n[`@@iterator`]), (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do (i.push(n.value), (n = r.next()));
        while (!n.done);
        Hn(e, t, i);
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
      (r.lastPushedText = Zt(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = Zt(t.blockedSegment.chunks, `` + n, e.responseState, r.lastPushedText)));
}
function Hn(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = vn(a, r, i);
    try {
      Un(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function Un(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return W(e, t, n);
  } catch (c) {
    if ((wn(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        gn(a),
        c
      );
    n = c;
    var o = t.blockedSegment,
      s = Fn(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    (o.children.push(s),
      (o.lastPushedText = !1),
      (e = Pn(
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
      gn(a));
  }
}
function Wn(e) {
  var t = e.blockedBoundary;
  ((e = e.blockedSegment), (e.status = 3), qn(this, t, e));
}
function Gn(e, t, n) {
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
          return Gn(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r())));
}
function Kn(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    ((n.id = t.id), (n.parentFlushed = !0), n.status === 1 && Kn(e, n));
  } else e.completedSegments.push(t);
}
function qn(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(I(389));
      e.completedRootSegment = n;
    }
    (e.pendingRootTasks--,
      e.pendingRootTasks === 0 && ((e.onShellError = Mn), (t = e.onShellReady), t()));
  } else
    (t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && Kn(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(Wn, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (Kn(t, n),
            t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t))));
  (e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e()));
}
function Jn(e) {
  if (e.status !== 2) {
    var t = Za,
      n = ho.current;
    ho.current = po;
    var r = mo;
    mo = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          gn(o.context);
          try {
            (W(s, o, o.node),
              c.lastPushedText && c.textEmbedded && c.chunks.push(Si),
              o.abortSet.delete(o),
              (c.status = 1),
              qn(s, o.blockedBoundary, c));
          } catch (e) {
            if ((wn(), typeof e == `object` && e && typeof e.then == `function`)) {
              var l = o.ping;
              e.then(l, l);
            } else {
              (o.abortSet.delete(o), (c.status = 4));
              var u = o.blockedBoundary,
                d = e,
                f = In(s, d);
              if (
                (u === null
                  ? Ln(s, d)
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
      (a.splice(0, i), e.destination !== null && er(e, e.destination));
    } catch (t) {
      (In(e, t), Ln(e, t));
    } finally {
      ((mo = r), (ho.current = n), n === po && gn(t));
    }
  }
}
function Yn(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        L(t, Bi),
        L(t, e.placeholderPrefix),
        (e = z(r.toString(16))),
        L(t, e),
        R(t, Vi)
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) L(t, r[a]);
        i = Xn(e, t, i);
      }
      for (; a < r.length - 1; a++) L(t, r[a]);
      return (a < r.length && (i = R(t, r[a])), i);
    default:
      throw Error(I(390));
  }
}
function Xn(e, t, n) {
  var r = n.boundary;
  if (r === null) return Yn(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    ((r = r.errorDigest),
      R(t, Gi),
      L(t, qi),
      r && (L(t, Yi), L(t, z(H(r))), L(t, Ji)),
      R(t, Xi),
      Yn(e, t, n));
  else if (0 < r.pendingTasks) {
    ((r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r));
    var i = e.responseState,
      a = i.nextSuspenseID++;
    ((i = B(i.boundaryPrefix + a.toString(16))),
      (r = r.id = i),
      an(t, e.responseState, r),
      Yn(e, t, n));
  } else if (r.byteSize > e.progressiveChunkSize)
    ((r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      an(t, e.responseState, r.id),
      Yn(e, t, n));
  else {
    if ((R(t, Hi), (n = r.completedSegments), n.length !== 1)) throw Error(I(391));
    Xn(e, t, n[0]);
  }
  return R(t, Ki);
}
function Zn(e, t, n) {
  return (on(t, e.responseState, n.formatContext, n.id), Xn(e, t, n), sn(t, n.formatContext));
}
function Qn(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) $n(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    L(t, e.startInlineScript),
    e.sentCompleteBoundaryFunction ? L(t, Ca) : ((e.sentCompleteBoundaryFunction = !0), L(t, Sa)),
    r === null)
  )
    throw Error(I(395));
  return ((n = z(n.toString(16))), L(t, r), L(t, wa), L(t, e.segmentPrefix), L(t, n), R(t, Ta));
}
function $n(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(I(392));
    return Zn(e, t, r);
  }
  return (
    Zn(e, t, r),
    (e = e.responseState),
    L(t, e.startInlineScript),
    e.sentCompleteSegmentFunction ? L(t, ya) : ((e.sentCompleteSegmentFunction = !0), L(t, va)),
    L(t, e.segmentPrefix),
    (i = z(i.toString(16))),
    L(t, i),
    L(t, ba),
    L(t, e.placeholderPrefix),
    L(t, i),
    R(t, xa)
  );
}
function er(e, t) {
  ((J = new Uint8Array(512)), (Y = 0));
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      (Xn(e, t, n), (e.completedRootSegment = null));
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
        s.sentClientRenderFunction ? L(r, Da) : ((s.sentClientRenderFunction = !0), L(r, Ea)),
        c === null)
      )
        throw Error(I(395));
      if (
        (L(r, c),
        L(r, Oa),
        (l || u || d) && (L(r, Aa), L(r, z(cn(l || ``)))),
        (u || d) && (L(r, Aa), L(r, z(cn(u || ``)))),
        d && (L(r, Aa), L(r, z(cn(d)))),
        !R(r, ka))
      ) {
        ((e.destination = null), i++, a.splice(0, i));
        return;
      }
    }
    a.splice(0, i);
    var f = e.completedBoundaries;
    for (i = 0; i < f.length; i++)
      if (!Qn(e, t, f[i])) {
        ((e.destination = null), i++, f.splice(0, i));
        return;
      }
    (f.splice(0, i), Ht(t), (J = new Uint8Array(512)), (Y = 0));
    var p = e.partialBoundaries;
    for (i = 0; i < p.length; i++) {
      var m = p[i];
      e: {
        ((a = e), (o = t));
        var h = m.completedSegments;
        for (s = 0; s < h.length; s++)
          if (!$n(a, o, m, h[s])) {
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
      if (!Qn(e, t, _[i])) {
        ((e.destination = null), i++, _.splice(0, i));
        return;
      }
    _.splice(0, i);
  } finally {
    (Ht(t),
      e.allPendingTasks === 0 &&
        e.pingedTasks.length === 0 &&
        e.clientRenderedBoundaries.length === 0 &&
        e.completedBoundaries.length === 0 &&
        t.close());
  }
}
function tr(e, t) {
  try {
    var n = e.abortableTasks;
    (n.forEach(function (n) {
      return Gn(n, e, t);
    }),
      n.clear(),
      e.destination !== null && er(e, e.destination));
  } catch (t) {
    (In(e, t), Ln(e, t));
  }
}
var nr,
  rr,
  ir,
  G,
  ar,
  or,
  sr,
  K,
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
  qr,
  q,
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
  ii,
  J,
  Y,
  ai,
  X,
  oi,
  si,
  ci,
  Z,
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
  oo,
  Q,
  so,
  co,
  lo,
  uo,
  fo,
  po,
  mo,
  ho,
  $,
  go,
  _o,
  vo,
  yo = t(() => {
    (g(),
      (nr = `default` in r ? _ : r),
      (rr = {}),
      (ir = nr),
      (G = Object.prototype.hasOwnProperty),
      (ar =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (or = {}),
      (sr = {}),
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
      (cr = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(cr, Me);
          K[t] = new M(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(cr, Me);
          K[t] = new M(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(cr, Me);
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
      (lr = {
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
      (ur = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(lr).forEach(function (e) {
        ur.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (lr[t] = lr[e]));
        });
      }),
      (dr = /["'&<>]/),
      (fr = /([A-Z])/g),
      (pr = /^ms-/),
      (mr = Array.isArray),
      (hr = new Map()),
      (gr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (_r = new Map()),
      (vr = /[<\u2028\u2029]/g),
      (yr = Object.assign),
      (br = Symbol.for(`react.element`)),
      (xr = Symbol.for(`react.portal`)),
      (Sr = Symbol.for(`react.fragment`)),
      (Cr = Symbol.for(`react.strict_mode`)),
      (wr = Symbol.for(`react.profiler`)),
      (Tr = Symbol.for(`react.provider`)),
      (Er = Symbol.for(`react.context`)),
      (Dr = Symbol.for(`react.forward_ref`)),
      (Or = Symbol.for(`react.suspense`)),
      (kr = Symbol.for(`react.suspense_list`)),
      (Ar = Symbol.for(`react.memo`)),
      (jr = Symbol.for(`react.lazy`)),
      (Mr = Symbol.for(`react.scope`)),
      (Nr = Symbol.for(`react.debug_trace_mode`)),
      (Pr = Symbol.for(`react.legacy_hidden`)),
      (Fr = Symbol.for(`react.default_value`)),
      (Ir = Symbol.iterator),
      (Lr = {}),
      (Rr = null),
      (zr = {
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
      (Br = { id: 1, overflow: `` }),
      (Vr = Math.clz32 ? Math.clz32 : rt),
      (Hr = Math.log),
      (Ur = Math.LN2),
      (Wr = typeof Object.is == `function` ? Object.is : it),
      (Gr = null),
      (Kr = null),
      (qr = null),
      (q = null),
      (Jr = !1),
      (Yr = !1),
      (Xr = 0),
      (Zr = null),
      (Qr = 0),
      ($r = {
        readContext: function (e) {
          return e._currentValue2;
        },
        useContext: function (e) {
          return (at(), e._currentValue2);
        },
        useMemo: dt,
        useReducer: ut,
        useRef: function (e) {
          ((Gr = at()), (q = st()));
          var t = q.memoizedState;
          return t === null ? ((e = { current: e }), (q.memoizedState = e)) : t;
        },
        useState: function (e) {
          return ut(lt, e);
        },
        useInsertionEffect: mt,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return dt(function () {
            return e;
          }, t);
        },
        useImperativeHandle: mt,
        useEffect: mt,
        useDebugValue: mt,
        useDeferredValue: function (e) {
          return (at(), e);
        },
        useTransition: function () {
          return (at(), [!1, pt]);
        },
        useId: function () {
          var e = Kr.treeContext,
            t = e.overflow;
          ((e = e.id), (e = (e & ~(1 << (32 - Vr(e) - 1))).toString(32) + t));
          var n = ei;
          if (n === null) throw Error(j(404));
          return (
            (t = Xr++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return (at(), t(e._source));
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(j(407));
          return n();
        },
      }),
      (ei = null),
      (ti = ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher),
      (rr.renderToNodeStream = function () {
        throw Error(j(207));
      }),
      (rr.renderToStaticMarkup = function (e, t) {
        return Vt(
          e,
          t,
          !0,
          `The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`
        );
      }),
      (rr.renderToStaticNodeStream = function () {
        throw Error(j(208));
      }),
      (rr.renderToString = function (e, t) {
        return Vt(
          e,
          t,
          !1,
          `The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`
        );
      }),
      (rr.version = `18.2.0`),
      (ni = `default` in r ? _ : r),
      (ri = {}),
      (ii = ni),
      (J = null),
      (Y = 0),
      (ai = new TextEncoder()),
      (X = Object.prototype.hasOwnProperty),
      (oi =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (si = {}),
      (ci = {}),
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
      (li = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(li, Gt);
          Z[t] = new V(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(li, Gt);
          Z[t] = new V(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(li, Gt);
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
      (ui = {
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
      (di = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(ui).forEach(function (e) {
        di.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ui[t] = ui[e]));
        });
      }),
      (fi = /["'&<>]/),
      (pi = /([A-Z])/g),
      (mi = /^ms-/),
      (hi = Array.isArray),
      (gi = B(`<script>`)),
      (_i = B(`<\/script>`)),
      (vi = B(`<script src="`)),
      (yi = B(`<script type="module" src="`)),
      (bi = B(`" async=""><\/script>`)),
      (xi = /(<\/|<)(s)(cript)/gi),
      (Si = B(`<!-- -->`)),
      (Ci = new Map()),
      (wi = B(` style="`)),
      (Ti = B(`:`)),
      (Ei = B(`;`)),
      (Di = B(` `)),
      (Oi = B(`="`)),
      (ki = B(`"`)),
      (Ai = B(`=""`)),
      (ji = B(`>`)),
      (Mi = B(`/>`)),
      (Ni = B(` selected=""`)),
      (Pi = B(`
`)),
      (Fi = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (Ii = new Map()),
      (Li = B(`<!DOCTYPE html>`)),
      (Ri = B(`</`)),
      (zi = B(`>`)),
      (Bi = B(`<template id="`)),
      (Vi = B(`"></template>`)),
      (Hi = B(`<!--$-->`)),
      (Ui = B(`<!--$?--><template id="`)),
      (Wi = B(`"></template>`)),
      (Gi = B(`<!--$!-->`)),
      (Ki = B(`<!--/$-->`)),
      (qi = B(`<template`)),
      (Ji = B(`"`)),
      (Yi = B(` data-dgst="`)),
      B(` data-msg="`),
      B(` data-stck="`),
      (Xi = B(`></template>`)),
      (Zi = B(`<div hidden id="`)),
      (Qi = B(`">`)),
      ($i = B(`</div>`)),
      (ea = B(`<svg aria-hidden="true" style="display:none" id="`)),
      (ta = B(`">`)),
      (na = B(`</svg>`)),
      (ra = B(`<math aria-hidden="true" style="display:none" id="`)),
      (ia = B(`">`)),
      (aa = B(`</math>`)),
      (oa = B(`<table hidden id="`)),
      (sa = B(`">`)),
      (ca = B(`</table>`)),
      (la = B(`<table hidden><tbody id="`)),
      (ua = B(`">`)),
      (da = B(`</tbody></table>`)),
      (fa = B(`<table hidden><tr id="`)),
      (pa = B(`">`)),
      (ma = B(`</tr></table>`)),
      (ha = B(`<table hidden><colgroup id="`)),
      (ga = B(`">`)),
      (_a = B(`</colgroup></table>`)),
      (va = B(
        `function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`
      )),
      (ya = B(`$RS("`)),
      (ba = B(`","`)),
      (xa = B(`")<\/script>`)),
      (Sa = B(
        `function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`
      )),
      (Ca = B(`$RC("`)),
      (wa = B(`","`)),
      (Ta = B(`")<\/script>`)),
      (Ea = B(
        `function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`
      )),
      (Da = B(`$RX("`)),
      (Oa = B(`"`)),
      (ka = B(`)<\/script>`)),
      (Aa = B(`,`)),
      (ja = /[<\u2028\u2029]/g),
      (Ma = Object.assign),
      (Na = Symbol.for(`react.element`)),
      (Pa = Symbol.for(`react.portal`)),
      (Fa = Symbol.for(`react.fragment`)),
      (Ia = Symbol.for(`react.strict_mode`)),
      (La = Symbol.for(`react.profiler`)),
      (Ra = Symbol.for(`react.provider`)),
      (za = Symbol.for(`react.context`)),
      (Ba = Symbol.for(`react.forward_ref`)),
      (Va = Symbol.for(`react.suspense`)),
      (Ha = Symbol.for(`react.suspense_list`)),
      (Ua = Symbol.for(`react.memo`)),
      (Wa = Symbol.for(`react.lazy`)),
      (Ga = Symbol.for(`react.scope`)),
      (Ka = Symbol.for(`react.debug_trace_mode`)),
      (qa = Symbol.for(`react.legacy_hidden`)),
      (Ja = Symbol.for(`react.default_value`)),
      (Ya = Symbol.iterator),
      (Xa = {}),
      (Za = null),
      (Qa = {
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
      ($a = { id: 1, overflow: `` }),
      (eo = Math.clz32 ? Math.clz32 : yn),
      (to = Math.log),
      (no = Math.LN2),
      (ro = typeof Object.is == `function` ? Object.is : bn),
      (io = null),
      (ao = null),
      (oo = null),
      (Q = null),
      (so = !1),
      (co = !1),
      (lo = 0),
      (uo = null),
      (fo = 0),
      (po = {
        readContext: function (e) {
          return e._currentValue;
        },
        useContext: function (e) {
          return (xn(), e._currentValue);
        },
        useMemo: Dn,
        useReducer: En,
        useRef: function (e) {
          ((io = xn()), (Q = Cn()));
          var t = Q.memoizedState;
          return t === null ? ((e = { current: e }), (Q.memoizedState = e)) : t;
        },
        useState: function (e) {
          return En(Tn, e);
        },
        useInsertionEffect: An,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return Dn(function () {
            return e;
          }, t);
        },
        useImperativeHandle: An,
        useEffect: An,
        useDebugValue: An,
        useDeferredValue: function (e) {
          return (xn(), e);
        },
        useTransition: function () {
          return (xn(), [!1, kn]);
        },
        useId: function () {
          var e = ao.treeContext,
            t = e.overflow;
          ((e = e.id), (e = (e & ~(1 << (32 - eo(e) - 1))).toString(32) + t));
          var n = mo;
          if (n === null) throw Error(I(404));
          return (
            (t = lo++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return (xn(), t(e._source));
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(I(407));
          return n();
        },
      }),
      (mo = null),
      (ho = ii.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher),
      (ri.renderToReadableStream = function (e, t) {
        return new Promise(function (n, r) {
          var i,
            a,
            o = new Promise(function (e, t) {
              ((a = e), (i = t));
            }),
            s = Nn(
              e,
              qt(
                t ? t.identifierPrefix : void 0,
                t ? t.nonce : void 0,
                t ? t.bootstrapScriptContent : void 0,
                t ? t.bootstrapScripts : void 0,
                t ? t.bootstrapModules : void 0
              ),
              Yt(t ? t.namespaceURI : void 0),
              t ? t.progressiveChunkSize : void 0,
              t ? t.onError : void 0,
              a,
              function () {
                var e = new ReadableStream(
                  {
                    type: `bytes`,
                    pull: function (e) {
                      if (s.status === 1) ((s.status = 2), Ut(e, s.fatalError));
                      else if (s.status !== 2 && s.destination === null) {
                        s.destination = e;
                        try {
                          er(s, e);
                        } catch (e) {
                          (In(s, e), Ln(s, e));
                        }
                      }
                    },
                    cancel: function () {
                      tr(s);
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
                (tr(s, c.reason), c.removeEventListener(`abort`, l));
              };
            c.addEventListener(`abort`, l);
          }
          Jn(s);
        });
      }),
      (ri.version = `18.2.0`),
      ($ = {}),
      (go = rr),
      (_o = ri),
      ($.version = go.version),
      ($.renderToString = go.renderToString),
      ($.renderToStaticMarkup = go.renderToStaticMarkup),
      ($.renderToNodeStream = go.renderToNodeStream),
      ($.renderToStaticNodeStream = go.renderToStaticNodeStream),
      ($.renderToReadableStream = _o.renderToReadableStream),
      $.version,
      $.renderToString,
      $.renderToStaticMarkup,
      $.renderToNodeStream,
      $.renderToStaticNodeStream,
      (vo = $.renderToReadableStream));
  }),
  bo,
  xo,
  So,
  Co = t(() => {
    (x(),
      oe.loadFonts([
        `GF;IBM Plex Sans-700`,
        `Inter-Black`,
        `Inter-BlackItalic`,
        `Inter-BoldItalic`,
      ]),
      (bo = [
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
      (xo = [
        `.framer-yRdsW .framer-styles-preset-g258t7:not(.rich-text-wrapper), .framer-yRdsW .framer-styles-preset-g258t7.rich-text-wrapper h2 { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (So = `framer-yRdsW`));
  }),
  wo,
  To,
  Eo,
  Do = t(() => {
    (x(),
      oe.loadFonts([]),
      (wo = [{ explicitInter: !0, fonts: [] }]),
      (To = [
        `.framer-PHEt1 .framer-styles-preset-p5rp4c:not(.rich-text-wrapper), .framer-PHEt1 .framer-styles-preset-p5rp4c.rich-text-wrapper a { --framer-link-hover-text-decoration: underline; --framer-link-text-color: var(--token-3b8e9512-fde0-4cd2-885b-f8f7b8e8b211, #5c5c5c); }`,
      ]),
      (Eo = `framer-PHEt1`));
  }),
  Oo,
  ko,
  Ao,
  jo = t(() => {
    (x(),
      oe.loadFonts([
        `GF;IBM Plex Sans-regular`,
        `GF;IBM Plex Sans-700`,
        `GF;IBM Plex Sans-700italic`,
        `GF;IBM Plex Sans-italic`,
      ]),
      (Oo = [
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
      (ko = [
        `.framer-3Bf18 .framer-styles-preset-159ynhm:not(.rich-text-wrapper), .framer-3Bf18 .framer-styles-preset-159ynhm.rich-text-wrapper p { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Ao = `framer-3Bf18`));
  }),
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
  Go,
  Ko,
  qo,
  Jo = t(() => {
    (m(),
      x(),
      ie(),
      g(),
      Co(),
      Do(),
      jo(),
      (Mo = Oe(y.div)),
      (No = {
        cuYBu6e1G: `(min-width: 1200px)`,
        e1EtI7_8U: `(min-width: 810px) and (max-width: 1199.98px)`,
        XrDA4C3Rc: `(max-width: 809.98px)`,
      }),
      (Po = `framer-IyJgx`),
      (Fo = {
        cuYBu6e1G: `framer-v-v7zdi2`,
        e1EtI7_8U: `framer-v-19tkvcc`,
        XrDA4C3Rc: `framer-v-sri1x7`,
      }),
      (Io = { bounce: 0, delay: 0, duration: 0.6, type: `spring` }),
      (Lo = {
        e1EtI7_8U: [
          `.framer-IyJgx .framer-y2sfv1 { padding: 0px 40px 0px 40px; width: 70%; }`,
          `.framer-IyJgx .framer-1573t9m { flex-direction: column; gap: 30px; justify-content: flex-start; }`,
          `.framer-IyJgx .framer-11jqmqu, .framer-IyJgx .framer-1cyjeds { align-content: flex-start; align-items: flex-start; }`,
        ],
        XrDA4C3Rc: [
          `.framer-IyJgx .framer-1afg16h { flex-direction: column; }`,
          `.framer-IyJgx .framer-y2sfv1 { padding: 0px 30px 0px 30px; width: 100%; }`,
          `.framer-IyJgx .framer-1573t9m { flex-direction: column; gap: 30px; justify-content: flex-start; }`,
          `.framer-IyJgx .framer-11jqmqu, .framer-IyJgx .framer-1cyjeds { align-content: flex-start; align-items: flex-start; }`,
        ],
      }),
      (Ro = Object.keys(Lo)),
      (zo = { e1EtI7_8U: `.framer-19tkvcc-override`, XrDA4C3Rc: `.framer-sri1x7-override` }),
      (Bo = [
        `.framer-IyJgx.framer-1h7jsxy, .framer-IyJgx .framer-1h7jsxy { display: block; }`,
        `.framer-IyJgx.framer-v7zdi2 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-IyJgx .framer-1v4s85v { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-IyJgx .framer-1afg16h { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; order: 1001; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 50px 0px; position: relative; width: 100%; }`,
        `.framer-IyJgx .framer-y2sfv1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 50px 0px 50px; position: relative; width: 700px; }`,
        `.framer-IyJgx .framer-85f8sr { --border-bottom-width: 4px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #d9d9d9); --border-left-width: 4px; --border-right-width: 4px; --border-style: dashed; --border-top-width: 4px; -webkit-filter: blur(0px); filter: blur(0px); flex: none; height: 2px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-IyJgx .framer-1tq4oyt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-IyJgx .framer-1573t9m { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IyJgx .framer-1k0whf2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-IyJgx .framer-1i4ze0p { border-bottom-left-radius: 7px; border-bottom-right-radius: 7px; border-top-left-radius: 7px; border-top-right-radius: 7px; flex: none; height: 76px; overflow: visible; position: relative; width: auto; }`,
        `.framer-IyJgx .framer-2bexzc { height: 24px; position: relative; width: 76px; }`,
        `.framer-IyJgx .framer-g530o0 { height: 24px; left: 0px; position: absolute; top: 0px; width: 76px; }`,
        `.framer-IyJgx .framer-h2ceze { height: 5px; left: 9px; position: absolute; top: 10px; width: 7px; }`,
        `.framer-IyJgx .framer-c13g66 { height: 2px; left: 0px; position: absolute; top: 3px; width: 7px; }`,
        `.framer-IyJgx .framer-15bjrnw { height: 2px; left: 1px; position: absolute; top: 0px; width: 1px; }`,
        `.framer-IyJgx .framer-1rapzon { height: 2px; left: 5px; position: absolute; top: 0px; width: 1px; }`,
        `.framer-IyJgx .framer-1cagyxz { height: 14px; left: 6px; position: absolute; top: 6px; width: 55px; }`,
        `.framer-IyJgx .framer-7lh6eq { height: 14px; left: 0px; position: absolute; top: 0px; width: 14px; }`,
        `.framer-IyJgx .framer-1srcgat { height: 11px; left: 1px; position: absolute; top: 1px; width: 11px; }`,
        `.framer-IyJgx .framer-qonfto { height: 8px; left: 48px; position: absolute; top: 5px; width: 7px; }`,
        `.framer-IyJgx .framer-1el2v20 { height: 3px; left: 50px; position: absolute; top: 7px; width: 2px; }`,
        `.framer-IyJgx .framer-9wsak4 { height: 8px; left: 35px; position: absolute; top: 5px; width: 6px; }`,
        `.framer-IyJgx .framer-148iv3l { height: 4px; left: 37px; position: absolute; top: 9px; width: 3px; }`,
        `.framer-IyJgx .framer-kwlnwp { height: 7px; left: 35px; position: absolute; top: 11px; width: 3px; }`,
        `.framer-IyJgx .framer-325272 { height: 6px; left: 30px; position: absolute; top: 13px; width: 6px; }`,
        `.framer-IyJgx .framer-7m82v6 { height: 6px; left: 0px; position: absolute; top: 0px; width: 6px; }`,
        `.framer-IyJgx .framer-1pply7a { height: 4px; left: 2px; position: absolute; top: 1px; width: 3px; }`,
        `.framer-IyJgx .framer-garpjv { height: 16px; left: 24px; position: absolute; top: 5px; width: 40px; }`,
        `.framer-IyJgx .framer-1vx7oce { height: 6px; left: 0px; position: absolute; top: 7px; width: 5px; }`,
        `.framer-IyJgx .framer-1t5w1i { height: 8px; left: 23px; position: absolute; top: 8px; width: 6px; }`,
        `.framer-IyJgx .framer-1tcfxez { height: 8px; left: 37px; position: absolute; top: 6px; width: 4px; }`,
        `.framer-IyJgx .framer-x80sek { height: 5px; left: 22px; position: absolute; top: 0px; width: 3px; }`,
        `.framer-IyJgx .framer-5iox0r { height: 5px; left: 28px; position: absolute; top: 4px; width: 41px; }`,
        `.framer-IyJgx .framer-159snh0, .framer-IyJgx .framer-1o6s5uv { height: 4px; left: 0px; position: absolute; top: 1px; width: 3px; }`,
        `.framer-IyJgx .framer-1gaag6b { height: 1px; left: 1px; position: absolute; top: 2px; width: 2px; }`,
        `.framer-IyJgx .framer-1x2po8c { height: 4px; left: 8px; position: absolute; top: 1px; width: 3px; }`,
        `.framer-IyJgx .framer-1g2fnlh { height: 1px; left: 8px; position: absolute; top: 2px; width: 2px; }`,
        `.framer-IyJgx .framer-1gchn90 { height: 5px; left: 11px; position: absolute; top: 0px; width: 3px; }`,
        `.framer-IyJgx .framer-120okpi { height: 3px; left: 11px; position: absolute; top: 2px; width: 2px; }`,
        `.framer-IyJgx .framer-1fyhz2z { height: 4px; left: 3px; position: absolute; top: 1px; width: 3px; }`,
        `.framer-IyJgx .framer-1kaldc { height: 1px; left: 4px; position: absolute; top: 3px; width: 2px; }`,
        `.framer-IyJgx .framer-1cogpzx { height: 4px; left: 23px; position: absolute; top: 1px; width: 3px; }`,
        `.framer-IyJgx .framer-lg2e4y { height: 1px; left: 23px; position: absolute; top: 3px; width: 2px; }`,
        `.framer-IyJgx .framer-8j2h3m { height: 4px; left: 38px; position: absolute; top: 1px; width: 3px; }`,
        `.framer-IyJgx .framer-12dpnq7 { height: 1px; left: 39px; position: absolute; top: 3px; width: 2px; }`,
        `.framer-IyJgx .framer-yk5xq5 { height: 5px; left: 15px; position: absolute; top: 0px; width: 3px; }`,
        `.framer-IyJgx .framer-1urr1ov { height: 3px; left: 16px; position: absolute; top: 2px; width: 2px; }`,
        `.framer-IyJgx .framer-16m7msy { height: 5px; left: 23px; position: absolute; top: 4px; width: 49px; }`,
        `.framer-IyJgx .framer-1f1ncf { height: 3px; left: 35px; position: absolute; top: 1px; width: 3px; }`,
        `.framer-IyJgx .framer-1dpdk0p { height: 4px; left: 11px; position: absolute; top: 0px; width: 2px; }`,
        `.framer-IyJgx .framer-r3hcse { height: 3px; left: 3px; position: absolute; top: 1px; width: 2px; }`,
        `.framer-IyJgx .framer-1v36ec6 { height: 4px; left: 32px; position: absolute; top: 0px; width: 3px; }`,
        `.framer-IyJgx .framer-18hwd00 { height: 3px; left: 38px; position: absolute; top: 1px; width: 4px; }`,
        `.framer-IyJgx .framer-8bv9kt { height: 3px; left: 46px; position: absolute; top: 1px; width: 3px; }`,
        `.framer-IyJgx .framer-miaxew { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-IyJgx .framer-11jqmqu, .framer-IyJgx .framer-1cyjeds { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-IyJgx .framer-155keu1, .framer-IyJgx .framer-17tn2c5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-IyJgx .framer-siqev0, .framer-IyJgx .framer-cuizzz, .framer-IyJgx .framer-11koifa, .framer-IyJgx .framer-127wyjb { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        ...xo,
        ...ko,
        ...To,
        `.framer-IyJgx[data-border="true"]::after, .framer-IyJgx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (Vo = {
        cuYBu6e1G: `(min-width: 1200px)`,
        e1EtI7_8U: `(min-width: 810px) and (max-width: 1199.98px)`,
        XrDA4C3Rc: `(max-width: 809.98px)`,
      }),
      (Ho = { Desktop: `cuYBu6e1G`, Phone: `XrDA4C3Rc`, Tablet: `e1EtI7_8U` }),
      (Uo = ({ value: e }) =>
        ce()
          ? null
          : p(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Wo = ({ enlaceArriba: e, enlaceContacto: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        gDUC70AIa: t ?? a.gDUC70AIa,
        variant: Ho[a.variant] ?? a.variant ?? `cuYBu6e1G`,
        ZCuoFUPLw: e ?? a.ZCuoFUPLw,
      })),
      (Go = l(function (e, t) {
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
          } = Wo(e),
          [te, ne] = ue(f, No, !1),
          ie = C(Po, So, Ao, Eo);
        return (
          le({}),
          p(Se.Provider, {
            value: {
              activeVariantId: te,
              humanReadableVariantMap: Ho,
              isLayoutTemplate: !0,
              primaryVariantId: `cuYBu6e1G`,
              variantClassNames: Fo,
            },
            children: h(re, {
              id: d ?? i,
              children: [
                p(Uo, { value: `:root body { background: none; }` }),
                h(Mo, {
                  ...v,
                  className: C(ie, `framer-v7zdi2`, u),
                  "data-layout-template": !0,
                  flowEffectEnabled: !0,
                  flowEffectTransition: Io,
                  isNestedFlowEffect: !1,
                  ref: r,
                  style: { ...l },
                  children: [
                    _,
                    p(`div`, { className: `framer-1v4s85v` }),
                    p(y.footer, {
                      className: `framer-1afg16h`,
                      "data-framer-name": `Footer`,
                      layout: `position`,
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
                                h(`div`, {
                                  className: `framer-1k0whf2`,
                                  "data-framer-name": `Emblemas`,
                                  children: [
                                    p(pe, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 195,
                                        intrinsicWidth: 195,
                                        loading: S(1062),
                                        pixelHeight: 195,
                                        pixelWidth: 195,
                                        sizes: `76px`,
                                        src: `../../assets/images/FExrMSgd32GNBeSSLwHQXdXRNAU.gif`,
                                      },
                                      className: `framer-1i4ze0p`,
                                      fitImageDimension: `width`,
                                    }),
                                    h(w, {
                                      className: `framer-2bexzc`,
                                      "data-framer-name": `Created by a human`,
                                      requiresOverflowVisible: !0,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 76 23.969" overflow="visible"><g><path d="M 67.523 0 C 72.205 0 76 3.795 76 8.477 L 76 23.969 L 8.477 23.969 C 3.795 23.969 0 20.174 0 15.492 L 0 0 Z" fill="var(--token-d292610c-87f6-4102-ac93-51fdf043bf78, rgb(240, 240, 240)) /* {&quot;name&quot;:&quot;Fondo&quot;} */" stroke="var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, rgb(217, 217, 217)) /* {&quot;name&quot;:&quot;Borde&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 15.989 13.83 C 13.963 15.471 11.065 15.471 9.038 13.83 L 9.822 12.863 C 11.391 14.135 13.636 14.135 15.206 12.863 Z M 9.882 10.019 L 9.882 11.7 L 11.128 11.7 L 11.128 10.018 L 9.882 10.018 Z M 13.745 10.019 L 13.745 11.7 L 14.991 11.7 L 14.991 10.018 L 13.745 10.018 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path><path d="M 5.554 12.277 C 5.554 8.564 8.564 5.554 12.277 5.554 C 15.99 5.554 19 8.564 19 12.277 C 19 15.99 15.99 19 12.277 19 C 8.564 19 5.554 15.99 5.554 12.277 Z M 12.277 17.755 C 15.302 17.755 17.755 15.302 17.755 12.277 C 17.755 9.252 15.302 6.799 12.277 6.799 C 9.252 6.799 6.799 9.252 6.799 12.277 C 6.799 15.302 9.252 17.755 12.277 17.755 Z M 58.701 18.503 L 58.215 16.957 L 55.437 16.957 L 54.915 18.503 L 53.267 18.503 L 55.959 10.98 L 57.739 10.98 L 60.411 18.503 Z M 55.861 15.661 L 57.775 15.661 L 56.833 12.7 Z M 46.452 15.65 C 46.452 16.514 46.248 17.23 45.839 17.799 C 45.429 18.367 44.858 18.651 44.124 18.651 C 43.664 18.651 43.294 18.559 43.014 18.376 C 42.846 18.266 42.666 18.076 42.472 17.804 L 42.472 18.503 L 41.044 18.503 L 41.044 10.991 L 42.497 10.991 L 42.497 13.665 C 42.681 13.406 42.884 13.209 43.106 13.073 C 43.369 12.902 43.703 12.818 44.109 12.818 C 44.842 12.818 45.415 13.081 45.828 13.609 C 46.244 14.136 46.452 14.816 46.452 15.65 Z M 44.922 15.803 C 44.922 15.408 44.872 15.082 44.769 14.824 C 44.575 14.334 44.216 14.089 43.694 14.089 C 43.166 14.089 42.802 14.328 42.604 14.808 C 42.502 15.063 42.451 15.394 42.451 15.798 C 42.451 16.275 42.556 16.669 42.768 16.982 C 42.98 17.295 43.302 17.452 43.736 17.452 C 44.11 17.452 44.402 17.301 44.61 16.998 C 44.818 16.695 44.922 16.297 44.922 15.803 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path><path d="M 36.373 18.222 C 36.209 18.056 36.127 17.799 36.127 17.452 L 36.127 14.027 L 35.35 14.027 L 35.35 12.991 L 36.127 12.991 L 36.127 11.44 L 37.57 11.44 L 37.57 12.991 L 38.476 12.991 L 38.476 14.027 L 37.57 14.027 L 37.57 16.967 C 37.57 17.195 37.6 17.338 37.657 17.396 C 37.715 17.45 37.893 17.478 38.189 17.478 L 38.328 17.478 L 38.476 17.467 L 38.476 18.555 L 37.785 18.58 C 37.096 18.603 36.626 18.484 36.373 18.222 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path><path d="M 32.443 18.697 C 31.484 18.697 30.769 18.408 30.299 17.83 C 29.828 17.248 29.593 16.549 29.593 15.731 C 29.593 14.929 29.828 14.233 30.299 13.644 C 30.769 13.056 31.484 12.762 32.443 12.762 C 33.401 12.762 34.116 13.056 34.586 13.645 C 35.058 14.233 35.293 14.929 35.293 15.732 C 35.293 16.548 35.058 17.248 34.586 17.83 C 34.116 18.408 33.401 18.697 32.443 18.697 Z M 33.763 15.732 C 33.763 15.174 33.648 14.745 33.42 14.446 C 33.192 14.143 32.864 13.992 32.438 13.992 C 32.011 13.992 31.682 14.143 31.45 14.446 C 31.221 14.745 31.107 15.174 31.107 15.732 C 31.107 16.29 31.221 16.72 31.45 17.023 C 31.682 17.326 32.011 17.477 32.438 17.477 C 32.864 17.477 33.192 17.326 33.42 17.023 C 33.649 16.72 33.763 16.29 33.763 15.732 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path><path d="M 28.451 13.261 C 28.086 12.959 27.615 12.807 27.038 12.807 C 26.578 12.807 26.198 12.92 25.897 13.144 C 25.731 13.27 25.553 13.476 25.365 13.762 L 25.365 12.95 L 23.958 12.95 L 23.958 18.503 L 25.411 18.503 L 25.411 15.492 C 25.411 15.149 25.459 14.866 25.555 14.645 C 25.739 14.226 26.079 14.017 26.573 14.017 C 26.975 14.017 27.248 14.16 27.392 14.446 C 27.47 14.602 27.51 14.827 27.51 15.119 L 27.51 18.503 L 29.004 18.503 L 29.004 14.757 C 29.004 14.059 28.819 13.561 28.451 13.261 Z M 47.307 19.57 L 47.492 19.58 C 47.635 19.587 47.771 19.582 47.901 19.565 C 48.031 19.547 48.14 19.509 48.228 19.447 C 48.314 19.389 48.392 19.268 48.464 19.085 C 48.539 18.901 48.569 18.789 48.556 18.748 L 46.51 12.94 L 48.131 12.94 L 49.349 17.044 L 50.501 12.94 L 52.051 12.94 L 50.137 18.411 C 49.769 19.466 49.477 20.119 49.262 20.371 C 49.047 20.626 48.617 20.754 47.972 20.754 C 47.843 20.754 47.739 20.752 47.661 20.749 C 47.582 20.749 47.464 20.743 47.308 20.733 L 47.308 19.57 Z M 61.754 17.225 L 61.754 12.26 L 60.825 12.26 L 60.825 10.98 L 64.14 10.98 L 64.14 12.26 L 63.32 12.26 L 63.32 17.225 L 64.14 17.225 L 64.14 18.505 L 60.825 18.505 L 60.825 17.225 Z M 47.72 7.848 L 48.55 5.343 L 49.122 5.343 C 49.049 5.54 48.888 5.991 48.636 6.693 C 48.449 7.222 48.292 7.653 48.165 7.986 C 47.867 8.772 47.655 9.25 47.533 9.423 C 47.411 9.595 47.2 9.682 46.901 9.682 C 46.845 9.683 46.788 9.68 46.732 9.673 C 46.683 9.665 46.635 9.655 46.587 9.641 L 46.587 9.17 C 46.678 9.195 46.743 9.211 46.783 9.216 C 46.824 9.222 46.859 9.225 46.89 9.225 C 46.986 9.225 47.055 9.208 47.099 9.176 C 47.145 9.145 47.184 9.106 47.215 9.061 C 47.296 8.879 47.373 8.695 47.447 8.51 L 46.309 5.343 L 46.895 5.343 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path><path d="M 29.491 5.274 C 29.71 5.274 29.921 5.325 30.126 5.429 C 30.33 5.53 30.488 5.663 30.595 5.826 C 30.698 5.981 30.767 6.162 30.802 6.369 C 30.832 6.51 30.848 6.737 30.848 7.047 L 28.592 7.047 C 28.602 7.359 28.675 7.61 28.813 7.8 C 28.951 7.987 29.165 8.081 29.454 8.081 C 29.724 8.081 29.939 7.992 30.1 7.814 C 30.192 7.711 30.259 7.588 30.295 7.455 L 30.804 7.455 C 30.791 7.568 30.746 7.695 30.67 7.834 C 30.604 7.96 30.518 8.074 30.416 8.173 C 30.255 8.329 30.052 8.436 29.833 8.483 C 29.708 8.514 29.568 8.53 29.411 8.53 C 29.042 8.535 28.687 8.384 28.437 8.113 C 28.17 7.833 28.037 7.442 28.037 6.941 C 28.037 6.447 28.171 6.045 28.44 5.736 C 28.708 5.428 29.058 5.274 29.491 5.274 Z M 29.46 5.725 C 29.222 5.725 29.023 5.811 28.862 5.984 C 28.701 6.154 28.616 6.372 28.606 6.636 L 30.316 6.636 C 30.295 6.411 30.246 6.233 30.17 6.098 C 30.028 5.85 29.791 5.725 29.46 5.725 Z M 37.151 5.274 C 37.369 5.274 37.581 5.325 37.786 5.429 C 37.991 5.53 38.147 5.663 38.254 5.826 C 38.358 5.981 38.427 6.162 38.461 6.369 C 38.492 6.51 38.507 6.737 38.507 7.047 L 36.252 7.047 C 36.261 7.359 36.336 7.61 36.474 7.8 C 36.612 7.987 36.824 8.081 37.114 8.081 C 37.384 8.081 37.6 7.992 37.761 7.814 C 37.853 7.711 37.918 7.591 37.956 7.455 L 38.465 7.455 C 38.451 7.568 38.406 7.695 38.33 7.834 C 38.255 7.972 38.17 8.085 38.077 8.173 C 37.915 8.329 37.713 8.436 37.494 8.483 C 37.355 8.515 37.213 8.531 37.071 8.53 C 36.702 8.535 36.347 8.384 36.096 8.113 C 35.83 7.833 35.698 7.442 35.697 6.941 C 35.697 6.447 35.832 6.045 36.099 5.736 C 36.368 5.428 36.719 5.274 37.152 5.274 Z M 37.119 5.725 C 36.882 5.725 36.682 5.812 36.522 5.984 C 36.361 6.154 36.275 6.372 36.265 6.636 L 37.975 6.636 C 37.954 6.411 37.905 6.233 37.829 6.098 C 37.687 5.85 37.45 5.725 37.119 5.725 Z M 41.477 4.185 L 41.477 8.42 L 41.011 8.42 L 41.011 7.992 C 40.891 8.182 40.748 8.319 40.583 8.403 C 40.407 8.49 40.213 8.533 40.017 8.53 C 39.674 8.53 39.377 8.386 39.127 8.098 C 38.875 7.809 38.75 7.425 38.75 6.946 C 38.75 6.498 38.864 6.11 39.092 5.782 C 39.322 5.453 39.65 5.288 40.074 5.288 C 40.31 5.288 40.508 5.338 40.666 5.438 C 40.759 5.495 40.863 5.595 40.98 5.739 L 40.98 4.185 Z M 40.172 5.74 C 39.912 5.74 39.7 5.839 39.538 6.038 C 39.377 6.237 39.296 6.53 39.296 6.917 C 39.296 7.246 39.366 7.523 39.505 7.745 C 39.646 7.967 39.87 8.078 40.178 8.078 C 40.417 8.078 40.614 7.976 40.767 7.771 C 40.922 7.564 41 7.268 41 6.883 C 41 6.494 40.921 6.207 40.762 6.021 C 40.603 5.833 40.406 5.739 40.172 5.739 Z M 32.516 5.267 C 32.878 5.267 33.172 5.338 33.398 5.475 C 33.622 5.613 33.734 5.827 33.734 6.118 L 33.734 7.892 C 33.734 7.946 33.745 7.989 33.766 8.021 C 33.789 8.054 33.836 8.071 33.907 8.071 C 33.93 8.071 33.956 8.069 33.984 8.068 C 34.015 8.063 34.046 8.058 34.076 8.053 L 34.076 8.435 C 34.016 8.454 33.955 8.468 33.892 8.478 C 33.835 8.485 33.778 8.488 33.72 8.487 C 33.542 8.487 33.412 8.424 33.332 8.297 C 33.283 8.209 33.252 8.113 33.242 8.013 C 33.137 8.151 32.986 8.27 32.789 8.372 C 32.591 8.473 32.374 8.524 32.136 8.524 C 31.851 8.524 31.617 8.438 31.435 8.266 C 31.257 8.096 31.159 7.859 31.165 7.613 C 31.165 7.328 31.254 7.107 31.432 6.95 C 31.61 6.793 31.844 6.696 32.133 6.659 L 32.958 6.556 C 33.077 6.541 33.157 6.491 33.197 6.407 C 33.223 6.344 33.235 6.276 33.231 6.208 C 33.231 6.032 33.168 5.905 33.042 5.826 C 32.917 5.746 32.738 5.705 32.504 5.705 C 32.235 5.705 32.042 5.778 31.929 5.924 C 31.866 6.004 31.825 6.124 31.807 6.283 L 31.323 6.283 C 31.333 5.903 31.455 5.64 31.691 5.493 C 31.928 5.343 32.204 5.269 32.516 5.269 Z M 33.217 6.855 C 33.141 6.9 33.058 6.934 32.972 6.955 C 32.876 6.981 32.779 7.001 32.68 7.013 L 32.366 7.052 C 32.179 7.077 32.038 7.117 31.944 7.17 C 31.785 7.26 31.705 7.404 31.705 7.601 C 31.699 7.738 31.76 7.87 31.869 7.954 C 31.978 8.041 32.108 8.084 32.257 8.084 C 32.439 8.084 32.615 8.042 32.786 7.957 C 33.073 7.817 33.217 7.589 33.217 7.27 Z M 52.062 5.267 C 52.424 5.267 52.718 5.338 52.944 5.475 C 53.168 5.613 53.281 5.827 53.281 6.118 L 53.281 7.892 C 53.281 7.946 53.291 7.989 53.312 8.021 C 53.335 8.054 53.382 8.071 53.453 8.071 C 53.476 8.071 53.502 8.069 53.53 8.068 C 53.561 8.063 53.592 8.058 53.623 8.053 L 53.623 8.435 C 53.562 8.454 53.501 8.468 53.439 8.478 C 53.381 8.485 53.324 8.488 53.266 8.487 C 53.088 8.487 52.959 8.424 52.878 8.297 C 52.829 8.209 52.799 8.113 52.789 8.013 C 52.684 8.151 52.532 8.27 52.335 8.372 C 52.138 8.473 51.92 8.524 51.683 8.524 C 51.398 8.524 51.163 8.438 50.981 8.266 C 50.803 8.096 50.705 7.859 50.711 7.613 C 50.711 7.328 50.801 7.107 50.978 6.95 C 51.157 6.793 51.391 6.696 51.68 6.659 L 52.504 6.556 C 52.624 6.541 52.703 6.491 52.743 6.407 C 52.769 6.344 52.781 6.276 52.777 6.208 C 52.777 6.032 52.714 5.905 52.588 5.826 C 52.463 5.746 52.284 5.705 52.051 5.705 C 51.781 5.705 51.589 5.778 51.476 5.924 C 51.413 6.004 51.372 6.124 51.353 6.283 L 50.87 6.283 C 50.879 5.903 51.002 5.64 51.237 5.493 C 51.475 5.343 51.75 5.269 52.062 5.269 Z M 52.763 6.855 C 52.687 6.9 52.605 6.934 52.519 6.955 C 52.423 6.981 52.325 7.001 52.226 7.013 L 51.913 7.052 C 51.725 7.077 51.584 7.117 51.49 7.17 C 51.331 7.26 51.252 7.404 51.252 7.601 C 51.252 7.75 51.306 7.868 51.416 7.954 C 51.524 8.041 51.654 8.084 51.803 8.084 C 51.986 8.084 52.162 8.042 52.332 7.957 C 52.619 7.817 52.763 7.589 52.763 7.27 Z M 67.546 5.267 C 67.908 5.267 68.202 5.338 68.429 5.475 C 68.653 5.613 68.765 5.827 68.765 6.118 L 68.765 7.892 C 68.763 7.937 68.774 7.982 68.796 8.021 C 68.819 8.054 68.867 8.071 68.937 8.071 C 68.96 8.071 68.986 8.069 69.015 8.068 C 69.044 8.064 69.074 8.058 69.107 8.053 L 69.107 8.435 C 69.047 8.454 68.985 8.468 68.923 8.478 C 68.881 8.484 68.823 8.487 68.751 8.487 C 68.572 8.487 68.443 8.424 68.363 8.297 C 68.314 8.209 68.283 8.113 68.273 8.013 C 68.168 8.151 68.016 8.27 67.819 8.372 C 67.618 8.474 67.394 8.527 67.168 8.524 C 66.882 8.524 66.648 8.438 66.466 8.266 C 66.288 8.096 66.189 7.859 66.195 7.613 C 66.196 7.328 66.285 7.107 66.464 6.95 C 66.641 6.793 66.875 6.696 67.165 6.659 L 67.989 6.556 C 68.108 6.541 68.187 6.491 68.228 6.407 C 68.254 6.344 68.265 6.276 68.262 6.208 C 68.262 6.032 68.199 5.905 68.072 5.826 C 67.948 5.746 67.769 5.705 67.535 5.705 C 67.265 5.705 67.073 5.778 66.96 5.924 C 66.897 6.004 66.856 6.124 66.837 6.283 L 66.354 6.283 C 66.363 5.903 66.487 5.64 66.722 5.493 C 66.96 5.343 67.234 5.269 67.546 5.269 Z M 68.247 6.855 C 68.171 6.9 68.089 6.934 68.003 6.955 C 67.907 6.981 67.809 7.001 67.71 7.013 L 67.397 7.052 C 67.209 7.077 67.068 7.117 66.975 7.17 C 66.816 7.26 66.736 7.404 66.736 7.601 C 66.736 7.75 66.791 7.868 66.9 7.954 C 67.009 8.041 67.138 8.084 67.288 8.084 C 67.47 8.084 67.646 8.042 67.817 7.957 C 68.104 7.817 68.247 7.589 68.247 7.27 Z M 43.992 5.716 C 44.208 5.428 44.548 5.259 44.908 5.262 C 45.291 5.262 45.602 5.394 45.839 5.659 C 46.079 5.922 46.198 6.309 46.198 6.822 C 46.198 7.309 46.081 7.713 45.845 8.035 C 45.609 8.357 45.283 8.518 44.865 8.518 C 44.631 8.518 44.434 8.462 44.274 8.348 C 44.178 8.282 44.075 8.174 43.965 8.027 L 43.965 8.42 L 43.489 8.42 L 43.489 4.185 L 43.992 4.185 Z M 44.848 5.725 C 44.613 5.725 44.405 5.813 44.227 5.986 C 44.051 6.161 43.962 6.448 43.962 6.849 C 43.962 7.138 43.999 7.373 44.072 7.553 C 44.208 7.892 44.462 8.061 44.834 8.061 C 45.113 8.061 45.322 7.95 45.46 7.728 C 45.6 7.506 45.67 7.212 45.67 6.849 C 45.67 6.525 45.599 6.257 45.46 6.044 C 45.322 5.831 45.118 5.725 44.848 5.725 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path><path d="M 24.847 5.253 C 25.194 5.253 25.476 5.338 25.692 5.507 C 25.911 5.675 26.042 5.965 26.086 6.378 L 25.583 6.378 C 25.559 6.204 25.486 6.04 25.373 5.906 C 25.264 5.78 25.089 5.716 24.847 5.716 C 24.518 5.716 24.282 5.877 24.141 6.199 C 24.049 6.408 24.003 6.666 24.003 6.972 C 24.003 7.28 24.068 7.54 24.198 7.751 C 24.328 7.961 24.533 8.067 24.813 8.067 C 25.027 8.067 25.198 8.002 25.321 7.871 C 25.448 7.739 25.535 7.559 25.583 7.331 L 26.086 7.331 C 26.028 7.739 25.884 8.038 25.655 8.228 C 25.425 8.416 25.13 8.51 24.772 8.51 C 24.37 8.51 24.049 8.363 23.81 8.07 C 23.57 7.775 23.451 7.407 23.451 6.966 C 23.451 6.426 23.582 6.005 23.845 5.705 C 24.107 5.404 24.441 5.253 24.847 5.253 Z M 59.032 5.343 L 59.032 7.386 C 59.032 7.543 59.057 7.671 59.107 7.771 C 59.199 7.955 59.37 8.047 59.621 8.047 C 59.981 8.047 60.226 7.886 60.357 7.564 C 60.428 7.392 60.463 7.155 60.463 6.855 L 60.463 5.343 L 60.981 5.343 L 60.981 8.42 L 60.492 8.42 L 60.497 7.966 C 60.431 8.083 60.347 8.182 60.248 8.262 C 60.05 8.423 59.811 8.504 59.529 8.504 C 59.091 8.504 58.792 8.357 58.633 8.064 C 58.547 7.907 58.503 7.697 58.503 7.435 L 58.503 5.343 Z M 35.034 4.483 L 35.034 5.343 L 35.525 5.343 L 35.525 5.765 L 35.034 5.765 L 35.034 7.774 C 35.034 7.881 35.071 7.953 35.144 7.989 C 35.184 8.01 35.251 8.021 35.345 8.021 L 35.425 8.021 C 35.454 8.019 35.487 8.016 35.526 8.012 L 35.526 8.42 C 35.466 8.438 35.404 8.449 35.339 8.458 C 35.276 8.465 35.207 8.469 35.132 8.469 C 34.891 8.469 34.727 8.408 34.641 8.285 C 34.554 8.161 34.511 8 34.511 7.803 L 34.511 5.764 L 34.095 5.764 L 34.095 5.343 L 34.511 5.343 L 34.511 4.484 L 35.034 4.484 Z M 27.82 5.277 L 27.938 5.288 L 27.938 5.834 C 27.882 5.823 27.825 5.818 27.768 5.82 C 27.508 5.82 27.308 5.905 27.168 6.073 C 27.028 6.24 26.958 6.432 26.958 6.65 L 26.958 8.42 L 26.44 8.42 L 26.44 5.343 L 26.932 5.343 L 26.932 5.875 C 26.973 5.771 27.071 5.646 27.228 5.498 C 27.384 5.343 27.6 5.262 27.82 5.277 Z M 55.933 5.76 C 56.056 5.604 56.166 5.495 56.263 5.432 C 56.43 5.322 56.638 5.268 56.887 5.268 C 57.333 5.268 57.635 5.424 57.794 5.737 C 57.881 5.907 57.924 6.144 57.924 6.446 L 57.924 8.42 L 57.392 8.42 L 57.392 6.48 C 57.392 6.255 57.364 6.089 57.306 5.984 C 57.213 5.815 57.036 5.731 56.778 5.731 C 56.563 5.731 56.369 5.804 56.194 5.952 C 56.02 6.099 55.933 6.379 55.933 6.788 L 55.933 8.42 L 55.416 8.42 L 55.416 4.185 L 55.933 4.185 Z M 64.789 5.274 C 65.203 5.274 65.485 5.423 65.634 5.722 C 65.714 5.883 65.755 6.099 65.755 6.371 L 65.755 8.42 L 65.217 8.42 L 65.217 6.282 C 65.217 6.078 65.166 5.937 65.062 5.86 C 64.954 5.781 64.822 5.741 64.688 5.745 C 64.493 5.742 64.305 5.815 64.163 5.949 C 64.017 6.085 63.945 6.312 63.945 6.63 L 63.945 8.42 L 63.418 8.42 L 63.418 6.412 C 63.418 6.203 63.394 6.05 63.344 5.954 C 63.265 5.811 63.119 5.739 62.905 5.739 C 62.709 5.739 62.531 5.815 62.37 5.966 C 62.211 6.117 62.131 6.392 62.131 6.788 L 62.131 8.42 L 61.614 8.42 L 61.614 5.343 L 62.126 5.343 L 62.126 5.78 C 62.248 5.629 62.36 5.519 62.459 5.45 C 62.629 5.333 62.823 5.274 63.039 5.274 C 63.284 5.274 63.482 5.335 63.631 5.456 C 63.715 5.525 63.792 5.626 63.861 5.76 C 63.976 5.595 64.111 5.473 64.266 5.395 C 64.428 5.313 64.608 5.272 64.789 5.274 Z M 70.936 5.274 C 71.373 5.274 71.667 5.426 71.821 5.731 C 71.905 5.898 71.947 6.136 71.947 6.446 L 71.947 8.42 L 71.421 8.42 L 71.421 6.48 C 71.421 6.293 71.393 6.141 71.338 6.027 C 71.246 5.835 71.079 5.74 70.838 5.739 C 70.716 5.739 70.615 5.751 70.536 5.777 C 70.39 5.822 70.26 5.91 70.163 6.029 C 70.082 6.12 70.024 6.228 69.994 6.345 C 69.965 6.498 69.952 6.653 69.956 6.808 L 69.956 8.42 L 69.439 8.42 L 69.439 5.343 L 69.93 5.343 L 69.93 5.78 C 70.076 5.6 70.23 5.471 70.393 5.393 C 70.556 5.314 70.737 5.274 70.936 5.274 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></g></svg>`,
                                      withExternalLayout: !0,
                                      children: [
                                        p(w, {
                                          className: `framer-g530o0`,
                                          requiresOverflowVisible: !0,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 76 23.969" overflow="visible"><path d="M 67.523 0 C 72.205 0 76 3.795 76 8.477 L 76 23.969 L 8.477 23.969 C 3.795 23.969 0 20.174 0 15.492 L 0 0 Z" fill="var(--token-d292610c-87f6-4102-ac93-51fdf043bf78, rgb(240, 240, 240)) /* {&quot;name&quot;:&quot;Fondo&quot;} */" stroke="var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, rgb(217, 217, 217)) /* {&quot;name&quot;:&quot;Borde&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        h(w, {
                                          className: `framer-h2ceze`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.951 5.043" overflow="visible"><path d="M 6.951 3.812 C 4.925 5.453 2.026 5.453 0 3.812 L 0.783 2.845 C 2.353 4.117 4.598 4.117 6.168 2.845 Z M 0.844 0.001 L 0.844 1.682 L 2.089 1.682 L 2.089 0 L 0.844 0 Z M 4.707 0.001 L 4.707 1.682 L 5.953 1.682 L 5.953 0 L 4.707 0 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            p(w, {
                                              className: `framer-c13g66`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.951 2.198" overflow="visible"><path d="M 6.951 0.967 C 4.925 2.608 2.026 2.608 0 0.967 L 0.783 0 C 2.353 1.271 4.598 1.271 6.168 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-15bjrnw`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.245 1.682" overflow="visible"><path d="M 0 0.001 L 0 1.682 L 1.245 1.682 L 1.245 0 L 0 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-1rapzon`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.245 1.682" overflow="visible"><path d="M 0 0.001 L 0 1.682 L 1.245 1.682 L 1.245 0 L 0 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        h(w, {
                                          className: `framer-1cagyxz`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54.857 13.446" overflow="visible"><path d="M 0 6.723 C 0 3.01 3.01 0 6.723 0 C 10.436 0 13.446 3.01 13.446 6.723 C 13.446 10.436 10.436 13.446 6.723 13.446 C 3.01 13.446 0 10.436 0 6.723 Z M 6.723 12.201 C 9.748 12.201 12.201 9.748 12.201 6.723 C 12.201 3.698 9.748 1.245 6.723 1.245 C 3.698 1.245 1.245 3.698 1.245 6.723 C 1.245 9.748 3.698 12.201 6.723 12.201 Z M 53.147 12.949 L 52.662 11.403 L 49.883 11.403 L 49.361 12.949 L 47.713 12.949 L 50.406 5.426 L 52.185 5.426 L 54.857 12.949 Z M 50.307 10.107 L 52.221 10.107 L 51.28 7.146 Z M 40.899 10.096 C 40.899 10.96 40.694 11.677 40.285 12.245 C 39.875 12.813 39.304 13.097 38.571 13.097 C 38.11 13.097 37.74 13.005 37.46 12.822 C 37.293 12.712 37.112 12.522 36.918 12.25 L 36.918 12.949 L 35.49 12.949 L 35.49 5.437 L 36.943 5.437 L 36.943 8.111 C 37.127 7.852 37.33 7.655 37.552 7.519 C 37.815 7.349 38.149 7.264 38.555 7.264 C 39.288 7.264 39.861 7.528 40.274 8.055 C 40.69 8.582 40.899 9.263 40.899 10.096 Z M 39.369 10.249 C 39.369 9.854 39.318 9.528 39.215 9.27 C 39.021 8.78 38.662 8.535 38.14 8.535 C 37.612 8.535 37.248 8.774 37.051 9.254 C 36.948 9.509 36.897 9.84 36.897 10.244 C 36.897 10.721 37.003 11.115 37.214 11.429 C 37.426 11.741 37.748 11.898 38.182 11.898 C 38.557 11.898 38.848 11.747 39.056 11.444 C 39.265 11.141 39.369 10.743 39.369 10.249 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            p(w, {
                                              className: `framer-7lh6eq`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.446 13.446" overflow="visible"><path d="M 6.723 13.446 C 10.436 13.446 13.446 10.436 13.446 6.723 C 13.446 3.01 10.436 0 6.723 0 C 3.01 0 0 3.01 0 6.723 C 0 10.436 3.01 13.446 6.723 13.446 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-1srcgat`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.956 10.956" overflow="visible"><path d="M 5.478 10.956 C 8.503 10.956 10.956 8.503 10.956 5.478 C 10.956 2.453 8.503 0 5.478 0 C 2.453 0 0 2.453 0 5.478 C 0 8.503 2.453 10.956 5.478 10.956 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-qonfto`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.143 7.523" overflow="visible"><path d="M 7.143 7.523 L 4.472 0 L 2.692 0 L 0 7.523 L 1.647 7.523 L 2.17 5.977 L 4.948 5.977 L 5.434 7.523 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-1el2v20`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.913 2.96" overflow="visible"><path d="M 0.972 0 L 1.913 2.96 L 0 2.96 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-9wsak4`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.408 7.66" overflow="visible"><path d="M 4.784 2.618 C 4.371 2.091 3.798 1.827 3.065 1.827 C 2.659 1.827 2.324 1.912 2.062 2.082 C 1.84 2.218 1.637 2.415 1.453 2.674 L 1.453 0 L 0 0 L 0 7.512 L 1.428 7.512 L 1.428 6.813 C 1.622 7.086 1.802 7.276 1.97 7.385 C 2.25 7.568 2.62 7.66 3.08 7.66 C 3.813 7.66 4.385 7.376 4.794 6.808 C 5.204 6.24 5.408 5.523 5.408 4.659 C 5.408 3.826 5.2 3.145 4.784 2.618 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-148iv3l`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.472 3.363" overflow="visible"><path d="M 2.16 2.909 C 1.951 3.212 1.66 3.363 1.285 3.363 C 0.851 3.363 0.529 3.207 0.317 2.894 C 0.106 2.58 0 2.186 0 1.709 C 0 1.305 0.051 0.975 0.154 0.72 C 0.351 0.24 0.715 0 1.243 0 C 1.766 0 2.124 0.245 2.319 0.735 C 2.421 0.993 2.472 1.319 2.472 1.715 C 2.472 2.208 2.368 2.606 2.16 2.909 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        p(w, {
                                          className: `framer-kwlnwp`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.127 7.143" overflow="visible"><path d="M 1.023 6.783 C 0.859 6.616 0.778 6.359 0.778 6.012 L 0.778 2.588 L 0 2.588 L 0 1.552 L 0.778 1.552 L 0.778 0 L 2.22 0 L 2.22 1.552 L 3.127 1.552 L 3.127 2.588 L 2.22 2.588 L 2.22 5.527 C 2.22 5.755 2.25 5.898 2.307 5.956 C 2.365 6.01 2.543 6.038 2.839 6.038 L 2.978 6.038 L 3.126 6.027 L 3.126 7.115 L 2.436 7.14 C 1.746 7.163 1.276 7.045 1.023 6.783 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        h(w, {
                                          className: `framer-325272`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.7 5.936" overflow="visible"><path d="M 2.85 5.936 C 1.891 5.936 1.177 5.647 0.706 5.068 C 0.235 4.486 0 3.787 0 2.97 C 0 2.167 0.235 1.471 0.706 0.883 C 1.177 0.294 1.891 0 2.85 0 C 3.809 0 4.523 0.294 4.994 0.883 C 5.465 1.471 5.7 2.167 5.7 2.97 C 5.7 3.787 5.465 4.486 4.994 5.068 C 4.523 5.646 3.809 5.936 2.85 5.936 Z M 4.17 2.97 C 4.17 2.412 4.055 1.984 3.827 1.684 C 3.599 1.381 3.272 1.23 2.845 1.23 C 2.419 1.23 2.089 1.381 1.857 1.684 C 1.629 1.984 1.515 2.412 1.515 2.97 C 1.515 3.528 1.629 3.958 1.857 4.261 C 2.089 4.564 2.419 4.716 2.845 4.716 C 3.272 4.716 3.599 4.564 3.827 4.261 C 4.056 3.958 4.17 3.528 4.17 2.97 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            p(w, {
                                              className: `framer-7m82v6`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.7 5.936" overflow="visible"><path d="M 4.994 5.068 C 5.465 4.486 5.7 3.787 5.7 2.97 C 5.7 2.167 5.465 1.471 4.994 0.883 C 4.523 0.294 3.809 0 2.85 0 C 1.891 0 1.177 0.294 0.706 0.883 C 0.235 1.471 0 2.167 0 2.97 C 0 3.787 0.235 4.486 0.706 5.068 C 1.177 5.647 1.891 5.936 2.85 5.936 C 3.809 5.936 4.523 5.646 4.994 5.068 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-1pply7a`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.655 3.485" overflow="visible"><path d="M 2.313 3.031 C 2.084 3.334 1.757 3.485 1.331 3.485 C 0.904 3.485 0.575 3.334 0.343 3.031 C 0.114 2.728 0 2.298 0 1.74 C 0 1.182 0.114 0.754 0.343 0.454 C 0.575 0.151 0.904 0 1.331 0 C 1.757 0 2.084 0.151 2.313 0.454 C 2.541 0.754 2.655 1.182 2.655 1.74 C 2.655 2.298 2.541 2.728 2.313 3.031 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        h(w, {
                                          className: `framer-garpjv`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40.182 15.411" overflow="visible"><path d="M 4.493 7.919 C 4.128 7.616 3.657 7.464 3.08 7.464 C 2.62 7.464 2.24 7.577 1.939 7.802 C 1.773 7.927 1.595 8.133 1.407 8.419 L 1.407 7.608 L 0 7.608 L 0 13.16 L 1.453 13.16 L 1.453 10.15 C 1.453 9.806 1.501 9.523 1.597 9.302 C 1.781 8.883 2.12 8.675 2.615 8.675 C 3.017 8.675 3.29 8.817 3.433 9.103 C 3.512 9.259 3.552 9.484 3.552 9.777 L 3.552 13.16 L 5.046 13.16 L 5.046 9.414 C 5.046 8.717 4.861 8.219 4.493 7.919 Z M 23.349 14.227 L 23.534 14.237 C 23.677 14.244 23.813 14.239 23.943 14.222 C 24.073 14.204 24.181 14.166 24.27 14.104 C 24.356 14.047 24.434 13.926 24.506 13.742 C 24.581 13.558 24.611 13.446 24.598 13.405 L 22.552 7.597 L 24.173 7.597 L 25.391 11.701 L 26.543 7.597 L 28.093 7.597 L 26.179 13.068 C 25.811 14.123 25.518 14.776 25.304 15.028 C 25.089 15.284 24.659 15.411 24.014 15.411 C 23.885 15.411 23.78 15.409 23.703 15.406 C 23.624 15.406 23.506 15.401 23.35 15.391 L 23.35 14.227 Z M 37.796 11.882 L 37.796 6.917 L 36.867 6.917 L 36.867 5.637 L 40.182 5.637 L 40.182 6.917 L 39.362 6.917 L 39.362 11.882 L 40.182 11.882 L 40.182 13.162 L 36.867 13.162 L 36.867 11.882 Z M 23.762 2.506 L 24.592 0 L 25.164 0 C 25.091 0.197 24.93 0.648 24.678 1.35 C 24.491 1.88 24.333 2.31 24.207 2.644 C 23.908 3.429 23.697 3.908 23.575 4.08 C 23.452 4.252 23.242 4.339 22.943 4.339 C 22.887 4.34 22.83 4.337 22.774 4.33 C 22.725 4.322 22.677 4.312 22.629 4.299 L 22.629 3.827 C 22.72 3.852 22.785 3.868 22.825 3.874 C 22.866 3.88 22.901 3.882 22.932 3.882 C 23.027 3.882 23.097 3.865 23.141 3.833 C 23.187 3.803 23.226 3.764 23.257 3.718 C 23.338 3.536 23.415 3.352 23.489 3.167 L 22.351 0 L 22.937 0 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            p(w, {
                                              className: `framer-1vx7oce`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.046 5.696" overflow="visible"><path d="M 4.493 0.454 C 4.128 0.151 3.657 0 3.08 0 C 2.62 0 2.24 0.113 1.939 0.337 C 1.773 0.463 1.595 0.669 1.407 0.955 L 1.407 0.143 L 0 0.143 L 0 5.696 L 1.453 5.696 L 1.453 2.685 C 1.453 2.341 1.501 2.059 1.597 1.837 C 1.781 1.419 2.12 1.21 2.615 1.21 C 3.017 1.21 3.29 1.353 3.433 1.639 C 3.512 1.795 3.552 2.02 3.552 2.312 L 3.552 5.696 L 5.046 5.696 L 5.046 1.95 C 5.046 1.252 4.861 0.754 4.493 0.454 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-1t5w1i`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.541 7.814" overflow="visible"><path d="M 0.797 6.63 L 0.982 6.64 C 1.125 6.647 1.262 6.642 1.391 6.625 C 1.521 6.607 1.63 6.569 1.719 6.507 C 1.804 6.449 1.882 6.328 1.954 6.145 C 2.029 5.961 2.06 5.849 2.046 5.808 L 0 0 L 1.622 0 L 2.839 4.104 L 3.991 0 L 5.541 0 L 3.628 5.471 C 3.259 6.526 2.967 7.179 2.752 7.431 C 2.538 7.687 2.108 7.814 1.463 7.814 C 1.334 7.814 1.229 7.812 1.151 7.809 C 1.072 7.809 0.955 7.803 0.798 7.794 L 0.798 6.63 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-1tcfxez`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.315 7.525" overflow="visible"><path d="M 0.929 6.245 L 0.929 1.28 L 0 1.28 L 0 0 L 3.315 0 L 3.315 1.28 L 2.495 1.28 L 2.495 6.245 L 3.315 6.245 L 3.315 7.525 L 0 7.525 L 0 6.245 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-x80sek`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.813 4.339" overflow="visible"><path d="M 1.411 2.506 L 2.241 0 L 2.813 0 C 2.74 0.197 2.579 0.648 2.327 1.35 C 2.14 1.88 1.982 2.31 1.856 2.644 C 1.557 3.429 1.346 3.908 1.224 4.08 C 1.101 4.252 0.891 4.339 0.592 4.339 C 0.536 4.34 0.479 4.337 0.423 4.33 C 0.374 4.322 0.326 4.312 0.278 4.299 L 0.278 3.827 C 0.369 3.852 0.434 3.868 0.474 3.874 C 0.515 3.88 0.55 3.882 0.581 3.882 C 0.676 3.882 0.746 3.865 0.79 3.833 C 0.836 3.803 0.875 3.764 0.906 3.718 C 0.987 3.536 1.064 3.352 1.138 3.167 L 0 0 L 0.586 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        h(w, {
                                          className: `framer-5iox0r`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.07 4.345" overflow="visible"><path d="M 1.454 1.089 C 1.673 1.089 1.884 1.141 2.089 1.244 C 2.293 1.346 2.451 1.478 2.558 1.641 C 2.661 1.796 2.73 1.977 2.765 2.184 C 2.795 2.326 2.811 2.552 2.811 2.862 L 0.555 2.862 C 0.565 3.174 0.638 3.425 0.776 3.615 C 0.914 3.802 1.128 3.896 1.417 3.896 C 1.687 3.896 1.902 3.808 2.063 3.629 C 2.155 3.526 2.222 3.403 2.258 3.27 L 2.767 3.27 C 2.754 3.383 2.709 3.51 2.633 3.649 C 2.567 3.775 2.481 3.889 2.379 3.988 C 2.218 4.144 2.015 4.251 1.796 4.298 C 1.671 4.329 1.531 4.345 1.374 4.345 C 1.005 4.351 0.65 4.199 0.4 3.928 C 0.133 3.649 0 3.257 0 2.756 C 0 2.262 0.134 1.86 0.403 1.552 C 0.671 1.243 1.021 1.09 1.454 1.09 Z M 1.423 1.54 C 1.185 1.54 0.986 1.626 0.825 1.799 C 0.664 1.97 0.579 2.187 0.569 2.451 L 2.279 2.451 C 2.258 2.227 2.209 2.048 2.133 1.913 C 1.991 1.665 1.754 1.54 1.423 1.54 Z M 9.114 1.089 C 9.332 1.089 9.544 1.141 9.749 1.244 C 9.954 1.346 10.11 1.478 10.217 1.641 C 10.321 1.796 10.39 1.977 10.424 2.184 C 10.455 2.326 10.47 2.552 10.47 2.862 L 8.215 2.862 C 8.224 3.174 8.299 3.425 8.437 3.615 C 8.575 3.802 8.787 3.896 9.077 3.896 C 9.347 3.896 9.563 3.808 9.724 3.629 C 9.816 3.526 9.881 3.406 9.919 3.27 L 10.428 3.27 C 10.414 3.383 10.369 3.51 10.293 3.649 C 10.218 3.787 10.133 3.901 10.04 3.988 C 9.878 4.144 9.676 4.251 9.457 4.298 C 9.318 4.331 9.176 4.346 9.034 4.345 C 8.665 4.351 8.31 4.199 8.06 3.928 C 7.794 3.649 7.661 3.257 7.66 2.756 C 7.66 2.262 7.795 1.86 8.062 1.552 C 8.331 1.243 8.682 1.09 9.115 1.09 Z M 9.082 1.54 C 8.845 1.54 8.645 1.627 8.485 1.799 C 8.324 1.97 8.238 2.187 8.228 2.451 L 9.938 2.451 C 9.917 2.227 9.868 2.048 9.792 1.913 C 9.65 1.665 9.413 1.54 9.082 1.54 Z M 13.44 0 L 13.44 4.236 L 12.974 4.236 L 12.974 3.808 C 12.854 3.997 12.711 4.134 12.546 4.219 C 12.37 4.305 12.176 4.349 11.98 4.345 C 11.637 4.345 11.34 4.201 11.09 3.913 C 10.838 3.625 10.713 3.241 10.713 2.762 C 10.713 2.313 10.827 1.925 11.055 1.598 C 11.285 1.268 11.613 1.104 12.037 1.104 C 12.273 1.104 12.471 1.153 12.629 1.253 C 12.722 1.31 12.826 1.411 12.943 1.554 L 12.943 0 Z M 12.135 1.555 C 11.875 1.555 11.663 1.654 11.501 1.853 C 11.34 2.052 11.259 2.345 11.259 2.732 C 11.259 3.062 11.329 3.338 11.468 3.56 C 11.609 3.782 11.833 3.894 12.141 3.894 C 12.38 3.894 12.577 3.791 12.73 3.586 C 12.886 3.379 12.963 3.083 12.963 2.698 C 12.963 2.309 12.884 2.022 12.725 1.836 C 12.566 1.649 12.369 1.554 12.135 1.554 Z M 4.479 1.083 C 4.841 1.083 5.135 1.153 5.361 1.29 C 5.585 1.428 5.697 1.643 5.697 1.933 L 5.697 3.708 C 5.697 3.761 5.708 3.804 5.729 3.836 C 5.752 3.869 5.799 3.886 5.87 3.886 C 5.893 3.886 5.919 3.885 5.947 3.883 C 5.978 3.879 6.009 3.874 6.039 3.868 L 6.039 4.251 C 5.979 4.269 5.918 4.283 5.856 4.293 C 5.798 4.3 5.741 4.303 5.683 4.302 C 5.505 4.302 5.375 4.239 5.295 4.112 C 5.246 4.025 5.215 3.928 5.205 3.828 C 5.1 3.966 4.949 4.085 4.752 4.187 C 4.554 4.289 4.337 4.34 4.099 4.34 C 3.814 4.34 3.58 4.253 3.398 4.081 C 3.22 3.911 3.122 3.674 3.128 3.428 C 3.128 3.143 3.217 2.922 3.395 2.765 C 3.573 2.608 3.807 2.511 4.096 2.475 L 4.921 2.371 C 5.04 2.356 5.12 2.306 5.16 2.222 C 5.186 2.159 5.198 2.091 5.194 2.023 C 5.194 1.847 5.131 1.72 5.005 1.642 C 4.88 1.561 4.701 1.521 4.467 1.521 C 4.198 1.521 4.005 1.594 3.892 1.739 C 3.829 1.819 3.788 1.939 3.77 2.098 L 3.286 2.098 C 3.296 1.719 3.418 1.455 3.654 1.308 C 3.891 1.159 4.167 1.084 4.479 1.084 Z M 5.18 2.67 C 5.104 2.715 5.021 2.749 4.935 2.77 C 4.839 2.796 4.742 2.816 4.643 2.828 L 4.329 2.868 C 4.142 2.893 4.001 2.932 3.907 2.986 C 3.748 3.076 3.668 3.219 3.668 3.416 C 3.662 3.554 3.723 3.685 3.832 3.77 C 3.941 3.856 4.071 3.899 4.22 3.899 C 4.402 3.899 4.578 3.857 4.749 3.773 C 5.036 3.633 5.18 3.404 5.18 3.086 Z M 24.025 1.083 C 24.387 1.083 24.681 1.153 24.907 1.29 C 25.131 1.428 25.244 1.643 25.244 1.933 L 25.244 3.708 C 25.244 3.761 25.254 3.804 25.275 3.836 C 25.298 3.869 25.345 3.886 25.416 3.886 C 25.439 3.886 25.465 3.885 25.493 3.883 C 25.524 3.879 25.555 3.873 25.586 3.868 L 25.586 4.251 C 25.525 4.269 25.464 4.283 25.402 4.293 C 25.344 4.3 25.287 4.303 25.229 4.302 C 25.051 4.302 24.922 4.239 24.841 4.112 C 24.792 4.025 24.762 3.928 24.752 3.828 C 24.647 3.966 24.495 4.085 24.298 4.187 C 24.101 4.289 23.883 4.34 23.646 4.34 C 23.361 4.34 23.126 4.254 22.944 4.081 C 22.766 3.911 22.668 3.674 22.674 3.428 C 22.674 3.143 22.764 2.922 22.941 2.765 C 23.12 2.608 23.354 2.511 23.643 2.475 L 24.467 2.371 C 24.587 2.356 24.666 2.306 24.706 2.222 C 24.732 2.159 24.744 2.091 24.74 2.023 C 24.74 1.847 24.677 1.72 24.551 1.642 C 24.426 1.561 24.247 1.521 24.014 1.521 C 23.744 1.521 23.552 1.594 23.439 1.739 C 23.376 1.819 23.335 1.939 23.316 2.098 L 22.833 2.098 C 22.842 1.719 22.965 1.455 23.2 1.308 C 23.438 1.159 23.713 1.084 24.025 1.084 Z M 24.726 2.67 C 24.65 2.715 24.568 2.749 24.482 2.77 C 24.386 2.796 24.288 2.816 24.189 2.828 L 23.876 2.868 C 23.688 2.893 23.547 2.932 23.453 2.986 C 23.294 3.076 23.215 3.219 23.215 3.416 C 23.215 3.566 23.269 3.684 23.379 3.77 C 23.488 3.856 23.617 3.899 23.766 3.899 C 23.949 3.899 24.125 3.857 24.295 3.773 C 24.582 3.633 24.726 3.404 24.726 3.086 Z M 39.509 1.083 C 39.871 1.083 40.165 1.153 40.392 1.29 C 40.616 1.428 40.728 1.643 40.728 1.933 L 40.728 3.708 C 40.726 3.753 40.737 3.797 40.759 3.836 C 40.782 3.869 40.83 3.886 40.9 3.886 C 40.923 3.886 40.949 3.885 40.978 3.883 C 41.007 3.879 41.037 3.874 41.07 3.868 L 41.07 4.251 C 41.01 4.269 40.948 4.283 40.886 4.293 C 40.844 4.299 40.786 4.302 40.714 4.302 C 40.535 4.302 40.406 4.239 40.326 4.112 C 40.277 4.025 40.246 3.928 40.236 3.828 C 40.131 3.966 39.98 4.085 39.782 4.187 C 39.581 4.29 39.357 4.342 39.131 4.34 C 38.845 4.34 38.612 4.253 38.429 4.081 C 38.251 3.912 38.152 3.674 38.158 3.428 C 38.159 3.143 38.248 2.922 38.427 2.765 C 38.604 2.608 38.838 2.511 39.128 2.475 L 39.952 2.371 C 40.071 2.356 40.15 2.306 40.191 2.222 C 40.217 2.159 40.228 2.091 40.225 2.023 C 40.225 1.847 40.162 1.72 40.035 1.642 C 39.911 1.561 39.732 1.521 39.498 1.521 C 39.228 1.521 39.036 1.594 38.923 1.739 C 38.86 1.819 38.819 1.939 38.8 2.098 L 38.317 2.098 C 38.326 1.719 38.45 1.455 38.685 1.308 C 38.923 1.159 39.197 1.084 39.509 1.084 Z M 40.21 2.67 C 40.134 2.715 40.052 2.749 39.966 2.77 C 39.87 2.796 39.772 2.816 39.673 2.828 L 39.36 2.868 C 39.172 2.893 39.031 2.932 38.938 2.986 C 38.779 3.076 38.699 3.219 38.699 3.416 C 38.699 3.566 38.754 3.684 38.863 3.77 C 38.972 3.856 39.101 3.899 39.251 3.899 C 39.433 3.899 39.609 3.857 39.78 3.773 C 40.067 3.633 40.21 3.404 40.21 3.086 Z M 15.955 1.532 C 16.171 1.243 16.511 1.075 16.871 1.077 C 17.254 1.077 17.565 1.21 17.802 1.474 C 18.042 1.737 18.161 2.124 18.161 2.638 C 18.161 3.124 18.044 3.529 17.808 3.85 C 17.572 4.172 17.246 4.333 16.828 4.333 C 16.594 4.333 16.397 4.277 16.237 4.164 C 16.141 4.097 16.038 3.989 15.928 3.842 L 15.928 4.236 L 15.452 4.236 L 15.452 0 L 15.955 0 Z M 16.811 1.54 C 16.576 1.54 16.368 1.628 16.19 1.802 C 16.014 1.976 15.926 2.264 15.926 2.664 C 15.926 2.953 15.962 3.188 16.035 3.368 C 16.171 3.707 16.425 3.877 16.797 3.877 C 17.076 3.877 17.285 3.766 17.423 3.543 C 17.563 3.321 17.633 3.028 17.633 2.664 C 17.633 2.34 17.562 2.072 17.423 1.859 C 17.285 1.646 17.081 1.54 16.811 1.54 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            p(w, {
                                              className: `framer-159snh0`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.811 3.256" overflow="visible"><path d="M 1.454 0 C 1.673 0 1.884 0.051 2.089 0.155 C 2.293 0.257 2.451 0.389 2.558 0.552 C 2.661 0.707 2.73 0.888 2.765 1.095 C 2.795 1.236 2.811 1.463 2.811 1.773 L 0.555 1.773 C 0.565 2.085 0.638 2.336 0.776 2.526 C 0.914 2.713 1.128 2.807 1.417 2.807 C 1.687 2.807 1.902 2.718 2.063 2.54 C 2.155 2.437 2.222 2.314 2.258 2.181 L 2.767 2.181 C 2.754 2.294 2.709 2.421 2.633 2.56 C 2.567 2.686 2.481 2.8 2.379 2.899 C 2.218 3.055 2.015 3.162 1.796 3.209 C 1.671 3.24 1.531 3.256 1.374 3.256 C 1.005 3.262 0.65 3.11 0.4 2.839 C 0.133 2.559 0 2.168 0 1.667 C 0 1.173 0.134 0.771 0.403 0.462 C 0.671 0.154 1.021 0.001 1.454 0.001 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-1gaag6b`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.709 1" overflow="visible"><path d="M 0.854 0 C 0.616 0 0.416 0.086 0.255 0.258 C 0.095 0.429 0.01 0.647 0 0.911 L 1.709 0.911 C 1.688 0.686 1.639 0.507 1.563 0.373 C 1.421 0.125 1.184 0 0.854 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-1x2po8c`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.81 3.256" overflow="visible"><path d="M 1.454 0 C 1.672 0 1.884 0.051 2.089 0.155 C 2.293 0.257 2.45 0.389 2.557 0.552 C 2.661 0.707 2.73 0.888 2.764 1.095 C 2.794 1.236 2.81 1.463 2.81 1.773 L 0.555 1.773 C 0.564 2.085 0.638 2.336 0.776 2.526 C 0.914 2.713 1.127 2.807 1.417 2.807 C 1.687 2.807 1.903 2.718 2.064 2.54 C 2.155 2.437 2.22 2.317 2.259 2.181 L 2.768 2.181 C 2.754 2.294 2.709 2.421 2.633 2.56 C 2.558 2.698 2.473 2.811 2.379 2.899 C 2.218 3.055 2.016 3.162 1.797 3.209 C 1.658 3.242 1.516 3.257 1.374 3.256 C 1.005 3.262 0.65 3.11 0.399 2.839 C 0.133 2.559 0.001 2.168 0 1.667 C 0 1.173 0.134 0.771 0.402 0.462 C 0.671 0.154 1.022 0.001 1.455 0.001 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-1g2fnlh`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.71 1" overflow="visible"><path d="M 0.854 0 C 0.616 0 0.417 0.087 0.256 0.258 C 0.095 0.429 0.01 0.647 0 0.911 L 1.71 0.911 C 1.689 0.686 1.64 0.507 1.563 0.373 C 1.422 0.125 1.185 0 0.854 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-1gchn90`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.727 4.345" overflow="visible"><path d="M 2.727 0 L 2.727 4.236 L 2.261 4.236 L 2.261 3.808 C 2.141 3.997 1.998 4.134 1.833 4.219 C 1.657 4.305 1.463 4.349 1.267 4.345 C 0.924 4.345 0.627 4.201 0.376 3.913 C 0.125 3.625 0 3.241 0 2.762 C 0 2.313 0.114 1.925 0.342 1.598 C 0.572 1.268 0.9 1.104 1.324 1.104 C 1.56 1.104 1.758 1.153 1.916 1.253 C 2.009 1.31 2.113 1.411 2.23 1.554 L 2.23 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-120okpi`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.704 2.339" overflow="visible"><path d="M 0.876 0.001 C 0.616 0.001 0.404 0.1 0.241 0.299 C 0.081 0.498 0 0.791 0 1.178 C 0 1.507 0.07 1.784 0.209 2.006 C 0.35 2.228 0.574 2.339 0.882 2.339 C 1.121 2.339 1.318 2.237 1.471 2.032 C 1.626 1.825 1.704 1.529 1.704 1.144 C 1.704 0.755 1.625 0.468 1.466 0.282 C 1.307 0.094 1.11 0 0.876 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-1fyhz2z`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.911 3.257" overflow="visible"><path d="M 1.351 0 C 1.713 0 2.007 0.07 2.233 0.208 C 2.457 0.346 2.569 0.56 2.569 0.851 L 2.569 2.625 C 2.569 2.678 2.58 2.721 2.601 2.754 C 2.624 2.786 2.671 2.803 2.742 2.803 C 2.765 2.803 2.791 2.802 2.819 2.8 C 2.85 2.796 2.881 2.791 2.911 2.785 L 2.911 3.168 C 2.851 3.186 2.79 3.2 2.728 3.211 C 2.67 3.217 2.613 3.22 2.555 3.219 C 2.377 3.219 2.247 3.156 2.167 3.029 C 2.118 2.942 2.087 2.845 2.077 2.745 C 1.972 2.883 1.821 3.003 1.624 3.104 C 1.426 3.206 1.209 3.257 0.971 3.257 C 0.686 3.257 0.452 3.17 0.27 2.998 C 0.092 2.829 -0.006 2.591 0 2.345 C 0 2.061 0.089 1.839 0.267 1.683 C 0.445 1.525 0.679 1.428 0.968 1.392 L 1.793 1.288 C 1.912 1.273 1.992 1.224 2.032 1.139 C 2.058 1.077 2.07 1.009 2.066 0.941 C 2.066 0.765 2.003 0.637 1.877 0.559 C 1.752 0.478 1.573 0.438 1.339 0.438 C 1.07 0.438 0.877 0.511 0.764 0.657 C 0.701 0.737 0.66 0.856 0.642 1.015 L 0.158 1.015 C 0.168 0.636 0.29 0.372 0.526 0.226 C 0.763 0.076 1.039 0.001 1.351 0.001 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-1kaldc`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.512 1.229" overflow="visible"><path d="M 1.512 0 C 1.436 0.045 1.354 0.079 1.268 0.1 C 1.172 0.126 1.074 0.146 0.975 0.158 L 0.662 0.198 C 0.474 0.223 0.333 0.262 0.239 0.316 C 0.08 0.406 0.001 0.55 0 0.747 C -0.005 0.884 0.056 1.015 0.164 1.1 C 0.274 1.186 0.404 1.229 0.553 1.229 C 0.734 1.229 0.911 1.187 1.081 1.103 C 1.368 0.963 1.512 0.734 1.512 0.416 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-1cogpzx`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.912 3.257" overflow="visible"><path d="M 1.351 0 C 1.713 0 2.007 0.07 2.233 0.208 C 2.457 0.346 2.57 0.56 2.57 0.851 L 2.57 2.625 C 2.57 2.678 2.58 2.721 2.601 2.754 C 2.624 2.786 2.671 2.803 2.742 2.803 C 2.765 2.803 2.791 2.802 2.819 2.8 C 2.85 2.796 2.881 2.791 2.912 2.785 L 2.912 3.168 C 2.851 3.186 2.79 3.2 2.728 3.211 C 2.67 3.217 2.613 3.22 2.555 3.219 C 2.377 3.219 2.248 3.156 2.167 3.029 C 2.118 2.942 2.088 2.845 2.078 2.745 C 1.973 2.883 1.821 3.003 1.624 3.104 C 1.427 3.206 1.209 3.257 0.972 3.257 C 0.687 3.257 0.452 3.171 0.27 2.998 C 0.092 2.829 -0.006 2.592 0 2.345 C 0 2.061 0.09 1.839 0.267 1.683 C 0.446 1.525 0.68 1.428 0.969 1.392 L 1.793 1.288 C 1.913 1.273 1.992 1.224 2.032 1.139 C 2.058 1.077 2.07 1.009 2.066 0.941 C 2.066 0.765 2.003 0.637 1.877 0.559 C 1.752 0.478 1.573 0.438 1.34 0.438 C 1.07 0.438 0.878 0.511 0.765 0.657 C 0.702 0.737 0.661 0.856 0.642 1.015 L 0.159 1.015 C 0.168 0.636 0.291 0.372 0.526 0.226 C 0.764 0.076 1.039 0.001 1.351 0.001 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-lg2e4y`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.511 1.229" overflow="visible"><path d="M 1.511 0 C 1.435 0.045 1.353 0.079 1.267 0.1 C 1.171 0.126 1.073 0.146 0.974 0.158 L 0.661 0.198 C 0.473 0.223 0.332 0.262 0.238 0.316 C 0.079 0.406 0 0.55 0 0.747 C 0 0.896 0.054 1.014 0.164 1.1 C 0.272 1.186 0.402 1.229 0.551 1.229 C 0.734 1.229 0.91 1.187 1.08 1.103 C 1.367 0.963 1.511 0.734 1.511 0.416 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-8j2h3m`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.912 3.257" overflow="visible"><path d="M 1.351 0 C 1.713 0 2.007 0.07 2.233 0.208 C 2.457 0.346 2.57 0.56 2.57 0.851 L 2.57 2.625 C 2.568 2.67 2.579 2.715 2.601 2.754 C 2.624 2.786 2.671 2.803 2.742 2.803 C 2.765 2.803 2.791 2.802 2.82 2.8 C 2.849 2.796 2.879 2.791 2.912 2.785 L 2.912 3.168 C 2.851 3.186 2.79 3.2 2.728 3.211 C 2.685 3.217 2.628 3.219 2.556 3.219 C 2.377 3.219 2.248 3.156 2.167 3.029 C 2.119 2.942 2.088 2.845 2.078 2.745 C 1.973 2.883 1.821 3.003 1.624 3.104 C 1.423 3.207 1.199 3.259 0.972 3.257 C 0.687 3.257 0.453 3.17 0.271 2.998 C 0.093 2.829 -0.006 2.592 0 2.345 C 0.001 2.06 0.09 1.839 0.269 1.683 C 0.446 1.525 0.68 1.428 0.97 1.392 L 1.794 1.288 C 1.913 1.273 1.992 1.224 2.032 1.139 C 2.058 1.077 2.07 1.009 2.067 0.941 C 2.067 0.765 2.004 0.637 1.877 0.559 C 1.752 0.478 1.573 0.438 1.34 0.438 C 1.07 0.438 0.878 0.511 0.765 0.657 C 0.702 0.737 0.661 0.856 0.642 1.015 L 0.159 1.015 C 0.168 0.636 0.291 0.372 0.527 0.226 C 0.764 0.076 1.039 0.001 1.351 0.001 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-12dpnq7`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.511 1.229" overflow="visible"><path d="M 1.511 0 C 1.435 0.045 1.353 0.079 1.267 0.1 C 1.171 0.126 1.073 0.146 0.974 0.158 L 0.661 0.198 C 0.473 0.223 0.332 0.262 0.239 0.316 C 0.08 0.406 0 0.55 0 0.747 C 0 0.896 0.055 1.014 0.164 1.1 C 0.273 1.186 0.402 1.229 0.552 1.229 C 0.734 1.229 0.91 1.187 1.08 1.103 C 1.367 0.963 1.511 0.734 1.511 0.416 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-yk5xq5`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.709 4.333" overflow="visible"><path d="M 0.503 1.532 C 0.719 1.243 1.059 1.075 1.419 1.077 C 1.802 1.077 2.113 1.21 2.35 1.474 C 2.59 1.737 2.709 2.124 2.709 2.638 C 2.709 3.124 2.592 3.529 2.356 3.85 C 2.12 4.172 1.794 4.333 1.376 4.333 C 1.142 4.333 0.945 4.277 0.785 4.164 C 0.689 4.097 0.586 3.989 0.476 3.842 L 0.476 4.236 L 0 4.236 L 0 0 L 0.503 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-1urr1ov`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.707 2.336" overflow="visible"><path d="M 0.886 0 C 0.65 0 0.443 0.088 0.264 0.261 C 0.089 0.436 0 0.723 0 1.124 C 0 1.413 0.037 1.647 0.11 1.828 C 0.246 2.167 0.499 2.336 0.871 2.336 C 1.151 2.336 1.36 2.225 1.498 2.003 C 1.638 1.781 1.707 1.487 1.707 1.124 C 1.707 0.8 1.637 0.531 1.498 0.319 C 1.36 0.106 1.156 0 0.886 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        h(w, {
                                          className: `framer-16m7msy`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48.496 4.325" overflow="visible"><path d="M 1.397 1.069 C 1.743 1.069 2.025 1.153 2.241 1.322 C 2.46 1.49 2.591 1.781 2.635 2.193 L 2.132 2.193 C 2.109 2.019 2.036 1.855 1.922 1.721 C 1.813 1.595 1.638 1.532 1.397 1.532 C 1.067 1.532 0.831 1.692 0.69 2.014 C 0.598 2.223 0.552 2.481 0.552 2.787 C 0.552 3.096 0.617 3.355 0.748 3.566 C 0.878 3.777 1.083 3.882 1.362 3.882 C 1.577 3.882 1.747 3.817 1.871 3.687 C 1.997 3.554 2.085 3.374 2.133 3.146 L 2.635 3.146 C 2.577 3.554 2.434 3.854 2.204 4.043 C 1.974 4.231 1.68 4.325 1.322 4.325 C 0.92 4.325 0.599 4.178 0.359 3.885 C 0.119 3.59 0 3.222 0 2.782 C 0 2.241 0.132 1.82 0.394 1.52 C 0.657 1.22 0.99 1.069 1.397 1.069 Z M 35.581 1.158 L 35.581 3.201 C 35.581 3.358 35.606 3.487 35.656 3.586 C 35.748 3.77 35.919 3.862 36.17 3.862 C 36.53 3.862 36.776 3.701 36.906 3.38 C 36.977 3.207 37.013 2.97 37.013 2.67 L 37.013 1.158 L 37.53 1.158 L 37.53 4.236 L 37.041 4.236 L 37.046 3.781 C 36.98 3.898 36.896 3.998 36.797 4.078 C 36.599 4.238 36.36 4.319 36.078 4.319 C 35.64 4.319 35.341 4.172 35.182 3.88 C 35.096 3.722 35.052 3.512 35.052 3.25 L 35.052 1.158 Z M 11.584 0.299 L 11.584 1.158 L 12.075 1.158 L 12.075 1.58 L 11.584 1.58 L 11.584 3.589 C 11.584 3.696 11.62 3.768 11.693 3.805 C 11.734 3.826 11.8 3.836 11.894 3.836 L 11.975 3.836 C 12.003 3.834 12.037 3.832 12.075 3.827 L 12.075 4.236 C 12.016 4.253 11.954 4.265 11.888 4.273 C 11.825 4.281 11.756 4.285 11.682 4.285 C 11.44 4.285 11.276 4.223 11.19 4.1 C 11.104 3.976 11.06 3.815 11.06 3.618 L 11.06 1.58 L 10.644 1.58 L 10.644 1.159 L 11.06 1.159 L 11.06 0.299 L 11.584 0.299 Z M 4.369 1.092 L 4.487 1.104 L 4.487 1.65 C 4.431 1.639 4.374 1.634 4.317 1.635 C 4.057 1.635 3.857 1.72 3.718 1.888 C 3.577 2.055 3.507 2.247 3.507 2.465 L 3.507 4.236 L 2.99 4.236 L 2.99 1.159 L 3.481 1.159 L 3.481 1.69 C 3.522 1.587 3.621 1.461 3.777 1.314 C 3.933 1.158 4.149 1.077 4.369 1.093 Z M 32.482 1.575 C 32.605 1.419 32.715 1.31 32.813 1.247 C 32.979 1.138 33.187 1.083 33.436 1.083 C 33.883 1.083 34.185 1.239 34.344 1.552 C 34.43 1.722 34.474 1.959 34.474 2.261 L 34.474 4.236 L 33.942 4.236 L 33.942 2.296 C 33.942 2.07 33.914 1.904 33.856 1.799 C 33.762 1.63 33.586 1.546 33.327 1.546 C 33.113 1.546 32.918 1.619 32.744 1.767 C 32.57 1.915 32.482 2.194 32.482 2.603 L 32.482 4.236 L 31.965 4.236 L 31.965 0 L 32.482 0 Z M 41.339 1.089 C 41.753 1.089 42.034 1.239 42.184 1.538 C 42.264 1.698 42.305 1.915 42.305 2.186 L 42.305 4.236 L 41.767 4.236 L 41.767 2.098 C 41.767 1.893 41.715 1.752 41.612 1.675 C 41.503 1.596 41.372 1.556 41.238 1.56 C 41.043 1.557 40.854 1.63 40.712 1.764 C 40.566 1.9 40.494 2.127 40.494 2.445 L 40.494 4.236 L 39.968 4.236 L 39.968 2.227 C 39.968 2.019 39.943 1.866 39.894 1.77 C 39.815 1.626 39.668 1.554 39.454 1.554 C 39.259 1.554 39.08 1.63 38.92 1.781 C 38.761 1.933 38.68 2.207 38.68 2.603 L 38.68 4.236 L 38.164 4.236 L 38.164 1.159 L 38.675 1.159 L 38.675 1.595 C 38.797 1.444 38.909 1.334 39.008 1.265 C 39.179 1.148 39.372 1.09 39.588 1.09 C 39.833 1.09 40.031 1.151 40.181 1.271 C 40.265 1.34 40.341 1.441 40.41 1.575 C 40.526 1.411 40.661 1.288 40.816 1.211 C 40.977 1.128 41.157 1.087 41.339 1.09 Z M 47.485 1.089 C 47.922 1.089 48.217 1.241 48.37 1.546 C 48.455 1.713 48.496 1.951 48.496 2.261 L 48.496 4.236 L 47.971 4.236 L 47.971 2.296 C 47.971 2.108 47.943 1.957 47.887 1.842 C 47.795 1.65 47.629 1.555 47.388 1.554 C 47.265 1.554 47.164 1.567 47.086 1.592 C 46.939 1.637 46.809 1.725 46.713 1.844 C 46.632 1.935 46.574 2.043 46.543 2.161 C 46.514 2.313 46.501 2.469 46.506 2.624 L 46.506 4.236 L 45.988 4.236 L 45.988 1.159 L 46.479 1.159 L 46.479 1.595 C 46.625 1.415 46.78 1.286 46.942 1.208 C 47.105 1.129 47.286 1.09 47.485 1.09 Z" fill="var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Texto Principal&quot;} */"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            p(w, {
                                              className: `framer-1o6s5uv`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.635 3.256" overflow="visible"><path d="M 1.397 0 C 1.743 0 2.025 0.085 2.241 0.253 C 2.46 0.422 2.591 0.712 2.635 1.124 L 2.132 1.124 C 2.109 0.95 2.036 0.786 1.922 0.652 C 1.813 0.526 1.638 0.463 1.397 0.463 C 1.067 0.463 0.831 0.624 0.69 0.945 C 0.598 1.155 0.552 1.412 0.552 1.719 C 0.552 2.027 0.617 2.286 0.748 2.497 C 0.878 2.708 1.083 2.813 1.362 2.813 C 1.577 2.813 1.747 2.748 1.871 2.618 C 1.997 2.486 2.085 2.306 2.133 2.078 L 2.635 2.078 C 2.577 2.486 2.434 2.785 2.204 2.975 C 1.974 3.162 1.68 3.256 1.322 3.256 C 0.92 3.256 0.599 3.11 0.359 2.817 C 0.119 2.521 0 2.154 0 1.713 C 0 1.173 0.132 0.752 0.394 0.451 C 0.657 0.151 0.99 0 1.397 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-1f1ncf`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.478 3.161" overflow="visible"><path d="M 0.529 0 L 0.529 2.043 C 0.529 2.2 0.554 2.329 0.604 2.428 C 0.696 2.612 0.867 2.704 1.118 2.704 C 1.478 2.704 1.723 2.543 1.854 2.222 C 1.925 2.049 1.96 1.812 1.96 1.512 L 1.96 0 L 2.478 0 L 2.478 3.077 L 1.989 3.077 L 1.994 2.623 C 1.927 2.74 1.844 2.839 1.744 2.92 C 1.547 3.08 1.308 3.161 1.026 3.161 C 0.588 3.161 0.289 3.014 0.13 2.721 C 0.044 2.564 0 2.354 0 2.092 L 0 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-1dpdk0p`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.431 3.986" overflow="visible"><path d="M 0.939 0 L 0.939 0.859 L 1.431 0.859 L 1.431 1.281 L 0.939 1.281 L 0.939 3.29 C 0.939 3.397 0.976 3.47 1.049 3.506 C 1.09 3.527 1.156 3.538 1.25 3.538 L 1.331 3.538 C 1.359 3.535 1.393 3.533 1.431 3.529 L 1.431 3.937 C 1.372 3.954 1.31 3.966 1.244 3.974 C 1.181 3.982 1.112 3.986 1.038 3.986 C 0.796 3.986 0.632 3.925 0.546 3.802 C 0.46 3.677 0.416 3.516 0.416 3.319 L 0.416 1.281 L 0 1.281 L 0 0.86 L 0.416 0.86 L 0.416 0.001 L 0.939 0.001 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-r3hcse`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.497 3.145" overflow="visible"><path d="M 1.38 0.001 L 1.497 0.013 L 1.497 0.559 C 1.441 0.548 1.385 0.543 1.328 0.544 C 1.068 0.544 0.868 0.629 0.728 0.797 C 0.588 0.964 0.517 1.156 0.517 1.374 L 0.517 3.145 L 0 3.145 L 0 0.068 L 0.492 0.068 L 0.492 0.599 C 0.533 0.496 0.631 0.37 0.787 0.223 C 0.944 0.067 1.16 -0.013 1.38 0.002 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-1v36ec6`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.509 4.236" overflow="visible"><path d="M 0.517 1.575 C 0.64 1.419 0.75 1.31 0.848 1.247 C 1.014 1.138 1.222 1.083 1.471 1.083 C 1.918 1.083 2.22 1.239 2.379 1.552 C 2.465 1.722 2.509 1.959 2.509 2.261 L 2.509 4.236 L 1.977 4.236 L 1.977 2.296 C 1.977 2.07 1.949 1.904 1.891 1.799 C 1.797 1.63 1.621 1.546 1.362 1.546 C 1.148 1.546 0.953 1.619 0.779 1.767 C 0.604 1.915 0.517 2.194 0.517 2.603 L 0.517 4.236 L 0 4.236 L 0 0 L 0.517 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-18hwd00`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.141 3.146" overflow="visible"><path d="M 3.175 0 C 3.589 0 3.87 0.15 4.02 0.448 C 4.1 0.609 4.141 0.825 4.141 1.097 L 4.141 3.146 L 3.603 3.146 L 3.603 1.008 C 3.603 0.804 3.552 0.663 3.448 0.586 C 3.34 0.507 3.208 0.467 3.074 0.471 C 2.879 0.468 2.69 0.541 2.548 0.675 C 2.403 0.811 2.33 1.038 2.33 1.356 L 2.33 3.146 L 1.804 3.146 L 1.804 1.138 C 1.804 0.93 1.78 0.776 1.73 0.68 C 1.651 0.537 1.504 0.465 1.29 0.465 C 1.095 0.465 0.917 0.541 0.756 0.692 C 0.597 0.844 0.517 1.118 0.517 1.514 L 0.517 3.146 L 0 3.146 L 0 0.07 L 0.512 0.07 L 0.512 0.506 C 0.634 0.355 0.745 0.245 0.845 0.176 C 1.015 0.059 1.208 0.001 1.425 0.001 C 1.67 0.001 1.867 0.061 2.017 0.182 C 2.101 0.251 2.178 0.352 2.247 0.486 C 2.362 0.322 2.497 0.199 2.652 0.122 C 2.814 0.039 2.993 -0.002 3.175 0.001 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            p(w, {
                                              className: `framer-8bv9kt`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.508 3.146" overflow="visible"><path d="M 1.497 0 C 1.934 0 2.229 0.152 2.382 0.457 C 2.466 0.624 2.508 0.862 2.508 1.172 L 2.508 3.146 L 1.982 3.146 L 1.982 1.207 C 1.982 1.019 1.954 0.868 1.899 0.753 C 1.807 0.561 1.64 0.466 1.4 0.465 C 1.277 0.465 1.176 0.478 1.097 0.503 C 0.951 0.548 0.821 0.636 0.724 0.755 C 0.644 0.846 0.585 0.954 0.555 1.072 C 0.526 1.224 0.513 1.379 0.517 1.535 L 0.517 3.146 L 0 3.146 L 0 0.07 L 0.491 0.07 L 0.491 0.506 C 0.637 0.326 0.792 0.197 0.954 0.119 C 1.117 0.04 1.298 0.001 1.497 0.001 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                h(`div`, {
                                  className: `framer-miaxew`,
                                  "data-framer-name": `Opciones`,
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
                                              children: p(De, {
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
                                              children: p(De, {
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
                                              children: p(De, {
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
                                              children: p(De, {
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
      (Ko = (e) =>
        e === _e.canvas || e === _e.export
          ? [
              ...Bo,
              ...Ro.flatMap((e) => {
                let t = zo[e];
                return Lo[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...Bo, ...Ro.map((e) => `@media ${Vo[e]} { ${Lo[e].join(` `)} }`)]),
      (qo = D(Go, Ko, `framer-IyJgx`)),
      (qo.displayName = `Navbar y Footer`),
      (qo.defaultProps = { height: 1e3, width: 1200 }),
      A(qo, {
        ZCuoFUPLw: { title: `Enlace Arriba`, type: k.Link },
        gDUC70AIa: { title: `Enlace Contacto`, type: k.Link },
      }),
      ke(
        qo,
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
          ...E(bo),
          ...E(Oo),
          ...E(wo),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Yo,
  Xo,
  Zo,
  Qo,
  $o = t(() => {
    (m(),
      x(),
      g(),
      (Yo = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 2 13 C 0.895 13 0 12.105 0 11 L 0 2 C 0 0.895 0.895 0 2 0 L 16 0 C 17.105 0 18 0.895 18 2 L 18 11 C 18 12.105 17.105 13 16 13 Z" fill="transparent" height="13px" id="DIiTaH_8Z" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(3 4)" width="18px"/><path d="M 0 0 L 22 0" fill="transparent" height="1px" id="oCeSE_3nk" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(1 20)" width="22px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Xo = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (Zo = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (Qo = D(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...s } = Zo(e);
          return p(Xo, {
            ...s,
            className: C(`framer-ja7Tl`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-ja7Tl { -webkit-mask: ${Yo}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${Yo}; width: 24px; }`,
        ],
        `framer-ja7Tl`
      )),
      (Qo.displayName = `Laptop`),
      A(Qo, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: k.Color },
      }));
  }),
  es,
  ts,
  ns,
  rs,
  is,
  as,
  os,
  ss = t(() => {
    (m(),
      x(),
      g(),
      (es = `var(--framer-icon-mask)`),
      (ts = l(function (e, t) {
        return p(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ns = y.create(ts)),
      (rs = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? p(ns, { ...a, layoutId: r, ref: t, children: i })
          : p(`svg`, { ...a, ref: t, children: i });
      })),
      (is = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 16 8 C 16 3.582 12.418 0 8 0 C 3.582 0 0 3.582 0 8" fill="transparent" height="8px" id="Uke_By6q9" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 13)" width="16px"/><path d="M 0 5 C 0 2.239 2.239 0 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 Z" fill="transparent" height="10px" id="gQ8CXwJSF" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(5 3)" width="10px"/><path d="M 4.45 16.3 C 4.45 12.93 2.45 9.8 0.45 8.3 C 1.785 7.298 2.532 5.696 2.442 4.03 C 2.352 2.363 1.436 0.851 0 0" fill="transparent" height="16.3px" id="yyxa9I4ZI" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(17.55 3.7)" width="4.449999999999999px"/></svg>`),
      (as = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (os = D(
        l(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = as(e),
            l = ve(`2593868513`, is);
          return p(rs, {
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
          `.framer-57l2F { -webkit-mask: ${es}; aspect-ratio: 1; display: block; mask: ${es}; width: 24px; }`,
        ],
        `framer-57l2F`
      )),
      (os.displayName = `Users Round`),
      A(os, {
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
  cs,
  ls,
  us,
  ds,
  fs,
  ps,
  ms,
  hs = t(() => {
    (m(),
      x(),
      g(),
      (cs = `var(--framer-icon-mask)`),
      (ls = l(function (e, t) {
        return p(`svg`, { ...e, ref: t, children: e.children });
      })),
      (us = y.create(ls)),
      (ds = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? p(us, { ...a, layoutId: r, ref: t, children: i })
          : p(`svg`, { ...a, ref: t, children: i });
      })),
      (fs = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 5.516 C 0 3.238 1.404 1.196 3.532 0.381 C 5.659 -0.435 8.068 0.146 9.591 1.84 C 9.697 1.954 9.845 2.018 10 2.018 C 10.155 2.018 10.303 1.954 10.409 1.84 C 11.927 0.135 14.343 -0.453 16.475 0.364 C 18.607 1.181 20.011 3.233 20 5.516 C 20 7.806 18.5 9.516 17 11.016 L 11.508 16.329 C 11.131 16.762 10.586 17.012 10.012 17.016 C 9.438 17.02 8.89 16.776 8.508 16.348 L 3 11.016 C 1.5 9.516 0 7.816 0 5.516" fill="transparent" height="17.016074446131555px" id="BmMuopOcR" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 3.984)" width="20.00006277311737px"/></svg>`),
      (ps = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (ms = D(
        l(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = ps(e),
            l = ve(`79158532`, fs);
          return p(ds, {
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
          `.framer-Q3GTQ { -webkit-mask: ${cs}; aspect-ratio: 1; display: block; mask: ${cs}; width: 24px; }`,
        ],
        `framer-Q3GTQ`
      )),
      (ms.displayName = `Heart`),
      A(ms, {
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
  gs,
  _s,
  vs,
  ys,
  bs = t(() => {
    (m(),
      x(),
      g(),
      (gs = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 2 16 C 0.895 16 0 15.105 0 14 L 0 2 C 0 0.895 0.895 0 2 0 L 14 0 C 15.105 0 16 0.895 16 2 L 16 14 C 16 15.105 15.105 16 14 16 Z" fill="transparent" height="16px" id="eptiDPkPu" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(4 4)" width="16px"/><path d="M 8 8 L 14 8 L 14 14 L 8 14 Z M 8 0 L 8 3 M 14 0 L 14 3 M 8 19 L 8 22 M 14 19 L 14 22 M 19 8 L 22 8 M 19 13 L 22 13 M 0 8 L 3 8 M 0 13 L 3 13" fill="transparent" height="22px" id="NyAqPhUGe" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(1 1)" width="22px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (_s = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (vs = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (ys = D(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...s } = vs(e);
          return p(_s, {
            ...s,
            className: C(`framer-J4Hkl`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-J4Hkl { -webkit-mask: ${gs}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${gs}; width: 24px; }`,
        ],
        `framer-J4Hkl`
      )),
      (ys.displayName = `Microchip`),
      A(ys, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: k.Color },
      }));
  }),
  xs,
  Ss,
  Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os = t(() => {
    (m(),
      x(),
      g(),
      (xs = `var(--framer-icon-mask)`),
      (Ss = l(function (e, t) {
        return p(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Cs = y.create(Ss)),
      (ws = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? p(Cs, { ...a, layoutId: r, ref: t, children: i })
          : p(`svg`, { ...a, ref: t, children: i });
      })),
      (Ts = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 2 0 L 0 1.9" fill="transparent" height="1.9000000000000004px" id="O5Q5oOSBq" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 4.1)" width="2px"/><path d="M 2.9 0.8 L 0 0" fill="transparent" height="1px" id="bLUrnu6Xa" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2.2 7.2)" width="2.9px"/><path d="M 1.9 0 L 0 2" fill="transparent" height="2px" id="T6wJOe5uz" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4.1 12)" width="1.9000000000000004px"/><path d="M 0 0 L 0.8 2.9" fill="transparent" height="2.8999999999999995px" id="Vw0YQnHlx" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(7.2 2.2)" width="1px"/><path d="M 0.04 0.693 C -0.04 0.506 0.002 0.289 0.146 0.146 C 0.289 0.002 0.506 -0.04 0.693 0.04 L 11.693 4.54 C 11.893 4.622 12.018 4.825 12.001 5.041 C 11.984 5.258 11.83 5.438 11.619 5.489 L 7.27 6.53 C 6.904 6.617 6.618 6.903 6.53 7.269 L 5.49 11.619 C 5.44 11.831 5.259 11.986 5.042 12.003 C 4.825 12.02 4.622 11.894 4.54 11.693 Z" fill="transparent" height="12.004397001187371px" id="O22816X_Q" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8.997 8.997)" width="12.002845573328965px"/></svg>`),
      (Es = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (Ds = D(
        l(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = Es(e),
            l = ve(`3028356511`, Ts);
          return p(ws, {
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
          `.framer-Me9wI { -webkit-mask: ${xs}; aspect-ratio: 1; display: block; mask: ${xs}; width: 24px; }`,
        ],
        `framer-Me9wI`
      )),
      (Ds.displayName = `Mouse Pointer Click`),
      A(Ds, {
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
  ks,
  As,
  js,
  Ms,
  Ns = t(() => {
    (m(),
      x(),
      g(),
      (ks = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 3 L 14 3 M 7 0 L 7 3 M 11 3 C 9.667 8.333 6.667 12 2 14 M 4 7 C 5.333 9.667 7.333 11.667 10 13 M 11 20 L 16 9 L 21 20 M 19.6 17 L 12.4 17" fill="transparent" height="20px" id="h505cdQDo" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(2 2)" width="21px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (As = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (js = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (Ms = D(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...s } = js(e);
          return p(As, {
            ...s,
            className: C(`framer-IwKeG`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-IwKeG { -webkit-mask: ${ks}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${ks}; width: 24px; }`,
        ],
        `framer-IwKeG`
      )),
      (Ms.displayName = `Language`),
      A(Ms, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: k.Color },
      }));
  }),
  Ps,
  Fs,
  Is,
  Ls,
  Rs = t(() => {
    (m(),
      x(),
      g(),
      (Ps = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 16 20 L 3 20 C 1.343 20 0 18.657 0 17 L 0 3 C 0 1.343 1.343 0 3 0 L 16 0 Z M 0 17 C 0 15.343 1.343 14 3 14 L 16 14 M 6 0 L 6 10 L 9 8 L 12 10 L 12 0 Z" fill="transparent" height="20px" id="LBecWNlNx" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(4 2)" width="16px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Fs = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (Is = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (Ls = D(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...s } = Is(e);
          return p(Fs, {
            ...s,
            className: C(`framer-UCoKw`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-UCoKw { -webkit-mask: ${Ps}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${Ps}; width: 24px; }`,
        ],
        `framer-UCoKw`
      )),
      (Ls.displayName = `Bookmark Alt`),
      A(Ls, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: k.Color },
      }));
  }),
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks,
  qs,
  Js,
  Ys,
  Xs = t(() => {
    (m(),
      x(),
      ie(),
      g(),
      (zs = ye(y.div)),
      (Bs = `framer-8sUE5`),
      (Vs = { oHNNtoWf_: `framer-v-kusbr1` }),
      (Hs = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Us = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (Ws = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.7,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Gs = ({ value: e, children: t }) => {
        let r = n(te),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(te.Provider, { value: a, children: t });
      }),
      (Ks = y.create(c)),
      (qs = ({ height: e, hover: t, id: n, width: r, ...i }) => ({
        ...i,
        gBi0K1NLP: t ?? i.gBi0K1NLP,
      })),
      (Js = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ys = D(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = ae();
          se();
          let { style: c, className: l, layoutId: u, variant: d, gBi0K1NLP: f, ...m } = qs(e),
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
            } = fe({ defaultVariant: `oHNNtoWf_`, ref: r, variant: d, variantClassNames: Vs }),
            S = Js(e, x),
            { activeVariantCallback: ce, delay: le } = Ce(g),
            ue = ce(async (...e) => {
              if ((b({ isHovered: !0 }), f && (await f(...e)) === !1)) return !1;
            }),
            w = C(Bs);
          return p(re, {
            id: u ?? i,
            children: p(Ks, {
              animate: x,
              initial: !1,
              children: p(Gs, {
                value: Hs,
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
                    p(zs, {
                      __framer__loop: Ws,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopPauseOffscreen: !0,
                      __framer__loopRepeatDelay: 0.5,
                      __framer__loopRepeatType: `loop`,
                      __framer__loopTransition: Us,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-1bf9uoy`,
                      layoutDependency: S,
                      layoutId: `BfhFVBk7h`,
                      style: {
                        backgroundColor: `var(--token-427afe29-ff3f-43c2-bf12-359f6a81b089, rgba(0, 204, 58, 0.7))`,
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
                        backgroundColor: `var(--token-427afe29-ff3f-43c2-bf12-359f6a81b089, rgba(0, 255, 255, 0.7))`,
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
          `.framer-8sUE5.framer-1wnbdmg, .framer-8sUE5 .framer-1wnbdmg { display: block; }`,
          `.framer-8sUE5.framer-kusbr1 { height: 20px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 20px; }`,
          `.framer-8sUE5 .framer-1bf9uoy, .framer-8sUE5 .framer-18tpr3u { flex: none; height: 12px; left: calc(50.00000000000002% - 12px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 12px / 2); width: 12px; will-change: var(--framer-will-change-override, transform); }`,
        ],
        `framer-8sUE5`
      )),
      (Ys.displayName = `Pulso`),
      (Ys.defaultProps = { height: 20, width: 20 }),
      A(Ys, { gBi0K1NLP: { title: `Hover`, type: k.EventHandler } }),
      ke(Ys, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  Zs,
  Qs,
  $s,
  ec,
  tc = t(() => {
    (m(),
      x(),
      g(),
      (Zs = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 18 L 7.5 10.5 M 10.5 7.5 L 18 0 M 5 0 L 0 0 L 13 18 L 18 18 Z" fill="transparent" height="18px" id="KD49WOeur" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(3 3)" width="18px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Qs = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      ($s = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (ec = D(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...s } = $s(e);
          return p(Qs, {
            ...s,
            className: C(`framer-A2QNA`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-A2QNA { -webkit-mask: ${Zs}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${Zs}; width: 24px; }`,
        ],
        `framer-A2QNA`
      )),
      (ec.displayName = `X`),
      A(ec, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: k.Color },
      }));
  }),
  nc,
  rc,
  ic,
  ac,
  oc = t(() => {
    (m(),
      x(),
      g(),
      (nc = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0.5 C 0 0.224 0.224 0 0.5 0 C 0.776 0 1 0.224 1 0.5 C 1 0.776 0.776 1 0.5 1 C 0.224 1 0 0.776 0 0.5 Z" fill="transparent" height="1px" id="HKZu7q77F" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(7.5 15.5)" width="1px"/><path d="M 16.042 0 L 20.042 0 L 20.042 5 L 17.042 5 L 17.042 8 L 14.042 8 L 14.042 10 L 11.742 12.3 C 12.541 14.934 11.445 17.773 9.085 19.188 C 6.724 20.603 3.704 20.23 1.757 18.284 C -0.189 16.338 -0.561 13.318 0.854 10.957 C 2.269 8.596 5.108 7.501 7.742 8.3 Z" fill="transparent" height="20.041788789153657px" id="wvFTyAPjD" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(1.958 2)" width="20.041788789153653px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (rc = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (ic = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (ac = D(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...s } = ic(e);
          return p(rc, {
            ...s,
            className: C(`framer-N7j1z`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-N7j1z { -webkit-mask: ${nc}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${nc}; width: 24px; }`,
        ],
        `framer-N7j1z`
      )),
      (ac.displayName = `Key`),
      A(ac, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: k.Color },
      }));
  }),
  sc,
  cc,
  lc,
  uc,
  dc = t(() => {
    (m(),
      x(),
      g(),
      (sc = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 2 16 C 0.895 16 0 15.105 0 14 L 0 2 C 0 0.895 0.895 0 2 0 L 18 0 C 19.105 0 20 0.895 20 2 L 20 14 C 20 15.105 19.105 16 18 16 Z" fill="transparent" height="16px" id="ZF0shDL2X" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(2 4)" width="20px"/><path d="M 20 0 L 10 5 L 0 0" fill="transparent" height="5px" id="bcfRbPfHQ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(2 8)" width="20px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (cc = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (lc = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (uc = D(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...s } = lc(e);
          return p(cc, {
            ...s,
            className: C(`framer-uAH45`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-uAH45 { -webkit-mask: ${sc}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${sc}; width: 24px; }`,
        ],
        `framer-uAH45`
      )),
      (uc.displayName = `Envelope`),
      A(uc, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: k.Color },
      }));
  }),
  fc,
  pc,
  mc,
  hc,
  gc = t(() => {
    (m(),
      x(),
      g(),
      (fc = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 7 21 L 7 18 C 7 16.667 7.333 15.667 8 15 C 5.204 14.981 2.689 13.419 1.602 11.028 C 0.515 8.636 1.064 5.873 3 4 C 2.333 2.667 2.333 1.333 3 0 C 5 0 6.333 0.667 7 2 C 9.333 1.333 11.667 1.333 14 2 C 14.667 0.667 16 0 18 0 C 18.667 1.333 18.667 2.667 18 4 C 19.936 5.873 20.485 8.636 19.398 11.028 C 18.311 13.419 15.796 14.981 13 15 C 13.667 15.667 14 16.667 14 18 L 14 21 M 7 18 C 3 19 3 16 0 15" fill="transparent" height="21px" id="dcxGqZWkS" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(2 1)" width="19.949135305681963px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (pc = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (mc = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (hc = D(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...s } = mc(e);
          return p(pc, {
            ...s,
            className: C(`framer-OmnFp`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-OmnFp { -webkit-mask: ${fc}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${fc}; width: 24px; }`,
        ],
        `framer-OmnFp`
      )),
      (hc.displayName = `Github`),
      A(hc, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: k.Color },
      }));
  }),
  _c,
  vc,
  yc,
  bc = t(() => {
    (x(),
      oe.loadFonts([`GF;IBM Plex Sans-700`, `GF;IBM Plex Sans-700italic`]),
      (_c = [
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
      (vc = [
        `.framer-Wyioo .framer-styles-preset-42z49n:not(.rich-text-wrapper), .framer-Wyioo .framer-styles-preset-42z49n.rich-text-wrapper h2 { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 25px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (yc = `framer-Wyioo`));
  });
function xc(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Sc,
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
  Nc,
  Pc,
  Fc,
  Ic = t(() => {
    (m(),
      x(),
      ie(),
      g(),
      tc(),
      oc(),
      dc(),
      gc(),
      jo(),
      bc(),
      (Sc = b(uc)),
      (Cc = b(ec)),
      (wc = b(hc)),
      (Tc = b(ac)),
      (Ec = [`RjV02RmXp`, `W1i25OXhn`]),
      (Dc = `framer-mHYr8`),
      (Oc = { RjV02RmXp: `framer-v-9iwc1b`, W1i25OXhn: `framer-v-1bpwkuw` }),
      (kc = { bounce: 0, delay: 0, duration: 0.5, type: `spring` }),
      (Ac = ({ value: e, children: t }) => {
        let r = n(te),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(te.Provider, { value: a, children: t });
      }),
      (jc = { "Variant 1": `RjV02RmXp`, "Variant 2": `W1i25OXhn` }),
      (Mc = y.create(c)),
      (Nc = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: jc[r.variant] ?? r.variant ?? `RjV02RmXp`,
      })),
      (Pc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Fc = D(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = ae();
          se();
          let { style: l, className: u, layoutId: d, variant: f, ...m } = Nc(e),
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
              cycleOrder: Ec,
              defaultVariant: `RjV02RmXp`,
              ref: r,
              variant: f,
              variantClassNames: Oc,
            }),
            S = Pc(e, x),
            { activeVariantCallback: ce, delay: le } = Ce(g),
            ue = ce(async (...e) => {
              (b({ isPressed: !1 }), oe(`W1i25OXhn`));
            }),
            w = ce(async (...e) => {
              (b({ isPressed: !1 }), oe(`RjV02RmXp`));
            }),
            de = C(Dc, yc, Ao),
            pe = () => g === `W1i25OXhn`;
          return p(re, {
            id: d ?? i,
            children: p(Mc, {
              animate: x,
              initial: !1,
              children: p(Ac, {
                value: kc,
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
                  ...xc({ W1i25OXhn: { "data-framer-name": `Variant 2`, onTap: w } }, g, ne),
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
                                  p(De, {
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
                                        p(uc, {
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
                                  p(De, {
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
                                        p(ec, {
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
                                p(De, {
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
                                      p(hc, {
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
                                p(De, {
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
                                      p(ac, {
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
          `.framer-mHYr8.framer-1sbwdno, .framer-mHYr8 .framer-1sbwdno { display: block; }`,
          `.framer-mHYr8.framer-9iwc1b { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 600px; }`,
          `.framer-mHYr8 .framer-f9zstw { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-mHYr8 .framer-73g42x { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 3px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-mHYr8 .framer-1lyr9xw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 15px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-mHYr8 .framer-1phxtxw { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-mHYr8 .framer-10vpi6d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-mHYr8 .framer-u9l3y, .framer-mHYr8 .framer-1ucesys, .framer-mHYr8 .framer-1iv1fvw, .framer-mHYr8 .framer-1ohkb1n { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
          `.framer-mHYr8 .framer-1l97iv4, .framer-mHYr8 .framer-kq0lr4, .framer-mHYr8 .framer-e8kuvy, .framer-mHYr8 .framer-1vuegfu { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 16px; }`,
          `.framer-mHYr8 .framer-1wc2z5b, .framer-mHYr8 .framer-4q8ulf, .framer-mHYr8 .framer-dtv47y, .framer-mHYr8 .framer-1w1j7w4 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-mHYr8 .framer-pffi9x { flex: none; height: 2px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
          `.framer-mHYr8.framer-v-1bpwkuw .framer-1lyr9xw { gap: 10px; }`,
          `.framer-mHYr8.framer-v-1bpwkuw .framer-1phxtxw { order: 0; }`,
          `.framer-mHYr8.framer-v-1bpwkuw .framer-10vpi6d { flex-direction: column; order: 2; }`,
          `.framer-mHYr8.framer-v-1bpwkuw .framer-u9l3y, .framer-mHYr8.framer-v-1bpwkuw .framer-1ucesys, .framer-mHYr8.framer-v-1bpwkuw .framer-1iv1fvw, .framer-mHYr8.framer-v-1bpwkuw .framer-1ohkb1n { flex: none; width: 100%; }`,
          `.framer-mHYr8.framer-v-1bpwkuw .framer-pffi9x { order: 1; }`,
          ...vc,
          ...ko,
          `.framer-mHYr8[data-border="true"]::after, .framer-mHYr8 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-mHYr8`
      )),
      (Fc.displayName = `Tarjeta Contacto`),
      (Fc.defaultProps = { height: 71, width: 600 }),
      A(Fc, {
        variant: {
          options: [`RjV02RmXp`, `W1i25OXhn`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: k.Enum,
        },
      }),
      ke(
        Fc,
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
          ...Sc,
          ...Cc,
          ...wc,
          ...Tc,
          ...E(_c),
          ...E(Oo),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Lc() {
  let e = { ...el };
  al.forEach((t) => {
    t(e);
  });
}
function Rc(e) {
  return (
    al.add(e),
    e({ ...el }),
    () => {
      al.delete(e);
    }
  );
}
function zc() {
  return [...new Set(Xc.map(Number).filter((e) => Number.isFinite(e) && e > 0))];
}
async function Bc() {
  if (rl) return rl;
  let e = zc();
  if (e.length)
    return (
      (rl = (async () => {
        try {
          let t = `${Zc}/v1/games?universeIds=${e.join(`,`)}`;
          console.log(`[Roblox Stats] Games →`, t);
          let n = await fetch(t, { method: `GET`, cache: `no-store` });
          if (!n.ok) throw Error(`HTTP ${n.status}`);
          let r = await n.json();
          if (!Array.isArray(r?.data)) throw Error(`Respuesta de games inválida`);
          let i = 0,
            a = 0;
          for (let e of r.data) ((i += Number(e.playing) || 0), (a += Number(e.visits) || 0));
          ((el = { ...el, players: i, visits: a }),
            (tl = Date.now()),
            console.log(`[Roblox Stats] Games ✓`, { players: i, visits: a }),
            Lc());
        } catch (e) {
          console.error(`[Roblox Stats] Games ✗`, e);
        } finally {
          rl = null;
        }
      })()),
      rl
    );
}
function Vc(e) {
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
async function Hc() {
  if (il) return il;
  let e = zc();
  if (e.length)
    return (
      (il = (async () => {
        try {
          console.log(`[Roblox Stats] Actualizando favoritos...`);
          let t = (
            await Promise.all(
              e.map(async (e) => {
                let t = `${Zc}/v1/games/${e}/favorites/count`;
                console.log(`[Roblox Stats] Favorites ${e} →`, t);
                let n = await fetch(t, { method: `GET`, cache: `no-store` });
                if (!n.ok) throw Error(`Favorites ${e}: HTTP ${n.status}`);
                let r = Vc(await n.json());
                return (console.log(`[Roblox Stats] Favorites ${e} ✓`, r), r);
              })
            )
          ).reduce((e, t) => e + t, 0);
          ((el = { ...el, favorites: t }),
            (nl = Date.now()),
            console.log(`[Roblox Stats] Favorites ✓ TOTAL:`, t),
            Lc());
        } catch (e) {
          console.error(`[Roblox Stats] Favorites ✗`, e);
        } finally {
          il = null;
        }
      })()),
      il
    );
}
function Uc() {
  let e = Date.now();
  (e - tl >= Qc && Bc(), e - nl >= $c && Hc());
}
function Wc() {
  let [e, t] = i(el);
  return (
    o(() => {
      let e = Rc(t);
      Uc();
      let n = v.setInterval(Uc, 1e3);
      return () => {
        (e(), v.clearInterval(n));
      };
    }, []),
    e
  );
}
function Gc(e) {
  return e >= 1e9
    ? Kc(e / 1e9) + `B`
    : e >= 1e6
      ? Kc(e / 1e6) + `M`
      : e >= 1e3
        ? Kc(e / 1e3) + `K`
        : Math.round(e).toLocaleString(`en-US`);
}
function Kc(e) {
  return Math.round(e * 10) / 10 + ``;
}
function qc(e) {
  return l((t, n) => {
    let r = Wc();
    return p(e, { ref: n, ...t, text: Gc(r.players) });
  });
}
function Jc(e) {
  return l((t, n) => {
    let r = Wc();
    return p(e, { ref: n, ...t, text: Gc(r.favorites) });
  });
}
function Yc(e) {
  return l((t, n) => {
    let r = Wc();
    return p(e, { ref: n, ...t, text: Gc(r.visits) });
  });
}
var Xc,
  Zc,
  Qc,
  $c,
  el,
  tl,
  nl,
  rl,
  il,
  al,
  ol = t(() => {
    (a(),
      m(),
      g(),
      (Xc = [9947971638, 10000907222, 10526961308]),
      (Zc = `https://games.rotunnel.com`),
      (Qc = 1e4),
      ($c = 3e5),
      (el = { players: 0, visits: 0, favorites: 0 }),
      (tl = 0),
      (nl = 0),
      (rl = null),
      (il = null),
      (al = new Set()));
  }),
  sl,
  cl,
  ll,
  ul = t(() => {
    (x(),
      oe.loadFonts([
        `GF;IBM Plex Sans-regular`,
        `GF;IBM Plex Sans-700`,
        `GF;IBM Plex Sans-700italic`,
        `GF;IBM Plex Sans-italic`,
      ]),
      (sl = [
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
      (cl = [
        `.framer-czCtn .framer-styles-preset-1k3mn7p:not(.rich-text-wrapper), .framer-czCtn .framer-styles-preset-1k3mn7p.rich-text-wrapper p { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (ll = `framer-czCtn`));
  }),
  dl,
  fl,
  pl,
  ml = t(() => {
    (x(),
      oe.loadFonts([`GF;IBM Plex Sans-700`, `GF;IBM Plex Sans-700italic`]),
      (dl = [
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
      (fl = [
        `.framer-rvXCf .framer-styles-preset-g1hyeb:not(.rich-text-wrapper), .framer-rvXCf .framer-styles-preset-g1hyeb.rich-text-wrapper h1 { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (pl = `framer-rvXCf`));
  }),
  hl,
  gl,
  _l,
  vl = t(() => {
    (x(),
      oe.loadFonts([
        `FS;JetBrains Mono-regular`,
        `FS;JetBrains Mono-bold`,
        `FS;JetBrains Mono-bold italic`,
        `FS;JetBrains Mono-italic`,
      ]),
      (hl = [
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
      (gl = [
        `.framer-jzwTc .framer-styles-preset-xqflja:not(.rich-text-wrapper), .framer-jzwTc .framer-styles-preset-xqflja.rich-text-wrapper p { --framer-font-family: "JetBrains Mono", "JetBrains Mono Placeholder", sans-serif; --framer-font-family-bold: "JetBrains Mono", "JetBrains Mono Placeholder", sans-serif; --framer-font-family-bold-italic: "JetBrains Mono", "JetBrains Mono Placeholder", sans-serif; --framer-font-family-italic: "JetBrains Mono", "JetBrains Mono Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (_l = `framer-jzwTc`));
  });
function yl(e, t) {
  return {
    description: `casz.cc website`,
    favicon: `https://framerusercontent.com/assets/FExrMSgd32GNBeSSLwHQXdXRNAU.gif`,
    robots: `max-image-preview:large`,
    title: `casz's home`,
  };
}
var bl = t(() => {});
function xl(e, t) {
  return {
    breakpoints: [
      { hash: `72rtr7`, mediaQuery: `(min-width: 1200px)` },
      { hash: `1epxe3`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1d685co`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: yl(e, t).description,
    elements: { PpqI0Bzwt: `top`, yhfDy_p6a: `contact` },
    robots: `max-image-preview:large`,
    serializationId: `framer-3WIOB`,
    title: yl(e, t).title || `Home`,
    viewport: `width=device-width`,
  };
}
var Sl,
  Cl,
  wl = t(() => {
    (bl(),
      (Sl = 1),
      (Cl = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
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
  Zl,
  Ql,
  $l,
  eu,
  tu = t(() => {
    (m(),
      x(),
      ie(),
      g(),
      $o(),
      ss(),
      hs(),
      bs(),
      Os(),
      Ns(),
      Rs(),
      Xs(),
      Ic(),
      ol(),
      ul(),
      ml(),
      Co(),
      jo(),
      bc(),
      vl(),
      wl(),
      (Tl = b(Ls)),
      (El = b(Ms)),
      (Dl = b(Qo)),
      (Ol = b(ys)),
      (kl = me(y.div)),
      (Al = b(Ys)),
      (jl = b(os)),
      (Ml = we(T, { nodeId: `hBLBdV9G_`, override: qc, scopeId: `augiA20Il` })),
      (Nl = b(ms)),
      (Pl = we(T, { nodeId: `G5zrCOGcZ`, override: Jc, scopeId: `augiA20Il` })),
      (Fl = b(Ds)),
      (Il = we(T, { nodeId: `r25NiESXt`, override: Yc, scopeId: `augiA20Il` })),
      (Ll = b(Fc)),
      (Rl = Oe(y.div)),
      (zl = {
        nqsfvFaAc: `(max-width: 809.98px)`,
        r0rfOgam0: `(min-width: 810px) and (max-width: 1199.98px)`,
        WQLkyLRf1: `(min-width: 1200px)`,
      }),
      (Bl = []),
      (Vl = `framer-3WIOB`),
      (Hl = {
        nqsfvFaAc: `framer-v-1d685co`,
        r0rfOgam0: `framer-v-1epxe3`,
        WQLkyLRf1: `framer-v-72rtr7`,
      }),
      (Ul = (e, t, n) => (e && t ? `position` : n)),
      (Wl = { bounce: 0, delay: 0, duration: 0.6, type: `spring` }),
      (Gl = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Wl,
        x: 0,
        y: 10,
      }),
      (Kl = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Wl,
        x: 0,
        y: 0,
      }),
      (ql = {
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
      (Jl = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
        let [i, a] = Ee({ blockDocumentScrolling: t, dismissWithEsc: r && n });
        return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
      }),
      (Yl = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Xl = { Desktop: `WQLkyLRf1`, Phone: `nqsfvFaAc`, Tablet: `r0rfOgam0` }),
      (Zl = ({ value: e }) =>
        ce()
          ? null
          : p(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Ql = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Xl[r.variant] ?? r.variant ?? `WQLkyLRf1`,
      })),
      ($l = D(
        l(function (e, t) {
          let r = s(null),
            i = t ?? r,
            a = ee(),
            { activeLocale: o, setLocale: l } = ae(),
            u = se(),
            { style: m, className: g, layoutId: _, variant: v, ...ie } = Ql(e);
          ge(f(() => xl({}, o), [o]));
          let [b, oe] = ue(v, zl, !1),
            { activeVariantCallback: x, delay: ce } = Ce(void 0),
            fe = ({ overlay: e }) =>
              x(async (...t) => {
                e.show();
              }),
            me = C(Vl, pl, Ao, ll, yc, _l, So),
            he = n(Se)?.isLayoutTemplate,
            _e = !!n(te)?.transition?.layout,
            ve = Ul(he, _e),
            E = xe(`PpqI0Bzwt`),
            ye = s(null),
            D = s(null),
            k = s(null),
            we = xe(`yhfDy_p6a`),
            Ee = s(null);
          return (
            le({}),
            p(Se.Provider, {
              value: {
                activeVariantId: b,
                humanReadableVariantMap: Xl,
                primaryVariantId: `WQLkyLRf1`,
                variantClassNames: Hl,
              },
              children: h(re, {
                id: _ ?? a,
                children: [
                  p(Zl, { value: `html body { background: rgb(255, 255, 255); }` }),
                  p(y.div, {
                    ...ie,
                    className: C(me, `framer-72rtr7`, g),
                    ref: i,
                    style: { ...m },
                    children: p(y.div, {
                      className: `framer-tqpngz`,
                      "data-framer-name": `Principal`,
                      layout: ve,
                      children: h(`div`, {
                        className: `framer-1kphyw6`,
                        "data-framer-name": `Interior`,
                        children: [
                          h(`div`, {
                            className: `framer-1b40kbg`,
                            "data-framer-name": `Sobre Mí`,
                            id: E,
                            ref: ye,
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
                                children: h(kl, {
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
                                          p(Ls, {
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
                                          p(Ms, {
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
                                          p(Qo, {
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
                                          p(ys, {
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
                                            p(Jl, {
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
                                                    children: p(Te, {
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
                                                      children: h(be, {
                                                        className: `framer-1k57x4l-container`,
                                                        id: `1k57x4l`,
                                                        nodeId: `Sm79VeLur`,
                                                        ref: D,
                                                        scopeId: `augiA20Il`,
                                                        children: [
                                                          p(Ys, {
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
                                                                anchorRef: D,
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
                                                                  animate: Kl,
                                                                  className: `framer-1spuarl`,
                                                                  "data-border": !0,
                                                                  exit: Gl,
                                                                  initial: ql,
                                                                  ref: k,
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
                                                p(os, {
                                                  animated: !1,
                                                  className: `framer-okalni`,
                                                  JEeZYcamG: !0,
                                                  layoutId: `TjfUpGRdk`,
                                                  P_DcoRcrY: !0,
                                                }),
                                                p(Ml, {
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
                                                p(ms, {
                                                  animated: !1,
                                                  className: `framer-1qwvijh`,
                                                  JEeZYcamG: !0,
                                                  layoutId: `ghTTA1qQ4`,
                                                  P_DcoRcrY: !0,
                                                }),
                                                p(Pl, {
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
                                                p(Ds, {
                                                  animated: !1,
                                                  className: `framer-1cn84a4`,
                                                  JEeZYcamG: !0,
                                                  layoutId: `O4GlWYpV3`,
                                                  P_DcoRcrY: !0,
                                                }),
                                                p(Il, {
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
                          h(Rl, {
                            className: `framer-1x6yy9v`,
                            "data-framer-name": `Servicios`,
                            flowEffectEnabled: !0,
                            flowEffectTransition: Wl,
                            isNestedFlowEffect: !1,
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
                                layout: `position`,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              h(y.div, {
                                className: `framer-1257f3n`,
                                "data-framer-name": `Tarjetas Pequeñas`,
                                layout: `position`,
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
                                                children: `High-quality 16:9 renders, any theme, any character, eye catching. Perfect for games and miniatures.`,
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
                                                    children: `High-quality 1:1 renders, any theme, any character, eye catching. Designed for easy recognition and branding.`,
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
                                                    children: `High-quality 1:1 renders, any theme, any character, eye catching. Designed for easy recognition and branding.`,
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
                                                  children: `High-quality 1:1 renders, any theme, any character, eye catching. Designed for easy recognition and branding.`,
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
                                children: p(Te, {
                                  height: 71,
                                  width: `600px`,
                                  y: (u?.y || 0) + 0 + 0 + 50 + 0 + 1581.8 + 0 + 232.5,
                                  children: p(be, {
                                    className: `framer-7fkjwa-container`,
                                    id: we,
                                    layout: `position`,
                                    nodeId: `yhfDy_p6a`,
                                    ref: Ee,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: p(Fc, {
                                      height: `100%`,
                                      id: `yhfDy_p6a`,
                                      layoutId: `yhfDy_p6a`,
                                      style: { width: `100%` },
                                      variant: Yl(`RjV02RmXp`),
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
          `.framer-3WIOB.framer-lux5qc, .framer-3WIOB .framer-lux5qc { display: block; }`,
          `.framer-3WIOB.framer-72rtr7 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
          `.framer-3WIOB .framer-tqpngz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-3WIOB .framer-1kphyw6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 50px 0px 50px; position: relative; width: 700px; }`,
          `.framer-3WIOB .framer-1b40kbg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-3WIOB .framer-1f11fff, .framer-3WIOB .framer-14ay6e6, .framer-3WIOB .framer-l9grff { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
          `.framer-3WIOB .framer-1ajptsa, .framer-3WIOB .framer-5jtqgd, .framer-3WIOB .framer-6yztux, .framer-3WIOB .framer-1t7t1qz, .framer-3WIOB .framer-89oa99, .framer-3WIOB .framer-1hu1yvr, .framer-3WIOB .framer-rkjegd, .framer-3WIOB .framer-h8jkbp, .framer-3WIOB .framer-1uewynn, .framer-3WIOB .framer-1beevpy, .framer-3WIOB .framer-1fq55tv, .framer-3WIOB .framer-88eq96, .framer-3WIOB .framer-1qslbfe, .framer-3WIOB .framer-eo8t4s, .framer-3WIOB .framer-1bu355n, .framer-3WIOB .framer-k82hol, .framer-3WIOB .framer-3dd7vb, .framer-3WIOB .framer-vnyg7b, .framer-3WIOB .framer-1d4tcxt, .framer-3WIOB .framer-1u8w04o, .framer-3WIOB .framer-wgp67n, .framer-3WIOB .framer-4ud3se, .framer-3WIOB .framer-zk86rt, .framer-3WIOB .framer-1perxvy, .framer-3WIOB .framer-1ual4tk, .framer-3WIOB .framer-1f10new, .framer-3WIOB .framer-1plwh2e { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-3WIOB .framer-kggmwf, .framer-3WIOB .framer-1lnd08x, .framer-3WIOB .framer-k4tx38 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-3WIOB .framer-1cftgkx { display: grid; flex: none; gap: 10px 10px; height: min-content; padding: 0px; position: relative; width: 100%; }`,
          `.framer-3WIOB .framer-ytdcj5, .framer-3WIOB .framer-yeorrc, .framer-3WIOB .framer-p68axu, .framer-3WIOB .framer-1hw0j0p { --border-bottom-width: 1px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #d9d9d9); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; align-self: start; background-color: var(--token-74a21abb-ce20-4d02-81dc-502468462d7f, #f0f0f0); border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; box-shadow: 0px 0px 15px -10px var(--token-a81eb0b3-0303-4615-a8d4-302833bfff8d, #d9d9d9); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 3px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-3WIOB .framer-qjn5ma, .framer-3WIOB .framer-1gozyto, .framer-3WIOB .framer-wp8sz6 { --border-bottom-width: 1px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #f0f0f0); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-d292610c-87f6-4102-ac93-51fdf043bf78, #f0f0f0); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-3WIOB .framer-1ly86wb, .framer-3WIOB .framer-ox0dry, .framer-3WIOB .framer-1a7s78l, .framer-3WIOB .framer-1tckl9h { --1df8v9o: var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, #000000); aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 24px; }`,
          `.framer-3WIOB .framer-rjl782, .framer-3WIOB .framer-1ar6943, .framer-3WIOB .framer-1mgmpci { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-3WIOB .framer-n2nrda, .framer-3WIOB .framer-9pdin9, .framer-3WIOB .framer-19c8ic9 { --border-bottom-width: 1px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #f0f0f0); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; background-color: var(--token-d292610c-87f6-4102-ac93-51fdf043bf78, #f0f0f0); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-3WIOB .framer-1nlt6vr, .framer-3WIOB .framer-1osis1v, .framer-3WIOB .framer-12jry3a { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-3WIOB .framer-1vaadg3, .framer-3WIOB .framer-2x3hw7, .framer-3WIOB .framer-p9jx07 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-3WIOB .framer-1h4zkgc, .framer-3WIOB .framer-xip16 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
          `.framer-3WIOB .framer-1oudy2g, .framer-3WIOB .framer-1w810i2, .framer-3WIOB .framer-1rm75v1, .framer-3WIOB .framer-lv4dc6, .framer-3WIOB .framer-179jpnq, .framer-3WIOB .framer-115upg4, .framer-3WIOB .framer-q2pvs7 { --border-bottom-width: 1px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #d9d9d9); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-74a21abb-ce20-4d02-81dc-502468462d7f, #f0f0f0); border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; box-shadow: 0px 0px 15px -10px var(--token-a81eb0b3-0303-4615-a8d4-302833bfff8d, #d9d9d9); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 3px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-3WIOB .framer-8uof0n, .framer-3WIOB .framer-1ld8ez7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-3WIOB .framer-9uxse9 { height: 17px; position: relative; width: 21px; }`,
          `.framer-3WIOB .framer-106x5ck { height: 17px; left: 0px; position: absolute; top: 0px; width: 21px; }`,
          `.framer-3WIOB .framer-bs5yid { height: 5px; left: 5px; position: absolute; top: 7px; width: 4px; }`,
          `.framer-3WIOB .framer-1op8i1v { height: 5px; left: 12px; position: absolute; top: 7px; width: 4px; }`,
          `.framer-3WIOB .framer-1k40m0t { height: 19px; position: relative; width: 22px; }`,
          `.framer-3WIOB .framer-392vtd { height: 9px; left: 10px; position: absolute; top: 6px; width: 10px; }`,
          `.framer-3WIOB .framer-s8yeiv { height: 19px; left: 0px; position: absolute; top: 0px; width: 22px; }`,
          `.framer-3WIOB .framer-88fgq4 { height: 6px; left: 11px; position: absolute; top: 8px; width: 6px; }`,
          `.framer-3WIOB .framer-1udi7yo { height: 20px; position: relative; width: 15px; }`,
          `.framer-3WIOB .framer-1a4pctk, .framer-3WIOB .framer-138cp68, .framer-3WIOB .framer-72g46r, .framer-3WIOB .framer-1vdzxv4 { height: 22px; position: relative; width: 22px; }`,
          `.framer-3WIOB .framer-1kubwc2 { height: 3px; left: 7px; position: absolute; top: 7px; width: 3px; }`,
          `.framer-3WIOB .framer-l4rvnc, .framer-3WIOB .framer-1548ojm, .framer-3WIOB .framer-f6mfwd, .framer-3WIOB .framer-1umgslw { height: 22px; left: 0px; position: absolute; top: 0px; width: 22px; }`,
          `.framer-3WIOB .framer-1pl86gm { height: 10px; left: 5px; position: absolute; top: 6px; width: 7px; }`,
          `.framer-3WIOB .framer-bqcim7 { height: 8px; left: 13px; position: absolute; top: 8px; width: 6px; }`,
          `.framer-3WIOB .framer-1ydv24j { height: 4px; left: 8px; position: absolute; top: 7px; width: 3px; }`,
          `.framer-3WIOB .framer-8izj5s { height: 10px; left: 5px; position: absolute; top: 6px; width: 9px; }`,
          `.framer-3WIOB .framer-1ueniq5 { height: 8px; left: 15px; position: absolute; top: 8px; width: 2px; }`,
          `.framer-3WIOB .framer-14x9w7g { height: 3px; left: 14px; position: absolute; top: 5px; width: 3px; }`,
          `.framer-3WIOB .framer-1fficux { height: 8px; left: 3px; position: absolute; top: 11px; width: 14px; }`,
          `.framer-3WIOB .framer-1qu38lq { height: 8px; left: 5px; position: absolute; top: 3px; width: 14px; }`,
          `.framer-3WIOB .framer-1wq06mr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-3WIOB .framer-1k57x4l-container { flex: none; height: 20px; position: relative; width: 20px; }`,
          `.framer-3WIOB .framer-1spuarl { --border-bottom-width: 1px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #d9d9d9); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-74a21abb-ce20-4d02-81dc-502468462d7f, #f2f2f2); border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: 0px 0px 15px -10px var(--token-a81eb0b3-0303-4615-a8d4-302833bfff8d, #595959); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 7px 4px 7px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
          `.framer-3WIOB .framer-175avyi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-3WIOB .framer-16fn4ba { height: 15px; left: 4px; position: absolute; top: 4px; width: 15px; }`,
          `.framer-3WIOB .framer-fx5bph { height: 5px; left: 9px; position: absolute; top: 9px; width: 5px; }`,
          `.framer-3WIOB .framer-t8v0gz, .framer-3WIOB .framer-llqf7b, .framer-3WIOB .framer-qoc87a { --border-bottom-width: 1px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #d9d9d9); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-74a21abb-ce20-4d02-81dc-502468462d7f, #f2f2f2); border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 3px 6px 3px 6px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-3WIOB .framer-okalni, .framer-3WIOB .framer-1qwvijh, .framer-3WIOB .framer-1cn84a4 { --1m973uw: var(--token-0be85e75-aa2c-4a98-8c45-d021ec27fa06, #000000); --js9iwy: 2; aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 14px; }`,
          `.framer-3WIOB .framer-xv4k64 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-3WIOB .framer-1wfjapi, .framer-3WIOB .framer-7i2ahl, .framer-3WIOB .framer-vm8k30, .framer-3WIOB .framer-104xu8y { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
          `.framer-3WIOB .framer-zd2w62, .framer-3WIOB .framer-1p55y91, .framer-3WIOB .framer-1ckox2 { --border-bottom-width: 1px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #f0f0f0); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-d292610c-87f6-4102-ac93-51fdf043bf78, #f0f0f0); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 13px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-3WIOB .framer-1j7y2zr, .framer-3WIOB .framer-7c5wx4, .framer-3WIOB .framer-1rvuj93 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-3WIOB .framer-pyugnn, .framer-3WIOB .framer-1o0o6va, .framer-3WIOB .framer-o7s35k { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-3WIOB .framer-2iiqs9, .framer-3WIOB .framer-swyurq, .framer-3WIOB .framer-1c8x0vs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 10px 0px 10px; position: relative; width: 100%; }`,
          `.framer-3WIOB .framer-1x6yy9v { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 100px 0px; position: relative; width: 100%; }`,
          `.framer-3WIOB .framer-1257f3n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-3WIOB .framer-1s0r061 { --border-bottom-width: 1px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #f0f0f0); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-d292610c-87f6-4102-ac93-51fdf043bf78, #f0f0f0); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 15px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-3WIOB .framer-14y04qq, .framer-3WIOB .framer-skr0rd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-3WIOB .framer-2cmg3b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-3WIOB .framer-12ukc7d, .framer-3WIOB .framer-9ifiz4 { height: 14px; position: relative; width: 13px; }`,
          `.framer-3WIOB .framer-7x9vba, .framer-3WIOB .framer-1mm56pa { height: 14px; left: 0px; position: absolute; top: 0px; width: 13px; }`,
          `.framer-3WIOB .framer-1t11u6e, .framer-3WIOB .framer-1fbmpqf { height: 12px; left: 1px; position: absolute; top: 1px; width: 11px; }`,
          `.framer-3WIOB .framer-1cy0ak, .framer-3WIOB .framer-912uc7 { height: 10px; left: 2px; position: absolute; top: 2px; width: 9px; }`,
          `.framer-3WIOB .framer-13l6usn, .framer-3WIOB .framer-1webfca { height: 3px; left: 5px; position: absolute; top: 5px; width: 4px; }`,
          `.framer-3WIOB .framer-190wvdg { --border-bottom-width: 1px; --border-color: var(--token-c201b295-7f38-49f1-a4d8-7b80568fb0fe, #f0f0f0); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; background-color: var(--token-d292610c-87f6-4102-ac93-51fdf043bf78, #f0f0f0); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 15px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-3WIOB .framer-kwbiv0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-3WIOB .framer-7fkjwa-container { flex: none; height: auto; position: relative; width: 100%; }`,
          ...fl,
          ...ko,
          ...cl,
          ...vc,
          ...gl,
          ...xo,
          `.framer-3WIOB[data-border="true"]::after, .framer-3WIOB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
          `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-3WIOB.framer-72rtr7 { width: 810px; } .framer-3WIOB .framer-1kphyw6 { padding: 0px 40px 0px 40px; width: 70%; } .framer-3WIOB .framer-1cftgkx { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: center; } .framer-3WIOB .framer-ytdcj5, .framer-3WIOB .framer-yeorrc, .framer-3WIOB .framer-p68axu, .framer-3WIOB .framer-1hw0j0p { align-self: unset; } .framer-3WIOB .framer-n2nrda, .framer-3WIOB .framer-1nlt6vr, .framer-3WIOB .framer-9pdin9, .framer-3WIOB .framer-1osis1v, .framer-3WIOB .framer-19c8ic9 { align-content: flex-start; align-items: flex-start; } .framer-3WIOB .framer-1h4zkgc, .framer-3WIOB .framer-xv4k64, .framer-3WIOB .framer-xip16, .framer-3WIOB .framer-1257f3n { flex-direction: column; } .framer-3WIOB .framer-1oudy2g, .framer-3WIOB .framer-1w810i2, .framer-3WIOB .framer-1rm75v1, .framer-3WIOB .framer-lv4dc6, .framer-3WIOB .framer-179jpnq, .framer-3WIOB .framer-115upg4, .framer-3WIOB .framer-q2pvs7 { flex: none; width: 100%; } .framer-3WIOB .framer-1k57x4l-container, .framer-3WIOB .framer-1f10new { order: 1; } .framer-3WIOB .framer-175avyi, .framer-3WIOB .framer-9ifiz4, .framer-3WIOB .framer-1plwh2e { order: 0; } .framer-3WIOB .framer-1wfjapi, .framer-3WIOB .framer-7i2ahl, .framer-3WIOB .framer-vm8k30, .framer-3WIOB .framer-104xu8y { flex: none; flex-direction: column; width: 100%; } .framer-3WIOB .framer-1mgmpci { align-content: flex-end; align-items: flex-end; order: 1; } .framer-3WIOB .framer-kwbiv0 { justify-content: flex-end; }}`,
          `@media (max-width: 809.98px) { .framer-3WIOB.framer-72rtr7 { width: 390px; } .framer-3WIOB .framer-1kphyw6 { padding: 0px 30px 0px 30px; width: 100%; } .framer-3WIOB .framer-1cftgkx { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: center; } .framer-3WIOB .framer-ytdcj5, .framer-3WIOB .framer-yeorrc, .framer-3WIOB .framer-p68axu, .framer-3WIOB .framer-1hw0j0p { align-self: unset; } .framer-3WIOB .framer-n2nrda, .framer-3WIOB .framer-1nlt6vr, .framer-3WIOB .framer-9pdin9, .framer-3WIOB .framer-1osis1v, .framer-3WIOB .framer-19c8ic9 { align-content: flex-start; align-items: flex-start; } .framer-3WIOB .framer-1h4zkgc, .framer-3WIOB .framer-xv4k64, .framer-3WIOB .framer-xip16, .framer-3WIOB .framer-1257f3n { flex-direction: column; } .framer-3WIOB .framer-1oudy2g, .framer-3WIOB .framer-1w810i2, .framer-3WIOB .framer-1rm75v1, .framer-3WIOB .framer-lv4dc6, .framer-3WIOB .framer-179jpnq, .framer-3WIOB .framer-115upg4, .framer-3WIOB .framer-q2pvs7 { flex: none; width: 100%; } .framer-3WIOB .framer-1k57x4l-container, .framer-3WIOB .framer-1f10new { order: 1; } .framer-3WIOB .framer-175avyi, .framer-3WIOB .framer-9ifiz4, .framer-3WIOB .framer-1plwh2e { order: 0; } .framer-3WIOB .framer-1wfjapi, .framer-3WIOB .framer-7i2ahl, .framer-3WIOB .framer-vm8k30, .framer-3WIOB .framer-104xu8y { flex: none; flex-direction: column; width: 100%; } .framer-3WIOB .framer-1mgmpci { align-content: flex-end; align-items: flex-end; order: 1; } .framer-3WIOB .framer-kwbiv0 { justify-content: flex-end; }}`,
        ],
        `framer-3WIOB`
      )),
      ($l.displayName = `Home`),
      ($l.defaultProps = { height: 2160, width: 1200 }),
      ke(
        $l,
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
          ...Tl,
          ...El,
          ...Dl,
          ...Ol,
          ...Al,
          ...jl,
          ...Nl,
          ...Fl,
          ...Ll,
          ...E(dl),
          ...E(Oo),
          ...E(sl),
          ...E(_c),
          ...E(hl),
          ...E(bo),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($l.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([Ae(Ys, {}, t), Ae(Fc, {}, t)])),
      }),
      (eu = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FrameraugiA20Il`,
            slots: [],
            annotations: {
              framerIntrinsicWidth: `1200`,
              framerResponsiveScreen: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"r0rfOgam0":{"layout":["fixed","auto"]},"nqsfvFaAc":{"layout":["fixed","auto"]}}}`,
              framerIntrinsicHeight: `2160`,
              framerDisplayContentsDiv: `false`,
              framerColorSyntax: `true`,
              framerAutoSizeImages: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerScrollSections: `{"PpqI0Bzwt":{"pattern":":PpqI0Bzwt","name":"top"},"yhfDy_p6a":{"pattern":":yhfDy_p6a","name":"contact"}}`,
              framerImmutableVariables: `true`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
async function nu(e, t, n) {
  let r = iu[e],
    i = r ? await r(t, n) : void 0,
    a = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] };
  for (let t of ru) {
    if (t.pageIds && !t.pageIds.has(e)) continue;
    let n = t.code(i);
    n && a[t.placement].push({ ...t, code: n });
  }
  return a;
}
var ru,
  iu,
  au,
  ou,
  su = t(() => {
    ((ru = [
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
      (iu = {}),
      (au = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [`X7WQKqfsI`] }),
      (ou = {
        exports: {
          snippetsSorting: { type: `variable`, annotations: { framerContractVersion: `1` } },
          getSnippets: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  cu,
  lu,
  uu,
  du = t(() => {
    (m(),
      g(),
      x(),
      (cu = () => (
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
      (lu = D(cu, [
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
      (uu = {
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
  fu = e({ __FramerMetadata__: () => uu, default: () => lu }),
  pu = t(() => {
    (du(), du());
  });
function mu() {
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
  return (t && (n = t === _u || t.endsWith(`.${_u}`)), n);
}
function hu(e) {
  return l((t, n) => {
    let r = u(vu, yu, bu),
      i = _e.current() === _e.canvas;
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
function gu(e) {
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
var _u,
  vu,
  yu,
  bu,
  xu = t(() => {
    (a(),
      m(),
      g(),
      x(),
      (_u = `framer.com`),
      (vu = () => () => {}),
      (yu = () => mu()),
      (bu = () => !1));
  }),
  Su,
  Cu,
  wu,
  Tu,
  Eu,
  Du,
  Ou,
  ku,
  Au = t(() => {
    (m(),
      x(),
      g(),
      (Su = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 97 10" xmlns="http://www.w3.org/2000/svg"><path d="M 91.736 9.781 L 91.736 2.818 L 93.316 2.818 L 93.316 3.98 L 93.374 3.98 C 93.501 3.577 93.714 3.269 94.014 3.053 C 94.328 2.833 94.704 2.72 95.087 2.729 C 95.185 2.729 95.287 2.733 95.392 2.742 C 95.498 2.75 95.587 2.759 95.659 2.767 L 95.659 4.253 C 95.552 4.23 95.444 4.215 95.335 4.209 C 95.188 4.192 95.039 4.184 94.891 4.184 C 94.603 4.184 94.343 4.247 94.11 4.374 C 93.882 4.497 93.702 4.674 93.57 4.907 C 93.434 5.16 93.366 5.445 93.374 5.732 L 93.374 9.782 L 91.736 9.782 Z M 87.286 9.927 C 86.588 9.927 85.985 9.779 85.477 9.483 C 84.969 9.183 84.577 8.761 84.303 8.22 C 84.032 7.678 83.897 7.048 83.897 6.328 C 83.897 5.618 84.032 4.988 84.303 4.443 C 84.56 3.917 84.96 3.475 85.458 3.167 C 85.953 2.858 86.531 2.704 87.191 2.704 C 87.64 2.704 88.059 2.78 88.448 2.932 C 88.841 3.08 89.186 3.305 89.482 3.605 C 89.779 3.901 90.009 4.272 90.174 4.715 C 90.344 5.155 90.428 5.67 90.428 6.258 L 90.428 6.748 L 84.627 6.748 L 84.627 5.629 L 89.609 5.629 L 88.86 5.946 C 88.868 5.594 88.801 5.243 88.664 4.918 C 88.549 4.641 88.355 4.404 88.105 4.238 C 87.86 4.074 87.559 3.991 87.204 3.991 C 86.852 3.991 86.55 4.074 86.296 4.239 C 86.042 4.404 85.847 4.629 85.712 4.912 C 85.576 5.213 85.509 5.54 85.515 5.87 L 85.515 6.62 C 85.515 7.047 85.587 7.413 85.731 7.717 C 85.879 8.017 86.089 8.248 86.359 8.409 C 86.63 8.566 86.948 8.644 87.312 8.644 C 87.562 8.644 87.786 8.608 87.984 8.536 C 88.177 8.467 88.353 8.356 88.499 8.212 C 88.642 8.072 88.749 7.906 88.816 7.711 L 90.326 7.921 C 90.228 8.313 90.032 8.673 89.756 8.968 C 89.476 9.268 89.125 9.503 88.702 9.672 C 88.282 9.842 87.811 9.926 87.286 9.926 Z M 72.643 9.781 L 72.643 2.818 L 74.191 2.818 L 74.235 4.443 L 74.115 4.443 C 74.225 4.041 74.385 3.713 74.597 3.459 C 74.798 3.212 75.055 3.016 75.347 2.888 C 75.63 2.761 75.928 2.698 76.241 2.698 C 76.753 2.698 77.177 2.854 77.511 3.167 C 77.849 3.48 78.074 3.922 78.184 4.494 L 77.987 4.494 C 78.066 4.132 78.232 3.795 78.469 3.51 C 78.691 3.248 78.972 3.041 79.289 2.907 C 79.615 2.766 79.968 2.695 80.323 2.697 C 80.746 2.697 81.127 2.79 81.465 2.977 C 81.808 3.159 82.077 3.429 82.272 3.789 C 82.47 4.149 82.57 4.591 82.57 5.116 L 82.57 9.781 L 80.939 9.781 L 80.939 5.363 C 80.939 4.923 80.818 4.602 80.577 4.398 C 80.333 4.19 80.021 4.08 79.701 4.088 C 79.434 4.088 79.204 4.145 79.009 4.258 C 78.816 4.371 78.66 4.536 78.559 4.735 C 78.449 4.953 78.394 5.195 78.399 5.439 L 78.399 9.781 L 76.813 9.781 L 76.813 5.287 C 76.813 4.923 76.698 4.633 76.47 4.417 C 76.246 4.197 75.958 4.087 75.606 4.087 C 75.366 4.087 75.143 4.145 74.94 4.259 C 74.737 4.374 74.569 4.543 74.458 4.748 C 74.339 4.963 74.28 5.23 74.28 5.548 L 74.28 9.781 L 72.642 9.781 Z M 67.291 9.915 C 66.724 9.915 66.221 9.771 65.781 9.483 C 65.344 9.191 65 8.776 64.746 8.239 C 64.496 7.701 64.371 7.059 64.371 6.309 C 64.371 5.552 64.498 4.904 64.752 4.367 C 65.01 3.829 65.359 3.419 65.799 3.135 C 66.244 2.851 66.763 2.703 67.291 2.71 C 67.668 2.71 67.987 2.771 68.25 2.894 C 68.516 3.013 68.736 3.164 68.91 3.351 C 69.083 3.533 69.22 3.719 69.322 3.91 L 69.38 3.91 L 69.38 2.818 L 70.998 2.818 L 70.998 9.781 L 69.38 9.781 L 69.38 8.696 L 69.322 8.696 C 69.211 8.908 69.07 9.102 68.903 9.273 C 68.726 9.46 68.503 9.614 68.237 9.737 C 67.938 9.863 67.615 9.923 67.291 9.915 Z M 67.723 8.563 C 68.078 8.563 68.383 8.469 68.637 8.283 C 68.901 8.079 69.101 7.804 69.215 7.49 C 69.35 7.147 69.418 6.751 69.418 6.303 C 69.418 5.85 69.35 5.456 69.214 5.123 C 69.103 4.811 68.902 4.539 68.637 4.341 C 68.387 4.155 68.083 4.062 67.723 4.062 C 67.363 4.062 67.058 4.155 66.809 4.342 C 66.559 4.528 66.369 4.788 66.237 5.122 C 66.107 5.456 66.041 5.85 66.041 6.302 C 66.041 6.752 66.106 7.145 66.237 7.483 C 66.369 7.822 66.559 8.086 66.809 8.277 C 67.063 8.467 67.367 8.563 67.723 8.563 Z M 59.909 9.781 L 59.909 2.818 L 61.489 2.818 L 61.489 3.98 L 61.546 3.98 C 61.673 3.577 61.887 3.269 62.188 3.053 C 62.488 2.837 62.846 2.729 63.26 2.729 C 63.358 2.729 63.46 2.733 63.565 2.742 C 63.671 2.75 63.76 2.759 63.832 2.767 L 63.832 4.253 C 63.725 4.23 63.617 4.215 63.508 4.209 C 63.361 4.192 63.212 4.184 63.064 4.184 C 62.776 4.184 62.516 4.247 62.283 4.374 C 62.054 4.497 61.875 4.674 61.743 4.907 C 61.607 5.16 61.539 5.445 61.546 5.732 L 61.546 9.782 L 59.909 9.782 Z M 52.647 9.781 L 52.647 0.323 L 58.804 0.323 L 58.804 1.758 L 54.336 1.758 L 54.336 4.513 L 58.411 4.513 L 58.411 5.928 L 54.336 5.928 L 54.336 9.781 Z M 43.265 5.744 L 43.265 9.781 L 41.628 9.781 L 41.628 2.818 L 43.195 2.818 L 43.215 4.551 L 43.024 4.551 C 43.223 3.946 43.517 3.489 43.906 3.18 C 44.296 2.867 44.78 2.71 45.36 2.71 C 45.842 2.71 46.263 2.814 46.623 3.021 C 46.987 3.228 47.268 3.531 47.467 3.929 C 47.67 4.322 47.772 4.805 47.772 5.376 L 47.772 9.781 L 46.141 9.781 L 46.141 5.63 C 46.141 5.147 46.018 4.775 45.773 4.513 C 45.531 4.246 45.195 4.113 44.763 4.113 C 44.475 4.113 44.217 4.176 43.989 4.303 C 43.762 4.429 43.576 4.619 43.456 4.849 C 43.329 5.09 43.266 5.389 43.266 5.744 Z M 38.353 9.781 L 38.353 2.818 L 39.99 2.818 L 39.99 9.781 L 38.352 9.781 Z M 39.171 1.815 C 38.919 1.821 38.675 1.728 38.491 1.555 C 38.31 1.389 38.208 1.153 38.212 0.907 C 38.208 0.663 38.31 0.43 38.492 0.267 C 38.674 0.091 38.918 -0.005 39.171 0 C 39.438 0 39.664 0.088 39.851 0.266 C 40.041 0.44 40.136 0.653 40.136 0.907 C 40.136 1.161 40.041 1.377 39.85 1.555 C 39.667 1.728 39.423 1.821 39.171 1.815 Z M 30.741 9.927 C 30.043 9.927 29.44 9.779 28.932 9.483 C 28.426 9.185 28.018 8.746 27.758 8.22 C 27.488 7.678 27.352 7.048 27.352 6.328 C 27.352 5.618 27.487 4.988 27.758 4.443 C 28.015 3.917 28.415 3.475 28.913 3.167 C 29.408 2.858 29.986 2.704 30.646 2.704 C 31.095 2.704 31.514 2.78 31.903 2.932 C 32.293 3.079 32.646 3.308 32.938 3.605 C 33.234 3.901 33.464 4.272 33.629 4.715 C 33.799 5.155 33.883 5.67 33.883 6.258 L 33.883 6.748 L 28.083 6.748 L 28.083 5.629 L 33.066 5.629 L 32.316 5.946 C 32.316 5.553 32.251 5.21 32.12 4.918 C 32.005 4.641 31.811 4.404 31.561 4.238 C 31.316 4.074 31.015 3.991 30.66 3.991 C 30.34 3.983 30.024 4.069 29.752 4.239 C 29.498 4.404 29.303 4.629 29.168 4.912 C 29.032 5.213 28.965 5.54 28.971 5.87 L 28.971 6.62 C 28.971 7.047 29.043 7.413 29.187 7.717 C 29.335 8.017 29.545 8.248 29.816 8.409 C 30.086 8.566 30.404 8.644 30.768 8.644 C 31.018 8.644 31.242 8.608 31.441 8.536 C 31.634 8.467 31.809 8.356 31.955 8.212 C 32.099 8.072 32.205 7.906 32.272 7.711 L 33.782 7.921 C 33.684 8.313 33.488 8.673 33.212 8.968 C 32.932 9.268 32.581 9.503 32.158 9.672 C 31.707 9.847 31.226 9.934 30.742 9.926 Z M 22.312 9.915 C 21.777 9.924 21.251 9.774 20.801 9.483 C 20.361 9.191 20.016 8.776 19.766 8.239 C 19.516 7.701 19.392 7.059 19.392 6.309 C 19.392 5.552 19.519 4.904 19.772 4.367 C 20.027 3.829 20.374 3.419 20.814 3.135 C 21.254 2.852 21.751 2.71 22.305 2.71 C 22.682 2.71 23.001 2.771 23.264 2.894 C 23.53 3.013 23.748 3.164 23.918 3.351 C 24.091 3.533 24.228 3.721 24.33 3.916 L 24.381 3.916 L 24.381 0.323 L 26.019 0.323 L 26.019 9.781 L 24.413 9.781 L 24.413 8.689 L 24.343 8.689 C 24.233 8.904 24.091 9.101 23.923 9.273 C 23.734 9.468 23.51 9.626 23.263 9.737 C 23.001 9.855 22.684 9.915 22.312 9.915 Z M 22.737 8.563 C 23.092 8.563 23.397 8.469 23.651 8.283 C 23.915 8.079 24.115 7.804 24.229 7.49 C 24.364 7.147 24.432 6.751 24.432 6.303 C 24.432 5.85 24.364 5.456 24.229 5.123 C 24.118 4.811 23.917 4.539 23.651 4.341 C 23.385 4.151 23.064 4.053 22.737 4.062 C 22.41 4.053 22.089 4.152 21.823 4.342 C 21.573 4.528 21.383 4.79 21.252 5.128 C 21.118 5.505 21.054 5.903 21.062 6.303 C 21.062 6.751 21.127 7.145 21.258 7.483 C 21.389 7.822 21.58 8.086 21.829 8.277 C 22.079 8.467 22.381 8.563 22.737 8.563 Z M 14.352 9.915 C 13.817 9.924 13.291 9.774 12.841 9.483 C 12.405 9.191 12.061 8.776 11.806 8.239 C 11.556 7.701 11.432 7.059 11.432 6.309 C 11.432 5.552 11.559 4.904 11.812 4.367 C 12.071 3.829 12.42 3.419 12.86 3.135 C 13.3 2.852 13.797 2.71 14.352 2.71 C 14.728 2.71 15.048 2.771 15.31 2.894 C 15.577 3.013 15.797 3.164 15.97 3.351 C 16.144 3.533 16.281 3.719 16.383 3.91 L 16.44 3.91 L 16.44 2.818 L 18.059 2.818 L 18.059 9.781 L 16.44 9.781 L 16.44 8.696 L 16.383 8.696 C 16.272 8.908 16.131 9.102 15.964 9.273 C 15.786 9.46 15.564 9.614 15.298 9.737 C 14.999 9.863 14.676 9.923 14.352 9.915 Z M 14.783 8.563 C 15.139 8.563 15.443 8.469 15.697 8.283 C 15.951 8.093 16.144 7.828 16.275 7.49 C 16.41 7.147 16.478 6.751 16.478 6.303 C 16.478 5.85 16.41 5.456 16.275 5.123 C 16.164 4.811 15.963 4.539 15.697 4.341 C 15.447 4.155 15.143 4.062 14.783 4.062 C 14.423 4.062 14.119 4.155 13.869 4.342 C 13.608 4.543 13.41 4.813 13.298 5.122 C 13.167 5.456 13.101 5.85 13.101 6.302 C 13.101 6.752 13.167 7.145 13.298 7.483 C 13.429 7.822 13.62 8.086 13.869 8.277 C 14.123 8.467 14.428 8.563 14.783 8.563 Z M 0 9.781 L 0 0.323 L 2.507 0.323 L 4.322 5.236 C 4.382 5.418 4.452 5.646 4.532 5.922 C 4.612 6.197 4.695 6.493 4.779 6.811 C 4.864 7.124 4.942 7.428 5.014 7.725 C 5.09 8.017 5.154 8.273 5.204 8.493 L 4.843 8.493 C 5.045 7.633 5.267 6.778 5.509 5.928 C 5.589 5.648 5.662 5.418 5.725 5.236 L 7.509 0.323 L 10.023 0.323 L 10.023 9.781 L 8.347 9.781 L 8.347 4.989 C 8.35 4.443 8.358 3.897 8.372 3.351 L 8.398 2.38 C 8.406 2.054 8.412 1.743 8.417 1.447 L 8.563 1.447 C 8.473 1.773 8.379 2.107 8.277 2.45 L 7.979 3.446 C 7.886 3.764 7.795 4.056 7.706 4.322 C 7.636 4.546 7.561 4.768 7.483 4.989 L 5.719 9.781 L 4.303 9.781 L 2.513 4.989 L 2.291 4.329 C 2.198 4.04 2.107 3.75 2.018 3.459 L 1.713 2.469 C 1.613 2.129 1.514 1.788 1.415 1.447 L 1.593 1.447 C 1.597 1.73 1.603 2.035 1.612 2.361 C 1.62 2.682 1.627 3.006 1.631 3.332 C 1.639 3.654 1.646 3.958 1.65 4.246 C 1.658 4.534 1.663 4.781 1.663 4.989 L 1.663 9.781 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="9.927205036163329px" id="LLqmOOyHA" transform="translate(0 -0.25)" width="95.65900006103517px"/></svg>'), var(--framer-icon-mask, none)`),
      (Cu = `alpha, var(--framer-icon-mask-mode, add)`),
      (wu = `no-repeat`),
      (Tu = `center`),
      (Eu = `auto`),
      (Du = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (Ou = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (ku = D(
        l(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: s,
            ...c
          } = Ou(e);
          return p(Du, {
            ...c,
            className: C(`framer-g7oZR`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-g7oZR { -webkit-mask-image: ${Su}; -webkit-mask-position: ${Tu}; -webkit-mask-repeat: ${wu}; -webkit-mask-size: ${Eu}; aspect-ratio: 9.7; background-color: var(--1bd4d3i); mask-image: ${Su}; mask-mode: ${Cu}; mask-position: ${Tu}; mask-repeat: ${wu}; mask-size: ${Eu}; width: 97px; }`,
        ],
        `framer-g7oZR`
      )),
      (ku.displayName = `Text`),
      A(ku, {
        Z1QnXqTEb: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: k.Color },
        vtL2DrqsL: { defaultValue: `rgb(0, 0, 0)`, hidden: !0, title: `Fill 2`, type: k.Color },
      }));
  }),
  ju,
  Mu,
  Nu,
  Pu,
  Fu,
  Iu,
  Lu,
  Ru,
  zu = t(() => {
    (m(),
      x(),
      g(),
      (ju = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 12 0 L 12 6 L 6 6 Z M 0 6 L 6 6 L 12 12 L 6 12 L 6 18 L 0 12 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="18px" id="td4SVg2I8" transform="translate(0 1.5)" width="12px"/></svg>'), var(--framer-icon-mask, none)`),
      (Mu = `alpha, var(--framer-icon-mask-mode, add)`),
      (Nu = `no-repeat`),
      (Pu = `center`),
      (Fu = `auto`),
      (Iu = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(y.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (Lu = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (Ru = D(
        l(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: s,
            ...c
          } = Lu(e);
          return p(Iu, {
            ...c,
            className: C(`framer-hcsc7`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-hcsc7 { -webkit-mask-image: ${ju}; -webkit-mask-position: ${Pu}; -webkit-mask-repeat: ${Nu}; -webkit-mask-size: ${Fu}; aspect-ratio: 0.6; background-color: var(--1bd4d3i); mask-image: ${ju}; mask-mode: ${Mu}; mask-position: ${Pu}; mask-repeat: ${Nu}; mask-size: ${Fu}; width: 12px; }`,
        ],
        `framer-hcsc7`
      )),
      (Ru.displayName = `Framer`),
      A(Ru, {
        Z1QnXqTEb: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: k.Color },
        vtL2DrqsL: { defaultValue: `rgb(0, 0, 0)`, hidden: !0, title: `Fill 2`, type: k.Color },
      }));
  }),
  Bu = e({ __FramerMetadata__: () => rd, default: () => nd }),
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
  ed,
  td,
  nd,
  rd,
  id = t(() => {
    (m(),
      x(),
      ie(),
      g(),
      xu(),
      Au(),
      zu(),
      (Vu = b(Ru)),
      (Hu = b(ku)),
      (Uu = we(ku, { nodeId: `pBR1Ew0r8`, override: gu, scopeId: `PX9hIOIVM` })),
      (Wu = he(ye(we(y.a, { nodeId: `HK2sXlagE`, override: hu, scopeId: `PX9hIOIVM` })))),
      (Gu = `framer-6jWyo`),
      (Ku = { HK2sXlagE: `framer-v-n0ccwk` }),
      (qu = {
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
      (Ju = {
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
      (Yu = { duration: 0, type: `tween` }),
      (Xu = (e, t) => `translate(-50%, -50%) ${t}`),
      (Zu = (e, t) => `translateX(-50%) ${t}`),
      (Qu = ({ value: e, children: t }) => {
        let r = n(te),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(te.Provider, { value: a, children: t });
      }),
      ($u = y.create(c)),
      (ed = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (td = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (nd = D(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = ae();
          se();
          let { style: c, className: l, layoutId: u, variant: d, ...f } = ed(e),
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
            } = fe({ defaultVariant: `HK2sXlagE`, ref: r, variant: d, variantClassNames: Ku }),
            x = td(e, oe),
            S = C(Gu);
          return p(re, {
            id: u ?? i,
            children: p($u, {
              animate: oe,
              initial: !1,
              children: p(Qu, {
                value: Yu,
                children: p(De, {
                  href: `https://www.framer.com`,
                  motionChild: !0,
                  nodeId: `HK2sXlagE`,
                  openInNewTab: !1,
                  relValues: [],
                  scopeId: `PX9hIOIVM`,
                  children: h(Wu, {
                    ...f,
                    ...v,
                    __framer__presenceAnimate: qu,
                    __framer__presenceInitial: Ju,
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
                        transformTemplate: Xu,
                        children: [
                          p(y.div, {
                            className: `framer-1kflzx5`,
                            layoutDependency: x,
                            layoutId: `roMJYXHnO`,
                            children: p(Ru, {
                              animated: !0,
                              className: `framer-e50co`,
                              "data-framer-name": `Logo`,
                              layoutDependency: x,
                              layoutId: `O3s3GcxMZ`,
                              style: { "--1bd4d3i": `rgb(0, 0, 0)`, "--otdjsv": `rgb(0, 0, 0)` },
                              transformTemplate: Zu,
                            }),
                          }),
                          p(Uu, {
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
      (nd.displayName = `Badge`),
      (nd.defaultProps = { height: 38, width: 140 }),
      ke(nd, [{ explicitInter: !0, fonts: [] }, ...Vu, ...Hu], {
        supportsExplicitInterCodegen: !0,
      }),
      (rd = {
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
  qo as _,
  ou as a,
  yo as b,
  au as c,
  tu as d,
  Bl as f,
  Sl as g,
  xl as h,
  pu as i,
  $l as l,
  wl as m,
  id as n,
  nu as o,
  Cl as p,
  fu as r,
  su as s,
  Bu as t,
  eu as u,
  Jo as v,
  vo as y,
};
//# sourceMappingURL=shared-lib.DofAvAFf.mjs.map
