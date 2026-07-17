import { n as e, r as t, t as n } from "./index-BXdnmT_w.js";
var r = t(e(), 1);
function i(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function a(e, t) {
  ((e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t));
}
var o = {
    autoSleep: 120,
    force3D: `auto`,
    nullTargetWarn: 1,
    units: { lineHeight: `` },
  },
  s = { duration: 0.5, overwrite: !1, delay: 0 },
  c,
  l,
  u,
  d = 1e8,
  f = 1 / d,
  p = Math.PI * 2,
  m = p / 4,
  h = 0,
  g = Math.sqrt,
  _ = Math.cos,
  v = Math.sin,
  y = function (e) {
    return typeof e == `string`;
  },
  b = function (e) {
    return typeof e == `function`;
  },
  x = function (e) {
    return typeof e == `number`;
  },
  S = function (e) {
    return e === void 0;
  },
  C = function (e) {
    return typeof e == `object`;
  },
  w = function (e) {
    return e !== !1;
  },
  T = function () {
    return typeof window < `u`;
  },
  E = function (e) {
    return b(e) || y(e);
  },
  D =
    (typeof ArrayBuffer == `function` && ArrayBuffer.isView) || function () {},
  O = Array.isArray,
  k = /random\([^)]+\)/g,
  A = /,\s*/g,
  j = /(?:-?\.?\d|\.)+/gi,
  M = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  N = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  P = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  ee = /[+-]=-?[.\d]+/,
  te = /[^,'"\[\]\s]+/gi,
  ne = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  F,
  re,
  I,
  ie,
  ae = {},
  L = {},
  oe,
  se = function (e) {
    return (L = je(e, ae)) && Xn;
  },
  ce = function (e, t) {
    return console.warn(
      `Invalid property`,
      e,
      `set to`,
      t,
      `Missing plugin? gsap.registerPlugin()`,
    );
  },
  R = function (e, t) {
    return !t && console.warn(e);
  },
  le = function (e, t) {
    return (e && (ae[e] = t) && L && (L[e] = t)) || ae;
  },
  ue = function () {
    return 0;
  },
  z = { suppressEvents: !0, isStart: !0, kill: !1 },
  de = { suppressEvents: !0, kill: !1 },
  fe = { suppressEvents: !0 },
  pe = {},
  me = [],
  he = {},
  ge,
  _e = {},
  ve = {},
  ye = 30,
  B = [],
  be = ``,
  V = function (e) {
    var t = e[0],
      n,
      r;
    if ((C(t) || b(t) || (e = [e]), !(n = (t._gsap || {}).harness))) {
      for (r = B.length; r-- && !B[r].targetTest(t););
      n = B[r];
    }
    for (r = e.length; r--;)
      (e[r] && (e[r]._gsap || (e[r]._gsap = new on(e[r], n)))) ||
        e.splice(r, 1);
    return e;
  },
  xe = function (e) {
    return e._gsap || V(mt(e))[0]._gsap;
  },
  Se = function (e, t, n) {
    return (n = e[t]) && b(n)
      ? e[t]()
      : (S(n) && e.getAttribute && e.getAttribute(t)) || n;
  },
  H = function (e, t) {
    return (e = e.split(`,`)).forEach(t) || e;
  },
  U = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  W = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Ce = function (e, t) {
    var n = t.charAt(0),
      r = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      n === `+` ? e + r : n === `-` ? e - r : n === `*` ? e * r : e / r
    );
  },
  we = function (e, t) {
    for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
    return r < n;
  },
  Te = function () {
    var e = me.length,
      t = me.slice(0),
      n,
      r;
    for (he = {}, me.length = 0, n = 0; n < e; n++)
      ((r = t[n]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0));
  },
  Ee = function (e) {
    return !!(e._initted || e._startAt || e.add);
  },
  De = function (e, t, n, r) {
    (me.length && !l && Te(),
      e.render(t, n, r || !!(l && t < 0 && Ee(e))),
      me.length && !l && Te());
  },
  G = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + ``).match(te).length < 2
      ? t
      : y(e)
        ? e.trim()
        : e;
  },
  Oe = function (e) {
    return e;
  },
  ke = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  Ae = function (e) {
    return function (t, n) {
      for (var r in n)
        r in t || (r === `duration` && e) || r === `ease` || (t[r] = n[r]);
    };
  },
  je = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  Me = function e(t, n) {
    for (var r in n)
      r !== `__proto__` &&
        r !== `constructor` &&
        r !== `prototype` &&
        (t[r] = C(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
    return t;
  },
  Ne = function (e, t) {
    var n = {},
      r;
    for (r in e) r in t || (n[r] = e[r]);
    return n;
  },
  Pe = function (e) {
    var t = e.parent || F,
      n = e.keyframes ? Ae(O(e.keyframes)) : ke;
    if (w(e.inherit))
      for (; t;) (n(e, t.vars.defaults), (t = t.parent || t._dp));
    return e;
  },
  Fe = function (e, t) {
    for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
    return n < 0;
  },
  Ie = function (e, t, n, r, i) {
    (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
    var a = e[r],
      o;
    if (i) for (o = t[i]; a && a[i] > o;) a = a._prev;
    return (
      a ? ((t._next = a._next), (a._next = t)) : ((t._next = e[n]), (e[n] = t)),
      t._next ? (t._next._prev = t) : (e[r] = t),
      (t._prev = a),
      (t.parent = t._dp = e),
      t
    );
  },
  Le = function (e, t, n, r) {
    (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
    var i = t._prev,
      a = t._next;
    (i ? (i._next = a) : e[n] === t && (e[n] = a),
      a ? (a._prev = i) : e[r] === t && (e[r] = i),
      (t._next = t._prev = t.parent = null));
  },
  Re = function (e, t) {
    (e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0));
  },
  ze = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var n = e; n;) ((n._dirty = 1), (n = n.parent));
    return e;
  },
  Be = function (e) {
    for (var t = e.parent; t && t.parent;)
      ((t._dirty = 1), t.totalDuration(), (t = t.parent));
    return e;
  },
  Ve = function (e, t, n, r) {
    return (
      e._startAt &&
      (l
        ? e._startAt.revert(de)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, r))
    );
  },
  He = function e(t) {
    return !t || (t._ts && e(t.parent));
  },
  Ue = function (e) {
    return e._repeat ? We(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  We = function (e, t) {
    var n = Math.floor((e = W(e / t)));
    return e && n === e ? n - 1 : n;
  },
  Ge = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  Ke = function (e) {
    return (e._end = W(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || f) || 0),
    ));
  },
  qe = function (e, t) {
    var n = e._dp;
    return (
      n &&
        n.smoothChildTiming &&
        e._ts &&
        ((e._start = W(
          n._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts),
        )),
        Ke(e),
        n._dirty || ze(n, e)),
      e
    );
  },
  Je = function (e, t) {
    var n;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((n = Ge(e.rawTime(), t)),
        (!t._dur || ct(0, t.totalDuration(), n) - t._tTime > f) &&
          t.render(n, !0)),
      ze(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (n = e; n._dp;)
          (n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp));
      e._zTime = -f;
    }
  },
  Ye = function (e, t, n, r) {
    return (
      t.parent && Re(t),
      (t._start = W(
        (x(n) ? n : n || e !== F ? at(e, n, t) : e._time) + t._delay,
      )),
      (t._end = W(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0),
      )),
      Ie(e, t, `_first`, `_last`, e._sort ? `_start` : 0),
      $e(t) || (e._recent = t),
      r || Je(e, t),
      e._ts < 0 && qe(e, e._tTime),
      e
    );
  },
  Xe = function (e, t) {
    return (
      (ae.ScrollTrigger || ce(`scrollTrigger`, t)) &&
      ae.ScrollTrigger.create(t, e)
    );
  },
  Ze = function (e, t, n, r, i) {
    if ((hn(e, t, i), !e._initted)) return 1;
    if (
      !n &&
      e._pt &&
      !l &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      ge !== Kt.frame
    )
      return (me.push(e), (e._lazy = [i, r]), 1);
  },
  Qe = function e(t) {
    var n = t.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
  },
  $e = function (e) {
    var t = e.data;
    return t === `isFromStart` || t === `isStart`;
  },
  et = function (e, t, n, r) {
    var i = e.ratio,
      a =
        t < 0 ||
        (!t &&
          ((!e._start && Qe(e) && !(!e._initted && $e(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !$e(e))))
          ? 0
          : 1,
      o = e._rDelay,
      s = 0,
      c,
      u,
      d;
    if (
      (o &&
        e._repeat &&
        ((s = ct(0, e._tDur, t)),
        (u = We(s, o)),
        e._yoyo && u & 1 && (a = 1 - a),
        u !== We(e._tTime, o) &&
          ((i = 1 - a), e.vars.repeatRefresh && e._initted && e.invalidate())),
      a !== i || l || r || e._zTime === f || (!t && e._zTime))
    ) {
      if (!e._initted && Ze(e, t, r, n, s)) return;
      for (
        d = e._zTime,
          e._zTime = t || (n ? f : 0),
          n ||= t && !d,
          e.ratio = a,
          e._from && (a = 1 - a),
          e._time = 0,
          e._tTime = s,
          c = e._pt;
        c;
      )
        (c.r(a, c.d), (c = c._next));
      (t < 0 && Ve(e, t, n, !0),
        e._onUpdate && !n && jt(e, `onUpdate`),
        s && e._repeat && !n && e.parent && jt(e, `onRepeat`),
        (t >= e._tDur || t < 0) &&
          e.ratio === a &&
          (a && Re(e, 1),
          !n &&
            !l &&
            (jt(e, a ? `onComplete` : `onReverseComplete`, !0),
            e._prom && e._prom())));
    } else e._zTime ||= t;
  },
  tt = function (e, t, n) {
    var r;
    if (n > t)
      for (r = e._first; r && r._start <= n;) {
        if (r.data === `isPause` && r._start > t) return r;
        r = r._next;
      }
    else
      for (r = e._last; r && r._start >= n;) {
        if (r.data === `isPause` && r._start < t) return r;
        r = r._prev;
      }
  },
  nt = function (e, t, n, r) {
    var i = e._repeat,
      a = W(t) || 0,
      o = e._tTime / e._tDur;
    return (
      o && !r && (e._time *= a / e._dur),
      (e._dur = a),
      (e._tDur = i ? (i < 0 ? 1e10 : W(a * (i + 1) + e._rDelay * i)) : a),
      o > 0 && !r && qe(e, (e._tTime = e._tDur * o)),
      e.parent && Ke(e),
      n || ze(e.parent, e),
      e
    );
  },
  rt = function (e) {
    return e instanceof cn ? ze(e) : nt(e, e._dur);
  },
  it = { _start: 0, endTime: ue, totalDuration: ue },
  at = function e(t, n, r) {
    var i = t.labels,
      a = t._recent || it,
      o = t.duration() >= d ? a.endTime(!1) : t._dur,
      s,
      c,
      l;
    return y(n) && (isNaN(n) || n in i)
      ? ((c = n.charAt(0)),
        (l = n.substr(-1) === `%`),
        (s = n.indexOf(`=`)),
        c === `<` || c === `>`
          ? (s >= 0 && (n = n.replace(/=/, ``)),
            (c === `<` ? a._start : a.endTime(a._repeat >= 0)) +
              (parseFloat(n.substr(1)) || 0) *
                (l ? (s < 0 ? a : r).totalDuration() / 100 : 1))
          : s < 0
            ? (n in i || (i[n] = o), i[n])
            : ((c = parseFloat(n.charAt(s - 1) + n.substr(s + 1))),
              l && r && (c = (c / 100) * (O(r) ? r[0] : r).totalDuration()),
              s > 1 ? e(t, n.substr(0, s - 1), r) + c : o + c))
      : n == null
        ? o
        : +n;
  },
  ot = function (e, t, n) {
    var r = x(t[1]),
      i = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      a = t[i],
      o,
      s;
    if ((r && (a.duration = t[1]), (a.parent = n), e)) {
      for (o = a, s = n; s && !(`immediateRender` in o);)
        ((o = s.vars.defaults || {}), (s = w(s.vars.inherit) && s.parent));
      ((a.immediateRender = w(o.immediateRender)),
        e < 2 ? (a.runBackwards = 1) : (a.startAt = t[i - 1]));
    }
    return new Sn(t[0], a, t[i + 1]);
  },
  st = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  ct = function (e, t, n) {
    return n < e ? e : n > t ? t : n;
  },
  lt = function (e, t) {
    return !y(e) || !(t = ne.exec(e)) ? `` : t[1];
  },
  ut = function (e, t, n) {
    return st(n, function (n) {
      return ct(e, t, n);
    });
  },
  dt = [].slice,
  ft = function (e, t) {
    return (
      e &&
      C(e) &&
      `length` in e &&
      ((!t && !e.length) || (e.length - 1 in e && C(e[0]))) &&
      !e.nodeType &&
      e !== re
    );
  },
  pt = function (e, t, n) {
    return (
      n === void 0 && (n = []),
      e.forEach(function (e) {
        var r;
        return (y(e) && !t) || ft(e, 1)
          ? (r = n).push.apply(r, mt(e))
          : n.push(e);
      }) || n
    );
  },
  mt = function (e, t, n) {
    return u && !t && u.selector
      ? u.selector(e)
      : y(e) && !n && (I || !qt())
        ? dt.call((t || ie).querySelectorAll(e), 0)
        : O(e)
          ? pt(e, n)
          : ft(e)
            ? dt.call(e, 0)
            : e
              ? [e]
              : [];
  },
  ht = function (e) {
    return (
      (e = mt(e)[0] || R(`Invalid scope`) || {}),
      function (t) {
        var n = e.current || e.nativeElement || e;
        return mt(
          t,
          n.querySelectorAll
            ? n
            : n === e
              ? R(`Invalid scope`) || ie.createElement(`div`)
              : e,
        );
      }
    );
  },
  gt = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  _t = function (e) {
    if (b(e)) return e;
    var t = C(e) ? e : { each: e },
      n = en(t.ease),
      r = t.from || 0,
      i = parseFloat(t.base) || 0,
      a = {},
      o = r > 0 && r < 1,
      s = isNaN(r) || o,
      c = t.axis,
      l = r,
      u = r;
    return (
      y(r)
        ? (l = u = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !o && s && ((l = r[0]), (u = r[1])),
      function (e, o, f) {
        var p = (f || t).length,
          m = a[p],
          h,
          _,
          v,
          y,
          b,
          x,
          S,
          C,
          w;
        if (!m) {
          if (((w = t.grid === `auto` ? 0 : (t.grid || [1, d])[1]), !w)) {
            for (
              S = -d;
              S < (S = f[w++].getBoundingClientRect().left) && w < p;
            );
            w < p && w--;
          }
          for (
            m = a[p] = [],
              h = s ? Math.min(w, p) * l - 0.5 : r % w,
              _ = w === d ? 0 : s ? (p * u) / w - 0.5 : (r / w) | 0,
              S = 0,
              C = d,
              x = 0;
            x < p;
            x++
          )
            ((v = (x % w) - h),
              (y = _ - ((x / w) | 0)),
              (m[x] = b = c ? Math.abs(c === `y` ? y : v) : g(v * v + y * y)),
              b > S && (S = b),
              b < C && (C = b));
          (r === `random` && gt(m),
            (m.max = S - C),
            (m.min = C),
            (m.v = p =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (w > p
                    ? p - 1
                    : c
                      ? c === `y`
                        ? p / w
                        : w
                      : Math.max(w, p / w)) ||
                0) * (r === `edges` ? -1 : 1)),
            (m.b = p < 0 ? i - p : i),
            (m.u = lt(t.amount || t.each) || 0),
            (n = n && p < 0 ? $t(n) : n));
        }
        return (
          (p = (m[e] - m.min) / m.max || 0),
          W(m.b + (n ? n(p) : p) * m.v) + m.u
        );
      }
    );
  },
  vt = function (e) {
    var t = 10 ** ((e + ``).split(`.`)[1] || ``).length;
    return function (n) {
      var r = W(Math.round(parseFloat(n) / e) * e * t);
      return (r - (r % 1)) / t + (x(n) ? 0 : lt(n));
    };
  },
  yt = function (e, t) {
    var n = O(e),
      r,
      i;
    return (
      !n &&
        C(e) &&
        ((r = n = e.radius || d),
        e.values
          ? ((e = mt(e.values)), (i = !x(e[0])) && (r *= r))
          : (e = vt(e.increment))),
      st(
        t,
        n
          ? b(e)
            ? function (t) {
                return ((i = e(t)), Math.abs(i - t) <= r ? i : t);
              }
            : function (t) {
                for (
                  var n = parseFloat(i ? t.x : t),
                    a = parseFloat(i ? t.y : 0),
                    o = d,
                    s = 0,
                    c = e.length,
                    l,
                    u;
                  c--;
                )
                  (i
                    ? ((l = e[c].x - n), (u = e[c].y - a), (l = l * l + u * u))
                    : (l = Math.abs(e[c] - n)),
                    l < o && ((o = l), (s = c)));
                return (
                  (s = !r || o <= r ? e[s] : t),
                  i || s === t || x(t) ? s : s + lt(t)
                );
              }
          : vt(e),
      )
    );
  },
  bt = function (e, t, n, r) {
    return st(O(e) ? !t : n === !0 ? !!(n = 0) : !r, function () {
      return O(e)
        ? e[~~(Math.random() * e.length)]
        : (n ||= 1e-5) &&
            (r = n < 1 ? 10 ** ((n + ``).length - 2) : 1) &&
            Math.floor(
              Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) *
                n *
                r,
            ) / r;
    });
  },
  xt = function () {
    var e = [...arguments];
    return function (t) {
      return e.reduce(function (e, t) {
        return t(e);
      }, t);
    };
  },
  St = function (e, t) {
    return function (n) {
      return e(parseFloat(n)) + (t || lt(n));
    };
  },
  Ct = function (e, t, n) {
    return Ot(e, t, 0, 1, n);
  },
  wt = function (e, t, n) {
    return st(n, function (n) {
      return e[~~t(n)];
    });
  },
  Tt = function e(t, n, r) {
    var i = n - t;
    return O(t)
      ? wt(t, e(0, t.length), n)
      : st(r, function (e) {
          return ((i + ((e - t) % i)) % i) + t;
        });
  },
  Et = function e(t, n, r) {
    var i = n - t,
      a = i * 2;
    return O(t)
      ? wt(t, e(0, t.length - 1), n)
      : st(r, function (e) {
          return ((e = (a + ((e - t) % a)) % a || 0), t + (e > i ? a - e : e));
        });
  },
  Dt = function (e) {
    return e.replace(k, function (e) {
      var t = e.indexOf(`[`) + 1,
        n = e.substring(t || 7, t ? e.indexOf(`]`) : e.length - 1).split(A);
      return bt(t ? n : +n[0], t ? 0 : +n[1], +n[2] || 1e-5);
    });
  },
  Ot = function (e, t, n, r, i) {
    var a = t - e,
      o = r - n;
    return st(i, function (t) {
      return n + (((t - e) / a) * o || 0);
    });
  },
  kt = function e(t, n, r, i) {
    var a = isNaN(t + n)
      ? 0
      : function (e) {
          return (1 - e) * t + e * n;
        };
    if (!a) {
      var o = y(t),
        s = {},
        c,
        l,
        u,
        d,
        f;
      if ((r === !0 && (i = 1) && (r = null), o))
        ((t = { p: t }), (n = { p: n }));
      else if (O(t) && !O(n)) {
        for (u = [], d = t.length, f = d - 2, l = 1; l < d; l++)
          u.push(e(t[l - 1], t[l]));
        (d--,
          (a = function (e) {
            e *= d;
            var t = Math.min(f, ~~e);
            return u[t](e - t);
          }),
          (r = n));
      } else i || (t = je(O(t) ? [] : {}, t));
      if (!u) {
        for (c in n) un.call(s, t, c, `get`, n[c]);
        a = function (e) {
          return jn(e, s) || (o ? t.p : t);
        };
      }
    }
    return st(r, a);
  },
  At = function (e, t, n) {
    var r = e.labels,
      i = d,
      a,
      o,
      s;
    for (a in r)
      ((o = r[a] - t),
        o < 0 == !!n && o && i > (o = Math.abs(o)) && ((s = a), (i = o)));
    return s;
  },
  jt = function (e, t, n) {
    var r = e.vars,
      i = r[t],
      a = u,
      o = e._ctx,
      s,
      c,
      l;
    if (i)
      return (
        (s = r[t + `Params`]),
        (c = r.callbackScope || e),
        n && me.length && Te(),
        o && (u = o),
        (l = s ? i.apply(c, s) : i.call(c)),
        (u = a),
        l
      );
  },
  Mt = function (e) {
    return (
      Re(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!l),
      e.progress() < 1 && jt(e, `onInterrupt`),
      e
    );
  },
  Nt,
  Pt = [],
  Ft = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), T() || e.headless)) {
        var t = e.name,
          n = b(e),
          r =
            t && !n && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          i = {
            init: ue,
            render: jn,
            add: un,
            kill: Nn,
            modifier: Mn,
            rawVars: 0,
          },
          a = {
            targetTest: 0,
            get: 0,
            getSetter: Dn,
            aliases: {},
            register: 0,
          };
        if ((qt(), e !== r)) {
          if (_e[t]) return;
          (ke(r, ke(Ne(e, i), a)),
            je(r.prototype, je(i, Ne(e, a))),
            (_e[(r.prop = t)] = r),
            e.targetTest && (B.push(r), (pe[t] = 1)),
            (t =
              (t === `css` ? `CSS` : t.charAt(0).toUpperCase() + t.substr(1)) +
              `Plugin`));
        }
        (le(t, r), e.register && e.register(Xn, r, In));
      } else Pt.push(e);
  },
  It = 255,
  Lt = {
    aqua: [0, It, It],
    lime: [0, It, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, It],
    navy: [0, 0, 128],
    white: [It, It, It],
    olive: [128, 128, 0],
    yellow: [It, It, 0],
    orange: [It, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [It, 0, 0],
    pink: [It, 192, 203],
    cyan: [0, It, It],
    transparent: [It, It, It, 0],
  },
  Rt = function (e, t, n) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (n - t) * e * 6
        : e < 0.5
          ? n
          : e * 3 < 2
            ? t + (n - t) * (2 / 3 - e) * 6
            : t) *
        It +
        0.5) |
        0
    );
  },
  zt = function (e, t, n) {
    var r = e ? (x(e) ? [e >> 16, (e >> 8) & It, e & It] : 0) : Lt.black,
      i,
      a,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p;
    if (!r) {
      if ((e.substr(-1) === `,` && (e = e.substr(0, e.length - 1)), Lt[e]))
        r = Lt[e];
      else if (e.charAt(0) === `#`) {
        if (
          (e.length < 6 &&
            ((i = e.charAt(1)),
            (a = e.charAt(2)),
            (o = e.charAt(3)),
            (e =
              `#` +
              i +
              i +
              a +
              a +
              o +
              o +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ``))),
          e.length === 9)
        )
          return (
            (r = parseInt(e.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & It, r & It, parseInt(e.substr(7), 16) / 255]
          );
        ((e = parseInt(e.substr(1), 16)),
          (r = [e >> 16, (e >> 8) & It, e & It]));
      } else if (e.substr(0, 3) === `hsl`) {
        if (((r = p = e.match(j)), !t))
          ((s = (r[0] % 360) / 360),
            (c = r[1] / 100),
            (l = r[2] / 100),
            (a = l <= 0.5 ? l * (c + 1) : l + c - l * c),
            (i = l * 2 - a),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Rt(s + 1 / 3, i, a)),
            (r[1] = Rt(s, i, a)),
            (r[2] = Rt(s - 1 / 3, i, a)));
        else if (~e.indexOf(`=`))
          return ((r = e.match(M)), n && r.length < 4 && (r[3] = 1), r);
      } else r = e.match(j) || Lt.transparent;
      r = r.map(Number);
    }
    return (
      t &&
        !p &&
        ((i = r[0] / It),
        (a = r[1] / It),
        (o = r[2] / It),
        (u = Math.max(i, a, o)),
        (d = Math.min(i, a, o)),
        (l = (u + d) / 2),
        u === d
          ? (s = c = 0)
          : ((f = u - d),
            (c = l > 0.5 ? f / (2 - u - d) : f / (u + d)),
            (s =
              u === i
                ? (a - o) / f + (a < o ? 6 : 0)
                : u === a
                  ? (o - i) / f + 2
                  : (i - a) / f + 4),
            (s *= 60)),
        (r[0] = ~~(s + 0.5)),
        (r[1] = ~~(c * 100 + 0.5)),
        (r[2] = ~~(l * 100 + 0.5))),
      n && r.length < 4 && (r[3] = 1),
      r
    );
  },
  Bt = function (e) {
    var t = [],
      n = [],
      r = -1;
    return (
      e.split(Ht).forEach(function (e) {
        var i = e.match(N) || [];
        (t.push.apply(t, i), n.push((r += i.length + 1)));
      }),
      (t.c = n),
      t
    );
  },
  Vt = function (e, t, n) {
    var r = ``,
      i = (e + r).match(Ht),
      a = t ? `hsla(` : `rgba(`,
      o = 0,
      s,
      c,
      l,
      u;
    if (!i) return e;
    if (
      ((i = i.map(function (e) {
        return (
          (e = zt(e, t, 1)) &&
          a +
            (t ? e[0] + `,` + e[1] + `%,` + e[2] + `%,` + e[3] : e.join(`,`)) +
            `)`
        );
      })),
      n && ((l = Bt(e)), (s = n.c), s.join(r) !== l.c.join(r)))
    )
      for (c = e.replace(Ht, `1`).split(N), u = c.length - 1; o < u; o++)
        r +=
          c[o] +
          (~s.indexOf(o)
            ? i.shift() || a + `0,0,0,0)`
            : (l.length ? l : i.length ? i : n).shift());
    if (!c)
      for (c = e.split(Ht), u = c.length - 1; o < u; o++) r += c[o] + i[o];
    return r + c[u];
  },
  Ht = (function () {
    var e = `(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,
      t;
    for (t in Lt) e += `|` + t + `\\b`;
    return RegExp(e + `)`, `gi`);
  })(),
  Ut = /hsl[a]?\(/,
  Wt = function (e) {
    var t = e.join(` `),
      n;
    if (((Ht.lastIndex = 0), Ht.test(t)))
      return (
        (n = Ut.test(t)),
        (e[1] = Vt(e[1], n)),
        (e[0] = Vt(e[0], n, Bt(e[1]))),
        !0
      );
  },
  Gt,
  Kt = (function () {
    var e = Date.now,
      t = 500,
      n = 33,
      r = e(),
      i = r,
      a = 1e3 / 240,
      o = a,
      s = [],
      c,
      l,
      u,
      d,
      f,
      p,
      m = function u(m) {
        var h = e() - i,
          g = m === !0,
          _,
          v,
          y,
          b;
        if (
          ((h > t || h < 0) && (r += h - n),
          (i += h),
          (y = i - r),
          (_ = y - o),
          (_ > 0 || g) &&
            ((b = ++d.frame),
            (f = y - d.time * 1e3),
            (d.time = y /= 1e3),
            (o += _ + (_ >= a ? 4 : a - _)),
            (v = 1)),
          g || (c = l(u)),
          v)
        )
          for (p = 0; p < s.length; p++) s[p](y, f, b, m);
      };
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: function () {
          m(!0);
        },
        deltaRatio: function (e) {
          return f / (1e3 / (e || 60));
        },
        wake: function () {
          oe &&
            (!I &&
              T() &&
              ((re = I = window),
              (ie = re.document || {}),
              (ae.gsap = Xn),
              (re.gsapVersions ||= []).push(Xn.version),
              se(L || re.GreenSockGlobals || (!re.gsap && re) || {}),
              Pt.forEach(Ft)),
            (u = typeof requestAnimationFrame < `u` && requestAnimationFrame),
            c && d.sleep(),
            (l =
              u ||
              function (e) {
                return setTimeout(e, (o - d.time * 1e3 + 1) | 0);
              }),
            (Gt = 1),
            m(2));
        },
        sleep: function () {
          ((u ? cancelAnimationFrame : clearTimeout)(c), (Gt = 0), (l = ue));
        },
        lagSmoothing: function (e, r) {
          ((t = e || 1 / 0), (n = Math.min(r || 33, t)));
        },
        fps: function (e) {
          ((a = 1e3 / (e || 240)), (o = d.time * 1e3 + a));
        },
        add: function (e, t, n) {
          var r = t
            ? function (t, n, i, a) {
                (e(t, n, i, a), d.remove(r));
              }
            : e;
          return (d.remove(e), s[n ? `unshift` : `push`](r), qt(), r);
        },
        remove: function (e, t) {
          ~(t = s.indexOf(e)) && s.splice(t, 1) && p >= t && p--;
        },
        _listeners: s,
      }),
      d
    );
  })(),
  qt = function () {
    return !Gt && Kt.wake();
  },
  K = {},
  Jt = /^[\d.\-M][\d.\-,\s]/,
  Yt = /["']/g,
  Xt = function (e) {
    for (
      var t = {},
        n = e.substr(1, e.length - 3).split(`:`),
        r = n[0],
        i = 1,
        a = n.length,
        o,
        s,
        c;
      i < a;
      i++
    )
      ((s = n[i]),
        (o = i === a - 1 ? s.length : s.lastIndexOf(`,`)),
        (c = s.substr(0, o)),
        (t[r] = isNaN(c) ? c.replace(Yt, ``).trim() : +c),
        (r = s.substr(o + 1).trim()));
    return t;
  },
  Zt = function (e) {
    var t = e.indexOf(`(`) + 1,
      n = e.indexOf(`)`),
      r = e.indexOf(`(`, t);
    return e.substring(t, ~r && r < n ? e.indexOf(`)`, n + 1) : n);
  },
  Qt = function (e) {
    var t = (e + ``).split(`(`),
      n = K[t[0]];
    return n && t.length > 1 && n.config
      ? n.config.apply(
          null,
          ~e.indexOf(`{`) ? [Xt(t[1])] : Zt(e).split(`,`).map(G),
        )
      : K._CE && Jt.test(e)
        ? K._CE(``, e)
        : n;
  },
  $t = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  en = function (e, t) {
    return (e && (b(e) ? e : K[e] || Qt(e))) || t;
  },
  tn = function (e, t, n, r) {
    (n === void 0 &&
      (n = function (e) {
        return 1 - t(1 - e);
      }),
      r === void 0 &&
        (r = function (e) {
          return e < 0.5 ? t(e * 2) / 2 : 1 - t((1 - e) * 2) / 2;
        }));
    var i = { easeIn: t, easeOut: n, easeInOut: r },
      a;
    return (
      H(e, function (e) {
        for (var t in ((K[e] = ae[e] = i), (K[(a = e.toLowerCase())] = n), i))
          K[
            a + (t === `easeIn` ? `.in` : t === `easeOut` ? `.out` : `.inOut`)
          ] = K[e + `.` + t] = i[t];
      }),
      i
    );
  },
  nn = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  rn = function e(t, n, r) {
    var i = n >= 1 ? n : 1,
      a = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      o = (a / p) * (Math.asin(1 / i) || 0),
      s = function (e) {
        return e === 1 ? 1 : i * 2 ** (-10 * e) * v((e - o) * a) + 1;
      },
      c =
        t === `out`
          ? s
          : t === `in`
            ? function (e) {
                return 1 - s(1 - e);
              }
            : nn(s);
    return (
      (a = p / a),
      (c.config = function (n, r) {
        return e(t, n, r);
      }),
      c
    );
  },
  an = function e(t, n) {
    n === void 0 && (n = 1.70158);
    var r = function (e) {
        return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
      },
      i =
        t === `out`
          ? r
          : t === `in`
            ? function (e) {
                return 1 - r(1 - e);
              }
            : nn(r);
    return (
      (i.config = function (n) {
        return e(t, n);
      }),
      i
    );
  };
(H(`Linear,Quad,Cubic,Quart,Quint,Strong`, function (e, t) {
  var n = t < 5 ? t + 1 : t;
  tn(
    e + `,Power` + (n - 1),
    t
      ? function (e) {
          return e ** +n;
        }
      : function (e) {
          return e;
        },
    function (e) {
      return 1 - (1 - e) ** n;
    },
    function (e) {
      return e < 0.5 ? (e * 2) ** n / 2 : 1 - ((1 - e) * 2) ** n / 2;
    },
  );
}),
  (K.Linear.easeNone = K.none = K.Linear.easeIn),
  tn(`Elastic`, rn(`in`), rn(`out`), rn()),
  (function (e, t) {
    var n = 1 / t,
      r = 2 * n,
      i = 2.5 * n,
      a = function (a) {
        return a < n
          ? e * a * a
          : a < r
            ? e * (a - 1.5 / t) ** 2 + 0.75
            : a < i
              ? e * (a -= 2.25 / t) * a + 0.9375
              : e * (a - 2.625 / t) ** 2 + 0.984375;
      };
    tn(
      `Bounce`,
      function (e) {
        return 1 - a(1 - e);
      },
      a,
    );
  })(7.5625, 2.75),
  tn(`Expo`, function (e) {
    return 2 ** (10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
  }),
  tn(`Circ`, function (e) {
    return -(g(1 - e * e) - 1);
  }),
  tn(`Sine`, function (e) {
    return e === 1 ? 1 : -_(e * m) + 1;
  }),
  tn(`Back`, an(`in`), an(`out`), an()),
  (K.SteppedEase =
    K.steps =
    ae.SteppedEase =
      {
        config: function (e, t) {
          e === void 0 && (e = 1);
          var n = 1 / e,
            r = e + +!t,
            i = +!!t,
            a = 1 - f;
          return function (e) {
            return (((r * ct(0, a, e)) | 0) + i) * n;
          };
        },
      }),
  (s.ease = K[`quad.out`]),
  H(
    `onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,
    function (e) {
      return (be += e + `,` + e + `Params,`);
    },
  ));
var on = function (e, t) {
    ((this.id = h++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : Se),
      (this.set = t ? t.getSetter : Dn));
  },
  sn = (function () {
    function e(e) {
      ((this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
          ((this._rDelay = e.repeatDelay || 0),
          (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        nt(this, +e.duration, 1, 1),
        (this.data = e.data),
        u && ((this._ctx = u), u.data.push(this)),
        Gt || Kt.wake());
    }
    var t = e.prototype;
    return (
      (t.delay = function (e) {
        return e || e === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + e - this._delay),
            (this._delay = e),
            this)
          : this._delay;
      }),
      (t.duration = function (e) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e,
            )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (e) {
        return arguments.length
          ? ((this._dirty = 0),
            nt(
              this,
              this._repeat < 0
                ? e
                : (e - this._repeat * this._rDelay) / (this._repeat + 1),
            ))
          : this._tDur;
      }),
      (t.totalTime = function (e, t) {
        if ((qt(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (qe(this, e), !n._dp || n.parent || Je(n, this); n && n.parent;)
            (n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && e < this._tDur) ||
              (this._ts < 0 && e > 0) ||
              (!this._tDur && !e)) &&
            Ye(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== e ||
            (!this._dur && !t) ||
            (this._initted && Math.abs(this._zTime) === f) ||
            (!this._initted && this._dur && e) ||
            (!e && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = e), De(this, e, t)),
          this
        );
      }),
      (t.time = function (e, t) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), e + Ue(this)) %
                (this._dur + this._rDelay) || (e ? this._dur : 0),
              t,
            )
          : this._time;
      }),
      (t.totalProgress = function (e, t) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * e, t)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (t.progress = function (e, t) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) +
                Ue(this),
              t,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : +(this.rawTime() > 0);
      }),
      (t.iteration = function (e, t) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (e - 1) * n, t)
          : this._repeat
            ? We(this._tTime, n) + 1
            : 1;
      }),
      (t.timeScale = function (e, t) {
        if (!arguments.length) return this._rts === -f ? 0 : this._rts;
        if (this._rts === e) return this;
        var n =
          this.parent && this._ts ? Ge(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +e || 0),
          (this._ts = this._ps || e === -f ? 0 : this._rts),
          this.totalTime(
            ct(-Math.abs(this._delay), this.totalDuration(), n),
            t !== !1,
          ),
          Ke(this),
          Be(this)
        );
      }),
      (t.paused = function (e) {
        return arguments.length
          ? (this._ps !== e &&
              ((this._ps = e),
              e
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (qt(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== f &&
                      (this._tTime -= f),
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (e) {
        if (arguments.length) {
          this._start = W(e);
          var t = this.parent || this._dp;
          return (
            t &&
              (t._sort || !this.parent) &&
              Ye(t, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (t.endTime = function (e) {
        return (
          this._start +
          (w(e) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (e) {
        var t = this.parent || this._dp;
        return t
          ? e &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? Ge(t.rawTime(e), this)
              : this._tTime
          : this._tTime;
      }),
      (t.revert = function (e) {
        e === void 0 && (e = fe);
        var t = l;
        return (
          (l = e),
          Ee(this) &&
            (this.timeline && this.timeline.revert(e),
            this.totalTime(-0.01, e.suppressEvents)),
          this.data !== `nested` && e.kill !== !1 && this.kill(),
          (l = t),
          this
        );
      }),
      (t.globalTime = function (e) {
        for (var t = this, n = arguments.length ? e : t.rawTime(); t;)
          ((n = t._start + n / (Math.abs(t._ts) || 1)), (t = t._dp));
        return !this.parent && this._sat ? this._sat.globalTime(e) : n;
      }),
      (t.repeat = function (e) {
        return arguments.length
          ? ((this._repeat = e === 1 / 0 ? -2 : e), rt(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (t.repeatDelay = function (e) {
        if (arguments.length) {
          var t = this._time;
          return ((this._rDelay = e), rt(this), t ? this.time(t) : this);
        }
        return this._rDelay;
      }),
      (t.yoyo = function (e) {
        return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
      }),
      (t.seek = function (e, t) {
        return this.totalTime(at(this, e), w(t));
      }),
      (t.restart = function (e, t) {
        return (
          this.play().totalTime(e ? -this._delay : 0, w(t)),
          this._dur || (this._zTime = -f),
          this
        );
      }),
      (t.play = function (e, t) {
        return (e != null && this.seek(e, t), this.reversed(!1).paused(!1));
      }),
      (t.reverse = function (e, t) {
        return (
          e != null && this.seek(e || this.totalDuration(), t),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (e, t) {
        return (e != null && this.seek(e, t), this.paused(!0));
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (e) {
        return arguments.length
          ? (!!e !== this.reversed() &&
              this.timeScale(-this._rts || (e ? -f : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -f), this);
      }),
      (t.isActive = function () {
        var e = this.parent || this._dp,
          t = this._start,
          n;
        return !!(
          !e ||
          (this._ts &&
            this._initted &&
            e.isActive() &&
            (n = e.rawTime(!0)) >= t &&
            n < this.endTime(!0) - f)
        );
      }),
      (t.eventCallback = function (e, t, n) {
        var r = this.vars;
        return arguments.length > 1
          ? (t
              ? ((r[e] = t),
                n && (r[e + `Params`] = n),
                e === `onUpdate` && (this._onUpdate = t))
              : delete r[e],
            this)
          : r[e];
      }),
      (t.then = function (e) {
        var t = this,
          n = t._prom;
        return new Promise(function (r) {
          var i = b(e) ? e : Oe,
            a = function () {
              var e = t.then;
              ((t.then = null),
                n && n(),
                b(i) && (i = i(t)) && (i.then || i === t) && (t.then = e),
                r(i),
                (t.then = e));
            };
          (t._initted && t.totalProgress() === 1 && t._ts >= 0) ||
          (!t._tTime && t._ts < 0)
            ? a()
            : (t._prom = a);
        });
      }),
      (t.kill = function () {
        Mt(this);
      }),
      e
    );
  })();
ke(sn.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -f,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var cn = (function (e) {
  a(t, e);
  function t(t, n) {
    var r;
    return (
      t === void 0 && (t = {}),
      (r = e.call(this, t) || this),
      (r.labels = {}),
      (r.smoothChildTiming = !!t.smoothChildTiming),
      (r.autoRemoveChildren = !!t.autoRemoveChildren),
      (r._sort = w(t.sortChildren)),
      F && Ye(t.parent || F, i(r), n),
      t.reversed && r.reverse(),
      t.paused && r.paused(!0),
      t.scrollTrigger && Xe(i(r), t.scrollTrigger),
      r
    );
  }
  var n = t.prototype;
  return (
    (n.to = function (e, t, n) {
      return (ot(0, arguments, this), this);
    }),
    (n.from = function (e, t, n) {
      return (ot(1, arguments, this), this);
    }),
    (n.fromTo = function (e, t, n, r) {
      return (ot(2, arguments, this), this);
    }),
    (n.set = function (e, t, n) {
      return (
        (t.duration = 0),
        (t.parent = this),
        Pe(t).repeatDelay || (t.repeat = 0),
        (t.immediateRender = !!t.immediateRender),
        new Sn(e, t, at(this, n), 1),
        this
      );
    }),
    (n.call = function (e, t, n) {
      return Ye(this, Sn.delayedCall(0, e, t), n);
    }),
    (n.staggerTo = function (e, t, n, r, i, a, o) {
      return (
        (n.duration = t),
        (n.stagger = n.stagger || r),
        (n.onComplete = a),
        (n.onCompleteParams = o),
        (n.parent = this),
        new Sn(e, n, at(this, i)),
        this
      );
    }),
    (n.staggerFrom = function (e, t, n, r, i, a, o) {
      return (
        (n.runBackwards = 1),
        (Pe(n).immediateRender = w(n.immediateRender)),
        this.staggerTo(e, t, n, r, i, a, o)
      );
    }),
    (n.staggerFromTo = function (e, t, n, r, i, a, o, s) {
      return (
        (r.startAt = n),
        (Pe(r).immediateRender = w(r.immediateRender)),
        this.staggerTo(e, t, r, i, a, o, s)
      );
    }),
    (n.render = function (e, t, n) {
      var r = this._time,
        i = this._dirty ? this.totalDuration() : this._tDur,
        a = this._dur,
        o = e <= 0 ? 0 : W(e),
        s = this._zTime < 0 != e < 0 && (this._initted || !a),
        c,
        u,
        d,
        p,
        m,
        h,
        g,
        _,
        v,
        y,
        b,
        x;
      if (
        (this !== F && o > i && e >= 0 && (o = i), o !== this._tTime || n || s)
      ) {
        if (
          (r !== this._time &&
            a &&
            ((o += this._time - r), (e += this._time - r)),
          (c = o),
          (v = this._start),
          (_ = this._ts),
          (h = !_),
          s && (a || (r = this._zTime), (e || !t) && (this._zTime = e)),
          this._repeat)
        ) {
          if (
            ((b = this._yoyo),
            (m = a + this._rDelay),
            this._repeat < -1 && e < 0)
          )
            return this.totalTime(m * 100 + e, t, n);
          if (
            ((c = W(o % m)),
            o === i
              ? ((p = this._repeat), (c = a))
              : ((y = W(o / m)),
                (p = ~~y),
                p && p === y && ((c = a), p--),
                c > a && (c = a)),
            (y = We(this._tTime, m)),
            !r &&
              this._tTime &&
              y !== p &&
              this._tTime - y * m - this._dur <= 0 &&
              (y = p),
            b && p & 1 && ((c = a - c), (x = 1)),
            p !== y && !this._lock)
          ) {
            var S = b && y & 1,
              C = S === (b && p & 1);
            if (
              (p < y && (S = !S),
              (r = S ? 0 : o % a ? a : o),
              (this._lock = 1),
              (this.render(r || (x ? 0 : W(p * m)), t, !a)._lock = 0),
              (this._tTime = o),
              !t && this.parent && jt(this, `onRepeat`),
              this.vars.repeatRefresh &&
                !x &&
                ((this.invalidate()._lock = 1), (y = p)),
              (r && r !== this._time) ||
                h !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act) ||
                ((a = this._dur),
                (i = this._tDur),
                C &&
                  ((this._lock = 2),
                  (r = S ? a : -1e-4),
                  this.render(r, !0),
                  this.vars.repeatRefresh && !x && this.invalidate()),
                (this._lock = 0),
                !this._ts && !h))
            )
              return this;
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((g = tt(this, W(r), W(c))), g && (o -= c - (c = g._start))),
          (this._tTime = o),
          (this._time = c),
          (this._act = !!_),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = e),
            (r = 0)),
          !r && o && a && !t && !y && (jt(this, `onStart`), this._tTime !== o))
        )
          return this;
        if (c >= r && e >= 0)
          for (u = this._first; u;) {
            if (
              ((d = u._next), (u._act || c >= u._start) && u._ts && g !== u)
            ) {
              if (u.parent !== this) return this.render(e, t, n);
              if (
                (u.render(
                  u._ts > 0
                    ? (c - u._start) * u._ts
                    : (u._dirty ? u.totalDuration() : u._tDur) +
                        (c - u._start) * u._ts,
                  t,
                  n,
                ),
                c !== this._time || (!this._ts && !h))
              ) {
                ((g = 0), d && (o += this._zTime = -f));
                break;
              }
            }
            u = d;
          }
        else {
          u = this._last;
          for (var w = e < 0 ? e : c; u;) {
            if (((d = u._prev), (u._act || w <= u._end) && u._ts && g !== u)) {
              if (u.parent !== this) return this.render(e, t, n);
              if (
                (u.render(
                  u._ts > 0
                    ? (w - u._start) * u._ts
                    : (u._dirty ? u.totalDuration() : u._tDur) +
                        (w - u._start) * u._ts,
                  t,
                  n || (l && Ee(u)),
                ),
                c !== this._time || (!this._ts && !h))
              ) {
                ((g = 0), d && (o += this._zTime = w ? -f : f));
                break;
              }
            }
            u = d;
          }
        }
        if (
          g &&
          !t &&
          (this.pause(),
          (g.render(c >= r ? 0 : -f)._zTime = c >= r ? 1 : -1),
          this._ts)
        )
          return ((this._start = v), Ke(this), this.render(e, t, n));
        (this._onUpdate && !t && jt(this, `onUpdate`, !0),
          ((o === i && this._tTime >= this.totalDuration()) || (!o && r)) &&
            (v === this._start || Math.abs(_) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((e || !a) &&
                ((o === i && this._ts > 0) || (!o && this._ts < 0)) &&
                Re(this, 1),
              !t &&
                !(e < 0 && !r) &&
                (o || r || !i) &&
                (jt(
                  this,
                  o === i && e >= 0 ? `onComplete` : `onReverseComplete`,
                  !0,
                ),
                this._prom &&
                  !(o < i && this.timeScale() > 0) &&
                  this._prom()))));
      }
      return this;
    }),
    (n.add = function (e, t) {
      var n = this;
      if ((x(t) || (t = at(this, t, e)), !(e instanceof sn))) {
        if (O(e))
          return (
            e.forEach(function (e) {
              return n.add(e, t);
            }),
            this
          );
        if (y(e)) return this.addLabel(e, t);
        if (b(e)) e = Sn.delayedCall(0, e);
        else return this;
      }
      return this === e ? this : Ye(this, e, t);
    }),
    (n.getChildren = function (e, t, n, r) {
      (e === void 0 && (e = !0),
        t === void 0 && (t = !0),
        n === void 0 && (n = !0),
        r === void 0 && (r = -d));
      for (var i = [], a = this._first; a;)
        (a._start >= r &&
          (a instanceof Sn
            ? t && i.push(a)
            : (n && i.push(a), e && i.push.apply(i, a.getChildren(!0, t, n)))),
          (a = a._next));
      return i;
    }),
    (n.getById = function (e) {
      for (var t = this.getChildren(1, 1, 1), n = t.length; n--;)
        if (t[n].vars.id === e) return t[n];
    }),
    (n.remove = function (e) {
      return y(e)
        ? this.removeLabel(e)
        : b(e)
          ? this.killTweensOf(e)
          : (e.parent === this && Le(this, e),
            e === this._recent && (this._recent = this._last),
            ze(this));
    }),
    (n.totalTime = function (t, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = W(
              Kt.time -
                (this._ts > 0
                  ? t / this._ts
                  : (this.totalDuration() - t) / -this._ts),
            )),
          e.prototype.totalTime.call(this, t, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (n.addLabel = function (e, t) {
      return ((this.labels[e] = at(this, t)), this);
    }),
    (n.removeLabel = function (e) {
      return (delete this.labels[e], this);
    }),
    (n.addPause = function (e, t, n) {
      var r = Sn.delayedCall(0, t || ue, n);
      return (
        (r.data = `isPause`),
        (this._hasPause = 1),
        Ye(this, r, at(this, e))
      );
    }),
    (n.removePause = function (e) {
      var t = this._first;
      for (e = at(this, e); t;)
        (t._start === e && t.data === `isPause` && Re(t), (t = t._next));
    }),
    (n.killTweensOf = function (e, t, n) {
      for (var r = this.getTweensOf(e, n), i = r.length; i--;)
        pn !== r[i] && r[i].kill(e, t);
      return this;
    }),
    (n.getTweensOf = function (e, t) {
      for (var n = [], r = mt(e), i = this._first, a = x(t), o; i;)
        (i instanceof Sn
          ? we(i._targets, r) &&
            (a
              ? (!pn || (i._initted && i._ts)) &&
                i.globalTime(0) <= t &&
                i.globalTime(i.totalDuration()) > t
              : !t || i.isActive()) &&
            n.push(i)
          : (o = i.getTweensOf(r, t)).length && n.push.apply(n, o),
          (i = i._next));
      return n;
    }),
    (n.tweenTo = function (e, t) {
      t ||= {};
      var n = this,
        r = at(n, e),
        i = t,
        a = i.startAt,
        o = i.onStart,
        s = i.onStartParams,
        c = i.immediateRender,
        l,
        u = Sn.to(
          n,
          ke(
            {
              ease: t.ease || `none`,
              lazy: !1,
              immediateRender: !1,
              time: r,
              overwrite: `auto`,
              duration:
                t.duration ||
                Math.abs(
                  (r - (a && `time` in a ? a.time : n._time)) / n.timeScale(),
                ) ||
                f,
              onStart: function () {
                if ((n.pause(), !l)) {
                  var e =
                    t.duration ||
                    Math.abs(
                      (r - (a && `time` in a ? a.time : n._time)) /
                        n.timeScale(),
                    );
                  (u._dur !== e && nt(u, e, 0, 1).render(u._time, !0, !0),
                    (l = 1));
                }
                o && o.apply(u, s || []);
              },
            },
            t,
          ),
        );
      return c ? u.render(0) : u;
    }),
    (n.tweenFromTo = function (e, t, n) {
      return this.tweenTo(t, ke({ startAt: { time: at(this, e) } }, n));
    }),
    (n.recent = function () {
      return this._recent;
    }),
    (n.nextLabel = function (e) {
      return (e === void 0 && (e = this._time), At(this, at(this, e)));
    }),
    (n.previousLabel = function (e) {
      return (e === void 0 && (e = this._time), At(this, at(this, e), 1));
    }),
    (n.currentLabel = function (e) {
      return arguments.length
        ? this.seek(e, !0)
        : this.previousLabel(this._time + f);
    }),
    (n.shiftChildren = function (e, t, n) {
      n === void 0 && (n = 0);
      var r = this._first,
        i = this.labels,
        a;
      for (e = W(e); r;)
        (r._start >= n && ((r._start += e), (r._end += e)), (r = r._next));
      if (t) for (a in i) i[a] >= n && (i[a] += e);
      return ze(this);
    }),
    (n.invalidate = function (t) {
      var n = this._first;
      for (this._lock = 0; n;) (n.invalidate(t), (n = n._next));
      return e.prototype.invalidate.call(this, t);
    }),
    (n.clear = function (e) {
      e === void 0 && (e = !0);
      for (var t = this._first, n; t;) ((n = t._next), this.remove(t), (t = n));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        e && (this.labels = {}),
        ze(this)
      );
    }),
    (n.totalDuration = function (e) {
      var t = 0,
        n = this,
        r = n._last,
        i = d,
        a,
        o,
        s;
      if (arguments.length)
        return n.timeScale(
          (n._repeat < 0 ? n.duration() : n.totalDuration()) /
            (n.reversed() ? -e : e),
        );
      if (n._dirty) {
        for (s = n.parent; r;)
          ((a = r._prev),
            r._dirty && r.totalDuration(),
            (o = r._start),
            o > i && n._sort && r._ts && !n._lock
              ? ((n._lock = 1), (Ye(n, r, o - r._delay, 1)._lock = 0))
              : (i = o),
            o < 0 &&
              r._ts &&
              ((t -= o),
              ((!s && !n._dp) || (s && s.smoothChildTiming)) &&
                ((n._start += W(o / n._ts)), (n._time -= o), (n._tTime -= o)),
              n.shiftChildren(-o, !1, -1 / 0),
              (i = 0)),
            r._end > t && r._ts && (t = r._end),
            (r = a));
        (nt(n, n === F && n._time > t ? n._time : t, 1, 1), (n._dirty = 0));
      }
      return n._tDur;
    }),
    (t.updateRoot = function (e) {
      if ((F._ts && (De(F, Ge(e, F)), (ge = Kt.frame)), Kt.frame >= ye)) {
        ye += o.autoSleep || 120;
        var t = F._first;
        if ((!t || !t._ts) && o.autoSleep && Kt._listeners.length < 2) {
          for (; t && !t._ts;) t = t._next;
          t || Kt.sleep();
        }
      }
    }),
    t
  );
})(sn);
ke(cn.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var ln = function (e, t, n, r, i, a, o) {
    var s = new In(this._pt, e, t, 0, 1, An, null, i),
      c = 0,
      l = 0,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _;
    for (
      s.b = n,
        s.e = r,
        n += ``,
        r += ``,
        (g = ~r.indexOf(`random(`)) && (r = Dt(r)),
        a && ((_ = [n, r]), a(_, e, t), (n = _[0]), (r = _[1])),
        d = n.match(P) || [];
      (u = P.exec(r));
    )
      ((p = u[0]),
        (m = r.substring(c, u.index)),
        f ? (f = (f + 1) % 5) : m.substr(-5) === `rgba(` && (f = 1),
        p !== d[l++] &&
          ((h = parseFloat(d[l - 1]) || 0),
          (s._pt = {
            _next: s._pt,
            p: m || l === 1 ? m : `,`,
            s: h,
            c: p.charAt(1) === `=` ? Ce(h, p) - h : parseFloat(p) - h,
            m: f && f < 4 ? Math.round : 0,
          }),
          (c = P.lastIndex)));
    return (
      (s.c = c < r.length ? r.substring(c, r.length) : ``),
      (s.fp = o),
      (ee.test(r) || g) && (s.e = 0),
      (this._pt = s),
      s
    );
  },
  un = function (e, t, n, r, i, a, s, c, l, u) {
    b(r) && (r = r(i || 0, e, a));
    var d = e[t],
      f =
        n === `get`
          ? b(d)
            ? l
              ? e[
                  t.indexOf(`set`) || !b(e[`get` + t.substr(3)])
                    ? t
                    : `get` + t.substr(3)
                ](l)
              : e[t]()
            : d
          : n,
      p = b(d) ? (l ? Tn : wn) : Cn,
      m;
    if (
      (y(r) &&
        (~r.indexOf(`random(`) && (r = Dt(r)),
        r.charAt(1) === `=` &&
          ((m = Ce(f, r) + (lt(f) || 0)), (m || m === 0) && (r = m))),
      !u || f !== r || mn)
    )
      return !isNaN(f * r) && r !== ``
        ? ((m = new In(
            this._pt,
            e,
            t,
            +f || 0,
            r - (f || 0),
            typeof d == `boolean` ? kn : On,
            0,
            p,
          )),
          l && (m.fp = l),
          s && m.modifier(s, this, e),
          (this._pt = m))
        : (!d && !(t in e) && ce(t, r),
          ln.call(this, e, t, f, r, p, c || o.stringFilter, l));
  },
  dn = function (e, t, n, r, i) {
    if (
      (b(e) && (e = yn(e, i, t, n, r)),
      !C(e) || (e.style && e.nodeType) || O(e) || D(e))
    )
      return y(e) ? yn(e, i, t, n, r) : e;
    var a = {},
      o;
    for (o in e) a[o] = yn(e[o], i, t, n, r);
    return a;
  },
  fn = function (e, t, n, r, i, a) {
    var o, s, c, l;
    if (
      _e[e] &&
      (o = new _e[e]()).init(
        i,
        o.rawVars ? t[e] : dn(t[e], r, i, a, n),
        n,
        r,
        a,
      ) !== !1 &&
      ((n._pt = s = new In(n._pt, i, e, 0, 1, o.render, o, 0, o.priority)),
      n !== Nt)
    )
      for (c = n._ptLookup[n._targets.indexOf(i)], l = o._props.length; l--;)
        c[o._props[l]] = s;
    return o;
  },
  pn,
  mn,
  hn = function e(t, n, r) {
    var i = t.vars,
      a = i.ease,
      o = i.startAt,
      u = i.immediateRender,
      p = i.lazy,
      m = i.onUpdate,
      h = i.runBackwards,
      g = i.yoyoEase,
      _ = i.keyframes,
      v = i.autoRevert,
      y = t._dur,
      b = t._startAt,
      x = t._targets,
      S = t.parent,
      C = S && S.data === `nested` ? S.vars.targets : x,
      T = t._overwrite === `auto` && !c,
      E = t.timeline,
      D = i.easeReverse || g,
      O,
      k,
      A,
      j,
      M,
      N,
      P,
      ee,
      te,
      ne,
      re,
      I,
      ie;
    if (
      (E && (!_ || !a) && (a = `none`),
      (t._ease = en(a, s.ease)),
      (t._rEase = D && (en(D) || t._ease)),
      (t._from = !E && !!i.runBackwards),
      t._from && (t.ratio = 1),
      !E || (_ && !i.stagger))
    ) {
      if (
        ((ee = x[0] ? xe(x[0]).harness : 0),
        (I = ee && i[ee.prop]),
        (O = Ne(i, pe)),
        b &&
          (b._zTime < 0 && b.progress(1),
          n < 0 && h && u && !v ? b.render(-1, !0) : b.revert(h && y ? de : z),
          (b._lazy = 0)),
        o)
      ) {
        if (
          (Re(
            (t._startAt = Sn.set(
              x,
              ke(
                {
                  data: `isStart`,
                  overwrite: !1,
                  parent: S,
                  immediateRender: !0,
                  lazy: !b && w(p),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    m &&
                    function () {
                      return jt(t, `onUpdate`);
                    },
                  stagger: 0,
                },
                o,
              ),
            )),
          ),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          n < 0 && (l || (!u && !v)) && t._startAt.revert(de),
          u && y && n <= 0 && r <= 0)
        ) {
          n && (t._zTime = n);
          return;
        }
      } else if (h && y && !b) {
        if (
          (n && (u = !1),
          (A = ke(
            {
              overwrite: !1,
              data: `isFromStart`,
              lazy: u && !b && w(p),
              immediateRender: u,
              stagger: 0,
              parent: S,
            },
            O,
          )),
          I && (A[ee.prop] = I),
          Re((t._startAt = Sn.set(x, A))),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          n < 0 && (l ? t._startAt.revert(de) : t._startAt.render(-1, !0)),
          (t._zTime = n),
          !u)
        )
          e(t._startAt, f, f);
        else if (!n) return;
      }
      for (
        t._pt = t._ptCache = 0, p = (y && w(p)) || (p && !y), k = 0;
        k < x.length;
        k++
      ) {
        if (
          ((M = x[k]),
          (P = M._gsap || V(x)[k]._gsap),
          (t._ptLookup[k] = ne = {}),
          he[P.id] && me.length && Te(),
          (re = C === x ? k : C.indexOf(M)),
          ee &&
            (te = new ee()).init(M, I || O, t, re, C) !== !1 &&
            ((t._pt = j =
              new In(t._pt, M, te.name, 0, 1, te.render, te, 0, te.priority)),
            te._props.forEach(function (e) {
              ne[e] = j;
            }),
            te.priority && (N = 1)),
          !ee || I)
        )
          for (A in O)
            _e[A] && (te = fn(A, O, t, re, M, C))
              ? te.priority && (N = 1)
              : (ne[A] = j =
                  un.call(t, M, A, `get`, O[A], re, C, 0, i.stringFilter));
        (t._op && t._op[k] && t.kill(M, t._op[k]),
          T &&
            t._pt &&
            ((pn = t),
            F.killTweensOf(M, ne, t.globalTime(n)),
            (ie = !t.parent),
            (pn = 0)),
          t._pt && p && (he[P.id] = 1));
      }
      (N && Fn(t), t._onInit && t._onInit(t));
    }
    ((t._onUpdate = m),
      (t._initted = (!t._op || t._pt) && !ie),
      _ && n <= 0 && E.render(d, !0, !0));
  },
  gn = function (e, t, n, r, i, a, o, s) {
    var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      l,
      u,
      d,
      f;
    if (!c)
      for (
        c = e._ptCache[t] = [], d = e._ptLookup, f = e._targets.length;
        f--;
      ) {
        if (((l = d[f][t]), l && l.d && l.d._pt))
          for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
        if (!l)
          return (
            (mn = 1),
            (e.vars[t] = `+=0`),
            hn(e, o),
            (mn = 0),
            s
              ? R(
                  t +
                    ` not eligible for reset. Try splitting into individual properties`,
                )
              : 1
          );
        c.push(l);
      }
    for (f = c.length; f--;)
      ((u = c[f]),
        (l = u._pt || u),
        (l.s = (r || r === 0) && !i ? r : l.s + (r || 0) + a * l.c),
        (l.c = n - l.s),
        (u.e &&= U(n) + lt(u.e)),
        (u.b &&= l.s + lt(u.b)));
  },
  _n = function (e, t) {
    var n = e[0] ? xe(e[0]).harness : 0,
      r = n && n.aliases,
      i,
      a,
      o,
      s;
    if (!r) return t;
    for (a in ((i = je({}, t)), r))
      if (a in i) for (s = r[a].split(`,`), o = s.length; o--;) i[s[o]] = i[a];
    return i;
  },
  vn = function (e, t, n, r) {
    var i = t.ease || r || `power1.inOut`,
      a,
      o;
    if (O(t))
      ((o = n[e] || (n[e] = [])),
        t.forEach(function (e, n) {
          return o.push({ t: (n / (t.length - 1)) * 100, v: e, e: i });
        }));
    else
      for (a in t)
        ((o = n[a] || (n[a] = [])),
          a === `ease` || o.push({ t: parseFloat(e), v: t[a], e: i }));
  },
  yn = function (e, t, n, r, i) {
    return b(e)
      ? e.call(t, n, r, i)
      : y(e) && ~e.indexOf(`random(`)
        ? Dt(e)
        : e;
  },
  bn =
    be +
    `repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,
  xn = {};
H(bn + `,id,stagger,delay,duration,paused,scrollTrigger`, function (e) {
  return (xn[e] = 1);
});
var Sn = (function (e) {
  a(t, e);
  function t(t, n, r, a) {
    var s;
    (typeof n == `number` && ((r.duration = n), (n = r), (r = null)),
      (s = e.call(this, a ? n : Pe(n)) || this));
    var l = s.vars,
      u = l.duration,
      d = l.delay,
      p = l.immediateRender,
      m = l.stagger,
      h = l.overwrite,
      g = l.keyframes,
      _ = l.defaults,
      v = l.scrollTrigger,
      y = n.parent || F,
      b = (O(t) || D(t) ? x(t[0]) : `length` in n) ? [t] : mt(t),
      S,
      T,
      k,
      A,
      j,
      M,
      N,
      P;
    if (
      ((s._targets = b.length
        ? V(b)
        : R(
            `GSAP target ` + t + ` not found. https://gsap.com`,
            !o.nullTargetWarn,
          ) || []),
      (s._ptLookup = []),
      (s._overwrite = h),
      g || m || E(u) || E(d))
    ) {
      n = s.vars;
      var ee = n.easeReverse || n.yoyoEase;
      if (
        ((S = s.timeline =
          new cn({
            data: `nested`,
            defaults: _ || {},
            targets: y && y.data === `nested` ? y.vars.targets : b,
          })),
        S.kill(),
        (S.parent = S._dp = i(s)),
        (S._start = 0),
        m || E(u) || E(d))
      ) {
        if (((A = b.length), (N = m && _t(m)), C(m)))
          for (j in m) ~bn.indexOf(j) && ((P ||= {}), (P[j] = m[j]));
        for (T = 0; T < A; T++)
          ((k = Ne(n, xn)),
            (k.stagger = 0),
            ee && (k.easeReverse = ee),
            P && je(k, P),
            (M = b[T]),
            (k.duration = +yn(u, i(s), T, M, b)),
            (k.delay = (+yn(d, i(s), T, M, b) || 0) - s._delay),
            !m &&
              A === 1 &&
              k.delay &&
              ((s._delay = d = k.delay), (s._start += d), (k.delay = 0)),
            S.to(M, k, N ? N(T, M, b) : 0),
            (S._ease = K.none));
        S.duration() ? (u = d = 0) : (s.timeline = 0);
      } else if (g) {
        (Pe(ke(S.vars.defaults, { ease: `none` })),
          (S._ease = en(g.ease || n.ease || `none`)));
        var te = 0,
          ne,
          re,
          I;
        if (O(g))
          (g.forEach(function (e) {
            return S.to(b, e, `>`);
          }),
            S.duration());
        else {
          for (j in ((k = {}), g))
            j === `ease` || j === `easeEach` || vn(j, g[j], k, g.easeEach);
          for (j in k)
            for (
              ne = k[j].sort(function (e, t) {
                return e.t - t.t;
              }),
                te = 0,
                T = 0;
              T < ne.length;
              T++
            )
              ((re = ne[T]),
                (I = {
                  ease: re.e,
                  duration: ((re.t - (T ? ne[T - 1].t : 0)) / 100) * u,
                }),
                (I[j] = re.v),
                S.to(b, I, te),
                (te += I.duration));
          S.duration() < u && S.to({}, { duration: u - S.duration() });
        }
      }
      u || s.duration((u = S.duration()));
    } else s.timeline = 0;
    return (
      h === !0 && !c && ((pn = i(s)), F.killTweensOf(b), (pn = 0)),
      Ye(y, i(s), r),
      n.reversed && s.reverse(),
      n.paused && s.paused(!0),
      (p ||
        (!u &&
          !g &&
          s._start === W(y._time) &&
          w(p) &&
          He(i(s)) &&
          y.data !== `nested`)) &&
        ((s._tTime = -f), s.render(Math.max(0, -d) || 0)),
      v && Xe(i(s), v),
      s
    );
  }
  var n = t.prototype;
  return (
    (n.render = function (e, t, n) {
      var r = this._time,
        i = this._tDur,
        a = this._dur,
        o = e < 0,
        s = e > i - f && !o ? i : e < f ? 0 : e,
        c,
        l,
        u,
        d,
        p,
        m,
        h,
        g;
      if (!a) et(this, e, t, n);
      else if (
        s !== this._tTime ||
        !e ||
        n ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== o) ||
        this._lazy
      ) {
        if (((c = s), (g = this.timeline), this._repeat)) {
          if (((d = a + this._rDelay), this._repeat < -1 && o))
            return this.totalTime(d * 100 + e, t, n);
          if (
            ((c = W(s % d)),
            s === i
              ? ((u = this._repeat), (c = a))
              : ((p = W(s / d)),
                (u = ~~p),
                u && u === p ? ((c = a), u--) : c > a && (c = a)),
            (m = this._yoyo && u & 1),
            m && (c = a - c),
            (p = We(this._tTime, d)),
            c === r && !n && this._initted && u === p)
          )
            return ((this._tTime = s), this);
          u !== p &&
            this.vars.repeatRefresh &&
            !m &&
            !this._lock &&
            c !== d &&
            this._initted &&
            ((this._lock = n = 1),
            (this.render(W(d * u), !0).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (Ze(this, o ? e : c, n, t, s)) return ((this._tTime = 0), this);
          if (r !== this._time && !(n && this.vars.repeatRefresh && u !== p))
            return this;
          if (a !== this._dur) return this.render(e, t, n);
        }
        if (this._rEase) {
          var _ = c < r;
          if (_ !== this._inv) {
            var v = _ ? r : a - r;
            ((this._inv = _),
              this._from && (this.ratio = 1 - this.ratio),
              (this._invRatio = this.ratio),
              (this._invTime = r),
              (this._invRecip = v ? (_ ? -1 : 1) / v : 0),
              (this._invScale = _ ? -this.ratio : 1 - this.ratio),
              (this._invEase = _ ? this._rEase : this._ease));
          }
          this.ratio = h =
            this._invRatio +
            this._invScale *
              this._invEase((c - this._invTime) * this._invRecip);
        } else this.ratio = h = this._ease(c / a);
        if (
          (this._from && (this.ratio = h = 1 - h),
          (this._tTime = s),
          (this._time = c),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          !r && s && !t && !p && (jt(this, `onStart`), this._tTime !== s))
        )
          return this;
        for (l = this._pt; l;) (l.r(h, l.d), (l = l._next));
        ((g && g.render(e < 0 ? e : g._dur * g._ease(c / this._dur), t, n)) ||
          (this._startAt && (this._zTime = e)),
          this._onUpdate &&
            !t &&
            (o && Ve(this, e, t, n), jt(this, `onUpdate`)),
          this._repeat &&
            u !== p &&
            this.vars.onRepeat &&
            !t &&
            this.parent &&
            jt(this, `onRepeat`),
          (s === this._tDur || !s) &&
            this._tTime === s &&
            (o && !this._onUpdate && Ve(this, e, !0, !0),
            (e || !a) &&
              ((s === this._tDur && this._ts > 0) || (!s && this._ts < 0)) &&
              Re(this, 1),
            !t &&
              !(o && !r) &&
              (s || r || m) &&
              (jt(this, s === i ? `onComplete` : `onReverseComplete`, !0),
              this._prom && !(s < i && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (n.targets = function () {
      return this._targets;
    }),
    (n.invalidate = function (t) {
      return (
        (!t || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(t),
        e.prototype.invalidate.call(this, t)
      );
    }),
    (n.resetTo = function (e, t, n, r, i) {
      (Gt || Kt.wake(), this._ts || this.play());
      var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        o;
      return (
        this._initted || hn(this, a),
        (o = this._ease(a / this._dur)),
        gn(this, e, t, n, r, o, a, i)
          ? this.resetTo(e, t, n, r, 1)
          : (qe(this, 0),
            this.parent ||
              Ie(
                this._dp,
                this,
                `_first`,
                `_last`,
                this._dp._sort ? `_start` : 0,
              ),
            this.render(0))
      );
    }),
    (n.kill = function (e, t) {
      if ((t === void 0 && (t = `all`), !e && (!t || t === `all`)))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? Mt(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!l),
          this
        );
      if (this.timeline) {
        var n = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(e, t, pn && pn.vars.overwrite !== !0)
            ._first || Mt(this),
          this.parent &&
            n !== this.timeline.totalDuration() &&
            nt(this, (this._dur * this.timeline._tDur) / n, 0, 1),
          this
        );
      }
      var r = this._targets,
        i = e ? mt(e) : r,
        a = this._ptLookup,
        o = this._pt,
        s,
        c,
        u,
        d,
        f,
        p,
        m;
      if ((!t || t === `all`) && Fe(r, i))
        return (t === `all` && (this._pt = 0), Mt(this));
      for (
        s = this._op = this._op || [],
          t !== `all` &&
            (y(t) &&
              ((f = {}),
              H(t, function (e) {
                return (f[e] = 1);
              }),
              (t = f)),
            (t = _n(r, t))),
          m = r.length;
        m--;
      )
        if (~i.indexOf(r[m]))
          for (f in ((c = a[m]),
          t === `all`
            ? ((s[m] = t), (d = c), (u = {}))
            : ((u = s[m] = s[m] || {}), (d = t)),
          d))
            ((p = c && c[f]),
              p &&
                ((!(`kill` in p.d) || p.d.kill(f) === !0) && Le(this, p, `_pt`),
                delete c[f]),
              u !== `all` && (u[f] = 1));
      return (this._initted && !this._pt && o && Mt(this), this);
    }),
    (t.to = function (e, n) {
      return new t(e, n, arguments[2]);
    }),
    (t.from = function (e, t) {
      return ot(1, arguments);
    }),
    (t.delayedCall = function (e, n, r, i) {
      return new t(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: e,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: i,
      });
    }),
    (t.fromTo = function (e, t, n) {
      return ot(2, arguments);
    }),
    (t.set = function (e, n) {
      return ((n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n));
    }),
    (t.killTweensOf = function (e, t, n) {
      return F.killTweensOf(e, t, n);
    }),
    t
  );
})(sn);
(ke(Sn.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
  H(`staggerTo,staggerFrom,staggerFromTo`, function (e) {
    Sn[e] = function () {
      var t = new cn(),
        n = dt.call(arguments, 0);
      return (n.splice(e === `staggerFromTo` ? 5 : 4, 0, 0), t[e].apply(t, n));
    };
  }));
var Cn = function (e, t, n) {
    return (e[t] = n);
  },
  wn = function (e, t, n) {
    return e[t](n);
  },
  Tn = function (e, t, n, r) {
    return e[t](r.fp, n);
  },
  En = function (e, t, n) {
    return e.setAttribute(t, n);
  },
  Dn = function (e, t) {
    return b(e[t]) ? wn : S(e[t]) && e.setAttribute ? En : Cn;
  },
  On = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  kn = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  An = function (e, t) {
    var n = t._pt,
      r = ``;
    if (!e && t.b) r = t.b;
    else if (e === 1 && t.e) r = t.e;
    else {
      for (; n;)
        ((r =
          n.p +
          (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) +
          r),
          (n = n._next));
      r += t.c;
    }
    t.set(t.t, t.p, r, t);
  },
  jn = function (e, t) {
    for (var n = t._pt; n;) (n.r(e, n.d), (n = n._next));
  },
  Mn = function (e, t, n, r) {
    for (var i = this._pt, a; i;)
      ((a = i._next), i.p === r && i.modifier(e, t, n), (i = a));
  },
  Nn = function (e) {
    for (var t = this._pt, n, r; t;)
      ((r = t._next),
        (t.p === e && !t.op) || t.op === e
          ? Le(this, t, `_pt`)
          : t.dep || (n = 1),
        (t = r));
    return !n;
  },
  Pn = function (e, t, n, r) {
    r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
  },
  Fn = function (e) {
    for (var t = e._pt, n, r, i, a; t;) {
      for (n = t._next, r = i; r && r.pr > t.pr;) r = r._next;
      ((t._prev = r ? r._prev : a) ? (t._prev._next = t) : (i = t),
        (t._next = r) ? (r._prev = t) : (a = t),
        (t = n));
    }
    e._pt = i;
  },
  In = (function () {
    function e(e, t, n, r, i, a, o, s, c) {
      ((this.t = t),
        (this.s = r),
        (this.c = i),
        (this.p = n),
        (this.r = a || On),
        (this.d = o || this),
        (this.set = s || Cn),
        (this.pr = c || 0),
        (this._next = e),
        e && (e._prev = this));
    }
    var t = e.prototype;
    return (
      (t.modifier = function (e, t, n) {
        ((this.mSet = this.mSet || this.set),
          (this.set = Pn),
          (this.m = e),
          (this.mt = n),
          (this.tween = t));
      }),
      e
    );
  })();
(H(
  be +
    `parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,
  function (e) {
    return (pe[e] = 1);
  },
),
  (ae.TweenMax = ae.TweenLite = Sn),
  (ae.TimelineLite = ae.TimelineMax = cn),
  (F = new cn({
    sortChildren: !1,
    defaults: s,
    autoRemoveChildren: !0,
    id: `root`,
    smoothChildTiming: !0,
  })),
  (o.stringFilter = Wt));
var Ln = [],
  Rn = {},
  zn = [],
  Bn = 0,
  Vn = 0,
  Hn = function (e) {
    return (Rn[e] || zn).map(function (e) {
      return e();
    });
  },
  Un = function () {
    var e = Date.now(),
      t = [];
    e - Bn > 2 &&
      (Hn(`matchMediaInit`),
      Ln.forEach(function (e) {
        var n = e.queries,
          r = e.conditions,
          i,
          a,
          o,
          s;
        for (a in n)
          ((i = re.matchMedia(n[a]).matches),
            i && (o = 1),
            i !== r[a] && ((r[a] = i), (s = 1)));
        s && (e.revert(), o && t.push(e));
      }),
      Hn(`matchMediaRevert`),
      t.forEach(function (e) {
        return e.onMatch(e, function (t) {
          return e.add(null, t);
        });
      }),
      (Bn = e),
      Hn(`matchMedia`));
  },
  Wn = (function () {
    function e(e, t) {
      ((this.selector = t && ht(t)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Vn++),
        e && this.add(e));
    }
    var t = e.prototype;
    return (
      (t.add = function (e, t, n) {
        b(e) && ((n = t), (t = e), (e = b));
        var r = this,
          i = function () {
            var e = u,
              i = r.selector,
              a;
            return (
              e && e !== r && e.data.push(r),
              n && (r.selector = ht(n)),
              (u = r),
              (a = t.apply(r, arguments)),
              b(a) && r._r.push(a),
              (u = e),
              (r.selector = i),
              (r.isReverted = !1),
              a
            );
          };
        return (
          (r.last = i),
          e === b
            ? i(r, function (e) {
                return r.add(null, e);
              })
            : e
              ? (r[e] = i)
              : i
        );
      }),
      (t.ignore = function (e) {
        var t = u;
        ((u = null), e(this), (u = t));
      }),
      (t.getTweens = function () {
        var t = [];
        return (
          this.data.forEach(function (n) {
            return n instanceof e
              ? t.push.apply(t, n.getTweens())
              : n instanceof Sn &&
                  !(n.parent && n.parent.data === `nested`) &&
                  t.push(n);
          }),
          t
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (e, t) {
        var n = this;
        if (
          (e
            ? (function () {
                for (var t = n.getTweens(), r = n.data.length, i; r--;)
                  ((i = n.data[r]),
                    i.data === `isFlip` &&
                      (i.revert(),
                      i.getChildren(!0, !0, !1).forEach(function (e) {
                        return t.splice(t.indexOf(e), 1);
                      })));
                for (
                  t
                    .map(function (e) {
                      return {
                        g:
                          e._dur ||
                          e._delay ||
                          (e._sat && !e._sat.vars.immediateRender)
                            ? e.globalTime(0)
                            : -1 / 0,
                        t: e,
                      };
                    })
                    .sort(function (e, t) {
                      return t.g - e.g || -1 / 0;
                    })
                    .forEach(function (t) {
                      return t.t.revert(e);
                    }),
                    r = n.data.length;
                  r--;
                )
                  ((i = n.data[r]),
                    i instanceof cn
                      ? i.data !== `nested` &&
                        (i.scrollTrigger && i.scrollTrigger.revert(), i.kill())
                      : !(i instanceof Sn) && i.revert && i.revert(e));
                (n._r.forEach(function (t) {
                  return t(e, n);
                }),
                  (n.isReverted = !0));
              })()
            : this.data.forEach(function (e) {
                return e.kill && e.kill();
              }),
          this.clear(),
          t)
        )
          for (var r = Ln.length; r--;) Ln[r].id === this.id && Ln.splice(r, 1);
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      e
    );
  })(),
  Gn = (function () {
    function e(e) {
      ((this.contexts = []), (this.scope = e), u && u.data.push(this));
    }
    var t = e.prototype;
    return (
      (t.add = function (e, t, n) {
        C(e) || (e = { matches: e });
        var r = new Wn(0, n || this.scope),
          i = (r.conditions = {}),
          a,
          o,
          s;
        for (o in (u && !r.selector && (r.selector = u.selector),
        this.contexts.push(r),
        (t = r.add(`onMatch`, t)),
        (r.queries = e),
        e))
          o === `all`
            ? (s = 1)
            : ((a = re.matchMedia(e[o])),
              a &&
                (Ln.indexOf(r) < 0 && Ln.push(r),
                (i[o] = a.matches) && (s = 1),
                a.addListener
                  ? a.addListener(Un)
                  : a.addEventListener(`change`, Un)));
        return (
          s &&
            t(r, function (e) {
              return r.add(null, e);
            }),
          this
        );
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      (t.kill = function (e) {
        this.contexts.forEach(function (t) {
          return t.kill(e, !0);
        });
      }),
      e
    );
  })(),
  Kn = {
    registerPlugin: function () {
      [...arguments].forEach(function (e) {
        return Ft(e);
      });
    },
    timeline: function (e) {
      return new cn(e);
    },
    getTweensOf: function (e, t) {
      return F.getTweensOf(e, t);
    },
    getProperty: function (e, t, n, r) {
      y(e) && (e = mt(e)[0]);
      var i = xe(e || {}).get,
        a = n ? Oe : G;
      return (
        n === `native` && (n = ``),
        e &&
          (t
            ? a(((_e[t] && _e[t].get) || i)(e, t, n, r))
            : function (t, n, r) {
                return a(((_e[t] && _e[t].get) || i)(e, t, n, r));
              })
      );
    },
    quickSetter: function (e, t, n) {
      if (((e = mt(e)), e.length > 1)) {
        var r = e.map(function (e) {
            return Xn.quickSetter(e, t, n);
          }),
          i = r.length;
        return function (e) {
          for (var t = i; t--;) r[t](e);
        };
      }
      e = e[0] || {};
      var a = _e[t],
        o = xe(e),
        s = (o.harness && (o.harness.aliases || {})[t]) || t,
        c = a
          ? function (t) {
              var r = new a();
              ((Nt._pt = 0),
                r.init(e, n ? t + n : t, Nt, 0, [e]),
                r.render(1, r),
                Nt._pt && jn(1, Nt));
            }
          : o.set(e, s);
      return a
        ? c
        : function (t) {
            return c(e, s, n ? t + n : t, o, 1);
          };
    },
    quickTo: function (e, t, n) {
      var r,
        i = Xn.to(
          e,
          ke(
            ((r = {}), (r[t] = `+=0.1`), (r.paused = !0), (r.stagger = 0), r),
            n || {},
          ),
        ),
        a = function (e, n, r) {
          return i.resetTo(t, e, n, r);
        };
      return ((a.tween = i), a);
    },
    isTweening: function (e) {
      return F.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return (e && e.ease && (e.ease = en(e.ease, s.ease)), Me(s, e || {}));
    },
    config: function (e) {
      return Me(o, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        n = e.effect,
        r = e.plugins,
        i = e.defaults,
        a = e.extendTimeline;
      ((r || ``).split(`,`).forEach(function (e) {
        return (
          e && !_e[e] && !ae[e] && R(t + ` effect requires ` + e + ` plugin.`)
        );
      }),
        (ve[t] = function (e, t, r) {
          return n(mt(e), ke(t || {}, i), r);
        }),
        a &&
          (cn.prototype[t] = function (e, n, r) {
            return this.add(ve[t](e, C(n) ? n : (r = n) && {}, this), r);
          }));
    },
    registerEase: function (e, t) {
      K[e] = en(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? en(e, t) : K;
    },
    getById: function (e) {
      return F.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var n = new cn(e),
        r,
        i;
      for (
        n.smoothChildTiming = w(e.smoothChildTiming),
          F.remove(n),
          n._dp = 0,
          n._time = n._tTime = F._time,
          r = F._first;
        r;
      )
        ((i = r._next),
          (t ||
            !(
              !r._dur &&
              r instanceof Sn &&
              r.vars.onComplete === r._targets[0]
            )) &&
            Ye(n, r, r._start - r._delay),
          (r = i));
      return (Ye(F, n, 0), n);
    },
    context: function (e, t) {
      return e ? new Wn(e, t) : u;
    },
    matchMedia: function (e) {
      return new Gn(e);
    },
    matchMediaRefresh: function () {
      return (
        Ln.forEach(function (e) {
          var t = e.conditions,
            n,
            r;
          for (r in t) t[r] && ((t[r] = !1), (n = 1));
          n && e.revert();
        }) || Un()
      );
    },
    addEventListener: function (e, t) {
      var n = Rn[e] || (Rn[e] = []);
      ~n.indexOf(t) || n.push(t);
    },
    removeEventListener: function (e, t) {
      var n = Rn[e],
        r = n && n.indexOf(t);
      r >= 0 && n.splice(r, 1);
    },
    utils: {
      wrap: Tt,
      wrapYoyo: Et,
      distribute: _t,
      random: bt,
      snap: yt,
      normalize: Ct,
      getUnit: lt,
      clamp: ut,
      splitColor: zt,
      toArray: mt,
      selector: ht,
      mapRange: Ot,
      pipe: xt,
      unitize: St,
      interpolate: kt,
      shuffle: gt,
    },
    install: se,
    effects: ve,
    ticker: Kt,
    updateRoot: cn.updateRoot,
    plugins: _e,
    globalTimeline: F,
    core: {
      PropTween: In,
      globals: le,
      Tween: Sn,
      Timeline: cn,
      Animation: sn,
      getCache: xe,
      _removeLinkedListItem: Le,
      reverting: function () {
        return l;
      },
      context: function (e) {
        return (e && u && (u.data.push(e), (e._ctx = u)), u);
      },
      suppressOverwrites: function (e) {
        return (c = e);
      },
    },
  };
(H(`to,from,fromTo,delayedCall,set,killTweensOf`, function (e) {
  return (Kn[e] = Sn[e]);
}),
  Kt.add(cn.updateRoot),
  (Nt = Kn.to({}, { duration: 0 })));
var qn = function (e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;)
      n = n._next;
    return n;
  },
  Jn = function (e, t) {
    var n = e._targets,
      r,
      i,
      a;
    for (r in t)
      for (i = n.length; i--;)
        ((a = e._ptLookup[i][r]),
          (a &&= a.d) &&
            (a._pt && (a = qn(a, r)),
            a && a.modifier && a.modifier(t[r], e, n[i], r)));
  },
  Yn = function (e, t) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: function (e, n, r) {
        r._onInit = function (e) {
          var r, i;
          if (
            (y(n) &&
              ((r = {}),
              H(n, function (e) {
                return (r[e] = 1);
              }),
              (n = r)),
            t)
          ) {
            for (i in ((r = {}), n)) r[i] = t(n[i]);
            n = r;
          }
          Jn(e, n);
        };
      },
    };
  },
  Xn =
    Kn.registerPlugin(
      {
        name: `attr`,
        init: function (e, t, n, r, i) {
          var a, o, s;
          for (a in ((this.tween = n), t))
            ((s = e.getAttribute(a) || ``),
              (o = this.add(
                e,
                `setAttribute`,
                (s || 0) + ``,
                t[a],
                r,
                i,
                0,
                0,
                a,
              )),
              (o.op = a),
              (o.b = s),
              this._props.push(a));
        },
        render: function (e, t) {
          for (var n = t._pt; n;)
            (l ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next));
        },
      },
      {
        name: `endArray`,
        headless: 1,
        init: function (e, t) {
          for (var n = t.length; n--;)
            this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
        },
      },
      Yn(`roundProps`, vt),
      Yn(`modifiers`),
      Yn(`snap`, yt),
    ) || Kn;
((Sn.version = cn.version = Xn.version = `3.15.0`),
  (oe = 1),
  T() && qt(),
  K.Power0,
  K.Power1,
  K.Power2,
  K.Power3,
  K.Power4,
  K.Linear,
  K.Quad,
  K.Cubic,
  K.Quart,
  K.Quint,
  K.Strong,
  K.Elastic,
  K.Back,
  K.SteppedEase,
  K.Bounce,
  K.Sine,
  K.Expo,
  K.Circ);
var Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir = function () {
    return typeof window < `u`;
  },
  ar = {},
  or = 180 / Math.PI,
  sr = Math.PI / 180,
  cr = Math.atan2,
  lr = 1e8,
  ur = /([A-Z])/g,
  dr = /(left|right|width|margin|padding|x)/i,
  fr = /[\s,\(]\S/,
  pr = {
    autoAlpha: `opacity,visibility`,
    scale: `scaleX,scaleY`,
    alpha: `opacity`,
  },
  mr = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  hr = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t,
    );
  },
  gr = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t,
    );
  },
  _r = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t,
    );
  },
  vr = function (e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  yr = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  br = function (e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : t.b, t);
  },
  xr = function (e, t, n) {
    return (e.style[t] = n);
  },
  Sr = function (e, t, n) {
    return e.style.setProperty(t, n);
  },
  Cr = function (e, t, n) {
    return (e._gsap[t] = n);
  },
  wr = function (e, t, n) {
    return (e._gsap.scaleX = e._gsap.scaleY = n);
  },
  Tr = function (e, t, n, r, i) {
    var a = e._gsap;
    ((a.scaleX = a.scaleY = n), a.renderTransform(i, a));
  },
  Er = function (e, t, n, r, i) {
    var a = e._gsap;
    ((a[t] = n), a.renderTransform(i, a));
  },
  Dr = `transform`,
  Or = Dr + `Origin`,
  kr = function e(t, n) {
    var r = this,
      i = this.target,
      a = i.style,
      o = i._gsap;
    if (t in ar && a) {
      if (((this.tfm = this.tfm || {}), t !== `transform`))
        ((t = pr[t] || t),
          ~t.indexOf(`,`)
            ? t.split(`,`).forEach(function (e) {
                return (r.tfm[e] = Jr(i, e));
              })
            : (this.tfm[t] = o.x ? o[t] : Jr(i, t)),
          t === Or && (this.tfm.zOrigin = o.zOrigin));
      else
        return pr.transform.split(`,`).forEach(function (t) {
          return e.call(r, t, n);
        });
      if (this.props.indexOf(Dr) >= 0) return;
      (o.svg &&
        ((this.svgo = i.getAttribute(`data-svg-origin`)),
        this.props.push(Or, n, ``)),
        (t = Dr));
    }
    (a || n) && this.props.push(t, n, a[t]);
  },
  Ar = function (e) {
    e.translate &&
      (e.removeProperty(`translate`),
      e.removeProperty(`scale`),
      e.removeProperty(`rotate`));
  },
  jr = function () {
    var e = this.props,
      t = this.target,
      n = t.style,
      r = t._gsap,
      i,
      a;
    for (i = 0; i < e.length; i += 3)
      e[i + 1]
        ? e[i + 1] === 2
          ? t[e[i]](e[i + 2])
          : (t[e[i]] = e[i + 2])
        : e[i + 2]
          ? (n[e[i]] = e[i + 2])
          : n.removeProperty(
              e[i].substr(0, 2) === `--`
                ? e[i]
                : e[i].replace(ur, `-$1`).toLowerCase(),
            );
    if (this.tfm) {
      for (a in this.tfm) r[a] = this.tfm[a];
      (r.svg &&
        (r.renderTransform(),
        t.setAttribute(`data-svg-origin`, this.svgo || ``)),
        (i = rr()),
        (!i || !i.isStart) &&
          !n[Dr] &&
          (Ar(n),
          r.zOrigin &&
            n[Or] &&
            ((n[Or] += ` ` + r.zOrigin + `px`),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1)));
    }
  },
  Mr = function (e, t) {
    var n = { target: e, props: [], revert: jr, save: kr };
    return (
      e._gsap || Xn.core.getCache(e),
      t &&
        e.style &&
        e.nodeType &&
        t.split(`,`).forEach(function (e) {
          return n.save(e);
        }),
      n
    );
  },
  Nr,
  Pr = function (e, t) {
    var n = Qn.createElementNS
      ? Qn.createElementNS(
          (t || `http://www.w3.org/1999/xhtml`).replace(/^https/, `http`),
          e,
        )
      : Qn.createElement(e);
    return n && n.style ? n : Qn.createElement(e);
  },
  Fr = function e(t, n, r) {
    var i = getComputedStyle(t);
    return (
      i[n] ||
      i.getPropertyValue(n.replace(ur, `-$1`).toLowerCase()) ||
      i.getPropertyValue(n) ||
      (!r && e(t, Lr(n) || n, 1)) ||
      ``
    );
  },
  Ir = `O,Moz,ms,Ms,Webkit`.split(`,`),
  Lr = function (e, t, n) {
    var r = (t || tr).style,
      i = 5;
    if (e in r && !n) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      i-- && !(Ir[i] + e in r);
    );
    return i < 0 ? null : (i === 3 ? `ms` : i >= 0 ? Ir[i] : ``) + e;
  },
  Rr = function () {
    ir() &&
      window.document &&
      ((Zn = window),
      (Qn = Zn.document),
      ($n = Qn.documentElement),
      (tr = Pr(`div`) || { style: {} }),
      Pr(`div`),
      (Dr = Lr(Dr)),
      (Or = Dr + `Origin`),
      (tr.style.cssText = `border-width:0;line-height:0;position:absolute;padding:0`),
      (Nr = !!Lr(`perspective`)),
      (rr = Xn.core.reverting),
      (er = 1));
  },
  zr = function (e) {
    var t = e.ownerSVGElement,
      n = Pr(
        `svg`,
        (t && t.getAttribute(`xmlns`)) || `http://www.w3.org/2000/svg`,
      ),
      r = e.cloneNode(!0),
      i;
    ((r.style.display = `block`), n.appendChild(r), $n.appendChild(n));
    try {
      i = r.getBBox();
    } catch {}
    return (n.removeChild(r), $n.removeChild(n), i);
  },
  Br = function (e, t) {
    for (var n = t.length; n--;)
      if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  },
  Vr = function (e) {
    var t, n;
    try {
      t = e.getBBox();
    } catch {
      ((t = zr(e)), (n = 1));
    }
    return (
      (t && (t.width || t.height)) || n || (t = zr(e)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +Br(e, [`x`, `cx`, `x1`]) || 0,
            y: +Br(e, [`y`, `cy`, `y1`]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  Hr = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Vr(e));
  },
  Ur = function (e, t) {
    if (t) {
      var n = e.style,
        r;
      (t in ar && t !== Or && (t = Dr),
        n.removeProperty
          ? ((r = t.substr(0, 2)),
            (r === `ms` || t.substr(0, 6) === `webkit`) && (t = `-` + t),
            n.removeProperty(
              r === `--` ? t : t.replace(ur, `-$1`).toLowerCase(),
            ))
          : n.removeAttribute(t));
    }
  },
  Wr = function (e, t, n, r, i, a) {
    var o = new In(e._pt, t, n, 0, 1, a ? br : yr);
    return ((e._pt = o), (o.b = r), (o.e = i), e._props.push(n), o);
  },
  Gr = { deg: 1, rad: 1, turn: 1 },
  Kr = { grid: 1, flex: 1 },
  qr = function e(t, n, r, i) {
    var a = parseFloat(r) || 0,
      o = (r + ``).trim().substr((a + ``).length) || `px`,
      s = tr.style,
      c = dr.test(n),
      l = t.tagName.toLowerCase() === `svg`,
      u = (l ? `client` : `offset`) + (c ? `Width` : `Height`),
      d = 100,
      f = i === `px`,
      p = i === `%`,
      m,
      h,
      g,
      _;
    if (i === o || !a || Gr[i] || Gr[o]) return a;
    if (
      (o !== `px` && !f && (a = e(t, n, r, `px`)),
      (_ = t.getCTM && Hr(t)),
      (p || o === `%`) && (ar[n] || ~n.indexOf(`adius`)))
    )
      return (
        (m = _ ? t.getBBox()[c ? `width` : `height`] : t[u]),
        U(p ? (a / m) * d : (a / 100) * m)
      );
    if (
      ((s[c ? `width` : `height`] = d + (f ? o : i)),
      (h =
        (i !== `rem` && ~n.indexOf(`adius`)) ||
        (i === `em` && t.appendChild && !l)
          ? t
          : t.parentNode),
      _ && (h = (t.ownerSVGElement || {}).parentNode),
      (!h || h === Qn || !h.appendChild) && (h = Qn.body),
      (g = h._gsap),
      g && p && g.width && c && g.time === Kt.time && !g.uncache)
    )
      return U((a / g.width) * d);
    if (p && (n === `height` || n === `width`)) {
      var v = t.style[n];
      ((t.style[n] = d + i), (m = t[u]), v ? (t.style[n] = v) : Ur(t, n));
    } else
      ((p || o === `%`) &&
        !Kr[Fr(h, `display`)] &&
        (s.position = Fr(t, `position`)),
        h === t && (s.position = `static`),
        h.appendChild(tr),
        (m = tr[u]),
        h.removeChild(tr),
        (s.position = `absolute`));
    return (
      c && p && ((g = xe(h)), (g.time = Kt.time), (g.width = h[u])),
      U(f ? (m * a) / d : m && a ? (d / m) * a : 0)
    );
  },
  Jr = function (e, t, n, r) {
    var i;
    return (
      er || Rr(),
      t in pr &&
        t !== `transform` &&
        ((t = pr[t]), ~t.indexOf(`,`) && (t = t.split(`,`)[0])),
      ar[t] && t !== `transform`
        ? ((i = oi(e, r)),
          (i =
            t === `transformOrigin`
              ? i.svg
                ? i.origin
                : si(Fr(e, Or)) + ` ` + i.zOrigin + `px`
              : i[t]))
        : ((i = e.style[t]),
          (!i || i === `auto` || r || ~(i + ``).indexOf(`calc(`)) &&
            (i =
              ($r[t] && $r[t](e, t, n)) ||
              Fr(e, t) ||
              Se(e, t) ||
              +(t === `opacity`))),
      n && !~(i + ``).trim().indexOf(` `) ? qr(e, t, i, n) + n : i
    );
  },
  Yr = function (e, t, n, r) {
    if (!n || n === `none`) {
      var i = Lr(t, e, 1),
        a = i && Fr(e, i, 1);
      a && a !== n
        ? ((t = i), (n = a))
        : t === `borderColor` && (n = Fr(e, `borderTopColor`));
    }
    var s = new In(this._pt, e.style, t, 0, 1, An),
      c = 0,
      l = 0,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b,
      x;
    if (
      ((s.b = n),
      (s.e = r),
      (n += ``),
      (r += ``),
      r.substring(0, 6) === `var(--` &&
        (r = Fr(e, r.substring(4, r.indexOf(`)`)))),
      r === `auto` &&
        ((h = e.style[t]),
        (e.style[t] = r),
        (r = Fr(e, t) || r),
        h ? (e.style[t] = h) : Ur(e, t)),
      (u = [n, r]),
      Wt(u),
      (n = u[0]),
      (r = u[1]),
      (f = n.match(N) || []),
      (x = r.match(N) || []),
      x.length)
    ) {
      for (; (d = N.exec(r));)
        ((g = d[0]),
          (v = r.substring(c, d.index)),
          m
            ? (m = (m + 1) % 5)
            : (v.substr(-5) === `rgba(` || v.substr(-5) === `hsla(`) && (m = 1),
          g !== (h = f[l++] || ``) &&
            ((p = parseFloat(h) || 0),
            (b = h.substr((p + ``).length)),
            g.charAt(1) === `=` && (g = Ce(p, g) + b),
            (_ = parseFloat(g)),
            (y = g.substr((_ + ``).length)),
            (c = N.lastIndex - y.length),
            y ||
              ((y = y || o.units[t] || b),
              c === r.length && ((r += y), (s.e += y))),
            b !== y && (p = qr(e, t, h, y) || 0),
            (s._pt = {
              _next: s._pt,
              p: v || l === 1 ? v : `,`,
              s: p,
              c: _ - p,
              m: (m && m < 4) || t === `zIndex` ? Math.round : 0,
            })));
      s.c = c < r.length ? r.substring(c, r.length) : ``;
    } else s.r = t === `display` && r === `none` ? br : yr;
    return (ee.test(r) && (s.e = 0), (this._pt = s), s);
  },
  Xr = { top: `0%`, bottom: `100%`, left: `0%`, right: `100%`, center: `50%` },
  Zr = function (e) {
    var t = e.split(` `),
      n = t[0],
      r = t[1] || `50%`;
    return (
      (n === `top` || n === `bottom` || r === `left` || r === `right`) &&
        ((e = n), (n = r), (r = e)),
      (t[0] = Xr[n] || n),
      (t[1] = Xr[r] || r),
      t.join(` `)
    );
  },
  Qr = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n = t.t,
        r = n.style,
        i = t.u,
        a = n._gsap,
        o,
        s,
        c;
      if (i === `all` || i === !0) ((r.cssText = ``), (s = 1));
      else
        for (i = i.split(`,`), c = i.length; --c > -1;)
          ((o = i[c]),
            ar[o] && ((s = 1), (o = o === `transformOrigin` ? Or : Dr)),
            Ur(n, o));
      s &&
        (Ur(n, Dr),
        a &&
          (a.svg && n.removeAttribute(`transform`),
          (r.scale = r.rotate = r.translate = `none`),
          oi(n, 1),
          (a.uncache = 1),
          Ar(r)));
    }
  },
  $r = {
    clearProps: function (e, t, n, r, i) {
      if (i.data !== `isFromStart`) {
        var a = (e._pt = new In(e._pt, t, n, 0, 0, Qr));
        return ((a.u = r), (a.pr = -10), (a.tween = i), e._props.push(n), 1);
      }
    },
  },
  ei = [1, 0, 0, 1, 0, 0],
  ti = {},
  ni = function (e) {
    return e === `matrix(1, 0, 0, 1, 0, 0)` || e === `none` || !e;
  },
  ri = function (e) {
    var t = Fr(e, Dr);
    return ni(t) ? ei : t.substr(7).match(M).map(U);
  },
  ii = function (e, t) {
    var n = e._gsap || xe(e),
      r = e.style,
      i = ri(e),
      a,
      o,
      s,
      c;
    return n.svg && e.getAttribute(`transform`)
      ? ((s = e.transform.baseVal.consolidate().matrix),
        (i = [s.a, s.b, s.c, s.d, s.e, s.f]),
        i.join(`,`) === `1,0,0,1,0,0` ? ei : i)
      : (i === ei &&
          !e.offsetParent &&
          e !== $n &&
          !n.svg &&
          ((s = r.display),
          (r.display = `block`),
          (a = e.parentNode),
          (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((c = 1), (o = e.nextElementSibling), $n.appendChild(e)),
          (i = ri(e)),
          s ? (r.display = s) : Ur(e, `display`),
          c &&
            (o
              ? a.insertBefore(e, o)
              : a
                ? a.appendChild(e)
                : $n.removeChild(e))),
        t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i);
  },
  ai = function (e, t, n, r, i, a) {
    var o = e._gsap,
      s = i || ii(e, !0),
      c = o.xOrigin || 0,
      l = o.yOrigin || 0,
      u = o.xOffset || 0,
      d = o.yOffset || 0,
      f = s[0],
      p = s[1],
      m = s[2],
      h = s[3],
      g = s[4],
      _ = s[5],
      v = t.split(` `),
      y = parseFloat(v[0]) || 0,
      b = parseFloat(v[1]) || 0,
      x,
      S,
      C,
      w;
    (n
      ? s !== ei &&
        (S = f * h - p * m) &&
        ((C = (h / S) * y + b * (-m / S) + (m * _ - h * g) / S),
        (w = y * (-p / S) + (f / S) * b - (f * _ - p * g) / S),
        (y = C),
        (b = w))
      : ((x = Vr(e)),
        (y = x.x + (~v[0].indexOf(`%`) ? (y / 100) * x.width : y)),
        (b = x.y + (~(v[1] || v[0]).indexOf(`%`) ? (b / 100) * x.height : b))),
      r || (r !== !1 && o.smooth)
        ? ((g = y - c),
          (_ = b - l),
          (o.xOffset = u + (g * f + _ * m) - g),
          (o.yOffset = d + (g * p + _ * h) - _))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = y),
      (o.yOrigin = b),
      (o.smooth = !!r),
      (o.origin = t),
      (o.originIsAbsolute = !!n),
      (e.style[Or] = `0px 0px`),
      a &&
        (Wr(a, o, `xOrigin`, c, y),
        Wr(a, o, `yOrigin`, l, b),
        Wr(a, o, `xOffset`, u, o.xOffset),
        Wr(a, o, `yOffset`, d, o.yOffset)),
      e.setAttribute(`data-svg-origin`, y + ` ` + b));
  },
  oi = function (e, t) {
    var n = e._gsap || new on(e);
    if (`x` in n && !t && !n.uncache) return n;
    var r = e.style,
      i = n.scaleX < 0,
      a = `px`,
      s = `deg`,
      c = getComputedStyle(e),
      l = Fr(e, Or) || `0`,
      u = (d = f = h = g = _ = v = y = b = 0),
      d,
      f,
      p = (m = 1),
      m,
      h,
      g,
      _,
      v,
      y,
      b,
      x,
      S,
      C,
      w,
      T,
      E,
      D,
      O,
      k,
      A,
      j,
      M,
      N,
      P,
      ee,
      te,
      ne,
      F,
      re,
      I,
      ie;
    return (
      (n.svg = !!(e.getCTM && Hr(e))),
      c.translate &&
        ((c.translate !== `none` ||
          c.scale !== `none` ||
          c.rotate !== `none`) &&
          (r[Dr] =
            (c.translate === `none`
              ? ``
              : `translate3d(` +
                (c.translate + ` 0 0`).split(` `).slice(0, 3).join(`, `) +
                `) `) +
            (c.rotate === `none` ? `` : `rotate(` + c.rotate + `) `) +
            (c.scale === `none`
              ? ``
              : `scale(` + c.scale.split(` `).join(`,`) + `) `) +
            (c[Dr] === `none` ? `` : c[Dr])),
        (r.scale = r.rotate = r.translate = `none`)),
      (C = ii(e, n.svg)),
      n.svg &&
        (n.uncache
          ? ((P = e.getBBox()),
            (l = n.xOrigin - P.x + `px ` + (n.yOrigin - P.y) + `px`),
            (N = ``))
          : (N = !t && e.getAttribute(`data-svg-origin`)),
        ai(e, N || l, !!N || n.originIsAbsolute, n.smooth !== !1, C)),
      (x = n.xOrigin || 0),
      (S = n.yOrigin || 0),
      C !== ei &&
        ((D = C[0]),
        (O = C[1]),
        (k = C[2]),
        (A = C[3]),
        (u = j = C[4]),
        (d = M = C[5]),
        C.length === 6
          ? ((p = Math.sqrt(D * D + O * O)),
            (m = Math.sqrt(A * A + k * k)),
            (h = D || O ? cr(O, D) * or : 0),
            (v = k || A ? cr(k, A) * or + h : 0),
            v && (m *= Math.abs(Math.cos(v * sr))),
            n.svg && ((u -= x - (x * D + S * k)), (d -= S - (x * O + S * A))))
          : ((ie = C[6]),
            (re = C[7]),
            (te = C[8]),
            (ne = C[9]),
            (F = C[10]),
            (I = C[11]),
            (u = C[12]),
            (d = C[13]),
            (f = C[14]),
            (w = cr(ie, F)),
            (g = w * or),
            w &&
              ((T = Math.cos(-w)),
              (E = Math.sin(-w)),
              (N = j * T + te * E),
              (P = M * T + ne * E),
              (ee = ie * T + F * E),
              (te = j * -E + te * T),
              (ne = M * -E + ne * T),
              (F = ie * -E + F * T),
              (I = re * -E + I * T),
              (j = N),
              (M = P),
              (ie = ee)),
            (w = cr(-k, F)),
            (_ = w * or),
            w &&
              ((T = Math.cos(-w)),
              (E = Math.sin(-w)),
              (N = D * T - te * E),
              (P = O * T - ne * E),
              (ee = k * T - F * E),
              (I = A * E + I * T),
              (D = N),
              (O = P),
              (k = ee)),
            (w = cr(O, D)),
            (h = w * or),
            w &&
              ((T = Math.cos(w)),
              (E = Math.sin(w)),
              (N = D * T + O * E),
              (P = j * T + M * E),
              (O = O * T - D * E),
              (M = M * T - j * E),
              (D = N),
              (j = P)),
            g &&
              Math.abs(g) + Math.abs(h) > 359.9 &&
              ((g = h = 0), (_ = 180 - _)),
            (p = U(Math.sqrt(D * D + O * O + k * k))),
            (m = U(Math.sqrt(M * M + ie * ie))),
            (w = cr(j, M)),
            (v = Math.abs(w) > 2e-4 ? w * or : 0),
            (b = I ? 1 / (I < 0 ? -I : I) : 0)),
        n.svg &&
          ((N = e.getAttribute(`transform`)),
          (n.forceCSS = e.setAttribute(`transform`, ``) || !ni(Fr(e, Dr))),
          N && e.setAttribute(`transform`, N))),
      Math.abs(v) > 90 &&
        Math.abs(v) < 270 &&
        (i
          ? ((p *= -1), (v += h <= 0 ? 180 : -180), (h += h <= 0 ? 180 : -180))
          : ((m *= -1), (v += v <= 0 ? 180 : -180))),
      (t ||= n.uncache),
      (n.x =
        u -
        ((n.xPercent =
          u &&
          ((!t && n.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
          ? (e.offsetWidth * n.xPercent) / 100
          : 0) +
        a),
      (n.y =
        d -
        ((n.yPercent =
          d &&
          ((!t && n.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
          ? (e.offsetHeight * n.yPercent) / 100
          : 0) +
        a),
      (n.z = f + a),
      (n.scaleX = U(p)),
      (n.scaleY = U(m)),
      (n.rotation = U(h) + s),
      (n.rotationX = U(g) + s),
      (n.rotationY = U(_) + s),
      (n.skewX = v + s),
      (n.skewY = y + s),
      (n.transformPerspective = b + a),
      (n.zOrigin = parseFloat(l.split(` `)[2]) || (!t && n.zOrigin) || 0) &&
        (r[Or] = si(l)),
      (n.xOffset = n.yOffset = 0),
      (n.force3D = o.force3D),
      (n.renderTransform = n.svg ? mi : Nr ? pi : li),
      (n.uncache = 0),
      n
    );
  },
  si = function (e) {
    return (e = e.split(` `))[0] + ` ` + e[1];
  },
  ci = function (e, t, n) {
    var r = lt(t);
    return U(parseFloat(t) + parseFloat(qr(e, `x`, n + `px`, r))) + r;
  },
  li = function (e, t) {
    ((t.z = `0px`),
      (t.rotationY = t.rotationX = `0deg`),
      (t.force3D = 0),
      pi(e, t));
  },
  ui = `0deg`,
  di = `0px`,
  fi = `) `,
  pi = function (e, t) {
    var n = t || this,
      r = n.xPercent,
      i = n.yPercent,
      a = n.x,
      o = n.y,
      s = n.z,
      c = n.rotation,
      l = n.rotationY,
      u = n.rotationX,
      d = n.skewX,
      f = n.skewY,
      p = n.scaleX,
      m = n.scaleY,
      h = n.transformPerspective,
      g = n.force3D,
      _ = n.target,
      v = n.zOrigin,
      y = ``,
      b = (g === `auto` && e && e !== 1) || g === !0;
    if (v && (u !== ui || l !== ui)) {
      var x = parseFloat(l) * sr,
        S = Math.sin(x),
        C = Math.cos(x),
        w;
      ((x = parseFloat(u) * sr),
        (w = Math.cos(x)),
        (a = ci(_, a, S * w * -v)),
        (o = ci(_, o, -Math.sin(x) * -v)),
        (s = ci(_, s, C * w * -v + v)));
    }
    (h !== di && (y += `perspective(` + h + fi),
      (r || i) && (y += `translate(` + r + `%, ` + i + `%) `),
      (b || a !== di || o !== di || s !== di) &&
        (y +=
          s !== di || b
            ? `translate3d(` + a + `, ` + o + `, ` + s + `) `
            : `translate(` + a + `, ` + o + fi),
      c !== ui && (y += `rotate(` + c + fi),
      l !== ui && (y += `rotateY(` + l + fi),
      u !== ui && (y += `rotateX(` + u + fi),
      (d !== ui || f !== ui) && (y += `skew(` + d + `, ` + f + fi),
      (p !== 1 || m !== 1) && (y += `scale(` + p + `, ` + m + fi),
      (_.style[Dr] = y || `translate(0, 0)`));
  },
  mi = function (e, t) {
    var n = t || this,
      r = n.xPercent,
      i = n.yPercent,
      a = n.x,
      o = n.y,
      s = n.rotation,
      c = n.skewX,
      l = n.skewY,
      u = n.scaleX,
      d = n.scaleY,
      f = n.target,
      p = n.xOrigin,
      m = n.yOrigin,
      h = n.xOffset,
      g = n.yOffset,
      _ = n.forceCSS,
      v = parseFloat(a),
      y = parseFloat(o),
      b,
      x,
      S,
      C,
      w;
    ((s = parseFloat(s)),
      (c = parseFloat(c)),
      (l = parseFloat(l)),
      l && ((l = parseFloat(l)), (c += l), (s += l)),
      s || c
        ? ((s *= sr),
          (c *= sr),
          (b = Math.cos(s) * u),
          (x = Math.sin(s) * u),
          (S = Math.sin(s - c) * -d),
          (C = Math.cos(s - c) * d),
          c &&
            ((l *= sr),
            (w = Math.tan(c - l)),
            (w = Math.sqrt(1 + w * w)),
            (S *= w),
            (C *= w),
            l &&
              ((w = Math.tan(l)),
              (w = Math.sqrt(1 + w * w)),
              (b *= w),
              (x *= w))),
          (b = U(b)),
          (x = U(x)),
          (S = U(S)),
          (C = U(C)))
        : ((b = u), (C = d), (x = S = 0)),
      ((v && !~(a + ``).indexOf(`px`)) || (y && !~(o + ``).indexOf(`px`))) &&
        ((v = qr(f, `x`, a, `px`)), (y = qr(f, `y`, o, `px`))),
      (p || m || h || g) &&
        ((v = U(v + p - (p * b + m * S) + h)),
        (y = U(y + m - (p * x + m * C) + g))),
      (r || i) &&
        ((w = f.getBBox()),
        (v = U(v + (r / 100) * w.width)),
        (y = U(y + (i / 100) * w.height))),
      (w =
        `matrix(` + b + `,` + x + `,` + S + `,` + C + `,` + v + `,` + y + `)`),
      f.setAttribute(`transform`, w),
      _ && (f.style[Dr] = w));
  },
  hi = function (e, t, n, r, i) {
    var a = 360,
      o = y(i),
      s = parseFloat(i) * (o && ~i.indexOf(`rad`) ? or : 1) - r,
      c = r + s + `deg`,
      l,
      u;
    return (
      o &&
        ((l = i.split(`_`)[1]),
        l === `short` && ((s %= a), s !== s % (a / 2) && (s += s < 0 ? a : -a)),
        l === `cw` && s < 0
          ? (s = ((s + a * lr) % a) - ~~(s / a) * a)
          : l === `ccw` && s > 0 && (s = ((s - a * lr) % a) - ~~(s / a) * a)),
      (e._pt = u = new In(e._pt, t, n, r, s, hr)),
      (u.e = c),
      (u.u = `deg`),
      e._props.push(n),
      u
    );
  },
  gi = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  _i = function (e, t, n) {
    var r = gi({}, n._gsap),
      i = `perspective,force3D,transformOrigin,svgOrigin`,
      a = n.style,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p;
    for (s in (r.svg
      ? ((c = n.getAttribute(`transform`)),
        n.setAttribute(`transform`, ``),
        (a[Dr] = t),
        (o = oi(n, 1)),
        Ur(n, Dr),
        n.setAttribute(`transform`, c))
      : ((c = getComputedStyle(n)[Dr]),
        (a[Dr] = t),
        (o = oi(n, 1)),
        (a[Dr] = c)),
    ar))
      ((c = r[s]),
        (l = o[s]),
        c !== l &&
          i.indexOf(s) < 0 &&
          ((f = lt(c)),
          (p = lt(l)),
          (u = f === p ? parseFloat(c) : qr(n, s, c, p)),
          (d = parseFloat(l)),
          (e._pt = new In(e._pt, o, s, u, d - u, mr)),
          (e._pt.u = p || 0),
          e._props.push(s)));
    gi(o, r);
  };
H(`padding,margin,Width,Radius`, function (e, t) {
  var n = `Top`,
    r = `Right`,
    i = `Bottom`,
    a = `Left`,
    o = (t < 3 ? [n, r, i, a] : [n + a, n + r, i + r, i + a]).map(function (n) {
      return t < 2 ? e + n : `border` + n + e;
    });
  $r[t > 1 ? `border` + e : e] = function (e, t, n, r, i) {
    var a, s;
    if (arguments.length < 4)
      return (
        (a = o.map(function (t) {
          return Jr(e, t, n);
        })),
        (s = a.join(` `)),
        s.split(a[0]).length === 5 ? a[0] : s
      );
    ((a = (r + ``).split(` `)),
      (s = {}),
      o.forEach(function (e, t) {
        return (s[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
      }),
      e.init(t, s, i));
  };
});
var vi = {
  name: `css`,
  register: Rr,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, n, r, i) {
    var a = this._props,
      s = e.style,
      c = n.vars.startAt,
      l,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      v,
      b,
      x,
      S,
      C,
      w,
      T,
      E;
    for (h in (er || Rr(),
    (this.styles = this.styles || Mr(e)),
    (T = this.styles.props),
    (this.tween = n),
    t))
      if (h !== `autoRound` && ((u = t[h]), !(_e[h] && fn(h, t, n, r, e, i)))) {
        if (
          ((p = typeof u),
          (m = $r[h]),
          p === `function` && ((u = u.call(n, r, e, i)), (p = typeof u)),
          p === `string` && ~u.indexOf(`random(`) && (u = Dt(u)),
          m)
        )
          m(this, e, h, u, n) && (w = 1);
        else if (h.substr(0, 2) === `--`)
          ((l = (getComputedStyle(e).getPropertyValue(h) + ``).trim()),
            (u += ``),
            (Ht.lastIndex = 0),
            Ht.test(l) ||
              ((g = lt(l)),
              (_ = lt(u)),
              _ ? g !== _ && (l = qr(e, h, l, _) + _) : g && (u += g)),
            this.add(s, `setProperty`, l, u, r, i, 0, 0, h),
            a.push(h),
            T.push(h, 0, s[h]));
        else if (p !== `undefined`) {
          if (
            (c && h in c
              ? ((l = typeof c[h] == `function` ? c[h].call(n, r, e, i) : c[h]),
                y(l) && ~l.indexOf(`random(`) && (l = Dt(l)),
                lt(l + ``) ||
                  l === `auto` ||
                  (l += o.units[h] || lt(Jr(e, h)) || ``),
                (l + ``).charAt(1) === `=` && (l = Jr(e, h)))
              : (l = Jr(e, h)),
            (f = parseFloat(l)),
            (v = p === `string` && u.charAt(1) === `=` && u.substr(0, 2)),
            v && (u = u.substr(2)),
            (d = parseFloat(u)),
            h in pr &&
              (h === `autoAlpha` &&
                (f === 1 && Jr(e, `visibility`) === `hidden` && d && (f = 0),
                T.push(`visibility`, 0, s.visibility),
                Wr(
                  this,
                  s,
                  `visibility`,
                  f ? `inherit` : `hidden`,
                  d ? `inherit` : `hidden`,
                  !d,
                )),
              h !== `scale` &&
                h !== `transform` &&
                ((h = pr[h]), ~h.indexOf(`,`) && (h = h.split(`,`)[0]))),
            (b = h in ar),
            b)
          ) {
            if (
              (this.styles.save(h),
              (E = u),
              p === `string` && u.substring(0, 6) === `var(--`)
            ) {
              if (
                ((u = Fr(e, u.substring(4, u.indexOf(`)`)))),
                u.substring(0, 5) === `calc(`)
              ) {
                var D = e.style.perspective;
                ((e.style.perspective = u),
                  (u = Fr(e, `perspective`)),
                  D ? (e.style.perspective = D) : Ur(e, `perspective`));
              }
              d = parseFloat(u);
            }
            if (
              (x ||
                ((S = e._gsap),
                (S.renderTransform && !t.parseTransform) ||
                  oi(e, t.parseTransform),
                (C = t.smoothOrigin !== !1 && S.smooth),
                (x = this._pt =
                  new In(this._pt, s, Dr, 0, 1, S.renderTransform, S, 0, -1)),
                (x.dep = 1)),
              h === `scale`)
            )
              ((this._pt = new In(
                this._pt,
                S,
                `scaleY`,
                S.scaleY,
                (v ? Ce(S.scaleY, v + d) : d) - S.scaleY || 0,
                mr,
              )),
                (this._pt.u = 0),
                a.push(`scaleY`, h),
                (h += `X`));
            else if (h === `transformOrigin`) {
              (T.push(Or, 0, s[Or]),
                (u = Zr(u)),
                S.svg
                  ? ai(e, u, 0, C, 0, this)
                  : ((_ = parseFloat(u.split(` `)[2]) || 0),
                    _ !== S.zOrigin && Wr(this, S, `zOrigin`, S.zOrigin, _),
                    Wr(this, s, h, si(l), si(u))));
              continue;
            } else if (h === `svgOrigin`) {
              ai(e, u, 1, C, 0, this);
              continue;
            } else if (h in ti) {
              hi(this, S, h, f, v ? Ce(f, v + u) : u);
              continue;
            } else if (h === `smoothOrigin`) {
              Wr(this, S, `smooth`, S.smooth, u);
              continue;
            } else if (h === `force3D`) {
              S[h] = u;
              continue;
            } else if (h === `transform`) {
              _i(this, u, e);
              continue;
            }
          } else h in s || (h = Lr(h) || h);
          if (b || ((d || d === 0) && (f || f === 0) && !fr.test(u) && h in s))
            ((g = (l + ``).substr((f + ``).length)),
              (d ||= 0),
              (_ = lt(u) || (h in o.units ? o.units[h] : g)),
              g !== _ && (f = qr(e, h, l, _)),
              (this._pt = new In(
                this._pt,
                b ? S : s,
                h,
                f,
                (v ? Ce(f, v + d) : d) - f,
                !b && (_ === `px` || h === `zIndex`) && t.autoRound !== !1
                  ? vr
                  : mr,
              )),
              (this._pt.u = _ || 0),
              b && E !== u
                ? ((this._pt.b = l), (this._pt.e = E), (this._pt.r = _r))
                : g !== _ &&
                  _ !== `%` &&
                  ((this._pt.b = l), (this._pt.r = gr)));
          else if (h in s) Yr.call(this, e, h, l, v ? v + u : u);
          else if (h in e) this.add(e, h, l || e[h], v ? v + u : u, r, i);
          else if (h !== `parseTransform`) {
            ce(h, u);
            continue;
          }
          (b ||
            (h in s
              ? T.push(h, 0, s[h])
              : typeof e[h] == `function`
                ? T.push(h, 2, e[h]())
                : T.push(h, 1, l || e[h])),
            a.push(h));
        }
      }
    w && Fn(this);
  },
  render: function (e, t) {
    if (t.tween._time || !rr())
      for (var n = t._pt; n;) (n.r(e, n.d), (n = n._next));
    else t.styles.revert();
  },
  get: Jr,
  aliases: pr,
  getSetter: function (e, t, n) {
    var r = pr[t];
    return (
      r && r.indexOf(`,`) < 0 && (t = r),
      t in ar && t !== Or && (e._gsap.x || Jr(e, `x`))
        ? n && nr === n
          ? t === `scale`
            ? wr
            : Cr
          : (nr = n || {}) && (t === `scale` ? Tr : Er)
        : e.style && !S(e.style[t])
          ? xr
          : ~t.indexOf(`-`)
            ? Sr
            : Dn(e, t)
    );
  },
  core: { _removeProperty: Ur, _getMatrix: ii },
};
((Xn.utils.checkPrefix = Lr),
  (Xn.core.getStyleSaver = Mr),
  (function (e, t, n, r) {
    var i = H(e + `,` + t + `,` + n, function (e) {
      ar[e] = 1;
    });
    (H(t, function (e) {
      ((o.units[e] = `deg`), (ti[e] = 1));
    }),
      (pr[i[13]] = e + `,` + t),
      H(r, function (e) {
        var t = e.split(`:`);
        pr[t[1]] = i[t[0]];
      }));
  })(
    `x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,
    `rotation,rotationX,rotationY,skewX,skewY`,
    `transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,
    `0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`,
  ),
  H(
    `x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,
    function (e) {
      o.units[e] = `px`;
    },
  ),
  Xn.registerPlugin(vi));
var yi = Xn.registerPlugin(vi) || Xn;
yi.core.Tween;
function bi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r));
  }
}
function xi(e, t, n) {
  return (t && bi(e.prototype, t), n && bi(e, n), e);
}
var Si,
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
  Fi = function () {
    return (
      Si ||
      (typeof window < `u` && (Si = window.gsap) && Si.registerPlugin && Si)
    );
  },
  Ii = 1,
  Li = [],
  q = [],
  Ri = [],
  zi = Date.now,
  Bi = function (e, t) {
    return t;
  },
  Vi = function () {
    var e = Ai.core,
      t = e.bridge || {},
      n = e._scrollers,
      r = e._proxies;
    (n.push.apply(n, q),
      r.push.apply(r, Ri),
      (q = n),
      (Ri = r),
      (Bi = function (e, n) {
        return t[e](n);
      }));
  },
  Hi = function (e, t) {
    return ~Ri.indexOf(e) && Ri[Ri.indexOf(e) + 1][t];
  },
  Ui = function (e) {
    return !!~ji.indexOf(e);
  },
  Wi = function (e, t, n, r, i) {
    return e.addEventListener(t, n, { passive: r !== !1, capture: !!i });
  },
  Gi = function (e, t, n, r) {
    return e.removeEventListener(t, n, !!r);
  },
  Ki = `scrollLeft`,
  qi = `scrollTop`,
  Ji = function () {
    return (Mi && Mi.isPressed) || q.cache++;
  },
  Yi = function (e, t) {
    var n = function n(r) {
      if (r || r === 0) {
        Ii && (wi.history.scrollRestoration = `manual`);
        var i = Mi && Mi.isPressed;
        ((r = n.v = Math.round(r) || (Mi && Mi.iOS ? 1 : 0)),
          e(r),
          (n.cacheID = q.cache),
          i && Bi(`ss`, r));
      } else
        (t || q.cache !== n.cacheID || Bi(`ref`)) &&
          ((n.cacheID = q.cache), (n.v = e()));
      return n.v + n.offset;
    };
    return ((n.offset = 0), e && n);
  },
  Xi = {
    s: Ki,
    p: `left`,
    p2: `Left`,
    os: `right`,
    os2: `Right`,
    d: `width`,
    d2: `Width`,
    a: `x`,
    sc: Yi(function (e) {
      return arguments.length
        ? wi.scrollTo(e, Zi.sc())
        : wi.pageXOffset || Ti[Ki] || Ei[Ki] || Di[Ki] || 0;
    }),
  },
  Zi = {
    s: qi,
    p: `top`,
    p2: `Top`,
    os: `bottom`,
    os2: `Bottom`,
    d: `height`,
    d2: `Height`,
    a: `y`,
    op: Xi,
    sc: Yi(function (e) {
      return arguments.length
        ? wi.scrollTo(Xi.sc(), e)
        : wi.pageYOffset || Ti[qi] || Ei[qi] || Di[qi] || 0;
    }),
  },
  Qi = function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || Si.utils.toArray)(e)[0] ||
      (typeof e == `string` && Si.config().nullTargetWarn !== !1
        ? console.warn(`Element not found:`, e)
        : null)
    );
  },
  $i = function (e, t) {
    for (var n = t.length; n--;) if (t[n] === e || t[n].contains(e)) return !0;
    return !1;
  },
  ea = function (e, t) {
    var n = t.s,
      r = t.sc;
    Ui(e) && (e = Ti.scrollingElement || Ei);
    var i = q.indexOf(e),
      a = r === Zi.sc ? 1 : 2;
    (!~i && (i = q.push(e) - 1), q[i + a] || Wi(e, `scroll`, Ji));
    var o = q[i + a],
      s =
        o ||
        (q[i + a] =
          Yi(Hi(e, n), !0) ||
          (Ui(e)
            ? r
            : Yi(function (t) {
                return arguments.length ? (e[n] = t) : e[n];
              })));
    return (
      (s.target = e),
      o || (s.smooth = Si.getProperty(e, `scrollBehavior`) === `smooth`),
      s
    );
  },
  ta = function (e, t, n) {
    var r = e,
      i = e,
      a = zi(),
      o = a,
      s = t || 50,
      c = Math.max(500, s * 3),
      l = function (e, t) {
        var c = zi();
        t || c - a > s
          ? ((i = r), (r = e), (o = a), (a = c))
          : n
            ? (r += e)
            : (r = i + ((e - i) / (c - o)) * (a - o));
      };
    return {
      update: l,
      reset: function () {
        ((i = r = n ? 0 : r), (o = a = 0));
      },
      getVelocity: function (e) {
        var t = o,
          s = i,
          u = zi();
        return (
          (e || e === 0) && e !== r && l(e),
          a === o || u - o > c
            ? 0
            : ((r + (n ? s : -s)) / ((n ? u : a) - t)) * 1e3
        );
      },
    };
  },
  na = function (e, t) {
    return (
      t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  ra = function (e) {
    var t = Math.max.apply(Math, e),
      n = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(n) ? t : n;
  },
  ia = function () {
    ((Ai = Si.core.globals().ScrollTrigger), Ai && Ai.core && Vi());
  },
  aa = function (e) {
    return (
      (Si = e || Fi()),
      !Ci &&
        Si &&
        typeof document < `u` &&
        document.body &&
        ((wi = window),
        (Ti = document),
        (Ei = Ti.documentElement),
        (Di = Ti.body),
        (ji = [wi, Ti, Ei, Di]),
        Si.utils.clamp,
        (Pi = Si.core.context || function () {}),
        (ki = `onpointerenter` in Di ? `pointer` : `mouse`),
        (Oi = oa.isTouch =
          wi.matchMedia &&
          wi.matchMedia(`(hover: none), (pointer: coarse)`).matches
            ? 1
            : `ontouchstart` in wi ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (Ni = oa.eventTypes =
          (
            `ontouchstart` in Ei
              ? `touchstart,touchmove,touchcancel,touchend`
              : `onpointerdown` in Ei
                ? `pointerdown,pointermove,pointercancel,pointerup`
                : `mousedown,mousemove,mouseup,mouseup`
          ).split(`,`)),
        setTimeout(function () {
          return (Ii = 0);
        }, 500),
        (Ci = 1)),
      Ai || ia(),
      Ci
    );
  };
((Xi.op = Zi), (q.cache = 0));
var oa = (function () {
  function e(e) {
    this.init(e);
  }
  var t = e.prototype;
  return (
    (t.init = function (e) {
      (Ci || aa(Si) || console.warn(`Please gsap.registerPlugin(Observer)`),
        Ai || ia());
      var t = e.tolerance,
        n = e.dragMinimum,
        r = e.type,
        i = e.target,
        a = e.lineHeight,
        o = e.debounce,
        s = e.preventDefault,
        c = e.onStop,
        l = e.onStopDelay,
        u = e.ignore,
        d = e.wheelSpeed,
        f = e.event,
        p = e.onDragStart,
        m = e.onDragEnd,
        h = e.onDrag,
        g = e.onPress,
        _ = e.onRelease,
        v = e.onRight,
        y = e.onLeft,
        b = e.onUp,
        x = e.onDown,
        S = e.onChangeX,
        C = e.onChangeY,
        w = e.onChange,
        T = e.onToggleX,
        E = e.onToggleY,
        D = e.onHover,
        O = e.onHoverEnd,
        k = e.onMove,
        A = e.ignoreCheck,
        j = e.isNormalizer,
        M = e.onGestureStart,
        N = e.onGestureEnd,
        P = e.onWheel,
        ee = e.onEnable,
        te = e.onDisable,
        ne = e.onClick,
        F = e.scrollSpeed,
        re = e.capture,
        I = e.allowClicks,
        ie = e.lockAxis,
        ae = e.onLockAxis;
      ((this.target = i = Qi(i) || Ei),
        (this.vars = e),
        (u &&= Si.utils.toArray(u)),
        (t ||= 1e-9),
        (n ||= 0),
        (d ||= 1),
        (F ||= 1),
        (r ||= `wheel,touch,pointer`),
        (o = o !== !1),
        (a ||= parseFloat(wi.getComputedStyle(Di).lineHeight) || 22));
      var L,
        oe,
        se,
        ce,
        R,
        le,
        ue,
        z = this,
        de = 0,
        fe = 0,
        pe = e.passive || (!s && e.passive !== !1),
        me = ea(i, Xi),
        he = ea(i, Zi),
        ge = me(),
        _e = he(),
        ve =
          ~r.indexOf(`touch`) &&
          !~r.indexOf(`pointer`) &&
          Ni[0] === `pointerdown`,
        ye = Ui(i),
        B = i.ownerDocument || Ti,
        be = [0, 0, 0],
        V = [0, 0, 0],
        xe = 0,
        Se = function () {
          return (xe = zi());
        },
        H = function (e, t) {
          return (
            ((z.event = e) && u && $i(e.target, u)) ||
            (t && ve && e.pointerType !== `touch`) ||
            (A && A(e, t))
          );
        },
        U = function () {
          (z._vx.reset(), z._vy.reset(), oe.pause(), c && c(z));
        },
        W = function () {
          var e = (z.deltaX = ra(be)),
            n = (z.deltaY = ra(V)),
            r = Math.abs(e) >= t,
            i = Math.abs(n) >= t;
          (w && (r || i) && w(z, e, n, be, V),
            r &&
              (v && z.deltaX > 0 && v(z),
              y && z.deltaX < 0 && y(z),
              S && S(z),
              T && z.deltaX < 0 != de < 0 && T(z),
              (de = z.deltaX),
              (be[0] = be[1] = be[2] = 0)),
            i &&
              (x && z.deltaY > 0 && x(z),
              b && z.deltaY < 0 && b(z),
              C && C(z),
              E && z.deltaY < 0 != fe < 0 && E(z),
              (fe = z.deltaY),
              (V[0] = V[1] = V[2] = 0)),
            (ce || se) &&
              (k && k(z),
              (se &&= (p && se === 1 && p(z), h && h(z), 0)),
              (ce = !1)),
            le && !(le = !1) && ae && ae(z),
            (R &&= (P(z), !1)),
            (L = 0));
        },
        Ce = function (e, t, n) {
          ((be[n] += e),
            (V[n] += t),
            z._vx.update(e),
            z._vy.update(t),
            o ? (L ||= requestAnimationFrame(W)) : W());
        },
        we = function (e, t) {
          (ie &&
            !ue &&
            ((z.axis = ue = Math.abs(e) > Math.abs(t) ? `x` : `y`), (le = !0)),
            ue !== `y` && ((be[2] += e), z._vx.update(e, !0)),
            ue !== `x` && ((V[2] += t), z._vy.update(t, !0)),
            o ? (L ||= requestAnimationFrame(W)) : W());
        },
        Te = function (e) {
          if (!H(e, 1)) {
            e = na(e, s);
            var t = e.clientX,
              r = e.clientY,
              i = t - z.x,
              a = r - z.y,
              o = z.isDragging;
            ((z.x = t),
              (z.y = r),
              (o ||
                ((i || a) &&
                  (Math.abs(z.startX - t) >= n ||
                    Math.abs(z.startY - r) >= n))) &&
                ((se ||= o ? 2 : 1), o || (z.isDragging = !0), we(i, a)));
          }
        },
        Ee = (z.onPress = function (e) {
          H(e, 1) ||
            (e && e.button) ||
            ((z.axis = ue = null),
            oe.pause(),
            (z.isPressed = !0),
            (e = na(e)),
            (de = fe = 0),
            (z.startX = z.x = e.clientX),
            (z.startY = z.y = e.clientY),
            z._vx.reset(),
            z._vy.reset(),
            Wi(j ? i : B, Ni[1], Te, pe, !0),
            (z.deltaX = z.deltaY = 0),
            g && g(z));
        }),
        De = (z.onRelease = function (e) {
          if (!H(e, 1)) {
            Gi(j ? i : B, Ni[1], Te, !0);
            var t = !isNaN(z.y - z.startY),
              n = z.isDragging,
              r =
                n &&
                (Math.abs(z.x - z.startX) > 3 || Math.abs(z.y - z.startY) > 3),
              a = na(e);
            (!r &&
              t &&
              (z._vx.reset(),
              z._vy.reset(),
              s &&
                I &&
                Si.delayedCall(0.08, function () {
                  if (zi() - xe > 300 && !e.defaultPrevented) {
                    if (e.target.click) e.target.click();
                    else if (B.createEvent) {
                      var t = B.createEvent(`MouseEvents`);
                      (t.initMouseEvent(
                        `click`,
                        !0,
                        !0,
                        wi,
                        1,
                        a.screenX,
                        a.screenY,
                        a.clientX,
                        a.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null,
                      ),
                        e.target.dispatchEvent(t));
                    }
                  }
                })),
              (z.isDragging = z.isGesturing = z.isPressed = !1),
              c && n && !j && oe.restart(!0),
              se && W(),
              m && n && m(z),
              _ && _(z, r));
          }
        }),
        G = function (e) {
          return (
            e.touches &&
            e.touches.length > 1 &&
            (z.isGesturing = !0) &&
            M(e, z.isDragging)
          );
        },
        Oe = function () {
          return (z.isGesturing = !1) || N(z);
        },
        ke = function (e) {
          if (!H(e)) {
            var t = me(),
              n = he();
            (Ce((t - ge) * F, (n - _e) * F, 1),
              (ge = t),
              (_e = n),
              c && oe.restart(!0));
          }
        },
        Ae = function (e) {
          if (!H(e)) {
            ((e = na(e, s)), P && (R = !0));
            var t =
              (e.deltaMode === 1 ? a : e.deltaMode === 2 ? wi.innerHeight : 1) *
              d;
            (Ce(e.deltaX * t, e.deltaY * t, 0), c && !j && oe.restart(!0));
          }
        },
        je = function (e) {
          if (!H(e)) {
            var t = e.clientX,
              n = e.clientY,
              r = t - z.x,
              i = n - z.y;
            ((z.x = t),
              (z.y = n),
              (ce = !0),
              c && oe.restart(!0),
              (r || i) && we(r, i));
          }
        },
        Me = function (e) {
          ((z.event = e), D(z));
        },
        Ne = function (e) {
          ((z.event = e), O(z));
        },
        Pe = function (e) {
          return H(e) || (na(e, s) && ne(z));
        };
      ((oe = z._dc = Si.delayedCall(l || 0.25, U).pause()),
        (z.deltaX = z.deltaY = 0),
        (z._vx = ta(0, 50, !0)),
        (z._vy = ta(0, 50, !0)),
        (z.scrollX = me),
        (z.scrollY = he),
        (z.isDragging = z.isGesturing = z.isPressed = !1),
        Pi(this),
        (z.enable = function (e) {
          return (
            z.isEnabled ||
              (Wi(ye ? B : i, `scroll`, Ji),
              r.indexOf(`scroll`) >= 0 && Wi(ye ? B : i, `scroll`, ke, pe, re),
              r.indexOf(`wheel`) >= 0 && Wi(i, `wheel`, Ae, pe, re),
              ((r.indexOf(`touch`) >= 0 && Oi) || r.indexOf(`pointer`) >= 0) &&
                (Wi(i, Ni[0], Ee, pe, re),
                Wi(B, Ni[2], De),
                Wi(B, Ni[3], De),
                I && Wi(i, `click`, Se, !0, !0),
                ne && Wi(i, `click`, Pe),
                M && Wi(B, `gesturestart`, G),
                N && Wi(B, `gestureend`, Oe),
                D && Wi(i, ki + `enter`, Me),
                O && Wi(i, ki + `leave`, Ne),
                k && Wi(i, ki + `move`, je)),
              (z.isEnabled = !0),
              (z.isDragging = z.isGesturing = z.isPressed = ce = se = !1),
              z._vx.reset(),
              z._vy.reset(),
              (ge = me()),
              (_e = he()),
              e && e.type && Ee(e),
              ee && ee(z)),
            z
          );
        }),
        (z.disable = function () {
          z.isEnabled &&
            (Li.filter(function (e) {
              return e !== z && Ui(e.target);
            }).length || Gi(ye ? B : i, `scroll`, Ji),
            z.isPressed &&
              (z._vx.reset(), z._vy.reset(), Gi(j ? i : B, Ni[1], Te, !0)),
            Gi(ye ? B : i, `scroll`, ke, re),
            Gi(i, `wheel`, Ae, re),
            Gi(i, Ni[0], Ee, re),
            Gi(B, Ni[2], De),
            Gi(B, Ni[3], De),
            Gi(i, `click`, Se, !0),
            Gi(i, `click`, Pe),
            Gi(B, `gesturestart`, G),
            Gi(B, `gestureend`, Oe),
            Gi(i, ki + `enter`, Me),
            Gi(i, ki + `leave`, Ne),
            Gi(i, ki + `move`, je),
            (z.isEnabled = z.isPressed = z.isDragging = !1),
            te && te(z));
        }),
        (z.kill = z.revert =
          function () {
            z.disable();
            var e = Li.indexOf(z);
            (e >= 0 && Li.splice(e, 1), Mi === z && (Mi = 0));
          }),
        Li.push(z),
        j && Ui(i) && (Mi = z),
        z.enable(f));
    }),
    xi(e, [
      {
        key: `velocityX`,
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: `velocityY`,
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    e
  );
})();
((oa.version = `3.15.0`),
  (oa.create = function (e) {
    return new oa(e);
  }),
  (oa.register = aa),
  (oa.getAll = function () {
    return Li.slice();
  }),
  (oa.getById = function (e) {
    return Li.filter(function (t) {
      return t.vars.id === e;
    })[0];
  }),
  Fi() && Si.registerPlugin(oa));
var J,
  sa,
  Y,
  ca,
  la,
  X,
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
  Ra = 1,
  za = Date.now,
  Ba = za(),
  Va = 0,
  Ha = 0,
  Ua = function (e, t, n) {
    var r = ao(e) && (e.substr(0, 6) === `clamp(` || e.indexOf(`max`) > -1);
    return ((n[`_` + t + `Clamp`] = r), r ? e.substr(6, e.length - 7) : e);
  },
  Wa = function (e, t) {
    return t && (!ao(e) || e.substr(0, 6) !== `clamp(`)
      ? `clamp(` + e + `)`
      : e;
  },
  Ga = function e() {
    return Ha && requestAnimationFrame(e);
  },
  Ka = function () {
    return (_a = 1);
  },
  qa = function () {
    return (_a = 0);
  },
  Ja = function (e) {
    return e;
  },
  Ya = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Xa = function () {
    return typeof window < `u`;
  },
  Za = function () {
    return J || (Xa() && (J = window.gsap) && J.registerPlugin && J);
  },
  Qa = function (e) {
    return !!~ua.indexOf(e);
  },
  $a = function (e) {
    return (
      (e === `Height` ? Pa : Y[`inner` + e]) ||
      la[`client` + e] ||
      X[`client` + e]
    );
  },
  eo = function (e) {
    return (
      Hi(e, `getBoundingClientRect`) ||
      (Qa(e)
        ? function () {
            return ((Ds.width = Y.innerWidth), (Ds.height = Pa), Ds);
          }
        : function () {
            return jo(e);
          })
    );
  },
  to = function (e, t, n) {
    var r = n.d,
      i = n.d2,
      a = n.a;
    return (a = Hi(e, `getBoundingClientRect`))
      ? function () {
          return a()[r];
        }
      : function () {
          return (t ? $a(i) : e[`client` + i]) || 0;
        };
  },
  no = function (e, t) {
    return !t || ~Ri.indexOf(e)
      ? eo(e)
      : function () {
          return Ds;
        };
  },
  ro = function (e, t) {
    var n = t.s,
      r = t.d2,
      i = t.d,
      a = t.a;
    return Math.max(
      0,
      (n = `scroll` + r) && (a = Hi(e, n))
        ? a() - eo(e)()[i]
        : Qa(e)
          ? (la[n] || X[n]) - $a(r)
          : e[n] - e[`offset` + r],
    );
  },
  io = function (e, t) {
    for (var n = 0; n < Sa.length; n += 3)
      (!t || ~t.indexOf(Sa[n + 1])) && e(Sa[n], Sa[n + 1], Sa[n + 2]);
  },
  ao = function (e) {
    return typeof e == `string`;
  },
  oo = function (e) {
    return typeof e == `function`;
  },
  so = function (e) {
    return typeof e == `number`;
  },
  co = function (e) {
    return typeof e == `object`;
  },
  lo = function (e, t, n) {
    return e && e.progress(+!t) && n && e.pause();
  },
  uo = function (e, t, n) {
    if (e.enabled) {
      var r = e._ctx
        ? e._ctx.add(function () {
            return t(e, n);
          })
        : t(e, n);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  },
  fo = Math.abs,
  po = `left`,
  mo = `top`,
  ho = `right`,
  go = `bottom`,
  _o = `width`,
  vo = `height`,
  yo = `Right`,
  bo = `Left`,
  xo = `Top`,
  So = `Bottom`,
  Co = `padding`,
  wo = `margin`,
  To = `Width`,
  Eo = `Height`,
  Do = `px`,
  Oo = function (e) {
    return Y.getComputedStyle(
      e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e,
    );
  },
  ko = function (e) {
    var t = Oo(e).position;
    e.style.position = t === `absolute` || t === `fixed` ? t : `relative`;
  },
  Ao = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  jo = function (e, t) {
    var n =
        t &&
        Oo(e)[va] !== `matrix(1, 0, 0, 1, 0, 0)` &&
        J.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      r = e.getBoundingClientRect
        ? e.getBoundingClientRect()
        : e.scrollingElement.getBoundingClientRect();
    return (n && n.progress(0).kill(), r);
  },
  Mo = function (e, t) {
    var n = t.d2;
    return e[`offset` + n] || e[`client` + n] || 0;
  },
  No = function (e) {
    var t = [],
      n = e.labels,
      r = e.duration(),
      i;
    for (i in n) t.push(n[i] / r);
    return t;
  },
  Po = function (e) {
    return function (t) {
      return J.utils.snap(No(e), t);
    };
  },
  Fo = function (e) {
    var t = J.utils.snap(e),
      n =
        Array.isArray(e) &&
        e.slice(0).sort(function (e, t) {
          return e - t;
        });
    return n
      ? function (e, r, i) {
          i === void 0 && (i = 0.001);
          var a;
          if (!r) return t(e);
          if (r > 0) {
            for (e -= i, a = 0; a < n.length; a++) if (n[a] >= e) return n[a];
            return n[a - 1];
          } else for (a = n.length, e += i; a--;) if (n[a] <= e) return n[a];
          return n[0];
        }
      : function (n, r, i) {
          i === void 0 && (i = 0.001);
          var a = t(n);
          return !r || Math.abs(a - n) < i || a - n < 0 == r < 0
            ? a
            : t(r < 0 ? n - e : n + e);
        };
  },
  Io = function (e) {
    return function (t, n) {
      return Fo(No(e))(t, n.direction);
    };
  },
  Lo = function (e, t, n, r) {
    return n.split(`,`).forEach(function (n) {
      return e(t, n, r);
    });
  },
  Ro = function (e, t, n, r, i) {
    return e.addEventListener(t, n, { passive: !r, capture: !!i });
  },
  zo = function (e, t, n, r) {
    return e.removeEventListener(t, n, !!r);
  },
  Bo = function (e, t, n) {
    ((n &&= n.wheelHandler), n && (e(t, `wheel`, n), e(t, `touchmove`, n)));
  },
  Vo = {
    startColor: `green`,
    endColor: `red`,
    indent: 0,
    fontSize: `16px`,
    fontWeight: `normal`,
  },
  Ho = { toggleActions: `play`, anticipatePin: 0 },
  Uo = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Wo = function (e, t) {
    if (ao(e)) {
      var n = e.indexOf(`=`),
        r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
      (~n && (e.indexOf(`%`) > n && (r *= t / 100), (e = e.substr(0, n - 1))),
        (e =
          r +
          (e in Uo
            ? Uo[e] * t
            : ~e.indexOf(`%`)
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0)));
    }
    return e;
  },
  Go = function (e, t, n, r, i, a, o, s) {
    var c = i.startColor,
      l = i.endColor,
      u = i.fontSize,
      d = i.indent,
      f = i.fontWeight,
      p = ca.createElement(`div`),
      m = Qa(n) || Hi(n, `pinType`) === `fixed`,
      h = e.indexOf(`scroller`) !== -1,
      g = m ? X : n.tagName === `IFRAME` ? n.contentDocument.body : n,
      _ = e.indexOf(`start`) !== -1,
      v = _ ? c : l,
      y =
        `border-color:` +
        v +
        `;font-size:` +
        u +
        `;color:` +
        v +
        `;font-weight:` +
        f +
        `;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;
    return (
      (y += `position:` + ((h || s) && m ? `fixed;` : `absolute;`)),
      (h || s || !m) &&
        (y += (r === Zi ? ho : go) + `:` + (a + parseFloat(d)) + `px;`),
      o &&
        (y +=
          `box-sizing:border-box;text-align:left;width:` +
          o.offsetWidth +
          `px;`),
      (p._isStart = _),
      p.setAttribute(`class`, `gsap-marker-` + e + (t ? ` marker-` + t : ``)),
      (p.style.cssText = y),
      (p.innerText = t || t === 0 ? e + `-` + t : e),
      g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
      (p._offset = p[`offset` + r.op.d2]),
      Ko(p, 0, r, _),
      p
    );
  },
  Ko = function (e, t, n, r) {
    var i = { display: `block` },
      a = n[r ? `os2` : `p2`],
      o = n[r ? `p2` : `os2`];
    ((e._isFlipped = r),
      (i[n.a + `Percent`] = r ? -100 : 0),
      (i[n.a] = r ? `1px` : 0),
      (i[`border` + a + To] = 1),
      (i[`border` + o + To] = 0),
      (i[n.p] = t + `px`),
      J.set(e, i));
  },
  Z = [],
  qo = {},
  Jo,
  Yo = function () {
    return za() - Va > 34 && (Jo ||= requestAnimationFrame(vs));
  },
  Xo = function () {
    (!Ea || !Ea.isPressed || Ea.startX > X.clientWidth) &&
      (q.cache++,
      Ea ? (Jo ||= requestAnimationFrame(vs)) : vs(),
      Va || ns(`scrollStart`),
      (Va = za()));
  },
  Zo = function () {
    ((ka = Y.innerWidth), (Oa = Y.innerHeight));
  },
  Qo = function (e) {
    (q.cache++,
      (e === !0 ||
        (!ga &&
          !Ta &&
          !ca.fullscreenElement &&
          !ca.webkitFullscreenElement &&
          (!Da ||
            ka !== Y.innerWidth ||
            Math.abs(Y.innerHeight - Oa) > Y.innerHeight * 0.25))) &&
        da.restart(!0));
  },
  $o = {},
  es = [],
  ts = function e() {
    return zo(Q, `scrollEnd`, e) || ms(!0);
  },
  ns = function (e) {
    return (
      ($o[e] &&
        $o[e].map(function (e) {
          return e();
        })) ||
      es
    );
  },
  rs = [],
  is = function (e) {
    for (var t = 0; t < rs.length; t += 5)
      (!e || (rs[t + 4] && rs[t + 4].query === e)) &&
        ((rs[t].style.cssText = rs[t + 1]),
        rs[t].getBBox && rs[t].setAttribute(`transform`, rs[t + 2] || ``),
        (rs[t + 3].uncache = 1));
  },
  as = function () {
    return q.forEach(function (e) {
      return oo(e) && ++e.cacheID && (e.rec = e());
    });
  },
  os = function (e, t) {
    var n;
    for (ya = 0; ya < Z.length; ya++)
      ((n = Z[ya]),
        n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0)));
    ((Fa = !0), t && is(t), t || ns(`revert`));
  },
  ss = function (e, t) {
    (q.cache++,
      (t || !cs) &&
        q.forEach(function (e) {
          return oo(e) && e.cacheID++ && (e.rec = 0);
        }),
      ao(e) && (Y.history.scrollRestoration = Ma = e));
  },
  cs,
  ls = 0,
  us,
  ds = function () {
    if (us !== ls) {
      var e = (us = ls);
      requestAnimationFrame(function () {
        return e === ls && ms(!0);
      });
    }
  },
  fs = function () {
    (X.appendChild(Na),
      (Pa = (!Ea && Na.offsetHeight) || Y.innerHeight),
      X.removeChild(Na));
  },
  ps = function (e) {
    return fa(
      `.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`,
    ).forEach(function (t) {
      return (t.style.display = e ? `none` : `block`);
    });
  },
  ms = function (e, t) {
    if (
      ((la = ca.documentElement),
      (X = ca.body),
      (ua = [Y, ca, la, X]),
      Va && !e && !Fa)
    ) {
      Ro(Q, `scrollEnd`, ts);
      return;
    }
    (fs(), (cs = Q.isRefreshing = !0), Fa || as());
    var n = ns(`refreshInit`);
    (Ca && Q.sort(),
      t || os(),
      q.forEach(function (e) {
        oo(e) && (e.smooth && (e.target.style.scrollBehavior = `auto`), e(0));
      }),
      Z.slice(0).forEach(function (e) {
        return e.refresh();
      }),
      (Fa = !1),
      Z.forEach(function (e) {
        if (e._subPinOffset && e.pin) {
          var t = e.vars.horizontal ? `offsetWidth` : `offsetHeight`,
            n = e.pin[t];
          (e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh());
        }
      }),
      (Ia = 1),
      ps(!0),
      Z.forEach(function (e) {
        var t = ro(e.scroller, e._dir),
          n = e.vars.end === `max` || (e._endClamp && e.end > t),
          r = e._startClamp && e.start >= t;
        (n || r) &&
          e.setPositions(
            r ? t - 1 : e.start,
            n ? Math.max(r ? t : e.start + 1, t) : e.end,
            !0,
          );
      }),
      ps(!1),
      (Ia = 0),
      n.forEach(function (e) {
        return e && e.render && e.render(-1);
      }),
      q.forEach(function (e) {
        oo(e) &&
          (e.smooth &&
            requestAnimationFrame(function () {
              return (e.target.style.scrollBehavior = `smooth`);
            }),
          e.rec && e(e.rec));
      }),
      ss(Ma, 1),
      da.pause(),
      ls++,
      (cs = 2),
      vs(2),
      Z.forEach(function (e) {
        return oo(e.vars.onRefresh) && e.vars.onRefresh(e);
      }),
      (cs = Q.isRefreshing = !1),
      ns(`refresh`));
  },
  hs = 0,
  gs = 1,
  _s,
  vs = function (e) {
    if (e === 2 || (!cs && !Fa)) {
      ((Q.isUpdating = !0), _s && _s.update(0));
      var t = Z.length,
        n = za(),
        r = n - Ba >= 50,
        i = t && Z[0].scroll();
      if (
        ((gs = hs > i ? -1 : 1),
        cs || (hs = i),
        r &&
          (Va && !_a && n - Va > 200 && ((Va = 0), ns(`scrollEnd`)),
          (ma = Ba),
          (Ba = n)),
        gs < 0)
      ) {
        for (ya = t; ya-- > 0;) Z[ya] && Z[ya].update(0, r);
        gs = 1;
      } else for (ya = 0; ya < t; ya++) Z[ya] && Z[ya].update(0, r);
      Q.isUpdating = !1;
    }
    Jo = 0;
  },
  ys = [
    po,
    mo,
    go,
    ho,
    wo + So,
    wo + yo,
    wo + xo,
    wo + bo,
    `display`,
    `flexShrink`,
    `float`,
    `zIndex`,
    `gridColumnStart`,
    `gridColumnEnd`,
    `gridRowStart`,
    `gridRowEnd`,
    `gridArea`,
    `justifySelf`,
    `alignSelf`,
    `placeSelf`,
    `order`,
  ],
  bs = ys.concat([
    _o,
    vo,
    `boxSizing`,
    `max` + To,
    `max` + Eo,
    `position`,
    wo,
    Co,
    Co + xo,
    Co + yo,
    Co + So,
    Co + bo,
  ]),
  xs = function (e, t, n) {
    ws(n);
    var r = e._gsap;
    if (r.spacerIsNative) ws(r.spacerState);
    else if (e._gsap.swappedIn) {
      var i = t.parentNode;
      i && (i.insertBefore(e, t), i.removeChild(t));
    }
    e._gsap.swappedIn = !1;
  },
  Ss = function (e, t, n, r) {
    if (!e._gsap.swappedIn) {
      for (var i = ys.length, a = t.style, o = e.style, s; i--;)
        ((s = ys[i]), (a[s] = n[s]));
      ((a.position = n.position === `absolute` ? `absolute` : `relative`),
        n.display === `inline` && (a.display = `inline-block`),
        (o[go] = o[ho] = `auto`),
        (a.flexBasis = n.flexBasis || `auto`),
        (a.overflow = `visible`),
        (a.boxSizing = `border-box`),
        (a[_o] = Mo(e, Xi) + Do),
        (a[vo] = Mo(e, Zi) + Do),
        (a[Co] = o[wo] = o[mo] = o[po] = `0`),
        ws(r),
        (o[_o] = o[`max` + To] = n[_o]),
        (o[vo] = o[`max` + Eo] = n[vo]),
        (o[Co] = n[Co]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0));
    }
  },
  Cs = /([A-Z])/g,
  ws = function (e) {
    if (e) {
      var t = e.t.style,
        n = e.length,
        r = 0,
        i,
        a;
      for ((e.t._gsap || J.core.getCache(e.t)).uncache = 1; r < n; r += 2)
        ((a = e[r + 1]),
          (i = e[r]),
          a
            ? (t[i] = a)
            : t[i] && t.removeProperty(i.replace(Cs, `-$1`).toLowerCase()));
    }
  },
  Ts = function (e) {
    for (var t = bs.length, n = e.style, r = [], i = 0; i < t; i++)
      r.push(bs[i], n[bs[i]]);
    return ((r.t = e), r);
  },
  Es = function (e, t, n) {
    for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2)
      ((o = e[a]), r.push(o, o in t ? t[o] : e[a + 1]));
    return ((r.t = e.t), r);
  },
  Ds = { left: 0, top: 0 },
  Os = function (e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
    (oo(e) && (e = e(s)),
      ao(e) &&
        e.substr(0, 3) === `max` &&
        (e = d + (e.charAt(4) === `=` ? Wo(`0` + e.substr(3), n) : 0)));
    var m = f ? f.time() : 0,
      h,
      g,
      _;
    if ((f && f.seek(0), isNaN(e) || (e = +e), so(e)))
      (f &&
        (e = J.utils.mapRange(
          f.scrollTrigger.start,
          f.scrollTrigger.end,
          0,
          d,
          e,
        )),
        o && Ko(o, n, r, !0));
    else {
      oo(t) && (t = t(s));
      var v = (e || `0`).split(` `),
        y,
        b,
        x,
        S;
      ((_ = Qi(t, s) || X),
        (y = jo(_) || {}),
        (!y || (!y.left && !y.top)) &&
          Oo(_).display === `none` &&
          ((S = _.style.display),
          (_.style.display = `block`),
          (y = jo(_)),
          S ? (_.style.display = S) : _.style.removeProperty(`display`)),
        (b = Wo(v[0], y[r.d])),
        (x = Wo(v[1] || `0`, n)),
        (e = y[r.p] - c[r.p] - l + b + i - x),
        o && Ko(o, x, r, n - x < 20 || (o._isStart && x > 20)),
        (n -= n - x));
    }
    if ((p && ((s[p] = e || -0.001), e < 0 && (e = 0)), a)) {
      var C = e + n,
        w = a._isStart;
      ((h = `scroll` + r.d2),
        Ko(
          a,
          C,
          r,
          (w && C > 20) ||
            (!w && (u ? Math.max(X[h], la[h]) : a.parentNode[h]) <= C + 1),
        ),
        u &&
          ((c = jo(o)),
          u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Do)));
    }
    return (
      f &&
        _ &&
        ((h = jo(_)),
        f.seek(d),
        (g = jo(_)),
        (f._caScrollDist = h[r.p] - g[r.p]),
        (e = (e / f._caScrollDist) * d)),
      f && f.seek(m),
      f ? e : Math.round(e)
    );
  },
  ks = /(webkit|moz|length|cssText|inset)/i,
  As = function (e, t, n, r) {
    if (e.parentNode !== t) {
      var i = e.style,
        a,
        o;
      if (t === X) {
        for (a in ((e._stOrig = i.cssText), (o = Oo(e)), o))
          !+a &&
            !ks.test(a) &&
            o[a] &&
            typeof i[a] == `string` &&
            a !== `0` &&
            (i[a] = o[a]);
        ((i.top = n), (i.left = r));
      } else i.cssText = e._stOrig;
      ((J.core.getCache(e).uncache = 1), t.appendChild(e));
    }
  },
  js = function (e, t, n) {
    var r = t,
      i = r;
    return function (t) {
      var a = Math.round(e());
      return (
        a !== r &&
          a !== i &&
          Math.abs(a - r) > 3 &&
          Math.abs(a - i) > 3 &&
          ((t = a), n && n()),
        (i = r),
        (r = Math.round(t)),
        r
      );
    };
  },
  Ms = function (e, t, n) {
    var r = {};
    ((r[t.p] = `+=` + n), J.set(e, r));
  },
  Ns = function (e, t) {
    var n = ea(e, t),
      r = `_scroll` + t.p2,
      i = function t(i, a, o, s, c) {
        var l = t.tween,
          u = a.onComplete,
          d = {};
        o ||= n();
        var f = js(n, o, function () {
          (l.kill(), (t.tween = 0));
        });
        return (
          (c = (s && c) || 0),
          (s ||= i - o),
          l && l.kill(),
          (a[r] = i),
          (a.inherit = !1),
          (a.modifiers = d),
          (d[r] = function () {
            return f(o + s * l.ratio + c * l.ratio * l.ratio);
          }),
          (a.onUpdate = function () {
            (q.cache++, t.tween && vs());
          }),
          (a.onComplete = function () {
            ((t.tween = 0), u && u.call(l));
          }),
          (l = t.tween = J.to(e, a)),
          l
        );
      };
    return (
      (e[r] = n),
      (n.wheelHandler = function () {
        return i.tween && i.tween.kill() && (i.tween = 0);
      }),
      Ro(e, `wheel`, n.wheelHandler),
      Q.isTouch && Ro(e, `touchmove`, n.wheelHandler),
      i
    );
  },
  Q = (function () {
    function e(t, n) {
      (sa ||
        e.register(J) ||
        console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),
        ja(this),
        this.init(t, n));
    }
    var t = e.prototype;
    return (
      (t.init = function (t, n) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Ha)
        ) {
          this.update = this.refresh = this.kill = Ja;
          return;
        }
        t = Ao(ao(t) || so(t) || t.nodeType ? { trigger: t } : t, Ho);
        var r = t,
          i = r.onUpdate,
          a = r.toggleClass,
          o = r.id,
          s = r.onToggle,
          c = r.onRefresh,
          l = r.scrub,
          u = r.trigger,
          d = r.pin,
          f = r.pinSpacing,
          p = r.invalidateOnRefresh,
          m = r.anticipatePin,
          h = r.onScrubComplete,
          g = r.onSnapComplete,
          _ = r.once,
          v = r.snap,
          y = r.pinReparent,
          b = r.pinSpacer,
          x = r.containerAnimation,
          S = r.fastScrollEnd,
          C = r.preventOverlaps,
          w =
            t.horizontal || (t.containerAnimation && t.horizontal !== !1)
              ? Xi
              : Zi,
          T = !l && l !== 0,
          E = Qi(t.scroller || Y),
          D = J.core.getCache(E),
          O = Qa(E),
          k =
            (`pinType` in t
              ? t.pinType
              : Hi(E, `pinType`) || (O && `fixed`)) === `fixed`,
          A = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
          j = T && t.toggleActions.split(` `),
          M = `markers` in t ? t.markers : Ho.markers,
          N = O ? 0 : parseFloat(Oo(E)[`border` + w.p2 + To]) || 0,
          P = this,
          ee =
            t.onRefreshInit &&
            function () {
              return t.onRefreshInit(P);
            },
          te = to(E, O, w),
          ne = no(E, O),
          F = 0,
          re = 0,
          I = 0,
          ie = ea(E, w),
          ae,
          L,
          oe,
          se,
          ce,
          R,
          le,
          ue,
          z,
          de,
          fe,
          pe,
          me,
          he,
          ge,
          _e,
          ve,
          ye,
          B,
          be,
          V,
          xe,
          Se,
          H,
          U,
          W,
          Ce,
          we,
          Te,
          Ee,
          De,
          G,
          Oe,
          ke,
          Ae,
          je,
          Me,
          Ne,
          Pe;
        if (
          ((P._startClamp = P._endClamp = !1),
          (P._dir = w),
          (m *= 45),
          (P.scroller = E),
          (P.scroll = x ? x.time.bind(x) : ie),
          (se = ie()),
          (P.vars = t),
          (n ||= t.animation),
          `refreshPriority` in t &&
            ((Ca = 1), t.refreshPriority === -9999 && (_s = P)),
          (D.tweenScroll = D.tweenScroll || {
            top: Ns(E, Zi),
            left: Ns(E, Xi),
          }),
          (P.tweenTo = ae = D.tweenScroll[w.p]),
          (P.scrubDuration = function (e) {
            ((Oe = so(e) && e),
              Oe
                ? G
                  ? G.duration(e)
                  : (G = J.to(n, {
                      ease: `expo`,
                      totalProgress: `+=0`,
                      inherit: !1,
                      duration: Oe,
                      paused: !0,
                      onComplete: function () {
                        return h && h(P);
                      },
                    }))
                : (G && G.progress(1).kill(), (G = 0)));
          }),
          n &&
            ((n.vars.lazy = !1),
            (n._initted && !P.isReverted) ||
              (n.vars.immediateRender !== !1 &&
                t.immediateRender !== !1 &&
                n.duration() &&
                n.render(0, !0, !0)),
            (P.animation = n.pause()),
            (n.scrollTrigger = P),
            P.scrubDuration(l),
            (Ee = 0),
            (o ||= n.vars.id)),
          v &&
            ((!co(v) || v.push) && (v = { snapTo: v }),
            `scrollBehavior` in X.style &&
              J.set(O ? [X, la] : E, { scrollBehavior: `auto` }),
            q.forEach(function (e) {
              return (
                oo(e) &&
                e.target === (O ? ca.scrollingElement || la : E) &&
                (e.smooth = !1)
              );
            }),
            (oe = oo(v.snapTo)
              ? v.snapTo
              : v.snapTo === `labels`
                ? Po(n)
                : v.snapTo === `labelsDirectional`
                  ? Io(n)
                  : v.directional === !1
                    ? J.utils.snap(v.snapTo)
                    : function (e, t) {
                        return Fo(v.snapTo)(
                          e,
                          za() - re < 500 ? 0 : t.direction,
                        );
                      }),
            (ke = v.duration || { min: 0.1, max: 2 }),
            (ke = co(ke) ? pa(ke.min, ke.max) : pa(ke, ke)),
            (Ae = J.delayedCall(v.delay || Oe / 2 || 0.1, function () {
              var e = ie(),
                t = za() - re < 500,
                r = ae.tween;
              if (
                (t || Math.abs(P.getVelocity()) < 10) &&
                !r &&
                !_a &&
                F !== e
              ) {
                var i = (e - R) / he,
                  a = n && !T ? n.totalProgress() : i,
                  o = t ? 0 : ((a - De) / (za() - ma)) * 1e3 || 0,
                  s = J.utils.clamp(-i, 1 - i, (fo(o / 2) * o) / 0.185),
                  c = i + (v.inertia === !1 ? 0 : s),
                  l,
                  u,
                  d = v,
                  f = d.onStart,
                  p = d.onInterrupt,
                  m = d.onComplete;
                if (
                  ((l = oe(c, P)),
                  so(l) || (l = c),
                  (u = Math.max(0, Math.round(R + l * he))),
                  e <= le && e >= R && u !== e)
                ) {
                  if (r && !r._initted && r.data <= fo(u - e)) return;
                  (v.inertia === !1 && (s = l - i),
                    ae(
                      u,
                      {
                        duration: ke(
                          fo(
                            (Math.max(fo(c - a), fo(l - a)) * 0.185) /
                              o /
                              0.05 || 0,
                          ),
                        ),
                        ease: v.ease || `power3`,
                        data: fo(u - e),
                        onInterrupt: function () {
                          return Ae.restart(!0) && p && uo(P, p);
                        },
                        onComplete: function () {
                          (P.update(),
                            (F = ie()),
                            n &&
                              !T &&
                              (G
                                ? G.resetTo(
                                    `totalProgress`,
                                    l,
                                    n._tTime / n._tDur,
                                  )
                                : n.progress(l)),
                            (Ee = De =
                              n && !T ? n.totalProgress() : P.progress),
                            g && g(P),
                            m && uo(P, m));
                        },
                      },
                      e,
                      s * he,
                      u - e - s * he,
                    ),
                    f && uo(P, f, ae.tween));
                }
              } else P.isActive && F !== e && Ae.restart(!0);
            }).pause())),
          o && (qo[o] = P),
          (u = P.trigger = Qi(u || (d !== !0 && d))),
          (Pe = u && u._gsap && u._gsap.stRevert),
          (Pe &&= Pe(P)),
          (d = d === !0 ? u : Qi(d)),
          ao(a) && (a = { targets: u, className: a }),
          d &&
            (f === !1 ||
              f === wo ||
              (f =
                !f &&
                d.parentNode &&
                d.parentNode.style &&
                Oo(d.parentNode).display === `flex`
                  ? !1
                  : Co),
            (P.pin = d),
            (L = J.core.getCache(d)),
            L.spacer
              ? (ge = L.pinState)
              : (b &&
                  ((b = Qi(b)),
                  b && !b.nodeType && (b = b.current || b.nativeElement),
                  (L.spacerIsNative = !!b),
                  b && (L.spacerState = Ts(b))),
                (L.spacer = ye = b || ca.createElement(`div`)),
                ye.classList.add(`pin-spacer`),
                o && ye.classList.add(`pin-spacer-` + o),
                (L.pinState = ge = Ts(d))),
            t.force3D !== !1 && J.set(d, { force3D: !0 }),
            (P.spacer = ye = L.spacer),
            (Te = Oo(d)),
            (H = Te[f + w.os2]),
            (be = J.getProperty(d)),
            (V = J.quickSetter(d, w.a, Do)),
            Ss(d, ye, Te),
            (ve = Ts(d))),
          M)
        ) {
          ((pe = co(M) ? Ao(M, Vo) : Vo),
            (de = Go(`scroller-start`, o, E, w, pe, 0)),
            (fe = Go(`scroller-end`, o, E, w, pe, 0, de)),
            (B = de[`offset` + w.op.d2]));
          var Fe = Qi(Hi(E, `content`) || E);
          ((ue = this.markerStart = Go(`start`, o, Fe, w, pe, B, 0, x)),
            (z = this.markerEnd = Go(`end`, o, Fe, w, pe, B, 0, x)),
            x && (Ne = J.quickSetter([ue, z], w.a, Do)),
            !k &&
              !(Ri.length && Hi(E, `fixedMarkers`) === !0) &&
              (ko(O ? X : E),
              J.set([de, fe], { force3D: !0 }),
              (W = J.quickSetter(de, w.a, Do)),
              (we = J.quickSetter(fe, w.a, Do))));
        }
        if (x) {
          var Ie = x.vars.onUpdate,
            Le = x.vars.onUpdateParams;
          x.eventCallback(`onUpdate`, function () {
            (P.update(0, 0, 1), Ie && Ie.apply(x, Le || []));
          });
        }
        if (
          ((P.previous = function () {
            return Z[Z.indexOf(P) - 1];
          }),
          (P.next = function () {
            return Z[Z.indexOf(P) + 1];
          }),
          (P.revert = function (e, t) {
            if (!t) return P.kill(!0);
            var r = e !== !1 || !P.enabled,
              i = ga;
            r !== P.isReverted &&
              (r &&
                ((je = Math.max(ie(), P.scroll.rec || 0)),
                (I = P.progress),
                (Me = n && n.progress())),
              ue &&
                [ue, z, de, fe].forEach(function (e) {
                  return (e.style.display = r ? `none` : `block`);
                }),
              r && ((ga = P), P.update(r)),
              d &&
                (!y || !P.isActive) &&
                (r ? xs(d, ye, ge) : Ss(d, ye, Oo(d), U)),
              r || P.update(r),
              (ga = i),
              (P.isReverted = r));
          }),
          (P.refresh = function (r, i, a, o) {
            if (!((ga || !P.enabled) && !i)) {
              if (d && r && Va) {
                Ro(e, `scrollEnd`, ts);
                return;
              }
              (!cs && ee && ee(P),
                (ga = P),
                ae.tween && !a && (ae.tween.kill(), (ae.tween = 0)),
                G && G.pause(),
                p &&
                  n &&
                  (n.revert({ kill: !1 }).invalidate(),
                  n.getChildren
                    ? n.getChildren(!0, !0, !1).forEach(function (e) {
                        return e.vars.immediateRender && e.render(0, !0, !0);
                      })
                    : n.vars.immediateRender && n.render(0, !0, !0)),
                P.isReverted || P.revert(!0, !0),
                (P._subPinOffset = !1));
              var s = te(),
                l = ne(),
                m = x ? x.duration() : ro(E, w),
                h = he <= 0.01 || !he,
                g = 0,
                _ = o || 0,
                v = co(a) ? a.end : t.end,
                b = t.endTrigger || u,
                S = co(a)
                  ? a.start
                  : t.start || (t.start === 0 || !u ? 0 : d ? `0 0` : `0 100%`),
                C = (P.pinnedContainer =
                  t.pinnedContainer && Qi(t.pinnedContainer, P)),
                D = (u && Math.max(0, Z.indexOf(P))) || 0,
                A = D,
                j,
                L,
                oe,
                pe,
                B,
                V,
                H,
                W,
                we,
                Te,
                Ee,
                De,
                Oe;
              for (
                M &&
                co(a) &&
                ((De = J.getProperty(de, w.p)), (Oe = J.getProperty(fe, w.p)));
                A-- > 0;
              )
                ((V = Z[A]),
                  V.end || V.refresh(0, 1) || (ga = P),
                  (H = V.pin),
                  H &&
                    (H === u || H === d || H === C) &&
                    !V.isReverted &&
                    ((Te ||= []), Te.unshift(V), V.revert(!0, !0)),
                  V !== Z[A] && (D--, A--));
              for (
                oo(S) && (S = S(P)),
                  S = Ua(S, `start`, P),
                  R =
                    Os(
                      S,
                      u,
                      s,
                      w,
                      ie(),
                      ue,
                      de,
                      P,
                      l,
                      N,
                      k,
                      m,
                      x,
                      P._startClamp && `_startClamp`,
                    ) || (d ? -0.001 : 0),
                  oo(v) && (v = v(P)),
                  ao(v) &&
                    !v.indexOf(`+=`) &&
                    (~v.indexOf(` `)
                      ? (v = (ao(S) ? S.split(` `)[0] : ``) + v)
                      : ((g = Wo(v.substr(2), s)),
                        (v = ao(S)
                          ? S
                          : (x
                              ? J.utils.mapRange(
                                  0,
                                  x.duration(),
                                  x.scrollTrigger.start,
                                  x.scrollTrigger.end,
                                  R,
                                )
                              : R) + g),
                        (b = u))),
                  v = Ua(v, `end`, P),
                  le =
                    Math.max(
                      R,
                      Os(
                        v || (b ? `100% 0` : m),
                        b,
                        s,
                        w,
                        ie() + g,
                        z,
                        fe,
                        P,
                        l,
                        N,
                        k,
                        m,
                        x,
                        P._endClamp && `_endClamp`,
                      ),
                    ) || -0.001,
                  g = 0,
                  A = D;
                A--;
              )
                ((V = Z[A] || {}),
                  (H = V.pin),
                  H &&
                    V.start - V._pinPush <= R &&
                    !x &&
                    V.end > 0 &&
                    ((j =
                      V.end - (P._startClamp ? Math.max(0, V.start) : V.start)),
                    ((H === u && V.start - V._pinPush < R) || H === C) &&
                      isNaN(S) &&
                      (g += j * (1 - V.progress)),
                    H === d && (_ += j)));
              if (
                ((R += g),
                (le += g),
                P._startClamp && (P._startClamp += g),
                P._endClamp &&
                  !cs &&
                  ((P._endClamp = le || -0.001), (le = Math.min(le, ro(E, w)))),
                (he = le - R || ((R -= 0.01) && 0.001)),
                h && (I = J.utils.clamp(0, 1, J.utils.normalize(R, le, je))),
                (P._pinPush = _),
                ue &&
                  g &&
                  ((j = {}),
                  (j[w.a] = `+=` + g),
                  C && (j[w.p] = `-=` + ie()),
                  J.set([ue, z], j)),
                d && !(Ia && P.end >= ro(E, w)))
              )
                ((j = Oo(d)),
                  (pe = w === Zi),
                  (oe = ie()),
                  (xe = parseFloat(be(w.a)) + _),
                  !m &&
                    le > 1 &&
                    ((Ee = (O ? ca.scrollingElement || la : E).style),
                    (Ee = {
                      style: Ee,
                      value: Ee[`overflow` + w.a.toUpperCase()],
                    }),
                    O &&
                      Oo(X)[`overflow` + w.a.toUpperCase()] !== `scroll` &&
                      (Ee.style[`overflow` + w.a.toUpperCase()] = `scroll`)),
                  Ss(d, ye, j),
                  (ve = Ts(d)),
                  (L = jo(d, !0)),
                  (W = k && ea(E, pe ? Xi : Zi)()),
                  f
                    ? ((U = [f + w.os2, he + _ + Do]),
                      (U.t = ye),
                      (A = f === Co ? Mo(d, w) + he + _ : 0),
                      A &&
                        (U.push(w.d, A + Do),
                        ye.style.flexBasis !== `auto` &&
                          (ye.style.flexBasis = A + Do)),
                      ws(U),
                      C &&
                        Z.forEach(function (e) {
                          e.pin === C &&
                            e.vars.pinSpacing !== !1 &&
                            (e._subPinOffset = !0);
                        }),
                      k && ie(je))
                    : ((A = Mo(d, w)),
                      A &&
                        ye.style.flexBasis !== `auto` &&
                        (ye.style.flexBasis = A + Do)),
                  k &&
                    ((B = {
                      top: L.top + (pe ? oe - R : W) + Do,
                      left: L.left + (pe ? W : oe - R) + Do,
                      boxSizing: `border-box`,
                      position: `fixed`,
                    }),
                    (B[_o] = B[`max` + To] = Math.ceil(L.width) + Do),
                    (B[vo] = B[`max` + Eo] = Math.ceil(L.height) + Do),
                    (B[wo] =
                      B[wo + xo] =
                      B[wo + yo] =
                      B[wo + So] =
                      B[wo + bo] =
                        `0`),
                    (B[Co] = j[Co]),
                    (B[Co + xo] = j[Co + xo]),
                    (B[Co + yo] = j[Co + yo]),
                    (B[Co + So] = j[Co + So]),
                    (B[Co + bo] = j[Co + bo]),
                    (_e = Es(ge, B, y)),
                    cs && ie(0)),
                  n
                    ? ((we = n._initted),
                      wa(1),
                      n.render(n.duration(), !0, !0),
                      (Se = be(w.a) - xe + he + _),
                      (Ce = Math.abs(he - Se) > 1),
                      k && Ce && _e.splice(_e.length - 2, 2),
                      n.render(0, !0, !0),
                      we || n.invalidate(!0),
                      n.parent || n.totalTime(n.totalTime()),
                      wa(0))
                    : (Se = he),
                  Ee &&
                    (Ee.value
                      ? (Ee.style[`overflow` + w.a.toUpperCase()] = Ee.value)
                      : Ee.style.removeProperty(`overflow-` + w.a)));
              else if (u && ie() && !x)
                for (L = u.parentNode; L && L !== X;)
                  (L._pinOffset && ((R -= L._pinOffset), (le -= L._pinOffset)),
                    (L = L.parentNode));
              (Te &&
                Te.forEach(function (e) {
                  return e.revert(!1, !0);
                }),
                (P.start = R),
                (P.end = le),
                (se = ce = cs ? je : ie()),
                !x && !cs && (se < je && ie(je), (P.scroll.rec = 0)),
                P.revert(!1, !0),
                (re = za()),
                Ae && ((F = -1), Ae.restart(!0)),
                (ga = 0),
                n &&
                  T &&
                  (n._initted || Me) &&
                  n.progress() !== Me &&
                  n.progress(Me || 0, !0).render(n.time(), !0, !0),
                (h || I !== P.progress || x || p || (n && !n._initted)) &&
                  (n &&
                    !T &&
                    (n._initted || I || n.vars.immediateRender !== !1) &&
                    n.totalProgress(
                      x && R < -0.001 && !I ? J.utils.normalize(R, le, 0) : I,
                      !0,
                    ),
                  (P.progress = h || (se - R) / he === I ? 0 : I)),
                d && f && (ye._pinOffset = Math.round(P.progress * Se)),
                G && G.invalidate(),
                isNaN(De) ||
                  ((De -= J.getProperty(de, w.p)),
                  (Oe -= J.getProperty(fe, w.p)),
                  Ms(de, w, De),
                  Ms(ue, w, De - (o || 0)),
                  Ms(fe, w, Oe),
                  Ms(z, w, Oe - (o || 0))),
                h && !cs && P.update(),
                c && !cs && !me && ((me = !0), c(P), (me = !1)));
            }
          }),
          (P.getVelocity = function () {
            return ((ie() - ce) / (za() - ma)) * 1e3 || 0;
          }),
          (P.endAnimation = function () {
            (lo(P.callbackAnimation),
              n &&
                (G
                  ? G.progress(1)
                  : n.paused()
                    ? T || lo(n, P.direction < 0, 1)
                    : lo(n, n.reversed())));
          }),
          (P.labelToScroll = function (e) {
            return (
              (n &&
                n.labels &&
                (R || P.refresh() || R) + (n.labels[e] / n.duration()) * he) ||
              0
            );
          }),
          (P.getTrailing = function (e) {
            var t = Z.indexOf(P),
              n = P.direction > 0 ? Z.slice(0, t).reverse() : Z.slice(t + 1);
            return (
              ao(e)
                ? n.filter(function (t) {
                    return t.vars.preventOverlaps === e;
                  })
                : n
            ).filter(function (e) {
              return P.direction > 0 ? e.end <= R : e.start >= le;
            });
          }),
          (P.update = function (e, t, r) {
            if (!(x && !r && !e)) {
              var o = cs === !0 ? je : P.scroll(),
                c = e ? 0 : (o - R) / he,
                u = c < 0 ? 0 : c > 1 ? 1 : c || 0,
                p = P.progress,
                h,
                g,
                b,
                D,
                O,
                M,
                N,
                ee;
              if (
                (t &&
                  ((ce = se),
                  (se = x ? ie() : o),
                  v && ((De = Ee), (Ee = n && !T ? n.totalProgress() : u))),
                m &&
                  d &&
                  !ga &&
                  !Ra &&
                  Va &&
                  (!u && R < o + ((o - ce) / (za() - ma)) * m
                    ? (u = 1e-4)
                    : u === 1 &&
                      le > o + ((o - ce) / (za() - ma)) * m &&
                      (u = 0.9999)),
                u !== p && P.enabled)
              ) {
                if (
                  ((h = P.isActive = !!u && u < 1),
                  (g = !!p && p < 1),
                  (M = h !== g),
                  (O = M || !!u != !!p),
                  (P.direction = u > p ? 1 : -1),
                  (P.progress = u),
                  O &&
                    !ga &&
                    ((b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3),
                    T &&
                      ((D = (!M && j[b + 1] !== `none` && j[b + 1]) || j[b]),
                      (ee =
                        n && (D === `complete` || D === `reset` || D in n)))),
                  C &&
                    (M || ee) &&
                    (ee || l || !n) &&
                    (oo(C)
                      ? C(P)
                      : P.getTrailing(C).forEach(function (e) {
                          return e.endAnimation();
                        })),
                  T ||
                    (G && !ga && !Ra
                      ? (G._dp._time - G._start !== G._time &&
                          G.render(G._dp._time - G._start),
                        G.resetTo
                          ? G.resetTo(`totalProgress`, u, n._tTime / n._tDur)
                          : ((G.vars.totalProgress = u),
                            G.invalidate().restart()))
                      : n && n.totalProgress(u, !!(ga && (re || e)))),
                  d)
                ) {
                  if ((e && f && (ye.style[f + w.os2] = H), !k))
                    V(Ya(xe + Se * u));
                  else if (O) {
                    if (
                      ((N = !e && u > p && le + 1 > o && o + 1 >= ro(E, w)), y)
                    )
                      if (!e && (h || N)) {
                        var te = jo(d, !0),
                          ne = o - R;
                        As(
                          d,
                          X,
                          te.top + (w === Zi ? ne : 0) + Do,
                          te.left + (w === Zi ? 0 : ne) + Do,
                        );
                      } else As(d, ye);
                    (ws(h || N ? _e : ve),
                      (Ce && u < 1 && h) || V(xe + (u === 1 && !N ? Se : 0)));
                  }
                }
                (v && !ae.tween && !ga && !Ra && Ae.restart(!0),
                  a &&
                    (M || (_ && u && (u < 1 || !La))) &&
                    fa(a.targets).forEach(function (e) {
                      return e.classList[h || _ ? `add` : `remove`](
                        a.className,
                      );
                    }),
                  i && !T && !e && i(P),
                  O && !ga
                    ? (T &&
                        (ee &&
                          (D === `complete`
                            ? n.pause().totalProgress(1)
                            : D === `reset`
                              ? n.restart(!0).pause()
                              : D === `restart`
                                ? n.restart(!0)
                                : n[D]()),
                        i && i(P)),
                      (M || !La) &&
                        (s && M && uo(P, s),
                        A[b] && uo(P, A[b]),
                        _ && (u === 1 ? P.kill(!1, 1) : (A[b] = 0)),
                        M || ((b = u === 1 ? 1 : 3), A[b] && uo(P, A[b]))),
                      S &&
                        !h &&
                        Math.abs(P.getVelocity()) > (so(S) ? S : 2500) &&
                        (lo(P.callbackAnimation),
                        G ? G.progress(1) : lo(n, D === `reverse` ? 1 : !u, 1)))
                    : T && i && !ga && i(P));
              }
              if (we) {
                var F = x ? (o / x.duration()) * (x._caScrollDist || 0) : o;
                (W(F + +!!de._isFlipped), we(F));
              }
              Ne && Ne((-o / x.duration()) * (x._caScrollDist || 0));
            }
          }),
          (P.enable = function (t, n) {
            P.enabled ||
              ((P.enabled = !0),
              Ro(E, `resize`, Qo),
              O || Ro(E, `scroll`, Xo),
              ee && Ro(e, `refreshInit`, ee),
              t !== !1 && ((P.progress = I = 0), (se = ce = F = ie())),
              n !== !1 && P.refresh());
          }),
          (P.getTween = function (e) {
            return e && ae ? ae.tween : G;
          }),
          (P.setPositions = function (e, t, n, r) {
            if (x) {
              var i = x.scrollTrigger,
                a = x.duration(),
                o = i.end - i.start;
              ((e = i.start + (o * e) / a), (t = i.start + (o * t) / a));
            }
            (P.refresh(
              !1,
              !1,
              {
                start: Wa(e, n && !!P._startClamp),
                end: Wa(t, n && !!P._endClamp),
              },
              r,
            ),
              P.update());
          }),
          (P.adjustPinSpacing = function (e) {
            if (U && e) {
              var t = U.indexOf(w.d) + 1;
              ((U[t] = parseFloat(U[t]) + e + Do),
                (U[1] = parseFloat(U[1]) + e + Do),
                ws(U));
            }
          }),
          (P.disable = function (t, n) {
            if (
              (t !== !1 && P.revert(!0, !0),
              P.enabled &&
                ((P.enabled = P.isActive = !1),
                n || (G && G.pause()),
                (je = 0),
                L && (L.uncache = 1),
                ee && zo(e, `refreshInit`, ee),
                Ae &&
                  (Ae.pause(), ae.tween && ae.tween.kill() && (ae.tween = 0)),
                !O))
            ) {
              for (var r = Z.length; r--;)
                if (Z[r].scroller === E && Z[r] !== P) return;
              (zo(E, `resize`, Qo), O || zo(E, `scroll`, Xo));
            }
          }),
          (P.kill = function (e, r) {
            (P.disable(e, r), G && !r && G.kill(), o && delete qo[o]);
            var i = Z.indexOf(P);
            (i >= 0 && Z.splice(i, 1),
              i === ya && gs > 0 && ya--,
              (i = 0),
              Z.forEach(function (e) {
                return e.scroller === P.scroller && (i = 1);
              }),
              i || cs || (P.scroll.rec = 0),
              n &&
                ((n.scrollTrigger = null),
                e && n.revert({ kill: !1 }),
                r || n.kill()),
              ue &&
                [ue, z, de, fe].forEach(function (e) {
                  return e.parentNode && e.parentNode.removeChild(e);
                }),
              _s === P && (_s = 0),
              d &&
                (L && (L.uncache = 1),
                (i = 0),
                Z.forEach(function (e) {
                  return e.pin === d && i++;
                }),
                i || (L.spacer = 0)),
              t.onKill && t.onKill(P));
          }),
          Z.push(P),
          P.enable(!1, !1),
          Pe && Pe(P),
          n && n.add && !he)
        ) {
          var Re = P.update;
          ((P.update = function () {
            ((P.update = Re), q.cache++, R || le || P.refresh());
          }),
            J.delayedCall(0.01, P.update),
            (he = 0.01),
            (R = le = 0));
        } else P.refresh();
        d && ds();
      }),
      (e.register = function (t) {
        return (
          (sa ||= ((J = t || Za()), Xa() && window.document && e.enable(), Ha)),
          sa
        );
      }),
      (e.defaults = function (e) {
        if (e) for (var t in e) Ho[t] = e[t];
        return Ho;
      }),
      (e.disable = function (e, t) {
        ((Ha = 0),
          Z.forEach(function (n) {
            return n[t ? `kill` : `disable`](e);
          }),
          zo(Y, `wheel`, Xo),
          zo(ca, `scroll`, Xo),
          clearInterval(ha),
          zo(ca, `touchcancel`, Ja),
          zo(X, `touchstart`, Ja),
          Lo(zo, ca, `pointerdown,touchstart,mousedown`, Ka),
          Lo(zo, ca, `pointerup,touchend,mouseup`, qa),
          da.kill(),
          io(zo));
        for (var n = 0; n < q.length; n += 3)
          (Bo(zo, q[n], q[n + 1]), Bo(zo, q[n], q[n + 2]));
      }),
      (e.enable = function () {
        if (
          ((Y = window),
          (ca = document),
          (la = ca.documentElement),
          (X = ca.body),
          J)
        )
          if (
            ((fa = J.utils.toArray),
            (pa = J.utils.clamp),
            (ja = J.core.context || Ja),
            (wa = J.core.suppressOverwrites || Ja),
            (Ma = Y.history.scrollRestoration || `auto`),
            (hs = Y.pageYOffset || 0),
            J.core.globals(`ScrollTrigger`, e),
            X)
          ) {
            ((Ha = 1),
              (Na = document.createElement(`div`)),
              (Na.style.height = `100vh`),
              (Na.style.position = `absolute`),
              fs(),
              Ga(),
              oa.register(J),
              (e.isTouch = oa.isTouch),
              (Aa =
                oa.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Da = oa.isTouch === 1),
              Ro(Y, `wheel`, Xo),
              (ua = [Y, ca, la, X]),
              J.matchMedia
                ? ((e.matchMedia = function (e) {
                    var t = J.matchMedia(),
                      n;
                    for (n in e) t.add(n, e[n]);
                    return t;
                  }),
                  J.addEventListener(`matchMediaInit`, function () {
                    (as(), os());
                  }),
                  J.addEventListener(`matchMediaRevert`, function () {
                    return is();
                  }),
                  J.addEventListener(`matchMedia`, function () {
                    (ms(0, 1), ns(`matchMedia`));
                  }),
                  J.matchMedia().add(`(orientation: portrait)`, function () {
                    return (Zo(), Zo);
                  }))
                : console.warn(`Requires GSAP 3.11.0 or later`),
              Zo(),
              Ro(ca, `scroll`, Xo));
            var t = X.hasAttribute(`style`),
              n = X.style,
              r = n.borderTopStyle,
              i = J.core.Animation.prototype,
              a,
              o;
            for (
              i.revert ||
                Object.defineProperty(i, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                n.borderTopStyle = `solid`,
                a = jo(X),
                Zi.m = Math.round(a.top + Zi.sc()) || 0,
                Xi.m = Math.round(a.left + Xi.sc()) || 0,
                r
                  ? (n.borderTopStyle = r)
                  : n.removeProperty(`border-top-style`),
                t || (X.setAttribute(`style`, ``), X.removeAttribute(`style`)),
                ha = setInterval(Yo, 250),
                J.delayedCall(0.5, function () {
                  return (Ra = 0);
                }),
                Ro(ca, `touchcancel`, Ja),
                Ro(X, `touchstart`, Ja),
                Lo(Ro, ca, `pointerdown,touchstart,mousedown`, Ka),
                Lo(Ro, ca, `pointerup,touchend,mouseup`, qa),
                va = J.utils.checkPrefix(`transform`),
                bs.push(va),
                sa = za(),
                da = J.delayedCall(0.2, ms).pause(),
                Sa = [
                  ca,
                  `visibilitychange`,
                  function () {
                    var e = Y.innerWidth,
                      t = Y.innerHeight;
                    ca.hidden
                      ? ((ba = e), (xa = t))
                      : (ba !== e || xa !== t) && Qo();
                  },
                  ca,
                  `DOMContentLoaded`,
                  ms,
                  Y,
                  `load`,
                  ms,
                  Y,
                  `resize`,
                  Qo,
                ],
                io(Ro),
                Z.forEach(function (e) {
                  return e.enable(0, 1);
                }),
                o = 0;
              o < q.length;
              o += 3
            )
              (Bo(zo, q[o], q[o + 1]), Bo(zo, q[o], q[o + 2]));
          } else
            ca &&
              ca.addEventListener(`DOMContentLoaded`, function t() {
                (e.enable(), ca.removeEventListener(`DOMContentLoaded`, t));
              });
      }),
      (e.config = function (t) {
        `limitCallbacks` in t && (La = !!t.limitCallbacks);
        var n = t.syncInterval;
        ((n && clearInterval(ha)) || ((ha = n) && setInterval(Yo, n)),
          `ignoreMobileResize` in t &&
            (Da = e.isTouch === 1 && t.ignoreMobileResize),
          `autoRefreshEvents` in t &&
            (io(zo) || io(Ro, t.autoRefreshEvents || `none`),
            (Ta = (t.autoRefreshEvents + ``).indexOf(`resize`) === -1)));
      }),
      (e.scrollerProxy = function (e, t) {
        var n = Qi(e),
          r = q.indexOf(n),
          i = Qa(n);
        (~r && q.splice(r, i ? 6 : 2),
          t && (i ? Ri.unshift(Y, t, X, t, la, t) : Ri.unshift(n, t)));
      }),
      (e.clearMatchMedia = function (e) {
        Z.forEach(function (t) {
          return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
        });
      }),
      (e.isInViewport = function (e, t, n) {
        var r = (ao(e) ? Qi(e) : e).getBoundingClientRect(),
          i = r[n ? _o : vo] * t || 0;
        return n
          ? r.right - i > 0 && r.left + i < Y.innerWidth
          : r.bottom - i > 0 && r.top + i < Y.innerHeight;
      }),
      (e.positionInViewport = function (e, t, n) {
        ao(e) && (e = Qi(e));
        var r = e.getBoundingClientRect(),
          i = r[n ? _o : vo],
          a =
            t == null
              ? i / 2
              : t in Uo
                ? Uo[t] * i
                : ~t.indexOf(`%`)
                  ? (parseFloat(t) * i) / 100
                  : parseFloat(t) || 0;
        return n ? (r.left + a) / Y.innerWidth : (r.top + a) / Y.innerHeight;
      }),
      (e.killAll = function (e) {
        if (
          (Z.slice(0).forEach(function (e) {
            return e.vars.id !== `ScrollSmoother` && e.kill();
          }),
          e !== !0)
        ) {
          var t = $o.killAll || [];
          (($o = {}),
            t.forEach(function (e) {
              return e();
            }));
        }
      }),
      e
    );
  })();
((Q.version = `3.15.0`),
  (Q.saveStyles = function (e) {
    return e
      ? fa(e).forEach(function (e) {
          if (e && e.style) {
            var t = rs.indexOf(e);
            (t >= 0 && rs.splice(t, 5),
              rs.push(
                e,
                e.style.cssText,
                e.getBBox && e.getAttribute(`transform`),
                J.core.getCache(e),
                ja(),
              ));
          }
        })
      : rs;
  }),
  (Q.revert = function (e, t) {
    return os(!e, t);
  }),
  (Q.create = function (e, t) {
    return new Q(e, t);
  }),
  (Q.refresh = function (e) {
    return e ? Qo(!0) : (sa || Q.register()) && ms(!0);
  }),
  (Q.update = function (e) {
    return ++q.cache && vs(e === !0 ? 2 : 0);
  }),
  (Q.clearScrollMemory = ss),
  (Q.maxScroll = function (e, t) {
    return ro(e, t ? Xi : Zi);
  }),
  (Q.getScrollFunc = function (e, t) {
    return ea(Qi(e), t ? Xi : Zi);
  }),
  (Q.getById = function (e) {
    return qo[e];
  }),
  (Q.getAll = function () {
    return Z.filter(function (e) {
      return e.vars.id !== `ScrollSmoother`;
    });
  }),
  (Q.isScrolling = function () {
    return !!Va;
  }),
  (Q.snapDirectional = Fo),
  (Q.addEventListener = function (e, t) {
    var n = $o[e] || ($o[e] = []);
    ~n.indexOf(t) || n.push(t);
  }),
  (Q.removeEventListener = function (e, t) {
    var n = $o[e],
      r = n && n.indexOf(t);
    r >= 0 && n.splice(r, 1);
  }),
  (Q.batch = function (e, t) {
    var n = [],
      r = {},
      i = t.interval || 0.016,
      a = t.batchMax || 1e9,
      o = function (e, t) {
        var n = [],
          r = [],
          o = J.delayedCall(i, function () {
            (t(n, r), (n = []), (r = []));
          }).pause();
        return function (e) {
          (n.length || o.restart(!0),
            n.push(e.trigger),
            r.push(e),
            a <= n.length && o.progress(1));
        };
      },
      s;
    for (s in t)
      r[s] =
        s.substr(0, 2) === `on` && oo(t[s]) && s !== `onRefreshInit`
          ? o(s, t[s])
          : t[s];
    return (
      oo(a) &&
        ((a = a()),
        Ro(Q, `refresh`, function () {
          return (a = t.batchMax());
        })),
      fa(e).forEach(function (e) {
        var t = {};
        for (s in r) t[s] = r[s];
        ((t.trigger = e), n.push(Q.create(t)));
      }),
      n
    );
  }));
var Ps = function (e, t, n, r) {
    return (
      t > r ? e(r) : t < 0 && e(0),
      n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
    );
  },
  Fs = function e(t, n) {
    (n === !0
      ? t.style.removeProperty(`touch-action`)
      : (t.style.touchAction =
          n === !0
            ? `auto`
            : n
              ? `pan-` + n + (oa.isTouch ? ` pinch-zoom` : ``)
              : `none`),
      t === la && e(X, n));
  },
  Is = { auto: 1, scroll: 1 },
  Ls = function (e) {
    var t = e.event,
      n = e.target,
      r = e.axis,
      i = (t.changedTouches ? t.changedTouches[0] : t).target,
      a = i._gsap || J.core.getCache(i),
      o = za(),
      s;
    if (!a._isScrollT || o - a._isScrollT > 2e3) {
      for (
        ;
        i &&
        i !== X &&
        ((i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth) ||
          !(Is[(s = Oo(i)).overflowY] || Is[s.overflowX]));
      )
        i = i.parentNode;
      ((a._isScroll =
        i &&
        i !== n &&
        !Qa(i) &&
        (Is[(s = Oo(i)).overflowY] || Is[s.overflowX])),
        (a._isScrollT = o));
    }
    (a._isScroll || r === `x`) && (t.stopPropagation(), (t._gsapAllow = !0));
  },
  Rs = function (e, t, n, r) {
    return oa.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (r &&= Ls),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return n && Ro(ca, oa.eventTypes[0], Vs, !1, !0);
      },
      onDisable: function () {
        return zo(ca, oa.eventTypes[0], Vs, !0);
      },
    });
  },
  zs = /(input|label|select|textarea)/i,
  Bs,
  Vs = function (e) {
    var t = zs.test(e.target.tagName);
    (t || Bs) && ((e._gsapAllow = !0), (Bs = t));
  },
  Hs = function (e) {
    (co(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      (e.type ||= `wheel,touch`),
      (e.debounce = !!e.debounce),
      (e.id = e.id || `normalizer`));
    var t = e,
      n = t.normalizeScrollX,
      r = t.momentum,
      i = t.allowNestedScroll,
      a = t.onRelease,
      o,
      s,
      c = Qi(e.target) || la,
      l = J.core.globals().ScrollSmoother,
      u = l && l.get(),
      d =
        Aa &&
        ((e.content && Qi(e.content)) ||
          (u && e.content !== !1 && !u.smooth() && u.content())),
      f = ea(c, Zi),
      p = ea(c, Xi),
      m = 1,
      h =
        (oa.isTouch && Y.visualViewport
          ? Y.visualViewport.scale * Y.visualViewport.width
          : Y.outerWidth) / Y.innerWidth,
      g = 0,
      _ = oo(r)
        ? function () {
            return r(o);
          }
        : function () {
            return r || 2.8;
          },
      v,
      y,
      b = Rs(c, e.type, !0, i),
      x = function () {
        return (y = !1);
      },
      S = Ja,
      C = Ja,
      w = function () {
        ((s = ro(c, Zi)),
          (C = pa(+!!Aa, s)),
          n && (S = pa(0, ro(c, Xi))),
          (v = ls));
      },
      T = function () {
        ((d._gsap.y = Ya(parseFloat(d._gsap.y) + f.offset) + `px`),
          (d.style.transform =
            `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ` +
            parseFloat(d._gsap.y) +
            `, 0, 1)`),
          (f.offset = f.cacheID = 0));
      },
      E = function () {
        if (y) {
          requestAnimationFrame(x);
          var e = Ya(o.deltaY / 2),
            t = C(f.v - e);
          if (d && t !== f.v + f.offset) {
            f.offset = t - f.v;
            var n = Ya((parseFloat(d && d._gsap.y) || 0) - f.offset);
            ((d.style.transform =
              `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ` +
              n +
              `, 0, 1)`),
              (d._gsap.y = n + `px`),
              (f.cacheID = q.cache),
              vs());
          }
          return !0;
        }
        (f.offset && T(), (y = !0));
      },
      D,
      O,
      k,
      A,
      j = function () {
        (w(),
          D.isActive() &&
            D.vars.scrollY > s &&
            (f() > s ? D.progress(1) && f(s) : D.resetTo(`scrollY`, s)));
      };
    return (
      d && J.set(d, { y: `+=0` }),
      (e.ignoreCheck = function (e) {
        return (
          (Aa && e.type === `touchmove` && E(e)) ||
          (m > 1.05 && e.type !== `touchstart`) ||
          o.isGesturing ||
          (e.touches && e.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        y = !1;
        var e = m;
        ((m = Ya(((Y.visualViewport && Y.visualViewport.scale) || 1) / h)),
          D.pause(),
          e !== m && Fs(c, m > 1.01 || (!n && `x`)),
          (O = p()),
          (k = f()),
          w(),
          (v = ls));
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if ((f.offset && T(), !t)) A.restart(!0);
          else {
            q.cache++;
            var r = _(),
              i,
              o;
            (n &&
              ((i = p()),
              (o = i + (r * 0.05 * -e.velocityX) / 0.227),
              (r *= Ps(p, i, o, ro(c, Xi))),
              (D.vars.scrollX = S(o))),
              (i = f()),
              (o = i + (r * 0.05 * -e.velocityY) / 0.227),
              (r *= Ps(f, i, o, ro(c, Zi))),
              (D.vars.scrollY = C(o)),
              D.invalidate().duration(r).play(0.01),
              ((Aa && D.vars.scrollY >= s) || i >= s - 1) &&
                J.to({}, { onUpdate: j, duration: r }));
          }
          a && a(e);
        }),
      (e.onWheel = function () {
        (D._ts && D.pause(), za() - g > 1e3 && ((v = 0), (g = za())));
      }),
      (e.onChange = function (e, t, r, i, a) {
        if (
          (ls !== v && w(),
          t && n && p(S(i[2] === t ? O + (e.startX - e.x) : p() + t - i[1])),
          r)
        ) {
          f.offset && T();
          var o = a[2] === r,
            s = o ? k + e.startY - e.y : f() + r - a[1],
            c = C(s);
          (o && s !== c && (k += c - s), f(c));
        }
        (r || t) && vs();
      }),
      (e.onEnable = function () {
        (Fs(c, !n && `x`),
          Q.addEventListener(`refresh`, j),
          Ro(Y, `resize`, j),
          (f.smooth &&=
            ((f.target.style.scrollBehavior = `auto`), (p.smooth = !1))),
          b.enable());
      }),
      (e.onDisable = function () {
        (Fs(c, !0),
          zo(Y, `resize`, j),
          Q.removeEventListener(`refresh`, j),
          b.kill());
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (o = new oa(e)),
      (o.iOS = Aa),
      Aa && !f() && f(1),
      Aa && J.ticker.add(Ja),
      (A = o._dc),
      (D = J.to(o, {
        ease: `power4`,
        paused: !0,
        inherit: !1,
        scrollX: n ? `+=0.1` : `+=0`,
        scrollY: `+=0.1`,
        modifiers: {
          scrollY: js(f, f(), function () {
            return D.pause();
          }),
        },
        onUpdate: vs,
        onComplete: A.vars.onComplete,
      })),
      o
    );
  };
((Q.sort = function (e) {
  if (oo(e)) return Z.sort(e);
  var t = Y.pageYOffset || 0;
  return (
    Q.getAll().forEach(function (e) {
      return (e._sortY = e.trigger
        ? t + e.trigger.getBoundingClientRect().top
        : e.start + Y.innerHeight);
    }),
    Z.sort(
      e ||
        function (e, t) {
          return (
            (e.vars.refreshPriority || 0) * -1e6 +
            (e.vars.containerAnimation ? 1e6 : e._sortY) -
            ((t.vars.containerAnimation ? 1e6 : t._sortY) +
              (t.vars.refreshPriority || 0) * -1e6)
          );
        },
    )
  );
}),
  (Q.observe = function (e) {
    return new oa(e);
  }),
  (Q.normalizeScroll = function (e) {
    if (e === void 0) return Ea;
    if (e === !0 && Ea) return Ea.enable();
    if (e === !1) {
      (Ea && Ea.kill(), (Ea = e));
      return;
    }
    var t = e instanceof oa ? e : Hs(e);
    return (
      Ea && Ea.target === t.target && Ea.kill(),
      Qa(t.target) && (Ea = t),
      t
    );
  }),
  (Q.core = {
    _getVelocityProp: ta,
    _inputObserver: Rs,
    _scrollers: q,
    _proxies: Ri,
    bridge: {
      ss: function () {
        (Va || ns(`scrollStart`), (Va = za()));
      },
      ref: function () {
        return ga;
      },
    },
  }),
  Za() && J.registerPlugin(Q));
var $ = n();
yi.registerPlugin(Q);
function Us() {
  let [e, t] = (0, r.useState)(!1),
    [n, i] = (0, r.useState)(`hero`),
    a = (0, r.useRef)(null),
    o = (0, r.useRef)(null),
    s = (0, r.useRef)(null),
    c = (0, r.useRef)(null),
    l = (0, r.useRef)(null),
    u = (0, r.useRef)(null),
    d = (0, r.useRef)(null),
    f = (0, r.useRef)(null),
    p = (0, r.useRef)(null),
    [m, h] = (0, r.useState)(!1),
    [g, _] = (0, r.useState)(!1);
  return (
    (0, r.useEffect)(() => {
      let e = () => {
        let e = [`hero`, `solution`, `who-its-for`, `preview`, `footer`],
          t = window.scrollY + 200;
        for (let n of e) {
          let e = document.getElementById(n);
          if (e) {
            let r = e.offsetTop,
              a = e.offsetHeight;
            if (t >= r && t < r + a) {
              i(n);
              break;
            }
          }
        }
      };
      return (
        window.addEventListener(`scroll`, e),
        () => window.removeEventListener(`scroll`, e)
      );
    }, []),
    (0, r.useEffect)(() => {
      let e = window.matchMedia(`(prefers-reduced-motion: reduce)`);
      _(e.matches);
      let t = (e) => {
        _(e.matches);
      };
      e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
      let n = new IntersectionObserver(
        (e) => {
          let [t] = e;
          t.isIntersecting && (h(!0), n.disconnect());
        },
        { rootMargin: `200px` },
      );
      return (
        p.current && n.observe(p.current),
        () => {
          (n.disconnect(),
            e.removeEventListener
              ? e.removeEventListener(`change`, t)
              : e.removeListener(t));
        }
      );
    }, []),
    (0, r.useEffect)(() => {
      let e = yi.context(() => {
        (yi.set(s.current, { y: 100 }),
          yi.set(l.current, { opacity: 0, y: 80 }),
          yi.set(u.current, { opacity: 0, y: 80 }),
          yi.set(c.current, { opacity: 0, scale: 0.8 }),
          yi
            .timeline({
              scrollTrigger: {
                trigger: a.current,
                start: `top top`,
                end: `+=1000`,
                scrub: 1,
                pin: !0,
              },
            })
            .to(o.current, { opacity: 0, y: -60, scale: 0.95, duration: 1 })
            .to(s.current, { y: -120, scale: 1.02, duration: 1.5 }, `+=0.1`)
            .to(l.current, { opacity: 1, y: -20, duration: 0.8 }, `+=0.1`)
            .to(u.current, { opacity: 1, y: -20, duration: 0.8 }, `-=0.4`)
            .to(c.current, { opacity: 1, scale: 1.1, duration: 1 }, `+=0.2`));
        let e = d.current;
        e &&
          (yi.set(e, { "--radius": 220, "--rotation": 0 }),
          yi
            .timeline({
              scrollTrigger: {
                trigger: `#who-its-for`,
                start: `top bottom`,
                end: `bottom top`,
                scrub: 0.5,
              },
            })
            .to(e, { "--radius": 100, ease: `power1.out` }),
          yi.to(e, {
            "--rotation": 360,
            duration: 40,
            ease: `none`,
            repeat: -1,
          }));
        let t = yi.utils.toArray(`.stack-card`);
        t.forEach((e, n) => {
          n !== t.length - 1 &&
            yi.to(e, {
              scale: 0.92 - n * 0.02,
              opacity: 0.6,
              scrollTrigger: {
                trigger: t[n + 1],
                start: `top center+=100`,
                end: `top top+=140`,
                scrub: !0,
              },
            });
        });
      });
      return () => e.revert();
    }, []),
    (0, $.jsxs)($.Fragment, {
      children: [
        (0, $.jsx)(`style`, {
          dangerouslySetInnerHTML: {
            __html: `
        :root {
            --navy: #0A192F;
            --deep-blue: #002966;
            --amber: #E88F00;
            --cream: #F8E9D2;
            --ink: #171717;
            --background: #F7F7F7;
        }

        *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, 'Outfit', sans-serif;
            color: #1a1a1a;
            background-color: #F7F7F7;
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Keyboard Accessibility & Focus States */
        a:focus-visible, button:focus-visible {
            outline: 2.5px solid #E88F00;
            outline-offset: 3px;
        }

        .btn-signin:focus-visible, .btn-primary:focus-visible, .btn-secondary:focus-visible {
            outline-offset: 1px;
            border-radius: 34px;
        }

        .nav-links li a:focus-visible {
            border-radius: 20px;
        }

        /* NAVBAR */
        header {
            position: sticky;
            top: 16px;
            z-index: 100;
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 0 16px;
        }

        .navbar {
            width: 1200px;
            max-width: 100%;
            height: 59px;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-radius: 29.5px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.04);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 16px;
            position: relative;
        }

        .logo {
            display: flex;
            align-items: center;
            text-decoration: none;
        }

        .logo svg {
            width: 35px;
            height: 36px;
            display: block;
        }

        .nav-links {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            list-style: none;
            align-items: center;
            gap: 0;
        }

        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
        }

        .nav-links li a {
            display: inline-flex;
            padding: 6px 13px;
            text-decoration: none;
            color: #929292;
            font-size: 14px;
            font-weight: 400;
            font-family: 'Outfit', sans-serif;
            line-height: 14px;
            transition: color 0.2s ease;
        }

        .nav-links li a:hover {
            color: #2B2B2B;
        }

        .nav-links li a.active {
            color: #E88F00;
            font-weight: 500;
        }

        .btn-signin {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            width: 86px;
            height: 34px;
            background: linear-gradient(135deg, #062d6b 0%, #031330 50%, #010816 100%);
            border-radius: 34px;
            color: #ffffff;
            font-family: 'Outfit', sans-serif;
            font-size: 14px;
            font-weight: 400;
            line-height: 1;
            text-decoration: none;
            transition: all 0.2s ease;
            flex-shrink: 0;
            box-shadow: 0 2px 8px rgba(3, 19, 48, 0.25);
        }

        .btn-signin:hover {
            opacity: 0.92;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(6, 45, 107, 0.35);
        }

        .btn-signin svg {
            width: 13px;
            height: 13px;
        }

        .hamburger {
            display: none;
            background: none;
            border: none;
            color: #666;
            cursor: pointer;
            padding: 6px;
        }

        @media (max-width: 768px) {
            .hamburger {
                display: block;
            }
        }

        /* HERO */
        .hero {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 80px 20px 0;
            width: 100%;
            min-height: 900px;
            overflow: hidden;
            background-image: url('/background.png');
            background-size: cover;
            background-position: center top;
            background-repeat: no-repeat;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
        }

        .hero h1 {
            font-family: 'Outfit', sans-serif;
            font-size: 80px;
            font-weight: 400;
            margin: 0 auto 20px;
            line-height: 1.1;
            color: #2B2B2B;
            text-align: center;
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 50px;
            }
        }

        .text-gradient {
            display: inline-block;
            background: linear-gradient(180deg, #FBD944 0%, #E78F01 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
        }

        .hero-subtext {
            font-family: 'PT Serif', Georgia, serif;
            font-size: 16px;
            color: #000000;
            opacity: 0.60;
            max-width: 476px;
            margin: 24px auto 30px;
            line-height: 1.6;
            text-align: center;
        }

        .hero-actions {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            margin-bottom: 60px;
        }

        .btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 14px;
            padding: 14px;
            background: linear-gradient(174deg, #ffffff 0%, #E78F00 94%);
            border-radius: 43px;
            outline: 2px solid #ffffff;
            outline-offset: -1px;
            text-decoration: none;
            font-family: 'Outfit', sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #ffffff;
            transition: opacity 0.2s;
        }

        .btn-primary:hover {
            opacity: 0.9;
        }

        .btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 14px 18px;
            background: rgba(254.56, 254.56, 254.56, 0.70);
            border-radius: 39px;
            text-decoration: none;
            font-family: 'Outfit', sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #E78F01;
            transition: background 0.2s;
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.92);
        }

        .mockup-wrapper {
            position: relative;
            width: 100%;
            max-width: 900px;
            display: flex;
            justify-content: center;
            margin: 0 auto;
            z-index: 3;
        }

        .hero-phone-glow {
            position: absolute;
            width: 500px;
            height: 559px;
            top: 0;
            left: 58px;
            background: white;
            border-radius: 72px;
            filter: blur(91.05px);
            box-shadow: 182.1px 182.1px 182.1px;
            z-index: 0;
            opacity: 0.7;
        }

        .hero-phone-body {
            position: relative;
            width: 395.50px;
            height: 817px;
            background: #000;
            border-radius: 62.20px;
            z-index: 2;
            margin-top: 40px;
            margin-left: 48px;
            box-shadow:
                9px 14px 37px rgba(0, 0, 0, 0.14),
                37px 55px 67px rgba(0, 0, 0, 0.12),
                84px 124px 90px rgba(0, 0, 0, 0.07),
                150px 220px 107px rgba(0, 0, 0, 0.02);
            outline: 5.57px solid #7D8383;
            outline-offset: -5.57px;
        }

        .hero-phone-body img.main-phone {
            position: absolute;
            width: 362.08px;
            height: 783.58px;
            left: 16.71px;
            top: 16.71px;
            border-radius: 45.49px;
            object-fit: cover;
        }

        .hero-phone-island {
            position: absolute;
            width: 117.91px;
            height: 33.42px;
            left: 138.33px;
            top: 26.92px;
            background: black;
            border-radius: 927.48px;
            z-index: 10;
        }

        .ph-btn {
            position: absolute;
            border: 0.19px solid #000;
            z-index: 10;
        }

        .ph-vol1 {
            width: 2.79px;
            height: 29.71px;
            left: -2.79px;
            top: 159.69px;
            border-radius: 1px;
            background: linear-gradient(90deg, black 22%, rgba(0, 0, 0, 0) 100%), #8F8F8A;
        }

        .ph-vol2 {
            width: 2.79px;
            height: 60.35px;
            left: -2.79px;
            top: 219.11px;
            border-radius: 1px;
            background: linear-gradient(90deg, black 22%, rgba(0, 0, 0, 0) 100%), #8F8F8A;
        }

        .ph-mute {
            width: 2.79px;
            height: 60.35px;
            left: -2.79px;
            top: 297.09px;
            border-radius: 1px;
            background: linear-gradient(90deg, black 22%, rgba(0, 0, 0, 0) 100%), #8F8F8A;
        }

        .ph-power {
            width: 2.79px;
            height: 96.55px;
            left: 398.29px;
            top: 357.44px;
            border-radius: 1px;
            transform: rotate(180deg);
            transform-origin: top left;
            background: linear-gradient(90deg, black 22%, rgba(0, 0, 0, 0) 100%), #8F8F8A;
        }

        .stat-card {
            position: absolute;
            display: flex;
            align-items: center;
            gap: 19px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.35);
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            border-radius: 16px;
            z-index: 20;
            opacity: 0;
            transform: translateY(40px);
        }

        .card-left {
            outline: 2px solid #999999;
            outline-offset: -2px;
            box-shadow: -7px 4px 18px rgba(0, 0, 0, 0.02);
            left: -160px;
            top: 320px;
        }

        .card-right {
            outline: 2px solid white;
            outline-offset: -2px;
            box-shadow: 18px 7px 42px rgba(0, 0, 0, 0.02);
            right: 0px;
            top: 440px;
        }

        @media (max-width: 1024px) {
            .card-left { left: -40px; }
            .card-right { right: -40px; }
        }

        @media (max-width: 768px) {
            .stat-card { display: none; }
        }

        .stat-avatars {
            display: flex;
            align-space: -10px;
        }

        .stat-avatars img {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            outline: 2px solid #F7F7F7;
            margin-right: -10px;
            object-fit: cover;
        }

        .stat-info {
            display: flex;
            flex-direction: column;
            text-align: left;
        }

        .stat-value {
            font-family: 'Outfit', sans-serif;
            font-size: 24px;
            font-weight: 400;
            color: #000;
            line-height: 24px;
        }

        .stat-label {
            font-family: 'PT Serif', Georgia, serif;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.60);
            line-height: 16px;
        }

        .hero-fade {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 300px;
            background: linear-gradient(to top, #F7F7F7 0%, rgba(247, 247, 247, 0) 100%);
            z-index: 1;
            pointer-events: none;
        }

        /* STATEMENT */
        .statement {
            padding: 140px 20px;
            max-width: 1440px;
            margin: 0 auto;
            text-align: center;
        }

        .statement-text {
            font-family: 'Outfit', sans-serif;
            font-size: 60px;
            font-weight: 300;
            line-height: 1.1;
            color: #2B2B2B;
        }

        @media (max-width: 768px) {
            .statement-text {
                font-size: 36px;
            }
        }

        .statement-text .dim {
            color: rgba(42.69, 42.69, 42.69, 0.20);
        }

        /* WHO IT'S FOR */
        .who-its-for {
            padding: 100px 20px 0;
            text-align: center;
            background: #F7F7F7;
        }

        .section-label {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 12px;
            background: rgba(231, 177, 1, 0.1);
            border-radius: 30px;
            margin-bottom: 16px;
        }

        .section-label-dot {
            width: 6px;
            height: 6px;
            background: #E7B101;
            border-radius: 50%;
        }

        .section-label-text {
            font-family: 'Outfit', sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #E7B101;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .who-its-for h2 {
            font-family: 'Outfit', sans-serif;
            font-size: 60px;
            font-weight: 400;
            line-height: 1.1;
            color: #2B2B2B;
            max-width: 740px;
            margin: 0 auto 16px;
        }

        @media (max-width: 768px) {
            .who-its-for h2 {
                font-size: 36px;
            }
        }

        .who-its-for > p {
            font-family: 'PT Serif', Georgia, serif;
            font-size: 18px;
            color: rgba(0, 0, 0, 0.60);
            max-width: 754px;
            margin: 0 auto 80px;
        }

        .who-diagram {
            position: relative;
            width: 650px;
            height: 650px;
            margin: 0 auto 60px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @media (max-width: 768px) {
            .who-diagram {
                width: 320px;
                height: 320px;
            }
        }

        .orb-glow {
            position: absolute;
            width: 228px;
            height: 218px;
            background: #E7B101;
            box-shadow: 130.2px 130.2px 130.2px;
            border-radius: 50%;
            filter: blur(65.10px);
            opacity: 0.4;
            z-index: 1;
        }

        .orb {
            position: absolute;
            border-radius: 50%;
            border: 1px dashed rgba(10, 25, 47, 0.15);
        }

        .orb-icon {
            width: 90px;
            height: 90px;
            background: white;
            border-radius: 20px;
            outline: 3px solid white;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;
        }

        .orb-icon-inner {
            width: 35px;
            height: 36px;
            background: #E7B101;
            border-radius: 4px;
        }

        .who-pill {
            position: absolute;
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 10px 24px;
            background: rgba(255, 255, 255, 0.70);
            border-radius: 80px;
            outline: 2px solid white;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            transform-origin: center center;
            z-index: 5;
        }

        .who-pill-icon {
            width: 44px;
            height: 44px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(231, 177, 1, 0.12);
            flex-shrink: 0;
        }

        .who-pill-icon svg {
            width: 24px;
            height: 24px;
            fill: none;
            stroke: #E7B101;
        }

        .who-pill-text {
            font-family: 'Outfit', sans-serif;
            font-size: 15px;
            font-weight: 500;
            color: #2B2B2B;
            text-align: left;
            white-space: nowrap;
        }

        /* PLATFORM PREVIEW */
        .platform-preview {
            padding: 100px 20px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .platform-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            gap: 40px;
            margin-bottom: 80px;
        }

        @media (max-width: 768px) {
            .platform-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 20px;
            }
        }

        .platform-header h2 {
            font-family: 'Outfit', sans-serif;
            font-size: 54px;
            font-weight: 400;
            line-height: 1.1;
            color: #2B2B2B;
            max-width: 740px;
        }

        @media (max-width: 768px) {
            .platform-header h2 {
                font-size: 36px;
            }
        }

        .platform-header p {
            font-family: 'PT Serif', Georgia, serif;
            font-size: 18px;
            color: rgba(0, 0, 0, 0.60);
            max-width: 400px;
        }

        .feature-rows {
            display: flex;
            flex-direction: column;
            gap: 48px;
        }

        .stack-card {
            position: sticky;
            top: 120px;
            background: white;
            border-radius: 30px;
            outline: 1px solid #E0E0E0;
            overflow: hidden;
            min-height: 500px;
            display: flex;
            flex-direction: row;
            box-shadow: 0 20px 50px rgba(0,0,0,0.05);
        }

        @media (max-width: 768px) {
            .stack-card {
                flex-direction: column;
                min-height: auto;
                top: 80px;
            }
        }

        .feature-card-text {
            flex: 0 0 40%;
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 18px;
        }

        @media (max-width: 768px) {
            .feature-card-text {
                padding: 40px 24px;
            }
        }

        .feature-card-text h3 {
            font-family: 'Outfit', sans-serif;
            font-size: 30px;
            font-weight: 400;
            line-height: 1.2;
            color: #2B2B2B;
        }

        .feature-card-text p {
            font-family: 'PT Serif', Georgia, serif;
            font-style: italic;
            font-size: 18px;
            color: rgba(0, 0, 0, 0.60);
        }

        .feature-card-browser {
            flex: 0 0 60%;
            padding: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @media (max-width: 768px) {
            .feature-card-browser {
                padding: 24px;
            }
        }

        .browser-chrome {
            width: 100%;
            background: #E2E2E2;
            border-radius: 15.46px;
            padding: 3px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.08);
            overflow: hidden;
        }

        .browser-inner {
            background: white;
            border-radius: 13.44px;
            overflow: hidden;
        }

        .browser-topbar {
            height: 38px;
            background: #F2F2F2;
            display: flex;
            align-items: center;
            padding: 0 16px;
            gap: 6px;
        }

        .browser-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
        }

        .browser-dot-red { background: #F70C00; outline: 0.67px solid #CA2730; }
        .browser-dot-orange { background: #FF7305; outline: 0.67px solid #D06D19; }
        .browser-dot-green { background: #26C012; outline: 0.67px solid #4BA935; }

        .browser-url {
            margin: 0 auto;
            background: #F2F2F2;
            font-family: 'Albert Sans', sans-serif;
            font-size: 9px;
            font-weight: 500;
            color: #616161;
        }

        .browser-content img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
        }

        /* VIDEO FOOTER */
        .video-footer {
            position: relative;
            overflow: hidden;
            color: white;
            padding: 80px 40px 40px;
            margin-top: 80px;
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
            background-color: #000;
        }

        .footer-bg-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.4;
            z-index: 0;
        }

        .footer-content {
            position: relative;
            z-index: 1;
            max-width: 1200px;
            margin: 0 auto;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 40px;
            margin-bottom: 100px;
        }

        @media (max-width: 768px) {
            .footer-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 480px) {
            .footer-grid {
                grid-template-columns: 1fr;
            }
        }

        .footer-col h4 {
            font-family: 'Outfit', sans-serif;
            font-size: 18px;
            margin-bottom: 24px;
            font-weight: 500;
            color: #ffffff;
        }

        .footer-col ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .footer-col a {
            color: #a0a0a0;
            text-decoration: none;
            transition: color 0.2s;
            font-size: 14px;
        }

        .footer-col a:hover {
            color: #ffffff;
        }

        .contact-list li {
            display: flex;
            align-items: center;
            gap: 12px;
            color: #a0a0a0;
            font-size: 14px;
        }

        .contact-list svg {
            color: #E7B101;
        }

        .social-icons {
            display: flex;
            gap: 16px;
        }

        .icon-link {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 36px;
            height: 36px;
            border: 1px solid #a0a0a0;
            border-radius: 50%;
            color: #ffffff;
            transition: all 0.2s;
            text-decoration: none;
        }

        .icon-link:hover {
            background-color: #ffffff;
            color: #000000;
            border-color: #ffffff;
        }

        .footer-bottom-right {
            text-align: right;
            color: #555;
            font-size: 13px;
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 24px;
        }

        .mobile-dropdown {
            position: absolute;
            top: 65px;
            left: 0;
            width: 100%;
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            z-index: 100;
        }

        .mobile-dropdown a {
            color: #666;
            text-decoration: none;
            font-family: 'Outfit', sans-serif;
            font-size: 16px;
            padding: 8px 12px;
            border-radius: 8px;
            transition: background 0.2s;
        }

        .mobile-dropdown a:hover {
            background: #f5f5f5;
            color: #E88F00;
        }
      `,
          },
        }),
        (0, $.jsxs)(`div`, {
          className: `page-wrapper`,
          children: [
            (0, $.jsx)(`header`, {
              children: (0, $.jsxs)(`nav`, {
                className: `navbar`,
                children: [
                  (0, $.jsx)(`a`, {
                    href: `#`,
                    className: `logo`,
                    "aria-label": `Home`,
                    children: (0, $.jsxs)(`svg`, {
                      width: `35`,
                      height: `36`,
                      viewBox: `0 0 35 36`,
                      fill: `none`,
                      xmlns: `http://www.w3.org/2000/svg`,
                      children: [
                        (0, $.jsx)(`path`, {
                          fillRule: `evenodd`,
                          clipRule: `evenodd`,
                          d: `M22.8057 12.0561C21.5312 11.2045 20.0328 10.75 18.5 10.75V3C21.5656 3 24.5624 3.90906 27.1113 5.61222C29.6603 7.31538 31.6469 9.73615 32.8201 12.5684C33.9933 15.4006 34.3002 18.5172 33.7022 21.5239C33.1041 24.5306 31.6279 27.2925 29.4601 29.4601C27.2925 31.6279 24.5306 33.1041 21.5239 33.7022C18.5172 34.3002 15.4006 33.9933 12.5684 32.8201C9.73615 31.6469 7.31538 29.6603 5.61222 27.1113C3.90906 24.5624 3 21.5656 3 18.5H10.75C10.75 20.0328 11.2045 21.5312 12.0561 22.8057C12.9077 24.0802 14.1181 25.0735 15.5342 25.6601C16.9503 26.2467 18.5086 26.4001 20.0119 26.101C21.5153 25.802 22.8962 25.0639 23.9801 23.9801C25.0639 22.8962 25.802 21.5153 26.101 20.0119C26.4001 18.5086 26.2467 16.9503 25.6601 15.5342C25.0735 14.1181 24.0802 12.9077 22.8057 12.0561Z`,
                          fill: `#D4AE4F`,
                        }),
                        (0, $.jsx)(`path`, {
                          fillRule: `evenodd`,
                          clipRule: `evenodd`,
                          d: `M10.75 3C10.75 4.01775 10.5495 5.02552 10.1601 5.96579C9.77059 6.90607 9.19973 7.76042 8.48007 8.48008C7.76043 9.19974 6.90607 9.77059 5.96579 10.1601C5.02552 10.5495 4.01775 10.75 3 10.75L3 18.5C5.03549 18.5 7.05104 18.0991 8.9316 17.3201C10.8122 16.5412 12.5209 15.3995 13.9601 13.9601C15.3995 12.5209 16.5412 10.8122 17.3201 8.93159C18.0991 7.05104 18.5 5.03548 18.5 3L10.75 3Z`,
                          fill: `#D4AE4F`,
                        }),
                      ],
                    }),
                  }),
                  (0, $.jsxs)(`ul`, {
                    className: `nav-links`,
                    children: [
                      (0, $.jsx)(`li`, {
                        children: (0, $.jsx)(`a`, {
                          href: `#hero`,
                          className: n === `hero` ? `active` : ``,
                          children: `Home`,
                        }),
                      }),
                      (0, $.jsx)(`li`, {
                        children: (0, $.jsx)(`a`, {
                          href: `#solution`,
                          className: n === `solution` ? `active` : ``,
                          children: `Solution`,
                        }),
                      }),
                      (0, $.jsx)(`li`, {
                        children: (0, $.jsx)(`a`, {
                          href: `#who-its-for`,
                          className: n === `process` ? `active` : ``,
                          children: `Process`,
                        }),
                      }),
                      (0, $.jsx)(`li`, {
                        children: (0, $.jsx)(`a`, {
                          href: `#who-its-for`,
                          className: n === `who-its-for` ? `active` : ``,
                          children: `Industries`,
                        }),
                      }),
                      (0, $.jsx)(`li`, {
                        children: (0, $.jsx)(`a`, {
                          href: `#preview`,
                          className: n === `preview` ? `active` : ``,
                          children: `Platform`,
                        }),
                      }),
                      (0, $.jsx)(`li`, {
                        children: (0, $.jsx)(`a`, {
                          href: `#footer`,
                          className: n === `footer` ? `active` : ``,
                          children: `Contact`,
                        }),
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`a`, {
                    href: `#`,
                    className: `btn-signin`,
                    children: [
                      `Sign In`,
                      (0, $.jsxs)(`svg`, {
                        width: `13`,
                        height: `13`,
                        viewBox: `0 0 24 24`,
                        fill: `none`,
                        stroke: `white`,
                        strokeWidth: `2`,
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                        children: [
                          (0, $.jsx)(`line`, {
                            x1: `7`,
                            y1: `17`,
                            x2: `17`,
                            y2: `7`,
                          }),
                          (0, $.jsx)(`polyline`, { points: `7 7 17 7 17 17` }),
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsx)(`button`, {
                    className: `hamburger`,
                    onClick: () => t(!e),
                    "aria-label": `Toggle Menu`,
                    "aria-expanded": e,
                    children: (0, $.jsx)(`svg`, {
                      className: `w-6 h-6`,
                      fill: `none`,
                      stroke: `currentColor`,
                      viewBox: `0 0 24 24`,
                      children: (0, $.jsx)(`path`, {
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                        strokeWidth: `2`,
                        d: `M4 6h16M4 12h16M4 18h16`,
                      }),
                    }),
                  }),
                  e &&
                    (0, $.jsxs)(`div`, {
                      className: `mobile-dropdown`,
                      children: [
                        (0, $.jsx)(`a`, {
                          href: `#hero`,
                          onClick: () => t(!1),
                          children: `Home`,
                        }),
                        (0, $.jsx)(`a`, {
                          href: `#solution`,
                          onClick: () => t(!1),
                          children: `Solution`,
                        }),
                        (0, $.jsx)(`a`, {
                          href: `#who-its-for`,
                          onClick: () => t(!1),
                          children: `Process`,
                        }),
                        (0, $.jsx)(`a`, {
                          href: `#who-its-for`,
                          onClick: () => t(!1),
                          children: `Industries`,
                        }),
                        (0, $.jsx)(`a`, {
                          href: `#preview`,
                          onClick: () => t(!1),
                          children: `Platform`,
                        }),
                        (0, $.jsx)(`a`, {
                          href: `#footer`,
                          onClick: () => t(!1),
                          children: `Contact`,
                        }),
                      ],
                    }),
                ],
              }),
            }),
            (0, $.jsxs)(`section`, {
              id: `hero`,
              ref: a,
              className: `hero`,
              children: [
                (0, $.jsx)(`div`, {
                  className: `hero-blob`,
                  style: {
                    position: `absolute`,
                    right: 0,
                    top: `-100px`,
                    width: `649px`,
                    height: `1093px`,
                    pointerEvents: `none`,
                    zIndex: 0,
                    opacity: 0.85,
                  },
                  children: (0, $.jsxs)(`svg`, {
                    width: `649`,
                    height: `1093`,
                    viewBox: `0 0 649 1093`,
                    fill: `none`,
                    xmlns: `http://www.w3.org/2000/svg`,
                    children: [
                      (0, $.jsx)(`g`, {
                        filter: `url(#hero_blur_amber)`,
                        children: (0, $.jsx)(`ellipse`, {
                          cx: `400`,
                          cy: `300`,
                          rx: `350`,
                          ry: `250`,
                          fill: `#F1AD3E`,
                          fillOpacity: `0.6`,
                        }),
                      }),
                      (0, $.jsx)(`g`, {
                        filter: `url(#hero_blur_yellow)`,
                        children: (0, $.jsx)(`ellipse`, {
                          cx: `300`,
                          cy: `500`,
                          rx: `250`,
                          ry: `180`,
                          fill: `#FFD13D`,
                          fillOpacity: `0.5`,
                        }),
                      }),
                      (0, $.jsxs)(`defs`, {
                        children: [
                          (0, $.jsx)(`filter`, {
                            id: `hero_blur_amber`,
                            x: `0`,
                            y: `0`,
                            width: `800`,
                            height: `700`,
                            filterUnits: `userSpaceOnUse`,
                            colorInterpolationFilters: `sRGB`,
                            children: (0, $.jsx)(`feGaussianBlur`, {
                              stdDeviation: `85.3`,
                              result: `blur`,
                            }),
                          }),
                          (0, $.jsx)(`filter`, {
                            id: `hero_blur_yellow`,
                            x: `0`,
                            y: `200`,
                            width: `600`,
                            height: `560`,
                            filterUnits: `userSpaceOnUse`,
                            colorInterpolationFilters: `sRGB`,
                            children: (0, $.jsx)(`feGaussianBlur`, {
                              stdDeviation: `58.9`,
                              result: `blur`,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, $.jsxs)(`div`, {
                  ref: o,
                  className: `hero-content`,
                  children: [
                    (0, $.jsxs)(`h1`, {
                      children: [
                        `Verification That `,
                        (0, $.jsx)(`br`, {}),
                        (0, $.jsx)(`span`, {
                          className: `text-gradient`,
                          children: `Starts At The Source.`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`p`, {
                      className: `hero-subtext`,
                      children: [
                        `Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum`,
                        (0, $.jsx)(`br`, {}),
                        `lorem ipsum Lorem ipsum lorem ipsum`,
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `hero-actions`,
                      children: [
                        (0, $.jsxs)(`a`, {
                          href: `#`,
                          className: `btn-primary`,
                          children: [
                            (0, $.jsx)(`span`, { children: `Book a Demo` }),
                            (0, $.jsxs)(`svg`, {
                              width: `28`,
                              height: `28`,
                              viewBox: `0 0 28 28`,
                              fill: `none`,
                              xmlns: `http://www.w3.org/2000/svg`,
                              children: [
                                (0, $.jsx)(`rect`, {
                                  width: `28`,
                                  height: `28`,
                                  rx: `14`,
                                  fill: `#FFAA20`,
                                }),
                                (0, $.jsx)(`path`, {
                                  d: `M17.625 12.917C18.4583 13.3981 18.4583 14.6019 17.625 15.083L11.625 18.5469C10.7917 19.0279 9.75 18.4261 9.75 17.4639L9.75 10.5361C9.75 9.57392 10.7917 8.97211 11.625 9.45312L17.625 12.917Z`,
                                  stroke: `white`,
                                  strokeWidth: `1.5`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`a`, {
                          href: `#`,
                          className: `btn-secondary`,
                          children: [
                            (0, $.jsx)(`span`, {
                              children: `See how it works`,
                            }),
                            (0, $.jsx)(`svg`, {
                              width: `21`,
                              height: `21`,
                              viewBox: `0 0 21 21`,
                              fill: `none`,
                              xmlns: `http://www.w3.org/2000/svg`,
                              children: (0, $.jsx)(`path`, {
                                d: `M14.1787 14.1786V6.82126H6.82131M14.1787 6.82126L6.82131 14.1786`,
                                stroke: `#E78F01`,
                                strokeWidth: `1.5`,
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `mockup-wrapper`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      ref: l,
                      className: `stat-card card-left`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `stat-avatars`,
                          children: [
                            (0, $.jsx)(`img`, {
                              src: `https://i.pravatar.cc/34?img=1`,
                              alt: `Org 1`,
                            }),
                            (0, $.jsx)(`img`, {
                              src: `https://i.pravatar.cc/34?img=2`,
                              alt: `Org 2`,
                            }),
                            (0, $.jsx)(`img`, {
                              src: `https://i.pravatar.cc/34?img=3`,
                              alt: `Org 3`,
                            }),
                            (0, $.jsx)(`img`, {
                              src: `https://i.pravatar.cc/34?img=4`,
                              alt: `Org 4`,
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `stat-info`,
                          children: [
                            (0, $.jsx)(`div`, {
                              className: `stat-value`,
                              children: `250+`,
                            }),
                            (0, $.jsx)(`div`, {
                              className: `stat-label`,
                              children: `trusted organizations`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsx)(`div`, { ref: c, className: `hero-phone-glow` }),
                    (0, $.jsxs)(`div`, {
                      ref: s,
                      className: `hero-phone-body`,
                      children: [
                        (0, $.jsx)(`img`, {
                          src: `/iPhone 14 Pro.png`,
                          alt: `App Interface`,
                          className: `main-phone`,
                        }),
                        (0, $.jsx)(`div`, { className: `hero-phone-island` }),
                        (0, $.jsx)(`div`, { className: `ph-btn ph-vol1` }),
                        (0, $.jsx)(`div`, { className: `ph-btn ph-vol2` }),
                        (0, $.jsx)(`div`, { className: `ph-btn ph-mute` }),
                        (0, $.jsx)(`div`, { className: `ph-btn ph-power` }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      ref: u,
                      className: `stat-card card-right`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `stat-icon-wrap`,
                          children: (0, $.jsxs)(`svg`, {
                            width: `24`,
                            height: `24`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            stroke: `white`,
                            strokeWidth: `1.5`,
                            children: [
                              (0, $.jsx)(`rect`, {
                                x: `3`,
                                y: `3`,
                                width: `14`,
                                height: `14`,
                                rx: `2`,
                                fill: `white`,
                                fillOpacity: `0.2`,
                              }),
                              (0, $.jsx)(`rect`, {
                                x: `7`,
                                y: `7`,
                                width: `14`,
                                height: `14`,
                                rx: `2`,
                                fill: `white`,
                                fillOpacity: `0.4`,
                              }),
                            ],
                          }),
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `stat-info`,
                          children: [
                            (0, $.jsx)(`div`, {
                              className: `stat-value`,
                              children: `10,000+`,
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `stat-label`,
                              children: [
                                `credentials verified`,
                                (0, $.jsx)(`br`, {}),
                                `securely`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsx)(`div`, { className: `hero-fade` }),
              ],
            }),
            (0, $.jsx)(`section`, {
              id: `solution`,
              className: `statement`,
              children: (0, $.jsxs)(`p`, {
                className: `statement-text`,
                children: [
                  `PDFs get forged. Emails get lost. Manual checks create liability.`,
                  (0, $.jsx)(`br`, {}),
                  (0, $.jsx)(`span`, {
                    className: `dim`,
                    children: `Lorem replaces static documents with cryptographically signed credentials issued directly from the source, with a full audit trail.`,
                  }),
                ],
              }),
            }),
            (0, $.jsxs)(`section`, {
              id: `who-its-for`,
              className: `who-its-for`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `section-label`,
                  children: [
                    (0, $.jsx)(`span`, { className: `section-label-dot` }),
                    (0, $.jsx)(`span`, {
                      className: `section-label-text`,
                      children: `Who It's For`,
                    }),
                  ],
                }),
                (0, $.jsx)(`h2`, {
                  children: `Built for workflows where trust is non-negotiable.`,
                }),
                (0, $.jsx)(`p`, {
                  children: `Wherever credentials matter, Lorem handles the verification`,
                }),
                (0, $.jsxs)(`div`, {
                  className: `who-diagram`,
                  children: [
                    (0, $.jsx)(`div`, { className: `orb-glow` }),
                    (0, $.jsx)(`div`, {
                      className: `orb w-[509px] h-[509px] rounded-full`,
                    }),
                    (0, $.jsx)(`div`, {
                      className: `orb w-[389px] h-[389px] rounded-full`,
                    }),
                    (0, $.jsx)(`div`, {
                      className: `orb w-[269px] h-[269px] rounded-full`,
                    }),
                    (0, $.jsx)(`div`, {
                      className: `orb-icon`,
                      children: (0, $.jsx)(`div`, {
                        className: `orb-icon-inner`,
                      }),
                    }),
                    (0, $.jsxs)(`div`, {
                      ref: d,
                      className: `absolute inset-0 rounded-full flex items-center justify-center pointer-events-none`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `who-pill`,
                          style: {
                            transform: `rotate(calc(0deg + var(--rotation) * 1deg)) translate(calc(var(--radius) * 1px)) rotate(calc(0deg - var(--rotation) * 1deg))`,
                          },
                          children: [
                            (0, $.jsx)(`div`, {
                              className: `who-pill-icon`,
                              children: (0, $.jsxs)(`svg`, {
                                width: `24`,
                                height: `24`,
                                viewBox: `0 0 24 24`,
                                fill: `none`,
                                stroke: `#E7B101`,
                                strokeWidth: `1.5`,
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                children: [
                                  (0, $.jsx)(`line`, {
                                    x1: `12`,
                                    y1: `3`,
                                    x2: `12`,
                                    y2: `21`,
                                  }),
                                  (0, $.jsx)(`path`, { d: `M5 6h14` }),
                                  (0, $.jsx)(`path`, {
                                    d: `M3 14l3-6 3 6a3 3 0 0 1-6 0z`,
                                  }),
                                  (0, $.jsx)(`path`, {
                                    d: `M15 14l3-6 3 6a3 3 0 0 1-6 0z`,
                                  }),
                                  (0, $.jsx)(`line`, {
                                    x1: `9`,
                                    y1: `21`,
                                    x2: `15`,
                                    y2: `21`,
                                  }),
                                ],
                              }),
                            }),
                            (0, $.jsxs)(`span`, {
                              className: `who-pill-text`,
                              children: [
                                `Immigration`,
                                (0, $.jsx)(`br`, {}),
                                `Law Firms`,
                              ],
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `who-pill`,
                          style: {
                            transform: `rotate(calc(72deg + var(--rotation) * 1deg)) translate(calc(var(--radius) * 1px)) rotate(calc(-72deg - var(--rotation) * 1deg))`,
                          },
                          children: [
                            (0, $.jsx)(`div`, {
                              className: `who-pill-icon`,
                              children: (0, $.jsxs)(`svg`, {
                                width: `24`,
                                height: `24`,
                                viewBox: `0 0 24 24`,
                                fill: `none`,
                                stroke: `#E7B101`,
                                strokeWidth: `1.5`,
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                children: [
                                  (0, $.jsx)(`path`, {
                                    d: `M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2`,
                                  }),
                                  (0, $.jsx)(`circle`, {
                                    cx: `9`,
                                    cy: `7`,
                                    r: `4`,
                                  }),
                                  (0, $.jsx)(`path`, {
                                    d: `M23 21v-2a4 4 0 0 0-3-3.87`,
                                  }),
                                  (0, $.jsx)(`path`, {
                                    d: `M16 3.13a4 4 0 0 1 0 7.75`,
                                  }),
                                ],
                              }),
                            }),
                            (0, $.jsxs)(`span`, {
                              className: `who-pill-text`,
                              children: [
                                `Compliance &`,
                                (0, $.jsx)(`br`, {}),
                                `Mobility Teams`,
                              ],
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `who-pill`,
                          style: {
                            transform: `rotate(calc(144deg + var(--rotation) * 1deg)) translate(calc(var(--radius) * 1px)) rotate(calc(-144deg - var(--rotation) * 1deg))`,
                          },
                          children: [
                            (0, $.jsx)(`div`, {
                              className: `who-pill-icon`,
                              children: (0, $.jsxs)(`svg`, {
                                width: `24`,
                                height: `24`,
                                viewBox: `0 0 24 24`,
                                fill: `none`,
                                stroke: `#E7B101`,
                                strokeWidth: `1.5`,
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                children: [
                                  (0, $.jsx)(`line`, {
                                    x1: `12`,
                                    y1: `3`,
                                    x2: `12`,
                                    y2: `21`,
                                  }),
                                  (0, $.jsx)(`path`, { d: `M5 6h14` }),
                                  (0, $.jsx)(`path`, {
                                    d: `M3 14l3-6 3 6a3 3 0 0 1-6 0z`,
                                  }),
                                  (0, $.jsx)(`path`, {
                                    d: `M15 14l3-6 3 6a3 3 0 0 1-6 0z`,
                                  }),
                                  (0, $.jsx)(`line`, {
                                    x1: `9`,
                                    y1: `21`,
                                    x2: `15`,
                                    y2: `21`,
                                  }),
                                ],
                              }),
                            }),
                            (0, $.jsxs)(`span`, {
                              className: `who-pill-text`,
                              children: [
                                `Financial`,
                                (0, $.jsx)(`br`, {}),
                                `Institutions`,
                              ],
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `who-pill`,
                          style: {
                            transform: `rotate(calc(216deg + var(--rotation) * 1deg)) translate(calc(var(--radius) * 1px)) rotate(calc(-216deg - var(--rotation) * 1deg))`,
                          },
                          children: [
                            (0, $.jsx)(`div`, {
                              className: `who-pill-icon`,
                              children: (0, $.jsxs)(`svg`, {
                                width: `24`,
                                height: `24`,
                                viewBox: `0 0 24 24`,
                                fill: `none`,
                                stroke: `#E7B101`,
                                strokeWidth: `1.5`,
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                children: [
                                  (0, $.jsx)(`path`, {
                                    d: `M7 11V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7`,
                                  }),
                                  (0, $.jsx)(`rect`, {
                                    x: `3`,
                                    y: `11`,
                                    width: `18`,
                                    height: `4`,
                                    rx: `2`,
                                  }),
                                  (0, $.jsx)(`path`, { d: `M12 15v3` }),
                                  (0, $.jsx)(`path`, { d: `M8 22l2-4h4l2 4` }),
                                ],
                              }),
                            }),
                            (0, $.jsxs)(`span`, {
                              className: `who-pill-text`,
                              children: [
                                `HR & Recruitment`,
                                (0, $.jsx)(`br`, {}),
                                `Firms`,
                              ],
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `who-pill`,
                          style: {
                            transform: `rotate(calc(288deg + var(--rotation) * 1deg)) translate(calc(var(--radius) * 1px)) rotate(calc(-288deg - var(--rotation) * 1deg))`,
                          },
                          children: [
                            (0, $.jsx)(`div`, {
                              className: `who-pill-icon`,
                              children: (0, $.jsxs)(`svg`, {
                                width: `24`,
                                height: `24`,
                                viewBox: `0 0 24 24`,
                                fill: `none`,
                                stroke: `#E7B101`,
                                strokeWidth: `1.5`,
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                children: [
                                  (0, $.jsx)(`path`, {
                                    d: `M22 10v6M2 10l10-5 10 5-10 5z`,
                                  }),
                                  (0, $.jsx)(`path`, {
                                    d: `M6 12v5c3 3 9 3 12 0v-5`,
                                  }),
                                ],
                              }),
                            }),
                            (0, $.jsxs)(`span`, {
                              className: `who-pill-text`,
                              children: [
                                `Universities & Training`,
                                (0, $.jsx)(`br`, {}),
                                `Institutes`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, $.jsxs)(`section`, {
              id: `preview`,
              ref: f,
              className: `platform-preview`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `platform-header`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `platform-label`,
                          children: [
                            (0, $.jsx)(`span`, {
                              className: `platform-label-dot`,
                            }),
                            (0, $.jsx)(`span`, {
                              className: `platform-label-text`,
                              children: `Platform Preview`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(`h2`, {
                          children: `Verify documents from a single dashboard.`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`p`, {
                      children: `One dashboard to request, track, and receive verified credentials, from anywhere in the world.`,
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `feature-rows`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `stack-card`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `feature-card-text`,
                          children: [
                            (0, $.jsx)(`h3`, {
                              children: `Create verification cases instantly`,
                            }),
                            (0, $.jsx)(`p`, {
                              children: `Add the applicant and issuer. Hit send. Lorem notifies everyone and tracks every step.`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(`div`, {
                          className: `feature-card-browser`,
                          children: (0, $.jsx)(`div`, {
                            className: `browser-chrome`,
                            children: (0, $.jsxs)(`div`, {
                              className: `browser-inner`,
                              children: [
                                (0, $.jsxs)(`div`, {
                                  className: `browser-topbar`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      className: `browser-dot browser-dot-red`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `browser-dot browser-dot-orange`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `browser-dot browser-dot-green`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `browser-url`,
                                      children: `Lorem.com`,
                                    }),
                                  ],
                                }),
                                (0, $.jsx)(`div`, {
                                  className: `browser-content`,
                                  children: (0, $.jsx)(`img`, {
                                    src: `/card1.png`,
                                    alt: `Create verification cases dashboard`,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `stack-card`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `feature-card-text`,
                          children: [
                            (0, $.jsx)(`h3`, {
                              children: `Track real-time verification status`,
                            }),
                            (0, $.jsx)(`p`, {
                              children: `See exactly where each case stands. No chasing emails. No manual follow-ups.`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(`div`, {
                          className: `feature-card-browser`,
                          children: (0, $.jsx)(`div`, {
                            className: `browser-chrome`,
                            children: (0, $.jsxs)(`div`, {
                              className: `browser-inner`,
                              children: [
                                (0, $.jsxs)(`div`, {
                                  className: `browser-topbar`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      className: `browser-dot browser-dot-red`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `browser-dot browser-dot-orange`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `browser-dot browser-dot-green`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `browser-url`,
                                      children: `Lorem.com`,
                                    }),
                                  ],
                                }),
                                (0, $.jsx)(`div`, {
                                  className: `browser-content`,
                                  children: (0, $.jsx)(`img`, {
                                    src: `/card2.png`,
                                    alt: `Real-time verification status dashboard`,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `stack-card`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `feature-card-text`,
                          children: [
                            (0, $.jsx)(`h3`, {
                              children: `View applicant approval activity`,
                            }),
                            (0, $.jsx)(`p`, {
                              children: `Know the moment an applicant consents. Every action is logged, timestamped, and auditable.`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(`div`, {
                          className: `feature-card-browser`,
                          children: (0, $.jsx)(`div`, {
                            className: `browser-chrome`,
                            children: (0, $.jsxs)(`div`, {
                              className: `browser-inner`,
                              children: [
                                (0, $.jsxs)(`div`, {
                                  className: `browser-topbar`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      className: `browser-dot browser-dot-red`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `browser-dot browser-dot-orange`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `browser-dot browser-dot-green`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `browser-url`,
                                      children: `Lorem.com`,
                                    }),
                                  ],
                                }),
                                (0, $.jsx)(`div`, {
                                  className: `browser-content`,
                                  children: (0, $.jsx)(`img`, {
                                    src: `/card3.png`,
                                    alt: `Applicant approval activity dashboard`,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `stack-card`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `feature-card-text`,
                          children: [
                            (0, $.jsx)(`h3`, {
                              children: `Access issuer-verified documents`,
                            }),
                            (0, $.jsx)(`p`, {
                              children: `Signed at source. Delivered to your dashboard. Ready to reference whenever you need it.`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(`div`, {
                          className: `feature-card-browser`,
                          children: (0, $.jsx)(`div`, {
                            className: `browser-chrome`,
                            children: (0, $.jsxs)(`div`, {
                              className: `browser-inner`,
                              children: [
                                (0, $.jsxs)(`div`, {
                                  className: `browser-topbar`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      className: `browser-dot browser-dot-red`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `browser-dot browser-dot-orange`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `browser-dot browser-dot-green`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `browser-url`,
                                      children: `Lorem.com`,
                                    }),
                                  ],
                                }),
                                (0, $.jsx)(`div`, {
                                  className: `browser-content`,
                                  children: (0, $.jsx)(`img`, {
                                    src: `/card4.png`,
                                    alt: `Issuer-verified documents dashboard`,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `stack-card`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `feature-card-text`,
                          children: [
                            (0, $.jsx)(`h3`, {
                              children: `Consolidate compliance reports`,
                            }),
                            (0, $.jsx)(`p`, {
                              children: `Instantly generate secure cryptographic audit trails for compliance verification records.`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(`div`, {
                          className: `feature-card-browser`,
                          children: (0, $.jsx)(`div`, {
                            className: `browser-chrome`,
                            children: (0, $.jsxs)(`div`, {
                              className: `browser-inner`,
                              children: [
                                (0, $.jsxs)(`div`, {
                                  className: `browser-topbar`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      className: `browser-dot browser-dot-red`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `browser-dot browser-dot-orange`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `browser-dot browser-dot-green`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `browser-url`,
                                      children: `Lorem.com`,
                                    }),
                                  ],
                                }),
                                (0, $.jsx)(`div`, {
                                  className: `browser-content`,
                                  children: (0, $.jsx)(`img`, {
                                    src: `/card1.png`,
                                    alt: `Consolidate compliance reports dashboard`,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, $.jsxs)(`footer`, {
              ref: p,
              id: `footer`,
              className: `video-footer`,
              style: {
                backgroundImage: `url('/who_it_is_for_gradient.png')`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                backgroundBlendMode: `multiply`,
              },
              children: [
                m &&
                  !g &&
                  (0, $.jsx)(`video`, {
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    className: `footer-bg-video`,
                    style: { transition: `opacity 1s ease` },
                    children: (0, $.jsx)(`source`, {
                      src: `/footer_video.mp4`,
                      type: `video/mp4`,
                    }),
                  }),
                (0, $.jsxs)(`div`, {
                  className: `footer-content`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `footer-grid`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `footer-col`,
                          children: [
                            (0, $.jsx)(`h4`, { children: `Product` }),
                            (0, $.jsxs)(`ul`, {
                              children: [
                                (0, $.jsx)(`li`, {
                                  children: (0, $.jsx)(`a`, {
                                    href: `#`,
                                    children: `Overview`,
                                  }),
                                }),
                                (0, $.jsx)(`li`, {
                                  children: (0, $.jsx)(`a`, {
                                    href: `#`,
                                    children: `Solutions`,
                                  }),
                                }),
                                (0, $.jsx)(`li`, {
                                  children: (0, $.jsx)(`a`, {
                                    href: `#`,
                                    children: `Process`,
                                  }),
                                }),
                                (0, $.jsx)(`li`, {
                                  children: (0, $.jsx)(`a`, {
                                    href: `#`,
                                    children: `Platform Preview`,
                                  }),
                                }),
                                (0, $.jsx)(`li`, {
                                  children: (0, $.jsx)(`a`, {
                                    href: `#`,
                                    children: `Pricing`,
                                  }),
                                }),
                                (0, $.jsx)(`li`, {
                                  children: (0, $.jsx)(`a`, {
                                    href: `#`,
                                    children: `Request Demo`,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `footer-col`,
                          children: [
                            (0, $.jsx)(`h4`, {
                              children: `Company & Resources`,
                            }),
                            (0, $.jsxs)(`ul`, {
                              children: [
                                (0, $.jsx)(`li`, {
                                  children: (0, $.jsx)(`a`, {
                                    href: `#`,
                                    children: `Terms of Service`,
                                  }),
                                }),
                                (0, $.jsx)(`li`, {
                                  children: (0, $.jsx)(`a`, {
                                    href: `#`,
                                    children: `Privacy Policy`,
                                  }),
                                }),
                                (0, $.jsx)(`li`, {
                                  children: (0, $.jsx)(`a`, {
                                    href: `#`,
                                    children: `FAQs`,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `footer-col`,
                          children: [
                            (0, $.jsx)(`h4`, { children: `Contact` }),
                            (0, $.jsxs)(`ul`, {
                              className: `contact-list`,
                              children: [
                                (0, $.jsxs)(`li`, {
                                  children: [
                                    (0, $.jsxs)(`svg`, {
                                      width: `16`,
                                      height: `16`,
                                      viewBox: `0 0 24 24`,
                                      fill: `none`,
                                      stroke: `currentColor`,
                                      strokeWidth: `2`,
                                      strokeLinecap: `round`,
                                      strokeLinejoin: `round`,
                                      children: [
                                        (0, $.jsx)(`path`, {
                                          d: `M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`,
                                        }),
                                        (0, $.jsx)(`circle`, {
                                          cx: `12`,
                                          cy: `10`,
                                          r: `3`,
                                        }),
                                      ],
                                    }),
                                    `USA`,
                                  ],
                                }),
                                (0, $.jsxs)(`li`, {
                                  children: [
                                    (0, $.jsx)(`svg`, {
                                      width: `16`,
                                      height: `16`,
                                      viewBox: `0 0 24 24`,
                                      fill: `none`,
                                      stroke: `currentColor`,
                                      strokeWidth: `2`,
                                      strokeLinecap: `round`,
                                      strokeLinejoin: `round`,
                                      children: (0, $.jsx)(`path`, {
                                        d: `M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`,
                                      }),
                                    }),
                                    `+971 51 547 3625`,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `footer-col`,
                          children: [
                            (0, $.jsx)(`h4`, { children: `Connect` }),
                            (0, $.jsxs)(`div`, {
                              className: `social-icons`,
                              children: [
                                (0, $.jsx)(`a`, {
                                  href: `#`,
                                  className: `icon-link`,
                                  children: (0, $.jsxs)(`svg`, {
                                    width: `16`,
                                    height: `16`,
                                    viewBox: `0 0 24 24`,
                                    fill: `none`,
                                    stroke: `currentColor`,
                                    strokeWidth: `2`,
                                    strokeLinecap: `round`,
                                    strokeLinejoin: `round`,
                                    children: [
                                      (0, $.jsx)(`path`, {
                                        d: `M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z`,
                                      }),
                                      (0, $.jsx)(`rect`, {
                                        x: `2`,
                                        y: `9`,
                                        width: `4`,
                                        height: `12`,
                                      }),
                                      (0, $.jsx)(`circle`, {
                                        cx: `4`,
                                        cy: `4`,
                                        r: `2`,
                                      }),
                                    ],
                                  }),
                                }),
                                (0, $.jsx)(`a`, {
                                  href: `#`,
                                  className: `icon-link`,
                                  children: (0, $.jsxs)(`svg`, {
                                    width: `16`,
                                    height: `16`,
                                    viewBox: `0 0 24 24`,
                                    fill: `none`,
                                    stroke: `currentColor`,
                                    strokeWidth: `2`,
                                    strokeLinecap: `round`,
                                    strokeLinejoin: `round`,
                                    children: [
                                      (0, $.jsx)(`rect`, {
                                        x: `2`,
                                        y: `2`,
                                        width: `20`,
                                        height: `20`,
                                        rx: `5`,
                                        ry: `5`,
                                      }),
                                      (0, $.jsx)(`path`, {
                                        d: `M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`,
                                      }),
                                      (0, $.jsx)(`line`, {
                                        x1: `17.5`,
                                        y1: `6.5`,
                                        x2: `17.51`,
                                        y2: `6.5`,
                                      }),
                                    ],
                                  }),
                                }),
                                (0, $.jsx)(`a`, {
                                  href: `#`,
                                  className: `icon-link`,
                                  children: (0, $.jsxs)(`svg`, {
                                    width: `16`,
                                    height: `16`,
                                    viewBox: `0 0 24 24`,
                                    fill: `none`,
                                    stroke: `currentColor`,
                                    strokeWidth: `2`,
                                    strokeLinecap: `round`,
                                    strokeLinejoin: `round`,
                                    children: [
                                      (0, $.jsx)(`path`, {
                                        d: `M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`,
                                      }),
                                      (0, $.jsx)(`polyline`, {
                                        points: `22,6 12,13 2,6`,
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsx)(`div`, {
                      className: `footer-bottom-right`,
                      children: `© 2026 Lorem.app. All rights reserved.`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
var Ws = Us;
export { Ws as component };
