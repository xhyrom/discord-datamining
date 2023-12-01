(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["49554"], {
        55942: function(e, t, r) {
            e.exports = {
                RBTree: r("768661"),
                BinTree: r("864297")
            }
        },
        864297: function(e, t, r) {
            var n = r("78798");

            function Node(e) {
                this.data = e, this.left = null, this.right = null
            }

            function i(e) {
                this._root = null, this._comparator = e, this.size = 0
            }
            Node.prototype.get_child = function(e) {
                return e ? this.right : this.left
            }, Node.prototype.set_child = function(e, t) {
                e ? this.right = t : this.left = t
            }, i.prototype = new n, i.prototype.insert = function(e) {
                if (null === this._root) return this._root = new Node(e), this.size++, !0;
                for (var t = 0, r = null, n = this._root;;) {
                    if (null === n) return n = new Node(e), r.set_child(t, n), ret = !0, this.size++, !0;
                    if (0 === this._comparator(n.data, e)) return !1;
                    t = 0 > this._comparator(n.data, e), r = n, n = n.get_child(t)
                }
            }, i.prototype.remove = function(e) {
                if (null === this._root) return !1;
                var t = new Node(void 0),
                    r = t;
                r.right = this._root;
                for (var n = null, i = null, o = 1; null !== r.get_child(o);) {
                    n = r, r = r.get_child(o);
                    var s = this._comparator(e, r.data);
                    o = s > 0, 0 === s && (i = r)
                }
                return null !== i && (i.data = r.data, n.set_child(n.right === r, r.get_child(null === r.left)), this._root = t.right, this.size--, !0)
            }, e.exports = i
        },
        768661: function(e, t, r) {
            var n = r("78798");

            function Node(e) {
                this.data = e, this.left = null, this.right = null, this.red = !0
            }

            function i(e) {
                this._root = null, this._comparator = e, this.size = 0
            }

            function o(e) {
                return null !== e && e.red
            }

            function s(e, t) {
                var r = e.get_child(!t);
                return e.set_child(!t, r.get_child(t)), r.set_child(t, e), e.red = !0, r.red = !1, r
            }

            function a(e, t) {
                return e.set_child(!t, s(e.get_child(!t), !t)), s(e, t)
            }
            Node.prototype.get_child = function(e) {
                return e ? this.right : this.left
            }, Node.prototype.set_child = function(e, t) {
                e ? this.right = t : this.left = t
            }, i.prototype = new n, i.prototype.insert = function(e) {
                var t = !1;
                if (null === this._root) this._root = new Node(e), t = !0, this.size++;
                else {
                    var r = new Node(void 0),
                        n = 0,
                        i = 0,
                        c = null,
                        p = r,
                        u = null,
                        d = this._root;
                    for (p.right = this._root;;) {
                        if (null === d ? (d = new Node(e), u.set_child(n, d), t = !0, this.size++) : o(d.left) && o(d.right) && (d.red = !0, d.left.red = !1, d.right.red = !1), o(d) && o(u)) {
                            var f = p.right === c;
                            d === u.get_child(i) ? p.set_child(f, s(c, !i)) : p.set_child(f, a(c, !i))
                        }
                        var l = this._comparator(d.data, e);
                        if (0 === l) break;
                        i = n, n = l < 0, null !== c && (p = c), c = u, u = d, d = d.get_child(n)
                    }
                    this._root = r.right
                }
                return this._root.red = !1, t
            }, i.prototype.remove = function(e) {
                if (null === this._root) return !1;
                var t = new Node(void 0),
                    r = t;
                r.right = this._root;
                for (var n = null, i = null, c = null, p = 1; null !== r.get_child(p);) {
                    var u = p;
                    i = n, n = r, r = r.get_child(p);
                    var d = this._comparator(e, r.data);
                    if (p = d > 0, 0 === d && (c = r), !o(r) && !o(r.get_child(p))) {
                        if (o(r.get_child(!p))) {
                            var f = s(r, p);
                            n.set_child(u, f), n = f
                        } else if (!o(r.get_child(!p))) {
                            var l = n.get_child(!u);
                            if (null !== l) {
                                if (o(l.get_child(!u)) || o(l.get_child(u))) {
                                    var h = i.right === n;
                                    o(l.get_child(u)) ? i.set_child(h, a(n, u)) : o(l.get_child(!u)) && i.set_child(h, s(n, u));
                                    var m = i.get_child(h);
                                    m.red = !0, r.red = !0, m.left.red = !1, m.right.red = !1
                                } else n.red = !1, l.red = !0, r.red = !0
                            }
                        }
                    }
                }
                return null !== c && (c.data = r.data, n.set_child(n.right === r, r.get_child(null === r.left)), this.size--), this._root = t.right, null !== this._root && (this._root.red = !1), null !== c
            }, e.exports = i
        },
        78798: function(e, t, r) {
            function n() {}

            function i(e) {
                this._tree = e, this._ancestors = [], this._cursor = null
            }
            r("424973"), n.prototype.clear = function() {
                this._root = null, this.size = 0
            }, n.prototype.find = function(e) {
                for (var t = this._root; null !== t;) {
                    var r = this._comparator(e, t.data);
                    if (0 === r) return t.data;
                    t = t.get_child(r > 0)
                }
                return null
            }, n.prototype.findIter = function(e) {
                for (var t = this._root, r = this.iterator(); null !== t;) {
                    var n = this._comparator(e, t.data);
                    if (0 === n) return r._cursor = t, r;
                    r._ancestors.push(t), t = t.get_child(n > 0)
                }
                return null
            }, n.prototype.lowerBound = function(e) {
                for (var t = this._root, r = this.iterator(), n = this._comparator; null !== t;) {
                    var i = n(e, t.data);
                    if (0 === i) return r._cursor = t, r;
                    r._ancestors.push(t), t = t.get_child(i > 0)
                }
                for (var o = r._ancestors.length - 1; o >= 0; --o)
                    if (0 > n(e, (t = r._ancestors[o]).data)) return r._cursor = t, r._ancestors.length = o, r;
                return r._ancestors.length = 0, r
            }, n.prototype.upperBound = function(e) {
                for (var t = this.lowerBound(e), r = this._comparator; null !== t.data() && 0 === r(t.data(), e);) t.next();
                return t
            }, n.prototype.min = function() {
                var e = this._root;
                if (null === e) return null;
                for (; null !== e.left;) e = e.left;
                return e.data
            }, n.prototype.max = function() {
                var e = this._root;
                if (null === e) return null;
                for (; null !== e.right;) e = e.right;
                return e.data
            }, n.prototype.iterator = function() {
                return new i(this)
            }, n.prototype.each = function(e) {
                for (var t, r = this.iterator(); null !== (t = r.next());) e(t)
            }, n.prototype.reach = function(e) {
                for (var t, r = this.iterator(); null !== (t = r.prev());) e(t)
            }, i.prototype.data = function() {
                return null !== this._cursor ? this._cursor.data : null
            }, i.prototype.next = function() {
                if (null === this._cursor) {
                    var e, t = this._tree._root;
                    null !== t && this._minNode(t)
                } else if (null === this._cursor.right)
                    do
                        if (e = this._cursor, this._ancestors.length) this._cursor = this._ancestors.pop();
                        else {
                            this._cursor = null;
                            break
                        } while (this._cursor.right === e);
                else this._ancestors.push(this._cursor), this._minNode(this._cursor.right);
                return null !== this._cursor ? this._cursor.data : null
            }, i.prototype.prev = function() {
                if (null === this._cursor) {
                    var e, t = this._tree._root;
                    null !== t && this._maxNode(t)
                } else if (null === this._cursor.left)
                    do
                        if (e = this._cursor, this._ancestors.length) this._cursor = this._ancestors.pop();
                        else {
                            this._cursor = null;
                            break
                        } while (this._cursor.left === e);
                else this._ancestors.push(this._cursor), this._maxNode(this._cursor.left);
                return null !== this._cursor ? this._cursor.data : null
            }, i.prototype._minNode = function(e) {
                for (; null !== e.left;) this._ancestors.push(e), e = e.left;
                this._cursor = e
            }, i.prototype._maxNode = function(e) {
                for (; null !== e.right;) this._ancestors.push(e), e = e.right;
                this._cursor = e
            }, e.exports = n
        },
        677935: function(e, t, r) {
            e = r.nmd(e), r("424973"), ! function() {
                "use strict";
                var t = {}.hasOwnProperty;

                function r() {
                    for (var e = [], n = 0; n < arguments.length; n++) {
                        var i = arguments[n];
                        if (i) {
                            var o = typeof i;
                            if ("string" === o || "number" === o) e.push(i);
                            else if (Array.isArray(i)) {
                                if (i.length) {
                                    var s = r.apply(null, i);
                                    s && e.push(s)
                                }
                            } else if ("object" === o) {
                                if (i.toString === Object.prototype.toString)
                                    for (var a in i) t.call(i, a) && i[a] && e.push(a);
                                else e.push(i.toString())
                            }
                        }
                    }
                    return e.join(" ")
                }
                void 0 !== e && e.exports ? (r.default = r, e.exports = r) : "function" == typeof define && "object" == typeof define.amd && define.amd ? define("classnames", [], function() {
                    return r
                }) : window.classNames = r
            }()
        },
        499032: function(e, t, r) {
            function n(e) {
                if (e && "object" == typeof e) {
                    var t = e.which || e.keyCode || e.charCode;
                    t && (e = t)
                }
                if ("number" == typeof e) return a[e];
                var r = String(e),
                    n = i[r.toLowerCase()];
                if (n) return n;
                var n = o[r.toLowerCase()];
                return n ? n : 1 === r.length ? r.charCodeAt(0) : void 0
            }
            n.isEventKey = function(e, t) {
                if (e && "object" == typeof e) {
                    var r = e.which || e.keyCode || e.charCode;
                    if (null == r) return !1;
                    if ("string" == typeof t) {
                        var n = i[t.toLowerCase()];
                        if (n) return n === r;
                        var n = o[t.toLowerCase()];
                        if (n) return n === r
                    } else if ("number" == typeof t) return t === r;
                    return !1
                }
            };
            var i = (t = e.exports = n).code = t.codes = {
                    backspace: 8,
                    tab: 9,
                    enter: 13,
                    shift: 16,
                    ctrl: 17,
                    alt: 18,
                    "pause/break": 19,
                    "caps lock": 20,
                    esc: 27,
                    space: 32,
                    "page up": 33,
                    "page down": 34,
                    end: 35,
                    home: 36,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    insert: 45,
                    delete: 46,
                    command: 91,
                    "left command": 91,
                    "right command": 93,
                    "numpad *": 106,
                    "numpad +": 107,
                    "numpad -": 109,
                    "numpad .": 110,
                    "numpad /": 111,
                    "num lock": 144,
                    "scroll lock": 145,
                    "my computer": 182,
                    "my calculator": 183,
                    ";": 186,
                    "=": 187,
                    ",": 188,
                    "-": 189,
                    ".": 190,
                    "/": 191,
                    "`": 192,
                    "[": 219,
                    "\\": 220,
                    "]": 221,
                    "'": 222
                },
                o = t.aliases = {
                    windows: 91,
                    "⇧": 16,
                    "⌥": 18,
                    "⌃": 17,
                    "⌘": 91,
                    ctl: 17,
                    control: 17,
                    option: 18,
                    pause: 19,
                    break: 19,
                    caps: 20,
                    return: 13,
                    escape: 27,
                    spc: 32,
                    spacebar: 32,
                    pgup: 33,
                    pgdn: 34,
                    ins: 45,
                    del: 46,
                    cmd: 91
                };
            for (s = 97; s < 123; s++) i[String.fromCharCode(s)] = s - 32;
            for (var s = 48; s < 58; s++) i[s - 48] = s;
            for (s = 1; s < 13; s++) i["f" + s] = s + 111;
            for (s = 0; s < 10; s++) i["numpad " + s] = s + 96;
            var a = t.names = t.title = {};
            for (s in i) a[i[s]] = s;
            for (var c in o) i[c] = o[c]
        },
        53379: function(e, t, r) {
            "use strict";
            var n;
            r("222007"), r("70102"), e.exports.timeout = function(e, t) {
                var r, i = new n;
                return Promise.race([e, new Promise(function(e, n) {
                    r = setTimeout(function() {
                        n(i)
                    }, t)
                })]).then(function(e) {
                    return clearTimeout(r), e
                }, function(e) {
                    throw clearTimeout(r), e
                })
            }, (n = e.exports.TimeoutError = function() {
                Error.call(this), this.stack = Error().stack, this.message = "Timeout"
            }).prototype = Object.create(Error.prototype), n.prototype.name = "TimeoutError"
        },
        258169: function(e, t, r) {
            var n = e.exports = {
                v: [{
                    name: "version",
                    reg: /^(\d*)$/
                }],
                o: [{
                    name: "origin",
                    reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
                    names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"],
                    format: "%s %s %d %s IP%d %s"
                }],
                s: [{
                    name: "name"
                }],
                i: [{
                    name: "description"
                }],
                u: [{
                    name: "uri"
                }],
                e: [{
                    name: "email"
                }],
                p: [{
                    name: "phone"
                }],
                z: [{
                    name: "timezones"
                }],
                r: [{
                    name: "repeats"
                }],
                t: [{
                    name: "timing",
                    reg: /^(\d*) (\d*)/,
                    names: ["start", "stop"],
                    format: "%d %d"
                }],
                c: [{
                    name: "connection",
                    reg: /^IN IP(\d) (\S*)/,
                    names: ["version", "ip"],
                    format: "IN IP%d %s"
                }],
                b: [{
                    push: "bandwidth",
                    reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
                    names: ["type", "limit"],
                    format: "%s:%s"
                }],
                m: [{
                    reg: /^(\w*) (\d*) ([\w\/]*)(?: (.*))?/,
                    names: ["type", "port", "protocol", "payloads"],
                    format: "%s %d %s %s"
                }],
                a: [{
                    push: "rtp",
                    reg: /^rtpmap:(\d*) ([\w\-\.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
                    names: ["payload", "codec", "rate", "encoding"],
                    format: function(e) {
                        return e.encoding ? "rtpmap:%d %s/%s/%s" : e.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s"
                    }
                }, {
                    push: "fmtp",
                    reg: /^fmtp:(\d*) ([\S| ]*)/,
                    names: ["payload", "config"],
                    format: "fmtp:%d %s"
                }, {
                    name: "control",
                    reg: /^control:(.*)/,
                    format: "control:%s"
                }, {
                    name: "rtcp",
                    reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
                    names: ["port", "netType", "ipVer", "address"],
                    format: function(e) {
                        return null != e.address ? "rtcp:%d %s IP%d %s" : "rtcp:%d"
                    }
                }, {
                    push: "rtcpFbTrrInt",
                    reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
                    names: ["payload", "value"],
                    format: "rtcp-fb:%d trr-int %d"
                }, {
                    push: "rtcpFb",
                    reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
                    names: ["payload", "type", "subtype"],
                    format: function(e) {
                        return null != e.subtype ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s"
                    }
                }, {
                    push: "ext",
                    reg: /^extmap:(\d+)(?:\/(\w+))? (\S*)(?: (\S*))?/,
                    names: ["value", "direction", "uri", "config"],
                    format: function(e) {
                        return "extmap:%d" + (e.direction ? "/%s" : "%v") + " %s" + (e.config ? " %s" : "")
                    }
                }, {
                    push: "crypto",
                    reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
                    names: ["id", "suite", "config", "sessionConfig"],
                    format: function(e) {
                        return null != e.sessionConfig ? "crypto:%d %s %s %s" : "crypto:%d %s %s"
                    }
                }, {
                    name: "setup",
                    reg: /^setup:(\w*)/,
                    format: "setup:%s"
                }, {
                    name: "mid",
                    reg: /^mid:([^\s]*)/,
                    format: "mid:%s"
                }, {
                    name: "msid",
                    reg: /^msid:(.*)/,
                    format: "msid:%s"
                }, {
                    name: "ptime",
                    reg: /^ptime:(\d*)/,
                    format: "ptime:%d"
                }, {
                    name: "maxptime",
                    reg: /^maxptime:(\d*)/,
                    format: "maxptime:%d"
                }, {
                    name: "direction",
                    reg: /^(sendrecv|recvonly|sendonly|inactive)/
                }, {
                    name: "icelite",
                    reg: /^(ice-lite)/
                }, {
                    name: "iceUfrag",
                    reg: /^ice-ufrag:(\S*)/,
                    format: "ice-ufrag:%s"
                }, {
                    name: "icePwd",
                    reg: /^ice-pwd:(\S*)/,
                    format: "ice-pwd:%s"
                }, {
                    name: "fingerprint",
                    reg: /^fingerprint:(\S*) (\S*)/,
                    names: ["type", "hash"],
                    format: "fingerprint:%s %s"
                }, {
                    push: "candidates",
                    reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
                    names: ["foundation", "component", "transport", "priority", "ip", "port", "type", "raddr", "rport", "tcptype", "generation", "network-id", "network-cost"],
                    format: function(e) {
                        var t = "candidate:%s %d %s %d %s %d typ %s";
                        return t += (null != e.raddr ? " raddr %s rport %d" : "%v%v") + (null != e.tcptype ? " tcptype %s" : "%v"), null != e.generation && (t += " generation %d"), t += (null != e["network-id"] ? " network-id %d" : "%v") + (null != e["network-cost"] ? " network-cost %d" : "%v")
                    }
                }, {
                    name: "endOfCandidates",
                    reg: /^(end-of-candidates)/
                }, {
                    name: "remoteCandidates",
                    reg: /^remote-candidates:(.*)/,
                    format: "remote-candidates:%s"
                }, {
                    name: "iceOptions",
                    reg: /^ice-options:(\S*)/,
                    format: "ice-options:%s"
                }, {
                    push: "ssrcs",
                    reg: /^ssrc:(\d*) ([\w_]*)(?::(.*))?/,
                    names: ["id", "attribute", "value"],
                    format: function(e) {
                        var t = "ssrc:%d";
                        return null != e.attribute && (t += " %s", null != e.value && (t += ":%s")), t
                    }
                }, {
                    push: "ssrcGroups",
                    reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
                    names: ["semantics", "ssrcs"],
                    format: "ssrc-group:%s %s"
                }, {
                    name: "msidSemantic",
                    reg: /^msid-semantic:\s?(\w*) (\S*)/,
                    names: ["semantic", "token"],
                    format: "msid-semantic: %s %s"
                }, {
                    push: "groups",
                    reg: /^group:(\w*) (.*)/,
                    names: ["type", "mids"],
                    format: "group:%s %s"
                }, {
                    name: "rtcpMux",
                    reg: /^(rtcp-mux)/
                }, {
                    name: "rtcpRsize",
                    reg: /^(rtcp-rsize)/
                }, {
                    name: "sctpmap",
                    reg: /^sctpmap:([\w_\/]*) (\S*)(?: (\S*))?/,
                    names: ["sctpmapNumber", "app", "maxMessageSize"],
                    format: function(e) {
                        return null != e.maxMessageSize ? "sctpmap:%s %s %s" : "sctpmap:%s %s"
                    }
                }, {
                    name: "xGoogleFlag",
                    reg: /^x-google-flag:([^\s]*)/,
                    format: "x-google-flag:%s"
                }, {
                    push: "rids",
                    reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
                    names: ["id", "direction", "params"],
                    format: function(e) {
                        return e.params ? "rid:%s %s %s" : "rid:%s %s"
                    }
                }, {
                    push: "imageattrs",
                    reg: RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"),
                    names: ["pt", "dir1", "attrs1", "dir2", "attrs2"],
                    format: function(e) {
                        return "imageattr:%s %s %s" + (e.dir2 ? " %s %s" : "")
                    }
                }, {
                    name: "simulcast",
                    reg: RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"),
                    names: ["dir1", "list1", "dir2", "list2"],
                    format: function(e) {
                        return "simulcast:%s %s" + (e.dir2 ? " %s %s" : "")
                    }
                }, {
                    name: "simulcast_03",
                    reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
                    names: ["value"],
                    format: "simulcast: %s"
                }, {
                    name: "framerate",
                    reg: /^framerate:(\d+(?:$|\.\d+))/,
                    format: "framerate:%s"
                }, {
                    push: "invalid",
                    names: ["value"]
                }]
            };
            Object.keys(n).forEach(function(e) {
                n[e].forEach(function(e) {
                    !e.reg && (e.reg = /(.*)/), !e.format && (e.format = "%s")
                })
            })
        },
        21794: function(e, t, r) {
            var n = r("636091"),
                i = r("166829");
            t.write = i, t.parse = n.parse, t.parseFmtpConfig = n.parseFmtpConfig, t.parseParams = n.parseParams, t.parsePayloads = n.parsePayloads, t.parseRemoteCandidates = n.parseRemoteCandidates, t.parseImageAttributes = n.parseImageAttributes, t.parseSimulcastStreamList = n.parseSimulcastStreamList
        },
        636091: function(e, t, r) {
            r("424973"), r("808653");
            var n = function(e) {
                    return String(Number(e)) === e ? Number(e) : e
                },
                i = function(e, t, r, i) {
                    if (i && !r) t[i] = n(e[1]);
                    else
                        for (var o = 0; o < r.length; o += 1) null != e[o + 1] && (t[r[o]] = n(e[o + 1]))
                },
                o = function(e, t, r) {
                    var n = e.name && e.names;
                    e.push && !t[e.push] ? t[e.push] = [] : n && !t[e.name] && (t[e.name] = {});
                    var o = e.push ? {} : n ? t[e.name] : t;
                    i(r.match(e.reg), o, e.names, e.name), e.push && t[e.push].push(o)
                },
                s = r("258169"),
                a = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
            t.parse = function(e) {
                var t = {},
                    r = [],
                    n = t;
                return e.split(/(\r\n|\r|\n)/).filter(a).forEach(function(e) {
                    var t = e[0],
                        i = e.slice(2);
                    "m" === t && (r.push({
                        rtp: [],
                        fmtp: []
                    }), n = r[r.length - 1]);
                    for (var a = 0; a < (s[t] || []).length; a += 1) {
                        var c = s[t][a];
                        if (c.reg.test(i)) return o(c, n, i)
                    }
                }), t.media = r, t
            };
            var c = function(e, t) {
                var r = t.split(/=(.+)/, 2);
                return 2 === r.length && (e[r[0]] = n(r[1])), e
            };
            t.parseParams = function(e) {
                return e.split(/\;\s?/).reduce(c, {})
            }, t.parseFmtpConfig = t.parseParams, t.parsePayloads = function(e) {
                return e.split(" ").map(Number)
            }, t.parseRemoteCandidates = function(e) {
                for (var t = [], r = e.split(" ").map(n), i = 0; i < r.length; i += 3) t.push({
                    component: r[i],
                    ip: r[i + 1],
                    port: r[i + 2]
                });
                return t
            }, t.parseImageAttributes = function(e) {
                return e.split(" ").map(function(e) {
                    return e.substring(1, e.length - 1).split(",").reduce(c, {})
                })
            }, t.parseSimulcastStreamList = function(e) {
                return e.split(";").map(function(e) {
                    return e.split(",").map(function(e) {
                        var t, r = !1;
                        return "~" !== e[0] ? t = n(e) : (t = n(e.substring(1, e.length)), r = !0), {
                            scid: t,
                            paused: r
                        }
                    })
                })
            }
        },
        166829: function(e, t, r) {
            r("781738"), r("424973");
            var n = r("258169"),
                i = /%[sdv%]/g,
                o = function(e) {
                    var t = 1,
                        r = arguments,
                        n = r.length;
                    return e.replace(i, function(e) {
                        if (t >= n) return e;
                        var i = r[t];
                        switch (t += 1, e) {
                            case "%%":
                                return "%";
                            case "%s":
                                return String(i);
                            case "%d":
                                return Number(i);
                            case "%v":
                                return ""
                        }
                    })
                },
                s = function(e, t, r) {
                    var n = [e + "=" + (t.format instanceof Function ? t.format(t.push ? r : r[t.name]) : t.format)];
                    if (t.names)
                        for (var i = 0; i < t.names.length; i += 1) {
                            var s = t.names[i];
                            t.name ? n.push(r[t.name][s]) : n.push(r[t.names[i]])
                        } else n.push(r[t.name]);
                    return o.apply(null, n)
                },
                a = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"],
                c = ["i", "c", "b", "a"];
            e.exports = function(e, t) {
                t = t || {}, null == e.version && (e.version = 0), null == e.name && (e.name = " "), e.media.forEach(function(e) {
                    null == e.payloads && (e.payloads = "")
                });
                var r = t.outerOrder || a,
                    i = t.innerOrder || c,
                    o = [];
                return r.forEach(function(t) {
                    n[t].forEach(function(r) {
                        r.name in e && null != e[r.name] ? o.push(s(t, r, e)) : r.push in e && null != e[r.push] && e[r.push].forEach(function(e) {
                            o.push(s(t, r, e))
                        })
                    })
                }), e.media.forEach(function(e) {
                    o.push(s("m", n.m[0], e)), i.forEach(function(t) {
                        n[t].forEach(function(r) {
                            r.name in e && null != e[r.name] ? o.push(s(t, r, e)) : r.push in e && null != e[r.push] && e[r.push].forEach(function(e) {
                                o.push(s(t, r, e))
                            })
                        })
                    })
                }), o.join("\r\n") + "\r\n"
            }
        },
        570277: function(e, t, r) {
            var n, i = r("390493");
            r("843762"), r("781738"), r("70102"), r("424973"), t = e.exports = l, n = "object" == typeof i && i.env && i.env.NODE_DEBUG && /\bsemver\b/i.test(i.env.NODE_DEBUG) ? function() {
                var e = Array.prototype.slice.call(arguments, 0);
                e.unshift("SEMVER"), console.log.apply(console, e)
            } : function() {}, t.SEMVER_SPEC_VERSION = "2.0.0";
            var o = Number.MAX_SAFE_INTEGER || 9007199254740991,
                s = t.re = [],
                a = t.src = [],
                c = t.tokens = {},
                p = 0;

            function u(e) {
                c[e] = p++
            }
            u("NUMERICIDENTIFIER"), a[c.NUMERICIDENTIFIER] = "0|[1-9]\\d*", u("NUMERICIDENTIFIERLOOSE"), a[c.NUMERICIDENTIFIERLOOSE] = "[0-9]+", u("NONNUMERICIDENTIFIER"), a[c.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*", u("MAINVERSION"), a[c.MAINVERSION] = "(" + a[c.NUMERICIDENTIFIER] + ")\\.(" + a[c.NUMERICIDENTIFIER] + ")\\.(" + a[c.NUMERICIDENTIFIER] + ")", u("MAINVERSIONLOOSE"), a[c.MAINVERSIONLOOSE] = "(" + a[c.NUMERICIDENTIFIERLOOSE] + ")\\.(" + a[c.NUMERICIDENTIFIERLOOSE] + ")\\.(" + a[c.NUMERICIDENTIFIERLOOSE] + ")", u("PRERELEASEIDENTIFIER"), a[c.PRERELEASEIDENTIFIER] = "(?:" + a[c.NUMERICIDENTIFIER] + "|" + a[c.NONNUMERICIDENTIFIER] + ")", u("PRERELEASEIDENTIFIERLOOSE"), a[c.PRERELEASEIDENTIFIERLOOSE] = "(?:" + a[c.NUMERICIDENTIFIERLOOSE] + "|" + a[c.NONNUMERICIDENTIFIER] + ")", u("PRERELEASE"), a[c.PRERELEASE] = "(?:-(" + a[c.PRERELEASEIDENTIFIER] + "(?:\\." + a[c.PRERELEASEIDENTIFIER] + ")*))", u("PRERELEASELOOSE"), a[c.PRERELEASELOOSE] = "(?:-?(" + a[c.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + a[c.PRERELEASEIDENTIFIERLOOSE] + ")*))", u("BUILDIDENTIFIER"), a[c.BUILDIDENTIFIER] = "[0-9A-Za-z-]+", u("BUILD"), a[c.BUILD] = "(?:\\+(" + a[c.BUILDIDENTIFIER] + "(?:\\." + a[c.BUILDIDENTIFIER] + ")*))", u("FULL"), u("FULLPLAIN"), a[c.FULLPLAIN] = "v?" + a[c.MAINVERSION] + a[c.PRERELEASE] + "?" + a[c.BUILD] + "?", a[c.FULL] = "^" + a[c.FULLPLAIN] + "$", u("LOOSEPLAIN"), a[c.LOOSEPLAIN] = "[v=\\s]*" + a[c.MAINVERSIONLOOSE] + a[c.PRERELEASELOOSE] + "?" + a[c.BUILD] + "?", u("LOOSE"), a[c.LOOSE] = "^" + a[c.LOOSEPLAIN] + "$", u("GTLT"), a[c.GTLT] = "((?:<|>)?=?)", u("XRANGEIDENTIFIERLOOSE"), a[c.XRANGEIDENTIFIERLOOSE] = a[c.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*", u("XRANGEIDENTIFIER"), a[c.XRANGEIDENTIFIER] = a[c.NUMERICIDENTIFIER] + "|x|X|\\*", u("XRANGEPLAIN"), a[c.XRANGEPLAIN] = "[v=\\s]*(" + a[c.XRANGEIDENTIFIER] + ")(?:\\.(" + a[c.XRANGEIDENTIFIER] + ")(?:\\.(" + a[c.XRANGEIDENTIFIER] + ")(?:" + a[c.PRERELEASE] + ")?" + a[c.BUILD] + "?)?)?", u("XRANGEPLAINLOOSE"), a[c.XRANGEPLAINLOOSE] = "[v=\\s]*(" + a[c.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + a[c.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + a[c.XRANGEIDENTIFIERLOOSE] + ")(?:" + a[c.PRERELEASELOOSE] + ")?" + a[c.BUILD] + "?)?)?", u("XRANGE"), a[c.XRANGE] = "^" + a[c.GTLT] + "\\s*" + a[c.XRANGEPLAIN] + "$", u("XRANGELOOSE"), a[c.XRANGELOOSE] = "^" + a[c.GTLT] + "\\s*" + a[c.XRANGEPLAINLOOSE] + "$", u("COERCE"), a[c.COERCE] = "(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])", u("COERCERTL"), s[c.COERCERTL] = RegExp(a[c.COERCE], "g"), u("LONETILDE"), a[c.LONETILDE] = "(?:~>?)", u("TILDETRIM"), a[c.TILDETRIM] = "(\\s*)" + a[c.LONETILDE] + "\\s+", s[c.TILDETRIM] = RegExp(a[c.TILDETRIM], "g");
            u("TILDE"), a[c.TILDE] = "^" + a[c.LONETILDE] + a[c.XRANGEPLAIN] + "$", u("TILDELOOSE"), a[c.TILDELOOSE] = "^" + a[c.LONETILDE] + a[c.XRANGEPLAINLOOSE] + "$", u("LONECARET"), a[c.LONECARET] = "(?:\\^)", u("CARETTRIM"), a[c.CARETTRIM] = "(\\s*)" + a[c.LONECARET] + "\\s+", s[c.CARETTRIM] = RegExp(a[c.CARETTRIM], "g");
            u("CARET"), a[c.CARET] = "^" + a[c.LONECARET] + a[c.XRANGEPLAIN] + "$", u("CARETLOOSE"), a[c.CARETLOOSE] = "^" + a[c.LONECARET] + a[c.XRANGEPLAINLOOSE] + "$", u("COMPARATORLOOSE"), a[c.COMPARATORLOOSE] = "^" + a[c.GTLT] + "\\s*(" + a[c.LOOSEPLAIN] + ")$|^$", u("COMPARATOR"), a[c.COMPARATOR] = "^" + a[c.GTLT] + "\\s*(" + a[c.FULLPLAIN] + ")$|^$", u("COMPARATORTRIM"), a[c.COMPARATORTRIM] = "(\\s*)" + a[c.GTLT] + "\\s*(" + a[c.LOOSEPLAIN] + "|" + a[c.XRANGEPLAIN] + ")", s[c.COMPARATORTRIM] = RegExp(a[c.COMPARATORTRIM], "g");
            u("HYPHENRANGE"), a[c.HYPHENRANGE] = "^\\s*(" + a[c.XRANGEPLAIN] + ")\\s+-\\s+(" + a[c.XRANGEPLAIN] + ")\\s*$", u("HYPHENRANGELOOSE"), a[c.HYPHENRANGELOOSE] = "^\\s*(" + a[c.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + a[c.XRANGEPLAINLOOSE] + ")\\s*$", u("STAR"), a[c.STAR] = "(<|>)?=?\\s*\\*";
            for (var d = 0; d < p; d++) n(d, a[d]), !s[d] && (s[d] = new RegExp(a[d]));

            function f(e, t) {
                if ((!t || "object" != typeof t) && (t = {
                        loose: !!t,
                        includePrerelease: !1
                    }), e instanceof l) return e;
                if ("string" != typeof e || e.length > 256 || !(t.loose ? s[c.LOOSE] : s[c.FULL]).test(e)) return null;
                try {
                    return new l(e, t)
                } catch (e) {
                    return null
                }
            }
            t.parse = f, t.valid = function(e, t) {
                var r = f(e, t);
                return r ? r.version : null
            };
            t.clean = function(e, t) {
                var r = f(e.trim().replace(/^[=v]+/, ""), t);
                return r ? r.version : null
            };

            function l(e, t) {
                if ((!t || "object" != typeof t) && (t = {
                        loose: !!t,
                        includePrerelease: !1
                    }), e instanceof l) {
                    if (e.loose === t.loose) return e;
                    e = e.version
                } else if ("string" != typeof e) throw TypeError("Invalid Version: " + e);
                if (e.length > 256) throw TypeError("version is longer than 256 characters");
                if (!(this instanceof l)) return new l(e, t);
                n("SemVer", e, t), this.options = t, this.loose = !!t.loose;
                var r = e.trim().match(t.loose ? s[c.LOOSE] : s[c.FULL]);
                if (!r) throw TypeError("Invalid Version: " + e);
                if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > o || this.major < 0) throw TypeError("Invalid major version");
                if (this.minor > o || this.minor < 0) throw TypeError("Invalid minor version");
                if (this.patch > o || this.patch < 0) throw TypeError("Invalid patch version");
                r[4] ? this.prerelease = r[4].split(".").map(function(e) {
                    if (/^[0-9]+$/.test(e)) {
                        var t = +e;
                        if (t >= 0 && t < o) return t
                    }
                    return e
                }) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format()
            }
            t.SemVer = l, l.prototype.format = function() {
                return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version
            }, l.prototype.toString = function() {
                return this.version
            }, l.prototype.compare = function(e) {
                return n("SemVer.compare", this.version, this.options, e), !(e instanceof l) && (e = new l(e, this.options)), this.compareMain(e) || this.comparePre(e)
            }, l.prototype.compareMain = function(e) {
                return !(e instanceof l) && (e = new l(e, this.options)), m(this.major, e.major) || m(this.minor, e.minor) || m(this.patch, e.patch)
            }, l.prototype.comparePre = function(e) {
                if (!(e instanceof l) && (e = new l(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
                if (!this.prerelease.length && e.prerelease.length) return 1;
                if (!this.prerelease.length && !e.prerelease.length) return 0;
                var t = 0;
                do {
                    var r = this.prerelease[t],
                        i = e.prerelease[t];
                    if (n("prerelease compare", t, r, i), void 0 === r && void 0 === i) return 0;
                    if (void 0 === i) return 1;
                    else if (void 0 === r) return -1;
                    else if (r === i) continue;
                    else return m(r, i)
                } while (++t)
            }, l.prototype.compareBuild = function(e) {
                !(e instanceof l) && (e = new l(e, this.options));
                var t = 0;
                do {
                    var r = this.build[t],
                        i = e.build[t];
                    if (n("prerelease compare", t, r, i), void 0 === r && void 0 === i) return 0;
                    if (void 0 === i) return 1;
                    else if (void 0 === r) return -1;
                    else if (r === i) continue;
                    else return m(r, i)
                } while (++t)
            }, l.prototype.inc = function(e, t) {
                switch (e) {
                    case "premajor":
                        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
                        break;
                    case "preminor":
                        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
                        break;
                    case "prepatch":
                        this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
                        break;
                    case "prerelease":
                        0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
                        break;
                    case "major":
                        (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                        break;
                    case "minor":
                        (0 !== this.patch || 0 === this.prerelease.length) && this.minor++, this.patch = 0, this.prerelease = [];
                        break;
                    case "patch":
                        0 === this.prerelease.length && this.patch++, this.prerelease = [];
                        break;
                    case "pre":
                        if (0 === this.prerelease.length) this.prerelease = [0];
                        else {
                            for (var r = this.prerelease.length; --r >= 0;) "number" == typeof this.prerelease[r] && (this.prerelease[r]++, r = -2); - 1 === r && this.prerelease.push(0)
                        }
                        t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
                        break;
                    default:
                        throw Error("invalid increment argument: " + e)
                }
                return this.format(), this.raw = this.version, this
            }, t.inc = function(e, t, r, n) {
                "string" == typeof r && (n = r, r = void 0);
                try {
                    return new l(e, r).inc(t, n).version
                } catch (e) {
                    return null
                }
            };
            t.diff = function(e, t) {
                if (C(e, t)) return null;
                var r = f(e),
                    n = f(t),
                    i = "";
                if (r.prerelease.length || n.prerelease.length) {
                    i = "pre";
                    var o = "prerelease"
                }
                for (var s in r)
                    if (("major" === s || "minor" === s || "patch" === s) && r[s] !== n[s]) return i + s;
                return o
            };
            t.compareIdentifiers = m;
            var h = /^[0-9]+$/;

            function m(e, t) {
                var r = h.test(e),
                    n = h.test(t);
                return r && n && (e = +e, t = +t), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
            }
            t.rcompareIdentifiers = function(e, t) {
                return m(t, e)
            };
            t.major = function(e, t) {
                return new l(e, t).major
            };
            t.minor = function(e, t) {
                return new l(e, t).minor
            };
            t.patch = function(e, t) {
                return new l(e, t).patch
            };

            function v(e, t, r) {
                return new l(e, r).compare(new l(t, r))
            }
            t.compare = v, t.compareLoose = function(e, t) {
                return v(e, t, !0)
            };
            t.compareBuild = function(e, t, r) {
                var n = new l(e, r),
                    i = new l(t, r);
                return n.compare(i) || n.compareBuild(i)
            };
            t.rcompare = function(e, t, r) {
                return v(t, e, r)
            };
            t.sort = function(e, r) {
                return e.sort(function(e, n) {
                    return t.compareBuild(e, n, r)
                })
            };
            t.rsort = function(e, r) {
                return e.sort(function(e, n) {
                    return t.compareBuild(n, e, r)
                })
            };

            function y(e, t, r) {
                return v(e, t, r) > 0
            }

            function g(e, t, r) {
                return 0 > v(e, t, r)
            }

            function C(e, t, r) {
                return 0 === v(e, t, r)
            }

            function E(e, t, r) {
                return 0 !== v(e, t, r)
            }

            function R(e, t, r) {
                return v(e, t, r) >= 0
            }

            function S(e, t, r) {
                return 0 >= v(e, t, r)
            }

            function T(e, t, r, n) {
                switch (t) {
                    case "===":
                        return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), e === r;
                    case "!==":
                        return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), e !== r;
                    case "":
                    case "=":
                    case "==":
                        return C(e, r, n);
                    case "!=":
                        return E(e, r, n);
                    case ">":
                        return y(e, r, n);
                    case ">=":
                        return R(e, r, n);
                    case "<":
                        return g(e, r, n);
                    case "<=":
                        return S(e, r, n);
                    default:
                        throw TypeError("Invalid operator: " + t)
                }
            }

            function _(e, t) {
                if ((!t || "object" != typeof t) && (t = {
                        loose: !!t,
                        includePrerelease: !1
                    }), e instanceof _) {
                    if (!!t.loose === e.loose) return e;
                    e = e.value
                }
                if (!(this instanceof _)) return new _(e, t);
                n("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === P ? this.value = "" : this.value = this.operator + this.semver.version, n("comp", this)
            }
            t.gt = y, t.lt = g, t.eq = C, t.neq = E, t.gte = R, t.lte = S, t.cmp = T, t.Comparator = _;
            var P = {};

            function Range(e, t) {
                if ((!t || "object" != typeof t) && (t = {
                        loose: !!t,
                        includePrerelease: !1
                    }), e instanceof Range) return !!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease ? e : new Range(e.raw, t);
                if (e instanceof _) return new Range(e.value, t);
                if (!(this instanceof Range)) return new Range(e, t);
                if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map(function(e) {
                        return this.parseRange(e.trim())
                    }, this).filter(function(e) {
                        return e.length
                    }), !this.set.length) throw TypeError("Invalid SemVer Range: " + e);
                this.format()
            }

            function b(e, t) {
                for (var r = !0, n = e.slice(), i = n.pop(); r && n.length;) r = n.every(function(e) {
                    return i.intersects(e, t)
                }), i = n.pop();
                return r
            }
            _.prototype.parse = function(e) {
                var t = this.options.loose ? s[c.COMPARATORLOOSE] : s[c.COMPARATOR],
                    r = e.match(t);
                if (!r) throw TypeError("Invalid comparator: " + e);
                this.operator = void 0 !== r[1] ? r[1] : "", "=" === this.operator && (this.operator = ""), r[2] ? this.semver = new l(r[2], this.options.loose) : this.semver = P
            }, _.prototype.toString = function() {
                return this.value
            }, _.prototype.test = function(e) {
                if (n("Comparator.test", e, this.options.loose), this.semver === P || e === P) return !0;
                if ("string" == typeof e) try {
                    e = new l(e, this.options)
                } catch (e) {
                    return !1
                }
                return T(e, this.operator, this.semver, this.options)
            }, _.prototype.intersects = function(e, t) {
                if (!(e instanceof _)) throw TypeError("a Comparator is required");
                if ((!t || "object" != typeof t) && (t = {
                        loose: !!t,
                        includePrerelease: !1
                    }), "" === this.operator) return "" === this.value || (r = new Range(e.value, t), O(this.value, r, t));
                if ("" === e.operator) return "" === e.value || (r = new Range(this.value, t), O(e.semver, r, t));
                var r, n = (">=" === this.operator || ">" === this.operator) && (">=" === e.operator || ">" === e.operator),
                    i = ("<=" === this.operator || "<" === this.operator) && ("<=" === e.operator || "<" === e.operator),
                    o = this.semver.version === e.semver.version,
                    s = (">=" === this.operator || "<=" === this.operator) && (">=" === e.operator || "<=" === e.operator),
                    a = T(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this.operator) && ("<=" === e.operator || "<" === e.operator),
                    c = T(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this.operator) && (">=" === e.operator || ">" === e.operator);
                return n || i || o && s || a || c
            }, t.Range = Range, Range.prototype.format = function() {
                return this.range = this.set.map(function(e) {
                    return e.join(" ").trim()
                }).join("||").trim(), this.range
            }, Range.prototype.toString = function() {
                return this.range
            }, Range.prototype.parseRange = function(e) {
                var t = this.options.loose;
                e = e.trim();
                var r = t ? s[c.HYPHENRANGELOOSE] : s[c.HYPHENRANGE];
                e = e.replace(r, w), n("hyphen replace", e), e = e.replace(s[c.COMPARATORTRIM], "$1$2$3"), n("comparator trim", e, s[c.COMPARATORTRIM]), e = (e = (e = e.replace(s[c.TILDETRIM], "$1~")).replace(s[c.CARETTRIM], "$1^")).split(/\s+/).join(" ");
                var i = t ? s[c.COMPARATORLOOSE] : s[c.COMPARATOR],
                    o = e.split(" ").map(function(e) {
                        return function(e, t) {
                            return n("comp", e, t), e = function(e, t) {
                                return e.trim().split(/\s+/).map(function(e) {
                                    return function(e, t) {
                                        n("caret", e, t);
                                        var r = t.loose ? s[c.CARETLOOSE] : s[c.CARET];
                                        return e.replace(r, function(t, r, i, o, s) {
                                            var a;
                                            return n("caret", e, t, r, i, o, s), I(r) ? a = "" : I(i) ? a = ">=" + r + ".0.0 <" + (+r + 1) + ".0.0" : I(o) ? a = "0" === r ? ">=" + r + "." + i + ".0 <" + r + "." + (+i + 1) + ".0" : ">=" + r + "." + i + ".0 <" + (+r + 1) + ".0.0" : s ? (n("replaceCaret pr", s), a = "0" === r ? "0" === i ? ">=" + r + "." + i + "." + o + "-" + s + " <" + r + "." + i + "." + (+o + 1) : ">=" + r + "." + i + "." + o + "-" + s + " <" + r + "." + (+i + 1) + ".0" : ">=" + r + "." + i + "." + o + "-" + s + " <" + (+r + 1) + ".0.0") : (n("no pr"), a = "0" === r ? "0" === i ? ">=" + r + "." + i + "." + o + " <" + r + "." + i + "." + (+o + 1) : ">=" + r + "." + i + "." + o + " <" + r + "." + (+i + 1) + ".0" : ">=" + r + "." + i + "." + o + " <" + (+r + 1) + ".0.0"), n("caret return", a), a
                                        })
                                    }(e, t)
                                }).join(" ")
                            }(e, t), n("caret", e), e = function(e, t) {
                                return e.trim().split(/\s+/).map(function(e) {
                                    return function(e, t) {
                                        var r = t.loose ? s[c.TILDELOOSE] : s[c.TILDE];
                                        return e.replace(r, function(t, r, i, o, s) {
                                            var a;
                                            return n("tilde", e, t, r, i, o, s), I(r) ? a = "" : I(i) ? a = ">=" + r + ".0.0 <" + (+r + 1) + ".0.0" : I(o) ? a = ">=" + r + "." + i + ".0 <" + r + "." + (+i + 1) + ".0" : s ? (n("replaceTilde pr", s), a = ">=" + r + "." + i + "." + o + "-" + s + " <" + r + "." + (+i + 1) + ".0") : a = ">=" + r + "." + i + "." + o + " <" + r + "." + (+i + 1) + ".0", n("tilde return", a), a
                                        })
                                    }(e, t)
                                }).join(" ")
                            }(e, t), n("tildes", e), e = function(e, t) {
                                return n("replaceXRanges", e, t), e.split(/\s+/).map(function(e) {
                                    return function(e, t) {
                                        e = e.trim();
                                        var r = t.loose ? s[c.XRANGELOOSE] : s[c.XRANGE];
                                        return e.replace(r, function(r, i, o, s, a, c) {
                                            n("xRange", e, r, i, o, s, a, c);
                                            var p = I(o),
                                                u = p || I(s),
                                                d = u || I(a);
                                            return "=" === i && d && (i = ""), c = t.includePrerelease ? "-0" : "", p ? r = ">" === i || "<" === i ? "<0.0.0-0" : "*" : i && d ? (u && (s = 0), a = 0, ">" === i ? (i = ">=", u ? (o = +o + 1, s = 0) : s = +s + 1, a = 0) : "<=" === i && (i = "<", u ? o = +o + 1 : s = +s + 1), r = i + o + "." + s + "." + a + c) : u ? r = ">=" + o + ".0.0" + c + " <" + (+o + 1) + ".0.0" + c : d && (r = ">=" + o + "." + s + ".0" + c + " <" + o + "." + (+s + 1) + ".0" + c), n("xRange return", r), r
                                        })
                                    }(e, t)
                                }).join(" ")
                            }(e, t), n("xrange", e), e = function(e, t) {
                                return n("replaceStars", e, t), e.trim().replace(s[c.STAR], "")
                            }(e, t), n("stars", e), e
                        }(e, this.options)
                    }, this).join(" ").split(/\s+/);
                return this.options.loose && (o = o.filter(function(e) {
                    return !!e.match(i)
                })), o = o.map(function(e) {
                    return new _(e, this.options)
                }, this)
            }, Range.prototype.intersects = function(e, t) {
                if (!(e instanceof Range)) throw TypeError("a Range is required");
                return this.set.some(function(r) {
                    return b(r, t) && e.set.some(function(e) {
                        return b(e, t) && r.every(function(r) {
                            return e.every(function(e) {
                                return r.intersects(e, t)
                            })
                        })
                    })
                })
            }, t.toComparators = function(e, t) {
                return new Range(e, t).set.map(function(e) {
                    return e.map(function(e) {
                        return e.value
                    }).join(" ").trim().split(" ")
                })
            };

            function I(e) {
                return !e || "x" === e.toLowerCase() || "*" === e
            }

            function w(e, t, r, n, i, o, s, a, c, p, u, d, f) {
                return t = I(r) ? "" : I(n) ? ">=" + r + ".0.0" : I(i) ? ">=" + r + "." + n + ".0" : ">=" + t, (t + " " + (a = I(c) ? "" : I(p) ? "<" + (+c + 1) + ".0.0" : I(u) ? "<" + c + "." + (+p + 1) + ".0" : d ? "<=" + c + "." + p + "." + u + "-" + d : "<=" + a)).trim()
            }
            Range.prototype.test = function(e) {
                if (!e) return !1;
                if ("string" == typeof e) try {
                    e = new l(e, this.options)
                } catch (e) {
                    return !1
                }
                for (var t = 0; t < this.set.length; t++)
                    if (function(e, t, r) {
                            for (var i = 0; i < e.length; i++)
                                if (!e[i].test(t)) return !1;
                            if (t.prerelease.length && !r.includePrerelease) {
                                for (i = 0; i < e.length; i++)
                                    if (n(e[i].semver), e[i].semver !== P && e[i].semver.prerelease.length > 0) {
                                        var o = e[i].semver;
                                        if (o.major === t.major && o.minor === t.minor && o.patch === t.patch) return !0
                                    } return !1
                            }
                            return !0
                        }(this.set[t], e, this.options)) return !0;
                return !1
            };

            function O(e, t, r) {
                try {
                    t = new Range(t, r)
                } catch (e) {
                    return !1
                }
                return t.test(e)
            }
            t.satisfies = O, t.maxSatisfying = function(e, t, r) {
                var n = null,
                    i = null;
                try {
                    var o = new Range(t, r)
                } catch (e) {
                    return null
                }
                return e.forEach(function(e) {
                    o.test(e) && (!n || -1 === i.compare(e)) && (i = new l(n = e, r))
                }), n
            };
            t.minSatisfying = function(e, t, r) {
                var n = null,
                    i = null;
                try {
                    var o = new Range(t, r)
                } catch (e) {
                    return null
                }
                return e.forEach(function(e) {
                    o.test(e) && (!n || 1 === i.compare(e)) && (i = new l(n = e, r))
                }), n
            };
            t.minVersion = function(e, t) {
                e = new Range(e, t);
                var r = new l("0.0.0");
                if (e.test(r)) return r;
                if (r = new l("0.0.0-0"), e.test(r)) return r;
                r = null;
                for (var n = 0; n < e.set.length; ++n) e.set[n].forEach(function(e) {
                    var t = new l(e.semver.version);
                    switch (e.operator) {
                        case ">":
                            0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
                        case "":
                        case ">=":
                            (!r || y(r, t)) && (r = t);
                            break;
                        case "<":
                        case "<=":
                            break;
                        default:
                            throw Error("Unexpected operation: " + e.operator)
                    }
                });
                return r && e.test(r) ? r : null
            };
            t.validRange = function(e, t) {
                try {
                    return new Range(e, t).range || "*"
                } catch (e) {
                    return null
                }
            };
            t.ltr = function(e, t, r) {
                return L(e, t, "<", r)
            };
            t.gtr = function(e, t, r) {
                return L(e, t, ">", r)
            };

            function L(e, t, r, n) {
                switch (e = new l(e, n), t = new Range(t, n), r) {
                    case ">":
                        i = y, o = S, s = g, a = ">", c = ">=";
                        break;
                    case "<":
                        i = g, o = R, s = y, a = "<", c = "<=";
                        break;
                    default:
                        throw TypeError('Must provide a hilo val of "<" or ">"')
                }
                if (O(e, t, n)) return !1;
                for (var i, o, s, a, c, p = 0; p < t.set.length; ++p) {
                    var u = t.set[p],
                        d = null,
                        f = null;
                    if (u.forEach(function(e) {
                            e.semver === P && (e = new _(">=0.0.0")), d = d || e, f = f || e, i(e.semver, d.semver, n) ? d = e : s(e.semver, f.semver, n) && (f = e)
                        }), d.operator === a || d.operator === c) return !1;
                    if ((!f.operator || f.operator === a) && o(e, f.semver)) return !1;
                    if (f.operator === c && s(e, f.semver)) return !1
                }
                return !0
            }
            t.outside = L, t.prerelease = function(e, t) {
                var r = f(e, t);
                return r && r.prerelease.length ? r.prerelease : null
            };
            t.intersects = function(e, t, r) {
                return e = new Range(e, r), t = new Range(t, r), e.intersects(t)
            };
            t.coerce = function(e, t) {
                if (e instanceof l) return e;
                if ("number" == typeof e && (e = String(e)), "string" != typeof e) return null;
                var r, n = null;
                if ((t = t || {}).rtl) {
                    for (;
                        (r = s[c.COERCERTL].exec(e)) && (!n || n.index + n[0].length !== e.length);)(!n || r.index + r[0].length !== n.index + n[0].length) && (n = r), s[c.COERCERTL].lastIndex = r.index + r[1].length + r[2].length;
                    s[c.COERCERTL].lastIndex = -1
                } else n = e.match(s[c.COERCE]);
                return null === n ? null : f(n[2] + "." + (n[3] || "0") + "." + (n[4] || "0"), t)
            }
        },
        265042: function(e, t, r) {
            r("424973");
            var n = r("55942").RBTree;

            function i(e, t, r) {
                this.discrete = !1 === e, this.delta = e || .01, this.K = void 0 === t ? 25 : t, this.CX = void 0 === r ? 1.1 : r, this.centroids = new n(o), this.nreset = 0, this.reset()
            }

            function o(e, t) {
                return e.mean > t.mean ? 1 : e.mean < t.mean ? -1 : 0
            }

            function s(e, t) {
                return e.mean_cumn - t.mean_cumn
            }
            i.prototype.reset = function() {
                this.centroids.clear(), this.n = 0, this.nreset += 1, this.last_cumulate = 0
            }, i.prototype.size = function() {
                return this.centroids.size
            }, i.prototype.toArray = function(e) {
                var t = [];
                return e ? (this._cumulate(!0), this.centroids.each(function(e) {
                    t.push(e)
                })) : this.centroids.each(function(e) {
                    t.push({
                        mean: e.mean,
                        n: e.n
                    })
                }), t
            }, i.prototype.summary = function() {
                return [(this.discrete ? "exact " : "approximating ") + this.n + " samples using " + this.size() + " centroids", "min = " + this.percentile(0), "Q1  = " + this.percentile(.25), "Q2  = " + this.percentile(.5), "Q3  = " + this.percentile(.75), "max = " + this.percentile(1)].join("\n")
            }, i.prototype.push = function(e, t) {
                t = t || 1, e = Array.isArray(e) ? e : [e];
                for (var r = 0; r < e.length; r++) this._digest(e[r], t)
            }, i.prototype.push_centroid = function(e) {
                e = Array.isArray(e) ? e : [e];
                for (var t = 0; t < e.length; t++) this._digest(e[t].mean, e[t].n)
            }, i.prototype._cumulate = function(e) {
                if (this.n !== this.last_cumulate && (e || !this.CX || !(this.CX > this.n / this.last_cumulate))) {
                    var t = 0;
                    this.centroids.each(function(e) {
                        e.mean_cumn = t + e.n / 2, t = e.cumn = t + e.n
                    }), this.n = this.last_cumulate = t
                }
            }, i.prototype.find_nearest = function(e) {
                if (0 === this.size()) return null;
                var t = this.centroids.lowerBound({
                        mean: e
                    }),
                    r = null === t.data() ? t.prev() : t.data();
                if (r.mean === e || this.discrete) return r;
                var n = t.prev();
                return n && Math.abs(n.mean - e) < Math.abs(r.mean - e) ? n : r
            }, i.prototype._new_centroid = function(e, t, r) {
                var n = {
                    mean: e,
                    n: t,
                    cumn: r
                };
                return this.centroids.insert(n), this.n += t, n
            }, i.prototype._addweight = function(e, t, r) {
                t !== e.mean && (e.mean += r * (t - e.mean) / (e.n + r)), e.cumn += r, e.mean_cumn += r / 2, e.n += r, this.n += r
            }, i.prototype._digest = function(e, t) {
                var r = this.centroids.min(),
                    n = this.centroids.max(),
                    i = this.find_nearest(e);
                if (i && i.mean === e) this._addweight(i, e, t);
                else if (i === r) this._new_centroid(e, t, 0);
                else if (i === n) this._new_centroid(e, t, this.n);
                else if (this.discrete) this._new_centroid(e, t, i.cumn);
                else {
                    var o = i.mean_cumn / this.n;
                    Math.floor(4 * this.n * this.delta * o * (1 - o)) - i.n >= t ? this._addweight(i, e, t) : this._new_centroid(e, t, i.cumn)
                }
                this._cumulate(!1), !this.discrete && this.K && this.size() > this.K / this.delta && this.compress()
            }, i.prototype.bound_mean = function(e) {
                var t = this.centroids.upperBound({
                        mean: e
                    }),
                    r = t.prev(),
                    n = r.mean === e ? r : t.next();
                return [r, n]
            }, i.prototype.p_rank = function(e) {
                var t = (Array.isArray(e) ? e : [e]).map(this._p_rank, this);
                return Array.isArray(e) ? t : t[0]
            }, i.prototype._p_rank = function(e) {
                if (0 !== this.size()) {
                    if (e < this.centroids.min().mean) return 0;
                    if (e > this.centroids.max().mean) return 1;
                    this._cumulate(!0);
                    var t = this.bound_mean(e),
                        r = t[0],
                        n = t[1];
                    if (this.discrete) return r.cumn / this.n;
                    var i = r.mean_cumn;
                    return r !== n && (i += (e - r.mean) * (n.mean_cumn - r.mean_cumn) / (n.mean - r.mean)), i / this.n
                }
            }, i.prototype.bound_mean_cumn = function(e) {
                this.centroids._comparator = s;
                var t = this.centroids.upperBound({
                    mean_cumn: e
                });
                this.centroids._comparator = o;
                var r = t.prev(),
                    n = r && r.mean_cumn === e ? r : t.next();
                return [r, n]
            }, i.prototype.percentile = function(e) {
                var t = (Array.isArray(e) ? e : [e]).map(this._percentile, this);
                return Array.isArray(e) ? t : t[0]
            }, i.prototype._percentile = function(e) {
                if (0 !== this.size()) {
                    this._cumulate(!0), this.centroids.min(), this.centroids.max();
                    var t = this.n * e,
                        r = this.bound_mean_cumn(t),
                        n = r[0],
                        i = r[1];
                    if (i === n || null === n || null === i) return (n || i).mean;
                    if (!this.discrete) return n.mean + (t - n.mean_cumn) * (i.mean - n.mean) / (i.mean_cumn - n.mean_cumn);
                    else if (t <= n.cumn) return n.mean;
                    else return i.mean
                }
            };

            function a(e) {
                this.config = e || {}, this.mode = this.config.mode || "auto", i.call(this, "cont" === this.mode && e.delta), this.digest_ratio = this.config.ratio || .9, this.digest_thresh = this.config.thresh || 1e3, this.n_unique = 0
            }
            i.prototype.compress = function() {
                if (!this.compressing) {
                    var e = this.toArray();
                    for (this.reset(), this.compressing = !0; e.length > 0;) this.push_centroid(function(e) {
                        var t = Math.floor(Math.random() * e.length);
                        return e.splice(t, 1)[0]
                    }(e));
                    this._cumulate(!0), this.compressing = !1
                }
            }, a.prototype = Object.create(i.prototype), a.prototype.constructor = a, a.prototype.push = function(e) {
                i.prototype.push.call(this, e), this.check_continuous()
            }, a.prototype._new_centroid = function(e, t, r) {
                this.n_unique += 1, i.prototype._new_centroid.call(this, e, t, r)
            }, a.prototype._addweight = function(e, t, r) {
                1 === e.n && (this.n_unique -= 1), i.prototype._addweight.call(this, e, t, r)
            }, a.prototype.check_continuous = function() {
                return !("auto" !== this.mode || this.size() < this.digest_thresh) && !!(this.n_unique / this.size() > this.digest_ratio) && (this.mode = "cont", this.discrete = !1, this.delta = this.config.delta || .01, this.compress(), !0)
            }, e.exports = {
                TDigest: i,
                Digest: a
            }
        },
        231638: function(e, t, r) {
            r("70102"), r("222007"), r("424973"), r("101997"), r("781738"), r("274635"), r("506083"), r("808653"), ! function e(t, r, n) {
                function i(s, a) {
                    if (!r[s]) {
                        if (!t[s]) {
                            if (!a) return (!0)(s, !0);
                            if (o) return o(s, !0);
                            var c = Error("Cannot find module '" + s + "'");
                            throw c.code = "MODULE_NOT_FOUND", c
                        }
                        var p = r[s] = {
                            exports: {}
                        };
                        t[s][0].call(p.exports, function(e) {
                            return i(t[s][1][e] || e)
                        }, p, p.exports, e, t, r, n)
                    }
                    return r[s].exports
                }
                for (var o = void 0, s = 0; s < n.length; s++) i(n[s]);
                return i
            }({
                1: [function(e, t, r) {
                    "use strict";
                    var n = (0, e("./adapter_factory.js").adapterFactory)({
                        window: window
                    });
                    t.exports = n
                }, {
                    "./adapter_factory.js": 2
                }],
                2: [function(e, t, r) {
                    "use strict";
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    }), r.adapterFactory = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.window,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                shimChrome: !0,
                                shimFirefox: !0,
                                shimEdge: !0,
                                shimSafari: !0
                            },
                            p = n.log,
                            u = n.detectBrowser(t),
                            d = {
                                browserDetails: u,
                                commonShim: c,
                                extractVersion: n.extractVersion,
                                disableLog: n.disableLog,
                                disableWarnings: n.disableWarnings
                            };
                        switch (u.browser) {
                            case "chrome":
                                if (!i || !i.shimPeerConnection || !r.shimChrome) {
                                    p("Chrome shim is not included in this adapter release.");
                                    break
                                }
                                p("adapter.js shimming chrome."), d.browserShim = i, i.shimGetUserMedia(t), i.shimMediaStream(t), i.shimPeerConnection(t), i.shimOnTrack(t), i.shimAddTrackRemoveTrack(t), i.shimGetSendersWithDtmf(t), i.shimGetStats(t), i.shimSenderReceiverGetStats(t), i.fixNegotiationNeeded(t), c.shimRTCIceCandidate(t), c.shimConnectionState(t), c.shimMaxMessageSize(t), c.shimSendThrowTypeError(t), c.removeAllowExtmapMixed(t);
                                break;
                            case "firefox":
                                if (!s || !s.shimPeerConnection || !r.shimFirefox) {
                                    p("Firefox shim is not included in this adapter release.");
                                    break
                                }
                                p("adapter.js shimming firefox."), d.browserShim = s, s.shimGetUserMedia(t), s.shimPeerConnection(t), s.shimOnTrack(t), s.shimRemoveStream(t), s.shimSenderGetStats(t), s.shimReceiverGetStats(t), s.shimRTCDataChannel(t), s.shimAddTransceiver(t), s.shimCreateOffer(t), s.shimCreateAnswer(t), c.shimRTCIceCandidate(t), c.shimConnectionState(t), c.shimMaxMessageSize(t), c.shimSendThrowTypeError(t);
                                break;
                            case "edge":
                                if (!o || !o.shimPeerConnection || !r.shimEdge) {
                                    p("MS edge shim is not included in this adapter release.");
                                    break
                                }
                                p("adapter.js shimming edge."), d.browserShim = o, o.shimGetUserMedia(t), o.shimGetDisplayMedia(t), o.shimPeerConnection(t), o.shimReplaceTrack(t), c.shimMaxMessageSize(t), c.shimSendThrowTypeError(t);
                                break;
                            case "safari":
                                if (!a || !r.shimSafari) {
                                    p("Safari shim is not included in this adapter release.");
                                    break
                                }
                                p("adapter.js shimming safari."), d.browserShim = a, a.shimRTCIceServerUrls(t), a.shimCreateOfferLegacy(t), a.shimCallbacksAPI(t), a.shimLocalStreamsAPI(t), a.shimRemoteStreamsAPI(t), a.shimTrackEventTransceiver(t), a.shimGetUserMedia(t), c.shimRTCIceCandidate(t), c.shimMaxMessageSize(t), c.shimSendThrowTypeError(t), c.removeAllowExtmapMixed(t);
                                break;
                            default:
                                p("Unsupported browser!")
                        }
                        return d
                    };
                    var n = p(e("./utils")),
                        i = p(e("./chrome/chrome_shim")),
                        o = p(e("./edge/edge_shim")),
                        s = p(e("./firefox/firefox_shim")),
                        a = p(e("./safari/safari_shim")),
                        c = p(e("./common_shim"));

                    function p(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        return t.default = e, t
                    }
                }, {
                    "./chrome/chrome_shim": 3,
                    "./common_shim": 6,
                    "./edge/edge_shim": 12,
                    "./firefox/firefox_shim": 7,
                    "./safari/safari_shim": 10,
                    "./utils": 11
                }],
                3: [function(e, t, r) {
                    "use strict";
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    }), r.shimGetDisplayMedia = r.shimGetUserMedia = void 0;
                    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                        i = e("./getusermedia");
                    Object.defineProperty(r, "shimGetUserMedia", {
                        enumerable: !0,
                        get: function() {
                            return i.shimGetUserMedia
                        }
                    });
                    var o = e("./getdisplaymedia");
                    Object.defineProperty(r, "shimGetDisplayMedia", {
                        enumerable: !0,
                        get: function() {
                            return o.shimGetDisplayMedia
                        }
                    }), r.shimMediaStream = function(e) {
                        e.MediaStream = e.MediaStream || e.webkitMediaStream
                    }, r.shimOnTrack = function(e) {
                        if ((void 0 === e ? "undefined" : n(e)) !== "object" || !e.RTCPeerConnection || "ontrack" in e.RTCPeerConnection.prototype) s.wrapPeerConnectionEvent(e, "track", function(e) {
                            return !e.transceiver && Object.defineProperty(e, "transceiver", {
                                value: {
                                    receiver: e.receiver
                                }
                            }), e
                        });
                        else {
                            Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
                                get: function() {
                                    return this._ontrack
                                },
                                set: function(e) {
                                    this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e)
                                },
                                enumerable: !0,
                                configurable: !0
                            });
                            var t = e.RTCPeerConnection.prototype.setRemoteDescription;
                            e.RTCPeerConnection.prototype.setRemoteDescription = function() {
                                var r = this;
                                return !this._ontrackpoly && (this._ontrackpoly = function(t) {
                                    t.stream.addEventListener("addtrack", function(n) {
                                        var i = void 0;
                                        i = e.RTCPeerConnection.prototype.getReceivers ? r.getReceivers().find(function(e) {
                                            return e.track && e.track.id === n.track.id
                                        }) : {
                                            track: n.track
                                        };
                                        var o = new Event("track");
                                        o.track = n.track, o.receiver = i, o.transceiver = {
                                            receiver: i
                                        }, o.streams = [t.stream], r.dispatchEvent(o)
                                    }), t.stream.getTracks().forEach(function(n) {
                                        var i = void 0;
                                        i = e.RTCPeerConnection.prototype.getReceivers ? r.getReceivers().find(function(e) {
                                            return e.track && e.track.id === n.id
                                        }) : {
                                            track: n
                                        };
                                        var o = new Event("track");
                                        o.track = n, o.receiver = i, o.transceiver = {
                                            receiver: i
                                        }, o.streams = [t.stream], r.dispatchEvent(o)
                                    })
                                }, this.addEventListener("addstream", this._ontrackpoly)), t.apply(this, arguments)
                            }
                        }
                    }, r.shimGetSendersWithDtmf = function(e) {
                        if ((void 0 === e ? "undefined" : n(e)) === "object" && e.RTCPeerConnection && !("getSenders" in e.RTCPeerConnection.prototype) && "createDTMFSender" in e.RTCPeerConnection.prototype) {
                            var t = function(e, t) {
                                return {
                                    track: t,
                                    get dtmf() {
                                        return void 0 === this._dtmf && ("audio" === t.kind ? this._dtmf = e.createDTMFSender(t) : this._dtmf = null), this._dtmf
                                    },
                                    _pc: e
                                }
                            };
                            if (!e.RTCPeerConnection.prototype.getSenders) {
                                e.RTCPeerConnection.prototype.getSenders = function() {
                                    return this._senders = this._senders || [], this._senders.slice()
                                };
                                var r = e.RTCPeerConnection.prototype.addTrack;
                                e.RTCPeerConnection.prototype.addTrack = function(e, n) {
                                    var i = r.apply(this, arguments);
                                    return !i && (i = t(this, e), this._senders.push(i)), i
                                };
                                var i = e.RTCPeerConnection.prototype.removeTrack;
                                e.RTCPeerConnection.prototype.removeTrack = function(e) {
                                    i.apply(this, arguments);
                                    var t = this._senders.indexOf(e); - 1 !== t && this._senders.splice(t, 1)
                                }
                            }
                            var o = e.RTCPeerConnection.prototype.addStream;
                            e.RTCPeerConnection.prototype.addStream = function(e) {
                                var r = this;
                                this._senders = this._senders || [], o.apply(this, [e]), e.getTracks().forEach(function(e) {
                                    r._senders.push(t(r, e))
                                })
                            };
                            var s = e.RTCPeerConnection.prototype.removeStream;
                            e.RTCPeerConnection.prototype.removeStream = function(e) {
                                var t = this;
                                this._senders = this._senders || [], s.apply(this, [e]), e.getTracks().forEach(function(e) {
                                    var r = t._senders.find(function(t) {
                                        return t.track === e
                                    });
                                    r && t._senders.splice(t._senders.indexOf(r), 1)
                                })
                            }
                        } else if ((void 0 === e ? "undefined" : n(e)) === "object" && e.RTCPeerConnection && "getSenders" in e.RTCPeerConnection.prototype && "createDTMFSender" in e.RTCPeerConnection.prototype && e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype)) {
                            var a = e.RTCPeerConnection.prototype.getSenders;
                            e.RTCPeerConnection.prototype.getSenders = function() {
                                var e = this,
                                    t = a.apply(this, []);
                                return t.forEach(function(t) {
                                    return t._pc = e
                                }), t
                            }, Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                                get: function() {
                                    return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf
                                }
                            })
                        }
                    }, r.shimGetStats = function(e) {
                        if (e.RTCPeerConnection) {
                            var t = e.RTCPeerConnection.prototype.getStats;
                            e.RTCPeerConnection.prototype.getStats = function() {
                                var e = this,
                                    r = Array.prototype.slice.call(arguments),
                                    n = r[0],
                                    i = r[1],
                                    o = r[2];
                                if (arguments.length > 0 && "function" == typeof n) return t.apply(this, arguments);
                                if (0 === t.length && (0 == arguments.length || "function" != typeof n)) return t.apply(this, []);
                                var s = function(e) {
                                        var t = {};
                                        return e.result().forEach(function(e) {
                                            var r = {
                                                id: e.id,
                                                timestamp: e.timestamp,
                                                type: {
                                                    localcandidate: "local-candidate",
                                                    remotecandidate: "remote-candidate"
                                                } [e.type] || e.type
                                            };
                                            e.names().forEach(function(t) {
                                                r[t] = e.stat(t)
                                            }), t[r.id] = r
                                        }), t
                                    },
                                    a = function(e) {
                                        return new Map(Object.keys(e).map(function(t) {
                                            return [t, e[t]]
                                        }))
                                    };
                                return arguments.length >= 2 ? t.apply(this, [function(e) {
                                    i(a(s(e)))
                                }, n]) : new Promise(function(r, n) {
                                    t.apply(e, [function(e) {
                                        r(a(s(e)))
                                    }, n])
                                }).then(i, o)
                            }
                        }
                    }, r.shimSenderReceiverGetStats = function(e) {
                        if (!!((void 0 === e ? "undefined" : n(e)) === "object" && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver)) {
                            if (!("getStats" in e.RTCRtpSender.prototype)) {
                                var t = e.RTCPeerConnection.prototype.getSenders;
                                t && (e.RTCPeerConnection.prototype.getSenders = function() {
                                    var e = this,
                                        r = t.apply(this, []);
                                    return r.forEach(function(t) {
                                        return t._pc = e
                                    }), r
                                });
                                var r = e.RTCPeerConnection.prototype.addTrack;
                                r && (e.RTCPeerConnection.prototype.addTrack = function() {
                                    var e = r.apply(this, arguments);
                                    return e._pc = this, e
                                }), e.RTCRtpSender.prototype.getStats = function() {
                                    var e = this;
                                    return this._pc.getStats().then(function(t) {
                                        return s.filterStats(t, e.track, !0)
                                    })
                                }
                            }
                            if (!("getStats" in e.RTCRtpReceiver.prototype)) {
                                var i = e.RTCPeerConnection.prototype.getReceivers;
                                i && (e.RTCPeerConnection.prototype.getReceivers = function() {
                                    var e = this,
                                        t = i.apply(this, []);
                                    return t.forEach(function(t) {
                                        return t._pc = e
                                    }), t
                                }), s.wrapPeerConnectionEvent(e, "track", function(e) {
                                    return e.receiver._pc = e.srcElement, e
                                }), e.RTCRtpReceiver.prototype.getStats = function() {
                                    var e = this;
                                    return this._pc.getStats().then(function(t) {
                                        return s.filterStats(t, e.track, !1)
                                    })
                                }
                            }
                            if ("getStats" in e.RTCRtpSender.prototype && "getStats" in e.RTCRtpReceiver.prototype) {
                                var o = e.RTCPeerConnection.prototype.getStats;
                                e.RTCPeerConnection.prototype.getStats = function() {
                                    if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
                                        var t = arguments[0],
                                            r = void 0,
                                            n = void 0,
                                            i = void 0;
                                        if (this.getSenders().forEach(function(e) {
                                                e.track === t && (r ? i = !0 : r = e)
                                            }), this.getReceivers().forEach(function(e) {
                                                return e.track === t && (n ? i = !0 : n = e), e.track === t
                                            }), i || r && n) return Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError"));
                                        if (r) return r.getStats();
                                        else if (n) return n.getStats();
                                        return Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"))
                                    }
                                    return o.apply(this, arguments)
                                }
                            }
                        }
                    }, r.shimAddTrackRemoveTrackWithNative = c, r.shimAddTrackRemoveTrack = function(e) {
                        if (e.RTCPeerConnection) {
                            var t = s.detectBrowser(e);
                            if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return c(e);
                            var r = e.RTCPeerConnection.prototype.getLocalStreams;
                            e.RTCPeerConnection.prototype.getLocalStreams = function() {
                                var e = this,
                                    t = r.apply(this);
                                return this._reverseStreams = this._reverseStreams || {}, t.map(function(t) {
                                    return e._reverseStreams[t.id]
                                })
                            };
                            var n = e.RTCPeerConnection.prototype.addStream;
                            e.RTCPeerConnection.prototype.addStream = function(t) {
                                var r = this;
                                if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, t.getTracks().forEach(function(e) {
                                        if (r.getSenders().find(function(t) {
                                                return t.track === e
                                            })) throw new DOMException("Track already exists.", "InvalidAccessError")
                                    }), !this._reverseStreams[t.id]) {
                                    var i = new e.MediaStream(t.getTracks());
                                    this._streams[t.id] = i, this._reverseStreams[i.id] = t, t = i
                                }
                                n.apply(this, [t])
                            };
                            var i = e.RTCPeerConnection.prototype.removeStream;
                            e.RTCPeerConnection.prototype.removeStream = function(e) {
                                this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, i.apply(this, [this._streams[e.id] || e]), delete this._reverseStreams[this._streams[e.id] ? this._streams[e.id].id : e.id], delete this._streams[e.id]
                            }, e.RTCPeerConnection.prototype.addTrack = function(t, r) {
                                var n = this;
                                if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                                var i = [].slice.call(arguments, 1);
                                if (1 !== i.length || !i[0].getTracks().find(function(e) {
                                        return e === t
                                    })) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
                                if (this.getSenders().find(function(e) {
                                        return e.track === t
                                    })) throw new DOMException("Track already exists.", "InvalidAccessError");
                                this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
                                var o = this._streams[r.id];
                                if (o) o.addTrack(t), Promise.resolve().then(function() {
                                    n.dispatchEvent(new Event("negotiationneeded"))
                                });
                                else {
                                    var s = new e.MediaStream([t]);
                                    this._streams[r.id] = s, this._reverseStreams[s.id] = r, this.addStream(s)
                                }
                                return this.getSenders().find(function(e) {
                                    return e.track === t
                                })
                            }, ["createOffer", "createAnswer"].forEach(function(t) {
                                var r = e.RTCPeerConnection.prototype[t],
                                    n = a({}, t, function() {
                                        var e = this,
                                            t = arguments,
                                            n = arguments.length && "function" == typeof arguments[0];
                                        return n ? r.apply(this, [function(r) {
                                            var n = u(e, r);
                                            t[0].apply(null, [n])
                                        }, function(e) {
                                            t[1] && t[1].apply(null, e)
                                        }, arguments[2]]) : r.apply(this, arguments).then(function(t) {
                                            return u(e, t)
                                        })
                                    });
                                e.RTCPeerConnection.prototype[t] = n[t]
                            });
                            var o = e.RTCPeerConnection.prototype.setLocalDescription;
                            e.RTCPeerConnection.prototype.setLocalDescription = function() {
                                return arguments.length && arguments[0].type ? (arguments[0] = function(e, t) {
                                    var r = t.sdp;
                                    return Object.keys(e._reverseStreams || []).forEach(function(t) {
                                        var n = e._reverseStreams[t],
                                            i = e._streams[n.id];
                                        r = r.replace(RegExp(n.id, "g"), i.id)
                                    }), new RTCSessionDescription({
                                        type: t.type,
                                        sdp: r
                                    })
                                }(this, arguments[0]), o.apply(this, arguments)) : o.apply(this, arguments)
                            };
                            var p = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
                            Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
                                get: function() {
                                    var e = p.get.apply(this);
                                    return "" === e.type ? e : u(this, e)
                                }
                            }), e.RTCPeerConnection.prototype.removeTrack = function(e) {
                                var t = this;
                                if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                                if (!e._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
                                if (e._pc !== this) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
                                this._streams = this._streams || {};
                                var r = void 0;
                                Object.keys(this._streams).forEach(function(n) {
                                    t._streams[n].getTracks().find(function(t) {
                                        return e.track === t
                                    }) && (r = t._streams[n])
                                }), r && (1 === r.getTracks().length ? this.removeStream(this._reverseStreams[r.id]) : r.removeTrack(e.track), this.dispatchEvent(new Event("negotiationneeded")))
                            }
                        }

                        function u(e, t) {
                            var r = t.sdp;
                            return Object.keys(e._reverseStreams || []).forEach(function(t) {
                                var n = e._reverseStreams[t],
                                    i = e._streams[n.id];
                                r = r.replace(RegExp(i.id, "g"), n.id)
                            }), new RTCSessionDescription({
                                type: t.type,
                                sdp: r
                            })
                        }
                    }, r.shimPeerConnection = function(e) {
                        var t = s.detectBrowser(e);
                        if (!e.RTCPeerConnection && e.webkitRTCPeerConnection && (e.RTCPeerConnection = e.webkitRTCPeerConnection), e.RTCPeerConnection) {
                            var r = 0 === e.RTCPeerConnection.prototype.addIceCandidate.length;
                            t.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t) {
                                var r = e.RTCPeerConnection.prototype[t],
                                    n = a({}, t, function() {
                                        return arguments[0] = new("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), r.apply(this, arguments)
                                    });
                                e.RTCPeerConnection.prototype[t] = n[t]
                            });
                            var n = e.RTCPeerConnection.prototype.addIceCandidate;
                            e.RTCPeerConnection.prototype.addIceCandidate = function() {
                                return r || arguments[0] ? t.version < 78 && arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : n.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
                            }
                        }
                    }, r.fixNegotiationNeeded = function(e) {
                        s.wrapPeerConnectionEvent(e, "negotiationneeded", function(e) {
                            if ("stable" === e.target.signalingState) return e
                        })
                    };
                    var s = function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        return t.default = e, t
                    }(e("../utils.js"));

                    function a(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function c(e) {
                        e.RTCPeerConnection.prototype.getLocalStreams = function() {
                            var e = this;
                            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(function(t) {
                                return e._shimmedLocalStreams[t][0]
                            })
                        };
                        var t = e.RTCPeerConnection.prototype.addTrack;
                        e.RTCPeerConnection.prototype.addTrack = function(e, r) {
                            if (!r) return t.apply(this, arguments);
                            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                            var n = t.apply(this, arguments);
                            return this._shimmedLocalStreams[r.id] ? -1 === this._shimmedLocalStreams[r.id].indexOf(n) && this._shimmedLocalStreams[r.id].push(n) : this._shimmedLocalStreams[r.id] = [r, n], n
                        };
                        var r = e.RTCPeerConnection.prototype.addStream;
                        e.RTCPeerConnection.prototype.addStream = function(e) {
                            var t = this;
                            this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e.getTracks().forEach(function(e) {
                                if (t.getSenders().find(function(t) {
                                        return t.track === e
                                    })) throw new DOMException("Track already exists.", "InvalidAccessError")
                            });
                            var n = this.getSenders();
                            r.apply(this, arguments);
                            var i = this.getSenders().filter(function(e) {
                                return -1 === n.indexOf(e)
                            });
                            this._shimmedLocalStreams[e.id] = [e].concat(i)
                        };
                        var n = e.RTCPeerConnection.prototype.removeStream;
                        e.RTCPeerConnection.prototype.removeStream = function(e) {
                            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e.id], n.apply(this, arguments)
                        };
                        var i = e.RTCPeerConnection.prototype.removeTrack;
                        e.RTCPeerConnection.prototype.removeTrack = function(e) {
                            var t = this;
                            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e && Object.keys(this._shimmedLocalStreams).forEach(function(r) {
                                var n = t._shimmedLocalStreams[r].indexOf(e); - 1 !== n && t._shimmedLocalStreams[r].splice(n, 1), 1 === t._shimmedLocalStreams[r].length && delete t._shimmedLocalStreams[r]
                            }), i.apply(this, arguments)
                        }
                    }
                }, {
                    "../utils.js": 11,
                    "./getdisplaymedia": 4,
                    "./getusermedia": 5
                }],
                4: [function(e, t, r) {
                    "use strict";
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    }), r.shimGetDisplayMedia = function(e, t) {
                        if (!e.navigator.mediaDevices || !("getDisplayMedia" in e.navigator.mediaDevices)) {
                            if (e.navigator.mediaDevices) {
                                if ("function" != typeof t) {
                                    console.error("shimGetDisplayMedia: getSourceId argument is not a function");
                                    return
                                }
                                e.navigator.mediaDevices.getDisplayMedia = function(r) {
                                    return t(r).then(function(t) {
                                        var n = r.video && r.video.width,
                                            i = r.video && r.video.height,
                                            o = r.video && r.video.frameRate;
                                        return r.video = {
                                            mandatory: {
                                                chromeMediaSource: "desktop",
                                                chromeMediaSourceId: t,
                                                maxFrameRate: o || 3
                                            }
                                        }, n && (r.video.mandatory.maxWidth = n), i && (r.video.mandatory.maxHeight = i), e.navigator.mediaDevices.getUserMedia(r)
                                    })
                                }
                            }
                        }
                    }
                }, {}],
                5: [function(e, t, r) {
                    "use strict";
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    });
                    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };
                    r.shimGetUserMedia = function(e) {
                        var t = e && e.navigator;
                        if (t.mediaDevices) {
                            var r = i.detectBrowser(e),
                                s = function(e) {
                                    if ((void 0 === e ? "undefined" : n(e)) !== "object" || e.mandatory || e.optional) return e;
                                    var t = {};
                                    return Object.keys(e).forEach(function(r) {
                                        if ("require" !== r && "advanced" !== r && "mediaSource" !== r) {
                                            var i = "object" === n(e[r]) ? e[r] : {
                                                ideal: e[r]
                                            };
                                            void 0 !== i.exact && "number" == typeof i.exact && (i.min = i.max = i.exact);
                                            var o = function(e, t) {
                                                return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t
                                            };
                                            if (void 0 !== i.ideal) {
                                                t.optional = t.optional || [];
                                                var s = {};
                                                "number" == typeof i.ideal ? (s[o("min", r)] = i.ideal, t.optional.push(s), (s = {})[o("max", r)] = i.ideal) : s[o("", r)] = i.ideal, t.optional.push(s)
                                            }
                                            void 0 !== i.exact && "number" != typeof i.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[o("", r)] = i.exact) : ["min", "max"].forEach(function(e) {
                                                void 0 !== i[e] && (t.mandatory = t.mandatory || {}, t.mandatory[o(e, r)] = i[e])
                                            })
                                        }
                                    }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t
                                },
                                a = function(e, i) {
                                    if (r.version >= 61) return i(e);
                                    if ((e = JSON.parse(JSON.stringify(e))) && "object" === n(e.audio)) {
                                        var a = function(e, t, r) {
                                            t in e && !(r in e) && (e[r] = e[t], delete e[t])
                                        };
                                        a((e = JSON.parse(JSON.stringify(e))).audio, "autoGainControl", "googAutoGainControl"), a(e.audio, "noiseSuppression", "googNoiseSuppression"), e.audio = s(e.audio)
                                    }
                                    if (e && "object" === n(e.video)) {
                                        var c = e.video.facingMode;
                                        c = c && ((void 0 === c ? "undefined" : n(c)) === "object" ? c : {
                                            ideal: c
                                        });
                                        var p = r.version < 66;
                                        if (c && ("user" === c.exact || "environment" === c.exact || "user" === c.ideal || "environment" === c.ideal) && !(t.mediaDevices.getSupportedConstraints && t.mediaDevices.getSupportedConstraints().facingMode && !p)) {
                                            delete e.video.facingMode;
                                            var u = void 0;
                                            if ("environment" === c.exact || "environment" === c.ideal ? u = ["back", "rear"] : ("user" === c.exact || "user" === c.ideal) && (u = ["front"]), u) return t.mediaDevices.enumerateDevices().then(function(t) {
                                                var r = (t = t.filter(function(e) {
                                                    return "videoinput" === e.kind
                                                })).find(function(e) {
                                                    return u.some(function(t) {
                                                        return e.label.toLowerCase().includes(t)
                                                    })
                                                });
                                                return !r && t.length && u.includes("back") && (r = t[t.length - 1]), r && (e.video.deviceId = c.exact ? {
                                                    exact: r.deviceId
                                                } : {
                                                    ideal: r.deviceId
                                                }), e.video = s(e.video), o("chrome: " + JSON.stringify(e)), i(e)
                                            })
                                        }
                                        e.video = s(e.video)
                                    }
                                    return o("chrome: " + JSON.stringify(e)), i(e)
                                },
                                c = function(e) {
                                    return r.version >= 64 ? e : {
                                        name: ({
                                            PermissionDeniedError: "NotAllowedError",
                                            PermissionDismissedError: "NotAllowedError",
                                            InvalidStateError: "NotAllowedError",
                                            DevicesNotFoundError: "NotFoundError",
                                            ConstraintNotSatisfiedError: "OverconstrainedError",
                                            TrackStartError: "NotReadableError",
                                            MediaDeviceFailedDueToShutdown: "NotAllowedError",
                                            MediaDeviceKillSwitchOn: "NotAllowedError",
                                            TabCaptureError: "AbortError",
                                            ScreenCaptureError: "AbortError",
                                            DeviceCaptureError: "AbortError"
                                        })[e.name] || e.name,
                                        message: e.message,
                                        constraint: e.constraint || e.constraintName,
                                        toString: function() {
                                            return this.name + (this.message && ": ") + this.message
                                        }
                                    }
                                };
                            if (t.getUserMedia = (function(e, r, n) {
                                    a(e, function(e) {
                                        t.webkitGetUserMedia(e, r, function(e) {
                                            n && n(c(e))
                                        })
                                    })
                                }).bind(t), t.mediaDevices.getUserMedia) {
                                var p = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
                                t.mediaDevices.getUserMedia = function(e) {
                                    return a(e, function(e) {
                                        return p(e).then(function(t) {
                                            if (e.audio && !t.getAudioTracks().length || e.video && !t.getVideoTracks().length) throw t.getTracks().forEach(function(e) {
                                                e.stop()
                                            }), new DOMException("", "NotFoundError");
                                            return t
                                        }, function(e) {
                                            return Promise.reject(c(e))
                                        })
                                    })
                                }
                            }
                        }
                    };
                    var i = function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t.default = e, t
                        }(e("../utils.js")),
                        o = i.log
                }, {
                    "../utils.js": 11
                }],
                6: [function(e, t, r) {
                    "use strict";
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    });
                    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };
                    r.shimRTCIceCandidate = function(e) {
                        if (e.RTCIceCandidate && (!e.RTCIceCandidate || !("foundation" in e.RTCIceCandidate.prototype))) {
                            var t = e.RTCIceCandidate;
                            e.RTCIceCandidate = function(e) {
                                if ((void 0 === e ? "undefined" : n(e)) === "object" && e.candidate && 0 === e.candidate.indexOf("a=") && ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(2)), e.candidate && e.candidate.length) {
                                    var r = Object.assign(new t(e), i.default.parseCandidate(e.candidate));
                                    return r.toJSON = function() {
                                        return {
                                            candidate: r.candidate,
                                            sdpMid: r.sdpMid,
                                            sdpMLineIndex: r.sdpMLineIndex,
                                            usernameFragment: r.usernameFragment
                                        }
                                    }, r
                                }
                                return new t(e)
                            }, e.RTCIceCandidate.prototype = t.prototype, o.wrapPeerConnectionEvent(e, "icecandidate", function(t) {
                                return t.candidate && Object.defineProperty(t, "candidate", {
                                    value: new e.RTCIceCandidate(t.candidate),
                                    writable: "false"
                                }), t
                            })
                        }
                    }, r.shimMaxMessageSize = function(e) {
                        if (e.RTCPeerConnection) {
                            var t = o.detectBrowser(e);
                            !("sctp" in e.RTCPeerConnection.prototype) && Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
                                get: function() {
                                    return void 0 === this._sctp ? null : this._sctp
                                }
                            });
                            var r = function(e) {
                                    if (!e || !e.sdp) return !1;
                                    var t = i.default.splitSections(e.sdp);
                                    return t.shift(), t.some(function(e) {
                                        var t = i.default.parseMLine(e);
                                        return t && "application" === t.kind && -1 !== t.protocol.indexOf("SCTP")
                                    })
                                },
                                n = function(e) {
                                    var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                                    if (null === t || t.length < 2) return -1;
                                    var r = parseInt(t[1], 10);
                                    return r != r ? -1 : r
                                },
                                s = function(e) {
                                    var r = 65536;
                                    return "firefox" === t.browser && (r = t.version < 57 ? -1 === e ? 16384 : 2147483637 : t.version < 60 ? 57 === t.version ? 65535 : 65536 : 2147483637), r
                                },
                                a = function(e, r) {
                                    var n = 65536;
                                    "firefox" === t.browser && 57 === t.version && (n = 65535);
                                    var o = i.default.matchPrefix(e.sdp, "a=max-message-size:");
                                    return o.length > 0 ? n = parseInt(o[0].substr(19), 10) : "firefox" === t.browser && -1 !== r && (n = 2147483637), n
                                },
                                c = e.RTCPeerConnection.prototype.setRemoteDescription;
                            e.RTCPeerConnection.prototype.setRemoteDescription = function() {
                                if (this._sctp = null, "chrome" === t.browser && t.version >= 76 && "plan-b" === this.getConfiguration().sdpSemantics && Object.defineProperty(this, "sctp", {
                                        get: function() {
                                            return void 0 === this._sctp ? null : this._sctp
                                        },
                                        enumerable: !0,
                                        configurable: !0
                                    }), r(arguments[0])) {
                                    var e = n(arguments[0]),
                                        i = s(e),
                                        o = a(arguments[0], e),
                                        p = void 0;
                                    p = 0 === i && 0 === o ? Number.POSITIVE_INFINITY : 0 === i || 0 === o ? Math.max(i, o) : Math.min(i, o);
                                    var u = {};
                                    Object.defineProperty(u, "maxMessageSize", {
                                        get: function() {
                                            return p
                                        }
                                    }), this._sctp = u
                                }
                                return c.apply(this, arguments)
                            }
                        }
                    }, r.shimSendThrowTypeError = function(e) {
                        if (e.RTCPeerConnection && "createDataChannel" in e.RTCPeerConnection.prototype) {
                            var t = e.RTCPeerConnection.prototype.createDataChannel;
                            e.RTCPeerConnection.prototype.createDataChannel = function() {
                                var e = t.apply(this, arguments);
                                return r(e, this), e
                            }, o.wrapPeerConnectionEvent(e, "datachannel", function(e) {
                                return r(e.channel, e.target), e
                            })
                        }

                        function r(e, t) {
                            var r = e.send;
                            e.send = function() {
                                var n = arguments[0],
                                    i = n.length || n.size || n.byteLength;
                                if ("open" === e.readyState && t.sctp && i > t.sctp.maxMessageSize) throw TypeError("Message too large (can send a maximum of " + t.sctp.maxMessageSize + " bytes)");
                                return r.apply(e, arguments)
                            }
                        }
                    }, r.shimConnectionState = function(e) {
                        if (e.RTCPeerConnection && !("connectionState" in e.RTCPeerConnection.prototype)) {
                            var t = e.RTCPeerConnection.prototype;
                            Object.defineProperty(t, "connectionState", {
                                get: function() {
                                    return ({
                                        completed: "connected",
                                        checking: "connecting"
                                    })[this.iceConnectionState] || this.iceConnectionState
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t, "onconnectionstatechange", {
                                get: function() {
                                    return this._onconnectionstatechange || null
                                },
                                set: function(e) {
                                    this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), e && this.addEventListener("connectionstatechange", this._onconnectionstatechange = e)
                                },
                                enumerable: !0,
                                configurable: !0
                            }), ["setLocalDescription", "setRemoteDescription"].forEach(function(e) {
                                var r = t[e];
                                t[e] = function() {
                                    return !this._connectionstatechangepoly && (this._connectionstatechangepoly = function(e) {
                                        var t = e.target;
                                        if (t._lastConnectionState !== t.connectionState) {
                                            t._lastConnectionState = t.connectionState;
                                            var r = new Event("connectionstatechange", e);
                                            t.dispatchEvent(r)
                                        }
                                        return e
                                    }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), r.apply(this, arguments)
                                }
                            })
                        }
                    }, r.removeAllowExtmapMixed = function(e) {
                        if (!!e.RTCPeerConnection) {
                            var t = o.detectBrowser(e);
                            if ("chrome" !== t.browser || !(t.version >= 71)) {
                                var r = e.RTCPeerConnection.prototype.setRemoteDescription;
                                e.RTCPeerConnection.prototype.setRemoteDescription = function(e) {
                                    return e && e.sdp && -1 !== e.sdp.indexOf("\na=extmap-allow-mixed") && (e.sdp = e.sdp.split("\n").filter(function(e) {
                                        return "a=extmap-allow-mixed" !== e.trim()
                                    }).join("\n")), r.apply(this, arguments)
                                }
                            }
                        }
                    };
                    var i = function(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }(e("sdp")),
                        o = function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t.default = e, t
                        }(e("./utils"))
                }, {
                    "./utils": 11,
                    sdp: 13
                }],
                7: [function(e, t, r) {
                    "use strict";
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    }), r.shimGetDisplayMedia = r.shimGetUserMedia = void 0;
                    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                        i = e("./getusermedia");
                    Object.defineProperty(r, "shimGetUserMedia", {
                        enumerable: !0,
                        get: function() {
                            return i.shimGetUserMedia
                        }
                    });
                    var o = e("./getdisplaymedia");
                    Object.defineProperty(r, "shimGetDisplayMedia", {
                        enumerable: !0,
                        get: function() {
                            return o.shimGetDisplayMedia
                        }
                    }), r.shimOnTrack = function(e) {
                        (void 0 === e ? "undefined" : n(e)) === "object" && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                            get: function() {
                                return {
                                    receiver: this.receiver
                                }
                            }
                        })
                    }, r.shimPeerConnection = function(e) {
                        var t = s.detectBrowser(e);
                        if ((void 0 === e ? "undefined" : n(e)) === "object" && (e.RTCPeerConnection || e.mozRTCPeerConnection)) {
                            if (!e.RTCPeerConnection && e.mozRTCPeerConnection && (e.RTCPeerConnection = e.mozRTCPeerConnection), t.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t) {
                                    var r, n, i, o = e.RTCPeerConnection.prototype[t];
                                    var s = (r = {}, n = t, i = function() {
                                        return arguments[0] = new("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), o.apply(this, arguments)
                                    }, n in r ? Object.defineProperty(r, n, {
                                        value: i,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : r[n] = i, r);
                                    e.RTCPeerConnection.prototype[t] = s[t]
                                }), t.version < 68) {
                                var r = e.RTCPeerConnection.prototype.addIceCandidate;
                                e.RTCPeerConnection.prototype.addIceCandidate = function() {
                                    return arguments[0] ? arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : r.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
                                }
                            }
                            var i = {
                                    inboundrtp: "inbound-rtp",
                                    outboundrtp: "outbound-rtp",
                                    candidatepair: "candidate-pair",
                                    localcandidate: "local-candidate",
                                    remotecandidate: "remote-candidate"
                                },
                                o = e.RTCPeerConnection.prototype.getStats;
                            e.RTCPeerConnection.prototype.getStats = function() {
                                var e = Array.prototype.slice.call(arguments),
                                    r = e[0],
                                    n = e[1],
                                    s = e[2];
                                return o.apply(this, [r || null]).then(function(e) {
                                    if (t.version < 53 && !n) try {
                                        e.forEach(function(e) {
                                            e.type = i[e.type] || e.type
                                        })
                                    } catch (t) {
                                        if ("TypeError" !== t.name) throw t;
                                        e.forEach(function(t, r) {
                                            e.set(r, Object.assign({}, t, {
                                                type: i[t.type] || t.type
                                            }))
                                        })
                                    }
                                    return e
                                }).then(n, s)
                            }
                        }
                    }, r.shimSenderGetStats = function(e) {
                        if (!!((void 0 === e ? "undefined" : n(e)) === "object" && e.RTCPeerConnection && e.RTCRtpSender)) {
                            if (!e.RTCRtpSender || !("getStats" in e.RTCRtpSender.prototype)) {
                                var t = e.RTCPeerConnection.prototype.getSenders;
                                t && (e.RTCPeerConnection.prototype.getSenders = function() {
                                    var e = this,
                                        r = t.apply(this, []);
                                    return r.forEach(function(t) {
                                        return t._pc = e
                                    }), r
                                });
                                var r = e.RTCPeerConnection.prototype.addTrack;
                                r && (e.RTCPeerConnection.prototype.addTrack = function() {
                                    var e = r.apply(this, arguments);
                                    return e._pc = this, e
                                }), e.RTCRtpSender.prototype.getStats = function() {
                                    return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map)
                                }
                            }
                        }
                    }, r.shimReceiverGetStats = function(e) {
                        if (!!((void 0 === e ? "undefined" : n(e)) === "object" && e.RTCPeerConnection && e.RTCRtpSender)) {
                            if (!e.RTCRtpSender || !("getStats" in e.RTCRtpReceiver.prototype)) {
                                var t = e.RTCPeerConnection.prototype.getReceivers;
                                t && (e.RTCPeerConnection.prototype.getReceivers = function() {
                                    var e = this,
                                        r = t.apply(this, []);
                                    return r.forEach(function(t) {
                                        return t._pc = e
                                    }), r
                                }), s.wrapPeerConnectionEvent(e, "track", function(e) {
                                    return e.receiver._pc = e.srcElement, e
                                }), e.RTCRtpReceiver.prototype.getStats = function() {
                                    return this._pc.getStats(this.track)
                                }
                            }
                        }
                    }, r.shimRemoveStream = function(e) {
                        e.RTCPeerConnection && !("removeStream" in e.RTCPeerConnection.prototype) && (e.RTCPeerConnection.prototype.removeStream = function(e) {
                            var t = this;
                            s.deprecated("removeStream", "removeTrack"), this.getSenders().forEach(function(r) {
                                r.track && e.getTracks().includes(r.track) && t.removeTrack(r)
                            })
                        })
                    }, r.shimRTCDataChannel = function(e) {
                        e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel)
                    }, r.shimAddTransceiver = function(e) {
                        if ((void 0 === e ? "undefined" : n(e)) === "object" && e.RTCPeerConnection) {
                            var t = e.RTCPeerConnection.prototype.addTransceiver;
                            t && (e.RTCPeerConnection.prototype.addTransceiver = function() {
                                this.setParametersPromises = [];
                                var e = arguments[1],
                                    r = e && "sendEncodings" in e;
                                r && e.sendEncodings.forEach(function(e) {
                                    if ("rid" in e && !/^[a-z0-9]{0,16}$/i.test(e.rid)) throw TypeError("Invalid RID value provided.");
                                    if ("scaleResolutionDownBy" in e && !(parseFloat(e.scaleResolutionDownBy) >= 1)) throw RangeError("scale_resolution_down_by must be >= 1.0");
                                    if ("maxFramerate" in e && !(parseFloat(e.maxFramerate) >= 0)) throw RangeError("max_framerate must be >= 0.0")
                                });
                                var n = t.apply(this, arguments);
                                if (r) {
                                    var i = n.sender,
                                        o = i.getParameters();
                                    !("encodings" in o) && (o.encodings = e.sendEncodings, this.setParametersPromises.push(i.setParameters(o).catch(function() {})))
                                }
                                return n
                            })
                        }
                    }, r.shimCreateOffer = function(e) {
                        if ((void 0 === e ? "undefined" : n(e)) === "object" && e.RTCPeerConnection) {
                            var t = e.RTCPeerConnection.prototype.createOffer;
                            e.RTCPeerConnection.prototype.createOffer = function() {
                                var e = this,
                                    r = arguments;
                                return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(function() {
                                    return t.apply(e, r)
                                }).finally(function() {
                                    e.setParametersPromises = []
                                }) : t.apply(this, arguments)
                            }
                        }
                    }, r.shimCreateAnswer = function(e) {
                        if ((void 0 === e ? "undefined" : n(e)) === "object" && e.RTCPeerConnection) {
                            var t = e.RTCPeerConnection.prototype.createAnswer;
                            e.RTCPeerConnection.prototype.createAnswer = function() {
                                var e = this,
                                    r = arguments;
                                return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(function() {
                                    return t.apply(e, r)
                                }).finally(function() {
                                    e.setParametersPromises = []
                                }) : t.apply(this, arguments)
                            }
                        }
                    };
                    var s = function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        return t.default = e, t
                    }(e("../utils"))
                }, {
                    "../utils": 11,
                    "./getdisplaymedia": 8,
                    "./getusermedia": 9
                }],
                8: [function(e, t, r) {
                    "use strict";
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    }), r.shimGetDisplayMedia = function(e, t) {
                        if (!e.navigator.mediaDevices || !("getDisplayMedia" in e.navigator.mediaDevices)) e.navigator.mediaDevices && (e.navigator.mediaDevices.getDisplayMedia = function(r) {
                            if (!(r && r.video)) {
                                var n = new DOMException("getDisplayMedia without video constraints is undefined");
                                return n.name = "NotFoundError", n.code = 8, Promise.reject(n)
                            }
                            return !0 === r.video ? r.video = {
                                mediaSource: t
                            } : r.video.mediaSource = t, e.navigator.mediaDevices.getUserMedia(r)
                        })
                    }
                }, {}],
                9: [function(e, t, r) {
                    "use strict";
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    });
                    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };
                    r.shimGetUserMedia = function(e) {
                        var t = i.detectBrowser(e),
                            r = e && e.navigator,
                            MediaStreamTrack = e && e.MediaStreamTrack;
                        if (r.getUserMedia = function(e, t, n) {
                                i.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), r.mediaDevices.getUserMedia(e).then(t, n)
                            }, !(t.version > 55 && "autoGainControl" in r.mediaDevices.getSupportedConstraints())) {
                            var o = function(e, t, r) {
                                    t in e && !(r in e) && (e[r] = e[t], delete e[t])
                                },
                                s = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
                            if (r.mediaDevices.getUserMedia = function(e) {
                                    return (void 0 === e ? "undefined" : n(e)) === "object" && "object" === n(e.audio) && (o((e = JSON.parse(JSON.stringify(e))).audio, "autoGainControl", "mozAutoGainControl"), o(e.audio, "noiseSuppression", "mozNoiseSuppression")), s(e)
                                }, MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
                                var a = MediaStreamTrack.prototype.getSettings;
                                MediaStreamTrack.prototype.getSettings = function() {
                                    var e = a.apply(this, arguments);
                                    return o(e, "mozAutoGainControl", "autoGainControl"), o(e, "mozNoiseSuppression", "noiseSuppression"), e
                                }
                            }
                            if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
                                var c = MediaStreamTrack.prototype.applyConstraints;
                                MediaStreamTrack.prototype.applyConstraints = function(e) {
                                    return "audio" === this.kind && (void 0 === e ? "undefined" : n(e)) === "object" && (o(e = JSON.parse(JSON.stringify(e)), "autoGainControl", "mozAutoGainControl"), o(e, "noiseSuppression", "mozNoiseSuppression")), c.apply(this, [e])
                                }
                            }
                        }
                    };
                    var i = function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        return t.default = e, t
                    }(e("../utils"))
                }, {
                    "../utils": 11
                }],
                10: [function(e, t, r) {
                    "use strict";
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    });
                    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };
                    r.shimLocalStreamsAPI = function(e) {
                        if ((void 0 === e ? "undefined" : n(e)) === "object" && e.RTCPeerConnection) {
                            if (!("getLocalStreams" in e.RTCPeerConnection.prototype) && (e.RTCPeerConnection.prototype.getLocalStreams = function() {
                                    return !this._localStreams && (this._localStreams = []), this._localStreams
                                }), !("addStream" in e.RTCPeerConnection.prototype)) {
                                var t = e.RTCPeerConnection.prototype.addTrack;
                                e.RTCPeerConnection.prototype.addStream = function(e) {
                                    var r = this;
                                    !this._localStreams && (this._localStreams = []), !this._localStreams.includes(e) && this._localStreams.push(e), e.getAudioTracks().forEach(function(n) {
                                        return t.call(r, n, e)
                                    }), e.getVideoTracks().forEach(function(n) {
                                        return t.call(r, n, e)
                                    })
                                }, e.RTCPeerConnection.prototype.addTrack = function(e) {
                                    for (var r = this, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                                    return i && i.forEach(function(e) {
                                        r._localStreams ? !r._localStreams.includes(e) && r._localStreams.push(e) : r._localStreams = [e]
                                    }), t.apply(this, arguments)
                                }
                            }!("removeStream" in e.RTCPeerConnection.prototype) && (e.RTCPeerConnection.prototype.removeStream = function(e) {
                                var t = this;
                                !this._localStreams && (this._localStreams = []);
                                var r = this._localStreams.indexOf(e);
                                if (-1 !== r) {
                                    this._localStreams.splice(r, 1);
                                    var n = e.getTracks();
                                    this.getSenders().forEach(function(e) {
                                        n.includes(e.track) && t.removeTrack(e)
                                    })
                                }
                            })
                        }
                    }, r.shimRemoteStreamsAPI = function(e) {
                        if ((void 0 === e ? "undefined" : n(e)) === "object" && e.RTCPeerConnection && (!("getRemoteStreams" in e.RTCPeerConnection.prototype) && (e.RTCPeerConnection.prototype.getRemoteStreams = function() {
                                return this._remoteStreams ? this._remoteStreams : []
                            }), !("onaddstream" in e.RTCPeerConnection.prototype))) {
                            Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
                                get: function() {
                                    return this._onaddstream
                                },
                                set: function(e) {
                                    var t = this;
                                    this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e), this.addEventListener("track", this._onaddstreampoly = function(e) {
                                        e.streams.forEach(function(e) {
                                            if (!t._remoteStreams && (t._remoteStreams = []), !t._remoteStreams.includes(e)) {
                                                t._remoteStreams.push(e);
                                                var r = new Event("addstream");
                                                r.stream = e, t.dispatchEvent(r)
                                            }
                                        })
                                    })
                                }
                            });
                            var t = e.RTCPeerConnection.prototype.setRemoteDescription;
                            e.RTCPeerConnection.prototype.setRemoteDescription = function() {
                                var e = this;
                                return !this._onaddstreampoly && this.addEventListener("track", this._onaddstreampoly = function(t) {
                                    t.streams.forEach(function(t) {
                                        if (!e._remoteStreams && (e._remoteStreams = []), !(e._remoteStreams.indexOf(t) >= 0)) {
                                            e._remoteStreams.push(t);
                                            var r = new Event("addstream");
                                            r.stream = t, e.dispatchEvent(r)
                                        }
                                    })
                                }), t.apply(e, arguments)
                            }
                        }
                    }, r.shimCallbacksAPI = function(e) {
                        if ((void 0 === e ? "undefined" : n(e)) === "object" && e.RTCPeerConnection) {
                            var t = e.RTCPeerConnection.prototype,
                                r = t.createOffer,
                                i = t.createAnswer,
                                o = t.setLocalDescription,
                                s = t.setRemoteDescription,
                                a = t.addIceCandidate;
                            t.createOffer = function(e, t) {
                                var n = arguments.length >= 2 ? arguments[2] : arguments[0],
                                    i = r.apply(this, [n]);
                                return t ? (i.then(e, t), Promise.resolve()) : i
                            }, t.createAnswer = function(e, t) {
                                var r = arguments.length >= 2 ? arguments[2] : arguments[0],
                                    n = i.apply(this, [r]);
                                return t ? (n.then(e, t), Promise.resolve()) : n
                            };
                            var c = function(e, t, r) {
                                var n = o.apply(this, [e]);
                                return r ? (n.then(t, r), Promise.resolve()) : n
                            };
                            t.setLocalDescription = c, c = function(e, t, r) {
                                var n = s.apply(this, [e]);
                                return r ? (n.then(t, r), Promise.resolve()) : n
                            }, t.setRemoteDescription = c, c = function(e, t, r) {
                                var n = a.apply(this, [e]);
                                return r ? (n.then(t, r), Promise.resolve()) : n
                            }, t.addIceCandidate = c
                        }
                    }, r.shimGetUserMedia = function(e) {
                        var t = e && e.navigator;
                        if (t.mediaDevices && t.mediaDevices.getUserMedia) {
                            var r = t.mediaDevices,
                                n = r.getUserMedia.bind(r);
                            t.mediaDevices.getUserMedia = function(e) {
                                return n(o(e))
                            }
                        }!t.getUserMedia && t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = (function(e, r, n) {
                            t.mediaDevices.getUserMedia(e).then(r, n)
                        }).bind(t))
                    }, r.shimConstraints = o, r.shimRTCIceServerUrls = function(e) {
                        var t = e.RTCPeerConnection;
                        e.RTCPeerConnection = function(e, r) {
                            if (e && e.iceServers) {
                                for (var n = [], o = 0; o < e.iceServers.length; o++) {
                                    var s = e.iceServers[o];
                                    !s.hasOwnProperty("urls") && s.hasOwnProperty("url") ? (i.deprecated("RTCIceServer.url", "RTCIceServer.urls"), (s = JSON.parse(JSON.stringify(s))).urls = s.url, delete s.url, n.push(s)) : n.push(e.iceServers[o])
                                }
                                e.iceServers = n
                            }
                            return new t(e, r)
                        }, e.RTCPeerConnection.prototype = t.prototype, "generateCertificate" in e.RTCPeerConnection && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
                            get: function() {
                                return t.generateCertificate
                            }
                        })
                    }, r.shimTrackEventTransceiver = function(e) {
                        (void 0 === e ? "undefined" : n(e)) === "object" && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                            get: function() {
                                return {
                                    receiver: this.receiver
                                }
                            }
                        })
                    }, r.shimCreateOfferLegacy = function(e) {
                        var t = e.RTCPeerConnection.prototype.createOffer;
                        e.RTCPeerConnection.prototype.createOffer = function(e) {
                            if (e) {
                                void 0 !== e.offerToReceiveAudio && (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
                                var r = this.getTransceivers().find(function(e) {
                                    return "audio" === e.receiver.track.kind
                                });
                                !1 === e.offerToReceiveAudio && r ? "sendrecv" === r.direction ? r.setDirection ? r.setDirection("sendonly") : r.direction = "sendonly" : "recvonly" === r.direction && (r.setDirection ? r.setDirection("inactive") : r.direction = "inactive") : !0 === e.offerToReceiveAudio && !r && this.addTransceiver("audio"), void 0 !== e.offerToReceiveVideo && (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
                                var n = this.getTransceivers().find(function(e) {
                                    return "video" === e.receiver.track.kind
                                });
                                !1 === e.offerToReceiveVideo && n ? "sendrecv" === n.direction ? n.setDirection ? n.setDirection("sendonly") : n.direction = "sendonly" : "recvonly" === n.direction && (n.setDirection ? n.setDirection("inactive") : n.direction = "inactive") : !0 === e.offerToReceiveVideo && !n && this.addTransceiver("video")
                            }
                            return t.apply(this, arguments)
                        }
                    };
                    var i = function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        return t.default = e, t
                    }(e("../utils"));

                    function o(e) {
                        return e && void 0 !== e.video ? Object.assign({}, e, {
                            video: i.compactObject(e.video)
                        }) : e
                    }
                }, {
                    "../utils": 11
                }],
                11: [function(e, t, r) {
                    "use strict";
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    });
                    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };
                    r.extractVersion = s, r.wrapPeerConnectionEvent = function(e, t, r) {
                        if (e.RTCPeerConnection) {
                            var n = e.RTCPeerConnection.prototype,
                                i = n.addEventListener;
                            n.addEventListener = function(e, n) {
                                if (e !== t) return i.apply(this, arguments);
                                var o = function(e) {
                                    var t = r(e);
                                    t && n(t)
                                };
                                return this._eventMap = this._eventMap || {}, this._eventMap[n] = o, i.apply(this, [e, o])
                            };
                            var o = n.removeEventListener;
                            n.removeEventListener = function(e, r) {
                                if (e !== t || !this._eventMap || !this._eventMap[r]) return o.apply(this, arguments);
                                var n = this._eventMap[r];
                                return delete this._eventMap[r], o.apply(this, [e, n])
                            }, Object.defineProperty(n, "on" + t, {
                                get: function() {
                                    return this["_on" + t]
                                },
                                set: function(e) {
                                    this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]), e && this.addEventListener(t, this["_on" + t] = e)
                                },
                                enumerable: !0,
                                configurable: !0
                            })
                        }
                    }, r.disableLog = function(e) {
                        return "boolean" != typeof e ? Error("Argument type: " + (void 0 === e ? "undefined" : n(e)) + ". Please use a boolean.") : (i = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled")
                    }, r.disableWarnings = function(e) {
                        return "boolean" != typeof e ? Error("Argument type: " + (void 0 === e ? "undefined" : n(e)) + ". Please use a boolean.") : (o = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"))
                    }, r.log = function() {
                        ("undefined" == typeof window ? "undefined" : n(window)) === "object" && !i && "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments)
                    }, r.deprecated = function(e, t) {
                        o && console.warn(e + " is deprecated, please use " + t + " instead.")
                    }, r.detectBrowser = function(e) {
                        var t = e.navigator,
                            r = {
                                browser: null,
                                version: null
                            };
                        return void 0 !== e && e.navigator ? (t.mozGetUserMedia ? (r.browser = "firefox", r.version = s(t.userAgent, /Firefox\/(\d+)\./, 1)) : t.webkitGetUserMedia || !1 === e.isSecureContext && e.webkitRTCPeerConnection && !e.RTCIceGatherer ? (r.browser = "chrome", r.version = s(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2)) : t.mediaDevices && t.userAgent.match(/Edge\/(\d+).(\d+)$/) ? (r.browser = "edge", r.version = s(t.userAgent, /Edge\/(\d+).(\d+)$/, 2)) : e.RTCPeerConnection && t.userAgent.match(/AppleWebKit\/(\d+)\./) ? (r.browser = "safari", r.version = s(t.userAgent, /AppleWebKit\/(\d+)\./, 1), r.supportsUnifiedPlan = e.RTCRtpTransceiver && "currentDirection" in e.RTCRtpTransceiver.prototype) : r.browser = "Not a supported browser.", r) : (r.browser = "Not a browser.", r)
                    }, r.compactObject = function e(t) {
                        return a(t) ? Object.keys(t).reduce(function(r, n) {
                            var i, o, s, c = a(t[n]),
                                p = c ? e(t[n]) : t[n],
                                u = c && !Object.keys(p).length;
                            if (void 0 === p || u) return r;
                            return Object.assign(r, (i = {}, o = n, s = p, o in i ? Object.defineProperty(i, o, {
                                value: s,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : i[o] = s, i))
                        }, {}) : t
                    }, r.walkStats = c, r.filterStats = function(e, t, r) {
                        var n = r ? "outbound-rtp" : "inbound-rtp",
                            i = new Map;
                        if (null === t) return i;
                        var o = [];
                        return e.forEach(function(e) {
                            "track" === e.type && e.trackIdentifier === t.id && o.push(e)
                        }), o.forEach(function(t) {
                            e.forEach(function(r) {
                                r.type === n && r.trackId === t.id && c(e, r, i)
                            })
                        }), i
                    };
                    var i = !0,
                        o = !0;

                    function s(e, t, r) {
                        var n = e.match(t);
                        return n && n.length >= r && parseInt(n[r], 10)
                    }

                    function a(e) {
                        return "[object Object]" === Object.prototype.toString.call(e)
                    }

                    function c(e, t, r) {
                        !(!t || r.has(t.id)) && (r.set(t.id, t), Object.keys(t).forEach(function(n) {
                            n.endsWith("Id") ? c(e, e.get(t[n]), r) : n.endsWith("Ids") && t[n].forEach(function(t) {
                                c(e, e.get(t), r)
                            })
                        }))
                    }
                }, {}],
                12: [function(e, t, r) {}, {}],
                13: [function(e, t, r) {
                    "use strict";
                    var n = {};
                    n.generateIdentifier = function() {
                        return Math.random().toString(36).substr(2, 10)
                    }, n.localCName = n.generateIdentifier(), n.splitLines = function(e) {
                        return e.trim().split("\n").map(function(e) {
                            return e.trim()
                        })
                    }, n.splitSections = function(e) {
                        return e.split("\nm=").map(function(e, t) {
                            return (t > 0 ? "m=" + e : e).trim() + "\r\n"
                        })
                    }, n.getDescription = function(e) {
                        var t = n.splitSections(e);
                        return t && t[0]
                    }, n.getMediaSections = function(e) {
                        var t = n.splitSections(e);
                        return t.shift(), t
                    }, n.matchPrefix = function(e, t) {
                        return n.splitLines(e).filter(function(e) {
                            return 0 === e.indexOf(t)
                        })
                    }, n.parseCandidate = function(e) {
                        for (var t, r = {
                                foundation: (t = 0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" "))[0],
                                component: parseInt(t[1], 10),
                                protocol: t[2].toLowerCase(),
                                priority: parseInt(t[3], 10),
                                ip: t[4],
                                address: t[4],
                                port: parseInt(t[5], 10),
                                type: t[7]
                            }, n = 8; n < t.length; n += 2) switch (t[n]) {
                            case "raddr":
                                r.relatedAddress = t[n + 1];
                                break;
                            case "rport":
                                r.relatedPort = parseInt(t[n + 1], 10);
                                break;
                            case "tcptype":
                                r.tcpType = t[n + 1];
                                break;
                            case "ufrag":
                                r.ufrag = t[n + 1], r.usernameFragment = t[n + 1];
                                break;
                            default:
                                r[t[n]] = t[n + 1]
                        }
                        return r
                    }, n.writeCandidate = function(e) {
                        var t = [];
                        t.push(e.foundation), t.push(e.component), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.address || e.ip), t.push(e.port);
                        var r = e.type;
                        return t.push("typ"), t.push(r), "host" !== r && e.relatedAddress && e.relatedPort && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)), (e.usernameFragment || e.ufrag) && (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)), "candidate:" + t.join(" ")
                    }, n.parseIceOptions = function(e) {
                        return e.substr(14).split(" ")
                    }, n.parseRtpMap = function(e) {
                        var t = e.substr(9).split(" "),
                            r = {
                                payloadType: parseInt(t.shift(), 10)
                            };
                        return t = t[0].split("/"), r.name = t[0], r.clockRate = parseInt(t[1], 10), r.channels = 3 === t.length ? parseInt(t[2], 10) : 1, r.numChannels = r.channels, r
                    }, n.writeRtpMap = function(e) {
                        var t = e.payloadType;
                        void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
                        var r = e.channels || e.numChannels || 1;
                        return "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== r ? "/" + r : "") + "\r\n"
                    }, n.parseExtmap = function(e) {
                        var t = e.substr(9).split(" ");
                        return {
                            id: parseInt(t[0], 10),
                            direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
                            uri: t[1]
                        }
                    }, n.writeExtmap = function(e) {
                        return "a=extmap:" + (e.id || e.preferredId) + (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") + " " + e.uri + "\r\n"
                    }, n.parseFmtp = function(e) {
                        for (var t, r = {}, n = e.substr(e.indexOf(" ") + 1).split(";"), i = 0; i < n.length; i++) r[(t = n[i].trim().split("="))[0].trim()] = t[1];
                        return r
                    }, n.writeFmtp = function(e) {
                        var t = "",
                            r = e.payloadType;
                        if (void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) {
                            var n = [];
                            Object.keys(e.parameters).forEach(function(t) {
                                e.parameters[t] ? n.push(t + "=" + e.parameters[t]) : n.push(t)
                            }), t += "a=fmtp:" + r + " " + n.join(";") + "\r\n"
                        }
                        return t
                    }, n.parseRtcpFb = function(e) {
                        var t = e.substr(e.indexOf(" ") + 1).split(" ");
                        return {
                            type: t.shift(),
                            parameter: t.join(" ")
                        }
                    }, n.writeRtcpFb = function(e) {
                        var t = "",
                            r = e.payloadType;
                        return void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach(function(e) {
                            t += "a=rtcp-fb:" + r + " " + e.type + (e.parameter && e.parameter.length ? " " + e.parameter : "") + "\r\n"
                        }), t
                    }, n.parseSsrcMedia = function(e) {
                        var t = e.indexOf(" "),
                            r = {
                                ssrc: parseInt(e.substr(7, t - 7), 10)
                            },
                            n = e.indexOf(":", t);
                        return n > -1 ? (r.attribute = e.substr(t + 1, n - t - 1), r.value = e.substr(n + 1)) : r.attribute = e.substr(t + 1), r
                    }, n.parseSsrcGroup = function(e) {
                        var t = e.substr(13).split(" ");
                        return {
                            semantics: t.shift(),
                            ssrcs: t.map(function(e) {
                                return parseInt(e, 10)
                            })
                        }
                    }, n.getMid = function(e) {
                        var t = n.matchPrefix(e, "a=mid:")[0];
                        if (t) return t.substr(6)
                    }, n.parseFingerprint = function(e) {
                        var t = e.substr(14).split(" ");
                        return {
                            algorithm: t[0].toLowerCase(),
                            value: t[1]
                        }
                    }, n.getDtlsParameters = function(e, t) {
                        return {
                            role: "auto",
                            fingerprints: n.matchPrefix(e + t, "a=fingerprint:").map(n.parseFingerprint)
                        }
                    }, n.writeDtlsParameters = function(e, t) {
                        var r = "a=setup:" + t + "\r\n";
                        return e.fingerprints.forEach(function(e) {
                            r += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n"
                        }), r
                    }, n.parseCryptoLine = function(e) {
                        var t = e.substr(9).split(" ");
                        return {
                            tag: parseInt(t[0], 10),
                            cryptoSuite: t[1],
                            keyParams: t[2],
                            sessionParams: t.slice(3)
                        }
                    }, n.writeCryptoLine = function(e) {
                        return "a=crypto:" + e.tag + " " + e.cryptoSuite + " " + ("object" == typeof e.keyParams ? n.writeCryptoKeyParams(e.keyParams) : e.keyParams) + (e.sessionParams ? " " + e.sessionParams.join(" ") : "") + "\r\n"
                    }, n.parseCryptoKeyParams = function(e) {
                        if (0 !== e.indexOf("inline:")) return null;
                        var t = e.substr(7).split("|");
                        return {
                            keyMethod: "inline",
                            keySalt: t[0],
                            lifeTime: t[1],
                            mkiValue: t[2] ? t[2].split(":")[0] : void 0,
                            mkiLength: t[2] ? t[2].split(":")[1] : void 0
                        }
                    }, n.writeCryptoKeyParams = function(e) {
                        return e.keyMethod + ":" + e.keySalt + (e.lifeTime ? "|" + e.lifeTime : "") + (e.mkiValue && e.mkiLength ? "|" + e.mkiValue + ":" + e.mkiLength : "")
                    }, n.getCryptoParameters = function(e, t) {
                        return n.matchPrefix(e + t, "a=crypto:").map(n.parseCryptoLine)
                    }, n.getIceParameters = function(e, t) {
                        var r = n.matchPrefix(e + t, "a=ice-ufrag:")[0],
                            i = n.matchPrefix(e + t, "a=ice-pwd:")[0];
                        return r && i ? {
                            usernameFragment: r.substr(12),
                            password: i.substr(10)
                        } : null
                    }, n.writeIceParameters = function(e) {
                        return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n"
                    }, n.parseRtpParameters = function(e) {
                        for (var t = {
                                codecs: [],
                                headerExtensions: [],
                                fecMechanisms: [],
                                rtcp: []
                            }, r = n.splitLines(e)[0].split(" "), i = 3; i < r.length; i++) {
                            var o = r[i],
                                s = n.matchPrefix(e, "a=rtpmap:" + o + " ")[0];
                            if (s) {
                                var a = n.parseRtpMap(s),
                                    c = n.matchPrefix(e, "a=fmtp:" + o + " ");
                                switch (a.parameters = c.length ? n.parseFmtp(c[0]) : {}, a.rtcpFeedback = n.matchPrefix(e, "a=rtcp-fb:" + o + " ").map(n.parseRtcpFb), t.codecs.push(a), a.name.toUpperCase()) {
                                    case "RED":
                                    case "ULPFEC":
                                        t.fecMechanisms.push(a.name.toUpperCase())
                                }
                            }
                        }
                        return n.matchPrefix(e, "a=extmap:").forEach(function(e) {
                            t.headerExtensions.push(n.parseExtmap(e))
                        }), t
                    }, n.writeRtpDescription = function(e, t) {
                        var r = "";
                        r += "m=" + e + " " + (t.codecs.length > 0 ? "9" : "0") + " UDP/TLS/RTP/SAVPF " + (t.codecs.map(function(e) {
                            return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType
                        }).join(" ") + "\r\n") + "c=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\n", t.codecs.forEach(function(e) {
                            r += n.writeRtpMap(e) + n.writeFmtp(e) + n.writeRtcpFb(e)
                        });
                        var i = 0;
                        return t.codecs.forEach(function(e) {
                            e.maxptime > i && (i = e.maxptime)
                        }), i > 0 && (r += "a=maxptime:" + i + "\r\n"), r += "a=rtcp-mux\r\n", t.headerExtensions && t.headerExtensions.forEach(function(e) {
                            r += n.writeExtmap(e)
                        }), r
                    }, n.parseRtpEncodingParameters = function(e) {
                        var t, r = [],
                            i = n.parseRtpParameters(e),
                            o = -1 !== i.fecMechanisms.indexOf("RED"),
                            s = -1 !== i.fecMechanisms.indexOf("ULPFEC"),
                            a = n.matchPrefix(e, "a=ssrc:").map(function(e) {
                                return n.parseSsrcMedia(e)
                            }).filter(function(e) {
                                return "cname" === e.attribute
                            }),
                            c = a.length > 0 && a[0].ssrc,
                            p = n.matchPrefix(e, "a=ssrc-group:FID").map(function(e) {
                                return e.substr(17).split(" ").map(function(e) {
                                    return parseInt(e, 10)
                                })
                            });
                        p.length > 0 && p[0].length > 1 && p[0][0] === c && (t = p[0][1]), i.codecs.forEach(function(e) {
                            if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
                                var n = {
                                    ssrc: c,
                                    codecPayloadType: parseInt(e.parameters.apt, 10)
                                };
                                c && t && (n.rtx = {
                                    ssrc: t
                                }), r.push(n), o && ((n = JSON.parse(JSON.stringify(n))).fec = {
                                    ssrc: c,
                                    mechanism: s ? "red+ulpfec" : "red"
                                }, r.push(n))
                            }
                        }), 0 === r.length && c && r.push({
                            ssrc: c
                        });
                        var u = n.matchPrefix(e, "b=");
                        return u.length && (u = 0 === u[0].indexOf("b=TIAS:") ? parseInt(u[0].substr(7), 10) : 0 === u[0].indexOf("b=AS:") ? 950 * parseInt(u[0].substr(5), 10) - 16e3 : void 0, r.forEach(function(e) {
                            e.maxBitrate = u
                        })), r
                    }, n.parseRtcpParameters = function(e) {
                        var t = {},
                            r = n.matchPrefix(e, "a=ssrc:").map(function(e) {
                                return n.parseSsrcMedia(e)
                            }).filter(function(e) {
                                return "cname" === e.attribute
                            })[0];
                        r && (t.cname = r.value, t.ssrc = r.ssrc);
                        var i = n.matchPrefix(e, "a=rtcp-rsize");
                        t.reducedSize = i.length > 0, t.compound = 0 === i.length;
                        var o = n.matchPrefix(e, "a=rtcp-mux");
                        return t.mux = o.length > 0, t
                    }, n.parseMsid = function(e) {
                        var t, r = n.matchPrefix(e, "a=msid:");
                        if (1 === r.length) return {
                            stream: (t = r[0].substr(7).split(" "))[0],
                            track: t[1]
                        };
                        var i = n.matchPrefix(e, "a=ssrc:").map(function(e) {
                            return n.parseSsrcMedia(e)
                        }).filter(function(e) {
                            return "msid" === e.attribute
                        });
                        if (i.length > 0) return {
                            stream: (t = i[0].value.split(" "))[0],
                            track: t[1]
                        }
                    }, n.parseSctpDescription = function(e) {
                        var t, r = n.parseMLine(e),
                            i = n.matchPrefix(e, "a=max-message-size:");
                        i.length > 0 && (t = parseInt(i[0].substr(19), 10)), isNaN(t) && (t = 65536);
                        var o = n.matchPrefix(e, "a=sctp-port:");
                        if (o.length > 0) return {
                            port: parseInt(o[0].substr(12), 10),
                            protocol: r.fmt,
                            maxMessageSize: t
                        };
                        if (n.matchPrefix(e, "a=sctpmap:").length > 0) {
                            var s = n.matchPrefix(e, "a=sctpmap:")[0].substr(10).split(" ");
                            return {
                                port: parseInt(s[0], 10),
                                protocol: s[1],
                                maxMessageSize: t
                            }
                        }
                    }, n.writeSctpDescription = function(e, t) {
                        var r = [];
                        return r = "DTLS/SCTP" !== e.protocol ? ["m=" + e.kind + " 9 " + e.protocol + " " + t.protocol + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctp-port:" + t.port + "\r\n"] : ["m=" + e.kind + " 9 " + e.protocol + " " + t.port + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctpmap:" + t.port + " " + t.protocol + " 65535\r\n"], void 0 !== t.maxMessageSize && r.push("a=max-message-size:" + t.maxMessageSize + "\r\n"), r.join("")
                    }, n.generateSessionId = function() {
                        return Math.random().toString().substr(2, 21)
                    }, n.writeSessionBoilerplate = function(e, t, r) {
                        var i;
                        return i = e ? e : n.generateSessionId(), "v=0\r\no=" + (r || "thisisadapterortc") + " " + i + " " + (void 0 !== t ? t : 2) + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
                    }, n.writeMediaSection = function(e, t, r, i) {
                        var o = n.writeRtpDescription(e.kind, t);
                        if (o += n.writeIceParameters(e.iceGatherer.getLocalParameters()) + n.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === r ? "actpass" : "active") + ("a=mid:" + e.mid + "\r\n"), e.direction ? o += "a=" + e.direction + "\r\n" : e.rtpSender && e.rtpReceiver ? o += "a=sendrecv\r\n" : e.rtpSender ? o += "a=sendonly\r\n" : e.rtpReceiver ? o += "a=recvonly\r\n" : o += "a=inactive\r\n", e.rtpSender) {
                            var s = "msid:" + i.id + " " + e.rtpSender.track.id + "\r\n";
                            o += "a=" + s + ("a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + s), e.sendEncodingParameters[0].rtx && (o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + s + ("a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n"))
                        }
                        return o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + n.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + n.localCName + "\r\n"), o
                    }, n.getDirection = function(e, t) {
                        for (var r = n.splitLines(e), i = 0; i < r.length; i++) switch (r[i]) {
                            case "a=sendrecv":
                            case "a=sendonly":
                            case "a=recvonly":
                            case "a=inactive":
                                return r[i].substr(2)
                        }
                        return t ? n.getDirection(t) : "sendrecv"
                    }, n.getKind = function(e) {
                        return n.splitLines(e)[0].split(" ")[0].substr(2)
                    }, n.isRejected = function(e) {
                        return "0" === e.split(" ", 2)[1]
                    }, n.parseMLine = function(e) {
                        var t = n.splitLines(e)[0].substr(2).split(" ");
                        return {
                            kind: t[0],
                            port: parseInt(t[1], 10),
                            protocol: t[2],
                            fmt: t.slice(3).join(" ")
                        }
                    }, n.parseOLine = function(e) {
                        var t = n.matchPrefix(e, "o=")[0].substr(2).split(" ");
                        return {
                            username: t[0],
                            sessionId: t[1],
                            sessionVersion: parseInt(t[2], 10),
                            netType: t[3],
                            addressType: t[4],
                            address: t[5]
                        }
                    }, n.isValidSDP = function(e) {
                        if ("string" != typeof e || 0 === e.length) return !1;
                        for (var t = n.splitLines(e), r = 0; r < t.length; r++)
                            if (t[r].length < 2 || "=" !== t[r].charAt(1)) return !1;
                        return !0
                    }, "object" == typeof t && (t.exports = n)
                }, {}]
            }, {}, [1])
        }
    }
]);
//# sourceMappingURL=49554.34f5589cb37c5b3e60d3.js.map