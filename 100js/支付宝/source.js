!function() {
    var security_password_222_lib_utils, arale_events_120_events, security_crypto_200_lib_base64, security_crypto_200_lib_xor, security_crypto_200_lib_rsa, ms_062_index, security_client_utils_202_lib_utils, domready_001_index, security_client_utils_202_lib_edit, security_client_utils_202_lib_keysequence, security_client_utils_202_lib_ua, security_client_utils_202_lib_ihealthy, extend_100_index, json_fallback_100_index, security_password_222_lib_six_digit_password, security_crypto_200_index, debug_211_debug, json_002_index, security_password_222_lib_input, debug_211_browser, security_client_utils_202_lib_chrome_extension, security_client_utils_202_lib_websocket, security_snowden_200_src_snowden, security_client_utils_202_lib_cert_control, security_client_utils_202_index, security_password_222_lib_control_input, security_sensor_203_index, security_cert_200_index, security_password_222_lib_rsa_input, security_password_222_lib_renderer, security_password_222_lib_password, security_password_222_index, security_sdk_212_index;
    security_password_222_lib_utils = function(t) {
        function e() {}
        function i(t, i, n, r) {
            e.prototype = t.prototype;
            var s = new e;
            return i.prototype = s,
            s.constructor = i,
            n && o.extend(s, n),
            r && o.extend(i, r),
            i.superclass = t,
            i
        }
        function n() {
            if (!s) {
                var t = document.createElement("style");
                document.getElementsByTagName("head")[0].appendChild(t),
                t.sheet ? s = t.sheet : document.styleSheets && (s = document.styleSheets[document.styleSheets.length - 1])
            }
            return s
        }
        function r(t, e) {
            var i = n();
            i && ("undefined" != typeof i.insertRule ? i.insertRule(t + "{" + e + "}", 0) : "undefined" != typeof i.addRule && i.addRule(t, e))
        }
        var s, o = window.jQuery;
        return t.Inherit = i,
        t.addRule = r,
        t
    }({}),
    arale_events_120_events = function(t) {
        function e() {}
        function i(t, e, i) {
            var n = !0;
            if (t) {
                var r = 0
                  , s = t.length
                  , o = e[0]
                  , a = e[1]
                  , u = e[2];
                switch (e.length) {
                case 0:
                    for (; s > r; r += 2)
                        n = t[r].call(t[r + 1] || i) !== !1 && n;
                    break;
                case 1:
                    for (; s > r; r += 2)
                        n = t[r].call(t[r + 1] || i, o) !== !1 && n;
                    break;
                case 2:
                    for (; s > r; r += 2)
                        n = t[r].call(t[r + 1] || i, o, a) !== !1 && n;
                    break;
                case 3:
                    for (; s > r; r += 2)
                        n = t[r].call(t[r + 1] || i, o, a, u) !== !1 && n;
                    break;
                default:
                    for (; s > r; r += 2)
                        n = t[r].apply(t[r + 1] || i, e) !== !1 && n
                }
            }
            return n
        }
        function n(t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }
        var r = /\s+/;
        e.prototype.on = function(t, e, i) {
            var n, s, o;
            if (!e)
                return this;
            for (n = this.__events || (this.__events = {}),
            t = t.split(r); s = t.shift(); )
                o = n[s] || (n[s] = []),
                o.push(e, i);
            return this
        }
        ,
        e.prototype.once = function(t, e, i) {
            var n = this
              , r = function() {
                n.off(t, r),
                e.apply(i || n, arguments)
            };
            return this.on(t, r, i)
        }
        ,
        e.prototype.off = function(t, e, i) {
            var n, o, a, u;
            if (!(n = this.__events))
                return this;
            if (!(t || e || i))
                return delete this.__events,
                this;
            for (t = t ? t.split(r) : s(n); o = t.shift(); )
                if (a = n[o])
                    if (e || i)
                        for (u = a.length - 2; u >= 0; u -= 2)
                            e && a[u] !== e || i && a[u + 1] !== i || a.splice(u, 2);
                    else
                        delete n[o];
            return this
        }
        ,
        e.prototype.trigger = function(t) {
            var e, n, s, o, a, u, c = [], h = !0;
            if (!(e = this.__events))
                return this;
            for (t = t.split(r),
            a = 1,
            u = arguments.length; u > a; a++)
                c[a - 1] = arguments[a];
            for (; n = t.shift(); )
                (s = e.all) && (s = s.slice()),
                (o = e[n]) && (o = o.slice()),
                "all" !== n && (h = i(o, c, this) && h),
                h = i(s, [n].concat(c), this) && h;
            return h
        }
        ,
        e.prototype.emit = e.prototype.trigger;
        var s = Object.keys;
        return s || (s = function(t) {
            var e = [];
            for (var i in t)
                t.hasOwnProperty(i) && e.push(i);
            return e
        }
        ),
        e.mixTo = function(t) {
            function i(e) {
                t[e] = function() {
                    return r[e].apply(s, Array.prototype.slice.call(arguments)),
                    this
                }
            }
            t = n(t) ? t.prototype : t;
            var r = e.prototype
              , s = new e;
            for (var o in r)
                r.hasOwnProperty(o) && i(o)
        }
        ,
        t = e
    }(),
    security_crypto_200_lib_base64 = function(t) {
        var e, i = {}, n = i.Base64, r = "2.1.2", s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = function(t) {
            for (var e = {}, i = 0, n = t.length; n > i; i++)
                e[t.charAt(i)] = i;
            return e
        }(s), a = String.fromCharCode, u = function(t) {
            if (t.length < 2) {
                var e = t.charCodeAt(0);
                return 128 > e ? t : 2048 > e ? a(192 | e >>> 6) + a(128 | 63 & e) : a(224 | e >>> 12 & 15) + a(128 | e >>> 6 & 63) + a(128 | 63 & e)
            }
            var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
            return a(240 | e >>> 18 & 7) + a(128 | e >>> 12 & 63) + a(128 | e >>> 6 & 63) + a(128 | 63 & e)
        }, c = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, h = function(t) {
            return t.replace(c, u)
        }, l = function(t) {
            var e = [0, 2, 1][t.length % 3]
              , i = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0)
              , n = [s.charAt(i >>> 18), s.charAt(i >>> 12 & 63), e >= 2 ? "=" : s.charAt(i >>> 6 & 63), e >= 1 ? "=" : s.charAt(63 & i)];
            return n.join("")
        }, f = i.btoa ? function(t) {
            return i.btoa(t)
        }
        : function(t) {
            return t.replace(/[\s\S]{1,3}/g, l)
        }
        , d = e ? function(t) {
            return new e(t).toString("base64")
        }
        : function(t) {
            return f(h(t))
        }
        , p = function(t, e) {
            return e ? d(t).replace(/[+\/]/g, function(t) {
                return "+" == t ? "-" : "_"
            }).replace(/=/g, "") : d(t)
        }, g = function(t) {
            return p(t, !0)
        }, y = new RegExp(["[\xc0-\xdf][\x80-\xbf]", "[\xe0-\xef][\x80-\xbf]{2}", "[\xf0-\xf7][\x80-\xbf]{3}"].join("|"),"g"), m = function(t) {
            switch (t.length) {
            case 4:
                var e = (7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)
                  , i = e - 65536;
                return a((i >>> 10) + 55296) + a((1023 & i) + 56320);
            case 3:
                return a((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
            default:
                return a((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
            }
        }, v = function(t) {
            return t.replace(y, m)
        }, b = function(t) {
            var e = t.length
              , i = e % 4
              , n = (e > 0 ? o[t.charAt(0)] << 18 : 0) | (e > 1 ? o[t.charAt(1)] << 12 : 0) | (e > 2 ? o[t.charAt(2)] << 6 : 0) | (e > 3 ? o[t.charAt(3)] : 0)
              , r = [a(n >>> 16), a(n >>> 8 & 255), a(255 & n)];
            return r.length -= [0, 0, 2, 1][i],
            r.join("")
        }, _ = i.atob ? function(t) {
            return i.atob(t)
        }
        : function(t) {
            return t.replace(/[\s\S]{1,4}/g, b)
        }
        , w = e ? function(t) {
            return new e(t,"base64").toString()
        }
        : function(t) {
            return v(_(t))
        }
        , x = function(t) {
            return w(t.replace(/[-_]/g, function(t) {
                return "-" == t ? "+" : "/"
            }).replace(/[^A-Za-z0-9\+\/]/g, ""))
        }, S = function() {
            var t = i.Base64;
            return i.Base64 = n,
            t
        };
        if (i.Base64 = {
            VERSION: r,
            atob: _,
            btoa: f,
            fromBase64: x,
            toBase64: p,
            utob: h,
            encode: p,
            encodeURI: g,
            btou: v,
            decode: x,
            noConflict: S
        },
        "function" == typeof Object.defineProperty) {
            var T = function(t) {
                return {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            };
            i.Base64.extendString = function() {
                Object.defineProperty(String.prototype, "fromBase64", T(function() {
                    return x(this)
                })),
                Object.defineProperty(String.prototype, "toBase64", T(function(t) {
                    return p(this, t)
                })),
                Object.defineProperty(String.prototype, "toBase64URI", T(function() {
                    return p(this, !0)
                }))
            }
        }
        return t = i.Base64
    }(),
    security_crypto_200_lib_xor = function(t) {
        return t = function(t, e) {
            for (var i = "", n = 0; n < t.length; ++n)
                i += String.fromCharCode(e.charCodeAt(n % e.length) ^ t.charCodeAt(n));
            return i
        }
    }(),
    security_crypto_200_lib_rsa = function(t) {
        function e(t, e, i) {
            null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
        }
        function i() {
            return new e(null)
        }
        function n(t, e, i, n, r, s) {
            for (; --s >= 0; ) {
                var o = e * this[t++] + i[n] + r;
                r = Math.floor(o / 67108864),
                i[n++] = 67108863 & o
            }
            return r
        }
        function r(t, e, i, n, r, s) {
            for (var o = 32767 & e, a = e >> 15; --s >= 0; ) {
                var u = 32767 & this[t]
                  , c = this[t++] >> 15
                  , h = a * u + c * o;
                u = o * u + ((32767 & h) << 15) + i[n] + (1073741823 & r),
                r = (u >>> 30) + (h >>> 15) + a * c + (r >>> 30),
                i[n++] = 1073741823 & u
            }
            return r
        }
        function s(t, e, i, n, r, s) {
            for (var o = 16383 & e, a = e >> 14; --s >= 0; ) {
                var u = 16383 & this[t]
                  , c = this[t++] >> 14
                  , h = a * u + c * o;
                u = o * u + ((16383 & h) << 14) + i[n] + r,
                r = (u >> 28) + (h >> 14) + a * c,
                i[n++] = 268435455 & u
            }
            return r
        }
        function o(t) {
            return Di.charAt(t)
        }
        function a(t, e) {
            var i = ki[t.charCodeAt(e)];
            return null == i ? -1 : i
        }
        function u(t) {
            for (var e = this.t - 1; e >= 0; --e)
                t[e] = this[e];
            t.t = this.t,
            t.s = this.s
        }
        function c(t) {
            this.t = 1,
            this.s = 0 > t ? -1 : 0,
            t > 0 ? this[0] = t : -1 > t ? this[0] = t + DV : this.t = 0
        }
        function h(t) {
            var e = i();
            return e.fromInt(t),
            e
        }
        function l(t, i) {
            var n;
            if (16 == i)
                n = 4;
            else if (8 == i)
                n = 3;
            else if (256 == i)
                n = 8;
            else if (2 == i)
                n = 1;
            else if (32 == i)
                n = 5;
            else {
                if (4 != i)
                    return void this.fromRadix(t, i);
                n = 2
            }
            this.t = 0,
            this.s = 0;
            for (var r = t.length, s = !1, o = 0; --r >= 0; ) {
                var u = 8 == n ? 255 & t[r] : a(t, r);
                0 > u ? "-" == t.charAt(r) && (s = !0) : (s = !1,
                0 == o ? this[this.t++] = u : o + n > this.DB ? (this[this.t - 1] |= (u & (1 << this.DB - o) - 1) << o,
                this[this.t++] = u >> this.DB - o) : this[this.t - 1] |= u << o,
                o += n,
                o >= this.DB && (o -= this.DB))
            }
            8 == n && 0 != (128 & t[0]) && (this.s = -1,
            o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)),
            this.clamp(),
            s && e.ZERO.subTo(this, this)
        }
        function f() {
            for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
                --this.t
        }
        function d(t) {
            if (this.s < 0)
                return "-" + this.negate().toString(t);
            var e;
            if (16 == t)
                e = 4;
            else if (8 == t)
                e = 3;
            else if (2 == t)
                e = 1;
            else if (32 == t)
                e = 5;
            else {
                if (4 != t)
                    return this.toRadix(t);
                e = 2
            }
            var i, n = (1 << e) - 1, r = !1, s = "", a = this.t, u = this.DB - a * this.DB % e;
            if (a-- > 0)
                for (u < this.DB && (i = this[a] >> u) > 0 && (r = !0,
                s = o(i)); a >= 0; )
                    e > u ? (i = (this[a] & (1 << u) - 1) << e - u,
                    i |= this[--a] >> (u += this.DB - e)) : (i = this[a] >> (u -= e) & n,
                    0 >= u && (u += this.DB,
                    --a)),
                    i > 0 && (r = !0),
                    r && (s += o(i));
            return r ? s : "0"
        }
        function p() {
            var t = i();
            return e.ZERO.subTo(this, t),
            t
        }
        function g() {
            return this.s < 0 ? this.negate() : this
        }
        function y(t) {
            var e = this.s - t.s;
            if (0 != e)
                return e;
            var i = this.t;
            if (e = i - t.t,
            0 != e)
                return this.s < 0 ? -e : e;
            for (; --i >= 0; )
                if (0 != (e = this[i] - t[i]))
                    return e;
            return 0
        }
        function m(t) {
            var e, i = 1;
            return 0 != (e = t >>> 16) && (t = e,
            i += 16),
            0 != (e = t >> 8) && (t = e,
            i += 8),
            0 != (e = t >> 4) && (t = e,
            i += 4),
            0 != (e = t >> 2) && (t = e,
            i += 2),
            0 != (e = t >> 1) && (t = e,
            i += 1),
            i
        }
        function b() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + m(this[this.t - 1] ^ this.s & this.DM)
        }
        function _(t, e) {
            var i;
            for (i = this.t - 1; i >= 0; --i)
                e[i + t] = this[i];
            for (i = t - 1; i >= 0; --i)
                e[i] = 0;
            e.t = this.t + t,
            e.s = this.s
        }
        function w(t, e) {
            for (var i = t; i < this.t; ++i)
                e[i - t] = this[i];
            e.t = Math.max(this.t - t, 0),
            e.s = this.s
        }
        function x(t, e) {
            var i, n = t % this.DB, r = this.DB - n, s = (1 << r) - 1, o = Math.floor(t / this.DB), a = this.s << n & this.DM;
            for (i = this.t - 1; i >= 0; --i)
                e[i + o + 1] = this[i] >> r | a,
                a = (this[i] & s) << n;
            for (i = o - 1; i >= 0; --i)
                e[i] = 0;
            e[o] = a,
            e.t = this.t + o + 1,
            e.s = this.s,
            e.clamp()
        }
        function S(t, e) {
            e.s = this.s;
            var i = Math.floor(t / this.DB);
            if (i >= this.t)
                return void (e.t = 0);
            var n = t % this.DB
              , r = this.DB - n
              , s = (1 << n) - 1;
            e[0] = this[i] >> n;
            for (var o = i + 1; o < this.t; ++o)
                e[o - i - 1] |= (this[o] & s) << r,
                e[o - i] = this[o] >> n;
            n > 0 && (e[this.t - i - 1] |= (this.s & s) << r),
            e.t = this.t - i,
            e.clamp()
        }
        function T(t, e) {
            for (var i = 0, n = 0, r = Math.min(t.t, this.t); r > i; )
                n += this[i] - t[i],
                e[i++] = n & this.DM,
                n >>= this.DB;
            if (t.t < this.t) {
                for (n -= t.s; i < this.t; )
                    n += this[i],
                    e[i++] = n & this.DM,
                    n >>= this.DB;
                n += this.s
            } else {
                for (n += this.s; i < t.t; )
                    n -= t[i],
                    e[i++] = n & this.DM,
                    n >>= this.DB;
                n -= t.s
            }
            e.s = 0 > n ? -1 : 0,
            -1 > n ? e[i++] = this.DV + n : n > 0 && (e[i++] = n),
            e.t = i,
            e.clamp()
        }
        function E(t, i) {
            var n = this.abs()
              , r = t.abs()
              , s = n.t;
            for (i.t = s + r.t; --s >= 0; )
                i[s] = 0;
            for (s = 0; s < r.t; ++s)
                i[s + n.t] = n.am(0, r[s], i, s, 0, n.t);
            i.s = 0,
            i.clamp(),
            this.s != t.s && e.ZERO.subTo(i, i)
        }
        function R(t) {
            for (var e = this.abs(), i = t.t = 2 * e.t; --i >= 0; )
                t[i] = 0;
            for (i = 0; i < e.t - 1; ++i) {
                var n = e.am(i, e[i], t, 2 * i, 0, 1);
                (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, n, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV,
                t[i + e.t + 1] = 1)
            }
            t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)),
            t.s = 0,
            t.clamp()
        }
        function C(t, n, r) {
            var s = t.abs();
            if (!(s.t <= 0)) {
                var o = this.abs();
                if (o.t < s.t)
                    return null != n && n.fromInt(0),
                    void (null != r && this.copyTo(r));
                null == r && (r = i());
                var a = i()
                  , u = this.s
                  , c = t.s
                  , h = this.DB - m(s[s.t - 1]);
                h > 0 ? (s.lShiftTo(h, a),
                o.lShiftTo(h, r)) : (s.copyTo(a),
                o.copyTo(r));
                var l = a.t
                  , f = a[l - 1];
                if (0 != f) {
                    var d = f * (1 << this.F1) + (l > 1 ? a[l - 2] >> this.F2 : 0)
                      , p = this.FV / d
                      , g = (1 << this.F1) / d
                      , y = 1 << this.F2
                      , v = r.t
                      , b = v - l
                      , _ = null == n ? i() : n;
                    for (a.dlShiftTo(b, _),
                    r.compareTo(_) >= 0 && (r[r.t++] = 1,
                    r.subTo(_, r)),
                    e.ONE.dlShiftTo(l, _),
                    _.subTo(a, a); a.t < l; )
                        a[a.t++] = 0;
                    for (; --b >= 0; ) {
                        var w = r[--v] == f ? this.DM : Math.floor(r[v] * p + (r[v - 1] + y) * g);
                        if ((r[v] += a.am(0, w, r, b, 0, l)) < w)
                            for (a.dlShiftTo(b, _),
                            r.subTo(_, r); r[v] < --w; )
                                r.subTo(_, r)
                    }
                    null != n && (r.drShiftTo(l, n),
                    u != c && e.ZERO.subTo(n, n)),
                    r.t = l,
                    r.clamp(),
                    h > 0 && r.rShiftTo(h, r),
                    0 > u && e.ZERO.subTo(r, r)
                }
            }
        }
        function A(t) {
            var n = i();
            return this.abs().divRemTo(t, null, n),
            this.s < 0 && n.compareTo(e.ZERO) > 0 && t.subTo(n, n),
            n
        }
        function D(t) {
            this.m = t
        }
        function k(t) {
            return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
        }
        function I(t) {
            return t
        }
        function O(t) {
            t.divRemTo(this.m, null, t)
        }
        function B(t, e, i) {
            t.multiplyTo(e, i),
            this.reduce(i)
        }
        function U(t, e) {
            t.squareTo(e),
            this.reduce(e)
        }
        function P() {
            if (this.t < 1)
                return 0;
            var t = this[0];
            if (0 == (1 & t))
                return 0;
            var e = 3 & t;
            return e = e * (2 - (15 & t) * e) & 15,
            e = e * (2 - (255 & t) * e) & 255,
            e = e * (2 - ((65535 & t) * e & 65535)) & 65535,
            e = e * (2 - t * e % this.DV) % this.DV,
            e > 0 ? this.DV - e : -e
        }
        function N(t) {
            this.m = t,
            this.mp = t.invDigit(),
            this.mpl = 32767 & this.mp,
            this.mph = this.mp >> 15,
            this.um = (1 << t.DB - 15) - 1,
            this.mt2 = 2 * t.t
        }
        function K(t) {
            var n = i();
            return t.abs().dlShiftTo(this.m.t, n),
            n.divRemTo(this.m, null, n),
            t.s < 0 && n.compareTo(e.ZERO) > 0 && this.m.subTo(n, n),
            n
        }
        function M(t) {
            var e = i();
            return t.copyTo(e),
            this.reduce(e),
            e
        }
        function V(t) {
            for (; t.t <= this.mt2; )
                t[t.t++] = 0;
            for (var e = 0; e < this.m.t; ++e) {
                var i = 32767 & t[e]
                  , n = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                for (i = e + this.m.t,
                t[i] += this.m.am(0, n, t, e, 0, this.m.t); t[i] >= t.DV; )
                    t[i] -= t.DV,
                    t[++i]++
            }
            t.clamp(),
            t.drShiftTo(this.m.t, t),
            t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
        }
        function j(t, e) {
            t.squareTo(e),
            this.reduce(e)
        }
        function J(t, e, i) {
            t.multiplyTo(e, i),
            this.reduce(i)
        }
        function L() {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s)
        }
        function q(t, n) {
            if (t > 4294967295 || 1 > t)
                return e.ONE;
            var r = i()
              , s = i()
              , o = n.convert(this)
              , a = m(t) - 1;
            for (o.copyTo(r); --a >= 0; )
                if (n.sqrTo(r, s),
                (t & 1 << a) > 0)
                    n.mulTo(s, o, r);
                else {
                    var u = r;
                    r = s,
                    s = u
                }
            return n.revert(r)
        }
        function H(t, e) {
            var i;
            return i = 256 > t || e.isEven() ? new D(e) : new N(e),
            this.exp(t, i)
        }
        function F() {
            var t = i();
            return this.copyTo(t),
            t
        }
        function z() {
            if (this.s < 0) {
                if (1 == this.t)
                    return this[0] - this.DV;
                if (0 == this.t)
                    return -1
            } else {
                if (1 == this.t)
                    return this[0];
                if (0 == this.t)
                    return 0
            }
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
        }
        function G() {
            return 0 == this.t ? this.s : this[0] << 24 >> 24
        }
        function W() {
            return 0 == this.t ? this.s : this[0] << 16 >> 16
        }
        function Z(t) {
            return Math.floor(Math.LN2 * this.DB / Math.log(t))
        }
        function Q() {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
        }
        function $(t) {
            if (null == t && (t = 10),
            0 == this.signum() || 2 > t || t > 36)
                return "0";
            var e = this.chunkSize(t)
              , n = Math.pow(t, e)
              , r = h(n)
              , s = i()
              , o = i()
              , a = "";
            for (this.divRemTo(r, s, o); s.signum() > 0; )
                a = (n + o.intValue()).toString(t).substr(1) + a,
                s.divRemTo(r, s, o);
            return o.intValue().toString(t) + a
        }
        function X(t, i) {
            this.fromInt(0),
            null == i && (i = 10);
            for (var n = this.chunkSize(i), r = Math.pow(i, n), s = !1, o = 0, u = 0, c = 0; c < t.length; ++c) {
                var h = a(t, c);
                0 > h ? "-" == t.charAt(c) && 0 == this.signum() && (s = !0) : (u = i * u + h,
                ++o >= n && (this.dMultiply(r),
                this.dAddOffset(u, 0),
                o = 0,
                u = 0))
            }
            o > 0 && (this.dMultiply(Math.pow(i, o)),
            this.dAddOffset(u, 0)),
            s && e.ZERO.subTo(this, this)
        }
        function Y(t, i, n) {
            if ("number" == typeof i)
                if (2 > t)
                    this.fromInt(1);
                else
                    for (this.fromNumber(t, n),
                    this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), ae, this),
                    this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(i); )
                        this.dAddOffset(2, 0),
                        this.bitLength() > t && this.subTo(e.ONE.shiftLeft(t - 1), this);
            else {
                var r = new Array
                  , s = 7 & t;
                r.length = (t >> 3) + 1,
                i.nextBytes(r),
                s > 0 ? r[0] &= (1 << s) - 1 : r[0] = 0,
                this.fromString(r, 256)
            }
        }
        function te() {
            var t = this.t
              , e = new Array;
            e[0] = this.s;
            var i, n = this.DB - t * this.DB % 8, r = 0;
            if (t-- > 0)
                for (n < this.DB && (i = this[t] >> n) != (this.s & this.DM) >> n && (e[r++] = i | this.s << this.DB - n); t >= 0; )
                    8 > n ? (i = (this[t] & (1 << n) - 1) << 8 - n,
                    i |= this[--t] >> (n += this.DB - 8)) : (i = this[t] >> (n -= 8) & 255,
                    0 >= n && (n += this.DB,
                    --t)),
                    0 != (128 & i) && (i |= -256),
                    0 == r && (128 & this.s) != (128 & i) && ++r,
                    (r > 0 || i != this.s) && (e[r++] = i);
            return e
        }
        function ee(t) {
            return 0 == this.compareTo(t)
        }
        function ie(t) {
            return this.compareTo(t) < 0 ? this : t
        }
        function ne(t) {
            return this.compareTo(t) > 0 ? this : t
        }
        function re(t, e, i) {
            var n, r, s = Math.min(t.t, this.t);
            for (n = 0; s > n; ++n)
                i[n] = e(this[n], t[n]);
            if (t.t < this.t) {
                for (r = t.s & this.DM,
                n = s; n < this.t; ++n)
                    i[n] = e(this[n], r);
                i.t = this.t
            } else {
                for (r = this.s & this.DM,
                n = s; n < t.t; ++n)
                    i[n] = e(r, t[n]);
                i.t = t.t
            }
            i.s = e(this.s, t.s),
            i.clamp()
        }
        function se(t, e) {
            return t & e
        }
        function oe(t) {
            var e = i();
            return this.bitwiseTo(t, se, e),
            e
        }
        function ae(t, e) {
            return t | e
        }
        function ue(t) {
            var e = i();
            return this.bitwiseTo(t, ae, e),
            e
        }
        function ce(t, e) {
            return t ^ e
        }
        function he(t) {
            var e = i();
            return this.bitwiseTo(t, ce, e),
            e
        }
        function le(t, e) {
            return t & ~e
        }
        function fe(t) {
            var e = i();
            return this.bitwiseTo(t, le, e),
            e
        }
        function de() {
            for (var t = i(), e = 0; e < this.t; ++e)
                t[e] = this.DM & ~this[e];
            return t.t = this.t,
            t.s = ~this.s,
            t
        }
        function pe(t) {
            var e = i();
            return 0 > t ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
            e
        }
        function ge(t) {
            var e = i();
            return 0 > t ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
            e
        }
        function ye(t) {
            if (0 == t)
                return -1;
            var e = 0;
            return 0 == (65535 & t) && (t >>= 16,
            e += 16),
            0 == (255 & t) && (t >>= 8,
            e += 8),
            0 == (15 & t) && (t >>= 4,
            e += 4),
            0 == (3 & t) && (t >>= 2,
            e += 2),
            0 == (1 & t) && ++e,
            e
        }
        function me() {
            for (var t = 0; t < this.t; ++t)
                if (0 != this[t])
                    return t * this.DB + ye(this[t]);
            return this.s < 0 ? this.t * this.DB : -1
        }
        function ve(t) {
            for (var e = 0; 0 != t; )
                t &= t - 1,
                ++e;
            return e
        }
        function be() {
            for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i)
                t += ve(this[i] ^ e);
            return t
        }
        function _e(t) {
            var e = Math.floor(t / this.DB);
            return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
        }
        function we(t, i) {
            var n = e.ONE.shiftLeft(t);
            return this.bitwiseTo(n, i, n),
            n
        }
        function xe(t) {
            return this.changeBit(t, ae)
        }
        function Se(t) {
            return this.changeBit(t, le)
        }
        function Te(t) {
            return this.changeBit(t, ce)
        }
        function Ee(t, e) {
            for (var i = 0, n = 0, r = Math.min(t.t, this.t); r > i; )
                n += this[i] + t[i],
                e[i++] = n & this.DM,
                n >>= this.DB;
            if (t.t < this.t) {
                for (n += t.s; i < this.t; )
                    n += this[i],
                    e[i++] = n & this.DM,
                    n >>= this.DB;
                n += this.s
            } else {
                for (n += this.s; i < t.t; )
                    n += t[i],
                    e[i++] = n & this.DM,
                    n >>= this.DB;
                n += t.s
            }
            e.s = 0 > n ? -1 : 0,
            n > 0 ? e[i++] = n : -1 > n && (e[i++] = this.DV + n),
            e.t = i,
            e.clamp()
        }
        function Re(t) {
            var e = i();
            return this.addTo(t, e),
            e
        }
        function Ce(t) {
            var e = i();
            return this.subTo(t, e),
            e
        }
        function Ae(t) {
            var e = i();
            return this.multiplyTo(t, e),
            e
        }
        function De() {
            var t = i();
            return this.squareTo(t),
            t
        }
        function ke(t) {
            var e = i();
            return this.divRemTo(t, e, null),
            e
        }
        function Ie(t) {
            var e = i();
            return this.divRemTo(t, null, e),
            e
        }
        function Oe(t) {
            var e = i()
              , n = i();
            return this.divRemTo(t, e, n),
            new Array(e,n)
        }
        function Be(t) {
            this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
            ++this.t,
            this.clamp()
        }
        function Ue(t, e) {
            if (0 != t) {
                for (; this.t <= e; )
                    this[this.t++] = 0;
                for (this[e] += t; this[e] >= this.DV; )
                    this[e] -= this.DV,
                    ++e >= this.t && (this[this.t++] = 0),
                    ++this[e]
            }
        }
        function Pe() {}
        function Ne(t) {
            return t
        }
        function Ke(t, e, i) {
            t.multiplyTo(e, i)
        }
        function Me(t, e) {
            t.squareTo(e)
        }
        function Ve(t) {
            return this.exp(t, new Pe)
        }
        function je(t, e, i) {
            var n = Math.min(this.t + t.t, e);
            for (i.s = 0,
            i.t = n; n > 0; )
                i[--n] = 0;
            var r;
            for (r = i.t - this.t; r > n; ++n)
                i[n + this.t] = this.am(0, t[n], i, n, 0, this.t);
            for (r = Math.min(t.t, e); r > n; ++n)
                this.am(0, t[n], i, n, 0, e - n);
            i.clamp()
        }
        function Je(t, e, i) {
            --e;
            var n = i.t = this.t + t.t - e;
            for (i.s = 0; --n >= 0; )
                i[n] = 0;
            for (n = Math.max(e - this.t, 0); n < t.t; ++n)
                i[this.t + n - e] = this.am(e - n, t[n], i, 0, 0, this.t + n - e);
            i.clamp(),
            i.drShiftTo(1, i)
        }
        function Le(t) {
            this.r2 = i(),
            this.q3 = i(),
            e.ONE.dlShiftTo(2 * t.t, this.r2),
            this.mu = this.r2.divide(t),
            this.m = t
        }
        function qe(t) {
            if (t.s < 0 || t.t > 2 * this.m.t)
                return t.mod(this.m);
            if (t.compareTo(this.m) < 0)
                return t;
            var e = i();
            return t.copyTo(e),
            this.reduce(e),
            e
        }
        function He(t) {
            return t
        }
        function Fe(t) {
            for (t.drShiftTo(this.m.t - 1, this.r2),
            t.t > this.m.t + 1 && (t.t = this.m.t + 1,
            t.clamp()),
            this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
            this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; )
                t.dAddOffset(1, this.m.t + 1);
            for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
                t.subTo(this.m, t)
        }
        function ze(t, e) {
            t.squareTo(e),
            this.reduce(e)
        }
        function Ge(t, e, i) {
            t.multiplyTo(e, i),
            this.reduce(i)
        }
        function We(t, e) {
            var n, r, s = t.bitLength(), o = h(1);
            if (0 >= s)
                return o;
            n = 18 > s ? 1 : 48 > s ? 3 : 144 > s ? 4 : 768 > s ? 5 : 6,
            r = 8 > s ? new D(e) : e.isEven() ? new Le(e) : new N(e);
            var a = new Array
              , u = 3
              , c = n - 1
              , l = (1 << n) - 1;
            if (a[1] = r.convert(this),
            n > 1) {
                var f = i();
                for (r.sqrTo(a[1], f); l >= u; )
                    a[u] = i(),
                    r.mulTo(f, a[u - 2], a[u]),
                    u += 2
            }
            var d, p, g = t.t - 1, y = !0, v = i();
            for (s = m(t[g]) - 1; g >= 0; ) {
                for (s >= c ? d = t[g] >> s - c & l : (d = (t[g] & (1 << s + 1) - 1) << c - s,
                g > 0 && (d |= t[g - 1] >> this.DB + s - c)),
                u = n; 0 == (1 & d); )
                    d >>= 1,
                    --u;
                if ((s -= u) < 0 && (s += this.DB,
                --g),
                y)
                    a[d].copyTo(o),
                    y = !1;
                else {
                    for (; u > 1; )
                        r.sqrTo(o, v),
                        r.sqrTo(v, o),
                        u -= 2;
                    u > 0 ? r.sqrTo(o, v) : (p = o,
                    o = v,
                    v = p),
                    r.mulTo(v, a[d], o)
                }
                for (; g >= 0 && 0 == (t[g] & 1 << s); )
                    r.sqrTo(o, v),
                    p = o,
                    o = v,
                    v = p,
                    --s < 0 && (s = this.DB - 1,
                    --g)
            }
            return r.revert(o)
        }
        function Ze(t) {
            var e = this.s < 0 ? this.negate() : this.clone()
              , i = t.s < 0 ? t.negate() : t.clone();
            if (e.compareTo(i) < 0) {
                var n = e;
                e = i,
                i = n
            }
            var r = e.getLowestSetBit()
              , s = i.getLowestSetBit();
            if (0 > s)
                return e;
            for (s > r && (s = r),
            s > 0 && (e.rShiftTo(s, e),
            i.rShiftTo(s, i)); e.signum() > 0; )
                (r = e.getLowestSetBit()) > 0 && e.rShiftTo(r, e),
                (r = i.getLowestSetBit()) > 0 && i.rShiftTo(r, i),
                e.compareTo(i) >= 0 ? (e.subTo(i, e),
                e.rShiftTo(1, e)) : (i.subTo(e, i),
                i.rShiftTo(1, i));
            return s > 0 && i.lShiftTo(s, i),
            i
        }
        function Qe(t) {
            if (0 >= t)
                return 0;
            var e = this.DV % t
              , i = this.s < 0 ? t - 1 : 0;
            if (this.t > 0)
                if (0 == e)
                    i = this[0] % t;
                else
                    for (var n = this.t - 1; n >= 0; --n)
                        i = (e * i + this[n]) % t;
            return i
        }
        function $e(t) {
            var i = t.isEven();
            if (this.isEven() && i || 0 == t.signum())
                return e.ZERO;
            for (var n = t.clone(), r = this.clone(), s = h(1), o = h(0), a = h(0), u = h(1); 0 != n.signum(); ) {
                for (; n.isEven(); )
                    n.rShiftTo(1, n),
                    i ? (s.isEven() && o.isEven() || (s.addTo(this, s),
                    o.subTo(t, o)),
                    s.rShiftTo(1, s)) : o.isEven() || o.subTo(t, o),
                    o.rShiftTo(1, o);
                for (; r.isEven(); )
                    r.rShiftTo(1, r),
                    i ? (a.isEven() && u.isEven() || (a.addTo(this, a),
                    u.subTo(t, u)),
                    a.rShiftTo(1, a)) : u.isEven() || u.subTo(t, u),
                    u.rShiftTo(1, u);
                n.compareTo(r) >= 0 ? (n.subTo(r, n),
                i && s.subTo(a, s),
                o.subTo(u, o)) : (r.subTo(n, r),
                i && a.subTo(s, a),
                u.subTo(o, u))
            }
            return 0 != r.compareTo(e.ONE) ? e.ZERO : u.compareTo(t) >= 0 ? u.subtract(t) : u.signum() < 0 ? (u.addTo(t, u),
            u.signum() < 0 ? u.add(t) : u) : u
        }
        function Xe(t) {
            var e, i = this.abs();
            if (1 == i.t && i[0] <= Ii[Ii.length - 1]) {
                for (e = 0; e < Ii.length; ++e)
                    if (i[0] == Ii[e])
                        return !0;
                return !1
            }
            if (i.isEven())
                return !1;
            for (e = 1; e < Ii.length; ) {
                for (var n = Ii[e], r = e + 1; r < Ii.length && Oi > n; )
                    n *= Ii[r++];
                for (n = i.modInt(n); r > e; )
                    if (n % Ii[e++] == 0)
                        return !1
            }
            return i.millerRabin(t)
        }
        function Ye(t) {
            var n = this.subtract(e.ONE)
              , r = n.getLowestSetBit();
            if (0 >= r)
                return !1;
            var s = n.shiftRight(r);
            t = t + 1 >> 1,
            t > Ii.length && (t = Ii.length);
            for (var o = i(), a = 0; t > a; ++a) {
                o.fromInt(Ii[Math.floor(Math.random() * Ii.length)]);
                var u = o.modPow(s, this);
                if (0 != u.compareTo(e.ONE) && 0 != u.compareTo(n)) {
                    for (var c = 1; c++ < r && 0 != u.compareTo(n); )
                        if (u = u.modPowInt(2, this),
                        0 == u.compareTo(e.ONE))
                            return !1;
                    if (0 != u.compareTo(n))
                        return !1
                }
            }
            return !0
        }
        function ti() {
            this.i = 0,
            this.j = 0,
            this.S = new Array
        }
        function ei(t) {
            var e, i, n;
            for (e = 0; 256 > e; ++e)
                this.S[e] = e;
            for (i = 0,
            e = 0; 256 > e; ++e)
                i = i + this.S[e] + t[e % t.length] & 255,
                n = this.S[e],
                this.S[e] = this.S[i],
                this.S[i] = n;
            this.i = 0,
            this.j = 0
        }
        function ii() {
            var t;
            return this.i = this.i + 1 & 255,
            this.j = this.j + this.S[this.i] & 255,
            t = this.S[this.i],
            this.S[this.i] = this.S[this.j],
            this.S[this.j] = t,
            this.S[t + this.S[this.i] & 255]
        }
        function ni() {
            return new ti
        }
        function ri() {
            if (null == Bi) {
                for (Bi = ni(); Ni > Pi; ) {
                    var t = Math.floor(65536 * Math.random());
                    Ui[Pi++] = 255 & t
                }
                for (Bi.init(Ui),
                Pi = 0; Pi < Ui.length; ++Pi)
                    Ui[Pi] = 0;
                Pi = 0
            }
            return Bi.next()
        }
        function si(t) {
            var e;
            for (e = 0; e < t.length; ++e)
                t[e] = ri()
        }
        function oi() {}
        function ai(t, i) {
            return new e(t,i)
        }
        function ui(t, i) {
            if (i < t.length + 11)
                return console.error("Message too long for RSA"),
                null;
            for (var n = new Array, r = t.length - 1; r >= 0 && i > 0; ) {
                var s = t.charCodeAt(r--);
                128 > s ? n[--i] = s : s > 127 && 2048 > s ? (n[--i] = 63 & s | 128,
                n[--i] = s >> 6 | 192) : (n[--i] = 63 & s | 128,
                n[--i] = s >> 6 & 63 | 128,
                n[--i] = s >> 12 | 224)
            }
            n[--i] = 0;
            for (var o = new oi, a = new Array; i > 2; ) {
                for (a[0] = 0; 0 == a[0]; )
                    o.nextBytes(a);
                n[--i] = a[0]
            }
            return n[--i] = 2,
            n[--i] = 0,
            new e(n)
        }
        function ci() {
            this.n = null,
            this.e = 0,
            this.d = null,
            this.p = null,
            this.q = null,
            this.dmp1 = null,
            this.dmq1 = null,
            this.coeff = null
        }
        function hi(t, e) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ai(t, 16),
            this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
        }
        function li(t) {
            return t.modPowInt(this.e, this.n)
        }
        function fi(t) {
            var e = ui(t, this.n.bitLength() + 7 >> 3);
            if (null == e)
                return null;
            var i = this.doPublic(e);
            if (null == i)
                return null;
            var n = i.toString(16);
            return 0 == (1 & n.length) ? n : "0" + n
        }
        function di(t, i, n) {
            for (var r = [Number(t)], s = pi(i, 32), o = pi("", 12), a = pi(n, 200), u = this.n.bitLength() + 7 >> 3, c = [], h = r.concat(s).concat(o).concat(a), l = h.length - 1; l >= 0 && u > 0; )
                c[--u] = h[l--];
            c[--u] = 0;
            for (var f = new oi, d = new Array; u > 2; ) {
                for (d[0] = 0; 0 == d[0]; )
                    f.nextBytes(d);
                c[--u] = d[0]
            }
            c[--u] = 2,
            c[--u] = 0;
            var p = new e(c);
            if (null == p)
                return null;
            var g = this.doPublic(p);
            if (null == g)
                return null;
            var y = g.toString(16);
            return 0 == (1 & y.length) ? y : "0" + y
        }
        function pi(t, e) {
            for (var i = [], n = 0, r = t.length; r > n; n++) {
                var s = t.charCodeAt(n);
                128 > s ? i.push(s) : s > 127 && 2048 > s ? (i.push(63 & s | 128),
                i.push(s >> 6 | 192)) : (i.push(63 & s | 128),
                i.push(s >> 6 & 63 | 128),
                i.push(s >> 12 | 224))
            }
            var r = e - t.length;
            if (r > 0)
                for (var n = 0; r > n; n++)
                    i.push(0);
            return i
        }
        function gi(t, e) {
            for (var i = t.toByteArray(), n = 0; n < i.length && 0 == i[n]; )
                ++n;
            if (i.length - n != e - 1 || 2 != i[n])
                return null;
            for (++n; 0 != i[n]; )
                if (++n >= i.length)
                    return null;
            for (var r = ""; ++n < i.length; ) {
                var s = 255 & i[n];
                128 > s ? r += String.fromCharCode(s) : s > 191 && 224 > s ? (r += String.fromCharCode((31 & s) << 6 | 63 & i[n + 1]),
                ++n) : (r += String.fromCharCode((15 & s) << 12 | (63 & i[n + 1]) << 6 | 63 & i[n + 2]),
                n += 2)
            }
            return r
        }
        function yi(t, e, i) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ai(t, 16),
            this.e = parseInt(e, 16),
            this.d = ai(i, 16)) : console.error("Invalid RSA private key")
        }
        function mi(t, e, i, n, r, s, o, a) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ai(t, 16),
            this.e = parseInt(e, 16),
            this.d = ai(i, 16),
            this.p = ai(n, 16),
            this.q = ai(r, 16),
            this.dmp1 = ai(s, 16),
            this.dmq1 = ai(o, 16),
            this.coeff = ai(a, 16)) : console.error("Invalid RSA private key")
        }
        function vi(t, i) {
            var n = new oi
              , r = t >> 1;
            this.e = parseInt(i, 16);
            for (var s = new e(i,16); ; ) {
                for (; this.p = new e(t - r,1,n),
                0 != this.p.subtract(e.ONE).gcd(s).compareTo(e.ONE) || !this.p.isProbablePrime(10); )
                    ;
                for (; this.q = new e(r,1,n),
                0 != this.q.subtract(e.ONE).gcd(s).compareTo(e.ONE) || !this.q.isProbablePrime(10); )
                    ;
                if (this.p.compareTo(this.q) <= 0) {
                    var o = this.p;
                    this.p = this.q,
                    this.q = o
                }
                var a = this.p.subtract(e.ONE)
                  , u = this.q.subtract(e.ONE)
                  , c = a.multiply(u);
                if (0 == c.gcd(s).compareTo(e.ONE)) {
                    this.n = this.p.multiply(this.q),
                    this.d = s.modInverse(c),
                    this.dmp1 = this.d.mod(a),
                    this.dmq1 = this.d.mod(u),
                    this.coeff = this.q.modInverse(this.p);
                    break
                }
            }
        }
        function bi(t) {
            if (null == this.p || null == this.q)
                return t.modPow(this.d, this.n);
            for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(i) < 0; )
                e = e.add(this.p);
            return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)
        }
        function _i(t) {
            var e = ai(t, 16)
              , i = this.doPrivate(e);
            return null == i ? null : gi(i, this.n.bitLength() + 7 >> 3)
        }
        function wi(t) {
            var e, i, n = "";
            for (e = 0; e + 3 <= t.length; e += 3)
                i = parseInt(t.substring(e, e + 3), 16),
                n += ji.charAt(i >> 6) + ji.charAt(63 & i);
            for (e + 1 == t.length ? (i = parseInt(t.substring(e, e + 1), 16),
            n += ji.charAt(i << 2)) : e + 2 == t.length && (i = parseInt(t.substring(e, e + 2), 16),
            n += ji.charAt(i >> 2) + ji.charAt((3 & i) << 4)); (3 & n.length) > 0; )
                n += Ji;
            return n
        }
        function xi(t) {
            var e, i, n = "", r = 0;
            for (e = 0; e < t.length && t.charAt(e) != Ji; ++e)
                v = ji.indexOf(t.charAt(e)),
                0 > v || (0 == r ? (n += o(v >> 2),
                i = 3 & v,
                r = 1) : 1 == r ? (n += o(i << 2 | v >> 4),
                i = 15 & v,
                r = 2) : 2 == r ? (n += o(i),
                n += o(v >> 2),
                i = 3 & v,
                r = 3) : (n += o(i << 2 | v >> 4),
                n += o(15 & v),
                r = 0));
            return 1 == r && (n += o(i << 2)),
            n
        }
        var Si, Ti = 0xdeadbeefcafe, Ei = 15715070 == (16777215 & Ti);
        Ei && "Microsoft Internet Explorer" == navigator.appName ? (e.prototype.am = r,
        Si = 30) : Ei && "Netscape" != navigator.appName ? (e.prototype.am = n,
        Si = 26) : (e.prototype.am = s,
        Si = 28),
        e.prototype.DB = Si,
        e.prototype.DM = (1 << Si) - 1,
        e.prototype.DV = 1 << Si;
        var Ri = 52;
        e.prototype.FV = Math.pow(2, Ri),
        e.prototype.F1 = Ri - Si,
        e.prototype.F2 = 2 * Si - Ri;
        var Ci, Ai, Di = "0123456789abcdefghijklmnopqrstuvwxyz", ki = new Array;
        for (Ci = "0".charCodeAt(0),
        Ai = 0; 9 >= Ai; ++Ai)
            ki[Ci++] = Ai;
        for (Ci = "a".charCodeAt(0),
        Ai = 10; 36 > Ai; ++Ai)
            ki[Ci++] = Ai;
        for (Ci = "A".charCodeAt(0),
        Ai = 10; 36 > Ai; ++Ai)
            ki[Ci++] = Ai;
        D.prototype.convert = k,
        D.prototype.revert = I,
        D.prototype.reduce = O,
        D.prototype.mulTo = B,
        D.prototype.sqrTo = U,
        N.prototype.convert = K,
        N.prototype.revert = M,
        N.prototype.reduce = V,
        N.prototype.mulTo = J,
        N.prototype.sqrTo = j,
        e.prototype.copyTo = u,
        e.prototype.fromInt = c,
        e.prototype.fromString = l,
        e.prototype.clamp = f,
        e.prototype.dlShiftTo = _,
        e.prototype.drShiftTo = w,
        e.prototype.lShiftTo = x,
        e.prototype.rShiftTo = S,
        e.prototype.subTo = T,
        e.prototype.multiplyTo = E,
        e.prototype.squareTo = R,
        e.prototype.divRemTo = C,
        e.prototype.invDigit = P,
        e.prototype.isEven = L,
        e.prototype.exp = q,
        e.prototype.toString = d,
        e.prototype.negate = p,
        e.prototype.abs = g,
        e.prototype.compareTo = y,
        e.prototype.bitLength = b,
        e.prototype.mod = A,
        e.prototype.modPowInt = H,
        e.ZERO = h(0),
        e.ONE = h(1),
        Pe.prototype.convert = Ne,
        Pe.prototype.revert = Ne,
        Pe.prototype.mulTo = Ke,
        Pe.prototype.sqrTo = Me,
        Le.prototype.convert = qe,
        Le.prototype.revert = He,
        Le.prototype.reduce = Fe,
        Le.prototype.mulTo = Ge,
        Le.prototype.sqrTo = ze;
        var Ii = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]
          , Oi = (1 << 26) / Ii[Ii.length - 1];
        e.prototype.chunkSize = Z,
        e.prototype.toRadix = $,
        e.prototype.fromRadix = X,
        e.prototype.fromNumber = Y,
        e.prototype.bitwiseTo = re,
        e.prototype.changeBit = we,
        e.prototype.addTo = Ee,
        e.prototype.dMultiply = Be,
        e.prototype.dAddOffset = Ue,
        e.prototype.multiplyLowerTo = je,
        e.prototype.multiplyUpperTo = Je,
        e.prototype.modInt = Qe,
        e.prototype.millerRabin = Ye,
        e.prototype.clone = F,
        e.prototype.intValue = z,
        e.prototype.byteValue = G,
        e.prototype.shortValue = W,
        e.prototype.signum = Q,
        e.prototype.toByteArray = te,
        e.prototype.equals = ee,
        e.prototype.min = ie,
        e.prototype.max = ne,
        e.prototype.and = oe,
        e.prototype.or = ue,
        e.prototype.xor = he,
        e.prototype.andNot = fe,
        e.prototype.not = de,
        e.prototype.shiftLeft = pe,
        e.prototype.shiftRight = ge,
        e.prototype.getLowestSetBit = me,
        e.prototype.bitCount = be,
        e.prototype.testBit = _e,
        e.prototype.setBit = xe,
        e.prototype.clearBit = Se,
        e.prototype.flipBit = Te,
        e.prototype.add = Re,
        e.prototype.subtract = Ce,
        e.prototype.multiply = Ae,
        e.prototype.divide = ke,
        e.prototype.remainder = Ie,
        e.prototype.divideAndRemainder = Oe,
        e.prototype.modPow = We,
        e.prototype.modInverse = $e,
        e.prototype.pow = Ve,
        e.prototype.gcd = Ze,
        e.prototype.isProbablePrime = Xe,
        e.prototype.square = De,
        ti.prototype.init = ei,
        ti.prototype.next = ii;
        var Bi, Ui, Pi, Ni = 256;
        if (null == Ui) {
            Ui = new Array,
            Pi = 0;
            var Ki;
            if (window.crypto && window.crypto.getRandomValues) {
                var Mi = new Uint32Array(256);
                for (window.crypto.getRandomValues(Mi),
                Ki = 0; Ki < Mi.length; ++Ki)
                    Ui[Pi++] = 255 & Mi[Ki]
            }
            var Vi = function(t) {
                if (this.count = this.count || 0,
                this.count >= 256 || Pi >= Ni)
                    return void (window.removeEventListener ? window.removeEventListener("mousemove", Vi) : window.detachEvent && window.detachEvent("onmousemove", Vi));
                this.count += 1;
                var e = t.x + t.y;
                Ui[Pi++] = 255 & e
            };
            window.addEventListener ? window.addEventListener("mousemove", Vi) : window.attachEvent && window.attachEvent("onmousemove", Vi)
        }
        oi.prototype.nextBytes = si,
        ci.prototype.doPublic = li,
        ci.prototype.setPublic = hi,
        ci.prototype.encrypt = fi,
        ci.prototype.alipayEncrypt = di,
        ci.prototype.doPrivate = bi,
        ci.prototype.setPrivate = yi,
        ci.prototype.setPrivateEx = mi,
        ci.prototype.generate = vi,
        ci.prototype.decrypt = _i,
        function() {
            var t = function(t, n, r) {
                var s = new oi
                  , o = t >> 1;
                this.e = parseInt(n, 16);
                var a = new e(n,16)
                  , u = this
                  , c = function() {
                    var n = function() {
                        if (u.p.compareTo(u.q) <= 0) {
                            var t = u.p;
                            u.p = u.q,
                            u.q = t
                        }
                        var i = u.p.subtract(e.ONE)
                          , n = u.q.subtract(e.ONE)
                          , s = i.multiply(n);
                        0 == s.gcd(a).compareTo(e.ONE) ? (u.n = u.p.multiply(u.q),
                        u.d = a.modInverse(s),
                        u.dmp1 = u.d.mod(i),
                        u.dmq1 = u.d.mod(n),
                        u.coeff = u.q.modInverse(u.p),
                        setTimeout(function() {
                            r()
                        }, 0)) : setTimeout(c, 0)
                    }
                      , h = function() {
                        u.q = i(),
                        u.q.fromNumberAsync(o, 1, s, function() {
                            u.q.subtract(e.ONE).gcda(a, function(t) {
                                0 == t.compareTo(e.ONE) && u.q.isProbablePrime(10) ? setTimeout(n, 0) : setTimeout(h, 0)
                            })
                        })
                    }
                      , l = function() {
                        u.p = i(),
                        u.p.fromNumberAsync(t - o, 1, s, function() {
                            u.p.subtract(e.ONE).gcda(a, function(t) {
                                0 == t.compareTo(e.ONE) && u.p.isProbablePrime(10) ? setTimeout(h, 0) : setTimeout(l, 0)
                            })
                        })
                    };
                    setTimeout(l, 0)
                };
                setTimeout(c, 0)
            };
            ci.prototype.generateAsync = t;
            var n = function(t, e) {
                var i = this.s < 0 ? this.negate() : this.clone()
                  , n = t.s < 0 ? t.negate() : t.clone();
                if (i.compareTo(n) < 0) {
                    var r = i;
                    i = n,
                    n = r
                }
                var s = i.getLowestSetBit()
                  , o = n.getLowestSetBit();
                if (0 > o)
                    return void e(i);
                o > s && (o = s),
                o > 0 && (i.rShiftTo(o, i),
                n.rShiftTo(o, n));
                var a = function() {
                    (s = i.getLowestSetBit()) > 0 && i.rShiftTo(s, i),
                    (s = n.getLowestSetBit()) > 0 && n.rShiftTo(s, n),
                    i.compareTo(n) >= 0 ? (i.subTo(n, i),
                    i.rShiftTo(1, i)) : (n.subTo(i, n),
                    n.rShiftTo(1, n)),
                    i.signum() > 0 ? setTimeout(a, 0) : (o > 0 && n.lShiftTo(o, n),
                    setTimeout(function() {
                        e(n)
                    }, 0))
                };
                setTimeout(a, 10)
            };
            e.prototype.gcda = n;
            var r = function(t, i, n, r) {
                if ("number" == typeof i)
                    if (2 > t)
                        this.fromInt(1);
                    else {
                        this.fromNumber(t, n),
                        this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), ae, this),
                        this.isEven() && this.dAddOffset(1, 0);
                        var s = this
                          , o = function() {
                            s.dAddOffset(2, 0),
                            s.bitLength() > t && s.subTo(e.ONE.shiftLeft(t - 1), s),
                            s.isProbablePrime(i) ? setTimeout(function() {
                                r()
                            }, 0) : setTimeout(o, 0)
                        };
                        setTimeout(o, 0)
                    }
                else {
                    var a = new Array
                      , u = 7 & t;
                    a.length = (t >> 3) + 1,
                    i.nextBytes(a),
                    u > 0 ? a[0] &= (1 << u) - 1 : a[0] = 0,
                    this.fromString(a, 256)
                }
            };
            e.prototype.fromNumberAsync = r
        }();
        var ji = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          , Ji = "="
          , Li = Li || {};
        Li.env = Li.env || {};
        var qi = Li
          , Hi = Object.prototype
          , Fi = "[object Function]"
          , zi = ["toString", "valueOf"];
        Li.env.parseUA = function(t) {
            var e, i = function(t) {
                var e = 0;
                return parseFloat(t.replace(/\./g, function() {
                    return 1 == e++ ? "" : "."
                }))
            }, n = navigator, r = {
                ie: 0,
                opera: 0,
                gecko: 0,
                webkit: 0,
                chrome: 0,
                mobile: null,
                air: 0,
                ipad: 0,
                iphone: 0,
                ipod: 0,
                ios: null,
                android: 0,
                webos: 0,
                caja: n && n.cajaVersion,
                secure: !1,
                os: null
            }, s = t || navigator && navigator.userAgent, o = window && window.location, a = o && o.href;
            return r.secure = a && 0 === a.toLowerCase().indexOf("https"),
            s && (/windows|win32/i.test(s) ? r.os = "windows" : /macintosh/i.test(s) ? r.os = "macintosh" : /rhino/i.test(s) && (r.os = "rhino"),
            /KHTML/.test(s) && (r.webkit = 1),
            e = s.match(/AppleWebKit\/([^\s]*)/),
            e && e[1] && (r.webkit = i(e[1]),
            / Mobile\//.test(s) ? (r.mobile = "Apple",
            e = s.match(/OS ([^\s]*)/),
            e && e[1] && (e = i(e[1].replace("_", "."))),
            r.ios = e,
            r.ipad = r.ipod = r.iphone = 0,
            e = s.match(/iPad|iPod|iPhone/),
            e && e[0] && (r[e[0].toLowerCase()] = r.ios)) : (e = s.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/),
            e && (r.mobile = e[0]),
            /webOS/.test(s) && (r.mobile = "WebOS",
            e = s.match(/webOS\/([^\s]*);/),
            e && e[1] && (r.webos = i(e[1]))),
            / Android/.test(s) && (r.mobile = "Android",
            e = s.match(/Android ([^\s]*);/),
            e && e[1] && (r.android = i(e[1])))),
            e = s.match(/Chrome\/([^\s]*)/),
            e && e[1] ? r.chrome = i(e[1]) : (e = s.match(/AdobeAIR\/([^\s]*)/),
            e && (r.air = e[0]))),
            r.webkit || (e = s.match(/Opera[\s\/]([^\s]*)/),
            e && e[1] ? (r.opera = i(e[1]),
            e = s.match(/Version\/([^\s]*)/),
            e && e[1] && (r.opera = i(e[1])),
            e = s.match(/Opera Mini[^;]*/),
            e && (r.mobile = e[0])) : (e = s.match(/MSIE\s([^;]*)/),
            e && e[1] ? r.ie = i(e[1]) : (e = s.match(/Gecko\/([^\s]*)/),
            e && (r.gecko = 1,
            e = s.match(/rv:([^\s\)]*)/),
            e && e[1] && (r.gecko = i(e[1]))))))),
            r
        }
        ,
        Li.env.ua = Li.env.parseUA(),
        Li.isFunction = function(t) {
            return "function" == typeof t || Hi.toString.apply(t) === Fi
        }
        ,
        Li._IEEnumFix = Li.env.ua.ie ? function(t, e) {
            var i, n, r;
            for (i = 0; i < zi.length; i += 1)
                n = zi[i],
                r = e[n],
                qi.isFunction(r) && r != Hi[n] && (t[n] = r)
        }
        : function() {}
        ,
        Li.extend = function(t, e, i) {
            if (!e || !t)
                throw new Error("extend failed, please check that all dependencies are included.");
            var n, r = function() {};
            if (r.prototype = e.prototype,
            t.prototype = new r,
            t.prototype.constructor = t,
            t.superclass = e.prototype,
            e.prototype.constructor == Hi.constructor && (e.prototype.constructor = e),
            i) {
                for (n in i)
                    qi.hasOwnProperty(i, n) && (t.prototype[n] = i[n]);
                qi._IEEnumFix(t.prototype, i)
            }
        }
        ,
        "undefined" != typeof KJUR && KJUR || (KJUR = {}),
        "undefined" != typeof KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}),
        KJUR.asn1.ASN1Util = new function() {
            this.integerToByteHex = function(t) {
                var e = t.toString(16);
                return e.length % 2 == 1 && (e = "0" + e),
                e
            }
            ,
            this.bigIntToMinTwosComplementsHex = function(t) {
                var i = t.toString(16);
                if ("-" != i.substr(0, 1))
                    i.length % 2 == 1 ? i = "0" + i : i.match(/^[0-7]/) || (i = "00" + i);
                else {
                    var n = i.substr(1)
                      , r = n.length;
                    r % 2 == 1 ? r += 1 : i.match(/^[0-7]/) || (r += 2);
                    for (var s = "", o = 0; r > o; o++)
                        s += "f";
                    var a = new e(s,16)
                      , u = a.xor(t).add(e.ONE);
                    i = u.toString(16).replace(/^-/, "")
                }
                return i
            }
            ,
            this.getPEMStringFromHex = function(t, e) {
                var i = CryptoJS.enc.Hex.parse(t)
                  , n = CryptoJS.enc.Base64.stringify(i)
                  , r = n.replace(/(.{64})/g, "$1\r\n");
                return r = r.replace(/\r\n$/, ""),
                "-----BEGIN " + e + "-----\r\n" + r + "\r\n-----END " + e + "-----\r\n"
            }
        }
        ,
        KJUR.asn1.ASN1Object = function() {
            var t = "";
            this.getLengthHexFromValue = function() {
                if ("undefined" == typeof this.hV || null == this.hV)
                    throw "this.hV is null or undefined.";
                if (this.hV.length % 2 == 1)
                    throw "value hex must be even length: n=" + t.length + ",v=" + this.hV;
                var e = this.hV.length / 2
                  , i = e.toString(16);
                if (i.length % 2 == 1 && (i = "0" + i),
                128 > e)
                    return i;
                var n = i.length / 2;
                if (n > 15)
                    throw "ASN.1 length too long to represent by 8x: n = " + e.toString(16);
                var r = 128 + n;
                return r.toString(16) + i
            }
            ,
            this.getEncodedHex = function() {
                return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(),
                this.hL = this.getLengthHexFromValue(),
                this.hTLV = this.hT + this.hL + this.hV,
                this.isModified = !1),
                this.hTLV
            }
            ,
            this.getValueHex = function() {
                return this.getEncodedHex(),
                this.hV
            }
            ,
            this.getFreshValueHex = function() {
                return ""
            }
        }
        ,
        KJUR.asn1.DERAbstractString = function(t) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
            this.getString = function() {
                return this.s
            }
            ,
            this.setString = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = t,
                this.hV = stohex(this.s)
            }
            ,
            this.setStringHex = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = null,
                this.hV = t
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            "undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex && this.setStringHex(t.hex))
        }
        ,
        Li.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERAbstractTime = function() {
            KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
            this.localDateToUTC = function(t) {
                utc = t.getTime() + 6e4 * t.getTimezoneOffset();
                var e = new Date(utc);
                return e
            }
            ,
            this.formatDate = function(t, e) {
                var i = this.zeroPadding
                  , n = this.localDateToUTC(t)
                  , r = String(n.getFullYear());
                "utc" == e && (r = r.substr(2, 2));
                var s = i(String(n.getMonth() + 1), 2)
                  , o = i(String(n.getDate()), 2)
                  , a = i(String(n.getHours()), 2)
                  , u = i(String(n.getMinutes()), 2)
                  , c = i(String(n.getSeconds()), 2);
                return r + s + o + a + u + c + "Z"
            }
            ,
            this.zeroPadding = function(t, e) {
                return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
            }
            ,
            this.getString = function() {
                return this.s
            }
            ,
            this.setString = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = t,
                this.hV = stohex(this.s)
            }
            ,
            this.setByDateValue = function(t, e, i, n, r, s) {
                var o = new Date(Date.UTC(t, e - 1, i, n, r, s, 0));
                this.setByDate(o)
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
        }
        ,
        Li.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERAbstractStructured = function(t) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
            this.setByASN1ObjectArray = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.asn1Array = t
            }
            ,
            this.appendASN1Object = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.asn1Array.push(t)
            }
            ,
            this.asn1Array = new Array,
            "undefined" != typeof t && "undefined" != typeof t.array && (this.asn1Array = t.array)
        }
        ,
        Li.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERBoolean = function() {
            KJUR.asn1.DERBoolean.superclass.constructor.call(this),
            this.hT = "01",
            this.hTLV = "0101ff"
        }
        ,
        Li.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERInteger = function(t) {
            KJUR.asn1.DERInteger.superclass.constructor.call(this),
            this.hT = "02",
            this.setByBigInteger = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
            }
            ,
            this.setByInteger = function(t) {
                var i = new e(String(t),10);
                this.setByBigInteger(i)
            }
            ,
            this.setValueHex = function(t) {
                this.hV = t
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            "undefined" != typeof t && ("undefined" != typeof t.bigint ? this.setByBigInteger(t.bigint) : "undefined" != typeof t["int"] ? this.setByInteger(t["int"]) : "undefined" != typeof t.hex && this.setValueHex(t.hex))
        }
        ,
        Li.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERBitString = function(t) {
            KJUR.asn1.DERBitString.superclass.constructor.call(this),
            this.hT = "03",
            this.setHexValueIncludingUnusedBits = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.hV = t
            }
            ,
            this.setUnusedBitsAndHexValue = function(t, e) {
                if (0 > t || t > 7)
                    throw "unused bits shall be from 0 to 7: u = " + t;
                var i = "0" + t;
                this.hTLV = null,
                this.isModified = !0,
                this.hV = i + e
            }
            ,
            this.setByBinaryString = function(t) {
                t = t.replace(/0+$/, "");
                var e = 8 - t.length % 8;
                8 == e && (e = 0);
                for (var i = 0; e >= i; i++)
                    t += "0";
                for (var n = "", i = 0; i < t.length - 1; i += 8) {
                    var r = t.substr(i, 8)
                      , s = parseInt(r, 2).toString(16);
                    1 == s.length && (s = "0" + s),
                    n += s
                }
                this.hTLV = null,
                this.isModified = !0,
                this.hV = "0" + e + n
            }
            ,
            this.setByBooleanArray = function(t) {
                for (var e = "", i = 0; i < t.length; i++)
                    e += 1 == t[i] ? "1" : "0";
                this.setByBinaryString(e)
            }
            ,
            this.newFalseArray = function(t) {
                for (var e = new Array(t), i = 0; t > i; i++)
                    e[i] = !1;
                return e
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            "undefined" != typeof t && ("undefined" != typeof t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : "undefined" != typeof t.bin ? this.setByBinaryString(t.bin) : "undefined" != typeof t.array && this.setByBooleanArray(t.array))
        }
        ,
        Li.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object),
        KJUR.asn1.DEROctetString = function(t) {
            KJUR.asn1.DEROctetString.superclass.constructor.call(this, t),
            this.hT = "04"
        }
        ,
        Li.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERNull = function() {
            KJUR.asn1.DERNull.superclass.constructor.call(this),
            this.hT = "05",
            this.hTLV = "0500"
        }
        ,
        Li.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERObjectIdentifier = function(t) {
            var i = function(t) {
                var e = t.toString(16);
                return 1 == e.length && (e = "0" + e),
                e
            }
              , n = function(t) {
                var n = ""
                  , r = new e(t,10)
                  , s = r.toString(2)
                  , o = 7 - s.length % 7;
                7 == o && (o = 0);
                for (var a = "", u = 0; o > u; u++)
                    a += "0";
                s = a + s;
                for (var u = 0; u < s.length - 1; u += 7) {
                    var c = s.substr(u, 7);
                    u != s.length - 7 && (c = "1" + c),
                    n += i(parseInt(c, 2))
                }
                return n
            };
            KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this),
            this.hT = "06",
            this.setValueHex = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = null,
                this.hV = t
            }
            ,
            this.setValueOidString = function(t) {
                if (!t.match(/^[0-9.]+$/))
                    throw "malformed oid string: " + t;
                var e = ""
                  , r = t.split(".")
                  , s = 40 * parseInt(r[0]) + parseInt(r[1]);
                e += i(s),
                r.splice(0, 2);
                for (var o = 0; o < r.length; o++)
                    e += n(r[o]);
                this.hTLV = null,
                this.isModified = !0,
                this.s = null,
                this.hV = e
            }
            ,
            this.setValueName = function(t) {
                if ("undefined" == typeof KJUR.asn1.x509.OID.name2oidList[t])
                    throw "DERObjectIdentifier oidName undefined: " + t;
                var e = KJUR.asn1.x509.OID.name2oidList[t];
                this.setValueOidString(e)
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            "undefined" != typeof t && ("undefined" != typeof t.oid ? this.setValueOidString(t.oid) : "undefined" != typeof t.hex ? this.setValueHex(t.hex) : "undefined" != typeof t.name && this.setValueName(t.name))
        }
        ,
        Li.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERUTF8String = function(t) {
            KJUR.asn1.DERUTF8String.superclass.constructor.call(this, t),
            this.hT = "0c"
        }
        ,
        Li.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERNumericString = function(t) {
            KJUR.asn1.DERNumericString.superclass.constructor.call(this, t),
            this.hT = "12"
        }
        ,
        Li.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERPrintableString = function(t) {
            KJUR.asn1.DERPrintableString.superclass.constructor.call(this, t),
            this.hT = "13"
        }
        ,
        Li.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERTeletexString = function(t) {
            KJUR.asn1.DERTeletexString.superclass.constructor.call(this, t),
            this.hT = "14"
        }
        ,
        Li.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERIA5String = function(t) {
            KJUR.asn1.DERIA5String.superclass.constructor.call(this, t),
            this.hT = "16"
        }
        ,
        Li.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERUTCTime = function(t) {
            KJUR.asn1.DERUTCTime.superclass.constructor.call(this, t),
            this.hT = "17",
            this.setByDate = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.date = t,
                this.s = this.formatDate(this.date, "utc"),
                this.hV = stohex(this.s)
            }
            ,
            "undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex ? this.setStringHex(t.hex) : "undefined" != typeof t.date && this.setByDate(t.date))
        }
        ,
        Li.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime),
        KJUR.asn1.DERGeneralizedTime = function(t) {
            KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
            this.hT = "18",
            this.setByDate = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.date = t,
                this.s = this.formatDate(this.date, "gen"),
                this.hV = stohex(this.s)
            }
            ,
            "undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex ? this.setStringHex(t.hex) : "undefined" != typeof t.date && this.setByDate(t.date))
        }
        ,
        Li.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime),
        KJUR.asn1.DERSequence = function(t) {
            KJUR.asn1.DERSequence.superclass.constructor.call(this, t),
            this.hT = "30",
            this.getFreshValueHex = function() {
                for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                    var i = this.asn1Array[e];
                    t += i.getEncodedHex()
                }
                return this.hV = t,
                this.hV
            }
        }
        ,
        Li.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured),
        KJUR.asn1.DERSet = function(t) {
            KJUR.asn1.DERSet.superclass.constructor.call(this, t),
            this.hT = "31",
            this.getFreshValueHex = function() {
                for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                    var i = this.asn1Array[e];
                    t.push(i.getEncodedHex())
                }
                return t.sort(),
                this.hV = t.join(""),
                this.hV
            }
        }
        ,
        Li.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured),
        KJUR.asn1.DERTaggedObject = function(t) {
            KJUR.asn1.DERTaggedObject.superclass.constructor.call(this),
            this.hT = "a0",
            this.hV = "",
            this.isExplicit = !0,
            this.asn1Object = null,
            this.setASN1Object = function(t, e, i) {
                this.hT = e,
                this.isExplicit = t,
                this.asn1Object = i,
                this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(),
                this.hTLV = null,
                this.isModified = !0) : (this.hV = null,
                this.hTLV = i.getEncodedHex(),
                this.hTLV = this.hTLV.replace(/^../, e),
                this.isModified = !1)
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            "undefined" != typeof t && ("undefined" != typeof t.tag && (this.hT = t.tag),
            "undefined" != typeof t.explicit && (this.isExplicit = t.explicit),
            "undefined" != typeof t.obj && (this.asn1Object = t.obj,
            this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
        }
        ,
        Li.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object),
        function(t) {
            "use strict";
            var e, i = {};
            i.decode = function(i) {
                var n;
                if (e === t) {
                    var r = "0123456789ABCDEF"
                      , s = " \f\n\r	\xa0\u2028\u2029";
                    for (e = [],
                    n = 0; 16 > n; ++n)
                        e[r.charAt(n)] = n;
                    for (r = r.toLowerCase(),
                    n = 10; 16 > n; ++n)
                        e[r.charAt(n)] = n;
                    for (n = 0; n < s.length; ++n)
                        e[s.charAt(n)] = -1
                }
                var o = []
                  , a = 0
                  , u = 0;
                for (n = 0; n < i.length; ++n) {
                    var c = i.charAt(n);
                    if ("=" == c)
                        break;
                    if (c = e[c],
                    -1 != c) {
                        if (c === t)
                            throw "Illegal character at offset " + n;
                        a |= c,
                        ++u >= 2 ? (o[o.length] = a,
                        a = 0,
                        u = 0) : a <<= 4
                    }
                }
                if (u)
                    throw "Hex encoding incomplete: 4 bits missing";
                return o
            }
            ,
            window.Hex = i
        }(),
        function(t) {
            "use strict";
            var e, i = {};
            i.decode = function(i) {
                var n;
                if (e === t) {
                    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                      , s = "= \f\n\r	\xa0\u2028\u2029";
                    for (e = [],
                    n = 0; 64 > n; ++n)
                        e[r.charAt(n)] = n;
                    for (n = 0; n < s.length; ++n)
                        e[s.charAt(n)] = -1
                }
                var o = []
                  , a = 0
                  , u = 0;
                for (n = 0; n < i.length; ++n) {
                    var c = i.charAt(n);
                    if ("=" == c)
                        break;
                    if (c = e[c],
                    -1 != c) {
                        if (c === t)
                            throw "Illegal character at offset " + n;
                        a |= c,
                        ++u >= 4 ? (o[o.length] = a >> 16,
                        o[o.length] = a >> 8 & 255,
                        o[o.length] = 255 & a,
                        a = 0,
                        u = 0) : a <<= 6
                    }
                }
                switch (u) {
                case 1:
                    throw "Base64 encoding incomplete: at least 2 bits missing";
                case 2:
                    o[o.length] = a >> 10;
                    break;
                case 3:
                    o[o.length] = a >> 16,
                    o[o.length] = a >> 8 & 255
                }
                return o
            }
            ,
            i.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
            i.unarmor = function(t) {
                var e = i.re.exec(t);
                if (e)
                    if (e[1])
                        t = e[1];
                    else {
                        if (!e[2])
                            throw "RegExp out of sync";
                        t = e[2]
                    }
                return i.decode(t)
            }
            ,
            window.Base64 = i
        }(),
        function(t) {
            "use strict";
            function e(t, i) {
                t instanceof e ? (this.enc = t.enc,
                this.pos = t.pos) : (this.enc = t,
                this.pos = i)
            }
            function i(t, e, i, n, r) {
                this.stream = t,
                this.header = e,
                this.length = i,
                this.tag = n,
                this.sub = r
            }
            var n = 100
              , r = "\u2026"
              , s = {
                tag: function(t, e) {
                    var i = document.createElement(t);
                    return i.className = e,
                    i
                },
                text: function(t) {
                    return document.createTextNode(t)
                }
            };
            e.prototype.get = function(e) {
                if (e === t && (e = this.pos++),
                e >= this.enc.length)
                    throw "Requesting byte offset " + e + " on a stream of length " + this.enc.length;
                return this.enc[e]
            }
            ,
            e.prototype.hexDigits = "0123456789ABCDEF",
            e.prototype.hexByte = function(t) {
                return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
            }
            ,
            e.prototype.hexDump = function(t, e, i) {
                for (var n = "", r = t; e > r; ++r)
                    if (n += this.hexByte(this.get(r)),
                    i !== !0)
                        switch (15 & r) {
                        case 7:
                            n += "  ";
                            break;
                        case 15:
                            n += "\n";
                            break;
                        default:
                            n += " "
                        }
                return n
            }
            ,
            e.prototype.parseStringISO = function(t, e) {
                for (var i = "", n = t; e > n; ++n)
                    i += String.fromCharCode(this.get(n));
                return i
            }
            ,
            e.prototype.parseStringUTF = function(t, e) {
                for (var i = "", n = t; e > n; ) {
                    var r = this.get(n++);
                    i += String.fromCharCode(128 > r ? r : r > 191 && 224 > r ? (31 & r) << 6 | 63 & this.get(n++) : (15 & r) << 12 | (63 & this.get(n++)) << 6 | 63 & this.get(n++))
                }
                return i
            }
            ,
            e.prototype.parseStringBMP = function(t, e) {
                for (var i = "", n = t; e > n; n += 2) {
                    var r = this.get(n)
                      , s = this.get(n + 1);
                    i += String.fromCharCode((r << 8) + s)
                }
                return i
            }
            ,
            e.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
            e.prototype.parseTime = function(t, e) {
                var i = this.parseStringISO(t, e)
                  , n = this.reTime.exec(i);
                return n ? (i = n[1] + "-" + n[2] + "-" + n[3] + " " + n[4],
                n[5] && (i += ":" + n[5],
                n[6] && (i += ":" + n[6],
                n[7] && (i += "." + n[7]))),
                n[8] && (i += " UTC",
                "Z" != n[8] && (i += n[8],
                n[9] && (i += ":" + n[9]))),
                i) : "Unrecognized time: " + i
            }
            ,
            e.prototype.parseInteger = function(t, e) {
                var i = e - t;
                if (i > 4) {
                    i <<= 3;
                    var n = this.get(t);
                    if (0 === n)
                        i -= 8;
                    else
                        for (; 128 > n; )
                            n <<= 1,
                            --i;
                    return "(" + i + " bit)"
                }
                for (var r = 0, s = t; e > s; ++s)
                    r = r << 8 | this.get(s);
                return r
            }
            ,
            e.prototype.parseBitString = function(t, e) {
                var i = this.get(t)
                  , n = (e - t - 1 << 3) - i
                  , r = "(" + n + " bit)";
                if (20 >= n) {
                    var s = i;
                    r += " ";
                    for (var o = e - 1; o > t; --o) {
                        for (var a = this.get(o), u = s; 8 > u; ++u)
                            r += a >> u & 1 ? "1" : "0";
                        s = 0
                    }
                }
                return r
            }
            ,
            e.prototype.parseOctetString = function(t, e) {
                var i = e - t
                  , s = "(" + i + " byte) ";
                i > n && (e = t + n);
                for (var o = t; e > o; ++o)
                    s += this.hexByte(this.get(o));
                return i > n && (s += r),
                s
            }
            ,
            e.prototype.parseOID = function(t, e) {
                for (var i = "", n = 0, r = 0, s = t; e > s; ++s) {
                    var o = this.get(s);
                    if (n = n << 7 | 127 & o,
                    r += 7,
                    !(128 & o)) {
                        if ("" === i) {
                            var a = 80 > n ? 40 > n ? 0 : 1 : 2;
                            i = a + "." + (n - 40 * a)
                        } else
                            i += "." + (r >= 31 ? "bigint" : n);
                        n = r = 0
                    }
                }
                return i
            }
            ,
            i.prototype.typeName = function() {
                if (this.tag === t)
                    return "unknown";
                var e = this.tag >> 6
                  , i = (this.tag >> 5 & 1,
                31 & this.tag);
                switch (e) {
                case 0:
                    switch (i) {
                    case 0:
                        return "EOC";
                    case 1:
                        return "BOOLEAN";
                    case 2:
                        return "INTEGER";
                    case 3:
                        return "BIT_STRING";
                    case 4:
                        return "OCTET_STRING";
                    case 5:
                        return "NULL";
                    case 6:
                        return "OBJECT_IDENTIFIER";
                    case 7:
                        return "ObjectDescriptor";
                    case 8:
                        return "EXTERNAL";
                    case 9:
                        return "REAL";
                    case 10:
                        return "ENUMERATED";
                    case 11:
                        return "EMBEDDED_PDV";
                    case 12:
                        return "UTF8String";
                    case 16:
                        return "SEQUENCE";
                    case 17:
                        return "SET";
                    case 18:
                        return "NumericString";
                    case 19:
                        return "PrintableString";
                    case 20:
                        return "TeletexString";
                    case 21:
                        return "VideotexString";
                    case 22:
                        return "IA5String";
                    case 23:
                        return "UTCTime";
                    case 24:
                        return "GeneralizedTime";
                    case 25:
                        return "GraphicString";
                    case 26:
                        return "VisibleString";
                    case 27:
                        return "GeneralString";
                    case 28:
                        return "UniversalString";
                    case 30:
                        return "BMPString";
                    default:
                        return "Universal_" + i.toString(16)
                    }
                case 1:
                    return "Application_" + i.toString(16);
                case 2:
                    return "[" + i + "]";
                case 3:
                    return "Private_" + i.toString(16)
                }
            }
            ,
            i.prototype.reSeemsASCII = /^[ -~]+$/,
            i.prototype.content = function() {
                if (this.tag === t)
                    return null;
                var e = this.tag >> 6
                  , i = 31 & this.tag
                  , s = this.posContent()
                  , o = Math.abs(this.length);
                if (0 !== e) {
                    if (null !== this.sub)
                        return "(" + this.sub.length + " elem)";
                    var a = this.stream.parseStringISO(s, s + Math.min(o, n));
                    return this.reSeemsASCII.test(a) ? a.substring(0, 2 * n) + (a.length > 2 * n ? r : "") : this.stream.parseOctetString(s, s + o)
                }
                switch (i) {
                case 1:
                    return 0 === this.stream.get(s) ? "false" : "true";
                case 2:
                    return this.stream.parseInteger(s, s + o);
                case 3:
                    return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(s, s + o);
                case 4:
                    return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(s, s + o);
                case 6:
                    return this.stream.parseOID(s, s + o);
                case 16:
                case 17:
                    return "(" + this.sub.length + " elem)";
                case 12:
                    return this.stream.parseStringUTF(s, s + o);
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 26:
                    return this.stream.parseStringISO(s, s + o);
                case 30:
                    return this.stream.parseStringBMP(s, s + o);
                case 23:
                case 24:
                    return this.stream.parseTime(s, s + o)
                }
                return null
            }
            ,
            i.prototype.toString = function() {
                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
            }
            ,
            i.prototype.print = function(e) {
                if (e === t && (e = ""),
                document.writeln(e + this),
                null !== this.sub) {
                    e += "  ";
                    for (var i = 0, n = this.sub.length; n > i; ++i)
                        this.sub[i].print(e)
                }
            }
            ,
            i.prototype.toPrettyString = function(e) {
                e === t && (e = "");
                var i = e + this.typeName() + " @" + this.stream.pos;
                if (this.length >= 0 && (i += "+"),
                i += this.length,
                32 & this.tag ? i += " (constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (i += " (encapsulates)"),
                i += "\n",
                null !== this.sub) {
                    e += "  ";
                    for (var n = 0, r = this.sub.length; r > n; ++n)
                        i += this.sub[n].toPrettyString(e)
                }
                return i
            }
            ,
            i.prototype.toDOM = function() {
                var t = s.tag("div", "node");
                t.asn1 = this;
                var e = s.tag("div", "head")
                  , i = this.typeName().replace(/_/g, " ");
                e.innerHTML = i;
                var n = this.content();
                if (null !== n) {
                    n = String(n).replace(/</g, "&lt;");
                    var r = s.tag("span", "preview");
                    r.appendChild(s.text(n)),
                    e.appendChild(r)
                }
                t.appendChild(e),
                this.node = t,
                this.head = e;
                var o = s.tag("div", "value");
                if (i = "Offset: " + this.stream.pos + "<br/>",
                i += "Length: " + this.header + "+",
                i += this.length >= 0 ? this.length : -this.length + " (undefined)",
                32 & this.tag ? i += "<br/>(constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (i += "<br/>(encapsulates)"),
                null !== n && (i += "<br/>Value:<br/><b>" + n + "</b>",
                "object" == typeof oids && 6 == this.tag)) {
                    var a = oids[n];
                    a && (a.d && (i += "<br/>" + a.d),
                    a.c && (i += "<br/>" + a.c),
                    a.w && (i += "<br/>(warning!)"))
                }
                o.innerHTML = i,
                t.appendChild(o);
                var u = s.tag("div", "sub");
                if (null !== this.sub)
                    for (var c = 0, h = this.sub.length; h > c; ++c)
                        u.appendChild(this.sub[c].toDOM());
                return t.appendChild(u),
                e.onclick = function() {
                    t.className = "node collapsed" == t.className ? "node" : "node collapsed"
                }
                ,
                t
            }
            ,
            i.prototype.posStart = function() {
                return this.stream.pos
            }
            ,
            i.prototype.posContent = function() {
                return this.stream.pos + this.header
            }
            ,
            i.prototype.posEnd = function() {
                return this.stream.pos + this.header + Math.abs(this.length)
            }
            ,
            i.prototype.fakeHover = function(t) {
                this.node.className += " hover",
                t && (this.head.className += " hover")
            }
            ,
            i.prototype.fakeOut = function(t) {
                var e = / ?hover/;
                this.node.className = this.node.className.replace(e, ""),
                t && (this.head.className = this.head.className.replace(e, ""))
            }
            ,
            i.prototype.toHexDOM_sub = function(t, e, i, n, r) {
                if (!(n >= r)) {
                    var o = s.tag("span", e);
                    o.appendChild(s.text(i.hexDump(n, r))),
                    t.appendChild(o)
                }
            }
            ,
            i.prototype.toHexDOM = function(e) {
                var i = s.tag("span", "hex");
                if (e === t && (e = i),
                this.head.hexNode = i,
                this.head.onmouseover = function() {
                    this.hexNode.className = "hexCurrent"
                }
                ,
                this.head.onmouseout = function() {
                    this.hexNode.className = "hex"
                }
                ,
                i.asn1 = this,
                i.onmouseover = function() {
                    var t = !e.selected;
                    t && (e.selected = this.asn1,
                    this.className = "hexCurrent"),
                    this.asn1.fakeHover(t)
                }
                ,
                i.onmouseout = function() {
                    var t = e.selected == this.asn1;
                    this.asn1.fakeOut(t),
                    t && (e.selected = null,
                    this.className = "hex")
                }
                ,
                this.toHexDOM_sub(i, "tag", this.stream, this.posStart(), this.posStart() + 1),
                this.toHexDOM_sub(i, this.length >= 0 ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent()),
                null === this.sub)
                    i.appendChild(s.text(this.stream.hexDump(this.posContent(), this.posEnd())));
                else if (this.sub.length > 0) {
                    var n = this.sub[0]
                      , r = this.sub[this.sub.length - 1];
                    this.toHexDOM_sub(i, "intro", this.stream, this.posContent(), n.posStart());
                    for (var o = 0, a = this.sub.length; a > o; ++o)
                        i.appendChild(this.sub[o].toHexDOM(e));
                    this.toHexDOM_sub(i, "outro", this.stream, r.posEnd(), this.posEnd())
                }
                return i
            }
            ,
            i.prototype.toHexString = function() {
                return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
            }
            ,
            i.decodeLength = function(t) {
                var e = t.get()
                  , i = 127 & e;
                if (i == e)
                    return i;
                if (i > 3)
                    throw "Length over 24 bits not supported at position " + (t.pos - 1);
                if (0 === i)
                    return -1;
                e = 0;
                for (var n = 0; i > n; ++n)
                    e = e << 8 | t.get();
                return e
            }
            ,
            i.hasContent = function(t, n, r) {
                if (32 & t)
                    return !0;
                if (3 > t || t > 4)
                    return !1;
                var s = new e(r);
                3 == t && s.get();
                var o = s.get();
                if (o >> 6 & 1)
                    return !1;
                try {
                    var a = i.decodeLength(s);
                    return s.pos - r.pos + a == n
                } catch (u) {
                    return !1
                }
            }
            ,
            i.decode = function(t) {
                t instanceof e || (t = new e(t,0));
                var n = new e(t)
                  , r = t.get()
                  , s = i.decodeLength(t)
                  , o = t.pos - n.pos
                  , a = null;
                if (i.hasContent(r, s, t)) {
                    var u = t.pos;
                    if (3 == r && t.get(),
                    a = [],
                    s >= 0) {
                        for (var c = u + s; t.pos < c; )
                            a[a.length] = i.decode(t);
                        if (t.pos != c)
                            throw "Content size is not correct for container starting at offset " + u
                    } else
                        try {
                            for (; ; ) {
                                var h = i.decode(t);
                                if (0 === h.tag)
                                    break;
                                a[a.length] = h
                            }
                            s = u - t.pos
                        } catch (l) {
                            throw "Exception while decoding undefined length content: " + l
                        }
                } else
                    t.pos += s;
                return new i(n,o,s,r,a)
            }
            ,
            i.test = function() {
                for (var t = [{
                    value: [39],
                    expected: 39
                }, {
                    value: [129, 201],
                    expected: 201
                }, {
                    value: [131, 254, 220, 186],
                    expected: 16702650
                }], n = 0, r = t.length; r > n; ++n) {
                    var s = new e(t[n].value,0)
                      , o = i.decodeLength(s);
                    o != t[n].expected && document.write("In test[" + n + "] expected " + t[n].expected + " got " + o + "\n")
                }
            }
            ,
            window.ASN1 = i
        }(),
        ASN1.prototype.getHexStringValue = function() {
            var t = this.toHexString()
              , e = 2 * this.header
              , i = 2 * this.length;
            return t.substr(e, i)
        }
        ,
        ci.prototype.parseKey = function(t) {
            try {
                var e = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/
                  , i = e.test(t) ? Hex.decode(t) : Base64.unarmor(t)
                  , n = ASN1.decode(i);
                if (9 === n.sub.length) {
                    var r = n.sub[1].getHexStringValue();
                    this.n = ai(r, 16);
                    var s = n.sub[2].getHexStringValue();
                    this.e = parseInt(s, 16);
                    var o = n.sub[3].getHexStringValue();
                    this.d = ai(o, 16);
                    var a = n.sub[4].getHexStringValue();
                    this.p = ai(a, 16);
                    var u = n.sub[5].getHexStringValue();
                    this.q = ai(u, 16);
                    var c = n.sub[6].getHexStringValue();
                    this.dmp1 = ai(c, 16);
                    var h = n.sub[7].getHexStringValue();
                    this.dmq1 = ai(h, 16);
                    var l = n.sub[8].getHexStringValue();
                    this.coeff = ai(l, 16)
                } else {
                    if (2 !== n.sub.length)
                        return !1;
                    var f = n.sub[1]
                      , d = f.sub[0]
                      , r = d.sub[0].getHexStringValue();
                    this.n = ai(r, 16);
                    var s = d.sub[1].getHexStringValue();
                    this.e = parseInt(s, 16)
                }
                return !0
            } catch (p) {
                return !1
            }
        }
        ,
        ci.prototype.getPrivateBaseKey = function() {
            var t = {
                array: [new KJUR.asn1.DERInteger({
                    "int": 0
                }), new KJUR.asn1.DERInteger({
                    bigint: this.n
                }), new KJUR.asn1.DERInteger({
                    "int": this.e
                }), new KJUR.asn1.DERInteger({
                    bigint: this.d
                }), new KJUR.asn1.DERInteger({
                    bigint: this.p
                }), new KJUR.asn1.DERInteger({
                    bigint: this.q
                }), new KJUR.asn1.DERInteger({
                    bigint: this.dmp1
                }), new KJUR.asn1.DERInteger({
                    bigint: this.dmq1
                }), new KJUR.asn1.DERInteger({
                    bigint: this.coeff
                })]
            }
              , e = new KJUR.asn1.DERSequence(t);
            return e.getEncodedHex()
        }
        ,
        ci.prototype.getPrivateBaseKeyB64 = function() {
            return wi(this.getPrivateBaseKey())
        }
        ,
        ci.prototype.getPublicBaseKey = function() {
            var t = {
                array: [new KJUR.asn1.DERObjectIdentifier({
                    oid: "1.2.840.113549.1.1.1"
                }), new KJUR.asn1.DERNull]
            }
              , e = new KJUR.asn1.DERSequence(t);
            t = {
                array: [new KJUR.asn1.DERInteger({
                    bigint: this.n
                }), new KJUR.asn1.DERInteger({
                    "int": this.e
                })]
            };
            var i = new KJUR.asn1.DERSequence(t);
            t = {
                hex: "00" + i.getEncodedHex()
            };
            var n = new KJUR.asn1.DERBitString(t);
            t = {
                array: [e, n]
            };
            var r = new KJUR.asn1.DERSequence(t);
            return r.getEncodedHex()
        }
        ,
        ci.prototype.getPublicBaseKeyB64 = function() {
            return wi(this.getPublicBaseKey())
        }
        ,
        ci.prototype.wordwrap = function(t, e) {
            if (e = e || 64,
            !t)
                return t;
            var i = "(.{1," + e + "})( +|$\n?)|(.{1," + e + "})";
            return t.match(RegExp(i, "g")).join("\n")
        }
        ,
        ci.prototype.getPrivateKey = function() {
            var t = "-----BEGIN RSA PRIVATE KEY-----\n";
            return t += this.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
            t += "-----END RSA PRIVATE KEY-----"
        }
        ,
        ci.prototype.getPublicKey = function() {
            var t = "-----BEGIN PUBLIC KEY-----\n";
            return t += this.wordwrap(this.getPublicBaseKeyB64()) + "\n",
            t += "-----END PUBLIC KEY-----"
        }
        ,
        ci.prototype.hasPublicKeyProperty = function(t) {
            return t = t || {},
            t.hasOwnProperty("n") && t.hasOwnProperty("e")
        }
        ,
        ci.prototype.hasPrivateKeyProperty = function(t) {
            return t = t || {},
            t.hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
        }
        ,
        ci.prototype.parsePropertiesFrom = function(t) {
            this.n = t.n,
            this.e = t.e,
            t.hasOwnProperty("d") && (this.d = t.d,
            this.p = t.p,
            this.q = t.q,
            this.dmp1 = t.dmp1,
            this.dmq1 = t.dmq1,
            this.coeff = t.coeff)
        }
        ;
        var Gi = function(t) {
            ci.call(this),
            t && ("string" == typeof t ? this.parseKey(t) : (this.hasPrivateKeyProperty(t) || this.hasPublicKeyProperty(t)) && this.parsePropertiesFrom(t))
        };
        Gi.prototype = new ci,
        Gi.prototype.constructor = Gi;
        var Wi = function(t) {
            t = t || {},
            this.default_key_size = parseInt(t.default_key_size) || 1024,
            this.default_public_exponent = t.default_public_exponent || "010001",
            this.log = t.log || !1,
            this.key = null
        };
        return Wi.prototype.setKey = function(t) {
            this.log && this.key && console.warn("A key was already set, overriding existing."),
            this.key = new Gi(t)
        }
        ,
        Wi.prototype.setPrivateKey = function(t) {
            this.setKey(t)
        }
        ,
        Wi.prototype.setPublicKey = function(t) {
            this.setKey(t)
        }
        ,
        Wi.prototype.decrypt = function(t) {
            try {
                return this.getKey().decrypt(xi(t))
            } catch (e) {
                return !1
            }
        }
        ,
        Wi.prototype.encrypt = function(t) {
            try {
                return wi(this.getKey().encrypt(t))
            } catch (e) {
                return !1
            }
        }
        ,
        Wi.prototype.alipayEncrypt = function(t, e, i) {
            try {
                return wi(this.getKey().alipayEncrypt(t, e, i))
            } catch (n) {
                return !1
            }
        }
        ,
        Wi.prototype.getKey = function(t) {
            if (!this.key) {
                if (this.key = new Gi,
                t && "[object Function]" === {}.toString.call(t))
                    return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                this.key.generate(this.default_key_size, this.default_public_exponent)
            }
            return this.key
        }
        ,
        Wi.prototype.getPrivateKey = function() {
            return this.getKey().getPrivateKey()
        }
        ,
        Wi.prototype.getPrivateKeyB64 = function() {
            return this.getKey().getPrivateBaseKeyB64()
        }
        ,
        Wi.prototype.getPublicKey = function() {
            return this.getKey().getPublicKey()
        }
        ,
        Wi.prototype.getPublicKeyB64 = function() {
            return this.getKey().getPublicBaseKeyB64()
        }
        ,
        t = Wi
    }(),
    ms_062_index = function(t) {
        function e(t) {
            var e = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(t);
            if (e) {
                var i = parseFloat(e[1])
                  , n = (e[2] || "ms").toLowerCase();
                switch (n) {
                case "years":
                case "year":
                case "y":
                    return i * c;
                case "days":
                case "day":
                case "d":
                    return i * u;
                case "hours":
                case "hour":
                case "h":
                    return i * a;
                case "minutes":
                case "minute":
                case "m":
                    return i * o;
                case "seconds":
                case "second":
                case "s":
                    return i * s;
                case "ms":
                    return i
                }
            }
        }
        function i(t) {
            return t >= u ? Math.round(t / u) + "d" : t >= a ? Math.round(t / a) + "h" : t >= o ? Math.round(t / o) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms"
        }
        function n(t) {
            return r(t, u, "day") || r(t, a, "hour") || r(t, o, "minute") || r(t, s, "second") || t + " ms"
        }
        function r(t, e, i) {
            return e > t ? void 0 : 1.5 * e > t ? Math.floor(t / e) + " " + i : Math.ceil(t / e) + " " + i + "s"
        }
        var s = 1e3
          , o = 60 * s
          , a = 60 * o
          , u = 24 * a
          , c = 365.25 * u;
        return t = function(t, r) {
            return r = r || {},
            "string" == typeof t ? e(t) : r.long ? n(t) : i(t)
        }
    }(),
    security_client_utils_202_lib_utils = function(t) {
        function e(t) {
            for (var e, i = {}, n = t.split("&"), r = 0; r < n.length; r++)
                if (e = n[r]) {
                    var s = e.indexOf("=")
                      , o = e.slice(0, s);
                    if (o) {
                        var a = e.slice(s + 1);
                        i[decodeURIComponent(o)] = decodeURIComponent(a)
                    }
                }
            return i
        }
        function i(t) {
            var i = e(t)
              , n = [];
            for (var r in i)
                n.push(encodeURIComponent(r) + "=" + encodeURIComponent(i[r]));
            return n.join("&")
        }
        return t = {
            parseQuery: e,
            encodeCmdStr: i
        }
    }(),
    domready_001_index = function(t) {
        function e(t) {
            function e(t) {
                for (f = 1; t = n.shift(); )
                    t()
            }
            var i, n = [], r = !1, s = document, o = s.documentElement, a = o.doScroll, u = "DOMContentLoaded", c = "addEventListener", h = "onreadystatechange", l = "readyState", f = /^loade|c/.test(s[l]);
            return s[c] && s[c](u, i = function() {
                s.removeEventListener(u, i, r),
                e()
            }
            , r),
            a && s.attachEvent(h, i = function() {
                /^c/.test(s[l]) && (s.detachEvent(h, i),
                e())
            }
            ),
            t = a ? function(e) {
                self != top ? f ? e() : n.push(e) : function() {
                    try {
                        o.doScroll("left")
                    } catch (i) {
                        return setTimeout(function() {
                            t(e)
                        }, 50)
                    }
                    e()
                }()
            }
            : function(t) {
                f ? t() : n.push(t)
            }
        }
        return t = e
    }(),
    security_client_utils_202_lib_edit = function(t) {
        function e(t, e) {
            try {
                return !!new ActiveXObject(t)
            } catch (i) {
                return !(!navigator.plugins || !navigator.plugins[e])
            }
        }
        function i(t, e) {
            try {
                var i = new ActiveXObject(t.activex);
                "undefined" != typeof i[t.defaultMethod] ? e(null, i) : e({
                    code: -1,
                    message: "\u63a7\u4ef6\u53ef\u4ee5\u521d\u59cb\u5316\uff0c\u4f46\u662f\u8c03\u7528\u4e0d\u5230" + t.defaultMethod + "\u65b9\u6cd5, \u5e94\u8be5\u662f\u88ab\u6d4f\u89c8\u5668\u62e6\u622a\u4e86\u3002"
                })
            } catch (s) {
                r(function() {
                    var i = n(t.type, t.classId);
                    "undefined" != typeof i[t.defaultMethod] ? e(null, i) : e({
                        code: -1,
                        message: "\u63a7\u4ef6\u53ef\u4ee5\u521d\u59cb\u5316\uff0c\u4f46\u662f\u8c03\u7528\u4e0d\u5230" + t.defaultMethod + "\u65b9\u6cd5, \u5e94\u8be5\u662f\u88ab\u6d4f\u89c8\u5668\u62e6\u622a\u4e86\u3002"
                    })
                })
            }
        }
        function n(t, e) {
            var i = document.createElement("object");
            return i.setAttribute("height", 1),
            i.setAttribute("width", 1),
            i.style.opacity = .1,
            i.style.position = "absolute",
            i.style.right = 0,
            i.style.bottom = 0,
            c ? i.setAttribute("classid", "clsid:" + e) : i.setAttribute("type", t),
            document.body.appendChild(i),
            i
        }
        var r = domready_001_index()
          , s = navigator.userAgent.toLowerCase()
          , o = !1
          , a = !1
          , u = !1
          , c = !1;
        /\bwindows nt/.test(s) ? o = !0 : /\bmac os/.test(s) ? a = !0 : /\blinux /.test(s) && (u = !0),
        (/\bmsie /.test(s) || /\btrident\//.test(s) && /\brv:/.test(s)) && (c = !0);
        var h = {
            options: {
                activex: "Aliedit.EditCtrl",
                plugin: function() {
                    return o ? "Alipay security control" : a ? "Aliedit Plug-In" : u ? "Aliedit" : ""
                }(),
                classId: "488A4255-3236-44B3-8F27-FA1AECAA8844",
                type: "application/aliedit",
                defaultMethod: "TextData"
            },
            cmd2param: {
                ci1: "ci1",
                ci2: "ipproxy",
                version: "alieditVersion"
            },
            check: function(t) {
                e(this.options.activex, this.options.plugin) ? i(this.options, function(e) {
                    t(e)
                }) : t({
                    code: -1,
                    message: "Edit is not installed."
                })
            },
            getInfo: function(t, e) {
                var n = this.objCache
                  , r = this;
                n ? e(null, this.execute(n, t)) : i(this.options, function(i, n) {
                    i ? e({
                        code: -1,
                        message: "Get control object error: " + i.message
                    }) : (r.objCache = n,
                    e(null, r.execute(n, t)))
                })
            },
            execute: function(t, e) {
                if ("undefined" == typeof t[e])
                    return "";
                var i = t[e]();
                return /XOR_1_0{30}_/.test(i) || /(?:\d\.){3}\d/.test(i) || (i = ""),
                i
            },
            getCi1: function(t) {
                this.getInfo(this.cmd2param.ci1, t)
            },
            getCi2: function(t) {
                this.getInfo(this.cmd2param.ci2, t)
            },
            getVersion: function(t) {
                this.getInfo(this.cmd2param.version, t)
            },
            objCache: null
        }
          , l = {
            options: {
                activex: "npAliSecCtrl.SecCtrl",
                plugin: "Alipay Security Control 3",
                classId: "8EB7C6CB-2DA6-4ABE-B2EA-EAC5A372E757",
                type: "application/x-alisecctrl-plugin",
                defaultMethod: "GetMiscInfo"
            },
            cmd2param: {
                ci1: "4",
                ci2: "5",
                netinfo: "lbs",
                version: "1"
            },
            check: function(t) {
                e(this.options.activex, this.options.plugin) ? i(this.options, function(e) {
                    t(e)
                }) : t({
                    code: -1,
                    message: "Npedit is not installed."
                })
            },
            getInfo: function(t, e) {
                var n = this.objCache
                  , r = this;
                n ? e(null, n.GetMiscInfo(t, 0)) : i(this.options, function(i, n) {
                    i ? e({
                        code: -1,
                        message: "Get control object error: " + i.message
                    }) : (r.objCache = n,
                    e(null, n.GetMiscInfo(t, 0)))
                })
            },
            getCi1: function(t) {
                this.getInfo(this.cmd2param.ci1, t)
            },
            getCi2: function(t) {
                this.getInfo(this.cmd2param.ci2, t)
            },
            getVersion: function(t) {
                this.getInfo(this.cmd2param.version, t)
            },
            getNetInfo: function(t) {
                this.getInfo(this.cmd2param.netinfo, t)
            },
            objCache: null
        };
        return t.Npedit = l,
        t.Edit = h,
        t
    }({}),
    security_client_utils_202_lib_keysequence = function(t) {
        function e(t) {
            var e = document.getElementById(t);
            if (e) {
                var i = s[t] = [];
                o(e, "keydown", function(t) {
                    i.push(["D", t.keyCode, (new Date).getTime()])
                }),
                o(e, "keyup", function(n) {
                    "" === e.value ? i = s[t] = [] : i.push(["U", n.keyCode, (new Date).getTime()])
                })
            }
        }
        function i(t) {
            var e = s[t];
            if (!e || 0 === e.length)
                return "";
            for (var i = n(e).join("|"); e.length; )
                e.pop();
            return i.length >= 1024 ? "" : i
        }
        function n(t) {
            for (var e, i, n = t[0][2], r = 0, s = t.length; s > r; r++)
                e = t[r],
                e[2] -= n,
                i = e[1],
                i >= 48 && 57 >= i || i >= 65 && 90 >= i || i >= 186 && 192 >= i || i >= 219 && 222 >= i ? e[1] = 0 : i >= 96 && 111 >= i && (e[1] = -1);
            return t
        }
        function r(t, e) {
            for (var i, n = [], r = 0, s = "", o = 0; 256 > o; o++)
                n[o] = o;
            for (o = 0; 256 > o; o++)
                r = (r + n[o] + t.charCodeAt(o % t.length)) % 256,
                i = n[o],
                n[o] = n[r],
                n[r] = i;
            o = 0,
            r = 0;
            for (var a = 0; a < e.length; a++)
                o = (o + 1) % 256,
                r = (r + n[o]) % 256,
                i = n[o],
                n[o] = n[r],
                n[r] = i,
                s += String.fromCharCode(e.charCodeAt(a) ^ n[(n[o] + n[r]) % 256]);
            return s
        }
        var s = {}
          , o = function() {
            return document.addEventListener ? function(t, e, i) {
                t.addEventListener(e, i, !1)
            }
            : document.attachEvent ? function(t, e, i) {
                t.attachEvent("on" + e, i)
            }
            : function(t, e, i) {
                t["on" + e.toLowerCase()] = i
            }
        }();
        return t = {
            start: e,
            get: i,
            ksk: r
        }
    }(),
    security_client_utils_202_lib_ua = function(t) {
        function e(t, e) {
            for (var i in t)
                if (t.hasOwnProperty(i) && e(t[i], i, t) === !1)
                    break
        }
        var i = navigator.userAgent.toLowerCase()
          , n = {
            os: {
                windows: /\bwindows nt/,
                macos: /\bmac os/,
                linux: /\blinux\b/
            },
            browser: {
                ie: /\bmsie |(?:\btrident\/\d+.+?\brv:\d)/,
                chrome: / (?:chrome|crios)\//,
                safari: /version\/\d+.+? safari\//,
                firefox: /firefox\/\d+/,
                opera: /opera.+?version\/\d+/
            },
            engine: {
                trident: /\btrident\/\d+\.\d+/
            }
        }
          , r = {
            os: {},
            browser: {},
            engine: {}
        };
        return e(n, function(t, n) {
            e(t, function(t, e) {
                return t.test(i) ? (r[n][e] = !0,
                !1) : void 0
            })
        }),
        t = r
    }(),
    security_client_utils_202_lib_ihealthy = function(t) {
        function e(t, e) {
            try {
                return !!new ActiveXObject(t)
            } catch (i) {
                return !(!navigator.plugins || !navigator.plugins[e])
            }
        }
        function i(t, e) {
            var i;
            try {
                i = new ActiveXObject(t.activex)
            } catch (s) {
                r(function() {
                    var i = n(t.type, t.classId);
                    "undefined" != typeof i[t.defaultMethod] ? e(null, i) : e({
                        code: -1,
                        message: "\u63a7\u4ef6\u53ef\u4ee5\u521d\u59cb\u5316\uff0c\u4f46\u662f\u8c03\u7528\u4e0d\u5230" + t.defaultMethod + "\u65b9\u6cd5, \u5e94\u8be5\u662f\u88ab\u6d4f\u89c8\u5668\u62e6\u622a\u4e86\u3002"
                    })
                })
            }
        }
        function n(t, e) {
            var i = document.createElement("object");
            return i.setAttribute("height", 1),
            i.setAttribute("width", 1),
            c ? i.setAttribute("classId", "clsid:" + e) : i.setAttribute("type", t),
            document.body.appendChild(i),
            i
        }
        var r = domready_001_index()
          , s = navigator.userAgent.toLowerCase()
          , o = !1
          , a = !1
          , u = !1
          , c = !1;
        /\bwindows nt/.test(s) ? o = !0 : /\bmac os/.test(s) ? a = !0 : /\blinux /.test(s) && (u = !0),
        (/\bmsie /.test(s) || /\btrident\//.test(s) && /\brv:/.test(s)) && (c = !0);
        var h = {
            options: {
                activex: "npAliInetHealth.SecCheck",
                plugin: function() {
                    return o ? "Alipay Security Payment Client Suit" : a ? "" : u ? "" : ""
                }(),
                classId: "CLSID:6EAAD146-39C4-4F5C-A0A7-DAA160ABD907",
                type: "application/x-aliinethealth-plugin",
                defaultMethod: "GetInfo"
            },
            getInfo: function(t, e) {
                var n = this.objCache
                  , r = this;
                n ? e(null, this.execute(n, t)) : i(this.options, function(i, n) {
                    i ? e && e({
                        code: -1,
                        message: "Get control object error: " + i.message
                    }) : (r.objCache = n,
                    e && e(null, r.execute(n, t)))
                })
            },
            check: function(t) {
                e(this.options.activex, this.options.plugin) ? i(this.options, function(e) {
                    t && t(e)
                }) : t && t({
                    code: -1,
                    message: "Edit is not installed."
                })
            },
            execute: function(t, e) {
                if (!e)
                    return "";
                var i = t.GetInfo(e);
                return i
            },
            getIHealthInfo: function(t) {
                this.getInfo("iNetHealth", t)
            },
            getStatus: function(t) {
                this.getInfo('{"command":"state"}', t)
            },
            getVersion: function(t) {
                this.getInfo("Version", t)
            },
            getDid: function(t) {
                this.getInfo('{"command":"did"}', t)
            },
            objCache: null
        };
        return t = h
    }(),
    extend_100_index = function(t) {
        return t = function(t) {
            for (var e, i = Array.prototype.slice.call(arguments, 1), n = 0; e = i[n]; n++)
                if (e)
                    for (var r in e)
                        t[r] = e[r];
            return t
        }
    }(),
    json_fallback_100_index = function(exports) {
        return function() {
            "use strict";
            function f(t) {
                return 10 > t ? "0" + t : t
            }
            function quote(t) {
                return escapable.lastIndex = 0,
                escapable.test(t) ? '"' + t.replace(escapable, function(t) {
                    var e = meta[t];
                    return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + t + '"'
            }
            function str(t, e) {
                var i, n, r, s, o, a = gap, u = e[t];
                switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(t)),
                "function" == typeof rep && (u = rep.call(e, t, u)),
                typeof u) {
                case "string":
                    return quote(u);
                case "number":
                    return isFinite(u) ? String(u) : "null";
                case "boolean":
                case "null":
                    return String(u);
                case "object":
                    if (!u)
                        return "null";
                    if (gap += indent,
                    o = [],
                    "[object Array]" === Object.prototype.toString.apply(u)) {
                        for (s = u.length,
                        i = 0; s > i; i += 1)
                            o[i] = str(i, u) || "null";
                        return r = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + a + "]" : "[" + o.join(",") + "]",
                        gap = a,
                        r
                    }
                    if (rep && "object" == typeof rep)
                        for (s = rep.length,
                        i = 0; s > i; i += 1)
                            "string" == typeof rep[i] && (n = rep[i],
                            r = str(n, u),
                            r && o.push(quote(n) + (gap ? ": " : ":") + r));
                    else
                        for (n in u)
                            Object.prototype.hasOwnProperty.call(u, n) && (r = str(n, u),
                            r && o.push(quote(n) + (gap ? ": " : ":") + r));
                    return r = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + a + "}" : "{" + o.join(",") + "}",
                    gap = a,
                    r
                }
            }
            var JSON = exports = {};
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
            }
            ,
            String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                return this.valueOf()
            }
            );
            var cx, escapable, gap, indent, meta, rep;
            "function" != typeof JSON.stringify && (escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            JSON.stringify = function(t, e, i) {
                var n;
                if (gap = "",
                indent = "",
                "number" == typeof i)
                    for (n = 0; i > n; n += 1)
                        indent += " ";
                else
                    "string" == typeof i && (indent = i);
                if (rep = e,
                e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))
                    throw new Error("JSON.stringify");
                return str("", {
                    "": t
                })
            }
            ),
            "function" != typeof JSON.parse && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            JSON.parse = function(text, reviver) {
                function walk(t, e) {
                    var i, n, r = t[e];
                    if (r && "object" == typeof r)
                        for (i in r)
                            Object.prototype.hasOwnProperty.call(r, i) && (n = walk(r, i),
                            void 0 !== n ? r[i] = n : delete r[i]);
                    return reviver.call(t, e, r)
                }
                var j;
                if (text = String(text),
                cx.lastIndex = 0,
                cx.test(text) && (text = text.replace(cx, function(t) {
                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                })),
                /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                    return j = eval("(" + text + ")"),
                    "function" == typeof reviver ? walk({
                        "": j
                    }, "") : j;
                throw new SyntaxError("JSON.parse")
            }
            )
        }(),
        exports
    }(),
    security_password_222_lib_six_digit_password = function(t) {
        function e(t, e) {
            return t - t % e
        }
        function i(t, e) {
            return new Array(e + 1).join(t)
        }
        function n(t) {
            return function() {
                var e = t.val().length;
                t.focus();
                try {
                    t[0].setSelectionRange(e, e)
                } catch (i) {
                    if (t[0].createTextRange) {
                        var n = t[0].createTextRange();
                        n.collapse(!0),
                        n.moveEnd("character", e),
                        n.moveStart("character", e),
                        n.select()
                    }
                }
            }
        }
        var r = window.jQuery
          , s = arale_events_120_events
          , o = 6
          , a = {
            FOCUS: 1,
            BLUR: 2,
            COMPLETE: 3
        }
          , u = function(t) {
            this._element = r(t),
            this._events = new s,
            this._length = parseInt(this._element.attr("maxlength"), 10) || o,
            this._parentWidth,
            this._status,
            this._cursor,
            this._step,
            this._mo
        };
        return u.prototype = {
            _getMO: function() {
                return this._mo || (this._mo = r('<div class="sixDigitPassword" tabIndex="0">' + i("<i><b></b></i>", this._length) + "</div>")),
                this
            },
            _getCursor: function() {
                return this._cursor || (this._cursor = r("<span></span>")).appendTo(this._mo),
                this
            },
            _initStyle: function() {
                var t = this
                  , i = parseInt(t._mo.parent().css("width"), 10) || 182;
                return t._parentWidth = e(i, t._length),
                t._step = t._parentWidth / 6,
                t._mo.css({
                    width: t._parentWidth
                }).find("i").css({
                    width: t._step - 1
                }),
                t._cursor.css({
                    width: t._step - 1
                }),
                this
            },
            _fixedCousor: function() {
                var t = this
                  , e = (t._element.val(),
                t._element.val().length)
                  , i = r("b", t._mo)
                  , n = r("i", t._mo)
                  , s = t._step * (e >= t._length ? t._length - 1 : e);
                return i.each(function(t) {
                    r(this).css({
                        visibility: e > t ? "visible" : "hidden"
                    })
                }),
                (this._status == a.FOCUS || this._status == a.COMPLETE) && n.removeClass("active").eq(e).addClass("active"),
                t._cursor.animate({
                    left: s
                }, 50),
                this
            },
            render: function() {
                var t = this;
                this._getMO()._getCursor(),
                this._element.attr("maxlength", 6).attr("minlength", 6).css({
                    outline: "none",
                    "margin-left": "-999px"
                }),
                this._element.parent(".ui-form-item").css("over-flow", "hidden");
                var e = (r("b", t._mo),
                r("i", t._mo));
                return t._element.addClass("sixDigitPassword").on("focus", function() {
                    var i = t._element.val().length;
                    t._status = a.FOCUS,
                    e.eq(i).addClass("active"),
                    t._cursor.css({
                        visibility: "visible"
                    })
                }).on("blur", function() {
                    t._status = a.BLUR,
                    e.removeClass("active"),
                    t._cursor.css({
                        visibility: "hidden"
                    })
                }).on("keyup input paste", function() {
                    var e = t._element.val().length
                      , i = t._element.val();
                    e === t._length ? (t._status = a.COMPLETE,
                    t._events.trigger("complete", i)) : (t._status = a.FOCUS,
                    t._events.trigger("uncomplete", i)),
                    t._fixedCousor()
                }).after(this._mo),
                t._mo.focus(function() {
                    t._status = a.FOCUS,
                    t._element.focus(),
                    n(t._element)(),
                    t._cursor.css({
                        visibility: "visible"
                    })
                }).click(function() {
                    t._status = a.FOCUS,
                    t._element.focus(),
                    n(t._element)(),
                    t._cursor.css({
                        visibility: "visible"
                    })
                }),
                t._initStyle(),
                e.eq(0).css({
                    "border-color": "transparent"
                }),
                setInterval(function() {
                    t._fixedCousor(),
                    t._status == a.FOCUS || t._status == a.COMPLETE ? t._element.focus() : t._status == a.BLUR && t._element.blur()
                }, 500),
                r(window).on("resize", function() {
                    t._initStyle()._fixedCousor()
                }),
                this
            },
            on: function(t, e) {
                return this._events.on(t, e, this),
                this
            },
            off: function(t, e) {
                return this._events.off(t, e),
                this
            },
            val: function() {
                return this._element.val()
            },
            clear: function() {
                return this._element.val(""),
                this._fixedCousor(),
                this
            },
            focus: function() {
                return this._status = a.FOCUS,
                n(this._element)(),
                this
            },
            blur: function() {
                return this._status = a.BLUR,
                this._element.blur(),
                this
            }
        },
        t = u
    }(),
    security_crypto_200_index = function(t) {
        return t = {
            Base64: security_crypto_200_lib_base64,
            xor: security_crypto_200_lib_xor,
            RSA: security_crypto_200_lib_rsa
        }
    }(),
    debug_211_debug = function(t) {
        function e() {
            return t.colors[u++ % t.colors.length]
        }
        function i(i) {
            function n() {}
            function r() {
                var i = r
                  , n = +new Date
                  , s = n - (a || n);
                i.diff = s,
                i.prev = a,
                i.curr = n,
                a = n,
                null == i.useColors && (i.useColors = t.useColors()),
                null == i.color && i.useColors && (i.color = e());
                var o = Array.prototype.slice.call(arguments);
                o[0] = t.coerce(o[0]),
                "string" != typeof o[0] && (o = ["%o"].concat(o));
                var u = 0;
                o[0] = o[0].replace(/%([a-z%])/g, function(e, n) {
                    if ("%%" === e)
                        return e;
                    u++;
                    var r = t.formatters[n];
                    if ("function" == typeof r) {
                        var s = o[u];
                        e = r.call(i, s),
                        o.splice(u, 1),
                        u--
                    }
                    return e
                }),
                "function" == typeof t.formatArgs && (o = t.formatArgs.apply(i, o));
                var c = r.log || t.log || console.log.bind(console);
                c.apply(i, o)
            }
            n.enabled = !1,
            r.enabled = !0;
            var s = t.enabled(i) ? r : n;
            return s.namespace = i,
            s
        }
        function n(e) {
            t.save(e);
            for (var i = (e || "").split(/[\s,]+/), n = i.length, r = 0; n > r; r++)
                i[r] && (e = i[r].replace(/\*/g, ".*?"),
                "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
        }
        function r() {
            t.enable("")
        }
        function s(e) {
            var i, n;
            for (i = 0,
            n = t.skips.length; n > i; i++)
                if (t.skips[i].test(e))
                    return !1;
            for (i = 0,
            n = t.names.length; n > i; i++)
                if (t.names[i].test(e))
                    return !0;
            return !1
        }
        function o(t) {
            return t instanceof Error ? t.stack || t.message : t
        }
        t = t = i,
        t.coerce = o,
        t.disable = r,
        t.enable = n,
        t.enabled = s,
        t.humanize = ms_062_index,
        t.names = [],
        t.skips = [],
        t.formatters = {};
        var a, u = 0;
        return t
    }({}),
    json_002_index = function(t) {
        return t = "undefined" == typeof JSON ? json_fallback_100_index : JSON
    }(),
    security_password_222_lib_input = function(t) {
        function e(t) {
            this.options = n.extend({}, this.options, t),
            this._readylist = []
        }
        function i(t, e, i) {
            if (!t)
                return "";
            if (!e)
                return t;
            if ("string" != typeof t)
                throw "invalid template";
            return t.replace(new RegExp("{\\w+}","gmi"), function(t) {
                var n = t.substr(1, t.length - 2)
                  , r = e[n];
                return null != r ? r.toString() : i ? "{" + n + "}" : ""
            })
        }
        var n = window.jQuery
          , r = security_password_222_lib_six_digit_password;
        return e.prototype = {
            ready: !1,
            rendered: !1,
            element: null,
            _readylist: null,
            options: {},
            show: function() {
                this.element && (this.element.style.display = "")
            },
            hide: function() {
                this.element && (this.element.style.display = "none")
            },
            getPassword: function() {
                return this.element.value
            },
            onready: function(t) {
                this.ready ? t.call(this) : this._readylist.push(t)
            },
            render: function(t, e) {
                if (this.rendered)
                    throw new Error("Cannot call Input render method twice");
                this.rendered = !0,
                this.options.initHidden = e;
                var i = this
                  , s = this._readylist;
                t && s.push(t),
                n(function() {
                    var t = i.options.container;
                    if ("string" == typeof t && (t = document.getElementById(t)),
                    t || (t = document.body),
                    t.childNodes.length) {
                        var n = document.createElement("span");
                        if (n.innerHTML = i.getRenderHtml(),
                        t.appendChild(n),
                        i.options.useSixDigitPassword) {
                            var s = new r("#" + i.options.id).render();
                            1 == i.options.tabindex && s.focus()
                        }
                        e && (n.firstChild.style.display = "none")
                    } else {
                        if (t.innerHTML = i.getRenderHtml(),
                        i.options.useSixDigitPassword) {
                            var s = new r("#" + i.options.id).render();
                            1 == i.options.tabindex && s.focus()
                        }
                        e && (t.firstChild.style.display = "none")
                    }
                    i.checkReady()
                })
            },
            checkReady: function() {
                var t;
                if (!(t = document.getElementById(this.options.id)))
                    throw new Error("Input render error.");
                this.element = t,
                this.wakeReadyList()
            },
            wakeReadyList: function() {
                this.ready = !0;
                for (var t = this._readylist; t.length; )
                    t.shift().call(this)
            },
            getRenderHtml: function() {
                return i(this.template, this.options)
            },
            destroy: function() {
                this.element.parentNode.removeChild(this.element),
                this.element = null,
                this.ready = !1,
                this.rendered = !1
            }
        },
        t = e
    }(),
    debug_211_browser = function(t) {
        function e() {
            return "WebkitAppearance"in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
        }
        function i() {
            var e = arguments
              , i = this.useColors;
            if (e[0] = (i ? "%c" : "") + this.namespace + (i ? " %c" : " ") + e[0] + (i ? "%c " : " ") + "+" + t.humanize(this.diff),
            !i)
                return e;
            var n = "color: " + this.color;
            e = [e[0], n, "color: inherit"].concat(Array.prototype.slice.call(e, 1));
            var r = 0
              , s = 0;
            return e[0].replace(/%[a-z%]/g, function(t) {
                "%%" !== t && (r++,
                "%c" === t && (s = r))
            }),
            e.splice(s, 0, n),
            e
        }
        function n() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }
        function r(t) {
            try {
                null == t ? o.removeItem("debug") : o.debug = t
            } catch (e) {}
        }
        function s() {
            var t;
            try {
                t = o.debug
            } catch (e) {}
            return t
        }
        t = t = debug_211_debug,
        t.log = n,
        t.formatArgs = i,
        t.save = r,
        t.load = s,
        t.useColors = e;
        var o;
        return o = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : window.localStorage,
        t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
        t.formatters.j = function(t) {
            return JSON.stringify(t)
        }
        ,
        t.enable(s()),
        t
    }({}),
    security_client_utils_202_lib_chrome_extension = function(t) {
        function e(t, e) {
            i({
                command: "check_" + t
            }, function(i, r) {
                if (i)
                    return e(i);
                if (r.existence)
                    n("\u68c0\u6d4b\u5230\u5ba2\u6237\u7aefhost\u5e94\u7528\uff0ctype: " + t),
                    e(null);
                else {
                    var s = "\u672a\u68c0\u6d4b\u5230\u5ba2\u6237\u7aefhost\u5e94\u7528\uff0ctype: " + t;
                    n(s),
                    e({
                        code: -5,
                        message: "\u672a\u68c0\u6d4b\u5230\u5ba2\u6237\u7aefhost\u5e94\u7528"
                    })
                }
            })
        }
        function i(t, e) {
            try {
                chrome.runtime.sendMessage(c.id, t, function(i) {
                    if ("object" == typeof i)
                        n("\u8c03\u7528sendMessage\u65b9\u6cd5\u6210\u529f\uff0c\u6307\u4ee4\u4e3a: ", t, "\u8fd4\u56de\u4fe1\u606f\u4e3a\uff1a", i),
                        e(null, i);
                    else {
                        var r = "\u8c03\u7528sendMessage\u65b9\u6cd5\u8fd4\u56de\u4fe1\u606f\u4e0d\u662fobject\u7c7b\u578b\uff0c\u8bf4\u660e\u672a\u5b89\u88c5extension";
                        n(r),
                        e({
                            code: -3,
                            message: r
                        })
                    }
                })
            } catch (i) {
                var r = "\u8c03\u7528sendMessage\u65b9\u6cd5\u629b\u51fa\u5f02\u5e38: " + i.message;
                n(r),
                e({
                    code: -4,
                    message: r
                })
            }
        }
        var n = debug_211_browser("security-client-utils:ChromeExtension")
          , r = security_client_utils_202_lib_utils
          , s = r.parseQuery
          , o = r.encodeCmdStr
          , a = !!(document.domain.indexOf("alipay.com") > -1)
          , u = a ? "lapoiohkeidniicbalnfmakkbnpejgbi" : "egfmbejabpddgnickdlmfabfdjbbgbpp";
        n("\u9ed8\u8ba4\u4f7f\u7528" + (a ? "\u7ebf\u4e0a" : "\u7ebf\u4e0b") + "\u7248\u672cextension, id\u4e3a\uff1a" + u);
        var c = {
            id: u,
            setID: function(t) {
                return t && (this.id = t),
                n("\u66f4\u6362extension id\u4e3a\uff1a" + t),
                this
            },
            checkExtension: function(t) {
                var e = "object" == typeof chrome;
                if (!e) {
                    var r = "\u4e0d\u662fchrome\u6d4f\u89c8\u5668\uff0c\u4e0d\u652f\u6301ChromeExtension";
                    return n(r),
                    t({
                        code: -1,
                        message: r
                    })
                }
                var s = "object" == typeof chrome.runtime && "function" == typeof chrome.runtime.sendMessage;
                if (!s) {
                    var r = "\u652f\u4ed8\u5b9d\u5b89\u5168extension\u672a\u5b89\u88c5\uff0csendMessage\u65b9\u6cd5\u4e0d\u5b58\u5728";
                    return n(r),
                    t({
                        code: -2,
                        message: r
                    })
                }
                i({
                    command: "check_aliedit"
                }, function(e) {
                    return e ? t(e) : (n("\u68c0\u6d4b\u5230\u652f\u4ed8\u5b9dExtension\u5df2\u5b89\u88c5"),
                    void t(null))
                })
            },
            checkEdit: function(t) {
                this.checkExtension(function(i) {
                    return i ? t(i) : void e("aliedit", t)
                })
            },
            checkCert: function(t) {
                this.checkExtension(function(i) {
                    return i ? t(i) : void e("alicert", t)
                })
            },
            getCi1: function(t) {
                this.checkEdit(function(e) {
                    return e ? t(e) : void i({
                        command: "mac"
                    }, function(e, i) {
                        return e ? t(e) : void t(null, i.mac || "")
                    })
                })
            },
            getCi2: function(t) {
                t(null, "")
            },
            getSuiteVersion: function(t) {
                this.checkEdit(function(e) {
                    return e ? t(e) : void i({
                        command: "version"
                    }, function(e, i) {
                        return e ? t(e) : void t(null, i.version || "")
                    })
                })
            },
            getNetInfo: function(t) {
                t(null, "")
            },
            getUmid: function(t) {
                this.checkEdit(function(e) {
                    return e ? t(e) : void i({
                        command: "umid"
                    }, function(e, i) {
                        return e ? t(e) : void t(null, i.umid || "")
                    })
                })
            },
            execCertCmd: function(t, e) {
                this.checkCert(function(r) {
                    if (r)
                        return e(r);
                    if (!t)
                        return e({
                            code: -6,
                            message: "\u8bc1\u4e66\u6307\u4ee4\u4e3a\u7a7a"
                        });
                    var a = s(t)
                      , u = a.service;
                    return u ? (n('\u5f00\u59cb\u6267\u884c\u8bc1\u4e66\u6307\u4ee4"' + u + '"\uff0c\u8be6\u7ec6\u6307\u4ee4\u4e3a\uff1a' + t),
                    void i({
                        command: "cert",
                        input: o(t)
                    }, function(t, i) {
                        if (t)
                            return e(t);
                        var r = i.cert;
                        n('\u8bc1\u4e66\u6307\u4ee4"' + u + '"\u6267\u884c\u7ed3\u675f\uff0c\u8fd4\u56de\u539f\u59cb\u4fe1\u606f\u4e3a\uff1a' + i.cert);
                        var o = s(r);
                        o.rawData = r,
                        "0" === o.status ? (n("\u8bc1\u4e66\u6307\u4ee4\u6267\u884c\u6210\u529f"),
                        e(null, o)) : (n("\u6267\u884c\u6307\u4ee4\u5931\u8d25\uff0c\u8fd4\u56de\u9519\u8bef\u7801\u662f\uff1a" + o.status + "\uff0c\u9519\u8bef\u4fe1\u606f\u4e3a\uff1a" + o.msg),
                        e({
                            code: o.status,
                            message: o.msg
                        }))
                    })) : e({
                        code: -7,
                        message: "\u8bc1\u4e66\u6307\u4ee4\u53c2\u6570\u4e0d\u5408\u6cd5"
                    })
                })
            },
            install: function(t, e, i) {
                var n = this.url + this.id;
                try {
                    this.addWebStoreLink(),
                    window.top.chrome.webstore.install(n, t, e)
                } catch (r) {
                    i(r)
                }
            },
            url: "https://chrome.google.com/webstore/detail/",
            webStoreLinkAdded: !1,
            addWebStoreLink: function() {
                if (!this.webStoreLinkAdded) {
                    var t = window.top.document
                      , e = t.createElement("link");
                    e.setAttribute("rel", "chrome-webstore-item"),
                    e.setAttribute("href", this.url + this.id),
                    t.getElementsByTagName("head")[0].appendChild(e),
                    this.webStoreLinkAdded = !0
                }
            }
        };
        return t = c
    }(),
    security_client_utils_202_lib_websocket = function(t) {
        function e() {}
        function i(t, i, n, r) {
            r = r || function() {}
            ,
            e.check(function(e) {
                if (e)
                    return r(e);
                if (f[t])
                    return r(null, f[t]);
                var s = "getinfo-" + p++
                  , c = !1;
                d[s] = function(e) {
                    if (c = !0,
                    0 === e.status) {
                        var n = "cert" == i.command ? e : e.value;
                        f[t] = n,
                        a("\u83b7\u53d6\u4fe1\u606f\u6210\u529f\uff1a" + JSON.stringify(e)),
                        r(null, n)
                    } else {
                        var s = "\u83b7\u53d6\u4fe1\u606f\u5931\u8d25\uff1a" + JSON.stringify(e);
                        a(s),
                        r({
                            code: e.status,
                            message: s
                        })
                    }
                }
                ,
                i.token = s,
                a("\u53d1\u9001\uff1a" + JSON.stringify(i)),
                o.send(u.xor(JSON.stringify(i), o.key1)),
                n && setTimeout(function() {
                    c || (d[s] = function() {}
                    ,
                    a("\u83b7\u53d6\u4fe1\u606f\u8d85\u65f6\u5931\u8d25(4s)\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u6ca1\u6709\u8fd4\u56de\u3001\u8fd4\u56de\u8d85\u65f6\u6216\u8005\u8fd4\u56de\u4fe1\u606f\u4e2d\u6ca1\u6709token"),
                    c = !0,
                    r(!1))
                }, n)
            })
        }
        function n(t, e) {
            function i(t, i) {
                n || (i && !t && a("\u8fde\u63a5websocket server\u8d85\u65f6\u5931\u8d25\uff0c\u65f6\u95f4\uff1a" + o + "ms"),
                e(t)),
                n = !0
            }
            a("\u5c1d\u8bd5\u7aef\u53e3\u53f7\uff1a[" + t.join(", ") + "]...");
            var n = !1
              , o = 5e3;
            setTimeout(function() {
                i(null, !0)
            }, o);
            var c = 0;
            r(t, function(t, e, n) {
                setTimeout(function() {
                    function t(t) {
                        t._hasBeenMarkedAsFailed || (a("\u8fde\u63a5" + e + "\u7aef\u53e3\u5931\u8d25"),
                        t._hasBeenMarkedAsFailed = !0,
                        c++,
                        c == n.length && (a("\u8fde\u63a5\u6240\u6709\u7aef\u53e3\u5931\u8d25\uff0c\u7aef\u53e3\u53f7\u4e3a\uff1a" + n.join(", ")),
                        i(null)))
                    }
                    var r;
                    try {
                        r = new WebSocket("wss://127.0.0.1:" + e + "/ef2ca22475eb251a71d9f7118a1e4678")
                    } catch (o) {
                        a("new websocket\u629b\u51fa\u5f02\u5e38\uff1a" + o.message),
                        r = r || {},
                        t(r)
                    }
                    r.onopen = function() {
                        r.port = e,
                        s(r, function(e) {
                            e ? i(r) : t(r)
                        })
                    }
                    ,
                    r.onmessage = function(e) {
                        var i = r.key2 ? u.xor(e.data, r.key2) : e.data
                          , n = h(i || "");
                        if (n.rawData = i,
                        n.token) {
                            "undefined" != typeof n.status && (n.status = parseInt(n.status, 10)),
                            r.key2 && n.value && (n.value = u.Base64.decode(n.value));
                            var s = d[n.token] || function() {}
                            ;
                            s(n),
                            delete d[n.token]
                        } else
                            a("\u8fd4\u56de\u4fe1\u606f\u6ca1\u6709token\u5b57\u6bb5\uff1a" + i),
                            t(r)
                    }
                    ,
                    r.onclose = r.onerror = function() {
                        t(r)
                    }
                }, 0)
            })
        }
        function r(t, e) {
            for (var i = 0, n = t.length; n > i; i++)
                e(i, t[i], t)
        }
        function s(t, e) {
            var i = u.Base64
              , n = "hs-" + p++
              , r = !1;
            d[n] = function(n) {
                if (r = !0,
                0 === n.status) {
                    var s = n.value
                      , o = s.split("|")
                      , u = i.decode(i.decode(o[0]))
                      , c = i.decode(o[1]);
                    u == t.key1 ? (t.key2 = c,
                    a("\u63e1\u624b\u6210\u529f"),
                    e(!0)) : (a("\u8fde\u63a5\u6210\u529f\uff0c\u4f46\u662f\u7531\u4e8ekey1\u4e0d\u5339\u914d\uff0c\u63e1\u624b\u4e0d\u6210\u529f"),
                    e(!1))
                } else
                    a("\u63e1\u624b\u5931\u8d25\uff0cstatus\u4e0d\u4e3a0"),
                    e(!1)
            }
            ,
            t.key1 = (new Date).getTime() + "-alipay-hs";
            var s = {
                command: "hs",
                key: i.encode(t.key1),
                token: n
            };
            t.send(JSON.stringify(s)),
            setTimeout(function() {
                r || (d[n] = function() {}
                ,
                a("\u63e1\u624b\u8d85\u65f6\u5931\u8d25(4s)\uff0c\u53ef\u80fd\u539f\u56e0\u662f\u8d85\u65f6\u6216\u8fd4\u56de\u4fe1\u606f\u6ca1\u6709token"),
                r = !0,
                e(!1))
            }, 4e3)
        }
        var o, a = debug_211_browser("security-client-utils:WebSocket"), u = security_crypto_200_index, c = security_client_utils_202_lib_utils, h = c.parseQuery, l = c.encodeCmdStr, f = {}, d = {}, p = 0, g = ["27382", "45242"], y = !1, m = [];
        return e.check = function(t, e) {
            if ("function" == typeof t && (e = t,
            t = g),
            g = t,
            e = e || function() {}
            ,
            o)
                return e(null, o.port);
            if (!window.WebSocket) {
                var i = "\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301WebSocket\uff0c\u6216\u8005x-ua-compatible header\u88ab\u8bbe\u7f6e\u6210\u4f4e\u7248\u672c\u6d4f\u89c8\u5668\uff0cua\u4e3a\uff1a" + navigator.userAgent;
                return e({
                    code: -1,
                    message: i
                })
            }
            m.push(e),
            y || (y = !0,
            n(t, function(t) {
                if (y = !1,
                t)
                    for (o = t; m.length > 0; )
                        m.shift().call(null, null, o.port);
                else
                    for (; m.length > 0; )
                        m.shift().call(null, {
                            code: -2,
                            message: "\u8fde\u63a5websocket server\u5931\u8d25"
                        })
            }))
        }
        ,
        e.getCi1 = function(t) {
            i("mac", {
                command: "mac"
            }, 4e3, t)
        }
        ,
        e.getCi2 = function(t) {
            i("ipproxy", {
                command: "ipproxy"
            }, 4e3, t)
        }
        ,
        e.getSuiteVersion = function(t) {
            i("version", {
                command: "suite_version"
            }, 4e3, t)
        }
        ,
        e.getNetInfo = function(t) {
            i("lbs", {
                command: "lbs"
            }, 4e3, t)
        }
        ,
        e.getUmid = function(t) {
            i("umid", {
                command: "umid"
            }, 4e3, t)
        }
        ,
        e.execCertCmd = function(t, e) {
            var n = h(t)
              , r = n.service;
            a('\u6307\u4ee4"' + r + '"\uff0c\u8be6\u7ec6\u6307\u4ee4\u4e3a: ' + t),
            i("cert: " + t, {
                command: "cert",
                param: l(t)
            }, 0, e)
        }
        ,
        t = e
    }(),
    security_snowden_200_src_snowden = function(t) {
        function e(t, i) {
            if ("object" == typeof i && "object" == typeof t) {
                var n;
                for (var r in i)
                    n = i[r],
                    "object" != typeof n || n instanceof Array ? t[r] = i[r] : (("object" != typeof t[r] || t[r]instanceof Array) && (t[r] = {}),
                    e(t[r], i[r]))
            }
        }
        var i = debug_211_browser("security-snowden")
          , n = security_crypto_200_index.Base64
          , r = {}
          , s = json_002_index
          , o = {
            url: "https://seccliprod.alipay.com/api/do.htm",
            silent: !1
        }
          , a = {}
          , u = null;
        return r.config = function(t) {
            e(o, t)
        }
        ,
        r.record = function(t, n) {
            if ("object" != typeof n || !t)
                return i(".record\u65b9\u6cd5\u4f20\u5165\u53c2\u6570\u6709\u8bef\uff1a[" + t + ", " + n + "]");
            var s = a[t] = a[t] || {};
            e(s, n),
            s.id = t,
            null === u && (u = setTimeout(function() {
                u = null,
                r.report()
            }, o.delay || 2e3))
        }
        ,
        r.report = function() {
            if (o.silent)
                return i("silent\u4e3atrue\uff0c\u4e0d\u53d1\u9001\u8bf7\u6c42");
            for (var t in a) {
                var e = a[t]
                  , r = s.stringify(e);
                delete a[t],
                i("\u53d1\u9001\u6570\u636e\uff1a" + r);
                var c = new Image;
                c.src = o.url + "?serviceId=webmlog&data=" + n.encode(r),
                c.onload = function() {
                    c = c.onload = null
                }
            }
            null !== u && (clearTimeout(u),
            u = null)
        }
        ,
        t = r
    }(),
    security_client_utils_202_lib_cert_control = function(t) {
        function e() {
            var t, e = !1;
            try {
                t = new ActiveXObject("AliCertDO.AliCertDOCtrl"),
                e = !!t,
                t = null,
                h = !0
            } catch (i) {
                e = !(!navigator.plugins || !navigator.plugins["npalicdo plugin"])
            } finally {
                t = null
            }
            return s(e ? "\u68c0\u6d4b\u5230\u6570\u5b57\u8bc1\u4e66\u63a7\u4ef6\u5df2\u5b89\u88c5" : "\u672a\u68c0\u6d4b\u5230\u6570\u5b57\u8bc1\u4e66\u63a7\u4ef6"),
            e
        }
        function i() {
            if (!e())
                return null;
            var t = document.createElement("object");
            h ? t.setAttribute("classid", "clsid:08d512d2-7d97-4e22-b7db-82791106c086") : t.setAttribute("type", "application/npalicdo"),
            t.setAttribute("width", 0),
            t.setAttribute("height", 0);
            var i = document.body;
            return i.appendChild(t),
            t
        }
        function n() {
            return h ? !!r : !(!r || !r.Do)
        }
        var r, s = debug_211_browser("security-client-utils:CertControl"), o = security_client_utils_202_lib_utils, a = o.parseQuery, u = o.encodeCmdStr, c = domready_001_index(), h = !1, l = function() {};
        return l.check = function(t) {
            return e() ? void c(function() {
                if (r || (r = i()),
                !n()) {
                    var e = "\u63d2\u4ef6\u5df2\u5b89\u88c5\uff0c\u4f46\u662f\u65b9\u6cd5\u4e0d\u53ef\u7528\uff0c\u5f88\u53ef\u80fd\u662f\u7528\u6237\u672a\u5141\u8bb8\u6267\u884c\uff0c\u6216\u88ab\u6d4f\u89c8\u5668\u9ed8\u8ba4\u62e6\u622a";
                    return s(e),
                    t({
                        code: "-2",
                        message: e
                    })
                }
                t(null)
            }) : t({
                code: "-1",
                message: "\u672a\u5b89\u88c5\u6570\u5b57\u8bc1\u4e66\u63d2\u4ef6\uff0c\u6216\u5df2\u88ab\u7981\u7528"
            })
        }
        ,
        l.execCertCmd = function(t, e) {
            l.check(function(i) {
                if (i)
                    return e(i);
                if (!t)
                    return s("\u6307\u4ee4\u4e3a\u7a7a"),
                    e({
                        code: -3,
                        message: "\u6307\u4ee4\u4e3a\u7a7a"
                    });
                var n = a(t)
                  , o = n.service;
                if (!o)
                    return s("\u6307\u4ee4\u683c\u5f0f\u9519\u8bef\uff0c\u6ca1\u6709service\u5b57\u6bb5"),
                    e({
                        code: -4,
                        message: "\u6307\u4ee4\u53c2\u6570\u4e0d\u6b63\u786e"
                    });
                s('\u5f00\u59cb\u6267\u884c\u6307\u4ee4"' + o + '"\uff0c\u8be6\u7ec6\u6307\u4ee4\u4e3a: ' + t);
                var c;
                try {
                    c = r.Do(u(t))
                } catch (h) {
                    var l = "Do \u65b9\u6cd5\u629b\u51fa\u5f02\u5e38\uff1a" + h.toString();
                    return s(l),
                    e({
                        code: -4,
                        message: l
                    })
                }
                s('\u6267\u884c\u6307\u4ee4"' + o + '"\u7ed3\u675f\uff0c\u8fd4\u56de\u539f\u59cb\u4fe1\u606f\u4e3a\uff1a' + c);
                var f = a(c);
                f.rawData = c,
                "0" === f.status ? (s("\u6267\u884c\u6307\u4ee4\u6210\u529f"),
                e(null, f)) : (s("\u6267\u884c\u6307\u4ee4\u5931\u8d25\uff0c\u63a7\u4ef6\u8fd4\u56de\u9519\u8bef\u7801\u662f\uff1a" + f.status + "\uff0c\u9519\u8bef\u4fe1\u606f\u4e3a\uff1a" + f.msg),
                e({
                    code: f.status,
                    message: f.msg
                }))
            })
        }
        ,
        t = l
    }(),
    security_client_utils_202_index = function(t) {
        return t = {
            CertControl: security_client_utils_202_lib_cert_control,
            ChromeExtension: security_client_utils_202_lib_chrome_extension,
            Edit: security_client_utils_202_lib_edit.Edit,
            Npedit: security_client_utils_202_lib_edit.Npedit,
            WebSocket: security_client_utils_202_lib_websocket,
            KeySequence: security_client_utils_202_lib_keysequence,
            ua: security_client_utils_202_lib_ua,
            Ihealthy: security_client_utils_202_lib_ihealthy
        }
    }(),
    security_password_222_lib_control_input = function(t) {
        function e() {
            e.superclass.apply(this, arguments)
        }
        function i() {
            i.superclass.apply(this, arguments)
        }
        function n() {
            n.superclass.apply(this, arguments)
        }
        var r = security_client_utils_202_index
          , s = security_crypto_200_index
          , o = security_password_222_lib_utils
          , a = security_password_222_lib_input
          , u = r.ua;
        return o.Inherit(a, e, {
            checkReady: function() {
                function t() {
                    var i = document.getElementById(e.options.id);
                    i && "undefined" != typeof i[e.defaultMethod] ? (e.element = i,
                    e.wakeReadyList()) : setTimeout(t, 50)
                }
                var e = this;
                t()
            }
        }),
        o.Inherit(e, i, {
            template: u.engine.trident ? '<object id="{id}" classid="clsid:{classId}" width="{width}" height="{height}" tabindex="{tabindex}"><param name="wmode" value="opaque" /><param name="cm5ts" value="{timestamp}" /><param name="cm5pk" value="{pk}" /><param name="PasswordMode" value="{passwordMode}" /><param name="CryptoMode" value="4" /></object>' : '<object id="{id}" name="{name}" type="{type}" width="{width}" height="{height}" tabindex="{tabindex}"><param name="PasswordMode" value="{passwordMode}" /></object>',
            defaultMethod: "TextData",
            options: {
                tabindex: 1,
                width: 180,
                height: 24,
                passwordmode: 0,
                classId: "488A4255-3236-44B3-8F27-FA1AECAA8844",
                type: "application/aliedit",
                version: "2.4.0.1"
            },
            getPassword: function() {
                if (!this.ready)
                    return "";
                var t = this.element.TextData;
                return /3DES_2_0{30}_/.test(t) ? t : ""
            }
        }),
        o.Inherit(e, n, {
            template: u.engine.trident ? '<object id="{id}" name="{name}" classid="clsid:{classId}" width="{width}" height="{height}" tabindex="{tabindex}"><param name="prop" value="{prop}"></object>' : '<object id="{id}" name="{name}" type="{type}" width="{width}" height="{height}" prop="{prop}" tabindex="{tabindex}" handler="{handler}"></object>',
            defaultMethod: "GetMiscInfo",
            options: {
                tabindex: 1,
                width: 180,
                height: 24,
                classId: "8EB7C6CB-2DA6-4ABE-B2EA-EAC5A372E757",
                type: "application/x-alisecctrl-plugin",
                version: "2.4.0.1"
            },
            getPassword: function() {
                return this.ready && this.element.GetMiscInfo("3", 0) ? this.element.GetEnInfo("Default", 0) : ""
            },
            getKeySeq: function() {
                if (this.options.useKS && this.ready) {
                    var t = this.element.GetMiscInfo("6", 0);
                    return t = "string" == typeof t && t.length > 0 ? s.Base64.encode(alipay.security.utils.keyseq.ksk(this.options.ksk, t)) : ""
                }
                return null
            }
        }),
        t.EditInput = i,
        t.NpeditInput = n,
        t
    }({}),
    security_sensor_203_index = function(t) {
        function e(t, e) {
            i("\u53ef\u9009\u7b56\u7565: " + t.join(",")),
            this._detectList = [],
            this._collectList = [];
            var r = security_client_utils_202_index;
            this.policy2handler = {
                C1: r.Edit,
                C2: r.Npedit,
                W: r.WebSocket,
                E: r.ChromeExtension
            },
            this.policies = t.slice(),
            e.websocketPorts && (e.websocketPorts = e.websocketPorts.split(",")),
            n(this.options, e)
        }
        var i = debug_211_browser("security-sensor:index")
          , n = extend_100_index
          , r = window.jQuery;
        return e.prototype = {
            constructor: e,
            _status: 0,
            _detectList: null,
            _collectList: null,
            collecting: !1,
            infoResults: null,
            availablePolicy: null,
            policy2handler: null,
            policies: null,
            options: {
                controlCheckTimeout: 5e3
            },
            detect: function(t) {
                function e() {
                    var t = r.shift();
                    s.check(t, function(e) {
                        e ? i() : (clearTimeout(n),
                        s.detectComplete(null, t))
                    })
                }
                function i() {
                    r.length > 0 ? e() : o || (clearTimeout(n),
                    s.detectComplete({
                        code: -1,
                        message: "\u6ca1\u6709\u53ef\u7528\u7b56\u7565"
                    }))
                }
                switch (t && this._detectList.push(t),
                this._status) {
                case 0:
                    break;
                case 1:
                    return;
                case 2:
                    this.wakeDetectList(this.availablePolicy);
                default:
                    return
                }
                var n, r = this.policies.slice(), s = this, o = !1;
                n = setTimeout(function() {
                    o = !0,
                    s.detectComplete({
                        code: -2,
                        message: "\u68c0\u6d4b\u7b56\u7565\u8d85\u65f6"
                    })
                }, Number(this.options.controlCheckTimeout)),
                i()
            },
            detectComplete: function(t, e) {
                t ? i("\u6ca1\u6709\u68c0\u6d4b\u5230\u53ef\u7528\u7b56\u7565\uff0c\u62a5\u9519\u4fe1\u606f: " + t.message) : (i("\u53ef\u7528\u7684\u83b7\u53d6\u4fe1\u606f\u7b56\u7565\u662f: " + e),
                this.availablePolicy = e),
                this.wakeDetectList(t, e),
                this._status = 2
            },
            collectInfo: function(t) {
                if (this.infoResults)
                    return void (t && t(null, this.infoResults));
                if (!this.availablePolicy)
                    return t && t({
                        code: "-1",
                        message: "\u6ca1\u6709\u53ef\u7528\u7684\u83b7\u53d6\u4fe1\u606f\u7b56\u7565"
                    }),
                    void i("\u83b7\u53d6\u4fe1\u606f\u5931\u8d25\uff1a \u6ca1\u6709\u53ef\u7528\u7684\u83b7\u53d6\u4fe1\u606f\u7684\u7b56\u7565");
                if (i("\u5f00\u59cb\u6536\u96c6\u4fe1\u606f..."),
                t && this._collectList.push(t),
                !this.collecting) {
                    this.collecting = !0;
                    for (var e = ["Version", "Ci1", "Ci2", "NetInfo"], n = e.length, r = {}, s = this, o = 0, a = n; a > o; o++)
                        this["get" + e[o]](function(t) {
                            return function(e, i) {
                                r[t] = e ? "" : i,
                                0 === --n && (s.collecting = !1,
                                s.wakeCollectList(s.infoResults = r))
                            }
                        }(e[o].toLowerCase()))
                }
            },
            onCollectComplete: function(t) {
                return "function" != typeof t ? void i("onCollectComplete\uff1a\u4f20\u5165\u7684callback\u4e0d\u662f\u51fd\u6570") : void (this.infoResults ? t(null, this.infoResults) : this._collectList.push(t))
            },
            wakeCollectList: function(t) {
                i("\u83b7\u53d6\u4fe1\u606f\u5b8c\u6210.");
                for (var e = this._collectList; e.length; )
                    e.shift().call(this, null, t)
            },
            wakeDetectList: function(t, e) {
                for (var i = this._detectList; i.length; )
                    i.shift().call(this, t, e)
            },
            check: function(t, e) {
                switch (t) {
                case "C1":
                    this.policy2handler.C1.check(e);
                    break;
                case "C2":
                    this.policy2handler.C2.check(e);
                    break;
                case "W":
                    this.options.websocketPorts ? this.policy2handler.W.check(this.options.websocketPorts, e) : this.policy2handler.W.check(e);
                    break;
                case "E":
                    this.policy2handler.E.checkEdit(e);
                    break;
                default:
                    e({
                        code: -1,
                        message: "\u7b56\u7565\u975e\u6cd5: " + t
                    }),
                    i("\u7b56\u7565\u975e\u6cd5: " + t)
                }
            },
            getVersion: function(t) {
                var e = this.policy2handler[this.availablePolicy];
                if (!e)
                    return t({
                        code: -1,
                        message: "No handler."
                    });
                switch (this.availablePolicy) {
                case "C1":
                case "C2":
                    e.getVersion(function(e, n) {
                        i(e ? "\u83b7\u53d6\u7248\u672c\u53f7\u5931\u8d25: " + e.message : "\u83b7\u53d6\u7248\u672c\u53f7\u6210\u529f: " + n),
                        t(e, n)
                    });
                    break;
                case "W":
                case "E":
                    e.getSuiteVersion(function(e, n) {
                        i(e ? "\u83b7\u53d6\u7248\u672c\u53f7\u5931\u8d25: " + e.message : "\u83b7\u53d6\u7248\u672c\u53f7\u6210\u529f: " + n),
                        t(e, n)
                    });
                    break;
                default:
                    i("\u975e\u6cd5\u7b56\u7565: " + this.availablePolicy),
                    t({
                        code: -2,
                        message: "\u975e\u6cd5\u7b56\u7565: " + this.availablePolicy
                    })
                }
            },
            getCi1: function(t) {
                this.get("Ci1", function(e, n) {
                    i(e ? "\u83b7\u53d6ci1\u5931\u8d25: " + e.message : "\u83b7\u53d6ci1\u6210\u529f: " + n),
                    t(e, n)
                })
            },
            getCi2: function(t) {
                this.get("Ci2", function(e, n) {
                    i(e ? "\u83b7\u53d6ci2\u5931\u8d25: " + e.message : "\u83b7\u53d6ci2\u6210\u529f: " + n),
                    t(e, n)
                })
            },
            getNetInfo: function(t) {
                this.get("NetInfo", function(e, n) {
                    e || "string" != typeof n || (n = r.trim(n)),
                    i(e ? "\u83b7\u53d6netinfo\u5931\u8d25: " + e.message : "\u83b7\u53d6netinfo\u6210\u529f: " + n),
                    t(e, n)
                })
            },
            get: function(t, e) {
                var i;
                if (i = this.availablePolicy) {
                    var n = "get" + t
                      , r = this.policy2handler[i];
                    r && "function" == typeof r[n] ? r[n](e) : e({
                        code: -2,
                        message: "The policy: " + i + " doesn't implements " + n + " method."
                    })
                } else
                    e({
                        code: -1,
                        message: "No available policy."
                    })
            }
        },
        t = e
    }(),
    security_cert_200_index = function(t) {
        function e(t, n, a, u) {
            var c = t[n];
            if (!c) {
                var h = t.join(" ") + "\u7b56\u7565\u90fd\u4e0d\u53ef\u7528";
                return r(h),
                s.record(i, {
                    cert_browserPolicy: -1
                }),
                u({
                    code: -1,
                    message: h
                })
            }
            var l = o[c]
              , f = function(i) {
                i ? (r("\u68c0\u6d4b\u7b56\u7565" + c + "\u5931\u8d25: " + i.message),
                e(t, n + 1, a, u)) : (r("\u68c0\u6d4b\u7b56\u7565" + c + "\u6210\u529f"),
                u(null, c, l))
            };
            "W" === c ? l.check(a, f) : "E" === c ? l.checkCert(f) : l.check(f)
        }
        var i, n = security_client_utils_202_index, r = debug_211_browser("security-cert"), s = security_snowden_200_src_snowden, o = {
            E: n.ChromeExtension,
            C: n.CertControl,
            W: n.WebSocket
        }, a = function(t) {
            this._policies = t.dataAccessPolicy ? t.dataAccessPolicy.split(",") : ["C", "E", "W"],
            this._websocketPorts = t.websocketPorts ? t.websocketPorts.split(",") : ["13748", "15428", "27382", "36874", "45242"],
            this._timeout = Number(t.timeout) || 5e3,
            r("\u521d\u59cb\u5316\uff0c\u53ef\u9009\u7b56\u7565\uff1a" + this._policies.join(", ") + "\uff0cwebsocketPorts: " + this._websocketPorts + "\uff0c\u8d85\u65f6\u65f6\u95f4\uff1a" + this._timeout),
            i = t.sid,
            s.record(t.sid, {
                cert_policy: t.dataAccessPolicy,
                cert_websocketPorts: t.websocketPorts
            })
        };
        return a.prototype.detect = function(t) {
            function n(e, i) {
                o || (o = !0,
                t(e, i))
            }
            if (this._clientUtil)
                return t(null, this._policy);
            {
                var o = !1;
                (new Date).getTime()
            }
            setTimeout(function() {
                o || (r("\u603b\u4f53\u68c0\u6d4b\u8d85\u65f6"),
                s.record(i, {
                    cert_timeout: 1
                }),
                n({
                    code: -2,
                    message: "\u68c0\u6d4b\u8d85\u65f6"
                }))
            }, this._timeout);
            var a = this;
            e(this._policies, 0, this._websocketPorts, function(t, e, o) {
                return t ? n(t) : (a._policy = e,
                a._clientUtil = o,
                r("\u68c0\u6d4b\u6210\u529f\uff0c\u4f7f\u7528" + a._policy + "\u7b56\u7565"),
                n(null, e),
                void s.record(i, {
                    cert_browserPolicy: e
                }))
            })
        }
        ,
        a.prototype.execute = function(t, e) {
            var n = this;
            this.detect(function(r) {
                if (r) {
                    var o = {};
                    return o["cert_" + r] = 1,
                    s.record(i, o),
                    e(r)
                }
                n._clientUtil.execCertCmd(t, e)
            })
        }
        ,
        t = a
    }(),
    security_password_222_lib_rsa_input = function(t) {
        function e() {
            e.superclass.apply(this, arguments),
            this.onready(function() {
                this.options.useKS && this.startRecordKS(),
                n(".ui-securitycore .ui-form-item-error .alieditContainer", "border:none");
                var t;
                (t = navigator.userAgent.match(/msie (\d+)/i)) && !this.options.initHidden && parseInt(t[1]) <= 6 && (this.element.style.display = "block")
            })
        }
        var i = security_password_222_lib_utils.Inherit
          , n = security_password_222_lib_utils.addRule
          , r = security_password_222_lib_input
          , s = security_crypto_200_index
          , o = security_client_utils_202_index.KeySequence;
        return i(r, e, {
            template: '<input type="password" tabindex="{tabindex}" id="{id}" name="{id}" class="ui-input i-text" oncontextmenu="return false" onpaste="return false" oncopy="return false" oncut="return false" autocomplete="off" value="" />',
            options: {},
            getPassword: function() {
                if (this.passwordCache)
                    return this.passwordCache;
                var t = this.element.value;
                if (!t)
                    return "";
                this.element.value = "";
                var e = new s.RSA
                  , i = s.Base64.decode(this.options.TS);
                e.setPublicKey(this.options.PK);
                for (var n = "", r = 5, o = 0; r > o && (n = e.alipayEncrypt(2, i, t),
                344 != n.length); o++)
                    ;
                344 != n.length && (n = ""),
                this.passwordCache = n;
                var a = this;
                return setTimeout(function() {
                    a.passwordCache = null
                }, 500),
                n
            },
            startRecordKS: function() {
                o.start(this.options.id)
            },
            getKeySeq: function() {
                if (this.options.useKS) {
                    var t = '{"type":"js", "in":"' + o.get(this.options.id) + '"}';
                    return s.Base64.encode(o.ksk(this.options.ksk, t))
                }
                return null
            }
        }),
        t = e
    }(),
    security_password_222_lib_renderer = function(t) {
        function e(t, e) {
            this.policies = t,
            this.options = i.extend({}, this.options, e),
            this.readyList = []
        }
        var i = jQuery
          , n = security_password_222_lib_rsa_input
          , r = security_password_222_lib_control_input.EditInput
          , s = security_password_222_lib_control_input.NpeditInput
          , o = security_client_utils_202_index
          , a = debug_211_browser("security-password:renderer");
        return e.prototype = {
            constructor: e,
            policies: null,
            availablePolicy: null,
            hasMask: !1,
            isMasked: !1,
            maskEl: null,
            ready: !1,
            readyList: null,
            options: {},
            detect: function(t) {
                this.check(this.policies, function(e, i) {
                    e ? t && t(e) : t && t(null, i)
                })
            },
            render: function(t, e, i) {
                switch (a("\u5f00\u59cb\u4f7f\u7528" + (e || this.availablePolicy) + "\u7b56\u7565\u6e32\u67d3..."),
                e || this.availablePolicy) {
                case "R":
                    this.input = new n(this.options.R);
                    break;
                case "C1":
                    this.input = new r(this.options.C1);
                    break;
                case "C2":
                    this.input = new s(this.options.C2);
                    break;
                default:
                    throw new Error("Wrong policy: " + e)
                }
                this.input.render(t, i);
                var o = this;
                this.input.onready(function() {
                    a("\u6e32\u67d3\u5b8c\u6210.");
                    for (var t = o.readyList; t.length; )
                        t.shift().call(o)
                })
            },
            onready: function(t) {
                this.ready ? t.call(this) : this.readyList.push(t)
            },
            getPassword: function() {
                return this.input.getPassword()
            },
            check: function(t, e) {
                function i() {
                    var i = t.shift();
                    r._checkPolicy(i, function(t) {
                        t ? n() : (r.availablePolicy = i,
                        e(null, i))
                    })
                }
                function n() {
                    t.length > 0 ? i() : e({
                        code: -1
                    })
                }
                var r = this;
                n()
            },
            _checkPolicy: function(t, e) {
                switch (t) {
                case "R":
                    e(null);
                    break;
                case "C1":
                    o.Edit.check(e);
                    break;
                case "C2":
                    o.Npedit.check(e);
                    break;
                default:
                    e(!1)
                }
            },
            switch2input: function() {
                this.maskEl.style.display = "none",
                this.input.show(),
                this.isMasked = !1
            },
            switch2mask: function() {
                this.input.hide(),
                this.maskEl.style.display = "",
                this.isMasked = !0
            },
            showMask: function(t, e) {
                a("\u663e\u793a\u5bc6\u7801\u6846\u5b89\u88c5\u6761, \u662f\u5426\u663e\u793aextension\u94fe\u63a5: " + t),
                this.input && (this.input.destroy(),
                this.input = null);
                var n = this.options
                  , r = this.getControlURL(n.downloadServer, n.downloadPath)
                  , s = n.securityCenterServer + "/sc/downloadCtr.htm?downLoadPath=" + n.downloadPath + (e ? "&upgrade=" + e : "") + (t ? "&needExtension=true" : "")
                  , o = this
                  , u = document.getElementById(n.container)
                  , c = document
                  , h = !1
                  , l = !1
                  , f = {}
                  , d = window;
                try {
                    if (window.top.document.body) {
                        c = window.top.document;
                        do
                            f = null != d.frameElement ? d.frameElement : {},
                            (/xbox/i.test(f.name) || /xbox/i.test(f.id)) && (l = !0);
                        while ((d = d.parent) != window.top && !l);var p = "https://a.alipayobjects.com/al/alice.components.security-edit-1.4.css"
                          , g = c.getElementsByTagName("head")[0] || c.documentElement
                          , y = c.createElement("link");
                        y.setAttribute("charset", "utf-8"),
                        y.setAttribute("rel", "stylesheet"),
                        y.setAttribute("href", p),
                        g.appendChild(y)
                    }
                } catch (m) {
                    h = !0
                }
                a("\u5f53\u524d\u5b89\u5168\u73af\u5883\u9875\u9762\u548c\u9876\u7ea7\u9875\u9762\u662f\u5426\u8de8\u57df\uff1a" + h + ", \u662f\u5426\u5728xbox\u4e2d: " + l),
                h || (s += "&_xbox=true&title=false"),
                u.innerHTML = '<a href="' + s + '" target="_blank" class="aliedit-install">\u8bf7\u70b9\u6b64\u5b89\u88c5\u65b0\u63a7\u4ef6</a>',
                this.showInstallDialog = function() {
                    h || l ? r ? t ? window.open(s, "_blank") : location.href = r : alert("\u60a8\u73b0\u5728\u6240\u7528\u7684\u6d4f\u89c8\u5668\uff0c\u6682\u4e0d\u652f\u6301\u5b89\u5168\u63a7\u4ef6\u3002") : new light.dialog({
                        targetFrame: c,
                        iframeSrc: s
                    }).show()
                }
                ,
                i(u.firstChild).on("click", function(t) {
                    t.preventDefault(),
                    o.showInstallDialog()
                }),
                this.hasMask = !0,
                this.isMasked = !0,
                this.maskEl = u.firstChild
            },
            getControlURL: function(t, e) {
                var i = o.ua
                  , n = "/sec/edit/" + ("beta" === e ? "beta/" : "")
                  , r = "";
                return i.os.windows ? r = t + n + "aliedit.exe" : i.os.macos ? r = t + n + "wkaliedit.dmg" : i.os.linux && (i.browser.firefox || i.browser.chrome || i.browser.opera) && (r = t + n + "aliedit.tar.gz"),
                r
            }
        },
        t = e
    }(),
    security_password_222_lib_password = function(t) {
        function e(t, e, a, u, c, h) {
            this._events = {},
            s.extend(this.options, t);
            var l = {
                edit_serverPolicy_render: e,
                edit_serverPolicy_sensor: a,
                edit_serverPolicy_tolerate: u,
                edit_serverPolicy_upgrade: !!t.upgrade,
                edit_serverPolicy_downloadPath: c.downloadPath
            };
            o.record(t.sid, l),
            e = e ? e.split(",") : [],
            a = a ? a.split(",") : [],
            r("\u4f7f\u7528\u7684\u6e32\u67d3\u7b56\u7565: " + e),
            r("\u4f7f\u7528\u7684\u83b7\u53d6\u4fe1\u606f\u7b56\u7565: " + a),
            r("isTolerate: " + u),
            r("\u83b7\u53d6\u4fe1\u606f\u8d85\u65f6\u65f6\u95f4: " + h.controlCheckTimeout);
            var f = this
              , d = this.renderer = new i(e,c)
              , p = this.sensor = new n(a,h);
            this.bindEvents(),
            r("\u5f00\u59cb\u68c0\u6d4b\u73af\u5883---"),
            d.detect(function(e, i) {
                var n = !e;
                n ? (r("\u53ef\u4ee5\u6e32\u67d3\u5bc6\u7801\u6846\uff0c\u7b56\u7565: " + i),
                o.record(t.sid, {
                    edit_browserPolicy_render: i
                }),
                s("#edit_infor").attr("render", i)) : (r("\u6ca1\u6709\u53ef\u7528\u7684\u6e32\u67d3\u7b56\u7565."),
                o.record(t.sid, {
                    edit_browserPolicy_render: "-1"
                })),
                p.detect(function(e, i) {
                    var a = !e;
                    a ? (r("\u53ef\u4ee5\u83b7\u53d6\u4fe1\u606f\uff0c\u7b56\u7565: " + i),
                    o.record(t.sid, {
                        edit_browserPolicy_sensor: i
                    }),
                    s("#edit_infor").attr("sensor", i)) : (r("\u6ca1\u6709\u53ef\u7528\u7684\u83b7\u53d6\u4fe1\u606f\u7b56\u7565."),
                    o.record(t.sid, {
                        edit_browserPolicy_sensor: "-1"
                    })),
                    t.upgrade ? (r("\u8fdb\u5165\u5f3a\u5236\u66f4\u65b0\u903b\u8f91\uff1a" + t.upgrade),
                    a ? p.getVersion(function(e, i) {
                        r("\u83b7\u53d6\u5230\u7684\u7248\u672c\u4fe1\u606f: " + i),
                        e || f.needUpgrade(i) ? (r("\u547d\u4e2d\u4e86\u5f3a\u5236\u66f4\u65b0"),
                        o.record(t.sid, {
                            edit_browserPolicy_hitUpgrade: "hit"
                        }),
                        f.hitUpgrade = !0,
                        n = !1) : o.record(t.sid, {
                            edit_browserPolicy_hitUpgrade: "notHit"
                        }),
                        f.fire("detectcomplete", n, a)
                    }) : (r("\u6ca1\u6709\u53ef\u7528\u7684\u83b7\u53d6\u4fe1\u606f\u7b56\u7565\uff0c\u6240\u4ee5\u76f4\u63a5\u547d\u4e2d\u5f3a\u5236\u66f4\u65b0"),
                    o.record(t.sid, {
                        edit_browserPolicy_hitUpgrade: "hit_noVersion"
                    }),
                    f.hitUpgrade = !0,
                    n = !1,
                    f.fire("detectcomplete", n, a))) : (a || u || (n = !1,
                    r("\u7531\u4e8eisTorate\u662ffalse, \u6240\u4ee5\u5373\u4f7f\u53ef\u4ee5\u6e32\u67d3\uff0c\u4e5f\u8981\u8d34\u6761.")),
                    f.fire("detectcomplete", n, a))
                })
            })
        }
        var i = security_password_222_lib_renderer
          , n = security_sensor_203_index
          , r = debug_211_browser("security-password:password")
          , s = window.jQuery
          , o = security_snowden_200_src_snowden;
        return e.prototype = {
            _type: "Password",
            gettable: null,
            renderable: null,
            ready: !1,
            hitUpgrade: !1,
            options: {},
            onReady: function(t) {
                this.ready ? t && t.call(this) : this.on("ready", t, this)
            },
            bindEvents: function() {
                this.on("detectcomplete", this._onDetectComplete, this),
                this.on("ready", this._onReady, this)
            },
            getPassword: function() {
                return this.renderer.input ? this.renderer.input.getPassword() : ""
            },
            _onReady: function() {
                this.ready = !0
            },
            _onDetectComplete: function(t, e) {
                this.gettable = e,
                this.renderable = t;
                var i = this;
                t ? this.renderer.render(function() {
                    i.fire("ready")
                }) : (i.renderer.showMask("E" === i.sensor.policies[0], i.options.upgrade),
                i.fire("ready"))
            },
            needUpgrade: function(t) {
                var e = this.options.upgrade.split("-")
                  , i = t.split(".")
                  , n = e[0].split(".")
                  , r = e[1].split(".");
                return this.isInRange(i, n, r)
            },
            isInRange: function(t, e, i) {
                for (var n = 0; 4 > n && !(parseInt(t[n]) > parseInt(e[n])); n++)
                    if (parseInt(t[n]) < parseInt(e[n]))
                        return !1;
                for (var n = 0; 4 > n && !(parseInt(t[n]) < parseInt(i[n])); n++)
                    if (parseInt(t[n]) > parseInt(i[n]))
                        return !1;
                return !0
            },
            _events: null,
            on: function(t, e, i) {
                this._on(t, e, i, !1)
            },
            once: function(t, e, i) {
                this._on(t, e, i, !0)
            },
            fire: function(t) {
                var e, i = this._events, n = this._events[t];
                if (n) {
                    for (var r = 0, s = n.length; s > r; r++)
                        e = n[r],
                        e.fn.apply(e.context, Array.prototype.slice.call(arguments, 1)),
                        e.once && (n.splice(r, 1),
                        r--,
                        s--);
                    0 === n.length && delete i[t]
                }
            },
            off: function(t, e) {
                var i = this._events
                  , n = i[t];
                if (n)
                    if (e) {
                        for (var r = 0, s = n.length; s > r; r++)
                            if (n[r].fn === e)
                                return n.splice(r, 1),
                                void (1 === s && delete i[t])
                    } else
                        delete i[t]
            },
            _on: function(t, e, i, n) {
                var r = this._events
                  , s = r[t];
                s || (s = r[t] = []),
                s.push({
                    fn: e,
                    context: i,
                    once: n
                })
            }
        },
        t = e
    }(),
    security_password_222_index = function(t) {
        var e = security_password_222_lib_password;
        return t = e
    }(),
    security_sdk_212_index = function(t) {
        function e() {
            var t = document.domain;
            if (t.indexOf("alipay.net") > -1)
                try {
                    localStorage.setItem("debug", "*")
                } catch (e) {}
        }
        var i = window.alipay = window.alipay || {}
          , n = i.security = i.security || {};
        return e(),
        n.Password = security_password_222_index,
        n.Cert = security_cert_200_index,
        n.debug = debug_211_browser,
        n.snowden = security_snowden_200_src_snowden,
        n.clientUtils = security_client_utils_202_index,
        t = {}
    }()
}();
