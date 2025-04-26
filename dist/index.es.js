(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}._plot_1lq10_1{font-size:12px;fill:#000}._xlabel_1lq10_6{text-anchor:middle}._curve_1lq10_10{stroke-width:3px;fill:none}._legend_1lq10_23{font-size:16px;alignment-baseline:middle}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Mo = {
  display_type: "canvas",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 1005, height: 1005 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function yn(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function $o(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function ni(t) {
  let n, e, r;
  t.length !== 2 ? (n = yn, e = (s, u) => yn(t(s), u), r = (s, u) => t(s) - u) : (n = t === yn || t === $o ? t : To, e = t, r = t);
  function i(s, u, l = 0, h = s.length) {
    if (l < h) {
      if (n(u, u) !== 0) return h;
      do {
        const p = l + h >>> 1;
        e(s[p], u) < 0 ? l = p + 1 : h = p;
      } while (l < h);
    }
    return l;
  }
  function o(s, u, l = 0, h = s.length) {
    if (l < h) {
      if (n(u, u) !== 0) return h;
      do {
        const p = l + h >>> 1;
        e(s[p], u) <= 0 ? l = p + 1 : h = p;
      } while (l < h);
    }
    return l;
  }
  function a(s, u, l = 0, h = s.length) {
    const p = i(s, u, l, h - 1);
    return p > l && r(s[p - 1], u) > -r(s[p], u) ? p - 1 : p;
  }
  return { left: i, center: a, right: o };
}
function To() {
  return 0;
}
function Ao(t) {
  return t === null ? NaN : +t;
}
const So = ni(yn), Eo = So.right;
ni(Ao).center;
const Po = Math.sqrt(50), ko = Math.sqrt(10), zo = Math.sqrt(2);
function wn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Po ? 10 : o >= ko ? 5 : o >= zo ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(t * l), u = Math.round(n * l), s / l < t && ++s, u / l > n && --u, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(t / l), u = Math.round(n / l), s * l < t && ++s, u * l > n && --u), u < s && 0.5 <= e && e < 2 ? wn(t, n, e * 2) : [s, u, l];
}
function Oo(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? wn(n, t, e) : wn(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let l = 0; l < s; ++l) u[l] = (o - l) / -a;
    else for (let l = 0; l < s; ++l) u[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -a;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * a;
  return u;
}
function le(t, n, e) {
  return n = +n, t = +t, e = +e, wn(t, n, e)[2];
}
function Co(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? le(n, t, e) : le(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function sn(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function Io(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function Ro(t) {
  return t;
}
var Zn = 1, jn = 2, ce = 3, qt = 4, sr = 1e-6;
function Fo(t) {
  return "translate(" + t + ",0)";
}
function Lo(t) {
  return "translate(0," + t + ")";
}
function Do(t) {
  return (n) => +t(n);
}
function qo(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function Ho() {
  return !this.__axis;
}
function ei(t, n) {
  var e = [], r = null, i = null, o = 6, a = 6, s = 3, u = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, l = t === Zn || t === qt ? -1 : 1, h = t === qt || t === jn ? "x" : "y", p = t === Zn || t === ce ? Fo : Lo;
  function c(f) {
    var d = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), g = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : Ro), y = Math.max(o, 0) + s, _ = n.range(), M = +_[0] + u, T = +_[_.length - 1] + u, m = (n.bandwidth ? qo : Do)(n.copy(), u), v = f.selection ? f.selection() : f, S = v.selectAll(".domain").data([null]), A = v.selectAll(".tick").data(d, n).order(), k = A.exit(), I = A.enter().append("g").attr("class", "tick"), R = A.select("line"), w = A.select("text");
    S = S.merge(S.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), A = A.merge(I), R = R.merge(I.append("line").attr("stroke", "currentColor").attr(h + "2", l * o)), w = w.merge(I.append("text").attr("fill", "currentColor").attr(h, l * y).attr("dy", t === Zn ? "0em" : t === ce ? "0.71em" : "0.32em")), f !== v && (S = S.transition(f), A = A.transition(f), R = R.transition(f), w = w.transition(f), k = k.transition(f).attr("opacity", sr).attr("transform", function(z) {
      return isFinite(z = m(z)) ? p(z + u) : this.getAttribute("transform");
    }), I.attr("opacity", sr).attr("transform", function(z) {
      var P = this.parentNode.__axis;
      return p((P && isFinite(P = P(z)) ? P : m(z)) + u);
    })), k.remove(), S.attr("d", t === qt || t === jn ? a ? "M" + l * a + "," + M + "H" + u + "V" + T + "H" + l * a : "M" + u + "," + M + "V" + T : a ? "M" + M + "," + l * a + "V" + u + "H" + T + "V" + l * a : "M" + M + "," + u + "H" + T), A.attr("opacity", 1).attr("transform", function(z) {
      return p(m(z) + u);
    }), R.attr(h + "2", l * o), w.attr(h, l * y).text(g), v.filter(Ho).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === jn ? "start" : t === qt ? "end" : "middle"), v.each(function() {
      this.__axis = m;
    });
  }
  return c.scale = function(f) {
    return arguments.length ? (n = f, c) : n;
  }, c.ticks = function() {
    return e = Array.from(arguments), c;
  }, c.tickArguments = function(f) {
    return arguments.length ? (e = f == null ? [] : Array.from(f), c) : e.slice();
  }, c.tickValues = function(f) {
    return arguments.length ? (r = f == null ? null : Array.from(f), c) : r && r.slice();
  }, c.tickFormat = function(f) {
    return arguments.length ? (i = f, c) : i;
  }, c.tickSize = function(f) {
    return arguments.length ? (o = a = +f, c) : o;
  }, c.tickSizeInner = function(f) {
    return arguments.length ? (o = +f, c) : o;
  }, c.tickSizeOuter = function(f) {
    return arguments.length ? (a = +f, c) : a;
  }, c.tickPadding = function(f) {
    return arguments.length ? (s = +f, c) : s;
  }, c.offset = function(f) {
    return arguments.length ? (u = +f, c) : u;
  }, c;
}
function No(t) {
  return ei(ce, t);
}
function Bo(t) {
  return ei(qt, t);
}
var Xo = { value: () => {
} };
function Fe() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new mn(e);
}
function mn(t) {
  this._ = t;
}
function Go(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
mn.prototype = Fe.prototype = {
  constructor: mn,
  on: function(t, n) {
    var e = this._, r = Go(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Uo(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = ur(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = ur(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new mn(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function Uo(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function ur(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Xo, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var fe = "http://www.w3.org/1999/xhtml";
const lr = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: fe,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function In(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), lr.hasOwnProperty(n) ? { space: lr[n], local: t } : t;
}
function Yo(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === fe && n.documentElement.namespaceURI === fe ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Vo(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ri(t) {
  var n = In(t);
  return (n.local ? Vo : Yo)(n);
}
function Ko() {
}
function Le(t) {
  return t == null ? Ko : function() {
    return this.querySelector(t);
  };
}
function Wo(t) {
  typeof t != "function" && (t = Le(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, l, h = 0; h < a; ++h)
      (u = o[h]) && (l = t.call(u, u.__data__, h, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[h] = l);
  return new H(r, this._parents);
}
function Zo(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function jo() {
  return [];
}
function ii(t) {
  return t == null ? jo : function() {
    return this.querySelectorAll(t);
  };
}
function Jo(t) {
  return function() {
    return Zo(t.apply(this, arguments));
  };
}
function Qo(t) {
  typeof t == "function" ? t = Jo(t) : t = ii(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new H(r, i);
}
function oi(t) {
  return function() {
    return this.matches(t);
  };
}
function ai(t) {
  return function(n) {
    return n.matches(t);
  };
}
var ta = Array.prototype.find;
function na(t) {
  return function() {
    return ta.call(this.children, t);
  };
}
function ea() {
  return this.firstElementChild;
}
function ra(t) {
  return this.select(t == null ? ea : na(typeof t == "function" ? t : ai(t)));
}
var ia = Array.prototype.filter;
function oa() {
  return Array.from(this.children);
}
function aa(t) {
  return function() {
    return ia.call(this.children, t);
  };
}
function sa(t) {
  return this.selectAll(t == null ? oa : aa(typeof t == "function" ? t : ai(t)));
}
function ua(t) {
  typeof t != "function" && (t = oi(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new H(r, this._parents);
}
function si(t) {
  return new Array(t.length);
}
function la() {
  return new H(this._enter || this._groups.map(si), this._parents);
}
function xn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
xn.prototype = {
  constructor: xn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function ca(t) {
  return function() {
    return t;
  };
}
function fa(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, l = o.length; a < l; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new xn(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function ha(t, n, e, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), h = n.length, p = o.length, c = new Array(h), f;
  for (s = 0; s < h; ++s)
    (u = n[s]) && (c[s] = f = a.call(u, u.__data__, s, n) + "", l.has(f) ? i[s] = u : l.set(f, u));
  for (s = 0; s < p; ++s)
    f = a.call(t, o[s], s, o) + "", (u = l.get(f)) ? (r[s] = u, u.__data__ = o[s], l.delete(f)) : e[s] = new xn(t, o[s]);
  for (s = 0; s < h; ++s)
    (u = n[s]) && l.get(c[s]) === u && (i[s] = u);
}
function pa(t) {
  return t.__data__;
}
function da(t, n) {
  if (!arguments.length) return Array.from(this, pa);
  var e = n ? ha : fa, r = this._parents, i = this._groups;
  typeof t != "function" && (t = ca(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var h = r[l], p = i[l], c = p.length, f = ga(t.call(h, h && h.__data__, l, r)), d = f.length, g = s[l] = new Array(d), y = a[l] = new Array(d), _ = u[l] = new Array(c);
    e(h, p, g, y, _, f, n);
    for (var M = 0, T = 0, m, v; M < d; ++M)
      if (m = g[M]) {
        for (M >= T && (T = M + 1); !(v = y[T]) && ++T < d; ) ;
        m._next = v || null;
      }
  }
  return a = new H(a, r), a._enter = s, a._exit = u, a;
}
function ga(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ya() {
  return new H(this._exit || this._groups.map(si), this._parents);
}
function ma(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function _a(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = e[u], h = r[u], p = l.length, c = s[u] = new Array(p), f, d = 0; d < p; ++d)
      (f = l[d] || h[d]) && (c[d] = f);
  for (; u < i; ++u)
    s[u] = e[u];
  return new H(s, this._parents);
}
function va() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function ba(t) {
  t || (t = wa);
  function n(p, c) {
    return p && c ? t(p.__data__, c.__data__) : !p - !c;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), l, h = 0; h < s; ++h)
      (l = a[h]) && (u[h] = l);
    u.sort(n);
  }
  return new H(i, this._parents).order();
}
function wa(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function xa() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ma() {
  return Array.from(this);
}
function $a() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Ta() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Aa() {
  return !this.node();
}
function Sa(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Ea(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Pa(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ka(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function za(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Oa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Ca(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Ia(t, n) {
  var e = In(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Pa : Ea : typeof n == "function" ? e.local ? Ca : Oa : e.local ? za : ka)(e, n));
}
function ui(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ra(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Fa(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function La(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Da(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Ra : typeof n == "function" ? La : Fa)(t, n, e ?? "")) : kt(this.node(), t);
}
function kt(t, n) {
  return t.style.getPropertyValue(n) || ui(t).getComputedStyle(t, null).getPropertyValue(n);
}
function qa(t) {
  return function() {
    delete this[t];
  };
}
function Ha(t, n) {
  return function() {
    this[t] = n;
  };
}
function Na(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Ba(t, n) {
  return arguments.length > 1 ? this.each((n == null ? qa : typeof n == "function" ? Na : Ha)(t, n)) : this.node()[t];
}
function li(t) {
  return t.trim().split(/^|\s+/);
}
function De(t) {
  return t.classList || new ci(t);
}
function ci(t) {
  this._node = t, this._names = li(t.getAttribute("class") || "");
}
ci.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function fi(t, n) {
  for (var e = De(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function hi(t, n) {
  for (var e = De(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Xa(t) {
  return function() {
    fi(this, t);
  };
}
function Ga(t) {
  return function() {
    hi(this, t);
  };
}
function Ua(t, n) {
  return function() {
    (n.apply(this, arguments) ? fi : hi)(this, t);
  };
}
function Ya(t, n) {
  var e = li(t + "");
  if (arguments.length < 2) {
    for (var r = De(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Ua : n ? Xa : Ga)(e, n));
}
function Va() {
  this.textContent = "";
}
function Ka(t) {
  return function() {
    this.textContent = t;
  };
}
function Wa(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Za(t) {
  return arguments.length ? this.each(t == null ? Va : (typeof t == "function" ? Wa : Ka)(t)) : this.node().textContent;
}
function ja() {
  this.innerHTML = "";
}
function Ja(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Qa(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ts(t) {
  return arguments.length ? this.each(t == null ? ja : (typeof t == "function" ? Qa : Ja)(t)) : this.node().innerHTML;
}
function ns() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function es() {
  return this.each(ns);
}
function rs() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function is() {
  return this.each(rs);
}
function os(t) {
  var n = typeof t == "function" ? t : ri(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function as() {
  return null;
}
function ss(t, n) {
  var e = typeof t == "function" ? t : ri(t), r = n == null ? as : typeof n == "function" ? n : Le(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function us() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function ls() {
  return this.each(us);
}
function cs() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function fs() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function hs(t) {
  return this.select(t ? fs : cs);
}
function ps(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ds(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function gs(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function ys(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function ms(t, n, e) {
  return function() {
    var r = this.__on, i, o = ds(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function _s(t, n, e) {
  var r = gs(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, h; u < l; ++u)
        for (i = 0, h = s[u]; i < o; ++i)
          if ((a = r[i]).type === h.type && a.name === h.name)
            return h.value;
    }
    return;
  }
  for (s = n ? ms : ys, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function pi(t, n, e) {
  var r = ui(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function vs(t, n) {
  return function() {
    return pi(this, t, n);
  };
}
function bs(t, n) {
  return function() {
    return pi(this, t, n.apply(this, arguments));
  };
}
function ws(t, n) {
  return this.each((typeof n == "function" ? bs : vs)(t, n));
}
function* xs() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var di = [null];
function H(t, n) {
  this._groups = t, this._parents = n;
}
function jt() {
  return new H([[document.documentElement]], di);
}
function Ms() {
  return this;
}
H.prototype = jt.prototype = {
  constructor: H,
  select: Wo,
  selectAll: Qo,
  selectChild: ra,
  selectChildren: sa,
  filter: ua,
  data: da,
  enter: la,
  exit: ya,
  join: ma,
  merge: _a,
  selection: Ms,
  order: va,
  sort: ba,
  call: xa,
  nodes: Ma,
  node: $a,
  size: Ta,
  empty: Aa,
  each: Sa,
  attr: Ia,
  style: Da,
  property: Ba,
  classed: Ya,
  text: Za,
  html: ts,
  raise: es,
  lower: is,
  append: os,
  insert: ss,
  remove: ls,
  clone: hs,
  datum: ps,
  on: _s,
  dispatch: ws,
  [Symbol.iterator]: xs
};
function O(t) {
  return typeof t == "string" ? new H([[document.querySelector(t)]], [document.documentElement]) : new H([[t]], di);
}
function $s(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function he(t, n) {
  if (t = $s(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Ts = { passive: !1 }, Gt = { capture: !0, passive: !1 };
function Jn(t) {
  t.stopImmediatePropagation();
}
function Et(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function As(t) {
  var n = t.document.documentElement, e = O(t).on("dragstart.drag", Et, Gt);
  "onselectstart" in n ? e.on("selectstart.drag", Et, Gt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Ss(t, n) {
  var e = t.document.documentElement, r = O(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Et, Gt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const un = (t) => () => t;
function pe(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: u,
  dy: l,
  dispatch: h
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: h }
  });
}
pe.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Es(t) {
  return !t.ctrlKey && !t.button;
}
function Ps() {
  return this.parentNode;
}
function ks(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function zs() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Os() {
  var t = Es, n = Ps, e = ks, r = zs, i = {}, o = Fe("start", "drag", "end"), a = 0, s, u, l, h, p = 0;
  function c(m) {
    m.on("mousedown.drag", f).filter(r).on("touchstart.drag", y).on("touchmove.drag", _, Ts).on("touchend.drag touchcancel.drag", M).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function f(m, v) {
    if (!(h || !t.call(this, m, v))) {
      var S = T(this, n.call(this, m, v), m, v, "mouse");
      S && (O(m.view).on("mousemove.drag", d, Gt).on("mouseup.drag", g, Gt), As(m.view), Jn(m), l = !1, s = m.clientX, u = m.clientY, S("start", m));
    }
  }
  function d(m) {
    if (Et(m), !l) {
      var v = m.clientX - s, S = m.clientY - u;
      l = v * v + S * S > p;
    }
    i.mouse("drag", m);
  }
  function g(m) {
    O(m.view).on("mousemove.drag mouseup.drag", null), Ss(m.view, l), Et(m), i.mouse("end", m);
  }
  function y(m, v) {
    if (t.call(this, m, v)) {
      var S = m.changedTouches, A = n.call(this, m, v), k = S.length, I, R;
      for (I = 0; I < k; ++I)
        (R = T(this, A, m, v, S[I].identifier, S[I])) && (Jn(m), R("start", m, S[I]));
    }
  }
  function _(m) {
    var v = m.changedTouches, S = v.length, A, k;
    for (A = 0; A < S; ++A)
      (k = i[v[A].identifier]) && (Et(m), k("drag", m, v[A]));
  }
  function M(m) {
    var v = m.changedTouches, S = v.length, A, k;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), A = 0; A < S; ++A)
      (k = i[v[A].identifier]) && (Jn(m), k("end", m, v[A]));
  }
  function T(m, v, S, A, k, I) {
    var R = o.copy(), w = he(I || S, v), z, P, U;
    if ((U = e.call(m, new pe("beforestart", {
      sourceEvent: S,
      target: c,
      identifier: k,
      active: a,
      x: w[0],
      y: w[1],
      dx: 0,
      dy: 0,
      dispatch: R
    }), A)) != null)
      return z = U.x - w[0] || 0, P = U.y - w[1] || 0, function an(ft, dt, Tt) {
        var B = w, Wn;
        switch (ft) {
          case "start":
            i[k] = an, Wn = a++;
            break;
          case "end":
            delete i[k], --a;
          // falls through
          case "drag":
            w = he(Tt || dt, v), Wn = a;
            break;
        }
        R.call(
          ft,
          m,
          new pe(ft, {
            sourceEvent: dt,
            subject: U,
            target: c,
            identifier: k,
            active: Wn,
            x: w[0] + z,
            y: w[1] + P,
            dx: w[0] - B[0],
            dy: w[1] - B[1],
            dispatch: R
          }),
          A
        );
      };
  }
  return c.filter = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : un(!!m), c) : t;
  }, c.container = function(m) {
    return arguments.length ? (n = typeof m == "function" ? m : un(m), c) : n;
  }, c.subject = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : un(m), c) : e;
  }, c.touchable = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : un(!!m), c) : r;
  }, c.on = function() {
    var m = o.on.apply(o, arguments);
    return m === o ? c : m;
  }, c.clickDistance = function(m) {
    return arguments.length ? (p = (m = +m) * m, c) : Math.sqrt(p);
  }, c;
}
function qe(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function gi(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Jt() {
}
var Ut = 0.7, Mn = 1 / Ut, Pt = "\\s*([+-]?\\d+)\\s*", Yt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Q = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Cs = /^#([0-9a-f]{3,8})$/, Is = new RegExp(`^rgb\\(${Pt},${Pt},${Pt}\\)$`), Rs = new RegExp(`^rgb\\(${Q},${Q},${Q}\\)$`), Fs = new RegExp(`^rgba\\(${Pt},${Pt},${Pt},${Yt}\\)$`), Ls = new RegExp(`^rgba\\(${Q},${Q},${Q},${Yt}\\)$`), Ds = new RegExp(`^hsl\\(${Yt},${Q},${Q}\\)$`), qs = new RegExp(`^hsla\\(${Yt},${Q},${Q},${Yt}\\)$`), cr = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
qe(Jt, vt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: fr,
  // Deprecated! Use color.formatHex.
  formatHex: fr,
  formatHex8: Hs,
  formatHsl: Ns,
  formatRgb: hr,
  toString: hr
});
function fr() {
  return this.rgb().formatHex();
}
function Hs() {
  return this.rgb().formatHex8();
}
function Ns() {
  return yi(this).formatHsl();
}
function hr() {
  return this.rgb().formatRgb();
}
function vt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Cs.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? pr(n) : e === 3 ? new D(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? ln(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? ln(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Is.exec(t)) ? new D(n[1], n[2], n[3], 1) : (n = Rs.exec(t)) ? new D(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Fs.exec(t)) ? ln(n[1], n[2], n[3], n[4]) : (n = Ls.exec(t)) ? ln(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Ds.exec(t)) ? yr(n[1], n[2] / 100, n[3] / 100, 1) : (n = qs.exec(t)) ? yr(n[1], n[2] / 100, n[3] / 100, n[4]) : cr.hasOwnProperty(t) ? pr(cr[t]) : t === "transparent" ? new D(NaN, NaN, NaN, 0) : null;
}
function pr(t) {
  return new D(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ln(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new D(t, n, e, r);
}
function Bs(t) {
  return t instanceof Jt || (t = vt(t)), t ? (t = t.rgb(), new D(t.r, t.g, t.b, t.opacity)) : new D();
}
function de(t, n, e, r) {
  return arguments.length === 1 ? Bs(t) : new D(t, n, e, r ?? 1);
}
function D(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
qe(D, de, gi(Jt, {
  brighter(t) {
    return t = t == null ? Mn : Math.pow(Mn, t), new D(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ut : Math.pow(Ut, t), new D(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new D(_t(this.r), _t(this.g), _t(this.b), $n(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: dr,
  // Deprecated! Use color.formatHex.
  formatHex: dr,
  formatHex8: Xs,
  formatRgb: gr,
  toString: gr
}));
function dr() {
  return `#${yt(this.r)}${yt(this.g)}${yt(this.b)}`;
}
function Xs() {
  return `#${yt(this.r)}${yt(this.g)}${yt(this.b)}${yt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function gr() {
  const t = $n(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${_t(this.r)}, ${_t(this.g)}, ${_t(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function $n(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function _t(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function yt(t) {
  return t = _t(t), (t < 16 ? "0" : "") + t.toString(16);
}
function yr(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new K(t, n, e, r);
}
function yi(t) {
  if (t instanceof K) return new K(t.h, t.s, t.l, t.opacity);
  if (t instanceof Jt || (t = vt(t)), !t) return new K();
  if (t instanceof K) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new K(a, s, u, t.opacity);
}
function Gs(t, n, e, r) {
  return arguments.length === 1 ? yi(t) : new K(t, n, e, r ?? 1);
}
function K(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
qe(K, Gs, gi(Jt, {
  brighter(t) {
    return t = t == null ? Mn : Math.pow(Mn, t), new K(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ut : Math.pow(Ut, t), new K(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new D(
      Qn(t >= 240 ? t - 240 : t + 120, i, r),
      Qn(t, i, r),
      Qn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new K(mr(this.h), cn(this.s), cn(this.l), $n(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = $n(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${mr(this.h)}, ${cn(this.s) * 100}%, ${cn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function mr(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function cn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Qn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const He = (t) => () => t;
function Us(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Ys(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Vs(t) {
  return (t = +t) == 1 ? mi : function(n, e) {
    return e - n ? Ys(n, e, t) : He(isNaN(n) ? e : n);
  };
}
function mi(t, n) {
  var e = n - t;
  return e ? Us(t, e) : He(isNaN(t) ? n : t);
}
const Tn = function t(n) {
  var e = Vs(n);
  function r(i, o) {
    var a = e((i = de(i)).r, (o = de(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), l = mi(i.opacity, o.opacity);
    return function(h) {
      return i.r = a(h), i.g = s(h), i.b = u(h), i.opacity = l(h), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Ks(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Ws(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Zs(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = Ne(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function js(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function V(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Js(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Ne(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var ge = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, te = new RegExp(ge.source, "g");
function Qs(t) {
  return function() {
    return t;
  };
}
function tu(t) {
  return function(n) {
    return t(n) + "";
  };
}
function _i(t, n) {
  var e = ge.lastIndex = te.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = ge.exec(t)) && (i = te.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: V(r, i) })), e = te.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? tu(u[0].x) : Qs(n) : (n = u.length, function(l) {
    for (var h = 0, p; h < n; ++h) s[(p = u[h]).i] = p.x(l);
    return s.join("");
  });
}
function Ne(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? He(n) : (e === "number" ? V : e === "string" ? (r = vt(n)) ? (n = r, Tn) : _i : n instanceof vt ? Tn : n instanceof Date ? js : Ws(n) ? Ks : Array.isArray(n) ? Zs : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Js : V)(t, n);
}
function nu(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var _r = 180 / Math.PI, ye = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function vi(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * _r,
    skewX: Math.atan(u) * _r,
    scaleX: a,
    scaleY: s
  };
}
var fn;
function eu(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? ye : vi(n.a, n.b, n.c, n.d, n.e, n.f);
}
function ru(t) {
  return t == null || (fn || (fn = document.createElementNS("http://www.w3.org/2000/svg", "g")), fn.setAttribute("transform", t), !(t = fn.transform.baseVal.consolidate())) ? ye : (t = t.matrix, vi(t.a, t.b, t.c, t.d, t.e, t.f));
}
function bi(t, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, h, p, c, f, d) {
    if (l !== p || h !== c) {
      var g = f.push("translate(", null, n, null, e);
      d.push({ i: g - 4, x: V(l, p) }, { i: g - 2, x: V(h, c) });
    } else (p || c) && f.push("translate(" + p + n + c + e);
  }
  function a(l, h, p, c) {
    l !== h ? (l - h > 180 ? h += 360 : h - l > 180 && (l += 360), c.push({ i: p.push(i(p) + "rotate(", null, r) - 2, x: V(l, h) })) : h && p.push(i(p) + "rotate(" + h + r);
  }
  function s(l, h, p, c) {
    l !== h ? c.push({ i: p.push(i(p) + "skewX(", null, r) - 2, x: V(l, h) }) : h && p.push(i(p) + "skewX(" + h + r);
  }
  function u(l, h, p, c, f, d) {
    if (l !== p || h !== c) {
      var g = f.push(i(f) + "scale(", null, ",", null, ")");
      d.push({ i: g - 4, x: V(l, p) }, { i: g - 2, x: V(h, c) });
    } else (p !== 1 || c !== 1) && f.push(i(f) + "scale(" + p + "," + c + ")");
  }
  return function(l, h) {
    var p = [], c = [];
    return l = t(l), h = t(h), o(l.translateX, l.translateY, h.translateX, h.translateY, p, c), a(l.rotate, h.rotate, p, c), s(l.skewX, h.skewX, p, c), u(l.scaleX, l.scaleY, h.scaleX, h.scaleY, p, c), l = h = null, function(f) {
      for (var d = -1, g = c.length, y; ++d < g; ) p[(y = c[d]).i] = y.x(f);
      return p.join("");
    };
  };
}
var iu = bi(eu, "px, ", "px)", "deg)"), ou = bi(ru, ", ", ")", ")"), zt = 0, Ht = 0, Lt = 0, wi = 1e3, An, Nt, Sn = 0, bt = 0, Rn = 0, Vt = typeof performance == "object" && performance.now ? performance : Date, xi = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Fn() {
  return bt || (xi(au), bt = Vt.now() + Rn);
}
function au() {
  bt = 0;
}
function Kt() {
  this._call = this._time = this._next = null;
}
Kt.prototype = Mi.prototype = {
  constructor: Kt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Fn() : +e) + (n == null ? 0 : +n), !this._next && Nt !== this && (Nt ? Nt._next = this : An = this, Nt = this), this._call = t, this._time = e, me();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, me());
  }
};
function Mi(t, n, e) {
  var r = new Kt();
  return r.restart(t, n, e), r;
}
function su() {
  Fn(), ++zt;
  for (var t = An, n; t; )
    (n = bt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --zt;
}
function vr() {
  bt = (Sn = Vt.now()) + Rn, zt = Ht = 0;
  try {
    su();
  } finally {
    zt = 0, lu(), bt = 0;
  }
}
function uu() {
  var t = Vt.now(), n = t - Sn;
  n > wi && (Rn -= n, Sn = t);
}
function lu() {
  for (var t, n = An, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : An = e);
  Nt = t, me(r);
}
function me(t) {
  if (!zt) {
    Ht && (Ht = clearTimeout(Ht));
    var n = t - bt;
    n > 24 ? (t < 1 / 0 && (Ht = setTimeout(vr, t - Vt.now() - Rn)), Lt && (Lt = clearInterval(Lt))) : (Lt || (Sn = Vt.now(), Lt = setInterval(uu, wi)), zt = 1, xi(vr));
  }
}
function br(t, n, e) {
  var r = new Kt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function cu(t, n, e) {
  var r = new Kt(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? Fn() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += a, s), o(l);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var fu = Fe("start", "end", "cancel", "interrupt"), hu = [], $i = 0, wr = 1, _e = 2, _n = 3, xr = 4, ve = 5, vn = 6;
function Ln(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  pu(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: fu,
    tween: hu,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: $i
  });
}
function Be(t, n) {
  var e = Z(t, n);
  if (e.state > $i) throw new Error("too late; already scheduled");
  return e;
}
function nt(t, n) {
  var e = Z(t, n);
  if (e.state > _n) throw new Error("too late; already running");
  return e;
}
function Z(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function pu(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Mi(o, 0, e.time);
  function o(l) {
    e.state = wr, e.timer.restart(a, e.delay, e.time), e.delay <= l && a(l - e.delay);
  }
  function a(l) {
    var h, p, c, f;
    if (e.state !== wr) return u();
    for (h in r)
      if (f = r[h], f.name === e.name) {
        if (f.state === _n) return br(a);
        f.state === xr ? (f.state = vn, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete r[h]) : +h < n && (f.state = vn, f.timer.stop(), f.on.call("cancel", t, t.__data__, f.index, f.group), delete r[h]);
      }
    if (br(function() {
      e.state === _n && (e.state = xr, e.timer.restart(s, e.delay, e.time), s(l));
    }), e.state = _e, e.on.call("start", t, t.__data__, e.index, e.group), e.state === _e) {
      for (e.state = _n, i = new Array(c = e.tween.length), h = 0, p = -1; h < c; ++h)
        (f = e.tween[h].value.call(t, t.__data__, e.index, e.group)) && (i[++p] = f);
      i.length = p + 1;
    }
  }
  function s(l) {
    for (var h = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = ve, 1), p = -1, c = i.length; ++p < c; )
      i[p].call(t, h);
    e.state === ve && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = vn, e.timer.stop(), delete r[n];
    for (var l in r) return;
    delete t.__transition;
  }
}
function du(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > _e && r.state < ve, r.state = vn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function gu(t) {
  return this.each(function() {
    du(this, t);
  });
}
function yu(t, n) {
  var e, r;
  return function() {
    var i = nt(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function mu(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = nt(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    o.tween = i;
  };
}
function _u(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Z(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? yu : mu)(e, t, n));
}
function Xe(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = nt(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return Z(i, r).value[n];
  };
}
function Ti(t, n) {
  var e;
  return (typeof n == "number" ? V : n instanceof vt ? Tn : (e = vt(n)) ? (n = e, Tn) : _i)(t, n);
}
function vu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function bu(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function wu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function xu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Mu(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function $u(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Tu(t, n) {
  var e = In(t), r = e === "transform" ? ou : Ti;
  return this.attrTween(t, typeof n == "function" ? (e.local ? $u : Mu)(e, r, Xe(this, "attr." + t, n)) : n == null ? (e.local ? bu : vu)(e) : (e.local ? xu : wu)(e, r, n));
}
function Au(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Su(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Eu(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Su(t, o)), e;
  }
  return i._value = n, i;
}
function Pu(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Au(t, o)), e;
  }
  return i._value = n, i;
}
function ku(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = In(t);
  return this.tween(e, (r.local ? Eu : Pu)(r, n));
}
function zu(t, n) {
  return function() {
    Be(this, t).delay = +n.apply(this, arguments);
  };
}
function Ou(t, n) {
  return n = +n, function() {
    Be(this, t).delay = n;
  };
}
function Cu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? zu : Ou)(n, t)) : Z(this.node(), n).delay;
}
function Iu(t, n) {
  return function() {
    nt(this, t).duration = +n.apply(this, arguments);
  };
}
function Ru(t, n) {
  return n = +n, function() {
    nt(this, t).duration = n;
  };
}
function Fu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Iu : Ru)(n, t)) : Z(this.node(), n).duration;
}
function Lu(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    nt(this, t).ease = n;
  };
}
function Du(t) {
  var n = this._id;
  return arguments.length ? this.each(Lu(n, t)) : Z(this.node(), n).ease;
}
function qu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    nt(this, t).ease = e;
  };
}
function Hu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(qu(this._id, t));
}
function Nu(t) {
  typeof t != "function" && (t = oi(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new at(r, this._parents, this._name, this._id);
}
function Bu(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], l = e[s], h = u.length, p = a[s] = new Array(h), c, f = 0; f < h; ++f)
      (c = u[f] || l[f]) && (p[f] = c);
  for (; s < r; ++s)
    a[s] = n[s];
  return new at(a, this._parents, this._name, this._id);
}
function Xu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Gu(t, n, e) {
  var r, i, o = Xu(n) ? Be : nt;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function Uu(t, n) {
  var e = this._id;
  return arguments.length < 2 ? Z(this.node(), e).on.on(t) : this.each(Gu(e, t, n));
}
function Yu(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Vu() {
  return this.on("end.remove", Yu(this._id));
}
function Ku(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Le(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), h, p, c = 0; c < u; ++c)
      (h = s[c]) && (p = t.call(h, h.__data__, c, s)) && ("__data__" in h && (p.__data__ = h.__data__), l[c] = p, Ln(l[c], n, e, c, l, Z(h, e)));
  return new at(o, this._parents, n, e);
}
function Wu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ii(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, h, p = 0; p < l; ++p)
      if (h = u[p]) {
        for (var c = t.call(h, h.__data__, p, u), f, d = Z(h, e), g = 0, y = c.length; g < y; ++g)
          (f = c[g]) && Ln(f, n, e, g, c, d);
        o.push(c), a.push(h);
      }
  return new at(o, a, n, e);
}
var Zu = jt.prototype.constructor;
function ju() {
  return new Zu(this._groups, this._parents);
}
function Ju(t, n) {
  var e, r, i;
  return function() {
    var o = kt(this, t), a = (this.style.removeProperty(t), kt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function Ai(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Qu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = kt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function tl(t, n, e) {
  var r, i, o;
  return function() {
    var a = kt(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), kt(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function nl(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = nt(this, t), l = u.on, h = u.value[o] == null ? s || (s = Ai(n)) : void 0;
    (l !== e || i !== h) && (r = (e = l).copy()).on(a, i = h), u.on = r;
  };
}
function el(t, n, e) {
  var r = (t += "") == "transform" ? iu : Ti;
  return n == null ? this.styleTween(t, Ju(t, r)).on("end.style." + t, Ai(t)) : typeof n == "function" ? this.styleTween(t, tl(t, r, Xe(this, "style." + t, n))).each(nl(this._id, t)) : this.styleTween(t, Qu(t, r, n), e).on("end.style." + t, null);
}
function rl(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function il(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && rl(t, a, e)), r;
  }
  return o._value = n, o;
}
function ol(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, il(t, n, e ?? ""));
}
function al(t) {
  return function() {
    this.textContent = t;
  };
}
function sl(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function ul(t) {
  return this.tween("text", typeof t == "function" ? sl(Xe(this, "text", t)) : al(t == null ? "" : t + ""));
}
function ll(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function cl(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && ll(i)), n;
  }
  return r._value = t, r;
}
function fl(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, cl(t));
}
function hl() {
  for (var t = this._name, n = this._id, e = Si(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var h = Z(u, n);
        Ln(u, t, e, l, a, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new at(r, this._parents, t, e);
}
function pl() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = nt(this, r), h = l.on;
      h !== t && (n = (t = h).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), l.on = n;
    }), i === 0 && o();
  });
}
var dl = 0;
function at(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Si() {
  return ++dl;
}
var et = jt.prototype;
at.prototype = {
  constructor: at,
  select: Ku,
  selectAll: Wu,
  selectChild: et.selectChild,
  selectChildren: et.selectChildren,
  filter: Nu,
  merge: Bu,
  selection: ju,
  transition: hl,
  call: et.call,
  nodes: et.nodes,
  node: et.node,
  size: et.size,
  empty: et.empty,
  each: et.each,
  on: Uu,
  attr: Tu,
  attrTween: ku,
  style: el,
  styleTween: ol,
  text: ul,
  textTween: fl,
  remove: Vu,
  tween: _u,
  delay: Cu,
  duration: Fu,
  ease: Du,
  easeVarying: Hu,
  end: pl,
  [Symbol.iterator]: et[Symbol.iterator]
};
function gl(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var yl = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: gl
};
function ml(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function _l(t) {
  var n, e;
  t instanceof at ? (n = t._id, t = t._name) : (n = Si(), (e = yl).time = Fn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && Ln(u, t, n, l, a, e || ml(u, n));
  return new at(r, this._parents, t, n);
}
jt.prototype.interrupt = gu;
jt.prototype.transition = _l;
const be = Math.PI, we = 2 * be, gt = 1e-6, vl = we - gt;
function Ei(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function bl(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return Ei;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Ge {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? Ei : bl(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, u = r - n, l = i - e, h = a - n, p = s - e, c = h * h + p * p;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (c > gt) if (!(Math.abs(p * u - l * h) > gt) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let f = r - a, d = i - s, g = u * u + l * l, y = f * f + d * d, _ = Math.sqrt(g), M = Math.sqrt(c), T = o * Math.tan((be - Math.acos((g + c - y) / (2 * _ * M))) / 2), m = T / M, v = T / _;
      Math.abs(m - 1) > gt && this._append`L${n + m * h},${e + m * p}`, this._append`A${o},${o},0,0,${+(p * f > h * d)},${this._x1 = n + v * u},${this._y1 = e + v * l}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = n + s, h = e + u, p = 1 ^ a, c = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${h}` : (Math.abs(this._x1 - l) > gt || Math.abs(this._y1 - h) > gt) && this._append`L${l},${h}`, r && (c < 0 && (c = c % we + we), c > vl ? this._append`A${r},${r},0,1,${p},${n - s},${e - u}A${r},${r},0,1,${p},${this._x1 = l},${this._y1 = h}` : c > gt && this._append`A${r},${r},0,${+(c >= be)},${p},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function j() {
  return new Ge();
}
j.prototype = Ge.prototype;
function wl(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function En(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Ot(t) {
  return t = En(Math.abs(t)), t ? t[1] : NaN;
}
function xl(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Ml(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var $l = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Pn(t) {
  if (!(n = $l.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Ue({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
Pn.prototype = Ue.prototype;
function Ue(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ue.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Tl(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Pi;
function Al(t, n) {
  var e = En(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (Pi = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + En(t, Math.max(0, n + o - 1))[0];
}
function Mr(t, n) {
  var e = En(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const $r = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: wl,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Mr(t * 100, n),
  r: Mr,
  s: Al,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Tr(t) {
  return t;
}
var Ar = Array.prototype.map, Sr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Sl(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Tr : xl(Ar.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Tr : Ml(Ar.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(p) {
    p = Pn(p);
    var c = p.fill, f = p.align, d = p.sign, g = p.symbol, y = p.zero, _ = p.width, M = p.comma, T = p.precision, m = p.trim, v = p.type;
    v === "n" ? (M = !0, v = "g") : $r[v] || (T === void 0 && (T = 12), m = !0, v = "g"), (y || c === "0" && f === "=") && (y = !0, c = "0", f = "=");
    var S = g === "$" ? e : g === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", A = g === "$" ? r : /[%p]/.test(v) ? a : "", k = $r[v], I = /[defgprs%]/.test(v);
    T = T === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, T)) : Math.max(0, Math.min(20, T));
    function R(w) {
      var z = S, P = A, U, an, ft;
      if (v === "c")
        P = k(w) + P, w = "";
      else {
        w = +w;
        var dt = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? u : k(Math.abs(w), T), m && (w = Tl(w)), dt && +w == 0 && d !== "+" && (dt = !1), z = (dt ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + z, P = (v === "s" ? Sr[8 + Pi / 3] : "") + P + (dt && d === "(" ? ")" : ""), I) {
          for (U = -1, an = w.length; ++U < an; )
            if (ft = w.charCodeAt(U), 48 > ft || ft > 57) {
              P = (ft === 46 ? i + w.slice(U + 1) : w.slice(U)) + P, w = w.slice(0, U);
              break;
            }
        }
      }
      M && !y && (w = n(w, 1 / 0));
      var Tt = z.length + w.length + P.length, B = Tt < _ ? new Array(_ - Tt + 1).join(c) : "";
      switch (M && y && (w = n(B + w, B.length ? _ - P.length : 1 / 0), B = ""), f) {
        case "<":
          w = z + w + P + B;
          break;
        case "=":
          w = z + B + w + P;
          break;
        case "^":
          w = B.slice(0, Tt = B.length >> 1) + z + w + P + B.slice(Tt);
          break;
        default:
          w = B + z + w + P;
          break;
      }
      return o(w);
    }
    return R.toString = function() {
      return p + "";
    }, R;
  }
  function h(p, c) {
    var f = l((p = Pn(p), p.type = "f", p)), d = Math.max(-8, Math.min(8, Math.floor(Ot(c) / 3))) * 3, g = Math.pow(10, -d), y = Sr[8 + d / 3];
    return function(_) {
      return f(g * _) + y;
    };
  }
  return {
    format: l,
    formatPrefix: h
  };
}
var hn, Dn, ki;
El({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function El(t) {
  return hn = Sl(t), Dn = hn.format, ki = hn.formatPrefix, hn;
}
function Pl(t) {
  return Math.max(0, -Ot(Math.abs(t)));
}
function kl(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ot(n) / 3))) * 3 - Ot(Math.abs(t)));
}
function zl(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Ot(n) - Ot(t)) + 1;
}
function Ol(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Cl(t) {
  return function() {
    return t;
  };
}
function Il(t) {
  return +t;
}
var Er = [0, 1];
function St(t) {
  return t;
}
function xe(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Cl(isNaN(n) ? NaN : 0.5);
}
function Rl(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Fl(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = xe(i, r), o = e(a, o)) : (r = xe(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function Ll(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = xe(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = Eo(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function Dl(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function ql() {
  var t = Er, n = Er, e = Ne, r, i, o, a = St, s, u, l;
  function h() {
    var c = Math.min(t.length, n.length);
    return a !== St && (a = Rl(t[0], t[c - 1])), s = c > 2 ? Ll : Fl, u = l = null, p;
  }
  function p(c) {
    return c == null || isNaN(c = +c) ? o : (u || (u = s(t.map(r), n, e)))(r(a(c)));
  }
  return p.invert = function(c) {
    return a(i((l || (l = s(n, t.map(r), V)))(c)));
  }, p.domain = function(c) {
    return arguments.length ? (t = Array.from(c, Il), h()) : t.slice();
  }, p.range = function(c) {
    return arguments.length ? (n = Array.from(c), h()) : n.slice();
  }, p.rangeRound = function(c) {
    return n = Array.from(c), e = nu, h();
  }, p.clamp = function(c) {
    return arguments.length ? (a = c ? !0 : St, h()) : a !== St;
  }, p.interpolate = function(c) {
    return arguments.length ? (e = c, h()) : e;
  }, p.unknown = function(c) {
    return arguments.length ? (o = c, p) : o;
  }, function(c, f) {
    return r = c, i = f, h();
  };
}
function Hl() {
  return ql()(St, St);
}
function Nl(t, n, e, r) {
  var i = Co(t, n, e), o;
  switch (r = Pn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = kl(i, a)) && (r.precision = o), ki(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = zl(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Pl(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Dn(r);
}
function Bl(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Oo(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Nl(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, h = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); h-- > 0; ) {
      if (l = le(a, s, e), l === u)
        return r[i] = a, r[o] = s, n(r);
      if (l > 0)
        a = Math.floor(a / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        a = Math.ceil(a * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function G() {
  var t = Hl();
  return t.copy = function() {
    return Dl(t, G());
  }, Ol.apply(t, arguments), Bl(t);
}
function At(t) {
  return function() {
    return t;
  };
}
function Xl(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length) return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new Ge(n);
}
function Gl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function zi(t) {
  this._context = t;
}
zi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, n);
        break;
    }
  }
};
function Ul(t) {
  return new zi(t);
}
function Yl(t) {
  return t[0];
}
function Vl(t) {
  return t[1];
}
function Oi(t, n) {
  var e = At(!0), r = null, i = Ul, o = null, a = Xl(s);
  t = typeof t == "function" ? t : t === void 0 ? Yl : At(t), n = typeof n == "function" ? n : n === void 0 ? Vl : At(n);
  function s(u) {
    var l, h = (u = Gl(u)).length, p, c = !1, f;
    for (r == null && (o = i(f = a())), l = 0; l <= h; ++l)
      !(l < h && e(p = u[l], l, u)) === c && ((c = !c) ? o.lineStart() : o.lineEnd()), c && o.point(+t(p, l, u), +n(p, l, u));
    if (f) return o = null, f + "" || null;
  }
  return s.x = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : At(+u), s) : t;
  }, s.y = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : At(+u), s) : n;
  }, s.defined = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : At(!!u), s) : e;
  }, s.curve = function(u) {
    return arguments.length ? (i = u, r != null && (o = i(r)), s) : i;
  }, s.context = function(u) {
    return arguments.length ? (u == null ? r = o = null : o = i(r = u), s) : r;
  }, s;
}
function Bt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Bt.prototype = {
  constructor: Bt,
  scale: function(t) {
    return t === 1 ? this : new Bt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Bt(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Bt.prototype;
var Ci = typeof global == "object" && global && global.Object === Object && global, Kl = typeof self == "object" && self && self.Object === Object && self, ut = Ci || Kl || Function("return this")(), tt = ut.Symbol, Ii = Object.prototype, Wl = Ii.hasOwnProperty, Zl = Ii.toString, Dt = tt ? tt.toStringTag : void 0;
function jl(t) {
  var n = Wl.call(t, Dt), e = t[Dt];
  try {
    t[Dt] = void 0;
    var r = !0;
  } catch {
  }
  var i = Zl.call(t);
  return r && (n ? t[Dt] = e : delete t[Dt]), i;
}
var Jl = Object.prototype, Ql = Jl.toString;
function tc(t) {
  return Ql.call(t);
}
var nc = "[object Null]", ec = "[object Undefined]", Pr = tt ? tt.toStringTag : void 0;
function Rt(t) {
  return t == null ? t === void 0 ? ec : nc : Pr && Pr in Object(t) ? jl(t) : tc(t);
}
function wt(t) {
  return t != null && typeof t == "object";
}
var rc = "[object Symbol]";
function Qt(t) {
  return typeof t == "symbol" || wt(t) && Rt(t) == rc;
}
function tn(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var N = Array.isArray, kr = tt ? tt.prototype : void 0, zr = kr ? kr.toString : void 0;
function Ri(t) {
  if (typeof t == "string")
    return t;
  if (N(t))
    return tn(t, Ri) + "";
  if (Qt(t))
    return zr ? zr.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var ic = /\s/;
function oc(t) {
  for (var n = t.length; n-- && ic.test(t.charAt(n)); )
    ;
  return n;
}
var ac = /^\s+/;
function sc(t) {
  return t && t.slice(0, oc(t) + 1).replace(ac, "");
}
function st(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var Or = NaN, uc = /^[-+]0x[0-9a-f]+$/i, lc = /^0b[01]+$/i, cc = /^0o[0-7]+$/i, fc = parseInt;
function hc(t) {
  if (typeof t == "number")
    return t;
  if (Qt(t))
    return Or;
  if (st(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = st(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = sc(t);
  var e = lc.test(t);
  return e || cc.test(t) ? fc(t.slice(2), e ? 2 : 8) : uc.test(t) ? Or : +t;
}
var pc = 1 / 0, dc = 17976931348623157e292;
function ne(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = hc(t), t === pc || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * dc;
  }
  return t === t ? t : 0;
}
function nn(t) {
  return t;
}
var gc = "[object AsyncFunction]", yc = "[object Function]", mc = "[object GeneratorFunction]", _c = "[object Proxy]";
function Fi(t) {
  if (!st(t))
    return !1;
  var n = Rt(t);
  return n == yc || n == mc || n == gc || n == _c;
}
var ee = ut["__core-js_shared__"], Cr = function() {
  var t = /[^.]+$/.exec(ee && ee.keys && ee.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function vc(t) {
  return !!Cr && Cr in t;
}
var bc = Function.prototype, wc = bc.toString;
function Mt(t) {
  if (t != null) {
    try {
      return wc.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var xc = /[\\^$.*+?()[\]{}|]/g, Mc = /^\[object .+?Constructor\]$/, $c = Function.prototype, Tc = Object.prototype, Ac = $c.toString, Sc = Tc.hasOwnProperty, Ec = RegExp(
  "^" + Ac.call(Sc).replace(xc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Pc(t) {
  if (!st(t) || vc(t))
    return !1;
  var n = Fi(t) ? Ec : Mc;
  return n.test(Mt(t));
}
function kc(t, n) {
  return t == null ? void 0 : t[n];
}
function $t(t, n) {
  var e = kc(t, n);
  return Pc(e) ? e : void 0;
}
var Me = $t(ut, "WeakMap");
function zc(t, n, e) {
  switch (e.length) {
    case 0:
      return t.call(n);
    case 1:
      return t.call(n, e[0]);
    case 2:
      return t.call(n, e[0], e[1]);
    case 3:
      return t.call(n, e[0], e[1], e[2]);
  }
  return t.apply(n, e);
}
var Oc = 800, Cc = 16, Ic = Date.now;
function Rc(t) {
  var n = 0, e = 0;
  return function() {
    var r = Ic(), i = Cc - (r - e);
    if (e = r, i > 0) {
      if (++n >= Oc)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function Fc(t) {
  return function() {
    return t;
  };
}
var kn = function() {
  try {
    var t = $t(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Lc = kn ? function(t, n) {
  return kn(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Fc(n),
    writable: !0
  });
} : nn, Dc = Rc(Lc);
function qc(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var Hc = 9007199254740991, Nc = /^(?:0|[1-9]\d*)$/;
function qn(t, n) {
  var e = typeof t;
  return n = n ?? Hc, !!n && (e == "number" || e != "symbol" && Nc.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Bc(t, n, e) {
  n == "__proto__" && kn ? kn(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function Hn(t, n) {
  return t === n || t !== t && n !== n;
}
var Xc = Object.prototype, Gc = Xc.hasOwnProperty;
function Uc(t, n, e) {
  var r = t[n];
  (!(Gc.call(t, n) && Hn(r, e)) || e === void 0 && !(n in t)) && Bc(t, n, e);
}
var Ir = Math.max;
function Yc(t, n, e) {
  return n = Ir(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, o = Ir(r.length - n, 0), a = Array(o); ++i < o; )
      a[i] = r[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = r[i];
    return s[n] = e(a), zc(t, this, s);
  };
}
function Vc(t, n) {
  return Dc(Yc(t, n, nn), t + "");
}
var Kc = 9007199254740991;
function Ye(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Kc;
}
function Ft(t) {
  return t != null && Ye(t.length) && !Fi(t);
}
function Wc(t, n, e) {
  if (!st(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Ft(e) && qn(n, e.length) : r == "string" && n in e) ? Hn(e[n], t) : !1;
}
var Zc = Object.prototype;
function Li(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || Zc;
  return t === e;
}
function Di(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var jc = "[object Arguments]";
function Rr(t) {
  return wt(t) && Rt(t) == jc;
}
var qi = Object.prototype, Jc = qi.hasOwnProperty, Qc = qi.propertyIsEnumerable, Ve = Rr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Rr : function(t) {
  return wt(t) && Jc.call(t, "callee") && !Qc.call(t, "callee");
};
function tf() {
  return !1;
}
var Hi = typeof exports == "object" && exports && !exports.nodeType && exports, Fr = Hi && typeof module == "object" && module && !module.nodeType && module, nf = Fr && Fr.exports === Hi, Lr = nf ? ut.Buffer : void 0, ef = Lr ? Lr.isBuffer : void 0, $e = ef || tf, rf = "[object Arguments]", of = "[object Array]", af = "[object Boolean]", sf = "[object Date]", uf = "[object Error]", lf = "[object Function]", cf = "[object Map]", ff = "[object Number]", hf = "[object Object]", pf = "[object RegExp]", df = "[object Set]", gf = "[object String]", yf = "[object WeakMap]", mf = "[object ArrayBuffer]", _f = "[object DataView]", vf = "[object Float32Array]", bf = "[object Float64Array]", wf = "[object Int8Array]", xf = "[object Int16Array]", Mf = "[object Int32Array]", $f = "[object Uint8Array]", Tf = "[object Uint8ClampedArray]", Af = "[object Uint16Array]", Sf = "[object Uint32Array]", E = {};
E[vf] = E[bf] = E[wf] = E[xf] = E[Mf] = E[$f] = E[Tf] = E[Af] = E[Sf] = !0;
E[rf] = E[of] = E[mf] = E[af] = E[_f] = E[sf] = E[uf] = E[lf] = E[cf] = E[ff] = E[hf] = E[pf] = E[df] = E[gf] = E[yf] = !1;
function Ef(t) {
  return wt(t) && Ye(t.length) && !!E[Rt(t)];
}
function Pf(t) {
  return function(n) {
    return t(n);
  };
}
var Ni = typeof exports == "object" && exports && !exports.nodeType && exports, Xt = Ni && typeof module == "object" && module && !module.nodeType && module, kf = Xt && Xt.exports === Ni, re = kf && Ci.process, Dr = function() {
  try {
    var t = Xt && Xt.require && Xt.require("util").types;
    return t || re && re.binding && re.binding("util");
  } catch {
  }
}(), qr = Dr && Dr.isTypedArray, Bi = qr ? Pf(qr) : Ef, zf = Object.prototype, Of = zf.hasOwnProperty;
function Xi(t, n) {
  var e = N(t), r = !e && Ve(t), i = !e && !r && $e(t), o = !e && !r && !i && Bi(t), a = e || r || i || o, s = a ? Di(t.length, String) : [], u = s.length;
  for (var l in t)
    (n || Of.call(t, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    qn(l, u))) && s.push(l);
  return s;
}
function Gi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Cf = Gi(Object.keys, Object), If = Object.prototype, Rf = If.hasOwnProperty;
function Ff(t) {
  if (!Li(t))
    return Cf(t);
  var n = [];
  for (var e in Object(t))
    Rf.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Nn(t) {
  return Ft(t) ? Xi(t) : Ff(t);
}
function Lf(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var Df = Object.prototype, qf = Df.hasOwnProperty;
function Hf(t) {
  if (!st(t))
    return Lf(t);
  var n = Li(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !qf.call(t, r)) || e.push(r);
  return e;
}
function Nf(t) {
  return Ft(t) ? Xi(t, !0) : Hf(t);
}
var Bf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Xf = /^\w*$/;
function Ke(t, n) {
  if (N(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Qt(t) ? !0 : Xf.test(t) || !Bf.test(t) || n != null && t in Object(n);
}
var Wt = $t(Object, "create");
function Gf() {
  this.__data__ = Wt ? Wt(null) : {}, this.size = 0;
}
function Uf(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Yf = "__lodash_hash_undefined__", Vf = Object.prototype, Kf = Vf.hasOwnProperty;
function Wf(t) {
  var n = this.__data__;
  if (Wt) {
    var e = n[t];
    return e === Yf ? void 0 : e;
  }
  return Kf.call(n, t) ? n[t] : void 0;
}
var Zf = Object.prototype, jf = Zf.hasOwnProperty;
function Jf(t) {
  var n = this.__data__;
  return Wt ? n[t] !== void 0 : jf.call(n, t);
}
var Qf = "__lodash_hash_undefined__";
function th(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Wt && n === void 0 ? Qf : n, this;
}
function xt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
xt.prototype.clear = Gf;
xt.prototype.delete = Uf;
xt.prototype.get = Wf;
xt.prototype.has = Jf;
xt.prototype.set = th;
function nh() {
  this.__data__ = [], this.size = 0;
}
function Bn(t, n) {
  for (var e = t.length; e--; )
    if (Hn(t[e][0], n))
      return e;
  return -1;
}
var eh = Array.prototype, rh = eh.splice;
function ih(t) {
  var n = this.__data__, e = Bn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : rh.call(n, e, 1), --this.size, !0;
}
function oh(t) {
  var n = this.__data__, e = Bn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function ah(t) {
  return Bn(this.__data__, t) > -1;
}
function sh(t, n) {
  var e = this.__data__, r = Bn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function lt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
lt.prototype.clear = nh;
lt.prototype.delete = ih;
lt.prototype.get = oh;
lt.prototype.has = ah;
lt.prototype.set = sh;
var Zt = $t(ut, "Map");
function uh() {
  this.size = 0, this.__data__ = {
    hash: new xt(),
    map: new (Zt || lt)(),
    string: new xt()
  };
}
function lh(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Xn(t, n) {
  var e = t.__data__;
  return lh(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function ch(t) {
  var n = Xn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function fh(t) {
  return Xn(this, t).get(t);
}
function hh(t) {
  return Xn(this, t).has(t);
}
function ph(t, n) {
  var e = Xn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function ct(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
ct.prototype.clear = uh;
ct.prototype.delete = ch;
ct.prototype.get = fh;
ct.prototype.has = hh;
ct.prototype.set = ph;
var dh = "Expected a function";
function We(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(dh);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (We.Cache || ct)(), e;
}
We.Cache = ct;
var gh = 500;
function yh(t) {
  var n = We(t, function(r) {
    return e.size === gh && e.clear(), r;
  }), e = n.cache;
  return n;
}
var mh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _h = /\\(\\)?/g, vh = yh(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(mh, function(e, r, i, o) {
    n.push(i ? o.replace(_h, "$1") : r || e);
  }), n;
});
function Gn(t) {
  return t == null ? "" : Ri(t);
}
function Un(t, n) {
  return N(t) ? t : Ke(t, n) ? [t] : vh(Gn(t));
}
function en(t) {
  if (typeof t == "string" || Qt(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Ze(t, n) {
  n = Un(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[en(n[e++])];
  return e && e == r ? t : void 0;
}
function bh(t, n, e) {
  var r = t == null ? void 0 : Ze(t, n);
  return r === void 0 ? e : r;
}
function je(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Hr = tt ? tt.isConcatSpreadable : void 0;
function wh(t) {
  return N(t) || Ve(t) || !!(Hr && t && t[Hr]);
}
function xh(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = wh), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? je(i, s) : i[i.length] = s;
  }
  return i;
}
function Mh(t) {
  var n = t == null ? 0 : t.length;
  return n ? xh(t) : [];
}
var $h = Gi(Object.getPrototypeOf, Object);
function Th(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function Ah(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, Th(t, n, e);
}
var Sh = "\\ud800-\\udfff", Eh = "\\u0300-\\u036f", Ph = "\\ufe20-\\ufe2f", kh = "\\u20d0-\\u20ff", zh = Eh + Ph + kh, Oh = "\\ufe0e\\ufe0f", Ch = "\\u200d", Ih = RegExp("[" + Ch + Sh + zh + Oh + "]");
function Ui(t) {
  return Ih.test(t);
}
function Rh(t) {
  return t.split("");
}
var Yi = "\\ud800-\\udfff", Fh = "\\u0300-\\u036f", Lh = "\\ufe20-\\ufe2f", Dh = "\\u20d0-\\u20ff", qh = Fh + Lh + Dh, Hh = "\\ufe0e\\ufe0f", Nh = "[" + Yi + "]", Te = "[" + qh + "]", Ae = "\\ud83c[\\udffb-\\udfff]", Bh = "(?:" + Te + "|" + Ae + ")", Vi = "[^" + Yi + "]", Ki = "(?:\\ud83c[\\udde6-\\uddff]){2}", Wi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Xh = "\\u200d", Zi = Bh + "?", ji = "[" + Hh + "]?", Gh = "(?:" + Xh + "(?:" + [Vi, Ki, Wi].join("|") + ")" + ji + Zi + ")*", Uh = ji + Zi + Gh, Yh = "(?:" + [Vi + Te + "?", Te, Ki, Wi, Nh].join("|") + ")", Vh = RegExp(Ae + "(?=" + Ae + ")|" + Yh + Uh, "g");
function Kh(t) {
  return t.match(Vh) || [];
}
function Wh(t) {
  return Ui(t) ? Kh(t) : Rh(t);
}
function Zh(t) {
  return function(n) {
    n = Gn(n);
    var e = Ui(n) ? Wh(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Ah(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var jh = Zh("toUpperCase");
function Jh(t) {
  return jh(Gn(t).toLowerCase());
}
function Qh() {
  this.__data__ = new lt(), this.size = 0;
}
function tp(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function np(t) {
  return this.__data__.get(t);
}
function ep(t) {
  return this.__data__.has(t);
}
var rp = 200;
function ip(t, n) {
  var e = this.__data__;
  if (e instanceof lt) {
    var r = e.__data__;
    if (!Zt || r.length < rp - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new ct(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function ot(t) {
  var n = this.__data__ = new lt(t);
  this.size = n.size;
}
ot.prototype.clear = Qh;
ot.prototype.delete = tp;
ot.prototype.get = np;
ot.prototype.has = ep;
ot.prototype.set = ip;
function Je(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Ji() {
  return [];
}
var op = Object.prototype, ap = op.propertyIsEnumerable, Nr = Object.getOwnPropertySymbols, Qi = Nr ? function(t) {
  return t == null ? [] : (t = Object(t), Je(Nr(t), function(n) {
    return ap.call(t, n);
  }));
} : Ji, sp = Object.getOwnPropertySymbols, up = sp ? function(t) {
  for (var n = []; t; )
    je(n, Qi(t)), t = $h(t);
  return n;
} : Ji;
function to(t, n, e) {
  var r = n(t);
  return N(t) ? r : je(r, e(t));
}
function Br(t) {
  return to(t, Nn, Qi);
}
function lp(t) {
  return to(t, Nf, up);
}
var Se = $t(ut, "DataView"), Ee = $t(ut, "Promise"), Pe = $t(ut, "Set"), Xr = "[object Map]", cp = "[object Object]", Gr = "[object Promise]", Ur = "[object Set]", Yr = "[object WeakMap]", Vr = "[object DataView]", fp = Mt(Se), hp = Mt(Zt), pp = Mt(Ee), dp = Mt(Pe), gp = Mt(Me), rt = Rt;
(Se && rt(new Se(new ArrayBuffer(1))) != Vr || Zt && rt(new Zt()) != Xr || Ee && rt(Ee.resolve()) != Gr || Pe && rt(new Pe()) != Ur || Me && rt(new Me()) != Yr) && (rt = function(t) {
  var n = Rt(t), e = n == cp ? t.constructor : void 0, r = e ? Mt(e) : "";
  if (r)
    switch (r) {
      case fp:
        return Vr;
      case hp:
        return Xr;
      case pp:
        return Gr;
      case dp:
        return Ur;
      case gp:
        return Yr;
    }
  return n;
});
var Kr = ut.Uint8Array, yp = "__lodash_hash_undefined__";
function mp(t) {
  return this.__data__.set(t, yp), this;
}
function _p(t) {
  return this.__data__.has(t);
}
function zn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new ct(); ++n < e; )
    this.add(t[n]);
}
zn.prototype.add = zn.prototype.push = mp;
zn.prototype.has = _p;
function vp(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function bp(t, n) {
  return t.has(n);
}
var wp = 1, xp = 2;
function no(t, n, e, r, i, o) {
  var a = e & wp, s = t.length, u = n.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), h = o.get(n);
  if (l && h)
    return l == n && h == t;
  var p = -1, c = !0, f = e & xp ? new zn() : void 0;
  for (o.set(t, n), o.set(n, t); ++p < s; ) {
    var d = t[p], g = n[p];
    if (r)
      var y = a ? r(g, d, p, n, t, o) : r(d, g, p, t, n, o);
    if (y !== void 0) {
      if (y)
        continue;
      c = !1;
      break;
    }
    if (f) {
      if (!vp(n, function(_, M) {
        if (!bp(f, M) && (d === _ || i(d, _, e, r, o)))
          return f.push(M);
      })) {
        c = !1;
        break;
      }
    } else if (!(d === g || i(d, g, e, r, o))) {
      c = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), c;
}
function eo(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Mp(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var $p = 1, Tp = 2, Ap = "[object Boolean]", Sp = "[object Date]", Ep = "[object Error]", Pp = "[object Map]", kp = "[object Number]", zp = "[object RegExp]", Op = "[object Set]", Cp = "[object String]", Ip = "[object Symbol]", Rp = "[object ArrayBuffer]", Fp = "[object DataView]", Wr = tt ? tt.prototype : void 0, ie = Wr ? Wr.valueOf : void 0;
function Lp(t, n, e, r, i, o, a) {
  switch (e) {
    case Fp:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Rp:
      return !(t.byteLength != n.byteLength || !o(new Kr(t), new Kr(n)));
    case Ap:
    case Sp:
    case kp:
      return Hn(+t, +n);
    case Ep:
      return t.name == n.name && t.message == n.message;
    case zp:
    case Cp:
      return t == n + "";
    case Pp:
      var s = eo;
    case Op:
      var u = r & $p;
      if (s || (s = Mp), t.size != n.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == n;
      r |= Tp, a.set(t, n);
      var h = no(s(t), s(n), r, i, o, a);
      return a.delete(t), h;
    case Ip:
      if (ie)
        return ie.call(t) == ie.call(n);
  }
  return !1;
}
var Dp = 1, qp = Object.prototype, Hp = qp.hasOwnProperty;
function Np(t, n, e, r, i, o) {
  var a = e & Dp, s = Br(t), u = s.length, l = Br(n), h = l.length;
  if (u != h && !a)
    return !1;
  for (var p = u; p--; ) {
    var c = s[p];
    if (!(a ? c in n : Hp.call(n, c)))
      return !1;
  }
  var f = o.get(t), d = o.get(n);
  if (f && d)
    return f == n && d == t;
  var g = !0;
  o.set(t, n), o.set(n, t);
  for (var y = a; ++p < u; ) {
    c = s[p];
    var _ = t[c], M = n[c];
    if (r)
      var T = a ? r(M, _, c, n, t, o) : r(_, M, c, t, n, o);
    if (!(T === void 0 ? _ === M || i(_, M, e, r, o) : T)) {
      g = !1;
      break;
    }
    y || (y = c == "constructor");
  }
  if (g && !y) {
    var m = t.constructor, v = n.constructor;
    m != v && "constructor" in t && "constructor" in n && !(typeof m == "function" && m instanceof m && typeof v == "function" && v instanceof v) && (g = !1);
  }
  return o.delete(t), o.delete(n), g;
}
var Bp = 1, Zr = "[object Arguments]", jr = "[object Array]", pn = "[object Object]", Xp = Object.prototype, Jr = Xp.hasOwnProperty;
function Gp(t, n, e, r, i, o) {
  var a = N(t), s = N(n), u = a ? jr : rt(t), l = s ? jr : rt(n);
  u = u == Zr ? pn : u, l = l == Zr ? pn : l;
  var h = u == pn, p = l == pn, c = u == l;
  if (c && $e(t)) {
    if (!$e(n))
      return !1;
    a = !0, h = !1;
  }
  if (c && !h)
    return o || (o = new ot()), a || Bi(t) ? no(t, n, e, r, i, o) : Lp(t, n, u, e, r, i, o);
  if (!(e & Bp)) {
    var f = h && Jr.call(t, "__wrapped__"), d = p && Jr.call(n, "__wrapped__");
    if (f || d) {
      var g = f ? t.value() : t, y = d ? n.value() : n;
      return o || (o = new ot()), i(g, y, e, r, o);
    }
  }
  return c ? (o || (o = new ot()), Np(t, n, e, r, i, o)) : !1;
}
function Qe(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !wt(t) && !wt(n) ? t !== t && n !== n : Gp(t, n, e, r, Qe, i);
}
var Up = 1, Yp = 2;
function Vp(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], u = t[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var h = new ot(), p;
      if (!(p === void 0 ? Qe(l, u, Up | Yp, r, h) : p))
        return !1;
    }
  }
  return !0;
}
function ro(t) {
  return t === t && !st(t);
}
function Kp(t) {
  for (var n = Nn(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, ro(i)];
  }
  return n;
}
function io(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function Wp(t) {
  var n = Kp(t);
  return n.length == 1 && n[0][2] ? io(n[0][0], n[0][1]) : function(e) {
    return e === t || Vp(e, t, n);
  };
}
function Zp(t, n) {
  return t != null && n in Object(t);
}
function oo(t, n, e) {
  n = Un(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = en(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Ye(i) && qn(a, i) && (N(t) || Ve(t)));
}
function jp(t, n) {
  return t != null && oo(t, n, Zp);
}
var Jp = 1, Qp = 2;
function td(t, n) {
  return Ke(t) && ro(n) ? io(en(t), n) : function(e) {
    var r = bh(e, t);
    return r === void 0 && r === n ? jp(e, t) : Qe(n, r, Jp | Qp);
  };
}
function ao(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function nd(t) {
  return function(n) {
    return Ze(n, t);
  };
}
function ed(t) {
  return Ke(t) ? ao(en(t)) : nd(t);
}
function rn(t) {
  return typeof t == "function" ? t : t == null ? nn : typeof t == "object" ? N(t) ? td(t[0], t[1]) : Wp(t) : ed(t);
}
function rd(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var u = a[++i];
      if (e(o[u], u, o) === !1)
        break;
    }
    return n;
  };
}
var id = rd();
function od(t, n) {
  return t && id(t, n, Nn);
}
function ad(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Ft(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var tr = ad(od);
function sd(t) {
  return wt(t) && Ft(t);
}
function ud(t) {
  return typeof t == "function" ? t : nn;
}
function W(t, n) {
  var e = N(t) ? qc : tr;
  return e(t, ud(n));
}
function ld(t, n) {
  return tn(n, function(e) {
    return [e, t[e]];
  });
}
function cd(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var fd = "[object Map]", hd = "[object Set]";
function pd(t) {
  return function(n) {
    var e = rt(n);
    return e == fd ? eo(n) : e == hd ? cd(n) : ld(n, t(n));
  };
}
var so = pd(Nn);
function dd(t, n) {
  var e = [];
  return tr(t, function(r, i, o) {
    n(r, i, o) && e.push(r);
  }), e;
}
function Y(t, n) {
  var e = N(t) ? Je : dd;
  return e(t, rn(n));
}
function gd(t, n) {
  var e = -1, r = Ft(t) ? Array(t.length) : [];
  return tr(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function Ct(t, n) {
  var e = N(t) ? tn : gd;
  return e(t, rn(n));
}
function uo(t, n) {
  return t > n;
}
var yd = Object.prototype, md = yd.hasOwnProperty;
function _d(t, n) {
  return t != null && md.call(t, n);
}
function nr(t, n) {
  return t != null && oo(t, n, _d);
}
function vd(t, n) {
  return t < n;
}
function er(t, n, e) {
  for (var r = -1, i = t.length; ++r < i; ) {
    var o = t[r], a = n(o);
    if (a != null && (s === void 0 ? a === a && !Qt(a) : e(a, s)))
      var s = a, u = o;
  }
  return u;
}
function bd(t) {
  return t && t.length ? er(t, nn, uo) : void 0;
}
function oe(t, n) {
  return t && t.length ? er(t, rn(n), uo) : void 0;
}
function wd(t, n) {
  return t && t.length ? er(t, rn(n), vd) : void 0;
}
function xd(t, n, e, r) {
  if (!st(t))
    return t;
  n = Un(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var u = en(n[i]), l = e;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != a) {
      var h = s[u];
      l = void 0, l === void 0 && (l = st(h) ? h : qn(n[i + 1]) ? [] : {});
    }
    Uc(s, u, l), s = s[u];
  }
  return t;
}
function Md(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = Ze(t, a);
    e(s, a) && xd(o, Un(a, t), s);
  }
  return o;
}
function lo(t, n) {
  if (t == null)
    return {};
  var e = tn(lp(t), function(r) {
    return [r];
  });
  return n = rn(n), Md(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var $d = Math.ceil, Td = Math.max;
function Ad(t, n, e, r) {
  for (var i = -1, o = Td($d((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function Sd(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && Wc(n, e, r) && (e = r = void 0), n = ne(n), e === void 0 ? (e = n, n = 0) : e = ne(e), r = r === void 0 ? n < e ? 1 : -1 : ne(r), Ad(n, e, r);
  };
}
var pt = Sd();
function Ed() {
  var t = arguments, n = Gn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
var Pd = Math.max;
function kd(t) {
  if (!(t && t.length))
    return [];
  var n = 0;
  return t = Je(t, function(e) {
    if (sd(e))
      return n = Pd(e.length, n), !0;
  }), Di(n, function(e) {
    return tn(t, ao(e));
  });
}
var On = Vc(kd);
const zd = (t, n, e = 12, r = 12) => {
  const i = G().domain([0, e]).range([0, t]), o = G().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return pt((e + 1) * (r + 1)).map(function(u) {
        return { m: u % (e + 1), n: Math.floor(u / (e + 1)), x: i(u % (e + 1)), y: o(Math.floor(u / (e + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const h = Mh(Ct(l, function(p) {
        return Ct(
          u,
          function(c) {
            return { x: i(c), y: o(p) };
          }
        );
      }));
      return h.length == 1 ? h[0] : h;
    }
  };
}, Od = "_widget_18g36_1", Cd = "_label_18g36_19", Id = "_lit_18g36_24", Rd = "_button_18g36_29", Fd = "_symbol_18g36_29", Ld = "_radio_18g36_29", Dd = "_radiobutton_18g36_29", qd = "_selected_18g36_35", Hd = "_toggle_18g36_35", Nd = "_slider_18g36_44", Bd = "_track_18g36_44", Xd = "_track_overlay_18g36_48", Gd = "_handle_18g36_55", b = {
  widget: Od,
  label: Cd,
  lit: Id,
  button: Rd,
  symbol: Fd,
  radio: Ld,
  radiobutton: Dd,
  selected: qd,
  toggle: Hd,
  slider: Nd,
  track: Bd,
  track_overlay: Xd,
  handle: Gd
}, rr = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, ir = (t, n, e) => {
  var r, i, o, a;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, Ud = (t = 1) => {
  const n = j();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Yd = (t = 1) => {
  const n = j(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Vd = (t = 1) => {
  const n = j();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Kd = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = j();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, Wd = (t = 1) => {
  const n = j(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, Zd = (t = 1) => {
  const n = j(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, jd = (t = 1) => {
  const n = j(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, Jd = (t = 1) => {
  var n = j(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, Qd = (t = 1) => {
  const n = j(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, ke = (t) => {
  switch (t) {
    case "play":
      return Ud;
    case "forward":
      return Yd;
    case "back":
      return Vd;
    case "pause":
      return Kd;
    case "reload":
      return Wd;
    case "capture":
      return Zd;
    case "rewind":
      return jd;
    case "stop":
      return Jd;
    case "push":
      return Qd;
  }
}, or = () => {
  const t = "button";
  var n = rr(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, l = function(d) {
  }, h = ["play"], p = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? o.x : (o.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? o.y : (o.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return l = d, this;
      l(d);
    },
    actions: function(d) {
      return typeof d > "u" ? h : (h = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? p : (p = d, this);
    },
    click: function() {
      p = (p + 1) % h.length, l(), O(this.parentNode).select("." + b.symbol).attr("d", ke(h[p])(r * e));
    },
    press: function(d) {
      p = (p + 1) % h.length, l(), d.select("#button_" + n).select("." + b.symbol).attr("d", ke(h[p])(r * e));
    }
  };
}, t0 = () => {
  const t = "slider", n = Dn(".3f");
  var e = rr(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, h = function(_) {
  }, p = function(_) {
  }, c = [0, 1], f = 0, d = null, g = G().domain(c).range([0, r]).clamp(!0);
  const y = function(_, M, T = c) {
    const m = _.select("#slider_" + e);
    g.domain(T), f = M, m.selectAll("." + b.handle).transition().attr("cx", g(M)), a && m.select("." + b.label).text(d + " = " + n(f)), h(), p();
  };
  return {
    type: t,
    scale: g,
    id: function(_) {
      return typeof _ > "u" ? e : (e = _, this);
    },
    label: function(_) {
      return typeof _ > "u" ? d : (d = _, this);
    },
    size: function(_) {
      return typeof _ > "u" ? r : (r = _, this);
    },
    girth: function(_) {
      return typeof _ > "u" ? i : (i = _, this);
    },
    knob: function(_) {
      return typeof _ > "u" ? o : (o = _, this);
    },
    show: function(_) {
      return typeof _ > "u" ? a : (a = _, this);
    },
    position: function(_) {
      return typeof _ > "u" ? s : (s = _, this);
    },
    x: function(_) {
      return typeof _ > "u" ? s.x : (s.x = _, this);
    },
    y: function(_) {
      return typeof _ > "u" ? s.y : (s.y = _, this);
    },
    labelposition: function(_) {
      return typeof _ > "u" ? u : (u = _, this);
    },
    fontsize: function(_) {
      return typeof _ > "u" ? l : (l = _, this);
    },
    update: function(_) {
      if (typeof _ == "function")
        return h = _, this;
      h(_);
    },
    update_end: function(_) {
      if (typeof _ == "function")
        return p = _, this;
      p(_);
    },
    range: function(_) {
      return typeof _ > "u" ? c : (c = _, this);
    },
    value: function(_) {
      return typeof _ > "u" ? f : (f = _, this);
    },
    reset: y,
    click: y
  };
}, n0 = () => {
  const t = "radio";
  var n = rr(), e = 100, r = 20, i = 0.3, o = "round", a = "vertical", s = { x: 0, y: 0 }, u = "right", l = null, h = function(g) {
  }, p = [], c = 0;
  return {
    type: t,
    id: function(g) {
      return typeof g > "u" ? n : (n = g, this);
    },
    size: function(g) {
      return typeof g > "u" ? e : (e = g, this);
    },
    buttonsize: function(g) {
      return typeof g > "u" ? r : (r = g, this);
    },
    buttonpadding: function(g) {
      return typeof g > "u" ? i : (i = g, this);
    },
    orientation: function(g) {
      return typeof g > "u" ? a : (a = g, this);
    },
    shape: function(g) {
      return typeof g > "u" ? o : (o = g, this);
    },
    position: function(g) {
      return typeof g > "u" ? s : (s = g, this);
    },
    x: function(g) {
      return typeof g > "u" ? s.x : (s.x = g, this);
    },
    y: function(g) {
      return typeof g > "u" ? s.y : (s.y = g, this);
    },
    labelposition: function(g) {
      return typeof g > "u" ? u : (u = g, this);
    },
    fontsize: function(g) {
      return typeof g > "u" ? l : (l = g, this);
    },
    update: function(g) {
      if (typeof g == "function")
        return h = g, this;
      h(g);
    },
    choices: function(g) {
      return typeof g > "u" ? p : (p = g, this);
    },
    value: function(g) {
      return typeof g > "u" ? c : (c = g, this);
    },
    click: function(g, y) {
      c = y, O(this.parentNode).selectAll("." + b.symbol).classed(b.selected, (_) => _ == c), h();
    },
    reset: function(g, y) {
      c = y, g.select("#radio_" + n).selectAll("." + b.symbol).classed(b.selected, (_) => _ == c), h();
    }
  };
}, e0 = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = O(o).attr("class", b.widget + " " + b.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", b.background).on("click", t.click).on("mouseover", function() {
    O(this).classed(b.lit, !0), O(this.parentNode).select("." + b.symbol).classed(b.lit, !0);
  }).on("mouseout", function() {
    O(this).classed(b.lit, !1), O(this.parentNode).select("." + b.symbol).classed(b.lit, !1);
  }), a.append("path").attr("d", ke(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", b.symbol), r) {
    const u = ir(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", b.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, co = (t, n) => {
  const e = j();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, r0 = (t, n) => {
  const e = Dn(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = O(u).attr("class", b.widget + " " + b.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", co(t.size(), t.girth())).attr("class", b.track), s.append("circle").attr("class", b.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", b.track_overlay).on("click", function(d) {
    const g = he(d, this)[0];
    t.value(a.invert(g)), t.update(), t.update_end(), s.selectAll("." + b.handle).attr("cx", a(t.value())), t.show() && s.select("." + b.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Os().on("drag", function(d) {
      t.value(a.invert(d.x)), t.update(), s.selectAll("." + b.handle).attr("cx", a(t.value())), t.show() && s.select("." + b.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var h, p, c, f = "bottom";
  return t.fontsize && (p = t.labelposition().match(/bottom/i) != null ? sn([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -sn([t.girth() / 2, t.knob()]) - t.fontsize() / 2), p = t.labelposition().match(/bottom/i) != null ? sn([t.girth() / 2, t.knob()]) + 7 : -sn([t.girth() / 2, t.knob()]) - 7, h = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, c = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", f = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", b.label).style("text-anchor", c).style("alignment-baseline", f).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + h + "," + p + ")"), u;
}, i0 = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = O(a).attr("class", b.widget + " " + b.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(b.selected, t.value() == 1);
  if (s.append("path").attr("d", co(2 * t.size(), 2 * t.size())).attr("class", b.track), s.append("circle").attr("class", b.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", b.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = ir(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", b.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, o0 = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = Io(a), u = G().domain([0, a - 1]).range([0, t.size()]), l = G().domain([0, a - 1]).range([0, t.size()]), h = document.createElementNS("http://www.w3.org/2000/svg", "g"), c = O(h).attr("class", b.widget + " " + b.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + b.radiobutton).data(s).enter().append("g").attr("class", b.radiobutton).attr("id", (y) => "b" + y).attr("transform", (y) => t.orientation() == "vertical" ? "translate(0," + l(y) + ")" : "translate(" + u(y) + ",0)");
  var f, d;
  t.shape() == "rect" ? (f = c.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = c.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (f = c.append("circle").attr("r", i / 2), d = c.append("circle").attr("r", o / 2)), f.attr("class", b.background).on("mouseover", function() {
    O(this).classed(b.lit, !0), O(this.parentNode).select("." + b.symbol).classed(b.lit, !0);
  }).on("mouseout", function() {
    O(this).classed(b.lit, !1), O(this.parentNode).select("." + b.symbol).classed(b.lit, !1);
  }), d.attr("class", b.symbol), d.filter((y) => y == t.value()).classed(b.selected, !0), c.on("click", t.click);
  const g = ir(t.buttonsize(), t.buttonsize(), r);
  return c.append("text").attr("class", b.label).text(function(y, _) {
    return t.choices()[_];
  }).attr("alignment-baseline", g.valign).attr("transform", "translate(" + g.x + "," + g.y + ")").style("font-size", t.fontsize()).attr("text-anchor", g.anchor), h;
}, ae = (t, n) => {
  switch (t.type) {
    case "button":
      return e0(t);
    case "slider":
      return r0(t);
    case "radio":
      return o0(t);
    case "toggle":
      return i0(t);
  }
}, a0 = (t, n) => {
  const e = zd(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = O("#" + t).classed("explorable " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height);
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && o.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && o.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: e };
}, $ = {
  widgets: {
    slider_size: 400,
    slider_gap: 1.5,
    slider_girth: 12,
    slider_knob: 14,
    slider_anchor: { x: 1, y: 7 },
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 4.5 },
    resetbutton_anchor: { x: 2, y: 4.5 },
    radio_anchor: { x: 8, y: 5 },
    radio_size: 40,
    radio_orientation: "vertical",
    radio_label_position: "right",
    radio_shape: "rect",
    legend_anchor: { x: 6, y: 4 },
    legend_gap: 3.5,
    legend: ["Predator", "Prey"]
  },
  simulation: {
    delay: 10,
    color: { predator: "#800220", prey: "#d1ba23", empty: "#f1eae4" }
  },
  cartoon: {
    anchor: { x: 6, y: 3 },
    width: 200,
    x_label: "time"
  }
}, x = {
  L: 100,
  boundary: "periodic",
  N: { hex: 60, square: 100 },
  initial_prey: 0.01,
  initial_predator: 0.05,
  T_trajectory: 500,
  T_relax: 50,
  predator_reproduction_rate: {
    range: [0, 0.5],
    default: 0.26
  },
  predator_death_rate: {
    range: [0, 0.5],
    default: 0.1
  },
  prey_reproduction_rate: {
    range: [0, 1],
    default: 0.6
  },
  prey_death_rate: {
    range: [0, 0.1],
    default: 0
  },
  lattice: {
    choices: ["square", "hexagonal"],
    default: 0
  }
}, fo = (t) => Ct(
  so(t),
  (n) => {
    n[1].id = n[0], nr(n[1], "label") || (n[1].label = Ed(Jh(n[0]), /_/g, " "));
  }
), ho = (t) => Ct(so(t), (n) => n[1]), po = (t, n) => W(t, (e, r) => e.widget = n[r]), s0 = (t) => lo(t, (n) => nr(n, "range")), u0 = (t) => lo(t, (n) => nr(n, "choices"));
G().domain([0, 360]).range([0, 2 * Math.PI]);
G().range([0, 360]).domain([0, 2 * Math.PI]);
const l0 = "_plot_1lq10_1", c0 = "_xlabel_1lq10_6", f0 = "_curve_1lq10_10", h0 = "_xaxis_1lq10_15", p0 = "_yaxis_1lq10_19", d0 = "_legend_1lq10_23", J = {
  plot: l0,
  xlabel: c0,
  curve: f0,
  xaxis: h0,
  yaxis: p0,
  legend: d0
}, ar = s0(x), go = u0(x);
fo(ar);
fo(go);
const yo = ho(ar), mo = ho(go), bn = Ct(
  yo,
  (t) => t0().id(t.id).label(t.label).range(t.range).value(t.default).size($.widgets.slider_size).girth($.widgets.slider_girth).knob($.widgets.slider_knob)
), ze = Ct(
  mo,
  (t) => n0().choices(t.choices).id(t.id).value(t.default).orientation($.widgets.radio_orientation).labelposition($.widgets.radio_label_position)
);
po(yo, bn);
po(mo, ze);
const ht = or().actions(["play", "pause"]), Yn = or().actions(["back"]), Vn = or().actions(["rewind"]), g0 = [ht, Yn, Vn], y0 = (t, n) => {
  const e = n.position($.widgets.slider_anchor.x, pt(bn.length).map((s) => $.widgets.slider_anchor.y + $.widgets.slider_gap * s)), r = n.position($.widgets.radio_anchor.x, $.widgets.radio_anchor.y), i = n.position(pt($.widgets.legend.length).map((s) => $.widgets.legend_anchor.x + $.widgets.legend_gap * s), $.widgets.legend_anchor.y);
  bn.forEach((s, u) => s.position(e[u])), ze[0].position(r).size($.widgets.radio_size).shape($.widgets.radio_shape), ht.position(n.position($.widgets.playbutton_anchor.x, $.widgets.playbutton_anchor.y)).size($.widgets.playbutton_size), Vn.position(n.position($.widgets.backbutton_anchor.x, $.widgets.backbutton_anchor.y)), Yn.position(n.position($.widgets.resetbutton_anchor.x, $.widgets.resetbutton_anchor.y)), t.selectAll(null).data(bn).enter().append(ae), t.selectAll(null).data(g0).enter().append(ae), t.selectAll(null).data(ze).enter().append(ae);
  const o = t.selectAll(null).data($.widgets.legend).enter().append("g").attr("class", J.legend).attr("transform", (s, u) => "translate(" + i[u].x + "," + i[u].y + ")");
  o.append("text").text((s) => s).attr("transform", "translate(20,0)");
  const a = [$.simulation.color.predator, $.simulation.color.prey];
  o.append("circle").attr("r", 10).attr("cy", -5).style("fill", (s, u) => a[u]);
}, m0 = (t) => {
  W(ar, (n) => n.widget.reset(t, n.default));
};
function Kn(t, n) {
  return [t % n, Math.floor(t / n)];
}
const _0 = {
  n4: On([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: On([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function se(t, n, e = "periodic", r = "n8") {
  const i = [];
  return _0[r].forEach((o) => {
    var a = o[1], s = o[0];
    const u = Kn(t, n), l = u[0], h = u[1], p = l + s, c = h + a;
    (e == "dirichlet" ? !(a == 0 && s == 0) && p < n && c < n && p >= 0 && c >= 0 : !(a == 0 && s == 0)) && i.push(n * ((c + n) % n) + (p + n) % n);
  }), i;
}
const v0 = function(t) {
  var n = "periodic", e = 1, r = "n8";
  const i = 2 * t + 1;
  var o = e / i, a = o;
  const s = pt(i * i).map(function(c) {
    const f = Kn(c, i);
    return {
      m: f[0],
      n: f[1],
      x: o * (f[0] + 0.5) - e / 2,
      y: a * (f[1] + 0.5) - e / 2
    };
  });
  s.forEach(function(c, f) {
    c.neighbors = se(f, i, n, r).map((d) => s[d]), c.cell = () => [
      { x: c.x + o / 2, y: c.y + a / 2 },
      { x: c.x - o / 2, y: c.y + a / 2 },
      { x: c.x - o / 2, y: c.y - a / 2 },
      { x: c.x + o / 2, y: c.y - a / 2 },
      { x: c.x + o / 2, y: c.y + a / 2 }
    ], c.random_interior_point = () => ({
      x: c.x + o * (Math.random() - 0.5),
      y: c.y + a * (Math.random() - 0.5)
    });
  });
  const u = function(c) {
    return typeof c < "u" ? (s.forEach(function(f) {
      f.x = (f.m + 0.5) * c / i - c / 2, f.y = (f.n + 0.5) * c / i - c / 2;
    }), e = c, o = e / i, a = e / i, this.L = e, this) : e;
  }, l = function(c) {
    return typeof c < "u" ? (s.forEach(function(f, d) {
      f.neighbors = se(d, i, c, r).map((g) => s[g]);
    }), n = c, s.forEach((f) => {
      f.is_boundary = n == "dirichlet" && (f.n == 0 || f.n == 2 * t || f.m == 0 || f.m == 2 * t);
    }), this) : n;
  }, h = function(c) {
    return typeof c < "u" ? (s.forEach(function(f, d) {
      f.neighbors = se(d, i, n, c).map((g) => s[g]);
    }), r = c, this) : r;
  }, p = function() {
    return n === "periodic" ? null : Y(s, (c) => c.n == 0 || c.n == 2 * t || c.m == 0 || c.m == 2 * t);
  };
  return {
    type: "square",
    L: e,
    N: t,
    size: i * i,
    hood: h,
    nodes: s,
    scale: u,
    boundary: l,
    boundary_cells: p
  };
}, dn = [1, 0], gn = [0.5, Math.sqrt(3) / 2], L = [
  { l: 1, m: 0, n: -1 },
  { l: 1, m: -1, n: 0 },
  { l: 0, m: -1, n: 1 },
  { l: 0, m: 1, n: -1 },
  { l: -1, m: 0, n: 1 },
  { l: -1, m: 1, n: 0 }
], Qr = [
  [L[0], L[1]],
  [L[1], L[2]],
  [L[2], L[4]],
  [L[4], L[5]],
  [L[5], L[3]],
  [L[3], L[0]]
];
function C(t) {
  return "id_l" + t.l + "m" + t.m + "n" + t.n;
}
const b0 = function(t) {
  var n = "periodic", e = 1, r = e / (2 * t + 1);
  const i = [], o = {};
  pt(-t, t + 1).forEach(function(c) {
    pt(-t, t + 1).forEach(function(f) {
      pt(-t, t + 1).forEach(function(d) {
        c + f + d == 0 && i.push({
          l: c,
          m: f,
          n: d,
          x: r * c * dn[0] + r * f * gn[0],
          y: r * c * dn[1] + r * f * gn[1]
        });
      });
    });
  }), i.forEach(function(c) {
    o[C(c)] = c, c.cell = () => {
      const f = 1 / Math.sqrt(3);
      return [
        { x: c.x + r / 2, y: c.y + f * r / 2 },
        { x: c.x, y: c.y + f * r },
        { x: c.x - r / 2, y: c.y + f * r / 2 },
        { x: c.x - r / 2, y: c.y - f * r / 2 },
        { x: c.x, y: c.y - f * r },
        { x: c.x + r / 2, y: c.y - f * r / 2 },
        { x: c.x + r / 2, y: c.y + f * r / 2 }
      ];
    }, c.random_interior_point = () => {
      const f = 1 / Math.sqrt(3), d = Math.random(), g = Math.random(), y = Math.floor(Math.random() * 6) * 2 * Math.PI / 6, _ = r / 2 * Math.sqrt(d), M = r / 2 * Math.sqrt(d) * f * (1 - 2 * g), T = Math.cos(y) * _ - Math.sin(y) * M, m = Math.sin(y) * _ + Math.cos(y) * M;
      return {
        x: c.x + T,
        y: c.y + m
      };
    };
  }), p(i);
  const a = function(c) {
    return typeof c < "u" ? (e = c, r = e / (2 * t + 1), i.forEach((f) => {
      f.x = r * f.l * dn[0] + r * f.m * gn[0], f.y = r * f.l * dn[1] + r * f.m * gn[1];
    }), this.L = e, this) : e;
  }, s = function(c) {
    var f = 1 / Math.sqrt(3);
    return [
      { x: c.x + Scale / t / 2, y: c.y + f / 2 * Scale / t },
      { x: c.x, y: c.y + f * Scale / t },
      { x: c.x - Scale / t / 2, y: c.y + f / 2 * Scale / t },
      { x: c.x - Scale / t / 2, y: c.y - f / 2 * Scale / t },
      { x: c.x, y: c.y - f * Scale / t },
      { x: c.x + Scale / t / 2, y: c.y - f / 2 * Scale / t },
      { x: c.x + Scale / t / 2, y: c.y + f / 2 * Scale / t }
    ];
  }, u = function(c) {
    return typeof c < "u" ? (c == "dirichlet" ? (n = "dirichlet", h(i)) : (n = "periodic", p(i)), i.forEach((f) => {
      f.is_boundary = n == "dirichlet" && (f.n == -t || f.n == t || f.l == -t || f.l == t || f.m == -t || f.m == t);
    }), this) : n;
  }, l = function() {
    return n === "periodic" ? null : Y(i, (c) => c.n == -t || c.n == t || c.l == -t || c.l == t || c.m == -t || c.m == t);
  };
  return {
    type: "hexagonal",
    L: e,
    N: t,
    size: 1 + 3 * t * (t + 1),
    nodes: i,
    scale: a,
    boundary: u,
    boundary_cells: l,
    cell: s
  };
  function h(c) {
    c.forEach(function(f) {
      f.neighbors = [], L.forEach(function(d) {
        const g = C({ l: f.l + d.l, m: f.m + d.m, n: f.n + d.n }), y = o[g];
        typeof y < "u" && f.neighbors.push(y);
      });
    }), c.forEach(function(f) {
      f.triangles = [], Qr.forEach(function(d) {
        const g = C({ l: f.l + d[0].l, m: f.m + d[0].m, n: f.n + d[0].n }), y = C({ l: f.l + d[1].l, m: f.m + d[1].m, n: f.n + d[1].n });
        typeof o[g] < "u" && typeof o[y] < "u" && f.triangles.push([o[g], o[y]]);
      });
    });
  }
  function p(c) {
    c.forEach(function(f) {
      f.neighbors = [], L.forEach(function(d) {
        var g = C({ l: f.l + d.l, m: f.m + d.m, n: f.n + d.n });
        typeof o[g] > "u" && (f.l + d.l == t + 1 && Math.abs(f.m + d.m) <= t + 1 && Math.abs(f.n + d.n) <= t && (g = C({ l: f.l + d.l - (2 * t + 1), m: f.m + d.m + (t + 1), n: f.n + d.n + t })), f.l + d.l == -(t + 1) && Math.abs(f.m + d.m) <= t + 1 && Math.abs(f.n + d.n) <= t && (g = C({ l: f.l + d.l + (2 * t + 1), m: f.m + d.m - (t + 1), n: f.n + d.n - t })), f.m + d.m == t + 1 && Math.abs(f.l + d.l) <= t && Math.abs(f.n + d.n) <= t + 1 && (g = C({ m: f.m + d.m - (2 * t + 1), n: f.n + d.n + (t + 1), l: f.l + d.l + t })), f.m + d.m == -(t + 1) && Math.abs(f.l + d.l) <= t && Math.abs(f.n + d.n) <= t + 1 && (g = C({ m: f.m + d.m + (2 * t + 1), n: f.n + d.n - (t + 1), l: f.l + d.l - t })), f.n + d.n == t + 1 && Math.abs(f.l + d.l) <= t + 1 && Math.abs(f.m + d.m) <= t && (g = C({ n: f.n + d.n - (2 * t + 1), l: f.l + d.l + (t + 1), m: f.m + d.m + t })), f.n + d.n == -(t + 1) && Math.abs(f.l + d.l) <= t + 1 && Math.abs(f.m + d.m) <= t && (g = C({ n: f.n + d.n + (2 * t + 1), l: f.l + d.l - (t + 1), m: f.m + d.m - t }))), f.neighbors.push(o[g]);
      });
    }), c.forEach(function(f) {
      f.triangles = [], Qr.forEach(function(d) {
        var g = [];
        d.forEach(function(y, _) {
          var M = C({ l: f.l + y.l, m: f.m + y.m, n: f.n + y.n });
          typeof o[M] > "u" && (f.l + y.l == t + 1 && Math.abs(f.m + y.m) <= t + 1 && Math.abs(f.n + y.n) <= t && C({ l: f.l + y.l - (2 * t + 1), m: f.m + y.m + (t + 1), n: f.n + y.n + t }), f.l + y.l == -(t + 1) && Math.abs(f.m + y.m) <= t + 1 && Math.abs(f.n + y.n) <= t && C({ l: f.l + y.l + (2 * t + 1), m: f.m + y.m - (t + 1), n: f.n + y.n - t }), f.m + y.m == t + 1 && Math.abs(f.l + y.l) <= t && Math.abs(f.n + y.n) <= t + 1 && C({ m: f.m + y.m - (2 * t + 1), n: f.n + y.n + (t + 1), l: f.l + y.l + t }), f.m + y.m == -(t + 1) && Math.abs(f.l + y.l) <= t && Math.abs(f.n + y.n) <= t + 1 && C({ m: f.m + y.m + (2 * t + 1), n: f.n + y.n - (t + 1), l: f.l + y.l - t }), f.n + y.n == t + 1 && Math.abs(f.l + y.l) <= t + 1 && Math.abs(f.m + y.m) <= t && C({ n: f.n + y.n - (2 * t + 1), l: f.l + y.l + (t + 1), m: f.m + y.m + t }), f.n + y.n == -(t + 1) && Math.abs(f.l + y.l) <= t + 1 && Math.abs(f.m + y.m) <= t && C({ n: f.n + y.n + (2 * t + 1), l: f.l + y.l - (t + 1), m: f.m + y.m - t })), g[_] = M;
        }), f.triangles.push([o[g[0]], o[g[1]]]);
      });
    });
  }
}, w0 = {
  n4: On([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: On([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function ue(t, n, e = "periodic", r = "n8") {
  const i = [];
  return w0[r].forEach((o) => {
    var a = o[1], s = o[0];
    const u = Kn(t, n), l = u[0], h = u[1], p = l + s, c = h + a;
    (e == "dirichlet" ? !(a == 0 && s == 0) && p < n && c < n && p >= 0 && c >= 0 : !(a == 0 && s == 0)) && i.push(n * ((c + n) % n) + (p + n) % n);
  }), i;
}
const x0 = function(t) {
  var n = "periodic", e = t, r = "n8";
  const i = pt(t * t).map(function(u) {
    const l = Kn(u, t);
    return {
      x: l[0],
      y: l[1]
    };
  });
  return i.forEach(function(u, l) {
    u.neighbors = ue(l, t, n, r).map((h) => i[h]), u.cell = () => [
      { x: u.x, y: u.y },
      { x: u.x + 1, y: u.y },
      { x: u.x + 1, y: u.y + 1 },
      { x: u.x, y: u.y + 1 },
      { x: u.x, y: u.y }
    ];
  }), {
    type: "square",
    L: e,
    N: t,
    size: t,
    hood: function(u) {
      return typeof u < "u" ? (i.forEach(function(l, h) {
        l.neighbors = ue(h, t, n, u).map((p) => i[p]);
      }), r = u, this) : r;
    },
    nodes: i,
    scale: function(u) {
      return t;
    },
    boundary: function(u) {
      return typeof u < "u" ? (i.forEach(function(l, h) {
        l.neighbors = ue(h, t, u, r).map((p) => i[p]);
      }), n = u, this) : n;
    }
  };
}, M0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hex: b0,
  square: v0,
  square_simple: x0
}, Symbol.toStringTag, { value: "Module" }));
x.L;
var X = [], q = [];
const $0 = () => {
  x.timer = {}, x.tick = 0;
  const t = x.lattice.widget.value() == 1 ? x.N.hex : x.N.square;
  X = M0[x.lattice.widget.value() == 1 ? "hex" : "square"](t).boundary(x.boundary).nodes, W(X, (e) => {
    const r = Math.random();
    r < x.initial_prey + x.initial_predator ? r < x.initial_prey ? e.state = "prey" : e.state = "predator" : e.state = "empty";
  }), q = [{ t: x.tick, x: Y(X, (e) => e.state == "prey").length, y: Y(X, (e) => e.state == "predator").length }];
}, T0 = () => {
  x.tick++;
  const t = Y(X, (a) => a.state == "prey"), n = Y(X, (a) => a.state == "predator"), e = x.prey_reproduction_rate.widget.value(), r = x.prey_death_rate.widget.value(), i = x.predator_reproduction_rate.widget.value(), o = x.predator_death_rate.widget.value();
  W(t, (a) => {
    const s = a.neighbors[Math.floor(Math.random() * a.neighbors.length)];
    s.state == "empty" && Math.random() < e && (s.state = "prey");
  }), W(t, (a) => {
    Math.random() < r && (a.state = "empty");
  }), W(t, (a) => {
    const s = Y(a.neighbors, (h) => h.state == "predator").length, u = s * (s - 1) / 2, l = 1 - (1 - i) ** u;
    a.next_state = Math.random() < l ? "predator" : "prey";
  }), W(t, (a) => {
    a.state = a.next_state;
  }), W(n, (a) => {
    Math.random() < o && (a.state = "empty");
  }), x.tick > x.T_relax ? q.push({ t: x.tick, x: Y(X, (a) => a.state == "prey").length, y: Y(X, (a) => a.state == "predator").length }) : q = [{ t: x.tick, x: Y(X, (a) => a.state == "prey").length, y: Y(X, (a) => a.state == "predator").length }], q.length > x.T_trajectory && q.shift();
};
var mt = [x.T_relax, x.T_trajectory + x.T_relax];
const A0 = x.lattice.widget.value() == 0 ? (2 * x.N.square + 1) ** 2 : 1 + 3 * x.N.hex * (x.N.hex + 1);
var Cn = [0, A0];
const It = G().domain(mt).range([0, $.cartoon.width]), on = G().domain(Cn).range([0, -80]), _o = No(It).tickFormat(""), vo = Bo(on).tickFormat(""), bo = Oi().x(function(t) {
  return It(t.t);
}).y(function(t) {
  return on(t.y);
}), wo = Oi().x(function(t) {
  return It(t.t);
}).y(function(t) {
  return on(t.x);
}), S0 = (t, n) => {
  mt = [x.T_relax, x.T_trajectory + x.T_relax], It.domain(mt), on.domain(Cn);
  const e = n.position($.cartoon.anchor.x, $.cartoon.anchor.y);
  t.select("." + J.plot).remove();
  const r = t.append("g").attr("class", J.plot).attr("transform", "translate(" + e.x + "," + e.y + ")");
  r.append("g").call(_o).attr("class", J.xaxis), r.append("g").call(vo).attr("class", J.yaxis), r.append("text").text($.cartoon.x_label).attr("transform", "translate(" + It((mt[1] + mt[0]) / 2) + ",20)").attr("class", J.xlabel), r.append("path").datum(q).attr("d", wo).style("stroke", $.simulation.color.prey).attr("id", "prey").attr("class", J.curve), r.append("path").datum(q).attr("d", bo).style("stroke", $.simulation.color.predator).attr("id", "predator").attr("class", J.curve);
}, E0 = (t) => {
  Cn = [0, 1.1 * bd([oe(q, "x").x, oe(q, "y").y])], x.tick > x.T_trajectory + x.T_relax && (mt = [wd(q, "t").t, oe(q, "t").t]), It.domain(mt), on.domain(Cn), t.select("." + J.xaxis).call(_o), t.select("." + J.yaxis).call(vo), t.select("#prey").datum(q).attr("d", wo), t.select("#predator").datum(q).attr("d", bo);
}, it = G().domain([-0.5, 0.5]), Oe = G().domain([-0.5, 0.5]);
var F, Ce, Ie;
function P0() {
  W(X, (t) => {
    const n = t.cell();
    n.length;
    const e = $.simulation.color[t.state];
    F.fillStyle = e, F.strokeStyle = e, F.lineWidth = 0, F.fillRect(it(n[0].x), it(n[0].y), it(n[2].x) - it(n[0].x), it(n[2].y) - it(n[0].y));
  });
}
function k0() {
  W(X, (t) => {
    const n = t.cell(), e = n.length, r = $.simulation.color[t.state];
    F.fillStyle = r, F.strokeStyle = r, F.lineWidth = 1, F.beginPath(), F.moveTo(it(n[0].x), Oe(n[0].y)), W(n, (i, o) => F.lineTo(it(n[(o + 1) % e].x), Oe(n[(o + 1) % e].y))), F.fill(), F.stroke(), F.closePath();
  });
}
const z0 = (t, n, e, r) => {
  Ce = r.display_size.width, Ie = r.display_size.height, it.range([0, Ce]), Oe.range([0, Ie]), F = t.node().getContext("2d"), xo(t, n), S0(n, e);
}, xo = (t, n, e) => {
  F.clearRect(0, 0, Ce, Ie), x.lattice.widget.value() == 0 ? P0() : k0(), E0(n);
};
function O0(t, n, e) {
  T0(), xo(t, n);
}
function Re(t, n, e, r) {
  $0(), z0(t, n, e, r);
}
var ti = {};
const C0 = (t, n, e) => {
  ht.value() == 1 ? ti = cu(() => O0(t, n), $.simulation.delay) : ti.stop();
}, I0 = (t, n, e, r) => {
  Vn.update(() => m0(n)), ht.update(() => C0(t, n)), Yn.update(() => Re(t, n, e, r)), x.lattice.widget.update(() => Re(t, n, e, r));
}, R0 = {
  name: "@explorables/lotka_martini",
  title: "Lotka Martini",
  subtitle: "The Lotka-Volterra model",
  description: "This explorable illustrates oscillatory dynamics and spatio-temporal patterns in the most famous predator prey model on a lattice.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function F0(t, n = Mo) {
  const e = a0(t, n), r = e.display, i = e.controls, o = e.grid;
  return y0(i, o), I0(r, i, o, n), Re(r, i, o, n), {
    halt() {
      ht.value() === 1 && ht.press(i);
    },
    reset() {
      ht.value() === 1 && ht.press(i), Vn.press(i), Yn.press(i);
    },
    config: n,
    meta: R0
  };
}
export {
  Mo as config,
  F0 as default,
  F0 as load,
  R0 as meta
};
