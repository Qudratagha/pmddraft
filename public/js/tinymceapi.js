/*!
 * TinyMCE
 *
 * Copyright (c) 2024 Ephox Corporation DBA Tiny Technologies, Inc.
 * Licensed under the Tiny commercial license. See https://www.tiny.cloud/legal/
 *
 * Version: 6.8.3
 */
!function () {
    "use strict";
    var e = function (e) {
        if (null === e) return "null";
        if (void 0 === e) return "undefined";
        var t = typeof e;
        return "object" === t && (Array.prototype.isPrototypeOf(e) || e.constructor && "Array" === e.constructor.name) ? "array" : "object" === t && (String.prototype.isPrototypeOf(e) || e.constructor && "String" === e.constructor.name) ? "string" : t
    }, t = function (e) {
        return {eq: e}
    }, n = t((function (e, t) {
        return e === t
    })), o = function (e) {
        return t((function (t, n) {
            if (t.length !== n.length) return !1;
            for (var o = t.length, r = 0; r < o; r++) if (!e.eq(t[r], n[r])) return !1;
            return !0
        }))
    }, r = function (e) {
        return t((function (r, s) {
            var a = Object.keys(r), i = Object.keys(s);
            if (!function (e, n) {
                return function (e, n) {
                    return t((function (t, o) {
                        return e.eq(n(t), n(o))
                    }))
                }(o(e), (function (e) {
                    return function (e, t) {
                        return Array.prototype.slice.call(e).sort(t)
                    }(e, n)
                }))
            }(n).eq(a, i)) return !1;
            for (var l = a.length, d = 0; d < l; d++) {
                var c = a[d];
                if (!e.eq(r[c], s[c])) return !1
            }
            return !0
        }))
    }, s = t((function (t, n) {
        if (t === n) return !0;
        var a = e(t);
        return a === e(n) && (function (e) {
            return -1 !== ["undefined", "boolean", "number", "string", "function", "xml", "null"].indexOf(e)
        }(a) ? t === n : "array" === a ? o(s).eq(t, n) : "object" === a && r(s).eq(t, n))
    }));
    const a = Object.getPrototypeOf, i = (e, t, n) => {
            var o;
            return !!n(e, t.prototype) || (null === (o = e.constructor) || void 0 === o ? void 0 : o.name) === t.name
        }, l = e => t => (e => {
            const t = typeof e;
            return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && i(e, String, ((e, t) => t.isPrototypeOf(e))) ? "string" : t
        })(t) === e, d = e => t => typeof t === e, c = e => t => e === t,
        u = (e, t) => f(e) && i(e, t, ((e, t) => a(e) === t)), m = l("string"), f = l("object"), g = e => u(e, Object),
        p = l("array"), h = c(null), b = d("boolean"), v = c(void 0), y = e => null == e, C = e => !y(e),
        w = d("function"), x = d("number"), E = (e, t) => {
            if (p(e)) {
                for (let n = 0, o = e.length; n < o; ++n) if (!t(e[n])) return !1;
                return !0
            }
            return !1
        }, _ = () => {
        }, k = (e, t) => (...n) => e(t.apply(null, n)), S = (e, t) => n => e(t(n)), N = e => () => e, R = e => e,
        A = (e, t) => e === t;

    function T(e, ...t) {
        return (...n) => {
            const o = t.concat(n);
            return e.apply(null, o)
        }
    }

    const O = e => t => !e(t), B = e => () => {
        throw new Error(e)
    }, P = e => e(), D = e => {
        e()
    }, L = N(!1), M = N(!0);

    class I {
        constructor(e, t) {
            this.tag = e, this.value = t
        }

        static some(e) {
            return new I(!0, e)
        }

        static none() {
            return I.singletonNone
        }

        fold(e, t) {
            return this.tag ? t(this.value) : e()
        }

        isSome() {
            return this.tag
        }

        isNone() {
            return !this.tag
        }

        map(e) {
            return this.tag ? I.some(e(this.value)) : I.none()
        }

        bind(e) {
            return this.tag ? e(this.value) : I.none()
        }

        exists(e) {
            return this.tag && e(this.value)
        }

        forall(e) {
            return !this.tag || e(this.value)
        }

        filter(e) {
            return !this.tag || e(this.value) ? this : I.none()
        }

        getOr(e) {
            return this.tag ? this.value : e
        }

        or(e) {
            return this.tag ? this : e
        }

        getOrThunk(e) {
            return this.tag ? this.value : e()
        }

        orThunk(e) {
            return this.tag ? this : e()
        }

        getOrDie(e) {
            if (this.tag) return this.value;
            throw new Error(null != e ? e : "Called getOrDie on None")
        }

        static from(e) {
            return C(e) ? I.some(e) : I.none()
        }

        getOrNull() {
            return this.tag ? this.value : null
        }

        getOrUndefined() {
            return this.value
        }

        each(e) {
            this.tag && e(this.value)
        }

        toArray() {
            return this.tag ? [this.value] : []
        }

        toString() {
            return this.tag ? `some(${this.value})` : "none()"
        }
    }

    I.singletonNone = new I(!1);
    const F = Array.prototype.slice, U = Array.prototype.indexOf, z = Array.prototype.push, j = (e, t) => U.call(e, t),
        H = (e, t) => j(e, t) > -1, $ = (e, t) => {
            for (let n = 0, o = e.length; n < o; n++) if (t(e[n], n)) return !0;
            return !1
        }, q = (e, t) => {
            const n = e.length, o = new Array(n);
            for (let r = 0; r < n; r++) {
                const n = e[r];
                o[r] = t(n, r)
            }
            return o
        }, V = (e, t) => {
            for (let n = 0, o = e.length; n < o; n++) t(e[n], n)
        }, W = (e, t) => {
            for (let n = e.length - 1; n >= 0; n--) t(e[n], n)
        }, K = (e, t) => {
            const n = [], o = [];
            for (let r = 0, s = e.length; r < s; r++) {
                const s = e[r];
                (t(s, r) ? n : o).push(s)
            }
            return {pass: n, fail: o}
        }, Y = (e, t) => {
            const n = [];
            for (let o = 0, r = e.length; o < r; o++) {
                const r = e[o];
                t(r, o) && n.push(r)
            }
            return n
        }, G = (e, t, n) => (W(e, ((e, o) => {
            n = t(n, e, o)
        })), n), X = (e, t, n) => (V(e, ((e, o) => {
            n = t(n, e, o)
        })), n), Q = (e, t, n) => {
            for (let o = 0, r = e.length; o < r; o++) {
                const r = e[o];
                if (t(r, o)) return I.some(r);
                if (n(r, o)) break
            }
            return I.none()
        }, J = (e, t) => Q(e, t, L), Z = (e, t) => {
            for (let n = 0, o = e.length; n < o; n++) if (t(e[n], n)) return I.some(n);
            return I.none()
        }, ee = e => {
            const t = [];
            for (let n = 0, o = e.length; n < o; ++n) {
                if (!p(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
                z.apply(t, e[n])
            }
            return t
        }, te = (e, t) => ee(q(e, t)), ne = (e, t) => {
            for (let n = 0, o = e.length; n < o; ++n) if (!0 !== t(e[n], n)) return !1;
            return !0
        }, oe = e => {
            const t = F.call(e, 0);
            return t.reverse(), t
        }, re = (e, t) => Y(e, (e => !H(t, e))), se = (e, t) => {
            const n = {};
            for (let o = 0, r = e.length; o < r; o++) {
                const r = e[o];
                n[String(r)] = t(r, o)
            }
            return n
        }, ae = (e, t) => {
            const n = F.call(e, 0);
            return n.sort(t), n
        }, ie = (e, t) => t >= 0 && t < e.length ? I.some(e[t]) : I.none(), le = e => ie(e, 0),
        de = e => ie(e, e.length - 1), ce = w(Array.from) ? Array.from : e => F.call(e), ue = (e, t) => {
            for (let n = 0; n < e.length; n++) {
                const o = t(e[n], n);
                if (o.isSome()) return o
            }
            return I.none()
        }, me = Object.keys, fe = Object.hasOwnProperty, ge = (e, t) => {
            const n = me(e);
            for (let o = 0, r = n.length; o < r; o++) {
                const r = n[o];
                t(e[r], r)
            }
        }, pe = (e, t) => he(e, ((e, n) => ({k: n, v: t(e, n)}))), he = (e, t) => {
            const n = {};
            return ge(e, ((e, o) => {
                const r = t(e, o);
                n[r.k] = r.v
            })), n
        }, be = e => (t, n) => {
            e[n] = t
        }, ve = (e, t, n, o) => {
            ge(e, ((e, r) => {
                (t(e, r) ? n : o)(e, r)
            }))
        }, ye = (e, t) => {
            const n = {};
            return ve(e, t, be(n), _), n
        }, Ce = (e, t) => {
            const n = [];
            return ge(e, ((e, o) => {
                n.push(t(e, o))
            })), n
        }, we = e => Ce(e, R), xe = (e, t) => Ee(e, t) ? I.from(e[t]) : I.none(), Ee = (e, t) => fe.call(e, t),
        _e = (e, t) => Ee(e, t) && void 0 !== e[t] && null !== e[t], ke = e => {
            const t = {};
            return V(e, (e => {
                t[e] = {}
            })), me(t)
        }, Se = e => void 0 !== e.length, Ne = Array.isArray, Re = (e, t, n) => {
            if (!e) return !1;
            if (n = n || e, Se(e)) {
                for (let o = 0, r = e.length; o < r; o++) if (!1 === t.call(n, e[o], o, e)) return !1
            } else for (const o in e) if (Ee(e, o) && !1 === t.call(n, e[o], o, e)) return !1;
            return !0
        }, Ae = (e, t) => {
            const n = [];
            return Re(e, ((o, r) => {
                n.push(t(o, r, e))
            })), n
        }, Te = (e, t) => {
            const n = [];
            return Re(e, ((o, r) => {
                t && !t(o, r, e) || n.push(o)
            })), n
        }, Oe = (e, t, n, o) => {
            let r = v(n) ? e[0] : n;
            for (let n = 0; n < e.length; n++) r = t.call(o, r, e[n], n);
            return r
        }, Be = (e, t, n) => {
            for (let o = 0, r = e.length; o < r; o++) if (t.call(n, e[o], o, e)) return o;
            return -1
        }, Pe = e => e[e.length - 1], De = e => {
            let t, n = !1;
            return (...o) => (n || (n = !0, t = e.apply(null, o)), t)
        }, Le = () => Me(0, 0), Me = (e, t) => ({major: e, minor: t}), Ie = {
            nu: Me, detect: (e, t) => {
                const n = String(t).toLowerCase();
                return 0 === e.length ? Le() : ((e, t) => {
                    const n = ((e, t) => {
                        for (let n = 0; n < e.length; n++) {
                            const o = e[n];
                            if (o.test(t)) return o
                        }
                    })(e, t);
                    if (!n) return {major: 0, minor: 0};
                    const o = e => Number(t.replace(n, "$" + e));
                    return Me(o(1), o(2))
                })(e, n)
            }, unknown: Le
        }, Fe = (e, t) => {
            const n = String(t).toLowerCase();
            return J(e, (e => e.search(n)))
        }, Ue = (e, t, n) => "" === t || e.length >= t.length && e.substr(n, n + t.length) === t,
        ze = (e, t) => He(e, t) ? ((e, t) => e.substring(t))(e, t.length) : e, je = (e, t, n = 0, o) => {
            const r = e.indexOf(t, n);
            return -1 !== r && (!!v(o) || r + t.length <= o)
        }, He = (e, t) => Ue(e, t, 0), $e = (e, t) => Ue(e, t, e.length - t.length), qe = e => t => t.replace(e, ""),
        Ve = qe(/^\s+|\s+$/g), We = qe(/^\s+/g), Ke = qe(/\s+$/g), Ye = e => e.length > 0, Ge = e => !Ye(e),
        Xe = (e, t = 10) => {
            const n = parseInt(e, t);
            return isNaN(n) ? I.none() : I.some(n)
        }, Qe = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/, Je = e => t => je(t, e), Ze = [{
            name: "Edge",
            versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
            search: e => je(e, "edge/") && je(e, "chrome") && je(e, "safari") && je(e, "applewebkit")
        }, {
            name: "Chromium",
            brand: "Chromium",
            versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Qe],
            search: e => je(e, "chrome") && !je(e, "chromeframe")
        }, {
            name: "IE",
            versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
            search: e => je(e, "msie") || je(e, "trident")
        }, {name: "Opera", versionRegexes: [Qe, /.*?opera\/([0-9]+)\.([0-9]+).*/], search: Je("opera")}, {
            name: "Firefox",
            versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
            search: Je("firefox")
        }, {
            name: "Safari",
            versionRegexes: [Qe, /.*?cpu os ([0-9]+)_([0-9]+).*/],
            search: e => (je(e, "safari") || je(e, "mobile/")) && je(e, "applewebkit")
        }], et = [{
            name: "Windows",
            search: Je("win"),
            versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
        }, {
            name: "iOS",
            search: e => je(e, "iphone") || je(e, "ipad"),
            versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
        }, {name: "Android", search: Je("android"), versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]}, {
            name: "macOS",
            search: Je("mac os x"),
            versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
        }, {name: "Linux", search: Je("linux"), versionRegexes: []}, {
            name: "Solaris",
            search: Je("sunos"),
            versionRegexes: []
        }, {name: "FreeBSD", search: Je("freebsd"), versionRegexes: []}, {
            name: "ChromeOS",
            search: Je("cros"),
            versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
        }], tt = {browsers: N(Ze), oses: N(et)}, nt = "Edge", ot = "Chromium", rt = "Opera", st = "Firefox", at = "Safari",
        it = e => {
            const t = e.current, n = e.version, o = e => () => t === e;
            return {
                current: t,
                version: n,
                isEdge: o(nt),
                isChromium: o(ot),
                isIE: o("IE"),
                isOpera: o(rt),
                isFirefox: o(st),
                isSafari: o(at)
            }
        }, lt = () => it({current: void 0, version: Ie.unknown()}), dt = it,
        ct = (N(nt), N(ot), N("IE"), N(rt), N(st), N(at), "Windows"), ut = "Android", mt = "Linux", ft = "macOS",
        gt = "Solaris", pt = "FreeBSD", ht = "ChromeOS", bt = e => {
            const t = e.current, n = e.version, o = e => () => t === e;
            return {
                current: t,
                version: n,
                isWindows: o(ct),
                isiOS: o("iOS"),
                isAndroid: o(ut),
                isMacOS: o(ft),
                isLinux: o(mt),
                isSolaris: o(gt),
                isFreeBSD: o(pt),
                isChromeOS: o(ht)
            }
        }, vt = () => bt({current: void 0, version: Ie.unknown()}), yt = bt,
        Ct = (N(ct), N("iOS"), N(ut), N(mt), N(ft), N(gt), N(pt), N(ht), e => window.matchMedia(e).matches);
    let wt = De((() => ((e, t, n) => {
        const o = tt.browsers(), r = tt.oses(), s = t.bind((e => ((e, t) => ue(t.brands, (t => {
            const n = t.brand.toLowerCase();
            return J(e, (e => {
                var t;
                return n === (null === (t = e.brand) || void 0 === t ? void 0 : t.toLowerCase())
            })).map((e => ({current: e.name, version: Ie.nu(parseInt(t.version, 10), 0)})))
        })))(o, e))).orThunk((() => ((e, t) => Fe(e, t).map((e => {
            const n = Ie.detect(e.versionRegexes, t);
            return {current: e.name, version: n}
        })))(o, e))).fold(lt, dt), a = ((e, t) => Fe(e, t).map((e => {
            const n = Ie.detect(e.versionRegexes, t);
            return {current: e.name, version: n}
        })))(r, e).fold(vt, yt), i = ((e, t, n, o) => {
            const r = e.isiOS() && !0 === /ipad/i.test(n), s = e.isiOS() && !r, a = e.isiOS() || e.isAndroid(),
                i = a || o("(pointer:coarse)"), l = r || !s && a && o("(min-device-width:768px)"), d = s || a && !l,
                c = t.isSafari() && e.isiOS() && !1 === /safari/i.test(n), u = !d && !l && !c;
            return {
                isiPad: N(r),
                isiPhone: N(s),
                isTablet: N(l),
                isPhone: N(d),
                isTouch: N(i),
                isAndroid: e.isAndroid,
                isiOS: e.isiOS,
                isWebView: N(c),
                isDesktop: N(u)
            }
        })(a, s, e, n);
        return {browser: s, os: a, deviceType: i}
    })(navigator.userAgent, I.from(navigator.userAgentData), Ct)));
    const xt = () => wt(), Et = navigator.userAgent, _t = xt(), kt = _t.browser, St = _t.os, Nt = _t.deviceType,
        Rt = -1 !== Et.indexOf("Windows Phone"), At = {
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            documentMode: kt.isIE() ? document.documentMode || 7 : 10,
            cacheSuffix: null,
            container: null,
            canHaveCSP: !kt.isIE(),
            windowsPhone: Rt,
            browser: {
                current: kt.current,
                version: kt.version,
                isChromium: kt.isChromium,
                isEdge: kt.isEdge,
                isFirefox: kt.isFirefox,
                isIE: kt.isIE,
                isOpera: kt.isOpera,
                isSafari: kt.isSafari
            },
            os: {
                current: St.current,
                version: St.version,
                isAndroid: St.isAndroid,
                isChromeOS: St.isChromeOS,
                isFreeBSD: St.isFreeBSD,
                isiOS: St.isiOS,
                isLinux: St.isLinux,
                isMacOS: St.isMacOS,
                isSolaris: St.isSolaris,
                isWindows: St.isWindows
            },
            deviceType: {
                isDesktop: Nt.isDesktop,
                isiPad: Nt.isiPad,
                isiPhone: Nt.isiPhone,
                isPhone: Nt.isPhone,
                isTablet: Nt.isTablet,
                isTouch: Nt.isTouch,
                isWebView: Nt.isWebView
            }
        }, Tt = /^\s*|\s*$/g, Ot = e => y(e) ? "" : ("" + e).replace(Tt, ""), Bt = function (e, t, n, o) {
            o = o || this, e && (n && (e = e[n]), Re(e, ((e, r) => !1 !== t.call(o, e, r, n) && (Bt(e, t, n, o), !0))))
        }, Pt = {
            trim: Ot,
            isArray: Ne,
            is: (e, t) => t ? !("array" !== t || !Ne(e)) || typeof e === t : void 0 !== e,
            toArray: e => {
                if (Ne(e)) return e;
                {
                    const t = [];
                    for (let n = 0, o = e.length; n < o; n++) t[n] = e[n];
                    return t
                }
            },
            makeMap: (e, t, n = {}) => {
                const o = m(e) ? e.split(t || ",") : e || [];
                let r = o.length;
                for (; r--;) n[o[r]] = {};
                return n
            },
            each: Re,
            map: Ae,
            grep: Te,
            inArray: (e, t) => {
                if (e) for (let n = 0, o = e.length; n < o; n++) if (e[n] === t) return n;
                return -1
            },
            hasOwn: Ee,
            extend: (e, ...t) => {
                for (let n = 0; n < t.length; n++) {
                    const o = t[n];
                    for (const t in o) if (Ee(o, t)) {
                        const n = o[t];
                        void 0 !== n && (e[t] = n)
                    }
                }
                return e
            },
            walk: Bt,
            resolve: (e, t = window) => {
                const n = e.split(".");
                for (let e = 0, o = n.length; e < o && (t = t[n[e]]); e++) ;
                return t
            },
            explode: (e, t) => p(e) ? e : "" === e ? [] : Ae(e.split(t || ","), Ot),
            _addCacheSuffix: e => {
                const t = At.cacheSuffix;
                return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e
            }
        }, Dt = (e, t, n = A) => e.exists((e => n(e, t))),
        Lt = (e, t, n = A) => Mt(e, t, n).getOr(e.isNone() && t.isNone()),
        Mt = (e, t, n) => e.isSome() && t.isSome() ? I.some(n(e.getOrDie(), t.getOrDie())) : I.none(),
        It = (e, t) => e ? I.some(t) : I.none(),
        Ft = "undefined" != typeof window ? window : Function("return this;")(), Ut = (e, t) => ((e, t) => {
            let n = null != t ? t : Ft;
            for (let t = 0; t < e.length && null != n; ++t) n = n[e[t]];
            return n
        })(e.split("."), t), zt = Object.getPrototypeOf, jt = e => {
            const t = Ut("ownerDocument.defaultView", e);
            return f(e) && ((e => ((e, t) => {
                const n = ((e, t) => Ut(e, t))(e, t);
                if (null == n) throw new Error(e + " not available on this browser");
                return n
            })("HTMLElement", e))(t).prototype.isPrototypeOf(e) || /^HTML\w*Element$/.test(zt(e).constructor.name))
        }, Ht = e => e.dom.nodeName.toLowerCase(), $t = e => e.dom.nodeType, qt = e => t => $t(t) === e,
        Vt = e => Wt(e) && jt(e.dom), Wt = qt(1), Kt = qt(3), Yt = qt(9), Gt = qt(11),
        Xt = e => t => Wt(t) && Ht(t) === e, Qt = (e, t, n) => {
            if (!(m(n) || b(n) || x(n))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
            e.setAttribute(t, n + "")
        }, Jt = (e, t, n) => {
            Qt(e.dom, t, n)
        }, Zt = (e, t) => {
            const n = e.dom;
            ge(t, ((e, t) => {
                Qt(n, t, e)
            }))
        }, en = (e, t) => {
            const n = e.dom.getAttribute(t);
            return null === n ? void 0 : n
        }, tn = (e, t) => I.from(en(e, t)), nn = (e, t) => {
            const n = e.dom;
            return !(!n || !n.hasAttribute) && n.hasAttribute(t)
        }, on = (e, t) => {
            e.dom.removeAttribute(t)
        }, rn = e => X(e.dom.attributes, ((e, t) => (e[t.name] = t.value, e)), {}), sn = (e, t) => {
            const n = en(e, t);
            return void 0 === n || "" === n ? [] : n.split(" ")
        }, an = e => void 0 !== e.dom.classList, ln = e => sn(e, "class"), dn = (e, t) => ((e, t, n) => {
            const o = sn(e, t).concat([n]);
            return Jt(e, t, o.join(" ")), !0
        })(e, "class", t), cn = (e, t) => ((e, t, n) => {
            const o = Y(sn(e, t), (e => e !== n));
            return o.length > 0 ? Jt(e, t, o.join(" ")) : on(e, t), !1
        })(e, "class", t), un = (e, t) => {
            an(e) ? e.dom.classList.add(t) : dn(e, t)
        }, mn = e => {
            0 === (an(e) ? e.dom.classList : ln(e)).length && on(e, "class")
        }, fn = (e, t) => {
            an(e) ? e.dom.classList.remove(t) : cn(e, t), mn(e)
        }, gn = (e, t) => an(e) && e.dom.classList.contains(t), pn = e => {
            if (null == e) throw new Error("Node cannot be null or undefined");
            return {dom: e}
        }, hn = (e, t) => {
            const n = (t || document).createElement("div");
            if (n.innerHTML = e, !n.hasChildNodes() || n.childNodes.length > 1) {
                const t = "HTML does not have a single root node";
                throw console.error(t, e), new Error(t)
            }
            return pn(n.childNodes[0])
        }, bn = (e, t) => {
            const n = (t || document).createElement(e);
            return pn(n)
        }, vn = (e, t) => {
            const n = (t || document).createTextNode(e);
            return pn(n)
        }, yn = pn, Cn = (e, t, n) => I.from(e.dom.elementFromPoint(t, n)).map(pn), wn = (e, t) => {
            const n = [], o = e => (n.push(e), t(e));
            let r = t(e);
            do {
                r = r.bind(o)
            } while (r.isSome());
            return n
        }, xn = (e, t) => {
            const n = e.dom;
            if (1 !== n.nodeType) return !1;
            {
                const e = n;
                if (void 0 !== e.matches) return e.matches(t);
                if (void 0 !== e.msMatchesSelector) return e.msMatchesSelector(t);
                if (void 0 !== e.webkitMatchesSelector) return e.webkitMatchesSelector(t);
                if (void 0 !== e.mozMatchesSelector) return e.mozMatchesSelector(t);
                throw new Error("Browser lacks native selectors")
            }
        }, En = e => 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType || 0 === e.childElementCount,
        _n = (e, t) => e.dom === t.dom, kn = (e, t) => {
            const n = e.dom, o = t.dom;
            return n !== o && n.contains(o)
        }, Sn = e => yn(e.dom.ownerDocument), Nn = e => Yt(e) ? e : Sn(e), Rn = e => yn(Nn(e).dom.defaultView),
        An = e => I.from(e.dom.parentNode).map(yn), Tn = e => I.from(e.dom.parentElement).map(yn), On = (e, t) => {
            const n = w(t) ? t : L;
            let o = e.dom;
            const r = [];
            for (; null !== o.parentNode && void 0 !== o.parentNode;) {
                const e = o.parentNode, t = yn(e);
                if (r.push(t), !0 === n(t)) break;
                o = e
            }
            return r
        }, Bn = e => I.from(e.dom.previousSibling).map(yn), Pn = e => I.from(e.dom.nextSibling).map(yn),
        Dn = e => oe(wn(e, Bn)), Ln = e => wn(e, Pn), Mn = e => q(e.dom.childNodes, yn), In = (e, t) => {
            const n = e.dom.childNodes;
            return I.from(n[t]).map(yn)
        }, Fn = e => In(e, 0), Un = e => In(e, e.dom.childNodes.length - 1), zn = e => e.dom.childNodes.length,
        jn = e => Gt(e) && C(e.dom.host), Hn = w(Element.prototype.attachShadow) && w(Node.prototype.getRootNode),
        $n = N(Hn), qn = Hn ? e => yn(e.dom.getRootNode()) : Nn, Vn = e => jn(e) ? e : (e => {
            const t = e.dom.head;
            if (null == t) throw new Error("Head is not available yet");
            return yn(t)
        })(Nn(e)), Wn = e => yn(e.dom.host), Kn = e => {
            if ($n() && C(e.target)) {
                const t = yn(e.target);
                if (Wt(t) && Yn(t) && e.composed && e.composedPath) {
                    const t = e.composedPath();
                    if (t) return le(t)
                }
            }
            return I.from(e.target)
        }, Yn = e => C(e.dom.shadowRoot), Gn = e => {
            const t = Kt(e) ? e.dom.parentNode : e.dom;
            if (null == t || null === t.ownerDocument) return !1;
            const n = t.ownerDocument;
            return (e => {
                const t = qn(e);
                return jn(t) ? I.some(t) : I.none()
            })(yn(t)).fold((() => n.body.contains(t)), S(Gn, Wn))
        };
    var Xn = (e, t, n, o, r) => e(n, o) ? I.some(n) : w(r) && r(n) ? I.none() : t(n, o, r);
    const Qn = (e, t, n) => {
            let o = e.dom;
            const r = w(n) ? n : L;
            for (; o.parentNode;) {
                o = o.parentNode;
                const e = yn(o);
                if (t(e)) return I.some(e);
                if (r(e)) break
            }
            return I.none()
        }, Jn = (e, t, n) => Xn(((e, t) => t(e)), Qn, e, t, n), Zn = (e, t) => {
            const n = e => {
                for (let o = 0; o < e.childNodes.length; o++) {
                    const r = yn(e.childNodes[o]);
                    if (t(r)) return I.some(r);
                    const s = n(e.childNodes[o]);
                    if (s.isSome()) return s
                }
                return I.none()
            };
            return n(e.dom)
        }, eo = (e, t, n) => Qn(e, (e => xn(e, t)), n), to = (e, t) => ((e, t) => {
            const n = void 0 === t ? document : t.dom;
            return En(n) ? I.none() : I.from(n.querySelector(e)).map(yn)
        })(t, e), no = (e, t, n) => Xn(((e, t) => xn(e, t)), eo, e, t, n), oo = (e, t = !1) => {
            return Gn(e) ? e.dom.isContentEditable : (n = e, no(n, "[contenteditable]")).fold(N(t), (e => "true" === ro(e)));
            var n
        }, ro = e => e.dom.contentEditable, so = e => void 0 !== e.style && w(e.style.getPropertyValue), ao = (e, t, n) => {
            if (!m(n)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
            so(e) && e.style.setProperty(t, n)
        }, io = (e, t, n) => {
            const o = e.dom;
            ao(o, t, n)
        }, lo = (e, t) => {
            const n = e.dom;
            ge(t, ((e, t) => {
                ao(n, t, e)
            }))
        }, co = (e, t) => {
            const n = e.dom, o = window.getComputedStyle(n).getPropertyValue(t);
            return "" !== o || Gn(e) ? o : uo(n, t)
        }, uo = (e, t) => so(e) ? e.style.getPropertyValue(t) : "", mo = (e, t) => {
            const n = e.dom, o = uo(n, t);
            return I.from(o).filter((e => e.length > 0))
        }, fo = e => {
            const t = {}, n = e.dom;
            if (so(n)) for (let e = 0; e < n.style.length; e++) {
                const o = n.style.item(e);
                t[o] = n.style[o]
            }
            return t
        }, go = (e, t) => {
            ((e, t) => {
                so(e) && e.style.removeProperty(t)
            })(e.dom, t), Dt(tn(e, "style").map(Ve), "") && on(e, "style")
        }, po = (e, t) => {
            An(e).each((n => {
                n.dom.insertBefore(t.dom, e.dom)
            }))
        }, ho = (e, t) => {
            Pn(e).fold((() => {
                An(e).each((e => {
                    vo(e, t)
                }))
            }), (e => {
                po(e, t)
            }))
        }, bo = (e, t) => {
            Fn(e).fold((() => {
                vo(e, t)
            }), (n => {
                e.dom.insertBefore(t.dom, n.dom)
            }))
        }, vo = (e, t) => {
            e.dom.appendChild(t.dom)
        }, yo = (e, t) => {
            po(e, t), vo(t, e)
        }, Co = (e, t) => {
            V(t, (t => {
                vo(e, t)
            }))
        }, wo = e => {
            e.dom.textContent = "", V(Mn(e), (e => {
                xo(e)
            }))
        }, xo = e => {
            const t = e.dom;
            null !== t.parentNode && t.parentNode.removeChild(t)
        }, Eo = e => {
            const t = Mn(e);
            var n, o;
            t.length > 0 && (n = e, V(o = t, ((e, t) => {
                const r = 0 === t ? n : o[t - 1];
                ho(r, e)
            }))), xo(e)
        }, _o = e => q(e, yn), ko = e => e.dom.innerHTML, So = (e, t) => {
            const n = Sn(e).dom, o = yn(n.createDocumentFragment()), r = ((e, t) => {
                const n = (t || document).createElement("div");
                return n.innerHTML = e, Mn(yn(n))
            })(t, n);
            Co(o, r), wo(e), vo(e, o)
        }, No = (e, t, n, o) => ((e, t, n, o, r) => {
            const s = ((e, t) => n => {
                e(n) && t((e => {
                    const t = yn(Kn(e).getOr(e.target)), n = () => e.stopPropagation(), o = () => e.preventDefault(),
                        r = k(o, n);
                    return ((e, t, n, o, r, s, a) => ({
                        target: e,
                        x: t,
                        y: n,
                        stop: o,
                        prevent: r,
                        kill: s,
                        raw: a
                    }))(t, e.clientX, e.clientY, n, o, r, e)
                })(n))
            })(n, o);
            return e.dom.addEventListener(t, s, false), {unbind: T(Ro, e, t, s, false)}
        })(e, t, n, o), Ro = (e, t, n, o) => {
            e.dom.removeEventListener(t, n, o)
        }, Ao = (e, t) => ({left: e, top: t, translate: (n, o) => Ao(e + n, t + o)}), To = Ao,
        Oo = (e, t) => void 0 !== e ? e : void 0 !== t ? t : 0, Bo = e => {
            const t = e.dom, n = t.ownerDocument.body;
            return n === t ? To(n.offsetLeft, n.offsetTop) : Gn(e) ? (e => {
                const t = e.getBoundingClientRect();
                return To(t.left, t.top)
            })(t) : To(0, 0)
        }, Po = e => {
            const t = void 0 !== e ? e.dom : document, n = t.body.scrollLeft || t.documentElement.scrollLeft,
                o = t.body.scrollTop || t.documentElement.scrollTop;
            return To(n, o)
        }, Do = (e, t, n) => {
            const o = (void 0 !== n ? n.dom : document).defaultView;
            o && o.scrollTo(e, t)
        }, Lo = (e, t) => {
            xt().browser.isSafari() && w(e.dom.scrollIntoViewIfNeeded) ? e.dom.scrollIntoViewIfNeeded(!1) : e.dom.scrollIntoView(t)
        }, Mo = (e, t, n, o) => ({x: e, y: t, width: n, height: o, right: e + n, bottom: t + o}), Io = e => {
            const t = void 0 === e ? window : e, n = t.document, o = Po(yn(n));
            return (e => {
                const t = void 0 === e ? window : e;
                return xt().browser.isFirefox() ? I.none() : I.from(t.visualViewport)
            })(t).fold((() => {
                const e = t.document.documentElement, n = e.clientWidth, r = e.clientHeight;
                return Mo(o.left, o.top, n, r)
            }), (e => Mo(Math.max(e.pageLeft, o.left), Math.max(e.pageTop, o.top), e.width, e.height)))
        }, Fo = (e, t) => {
            let n = [];
            return V(Mn(e), (e => {
                t(e) && (n = n.concat([e])), n = n.concat(Fo(e, t))
            })), n
        }, Uo = (e, t) => ((e, t) => {
            const n = void 0 === t ? document : t.dom;
            return En(n) ? [] : q(n.querySelectorAll(e), yn)
        })(t, e), zo = (e, t, n) => eo(e, t, n).isSome();

    class jo {
        constructor(e, t) {
            this.node = e, this.rootNode = t, this.current = this.current.bind(this), this.next = this.next.bind(this), this.prev = this.prev.bind(this), this.prev2 = this.prev2.bind(this)
        }

        current() {
            return this.node
        }

        next(e) {
            return this.node = this.findSibling(this.node, "firstChild", "nextSibling", e), this.node
        }

        prev(e) {
            return this.node = this.findSibling(this.node, "lastChild", "previousSibling", e), this.node
        }

        prev2(e) {
            return this.node = this.findPreviousNode(this.node, e), this.node
        }

        findSibling(e, t, n, o) {
            if (e) {
                if (!o && e[t]) return e[t];
                if (e !== this.rootNode) {
                    let t = e[n];
                    if (t) return t;
                    for (let o = e.parentNode; o && o !== this.rootNode; o = o.parentNode) if (t = o[n], t) return t
                }
            }
        }

        findPreviousNode(e, t) {
            if (e) {
                const n = e.previousSibling;
                if (this.rootNode && n === this.rootNode) return;
                if (n) {
                    if (!t) for (let e = n.lastChild; e; e = e.lastChild) if (!e.lastChild) return e;
                    return n
                }
                const o = e.parentNode;
                if (o && o !== this.rootNode) return o
            }
        }
    }

    const Ho = e => t => !!t && t.nodeType === e, $o = e => !!e && !Object.getPrototypeOf(e), qo = Ho(1),
        Vo = e => qo(e) && Vt(yn(e)), Wo = e => {
            const t = e.toLowerCase();
            return e => C(e) && e.nodeName.toLowerCase() === t
        }, Ko = e => {
            const t = e.map((e => e.toLowerCase()));
            return e => {
                if (e && e.nodeName) {
                    const n = e.nodeName.toLowerCase();
                    return H(t, n)
                }
                return !1
            }
        }, Yo = (e, t) => {
            const n = t.toLowerCase().split(" ");
            return t => {
                if (qo(t)) {
                    const o = t.ownerDocument.defaultView;
                    if (o) for (let r = 0; r < n.length; r++) {
                        const s = o.getComputedStyle(t, null);
                        if ((s ? s.getPropertyValue(e) : null) === n[r]) return !0
                    }
                }
                return !1
            }
        }, Go = e => t => qo(t) && t.hasAttribute(e), Xo = e => qo(e) && e.hasAttribute("data-mce-bogus"),
        Qo = e => qo(e) && "TABLE" === e.tagName, Jo = e => t => {
            if (Vo(t)) {
                if (t.contentEditable === e) return !0;
                if (t.getAttribute("data-mce-contenteditable") === e) return !0
            }
            return !1
        }, Zo = Ko(["textarea", "input"]), er = Ho(3), tr = Ho(4), nr = Ho(7), or = Ho(8), rr = Ho(9), sr = Ho(11),
        ar = Wo("br"), ir = Wo("img"), lr = Jo("true"), dr = Jo("false"), cr = Ko(["td", "th"]),
        ur = Ko(["td", "th", "caption"]), mr = Ko(["video", "audio", "object", "embed"]), fr = Wo("li"),
        gr = Wo("details"), pr = Wo("summary"), hr = "\ufeff", br = "\xa0", vr = e => e === hr, yr = ((e, t) => {
            const n = t => e(t) ? I.from(t.dom.nodeValue) : I.none();
            return {
                get: t => {
                    if (!e(t)) throw new Error("Can only get text value of a text node");
                    return n(t).getOr("")
                }, getOption: n, set: (t, n) => {
                    if (!e(t)) throw new Error("Can only set raw text value of a text node");
                    t.dom.nodeValue = n
                }
            }
        })(Kt), Cr = e => yr.get(e), wr = e => yr.getOption(e), xr = e => {
            let t;
            return n => (t = t || se(e, M), Ee(t, Ht(n)))
        }, Er = e => Wt(e) && "br" === Ht(e),
        _r = xr(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
        kr = xr(["ul", "ol", "dl"]), Sr = xr(["li", "dd", "dt"]), Nr = xr(["thead", "tbody", "tfoot"]),
        Rr = xr(["td", "th"]), Ar = xr(["pre", "script", "textarea", "style"]), Tr = () => {
            const e = bn("br");
            return Jt(e, "data-mce-bogus", "1"), e
        }, Or = e => {
            wo(e), vo(e, Tr())
        }, Br = hr, Pr = vr, Dr = e => e.replace(/\uFEFF/g, ""), Lr = qo, Mr = er,
        Ir = e => (Mr(e) && (e = e.parentNode), Lr(e) && e.hasAttribute("data-mce-caret")),
        Fr = e => Mr(e) && Pr(e.data), Ur = e => Ir(e) || Fr(e),
        zr = e => e.firstChild !== e.lastChild || !ar(e.firstChild), jr = e => {
            const t = e.container();
            return !!er(t) && (t.data.charAt(e.offset()) === Br || e.isAtStart() && Fr(t.previousSibling))
        }, Hr = e => {
            const t = e.container();
            return !!er(t) && (t.data.charAt(e.offset() - 1) === Br || e.isAtEnd() && Fr(t.nextSibling))
        }, $r = e => Mr(e) && e.data[0] === Br, qr = e => Mr(e) && e.data[e.data.length - 1] === Br,
        Vr = e => e && e.hasAttribute("data-mce-caret") ? ((e => {
            var t;
            const n = e.getElementsByTagName("br"), o = n[n.length - 1];
            Xo(o) && (null === (t = o.parentNode) || void 0 === t || t.removeChild(o))
        })(e), e.removeAttribute("data-mce-caret"), e.removeAttribute("data-mce-bogus"), e.removeAttribute("style"), e.removeAttribute("data-mce-style"), e.removeAttribute("_moz_abspos"), e) : null,
        Wr = e => Ir(e.startContainer), Kr = lr, Yr = dr, Gr = ar, Xr = er, Qr = Ko(["script", "style", "textarea"]),
        Jr = Ko(["img", "input", "textarea", "hr", "iframe", "video", "audio", "object", "embed"]), Zr = Ko(["table"]),
        es = Ur, ts = e => !es(e) && (Xr(e) ? !Qr(e.parentNode) : Jr(e) || Gr(e) || Zr(e) || ns(e)),
        ns = e => !(e => qo(e) && "true" === e.getAttribute("unselectable"))(e) && Yr(e),
        os = (e, t) => ts(e) && ((e, t) => {
            for (let n = e.parentNode; n && n !== t; n = n.parentNode) {
                if (ns(n)) return !1;
                if (Kr(n)) return !0
            }
            return !0
        })(e, t), rs = /^[ \t\r\n]*$/, ss = e => rs.test(e), as = e => {
            for (const t of e) if (!vr(t)) return !1;
            return !0
        }, is = e => "\n" === e || "\r" === e, ls = (e, t = 4, n = !0, o = !0) => {
            const r = ((e, t) => t <= 0 ? "" : new Array(t + 1).join(" "))(0, t), s = e.replace(/\t/g, r),
                a = X(s, ((e, t) => (e => -1 !== " \f\t\v".indexOf(e))(t) || t === br ? e.pcIsSpace || "" === e.str && n || e.str.length === s.length - 1 && o || ((e, t) => t < e.length && t >= 0 && is(e[t]))(s, e.str.length + 1) ? {
                    pcIsSpace: !1,
                    str: e.str + br
                } : {pcIsSpace: !0, str: e.str + " "} : {pcIsSpace: is(t), str: e.str + t}), {pcIsSpace: !1, str: ""});
            return a.str
        }, ds = (e, t) => ts(e) && !((e, t) => er(e) && ss(e.data) && !((e, t) => {
            const n = yn(t), o = yn(e);
            return zo(o, "pre,code", T(_n, n))
        })(e, t))(e, t) || (e => qo(e) && "A" === e.nodeName && !e.hasAttribute("href") && (e.hasAttribute("name") || e.hasAttribute("id")))(e) || cs(e),
        cs = Go("data-mce-bookmark"), us = Go("data-mce-bogus"),
        ms = ("data-mce-bogus", "all", e => qo(e) && "all" === e.getAttribute("data-mce-bogus"));
    const fs = e => Tn(yn(e)).exists((e => !oo(e))), gs = (e, t = !0) => ((e, t) => {
            let n = 0;
            if (ds(e, e)) return !1;
            {
                let o = e.firstChild;
                if (!o) return !0;
                const r = new jo(o, e);
                do {
                    if (t) {
                        if (ms(o)) {
                            o = r.next(!0);
                            continue
                        }
                        if (us(o)) {
                            o = r.next();
                            continue
                        }
                    }
                    if (lr(o) && fs(o)) return !1;
                    if (ar(o)) n++, o = r.next(); else {
                        if (ds(o, e)) return !1;
                        o = r.next()
                    }
                } while (o);
                return n <= 1
            }
        })(e.dom, t), ps = e => "svg" === e.toLowerCase(), hs = e => ps(e.nodeName),
        bs = e => "svg" === (null == e ? void 0 : e.nodeName) ? "svg" : "html", vs = ["svg"], ys = "data-mce-block",
        Cs = e => q((e => Y(me(e), (e => !/[A-Z]/.test(e))))(e), (e => `${e}:` + q(vs, (t => `not(${t} ${e})`)).join(":"))).join(","),
        ws = (e, t) => C(t.querySelector(e)) ? (t.setAttribute(ys, "true"), "inline-boundary" === t.getAttribute("data-mce-selected") && t.removeAttribute("data-mce-selected"), !0) : (t.removeAttribute(ys), !1),
        xs = (e, t) => {
            const n = Cs(e.getTransparentElements()), o = Cs(e.getBlockElements());
            return Y(t.querySelectorAll(n), (e => ws(o, e)))
        }, Es = (e, t) => {
            var n;
            const o = t ? "lastChild" : "firstChild";
            for (let t = e[o]; t; t = t[o]) if (gs(yn(t))) return void (null === (n = t.parentNode) || void 0 === n || n.removeChild(t))
        }, _s = (e, t, n) => {
            const o = e.getBlockElements(), r = yn(t), s = e => Ht(e) in o, a = e => _n(e, r);
            V(_o(n), (t => {
                Qn(t, s, a).each((n => {
                    const o = ((t, o) => Y(Mn(t), (t => s(t) && !e.isValidChild(Ht(n), Ht(t)))))(t);
                    if (o.length > 0) {
                        const t = Tn(n);
                        V(o, (e => {
                            Qn(e, s, a).each((t => {
                                ((e, t) => {
                                    const n = document.createRange(), o = e.parentNode;
                                    if (o) {
                                        n.setStartBefore(e), n.setEndBefore(t);
                                        const r = n.extractContents();
                                        Es(r, !0), n.setStartAfter(t), n.setEndAfter(e);
                                        const s = n.extractContents();
                                        Es(s, !1), gs(yn(r)) || o.insertBefore(r, e), gs(yn(t)) || o.insertBefore(t, e), gs(yn(s)) || o.insertBefore(s, e), o.removeChild(e)
                                    }
                                })(t.dom, e.dom)
                            }))
                        })), t.each((t => xs(e, t.dom)))
                    }
                }))
            }))
        }, ks = (e, t) => {
            const n = xs(e, t);
            _s(e, t, n), ((e, t, n) => {
                V([...n, ...Ts(e, t) ? [t] : []], (t => V(Uo(yn(t), t.nodeName.toLowerCase()), (t => {
                    Os(e, t.dom) && Eo(t)
                }))))
            })(e, t, n)
        }, Ss = (e, t) => {
            if (As(e, t)) {
                const n = Cs(e.getBlockElements());
                ws(n, t)
            }
        }, Ns = e => e.hasAttribute(ys), Rs = (e, t) => Ee(e.getTransparentElements(), t),
        As = (e, t) => qo(t) && Rs(e, t.nodeName), Ts = (e, t) => As(e, t) && Ns(t), Os = (e, t) => As(e, t) && !Ns(t),
        Bs = (e, t) => 1 === t.type && Rs(e, t.name) && m(t.attr(ys)), Ps = xt().browser, Ds = e => J(e, Wt),
        Ls = (e, t) => e.children && H(e.children, t), Ms = (e, t = {}) => {
            let n = 0;
            const o = {}, r = yn(e), s = Nn(r), a = e => {
                    vo(Vn(r), e)
                }, i = e => {
                    const t = Vn(r);
                    to(t, "#" + e).each(xo)
                }, l = e => xe(o, e).getOrThunk((() => ({id: "mce-u" + n++, passed: [], failed: [], count: 0}))),
                d = e => new Promise(((n, r) => {
                    let i;
                    const d = Pt._addCacheSuffix(e), c = l(d);
                    o[d] = c, c.count++;
                    const u = (e, t) => {
                        V(e, D), c.status = t, c.passed = [], c.failed = [], i && (i.onload = null, i.onerror = null, i = null)
                    }, m = () => u(c.passed, 2), f = () => u(c.failed, 3);
                    if (n && c.passed.push(n), r && c.failed.push(r), 1 === c.status) return;
                    if (2 === c.status) return void m();
                    if (3 === c.status) return void f();
                    c.status = 1;
                    const g = bn("link", s.dom);
                    Zt(g, {
                        rel: "stylesheet",
                        type: "text/css",
                        id: c.id
                    }), t.contentCssCors && Jt(g, "crossOrigin", "anonymous"), t.referrerPolicy && Jt(g, "referrerpolicy", t.referrerPolicy), i = g.dom, i.onload = m, i.onerror = f, a(g), Jt(g, "href", d)
                })), c = e => {
                    const t = Pt._addCacheSuffix(e);
                    xe(o, t).each((e => {
                        0 == --e.count && (delete o[t], i(e.id))
                    }))
                };
            return {
                load: d, loadRawCss: (e, t) => {
                    const n = l(e);
                    o[e] = n, n.count++;
                    const r = bn("style", s.dom);
                    Zt(r, {rel: "stylesheet", type: "text/css", id: n.id}), r.dom.innerHTML = t, a(r)
                }, loadAll: e => Promise.allSettled(q(e, (e => d(e).then(N(e))))).then((e => {
                    const t = K(e, (e => "fulfilled" === e.status));
                    return t.fail.length > 0 ? Promise.reject(q(t.fail, (e => e.reason))) : q(t.pass, (e => e.value))
                })), unload: c, unloadRawCss: e => {
                    xe(o, e).each((t => {
                        0 == --t.count && (delete o[e], i(t.id))
                    }))
                }, unloadAll: e => {
                    V(e, (e => {
                        c(e)
                    }))
                }, _setReferrerPolicy: e => {
                    t.referrerPolicy = e
                }, _setContentCssCors: e => {
                    t.contentCssCors = e
                }
            }
        }, Is = (() => {
            const e = new WeakMap;
            return {
                forElement: (t, n) => {
                    const o = qn(t).dom;
                    return I.from(e.get(o)).getOrThunk((() => {
                        const t = Ms(o, n);
                        return e.set(o, t), t
                    }))
                }
            }
        })(), Fs = (e, t, n) => C(e) && (ds(e, t) || n.isInline(e.nodeName.toLowerCase())),
        Us = e => (e => "span" === e.nodeName.toLowerCase())(e) && "bookmark" === e.getAttribute("data-mce-type"),
        zs = (e, t, n, o) => {
            var r;
            const s = o || t;
            if (qo(t) && Us(t)) return t;
            const a = t.childNodes;
            for (let t = a.length - 1; t >= 0; t--) zs(e, a[t], n, s);
            if (qo(t)) {
                const e = t.childNodes;
                1 === e.length && Us(e[0]) && (null === (r = t.parentNode) || void 0 === r || r.insertBefore(e[0], t))
            }
            return (e => sr(e) || rr(e))(t) || ds(t, s) || (e => !!qo(e) && e.childNodes.length > 0)(t) || ((e, t, n) => er(e) && e.data.length > 0 && ((e, t, n) => {
                const o = new jo(e, t).prev(!1), r = new jo(e, t).next(!1), s = v(o) || Fs(o, t, n),
                    a = v(r) || Fs(r, t, n);
                return s && a
            })(e, t, n))(t, s, n) || e.remove(t), t
        }, js = Pt.makeMap, Hs = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        $s = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, qs = /[<>&\"\']/g,
        Vs = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi, Ws = {
            128: "\u20ac",
            130: "\u201a",
            131: "\u0192",
            132: "\u201e",
            133: "\u2026",
            134: "\u2020",
            135: "\u2021",
            136: "\u02c6",
            137: "\u2030",
            138: "\u0160",
            139: "\u2039",
            140: "\u0152",
            142: "\u017d",
            145: "\u2018",
            146: "\u2019",
            147: "\u201c",
            148: "\u201d",
            149: "\u2022",
            150: "\u2013",
            151: "\u2014",
            152: "\u02dc",
            153: "\u2122",
            154: "\u0161",
            155: "\u203a",
            156: "\u0153",
            158: "\u017e",
            159: "\u0178"
        }, Ks = {'"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "&": "&amp;", "`": "&#96;"},
        Ys = {"&lt;": "<", "&gt;": ">", "&amp;": "&", "&quot;": '"', "&apos;": "'"}, Gs = (e, t) => {
            const n = {};
            if (e) {
                const o = e.split(",");
                t = t || 10;
                for (let e = 0; e < o.length; e += 2) {
                    const r = String.fromCharCode(parseInt(o[e], t));
                    if (!Ks[r]) {
                        const t = "&" + o[e + 1] + ";";
                        n[r] = t, n[t] = r
                    }
                }
                return n
            }
        },
        Xs = Gs("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32),
        Qs = (e, t) => e.replace(t ? Hs : $s, (e => Ks[e] || e)),
        Js = (e, t) => e.replace(t ? Hs : $s, (e => e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : Ks[e] || "&#" + e.charCodeAt(0) + ";")),
        Zs = (e, t, n) => {
            const o = n || Xs;
            return e.replace(t ? Hs : $s, (e => Ks[e] || o[e] || e))
        }, ea = {
            encodeRaw: Qs,
            encodeAllRaw: e => ("" + e).replace(qs, (e => Ks[e] || e)),
            encodeNumeric: Js,
            encodeNamed: Zs,
            getEncodeFunc: (e, t) => {
                const n = Gs(t) || Xs, o = js(e.replace(/\+/g, ","));
                return o.named && o.numeric ? (e, t) => e.replace(t ? Hs : $s, (e => void 0 !== Ks[e] ? Ks[e] : void 0 !== n[e] ? n[e] : e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";")) : o.named ? t ? (e, t) => Zs(e, t, n) : Zs : o.numeric ? Js : Qs
            },
            decode: e => e.replace(Vs, ((e, t) => t ? (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) > 65535 ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : Ws[t] || String.fromCharCode(t) : Ys[e] || Xs[e] || (e => {
                const t = bn("div").dom;
                return t.innerHTML = e, t.textContent || t.innerText || e
            })(e)))
        }, ta = (e, t) => (e = Pt.trim(e)) ? e.split(t || " ") : [],
        na = e => new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$"), oa = {}, ra = Pt.makeMap, sa = Pt.each,
        aa = Pt.extend, ia = Pt.explode, la = (e, t = {}) => {
            const n = ra(e, " ", ra(e.toUpperCase(), " "));
            return aa(n, t)
        }, da = e => la("td th li dt dd figcaption caption details summary", e.getTextBlockElements()), ca = (e, t) => {
            if (e) {
                const n = {};
                return m(e) && (e = {"*": e}), sa(e, ((e, o) => {
                    n[o] = n[o.toUpperCase()] = "map" === t ? ra(e, /[, ]/) : ia(e, /[, ]/)
                })), n
            }
        }, ua = (e = {}) => {
            var t;
            const n = {}, o = {};
            let r = [];
            const s = {}, a = {}, i = (t, n, o) => {
                const r = e[t];
                if (r) return ra(r, /[, ]/, ra(r.toUpperCase(), /[, ]/));
                {
                    let e = oa[t];
                    return e || (e = la(n, o), oa[t] = e), e
                }
            }, l = null !== (t = e.schema) && void 0 !== t ? t : "html5", d = (e => {
                const {globalAttributes: t, phrasingContent: n, flowContent: o} = (e => {
                    let t, n, o;
                    t = "id accesskey class dir lang style tabindex title role", n = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", o = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", "html4" !== e && (t += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", n += " article aside details dialog figure main header footer hgroup section nav a ins del canvas map", o += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen svg"), "html5-strict" !== e && (t += " xml:lang", o = [o, "acronym applet basefont big font strike tt"].join(" "), n = [n, "center dir isindex noframes"].join(" "));
                    const r = [n, o].join(" ");
                    return {globalAttributes: t, blockContent: n, phrasingContent: o, flowContent: r}
                })(e), r = {}, s = (e, t, n) => {
                    r[e] = {attributes: se(t, N({})), attributesOrder: t, children: se(n, N({}))}
                }, a = (e, n = "", o = "") => {
                    const r = ta(o), a = ta(e);
                    let i = a.length;
                    const l = ta([t, n].join(" "));
                    for (; i--;) s(a[i], l.slice(), r)
                }, i = (e, t) => {
                    const n = ta(e), o = ta(t);
                    let s = n.length;
                    for (; s--;) {
                        const e = r[n[s]];
                        for (let t = 0, n = o.length; t < n; t++) e.attributes[o[t]] = {}, e.attributesOrder.push(o[t])
                    }
                };
                return "html5-strict" !== e && (V(ta("acronym applet basefont big font strike tt"), (e => {
                    a(e, "", n)
                })), V(ta("center dir isindex noframes"), (e => {
                    a(e, "", o)
                }))), a("html", "manifest", "head body"), a("head", "", "base command link meta noscript script style title"), a("title hr noscript br"), a("base", "href target"), a("link", "href rel media hreflang type sizes hreflang"), a("meta", "name http-equiv content charset"), a("style", "media type scoped"), a("script", "src async defer type charset"), a("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", o), a("dd div", "", o), a("address dt caption", "", "html4" === e ? n : o), a("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", n), a("blockquote", "cite", o), a("ol", "reversed start type", "li"), a("ul", "", "li"), a("li", "value", o), a("dl", "", "dt dd"), a("a", "href target rel media hreflang type", "html4" === e ? n : o), a("q", "cite", n), a("ins del", "cite datetime", o), a("img", "src sizes srcset alt usemap ismap width height"), a("iframe", "src name width height", o), a("embed", "src type width height"), a("object", "data type typemustmatch name usemap form width height", [o, "param"].join(" ")), a("param", "name value"), a("map", "name", [o, "area"].join(" ")), a("area", "alt coords shape href target rel media hreflang type"), a("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === e ? " col" : "")), a("colgroup", "span", "col"), a("col", "span"), a("tbody thead tfoot", "", "tr"), a("tr", "", "td th"), a("td", "colspan rowspan headers", o), a("th", "colspan rowspan headers scope abbr", o), a("form", "accept-charset action autocomplete enctype method name novalidate target", o), a("fieldset", "disabled form name", [o, "legend"].join(" ")), a("label", "form for", n), a("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), a("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === e ? o : n), a("select", "disabled form multiple name required size", "option optgroup"), a("optgroup", "disabled label", "option"), a("option", "disabled label selected value"), a("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), a("menu", "type label", [o, "li"].join(" ")), a("noscript", "", o), "html4" !== e && (a("wbr"), a("ruby", "", [n, "rt rp"].join(" ")), a("figcaption", "", o), a("mark rt rp bdi", "", n), a("summary", "", [n, "h1 h2 h3 h4 h5 h6"].join(" ")), a("canvas", "width height", o), a("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [o, "track source"].join(" ")), a("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [o, "track source"].join(" ")), a("picture", "", "img source"), a("source", "src srcset type media sizes"), a("track", "kind src srclang label default"), a("datalist", "", [n, "option"].join(" ")), a("article section nav aside main header footer", "", o), a("hgroup", "", "h1 h2 h3 h4 h5 h6"), a("figure", "", [o, "figcaption"].join(" ")), a("time", "datetime", n), a("dialog", "open", o), a("command", "type label icon disabled checked radiogroup command"), a("output", "for form name", n), a("progress", "value max", n), a("meter", "value min max low high optimum", n), a("details", "open", [o, "summary"].join(" ")), a("keygen", "autofocus challenge disabled form keytype name"), s("svg", "id tabindex lang xml:space class style x y width height viewBox preserveAspectRatio zoomAndPan transform".split(" "), [])), "html5-strict" !== e && (i("script", "language xml:space"), i("style", "xml:space"), i("object", "declare classid code codebase codetype archive standby align border hspace vspace"), i("embed", "align name hspace vspace"), i("param", "valuetype type"), i("a", "charset name rev shape coords"), i("br", "clear"), i("applet", "codebase archive code object alt name width height align hspace vspace"), i("img", "name longdesc align border hspace vspace"), i("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), i("font basefont", "size color face"), i("input", "usemap align"), i("select"), i("textarea"), i("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), i("ul", "type compact"), i("li", "type"), i("ol dl menu dir", "compact"), i("pre", "width xml:space"), i("hr", "align noshade size width"), i("isindex", "prompt"), i("table", "summary width frame rules cellspacing cellpadding align bgcolor"), i("col", "width align char charoff valign"), i("colgroup", "width align char charoff valign"), i("thead", "align char charoff valign"), i("tr", "align char charoff valign bgcolor"), i("th", "axis align char charoff valign nowrap bgcolor width height"), i("form", "accept"), i("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), i("tfoot", "align char charoff valign"), i("tbody", "align char charoff valign"), i("area", "nohref"), i("body", "background bgcolor text link vlink alink")), "html4" !== e && (i("input button select textarea", "autofocus"), i("input textarea", "placeholder"), i("a", "download"), i("link script img", "crossorigin"), i("img", "loading"), i("iframe", "sandbox seamless allow allowfullscreen loading")), "html4" !== e && V([r.video, r.audio], (e => {
                    delete e.children.audio, delete e.children.video
                })), V(ta("a form meter progress dfn"), (e => {
                    r[e] && delete r[e].children[e]
                })), delete r.caption.children.table, delete r.script, r
            })(l);
            !1 === e.verify_html && (e.valid_elements = "*[*]");
            const c = ca(e.valid_styles), u = ca(e.invalid_styles, "map"), m = ca(e.valid_classes, "map"),
                f = i("whitespace_elements", "pre script noscript style textarea video audio iframe object code"),
                g = i("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"),
                p = i("void_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"),
                h = i("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls allowfullscreen"),
                b = "td th iframe video audio object script code", v = i("non_empty_elements", b + " pre svg", p),
                y = i("move_caret_before_on_enter_elements", b + " table", p), C = "h1 h2 h3 h4 h5 h6",
                w = i("text_block_elements", C + " p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),
                x = i("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary html body multicol listing", w),
                E = i("text_inline_elements", "span strong b em i font s strike u var cite dfn code mark q sup sub samp"),
                _ = i("transparent_elements", "a ins del canvas map"), k = i("wrap_block_elements", "pre " + C);
            sa("script noscript iframe noframes noembed title style textarea xmp plaintext".split(" "), (e => {
                a[e] = new RegExp("</" + e + "[^>]*>", "gi")
            }));
            const S = e => {
                const t = I.from(n["@"]), o = /[*?+]/;
                V(((e, t) => {
                    const n = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/;
                    return te(ta(t, ","), (t => {
                        const o = n.exec(t);
                        if (o) {
                            const t = o[1], n = o[2], r = o[3], s = o[4], a = o[5],
                                i = {attributes: {}, attributesOrder: []};
                            if (e.each((e => ((e, t) => {
                                ge(e.attributes, ((e, n) => {
                                    t.attributes[n] = e
                                })), t.attributesOrder.push(...e.attributesOrder)
                            })(e, i))), "#" === t ? i.paddEmpty = !0 : "-" === t && (i.removeEmpty = !0), "!" === s && (i.removeEmptyAttrs = !0), a && ((e, t) => {
                                const n = /^([!\-])?(\w+[\\:]:\w+|[^=~<]+)?(?:([=~<])(.*))?$/,
                                    o = /[*?+]/, {attributes: r, attributesOrder: s} = t;
                                V(ta(e, "|"), (e => {
                                    const a = n.exec(e);
                                    if (a) {
                                        const e = {}, n = a[1], i = a[2].replace(/[\\:]:/g, ":"), l = a[3], d = a[4];
                                        if ("!" === n && (t.attributesRequired = t.attributesRequired || [], t.attributesRequired.push(i), e.required = !0), "-" === n) return delete r[i], void s.splice(Pt.inArray(s, i), 1);
                                        if (l && ("=" === l ? (t.attributesDefault = t.attributesDefault || [], t.attributesDefault.push({
                                            name: i,
                                            value: d
                                        }), e.defaultValue = d) : "~" === l ? (t.attributesForced = t.attributesForced || [], t.attributesForced.push({
                                            name: i,
                                            value: d
                                        }), e.forcedValue = d) : "<" === l && (e.validValues = Pt.makeMap(d, "?"))), o.test(i)) {
                                            const n = e;
                                            t.attributePatterns = t.attributePatterns || [], n.pattern = na(i), t.attributePatterns.push(n)
                                        } else r[i] || s.push(i), r[i] = e
                                    }
                                }))
                            })(a, i), r && (i.outputName = n), "@" === n) {
                                if (!e.isNone()) return [];
                                e = I.some(i)
                            }
                            return [r ? {name: n, element: i, aliasName: r} : {name: n, element: i}]
                        }
                        return []
                    }))
                })(t, null != e ? e : ""), (({name: e, element: t, aliasName: s}) => {
                    if (s && (n[s] = t), o.test(e)) {
                        const n = t;
                        n.pattern = na(e), r.push(n)
                    } else n[e] = t
                }))
            }, R = e => {
                r = [], V(me(n), (e => {
                    delete n[e]
                })), S(e)
            }, A = e => {
                delete oa.text_block_elements, delete oa.block_elements, V((e => {
                    const t = /^(~)?(.+)$/;
                    return te(ta(e, ","), (e => {
                        const n = t.exec(e);
                        if (n) {
                            const e = "~" === n[1];
                            return [{inline: e, cloneName: e ? "span" : "div", name: n[2]}]
                        }
                        return []
                    }))
                })(null != e ? e : ""), (({inline: e, name: t, cloneName: r}) => {
                    if (o[t] = o[r], s[t] = r, v[t.toUpperCase()] = {}, v[t] = {}, e || (x[t.toUpperCase()] = {}, x[t] = {}), !n[t]) {
                        let e = n[r];
                        e = aa({}, e), delete e.removeEmptyAttrs, delete e.removeEmpty, n[t] = e
                    }
                    ge(o, ((e, n) => {
                        e[r] && (o[n] = e = aa({}, o[n]), e[t] = e[r])
                    }))
                }))
            }, T = e => {
                V((e => {
                    const t = /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
                    return te(ta(e, ","), (e => {
                        const n = t.exec(e);
                        if (n) {
                            const e = n[1], t = e ? (e => "-" === e ? "remove" : "add")(e) : "replace";
                            return [{operation: t, name: n[2], validChildren: ta(n[3], "|")}]
                        }
                        return []
                    }))
                })(null != e ? e : ""), (({operation: e, name: t, validChildren: n}) => {
                    const r = "replace" === e ? {"#comment": {}} : o[t];
                    V(n, (t => {
                        "remove" === e ? delete r[t] : r[t] = {}
                    })), o[t] = r
                }))
            }, O = e => {
                const t = n[e];
                if (t) return t;
                let o = r.length;
                for (; o--;) {
                    const t = r[o];
                    if (t.pattern.test(e)) return t
                }
            };
            e.valid_elements ? (R(e.valid_elements), sa(d, ((e, t) => {
                o[t] = e.children
            }))) : (sa(d, ((e, t) => {
                n[t] = {attributes: e.attributes, attributesOrder: e.attributesOrder}, o[t] = e.children
            })), sa(ta("strong/b em/i"), (e => {
                const t = ta(e, "/");
                n[t[1]].outputName = t[0]
            })), sa(E, ((t, o) => {
                n[o] && (e.padd_empty_block_inline_children && (n[o].paddInEmptyBlock = !0), n[o].removeEmpty = !0)
            })), sa(ta("ol ul blockquote a table tbody"), (e => {
                n[e] && (n[e].removeEmpty = !0)
            })), sa(ta("p h1 h2 h3 h4 h5 h6 th td pre div address caption li summary"), (e => {
                n[e] && (n[e].paddEmpty = !0)
            })), sa(ta("span"), (e => {
                n[e].removeEmptyAttrs = !0
            }))), delete n.svg, A(e.custom_elements), T(e.valid_children), S(e.extended_valid_elements), T("+ol[ul|ol],+ul[ul|ol]"), sa({
                dd: "dl",
                dt: "dl",
                li: "ul ol",
                td: "tr",
                th: "tr",
                tr: "tbody thead tfoot",
                tbody: "table",
                thead: "table",
                tfoot: "table",
                legend: "fieldset",
                area: "map",
                param: "video audio object"
            }, ((e, t) => {
                n[t] && (n[t].parentsRequired = ta(e))
            })), e.invalid_elements && sa(ia(e.invalid_elements), (e => {
                n[e] && delete n[e]
            })), O("span") || S("span[!data-mce-type|*]");
            const B = N(c), P = N(u), D = N(m), L = N(h), M = N(x), F = N(w), U = N(E), z = N(Object.seal(p)), j = N(g),
                H = N(v), $ = N(y), q = N(f), W = N(_), K = N(k), Y = N(Object.seal(a)), G = (e, t) => {
                    const n = O(e);
                    if (n) {
                        if (!t) return !0;
                        {
                            if (n.attributes[t]) return !0;
                            const e = n.attributePatterns;
                            if (e) {
                                let n = e.length;
                                for (; n--;) if (e[n].pattern.test(t)) return !0
                            }
                        }
                    }
                    return !1
                }, X = e => Ee(M(), e), Q = e => !He(e, "#") && G(e) && !X(e), J = N(s);
            return {
                type: l,
                children: o,
                elements: n,
                getValidStyles: B,
                getValidClasses: D,
                getBlockElements: M,
                getInvalidStyles: P,
                getVoidElements: z,
                getTextBlockElements: F,
                getTextInlineElements: U,
                getBoolAttrs: L,
                getElementRule: O,
                getSelfClosingElements: j,
                getNonEmptyElements: H,
                getMoveCaretBeforeOnEnterElements: $,
                getWhitespaceElements: q,
                getTransparentElements: W,
                getSpecialElements: Y,
                isValidChild: (e, t) => {
                    const n = o[e.toLowerCase()];
                    return !(!n || !n[t.toLowerCase()])
                },
                isValid: G,
                isBlock: X,
                isInline: Q,
                isWrapper: e => Ee(K(), e) || Q(e),
                getCustomElements: J,
                addValidElements: S,
                setValidElements: R,
                addCustomElements: A,
                addValidChildren: T
            }
        }, ma = e => {
            const t = e.toString(16);
            return (1 === t.length ? "0" + t : t).toUpperCase()
        }, fa = e => (e => {
            return {value: (t = e, ze(t, "#").toUpperCase())};
            var t
        })(ma(e.red) + ma(e.green) + ma(e.blue)), ga = /^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i,
        pa = /^\s*rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?(?:\.\d+)?)\s*\)\s*$/i,
        ha = (e, t, n, o) => ({red: e, green: t, blue: n, alpha: o}), ba = (e, t, n, o) => {
            const r = parseInt(e, 10), s = parseInt(t, 10), a = parseInt(n, 10), i = parseFloat(o);
            return ha(r, s, a, i)
        }, va = e => {
            if ("transparent" === e) return I.some(ha(0, 0, 0, 0));
            const t = ga.exec(e);
            if (null !== t) return I.some(ba(t[1], t[2], t[3], "1"));
            const n = pa.exec(e);
            return null !== n ? I.some(ba(n[1], n[2], n[3], n[4])) : I.none()
        }, ya = e => `rgba(${e.red},${e.green},${e.blue},${e.alpha})`,
        Ca = e => va(e).map(fa).map((e => "#" + e.value)).getOr(e), wa = (e = {}, t) => {
            const n = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
                o = /\s*([^:]+):\s*([^;]+);?/g, r = /\s+$/, s = {};
            let a, i;
            const l = hr;
            t && (a = t.getValidStyles(), i = t.getInvalidStyles());
            const d = "\\\" \\' \\; \\: ; : \ufeff".split(" ");
            for (let e = 0; e < d.length; e++) s[d[e]] = l + e, s[l + e] = d[e];
            const c = {
                parse: t => {
                    const a = {};
                    let i = !1;
                    const d = e.url_converter, u = e.url_converter_scope || c, f = (e, t, n) => {
                            const o = a[e + "-top" + t];
                            if (!o) return;
                            const r = a[e + "-right" + t];
                            if (!r) return;
                            const s = a[e + "-bottom" + t];
                            if (!s) return;
                            const i = a[e + "-left" + t];
                            if (!i) return;
                            const l = [o, r, s, i];
                            let d = l.length - 1;
                            for (; d-- && l[d] === l[d + 1];) ;
                            d > -1 && n || (a[e + t] = -1 === d ? l[0] : l.join(" "), delete a[e + "-top" + t], delete a[e + "-right" + t], delete a[e + "-bottom" + t], delete a[e + "-left" + t])
                        }, g = e => {
                            const t = a[e];
                            if (!t) return;
                            const n = t.indexOf(",") > -1 ? [t] : t.split(" ");
                            let o = n.length;
                            for (; o--;) if (n[o] !== n[0]) return !1;
                            return a[e] = n[0], !0
                        }, p = e => (i = !0, s[e]),
                        h = (e, t) => (i && (e = e.replace(/\uFEFF[0-9]/g, (e => s[e]))), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e),
                        b = e => String.fromCharCode(parseInt(e.slice(1), 16)), v = e => e.replace(/\\[0-9a-f]+/gi, b),
                        y = (t, n, o, r, s, a) => {
                            if (s = s || a) return "'" + (s = h(s)).replace(/\'/g, "\\'") + "'";
                            if (n = h(n || o || r || ""), !e.allow_script_urls) {
                                const t = n.replace(/[\s\r\n]+/g, "");
                                if (/(java|vb)script:/i.test(t)) return "";
                                if (!e.allow_svg_data_urls && /^data:image\/svg/i.test(t)) return ""
                            }
                            return d && (n = d.call(u, n, "style")), "url('" + n.replace(/\'/g, "\\'") + "')"
                        };
                    if (t) {
                        let s;
                        for (t = (t = t.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, p).replace(/\"[^\"]+\"|\'[^\']+\'/g, (e => e.replace(/[;:]/g, p))); s = o.exec(t);) {
                            o.lastIndex = s.index + s[0].length;
                            let t = s[1].replace(r, "").toLowerCase(), d = s[2].replace(r, "");
                            if (t && d) {
                                if (t = v(t), d = v(d), -1 !== t.indexOf(l) || -1 !== t.indexOf('"')) continue;
                                if (!e.allow_script_urls && ("behavior" === t || /expression\s*\(|\/\*|\*\//.test(d))) continue;
                                "font-weight" === t && "700" === d ? d = "bold" : "color" !== t && "background-color" !== t || (d = d.toLowerCase()), m(e.force_hex_color) && "off" !== e.force_hex_color && va(d).each((t => {
                                    "always" !== e.force_hex_color && 1 !== t.alpha || (d = Ca(ya(t)))
                                })), d = d.replace(n, y), a[t] = i ? h(d, !0) : d
                            }
                        }
                        f("border", "", !0), f("border", "-width"), f("border", "-color"), f("border", "-style"), f("padding", ""), f("margin", ""), "border", w = "border-style", x = "border-color", g(C = "border-width") && g(w) && g(x) && (a.border = a[C] + " " + a[w] + " " + a[x], delete a[C], delete a[w], delete a[x]), "medium none" === a.border && delete a.border, "none" === a["border-image"] && delete a["border-image"]
                    }
                    var C, w, x;
                    return a
                }, serialize: (e, t) => {
                    let n = "";
                    const o = (t, o) => {
                        const r = o[t];
                        if (r) for (let t = 0, o = r.length; t < o; t++) {
                            const o = r[t], s = e[o];
                            s && (n += (n.length > 0 ? " " : "") + o + ": " + s + ";")
                        }
                    };
                    return t && a ? (o("*", a), o(t, a)) : ge(e, ((e, o) => {
                        e && ((e, t) => {
                            if (!i || !t) return !0;
                            let n = i["*"];
                            return !(n && n[e] || (n = i[t], n && n[e]))
                        })(o, t) && (n += (n.length > 0 ? " " : "") + o + ": " + e + ";")
                    })), n
                }
            };
            return c
        }, xa = {
            keyLocation: !0,
            layerX: !0,
            layerY: !0,
            returnValue: !0,
            webkitMovementX: !0,
            webkitMovementY: !0,
            keyIdentifier: !0,
            mozPressure: !0
        }, Ea = (e, t) => {
            const n = null != t ? t : {};
            for (const t in e) Ee(xa, t) || (n[t] = e[t]);
            return C(e.composedPath) && (n.composedPath = () => e.composedPath()), C(e.getModifierState) && (n.getModifierState = t => e.getModifierState(t)), C(e.getTargetRanges) && (n.getTargetRanges = () => e.getTargetRanges()), n
        }, _a = (e, t, n, o) => {
            var r;
            const s = Ea(t, o);
            return s.type = e, y(s.target) && (s.target = null !== (r = s.srcElement) && void 0 !== r ? r : n), (e => y(e.preventDefault) || (e => e instanceof Event || w(e.initEvent))(e))(t) && (s.preventDefault = () => {
                s.defaultPrevented = !0, s.isDefaultPrevented = M, w(t.preventDefault) && t.preventDefault()
            }, s.stopPropagation = () => {
                s.cancelBubble = !0, s.isPropagationStopped = M, w(t.stopPropagation) && t.stopPropagation()
            }, s.stopImmediatePropagation = () => {
                s.isImmediatePropagationStopped = M, s.stopPropagation()
            }, (e => e.isDefaultPrevented === M || e.isDefaultPrevented === L)(s) || (s.isDefaultPrevented = !0 === s.defaultPrevented ? M : L, s.isPropagationStopped = !0 === s.cancelBubble ? M : L, s.isImmediatePropagationStopped = L)), s
        }, ka = /^(?:mouse|contextmenu)|click/, Sa = (e, t, n, o) => {
            e.addEventListener(t, n, o || !1)
        }, Na = (e, t, n, o) => {
            e.removeEventListener(t, n, o || !1)
        }, Ra = (e, t) => {
            const n = _a(e.type, e, document, t);
            if ((e => C(e) && ka.test(e.type))(e) && v(e.pageX) && !v(e.clientX)) {
                const t = n.target.ownerDocument || document, o = t.documentElement, r = t.body, s = n;
                s.pageX = e.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), s.pageY = e.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)
            }
            return n
        }, Aa = (e, t, n) => {
            const o = e.document, r = {type: "ready"};
            if (n.domLoaded) return void t(r);
            const s = () => {
                Na(e, "DOMContentLoaded", s), Na(e, "load", s), n.domLoaded || (n.domLoaded = !0, t(r)), e = null
            };
            "complete" === o.readyState || "interactive" === o.readyState && o.body ? s() : Sa(e, "DOMContentLoaded", s), n.domLoaded || Sa(e, "load", s)
        };

    class Ta {
        constructor() {
            this.domLoaded = !1, this.events = {}, this.count = 1, this.expando = "mce-data-" + (+new Date).toString(32), this.hasFocusIn = "onfocusin" in document.documentElement, this.count = 1
        }

        bind(e, t, n, o) {
            const r = this;
            let s;
            const a = window, i = e => {
                r.executeHandlers(Ra(e || a.event), l)
            };
            if (!e || er(e) || or(e)) return n;
            let l;
            e[r.expando] ? l = e[r.expando] : (l = r.count++, e[r.expando] = l, r.events[l] = {}), o = o || e;
            const d = t.split(" ");
            let c = d.length;
            for (; c--;) {
                let t = d[c], u = i, m = !1, f = !1;
                "DOMContentLoaded" === t && (t = "ready"), r.domLoaded && "ready" === t && "complete" === e.readyState ? n.call(o, Ra({type: t})) : (r.hasFocusIn || "focusin" !== t && "focusout" !== t || (m = !0, f = "focusin" === t ? "focus" : "blur", u = e => {
                    const t = Ra(e || a.event);
                    t.type = "focus" === t.type ? "focusin" : "focusout", r.executeHandlers(t, l)
                }), s = r.events[l][t], s ? "ready" === t && r.domLoaded ? n(Ra({type: t})) : s.push({
                    func: n,
                    scope: o
                }) : (r.events[l][t] = s = [{
                    func: n,
                    scope: o
                }], s.fakeName = f, s.capture = m, s.nativeHandler = u, "ready" === t ? Aa(e, u, r) : Sa(e, f || t, u, m)))
            }
            return e = s = null, n
        }

        unbind(e, t, n) {
            if (!e || er(e) || or(e)) return this;
            const o = e[this.expando];
            if (o) {
                let r = this.events[o];
                if (t) {
                    const o = t.split(" ");
                    let s = o.length;
                    for (; s--;) {
                        const t = o[s], a = r[t];
                        if (a) {
                            if (n) {
                                let e = a.length;
                                for (; e--;) if (a[e].func === n) {
                                    const n = a.nativeHandler, o = a.fakeName, s = a.capture,
                                        i = a.slice(0, e).concat(a.slice(e + 1));
                                    i.nativeHandler = n, i.fakeName = o, i.capture = s, r[t] = i
                                }
                            }
                            n && 0 !== a.length || (delete r[t], Na(e, a.fakeName || t, a.nativeHandler, a.capture))
                        }
                    }
                } else ge(r, ((t, n) => {
                    Na(e, t.fakeName || n, t.nativeHandler, t.capture)
                })), r = {};
                for (const e in r) if (Ee(r, e)) return this;
                delete this.events[o];
                try {
                    delete e[this.expando]
                } catch (t) {
                    e[this.expando] = null
                }
            }
            return this
        }

        fire(e, t, n) {
            return this.dispatch(e, t, n)
        }

        dispatch(e, t, n) {
            if (!e || er(e) || or(e)) return this;
            const o = Ra({type: t, target: e}, n);
            do {
                const t = e[this.expando];
                t && this.executeHandlers(o, t), e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow
            } while (e && !o.isPropagationStopped());
            return this
        }

        clean(e) {
            if (!e || er(e) || or(e)) return this;
            if (e[this.expando] && this.unbind(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName) {
                this.unbind(e);
                const t = e.getElementsByTagName("*");
                let n = t.length;
                for (; n--;) (e = t[n])[this.expando] && this.unbind(e)
            }
            return this
        }

        destroy() {
            this.events = {}
        }

        cancel(e) {
            return e && (e.preventDefault(), e.stopImmediatePropagation()), !1
        }

        executeHandlers(e, t) {
            const n = this.events[t], o = n && n[e.type];
            if (o) for (let t = 0, n = o.length; t < n; t++) {
                const n = o[t];
                if (n && !1 === n.func.call(n.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped()) return
            }
        }
    }

    Ta.Event = new Ta;
    const Oa = Pt.each, Ba = Pt.grep, Pa = "data-mce-style",
        Da = Pt.makeMap("fill-opacity font-weight line-height opacity orphans widows z-index zoom", " "),
        La = (e, t, n) => {
            y(n) || "" === n ? on(e, t) : Jt(e, t, n)
        }, Ma = e => e.replace(/[A-Z]/g, (e => "-" + e.toLowerCase())), Ia = (e, t) => {
            let n = 0;
            if (e) for (let o = e.nodeType, r = e.previousSibling; r; r = r.previousSibling) {
                const e = r.nodeType;
                (!t || !er(r) || e !== o && r.data.length) && (n++, o = e)
            }
            return n
        }, Fa = (e, t) => {
            const n = en(t, "style"), o = e.serialize(e.parse(n), Ht(t));
            La(t, Pa, o)
        }, Ua = (e, t, n) => {
            const o = Ma(t);
            y(n) || "" === n ? go(e, o) : io(e, o, ((e, t) => x(e) ? Ee(Da, t) ? e + "" : e + "px" : e)(n, o))
        }, za = (e, t = {}) => {
            const n = {}, o = window, r = {};
            let s = 0;
            const a = Is.forElement(yn(e), {contentCssCors: t.contentCssCors, referrerPolicy: t.referrerPolicy}), i = [],
                l = t.schema ? t.schema : ua({}), d = wa({
                    url_converter: t.url_converter,
                    url_converter_scope: t.url_converter_scope,
                    force_hex_color: t.force_hex_color
                }, t.schema), c = t.ownEvents ? new Ta : Ta.Event, u = l.getBlockElements(),
                f = t => t && e && m(t) ? e.getElementById(t) : t, g = e => {
                    const t = f(e);
                    return C(t) ? yn(t) : null
                }, h = (e, t, n = "") => {
                    let o;
                    const r = g(e);
                    if (C(r) && Wt(r)) {
                        const e = G[t];
                        o = e && e.get ? e.get(r.dom, t) : en(r, t)
                    }
                    return C(o) ? o : n
                }, b = e => {
                    const t = f(e);
                    return y(t) ? [] : t.attributes
                }, v = (e, n, o) => {
                    O(e, (e => {
                        if (qo(e)) {
                            const r = yn(e), s = "" === o ? null : o, a = en(r, n), i = G[n];
                            i && i.set ? i.set(r.dom, s, n) : La(r, n, s), a !== s && t.onSetAttrib && t.onSetAttrib({
                                attrElm: r.dom,
                                attrName: n,
                                attrValue: s
                            })
                        }
                    }))
                }, x = () => t.root_element || e.body, E = (t, n) => ((e, t, n) => {
                    let o = 0, r = 0;
                    const s = e.ownerDocument;
                    if (n = n || e, t) {
                        if (n === e && t.getBoundingClientRect && "static" === co(yn(e), "position")) {
                            const n = t.getBoundingClientRect();
                            return o = n.left + (s.documentElement.scrollLeft || e.scrollLeft) - s.documentElement.clientLeft, r = n.top + (s.documentElement.scrollTop || e.scrollTop) - s.documentElement.clientTop, {
                                x: o,
                                y: r
                            }
                        }
                        let a = t;
                        for (; a && a !== n && a.nodeType && !Ls(a, n);) {
                            const e = a;
                            o += e.offsetLeft || 0, r += e.offsetTop || 0, a = e.offsetParent
                        }
                        for (a = t.parentNode; a && a !== n && a.nodeType && !Ls(a, n);) o -= a.scrollLeft || 0, r -= a.scrollTop || 0, a = a.parentNode;
                        r += (e => Ps.isFirefox() && "table" === Ht(e) ? Ds(Mn(e)).filter((e => "caption" === Ht(e))).bind((e => Ds(Ln(e)).map((t => {
                            const n = t.dom.offsetTop, o = e.dom.offsetTop, r = e.dom.offsetHeight;
                            return n <= o ? -r : 0
                        })))).getOr(0) : 0)(yn(t))
                    }
                    return {x: o, y: r}
                })(e.body, f(t), n), k = (e, t, n) => {
                    const o = f(e);
                    var r;
                    if (!y(o) && (Vo(o) || qo(r = o) && "http://www.w3.org/2000/svg" === r.namespaceURI)) return n ? co(yn(o), Ma(t)) : ("float" === (t = t.replace(/-(\D)/g, ((e, t) => t.toUpperCase()))) && (t = "cssFloat"), o.style ? o.style[t] : void 0)
                }, S = e => {
                    const t = f(e);
                    if (!t) return {w: 0, h: 0};
                    let n = k(t, "width"), o = k(t, "height");
                    return n && -1 !== n.indexOf("px") || (n = "0"), o && -1 !== o.indexOf("px") || (o = "0"), {
                        w: parseInt(n, 10) || t.offsetWidth || t.clientWidth,
                        h: parseInt(o, 10) || t.offsetHeight || t.clientHeight
                    }
                }, R = (e, t) => {
                    if (!e) return !1;
                    const n = p(e) ? e : [e];
                    return $(n, (e => xn(yn(e), t)))
                }, A = (e, t, n, o) => {
                    const r = [];
                    let s = f(e);
                    o = void 0 === o;
                    const a = n || ("BODY" !== x().nodeName ? x().parentNode : null);
                    if (m(t)) if ("*" === t) t = qo; else {
                        const e = t;
                        t = t => R(t, e)
                    }
                    for (; s && !(s === a || y(s.nodeType) || rr(s) || sr(s));) {
                        if (!t || t(s)) {
                            if (!o) return [s];
                            r.push(s)
                        }
                        s = s.parentNode
                    }
                    return o ? r : null
                }, T = (e, t, n) => {
                    let o = t;
                    if (e) {
                        m(t) && (o = e => R(e, t));
                        for (let t = e[n]; t; t = t[n]) if (w(o) && o(t)) return t
                    }
                    return null
                }, O = function (e, t, n) {
                    const o = null != n ? n : this;
                    if (p(e)) {
                        const n = [];
                        return Oa(e, ((e, r) => {
                            const s = f(e);
                            s && n.push(t.call(o, s, r))
                        })), n
                    }
                    {
                        const n = f(e);
                        return !!n && t.call(o, n)
                    }
                }, B = (e, t) => {
                    O(e, (e => {
                        ge(t, ((t, n) => {
                            v(e, n, t)
                        }))
                    }))
                }, P = (e, t) => {
                    O(e, (e => {
                        const n = yn(e);
                        So(n, t)
                    }))
                }, D = (t, n, o, r, s) => O(t, (t => {
                    const a = m(n) ? e.createElement(n) : n;
                    return C(o) && B(a, o), r && (!m(r) && r.nodeType ? a.appendChild(r) : m(r) && P(a, r)), s ? a : t.appendChild(a)
                })), L = (t, n, o) => D(e.createElement(t), t, n, o, !0), M = ea.encodeAllRaw, I = (e, t) => O(e, (e => {
                    const n = yn(e);
                    return t && V(Mn(n), (e => {
                        Kt(e) && 0 === e.dom.length ? xo(e) : po(n, e)
                    })), xo(n), n.dom
                })), F = (e, t, n) => {
                    O(e, (e => {
                        if (qo(e)) {
                            const o = yn(e), r = t.split(" ");
                            V(r, (e => {
                                C(n) ? (n ? un : fn)(o, e) : ((e, t) => {
                                    const n = an(e) ? e.dom.classList.toggle(t) : ((e, t) => H(ln(e), t) ? cn(e, t) : dn(e, t))(e, t);
                                    mn(e)
                                })(o, e)
                            }))
                        }
                    }))
                }, U = (e, t, n) => O(t, (o => {
                    var r;
                    const s = p(t) ? e.cloneNode(!0) : e;
                    return n && Oa(Ba(o.childNodes), (e => {
                        s.appendChild(e)
                    })), null === (r = o.parentNode) || void 0 === r || r.replaceChild(s, o), o
                })), z = e => {
                    if (qo(e)) {
                        const t = "a" === e.nodeName.toLowerCase() && !h(e, "href") && h(e, "id");
                        if (h(e, "name") || h(e, "data-mce-bookmark") || t) return !0
                    }
                    return !1
                }, j = () => e.createRange(), q = (n, r, s, a) => {
                    if (p(n)) {
                        let e = n.length;
                        const t = [];
                        for (; e--;) t[e] = q(n[e], r, s, a);
                        return t
                    }
                    return !t.collect || n !== e && n !== o || i.push([n, r, s, a]), c.bind(n, r, s, a || Y)
                }, W = (t, n, r) => {
                    if (p(t)) {
                        let e = t.length;
                        const o = [];
                        for (; e--;) o[e] = W(t[e], n, r);
                        return o
                    }
                    if (i.length > 0 && (t === e || t === o)) {
                        let e = i.length;
                        for (; e--;) {
                            const [o, s, a] = i[e];
                            t !== o || n && n !== s || r && r !== a || c.unbind(o, s, a)
                        }
                    }
                    return c.unbind(t, n, r)
                }, K = e => {
                    if (e && Vo(e)) {
                        const t = e.getAttribute("data-mce-contenteditable");
                        return t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null
                    }
                    return null
                }, Y = {
                    doc: e,
                    settings: t,
                    win: o,
                    files: r,
                    stdMode: !0,
                    boxModel: !0,
                    styleSheetLoader: a,
                    boundEvents: i,
                    styles: d,
                    schema: l,
                    events: c,
                    isBlock: e => m(e) ? Ee(u, e) : qo(e) && (Ee(u, e.nodeName) || Ts(l, e)),
                    root: null,
                    clone: (e, t) => e.cloneNode(t),
                    getRoot: x,
                    getViewPort: e => {
                        const t = Io(e);
                        return {x: t.x, y: t.y, w: t.width, h: t.height}
                    },
                    getRect: e => {
                        const t = f(e), n = E(t), o = S(t);
                        return {x: n.x, y: n.y, w: o.w, h: o.h}
                    },
                    getSize: S,
                    getParent: (e, t, n) => {
                        const o = A(e, t, n, !1);
                        return o && o.length > 0 ? o[0] : null
                    },
                    getParents: A,
                    get: f,
                    getNext: (e, t) => T(e, t, "nextSibling"),
                    getPrev: (e, t) => T(e, t, "previousSibling"),
                    select: (n, o) => {
                        var r, s;
                        const a = null !== (s = null !== (r = f(o)) && void 0 !== r ? r : t.root_element) && void 0 !== s ? s : e;
                        return w(a.querySelectorAll) ? ce(a.querySelectorAll(n)) : []
                    },
                    is: R,
                    add: D,
                    create: L,
                    createHTML: (e, t, n = "") => {
                        let o = "<" + e;
                        for (const e in t) _e(t, e) && (o += " " + e + '="' + M(t[e]) + '"');
                        return Ge(n) && Ee(l.getVoidElements(), e) ? o + " />" : o + ">" + n + "</" + e + ">"
                    },
                    createFragment: t => {
                        const n = e.createElement("div"), o = e.createDocumentFragment();
                        let r;
                        for (o.appendChild(n), t && (n.innerHTML = t); r = n.firstChild;) o.appendChild(r);
                        return o.removeChild(n), o
                    },
                    remove: I,
                    setStyle: (e, n, o) => {
                        O(e, (e => {
                            const r = yn(e);
                            Ua(r, n, o), t.update_styles && Fa(d, r)
                        }))
                    },
                    getStyle: k,
                    setStyles: (e, n) => {
                        O(e, (e => {
                            const o = yn(e);
                            ge(n, ((e, t) => {
                                Ua(o, t, e)
                            })), t.update_styles && Fa(d, o)
                        }))
                    },
                    removeAllAttribs: e => O(e, (e => {
                        const t = e.attributes;
                        for (let n = t.length - 1; n >= 0; n--) e.removeAttributeNode(t.item(n))
                    })),
                    setAttrib: v,
                    setAttribs: B,
                    getAttrib: h,
                    getPos: E,
                    parseStyle: e => d.parse(e),
                    serializeStyle: (e, t) => d.serialize(e, t),
                    addStyle: t => {
                        if (Y !== za.DOM && e === document) {
                            if (n[t]) return;
                            n[t] = !0
                        }
                        let o = e.getElementById("mceDefaultStyles");
                        if (!o) {
                            o = e.createElement("style"), o.id = "mceDefaultStyles", o.type = "text/css";
                            const t = e.head;
                            t.firstChild ? t.insertBefore(o, t.firstChild) : t.appendChild(o)
                        }
                        o.styleSheet ? o.styleSheet.cssText += t : o.appendChild(e.createTextNode(t))
                    },
                    loadCSS: e => {
                        e || (e = ""), V(e.split(","), (e => {
                            r[e] = !0, a.load(e).catch(_)
                        }))
                    },
                    addClass: (e, t) => {
                        F(e, t, !0)
                    },
                    removeClass: (e, t) => {
                        F(e, t, !1)
                    },
                    hasClass: (e, t) => {
                        const n = g(e), o = t.split(" ");
                        return C(n) && ne(o, (e => gn(n, e)))
                    },
                    toggleClass: F,
                    show: e => {
                        O(e, (e => go(yn(e), "display")))
                    },
                    hide: e => {
                        O(e, (e => io(yn(e), "display", "none")))
                    },
                    isHidden: e => {
                        const t = g(e);
                        return C(t) && Dt(mo(t, "display"), "none")
                    },
                    uniqueId: e => (e || "mce_") + s++,
                    setHTML: P,
                    getOuterHTML: e => {
                        const t = g(e);
                        return C(t) ? qo(t.dom) ? t.dom.outerHTML : (e => {
                            const t = bn("div"), n = yn(e.dom.cloneNode(!0));
                            return vo(t, n), ko(t)
                        })(t) : ""
                    },
                    setOuterHTML: (e, t) => {
                        O(e, (e => {
                            qo(e) && (e.outerHTML = t)
                        }))
                    },
                    decode: ea.decode,
                    encode: M,
                    insertAfter: (e, t) => {
                        const n = f(t);
                        return O(e, (e => {
                            const t = null == n ? void 0 : n.parentNode, o = null == n ? void 0 : n.nextSibling;
                            return t && (o ? t.insertBefore(e, o) : t.appendChild(e)), e
                        }))
                    },
                    replace: U,
                    rename: (e, t) => {
                        if (e.nodeName !== t.toUpperCase()) {
                            const n = L(t);
                            return Oa(b(e), (t => {
                                v(n, t.nodeName, h(e, t.nodeName))
                            })), U(n, e, !0), n
                        }
                        return e
                    },
                    findCommonAncestor: (e, t) => {
                        let n = e;
                        for (; n;) {
                            let e = t;
                            for (; e && n !== e;) e = e.parentNode;
                            if (n === e) break;
                            n = n.parentNode
                        }
                        return !n && e.ownerDocument ? e.ownerDocument.documentElement : n
                    },
                    run: O,
                    getAttribs: b,
                    isEmpty: (e, t, n) => {
                        let o = 0;
                        if (z(e)) return !1;
                        const r = e.firstChild;
                        if (r) {
                            const s = new jo(r, e), a = l ? l.getWhitespaceElements() : {},
                                i = t || (l ? l.getNonEmptyElements() : null);
                            let d = r;
                            do {
                                if (qo(d)) {
                                    const e = d.getAttribute("data-mce-bogus");
                                    if (e) {
                                        d = s.next("all" === e);
                                        continue
                                    }
                                    const t = d.nodeName.toLowerCase();
                                    if (i && i[t]) {
                                        if ("br" === t) {
                                            o++, d = s.next();
                                            continue
                                        }
                                        return !1
                                    }
                                    if (z(d)) return !1
                                }
                                if (or(d)) return !1;
                                if (er(d) && !ss(d.data) && (!(null == n ? void 0 : n.includeZwsp) || !as(d.data))) return !1;
                                if (er(d) && d.parentNode && a[d.parentNode.nodeName] && ss(d.data)) return !1;
                                d = s.next()
                            } while (d)
                        }
                        return o <= 1
                    },
                    createRng: j,
                    nodeIndex: Ia,
                    split: (e, t, n) => {
                        let o, r, s = j();
                        if (e && t && e.parentNode && t.parentNode) {
                            const a = e.parentNode;
                            return s.setStart(a, Ia(e)), s.setEnd(t.parentNode, Ia(t)), o = s.extractContents(), s = j(), s.setStart(t.parentNode, Ia(t) + 1), s.setEnd(a, Ia(e) + 1), r = s.extractContents(), a.insertBefore(zs(Y, o, l), e), n ? a.insertBefore(n, e) : a.insertBefore(t, e), a.insertBefore(zs(Y, r, l), e), I(e), n || t
                        }
                    },
                    bind: q,
                    unbind: W,
                    fire: (e, t, n) => c.dispatch(e, t, n),
                    dispatch: (e, t, n) => c.dispatch(e, t, n),
                    getContentEditable: K,
                    getContentEditableParent: e => {
                        const t = x();
                        let n = null;
                        for (let o = e; o && o !== t && (n = K(o), null === n); o = o.parentNode) ;
                        return n
                    },
                    isEditable: e => {
                        if (C(e)) {
                            const t = qo(e) ? e : e.parentElement;
                            return C(t) && Vo(t) && oo(yn(t))
                        }
                        return !1
                    },
                    destroy: () => {
                        if (i.length > 0) {
                            let e = i.length;
                            for (; e--;) {
                                const [t, n, o] = i[e];
                                c.unbind(t, n, o)
                            }
                        }
                        ge(r, ((e, t) => {
                            a.unload(t), delete r[t]
                        }))
                    },
                    isChildOf: (e, t) => e === t || t.contains(e),
                    dumpRng: e => "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset
                }, G = ((e, t, n) => {
                    const o = t.keep_values, r = {
                        set: (e, o, r) => {
                            const s = yn(e);
                            w(t.url_converter) && C(o) && (o = t.url_converter.call(t.url_converter_scope || n(), String(o), r, e)), La(s, "data-mce-" + r, o), La(s, r, o)
                        }, get: (e, t) => {
                            const n = yn(e);
                            return en(n, "data-mce-" + t) || en(n, t)
                        }
                    }, s = {
                        style: {
                            set: (t, n) => {
                                const r = yn(t);
                                o && La(r, Pa, n), on(r, "style"), m(n) && lo(r, e.parse(n))
                            }, get: t => {
                                const n = yn(t), o = en(n, Pa) || en(n, "style");
                                return e.serialize(e.parse(o), Ht(n))
                            }
                        }
                    };
                    return o && (s.href = s.src = r), s
                })(d, t, N(Y));
            return Y
        };
    za.DOM = za(document), za.nodeIndex = Ia;
    const ja = za.DOM;

    class Ha {
        constructor(e = {}) {
            this.states = {}, this.queue = [], this.scriptLoadedCallbacks = {}, this.queueLoadedCallbacks = [], this.loading = !1, this.settings = e
        }

        _setReferrerPolicy(e) {
            this.settings.referrerPolicy = e
        }

        loadScript(e) {
            return new Promise(((t, n) => {
                const o = ja;
                let r;
                const s = () => {
                    o.remove(a), r && (r.onerror = r.onload = r = null)
                }, a = o.uniqueId();
                r = document.createElement("script"), r.id = a, r.type = "text/javascript", r.src = Pt._addCacheSuffix(e), this.settings.referrerPolicy && o.setAttrib(r, "referrerpolicy", this.settings.referrerPolicy), r.onload = () => {
                    s(), t()
                }, r.onerror = () => {
                    s(), n("Failed to load script: " + e)
                }, (document.getElementsByTagName("head")[0] || document.body).appendChild(r)
            }))
        }

        isDone(e) {
            return 2 === this.states[e]
        }

        markDone(e) {
            this.states[e] = 2
        }

        add(e) {
            const t = this;
            return t.queue.push(e), void 0 === t.states[e] && (t.states[e] = 0), new Promise(((n, o) => {
                t.scriptLoadedCallbacks[e] || (t.scriptLoadedCallbacks[e] = []), t.scriptLoadedCallbacks[e].push({
                    resolve: n,
                    reject: o
                })
            }))
        }

        load(e) {
            return this.add(e)
        }

        remove(e) {
            delete this.states[e], delete this.scriptLoadedCallbacks[e]
        }

        loadQueue() {
            const e = this.queue;
            return this.queue = [], this.loadScripts(e)
        }

        loadScripts(e) {
            const t = this, n = (e, n) => {
                    xe(t.scriptLoadedCallbacks, n).each((t => {
                        V(t, (t => t[e](n)))
                    })), delete t.scriptLoadedCallbacks[n]
                }, o = e => {
                    const t = Y(e, (e => "rejected" === e.status));
                    return t.length > 0 ? Promise.reject(te(t, (({reason: e}) => p(e) ? e : [e]))) : Promise.resolve()
                },
                r = e => Promise.allSettled(q(e, (e => 2 === t.states[e] ? (n("resolve", e), Promise.resolve()) : 3 === t.states[e] ? (n("reject", e), Promise.reject(e)) : (t.states[e] = 1, t.loadScript(e).then((() => {
                    t.states[e] = 2, n("resolve", e);
                    const s = t.queue;
                    return s.length > 0 ? (t.queue = [], r(s).then(o)) : Promise.resolve()
                }), (() => (t.states[e] = 3, n("reject", e), Promise.reject(e)))))))),
                s = e => (t.loading = !0, r(e).then((e => {
                    t.loading = !1;
                    const n = t.queueLoadedCallbacks.shift();
                    return I.from(n).each(D), o(e)
                }))), a = ke(e);
            return t.loading ? new Promise(((e, n) => {
                t.queueLoadedCallbacks.push((() => {
                    s(a).then(e, n)
                }))
            })) : s(a)
        }
    }

    Ha.ScriptLoader = new Ha;
    const $a = e => {
        let t = e;
        return {
            get: () => t, set: e => {
                t = e
            }
        }
    }, qa = {}, Va = $a("en"), Wa = () => xe(qa, Va.get()), Ka = {
        getData: () => pe(qa, (e => ({...e}))), setCode: e => {
            e && Va.set(e)
        }, getCode: () => Va.get(), add: (e, t) => {
            let n = qa[e];
            n || (qa[e] = n = {});
            const o = q(me(t), (e => e.toLowerCase()));
            ge(t, ((e, r) => {
                const s = r.toLowerCase();
                s !== r && ((e, t) => {
                    const n = e.indexOf(t);
                    return -1 !== n && e.indexOf(t, n + 1) > n
                })(o, s) ? (Ee(t, s) || (n[s] = e), n[r] = e) : n[s] = e
            }))
        }, translate: e => {
            const t = Wa().getOr({}), n = e => w(e) ? Object.prototype.toString.call(e) : o(e) ? "" : "" + e,
                o = e => "" === e || null == e, r = e => {
                    const o = n(e);
                    return Ee(t, o) ? n(t[o]) : xe(t, o.toLowerCase()).map(n).getOr(o)
                }, s = e => e.replace(/{context:\w+}$/, "");
            if (o(e)) return "";
            if (f(a = e) && Ee(a, "raw")) return n(e.raw);
            var a;
            if ((e => p(e) && e.length > 1)(e)) {
                const t = e.slice(1);
                return s(r(e[0]).replace(/\{([0-9]+)\}/g, ((e, o) => Ee(t, o) ? n(t[o]) : e)))
            }
            return s(r(e))
        }, isRtl: () => Wa().bind((e => xe(e, "_dir"))).exists((e => "rtl" === e)), hasCode: e => Ee(qa, e)
    }, Ya = () => {
        const e = [], t = {}, n = {}, o = [], r = (e, t) => {
                const n = Y(o, (n => n.name === e && n.state === t));
                V(n, (e => e.resolve()))
            }, s = e => Ee(t, e), a = (e, n) => {
                const o = Ka.getCode();
                !o || n && -1 === ("," + (n || "") + ",").indexOf("," + o + ",") || Ha.ScriptLoader.add(t[e] + "/langs/" + o + ".js")
            },
            i = (e, t = "added") => "added" === t && (e => Ee(n, e))(e) || "loaded" === t && s(e) ? Promise.resolve() : new Promise((n => {
                o.push({name: e, state: t, resolve: n})
            }));
        return {
            items: e,
            urls: t,
            lookup: n,
            get: e => {
                if (n[e]) return n[e].instance
            },
            requireLangPack: (e, t) => {
                !1 !== Ya.languageLoad && (s(e) ? a(e, t) : i(e, "loaded").then((() => a(e, t))))
            },
            add: (t, o) => (e.push(o), n[t] = {instance: o}, r(t, "added"), o),
            remove: e => {
                delete t[e], delete n[e]
            },
            createUrl: (e, t) => m(t) ? m(e) ? {prefix: "", resource: t, suffix: ""} : {
                prefix: e.prefix,
                resource: t,
                suffix: e.suffix
            } : t,
            load: (e, o) => {
                if (t[e]) return Promise.resolve();
                let s = m(o) ? o : o.prefix + o.resource + o.suffix;
                0 !== s.indexOf("/") && -1 === s.indexOf("://") && (s = Ya.baseURL + "/" + s), t[e] = s.substring(0, s.lastIndexOf("/"));
                const a = () => (r(e, "loaded"), Promise.resolve());
                return n[e] ? a() : Ha.ScriptLoader.add(s).then(a)
            },
            waitFor: i
        }
    };
    Ya.languageLoad = !0, Ya.baseURL = "", Ya.PluginManager = Ya(), Ya.ThemeManager = Ya(), Ya.ModelManager = Ya();
    const Ga = e => {
            const t = $a(I.none()), n = () => t.get().each((e => clearInterval(e)));
            return {
                clear: () => {
                    n(), t.set(I.none())
                }, isSet: () => t.get().isSome(), get: () => t.get(), set: o => {
                    n(), t.set(I.some(setInterval(o, e)))
                }
            }
        }, Xa = () => {
            const e = (e => {
                const t = $a(I.none()), n = () => t.get().each(e);
                return {
                    clear: () => {
                        n(), t.set(I.none())
                    }, isSet: () => t.get().isSome(), get: () => t.get(), set: e => {
                        n(), t.set(I.some(e))
                    }
                }
            })(_);
            return {...e, on: t => e.get().each(t)}
        }, Qa = (e, t) => {
            let n = null;
            return {
                cancel: () => {
                    h(n) || (clearTimeout(n), n = null)
                }, throttle: (...o) => {
                    h(n) && (n = setTimeout((() => {
                        n = null, e.apply(null, o)
                    }), t))
                }
            }
        }, Ja = (e, t) => {
            let n = null;
            const o = () => {
                h(n) || (clearTimeout(n), n = null)
            };
            return {
                cancel: o, throttle: (...r) => {
                    o(), n = setTimeout((() => {
                        n = null, e.apply(null, r)
                    }), t)
                }
            }
        }, Za = N("mce-annotation"), ei = N("data-mce-annotation"), ti = N("data-mce-annotation-uid"),
        ni = N("data-mce-annotation-active"), oi = N("data-mce-annotation-classes"),
        ri = N("data-mce-annotation-attrs"), si = e => t => _n(t, e), ai = (e, t) => {
            const n = e.selection.getRng(), o = yn(n.startContainer), r = yn(e.getBody()),
                s = t.fold((() => "." + Za()), (e => `[${ei()}="${e}"]`)), a = In(o, n.startOffset).getOr(o);
            return no(a, s, si(r)).bind((t => tn(t, `${ti()}`).bind((n => tn(t, `${ei()}`).map((t => {
                const o = li(e, n);
                return {uid: n, name: t, elements: o}
            }))))))
        }, ii = (e, t) => nn(e, "data-mce-bogus") || zo(e, '[data-mce-bogus="all"]', si(t)), li = (e, t) => {
            const n = yn(e.getBody()), o = Uo(n, `[${ti()}="${t}"]`);
            return Y(o, (e => !ii(e, n)))
        }, di = (e, t) => {
            const n = yn(e.getBody()), o = Uo(n, `[${ei()}="${t}"]`), r = {};
            return V(o, (e => {
                if (!ii(e, n)) {
                    const t = en(e, ti()), n = xe(r, t).getOr([]);
                    r[t] = n.concat([e])
                }
            })), r
        };
    let ci = 0;
    const ui = e => {
            const t = (new Date).getTime(), n = Math.floor(1e9 * Math.random());
            return ci++, e + "_" + n + ci + String(t)
        }, mi = (e, t) => yn(e.dom.cloneNode(t)), fi = e => mi(e, !1), gi = e => mi(e, !0), pi = (e, t, n = L) => {
            const o = new jo(e, t), r = e => {
                let t;
                do {
                    t = o[e]()
                } while (t && !er(t) && !n(t));
                return I.from(t).filter(er)
            };
            return {
                current: () => I.from(o.current()).filter(er),
                next: () => r("next"),
                prev: () => r("prev"),
                prev2: () => r("prev2")
            }
        }, hi = (e, t) => {
            const n = t || (t => e.isBlock(t) || ar(t) || dr(t)), o = (e, t, n, r) => {
                if (er(e)) {
                    const n = r(e, t, e.data);
                    if (-1 !== n) return I.some({container: e, offset: n})
                }
                return n().bind((e => o(e.container, e.offset, n, r)))
            };
            return {
                backwards: (t, r, s, a) => {
                    const i = pi(t, null != a ? a : e.getRoot(), n);
                    return o(t, r, (() => i.prev().map((e => ({container: e, offset: e.length})))), s).getOrNull()
                }, forwards: (t, r, s, a) => {
                    const i = pi(t, null != a ? a : e.getRoot(), n);
                    return o(t, r, (() => i.next().map((e => ({container: e, offset: 0})))), s).getOrNull()
                }
            }
        }, bi = Math.round, vi = e => e ? {
            left: bi(e.left),
            top: bi(e.top),
            bottom: bi(e.bottom),
            right: bi(e.right),
            width: bi(e.width),
            height: bi(e.height)
        } : {left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0},
        yi = (e, t) => (e = vi(e), t || (e.left = e.left + e.width), e.right = e.left, e.width = 0, e),
        Ci = (e, t, n) => e >= 0 && e <= Math.min(t.height, n.height) / 2, wi = (e, t) => {
            const n = Math.min(t.height / 2, e.height / 2);
            return e.bottom - n < t.top || !(e.top > t.bottom) && Ci(t.top - e.bottom, e, t)
        }, xi = (e, t) => e.top > t.bottom || !(e.bottom < t.top) && Ci(t.bottom - e.top, e, t), Ei = (e, t, n) => {
            const o = Math.max(Math.min(t, e.left + e.width), e.left), r = Math.max(Math.min(n, e.top + e.height), e.top);
            return Math.sqrt((t - o) * (t - o) + (n - r) * (n - r))
        }, _i = e => {
            const t = e.startContainer, n = e.startOffset;
            return t === e.endContainer && t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null
        }, ki = (e, t) => {
            if (qo(e) && e.hasChildNodes()) {
                const n = e.childNodes, o = ((e, t, n) => Math.min(Math.max(e, 0), n))(t, 0, n.length - 1);
                return n[o]
            }
            return e
        },
        Si = new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"),
        Ni = e => m(e) && e.charCodeAt(0) >= 768 && Si.test(e), Ri = qo, Ai = ts, Ti = Yo("display", "block table"),
        Oi = Yo("float", "left right"), Bi = ((...e) => t => {
            for (let n = 0; n < e.length; n++) if (!e[n](t)) return !1;
            return !0
        })(Ri, Ai, O(Oi)), Pi = O(Yo("white-space", "pre pre-line pre-wrap")), Di = er, Li = ar, Mi = za.nodeIndex,
        Ii = (e, t) => t < 0 && qo(e) && e.hasChildNodes() ? void 0 : ki(e, t),
        Fi = e => e ? e.createRange() : za.DOM.createRng(), Ui = e => m(e) && /[\r\n\t ]/.test(e),
        zi = e => !!e.setStart && !!e.setEnd, ji = e => {
            const t = e.startContainer, n = e.startOffset;
            if (Ui(e.toString()) && Pi(t.parentNode) && er(t)) {
                const e = t.data;
                if (Ui(e[n - 1]) || Ui(e[n + 1])) return !0
            }
            return !1
        }, Hi = e => 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom, $i = e => {
            var t;
            let n;
            const o = e.getClientRects();
            return n = o.length > 0 ? vi(o[0]) : vi(e.getBoundingClientRect()), !zi(e) && Li(e) && Hi(n) ? (e => {
                const t = e.ownerDocument, n = Fi(t), o = t.createTextNode(br), r = e.parentNode;
                r.insertBefore(o, e), n.setStart(o, 0), n.setEnd(o, 1);
                const s = vi(n.getBoundingClientRect());
                return r.removeChild(o), s
            })(e) : Hi(n) && zi(e) && null !== (t = (e => {
                const t = e.startContainer, n = e.endContainer, o = e.startOffset, r = e.endOffset;
                if (t === n && er(n) && 0 === o && 1 === r) {
                    const t = e.cloneRange();
                    return t.setEndAfter(n), $i(t)
                }
                return null
            })(e)) && void 0 !== t ? t : n
        }, qi = (e, t) => {
            const n = yi(e, t);
            return n.width = 1, n.right = n.left + 1, n
        }, Vi = (e, t, n) => {
            const o = () => (n || (n = (e => {
                const t = [], n = e => {
                    var n, o;
                    0 !== e.height && (t.length > 0 && (n = e, o = t[t.length - 1], n.left === o.left && n.top === o.top && n.bottom === o.bottom && n.right === o.right) || t.push(e))
                }, o = (e, t) => {
                    const o = Fi(e.ownerDocument);
                    if (t < e.data.length) {
                        if (Ni(e.data[t])) return;
                        if (Ni(e.data[t - 1]) && (o.setStart(e, t), o.setEnd(e, t + 1), !ji(o))) return void n(qi($i(o), !1))
                    }
                    t > 0 && (o.setStart(e, t - 1), o.setEnd(e, t), ji(o) || n(qi($i(o), !1))), t < e.data.length && (o.setStart(e, t), o.setEnd(e, t + 1), ji(o) || n(qi($i(o), !0)))
                }, r = e.container(), s = e.offset();
                if (Di(r)) return o(r, s), t;
                if (Ri(r)) if (e.isAtEnd()) {
                    const e = Ii(r, s);
                    Di(e) && o(e, e.data.length), Bi(e) && !Li(e) && n(qi($i(e), !1))
                } else {
                    const a = Ii(r, s);
                    if (Di(a) && o(a, 0), Bi(a) && e.isAtEnd()) return n(qi($i(a), !1)), t;
                    const i = Ii(e.container(), e.offset() - 1);
                    Bi(i) && !Li(i) && (Ti(i) || Ti(a) || !Bi(a)) && n(qi($i(i), !1)), Bi(a) && n(qi($i(a), !0))
                }
                return t
            })(Vi(e, t))), n);
            return {
                container: N(e),
                offset: N(t),
                toRange: () => {
                    const n = Fi(e.ownerDocument);
                    return n.setStart(e, t), n.setEnd(e, t), n
                },
                getClientRects: o,
                isVisible: () => o().length > 0,
                isAtStart: () => (Di(e), 0 === t),
                isAtEnd: () => Di(e) ? t >= e.data.length : t >= e.childNodes.length,
                isEqual: n => n && e === n.container() && t === n.offset(),
                getNode: n => Ii(e, n ? t - 1 : t)
            }
        };
    Vi.fromRangeStart = e => Vi(e.startContainer, e.startOffset), Vi.fromRangeEnd = e => Vi(e.endContainer, e.endOffset), Vi.after = e => Vi(e.parentNode, Mi(e) + 1), Vi.before = e => Vi(e.parentNode, Mi(e)), Vi.isAbove = (e, t) => Mt(le(t.getClientRects()), de(e.getClientRects()), wi).getOr(!1), Vi.isBelow = (e, t) => Mt(de(t.getClientRects()), le(e.getClientRects()), xi).getOr(!1), Vi.isAtStart = e => !!e && e.isAtStart(), Vi.isAtEnd = e => !!e && e.isAtEnd(), Vi.isTextPosition = e => !!e && er(e.container()), Vi.isElementPosition = e => !Vi.isTextPosition(e);
    const Wi = (e, t) => {
            er(t) && 0 === t.data.length && e.remove(t)
        }, Ki = (e, t, n) => {
            sr(n) ? ((e, t, n) => {
                const o = I.from(n.firstChild), r = I.from(n.lastChild);
                t.insertNode(n), o.each((t => Wi(e, t.previousSibling))), r.each((t => Wi(e, t.nextSibling)))
            })(e, t, n) : ((e, t, n) => {
                t.insertNode(n), Wi(e, n.previousSibling), Wi(e, n.nextSibling)
            })(e, t, n)
        }, Yi = er, Gi = Xo, Xi = za.nodeIndex, Qi = e => {
            const t = e.parentNode;
            return Gi(t) ? Qi(t) : t
        },
        Ji = e => e ? Oe(e.childNodes, ((e, t) => (Gi(t) && "BR" !== t.nodeName ? e = e.concat(Ji(t)) : e.push(t), e)), []) : [],
        Zi = e => t => e === t, el = e => (Yi(e) ? "text()" : e.nodeName.toLowerCase()) + "[" + (e => {
            let t, n;
            t = Ji(Qi(e)), n = Be(t, Zi(e), e), t = t.slice(0, n + 1);
            const o = Oe(t, ((e, n, o) => (Yi(n) && Yi(t[o - 1]) && e++, e)), 0);
            return t = Te(t, Ko([e.nodeName])), n = Be(t, Zi(e), e), n - o
        })(e) + "]", tl = (e, t) => {
            let n, o = [], r = t.container(), s = t.offset();
            if (Yi(r)) n = ((e, t) => {
                let n = e;
                for (; (n = n.previousSibling) && Yi(n);) t += n.data.length;
                return t
            })(r, s); else {
                const e = r.childNodes;
                s >= e.length ? (n = "after", s = e.length - 1) : n = "before", r = e[s]
            }
            o.push(el(r));
            let a = ((e, t, n) => {
                const o = [];
                for (let n = t.parentNode; n && n !== e; n = n.parentNode) o.push(n);
                return o
            })(e, r);
            return a = Te(a, O(Xo)), o = o.concat(Ae(a, (e => el(e)))), o.reverse().join("/") + "," + n
        }, nl = (e, t) => {
            if (!t) return null;
            const n = t.split(","), o = n[0].split("/"), r = n.length > 1 ? n[1] : "before", s = Oe(o, ((e, t) => {
                const n = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t);
                return n ? ("text()" === n[1] && (n[1] = "#text"), ((e, t, n) => {
                    let o = Ji(e);
                    return o = Te(o, ((e, t) => !Yi(e) || !Yi(o[t - 1]))), o = Te(o, Ko([t])), o[n]
                })(e, n[1], parseInt(n[2], 10))) : null
            }), e);
            if (!s) return null;
            if (!Yi(s) && s.parentNode) {
                let e;
                return e = "after" === r ? Xi(s) + 1 : Xi(s), Vi(s.parentNode, e)
            }
            return ((e, t) => {
                let n = e, o = 0;
                for (; Yi(n);) {
                    const r = n.data.length;
                    if (t >= o && t <= o + r) {
                        e = n, t -= o;
                        break
                    }
                    if (!Yi(n.nextSibling)) {
                        e = n, t = r;
                        break
                    }
                    o += r, n = n.nextSibling
                }
                return Yi(e) && t > e.data.length && (t = e.data.length), Vi(e, t)
            })(s, parseInt(r, 10))
        }, ol = dr, rl = (e, t, n, o, r) => {
            const s = r ? o.startContainer : o.endContainer;
            let a = r ? o.startOffset : o.endOffset;
            const i = [], l = e.getRoot();
            if (er(s)) i.push(n ? ((e, t, n) => {
                let o = e(t.data.slice(0, n)).length;
                for (let n = t.previousSibling; n && er(n); n = n.previousSibling) o += e(n.data).length;
                return o
            })(t, s, a) : a); else {
                let t = 0;
                const o = s.childNodes;
                a >= o.length && o.length && (t = 1, a = Math.max(0, o.length - 1)), i.push(e.nodeIndex(o[a], n) + t)
            }
            for (let t = s; t && t !== l; t = t.parentNode) i.push(e.nodeIndex(t, n));
            return i
        }, sl = (e, t, n) => {
            let o = 0;
            return Pt.each(e.select(t), (e => "all" === e.getAttribute("data-mce-bogus") ? void 0 : e !== n && void o++)), o
        }, al = (e, t) => {
            let n = t ? e.startContainer : e.endContainer, o = t ? e.startOffset : e.endOffset;
            if (qo(n) && "TR" === n.nodeName) {
                const r = n.childNodes;
                n = r[Math.min(t ? o : o - 1, r.length - 1)], n && (o = t ? 0 : n.childNodes.length, t ? e.setStart(n, o) : e.setEnd(n, o))
            }
        }, il = e => (al(e, !0), al(e, !1), e), ll = (e, t) => {
            if (qo(e) && (e = ki(e, t), ol(e))) return e;
            if (Ur(e)) {
                er(e) && Ir(e) && (e = e.parentNode);
                let t = e.previousSibling;
                if (ol(t)) return t;
                if (t = e.nextSibling, ol(t)) return t
            }
        }, dl = (e, t, n) => {
            const o = n.getNode(), r = n.getRng();
            if ("IMG" === o.nodeName || ol(o)) {
                const e = o.nodeName;
                return {name: e, index: sl(n.dom, e, o)}
            }
            const s = (e => ll(e.startContainer, e.startOffset) || ll(e.endContainer, e.endOffset))(r);
            if (s) {
                const e = s.tagName;
                return {name: e, index: sl(n.dom, e, s)}
            }
            return ((e, t, n, o) => {
                const r = t.dom, s = rl(r, e, n, o, !0), a = t.isForward(), i = Wr(o) ? {isFakeCaret: !0} : {};
                return t.isCollapsed() ? {start: s, forward: a, ...i} : {
                    start: s,
                    end: rl(r, e, n, o, !1),
                    forward: a, ...i
                }
            })(e, n, t, r)
        }, cl = (e, t, n) => {
            const o = {"data-mce-type": "bookmark", id: t, style: "overflow:hidden;line-height:0px"};
            return n ? e.create("span", o, "&#xFEFF;") : e.create("span", o)
        }, ul = (e, t) => {
            const n = e.dom;
            let o = e.getRng();
            const r = n.uniqueId(), s = e.isCollapsed(), a = e.getNode(), i = a.nodeName, l = e.isForward();
            if ("IMG" === i) return {name: i, index: sl(n, i, a)};
            const d = il(o.cloneRange());
            if (!s) {
                d.collapse(!1);
                const e = cl(n, r + "_end", t);
                Ki(n, d, e)
            }
            o = il(o), o.collapse(!0);
            const c = cl(n, r + "_start", t);
            return Ki(n, o, c), e.moveToBookmark({id: r, keep: !0, forward: l}), {id: r, forward: l}
        }, ml = T(dl, R, !0), fl = e => {
            const t = t => t(e), n = N(e), o = () => r, r = {
                tag: !0,
                inner: e,
                fold: (t, n) => n(e),
                isValue: M,
                isError: L,
                map: t => pl.value(t(e)),
                mapError: o,
                bind: t,
                exists: t,
                forall: t,
                getOr: n,
                or: o,
                getOrThunk: n,
                orThunk: o,
                getOrDie: n,
                each: t => {
                    t(e)
                },
                toOptional: () => I.some(e)
            };
            return r
        }, gl = e => {
            const t = () => n, n = {
                tag: !1,
                inner: e,
                fold: (t, n) => t(e),
                isValue: L,
                isError: M,
                map: t,
                mapError: t => pl.error(t(e)),
                bind: t,
                exists: L,
                forall: M,
                getOr: R,
                or: R,
                getOrThunk: P,
                orThunk: P,
                getOrDie: B(String(e)),
                each: _,
                toOptional: I.none
            };
            return n
        }, pl = {value: fl, error: gl, fromOption: (e, t) => e.fold((() => gl(t)), fl)}, hl = e => {
            if (!p(e)) throw new Error("cases must be an array");
            if (0 === e.length) throw new Error("there must be at least one case");
            const t = [], n = {};
            return V(e, ((o, r) => {
                const s = me(o);
                if (1 !== s.length) throw new Error("one and only one name per case");
                const a = s[0], i = o[a];
                if (void 0 !== n[a]) throw new Error("duplicate key detected:" + a);
                if ("cata" === a) throw new Error("cannot have a case named cata (sorry)");
                if (!p(i)) throw new Error("case arguments must be an array");
                t.push(a), n[a] = (...n) => {
                    const o = n.length;
                    if (o !== i.length) throw new Error("Wrong number of arguments to case " + a + ". Expected " + i.length + " (" + i + "), got " + o);
                    return {
                        fold: (...t) => {
                            if (t.length !== e.length) throw new Error("Wrong number of arguments to fold. Expected " + e.length + ", got " + t.length);
                            return t[r].apply(null, n)
                        }, match: e => {
                            const o = me(e);
                            if (t.length !== o.length) throw new Error("Wrong number of arguments to match. Expected: " + t.join(",") + "\nActual: " + o.join(","));
                            if (!ne(t, (e => H(o, e)))) throw new Error("Not all branches were specified when using match. Specified: " + o.join(", ") + "\nRequired: " + t.join(", "));
                            return e[a].apply(null, n)
                        }, log: e => {
                            console.log(e, {constructors: t, constructor: a, params: n})
                        }
                    }
                }
            })), n
        };
    hl([{bothErrors: ["error1", "error2"]}, {firstError: ["error1", "value2"]}, {secondError: ["value1", "error2"]}, {bothValues: ["value1", "value2"]}]);
    const bl = e => "inline-command" === e.type || "inline-format" === e.type,
        vl = e => "block-command" === e.type || "block-format" === e.type, yl = e => {
            const t = t => pl.error({message: t, pattern: e}), n = (n, o, r) => {
                if (void 0 !== e.format) {
                    let r;
                    if (p(e.format)) {
                        if (!ne(e.format, m)) return t(n + " pattern has non-string items in the `format` array");
                        r = e.format
                    } else {
                        if (!m(e.format)) return t(n + " pattern has non-string `format` parameter");
                        r = [e.format]
                    }
                    return pl.value(o(r))
                }
                return void 0 !== e.cmd ? m(e.cmd) ? pl.value(r(e.cmd, e.value)) : t(n + " pattern has non-string `cmd` parameter") : t(n + " pattern is missing both `format` and `cmd` parameters")
            };
            if (!f(e)) return t("Raw pattern is not an object");
            if (!m(e.start)) return t("Raw pattern is missing `start` parameter");
            if (void 0 !== e.end) {
                if (!m(e.end)) return t("Inline pattern has non-string `end` parameter");
                if (0 === e.start.length && 0 === e.end.length) return t("Inline pattern has empty `start` and `end` parameters");
                let o = e.start, r = e.end;
                return 0 === r.length && (r = o, o = ""), n("Inline", (e => ({
                    type: "inline-format",
                    start: o,
                    end: r,
                    format: e
                })), ((e, t) => ({type: "inline-command", start: o, end: r, cmd: e, value: t})))
            }
            return void 0 !== e.replacement ? m(e.replacement) ? 0 === e.start.length ? t("Replacement pattern has empty `start` parameter") : pl.value({
                type: "inline-command",
                start: "",
                end: e.start,
                cmd: "mceInsertContent",
                value: e.replacement
            }) : t("Replacement pattern has non-string `replacement` parameter") : 0 === e.start.length ? t("Block pattern has empty `start` parameter") : n("Block", (t => ({
                type: "block-format",
                start: e.start,
                format: t[0]
            })), ((t, n) => ({type: "block-command", start: e.start, cmd: t, value: n})))
        }, Cl = e => Y(e, vl), wl = e => Y(e, bl), xl = e => {
            const t = (e => {
                const t = [], n = [];
                return V(e, (e => {
                    e.fold((e => {
                        t.push(e)
                    }), (e => {
                        n.push(e)
                    }))
                })), {errors: t, values: n}
            })(q(e, yl));
            return V(t.errors, (e => console.error(e.message, e.pattern))), t.values
        }, El = xt().deviceType, _l = El.isTouch(), kl = za.DOM, Sl = e => u(e, RegExp), Nl = e => t => t.options.get(e),
        Rl = e => m(e) || f(e), Al = (e, t = "") => n => {
            const o = m(n);
            if (o) {
                if (-1 !== n.indexOf("=")) {
                    const r = (e => {
                        const t = e.indexOf("=") > 0 ? e.split(/[;,](?![^=;,]*(?:[;,]|$))/) : e.split(",");
                        return X(t, ((e, t) => {
                            const n = t.split("="), o = n[0], r = n.length > 1 ? n[1] : o;
                            return e[Ve(o)] = Ve(r), e
                        }), {})
                    })(n);
                    return {value: xe(r, e.id).getOr(t), valid: o}
                }
                return {value: n, valid: o}
            }
            return {valid: !1, message: "Must be a string."}
        }, Tl = Nl("iframe_attrs"), Ol = Nl("doctype"), Bl = Nl("document_base_url"), Pl = Nl("body_id"),
        Dl = Nl("body_class"), Ll = Nl("content_security_policy"), Ml = Nl("br_in_pre"), Il = Nl("forced_root_block"),
        Fl = Nl("forced_root_block_attrs"), Ul = Nl("newline_behavior"), zl = Nl("br_newline_selector"),
        jl = Nl("no_newline_selector"), Hl = Nl("keep_styles"), $l = Nl("end_container_on_empty_block"),
        ql = Nl("automatic_uploads"), Vl = Nl("images_reuse_filename"), Wl = Nl("images_replace_blob_uris"),
        Kl = Nl("icons"), Yl = Nl("icons_url"), Gl = Nl("images_upload_url"), Xl = Nl("images_upload_base_path"),
        Ql = Nl("images_upload_credentials"), Jl = Nl("images_upload_handler"), Zl = Nl("content_css_cors"),
        ed = Nl("referrer_policy"), td = Nl("language"), nd = Nl("language_url"), od = Nl("indent_use_margin"),
        rd = Nl("indentation"), sd = Nl("content_css"), ad = Nl("content_style"), id = Nl("font_css"),
        ld = Nl("directionality"), dd = Nl("inline_boundaries_selector"), cd = Nl("object_resizing"),
        ud = Nl("resize_img_proportional"), md = Nl("placeholder"), fd = Nl("event_root"), gd = Nl("service_message"),
        pd = Nl("theme"), hd = Nl("theme_url"), bd = Nl("model"), vd = Nl("model_url"), yd = Nl("inline_boundaries"),
        Cd = Nl("formats"), wd = Nl("preview_styles"), xd = Nl("format_empty_lines"),
        Ed = Nl("format_noneditable_selector"), _d = Nl("custom_ui_selector"), kd = Nl("inline"),
        Sd = Nl("hidden_input"), Nd = Nl("submit_patch"), Rd = Nl("add_form_submit_trigger"),
        Ad = Nl("add_unload_trigger"), Td = Nl("custom_undo_redo_levels"), Od = Nl("disable_nodechange"),
        Bd = Nl("readonly"), Pd = Nl("editable_root"), Dd = Nl("content_css_cors"), Ld = Nl("plugins"),
        Md = Nl("external_plugins"), Id = Nl("block_unsupported_drop"), Fd = Nl("visual"),
        Ud = Nl("visual_table_class"), zd = Nl("visual_anchor_class"), jd = Nl("iframe_aria_text"), Hd = Nl("setup"),
        $d = Nl("init_instance_callback"), qd = Nl("urlconverter_callback"), Vd = Nl("auto_focus"),
        Wd = Nl("browser_spellcheck"), Kd = Nl("protect"), Yd = Nl("paste_block_drop"), Gd = Nl("paste_data_images"),
        Xd = Nl("paste_preprocess"), Qd = Nl("paste_postprocess"), Jd = Nl("newdocument_content"),
        Zd = Nl("paste_webkit_styles"), ec = Nl("paste_remove_styles_if_webkit"), tc = Nl("paste_merge_formats"),
        nc = Nl("smart_paste"), oc = Nl("paste_as_text"), rc = Nl("paste_tab_spaces"), sc = Nl("allow_html_data_urls"),
        ac = Nl("text_patterns"), ic = Nl("text_patterns_lookup"), lc = Nl("noneditable_class"),
        dc = Nl("editable_class"), cc = Nl("noneditable_regexp"), uc = Nl("preserve_cdata"),
        mc = Nl("highlight_on_focus"), fc = Nl("xss_sanitization"), gc = Nl("init_content_sync"),
        pc = e => Pt.explode(e.options.get("images_file_types")), hc = Nl("table_tab_navigation"),
        bc = Nl("details_initial_state"), vc = Nl("details_serialized_state"), yc = Nl("force_hex_color"),
        Cc = Nl("sandbox_iframes"), wc = qo, xc = er, Ec = e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        }, _c = e => {
            const t = Dr(e);
            return {count: e.length - t.length, text: t}
        }, kc = e => {
            let t;
            for (; -1 !== (t = e.data.lastIndexOf(Br));) e.deleteData(t, 1)
        }, Sc = (e, t) => (Rc(e), t),
        Nc = (e, t) => Vi.isTextPosition(t) ? ((e, t) => xc(e) && t.container() === e ? ((e, t) => {
            const n = _c(e.data.substr(0, t.offset())), o = _c(e.data.substr(t.offset()));
            return (n.text + o.text).length > 0 ? (kc(e), Vi(e, t.offset() - n.count)) : t
        })(e, t) : Sc(e, t))(e, t) : ((e, t) => t.container() === e.parentNode ? ((e, t) => {
            const n = t.container(), o = ((e, t) => {
                const n = j(e, t);
                return -1 === n ? I.none() : I.some(n)
            })(ce(n.childNodes), e).map((e => e < t.offset() ? Vi(n, t.offset() - 1) : t)).getOr(t);
            return Rc(e), o
        })(e, t) : Sc(e, t))(e, t), Rc = e => {
            wc(e) && Ur(e) && (zr(e) ? e.removeAttribute("data-mce-caret") : Ec(e)), xc(e) && (kc(e), 0 === e.data.length && Ec(e))
        }, Ac = dr, Tc = mr, Oc = cr, Bc = (e, t, n) => {
            const o = yi(t.getBoundingClientRect(), n);
            let r, s;
            if ("BODY" === e.tagName) {
                const t = e.ownerDocument.documentElement;
                r = e.scrollLeft || t.scrollLeft, s = e.scrollTop || t.scrollTop
            } else {
                const t = e.getBoundingClientRect();
                r = e.scrollLeft - t.left, s = e.scrollTop - t.top
            }
            o.left += r, o.right += r, o.top += s, o.bottom += s, o.width = 1;
            let a = t.offsetWidth - t.clientWidth;
            return a > 0 && (n && (a *= -1), o.left += a, o.right += a), o
        }, Pc = (e, t, n, o) => {
            const r = Xa();
            let s, a;
            const i = Il(e), l = e.dom, d = () => {
                (e => {
                    var t, n;
                    const o = Uo(yn(e), "*[contentEditable=false],video,audio,embed,object");
                    for (let e = 0; e < o.length; e++) {
                        const r = o[e].dom;
                        let s = r.previousSibling;
                        if (qr(s)) {
                            const e = s.data;
                            1 === e.length ? null === (t = s.parentNode) || void 0 === t || t.removeChild(s) : s.deleteData(e.length - 1, 1)
                        }
                        s = r.nextSibling, $r(s) && (1 === s.data.length ? null === (n = s.parentNode) || void 0 === n || n.removeChild(s) : s.deleteData(0, 1))
                    }
                })(t), a && (Rc(a), a = null), r.on((e => {
                    l.remove(e.caret), r.clear()
                })), s && (clearInterval(s), s = void 0)
            };
            return {
                show: (e, c) => {
                    let u;
                    if (d(), Oc(c)) return null;
                    if (!n(c)) return a = ((e, t) => {
                        var n;
                        const o = (null !== (n = e.ownerDocument) && void 0 !== n ? n : document).createTextNode(Br),
                            r = e.parentNode;
                        if (t) {
                            const t = e.previousSibling;
                            if (Mr(t)) {
                                if (Ur(t)) return t;
                                if (qr(t)) return t.splitText(t.data.length - 1)
                            }
                            null == r || r.insertBefore(o, e)
                        } else {
                            const t = e.nextSibling;
                            if (Mr(t)) {
                                if (Ur(t)) return t;
                                if ($r(t)) return t.splitText(1), t
                            }
                            e.nextSibling ? null == r || r.insertBefore(o, e.nextSibling) : null == r || r.appendChild(o)
                        }
                        return o
                    })(c, e), u = c.ownerDocument.createRange(), Lc(a.nextSibling) ? (u.setStart(a, 0), u.setEnd(a, 0)) : (u.setStart(a, 1), u.setEnd(a, 1)), u;
                    {
                        const n = ((e, t, n) => {
                            var o;
                            const r = (null !== (o = t.ownerDocument) && void 0 !== o ? o : document).createElement(e);
                            r.setAttribute("data-mce-caret", n ? "before" : "after"), r.setAttribute("data-mce-bogus", "all"), r.appendChild(Tr().dom);
                            const s = t.parentNode;
                            return n ? null == s || s.insertBefore(r, t) : t.nextSibling ? null == s || s.insertBefore(r, t.nextSibling) : null == s || s.appendChild(r), r
                        })(i, c, e), d = Bc(t, c, e);
                        l.setStyle(n, "top", d.top), a = n;
                        const m = l.create("div", {class: "mce-visual-caret", "data-mce-bogus": "all"});
                        l.setStyles(m, {...d}), l.add(t, m), r.set({
                            caret: m,
                            element: c,
                            before: e
                        }), e && l.addClass(m, "mce-visual-caret-before"), s = setInterval((() => {
                            r.on((e => {
                                o() ? l.toggleClass(e.caret, "mce-visual-caret-hidden") : l.addClass(e.caret, "mce-visual-caret-hidden")
                            }))
                        }), 500), u = c.ownerDocument.createRange(), u.setStart(n, 0), u.setEnd(n, 0)
                    }
                    return u
                },
                hide: d,
                getCss: () => ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}",
                reposition: () => {
                    r.on((e => {
                        const n = Bc(t, e.element, e.before);
                        l.setStyles(e.caret, {...n})
                    }))
                },
                destroy: () => clearInterval(s)
            }
        }, Dc = () => At.browser.isFirefox(), Lc = e => Ac(e) || Tc(e),
        Mc = e => (Lc(e) || Qo(e) && Dc()) && Tn(yn(e)).exists(oo), Ic = lr, Fc = dr, Uc = mr,
        zc = Yo("display", "block table table-cell table-caption list-item"), jc = Ur, Hc = Ir, $c = qo, qc = er,
        Vc = ts, Wc = e => e > 0, Kc = e => e < 0, Yc = (e, t) => {
            let n;
            for (; n = e(t);) if (!Hc(n)) return n;
            return null
        }, Gc = (e, t, n, o, r) => {
            const s = new jo(e, o), a = Fc(e) || Hc(e);
            let i;
            if (Kc(t)) {
                if (a && (i = Yc(s.prev.bind(s), !0), n(i))) return i;
                for (; i = Yc(s.prev.bind(s), r);) if (n(i)) return i
            }
            if (Wc(t)) {
                if (a && (i = Yc(s.next.bind(s), !0), n(i))) return i;
                for (; i = Yc(s.next.bind(s), r);) if (n(i)) return i
            }
            return null
        }, Xc = (e, t) => {
            for (; e && e !== t;) {
                if (zc(e)) return e;
                e = e.parentNode
            }
            return null
        }, Qc = (e, t, n) => Xc(e.container(), n) === Xc(t.container(), n), Jc = (e, t) => {
            if (!t) return I.none();
            const n = t.container(), o = t.offset();
            return $c(n) ? I.from(n.childNodes[o + e]) : I.none()
        }, Zc = (e, t) => {
            var n;
            const o = (null !== (n = t.ownerDocument) && void 0 !== n ? n : document).createRange();
            return e ? (o.setStartBefore(t), o.setEndBefore(t)) : (o.setStartAfter(t), o.setEndAfter(t)), o
        }, eu = (e, t, n) => Xc(t, e) === Xc(n, e), tu = (e, t, n) => {
            const o = e ? "previousSibling" : "nextSibling";
            let r = n;
            for (; r && r !== t;) {
                let e = r[o];
                if (e && jc(e) && (e = e[o]), Fc(e) || Uc(e)) {
                    if (eu(t, e, r)) return e;
                    break
                }
                if (Vc(e)) break;
                r = r.parentNode
            }
            return null
        }, nu = T(Zc, !0), ou = T(Zc, !1), ru = (e, t, n) => {
            let o;
            const r = T(tu, !0, t), s = T(tu, !1, t), a = n.startContainer, i = n.startOffset;
            if (Ir(a)) {
                const e = qc(a) ? a.parentNode : a, t = e.getAttribute("data-mce-caret");
                if ("before" === t && (o = e.nextSibling, Mc(o))) return nu(o);
                if ("after" === t && (o = e.previousSibling, Mc(o))) return ou(o)
            }
            if (!n.collapsed) return n;
            if (er(a)) {
                if (jc(a)) {
                    if (1 === e) {
                        if (o = s(a), o) return nu(o);
                        if (o = r(a), o) return ou(o)
                    }
                    if (-1 === e) {
                        if (o = r(a), o) return ou(o);
                        if (o = s(a), o) return nu(o)
                    }
                    return n
                }
                if (qr(a) && i >= a.data.length - 1) return 1 === e && (o = s(a), o) ? nu(o) : n;
                if ($r(a) && i <= 1) return -1 === e && (o = r(a), o) ? ou(o) : n;
                if (i === a.data.length) return o = s(a), o ? nu(o) : n;
                if (0 === i) return o = r(a), o ? ou(o) : n
            }
            return n
        }, su = (e, t) => Jc(e ? 0 : -1, t).filter(Fc), au = (e, t, n) => {
            const o = ru(e, t, n);
            return -1 === e ? Vi.fromRangeStart(o) : Vi.fromRangeEnd(o)
        }, iu = e => I.from(e.getNode()).map(yn), lu = (e, t) => {
            let n = t;
            for (; n = e(n);) if (n.isVisible()) return n;
            return n
        }, du = (e, t) => {
            const n = Qc(e, t);
            return !(n || !ar(e.getNode())) || n
        };
    var cu;
    !function (e) {
        e[e.Backwards = -1] = "Backwards", e[e.Forwards = 1] = "Forwards"
    }(cu || (cu = {}));
    const uu = dr, mu = er, fu = qo, gu = ar, pu = ts,
        hu = e => Jr(e) || (e => !!ns(e) && !X(ce(e.getElementsByTagName("*")), ((e, t) => e || Kr(t)), !1))(e),
        bu = os, vu = (e, t) => e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null, yu = (e, t) => {
            if (Wc(e)) {
                if (pu(t.previousSibling) && !mu(t.previousSibling)) return Vi.before(t);
                if (mu(t)) return Vi(t, 0)
            }
            if (Kc(e)) {
                if (pu(t.nextSibling) && !mu(t.nextSibling)) return Vi.after(t);
                if (mu(t)) return Vi(t, t.data.length)
            }
            return Kc(e) ? gu(t) ? Vi.before(t) : Vi.after(t) : Vi.before(t)
        }, Cu = (e, t, n) => {
            let o, r, s, a;
            if (!fu(n) || !t) return null;
            if (t.isEqual(Vi.after(n)) && n.lastChild) {
                if (a = Vi.after(n.lastChild), Kc(e) && pu(n.lastChild) && fu(n.lastChild)) return gu(n.lastChild) ? Vi.before(n.lastChild) : a
            } else a = t;
            const i = a.container();
            let l = a.offset();
            if (mu(i)) {
                if (Kc(e) && l > 0) return Vi(i, --l);
                if (Wc(e) && l < i.length) return Vi(i, ++l);
                o = i
            } else {
                if (Kc(e) && l > 0 && (r = vu(i, l - 1), pu(r))) return !hu(r) && (s = Gc(r, e, bu, r), s) ? mu(s) ? Vi(s, s.data.length) : Vi.after(s) : mu(r) ? Vi(r, r.data.length) : Vi.before(r);
                if (Wc(e) && l < i.childNodes.length && (r = vu(i, l), pu(r))) return gu(r) ? ((e, t) => {
                    const n = t.nextSibling;
                    return n && pu(n) ? mu(n) ? Vi(n, 0) : Vi.before(n) : Cu(cu.Forwards, Vi.after(t), e)
                })(n, r) : !hu(r) && (s = Gc(r, e, bu, r), s) ? mu(s) ? Vi(s, 0) : Vi.before(s) : mu(r) ? Vi(r, 0) : Vi.after(r);
                o = r || a.getNode()
            }
            if (o && (Wc(e) && a.isAtEnd() || Kc(e) && a.isAtStart()) && (o = Gc(o, e, M, n, !0), bu(o, n))) return yu(e, o);
            r = o ? Gc(o, e, bu, n) : o;
            const d = Pe(Y(((e, t) => {
                const n = [];
                let o = e;
                for (; o && o !== t;) n.push(o), o = o.parentNode;
                return n
            })(i, n), uu));
            return !d || r && d.contains(r) ? r ? yu(e, r) : null : (a = Wc(e) ? Vi.after(d) : Vi.before(d), a)
        }, wu = e => ({next: t => Cu(cu.Forwards, t, e), prev: t => Cu(cu.Backwards, t, e)}),
        xu = e => Vi.isTextPosition(e) ? 0 === e.offset() : ts(e.getNode()), Eu = e => {
            if (Vi.isTextPosition(e)) {
                const t = e.container();
                return e.offset() === t.data.length
            }
            return ts(e.getNode(!0))
        }, _u = (e, t) => !Vi.isTextPosition(e) && !Vi.isTextPosition(t) && e.getNode() === t.getNode(!0),
        ku = (e, t, n) => {
            const o = wu(t);
            return I.from(e ? o.next(n) : o.prev(n))
        }, Su = (e, t, n) => ku(e, t, n).bind((o => Qc(n, o, t) && ((e, t, n) => {
            return e ? !_u(t, n) && (o = t, !(!Vi.isTextPosition(o) && ar(o.getNode()))) && Eu(t) && xu(n) : !_u(n, t) && xu(t) && Eu(n);
            var o
        })(e, n, o) ? ku(e, t, o) : I.some(o))),
        Nu = (e, t, n, o) => Su(e, t, n).bind((n => o(n) ? Nu(e, t, n, o) : I.some(n))), Ru = (e, t) => {
            const n = e ? t.firstChild : t.lastChild;
            return er(n) ? I.some(Vi(n, e ? 0 : n.data.length)) : n ? ts(n) ? I.some(e ? Vi.before(n) : ar(o = n) ? Vi.before(o) : Vi.after(o)) : ((e, t, n) => {
                const o = e ? Vi.before(n) : Vi.after(n);
                return ku(e, t, o)
            })(e, t, n) : I.none();
            var o
        }, Au = T(ku, !0), Tu = T(ku, !1), Ou = T(Ru, !0), Bu = T(Ru, !1), Pu = "_mce_caret",
        Du = e => qo(e) && e.id === Pu, Lu = (e, t) => {
            let n = t;
            for (; n && n !== e;) {
                if (Du(n)) return n;
                n = n.parentNode
            }
            return null
        }, Mu = e => Ee(e, "name"), Iu = e => Pt.isArray(e.start), Fu = e => !(!Mu(e) && b(e.forward)) || e.forward,
        Uu = (e, t) => (qo(t) && e.isBlock(t) && !t.innerHTML && (t.innerHTML = '<br data-mce-bogus="1" />'), t),
        zu = (e, t) => Bu(e).fold(L, (e => (t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0))),
        ju = (e, t, n) => !(!(e => !e.hasChildNodes())(t) || !Lu(e, t) || (((e, t) => {
            var n;
            const o = (null !== (n = e.ownerDocument) && void 0 !== n ? n : document).createTextNode(Br);
            e.appendChild(o), t.setStart(o, 0), t.setEnd(o, 0)
        })(t, n), 0)), Hu = (e, t, n, o) => {
            const r = n[t ? "start" : "end"], s = e.getRoot();
            if (r) {
                let e = s, n = r[0];
                for (let t = r.length - 1; e && t >= 1; t--) {
                    const n = e.childNodes;
                    if (ju(s, e, o)) return !0;
                    if (r[t] > n.length - 1) return !!ju(s, e, o) || zu(e, o);
                    e = n[r[t]]
                }
                er(e) && (n = Math.min(r[0], e.data.length)), qo(e) && (n = Math.min(r[0], e.childNodes.length)), t ? o.setStart(e, n) : o.setEnd(e, n)
            }
            return !0
        }, $u = e => er(e) && e.data.length > 0, qu = (e, t, n) => {
            const o = e.get(n.id + "_" + t), r = null == o ? void 0 : o.parentNode, s = n.keep;
            if (o && r) {
                let a, i;
                if ("start" === t ? s ? o.hasChildNodes() ? (a = o.firstChild, i = 1) : $u(o.nextSibling) ? (a = o.nextSibling, i = 0) : $u(o.previousSibling) ? (a = o.previousSibling, i = o.previousSibling.data.length) : (a = r, i = e.nodeIndex(o) + 1) : (a = r, i = e.nodeIndex(o)) : s ? o.hasChildNodes() ? (a = o.firstChild, i = 1) : $u(o.previousSibling) ? (a = o.previousSibling, i = o.previousSibling.data.length) : (a = r, i = e.nodeIndex(o)) : (a = r, i = e.nodeIndex(o)), !s) {
                    const r = o.previousSibling, s = o.nextSibling;
                    let l;
                    for (Pt.each(Pt.grep(o.childNodes), (e => {
                        er(e) && (e.data = e.data.replace(/\uFEFF/g, ""))
                    })); l = e.get(n.id + "_" + t);) e.remove(l, !0);
                    if (er(s) && er(r) && !At.browser.isOpera()) {
                        const t = r.data.length;
                        r.appendData(s.data), e.remove(s), a = r, i = t
                    }
                }
                return I.some(Vi(a, i))
            }
            return I.none()
        }, Vu = (e, t, n) => ((e, t, n = !1) => 2 === t ? dl(Dr, n, e) : 3 === t ? (e => {
            const t = e.getRng();
            return {
                start: tl(e.dom.getRoot(), Vi.fromRangeStart(t)),
                end: tl(e.dom.getRoot(), Vi.fromRangeEnd(t)),
                forward: e.isForward()
            }
        })(e) : t ? (e => ({rng: e.getRng(), forward: e.isForward()}))(e) : ul(e, !1))(e, t, n), Wu = (e, t) => {
            ((e, t) => {
                const n = e.dom;
                if (t) {
                    if (Iu(t)) return ((e, t) => {
                        const n = e.createRng();
                        return Hu(e, !0, t, n) && Hu(e, !1, t, n) ? I.some({range: n, forward: Fu(t)}) : I.none()
                    })(n, t);
                    if ((e => m(e.start))(t)) return ((e, t) => {
                        const n = I.from(nl(e.getRoot(), t.start)), o = I.from(nl(e.getRoot(), t.end));
                        return Mt(n, o, ((n, o) => {
                            const r = e.createRng();
                            return r.setStart(n.container(), n.offset()), r.setEnd(o.container(), o.offset()), {
                                range: r,
                                forward: Fu(t)
                            }
                        }))
                    })(n, t);
                    if ((e => Ee(e, "id"))(t)) return ((e, t) => {
                        const n = qu(e, "start", t), o = qu(e, "end", t);
                        return Mt(n, o.or(n), ((n, o) => {
                            const r = e.createRng();
                            return r.setStart(Uu(e, n.container()), n.offset()), r.setEnd(Uu(e, o.container()), o.offset()), {
                                range: r,
                                forward: Fu(t)
                            }
                        }))
                    })(n, t);
                    if (Mu(t)) return ((e, t) => I.from(e.select(t.name)[t.index]).map((t => {
                        const n = e.createRng();
                        return n.selectNode(t), {range: n, forward: !0}
                    })))(n, t);
                    if ((e => Ee(e, "rng"))(t)) return I.some({range: t.rng, forward: Fu(t)})
                }
                return I.none()
            })(e, t).each((({range: t, forward: n}) => {
                e.setRng(t, n)
            }))
        }, Ku = e => qo(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type"),
        Yu = (Gu = br, e => Gu === e);
    var Gu;
    const Xu = e => "" !== e && -1 !== " \f\n\r\t\v".indexOf(e), Qu = e => !Xu(e) && !Yu(e) && !vr(e), Ju = e => {
            const t = [];
            if (e) for (let n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
            return t
        }, Zu = (e, t) => {
            const n = Uo(t, "td[data-mce-selected],th[data-mce-selected]");
            return n.length > 0 ? n : (e => Y((e => te(e, (e => {
                const t = _i(e);
                return t ? [yn(t)] : []
            })))(e), Rr))(e)
        }, em = e => Zu(Ju(e.selection.getSel()), yn(e.getBody())), tm = (e, t) => eo(e, "table", t),
        nm = e => Fn(e).fold(N([e]), (t => [e].concat(nm(t)))),
        om = e => Un(e).fold(N([e]), (t => "br" === Ht(t) ? Bn(t).map((t => [e].concat(om(t)))).getOr([]) : [e].concat(om(t)))),
        rm = (e, t) => Mt((e => {
            const t = e.startContainer, n = e.startOffset;
            return er(t) ? 0 === n ? I.some(yn(t)) : I.none() : I.from(t.childNodes[n]).map(yn)
        })(t), (e => {
            const t = e.endContainer, n = e.endOffset;
            return er(t) ? n === t.data.length ? I.some(yn(t)) : I.none() : I.from(t.childNodes[n - 1]).map(yn)
        })(t), ((t, n) => {
            const o = J(nm(e), T(_n, t)), r = J(om(e), T(_n, n));
            return o.isSome() && r.isSome()
        })).getOr(!1), sm = (e, t, n, o) => {
            const r = n, s = new jo(n, r),
                a = ye(e.schema.getMoveCaretBeforeOnEnterElements(), ((e, t) => !H(["td", "th", "table"], t.toLowerCase())));
            let i = n;
            do {
                if (er(i) && 0 !== Pt.trim(i.data).length) return void (o ? t.setStart(i, 0) : t.setEnd(i, i.data.length));
                if (a[i.nodeName]) return void (o ? t.setStartBefore(i) : "BR" === i.nodeName ? t.setEndBefore(i) : t.setEndAfter(i))
            } while (i = o ? s.next() : s.prev());
            "BODY" === r.nodeName && (o ? t.setStart(r, 0) : t.setEnd(r, r.childNodes.length))
        }, am = e => {
            const t = e.selection.getSel();
            return C(t) && t.rangeCount > 0
        }, im = (e, t) => {
            const n = em(e);
            n.length > 0 ? V(n, (n => {
                const o = n.dom, r = e.dom.createRng();
                r.setStartBefore(o), r.setEndAfter(o), t(r, !0)
            })) : t(e.selection.getRng(), !1)
        }, lm = (e, t, n) => {
            const o = ul(e, t);
            n(o), e.moveToBookmark(o)
        }, dm = e => x(null == e ? void 0 : e.nodeType), cm = e => qo(e) && !Ku(e) && !Du(e) && !Xo(e), um = (e, t, n) => {
            const {selection: o, dom: r} = e, s = o.getNode(), a = dr(s);
            lm(o, !0, (() => {
                t()
            })), a && dr(s) && r.isChildOf(s, e.getBody()) ? e.selection.select(s) : n(o.getStart()) && mm(r, o)
        }, mm = (e, t) => {
            var n, o;
            const r = t.getRng(), {startContainer: s, startOffset: a} = r;
            if (!((e, t) => {
                if (cm(t) && !/^(TD|TH)$/.test(t.nodeName)) {
                    const n = e.getAttrib(t, "data-mce-selected"), o = parseInt(n, 10);
                    return !isNaN(o) && o > 0
                }
                return !1
            })(e, t.getNode()) && qo(s)) {
                const i = s.childNodes, l = e.getRoot();
                let d;
                if (a < i.length) {
                    const t = i[a];
                    d = new jo(t, null !== (n = e.getParent(t, e.isBlock)) && void 0 !== n ? n : l)
                } else {
                    const t = i[i.length - 1];
                    d = new jo(t, null !== (o = e.getParent(t, e.isBlock)) && void 0 !== o ? o : l), d.next(!0)
                }
                for (let n = d.current(); n; n = d.next()) {
                    if ("false" === e.getContentEditable(n)) return;
                    if (er(n) && !hm(n)) return r.setStart(n, 0), void t.setRng(r)
                }
            }
        }, fm = (e, t, n) => {
            if (e) {
                const o = t ? "nextSibling" : "previousSibling";
                for (e = n ? e : e[o]; e; e = e[o]) if (qo(e) || !hm(e)) return e
            }
        }, gm = (e, t) => !!e.getTextBlockElements()[t.nodeName.toLowerCase()] || Ts(e, t),
        pm = (e, t, n) => e.schema.isValidChild(t, n), hm = (e, t = !1) => {
            if (C(e) && er(e)) {
                const n = t ? e.data.replace(/ /g, "\xa0") : e.data;
                return ss(n)
            }
            return !1
        }, bm = (e, t) => {
            const n = e.dom;
            return cm(t) && "false" === n.getContentEditable(t) && ((e, t) => {
                const n = "[data-mce-cef-wrappable]", o = Ed(e), r = Ge(o) ? n : `${n},${o}`;
                return xn(yn(t), r)
            })(e, t) && 0 === n.select('[contenteditable="true"]', t).length
        }, vm = (e, t) => w(e) ? e(t) : (C(t) && (e = e.replace(/%(\w+)/g, ((e, n) => t[n] || e))), e),
        ym = (e, t) => (t = t || "", e = "" + ((e = e || "").nodeName || e), t = "" + (t.nodeName || t), e.toLowerCase() === t.toLowerCase()),
        Cm = (e, t) => {
            if (y(e)) return null;
            {
                let n = String(e);
                return "color" !== t && "backgroundColor" !== t || (n = Ca(n)), "fontWeight" === t && 700 === e && (n = "bold"), "fontFamily" === t && (n = n.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), n
            }
        }, wm = (e, t, n) => {
            const o = e.getStyle(t, n);
            return Cm(o, n)
        }, xm = (e, t) => {
            let n;
            return e.getParent(t, (t => !!qo(t) && (n = e.getStyle(t, "text-decoration"), !!n && "none" !== n))), n
        }, Em = (e, t, n) => e.getParents(t, n, e.getRoot()), _m = (e, t, n) => {
            const o = e.formatter.get(t);
            return C(o) && $(o, n)
        }, km = e => _e(e, "block"), Sm = e => _e(e, "selector"), Nm = e => _e(e, "inline"),
        Rm = e => Sm(e) && !1 !== e.expand && !Nm(e), Am = e => (e => {
            const t = [];
            let n = e;
            for (; n;) {
                if (er(n) && n.data !== Br || n.childNodes.length > 1) return [];
                qo(n) && t.push(n), n = n.firstChild
            }
            return t
        })(e).length > 0, Tm = e => Du(e.dom) && Am(e.dom), Om = Ku, Bm = Em, Pm = hm, Dm = gm, Lm = (e, t) => {
            let n = t;
            for (; n;) {
                if (qo(n) && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
                n = n.parentNode
            }
            return t
        }, Mm = (e, t, n, o) => {
            const r = t.data;
            if (e) {
                for (let e = n; e > 0; e--) if (o(r.charAt(e - 1))) return e
            } else for (let e = n; e < r.length; e++) if (o(r.charAt(e))) return e;
            return -1
        }, Im = (e, t, n) => Mm(e, t, n, (e => Yu(e) || Xu(e))), Fm = (e, t, n) => Mm(e, t, n, Qu),
        Um = (e, t, n, o, r, s) => {
            let a;
            const i = e.getParent(n, e.isBlock) || t, l = (t, n, o) => {
                const s = hi(e), l = r ? s.backwards : s.forwards;
                return I.from(l(t, n, ((e, t) => Om(e.parentNode) ? -1 : (a = e, o(r, e, t))), i))
            };
            return l(n, o, Im).bind((e => s ? l(e.container, e.offset + (r ? -1 : 0), Fm) : I.some(e))).orThunk((() => a ? I.some({
                container: a,
                offset: r ? 0 : a.length
            }) : I.none()))
        }, zm = (e, t, n, o, r) => {
            const s = o[r];
            er(o) && Ge(o.data) && s && (o = s);
            const a = Bm(e, o);
            for (let o = 0; o < a.length; o++) for (let r = 0; r < t.length; r++) {
                const s = t[r];
                if ((!C(s.collapsed) || s.collapsed === n.collapsed) && Sm(s) && e.is(a[o], s.selector)) return a[o]
            }
            return o
        }, jm = (e, t, n, o) => {
            var r;
            let s = n;
            const a = e.getRoot(), i = t[0];
            if (km(i) && (s = i.wrapper ? null : e.getParent(n, i.block, a)), !s) {
                const t = null !== (r = e.getParent(n, "LI,TD,TH,SUMMARY")) && void 0 !== r ? r : a;
                s = e.getParent(er(n) ? n.parentNode : n, (t => t !== a && Dm(e.schema, t)), t)
            }
            if (s && km(i) && i.wrapper && (s = Bm(e, s, "ul,ol").reverse()[0] || s), !s) for (s = n; s && s[o] && !e.isBlock(s[o]) && (s = s[o], !ym(s, "br"));) ;
            return s || n
        }, Hm = (e, t, n, o) => {
            const r = n.parentNode;
            return !C(n[o]) && (!(r !== t && !y(r) && !e.isBlock(r)) || Hm(e, t, r, o))
        }, $m = (e, t, n, o, r) => {
            let s = n;
            const a = r ? "previousSibling" : "nextSibling", i = e.getRoot();
            if (er(n) && !Pm(n) && (r ? o > 0 : o < n.data.length)) return n;
            for (; s;) {
                if (!t[0].block_expand && e.isBlock(s)) return s;
                for (let t = s[a]; t; t = t[a]) {
                    const n = er(t) && !Hm(e, i, t, a);
                    if (!Om(t) && (!ar(l = t) || !l.getAttribute("data-mce-bogus") || l.nextSibling) && !Pm(t, n)) return s
                }
                if (s === i || s.parentNode === i) {
                    n = s;
                    break
                }
                s = s.parentNode
            }
            var l;
            return n
        }, qm = e => Om(e.parentNode) || Om(e), Vm = (e, t, n, o = !1) => {
            let {startContainer: r, startOffset: s, endContainer: a, endOffset: i} = t;
            const l = n[0];
            return qo(r) && r.hasChildNodes() && (r = ki(r, s), er(r) && (s = 0)), qo(a) && a.hasChildNodes() && (a = ki(a, t.collapsed ? i : i - 1), er(a) && (i = a.data.length)), r = Lm(e, r), a = Lm(e, a), qm(r) && (r = Om(r) ? r : r.parentNode, r = t.collapsed ? r.previousSibling || r : r.nextSibling || r, er(r) && (s = t.collapsed ? r.length : 0)), qm(a) && (a = Om(a) ? a : a.parentNode, a = t.collapsed ? a.nextSibling || a : a.previousSibling || a, er(a) && (i = t.collapsed ? 0 : a.length)), t.collapsed && (Um(e, e.getRoot(), r, s, !0, o).each((({container: e, offset: t}) => {
                r = e, s = t
            })), Um(e, e.getRoot(), a, i, !1, o).each((({container: e, offset: t}) => {
                a = e, i = t
            }))), (Nm(l) || l.block_expand) && (Nm(l) && er(r) && 0 !== s || (r = $m(e, n, r, s, !0)), Nm(l) && er(a) && i !== a.data.length || (a = $m(e, n, a, i, !1))), Rm(l) && (r = zm(e, n, t, r, "previousSibling"), a = zm(e, n, t, a, "nextSibling")), (km(l) || Sm(l)) && (r = jm(e, n, r, "previousSibling"), a = jm(e, n, a, "nextSibling"), km(l) && (e.isBlock(r) || (r = $m(e, n, r, s, !0)), e.isBlock(a) || (a = $m(e, n, a, i, !1)))), qo(r) && r.parentNode && (s = e.nodeIndex(r), r = r.parentNode), qo(a) && a.parentNode && (i = e.nodeIndex(a) + 1, a = a.parentNode), {
                startContainer: r,
                startOffset: s,
                endContainer: a,
                endOffset: i
            }
        }, Wm = (e, t, n) => {
            var o;
            const r = t.startOffset, s = ki(t.startContainer, r), a = t.endOffset, i = ki(t.endContainer, a - 1), l = e => {
                const t = e[0];
                er(t) && t === s && r >= t.data.length && e.splice(0, 1);
                const n = e[e.length - 1];
                return 0 === a && e.length > 0 && n === i && er(n) && e.splice(e.length - 1, 1), e
            }, d = (e, t, n) => {
                const o = [];
                for (; e && e !== n; e = e[t]) o.push(e);
                return o
            }, c = (t, n) => e.getParent(t, (e => e.parentNode === n), n), u = (e, t, o) => {
                const r = o ? "nextSibling" : "previousSibling";
                for (let s = e, a = s.parentNode; s && s !== t; s = a) {
                    a = s.parentNode;
                    const t = d(s === e ? s : s[r], r);
                    t.length && (o || t.reverse(), n(l(t)))
                }
            };
            if (s === i) return n(l([s]));
            const m = null !== (o = e.findCommonAncestor(s, i)) && void 0 !== o ? o : e.getRoot();
            if (e.isChildOf(s, i)) return u(s, m, !0);
            if (e.isChildOf(i, s)) return u(i, m);
            const f = c(s, m) || s, g = c(i, m) || i;
            u(s, f, !0);
            const p = d(f === s ? f : f.nextSibling, "nextSibling", g === i ? g.nextSibling : g);
            p.length && n(l(p)), u(i, g)
        },
        Km = ['pre[class*=language-][contenteditable="false"]', "figure.image", "div[data-ephox-embed-iri]", "div.tiny-pageembed", "div.mce-toc", "div[data-mce-toc]"],
        Ym = (e, t, n, o, r, s) => {
            const {uid: a = t, ...i} = n;
            un(e, Za()), Jt(e, `${ti()}`, a), Jt(e, `${ei()}`, o);
            const {attributes: l = {}, classes: d = []} = r(a, i);
            if (Zt(e, l), ((e, t) => {
                V(t, (t => {
                    un(e, t)
                }))
            })(e, d), s) {
                d.length > 0 && Jt(e, `${oi()}`, d.join(","));
                const t = me(l);
                t.length > 0 && Jt(e, `${ri()}`, t.join(","))
            }
        }, Gm = (e, t, n, o, r) => {
            const s = bn("span", e);
            return Ym(s, t, n, o, r, !1), s
        }, Xm = (e, t, n, o, r, s) => {
            const a = [], i = Gm(e.getDoc(), n, s, o, r), l = Xa(), d = () => {
                l.clear()
            }, c = e => {
                V(e, u)
            }, u = t => {
                switch (((e, t, n, o) => An(t).fold((() => "skipping"), (r => "br" === o || (e => Kt(e) && Cr(e) === Br)(t) ? "valid" : (e => Wt(e) && gn(e, Za()))(t) ? "existing" : Du(t.dom) ? "caret" : $(Km, (e => xn(t, e))) ? "valid-block" : pm(e, n, o) && pm(e, Ht(r), n) ? "valid" : "invalid-child")))(e, t, "span", Ht(t))) {
                    case"invalid-child": {
                        d();
                        const e = Mn(t);
                        c(e), d();
                        break
                    }
                    case"valid-block":
                        d(), Ym(t, n, s, o, r, !0);
                        break;
                    case"valid": {
                        const e = l.get().getOrThunk((() => {
                            const e = fi(i);
                            return a.push(e), l.set(e), e
                        }));
                        yo(t, e);
                        break
                    }
                }
            };
            return Wm(e.dom, t, (e => {
                d(), (e => {
                    const t = q(e, yn);
                    c(t)
                })(e)
            })), a
        }, Qm = e => {
            const t = (() => {
                const e = {};
                return {
                    register: (t, n) => {
                        e[t] = {name: t, settings: n}
                    }, lookup: t => xe(e, t).map((e => e.settings)), getNames: () => me(e)
                }
            })();
            ((e, t) => {
                const n = ei(), o = e => I.from(e.attr(n)).bind(t.lookup), r = e => {
                    var t, n;
                    e.attr(ti(), null), e.attr(ei(), null), e.attr(ni(), null);
                    const o = I.from(e.attr(ri())).map((e => e.split(","))).getOr([]),
                        r = I.from(e.attr(oi())).map((e => e.split(","))).getOr([]);
                    V(o, (t => e.attr(t, null)));
                    const s = null !== (n = null === (t = e.attr("class")) || void 0 === t ? void 0 : t.split(" ")) && void 0 !== n ? n : [],
                        a = re(s, [Za()].concat(r));
                    e.attr("class", a.length > 0 ? a.join(" ") : null), e.attr(oi(), null), e.attr(ri(), null)
                };
                e.serializer.addTempAttr(ni()), e.serializer.addAttributeFilter(n, (e => {
                    for (const t of e) o(t).each((e => {
                        !1 === e.persistent && ("span" === t.name ? t.unwrap() : r(t))
                    }))
                }))
            })(e, t);
            const n = ((e, t) => {
                const n = $a({}), o = () => ({listeners: [], previous: Xa()}), r = (e, t) => {
                    s(e, (e => (t(e), e)))
                }, s = (e, t) => {
                    const r = n.get(), s = t(xe(r, e).getOrThunk(o));
                    r[e] = s, n.set(r)
                }, a = (t, n) => {
                    V(li(e, t), (e => {
                        n ? Jt(e, ni(), "true") : on(e, ni())
                    }))
                }, i = Ja((() => {
                    const n = ae(t.getNames());
                    V(n, (t => {
                        s(t, (n => {
                            const o = n.previous.get();
                            return ai(e, I.some(t)).fold((() => {
                                o.each((e => {
                                    (e => {
                                        r(e, (t => {
                                            V(t.listeners, (t => t(!1, e)))
                                        }))
                                    })(t), n.previous.clear(), a(e, !1)
                                }))
                            }), (({uid: e, name: t, elements: s}) => {
                                Dt(o, e) || (o.each((e => a(e, !1))), ((e, t, n) => {
                                    r(e, (o => {
                                        V(o.listeners, (o => o(!0, e, {uid: t, nodes: q(n, (e => e.dom))})))
                                    }))
                                })(t, e, s), n.previous.set(e), a(e, !0))
                            })), {previous: n.previous, listeners: n.listeners}
                        }))
                    }))
                }), 30);
                return e.on("remove", (() => {
                    i.cancel()
                })), e.on("NodeChange", (() => {
                    i.throttle()
                })), {
                    addListener: (e, t) => {
                        s(e, (e => ({previous: e.previous, listeners: e.listeners.concat([t])})))
                    }
                }
            })(e, t), o = Xt("span"), r = e => {
                V(e, (e => {
                    o(e) ? Eo(e) : (e => {
                        fn(e, Za()), on(e, `${ti()}`), on(e, `${ei()}`), on(e, `${ni()}`);
                        const t = tn(e, `${ri()}`).map((e => e.split(","))).getOr([]),
                            n = tn(e, `${oi()}`).map((e => e.split(","))).getOr([]);
                        var o;
                        V(t, (t => on(e, t))), o = e, V(n, (e => {
                            fn(o, e)
                        })), on(e, `${oi()}`), on(e, `${ri()}`)
                    })(e)
                }))
            };
            return {
                register: (e, n) => {
                    t.register(e, n)
                }, annotate: (n, o) => {
                    t.lookup(n).each((t => {
                        ((e, t, n, o) => {
                            e.undoManager.transact((() => {
                                const r = e.selection, s = r.getRng(), a = em(e).length > 0, i = ui("mce-annotation");
                                if (s.collapsed && !a && ((e, t) => {
                                    const n = Vm(e.dom, t, [{inline: "span"}]);
                                    t.setStart(n.startContainer, n.startOffset), t.setEnd(n.endContainer, n.endOffset), e.selection.setRng(t)
                                })(e, s), r.getRng().collapsed && !a) {
                                    const s = Gm(e.getDoc(), i, o, t, n.decorate);
                                    So(s, br), r.getRng().insertNode(s.dom), r.select(s.dom)
                                } else lm(r, !1, (() => {
                                    im(e, (r => {
                                        Xm(e, r, i, t, n.decorate, o)
                                    }))
                                }))
                            }))
                        })(e, n, t, o)
                    }))
                }, annotationChanged: (e, t) => {
                    n.addListener(e, t)
                }, remove: t => {
                    ai(e, I.some(t)).each((({elements: t}) => {
                        const n = e.selection.getBookmark();
                        r(t), e.selection.moveToBookmark(n)
                    }))
                }, removeAll: t => {
                    const n = e.selection.getBookmark();
                    ge(di(e, t), ((e, t) => {
                        r(e)
                    })), e.selection.moveToBookmark(n)
                }, getAll: t => {
                    const n = di(e, t);
                    return pe(n, (e => q(e, (e => e.dom))))
                }
            }
        }, Jm = e => ({getBookmark: T(Vu, e), moveToBookmark: T(Wu, e)});
    Jm.isBookmarkNode = Ku;
    const Zm = (e, t, n) => !n.collapsed && $(n.getClientRects(), (n => ((e, t, n) => t >= e.left && t <= e.right && n >= e.top && n <= e.bottom)(n, e, t))),
        ef = (e, t, n) => {
            e.dispatch(t, n)
        }, tf = (e, t, n, o) => {
            e.dispatch("FormatApply", {format: t, node: n, vars: o})
        }, nf = (e, t, n, o) => {
            e.dispatch("FormatRemove", {format: t, node: n, vars: o})
        }, of = (e, t) => e.dispatch("SetContent", t), rf = (e, t) => e.dispatch("GetContent", t),
        sf = (e, t) => e.dispatch("PastePlainTextToggle", {state: t}), af = {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            ESC: 27,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            modifierPressed: e => e.shiftKey || e.ctrlKey || e.altKey || af.metaKeyPressed(e),
            metaKeyPressed: e => At.os.isMacOS() || At.os.isiOS() ? e.metaKey : e.ctrlKey && !e.altKey
        }, lf = "data-mce-selected", df = Math.abs, cf = Math.round,
        uf = {nw: [0, 0, -1, -1], ne: [1, 0, 1, -1], se: [1, 1, 1, 1], sw: [0, 1, -1, 1]}, mf = (e, t) => {
            const n = t.dom, o = t.getDoc(), r = document, s = t.getBody();
            let a, i, l, d, c, u, m, f, g, p, h, b, v, y, w;
            const x = e => C(e) && (ir(e) || n.is(e, "figure.image")),
                E = e => mr(e) || n.hasClass(e, "mce-preview-object"), _ = e => {
                    const n = e.target;
                    ((e, t) => {
                        if ((e => "longpress" === e.type || 0 === e.type.indexOf("touch"))(e)) {
                            const n = e.touches[0];
                            return x(e.target) && !Zm(n.clientX, n.clientY, t)
                        }
                        return x(e.target) && !Zm(e.clientX, e.clientY, t)
                    })(e, t.selection.getRng()) && !e.isDefaultPrevented() && t.selection.select(n)
                },
                k = e => n.hasClass(e, "mce-preview-object") && C(e.firstElementChild) ? [e, e.firstElementChild] : n.is(e, "figure.image") ? [e.querySelector("img")] : [e],
                S = e => {
                    const o = cd(t);
                    return !!o && "false" !== e.getAttribute("data-mce-resize") && e !== t.getBody() && (n.hasClass(e, "mce-preview-object") && C(e.firstElementChild) ? xn(yn(e.firstElementChild), o) : xn(yn(e), o))
                }, N = (e, o, r) => {
                    if (C(r)) {
                        const s = k(e);
                        V(s, (e => {
                            e.style[o] || !t.schema.isValid(e.nodeName.toLowerCase(), o) ? n.setStyle(e, o, r) : n.setAttrib(e, o, "" + r)
                        }))
                    }
                }, R = (e, t, n) => {
                    N(e, "width", t), N(e, "height", n)
                }, A = e => {
                    let o, r, c, C, _;
                    o = e.screenX - u, r = e.screenY - m, b = o * d[2] + f, v = r * d[3] + g, b = b < 5 ? 5 : b, v = v < 5 ? 5 : v, c = (x(a) || E(a)) && !1 !== ud(t) ? !af.modifierPressed(e) : af.modifierPressed(e), c && (df(o) > df(r) ? (v = cf(b * p), b = cf(v / p)) : (b = cf(v / p), v = cf(b * p))), R(i, b, v), C = d.startPos.x + o, _ = d.startPos.y + r, C = C > 0 ? C : 0, _ = _ > 0 ? _ : 0, n.setStyles(l, {
                        left: C,
                        top: _,
                        display: "block"
                    }), l.innerHTML = b + " &times; " + v, d[2] < 0 && i.clientWidth <= b && n.setStyle(i, "left", void 0 + (f - b)), d[3] < 0 && i.clientHeight <= v && n.setStyle(i, "top", void 0 + (g - v)), o = s.scrollWidth - y, r = s.scrollHeight - w, o + r !== 0 && n.setStyles(l, {
                        left: C - o,
                        top: _ - r
                    }), h || (((e, t, n, o, r) => {
                        e.dispatch("ObjectResizeStart", {target: t, width: n, height: o, origin: r})
                    })(t, a, f, g, "corner-" + d.name), h = !0)
                }, T = () => {
                    const e = h;
                    h = !1, e && (N(a, "width", b), N(a, "height", v)), n.unbind(o, "mousemove", A), n.unbind(o, "mouseup", T), r !== o && (n.unbind(r, "mousemove", A), n.unbind(r, "mouseup", T)), n.remove(i), n.remove(l), n.remove(c), O(a), e && (((e, t, n, o, r) => {
                        e.dispatch("ObjectResized", {target: t, width: n, height: o, origin: r})
                    })(t, a, b, v, "corner-" + d.name), n.setAttrib(a, "style", n.getAttrib(a, "style"))), t.nodeChanged()
                }, O = e => {
                    M();
                    const h = n.getPos(e, s), C = h.x, x = h.y, _ = e.getBoundingClientRect(), N = _.width || _.right - _.left,
                        O = _.height || _.bottom - _.top;
                    a !== e && (P(), a = e, b = v = 0);
                    const B = t.dispatch("ObjectSelected", {target: e});
                    S(e) && !B.isDefaultPrevented() ? ge(uf, ((e, t) => {
                        let h = n.get("mceResizeHandle" + t);
                        h && n.remove(h), h = n.add(s, "div", {
                            id: "mceResizeHandle" + t,
                            "data-mce-bogus": "all",
                            class: "mce-resizehandle",
                            unselectable: !0,
                            style: "cursor:" + t + "-resize; margin:0; padding:0"
                        }), n.bind(h, "mousedown", (h => {
                            h.stopImmediatePropagation(), h.preventDefault(), (h => {
                                const b = k(a)[0];
                                var v;
                                u = h.screenX, m = h.screenY, f = b.clientWidth, g = b.clientHeight, p = g / f, d = e, d.name = t, d.startPos = {
                                    x: N * e[0] + C,
                                    y: O * e[1] + x
                                }, y = s.scrollWidth, w = s.scrollHeight, c = n.add(s, "div", {
                                    class: "mce-resize-backdrop",
                                    "data-mce-bogus": "all"
                                }), n.setStyles(c, {
                                    position: "fixed",
                                    left: "0",
                                    top: "0",
                                    width: "100%",
                                    height: "100%"
                                }), i = E(v = a) ? n.create("img", {src: At.transparentSrc}) : v.cloneNode(!0), n.addClass(i, "mce-clonedresizable"), n.setAttrib(i, "data-mce-bogus", "all"), i.contentEditable = "false", n.setStyles(i, {
                                    left: C,
                                    top: x,
                                    margin: 0
                                }), R(i, N, O), i.removeAttribute(lf), s.appendChild(i), n.bind(o, "mousemove", A), n.bind(o, "mouseup", T), r !== o && (n.bind(r, "mousemove", A), n.bind(r, "mouseup", T)), l = n.add(s, "div", {
                                    class: "mce-resize-helper",
                                    "data-mce-bogus": "all"
                                }, f + " &times; " + g)
                            })(h)
                        })), e.elm = h, n.setStyles(h, {
                            left: N * e[0] + C - h.offsetWidth / 2,
                            top: O * e[1] + x - h.offsetHeight / 2
                        })
                    })) : P(!1)
                }, B = Qa(O, 0), P = (e = !0) => {
                    B.cancel(), M(), a && e && a.removeAttribute(lf), ge(uf, ((e, t) => {
                        const o = n.get("mceResizeHandle" + t);
                        o && (n.unbind(o), n.remove(o))
                    }))
                }, D = (e, t) => n.isChildOf(e, t), L = o => {
                    if (h || t.removed || t.composing) return;
                    const r = "mousedown" === o.type ? o.target : e.getNode(),
                        a = no(yn(r), "table,img,figure.image,hr,video,span.mce-preview-object,details").map((e => e.dom)).filter((e => n.isEditable(e.parentElement) || "IMG" === e.nodeName && n.isEditable(e))).getOrUndefined(),
                        i = C(a) ? n.getAttrib(a, lf, "1") : "1";
                    if (V(n.select(`img[${lf}],hr[${lf}]`), (e => {
                        e.removeAttribute(lf)
                    })), C(a) && D(a, s) && t.hasFocus()) {
                        I();
                        const t = e.getStart(!0);
                        if (D(t, a) && D(e.getEnd(!0), a)) return n.setAttrib(a, lf, i), void B.throttle(a)
                    }
                    P()
                }, M = () => {
                    ge(uf, (e => {
                        e.elm && (n.unbind(e.elm), delete e.elm)
                    }))
                }, I = () => {
                    try {
                        t.getDoc().execCommand("enableObjectResizing", !1, "false")
                    } catch (e) {
                    }
                };
            return t.on("init", (() => {
                I(), t.on("NodeChange ResizeEditor ResizeWindow ResizeContent drop", L), t.on("keyup compositionend", (e => {
                    a && "TABLE" === a.nodeName && L(e)
                })), t.on("hide blur", P), t.on("contextmenu longpress", _, !0)
            })), t.on("remove", M), {
                isResizable: S,
                showResizeRect: O,
                hideResizeRect: P,
                updateResizeRect: L,
                destroy: () => {
                    B.cancel(), a = i = c = null
                }
            }
        }, ff = (e, t, n) => {
            const o = e.document.createRange();
            var r;
            return r = o, t.fold((e => {
                r.setStartBefore(e.dom)
            }), ((e, t) => {
                r.setStart(e.dom, t)
            }), (e => {
                r.setStartAfter(e.dom)
            })), ((e, t) => {
                t.fold((t => {
                    e.setEndBefore(t.dom)
                }), ((t, n) => {
                    e.setEnd(t.dom, n)
                }), (t => {
                    e.setEndAfter(t.dom)
                }))
            })(o, n), o
        }, gf = (e, t, n, o, r) => {
            const s = e.document.createRange();
            return s.setStart(t.dom, n), s.setEnd(o.dom, r), s
        }, pf = hl([{ltr: ["start", "soffset", "finish", "foffset"]}, {rtl: ["start", "soffset", "finish", "foffset"]}]),
        hf = (e, t, n) => t(yn(n.startContainer), n.startOffset, yn(n.endContainer), n.endOffset);
    pf.ltr, pf.rtl;
    const bf = (e, t, n, o) => ({start: e, soffset: t, finish: n, foffset: o}),
        vf = document.caretPositionFromPoint ? (e, t, n) => {
            var o, r;
            return I.from(null === (r = (o = e.dom).caretPositionFromPoint) || void 0 === r ? void 0 : r.call(o, t, n)).bind((t => {
                if (null === t.offsetNode) return I.none();
                const n = e.dom.createRange();
                return n.setStart(t.offsetNode, t.offset), n.collapse(), I.some(n)
            }))
        } : document.caretRangeFromPoint ? (e, t, n) => {
            var o, r;
            return I.from(null === (r = (o = e.dom).caretRangeFromPoint) || void 0 === r ? void 0 : r.call(o, t, n))
        } : I.none, yf = hl([{before: ["element"]}, {on: ["element", "offset"]}, {after: ["element"]}]), Cf = {
            before: yf.before,
            on: yf.on,
            after: yf.after,
            cata: (e, t, n, o) => e.fold(t, n, o),
            getStart: e => e.fold(R, R, R)
        },
        wf = hl([{domRange: ["rng"]}, {relative: ["startSitu", "finishSitu"]}, {exact: ["start", "soffset", "finish", "foffset"]}]),
        xf = {
            domRange: wf.domRange,
            relative: wf.relative,
            exact: wf.exact,
            exactFromRange: e => wf.exact(e.start, e.soffset, e.finish, e.foffset),
            getWin: e => {
                const t = (e => e.match({
                    domRange: e => yn(e.startContainer),
                    relative: (e, t) => Cf.getStart(e),
                    exact: (e, t, n, o) => e
                }))(e);
                return Rn(t)
            },
            range: bf
        }, Ef = (e, t) => {
            const n = Ht(e);
            return "input" === n ? Cf.after(e) : H(["br", "img"], n) ? 0 === t ? Cf.before(e) : Cf.after(e) : Cf.on(e, t)
        }, _f = (e, t) => {
            const n = e.fold(Cf.before, Ef, Cf.after), o = t.fold(Cf.before, Ef, Cf.after);
            return xf.relative(n, o)
        }, kf = (e, t, n, o) => {
            const r = Ef(e, t), s = Ef(n, o);
            return xf.relative(r, s)
        }, Sf = (e, t) => {
            const n = (t || document).createDocumentFragment();
            return V(e, (e => {
                n.appendChild(e.dom)
            })), yn(n)
        }, Nf = e => {
            const t = xf.getWin(e).dom, n = (e, n, o, r) => gf(t, e, n, o, r), o = (e => e.match({
                domRange: e => {
                    const t = yn(e.startContainer), n = yn(e.endContainer);
                    return kf(t, e.startOffset, n, e.endOffset)
                }, relative: _f, exact: kf
            }))(e);
            return ((e, t) => {
                const n = ((e, t) => t.match({
                    domRange: e => ({ltr: N(e), rtl: I.none}),
                    relative: (t, n) => ({ltr: De((() => ff(e, t, n))), rtl: De((() => I.some(ff(e, n, t))))}),
                    exact: (t, n, o, r) => ({
                        ltr: De((() => gf(e, t, n, o, r))),
                        rtl: De((() => I.some(gf(e, o, r, t, n))))
                    })
                }))(e, t);
                return ((e, t) => {
                    const n = t.ltr();
                    return n.collapsed ? t.rtl().filter((e => !1 === e.collapsed)).map((e => pf.rtl(yn(e.endContainer), e.endOffset, yn(e.startContainer), e.startOffset))).getOrThunk((() => hf(0, pf.ltr, n))) : hf(0, pf.ltr, n)
                })(0, n)
            })(t, o).match({ltr: n, rtl: n})
        }, Rf = (e, t, n) => ((e, t, n) => ((e, t, n) => {
            const o = yn(e.document);
            return vf(o, t, n).map((e => bf(yn(e.startContainer), e.startOffset, yn(e.endContainer), e.endOffset)))
        })(e, t, n))(Rn(yn(n)).dom, e, t).map((e => {
            const t = n.createRange();
            return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), t
        })).getOrUndefined(),
        Af = (e, t) => C(e) && C(t) && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset,
        Tf = (e, t, n) => null !== ((e, t, n) => {
            let o = e;
            for (; o && o !== t;) {
                if (n(o)) return o;
                o = o.parentNode
            }
            return null
        })(e, t, n), Of = (e, t, n) => Tf(e, t, (e => e.nodeName === n)), Bf = (e, t) => Ur(e) && !Tf(e, t, Du),
        Pf = (e, t, n) => {
            const o = t.parentNode;
            if (o) {
                const r = new jo(t, e.getParent(o, e.isBlock) || e.getRoot());
                let s;
                for (; s = r[n ? "prev" : "next"]();) if (ar(s)) return !0
            }
            return !1
        }, Df = (e, t, n, o, r) => {
            const s = e.getRoot(), a = e.schema.getNonEmptyElements(), i = r.parentNode;
            let l, d;
            if (!i) return I.none();
            const c = e.getParent(i, e.isBlock) || s;
            if (o && ar(r) && t && e.isEmpty(c)) return I.some(Vi(i, e.nodeIndex(r)));
            const u = new jo(r, c);
            for (; d = u[o ? "prev" : "next"]();) {
                if ("false" === e.getContentEditableParent(d) || Bf(d, s)) return I.none();
                if (er(d) && d.data.length > 0) return Of(d, s, "A") ? I.none() : I.some(Vi(d, o ? d.data.length : 0));
                if (e.isBlock(d) || a[d.nodeName.toLowerCase()]) return I.none();
                l = d
            }
            return or(l) ? I.none() : n && l ? I.some(Vi(l, 0)) : I.none()
        }, Lf = (e, t, n, o) => {
            const r = e.getRoot();
            let s, a = !1, i = n ? o.startContainer : o.endContainer, l = n ? o.startOffset : o.endOffset;
            const d = qo(i) && l === i.childNodes.length, c = e.schema.getNonEmptyElements();
            let u = n;
            if (Ur(i)) return I.none();
            if (qo(i) && l > i.childNodes.length - 1 && (u = !1), rr(i) && (i = r, l = 0), i === r) {
                if (u && (s = i.childNodes[l > 0 ? l - 1 : 0], s)) {
                    if (Ur(s)) return I.none();
                    if (c[s.nodeName] || Qo(s)) return I.none()
                }
                if (i.hasChildNodes()) {
                    if (l = Math.min(!u && l > 0 ? l - 1 : l, i.childNodes.length - 1), i = i.childNodes[l], l = er(i) && d ? i.data.length : 0, !t && i === r.lastChild && Qo(i)) return I.none();
                    if (((e, t) => {
                        let n = t;
                        for (; n && n !== e;) {
                            if (dr(n)) return !0;
                            n = n.parentNode
                        }
                        return !1
                    })(r, i) || Ur(i)) return I.none();
                    if (gr(i)) return I.none();
                    if (i.hasChildNodes() && !Qo(i)) {
                        s = i;
                        const t = new jo(i, r);
                        do {
                            if (dr(s) || Ur(s)) {
                                a = !1;
                                break
                            }
                            if (er(s) && s.data.length > 0) {
                                l = u ? 0 : s.data.length, i = s, a = !0;
                                break
                            }
                            if (c[s.nodeName.toLowerCase()] && !ur(s)) {
                                l = e.nodeIndex(s), i = s.parentNode, u || l++, a = !0;
                                break
                            }
                        } while (s = u ? t.next() : t.prev())
                    }
                }
            }
            return t && (er(i) && 0 === l && Df(e, d, t, !0, i).each((e => {
                i = e.container(), l = e.offset(), a = !0
            })), qo(i) && (s = i.childNodes[l], s || (s = i.childNodes[l - 1]), !s || !ar(s) || ((e, t) => {
                var n;
                return "A" === (null === (n = e.previousSibling) || void 0 === n ? void 0 : n.nodeName)
            })(s) || Pf(e, s, !1) || Pf(e, s, !0) || Df(e, d, t, !0, s).each((e => {
                i = e.container(), l = e.offset(), a = !0
            })))), u && !t && er(i) && l === i.data.length && Df(e, d, t, !1, i).each((e => {
                i = e.container(), l = e.offset(), a = !0
            })), a && i ? I.some(Vi(i, l)) : I.none()
        }, Mf = (e, t) => {
            const n = t.collapsed, o = t.cloneRange(), r = Vi.fromRangeStart(t);
            return Lf(e, n, !0, o).each((e => {
                n && Vi.isAbove(r, e) || o.setStart(e.container(), e.offset())
            })), n || Lf(e, n, !1, o).each((e => {
                o.setEnd(e.container(), e.offset())
            })), n && o.collapse(!0), Af(t, o) ? I.none() : I.some(o)
        }, If = (e, t) => e.splitText(t), Ff = e => {
            let t = e.startContainer, n = e.startOffset, o = e.endContainer, r = e.endOffset;
            if (t === o && er(t)) {
                if (n > 0 && n < t.data.length) if (o = If(t, n), t = o.previousSibling, r > n) {
                    r -= n;
                    const e = If(o, r).previousSibling;
                    t = o = e, r = e.data.length, n = 0
                } else r = 0
            } else if (er(t) && n > 0 && n < t.data.length && (t = If(t, n), n = 0), er(o) && r > 0 && r < o.data.length) {
                const e = If(o, r).previousSibling;
                o = e, r = e.data.length
            }
            return {startContainer: t, startOffset: n, endContainer: o, endOffset: r}
        }, Uf = e => ({
            walk: (t, n) => Wm(e, t, n),
            split: Ff,
            expand: (t, n = {type: "word"}) => {
                if ("word" === n.type) {
                    const n = Vm(e, t, [{inline: "span"}]), o = e.createRng();
                    return o.setStart(n.startContainer, n.startOffset), o.setEnd(n.endContainer, n.endOffset), o
                }
                return t
            },
            normalize: t => Mf(e, t).fold(L, (e => (t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0)))
        });
    Uf.compareRanges = Af, Uf.getCaretRangeFromPoint = Rf, Uf.getSelectedNode = _i, Uf.getNode = ki;
    const zf = ((e, t) => {
        const n = t => {
            const n = (e => {
                const t = e.dom;
                return Gn(e) ? t.getBoundingClientRect().height : t.offsetHeight
            })(t);
            if (n <= 0 || null === n) {
                const n = co(t, e);
                return parseFloat(n) || 0
            }
            return n
        }, o = (e, t) => X(t, ((t, n) => {
            const o = co(e, n), r = void 0 === o ? 0 : parseInt(o, 10);
            return isNaN(r) ? t : t + r
        }), 0);
        return {
            set: (t, n) => {
                if (!x(n) && !n.match(/^[0-9]+$/)) throw new Error(e + ".set accepts only positive integer values. Value was " + n);
                const o = t.dom;
                so(o) && (o.style[e] = n + "px")
            }, get: n, getOuter: n, aggregate: o, max: (e, t, n) => {
                const r = o(e, n);
                return t > r ? t - r : 0
            }
        }
    })("height"), jf = () => yn(document), Hf = (e, t) => e.view(t).fold(N([]), (t => {
        const n = e.owner(t), o = Hf(e, n);
        return [t].concat(o)
    }));
    var $f = Object.freeze({
        __proto__: null, view: e => {
            var t;
            return (e.dom === document ? I.none() : I.from(null === (t = e.dom.defaultView) || void 0 === t ? void 0 : t.frameElement)).map(yn)
        }, owner: e => Nn(e)
    });
    const qf = e => "textarea" === Ht(e), Vf = (e, t) => {
            const n = (e => {
                const t = e.dom.ownerDocument, n = t.body, o = t.defaultView, r = t.documentElement;
                if (n === e.dom) return To(n.offsetLeft, n.offsetTop);
                const s = Oo(null == o ? void 0 : o.pageYOffset, r.scrollTop),
                    a = Oo(null == o ? void 0 : o.pageXOffset, r.scrollLeft), i = Oo(r.clientTop, n.clientTop),
                    l = Oo(r.clientLeft, n.clientLeft);
                return Bo(e).translate(a - l, s - i)
            })(e), o = (e => zf.get(e))(e);
            return {element: e, bottom: n.top + o, height: o, pos: n, cleanup: t}
        }, Wf = (e, t, n, o) => {
            Xf(e, ((r, s) => Yf(e, t, n, o)), n)
        }, Kf = (e, t, n, o, r) => {
            const s = {elm: o.element.dom, alignToTop: r};
            ((e, t) => e.dispatch("ScrollIntoView", t).isDefaultPrevented())(e, s) || (n(e, t, Po(t).top, o, r), ((e, t) => {
                e.dispatch("AfterScrollIntoView", t)
            })(e, s))
        }, Yf = (e, t, n, o) => {
            const r = yn(e.getBody()), s = yn(e.getDoc());
            r.dom.offsetWidth;
            const a = ((e, t) => {
                const n = ((e, t) => {
                    const n = Mn(e);
                    if (0 === n.length || qf(e)) return {element: e, offset: t};
                    if (t < n.length && !qf(n[t])) return {element: n[t], offset: 0};
                    {
                        const o = n[n.length - 1];
                        return qf(o) ? {element: e, offset: t} : "img" === Ht(o) ? {
                            element: o,
                            offset: 1
                        } : Kt(o) ? {element: o, offset: Cr(o).length} : {element: o, offset: Mn(o).length}
                    }
                })(e, t), o = hn('<span data-mce-bogus="all" style="display: inline-block;">\ufeff</span>');
                return po(n.element, o), Vf(o, (() => xo(o)))
            })(yn(n.startContainer), n.startOffset);
            Kf(e, s, t, a, o), a.cleanup()
        }, Gf = (e, t, n, o) => {
            const r = yn(e.getDoc());
            Kf(e, r, n, (e => Vf(yn(e), _))(t), o)
        }, Xf = (e, t, n) => {
            const o = n.startContainer, r = n.startOffset, s = n.endContainer, a = n.endOffset;
            t(yn(o), yn(s));
            const i = e.dom.createRng();
            i.setStart(o, r), i.setEnd(s, a), e.selection.setRng(n)
        }, Qf = (e, t, n, o, r) => {
            const s = t.pos;
            if (o) Do(s.left, s.top, r); else {
                const o = s.top - n + t.height;
                Do(-e.getBody().getBoundingClientRect().left, o, r)
            }
        }, Jf = (e, t, n, o, r, s) => {
            const a = o + n, i = r.pos.top, l = r.bottom, d = l - i >= o;
            i < n ? Qf(e, r, o, !1 !== s, t) : i > a ? Qf(e, r, o, d ? !1 !== s : !0 === s, t) : l > a && !d && Qf(e, r, o, !0 === s, t)
        }, Zf = (e, t, n, o, r) => {
            const s = Rn(t).dom.innerHeight;
            Jf(e, t, n, s, o, r)
        }, eg = (e, t, n, o, r) => {
            const s = Rn(t).dom.innerHeight;
            Jf(e, t, n, s, o, r);
            const a = (e => {
                const t = jf(), n = Po(t), o = ((e, t) => {
                    const n = t.owner(e);
                    return Hf(t, n)
                })(e, $f), r = Bo(e), s = G(o, ((e, t) => {
                    const n = Bo(t);
                    return {left: e.left + n.left, top: e.top + n.top}
                }), {left: 0, top: 0});
                return To(s.left + r.left + n.left, s.top + r.top + n.top)
            })(o.element), i = Io(window);
            a.top < i.y ? Lo(o.element, !1 !== r) : a.top > i.bottom && Lo(o.element, !0 === r)
        }, tg = (e, t, n) => Wf(e, Zf, t, n), ng = (e, t, n) => Gf(e, t, Zf, n), og = (e, t, n) => Wf(e, eg, t, n),
        rg = (e, t, n) => Gf(e, t, eg, n), sg = (e, t, n) => {
            (e.inline ? tg : og)(e, t, n)
        }, ag = (e, t = !1) => e.dom.focus({preventScroll: t}), ig = e => {
            const t = qn(e).dom;
            return e.dom === t.activeElement
        }, lg = (e = jf()) => I.from(e.dom.activeElement).map(yn), dg = (e, t) => {
            const n = Kt(t) ? Cr(t).length : Mn(t).length + 1;
            return e > n ? n : e < 0 ? 0 : e
        }, cg = e => xf.range(e.start, dg(e.soffset, e.start), e.finish, dg(e.foffset, e.finish)),
        ug = (e, t) => !$o(t.dom) && (kn(e, t) || _n(e, t)), mg = e => t => ug(e, t.start) && ug(e, t.finish),
        fg = e => xf.range(yn(e.startContainer), e.startOffset, yn(e.endContainer), e.endOffset), gg = e => {
            const t = document.createRange();
            try {
                return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), I.some(t)
            } catch (e) {
                return I.none()
            }
        }, pg = e => {
            const t = (e => e.inline || At.browser.isFirefox())(e) ? (n = yn(e.getBody()), (e => {
                const t = e.getSelection();
                return (t && 0 !== t.rangeCount ? I.from(t.getRangeAt(0)) : I.none()).map(fg)
            })(Rn(n).dom).filter(mg(n))) : I.none();
            var n;
            e.bookmark = t.isSome() ? t : e.bookmark
        }, hg = e => (e.bookmark ? e.bookmark : I.none()).bind((t => {
            return n = yn(e.getBody()), o = t, I.from(o).filter(mg(n)).map(cg);
            var n, o
        })).bind(gg), bg = {
            isEditorUIElement: e => {
                const t = e.className.toString();
                return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-")
            }
        }, vg = {
            setEditorTimeout: (e, t, n) => ((e, t) => (x(t) || (t = 0), setTimeout(e, t)))((() => {
                e.removed || t()
            }), n), setEditorInterval: (e, t, n) => {
                const o = ((e, t) => (x(t) || (t = 0), setInterval(e, t)))((() => {
                    e.removed ? clearInterval(o) : t()
                }), n);
                return o
            }
        };
    let yg;
    const Cg = za.DOM, wg = e => {
            const t = e.classList;
            return void 0 !== t && (t.contains("tox-edit-area") || t.contains("tox-edit-area__iframe") || t.contains("mce-content-body"))
        }, xg = (e, t) => {
            const n = _d(e),
                o = Cg.getParent(t, (t => (e => qo(e) && bg.isEditorUIElement(e))(t) || !!n && e.dom.is(t, n)));
            return null !== o
        }, Eg = e => {
            try {
                const t = qn(yn(e.getElement()));
                return lg(t).fold((() => document.body), (e => e.dom))
            } catch (e) {
                return document.body
            }
        }, _g = (e, t) => {
            const n = t.editor;
            (e => {
                const t = Qa((() => {
                    pg(e)
                }), 0);
                e.on("init", (() => {
                    e.inline && ((e, t) => {
                        const n = () => {
                            t.throttle()
                        };
                        za.DOM.bind(document, "mouseup", n), e.on("remove", (() => {
                            za.DOM.unbind(document, "mouseup", n)
                        }))
                    })(e, t), ((e, t) => {
                        ((e, t) => {
                            e.on("mouseup touchend", (e => {
                                t.throttle()
                            }))
                        })(e, t), e.on("keyup NodeChange AfterSetSelectionRange", (t => {
                            (e => "nodechange" === e.type && e.selectionChange)(t) || pg(e)
                        }))
                    })(e, t)
                })), e.on("remove", (() => {
                    t.cancel()
                }))
            })(n);
            const o = (e, t) => {
                mc(e) && !0 !== e.inline && t(yn(e.getContainer()), "tox-edit-focus")
            };
            n.on("focusin", (() => {
                const t = e.focusedEditor;
                wg(Eg(n)) && o(n, un), t !== n && (t && t.dispatch("blur", {focusedEditor: n}), e.setActive(n), e.focusedEditor = n, n.dispatch("focus", {blurredEditor: t}), n.focus(!0))
            })), n.on("focusout", (() => {
                vg.setEditorTimeout(n, (() => {
                    const t = e.focusedEditor;
                    wg(Eg(n)) && t === n || o(n, fn), xg(n, Eg(n)) || t !== n || (n.dispatch("blur", {focusedEditor: null}), e.focusedEditor = null)
                }))
            })), yg || (yg = t => {
                const n = e.activeEditor;
                n && Kn(t).each((t => {
                    const o = t;
                    o.ownerDocument === document && (o === document.body || xg(n, o) || e.focusedEditor !== n || (n.dispatch("blur", {focusedEditor: null}), e.focusedEditor = null))
                }))
            }, Cg.bind(document, "focusin", yg))
        }, kg = (e, t) => {
            e.focusedEditor === t.editor && (e.focusedEditor = null), !e.activeEditor && yg && (Cg.unbind(document, "focusin", yg), yg = null)
        }, Sg = (e, t) => {
            ((e, t) => (e => e.collapsed ? I.from(ki(e.startContainer, e.startOffset)).map(yn) : I.none())(t).bind((t => Nr(t) ? I.some(t) : kn(e, t) ? I.none() : I.some(e))))(yn(e.getBody()), t).bind((e => Ou(e.dom))).fold((() => {
                e.selection.normalize()
            }), (t => e.selection.setRng(t.toRange())))
        }, Ng = e => {
            if (e.setActive) try {
                e.setActive()
            } catch (t) {
                e.focus()
            } else e.focus()
        }, Rg = e => e.inline ? (e => {
            const t = e.getBody();
            return t && (n = yn(t), ig(n) || (o = n, lg(qn(o)).filter((e => o.dom.contains(e.dom)))).isSome());
            var n, o
        })(e) : (e => C(e.iframeElement) && ig(yn(e.iframeElement)))(e), Ag = e => Rg(e) || (e => {
            const t = qn(yn(e.getElement()));
            return lg(t).filter((t => !wg(t.dom) && xg(e, t.dom))).isSome()
        })(e), Tg = e => e.editorManager.setActive(e),
        Og = (e, t) => t.collapsed ? e.isEditable(t.startContainer) : e.isEditable(t.startContainer) && e.isEditable(t.endContainer),
        Bg = (e, t, n, o, r) => {
            const s = n ? t.startContainer : t.endContainer, a = n ? t.startOffset : t.endOffset;
            return I.from(s).map(yn).map((e => o && t.collapsed ? e : In(e, r(e, a)).getOr(e))).bind((e => Wt(e) ? I.some(e) : An(e).filter(Wt))).map((e => e.dom)).getOr(e)
        }, Pg = (e, t, n = !1) => Bg(e, t, !0, n, ((e, t) => Math.min(zn(e), t))),
        Dg = (e, t, n = !1) => Bg(e, t, !1, n, ((e, t) => t > 0 ? t - 1 : t)), Lg = (e, t) => {
            const n = e;
            for (; e && er(e) && 0 === e.length;) e = t ? e.nextSibling : e.previousSibling;
            return e || n
        }, Mg = (e, t) => q(t, (t => {
            const n = e.dispatch("GetSelectionRange", {range: t});
            return n.range !== t ? n.range : t
        })), Ig = ["img", "br"], Fg = e => {
            const t = wr(e).filter((e => 0 !== e.trim().length || e.indexOf(br) > -1)).isSome();
            return t || H(Ig, Ht(e)) || (e => Vt(e) && "false" === en(e, "contenteditable"))(e)
        }, Ug = "[data-mce-autocompleter]", zg = (e, t) => {
            if (jg(yn(e.getBody())).isNone()) {
                const o = hn('<span data-mce-autocompleter="1" data-mce-bogus="1"></span>', e.getDoc());
                vo(o, yn(t.extractContents())), t.insertNode(o.dom), An(o).each((e => e.dom.normalize())), (n = o, ((e, t) => {
                    const n = e => {
                        const o = Mn(e);
                        for (let e = o.length - 1; e >= 0; e--) {
                            const r = o[e];
                            if (t(r)) return I.some(r);
                            const s = n(r);
                            if (s.isSome()) return s
                        }
                        return I.none()
                    };
                    return n(e)
                })(n, Fg)).map((t => {
                    e.selection.setCursorLocation(t.dom, (e => "img" === Ht(e) ? 1 : wr(e).fold((() => Mn(e).length), (e => e.length)))(t))
                }))
            }
            var n
        }, jg = e => to(e, Ug),
        Hg = {"#text": 3, "#comment": 8, "#cdata": 4, "#pi": 7, "#doctype": 10, "#document-fragment": 11},
        $g = (e, t, n) => {
            const o = n ? "lastChild" : "firstChild", r = n ? "prev" : "next";
            if (e[o]) return e[o];
            if (e !== t) {
                let n = e[r];
                if (n) return n;
                for (let o = e.parent; o && o !== t; o = o.parent) if (n = o[r], n) return n
            }
        }, qg = e => {
            var t;
            const n = null !== (t = e.value) && void 0 !== t ? t : "";
            if (!ss(n)) return !1;
            const o = e.parent;
            return !o || "span" === o.name && !o.attr("style") || !/^[ ]+$/.test(n)
        }, Vg = e => {
            const t = "a" === e.name && !e.attr("href") && e.attr("id");
            return e.attr("name") || e.attr("id") && !e.firstChild || e.attr("data-mce-bookmark") || t
        };

    class Wg {
        static create(e, t) {
            const n = new Wg(e, Hg[e] || 1);
            return t && ge(t, ((e, t) => {
                n.attr(t, e)
            })), n
        }

        constructor(e, t) {
            this.name = e, this.type = t, 1 === t && (this.attributes = [], this.attributes.map = {})
        }

        replace(e) {
            const t = this;
            return e.parent && e.remove(), t.insert(e, t), t.remove(), t
        }

        attr(e, t) {
            const n = this;
            if (!m(e)) return C(e) && ge(e, ((e, t) => {
                n.attr(t, e)
            })), n;
            const o = n.attributes;
            if (o) {
                if (void 0 !== t) {
                    if (null === t) {
                        if (e in o.map) {
                            delete o.map[e];
                            let t = o.length;
                            for (; t--;) if (o[t].name === e) return o.splice(t, 1), n
                        }
                        return n
                    }
                    if (e in o.map) {
                        let n = o.length;
                        for (; n--;) if (o[n].name === e) {
                            o[n].value = t;
                            break
                        }
                    } else o.push({name: e, value: t});
                    return o.map[e] = t, n
                }
                return o.map[e]
            }
        }

        clone() {
            const e = this, t = new Wg(e.name, e.type), n = e.attributes;
            if (n) {
                const e = [];
                e.map = {};
                for (let t = 0, o = n.length; t < o; t++) {
                    const o = n[t];
                    "id" !== o.name && (e[e.length] = {name: o.name, value: o.value}, e.map[o.name] = o.value)
                }
                t.attributes = e
            }
            return t.value = e.value, t
        }

        wrap(e) {
            const t = this;
            return t.parent && (t.parent.insert(e, t), e.append(t)), t
        }

        unwrap() {
            const e = this;
            for (let t = e.firstChild; t;) {
                const n = t.next;
                e.insert(t, e, !0), t = n
            }
            e.remove()
        }

        remove() {
            const e = this, t = e.parent, n = e.next, o = e.prev;
            return t && (t.firstChild === e ? (t.firstChild = n, n && (n.prev = null)) : o && (o.next = n), t.lastChild === e ? (t.lastChild = o, o && (o.next = null)) : n && (n.prev = o), e.parent = e.next = e.prev = null), e
        }

        append(e) {
            const t = this;
            e.parent && e.remove();
            const n = t.lastChild;
            return n ? (n.next = e, e.prev = n, t.lastChild = e) : t.lastChild = t.firstChild = e, e.parent = t, e
        }

        insert(e, t, n) {
            e.parent && e.remove();
            const o = t.parent || this;
            return n ? (t === o.firstChild ? o.firstChild = e : t.prev && (t.prev.next = e), e.prev = t.prev, e.next = t, t.prev = e) : (t === o.lastChild ? o.lastChild = e : t.next && (t.next.prev = e), e.next = t.next, e.prev = t, t.next = e), e.parent = o, e
        }

        getAll(e) {
            const t = this, n = [];
            for (let o = t.firstChild; o; o = $g(o, t)) o.name === e && n.push(o);
            return n
        }

        children() {
            const e = [];
            for (let t = this.firstChild; t; t = t.next) e.push(t);
            return e
        }

        empty() {
            const e = this;
            if (e.firstChild) {
                const t = [];
                for (let n = e.firstChild; n; n = $g(n, e)) t.push(n);
                let n = t.length;
                for (; n--;) {
                    const e = t[n];
                    e.parent = e.firstChild = e.lastChild = e.next = e.prev = null
                }
            }
            return e.firstChild = e.lastChild = null, e
        }

        isEmpty(e, t = {}, n) {
            var o;
            const r = this;
            let s = r.firstChild;
            if (Vg(r)) return !1;
            if (s) do {
                if (1 === s.type) {
                    if (s.attr("data-mce-bogus")) continue;
                    if (e[s.name]) return !1;
                    if (Vg(s)) return !1
                }
                if (8 === s.type) return !1;
                if (3 === s.type && !qg(s)) return !1;
                if (3 === s.type && s.parent && t[s.parent.name] && ss(null !== (o = s.value) && void 0 !== o ? o : "")) return !1;
                if (n && n(s)) return !1
            } while (s = $g(s, r));
            return !0
        }

        walk(e) {
            return $g(this, null, e)
        }
    }

    const Kg = Pt.makeMap("NOSCRIPT STYLE SCRIPT XMP IFRAME NOEMBED NOFRAMES PLAINTEXT", " "),
        Yg = e => m(e.nodeValue) && e.nodeValue.includes(Br),
        Gg = e => (0 === e.length ? "" : `${q(e, (e => `[${e}]`)).join(",")},`) + '[data-mce-bogus="all"]',
        Xg = e => document.createTreeWalker(e, NodeFilter.SHOW_COMMENT, (e => Yg(e) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP)),
        Qg = e => document.createTreeWalker(e, NodeFilter.SHOW_TEXT, (e => {
            if (Yg(e)) {
                const t = e.parentNode;
                return t && Ee(Kg, t.nodeName) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
            return NodeFilter.FILTER_SKIP
        })), Jg = e => null !== Xg(e).nextNode(), Zg = e => null !== Qg(e).nextNode(),
        ep = (e, t) => null !== t.querySelector(Gg(e)), tp = (e, t) => {
            V(((e, t) => t.querySelectorAll(Gg(e)))(e, t), (t => {
                const n = yn(t);
                "all" === en(n, "data-mce-bogus") ? xo(n) : V(e, (e => {
                    nn(n, e) && on(n, e)
                }))
            }))
        }, np = e => {
            let t = e.nextNode();
            for (; null !== t;) t.nodeValue = null, t = e.nextNode()
        }, op = k(np, Xg), rp = k(np, Qg), sp = (e, t) => {
            const n = [{condition: T(ep, t), action: T(tp, t)}, {condition: Jg, action: op}, {condition: Zg, action: rp}];
            let o = e, r = !1;
            return V(n, (({condition: t, action: n}) => {
                t(o) && (r || (o = e.cloneNode(!0), r = !0), n(o))
            })), o
        }, ap = e => {
            const t = Uo(e, "[data-mce-bogus]");
            V(t, (e => {
                "all" === en(e, "data-mce-bogus") ? xo(e) : Er(e) ? (po(e, vn(hr)), xo(e)) : Eo(e)
            }))
        }, ip = e => {
            const t = Uo(e, "input");
            V(t, (e => {
                on(e, "name")
            }))
        }, lp = (e, t, n) => {
            let o;
            return o = "raw" === t.format ? Pt.trim(Dr(sp(n, e.serializer.getTempAttrs()).innerHTML)) : "text" === t.format ? ((e, t) => {
                const n = e.getDoc(), o = qn(yn(e.getBody())), r = bn("div", n);
                Jt(r, "data-mce-bogus", "all"), lo(r, {
                    position: "fixed",
                    left: "-9999999px",
                    top: "0"
                }), So(r, t.innerHTML), ap(r), ip(r);
                const s = (e => jn(e) ? e : yn(Nn(e).dom.body))(o);
                vo(s, r);
                const a = Dr(r.dom.innerText);
                return xo(r), a
            })(e, n) : "tree" === t.format ? e.serializer.serialize(n, t) : ((e, t) => {
                const n = Il(e),
                    o = new RegExp(`^(<${n}[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/${n}>[\r\n]*|<br \\/>[\r\n]*)$`);
                return t.replace(o, "")
            })(e, e.serializer.serialize(n, t)), "text" !== t.format && !Ar(yn(n)) && m(o) ? Pt.trim(o) : o
        }, dp = Pt.makeMap, cp = e => {
            const t = [], n = (e = e || {}).indent, o = dp(e.indent_before || ""), r = dp(e.indent_after || ""),
                s = ea.getEncodeFunc(e.entity_encoding || "raw", e.entities), a = "xhtml" !== e.element_format;
            return {
                start: (e, i, l) => {
                    if (n && o[e] && t.length > 0) {
                        const e = t[t.length - 1];
                        e.length > 0 && "\n" !== e && t.push("\n")
                    }
                    if (t.push("<", e), i) for (let e = 0, n = i.length; e < n; e++) {
                        const n = i[e];
                        t.push(" ", n.name, '="', s(n.value, !0), '"')
                    }
                    if (t[t.length] = !l || a ? ">" : " />", l && n && r[e] && t.length > 0) {
                        const e = t[t.length - 1];
                        e.length > 0 && "\n" !== e && t.push("\n")
                    }
                }, end: e => {
                    let o;
                    t.push("</", e, ">"), n && r[e] && t.length > 0 && (o = t[t.length - 1], o.length > 0 && "\n" !== o && t.push("\n"))
                }, text: (e, n) => {
                    e.length > 0 && (t[t.length] = n ? e : s(e))
                }, cdata: e => {
                    t.push("<![CDATA[", e, "]]>")
                }, comment: e => {
                    t.push("\x3c!--", e, "--\x3e")
                }, pi: (e, o) => {
                    o ? t.push("<?", e, " ", s(o), "?>") : t.push("<?", e, "?>"), n && t.push("\n")
                }, doctype: e => {
                    t.push("<!DOCTYPE", e, ">", n ? "\n" : "")
                }, reset: () => {
                    t.length = 0
                }, getContent: () => t.join("").replace(/\n$/, "")
            }
        }, up = (e = {}, t = ua()) => {
            const n = cp(e);
            return e.validate = !("validate" in e) || e.validate, {
                serialize: o => {
                    const r = e.validate, s = {
                        3: e => {
                            var t;
                            n.text(null !== (t = e.value) && void 0 !== t ? t : "", e.raw)
                        }, 8: e => {
                            var t;
                            n.comment(null !== (t = e.value) && void 0 !== t ? t : "")
                        }, 7: e => {
                            n.pi(e.name, e.value)
                        }, 10: e => {
                            var t;
                            n.doctype(null !== (t = e.value) && void 0 !== t ? t : "")
                        }, 4: e => {
                            var t;
                            n.cdata(null !== (t = e.value) && void 0 !== t ? t : "")
                        }, 11: e => {
                            let t = e;
                            if (t = t.firstChild) do {
                                a(t)
                            } while (t = t.next)
                        }
                    };
                    n.reset();
                    const a = e => {
                        var o;
                        const i = s[e.type];
                        if (i) i(e); else {
                            const s = e.name, i = s in t.getVoidElements();
                            let l = e.attributes;
                            if (r && l && l.length > 1) {
                                const n = [];
                                n.map = {};
                                const o = t.getElementRule(e.name);
                                if (o) {
                                    for (let e = 0, t = o.attributesOrder.length; e < t; e++) {
                                        const t = o.attributesOrder[e];
                                        if (t in l.map) {
                                            const e = l.map[t];
                                            n.map[t] = e, n.push({name: t, value: e})
                                        }
                                    }
                                    for (let e = 0, t = l.length; e < t; e++) {
                                        const t = l[e].name;
                                        if (!(t in n.map)) {
                                            const e = l.map[t];
                                            n.map[t] = e, n.push({name: t, value: e})
                                        }
                                    }
                                    l = n
                                }
                            }
                            if (n.start(s, l, i), ps(s)) m(e.value) && n.text(e.value, !0), n.end(s); else if (!i) {
                                let t = e.firstChild;
                                if (t) {
                                    "pre" !== s && "textarea" !== s || 3 !== t.type || "\n" !== (null === (o = t.value) || void 0 === o ? void 0 : o[0]) || n.text("\n", !0);
                                    do {
                                        a(t)
                                    } while (t = t.next)
                                }
                                n.end(s)
                            }
                        }
                    };
                    return 1 !== o.type || e.inner ? 3 === o.type ? s[3](o) : s[11](o) : a(o), n.getContent()
                }
            }
        }, mp = new Set;
    V(["margin", "margin-left", "margin-right", "margin-top", "margin-bottom", "padding", "padding-left", "padding-right", "padding-top", "padding-bottom", "border", "border-width", "border-style", "border-color", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "float", "position", "left", "right", "top", "bottom", "z-index", "display", "transform", "width", "max-width", "min-width", "height", "max-height", "min-height", "overflow", "overflow-x", "overflow-y", "text-overflow", "vertical-align", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function"], (e => {
        mp.add(e)
    }));
    const fp = ["font", "text-decoration", "text-emphasis"], gp = (e, t) => me(e.parseStyle(e.getAttrib(t, "style"))),
        pp = (e, t, n) => {
            const o = gp(e, t), r = gp(e, n), s = o => {
                var r, s;
                const a = null !== (r = e.getStyle(t, o)) && void 0 !== r ? r : "",
                    i = null !== (s = e.getStyle(n, o)) && void 0 !== s ? s : "";
                return Ye(a) && Ye(i) && a !== i
            };
            return $(o, (e => {
                const t = t => $(t, (t => t === e));
                if (!t(r) && t(fp)) {
                    const e = Y(r, (e => $(fp, (t => He(e, t)))));
                    return $(e, s)
                }
                return s(e)
            }))
        }, hp = (e, t, n) => I.from(n.container()).filter(er).exists((o => {
            const r = e ? 0 : -1;
            return t(o.data.charAt(n.offset() + r))
        })), bp = T(hp, !0, Xu), vp = T(hp, !1, Xu), yp = e => {
            const t = e.container();
            return er(t) && (0 === t.data.length || Pr(t.data) && Jm.isBookmarkNode(t.parentNode))
        }, Cp = (e, t) => n => Jc(e ? 0 : -1, n).filter(t).isSome(), wp = e => ir(e) && "block" === co(yn(e), "display"),
        xp = e => dr(e) && !(e => qo(e) && "all" === e.getAttribute("data-mce-bogus"))(e), Ep = Cp(!0, wp),
        _p = Cp(!1, wp), kp = Cp(!0, mr), Sp = Cp(!1, mr), Np = Cp(!0, Qo), Rp = Cp(!1, Qo), Ap = Cp(!0, xp),
        Tp = Cp(!1, xp),
        Op = (e, t) => ((e, t, n) => kn(t, e) ? On(e, (e => n(e) || _n(e, t))).slice(0, -1) : [])(e, t, L),
        Bp = (e, t) => [e].concat(Op(e, t)), Pp = (e, t, n) => Nu(e, t, n, yp),
        Dp = (e, t, n) => J(Bp(yn(t.container()), e), (e => t => e.isBlock(Ht(t)))(n)),
        Lp = (e, t, n, o) => Pp(e, t.dom, n).forall((e => Dp(t, n, o).fold((() => !Qc(e, n, t.dom)), (o => !Qc(e, n, t.dom) && kn(o, yn(e.container())))))),
        Mp = (e, t, n, o) => Dp(t, n, o).fold((() => Pp(e, t.dom, n).forall((e => !Qc(e, n, t.dom)))), (t => Pp(e, t.dom, n).isNone())),
        Ip = T(Mp, !1), Fp = T(Mp, !0), Up = T(Lp, !1), zp = T(Lp, !0), jp = e => iu(e).exists(Er),
        Hp = (e, t, n, o) => {
            const r = Y(Bp(yn(n.container()), t), (e => o.isBlock(Ht(e)))), s = le(r).getOr(t);
            return ku(e, s.dom, n).filter(jp)
        }, $p = (e, t, n) => iu(t).exists(Er) || Hp(!0, e, t, n).isSome(),
        qp = (e, t, n) => (e => I.from(e.getNode(!0)).map(yn))(t).exists(Er) || Hp(!1, e, t, n).isSome(),
        Vp = T(Hp, !1), Wp = T(Hp, !0), Kp = e => Vi.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd(),
        Yp = (e, t, n) => {
            const o = Y(Bp(yn(t.container()), e), (e => n.isBlock(Ht(e))));
            return le(o).getOr(e)
        }, Gp = (e, t, n) => Kp(t) ? vp(t) : vp(t) || Tu(Yp(e, t, n).dom, t).exists(vp),
        Xp = (e, t, n) => Kp(t) ? bp(t) : bp(t) || Au(Yp(e, t, n).dom, t).exists(bp),
        Qp = e => iu(e).bind((e => Jn(e, Wt))).exists((e => (e => H(["pre", "pre-wrap"], e))(co(e, "white-space")))),
        Jp = (e, t) => n => {
            return o = new jo(n, e)[t](), C(o) && dr(o) && zc(o);
            var o
        },
        Zp = (e, t, n) => !Qp(t) && (((e, t, n) => ((e, t) => Tu(e.dom, t).isNone())(e, t) || ((e, t) => Au(e.dom, t).isNone())(e, t) || Ip(e, t, n) || Fp(e, t, n) || qp(e, t, n) || $p(e, t, n))(e, t, n) || Gp(e, t, n) || Xp(e, t, n)),
        eh = (e, t, n) => !Qp(t) && (Ip(e, t, n) || Up(e, t, n) || qp(e, t, n) || Gp(e, t, n) || ((e, t) => {
            const n = Tu(e.dom, t).getOr(t), o = Jp(e.dom, "prev");
            return t.isAtStart() && (o(t.container()) || o(n.container()))
        })(e, t)), th = (e, t, n) => !Qp(t) && (Fp(e, t, n) || zp(e, t, n) || $p(e, t, n) || Xp(e, t, n) || ((e, t) => {
            const n = Au(e.dom, t).getOr(t), o = Jp(e.dom, "next");
            return t.isAtEnd() && (o(t.container()) || o(n.container()))
        })(e, t)), nh = (e, t, n) => eh(e, t, n) || th(e, (e => {
            const t = e.container(), n = e.offset();
            return er(t) && n < t.data.length ? Vi(t, n + 1) : e
        })(t), n), oh = (e, t) => Yu(e.charAt(t)), rh = (e, t) => Xu(e.charAt(t)), sh = (e, t, n, o) => {
            const r = t.data, s = Vi(t, 0);
            return n || !oh(r, 0) || nh(e, s, o) ? !!(n && rh(r, 0) && eh(e, s, o)) && (t.data = br + r.slice(1), !0) : (t.data = " " + r.slice(1), !0)
        }, ah = (e, t, n, o) => {
            const r = t.data, s = Vi(t, r.length - 1);
            return n || !oh(r, r.length - 1) || nh(e, s, o) ? !!(n && rh(r, r.length - 1) && th(e, s, o)) && (t.data = r.slice(0, -1) + br, !0) : (t.data = r.slice(0, -1) + " ", !0)
        }, ih = (e, t, n) => {
            const o = t.container();
            if (!er(o)) return I.none();
            if ((e => {
                const t = e.container();
                return er(t) && je(t.data, br)
            })(t)) {
                const r = sh(e, o, !1, n) || (e => {
                    const t = e.data, n = (e => {
                        const t = e.split("");
                        return q(t, ((e, n) => Yu(e) && n > 0 && n < t.length - 1 && Qu(t[n - 1]) && Qu(t[n + 1]) ? " " : e)).join("")
                    })(t);
                    return n !== t && (e.data = n, !0)
                })(o) || ah(e, o, !1, n);
                return It(r, t)
            }
            if (nh(e, t, n)) {
                const r = sh(e, o, !0, n) || ah(e, o, !0, n);
                return It(r, t)
            }
            return I.none()
        }, lh = (e, t, n, o) => {
            if (0 === n) return;
            const r = yn(e), s = Qn(r, (e => o.isBlock(Ht(e)))).getOr(r), a = e.data.slice(t, t + n),
                i = t + n >= e.data.length && th(s, Vi(e, e.data.length), o), l = 0 === t && eh(s, Vi(e, 0), o);
            e.replaceData(t, n, ls(a, 4, l, i))
        }, dh = (e, t, n) => {
            const o = e.data.slice(t), r = o.length - We(o).length;
            lh(e, t, r, n)
        }, ch = (e, t, n) => {
            const o = e.data.slice(0, t), r = o.length - Ke(o).length;
            lh(e, t - r, r, n)
        }, uh = (e, t, n, o, r = !0) => {
            const s = Ke(e.data).length, a = r ? e : t, i = r ? t : e;
            return r ? a.appendData(i.data) : a.insertData(0, i.data), xo(yn(i)), o && dh(a, s, n), a
        }, mh = (e, t) => ((e, t) => {
            const n = e.container(), o = e.offset();
            return !Vi.isTextPosition(e) && n === t.parentNode && o > Vi.before(t).offset()
        })(t, e) ? Vi(t.container(), t.offset() - 1) : t, fh = e => {
            return ts(e.previousSibling) ? I.some((t = e.previousSibling, er(t) ? Vi(t, t.data.length) : Vi.after(t))) : e.previousSibling ? Bu(e.previousSibling) : I.none();
            var t
        }, gh = e => {
            return ts(e.nextSibling) ? I.some((t = e.nextSibling, er(t) ? Vi(t, 0) : Vi.before(t))) : e.nextSibling ? Ou(e.nextSibling) : I.none();
            var t
        },
        ph = (e, t, n) => ((e, t, n) => e ? ((e, t) => gh(t).orThunk((() => fh(t))).orThunk((() => ((e, t) => Au(e, Vi.after(t)).orThunk((() => Tu(e, Vi.before(t)))))(e, t))))(t, n) : ((e, t) => fh(t).orThunk((() => gh(t))).orThunk((() => ((e, t) => I.from(t.previousSibling ? t.previousSibling : t.parentNode).bind((t => Tu(e, Vi.before(t)))).orThunk((() => Au(e, Vi.after(t)))))(e, t))))(t, n))(e, t, n).map(T(mh, n)),
        hh = (e, t, n) => {
            n.fold((() => {
                e.focus()
            }), (n => {
                e.selection.setRng(n.toRange(), t)
            }))
        }, bh = (e, t) => t && Ee(e.schema.getBlockElements(), Ht(t)), vh = (e, t, n, o = !0, r = !1) => {
            const s = ph(t, e.getBody(), n.dom), a = Qn(n, T(bh, e), (i = e.getBody(), e => e.dom === i));
            var i;
            const l = ((e, t, n, o) => {
                const r = Bn(e).filter(Kt), s = Pn(e).filter(Kt);
                return xo(e), (a = r, i = s, l = t, d = (e, t, r) => {
                    const s = e.dom, a = t.dom, i = s.data.length;
                    return uh(s, a, n, o), r.container() === a ? Vi(s, i) : r
                }, a.isSome() && i.isSome() && l.isSome() ? I.some(d(a.getOrDie(), i.getOrDie(), l.getOrDie())) : I.none()).orThunk((() => (o && (r.each((e => ch(e.dom, e.dom.length, n))), s.each((e => dh(e.dom, 0, n)))), t)));
                var a, i, l, d
            })(n, s, e.schema, ((e, t) => Ee(e.schema.getTextInlineElements(), Ht(t)))(e, n));
            e.dom.isEmpty(e.getBody()) ? (e.setContent(""), e.selection.setCursorLocation()) : a.bind((e => ((e, t) => {
                if (gs(e)) {
                    const n = hn('<br data-mce-bogus="1">');
                    return t ? V(Mn(e), (e => {
                        Tm(e) || xo(e)
                    })) : wo(e), vo(e, n), I.some(Vi.before(n.dom))
                }
                return I.none()
            })(e, r))).fold((() => {
                o && hh(e, t, l)
            }), (n => {
                o && hh(e, t, I.some(n))
            }))
        }, yh = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
        Ch = (e, t) => xn(yn(t), dd(e)) && !Ts(e.schema, t) && e.dom.isEditable(t), wh = e => {
            var t;
            return "rtl" === za.DOM.getStyle(e, "direction", !0) || (e => yh.test(e))(null !== (t = e.textContent) && void 0 !== t ? t : "")
        }, xh = (e, t, n) => {
            const o = ((e, t, n) => Y(za.DOM.getParents(n.container(), "*", t), e))(e, t, n);
            return I.from(o[o.length - 1])
        }, Eh = (e, t) => {
            const n = t.container(), o = t.offset();
            return e ? Fr(n) ? er(n.nextSibling) ? Vi(n.nextSibling, 0) : Vi.after(n) : jr(t) ? Vi(n, o + 1) : t : Fr(n) ? er(n.previousSibling) ? Vi(n.previousSibling, n.previousSibling.data.length) : Vi.before(n) : Hr(t) ? Vi(n, o - 1) : t
        }, _h = T(Eh, !0), kh = T(Eh, !1), Sh = (e, t) => {
            const n = e => e.stopImmediatePropagation();
            e.on("beforeinput input", n, !0), e.getDoc().execCommand(t), e.off("beforeinput input", n)
        }, Nh = e => Sh(e, "Delete"), Rh = e => _r(e) || Sr(e),
        Ah = (e, t) => kn(e, t) ? Jn(t, Rh, (e => t => Dt(An(t), e, _n))(e)) : I.none(), Th = (e, t = !0) => {
            e.dom.isEmpty(e.getBody()) && e.setContent("", {no_selection: !t})
        }, Oh = (e, t, n) => Mt(Ou(n), Bu(n), ((o, r) => {
            const s = Eh(!0, o), a = Eh(!1, r), i = Eh(!1, t);
            return e ? Au(n, i).exists((e => e.isEqual(a) && t.isEqual(s))) : Tu(n, i).exists((e => e.isEqual(s) && t.isEqual(a)))
        })).getOr(!0), Bh = e => {
            var t;
            return (8 === $t(t = e) || "#comment" === Ht(t) ? Bn(e) : Un(e)).bind(Bh).orThunk((() => I.some(e)))
        }, Ph = (e, t, n, o = !0) => {
            var r;
            t.deleteContents();
            const s = Bh(n).getOr(n),
                a = yn(null !== (r = e.dom.getParent(s.dom, e.dom.isBlock)) && void 0 !== r ? r : n.dom);
            if (a.dom === e.getBody() ? Th(e, o) : gs(a) && (Or(a), o && e.selection.setCursorLocation(a.dom, 0)), !_n(n, a)) {
                const e = Dt(An(a), n) ? [] : An(i = a).map(Mn).map((e => Y(e, (e => !_n(i, e))))).getOr([]);
                V(e.concat(Mn(n)), (e => {
                    _n(e, a) || kn(e, a) || !gs(e) || xo(e)
                }))
            }
            var i
        }, Dh = (e, t) => ((e, t) => {
            const n = e.dom;
            return n.parentNode ? ((e, t) => J(e.dom.childNodes, (e => t(yn(e)))).map(yn))(yn(n.parentNode), (n => !_n(e, n) && t(n))) : I.none()
        })(e, t).isSome(), Lh = (e, t) => Zn(e, t).isSome(), Mh = e => Uo(e, "td,th"), Ih = (e, t) => tm(yn(e), t),
        Fh = (e, t) => ({start: e, end: t}),
        Uh = hl([{singleCellTable: ["rng", "cell"]}, {fullTable: ["table"]}, {partialTable: ["cells", "outsideDetails"]}, {multiTable: ["startTableCells", "endTableCells", "betweenRng"]}]),
        zh = (e, t) => no(yn(e), "td,th", t), jh = e => !_n(e.start, e.end),
        Hh = (e, t) => tm(e.start, t).bind((n => tm(e.end, t).bind((e => It(_n(n, e), n))))),
        $h = e => t => Hh(t, e).map((e => ((e, t, n) => ({rng: e, table: t, cells: n}))(t, e, Mh(e)))),
        qh = (e, t, n, o) => {
            if (n.collapsed || !e.forall(jh)) return I.none();
            if (t.isSameTable) {
                const t = e.bind($h(o));
                return I.some({start: t, end: t})
            }
            {
                const e = zh(n.startContainer, o), t = zh(n.endContainer, o),
                    r = e.bind((e => t => tm(t, e).bind((e => de(Mh(e)).map((e => Fh(t, e))))))(o)).bind($h(o)),
                    s = t.bind((e => t => tm(t, e).bind((e => le(Mh(e)).map((e => Fh(e, t))))))(o)).bind($h(o));
                return I.some({start: r, end: s})
            }
        }, Vh = (e, t) => Z(e, (e => _n(e, t))),
        Wh = e => Mt(Vh(e.cells, e.rng.start), Vh(e.cells, e.rng.end), ((t, n) => e.cells.slice(t, n + 1))),
        Kh = (e, t) => {
            const {startTable: n, endTable: o} = t, r = e.cloneRange();
            return n.each((e => r.setStartAfter(e.dom))), o.each((e => r.setEndBefore(e.dom))), r
        }, Yh = (e, t) => {
            const n = (e => t => _n(e, t))(e), o = ((e, t) => {
                const n = zh(e.startContainer, t), o = zh(e.endContainer, t);
                return Mt(n, o, Fh)
            })(t, n), r = ((e, t) => {
                const n = Ih(e.startContainer, t), o = Ih(e.endContainer, t), r = n.isSome(), s = o.isSome(),
                    a = Mt(n, o, _n).getOr(!1);
                return (e => Mt(e.startTable, e.endTable, ((t, n) => {
                    const o = Lh(t, (e => _n(e, n))), r = Lh(n, (e => _n(e, t)));
                    return o || r ? {
                        ...e,
                        startTable: o ? I.none() : e.startTable,
                        endTable: r ? I.none() : e.endTable,
                        isSameTable: !1,
                        isMultiTable: !1
                    } : e
                })).getOr(e))({
                    startTable: n,
                    endTable: o,
                    isStartInTable: r,
                    isEndInTable: s,
                    isSameTable: a,
                    isMultiTable: !a && r && s
                })
            })(t, n);
            return ((e, t, n) => e.exists((e => ((e, t) => !jh(e) && Hh(e, t).exists((e => {
                const t = e.dom.rows;
                return 1 === t.length && 1 === t[0].cells.length
            })))(e, n) && rm(e.start, t))))(o, t, n) ? o.map((e => Uh.singleCellTable(t, e.start))) : r.isMultiTable ? ((e, t, n, o) => qh(e, t, n, o).bind((({start: e, end: o}) => {
                const r = e.bind(Wh).getOr([]), s = o.bind(Wh).getOr([]);
                if (r.length > 0 && s.length > 0) {
                    const e = Kh(n, t);
                    return I.some(Uh.multiTable(r, s, e))
                }
                return I.none()
            })))(o, r, t, n) : ((e, t, n, o) => qh(e, t, n, o).bind((({start: e, end: t}) => e.or(t))).bind((e => {
                const {isSameTable: o} = t, r = Wh(e).getOr([]);
                if (o && e.cells.length === r.length) return I.some(Uh.fullTable(e.table));
                if (r.length > 0) {
                    if (o) return I.some(Uh.partialTable(r, I.none()));
                    {
                        const e = Kh(n, t);
                        return I.some(Uh.partialTable(r, I.some({...t, rng: e})))
                    }
                }
                return I.none()
            })))(o, r, t, n)
        }, Gh = e => V(e, (e => {
            on(e, "contenteditable"), Or(e)
        })), Xh = (e, t, n, o) => {
            const r = n.cloneRange();
            o ? (r.setStart(n.startContainer, n.startOffset), r.setEndAfter(t.dom.lastChild)) : (r.setStartBefore(t.dom.firstChild), r.setEnd(n.endContainer, n.endOffset)), eb(e, r, t, !1).each((e => e()))
        }, Qh = e => {
            const t = em(e), n = yn(e.selection.getNode());
            cr(n.dom) && gs(n) ? e.selection.setCursorLocation(n.dom, 0) : e.selection.collapse(!0), t.length > 1 && $(t, (e => _n(e, n))) && Jt(n, "data-mce-selected", "1")
        }, Jh = (e, t, n) => I.some((() => {
            const o = e.selection.getRng(), r = n.bind((({rng: n, isStartInTable: r}) => {
                const s = ((e, t) => I.from(e.dom.getParent(t, e.dom.isBlock)).map(yn))(e, r ? n.endContainer : n.startContainer);
                n.deleteContents(), ((e, t, n) => {
                    n.each((n => {
                        t ? xo(n) : (Or(n), e.selection.setCursorLocation(n.dom, 0))
                    }))
                })(e, r, s.filter(gs));
                const a = r ? t[0] : t[t.length - 1];
                return Xh(e, a, o, r), gs(a) ? I.none() : I.some(r ? t.slice(1) : t.slice(0, -1))
            })).getOr(t);
            Gh(r), Qh(e)
        })), Zh = (e, t, n, o) => I.some((() => {
            const r = e.selection.getRng(), s = t[0], a = n[n.length - 1];
            Xh(e, s, r, !0), Xh(e, a, r, !1);
            const i = gs(s) ? t : t.slice(1), l = gs(a) ? n : n.slice(0, -1);
            Gh(i.concat(l)), o.deleteContents(), Qh(e)
        })), eb = (e, t, n, o = !0) => I.some((() => {
            Ph(e, t, n, o)
        })), tb = (e, t) => I.some((() => vh(e, !1, t))), nb = (e, t) => J(Bp(t, e), Rr),
        ob = (e, t) => J(Bp(t, e), Xt("caption")), rb = (e, t) => I.some((() => {
            Or(t), e.selection.setCursorLocation(t.dom, 0)
        })), sb = (e, t) => e ? Np(t) : Rp(t), ab = (e, t, n) => {
            const o = yn(e.getBody());
            return ob(o, n).fold((() => ((e, t, n, o) => {
                const r = Vi.fromRangeStart(e.selection.getRng());
                return nb(n, o).bind((o => gs(o) ? rb(e, o) : ((e, t, n, o, r) => Su(n, e.getBody(), r).bind((e => nb(t, yn(e.getNode())).bind((e => _n(e, o) ? I.none() : I.some(_))))))(e, n, t, o, r)))
            })(e, t, o, n).orThunk((() => It(((e, t) => {
                const n = Vi.fromRangeStart(e.selection.getRng());
                return sb(t, n) || ku(t, e.getBody(), n).exists((e => sb(t, e)))
            })(e, t), _)))), (n => ((e, t, n, o) => {
                const r = Vi.fromRangeStart(e.selection.getRng());
                return gs(o) ? rb(e, o) : ((e, t, n, o, r) => Su(n, e.getBody(), r).fold((() => I.some(_)), (s => ((e, t, n, o) => Ou(e.dom).bind((r => Bu(e.dom).map((e => t ? n.isEqual(r) && o.isEqual(e) : n.isEqual(e) && o.isEqual(r))))).getOr(!0))(o, n, r, s) ? ((e, t) => rb(e, t))(e, o) : ((e, t, n) => ob(e, yn(n.getNode())).fold((() => I.some(_)), (e => It(!_n(e, t), _))))(t, o, s))))(e, n, t, o, r)
            })(e, t, o, n)))
        }, ib = (e, t) => {
            const n = yn(e.selection.getStart(!0)), o = em(e);
            return e.selection.isCollapsed() && 0 === o.length ? ab(e, t, n) : ((e, t, n) => {
                const o = yn(e.getBody()), r = e.selection.getRng();
                return 0 !== n.length ? Jh(e, n, I.none()) : ((e, t, n, o) => ob(t, o).fold((() => ((e, t, n) => Yh(t, n).bind((t => t.fold(T(eb, e), T(tb, e), T(Jh, e), T(Zh, e)))))(e, t, n)), (t => ((e, t) => rb(e, t))(e, t))))(e, o, r, t)
            })(e, n, o)
        }, lb = (e, t) => {
            let n = t;
            for (; n && n !== e;) {
                if (lr(n) || dr(n)) return n;
                n = n.parentNode
            }
            return null
        }, db = ["data-ephox-", "data-mce-", "data-alloy-", "data-snooker-", "_"], cb = Pt.each, ub = e => {
            const t = e.dom, n = new Set(e.serializer.getTempAttrs()), o = e => $(db, (t => He(e, t))) || n.has(e);
            return {
                compare: (e, n) => {
                    if (e.nodeName !== n.nodeName || e.nodeType !== n.nodeType) return !1;
                    const r = e => {
                        const n = {};
                        return cb(t.getAttribs(e), (r => {
                            const s = r.nodeName.toLowerCase();
                            "style" === s || o(s) || (n[s] = t.getAttrib(e, s))
                        })), n
                    }, s = (e, t) => {
                        for (const n in e) if (Ee(e, n)) {
                            const o = t[n];
                            if (v(o)) return !1;
                            if (e[n] !== o) return !1;
                            delete t[n]
                        }
                        for (const e in t) if (Ee(t, e)) return !1;
                        return !0
                    };
                    if (qo(e) && qo(n)) {
                        if (!s(r(e), r(n))) return !1;
                        if (!s(t.parseStyle(t.getAttrib(e, "style")), t.parseStyle(t.getAttrib(n, "style")))) return !1
                    }
                    return !Ku(e) && !Ku(n)
                }, isAttributeInternal: o
            }
        }, mb = e => ["h1", "h2", "h3", "h4", "h5", "h6"].includes(e.name), fb = (e, t, n, o) => {
            const r = n.name;
            for (let t = 0, s = e.length; t < s; t++) {
                const s = e[t];
                if (s.name === r) {
                    const e = o.nodes[r];
                    e ? e.nodes.push(n) : o.nodes[r] = {filter: s, nodes: [n]}
                }
            }
            if (n.attributes) for (let e = 0, r = t.length; e < r; e++) {
                const r = t[e], s = r.name;
                if (s in n.attributes.map) {
                    const e = o.attributes[s];
                    e ? e.nodes.push(n) : o.attributes[s] = {filter: r, nodes: [n]}
                }
            }
        }, gb = (e, t) => {
            const n = (e, n) => {
                ge(e, (e => {
                    const o = ce(e.nodes);
                    V(e.filter.callbacks, (r => {
                        for (let t = o.length - 1; t >= 0; t--) {
                            const r = o[t];
                            (n ? void 0 !== r.attr(e.filter.name) : r.name === e.filter.name) && !y(r.parent) || o.splice(t, 1)
                        }
                        o.length > 0 && r(o, e.filter.name, t)
                    }))
                }))
            };
            n(e.nodes, !1), n(e.attributes, !0)
        }, pb = (e, t, n, o = {}) => {
            const r = ((e, t, n) => {
                const o = {nodes: {}, attributes: {}};
                return n.firstChild && ((n, r) => {
                    let s = n;
                    for (; s = s.walk();) fb(e, t, s, o)
                })(n), o
            })(e, t, n);
            gb(r, o)
        }, hb = (e, t, n, o) => {
            if ((e.pad_empty_with_br || t.insert) && n(o)) {
                const e = new Wg("br", 1);
                t.insert && e.attr("data-mce-bogus", "1"), o.empty().append(e)
            } else o.empty().append(new Wg("#text", 3)).value = br
        }, bb = (e, t) => {
            const n = null == e ? void 0 : e.firstChild;
            return C(n) && n === e.lastChild && n.name === t
        }, vb = (e, t, n, o) => o.isEmpty(t, n, (t => ((e, t) => {
            const n = e.getElementRule(t.name);
            return !0 === (null == n ? void 0 : n.paddEmpty)
        })(e, t))), yb = e => {
            let t;
            for (let n = e; n; n = n.parent) {
                const e = n.attr("contenteditable");
                if ("false" === e) break;
                "true" === e && (t = n)
            }
            return I.from(t)
        }, Cb = (e, t, n = e.parent) => {
            if (t.getSpecialElements()[e.name]) e.empty().remove(); else {
                const o = e.children();
                for (const e of o) n && !t.isValidChild(n.name, e.name) && Cb(e, t, n);
                e.unwrap()
            }
        }, wb = (e, t, n, o = _) => {
            const r = t.getTextBlockElements(), s = t.getNonEmptyElements(), a = t.getWhitespaceElements(),
                i = Pt.makeMap("tr,td,th,tbody,thead,tfoot,table,summary"), l = new Set, d = e => e !== n && !i[e.name];
            for (let n = 0; n < e.length; n++) {
                const i = e[n];
                let c, u, m;
                if (!i.parent || l.has(i)) continue;
                if (r[i.name] && "li" === i.parent.name) {
                    let e = i.next;
                    for (; e && r[e.name];) e.name = "li", l.add(e), i.parent.insert(e, i.parent), e = e.next;
                    i.unwrap();
                    continue
                }
                const f = [i];
                for (c = i.parent; c && !t.isValidChild(c.name, i.name) && d(c); c = c.parent) f.push(c);
                if (c && f.length > 1) if (xb(t, i, c)) Cb(i, t); else {
                    f.reverse(), u = f[0].clone(), o(u);
                    let e = u;
                    for (let n = 0; n < f.length - 1; n++) {
                        t.isValidChild(e.name, f[n].name) && n > 0 ? (m = f[n].clone(), o(m), e.append(m)) : m = e;
                        for (let e = f[n].firstChild; e && e !== f[n + 1];) {
                            const t = e.next;
                            m.append(e), e = t
                        }
                        e = m
                    }
                    vb(t, s, a, u) ? c.insert(i, f[0], !0) : (c.insert(u, f[0], !0), c.insert(i, u)), c = f[0], (vb(t, s, a, c) || bb(c, "br")) && c.empty().remove()
                } else if (i.parent) {
                    if ("li" === i.name) {
                        let e = i.prev;
                        if (e && ("ul" === e.name || "ol" === e.name)) {
                            e.append(i);
                            continue
                        }
                        if (e = i.next, e && ("ul" === e.name || "ol" === e.name) && e.firstChild) {
                            e.insert(i, e.firstChild, !0);
                            continue
                        }
                        const t = new Wg("ul", 1);
                        o(t), i.wrap(t);
                        continue
                    }
                    if (t.isValidChild(i.parent.name, "div") && t.isValidChild("div", i.name)) {
                        const e = new Wg("div", 1);
                        o(e), i.wrap(e)
                    } else Cb(i, t)
                }
            }
        },
        xb = (e, t, n = t.parent) => !(!n || (!e.children[t.name] || e.isValidChild(n.name, t.name)) && ("a" !== t.name || !((e, t) => {
            let n = e;
            for (; n;) {
                if ("a" === n.name) return !0;
                n = n.parent
            }
            return !1
        })(n)) && (!(e => "summary" === e.name)(n) || !mb(t) || (null == n ? void 0 : n.firstChild) === t && (null == n ? void 0 : n.lastChild) === t)),
        Eb = e => e.collapsed ? e : (e => {
            const t = Vi.fromRangeStart(e), n = Vi.fromRangeEnd(e), o = e.commonAncestorContainer;
            return ku(!1, o, n).map((r => !Qc(t, n, o) && Qc(t, r, o) ? ((e, t, n, o) => {
                const r = document.createRange();
                return r.setStart(e, t), r.setEnd(n, o), r
            })(t.container(), t.offset(), r.container(), r.offset()) : e)).getOr(e)
        })(e), _b = (e, t) => {
            let n = t.firstChild, o = t.lastChild;
            return n && "meta" === n.name && (n = n.next), o && "mce_marker" === o.attr("id") && (o = o.prev), ((e, t) => {
                const n = e.getNonEmptyElements();
                return C(t) && (t.isEmpty(n) || ((e, t) => e.getBlockElements()[t.name] && (e => C(e.firstChild) && e.firstChild === e.lastChild)(t) && (e => "br" === e.name || e.value === br)(t.firstChild))(e, t))
            })(e, o) && (o = null == o ? void 0 : o.prev), !(!n || n !== o || "ul" !== n.name && "ol" !== n.name)
        }, kb = e => {
            return e.length > 0 && (!(n = e[e.length - 1]).firstChild || C(null == (t = n) ? void 0 : t.firstChild) && t.firstChild === t.lastChild && (e => e.data === br || ar(e))(t.firstChild)) ? e.slice(0, -1) : e;
            var t, n
        }, Sb = (e, t) => {
            const n = e.getParent(t, e.isBlock);
            return n && "LI" === n.nodeName ? n : null
        }, Nb = (e, t) => {
            const n = Vi.after(e), o = wu(t).prev(n);
            return o ? o.toRange() : null
        }, Rb = (e, t, n, o) => {
            const r = ((e, t, n) => {
                    const o = t.serialize(n);
                    return (e => {
                        var t, n;
                        const o = e.firstChild, r = e.lastChild;
                        return o && "META" === o.nodeName && (null === (t = o.parentNode) || void 0 === t || t.removeChild(o)), r && "mce_marker" === r.id && (null === (n = r.parentNode) || void 0 === n || n.removeChild(r)), e
                    })(e.createFragment(o))
                })(t, e, o), s = Sb(t, n.startContainer),
                a = kb((i = r.firstChild, Y(null !== (l = null == i ? void 0 : i.childNodes) && void 0 !== l ? l : [], (e => "LI" === e.nodeName))));
            var i, l;
            const d = t.getRoot(), c = e => {
                const o = Vi.fromRangeStart(n), r = wu(t.getRoot()), a = 1 === e ? r.prev(o) : r.next(o),
                    i = null == a ? void 0 : a.getNode();
                return !i || Sb(t, i) !== s
            };
            return s ? c(1) ? ((e, t, n) => {
                const o = e.parentNode;
                return o && Pt.each(t, (t => {
                    o.insertBefore(t, e)
                })), ((e, t) => {
                    const n = Vi.before(e), o = wu(t).next(n);
                    return o ? o.toRange() : null
                })(e, n)
            })(s, a, d) : c(2) ? ((e, t, n, o) => (o.insertAfter(t.reverse(), e), Nb(t[0], n)))(s, a, d, t) : ((e, t, n, o) => {
                const r = ((e, t) => {
                    const n = t.cloneRange(), o = t.cloneRange();
                    return n.setStartBefore(e), o.setEndAfter(e), [n.cloneContents(), o.cloneContents()]
                })(e, o), s = e.parentNode;
                return s && (s.insertBefore(r[0], e), Pt.each(t, (t => {
                    s.insertBefore(t, e)
                })), s.insertBefore(r[1], e), s.removeChild(e)), Nb(t[t.length - 1], n)
            })(s, a, d, n) : null
        }, Ab = ["pre"], Tb = cr, Ob = (e, t, n) => {
            var o, r;
            const s = e.selection, a = e.dom, i = e.parser, l = n.merge, d = up({validate: !0}, e.schema),
                c = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>';
            n.preserve_zwsp || (t = Dr(t)), -1 === t.indexOf("{$caret}") && (t += "{$caret}"), t = t.replace(/\{\$caret\}/, c);
            let u = s.getRng();
            const m = u.startContainer, f = e.getBody();
            m === f && s.isCollapsed() && a.isBlock(f.firstChild) && ((e, t) => C(t) && !e.schema.getVoidElements()[t.nodeName])(e, f.firstChild) && a.isEmpty(f.firstChild) && (u = a.createRng(), u.setStart(f.firstChild, 0), u.setEnd(f.firstChild, 0), s.setRng(u)), s.isCollapsed() || (e => {
                const t = e.dom, n = Eb(e.selection.getRng());
                e.selection.setRng(n);
                const o = t.getParent(n.startContainer, Tb);
                ((e, t, n) => !!C(n) && n === e.getParent(t.endContainer, Tb) && rm(yn(n), t))(t, n, o) ? eb(e, n, yn(o)) : n.startContainer === n.endContainer && n.endOffset - n.startOffset == 1 && er(n.startContainer.childNodes[n.startOffset]) ? n.deleteContents() : e.getDoc().execCommand("Delete", !1)
            })(e);
            const g = s.getNode(), p = {context: g.nodeName.toLowerCase(), data: n.data, insert: !0}, h = i.parse(t, p);
            if (!0 === n.paste && _b(e.schema, h) && ((e, t) => !!Sb(e, t))(a, g)) return u = Rb(d, a, s.getRng(), h), u && s.setRng(u), t;
            !0 === n.paste && ((e, t, n, o) => {
                var r;
                const s = t.firstChild, a = t.lastChild, i = s === ("bookmark" === a.attr("data-mce-type") ? a.prev : a),
                    l = H(Ab, s.name);
                if (i && l) {
                    const t = "false" !== s.attr("contenteditable"),
                        a = (null === (r = e.getParent(n, e.isBlock)) || void 0 === r ? void 0 : r.nodeName.toLowerCase()) === s.name,
                        i = I.from(lb(o, n)).forall(lr);
                    return t && a && i
                }
                return !1
            })(a, h, g, e.getBody()) && (null === (o = h.firstChild) || void 0 === o || o.unwrap()), (e => {
                let t = e;
                for (; t = t.walk();) 1 === t.type && t.attr("data-mce-fragment", "1")
            })(h);
            let b = h.lastChild;
            if (b && "mce_marker" === b.attr("id")) {
                const t = b;
                for (b = b.prev; b; b = b.walk(!0)) if (3 === b.type || !a.isBlock(b.name)) {
                    b.parent && e.schema.isValidChild(b.parent.name, "span") && b.parent.insert(t, b, "br" === b.name);
                    break
                }
            }
            if (e._selectionOverrides.showBlockCaretContainer(g), p.invalid || ((e, t, n) => {
                var o;
                return $(n.children(), mb) && "SUMMARY" === (null === (o = e.getParent(t, e.isBlock)) || void 0 === o ? void 0 : o.nodeName)
            })(a, g, h)) {
                e.selection.setContent(c);
                let n, o = s.getNode();
                const l = e.getBody();
                for (rr(o) ? o = n = l : n = o; n && n !== l;) o = n, n = n.parentNode;
                t = o === l ? l.innerHTML : a.getOuterHTML(o);
                const u = i.parse(t), m = (e => {
                    for (let t = e; t; t = t.walk()) if ("mce_marker" === t.attr("id")) return I.some(t);
                    return I.none()
                })(u), f = m.bind(yb).getOr(u);
                m.each((e => e.replace(h)));
                const g = h.children(), p = null !== (r = h.parent) && void 0 !== r ? r : u;
                h.unwrap();
                const b = Y(g, (t => xb(e.schema, t, p)));
                wb(b, e.schema, f), pb(i.getNodeFilters(), i.getAttributeFilters(), u), t = d.serialize(u), o === l ? a.setHTML(l, t) : a.setOuterHTML(o, t)
            } else t = d.serialize(h), ((e, t, n) => {
                var o;
                if ("all" === n.getAttribute("data-mce-bogus")) null === (o = n.parentNode) || void 0 === o || o.insertBefore(e.dom.createFragment(t), n); else {
                    const o = n.firstChild, r = n.lastChild;
                    !o || o === r && "BR" === o.nodeName ? e.dom.setHTML(n, t) : e.selection.setContent(t, {no_events: !0})
                }
            })(e, t, g);
            var v;
            return ((e, t) => {
                const n = e.schema.getTextInlineElements(), o = e.dom;
                if (t) {
                    const t = e.getBody(), r = ub(e);
                    Pt.each(o.select("*[data-mce-fragment]"), (e => {
                        if (C(n[e.nodeName.toLowerCase()]) && ((e, t) => ne(gp(e, t), (e => !(e => mp.has(e))(e))))(o, e)) for (let n = e.parentElement; C(n) && n !== t && !pp(o, e, n); n = n.parentElement) if (r.compare(n, e)) {
                            o.remove(e, !0);
                            break
                        }
                    }))
                }
            })(e, l), ((e, t) => {
                var n, o, r;
                let s;
                const a = e.dom, i = e.selection;
                if (!t) return;
                i.scrollIntoView(t);
                const l = lb(e.getBody(), t);
                if (l && "false" === a.getContentEditable(l)) return a.remove(t), void i.select(l);
                let d = a.createRng();
                const c = t.previousSibling;
                if (er(c)) {
                    d.setStart(c, null !== (o = null === (n = c.nodeValue) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0);
                    const e = t.nextSibling;
                    er(e) && (c.appendData(e.data), null === (r = e.parentNode) || void 0 === r || r.removeChild(e))
                } else d.setStartBefore(t), d.setEndBefore(t);
                const u = a.getParent(t, a.isBlock);
                if (a.remove(t), u && a.isEmpty(u)) {
                    const t = Tb(u);
                    wo(yn(u)), d.setStart(u, 0), d.setEnd(u, 0), t || (e => !!e.getAttribute("data-mce-fragment"))(u) || !(s = (t => {
                        let n = Vi.fromRangeStart(t);
                        return n = wu(e.getBody()).next(n), null == n ? void 0 : n.toRange()
                    })(d)) ? a.add(u, a.create("br", t ? {} : {"data-mce-bogus": "1"})) : (d = s, a.remove(u))
                }
                i.setRng(d)
            })(e, a.get("mce_marker")), v = e.getBody(), Pt.each(v.getElementsByTagName("*"), (e => {
                e.removeAttribute("data-mce-fragment")
            })), ((e, t, n) => {
                I.from(e.getParent(t, "td,th")).map(yn).each((e => ((e, t) => {
                    Un(e).each((n => {
                        Bn(n).each((o => {
                            t.isBlock(Ht(e)) && Er(n) && t.isBlock(Ht(o)) && xo(n)
                        }))
                    }))
                })(e, n)))
            })(a, s.getStart(), e.schema), ((e, t, n) => {
                const o = On(yn(n), (e => _n(e, yn(t))));
                ie(o, o.length - 2).filter(Wt).fold((() => ks(e, t)), (t => ks(e, t.dom)))
            })(e.schema, e.getBody(), s.getStart()), t
        }, Bb = e => e instanceof Wg, Pb = (e, t, n) => {
            e.dom.setHTML(e.getBody(), t), !0 !== n && (e => {
                Rg(e) && Ou(e.getBody()).each((t => {
                    const n = t.getNode(), o = Qo(n) ? Ou(n).getOr(t) : t;
                    e.selection.setRng(o.toRange())
                }))
            })(e)
        }, Db = e => w(e) ? e : L, Lb = (e, t, n) => {
            const o = t(e), r = Db(n);
            return o.orThunk((() => r(e) ? I.none() : ((e, t, n) => {
                let o = e.dom;
                const r = Db(n);
                for (; o.parentNode;) {
                    o = o.parentNode;
                    const e = yn(o), n = t(e);
                    if (n.isSome()) return n;
                    if (r(e)) break
                }
                return I.none()
            })(e, t, r)))
        }, Mb = ym, Ib = (e, t, n) => {
            const o = e.formatter.get(n);
            if (o) for (let n = 0; n < o.length; n++) {
                const r = o[n];
                if (Sm(r) && !1 === r.inherit && e.dom.is(t, r.selector)) return !0
            }
            return !1
        }, Fb = (e, t, n, o, r) => {
            const s = e.dom.getRoot();
            if (t === s) return !1;
            const a = e.dom.getParent(t, (t => !!Ib(e, t, n) || t.parentNode === s || !!jb(e, t, n, o, !0)));
            return !!jb(e, a, n, o, r)
        },
        Ub = (e, t, n) => !(!Nm(n) || !Mb(t, n.inline)) || !(!km(n) || !Mb(t, n.block)) || !!Sm(n) && qo(t) && e.is(t, n.selector),
        zb = (e, t, n, o, r, s) => {
            const a = n[o], i = "attributes" === o;
            if (w(n.onmatch)) return n.onmatch(t, n, o);
            if (a) if (Se(a)) {
                for (let n = 0; n < a.length; n++) if (i ? e.getAttrib(t, a[n]) : wm(e, t, a[n])) return !0
            } else for (const o in a) if (Ee(a, o)) {
                const l = i ? e.getAttrib(t, o) : wm(e, t, o), d = vm(a[o], s), c = y(l) || Ge(l);
                if (c && y(d)) continue;
                if (r && c && !n.exact) return !1;
                if ((!r || n.exact) && !Mb(l, Cm(d, o))) return !1
            }
            return !0
        }, jb = (e, t, n, o, r) => {
            const s = e.formatter.get(n), a = e.dom;
            if (s && qo(t)) for (let n = 0; n < s.length; n++) {
                const i = s[n];
                if (Ub(e.dom, t, i) && zb(a, t, i, "attributes", r, o) && zb(a, t, i, "styles", r, o)) {
                    const n = i.classes;
                    if (n) for (let r = 0; r < n.length; r++) if (!e.dom.hasClass(t, vm(n[r], o))) return;
                    return i
                }
            }
        }, Hb = (e, t, n, o, r) => {
            if (o) return Fb(e, o, t, n, r);
            if (o = e.selection.getNode(), Fb(e, o, t, n, r)) return !0;
            const s = e.selection.getStart();
            return !(s === o || !Fb(e, s, t, n, r))
        }, $b = Br, qb = e => {
            if (e) {
                const t = new jo(e, e);
                for (let e = t.current(); e; e = t.next()) if (er(e)) return e
            }
            return null
        }, Vb = e => {
            const t = bn("span");
            return Zt(t, {id: Pu, "data-mce-bogus": "1", "data-mce-type": "format-caret"}), e && vo(t, vn($b)), t
        }, Wb = (e, t, n) => {
            const o = e.dom, r = e.selection;
            if (Am(t)) vh(e, !1, yn(t), n, !0); else {
                const e = r.getRng(), n = o.getParent(t, o.isBlock), s = e.startContainer, a = e.startOffset,
                    i = e.endContainer, l = e.endOffset, d = (e => {
                        const t = qb(e);
                        return t && t.data.charAt(0) === $b && t.deleteData(0, 1), t
                    })(t);
                o.remove(t, !0), s === d && a > 0 && e.setStart(d, a - 1), i === d && l > 0 && e.setEnd(d, l - 1), n && o.isEmpty(n) && Or(yn(n)), r.setRng(e)
            }
        }, Kb = (e, t, n) => {
            const o = e.dom, r = e.selection;
            if (t) Wb(e, t, n); else if (!(t = Lu(e.getBody(), r.getStart()))) for (; t = o.get(Pu);) Wb(e, t, n)
        }, Yb = (e, t) => (e.appendChild(t), t), Gb = (e, t) => {
            var n;
            const o = G(e, ((e, t) => Yb(e, t.cloneNode(!1))), t),
                r = null !== (n = o.ownerDocument) && void 0 !== n ? n : document;
            return Yb(o, r.createTextNode($b))
        }, Xb = (e, t, n, o) => {
            const a = e.dom, i = e.selection;
            let l = !1;
            const d = e.formatter.get(t);
            if (!d) return;
            const c = i.getRng(), u = c.startContainer, m = c.startOffset;
            let f = u;
            er(u) && (m !== u.data.length && (l = !0), f = f.parentNode);
            const g = [];
            let h;
            for (; f;) {
                if (jb(e, f, t, n, o)) {
                    h = f;
                    break
                }
                f.nextSibling && (l = !0), g.push(f), f = f.parentNode
            }
            if (h) if (l) {
                const r = i.getBookmark();
                c.collapse(!0);
                let s = Vm(a, c, d, !0);
                s = Ff(s), e.formatter.remove(t, n, s, o), i.moveToBookmark(r)
            } else {
                const l = Lu(e.getBody(), h), d = C(l) ? a.getParents(h.parentNode, M, l) : [], c = Vb(!1).dom;
                ((e, t, n) => {
                    var o, r;
                    const s = e.dom, a = s.getParent(n, T(gm, e.schema));
                    a && s.isEmpty(a) ? null === (o = n.parentNode) || void 0 === o || o.replaceChild(t, n) : ((e => {
                        const t = Uo(e, "br"), n = Y((e => {
                            const t = [];
                            let n = e.dom;
                            for (; n;) t.push(yn(n)), n = n.lastChild;
                            return t
                        })(e).slice(-1), Er);
                        t.length === n.length && V(n, xo)
                    })(yn(n)), s.isEmpty(n) ? null === (r = n.parentNode) || void 0 === r || r.replaceChild(t, n) : s.insertAfter(t, n))
                })(e, c, null != l ? l : h);
                const u = ((e, t, n, o, a, i) => {
                    const l = e.formatter, d = e.dom, c = Y(me(l.get()), (e => e !== o && !je(e, "removeformat"))),
                        u = ((e, t, n) => X(n, ((n, o) => {
                            const r = ((e, t) => _m(e, t, (e => {
                                const t = e => w(e) || e.length > 1 && "%" === e.charAt(0);
                                return $(["styles", "attributes"], (n => xe(e, n).exists((e => {
                                    const n = p(e) ? e : we(e);
                                    return $(n, t)
                                }))))
                            })))(e, o);
                            return e.formatter.matchNode(t, o, {}, r) ? n.concat([o]) : n
                        }), []))(e, n, c);
                    if (Y(u, (t => !((e, t, n) => {
                        const o = ["inline", "block", "selector", "attributes", "styles", "classes"],
                            a = e => ye(e, ((e, t) => $(o, (e => e === t))));
                        return _m(e, t, (t => {
                            const o = a(t);
                            return _m(e, n, (e => {
                                const t = a(e);
                                return ((e, t, n = s) => r(n).eq(e, t))(o, t)
                            }))
                        }))
                    })(e, t, o))).length > 0) {
                        const e = n.cloneNode(!1);
                        return d.add(t, e), l.remove(o, a, e, i), d.remove(e), I.some(e)
                    }
                    return I.none()
                })(e, c, h, t, n, o), m = Gb([...g, ...u.toArray(), ...d], c);
                l && Wb(e, l, C(l)), i.setCursorLocation(m, 1), a.isEmpty(h) && a.remove(h)
            }
        }, Qb = e => {
            const t = Vb(!1), n = Gb(e, t.dom);
            return {caretContainer: t, caretPosition: Vi(n, 0)}
        }, Jb = (e, t) => {
            const {caretContainer: n, caretPosition: o} = Qb(t);
            return po(yn(e), n), xo(yn(e)), o
        }, Zb = (e, t) => {
            if (Du(t.dom)) return !1;
            const n = e.schema.getTextInlineElements();
            return Ee(n, Ht(t)) && !Du(t.dom) && !Xo(t.dom)
        }, ev = {}, tv = Ko(["pre"]);
    ((e, t) => {
        ev[e] || (ev[e] = []), ev[e].push((e => {
            if (!e.selection.getRng().collapsed) {
                const t = e.selection.getSelectedBlocks(), n = Y(Y(t, tv), (e => t => {
                    const n = t.previousSibling;
                    return tv(n) && H(e, n)
                })(t));
                V(n, (e => {
                    ((e, t) => {
                        const n = yn(t), o = Nn(n).dom;
                        xo(n), Co(yn(e), [bn("br", o), bn("br", o), ...Mn(n)])
                    })(e.previousSibling, e)
                }))
            }
        }))
    })("pre");
    const nv = ["fontWeight", "fontStyle", "color", "fontSize", "fontFamily"], ov = (e, t) => {
            const n = e.get(t);
            return p(n) ? J(n, (e => Nm(e) && "span" === e.inline && (e => f(e.styles) && $(me(e.styles), (e => H(nv, e))))(e))) : I.none()
        }, rv = (e, t) => Tu(t, Vi.fromRangeStart(e)).isNone(),
        sv = (e, t) => !1 === Au(t, Vi.fromRangeEnd(e)).exists((e => !ar(e.getNode()) || Au(t, e).isSome())),
        av = e => t => fr(t) && e.isEditable(t), iv = e => Y(e.getSelectedBlocks(), av(e.dom)), lv = Pt.each,
        dv = e => qo(e) && !Ku(e) && !Du(e) && !Xo(e), cv = (e, t) => {
            for (let n = e; n; n = n[t]) {
                if (er(n) && Ye(n.data)) return e;
                if (qo(n) && !Ku(n)) return n
            }
            return e
        }, uv = (e, t, n) => {
            const o = ub(e), r = Vo(t) && e.dom.isEditable(t), s = Vo(n) && e.dom.isEditable(n);
            if (r && s) {
                const r = cv(t, "previousSibling"), s = cv(n, "nextSibling");
                if (o.compare(r, s)) {
                    for (let e = r.nextSibling; e && e !== s;) {
                        const t = e;
                        e = e.nextSibling, r.appendChild(t)
                    }
                    return e.dom.remove(s), Pt.each(Pt.grep(s.childNodes), (e => {
                        r.appendChild(e)
                    })), r
                }
            }
            return n
        }, mv = (e, t, n, o) => {
            var r;
            if (o && !1 !== t.merge_siblings) {
                const t = null !== (r = uv(e, fm(o), o)) && void 0 !== r ? r : o;
                uv(e, t, fm(t, !0))
            }
        }, fv = (e, t, n) => {
            lv(e.childNodes, (e => {
                dv(e) && (t(e) && n(e), e.hasChildNodes() && fv(e, t, n))
            }))
        }, gv = (e, t) => n => !(!n || !wm(e, n, t)), pv = (e, t, n) => o => {
            e.setStyle(o, t, n), "" === o.getAttribute("style") && o.removeAttribute("style"), ((e, t) => {
                "SPAN" === t.nodeName && 0 === e.getAttribs(t).length && e.remove(t, !0)
            })(e, o)
        }, hv = hl([{keep: []}, {rename: ["name"]}, {removed: []}]), bv = /^(src|href|style)$/, vv = Pt.each, yv = ym,
        Cv = (e, t, n) => e.isChildOf(t, n) && t !== n && !e.isBlock(n), wv = (e, t, n) => {
            let o = t[n ? "startContainer" : "endContainer"], r = t[n ? "startOffset" : "endOffset"];
            if (qo(o)) {
                const e = o.childNodes.length - 1;
                !n && r && r--, o = o.childNodes[r > e ? e : r]
            }
            return er(o) && n && r >= o.data.length && (o = new jo(o, e.getBody()).next() || o), er(o) && !n && 0 === r && (o = new jo(o, e.getBody()).prev() || o), o
        }, xv = (e, t) => {
            const n = t ? "firstChild" : "lastChild", o = e[n];
            return (e => /^(TR|TH|TD)$/.test(e.nodeName))(e) && o ? "TR" === e.nodeName && o[n] || o : e
        }, Ev = (e, t, n, o) => {
            var r;
            const s = e.create(n, o);
            return null === (r = t.parentNode) || void 0 === r || r.insertBefore(s, t), s.appendChild(t), s
        }, _v = (e, t, n, o, r) => {
            const s = yn(t), a = yn(e.create(o, r)), i = n ? Ln(s) : Dn(s);
            return Co(a, i), n ? (po(s, a), bo(a, s)) : (ho(s, a), vo(a, s)), a.dom
        }, kv = (e, t, n) => {
            const o = t.parentNode;
            let r;
            const s = e.dom, a = Il(e);
            km(n) && o === s.getRoot() && (n.list_block && yv(t, n.list_block) || V(ce(t.childNodes), (t => {
                pm(e, a, t.nodeName.toLowerCase()) ? r ? r.appendChild(t) : (r = Ev(s, t, a), s.setAttribs(r, Fl(e))) : r = null
            }))), (e => Sm(e) && Nm(e) && Dt(xe(e, "mixed"), !0))(n) && !yv(n.inline, t) || s.remove(t, !0)
        }, Sv = (e, t, n) => x(e) ? {name: t, value: null} : {name: e, value: vm(t, n)}, Nv = (e, t) => {
            "" === e.getAttrib(t, "style") && (t.removeAttribute("style"), t.removeAttribute("data-mce-style"))
        }, Rv = (e, t, n, o, r) => {
            let s = !1;
            vv(n.styles, ((a, i) => {
                const {name: l, value: d} = Sv(i, a, o), c = Cm(d, l);
                (n.remove_similar || h(d) || !qo(r) || yv(wm(e, r, l), c)) && e.setStyle(t, l, ""), s = !0
            })), s && Nv(e, t)
        }, Av = (e, t, n, o, r) => {
            const s = e.dom, a = ub(e), i = e.schema;
            if (Nm(t) && Rs(i, t.inline) && Ts(i, o) && o.parentElement === e.getBody()) return kv(e, o, t), hv.removed();
            if (!t.ceFalseOverride && o && "false" === s.getContentEditableParent(o)) return hv.keep();
            if (o && !Ub(s, o, t) && !((e, t) => t.links && "A" === e.nodeName)(o, t)) return hv.keep();
            const l = o, d = t.preserve_attributes;
            if (Nm(t) && "all" === t.remove && p(d)) {
                const e = Y(s.getAttribs(l), (e => H(d, e.name.toLowerCase())));
                if (s.removeAllAttribs(l), V(e, (e => s.setAttrib(l, e.name, e.value))), e.length > 0) return hv.rename("span")
            }
            if ("all" !== t.remove) {
                Rv(s, l, t, n, r), vv(t.attributes, ((e, o) => {
                    const {name: a, value: i} = Sv(o, e, n);
                    if (t.remove_similar || h(i) || !qo(r) || yv(s.getAttrib(r, a), i)) {
                        if ("class" === a) {
                            const e = s.getAttrib(l, a);
                            if (e) {
                                let t = "";
                                if (V(e.split(/\s+/), (e => {
                                    /mce\-\w+/.test(e) && (t += (t ? " " : "") + e)
                                })), t) return void s.setAttrib(l, a, t)
                            }
                        }
                        if (bv.test(a) && l.removeAttribute("data-mce-" + a), "style" === a && Ko(["li"])(l) && "none" === s.getStyle(l, "list-style-type")) return l.removeAttribute(a), void s.setStyle(l, "list-style-type", "none");
                        "class" === a && l.removeAttribute("className"), l.removeAttribute(a)
                    }
                })), vv(t.classes, (e => {
                    e = vm(e, n), qo(r) && !s.hasClass(r, e) || s.removeClass(l, e)
                }));
                const e = s.getAttribs(l);
                for (let t = 0; t < e.length; t++) {
                    const n = e[t].nodeName;
                    if (!a.isAttributeInternal(n)) return hv.keep()
                }
            }
            return "none" !== t.remove ? (kv(e, l, t), hv.removed()) : hv.keep()
        },
        Tv = (e, t, n, o) => Av(e, t, n, o, o).fold(N(o), (t => (e.dom.createFragment().appendChild(o), e.dom.rename(o, t))), N(null)),
        Ov = (e, t, n, o, r) => {
            (o || e.selection.isEditable()) && ((e, t, n, o, r) => {
                const s = e.formatter.get(t), a = s[0], i = e.dom, l = e.selection, d = o => {
                    const i = ((e, t, n, o, r) => {
                        let s;
                        return t.parentNode && V(Em(e.dom, t.parentNode).reverse(), (t => {
                            if (!s && qo(t) && "_start" !== t.id && "_end" !== t.id) {
                                const a = jb(e, t, n, o, r);
                                a && !1 !== a.split && (s = t)
                            }
                        })), s
                    })(e, o, t, n, r);
                    return ((e, t, n, o, r, s, a, i) => {
                        var l, d;
                        let c, u;
                        const m = e.dom;
                        if (n) {
                            const s = n.parentNode;
                            for (let n = o.parentNode; n && n !== s; n = n.parentNode) {
                                let o = m.clone(n, !1);
                                for (let n = 0; n < t.length && (o = Tv(e, t[n], i, o), null !== o); n++) ;
                                o && (c && o.appendChild(c), u || (u = o), c = o)
                            }
                            a.mixed && m.isBlock(n) || (o = null !== (l = m.split(n, o)) && void 0 !== l ? l : o), c && u && (null === (d = r.parentNode) || void 0 === d || d.insertBefore(c, r), u.appendChild(r), Nm(a) && mv(e, a, 0, c))
                        }
                        return o
                    })(e, s, i, o, o, 0, a, n)
                }, c = t => $(s, (o => Bv(e, o, n, t, t))), u = t => {
                    const n = ce(t.childNodes), o = c(t) || $(s, (e => Ub(i, t, e))), r = t.parentNode;
                    if (!o && C(r) && Rm(a) && c(r), a.deep && n.length) for (let e = 0; e < n.length; e++) u(n[e]);
                    V(["underline", "line-through", "overline"], (n => {
                        qo(t) && e.dom.getStyle(t, "text-decoration") === n && t.parentNode && xm(i, t.parentNode) === n && Bv(e, {
                            deep: !1,
                            exact: !0,
                            inline: "span",
                            styles: {textDecoration: n}
                        }, void 0, t)
                    }))
                }, m = e => {
                    const t = i.get(e ? "_start" : "_end");
                    if (t) {
                        let n = t[e ? "firstChild" : "lastChild"];
                        return (e => Ku(e) && qo(e) && ("_start" === e.id || "_end" === e.id))(n) && (n = n[e ? "firstChild" : "lastChild"]), er(n) && 0 === n.data.length && (n = e ? t.previousSibling || t.nextSibling : t.nextSibling || t.previousSibling), i.remove(t, !0), n
                    }
                    return null
                }, f = t => {
                    let n, o, r = Vm(i, t, s, t.collapsed);
                    if (a.split) {
                        if (r = Ff(r), n = wv(e, r, !0), o = wv(e, r), n !== o) {
                            if (n = xv(n, !0), o = xv(o, !1), Cv(i, n, o)) {
                                const e = I.from(n.firstChild).getOr(n);
                                return d(_v(i, e, !0, "span", {id: "_start", "data-mce-type": "bookmark"})), void m(!0)
                            }
                            if (Cv(i, o, n)) {
                                const e = I.from(o.lastChild).getOr(o);
                                return d(_v(i, e, !1, "span", {id: "_end", "data-mce-type": "bookmark"})), void m(!1)
                            }
                            n = Ev(i, n, "span", {
                                id: "_start",
                                "data-mce-type": "bookmark"
                            }), o = Ev(i, o, "span", {id: "_end", "data-mce-type": "bookmark"});
                            const e = i.createRng();
                            e.setStartAfter(n), e.setEndBefore(o), Wm(i, e, (e => {
                                V(e, (e => {
                                    Ku(e) || Ku(e.parentNode) || d(e)
                                }))
                            })), d(n), d(o), n = m(!0), o = m()
                        } else n = o = d(n);
                        r.startContainer = n.parentNode ? n.parentNode : n, r.startOffset = i.nodeIndex(n), r.endContainer = o.parentNode ? o.parentNode : o, r.endOffset = i.nodeIndex(o) + 1
                    }
                    Wm(i, r, (e => {
                        V(e, u)
                    }))
                };
                if (o) {
                    if (dm(o)) {
                        const e = i.createRng();
                        e.setStartBefore(o), e.setEndAfter(o), f(e)
                    } else f(o);
                    nf(e, t, o, n)
                } else l.isCollapsed() && Nm(a) && !em(e).length ? Xb(e, t, n, r) : (um(e, (() => im(e, f)), (o => Nm(a) && Hb(e, t, n, o))), e.nodeChanged()), ((e, t, n) => {
                    "removeformat" === t ? V(iv(e.selection), (t => {
                        V(nv, (n => e.dom.setStyle(t, n, ""))), Nv(e.dom, t)
                    })) : ov(e.formatter, t).each((t => {
                        V(iv(e.selection), (o => Rv(e.dom, o, t, n, null)))
                    }))
                })(e, t, n), nf(e, t, o, n)
            })(e, t, n, o, r)
        }, Bv = (e, t, n, o, r) => Av(e, t, n, o, r).fold(L, (t => (e.dom.rename(o, t), !0)), M), Pv = Pt.each,
        Dv = Pt.each, Lv = (e, t, n, o) => {
            if (Dv(n.styles, ((n, r) => {
                e.setStyle(t, r, vm(n, o))
            })), n.styles) {
                const n = e.getAttrib(t, "style");
                n && e.setAttrib(t, "data-mce-style", n)
            }
        }, Mv = (e, t, n, o) => {
            const r = e.formatter.get(t), s = r[0], a = !o && e.selection.isCollapsed(), i = e.dom, l = e.selection,
                d = (e, t = s) => {
                    w(t.onformat) && t.onformat(e, t, n, o), Lv(i, e, t, n), Dv(t.attributes, ((t, o) => {
                        i.setAttrib(e, o, vm(t, n))
                    })), Dv(t.classes, (t => {
                        const o = vm(t, n);
                        i.hasClass(e, o) || i.addClass(e, o)
                    }))
                }, c = (e, t) => {
                    let n = !1;
                    return Dv(e, (e => !(!Sm(e) || ("false" !== i.getContentEditable(t) || e.ceFalseOverride) && (!C(e.collapsed) || e.collapsed === a) && i.is(t, e.selector) && !Du(t) && (d(t, e), n = !0, 1)))), n
                }, u = e => {
                    if (m(e)) {
                        const t = i.create(e);
                        return d(t), t
                    }
                    return null
                }, f = (o, a, i) => {
                    const l = [];
                    let m = !0;
                    const f = s.inline || s.block, g = u(f);
                    Wm(o, a, (a => {
                        let u;
                        const p = a => {
                            let h = !1, b = m, v = !1;
                            const y = a.parentNode, w = y.nodeName.toLowerCase(), x = o.getContentEditable(a);
                            C(x) && (b = m, m = "true" === x, h = !0, v = bm(e, a));
                            const E = m && !h;
                            if (ar(a) && !((e, t, n, o) => {
                                if (xd(e) && Nm(t) && n.parentNode) {
                                    const t = da(e.schema), r = Dh(yn(n), (e => Du(e.dom)));
                                    return _e(t, o) && gs(yn(n.parentNode), !1) && !r
                                }
                                return !1
                            })(e, s, a, w)) return u = null, void (km(s) && o.remove(a));
                            if ((o => (e => km(e) && !0 === e.wrapper)(s) && jb(e, o, t, n))(a)) u = null; else {
                                if (((t, n, o) => {
                                    const r = (e => km(e) && !0 !== e.wrapper)(s) && gm(e.schema, t) && pm(e, n, f);
                                    return o && r
                                })(a, w, E)) {
                                    const e = o.rename(a, f);
                                    return d(e), l.push(e), void (u = null)
                                }
                                if (Sm(s)) {
                                    let e = c(r, a);
                                    if (!e && C(y) && Rm(s) && (e = c(r, y)), !Nm(s) || e) return void (u = null)
                                }
                                C(g) && ((t, n, r, a) => {
                                    const l = t.nodeName.toLowerCase(), d = pm(e, f, l) && pm(e, n, f),
                                        c = !i && er(t) && Pr(t.data), u = Du(t), m = !Nm(s) || !o.isBlock(t);
                                    return (r || a) && d && !c && !u && m
                                })(a, w, E, v) ? (u || (u = o.clone(g, !1), y.insertBefore(u, a), l.push(u)), v && h && (m = b), u.appendChild(a)) : (u = null, V(ce(a.childNodes), p), h && (m = b), u = null)
                            }
                        };
                        V(a, p)
                    })), !0 === s.links && V(l, (e => {
                        const t = e => {
                            "A" === e.nodeName && d(e, s), V(ce(e.childNodes), t)
                        };
                        t(e)
                    })), V(l, (a => {
                        const i = (e => {
                            let t = 0;
                            return V(e.childNodes, (e => {
                                (e => C(e) && er(e) && 0 === e.length)(e) || Ku(e) || t++
                            })), t
                        })(a);
                        !(l.length > 1) && o.isBlock(a) || 0 !== i ? (Nm(s) || km(s) && s.wrapper) && (s.exact || 1 !== i || (a = (e => {
                            const t = J(e.childNodes, cm).filter((e => "false" !== o.getContentEditable(e) && Ub(o, e, s)));
                            return t.map((t => {
                                const n = o.clone(t, !1);
                                return d(n), o.replace(n, e, !0), o.remove(t, !0), n
                            })).getOr(e)
                        })(a)), ((e, t, n, o) => {
                            Pv(t, (t => {
                                Nm(t) && Pv(e.dom.select(t.inline, o), (o => {
                                    dv(o) && Bv(e, t, n, o, t.exact ? o : null)
                                })), ((e, t, n) => {
                                    if (t.clear_child_styles) {
                                        const o = t.links ? "*:not(a)" : "*";
                                        lv(e.select(o, n), (n => {
                                            dv(n) && e.isEditable(n) && lv(t.styles, ((t, o) => {
                                                e.setStyle(n, o, "")
                                            }))
                                        }))
                                    }
                                })(e.dom, t, o)
                            }))
                        })(e, r, n, a), ((e, t, n, o, r) => {
                            const s = r.parentNode;
                            jb(e, s, n, o) && Bv(e, t, o, r) || t.merge_with_parents && s && e.dom.getParent(s, (s => !!jb(e, s, n, o) && (Bv(e, t, o, r), !0)))
                        })(e, s, t, n, a), ((e, t, n, o) => {
                            if (t.styles && t.styles.backgroundColor) {
                                const r = gv(e, "fontSize");
                                fv(o, (t => r(t) && e.isEditable(t)), pv(e, "backgroundColor", vm(t.styles.backgroundColor, n)))
                            }
                        })(o, s, n, a), ((e, t, n, o) => {
                            const r = t => {
                                if (Vo(t) && qo(t.parentNode) && e.isEditable(t)) {
                                    const n = xm(e, t.parentNode);
                                    e.getStyle(t, "color") && n ? e.setStyle(t, "text-decoration", n) : e.getStyle(t, "text-decoration") === n && e.setStyle(t, "text-decoration", null)
                                }
                            };
                            t.styles && (t.styles.color || t.styles.textDecoration) && (Pt.walk(o, r, "childNodes"), r(o))
                        })(o, s, 0, a), ((e, t, n, o) => {
                            if (Nm(t) && ("sub" === t.inline || "sup" === t.inline)) {
                                const n = gv(e, "fontSize");
                                fv(o, (t => n(t) && e.isEditable(t)), pv(e, "fontSize", ""));
                                const r = Y(e.select("sup" === t.inline ? "sub" : "sup", o), e.isEditable);
                                e.remove(r, !0)
                            }
                        })(o, s, 0, a), mv(e, s, 0, a)) : o.remove(a, !0)
                    }))
                }, g = dm(o) ? o : l.getNode();
            if ("false" === i.getContentEditable(g) && !bm(e, g)) return c(r, o = g), void tf(e, t, o, n);
            if (s) {
                if (o) if (dm(o)) {
                    if (!c(r, o)) {
                        const e = i.createRng();
                        e.setStartBefore(o), e.setEndAfter(o), f(i, Vm(i, e, r), !0)
                    }
                } else f(i, o, !0); else a && Nm(s) && !em(e).length ? ((e, t, n) => {
                    let o;
                    const r = e.selection, s = e.formatter.get(t);
                    if (!s) return;
                    const a = r.getRng();
                    let i = a.startOffset;
                    const l = a.startContainer.nodeValue;
                    o = Lu(e.getBody(), r.getStart());
                    const d = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                    if (l && i > 0 && i < l.length && d.test(l.charAt(i)) && d.test(l.charAt(i - 1))) {
                        const o = r.getBookmark();
                        a.collapse(!0);
                        let i = Vm(e.dom, a, s);
                        i = Ff(i), e.formatter.apply(t, n, i), r.moveToBookmark(o)
                    } else {
                        let s = o ? qb(o) : null;
                        o && (null == s ? void 0 : s.data) === $b || (c = e.getDoc(), u = Vb(!0).dom, o = c.importNode(u, !0), s = o.firstChild, a.insertNode(o), i = 1), e.formatter.apply(t, n, o), r.setCursorLocation(s, i)
                    }
                    var c, u
                })(e, t, n) : (l.setRng(Eb(l.getRng())), um(e, (() => {
                    im(e, ((e, t) => {
                        const n = t ? e : Vm(i, e, r);
                        f(i, n, !1)
                    }))
                }), M), e.nodeChanged()), ov(e.formatter, t).each((t => {
                    V((e => Y((e => {
                        const t = e.getSelectedBlocks(), n = e.getRng();
                        if (e.isCollapsed()) return [];
                        if (1 === t.length) return rv(n, t[0]) && sv(n, t[0]) ? t : [];
                        {
                            const e = le(t).filter((e => rv(n, e))).toArray(), o = de(t).filter((e => sv(n, e))).toArray(),
                                r = t.slice(1, -1);
                            return e.concat(r).concat(o)
                        }
                    })(e), av(e.dom)))(e.selection), (e => Lv(i, e, t, n)))
                }));
                ((e, t) => {
                    Ee(ev, e) && V(ev[e], (e => {
                        e(t)
                    }))
                })(t, e)
            }
            tf(e, t, o, n)
        }, Iv = (e, t, n, o) => {
            (o || e.selection.isEditable()) && Mv(e, t, n, o)
        }, Fv = e => Ee(e, "vars"), Uv = e => e.selection.getStart(), zv = (e, t, n, o, r) => Q(t, (t => {
            const s = e.formatter.matchNode(t, n, null != r ? r : {}, o);
            return !v(s)
        }), (t => !!Ib(e, t, n) || !o && C(e.formatter.matchNode(t, n, r, !0)))), jv = (e, t) => {
            const n = null != t ? t : Uv(e);
            return Y(Em(e.dom, n), (e => qo(e) && !Xo(e)))
        }, Hv = (e, t, n) => {
            const o = jv(e, t);
            ge(n, ((n, r) => {
                const s = n => {
                    const s = zv(e, o, r, n.similar, Fv(n) ? n.vars : void 0), a = s.isSome();
                    if (n.state.get() !== a) {
                        n.state.set(a);
                        const e = s.getOr(t);
                        Fv(n) ? n.callback(a, {node: e, format: r, parents: o}) : V(n.callbacks, (t => t(a, {
                            node: e,
                            format: r,
                            parents: o
                        })))
                    }
                };
                V([n.withSimilar, n.withoutSimilar], s), V(n.withVars, s)
            }))
        }, $v = Pt.explode, qv = () => {
            const e = {};
            return {
                addFilter: (t, n) => {
                    V($v(t), (t => {
                        Ee(e, t) || (e[t] = {name: t, callbacks: []}), e[t].callbacks.push(n)
                    }))
                }, getFilters: () => we(e), removeFilter: (t, n) => {
                    V($v(t), (t => {
                        if (Ee(e, t)) if (C(n)) {
                            const o = e[t], r = Y(o.callbacks, (e => e !== n));
                            r.length > 0 ? o.callbacks = r : delete e[t]
                        } else delete e[t]
                    }))
                }
            }
        }, Vv = (e, t, n) => {
            var o;
            const r = wa();
            t.convert_fonts_to_spans && ((e, t, n) => {
                e.addNodeFilter("font", (e => {
                    V(e, (e => {
                        const o = t.parse(e.attr("style")), r = e.attr("color"), s = e.attr("face"), a = e.attr("size");
                        r && (o.color = r), s && (o["font-family"] = s), a && Xe(a).each((e => {
                            o["font-size"] = n[e - 1]
                        })), e.name = "span", e.attr("style", t.serialize(o)), ((e, t) => {
                            V(["color", "face", "size"], (t => {
                                e.attr(t, null)
                            }))
                        })(e)
                    }))
                }))
            })(e, r, Pt.explode(null !== (o = t.font_size_legacy_values) && void 0 !== o ? o : "")), ((e, t, n) => {
                e.addNodeFilter("strike", (e => {
                    const o = "html4" !== t.type;
                    V(e, (e => {
                        if (o) e.name = "s"; else {
                            const t = n.parse(e.attr("style"));
                            t["text-decoration"] = "line-through", e.name = "span", e.attr("style", n.serialize(t))
                        }
                    }))
                }))
            })(e, n, r)
        }, Wv = (e, t, n) => {
            t.addNodeFilter("br", ((t, o, r) => {
                const s = Pt.extend({}, n.getBlockElements()), a = n.getNonEmptyElements(), i = n.getWhitespaceElements();
                s.body = 1;
                const l = e => e.name in s || Bs(n, e);
                for (let o = 0, d = t.length; o < d; o++) {
                    let d = t[o], c = d.parent;
                    if (c && l(c) && d === c.lastChild) {
                        let t = d.prev;
                        for (; t;) {
                            const e = t.name;
                            if ("span" !== e || "bookmark" !== t.attr("data-mce-type")) {
                                "br" === e && (d = null);
                                break
                            }
                            t = t.prev
                        }
                        if (d && (d.remove(), vb(n, a, i, c))) {
                            const t = n.getElementRule(c.name);
                            t && (t.removeEmpty ? c.remove() : t.paddEmpty && hb(e, r, l, c))
                        }
                    } else {
                        let e = d;
                        for (; c && c.firstChild === e && c.lastChild === e && (e = c, !s[c.name]);) c = c.parent;
                        if (e === c) {
                            const e = new Wg("#text", 3);
                            e.value = br, d.replace(e)
                        }
                    }
                }
            }))
        }, Kv = e => {
            const [t, ...n] = e.split(","), o = n.join(","), r = /data:([^/]+\/[^;]+)(;.+)?/.exec(t);
            if (r) {
                const e = ";base64" === r[2], t = e ? (e => {
                    const t = /([a-z0-9+\/=\s]+)/i.exec(e);
                    return t ? t[1] : ""
                })(o) : decodeURIComponent(o);
                return I.some({type: r[1], data: t, base64Encoded: e})
            }
            return I.none()
        }, Yv = (e, t, n = !0) => {
            let o = t;
            if (n) try {
                o = atob(t)
            } catch (e) {
                return I.none()
            }
            const r = new Uint8Array(o.length);
            for (let e = 0; e < r.length; e++) r[e] = o.charCodeAt(e);
            return I.some(new Blob([r], {type: e}))
        }, Gv = e => new Promise(((t, n) => {
            const o = new FileReader;
            o.onloadend = () => {
                t(o.result)
            }, o.onerror = () => {
                var e;
                n(null === (e = o.error) || void 0 === e ? void 0 : e.message)
            }, o.readAsDataURL(e)
        }));
    let Xv = 0;
    const Qv = (e, t, n) => Kv(e).bind((({data: e, type: o, base64Encoded: r}) => {
            if (t && !r) return I.none();
            {
                const t = r ? e : btoa(e);
                return n(t, o)
            }
        })), Jv = (e, t, n) => {
            const o = e.create("blobid" + Xv++, t, n);
            return e.add(o), o
        },
        Zv = (e, t, n = !1) => Qv(t, n, ((t, n) => I.from(e.getByData(t, n)).orThunk((() => Yv(n, t).map((n => Jv(e, n, t))))))),
        ey = (e, t) => He(e, `${t}/`), ty = (e, t) => {
            const n = e.schema;
            t.remove_trailing_brs && Wv(t, e, n), e.addAttributeFilter("href", (e => {
                let n = e.length;
                const o = e => {
                    const t = e ? Pt.trim(e) : "";
                    return /\b(noopener)\b/g.test(t) ? t : (e => e.split(" ").filter((e => e.length > 0)).concat(["noopener"]).sort().join(" "))(t)
                };
                if (!t.allow_unsafe_link_target) for (; n--;) {
                    const t = e[n];
                    "a" === t.name && "_blank" === t.attr("target") && t.attr("rel", o(t.attr("rel")))
                }
            })), t.allow_html_in_named_anchor || e.addAttributeFilter("id,name", (e => {
                let t, n, o, r, s = e.length;
                for (; s--;) if (r = e[s], "a" === r.name && r.firstChild && !r.attr("href")) for (o = r.parent, t = r.lastChild; t && o;) n = t.prev, o.insert(t, r), t = n
            })), t.fix_list_elements && e.addNodeFilter("ul,ol", (e => {
                let t, n, o = e.length;
                for (; o--;) if (t = e[o], n = t.parent, n && ("ul" === n.name || "ol" === n.name)) if (t.prev && "li" === t.prev.name) t.prev.append(t); else {
                    const e = new Wg("li", 1);
                    e.attr("style", "list-style-type: none"), t.wrap(e)
                }
            }));
            const o = n.getValidClasses();
            t.validate && o && e.addAttributeFilter("class", (e => {
                var t;
                let n = e.length;
                for (; n--;) {
                    const r = e[n], s = null !== (t = r.attr("class")) && void 0 !== t ? t : "", a = Pt.explode(s, " ");
                    let i = "";
                    for (let e = 0; e < a.length; e++) {
                        const t = a[e];
                        let n = !1, s = o["*"];
                        s && s[t] && (n = !0), s = o[r.name], !n && s && s[t] && (n = !0), n && (i && (i += " "), i += t)
                    }
                    i.length || (i = null), r.attr("class", i)
                }
            })), ((e, t) => {
                const {blob_cache: n} = t;
                if (n) {
                    const t = e => {
                        const t = e.attr("src");
                        (e => e.attr("src") === At.transparentSrc || C(e.attr("data-mce-placeholder")))(e) || (e => C(e.attr("data-mce-bogus")))(e) || y(t) || Zv(n, t, !0).each((t => {
                            e.attr("src", t.blobUri())
                        }))
                    };
                    e.addAttributeFilter("src", (e => V(e, t)))
                }
            })(e, t), t.convert_unsafe_embeds && e.addNodeFilter("object,embed", (e => V(e, (e => {
                e.replace(((e, t, n, o, r) => {
                    let s;
                    s = v(e) ? "iframe" : ey(e, "image") ? "img" : ey(e, "video") ? "video" : ey(e, "audio") ? "audio" : "iframe";
                    const a = new Wg(s, 1);
                    return a.attr("audio" === s ? {src: t} : {
                        src: t,
                        width: n,
                        height: o
                    }), "audio" !== s && "video" !== s || a.attr("controls", ""), "iframe" === s && r && a.attr("sandbox", ""), a
                })(e.attr("type"), "object" === e.name ? e.attr("data") : e.attr("src"), e.attr("width"), e.attr("height"), t.sandbox_iframes))
            })))), t.sandbox_iframes && e.addNodeFilter("iframe", (e => V(e, (e => e.attr("sandbox", "")))))
        }, {entries: ny, setPrototypeOf: oy, isFrozen: ry, getPrototypeOf: sy, getOwnPropertyDescriptor: ay} = Object;
    let {freeze: iy, seal: ly, create: dy} = Object, {apply: cy, construct: uy} = "undefined" != typeof Reflect && Reflect;
    cy || (cy = function (e, t, n) {
        return e.apply(t, n)
    }), iy || (iy = function (e) {
        return e
    }), ly || (ly = function (e) {
        return e
    }), uy || (uy = function (e, t) {
        return new e(...t)
    });
    const my = _y(Array.prototype.forEach), fy = _y(Array.prototype.pop), gy = _y(Array.prototype.push),
        py = _y(String.prototype.toLowerCase), hy = _y(String.prototype.toString), by = _y(String.prototype.match),
        vy = _y(String.prototype.replace), yy = _y(String.prototype.indexOf), Cy = _y(String.prototype.trim),
        wy = _y(RegExp.prototype.test), xy = (Ey = TypeError, function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return uy(Ey, t)
        });
    var Ey;

    function _y(e) {
        return function (t) {
            for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
            return cy(e, t, o)
        }
    }

    function ky(e, t, n) {
        var o;
        n = null !== (o = n) && void 0 !== o ? o : py, oy && oy(e, null);
        let r = t.length;
        for (; r--;) {
            let o = t[r];
            if ("string" == typeof o) {
                const e = n(o);
                e !== o && (ry(t) || (t[r] = e), o = e)
            }
            e[o] = !0
        }
        return e
    }

    function Sy(e) {
        const t = dy(null);
        for (const [n, o] of ny(e)) t[n] = o;
        return t
    }

    function Ny(e, t) {
        for (; null !== e;) {
            const n = ay(e, t);
            if (n) {
                if (n.get) return _y(n.get);
                if ("function" == typeof n.value) return _y(n.value)
            }
            e = sy(e)
        }
        return function (e) {
            return console.warn("fallback value for", e), null
        }
    }

    const Ry = iy(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
        Ay = iy(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
        Ty = iy(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
        Oy = iy(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
        By = iy(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
        Py = iy(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
        Dy = iy(["#text"]),
        Ly = iy(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
        My = iy(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
        Iy = iy(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
        Fy = iy(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
        Uy = ly(/\{\{[\w\W]*|[\w\W]*\}\}/gm), zy = ly(/<%[\w\W]*|[\w\W]*%>/gm), jy = ly(/\${[\w\W]*}/gm),
        Hy = ly(/^data-[\-\w.\u00B7-\uFFFF]/), $y = ly(/^aria-[\-\w]+$/),
        qy = ly(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
        Vy = ly(/^(?:\w+script|data):/i), Wy = ly(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        Ky = ly(/^html$/i);
    var Yy = Object.freeze({
        __proto__: null,
        MUSTACHE_EXPR: Uy,
        ERB_EXPR: zy,
        TMPLIT_EXPR: jy,
        DATA_ATTR: Hy,
        ARIA_ATTR: $y,
        IS_ALLOWED_URI: qy,
        IS_SCRIPT_OR_DATA: Vy,
        ATTR_WHITESPACE: Wy,
        DOCTYPE_NAME: Ky
    });
    const Gy = () => "undefined" == typeof window ? null : window;
    var Xy = function e() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gy();
        const n = t => e(t);
        if (n.version = "3.0.5", n.removed = [], !t || !t.document || 9 !== t.document.nodeType) return n.isSupported = !1, n;
        const o = t.document, r = o.currentScript;
        let {document: s} = t;
        const {DocumentFragment: a, HTMLTemplateElement: i, Node: l, Element: d, NodeFilter: c, NamedNodeMap: u = t.NamedNodeMap || t.MozNamedAttrMap, HTMLFormElement: m, DOMParser: f, trustedTypes: g} = t,
            p = d.prototype, h = Ny(p, "cloneNode"), b = Ny(p, "nextSibling"), v = Ny(p, "childNodes"),
            y = Ny(p, "parentNode");
        if ("function" == typeof i) {
            const e = s.createElement("template");
            e.content && e.content.ownerDocument && (s = e.content.ownerDocument)
        }
        let C, w = "";
        const {implementation: x, createNodeIterator: E, createDocumentFragment: _, getElementsByTagName: k} = s, {importNode: S} = o;
        let N = {};
        n.isSupported = "function" == typeof ny && "function" == typeof y && x && void 0 !== x.createHTMLDocument;
        const {MUSTACHE_EXPR: R, ERB_EXPR: A, TMPLIT_EXPR: T, DATA_ATTR: O, ARIA_ATTR: B, IS_SCRIPT_OR_DATA: P, ATTR_WHITESPACE: D} = Yy;
        let {IS_ALLOWED_URI: L} = Yy, M = null;
        const I = ky({}, [...Ry, ...Ay, ...Ty, ...By, ...Dy]);
        let F = null;
        const U = ky({}, [...Ly, ...My, ...Iy, ...Fy]);
        let z = Object.seal(Object.create(null, {
                tagNameCheck: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: null
                },
                attributeNameCheck: {writable: !0, configurable: !1, enumerable: !0, value: null},
                allowCustomizedBuiltInElements: {writable: !0, configurable: !1, enumerable: !0, value: !1}
            })), j = null, H = null, $ = !0, q = !0, V = !1, W = !0, K = !1, Y = !1, G = !1, X = !1, Q = !1, J = !1, Z = !1,
            ee = !0, te = !1, ne = !0, oe = !1, re = {}, se = null;
        const ae = ky({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
        let ie = null;
        const le = ky({}, ["audio", "video", "img", "source", "image", "track"]);
        let de = null;
        const ce = ky({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            ue = "http://www.w3.org/1998/Math/MathML", me = "http://www.w3.org/2000/svg",
            fe = "http://www.w3.org/1999/xhtml";
        let ge = fe, pe = !1, he = null;
        const be = ky({}, [ue, me, fe], hy);
        let ve;
        const ye = ["application/xhtml+xml", "text/html"];
        let Ce, we = null;
        const xe = s.createElement("form"), Ee = function (e) {
                return e instanceof RegExp || e instanceof Function
            }, _e = function (e) {
                if (!we || we !== e) {
                    if (e && "object" == typeof e || (e = {}), e = Sy(e), ve = ve = -1 === ye.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE, Ce = "application/xhtml+xml" === ve ? hy : py, M = "ALLOWED_TAGS" in e ? ky({}, e.ALLOWED_TAGS, Ce) : I, F = "ALLOWED_ATTR" in e ? ky({}, e.ALLOWED_ATTR, Ce) : U, he = "ALLOWED_NAMESPACES" in e ? ky({}, e.ALLOWED_NAMESPACES, hy) : be, de = "ADD_URI_SAFE_ATTR" in e ? ky(Sy(ce), e.ADD_URI_SAFE_ATTR, Ce) : ce, ie = "ADD_DATA_URI_TAGS" in e ? ky(Sy(le), e.ADD_DATA_URI_TAGS, Ce) : le, se = "FORBID_CONTENTS" in e ? ky({}, e.FORBID_CONTENTS, Ce) : ae, j = "FORBID_TAGS" in e ? ky({}, e.FORBID_TAGS, Ce) : {}, H = "FORBID_ATTR" in e ? ky({}, e.FORBID_ATTR, Ce) : {}, re = "USE_PROFILES" in e && e.USE_PROFILES, $ = !1 !== e.ALLOW_ARIA_ATTR, q = !1 !== e.ALLOW_DATA_ATTR, V = e.ALLOW_UNKNOWN_PROTOCOLS || !1, W = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, K = e.SAFE_FOR_TEMPLATES || !1, Y = e.WHOLE_DOCUMENT || !1, Q = e.RETURN_DOM || !1, J = e.RETURN_DOM_FRAGMENT || !1, Z = e.RETURN_TRUSTED_TYPE || !1, X = e.FORCE_BODY || !1, ee = !1 !== e.SANITIZE_DOM, te = e.SANITIZE_NAMED_PROPS || !1, ne = !1 !== e.KEEP_CONTENT, oe = e.IN_PLACE || !1, L = e.ALLOWED_URI_REGEXP || qy, ge = e.NAMESPACE || fe, z = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && Ee(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (z.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && Ee(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (z.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (z.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), K && (q = !1), J && (Q = !0), re && (M = ky({}, [...Dy]), F = [], !0 === re.html && (ky(M, Ry), ky(F, Ly)), !0 === re.svg && (ky(M, Ay), ky(F, My), ky(F, Fy)), !0 === re.svgFilters && (ky(M, Ty), ky(F, My), ky(F, Fy)), !0 === re.mathMl && (ky(M, By), ky(F, Iy), ky(F, Fy))), e.ADD_TAGS && (M === I && (M = Sy(M)), ky(M, e.ADD_TAGS, Ce)), e.ADD_ATTR && (F === U && (F = Sy(F)), ky(F, e.ADD_ATTR, Ce)), e.ADD_URI_SAFE_ATTR && ky(de, e.ADD_URI_SAFE_ATTR, Ce), e.FORBID_CONTENTS && (se === ae && (se = Sy(se)), ky(se, e.FORBID_CONTENTS, Ce)), ne && (M["#text"] = !0), Y && ky(M, ["html", "head", "body"]), M.table && (ky(M, ["tbody"]), delete j.tbody), e.TRUSTED_TYPES_POLICY) {
                        if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML) throw xy('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                        if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL) throw xy('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                        C = e.TRUSTED_TYPES_POLICY, w = C.createHTML("")
                    } else void 0 === C && (C = function (e, t) {
                        if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
                        let n = null;
                        const o = "data-tt-policy-suffix";
                        t && t.hasAttribute(o) && (n = t.getAttribute(o));
                        const r = "dompurify" + (n ? "#" + n : "");
                        try {
                            return e.createPolicy(r, {createHTML: e => e, createScriptURL: e => e})
                        } catch (e) {
                            return console.warn("TrustedTypes policy " + r + " could not be created."), null
                        }
                    }(g, r)), null !== C && "string" == typeof w && (w = C.createHTML(""));
                    iy && iy(e), we = e
                }
            }, ke = ky({}, ["mi", "mo", "mn", "ms", "mtext"]),
            Se = ky({}, ["foreignobject", "desc", "title", "annotation-xml"]),
            Ne = ky({}, ["title", "style", "font", "a", "script"]), Re = ky({}, Ay);
        ky(Re, Ty), ky(Re, Oy);
        const Ae = ky({}, By);
        ky(Ae, Py);
        const Te = function (e) {
            gy(n.removed, {element: e});
            try {
                e.parentNode.removeChild(e)
            } catch (t) {
                e.remove()
            }
        }, Oe = function (e, t) {
            try {
                gy(n.removed, {attribute: t.getAttributeNode(e), from: t})
            } catch (e) {
                gy(n.removed, {attribute: null, from: t})
            }
            if (t.removeAttribute(e), "is" === e && !F[e]) if (Q || J) try {
                Te(t)
            } catch (e) {
            } else try {
                t.setAttribute(e, "")
            } catch (e) {
            }
        }, Be = function (e) {
            let t, n;
            if (X) e = "<remove></remove>" + e; else {
                const t = by(e, /^[\r\n\t ]+/);
                n = t && t[0]
            }
            "application/xhtml+xml" === ve && ge === fe && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
            const o = C ? C.createHTML(e) : e;
            if (ge === fe) try {
                t = (new f).parseFromString(o, ve)
            } catch (e) {
            }
            if (!t || !t.documentElement) {
                t = x.createDocument(ge, "template", null);
                try {
                    t.documentElement.innerHTML = pe ? w : o
                } catch (e) {
                }
            }
            const r = t.body || t.documentElement;
            return e && n && r.insertBefore(s.createTextNode(n), r.childNodes[0] || null), ge === fe ? k.call(t, Y ? "html" : "body")[0] : Y ? t.documentElement : r
        }, Pe = function (e) {
            return E.call(e.ownerDocument || e, e, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT, null, !1)
        }, De = function (e) {
            return "object" == typeof l ? e instanceof l : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
        }, Le = function (e, t, o) {
            N[e] && my(N[e], (e => {
                e.call(n, t, o, we)
            }))
        }, Me = function (e) {
            let t;
            if (Le("beforeSanitizeElements", e, null), (o = e) instanceof m && ("string" != typeof o.nodeName || "string" != typeof o.textContent || "function" != typeof o.removeChild || !(o.attributes instanceof u) || "function" != typeof o.removeAttribute || "function" != typeof o.setAttribute || "string" != typeof o.namespaceURI || "function" != typeof o.insertBefore || "function" != typeof o.hasChildNodes)) return Te(e), !0;
            var o;
            const r = Ce(e.nodeName);
            if (Le("uponSanitizeElement", e, {
                tagName: r,
                allowedTags: M
            }), e.hasChildNodes() && !De(e.firstElementChild) && (!De(e.content) || !De(e.content.firstElementChild)) && wy(/<[/\w]/g, e.innerHTML) && wy(/<[/\w]/g, e.textContent)) return Te(e), !0;
            if (!M[r] || j[r]) {
                if (!j[r] && Fe(r)) {
                    if (z.tagNameCheck instanceof RegExp && wy(z.tagNameCheck, r)) return !1;
                    if (z.tagNameCheck instanceof Function && z.tagNameCheck(r)) return !1
                }
                if (ne && !se[r]) {
                    const t = y(e) || e.parentNode, n = v(e) || e.childNodes;
                    if (n && t) for (let o = n.length - 1; o >= 0; --o) t.insertBefore(h(n[o], !0), b(e))
                }
                return Te(e), !0
            }
            return e instanceof d && !function (e) {
                let t = y(e);
                t && t.tagName || (t = {namespaceURI: ge, tagName: "template"});
                const n = py(e.tagName), o = py(t.tagName);
                return !!he[e.namespaceURI] && (e.namespaceURI === me ? t.namespaceURI === fe ? "svg" === n : t.namespaceURI === ue ? "svg" === n && ("annotation-xml" === o || ke[o]) : Boolean(Re[n]) : e.namespaceURI === ue ? t.namespaceURI === fe ? "math" === n : t.namespaceURI === me ? "math" === n && Se[o] : Boolean(Ae[n]) : e.namespaceURI === fe ? !(t.namespaceURI === me && !Se[o]) && !(t.namespaceURI === ue && !ke[o]) && !Ae[n] && (Ne[n] || !Re[n]) : !("application/xhtml+xml" !== ve || !he[e.namespaceURI]))
            }(e) ? (Te(e), !0) : "noscript" !== r && "noembed" !== r && "noframes" !== r || !wy(/<\/no(script|embed|frames)/i, e.innerHTML) ? (K && 3 === e.nodeType && (t = e.textContent, t = vy(t, R, " "), t = vy(t, A, " "), t = vy(t, T, " "), e.textContent !== t && (gy(n.removed, {element: e.cloneNode()}), e.textContent = t)), Le("afterSanitizeElements", e, null), !1) : (Te(e), !0)
        }, Ie = function (e, t, n) {
            if (ee && ("id" === t || "name" === t) && (n in s || n in xe)) return !1;
            if (q && !H[t] && wy(O, t)) ; else if ($ && wy(B, t)) ; else if (!F[t] || H[t]) {
                if (!(Fe(e) && (z.tagNameCheck instanceof RegExp && wy(z.tagNameCheck, e) || z.tagNameCheck instanceof Function && z.tagNameCheck(e)) && (z.attributeNameCheck instanceof RegExp && wy(z.attributeNameCheck, t) || z.attributeNameCheck instanceof Function && z.attributeNameCheck(t)) || "is" === t && z.allowCustomizedBuiltInElements && (z.tagNameCheck instanceof RegExp && wy(z.tagNameCheck, n) || z.tagNameCheck instanceof Function && z.tagNameCheck(n)))) return !1
            } else if (de[t]) ; else if (wy(L, vy(n, D, ""))) ; else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== yy(n, "data:") || !ie[e]) if (V && !wy(P, vy(n, D, ""))) ; else if (n) return !1;
            return !0
        }, Fe = function (e) {
            return e.indexOf("-") > 0
        }, Ue = function (e) {
            let t, n, o, r;
            Le("beforeSanitizeAttributes", e, null);
            const {attributes: s} = e;
            if (!s) return;
            const a = {attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: F};
            for (r = s.length; r--;) {
                t = s[r];
                const {name: i, namespaceURI: l} = t;
                n = "value" === i ? t.value : Cy(t.value);
                const d = n;
                if (o = Ce(i), a.attrName = o, a.attrValue = n, a.keepAttr = !0, a.forceKeepAttr = void 0, Le("uponSanitizeAttribute", e, a), n = a.attrValue, a.forceKeepAttr) continue;
                if (!a.keepAttr) {
                    Oe(i, e);
                    continue
                }
                if (!W && wy(/\/>/i, n)) {
                    Oe(i, e);
                    continue
                }
                K && (n = vy(n, R, " "), n = vy(n, A, " "), n = vy(n, T, " "));
                const c = Ce(e.nodeName);
                if (Ie(c, o, n)) {
                    if (!te || "id" !== o && "name" !== o || (Oe(i, e), n = "user-content-" + n), C && "object" == typeof g && "function" == typeof g.getAttributeType) if (l) ; else switch (g.getAttributeType(c, o)) {
                        case"TrustedHTML":
                            n = C.createHTML(n);
                            break;
                        case"TrustedScriptURL":
                            n = C.createScriptURL(n)
                    }
                    if (n !== d) try {
                        l ? e.setAttributeNS(l, i, n) : e.setAttribute(i, n)
                    } catch (t) {
                        Oe(i, e)
                    }
                } else Oe(i, e)
            }
            Le("afterSanitizeAttributes", e, null)
        }, ze = function e(t) {
            let n;
            const o = Pe(t);
            for (Le("beforeSanitizeShadowDOM", t, null); n = o.nextNode();) Le("uponSanitizeShadowNode", n, null), Me(n) || (n.content instanceof a && e(n.content), Ue(n));
            Le("afterSanitizeShadowDOM", t, null)
        };
        return n.sanitize = function (e) {
            let t, r, s, i, d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (pe = !e, pe && (e = "\x3c!--\x3e"), "string" != typeof e && !De(e)) {
                if ("function" != typeof e.toString) throw xy("toString is not a function");
                if ("string" != typeof (e = e.toString())) throw xy("dirty is not a string, aborting")
            }
            if (!n.isSupported) return e;
            if (G || _e(d), n.removed = [], "string" == typeof e && (oe = !1), oe) {
                if (e.nodeName) {
                    const t = Ce(e.nodeName);
                    if (!M[t] || j[t]) throw xy("root node is forbidden and cannot be sanitized in-place")
                }
            } else if (e instanceof l) t = Be("\x3c!----\x3e"), r = t.ownerDocument.importNode(e, !0), 1 === r.nodeType && "BODY" === r.nodeName || "HTML" === r.nodeName ? t = r : t.appendChild(r); else {
                if (!Q && !K && !Y && -1 === e.indexOf("<")) return C && Z ? C.createHTML(e) : e;
                if (t = Be(e), !t) return Q ? null : Z ? w : ""
            }
            t && X && Te(t.firstChild);
            const c = Pe(oe ? e : t);
            for (; s = c.nextNode();) Me(s) || (s.content instanceof a && ze(s.content), Ue(s));
            if (oe) return e;
            if (Q) {
                if (J) for (i = _.call(t.ownerDocument); t.firstChild;) i.appendChild(t.firstChild); else i = t;
                return (F.shadowroot || F.shadowrootmode) && (i = S.call(o, i, !0)), i
            }
            let u = Y ? t.outerHTML : t.innerHTML;
            return Y && M["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && wy(Ky, t.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + t.ownerDocument.doctype.name + ">\n" + u), K && (u = vy(u, R, " "), u = vy(u, A, " "), u = vy(u, T, " ")), C && Z ? C.createHTML(u) : u
        }, n.setConfig = function (e) {
            _e(e), G = !0
        }, n.clearConfig = function () {
            we = null, G = !1
        }, n.isValidAttribute = function (e, t, n) {
            we || _e({});
            const o = Ce(e), r = Ce(t);
            return Ie(o, r, n)
        }, n.addHook = function (e, t) {
            "function" == typeof t && (N[e] = N[e] || [], gy(N[e], t))
        }, n.removeHook = function (e) {
            if (N[e]) return fy(N[e])
        }, n.removeHooks = function (e) {
            N[e] && (N[e] = [])
        }, n.removeAllHooks = function () {
            N = {}
        }, n
    }();
    const Qy = Pt.each, Jy = Pt.trim,
        Zy = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        eC = {ftp: 21, http: 80, https: 443, mailto: 25}, tC = ["img", "video"], nC = (e, t, n) => {
            const o = (e => {
                try {
                    return decodeURIComponent(e)
                } catch (t) {
                    return unescape(e)
                }
            })(t).replace(/\s/g, "");
            return !e.allow_script_urls && (!!/((java|vb)script|mhtml):/i.test(o) || !e.allow_html_data_urls && (/^data:image\//i.test(o) ? ((e, t) => C(e) ? !e : !C(t) || !H(tC, t))(e.allow_svg_data_urls, n) && /^data:image\/svg\+xml/i.test(o) : /^data:/i.test(o)))
        };

    class oC {
        static parseDataUri(e) {
            let t;
            const n = decodeURIComponent(e).split(","), o = /data:([^;]+)/.exec(n[0]);
            return o && (t = o[1]), {type: t, data: n[1]}
        }

        static isDomSafe(e, t, n = {}) {
            if (n.allow_script_urls) return !0;
            {
                const o = ea.decode(e).replace(/[\s\u0000-\u001F]+/g, "");
                return !nC(n, o, t)
            }
        }

        static getDocumentBaseUrl(e) {
            var t;
            let n;
            return n = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? null !== (t = e.href) && void 0 !== t ? t : "" : e.protocol + "//" + e.host + e.pathname, /^[^:]+:\/\/\/?[^\/]+\//.test(n) && (n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(n) || (n += "/")), n
        }

        constructor(e, t = {}) {
            this.path = "", this.directory = "", e = Jy(e), this.settings = t;
            const n = t.base_uri, o = this;
            if (/^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e)) return void (o.source = e);
            const r = 0 === e.indexOf("//");
            if (0 !== e.indexOf("/") || r || (e = (n && n.protocol || "http") + "://mce_host" + e), !/^[\w\-]*:?\/\//.test(e)) {
                const t = n ? n.path : new oC(document.location.href).directory;
                if ("" === (null == n ? void 0 : n.protocol)) e = "//mce_host" + o.toAbsPath(t, e); else {
                    const r = /([^#?]*)([#?]?.*)/.exec(e);
                    r && (e = (n && n.protocol || "http") + "://mce_host" + o.toAbsPath(t, r[1]) + r[2])
                }
            }
            e = e.replace(/@@/g, "(mce_at)");
            const s = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e);
            s && Qy(Zy, ((e, t) => {
                let n = s[t];
                n && (n = n.replace(/\(mce_at\)/g, "@@")), o[e] = n
            })), n && (o.protocol || (o.protocol = n.protocol), o.userInfo || (o.userInfo = n.userInfo), o.port || "mce_host" !== o.host || (o.port = n.port), o.host && "mce_host" !== o.host || (o.host = n.host), o.source = ""), r && (o.protocol = "")
        }

        setPath(e) {
            const t = /^(.*?)\/?(\w+)?$/.exec(e);
            t && (this.path = t[0], this.directory = t[1], this.file = t[2]), this.source = "", this.getURI()
        }

        toRelative(e) {
            if ("./" === e) return e;
            const t = new oC(e, {base_uri: this});
            if ("mce_host" !== t.host && this.host !== t.host && t.host || this.port !== t.port || this.protocol !== t.protocol && "" !== t.protocol) return t.getURI();
            const n = this.getURI(), o = t.getURI();
            if (n === o || "/" === n.charAt(n.length - 1) && n.substr(0, n.length - 1) === o) return n;
            let r = this.toRelPath(this.path, t.path);
            return t.query && (r += "?" + t.query), t.anchor && (r += "#" + t.anchor), r
        }

        toAbsolute(e, t) {
            const n = new oC(e, {base_uri: this});
            return n.getURI(t && this.isSameOrigin(n))
        }

        isSameOrigin(e) {
            if (this.host == e.host && this.protocol == e.protocol) {
                if (this.port == e.port) return !0;
                const t = this.protocol ? eC[this.protocol] : null;
                if (t && (this.port || t) == (e.port || t)) return !0
            }
            return !1
        }

        toRelPath(e, t) {
            let n, o, r = 0, s = "";
            const a = e.substring(0, e.lastIndexOf("/")).split("/"), i = t.split("/");
            if (a.length >= i.length) for (n = 0, o = a.length; n < o; n++) if (n >= i.length || a[n] !== i[n]) {
                r = n + 1;
                break
            }
            if (a.length < i.length) for (n = 0, o = i.length; n < o; n++) if (n >= a.length || a[n] !== i[n]) {
                r = n + 1;
                break
            }
            if (1 === r) return t;
            for (n = 0, o = a.length - (r - 1); n < o; n++) s += "../";
            for (n = r - 1, o = i.length; n < o; n++) s += n !== r - 1 ? "/" + i[n] : i[n];
            return s
        }

        toAbsPath(e, t) {
            let n = 0;
            const o = /\/$/.test(t) ? "/" : "", r = e.split("/"), s = t.split("/"), a = [];
            Qy(r, (e => {
                e && a.push(e)
            }));
            const i = [];
            for (let e = s.length - 1; e >= 0; e--) 0 !== s[e].length && "." !== s[e] && (".." !== s[e] ? n > 0 ? n-- : i.push(s[e]) : n++);
            const l = a.length - n;
            let d;
            return d = l <= 0 ? oe(i).join("/") : a.slice(0, l).join("/") + "/" + oe(i).join("/"), 0 !== d.indexOf("/") && (d = "/" + d), o && d.lastIndexOf("/") !== d.length - 1 && (d += o), d
        }

        getURI(e = !1) {
            let t;
            return this.source && !e || (t = "", e || (this.protocol ? t += this.protocol + "://" : t += "//", this.userInfo && (t += this.userInfo + "@"), this.host && (t += this.host), this.port && (t += ":" + this.port)), this.path && (t += this.path), this.query && (t += "?" + this.query), this.anchor && (t += "#" + this.anchor), this.source = t), this.source
        }
    }

    const rC = Pt.makeMap("src,href,data,background,action,formaction,poster,xlink:href"), sC = "data-mce-type";
    let aC = 0;
    const iC = (e, t, n, o, r) => {
            var s, a, i, l;
            const d = t.validate, c = n.getSpecialElements();
            8 === e.nodeType && !t.allow_conditional_comments && /^\[if/i.test(null !== (s = e.nodeValue) && void 0 !== s ? s : "") && (e.nodeValue = " " + e.nodeValue);
            const u = null !== (a = null == r ? void 0 : r.tagName) && void 0 !== a ? a : e.nodeName.toLowerCase();
            if ("html" !== o && n.isValid(o)) return void (C(r) && (r.allowedTags[u] = !0));
            if (1 !== e.nodeType || "body" === u) return;
            const f = yn(e), g = nn(f, sC), p = en(f, "data-mce-bogus");
            if (!g && m(p)) return void ("all" === p ? xo(f) : Eo(f));
            const h = n.getElementRule(u);
            if (!d || h) {
                if (C(r) && (r.allowedTags[u] = !0), d && h && !g) {
                    if (V(null !== (i = h.attributesForced) && void 0 !== i ? i : [], (e => {
                        Jt(f, e.name, "{$uid}" === e.value ? "mce_" + aC++ : e.value)
                    })), V(null !== (l = h.attributesDefault) && void 0 !== l ? l : [], (e => {
                        nn(f, e.name) || Jt(f, e.name, "{$uid}" === e.value ? "mce_" + aC++ : e.value)
                    })), h.attributesRequired && !$(h.attributesRequired, (e => nn(f, e)))) return void Eo(f);
                    if (h.removeEmptyAttrs && (e => {
                        const t = e.dom.attributes;
                        return null == t || 0 === t.length
                    })(f)) return void Eo(f);
                    h.outputName && h.outputName !== u && ((e, t) => {
                        const n = ((e, t) => {
                            const n = bn(t), o = rn(e);
                            return Zt(n, o), n
                        })(e, t);
                        ho(e, n);
                        const o = Mn(e);
                        Co(n, o), xo(e)
                    })(f, h.outputName)
                }
            } else Ee(c, u) ? xo(f) : Eo(f)
        },
        lC = (e, t, n, o, r, s) => "html" !== n && !ps(o) || !(r in rC && nC(e, s, o)) && (!e.validate || t.isValid(o, r) || He(r, "data-") || He(r, "aria-")),
        dC = (e, t) => e.hasAttribute(sC) && ("id" === t || "class" === t || "style" === t),
        cC = (e, t) => e in t.getBoolAttrs(), uC = (e, t, n, o) => {
            const {attributes: r} = e;
            for (let s = r.length - 1; s >= 0; s--) {
                const a = r[s], i = a.name, l = a.value;
                lC(t, n, o, e.tagName.toLowerCase(), i, l) || dC(e, i) ? cC(i, n) && e.setAttribute(i, i) : e.removeAttribute(i)
            }
        }, mC = (e, t, n) => {
            const o = Xy();
            return o.addHook("uponSanitizeElement", ((o, r) => {
                iC(o, e, t, n.track(o), r)
            })), o.addHook("uponSanitizeAttribute", ((o, r) => {
                ((e, t, n, o, r) => {
                    const s = e.tagName.toLowerCase(), {attrName: a, attrValue: i} = r;
                    r.keepAttr = lC(t, n, o, s, a, i), r.keepAttr ? (r.allowedAttributes[a] = !0, cC(a, n) && (r.attrValue = a), t.allow_svg_data_urls && He(i, "data:image/svg+xml") && (r.forceKeepAttr = !0)) : dC(e, a) && (r.forceKeepAttr = !0)
                })(o, e, t, n.current(), r)
            })), o
        }, fC = e => {
            const t = ["type", "href", "role", "arcrole", "title", "show", "actuate", "label", "from", "to"].map((e => `xlink:${e}`)),
                n = {IN_PLACE: !0, USE_PROFILES: {html: !0, svg: !0, svgFilters: !0}, ALLOWED_ATTR: t};
            return Xy().sanitize(e, n), e.innerHTML
        }, gC = Pt.makeMap, pC = Pt.extend, hC = (e, t, n, o) => {
            const r = e.name, s = r in n && "title" !== r && "textarea" !== r, a = t.childNodes;
            for (let t = 0, r = a.length; t < r; t++) {
                const r = a[t], i = new Wg(r.nodeName.toLowerCase(), r.nodeType);
                if (qo(r)) {
                    const e = r.attributes;
                    for (let t = 0, n = e.length; t < n; t++) {
                        const n = e[t];
                        i.attr(n.name, n.value)
                    }
                    ps(i.name) && (o(r), i.value = r.innerHTML)
                } else er(r) ? (i.value = r.data, s && (i.raw = !0)) : (or(r) || tr(r) || nr(r)) && (i.value = r.data);
                ps(i.name) || hC(i, r, n, o), e.append(i)
            }
        }, bC = (e = {}, t = ua()) => {
            const n = qv(), o = qv(), r = {validate: !0, root_name: "body", sanitize: !0, ...e}, s = new DOMParser,
                a = ((e, t) => {
                    const n = (() => {
                        let e = [];
                        const t = () => e[e.length - 1];
                        return {
                            track: n => {
                                hs(n) && e.push(n);
                                let o = t();
                                return o && !o.contains(n) && (e.pop(), o = t()), bs(o)
                            }, current: () => bs(t()), reset: () => {
                                e = []
                            }
                        }
                    })();
                    if (e.sanitize) {
                        const o = mC(e, t, n), r = (t, r) => {
                            o.sanitize(t, ((e, t) => {
                                const n = {
                                    IN_PLACE: !0,
                                    ALLOW_UNKNOWN_PROTOCOLS: !0,
                                    ALLOWED_TAGS: ["#comment", "#cdata-section", "body"],
                                    ALLOWED_ATTR: []
                                };
                                return n.PARSER_MEDIA_TYPE = t, e.allow_script_urls ? n.ALLOWED_URI_REGEXP = /.*/ : e.allow_html_data_urls && (n.ALLOWED_URI_REGEXP = /^(?!(\w+script|mhtml):)/i), n
                            })(e, r)), o.removed = [], n.reset()
                        };
                        return {sanitizeHtmlElement: r, sanitizeNamespaceElement: fC}
                    }
                    return {
                        sanitizeHtmlElement: (o, r) => {
                            const s = document.createNodeIterator(o, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT);
                            let a;
                            for (; a = s.nextNode();) {
                                const o = n.track(a);
                                iC(a, e, t, o), qo(a) && uC(a, e, t, o)
                            }
                            n.reset()
                        }, sanitizeNamespaceElement: _
                    }
                })(r, t), i = n.addFilter, l = n.getFilters, d = n.removeFilter, c = o.addFilter, u = o.getFilters,
                f = o.removeFilter, g = (e, n) => {
                    const o = m(n.attr(sC)), r = 1 === n.type && !Ee(e, n.name) && !Bs(t, n) && !ps(n.name);
                    return 3 === n.type || r && !o
                }, p = {
                    schema: t,
                    addAttributeFilter: c,
                    getAttributeFilters: u,
                    removeAttributeFilter: f,
                    addNodeFilter: i,
                    getNodeFilters: l,
                    removeNodeFilter: d,
                    parse: (e, n = {}) => {
                        var o;
                        const i = r.validate, d = null !== (o = n.context) && void 0 !== o ? o : r.root_name,
                            c = ((e, n, o = "html") => {
                                const r = "xhtml" === o ? "application/xhtml+xml" : "text/html",
                                    i = Ee(t.getSpecialElements(), n.toLowerCase()), l = i ? `<${n}>${e}</${n}>` : e,
                                    d = "xhtml" === o ? `<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>${l}</body></html>` : `<body>${l}</body>`,
                                    c = s.parseFromString(d, r).body;
                                return a.sanitizeHtmlElement(c, r), i ? c.firstChild : c
                            })(e, d, n.format);
                        ks(t, c);
                        const m = new Wg(d, 11);
                        hC(m, c, t.getSpecialElements(), a.sanitizeNamespaceElement), c.innerHTML = "";
                        const [f, p] = ((e, t, n, o) => {
                            const r = n.validate, s = t.getNonEmptyElements(), a = t.getWhitespaceElements(),
                                i = pC(gC("script,style,head,html,body,title,meta,param"), t.getBlockElements()), l = da(t),
                                d = /[ \t\r\n]+/g, c = /^[ \t\r\n]+/, u = /[ \t\r\n]+$/, m = e => {
                                    let t = e.parent;
                                    for (; C(t);) {
                                        if (t.name in a) return !0;
                                        t = t.parent
                                    }
                                    return !1
                                }, f = n => n.name in i || Bs(t, n) || ps(n.name) && n.parent === e, g = (t, n) => {
                                    const r = n ? t.prev : t.next;
                                    return !C(r) && !y(t.parent) && f(t.parent) && (t.parent !== e || !0 === o.isRootContent)
                                };
                            return [e => {
                                var t;
                                if (3 === e.type && !m(e)) {
                                    let n = null !== (t = e.value) && void 0 !== t ? t : "";
                                    n = n.replace(d, " "), (((e, t) => C(e) && (t(e) || "br" === e.name))(e.prev, f) || g(e, !0)) && (n = n.replace(c, "")), 0 === n.length ? e.remove() : e.value = n
                                }
                            }, e => {
                                var i;
                                if (1 === e.type) {
                                    const i = t.getElementRule(e.name);
                                    if (r && i) {
                                        const r = vb(t, s, a, e);
                                        i.paddInEmptyBlock && r && (e => {
                                            let n = e;
                                            for (; C(n);) {
                                                if (n.name in l) return vb(t, s, a, n);
                                                n = n.parent
                                            }
                                            return !1
                                        })(e) ? hb(n, o, f, e) : i.removeEmpty && r ? f(e) ? e.remove() : e.unwrap() : i.paddEmpty && (r || (e => {
                                            var t;
                                            return bb(e, "#text") && (null === (t = null == e ? void 0 : e.firstChild) || void 0 === t ? void 0 : t.value) === br
                                        })(e)) && hb(n, o, f, e)
                                    }
                                } else if (3 === e.type && !m(e)) {
                                    let t = null !== (i = e.value) && void 0 !== i ? i : "";
                                    (e.next && f(e.next) || g(e, !1)) && (t = t.replace(u, "")), 0 === t.length ? e.remove() : e.value = t
                                }
                            }]
                        })(m, t, r, n), h = [], b = i ? e => ((e, n) => {
                            xb(t, e) && n.push(e)
                        })(e, h) : _, v = {nodes: {}, attributes: {}}, w = e => fb(l(), u(), e, v);
                        if (((e, t, n) => {
                            const o = [];
                            for (let n = e, r = n; n; r = n, n = n.walk()) {
                                const s = n;
                                V(t, (e => e(s))), y(s.parent) && s !== e ? n = r : o.push(s)
                            }
                            for (let e = o.length - 1; e >= 0; e--) {
                                const t = o[e];
                                V(n, (e => e(t)))
                            }
                        })(m, [f, w], [p, b]), h.reverse(), i && h.length > 0) if (n.context) {
                            const {pass: e, fail: o} = K(h, (e => e.parent === m));
                            wb(o, t, m, w), n.invalid = e.length > 0
                        } else wb(h, t, m, w);
                        const x = ((e, t) => {
                            var n;
                            const o = null !== (n = t.forced_root_block) && void 0 !== n ? n : e.forced_root_block;
                            return !1 === o ? "" : !0 === o ? "p" : o
                        })(r, n);
                        return x && ("body" === m.name || n.isRootContent) && ((e, n) => {
                            const o = pC(gC("script,style,head,html,body,title,meta,param"), t.getBlockElements()),
                                s = /^[ \t\r\n]+/, a = /[ \t\r\n]+$/;
                            let i = e.firstChild, l = null;
                            const d = e => {
                                var t, n;
                                e && (i = e.firstChild, i && 3 === i.type && (i.value = null === (t = i.value) || void 0 === t ? void 0 : t.replace(s, "")), i = e.lastChild, i && 3 === i.type && (i.value = null === (n = i.value) || void 0 === n ? void 0 : n.replace(a, "")))
                            };
                            if (t.isValidChild(e.name, n.toLowerCase())) {
                                for (; i;) {
                                    const t = i.next;
                                    g(o, i) ? (l || (l = new Wg(n, 1), l.attr(r.forced_root_block_attrs), e.insert(l, i)), l.append(i)) : (d(l), l = null), i = t
                                }
                                d(l)
                            }
                        })(m, x), n.invalid || gb(v, n), m
                    }
                };
            return ty(p, r), ((e, t, n) => {
                t.inline_styles && Vv(e, t, n)
            })(p, r, t), p
        }, vC = (e, t, n) => {
            const o = (e => Bb(e) ? up({validate: !1}).serialize(e) : e)(e), r = t(o);
            if (r.isDefaultPrevented()) return r;
            if (Bb(e)) {
                if (r.content !== o) {
                    const t = bC({validate: !1, forced_root_block: !1, ...n}).parse(r.content, {context: e.name});
                    return {...r, content: t}
                }
                return {...r, content: e}
            }
            return r
        }, yC = (e, t) => {
            if (t.no_events) return pl.value(t);
            {
                const n = ((e, t) => e.dispatch("BeforeGetContent", t))(e, t);
                return n.isDefaultPrevented() ? pl.error(rf(e, {content: "", ...n}).content) : pl.value(n)
            }
        }, CC = (e, t, n) => {
            if (n.no_events) return t;
            {
                const o = vC(t, (t => rf(e, {...n, content: t})), {sanitize: fc(e), sandbox_iframes: Cc(e)});
                return o.content
            }
        }, wC = (e, t) => {
            if (t.no_events) return pl.value(t);
            {
                const n = vC(t.content, (n => ((e, t) => e.dispatch("BeforeSetContent", t))(e, {
                    ...t,
                    content: n
                })), {sanitize: fc(e), sandbox_iframes: Cc(e)});
                return n.isDefaultPrevented() ? (of(e, n), pl.error(void 0)) : pl.value(n)
            }
        }, xC = (e, t, n) => {
            n.no_events || of(e, {...n, content: t})
        }, EC = (e, t, n) => ({element: e, width: t, rows: n}), _C = (e, t) => ({element: e, cells: t}),
        kC = (e, t) => ({x: e, y: t}), SC = (e, t) => tn(e, t).bind(Xe).getOr(1), NC = (e, t, n) => {
            const o = e.rows;
            return !!(o[n] ? o[n].cells : [])[t]
        }, RC = e => X(e, ((e, t) => t.cells.length > e ? t.cells.length : e), 0), AC = (e, t) => {
            const n = e.rows;
            for (let e = 0; e < n.length; e++) {
                const o = n[e].cells;
                for (let n = 0; n < o.length; n++) if (_n(o[n], t)) return I.some(kC(n, e))
            }
            return I.none()
        }, TC = (e, t, n, o, r) => {
            const s = [], a = e.rows;
            for (let e = n; e <= r; e++) {
                const n = a[e].cells, r = t < o ? n.slice(t, o + 1) : n.slice(o, t + 1);
                s.push(_C(a[e].element, r))
            }
            return s
        }, OC = e => ((e, t) => {
            const n = fi(e.element), o = bn("tbody");
            return Co(o, t), vo(n, o), n
        })(e, (e => q(e.rows, (e => {
            const t = q(e.cells, (e => {
                const t = gi(e);
                return on(t, "colspan"), on(t, "rowspan"), t
            })), n = fi(e.element);
            return Co(n, t), n
        })))(e)), BC = (e, t, n) => {
            const o = yn(t.commonAncestorContainer), r = Bp(o, e), s = Y(r, (e => n.isWrapper(Ht(e)))),
                a = ((e, t) => J(e, (e => "li" === Ht(e) && rm(e, t))).fold(N([]), (t => (e => J(e, (e => "ul" === Ht(e) || "ol" === Ht(e))))(e).map((e => {
                    const t = bn(Ht(e)), n = ye(fo(e), ((e, t) => He(t, "list-style")));
                    return lo(t, n), [bn("li"), t]
                })).getOr([]))))(r, t),
                i = s.concat(a.length ? a : (e => Sr(e) ? An(e).filter(kr).fold(N([]), (t => [e, t])) : kr(e) ? [e] : [])(o));
            return q(i, fi)
        }, PC = () => Sf([]), DC = (e, t) => ((e, t) => eo(t, "table", T(_n, e)))(e, t[0]).bind((e => {
            const n = t[0], o = t[t.length - 1], r = (e => {
                const t = EC(fi(e), 0, []);
                return V(Uo(e, "tr"), ((e, n) => {
                    V(Uo(e, "td,th"), ((o, r) => {
                        ((e, t, n, o, r) => {
                            const s = SC(r, "rowspan"), a = SC(r, "colspan"), i = e.rows;
                            for (let e = n; e < n + s; e++) {
                                i[e] || (i[e] = _C(gi(o), []));
                                for (let o = t; o < t + a; o++) i[e].cells[o] = e === n && o === t ? r : fi(r)
                            }
                        })(t, ((e, t, n) => {
                            for (; NC(e, t, n);) t++;
                            return t
                        })(t, r, n), n, e, o)
                    }))
                })), EC(t.element, RC(t.rows), t.rows)
            })(e);
            return ((e, t, n) => AC(e, t).bind((t => AC(e, n).map((n => ((e, t, n) => {
                const o = t.x, r = t.y, s = n.x, a = n.y, i = r < a ? TC(e, o, r, s, a) : TC(e, o, a, s, r);
                return EC(e.element, RC(i), i)
            })(e, t, n))))))(r, n, o).map((e => Sf([OC(e)])))
        })).getOrThunk(PC), LC = (e, t, n) => {
            const o = Zu(t, e);
            return o.length > 0 ? DC(e, o) : ((e, t, n) => t.length > 0 && t[0].collapsed ? PC() : ((e, t, n) => ((e, t) => {
                const n = X(t, ((e, t) => (vo(t, e), t)), e);
                return t.length > 0 ? Sf([n]) : n
            })(yn(t.cloneContents()), BC(e, t, n)))(e, t[0], n))(e, t, n)
        }, MC = (e, t) => t >= 0 && t < e.length && Xu(e.charAt(t)), IC = e => Dr(e.innerText),
        FC = e => qo(e) ? e.outerHTML : er(e) ? ea.encodeRaw(e.data, !1) : or(e) ? "\x3c!--" + e.data + "--\x3e" : "",
        UC = (e, t) => (((e, t) => {
            let n = 0;
            V(e, (e => {
                0 === e[0] ? n++ : 1 === e[0] ? (((e, t, n) => {
                    const o = (e => {
                        let t;
                        const n = document.createElement("div"), o = document.createDocumentFragment();
                        for (e && (n.innerHTML = e); t = n.firstChild;) o.appendChild(t);
                        return o
                    })(t);
                    if (e.hasChildNodes() && n < e.childNodes.length) {
                        const t = e.childNodes[n];
                        e.insertBefore(o, t)
                    } else e.appendChild(o)
                })(t, e[1], n), n++) : 2 === e[0] && ((e, t) => {
                    if (e.hasChildNodes() && t < e.childNodes.length) {
                        const n = e.childNodes[t];
                        e.removeChild(n)
                    }
                })(t, n)
            }))
        })(((e, t) => {
            const n = e.length + t.length + 2, o = new Array(n), r = new Array(n), s = (n, o, r, a, l) => {
                const d = i(n, o, r, a);
                if (null === d || d.start === o && d.diag === o - a || d.end === n && d.diag === n - r) {
                    let s = n, i = r;
                    for (; s < o || i < a;) s < o && i < a && e[s] === t[i] ? (l.push([0, e[s]]), ++s, ++i) : o - n > a - r ? (l.push([2, e[s]]), ++s) : (l.push([1, t[i]]), ++i)
                } else {
                    s(n, d.start, r, d.start - d.diag, l);
                    for (let t = d.start; t < d.end; ++t) l.push([0, e[t]]);
                    s(d.end, o, d.end - d.diag, a, l)
                }
            }, a = (n, o, r, s) => {
                let a = n;
                for (; a - o < s && a < r && e[a] === t[a - o];) ++a;
                return ((e, t, n) => ({start: e, end: t, diag: n}))(n, a, o)
            }, i = (n, s, i, l) => {
                const d = s - n, c = l - i;
                if (0 === d || 0 === c) return null;
                const u = d - c, m = c + d, f = (m % 2 == 0 ? m : m + 1) / 2;
                let g, p, h, b, v;
                for (o[1 + f] = n, r[1 + f] = s + 1, g = 0; g <= f; ++g) {
                    for (p = -g; p <= g; p += 2) {
                        for (h = p + f, p === -g || p !== g && o[h - 1] < o[h + 1] ? o[h] = o[h + 1] : o[h] = o[h - 1] + 1, b = o[h], v = b - n + i - p; b < s && v < l && e[b] === t[v];) o[h] = ++b, ++v;
                        if (u % 2 != 0 && u - g <= p && p <= u + g && r[h - u] <= o[h]) return a(r[h - u], p + n - i, s, l)
                    }
                    for (p = u - g; p <= u + g; p += 2) {
                        for (h = p + f - u, p === u - g || p !== u + g && r[h + 1] <= r[h - 1] ? r[h] = r[h + 1] - 1 : r[h] = r[h - 1], b = r[h] - 1, v = b - n + i - p; b >= n && v >= i && e[b] === t[v];) r[h] = b--, v--;
                        if (u % 2 == 0 && -g <= p && p <= g && r[h] <= o[h + u]) return a(r[h], p + n - i, s, l)
                    }
                }
                return null
            }, l = [];
            return s(0, e.length, 0, t.length, l), l
        })(q(ce(t.childNodes), FC), e), t), t), zC = De((() => document.implementation.createHTMLDocument("undo"))),
        jC = e => {
            const t = e.serializer.getTempAttrs(), n = sp(e.getBody(), t);
            return (e => null !== e.querySelector("iframe"))(n) ? {
                type: "fragmented",
                fragments: Y(q(ce(n.childNodes), k(Dr, FC)), (e => e.length > 0)),
                content: "",
                bookmark: null,
                beforeBookmark: null
            } : {type: "complete", fragments: null, content: Dr(n.innerHTML), bookmark: null, beforeBookmark: null}
        }, HC = (e, t, n) => {
            const o = n ? t.beforeBookmark : t.bookmark;
            "fragmented" === t.type ? UC(t.fragments, e.getBody()) : e.setContent(t.content, {
                format: "raw",
                no_selection: !C(o) || !Iu(o) || !o.isFakeCaret
            }), o && (e.selection.moveToBookmark(o), e.selection.scrollIntoView())
        }, $C = e => "fragmented" === e.type ? e.fragments.join("") : e.content, qC = e => {
            const t = bn("body", zC());
            return So(t, $C(e)), V(Uo(t, "*[data-mce-bogus]"), Eo), ko(t)
        }, VC = (e, t) => !(!e || !t) && (!!((e, t) => $C(e) === $C(t))(e, t) || ((e, t) => qC(e) === qC(t))(e, t)),
        WC = e => 0 === e.get(), KC = (e, t, n) => {
            WC(n) && (e.typing = t)
        }, YC = (e, t) => {
            e.typing && (KC(e, !1, t), e.add())
        }, GC = e => ({
            init: {bindEvents: _}, undoManager: {
                beforeChange: (t, n) => ((e, t, n) => {
                    WC(t) && n.set(ml(e.selection))
                })(e, t, n),
                add: (t, n, o, r, s, a) => ((e, t, n, o, r, s, a) => {
                    const i = jC(e), l = Pt.extend(s || {}, i);
                    if (!WC(o) || e.removed) return null;
                    const d = t.data[n.get()];
                    if (e.dispatch("BeforeAddUndo", {
                        level: l,
                        lastLevel: d,
                        originalEvent: a
                    }).isDefaultPrevented()) return null;
                    if (d && VC(d, l)) return null;
                    t.data[n.get()] && r.get().each((e => {
                        t.data[n.get()].beforeBookmark = e
                    }));
                    const c = Td(e);
                    if (c && t.data.length > c) {
                        for (let e = 0; e < t.data.length - 1; e++) t.data[e] = t.data[e + 1];
                        t.data.length--, n.set(t.data.length)
                    }
                    l.bookmark = ml(e.selection), n.get() < t.data.length - 1 && (t.data.length = n.get() + 1), t.data.push(l), n.set(t.data.length - 1);
                    const u = {level: l, lastLevel: d, originalEvent: a};
                    return n.get() > 0 ? (e.setDirty(!0), e.dispatch("AddUndo", u), e.dispatch("change", u)) : e.dispatch("AddUndo", u), l
                })(e, t, n, o, r, s, a),
                undo: (t, n, o) => ((e, t, n, o) => {
                    let r;
                    return t.typing && (t.add(), t.typing = !1, KC(t, !1, n)), o.get() > 0 && (o.set(o.get() - 1), r = t.data[o.get()], HC(e, r, !0), e.setDirty(!0), e.dispatch("Undo", {level: r})), r
                })(e, t, n, o),
                redo: (t, n) => ((e, t, n) => {
                    let o;
                    return t.get() < n.length - 1 && (t.set(t.get() + 1), o = n[t.get()], HC(e, o, !1), e.setDirty(!0), e.dispatch("Redo", {level: o})), o
                })(e, t, n),
                clear: (t, n) => ((e, t, n) => {
                    t.data = [], n.set(0), t.typing = !1, e.dispatch("ClearUndos")
                })(e, t, n),
                reset: e => (e => {
                    e.clear(), e.add()
                })(e),
                hasUndo: (t, n) => ((e, t, n) => n.get() > 0 || t.typing && t.data[0] && !VC(jC(e), t.data[0]))(e, t, n),
                hasRedo: (e, t) => ((e, t) => t.get() < e.data.length - 1 && !e.typing)(e, t),
                transact: (e, t, n) => ((e, t, n) => (YC(e, t), e.beforeChange(), e.ignore(n), e.add()))(e, t, n),
                ignore: (e, t) => ((e, t) => {
                    try {
                        e.set(e.get() + 1), t()
                    } finally {
                        e.set(e.get() - 1)
                    }
                })(e, t),
                extra: (t, n, o, r) => ((e, t, n, o, r) => {
                    if (t.transact(o)) {
                        const o = t.data[n.get()].bookmark, s = t.data[n.get() - 1];
                        HC(e, s, !0), t.transact(r) && (t.data[n.get() - 1].beforeBookmark = o)
                    }
                })(e, t, n, o, r)
            }, formatter: {
                match: (t, n, o, r) => Hb(e, t, n, o, r),
                matchAll: (t, n) => ((e, t, n) => {
                    const o = [], r = {}, s = e.selection.getStart();
                    return e.dom.getParent(s, (s => {
                        for (let a = 0; a < t.length; a++) {
                            const i = t[a];
                            !r[i] && jb(e, s, i, n) && (r[i] = !0, o.push(i))
                        }
                    }), e.dom.getRoot()), o
                })(e, t, n),
                matchNode: (t, n, o, r) => jb(e, t, n, o, r),
                canApply: t => ((e, t) => {
                    const n = e.formatter.get(t), o = e.dom;
                    if (n && e.selection.isEditable()) {
                        const t = e.selection.getStart(), r = Em(o, t);
                        for (let e = n.length - 1; e >= 0; e--) {
                            const t = n[e];
                            if (!Sm(t)) return !0;
                            for (let e = r.length - 1; e >= 0; e--) if (o.is(r[e], t.selector)) return !0
                        }
                    }
                    return !1
                })(e, t),
                closest: t => ((e, t) => {
                    const n = t => _n(t, yn(e.getBody()));
                    return I.from(e.selection.getStart(!0)).bind((o => Lb(yn(o), (n => ue(t, (t => ((t, n) => jb(e, t.dom, n) ? I.some(n) : I.none())(n, t)))), n))).getOrNull()
                })(e, t),
                apply: (t, n, o) => Iv(e, t, n, o),
                remove: (t, n, o, r) => Ov(e, t, n, o, r),
                toggle: (t, n, o) => ((e, t, n, o) => {
                    const r = e.formatter.get(t);
                    r && (!Hb(e, t, n, o) || "toggle" in r[0] && !r[0].toggle ? Iv(e, t, n, o) : Ov(e, t, n, o))
                })(e, t, n, o),
                formatChanged: (t, n, o, r, s) => ((e, t, n, o, r, s) => (((e, t, n, o, r, s) => {
                    const a = t.get();
                    V(n.split(","), (t => {
                        const n = xe(a, t).getOrThunk((() => {
                            const e = {
                                withSimilar: {state: $a(!1), similar: !0, callbacks: []},
                                withoutSimilar: {state: $a(!1), similar: !1, callbacks: []},
                                withVars: []
                            };
                            return a[t] = e, e
                        })), i = () => {
                            const n = jv(e);
                            return zv(e, n, t, r, s).isSome()
                        };
                        if (v(s)) {
                            const e = r ? n.withSimilar : n.withoutSimilar;
                            e.callbacks.push(o), 1 === e.callbacks.length && e.state.set(i())
                        } else n.withVars.push({state: $a(i()), similar: r, vars: s, callback: o})
                    })), t.set(a)
                })(e, t, n, o, r, s), {
                    unbind: () => ((e, t, n) => {
                        const o = e.get();
                        V(t.split(","), (e => xe(o, e).each((t => {
                            o[e] = {
                                withSimilar: {...t.withSimilar, callbacks: Y(t.withSimilar.callbacks, (e => e !== n))},
                                withoutSimilar: {
                                    ...t.withoutSimilar,
                                    callbacks: Y(t.withoutSimilar.callbacks, (e => e !== n))
                                },
                                withVars: Y(t.withVars, (e => e.callback !== n))
                            }
                        })))), e.set(o)
                    })(t, n, o)
                }))(e, t, n, o, r, s)
            }, editor: {
                getContent: t => ((e, t) => I.from(e.getBody()).fold(N("tree" === t.format ? new Wg("body", 11) : ""), (n => lp(e, t, n))))(e, t),
                setContent: (t, n) => ((e, t, n) => I.from(e.getBody()).map((o => Bb(t) ? ((e, t, n, o) => {
                    pb(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
                    const r = up({validate: !1}, e.schema).serialize(n), s = Dr(Ar(yn(t)) ? r : Pt.trim(r));
                    return Pb(e, s, o.no_selection), {content: n, html: s}
                })(e, o, t, n) : ((e, t, n, o) => {
                    if (0 === (n = Dr(n)).length || /^\s+$/.test(n)) {
                        const r = '<br data-mce-bogus="1">';
                        "TABLE" === t.nodeName ? n = "<tr><td>" + r + "</td></tr>" : /^(UL|OL)$/.test(t.nodeName) && (n = "<li>" + r + "</li>");
                        const s = Il(e);
                        return e.schema.isValidChild(t.nodeName.toLowerCase(), s.toLowerCase()) ? (n = r, n = e.dom.createHTML(s, Fl(e), n)) : n || (n = r), Pb(e, n, o.no_selection), {
                            content: n,
                            html: n
                        }
                    }
                    {
                        "raw" !== o.format && (n = up({validate: !1}, e.schema).serialize(e.parser.parse(n, {
                            isRootContent: !0,
                            insert: !0
                        })));
                        const r = Ar(yn(t)) ? n : Pt.trim(n);
                        return Pb(e, r, o.no_selection), {content: r, html: r}
                    }
                })(e, o, t, n))).getOr({content: t, html: Bb(n.content) ? "" : n.content}))(e, t, n),
                insertContent: (t, n) => Ob(e, t, n),
                addVisual: t => ((e, t) => {
                    const n = e.dom, o = C(t) ? t : e.getBody();
                    V(n.select("table,a", o), (t => {
                        switch (t.nodeName) {
                            case"TABLE":
                                const o = Ud(e), r = n.getAttrib(t, "border");
                                r && "0" !== r || !e.hasVisual ? n.removeClass(t, o) : n.addClass(t, o);
                                break;
                            case"A":
                                if (!n.getAttrib(t, "href")) {
                                    const o = n.getAttrib(t, "name") || t.id, r = zd(e);
                                    o && e.hasVisual ? n.addClass(t, r) : n.removeClass(t, r)
                                }
                        }
                    })), e.dispatch("VisualAid", {element: t, hasVisual: e.hasVisual})
                })(e, t)
            }, selection: {
                getContent: (t, n) => ((e, t, n = {}) => {
                    const o = ((e, t) => ({...e, format: t, get: !0, selection: !0, getInner: !0}))(n, t);
                    return yC(e, o).fold(R, (t => {
                        const n = ((e, t) => {
                            if ("text" === t.format) return (e => I.from(e.selection.getRng()).map((t => {
                                var n;
                                const o = I.from(e.dom.getParent(t.commonAncestorContainer, e.dom.isBlock)),
                                    r = e.getBody(), s = (e => e.map((e => e.nodeName)).getOr("div").toLowerCase())(o),
                                    a = yn(t.cloneContents());
                                ap(a), ip(a);
                                const i = e.dom.add(r, s, {
                                    "data-mce-bogus": "all",
                                    style: "overflow: hidden; opacity: 0;"
                                }, a.dom), l = IC(i), d = Dr(null !== (n = i.textContent) && void 0 !== n ? n : "");
                                if (e.dom.remove(i), MC(d, 0) || MC(d, d.length - 1)) {
                                    const e = o.getOr(r), t = IC(e), n = t.indexOf(l);
                                    return -1 === n ? l : (MC(t, n - 1) ? " " : "") + l + (MC(t, n + l.length) ? " " : "")
                                }
                                return l
                            })).getOr(""))(e);
                            {
                                const n = ((e, t) => {
                                    const n = e.selection.getRng(), o = e.dom.create("body"), r = e.selection.getSel(),
                                        s = Mg(e, Ju(r)),
                                        a = t.contextual ? LC(yn(e.getBody()), s, e.schema).dom : n.cloneContents();
                                    return a && o.appendChild(a), e.selection.serializer.serialize(o, t)
                                })(e, t);
                                return "tree" === t.format ? n : e.selection.isCollapsed() ? "" : n
                            }
                        })(e, t);
                        return CC(e, n, t)
                    }))
                })(e, t, n)
            }, autocompleter: {
                addDecoration: t => zg(e, t), removeDecoration: () => ((e, t) => jg(t).each((t => {
                    const n = e.selection.getBookmark();
                    Eo(t), e.selection.moveToBookmark(n)
                })))(e, yn(e.getBody()))
            }, raw: {getModel: () => I.none()}
        }), XC = e => Ee(e.plugins, "rtc"), QC = e => e.rtcInstance ? e.rtcInstance : GC(e), JC = e => {
            const t = e.rtcInstance;
            if (t) return t;
            throw new Error("Failed to get RTC instance not yet initialized.")
        }, ZC = e => JC(e).init.bindEvents(), ew = e => 0 === e.dom.length ? (xo(e), I.none()) : I.some(e),
        tw = (e, t, n, o, r) => {
            e.bind((e => ((o ? ch : dh)(e.dom, o ? e.dom.length : 0, r), t.filter(Kt).map((t => ((e, t, n, o, r) => {
                const s = e.dom, a = t.dom, i = o ? s.length : a.length;
                o ? (uh(s, a, r, !1, !o), n.setStart(a, i)) : (uh(a, s, r, !1, !o), n.setEnd(a, i))
            })(e, t, n, o, r)))))).orThunk((() => {
                const e = ((e, t) => e.filter((e => Jm.isBookmarkNode(e.dom))).bind(t ? Pn : Bn))(t, o).or(t).filter(Kt);
                return e.map((e => ((e, t, n) => {
                    An(e).each((o => {
                        const r = e.dom;
                        t && eh(o, Vi(r, 0), n) ? dh(r, 0, n) : !t && th(o, Vi(r, r.length), n) && ch(r, r.length, n)
                    }))
                })(e, o, r)))
            }))
        }, nw = (e, t, n) => {
            if (Ee(e, t)) {
                const o = Y(e[t], (e => e !== n));
                0 === o.length ? delete e[t] : e[t] = o
            }
        };
    const ow = e => !(!e || !e.ownerDocument) && kn(yn(e.ownerDocument), yn(e)), rw = (e, t, n, o) => {
            let r, s;
            const {selectorChangedWithUnbind: a} = ((e, t) => {
                let n, o;
                const r = (t, n) => J(n, (n => e.is(n, t))), s = t => e.getParents(t, void 0, e.getRoot());
                return {
                    selectorChangedWithUnbind: (e, a) => (n || (n = {}, o = {}, t.on("NodeChange", (e => {
                        const t = e.element, a = s(t), i = {};
                        ge(n, ((e, t) => {
                            r(t, a).each((n => {
                                o[t] || (V(e, (e => {
                                    e(!0, {node: n, selector: t, parents: a})
                                })), o[t] = e), i[t] = e
                            }))
                        })), ge(o, ((e, n) => {
                            i[n] || (delete o[n], V(e, (e => {
                                e(!1, {node: t, selector: n, parents: a})
                            })))
                        }))
                    }))), n[e] || (n[e] = []), n[e].push(a), r(e, s(t.selection.getStart())).each((() => {
                        o[e] = n[e]
                    })), {
                        unbind: () => {
                            nw(n, e, a), nw(o, e, a)
                        }
                    })
                }
            })(e, o), i = (e, t) => ((e, t, n = {}) => {
                const o = ((e, t) => ({format: "html", ...e, set: !0, selection: !0, content: t}))(n, t);
                wC(e, o).each((t => {
                    const n = ((e, t) => {
                        if ("raw" !== t.format) {
                            const n = e.selection.getRng(), o = e.dom.getParent(n.commonAncestorContainer, e.dom.isBlock),
                                r = o ? {context: o.nodeName.toLowerCase()} : {},
                                s = e.parser.parse(t.content, {forced_root_block: !1, ...r, ...t});
                            return up({validate: !1}, e.schema).serialize(s)
                        }
                        return t.content
                    })(e, t), o = e.selection.getRng();
                    ((e, t, n) => {
                        const o = I.from(t.firstChild).map(yn), r = I.from(t.lastChild).map(yn);
                        e.deleteContents(), e.insertNode(t);
                        const s = o.bind(Bn).filter(Kt).bind(ew), a = r.bind(Pn).filter(Kt).bind(ew);
                        tw(s, o, e, !0, n), tw(a, r, e, !1, n), e.collapse(!1)
                    })(o, o.createContextualFragment(n), e.schema), e.selection.setRng(o), sg(e, o), xC(e, n, t)
                }))
            })(o, e, t), l = e => {
                const t = c();
                t.collapse(!!e), u(t)
            }, d = () => t.getSelection ? t.getSelection() : t.document.selection, c = () => {
                let n;
                const a = (e, t, n) => {
                    try {
                        return t.compareBoundaryPoints(e, n)
                    } catch (e) {
                        return -1
                    }
                }, i = t.document;
                if (C(o.bookmark) && !Rg(o)) {
                    const e = hg(o);
                    if (e.isSome()) return e.map((e => Mg(o, [e])[0])).getOr(i.createRange())
                }
                try {
                    const e = d();
                    e && !$o(e.anchorNode) && (n = e.rangeCount > 0 ? e.getRangeAt(0) : i.createRange(), n = Mg(o, [n])[0])
                } catch (e) {
                }
                if (n || (n = i.createRange()), rr(n.startContainer) && n.collapsed) {
                    const t = e.getRoot();
                    n.setStart(t, 0), n.setEnd(t, 0)
                }
                return r && s && (0 === a(n.START_TO_START, n, r) && 0 === a(n.END_TO_END, n, r) ? n = s : (r = null, s = null)), n
            }, u = (e, t) => {
                if (!(e => !!e && ow(e.startContainer) && ow(e.endContainer))(e)) return;
                const n = d();
                if (e = o.dispatch("SetSelectionRange", {range: e, forward: t}).range, n) {
                    s = e;
                    try {
                        n.removeAllRanges(), n.addRange(e)
                    } catch (e) {
                    }
                    !1 === t && n.extend && (n.collapse(e.endContainer, e.endOffset), n.extend(e.startContainer, e.startOffset)), r = n.rangeCount > 0 ? n.getRangeAt(0) : null
                }
                if (!e.collapsed && e.startContainer === e.endContainer && (null == n ? void 0 : n.setBaseAndExtent) && e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes()) {
                    const t = e.startContainer.childNodes[e.startOffset];
                    t && "IMG" === t.nodeName && (n.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), n.anchorNode === e.startContainer && n.focusNode === e.endContainer || n.setBaseAndExtent(t, 0, t, 1))
                }
                o.dispatch("AfterSetSelectionRange", {range: e, forward: t})
            }, m = () => {
                const t = d(), n = null == t ? void 0 : t.anchorNode, o = null == t ? void 0 : t.focusNode;
                if (!t || !n || !o || $o(n) || $o(o)) return !0;
                const r = e.createRng(), s = e.createRng();
                try {
                    r.setStart(n, t.anchorOffset), r.collapse(!0), s.setStart(o, t.focusOffset), s.collapse(!0)
                } catch (e) {
                    return !0
                }
                return r.compareBoundaryPoints(r.START_TO_START, s) <= 0
            }, f = {
                dom: e,
                win: t,
                serializer: n,
                editor: o,
                expand: (t = {type: "word"}) => u(Uf(e).expand(c(), t)),
                collapse: l,
                setCursorLocation: (t, n) => {
                    const r = e.createRng();
                    C(t) && C(n) ? (r.setStart(t, n), r.setEnd(t, n), u(r), l(!1)) : (sm(e, r, o.getBody(), !0), u(r))
                },
                getContent: e => ((e, t = {}) => ((e, t, n) => JC(e).selection.getContent(t, n))(e, t.format ? t.format : "html", t))(o, e),
                setContent: i,
                getBookmark: (e, t) => g.getBookmark(e, t),
                moveToBookmark: e => g.moveToBookmark(e),
                select: (t, n) => (((e, t, n) => I.from(t).bind((t => I.from(t.parentNode).map((o => {
                    const r = e.nodeIndex(t), s = e.createRng();
                    return s.setStart(o, r), s.setEnd(o, r + 1), n && (sm(e, s, t, !0), sm(e, s, t, !1)), s
                })))))(e, t, n).each(u), t),
                isCollapsed: () => {
                    const e = c(), t = d();
                    return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed)
                },
                isEditable: () => {
                    const t = c(), n = o.getBody().querySelectorAll('[data-mce-selected="1"]');
                    return n.length > 0 ? ne(n, (t => e.isEditable(t.parentElement))) : Og(e, t)
                },
                isForward: m,
                setNode: t => (i(e.getOuterHTML(t)), t),
                getNode: () => ((e, t) => {
                    if (!t) return e;
                    let n = t.startContainer, o = t.endContainer;
                    const r = t.startOffset, s = t.endOffset;
                    let a = t.commonAncestorContainer;
                    t.collapsed || (n === o && s - r < 2 && n.hasChildNodes() && (a = n.childNodes[r]), er(n) && er(o) && (n = n.length === r ? Lg(n.nextSibling, !0) : n.parentNode, o = 0 === s ? Lg(o.previousSibling, !1) : o.parentNode, n && n === o && (a = n)));
                    const i = er(a) ? a.parentNode : a;
                    return Vo(i) ? i : e
                })(o.getBody(), c()),
                getSel: d,
                setRng: u,
                getRng: c,
                getStart: e => Pg(o.getBody(), c(), e),
                getEnd: e => Dg(o.getBody(), c(), e),
                getSelectedBlocks: (t, n) => ((e, t, n, o) => {
                    const r = [], s = e.getRoot(), a = e.getParent(n || Pg(s, t, t.collapsed), e.isBlock),
                        i = e.getParent(o || Dg(s, t, t.collapsed), e.isBlock);
                    if (a && a !== s && r.push(a), a && i && a !== i) {
                        let t;
                        const n = new jo(a, s);
                        for (; (t = n.next()) && t !== i;) e.isBlock(t) && r.push(t)
                    }
                    return i && a !== i && i !== s && r.push(i), r
                })(e, c(), t, n),
                normalize: () => {
                    const t = c(), n = d();
                    if (!(Ju(n).length > 1) && am(o)) {
                        const n = Mf(e, t);
                        return n.each((e => {
                            u(e, m())
                        })), n.getOr(t)
                    }
                    return t
                },
                selectorChanged: (e, t) => (a(e, t), f),
                selectorChangedWithUnbind: a,
                getScrollContainer: () => {
                    let t, n = e.getRoot();
                    for (; n && "BODY" !== n.nodeName;) {
                        if (n.scrollHeight > n.clientHeight) {
                            t = n;
                            break
                        }
                        n = n.parentNode
                    }
                    return t
                },
                scrollIntoView: (e, t) => {
                    C(e) ? ((e, t, n) => {
                        (e.inline ? ng : rg)(e, t, n)
                    })(o, e, t) : sg(o, c(), t)
                },
                placeCaretAt: (e, t) => u(Rf(e, t, o.getDoc())),
                getBoundingClientRect: () => {
                    const e = c();
                    return e.collapsed ? Vi.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect()
                },
                destroy: () => {
                    t = r = s = null, p.destroy()
                }
            }, g = Jm(f), p = mf(f, o);
            return f.bookmarkManager = g, f.controlSelection = p, f
        }, sw = (e, t, n) => {
            -1 === Pt.inArray(t, n) && (e.addAttributeFilter(n, ((e, t) => {
                let n = e.length;
                for (; n--;) e[n].attr(t, null)
            })), t.push(n))
        }, aw = (e, t) => {
            const n = ["data-mce-selected"],
                o = {entity_encoding: "named", remove_trailing_brs: !0, pad_empty_with_br: !1, ...e},
                r = t && t.dom ? t.dom : za.DOM, s = t && t.schema ? t.schema : ua(o), a = bC(o, s);
            return ((e, t, n) => {
                e.addAttributeFilter("data-mce-tabindex", ((e, t) => {
                    let n = e.length;
                    for (; n--;) {
                        const o = e[n];
                        o.attr("tabindex", o.attr("data-mce-tabindex")), o.attr(t, null)
                    }
                })), e.addAttributeFilter("src,href,style", ((e, o) => {
                    const r = "data-mce-" + o, s = t.url_converter, a = t.url_converter_scope;
                    let i = e.length;
                    for (; i--;) {
                        const t = e[i];
                        let l = t.attr(r);
                        void 0 !== l ? (t.attr(o, l.length > 0 ? l : null), t.attr(r, null)) : (l = t.attr(o), "style" === o ? l = n.serializeStyle(n.parseStyle(l), t.name) : s && (l = s.call(a, l, o, t.name)), t.attr(o, l.length > 0 ? l : null))
                    }
                })), e.addAttributeFilter("class", (e => {
                    let t = e.length;
                    for (; t--;) {
                        const n = e[t];
                        let o = n.attr("class");
                        o && (o = o.replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), n.attr("class", o.length > 0 ? o : null))
                    }
                })), e.addAttributeFilter("data-mce-type", ((e, t, n) => {
                    let o = e.length;
                    for (; o--;) {
                        const t = e[o];
                        if ("bookmark" === t.attr("data-mce-type") && !n.cleanup) {
                            const e = I.from(t.firstChild).exists((e => {
                                var t;
                                return !Pr(null !== (t = e.value) && void 0 !== t ? t : "")
                            }));
                            e ? t.unwrap() : t.remove()
                        }
                    }
                })), e.addNodeFilter("noscript", (e => {
                    var t;
                    let n = e.length;
                    for (; n--;) {
                        const o = e[n].firstChild;
                        o && (o.value = ea.decode(null !== (t = o.value) && void 0 !== t ? t : ""))
                    }
                })), e.addNodeFilter("script,style", ((e, n) => {
                    var o;
                    const r = e => e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "");
                    let s = e.length;
                    for (; s--;) {
                        const a = e[s], i = a.firstChild,
                            l = null !== (o = null == i ? void 0 : i.value) && void 0 !== o ? o : "";
                        if ("script" === n) {
                            const e = a.attr("type");
                            e && a.attr("type", "mce-no/type" === e ? null : e.replace(/^mce\-/, "")), "xhtml" === t.element_format && i && l.length > 0 && (i.value = "// <![CDATA[\n" + r(l) + "\n// ]]>")
                        } else "xhtml" === t.element_format && i && l.length > 0 && (i.value = "\x3c!--\n" + r(l) + "\n--\x3e")
                    }
                })), e.addNodeFilter("#comment", (e => {
                    let o = e.length;
                    for (; o--;) {
                        const r = e[o], s = r.value;
                        t.preserve_cdata && 0 === (null == s ? void 0 : s.indexOf("[CDATA[")) ? (r.name = "#cdata", r.type = 4, r.value = n.decode(s.replace(/^\[CDATA\[|\]\]$/g, ""))) : 0 === (null == s ? void 0 : s.indexOf("mce:protected ")) && (r.name = "#text", r.type = 3, r.raw = !0, r.value = unescape(s).substr(14))
                    }
                })), e.addNodeFilter("xml:namespace,input", ((e, t) => {
                    let n = e.length;
                    for (; n--;) {
                        const o = e[n];
                        7 === o.type ? o.remove() : 1 === o.type && ("input" !== t || o.attr("type") || o.attr("type", "text"))
                    }
                })), e.addAttributeFilter("data-mce-type", (t => {
                    V(t, (t => {
                        "format-caret" === t.attr("data-mce-type") && (t.isEmpty(e.schema.getNonEmptyElements()) ? t.remove() : t.unwrap())
                    }))
                })), e.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-block,data-mce-type,data-mce-resize,data-mce-placeholder", ((e, t) => {
                    let n = e.length;
                    for (; n--;) e[n].attr(t, null)
                })), t.remove_trailing_brs && Wv(t, e, e.schema)
            })(a, o, r), {
                schema: s,
                addNodeFilter: a.addNodeFilter,
                addAttributeFilter: a.addAttributeFilter,
                serialize: (e, n = {}) => {
                    const i = {format: "html", ...n},
                        l = ((e, t, n) => ((e, t) => C(e) && e.hasEventListeners("PreProcess") && !t.no_events)(e, n) ? ((e, t, n) => {
                            let o;
                            const r = e.dom;
                            let s = t.cloneNode(!0);
                            const a = document.implementation;
                            if (a.createHTMLDocument) {
                                const e = a.createHTMLDocument("");
                                Pt.each("BODY" === s.nodeName ? s.childNodes : [s], (t => {
                                    e.body.appendChild(e.importNode(t, !0))
                                })), s = "BODY" !== s.nodeName ? e.body.firstChild : e.body, o = r.doc, r.doc = e
                            }
                            return ((e, t) => {
                                e.dispatch("PreProcess", t)
                            })(e, {...n, node: s}), o && (r.doc = o), s
                        })(e, t, n) : t)(t, e, i), d = ((e, t, n) => {
                            const o = Dr(n.getInner ? t.innerHTML : e.getOuterHTML(t));
                            return n.selection || Ar(yn(t)) ? o : Pt.trim(o)
                        })(r, l, i), c = ((e, t, n) => {
                            const o = n.selection ? {forced_root_block: !1, ...n} : n, r = e.parse(t, o);
                            return (e => {
                                const t = e => "br" === (null == e ? void 0 : e.name), n = e.lastChild;
                                if (t(n)) {
                                    const e = n.prev;
                                    t(e) && (n.remove(), e.remove())
                                }
                            })(r), r
                        })(a, d, i);
                    return "tree" === i.format ? c : ((e, t, n, o, r) => {
                        const s = ((e, t, n) => up(e, t).serialize(n))(t, n, o);
                        return ((e, t, n) => {
                            if (!t.no_events && e) {
                                const o = ((e, t) => e.dispatch("PostProcess", t))(e, {...t, content: n});
                                return o.content
                            }
                            return n
                        })(e, r, s)
                    })(t, o, s, c, i)
                },
                addRules: s.addValidElements,
                setRules: s.setValidElements,
                addTempAttr: T(sw, a, n),
                getTempAttrs: N(n),
                getNodeFilters: a.getNodeFilters,
                getAttributeFilters: a.getAttributeFilters,
                removeNodeFilter: a.removeNodeFilter,
                removeAttributeFilter: a.removeAttributeFilter
            }
        }, iw = (e, t) => {
            const n = aw(e, t);
            return {
                schema: n.schema,
                addNodeFilter: n.addNodeFilter,
                addAttributeFilter: n.addAttributeFilter,
                serialize: n.serialize,
                addRules: n.addRules,
                setRules: n.setRules,
                addTempAttr: n.addTempAttr,
                getTempAttrs: n.getTempAttrs,
                getNodeFilters: n.getNodeFilters,
                getAttributeFilters: n.getAttributeFilters,
                removeNodeFilter: n.removeNodeFilter,
                removeAttributeFilter: n.removeAttributeFilter
            }
        }, lw = (e, t, n = {}) => {
            const o = ((e, t) => ({format: "html", ...e, set: !0, content: t}))(n, t);
            return wC(e, o).map((t => {
                const n = ((e, t, n) => QC(e).editor.setContent(t, n))(e, t.content, t);
                return xC(e, n.html, t), n.content
            })).getOr(t)
        },
        dw = "autoresize_on_init,content_editable_state,padd_empty_with_br,block_elements,boolean_attributes,editor_deselector,editor_selector,elements,file_browser_callback_types,filepicker_validator_handler,force_hex_style_colors,force_p_newlines,gecko_spellcheck,images_dataimg_filter,media_scripts,mode,move_caret_before_on_enter_elements,non_empty_elements,self_closing_elements,short_ended_elements,special,spellchecker_select_languages,spellchecker_whitelist,tab_focus,tabfocus_elements,table_responsive_width,text_block_elements,text_inline_elements,toolbar_drawer,types,validate,whitespace_elements,paste_enable_default_filters,paste_filter_drop,paste_word_valid_elements,paste_retain_style_properties,paste_convert_word_fake_lists".split(","),
        cw = "template_cdate_classes,template_mdate_classes,template_selected_content_classes,template_preview_replace_values,template_replace_values,templates,template_cdate_format,template_mdate_format".split(","),
        uw = "bbcode,colorpicker,contextmenu,fullpage,legacyoutput,spellchecker,textcolor".split(","),
        mw = [{name: "template", replacedWith: "Advanced Template"}, {name: "rtc"}], fw = (e, t) => {
            const n = Y(t, (t => Ee(e, t)));
            return ae(n)
        }, gw = e => {
            const t = fw(e, dw), n = e.forced_root_block;
            return !1 !== n && "" !== n || t.push("forced_root_block (false only)"), ae(t)
        }, pw = e => fw(e, cw), hw = (e, t) => {
            const n = Pt.makeMap(e.plugins, " "), o = Y(t, (e => Ee(n, e)));
            return ae(o)
        }, bw = e => hw(e, uw), vw = e => hw(e, mw.map((e => e.name))),
        yw = e => J(mw, (t => t.name === e)).fold((() => e), (t => t.replacedWith ? `${e}, replaced by ${t.replacedWith}` : e)),
        Cw = za.DOM, ww = e => I.from(e).each((e => e.destroy())), xw = (() => {
            const e = {};
            return {
                add: (t, n) => {
                    e[t] = n
                }, get: t => e[t] ? e[t] : {icons: {}}, has: t => Ee(e, t)
            }
        })(), Ew = Ya.ModelManager, _w = (e, t) => t.dom[e], kw = (e, t) => parseInt(co(t, e), 10),
        Sw = T(_w, "clientWidth"), Nw = T(_w, "clientHeight"), Rw = T(kw, "margin-top"), Aw = T(kw, "margin-left"),
        Tw = e => {
            const t = [], n = () => {
                const t = e.theme;
                return t && t.getNotificationManagerImpl ? t.getNotificationManagerImpl() : (() => {
                    const e = () => {
                        throw new Error("Theme did not provide a NotificationManager implementation.")
                    };
                    return {open: e, close: e, getArgs: e}
                })()
            }, o = () => I.from(t[0]), r = () => {
                V(t, (e => {
                    e.reposition()
                }))
            }, s = e => {
                Z(t, (t => t === e)).each((e => {
                    t.splice(e, 1)
                }))
            }, a = (a, i = !0) => e.removed || !(e => {
                return (t = e.inline ? e.getBody() : e.getContentAreaContainer(), I.from(t).map(yn)).map(Gn).getOr(!1);
                var t
            })(e) ? {} : (i && e.dispatch("BeforeOpenNotification", {notification: a}), J(t, (e => {
                return t = n().getArgs(e), o = a, !(t.type !== o.type || t.text !== o.text || t.progressBar || t.timeout || o.progressBar || o.timeout);
                var t, o
            })).getOrThunk((() => {
                e.editorManager.setActive(e);
                const i = n().open(a, (() => {
                    s(i), r(), Ag(e) && o().fold((() => e.focus()), (e => ag(yn(e.getEl()))))
                }));
                return (e => {
                    t.push(e)
                })(i), r(), e.dispatch("OpenNotification", {notification: {...i}}), i
            }))), i = N(t);
            return (e => {
                e.on("SkinLoaded", (() => {
                    const t = gd(e);
                    t && a({text: t, type: "warning", timeout: 0}, !1), r()
                })), e.on("show ResizeEditor ResizeWindow NodeChange", (() => {
                    requestAnimationFrame(r)
                })), e.on("remove", (() => {
                    V(t.slice(), (e => {
                        n().close(e)
                    }))
                }))
            })(e), {
                open: a, close: () => {
                    o().each((e => {
                        n().close(e), s(e), r()
                    }))
                }, getNotifications: i
            }
        }, Ow = Ya.PluginManager, Bw = Ya.ThemeManager, Pw = e => {
            let t = [];
            const n = () => {
                const t = e.theme;
                return t && t.getWindowManagerImpl ? t.getWindowManagerImpl() : (() => {
                    const e = () => {
                        throw new Error("Theme did not provide a WindowManager implementation.")
                    };
                    return {open: e, openUrl: e, alert: e, confirm: e, close: e}
                })()
            }, o = (e, t) => (...n) => t ? t.apply(e, n) : void 0, r = n => {
                (t => {
                    e.dispatch("CloseWindow", {dialog: t})
                })(n), t = Y(t, (e => e !== n)), 0 === t.length && e.focus()
            }, s = n => {
                e.editorManager.setActive(e), pg(e), e.ui.show();
                const o = n();
                return (n => {
                    t.push(n), (t => {
                        e.dispatch("OpenWindow", {dialog: t})
                    })(n)
                })(o), o
            };
            return e.on("remove", (() => {
                V(t, (e => {
                    n().close(e)
                }))
            })), {
                open: (e, t) => s((() => n().open(e, t, r))),
                openUrl: e => s((() => n().openUrl(e, r))),
                alert: (e, t, r) => {
                    const s = n();
                    s.alert(e, o(r || s, t))
                },
                confirm: (e, t, r) => {
                    const s = n();
                    s.confirm(e, o(r || s, t))
                },
                close: () => {
                    I.from(t[t.length - 1]).each((e => {
                        n().close(e), r(e)
                    }))
                }
            }
        }, Dw = (e, t) => {
            e.notificationManager.open({type: "error", text: t})
        }, Lw = (e, t) => {
            e._skinLoaded ? Dw(e, t) : e.on("SkinLoaded", (() => {
                Dw(e, t)
            }))
        }, Mw = (e, t, n) => {
            ef(e, t, {message: n}), console.error(n)
        }, Iw = (e, t, n) => n ? `Failed to load ${e}: ${n} from url ${t}` : `Failed to load ${e} url: ${t}`,
        Fw = (e, ...t) => {
            const n = window.console;
            n && (n.error ? n.error(e, ...t) : n.log(e, ...t))
        }, Uw = e => "content/" + e + "/content.css", zw = (e, t) => {
            const n = e.editorManager.baseURL + "/skins/content", o = `content${e.editorManager.suffix}.css`;
            return q(t, (t => (e => tinymce.Resource.has(Uw(e)))(t) ? t : (e => /^[a-z0-9\-]+$/i.test(e))(t) && !e.inline ? `${n}/${t}/${o}` : e.documentBaseURI.toAbsolute(t)))
        }, jw = (e, t) => {
            const n = {};
            return {
                findAll: (o, r = M) => {
                    const s = Y((e => e ? ce(e.getElementsByTagName("img")) : [])(o), (t => {
                        const n = t.src;
                        return !t.hasAttribute("data-mce-bogus") && !t.hasAttribute("data-mce-placeholder") && !(!n || n === At.transparentSrc) && (He(n, "blob:") ? !e.isUploaded(n) && r(t) : !!He(n, "data:") && r(t))
                    })), a = q(s, (e => {
                        const o = e.src;
                        if (Ee(n, o)) return n[o].then((t => m(t) ? t : {image: e, blobInfo: t.blobInfo}));
                        {
                            const r = ((e, t) => {
                                const n = () => Promise.reject("Invalid data URI");
                                if (He(t, "blob:")) {
                                    const s = e.getByUri(t);
                                    return C(s) ? Promise.resolve(s) : (o = t, He(o, "blob:") ? (e => fetch(e).then((e => e.ok ? e.blob() : Promise.reject())).catch((() => Promise.reject({
                                        message: `Cannot convert ${e} to Blob. Resource might not exist or is inaccessible.`,
                                        uriType: "blob"
                                    }))))(o) : He(o, "data:") ? (r = o, new Promise(((e, t) => {
                                        Kv(r).bind((({type: e, data: t, base64Encoded: n}) => Yv(e, t, n))).fold((() => t("Invalid data URI")), e)
                                    }))) : Promise.reject("Unknown URI format")).then((t => Gv(t).then((o => Qv(o, !1, (n => I.some(Jv(e, t, n)))).getOrThunk(n)))))
                                }
                                var o, r;
                                return He(t, "data:") ? Zv(e, t).fold(n, (e => Promise.resolve(e))) : Promise.reject("Unknown image data format")
                            })(t, o).then((t => (delete n[o], {image: e, blobInfo: t}))).catch((e => (delete n[o], e)));
                            return n[o] = r, r
                        }
                    }));
                    return Promise.all(a)
                }
            }
        }, Hw = () => {
            let e = {};
            const t = (e, t) => ({status: e, resultUri: t}), n = t => t in e;
            return {
                hasBlobUri: n,
                getResultUri: t => {
                    const n = e[t];
                    return n ? n.resultUri : null
                },
                isPending: t => !!n(t) && 1 === e[t].status,
                isUploaded: t => !!n(t) && 2 === e[t].status,
                markPending: n => {
                    e[n] = t(1, null)
                },
                markUploaded: (n, o) => {
                    e[n] = t(2, o)
                },
                removeFailed: t => {
                    delete e[t]
                },
                destroy: () => {
                    e = {}
                }
            }
        };
    let $w = 0;
    const qw = (e, t) => {
            const n = {}, o = (e, n) => new Promise(((o, r) => {
                    const s = new XMLHttpRequest;
                    s.open("POST", t.url), s.withCredentials = t.credentials, s.upload.onprogress = e => {
                        n(e.loaded / e.total * 100)
                    }, s.onerror = () => {
                        r("Image upload failed due to a XHR Transport error. Code: " + s.status)
                    }, s.onload = () => {
                        if (s.status < 200 || s.status >= 300) return void r("HTTP Error: " + s.status);
                        const e = JSON.parse(s.responseText);
                        var n, a;
                        e && m(e.location) ? o((n = t.basePath, a = e.location, n ? n.replace(/\/$/, "") + "/" + a.replace(/^\//, "") : a)) : r("Invalid JSON: " + s.responseText)
                    };
                    const a = new FormData;
                    a.append("file", e.blob(), e.filename()), s.send(a)
                })), r = w(t.handler) ? t.handler : o, s = (e, t) => ({url: t, blobInfo: e, status: !0}),
                a = (e, t) => ({url: "", blobInfo: e, status: !1, error: t}), i = (e, t) => {
                    Pt.each(n[e], (e => {
                        e(t)
                    })), delete n[e]
                };
            return {
                upload: (l, d) => t.url || r !== o ? ((t, o) => (t = Pt.grep(t, (t => !e.isUploaded(t.blobUri()))), Promise.all(Pt.map(t, (t => e.isPending(t.blobUri()) ? (e => {
                    const t = e.blobUri();
                    return new Promise((e => {
                        n[t] = n[t] || [], n[t].push(e)
                    }))
                })(t) : ((t, n, o) => (e.markPending(t.blobUri()), new Promise((r => {
                    let l, d;
                    try {
                        const c = () => {
                            l && (l.close(), d = _)
                        }, u = n => {
                            c(), e.markUploaded(t.blobUri(), n), i(t.blobUri(), s(t, n)), r(s(t, n))
                        }, f = n => {
                            c(), e.removeFailed(t.blobUri()), i(t.blobUri(), a(t, n)), r(a(t, n))
                        };
                        d = e => {
                            e < 0 || e > 100 || I.from(l).orThunk((() => I.from(o).map(P))).each((t => {
                                l = t, t.progressBar.value(e)
                            }))
                        }, n(t, d).then(u, (e => {
                            f(m(e) ? {message: e} : e)
                        }))
                    } catch (e) {
                        r(a(t, e))
                    }
                }))))(t, r, o))))))(l, d) : new Promise((e => {
                    e([])
                }))
            }
        }, Vw = e => () => e.notificationManager.open({
            text: e.translate("Image uploading..."),
            type: "info",
            timeout: -1,
            progressBar: !0
        }), Ww = (e, t) => qw(t, {url: Gl(e), basePath: Xl(e), credentials: Ql(e), handler: Jl(e)}), Kw = e => {
            const t = (() => {
                let e = [];
                const t = e => {
                    if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");
                    const t = e.id || "blobid" + $w++ + (() => {
                        const e = () => Math.round(4294967295 * Math.random()).toString(36);
                        return "s" + (new Date).getTime().toString(36) + e() + e() + e()
                    })(), n = e.name || t, o = e.blob;
                    var r;
                    return {
                        id: N(t),
                        name: N(n),
                        filename: N(e.filename || n + "." + (r = o.type, {
                            "image/jpeg": "jpg",
                            "image/jpg": "jpg",
                            "image/gif": "gif",
                            "image/png": "png",
                            "image/apng": "apng",
                            "image/avif": "avif",
                            "image/svg+xml": "svg",
                            "image/webp": "webp",
                            "image/bmp": "bmp",
                            "image/tiff": "tiff"
                        }[r.toLowerCase()] || "dat")),
                        blob: N(o),
                        base64: N(e.base64),
                        blobUri: N(e.blobUri || URL.createObjectURL(o)),
                        uri: N(e.uri)
                    }
                }, n = t => J(e, t).getOrUndefined(), o = e => n((t => t.id() === e));
                return {
                    create: (e, n, o, r, s) => {
                        if (m(e)) return t({id: e, name: r, filename: s, blob: n, base64: o});
                        if (f(e)) return t(e);
                        throw new Error("Unknown input type")
                    },
                    add: t => {
                        o(t.id()) || e.push(t)
                    },
                    get: o,
                    getByUri: e => n((t => t.blobUri() === e)),
                    getByData: (e, t) => n((n => n.base64() === e && n.blob().type === t)),
                    findFirst: n,
                    removeByUri: t => {
                        e = Y(e, (e => e.blobUri() !== t || (URL.revokeObjectURL(e.blobUri()), !1)))
                    },
                    destroy: () => {
                        V(e, (e => {
                            URL.revokeObjectURL(e.blobUri())
                        })), e = []
                    }
                }
            })();
            let n, o;
            const r = Hw(), s = [], a = t => n => e.selection ? t(n) : [], i = (e, t, n) => {
                    let o = 0;
                    do {
                        o = e.indexOf(t, o), -1 !== o && (e = e.substring(0, o) + n + e.substr(o + t.length), o += n.length - t.length + 1)
                    } while (-1 !== o);
                    return e
                }, l = (e, t, n) => {
                    const o = `src="${n}"${n === At.transparentSrc ? ' data-mce-placeholder="1"' : ""}`;
                    return e = i(e, `src="${t}"`, o), i(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"')
                }, d = (t, n) => {
                    V(e.undoManager.data, (e => {
                        "fragmented" === e.type ? e.fragments = q(e.fragments, (e => l(e, t, n))) : e.content = l(e.content, t, n)
                    }))
                }, c = () => (n || (n = Ww(e, r)), p().then(a((o => {
                    const r = q(o, (e => e.blobInfo));
                    return n.upload(r, Vw(e)).then(a((n => {
                        const r = [];
                        let s = !1;
                        const a = q(n, ((n, a) => {
                            const {blobInfo: i, image: l} = o[a];
                            let c = !1;
                            return n.status && Wl(e) ? (n.url && !je(l.src, n.url) && (s = !0), t.removeByUri(l.src), XC(e) || ((t, n) => {
                                const o = e.convertURL(n, "src");
                                var r;
                                d(t.src, n), Zt(yn(t), {
                                    src: Vl(e) ? (r = n, r + (-1 === r.indexOf("?") ? "?" : "&") + (new Date).getTime()) : n,
                                    "data-mce-src": o
                                })
                            })(l, n.url)) : n.error && (n.error.remove && (d(l.src, At.transparentSrc), r.push(l), c = !0), ((e, t) => {
                                Lw(e, Ka.translate(["Failed to upload image: {0}", t]))
                            })(e, n.error.message)), {element: l, status: n.status, uploadUri: n.url, blobInfo: i, removed: c}
                        }));
                        return r.length > 0 && !XC(e) ? e.undoManager.transact((() => {
                            V(_o(r), (n => {
                                const o = An(n);
                                xo(n), o.each((e => t => {
                                    ((e, t) => e.dom.isEmpty(t.dom) && C(e.schema.getTextBlockElements()[Ht(t)]))(e, t) && vo(t, hn('<br data-mce-bogus="1" />'))
                                })(e)), t.removeByUri(n.dom.src)
                            }))
                        })) : s && e.undoManager.dispatchChange(), a
                    })))
                })))), u = () => ql(e) ? c() : Promise.resolve([]), g = e => ne(s, (t => t(e))),
                p = () => (o || (o = jw(r, t)), o.findAll(e.getBody(), g).then(a((t => {
                    const n = Y(t, (t => m(t) ? (Lw(e, t), !1) : "blob" !== t.uriType));
                    return XC(e) || V(n, (e => {
                        d(e.image.src, e.blobInfo.blobUri()), e.image.src = e.blobInfo.blobUri(), e.image.removeAttribute("data-mce-src")
                    })), n
                })))), h = n => n.replace(/src="(blob:[^"]+)"/g, ((n, o) => {
                    const s = r.getResultUri(o);
                    if (s) return 'src="' + s + '"';
                    let a = t.getByUri(o);
                    return a || (a = X(e.editorManager.get(), ((e, t) => e || t.editorUpload && t.editorUpload.blobCache.getByUri(o)), void 0)), a ? 'src="data:' + a.blob().type + ";base64," + a.base64() + '"' : n
                }));
            return e.on("SetContent", (() => {
                ql(e) ? u() : p()
            })), e.on("RawSaveContent", (e => {
                e.content = h(e.content)
            })), e.on("GetContent", (e => {
                e.source_view || "raw" === e.format || "tree" === e.format || (e.content = h(e.content))
            })), e.on("PostRender", (() => {
                e.parser.addNodeFilter("img", (e => {
                    V(e, (e => {
                        const n = e.attr("src");
                        if (!n || t.getByUri(n)) return;
                        const o = r.getResultUri(n);
                        o && e.attr("src", o)
                    }))
                }))
            })), {
                blobCache: t, addFilter: e => {
                    s.push(e)
                }, uploadImages: c, uploadImagesAuto: u, scanForImages: p, destroy: () => {
                    t.destroy(), r.destroy(), o = n = null
                }
            }
        }, Yw = {remove_similar: !0, inherit: !1}, Gw = {selector: "td,th", ...Yw}, Xw = {
            tablecellbackgroundcolor: {styles: {backgroundColor: "%value"}, ...Gw},
            tablecellverticalalign: {styles: {"vertical-align": "%value"}, ...Gw},
            tablecellbordercolor: {styles: {borderColor: "%value"}, ...Gw},
            tablecellclass: {classes: ["%value"], ...Gw},
            tableclass: {selector: "table", classes: ["%value"], ...Yw},
            tablecellborderstyle: {styles: {borderStyle: "%value"}, ...Gw},
            tablecellborderwidth: {styles: {borderWidth: "%value"}, ...Gw}
        }, Qw = N(Xw), Jw = Pt.each, Zw = za.DOM, ex = e => C(e) && f(e), tx = (e, t) => {
            const n = t && t.schema || ua({}), o = e => {
                const t = m(e) ? {name: e, classes: [], attrs: {}} : e, n = Zw.create(t.name);
                return ((e, t) => {
                    t.classes.length > 0 && Zw.addClass(e, t.classes.join(" ")), Zw.setAttribs(e, t.attrs)
                })(n, t), n
            }, r = (e, t, s) => {
                let a;
                const i = t[0], l = ex(i) ? i.name : void 0, d = ((e, t) => {
                    const o = n.getElementRule(e.nodeName.toLowerCase()), r = null == o ? void 0 : o.parentsRequired;
                    return !(!r || !r.length) && (t && H(r, t) ? t : r[0])
                })(e, l);
                if (d) l === d ? (a = i, t = t.slice(1)) : a = d; else if (i) a = i, t = t.slice(1); else if (!s) return e;
                const c = a ? o(a) : Zw.create("div");
                c.appendChild(e), s && Pt.each(s, (t => {
                    const n = o(t);
                    c.insertBefore(n, e)
                }));
                const u = ex(a) ? a.siblings : void 0;
                return r(c, t, u)
            }, s = Zw.create("div");
            if (e.length > 0) {
                const t = e[0], n = o(t), a = ex(t) ? t.siblings : void 0;
                s.appendChild(r(n, e.slice(1), a))
            }
            return s
        }, nx = e => {
            let t = "div";
            const n = {name: t, classes: [], attrs: {}, selector: e = Pt.trim(e)};
            return "*" !== e && (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, ((e, t, o, r, s) => {
                switch (t) {
                    case"#":
                        n.attrs.id = o;
                        break;
                    case".":
                        n.classes.push(o);
                        break;
                    case":":
                        -1 !== Pt.inArray("checked disabled enabled read-only required".split(" "), o) && (n.attrs[o] = o)
                }
                if ("[" === r) {
                    const e = s.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                    e && (n.attrs[e[1]] = e[2])
                }
                return ""
            }))), n.name = t || "div", n
        }, ox = (e, t) => {
            let n = "", o = wd(e);
            if ("" === o) return "";
            const r = e => m(e) ? e.replace(/%(\w+)/g, "") : "",
                s = (t, n) => Zw.getStyle(null != n ? n : e.getBody(), t, !0);
            if (m(t)) {
                const n = e.formatter.get(t);
                if (!n) return "";
                t = n[0]
            }
            if ("preview" in t) {
                const e = t.preview;
                if (!1 === e) return "";
                o = e || o
            }
            let a, i = t.block || t.inline || "span";
            const l = (d = t.selector, m(d) ? (d = (d = d.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1"), Pt.map(d.split(/(?:>|\s+(?![^\[\]]+\]))/), (e => {
                const t = Pt.map(e.split(/(?:~\+|~|\+)/), nx), n = t.pop();
                return t.length && (n.siblings = t), n
            })).reverse()) : []);
            var d;
            l.length > 0 ? (l[0].name || (l[0].name = i), i = t.selector, a = tx(l, e)) : a = tx([i], e);
            const c = Zw.select(i, a)[0] || a.firstChild;
            Jw(t.styles, ((e, t) => {
                const n = r(e);
                n && Zw.setStyle(c, t, n)
            })), Jw(t.attributes, ((e, t) => {
                const n = r(e);
                n && Zw.setAttrib(c, t, n)
            })), Jw(t.classes, (e => {
                const t = r(e);
                Zw.hasClass(c, t) || Zw.addClass(c, t)
            })), e.dispatch("PreviewFormats"), Zw.setStyles(a, {
                position: "absolute",
                left: -65535
            }), e.getBody().appendChild(a);
            const u = s("fontSize"), f = /px$/.test(u) ? parseInt(u, 10) : 0;
            return Jw(o.split(" "), (e => {
                let t = s(e, c);
                if (!("background-color" === e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && (t = s(e), "#ffffff" === Ca(t).toLowerCase()) || "color" === e && "#000000" === Ca(t).toLowerCase())) {
                    if ("font-size" === e && /em|%$/.test(t)) {
                        if (0 === f) return;
                        t = parseFloat(t) / (/%$/.test(t) ? 100 : 1) * f + "px"
                    }
                    "border" === e && t && (n += "padding:0 2px;"), n += e + ":" + t + ";"
                }
            })), e.dispatch("AfterPreviewFormats"), Zw.remove(a), n
        }, rx = e => {
            const t = (e => {
                const t = {}, n = (e, o) => {
                    e && (m(e) ? (p(o) || (o = [o]), V(o, (e => {
                        v(e.deep) && (e.deep = !Sm(e)), v(e.split) && (e.split = !Sm(e) || Nm(e)), v(e.remove) && Sm(e) && !Nm(e) && (e.remove = "none"), Sm(e) && Nm(e) && (e.mixed = !0, e.block_expand = !0), m(e.classes) && (e.classes = e.classes.split(/\s+/))
                    })), t[e] = o) : ge(e, ((e, t) => {
                        n(t, e)
                    })))
                };
                return n((e => {
                    const t = e.dom, n = e.schema.type, o = {
                        valigntop: [{selector: "td,th", styles: {verticalAlign: "top"}}],
                        valignmiddle: [{selector: "td,th", styles: {verticalAlign: "middle"}}],
                        valignbottom: [{selector: "td,th", styles: {verticalAlign: "bottom"}}],
                        alignleft: [{
                            selector: "figure.image",
                            collapsed: !1,
                            classes: "align-left",
                            ceFalseOverride: !0,
                            preview: "font-family font-size"
                        }, {
                            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
                            styles: {textAlign: "left"},
                            inherit: !1,
                            preview: !1
                        }, {
                            selector: "img,audio,video",
                            collapsed: !1,
                            styles: {float: "left"},
                            preview: "font-family font-size"
                        }, {
                            selector: "table",
                            collapsed: !1,
                            styles: {marginLeft: "0px", marginRight: "auto"},
                            onformat: e => {
                                t.setStyle(e, "float", null)
                            },
                            preview: "font-family font-size"
                        }, {
                            selector: ".mce-preview-object,[data-ephox-embed-iri]",
                            ceFalseOverride: !0,
                            styles: {float: "left"}
                        }],
                        aligncenter: [{
                            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
                            styles: {textAlign: "center"},
                            inherit: !1,
                            preview: "font-family font-size"
                        }, {
                            selector: "figure.image",
                            collapsed: !1,
                            classes: "align-center",
                            ceFalseOverride: !0,
                            preview: "font-family font-size"
                        }, {
                            selector: "img,audio,video",
                            collapsed: !1,
                            styles: {display: "block", marginLeft: "auto", marginRight: "auto"},
                            preview: !1
                        }, {
                            selector: "table",
                            collapsed: !1,
                            styles: {marginLeft: "auto", marginRight: "auto"},
                            preview: "font-family font-size"
                        }, {
                            selector: ".mce-preview-object",
                            ceFalseOverride: !0,
                            styles: {display: "table", marginLeft: "auto", marginRight: "auto"},
                            preview: !1
                        }, {
                            selector: "[data-ephox-embed-iri]",
                            ceFalseOverride: !0,
                            styles: {marginLeft: "auto", marginRight: "auto"},
                            preview: !1
                        }],
                        alignright: [{
                            selector: "figure.image",
                            collapsed: !1,
                            classes: "align-right",
                            ceFalseOverride: !0,
                            preview: "font-family font-size"
                        }, {
                            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
                            styles: {textAlign: "right"},
                            inherit: !1,
                            preview: "font-family font-size"
                        }, {
                            selector: "img,audio,video",
                            collapsed: !1,
                            styles: {float: "right"},
                            preview: "font-family font-size"
                        }, {
                            selector: "table",
                            collapsed: !1,
                            styles: {marginRight: "0px", marginLeft: "auto"},
                            onformat: e => {
                                t.setStyle(e, "float", null)
                            },
                            preview: "font-family font-size"
                        }, {
                            selector: ".mce-preview-object,[data-ephox-embed-iri]",
                            ceFalseOverride: !0,
                            styles: {float: "right"},
                            preview: !1
                        }],
                        alignjustify: [{
                            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
                            styles: {textAlign: "justify"},
                            inherit: !1,
                            preview: "font-family font-size"
                        }],
                        bold: [{inline: "strong", remove: "all", preserve_attributes: ["class", "style"]}, {
                            inline: "span",
                            styles: {fontWeight: "bold"}
                        }, {inline: "b", remove: "all", preserve_attributes: ["class", "style"]}],
                        italic: [{inline: "em", remove: "all", preserve_attributes: ["class", "style"]}, {
                            inline: "span",
                            styles: {fontStyle: "italic"}
                        }, {inline: "i", remove: "all", preserve_attributes: ["class", "style"]}],
                        underline: [{inline: "span", styles: {textDecoration: "underline"}, exact: !0}, {
                            inline: "u",
                            remove: "all",
                            preserve_attributes: ["class", "style"]
                        }],
                        strikethrough: (() => {
                            const e = {inline: "span", styles: {textDecoration: "line-through"}, exact: !0},
                                t = {inline: "strike", remove: "all", preserve_attributes: ["class", "style"]},
                                o = {inline: "s", remove: "all", preserve_attributes: ["class", "style"]};
                            return "html4" !== n ? [o, e, t] : [e, o, t]
                        })(),
                        forecolor: {
                            inline: "span",
                            styles: {color: "%value"},
                            links: !0,
                            remove_similar: !0,
                            clear_child_styles: !0
                        },
                        hilitecolor: {
                            inline: "span",
                            styles: {backgroundColor: "%value"},
                            links: !0,
                            remove_similar: !0,
                            clear_child_styles: !0
                        },
                        fontname: {inline: "span", toggle: !1, styles: {fontFamily: "%value"}, clear_child_styles: !0},
                        fontsize: {inline: "span", toggle: !1, styles: {fontSize: "%value"}, clear_child_styles: !0},
                        lineheight: {selector: "h1,h2,h3,h4,h5,h6,p,li,td,th,div", styles: {lineHeight: "%value"}},
                        fontsize_class: {inline: "span", attributes: {class: "%value"}},
                        blockquote: {block: "blockquote", wrapper: !0, remove: "all"},
                        subscript: {inline: "sub"},
                        superscript: {inline: "sup"},
                        code: {inline: "code"},
                        link: {
                            inline: "a",
                            selector: "a",
                            remove: "all",
                            split: !0,
                            deep: !0,
                            onmatch: (e, t, n) => qo(e) && e.hasAttribute("href"),
                            onformat: (e, n, o) => {
                                Pt.each(o, ((n, o) => {
                                    t.setAttrib(e, o, n)
                                }))
                            }
                        },
                        lang: {
                            inline: "span",
                            clear_child_styles: !0,
                            remove_similar: !0,
                            attributes: {
                                lang: "%value", "data-mce-lang": e => {
                                    var t;
                                    return null !== (t = null == e ? void 0 : e.customValue) && void 0 !== t ? t : null
                                }
                            }
                        },
                        removeformat: [{
                            selector: "b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small",
                            remove: "all",
                            split: !0,
                            expand: !1,
                            block_expand: !0,
                            deep: !0
                        }, {
                            selector: "span",
                            attributes: ["style", "class"],
                            remove: "empty",
                            split: !0,
                            expand: !1,
                            deep: !0
                        }, {selector: "*", attributes: ["style", "class"], split: !1, expand: !1, deep: !0}]
                    };
                    return Pt.each("p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(/\s/), (e => {
                        o[e] = {block: e, remove: "all"}
                    })), o
                })(e)), n(Qw()), n(Cd(e)), {
                    get: e => C(e) ? t[e] : t,
                    has: e => Ee(t, e),
                    register: n,
                    unregister: e => (e && t[e] && delete t[e], t)
                }
            })(e), n = $a({});
            return (e => {
                e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");
                for (let t = 1; t <= 6; t++) e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
                e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"])
            })(e), (e => {
                e.on("mouseup keydown", (t => {
                    var n;
                    ((e, t, n) => {
                        const o = e.selection, r = e.getBody();
                        Kb(e, null, n), 8 !== t && 46 !== t || !o.isCollapsed() || o.getStart().innerHTML !== $b || Kb(e, Lu(r, o.getStart()), !0), 37 !== t && 39 !== t || Kb(e, Lu(r, o.getStart()), !0)
                    })(e, t.keyCode, (n = e.selection.getRng().endContainer, er(n) && $e(n.data, br)))
                }))
            })(e), XC(e) || ((e, t) => {
                e.set({}), t.on("NodeChange", (n => {
                    Hv(t, n.element, e.get())
                })), t.on("FormatApply FormatRemove", (n => {
                    const o = I.from(n.node).map((e => dm(e) ? e : e.startContainer)).bind((e => qo(e) ? I.some(e) : I.from(e.parentElement))).getOrThunk((() => Uv(t)));
                    Hv(t, o, e.get())
                }))
            })(n, e), {
                get: t.get,
                has: t.has,
                register: t.register,
                unregister: t.unregister,
                apply: (t, n, o) => {
                    ((e, t, n, o) => {
                        JC(e).formatter.apply(t, n, o)
                    })(e, t, n, o)
                },
                remove: (t, n, o, r) => {
                    ((e, t, n, o, r) => {
                        JC(e).formatter.remove(t, n, o, r)
                    })(e, t, n, o, r)
                },
                toggle: (t, n, o) => {
                    ((e, t, n, o) => {
                        JC(e).formatter.toggle(t, n, o)
                    })(e, t, n, o)
                },
                match: (t, n, o, r) => ((e, t, n, o, r) => JC(e).formatter.match(t, n, o, r))(e, t, n, o, r),
                closest: t => ((e, t) => JC(e).formatter.closest(t))(e, t),
                matchAll: (t, n) => ((e, t, n) => JC(e).formatter.matchAll(t, n))(e, t, n),
                matchNode: (t, n, o, r) => ((e, t, n, o, r) => JC(e).formatter.matchNode(t, n, o, r))(e, t, n, o, r),
                canApply: t => ((e, t) => JC(e).formatter.canApply(t))(e, t),
                formatChanged: (t, o, r, s) => ((e, t, n, o, r, s) => JC(e).formatter.formatChanged(t, n, o, r, s))(e, n, t, o, r, s),
                getCssText: T(ox, e)
            }
        }, sx = e => {
            switch (e.toLowerCase()) {
                case"undo":
                case"redo":
                case"mcefocus":
                    return !0;
                default:
                    return !1
            }
        }, ax = e => {
            const t = Xa(), n = $a(0), o = $a(0), r = {
                data: [],
                typing: !1,
                beforeChange: () => {
                    ((e, t, n) => {
                        JC(e).undoManager.beforeChange(t, n)
                    })(e, n, t)
                },
                add: (s, a) => ((e, t, n, o, r, s, a) => JC(e).undoManager.add(t, n, o, r, s, a))(e, r, o, n, t, s, a),
                dispatchChange: () => {
                    e.setDirty(!0);
                    const t = jC(e);
                    t.bookmark = ml(e.selection), e.dispatch("change", {
                        level: t,
                        lastLevel: ie(r.data, o.get()).getOrUndefined()
                    })
                },
                undo: () => ((e, t, n, o) => JC(e).undoManager.undo(t, n, o))(e, r, n, o),
                redo: () => ((e, t, n) => JC(e).undoManager.redo(t, n))(e, o, r.data),
                clear: () => {
                    ((e, t, n) => {
                        JC(e).undoManager.clear(t, n)
                    })(e, r, o)
                },
                reset: () => {
                    ((e, t) => {
                        JC(e).undoManager.reset(t)
                    })(e, r)
                },
                hasUndo: () => ((e, t, n) => JC(e).undoManager.hasUndo(t, n))(e, r, o),
                hasRedo: () => ((e, t, n) => JC(e).undoManager.hasRedo(t, n))(e, r, o),
                transact: t => ((e, t, n, o) => JC(e).undoManager.transact(t, n, o))(e, r, n, t),
                ignore: t => {
                    ((e, t, n) => {
                        JC(e).undoManager.ignore(t, n)
                    })(e, n, t)
                },
                extra: (t, n) => {
                    ((e, t, n, o, r) => {
                        JC(e).undoManager.extra(t, n, o, r)
                    })(e, r, o, t, n)
                }
            };
            return XC(e) || ((e, t, n) => {
                const o = $a(!1), r = e => {
                    KC(t, !1, n), t.add({}, e)
                };
                e.on("init", (() => {
                    t.add()
                })), e.on("BeforeExecCommand", (e => {
                    const o = e.command;
                    sx(o) || (YC(t, n), t.beforeChange())
                })), e.on("ExecCommand", (e => {
                    const t = e.command;
                    sx(t) || r(e)
                })), e.on("ObjectResizeStart cut", (() => {
                    t.beforeChange()
                })), e.on("SaveContent ObjectResized blur", r), e.on("dragend", r), e.on("keyup", (n => {
                    const s = n.keyCode;
                    if (n.isDefaultPrevented()) return;
                    const a = At.os.isMacOS() && "Meta" === n.key;
                    (s >= 33 && s <= 36 || s >= 37 && s <= 40 || 45 === s || n.ctrlKey || a) && (r(), e.nodeChanged()), 46 !== s && 8 !== s || e.nodeChanged(), o.get() && t.typing && !VC(jC(e), t.data[0]) && (e.isDirty() || e.setDirty(!0), e.dispatch("TypingUndo"), o.set(!1), e.nodeChanged())
                })), e.on("keydown", (e => {
                    const s = e.keyCode;
                    if (e.isDefaultPrevented()) return;
                    if (s >= 33 && s <= 36 || s >= 37 && s <= 40 || 45 === s) return void (t.typing && r(e));
                    const a = e.ctrlKey && !e.altKey || e.metaKey;
                    if ((s < 16 || s > 20) && 224 !== s && 91 !== s && !t.typing && !a) return t.beforeChange(), KC(t, !0, n), t.add({}, e), void o.set(!0);
                    (At.os.isMacOS() ? e.metaKey : e.ctrlKey && !e.altKey) && t.beforeChange()
                })), e.on("mousedown", (e => {
                    t.typing && r(e)
                })), e.on("input", (e => {
                    var t;
                    e.inputType && ("insertReplacementText" === e.inputType || "insertText" === (t = e).inputType && null === t.data || (e => "insertFromPaste" === e.inputType || "insertFromDrop" === e.inputType)(e)) && r(e)
                })), e.on("AddUndo Undo Redo ClearUndos", (t => {
                    t.isDefaultPrevented() || e.nodeChanged()
                }))
            })(e, r, n), (e => {
                e.addShortcut("meta+z", "", "Undo"), e.addShortcut("meta+y,meta+shift+z", "", "Redo")
            })(e), r
        },
        ix = [9, 27, af.HOME, af.END, 19, 20, 44, 144, 145, 33, 34, 45, 16, 17, 18, 91, 92, 93, af.DOWN, af.UP, af.LEFT, af.RIGHT].concat(At.browser.isFirefox() ? [224] : []),
        lx = "data-mce-placeholder", dx = e => "keydown" === e.type || "keyup" === e.type, cx = e => {
            const t = e.keyCode;
            return t === af.BACKSPACE || t === af.DELETE
        }, ux = (e, t) => ({from: e, to: t}), mx = (e, t) => {
            const n = yn(e), o = yn(t.container());
            return Ah(n, o).map((e => ((e, t) => ({block: e, position: t}))(e, t)))
        }, fx = (e, t) => Jn(t, (e => Rr(e) || lr(e.dom)), (t => _n(t, e))).filter(Wt).getOr(e), gx = (e, t) => {
            const n = ((e, t) => {
                const n = Mn(e);
                return Z(n, (e => t.isBlock(Ht(e)))).fold(N(n), (e => n.slice(0, e)))
            })(e, t);
            return V(n, xo), n
        }, px = (e, t) => {
            const n = Bp(t, e);
            return J(n.reverse(), (e => gs(e))).each(xo)
        }, hx = (e, t, n, o, r) => {
            if (gs(n)) return Or(n), Ou(n.dom);
            0 === Y(Dn(r), (e => !gs(e))).length && gs(t) && po(r, bn("br"));
            const s = Tu(n.dom, Vi.before(r.dom));
            return V(gx(t, o), (e => {
                po(r, e)
            })), px(e, t), s
        }, bx = (e, t, n, o) => {
            if (gs(n)) {
                if (gs(t)) {
                    const e = e => {
                        const t = (e, n) => Fn(e).fold((() => n), (e => ((e, t) => e.isInline(Ht(t)))(o, e) ? t(e, n.concat(fi(e))) : n));
                        return t(e, [])
                    }, r = G(e(n), ((e, t) => (yo(e, t), t)), Tr());
                    wo(t), vo(t, r)
                }
                return xo(n), Ou(t.dom)
            }
            const r = Bu(n.dom);
            return V(gx(t, o), (e => {
                vo(n, e)
            })), px(e, t), r
        }, vx = (e, t) => {
            Ru(e, t.dom).bind((e => I.from(e.getNode()))).map(yn).filter(Er).each(xo)
        }, yx = (e, t, n, o) => (vx(!0, t), vx(!1, n), ((e, t) => kn(t, e) ? ((e, t) => {
            const n = Bp(t, e);
            return I.from(n[n.length - 1])
        })(t, e) : I.none())(t, n).fold(T(bx, e, t, n, o), T(hx, e, t, n, o))),
        Cx = (e, t, n, o, r) => t ? yx(e, o, n, r) : yx(e, n, o, r), wx = (e, t) => {
            const n = yn(e.getBody()), o = ((e, t, n) => n.collapsed ? ((e, t, n) => {
                const o = mx(e, Vi.fromRangeStart(n)),
                    r = o.bind((n => ku(t, e, n.position).bind((n => mx(e, n).map((n => ((e, t, n) => ar(n.position.getNode()) && !gs(n.block) ? Ru(!1, n.block.dom).bind((o => o.isEqual(n.position) ? ku(t, e, o).bind((t => mx(e, t))) : I.some(n))).getOr(n) : n)(e, t, n)))))));
                return Mt(o, r, ux).filter((t => (e => !_n(e.from.block, e.to.block))(t) && ((e, t) => {
                    const n = yn(e);
                    return _n(fx(n, t.from.block), fx(n, t.to.block))
                })(e, t) && (e => !1 === dr(e.from.block.dom) && !1 === dr(e.to.block.dom))(t) && (e => {
                    const t = e => _r(e) || Ns(e.dom);
                    return t(e.from.block) && t(e.to.block)
                })(t)))
            })(e, t, n) : I.none())(n.dom, t, e.selection.getRng()).map((o => () => {
                Cx(n, t, o.from.block, o.to.block, e.schema).each((t => {
                    e.selection.setRng(t.toRange())
                }))
            }));
            return o
        }, xx = (e, t) => {
            const n = yn(t), o = T(_n, e);
            return Qn(n, Rr, o).isSome()
        }, Ex = e => {
            const t = yn(e.getBody());
            return ((e, t) => {
                const n = Tu(e.dom, Vi.fromRangeStart(t)).isNone(), o = Au(e.dom, Vi.fromRangeEnd(t)).isNone();
                return !((e, t) => xx(e, t.startContainer) || xx(e, t.endContainer))(e, t) && n && o
            })(t, e.selection.getRng()) ? (e => I.some((() => {
                e.setContent(""), e.selection.setCursorLocation()
            })))(e) : ((e, t, n) => {
                const o = t.getRng();
                return Mt(Ah(e, yn(o.startContainer)), Ah(e, yn(o.endContainer)), ((r, s) => _n(r, s) ? I.none() : I.some((() => {
                    o.deleteContents(), Cx(e, !0, r, s, n).each((e => {
                        t.setRng(e.toRange())
                    }))
                })))).getOr(I.none())
            })(t, e.selection, e.schema)
        }, _x = (e, t) => e.selection.isCollapsed() ? I.none() : Ex(e),
        kx = (e, t, n, o, r) => I.from(t._selectionOverrides.showCaret(e, n, o, r)),
        Sx = (e, t) => e.dispatch("BeforeObjectSelected", {target: t}).isDefaultPrevented() ? I.none() : I.some((e => {
            const t = e.ownerDocument.createRange();
            return t.selectNode(e), t
        })(t)), Nx = (e, t, n) => t.collapsed ? ((e, t, n) => {
            const o = ru(1, e.getBody(), t), r = Vi.fromRangeStart(o), s = r.getNode();
            if (Lc(s)) return kx(1, e, s, !r.isAtEnd(), !1);
            const a = r.getNode(!0);
            if (Lc(a)) return kx(1, e, a, !1, !1);
            const i = lb(e.dom.getRoot(), r.getNode());
            return Lc(i) ? kx(1, e, i, !1, n) : I.none()
        })(e, t, n).getOr(t) : t, Rx = e => Ap(e) || kp(e), Ax = e => Tp(e) || Sp(e), Tx = (e, t, n, o, r, s) => {
            kx(o, e, s.getNode(!r), r, !0).each((n => {
                if (t.collapsed) {
                    const e = t.cloneRange();
                    r ? e.setEnd(n.startContainer, n.startOffset) : e.setStart(n.endContainer, n.endOffset), e.deleteContents()
                } else t.deleteContents();
                e.selection.setRng(n)
            })), ((e, t) => {
                er(t) && 0 === t.data.length && e.remove(t)
            })(e.dom, n)
        }, Ox = (e, t) => ((e, t) => {
            const n = e.selection.getRng();
            if (!er(n.commonAncestorContainer)) return I.none();
            const o = t ? cu.Forwards : cu.Backwards, r = wu(e.getBody()), s = T(lu, t ? r.next : r.prev), a = t ? Rx : Ax,
                i = au(o, e.getBody(), n), l = s(i), d = l ? Eh(t, l) : l;
            if (!d || !du(i, d)) return I.none();
            if (a(d)) return I.some((() => Tx(e, n, i.getNode(), o, t, d)));
            const c = s(d);
            return c && a(c) && du(d, c) ? I.some((() => Tx(e, n, i.getNode(), o, t, c))) : I.none()
        })(e, t), Bx = (e, t) => {
            const n = e.getBody();
            return t ? Ou(n).filter(Ap) : Bu(n).filter(Tp)
        }, Px = e => {
            const t = e.selection.getRng();
            return !t.collapsed && (Bx(e, !0).exists((e => e.isEqual(Vi.fromRangeStart(t)))) || Bx(e, !1).exists((e => e.isEqual(Vi.fromRangeEnd(t)))))
        }, Dx = hl([{remove: ["element"]}, {moveToElement: ["element"]}, {moveToPosition: ["position"]}]),
        Lx = (e, t, n, o) => ku(t, e, n).bind((r => {
            return s = r.getNode(), C(s) && (Rr(yn(s)) || Sr(yn(s))) || ((e, t, n, o, r) => {
                const s = t => r.isInline(t.nodeName.toLowerCase()) && !Qc(n, o, e);
                return su(!t, n).fold((() => su(t, o).fold(L, s)), s)
            })(e, t, n, r, o) ? I.none() : t && dr(r.getNode()) || !t && dr(r.getNode(!0)) ? ((e, t, n, o) => {
                const r = o.getNode(!t);
                return Ah(yn(e), yn(n.getNode())).map((e => gs(e) ? Dx.remove(e.dom) : Dx.moveToElement(r))).orThunk((() => I.some(Dx.moveToElement(r))))
            })(e, t, n, r) : t && Tp(n) || !t && Ap(n) ? I.some(Dx.moveToPosition(r)) : I.none();
            var s
        })), Mx = (e, t) => I.from(lb(e.getBody(), t)), Ix = (e, t) => {
            const n = e.selection.getNode();
            return Mx(e, n).filter(dr).fold((() => ((e, t, n, o) => {
                const r = ru(t ? 1 : -1, e, n), s = Vi.fromRangeStart(r), a = yn(e);
                return !t && Tp(s) ? I.some(Dx.remove(s.getNode(!0))) : t && Ap(s) ? I.some(Dx.remove(s.getNode())) : !t && Ap(s) && qp(a, s, o) ? Vp(a, s, o).map((e => Dx.remove(e.getNode()))) : t && Tp(s) && $p(a, s, o) ? Wp(a, s, o).map((e => Dx.remove(e.getNode()))) : ((e, t, n, o) => ((e, t) => {
                    const n = t.getNode(!e), o = e ? "after" : "before";
                    return qo(n) && n.getAttribute("data-mce-caret") === o
                })(t, n) ? ((e, t) => y(t) ? I.none() : e && dr(t.nextSibling) ? I.some(Dx.moveToElement(t.nextSibling)) : !e && dr(t.previousSibling) ? I.some(Dx.moveToElement(t.previousSibling)) : I.none())(t, n.getNode(!t)).orThunk((() => Lx(e, t, n, o))) : Lx(e, t, n, o).bind((t => ((e, t, n) => n.fold((e => I.some(Dx.remove(e))), (e => I.some(Dx.moveToElement(e))), (n => Qc(t, n, e) ? I.none() : I.some(Dx.moveToPosition(n)))))(e, n, t))))(e, t, s, o)
            })(e.getBody(), t, e.selection.getRng(), e.schema).map((n => () => n.fold(((e, t) => n => (e._selectionOverrides.hideFakeCaret(), vh(e, t, yn(n)), !0))(e, t), ((e, t) => n => {
                const o = t ? Vi.before(n) : Vi.after(n);
                return e.selection.setRng(o.toRange()), !0
            })(e, t), (e => t => (e.selection.setRng(t.toRange()), !0))(e))))), (() => I.some(_)))
        }, Fx = e => {
            const t = e.dom, n = e.selection, o = lb(e.getBody(), n.getNode());
            if (lr(o) && t.isBlock(o) && t.isEmpty(o)) {
                const e = t.create("br", {"data-mce-bogus": "1"});
                t.setHTML(o, ""), o.appendChild(e), n.setRng(Vi.before(e).toRange())
            }
            return !0
        }, Ux = (e, t) => e.selection.isCollapsed() ? Ix(e, t) : ((e, t) => {
            const n = e.selection.getNode();
            return dr(n) && !cr(n) ? Mx(e, n.parentNode).filter(dr).fold((() => I.some((() => {
                var n;
                n = yn(e.getBody()), V(Uo(n, ".mce-offscreen-selection"), xo), vh(e, t, yn(e.selection.getNode())), Th(e)
            }))), (() => I.some(_))) : Px(e) ? I.some((() => {
                Ph(e, e.selection.getRng(), yn(e.getBody()))
            })) : I.none()
        })(e, t), zx = (e, t) => e.selection.isCollapsed() ? ((e, t) => {
            const n = Vi.fromRangeStart(e.selection.getRng());
            return ku(t, e.getBody(), n).filter((e => t ? Ep(e) : _p(e))).bind((e => Jc(t ? 0 : -1, e))).map((t => () => e.selection.select(t)))
        })(e, t) : I.none(), jx = er, Hx = e => jx(e) && e.data[0] === Br,
        $x = e => jx(e) && e.data[e.data.length - 1] === Br, qx = e => {
            var t;
            return (null !== (t = e.ownerDocument) && void 0 !== t ? t : document).createTextNode(Br)
        }, Vx = (e, t) => e ? (e => {
            var t;
            if (jx(e.previousSibling)) return $x(e.previousSibling) || e.previousSibling.appendData(Br), e.previousSibling;
            if (jx(e)) return Hx(e) || e.insertData(0, Br), e;
            {
                const n = qx(e);
                return null === (t = e.parentNode) || void 0 === t || t.insertBefore(n, e), n
            }
        })(t) : (e => {
            var t, n;
            if (jx(e.nextSibling)) return Hx(e.nextSibling) || e.nextSibling.insertData(0, Br), e.nextSibling;
            if (jx(e)) return $x(e) || e.appendData(Br), e;
            {
                const o = qx(e);
                return e.nextSibling ? null === (t = e.parentNode) || void 0 === t || t.insertBefore(o, e.nextSibling) : null === (n = e.parentNode) || void 0 === n || n.appendChild(o), o
            }
        })(t), Wx = T(Vx, !0), Kx = T(Vx, !1), Yx = (e, t) => er(e.container()) ? Vx(t, e.container()) : Vx(t, e.getNode()),
        Gx = (e, t) => {
            const n = t.get();
            return n && e.container() === n && Fr(n)
        }, Xx = (e, t) => t.fold((t => {
            Rc(e.get());
            const n = Wx(t);
            return e.set(n), I.some(Vi(n, n.length - 1))
        }), (t => Ou(t).map((t => {
            if (Gx(t, e)) {
                const t = e.get();
                return Vi(t, 1)
            }
            {
                Rc(e.get());
                const n = Yx(t, !0);
                return e.set(n), Vi(n, 1)
            }
        }))), (t => Bu(t).map((t => {
            if (Gx(t, e)) {
                const t = e.get();
                return Vi(t, t.length - 1)
            }
            {
                Rc(e.get());
                const n = Yx(t, !1);
                return e.set(n), Vi(n, n.length - 1)
            }
        }))), (t => {
            Rc(e.get());
            const n = Kx(t);
            return e.set(n), I.some(Vi(n, 1))
        })), Qx = (e, t) => {
            for (let n = 0; n < e.length; n++) {
                const o = e[n].apply(null, t);
                if (o.isSome()) return o
            }
            return I.none()
        }, Jx = hl([{before: ["element"]}, {start: ["element"]}, {end: ["element"]}, {after: ["element"]}]),
        Zx = (e, t) => Xc(t, e) || e, eE = (e, t, n) => {
            const o = _h(n), r = Zx(t, o.container());
            return xh(e, r, o).fold((() => Au(r, o).bind(T(xh, e, r)).map((e => Jx.before(e)))), I.none)
        }, tE = (e, t) => null === Lu(e, t), nE = (e, t, n) => xh(e, t, n).filter(T(tE, t)), oE = (e, t, n) => {
            const o = kh(n);
            return nE(e, t, o).bind((e => Tu(e, o).isNone() ? I.some(Jx.start(e)) : I.none()))
        }, rE = (e, t, n) => {
            const o = _h(n);
            return nE(e, t, o).bind((e => Au(e, o).isNone() ? I.some(Jx.end(e)) : I.none()))
        }, sE = (e, t, n) => {
            const o = kh(n), r = Zx(t, o.container());
            return xh(e, r, o).fold((() => Tu(r, o).bind(T(xh, e, r)).map((e => Jx.after(e)))), I.none)
        }, aE = e => !wh(lE(e)), iE = (e, t, n) => Qx([eE, oE, rE, sE], [e, t, n]).filter(aE), lE = e => e.fold(R, R, R, R),
        dE = e => e.fold(N("before"), N("start"), N("end"), N("after")),
        cE = e => e.fold(Jx.before, Jx.before, Jx.after, Jx.after),
        uE = e => e.fold(Jx.start, Jx.start, Jx.end, Jx.end),
        mE = (e, t, n, o, r, s) => Mt(xh(t, n, o), xh(t, n, r), ((t, o) => t !== o && ((e, t, n) => {
            const o = Xc(t, e), r = Xc(n, e);
            return C(o) && o === r
        })(n, t, o) ? Jx.after(e ? t : o) : s)).getOr(s), fE = (e, t) => e.fold(M, (e => {
            return o = t, !(dE(n = e) === dE(o) && lE(n) === lE(o));
            var n, o
        })),
        gE = (e, t) => e ? t.fold(k(I.some, Jx.start), I.none, k(I.some, Jx.after), I.none) : t.fold(I.none, k(I.some, Jx.before), I.none, k(I.some, Jx.end)),
        pE = (e, t, n) => {
            const o = e ? 1 : -1;
            return t.setRng(Vi(n.container(), n.offset() + o).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0
        };
    var hE;
    !function (e) {
        e[e.Br = 0] = "Br", e[e.Block = 1] = "Block", e[e.Wrap = 2] = "Wrap", e[e.Eol = 3] = "Eol"
    }(hE || (hE = {}));
    const bE = (e, t) => e === cu.Backwards ? oe(t) : t, vE = (e, t, n) => e === cu.Forwards ? t.next(n) : t.prev(n),
        yE = (e, t, n, o) => ar(o.getNode(t === cu.Forwards)) ? hE.Br : !1 === Qc(n, o) ? hE.Block : hE.Wrap,
        CE = (e, t, n, o) => {
            const r = wu(n);
            let s = o;
            const a = [];
            for (; s;) {
                const n = vE(t, r, s);
                if (!n) break;
                if (ar(n.getNode(!1))) return t === cu.Forwards ? {
                    positions: bE(t, a).concat([n]),
                    breakType: hE.Br,
                    breakAt: I.some(n)
                } : {positions: bE(t, a), breakType: hE.Br, breakAt: I.some(n)};
                if (n.isVisible()) {
                    if (e(s, n)) {
                        const e = yE(0, t, s, n);
                        return {positions: bE(t, a), breakType: e, breakAt: I.some(n)}
                    }
                    a.push(n), s = n
                } else s = n
            }
            return {positions: bE(t, a), breakType: hE.Eol, breakAt: I.none()}
        }, wE = (e, t, n, o) => t(n, o).breakAt.map((o => {
            const r = t(n, o).positions;
            return e === cu.Backwards ? r.concat(o) : [o].concat(r)
        })).getOr([]),
        xE = (e, t) => X(e, ((e, n) => e.fold((() => I.some(n)), (o => Mt(le(o.getClientRects()), le(n.getClientRects()), ((e, r) => {
            const s = Math.abs(t - e.left);
            return Math.abs(t - r.left) <= s ? n : o
        })).or(e)))), I.none()), EE = (e, t) => le(t.getClientRects()).bind((t => xE(e, t.left))),
        _E = T(CE, Vi.isAbove, -1), kE = T(CE, Vi.isBelow, 1), SE = T(wE, -1, _E), NE = T(wE, 1, kE),
        RE = (e, t) => _E(e, t).breakAt.isNone(), AE = (e, t) => kE(e, t).breakAt.isNone(),
        TE = (e, t) => EE(SE(e, t), t), OE = (e, t) => EE(NE(e, t), t), BE = dr, PE = (e, t) => Math.abs(e.left - t),
        DE = (e, t) => Math.abs(e.right - t), LE = (e, t) => Oe(e, ((e, n) => {
            const o = Math.min(PE(e, t), DE(e, t)), r = Math.min(PE(n, t), DE(n, t));
            return r === o && _e(n, "node") && BE(n.node) || r < o ? n : e
        })), ME = e => {
            const t = t => q(t, (t => {
                const n = vi(t);
                return n.node = e, n
            }));
            if (qo(e)) return t(e.getClientRects());
            if (er(e)) {
                const n = e.ownerDocument.createRange();
                return n.setStart(e, 0), n.setEnd(e, e.data.length), t(n.getClientRects())
            }
            return []
        }, IE = e => te(e, ME);
    var FE;
    !function (e) {
        e[e.Up = -1] = "Up", e[e.Down = 1] = "Down"
    }(FE || (FE = {}));
    const UE = (e, t, n, o, r, s) => {
            let a = 0;
            const i = [], l = o => {
                let s = IE([o]);
                -1 === e && (s = s.reverse());
                for (let e = 0; e < s.length; e++) {
                    const o = s[e];
                    if (!n(o, d)) {
                        if (i.length > 0 && t(o, Pe(i)) && a++, o.line = a, r(o)) return !0;
                        i.push(o)
                    }
                }
                return !1
            }, d = Pe(s.getClientRects());
            if (!d) return i;
            const c = s.getNode();
            return c && (l(c), ((e, t, n, o) => {
                let r = o;
                for (; r = Gc(r, e, os, t);) if (n(r)) return
            })(e, o, l, c)), i
        }, zE = T(UE, FE.Up, wi, xi), jE = T(UE, FE.Down, xi, wi), HE = e => Pe(e.getClientRects()),
        $E = e => t => ((e, t) => t.line > e)(e, t), qE = e => t => ((e, t) => t.line === e)(e, t), VE = (e, t) => {
            e.selection.setRng(t), sg(e, e.selection.getRng())
        }, WE = (e, t, n) => I.some(Nx(e, t, n)), KE = (e, t, n, o, r, s) => {
            const a = t === cu.Forwards, i = wu(e.getBody()), l = T(lu, a ? i.next : i.prev), d = a ? o : r;
            if (!n.collapsed) {
                const o = _i(n);
                if (s(o)) return kx(t, e, o, t === cu.Backwards, !1);
                if (Px(e)) {
                    const e = n.cloneRange();
                    return e.collapse(t === cu.Backwards), I.from(e)
                }
            }
            const c = au(t, e.getBody(), n);
            if (d(c)) return Sx(e, c.getNode(!a));
            let u = l(c);
            const m = Wr(n);
            if (!u) return m ? I.some(n) : I.none();
            if (u = Eh(a, u), d(u)) return kx(t, e, u.getNode(!a), a, !1);
            const f = l(u);
            return f && d(f) && du(u, f) ? kx(t, e, f.getNode(!a), a, !1) : m ? WE(e, u.toRange(), !1) : I.none()
        }, YE = (e, t, n, o, r, s) => {
            const a = au(t, e.getBody(), n), i = Pe(a.getClientRects()), l = t === FE.Down, d = e.getBody();
            if (!i) return I.none();
            if (Px(e)) {
                const e = l ? Vi.fromRangeEnd(n) : Vi.fromRangeStart(n);
                return (l ? OE : TE)(d, e).orThunk((() => I.from(e))).map((e => e.toRange()))
            }
            const c = (l ? jE : zE)(d, $E(1), a), u = Y(c, qE(1)), m = i.left, f = LE(u, m);
            if (f && s(f.node)) {
                const n = Math.abs(m - f.left), o = Math.abs(m - f.right);
                return kx(t, e, f.node, n < o, !1)
            }
            let g;
            if (g = o(a) ? a.getNode() : r(a) ? a.getNode(!0) : _i(n), g) {
                const n = ((e, t, n, o) => {
                    const r = wu(t);
                    let s, a, i, l;
                    const d = [];
                    let c = 0;
                    1 === e ? (s = r.next, a = xi, i = wi, l = Vi.after(o)) : (s = r.prev, a = wi, i = xi, l = Vi.before(o));
                    const u = HE(l);
                    do {
                        if (!l.isVisible()) continue;
                        const e = HE(l);
                        if (i(e, u)) continue;
                        d.length > 0 && a(e, Pe(d)) && c++;
                        const t = vi(e);
                        if (t.position = l, t.line = c, n(t)) return d;
                        d.push(t)
                    } while (l = s(l));
                    return d
                })(t, d, $E(1), g);
                let o = LE(Y(n, qE(1)), m);
                if (o) return WE(e, o.position.toRange(), !1);
                if (o = Pe(Y(n, qE(0))), o) return WE(e, o.position.toRange(), !1)
            }
            return 0 === u.length ? GE(e, l).filter(l ? r : o).map((t => Nx(e, t.toRange(), !1))) : I.none()
        }, GE = (e, t) => {
            const n = e.selection.getRng(), o = t ? Vi.fromRangeEnd(n) : Vi.fromRangeStart(n),
                r = (s = o.container(), a = e.getBody(), Qn(yn(s), (e => Ic(e.dom)), (e => e.dom === a)).map((e => e.dom)).getOr(a));
            var s, a;
            if (t) {
                const e = kE(r, o);
                return de(e.positions)
            }
            {
                const e = _E(r, o);
                return le(e.positions)
            }
        }, XE = (e, t, n) => GE(e, t).filter(n).exists((t => (e.selection.setRng(t.toRange()), !0))), QE = (e, t) => {
            const n = e.dom.createRng();
            n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n)
        }, JE = (e, t) => {
            e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected")
        }, ZE = (e, t, n) => Xx(t, n).map((t => (QE(e, t), n))), e_ = (e, t, n) => {
            const o = e.getBody(), r = ((e, t, n) => {
                const o = Vi.fromRangeStart(e);
                if (e.collapsed) return o;
                {
                    const r = Vi.fromRangeEnd(e);
                    return n ? Tu(t, r).getOr(r) : Au(t, o).getOr(o)
                }
            })(e.selection.getRng(), o, n);
            return ((e, t, n, o) => {
                const r = Eh(e, o), s = iE(t, n, r);
                return iE(t, n, r).bind(T(gE, e)).orThunk((() => ((e, t, n, o, r) => {
                    const s = Eh(e, r);
                    return ku(e, n, s).map(T(Eh, e)).fold((() => o.map(cE)), (r => iE(t, n, r).map(T(mE, e, t, n, s, r)).filter(T(fE, o)))).filter(aE)
                })(e, t, n, s, o)))
            })(n, T(Ch, e), o, r).bind((n => ZE(e, t, n)))
        }, t_ = (e, t, n) => !!yd(e) && e_(e, t, n).isSome(), n_ = (e, t, n) => !!yd(t) && ((e, t) => {
            const n = t.selection.getRng(), o = e ? Vi.fromRangeEnd(n) : Vi.fromRangeStart(n);
            return !!(e => w(e.selection.getSel().modify))(t) && (e && jr(o) ? pE(!0, t.selection, o) : !(e || !Hr(o)) && pE(!1, t.selection, o))
        })(e, t), o_ = e => {
            const t = $a(null), n = T(Ch, e);
            return e.on("NodeChange", (o => {
                yd(e) && (((e, t, n) => {
                    const o = q(Uo(yn(t.getRoot()), '*[data-mce-selected="inline-boundary"]'), (e => e.dom)), r = Y(o, e),
                        s = Y(n, e);
                    V(re(r, s), T(JE, !1)), V(re(s, r), T(JE, !0))
                })(n, e.dom, o.parents), ((e, t) => {
                    const n = t.get();
                    if (e.selection.isCollapsed() && !e.composing && n) {
                        const o = Vi.fromRangeStart(e.selection.getRng());
                        Vi.isTextPosition(o) && !(e => jr(e) || Hr(e))(o) && (QE(e, Nc(n, o)), t.set(null))
                    }
                })(e, t), ((e, t, n, o) => {
                    if (t.selection.isCollapsed()) {
                        const r = Y(o, e);
                        V(r, (o => {
                            const r = Vi.fromRangeStart(t.selection.getRng());
                            iE(e, t.getBody(), r).bind((e => ZE(t, n, e)))
                        }))
                    }
                })(n, e, t, o.parents))
            })), t
        }, r_ = T(n_, !0), s_ = T(n_, !1), a_ = (e, t, n) => {
            if (yd(e)) {
                const o = GE(e, t).getOrThunk((() => {
                    const n = e.selection.getRng();
                    return t ? Vi.fromRangeEnd(n) : Vi.fromRangeStart(n)
                }));
                return iE(T(Ch, e), e.getBody(), o).exists((t => {
                    const o = cE(t);
                    return Xx(n, o).exists((t => (QE(e, t), !0)))
                }))
            }
            return !1
        }, i_ = (e, t) => n => Xx(t, n).map((t => () => QE(e, t))), l_ = (e, t, n, o) => {
            const r = e.getBody(), s = T(Ch, e);
            e.undoManager.ignore((() => {
                e.selection.setRng(((e, t) => {
                    const n = document.createRange();
                    return n.setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n
                })(n, o)), Nh(e), iE(s, r, Vi.fromRangeStart(e.selection.getRng())).map(uE).bind(i_(e, t)).each(D)
            })), e.nodeChanged()
        }, d_ = (e, t, n) => {
            if (e.selection.isCollapsed() && yd(e)) {
                const o = Vi.fromRangeStart(e.selection.getRng());
                return ((e, t, n, o) => {
                    const r = ((e, t) => Xc(t, e) || e)(e.getBody(), o.container()), s = T(Ch, e), a = iE(s, r, o);
                    return a.bind((e => n ? e.fold(N(I.some(uE(e))), I.none, N(I.some(cE(e))), I.none) : e.fold(I.none, N(I.some(cE(e))), I.none, N(I.some(uE(e)))))).map(i_(e, t)).getOrThunk((() => {
                        const i = Su(n, r, o), l = i.bind((e => iE(s, r, e)));
                        return Mt(a, l, (() => xh(s, r, o).bind((t => (e => Mt(Ou(e), Bu(e), ((t, n) => {
                            const o = Eh(!0, t), r = Eh(!1, n);
                            return Au(e, o).forall((e => e.isEqual(r)))
                        })).getOr(!0))(t) ? I.some((() => {
                            vh(e, n, yn(t))
                        })) : I.none())))).getOrThunk((() => l.bind((() => i.map((r => () => {
                            n ? l_(e, t, o, r) : l_(e, t, r, o)
                        }))))))
                    }))
                })(e, t, n, o)
            }
            return I.none()
        }, c_ = (e, t) => {
            const n = yn(e.getBody()), o = yn(e.selection.getStart()), r = Bp(o, n);
            return Z(r, t).fold(N(r), (e => r.slice(0, e)))
        }, u_ = e => 1 === zn(e), m_ = (e, t) => {
            const n = T(Zb, e);
            return te(t, (e => n(e) ? [e.dom] : []))
        }, f_ = e => {
            const t = (e => c_(e, (t => e.schema.isBlock(Ht(t)))))(e);
            return m_(e, t)
        }, g_ = (e, t) => {
            const n = Y((e => c_(e, (t => e.schema.isBlock(Ht(t)) || (e => zn(e) > 1)(t))))(e), u_);
            return de(n).bind((o => {
                const r = Vi.fromRangeStart(e.selection.getRng());
                return Oh(t, r, o.dom) && !Tm(o) ? I.some((() => ((e, t, n, o) => {
                    const r = m_(t, o);
                    if (0 === r.length) vh(t, e, n); else {
                        const e = Jb(n.dom, r);
                        t.selection.setRng(e.toRange())
                    }
                })(t, e, o, n))) : I.none()
            }))
        }, p_ = (e, t) => {
            const n = e.selection.getStart(), o = ((e, t) => {
                const n = t.parentElement;
                return ar(t) && !h(n) && e.dom.isEmpty(n)
            })(e, n) || Tm(yn(n)) ? Jb(n, t) : ((e, t) => {
                const {caretContainer: n, caretPosition: o} = Qb(t);
                return e.insertNode(n.dom), o
            })(e.selection.getRng(), t);
            e.selection.setRng(o.toRange())
        }, h_ = e => er(e.startContainer), b_ = e => {
            const t = e.selection.getRng();
            return (e => 0 === e.startOffset && h_(e))(t) && ((e, t) => {
                const n = t.startContainer.parentElement;
                return !h(n) && Zb(e, yn(n))
            })(e, t) && (e => (e => (e => {
                const t = e.startContainer.parentNode, n = e.endContainer.parentNode;
                return !h(t) && !h(n) && t.isEqualNode(n)
            })(e) && (e => {
                const t = e.endContainer;
                return e.endOffset === (er(t) ? t.length : t.childNodes.length)
            })(e))(e) || (e => !e.endContainer.isEqualNode(e.commonAncestorContainer))(e))(t)
        }, v_ = (e, t) => e.selection.isCollapsed() ? g_(e, t) : (e => {
            if (b_(e)) {
                const t = f_(e);
                return I.some((() => {
                    Nh(e), ((e, t) => {
                        const n = re(t, f_(e));
                        n.length > 0 && p_(e, n)
                    })(e, t)
                }))
            }
            return I.none()
        })(e), y_ = (e, t) => Qn(e, (e => Du(e.dom)), (e => t.isBlock(Ht(e)))).isSome(), C_ = e => ((e => {
            const t = e.selection.getRng();
            return t.collapsed && (h_(t) || e.dom.isEmpty(t.startContainer)) && !(e => y_(yn(e.selection.getStart()), e.schema))(e)
        })(e) && p_(e, []), !0), w_ = (e, t, n) => C(n) ? I.some((() => {
            e._selectionOverrides.hideFakeCaret(), vh(e, t, yn(n))
        })) : I.none(), x_ = (e, t) => e.selection.isCollapsed() ? ((e, t) => {
            const n = t ? kp : Sp, o = t ? cu.Forwards : cu.Backwards, r = au(o, e.getBody(), e.selection.getRng());
            return n(r) ? w_(e, t, r.getNode(!t)) : I.from(Eh(t, r)).filter((e => n(e) && du(r, e))).bind((n => w_(e, t, n.getNode(!t))))
        })(e, t) : ((e, t) => {
            const n = e.selection.getNode();
            return mr(n) ? w_(e, t, n) : I.none()
        })(e, t), E_ = e => Xe(null != e ? e : "").getOr(0),
        __ = (e, t) => (e || "table" === Ht(t) ? "margin" : "padding") + ("rtl" === co(t, "direction") ? "-right" : "-left"),
        k_ = e => {
            const t = N_(e);
            return !e.mode.isReadOnly() && (t.length > 1 || ((e, t) => ne(t, (t => {
                const n = __(od(e), t), o = mo(t, n).map(E_).getOr(0);
                return "false" !== e.dom.getContentEditable(t.dom) && o > 0
            })))(e, t))
        }, S_ = e => kr(e) || Sr(e),
        N_ = e => Y(_o(e.selection.getSelectedBlocks()), (e => !S_(e) && !(e => An(e).exists(S_))(e) && Jn(e, (e => lr(e.dom) || dr(e.dom))).exists((e => lr(e.dom))))),
        R_ = (e, t) => {
            var n, o;
            const {dom: r} = e, s = rd(e),
                a = null !== (o = null === (n = /[a-z%]+$/i.exec(s)) || void 0 === n ? void 0 : n[0]) && void 0 !== o ? o : "px",
                i = E_(s), l = od(e);
            V(N_(e), (e => {
                ((e, t, n, o, r, s) => {
                    const a = __(n, yn(s)), i = E_(e.getStyle(s, a));
                    if ("outdent" === t) {
                        const t = Math.max(0, i - o);
                        e.setStyle(s, a, t ? t + r : "")
                    } else {
                        const t = i + o + r;
                        e.setStyle(s, a, t)
                    }
                })(r, t, l, i, a, e.dom)
            }))
        }, A_ = e => R_(e, "outdent"), T_ = e => {
            if (e.selection.isCollapsed() && k_(e)) {
                const t = e.dom, n = e.selection.getRng(), o = Vi.fromRangeStart(n),
                    r = t.getParent(n.startContainer, t.isBlock);
                if (null !== r && Ip(yn(r), o, e.schema)) return I.some((() => A_(e)))
            }
            return I.none()
        },
        O_ = (e, t, n) => ue([T_, Ux, Ox, (e, n) => d_(e, t, n), wx, ib, zx, x_, _x, v_], (t => t(e, n))).filter((t => e.selection.isEditable())),
        B_ = (e, t) => {
            e.addCommand("delete", (() => {
                ((e, t) => {
                    O_(e, t, !1).fold((() => {
                        e.selection.isEditable() && (Nh(e), Th(e))
                    }), D)
                })(e, t)
            })), e.addCommand("forwardDelete", (() => {
                ((e, t) => {
                    O_(e, t, !0).fold((() => {
                        e.selection.isEditable() && (e => {
                            Sh(e, "ForwardDelete")
                        })(e)
                    }), D)
                })(e, t)
            }))
        }, P_ = e => void 0 === e.touches || 1 !== e.touches.length ? I.none() : I.some(e.touches[0]),
        D_ = (e, t) => Ee(e, t.nodeName),
        L_ = (e, t) => !!er(t) || !!qo(t) && !(D_(e.getBlockElements(), t) || Ku(t) || Ts(e, t) || hs(t)),
        M_ = (e, t) => {
            if (er(t)) {
                if (0 === t.data.length) return !0;
                if (/^\s+$/.test(t.data)) return !t.nextSibling || D_(e, t.nextSibling) || hs(t.nextSibling)
            }
            return !1
        }, I_ = e => e.dom.create(Il(e), Fl(e)), F_ = e => {
            const t = e.dom, n = e.selection, o = e.schema, r = o.getBlockElements(), s = n.getStart(), a = e.getBody();
            let i, l, d = !1;
            const c = Il(e);
            if (!s || !qo(s)) return;
            const u = a.nodeName.toLowerCase();
            if (!o.isValidChild(u, c.toLowerCase()) || ((e, t, n) => $(Op(yn(n), yn(t)), (t => D_(e, t.dom))))(r, a, s)) return;
            const m = n.getRng(), {startContainer: f, startOffset: g, endContainer: p, endOffset: h} = m, b = Rg(e);
            let v = a.firstChild;
            for (; v;) if (qo(v) && Ss(o, v), L_(o, v)) {
                if (M_(r, v)) {
                    l = v, v = v.nextSibling, t.remove(l);
                    continue
                }
                i || (i = I_(e), a.insertBefore(i, v), d = !0), l = v, v = v.nextSibling, i.appendChild(l)
            } else i = null, v = v.nextSibling;
            d && b && (m.setStart(f, g), m.setEnd(p, h), n.setRng(m), e.nodeChanged())
        }, U_ = (e, t, n) => {
            const o = yn(I_(e)), r = Tr();
            vo(o, r), n(t, o);
            const s = document.createRange();
            return s.setStartBefore(r.dom), s.setEndBefore(r.dom), s
        }, z_ = e => t => -1 !== (" " + t.attr("class") + " ").indexOf(e), j_ = (e, t, n) => function (o) {
            const r = arguments, s = r[r.length - 2], a = s > 0 ? t.charAt(s - 1) : "";
            if ('"' === a) return o;
            if (">" === a) {
                const e = t.lastIndexOf("<", s);
                if (-1 !== e && -1 !== t.substring(e, s).indexOf('contenteditable="false"')) return o
            }
            return '<span class="' + n + '" data-mce-content="' + e.dom.encode(r[0]) + '">' + e.dom.encode("string" == typeof r[1] ? r[1] : r[0]) + "</span>"
        }, H_ = (e, t) => {
            t.hasAttribute("data-mce-caret") && (Vr(t), e.selection.setRng(e.selection.getRng()), e.selection.scrollIntoView(t))
        }, $_ = (e, t) => {
            const n = (e => to(yn(e.getBody()), "*[data-mce-caret]").map((e => e.dom)).getOrNull())(e);
            if (n) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void H_(e, n)) : void (zr(n) && (H_(e, n), e.undoManager.add()))
        }, q_ = dr, V_ = (e, t, n) => {
            const o = wu(e.getBody()), r = T(lu, 1 === t ? o.next : o.prev);
            if (n.collapsed) {
                const o = e.dom.getParent(n.startContainer, "PRE");
                if (!o) return;
                if (!r(Vi.fromRangeStart(n))) {
                    const n = yn((e => {
                        const t = e.dom.create(Il(e));
                        return t.innerHTML = '<br data-mce-bogus="1">', t
                    })(e));
                    1 === t ? ho(yn(o), n) : po(yn(o), n), e.selection.select(n.dom, !0), e.selection.collapse()
                }
            }
        }, W_ = (e, t) => ((e, t) => {
            const n = t ? cu.Forwards : cu.Backwards, o = e.selection.getRng();
            return ((e, t, n) => KE(t, e, n, Ap, Tp, q_))(n, e, o).orThunk((() => (V_(e, n, o), I.none())))
        })(e, ((e, t) => {
            const n = t ? e.getEnd(!0) : e.getStart(!0);
            return wh(n) ? !t : t
        })(e.selection, t)).exists((t => (VE(e, t), !0))), K_ = (e, t) => ((e, t) => {
            const n = t ? 1 : -1, o = e.selection.getRng();
            return ((e, t, n) => YE(t, e, n, (e => Ap(e) || Np(e)), (e => Tp(e) || Rp(e)), q_))(n, e, o).orThunk((() => (V_(e, n, o), I.none())))
        })(e, t).exists((t => (VE(e, t), !0))), Y_ = (e, t) => XE(e, t, t ? Tp : Ap), G_ = (e, t) => Bx(e, !t).map((n => {
            const o = n.toRange(), r = e.selection.getRng();
            return t ? o.setStart(r.startContainer, r.startOffset) : o.setEnd(r.endContainer, r.endOffset), o
        })).exists((t => (VE(e, t), !0))), X_ = e => H(["figcaption"], Ht(e)),
        Q_ = (e, t) => !!e.selection.isCollapsed() && ((e, t) => {
            const n = yn(e.getBody()), o = Vi.fromRangeStart(e.selection.getRng());
            return ((e, t, n) => {
                const o = T(_n, t);
                return Jn(yn(e.container()), (e => n.isBlock(Ht(e))), o).filter(X_)
            })(o, n, e.schema).exists((() => {
                if (((e, t, n) => t ? AE(e.dom, n) : RE(e.dom, n))(n, t, o)) {
                    const o = U_(e, n, t ? vo : bo);
                    return e.selection.setRng(o), !0
                }
                return !1
            }))
        })(e, t),
        J_ = (e, t) => ((e, t) => t ? I.from(e.dom.getParent(e.selection.getNode(), "details")).map((t => ((e, t) => {
            const n = e.selection.getRng(), o = Vi.fromRangeStart(n);
            return !(e.getBody().lastChild !== t || !AE(t, o) || (e.execCommand("InsertNewBlockAfter"), 0))
        })(e, t))).getOr(!1) : I.from(e.dom.getParent(e.selection.getNode(), "summary")).bind((t => I.from(e.dom.getParent(t, "details")).map((n => ((e, t, n) => {
            const o = e.selection.getRng(), r = Vi.fromRangeStart(o);
            return !(e.getBody().firstChild !== t || !RE(n, r) || (e.execCommand("InsertNewBlockBefore"), 0))
        })(e, n, t))))).getOr(!1))(e, t), Z_ = {shiftKey: !1, altKey: !1, ctrlKey: !1, metaKey: !1, keyCode: 0},
        ek = (e, t) => t.keyCode === e.keyCode && t.shiftKey === e.shiftKey && t.altKey === e.altKey && t.ctrlKey === e.ctrlKey && t.metaKey === e.metaKey,
        tk = (e, ...t) => () => e.apply(null, t),
        nk = (e, t) => J(((e, t) => te((e => q(e, (e => ({...Z_, ...e}))))(e), (e => ek(e, t) ? [e] : [])))(e, t), (e => e.action())),
        ok = (e, t) => ue(((e, t) => te((e => q(e, (e => ({...Z_, ...e}))))(e), (e => ek(e, t) ? [e] : [])))(e, t), (e => e.action())),
        rk = (e, t) => {
            const n = t ? cu.Forwards : cu.Backwards, o = e.selection.getRng();
            return KE(e, n, o, kp, Sp, mr).exists((t => (VE(e, t), !0)))
        }, sk = (e, t) => {
            const n = t ? 1 : -1, o = e.selection.getRng();
            return YE(e, n, o, kp, Sp, mr).exists((t => (VE(e, t), !0)))
        }, ak = (e, t) => XE(e, t, t ? Sp : kp),
        ik = hl([{none: ["current"]}, {first: ["current"]}, {middle: ["current", "target"]}, {last: ["current"]}]),
        lk = {...ik, none: e => ik.none(e)},
        dk = (e, t, n) => te(Mn(e), (e => xn(e, t) ? n(e) ? [e] : [] : dk(e, t, n))), ck = (e, t) => no(e, "table", t),
        uk = (e, t, n, o, r = M) => {
            const s = 1 === o;
            if (!s && n <= 0) return lk.first(e[0]);
            if (s && n >= e.length - 1) return lk.last(e[e.length - 1]);
            {
                const s = n + o, a = e[s];
                return r(a) ? lk.middle(t, a) : uk(e, t, s, o, r)
            }
        }, mk = (e, t) => ck(e, t).bind((t => {
            const n = dk(t, "th,td", M);
            return Z(n, (t => _n(e, t))).map((e => ({index: e, all: n})))
        })), fk = (e, t, n, o, r) => {
            const s = Uo(yn(n), "td,th,caption").map((e => e.dom)), a = Y(((e, t) => te(t, (t => {
                const n = ((e, t) => ({
                    left: e.left - t,
                    top: e.top - t,
                    right: e.right + -2,
                    bottom: e.bottom + -2,
                    width: e.width + t,
                    height: e.height + t
                }))(vi(t.getBoundingClientRect()), -1);
                return [{x: n.left, y: e(n), cell: t}, {x: n.right, y: e(n), cell: t}]
            })))(e, s), (e => t(e, r)));
            return ((e, t, n) => X(e, ((e, o) => e.fold((() => I.some(o)), (e => {
                const r = Math.sqrt(Math.abs(e.x - t) + Math.abs(e.y - n)),
                    s = Math.sqrt(Math.abs(o.x - t) + Math.abs(o.y - n));
                return I.some(s < r ? o : e)
            }))), I.none()))(a, o, r).map((e => e.cell))
        }, gk = T(fk, (e => e.bottom), ((e, t) => e.y < t)), pk = T(fk, (e => e.top), ((e, t) => e.y > t)),
        hk = (e, t, n) => {
            const o = e(t, n);
            return (e => e.breakType === hE.Wrap && 0 === e.positions.length)(o) || !ar(n.getNode()) && (e => e.breakType === hE.Br && 1 === e.positions.length)(o) ? !((e, t, n) => n.breakAt.exists((n => e(t, n).breakAt.isSome())))(e, t, o) : o.breakAt.isNone()
        }, bk = T(hk, _E), vk = T(hk, kE), yk = (e, t, n, o) => {
            const r = e.selection.getRng(), s = t ? 1 : -1;
            return !(!Dc() || !((e, t, n) => {
                const o = Vi.fromRangeStart(t);
                return Ru(!e, n).exists((e => e.isEqual(o)))
            })(t, r, n) || (kx(s, e, n, !t, !1).each((t => {
                VE(e, t)
            })), 0))
        }, Ck = (e, t, n) => {
            const o = ((e, t) => {
                const n = t.getNode(e);
                return Qo(n) ? I.some(n) : I.none()
            })(!!t, n), r = !1 === t;
            o.fold((() => VE(e, n.toRange())), (o => Ru(r, e.getBody()).filter((e => e.isEqual(n))).fold((() => VE(e, n.toRange())), (n => ((e, t, n) => {
                t.undoManager.transact((() => {
                    const o = e ? ho : po, r = U_(t, yn(n), o);
                    VE(t, r)
                }))
            })(t, e, o)))))
        }, wk = (e, t, n, o) => {
            const r = e.selection.getRng(), s = Vi.fromRangeStart(r), a = e.getBody();
            if (!t && bk(o, s)) {
                const o = ((e, t, n) => ((e, t) => le(t.getClientRects()).bind((t => gk(e, t.left, t.top))).bind((e => {
                    return EE(Bu(n = e).map((e => _E(n, e).positions.concat(e))).getOr([]), t);
                    var n
                })))(t, n).orThunk((() => le(n.getClientRects()).bind((n => xE(SE(e, Vi.before(t)), n.left))))).getOr(Vi.before(t)))(a, n, s);
                return Ck(e, t, o), !0
            }
            if (t && vk(o, s)) {
                const o = ((e, t, n) => ((e, t) => de(t.getClientRects()).bind((t => pk(e, t.left, t.top))).bind((e => {
                    return EE(Ou(n = e).map((e => [e].concat(kE(n, e).positions))).getOr([]), t);
                    var n
                })))(t, n).orThunk((() => le(n.getClientRects()).bind((n => xE(NE(e, Vi.after(t)), n.left))))).getOr(Vi.after(t)))(a, n, s);
                return Ck(e, t, o), !0
            }
            return !1
        },
        xk = (e, t, n) => I.from(e.dom.getParent(e.selection.getNode(), "td,th")).bind((o => I.from(e.dom.getParent(o, "table")).map((r => n(e, t, r, o))))).getOr(!1),
        Ek = (e, t) => xk(e, t, yk), _k = (e, t) => xk(e, t, wk), kk = (e, t, n) => n.fold(I.none, I.none, ((e, t) => {
            return (n = t, Zn(n, Fg)).map((e => (e => {
                const t = xf.exact(e, 0, e, 0);
                return Nf(t)
            })(e)));
            var n
        }), (n => (e.execCommand("mceTableInsertRowAfter"), Sk(e, t, n)))), Sk = (e, t, n) => {
            return kk(e, t, (r = oo, mk(o = n, void 0).fold((() => lk.none(o)), (e => uk(e.all, o, e.index, 1, r)))));
            var o, r
        }, Nk = (e, t, n) => {
            return kk(e, t, (r = oo, mk(o = n, void 0).fold((() => lk.none()), (e => uk(e.all, o, e.index, -1, r)))));
            var o, r
        }, Rk = (e, t) => {
            const n = ["table", "li", "dl"], o = yn(e.getBody()), r = e => {
                const t = Ht(e);
                return _n(e, o) || H(n, t)
            }, s = e.selection.getRng();
            return ((e, t) => ((e, t, n = L) => n(t) ? I.none() : H(e, Ht(t)) ? I.some(t) : eo(t, e.join(","), (e => xn(e, "table") || n(e))))(["td", "th"], e, t))(yn(t ? s.endContainer : s.startContainer), r).map((n => (ck(n, r).each((t => {
                e.model.table.clearSelectedCells(t.dom)
            })), e.selection.collapse(!t), (t ? Sk : Nk)(e, r, n).each((t => {
                e.selection.setRng(t)
            })), !0))).getOr(!1)
        }, Ak = (e, t) => ({container: e, offset: t}), Tk = za.DOM, Ok = e => t => e === t ? -1 : 0, Bk = (e, t, n) => {
            if (er(e) && t >= 0) return I.some(Ak(e, t));
            {
                const o = hi(Tk);
                return I.from(o.backwards(e, t, Ok(e), n)).map((e => Ak(e.container, e.container.data.length)))
            }
        }, Pk = (e, t, n) => {
            if (!er(e)) return I.none();
            const o = e.data;
            if (t >= 0 && t <= o.length) return I.some(Ak(e, t));
            {
                const o = hi(Tk);
                return I.from(o.backwards(e, t, Ok(e), n)).bind((e => {
                    const o = e.container.data;
                    return Pk(e.container, t + o.length, n)
                }))
            }
        }, Dk = (e, t, n) => {
            if (!er(e)) return I.none();
            const o = e.data;
            if (t <= o.length) return I.some(Ak(e, t));
            {
                const r = hi(Tk);
                return I.from(r.forwards(e, t, Ok(e), n)).bind((e => Dk(e.container, t - o.length, n)))
            }
        }, Lk = (e, t, n, o, r) => {
            const s = hi(e, (e => t => e.isBlock(t) || H(["BR", "IMG", "HR", "INPUT"], t.nodeName) || "false" === e.getContentEditable(t))(e));
            return I.from(s.backwards(t, n, o, r))
        }, Mk = e => Dr(e.toString().replace(/\u00A0/g, " ")), Ik = e => "" !== e && -1 !== " \xa0\f\n\r\t\v".indexOf(e),
        Fk = (e, t) => e.substring(t.length), Uk = (e, t, n, o = 0) => {
            return (r = yn(t.startContainer), no(r, Ug)).fold((() => ((e, t, n, o = 0) => {
                if (!(r = t).collapsed || !er(r.startContainer)) return I.none();
                var r;
                const s = {text: "", offset: 0}, a = e.getParent(t.startContainer, e.isBlock) || e.getRoot();
                return Lk(e, t.startContainer, t.startOffset, ((e, t, o) => (s.text = o + s.text, s.offset += t, ((e, t, n) => {
                    let o;
                    const r = n.charAt(0);
                    for (o = t - 1; o >= 0; o--) {
                        const s = e.charAt(o);
                        if (Ik(s)) return I.none();
                        if (r === s && je(e, n, o, t)) break
                    }
                    return I.some(o)
                })(s.text, s.offset, n).getOr(t))), a).bind((e => {
                    const r = t.cloneRange();
                    if (r.setStart(e.container, e.offset), r.setEnd(t.endContainer, t.endOffset), r.collapsed) return I.none();
                    const s = Mk(r);
                    return 0 !== s.lastIndexOf(n) || Fk(s, n).length < o ? I.none() : I.some({
                        text: Fk(s, n),
                        range: r,
                        trigger: n
                    })
                }))
            })(e, t, n, o)), (t => {
                const o = e.createRng();
                o.selectNode(t.dom);
                const r = Mk(o);
                return I.some({range: o, text: Fk(r, n), trigger: n})
            }));
            var r
        }, zk = e => {
            if ((e => 3 === e.nodeType)(e)) return Ak(e, e.data.length);
            {
                const t = e.childNodes;
                return t.length > 0 ? zk(t[t.length - 1]) : Ak(e, t.length)
            }
        }, jk = (e, t) => {
            const n = e.childNodes;
            return n.length > 0 && t < n.length ? jk(n[t], 0) : n.length > 0 && (e => 1 === e.nodeType)(e) && n.length === t ? zk(n[n.length - 1]) : Ak(e, t)
        }, Hk = (e, t, n, o = {}) => {
            var r;
            const s = t(), a = null !== (r = e.selection.getRng().startContainer.nodeValue) && void 0 !== r ? r : "",
                i = Y(s.lookupByTrigger(n.trigger), (t => n.text.length >= t.minChars && t.matches.getOrThunk((() => (e => t => {
                    const n = jk(t.startContainer, t.startOffset);
                    return !((e, t) => {
                        var n;
                        const o = null !== (n = e.getParent(t.container, e.isBlock)) && void 0 !== n ? n : e.getRoot();
                        return Lk(e, t.container, t.offset, ((e, t) => 0 === t ? -1 : t), o).filter((e => {
                            const t = e.container.data.charAt(e.offset - 1);
                            return !Ik(t)
                        })).isSome()
                    })(e, n)
                })(e.dom)))(n.range, a, n.text)));
            if (0 === i.length) return I.none();
            const l = Promise.all(q(i, (e => e.fetch(n.text, e.maxResults, o).then((t => ({
                matchText: n.text,
                items: t,
                columns: e.columns,
                onAction: e.onAction,
                highlightOn: e.highlightOn
            }))))));
            return I.some({lookupData: l, context: n})
        };
    var $k;
    !function (e) {
        e[e.Error = 0] = "Error", e[e.Value = 1] = "Value"
    }($k || ($k = {}));
    const qk = (e, t, n) => e.stype === $k.Error ? t(e.serror) : n(e.svalue), Vk = e => ({stype: $k.Value, svalue: e}),
        Wk = e => ({stype: $k.Error, serror: e}), Kk = qk,
        Yk = e => f(e) && me(e).length > 100 ? " removed due to size" : JSON.stringify(e, null, 2),
        Gk = (e, t) => Wk([{path: e, getErrorInfo: t}]), Xk = (e, t) => ({
            extract: (n, o) => xe(o, e).fold((() => ((e, t) => Gk(e, (() => 'Choice schema did not contain choice key: "' + t + '"')))(n, e)), (e => ((e, t, n, o) => xe(n, o).fold((() => ((e, t, n) => Gk(e, (() => 'The chosen schema: "' + n + '" did not exist in branches: ' + Yk(t))))(e, n, o)), (n => n.extract(e.concat(["branch: " + o]), t))))(n, o, t, e))),
            toString: () => "chooseOn(" + e + "). Possible values: " + me(t)
        }), Qk = e => (...t) => {
            if (0 === t.length) throw new Error("Can't merge zero objects");
            const n = {};
            for (let o = 0; o < t.length; o++) {
                const r = t[o];
                for (const t in r) Ee(r, t) && (n[t] = e(n[t], r[t]))
            }
            return n
        }, Jk = Qk(((e, t) => g(e) && g(t) ? Jk(e, t) : t)),
        Zk = (Qk(((e, t) => t)), e => ({tag: "defaultedThunk", process: N(e)})), eS = e => {
            const t = (e => {
                const t = [], n = [];
                return V(e, (e => {
                    qk(e, (e => n.push(e)), (e => t.push(e)))
                })), {values: t, errors: n}
            })(e);
            return t.errors.length > 0 ? (n = t.errors, k(Wk, ee)(n)) : Vk(t.values);
            var n
        }, tS = (e, t, n) => {
            switch (e.tag) {
                case"field":
                    return t(e.key, e.newKey, e.presence, e.prop);
                case"custom":
                    return n(e.newKey, e.instantiator)
            }
        }, nS = e => ({
            extract: (t, n) => {
                return o = e(n), r = e => ((e, t) => Gk(e, N(t)))(t, e), o.stype === $k.Error ? r(o.serror) : o;
                var o, r
            }, toString: N("val")
        }), oS = nS(Vk), rS = (e, t, n, o) => o(xe(e, t).getOrThunk((() => n(e)))), sS = (e, t, n, o, r) => {
            const s = e => r.extract(t.concat([o]), e), a = e => e.fold((() => Vk(I.none())), (e => {
                const n = r.extract(t.concat([o]), e);
                return s = n, a = I.some, s.stype === $k.Value ? {stype: $k.Value, svalue: a(s.svalue)} : s;
                var s, a
            }));
            switch (e.tag) {
                case"required":
                    return ((e, t, n, o) => xe(t, n).fold((() => ((e, t, n) => Gk(e, (() => 'Could not find valid *required* value for "' + t + '" in ' + Yk(n))))(e, n, t)), o))(t, n, o, s);
                case"defaultedThunk":
                    return rS(n, o, e.process, s);
                case"option":
                    return ((e, t, n) => n(xe(e, t)))(n, o, a);
                case"defaultedOptionThunk":
                    return ((e, t, n, o) => o(xe(e, t).map((t => !0 === t ? n(e) : t))))(n, o, e.process, a);
                case"mergeWithThunk":
                    return rS(n, o, N({}), (t => {
                        const o = Jk(e.process(n), t);
                        return s(o)
                    }))
            }
        }, aS = e => ({
            extract: (t, n) => ((e, t, n) => {
                const o = {}, r = [];
                for (const s of n) tS(s, ((n, s, a, i) => {
                    const l = sS(a, e, t, n, i);
                    Kk(l, (e => {
                        r.push(...e)
                    }), (e => {
                        o[s] = e
                    }))
                }), ((e, n) => {
                    o[e] = n(t)
                }));
                return r.length > 0 ? Wk(r) : Vk(o)
            })(t, n, e), toString: () => {
                const t = q(e, (e => tS(e, ((e, t, n, o) => e + " -> " + o.toString()), ((e, t) => "state(" + e + ")"))));
                return "obj{\n" + t.join("\n") + "}"
            }
        }), iS = e => ({
            extract: (t, n) => {
                const o = q(n, ((n, o) => e.extract(t.concat(["[" + o + "]"]), n)));
                return eS(o)
            }, toString: () => "array(" + e.toString() + ")"
        }), lS = (e, t, n) => {
            return o = ((e, t, n) => ((e, t) => e.stype === $k.Error ? {
                stype: $k.Error,
                serror: t(e.serror)
            } : e)(t.extract([e], n), (e => ({input: n, errors: e}))))(e, t, n), qk(o, pl.error, pl.value);
            var o
        }, dS = (e, t) => Xk(e, pe(t, aS)), cS = N(oS), uS = (e, t) => nS((n => {
            const o = typeof n;
            return e(n) ? Vk(n) : Wk(`Expected type: ${t} but got: ${o}`)
        })), mS = uS(x, "number"), fS = uS(m, "string"), gS = uS(b, "boolean"), pS = uS(w, "function"),
        hS = (e, t, n, o) => ({tag: "field", key: e, newKey: t, presence: n, prop: o}),
        bS = (e, t) => ({tag: "custom", newKey: e, instantiator: t}),
        vS = (e, t) => hS(e, e, {tag: "required", process: {}}, t), yS = e => vS(e, fS), CS = e => vS(e, pS),
        wS = (e, t) => hS(e, e, {tag: "option", process: {}}, t), xS = e => wS(e, fS),
        ES = (e, t, n) => hS(e, e, Zk(t), n), _S = (e, t) => ES(e, t, mS), kS = (e, t, n) => ES(e, t, (e => {
            return t = t => H(e, t) ? pl.value(t) : pl.error(`Unsupported value: "${t}", choose one of "${e.join(", ")}".`), nS((e => t(e).fold(Wk, Vk)));
            var t
        })(n)), SS = (e, t) => ES(e, t, gS), NS = (e, t) => ES(e, t, pS), RS = yS("type"), AS = CS("fetch"),
        TS = CS("onAction"), OS = NS("onSetup", (() => _)), BS = xS("text"), PS = xS("icon"), DS = xS("tooltip"),
        LS = xS("label"), MS = SS("active", !1), IS = SS("enabled", !0), FS = SS("primary", !1),
        US = e => ((e, t) => ES("type", t, fS))(0, e),
        zS = aS([RS, yS("trigger"), _S("minChars", 1), (1, ((e, t) => hS(e, e, Zk(1), cS()))("columns")), _S("maxResults", 10), ("matches", wS("matches", pS)), AS, TS, (jS = fS, ES("highlightOn", [], iS(jS)))]);
    var jS;
    const HS = [IS, DS, PS, BS, OS], $S = [MS].concat(HS),
        qS = [NS("predicate", L), kS("scope", "node", ["node", "editor"]), kS("position", "selection", ["node", "selection", "line"])],
        VS = HS.concat([US("contextformbutton"), FS, TS, bS("original", R)]),
        WS = $S.concat([US("contextformbutton"), FS, TS, bS("original", R)]), KS = HS.concat([US("contextformbutton")]),
        YS = $S.concat([US("contextformtogglebutton")]),
        GS = dS("type", {contextformbutton: VS, contextformtogglebutton: WS});
    aS([US("contextform"), NS("initValue", N("")), LS, ((e, t) => hS(e, e, {
        tag: "required",
        process: {}
    }, iS(t)))("commands", GS), wS("launch", dS("type", {
        contextformbutton: KS,
        contextformtogglebutton: YS
    }))].concat(qS));
    const XS = e => {
            const t = e.ui.registry.getAll().popups, n = pe(t, (e => {
                return (t = e, lS("Autocompleter", zS, {trigger: t.ch, ...t})).fold((e => {
                    throw new Error("Errors: \n" + (e => {
                        const t = e.length > 10 ? e.slice(0, 10).concat([{
                            path: [],
                            getErrorInfo: N("... (only showing first ten failures)")
                        }]) : e;
                        return q(t, (e => "Failed path: (" + e.path.join(" > ") + ")\n" + e.getErrorInfo()))
                    })((t = e).errors).join("\n") + "\n\nInput object: " + Yk(t.input));
                    var t
                }), R);
                var t
            })), o = ke(Ce(n, (e => e.trigger))), r = we(n);
            return {dataset: n, triggers: o, lookupByTrigger: e => Y(r, (t => t.trigger === e))}
        }, QS = e => {
            const t = Xa(), n = $a(!1), o = t.isSet, r = () => {
                o() && ((e => {
                    JC(e).autocompleter.removeDecoration()
                })(e), (e => {
                    e.dispatch("AutocompleterEnd")
                })(e), n.set(!1), t.clear())
            }, s = De((() => XS(e))), a = a => {
                (n => t.get().map((t => Uk(e.dom, e.selection.getRng(), t.trigger).bind((t => Hk(e, s, t, n))))).getOrThunk((() => ((e, t) => {
                    const n = t(), o = e.selection.getRng();
                    return ((e, t, n) => ue(n.triggers, (n => Uk(e, t, n))))(e.dom, o, n).bind((n => Hk(e, t, n)))
                })(e, s))))(a).fold(r, (s => {
                    (n => {
                        o() || (((e, t) => {
                            JC(e).autocompleter.addDecoration(t)
                        })(e, n.range), t.set({trigger: n.trigger, matchLength: n.text.length}))
                    })(s.context), s.lookupData.then((o => {
                        t.get().map((a => {
                            const i = s.context;
                            a.trigger === i.trigger && (i.text.length - a.matchLength >= 10 ? r() : (t.set({
                                ...a,
                                matchLength: i.text.length
                            }), n.get() ? ((e, t) => {
                                e.dispatch("AutocompleterUpdate", t)
                            })(e, {lookupData: o}) : (n.set(!0), ((e, t) => {
                                e.dispatch("AutocompleterStart", t)
                            })(e, {lookupData: o}))))
                        }))
                    }))
                }))
            };
            e.addCommand("mceAutocompleterReload", ((e, t) => {
                const n = f(t) ? t.fetchOptions : {};
                a(n)
            })), e.addCommand("mceAutocompleterClose", r), ((e, t) => {
                const n = Ja(t.load, 50);
                e.on("keypress compositionend", (e => {
                    27 !== e.which && n.throttle()
                })), e.on("keydown", (e => {
                    const o = e.which;
                    8 === o ? n.throttle() : 27 === o && t.cancelIfNecessary()
                })), e.on("remove", n.cancel)
            })(e, {cancelIfNecessary: r, load: a})
        }, JS = xt().browser.isSafari(), ZS = e => Or(yn(e)), eN = (e, t) => {
            var n;
            return 0 === e.startOffset && e.endOffset === (null === (n = t.textContent) || void 0 === n ? void 0 : n.length)
        }, tN = (e, t) => I.from(e.getParent(t.container(), "details")), nN = (e, t) => tN(e, t).isSome(), oN = (e, t) => {
            const n = t.getNode();
            v(n) || e.selection.setCursorLocation(n, t.offset())
        }, rN = (e, t, n) => {
            const o = e.dom.getParent(t.container(), "details");
            if (o && !o.open) {
                const t = e.dom.select("summary", o)[0];
                t && (n ? Ou(t) : Bu(t)).each((t => oN(e, t)))
            } else oN(e, t)
        }, sN = (e, t, n) => {
            const {dom: o, selection: r} = e, s = e.getBody();
            if ("character" === n) {
                const n = Vi.fromRangeStart(r.getRng()), a = o.getParent(n.container(), o.isBlock), i = tN(o, n),
                    l = a && o.isEmpty(a), d = h(null == a ? void 0 : a.previousSibling),
                    c = h(null == a ? void 0 : a.nextSibling);
                return !!(l && (t ? c : d) && Su(!t, s, n).exists((e => nN(o, e) && !Lt(i, tN(o, e))))) || Su(t, s, n).fold(L, (n => {
                    const r = tN(o, n);
                    if (nN(o, n) && !Lt(i, r)) {
                        if (t || rN(e, n, !1), a && l) {
                            if (t && d) return !0;
                            if (!t && c) return !0;
                            rN(e, n, t), e.dom.remove(a)
                        }
                        return !0
                    }
                    return !1
                }))
            }
            return !1
        }, aN = (e, t, n, o) => {
            const r = e.selection.getRng(), s = Vi.fromRangeStart(r), a = e.getBody();
            return "selection" === o ? ((e, t) => {
                const n = t.startSummary.exists((t => t.contains(e.startContainer))),
                    o = t.startSummary.exists((t => t.contains(e.endContainer))),
                    r = t.startDetails.forall((e => t.endDetails.forall((t => e !== t))));
                return (n || o) && !(n && o) || r
            })(r, t) : n ? ((e, t) => t.startSummary.exists((t => ((e, t) => Bu(t).exists((n => ar(n.getNode()) && Tu(t, n).exists((t => t.isEqual(e))) || n.isEqual(e))))(e, t))))(s, t) || ((e, t, n) => n.startDetails.exists((n => Au(e, t).forall((e => !n.contains(e.container()))))))(a, s, t) : ((e, t) => t.startSummary.exists((t => ((e, t) => Ou(t).exists((t => t.isEqual(e))))(e, t))))(s, t) || ((e, t) => t.startDetails.exists((n => Tu(n, e).forall((n => t.startSummary.exists((t => !t.contains(e.container()) && t.contains(n.container()))))))))(s, t)
        }, iN = (e, t, n) => ((e, t, n) => ((e, t) => {
            const n = I.from(e.getParent(t.startContainer, "details")), o = I.from(e.getParent(t.endContainer, "details"));
            if (n.isSome() || o.isSome()) {
                const t = n.bind((t => I.from(e.select("summary", t)[0])));
                return I.some({startSummary: t, startDetails: n, endDetails: o})
            }
            return I.none()
        })(e.dom, e.selection.getRng()).fold((() => sN(e, t, n)), (o => aN(e, o, t, n) || sN(e, t, n))))(e, t, n) || JS && ((e, t, n) => {
            const o = e.selection, r = o.getNode(), s = o.getRng(), a = Vi.fromRangeStart(s);
            return !!pr(r) && ("selection" === n && eN(s, r) || Oh(t, a, r) ? ZS(r) : e.undoManager.transact((() => {
                const s = o.getSel();
                let {anchorNode: a, anchorOffset: i, focusNode: l, focusOffset: d} = null != s ? s : {};
                const c = () => {
                    C(a) && C(i) && C(l) && C(d) && (null == s || s.setBaseAndExtent(a, i, l, d))
                }, u = (e, t) => {
                    V(e.childNodes, (e => {
                        dm(e) && t.appendChild(e)
                    }))
                }, m = e.dom.create("span", {"data-mce-bogus": "1"});
                u(r, m), r.appendChild(m), c(), "word" !== n && "line" !== n || null == s || s.modify("extend", t ? "right" : "left", n), !o.isCollapsed() && eN(o.getRng(), m) ? ZS(r) : (e.execCommand(t ? "ForwardDelete" : "Delete"), a = null == s ? void 0 : s.anchorNode, i = null == s ? void 0 : s.anchorOffset, l = null == s ? void 0 : s.focusNode, d = null == s ? void 0 : s.focusOffset, u(m, r), c()), e.dom.remove(m)
            })), !0)
        })(e, t, n) ? I.some(_) : I.none(), lN = e => (t, n, o = {}) => {
            const r = t.getBody(), s = {
                bubbles: !0,
                composed: !0,
                data: null,
                isComposing: !1,
                detail: 0,
                view: null,
                target: r,
                currentTarget: r,
                eventPhase: Event.AT_TARGET,
                originalTarget: r,
                explicitOriginalTarget: r,
                isTrusted: !1,
                srcElement: r,
                cancelable: !1,
                preventDefault: _,
                inputType: n
            }, a = Ea(new InputEvent(e));
            return t.dispatch(e, {...a, ...s, ...o})
        }, dN = lN("input"), cN = lN("beforeinput"), uN = xt(), mN = uN.os, fN = mN.isMacOS() || mN.isiOS(),
        gN = uN.browser.isFirefox(), pN = (e, t) => {
            const n = e.dom, o = e.schema.getMoveCaretBeforeOnEnterElements();
            if (!t) return;
            if (/^(LI|DT|DD)$/.test(t.nodeName)) {
                const e = (e => {
                    for (; e;) {
                        if (qo(e) || er(e) && e.data && /[\r\n\s]/.test(e.data)) return e;
                        e = e.nextSibling
                    }
                    return null
                })(t.firstChild);
                e && /^(UL|OL|DL)$/.test(e.nodeName) && t.insertBefore(n.doc.createTextNode(br), t.firstChild)
            }
            const r = n.createRng();
            if (t.normalize(), t.hasChildNodes()) {
                const e = new jo(t, t);
                let n, s = t;
                for (; n = e.current();) {
                    if (er(n)) {
                        r.setStart(n, 0), r.setEnd(n, 0);
                        break
                    }
                    if (o[n.nodeName.toLowerCase()]) {
                        r.setStartBefore(n), r.setEndBefore(n);
                        break
                    }
                    s = n, n = e.next()
                }
                n || (r.setStart(s, 0), r.setEnd(s, 0))
            } else ar(t) ? t.nextSibling && n.isBlock(t.nextSibling) ? (r.setStartBefore(t), r.setEndBefore(t)) : (r.setStartAfter(t), r.setEndAfter(t)) : (r.setStart(t, 0), r.setEnd(t, 0));
            e.selection.setRng(r), sg(e, r)
        }, hN = (e, t) => {
            const n = e.getRoot();
            let o, r = t;
            for (; r !== n && r && "false" !== e.getContentEditable(r);) {
                if ("true" === e.getContentEditable(r)) {
                    o = r;
                    break
                }
                r = r.parentNode
            }
            return r !== n ? o : n
        }, bN = e => I.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock)), vN = e => {
            e.innerHTML = '<br data-mce-bogus="1">'
        }, yN = (e, t) => {
            Il(e).toLowerCase() === t.tagName.toLowerCase() && ((e, t, n) => {
                const o = e.dom;
                I.from(n.style).map(o.parseStyle).each((e => {
                    const n = {...fo(yn(t)), ...e};
                    o.setStyles(t, n)
                }));
                const r = I.from(n.class).map((e => e.split(/\s+/))),
                    s = I.from(t.className).map((e => Y(e.split(/\s+/), (e => "" !== e))));
                Mt(r, s, ((e, n) => {
                    const r = Y(n, (t => !H(e, t))), s = [...e, ...r];
                    o.setAttrib(t, "class", s.join(" "))
                }));
                const a = ["style", "class"], i = ye(n, ((e, t) => !H(a, t)));
                o.setAttribs(t, i)
            })(e, t, Fl(e))
        }, CN = (e, t, n, o, r = !0, s, a) => {
            const i = e.dom, l = e.schema, d = Il(e), c = n ? n.nodeName.toUpperCase() : "";
            let u = t;
            const m = l.getTextInlineElements();
            let f;
            f = s || "TABLE" === c || "HR" === c ? i.create(s || d, a || {}) : n.cloneNode(!1);
            let g = f;
            if (r) {
                do {
                    if (m[u.nodeName]) {
                        if (Du(u) || Ku(u)) continue;
                        const e = u.cloneNode(!1);
                        i.setAttrib(e, "id", ""), f.hasChildNodes() ? (e.appendChild(f.firstChild), f.appendChild(e)) : (g = e, f.appendChild(e))
                    }
                } while ((u = u.parentNode) && u !== o)
            } else i.setAttrib(f, "style", null), i.setAttrib(f, "class", null);
            return yN(e, f), vN(g), f
        }, wN = (e, t) => {
            const n = null == e ? void 0 : e.parentNode;
            return C(n) && n.nodeName === t
        }, xN = e => C(e) && /^(OL|UL|LI)$/.test(e.nodeName), EN = e => C(e) && /^(LI|DT|DD)$/.test(e.nodeName), _N = e => {
            const t = e.parentNode;
            return EN(t) ? t : e
        }, kN = (e, t, n) => {
            let o = e[n ? "firstChild" : "lastChild"];
            for (; o && !qo(o);) o = o[n ? "nextSibling" : "previousSibling"];
            return o === t
        }, SN = e => X(Ce(fo(yn(e)), ((e, t) => `${t}: ${e};`)), ((e, t) => e + t), ""),
        NN = (e, t) => t && "A" === t.nodeName && e.isEmpty(t),
        RN = (e, t) => e.nodeName === t || e.previousSibling && e.previousSibling.nodeName === t,
        AN = (e, t) => C(t) && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && e.isEditable(t.parentNode) && "false" !== e.getContentEditable(t),
        TN = (e, t, n) => er(t) ? e ? 1 === n && t.data.charAt(n - 1) === Br ? 0 : n : n === t.data.length - 1 && t.data.charAt(n) === Br ? t.data.length : n : n,
        ON = {
            insert: (e, t) => {
                let n, o, r, s, a = !1;
                const i = e.dom, l = e.schema.getNonEmptyElements(), d = e.selection.getRng(), c = Il(e),
                    u = yn(d.startContainer), f = In(u, d.startOffset), g = f.exists((e => Vt(e) && !oo(e))),
                    p = d.collapsed && g, b = (t, o) => CN(e, n, k, _, Hl(e), t, o), v = e => {
                        const t = TN(e, n, o);
                        if (er(n) && (e ? t > 0 : t < n.data.length)) return !1;
                        if (n.parentNode === k && a && !e) return !0;
                        if (e && qo(n) && n === k.firstChild) return !0;
                        if (RN(n, "TABLE") || RN(n, "HR")) return a && !e || !a && e;
                        const r = new jo(n, k);
                        let s;
                        for (er(n) && (e && 0 === t ? r.prev() : e || t !== n.data.length || r.next()); s = r.current();) {
                            if (qo(s)) {
                                if (!s.getAttribute("data-mce-bogus")) {
                                    const e = s.nodeName.toLowerCase();
                                    if (l[e] && "br" !== e) return !1
                                }
                            } else if (er(s) && !ss(s.data)) return !1;
                            e ? r.prev() : r.next()
                        }
                        return !0
                    }, w = () => {
                        let t;
                        return t = /^(H[1-6]|PRE|FIGURE)$/.test(r) && "HGROUP" !== S ? b(c) : b(), ((e, t) => {
                            const n = $l(e);
                            return !y(t) && (m(n) ? H(Pt.explode(n), t.nodeName.toLowerCase()) : n)
                        })(e, s) && AN(i, s) && i.isEmpty(k, void 0, {includeZwsp: !0}) ? t = i.split(s, k) : i.insertAfter(t, k), pN(e, t), t
                    };
                Mf(i, d).each((e => {
                    d.setStart(e.startContainer, e.startOffset), d.setEnd(e.endContainer, e.endOffset)
                })), n = d.startContainer, o = d.startOffset;
                const x = !(!t || !t.shiftKey), E = !(!t || !t.ctrlKey);
                qo(n) && n.hasChildNodes() && !p && (a = o > n.childNodes.length - 1, n = n.childNodes[Math.min(o, n.childNodes.length - 1)] || n, o = a && er(n) ? n.data.length : 0);
                const _ = hN(i, n);
                if (!_ || ((e, t) => {
                    const n = e.dom.getParent(t, "ol,ul,dl");
                    return null !== n && "false" === e.dom.getContentEditableParent(n)
                })(e, n)) return;
                x || (n = ((e, t, n, o, r) => {
                    var s, a;
                    const i = e.dom, l = null !== (s = hN(i, o)) && void 0 !== s ? s : i.getRoot();
                    let d = i.getParent(o, i.isBlock);
                    if (!d || !AN(i, d)) {
                        if (d = d || l, !d.hasChildNodes()) {
                            const o = i.create(t);
                            return yN(e, o), d.appendChild(o), n.setStart(o, 0), n.setEnd(o, 0), o
                        }
                        let s, c = o;
                        for (; c && c.parentNode !== d;) c = c.parentNode;
                        for (; c && !i.isBlock(c);) s = c, c = c.previousSibling;
                        const u = null === (a = null == s ? void 0 : s.parentElement) || void 0 === a ? void 0 : a.nodeName;
                        if (s && u && e.schema.isValidChild(u, t.toLowerCase())) {
                            const a = s.parentNode, l = i.create(t);
                            for (yN(e, l), a.insertBefore(l, s), c = s; c && !i.isBlock(c);) {
                                const e = c.nextSibling;
                                l.appendChild(c), c = e
                            }
                            n.setStart(o, r), n.setEnd(o, r)
                        }
                    }
                    return o
                })(e, c, d, n, o));
                let k = i.getParent(n, i.isBlock) || i.getRoot();
                s = C(null == k ? void 0 : k.parentNode) ? i.getParent(k.parentNode, i.isBlock) : null, r = k ? k.nodeName.toUpperCase() : "";
                const S = s ? s.nodeName.toUpperCase() : "";
                if ("LI" !== S || E || (k = s, s = s.parentNode, r = S), qo(s) && ((e, t, n) => !t && n.nodeName.toLowerCase() === Il(e) && e.dom.isEmpty(n) && ((t, n, o) => {
                    let r = n;
                    for (; r && r !== t && h(r.nextSibling);) {
                        const t = r.parentElement;
                        if (!t || (s = t, !Ee(e.schema.getTextBlockElements(), s.nodeName.toLowerCase()))) return gr(t);
                        r = t
                    }
                    var s;
                    return !1
                })(e.getBody(), n))(e, x, k)) return ((e, t, n) => {
                    var o, r, s;
                    const a = t(Il(e)), i = ((e, t) => e.dom.getParent(t, gr))(e, n);
                    i && (e.dom.insertAfter(a, i), pN(e, a), (null !== (s = null === (r = null === (o = n.parentElement) || void 0 === o ? void 0 : o.childNodes) || void 0 === r ? void 0 : r.length) && void 0 !== s ? s : 0) > 1 && e.dom.remove(n))
                })(e, b, k);
                if (/^(LI|DT|DD)$/.test(r) && qo(s) && i.isEmpty(k)) return void ((e, t, n, o, r) => {
                    const s = e.dom, a = e.selection.getRng(), i = n.parentNode;
                    if (n === e.getBody() || !i) return;
                    var l;
                    xN(l = n) && xN(l.parentNode) && (r = "LI");
                    const d = EN(o) ? SN(o) : void 0;
                    let c = EN(o) && d ? t(r, {style: SN(o)}) : t(r);
                    if (kN(n, o, !0) && kN(n, o, !1)) if (wN(n, "LI")) {
                        const e = _N(n);
                        s.insertAfter(c, e), (e => {
                            var t;
                            return (null === (t = e.parentNode) || void 0 === t ? void 0 : t.firstChild) === e
                        })(n) ? s.remove(e) : s.remove(n)
                    } else s.replace(c, n); else if (kN(n, o, !0)) wN(n, "LI") ? (s.insertAfter(c, _N(n)), c.appendChild(s.doc.createTextNode(" ")), c.appendChild(n)) : i.insertBefore(c, n), s.remove(o); else if (kN(n, o, !1)) s.insertAfter(c, _N(n)), s.remove(o); else {
                        n = _N(n);
                        const e = a.cloneRange();
                        e.setStartAfter(o), e.setEndAfter(n);
                        const t = e.extractContents();
                        if ("LI" === r && ((e, t) => e.firstChild && "LI" === e.firstChild.nodeName)(t)) {
                            const e = Y(q(c.children, yn), O(Xt("br")));
                            c = t.firstChild, s.insertAfter(t, n), V(e, (e => bo(yn(c), e))), d && c.setAttribute("style", d)
                        } else s.insertAfter(t, n), s.insertAfter(c, n);
                        s.remove(o)
                    }
                    pN(e, c)
                })(e, b, s, k, c);
                if (!(p || k !== e.getBody() && AN(i, k))) return;
                const N = k.parentNode;
                let R;
                if (p) R = b(c), f.fold((() => {
                    vo(u, yn(R))
                }), (e => {
                    po(e, yn(R))
                })), e.selection.setCursorLocation(R, 0); else if (Ir(k)) R = Vr(k), i.isEmpty(k) && vN(k), yN(e, R), pN(e, R); else if (v(!1)) R = w(); else if (v(!0) && N) {
                    R = N.insertBefore(b(), k);
                    const t = yn(d.startContainer).dom.hasChildNodes() && d.collapsed;
                    pN(e, RN(k, "HR") || t ? R : k)
                } else {
                    const t = (e => {
                        const t = e.cloneRange();
                        return t.setStart(e.startContainer, TN(!0, e.startContainer, e.startOffset)), t.setEnd(e.endContainer, TN(!1, e.endContainer, e.endOffset)), t
                    })(d).cloneRange();
                    t.setEndAfter(k);
                    const n = t.extractContents();
                    (e => {
                        V(Fo(yn(e), Kt), (e => {
                            const t = e.dom;
                            t.nodeValue = Dr(t.data)
                        }))
                    })(n), (e => {
                        let t = e;
                        do {
                            er(t) && (t.data = t.data.replace(/^[\r\n]+/, "")), t = t.firstChild
                        } while (t)
                    })(n), R = n.firstChild, i.insertAfter(n, k), ((e, t, n) => {
                        var o;
                        const r = [];
                        if (!n) return;
                        let s = n;
                        for (; s = s.firstChild;) {
                            if (e.isBlock(s)) return;
                            qo(s) && !t[s.nodeName.toLowerCase()] && r.push(s)
                        }
                        let a = r.length;
                        for (; a--;) s = r[a], (!s.hasChildNodes() || s.firstChild === s.lastChild && "" === (null === (o = s.firstChild) || void 0 === o ? void 0 : o.nodeValue) || NN(e, s)) && e.remove(s)
                    })(i, l, R), ((e, t) => {
                        t.normalize();
                        const n = t.lastChild;
                        (!n || qo(n) && /^(left|right)$/gi.test(e.getStyle(n, "float", !0))) && e.add(t, "br")
                    })(i, k), i.isEmpty(k) && vN(k), R.normalize(), i.isEmpty(R) ? (i.remove(R), w()) : (yN(e, R), pN(e, R))
                }
                i.setAttrib(R, "id", ""), e.dispatch("NewBlock", {newBlock: R})
            }, fakeEventName: "insertParagraph"
        }, BN = (e, t, n) => {
            const o = e.dom.createRng();
            n ? (o.setStartBefore(t), o.setEndBefore(t)) : (o.setStartAfter(t), o.setEndAfter(t)), e.selection.setRng(o), sg(e, o)
        }, PN = (e, t) => {
            const n = bn("br");
            po(yn(t), n), e.undoManager.add()
        }, DN = (e, t) => {
            LN(e.getBody(), t) || ho(yn(t), bn("br"));
            const n = bn("br");
            ho(yn(t), n), BN(e, n.dom, !1), e.undoManager.add()
        }, LN = (e, t) => {
            return n = Vi.after(t), !!ar(n.getNode()) || Au(e, Vi.after(t)).map((e => ar(e.getNode()))).getOr(!1);
            var n
        }, MN = e => e && "A" === e.nodeName && "href" in e, IN = e => e.fold(L, MN, MN, L), FN = (e, t) => {
            t.fold(_, T(PN, e), T(DN, e), _)
        }, UN = {
            insert: (e, t) => {
                const n = (e => {
                    const t = T(Ch, e), n = Vi.fromRangeStart(e.selection.getRng());
                    return iE(t, e.getBody(), n).filter(IN)
                })(e);
                n.isSome() ? n.each(T(FN, e)) : ((e, t) => {
                    const n = e.selection, o = e.dom, r = n.getRng();
                    let s, a = !1;
                    Mf(o, r).each((e => {
                        r.setStart(e.startContainer, e.startOffset), r.setEnd(e.endContainer, e.endOffset)
                    }));
                    let i = r.startOffset, l = r.startContainer;
                    if (qo(l) && l.hasChildNodes()) {
                        const e = i > l.childNodes.length - 1;
                        l = l.childNodes[Math.min(i, l.childNodes.length - 1)] || l, i = e && er(l) ? l.data.length : 0
                    }
                    let d = o.getParent(l, o.isBlock);
                    const c = d && d.parentNode ? o.getParent(d.parentNode, o.isBlock) : null,
                        u = c ? c.nodeName.toUpperCase() : "", m = !(!t || !t.ctrlKey);
                    "LI" !== u || m || (d = c), er(l) && i >= l.data.length && (((e, t, n) => {
                        const o = new jo(t, n);
                        let r;
                        const s = e.getNonEmptyElements();
                        for (; r = o.next();) if (s[r.nodeName.toLowerCase()] || er(r) && r.length > 0) return !0;
                        return !1
                    })(e.schema, l, d || o.getRoot()) || (s = o.create("br"), r.insertNode(s), r.setStartAfter(s), r.setEndAfter(s), a = !0)), s = o.create("br"), Ki(o, r, s), BN(e, s, a), e.undoManager.add()
                })(e, t)
            }, fakeEventName: "insertLineBreak"
        }, zN = (e, t) => bN(e).filter((e => t.length > 0 && xn(yn(e), t))).isSome(),
        jN = hl([{br: []}, {block: []}, {none: []}]), HN = (e, t) => (e => zN(e, jl(e)))(e),
        $N = e => (t, n) => (e => bN(e).filter((e => Sr(yn(e)))).isSome())(t) === e, qN = (e, t) => (n, o) => {
            const r = (e => bN(e).fold(N(""), (e => e.nodeName.toUpperCase())))(n) === e.toUpperCase();
            return r === t
        }, VN = e => {
            const t = hN(e.dom, e.selection.getStart());
            return y(t)
        }, WN = e => qN("pre", e), KN = e => (t, n) => Ml(t) === e, YN = (e, t) => (e => zN(e, zl(e)))(e), GN = (e, t) => t,
        XN = e => {
            const t = Il(e), n = hN(e.dom, e.selection.getStart());
            return C(n) && e.schema.isValidChild(n.nodeName, t)
        }, QN = e => {
            const t = e.selection.getRng(), n = yn(t.startContainer), o = In(n, t.startOffset).map((e => Vt(e) && !oo(e)));
            return t.collapsed && o.getOr(!0)
        }, JN = (e, t) => (n, o) => X(e, ((e, t) => e && t(n, o)), !0) ? I.some(t) : I.none(), ZN = (e, t, n) => {
            t.selection.isCollapsed() || (e => {
                e.execCommand("delete")
            })(t), C(n) && cN(t, e.fakeEventName).isDefaultPrevented() || (e.insert(t, n), C(n) && dN(t, e.fakeEventName))
        }, eR = (e, t) => {
            const n = () => ZN(UN, e, t), o = () => ZN(ON, e, t),
                r = ((e, t) => Qx([JN([HN], jN.none()), JN([WN(!0), VN], jN.none()), JN([qN("summary", !0)], jN.br()), JN([WN(!0), KN(!1), GN], jN.br()), JN([WN(!0), KN(!1)], jN.block()), JN([WN(!0), KN(!0), GN], jN.block()), JN([WN(!0), KN(!0)], jN.br()), JN([$N(!0), GN], jN.br()), JN([$N(!0)], jN.block()), JN([YN], jN.br()), JN([GN], jN.br()), JN([XN], jN.block()), JN([QN], jN.block())], [e, !(!t || !t.shiftKey)]).getOr(jN.none()))(e, t);
            switch (Ul(e)) {
                case"linebreak":
                    r.fold(n, n, _);
                    break;
                case"block":
                    r.fold(o, o, _);
                    break;
                case"invert":
                    r.fold(o, n, _);
                    break;
                default:
                    r.fold(n, o, _)
            }
        }, tR = xt(), nR = tR.os.isiOS() && tR.browser.isSafari(), oR = (e, t) => {
            var n;
            t.isDefaultPrevented() || (t.preventDefault(), (n = e.undoManager).typing && (n.typing = !1, n.add()), e.undoManager.transact((() => {
                eR(e, t)
            })))
        }, rR = xt(), sR = e => e.stopImmediatePropagation(),
        aR = e => e.keyCode === af.PAGE_UP || e.keyCode === af.PAGE_DOWN, iR = (e, t, n) => {
            n && !e.get() ? t.on("NodeChange", sR, !0) : !n && e.get() && t.off("NodeChange", sR), e.set(n)
        }, lR = (e, t) => {
            const n = t.container(), o = t.offset();
            return er(n) ? (n.insertData(o, e), I.some(Vi(n, o + e.length))) : iu(t).map((n => {
                const o = vn(e);
                return t.isAtEnd() ? ho(n, o) : po(n, o), Vi(o.dom, e.length)
            }))
        }, dR = T(lR, br), cR = T(lR, " "), uR = e => t => {
            e.selection.setRng(t.toRange()), e.nodeChanged()
        }, mR = e => {
            const t = Vi.fromRangeStart(e.selection.getRng()), n = yn(e.getBody());
            if (e.selection.isCollapsed()) {
                const o = T(Ch, e), r = Vi.fromRangeStart(e.selection.getRng());
                return iE(o, e.getBody(), r).bind((e => t => t.fold((t => Tu(e.dom, Vi.before(t))), (e => Ou(e)), (e => Bu(e)), (t => Au(e.dom, Vi.after(t)))))(n)).map((o => () => ((e, t, n) => o => Zp(e, o, n) ? dR(t) : cR(t))(n, t, e.schema)(o).each(uR(e))))
            }
            return I.none()
        }, fR = e => {
            return It(At.browser.isFirefox() && e.selection.isEditable() && (t = e.dom, n = e.selection.getRng().startContainer, t.isEditable(t.getParent(n, "summary"))), (() => {
                const t = yn(e.getBody());
                e.selection.isCollapsed() || e.getDoc().execCommand("Delete"), ((e, t, n) => Zp(e, t, n) ? dR(t) : cR(t))(t, Vi.fromRangeStart(e.selection.getRng()), e.schema).each(uR(e))
            }));
            var t, n
        }, gR = e => hc(e) ? [{keyCode: af.TAB, action: tk(Rk, e, !0)}, {
            keyCode: af.TAB,
            shiftKey: !0,
            action: tk(Rk, e, !1)
        }] : [], pR = e => {
            if (e.addShortcut("Meta+P", "", "mcePrint"), QS(e), XC(e)) return $a(null);
            {
                const t = o_(e);
                return (e => {
                    e.on("beforeinput", (t => {
                        e.selection.isEditable() && !$(t.getTargetRanges(), (t => !Og(e.dom, t))) || t.preventDefault()
                    }))
                })(e), (e => {
                    e.on("keyup compositionstart", T($_, e))
                })(e), ((e, t) => {
                    e.on("keydown", (n => {
                        n.isDefaultPrevented() || ((e, t, n) => {
                            const o = At.os.isMacOS() || At.os.isiOS();
                            nk([{keyCode: af.RIGHT, action: tk(W_, e, !0)}, {
                                keyCode: af.LEFT,
                                action: tk(W_, e, !1)
                            }, {keyCode: af.UP, action: tk(K_, e, !1)}, {
                                keyCode: af.DOWN,
                                action: tk(K_, e, !0)
                            }, ...o ? [{
                                keyCode: af.UP,
                                action: tk(G_, e, !1),
                                metaKey: !0,
                                shiftKey: !0
                            }, {
                                keyCode: af.DOWN,
                                action: tk(G_, e, !0),
                                metaKey: !0,
                                shiftKey: !0
                            }] : [], {keyCode: af.RIGHT, action: tk(Ek, e, !0)}, {
                                keyCode: af.LEFT,
                                action: tk(Ek, e, !1)
                            }, {keyCode: af.UP, action: tk(_k, e, !1)}, {
                                keyCode: af.DOWN,
                                action: tk(_k, e, !0)
                            }, {keyCode: af.UP, action: tk(_k, e, !1)}, {
                                keyCode: af.UP,
                                action: tk(J_, e, !1)
                            }, {keyCode: af.DOWN, action: tk(J_, e, !0)}, {
                                keyCode: af.RIGHT,
                                action: tk(rk, e, !0)
                            }, {keyCode: af.LEFT, action: tk(rk, e, !1)}, {
                                keyCode: af.UP,
                                action: tk(sk, e, !1)
                            }, {keyCode: af.DOWN, action: tk(sk, e, !0)}, {
                                keyCode: af.RIGHT,
                                action: tk(t_, e, t, !0)
                            }, {keyCode: af.LEFT, action: tk(t_, e, t, !1)}, {
                                keyCode: af.RIGHT,
                                ctrlKey: !o,
                                altKey: o,
                                action: tk(r_, e, t)
                            }, {keyCode: af.LEFT, ctrlKey: !o, altKey: o, action: tk(s_, e, t)}, {
                                keyCode: af.UP,
                                action: tk(Q_, e, !1)
                            }, {keyCode: af.DOWN, action: tk(Q_, e, !0)}], n).each((e => {
                                n.preventDefault()
                            }))
                        })(e, t, n)
                    }))
                })(e, t), ((e, t) => {
                    let n = !1;
                    e.on("keydown", (o => {
                        n = o.keyCode === af.BACKSPACE, o.isDefaultPrevented() || ((e, t, n) => {
                            const o = n.keyCode === af.BACKSPACE ? "deleteContentBackward" : "deleteContentForward",
                                r = e.selection.isCollapsed(), s = r ? "character" : "selection",
                                a = e => r ? e ? "word" : "line" : "selection";
                            ok([{keyCode: af.BACKSPACE, action: tk(T_, e)}, {
                                keyCode: af.BACKSPACE,
                                action: tk(Ux, e, !1)
                            }, {keyCode: af.DELETE, action: tk(Ux, e, !0)}, {
                                keyCode: af.BACKSPACE,
                                action: tk(Ox, e, !1)
                            }, {keyCode: af.DELETE, action: tk(Ox, e, !0)}, {
                                keyCode: af.BACKSPACE,
                                action: tk(d_, e, t, !1)
                            }, {keyCode: af.DELETE, action: tk(d_, e, t, !0)}, {
                                keyCode: af.BACKSPACE,
                                action: tk(ib, e, !1)
                            }, {keyCode: af.DELETE, action: tk(ib, e, !0)}, {
                                keyCode: af.BACKSPACE,
                                action: tk(iN, e, !1, s)
                            }, {keyCode: af.DELETE, action: tk(iN, e, !0, s)}, ...fN ? [{
                                keyCode: af.BACKSPACE,
                                altKey: !0,
                                action: tk(iN, e, !1, a(!0))
                            }, {keyCode: af.DELETE, altKey: !0, action: tk(iN, e, !0, a(!0))}, {
                                keyCode: af.BACKSPACE,
                                metaKey: !0,
                                action: tk(iN, e, !1, a(!1))
                            }] : [{keyCode: af.BACKSPACE, ctrlKey: !0, action: tk(iN, e, !1, a(!0))}, {
                                keyCode: af.DELETE,
                                ctrlKey: !0,
                                action: tk(iN, e, !0, a(!0))
                            }], {keyCode: af.BACKSPACE, action: tk(zx, e, !1)}, {
                                keyCode: af.DELETE,
                                action: tk(zx, e, !0)
                            }, {keyCode: af.BACKSPACE, action: tk(x_, e, !1)}, {
                                keyCode: af.DELETE,
                                action: tk(x_, e, !0)
                            }, {keyCode: af.BACKSPACE, action: tk(_x, e, !1)}, {
                                keyCode: af.DELETE,
                                action: tk(_x, e, !0)
                            }, {keyCode: af.BACKSPACE, action: tk(wx, e, !1)}, {
                                keyCode: af.DELETE,
                                action: tk(wx, e, !0)
                            }, {keyCode: af.BACKSPACE, action: tk(v_, e, !1)}, {
                                keyCode: af.DELETE,
                                action: tk(v_, e, !0)
                            }], n).filter((t => e.selection.isEditable())).each((t => {
                                n.preventDefault(), cN(e, o).isDefaultPrevented() || (t(), dN(e, o))
                            }))
                        })(e, t, o)
                    })), e.on("keyup", (t => {
                        t.isDefaultPrevented() || ((e, t, n) => {
                            nk([{keyCode: af.BACKSPACE, action: tk(Fx, e)}, {
                                keyCode: af.DELETE,
                                action: tk(Fx, e)
                            }, ...fN ? [{keyCode: af.BACKSPACE, altKey: !0, action: tk(C_, e)}, {
                                keyCode: af.DELETE,
                                altKey: !0,
                                action: tk(C_, e)
                            }, ...n ? [{keyCode: gN ? 224 : 91, action: tk(C_, e)}] : []] : [{
                                keyCode: af.BACKSPACE,
                                ctrlKey: !0,
                                action: tk(C_, e)
                            }, {keyCode: af.DELETE, ctrlKey: !0, action: tk(C_, e)}]], t)
                        })(e, t, n), n = !1
                    }))
                })(e, t), (e => {
                    let t = I.none();
                    e.on("keydown", (n => {
                        n.keyCode === af.ENTER && (nR && (e => {
                            if (!e.collapsed) return !1;
                            const t = e.startContainer;
                            if (er(t)) {
                                const n = /^[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uD7B0-\uD7FF]$/,
                                    o = t.data.charAt(e.startOffset - 1);
                                return n.test(o)
                            }
                            return !1
                        })(e.selection.getRng()) ? (e => {
                            t = I.some(e.selection.getBookmark()), e.undoManager.add()
                        })(e) : oR(e, n))
                    })), e.on("keyup", (n => {
                        n.keyCode === af.ENTER && t.each((() => ((e, n) => {
                            e.undoManager.undo(), t.fold(_, (t => e.selection.moveToBookmark(t))), oR(e, n), t = I.none()
                        })(e, n)))
                    }))
                })(e), (e => {
                    e.on("keydown", (t => {
                        t.isDefaultPrevented() || ((e, t) => {
                            ok([{keyCode: af.SPACEBAR, action: tk(mR, e)}, {
                                keyCode: af.SPACEBAR,
                                action: tk(fR, e)
                            }], t).each((n => {
                                t.preventDefault(), cN(e, "insertText", {data: " "}).isDefaultPrevented() || (n(), dN(e, "insertText", {data: " "}))
                            }))
                        })(e, t)
                    }))
                })(e), (e => {
                    e.on("input", (t => {
                        t.isComposing || (e => {
                            const t = yn(e.getBody());
                            e.selection.isCollapsed() && ih(t, Vi.fromRangeStart(e.selection.getRng()), e.schema).each((t => {
                                e.selection.setRng(t.toRange())
                            }))
                        })(e)
                    }))
                })(e), (e => {
                    e.on("keydown", (t => {
                        t.isDefaultPrevented() || ((e, t) => {
                            nk([...gR(e)], t).each((e => {
                                t.preventDefault()
                            }))
                        })(e, t)
                    }))
                })(e), ((e, t) => {
                    e.on("keydown", (n => {
                        n.isDefaultPrevented() || ((e, t, n) => {
                            const o = At.os.isMacOS() || At.os.isiOS();
                            nk([{keyCode: af.END, action: tk(Y_, e, !0)}, {
                                keyCode: af.HOME,
                                action: tk(Y_, e, !1)
                            }, ...o ? [] : [{
                                keyCode: af.HOME,
                                action: tk(G_, e, !1),
                                ctrlKey: !0,
                                shiftKey: !0
                            }, {keyCode: af.END, action: tk(G_, e, !0), ctrlKey: !0, shiftKey: !0}], {
                                keyCode: af.END,
                                action: tk(ak, e, !0)
                            }, {keyCode: af.HOME, action: tk(ak, e, !1)}, {
                                keyCode: af.END,
                                action: tk(a_, e, !0, t)
                            }, {keyCode: af.HOME, action: tk(a_, e, !1, t)}], n).each((e => {
                                n.preventDefault()
                            }))
                        })(e, t, n)
                    }))
                })(e, t), ((e, t) => {
                    if (rR.os.isMacOS()) return;
                    const n = $a(!1);
                    e.on("keydown", (t => {
                        aR(t) && iR(n, e, !0)
                    })), e.on("keyup", (o => {
                        o.isDefaultPrevented() || ((e, t, n) => {
                            nk([{keyCode: af.PAGE_UP, action: tk(a_, e, !1, t)}, {
                                keyCode: af.PAGE_DOWN,
                                action: tk(a_, e, !0, t)
                            }], n)
                        })(e, t, o), aR(o) && n.get() && (iR(n, e, !1), e.nodeChanged())
                    }))
                })(e, t), t
            }
        };

    class hR {
        constructor(e) {
            let t;
            this.lastPath = [], this.editor = e;
            const n = this;
            "onselectionchange" in e.getDoc() || e.on("NodeChange click mouseup keyup focus", (n => {
                const o = e.selection.getRng(), r = {
                    startContainer: o.startContainer,
                    startOffset: o.startOffset,
                    endContainer: o.endContainer,
                    endOffset: o.endOffset
                };
                "nodechange" !== n.type && Af(r, t) || e.dispatch("SelectionChange"), t = r
            })), e.on("contextmenu", (() => {
                e.dispatch("SelectionChange")
            })), e.on("SelectionChange", (() => {
                const t = e.selection.getStart(!0);
                t && am(e) && !n.isSameElementPath(t) && e.dom.isChildOf(t, e.getBody()) && e.nodeChanged({selectionChange: !0})
            })), e.on("mouseup", (t => {
                !t.isDefaultPrevented() && am(e) && ("IMG" === e.selection.getNode().nodeName ? vg.setEditorTimeout(e, (() => {
                    e.nodeChanged()
                })) : e.nodeChanged())
            }))
        }

        nodeChanged(e = {}) {
            const t = this.editor.selection;
            let n;
            if (this.editor.initialized && t && !Od(this.editor) && !this.editor.mode.isReadOnly()) {
                const o = this.editor.getBody();
                n = t.getStart(!0) || o, n.ownerDocument === this.editor.getDoc() && this.editor.dom.isChildOf(n, o) || (n = o);
                const r = [];
                this.editor.dom.getParent(n, (e => e === o || (r.push(e), !1))), this.editor.dispatch("NodeChange", {
                    ...e,
                    element: n,
                    parents: r
                })
            }
        }

        isSameElementPath(e) {
            let t;
            const n = this.editor, o = oe(n.dom.getParents(e, M, n.getBody()));
            if (o.length === this.lastPath.length) {
                for (t = o.length; t >= 0 && o[t] === this.lastPath[t]; t--) ;
                if (-1 === t) return this.lastPath = o, !0
            }
            return this.lastPath = o, !1
        }
    }

    const bR = ui("image"), vR = ui("event"), yR = e => t => {
        t[vR] = e
    }, CR = yR(0), wR = yR(2), xR = yR(1), ER = (0, e => {
        const t = e;
        return I.from(t[vR]).exists((e => 0 === e))
    });
    const _R = ui("mode"), kR = e => t => {
            t[_R] = e
        }, SR = (e, t) => kR(t)(e), NR = kR(0), RR = kR(2), AR = kR(1), TR = e => t => {
            const n = t;
            return I.from(n[_R]).exists((t => t === e))
        }, OR = TR(0), BR = TR(1), PR = ["none", "copy", "link", "move"],
        DR = ["none", "copy", "copyLink", "copyMove", "link", "linkMove", "move", "all", "uninitialized"], LR = () => {
            const e = new window.DataTransfer;
            let t = "move", n = "all";
            const o = {
                get dropEffect() {
                    return t
                }, set dropEffect(e) {
                    H(PR, e) && (t = e)
                }, get effectAllowed() {
                    return n
                }, set effectAllowed(e) {
                    ER(o) && H(DR, e) && (n = e)
                }, get items() {
                    return ((e, t) => ({
                        ...t, get length() {
                            return t.length
                        }, add: (n, o) => {
                            if (OR(e)) {
                                if (!m(n)) return t.add(n);
                                if (!v(o)) return t.add(n, o)
                            }
                            return null
                        }, remove: n => {
                            OR(e) && t.remove(n)
                        }, clear: () => {
                            OR(e) && t.clear()
                        }
                    }))(o, e.items)
                }, get files() {
                    return BR(o) ? Object.freeze({length: 0, item: e => null}) : e.files
                }, get types() {
                    return e.types
                }, setDragImage: (t, n, r) => {
                    var s;
                    OR(o) && (s = {image: t, x: n, y: r}, o[bR] = s, e.setDragImage(t, n, r))
                }, getData: t => BR(o) ? "" : e.getData(t), setData: (t, n) => {
                    OR(o) && e.setData(t, n)
                }, clearData: t => {
                    OR(o) && e.clearData(t)
                }
            };
            return NR(o), o
        }, MR = (e, t) => e.setData("text/html", t), IR = "x-tinymce/html", FR = N(IR), UR = "\x3c!-- " + IR + " --\x3e",
        zR = e => UR + e, jR = e => -1 !== e.indexOf(UR), HR = "%MCEPASTEBIN%", $R = e => e.dom.get("mcepastebin"),
        qR = e => C(e) && "mcepastebin" === e.id, VR = e => e === HR, WR = (e, t) => (Pt.each(t, (t => {
            e = u(t, RegExp) ? e.replace(t, "") : e.replace(t[0], t[1])
        })), e),
        KR = e => WR(e, [/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi, /<!--StartFragment-->|<!--EndFragment-->/g, [/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g, (e, t, n) => t || n ? br : " "], /<br class="Apple-interchange-newline">/g, /<br>$/i]),
        YR = (e, t) => ({content: e, cancelled: t}), GR = (e, t) => (e.insertContent(t, {merge: tc(e), paste: !0}), !0),
        XR = e => /^https?:\/\/[\w\-\/+=.,!;:&%@^~(){}?#]+$/i.test(e),
        QR = (e, t, n) => !(e.selection.isCollapsed() || !XR(t)) && ((e, t, n) => (e.undoManager.extra((() => {
            n(e, t)
        }), (() => {
            e.execCommand("mceInsertLink", !1, t)
        })), !0))(e, t, n),
        JR = (e, t, n) => !!((e, t) => XR(t) && $(pc(e), (e => $e(t.toLowerCase(), `.${e.toLowerCase()}`))))(e, t) && ((e, t, n) => (e.undoManager.extra((() => {
            n(e, t)
        }), (() => {
            e.insertContent('<img src="' + t + '">')
        })), !0))(e, t, n), ZR = (e => {
            let t = 0;
            return () => "mceclip" + t++
        })(), eA = e => {
            const t = LR();
            return MR(t, e), RR(t), t
        }, tA = (e, t, n, o, r) => {
            const s = ((e, t, n) => ((e, t, n) => {
                const o = ((e, t, n) => e.dispatch("PastePreProcess", {content: t, internal: n}))(e, t, n), r = ((e, t) => {
                    const n = bC({sanitize: fc(e), sandbox_iframes: Cc(e)}, e.schema);
                    n.addNodeFilter("meta", (e => {
                        Pt.each(e, (e => {
                            e.remove()
                        }))
                    }));
                    const o = n.parse(t, {forced_root_block: !1, isRootContent: !0});
                    return up({validate: !0}, e.schema).serialize(o)
                })(e, o.content);
                return e.hasEventListeners("PastePostProcess") && !o.isDefaultPrevented() ? ((e, t, n) => {
                    const o = e.dom.create("div", {style: "display:none"}, t),
                        r = ((e, t, n) => e.dispatch("PastePostProcess", {node: t, internal: n}))(e, o, n);
                    return YR(r.node.innerHTML, r.isDefaultPrevented())
                })(e, r, n) : YR(r, o.isDefaultPrevented())
            })(e, t, n))(e, t, n);
            if (!s.cancelled) {
                const t = s.content, n = () => ((e, t, n) => {
                    n || !nc(e) ? GR(e, t) : ((e, t) => {
                        Pt.each([QR, JR, GR], (n => !n(e, t, GR)))
                    })(e, t)
                })(e, t, o);
                r ? cN(e, "insertFromPaste", {dataTransfer: eA(t)}).isDefaultPrevented() || (n(), dN(e, "insertFromPaste")) : n()
            }
        }, nA = (e, t, n, o) => {
            const r = n || jR(t);
            tA(e, (e => e.replace(UR, ""))(t), r, !1, o)
        }, oA = (e, t, n) => {
            const o = e.dom.encode(t).replace(/\r\n/g, "\n"), r = ((e, t, n) => {
                const o = e.split(/\n\n/), r = ((e, t) => {
                    let n = "<" + e;
                    const o = Ce(t, ((e, t) => t + '="' + ea.encodeAllRaw(e) + '"'));
                    return o.length && (n += " " + o.join(" ")), n + ">"
                })(t, n), s = "</" + t + ">", a = q(o, (e => e.split(/\n/).join("<br />")));
                return 1 === a.length ? a[0] : q(a, (e => r + e + s)).join("")
            })(ls(o, rc(e)), Il(e), Fl(e));
            tA(e, r, !1, !0, n)
        }, rA = e => {
            const t = {};
            if (e && e.types) for (let n = 0; n < e.types.length; n++) {
                const o = e.types[n];
                try {
                    t[o] = e.getData(o)
                } catch (e) {
                    t[o] = ""
                }
            }
            return t
        }, sA = (e, t) => t in e && e[t].length > 0, aA = e => sA(e, "text/html") || sA(e, "text/plain"),
        iA = (e, t, n) => {
            const o = "paste" === t.type ? t.clipboardData : t.dataTransfer;
            var r;
            if (Gd(e) && o) {
                const s = ((e, t) => {
                    const n = t.items ? te(ce(t.items), (e => "file" === e.kind ? [e.getAsFile()] : [])) : [],
                        o = t.files ? ce(t.files) : [];
                    return Y(n.length > 0 ? n : o, (e => {
                        const t = pc(e);
                        return e => He(e.type, "image/") && $(t, (t => (e => {
                            const t = e.toLowerCase(), n = {
                                jpg: "jpeg",
                                jpe: "jpeg",
                                jfi: "jpeg",
                                jif: "jpeg",
                                jfif: "jpeg",
                                pjpeg: "jpeg",
                                pjp: "jpeg",
                                svg: "svg+xml"
                            };
                            return Pt.hasOwn(n, t) ? "image/" + n[t] : "image/" + t
                        })(t) === e.type))
                    })(e))
                })(e, o);
                if (s.length > 0) return t.preventDefault(), (r = s, Promise.all(q(r, (e => Gv(e).then((t => ({
                    file: e,
                    uri: t
                }))))))).then((t => {
                    n && e.selection.setRng(n), V(t, (t => {
                        ((e, t) => {
                            Kv(t.uri).each((({data: n, type: o, base64Encoded: r}) => {
                                const s = r ? n : btoa(n), a = t.file, i = e.editorUpload.blobCache,
                                    l = i.getByData(s, o), d = null != l ? l : ((e, t, n, o) => {
                                        const r = ZR(), s = Vl(e) && C(n.name), a = s ? ((e, t) => {
                                            const n = t.match(/([\s\S]+?)(?:\.[a-z0-9.]+)$/i);
                                            return C(n) ? e.dom.encode(n[1]) : void 0
                                        })(e, n.name) : r, i = s ? n.name : void 0, l = t.create(r, n, o, a, i);
                                        return t.add(l), l
                                    })(e, i, a, s);
                                nA(e, `<img src="${d.blobUri()}">`, !1, !0)
                            }))
                        })(e, t)
                    }))
                })), !0
            }
            return !1
        }, lA = (e, t, n, o, r) => {
            let s = KR(n);
            const a = sA(t, FR()) || jR(n),
                i = !a && (e => !/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(e))(s),
                l = XR(s);
            (VR(s) || !s.length || i && !l) && (o = !0), (o || l) && (s = sA(t, "text/plain") && i ? t["text/plain"] : (e => {
                const t = ua(), n = bC({}, t);
                let o = "";
                const r = t.getVoidElements(),
                    s = Pt.makeMap("script noscript style textarea video audio iframe object", " "),
                    a = t.getBlockElements(), i = e => {
                        const n = e.name, l = e;
                        if ("br" !== n) {
                            if ("wbr" !== n) if (r[n] && (o += " "), s[n]) o += " "; else {
                                if (3 === e.type && (o += e.value), !(e.name in t.getVoidElements())) {
                                    let t = e.firstChild;
                                    if (t) do {
                                        i(t)
                                    } while (t = t.next)
                                }
                                a[n] && l.next && (o += "\n", "p" === n && (o += "\n"))
                            }
                        } else o += "\n"
                    };
                return e = WR(e, [/<!\[[^\]]+\]>/g]), i(n.parse(e)), o
            })(s)), VR(s) || (o ? oA(e, s, r) : nA(e, s, a, r))
        }, dA = (e, t, n) => {
            ((e, t, n) => {
                let o;
                e.on("keydown", (e => {
                    (e => af.metaKeyPressed(e) && 86 === e.keyCode || e.shiftKey && 45 === e.keyCode)(e) && !e.isDefaultPrevented() && (o = e.shiftKey && 86 === e.keyCode)
                })), e.on("paste", (r => {
                    if (r.isDefaultPrevented() || (e => {
                        var t, n;
                        return At.os.isAndroid() && 0 === (null === (n = null === (t = e.clipboardData) || void 0 === t ? void 0 : t.items) || void 0 === n ? void 0 : n.length)
                    })(r)) return;
                    const s = "text" === n.get() || o;
                    o = !1;
                    const a = rA(r.clipboardData);
                    !aA(a) && iA(e, r, t.getLastRng() || e.selection.getRng()) || (sA(a, "text/html") ? (r.preventDefault(), lA(e, a, a["text/html"], s, !0)) : sA(a, "text/plain") && sA(a, "text/uri-list") ? (r.preventDefault(), lA(e, a, a["text/plain"], s, !0)) : (t.create(), vg.setEditorTimeout(e, (() => {
                        const n = t.getHtml();
                        t.remove(), lA(e, a, n, s, !1)
                    }), 0)))
                }))
            })(e, t, n), (e => {
                const t = e => He(e, "webkit-fake-url"), n = e => He(e, "data:");
                e.parser.addNodeFilter("img", ((o, r, s) => {
                    if (!Gd(e) && (e => {
                        var t;
                        return !0 === (null === (t = e.data) || void 0 === t ? void 0 : t.paste)
                    })(s)) for (const r of o) {
                        const o = r.attr("src");
                        m(o) && !r.attr("data-mce-object") && o !== At.transparentSrc && (t(o) || !sc(e) && n(o)) && r.remove()
                    }
                }))
            })(e)
        }, cA = (e, t, n, o) => {
            ((e, t, n) => {
                if (!e) return !1;
                try {
                    return e.clearData(), e.setData("text/html", t), e.setData("text/plain", n), e.setData(FR(), t), !0
                } catch (e) {
                    return !1
                }
            })(e.clipboardData, t.html, t.text) ? (e.preventDefault(), o()) : n(t.html, o)
        }, uA = e => (t, n) => {
            const {dom: o, selection: r} = e, s = o.create("div", {contenteditable: "false", "data-mce-bogus": "all"}),
                a = o.create("div", {contenteditable: "true"}, t);
            o.setStyles(s, {
                position: "fixed",
                top: "0",
                left: "-3000px",
                width: "1000px",
                overflow: "hidden"
            }), s.appendChild(a), o.add(e.getBody(), s);
            const i = r.getRng();
            a.focus();
            const l = o.createRng();
            l.selectNodeContents(a), r.setRng(l), vg.setEditorTimeout(e, (() => {
                r.setRng(i), o.remove(s), n()
            }), 0)
        }, mA = e => ({html: zR(e.selection.getContent({contextual: !0})), text: e.selection.getContent({format: "text"})}),
        fA = e => !e.selection.isCollapsed() || (e => !!e.dom.getParent(e.selection.getStart(), "td[data-mce-selected],th[data-mce-selected]", e.getBody()))(e),
        gA = (e, t) => {
            var n, o;
            return Uf.getCaretRangeFromPoint(null !== (n = t.clientX) && void 0 !== n ? n : 0, null !== (o = t.clientY) && void 0 !== o ? o : 0, e.getDoc())
        }, pA = (e, t) => {
            e.focus(), t && e.selection.setRng(t)
        }, hA = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
        bA = e => Pt.trim(e).replace(hA, Ca).toLowerCase(), vA = (e, t, n) => {
            const o = Zd(e);
            if (n || "all" === o || !ec(e)) return t;
            const r = o ? o.split(/[, ]/) : [];
            if (r && "none" !== o) {
                const n = e.dom, o = e.selection.getNode();
                t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, ((e, t, s, a) => {
                    const i = n.parseStyle(n.decode(s)), l = {};
                    for (let e = 0; e < r.length; e++) {
                        const t = i[r[e]];
                        let s = t, a = n.getStyle(o, r[e], !0);
                        /color/.test(r[e]) && (s = bA(s), a = bA(a)), a !== s && (l[r[e]] = t)
                    }
                    const d = n.serializeStyle(l, "span");
                    return d ? t + ' style="' + d + '"' + a : t + a
                }))
            } else t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, "$1$3");
            return t = t.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi, ((e, t, n, o) => t + ' style="' + n + '"' + o)), t
        }, yA = e => {
            const t = $a(!1), n = $a(oc(e) ? "text" : "html"), o = (e => {
                const t = $a(null);
                return {
                    create: () => ((e, t) => {
                        const {dom: n, selection: o} = e, r = e.getBody();
                        t.set(o.getRng());
                        const s = n.add(e.getBody(), "div", {
                            id: "mcepastebin",
                            class: "mce-pastebin",
                            contentEditable: !0,
                            "data-mce-bogus": "all",
                            style: "position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"
                        }, HR);
                        At.browser.isFirefox() && n.setStyle(s, "left", "rtl" === n.getStyle(r, "direction", !0) ? 65535 : -65535), n.bind(s, "beforedeactivate focusin focusout", (e => {
                            e.stopPropagation()
                        })), s.focus(), o.select(s, !0)
                    })(e, t), remove: () => ((e, t) => {
                        const n = e.dom;
                        if ($R(e)) {
                            let o;
                            const r = t.get();
                            for (; o = $R(e);) n.remove(o), n.unbind(o);
                            r && e.selection.setRng(r)
                        }
                        t.set(null)
                    })(e, t), getEl: () => $R(e), getHtml: () => (e => {
                        const t = e.dom, n = (e, n) => {
                            e.appendChild(n), t.remove(n, !0)
                        }, [o, ...r] = Y(e.getBody().childNodes, qR);
                        V(r, (e => {
                            n(o, e)
                        }));
                        const s = t.select("div[id=mcepastebin]", o);
                        for (let e = s.length - 1; e >= 0; e--) {
                            const r = t.create("div");
                            o.insertBefore(r, s[e]), n(r, s[e])
                        }
                        return o ? o.innerHTML : ""
                    })(e), getLastRng: t.get
                }
            })(e);
            (e => {
                (At.browser.isChromium() || At.browser.isSafari()) && ((e, t) => {
                    e.on("PastePreProcess", (n => {
                        n.content = t(e, n.content, n.internal)
                    }))
                })(e, vA)
            })(e), ((e, t) => {
                e.addCommand("mceTogglePlainTextPaste", (() => {
                    ((e, t) => {
                        "text" === t.get() ? (t.set("html"), sf(e, !1)) : (t.set("text"), sf(e, !0)), e.focus()
                    })(e, t)
                })), e.addCommand("mceInsertClipboardContent", ((t, n) => {
                    n.html && nA(e, n.html, n.internal, !1), n.text && oA(e, n.text, !1)
                }))
            })(e, n), (e => {
                const t = t => n => {
                    t(e, n)
                }, n = Xd(e);
                w(n) && e.on("PastePreProcess", t(n));
                const o = Qd(e);
                w(o) && e.on("PastePostProcess", t(o))
            })(e), e.on("PreInit", (() => {
                (e => {
                    e.on("cut", (e => t => {
                        !t.isDefaultPrevented() && fA(e) && e.selection.isEditable() && cA(t, mA(e), uA(e), (() => {
                            if (At.browser.isChromium() || At.browser.isFirefox()) {
                                const t = e.selection.getRng();
                                vg.setEditorTimeout(e, (() => {
                                    e.selection.setRng(t), e.execCommand("Delete")
                                }), 0)
                            } else e.execCommand("Delete")
                        }))
                    })(e)), e.on("copy", (e => t => {
                        !t.isDefaultPrevented() && fA(e) && cA(t, mA(e), uA(e), _)
                    })(e))
                })(e), ((e, t) => {
                    Yd(e) && e.on("dragend dragover draggesture dragdrop drop drag", (e => {
                        e.preventDefault(), e.stopPropagation()
                    })), Gd(e) || e.on("drop", (e => {
                        const t = e.dataTransfer;
                        t && (e => $(e.files, (e => /^image\//.test(e.type))))(t) && e.preventDefault()
                    })), e.on("drop", (n => {
                        if (n.isDefaultPrevented()) return;
                        const o = gA(e, n);
                        if (y(o)) return;
                        const r = rA(n.dataTransfer), s = sA(r, FR());
                        if ((!aA(r) || (e => {
                            const t = e["text/plain"];
                            return !!t && 0 === t.indexOf("file://")
                        })(r)) && iA(e, n, o)) return;
                        const a = r[FR()], i = a || r["text/html"] || r["text/plain"], l = ((e, t, n, o) => {
                            const r = e.getParent(n, (e => Ts(t, e)));
                            if (!h(e.getParent(n, "summary"))) return !0;
                            if (r && Ee(o, "text/html")) {
                                const e = (new DOMParser).parseFromString(o["text/html"], "text/html").body;
                                return !h(e.querySelector(r.nodeName.toLowerCase()))
                            }
                            return !1
                        })(e.dom, e.schema, o.startContainer, r), d = t.get();
                        d && !l || i && (n.preventDefault(), vg.setEditorTimeout(e, (() => {
                            e.undoManager.transact((() => {
                                (a || d && l) && e.execCommand("Delete"), pA(e, o);
                                const t = KR(i);
                                r["text/html"] ? nA(e, t, s, !0) : oA(e, t, !0)
                            }))
                        })))
                    })), e.on("dragstart", (e => {
                        t.set(!0)
                    })), e.on("dragover dragend", (n => {
                        Gd(e) && !t.get() && (n.preventDefault(), pA(e, gA(e, n))), "dragend" === n.type && t.set(!1)
                    })), (e => {
                        e.on("input", (t => {
                            const n = e => h(e.querySelector("summary"));
                            if ("deleteByDrag" === t.inputType) {
                                const t = Y(e.dom.select("details"), n);
                                V(t, (t => {
                                    ar(t.firstChild) && t.firstChild.remove();
                                    const n = e.dom.create("summary");
                                    n.appendChild(Tr().dom), t.prepend(n)
                                }))
                            }
                        }))
                    })(e)
                })(e, t), dA(e, o, n)
            }))
        }, CA = ar, wA = er, xA = e => dr(e.dom), EA = e => t => _n(yn(e), t), _A = (e, t) => Jn(yn(e), xA, EA(t)),
        kA = (e, t, n) => {
            const o = new jo(e, t), r = n ? o.next.bind(o) : o.prev.bind(o);
            let s = e;
            for (let t = n ? e : r(); t && !CA(t); t = r()) ts(t) && (s = t);
            return s
        }, SA = e => {
            const t = ((e, t, n) => {
                const o = Vi.fromRangeStart(e).getNode(),
                    r = ((e, t, n) => Jn(yn(e), (e => (e => lr(e.dom))(e) || n.isBlock(Ht(e))), EA(t)).getOr(yn(t)).dom)(o, t, n),
                    s = kA(o, r, !1), a = kA(o, r, !0), i = document.createRange();
                return _A(s, r).fold((() => {
                    wA(s) ? i.setStart(s, 0) : i.setStartBefore(s)
                }), (e => i.setStartBefore(e.dom))), _A(a, r).fold((() => {
                    wA(a) ? i.setEnd(a, a.data.length) : i.setEndAfter(a)
                }), (e => i.setEndAfter(e.dom))), i
            })(e.selection.getRng(), e.getBody(), e.schema);
            e.selection.setRng(Eb(t))
        };
    var NA;
    !function (e) {
        e.Before = "before", e.After = "after"
    }(NA || (NA = {}));
    const RA = (e, t) => Math.abs(e.left - t), AA = (e, t) => Math.abs(e.right - t),
        TA = (e, t) => (e => X(e, ((e, t) => e.fold((() => I.some(t)), (e => {
            const n = Math.min(t.left, e.left), o = Math.min(t.top, e.top), r = Math.max(t.right, e.right),
                s = Math.max(t.bottom, e.bottom);
            return I.some({top: o, right: r, bottom: s, left: n, width: r - n, height: s - o})
        }))), I.none()))(Y(e, (e => {
            return (n = t) >= (o = e).top && n <= o.bottom;
            var n, o
        }))).fold((() => [[], e]), (t => {
            const {pass: n, fail: o} = K(e, (e => ((e, t) => {
                const n = ((e, t) => Math.max(0, Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top)))(e, t) / Math.min(e.height, t.height);
                return ((e, t) => e.top < t.bottom && e.bottom > t.top)(e, t) && n > .5
            })(e, t)));
            return [n, o]
        })), OA = (e, t, n) => t > e.left && t < e.right ? 0 : Math.min(Math.abs(e.left - t), Math.abs(e.right - t)),
        BA = (e, t, n, o) => {
            const r = e => ts(e.node) ? I.some(e) : qo(e.node) ? BA(ce(e.node.childNodes), t, n, !1) : I.none(),
                s = (e, s) => {
                    const a = ae(e, ((e, o) => s(e, t, n) - s(o, t, n)));
                    return ue(a, r).map((e => o && !er(e.node) && a.length > 1 ? ((e, o, s) => r(o).filter((o => Math.abs(s(e, t, n) - s(o, t, n)) < 2 && er(o.node))))(e, a[1], s).getOr(e) : e))
                }, [a, i] = TA(IE(e), n), {pass: l, fail: d} = K(i, (e => e.top < n));
            return s(a, OA).orThunk((() => s(d, Ei))).orThunk((() => s(l, Ei)))
        }, PA = (e, t, n) => ((e, t, n) => {
            const o = yn(e), r = Nn(o), s = Cn(r, t, n).filter((e => kn(o, e))).getOr(o);
            return ((e, t, n, o) => {
                const r = (t, s) => {
                    const a = Y(t.dom.childNodes, O((e => qo(e) && e.classList.contains("mce-drag-container"))));
                    return s.fold((() => BA(a, n, o, !0)), (e => {
                        const t = Y(a, (t => t !== e.dom));
                        return BA(t, n, o, !0)
                    })).orThunk((() => (_n(t, e) ? I.none() : Tn(t)).bind((e => r(e, I.some(t))))))
                };
                return r(t, I.none())
            })(o, s, t, n)
        })(e, t, n).filter((e => Mc(e.node))).map((e => ((e, t) => ({
            node: e.node,
            position: RA(e, t) < AA(e, t) ? NA.Before : NA.After
        }))(e, t))), DA = e => {
            var t, n;
            const o = e.getBoundingClientRect(), r = e.ownerDocument, s = r.documentElement, a = r.defaultView;
            return {
                top: o.top + (null !== (t = null == a ? void 0 : a.scrollY) && void 0 !== t ? t : 0) - s.clientTop,
                left: o.left + (null !== (n = null == a ? void 0 : a.scrollX) && void 0 !== n ? n : 0) - s.clientLeft
            }
        }, LA = e => ({target: e, srcElement: e}), MA = (e, t, n, o) => {
            const r = ((e, t) => {
                const n = (e => {
                    const t = LR(), n = (e => {
                        const t = e;
                        return I.from(t[_R])
                    })(e);
                    return RR(e), CR(t), t.dropEffect = e.dropEffect, t.effectAllowed = e.effectAllowed, (e => {
                        const t = e;
                        return I.from(t[bR])
                    })(e).each((e => t.setDragImage(e.image, e.x, e.y))), V(e.types, (n => {
                        "Files" !== n && t.setData(n, e.getData(n))
                    })), V(e.files, (e => t.items.add(e))), (e => {
                        const t = e;
                        return I.from(t[vR])
                    })(e).each((e => {
                        ((e, t) => {
                            yR(t)(e)
                        })(t, e)
                    })), n.each((n => {
                        SR(e, n), SR(t, n)
                    })), t
                })(e);
                return "dragstart" === t ? (CR(n), NR(n)) : "drop" === t ? (wR(n), RR(n)) : (xR(n), AR(n)), n
            })(n, e);
            return v(o) ? ((e, t, n) => {
                const o = B("Function not supported on simulated event.");
                return {
                    bubbles: !0,
                    cancelBubble: !1,
                    cancelable: !0,
                    composed: !1,
                    currentTarget: null,
                    defaultPrevented: !1,
                    eventPhase: 0,
                    isTrusted: !0,
                    returnValue: !1,
                    timeStamp: 0,
                    type: e,
                    composedPath: o,
                    initEvent: o,
                    preventDefault: _,
                    stopImmediatePropagation: _,
                    stopPropagation: _,
                    AT_TARGET: window.Event.AT_TARGET,
                    BUBBLING_PHASE: window.Event.BUBBLING_PHASE,
                    CAPTURING_PHASE: window.Event.CAPTURING_PHASE,
                    NONE: window.Event.NONE,
                    altKey: !1,
                    button: 0,
                    buttons: 0,
                    clientX: 0,
                    clientY: 0,
                    ctrlKey: !1,
                    metaKey: !1,
                    movementX: 0,
                    movementY: 0,
                    offsetX: 0,
                    offsetY: 0,
                    pageX: 0,
                    pageY: 0,
                    relatedTarget: null,
                    screenX: 0,
                    screenY: 0,
                    shiftKey: !1,
                    x: 0,
                    y: 0,
                    detail: 0,
                    view: null,
                    which: 0,
                    initUIEvent: o,
                    initMouseEvent: o,
                    getModifierState: o,
                    dataTransfer: n, ...LA(t)
                }
            })(e, t, r) : ((e, t, n, o) => ({...t, dataTransfer: o, type: e, ...LA(n)}))(e, o, t, r)
        }, IA = dr, FA = ((...e) => t => {
            for (let n = 0; n < e.length; n++) if (e[n](t)) return !0;
            return !1
        })(IA, lr), UA = (e, t, n, o) => {
            const r = e.dom, s = t.cloneNode(!0);
            r.setStyles(s, {width: n, height: o}), r.setAttrib(s, "data-mce-selected", null);
            const a = r.create("div", {
                class: "mce-drag-container",
                "data-mce-bogus": "all",
                unselectable: "on",
                contenteditable: "false"
            });
            return r.setStyles(a, {
                position: "absolute",
                opacity: .5,
                overflow: "hidden",
                border: 0,
                padding: 0,
                margin: 0,
                width: n,
                height: o
            }), r.setStyles(s, {margin: 0, boxSizing: "border-box"}), a.appendChild(s), a
        }, zA = (e, t) => n => () => {
            const o = "left" === e ? n.scrollX : n.scrollY;
            n.scroll({[e]: o + t, behavior: "smooth"})
        }, jA = zA("left", -32), HA = zA("left", 32), $A = zA("top", -32), qA = zA("top", 32), VA = e => {
            e && e.parentNode && e.parentNode.removeChild(e)
        }, WA = (e, t, n, o, r) => {
            "dragstart" === t && MR(o, e.dom.getOuterHTML(n));
            const s = MA(t, n, o, r);
            return e.dispatch(t, s)
        }, KA = (e, t) => {
            const n = Qa(((e, n) => ((e, t, n) => {
                e._selectionOverrides.hideFakeCaret(), PA(e.getBody(), t, n).fold((() => e.selection.placeCaretAt(t, n)), (o => {
                    const r = e._selectionOverrides.showCaret(1, o.node, o.position === NA.Before, !1);
                    r ? e.selection.setRng(r) : e.selection.placeCaretAt(t, n)
                }))
            })(t, e, n)), 0);
            t.on("remove", n.cancel);
            const o = e;
            return r => e.on((e => {
                const s = Math.max(Math.abs(r.screenX - e.screenX), Math.abs(r.screenY - e.screenY));
                if (!e.dragging && s > 10) {
                    const n = WA(t, "dragstart", e.element, e.dataTransfer, r);
                    if (C(n.dataTransfer) && (e.dataTransfer = n.dataTransfer), n.isDefaultPrevented()) return;
                    e.dragging = !0, t.focus()
                }
                if (e.dragging) {
                    const s = r.currentTarget === t.getDoc().documentElement,
                        l = ((e, t) => ({pageX: t.pageX - e.relX, pageY: t.pageY + 5}))(e, ((e, t) => {
                            return n = (e => e.inline ? DA(e.getBody()) : {left: 0, top: 0})(e), o = (e => {
                                const t = e.getBody();
                                return e.inline ? {left: t.scrollLeft, top: t.scrollTop} : {left: 0, top: 0}
                            })(e), r = ((e, t) => {
                                if (t.target.ownerDocument !== e.getDoc()) {
                                    const n = DA(e.getContentAreaContainer()), o = (e => {
                                        const t = e.getBody(), n = e.getDoc().documentElement,
                                            o = {left: t.scrollLeft, top: t.scrollTop},
                                            r = {left: t.scrollLeft || n.scrollLeft, top: t.scrollTop || n.scrollTop};
                                        return e.inline ? o : r
                                    })(e);
                                    return {left: t.pageX - n.left + o.left, top: t.pageY - n.top + o.top}
                                }
                                return {left: t.pageX, top: t.pageY}
                            })(e, t), {pageX: r.left - n.left + o.left, pageY: r.top - n.top + o.top};
                            var n, o, r
                        })(t, r));
                    a = e.ghost, i = t.getBody(), a.parentNode !== i && i.appendChild(a), ((e, t, n, o, r, s, a, i, l, d, c, u) => {
                        let m = 0, f = 0;
                        e.style.left = t.pageX + "px", e.style.top = t.pageY + "px", t.pageX + n > r && (m = t.pageX + n - r), t.pageY + o > s && (f = t.pageY + o - s), e.style.width = n - m + "px", e.style.height = o - f + "px";
                        const g = l.clientHeight, p = l.clientWidth, h = a + l.getBoundingClientRect().top,
                            b = i + l.getBoundingClientRect().left;
                        c.on((e => {
                            e.intervalId.clear(), e.dragging && u && (a + 8 >= g ? e.intervalId.set(qA(d)) : a - 8 <= 0 ? e.intervalId.set($A(d)) : i + 8 >= p ? e.intervalId.set(HA(d)) : i - 8 <= 0 ? e.intervalId.set(jA(d)) : h + 16 >= window.innerHeight ? e.intervalId.set(qA(window)) : h - 16 <= 0 ? e.intervalId.set($A(window)) : b + 16 >= window.innerWidth ? e.intervalId.set(HA(window)) : b - 16 <= 0 && e.intervalId.set(jA(window)))
                        }))
                    })(e.ghost, l, e.width, e.height, e.maxX, e.maxY, r.clientY, r.clientX, t.getContentAreaContainer(), t.getWin(), o, s), n.throttle(r.clientX, r.clientY)
                }
                var a, i
            }))
        }, YA = (e, t, n) => {
            e.on((e => {
                e.intervalId.clear(), e.dragging && n.fold((() => WA(t, "dragend", e.element, e.dataTransfer)), (n => WA(t, "dragend", e.element, e.dataTransfer, n)))
            })), GA(e)
        }, GA = e => {
            e.on((e => {
                e.intervalId.clear(), VA(e.ghost)
            })), e.clear()
        }, XA = e => {
            const t = Xa(), n = za.DOM, o = document, r = ((e, t) => n => {
                if ((e => 0 === e.button)(n)) {
                    const o = J(t.dom.getParents(n.target), FA).getOr(null);
                    if (C(o) && ((e, t, n) => IA(n) && n !== t && e.isEditable(n.parentElement))(t.dom, t.getBody(), o)) {
                        const r = t.dom.getPos(o), s = t.getBody(), a = t.getDoc().documentElement;
                        e.set({
                            element: o,
                            dataTransfer: LR(),
                            dragging: !1,
                            screenX: n.screenX,
                            screenY: n.screenY,
                            maxX: (t.inline ? s.scrollWidth : a.offsetWidth) - 2,
                            maxY: (t.inline ? s.scrollHeight : a.offsetHeight) - 2,
                            relX: n.pageX - r.x,
                            relY: n.pageY - r.y,
                            width: o.offsetWidth,
                            height: o.offsetHeight,
                            ghost: UA(t, o, o.offsetWidth, o.offsetHeight),
                            intervalId: Ga(100)
                        })
                    }
                }
            })(t, e), s = KA(t, e), a = ((e, t) => n => {
                e.on((e => {
                    var o;
                    if (e.intervalId.clear(), e.dragging) {
                        if (((e, t, n) => !y(t) && t !== n && !e.dom.isChildOf(t, n) && e.dom.isEditable(t))(t, (e => {
                            const t = e.getSel();
                            if (C(t)) {
                                const e = t.getRangeAt(0).startContainer;
                                return er(e) ? e.parentNode : e
                            }
                            return null
                        })(t.selection), e.element)) {
                            const r = null !== (o = t.getDoc().elementFromPoint(n.clientX, n.clientY)) && void 0 !== o ? o : t.getBody();
                            WA(t, "drop", r, e.dataTransfer, n).isDefaultPrevented() || t.undoManager.transact((() => {
                                ((e, t) => {
                                    const n = e.getParent(t.parentNode, e.isBlock);
                                    VA(t), n && n !== e.getRoot() && e.isEmpty(n) && Or(yn(n))
                                })(t.dom, e.element), (e => {
                                    const t = e.getData("text/html");
                                    return "" === t ? I.none() : I.some(t)
                                })(e.dataTransfer).each((e => t.insertContent(e))), t._selectionOverrides.hideFakeCaret()
                            }))
                        }
                        WA(t, "dragend", t.getBody(), e.dataTransfer, n)
                    }
                })), GA(e)
            })(t, e), i = ((e, t) => n => YA(e, t, I.some(n)))(t, e);
            e.on("mousedown", r), e.on("mousemove", s), e.on("mouseup", a), n.bind(o, "mousemove", s), n.bind(o, "mouseup", i), e.on("remove", (() => {
                n.unbind(o, "mousemove", s), n.unbind(o, "mouseup", i)
            })), e.on("keydown", (n => {
                n.keyCode === af.ESC && YA(t, e, I.none())
            }))
        }, QA = dr, JA = (e, t) => lb(e.getBody(), t), ZA = e => {
            const t = e.selection, n = e.dom, o = e.getBody(), r = Pc(e, o, n.isBlock, (() => Rg(e))),
                s = "sel-" + n.uniqueId(), a = "data-mce-selected";
            let i;
            const l = e => e !== o && (QA(e) || mr(e)) && n.isChildOf(e, o) && n.isEditable(e.parentNode),
                d = (n, o, s, a = !0) => e.dispatch("ShowCaret", {
                    target: o,
                    direction: n,
                    before: s
                }).isDefaultPrevented() ? null : (a && t.scrollIntoView(o, -1 === n), r.show(s, o)),
                c = e => Ur(e) || $r(e) || qr(e), u = e => c(e.startContainer) || c(e.endContainer), m = t => {
                    const o = e.schema.getVoidElements(), r = n.createRng(), s = t.startContainer, a = t.startOffset,
                        i = t.endContainer, l = t.endOffset;
                    return Ee(o, s.nodeName.toLowerCase()) ? 0 === a ? r.setStartBefore(s) : r.setStartAfter(s) : r.setStart(s, a), Ee(o, i.nodeName.toLowerCase()) ? 0 === l ? r.setEndBefore(i) : r.setEndAfter(i) : r.setEnd(i, l), r
                }, f = (r, c) => {
                    if (!r) return null;
                    if (r.collapsed) {
                        if (!u(r)) {
                            const e = c ? 1 : -1, t = au(e, o, r), s = t.getNode(!c);
                            if (C(s)) {
                                if (Mc(s)) return d(e, s, !!c && !t.isAtEnd(), !1);
                                if (Fr(s) && dr(s.nextSibling)) {
                                    const e = n.createRng();
                                    return e.setStart(s, 0), e.setEnd(s, 0), e
                                }
                            }
                            const a = t.getNode(c);
                            if (C(a)) {
                                if (Mc(a)) return d(e, a, !c && !t.isAtEnd(), !1);
                                if (Fr(a) && dr(a.previousSibling)) {
                                    const e = n.createRng();
                                    return e.setStart(a, 1), e.setEnd(a, 1), e
                                }
                            }
                        }
                        return null
                    }
                    let m = r.startContainer, f = r.startOffset;
                    const g = r.endOffset;
                    if (er(m) && 0 === f && QA(m.parentNode) && (m = m.parentNode, f = n.nodeIndex(m), m = m.parentNode), !qo(m)) return null;
                    if (g === f + 1 && m === r.endContainer) {
                        const o = m.childNodes[f];
                        if (l(o)) return (o => {
                            const r = o.cloneNode(!0), l = e.dispatch("ObjectSelected", {target: o, targetClone: r});
                            if (l.isDefaultPrevented()) return null;
                            const d = ((o, r) => {
                                const a = yn(e.getBody()), i = e.getDoc(), l = to(a, "#" + s).getOrThunk((() => {
                                    const e = hn('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>', i);
                                    return Jt(e, "id", s), vo(a, e), e
                                })), d = n.createRng();
                                wo(l), Co(l, [vn(br, i), yn(r), vn(br, i)]), d.setStart(l.dom.firstChild, 1), d.setEnd(l.dom.lastChild, 0), lo(l, {top: n.getPos(o, e.getBody()).y + "px"}), ag(l);
                                const c = t.getSel();
                                return c && (c.removeAllRanges(), c.addRange(d)), d
                            })(o, l.targetClone), c = yn(o);
                            return V(Uo(yn(e.getBody()), `*[${a}]`), (e => {
                                _n(c, e) || on(e, a)
                            })), n.getAttrib(o, a) || o.setAttribute(a, "1"), i = o, p(), d
                        })(o)
                    }
                    return null
                }, g = () => {
                    i && i.removeAttribute(a), to(yn(e.getBody()), "#" + s).each(xo), i = null
                }, p = () => {
                    r.hide()
                };
            return XC(e) || (e.on("click", (t => {
                n.isEditable(t.target) || (t.preventDefault(), e.focus())
            })), e.on("blur NewBlock", g), e.on("ResizeWindow FullscreenStateChanged", r.reposition), e.on("tap", (t => {
                const n = t.target, o = JA(e, n);
                QA(o) ? (t.preventDefault(), Sx(e, o).each(f)) : l(n) && Sx(e, n).each(f)
            }), !0), e.on("mousedown", (r => {
                const s = r.target;
                if (s !== o && "HTML" !== s.nodeName && !n.isChildOf(s, o)) return;
                if (!((e, t, n) => {
                    const o = yn(e.getBody()), r = e.inline ? o : yn(Nn(o).dom.documentElement), s = ((e, t, n, o) => {
                        const r = (e => e.dom.getBoundingClientRect())(t);
                        return {
                            x: n - (e ? r.left + t.dom.clientLeft + Aw(t) : 0),
                            y: o - (e ? r.top + t.dom.clientTop + Rw(t) : 0)
                        }
                    })(e.inline, r, t, n);
                    return ((e, t, n) => {
                        const o = Sw(e), r = Nw(e);
                        return t >= 0 && n >= 0 && t <= o && n <= r
                    })(r, s.x, s.y)
                })(e, r.clientX, r.clientY)) return;
                g(), p();
                const a = JA(e, s);
                QA(a) ? (r.preventDefault(), Sx(e, a).each(f)) : PA(o, r.clientX, r.clientY).each((n => {
                    var o;
                    r.preventDefault(), (o = d(1, n.node, n.position === NA.Before, !1)) && t.setRng(o), Vo(a) ? a.focus() : e.getBody().focus()
                }))
            })), e.on("keypress", (e => {
                af.modifierPressed(e) || QA(t.getNode()) && e.preventDefault()
            })), e.on("GetSelectionRange", (e => {
                let t = e.range;
                if (i) {
                    if (!i.parentNode) return void (i = null);
                    t = t.cloneRange(), t.selectNode(i), e.range = t
                }
            })), e.on("SetSelectionRange", (e => {
                e.range = m(e.range);
                const t = f(e.range, e.forward);
                t && (e.range = t)
            })), e.on("AfterSetSelectionRange", (e => {
                const t = e.range, o = t.startContainer.parentElement;
                var r;
                u(t) || qo(r = o) && "mcepastebin" === r.id || p(), (e => C(e) && n.hasClass(e, "mce-offscreen-selection"))(o) || g()
            })), (e => {
                XA(e), Id(e) && (e => {
                    const t = t => {
                        if (!t.isDefaultPrevented()) {
                            const n = t.dataTransfer;
                            n && (H(n.types, "Files") || n.files.length > 0) && (t.preventDefault(), "drop" === t.type && Lw(e, "Dropped file type is not supported"))
                        }
                    }, n = n => {
                        xg(e, n.target) && t(n)
                    }, o = () => {
                        const o = za.DOM, r = e.dom, s = document, a = e.inline ? e.getBody() : e.getDoc(),
                            i = ["drop", "dragover"];
                        V(i, (e => {
                            o.bind(s, e, n), r.bind(a, e, t)
                        })), e.on("remove", (() => {
                            V(i, (e => {
                                o.unbind(s, e, n), r.unbind(a, e, t)
                            }))
                        }))
                    };
                    e.on("init", (() => {
                        vg.setEditorTimeout(e, o, 0)
                    }))
                })(e)
            })(e), (e => {
                const t = Qa((() => {
                    if (!e.removed && e.getBody().contains(document.activeElement)) {
                        const t = e.selection.getRng();
                        if (t.collapsed) {
                            const n = Nx(e, t, !1);
                            e.selection.setRng(n)
                        }
                    }
                }), 0);
                e.on("focus", (() => {
                    t.throttle()
                })), e.on("blur", (() => {
                    t.cancel()
                }))
            })(e), (e => {
                e.on("init", (() => {
                    e.on("focusin", (t => {
                        const n = t.target;
                        if (mr(n)) {
                            const t = lb(e.getBody(), n), o = dr(t) ? t : n;
                            e.selection.getNode() !== o && Sx(e, o).each((t => e.selection.setRng(t)))
                        }
                    }))
                }))
            })(e)), {
                showCaret: d, showBlockCaretContainer: e => {
                    e.hasAttribute("data-mce-caret") && (Vr(e), t.scrollIntoView(e))
                }, hideFakeCaret: p, destroy: () => {
                    r.destroy(), i = null
                }
            }
        }, eT = (e, t) => {
            let n = t;
            for (let t = e.previousSibling; er(t); t = t.previousSibling) n += t.data.length;
            return n
        }, tT = (e, t, n, o, r) => {
            if (er(n) && (o < 0 || o > n.data.length)) return [];
            const s = r && er(n) ? [eT(n, o)] : [o];
            let a = n;
            for (; a !== t && a.parentNode;) s.push(e.nodeIndex(a, r)), a = a.parentNode;
            return a === t ? s.reverse() : []
        }, nT = (e, t, n, o, r, s, a = !1) => ({start: tT(e, t, n, o, a), end: tT(e, t, r, s, a)}), oT = (e, t) => {
            const n = t.slice(), o = n.pop();
            return x(o) ? X(n, ((e, t) => e.bind((e => I.from(e.childNodes[t])))), I.some(e)).bind((e => er(e) && (o < 0 || o > e.data.length) ? I.none() : I.some({
                node: e,
                offset: o
            }))) : I.none()
        }, rT = (e, t) => oT(e, t.start).bind((({node: n, offset: o}) => oT(e, t.end).map((({node: e, offset: t}) => {
            const r = document.createRange();
            return r.setStart(n, o), r.setEnd(e, t), r
        })))), sT = (e, t, n) => {
            if (t && e.isEmpty(t) && !n(t)) {
                const o = t.parentNode;
                e.remove(t, er(t.firstChild) && ss(t.firstChild.data)), sT(e, o, n)
            }
        }, aT = (e, t, n, o = !0) => {
            const r = t.startContainer.parentNode, s = t.endContainer.parentNode;
            t.deleteContents(), o && !n(t.startContainer) && (er(t.startContainer) && 0 === t.startContainer.data.length && e.remove(t.startContainer), er(t.endContainer) && 0 === t.endContainer.data.length && e.remove(t.endContainer), sT(e, r, n), r !== s && sT(e, s, n))
        }, iT = (e, t) => I.from(e.dom.getParent(t.startContainer, e.dom.isBlock)), lT = (e, t, n) => {
            const o = e.dynamicPatternsLookup({text: n, block: t});
            return {...e, blockPatterns: Cl(o).concat(e.blockPatterns), inlinePatterns: wl(o).concat(e.inlinePatterns)}
        }, dT = (e, t, n, o) => {
            const r = e.createRng();
            return r.setStart(t, 0), r.setEnd(n, o), r.toString()
        }, cT = (e, t, n) => {
            ((e, t, n) => {
                if (er(e) && 0 >= e.length) return I.some(Ak(e, 0));
                {
                    const t = hi(Tk);
                    return I.from(t.forwards(e, 0, Ok(e), n)).map((e => Ak(e.container, 0)))
                }
            })(t, 0, t).each((o => {
                const r = o.container;
                Dk(r, n.start.length, t).each((n => {
                    const o = e.createRng();
                    o.setStart(r, 0), o.setEnd(n.container, n.offset), aT(e, o, (e => e === t))
                }));
                const s = yn(r), a = Cr(s);
                /^\s[^\s]/.test(a) && ((e, t) => {
                    yr.set(e, t)
                })(s, a.slice(1))
            }))
        }, uT = (e, t) => e.create("span", {"data-mce-type": "bookmark", id: t}), mT = (e, t) => {
            const n = e.createRng();
            return n.setStartAfter(t.start), n.setEndBefore(t.end), n
        }, fT = (e, t, n) => {
            const o = rT(e.getRoot(), n).getOrDie("Unable to resolve path range"), r = o.startContainer, s = o.endContainer,
                a = 0 === o.endOffset ? s : s.splitText(o.endOffset),
                i = 0 === o.startOffset ? r : r.splitText(o.startOffset), l = i.parentNode;
            return {
                prefix: t,
                end: a.parentNode.insertBefore(uT(e, t + "-end"), a),
                start: l.insertBefore(uT(e, t + "-start"), i)
            }
        }, gT = (e, t, n) => {
            sT(e, e.get(t.prefix + "-end"), n), sT(e, e.get(t.prefix + "-start"), n)
        }, pT = e => 0 === e.start.length, hT = (e, t, n, o) => {
            const r = t.start;
            var s;
            return Lk(e, o.container, o.offset, (s = r, (e, t) => {
                const n = e.data.substring(0, t), o = n.lastIndexOf(s.charAt(s.length - 1)), r = n.lastIndexOf(s);
                return -1 !== r ? r + s.length : -1 !== o ? o + 1 : -1
            }), n).bind((o => {
                var s, a;
                const i = null !== (a = null === (s = n.textContent) || void 0 === s ? void 0 : s.indexOf(r)) && void 0 !== a ? a : -1;
                if (-1 !== i && o.offset >= i + r.length) {
                    const t = e.createRng();
                    return t.setStart(o.container, o.offset - r.length), t.setEnd(o.container, o.offset), I.some(t)
                }
                {
                    const s = o.offset - r.length;
                    return Pk(o.container, s, n).map((t => {
                        const n = e.createRng();
                        return n.setStart(t.container, t.offset), n.setEnd(o.container, o.offset), n
                    })).filter((e => e.toString() === r)).orThunk((() => hT(e, t, n, Ak(o.container, 0))))
                }
            }))
        }, bT = (e, t, n, o) => {
            const r = e.dom, s = r.getRoot(), a = n.pattern, i = n.position.container, l = n.position.offset;
            return Pk(i, l - n.pattern.end.length, t).bind((d => {
                const c = nT(r, s, d.container, d.offset, i, l, o);
                if (pT(a)) return I.some({matches: [{pattern: a, startRng: c, endRng: c}], position: d});
                {
                    const i = vT(e, n.remainingPatterns, d.container, d.offset, t, o),
                        l = i.getOr({matches: [], position: d}), u = l.position, m = ((e, t, n, o, r, s = !1) => {
                            if (0 === t.start.length && !s) {
                                const t = e.createRng();
                                return t.setStart(n, o), t.setEnd(n, o), I.some(t)
                            }
                            return Bk(n, o, r).bind((n => hT(e, t, r, n).bind((e => {
                                var t;
                                if (s) {
                                    if (e.endContainer === n.container && e.endOffset === n.offset) return I.none();
                                    if (0 === n.offset && (null === (t = e.endContainer.textContent) || void 0 === t ? void 0 : t.length) === e.endOffset) return I.none()
                                }
                                return I.some(e)
                            }))))
                        })(r, a, u.container, u.offset, t, i.isNone());
                    return m.map((e => {
                        const t = ((e, t, n, o = !1) => nT(e, t, n.startContainer, n.startOffset, n.endContainer, n.endOffset, o))(r, s, e, o);
                        return {
                            matches: l.matches.concat([{pattern: a, startRng: t, endRng: c}]),
                            position: Ak(e.startContainer, e.startOffset)
                        }
                    }))
                }
            }))
        }, vT = (e, t, n, o, r, s) => {
            const a = e.dom;
            return Bk(n, o, a.getRoot()).bind((i => {
                const l = dT(a, r, n, o);
                for (let a = 0; a < t.length; a++) {
                    const d = t[a];
                    if (!$e(l, d.end)) continue;
                    const c = t.slice();
                    c.splice(a, 1);
                    const u = bT(e, r, {pattern: d, remainingPatterns: c, position: i}, s);
                    if (u.isNone() && o > 0) return vT(e, t, n, o - 1, r, s);
                    if (u.isSome()) return u
                }
                return I.none()
            }))
        }, yT = (e, t, n) => {
            e.selection.setRng(n), "inline-format" === t.type ? V(t.format, (t => {
                e.formatter.apply(t)
            })) : e.execCommand(t.cmd, !1, t.value)
        }, CT = (e, t, n, o, r, s) => {
            var a;
            return ((e, t) => {
                const n = ne(e, (e => $(t, (t => e.pattern.start === t.pattern.start && e.pattern.end === t.pattern.end))));
                return e.length === t.length ? n ? e : t : e.length > t.length ? e : t
            })(vT(e, r.inlinePatterns, n, o, t, s).fold((() => []), (e => e.matches)), vT(e, (a = r.inlinePatterns, ae(a, ((e, t) => t.end.length - e.end.length))), n, o, t, s).fold((() => []), (e => e.matches)))
        }, wT = (e, t) => {
            if (0 === t.length) return;
            const n = e.dom, o = e.selection.getBookmark(), r = ((e, t) => {
                const n = ui("mce_textpattern"), o = G(t, ((t, o) => {
                    const r = fT(e, n + `_end${t.length}`, o.endRng);
                    return t.concat([{...o, endMarker: r}])
                }), []);
                return G(o, ((t, r) => {
                    const s = o.length - t.length - 1,
                        a = pT(r.pattern) ? r.endMarker : fT(e, n + `_start${s}`, r.startRng);
                    return t.concat([{...r, startMarker: a}])
                }), [])
            })(n, t);
            V(r, (t => {
                const o = n.getParent(t.startMarker.start, n.isBlock), r = e => e === o;
                pT(t.pattern) ? ((e, t, n, o) => {
                    const r = mT(e.dom, n);
                    aT(e.dom, r, o), yT(e, t, r)
                })(e, t.pattern, t.endMarker, r) : ((e, t, n, o, r) => {
                    const s = e.dom, a = mT(s, o), i = mT(s, n);
                    aT(s, i, r), aT(s, a, r);
                    const l = {prefix: n.prefix, start: n.end, end: o.start}, d = mT(s, l);
                    yT(e, t, d)
                })(e, t.pattern, t.startMarker, t.endMarker, r), gT(n, t.endMarker, r), gT(n, t.startMarker, r)
            })), e.selection.moveToBookmark(o)
        }, xT = (e, t) => {
            const n = e.selection.getRng();
            return iT(e, n).map((o => {
                var r;
                const s = Math.max(0, n.startOffset), a = lT(t, o, null !== (r = o.textContent) && void 0 !== r ? r : ""),
                    i = CT(e, o, n.startContainer, s, a, !0), l = ((e, t, n, o) => {
                        var r;
                        const s = e.dom, a = Il(e);
                        if (!s.is(t, a)) return [];
                        const i = null !== (r = t.textContent) && void 0 !== r ? r : "";
                        return ((e, t) => {
                            const n = (e => ae(e, ((e, t) => t.start.length - e.start.length)))(e), o = t.replace(br, " ");
                            return J(n, (e => 0 === t.indexOf(e.start) || 0 === o.indexOf(e.start)))
                        })(n.blockPatterns, i).map((e => Pt.trim(i).length === e.start.length ? [] : [{
                            pattern: e,
                            range: nT(s, s.getRoot(), t, 0, t, 0, true)
                        }])).getOr([])
                    })(e, o, a);
                return (l.length > 0 || i.length > 0) && (e.undoManager.add(), e.undoManager.extra((() => {
                    e.execCommand("mceInsertNewLine")
                }), (() => {
                    (e => {
                        e.insertContent(Br, {preserve_zwsp: !0})
                    })(e), wT(e, i), ((e, t) => {
                        if (0 === t.length) return;
                        const n = e.selection.getBookmark();
                        V(t, (t => ((e, t) => {
                            const n = e.dom, o = t.pattern,
                                r = rT(n.getRoot(), t.range).getOrDie("Unable to resolve path range");
                            return iT(e, r).each((t => {
                                "block-format" === o.type ? ((e, t) => {
                                    const n = t.get(e);
                                    return p(n) && le(n).exists((e => Ee(e, "block")))
                                })(o.format, e.formatter) && e.undoManager.transact((() => {
                                    cT(e.dom, t, o), e.formatter.apply(o.format)
                                })) : "block-command" === o.type && e.undoManager.transact((() => {
                                    cT(e.dom, t, o), e.execCommand(o.cmd, !1, o.value)
                                }))
                            })), !0
                        })(e, t))), e.selection.moveToBookmark(n)
                    })(e, l);
                    const t = e.selection.getRng(), n = Bk(t.startContainer, t.startOffset, e.dom.getRoot());
                    e.execCommand("mceInsertNewLine"), n.each((t => {
                        const n = t.container;
                        n.data.charAt(t.offset - 1) === hr && (n.deleteData(t.offset - 1, 1), sT(e.dom, n.parentNode, (t => t === e.dom.getRoot())))
                    }))
                })), !0)
            })).getOr(!1)
        }, ET = (e, t, n) => {
            for (let o = 0; o < e.length; o++) if (n(e[o], t)) return !0;
            return !1
        }, _T = e => {
            const t = Pt.each, n = af.BACKSPACE, o = af.DELETE, r = e.dom, s = e.selection, a = e.parser, i = At.browser,
                l = i.isFirefox(), d = i.isChromium() || i.isSafari(),
                c = At.deviceType.isiPhone() || At.deviceType.isiPad(), u = At.os.isMacOS() || At.os.isiOS(),
                f = (t, n) => {
                    try {
                        e.getDoc().execCommand(t, !1, String(n))
                    } catch (e) {
                    }
                }, g = e => e.isDefaultPrevented(), p = () => {
                    e.shortcuts.add("meta+a", null, "SelectAll")
                }, h = () => {
                    e.inline || r.bind(e.getDoc(), "mousedown mouseup", (t => {
                        let n;
                        if (t.target === e.getDoc().documentElement) if (n = s.getRng(), e.getBody().focus(), "mousedown" === t.type) {
                            if (Ur(n.startContainer)) return;
                            s.placeCaretAt(t.clientX, t.clientY)
                        } else s.setRng(n)
                    }))
                }, b = () => {
                    Range.prototype.getClientRects || e.on("mousedown", (t => {
                        if (!g(t) && "HTML" === t.target.nodeName) {
                            const t = e.getBody();
                            t.blur(), vg.setEditorTimeout(e, (() => {
                                t.focus()
                            }))
                        }
                    }))
                }, v = () => {
                    const t = zd(e);
                    e.on("click", (n => {
                        const o = n.target;
                        /^(IMG|HR)$/.test(o.nodeName) && r.isEditable(o) && (n.preventDefault(), e.selection.select(o), e.nodeChanged()), "A" === o.nodeName && r.hasClass(o, t) && 0 === o.childNodes.length && r.isEditable(o.parentNode) && (n.preventDefault(), s.select(o))
                    }))
                }, y = () => {
                    e.on("keydown", (e => {
                        if (!g(e) && e.keyCode === n && s.isCollapsed() && 0 === s.getRng().startOffset) {
                            const t = s.getNode().previousSibling;
                            if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1
                        }
                        return !0
                    }))
                }, C = () => {
                    Bd(e) || e.on("BeforeExecCommand mousedown", (() => {
                        f("StyleWithCSS", !1), f("enableInlineTableEditing", !1), cd(e) || f("enableObjectResizing", !1)
                    }))
                }, w = () => {
                    e.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")
                }, x = () => {
                    e.inline || e.on("keydown", (() => {
                        document.activeElement === document.body && e.getWin().focus()
                    }))
                }, E = () => {
                    e.inline || (e.contentStyles.push("body {min-height: 150px}"), e.on("click", (t => {
                        let n;
                        "HTML" === t.target.nodeName && (n = e.selection.getRng(), e.getBody().focus(), e.selection.setRng(n), e.selection.normalize(), e.nodeChanged())
                    })))
                }, k = () => {
                    u && e.on("keydown", (t => {
                        !af.metaKeyPressed(t) || t.shiftKey || 37 !== t.keyCode && 39 !== t.keyCode || (t.preventDefault(), e.selection.getSel().modify("move", 37 === t.keyCode ? "backward" : "forward", "lineboundary"))
                    }))
                }, S = () => {
                    e.on("click", (e => {
                        let t = e.target;
                        do {
                            if ("A" === t.tagName) return void e.preventDefault()
                        } while (t = t.parentNode)
                    })), e.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")
                }, N = () => {
                    e.on("init", (() => {
                        e.dom.bind(e.getBody(), "submit", (e => {
                            e.preventDefault()
                        }))
                    }))
                }, R = _;
            return XC(e) ? (d && (h(), v(), N(), p(), c && (x(), E(), S())), l && (b(), C(), w(), k())) : (e.on("keydown", (t => {
                if (g(t) || t.keyCode !== af.BACKSPACE) return;
                let n = s.getRng();
                const o = n.startContainer, a = n.startOffset, i = r.getRoot();
                let l = o;
                if (n.collapsed && 0 === a) {
                    for (; l.parentNode && l.parentNode.firstChild === l && l.parentNode !== i;) l = l.parentNode;
                    "BLOCKQUOTE" === l.nodeName && (e.formatter.toggle("blockquote", void 0, l), n = r.createRng(), n.setStart(o, 0), n.setEnd(o, 0), s.setRng(n))
                }
            })), (() => {
                const t = e => {
                    const t = r.create("body"), n = e.cloneContents();
                    return t.appendChild(n), s.serializer.serialize(t, {format: "html"})
                };
                e.on("keydown", (s => {
                    const a = s.keyCode;
                    if (!g(s) && (a === o || a === n) && e.selection.isEditable()) {
                        const n = e.selection.isCollapsed(), o = e.getBody();
                        if (n && !gs(yn(o))) return;
                        if (!n && !(n => {
                            const o = t(n), s = r.createRng();
                            return s.selectNode(e.getBody()), o === t(s)
                        })(e.selection.getRng())) return;
                        s.preventDefault(), e.setContent(""), o.firstChild && r.isBlock(o.firstChild) ? e.selection.setCursorLocation(o.firstChild, 0) : e.selection.setCursorLocation(o, 0), e.nodeChanged()
                    }
                }))
            })(), At.windowsPhone || e.on("keyup focusin mouseup", (t => {
                af.modifierPressed(t) || (e => {
                    const t = e.getBody(), n = e.selection.getRng();
                    return n.startContainer === n.endContainer && n.startContainer === t && 0 === n.startOffset && n.endOffset === t.childNodes.length
                })(e) || s.normalize()
            }), !0), d && (h(), v(), e.on("init", (() => {
                f("DefaultParagraphSeparator", Il(e))
            })), N(), y(), a.addNodeFilter("br", (e => {
                let t = e.length;
                for (; t--;) "Apple-interchange-newline" === e[t].attr("class") && e[t].remove()
            })), c ? (x(), E(), S()) : p()), l && (e.on("keydown", (t => {
                if (!g(t) && t.keyCode === n) {
                    if (!e.getBody().getElementsByTagName("hr").length) return;
                    if (s.isCollapsed() && 0 === s.getRng().startOffset) {
                        const e = s.getNode(), n = e.previousSibling;
                        if ("HR" === e.nodeName) return r.remove(e), void t.preventDefault();
                        n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (r.remove(n), t.preventDefault())
                    }
                }
            })), b(), (() => {
                const n = () => {
                        const n = r.getAttribs(s.getStart().cloneNode(!1));
                        return () => {
                            const o = s.getStart();
                            o !== e.getBody() && (r.setAttrib(o, "style", null), t(n, (e => {
                                o.setAttributeNode(e.cloneNode(!0))
                            })))
                        }
                    },
                    o = () => !s.isCollapsed() && r.getParent(s.getStart(), r.isBlock) !== r.getParent(s.getEnd(), r.isBlock);
                e.on("keypress", (t => {
                    let r;
                    return !(!(g(t) || 8 !== t.keyCode && 46 !== t.keyCode) && o() && (r = n(), e.getDoc().execCommand("delete", !1), r(), t.preventDefault(), 1))
                })), r.bind(e.getDoc(), "cut", (t => {
                    if (!g(t) && o()) {
                        const t = n();
                        vg.setEditorTimeout(e, (() => {
                            t()
                        }))
                    }
                }))
            })(), C(), e.on("SetContent ExecCommand", (e => {
                "setcontent" !== e.type && "mceInsertLink" !== e.command || t(r.select("a:not([data-mce-block])"), (e => {
                    var t;
                    let n = e.parentNode;
                    const o = r.getRoot();
                    if ((null == n ? void 0 : n.lastChild) === e) {
                        for (; n && !r.isBlock(n);) {
                            if ((null === (t = n.parentNode) || void 0 === t ? void 0 : t.lastChild) !== n || n === o) return;
                            n = n.parentNode
                        }
                        r.add(n, "br", {"data-mce-bogus": 1})
                    }
                }))
            })), w(), k(), y(), e.on("drop", (t => {
                var n;
                const o = null === (n = t.dataTransfer) || void 0 === n ? void 0 : n.getData("text/html");
                m(o) && /^<img[^>]*>$/.test(o) && e.dispatch("dragend", new window.DragEvent("dragend", t))
            })))), {
                refreshContentEditable: R, isHidden: () => {
                    if (!l || e.removed) return !1;
                    const t = e.selection.getSel();
                    return !t || !t.rangeCount || 0 === t.rangeCount
                }
            }
        }, kT = za.DOM, ST = e => e.inline ? e.getElement().nodeName.toLowerCase() : void 0,
        NT = e => ye(e, (e => !1 === v(e))), RT = e => {
            const t = e.options.get, n = e.editorUpload.blobCache;
            return NT({
                allow_conditional_comments: t("allow_conditional_comments"),
                allow_html_data_urls: t("allow_html_data_urls"),
                allow_svg_data_urls: t("allow_svg_data_urls"),
                allow_html_in_named_anchor: t("allow_html_in_named_anchor"),
                allow_script_urls: t("allow_script_urls"),
                allow_unsafe_link_target: t("allow_unsafe_link_target"),
                convert_unsafe_embeds: t("convert_unsafe_embeds"),
                convert_fonts_to_spans: t("convert_fonts_to_spans"),
                fix_list_elements: t("fix_list_elements"),
                font_size_legacy_values: t("font_size_legacy_values"),
                forced_root_block: t("forced_root_block"),
                forced_root_block_attrs: t("forced_root_block_attrs"),
                preserve_cdata: t("preserve_cdata"),
                inline_styles: t("inline_styles"),
                root_name: ST(e),
                sandbox_iframes: t("sandbox_iframes"),
                sanitize: t("xss_sanitization"),
                validate: !0,
                blob_cache: n,
                document: e.getDoc()
            })
        }, AT = e => {
            const t = e.options.get;
            return NT({
                custom_elements: t("custom_elements"),
                extended_valid_elements: t("extended_valid_elements"),
                invalid_elements: t("invalid_elements"),
                invalid_styles: t("invalid_styles"),
                schema: t("schema"),
                valid_children: t("valid_children"),
                valid_classes: t("valid_classes"),
                valid_elements: t("valid_elements"),
                valid_styles: t("valid_styles"),
                verify_html: t("verify_html"),
                padd_empty_block_inline_children: t("format_empty_lines")
            })
        }, TT = e => e.inline ? e.ui.styleSheetLoader : e.dom.styleSheetLoader, OT = e => {
            const t = TT(e), n = id(e), o = e.contentCSS, r = () => {
                t.unloadAll(o), e.inline || e.ui.styleSheetLoader.unloadAll(n)
            }, s = () => {
                e.removed ? r() : e.on("remove", r)
            };
            if (e.contentStyles.length > 0) {
                let t = "";
                Pt.each(e.contentStyles, (e => {
                    t += e + "\r\n"
                })), e.dom.addStyle(t)
            }
            const a = Promise.all(((e, t, n) => {
                const {pass: o, fail: r} = K(t, (e => tinymce.Resource.has(Uw(e)))), s = o.map((t => {
                    const n = tinymce.Resource.get(Uw(t));
                    return m(n) ? Promise.resolve(TT(e).loadRawCss(t, n)) : Promise.resolve()
                })), a = [...s, TT(e).loadAll(r)];
                return e.inline ? a : a.concat([e.ui.styleSheetLoader.loadAll(n)])
            })(e, o, n)).then(s).catch(s), i = ad(e);
            return i && ((e, t) => {
                const n = yn(e.getBody()), o = Vn(qn(n)), r = bn("style");
                Jt(r, "type", "text/css"), vo(r, vn(t)), vo(o, r), e.on("remove", (() => {
                    xo(r)
                }))
            })(e, i), a
        }, BT = e => {
            !0 !== e.removed && ((e => {
                XC(e) || e.load({initial: !0, format: "html"}), e.startContent = e.getContent({format: "raw"})
            })(e), (e => {
                e.bindPendingEventDelegates(), e.initialized = !0, (e => {
                    e.dispatch("Init")
                })(e), e.focus(!0), (e => {
                    const t = e.dom.getRoot();
                    e.inline || am(e) && e.selection.getStart(!0) !== t || Ou(t).each((t => {
                        const n = t.getNode(), o = Qo(n) ? Ou(n).getOr(t) : t;
                        e.selection.setRng(o.toRange())
                    }))
                })(e), e.nodeChanged({initial: !0});
                const t = $d(e);
                w(t) && t.call(e, e), (e => {
                    const t = Vd(e);
                    t && vg.setEditorTimeout(e, (() => {
                        let n;
                        n = !0 === t ? e : e.editorManager.get(t), n && !n.destroyed && (n.focus(), n.selection.scrollIntoView())
                    }), 100)
                })(e)
            })(e))
        }, PT = e => {
            const t = e.getElement();
            let n = e.getDoc();
            e.inline && (kT.addClass(t, "mce-content-body"), e.contentDocument = n = document, e.contentWindow = window, e.bodyElement = t, e.contentAreaContainer = t);
            const o = e.getBody();
            o.disabled = !0, e.readonly = Bd(e), e._editableRoot = Pd(e), !e.readonly && e.hasEditableRoot() && (e.inline && "static" === kT.getStyle(o, "position", !0) && (o.style.position = "relative"), o.contentEditable = "true"), o.disabled = !1, e.editorUpload = Kw(e), e.schema = ua(AT(e)), e.dom = za(n, {
                keep_values: !0,
                url_converter: e.convertURL,
                url_converter_scope: e,
                update_styles: !0,
                root_element: e.inline ? e.getBody() : null,
                collect: e.inline,
                schema: e.schema,
                contentCssCors: Zl(e),
                referrerPolicy: ed(e),
                onSetAttrib: t => {
                    e.dispatch("SetAttrib", t)
                },
                force_hex_color: yc(e)
            }), e.parser = (e => {
                const t = bC(RT(e), e.schema);
                return t.addAttributeFilter("src,href,style,tabindex", ((t, n) => {
                    const o = e.dom, r = "data-mce-" + n;
                    let s = t.length;
                    for (; s--;) {
                        const a = t[s];
                        let i = a.attr(n);
                        if (i && !a.attr(r)) {
                            if (0 === i.indexOf("data:") || 0 === i.indexOf("blob:")) continue;
                            "style" === n ? (i = o.serializeStyle(o.parseStyle(i), a.name), i.length || (i = null), a.attr(r, i), a.attr(n, i)) : "tabindex" === n ? (a.attr(r, i), a.attr(n, null)) : a.attr(r, e.convertURL(i, n, a.name))
                        }
                    }
                })), t.addNodeFilter("script", (e => {
                    let t = e.length;
                    for (; t--;) {
                        const n = e[t], o = n.attr("type") || "no/type";
                        0 !== o.indexOf("mce-") && n.attr("type", "mce-" + o)
                    }
                })), uc(e) && t.addNodeFilter("#cdata", (t => {
                    var n;
                    let o = t.length;
                    for (; o--;) {
                        const r = t[o];
                        r.type = 8, r.name = "#comment", r.value = "[CDATA[" + e.dom.encode(null !== (n = r.value) && void 0 !== n ? n : "") + "]]"
                    }
                })), t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", (t => {
                    let n = t.length;
                    const o = e.schema.getNonEmptyElements();
                    for (; n--;) {
                        const e = t[n];
                        e.isEmpty(o) && 0 === e.getAll("br").length && e.append(new Wg("br", 1))
                    }
                })), t
            })(e), e.serializer = iw((e => {
                const t = e.options.get;
                return {
                    ...RT(e), ...AT(e), ...NT({
                        remove_trailing_brs: t("remove_trailing_brs"),
                        pad_empty_with_br: t("pad_empty_with_br"),
                        url_converter: t("url_converter"),
                        url_converter_scope: t("url_converter_scope"),
                        element_format: t("element_format"),
                        entities: t("entities"),
                        entity_encoding: t("entity_encoding"),
                        indent: t("indent"),
                        indent_after: t("indent_after"),
                        indent_before: t("indent_before")
                    })
                }
            })(e), e), e.selection = rw(e.dom, e.getWin(), e.serializer, e), e.annotator = Qm(e), e.formatter = rx(e), e.undoManager = ax(e), e._nodeChangeDispatcher = new hR(e), e._selectionOverrides = ZA(e), (e => {
                const t = Xa(), n = $a(!1), o = Ja((t => {
                    e.dispatch("longpress", {...t, type: "longpress"}), n.set(!0)
                }), 400);
                e.on("touchstart", (e => {
                    P_(e).each((r => {
                        o.cancel();
                        const s = {x: r.clientX, y: r.clientY, target: e.target};
                        o.throttle(e), n.set(!1), t.set(s)
                    }))
                }), !0), e.on("touchmove", (r => {
                    o.cancel(), P_(r).each((o => {
                        t.on((r => {
                            ((e, t) => {
                                const n = Math.abs(e.clientX - t.x), o = Math.abs(e.clientY - t.y);
                                return n > 5 || o > 5
                            })(o, r) && (t.clear(), n.set(!1), e.dispatch("longpresscancel"))
                        }))
                    }))
                }), !0), e.on("touchend touchcancel", (r => {
                    o.cancel(), "touchcancel" !== r.type && t.get().filter((e => e.target.isEqualNode(r.target))).each((() => {
                        n.get() ? r.preventDefault() : e.dispatch("tap", {...r, type: "tap"})
                    }))
                }), !0)
            })(e), (e => {
                (e => {
                    e.on("click", (t => {
                        e.dom.getParent(t.target, "details") && t.preventDefault()
                    }))
                })(e), (e => {
                    e.parser.addNodeFilter("details", (t => {
                        const n = bc(e);
                        V(t, (e => {
                            "expanded" === n ? e.attr("open", "open") : "collapsed" === n && e.attr("open", null)
                        }))
                    })), e.serializer.addNodeFilter("details", (t => {
                        const n = vc(e);
                        V(t, (e => {
                            "expanded" === n ? e.attr("open", "open") : "collapsed" === n && e.attr("open", null)
                        }))
                    }))
                })(e)
            })(e), (e => {
                const t = "contenteditable", n = " " + Pt.trim(dc(e)) + " ", o = " " + Pt.trim(lc(e)) + " ", r = z_(n),
                    s = z_(o), a = cc(e);
                a.length > 0 && e.on("BeforeSetContent", (t => {
                    ((e, t, n) => {
                        let o = t.length, r = n.content;
                        if ("raw" !== n.format) {
                            for (; o--;) r = r.replace(t[o], j_(e, r, lc(e)));
                            n.content = r
                        }
                    })(e, a, t)
                })), e.parser.addAttributeFilter("class", (e => {
                    let n = e.length;
                    for (; n--;) {
                        const o = e[n];
                        r(o) ? o.attr(t, "true") : s(o) && o.attr(t, "false")
                    }
                })), e.serializer.addAttributeFilter(t, (e => {
                    let n = e.length;
                    for (; n--;) {
                        const o = e[n];
                        (r(o) || s(o)) && (a.length > 0 && o.attr("data-mce-content") ? (o.name = "#text", o.type = 3, o.raw = !0, o.value = o.attr("data-mce-content")) : o.attr(t, null))
                    }
                }))
            })(e), XC(e) || ((e => {
                e.on("mousedown", (t => {
                    t.detail >= 3 && (t.preventDefault(), SA(e))
                }))
            })(e), (e => {
                (e => {
                    const t = [",", ".", ";", ":", "!", "?"], n = [32], o = () => {
                        return t = ac(e), n = ic(e), {
                            inlinePatterns: wl(t),
                            blockPatterns: Cl(t),
                            dynamicPatternsLookup: n
                        };
                        var t, n
                    }, r = () => (e => e.options.isSet("text_patterns_lookup"))(e);
                    e.on("keydown", (t => {
                        if (13 === t.keyCode && !af.modifierPressed(t) && e.selection.isCollapsed()) {
                            const n = o();
                            (n.inlinePatterns.length > 0 || n.blockPatterns.length > 0 || r()) && xT(e, n) && t.preventDefault()
                        }
                    }), !0);
                    const s = () => {
                        if (e.selection.isCollapsed()) {
                            const t = o();
                            (t.inlinePatterns.length > 0 || r()) && ((e, t) => {
                                const n = e.selection.getRng();
                                iT(e, n).map((o => {
                                    const r = Math.max(0, n.startOffset - 1), s = dT(e.dom, o, n.startContainer, r),
                                        a = lT(t, o, s), i = CT(e, o, n.startContainer, r, a, !1);
                                    i.length > 0 && e.undoManager.transact((() => {
                                        wT(e, i)
                                    }))
                                }))
                            })(e, t)
                        }
                    };
                    e.on("keyup", (e => {
                        ET(n, e, ((e, t) => e === t.keyCode && !af.modifierPressed(t))) && s()
                    })), e.on("keypress", (n => {
                        ET(t, n, ((e, t) => e.charCodeAt(0) === t.charCode)) && vg.setEditorTimeout(e, s)
                    }))
                })(e)
            })(e));
            const r = pR(e);
            B_(e, r), (e => {
                e.on("NodeChange", T(F_, e))
            })(e), (e => {
                var t;
                const n = e.dom, o = Il(e), r = null !== (t = md(e)) && void 0 !== t ? t : "", s = (t, a) => {
                    if ((e => {
                        if (dx(e)) {
                            const t = e.keyCode;
                            return !cx(e) && (af.metaKeyPressed(e) || e.altKey || t >= 112 && t <= 123 || H(ix, t))
                        }
                        return !1
                    })(t)) return;
                    const i = e.getBody(),
                        l = !(e => dx(e) && !(cx(e) || "keyup" === e.type && 229 === e.keyCode))(t) && ((e, t, n) => {
                            if (gs(yn(t), !1)) {
                                const o = t.firstElementChild;
                                return !o || !e.getStyle(t.firstElementChild, "padding-left") && !e.getStyle(t.firstElementChild, "padding-right") && n === o.nodeName.toLowerCase()
                            }
                            return !1
                        })(n, i, o);
                    ("" !== n.getAttrib(i, lx) !== l || a) && (n.setAttrib(i, lx, l ? r : null), n.setAttrib(i, "aria-placeholder", l ? r : null), ((e, t) => {
                        e.dispatch("PlaceholderToggle", {state: t})
                    })(e, l), e.on(l ? "keydown" : "keyup", s), e.off(l ? "keyup" : "keydown", s))
                };
                Ye(r) && e.on("init", (t => {
                    s(t, !0), e.on("change SetContent ExecCommand", s), e.on("paste", (t => vg.setEditorTimeout(e, (() => s(t)))))
                }))
            })(e), yA(e);
            const s = (e => {
                const t = e;
                return (e => xe(e.plugins, "rtc").bind((e => I.from(e.setup))))(e).fold((() => (t.rtcInstance = GC(e), I.none())), (e => (t.rtcInstance = (() => {
                    const e = N(null), t = N("");
                    return {
                        init: {bindEvents: _},
                        undoManager: {
                            beforeChange: _,
                            add: e,
                            undo: e,
                            redo: e,
                            clear: _,
                            reset: _,
                            hasUndo: L,
                            hasRedo: L,
                            transact: e,
                            ignore: _,
                            extra: _
                        },
                        formatter: {
                            match: L,
                            matchAll: N([]),
                            matchNode: N(void 0),
                            canApply: L,
                            closest: t,
                            apply: _,
                            remove: _,
                            toggle: _,
                            formatChanged: N({unbind: _})
                        },
                        editor: {getContent: t, setContent: N({content: "", html: ""}), insertContent: N(""), addVisual: _},
                        selection: {getContent: t},
                        autocompleter: {addDecoration: _, removeDecoration: _},
                        raw: {getModel: N(I.none())}
                    }
                })(), I.some((() => e().then((e => (t.rtcInstance = (e => {
                    const t = e => f(e) ? e : {}, {init: n, undoManager: o, formatter: r, editor: s, selection: a, autocompleter: i, raw: l} = e;
                    return {
                        init: {bindEvents: n.bindEvents},
                        undoManager: {
                            beforeChange: o.beforeChange,
                            add: o.add,
                            undo: o.undo,
                            redo: o.redo,
                            clear: o.clear,
                            reset: o.reset,
                            hasUndo: o.hasUndo,
                            hasRedo: o.hasRedo,
                            transact: (e, t, n) => o.transact(n),
                            ignore: (e, t) => o.ignore(t),
                            extra: (e, t, n, r) => o.extra(n, r)
                        },
                        formatter: {
                            match: (e, n, o, s) => r.match(e, t(n), s),
                            matchAll: r.matchAll,
                            matchNode: r.matchNode,
                            canApply: e => r.canApply(e),
                            closest: e => r.closest(e),
                            apply: (e, n, o) => r.apply(e, t(n)),
                            remove: (e, n, o, s) => r.remove(e, t(n)),
                            toggle: (e, n, o) => r.toggle(e, t(n)),
                            formatChanged: (e, t, n, o, s) => r.formatChanged(t, n, o, s)
                        },
                        editor: {
                            getContent: e => s.getContent(e),
                            setContent: (e, t) => ({content: s.setContent(e, t), html: ""}),
                            insertContent: (e, t) => (s.insertContent(e), ""),
                            addVisual: s.addVisual
                        },
                        selection: {getContent: (e, t) => a.getContent(t)},
                        autocompleter: {addDecoration: i.addDecoration, removeDecoration: i.removeDecoration},
                        raw: {getModel: () => I.some(l.getRawModel())}
                    }
                })(e), e.rtc.isRemote))))))))
            })(e);
            (e => {
                const t = e.getDoc(), n = e.getBody();
                (e => {
                    e.dispatch("PreInit")
                })(e), Wd(e) || (t.body.spellcheck = !1, kT.setAttrib(n, "spellcheck", "false")), e.quirks = _T(e), (e => {
                    e.dispatch("PostRender")
                })(e);
                const o = ld(e);
                void 0 !== o && (n.dir = o);
                const r = Kd(e);
                r && e.on("BeforeSetContent", (e => {
                    Pt.each(r, (t => {
                        e.content = e.content.replace(t, (e => "\x3c!--mce:protected " + escape(e) + "--\x3e"))
                    }))
                })), e.on("SetContent", (() => {
                    e.addVisual(e.getBody())
                })), e.on("compositionstart compositionend", (t => {
                    e.composing = "compositionstart" === t.type
                }))
            })(e), s.fold((() => {
                const t = (e => {
                    let t = !1;
                    const n = setTimeout((() => {
                        t || e.setProgressState(!0)
                    }), 500);
                    return () => {
                        clearTimeout(n), t = !0, e.setProgressState(!1)
                    }
                })(e);
                OT(e).then((() => {
                    BT(e), t()
                }))
            }), (t => {
                e.setProgressState(!0), OT(e).then((() => {
                    t().then((t => {
                        e.setProgressState(!1), BT(e), ZC(e)
                    }), (t => {
                        e.notificationManager.open({type: "error", text: String(t)}), BT(e), ZC(e)
                    }))
                }))
            }))
        }, DT = M, LT = za.DOM, MT = za.DOM, IT = (e, t) => ({editorContainer: e, iframeContainer: t, api: {}}), FT = e => {
            const t = e.getElement();
            return e.inline ? IT(null) : (e => {
                const t = MT.create("div");
                return MT.insertAfter(t, e), IT(t, t)
            })(t)
        }, UT = async e => {
            e.dispatch("ScriptsLoaded"), (e => {
                const t = Pt.trim(Kl(e)), n = e.ui.registry.getAll().icons,
                    o = {...xw.get("default").icons, ...xw.get(t).icons};
                ge(o, ((t, o) => {
                    Ee(n, o) || e.ui.registry.addIcon(o, t)
                }))
            })(e), (e => {
                const t = pd(e);
                if (m(t)) {
                    const n = Bw.get(t);
                    e.theme = n(e, Bw.urls[t]) || {}, w(e.theme.init) && e.theme.init(e, Bw.urls[t] || e.documentBaseUrl.replace(/\/$/, ""))
                } else e.theme = {}
            })(e), (e => {
                const t = bd(e), n = Ew.get(t);
                e.model = n(e, Ew.urls[t])
            })(e), (e => {
                const t = [];
                V(Ld(e), (n => {
                    ((e, t, n) => {
                        const o = Ow.get(n), r = Ow.urls[n] || e.documentBaseUrl.replace(/\/$/, "");
                        if (n = Pt.trim(n), o && -1 === Pt.inArray(t, n)) {
                            if (e.plugins[n]) return;
                            try {
                                const s = o(e, r) || {};
                                e.plugins[n] = s, w(s.init) && (s.init(e, r), t.push(n))
                            } catch (t) {
                                ((e, t, n) => {
                                    const o = Ka.translate(["Failed to initialize plugin: {0}", t]);
                                    ef(e, "PluginLoadError", {message: o}), Fw(o, n), Lw(e, o)
                                })(e, n, t)
                            }
                        }
                    })(e, t, (e => e.replace(/^\-/, ""))(n))
                }))
            })(e);
            const t = await (e => {
                const t = e.getElement();
                return e.orgDisplay = t.style.display, m(pd(e)) ? (e => {
                    const t = e.theme.renderUI;
                    return t ? t() : FT(e)
                })(e) : w(pd(e)) ? (e => {
                    const t = e.getElement(), n = pd(e)(e, t);
                    return n.editorContainer.nodeType && (n.editorContainer.id = n.editorContainer.id || e.id + "_parent"), n.iframeContainer && n.iframeContainer.nodeType && (n.iframeContainer.id = n.iframeContainer.id || e.id + "_iframecontainer"), n.height = n.iframeHeight ? n.iframeHeight : t.offsetHeight, n
                })(e) : FT(e)
            })(e);
            ((e, t) => {
                const n = {
                    show: I.from(t.show).getOr(_),
                    hide: I.from(t.hide).getOr(_),
                    isEnabled: I.from(t.isEnabled).getOr(M),
                    setEnabled: n => {
                        e.mode.isReadOnly() || I.from(t.setEnabled).each((e => e(n)))
                    }
                };
                e.ui = {...e.ui, ...n}
            })(e, I.from(t.api).getOr({})), e.editorContainer = t.editorContainer, (e => {
                e.contentCSS = e.contentCSS.concat((e => zw(e, sd(e)))(e), (e => zw(e, id(e)))(e))
            })(e), e.inline ? PT(e) : ((e, t) => {
                ((e, t) => {
                    const n = e.translate("Rich Text Area"), o = tn(yn(e.getElement()), "tabindex").bind(Xe),
                        r = ((e, t, n, o) => {
                            const r = bn("iframe");
                            return o.each((e => Jt(r, "tabindex", e))), Zt(r, n), Zt(r, {
                                id: e + "_ifr",
                                frameBorder: "0",
                                allowTransparency: "true",
                                title: t
                            }), un(r, "tox-edit-area__iframe"), r
                        })(e.id, n, Tl(e), o).dom;
                    r.onload = () => {
                        r.onload = null, e.dispatch("load")
                    }, e.contentAreaContainer = t.iframeContainer, e.iframeElement = r, e.iframeHTML = (e => {
                        let t = Ol(e) + "<html><head>";
                        Bl(e) !== e.documentBaseUrl && (t += '<base href="' + e.documentBaseURI.getURI() + '" />'), t += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
                        const n = Pl(e), o = Dl(e), r = e.translate(jd(e));
                        return Ll(e) && (t += '<meta http-equiv="Content-Security-Policy" content="' + Ll(e) + '" />'), t += `</head><body id="${n}" class="mce-content-body ${o}" data-id="${e.id}" aria-label="${r}"><br></body></html>`, t
                    })(e), LT.add(t.iframeContainer, r)
                })(e, t), t.editorContainer && (t.editorContainer.style.display = e.orgDisplay, e.hidden = LT.isHidden(t.editorContainer)), e.getElement().style.display = "none", LT.setAttrib(e.id, "aria-hidden", "true"), e.getElement().style.visibility = e.orgVisibility, (e => {
                    const t = e.iframeElement, n = () => {
                        e.contentDocument = t.contentDocument, PT(e)
                    };
                    if (gc(e) || At.browser.isFirefox()) {
                        const t = e.getDoc();
                        t.open(), t.write(e.iframeHTML), t.close(), n()
                    } else {
                        const r = (o = yn(t), No(o, "load", DT, (() => {
                            r.unbind(), n()
                        })));
                        t.srcdoc = e.iframeHTML
                    }
                    var o
                })(e)
            })(e, {editorContainer: t.editorContainer, iframeContainer: t.iframeContainer})
        }, zT = za.DOM, jT = e => "-" === e.charAt(0),
        HT = (e, t, n) => I.from(t).filter((e => Ye(e) && !xw.has(e))).map((t => ({
            url: `${e.editorManager.baseURL}/icons/${t}/icons${n}.js`,
            name: I.some(t)
        }))), $T = (e, t) => {
            const n = Ha.ScriptLoader, o = () => {
                !e.removed && (e => {
                    const t = pd(e);
                    return !m(t) || C(Bw.get(t))
                })(e) && (e => {
                    const t = bd(e);
                    return C(Ew.get(t))
                })(e) && UT(e)
            };
            ((e, t) => {
                const n = pd(e);
                if (m(n) && !jT(n) && !Ee(Bw.urls, n)) {
                    const o = hd(e), r = o ? e.documentBaseURI.toAbsolute(o) : `themes/${n}/theme${t}.js`;
                    Bw.load(n, r).catch((() => {
                        ((e, t, n) => {
                            Mw(e, "ThemeLoadError", Iw("theme", t, n))
                        })(e, r, n)
                    }))
                }
            })(e, t), ((e, t) => {
                const n = bd(e);
                if ("plugin" !== n && !Ee(Ew.urls, n)) {
                    const o = vd(e), r = m(o) ? e.documentBaseURI.toAbsolute(o) : `models/${n}/model${t}.js`;
                    Ew.load(n, r).catch((() => {
                        ((e, t, n) => {
                            Mw(e, "ModelLoadError", Iw("model", t, n))
                        })(e, r, n)
                    }))
                }
            })(e, t), ((e, t) => {
                const n = td(t), o = nd(t);
                if (!Ka.hasCode(n) && "en" !== n) {
                    const r = Ye(o) ? o : `${t.editorManager.baseURL}/langs/${n}.js`;
                    e.add(r).catch((() => {
                        ((e, t, n) => {
                            Mw(e, "LanguageLoadError", Iw("language", t, n))
                        })(t, r, n)
                    }))
                }
            })(n, e), ((e, t, n) => {
                const o = HT(t, "default", n), r = (e => I.from(Yl(e)).filter(Ye).map((e => ({
                    url: e,
                    name: I.none()
                }))))(t).orThunk((() => HT(t, Kl(t), "")));
                V((e => {
                    const t = [], n = e => {
                        t.push(e)
                    };
                    for (let t = 0; t < e.length; t++) e[t].each(n);
                    return t
                })([o, r]), (n => {
                    e.add(n.url).catch((() => {
                        ((e, t, n) => {
                            Mw(e, "IconsLoadError", Iw("icons", t, n))
                        })(t, n.url, n.name.getOrUndefined())
                    }))
                }))
            })(n, e, t), ((e, t) => {
                const n = (t, n) => {
                    Ow.load(t, n).catch((() => {
                        ((e, t, n) => {
                            Mw(e, "PluginLoadError", Iw("plugin", t, n))
                        })(e, n, t)
                    }))
                };
                ge(Md(e), ((t, o) => {
                    n(o, t), e.options.set("plugins", Ld(e).concat(o))
                })), V(Ld(e), (e => {
                    !(e = Pt.trim(e)) || Ow.urls[e] || jT(e) || n(e, `plugins/${e}/plugin${t}.js`)
                }))
            })(e, t), n.loadQueue().then(o, o)
        }, qT = xt().deviceType, VT = qT.isPhone(), WT = qT.isTablet(), KT = e => {
            if (y(e)) return [];
            {
                const t = p(e) ? e : e.split(/[ ,]/), n = q(t, Ve);
                return Y(n, Ye)
            }
        }, YT = (e, t) => {
            const n = ((t, n) => {
                const o = {}, r = {};
                return ve(t, ((t, n) => H(e, n)), be(o), be(r)), {t: o, f: r}
            })(t);
            return o = n.t, r = n.f, {sections: N(o), options: N(r)};
            var o, r
        }, GT = (e, t) => Ee(e.sections(), t), XT = (e, t) => ({
            table_grid: !1,
            object_resizing: !1,
            resize: !1,
            toolbar_mode: xe(e, "toolbar_mode").getOr("scrolling"),
            toolbar_sticky: !1, ...t ? {menubar: !1} : {}
        }), QT = (e, t) => {
            var n;
            const o = null !== (n = t.external_plugins) && void 0 !== n ? n : {};
            return e && e.external_plugins ? Pt.extend({}, e.external_plugins, o) : o
        }, JT = (e, t, n, o, r) => {
            var s;
            const a = e ? {mobile: XT(null !== (s = r.mobile) && void 0 !== s ? s : {}, t)} : {},
                i = YT(["mobile"], Jk(a, r)),
                l = Pt.extend(n, o, i.options(), ((e, t) => e && GT(t, "mobile"))(e, i) ? ((e, t, n = {}) => {
                    const o = e.sections(), r = xe(o, t).getOr({});
                    return Pt.extend({}, n, r)
                })(i, "mobile") : {}, {external_plugins: QT(o, i.options())});
            return ((e, t, n, o) => {
                const r = KT(n.forced_plugins), s = KT(o.plugins),
                    a = ((e, t) => GT(e, t) ? e.sections()[t] : {})(t, "mobile"),
                    i = ((e, t, n, o) => e && GT(t, "mobile") ? o : n)(e, t, s, a.plugins ? KT(a.plugins) : s),
                    l = ((e, t) => [...KT(e), ...KT(t)])(r, i);
                return Pt.extend(o, {forced_plugins: r, plugins: l})
            })(e, i, o, l)
        }, ZT = e => {
            (e => {
                const t = t => () => {
                    V("left,center,right,justify".split(","), (n => {
                        t !== n && e.formatter.remove("align" + n)
                    })), "none" !== t && ((t, n) => {
                        e.formatter.toggle(t, void 0), e.nodeChanged()
                    })("align" + t)
                };
                e.editorCommands.addCommands({
                    JustifyLeft: t("left"),
                    JustifyCenter: t("center"),
                    JustifyRight: t("right"),
                    JustifyFull: t("justify"),
                    JustifyNone: t("none")
                })
            })(e), (e => {
                const t = t => () => {
                    const n = e.selection,
                        o = n.isCollapsed() ? [e.dom.getParent(n.getNode(), e.dom.isBlock)] : n.getSelectedBlocks();
                    return $(o, (n => C(e.formatter.matchNode(n, t))))
                };
                e.editorCommands.addCommands({
                    JustifyLeft: t("alignleft"),
                    JustifyCenter: t("aligncenter"),
                    JustifyRight: t("alignright"),
                    JustifyFull: t("alignjustify")
                }, "state")
            })(e)
        }, eO = (e, t) => {
            const n = e.selection, o = e.dom;
            return /^ | $/.test(t) ? ((e, t, n, o) => {
                const r = yn(e.getRoot());
                return n = eh(r, Vi.fromRangeStart(t), o) ? n.replace(/^ /, "&nbsp;") : n.replace(/^&nbsp;/, " "), th(r, Vi.fromRangeEnd(t), o) ? n.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;") : n.replace(/&nbsp;(<br( \/)?>)?$/, " ")
            })(o, n.getRng(), t, e.schema) : t
        }, tO = (e, t) => {
            if (e.selection.isEditable()) {
                const {content: n, details: o} = (e => {
                    if ("string" != typeof e) {
                        const t = Pt.extend({paste: e.paste, data: {paste: e.paste}}, e);
                        return {content: e.content, details: t}
                    }
                    return {content: e, details: {}}
                })(t);
                wC(e, {...o, content: eO(e, n), format: "html", set: !1, selection: !0}).each((t => {
                    const n = ((e, t, n) => QC(e).editor.insertContent(t, n))(e, t.content, o);
                    xC(e, n, t), e.addVisual()
                }))
            }
        }, nO = {"font-size": "size", "font-family": "face"}, oO = Xt("font"),
        rO = e => (t, n) => I.from(n).map(yn).filter(Wt).bind((n => ((e, t, n) => Lb(yn(n), (t => (t => mo(t, e).orThunk((() => oO(t) ? xe(nO, e).bind((e => tn(t, e))) : I.none())))(t)), (e => _n(yn(t), e))))(e, t, n.dom).or(((e, t) => I.from(za.DOM.getStyle(t, e, !0)))(e, n.dom)))).getOr(""),
        sO = rO("font-size"), aO = k((e => e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",")), rO("font-family")),
        iO = e => Ou(e.getBody()).bind((e => {
            const t = e.container();
            return I.from(er(t) ? t.parentNode : t)
        })), lO = (e, t) => ((e, t) => (e => I.from(e.selection.getRng()).bind((t => {
            const n = e.getBody();
            return t.startContainer === n && 0 === t.startOffset ? I.none() : I.from(e.selection.getStart(!0))
        })))(e).orThunk(T(iO, e)).map(yn).filter(Wt).bind(t))(e, S(I.some, t)), dO = (e, t) => {
            if (/^[0-9.]+$/.test(t)) {
                const n = parseInt(t, 10);
                if (n >= 1 && n <= 7) {
                    const o = (e => Pt.explode(e.options.get("font_size_style_values")))(e),
                        r = (e => Pt.explode(e.options.get("font_size_classes")))(e);
                    return r.length > 0 ? r[n - 1] || t : o[n - 1] || t
                }
                return t
            }
            return t
        }, cO = e => {
            const t = e.split(/\s*,\s*/);
            return q(t, (e => -1 === e.indexOf(" ") || He(e, '"') || He(e, "'") ? e : `'${e}'`)).join(",")
        }, uO = (e, t) => {
            const n = e.dom, o = e.selection.getRng(), r = t ? e.selection.getStart() : e.selection.getEnd(),
                s = t ? o.startContainer : o.endContainer, a = hN(n, s);
            if (!a || !a.isContentEditable) return;
            const i = t ? po : ho, l = Il(e);
            ((e, t, n, o) => {
                const r = e.dom, s = e => r.isBlock(e) && e.parentElement === n, a = s(t) ? t : r.getParent(o, s, n);
                return I.from(a).map(yn)
            })(e, r, a, s).each((t => {
                const n = CN(e, s, t.dom, a, !1, l);
                i(t, yn(n)), e.selection.setCursorLocation(n, 0), e.dispatch("NewBlock", {newBlock: n}), dN(e, "insertParagraph")
            }))
        }, mO = e => {
            ZT(e), (e => {
                e.editorCommands.addCommands({
                    "Cut,Copy,Paste": t => {
                        const n = e.getDoc();
                        let o;
                        try {
                            n.execCommand(t)
                        } catch (e) {
                            o = !0
                        }
                        if ("paste" !== t || n.queryCommandEnabled(t) || (o = !0), o || !n.queryCommandSupported(t)) {
                            let t = e.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
                            (At.os.isMacOS() || At.os.isiOS()) && (t = t.replace(/Ctrl\+/g, "\u2318+")), e.notificationManager.open({
                                text: t,
                                type: "error"
                            })
                        }
                    }
                })
            })(e), (e => {
                e.editorCommands.addCommands({
                    mceAddUndoLevel: () => {
                        e.undoManager.add()
                    }, mceEndUndoLevel: () => {
                        e.undoManager.add()
                    }, Undo: () => {
                        e.undoManager.undo()
                    }, Redo: () => {
                        e.undoManager.redo()
                    }
                })
            })(e), (e => {
                e.editorCommands.addCommands({
                    mceSelectNodeDepth: (t, n, o) => {
                        let r = 0;
                        e.dom.getParent(e.selection.getNode(), (t => !qo(t) || r++ !== o || (e.selection.select(t), !1)), e.getBody())
                    }, mceSelectNode: (t, n, o) => {
                        e.selection.select(o)
                    }, selectAll: () => {
                        const t = e.dom.getParent(e.selection.getStart(), lr);
                        if (t) {
                            const n = e.dom.createRng();
                            n.selectNodeContents(t), e.selection.setRng(n)
                        }
                    }
                })
            })(e), (e => {
                e.editorCommands.addCommands({
                    mceCleanup: () => {
                        const t = e.selection.getBookmark();
                        e.setContent(e.getContent()), e.selection.moveToBookmark(t)
                    }, insertImage: (t, n, o) => {
                        tO(e, e.dom.createHTML("img", {src: o}))
                    }, insertHorizontalRule: () => {
                        e.execCommand("mceInsertContent", !1, "<hr>")
                    }, insertText: (t, n, o) => {
                        tO(e, e.dom.encode(o))
                    }, insertHTML: (t, n, o) => {
                        tO(e, o)
                    }, mceInsertContent: (t, n, o) => {
                        tO(e, o)
                    }, mceSetContent: (t, n, o) => {
                        e.setContent(o)
                    }, mceReplaceContent: (t, n, o) => {
                        e.execCommand("mceInsertContent", !1, o.replace(/\{\$selection\}/g, e.selection.getContent({format: "text"})))
                    }, mceNewDocument: () => {
                        e.setContent(Jd(e))
                    }
                })
            })(e), (e => {
                const t = (t, n, o) => {
                    const r = m(o) ? {href: o} : o, s = e.dom.getParent(e.selection.getNode(), "a");
                    f(r) && m(r.href) && (r.href = r.href.replace(/ /g, "%20"), s && r.href || e.formatter.remove("link"), r.href && e.formatter.apply("link", r, s))
                };
                e.editorCommands.addCommands({
                    unlink: () => {
                        if (e.selection.isEditable()) {
                            if (e.selection.isCollapsed()) {
                                const t = e.dom.getParent(e.selection.getStart(), "a");
                                return void (t && e.dom.remove(t, !0))
                            }
                            e.formatter.remove("link")
                        }
                    }, mceInsertLink: t, createLink: t
                })
            })(e), (e => {
                e.editorCommands.addCommands({
                    Indent: () => {
                        (e => {
                            R_(e, "indent")
                        })(e)
                    }, Outdent: () => {
                        A_(e)
                    }
                }), e.editorCommands.addCommands({Outdent: () => k_(e)}, "state")
            })(e), (e => {
                e.editorCommands.addCommands({
                    InsertNewBlockBefore: () => {
                        (e => {
                            uO(e, !0)
                        })(e)
                    }, InsertNewBlockAfter: () => {
                        (e => {
                            uO(e, !1)
                        })(e)
                    }
                })
            })(e), (e => {
                e.editorCommands.addCommands({
                    insertParagraph: () => {
                        ZN(ON, e)
                    }, mceInsertNewLine: (t, n, o) => {
                        eR(e, o)
                    }, InsertLineBreak: (t, n, o) => {
                        ZN(UN, e)
                    }
                })
            })(e), (e => {
                (e => {
                    e.editorCommands.addCommands({
                        "InsertUnorderedList,InsertOrderedList": t => {
                            e.getDoc().execCommand(t);
                            const n = e.dom.getParent(e.selection.getNode(), "ol,ul");
                            if (n) {
                                const t = n.parentNode;
                                if (t && /^(H[1-6]|P|ADDRESS|PRE)$/.test(t.nodeName)) {
                                    const o = e.selection.getBookmark();
                                    e.dom.split(t, n), e.selection.moveToBookmark(o)
                                }
                            }
                        }
                    })
                })(e), (e => {
                    e.editorCommands.addCommands({
                        "InsertUnorderedList,InsertOrderedList": t => {
                            const n = e.dom.getParent(e.selection.getNode(), "ul,ol");
                            return n && ("insertunorderedlist" === t && "UL" === n.tagName || "insertorderedlist" === t && "OL" === n.tagName)
                        }
                    }, "state")
                })(e)
            })(e), (e => {
                (e => {
                    const t = (t, n) => {
                        e.formatter.toggle(t, n), e.nodeChanged()
                    };
                    e.editorCommands.addCommands({
                        "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": e => {
                            t(e)
                        }, "ForeColor,HiliteColor": (e, n, o) => {
                            t(e, {value: o})
                        }, BackColor: (e, n, o) => {
                            t("hilitecolor", {value: o})
                        }, FontName: (t, n, o) => {
                            ((e, t) => {
                                const n = dO(e, t);
                                e.formatter.toggle("fontname", {value: cO(n)}), e.nodeChanged()
                            })(e, o)
                        }, FontSize: (t, n, o) => {
                            ((e, t) => {
                                e.formatter.toggle("fontsize", {value: dO(e, t)}), e.nodeChanged()
                            })(e, o)
                        }, LineHeight: (t, n, o) => {
                            ((e, t) => {
                                e.formatter.toggle("lineheight", {value: String(t)}), e.nodeChanged()
                            })(e, o)
                        }, Lang: (e, n, o) => {
                            var r;
                            t(e, {value: o.code, customValue: null !== (r = o.customCode) && void 0 !== r ? r : null})
                        }, RemoveFormat: t => {
                            e.formatter.remove(t)
                        }, mceBlockQuote: () => {
                            t("blockquote")
                        }, FormatBlock: (e, n, o) => {
                            t(m(o) ? o : "p")
                        }, mceToggleFormat: (e, n, o) => {
                            t(o)
                        }
                    })
                })(e), (e => {
                    const t = t => e.formatter.match(t);
                    e.editorCommands.addCommands({
                        "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": e => t(e),
                        mceBlockQuote: () => t("blockquote")
                    }, "state"), e.editorCommands.addQueryValueHandler("FontName", (() => (e => lO(e, (t => aO(e.getBody(), t.dom))).getOr(""))(e))), e.editorCommands.addQueryValueHandler("FontSize", (() => (e => lO(e, (t => sO(e.getBody(), t.dom))).getOr(""))(e))), e.editorCommands.addQueryValueHandler("LineHeight", (() => (e => lO(e, (t => {
                        const n = yn(e.getBody()), o = Lb(t, (e => mo(e, "line-height")), T(_n, n));
                        return o.getOrThunk((() => {
                            const e = parseFloat(co(t, "line-height")), n = parseFloat(co(t, "font-size"));
                            return String(e / n)
                        }))
                    })).getOr(""))(e)))
                })(e)
            })(e), (e => {
                e.editorCommands.addCommands({
                    mceRemoveNode: (t, n, o) => {
                        const r = null != o ? o : e.selection.getNode();
                        if (r !== e.getBody()) {
                            const t = e.selection.getBookmark();
                            e.dom.remove(r, !0), e.selection.moveToBookmark(t)
                        }
                    }, mcePrint: () => {
                        e.getWin().print()
                    }, mceFocus: (t, n, o) => {
                        ((e, t) => {
                            e.removed || (t ? Tg(e) : (e => {
                                const t = e.selection, n = e.getBody();
                                let o = t.getRng();
                                e.quirks.refreshContentEditable(), C(e.bookmark) && !Rg(e) && hg(e).each((t => {
                                    e.selection.setRng(t), o = t
                                }));
                                const r = ((e, t) => e.dom.getParent(t, (t => "true" === e.dom.getContentEditable(t))))(e, t.getNode());
                                if (r && e.dom.isChildOf(r, n)) return Ng(r), Sg(e, o), void Tg(e);
                                e.inline || (At.browser.isOpera() || Ng(n), e.getWin().focus()), (At.browser.isFirefox() || e.inline) && (Ng(n), Sg(e, o)), Tg(e)
                            })(e))
                        })(e, !0 === o)
                    }, mceToggleVisualAid: () => {
                        e.hasVisual = !e.hasVisual, e.addVisual()
                    }
                })
            })(e)
        }, fO = ["toggleview"], gO = e => H(fO, e.toLowerCase());

    class pO {
        constructor(e) {
            this.commands = {state: {}, exec: {}, value: {}}, this.editor = e
        }

        execCommand(e, t = !1, n, o) {
            const r = this.editor, s = e.toLowerCase(), a = null == o ? void 0 : o.skip_focus;
            if (r.removed) return !1;
            if ("mcefocus" !== s && (/^(mceAddUndoLevel|mceEndUndoLevel)$/i.test(s) || a ? (e => {
                hg(e).each((t => e.selection.setRng(t)))
            })(r) : r.focus()), r.dispatch("BeforeExecCommand", {
                command: e,
                ui: t,
                value: n
            }).isDefaultPrevented()) return !1;
            const i = this.commands.exec[s];
            return !!w(i) && (i(s, t, n), r.dispatch("ExecCommand", {command: e, ui: t, value: n}), !0)
        }

        queryCommandState(e) {
            if (!gO(e) && this.editor.quirks.isHidden() || this.editor.removed) return !1;
            const t = e.toLowerCase(), n = this.commands.state[t];
            return !!w(n) && n(t)
        }

        queryCommandValue(e) {
            if (!gO(e) && this.editor.quirks.isHidden() || this.editor.removed) return "";
            const t = e.toLowerCase(), n = this.commands.value[t];
            return w(n) ? n(t) : ""
        }

        addCommands(e, t = "exec") {
            const n = this.commands;
            ge(e, ((e, o) => {
                V(o.toLowerCase().split(","), (o => {
                    n[t][o] = e
                }))
            }))
        }

        addCommand(e, t, n) {
            const o = e.toLowerCase();
            this.commands.exec[o] = (e, o, r) => t.call(null != n ? n : this.editor, o, r)
        }

        queryCommandSupported(e) {
            const t = e.toLowerCase();
            return !!this.commands.exec[t]
        }

        addQueryStateHandler(e, t, n) {
            this.commands.state[e.toLowerCase()] = () => t.call(null != n ? n : this.editor)
        }

        addQueryValueHandler(e, t, n) {
            this.commands.value[e.toLowerCase()] = () => t.call(null != n ? n : this.editor)
        }
    }

    const hO = "data-mce-contenteditable", bO = (e, t, n) => {
            try {
                e.getDoc().execCommand(t, !1, String(n))
            } catch (e) {
            }
        }, vO = (e, t) => {
            e.dom.contentEditable = t ? "true" : "false"
        }, yO = e => e.readonly, CO = e => {
            e.parser.addAttributeFilter("contenteditable", (t => {
                yO(e) && V(t, (e => {
                    e.attr(hO, e.attr("contenteditable")), e.attr("contenteditable", "false")
                }))
            })), e.serializer.addAttributeFilter(hO, (t => {
                yO(e) && V(t, (e => {
                    e.attr("contenteditable", e.attr(hO))
                }))
            })), e.serializer.addTempAttr(hO)
        }, wO = ["copy"],
        xO = Pt.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel", " ");

    class EO {
        static isNative(e) {
            return !!xO[e.toLowerCase()]
        }

        constructor(e) {
            this.bindings = {}, this.settings = e || {}, this.scope = this.settings.scope || this, this.toggleEvent = this.settings.toggleEvent || L
        }

        fire(e, t) {
            return this.dispatch(e, t)
        }

        dispatch(e, t) {
            const n = e.toLowerCase(), o = _a(n, null != t ? t : {}, this.scope);
            this.settings.beforeFire && this.settings.beforeFire(o);
            const r = this.bindings[n];
            if (r) for (let e = 0, t = r.length; e < t; e++) {
                const t = r[e];
                if (!t.removed) {
                    if (t.once && this.off(n, t.func), o.isImmediatePropagationStopped()) return o;
                    if (!1 === t.func.call(this.scope, o)) return o.preventDefault(), o
                }
            }
            return o
        }

        on(e, t, n, o) {
            if (!1 === t && (t = L), t) {
                const r = {func: t, removed: !1};
                o && Pt.extend(r, o);
                const s = e.toLowerCase().split(" ");
                let a = s.length;
                for (; a--;) {
                    const e = s[a];
                    let t = this.bindings[e];
                    t || (t = [], this.toggleEvent(e, !0)), t = n ? [r, ...t] : [...t, r], this.bindings[e] = t
                }
            }
            return this
        }

        off(e, t) {
            if (e) {
                const n = e.toLowerCase().split(" ");
                let o = n.length;
                for (; o--;) {
                    const r = n[o];
                    let s = this.bindings[r];
                    if (!r) return ge(this.bindings, ((e, t) => {
                        this.toggleEvent(t, !1), delete this.bindings[t]
                    })), this;
                    if (s) {
                        if (t) {
                            const e = K(s, (e => e.func === t));
                            s = e.fail, this.bindings[r] = s, V(e.pass, (e => {
                                e.removed = !0
                            }))
                        } else s.length = 0;
                        s.length || (this.toggleEvent(e, !1), delete this.bindings[r])
                    }
                }
            } else ge(this.bindings, ((e, t) => {
                this.toggleEvent(t, !1)
            })), this.bindings = {};
            return this
        }

        once(e, t, n) {
            return this.on(e, t, n, {once: !0})
        }

        has(e) {
            e = e.toLowerCase();
            const t = this.bindings[e];
            return !(!t || 0 === t.length)
        }
    }

    const _O = e => (e._eventDispatcher || (e._eventDispatcher = new EO({
        scope: e, toggleEvent: (t, n) => {
            EO.isNative(t) && e.toggleNativeEvent && e.toggleNativeEvent(t, n)
        }
    })), e._eventDispatcher), kO = {
        fire(e, t, n) {
            return this.dispatch(e, t, n)
        }, dispatch(e, t, n) {
            const o = this;
            if (o.removed && "remove" !== e && "detach" !== e) return _a(e.toLowerCase(), null != t ? t : {}, o);
            const r = _O(o).dispatch(e, t);
            if (!1 !== n && o.parent) {
                let t = o.parent();
                for (; t && !r.isPropagationStopped();) t.dispatch(e, r, !1), t = t.parent ? t.parent() : void 0
            }
            return r
        }, on(e, t, n) {
            return _O(this).on(e, t, n)
        }, off(e, t) {
            return _O(this).off(e, t)
        }, once(e, t) {
            return _O(this).once(e, t)
        }, hasEventListeners(e) {
            return _O(this).has(e)
        }
    }, SO = za.DOM;
    let NO;
    const RO = (e, t) => {
        if ("selectionchange" === t) return e.getDoc();
        if (!e.inline && /^(?:mouse|touch|click|contextmenu|drop|dragover|dragend)/.test(t)) return e.getDoc().documentElement;
        const n = fd(e);
        return n ? (e.eventRoot || (e.eventRoot = SO.select(n)[0]), e.eventRoot) : e.getBody()
    }, AO = (e, t, n) => {
        (e => !e.hidden && !yO(e))(e) ? e.dispatch(t, n) : yO(e) && ((e, t) => {
            if ((e => "click" === e.type)(t) && !af.metaKeyPressed(t)) {
                const n = yn(t.target);
                ((e, t) => no(t, "a", (t => _n(t, yn(e.getBody())))).bind((e => tn(e, "href"))))(e, n).each((n => {
                    if (t.preventDefault(), /^#/.test(n)) {
                        const t = e.dom.select(`${n},[name="${ze(n, "#")}"]`);
                        t.length && e.selection.scrollIntoView(t[0], !0)
                    } else window.open(n, "_blank", "rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes")
                }))
            } else (e => H(wO, e.type))(t) && e.dispatch(t.type, t)
        })(e, n)
    }, TO = (e, t) => {
        if (e.delegates || (e.delegates = {}), e.delegates[t] || e.removed) return;
        const n = RO(e, t);
        if (fd(e)) {
            if (NO || (NO = {}, e.editorManager.on("removeEditor", (() => {
                e.editorManager.activeEditor || NO && (ge(NO, ((t, n) => {
                    e.dom.unbind(RO(e, n))
                })), NO = null)
            }))), NO[t]) return;
            const o = n => {
                const o = n.target, r = e.editorManager.get();
                let s = r.length;
                for (; s--;) {
                    const e = r[s].getBody();
                    (e === o || SO.isChildOf(o, e)) && AO(r[s], t, n)
                }
            };
            NO[t] = o, SO.bind(n, t, o)
        } else {
            const o = n => {
                AO(e, t, n)
            };
            SO.bind(n, t, o), e.delegates[t] = o
        }
    }, OO = {
        ...kO, bindPendingEventDelegates() {
            const e = this;
            Pt.each(e._pendingNativeEvents, (t => {
                TO(e, t)
            }))
        }, toggleNativeEvent(e, t) {
            const n = this;
            "focus" !== e && "blur" !== e && (n.removed || (t ? n.initialized ? TO(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && n.delegates && (n.dom.unbind(RO(n, e), e, n.delegates[e]), delete n.delegates[e])))
        }, unbindAllNativeEvents() {
            const e = this, t = e.getBody(), n = e.dom;
            e.delegates && (ge(e.delegates, ((t, n) => {
                e.dom.unbind(RO(e, n), n, t)
            })), delete e.delegates), !e.inline && t && n && (t.onload = null, n.unbind(e.getWin()), n.unbind(e.getDoc())), n && (n.unbind(t), n.unbind(e.getContainer()))
        }
    }, BO = e => m(e) ? {value: e.split(/[ ,]/), valid: !0} : E(e, m) ? {value: e, valid: !0} : {
        valid: !1,
        message: "The value must be a string[] or a comma/space separated string."
    }, PO = (e, t) => e + (Ge(t.message) ? "" : `. ${t.message}`), DO = e => e.valid, LO = (e, t, n = "") => {
        const o = t(e);
        return b(o) ? o ? {value: e, valid: !0} : {valid: !1, message: n} : o
    }, MO = ["design", "readonly"], IO = (e, t, n, o) => {
        const r = n[t.get()], s = n[o];
        try {
            s.activate()
        } catch (e) {
            return void console.error(`problem while activating editor mode ${o}:`, e)
        }
        r.deactivate(), r.editorReadOnly !== s.editorReadOnly && ((e, t) => {
            const n = yn(e.getBody());
            ((e, t, n) => {
                gn(e, t) && !n ? fn(e, t) : n && un(e, t)
            })(n, "mce-content-readonly", t), t ? (e.selection.controlSelection.hideResizeRect(), e._selectionOverrides.hideFakeCaret(), (e => {
                I.from(e.selection.getNode()).each((e => {
                    e.removeAttribute("data-mce-selected")
                }))
            })(e), e.readonly = !0, vO(n, !1), V(Uo(n, '*[contenteditable="true"]'), (e => {
                Jt(e, hO, "true"), vO(e, !1)
            }))) : (e.readonly = !1, e.hasEditableRoot() && vO(n, !0), V(Uo(n, `*[${hO}="true"]`), (e => {
                on(e, hO), vO(e, !0)
            })), bO(e, "StyleWithCSS", !1), bO(e, "enableInlineTableEditing", !1), bO(e, "enableObjectResizing", !1), Ag(e) && e.focus(), (e => {
                e.selection.setRng(e.selection.getRng())
            })(e), e.nodeChanged())
        })(e, s.editorReadOnly), t.set(o), ((e, t) => {
            e.dispatch("SwitchMode", {mode: t})
        })(e, o)
    }, FO = Pt.each, UO = Pt.explode, zO = {
        f1: 112,
        f2: 113,
        f3: 114,
        f4: 115,
        f5: 116,
        f6: 117,
        f7: 118,
        f8: 119,
        f9: 120,
        f10: 121,
        f11: 122,
        f12: 123
    }, jO = Pt.makeMap("alt,ctrl,shift,meta,access"), HO = e => {
        const t = {}, n = At.os.isMacOS() || At.os.isiOS();
        FO(UO(e.toLowerCase(), "+"), (e => {
            (e => e in jO)(e) ? t[e] = !0 : /^[0-9]{2,}$/.test(e) ? t.keyCode = parseInt(e, 10) : (t.charCode = e.charCodeAt(0), t.keyCode = zO[e] || e.toUpperCase().charCodeAt(0))
        }));
        const o = [t.keyCode];
        let r;
        for (r in jO) t[r] ? o.push(r) : t[r] = !1;
        return t.id = o.join(","), t.access && (t.alt = !0, n ? t.ctrl = !0 : t.shift = !0), t.meta && (n ? t.meta = !0 : (t.ctrl = !0, t.meta = !1)), t
    };

    class $O {
        constructor(e) {
            this.shortcuts = {}, this.pendingPatterns = [], this.editor = e;
            const t = this;
            e.on("keyup keypress keydown", (e => {
                !t.hasModifier(e) && !t.isFunctionKey(e) || e.isDefaultPrevented() || (FO(t.shortcuts, (n => {
                    t.matchShortcut(e, n) && (t.pendingPatterns = n.subpatterns.slice(0), "keydown" === e.type && t.executeShortcutAction(n))
                })), t.matchShortcut(e, t.pendingPatterns[0]) && (1 === t.pendingPatterns.length && "keydown" === e.type && t.executeShortcutAction(t.pendingPatterns[0]), t.pendingPatterns.shift()))
            }))
        }

        add(e, t, n, o) {
            const r = this, s = r.normalizeCommandFunc(n);
            return FO(UO(Pt.trim(e)), (e => {
                const n = r.createShortcut(e, t, s, o);
                r.shortcuts[n.id] = n
            })), !0
        }

        remove(e) {
            const t = this.createShortcut(e);
            return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0)
        }

        normalizeCommandFunc(e) {
            const t = this, n = e;
            return "string" == typeof n ? () => {
                t.editor.execCommand(n, !1, null)
            } : Pt.isArray(n) ? () => {
                t.editor.execCommand(n[0], n[1], n[2])
            } : n
        }

        createShortcut(e, t, n, o) {
            const r = Pt.map(UO(e, ">"), HO);
            return r[r.length - 1] = Pt.extend(r[r.length - 1], {
                func: n,
                scope: o || this.editor
            }), Pt.extend(r[0], {desc: this.editor.translate(t), subpatterns: r.slice(1)})
        }

        hasModifier(e) {
            return e.altKey || e.ctrlKey || e.metaKey
        }

        isFunctionKey(e) {
            return "keydown" === e.type && e.keyCode >= 112 && e.keyCode <= 123
        }

        matchShortcut(e, t) {
            return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || e.charCode && e.charCode === t.charCode) && (e.preventDefault(), !0)
        }

        executeShortcutAction(e) {
            return e.func ? e.func.call(e.scope) : null
        }
    }

    const qO = () => {
        const e = (() => {
            const e = {}, t = {}, n = {}, o = {}, r = {}, s = {}, a = {}, i = {}, l = (e, t) => (n, o) => {
                e[n.toLowerCase()] = {...o, type: t}
            };
            return {
                addButton: l(e, "button"),
                addGroupToolbarButton: l(e, "grouptoolbarbutton"),
                addToggleButton: l(e, "togglebutton"),
                addMenuButton: l(e, "menubutton"),
                addSplitButton: l(e, "splitbutton"),
                addMenuItem: l(t, "menuitem"),
                addNestedMenuItem: l(t, "nestedmenuitem"),
                addToggleMenuItem: l(t, "togglemenuitem"),
                addAutocompleter: l(n, "autocompleter"),
                addContextMenu: l(r, "contextmenu"),
                addContextToolbar: l(s, "contexttoolbar"),
                addContextForm: l(s, "contextform"),
                addSidebar: l(a, "sidebar"),
                addView: l(i, "views"),
                addIcon: (e, t) => o[e.toLowerCase()] = t,
                getAll: () => ({
                    buttons: e,
                    menuItems: t,
                    icons: o,
                    popups: n,
                    contextMenus: r,
                    contextToolbars: s,
                    sidebars: a,
                    views: i
                })
            }
        })();
        return {
            addAutocompleter: e.addAutocompleter,
            addButton: e.addButton,
            addContextForm: e.addContextForm,
            addContextMenu: e.addContextMenu,
            addContextToolbar: e.addContextToolbar,
            addIcon: e.addIcon,
            addMenuButton: e.addMenuButton,
            addMenuItem: e.addMenuItem,
            addNestedMenuItem: e.addNestedMenuItem,
            addSidebar: e.addSidebar,
            addSplitButton: e.addSplitButton,
            addToggleButton: e.addToggleButton,
            addGroupToolbarButton: e.addGroupToolbarButton,
            addToggleMenuItem: e.addToggleMenuItem,
            addView: e.addView,
            getAll: e.getAll
        }
    }, VO = za.DOM, WO = Pt.extend, KO = Pt.each;

    class YO {
        constructor(e, t, n) {
            this.plugins = {}, this.contentCSS = [], this.contentStyles = [], this.loadedCSS = {}, this.isNotDirty = !1, this.composing = !1, this.destroyed = !1, this.hasHiddenInput = !1, this.iframeElement = null, this.initialized = !1, this.readonly = !1, this.removed = !1, this.startContent = "", this._pendingNativeEvents = [], this._skinLoaded = !1, this._editableRoot = !0, this.editorManager = n, this.documentBaseUrl = n.documentBaseURL, WO(this, OO);
            const o = this;
            this.id = e, this.hidden = !1;
            const r = ((e, t) => JT(VT || WT, VT, t, e, t))(n.defaultOptions, t);
            this.options = ((e, t) => {
                const n = {}, o = {}, r = (e, t, n) => {
                    const r = LO(t, n);
                    return DO(r) ? (o[e] = r.value, !0) : (console.warn(PO(`Invalid value passed for the ${e} option`, r)), !1)
                }, s = e => Ee(n, e);
                return {
                    register: (e, s) => {
                        const a = (e => m(e.processor))(s) ? (e => {
                            const t = (() => {
                                switch (e) {
                                    case"array":
                                        return p;
                                    case"boolean":
                                        return b;
                                    case"function":
                                        return w;
                                    case"number":
                                        return x;
                                    case"object":
                                        return f;
                                    case"string":
                                        return m;
                                    case"string[]":
                                        return BO;
                                    case"object[]":
                                        return e => E(e, f);
                                    case"regexp":
                                        return e => u(e, RegExp);
                                    default:
                                        return M
                                }
                            })();
                            return n => LO(n, t, `The value must be a ${e}.`)
                        })(s.processor) : s.processor, i = ((e, t, n) => {
                            if (!v(t)) {
                                const o = LO(t, n);
                                if (DO(o)) return o.value;
                                console.error(PO(`Invalid default value passed for the "${e}" option`, o))
                            }
                        })(e, s.default, a);
                        n[e] = {
                            ...s,
                            default: i,
                            processor: a
                        }, xe(o, e).orThunk((() => xe(t, e))).each((t => r(e, t, a)))
                    },
                    isRegistered: s,
                    get: e => xe(o, e).orThunk((() => xe(n, e).map((e => e.default)))).getOrUndefined(),
                    set: (e, t) => {
                        if (s(e)) {
                            const o = n[e];
                            return o.immutable ? (console.error(`"${e}" is an immutable option and cannot be updated`), !1) : r(e, t, o.processor)
                        }
                        return console.warn(`"${e}" is not a registered option. Ensure the option has been registered before setting a value.`), !1
                    },
                    unset: e => {
                        const t = s(e);
                        return t && delete o[e], t
                    },
                    isSet: e => Ee(o, e)
                }
            })(0, r), (e => {
                const t = e.options.register;
                t("id", {
                    processor: "string",
                    default: e.id
                }), t("selector", {processor: "string"}), t("target", {processor: "object"}), t("suffix", {processor: "string"}), t("cache_suffix", {processor: "string"}), t("base_url", {processor: "string"}), t("referrer_policy", {
                    processor: "string",
                    default: ""
                }), t("language_load", {processor: "boolean", default: !0}), t("inline", {
                    processor: "boolean",
                    default: !1
                }), t("iframe_attrs", {processor: "object", default: {}}), t("doctype", {
                    processor: "string",
                    default: "<!DOCTYPE html>"
                }), t("document_base_url", {
                    processor: "string",
                    default: e.documentBaseUrl
                }), t("body_id", {processor: Al(e, "tinymce"), default: "tinymce"}), t("body_class", {
                    processor: Al(e),
                    default: ""
                }), t("content_security_policy", {
                    processor: "string",
                    default: ""
                }), t("br_in_pre", {processor: "boolean", default: !0}), t("forced_root_block", {
                    processor: e => {
                        const t = m(e) && Ye(e);
                        return t ? {value: e, valid: t} : {valid: !1, message: "Must be a non-empty string."}
                    }, default: "p"
                }), t("forced_root_block_attrs", {
                    processor: "object",
                    default: {}
                }), t("newline_behavior", {
                    processor: e => {
                        const t = H(["block", "linebreak", "invert", "default"], e);
                        return t ? {value: e, valid: t} : {
                            valid: !1,
                            message: "Must be one of: block, linebreak, invert or default."
                        }
                    }, default: "default"
                }), t("br_newline_selector", {
                    processor: "string",
                    default: ".mce-toc h2,figcaption,caption"
                }), t("no_newline_selector", {
                    processor: "string",
                    default: ""
                }), t("keep_styles", {
                    processor: "boolean",
                    default: !0
                }), t("end_container_on_empty_block", {
                    processor: e => b(e) || m(e) ? {
                        valid: !0,
                        value: e
                    } : {valid: !1, message: "Must be boolean or a string"}, default: "blockquote"
                }), t("font_size_style_values", {
                    processor: "string",
                    default: "xx-small,x-small,small,medium,large,x-large,xx-large"
                }), t("font_size_legacy_values", {
                    processor: "string",
                    default: "xx-small,small,medium,large,x-large,xx-large,300%"
                }), t("font_size_classes", {
                    processor: "string",
                    default: ""
                }), t("automatic_uploads", {
                    processor: "boolean",
                    default: !0
                }), t("images_reuse_filename", {
                    processor: "boolean",
                    default: !1
                }), t("images_replace_blob_uris", {processor: "boolean", default: !0}), t("icons", {
                    processor: "string",
                    default: ""
                }), t("icons_url", {processor: "string", default: ""}), t("images_upload_url", {
                    processor: "string",
                    default: ""
                }), t("images_upload_base_path", {
                    processor: "string",
                    default: ""
                }), t("images_upload_credentials", {
                    processor: "boolean",
                    default: !1
                }), t("images_upload_handler", {processor: "function"}), t("language", {
                    processor: "string",
                    default: "en"
                }), t("language_url", {processor: "string", default: ""}), t("entity_encoding", {
                    processor: "string",
                    default: "named"
                }), t("indent", {processor: "boolean", default: !0}), t("indent_before", {
                    processor: "string",
                    default: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,details,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist"
                }), t("indent_after", {
                    processor: "string",
                    default: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,details,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist"
                }), t("indent_use_margin", {processor: "boolean", default: !1}), t("indentation", {
                    processor: "string",
                    default: "40px"
                }), t("content_css", {
                    processor: e => {
                        const t = !1 === e || m(e) || E(e, m);
                        return t ? m(e) ? {value: q(e.split(","), Ve), valid: t} : p(e) ? {
                            value: e,
                            valid: t
                        } : !1 === e ? {value: [], valid: t} : {value: e, valid: t} : {
                            valid: !1,
                            message: "Must be false, a string or an array of strings."
                        }
                    }, default: kd(e) ? [] : ["default"]
                }), t("content_style", {processor: "string"}), t("content_css_cors", {
                    processor: "boolean",
                    default: !1
                }), t("font_css", {
                    processor: e => {
                        const t = m(e) || E(e, m);
                        return t ? {value: p(e) ? e : q(e.split(","), Ve), valid: t} : {
                            valid: !1,
                            message: "Must be a string or an array of strings."
                        }
                    }, default: []
                }), t("inline_boundaries", {
                    processor: "boolean",
                    default: !0
                }), t("inline_boundaries_selector", {
                    processor: "string",
                    default: "a[href],code,span.mce-annotation"
                }), t("object_resizing", {
                    processor: e => {
                        const t = b(e) || m(e);
                        return t ? !1 === e || El.isiPhone() || El.isiPad() ? {
                            value: "",
                            valid: t
                        } : {value: !0 === e ? "table,img,figure.image,div,video,iframe" : e, valid: t} : {
                            valid: !1,
                            message: "Must be boolean or a string"
                        }
                    }, default: !_l
                }), t("resize_img_proportional", {
                    processor: "boolean",
                    default: !0
                }), t("event_root", {processor: "object"}), t("service_message", {processor: "string"}), t("theme", {
                    processor: e => !1 === e || m(e) || w(e),
                    default: "silver"
                }), t("theme_url", {processor: "string"}), t("formats", {processor: "object"}), t("format_empty_lines", {
                    processor: "boolean",
                    default: !1
                }), t("format_noneditable_selector", {
                    processor: "string",
                    default: ""
                }), t("preview_styles", {
                    processor: e => {
                        const t = !1 === e || m(e);
                        return t ? {value: !1 === e ? "" : e, valid: t} : {
                            valid: !1,
                            message: "Must be false or a string"
                        }
                    },
                    default: "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"
                }), t("custom_ui_selector", {
                    processor: "string",
                    default: ""
                }), t("hidden_input", {processor: "boolean", default: !0}), t("submit_patch", {
                    processor: "boolean",
                    default: !0
                }), t("encoding", {processor: "string"}), t("add_form_submit_trigger", {
                    processor: "boolean",
                    default: !0
                }), t("add_unload_trigger", {
                    processor: "boolean",
                    default: !0
                }), t("custom_undo_redo_levels", {
                    processor: "number",
                    default: 0
                }), t("disable_nodechange", {processor: "boolean", default: !1}), t("readonly", {
                    processor: "boolean",
                    default: !1
                }), t("editable_root", {processor: "boolean", default: !0}), t("plugins", {
                    processor: "string[]",
                    default: []
                }), t("external_plugins", {processor: "object"}), t("forced_plugins", {processor: "string[]"}), t("model", {
                    processor: "string",
                    default: e.hasPlugin("rtc") ? "plugin" : "dom"
                }), t("model_url", {processor: "string"}), t("block_unsupported_drop", {
                    processor: "boolean",
                    default: !0
                }), t("visual", {processor: "boolean", default: !0}), t("visual_table_class", {
                    processor: "string",
                    default: "mce-item-table"
                }), t("visual_anchor_class", {
                    processor: "string",
                    default: "mce-item-anchor"
                }), t("iframe_aria_text", {
                    processor: "string",
                    default: "Rich Text Area. Press ALT-0 for help."
                }), t("setup", {processor: "function"}), t("init_instance_callback", {processor: "function"}), t("url_converter", {
                    processor: "function",
                    default: e.convertURL
                }), t("url_converter_scope", {
                    processor: "object",
                    default: e
                }), t("urlconverter_callback", {processor: "function"}), t("allow_conditional_comments", {
                    processor: "boolean",
                    default: !1
                }), t("allow_html_data_urls", {
                    processor: "boolean",
                    default: !1
                }), t("allow_svg_data_urls", {processor: "boolean"}), t("allow_html_in_named_anchor", {
                    processor: "boolean",
                    default: !1
                }), t("allow_script_urls", {
                    processor: "boolean",
                    default: !1
                }), t("allow_unsafe_link_target", {
                    processor: "boolean",
                    default: !1
                }), t("convert_fonts_to_spans", {
                    processor: "boolean",
                    default: !0,
                    deprecated: !0
                }), t("fix_list_elements", {
                    processor: "boolean",
                    default: !1
                }), t("preserve_cdata", {
                    processor: "boolean",
                    default: !1
                }), t("remove_trailing_brs", {
                    processor: "boolean",
                    default: !0
                }), t("pad_empty_with_br", {
                    processor: "boolean",
                    default: !1
                }), t("inline_styles", {
                    processor: "boolean",
                    default: !0,
                    deprecated: !0
                }), t("element_format", {
                    processor: "string",
                    default: "html"
                }), t("entities", {processor: "string"}), t("schema", {
                    processor: "string",
                    default: "html5"
                }), t("convert_urls", {processor: "boolean", default: !0}), t("relative_urls", {
                    processor: "boolean",
                    default: !0
                }),t("remove_script_host", {
                    processor: "boolean",
                    default: !0
                }),t("custom_elements", {processor: "string"}),t("extended_valid_elements", {processor: "string"}),t("invalid_elements", {processor: "string"}),t("invalid_styles", {processor: Rl}),t("valid_children", {processor: "string"}),t("valid_classes", {processor: Rl}),t("valid_elements", {processor: "string"}),t("valid_styles", {processor: Rl}),t("verify_html", {
                    processor: "boolean",
                    default: !0
                }),t("auto_focus", {processor: e => m(e) || !0 === e}),t("browser_spellcheck", {
                    processor: "boolean",
                    default: !1
                }),t("protect", {processor: "array"}),t("images_file_types", {
                    processor: "string",
                    default: "jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp"
                }),t("deprecation_warnings", {
                    processor: "boolean",
                    default: !0
                }),t("a11y_advanced_options", {
                    processor: "boolean",
                    default: !1
                }),t("api_key", {processor: "string"}),t("paste_block_drop", {
                    processor: "boolean",
                    default: !1
                }),t("paste_data_images", {
                    processor: "boolean",
                    default: !0
                }),t("paste_preprocess", {processor: "function"}),t("paste_postprocess", {processor: "function"}),t("paste_webkit_styles", {
                    processor: "string",
                    default: "none"
                }),t("paste_remove_styles_if_webkit", {
                    processor: "boolean",
                    default: !0
                }),t("paste_merge_formats", {processor: "boolean", default: !0}),t("smart_paste", {
                    processor: "boolean",
                    default: !0
                }),t("paste_as_text", {processor: "boolean", default: !1}),t("paste_tab_spaces", {
                    processor: "number",
                    default: 4
                }),t("text_patterns", {
                    processor: e => E(e, f) || !1 === e ? {
                        value: xl(!1 === e ? [] : e),
                        valid: !0
                    } : {valid: !1, message: "Must be an array of objects or false."},
                    default: [{start: "*", end: "*", format: "italic"}, {
                        start: "**",
                        end: "**",
                        format: "bold"
                    }, {start: "#", format: "h1"}, {start: "##", format: "h2"}, {
                        start: "###",
                        format: "h3"
                    }, {start: "####", format: "h4"}, {start: "#####", format: "h5"}, {
                        start: "######",
                        format: "h6"
                    }, {start: "1. ", cmd: "InsertOrderedList"}, {
                        start: "* ",
                        cmd: "InsertUnorderedList"
                    }, {start: "- ", cmd: "InsertUnorderedList"}]
                }),t("text_patterns_lookup", {
                    processor: e => {
                        return w(e) ? {
                            value: (t = e, e => {
                                const n = t(e);
                                return xl(n)
                            }), valid: !0
                        } : {valid: !1, message: "Must be a single function"};
                        var t
                    }, default: e => []
                }),t("noneditable_class", {
                    processor: "string",
                    default: "mceNonEditable"
                }),t("editable_class", {
                    processor: "string",
                    default: "mceEditable"
                }),t("noneditable_regexp", {
                    processor: e => E(e, Sl) ? {value: e, valid: !0} : Sl(e) ? {
                        value: [e],
                        valid: !0
                    } : {valid: !1, message: "Must be a RegExp or an array of RegExp."}, default: []
                }),t("table_tab_navigation", {
                    processor: "boolean",
                    default: !0
                }),t("highlight_on_focus", {
                    processor: "boolean",
                    default: !1
                }),t("xss_sanitization", {
                    processor: "boolean",
                    default: !0
                }),t("details_initial_state", {
                    processor: e => {
                        const t = H(["inherited", "collapsed", "expanded"], e);
                        return t ? {value: e, valid: t} : {
                            valid: !1,
                            message: "Must be one of: inherited, collapsed, or expanded."
                        }
                    }, default: "inherited"
                }),t("details_serialized_state", {
                    processor: e => {
                        const t = H(["inherited", "collapsed", "expanded"], e);
                        return t ? {value: e, valid: t} : {
                            valid: !1,
                            message: "Must be one of: inherited, collapsed, or expanded."
                        }
                    }, default: "inherited"
                }),t("init_content_sync", {
                    processor: "boolean",
                    default: !1
                }),t("newdocument_content", {processor: "string", default: ""}),t("force_hex_color", {
                    processor: e => {
                        const t = ["always", "rgb_only", "off"], n = H(t, e);
                        return n ? {value: e, valid: n} : {valid: !1, message: `Must be one of: ${t.join(", ")}.`}
                    }, default: "off"
                }),t("sandbox_iframes", {
                    processor: "boolean",
                    default: !1
                }),t("convert_unsafe_embeds", {processor: "boolean", default: !1}),e.on("ScriptsLoaded", (() => {
                    t("directionality", {
                        processor: "string",
                        default: Ka.isRtl() ? "rtl" : void 0
                    }), t("placeholder", {processor: "string", default: kl.getAttrib(e.getElement(), "placeholder")})
                }))
            })(o);
            const s = this.options.get;
            s("deprecation_warnings") && ((e, t) => {
                ((e, t) => {
                    const n = gw(e), o = bw(t), r = o.length > 0, s = n.length > 0, a = "mobile" === t.theme;
                    if (r || s || a) {
                        const e = "\n- ", t = a ? `\n\nThemes:${e}mobile` : "",
                            i = r ? `\n\nPlugins:${e}${o.join(e)}` : "", l = s ? `\n\nOptions:${e}${n.join(e)}` : "";
                        console.warn("The following deprecated features are currently enabled and have been removed in TinyMCE 6.0. These features will no longer work and should be removed from the TinyMCE configuration. See https://www.tiny.cloud/docs/tinymce/6/migration-from-5x/ for more information." + t + i + l)
                    }
                })(e, t), ((e, t) => {
                    const n = pw(e), o = vw(t), r = o.length > 0, s = n.length > 0;
                    if (r || s) {
                        const e = "\n- ", t = r ? `\n\nPlugins:${e}${o.map(yw).join(e)}` : "",
                            a = s ? `\n\nOptions:${e}${n.join(e)}` : "";
                        console.warn("The following deprecated features are currently enabled but will be removed soon." + t + a)
                    }
                })(e, t)
            })(t, r);
            const a = s("suffix");
            a && (n.suffix = a), this.suffix = n.suffix;
            const i = s("base_url");
            i && n._setBaseUrl(i), this.baseUri = n.baseURI;
            const l = ed(o);
            l && (Ha.ScriptLoader._setReferrerPolicy(l), za.DOM.styleSheetLoader._setReferrerPolicy(l));
            const d = Dd(o);
            C(d) && za.DOM.styleSheetLoader._setContentCssCors(d), Ya.languageLoad = s("language_load"), Ya.baseURL = n.baseURL, this.setDirty(!1), this.documentBaseURI = new oC(Bl(o), {base_uri: this.baseUri}), this.baseURI = this.baseUri, this.inline = kd(o), this.hasVisual = Fd(o), this.shortcuts = new $O(this), this.editorCommands = new pO(this), mO(this);
            const c = s("cache_suffix");
            c && (At.cacheSuffix = c.replace(/^[\?\&]+/, "")), this.ui = {
                registry: qO(),
                styleSheetLoader: void 0,
                show: _,
                hide: _,
                setEnabled: _,
                isEnabled: M
            }, this.mode = (e => {
                const t = $a("design"), n = $a({
                    design: {activate: _, deactivate: _, editorReadOnly: !1},
                    readonly: {activate: _, deactivate: _, editorReadOnly: !0}
                });
                return (e => {
                    e.serializer ? CO(e) : e.on("PreInit", (() => {
                        CO(e)
                    }))
                })(e), (e => {
                    e.on("ShowCaret", (t => {
                        yO(e) && t.preventDefault()
                    })), e.on("ObjectSelected", (t => {
                        yO(e) && t.preventDefault()
                    }))
                })(e), {
                    isReadOnly: () => yO(e), set: o => ((e, t, n, o) => {
                        if (o !== n.get()) {
                            if (!Ee(t, o)) throw new Error(`Editor mode '${o}' is invalid`);
                            e.initialized ? IO(e, n, t, o) : e.on("init", (() => IO(e, n, t, o)))
                        }
                    })(e, n.get(), t, o), get: () => t.get(), register: (e, t) => {
                        n.set(((e, t, n) => {
                            if (H(MO, t)) throw new Error(`Cannot override default mode ${t}`);
                            return {
                                ...e, [t]: {
                                    ...n, deactivate: () => {
                                        try {
                                            n.deactivate()
                                        } catch (e) {
                                            console.error(`problem while deactivating editor mode ${t}:`, e)
                                        }
                                    }
                                }
                            }
                        })(n.get(), e, t))
                    }
                }
            })(o), n.dispatch("SetupEditor", {editor: this});
            const g = Hd(o);
            w(g) && g.call(o, o)
        }

        render() {
            (e => {
                const t = e.id;
                Ka.setCode(td(e));
                const n = () => {
                    zT.unbind(window, "ready", n), e.render()
                };
                if (!Ta.Event.domLoaded) return void zT.bind(window, "ready", n);
                if (!e.getElement()) return;
                const o = yn(e.getElement()), r = rn(o);
                e.on("remove", (() => {
                    W(o.dom.attributes, (e => on(o, e.name))), Zt(o, r)
                })), e.ui.styleSheetLoader = ((e, t) => Is.forElement(e, {
                    contentCssCors: Dd(t),
                    referrerPolicy: ed(t)
                }))(o, e), kd(e) ? e.inline = !0 : (e.orgVisibility = e.getElement().style.visibility, e.getElement().style.visibility = "hidden");
                const s = e.getElement().form || zT.getParent(t, "form");
                s && (e.formElement = s, Sd(e) && !Zo(e.getElement()) && (zT.insertAfter(zT.create("input", {
                    type: "hidden",
                    name: t
                }), t), e.hasHiddenInput = !0), e.formEventDelegate = t => {
                    e.dispatch(t.type, t)
                }, zT.bind(s, "submit reset", e.formEventDelegate), e.on("reset", (() => {
                    e.resetContent()
                })), !Nd(e) || s.submit.nodeType || s.submit.length || s._mceOldSubmit || (s._mceOldSubmit = s.submit, s.submit = () => (e.editorManager.triggerSave(), e.setDirty(!1), s._mceOldSubmit(s)))), e.windowManager = Pw(e), e.notificationManager = Tw(e), (e => "xml" === e.options.get("encoding"))(e) && e.on("GetContent", (e => {
                    e.save && (e.content = zT.encode(e.content))
                })), Rd(e) && e.on("submit", (() => {
                    e.initialized && e.save()
                })), Ad(e) && (e._beforeUnload = () => {
                    !e.initialized || e.destroyed || e.isHidden() || e.save({
                        format: "raw",
                        no_events: !0,
                        set_dirty: !1
                    })
                }, e.editorManager.on("BeforeUnload", e._beforeUnload)), e.editorManager.add(e), $T(e, e.suffix)
            })(this)
        }

        focus(e) {
            this.execCommand("mceFocus", !1, e)
        }

        hasFocus() {
            return Rg(this)
        }

        translate(e) {
            return Ka.translate(e)
        }

        getParam(e, t, n) {
            const o = this.options;
            return o.isRegistered(e) || (C(n) ? o.register(e, {processor: n, default: t}) : o.register(e, {
                processor: M,
                default: t
            })), o.isSet(e) || v(t) ? o.get(e) : t
        }

        hasPlugin(e, t) {
            return !(!H(Ld(this), e) || t && void 0 === Ow.get(e))
        }

        nodeChanged(e) {
            this._nodeChangeDispatcher.nodeChanged(e)
        }

        addCommand(e, t, n) {
            this.editorCommands.addCommand(e, t, n)
        }

        addQueryStateHandler(e, t, n) {
            this.editorCommands.addQueryStateHandler(e, t, n)
        }

        addQueryValueHandler(e, t, n) {
            this.editorCommands.addQueryValueHandler(e, t, n)
        }

        addShortcut(e, t, n, o) {
            this.shortcuts.add(e, t, n, o)
        }

        execCommand(e, t, n, o) {
            return this.editorCommands.execCommand(e, t, n, o)
        }

        queryCommandState(e) {
            return this.editorCommands.queryCommandState(e)
        }

        queryCommandValue(e) {
            return this.editorCommands.queryCommandValue(e)
        }

        queryCommandSupported(e) {
            return this.editorCommands.queryCommandSupported(e)
        }

        show() {
            const e = this;
            e.hidden && (e.hidden = !1, e.inline ? e.getBody().contentEditable = "true" : (VO.show(e.getContainer()), VO.hide(e.id)), e.load(), e.dispatch("show"))
        }

        hide() {
            const e = this;
            e.hidden || (e.save(), e.inline ? (e.getBody().contentEditable = "false", e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (VO.hide(e.getContainer()), VO.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.dispatch("hide"))
        }

        isHidden() {
            return this.hidden
        }

        setProgressState(e, t) {
            this.dispatch("ProgressState", {state: e, time: t})
        }

        load(e = {}) {
            const t = this, n = t.getElement();
            if (t.removed) return "";
            if (n) {
                const o = {...e, load: !0}, r = Zo(n) ? n.value : n.innerHTML, s = t.setContent(r, o);
                return o.no_events || t.dispatch("LoadContent", {...o, element: n}), s
            }
            return ""
        }

        save(e = {}) {
            const t = this;
            let n = t.getElement();
            if (!n || !t.initialized || t.removed) return "";
            const o = {...e, save: !0, element: n};
            let r = t.getContent(o);
            const s = {...o, content: r};
            if (s.no_events || t.dispatch("SaveContent", s), "raw" === s.format && t.dispatch("RawSaveContent", s), r = s.content, Zo(n)) n.value = r; else {
                !e.is_removing && t.inline || (n.innerHTML = r);
                const o = VO.getParent(t.id, "form");
                o && KO(o.elements, (e => e.name !== t.id || (e.value = r, !1)))
            }
            return s.element = o.element = n = null, !1 !== s.set_dirty && t.setDirty(!1), r
        }

        setContent(e, t) {
            return lw(this, e, t)
        }

        getContent(e) {
            return ((e, t = {}) => {
                const n = ((e, t) => ({...e, format: t, get: !0, getInner: !0}))(t, t.format ? t.format : "html");
                return yC(e, n).fold(R, (t => {
                    const n = ((e, t) => QC(e).editor.getContent(t))(e, t);
                    return CC(e, n, t)
                }))
            })(this, e)
        }

        insertContent(e, t) {
            t && (e = WO({content: e}, t)), this.execCommand("mceInsertContent", !1, e)
        }

        resetContent(e) {
            void 0 === e ? lw(this, this.startContent, {format: "raw"}) : lw(this, e), this.undoManager.reset(), this.setDirty(!1), this.nodeChanged()
        }

        isDirty() {
            return !this.isNotDirty
        }

        setDirty(e) {
            const t = !this.isNotDirty;
            this.isNotDirty = !e, e && e !== t && this.dispatch("dirty")
        }

        getContainer() {
            const e = this;
            return e.container || (e.container = e.editorContainer || VO.get(e.id + "_parent")), e.container
        }

        getContentAreaContainer() {
            return this.contentAreaContainer
        }

        getElement() {
            return this.targetElm || (this.targetElm = VO.get(this.id)), this.targetElm
        }

        getWin() {
            const e = this;
            if (!e.contentWindow) {
                const t = e.iframeElement;
                t && (e.contentWindow = t.contentWindow)
            }
            return e.contentWindow
        }

        getDoc() {
            const e = this;
            if (!e.contentDocument) {
                const t = e.getWin();
                t && (e.contentDocument = t.document)
            }
            return e.contentDocument
        }

        getBody() {
            var e, t;
            const n = this.getDoc();
            return null !== (t = null !== (e = this.bodyElement) && void 0 !== e ? e : null == n ? void 0 : n.body) && void 0 !== t ? t : null
        }

        convertURL(e, t, n) {
            const o = this, r = o.options.get, s = qd(o);
            if (w(s)) return s.call(o, e, n, !0, t);
            if (!r("convert_urls") || "link" === n || f(n) && "LINK" === n.nodeName || 0 === e.indexOf("file:") || 0 === e.length) return e;
            const a = new oC(e);
            return "http" !== a.protocol && "https" !== a.protocol && "" !== a.protocol ? e : r("relative_urls") ? o.documentBaseURI.toRelative(e) : e = o.documentBaseURI.toAbsolute(e, r("remove_script_host"))
        }

        addVisual(e) {
            ((e, t) => {
                ((e, t) => {
                    JC(e).editor.addVisual(t)
                })(e, t)
            })(this, e)
        }

        setEditableRoot(e) {
            ((e, t) => {
                e._editableRoot !== t && (e._editableRoot = t, e.readonly || (e.getBody().contentEditable = String(e.hasEditableRoot()), e.nodeChanged()), ((e, t) => {
                    e.dispatch("EditableRootStateChange", {state: t})
                })(e, t))
            })(this, e)
        }

        hasEditableRoot() {
            return this._editableRoot
        }

        remove() {
            (e => {
                if (!e.removed) {
                    const {_selectionOverrides: t, editorUpload: n} = e, o = e.getBody(), r = e.getElement();
                    o && e.save({is_removing: !0}), e.removed = !0, e.unbindAllNativeEvents(), e.hasHiddenInput && C(null == r ? void 0 : r.nextSibling) && Cw.remove(r.nextSibling), (e => {
                        e.dispatch("remove")
                    })(e), e.editorManager.remove(e), !e.inline && o && (e => {
                        Cw.setStyle(e.id, "display", e.orgDisplay)
                    })(e), (e => {
                        e.dispatch("detach")
                    })(e), Cw.remove(e.getContainer()), ww(t), ww(n), e.destroy()
                }
            })(this)
        }

        destroy(e) {
            ((e, t) => {
                const {selection: n, dom: o} = e;
                e.destroyed || (t || e.removed ? (t || (e.editorManager.off("beforeunload", e._beforeUnload), e.theme && e.theme.destroy && e.theme.destroy(), ww(n), ww(o)), (e => {
                    const t = e.formElement;
                    t && (t._mceOldSubmit && (t.submit = t._mceOldSubmit, delete t._mceOldSubmit), Cw.unbind(t, "submit reset", e.formEventDelegate))
                })(e), (e => {
                    const t = e;
                    t.contentAreaContainer = t.formElement = t.container = t.editorContainer = null, t.bodyElement = t.contentDocument = t.contentWindow = null, t.iframeElement = t.targetElm = null;
                    const n = e.selection;
                    if (n) {
                        const e = n.dom;
                        t.selection = n.win = n.dom = e.doc = null
                    }
                })(e), e.destroyed = !0) : e.remove())
            })(this, e)
        }

        uploadImages() {
            return this.editorUpload.uploadImages()
        }

        _scanForImages() {
            return this.editorUpload.scanForImages()
        }
    }

    const GO = za.DOM, XO = Pt.each;
    let QO, JO = !1, ZO = [];
    const eB = e => {
        const t = e.type;
        XO(rB.get(), (n => {
            switch (t) {
                case"scroll":
                    n.dispatch("ScrollWindow", e);
                    break;
                case"resize":
                    n.dispatch("ResizeWindow", e)
            }
        }))
    }, tB = e => {
        if (e !== JO) {
            const t = za.DOM;
            e ? (t.bind(window, "resize", eB), t.bind(window, "scroll", eB)) : (t.unbind(window, "resize", eB), t.unbind(window, "scroll", eB)), JO = e
        }
    }, nB = e => {
        const t = ZO;
        return ZO = Y(ZO, (t => e !== t)), rB.activeEditor === e && (rB.activeEditor = ZO.length > 0 ? ZO[0] : null), rB.focusedEditor === e && (rB.focusedEditor = null), t.length !== ZO.length
    }, oB = "CSS1Compat" !== document.compatMode, rB = {
        ...kO,
        baseURI: null,
        baseURL: null,
        defaultOptions: {},
        documentBaseURL: null,
        suffix: null,
        majorVersion: "6",
        minorVersion: "8.3",
        releaseDate: "2024-02-08",
        i18n: Ka,
        activeEditor: null,
        focusedEditor: null,
        setup() {
            const e = this;
            let t = "", n = "", o = oC.getDocumentBaseUrl(document.location);
            /^[^:]+:\/\/\/?[^\/]+\//.test(o) && (o = o.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(o) || (o += "/"));
            const r = window.tinymce || window.tinyMCEPreInit;
            if (r) t = r.base || r.baseURL, n = r.suffix; else {
                const e = document.getElementsByTagName("script");
                for (let o = 0; o < e.length; o++) {
                    const r = e[o].src || "";
                    if ("" === r) continue;
                    const s = r.substring(r.lastIndexOf("/"));
                    if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(r)) {
                        -1 !== s.indexOf(".min") && (n = ".min"), t = r.substring(0, r.lastIndexOf("/"));
                        break
                    }
                }
                if (!t && document.currentScript) {
                    const e = document.currentScript.src;
                    -1 !== e.indexOf(".min") && (n = ".min"), t = e.substring(0, e.lastIndexOf("/"))
                }
            }
            var s;
            e.baseURL = new oC(o).toAbsolute(t), e.documentBaseURL = o, e.baseURI = new oC(e.baseURL), e.suffix = n, (s = e).on("AddEditor", T(_g, s)), s.on("RemoveEditor", T(kg, s))
        },
        overrideDefaults(e) {
            const t = e.base_url;
            t && this._setBaseUrl(t);
            const n = e.suffix;
            n && (this.suffix = n), this.defaultOptions = e;
            const o = e.plugin_base_urls;
            void 0 !== o && ge(o, ((e, t) => {
                Ya.PluginManager.urls[t] = e
            }))
        },
        init(e) {
            const t = this;
            let n;
            const o = Pt.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu", " ");
            let r = e => {
                n = e
            };
            const s = () => {
                let n = 0;
                const a = [];
                let i;
                GO.unbind(window, "ready", s), (n => {
                    const o = e.onpageload;
                    o && o.apply(t, [])
                })(), i = ((e, t) => {
                    const n = [], o = w(t) ? e => $(n, (n => t(n, e))) : e => H(n, e);
                    for (let t = 0, r = e.length; t < r; t++) {
                        const r = e[t];
                        o(r) || n.push(r)
                    }
                    return n
                })((e => At.browser.isIE() || At.browser.isEdge() ? (Fw("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tiny.cloud/docs/tinymce/6/support/#supportedwebbrowsers"), []) : oB ? (Fw("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."), []) : m(e.selector) ? GO.select(e.selector) : C(e.target) ? [e.target] : [])(e)), Pt.each(i, (e => {
                    var n;
                    (n = t.get(e.id)) && n.initialized && !(n.getContainer() || n.getBody()).parentNode && (nB(n), n.unbindAllNativeEvents(), n.destroy(!0), n.removed = !0)
                })), i = Pt.grep(i, (e => !t.get(e.id))), 0 === i.length ? r([]) : XO(i, (s => {
                    ((e, t) => e.inline && t.tagName.toLowerCase() in o)(e, s) ? Fw("Could not initialize inline editor on invalid inline target element", s) : ((e, o, s) => {
                        const l = new YO(e, o, t);
                        a.push(l), l.on("init", (() => {
                            ++n === i.length && r(a)
                        })), l.targetElm = l.targetElm || s, l.render()
                    })((e => {
                        let t = e.id;
                        return t || (t = xe(e, "name").filter((e => !GO.get(e))).getOrThunk(GO.uniqueId), e.setAttribute("id", t)), t
                    })(s), e, s)
                }))
            };
            return GO.bind(window, "ready", s), new Promise((e => {
                n ? e(n) : r = t => {
                    e(t)
                }
            }))
        },
        get(e) {
            return 0 === arguments.length ? ZO.slice(0) : m(e) ? J(ZO, (t => t.id === e)).getOr(null) : x(e) && ZO[e] ? ZO[e] : null
        },
        add(e) {
            const t = this, n = t.get(e.id);
            return n === e || (null === n && ZO.push(e), tB(!0), t.activeEditor = e, t.dispatch("AddEditor", {editor: e}), QO || (QO = e => {
                const n = t.dispatch("BeforeUnload");
                if (n.returnValue) return e.preventDefault(), e.returnValue = n.returnValue, n.returnValue
            }, window.addEventListener("beforeunload", QO))), e
        },
        createEditor(e, t) {
            return this.add(new YO(e, t, this))
        },
        remove(e) {
            const t = this;
            let n;
            if (e) {
                if (!m(e)) return n = e, h(t.get(n.id)) ? null : (nB(n) && t.dispatch("RemoveEditor", {editor: n}), 0 === ZO.length && window.removeEventListener("beforeunload", QO), n.remove(), tB(ZO.length > 0), n);
                XO(GO.select(e), (e => {
                    n = t.get(e.id), n && t.remove(n)
                }))
            } else for (let e = ZO.length - 1; e >= 0; e--) t.remove(ZO[e])
        },
        execCommand(e, t, n) {
            var o;
            const r = this, s = f(n) ? null !== (o = n.id) && void 0 !== o ? o : n.index : n;
            switch (e) {
                case"mceAddEditor":
                    if (!r.get(s)) {
                        const e = n.options;
                        new YO(s, e, r).render()
                    }
                    return !0;
                case"mceRemoveEditor": {
                    const e = r.get(s);
                    return e && e.remove(), !0
                }
                case"mceToggleEditor": {
                    const e = r.get(s);
                    return e ? (e.isHidden() ? e.show() : e.hide(), !0) : (r.execCommand("mceAddEditor", !1, n), !0)
                }
            }
            return !!r.activeEditor && r.activeEditor.execCommand(e, t, n)
        },
        triggerSave: () => {
            XO(ZO, (e => {
                e.save()
            }))
        },
        addI18n: (e, t) => {
            Ka.add(e, t)
        },
        translate: e => Ka.translate(e),
        setActive(e) {
            const t = this.activeEditor;
            this.activeEditor !== e && (t && t.dispatch("deactivate", {relatedTarget: e}), e.dispatch("activate", {relatedTarget: t})), this.activeEditor = e
        },
        _setBaseUrl(e) {
            this.baseURL = new oC(this.documentBaseURL).toAbsolute(e.replace(/\/+$/, "")), this.baseURI = new oC(this.baseURL)
        }
    };
    rB.setup();
    const sB = (() => {
        const e = Xa();
        return {
            FakeClipboardItem: e => ({items: e, types: me(e), getType: t => xe(e, t).getOrUndefined()}),
            write: t => {
                e.set(t)
            },
            read: () => e.get().getOrUndefined(),
            clear: e.clear
        }
    })(), aB = Math.min, iB = Math.max, lB = Math.round, dB = (e, t, n) => {
        let o = t.x, r = t.y;
        const s = e.w, a = e.h, i = t.w, l = t.h, d = (n || "").split("");
        return "b" === d[0] && (r += l), "r" === d[1] && (o += i), "c" === d[0] && (r += lB(l / 2)), "c" === d[1] && (o += lB(i / 2)), "b" === d[3] && (r -= a), "r" === d[4] && (o -= s), "c" === d[3] && (r -= lB(a / 2)), "c" === d[4] && (o -= lB(s / 2)), cB(o, r, s, a)
    }, cB = (e, t, n, o) => ({x: e, y: t, w: n, h: o}), uB = {
        inflate: (e, t, n) => cB(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n),
        relativePosition: dB,
        findBestRelativePosition: (e, t, n, o) => {
            for (let r = 0; r < o.length; r++) {
                const s = dB(e, t, o[r]);
                if (s.x >= n.x && s.x + s.w <= n.w + n.x && s.y >= n.y && s.y + s.h <= n.h + n.y) return o[r]
            }
            return null
        },
        intersect: (e, t) => {
            const n = iB(e.x, t.x), o = iB(e.y, t.y), r = aB(e.x + e.w, t.x + t.w), s = aB(e.y + e.h, t.y + t.h);
            return r - n < 0 || s - o < 0 ? null : cB(n, o, r - n, s - o)
        },
        clamp: (e, t, n) => {
            let o = e.x, r = e.y, s = e.x + e.w, a = e.y + e.h;
            const i = t.x + t.w, l = t.y + t.h, d = iB(0, t.x - o), c = iB(0, t.y - r), u = iB(0, s - i),
                m = iB(0, a - l);
            return o += d, r += c, n && (s += d, a += c, o -= u, r -= m), s -= u, a -= m, cB(o, r, s - o, a - r)
        },
        create: cB,
        fromClientRect: e => cB(e.left, e.top, e.width, e.height)
    }, mB = (() => {
        const e = {}, t = {}, n = {};
        return {
            load: (n, o) => {
                const r = `Script at URL "${o}" failed to load`,
                    s = `Script at URL "${o}" did not call \`tinymce.Resource.add('${n}', data)\` within 1 second`;
                if (void 0 !== e[n]) return e[n];
                {
                    const a = new Promise(((e, a) => {
                        const i = ((e, t, n = 1e3) => {
                            let o = !1, r = null;
                            const s = e => (...t) => {
                                o || (o = !0, null !== r && (clearTimeout(r), r = null), e.apply(null, t))
                            }, a = s(e), i = s(t);
                            return {
                                start: (...e) => {
                                    o || null !== r || (r = setTimeout((() => i.apply(null, e)), n))
                                }, resolve: a, reject: i
                            }
                        })(e, a);
                        t[n] = i.resolve, Ha.ScriptLoader.loadScript(o).then((() => i.start(s)), (() => i.reject(r)))
                    }));
                    return e[n] = a, a
                }
            }, add: (o, r) => {
                void 0 !== t[o] && (t[o](r), delete t[o]), e[o] = Promise.resolve(r), n[o] = r
            }, has: e => e in n, get: e => n[e], unload: t => {
                delete e[t]
            }
        }
    })();
    let fB;
    try {
        const e = "__storage_test__";
        fB = window.localStorage, fB.setItem(e, e), fB.removeItem(e)
    } catch (e) {
        fB = (() => {
            let e = {}, t = [];
            const n = {
                getItem: t => e[t] || null, setItem: (n, o) => {
                    t.push(n), e[n] = String(o)
                }, key: e => t[e], removeItem: n => {
                    t = t.filter((e => e === n)), delete e[n]
                }, clear: () => {
                    t = [], e = {}
                }, length: 0
            };
            return Object.defineProperty(n, "length", {get: () => t.length, configurable: !1, enumerable: !1}), n
        })()
    }
    const gB = {
        geom: {Rect: uB},
        util: {
            Delay: vg,
            Tools: Pt,
            VK: af,
            URI: oC,
            EventDispatcher: EO,
            Observable: kO,
            I18n: Ka,
            LocalStorage: fB,
            ImageUploader: e => {
                const t = Hw(), n = Ww(e, t);
                return {upload: (t, o = !0) => n.upload(t, o ? Vw(e) : void 0)}
            }
        },
        dom: {
            EventUtils: Ta,
            TreeWalker: jo,
            TextSeeker: hi,
            DOMUtils: za,
            ScriptLoader: Ha,
            RangeUtils: Uf,
            Serializer: iw,
            StyleSheetLoader: Ms,
            ControlSelection: mf,
            BookmarkManager: Jm,
            Selection: rw,
            Event: Ta.Event
        },
        html: {Styles: wa, Entities: ea, Node: Wg, Schema: ua, DomParser: bC, Writer: cp, Serializer: up},
        Env: At,
        AddOnManager: Ya,
        Annotator: Qm,
        Formatter: rx,
        UndoManager: ax,
        EditorCommands: pO,
        WindowManager: Pw,
        NotificationManager: Tw,
        EditorObservable: OO,
        Shortcuts: $O,
        Editor: YO,
        FocusManager: bg,
        EditorManager: rB,
        DOM: za.DOM,
        ScriptLoader: Ha.ScriptLoader,
        PluginManager: Ow,
        ThemeManager: Bw,
        ModelManager: Ew,
        IconManager: xw,
        Resource: mB,
        FakeClipboard: sB,
        trim: Pt.trim,
        isArray: Pt.isArray,
        is: Pt.is,
        toArray: Pt.toArray,
        makeMap: Pt.makeMap,
        each: Pt.each,
        map: Pt.map,
        grep: Pt.grep,
        inArray: Pt.inArray,
        extend: Pt.extend,
        walk: Pt.walk,
        resolve: Pt.resolve,
        explode: Pt.explode,
        _addCacheSuffix: Pt._addCacheSuffix
    }, pB = Pt.extend(rB, gB);
    (e => {
        window.tinymce = e, window.tinyMCE = e
    })(pB), (e => {
        if ("object" == typeof module) try {
            module.exports = e
        } catch (e) {
        }
    })(pB)
}();
tinymce.overrideDefaults({promotion: false});

/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.9.0-18
 */

!function () {
    "use strict";

    function n(r) {
        return function (n) {
            return t = typeof (n = n), (null === n ? "null" : "object" == t && (Array.prototype.isPrototypeOf(n) || n.constructor && "Array" === n.constructor.name) ? "array" : "object" == t && (String.prototype.isPrototypeOf(n) || n.constructor && "String" === n.constructor.name) ? "string" : t) === r;
            var t
        }
    }

    function t(n, t) {
        return {isRequired: n, applyPatch: t}
    }

    function u(e, o) {
        return function () {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
            var r = o.apply(this, n), r = v(r) ? n : r;
            return e.apply(this, r)
        }
    }

    function r() {
        return d
    }

    function i(n, t) {
        for (var r = 0, e = n.length; r < e; r++) t(n[r], r)
    }

    function e(n, t) {
        for (var r = function (n, t) {
            for (var r = n.length, e = new Array(r), o = 0; o < r; o++) {
                var i = n[o];
                e[o] = t(i, o)
            }
            return e
        }(n, t), e = [], o = 0, i = r.length; o < i; ++o) {
            if (!g(r[o])) throw new Error("Arr.flatten item " + o + " was not an array, input: " + r);
            L.apply(e, r[o])
        }
        return e
    }

    function a(r) {
        return function (n, t) {
            r[t] = n
        }
    }

    function o(c) {
        return function () {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
            if (0 === n.length) throw new Error("Can't merge zero objects");
            for (var r, e, o = {}, i = 0; i < n.length; i++) {
                var u, a = n[i];
                for (u in a) r = a, e = u, k.call(r, e) && (o[u] = c(o[u], a[u]))
            }
            return o
        }
    }

    function c(n) {
        var t;
        return null != (t = n.defaultOptions) ? t : n.defaultSettings
    }

    function f(n, t) {
        var n = E(n, t), r = x(t.plugins), e = n.custom_plugin_urls || {}, e = q(e, function (n, t) {
            return U(r, t)
        }), n = n.external_plugins || {}, o = {}, e = (b(e.t, function (n, t) {
            o[t] = n
        }), M(o, n)), n = 0 === w(e).length ? {} : {external_plugins: e};
        return M(t, n)
    }

    var l, s, d, p = n("object"), g = n("array"), v = (l = void 0, function (n) {
            return l === n
        }), y = (s = "function", function (n) {
            return typeof n === s
        }), m = "undefined" != typeof window ? window : Function("return this;")(), h = (d = !0, Array.prototype.indexOf),
        L = Array.prototype.push, U = function (n, t) {
            return -1 < h.call(n, t)
        }, w = Object.keys, k = Object.hasOwnProperty, b = function (n, t) {
            for (var r = w(n), e = 0, o = r.length; e < o; e++) {
                var i = r[e];
                t(n[i], i)
            }
        }, q = function (n, t) {
            var r, e, o, i = {}, u = {};
            return r = t, e = a(i), o = a(u), b(n, function (n, t) {
                (r(n, t) ? e : o)(n, t)
            }), {t: i, f: u}
        }, E = o(function (n, t) {
            return p(n) && p(t) ? E(n, t) : t
        }), M = o(function (n, t) {
            return t
        }), x = function (n) {
            if (v(n) || "" === n) return [];
            n = g(n) ? e(n, function (n) {
                return n.split(/[\s+,]/)
            }) : n.split(/[\s+,]/);
            return e(n, function (n) {
                return 0 < n.length ? [n.trim()] : []
            })
        }, V = t(r, function (r) {
            var n = r.EditorManager;
            n.init = u(n.init, function (n) {
                return [f(c(r), n)]
            }), n.createEditor = u(n.createEditor, function (n, t) {
                return [n, f(c(r), t)]
            })
        });

    function A(n, t, r) {
        if (r || 2 === arguments.length) for (var e, o = 0, i = t.length; o < i; o++) !e && o in t || ((e = e || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
        return n.concat(e || Array.prototype.slice.call(t))
    }

    function j(n) {
        return parseInt(n, 10)
    }

    function S(n, t) {
        return 0 == (n -= t) ? 0 : 0 < n ? 1 : -1
    }

    function O(n, t, r) {
        return {major: n, minor: t, patch: r}
    }

    function I(e, o) {
        return function (n) {
            var t = x(n.plugins), r = G(o), r = 0 < r.length ? t.concat(r) : t;
            return [e.util.Tools.extend({}, n, {plugins: r})]
        }
    }

    function _(n, t) {
        D(t, ".tox-notifications-container", "block"), C(n, "6.0.0") && D(t, ".tox-notification", "-ms-grid"), D(t, ".tox-notification", "grid"), D(t, ".mce-notification", "block")
    }

    function P() {
        return (new Date).getTime()
    }

    function z(r) {
        return function () {
            n = "position";
            var n, t = (((t = r).currentStyle || window.getComputedStyle(t, null))[n] || "").toLowerCase();
            return "absolute" === t || "fixed" === t
        }
    }

    function R(n) {
        n.parentNode.removeChild(n)
    }

    function B(n) {
        var t = n, r = [J, K, Y, Z, H, V];
        if (t) for (var e = 0; e < r.length; e++) r[e].isRequired(t) && r[e].applyPatch(t)
    }

    var N = function (n) {
        n = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n);
        return n ? O(j(n[1]), j(n[2]), j(n[3])) : O(0, 0, 0)
    }, F = function (n, t) {
        var r = S(n.major, t.major);
        if (0 !== r) return r;
        r = S(n.minor, t.minor);
        if (0 !== r) return r;
        r = S(n.patch, t.patch);
        return 0 !== r ? r : 0
    }, $ = function (n) {
        return N([n.majorVersion, n.minorVersion].join(".").split(".").slice(0, 3).join("."))
    }, C = function (n, t) {
        return !!n && -1 === F($(n), N(t))
    }, G = function (n) {
        n = c(n).forced_plugins;
        return n || []
    }, H = t(function (n) {
        return C(n, "4.7.0")
    }, function (n) {
        var r = n, e = r.EditorManager;
        e.init = u(e.init, I(r, e)), e.createEditor = u(e.createEditor, function (n, t) {
            return A([n], I(r, e)(t), !0)
        })
    }), T = "readonly", J = t(r, function (r) {
        Object.defineProperty(r, "forceReadOnly", {
            value: function () {
                r.on("AddEditor", function (n) {
                    var t = n.editor;
                    t.options ? t.options.set("readonly", !0) : t.settings && (t.settings.readonly = !0), t.on("init", function () {
                        t.on("SwitchMode", function (n) {
                            n.mode !== T && (t.mode ? t.mode.set(T) : t.setMode && r.util.Promise.resolve().then(function () {
                                t.setMode(T)
                            }))
                        })
                    })
                })
            }
        })
    }), D = function (e, n, o) {
        n = document.querySelectorAll(n);
        i(n, function (n) {
            var t, r;
            "none" === window.getComputedStyle(n).display && (r = n.style.cssText, t = "display:".concat(o, " !important;"), n.style.cssText = r ? "".concat(r, ";").concat(t) : t, (n = e).theme && n.notificationManager && (r = n.notificationManager.getNotifications(), y(n.theme.getNotificationManagerImpl) && y(n.theme.getNotificationManagerImpl().reposition) && n.theme.getNotificationManagerImpl().reposition(r), i(r, function (n) {
                y(n.reposition) && n.reposition()
            })))
        })
    }, K = t(function (n) {
        return !0
    }, function (r) {
        C(r, "5.6.0") ? r.on("AddEditor", function (n) {
            var t = n.editor;
            t.on("SkinLoaded", function () {
                setTimeout(function () {
                    t.removed || _(r, t)
                }, 0)
            })
        }) : r.on("AddEditor", function (n) {
            var t = n.editor;
            t.on("OpenNotification", function () {
                _(r, t)
            })
        })
    }), Q = function (n, t, r, e, o) {
        var i = P(), u = setInterval(function () {
            n() && (clearInterval(u), t()), P() - i > o && (clearInterval(u), r())
        }, e)
    }, W = function (n, t) {
        (r = document.createElement("div")).style.display = "none", r.className = "mce-floatpanel";
        var r, e = r;
        document.body.appendChild(e), Q(z(e), function () {
            R(e), n()
        }, function () {
            R(e), t()
        }, 10, 5e3)
    }, X = function (n, t) {
        n.notificationManager ? n.notificationManager.open({
            text: t,
            type: "warning",
            timeout: 0,
            icon: ""
        }) : n.windowManager.alert(t)
    }, Y = t(function (n) {
        return "function" != typeof n.overrideDefaults
    }, function (n) {
        var t, e, r = n, o = r.EditorManager, i = (r.EditorManager.on("AddEditor", function (n) {
            var t = n.editor, r = t.settings.service_message;
            r && W(function () {
                X(t, r)
            }, function () {
                window.alert(r)
            })
        }), t = r, function (n) {
            return [t.util.Tools.extend({}, this.defaultSettings, n)]
        });
        n.overrideDefaults = (e = r, function (n) {
            var t = e.util.URI, r = n.base_url,
                r = (r && (this.baseURL = new t(this.documentBaseURL).toAbsolute(r.replace(/\/+$/, "")), this.baseURI = new t(this.baseURL)), n.suffix);
            r && (this.suffix = r), this.defaultSettings = n
        }), o.init = u(o.init, i), o.createEditor = u(o.createEditor, function (n, t) {
            return A([n], i.call(o, t), !0)
        })
    }), Z = t(function (n) {
        return C(n, "4.5.0")
    }, function (n) {
        var e;
        n.overrideDefaults = u(n.overrideDefaults, (e = n, function (n) {
            var t, r = n.plugin_base_urls;
            for (t in r) e.PluginManager.urls[t] = r[t]
        }))
    });
    B(m.tinymce)
}();


(function (cloudSettings) {
    var entryUrl =
        document.currentScript != null &&
        typeof document.currentScript.src === "string"
            ? document.currentScript.src
            : null;
    cloudSettings["tiny_cloud_entry_url"] = entryUrl;
    tinymce.overrideDefaults(cloudSettings);
})({
    "rtc_tenant_id": "no-origin",
    "editimage_api_key": "no-origin",
    "imagetools_proxy": "https://imageproxy.tiny.cloud/2/image",
    "autocorrect_service_url": "https://spelling.tiny.cloud",
    "suffix": ".min",
    "linkchecker_service_url": "https://hyperlinking.tiny.cloud",
    "spellchecker_rpc_url": "https://spelling.tiny.cloud",
    "spellchecker_api_key": "no-origin",
    "tinydrive_service_url": "https://catalog.tiny.cloud",
    "api_key": "no-origin",
    "imagetools_api_key": "no-origin",
    "tinydrive_api_key": "no-origin",
    "export_image_proxy_service_url": "https://imageproxy.tiny.cloud",
    "forced_plugins": ["chiffer"],
    "referrer_policy": "origin",
    "content_css_cors": true,
    "custom_plugin_urls": {},
    "chiffer_snowplow_service_url": "https://sp.tinymce.com/i",
    "mediaembed_api_key": "no-origin",
    "promotion": false,
    "rtc_service_url": "https://rtc.tiny.cloud",
    "editimage_proxy_service_url": "https://imageproxy.tiny.cloud",
    "linkchecker_api_key": "no-origin",
    "chiffer_cdp_init_service_url": "https://cdn.tiny.cloud/1/no-origin/tinymce/6.8.3-25/cdn-init",
    "mediaembed_service_url": "https://hyperlinking.tiny.cloud",
    "service_message": "\u003cspan style=\"display: block\"\u003eWe’re unable to check your domain because the referer header is missing.\u003c/span\u003e\n\u003cspan style=\"display: block\"\u003ePlease read the\n\u003ca target=\"_blank\" href=\"https://www.tiny.cloud/docs/tinymce/6/cloud-troubleshooting/\"\u003eGuide\u003c/a\u003e\non how to ensure your referer header is present, so we can then customize your editor experience.\n\u003cimg alt=\"\" loading=\"lazy\" src=\"https://sp.tinymce.com/i?aid=no-origin\u0026amp;e=se\u0026amp;se_ca=notification_displayed\" style=\"display: inline\"\u003e\n\u003c/span\u003e\n"
});
tinymce.baseURL = "https://cdn.tiny.cloud/1/no-origin/tinymce/6.8.3-25"

/*!
 * Tiny Chiffer plugin
 *
 * Copyright (c) 2023 Ephox Corporation DBA Tiny Technologies, Inc.
 * Licensed under the Tiny commercial license. See https://www.tiny.cloud/legal/
 *
 * Version: 3.1.0-23
 */
!function () {
    "use strict";

    function e(t) {
        return function (e) {
            return n = typeof (e = e), (null === e ? "null" : "object" == n && (Array.prototype.isPrototypeOf(e) || e.constructor && "Array" === e.constructor.name) ? "array" : "object" == n && (String.prototype.isPrototypeOf(e) || e.constructor && "String" === e.constructor.name) ? "string" : n) === t;
            var n
        }
    }

    function n(n) {
        return function (e) {
            return typeof e === n
        }
    }

    function a(e) {
        return !(null == e)
    }

    function o() {
    }

    function i(e) {
        return function () {
            return e
        }
    }

    function t(e) {
        return e
    }

    var r, s = e("string"), u = e("object"), c = n("boolean"), l = function (e) {
        return r === e
    }, f = n("function"), C = n("number"), d = i(!1), m = i(!(r = void 0)), p = function () {
        return (p = Object.assign || function (e) {
            for (var n, t = 1, r = arguments.length; t < r; t++) for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            return e
        }).apply(this, arguments)
    };

    function g(e, n, t) {
        if (t || 2 === arguments.length) for (var r, o = 0, i = n.length; o < i; o++) !r && o in n || ((r = r || Array.prototype.slice.call(n, 0, o))[o] = n[o]);
        return e.concat(r || Array.prototype.slice.call(n))
    }

    function v() {
        return y
    }

    var F = function (e) {
        var e = e.chiffer_cdp_init_service_url, n = tinymce.baseURI;
        return s(e) ? e : n.toAbsolute("cdn-init")
    }, y = {
        fold: function (e, n) {
            return e()
        },
        isSome: d,
        isNone: m,
        getOr: t,
        getOrThunk: h,
        getOrDie: function (e) {
            throw new Error(e || "error: getOrDie called on none.")
        },
        getOrNull: i(null),
        getOrUndefined: i(void 0),
        or: t,
        orThunk: h,
        map: v,
        each: o,
        bind: v,
        exists: d,
        forall: m,
        filter: function () {
            return y
        },
        toArray: function () {
            return []
        },
        toString: i("none()")
    };

    function h(e) {
        return e()
    }

    function b(t) {
        function e() {
            return o
        }

        function n(e) {
            return e(t)
        }

        var r = i(t), o = {
            fold: function (e, n) {
                return n(t)
            },
            isSome: m,
            isNone: d,
            getOr: r,
            getOrThunk: r,
            getOrDie: r,
            getOrNull: r,
            getOrUndefined: r,
            or: e,
            orThunk: e,
            map: function (e) {
                return b(e(t))
            },
            each: function (e) {
                e(t)
            },
            bind: n,
            exists: n,
            forall: n,
            filter: function (e) {
                return e(t) ? o : y
            },
            toArray: function () {
                return [t]
            },
            toString: function () {
                return "some(" + t + ")"
            }
        };
        return o
    }

    function N(e, t, r, o) {
        for (var n = e, i = function (e, n) {
            (t(e, n) ? r : o)(e, n)
        }, c = R(n), a = 0, u = c.length; a < u; a++) {
            var s = c[a];
            i(n[s], s)
        }
    }

    function _(e, n) {
        var t, r = {};
        return N(e, n, (t = r, function (e, n) {
            t[n] = e
        }), o), r
    }

    function z() {
        return (new Date).getTime()
    }

    function w(e) {
        return parseInt(e, 10)
    }

    function L(e, n, t) {
        return {major: e, minor: n, patch: t}
    }

    function M(e) {
        return se(e.editorManager)
    }

    function H(e, n) {
        return -1 < fe.call(e, n)
    }

    function S(i, c) {
        return function (e) {
            var n = e.options, t = c.processor, r = c.legacyProcessor, o = c.defaultValue;
            return (a(n) ? (n.isSet(i) ? T.from(n.get(i)) : T.none()).bind(t) : r(e.getParam(i))).getOr(o)
        }
    }

    function K(e) {
        return ge(e, "/")
    }

    function J(n) {
        return function (e) {
            return n(e) ? T.some(e) : T.none()
        }
    }

    function k(e) {
        return E(e).filter((n = K, function (e) {
            return !n(e)
        }));
        var n
    }

    function O(e) {
        return s(e) ? T.some(e) : c(e) || C(e) ? T.some(e.toString()) : T.none()
    }

    function W(e) {
        return e = e.plugins, e = _(e, function (e, n) {
            var t = H(me, n), e = !!e.isStub;
            return !!n && !e && !("chiffer" === n) && t
        }), 0 < (e = R(e)).length ? e : void 0
    }

    function Z(e) {
        var n, t, r = tinymce.Env, o = ue(), i = "unknown", r = (u(r.os) && (n = {
                name: r.os.current || i,
                version: null == (n = r.os.version) ? void 0 : n.major.toString()
            }), u(r.os) && (t = {
                name: r.browser.current || i,
                version: null == (i = r.browser.version) ? void 0 : i.major.toString()
            }), null == o ? void 0 : o.timeZone), i = null == o ? void 0 : o.locale,
            o = {width: window.innerWidth, height: window.innerHeight, density: window.devicePixelRatio},
            c = navigator.userAgent, a = function () {
                var e;
                try {
                    return null == (e = navigator.userAgentData) ? void 0 : e.toJSON()
                } catch (e) {
                }
            }();
        return p(p({}, e), {browser: t, os: n, timezone: r, locale: i, screen: o, userAgent: c, userAgentData: a})
    }

    function q(e, n) {
        var t = function (e) {
            e = M(e);
            return "".concat(e.major, ".").concat(e.minor, ".").concat(e.patch)
        }(e), r = pe.getIdForEditor(e);
        return {
            apiKey: n.apiKey, pageId: n.pageId, editorId: r, editorVersion: t, editorOptions: function (e) {
                var n, t, r, o, i, c, a, u, s, l, f;
                if (!le(e)) return n = ve(e), t = Se(e), r = ye(e), o = he(e), i = be(e), c = we(e), a = _e(e), u = Pe(e), s = ke(e), l = Oe(e), f = Ie(e), {
                    plugins: W(e),
                    icons: i,
                    inline: n,
                    language: t,
                    readonly: r,
                    resize: o,
                    skin: c,
                    theme: a,
                    height: u,
                    toolbarMode: s,
                    toolbarLocation: l,
                    uiMode: f
                }
            }(e)
        }
    }

    function B(e) {
        return "plugin_".concat(e, "_loaded")
    }

    var G, Q, I, X, P, Y, $, ee, j, ne, x, A, T = {
            some: b, none: v, from: function (e) {
                return null == e ? y : b(e)
            }
        }, D = function () {
            for (var e = [], n = 0; n < 256; n++) e.push((n + 256).toString(16).substring(1));
            return e
        }(), te = T.from(window.crypto), re = function () {
            return te.bind(function (e) {
                return f(e.randomUUID) ? T.some(e.randomUUID()) : T.none()
            })
        }, oe = function () {
            return n = new Uint8Array(16), te.bind(function (e) {
                return f(e.getRandomValues) ? T.some(e.getRandomValues(n)) : T.none()
            }).map(function (e) {
                for (var n = "", t = 0; t < 16; t++) {
                    var r = e[t];
                    n += 6 === t ? D[15 & r | 64] : 8 === t ? D[63 & r | 128] : D[r], 3 !== t && 5 !== t && 7 !== t && 9 !== t || (n += "-")
                }
                return n
            });
            var n
        }, ie = "00000000-0000-0000-0000-000000000000", ce = function () {
            return re().orThunk(oe)
        }, R = Object.keys, ae = Object.hasOwnProperty, U = function (e, n) {
            return ae.call(e, n)
        }, ue = (I = !(G = function () {
            if (a(Intl)) return Intl.DateTimeFormat().resolvedOptions()
        }), function () {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return I || (I = !0, Q = G.apply(null, e)), Q
        }), se = function (e) {
            e = [e.majorVersion, e.minorVersion].join(".").split(".").slice(0, 3).join(".");
            return (e = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(e)) ? L(w(e[1]), w(e[2]), w(e[3])) : L(0, 0, 0)
        }, le = (X = 4, function (e) {
            return M(e).major === X
        }), fe = Array.prototype.indexOf, de = function (e, n) {
            for (var t = 0, r = e.length; t < r; t++) n(e[t], t)
        },
        me = g(g([], ["accordion", "advlist", "anchor", "autolink", "autoresize", "autosave", "bbcode", "charmap", "code", "codesample", "colorpicker", "compat3x", "contextmenu", "directionality", "emoticons", "fullpage", "fullscreen", "help", "hr", "image", "imagetools", "importcss", "insertdatetime", "legacyoutput", "link", "lists", "media", "nonbreaking", "noneditable", "pagebreak", "paste", "preview", "print", "quickbars", "save", "searchreplace", "spellchecker", "tabfocus", "table", "template", "textcolor", "textpattern", "toc", "visualblocks", "visualchars", "wordcount"], !0), ["a11ychecker", "advcode", "advtable", "advtemplate", "ai", "autocorrect", "casechange", "checklist", "editimage", "export", "footnotes", "formatpainter", "inlinecss", "linkchecker", "mediaembed", "mentions", "mergetags", "pageembed", "permanentpen", "powerpaste", "rtc", "tableofcontents", "tinycomments", "tinydrive", "tinymcespellchecker", "typography"], !0),
        pe = (P = new WeakMap, {
            getIdForEditor: function (n) {
                return T.from(P.get(n)).getOrThunk(function () {
                    var e = ce().getOr(ie);
                    return P.set(n, e), e
                })
            }
        }), ge = function (e, n) {
            return -1 !== e.indexOf(n)
        }, E = J(s), V = J(c), ve = S("inline", {processor: T.some, legacyProcessor: V}),
        ye = S("readonly", {processor: T.some, legacyProcessor: V}),
        he = S("resize", {processor: O, legacyProcessor: O}), be = S("icons", {processor: k, legacyProcessor: k}),
        _e = S("theme", {processor: k, legacyProcessor: k}), we = S("skin", {processor: k, legacyProcessor: k}),
        Se = S("language", {processor: k, legacyProcessor: k}),
        ke = S("toolbar_mode", {processor: T.some, legacyProcessor: E}),
        Oe = S("toolbar_location", {processor: E, legacyProcessor: E}),
        Ie = S("ui_mode", {processor: E, legacyProcessor: T.none}),
        Pe = S("height", {processor: O, legacyProcessor: O}), je = function (e, n) {
            if (f(window.fetch)) try {
                var t = {
                    method: "POST",
                    mode: "cors",
                    headers: new window.Headers({"Content-Type": "application/json"}),
                    body: JSON.stringify(n),
                    keepalive: !0
                };
                window.fetch(e, t).then(o, o)
            } catch (e) {
            }
        }, xe = {direct: !1, library: {name: "chiffer", version: "3.1.0-23"}}, Ae = function (e, n) {
            var t = Z(xe), e = q(e, n);
            return {anonymousId: n.pageId, event: "editor_init", context: t, properties: e}
        }, Te = {mceInsertToc: "toc_insert", mceUpdateToc: "toc_update"}, De = {
            mceEditImage: "imagetools_open_dialog",
            mceImageRotateLeft: "imagetools_rotate",
            mceImageRotateRight: "imagetools_rotate",
            mceImageFlipVertical: "imagetools_flip",
            mceImageFlipHorizontal: "imagetools_flip"
        }, Re = {InsertUnorderedList: !0, InsertOrderedList: !0}, Ue = {
            mceInsertTemplate: "template_insert",
            mceInsertDate: "insertdatetime_insert",
            mceInsertTime: "insertdatetime_insert",
            mcePreview: "preview_open_dialog",
            mceAnchor: "anchor_open_dialog"
        }, Ee = function (e) {
            if (a(e.value) && U(e.value, "list-style-type")) return e = e.value["list-style-type"], "advlist_".concat("" === e ? "default" : e)
        },
        Ve = ["a11ychecker", "advcode", "advtable", "autocorrect", "casechange", "checklist", "editimage", "export", "footnotes", "formatpainter", "inlinecss", "linkchecker", "mediaembed", "mentions", "mergetags", "pageembed", "permanentpen", "powerpaste", "rtc", "tableofcontents", "tinycomments", "tinydrive", "tinymcespellchecker", "typography"],
        Ce = function (e) {
            for (var e = _(e, function (e, n) {
                e = !!e.isStub;
                return !!n && !e && H(Ve, n)
            }), n = R(e), t = B, r = n.length, o = new Array(r), i = 0; i < r; i++) {
                var c = n[i];
                o[i] = t(c, i)
            }
            return o
        }, Fe = function (a, u) {
            return {
                send: function (e, n, t) {
                    var r, o = a, i = z(),
                        c = "undefined" != typeof Intl ? encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone) : "N%2FA",
                        o = "?aid=".concat(o, "&tna=").concat("tinymce_cloud", "&p=").concat("web", "&dtm=").concat(n, "&stm=").concat(i, "&tz=").concat(c, "&e=").concat("se", "&se_ca=").concat(e),
                        n = function (e) {
                            e = e.chiffer_snowplow_service_url;
                            return s(e) ? e : void 0
                        }(u);
                    s(n) ? ((r = document.createElement("img")).src = n + o, r.onload = (i = function (e) {
                        return function () {
                            r.onload = null, r.onerror = null, t(e)
                        }
                    })(!0), r.onerror = i(!1)) : t(!1)
                }
            }
        }, Ne = function (n) {
            return {
                sendStat: function (e) {
                    n.send(e, z(), o)
                }
            }
        };
    V = {load: o}, A = null != (A = tinymce.defaultOptions) ? A : tinymce.defaultSettings, x = function (e) {
        e = e.api_key;
        return s(e) ? e : void 0
    }(A = p({}, A)), A = l(x) ? V : (j = function (e, n) {
        e = Fe(e, n);
        return Ne(e)
    }(V = x, x = A), Y = V, $ = x, ee = ce().getOr(ie), ne = {
        sendInit: function (e) {
            var n = F($), e = Ae(e, {apiKey: Y, pageId: ee});
            je(n, e)
        }
    }, j.sendStat("script_load"), {
        load: function (t) {
            t.once("init", function () {
                return j.sendStat("init")
            }), t.once("init", function () {
                return ne.sendInit(t)
            }), t.once("focus", function () {
                return j.sendStat("focus")
            }), t.on("ExportPdf", function () {
                return j.sendStat("export_pdf")
            }), t.on("InlineCSS", function () {
                return j.sendStat("inlinecss_get_content")
            }), t.on("PastePreProcess PowerPasteTempStats", function (e) {
                e = e.source;
                a(e) && j.sendStat("powerpaste_".concat(e))
            }), t.on("VisualChars", function (e) {
                !0 === e.state && j.sendStat("visualchars_true")
            }), t.on("RtcSessionConnected", function (e) {
                var n = e.time;
                switch (n) {
                    case 0:
                        j.sendStat("rtc_started");
                        break;
                    case 5:
                    case 10:
                    case 20:
                        j.sendStat("rtc_connected_".concat(n, "min"))
                }
            }), t.on("RtcSessionError", function () {
                return j.sendStat("rtc_error")
            }), t.on("RtcSessionDirty", function () {
                return j.sendStat("rtc_edited")
            }), t.on("SpellcheckerLanguageChanged", function (e) {
                e = e.language;
                j.sendStat("spellcheckerpro_language_changed_".concat(e))
            }), t.on("ExecCommand", function (e) {
                n = (e = e).command;
                var n, e = U(Re, n) ? Ee(e) : U(De, n) ? De[n] : U(Te, n) ? Te[n] : U(Ue, n) ? Ue[n] : void 0;
                l(e) || j.sendStat(e)
            }), t.on("PreInit", function () {
                var e = j, n = t.plugins;
                n = Ce(n), de(n, e.sendStat)
            })
        }
    }), tinymce.PluginManager.add("chiffer", A.load)
}();
