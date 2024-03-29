!function () {
    "use strict";
    var l = function () {
        return (l = Object.assign || function (n) {
            for (var t, e = 1, r = arguments.length; e < r; e++) for (var i in t = arguments[e]) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
            return n
        }).apply(this, arguments)
    }, t = "undefined" != typeof window ? window : Function("return this;")(), e = function () {
        var n;
        return null != (n = t && t.jQuery) ? n : null
    }, a = function () {
        var n = e();
        if (null != n) return n;
        throw new Error("Expected global jQuery")
    };
    const r = (n, t, e) => {
        return !!e(n, t.prototype) || (null == (e = n.constructor) ? void 0 : e.name) === t.name
    };
    var i, n = t => n => (n => {
        var t = typeof n;
        return null === n ? "null" : "object" == t && Array.isArray(n) ? "array" : "object" == t && r(n, String, (n, t) => t.isPrototypeOf(n)) ? "string" : t
    })(n) === t;
    const f = n("string"), o = n("object"), u = n("array"), s = (i = "function", n => typeof n === i), v = Object.keys,
        h = Object.hasOwnProperty, c = "undefined" != typeof window ? window : Function("return this;")(),
        p = (n, e) => {
            n = n.split(".");
            {
                var r = n;
                let t = null != (n = e) ? n : c;
                for (let n = 0; n < r.length && void 0 !== t && null !== t; ++n) t = t[r[n]];
                return t
            }
        }, d = (n, t) => {
            e = n, t = t;
            var e = p(e, t);
            if (null == e) throw new Error(n + " not available on this browser");
            return e
        }, y = Object.getPrototypeOf, g = n => {
            var t = p("ownerDocument.defaultView", n);
            return o(n) && (t = t, d("HTMLElement", t).prototype.isPrototypeOf(n) || /^HTML\w*Element$/.test(y(n).constructor.name))
        };

    function m() {
        var n;
        return null != (n = t.tinymce) ? n : null
    }

    function O(n, t, e) {
        var r = j(n);
        return r ? t(r) : e ? e(n) : void 0
    }

    function w(e, r) {
        e.each(function (n, t) {
            return O(t, function (n) {
                return r(n, t, e)
            })
        })
    }

    function D(n) {
        var o, c;
        c = function (n) {
            return n.remove()
        }, (o = n).each(function (n, t) {
            for (var e = 0, r = L().get(); e < r.length; e++) {
                var i = r[e];
                if ($.contains(t, i.getContentAreaContainer()) && !1 === c(i, t, o)) return !1
            }
        })
    }

    function _(n) {
        w(n, function (n) {
            return n.remove()
        }), D(n)
    }

    function I(u) {
        return function () {
            for (var t = this, n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];

            function r(i) {
                void 0 !== i && (D(t), t.each(function (e, r) {
                    return O(r, function (n) {
                        var t = s(i) ? i.call(r, e, n.getContent()) : i;
                        void 0 !== t && n.setContent(null === t ? "" : "".concat(t))
                    }, function (n) {
                        var t;
                        s(i) ? (t = u.call($(n), "value"), t = i.call(n, e, t), u.call($(n), "value", t)) : u.call($(n), "value", i)
                    })
                }))
            }

            var i, o = n[0];
            if (f(o)) {
                if ("value" !== o) return u.apply(this, n);
                var c = n[1];
                return void 0 !== c ? (r(c), this) : 1 <= this.length ? O(this[0], function (n) {
                    return n.getContent()
                }, function (n) {
                    return u.call(t, "value")
                }) : void 0
            }
            return c = l({}, o), o = c, i = "value", h.call(o, i) && (r(c.value), delete c.value), 0 < v(c).length ? u.call(this, c) : this
        }
    }

    function b(n, t) {
        var e = document.createElement("div");
        return n.apply($(e), t), e.innerHTML
    }

    function N(c, u) {
        return function () {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            var e, i, r, o = "prepend" === u;
            return i = 1 === t.length && s(t[0]) ? (e = t[0], function (n, t) {
                return b(c, [e.call(n, 0, t)])
            }) : (r = t, (t => {
                let e = !1, r;
                return (...n) => (e || (e = !0, r = t.apply(null, n)), r)
            })(function (n, t) {
                return b(c, r)
            })), this.each(function (n, r) {
                return O(r, function (n) {
                    var t = n.getContent(), e = i(r, t);
                    n.setContent(o ? e + t : t + e)
                }, function (n) {
                    c.apply($(n), t)
                })
            }), this
        }
    }

    function A(c) {
        return function (o) {
            return void 0 !== o ? (D(this), this.each(function (r, i) {
                O(i, function (n) {
                    var t, e = s(o) ? o.call(i, r, n.getContent()) : o,
                        e = f(e) ? e : (g(e) && _($(e)), t = document.createElement("div"), c.call($(t), e), t.innerHTML);
                    n.setContent(e)
                }, function (n) {
                    var t;
                    s(o) ? (t = c.call($(i)), t = o.call(i, r, t), c.call($(i), t)) : c.call($(n), o)
                })
            }), this) : 1 <= this.length ? O(this[0], function (n) {
                return n.getContent()
            }, function (n) {
                return c.call($(n))
            }) : void 0
        }
    }

    function E(c) {
        var n, u = this;
        return this.length ? c ? (this.css("visibility", "hidden"), new Promise(function (o) {
            H(k(c), function (e, n) {
                n && c.script_loaded && c.script_loaded(), S || (S = !0, P(a()));

                function r() {
                    var n = F(e, u);
                    t && t(n), o(n)
                }

                var i = 0, t = M(e, c.oninit);
                u.each(function (n, t) {
                    t.id || (t.id = e.DOM.uniqueId()), e.get(t.id) ? i++ : e.init(l(l({}, c), {
                        selector: void 0,
                        target: t,
                        init_instance_callback: function (n) {
                            u.css("visibility", ""), i++;
                            var t = c.init_instance_callback;
                            "function" == typeof t && t.call(n, n), i === u.length && r()
                        }
                    }))
                }), i === u.length && r()
            })
        })) : null != (n = j(this[0])) ? n : void 0 : c ? Promise.resolve([]) : void 0
    }

    var C, T = function () {
            return !!m()
        }, L = function () {
            var n = m();
            if (null != n) return n;
            throw new Error("Expected global tinymce")
        }, j = function (n) {
            var t = null;
            return t = n && n.id && T() ? L().get(n.id) : t
        },
        G = ((n = C = C || {})[n.NOT_LOADING = 0] = "NOT_LOADING", n[n.LOADING_STARTED = 1] = "LOADING_STARTED", n[n.LOADING_FINISHED = 2] = "LOADING_FINISHED", C.NOT_LOADING),
        x = [], H = function (n, r) {
            var t;
            T() || G !== C.NOT_LOADING ? G === C.LOADING_STARTED ? x.push(r) : r(L(), !1) : (G = C.LOADING_STARTED, (t = document.createElement("script")).type = "text/javascript", t.onload = function (n) {
                if (G !== C.LOADING_FINISHED && "load" === n.type) {
                    G = C.LOADING_FINISHED;
                    var t = L();
                    r(t, !0);
                    for (var e = 0; e < x.length; e++) x[e](t, !1)
                }
            }, t.src = n, document.body.appendChild(t))
        }, P = function (n) {
            var c, o, t, e;
            n.fn.html = A(n.fn.html), n.fn.text = (c = n.fn.text, function (o) {
                var e;
                return void 0 === o ? (e = "", this.each(function (n, t) {
                    e += O(t, function (n) {
                        return n.getContent({format: "text"})
                    }, function (n) {
                        return c.call($(n))
                    })
                }), e) : (D(this), this.each(function (r, i) {
                    O(i, function (n) {
                        var t = s(o) ? o.call(i, r, n.getContent({format: "text"})) : o, e = document.createElement("div");
                        e.innerText = "".concat(t), n.setContent(e.innerHTML)
                    }, function (n) {
                        var t;
                        s(o) ? (t = c.call($(i)), t = o.call(i, r, t), c.call($(i), t)) : c.call($(n), o)
                    })
                }), this)
            }), n.fn.val = (o = n.fn.val, function (i) {
                return void 0 === i ? 1 <= this.length ? O(this[0], function (n) {
                    return n.getContent()
                }, function (n) {
                    return o.call($(n))
                }) : void 0 : (this.each(function (e, r) {
                    O(r, function (n) {
                        var t = s(i) ? i.call(r, e, n.getContent()) : i, t = u(t) ? t.join("") : "".concat(t);
                        n.setContent(t)
                    }, function (n) {
                        var t;
                        s(i) ? (t = o.call($(r)), t = i.call(r, e, null != t ? t : ""), o.call($(r), t)) : o.call($(n), i)
                    })
                }), this)
            }), n.fn.append = N(n.fn.append, "append"), n.fn.prepend = N(n.fn.prepend, "prepend"), n.fn.remove = (t = n.fn.remove, function (n) {
                return _(void 0 !== n ? this.filter(n) : this), t.call(this, n)
            }), n.fn.empty = (e = n.fn.empty, function () {
                return D(this), w(this, function (n) {
                    n.setContent("")
                }), e.call(this)
            }), n.fn.attr = I(n.fn.attr)
        }, k = function (n) {
            var t;
            return "string" == typeof n.script_url ? n.script_url : (t = "string" == typeof n.channel ? n.channel : "5-stable", n = "string" == typeof n.api_key ? n.api_key : "no-api-key", "https://cdn.tiny.cloud/1/".concat(n, "/tinymce/").concat(t, "/tinymce.min.js"))
        }, F = function (e, n) {
            var r = [];
            return n.each(function (n, t) {
                r.push(e.get(t.id))
            }), r
        }, M = function (n, t) {
            if ("string" == typeof t) {
                var e, r = n.resolve(t);
                if ("function" == typeof r) return e = -1 === t.indexOf(".") ? n : n.resolve(t.replace(/\.\w+$/, "")), r.bind(e)
            } else if ("function" == typeof t) return t.bind(n);
            return null
        }, S = !1;
    (n = a()).expr.pseudos.tinymce = function (n) {
        return !!j(n)
    }, n.fn.tinymce = E
}();
