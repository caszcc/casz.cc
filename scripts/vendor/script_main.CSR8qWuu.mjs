import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  L as n,
  M as r,
  N as i,
  O as a,
  P as o,
  R as s,
  S as c,
  d as l,
  g as u,
  h as d,
  i as f,
  m as p,
  n as m,
  o as h,
  r as g,
  t as _,
  v,
  w as y,
  z as b,
} from "./react.Dfbt0i5D.mjs";
import {
  $ as x,
  B as S,
  F as C,
  H as w,
  I as T,
  K as E,
  L as D,
  R as O,
  U as k,
  W as A,
  Y as j,
  d as M,
  dt as N,
  f as P,
  ft as F,
  i as I,
  l as L,
  rt as R,
  s as z,
} from "./framer.gUt6fAa6.mjs";
import { _ as B, v as V } from "./shared-lib.dJ51NCuE.mjs";
function H({ webPageId: e, children: t, style: n, ...r }) {
  let i = { augiA20Il: { gDUC70AIa: `#contact`, ZCuoFUPLw: `#top` } }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
      return l(B, { ...i, key: `NavbarYFooter`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function U(e) {
  switch (e) {
    case `augiA20Il`:
      return [
        { hash: `sri1x7`, mediaQuery: `(max-width: 809.98px)` },
        { hash: `19tkvcc`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `v7zdi2`, mediaQuery: `(min-width: 1200px)` },
      ];
    default:
      return;
  }
}
async function W({ routeId: e, pathVariables: n, localeId: s, collectionItemId: d }) {
  let p = q[e].page.preload();
  A({
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  });
  let m = l(M, {
    children: l(z, {
      children: l(P, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: n,
        routes: q,
        collectionUtils: Y,
        framerSiteId: X,
        notFoundPage: O(() => import(`./shared-lib.dJ51NCuE.mjs`).then((e) => (e.i(), e.r))),
        isReducedMotion: void 0,
        localeId: s,
        locales: J,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://predictable-example-711391.framer.app`,
        EditorBar:
          b === void 0
            ? void 0
            : (() => {
                if (Q) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return O(async () => {
                  b.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: j, useLocaleInfo: x, useRouter: R },
                    react: {
                      createElement: l,
                      Fragment: o,
                      memo: u,
                      useCallback: r,
                      useEffect: i,
                      useRef: a,
                      useState: t,
                      useLayoutEffect: c,
                    },
                    "react-dom": { createPortal: f },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        LayoutTemplate: H,
        loadSnippetsModule: new L(
          () => import(`./2L4tSr07jayBaltNNhUjK0qRx7X3tCt1yEcuDnaZBaw.D8QG7F2A.mjs`)
        ),
        initialCollectionItemId: d,
      }),
    }),
    value: { routes: {} },
  });
  return (await p, m);
}
function G() {
  Z && b.__framer_events.push(arguments);
}
async function K(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || b.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    G(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s;
    if (e)
      ((s = JSON.parse(t.dataset.framerHydrateV2)),
        (r = s.routeId),
        (i = s.localeId),
        (a = s.pathVariables),
        (o = s.breakpoints),
        (r = w(q, r)));
    else {
      w(q, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = C(q, decodeURIComponent(location.pathname), !0, J);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let c = W({ routeId: r, localeId: i, pathVariables: a, collectionItemId: s?.collectionItemId });
    b !== void 0 &&
      (async () => {
        let e = q[r],
          t = J.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && Y) {
          let r = await Y[e.collectionId]?.(),
            [i] = Object.values(a);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          c = o.timeZone,
          l = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          b.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: X,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: b.location.href,
              hostname: b.location.hostname || null,
              pathname: b.location.pathname || null,
              hash: b.location.hash || null,
              search: b.location.search || null,
              timezone: c,
              locale: l,
            },
            `eager`,
          ]),
          await F({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let l = await c;
    e
      ? (N(`framer-rewrite-breakpoints`, () => {
          (k(o), b.__framer_onRewriteBreakpoints?.(o));
        }),
        (Q ? (e) => e() : v)(() => {
          (S(), E(), _(t, l, { onRecoverableError: n }));
        }))
      : g(t, { onRecoverableError: n }).render(l);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var q, J, Y, X, Z, Q;
e(() => {
  if (
    (n(),
    D(),
    y(),
    h(),
    m(),
    V(),
    (q = {
      augiA20Il: {
        elements: { PpqI0Bzwt: `top`, yhfDy_p6a: `contact` },
        page: O(() => import(`./be2nQB644Am1H_8r3_8vWNyA1Miy2PCnsyrwBOrQavA.DWcghEq5.mjs`)),
        path: `/`,
      },
    }),
    (J = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (Y = {}),
    (X = `764aef8845a48a96debbde27d787ea151269ef02b362f306b658fafc784afdec`),
    (Z = typeof document < `u`),
    (Q = Z && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(s.userAgent)),
    Z)
  ) {
    ((b.__framer_importFromPackage = (e, t) => () =>
      l(I, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (b.__framer_events = b.__framer_events || []),
      T());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? K(!0, e) : K(!1, e);
  }
})();
export { U as getLayoutTemplateBreakpoints, W as getPageRoot };
//# sourceMappingURL=script_main.CSR8qWuu.mjs.map
