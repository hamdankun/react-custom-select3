import { f as Oe } from './index-ApWirIvn.js';
import { j as p } from './jsx-runtime-C6qLVRqm.js';
import { r as O } from './index-C2WPW1L7.js';
const ue = '-',
  Xe = (e) => {
    const r = Ne(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: t } = e;
    return {
      getClassGroupId: (l) => {
        const m = l.split(ue);
        return m[0] === '' && m.length !== 1 && m.shift(), Te(m, r) || Je(l);
      },
      getConflictingClassGroupIds: (l, m) => {
        const i = n[l] || [];
        return m && t[l] ? [...i, ...t[l]] : i;
      },
    };
  },
  Te = (e, r) => {
    var l;
    if (e.length === 0) return r.classGroupId;
    const n = e[0],
      t = r.nextPart.get(n),
      s = t ? Te(e.slice(1), t) : void 0;
    if (s) return s;
    if (r.validators.length === 0) return;
    const u = e.join(ue);
    return (l = r.validators.find(({ validator: m }) => m(u))) == null
      ? void 0
      : l.classGroupId;
  },
  he = /^\[(.+)\]$/,
  Je = (e) => {
    if (he.test(e)) {
      const r = he.exec(e)[1],
        n = r == null ? void 0 : r.substring(0, r.indexOf(':'));
      if (n) return 'arbitrary..' + n;
    }
  },
  Ne = (e) => {
    const { theme: r, classGroups: n } = e,
      t = { nextPart: new Map(), validators: [] };
    for (const s in n) le(n[s], t, s, r);
    return t;
  },
  le = (e, r, n, t) => {
    e.forEach((s) => {
      if (typeof s == 'string') {
        const u = s === '' ? r : be(r, s);
        u.classGroupId = n;
        return;
      }
      if (typeof s == 'function') {
        if (ze(s)) {
          le(s(t), r, n, t);
          return;
        }
        r.validators.push({ validator: s, classGroupId: n });
        return;
      }
      Object.entries(s).forEach(([u, l]) => {
        le(l, be(r, u), n, t);
      });
    });
  },
  be = (e, r) => {
    let n = e;
    return (
      r.split(ue).forEach((t) => {
        n.nextPart.has(t) ||
          n.nextPart.set(t, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(t));
      }),
      n
    );
  },
  ze = (e) => e.isThemeGetter,
  Me = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let r = 0,
      n = new Map(),
      t = new Map();
    const s = (u, l) => {
      n.set(u, l), r++, r > e && ((r = 0), (t = n), (n = new Map()));
    };
    return {
      get(u) {
        let l = n.get(u);
        if (l !== void 0) return l;
        if ((l = t.get(u)) !== void 0) return s(u, l), l;
      },
      set(u, l) {
        n.has(u) ? n.set(u, l) : s(u, l);
      },
    };
  },
  se = '!',
  ie = ':',
  Re = ie.length,
  We = (e) => {
    const { prefix: r, experimentalParseClassName: n } = e;
    let t = (s) => {
      const u = [];
      let l = 0,
        m = 0,
        i = 0,
        f;
      for (let x = 0; x < s.length; x++) {
        let q = s[x];
        if (l === 0 && m === 0) {
          if (q === ie) {
            u.push(s.slice(i, x)), (i = x + Re);
            continue;
          }
          if (q === '/') {
            f = x;
            continue;
          }
        }
        q === '[' ? l++ : q === ']' ? l-- : q === '(' ? m++ : q === ')' && m--;
      }
      const g = u.length === 0 ? s : s.substring(i),
        b = Ge(g),
        P = b !== g,
        X = f && f > i ? f - i : void 0;
      return {
        modifiers: u,
        hasImportantModifier: P,
        baseClassName: b,
        maybePostfixModifierPosition: X,
      };
    };
    if (r) {
      const s = r + ie,
        u = t;
      t = (l) =>
        l.startsWith(s)
          ? u(l.substring(s.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: l,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (n) {
      const s = t;
      t = (u) => n({ className: u, parseClassName: s });
    }
    return t;
  },
  Ge = (e) =>
    e.endsWith(se)
      ? e.substring(0, e.length - 1)
      : e.startsWith(se)
        ? e.substring(1)
        : e,
  _e = (e) => {
    const r = Object.fromEntries(e.orderSensitiveModifiers.map((t) => [t, !0]));
    return (t) => {
      if (t.length <= 1) return t;
      const s = [];
      let u = [];
      return (
        t.forEach((l) => {
          l[0] === '[' || r[l] ? (s.push(...u.sort(), l), (u = [])) : u.push(l);
        }),
        s.push(...u.sort()),
        s
      );
    };
  },
  Be = (e) => ({
    cache: Me(e.cacheSize),
    parseClassName: We(e),
    sortModifiers: _e(e),
    ...Xe(e),
  }),
  Fe = /\s+/,
  $e = (e, r) => {
    const {
        parseClassName: n,
        getClassGroupId: t,
        getConflictingClassGroupIds: s,
        sortModifiers: u,
      } = r,
      l = [],
      m = e.trim().split(Fe);
    let i = '';
    for (let f = m.length - 1; f >= 0; f -= 1) {
      const g = m[f],
        {
          isExternal: b,
          modifiers: P,
          hasImportantModifier: X,
          baseClassName: x,
          maybePostfixModifierPosition: q,
        } = n(g);
      if (b) {
        i = g + (i.length > 0 ? ' ' + i : i);
        continue;
      }
      let A = !!q,
        C = t(A ? x.substring(0, q) : x);
      if (!C) {
        if (!A) {
          i = g + (i.length > 0 ? ' ' + i : i);
          continue;
        }
        if (((C = t(x)), !C)) {
          i = g + (i.length > 0 ? ' ' + i : i);
          continue;
        }
        A = !1;
      }
      const I = u(P).join(':'),
        J = X ? I + se : I,
        V = J + C;
      if (l.includes(V)) continue;
      l.push(V);
      const E = s(C, A);
      for (let y = 0; y < E.length; ++y) {
        const W = E[y];
        l.push(J + W);
      }
      i = g + (i.length > 0 ? ' ' + i : i);
    }
    return i;
  };
function He() {
  let e = 0,
    r,
    n,
    t = '';
  for (; e < arguments.length; )
    (r = arguments[e++]) && (n = Se(r)) && (t && (t += ' '), (t += n));
  return t;
}
const Se = (e) => {
  if (typeof e == 'string') return e;
  let r,
    n = '';
  for (let t = 0; t < e.length; t++)
    e[t] && (r = Se(e[t])) && (n && (n += ' '), (n += r));
  return n;
};
function Ue(e, ...r) {
  let n,
    t,
    s,
    u = l;
  function l(i) {
    const f = r.reduce((g, b) => b(g), e());
    return (n = Be(f)), (t = n.cache.get), (s = n.cache.set), (u = m), m(i);
  }
  function m(i) {
    const f = t(i);
    if (f) return f;
    const g = $e(i, n);
    return s(i, g), g;
  }
  return function () {
    return u(He.apply(null, arguments));
  };
}
const w = (e) => {
    const r = (n) => n[e] || [];
    return (r.isThemeGetter = !0), r;
  },
  xe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  ke = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Ze = /^\d+\/\d+$/,
  Ke = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Qe =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Ye = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  er = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  rr =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  _ = (e) => Ze.test(e),
  c = (e) => !!e && !Number.isNaN(Number(e)),
  M = (e) => !!e && Number.isInteger(Number(e)),
  fe = (e) => e.endsWith('%') && c(e.slice(0, -1)),
  D = (e) => Ke.test(e),
  nr = () => !0,
  tr = (e) => Qe.test(e) && !Ye.test(e),
  pe = () => !1,
  or = (e) => er.test(e),
  ar = (e) => rr.test(e),
  lr = (e) => !o(e) && !a(e),
  sr = (e) => F(e, Pe, pe),
  o = (e) => xe.test(e),
  R = (e) => F(e, Ee, tr),
  ae = (e) => F(e, yr, c),
  ir = (e) => F(e, qe, pe),
  ur = (e) => F(e, Le, ar),
  pr = (e) => F(e, pe, or),
  a = (e) => ke.test(e),
  ee = (e) => $(e, Ee),
  dr = (e) => $(e, wr),
  cr = (e) => $(e, qe),
  mr = (e) => $(e, Pe),
  gr = (e) => $(e, Le),
  hr = (e) => $(e, vr, !0),
  F = (e, r, n) => {
    const t = xe.exec(e);
    return t ? (t[1] ? r(t[1]) : n(t[2])) : !1;
  },
  $ = (e, r, n = !1) => {
    const t = ke.exec(e);
    return t ? (t[1] ? r(t[1]) : n) : !1;
  },
  qe = (e) => e === 'position',
  br = new Set(['image', 'url']),
  Le = (e) => br.has(e),
  fr = new Set(['length', 'size', 'percentage']),
  Pe = (e) => fr.has(e),
  Ee = (e) => e === 'length',
  yr = (e) => e === 'number',
  wr = (e) => e === 'family-name',
  vr = (e) => e === 'shadow',
  Tr = () => {
    const e = w('color'),
      r = w('font'),
      n = w('text'),
      t = w('font-weight'),
      s = w('tracking'),
      u = w('leading'),
      l = w('breakpoint'),
      m = w('container'),
      i = w('spacing'),
      f = w('radius'),
      g = w('shadow'),
      b = w('inset-shadow'),
      P = w('drop-shadow'),
      X = w('blur'),
      x = w('perspective'),
      q = w('aspect'),
      A = w('ease'),
      C = w('animate'),
      I = () => [
        'auto',
        'avoid',
        'all',
        'avoid-page',
        'page',
        'left',
        'right',
        'column',
      ],
      J = () => [
        'bottom',
        'center',
        'left',
        'left-bottom',
        'left-top',
        'right',
        'right-bottom',
        'right-top',
        'top',
      ],
      V = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      E = () => ['auto', 'contain', 'none'],
      y = () => [_, 'px', 'full', 'auto', a, o, i],
      W = () => [M, 'none', 'subgrid', a, o],
      N = () => ['auto', { span: ['full', M, a, o] }, a, o],
      G = () => [M, 'auto', a, o],
      U = () => ['auto', 'min', 'max', 'fr', a, o],
      H = () => [a, o, i],
      k = () => [
        'start',
        'end',
        'center',
        'between',
        'around',
        'evenly',
        'stretch',
        'baseline',
      ],
      T = () => ['start', 'end', 'center', 'stretch'],
      d = () => [a, o, i],
      v = () => ['px', ...d()],
      j = () => ['px', 'auto', ...d()],
      z = () => [
        _,
        'auto',
        'px',
        'full',
        'dvw',
        'dvh',
        'lvw',
        'lvh',
        'svw',
        'svh',
        'min',
        'max',
        'fit',
        a,
        o,
        i,
      ],
      h = () => [e, a, o],
      te = () => [fe, R],
      S = () => ['', 'none', 'full', f, a, o],
      L = () => ['', c, ee, R],
      Z = () => ['solid', 'dashed', 'dotted', 'double'],
      ce = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      me = () => ['', 'none', X, a, o],
      ge = () => [
        'center',
        'top',
        'top-right',
        'right',
        'bottom-right',
        'bottom',
        'bottom-left',
        'left',
        'top-left',
        a,
        o,
      ],
      K = () => ['none', c, a, o],
      Q = () => ['none', c, a, o],
      oe = () => [c, a, o],
      Y = () => [_, 'full', 'px', a, o, i];
    return {
      cacheSize: 500,
      theme: {
        animate: ['spin', 'ping', 'pulse', 'bounce'],
        aspect: ['video'],
        blur: [D],
        breakpoint: [D],
        color: [nr],
        container: [D],
        'drop-shadow': [D],
        ease: ['in', 'out', 'in-out'],
        font: [lr],
        'font-weight': [
          'thin',
          'extralight',
          'light',
          'normal',
          'medium',
          'semibold',
          'bold',
          'extrabold',
          'black',
        ],
        'inset-shadow': [D],
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
        perspective: [
          'dramatic',
          'near',
          'normal',
          'midrange',
          'distant',
          'none',
        ],
        radius: [D],
        shadow: [D],
        spacing: [c],
        text: [D],
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', _, o, a, q] }],
        container: ['container'],
        columns: [{ columns: [c, o, a, m] }],
        'break-after': [{ 'break-after': I() }],
        'break-before': [{ 'break-before': I() }],
        'break-inside': [
          { 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] },
        ],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        sr: ['sr-only', 'not-sr-only'],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [
          { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
        ],
        'object-position': [{ object: [...J(), o, a] }],
        overflow: [{ overflow: V() }],
        'overflow-x': [{ 'overflow-x': V() }],
        'overflow-y': [{ 'overflow-y': V() }],
        overscroll: [{ overscroll: E() }],
        'overscroll-x': [{ 'overscroll-x': E() }],
        'overscroll-y': [{ 'overscroll-y': E() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: y() }],
        'inset-x': [{ 'inset-x': y() }],
        'inset-y': [{ 'inset-y': y() }],
        start: [{ start: y() }],
        end: [{ end: y() }],
        top: [{ top: y() }],
        right: [{ right: y() }],
        bottom: [{ bottom: y() }],
        left: [{ left: y() }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: [M, 'auto', a, o] }],
        basis: [{ basis: [_, 'full', 'auto', a, o, m, i] }],
        'flex-direction': [
          { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
        ],
        'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
        flex: [{ flex: [c, _, 'auto', 'initial', 'none', o] }],
        grow: [{ grow: ['', c, a, o] }],
        shrink: [{ shrink: ['', c, a, o] }],
        order: [{ order: [M, 'first', 'last', 'none', a, o] }],
        'grid-cols': [{ 'grid-cols': W() }],
        'col-start-end': [{ col: N() }],
        'col-start': [{ 'col-start': G() }],
        'col-end': [{ 'col-end': G() }],
        'grid-rows': [{ 'grid-rows': W() }],
        'row-start-end': [{ row: N() }],
        'row-start': [{ 'row-start': G() }],
        'row-end': [{ 'row-end': G() }],
        'grid-flow': [
          { 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] },
        ],
        'auto-cols': [{ 'auto-cols': U() }],
        'auto-rows': [{ 'auto-rows': U() }],
        gap: [{ gap: H() }],
        'gap-x': [{ 'gap-x': H() }],
        'gap-y': [{ 'gap-y': H() }],
        'justify-content': [{ justify: [...k(), 'normal'] }],
        'justify-items': [{ 'justify-items': [...T(), 'normal'] }],
        'justify-self': [{ 'justify-self': ['auto', ...T()] }],
        'align-content': [{ content: ['normal', ...k()] }],
        'align-items': [{ items: [...T(), 'baseline'] }],
        'align-self': [{ self: ['auto', ...T(), 'baseline'] }],
        'place-content': [{ 'place-content': k() }],
        'place-items': [{ 'place-items': [...T(), 'baseline'] }],
        'place-self': [{ 'place-self': ['auto', ...T()] }],
        p: [{ p: v() }],
        px: [{ px: v() }],
        py: [{ py: v() }],
        ps: [{ ps: v() }],
        pe: [{ pe: v() }],
        pt: [{ pt: v() }],
        pr: [{ pr: v() }],
        pb: [{ pb: v() }],
        pl: [{ pl: v() }],
        m: [{ m: j() }],
        mx: [{ mx: j() }],
        my: [{ my: j() }],
        ms: [{ ms: j() }],
        me: [{ me: j() }],
        mt: [{ mt: j() }],
        mr: [{ mr: j() }],
        mb: [{ mb: j() }],
        ml: [{ ml: j() }],
        'space-x': [{ 'space-x': d() }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': d() }],
        'space-y-reverse': ['space-y-reverse'],
        size: [{ size: z() }],
        w: [{ w: [m, 'screen', ...z()] }],
        'min-w': [{ 'min-w': [m, 'screen', 'none', ...z()] }],
        'max-w': [
          { 'max-w': [m, 'screen', 'none', 'prose', { screen: [l] }, ...z()] },
        ],
        h: [{ h: ['screen', ...z()] }],
        'min-h': [{ 'min-h': ['screen', 'none', ...z()] }],
        'max-h': [{ 'max-h': ['screen', ...z()] }],
        'font-size': [{ text: ['base', n, ee, R] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [{ font: [t, a, ae] }],
        'font-stretch': [
          {
            'font-stretch': [
              'ultra-condensed',
              'extra-condensed',
              'condensed',
              'semi-condensed',
              'normal',
              'semi-expanded',
              'expanded',
              'extra-expanded',
              'ultra-expanded',
              fe,
              o,
            ],
          },
        ],
        'font-family': [{ font: [dr, o, r] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
        tracking: [{ tracking: [s, a, o] }],
        'line-clamp': [{ 'line-clamp': [c, 'none', a, ae] }],
        leading: [{ leading: [a, o, u, i] }],
        'list-image': [{ 'list-image': ['none', a, o] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'list-style-type': [{ list: ['disc', 'decimal', 'none', a, o] }],
        'text-alignment': [
          { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
        ],
        'placeholder-color': [{ placeholder: h() }],
        'text-color': [{ text: h() }],
        'text-decoration': [
          'underline',
          'overline',
          'line-through',
          'no-underline',
        ],
        'text-decoration-style': [{ decoration: [...Z(), 'wavy'] }],
        'text-decoration-thickness': [
          { decoration: [c, 'from-font', 'auto', a, R] },
        ],
        'text-decoration-color': [{ decoration: h() }],
        'underline-offset': [{ 'underline-offset': [c, 'auto', a, o] }],
        'text-transform': [
          'uppercase',
          'lowercase',
          'capitalize',
          'normal-case',
        ],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: ['px', ...d()] }],
        'vertical-align': [
          {
            align: [
              'baseline',
              'top',
              'middle',
              'bottom',
              'text-top',
              'text-bottom',
              'sub',
              'super',
              a,
              o,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              'normal',
              'nowrap',
              'pre',
              'pre-line',
              'pre-wrap',
              'break-spaces',
            ],
          },
        ],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', a, o] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: [...J(), cr, ir] }],
        'bg-repeat': [
          { bg: ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }] },
        ],
        'bg-size': [{ bg: ['auto', 'cover', 'contain', mr, sr] }],
        'bg-image': [
          {
            bg: [
              'none',
              {
                linear: [
                  { to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
                  M,
                  a,
                  o,
                ],
                radial: ['', a, o],
                conic: [M, a, o],
              },
              gr,
              ur,
            ],
          },
        ],
        'bg-color': [{ bg: h() }],
        'gradient-from-pos': [{ from: te() }],
        'gradient-via-pos': [{ via: te() }],
        'gradient-to-pos': [{ to: te() }],
        'gradient-from': [{ from: h() }],
        'gradient-via': [{ via: h() }],
        'gradient-to': [{ to: h() }],
        rounded: [{ rounded: S() }],
        'rounded-s': [{ 'rounded-s': S() }],
        'rounded-e': [{ 'rounded-e': S() }],
        'rounded-t': [{ 'rounded-t': S() }],
        'rounded-r': [{ 'rounded-r': S() }],
        'rounded-b': [{ 'rounded-b': S() }],
        'rounded-l': [{ 'rounded-l': S() }],
        'rounded-ss': [{ 'rounded-ss': S() }],
        'rounded-se': [{ 'rounded-se': S() }],
        'rounded-ee': [{ 'rounded-ee': S() }],
        'rounded-es': [{ 'rounded-es': S() }],
        'rounded-tl': [{ 'rounded-tl': S() }],
        'rounded-tr': [{ 'rounded-tr': S() }],
        'rounded-br': [{ 'rounded-br': S() }],
        'rounded-bl': [{ 'rounded-bl': S() }],
        'border-w': [{ border: L() }],
        'border-w-x': [{ 'border-x': L() }],
        'border-w-y': [{ 'border-y': L() }],
        'border-w-s': [{ 'border-s': L() }],
        'border-w-e': [{ 'border-e': L() }],
        'border-w-t': [{ 'border-t': L() }],
        'border-w-r': [{ 'border-r': L() }],
        'border-w-b': [{ 'border-b': L() }],
        'border-w-l': [{ 'border-l': L() }],
        'divide-x': [{ 'divide-x': L() }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': L() }],
        'divide-y-reverse': ['divide-y-reverse'],
        'border-style': [{ border: [...Z(), 'hidden', 'none'] }],
        'divide-style': [{ divide: [...Z(), 'hidden', 'none'] }],
        'border-color': [{ border: h() }],
        'border-color-x': [{ 'border-x': h() }],
        'border-color-y': [{ 'border-y': h() }],
        'border-color-s': [{ 'border-s': h() }],
        'border-color-e': [{ 'border-e': h() }],
        'border-color-t': [{ 'border-t': h() }],
        'border-color-r': [{ 'border-r': h() }],
        'border-color-b': [{ 'border-b': h() }],
        'border-color-l': [{ 'border-l': h() }],
        'divide-color': [{ divide: h() }],
        'outline-style': [{ outline: [...Z(), 'none', 'hidden'] }],
        'outline-offset': [{ 'outline-offset': [c, a, o] }],
        'outline-w': [{ outline: ['', c, ee, R] }],
        'outline-color': [{ outline: [e] }],
        shadow: [{ shadow: ['', 'none', g, hr, pr] }],
        'shadow-color': [{ shadow: h() }],
        'inset-shadow': [{ 'inset-shadow': ['none', a, o, b] }],
        'inset-shadow-color': [{ 'inset-shadow': h() }],
        'ring-w': [{ ring: L() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: h() }],
        'ring-offset-w': [{ 'ring-offset': [c, R] }],
        'ring-offset-color': [{ 'ring-offset': h() }],
        'inset-ring-w': [{ 'inset-ring': L() }],
        'inset-ring-color': [{ 'inset-ring': h() }],
        opacity: [{ opacity: [c, a, o] }],
        'mix-blend': [
          { 'mix-blend': [...ce(), 'plus-darker', 'plus-lighter'] },
        ],
        'bg-blend': [{ 'bg-blend': ce() }],
        filter: [{ filter: ['', 'none', a, o] }],
        blur: [{ blur: me() }],
        brightness: [{ brightness: [c, a, o] }],
        contrast: [{ contrast: [c, a, o] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', P, a, o] }],
        grayscale: [{ grayscale: ['', c, a, o] }],
        'hue-rotate': [{ 'hue-rotate': [c, a, o] }],
        invert: [{ invert: ['', c, a, o] }],
        saturate: [{ saturate: [c, a, o] }],
        sepia: [{ sepia: ['', c, a, o] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none', a, o] }],
        'backdrop-blur': [{ 'backdrop-blur': me() }],
        'backdrop-brightness': [{ 'backdrop-brightness': [c, a, o] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [c, a, o] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': ['', c, a, o] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [c, a, o] }],
        'backdrop-invert': [{ 'backdrop-invert': ['', c, a, o] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [c, a, o] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [c, a, o] }],
        'backdrop-sepia': [{ 'backdrop-sepia': ['', c, a, o] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': d() }],
        'border-spacing-x': [{ 'border-spacing-x': d() }],
        'border-spacing-y': [{ 'border-spacing-y': d() }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [
          {
            transition: [
              '',
              'all',
              'colors',
              'opacity',
              'shadow',
              'transform',
              'none',
              a,
              o,
            ],
          },
        ],
        'transition-behavior': [{ transition: ['normal', 'discrete'] }],
        duration: [{ duration: [c, 'initial', a, o] }],
        ease: [{ ease: ['linear', 'initial', A, a, o] }],
        delay: [{ delay: [c, a, o] }],
        animate: [{ animate: ['none', C, a, o] }],
        backface: [{ backface: ['hidden', 'visible'] }],
        perspective: [{ perspective: [x, a, o] }],
        'perspective-origin': [{ 'perspective-origin': ge() }],
        rotate: [{ rotate: K() }],
        'rotate-x': [{ 'rotate-x': K() }],
        'rotate-y': [{ 'rotate-y': K() }],
        'rotate-z': [{ 'rotate-z': K() }],
        scale: [{ scale: Q() }],
        'scale-x': [{ 'scale-x': Q() }],
        'scale-y': [{ 'scale-y': Q() }],
        'scale-z': [{ 'scale-z': Q() }],
        'scale-3d': ['scale-3d'],
        skew: [{ skew: oe() }],
        'skew-x': [{ 'skew-x': oe() }],
        'skew-y': [{ 'skew-y': oe() }],
        transform: [{ transform: [a, o, '', 'none', 'gpu', 'cpu'] }],
        'transform-origin': [{ origin: ge() }],
        'transform-style': [{ transform: ['3d', 'flat'] }],
        translate: [{ translate: Y() }],
        'translate-x': [{ 'translate-x': Y() }],
        'translate-y': [{ 'translate-y': Y() }],
        'translate-z': [{ 'translate-z': Y() }],
        'translate-none': ['translate-none'],
        accent: [{ accent: h() }],
        appearance: [{ appearance: ['none', 'auto'] }],
        'caret-color': [{ caret: h() }],
        'color-scheme': [
          {
            scheme: [
              'normal',
              'dark',
              'light',
              'light-dark',
              'only-dark',
              'only-light',
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              a,
              o,
            ],
          },
        ],
        'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
        'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
        resize: [{ resize: ['none', '', 'y', 'x'] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': d() }],
        'scroll-mx': [{ 'scroll-mx': d() }],
        'scroll-my': [{ 'scroll-my': d() }],
        'scroll-ms': [{ 'scroll-ms': d() }],
        'scroll-me': [{ 'scroll-me': d() }],
        'scroll-mt': [{ 'scroll-mt': d() }],
        'scroll-mr': [{ 'scroll-mr': d() }],
        'scroll-mb': [{ 'scroll-mb': d() }],
        'scroll-ml': [{ 'scroll-ml': d() }],
        'scroll-p': [{ 'scroll-p': d() }],
        'scroll-px': [{ 'scroll-px': d() }],
        'scroll-py': [{ 'scroll-py': d() }],
        'scroll-ps': [{ 'scroll-ps': d() }],
        'scroll-pe': [{ 'scroll-pe': d() }],
        'scroll-pt': [{ 'scroll-pt': d() }],
        'scroll-pr': [{ 'scroll-pr': d() }],
        'scroll-pb': [{ 'scroll-pb': d() }],
        'scroll-pl': [{ 'scroll-pl': d() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [
          { 'will-change': ['auto', 'scroll', 'contents', 'transform', a, o] },
        ],
        fill: [{ fill: ['none', ...h()] }],
        'stroke-w': [{ stroke: [c, ee, R, ae] }],
        stroke: [{ stroke: ['none', ...h()] }],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: [
          'inset-x',
          'inset-y',
          'start',
          'end',
          'top',
          'right',
          'bottom',
          'left',
        ],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': [
          'fvn-ordinal',
          'fvn-slashed-zero',
          'fvn-figure',
          'fvn-spacing',
          'fvn-fraction',
        ],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        translate: ['translate-x', 'translate-y', 'translate-none'],
        'translate-none': [
          'translate',
          'translate-x',
          'translate-y',
          'translate-z',
        ],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
      orderSensitiveModifiers: [
        'before',
        'after',
        'placeholder',
        'file',
        'marker',
        'selection',
        'first-line',
        'first-letter',
        'backdrop',
        '*',
        '**',
      ],
    };
  },
  B = Ue(Tr),
  je = ({ optionLabel: e, labelClassName: r }) =>
    e
      ? p.jsx('label', {
          htmlFor: 'dropdown',
          className: B('flex-[1] mt-1', r),
          children: e,
        })
      : null;
je.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'DropdownLabel',
  props: {
    optionLabel: { required: !1, tsType: { name: 'string' }, description: '' },
    labelClassName: {
      required: !1,
      tsType: { name: 'string' },
      description: '',
    },
  },
};
const Sr = () =>
    p.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: 1.5,
      stroke: 'currentColor',
      className: 'size-4',
      children: p.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        d: 'm19.5 8.25-7.5 7.5-7.5-7.5',
        className: 'text-gray-800',
      }),
    }),
  xr = () =>
    p.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: 1.5,
      stroke: 'currentColor',
      className: 'size-5',
      children: p.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        d: 'm9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
        className: 'text-gray-800',
      }),
    }),
  Ce = ({ items: e, handleDelete: r }) =>
    p.jsx('div', {
      className: 'flex gap-2 flex-wrap',
      children: e.map((n, t) =>
        p.jsxs(
          'div',
          {
            className: 'bg-gray-100 p-1.5 rounded-full flex items-center gap-2',
            children: [
              p.jsx('span', { className: 'text-gray-600', children: n.label }),
              p.jsx('button', {
                className: 'cursor-pointer',
                onClick: (s) => r(s, t),
                children: p.jsx(xr, {}),
              }),
            ],
          },
          t,
        ),
      ),
    });
Ce.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'DropdownMultipleSelectedItem',
  props: {
    items: {
      required: !0,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'signature',
            type: 'object',
            raw: '{ label: string; value: T }',
            signature: {
              properties: [
                { key: 'label', value: { name: 'string', required: !0 } },
                { key: 'value', value: { name: 'T', required: !0 } },
              ],
            },
          },
        ],
        raw: 'Array<SelectValue<T>>',
      },
      description: '',
    },
    handleDelete: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(e: React.MouseEvent<HTMLButtonElement>, index: number) => void',
        signature: {
          arguments: [
            {
              type: {
                name: 'ReactMouseEvent',
                raw: 'React.MouseEvent<HTMLButtonElement>',
                elements: [{ name: 'HTMLButtonElement' }],
              },
              name: 'e',
            },
            { type: { name: 'number' }, name: 'index' },
          ],
          return: { name: 'void' },
        },
      },
      description: '',
    },
  },
};
const de = (e) => {
    const r = Object.keys(e || {});
    return !r.includes('label') || !r.includes('value') ? null : e;
  },
  ne = (e) => (Array.isArray(e) ? e : []),
  kr = (e, r, n) => (!r && !n ? (e ? [] : null) : n || r),
  qr = (e, r) => (e ? ne(r).length <= 0 : !de(r)),
  Ve = ({ placeholder: e }) =>
    p.jsx('span', { className: 'text-gray-400 select-none', children: e });
Ve.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'DropdownPlaceholder',
  props: {
    placeholder: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
const Ae = ({
  multiple: e,
  outlined: r,
  value: n,
  placeholder: t,
  toggleDropdown: s,
  onDelete: u,
}) => {
  const l = de(n),
    m = ne(n);
  return p.jsxs('div', {
    className: B(
      'input-container border border-gray-200 rounded-sm p-1 cursor-pointer flex justify-between items-center gap-3',
      r && 'outlined-active bg-gray-200',
    ),
    onClick: () => s((i) => !i),
    children: [
      p.jsxs('div', {
        children: [
          qr(e, n) && p.jsx(Ve, { placeholder: t }),
          !e && l && p.jsx('span', { children: l == null ? void 0 : l.label }),
          e && m.length > 0 && p.jsx(Ce, { items: m, handleDelete: u }),
        ],
      }),
      p.jsx(Sr, {}),
    ],
  });
};
Ae.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'DropdownSelectedItem',
  props: {
    multiple: { required: !0, tsType: { name: 'boolean' }, description: '' },
    outlined: { required: !0, tsType: { name: 'boolean' }, description: '' },
    value: {
      required: !1,
      tsType: {
        name: 'union',
        raw: 'Array<SelectValue<T>> | SelectValue<T> | null',
        elements: [
          {
            name: 'Array',
            elements: [
              {
                name: 'signature',
                type: 'object',
                raw: '{ label: string; value: T }',
                signature: {
                  properties: [
                    { key: 'label', value: { name: 'string', required: !0 } },
                    { key: 'value', value: { name: 'T', required: !0 } },
                  ],
                },
              },
            ],
            raw: 'Array<SelectValue<T>>',
          },
          {
            name: 'signature',
            type: 'object',
            raw: '{ label: string; value: T }',
            signature: {
              properties: [
                { key: 'label', value: { name: 'string', required: !0 } },
                { key: 'value', value: { name: 'T', required: !0 } },
              ],
            },
          },
          { name: 'null' },
        ],
      },
      description: '',
    },
    placeholder: { required: !1, tsType: { name: 'string' }, description: '' },
    toggleDropdown: {
      required: !0,
      tsType: {
        name: 'ReactDispatch',
        raw: 'React.Dispatch<React.SetStateAction<boolean>>',
        elements: [
          {
            name: 'ReactSetStateAction',
            raw: 'React.SetStateAction<boolean>',
            elements: [{ name: 'boolean' }],
          },
        ],
      },
      description: '',
    },
    onDelete: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(e: React.MouseEvent<HTMLButtonElement>, index: number) => void',
        signature: {
          arguments: [
            {
              type: {
                name: 'ReactMouseEvent',
                raw: 'React.MouseEvent<HTMLButtonElement>',
                elements: [{ name: 'HTMLButtonElement' }],
              },
              name: 'e',
            },
            { type: { name: 'number' }, name: 'index' },
          ],
          return: { name: 'void' },
        },
      },
      description: '',
    },
  },
};
const Lr = () =>
    p.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: 1.5,
      stroke: 'currentColor',
      className: 'size-5',
      children: p.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        d: 'm21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z',
        className: 'text-gray-400',
      }),
    }),
  Pr = () =>
    p.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      className: 'size-5',
      children: p.jsx('path', {
        fillRule: 'evenodd',
        d: 'M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z',
        clipRule: 'evenodd',
      }),
    }),
  Er = (e, r) => {
    const n = r.trim().toLowerCase();
    return n
      ? e == null
        ? void 0
        : e.filter((t) => t.label.toLowerCase().includes(n))
      : e;
  },
  jr = (e, r) => {
    if (!r.trim()) return e;
    const n = new RegExp(`(${r})`, 'gi');
    return e
      .split(n)
      .map((s, u) =>
        n.test(s)
          ? p.jsx('span', { className: 'bg-teal-100', children: s }, u)
          : s,
      );
  },
  Ie = ({
    withSearch: e,
    show: r,
    options: n,
    handleSelect: t,
    isSelected: s,
    dropdownClassName: u,
    DropdownOptionComponent: l,
  }) => {
    const [m, i] = O.useState(''),
      f = (b) => {
        i(b.currentTarget.value);
      },
      g = Er(n, m);
    return (
      O.useEffect(() => {
        r || i('');
      }, [r]),
      r
        ? p.jsxs('div', {
            className: B(
              'dropdown border border-gray-200 absolute z-[2000] mt-2 w-full',
              u,
            ),
            children: [
              e &&
                p.jsxs('div', {
                  className:
                    'flex border-b border-gray-200 p-2 items-center gap-2 justify-between',
                  children: [
                    p.jsxs('div', {
                      className: 'flex gap-2 items-center w-full',
                      children: [
                        p.jsx(Lr, {}),
                        p.jsx('input', {
                          className: 'outline-0 w-full',
                          placeholder: 'Search...',
                          onChange: f,
                          value: m,
                        }),
                      ],
                    }),
                    m !== '' &&
                      p.jsx('button', {
                        onClick: () => i(''),
                        className: 'cursor-pointer',
                        children: p.jsx(Pr, {}),
                      }),
                  ],
                }),
              p.jsxs('ul', {
                className: 'overflow-hidden',
                children: [
                  !(g != null && g.length) &&
                    p.jsx('li', {
                      className: 'text-center text-gray-400 p-1.5',
                      children: 'No Option',
                    }),
                  g == null
                    ? void 0
                    : g.map((b, P) =>
                        p.jsx(
                          'li',
                          {
                            className: B(
                              'cursor-pointer p-1.5 hover:bg-teal-50 truncate',
                              s(b == null ? void 0 : b.value, P) &&
                                'bg-teal-50',
                            ),
                            onClick: () => t(b),
                            children: l
                              ? p.jsx(l, { item: b, index: P, onSelect: t })
                              : jr(b == null ? void 0 : b.label, m),
                          },
                          `${b == null ? void 0 : b.value}-${P}`,
                        ),
                      ),
                ],
              }),
            ],
          })
        : null
    );
  };
Ie.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'DropdownOptions',
  props: {
    withSearch: { required: !0, tsType: { name: 'boolean' }, description: '' },
    show: { required: !0, tsType: { name: 'boolean' }, description: '' },
    options: {
      required: !0,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'signature',
            type: 'object',
            raw: '{ label: string; value: T }',
            signature: {
              properties: [
                { key: 'label', value: { name: 'string', required: !0 } },
                { key: 'value', value: { name: 'T', required: !0 } },
              ],
            },
          },
        ],
        raw: 'Array<SelectValue<T>>',
      },
      description: '',
    },
    handleSelect: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(option: SelectValue<T>) => void',
        signature: {
          arguments: [
            {
              type: {
                name: 'signature',
                type: 'object',
                raw: '{ label: string; value: T }',
                signature: {
                  properties: [
                    { key: 'label', value: { name: 'string', required: !0 } },
                    { key: 'value', value: { name: 'T', required: !0 } },
                  ],
                },
              },
              name: 'option',
            },
          ],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    isSelected: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(selected: T, index: number) => boolean',
        signature: {
          arguments: [
            { type: { name: 'T' }, name: 'selected' },
            { type: { name: 'number' }, name: 'index' },
          ],
          return: { name: 'boolean' },
        },
      },
      description: '',
    },
    dropdownClassName: {
      required: !1,
      tsType: { name: 'string' },
      description: '',
    },
    DropdownOptionComponent: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(props: DropdownOptionProps<T>) => JSX.Element',
        signature: {
          arguments: [
            {
              type: {
                name: 'signature',
                type: 'object',
                raw: `{
  item: SelectValue<T>;
  index: number;
  onSelect: (option: SelectValue<T>) => void;
}`,
                signature: {
                  properties: [
                    {
                      key: 'item',
                      value: {
                        name: 'signature',
                        type: 'object',
                        raw: '{ label: string; value: T }',
                        signature: {
                          properties: [
                            {
                              key: 'label',
                              value: { name: 'string', required: !0 },
                            },
                            {
                              key: 'value',
                              value: { name: 'T', required: !0 },
                            },
                          ],
                        },
                        required: !0,
                      },
                    },
                    { key: 'index', value: { name: 'number', required: !0 } },
                    {
                      key: 'onSelect',
                      value: {
                        name: 'signature',
                        type: 'function',
                        raw: '(option: SelectValue<T>) => void',
                        signature: {
                          arguments: [
                            {
                              type: {
                                name: 'signature',
                                type: 'object',
                                raw: '{ label: string; value: T }',
                                signature: {
                                  properties: [
                                    {
                                      key: 'label',
                                      value: { name: 'string', required: !0 },
                                    },
                                    {
                                      key: 'value',
                                      value: { name: 'T', required: !0 },
                                    },
                                  ],
                                },
                                required: !0,
                              },
                              name: 'option',
                            },
                          ],
                          return: { name: 'void' },
                        },
                        required: !0,
                      },
                    },
                  ],
                },
              },
              name: 'props',
            },
          ],
          return: { name: 'JSX.Element' },
        },
      },
      description: '',
    },
  },
};
const Cr = (e, r) => {
    const n = (t) => {
      e.current && !e.current.contains(t.target) && r();
    };
    O.useEffect(
      () => (
        document.addEventListener('mousedown', n),
        () => {
          document.removeEventListener('mousedown', n);
        }
      ),
      [],
    );
  },
  Vr = (e, r, n, t) => {
    O.useEffect(() => {
      t(r);
    }, [r]),
      O.useEffect(() => {
        t(kr(n, e, r));
      }, []);
  },
  De = (e) => {
    const r = O.useRef(null),
      {
        id: n,
        optionLabel: t,
        placeholder: s,
        options: u,
        multiple: l = !0,
        withSearch: m = !0,
        outlined: i = !1,
        defaultOpen: f = !1,
        onChange: g,
        containerClassName: b,
        labelClassName: P,
        dropdownClassName: X,
        value: x,
        defaultValue: q,
        components: A,
      } = e,
      {
        Dropdown: C,
        DropdownLabel: I,
        DropdownOption: J,
        DropdownSelectedItem: V,
      } = A || {},
      [E, y] = O.useState(),
      [W, N] = O.useState(f),
      G = (k) => {
        var T, d;
        return l
          ? (d = ne(E)) == null
            ? void 0
            : d.some((v) => v.value === k)
          : ((T = de(E)) == null ? void 0 : T.value) === k;
      };
    Cr(r, () => N(!1)), Vr(q, x, l, y);
    const U = (k) => {
        if (!l) {
          y(k), g == null || g(k), N(!1);
          return;
        }
        const T = ne(E),
          d = T.find((v) => v.value === k.value)
            ? T.filter((v) => v.value !== k.value)
            : [...T, k];
        y(d), g == null || g(d);
      },
      H = (k, T) => {
        k.stopPropagation(),
          N(!1),
          y((d) => (d == null ? void 0 : d.filter((v, j) => j !== T)));
      };
    return p.jsxs('div', {
      className: B(
        'flex gap-3 items-start relative',
        l && 'select-multiple',
        b,
      ),
      id: n,
      children: [
        I
          ? p.jsx(I, { innerProps: { ...e } })
          : p.jsx(je, { optionLabel: t, labelClassName: P }),
        p.jsx('div', {
          className: B(
            'relative flex flex-col gap-2 w-full',
            !!t && 'flex-[6]',
          ),
          ref: r,
          children: p.jsxs('div', {
            className: 'absolute w-full',
            children: [
              V
                ? p.jsx(V, { innerProps: { ...e } })
                : p.jsx(Ae, {
                    multiple: l,
                    outlined: i,
                    onDelete: H,
                    placeholder: s,
                    toggleDropdown: N,
                    value: E,
                  }),
              C
                ? p.jsx(C, { innerProps: { ...e } })
                : p.jsx(Ie, {
                    withSearch: m,
                    show: W,
                    options: u,
                    handleSelect: U,
                    isSelected: G,
                    dropdownClassName: X,
                    DropdownOptionComponent: J,
                  }),
            ],
          }),
        }),
      ],
    });
  };
De.__docgenInfo = {
  description: `A customizable dropdown select component that supports both single and multiple selection.

@template T - The type of the value stored in the options
@param props - The component props
@param props.id - Optional unique identifier for the select dropdown
@param props.optionLabel - Optional label text to display above the dropdown
@param props.placeholder - Placeholder text when no option is selected
@param props.options - Array of options to display in the dropdown
@param props.multiple - Whether to allow multiple selections (defaults to true)
@param props.defaultOpen - Whether the dropdown is open by default
@param props.withSearch - Whether to include search functionality (defaults to true)
@param props.onChange - Callback fired when selection changes
@param props.containerClassName - Additional CSS classes for the container
@param props.labelClassName - Additional CSS classes for the label
@param props.dropdownClassName - Additional CSS classes for the dropdown menu
@param props.value - Controlled value of the select
@param props.defaultValue - Default value when uncontrolled
@param props.components - Custom components for the dropdown

@returns A React component that renders a customizable select dropdown`,
  methods: [],
  displayName: 'SelectDropdown',
  props: {
    id: {
      required: !1,
      tsType: { name: 'string' },
      description: 'The id of the component.',
    },
    multiple: {
      required: !1,
      tsType: { name: 'boolean' },
      description: 'Whether the dropdown allows multiple selections.',
    },
    defaultOpen: {
      required: !1,
      tsType: { name: 'boolean' },
      description: 'Whether the dropdown is open by default.',
    },
    withSearch: {
      required: !1,
      tsType: { name: 'boolean' },
      description: 'Whether the dropdown has a search input.',
    },
    options: {
      required: !0,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'signature',
            type: 'object',
            raw: '{ label: string; value: T }',
            signature: {
              properties: [
                { key: 'label', value: { name: 'string', required: !0 } },
                { key: 'value', value: { name: 'T', required: !0 } },
              ],
            },
          },
        ],
        raw: 'Array<SelectValue<T>>',
      },
      description: 'The options to display in the dropdown.',
    },
    optionLabel: {
      required: !1,
      tsType: { name: 'string' },
      description: 'The label for the dropdown.',
    },
    outlined: {
      required: !1,
      tsType: { name: 'boolean' },
      description: 'Whether the dropdown is outlined.',
    },
    onChange: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: Array<SelectValue<T>> | SelectValue<T>) => void',
        signature: {
          arguments: [
            {
              type: {
                name: 'union',
                raw: 'Array<SelectValue<T>> | SelectValue<T>',
                elements: [
                  {
                    name: 'Array',
                    elements: [
                      {
                        name: 'signature',
                        type: 'object',
                        raw: '{ label: string; value: T }',
                        signature: {
                          properties: [
                            {
                              key: 'label',
                              value: { name: 'string', required: !0 },
                            },
                            {
                              key: 'value',
                              value: { name: 'T', required: !0 },
                            },
                          ],
                        },
                      },
                    ],
                    raw: 'Array<SelectValue<T>>',
                  },
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{ label: string; value: T }',
                    signature: {
                      properties: [
                        {
                          key: 'label',
                          value: { name: 'string', required: !0 },
                        },
                        { key: 'value', value: { name: 'T', required: !0 } },
                      ],
                    },
                  },
                ],
              },
              name: 'value',
            },
          ],
          return: { name: 'void' },
        },
      },
      description:
        'event handler for the `onChange` event of the component.\n@param value\n@returns',
    },
    placeholder: {
      required: !1,
      tsType: { name: 'string' },
      description: 'The placeholder for the dropdown.',
    },
    defaultValue: {
      required: !1,
      tsType: {
        name: 'union',
        raw: 'Array<SelectValue<T>> | SelectValue<T> | null',
        elements: [
          {
            name: 'Array',
            elements: [
              {
                name: 'signature',
                type: 'object',
                raw: '{ label: string; value: T }',
                signature: {
                  properties: [
                    { key: 'label', value: { name: 'string', required: !0 } },
                    { key: 'value', value: { name: 'T', required: !0 } },
                  ],
                },
              },
            ],
            raw: 'Array<SelectValue<T>>',
          },
          {
            name: 'signature',
            type: 'object',
            raw: '{ label: string; value: T }',
            signature: {
              properties: [
                { key: 'label', value: { name: 'string', required: !0 } },
                { key: 'value', value: { name: 'T', required: !0 } },
              ],
            },
          },
          { name: 'null' },
        ],
      },
      description: 'The default value of the dropdown.',
    },
    value: {
      required: !1,
      tsType: {
        name: 'union',
        raw: 'Array<SelectValue<T>> | SelectValue<T> | null',
        elements: [
          {
            name: 'Array',
            elements: [
              {
                name: 'signature',
                type: 'object',
                raw: '{ label: string; value: T }',
                signature: {
                  properties: [
                    { key: 'label', value: { name: 'string', required: !0 } },
                    { key: 'value', value: { name: 'T', required: !0 } },
                  ],
                },
              },
            ],
            raw: 'Array<SelectValue<T>>',
          },
          {
            name: 'signature',
            type: 'object',
            raw: '{ label: string; value: T }',
            signature: {
              properties: [
                { key: 'label', value: { name: 'string', required: !0 } },
                { key: 'value', value: { name: 'T', required: !0 } },
              ],
            },
          },
          { name: 'null' },
        ],
      },
      description: 'The value of the dropdown.',
    },
    containerClassName: {
      required: !1,
      tsType: { name: 'string' },
      description: 'The class name for the container of the component.',
    },
    labelClassName: {
      required: !1,
      tsType: { name: 'string' },
      description: 'The class name for the label of the component.',
    },
    dropdownClassName: {
      required: !1,
      tsType: { name: 'string' },
      description: 'The class name for the dropdown of the component.',
    },
    components: {
      required: !1,
      tsType: {
        name: 'Partial',
        elements: [
          {
            name: 'signature',
            type: 'object',
            raw: `{
  DropdownLabel: (props: InnerProps<T>) => JSX.Element;
  DropdownSelectedItem: (props: InnerProps<T>) => JSX.Element;
  Dropdown: (props: InnerProps<T>) => JSX.Element;
  DropdownOption: (props: DropdownOptionProps<T>) => JSX.Element;
}`,
            signature: {
              properties: [
                {
                  key: 'DropdownLabel',
                  value: {
                    name: 'signature',
                    type: 'function',
                    raw: '(props: InnerProps<T>) => JSX.Element',
                    signature: {
                      arguments: [
                        {
                          type: {
                            name: 'signature',
                            type: 'object',
                            raw: `{
  innerProps: SelectDropdownProps<T>;
}`,
                            signature: {
                              properties: [
                                {
                                  key: 'innerProps',
                                  value: {
                                    name: 'signature',
                                    type: 'object',
                                    raw: `{
  /**
   * The id of the component.
   */
  id?: string;
  /**
   * Whether the dropdown allows multiple selections.
   */
  multiple?: boolean;

  /**
   * Whether the dropdown is open by default.
   */
  defaultOpen?: boolean;

  /**
   * Whether the dropdown has a search input.
   */
  withSearch?: boolean;
  /**
   * The options to display in the dropdown.
   */
  options: Array<SelectValue<T>>;
  /**
   * The label for the dropdown.
   */
  optionLabel?: string;
  /**
   * Whether the dropdown is outlined.
   */
  outlined?: boolean;
  /**
   * event handler for the \`onChange\` event of the component.
   * @param value
   * @returns
   */
  onChange?: (value: Array<SelectValue<T>> | SelectValue<T>) => void;
  /**
   * The placeholder for the dropdown.
   */
  placeholder?: string;
  /**
   * The default value of the dropdown.
   */
  defaultValue?: Array<SelectValue<T>> | SelectValue<T> | null;
  /**
   *  The value of the dropdown.
   */
  value?: Array<SelectValue<T>> | SelectValue<T> | null;

  /**
   * The class name for the container of the component.
   */
  containerClassName?: string;

  /**
   * The class name for the label of the component.
   */
  labelClassName?: string;

  /**
   * The class name for the dropdown of the component.
   */
  dropdownClassName?: string;

  /**
   * Custom components for the dropdown.
   */
  components?: Partial<{
    DropdownLabel: (props: InnerProps<T>) => JSX.Element;
    DropdownSelectedItem: (props: InnerProps<T>) => JSX.Element;
    Dropdown: (props: InnerProps<T>) => JSX.Element;
    DropdownOption: (props: DropdownOptionProps<T>) => JSX.Element;
  }>;
}`,
                                    signature: {
                                      properties: [
                                        {
                                          key: 'id',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                          description:
                                            'The id of the component.',
                                        },
                                        {
                                          key: 'multiple',
                                          value: {
                                            name: 'boolean',
                                            required: !1,
                                          },
                                          description:
                                            'Whether the dropdown allows multiple selections.',
                                        },
                                        {
                                          key: 'defaultOpen',
                                          value: {
                                            name: 'boolean',
                                            required: !1,
                                          },
                                          description:
                                            'Whether the dropdown is open by default.',
                                        },
                                        {
                                          key: 'withSearch',
                                          value: {
                                            name: 'boolean',
                                            required: !1,
                                          },
                                          description:
                                            'Whether the dropdown has a search input.',
                                        },
                                        {
                                          key: 'options',
                                          value: {
                                            name: 'Array',
                                            elements: [
                                              {
                                                name: 'signature',
                                                type: 'object',
                                                raw: '{ label: string; value: T }',
                                                signature: {
                                                  properties: [
                                                    {
                                                      key: 'label',
                                                      value: {
                                                        name: 'string',
                                                        required: !0,
                                                      },
                                                    },
                                                    {
                                                      key: 'value',
                                                      value: {
                                                        name: 'T',
                                                        required: !0,
                                                      },
                                                    },
                                                  ],
                                                },
                                                required: !0,
                                              },
                                            ],
                                            raw: 'Array<SelectValue<T>>',
                                            required: !0,
                                          },
                                          description:
                                            'The options to display in the dropdown.',
                                        },
                                        {
                                          key: 'optionLabel',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                          description:
                                            'The label for the dropdown.',
                                        },
                                        {
                                          key: 'outlined',
                                          value: {
                                            name: 'boolean',
                                            required: !1,
                                          },
                                          description:
                                            'Whether the dropdown is outlined.',
                                        },
                                        {
                                          key: 'onChange',
                                          value: {
                                            name: 'signature',
                                            type: 'function',
                                            raw: '(value: Array<SelectValue<T>> | SelectValue<T>) => void',
                                            signature: {
                                              arguments: [
                                                {
                                                  type: {
                                                    name: 'union',
                                                    raw: 'Array<SelectValue<T>> | SelectValue<T>',
                                                    elements: [
                                                      {
                                                        name: 'Array',
                                                        elements: [
                                                          {
                                                            name: 'signature',
                                                            type: 'object',
                                                            raw: '{ label: string; value: T }',
                                                            signature: {
                                                              properties: [
                                                                {
                                                                  key: 'label',
                                                                  value: {
                                                                    name: 'string',
                                                                    required:
                                                                      !0,
                                                                  },
                                                                },
                                                                {
                                                                  key: 'value',
                                                                  value: {
                                                                    name: 'T',
                                                                    required:
                                                                      !0,
                                                                  },
                                                                },
                                                              ],
                                                            },
                                                            required: !0,
                                                          },
                                                        ],
                                                        raw: 'Array<SelectValue<T>>',
                                                      },
                                                      {
                                                        name: 'signature',
                                                        type: 'object',
                                                        raw: '{ label: string; value: T }',
                                                        signature: {
                                                          properties: [
                                                            {
                                                              key: 'label',
                                                              value: {
                                                                name: 'string',
                                                                required: !0,
                                                              },
                                                            },
                                                            {
                                                              key: 'value',
                                                              value: {
                                                                name: 'T',
                                                                required: !0,
                                                              },
                                                            },
                                                          ],
                                                        },
                                                        required: !0,
                                                      },
                                                    ],
                                                  },
                                                  name: 'value',
                                                },
                                              ],
                                              return: { name: 'void' },
                                            },
                                            required: !1,
                                          },
                                          description:
                                            'event handler for the `onChange` event of the component.\n@param value\n@returns',
                                        },
                                        {
                                          key: 'placeholder',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                          description:
                                            'The placeholder for the dropdown.',
                                        },
                                        {
                                          key: 'defaultValue',
                                          value: {
                                            name: 'union',
                                            raw: 'Array<SelectValue<T>> | SelectValue<T> | null',
                                            elements: [
                                              {
                                                name: 'Array',
                                                elements: [
                                                  {
                                                    name: 'signature',
                                                    type: 'object',
                                                    raw: '{ label: string; value: T }',
                                                    signature: {
                                                      properties: [
                                                        {
                                                          key: 'label',
                                                          value: {
                                                            name: 'string',
                                                            required: !0,
                                                          },
                                                        },
                                                        {
                                                          key: 'value',
                                                          value: {
                                                            name: 'T',
                                                            required: !0,
                                                          },
                                                        },
                                                      ],
                                                    },
                                                    required: !0,
                                                  },
                                                ],
                                                raw: 'Array<SelectValue<T>>',
                                              },
                                              {
                                                name: 'signature',
                                                type: 'object',
                                                raw: '{ label: string; value: T }',
                                                signature: {
                                                  properties: [
                                                    {
                                                      key: 'label',
                                                      value: {
                                                        name: 'string',
                                                        required: !0,
                                                      },
                                                    },
                                                    {
                                                      key: 'value',
                                                      value: {
                                                        name: 'T',
                                                        required: !0,
                                                      },
                                                    },
                                                  ],
                                                },
                                                required: !0,
                                              },
                                              { name: 'null' },
                                            ],
                                            required: !1,
                                          },
                                          description:
                                            'The default value of the dropdown.',
                                        },
                                        {
                                          key: 'value',
                                          value: {
                                            name: 'union',
                                            raw: 'Array<SelectValue<T>> | SelectValue<T> | null',
                                            elements: [
                                              {
                                                name: 'Array',
                                                elements: [
                                                  {
                                                    name: 'signature',
                                                    type: 'object',
                                                    raw: '{ label: string; value: T }',
                                                    signature: {
                                                      properties: [
                                                        {
                                                          key: 'label',
                                                          value: {
                                                            name: 'string',
                                                            required: !0,
                                                          },
                                                        },
                                                        {
                                                          key: 'value',
                                                          value: {
                                                            name: 'T',
                                                            required: !0,
                                                          },
                                                        },
                                                      ],
                                                    },
                                                    required: !0,
                                                  },
                                                ],
                                                raw: 'Array<SelectValue<T>>',
                                              },
                                              {
                                                name: 'signature',
                                                type: 'object',
                                                raw: '{ label: string; value: T }',
                                                signature: {
                                                  properties: [
                                                    {
                                                      key: 'label',
                                                      value: {
                                                        name: 'string',
                                                        required: !0,
                                                      },
                                                    },
                                                    {
                                                      key: 'value',
                                                      value: {
                                                        name: 'T',
                                                        required: !0,
                                                      },
                                                    },
                                                  ],
                                                },
                                                required: !0,
                                              },
                                              { name: 'null' },
                                            ],
                                            required: !1,
                                          },
                                          description:
                                            'The value of the dropdown.',
                                        },
                                        {
                                          key: 'containerClassName',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                          description:
                                            'The class name for the container of the component.',
                                        },
                                        {
                                          key: 'labelClassName',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                          description:
                                            'The class name for the label of the component.',
                                        },
                                        {
                                          key: 'dropdownClassName',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                          description:
                                            'The class name for the dropdown of the component.',
                                        },
                                        {
                                          key: 'components',
                                          value: {
                                            name: 'Partial',
                                            elements: [
                                              {
                                                name: 'signature',
                                                type: 'object',
                                                raw: `{
  DropdownLabel: (props: InnerProps<T>) => JSX.Element;
  DropdownSelectedItem: (props: InnerProps<T>) => JSX.Element;
  Dropdown: (props: InnerProps<T>) => JSX.Element;
  DropdownOption: (props: DropdownOptionProps<T>) => JSX.Element;
}`,
                                                signature: {
                                                  properties: [
                                                    {
                                                      key: 'DropdownLabel',
                                                      value: {
                                                        name: 'signature',
                                                        type: 'function',
                                                        raw: '(props: InnerProps<T>) => JSX.Element',
                                                        signature: {
                                                          arguments: [
                                                            {
                                                              type: {
                                                                name: 'InnerProps',
                                                              },
                                                              name: 'props',
                                                            },
                                                          ],
                                                          return: {
                                                            name: 'JSX.Element',
                                                          },
                                                        },
                                                        required: !0,
                                                      },
                                                    },
                                                    {
                                                      key: 'DropdownSelectedItem',
                                                      value: {
                                                        name: 'signature',
                                                        type: 'function',
                                                        raw: '(props: InnerProps<T>) => JSX.Element',
                                                        signature: {
                                                          arguments: [
                                                            {
                                                              type: {
                                                                name: 'InnerProps',
                                                              },
                                                              name: 'props',
                                                            },
                                                          ],
                                                          return: {
                                                            name: 'JSX.Element',
                                                          },
                                                        },
                                                        required: !0,
                                                      },
                                                    },
                                                    {
                                                      key: 'Dropdown',
                                                      value: {
                                                        name: 'signature',
                                                        type: 'function',
                                                        raw: '(props: InnerProps<T>) => JSX.Element',
                                                        signature: {
                                                          arguments: [
                                                            {
                                                              type: {
                                                                name: 'InnerProps',
                                                              },
                                                              name: 'props',
                                                            },
                                                          ],
                                                          return: {
                                                            name: 'JSX.Element',
                                                          },
                                                        },
                                                        required: !0,
                                                      },
                                                    },
                                                    {
                                                      key: 'DropdownOption',
                                                      value: {
                                                        name: 'signature',
                                                        type: 'function',
                                                        raw: '(props: DropdownOptionProps<T>) => JSX.Element',
                                                        signature: {
                                                          arguments: [
                                                            {
                                                              type: {
                                                                name: 'signature',
                                                                type: 'object',
                                                                raw: `{
  item: SelectValue<T>;
  index: number;
  onSelect: (option: SelectValue<T>) => void;
}`,
                                                                signature: {
                                                                  properties: [
                                                                    {
                                                                      key: 'item',
                                                                      value: {
                                                                        name: 'signature',
                                                                        type: 'object',
                                                                        raw: '{ label: string; value: T }',
                                                                        signature:
                                                                          {
                                                                            properties:
                                                                              [
                                                                                {
                                                                                  key: 'label',
                                                                                  value:
                                                                                    {
                                                                                      name: 'string',
                                                                                      required:
                                                                                        !0,
                                                                                    },
                                                                                },
                                                                                {
                                                                                  key: 'value',
                                                                                  value:
                                                                                    {
                                                                                      name: 'T',
                                                                                      required:
                                                                                        !0,
                                                                                    },
                                                                                },
                                                                              ],
                                                                          },
                                                                        required:
                                                                          !0,
                                                                      },
                                                                    },
                                                                    {
                                                                      key: 'index',
                                                                      value: {
                                                                        name: 'number',
                                                                        required:
                                                                          !0,
                                                                      },
                                                                    },
                                                                    {
                                                                      key: 'onSelect',
                                                                      value: {
                                                                        name: 'signature',
                                                                        type: 'function',
                                                                        raw: '(option: SelectValue<T>) => void',
                                                                        signature:
                                                                          {
                                                                            arguments:
                                                                              [
                                                                                {
                                                                                  type: {
                                                                                    name: 'signature',
                                                                                    type: 'object',
                                                                                    raw: '{ label: string; value: T }',
                                                                                    signature:
                                                                                      {
                                                                                        properties:
                                                                                          [
                                                                                            {
                                                                                              key: 'label',
                                                                                              value:
                                                                                                {
                                                                                                  name: 'string',
                                                                                                  required:
                                                                                                    !0,
                                                                                                },
                                                                                            },
                                                                                            {
                                                                                              key: 'value',
                                                                                              value:
                                                                                                {
                                                                                                  name: 'T',
                                                                                                  required:
                                                                                                    !0,
                                                                                                },
                                                                                            },
                                                                                          ],
                                                                                      },
                                                                                    required:
                                                                                      !0,
                                                                                  },
                                                                                  name: 'option',
                                                                                },
                                                                              ],
                                                                            return:
                                                                              {
                                                                                name: 'void',
                                                                              },
                                                                          },
                                                                        required:
                                                                          !0,
                                                                      },
                                                                    },
                                                                  ],
                                                                },
                                                              },
                                                              name: 'props',
                                                            },
                                                          ],
                                                          return: {
                                                            name: 'JSX.Element',
                                                          },
                                                        },
                                                        required: !0,
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                            raw: `Partial<{
  DropdownLabel: (props: InnerProps<T>) => JSX.Element;
  DropdownSelectedItem: (props: InnerProps<T>) => JSX.Element;
  Dropdown: (props: InnerProps<T>) => JSX.Element;
  DropdownOption: (props: DropdownOptionProps<T>) => JSX.Element;
}>`,
                                            required: !1,
                                          },
                                          description:
                                            'Custom components for the dropdown.',
                                        },
                                      ],
                                    },
                                    required: !0,
                                  },
                                },
                              ],
                            },
                          },
                          name: 'props',
                        },
                      ],
                      return: { name: 'JSX.Element' },
                    },
                    required: !0,
                  },
                },
                {
                  key: 'DropdownSelectedItem',
                  value: {
                    name: 'signature',
                    type: 'function',
                    raw: '(props: InnerProps<T>) => JSX.Element',
                    signature: {
                      arguments: [
                        {
                          type: {
                            name: 'signature',
                            type: 'object',
                            raw: `{
  innerProps: SelectDropdownProps<T>;
}`,
                            signature: {
                              properties: [
                                {
                                  key: 'innerProps',
                                  value: {
                                    name: 'signature',
                                    type: 'object',
                                    raw: `{
  /**
   * The id of the component.
   */
  id?: string;
  /**
   * Whether the dropdown allows multiple selections.
   */
  multiple?: boolean;

  /**
   * Whether the dropdown is open by default.
   */
  defaultOpen?: boolean;

  /**
   * Whether the dropdown has a search input.
   */
  withSearch?: boolean;
  /**
   * The options to display in the dropdown.
   */
  options: Array<SelectValue<T>>;
  /**
   * The label for the dropdown.
   */
  optionLabel?: string;
  /**
   * Whether the dropdown is outlined.
   */
  outlined?: boolean;
  /**
   * event handler for the \`onChange\` event of the component.
   * @param value
   * @returns
   */
  onChange?: (value: Array<SelectValue<T>> | SelectValue<T>) => void;
  /**
   * The placeholder for the dropdown.
   */
  placeholder?: string;
  /**
   * The default value of the dropdown.
   */
  defaultValue?: Array<SelectValue<T>> | SelectValue<T> | null;
  /**
   *  The value of the dropdown.
   */
  value?: Array<SelectValue<T>> | SelectValue<T> | null;

  /**
   * The class name for the container of the component.
   */
  containerClassName?: string;

  /**
   * The class name for the label of the component.
   */
  labelClassName?: string;

  /**
   * The class name for the dropdown of the component.
   */
  dropdownClassName?: string;

  /**
   * Custom components for the dropdown.
   */
  components?: Partial<{
    DropdownLabel: (props: InnerProps<T>) => JSX.Element;
    DropdownSelectedItem: (props: InnerProps<T>) => JSX.Element;
    Dropdown: (props: InnerProps<T>) => JSX.Element;
    DropdownOption: (props: DropdownOptionProps<T>) => JSX.Element;
  }>;
}`,
                                    signature: {
                                      properties: [
                                        {
                                          key: 'id',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                          description:
                                            'The id of the component.',
                                        },
                                        {
                                          key: 'multiple',
                                          value: {
                                            name: 'boolean',
                                            required: !1,
                                          },
                                          description:
                                            'Whether the dropdown allows multiple selections.',
                                        },
                                        {
                                          key: 'defaultOpen',
                                          value: {
                                            name: 'boolean',
                                            required: !1,
                                          },
                                          description:
                                            'Whether the dropdown is open by default.',
                                        },
                                        {
                                          key: 'withSearch',
                                          value: {
                                            name: 'boolean',
                                            required: !1,
                                          },
                                          description:
                                            'Whether the dropdown has a search input.',
                                        },
                                        {
                                          key: 'options',
                                          value: {
                                            name: 'Array',
                                            elements: [
                                              {
                                                name: 'signature',
                                                type: 'object',
                                                raw: '{ label: string; value: T }',
                                                signature: {
                                                  properties: [
                                                    {
                                                      key: 'label',
                                                      value: {
                                                        name: 'string',
                                                        required: !0,
                                                      },
                                                    },
                                                    {
                                                      key: 'value',
                                                      value: {
                                                        name: 'T',
                                                        required: !0,
                                                      },
                                                    },
                                                  ],
                                                },
                                                required: !0,
                                              },
                                            ],
                                            raw: 'Array<SelectValue<T>>',
                                            required: !0,
                                          },
                                          description:
                                            'The options to display in the dropdown.',
                                        },
                                        {
                                          key: 'optionLabel',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                          description:
                                            'The label for the dropdown.',
                                        },
                                        {
                                          key: 'outlined',
                                          value: {
                                            name: 'boolean',
                                            required: !1,
                                          },
                                          description:
                                            'Whether the dropdown is outlined.',
                                        },
                                        {
                                          key: 'onChange',
                                          value: {
                                            name: 'signature',
                                            type: 'function',
                                            raw: '(value: Array<SelectValue<T>> | SelectValue<T>) => void',
                                            signature: {
                                              arguments: [
                                                {
                                                  type: {
                                                    name: 'union',
                                                    raw: 'Array<SelectValue<T>> | SelectValue<T>',
                                                    elements: [
                                                      {
                                                        name: 'Array',
                                                        elements: [
                                                          {
                                                            name: 'signature',
                                                            type: 'object',
                                                            raw: '{ label: string; value: T }',
                                                            signature: {
                                                              properties: [
                                                                {
                                                                  key: 'label',
                                                                  value: {
                                                                    name: 'string',
                                                                    required:
                                                                      !0,
                                                                  },
                                                                },
                                                                {
                                                                  key: 'value',
                                                                  value: {
                                                                    name: 'T',
                                                                    required:
                                                                      !0,
                                                                  },
                                                                },
                                                              ],
                                                            },
                                                            required: !0,
                                                          },
                                                        ],
                                                        raw: 'Array<SelectValue<T>>',
                                                      },
                                                      {
                                                        name: 'signature',
                                                        type: 'object',
                                                        raw: '{ label: string; value: T }',
                                                        signature: {
                                                          properties: [
                                                            {
                                                              key: 'label',
                                                              value: {
                                                                name: 'string',
                                                                required: !0,
                                                              },
                                                            },
                                                            {
                                                              key: 'value',
                                                              value: {
                                                                name: 'T',
                                                                required: !0,
                                                              },
                                                            },
                                                          ],
                                                        },
                                                        required: !0,
                                                      },
                                                    ],
                                                  },
                                                  name: 'value',
                                                },
                                              ],
                                              return: { name: 'void' },
                                            },
                                            required: !1,
                                          },
                                          description:
                                            'event handler for the `onChange` event of the component.\n@param value\n@returns',
                                        },
                                        {
                                          key: 'placeholder',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                          description:
                                            'The placeholder for the dropdown.',
                                        },
                                        {
                                          key: 'defaultValue',
                                          value: {
                                            name: 'union',
                                            raw: 'Array<SelectValue<T>> | SelectValue<T> | null',
                                            elements: [
                                              {
                                                name: 'Array',
                                                elements: [
                                                  {
                                                    name: 'signature',
                                                    type: 'object',
                                                    raw: '{ label: string; value: T }',
                                                    signature: {
                                                      properties: [
                                                        {
                                                          key: 'label',
                                                          value: {
                                                            name: 'string',
                                                            required: !0,
                                                          },
                                                        },
                                                        {
                                                          key: 'value',
                                                          value: {
                                                            name: 'T',
                                                            required: !0,
                                                          },
                                                        },
                                                      ],
                                                    },
                                                    required: !0,
                                                  },
                                                ],
                                                raw: 'Array<SelectValue<T>>',
                                              },
                                              {
                                                name: 'signature',
                                                type: 'object',
                                                raw: '{ label: string; value: T }',
                                                signature: {
                                                  properties: [
                                                    {
                                                      key: 'label',
                                                      value: {
                                                        name: 'string',
                                                        required: !0,
                                                      },
                                                    },
                                                    {
                                                      key: 'value',
                                                      value: {
                                                        name: 'T',
                                                        required: !0,
                                                      },
                                                    },
                                                  ],
                                                },
                                                required: !0,
                                              },
                                              { name: 'null' },
                                            ],
                                            required: !1,
                                          },
                                          description:
                                            'The default value of the dropdown.',
                                        },
                                        {
                                          key: 'value',
                                          value: {
                                            name: 'union',
                                            raw: 'Array<SelectValue<T>> | SelectValue<T> | null',
                                            elements: [
                                              {
                                                name: 'Array',
                                                elements: [
                                                  {
                                                    name: 'signature',
                                                    type: 'object',
                                                    raw: '{ label: string; value: T }',
                                                    signature: {
                                                      properties: [
                                                        {
                                                          key: 'label',
                                                          value: {
                                                            name: 'string',
                                                            required: !0,
                                                          },
                                                        },
                                                        {
                                                          key: 'value',
                                                          value: {
                                                            name: 'T',
                                                            required: !0,
                                                          },
                                                        },
                                                      ],
                                                    },
                                                    required: !0,
                                                  },
                                                ],
                                                raw: 'Array<SelectValue<T>>',
                                              },
                                              {
                                                name: 'signature',
                                                type: 'object',
                                                raw: '{ label: string; value: T }',
                                                signature: {
                                                  properties: [
                                                    {
                                                      key: 'label',
                                                      value: {
                                                        name: 'string',
                                                        required: !0,
                                                      },
                                                    },
                                                    {
                                                      key: 'value',
                                                      value: {
                                                        name: 'T',
                                                        required: !0,
                                                      },
                                                    },
                                                  ],
                                                },
                                                required: !0,
                                              },
                                              { name: 'null' },
                                            ],
                                            required: !1,
                                          },
                                          description:
                                            'The value of the dropdown.',
                                        },
                                        {
                                          key: 'containerClassName',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                          description:
                                            'The class name for the container of the component.',
                                        },
                                        {
                                          key: 'labelClassName',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                          description:
                                            'The class name for the label of the component.',
                                        },
                                        {
                                          key: 'dropdownClassName',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                          description:
                                            'The class name for the dropdown of the component.',
                                        },
                                        {
                                          key: 'components',
                                          value: {
                                            name: 'Partial',
                                            elements: [
                                              {
                                                name: 'signature',
                                                type: 'object',
                                                raw: `{
  DropdownLabel: (props: InnerProps<T>) => JSX.Element;
  DropdownSelectedItem: (props: InnerProps<T>) => JSX.Element;
  Dropdown: (props: InnerProps<T>) => JSX.Element;
  DropdownOption: (props: DropdownOptionProps<T>) => JSX.Element;
}`,
                                                signature: {
                                                  properties: [
                                                    {
                                                      key: 'DropdownLabel',
                                                      value: {
                                                        name: 'signature',
                                                        type: 'function',
                                                        raw: '(props: InnerProps<T>) => JSX.Element',
                                                        signature: {
                                                          arguments: [
                                                            {
                                                              type: {
                                                                name: 'InnerProps',
                                                              },
                                                              name: 'props',
                                                            },
                                                          ],
                                                          return: {
                                                            name: 'JSX.Element',
                                                          },
                                                        },
                                                        required: !0,
                                                      },
                                                    },
                                                    {
                                                      key: 'DropdownSelectedItem',
                                                      value: {
                                                        name: 'signature',
                                                        type: 'function',
                                                        raw: '(props: InnerProps<T>) => JSX.Element',
                                                        signature: {
                                                          arguments: [
                                                            {
                                                              type: {
                                                                name: 'InnerProps',
                                                              },
                                                              name: 'props',
                                                            },
                                                          ],
                                                          return: {
                                                            name: 'JSX.Element',
                                                          },
                                                        },
                                                        required: !0,
                                                      },
                                                    },
                                                    {
                                                      key: 'Dropdown',
                                                      value: {
                                                        name: 'signature',
                                                        type: 'function',
                                                        raw: '(props: InnerProps<T>) => JSX.Element',
                                                        signature: {
                                                          arguments: [
                                                            {
                                                              type: {
                                                                name: 'InnerProps',
                                                              },
                                                              name: 'props',
                                                            },
                                                          ],
                                                          return: {
                                                            name: 'JSX.Element',
                                                          },
                                                        },
                                                        required: !0,
                                                      },
                                                    },
                                                    {
                                                      key: 'DropdownOption',
                                                      value: {
                                                        name: 'signature',
                                                        type: 'function',
                                                        raw: '(props: DropdownOptionProps<T>) => JSX.Element',
                                                        signature: {
                                                          arguments: [
                                                            {
                                                              type: {
                                                                name: 'signature',
                                                                type: 'object',
                                                                raw: `{
  item: SelectValue<T>;
  index: number;
  onSelect: (option: SelectValue<T>) => void;
}`,
                                                                signature: {
                                                                  properties: [
                                                                    {
                                                                      key: 'item',
                                                                      value: {
                                                                        name: 'signature',
                                                                        type: 'object',
                                                                        raw: '{ label: string; value: T }',
                                                                        signature:
                                                                          {
                                                                            properties:
                                                                              [
                                                                                {
                                                                                  key: 'label',
                                                                                  value:
                                                                                    {
                                                                                      name: 'string',
                                                                                      required:
                                                                                        !0,
                                                                                    },
                                                                                },
                                                                                {
                                                                                  key: 'value',
                                                                                  value:
                                                                                    {
                                                                                      name: 'T',
                                                                                      required:
                                                                                        !0,
                                                                                    },
                                                                                },
                                                                              ],
                                                                          },
                                                                        required:
                                                                          !0,
                                                                      },
                                                                    },
                                                                    {
                                                                      key: 'index',
                                                                      value: {
                                                                        name: 'number',
                                                                        required:
                                                                          !0,
                                                                      },
                                                                    },
                                                                    {
                                                                      key: 'onSelect',
                                                                      value: {
                                                                        name: 'signature',
                                                                        type: 'function',
                                                                        raw: '(option: SelectValue<T>) => void',
                                                                        signature:
                                                                          {
                                                                            arguments:
                                                                              [
                                                                                {
                                                                                  type: {
                                                                                    name: 'signature',
                                                                                    type: 'object',
                                                                                    raw: '{ label: string; value: T }',
                                                                                    signature:
                                                                                      {
                                                                                        properties:
                                                                                          [
                                                                                            {
                                                                                              key: 'label',
                                                                                              value:
                                                                                                {
                                                                                                  name: 'string',
                                                                                                  required:
                                                                                                    !0,
                                                                                                },
                                                                                            },
                                                                                            {
                                                                                              key: 'value',
                                                                                              value:
                                                                                                {
                                                                                                  name: 'T',
                                                                                                  required:
                                                                                                    !0,
                                                                                                },
                                                                                            },
                                                                                          ],
                                                                                      },
                                                                                    required:
                                                                                      !0,
                                                                                  },
                                                                                  name: 'option',
                                                                                },
                                                                              ],
                                                                            return:
                                                                              {
                                                                                name: 'void',
                                                                              },
                                                                          },
                                                                        required:
                                                                          !0,
                                                                      },
                                                                    },
                                                                  ],
                                                                },
                                                              },
                                                              name: 'props',
                                                            },
                                                          ],
                                                          return: {
                                                            name: 'JSX.Element',
                                                          },
                                                        },
                                                        required: !0,
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                            raw: `Partial<{
  DropdownLabel: (props: InnerProps<T>) => JSX.Element;
  DropdownSelectedItem: (props: InnerProps<T>) => JSX.Element;
  Dropdown: (props: InnerProps<T>) => JSX.Element;
  DropdownOption: (props: DropdownOptionProps<T>) => JSX.Element;
}>`,
                                            required: !1,
                                          },
                                          description:
                                            'Custom components for the dropdown.',
                                        },
                                      ],
                                    },
                                    required: !0,
                                  },
                                },
                              ],
                            },
                          },
                          name: 'props',
                        },
                      ],
                      return: { name: 'JSX.Element' },
                    },
                    required: !0,
                  },
                },
                {
                  key: 'Dropdown',
                  value: {
                    name: 'signature',
                    type: 'function',
                    raw: '(props: InnerProps<T>) => JSX.Element',
                    signature: {
                      arguments: [
                        {
                          type: {
                            name: 'signature',
                            type: 'object',
                            raw: `{
  innerProps: SelectDropdownProps<T>;
}`,
                            signature: {
                              properties: [
                                {
                                  key: 'innerProps',
                                  value: {
                                    name: 'signature',
                                    type: 'object',
                                    raw: `{
  /**
   * The id of the component.
   */
  id?: string;
  /**
   * Whether the dropdown allows multiple selections.
   */
  multiple?: boolean;

  /**
   * Whether the dropdown is open by default.
   */
  defaultOpen?: boolean;

  /**
   * Whether the dropdown has a search input.
   */
  withSearch?: boolean;
  /**
   * The options to display in the dropdown.
   */
  options: Array<SelectValue<T>>;
  /**
   * The label for the dropdown.
   */
  optionLabel?: string;
  /**
   * Whether the dropdown is outlined.
   */
  outlined?: boolean;
  /**
   * event handler for the \`onChange\` event of the component.
   * @param value
   * @returns
   */
  onChange?: (value: Array<SelectValue<T>> | SelectValue<T>) => void;
  /**
   * The placeholder for the dropdown.
   */
  placeholder?: string;
  /**
   * The default value of the dropdown.
   */
  defaultValue?: Array<SelectValue<T>> | SelectValue<T> | null;
  /**
   *  The value of the dropdown.
   */
  value?: Array<SelectValue<T>> | SelectValue<T> | null;

  /**
   * The class name for the container of the component.
   */
  containerClassName?: string;

  /**
   * The class name for the label of the component.
   */
  labelClassName?: string;

  /**
   * The class name for the dropdown of the component.
   */
  dropdownClassName?: string;

  /**
   * Custom components for the dropdown.
   */
  components?: Partial<{
    DropdownLabel: (props: InnerProps<T>) => JSX.Element;
    DropdownSelectedItem: (props: InnerProps<T>) => JSX.Element;
    Dropdown: (props: InnerProps<T>) => JSX.Element;
    DropdownOption: (props: DropdownOptionProps<T>) => JSX.Element;
  }>;
}`,
                                    signature: {
                                      properties: [
                                        {
                                          key: 'id',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                          description:
                                            'The id of the component.',
                                        },
                                        {
                                          key: 'multiple',
                                          value: {
                                            name: 'boolean',
                                            required: !1,
                                          },
                                          description:
                                            'Whether the dropdown allows multiple selections.',
                                        },
                                        {
                                          key: 'defaultOpen',
                                          value: {
                                            name: 'boolean',
                                            required: !1,
                                          },
                                          description:
                                            'Whether the dropdown is open by default.',
                                        },
                                        {
                                          key: 'withSearch',
                                          value: {
                                            name: 'boolean',
                                            required: !1,
                                          },
                                          description:
                                            'Whether the dropdown has a search input.',
                                        },
                                        {
                                          key: 'options',
                                          value: {
                                            name: 'Array',
                                            elements: [
                                              {
                                                name: 'signature',
                                                type: 'object',
                                                raw: '{ label: string; value: T }',
                                                signature: {
                                                  properties: [
                                                    {
                                                      key: 'label',
                                                      value: {
                                                        name: 'string',
                                                        required: !0,
                                                      },
                                                    },
                                                    {
                                                      key: 'value',
                                                      value: {
                                                        name: 'T',
                                                        required: !0,
                                                      },
                                                    },
                                                  ],
                                                },
                                                required: !0,
                                              },
                                            ],
                                            raw: 'Array<SelectValue<T>>',
                                            required: !0,
                                          },
                                          description:
                                            'The options to display in the dropdown.',
                                        },
                                        {
                                          key: 'optionLabel',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                          description:
                                            'The label for the dropdown.',
                                        },
                                        {
                                          key: 'outlined',
                                          value: {
                                            name: 'boolean',
                                            required: !1,
                                          },
                                          description:
                                            'Whether the dropdown is outlined.',
                                        },
                                        {
                                          key: 'onChange',
                                          value: {
                                            name: 'signature',
                                            type: 'function',
                                            raw: '(value: Array<SelectValue<T>> | SelectValue<T>) => void',
                                            signature: {
                                              arguments: [
                                                {
                                                  type: {
                                                    name: 'union',
                                                    raw: 'Array<SelectValue<T>> | SelectValue<T>',
                                                    elements: [
                                                      {
                                                        name: 'Array',
                                                        elements: [
                                                          {
                                                            name: 'signature',
                                                            type: 'object',
                                                            raw: '{ label: string; value: T }',
                                                            signature: {
                                                              properties: [
                                                                {
                                                                  key: 'label',
                                                                  value: {
                                                                    name: 'string',
                                                                    required:
                                                                      !0,
                                                                  },
                                                                },
                                                                {
                                                                  key: 'value',
                                                                  value: {
                                                                    name: 'T',
                                                                    required:
                                                                      !0,
                                                                  },
                                                                },
                                                              ],
                                                            },
                                                            required: !0,
                                                          },
                                                        ],
                                                        raw: 'Array<SelectValue<T>>',
                                                      },
                                                      {
                                                        name: 'signature',
                                                        type: 'object',
                                                        raw: '{ label: string; value: T }',
                                                        signature: {
                                                          properties: [
                                                            {
                                                              key: 'label',
                                                              value: {
                                                                name: 'string',
                                                                required: !0,
                                                              },
                                                            },
                                                            {
                                                              key: 'value',
                                                              value: {
                                                                name: 'T',
                                                                required: !0,
                                                              },
                                                            },
                                                          ],
                                                        },
                                                        required: !0,
                                                      },
                                                    ],
                                                  },
                                                  name: 'value',
                                                },
                                              ],
                                              return: { name: 'void' },
                                            },
                                            required: !1,
                                          },
                                          description:
                                            'event handler for the `onChange` event of the component.\n@param value\n@returns',
                                        },
                                        {
                                          key: 'placeholder',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                          description:
                                            'The placeholder for the dropdown.',
                                        },
                                        {
                                          key: 'defaultValue',
                                          value: {
                                            name: 'union',
                                            raw: 'Array<SelectValue<T>> | SelectValue<T> | null',
                                            elements: [
                                              {
                                                name: 'Array',
                                                elements: [
                                                  {
                                                    name: 'signature',
                                                    type: 'object',
                                                    raw: '{ label: string; value: T }',
                                                    signature: {
                                                      properties: [
                                                        {
                                                          key: 'label',
                                                          value: {
                                                            name: 'string',
                                                            required: !0,
                                                          },
                                                        },
                                                        {
                                                          key: 'value',
                                                          value: {
                                                            name: 'T',
                                                            required: !0,
                                                          },
                                                        },
                                                      ],
                                                    },
                                                    required: !0,
                                                  },
                                                ],
                                                raw: 'Array<SelectValue<T>>',
                                              },
                                              {
                                                name: 'signature',
                                                type: 'object',
                                                raw: '{ label: string; value: T }',
                                                signature: {
                                                  properties: [
                                                    {
                                                      key: 'label',
                                                      value: {
                                                        name: 'string',
                                                        required: !0,
                                                      },
                                                    },
                                                    {
                                                      key: 'value',
                                                      value: {
                                                        name: 'T',
                                                        required: !0,
                                                      },
                                                    },
                                                  ],
                                                },
                                                required: !0,
                                              },
                                              { name: 'null' },
                                            ],
                                            required: !1,
                                          },
                                          description:
                                            'The default value of the dropdown.',
                                        },
                                        {
                                          key: 'value',
                                          value: {
                                            name: 'union',
                                            raw: 'Array<SelectValue<T>> | SelectValue<T> | null',
                                            elements: [
                                              {
                                                name: 'Array',
                                                elements: [
                                                  {
                                                    name: 'signature',
                                                    type: 'object',
                                                    raw: '{ label: string; value: T }',
                                                    signature: {
                                                      properties: [
                                                        {
                                                          key: 'label',
                                                          value: {
                                                            name: 'string',
                                                            required: !0,
                                                          },
                                                        },
                                                        {
                                                          key: 'value',
                                                          value: {
                                                            name: 'T',
                                                            required: !0,
                                                          },
                                                        },
                                                      ],
                                                    },
                                                    required: !0,
                                                  },
                                                ],
                                                raw: 'Array<SelectValue<T>>',
                                              },
                                              {
                                                name: 'signature',
                                                type: 'object',
                                                raw: '{ label: string; value: T }',
                                                signature: {
                                                  properties: [
                                                    {
                                                      key: 'label',
                                                      value: {
                                                        name: 'string',
                                                        required: !0,
                                                      },
                                                    },
                                                    {
                                                      key: 'value',
                                                      value: {
                                                        name: 'T',
                                                        required: !0,
                                                      },
                                                    },
                                                  ],
                                                },
                                                required: !0,
                                              },
                                              { name: 'null' },
                                            ],
                                            required: !1,
                                          },
                                          description:
                                            'The value of the dropdown.',
                                        },
                                        {
                                          key: 'containerClassName',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                          description:
                                            'The class name for the container of the component.',
                                        },
                                        {
                                          key: 'labelClassName',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                          description:
                                            'The class name for the label of the component.',
                                        },
                                        {
                                          key: 'dropdownClassName',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                          description:
                                            'The class name for the dropdown of the component.',
                                        },
                                        {
                                          key: 'components',
                                          value: {
                                            name: 'Partial',
                                            elements: [
                                              {
                                                name: 'signature',
                                                type: 'object',
                                                raw: `{
  DropdownLabel: (props: InnerProps<T>) => JSX.Element;
  DropdownSelectedItem: (props: InnerProps<T>) => JSX.Element;
  Dropdown: (props: InnerProps<T>) => JSX.Element;
  DropdownOption: (props: DropdownOptionProps<T>) => JSX.Element;
}`,
                                                signature: {
                                                  properties: [
                                                    {
                                                      key: 'DropdownLabel',
                                                      value: {
                                                        name: 'signature',
                                                        type: 'function',
                                                        raw: '(props: InnerProps<T>) => JSX.Element',
                                                        signature: {
                                                          arguments: [
                                                            {
                                                              type: {
                                                                name: 'InnerProps',
                                                              },
                                                              name: 'props',
                                                            },
                                                          ],
                                                          return: {
                                                            name: 'JSX.Element',
                                                          },
                                                        },
                                                        required: !0,
                                                      },
                                                    },
                                                    {
                                                      key: 'DropdownSelectedItem',
                                                      value: {
                                                        name: 'signature',
                                                        type: 'function',
                                                        raw: '(props: InnerProps<T>) => JSX.Element',
                                                        signature: {
                                                          arguments: [
                                                            {
                                                              type: {
                                                                name: 'InnerProps',
                                                              },
                                                              name: 'props',
                                                            },
                                                          ],
                                                          return: {
                                                            name: 'JSX.Element',
                                                          },
                                                        },
                                                        required: !0,
                                                      },
                                                    },
                                                    {
                                                      key: 'Dropdown',
                                                      value: {
                                                        name: 'signature',
                                                        type: 'function',
                                                        raw: '(props: InnerProps<T>) => JSX.Element',
                                                        signature: {
                                                          arguments: [
                                                            {
                                                              type: {
                                                                name: 'InnerProps',
                                                              },
                                                              name: 'props',
                                                            },
                                                          ],
                                                          return: {
                                                            name: 'JSX.Element',
                                                          },
                                                        },
                                                        required: !0,
                                                      },
                                                    },
                                                    {
                                                      key: 'DropdownOption',
                                                      value: {
                                                        name: 'signature',
                                                        type: 'function',
                                                        raw: '(props: DropdownOptionProps<T>) => JSX.Element',
                                                        signature: {
                                                          arguments: [
                                                            {
                                                              type: {
                                                                name: 'signature',
                                                                type: 'object',
                                                                raw: `{
  item: SelectValue<T>;
  index: number;
  onSelect: (option: SelectValue<T>) => void;
}`,
                                                                signature: {
                                                                  properties: [
                                                                    {
                                                                      key: 'item',
                                                                      value: {
                                                                        name: 'signature',
                                                                        type: 'object',
                                                                        raw: '{ label: string; value: T }',
                                                                        signature:
                                                                          {
                                                                            properties:
                                                                              [
                                                                                {
                                                                                  key: 'label',
                                                                                  value:
                                                                                    {
                                                                                      name: 'string',
                                                                                      required:
                                                                                        !0,
                                                                                    },
                                                                                },
                                                                                {
                                                                                  key: 'value',
                                                                                  value:
                                                                                    {
                                                                                      name: 'T',
                                                                                      required:
                                                                                        !0,
                                                                                    },
                                                                                },
                                                                              ],
                                                                          },
                                                                        required:
                                                                          !0,
                                                                      },
                                                                    },
                                                                    {
                                                                      key: 'index',
                                                                      value: {
                                                                        name: 'number',
                                                                        required:
                                                                          !0,
                                                                      },
                                                                    },
                                                                    {
                                                                      key: 'onSelect',
                                                                      value: {
                                                                        name: 'signature',
                                                                        type: 'function',
                                                                        raw: '(option: SelectValue<T>) => void',
                                                                        signature:
                                                                          {
                                                                            arguments:
                                                                              [
                                                                                {
                                                                                  type: {
                                                                                    name: 'signature',
                                                                                    type: 'object',
                                                                                    raw: '{ label: string; value: T }',
                                                                                    signature:
                                                                                      {
                                                                                        properties:
                                                                                          [
                                                                                            {
                                                                                              key: 'label',
                                                                                              value:
                                                                                                {
                                                                                                  name: 'string',
                                                                                                  required:
                                                                                                    !0,
                                                                                                },
                                                                                            },
                                                                                            {
                                                                                              key: 'value',
                                                                                              value:
                                                                                                {
                                                                                                  name: 'T',
                                                                                                  required:
                                                                                                    !0,
                                                                                                },
                                                                                            },
                                                                                          ],
                                                                                      },
                                                                                    required:
                                                                                      !0,
                                                                                  },
                                                                                  name: 'option',
                                                                                },
                                                                              ],
                                                                            return:
                                                                              {
                                                                                name: 'void',
                                                                              },
                                                                          },
                                                                        required:
                                                                          !0,
                                                                      },
                                                                    },
                                                                  ],
                                                                },
                                                              },
                                                              name: 'props',
                                                            },
                                                          ],
                                                          return: {
                                                            name: 'JSX.Element',
                                                          },
                                                        },
                                                        required: !0,
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                            raw: `Partial<{
  DropdownLabel: (props: InnerProps<T>) => JSX.Element;
  DropdownSelectedItem: (props: InnerProps<T>) => JSX.Element;
  Dropdown: (props: InnerProps<T>) => JSX.Element;
  DropdownOption: (props: DropdownOptionProps<T>) => JSX.Element;
}>`,
                                            required: !1,
                                          },
                                          description:
                                            'Custom components for the dropdown.',
                                        },
                                      ],
                                    },
                                    required: !0,
                                  },
                                },
                              ],
                            },
                          },
                          name: 'props',
                        },
                      ],
                      return: { name: 'JSX.Element' },
                    },
                    required: !0,
                  },
                },
                {
                  key: 'DropdownOption',
                  value: {
                    name: 'signature',
                    type: 'function',
                    raw: '(props: DropdownOptionProps<T>) => JSX.Element',
                    signature: {
                      arguments: [
                        {
                          type: {
                            name: 'signature',
                            type: 'object',
                            raw: `{
  item: SelectValue<T>;
  index: number;
  onSelect: (option: SelectValue<T>) => void;
}`,
                            signature: {
                              properties: [
                                {
                                  key: 'item',
                                  value: {
                                    name: 'signature',
                                    type: 'object',
                                    raw: '{ label: string; value: T }',
                                    signature: {
                                      properties: [
                                        {
                                          key: 'label',
                                          value: {
                                            name: 'string',
                                            required: !0,
                                          },
                                        },
                                        {
                                          key: 'value',
                                          value: { name: 'T', required: !0 },
                                        },
                                      ],
                                    },
                                    required: !0,
                                  },
                                },
                                {
                                  key: 'index',
                                  value: { name: 'number', required: !0 },
                                },
                                {
                                  key: 'onSelect',
                                  value: {
                                    name: 'signature',
                                    type: 'function',
                                    raw: '(option: SelectValue<T>) => void',
                                    signature: {
                                      arguments: [
                                        {
                                          type: {
                                            name: 'signature',
                                            type: 'object',
                                            raw: '{ label: string; value: T }',
                                            signature: {
                                              properties: [
                                                {
                                                  key: 'label',
                                                  value: {
                                                    name: 'string',
                                                    required: !0,
                                                  },
                                                },
                                                {
                                                  key: 'value',
                                                  value: {
                                                    name: 'T',
                                                    required: !0,
                                                  },
                                                },
                                              ],
                                            },
                                            required: !0,
                                          },
                                          name: 'option',
                                        },
                                      ],
                                      return: { name: 'void' },
                                    },
                                    required: !0,
                                  },
                                },
                              ],
                            },
                          },
                          name: 'props',
                        },
                      ],
                      return: { name: 'JSX.Element' },
                    },
                    required: !0,
                  },
                },
              ],
            },
          },
        ],
        raw: `Partial<{
  DropdownLabel: (props: InnerProps<T>) => JSX.Element;
  DropdownSelectedItem: (props: InnerProps<T>) => JSX.Element;
  Dropdown: (props: InnerProps<T>) => JSX.Element;
  DropdownOption: (props: DropdownOptionProps<T>) => JSX.Element;
}>`,
      },
      description: 'Custom components for the dropdown.',
    },
  },
};
const Or = {
    title: 'Form/Select Dropdown Field',
    component: De,
    parameters: {
      docs: {
        description: {
          component:
            'Meta configuration for the SelectDropdown component story.',
        },
      },
    },
    tags: ['autodocs'],
    argTypes: {
      id: { control: 'text' },
      multiple: { control: 'boolean' },
      outlined: { control: 'boolean' },
      options: { control: 'object' },
      onChange: { action: 'onChange' },
    },
    args: { onChange: Oe() },
  },
  re = {
    args: {
      optionLabel: 'Label',
      options: [
        { label: 'Option 1', value: 'Option 1' },
        { label: 'Option With Icon 2', value: 'Option With Icon 2' },
        { label: 'Long Long Option 3', value: 'Long Long Option 3' },
        { label: 'Long Long Long Option 4', value: 'Long Long Long Option 4' },
        {
          label: 'Long Long Long Long Option 5',
          value: 'Long Long Long Long Option 5',
        },
        {
          label: 'Long Long Long Long Long Option 6',
          value: 'Long Long Long Long Long Option 6',
        },
      ],
      multiple: !0,
      outlined: !1,
      withSearch: !0,
      placeholder: 'Select an option',
    },
  };
var ye, we, ve;
re.parameters = {
  ...re.parameters,
  docs: {
    ...((ye = re.parameters) == null ? void 0 : ye.docs),
    source: {
      originalSource: `{
  args: {
    optionLabel: 'Label',
    options: [{
      label: 'Option 1',
      value: 'Option 1'
    }, {
      label: 'Option With Icon 2',
      value: 'Option With Icon 2'
    }, {
      label: 'Long Long Option 3',
      value: 'Long Long Option 3'
    }, {
      label: 'Long Long Long Option 4',
      value: 'Long Long Long Option 4'
    }, {
      label: 'Long Long Long Long Option 5',
      value: 'Long Long Long Long Option 5'
    }, {
      label: 'Long Long Long Long Long Option 6',
      value: 'Long Long Long Long Long Option 6'
    }],
    multiple: true,
    outlined: false,
    withSearch: true,
    placeholder: 'Select an option'
  }
}`,
      ...((ve = (we = re.parameters) == null ? void 0 : we.docs) == null
        ? void 0
        : ve.source),
    },
  },
};
const Xr = ['Default'];
export { re as Default, Xr as __namedExportsOrder, Or as default };
