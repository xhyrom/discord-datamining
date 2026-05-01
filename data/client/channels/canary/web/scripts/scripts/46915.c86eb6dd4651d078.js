(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46915"],
  {
    214958(e, t, i) {
      (e = i.nmd(e)),
        function () {
          "use strict";
          var r = { function: !0, object: !0 },
            n = (r[typeof window] && window) || this,
            a = r[typeof t] && t,
            o = r.object && e && !e.nodeType && e,
            l = a && o && "object" == typeof i.g && i.g;
          l && (l.global === l || l.window === l || l.self === l) && (n = l);
          var s = /\bOpera/,
            b = Object.prototype,
            p = b.hasOwnProperty,
            c = b.toString;
          function d(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
          }
          function u(e) {
            return (e = m(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : d(e);
          }
          function f(e, t) {
            for (var i in e) p.call(e, i) && t(e[i], i, e);
          }
          function S(e) {
            return null == e ? d(e) : c.call(e).slice(8, -1);
          }
          function x(e) {
            return String(e).replace(/([ -])(?!$)/g, "$1?");
          }
          function h(e, t) {
            var i = null,
              r = function (r, n) {
                i = t(i, r, n, e);
              },
              n = -1,
              a = e ? e.length : 0;
            if ("number" == typeof a && a > -1 && a <= 0x1fffffffffffff)
              for (; ++n < a; ) r(e[n], n, e);
            else f(e, r);
            return i;
          }
          function m(e) {
            return String(e).replace(/^ +| +$/g, "");
          }
          function g(e) {
            var t,
              i,
              r,
              a,
              o,
              l = n,
              b = e && "object" == typeof e && "String" != S(e);
            b && ((l = e), (e = null));
            var p = l.navigator || {},
              d = p.userAgent || "";
            e || (e = d);
            var O = b
                ? !!p.likeChrome
                : /\bChrome\b/.test(e) && !/internal|\n/i.test(c.toString()),
              y = "Object",
              M = b && l.java ? "JavaPackage" : S(l.java),
              w = /\bJava/.test(M) && l.java,
              E = w && S(l.environment) == (b ? y : "Environment"),
              v = w ? "a" : "α",
              P = w ? "b" : "β",
              C = l.document || {},
              B = l.operamini || l.opera,
              k = s.test((k = b && B ? B["[[Class]]"] : S(B))) ? k : (B = null),
              W = e,
              R = [],
              A = null,
              I = e == d,
              F = I && B && "function" == typeof B.version && B.version(),
              T = h(
                [
                  { label: "EdgeHTML", pattern: "Edge" },
                  "Trident",
                  { label: "WebKit", pattern: "AppleWebKit" },
                  "iCab",
                  "Presto",
                  "NetFront",
                  "Tasman",
                  "KHTML",
                  "Gecko",
                ],
                function (t, i) {
                  return (
                    t ||
                    (RegExp("\\b" + (i.pattern || x(i)) + "\\b", "i").exec(e) &&
                      (i.label || i))
                  );
                },
              ),
              G = h(
                [
                  "Adobe AIR",
                  "Arora",
                  "Avant Browser",
                  "Breach",
                  "Camino",
                  "Electron",
                  "Epiphany",
                  "Fennec",
                  "Flock",
                  "Galeon",
                  "GreenBrowser",
                  "iCab",
                  "Iceweasel",
                  "K-Meleon",
                  "Konqueror",
                  "Lunascape",
                  "Maxthon",
                  {
                    label: "Microsoft Edge",
                    pattern: "(?:Edge|Edg|EdgA|EdgiOS)",
                  },
                  "Midori",
                  "Nook Browser",
                  "PaleMoon",
                  "PhantomJS",
                  "Raven",
                  "Rekonq",
                  "RockMelt",
                  { label: "Samsung Internet", pattern: "SamsungBrowser" },
                  "SeaMonkey",
                  { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" },
                  "Sleipnir",
                  "SlimBrowser",
                  { label: "SRWare Iron", pattern: "Iron" },
                  "Sunrise",
                  "Swiftfox",
                  "Vivaldi",
                  "Waterfox",
                  "WebPositive",
                  { label: "Yandex Browser", pattern: "YaBrowser" },
                  { label: "UC Browser", pattern: "UCBrowser" },
                  "Opera Mini",
                  { label: "Opera Mini", pattern: "OPiOS" },
                  "Opera",
                  { label: "Opera", pattern: "OPR" },
                  "Chromium",
                  "Chrome",
                  { label: "Chrome", pattern: "(?:HeadlessChrome)" },
                  { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" },
                  { label: "Firefox", pattern: "(?:Firefox|Minefield)" },
                  { label: "Firefox for iOS", pattern: "FxiOS" },
                  { label: "IE", pattern: "IEMobile" },
                  { label: "IE", pattern: "MSIE" },
                  "Safari",
                ],
                function (t, i) {
                  return (
                    t ||
                    (RegExp("\\b" + (i.pattern || x(i)) + "\\b", "i").exec(e) &&
                      (i.label || i))
                  );
                },
              ),
              $ = K([
                { label: "BlackBerry", pattern: "BB10" },
                "BlackBerry",
                { label: "Galaxy S", pattern: "GT-I9000" },
                { label: "Galaxy S2", pattern: "GT-I9100" },
                { label: "Galaxy S3", pattern: "GT-I9300" },
                { label: "Galaxy S4", pattern: "GT-I9500" },
                { label: "Galaxy S5", pattern: "SM-G900" },
                { label: "Galaxy S6", pattern: "SM-G920" },
                { label: "Galaxy S6 Edge", pattern: "SM-G925" },
                { label: "Galaxy S7", pattern: "SM-G930" },
                { label: "Galaxy S7 Edge", pattern: "SM-G935" },
                "Google TV",
                "Lumia",
                "iPad",
                "iPod",
                "iPhone",
                "Kindle",
                {
                  label: "Kindle Fire",
                  pattern: "(?:Cloud9|Silk-Accelerated)",
                },
                "Nexus",
                "Nook",
                "PlayBook",
                "PlayStation Vita",
                "PlayStation",
                "TouchPad",
                "Transformer",
                { label: "Wii U", pattern: "WiiU" },
                "Wii",
                "Xbox One",
                { label: "Xbox 360", pattern: "Xbox" },
                "Xoom",
              ]),
              X = h(
                {
                  Apple: { iPad: 1, iPhone: 1, iPod: 1 },
                  Alcatel: {},
                  Archos: {},
                  Amazon: { Kindle: 1, "Kindle Fire": 1 },
                  Asus: { Transformer: 1 },
                  "Barnes & Noble": { Nook: 1 },
                  BlackBerry: { PlayBook: 1 },
                  Google: { "Google TV": 1, Nexus: 1 },
                  HP: { TouchPad: 1 },
                  HTC: {},
                  Huawei: {},
                  Lenovo: {},
                  LG: {},
                  Microsoft: { Xbox: 1, "Xbox One": 1 },
                  Motorola: { Xoom: 1 },
                  Nintendo: { "Wii U": 1, Wii: 1 },
                  Nokia: { Lumia: 1 },
                  Oppo: {},
                  Samsung: {
                    "Galaxy S": 1,
                    "Galaxy S2": 1,
                    "Galaxy S3": 1,
                    "Galaxy S4": 1,
                  },
                  Sony: { PlayStation: 1, "PlayStation Vita": 1 },
                  Xiaomi: { Mi: 1, Redmi: 1 },
                },
                function (t, i, r) {
                  return (
                    t ||
                    ((i[$] ||
                      i[/^[a-z]+(?: +[a-z]+\b)*/i.exec($)] ||
                      RegExp("\\b" + x(r) + "(?:\\b|\\w*\\d)", "i").exec(e)) &&
                      r)
                  );
                },
              ),
              j = h(
                [
                  "Windows Phone",
                  "KaiOS",
                  "Android",
                  "CentOS",
                  { label: "Chrome OS", pattern: "CrOS" },
                  "Debian",
                  { label: "DragonFly BSD", pattern: "DragonFly" },
                  "Fedora",
                  "FreeBSD",
                  "Gentoo",
                  "Haiku",
                  "Kubuntu",
                  "Linux Mint",
                  "OpenBSD",
                  "Red Hat",
                  "SuSE",
                  "Ubuntu",
                  "Xubuntu",
                  "Cygwin",
                  "Symbian OS",
                  "hpwOS",
                  "webOS ",
                  "webOS",
                  "Tablet OS",
                  "Tizen",
                  "Linux",
                  "Mac OS X",
                  "Macintosh",
                  "Mac",
                  "Windows 98;",
                  "Windows ",
                ],
                function (t, i) {
                  var r,
                    n,
                    a,
                    o = i.pattern || x(i);
                  return (
                    !t &&
                      (t = RegExp(
                        "\\b" + o + "(?:/[\\d.]+|[ \\w.]*)",
                        "i",
                      ).exec(e)) &&
                      ((r = t),
                      (n = i.label || i),
                      (a = {
                        "10.0": "10",
                        6.4: "10 Technical Preview",
                        6.3: "8.1",
                        6.2: "8",
                        6.1: "Server 2008 R2 / 7",
                        "6.0": "Server 2008 / Vista",
                        5.2: "Server 2003 / XP 64-bit",
                        5.1: "XP",
                        5.01: "2000 SP1",
                        "5.0": "2000",
                        "4.0": "NT",
                        "4.90": "ME",
                      }),
                      o &&
                        n &&
                        /^Win/i.test(r) &&
                        !/^Windows Phone /i.test(r) &&
                        (a = a[/[\d.]+$/.exec(r)]) &&
                        (r = "Windows " + a),
                      (r = String(r)),
                      o && n && (r = r.replace(RegExp(o, "i"), n)),
                      (t = r =
                        u(
                          r
                            .replace(/ ce$/i, " CE")
                            .replace(/\bhpw/i, "web")
                            .replace(/\bMacintosh\b/, "Mac OS")
                            .replace(/_PowerPC\b/i, " OS")
                            .replace(/\b(OS X) [^ \d]+/i, "$1")
                            .replace(/\bMac (OS X)\b/, "$1")
                            .replace(/\/(\d)/, " $1")
                            .replace(/_/g, ".")
                            .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
                            .replace(/\bx86\.64\b/gi, "x86_64")
                            .replace(/\b(Windows Phone) OS\b/, "$1")
                            .replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1")
                            .split(" on ")[0],
                        ))),
                    t
                  );
                },
              );
            function K(t) {
              return h(t, function (t, i) {
                var r = i.pattern || x(i);
                return (
                  !t &&
                    (t =
                      RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(e) ||
                      RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(e) ||
                      RegExp(
                        "\\b" +
                          r +
                          "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)",
                        "i",
                      ).exec(e)) &&
                    ((t = String(
                      i.label && !RegExp(r, "i").test(i.label) ? i.label : t,
                    ).split("/"))[1] &&
                      !/[\d.]+/.test(t[0]) &&
                      (t[0] += " " + t[1]),
                    (i = i.label || i),
                    (t = u(
                      t[0]
                        .replace(RegExp(r, "i"), i)
                        .replace(RegExp("; *(?:" + i + "[_-])?", "i"), " ")
                        .replace(
                          RegExp("(" + i + ")[-_.]?(\\w)", "i"),
                          "$1 $2",
                        ),
                    ))),
                  t
                );
              });
            }
            function N(t) {
              return h(t, function (t, i) {
                return (
                  t ||
                  (RegExp(
                    i +
                      "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)",
                    "i",
                  ).exec(e) || 0)[1] ||
                  null
                );
              });
            }
            if (
              (T && (T = [T]),
              /\bAndroid\b/.test(j) &&
                !$ &&
                (a = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(
                  e,
                )) &&
                ($ = m(a[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null),
              X && !$
                ? ($ = K([X]))
                : X &&
                  $ &&
                  ($ = $.replace(
                    RegExp("^(" + x(X) + ")[-_.\\s]", "i"),
                    X + " ",
                  ).replace(
                    RegExp("^(" + x(X) + ")[-_.]?(\\w)", "i"),
                    X + " $2",
                  )),
              (a = /\bGoogle TV\b/.exec($)) && ($ = a[0]),
              /\bSimulator\b/i.test(e) &&
                ($ = ($ ? $ + " " : "") + "Simulator"),
              "Opera Mini" == G &&
                /\bOPiOS\b/.test(e) &&
                R.push("running in Turbo/Uncompressed mode"),
              "IE" == G && /\blike iPhone OS\b/.test(e)
                ? ((X = (a = g(e.replace(/like iPhone OS/, ""))).manufacturer),
                  ($ = a.product))
                : /^iP/.test($)
                  ? (G || (G = "Safari"),
                    (j =
                      "iOS" +
                      ((a = / OS ([\d_]+)/i.exec(e))
                        ? " " + a[1].replace(/_/g, ".")
                        : "")))
                  : "Konqueror" == G && /^Linux\b/i.test(j)
                    ? (j = "Kubuntu")
                    : (X &&
                          "Google" != X &&
                          ((/Chrome/.test(G) &&
                            !/\bMobile Safari\b/i.test(e)) ||
                            /\bVita\b/.test($))) ||
                        (/\bAndroid\b/.test(j) &&
                          /^Chrome/.test(G) &&
                          /\bVersion\//i.test(e))
                      ? ((G = "Android Browser"),
                        (j = /\bAndroid\b/.test(j) ? j : "Android"))
                      : "Silk" == G
                        ? (/\bMobi/i.test(e) ||
                            ((j = "Android"), R.unshift("desktop mode")),
                          /Accelerated *= *true/i.test(e) &&
                            R.unshift("accelerated"))
                        : "UC Browser" == G && /\bUCWEB\b/.test(e)
                          ? R.push("speed mode")
                          : "PaleMoon" == G &&
                              (a = /\bFirefox\/([\d.]+)\b/.exec(e))
                            ? R.push("identifying as Firefox " + a[1])
                            : "Firefox" == G &&
                                (a = /\b(Mobile|Tablet|TV)\b/i.exec(e))
                              ? (j || (j = "Firefox OS"), $ || ($ = a[1]))
                              : !G ||
                                  (a =
                                    !/\bMinefield\b/i.test(e) &&
                                    /\b(?:Firefox|Safari)\b/.exec(G))
                                ? (G &&
                                    !$ &&
                                    /[\/,]|^[^(]+?\)/.test(
                                      e.slice(e.indexOf(a + "/") + 8),
                                    ) &&
                                    (G = null),
                                  (a = $ || X || j) &&
                                    ($ ||
                                      X ||
                                      /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(
                                        j,
                                      )) &&
                                    (G =
                                      /[a-z]+(?: Hat)?/i.exec(
                                        /\bAndroid\b/.test(j) ? j : a,
                                      ) + " Browser"))
                                : "Electron" == G &&
                                  (a = (/\bChrome\/([\d.]+)\b/.exec(e) ||
                                    0)[1]) &&
                                  R.push("Chromium " + a),
              F ||
                (F = N([
                  "(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)",
                  "Version",
                  x(G),
                  "(?:Firefox|Minefield|NetFront)",
                ])),
              (a =
                ("iCab" == T && parseFloat(F) > 3 && "WebKit") ||
                (/\bOpera\b/.test(G) &&
                  (/\bOPR\b/.test(e) ? "Blink" : "Presto")) ||
                (/\b(?:Midori|Nook|Safari)\b/i.test(e) &&
                  !/^(?:Trident|EdgeHTML)$/.test(T) &&
                  "WebKit") ||
                (!T &&
                  /\bMSIE\b/i.test(e) &&
                  ("Mac OS" == j ? "Tasman" : "Trident")) ||
                ("WebKit" == T &&
                  /\bPlayStation\b(?! Vita\b)/i.test(G) &&
                  "NetFront")) && (T = [a]),
              "IE" == G && (a = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1])
                ? ((G += " Mobile"),
                  (j = "Windows Phone " + (/\+$/.test(a) ? a : a + ".x")),
                  R.unshift("desktop mode"))
                : /\bWPDesktop\b/i.test(e)
                  ? ((G = "IE Mobile"),
                    (j = "Windows Phone 8.x"),
                    R.unshift("desktop mode"),
                    F || (F = (/\brv:([\d.]+)/.exec(e) || 0)[1]))
                  : "IE" != G &&
                    "Trident" == T &&
                    (a = /\brv:([\d.]+)/.exec(e)) &&
                    (G && R.push("identifying as " + G + (F ? " " + F : "")),
                    (G = "IE"),
                    (F = a[1])),
              I)
            ) {
              if (
                ((i = "global"),
                (r = null != (t = l) ? typeof t[i] : "number"),
                /^(?:boolean|number|string|undefined)$/.test(r) ||
                  ("object" == r && !t[i]))
              )
                S((a = l.runtime)) == (b ? y : "ScriptBridgingProxyObject")
                  ? ((G = "Adobe AIR"), (j = a.flash.system.Capabilities.os))
                  : S((a = l.phantom)) == (b ? y : "RuntimeObject")
                    ? ((G = "PhantomJS"),
                      (F =
                        (a = a.version || null) &&
                        a.major + "." + a.minor + "." + a.patch))
                    : "number" == typeof C.documentMode &&
                        (a = /\bTrident\/(\d+)/i.exec(e))
                      ? ((F = [F, C.documentMode]),
                        (a = +a[1] + 4) != F[1] &&
                          (R.push("IE " + F[1] + " mode"),
                          T && (T[1] = ""),
                          (F[1] = a)),
                        (F = "IE" == G ? String(F[1].toFixed(1)) : F[0]))
                      : "number" == typeof C.documentMode &&
                        /^(?:Chrome|Firefox)\b/.test(G) &&
                        (R.push("masking as " + G + " " + F),
                        (G = "IE"),
                        (F = "11.0"),
                        (T = ["Trident"]),
                        (j = "Windows"));
              else if (
                (w &&
                  ((W = (a = w.lang.System).getProperty("os.arch")),
                  (j =
                    j ||
                    a.getProperty("os.name") +
                      " " +
                      a.getProperty("os.version"))),
                E)
              ) {
                try {
                  (F = l.require("ringo/engine").version.join(".")),
                    (G = "RingoJS");
                } catch (e) {
                  (a = l.system) &&
                    a.global.system == l.system &&
                    ((G = "Narwhal"), j || (j = a[0].os || null));
                }
                G || (G = "Rhino");
              } else
                "object" == typeof l.process &&
                  !l.process.browser &&
                  (a = l.process) &&
                  ("object" == typeof a.versions &&
                    ("string" == typeof a.versions.electron
                      ? (R.push("Node " + a.versions.node),
                        (G = "Electron"),
                        (F = a.versions.electron))
                      : "string" == typeof a.versions.nw &&
                        (R.push("Chromium " + F, "Node " + a.versions.node),
                        (G = "NW.js"),
                        (F = a.versions.nw))),
                  G ||
                    ((G = "Node.js"),
                    (W = a.arch),
                    (j = a.platform),
                    (F = (F = /[\d.]+/.exec(a.version)) ? F[0] : null)));
              j = j && u(j);
            }
            if (
              (F &&
                (a =
                  /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(F) ||
                  /(?:alpha|beta)(?: ?\d)?/i.exec(
                    e + ";" + (I && p.appMinorVersion),
                  ) ||
                  (/\bMinefield\b/i.test(e) && "a")) &&
                ((A = /b/i.test(a) ? "beta" : "alpha"),
                (F =
                  F.replace(RegExp(a + "\\+?$"), "") +
                  ("beta" == A ? P : v) +
                  (/\d+\+?/.exec(a) || ""))),
              "Fennec" == G ||
                ("Firefox" == G && /\b(?:Android|Firefox OS|KaiOS)\b/.test(j)))
            )
              G = "Firefox Mobile";
            else if ("Maxthon" == G && F) F = F.replace(/\.[\d.]+/, ".x");
            else if (/\bXbox\b/i.test($))
              "Xbox 360" == $ && (j = null),
                "Xbox 360" == $ &&
                  /\bIEMobile\b/.test(e) &&
                  R.unshift("mobile mode");
            else if (
              (/^(?:Chrome|IE|Opera)$/.test(G) ||
                (G && !$ && !/Browser|Mobi/.test(G))) &&
              ("Windows CE" == j || /Mobi/i.test(e))
            )
              G += " Mobile";
            else if ("IE" == G && I)
              try {
                null === l.external && R.unshift("platform preview");
              } catch (e) {
                R.unshift("embedded");
              }
            else
              (/\bBlackBerry\b/.test($) || /\bBB10\b/.test(e)) &&
              (a =
                (RegExp($.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) ||
                  0)[1] || F)
                ? ((j =
                    ((a = [a, /BB10/.test(e)])[1]
                      ? (($ = null), (X = "BlackBerry"))
                      : "Device Software") +
                    " " +
                    a[0]),
                  (F = null))
                : this != f &&
                  "Wii" != $ &&
                  ((I && B) ||
                    (/Opera/.test(G) && /\b(?:MSIE|Firefox)\b/i.test(e)) ||
                    ("Firefox" == G && /\bOS X (?:\d+\.){2,}/.test(j)) ||
                    ("IE" == G &&
                      ((j && !/^Win/.test(j) && F > 5.5) ||
                        (/\bWindows XP\b/.test(j) && F > 8) ||
                        (8 == F && !/\bTrident\b/.test(e))))) &&
                  !s.test((a = g.call(f, e.replace(s, "") + ";"))) &&
                  a.name &&
                  ((a = "ing as " + a.name + ((a = a.version) ? " " + a : "")),
                  s.test(G)
                    ? (/\bIE\b/.test(a) && "Mac OS" == j && (j = null),
                      (a = "identify" + a))
                    : ((a = "mask" + a),
                      (G = k
                        ? u(k.replace(/([a-z])([A-Z])/g, "$1 $2"))
                        : "Opera"),
                      /\bIE\b/.test(a) && (j = null),
                      I || (F = null)),
                  (T = ["Presto"]),
                  R.push(a));
            (a = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) &&
              ((a = [parseFloat(a.replace(/\.(\d)$/, ".0$1")), a]),
              "Safari" == G && "+" == a[1].slice(-1)
                ? ((G = "WebKit Nightly"),
                  (A = "alpha"),
                  (F = a[1].slice(0, -1)))
                : (F == a[1] ||
                    F == (a[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) &&
                  (F = null),
              (a[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(e) || 0)[1]),
              537.36 == a[0] &&
                537.36 == a[2] &&
                parseFloat(a[1]) >= 28 &&
                "WebKit" == T &&
                (T = ["Blink"]),
              I && (O || a[1])
                ? (T && (T[1] = "like Chrome"),
                  (a =
                    a[1] ||
                    ((a = a[0]) < 530
                      ? 1
                      : a < 532
                        ? 2
                        : a < 532.05
                          ? 3
                          : a < 533
                            ? 4
                            : a < 534.03
                              ? 5
                              : a < 534.07
                                ? 6
                                : a < 534.1
                                  ? 7
                                  : a < 534.13
                                    ? 8
                                    : a < 534.16
                                      ? 9
                                      : a < 534.24
                                        ? 10
                                        : a < 534.3
                                          ? 11
                                          : a < 535.01
                                            ? 12
                                            : a < 535.02
                                              ? "13+"
                                              : a < 535.07
                                                ? 15
                                                : a < 535.11
                                                  ? 16
                                                  : a < 535.19
                                                    ? 17
                                                    : a < 536.05
                                                      ? 18
                                                      : a < 536.1
                                                        ? 19
                                                        : a < 537.01
                                                          ? 20
                                                          : a < 537.11
                                                            ? "21+"
                                                            : a < 537.13
                                                              ? 23
                                                              : a < 537.18
                                                                ? 24
                                                                : a < 537.24
                                                                  ? 25
                                                                  : a < 537.36
                                                                    ? 26
                                                                    : "Blink" !=
                                                                        T
                                                                      ? "27"
                                                                      : "28")))
                : (T && (T[1] = "like Safari"),
                  (a =
                    (a = a[0]) < 400
                      ? 1
                      : a < 500
                        ? 2
                        : a < 526
                          ? 3
                          : a < 533
                            ? 4
                            : a < 534
                              ? "4+"
                              : a < 535
                                ? 5
                                : a < 537
                                  ? 6
                                  : a < 538
                                    ? 7
                                    : a < 601
                                      ? 8
                                      : a < 602
                                        ? 9
                                        : a < 604
                                          ? 10
                                          : a < 606
                                            ? 11
                                            : a < 608
                                              ? 12
                                              : "12")),
              T &&
                (T[1] +=
                  " " +
                  (a +=
                    "number" == typeof a ? ".x" : /[.+]/.test(a) ? "" : "+")),
              "Safari" == G && (!F || parseInt(F) > 45)
                ? (F = a)
                : "Chrome" == G &&
                  /\bHeadlessChrome/i.test(e) &&
                  R.unshift("headless")),
              "Opera" == G && (a = /\bzbov|zvav$/.exec(j))
                ? ((G += " "),
                  R.unshift("desktop mode"),
                  "zvav" == a ? ((G += "Mini"), (F = null)) : (G += "Mobile"),
                  (j = j.replace(RegExp(" *" + a + "$"), "")))
                : "Safari" == G && /\bChrome\b/.exec(T && T[1])
                  ? (R.unshift("desktop mode"),
                    (G = "Chrome Mobile"),
                    (F = null),
                    /\bOS X\b/.test(j)
                      ? ((X = "Apple"), (j = "iOS 4.3+"))
                      : (j = null))
                  : /\bSRWare Iron\b/.test(G) && !F && (F = N("Chrome")),
              F &&
                0 == F.indexOf((a = /[\d.]+$/.exec(j))) &&
                e.indexOf("/" + a + "-") > -1 &&
                (j = m(j.replace(a, ""))),
              j &&
                -1 != j.indexOf(G) &&
                !RegExp(G + " OS").test(j) &&
                (j = j.replace(RegExp(" *" + x(G) + " *"), "")),
              T &&
                !/\b(?:Avant|Nook)\b/.test(G) &&
                (/Browser|Lunascape|Maxthon/.test(G) ||
                  ("Safari" != G &&
                    /^iOS/.test(j) &&
                    /\bSafari\b/.test(T[1])) ||
                  (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(
                    G,
                  ) &&
                    T[1])) &&
                (a = T[T.length - 1]) &&
                R.push(a),
              R.length && (R = ["(" + R.join("; ") + ")"]),
              X && $ && 0 > $.indexOf(X) && R.push("on " + X),
              $ && R.push((/^on /.test(R[R.length - 1]) ? "" : "on ") + $),
              j &&
                ((o =
                  (a = / ([\d.+]+)$/.exec(j)) &&
                  "/" == j.charAt(j.length - a[0].length - 1)),
                (j = {
                  architecture: 32,
                  family: a && !o ? j.replace(a[0], "") : j,
                  version: a ? a[1] : null,
                  toString: function () {
                    var e = this.version;
                    return (
                      this.family +
                      (e && !o ? " " + e : "") +
                      (64 == this.architecture ? " 64-bit" : "")
                    );
                  },
                })),
              (a = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(W)) &&
              !/\bi686\b/i.test(W)
                ? (j &&
                    ((j.architecture = 64),
                    (j.family = j.family.replace(RegExp(" *" + a), ""))),
                  G &&
                    (/\bWOW64\b/i.test(e) ||
                      (I &&
                        /\w(?:86|32)$/.test(p.cpuClass || p.platform) &&
                        !/\bWin64; x64\b/i.test(e))) &&
                    R.unshift("32-bit"))
                : j &&
                  /^OS X/.test(j.family) &&
                  "Chrome" == G &&
                  parseFloat(F) >= 39 &&
                  (j.architecture = 64),
              e || (e = null);
            var _ = {};
            return (
              (_.description = e),
              (_.layout = T && T[0]),
              (_.manufacturer = X),
              (_.name = G),
              (_.prerelease = A),
              (_.product = $),
              (_.ua = e),
              (_.version = G && F),
              (_.os = j || {
                architecture: null,
                family: null,
                version: null,
                toString: function () {
                  return "null";
                },
              }),
              (_.parse = g),
              (_.toString = function () {
                return this.description || "";
              }),
              _.version && R.unshift(F),
              _.name && R.unshift(G),
              j &&
                G &&
                !(
                  j == String(j).split(" ")[0] &&
                  (j == G.split(" ")[0] || $)
                ) &&
                R.push($ ? "(" + j + ")" : "on " + j),
              R.length && (_.description = R.join(" ")),
              _
            );
          }
          var O = g();
          "function" == typeof define &&
          "object" == typeof define.amd &&
          define.amd
            ? ((n.platform = O),
              define(function () {
                return O;
              }))
            : a && o
              ? f(O, function (e, t) {
                  a[t] = e;
                })
              : (n.platform = O);
        }.call(this);
    },
  },
]);
//# sourceMappingURL=46915.c86eb6dd4651d078.js.map
