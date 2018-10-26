(function() {
    var n, aa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ba;
    if ("function" == typeof Object.setPrototypeOf) ba = Object.setPrototypeOf;
    else {
        var ca;
        a: {
            var da = {
                    da: !0
                },
                ea = {};
            try {
                ea.__proto__ = da;
                ca = ea.da;
                break a
            } catch (a) {}
            ca = !1
        }
        ba = ca ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var fa = ba;

    function ha(a, b) {
        a.prototype = aa(b.prototype);
        a.prototype.constructor = a;
        if (fa) fa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Fa = b.prototype
    }
    var ia = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        ja = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function ka(a, b) {
        if (b) {
            var c = ja;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ia(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    ka("String.prototype.endsWith", function(a) {
        return a ? a : function(a, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");
            if (a instanceof RegExp) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
            void 0 === c && (c = this.length);
            c = Math.max(0, Math.min(c | 0, this.length));
            for (var b = a.length; 0 < b && 0 < c;)
                if (this[--c] != a[--b]) return !1;
            return 0 >= b
        }
    });
    var la = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    ka("Object.assign", function(a) {
        return a || la
    });
    ka("Object.is", function(a) {
        return a ? a : function(a, c) {
            return a === c ? 0 !== a || 1 / a === 1 / c : a !== a && c !== c
        }
    });
    ka("Number.isNaN", function(a) {
        return a ? a : function(a) {
            return "number" === typeof a && isNaN(a)
        }
    });
    var q = this;

    function r(a) {
        return "string" == typeof a
    }

    function ma(a) {
        return "boolean" == typeof a
    }

    function t(a) {
        return "number" == typeof a
    }

    function na() {
        if (null === pa) {
            a: {
                var a = q.document;
                if ((a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && qa.test(a)) break a;a = null
            }
            pa = a || ""
        }
        return pa
    }
    var qa = /^[\w+/_-]+[=]{0,2}$/,
        pa = null;

    function ra() {}

    function sa(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function ta(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ua(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function va(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function w(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? w = ua : w = va;
        return w.apply(null, arguments)
    }

    function wa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    };
    var xa = (new Date).getTime();

    function ya(a, b) {
        if (r(a)) return r(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function za(a, b) {
        for (var c = a.length, d = r(a) ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Aa(a) {
        return Array.prototype.concat.apply([], arguments)
    };

    function Ba(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Ca(a) {
        if (!Da.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ea, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Fa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ga, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ja, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ka, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(La, "&#0;"));
        return a
    }
    var Ea = /&/g,
        Fa = /</g,
        Ga = />/g,
        Ja = /"/g,
        Ka = /'/g,
        La = /\x00/g,
        Da = /[\x00&<>"']/,
        Ma = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "<"
        },
        Na = {
            "'": "\\'"
        };

    function x(a, b) {
        return -1 != a.indexOf(b)
    };
    var y;
    a: {
        var Oa = q.navigator;
        if (Oa) {
            var Pa = Oa.userAgent;
            if (Pa) {
                y = Pa;
                break a
            }
        }
        y = ""
    };

    function Qa(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    };

    function Ra(a) {
        Ra[" "](a);
        return a
    }
    Ra[" "] = ra;
    var Sa = document,
        z = window,
        Ta, Ua = null,
        Va = Sa.getElementsByTagName("script");
    Va && Va.length && (Ua = Va[Va.length - 1]);
    Ta = Ua;
    var Wa = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function Xa(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function Ya(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Za() {
        var a = ra;
        return function() {
            if (a) {
                var b = a;
                a = null;
                b()
            }
        }
    };

    function A() {
        this.f = "";
        this.h = $a
    }
    A.prototype.g = !0;
    A.prototype.a = function() {
        return this.f
    };

    function ab(a) {
        return a instanceof A && a.constructor === A && a.h === $a ? a.f : "type_error:TrustedResourceUrl"
    }
    var $a = {};

    function B() {
        this.F = "";
        this.ca = bb
    }
    B.prototype.g = !0;
    B.prototype.a = function() {
        return this.F
    };
    var cb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        bb = {};

    function db(a) {
        var b = new B;
        b.F = a;
        return b
    }
    db("about:blank");

    function eb(a, b) {
        a.src = ab(b);
        (b = na()) && a.setAttribute("nonce", b)
    };

    function fb(a) {
        this.a = a || q.document || document
    }
    fb.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function gb(a) {
        hb();
        var b = new A;
        b.f = a;
        return b
    }
    var hb = ra;

    function ib() {
        return !(x(y, "iPad") || x(y, "Android") && !x(y, "Mobile") || x(y, "Silk")) && (x(y, "iPod") || x(y, "iPhone") || x(y, "Android") || x(y, "IEMobile"))
    };

    function C(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Ra(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function jb(a, b) {
        var c = [q.top],
            d = [],
            e = 0;
        b = b || 1024;
        for (var g; g = c[e++];) {
            a && !C(g) || d.push(g);
            try {
                if (g.frames)
                    for (var f = g.frames.length, h = 0; h < f && c.length < b; ++h) c.push(g.frames[h])
            } catch (k) {}
        }
        return d
    }

    function kb(a, b) {
        var c = a.createElement("script");
        eb(c, gb(b));
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function D(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function lb(a) {
        if (!a.crypto) return Math.random();
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    }

    function mb(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function nb(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var ob = Ya(function() {
            return x(y, "Google Web Preview") || 1E-4 > Math.random()
        }),
        pb = /^([0-9.]+)px$/,
        qb = /^(-?[0-9.]{1,30})$/;

    function rb(a) {
        return (a = pb.exec(a)) ? +a[1] : null
    }

    function sb(a, b) {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    }
    var tb = Object.assign || function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };

    function E(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function ub(a, b) {
        var c = !1,
            d = !1;
        d = void 0 === d ? !1 : d;
        c = void 0 === c ? !1 : c;
        q.google_image_requests || (q.google_image_requests = []);
        var e = q.document.createElement("img");
        if (b || c) {
            var g = function(a) {
                b && b(a);
                if (c) {
                    a = q.google_image_requests;
                    var d = ya(a, e);
                    0 <= d && Array.prototype.splice.call(a, d, 1)
                }
                e.removeEventListener && e.removeEventListener("load", g, !1);
                e.removeEventListener && e.removeEventListener("error", g, !1)
            };
            E(e, "load", g);
            E(e, "error", g)
        }
        d && (e.referrerPolicy = "no-referrer");
        e.src = a;
        q.google_image_requests.push(e)
    };
    var vb = /^([\w-]+\.)*([\w-]{2,})(:[0-9]+)?$/;

    function wb(a, b) {
        return a ? (a = a.match(vb)) ? a[0] : b : b
    };

    function xb() {
        return "r20181010"
    }
    var yb = /^true$/.test("false"),
        zb = /^true$/.test("false"),
        Ab = /^true$/.test("false"),
        Bb = Ab || !zb;

    function Cb() {
        return wb("", "googleads.g.doubleclick.net")
    };

    function Db(a) {
        a = void 0 === a ? q : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function Eb(a) {
        return (a = a || Db()) ? C(a.master) ? a.master : null : null
    };

    function Fb(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Gb(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function Hb(a, b) {
        if (a.indexOf) return a = a.indexOf(b), 0 < a || 0 === a;
        for (var c = 0; c < a.length; c++)
            if (a[c] === b) return !0;
        return !1
    }

    function Ib(a) {
        "google_onload_fired" in a || (a.google_onload_fired = !1, E(a, "load", function() {
            a.google_onload_fired = !0
        }))
    }

    function Jb(a) {
        a = Eb(Db(a)) || a;
        a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
    }

    function Kb(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }

    function Lb(a) {
        return !!a.google_async_iframe_id
    }
    var Mb = Lb(window),
        F = Mb && window.parent || window;

    function Nb() {
        if (Mb && !C(F)) {
            var a = "." + Sa.domain;
            try {
                for (; 2 < a.split(".").length && !C(F);) Sa.domain = a = a.substr(a.indexOf(".") + 1), F = window.parent
            } catch (b) {}
            C(F) || (F = window)
        }
        return F
    }

    function Ob() {
        if (yb) try {
            var a = z.google_cafe_host || z.top.google_cafe_host;
            if (a) return a
        } catch (b) {}
        return wb("", "pagead2.googlesyndication.com")
    }

    function Pb(a) {
        return yb && a.google_top_window || a.top
    }

    function G(a) {
        a = Pb(a);
        return C(a) ? a : null
    };

    function Qb(a, b) {
        a = a.google_ad_modifications;
        if (!a || Rb(a.ad_whitelist, b, void 0)) return null;
        var c = a.space_collapsing || "none";
        return (b = Rb(a.ad_blacklist, b)) ? {
            K: !0,
            oa: b.space_collapsing || c
        } : a.remove_ads_by_default ? {
            K: !0,
            oa: c,
            Da: a.dont_remove_atf
        } : null
    }

    function H(a, b) {
        a = a.google_ad_modifications;
        return Hb(a ? a.eids || [] : [], b)
    }

    function Rb(a, b, c) {
        if (!a) return null;
        for (var d = 0; d < a.length; ++d)
            if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c) return a[d];
        return null
    };

    function Sb(a) {
        if (!a) return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };
    var Tb = {
        ta: {
            name: "adFormat",
            l: t
        },
        sa: {
            name: "adClient",
            l: /^[a-z0-9-]+$/i
        },
        va: {
            name: "adTest",
            l: /^on$/i
        },
        Ca: {
            name: "reqSrc",
            l: t
        },
        Ba: {
            name: "pubVars",
            l: null
        },
        ua: {
            name: "adKey",
            l: t
        },
        Aa: {
            name: "enabledInAsfe",
            l: ma
        }
    };
    var Ub = [{
        name: "google_ad_channel",
        l: {
            predicate: /^[a-z0-9_-]+$/i,
            nullOnInvalid: !0
        }
    }, {
        name: "google_reactive_sra_index",
        l: {
            predicate: t,
            nullOnInvalid: !0
        }
    }, {
        name: "google_ad_unit_key",
        l: {
            predicate: t,
            nullOnInvalid: !0
        }
    }];
    var Vb = /MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i;

    function Wb() {
        var a = void 0 === a ? navigator.userAgent : a;
        return Vb.test(a) ? !1 : !0
    }

    function Xb(a, b, c) {
        if (C(a.document.getElementById(b).contentWindow)) a = a.document.getElementById(b).contentWindow, b = a.document, b.body && b.body.firstChild || (/Firefox/.test(navigator.userAgent) ? b.open("text/html", "replace") : b.open(), a.google_async_iframe_close = !0, b.write(c));
        else {
            a = a.document.getElementById(b).contentWindow;
            c = String(c);
            b = ['"'];
            for (var d = 0; d < c.length; d++) {
                var e = c.charAt(d),
                    g = e.charCodeAt(0),
                    f = d + 1,
                    h;
                if (!(h = Ma[e])) {
                    if (!(31 < g && 127 > g))
                        if (g = e, g in Na) e = Na[g];
                        else if (g in Ma) e = Na[g] = Ma[g];
                    else {
                        h = g.charCodeAt(0);
                        if (31 < h && 127 > h) e = g;
                        else {
                            if (256 > h) {
                                if (e = "\\x", 16 > h || 256 < h) e += "0"
                            } else e = "\\u", 4096 > h && (e += "0");
                            e += h.toString(16).toUpperCase()
                        }
                        e = Na[g] = e
                    }
                    h = e
                }
                b[f] = h
            }
            b.push('"');
            a.location.replace("javascript:" + b.join(""))
        }
    };

    function Yb(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Zb(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Zb(a) {
        var b = "";
        Fb(a.split("_"), function(a) {
            b += a.substr(0, 2)
        });
        return b
    };
    var $b = null;

    function ac(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.line = b.line || -1;
        this.msg = b.message || "";
        this.file = b.file || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var bc = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function cc(a, b) {
        this.a = a;
        this.f = b
    }

    function dc(a, b, c) {
        this.url = a;
        this.a = b;
        this.O = !!c;
        this.depth = t(void 0) ? void 0 : null
    };

    function ec() {
        this.g = "&";
        this.h = !1;
        this.f = {};
        this.i = 0;
        this.a = []
    }

    function fc(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function gc(a, b, c, d, e) {
        var g = [];
        mb(a, function(a, h) {
            (a = hc(a, b, c, d, e)) && g.push(h + "=" + a)
        });
        return g.join(b)
    }

    function hc(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var g = [], f = 0; f < a.length; f++) g.push(hc(a[f], b, c, d + 1, e));
                return g.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(gc(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function ic(a, b, c, d) {
        a.a.push(b);
        a.f[b] = fc(c, d)
    }

    function jc(a, b, c, d) {
        b = b + "//" + c + d;
        var e = kc(a) - d.length;
        if (0 > e) return "";
        a.a.sort(function(a, b) {
            return a - b
        });
        d = null;
        c = "";
        for (var g = 0; g < a.a.length; g++)
            for (var f = a.a[g], h = a.f[f], k = 0; k < h.length; k++) {
                if (!e) {
                    d = null == d ? f : d;
                    break
                }
                var l = gc(h[k], a.g, ",$");
                if (l) {
                    l = c + l;
                    if (e >= l.length) {
                        e -= l.length;
                        b += l;
                        c = a.g;
                        break
                    } else a.h && (c = e, l[c - 1] == a.g && --c, b += l.substr(0, c), c = a.g, e = 0);
                    d = null == d ? f : d
                }
            }
        a = "";
        null != d && (a = c + "trn=" + d);
        return b + a
    }

    function kc(a) {
        var b = 1,
            c;
        for (c in a.f) b = c.length > b ? c.length : b;
        return 3997 - b - a.g.length - 1
    };

    function lc(a, b, c, d, e, g) {
        if ((d ? a.i : Math.random()) < (e || a.a)) try {
            if (c instanceof ec) var f = c;
            else f = new ec, mb(c, function(a, b) {
                var c = f,
                    d = c.i++;
                a = fc(b, a);
                c.a.push(d);
                c.f[d] = a
            });
            var h = jc(f, a.h, a.f, a.g + b + "&");
            h && ("undefined" === typeof g ? ub(h, void 0) : ub(h, g))
        } catch (k) {}
    };

    function mc(a, b) {
        this.start = a < b ? a : b;
        this.a = a < b ? b : a
    };

    function I(a, b) {
        this.a = b >= a ? new mc(a, b) : null
    }

    function nc(a) {
        var b;
        try {
            a.localStorage && (b = parseInt(a.localStorage.getItem("google_experiment_mod"), 10))
        } catch (c) {
            return null
        }
        if (0 <= b && 1E3 > b) return b;
        if (ob()) return null;
        b = Math.floor(1E3 * lb(a));
        try {
            if (a.localStorage) return a.localStorage.setItem("google_experiment_mod", "" + b), b
        } catch (c) {}
        return null
    };
    var oc = null;

    function pc() {
        var a = q.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
    }

    function qc() {
        var a = void 0 === a ? q : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function rc(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = this.label + "_" + this.type + "_" + Math.random();
        this.slotId = void 0
    };
    var J = q.performance,
        sc = !!(J && J.mark && J.measure && J.clearMarks),
        tc = Ya(function() {
            var a;
            if (a = sc) {
                var b;
                if (null === oc) {
                    oc = "";
                    try {
                        a = "";
                        try {
                            a = q.top.location.hash
                        } catch (c) {
                            a = q.location.hash
                        }
                        a && (oc = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = oc;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function uc() {
        var a = vc;
        this.f = [];
        this.g = a || q;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.f = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.a = tc() || (null != b ? b : 1 > Math.random())
    }

    function wc(a) {
        a && J && tc() && (J.clearMarks("goog_" + a.uniqueId + "_start"), J.clearMarks("goog_" + a.uniqueId + "_end"))
    }
    uc.prototype.start = function(a, b) {
        if (!this.a) return null;
        var c = qc() || pc();
        a = new rc(a, b, c);
        b = "goog_" + a.uniqueId + "_start";
        J && tc() && J.mark(b);
        return a
    };

    function xc() {
        var a = yc;
        this.v = zc;
        this.h = !0;
        this.g = null;
        this.A = this.a;
        this.f = void 0 === a ? null : a;
        this.i = !1
    }

    function Ac(a, b, c, d) {
        try {
            if (a.f && a.f.a) {
                var e = a.f.start(b.toString(), 3);
                var g = c();
                var f = a.f;
                c = e;
                if (f.a && t(c.value)) {
                    var h = qc() || pc();
                    c.duration = h - c.value;
                    var k = "goog_" + c.uniqueId + "_end";
                    J && tc() && J.mark(k);
                    f.a && f.f.push(c)
                }
            } else g = c()
        } catch (l) {
            f = a.h;
            try {
                wc(e), f = (d || a.A).call(a, b, new Bc(Cc(l), l.fileName, l.lineNumber), void 0, void 0)
            } catch (p) {
                a.a(217, p)
            }
            if (!f) throw l;
        }
        return g
    }

    function Dc(a, b) {
        var c = K;
        return function(d) {
            for (var e = [], g = 0; g < arguments.length; ++g) e[g] = arguments[g];
            return Ac(c, a, function() {
                return b.apply(void 0, e)
            }, void 0)
        }
    }
    xc.prototype.a = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var g = new ec;
            g.h = !0;
            ic(g, 1, "context", a);
            b.error && b.meta && b.id || (b = new Bc(Cc(b), b.fileName, b.lineNumber));
            b.msg && ic(g, 2, "msg", b.msg.substring(0, 512));
            b.file && ic(g, 3, "file", b.file);
            0 < b.line && ic(g, 4, "line", b.line);
            var f = b.meta || {};
            if (this.g) try {
                this.g(f)
            } catch (Ha) {}
            if (d) try {
                d(f)
            } catch (Ha) {}
            b = [f];
            g.a.push(5);
            g.f[5] = b;
            d = q;
            b = [];
            f = null;
            do {
                var h = d;
                if (C(h)) {
                    var k = h.location.href;
                    f = h.document && h.document.referrer || null
                } else k = f, f = null;
                b.push(new dc(k || "", h));
                try {
                    d = h.parent
                } catch (Ha) {
                    d = null
                }
            } while (d && h != d);
            k = 0;
            for (var l = b.length - 1; k <= l; ++k) b[k].depth = l - k;
            h = q;
            if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)
                for (l = 1; l < b.length; ++l) {
                    var p = b[l];
                    p.url || (p.url = h.location.ancestorOrigins[l - 1] || "", p.O = !0)
                }
            var m = new dc(q.location.href, q, !1);
            h = null;
            var v = b.length - 1;
            for (p = v; 0 <= p; --p) {
                var u = b[p];
                !h && bc.test(u.url) && (h = u);
                if (u.url && !u.O) {
                    m = u;
                    break
                }
            }
            u = null;
            var Ia = b.length && b[v].url;
            0 != m.depth && Ia && (u = b[v]);
            var oa = new cc(m, u);
            oa.f && ic(g, 6, "top", oa.f.url || "");
            ic(g, 7, "url", oa.a.url || "");
            lc(this.v, e, g, this.i, c)
        } catch (Ha) {
            try {
                lc(this.v, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Cc(Ha),
                    url: oa && oa.a.url
                }, this.i, c)
            } catch ( of ) {}
        }
        return this.h
    };

    function Cc(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    }

    function Bc(a, b, c) {
        ac.call(this, Error(a), {
            message: a,
            file: void 0 === b ? "" : b,
            line: void 0 === c ? -1 : c
        })
    }
    ha(Bc, ac);

    function Ec(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, Ec) : this.stack = Error().stack || ""
    }
    ha(Ec, Error);
    var zc, K, vc = Nb(),
        yc = new uc;

    function Fc(a) {
        null != a && (vc.google_measure_js_timing = a);
        vc.google_measure_js_timing || (a = yc, a.a = !1, a.f != a.g.google_js_reporting_queue && (tc() && za(a.f, wc), a.f.length = 0))
    }
    zc = new function() {
        var a = void 0 === a ? z : a;
        this.h = "http:" === a.location.protocol ? "http:" : "https:";
        this.f = "pagead2.googlesyndication.com";
        this.g = "/pagead/gen_204?id=";
        this.a = .01;
        this.i = Math.random()
    };
    K = new xc;
    "complete" == vc.document.readyState ? Fc() : yc.a && E(vc, "load", function() {
        Fc()
    });

    function Gc(a, b, c) {
        return Ac(K, a, c, b)
    }

    function Hc(a, b) {
        return Dc(a, b)
    }
    var Ic = K.a;
    var Jc = null;

    function Kc() {
        if (!Jc) {
            for (var a = q, b = a, c = 0; a && a != a.parent;)
                if (a = a.parent, c++, C(a)) b = a;
                else break;
            Jc = b
        }
        return Jc
    };
    var Lc = {
            b: "368226900",
            c: "368226901"
        },
        Mc = {
            b: "368226910",
            c: "368226911"
        },
        Nc = {
            b: "368226950",
            c: "368226951"
        },
        Oc = {
            b: "368226960",
            c: "368226961"
        },
        Pc = {
            b: "368226500",
            c: "368226501"
        },
        Qc = {
            b: "36998750",
            c: "36998751"
        },
        Rc = {
            b: "4089040",
            ba: "4089042"
        },
        Sc = {
            b: "40993900",
            c: "40993901"
        },
        Tc = {
            b: "40993910",
            c: "40993911"
        },
        Uc = {
            j: "20040067",
            b: "20040068",
            G: "1337"
        },
        Vc = {
            b: "21060548",
            j: "21060549"
        },
        Wc = {
            b: "21060623",
            j: "21060624"
        },
        Xc = {
            b: "22324606",
            c: "22324607"
        },
        Yc = {
            b: "21062271",
            j: "21062272"
        },
        Zc = {
            B: "62710015",
            b: "62710016"
        },
        $c = {
            b: "21070024",
            c: "21070025"
        },
        ad = {
            b: "21070013",
            c: "21070014"
        },
        bd = {
            b: "21060518",
            c: "21060519"
        },
        cd = {
            b: "21060849",
            J: "21060850",
            C: "21060851",
            I: "21060852",
            H: "21060853"
        },
        dd = {
            b: "21061394",
            c: "21061395"
        },
        L = {
            b: "182982000",
            c: "182982100"
        },
        ed = {
            b: "182982200",
            c: "182982300"
        },
        fd = {
            b: "182983000",
            c: "182983100"
        },
        gd = {
            b: "182983200",
            c: "182983300"
        },
        hd = {
            b: "10583695",
            c: "10583696"
        },
        id = {
            b: "10593695",
            c: "10593696"
        },
        jd = {
            b: "21062077",
            wa: "21062078",
            xa: "21062079",
            ya: "21062080",
            za: "21062081"
        },
        kd = {
            b: "10573695",
            $: "10573696",
            aa: "10573697"
        },
        ld = {
            b: "20195144",
            c: "20195143"
        },
        md = {
            b: "21062569",
            c: "21062570"
        },
        nd = {
            b: "214678000",
            c: "214678100"
        };

    function od() {
        this.debugCard = null;
        this.debugCardRequested = !1
    };
    var pd = {
            google: 1,
            googlegroups: 1,
            gmail: 1,
            googlemail: 1,
            googleimages: 1,
            googleprint: 1
        },
        qd = /(corp|borg)\.google\.com:\d+$/;

    function rd(a) {
        this.a = this.f = null;
        "function" == sa(a) ? this.a = a : this.f = a
    }
    rd.prototype.getVerifier = function(a) {
        return this.f ? this.f[a] : null
    };
    rd.prototype.getSchema = function(a) {
        return this.a ? this.a(a) : null
    };
    rd.prototype.doesReturnAnotherSchema = function() {
        return this.a ? !0 : !1
    };

    function sd() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.isReactiveTagFirstOnPage = this.wasReactiveAdConfigHandlerRegistered = this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.adRegion = this.floatingAdsFillMessage = null;
        this.disablePageHeightCheck = !1
    };

    function M(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    (function(a) {
        function b(a) {
            a.l && (c[a.name] = a.l)
        }
        var c = {
            msg_type: /^[a-zA-Z0-9_-]+$/
        };
        Fb(Tb, b);
        for (var d = 0; d < Ub.length; d++) b(Ub[d]);
        for (d = 0; d < a.length; d++) b(a[d]);
        return new rd(c)
    })([]);
    var td = {
        9: "400",
        10: "100",
        11: "0.10",
        12: "0.1",
        13: "0.001",
        19: "0.01",
        22: "0.01",
        23: "0.2",
        24: "0.05",
        27: "0.001",
        28: "0.001",
        29: "0.01",
        34: "0.001",
        37: "0.0",
        40: "0.15",
        43: "1",
        47: "0.01",
        56: "0.001",
        60: "0.03",
        66: "0.0",
        67: "0.04",
        76: "0.004",
        77: "true",
        78: "0.1",
        79: "1200",
        82: "3",
        83: "1.0",
        92: "0.02",
        96: "700",
        97: "10",
        98: "0.01",
        99: "600",
        100: "100",
        103: "0.01",
        108: "500",
        109: "100",
        111: "0.1",
        112: "0",
        114: "0.01",
        115: "170",
        116: "30",
        117: "0.02",
        118: "false",
        120: "0",
        121: "1000",
        126: "0.001",
        127: "0.1",
        128: "false",
        129: "0.02",
        135: "0.0",
        136: "0.02",
        137: "0.01",
        141: "0.1",
        142: "1",
        143: "0.06",
        144: "0",
        145: "2",
        146: "0.10",
        147: "true",
        148: "0.02",
        149: "0",
        150: "1000",
        151: "0.02"
    };
    var ud = null;

    function vd() {
        this.a = td
    }

    function N(a, b) {
        a = parseFloat(a.a[b]);
        return isNaN(a) ? 0 : a
    }

    function wd() {
        ud || (ud = new vd);
        return ud
    };
    var xd = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function yd(a, b) {
        do {
            var c = D(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    }

    function zd(a) {
        var b = 0,
            c;
        for (c in xd) - 1 != a.indexOf(c) && (b |= xd[c]);
        return b
    }

    function Ad(a, b, c, d) {
        if (Pb(a) != a) return G(a) ? 3 : 16;
        if (!(488 > M(a).clientWidth)) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var e = M(a).clientWidth;
        if (!e || .3 < (e - c) / e) a = 6;
        else {
            if (c = "true" != d.google_full_width_responsive) a: {
                c = M(a).clientWidth;
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = D(b, a)) && (e = rb(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    } c = !1
            }
            a = c ? 7 : !0
        }
        return a
    };

    function O(a, b) {
        this.g = a;
        this.f = b
    }
    O.prototype.minWidth = function() {
        return this.g
    };
    O.prototype.height = function() {
        return this.f
    };
    O.prototype.a = function(a) {
        return 300 < a && 300 < this.f ? this.g : Math.min(1200, Math.round(a))
    };
    O.prototype.h = function(a) {
        return this.a(a) + "x" + this.height()
    };

    function Bd(a, b, c) {
        var d = rb;
        d = void 0 === d ? function(a) {
            return a
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = D(a, b)) && e[c] && d(e[c]) || null
    }

    function Cd(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }

    function Dd(a, b, c, d) {
        var e = a && Ed(c, b),
            g = Fd(b, d);
        return function(a) {
            return !(e && a.height() >= g)
        }
    }

    function Gd(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function Ed(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            var e = {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (g) {
            e = null
        }
        a = e;
        return (a ? a.y : 0) < M(b).clientHeight - 100
    }

    function Hd(a, b) {
        var c = Infinity;
        do {
            var d = Bd(b, a, "height");
            d && (c = Math.min(c, d));
            (d = Bd(b, a, "maxHeight")) && (c = Math.min(c, d))
        } while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Id(a, b) {
        var c = Bd(b, a, "height");
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Bd(b, a, "height");
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && rb(b.style.height)) && (c = Math.min(c, d)), (d = Bd(b, a, "maxHeight")) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Fd(a, b) {
        var c = 0 == Kb(a);
        return b && c ? Math.max(250, 2 * M(a).clientHeight / 3) : 250
    };

    function Jd(a, b, c) {
        c || (c = Bb ? "https" : "http");
        q.location && "https:" == q.location.protocol && "http" == c && (c = "https");
        return [c, "://", a, b].join("")
    };

    function Kd(a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        var g = a.createElement("link");
        try {
            g.rel = c;
            if (x(c.toLowerCase(), "stylesheet")) var f = ab(b);
            else {
                if (b instanceof A) var h = ab(b);
                else {
                    if (b instanceof B) var k = b instanceof B && b.constructor === B && b.ca === bb ? b.F : "type_error:SafeUrl";
                    else {
                        if (b instanceof B) var l = b;
                        else b = "object" == typeof b && b.g ? b.a() : String(b), cb.test(b) || (b = "about:invalid#zClosurez"), l = db(b);
                        k = l.a()
                    }
                    h = k
                }
                f = h
            }
            g.href = f
        } catch (p) {
            return
        }
        d && "preload" == c && (g.as = d);
        e && (g.nonce = e);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(g)
        } catch (p) {}
    };

    function Ld(a, b) {
        E(a, "load", function() {
            if (!a.adsbygoogle) {
                a.adsbygoogle = [];
                var c = Jd(Ob(), "/pagead/js/adsbygoogle.js");
                kb(a.document, c)
            }
            a.adsbygoogle.push(Md(b))
        })
    }

    function Md(a) {
        var b = {},
            c = {};
        a = (c.enable_page_level_ads = (b.pltais = !0, b), c.google_ad_client = a, c);
        a.enable_page_level_ads.google_ad_channel = "AutoInsertAutoAdCode";
        return a
    };

    function Nd(a, b, c) {
        function d(a) {
            a ? (a = String(a).split(","), a = 0 <= ya(a, String(b))) : a = !1;
            return a
        }
        c = void 0 === c ? "" : c;
        a = G(a) || a;
        try {
            var e = tb({}, JSON.parse(a.localStorage.getItem("google_adsense_labs")))
        } catch (g) {
            e = {}
        }
        return Od(a, b) ? !0 : c ? d(e[c]) : Qa(e, d)
    }

    function Od(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && 0 <= ya(a.split(","), b.toString())
    };
    var Pd = {},
        Qd = (Pd.client = "google_ad_client", Pd.format = "google_ad_format", Pd.slotname = "google_ad_slot", Pd.output = "google_ad_output", Pd.ad_type = "google_ad_type", Pd);
    K.h = !yb;

    function P(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        O.call(this, a, b);
        this.w = c;
        this.ga = d
    }
    ha(P, O);
    P.prototype.V = function() {
        return this.w
    };

    function Rd(a) {
        return function(b) {
            return !!(b.w & a)
        }
    };
    var Sd = new I(0, 169),
        Td = new I(170, 199),
        Ud = new I(400, 499),
        Vd = new I(500, 599),
        Wd = new I(600, 699),
        Xd = new I(700, 799);

    function Yd(a) {
        var b = a.google_ad_modifications = a.google_ad_modifications || {};
        if (!b.plle) {
            b.plle = !0;
            var c = b.eids = b.eids || [];
            b = b.loeids = b.loeids || [];
            var d = wd();
            var e = wd();
            var g = G(a) || a;
            g = Yb(g.location, "google_responsive_slot_debug") || Yb(g.location, "google_responsive_slot_preview");
            var f = Nd(a, 11);
            g ? (g = L, f = ed, e = g.c) : f ? (g = fd, f = gd, e = Q(a, new I(0, 999), N(e, 120), N(e, 121), [g.b, g.c], 2)) : (g = L, f = ed, e = Q(a, Xd, N(e, 96), N(e, 97), [g.b, g.c]));
            if (e) {
                var h = {};
                g = (h[g.b] = f.b, h[g.c] = f.c, h)[e];
                e = {
                    ia: e,
                    ka: g
                }
            } else e = null;
            g = e || {};
            e = g.ia;
            g = g.ka;
            e && g && (R(c, e), R(c, g));
            f = Pc;
            e = S(a, N(d, 136), [f.b, f.c]);
            R(c, e);
            f = Mc;
            e = Q(a, Sd, N(d, 144), N(d, 145), [f.b, f.c]);
            R(b, e);
            h = Lc;
            e == f.b ? g = h.b : e == f.c ? g = h.c : g = "";
            R(c, g);
            Nd(a, 12) && (f = Oc, h = Nc, e = Q(a, new I(0, 999), N(d, 149), N(d, 150), [f.b, f.c], 4), R(b, e), e == f.b ? g = h.b : e == f.c ? g = h.c : g = "", R(c, g));
            f = Rc;
            R(c, Q(a, Ud, N(d, 9), N(d, 10), [f.b, f.ba]));
            f = Tc;
            e = Q(a, Vd, N(d, 108), N(d, 109), [f.b, f.c]);
            R(b, e);
            h = Sc;
            e == f.b ? g = h.b : e == f.c ? g = h.c : g = "";
            R(c, g);
            Ba("") && R(b, "");
            f = Zc;
            e = S(a, N(d, 11), [f.b, f.B]);
            R(c, e);
            h = "";
            e === f.b ? h = "62710018" : e === f.B && (h = "62710017");
            R(c, h);
            f = ad;
            e = Q(a, Td, N(d, 115), N(d, 116), [f.b, f.c]);
            R(c, e);
            e || (f = $c, e = S(a, N(d, 12), [f.b, f.c]), R(c, e));
            f = md;
            e = S(a, N(d, 146), [f.b, f.c]);
            R(c, e);
            f = bd;
            e = S(a, N(d, 56), [f.b, f.c]);
            R(c, e);
            f = Uc;
            e = S(a, N(d, 13), [f.j, f.b]);
            R(c, e);
            e = S(a, 0, [f.G]);
            R(c, e);
            f = Vc;
            e = S(a, N(d, 60), [f.j, f.b]);
            R(c, e);
            e == Vc.j && (f = Wc, e = S(a, N(d, 66), [f.j, f.b]), R(c, e), f = Yc, e = S(a, N(d, 137), [f.j, f.b]), R(c, e), e == Wc.j && (f = Xc, e = S(a, N(d, 135), [f.j, f.b]), R(c, e)));
            f = Qc;
            e = S(a, N(d, 98), [f.b, f.c]);
            R(c, e);
            if (/^true$/.test(d.a[77]) || yb) f = cd, e = S(a, N(d, 76), [f.b, f.J, f.C, f.I]), R(c, e), e || (e = S(a, N(d, 83), [f.H]), R(c, e));
            f = dd;
            e = S(a, N(d, 92), [f.b, f.c]);
            R(c, e);
            f = hd;
            e = Q(a, Wd, N(d, 99), N(d, 100), [f.b, f.c]);
            R(b, e);
            h = id;
            e == f.b ? g = h.b : e == f.c ? g = h.c : g = "";
            R(c, g);
            e = [];
            g = 0;
            for (var k in jd) e[g++] = jd[k];
            R(b, S(a, N(d, 114), e));
            f = kd;
            e = S(a, N(d, 127), [f.b, f.$, f.aa]);
            R(c, e);
            f = ld;
            e = S(a, N(d, 141), [f.c, f.b]);
            R(c, e);
            f = nd;
            e = S(a, N(d, 151), [f.b, f.c]);
            R(c, e)
        }
    }

    function R(a, b) {
        b && a.push(b)
    }

    function Zd(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        d = G(a) || a;
        d = (d = (d = d.location && d.location.hash) && (d.match(/google_plle=([\d,]+)/) || d.match(/deid=([\d,]+)/))) && d[1];
        var e;
        if (e = !!d) a: {
            d = wa(x, d);e = c.length;
            for (var g = r(c) ? c.split("") : c, f = 0; f < e; f++)
                if (f in g && d.call(void 0, g[f], f, c)) {
                    e = !0;
                    break a
                } e = !1
        }
        return e
    }

    function S(a, b, c) {
        for (var d = 0; d < c.length; d++)
            if (Zd(a, c[d])) return c[d];
        a: {
            if (!ob() && (a = Math.random(), a < b)) {
                a = lb(q);
                b = c[Math.floor(a * c.length)];
                break a
            }
            b = null
        }
        return b
    }

    function Q(a, b, c, d, e, g) {
        g = void 0 === g ? 1 : g;
        for (var f = 0; f < e.length; f++)
            if (Zd(a, e[f])) return e[f];
        g = void 0 === g ? 1 : g;
        0 >= d ? c = null : (f = new mc(c, c + d - 1), (d = d % g || d / g % e.length) || (b = b.a, d = !(b.start <= f.start && b.a >= f.a)), d ? c = null : (a = nc(a), c = null !== a && f.start <= a && f.a >= a ? e[Math.floor((a - c) / g) % e.length] : null));
        return c
    };

    function $d(a, b, c, d, e, g, f, h, k, l, p) {
        this.ra = a;
        this.f = b;
        this.w = void 0 === c ? null : c;
        this.Y = void 0 === d ? null : d;
        this.a = void 0 === e ? null : e;
        this.g = void 0 === g ? null : g;
        this.R = this.P = "";
        this.h = void 0 === f ? null : f;
        this.i = void 0 === h ? null : h;
        this.T = "";
        this.v = void 0 === k ? null : k;
        this.A = void 0 === l ? null : l;
        this.Z = void 0 === p ? null : p
    }

    function ae(a, b, c) {
        null != a.w && (c.google_responsive_formats = a.w);
        null != a.Y && (c.google_safe_for_responsive_override = a.Y);
        null != a.a && (!0 === a.a ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.a));
        null != a.g && !0 !== a.g && (c.gfwrnher = a.g);
        var d = a.f.a(b),
            e = a.f.height();
        1 != c.google_ad_resize && (c.google_ad_width = d, c.google_ad_height = e, c.google_ad_format = a.f.h(b), c.google_responsive_auto_format = a.ra, c.google_ad_resizable = !0, c.google_override_format = 1, c.google_loader_features_used = 128, !0 === a.a && (c.gfwrnh = a.f.height() + "px"));
        null != a.P && (c.gfwroml = a.P);
        null != a.R && (c.gfwromr = a.R);
        null != a.h && (c.gfwroh = a.h, c.google_resizing_height = a.h);
        null != a.i && (c.gfwrow = a.i, c.google_resizing_width = a.i);
        null != a.T && (c.gfwroz = a.T);
        null != a.v && (c.gml = a.v);
        null != a.A && (c.gmr = a.A);
        null != a.Z && (c.gzi = a.Z);
        b = Nb();
        b = G(b) || b;
        if (Yb(b.location, "google_responsive_slot_debug") || Zd(b, L.b, L.c)) c.ds = "outline:thick dashed " + (d && e ? !0 !== a.a || !0 !== a.g ? "#ffa500" : "#0f0" : "#f00") + " !important;"
    };
    var be = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function ce(a) {
        var b = 0;
        Fb(be, function(c) {
            null != a[c] && ++b
        });
        if (0 === b) return !1;
        if (b === be.length) return !0;
        throw new Ec("Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.");
    };

    function de(a, b) {
        O.call(this, a, b)
    }
    ha(de, O);
    de.prototype.a = function() {
        return this.minWidth()
    };

    function ee(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function fe(a, b, c) {
        for (var d = a.length, e = null, g = 0; g < d; ++g) {
            var f = a[g];
            if (b(f)) {
                if (!c || c(f)) return f;
                null === e && (e = f)
            }
        }
        return e
    };
    var T = [new P(970, 90, 2), new P(728, 90, 2), new P(468, 60, 2), new P(336, 280, 1), new P(320, 100, 2), new P(320, 50, 2), new P(300, 600, 4), new P(300, 250, 1), new P(250, 250, 1), new P(234, 60, 2), new P(200, 200, 1), new P(180, 150, 1), new P(160, 600, 4), new P(125, 125, 1), new P(120, 600, 4), new P(120, 240, 4), new P(120, 120, 1, !0)],
        ge = [T[6], T[12], T[3], T[0], T[7], T[14], T[1], T[8], T[10], T[4], T[15], T[2], T[11], T[5], T[13], T[9], T[16]];

    function he(a, b, c, d, e) {
        var g = Gc(247, Ic, function() {
                var g, f;
                if ("false" != e.google_full_width_responsive || c.location && "#gfwrffwaifhp" == c.location.hash)
                    if (!(f = "auto" == b || 0 < (zd(b) & 1)) && (f = "autorelaxed" == b) && (f = c.google_ad_modifications, f = Hb(f ? f.loeids || [] : [], hd.c)), f || ie(b) || 1 == e.google_ad_resize) {
                        f = Ad(c, d, a, e);
                        if (!0 === f) {
                            f = M(c).clientWidth;
                            var h = f - a;
                            f = f && 0 <= h ? !0 : f ? -10 > h ? 11 : 0 > h ? 14 : 12 : 10;
                            f = "true" == e.google_full_width_responsive || yd(d, c) ? f : 9
                        }
                        f = !0 !== f ? {
                            m: a,
                            o: f
                        } : {
                            m: M(c).clientWidth || a,
                            o: !0
                        }
                    } else f = {
                        m: a,
                        o: 2
                    };
                else f = {
                    m: a,
                    o: 1
                };
                h = f;
                f = h.m;
                h = h.o;
                if (!0 !== h) f = {
                    m: a,
                    o: h
                };
                else if (g = D(d, c)) {
                    var k = rb(g.paddingLeft) || 0;
                    g = g.direction;
                    var l = f - a;
                    if (e.google_ad_resize) k = -1 * (l + k) + "px";
                    else {
                        for (var m = d, p = 0, u = 0; 100 > u && m; u++) p += m.offsetLeft + m.clientLeft - m.scrollLeft, m = m.offsetParent;
                        k = p + k;
                        k = "rtl" == g ? -1 * (l - k) + "px" : -1 * k + "px"
                    }
                    g = "rtl" == g;
                    f = {
                        m: f,
                        o: h,
                        marginLeft: g ? void 0 : k,
                        marginRight: g ? k : void 0,
                        zIndex: 30
                    }
                } else f = {
                    m: a,
                    o: h
                };
                return f
            }),
            f = g.o,
            h = g.marginLeft,
            k = g.marginRight,
            l = g.zIndex,
            p = e.google_ad_height || 0,
            m = je(g.m, b, c, d, e, !0 === f);
        g = m.u;
        var v = m.s,
            u = m.V;
        m = m.ha;
        var Ia = ke(b, u);
        return new $d(Ia, g, u, m, f, v, p, a, h, k, l)
    }

    function ie(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function je(a, b, c, d, e, g) {
        b = "auto" == b ? .25 >= a / Math.min(1200, M(c).clientWidth) ? 4 : 3 : zd(b);
        var f = !1,
            h = !1;
        if (ib()) {
            var k = yd(d, c);
            var l = Ed(d, c);
            f = !l && k;
            h = l && k
        }
        l = (f ? ge : T).slice(0);
        var p = 488 > M(c).clientWidth;
        p = [Cd(a), le(p), Dd(p, c, d, h), Rd(b)];
        null != e.google_max_responsive_height && p.push(Gd(e.google_max_responsive_height));
        var m = [function(a) {
            return !a.ga
        }];
        if (f || h) f = f ? Hd(c, d) : Id(c, d), m.push(Gd(f));
        var v = fe(l, ee(p), ee(m));
        if (!v) throw new Ec("No slot size for availableWidth=" + a);
        f = Gc(248, Ic, function() {
            var b;
            a: if (g) {
                if (e.gfwrnh && (b = rb(e.gfwrnh))) {
                    b = {
                        u: new de(a, b),
                        s: !0
                    };
                    break a
                }
                if ("true" != e.google_full_width_responsive && Ed(d, c) && !e.google_resizing_allowed) b = {
                    u: new de(a, v.height()),
                    s: 101
                };
                else {
                    b = a / 1.2;
                    var f = e.google_resizing_allowed || "true" == e.google_full_width_responsive ? Infinity : Hd(c, d);
                    f = Math.min(b, f);
                    if (f < .5 * b || 100 > f) f = b;
                    b = {
                        u: new de(a, Math.floor(f)),
                        s: f < b ? 102 : !0
                    }
                }
            } else b = {
                u: v,
                s: 100
            };
            return b
        });
        return {
            u: f.u,
            s: f.s,
            V: b,
            ha: k
        }
    }

    function ke(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function le(a) {
        return function(b) {
            return !(320 == b.minWidth() && (a && 50 == b.height() || !a && 100 == b.height()))
        }
    };

    function me(a) {
        var b = a.google_ad_format;
        if ("autorelaxed" == b) return ce(a) ? 9 : 5;
        if (ie(b)) return 1;
        if ("link" == b) return 4;
        if ("fluid" == b) return 8
    };

    function U(a) {
        this.h = [];
        this.f = a || window;
        this.a = 0;
        this.g = null;
        this.i = 0
    }
    var ne;
    n = U.prototype;
    n.ea = function(a, b) {
        0 != this.a || 0 != this.h.length || b && b != window ? this.M(a, b) : (this.a = 2, this.X(new oe(a, window)))
    };
    n.M = function(a, b) {
        this.h.push(new oe(a, b || this.f));
        pe(this)
    };
    n.ja = function(a) {
        this.a = 1;
        if (a) {
            var b = Hc(188, w(this.W, this, !0));
            this.g = this.f.setTimeout(b, a)
        }
    };
    n.W = function(a) {
        a && ++this.i;
        1 == this.a && (null != this.g && (this.f.clearTimeout(this.g), this.g = null), this.a = 0);
        pe(this)
    };
    n.pa = function() {
        return !(!window || !Array)
    };
    n.fa = function() {
        return this.i
    };

    function pe(a) {
        var b = Hc(189, w(a.qa, a));
        a.f.setTimeout(b, 0)
    }
    n.qa = function() {
        if (0 == this.a && this.h.length) {
            var a = this.h.shift();
            this.a = 2;
            var b = Hc(190, w(this.X, this, a));
            a.a.setTimeout(b, 0);
            pe(this)
        }
    };
    n.X = function(a) {
        this.a = 0;
        a.f()
    };

    function qe(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }

    function re(a) {
        return !!a && ("object" === typeof a || "function" === typeof a) && qe(a) && Gb(a.nq) && Gb(a.nqa) && Gb(a.al) && Gb(a.rl)
    }

    function se() {
        if (ne && qe(ne)) return ne;
        var a = Kc(),
            b = a.google_jobrunner;
        return re(b) ? ne = b : a.google_jobrunner = ne = new U(a)
    }

    function te(a, b) {
        se().nq(a, b)
    }

    function ue(a, b) {
        se().nqa(a, b)
    }
    U.prototype.nq = U.prototype.ea;
    U.prototype.nqa = U.prototype.M;
    U.prototype.al = U.prototype.ja;
    U.prototype.rl = U.prototype.W;
    U.prototype.sz = U.prototype.pa;
    U.prototype.tc = U.prototype.fa;

    function oe(a, b) {
        this.f = a;
        this.a = b
    };

    function ve(a, b) {
        var c = G(b);
        if (c) {
            c = M(c).clientWidth;
            var d = D(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" != d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function we(a) {
        var b = this;
        this.a = a;
        a.google_iframe_oncopy || (a.google_iframe_oncopy = {
            handlers: {},
            upd: function(a, d) {
                var c = xe("rx", a),
                    g = Number;
                a: {
                    if (a && (a = a.match("dt=([^&]+)")) && 2 == a.length) {
                        a = a[1];
                        break a
                    }
                    a = ""
                }
                g = g(a);
                g = (new Date).getTime() - g;
                c = c.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= g ? "M" : 0 <= g ? g : "-M"));
                b.set(d, c);
                return c
            }
        });
        this.f = a.google_iframe_oncopy
    }
    we.prototype.set = function(a, b) {
        var c = this;
        this.f.handlers[a] = b;
        this.a.addEventListener && this.a.addEventListener("load", function() {
            var b = c.a.document.getElementById(a);
            try {
                var e = b.contentWindow.document;
                if (b.onload && e && (!e.body || !e.body.firstChild)) b.onload()
            } catch (g) {}
        }, !1)
    };

    function xe(a, b) {
        var c = new RegExp("\\b" + a + "=(\\d+)"),
            d = c.exec(b);
        d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
        return b
    }
    var ye = Ca("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
    var ze = "google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_layout google_ad_layout_key google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_width google_additional_ins_elements google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ad_positions google_content_recommendation_columns_num google_content_recommendation_rows_num google_content_recommendation_ui_type google_content_recommendation_use_square_imgs google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_eids google_enable_content_recommendations google_enable_ose google_encoding google_font_face google_font_size google_frame_id google_full_width_responsive_allowed efwr google_full_width_responsive gfwroh gfwrow gfwroml gfwromr gfwroz gfwrnh gfwrnwer gfwrnher google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_max_responsive_height google_mtl google_native_ad_template google_native_settings_key google_num_radlinks google_num_radlinks_per_unit google_only_pyv_ads google_override_format google_page_url google_pgb_reactive google_pucrd google_referrer_url google_region google_resizing_allowed google_resizing_height google_resizing_width rpe google_responsive_formats google_responsive_auto_format google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_scs google_source_type google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_tag_origin google_tag_partner google_targeting google_tfs google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_yt_pt google_yt_up google_package".split(" "),
        Ae = {},
        Be = (Ae.google_ad_modifications = !0, Ae.google_analytics_domain_name = !0, Ae.google_analytics_uacct = !0, Ae.google_pause_ad_requests = !0, Ae);

    function Ce(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && /google_ad_client/.test(a[1]) ? a[1] : null
    }

    function De(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && /google_ad_client/.test(a[1])) return a[1];
        return null
    }

    function Ee(a) {
        try {
            a: {
                var b = a.document.getElementsByTagName("script"),
                    c = a.navigator && a.navigator.userAgent || "",
                    d;
                if (!(d = /appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(c))) {
                    var e;
                    if (e = /i(phone|pad|pod)/i.test(c)) {
                        var g;
                        if (g = /applewebkit/i.test(c) && !/version|safari/i.test(c)) {
                            var f = void 0 === f ? z : f;
                            try {
                                var h = !(!f.navigator.standalone && !Pb(f).navigator.standalone)
                            } catch (u) {
                                h = !1
                            }
                            g = !h
                        }
                        e = g
                    }
                    d = e
                }
                c = d ? Ce : De;
                for (var k = b.length - 1; 0 <= k; k--) {
                    var l = b[k];
                    if (!l.google_parsed_script) {
                        l.google_parsed_script = !0;
                        var p = c(l);
                        if (p) {
                            var m = p;
                            break a
                        }
                    }
                }
                m = null
            }
        }
        catch (u) {
            return !1
        }
        if (!m) return !1;
        try {
            b = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
            k = {};
            for (var v; v = b.exec(m);) k[v[1]] = Fe(v[2]);
            Ge(k, a)
        } catch (u) {
            return !1
        }
        return !!a.google_ad_client
    }

    function He(a) {
        for (var b = 0, c = ze.length; b < c; b++) {
            var d = ze[b];
            Be[d] || (a[d] = null)
        }
    }

    function Fe(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        var c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (d) {}
        }
    }

    function Ge(a, b) {
        for (var c = 0; c < ze.length; c++) {
            var d = ze[c];
            null == b[d] && null != a[d] && (b[d] = a[d])
        }
    };

    function Ie() {
        var a = q;
        this.f = a = void 0 === a ? q : a;
        this.i = "https://securepubads.g.doubleclick.net/static/3p_cookie.html";
        this.a = 2;
        this.g = [];
        this.h = !1;
        a: {
            a = jb(!1, 50);b: {
                try {
                    var b = q.parent;
                    if (b && b != q) {
                        var c = b;
                        break b
                    }
                } catch (f) {}
                c = null
            }
            c && a.unshift(c);a.unshift(q);
            var d;
            for (c = 0; c < a.length; ++c) try {
                var e = a[c],
                    g = Je(e);
                if (g) {
                    this.a = Ke(g);
                    if (2 != this.a) break a;
                    !d && C(e) && (d = e)
                }
            } catch (f) {}
            this.f = d || this.f
        }
    }

    function Le(a) {
        if (2 != Me(a)) {
            for (var b = 1 == Me(a), c = 0; c < a.g.length; c++) try {
                a.g[c](b)
            } catch (d) {}
            a.g = []
        }
    }

    function Ne(a) {
        var b = Je(a.f);
        b && 2 == a.a && (a.a = Ke(b))
    }

    function Me(a) {
        Ne(a);
        return a.a
    }

    function Oe(a) {
        var b = Pe;
        b.g.push(a);
        if (2 != b.a) Le(b);
        else if (b.h || (E(b.f, "message", function(a) {
                var c = Je(b.f);
                if (c && a.source == c && 2 == b.a) {
                    switch (a.data) {
                        case "3p_cookie_yes":
                            b.a = 1;
                            break;
                        case "3p_cookie_no":
                            b.a = 0
                    }
                    Le(b)
                }
            }), b.h = !0), Je(b.f)) Le(b);
        else {
            a = (new fb(b.f.document)).a.createElement("IFRAME");
            a.src = b.i;
            a.name = "detect_3p_cookie";
            a.style.visibility = "hidden";
            a.style.display = "none";
            a.onload = function() {
                Ne(b);
                Le(b)
            };
            try {
                b.f.document.body.appendChild(a)
            } catch (c) {}
        }
    }

    function Je(a) {
        return a.frames && a.frames[Ra("detect_3p_cookie")] || null
    }

    function Ke(a) {
        return sb(a, "3p_cookie_yes") ? 1 : sb(a, "3p_cookie_no") ? 0 : 2
    };
    var Qe = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        Re = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;

    function Se(a) {
        return Qe.test(a) && !Re.test(a)
    }
    var V = q,
        Pe;

    function Te(a) {
        a = "https://" + ("adservice" + a + "/adsid/integrator.js");
        var b = ["domain=" + encodeURIComponent(q.location.hostname)];
        W[3] >= +new Date && b.push("adsid=" + encodeURIComponent(W[1]));
        return a + "?" + b.join("&")
    }
    var W, X;

    function Ue() {
        V = q;
        W = V.googleToken = V.googleToken || {};
        var a = +new Date;
        W[1] && W[3] > a && 0 < W[2] || (W[1] = "", W[2] = -1, W[3] = -1, W[4] = "", W[6] = "");
        X = V.googleIMState = V.googleIMState || {};
        Se(X[1]) || (X[1] = ".google.com");
        "array" == sa(X[5]) || (X[5] = []);
        ma(X[6]) || (X[6] = !1);
        "array" == sa(X[7]) || (X[7] = []);
        t(X[8]) || (X[8] = 0)
    }
    var Y = {
        D: function() {
            return 0 < X[8]
        },
        la: function() {
            X[8]++
        },
        ma: function() {
            0 < X[8] && X[8]--
        },
        na: function() {
            X[8] = 0
        },
        Ea: function() {
            return !1
        },
        N: function() {
            return X[5]
        },
        L: function(a) {
            try {
                a()
            } catch (b) {
                q.setTimeout(function() {
                    throw b;
                }, 0)
            }
        },
        U: function() {
            if (!Y.D()) {
                var a = q.document,
                    b = function(b) {
                        b = Te(b);
                        a: {
                            try {
                                var c = na();
                                break a
                            } catch (h) {}
                            c = void 0
                        }
                        var d = c;
                        Kd(a, b, "preload", "script", d);
                        c = a.createElement("script");
                        c.type = "text/javascript";
                        d && (c.nonce = d);
                        c.onerror = function() {
                            return q.processGoogleToken({}, 2)
                        };
                        b = gb(b);
                        eb(c, b);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(c), Y.la()
                        } catch (h) {}
                    },
                    c = X[1];
                b(c);
                ".google.com" != c && b(".google.com");
                b = {};
                var d = (b.newToken = "FBT", b);
                q.setTimeout(function() {
                    return q.processGoogleToken(d, 1)
                }, 1E3)
            }
        }
    };

    function Ve(a) {
        Ue();
        var b = V.googleToken[5] || 0;
        a && (0 != b || W[3] >= +new Date ? Y.L(a) : (Y.N().push(a), Y.U()));
        W[3] >= +new Date && W[2] >= +new Date || Y.U()
    }

    function We(a) {
        q.processGoogleToken = q.processGoogleToken || function(a, c) {
            var b = a;
            b = void 0 === b ? {} : b;
            c = void 0 === c ? 0 : c;
            a = b.newToken || "";
            var e = "NT" == a,
                g = parseInt(b.freshLifetimeSecs || "", 10),
                f = parseInt(b.validLifetimeSecs || "", 10),
                h = b["1p_jar"] || "";
            b = b.pucrd || "";
            Ue();
            1 == c ? Y.na() : Y.ma();
            var k = V.googleToken = V.googleToken || {},
                l = 0 == c && a && r(a) && !e && t(g) && 0 < g && t(f) && 0 < f && r(h);
            e = e && !Y.D() && (!(W[3] >= +new Date) || "NT" == W[1]);
            var p = !(W[3] >= +new Date) && 0 != c;
            if (l || e || p) e = +new Date, g = e + 1E3 * g, f = e + 1E3 * f, 1E-5 > Math.random() && ub("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c, void 0), k[5] = c, k[1] = a, k[2] = g, k[3] = f, k[4] = h, k[6] = b, Ue();
            if (l || !Y.D()) {
                c = Y.N();
                for (a = 0; a < c.length; a++) Y.L(c[a]);
                c.length = 0
            }
        };
        Ve(a)
    }

    function Xe(a) {
        Pe = Pe || new Ie;
        Oe(function(b) {
            b && a()
        })
    }

    function Ye() {
        var a = Za();
        Xe(a);
        We(a)
    };
    var Z = Ra("script");

    function Ze(a) {
        a.google_sa_impl && !a.document.getElementById("google_shimpl") && (a.google_sa_queue = null, a.google_sl_win = null, a.google_sa_impl = null)
    }

    function $e(a) {
        var b = H(a, $c.c) || H(a, ad.c);
        b && Ze(a);
        b && !a.google_sa_queue && (a.google_sa_queue = [], a.google_sl_win = a, a.google_process_slots = function() {
            return af(a)
        }, b = bf(), Kd(a.document, b, "preload", "script"), !x(y, "Chrome") && !x(y, "CriOS") || x(y, "Edge") ? kb(a.document, b).id = "google_shimpl" : (b = document.createElement("IFRAME"), b.id = "google_shimpl", b.style.display = "none", a.document.documentElement.appendChild(b), Xb(a, "google_shimpl", "<!doctype html><html><body>" + ("<" + Z + ">") + "google_sl_win=window.parent;google_async_iframe_id='google_shimpl';" + ("</" + Z + ">") + cf() + "</body></html>"), b.contentWindow.document.close()))
    }
    var af = Hc(215, function(a) {
        var b = a.google_sa_queue,
            c = b.shift();
        a.google_sa_impl || lc(zc, "shimpl", {
            t: "no_fn"
        }, !0, void 0, void 0);
        "function" == sa(c) && Gc(216, Ic, c);
        b.length && a.setTimeout(function() {
            return af(a)
        }, 0)
    });

    function cf(a) {
        return ["<", Z, ' src="', bf(void 0 === a ? "/show_ads_impl.js" : a), '"></', Z, ">"].join("")
    }

    function bf(a) {
        a = void 0 === a ? "/show_ads_impl.js" : a;
        var b = Ab ? "https" : "http";
        return Jd(Ob(), ["/pagead/js/", xb(), "/r20180604", a, ""].join(""), b)
    }

    function df(a, b, c, d) {
        return function() {
            var e = !1;
            d && se().al(3E4);
            try {
                Xb(a, b, c), e = !0
            } catch (f) {
                var g = Kc().google_jobrunner;
                re(g) && g.rl()
            }
            e && (e = xe("google_async_rrc", c), (new we(a)).set(b, df(a, b, e, !1)))
        }
    }

    function ef(a) {
        var b = ["<iframe"];
        Fb(a, function(a, d) {
            null != a && b.push(" " + d + '="' + Ca(a) + '"')
        });
        b.push("></iframe>");
        return b.join("")
    }

    function ff() {
        return Jd(Cb(), ["/pagead/html/", xb(), "/r20180604/zrt_lookup.html#", encodeURIComponent("")].join(""))
    }

    function gf(a) {
        var b = document.createElement("IFRAME");
        b.id = "google_esf";
        b.name = "google_esf";
        b.src = ff();
        mb(a, function(a, d) {
            b.setAttribute(d, a)
        });
        return b
    }

    function hf(a, b) {
        if (!$b) a: {
            for (var c = jb(), d = 0; d < c.length; d++) try {
                var e = c[d].frames.google_esf;
                if (e) {
                    $b = e;
                    break a
                }
            } catch (g) {}
            $b = null
        }
        if (!$b) {
            c = {};
            c = (c.style = "display:none", c);
            if (/[^a-z0-9-]/.test(a)) return "";
            c["data-ad-client"] = Sb(a);
            b ? a = gf(c) : (c.id = "google_esf", c.name = "google_esf", c.src = ff(), a = ef(c));
            return a
        }
        return b ? null : ""
    }

    function jf(a) {
        var b = {};
        null == a.google_ad_client && Ee(a) && (b.google_loader_features_used = 2048);
        Ge(a, b);
        b.google_loader_used = "sa";
        He(a);
        var c = a.document;
        c.currentScript ? c = c.currentScript.parentElement : (c = c.getElementsByTagName("script"), c = c[c.length - 1].parentElement);
        if (a.document && a.document.body && !me(b) && !b.google_reactive_ad_format) {
            var d = b.google_ad_width,
                e = ve(c, a);
            if (0 < e && d > e) {
                var g = b.google_ad_height;
                d = !!Wa[d + "x" + g];
                if (H(a, Zc.B)) b.google_ad_resize = 0;
                else {
                    var f = e;
                    if (d) {
                        var h = Xa(e, g);
                        if (h) f = h, b.google_ad_format = h + "x" + g + "_0ads_al";
                        else throw Error("TSS=" + e);
                    }
                    b.google_ad_resize = 1;
                    b.google_ad_width = f;
                    d || (b.google_ad_format = null, b.google_override_format = !0);
                    e = f;
                    g = he(e, "auto", a, c, b);
                    ae(g, e, b);
                    g = g.f;
                    b.google_responsive_formats = null;
                    g.minWidth() > e && !d && (b.google_ad_width = g.minWidth())
                }
            }
        }
        d = b.google_ad_width || 0;
        a: {
            g = wa(he, d, "auto", a, c, b, !1, !0);h = H(a, L.b);
            var k = H(a, L.c);e = H(a, fd.b);f = H(a, fd.c);
            var l = Nd(a, 11, b.google_ad_client);
            if (k = (h || k || l) && ib() && !b.google_reactive_ad_format && !me(b)) k = !(!qb.test(b.google_ad_width) && !pb.test(c.style.width) || !qb.test(b.google_ad_height) && !pb.test(c.style.height));
            if (k && 1 != b.google_ad_resize && Pb(a) == a) {
                for (k = c; k; k = k.parentElement) {
                    l = D(k, a);
                    var p;
                    (p = !l) || (p = !(0 <= ya(["static", "relative"], l.position)));
                    if (p) break a
                }
                if (!0 === Ad(a, c, d, b)) {
                    b.google_resizing_allowed = !0;
                    k = Yb(a.location, "google_responsive_slot_debug") || Yb(a.location, "google_responsive_slot_preview") || Zd(a, L.b, L.c, fd.b, fd.c);
                    l = N(wd(), 142);
                    if (k || Math.random() < l) b.ovlp = !0;
                    h || f ? (h = {}, ae(g(), d, h), b.google_resizing_width = h.google_ad_width, b.google_resizing_height = h.google_ad_height, h.ds && (b.ds = h.ds)) : b.google_ad_format = "auto";
                    (d = e ? "AutoOptimizeAdSizeVariant" : f ? "AutoOptimizeAdSizeOriginal" : null) && (b.google_ad_channel = b.google_ad_channel ? [b.google_ad_channel, d].join("+") : d)
                }
            }
        }
        if (d = Lb(b) ? 1 == Kb(b) : !Kb(b)) Nd(a, 12, b.google_ad_client) && !a.google_apltlad && Pb(a) == a ? (a.google_apltlad = !0, d = H(a, Nc.c)) : d = !1;
        d && Ld(a, b.google_ad_client);
        1 == me(b) && (d = b.google_ad_width || 0, b.google_ad_height || Bd(c, a, "height"), c = he(d, b.google_ad_format, a, c, b), ae(c, d, b));
        c = {};
        d = b.google_ad_width;
        g = b.google_ad_height;
        null != d && (c.width = d && '"' + d + '"');
        null != g && (c.height = g && '"' + g + '"');
        c.frameborder = '"0"';
        c.marginwidth = '"0"';
        c.marginheight = '"0"';
        c.vspace = '"0"';
        c.hspace = '"0"';
        c.allowtransparency = '"true"';
        c.scrolling = '"no"';
        c.allowfullscreen = '"true"';
        c.onload = '"' + ye + '"';
        d = a.document;
        g = c.id;
        for (e = 0; !g || d.getElementById(g);) g = "aswift_" + e++;
        c.id = g;
        c.name = g;
        g = b.google_ad_width;
        e = b.google_ad_height;
        f = b.gml;
        h = b.gmr;
        k = b.gzi;
        f = (f ? "margin-left:" + f + ";" : "") + (h ? "margin-right:" + h + ";" : "") + (k ? "z-index:" + k + ";" : "");
        if (h = b.ds) h += h.endsWith(";") ? "" : ";", f += h;
        f = void 0 === f ? "" : f;
        h = ["<iframe"];
        for (m in c) c.hasOwnProperty(m) && h.push(m + "=" + c[m]);
        h.push('style="' + ("left:0;position:absolute;top:0;width:" + g + "px;height:" + e + "px;") + '"');
        h.push("></iframe>");
        var m = c.id;
        g = "border:none;height:" + e + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + g + "px;background-color:transparent;";
        d.write(['<ins id="', m + "_expand", '" style="display:inline-table;', g, void 0 === f ? "" : f, '"><ins id="', m + "_anchor", '" style="display:block;', g, '">', h.join(" "), "</ins></ins>"].join(""));
        m = c.id;
        kf(a, b);
        d = "";
        H(a, ld.c) ? (c = hf(b.google_ad_client, !0)) && a.document.documentElement.appendChild(c) : d = hf(b.google_ad_client, !1);
        c = H(a, $c.c) || H(a, ad.c);
        g = (new Date).getTime();
        b.google_lrv = xb();
        b.google_async_iframe_id = m;
        e = a;
        e = Eb(Db(e)) || e;
        e = e.google_unique_id;
        b.google_unique_id = "number" === typeof e ? e : 0;
        b.google_start_time = xa;
        b.google_bpp = g > xa ? g - xa : 1;
        b.google_async_rrc = 0;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[m] = b;
        a.google_t12n_vars = td;
        d = ["<!doctype html><html><body>", d, "<" + Z + ">", c ? "google_sl_win=window.parent;" : "", "google_iframe_start_time=new Date().getTime();", 'google_async_iframe_id="' + m + '";', "</" + Z + ">", lf(a, m), "</body></html>"].join("");
        b = a.document.getElementById(m) ? te : ue;
        m = df(a, m, d, !0);
        c ? (a.google_sa_queue = a.google_sa_queue || [], a.google_sa_impl ? b(m) : a.google_sa_queue.push(m)) : b(m)
    }

    function lf(a, b) {
        b = "{iframeWin: window, pubWin: window.parent, vars: " + ("window.parent['google_sv_map']['" + b + "']") + "}";
        if (H(a, $c.c) || H(a, ad.c)) return "<" + Z + ">window.parent.google_sa_impl(" + b + ");</" + Z + ">";
        b = "<" + Z + ">window.google_process_slots=function(){" + ("window.google_sa_impl(" + b + ");") + ("};</" + Z + ">");
        a = H(a, bd.c) ? cf("/show_ads_impl_le.js") : H(a, bd.b) ? cf("/show_ads_impl_le_c.js") : cf();
        return b + a
    }

    function kf(a, b) {
        var c = b.google_ad_output,
            d = b.google_ad_format,
            e = b.google_ad_width || 0,
            g = b.google_ad_height || 0;
        d || "html" != c && null != c || (d = e + "x" + g);
        c = !b.google_ad_slot || b.google_override_format || !Wa[b.google_ad_width + "x" + b.google_ad_height] && "aa" == b.google_loader_used;
        d && c ? d = d.toLowerCase() : d = "";
        b.google_ad_format = d;
        if (!t(b.google_reactive_sra_index) || !b.google_ad_unit_key) {
            d = [b.google_ad_slot, b.google_orig_ad_format || b.google_ad_format, b.google_ad_type, b.google_orig_ad_width || b.google_ad_width, b.google_orig_ad_height || b.google_ad_height];
            c = [];
            e = 0;
            for (g = Ta.parentElement; g && 25 > e; g = g.parentNode, ++e) 9 === g.nodeType ? c.push("") : c.push(g.id);
            (c = c.join()) && d.push(c);
            b.google_ad_unit_key = nb(d.join(":")).toString();
            d = Ta;
            var f = void 0 === f ? !1 : f;
            c = [];
            for (e = 0; d && 25 > e; ++e) {
                g = "";
                void 0 !== f && f || (g = (g = 9 !== d.nodeType && d.id) ? "/" + g : "");
                a: {
                    if (d && d.nodeName && d.parentElement) {
                        var h = d.nodeName.toString().toLowerCase();
                        for (var k = d.parentElement.childNodes, l = 0, p = 0; p < k.length; ++p) {
                            var m = k[p];
                            if (m.nodeName && m.nodeName.toString().toLowerCase() === h) {
                                if (d === m) {
                                    h = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    h = ""
                }
                c.push((d.nodeName && d.nodeName.toString().toLowerCase()) + g + h);
                d = d.parentElement
            }
            f = c.join() + ":";
            d = [];
            if (a) try {
                var v = a.parent;
                for (c = 0; v && v !== a && 25 > c; ++c) {
                    var u = v.frames;
                    for (e = 0; e < u.length; ++e)
                        if (a === u[e]) {
                            d.push(e);
                            break
                        } a = v;
                    v = a.parent
                }
            } catch (Ia) {}
            b.google_ad_dom_fingerprint = nb(f + d.join()).toString()
        }
    }

    function mf(a, b) {
        var c = navigator;
        a && b && c && (a = a.document, b = Sb(b), /[^a-z0-9-]/.test(b) || ((c = Ba("r20160913")) && (c += "/"), kb(a, Jd("pagead2.googlesyndication.com", "/pub-config/" + c + b + ".js"))))
    }

    function nf(a) {
        if (H(a, dd.c)) {
            var b = a.google_page_location || a.google_page_url;
            "EMPTY" == b && (b = a.google_page_url);
            yb || !b ? a = !1 : (a = b.toString(), 0 == a.indexOf("http://") ? a = a.substring(7, a.length) : 0 == a.indexOf("https://") && (a = a.substring(8, a.length)), b = a.indexOf("/"), -1 == b && (b = a.length), a = a.substring(0, b), qd.test(a) ? a = !1 : (a = a.split("."), b = !1, 3 <= a.length && (b = a[a.length - 3] in pd), 2 <= a.length && (b = b || a[a.length - 2] in pd), a = b));
            a = a ? wb("", "pagead2.googlesyndication.com") : Cb();
            Kd(Nb().document, a, "preconnect")
        }
    };
    (function(a) {
        K.g = function(b) {
            za(a, function(a) {
                a(b)
            })
        }
    })([function(a) {
        a.shv = xb()
    }, function(a) {
        mb(Qd, function(b, c) {
            try {
                null != q[b] && (a[c] = q[b])
            } catch (d) {}
        })
    }, function(a) {
        try {
            var b = q.google_ad_modifications;
            if (null != b) {
                var c = Aa(b.eids, b.loeids);
                null != c && 0 < c.length && (a.eid = c.join(","))
            }
        } catch (d) {}
    }]);
    Gc(158, function(a, b, c, d) {
        return 0 == (b.error && b.meta && b.id ? b.msg || Cc(b.error) : Cc(b)).indexOf("TagError") ? (K.i = !0, K.a(a, b, .1, d, "puberror"), !1) : K.a(a, b, c, d)
    }, function() {
        var a = window;
        Yd(a);
        if ("js" == a.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
        else {
            Fc(H(a, Wc.j) || H(a, Uc.j) || H(a, Uc.G));
            var b = G(q);
            b && (b.google_reactive_ads_global_state || (b.google_reactive_ads_global_state = new sd), b = b.google_reactive_ads_global_state, ta(b.tagSpecificState) && b.tagSpecificState[1] || !ta(b.tagSpecificState) || (b.tagSpecificState[1] = new od));
            if ((b = Qb(a, a.google_ad_slot)) && b.K) He(a);
            else if (Ib(a), !H(a, md.c) && (!1 === a.google_enable_async || !Wb() || a.google_container_id || a.google_ad_output && "html" != a.google_ad_output)) {
                a.google_loader_used = "sb";
                a.google_start_time = xa;
                a.google_t12n_vars = td;
                kf(a, a);
                b = "";
                if (H(a, ld.c)) {
                    var c = hf(a.google_ad_client, !0);
                    c && a.document.documentElement.appendChild(c)
                } else b = hf(a.google_ad_client, !1);
                c = function() {
                    a.google_sa_impl({
                        iframeWin: a,
                        pubWin: a,
                        vars: a
                    })
                };
                a.google_sa_impl ? c() : (b += cf(), a.google_process_slots = c, a.google_sa_queue = [], document.write(b))
            } else {
                if (H(z, cd.J) || H(z, cd.C) || H(z, cd.I) || H(z, cd.H)) Ue(), Se("") && (X[1] = ""), H(z, cd.C) ? Ye() : We(null);
                (Lb(a) ? 1 != Kb(a) : Kb(a)) || (mf(a, a.google_ad_client), nf(a));
                Jb(a);
                $e(a);
                jf(a)
            }
        }
    });
}).call(this);