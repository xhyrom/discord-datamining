(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21429"],
  {
    447479: function (e) {
      e.exports = function (e, t, n, i) {
        var s = -1,
          r = null == e ? 0 : e.length;
        for (i && r && (n = e[++s]); ++s < r; ) n = t(n, e[s], s, e);
        return n;
      };
    },
    826193: function (e) {
      e.exports = function (e) {
        return e.split("");
      };
    },
    160739: function (e) {
      var t = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      e.exports = function (e) {
        return e.match(t) || [];
      };
    },
    975412: function (e) {
      e.exports = function (e) {
        return function (t) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    448730: function (e, t, n) {
      var i = n(801282);
      e.exports = function (e, t, n) {
        var s = e.length;
        return (n = void 0 === n ? s : n), !t && n >= s ? e : i(e, t, n);
      };
    },
    128971: function (e, t, n) {
      var i = n(448730),
        s = n(386015),
        r = n(232396),
        a = n(263604);
      e.exports = function (e) {
        return function (t) {
          var n = s((t = a(t))) ? r(t) : void 0,
            o = n ? n[0] : t.charAt(0),
            l = n ? i(n, 1).join("") : t.slice(1);
          return o[e]() + l;
        };
      };
    },
    145983: function (e, t, n) {
      var i = n(447479),
        s = n(658141),
        r = n(401427),
        a = RegExp("['’]", "g");
      e.exports = function (e) {
        return function (t) {
          return i(r(s(t).replace(a, "")), e, "");
        };
      };
    },
    851707: function (e, t, n) {
      var i = n(975412),
        s = i({
          À: "A",
          Á: "A",
          Â: "A",
          Ã: "A",
          Ä: "A",
          Å: "A",
          à: "a",
          á: "a",
          â: "a",
          ã: "a",
          ä: "a",
          å: "a",
          Ç: "C",
          ç: "c",
          Ð: "D",
          ð: "d",
          È: "E",
          É: "E",
          Ê: "E",
          Ë: "E",
          è: "e",
          é: "e",
          ê: "e",
          ë: "e",
          Ì: "I",
          Í: "I",
          Î: "I",
          Ï: "I",
          ì: "i",
          í: "i",
          î: "i",
          ï: "i",
          Ñ: "N",
          ñ: "n",
          Ò: "O",
          Ó: "O",
          Ô: "O",
          Õ: "O",
          Ö: "O",
          Ø: "O",
          ò: "o",
          ó: "o",
          ô: "o",
          õ: "o",
          ö: "o",
          ø: "o",
          Ù: "U",
          Ú: "U",
          Û: "U",
          Ü: "U",
          ù: "u",
          ú: "u",
          û: "u",
          ü: "u",
          Ý: "Y",
          ý: "y",
          ÿ: "y",
          Æ: "Ae",
          æ: "ae",
          Þ: "Th",
          þ: "th",
          ß: "ss",
          Ā: "A",
          Ă: "A",
          Ą: "A",
          ā: "a",
          ă: "a",
          ą: "a",
          Ć: "C",
          Ĉ: "C",
          Ċ: "C",
          Č: "C",
          ć: "c",
          ĉ: "c",
          ċ: "c",
          č: "c",
          Ď: "D",
          Đ: "D",
          ď: "d",
          đ: "d",
          Ē: "E",
          Ĕ: "E",
          Ė: "E",
          Ę: "E",
          Ě: "E",
          ē: "e",
          ĕ: "e",
          ė: "e",
          ę: "e",
          ě: "e",
          Ĝ: "G",
          Ğ: "G",
          Ġ: "G",
          Ģ: "G",
          ĝ: "g",
          ğ: "g",
          ġ: "g",
          ģ: "g",
          Ĥ: "H",
          Ħ: "H",
          ĥ: "h",
          ħ: "h",
          Ĩ: "I",
          Ī: "I",
          Ĭ: "I",
          Į: "I",
          İ: "I",
          ĩ: "i",
          ī: "i",
          ĭ: "i",
          į: "i",
          ı: "i",
          Ĵ: "J",
          ĵ: "j",
          Ķ: "K",
          ķ: "k",
          ĸ: "k",
          Ĺ: "L",
          Ļ: "L",
          Ľ: "L",
          Ŀ: "L",
          Ł: "L",
          ĺ: "l",
          ļ: "l",
          ľ: "l",
          ŀ: "l",
          ł: "l",
          Ń: "N",
          Ņ: "N",
          Ň: "N",
          Ŋ: "N",
          ń: "n",
          ņ: "n",
          ň: "n",
          ŋ: "n",
          Ō: "O",
          Ŏ: "O",
          Ő: "O",
          ō: "o",
          ŏ: "o",
          ő: "o",
          Ŕ: "R",
          Ŗ: "R",
          Ř: "R",
          ŕ: "r",
          ŗ: "r",
          ř: "r",
          Ś: "S",
          Ŝ: "S",
          Ş: "S",
          Š: "S",
          ś: "s",
          ŝ: "s",
          ş: "s",
          š: "s",
          Ţ: "T",
          Ť: "T",
          Ŧ: "T",
          ţ: "t",
          ť: "t",
          ŧ: "t",
          Ũ: "U",
          Ū: "U",
          Ŭ: "U",
          Ů: "U",
          Ű: "U",
          Ų: "U",
          ũ: "u",
          ū: "u",
          ŭ: "u",
          ů: "u",
          ű: "u",
          ų: "u",
          Ŵ: "W",
          ŵ: "w",
          Ŷ: "Y",
          ŷ: "y",
          Ÿ: "Y",
          Ź: "Z",
          Ż: "Z",
          Ž: "Z",
          ź: "z",
          ż: "z",
          ž: "z",
          Ĳ: "IJ",
          ĳ: "ij",
          Œ: "Oe",
          œ: "oe",
          ŉ: "'n",
          ſ: "s",
        });
      e.exports = s;
    },
    386015: function (e) {
      var t = RegExp(
        "[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]",
      );
      e.exports = function (e) {
        return t.test(e);
      };
    },
    988513: function (e) {
      var t =
        /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      e.exports = function (e) {
        return t.test(e);
      };
    },
    232396: function (e, t, n) {
      var i = n(826193),
        s = n(386015),
        r = n(12276);
      e.exports = function (e) {
        return s(e) ? r(e) : i(e);
      };
    },
    12276: function (e) {
      var t = "\ud800-\udfff",
        n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        i = "\ud83c[\udffb-\udfff]",
        s = "[^" + t + "]",
        r = "(?:\ud83c[\udde6-\uddff]){2}",
        a = "[\ud800-\udbff][\udc00-\udfff]",
        o = "(?:" + n + "|" + i + ")?",
        l = "[\\ufe0e\\ufe0f]?",
        d = "(?:\\u200d(?:" + [s, r, a].join("|") + ")" + l + o + ")*",
        c = RegExp(
          i +
            "(?=" +
            i +
            ")|" +
            ("(?:" + [s + n + "?", n, r, a, "[" + t + "]"].join("|") + ")") +
            (l + o + d),
          "g",
        );
      e.exports = function (e) {
        return e.match(c) || [];
      };
    },
    519342: function (e) {
      var t = "\ud800-\udfff",
        n = "\\u2700-\\u27bf",
        i = "a-z\\xdf-\\xf6\\xf8-\\xff",
        s = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        r =
          "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        a = "['’]",
        o = "[" + r + "]",
        l = "[" + i + "]",
        d = "[^" + t + r + "\\d+" + n + i + s + "]",
        c = "(?:\ud83c[\udde6-\uddff]){2}",
        u = "[\ud800-\udbff][\udc00-\udfff]",
        h = "[" + s + "]",
        p = "(?:" + l + "|" + d + ")",
        f = "(?:" + h + "|" + d + ")",
        g = "(?:" + a + "(?:d|ll|m|re|s|t|ve))?",
        m = "(?:" + a + "(?:D|LL|M|RE|S|T|VE))?",
        v =
          "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
        x = "[\\ufe0e\\ufe0f]?",
        _ =
          "(?:\\u200d(?:" +
          ["[^" + t + "]", c, u].join("|") +
          ")" +
          x +
          v +
          ")*",
        S = "(?:" + ["[" + n + "]", c, u].join("|") + ")" + (x + v + _),
        Z = RegExp(
          [
            h + "?" + l + "+" + g + "(?=" + [o, h, "$"].join("|") + ")",
            f + "+" + m + "(?=" + [o, h + p, "$"].join("|") + ")",
            h + "?" + p + "+" + g,
            h + "+" + m,
            "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            "\\d+",
            S,
          ].join("|"),
          "g",
        );
      e.exports = function (e) {
        return e.match(Z) || [];
      };
    },
    877921: function (e, t, n) {
      var i = n(14469),
        s = n(145983)(function (e, t, n) {
          return (t = t.toLowerCase()), e + (n ? i(t) : t);
        });
      e.exports = s;
    },
    14469: function (e, t, n) {
      var i = n(263604),
        s = n(278759);
      e.exports = function (e) {
        return s(i(e).toLowerCase());
      };
    },
    658141: function (e, t, n) {
      var i = n(851707),
        s = n(263604),
        r = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        a = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
      e.exports = function (e) {
        return (e = s(e)) && e.replace(r, i).replace(a, "");
      };
    },
    278759: function (e, t, n) {
      var i = n(128971)("toUpperCase");
      e.exports = i;
    },
    401427: function (e, t, n) {
      var i = n(160739),
        s = n(988513),
        r = n(263604),
        a = n(519342);
      e.exports = function (e, t, n) {
        return ((e = r(e)), void 0 === (t = n ? void 0 : t))
          ? s(e)
            ? a(e)
            : i(e)
          : e.match(t) || [];
      };
    },
    584088: function (e) {
      "use strict";
      e.exports = "/assets/13023c608fc6d40094e8.svg";
    },
    847881: function (e) {
      "use strict";
      e.exports = "/assets/f3bf33abef8a529123fa.svg";
    },
    26229: function (e, t, n) {
      "use strict";
      var i = n(200651),
        s = n(192379);
      t.Z = s.memo(function (e) {
        let { layout: t, layoutSize: n, className: s, renderWidget: r } = e;
        return null != t
          ? (0, i.jsx)("div", {
              className: s,
              style: { width: n.width, height: n.height },
              children: t.widgets.map((e) => r(e, n)),
            })
          : null;
      });
    },
    312839: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return c;
        },
        R: function () {
          return d;
        },
      });
      var i = n(13245),
        s = n(556296),
        r = n(237997),
        a = n(13140),
        o = n(981631),
        l = n(987650);
      function d(e, t) {
        return {
          trackView() {
            i.Z.track(o.rMx.NOTIFICATION_VIEWED, t),
              i.Z.notificationEvent(e, l.bv.Viewed);
          },
          trackClick(n) {
            let s = r.Z.isInstanceLocked()
              ? o.Sbl.LOCKED_OVERLAY
              : o.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(o.rMx.NOTIFICATION_CLICKED, {
              ...t,
              location: s,
              action_type: n,
            }),
              i.Z.notificationEvent(e, l.bv.Clicked);
          },
        };
      }
      function c() {
        let e = s.Z.getOverlayKeybind();
        return null != e ? (0, a.BB)(e.shortcut, !0).split(" + ") : ["???"];
      }
    },
    836932: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(224706),
        s = n(13245),
        r = n(593481),
        a = n(150097),
        o = n(312839),
        l = n(987650),
        d = n(388032);
      function c(e, t, n, c, u) {
        if (null == t.activity) return null;
        let h = t.activity.type,
          p = u.session_id;
        if (null == p) return null;
        let { icon: f, title: g, body: m } = (0, a.Xi)(e, t, n),
          { trackView: v, trackClick: x } = (0, o.R)(l.n0.ActivityInvite, {
            notif_type: l.n0.ActivityInvite,
            notif_user_id: n.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
            activity_type: h,
            activity_name: u.name,
          });
        return {
          icon: f,
          title: g,
          body: m,
          hint: (e) => (0, r.QR)(e, (0, o.P)(), d.t.aB5xLy),
          onNotificationShow: () => {
            v();
          },
          confirmText: d.intl.string(d.t.VJlc0d),
          onConfirmClick: (r, a) => {
            i.Z.join({
              userId: n.id,
              sessionId: p,
              applicationId: c.id,
              channelId: e.id,
              messageId: t.id,
            }),
              s.Z.updateNotificationStatus(a),
              x("join");
          },
          onDismissClick: () => {
            x("dismiss");
          },
        };
      }
    },
    175553: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(593481),
        s = n(768581),
        r = n(312839),
        a = n(981631),
        o = n(987650),
        l = n(388032);
      function d(e, t) {
        let n = e.username,
          d = l.intl.format(l.t["Yk+uYG"], { username: "" }),
          c = (0, s.ov)(e),
          { trackView: u, trackClick: h } = (0, r.R)(o.n0.ActivityUserJoin, {
            notif_type: o.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: a.mFx.JOIN,
            activity_name: t.name,
          });
        return {
          icon: c,
          title: n,
          body: d,
          hint: (e) => (0, i.Yj)(e, l.intl.string(l.t.WRj1Wl)),
          onNotificationShow: () => {
            u();
          },
          onDismissClick: () => {
            h("dismiss");
          },
        };
      }
    },
    158979: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(481060),
        r = n(13245),
        a = n(371651),
        o = n(145597),
        l = n(312839),
        d = n(981631),
        c = n(987650),
        u = n(388032),
        h = n(114057);
      function p() {
        return (0, i.jsx)("div", {
          className: h.footer,
          children: (0, i.jsx)(s.Button, {
            color: s.Button.Colors.GREEN,
            size: s.Button.Sizes.SMALL,
            className: h.ctaButton,
            children: u.intl.string(u.t.U76Ft7),
          }),
        });
      }
      function f(e) {
        switch (e.type) {
          case c.nc.GO_LIVE_VOICE: {
            let { game: t, voiceGuild: h } = e,
              { trackView: f, trackClick: g } = (0, l.R)(c.n0.GoLiveNudge, {
                notif_type: c.n0.GoLiveNudge,
              });
            return {
              icon: n(847881),
              title: null,
              body: u.intl.formatToPlainString(u.t.z9znpa, {
                game: t.name,
                server: h.toString(),
              }),
              hint: () => (0, i.jsx)(p, {}),
              renderFooter: () => (0, i.jsx)(p, {}),
              onNotificationShow: () => {
                f();
              },
              onNotificationClick: (e, t) => {
                g("unlock"),
                  r.Z.updateNotificationStatus(t),
                  a.Z.isOverlayOOPEnabledForPid((0, o.QF)())
                    ? r.Z.setInputLocked(!1, (0, o.QF)())
                    : r.Z.setInstanceLocked(!1),
                  (0, s.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                      n.e("93382"),
                      n.e("79477"),
                      n.e("46298"),
                    ]).then(n.bind(n, 60594));
                    return (t) =>
                      (0, i.jsx)(e, {
                        ...t,
                        selectSource: !1,
                        guildId: h.id,
                        analyticsLocation: d.Sbl.OVERLAY_NUDGE,
                      });
                  });
              },
              onDismissClick: () => {
                g("dismiss");
              },
            };
          }
          case c.nc.GO_LIVE_NON_VOICE: {
            let { game: t } = e,
              { trackView: h, trackClick: f } = (0, l.R)(
                c.n0.GoLiveNonVoiceNudge,
                { notif_type: c.n0.GoLiveNonVoiceNudge },
              );
            return {
              icon: n(847881),
              title: null,
              body: u.intl.formatToPlainString(u.t["0SVWgI"], { game: t.name }),
              hint: () => (0, i.jsx)(p, {}),
              renderFooter: () => (0, i.jsx)(p, {}),
              onNotificationShow: () => {
                h();
              },
              onNotificationClick: (e, t) => {
                f("unlock"),
                  r.Z.updateNotificationStatus(t),
                  a.Z.isOverlayOOPEnabledForPid((0, o.QF)())
                    ? r.Z.setInputLocked(!1, (0, o.QF)())
                    : r.Z.setInstanceLocked(!1),
                  (0, s.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                      n.e("93382"),
                      n.e("79477"),
                      n.e("46298"),
                    ]).then(n.bind(n, 60594));
                    return (t) =>
                      (0, i.jsx)(e, {
                        ...t,
                        selectSource: !1,
                        selectGuild: !0,
                        analyticsLocation: d.Sbl.OVERLAY_NUDGE,
                      });
                  });
              },
              onDismissClick: () => {
                f("dismiss");
              },
            };
          }
        }
      }
    },
    181912: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = n(26151),
        s = n(13245),
        r = n(43267),
        a = n(933557),
        o = n(593481),
        l = n(699516),
        d = n(594174),
        c = n(312839),
        u = n(981631),
        h = n(987650),
        p = n(388032);
      function f(e) {
        let t = (0, a.F6)(e, d.default, l.Z),
          n = p.intl.string(p.t.ssrVzM),
          f = (0, r.x)(e),
          { trackView: g, trackClick: m } = (0, c.R)(h.n0.IncomingCall, {
            notif_type: h.n0.IncomingCall,
            notif_user_id: 1 === e.recipients.length ? e.recipients[0] : null,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
          });
        return {
          icon: f,
          title: t,
          body: n,
          hint: (e) => (0, o.QR)(e, (0, c.P)(), p.t["Odi54+"]),
          confirmText: p.intl.string(p.t["0D/6R0"]),
          cancelText: p.intl.string(p.t.BVN4pK),
          onNotificationShow: () => {
            g();
          },
          onConfirmClick: () => {
            s.Z.callPrivateChannel(e.id),
              m("join"),
              s.Z.track(u.rMx.VOICE_CHANNEL_SELECTED, {
                location: "Overlay Notificaiton",
                guild_id: null,
                channel_id: e.id,
                video_enabled: !1,
              });
          },
          onCancelClick: () => {
            i.Z.stopRinging(e.id), m("decline");
          },
          onDismissClick: () => {
            m("dismiss");
          },
        };
      }
    },
    791288: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return D;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(512722),
        a = n.n(r),
        o = n(442837),
        l = n(481060),
        d = n(493683),
        c = n(13245),
        u = n(99690),
        h = n(835473),
        p = n(194082),
        f = n(442550),
        g = n(297781),
        m = n(371991),
        v = n(656709),
        x = n(561308),
        _ = n(593481),
        S = n(371651),
        Z = n(703656),
        E = n(199902),
        C = n(592125),
        I = n(158776),
        y = n(594174),
        N = n(5192),
        b = n(145597),
        T = n(312839),
        O = n(981631),
        j = n(701488),
        M = n(987650),
        R = n(388032),
        P = n(522634);
      function w(e) {
        let { game: t } = e,
          n = (0, h.q)(t.id);
        if (null == n) return null;
        let s = n.getIconURL(j.Si.LARGE);
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: P.header,
            children: [
              (0, i.jsx)(f.f, { src: s, size: 32 }),
              (0, i.jsx)(l.Text, {
                className: P.gameInfo,
                variant: "text-md/semibold",
                color: "header-primary",
                children: n.name,
              }),
            ],
          }),
        });
      }
      function A(e) {
        let { entry: t, idx: n } = e,
          r = (0, o.e7)([y.default], () => y.default.getUser(t.author_id)),
          h = (0, x.kr)(t),
          f = h
            ? l.tokens.colors.TEXT_POSITIVE
            : l.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
          [_, S] = s.useState("unsent"),
          [b, T] = s.useState(!1),
          j = (0, o.e7)(
            [E.Z],
            () => (null != r ? E.Z.getAnyStreamForUser(r.id) : null),
            [r],
          ),
          { isMobileOnline: M, status: w } = (0, o.cj)(
            [I.Z],
            () =>
              null == r
                ? { isMobileOnline: void 0, status: void 0 }
                : {
                    isMobileOnline: I.Z.isMobileOnline(r.id),
                    status: I.Z.getStatus(r.id),
                  },
            [r],
          );
        s.useEffect(() => {
          if ("sent" === _) {
            let e = setTimeout(() => T(!0), 2e3);
            return () => clearTimeout(e);
          }
        }, [_]);
        let A = async (e) => {
            if (null != r && "unsent" === _) {
              e.stopPropagation();
              try {
                var i;
                S("sending");
                let e = await d.Z.getOrEnsurePrivateChannel(r.id),
                  s =
                    null !== (i = C.Z.getChannel(e)) && void 0 !== i ? i : null;
                a()(null != s, "Send channel must be defined"),
                  (0, Z.uL)(O.Z5c.CHANNEL(s.guild_id, s.id)),
                  await (0, v.p)({
                    channel: s,
                    content: R.intl.string(R.t.DwAcMz),
                    entry: t,
                    whenReady: !0,
                  }),
                  c.Z.track(O.rMx.OVERLAY_GAME_INVITE_SENT, {
                    target_user_id: r.id,
                    target_content_entry_id: t.id,
                    target_index: n,
                  }),
                  S("sent");
              } catch (e) {
                S("unsent");
              }
            }
          },
          k = async () => {
            var e;
            if (null == r) return;
            let t = await d.Z.getOrEnsurePrivateChannel(r.id),
              n = null !== (e = C.Z.getChannel(t)) && void 0 !== e ? e : null;
            a()(null != n, "Send channel must be defined"),
              (0, Z.uL)(O.Z5c.CHANNEL(n.guild_id, n.id));
          };
        return null == r
          ? null
          : (0, i.jsxs)("div", {
              className: P.userRow,
              children: [
                (0, i.jsx)(u.Z, {
                  className: P.avatarContainer,
                  user: r,
                  isMobile: M,
                  status: w,
                }),
                (0, i.jsxs)("div", {
                  className: P.userInfo,
                  children: [
                    (0, i.jsxs)("div", {
                      className: P.usernameWrapper,
                      children: [
                        (0, i.jsx)(l.Text, {
                          className: P.username,
                          variant: "text-md/medium",
                          color: "header-primary",
                          children: N.ZP.getName(void 0, void 0, r),
                        }),
                        null != j && (0, i.jsx)(p.ZP, {}),
                      ],
                    }),
                    (0, i.jsxs)(g.m7, {
                      children: [
                        (0, i.jsx)(l.GameControllerIcon, {
                          size: "xxs",
                          color: f,
                        }),
                        (0, i.jsx)(m.ZP, {
                          entry: t,
                          textColor: h
                            ? "text-positive"
                            : "content-inventory-overlay-text-secondary",
                          bold: !0,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: P.inviteButtonWrapper,
                  children: (0, i.jsx)(l.Button, {
                    submitting: "sending" === _,
                    onClick: b ? k : A,
                    className: P.inviteButton,
                    color: l.ButtonColors.PRIMARY,
                    look:
                      "sent" === _
                        ? l.ButtonLooks.OUTLINED
                        : l.ButtonLooks.FILLED,
                    size: l.ButtonSizes.MAX,
                    children:
                      "sent" === _
                        ? b
                          ? (0, i.jsx)(l.ChatIcon, { size: "sm" })
                          : (0, i.jsx)(l.CheckmarkSmallBoldIcon, {
                              size: "sm",
                              color: l.tokens.colors.WHITE,
                            })
                        : (0, i.jsx)(l.SendMessageIcon, { size: "sm" }),
                  }),
                }),
              ],
            });
      }
      function k(e) {
        let { entries: t } = e,
          n = t.slice(0, 5);
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(_.iz, {}),
            (0, i.jsxs)(l.Text, {
              className: P.helpText,
              variant: "text-sm/medium",
              color: "header-secondary",
              children: [
                (0, i.jsx)(l.ChatPlusIcon, { size: "xxs" }),
                R.intl.string(R.t.y9eo7e),
              ],
            }),
            n.map((e, t) => (0, i.jsx)(A, { idx: t, entry: e }, t)),
          ],
        });
      }
      function D(e, t) {
        let { trackView: n, trackClick: s } = (0, T.R)(
          M.n0.SendGameInvitesNotification,
          { notif_type: M.n0.SendGameInvitesNotification },
        );
        return (
          a()(t.length > 0, "Some entries must be present"),
          {
            icon: null,
            title: (0, i.jsx)(w, { game: e }),
            body: (0, i.jsx)(k, { entries: t }),
            onNotificationShow: () => {
              n(),
                c.Z.track(O.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                  user_ids: t.map((e) => e.author_id),
                  entry_ids: t.map((e) => e.id),
                });
            },
            onNotificationClick: (e, t) => {
              s("unlock"),
                S.Z.isOverlayOOPEnabledForPid((0, b.QF)())
                  ? c.Z.setInputLocked(!1, (0, b.QF)())
                  : c.Z.setInstanceLocked(!1);
            },
            onDismissClick: () => {
              s("dismiss");
            },
          }
        );
      }
    },
    194295: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = n(278323),
        s = n(13245),
        r = n(45114),
        a = n(593481),
        o = n(237997),
        l = n(312839),
        d = n(981631),
        c = n(987650),
        u = n(388032);
      function h(e, t, n, h) {
        let p = t.username,
          f = u.intl.format(u.t.VDODnp, { username: "", game: n.name }),
          g = t.getAvatarURL(e.guild_id, 80),
          { trackView: m, trackClick: v } = (0, l.R)(c.n0.ActivityInvite, {
            notif_type: c.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: d.mFx.JOIN_REQUEST,
            activity_name: n.name,
          });
        return {
          icon: g,
          title: p,
          body: f,
          hint: (e) => (0, a.QR)(e, (0, l.P)(), u.t["Odi54+"]),
          confirmText: u.intl.string(u.t["fgP/wc"]),
          cancelText: u.intl.string(u.t.tpXzJy),
          onNotificationShow: () => {
            m();
          },
          onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
              channelId: e.id,
              type: d.mFx.JOIN,
              activity: h,
              location: o.Z.isInstanceLocked()
                ? d.Sbl.LOCKED_OVERLAY
                : d.Sbl.UNLOCKED_OVERLAY,
            }),
              v("join"),
              s.Z.updateNotificationStatus(n);
          },
          onCancelClick: (t, n) => {
            (0, r.In)(e.id, !0, !0),
              s.Z.updateNotificationStatus(n),
              v("decline");
          },
          onDismissClick: () => {
            v("dismiss");
          },
        };
      }
    },
    998033: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(13245),
        r = n(371651),
        a = n(703656),
        o = n(974180),
        l = n(237997),
        d = n(150097),
        c = n(358085),
        u = n(557177),
        h = n(998502),
        p = n(145597),
        f = n(312839),
        g = n(981631),
        m = n(987650),
        v = n(388032);
      function x(e, t, n, x) {
        var _;
        let { icon: S, title: Z, body: E } = (0, d.Xi)(e, t, n),
          { trackView: C, trackClick: I } = (0, f.R)(m.n0.TextChat, {
            notif_type: m.n0.TextChat,
            notif_user_id:
              null === (_ = t.author) || void 0 === _ ? void 0 : _.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
          });
        return {
          icon: S,
          title: Z,
          body: E,
          renderFooter: (e) =>
            e
              ? (0, i.jsx)("div", {
                  style: { textAlign: "center" },
                  children: v.intl.string(v.t["+MJm39"]),
                })
              : null,
          maxBodyLines: 2,
          onNotificationShow: () => {
            x && (0, u.GN)(o.Ay, o.yk), C();
          },
          onNotificationClick: () => {
            if (r.Z.isOverlayOOPEnabledForPid((0, p.QF)())) {
              let n = (0, p.QF)();
              l.Z.isInstanceLocked()
                ? (I("unlock"), s.Z.setInputLocked(!1, n))
                : (I("jump"),
                  (0, a.uL)(g.Z5c.CHANNEL(e.guild_id, e.id, t.id)),
                  c.isPlatformEmbedded && h.ZP.focus());
            } else
              (0, a.uL)(g.Z5c.CHANNEL(e.guild_id, e.id)),
                I("jump"),
                l.Z.isInstanceLocked() && s.Z.setInstanceLocked(!1);
          },
          onDismissClick: () => {
            I("dismiss");
          },
        };
      }
    },
    181364: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(13245),
        r = n(593481),
        a = n(371651),
        o = n(237997),
        l = n(145597),
        d = n(312839),
        c = n(987650),
        u = n(388032);
      let h = () => ({
          icon: n(328756),
          title: u.intl.string(u.t.pkXAeH),
          body: null,
          hint: p,
          notifType: c.n0.WelcomeNudge,
        }),
        p = (e) => (0, r.QR)(e, (0, d.P)(), u.t["z8/sgI"]);
      function f(e) {
        let { type: t } = e,
          {
            icon: n,
            title: r,
            body: p,
            hint: f,
            notifType: g,
          } = (function (e, t) {
            if (t.type === c.nc.NEWS) {
              var n, i, s, r, a, o, l, d;
              return {
                icon:
                  null !==
                    (a =
                      null === (n = t.news) || void 0 === n
                        ? void 0
                        : n.icon) && void 0 !== a
                    ? a
                    : e.icon,
                title:
                  null !==
                    (o =
                      null === (i = t.news) || void 0 === i
                        ? void 0
                        : i.title) && void 0 !== o
                    ? o
                    : e.title,
                body:
                  null !==
                    (l =
                      null === (s = t.news) || void 0 === s
                        ? void 0
                        : s.body) && void 0 !== l
                    ? l
                    : e.body,
                hint:
                  null !==
                    (d =
                      null === (r = t.news) || void 0 === r
                        ? void 0
                        : r.hint) && void 0 !== d
                    ? d
                    : e.hint,
                notifType: null != t.news ? c.n0.NewsNudge : e.notifType,
              };
            }
            return e;
          })(h(), e),
          { trackView: m, trackClick: v } = (0, d.R)(g, { notif_type: g });
        return {
          icon: n,
          title: r,
          body: p,
          hint: f,
          renderFooter: () =>
            (0, i.jsx)("div", {
              style: { textAlign: "center", padding: 2 },
              children: u.intl.string(u.t["9MyuT0"]),
            }),
          onNotificationShow: () => {
            m();
          },
          onNotificationClick: (e, n) => {
            v("unlock"),
              t === c.nc.NEWS && s.Z.updateNotificationStatus(n),
              a.Z.isOverlayOOPEnabledForPid((0, l.QF)())
                ? s.Z.setInputLocked(!1, (0, l.QF)())
                : o.Z.isInstanceLocked() && s.Z.setInstanceLocked(!1);
          },
          onDismissClick: () => {
            v("dismiss");
          },
        };
      }
    },
    668761: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return h;
        },
        y: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(481060),
        r = n(312839),
        a = n(556296),
        o = n(13140),
        l = n(981631),
        d = n(987650),
        c = n(388032);
      function u() {
        let { trackView: e, trackClick: t } = (0, r.R)(
            d.n0.ClipsReminderNotification,
            { notif_type: d.n0.ClipsReminderNotification },
          ),
          n = a.Z.getKeybindForAction(l.kg4.SAVE_CLIP);
        if (null == n) return null;
        let u = o.BB(n.shortcut, !0);
        return {
          title: c.intl.format(c.t.S5uhCA, {
            keybind: u,
            keybindHook: () =>
              (0, i.jsx)("span", {
                style: { display: "inline-block" },
                children: (0, i.jsx)(s.KeyCombo, { shortcut: u }),
              }),
          }),
          icon: (0, i.jsx)(s.ClipsIcon, { size: "xs", color: "currentColor" }),
          onNotificationShow: () => {
            e();
          },
          onDismissClick: () => {
            t("dismiss");
          },
        };
      }
      function h(e) {
        let { trackView: t, trackClick: n } = (0, r.R)(d.n0.ClipsNotification, {
          notif_type: d.n0.ClipsNotification,
        });
        return {
          title: e,
          icon: (0, i.jsx)(s.ClipsIcon, { size: "xs", color: "currentColor" }),
          onNotificationShow: () => {
            t();
          },
          onDismissClick: () => {
            n("dismiss");
          },
        };
      }
    },
    552062: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return i;
        },
      }),
        n(47120),
        n(411104);
      var i,
        s,
        r,
        a = n(200651),
        o = n(192379),
        l = n(120356),
        d = n.n(l),
        c = n(902704),
        u = n(434529),
        h = n(981631),
        p = n(53203);
      function f(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let g = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
      ((r = i || (i = {})).MOVE = "MOVE"),
        (r.RESIZE_NORTH = "RESIZE_NORTH"),
        (r.RESIZE_WEST = "RESIZE_WEST"),
        (r.RESIZE_EAST = "RESIZE_EAST"),
        (r.RESIZE_SOUTH = "RESIZE_SOUTH"),
        (r.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST"),
        (r.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST"),
        (r.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST"),
        (r.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST");
      let m = new Set([
        "RESIZE_NORTH",
        "RESIZE_WEST",
        "RESIZE_EAST",
        "RESIZE_SOUTH",
        "RESIZE_NORTH_WEST",
        "RESIZE_NORTH_EAST",
        "RESIZE_SOUTH_WEST",
        "RESIZE_SOUTH_EAST",
      ]);
      function v(e, t, n) {
        let { width: i, height: s } = e;
        return {
          width: "auto" === i ? "auto" : Math.max(t, i),
          height: "auto" === s ? "auto" : Math.max(n, s),
        };
      }
      function x(e) {
        let { top: t, left: n, bottom: i, right: s } = e;
        return (
          null == n && null == s && (n = 0),
          null != n && null != s && (s = void 0),
          null == t && null == i && (t = 0),
          null != t && null != i && (i = void 0),
          { top: t, left: n, bottom: i, right: s }
        );
      }
      function _(e) {
        return "auto" === e || null == e ? "auto" : "".concat(e, "px");
      }
      function S(e, t) {
        let n = 0,
          i = 0;
        return (
          (n = "auto" === t.width ? (null != e ? e.clientWidth : 0) : t.width),
          {
            width: n,
            height: (i =
              "auto" === t.height
                ? null != e
                  ? e.clientHeight
                  : 0
                : t.height),
          }
        );
      }
      function Z(e, t) {
        let { top: n, left: i, bottom: s, right: r } = t;
        switch (e) {
          case "RESIZE_EAST":
          case "RESIZE_NORTH_EAST":
          case "RESIZE_NORTH":
            return { bottom: s, left: i, right: void 0, top: void 0 };
          case "RESIZE_WEST":
          case "RESIZE_NORTH_WEST":
            return { bottom: s, right: r, left: void 0, top: void 0 };
          case "RESIZE_SOUTH_EAST":
            return { top: n, left: i, bottom: void 0, right: void 0 };
          case "RESIZE_SOUTH":
          case "RESIZE_SOUTH_WEST":
            return { top: n, right: r, bottom: void 0, left: void 0 };
          default:
            throw Error("getOrientedCoords: Invalid orientation: ".concat(e));
        }
      }
      class E extends (s = o.Component) {
        shouldComponentUpdate(e, t) {
          return (
            !(0, c.Z)(t, this.state) ||
            !(0, c.Z)(e, this.props, [
              "anchor",
              "size",
              "minSize",
              "container",
            ]) ||
            !(0, c.Z)(e.anchor, this.props.anchor) ||
            !(0, c.Z)(e.size, this.props.size) ||
            !(0, c.Z)(e.minSize, this.props.minSize) ||
            !(0, c.Z)(e.container, this.props.container)
          );
        }
        componentDidUpdate(e, t) {
          null == t.operation &&
            (!(0, c.Z)(this.props.anchor, e.anchor) &&
              this.setDOMPositions(x(this.props.anchor)),
            !(0, c.Z)(this.props.size, e.size) &&
              this.setDOMSize(
                v(
                  this.props.size,
                  this.props.minSize.width,
                  this.props.minSize.height,
                ),
              ));
        }
        componentWillUnmount() {
          this.handleOperationEnd();
        }
        handleResizeMouseDown(e, t) {
          let { clientX: n, clientY: i } = e;
          e.stopPropagation(), this.handleOperationStart(t, n, i);
        }
        handleDragMove(e, t) {
          let {
            ref: { current: n },
            props: {
              id: i,
              container: { maxX: s, maxY: r, minX: a, minY: o },
              onDragStart: l,
              onDrag: d,
              snapOrientation: c,
            },
            dragState: { offsetX: h, offsetY: p },
            state: { operationStarted: f },
          } = this;
          if (null == n) return null;
          (e = Math.max(Math.min(s, e), a)), (t = Math.max(Math.min(r, t), o));
          let { width: g, height: m } = S(n, this.size),
            v = t - p,
            x = e - h,
            _ = (0, u.ou)(
              (0, u.PY)(
                { top: v, left: x, bottom: void 0, right: void 0 },
                s,
                r,
                g,
                m,
              ),
            ),
            E = c ? (0, u.R)(_) : Z("RESIZE_SOUTH_EAST", _);
          this.setDOMPositions(E),
            !f && (null != l && l(), this.setState({ operationStarted: !0 })),
            null != d && d(i, "MOVE", this.anchor, this.size);
        }
        handleResizeMove(e, t) {
          let {
              props: {
                id: n,
                minSize: i,
                container: { maxX: s, maxY: r, minX: a, minY: o },
                onDragStart: l,
                onDrag: d,
              },
              state: { operation: c, operationStarted: u },
            } = this,
            {
              startX: h,
              startY: p,
              offsetWidth: f,
              offsetHeight: g,
            } = this.dragState,
            m = 0,
            v = 0;
          if (null != c) {
            switch (
              ((e = Math.max(Math.min(s, e), a)),
              (t = Math.max(Math.min(r, t), o)),
              c)
            ) {
              case "RESIZE_EAST":
              case "RESIZE_SOUTH_EAST":
              case "RESIZE_NORTH_EAST":
                m -= h - e;
                break;
              case "RESIZE_WEST":
              case "RESIZE_SOUTH_WEST":
              case "RESIZE_NORTH_WEST":
                m += h - e;
            }
            switch (c) {
              case "RESIZE_SOUTH":
              case "RESIZE_SOUTH_WEST":
              case "RESIZE_SOUTH_EAST":
                v -= p - t;
                break;
              case "RESIZE_NORTH":
              case "RESIZE_NORTH_WEST":
              case "RESIZE_NORTH_EAST":
                v += p - t;
            }
            (f = Math.max(f + m, i.width)),
              (g = Math.max(g + v, i.height)),
              this.setDOMSize({ width: f, height: g }),
              !u && (null != l && l(), this.setState({ operationStarted: !0 })),
              null != d && d(n, c, this.anchor, this.size);
          }
        }
        setDOMPositions(e) {
          let { top: t, left: n, bottom: i, right: s } = e,
            { current: r } = this.ref;
          if (
            ((this.anchor = { top: t, left: n, bottom: i, right: s }),
            null != r)
          )
            (r.style.top = _(t)),
              (r.style.bottom = _(i)),
              (r.style.left = _(n)),
              (r.style.right = _(s));
        }
        setDOMSize(e) {
          let { width: t, height: n } = e,
            { current: i } = this.ref;
          if (
            ((t = "auto" === this.size.width ? "auto" : t),
            (n = "auto" === this.size.height ? "auto" : n),
            (this.size = { width: t, height: n }),
            null != i)
          )
            (i.style.width = _(t)), (i.style.height = _(n));
        }
        renderResizeHandles() {
          let { resizeY: e, resizeX: t, active: n } = this.props;
          return (0, a.jsxs)(o.Fragment, {
            children: [
              e
                ? (0, a.jsxs)(o.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: d()(p.resizeNorth, {
                          [p.resizeNSCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH"),
                      }),
                      (0, a.jsx)("div", {
                        className: d()(p.resizeSouth, {
                          [p.resizeNSCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_SOUTH"),
                      }),
                    ],
                  })
                : null,
              t
                ? (0, a.jsxs)(o.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: d()(p.resizeEast, { [p.resizeEWCursor]: n }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_EAST"),
                      }),
                      (0, a.jsx)("div", {
                        className: d()(p.resizeWest, { [p.resizeEWCursor]: n }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_WEST"),
                      }),
                    ],
                  })
                : null,
              t && e
                ? (0, a.jsxs)(o.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: d()(p.resizeNorthWest, {
                          [p.resizeNWSECursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST"),
                      }),
                      (0, a.jsx)("div", {
                        className: d()(p.resizeNorthEast, {
                          [p.resizeNESWCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST"),
                      }),
                      (0, a.jsx)("div", {
                        className: d()(p.resizeSouthWest, {
                          [p.resizeNESWCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST"),
                      }),
                      (0, a.jsx)("div", {
                        className: d()(p.resizeSouthEast, {
                          [p.resizeNWSECursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_SOUTH_EAST"),
                      }),
                    ],
                  })
                : null,
            ],
          });
        }
        render() {
          let {
            props: { children: e, hidden: t, onClick: n, id: i, style: s },
            size: r,
            anchor: o,
            state: { operation: l, operationStarted: c },
          } = this;
          return (0, a.jsxs)("div", {
            ref: this.ref,
            style: {
              ...o,
              ...r,
              ...s,
              ...(null != l ? { zIndex: 1e3 } : void 0),
              ...(t ? { visibility: "hidden" } : void 0),
            },
            className: d()({ [p.wrapper]: !0, [p.operation]: c }),
            onMouseDown: this.handleMouseDown,
            onClick: null != n ? () => n(i) : void 0,
            children: [
              e(this.handleOperationStart),
              this.renderResizeHandles(),
            ],
          });
        }
        constructor(e) {
          super(e),
            f(this, "anchor", void 0),
            f(this, "size", void 0),
            f(this, "ref", o.createRef()),
            f(this, "dragState", {
              startX: 0,
              startY: 0,
              offsetX: 0,
              offsetY: 0,
              offsetWidth: 0,
              offsetHeight: 0,
            }),
            f(this, "state", { operation: null, operationStarted: !1 }),
            f(this, "handleMouseDown", (e) => {
              e.stopPropagation();
              let { dragAnywhere: t } = this.props,
                { current: n } = this.ref;
              null != n &&
                e.button === h.AeJ.PRIMARY &&
                t &&
                this.handleOperationStart("MOVE", e.clientX, e.clientY);
            }),
            f(this, "handleMouseMove", (e) => {
              e.preventDefault(), e.stopPropagation();
              let { clientX: t, clientY: n } = e,
                {
                  dragState: { startX: i, startY: s },
                  state: { operation: r, operationStarted: a },
                } = this;
              if (!(null == r || (!a && 3 > g(i, s, t, n))))
                "MOVE" === r
                  ? this.handleDragMove(t, n)
                  : m.has(r) && this.handleResizeMove(t, n);
            }),
            f(this, "handleOperationStart", (e, t, n) => {
              let {
                ref: { current: i },
                props: {
                  targetWindow: s,
                  active: r,
                  container: { maxX: a, maxY: o },
                },
              } = this;
              if (null == i || !r) return;
              let { width: l, height: d } = S(i, this.size),
                c = (0, u.PY)(this.anchor, a, o, l, d);
              if ("MOVE" === e) {
                let { x: e, y: i } = (function (e) {
                  let { top: t, left: n } = e;
                  return { x: n, y: t };
                })(c);
                this.dragState = {
                  ...this.dragState,
                  startX: t,
                  startY: n,
                  offsetX: t - e,
                  offsetY: n - i,
                };
              } else {
                let i = Z(e, c);
                this.setDOMPositions(i),
                  (this.dragState = {
                    ...this.dragState,
                    startX: t,
                    startY: n,
                    offsetWidth: l,
                    offsetHeight: d,
                  });
              }
              this.setState({ operation: e, operationStarted: !1 }, () => {
                s.addEventListener("mousemove", this.handleMouseMove),
                  s.addEventListener("mouseup", this.handleOperationEnd);
              });
            }),
            f(this, "handleOperationEnd", () => {
              let { operation: e, operationStarted: t } = this.state,
                { targetWindow: n, onDragEnd: i } = this.props;
              n.removeEventListener("mousemove", this.handleMouseMove),
                n.removeEventListener("mouseup", this.handleOperationEnd);
              let s = t
                ? () => {
                    let { onUpdate: t, id: n } = this.props;
                    t(
                      e,
                      n,
                      this.anchor,
                      this.size,
                      S(this.ref.current, this.size),
                    );
                  }
                : void 0;
              if (t) {
                let { maxX: e, maxY: t } = this.props.container,
                  { width: n, height: s } = S(this.ref.current, this.size),
                  r = (0, u.PY)(this.anchor, e, t, n, s),
                  a = (0, u.R)(r);
                this.setDOMPositions(a),
                  this.setDOMSize({ width: n, height: s }),
                  null != i && i();
              }
              this.setState({ operation: null, operationStarted: !1 }, s);
            }),
            (this.anchor = x(e.anchor)),
            (this.size = v(e.size, e.minSize.width, e.minSize.height));
        }
      }
      f(E, "Operations", i),
        f(E, "defaultProps", {
          snapOrientation: !0,
          minSize: { width: 0, height: 0 },
          container: { minX: 0, minY: 0, maxX: 1 / 0, maxY: 1 / 0 },
          resizeX: !0,
          resizeY: !0,
          hidden: !1,
          dragAnywhere: !0,
          active: !0,
          targetWindow: window,
        }),
        (t.Z = E);
    },
    294033: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(131478);
      function l(e) {
        let { keybind: t, separator: n = "+", className: r } = e;
        return (0, i.jsx)(i.Fragment, {
          children: t.map((e, l) =>
            (0, i.jsxs)(
              s.Fragment,
              {
                children: [
                  (0, i.jsx)("span", { className: a()(o.key, r), children: e }),
                  l === t.length - 1 ? void 0 : n,
                ],
              },
              l,
            ),
          ),
        });
      }
    },
    593481: function (e, t, n) {
      "use strict";
      n.d(t, {
        QR: function () {
          return v;
        },
        Yj: function () {
          return x;
        },
        iz: function () {
          return m;
        },
      });
      var i,
        s = n(200651),
        r = n(192379),
        a = n(120356),
        o = n.n(a),
        l = n(481060),
        d = n(294033),
        c = n(388032),
        u = n(521772),
        h = n(232186);
      function p(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let f = (e) => e.stopPropagation(),
        g = () =>
          (0, s.jsx)("div", {
            className: u.clickBlocker,
            onClick: f,
            onMouseEnter: f,
            onMouseOver: f,
          }),
        m = () => (0, s.jsx)("div", { className: u.divider }),
        v = (e, t, n) =>
          (0, s.jsx)("div", {
            className: u.keybindMessage,
            children: c.intl.format(n, {
              keybind: t,
              keybindHook: (e, n) =>
                (0, s.jsx)(d.Z, { keybind: t, className: u.keybind }, n),
            }),
          }),
        x = (e, t) =>
          (0, s.jsx)("div", { className: u.hintSubtleText, children: t });
      class _ extends (i = r.PureComponent) {
        static getDerivedStateFromProps(e, t) {
          let { expand: n } = e,
            { expanded: i } = t;
          return !i && n ? { expanded: !0 } : null;
        }
        componentDidMount() {
          let { onNotificationShow: e } = this.props;
          null == e || e();
        }
        componentDidUpdate(e) {
          let { onNotificationShow: t } = this.props;
          null != t && null == e.onNotificationShow && t();
        }
        renderCloseButton() {
          return (0, s.jsx)(l.Button, {
            look: l.Button.Looks.BLANK,
            size: l.Button.Sizes.NONE,
            onClick: this.handleDismiss,
            className: u.dismissButton,
            "aria-label": c.intl.string(c.t.LnEgqa),
            children: (0, s.jsx)(l.XSmallIcon, {
              size: "xs",
              color: "currentColor",
              className: u.dismissIcon,
            }),
          });
        }
        renderHint() {
          let {
            props: { hint: e },
            state: { expanded: t },
          } = this;
          if (null == e) return null;
          if ("function" == typeof e) {
            let n = e(t);
            return null != n
              ? (0, s.jsxs)(
                  r.Fragment,
                  { children: [(0, s.jsx)(m, {}), n] },
                  "hint-custom",
                )
              : null;
          }
          return (0, s.jsxs)(
            r.Fragment,
            {
              children: [
                (0, s.jsx)(m, {}),
                (0, s.jsx)(
                  "div",
                  {
                    className: "string" == typeof e ? u.hintText : void 0,
                    children: e,
                  },
                  "hint-text",
                ),
              ],
            },
            "hint-text",
          );
        }
        renderFooter() {
          let {
            props: {
              cancelText: e,
              confirmText: t,
              onConfirmClick: n,
              onCancelClick: i,
              hint: a,
            },
            state: { expanded: o },
          } = this;
          if (!o) return null != a ? this.renderHint() : null;
          if (null != this.props.renderFooter) {
            let e = this.props.renderFooter(o);
            return null != e
              ? (0, s.jsxs)(
                  r.Fragment,
                  { children: [(0, s.jsx)(m, {}), e] },
                  "footer-custom-content",
                )
              : null;
          }
          if (null != n || null != i) {
            let a = l.Button.Colors.GREEN,
              o = l.Button.Colors.PRIMARY,
              d = l.Button.Looks.FILLED;
            return (0, s.jsxs)(
              r.Fragment,
              {
                children: [
                  (0, s.jsx)(m, {}),
                  (0, s.jsxs)("div", {
                    className: u.buttonContainer,
                    children: [
                      null != n
                        ? (0, s.jsx)(l.Button, {
                            fullWidth: !0,
                            size: l.Button.Sizes.SMALL,
                            color: a,
                            onClick: this.handleConfirmClick,
                            className: u.button,
                            innerClassName: u.innerText,
                            children: null != t ? t : c.intl.string(c.t.BddRzc),
                          })
                        : null,
                      null != i
                        ? (0, s.jsx)(l.Button, {
                            fullWidth: !0,
                            size: l.Button.Sizes.SMALL,
                            look: d,
                            color: o,
                            onClick: this.handleCancelClick,
                            className: u.button,
                            children:
                              null != e ? e : c.intl.string(c.t["ETE/oK"]),
                          })
                        : null,
                    ],
                  }),
                ],
              },
              "footer-button-content",
            );
          }
          return this.renderHint();
        }
        renderIcon() {
          let { icon: e } = this.props;
          return null == e
            ? null
            : "string" == typeof e
              ? (0, s.jsx)(l.Avatar, {
                  src: e,
                  size: l.AvatarSizes.SIZE_40,
                  className: u.avatar,
                  "aria-hidden": !0,
                })
              : (0, s.jsx)("div", { className: u.avatar, children: e });
        }
        renderContent() {
          let { body: e, title: t, maxBodyLines: n } = this.props;
          return (0, s.jsxs)("div", {
            className: u.content,
            children: [
              this.renderIcon(),
              (0, s.jsxs)("div", {
                className: u.details,
                children: [
                  (0, s.jsx)("div", { className: u.title, children: t }),
                  null != e
                    ? (0, s.jsx)("div", {
                        className: o()(u.body, h.marginTop4),
                        style: { WebkitLineClamp: n, lineClamp: n },
                        children: e,
                      })
                    : null,
                ],
              }),
            ],
          });
        }
        render() {
          let {
              props: { onNotificationClick: e, disabled: t },
              state: { expanded: n },
            } = this,
            i = null != e ? l.Clickable : "div";
          return (0, s.jsxs)(i, {
            onMouseOver: n ? null : this.handleMouseEnter,
            onFocus: n ? null : this.handleMouseEnter,
            onClick: e,
            className: o()(u.container, {
              [u.themePrimary]: !0,
              [u.clickable]: null != e && !t,
            }),
            children: [
              this.renderCloseButton(),
              this.renderContent(),
              this.renderFooter(),
              t ? (0, s.jsx)(g, {}) : null,
            ],
          });
        }
        constructor(e) {
          super(e),
            p(this, "handleDismiss", (e) => {
              e.stopPropagation();
              let { onDismissClick: t } = this.props;
              null == t || t(e);
            }),
            p(this, "handleConfirmClick", (e) => {
              e.stopPropagation();
              let { onConfirmClick: t } = this.props;
              null == t || t(e);
            }),
            p(this, "handleCancelClick", (e) => {
              e.stopPropagation();
              let { onCancelClick: t } = this.props;
              null == t || t(e);
            }),
            p(this, "handleMouseEnter", () => {
              !this.props.disabled && this.setState({ expanded: !0 });
            });
          let { expand: t } = e;
          this.state = { expanded: t };
        }
      }
      p(_, "defaultProps", { maxBodyLines: void 0, expand: !1, disabled: !1 }),
        (t.ZP = _);
    },
    212632: function (e, t, n) {
      "use strict";
      n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(481060),
        l = n(981631),
        d = n(388032),
        c = n(373780),
        u = n(232186);
      let h = 0,
        p = () => "notification-position-selector-".concat(h++),
        f = (e) => {
          switch (e) {
            case l._vf.TOP_LEFT:
              return d.intl.string(d.t.xlchpa);
            case l._vf.TOP_RIGHT:
              return d.intl.string(d.t["4uHRHB"]);
            case l._vf.BOTTOM_LEFT:
              return d.intl.string(d.t.ovWFnJ);
            case l._vf.BOTTOM_RIGHT:
              return d.intl.string(d.t["M/9V7+"]);
            default:
              return d.intl.string(d.t.AlY4ZW);
          }
        },
        g = [
          l._vf.DISABLED,
          l._vf.TOP_LEFT,
          l._vf.TOP_RIGHT,
          l._vf.BOTTOM_LEFT,
          l._vf.BOTTOM_RIGHT,
        ];
      function m(e) {
        let { position: t, onChange: n } = e,
          [r] = s.useState(() => p()),
          h =
            t === l._vf.DISABLED
              ? d.intl.string(d.t.R6LxVV)
              : d.intl.formatToPlainString(d.t.XXHDMz, { position: f(t) });
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(o.FocusRing, {
              within: !0,
              offset: -2,
              children: (0, i.jsx)("div", {
                className: a()(c.wrapper, {
                  [c.disabledSelected]: t === l._vf.DISABLED,
                }),
                children: g.map((e) =>
                  (0, i.jsxs)(
                    "label",
                    {
                      className: a()({
                        [c.selected]: e === t,
                        [c.disabled]: e === l._vf.DISABLED,
                        [c.topRight]: e === l._vf.TOP_RIGHT,
                        [c.topLeft]: e === l._vf.TOP_LEFT,
                        [c.bottomRight]: e === l._vf.BOTTOM_RIGHT,
                        [c.bottomLeft]: e === l._vf.BOTTOM_LEFT,
                      }),
                      children: [
                        f(e),
                        e === l._vf.DISABLED
                          ? (0, i.jsx)(o.DenyIcon, {
                              size: "md",
                              color: "currentColor",
                              className: c.disabledIcon,
                            })
                          : null,
                        (0, i.jsx)("input", {
                          type: "radio",
                          name: r,
                          value: e,
                          onChange: (t) => n(t, e),
                          className: c.hiddenInput,
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            }),
            (0, i.jsx)(o.FormText, {
              type: o.FormTextTypes.DESCRIPTION,
              className: u.marginTop8,
              children: h,
            }),
          ],
        });
      }
      (m.Positions = l._vf), (t.Z = m);
    },
    766032: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(987650);
      function s(e) {
        switch (e) {
          case i.wF.BOTTOM:
            return i.wF.BOTTOM;
          case i.wF.LOWER:
            return i.wF.LOWER;
          case i.wF.UPPER:
            return i.wF.UPPER;
          default:
            return i.wF.TOP;
        }
      }
    },
    519591: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(987650);
      function s(e) {
        switch (e) {
          case i.wF.BOTTOM:
            return i.ap.LOW;
          case i.wF.LOWER:
            return i.ap.MEDIUM;
          case i.wF.UPPER:
            return i.ap.HIGH;
          case i.wF.TOP:
            return i.ap.FULL;
          default:
            return;
        }
      }
    },
    692546: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return C;
        },
      }),
        n(47120);
      var i,
        s = n(192379),
        r = n(392711),
        a = n.n(r),
        o = n(995295),
        l = n(513431),
        d = n(902704),
        c = n(846519),
        u = n(13245),
        h = n(808506),
        p = n(671999),
        f = n(358085),
        g = n(998502);
      function m(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let v = { x: 0, y: 0 },
        x = !1;
      function _(e) {
        let { clientX: t, clientY: n } = e;
        (x = !0), (v.x = t), (v.y = n);
      }
      let S = new Map();
      function Z(e, t) {
        if (null == t)
          S.delete(e),
            0 === S.size &&
              (window.removeEventListener("mousemove", _), (x = !1));
        else {
          let n = S.get(e);
          if (null != n && (0, d.Z)(n.zone, t.zone)) return;
          0 === S.size && window.addEventListener("mousemove", _), S.set(e, t);
        }
        f.isPlatformEmbedded &&
          (h.Z.isFocusedPidOutOfProcess()
            ? u.Z.setClickZones(
                Array.from(S.values()).map((e) => {
                  let { zone: t } = e;
                  return {
                    name: t.name,
                    left: t.left / window.innerWidth,
                    top: t.top / window.innerHeight,
                    right: t.right / window.innerWidth,
                    bottom: t.bottom / window.innerHeight,
                  };
                }),
              )
            : (g.ZP.requireModule("discord_overlay2").broadcastCommand({
                message: "set_click_zones",
                zones: Array.from(S.values()).map((e) => {
                  let { zone: t } = e;
                  return t;
                }),
              }),
              (function () {
                if (!E)
                  g.ZP.requireModule("discord_overlay2").setClickZoneCallback(
                    (e, t, n) => {
                      let i = S.get(e);
                      null != i &&
                        (!x && ((v.x = t), (v.y = n)), i.instance.click());
                    },
                  ),
                    (E = !0);
              })()));
      }
      let E = !1;
      class C extends (i = s.PureComponent) {
        componentDidMount() {
          this.props.observe ? this.observeZone() : this.updateZone();
        }
        componentWillUnmount() {
          this.interval.stop(), Z(this.zone, null);
        }
        componentDidUpdate(e) {
          let { observe: t } = this.props;
          t !== e.observe && (t ? this.observeZone() : this.interval.stop());
        }
        render() {
          return s.Children.only(this.props.children);
        }
        observeZone() {
          this.updateZone(),
            this.interval.start(this.props.observeInterval, this.updateZone);
        }
        click() {
          let e = (0, p.B)("click", v.x, v.y);
          (0, p.J)(e, v.x, v.y);
        }
        constructor(...e) {
          super(...e),
            m(this, "zone", a().uniqueId("ClickArea")),
            m(this, "interval", new c.Xp()),
            m(this, "updateZone", () => {
              let e = (0, o.findDOMNode)(this);
              if ((0, l.k)(e)) {
                let {
                  left: t,
                  top: n,
                  right: i,
                  bottom: s,
                } = e.getBoundingClientRect();
                Z(this.zone, {
                  instance: this,
                  zone: {
                    name: this.zone,
                    left: Math.ceil(t),
                    top: Math.ceil(n),
                    right: Math.ceil(i),
                    bottom: Math.ceil(s),
                  },
                });
              }
            });
        }
      }
      m(C, "defaultProps", { observe: !0, observeInterval: 1e3 });
    },
    244073: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return R;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(568611),
        l = n(442837),
        d = n(481060),
        c = n(846027),
        u = n(925549),
        h = n(287734),
        p = n(933557),
        f = n(600164),
        g = n(870569),
        m = n(345243),
        v = n(873596),
        x = n(917405),
        _ = n(430824),
        S = n(131951),
        Z = n(699516),
        E = n(594174),
        C = n(979651),
        I = n(362446),
        y = n(518084),
        N = n(981631),
        b = n(388032),
        T = n(963656),
        O = n(382290);
      function j(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class M extends s.PureComponent {
        handleDisconnect() {
          h.default.selectVoiceChannel(null);
        }
        renderChannelLink(e) {
          let { guild: t } = this.props,
            n = (0, p.F6)(e, E.default, Z.Z),
            s = null != t ? "".concat(n, " / ").concat(t.name) : n,
            r = null != t ? t.id : N.ME;
          return (0, i.jsx)(o.rU, {
            to: N.Z5c.CHANNEL(r),
            onClick: (t) => {
              t.stopPropagation(), u.Z.channelListScrollTo(r, e.id);
            },
            children: (0, i.jsx)(m.Z, { className: O.channel, children: s }),
          });
        }
        render() {
          let {
            className: e,
            contentClassName: t,
            pinned: n,
            lobbyId: s,
            channel: r,
            quality: o,
            lastPing: l,
            hasVideo: c,
            connectionState: u,
            deaf: h,
            mute: p,
          } = this.props;
          return null == r
            ? null
            : (0, i.jsx)(y.ZP.Bar, {
                className: a()(e, T.controls, { [T.unpinned]: !n }),
                children: (0, i.jsxs)(y.ZP.Content, {
                  className: a()(t, T.content),
                  dynamicSize: !0,
                  children: [
                    (0, i.jsx)("div", {
                      className: O.inner,
                      children: (0, i.jsx)(d.Popout, {
                        renderPopout: () => this.renderPopout(r.id),
                        position: "top",
                        children: (e) =>
                          (0, i.jsx)(d.Clickable, {
                            ...e,
                            children: (0, i.jsx)(x.Z, {
                              channelId: r.id,
                              quality: o,
                              lastPing: l,
                              hasVideo: c,
                              state: u,
                              children: this.renderChannelLink(r),
                            }),
                          }),
                      }),
                    }),
                    (0, i.jsxs)(f.Z, {
                      grow: 0,
                      children: [
                        (0, i.jsx)(g.Z, {
                          tooltipText: p
                            ? b.intl.string(b.t.YqAjX1)
                            : b.intl.string(b.t["w4m94+"]),
                          icon: p ? d.MicrophoneSlashIcon : d.MicrophoneIcon,
                          iconForeground: p ? T.strikethrough : null,
                          onClick: this.handleToggleSelfMute,
                        }),
                        (0, i.jsx)(g.Z, {
                          tooltipText: h
                            ? b.intl.string(b.t["2US87+"])
                            : b.intl.string(b.t.wjcRFR),
                          icon: h ? d.HeadphonesSlashIcon : d.HeadphonesIcon,
                          onClick: this.handleToggleSelfDeaf,
                          iconForeground: h ? T.strikethrough : null,
                        }),
                        null == s &&
                          (0, i.jsx)(g.Z, {
                            tooltipText: b.intl.string(b.t["6vrfgo"]),
                            onClick: this.handleDisconnect,
                            icon: d.PhoneHangUpIcon,
                          }),
                      ],
                    }),
                  ],
                }),
              });
        }
        constructor(...e) {
          super(...e),
            j(this, "handleToggleSelfMute", () => {
              let { context: e } = this.props;
              c.Z.toggleSelfMute({ context: e, location: "Overlay Controls" });
            }),
            j(this, "handleToggleSelfDeaf", () => {
              let { context: e } = this.props;
              c.Z.toggleSelfDeaf({ context: e, location: "Overlay Controls" });
            }),
            j(this, "renderPopout", (e) => {
              let { lobbyId: t } = this.props;
              return (0, i.jsx)(v.Z, {
                channelId: e,
                lobbyId: t,
                isOverlay: !0,
              });
            });
        }
      }
      function R(e) {
        let { context: t, lobbyId: n, channel: s, ...r } = e,
          a = (0, l.e7)([_.Z], () =>
            _.Z.getGuild(null == s ? void 0 : s.getGuildId()),
          ),
          o = (0, l.e7)([C.Z], () => null != s && C.Z.hasVideo(s.id)),
          [d, c] = (0, l.Wu)([S.Z], () => [
            S.Z.isSelfMute(t) || S.Z.isSelfMutedTemporarily(t),
            S.Z.isSelfDeaf(t),
          ]),
          [u, h, p] = (0, l.Wu)([I.Z], () => [
            I.Z.getConnectionState(n),
            I.Z.getLastPing(n),
            I.Z.getQuality(n),
          ]);
        return (0, i.jsx)(M, {
          ...r,
          context: t,
          lobbyId: n,
          channel: s,
          guild: a,
          hasVideo: o,
          mute: d,
          deaf: c,
          connectionState: u,
          lastPing: h,
          quality: p,
        });
      }
    },
    382790: function (e, t, n) {
      "use strict";
      n(47120);
      var i,
        s = n(200651),
        r = n(192379),
        a = n(120356),
        o = n.n(a),
        l = n(442837),
        d = n(552062),
        c = n(416568),
        u = n(914010),
        h = n(518084),
        p = n(178528),
        f = n(669083),
        g = n(483962),
        m = n(711553),
        v = n(388032),
        x = n(433217);
      function _(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function S(e) {
        let { closePopout: t } = e;
        return (0, s.jsx)(f.Z, { onClose: t });
      }
      class Z extends (i = r.PureComponent) {
        render() {
          let {
              selectedGuildId: e,
              locked: t,
              contained: n,
              className: i,
            } = this.props,
            r =
              null != e
                ? (0, s.jsx)(
                    p.Z,
                    { guildId: e, onDragStart: this.onDragStart },
                    e,
                  )
                : (0, s.jsx)(m.Z, {
                    title: v.intl.string(v.t.YUU0RE),
                    renderSettings: S,
                    onDragStart: this.onDragStart,
                    children: (0, s.jsx)(g.Z, {}),
                  }),
            a = n ? "div" : h.ZP;
          return (0, s.jsxs)(a, {
            className: o()(x.base, { [x.widget]: !n }, i),
            children: [
              (0, s.jsx)(c.Z, {
                isOverlay: !0,
                disableAppDownload: !0,
                isVisible: !t,
              }),
              r,
            ],
          });
        }
        constructor(...e) {
          super(...e),
            _(this, "onDragStart", (e) => {
              let { dragStart: t } = this.props;
              t(d.B.MOVE, e.clientX, e.clientY);
            });
        }
      }
      _(Z, "defaultProps", { contained: !1 }),
        (t.Z = l.ZP.connectStores([u.Z], () => ({
          selectedGuildId: u.Z.getGuildId(),
        }))(Z));
    },
    990673: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(120356),
        r = n.n(s),
        a = n(382790),
        o = n(430036),
        l = n(518084),
        d = n(176259);
      function c(e) {
        let {
          dragStart: t,
          dragging: n,
          pinned: s,
          locked: c,
          className: u,
        } = e;
        return (0, i.jsxs)(l.ZP, {
          className: r()(d.wrapper, u),
          children: [
            (0, i.jsx)(a.Z, { contained: !0, dragStart: t, locked: c }),
            (0, i.jsx)(o.Z, {
              dragStart: t,
              locked: c,
              pinned: s,
              dragging: n,
              contained: !0,
            }),
          ],
        });
      }
    },
    876205: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(120356),
        r = n.n(s),
        a = n(442837),
        o = n(481060),
        l = n(556296),
        d = n(13140),
        c = n(981631),
        u = n(346728);
      let h = {
        [c.kg4.TOGGLE_MUTE]: {
          legacy: { slash: o.MicrophoneSlashIcon, default: o.MicrophoneIcon },
          new: { slash: o.MicrophoneSlashIcon, default: o.MicrophoneIcon },
        },
      };
      function p(e) {
        let { value: t, action: n, shouldShow: s } = e,
          c = (0, a.e7)([l.Z], () => l.Z.getKeybindForAction(n, !1, !0)),
          p = (0, o.useRedesignIconContext)().enabled;
        if (null == c || !s) return null;
        let f = d.BB(c.shortcut),
          g = p ? h[n].new : h[n].legacy,
          m = t ? g.slash : g.default;
        return (0, i.jsxs)("div", {
          className: u.keybindIndicator,
          children: [
            (0, i.jsx)(m, {
              className: u.keybindIcon,
              size: "xs",
              color: "currentColor",
            }),
            (0, i.jsx)(o.Text, {
              variant: "text-xxs/semibold",
              className: r()(u.keybindIndicatorText),
              children: f,
            }),
          ],
        });
      }
    },
    358446: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return f;
        },
        Z: function () {
          return g;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var s = n(704215),
        r = n(481060),
        a = n(13245),
        o = n(312839),
        l = n(706140),
        d = n(809357),
        c = n(987650),
        u = n(921944),
        h = n(388032),
        p = n(60944);
      function f() {
        let [e, t] = (0, l.cv)([s.z.OVERLAY_KEYBIND_NOTIFICATION]),
          n = (0, d.Z)({
            location: "Overlay",
            options: { autoTrackExposure: !1 },
          });
        return {
          showKeybindIndicators: null != e && n,
          dismissKeybindNotification: t,
        };
      }
      function g(e) {
        let { markAsDismissed: t } = e,
          { trackView: n, trackClick: s } = (0, o.R)(
            c.n0.KeybindIndicatorsNotification,
            { notif_type: c.n0.KeybindIndicatorsNotification },
          );
        return {
          icon: null,
          body: (0, i.jsxs)("div", {
            className: p.notificationBody,
            children: [
              (0, i.jsx)("div", {
                className: p.iconContainer,
                children: (0, i.jsx)(r.MicrophoneIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 28,
                  width: 28,
                }),
              }),
              (0, i.jsx)(r.Text, {
                variant: "text-sm/normal",
                children: h.intl.string(h.t.EFRNtL),
              }),
            ],
          }),
          onDismissClick: (e, n) => {
            s("dismiss"), t(u.L.DISMISS), a.Z.updateNotificationStatus(n);
          },
          onNotificationShow: () => {
            t(u.L.AUTO_DISMISS), n();
          },
        };
      }
    },
    438015: function (e, t, n) {
      "use strict";
      n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(13245),
        a = n(593481),
        o = n(692546),
        l = n(981631),
        d = n(606953);
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class u extends s.Component {
        getStyle() {
          let e, t, n, i;
          let {
            props: { position: s, zIndex: r },
          } = this;
          switch (s) {
            case l._vf.TOP_LEFT:
            case l._vf.BOTTOM_LEFT:
              e = 0;
              break;
            default:
              t = 0;
          }
          switch (s) {
            case l._vf.BOTTOM_LEFT:
            case l._vf.BOTTOM_RIGHT:
              n = 0;
              break;
            default:
              i = 0;
          }
          return { left: e, right: t, bottom: n, top: i, zIndex: r };
        }
        render() {
          let {
              props: {
                locked: e,
                index: t,
                notification: {
                  props: {
                    renderFooter: n,
                    onNotificationShow: s,
                    onDismissClick: r,
                    onNotificationClick: l,
                    onConfirmClick: c,
                    onCancelClick: u,
                    ...h
                  },
                },
              },
            } = this,
            p = (0, i.jsx)("div", {
              className: d.notificationContainer,
              children: (0, i.jsx)(a.ZP, {
                ...h,
                onNotificationShow:
                  0 === t ? this.handleNotificationShow : null,
                onDismissClick: this.handleDismissClick,
                onNotificationClick:
                  null != l ? this.handleNotificationClick : null,
                onConfirmClick: null != c ? this.handleConfirmClick : null,
                onCancelClick: null != u ? this.handleCancelClick : null,
                renderFooter: this.renderFooter,
                expand: !e && 0 === t,
                disabled: 0 !== t,
              }),
            });
          return 0 === t
            ? (0, i.jsx)(o.Z, { observeInterval: 200, children: p })
            : p;
        }
        constructor(...e) {
          super(...e),
            c(this, "handleNotificationShow", () => {
              let {
                id: e,
                props: { onNotificationShow: t },
              } = this.props.notification;
              t(e);
            }),
            c(this, "handleDismissClick", (e) => {
              let {
                id: t,
                props: { onDismissClick: n },
              } = this.props.notification;
              r.Z.updateNotificationStatus(t), null != n && n(e, t);
            }),
            c(this, "handleNotificationClick", (e) => {
              let {
                id: t,
                props: { onNotificationClick: n },
              } = this.props.notification;
              null != n && n(e, t);
            }),
            c(this, "handleConfirmClick", (e) => {
              let {
                id: t,
                props: { onConfirmClick: n },
              } = this.props.notification;
              null != n && n(e, t);
            }),
            c(this, "handleCancelClick", (e) => {
              let {
                id: t,
                props: { onCancelClick: n },
              } = this.props.notification;
              null != n && n(e, t);
            }),
            c(this, "renderFooter", (e) => {
              let {
                id: t,
                props: { renderFooter: n },
              } = this.props.notification;
              return null != n ? n(e, t) : null;
            });
        }
      }
      t.Z = u;
    },
    348733: function (e, t, n) {
      "use strict";
      var i = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(442837),
        l = n(261435),
        d = n(237997),
        c = n(438015),
        u = n(981631),
        h = n(544690);
      class p extends s.Component {
        render() {
          let {
            keybind: e,
            notifications: t,
            position: n,
            locked: s,
          } = this.props;
          if (n === u._vf.DISABLED) return null;
          let r = -1;
          return (0, i.jsx)("div", {
            className: a()(h.container, h[n]),
            children: t.map((t) =>
              s && t.status === u._1z.TIMED_OUT
                ? null
                : ((r += 1),
                  (0, i.jsx)(
                    c.Z,
                    {
                      index: r,
                      zIndex: 100 - r,
                      position: n,
                      notification: t,
                      keybind: e,
                      locked: s,
                    },
                    t.id,
                  )),
            ),
          });
        }
      }
      t.Z = o.ZP.connectStores([l.Z, d.Z], () => ({
        notifications: l.Z.getNotifications(),
        position: d.Z.getNotificationPositionMode(),
      }))(p);
    },
    312178: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return E;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(442837),
        a = n(765250),
        o = n(13245),
        l = n(26229),
        d = n(552062),
        c = n(355863),
        u = n(237997),
        h = n(451478),
        p = n(434529),
        f = n(145597),
        g = n(382790),
        m = n(990673),
        v = n(906037),
        x = n(430036),
        _ = n(839434),
        S = n(981631);
      function Z(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let E = {
        [S.Odu.TEXT](e) {
          let {
            dragging: t,
            locked: n,
            pinned: s,
            dragStart: r,
            className: a,
          } = e;
          return (0, i.jsx)(x.Z, {
            dragStart: r,
            locked: n,
            pinned: s,
            dragging: t,
            className: a,
          });
        },
        [S.Odu.GUILDS](e) {
          let { locked: t, dragStart: n, className: s } = e;
          return (0, i.jsx)(g.Z, { dragStart: n, locked: t, className: s });
        },
        [S.Odu.VOICE](e) {
          let {
            id: t,
            anchor: n,
            isPreviewingInGame: s,
            locked: r,
            pinned: a,
          } = e;
          return (0, i.jsx)(_.Z, {
            anchor: n,
            id: t,
            locked: r,
            pinned: a,
            widget: S.Odu.VOICE,
            isPreviewingInGame: s,
          });
        },
        [S.Odu.GUILDS_TEXT](e) {
          let { dragging: t, locked: n, dragStart: s, className: r } = e;
          return (0, i.jsx)(m.Z, {
            dragStart: s,
            dragging: t,
            locked: n,
            pinned: !1,
            className: r,
          });
        },
      };
      class C extends s.PureComponent {
        componentDidUpdate(e) {
          this.props.locked &&
            !e.locked &&
            null != this.state.lastLayoutUpdate &&
            (o.Z.track(
              S.rMx.OVERLAY_LAYOUT_UPDATED,
              this.state.lastLayoutUpdate,
            ),
            this.setState({ lastLayoutUpdate: null }));
        }
        renderWidget(e, t, n) {
          let {
              props: { locked: i, isPreviewingInGame: s },
              state: { dragging: r },
            } = this,
            a = E[e.type];
          return null == a
            ? null
            : (o) =>
                a({
                  id: e.id,
                  locked: i,
                  pinned: e.pinned,
                  dragging: r,
                  isPreviewingInGame: s,
                  anchor: t,
                  size: n,
                  dragStart: o,
                });
        }
        render() {
          let {
            widget: e,
            widgetConfig: t,
            layoutSize: n,
            locked: s,
            isPreviewingInGame: r,
            isActiveRegion: a,
          } = this.props;
          if (null == e || null == t) return null;
          let { id: o, pinned: l, zIndex: c, size: u, anchor: h } = e,
            f = (0, p.w_)(u, n),
            g = (0, p.KR)(h, n),
            { minSize: m, resizeX: x, resizeY: _, dragAnywhere: S } = t,
            Z = (0, v.eM)({ locked: s, isPreviewingInGame: r, pinned: l }),
            E = { minX: 0, minY: 0, maxX: n.width, maxY: n.height },
            C = this.renderWidget(e, g, f);
          return null == C
            ? null
            : (0, i.jsx)(d.Z, {
                id: o,
                size: f,
                anchor: g,
                container: E,
                minSize: m,
                hidden: !Z,
                resizeX: x,
                resizeY: _,
                style: { zIndex: c },
                dragAnywhere: S,
                active: !s || a,
                onUpdate: this.handleUpdate,
                onClick: this.handleFocus,
                onDragStart: this.handleDragStart,
                onDragEnd: this.handleDragEnd,
                children: C,
              });
        }
        constructor(...e) {
          super(...e),
            Z(this, "state", { lastLayoutUpdate: null, dragging: !1 }),
            Z(this, "handleUpdate", (e, t, n, i, s) => {
              let {
                props: { layoutSize: r },
                state: { lastLayoutUpdate: o },
              } = this;
              if (!(0, f.Te)(r)) return;
              let l = (0, p.jL)(n, r),
                u = (0, p.Ox)(i, r);
              (0, a.Os)(t), (0, a.nv)({ widgetId: t, anchor: l, size: u });
              let h = e === d.B.MOVE,
                g = (0, p.PY)(n, r.width, r.height, s.width, s.height);
              this.setState({
                lastLayoutUpdate: {
                  was_resized: (null != o && o.was_resized) || !h,
                  was_dragged: (null != o && o.was_dragged) || h,
                  widget_type: c.Z.getWidgetType(t),
                  window_width: r.width,
                  window_height: r.height,
                  widget_width: s.width,
                  widget_height: s.height,
                  widget_left: g.left,
                  widget_top: g.top,
                },
              });
            }),
            Z(this, "handleFocus", (e) => {
              let { layoutSize: t } = this.props;
              (0, f.Te)(t) && (0, a.Os)(e);
            }),
            Z(this, "handleDragStart", () => {
              let { widget: e } = this.props;
              null != e &&
                (e.pinned && o.Z.setPreviewInGameMode(!0),
                this.setState({ dragging: !0 }));
            }),
            Z(this, "handleDragEnd", () => {
              let { widget: e } = this.props;
              null != e &&
                (e.pinned && o.Z.setPreviewInGameMode(!1),
                this.setState({ dragging: !1 }));
            });
        }
      }
      let I = r.ZP.connectStores([c.Z, u.Z], (e) => {
        let { widgetId: t } = e,
          n = c.Z.getWidget(t),
          i = u.Z.getActiveRegions();
        return {
          widget: n,
          widgetConfig: null != n ? c.Z.getWidgetConfig(n.type) : null,
          locked: u.Z.isInstanceLocked(),
          isPreviewingInGame: u.Z.isPreviewingInGame(),
          isActiveRegion:
            null != n && n.type === S.Odu.TEXT && i.has(S.O0n.TEXT_WIDGET),
        };
      })(C);
      function y(e, t) {
        return (0, i.jsx)(I, { widgetId: e, layoutSize: t }, e);
      }
      t.Z = r.ZP.connectStores([c.Z, h.Z], () => {
        var e;
        return {
          layout:
            null !== (e = c.Z.getLayout(f.qU)) && void 0 !== e ? e : void 0,
          layoutSize: h.Z.windowSize(),
          renderWidget: y,
        };
      })(l.Z);
    },
    708383: function (e, t, n) {
      "use strict";
      var i = n(200651),
        s = n(192379),
        r = n(512969),
        a = n(749210),
        o = n(287734),
        l = n(765717),
        d = n(893607),
        c = n(703656),
        u = n(981631);
      class h extends s.Component {
        componentDidUpdate(e) {
          let { location: t } = this.props;
          t.pathname + t.search !== e.location.pathname + e.location.search &&
            this.checkGuildAndChannel();
        }
        checkGuildAndChannel() {
          let { match: e } = this.props;
          if (null == e) return;
          let {
            guildId: t,
            channelId: n,
            messageId: i,
          } = (function (e) {
            let { guildId: t, channelId: n, messageId: i } = e.params;
            return {
              guildId: null != t && "" !== t ? t : u.ME,
              channelId: n,
              messageId: i,
            };
          })(e);
          (0, d.Ss)(t) && (0, d.cq)(n)
            ? (a.Z.selectGuild(t),
              o.default.selectChannel({
                guildId: t,
                channelId: n,
                messageId: i,
              }))
            : (0, c.dL)(u.Z5c.ME);
        }
        render() {
          return null;
        }
      }
      t.Z = () =>
        (0, i.jsxs)(r.rs, {
          children: [
            (0, i.jsx)(l.Z, {
              path: u.Z5c.CHANNEL(
                d.Hw.guildId(),
                d.Hw.channelId({ optional: !0 }),
                ":messageId?",
              ),
              component: h,
            }),
            (0, i.jsx)(l.Z, { component: h }),
          ],
        });
    },
    923532: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = n(200651),
        s = n(192379),
        r = n(512722),
        a = n.n(r),
        o = n(399606),
        l = n(822183),
        d = n(673125),
        c = n(610947),
        u = n(594174),
        h = n(497343);
      function p(e) {
        let { streamerId: t, channelId: n } = e,
          r = s.useRef(null),
          l = (0, o.e7)([u.default], () => u.default.getCurrentUser());
        return (
          a()(null != l, "user cannot be null"),
          (0, c.Z)(r, l, t, n),
          (0, i.jsx)("canvas", { className: h.canvas, ref: r })
        );
      }
      function f(e) {
        let { guildId: t, channelId: n, streamerId: s } = e,
          { isSharedCanvasEnabled: r } = l.Z.useExperiment(
            { guildId: t, location: "f0d1b1_1" },
            { autoTrackExposure: !0 },
          ),
          a = (0, o.e7)([d.Z], () => d.Z.visibleOverlayCanvas);
        return r && a
          ? (0, i.jsx)(p, { guildId: t, channelId: n, streamerId: s })
          : null;
      }
    },
    430036: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return er;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(512722),
        l = n.n(o),
        d = n(442837),
        c = n(481060),
        u = n(239091),
        h = n(430742),
        p = n(904245),
        f = n(13245),
        g = n(144144),
        m = n(738619),
        v = n(744061),
        x = n(36311),
        _ = n(655687),
        S = n(823748),
        Z = n(25007),
        E = n(199649),
        C = n(1397),
        I = n(541716),
        y = n(752305),
        N = n(974251),
        b = n(893718),
        T = n(249458),
        O = n(552062),
        j = n(957730),
        M = n(400023),
        R = n(623292),
        P = n(807092),
        w = n(592125),
        A = n(703558),
        k = n(731290),
        D = n(430824),
        L = n(375954),
        z = n(944486),
        B = n(914010),
        V = n(594174),
        W = n(556296),
        U = n(237997),
        F = n(585483),
        G = n(838440),
        H = n(13140),
        Y = n(519591),
        K = n(906037),
        X = n(786906),
        Q = n(518084),
        J = n(987650),
        q = n(981631),
        $ = n(388032),
        ee = n(684648);
      function et(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let en = J.wF.TOP;
      class ei extends s.Component {
        componentDidUpdate(e) {
          e.channel.id !== this.props.channel.id &&
            this.draftDidChange(this.props),
            (this.props.channel !== e.channel ||
              (this.props.isTemporarilyActive && !e.isTemporarilyActive)) &&
              this.setState({ focused: !0 });
        }
        componentWillUnmount() {
          A.Z.removeChangeListener(this.draftDidChange),
            F.S.unsubscribe(q.CkL.TEXTAREA_FOCUS, this.focusInput),
            F.S.unsubscribe(q.CkL.TEXTAREA_BLUR, this.blurInput);
        }
        render() {
          let { channel: e, placeholder: t, ...n } = this.props,
            {
              focused: s,
              textValue: r,
              contentWarningProps: a,
              richValue: o,
            } = this.state,
            d = (0, i.jsx)(c.Popout, {
              position: "top",
              onRequestClose: () => {
                var e;
                null == a ||
                  null === (e = a.onCancel) ||
                  void 0 === e ||
                  e.call(a),
                  this.setState({ contentWarningProps: null });
              },
              shouldShow: null != a,
              renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                  l()(
                    null != a,
                    "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null",
                  ),
                  (0, i.jsx)(v.Z, { onClose: t, ...a })
                );
              },
              children: () =>
                (0, i.jsx)(b.Z, {
                  ...n,
                  renderAttachButton: this.renderAttachButton,
                  channel: e,
                  type: I.Ie.OVERLAY,
                  onFocus: () => this.setState({ focused: !0 }),
                  onBlur: () => this.setState({ focused: !1 }),
                  placeholder: t,
                  textValue: r,
                  richValue: o,
                  onSubmit: this.handleSendMessage,
                  onChange: this.handleTextareaChange,
                  onKeyDown: this.handleTextareaKeyDown,
                  focused: s,
                }),
            });
          return e.isPrivate()
            ? (0, i.jsx)(E.Z, { channel: e, children: d }, e.id)
            : (0, i.jsx)(C.Z, { channel: e, children: d }, e.id);
        }
        constructor(e) {
          var t;
          super(e),
            (t = this),
            et(this, "draftDidChange", function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : t.props,
                { textValue: n } = t.state,
                i = A.Z.getDraft(e.channel.id, A.d.ChannelMessage);
              n !== i && "" === i && t.setState((0, y.eK)(i));
            }),
            et(this, "handleTextareaKeyDown", (e) => {
              if (
                e.which === q.yXg.ARROW_UP &&
                !e.shiftKey &&
                !e.altKey &&
                !e.ctrlKey &&
                !e.metaKey &&
                0 === this.state.textValue.length
              ) {
                e.preventDefault();
                let { channel: t } = this.props,
                  n = L.Z.getLastEditableMessage(t.id);
                null != n && p.Z.startEditMessage(t.id, n.id, n.content);
              }
            }),
            et(this, "handleTextareaChange", (e, t, n) => {
              let {
                channel: { id: i },
              } = this.props;
              h.Z.changeDraft(i, this.state.textValue, A.d.ChannelMessage),
                "" !== t ? g.Z.startTyping(i) : g.Z.stopTyping(i),
                this.setState({ textValue: t, richValue: n });
            }),
            et(this, "handleSendMessage", (e) => {
              let { value: t } = e,
                {
                  channel: n,
                  pendingReply: i,
                  isTemporarilyActive: s,
                } = this.props;
              return 0 === t.length
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (0, G.v)({
                    openWarningPopout: (e) =>
                      this.setState({ contentWarningProps: e }),
                    type: I.Ie.OVERLAY,
                    content: t,
                    channel: n,
                  }).then((e) => {
                    let { valid: r, failureReason: a } = e;
                    if (!r)
                      return a === q.zYc.SLOWMODE_COOLDOWN
                        ? (F.S.dispatch(q.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                          { shouldClear: !1, shouldRefocus: !0 })
                        : { shouldClear: !1, shouldRefocus: !1 };
                    let o = p.Z.getSendMessageOptionsForReply(i);
                    return (p.Z.sendMessage(n.id, j.ZP.parse(n, t), !0, o),
                    this.setState((0, y.H2)()),
                    (0, R.A6)(n.id),
                    s)
                      ? (f.Z.deactivateAllRegions(),
                        { shouldClear: !1, shouldRefocus: !1 })
                      : { shouldClear: !0, shouldRefocus: !0 };
                  });
            }),
            et(this, "focusInput", () => {
              this.setState({ focused: !0 });
            }),
            et(this, "blurInput", () => {
              this.setState({ focused: !1 });
            }),
            et(this, "renderAttachButton", (e, t) =>
              (0, i.jsx)(N.Z, {
                className: t,
                channel: this.props.channel,
                draftType: A.d.ChannelMessage,
                editorTextContent: this.state.textValue,
                setValue: (e) =>
                  this.handleTextareaChange(null, e, (0, y.JM)(e)),
                canOnlyUseTextCommands: e,
              }),
            ),
            A.Z.addChangeListener(this.draftDidChange);
          let n = A.Z.getDraft(e.channel.id, A.d.ChannelMessage);
          (this.state = {
            ...(0, y.eK)(n),
            focused: !1,
            contentWarningProps: null,
          }),
            F.S.subscribe(q.CkL.TEXTAREA_FOCUS, this.focusInput),
            F.S.subscribe(q.CkL.TEXTAREA_BLUR, this.blurInput);
        }
      }
      class es extends s.PureComponent {
        componentDidUpdate(e) {
          let { channel: t, activated: n } = this.props;
          if (((0, K.CR)(e, this.props, this.shouldDisplay), null != t))
            n &&
              !e.activated &&
              f.Z.track(q.rMx.OVERLAY_UNLOCKED, {
                channel_id: t.id,
                channel_type: t.type,
                guild_id: t.guild_id,
              });
        }
        componentDidMount() {
          (0, K.m3)(this.props, this.shouldDisplay());
        }
        getOpacity() {
          let e;
          let {
            locked: t,
            activated: n,
            opacity: i,
            isPreviewingInGame: s,
          } = this.props;
          return (e =
            (t && !n) || s
              ? i / 100
              : n || !t
                ? Math.min(1, (i + 25) / 100)
                : Q.wB);
        }
        renderContent() {
          let e;
          let {
            channel: t,
            placeholder: n,
            nsfwAgree: r,
            guild: o,
            locked: l,
            activated: d,
            chatKeybind: c,
            pinned: u,
            isPreviewingInGame: h,
            dragging: p,
            pendingReply: f,
          } = this.props;
          if (null == t) return null;
          let g = l || h,
            v = !r && null != t && t.isNSFW(),
            _ = !g || d;
          return (
            (e =
              v && null != o
                ? (0, i.jsx)(x.Z, { guild: o })
                : (0, i.jsx)(
                    M.Z,
                    {
                      channel: t,
                      className: ee.messages,
                      forceCompact: u,
                      showNewMessagesBar: !g,
                      scrollerClassName: u ? ee.scroller : void 0,
                      showingQuarantineBanner: !1,
                    },
                    t.id,
                  )),
            (0, i.jsx)(T.G.Provider, {
              value: {
                disableInteractions: u && l && !d,
                disableAnimations: u && g && !d,
              },
              children: (0, i.jsxs)(s.Fragment, {
                children: [
                  !l && !h && (0, i.jsx)(Z.Z, { channel: t, guild: o }),
                  (0, i.jsx)(Q.ZP.Background, {
                    opacityOverride: l || h ? null : en,
                    children: (0, i.jsx)("div", {
                      className: a()(ee.messagesContainer, {
                        [ee.isDragging]: p,
                        [ee.disableHoverStates]: u && l && !d,
                      }),
                      children: e,
                    }),
                  }),
                  v
                    ? null
                    : (0, i.jsx)("div", {
                        children: _
                          ? (0, i.jsx)(Q.ZP.Background, {
                              opacityOverride: l || h ? null : en,
                              children: (0, i.jsxs)("div", {
                                className: ee.footerContent,
                                children: [
                                  (0, i.jsx)(ei, {
                                    channel: t,
                                    placeholder: n,
                                    isTemporarilyActive: d,
                                    pendingReply: f,
                                  }),
                                  (0, i.jsx)("div", {
                                    className: ee.typingWrapper,
                                    children: (0, i.jsx)(m.Z, {
                                      channel: t,
                                      className: ee.typing,
                                    }),
                                  }),
                                ],
                              }),
                            })
                          : (0, i.jsx)("div", {
                              className: ee.activateContainer,
                              children: (0, i.jsx)(Q.ZP.Background, {
                                opacityOverride: J.wF.LOWER,
                                children: (0, i.jsx)("div", {
                                  className: a()(
                                    ee.activateKeybind,
                                    ee.__invalid_mediumBackgroundOpacity,
                                  ),
                                  children:
                                    null != t.name && t.name.length > 0
                                      ? $.intl.formatToPlainString(
                                          $.t["9TkYMD"],
                                          {
                                            keybind: c,
                                            channelName: t.isMultiUserDM()
                                              ? t.name
                                              : "#".concat(t.name),
                                          },
                                        )
                                      : $.intl.formatToPlainString(
                                          $.t["hxz/4O"],
                                          { keybind: c },
                                        ),
                                }),
                              }),
                            }),
                      }),
                ],
              }),
            })
          );
        }
        renderWidgetWrapper(e) {
          let {
              locked: t,
              pinned: n,
              activated: s,
              isPreviewingInGame: r,
              opacity: o,
              className: l,
            } = this.props,
            d = q.t_t.UNPINNED;
          s
            ? (d = q.t_t.IN_GAME_ACTIVE)
            : (n && t) || r
              ? (d = q.t_t.IN_GAME_TEXT)
              : n && (d = q.t_t.PINNED);
          let c = (t && !s) || r,
            u = n && (c || s),
            h = n && s,
            p = n && c && !s,
            f = (0, Y.Z)(o);
          return (0, i.jsx)(Q.ZP, {
            className: a()(
              f,
              {
                [ee.widgetWrapper]: !n,
                [ee.widgetWrapperPinned]: n,
                [ee.locked]: p,
                [ee.inGame]: u,
                [ee.inGameActive]: h,
                [ee.pinned]: n,
                "overlay-unlocked": !t,
              },
              l,
            ),
            type: d,
            opacity: o,
            children: e,
          });
        }
        renderContainedWrapper(e) {
          return (0, i.jsx)("div", { className: ee.contained, children: e });
        }
        shouldDisplay() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.props;
          return null != e.channel;
        }
        render() {
          let {
            locked: e,
            channel: t,
            pinned: n,
            isPreviewingInGame: r,
            contained: a,
          } = this.props;
          if (null == t || !this.shouldDisplay()) return null;
          let o = (0, i.jsxs)(s.Fragment, {
            children: [
              (0, i.jsx)(X.Z, {
                draggableClassName: ee.draggableStartArea,
                className: ee.headerDefault,
                channel: t,
                locked: e,
                pinned: n,
                disableDragIndicator: a,
                isPreviewingInGame: r,
                handlePin: this.handlePin,
                onContextMenu: this.handleContextMenu,
                onMouseDown: this.moveDragStart,
              }),
              this.renderContent(),
              e || r
                ? null
                : (0, i.jsx)("div", {
                    className: ee.resizeIcon,
                    onMouseDown: this.resizeDragStart,
                  }),
            ],
          });
          return a
            ? this.renderContainedWrapper(o)
            : this.renderWidgetWrapper(o);
        }
        constructor(...e) {
          super(...e),
            et(this, "handlePin", () => {
              var e, t, n;
              let i = !this.props.pinned;
              f.Z.track(q.rMx.OVERLAY_PIN_TOGGLED, {
                pinned: i,
                guild_id:
                  null === (e = this.props.channel) || void 0 === e
                    ? void 0
                    : e.guild_id,
                channel_id:
                  null === (t = this.props.channel) || void 0 === t
                    ? void 0
                    : t.id,
                channel_type:
                  null === (n = this.props.channel) || void 0 === n
                    ? void 0
                    : n.type,
                widget_type: q.Odu.TEXT,
              }),
                f.Z.setPinChat(i);
            }),
            et(this, "handleContextMenu", (e) => {
              let { channel: t, user: s } = this.props;
              null != t &&
                null != s &&
                (0, u.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("92453"),
                    n.e("56826"),
                    n.e("5606"),
                  ]).then(n.bind(n, 131404));
                  return (n) =>
                    (0, i.jsx)(e, {
                      ...n,
                      user: s,
                      channelSelected: !0,
                      channel: t,
                    });
                });
            }),
            et(this, "moveDragStart", (e) => {
              let { dragStart: t } = this.props;
              t(O.B.MOVE, e.clientX, e.clientY);
            }),
            et(this, "resizeDragStart", (e) => {
              let { dragStart: t } = this.props;
              t(O.B.RESIZE_SOUTH_EAST, e.clientX, e.clientY);
            });
        }
      }
      function er(e) {
        let { contained: t = !1, ...n } = e,
          s = (0, d.e7)([B.Z], () => B.Z.getGuildId()),
          r = (0, d.e7)([z.Z], () => z.Z.getChannelId(s)),
          a = (0, d.e7)([w.Z], () => w.Z.getChannel(r)),
          o = (0, d.e7)([W.Z], () => W.Z.getOverlayChatKeybind()),
          l = null != o ? (0, H.BB)(o.shortcut, !0) : "]",
          [c, u, h] = (0, d.Wu)([U.Z], () => [
            U.Z.getTextWidgetOpacity(),
            U.Z.getActiveRegions(),
            !t && U.Z.isPreviewingInGame(),
          ]),
          p = (0, d.e7)([D.Z], () => D.Z.getGuild(s)),
          f = (0, d.e7)([k.Z], () => null != s && k.Z.didAgree(s)),
          g = null != a && a.isPrivate() ? a.getRecipientId() : null,
          m = (0, d.e7)([P.Z], () =>
            null != r ? P.Z.getPendingReply(r) : void 0,
          ),
          v = (0, d.e7)([V.default], () =>
            null != g ? V.default.getUser(g) : null,
          ),
          { placeholder: x } = (0, _.Z)({ channel: a });
        return null != a && null != p && q.TPd.GUILD_THREADS_ONLY.has(a.type)
          ? (0, i.jsx)(S.Z, {})
          : (0, i.jsx)(es, {
              guild: p,
              channel: a,
              user: v,
              opacity: c,
              nsfwAgree: f,
              chatKeybind: l,
              activated: u.has(q.O0n.TEXT_WIDGET),
              isPreviewingInGame: h,
              pendingReply: m,
              contained: t,
              placeholder: x,
              widget: q.Odu.TEXT,
              ...n,
            });
      }
    },
    786906: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return N;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(442837),
        l = n(481060),
        d = n(13245),
        c = n(287734),
        u = n(933557),
        h = n(984370),
        p = n(910611),
        f = n(131704),
        g = n(523746),
        m = n(592125),
        v = n(430824),
        x = n(699516),
        _ = n(944486),
        S = n(707878),
        Z = n(518084),
        E = n(388032),
        C = n(970772);
      function I(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class y extends s.Component {
        componentDidUpdate() {
          this.props.locked &&
            this.state.showOpacitySlider &&
            this.setState({ showOpacitySlider: !1 });
        }
        renderCallButton() {
          let e, t;
          let {
            channel: n,
            channelHasActiveCall: s,
            userIsInChannelCall: r,
            isBlocked: a,
          } = this.props;
          if (!(0, f.hv)(n.type)) return null;
          let o = l.PhoneCallIcon,
            d = !1;
          return (
            s
              ? r
                ? ((e = E.intl.string(E.t["4ry6ys"])), (o = l.PhoneHangUpIcon))
                : (e = E.intl.string(E.t["0D/6R0"]))
              : a
                ? ((e = E.intl.string(E.t.PHzjvb)),
                  (t = l.Tooltip.Colors.RED),
                  (d = !0))
                : (e = E.intl.string(E.t.focH1t)),
            (0, i.jsx)(h.Z.Icon, {
              icon: o,
              tooltip: e,
              onClick: this.handleClickCall,
              tooltipColor: t,
              disabled: d,
            })
          );
        }
        render() {
          let {
              className: e,
              draggableClassName: t,
              locked: n,
              channel: s,
              channelName: r,
              guild: o,
              onMouseDown: d,
              onContextMenu: c,
              isPreviewingInGame: u,
              disableDragIndicator: f,
            } = this.props,
            { showOpacitySlider: g } = this.state;
          return g && !n
            ? (0, i.jsxs)(Z.ZP.Bar, {
                className: C.opacityHeader,
                children: [
                  (0, i.jsx)(S.Z, {}),
                  (0, i.jsx)(h.Z.Icon, {
                    icon: l.XSmallIcon,
                    onClick: this.handleCloseOpacitySettings,
                    tooltip: E.intl.string(E.t.cpT0Cg),
                  }),
                ],
              })
            : (0, i.jsx)(Z.ZP.Background, {
                opacityOverride: n || u ? null : 1,
                children: (0, i.jsx)("div", {
                  className: a()(e, t, C.headerContainer),
                  onMouseDown: d,
                  onContextMenu: c,
                  children: (0, i.jsxs)(h.Z, {
                    guildId: s.guild_id,
                    channelId: s.id,
                    toolbar: this.renderWidgetButtons(),
                    transparent: !0,
                    children: [
                      u || n || f
                        ? null
                        : (0, i.jsx)(l.DragIcon, {
                            size: "custom",
                            color: "currentColor",
                            className: a()(C.dragIcon, t),
                            width: 20,
                            height: 20,
                          }),
                      (0, p.ud)({ channel: s, channelName: r }),
                      n ? null : (0, p.v0)(s, o),
                    ],
                  }),
                }),
              });
        }
        constructor(...e) {
          super(...e),
            I(this, "state", { showOpacitySlider: !1 }),
            I(this, "handleClickCall", (e) => {
              let {
                channel: t,
                userIsInChannelCall: n,
                channelHasActiveCall: i,
              } = this.props;
              if (i)
                n
                  ? c.default.selectVoiceChannel(null)
                  : d.Z.callPrivateChannel(t.id, !1);
              else {
                let n = !i && !e.shiftKey;
                d.Z.callPrivateChannel(t.id, n);
              }
            }),
            I(this, "handleOpenOpacitySettings", () => {
              let { pinned: e } = this.props;
              this.setState({ showOpacitySlider: !0 }),
                e && d.Z.setPreviewInGameMode(!0);
            }),
            I(this, "handleCloseOpacitySettings", () => {
              let { pinned: e } = this.props;
              this.setState({ showOpacitySlider: !1 }),
                e && d.Z.setPreviewInGameMode(!1);
            }),
            I(this, "handleMouseDown", (e) => {
              let { onMouseDown: t } = this.props;
              null != t && t(e);
            }),
            I(this, "renderWidgetButtons", () => {
              let { locked: e, handlePin: t, pinned: n } = this.props,
                r = n ? E.intl.string(E.t.cSu80t) : E.intl.string(E.t.cM8Vnp);
              return e
                ? null
                : (0, i.jsxs)(s.Fragment, {
                    children: [
                      this.renderCallButton(),
                      n
                        ? (0, i.jsx)(h.Z.Icon, {
                            icon: l.BrowserCheckeredIcon,
                            tooltip: E.intl.string(E.t.OVovCQ),
                            onClick: this.handleOpenOpacitySettings,
                          })
                        : null,
                      (0, i.jsx)(h.Z.Icon, {
                        icon: n ? l.PinUprightSlashIcon : l.PinUprightIcon,
                        tooltip: r,
                        selected: n,
                        onClick: t,
                      }),
                    ],
                  });
            });
        }
      }
      function N(e) {
        let { channel: t, ...n } = e,
          s = (0, o.e7)([_.Z, m.Z], () => {
            let e = _.Z.getVoiceChannelId();
            return m.Z.getChannel(e);
          }),
          r = (0, o.e7)([v.Z], () => v.Z.getGuild(t.guild_id)),
          a = (0, o.e7)([g.Z], () => g.Z.isCallActive(t.id)),
          l = (0, u.ZP)(t),
          d = (0, o.e7)(
            [x.Z],
            () =>
              !!t.isDM() &&
              null != t.getRecipientId() &&
              x.Z.isBlocked(t.getRecipientId()),
          );
        return (0, i.jsx)(y, {
          channel: t,
          channelName: l,
          guild: r,
          channelHasActiveCall: a,
          userIsInChannelCall: null != s && s.id === t.id,
          isBlocked: d,
          ...n,
        });
      }
    },
    707878: function (e, t, n) {
      "use strict";
      n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(442837),
        a = n(481060),
        o = n(13245),
        l = n(313201),
        d = n(237997),
        c = n(766032),
        u = n(987650),
        h = n(981631),
        p = n(388032),
        f = n(394977);
      let g = Object.values(u.wF).map((e) => 100 * e),
        m = (0, l.hQ)();
      class v extends s.PureComponent {
        handleUpdateBackgroundOpacity(e) {
          o.Z.setTextWidgetOpacity((0, c.Z)(e / 100)),
            o.Z.track(h.rMx.OVERLAY_SETTINGS_UPDATED, {
              text_opacity_slider: e,
            });
        }
        handlePreviewBackgroundOpacity(e) {
          o.Z.setTextWidgetOpacity((0, c.Z)(e / 100));
        }
        render() {
          return (0, i.jsxs)("div", {
            className: f.container,
            children: [
              (0, i.jsx)(a.FormTitle, {
                id: m,
                tag: a.FormTitleTags.H5,
                className: f.title,
                children: p.intl.string(p.t.OVovCQ),
              }),
              (0, i.jsx)("div", {
                className: f.sliderContainer,
                children: (0, i.jsx)(a.Slider, {
                  mini: !0,
                  initialValue: this.initialValue,
                  defaultValue: this.initialValue,
                  minValue: g[0],
                  maxValue: g[g.length - 1],
                  handleSize: 10,
                  onValueChange: this.handleUpdateBackgroundOpacity,
                  asValueChanges: this.handlePreviewBackgroundOpacity,
                  markers: g,
                  onMarkerRender: h.dG4,
                  equidistant: !0,
                  stickToMarkers: !0,
                  "aria-labelledby": m,
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          var t, n, i;
          super(...e),
            (t = this),
            (n = "initialValue"),
            (i = 100 * this.props.opacity),
            n in t
              ? Object.defineProperty(t, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = i);
        }
      }
      t.Z = r.ZP.connectStores([d.Z], () => ({
        opacity: d.Z.getTextWidgetOpacity(),
      }))(v);
    },
    839434: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return er;
        },
      }),
        n(47120);
      var i,
        s = n(200651),
        r = n(192379),
        a = n(120356),
        o = n.n(a),
        l = n(442837),
        d = n(692547),
        c = n(477690),
        u = n(481060),
        h = n(239091),
        p = n(765250),
        f = n(13245),
        g = n(872810),
        m = n(586902),
        v = n(835473),
        x = n(933557),
        _ = n(600164),
        S = n(118012),
        Z = n(594190),
        E = n(925329),
        C = n(569545),
        I = n(914923),
        y = n(165393),
        N = n(989941),
        b = n(552282),
        T = n(345243),
        O = n(565799),
        j = n(501655),
        M = n(786915),
        R = n(7188),
        P = n(597998),
        w = n(199902),
        A = n(314897),
        k = n(592125),
        D = n(77498),
        L = n(131951),
        z = n(944486),
        B = n(606304),
        V = n(449224),
        W = n(938475),
        U = n(237997),
        F = n(136015),
        G = n(51144),
        H = n(145597),
        Y = n(244073),
        K = n(876205),
        X = n(906037),
        Q = n(518084),
        J = n(809357),
        q = n(981631),
        $ = n(65154),
        ee = n(388032),
        et = n(734701);
      function en(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ei(e) {
        let {
            flipped: t = !1,
            locked: n = !1,
            user: i,
            nick: a,
            displayNameMode: d,
            displayUserMode: c,
            size: u = q.ipw.LARGE,
            onClick: h,
            onContextMenu: p,
            context: f,
            guildId: g,
            voiceState: v,
          } = e,
          x = (0, J.Z)({ location: "overlay_voice_widget" }),
          _ = (0, l.e7)([U.Z], () => U.Z.showKeybindIndicators),
          S = (0, l.e7)([A.default], () => A.default.getId()),
          Z = (0, l.e7)([L.Z], () => L.Z.isLocalMute(i.id)),
          E = (0, l.e7)([w.Z], () => w.Z.getCurrentUserActiveStream()),
          C = (0, l.Wu)([w.Z], () => (null != E ? w.Z.getViewerIds(E) : [])),
          I = (0, m.Z)({ userId: i.id, context: f }),
          y = (0, l.e7)([B.Z], () => B.Z.isPrioritySpeaker(i.id, f)),
          N = (0, l.e7)([w.Z], () => null != w.Z.getStreamForUser(i.id, g)),
          b = r.useMemo(
            () => null != E && E.ownerId !== i.id && C.includes(i.id),
            [E, i.id, C],
          );
        if (c === q.OYC.ONLY_WHILE_SPEAKING && n && !I) return null;
        let T = i.id === S,
          { mute: O, selfMute: j, suppress: M, deaf: R, selfDeaf: k } = v,
          D = x && _,
          z = j && (!T || !D);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(P.ZP, {
              guildId: g,
              onClick: n ? void 0 : (e) => (null == h ? void 0 : h(e, i)),
              onContextMenu: n ? void 0 : (e) => (null == p ? void 0 : p(e, i)),
              className: o()(et.voiceUserWrapper, {
                [et.faded]: !I,
                [et.interactive]: !n,
              }),
              user: i,
              nick: a,
              speaking: !1,
              flipped: t,
              isStreaming: N,
              iconClassName: o()(et.voiceIcon, { [et.locked]: n }),
              isWatching: b,
              isOverlay: !0,
              size: u,
              priority: y,
              mute: O || z || Z,
              localMute: Z,
              serverMute: O || M,
              deaf: R || k,
              serverDeaf: R,
              userNameClassName: o()(et.username, {
                [et.locked]: n,
                [et.hidden]:
                  n &&
                  (d === q.wC$.NEVER ||
                    (!I && d === q.wC$.ONLY_WHILE_SPEAKING)),
              }),
            }),
            T &&
              D &&
              (0, s.jsx)(K.Z, {
                value: j,
                action: q.kg4.TOGGLE_MUTE,
                shouldShow: !O && !M,
              }),
          ],
        });
      }
      class es extends (i = r.PureComponent) {
        renderVoiceUsers() {
          let {
              context: e,
              sortedVoiceStates: t,
              displayNameMode: n,
              displayUserMode: i,
              locked: r,
              isPreviewingInGame: a,
              channel: l,
              anchor: d,
              avatarSizeMode: u,
            } = this.props,
            h = null != d.right,
            p = t.map((t) => {
              var o;
              let { user: d, voiceState: c, member: p } = t;
              if (null == d || null == l || null == e) return null;
              let f = r || a;
              return (0, s.jsx)(
                ei,
                {
                  guildId: null == l ? void 0 : l.guild_id,
                  user: d,
                  nick:
                    null !== (o = null == p ? void 0 : p.nick) && void 0 !== o
                      ? o
                      : G.ZP.getName(d),
                  flipped: h,
                  voiceState: c,
                  displayNameMode: n,
                  displayUserMode: i,
                  size: u,
                  locked: f,
                  onContextMenu: this.handleUserContextMenu,
                  onClick: this.handleUserContextMenu,
                  context: e,
                },
                d.id,
              );
            });
          return (0, s.jsx)(Q.ZP.Body, {
            className: o()({
              [c.Z.VOICE_WIDGET_TOP_MARGIN]: r,
              [et.lockedContainer]: r,
            }),
            children: (0, s.jsx)(P.eJ, {
              className: et.voiceList,
              children: p,
            }),
          });
        }
        renderHeader() {
          let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
          return (0, s.jsxs)(Q.ZP.Bar, {
            className: o()(et.draggableStartArea, { [et.preview]: n }),
            children: [
              (0, s.jsxs)(Q.ZP.Content, {
                dynamicSize: !0,
                className: o()(et.content, { [et.hidden]: n }),
                children: [
                  (0, s.jsx)(u.DragIcon, {
                    size: "custom",
                    color: d.Z.unsafe_rawColors.WHITE_500.css,
                    width: 20,
                    height: 20,
                    className: o()(et.icon, et.faded, et.dragIcon),
                  }),
                  (0, s.jsx)(u.VoiceNormalIcon, {
                    size: "custom",
                    color: d.Z.unsafe_rawColors.WHITE_500.css,
                    width: 20,
                    height: 20,
                    className: o()(et.icon, et.faded, et.speakerIcon),
                  }),
                  (0, s.jsx)(S.Z, {
                    color: d.Z.unsafe_rawColors.PRIMARY_200.css,
                    className: et.title,
                    children: t,
                  }),
                ],
              }),
              n
                ? null
                : (0, s.jsx)(Q.ZP.Icon, {
                    icon: u.SettingsIcon,
                    label: ee.intl.string(ee.t.NiTd0d),
                    onClick: this.handleOpenVoiceSettings,
                    tooltipPosition: "left",
                    size: 18,
                  }),
              n
                ? null
                : (0, s.jsx)(Q.ZP.Icon, {
                    icon: e ? u.PinUprightSlashIcon : u.PinUprightIcon,
                    label: e
                      ? ee.intl.string(ee.t.cSu80t)
                      : ee.intl.string(ee.t.cM8Vnp),
                    onClick: this.handlePin,
                    tooltipPosition: "left",
                    size: 18,
                    isActive: e,
                  }),
            ],
          });
        }
        renderStreamerSettings() {
          var e;
          let {
            locked: t,
            pinned: n,
            isPreviewingInGame: i,
            channel: r,
            application: a,
            streamMetadata: l,
            streamApplication: d,
            stream: c,
          } = this.props;
          if (t || null == c || null == r) return null;
          let { sanitizedTitle: h, title: p } = (0, I.Z)(l);
          return (0, s.jsx)(Q.ZP.Bar, {
            className: o()(et.streamerControls, {
              [et.hidden]: i,
              [et.unpinned]: !n,
            }),
            children: (0, s.jsxs)(Q.ZP.Content, {
              className: et.streamerContent,
              dynamicSize: !0,
              children: [
                (0, s.jsxs)("div", {
                  className: et.streamerInner,
                  children: [
                    (null == d ? void 0 : d.id) != null &&
                    d.id === (null == a ? void 0 : a.id)
                      ? (0, s.jsx)(E.Z, { className: et.gameIcon, game: a })
                      : (0, s.jsx)(y.Z, { title: h }),
                    (0, s.jsxs)(_.Z, {
                      direction: _.Z.Direction.VERTICAL,
                      justify: _.Z.Justify.BETWEEN,
                      className: et.streamerInfo,
                      children: [
                        (0, s.jsx)(u.Text, {
                          className: et.streaming,
                          variant: "text-sm/normal",
                          children: ee.intl.string(ee.t.XKYej4),
                        }),
                        (0, s.jsx)(T.Z, {
                          children:
                            null !== (e = null == d ? void 0 : d.name) &&
                            void 0 !== e
                              ? e
                              : p,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)(_.Z, {
                  grow: 0,
                  children: [
                    (0, s.jsx)("div", {
                      className: et.streamerIconWrapper,
                      children: (0, s.jsx)(M.Z, {
                        stream: c,
                        iconClassName: et.streamerIcon,
                        appContext: q.IlC.OVERLAY,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: et.streamerIconWrapper,
                      children: (0, s.jsx)(R.Z, {
                        stream: c,
                        appContext: q.IlC.OVERLAY,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: et.streamerIconWrapper,
                      children: (0, s.jsx)(u.TooltipContainer, {
                        text: ee.intl.string(ee.t.S5anIS),
                        children: (0, s.jsx)(u.Button, {
                          onClick: this.handleStopStream,
                          look: u.Button.Looks.BLANK,
                          size: u.Button.Sizes.NONE,
                          children: (0, s.jsx)(u.ScreenXIcon, {
                            size: "md",
                            color: "currentColor",
                            className: et.streamerIcon,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        componentDidMount() {
          (0, X.m3)(this.props, this.shouldDisplay());
        }
        componentDidUpdate(e) {
          (0, X.CR)(e, this.props, this.shouldDisplay);
        }
        shouldDisplay() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.props,
            {
              context: t,
              locked: n,
              pinned: i,
              sortedVoiceStates: s,
              channel: r,
            } = e;
          return 0 !== s.length && null != t && null != r && (!n || !!i) && !0;
        }
        render() {
          let {
            context: e,
            lobbyId: t,
            locked: n,
            pinned: i,
            isPreviewingInGame: r,
            channel: a,
          } = this.props;
          if (null == a || null == e || !this.shouldDisplay()) return null;
          let l = q.t_t.UNPINNED;
          return (
            i && (l = q.t_t.PINNED),
            r && (l = q.t_t.IN_GAME_PREVIEW),
            n && (l = q.t_t.IN_GAME),
            (0, s.jsxs)(Q.ZP, {
              type: l,
              width: 380,
              children: [
                n ? null : this.renderHeader(),
                this.renderVoiceUsers(),
                this.renderStreamerSettings(),
                n
                  ? null
                  : (0, s.jsx)(Y.Z, {
                      className: o()({ [et.preview]: r }),
                      contentClassName: o()({ [et.hidden]: r }),
                      channel: a,
                      lobbyId: t,
                      context: e,
                      pinned: i,
                    }),
              ],
            })
          );
        }
        constructor(...e) {
          super(...e),
            en(this, "handleUserContextMenu", (e, t) => {
              let { context: i } = this.props;
              (0, h.jW)(e, async () => {
                let { default: e } = await Promise.all([
                  n.e("79695"),
                  n.e("69220"),
                  n.e("95052"),
                ]).then(n.bind(n, 881351));
                return (n) =>
                  (0, s.jsx)(e, {
                    ...n,
                    user: t,
                    showMediaItems: !0,
                    mediaEngineContext: i,
                  });
              });
            }),
            en(this, "handleOpenVoiceSettings", () => {
              let { context: e, channel: t, title: i } = this.props;
              (0, u.openModalLazy)(async () => {
                let { default: r } = await n.e("66063").then(n.bind(n, 344516));
                return (n) =>
                  (0, s.jsx)(r, {
                    ...n,
                    mediaEngineContext: e,
                    title: null != t ? null : i,
                  });
              });
            }),
            en(this, "handlePin", () => {
              var e, t, n;
              let i = !this.props.pinned;
              f.Z.track(q.rMx.OVERLAY_PIN_TOGGLED, {
                pinned: i,
                guild_id:
                  null === (e = this.props.channel) || void 0 === e
                    ? void 0
                    : e.guild_id,
                channel_id:
                  null === (t = this.props.channel) || void 0 === t
                    ? void 0
                    : t.id,
                channel_type:
                  null === (n = this.props.channel) || void 0 === n
                    ? void 0
                    : n.type,
                widget_type: q.Odu.VOICE,
              });
              let { id: s } = this.props;
              (0, p.xh)(s);
            }),
            en(this, "handleStopStream", () => {
              let { stream: e } = this.props;
              if (null != e) g.g((0, C.V9)(e));
            });
        }
      }
      en(es, "defaultProps", { context: $.Yn.DEFAULT });
      function er(e) {
        var t;
        let n = (0, l.e7)([z.Z, k.Z], () =>
            k.Z.getChannel(z.Z.getVoiceChannelId()),
          ),
          i = (0, x.ZP)(n),
          a = (function () {
            let [e] = (0, l.e7)(
                [W.ZP, O.Z, z.Z, k.Z],
                () => {
                  let e = k.Z.getChannel(z.Z.getVoiceChannelId());
                  return null == e
                    ? [[], -1]
                    : e.isGuildStageVoice()
                      ? [
                          O.Z.getMutableParticipants(e.id, j.pV.SPEAKER),
                          O.Z.getParticipantsVersion(e.id),
                        ]
                      : [
                          W.ZP.getVoiceStatesForChannel(e),
                          W.ZP.getVoiceStateVersion(e.getGuildId()),
                        ];
                },
                [],
                F.Q,
              ),
              t = (0, l.e7)([A.default], () => A.default.getId()),
              n = (0, J.Z)({ location: "voice_widget" });
            return r.useMemo(
              () =>
                n
                  ? [...e].sort((e, n) =>
                      e.user.id === t ? -1 : n.user.id === t ? 1 : 0,
                    )
                  : e,
              [e, t, n],
            );
          })(),
          o = (0, l.e7)([w.Z], () => w.Z.getStreamerActiveStreamMetadata()),
          d = (0, l.e7)([Z.ZP, V.Z, D.Z], () => {
            var e;
            let t = (0, N.Z)(Z.ZP, V.Z);
            return null != t
              ? null === (e = D.Z.getGameByGameData(t)) || void 0 === e
                ? void 0
                : e.id
              : null;
          }),
          c = (0, v.q)(d),
          u = (0, l.cj)([Z.ZP, V.Z, w.Z, U.Z], () => {
            let e = (0, N.Z)(Z.ZP, V.Z),
              t = w.Z.getCurrentUserActiveStream();
            return {
              displayUserMode: U.Z.getDisplayUserMode(),
              displayNameMode: U.Z.getDisplayNameMode(),
              avatarSizeMode: U.Z.getAvatarSizeMode(),
              streamApplication:
                (null == o ? void 0 : o.pid) === (0, H.QF)()
                  ? (0, b.Z)(e)
                  : null,
              stream: t,
            };
          });
        return (0, s.jsx)(es, {
          ...u,
          application: c,
          ...e,
          sortedVoiceStates: a,
          channel: n,
          title: null != i ? i : "",
          streamMetadata: o,
          streamApplication:
            null !== (t = u.streamApplication) && void 0 !== t
              ? t
              : { id: null, name: null == o ? void 0 : o.sourceName },
        });
      }
    },
    518084: function (e, t, n) {
      "use strict";
      n.d(t, {
        wB: function () {
          return x;
        },
      }),
        n(411104);
      var i,
        s,
        r,
        a,
        o = n(200651),
        l = n(192379),
        d = n(120356),
        c = n.n(d),
        u = n(877921),
        h = n.n(u),
        p = n(481060),
        f = n(981631),
        g = n(513473),
        m = n(652849);
      let v = f.t_t.DEFAULT,
        x = 1,
        _ = l.createContext({ type: v, opacity: x }),
        S = l.createContext(void 0),
        Z = (e) => {
          let { children: t, className: n, ...i } = e;
          return (0, o.jsx)(_.Consumer, {
            children: (e) => {
              let { type: s } = e;
              return (0, o.jsx)(S.Consumer, {
                children: (e) =>
                  (0, o.jsx)("div", {
                    className: c()(g.bar, g[h()(s)], n),
                    style: e,
                    ...i,
                    children: t,
                  }),
              });
            },
          });
        };
      class E extends (i = l.PureComponent) {
        render() {
          let { disableScroll: e, children: t, className: n } = this.props;
          return (0, o.jsx)(S.Consumer, {
            children: (i) =>
              (0, o.jsx)(_.Consumer, {
                children: (s) => {
                  let r = c()(g.body, g[h()(s.type)], n);
                  return e
                    ? (0, o.jsx)("div", { className: r, style: i, children: t })
                    : (0, o.jsx)(p.Scroller, {
                        fade: !0,
                        className: r,
                        children: t,
                      });
                },
              }),
          });
        }
      }
      (a = { disableScroll: !1 }),
        (r = "defaultProps") in (s = E)
          ? Object.defineProperty(s, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[r] = a);
      let C = (e) => {
          let {
            type: t = v,
            width: n,
            height: i,
            children: s,
            className: r,
            opacity: a = x,
            onClick: l,
          } = e;
          return (0, o.jsx)(_.Provider, {
            value: { type: t, opacity: a },
            children: (0, o.jsx)("div", {
              className: c()(g.widget, g[h()(t)], r),
              style: { width: n, height: i },
              onClick: l,
              children: s,
            }),
          });
        },
        I = (e) => {
          let { children: t, className: n, dynamicSize: i = !1 } = e;
          return (0, o.jsx)(S.Consumer, {
            children: (e) =>
              (0, o.jsx)("div", {
                className: c()(g.content, { [g.staticSize]: !i }, n),
                style: e,
                children: t,
              }),
          });
        };
      (C.Background = (e) => {
        let { children: t, opacityOverride: n } = e;
        if (null == t) return null;
        let i = [Z, E, I];
        return (0, o.jsx)(_.Consumer, {
          children: (e) => {
            let { opacity: s } = e,
              r = {
                backgroundColor: "rgba(54, 57, 63, ".concat(
                  "" + (null != n ? n : s),
                  ")",
                ),
              };
            if ("string" == typeof t.type)
              return l.cloneElement(t, { style: r });
            if (i.includes(t.type))
              return (0, o.jsx)(S.Provider, { value: r, children: t });
            {
              let e = t.type.displayName;
              throw Error(
                "Widget.Background cannot be wrapped around "
                  .concat(e, ". Pass a DOM node or one of ")
                  .concat(i.map((e) => "Widget." + e.name).join(",")),
              );
            }
          },
        });
      }),
        (C.Body = E),
        (C.Content = I),
        (C.Icon = (e) => {
          let {
            icon: t,
            label: n,
            onClick: i,
            isActive: s,
            tooltipPosition: r = "top",
            size: a = 20,
            isTutorial: l = !1,
          } = e;
          return (0, o.jsx)(p.Tooltip, {
            text: l
              ? (0, o.jsx)("div", { className: g.tutorialTip, children: n })
              : n,
            "aria-label": n,
            position: r,
            forceOpen: l,
            color: l ? p.Tooltip.Colors.BRAND : p.Tooltip.Colors.BLACK,
            children: (e) => {
              let { onMouseEnter: r, onMouseLeave: l } = e;
              return (0, o.jsx)(p.Button, {
                look: p.Button.Looks.BLANK,
                size: p.Button.Sizes.NONE,
                onClick: i,
                onMouseEnter: r,
                onMouseLeave: l,
                className: c()(g.icon, { [g.toggledIconOn]: s }),
                innerClassName: m.flexCenter,
                "aria-label": n,
                children: (0, o.jsx)(t, {
                  color: "currentColor",
                  size: "custom",
                  width: a,
                  height: a,
                  role: "img",
                }),
              });
            },
          });
        }),
        (C.Bar = Z),
        (t.ZP = C);
    },
    178528: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return D;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(208404),
        a = n(442837),
        o = n(481060),
        l = n(619915),
        d = n(554747),
        c = n(373274),
        u = n(315174),
        h = n(840780),
        p = n(905423),
        f = n(680089),
        g = n(58468),
        m = n(796974),
        v = n(324067),
        x = n(984933),
        _ = n(888369),
        S = n(430824),
        Z = n(496675),
        E = n(878884),
        C = n(19780),
        I = n(944486),
        y = n(9156),
        N = n(938475),
        b = n(518084),
        T = n(669083),
        O = n(711553),
        j = n(981631),
        M = n(647086),
        R = n(388032),
        P = n(389645);
      function w(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let A = 54;
      class k extends s.PureComponent {
        static getDerivedStateFromProps(e) {
          let { guild: t } = e;
          return null == t || null == t.banner
            ? { renderBanner: !1, bannerVisible: !1 }
            : null;
        }
        componentDidMount() {
          let { guildId: e } = this.props,
            { scrollTop: t } = m.Z.getGuildDimensions(e);
          this.setAnimatedValue(null != t ? t : 0);
        }
        componentDidUpdate(e) {
          let { guild: t, guildId: n } = this.props;
          if (e.guild !== t) {
            let { scrollTop: e } = m.Z.getGuildDimensions(n);
            this.setAnimatedValue(null != e ? e : 0);
          }
        }
        renderSettings(e) {
          let { closePopout: t } = e;
          return (0, i.jsx)(T.Z, { onClose: t });
        }
        setAnimatedValue(e) {
          let { guild: t } = this.props,
            n = null == t ? void 0 : t.hasCommunityInfoSubheader();
          if (null != t && (null != t.banner || !!n))
            null != t.banner
              ? this.setAnimatedValueForBanner(e)
              : this.setAnimatedValueForCommunityInfo(e);
        }
        setAnimatedValueForBanner(e) {
          let {
            renderBanner: t,
            communityInfoVisible: n,
            bannerVisible: i,
            controller: s,
          } = this.state;
          ((e >= A && i) || (e < A && !i)) && (i = !i),
            ((e >= 78 && !t) || (e < 78 && t)) && (t = !t),
            (n = i),
            (t !== this.state.renderBanner ||
              i !== this.state.bannerVisible ||
              n !== this.state.communityInfoVisible) &&
              this.setState({
                renderBanner: t,
                bannerVisible: i,
                communityInfoVisible: n,
              }),
            s
              .update({
                value: Math.min(1, Math.max(0, 1 - e / 78)),
                immediate: !0,
              })
              .start();
        }
        setAnimatedValueForCommunityInfo(e) {
          let { communityInfoVisible: t, controller: n } = this.state;
          ((e >= 20 && t) || (e < 20 && !t)) &&
            this.setState({ communityInfoVisible: !t }),
            n
              .update({
                value: Math.min(1, Math.max(0, 1 - e / 20)),
                immediate: !0,
              })
              .start();
        }
        render() {
          let { onDragStart: e, ...t } = this.props,
            { guild: n } = t,
            {
              controller: s,
              renderBanner: r,
              bannerVisible: a,
              communityInfoVisible: l,
            } = this.state,
            d = n.id === M._ ? c.j : c.E;
          return (0, i.jsxs)(O.Z, {
            header: (0, i.jsx)(u.ZP, {
              guild: n,
              controller: s,
              renderBanner: r,
              bannerVisible: a,
              className: P.guildHeader,
              headerClassName: P.guildHeaderInner,
              onMouseDown: e,
              disableBannerAnimation: !1,
              communityInfoVisible: l,
              children: (0, i.jsx)(o.Popout, {
                position: "right",
                renderPopout: this.renderSettings,
                children: (e) =>
                  (0, i.jsx)(b.ZP.Icon, {
                    icon: o.SettingsIcon,
                    label: R.intl.string(R.t["3D5yo6"]),
                    ...e,
                  }),
              }),
            }),
            children: [
              (0, i.jsx)("div", {
                className: P.channelList,
                children: (0, i.jsx)(d, {
                  ...t,
                  guild: n,
                  disableManageChannels: !0,
                  onScroll:
                    null != n && null != n.banner ? this.handleScroll : null,
                }),
              }),
              (0, i.jsx)("section", {
                className: P.panels,
                "aria-label": R.intl.string(R.t.StREWF),
                children: (0, i.jsx)(h.Z, { guildId: n.id }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            w(this, "state", {
              controller: new r.Controller({ value: 1, immediate: !0 }),
              renderBanner: !1,
              bannerVisible: !1,
              communityInfoVisible: !1,
            }),
            w(this, "handleScroll", (e) => {
              let { scrollTop: t } = e;
              this.setAnimatedValue(t);
            });
        }
      }
      function D(e) {
        var t;
        let { guildId: n } = e,
          s = (0, a.e7)([S.Z], () => S.Z.getGuild(n)),
          r = (0, a.e7)([x.ZP], () => x.ZP.getChannels(n)),
          o = (0, a.e7)([v.Z], () => v.Z.getCategories(n)),
          { mutedChannels: c, collapseMuted: u } = (0, a.cj)([y.ZP], () => ({
            mutedChannels: y.ZP.getMutedChannels(n),
            collapseMuted: y.ZP.isGuildCollapsed(n),
          })),
          h = (0, a.e7)([N.ZP], () => N.ZP.getVoiceStates(n)),
          b = (0, a.e7)([g.Z], () => g.Z.getCollapsed()),
          { scrollTo: T } = (0, a.e7)([m.Z], () => m.Z.getGuildDimensions(n)),
          O = (0, p.Z)((e) => {
            let { channelId: t } = e;
            return t;
          }),
          M = (0, a.e7)([I.Z], () => I.Z.getVoiceChannelId()),
          R = (0, a.e7)([Z.Z], () => Z.Z.getGuildVersion(n)),
          P = (0, a.e7)([f.Z], () => f.Z.version),
          w = (0, a.e7)([_.default], () => _.default.getGuildChangeSentinel(n)),
          A = (0, l.QN)(null == s ? void 0 : s.id),
          D = (0, d.gM)(null == s ? void 0 : s.id),
          L =
            null !== (t = null == s ? void 0 : s.hasFeature(j.oNc.COMMUNITY)) &&
            void 0 !== t &&
            t,
          z = (0, a.e7)([C.Z], () => C.Z.getChannelId()),
          B = (0, a.e7)([E.Z], () => E.Z.desyncedVoiceStatesCount);
        return (0, i.jsx)(k, {
          guildId: n,
          guild: s,
          channels: r,
          categories: o,
          mutedChannels: c,
          scrollToChannel: T,
          selectedChannelId: O,
          selectedVoiceChannelId: M,
          voiceStates: h,
          rtcConnectedChannelId: z,
          rtcDesyncedVoiceStatesCount: B,
          collapsedChannels: b,
          collapseMuted: u,
          guildReadStateSentinel: w,
          permissionVersion: R,
          categoryCollapseVersion: P,
          embeddedAppsByChannel: A,
          activeEventsByChannel: D,
          showNewUnreadsBar: L,
          optInEnabled: !1,
        });
      }
    },
    669083: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return T;
        },
      }),
        n(47120);
      var i,
        s,
        r = n(200651),
        a = n(192379),
        o = n(442837),
        l = n(481060),
        d = n(13245),
        c = n(600164),
        u = n(212632),
        h = n(906467),
        p = n(556296),
        f = n(237997),
        g = n(998502),
        m = n(13140),
        v = n(809357),
        x = n(981631),
        _ = n(388032),
        S = n(382595),
        Z = n(232186);
      function E(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      ((s = i || (i = {})).GENERAL = "GENERAL"),
        (s.VOICE = "VOICE"),
        (s.DEVELOPER = "DEVELOPER");
      let C = () => [
          { value: x.ipw.LARGE, name: _.intl.string(_.t.YcOxtr) },
          { value: x.ipw.SMALL, name: _.intl.string(_.t.BKIKq6) },
        ],
        I = () => [
          { value: x.wC$.ALWAYS, name: _.intl.string(_.t.nBmDra) },
          {
            value: x.wC$.ONLY_WHILE_SPEAKING,
            name: _.intl.string(_.t["2OvIZW"]),
          },
          { value: x.wC$.NEVER, name: _.intl.string(_.t.ekjlPD) },
        ],
        y = () => [
          { value: x.OYC.ALWAYS, name: _.intl.string(_.t.nBmDra) },
          {
            value: x.OYC.ONLY_WHILE_SPEAKING,
            name: _.intl.string(_.t["2OvIZW"]),
          },
        ];
      function N() {
        let e = f.Z.getNotificationPositionMode(),
          t = e !== x._vf.DISABLED,
          n = p.Z.getOverlayKeybind(),
          i = p.Z.getOverlayChatKeybind();
        d.Z.track(x.rMx.OVERLAY_SETTINGS_UPDATED, {
          enabled: !0,
          notifications_enabled: t,
          notifications_position: t ? e : null,
          text_notifications_mode: f.Z.getTextChatNotificationMode(),
          text_opacity_slider: f.Z.getTextWidgetOpacity(),
          hotkey: null != n ? (0, m.BB)(n.shortcut) : null,
          text_activation_hotkey: null != i ? (0, m.BB)(i.shortcut) : null,
        });
      }
      class b extends a.PureComponent {
        componentDidMount() {
          d.Z.track(x.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null,
          });
        }
        handleChangeNotificationPositionMode(e, t) {
          d.Z.setNotificationPositionMode(t), N();
        }
        handleChangeAvatarSizeMode(e) {
          let { value: t } = e;
          d.Z.setAvatarSizeMode(t);
        }
        handleChangeDisplayNameMode(e) {
          let { value: t } = e;
          d.Z.setDisplayNameMode(t);
        }
        handleChangeDisplayUserMode(e) {
          let { value: t } = e;
          d.Z.setDisplayUserMode(t);
        }
        renderHeader() {
          return (0, r.jsxs)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: S.header,
            children: [
              (0, r.jsxs)(c.Z, {
                children: [
                  (0, r.jsx)(l.FormTitle, {
                    className: S.headerTitle,
                    tag: "h1",
                    children: _.intl.string(_.t["35G2Mj"]),
                  }),
                  (0, r.jsx)(l.ModalCloseButton, {
                    className: S.headerClose,
                    onClick: this.props.onClose,
                  }),
                ],
              }),
              this.renderTabBar(),
            ],
          });
        }
        renderTabBar() {
          let { selectedSection: e } = this.state,
            t = h.Z.isDeveloper
              ? (0, r.jsx)(l.TabBar.Item, {
                  id: "DEVELOPER",
                  className: S.tabBarItem,
                  children: "Developer",
                })
              : null;
          return (0, r.jsxs)(l.TabBar, {
            selectedItem: e,
            type: "top",
            className: S.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
              (0, r.jsx)(l.TabBar.Item, {
                id: "GENERAL",
                className: S.tabBarItem,
                children: _.intl.string(_.t["0FYxx8"]),
              }),
              (0, r.jsx)(l.TabBar.Item, {
                id: "VOICE",
                className: S.tabBarItem,
                children: _.intl.string(_.t["3WeSiI"]),
              }),
              t,
            ],
          });
        }
        renderBody() {
          let e;
          let { selectedSection: t } = this.state;
          switch (t) {
            case "DEVELOPER":
              e = this.renderDeveloperSettings();
              break;
            case "VOICE":
              e = this.renderVoiceSettings();
              break;
            default:
              e = this.renderGeneralSettings();
          }
          return (0, r.jsx)(
            l.ModalContent,
            { className: S.content, children: e },
            t,
          );
        }
        renderGeneralSettings() {
          let {
              textChatNotificationMode: e,
              notificationPositionMode: t,
              shouldShowKeybindIndicators: n,
              showKeybindIndicators: i,
            } = this.props,
            s = t !== x._vf.DISABLED;
          return (0, r.jsxs)(a.Fragment, {
            children: [
              (0, r.jsx)(l.FormItem, {
                title: _.intl.string(_.t.IQv8Eh),
                className: Z.marginBottom20,
                children: (0, r.jsx)(u.Z, {
                  position: t,
                  onChange: this.handleChangeNotificationPositionMode,
                }),
              }),
              (0, r.jsx)(l.FormSwitch, {
                value: s && e === x.Ypu.ENABLED,
                onChange: this.handleToggleTextChatNotifications,
                disabled: !s,
                hideBorder: !0,
                children: _.intl.string(_.t.Fy5kPj),
              }),
              i &&
                (0, r.jsx)(l.FormSwitch, {
                  value: n,
                  onChange: (e) => d.Z.setShowKeybindIndicators(e),
                  hideBorder: !0,
                  children: _.intl.string(_.t.XZTl9v),
                }),
            ],
          });
        }
        renderVoiceSettings() {
          let {
            avatarSizeMode: e,
            displayNameMode: t,
            displayUserMode: n,
          } = this.props;
          return (0, r.jsxs)(a.Fragment, {
            children: [
              (0, r.jsx)(l.FormItem, {
                title: _.intl.string(_.t.dnvZSk),
                className: Z.marginBottom20,
                children: (0, r.jsx)(l.RadioGroup, {
                  onChange: this.handleChangeAvatarSizeMode,
                  options: C(),
                  value: e,
                  size: l.RadioGroup.Sizes.SMALL,
                }),
              }),
              (0, r.jsx)(l.FormItem, {
                title: _.intl.string(_.t.J0dpcH),
                className: Z.marginBottom20,
                children: (0, r.jsx)(l.RadioGroup, {
                  onChange: this.handleChangeDisplayNameMode,
                  options: I(),
                  value: t,
                  size: l.RadioGroup.Sizes.SMALL,
                }),
              }),
              (0, r.jsx)(l.FormItem, {
                title: _.intl.string(_.t.swsWWF),
                className: Z.marginBottom20,
                children: (0, r.jsx)(l.RadioGroup, {
                  onChange: this.handleChangeDisplayUserMode,
                  options: y(),
                  value: n,
                  size: l.RadioGroup.Sizes.SMALL,
                }),
              }),
            ],
          });
        }
        renderDeveloperSettings() {
          return (0, r.jsx)(a.Fragment, {
            children: (0, r.jsx)(l.FormItem, {
              title: "Crashes",
              className: Z.marginBottom20,
              children: (0, r.jsx)(l.SingleSelect, {
                value: void 0,
                options: [
                  { value: void 0, label: "Native crash" },
                  { value: 0, label: "Abort()" },
                  { value: 1, label: "SIGSEGV()" },
                  { value: 2, label: "EXCEPTION_ACCESS_VIOLATION" },
                  { value: 3, label: "RaiseFailFastException" },
                  { value: 4, label: "Out of Memory" },
                ],
                onChange: (e) => null != e && g.ZP.crash(e),
              }),
            }),
          });
        }
        render() {
          return (0, r.jsxs)(l.ModalRoot, {
            "aria-label": _.intl.string(_.t["35G2Mj"]),
            transitionState: l.ModalTransitionState.ENTERED,
            children: [this.renderHeader(), this.renderBody()],
          });
        }
        constructor(...e) {
          super(...e),
            E(this, "state", { selectedSection: "GENERAL" }),
            E(this, "handleSelectSection", (e) => {
              this.setState({ selectedSection: e });
            }),
            E(this, "handleToggleTextChatNotifications", () => {
              let { ENABLED: e, DISABLED: t } = x.Ypu,
                n = this.props.textChatNotificationMode === e ? t : e;
              d.Z.setTextChatNotificationMode(n), N();
            });
        }
      }
      function T(e) {
        let { onClose: t } = e,
          {
            avatarSizeMode: n,
            displayNameMode: i,
            displayUserMode: s,
            notificationPositionMode: a,
            textChatNotificationMode: l,
            shouldShowKeybindIndicators: d,
          } = (0, o.cj)([f.Z], () => ({
            avatarSizeMode: f.Z.getAvatarSizeMode(),
            displayNameMode: f.Z.getDisplayNameMode(),
            displayUserMode: f.Z.getDisplayUserMode(),
            notificationPositionMode: f.Z.getNotificationPositionMode(),
            textChatNotificationMode: f.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: f.Z.showKeybindIndicators,
          })),
          c = (0, v.Z)({ location: "Overlay Settings" });
        return (0, r.jsx)(b, {
          onClose: t,
          avatarSizeMode: n,
          displayNameMode: i,
          displayUserMode: s,
          notificationPositionMode: a,
          textChatNotificationMode: l,
          shouldShowKeybindIndicators: d,
          showKeybindIndicators: c,
        });
      }
    },
    483962: function (e, t, n) {
      "use strict";
      var i = n(200651),
        s = n(192379),
        r = n(442837),
        a = n(831218),
        o = n(840780),
        l = n(51596),
        d = n(905423),
        c = n(237997),
        u = n(145597),
        h = n(981631),
        p = n(388032),
        f = n(959534);
      let g = () => (0, l.$Z)("DM_SEARCH");
      t.Z = s.memo(function () {
        let e = (0, r.e7)([c.Z], () =>
            c.Z.isLocked((0, u.QF)()) ? "true" : "false",
          ),
          t = (0, d.Z)((e) => {
            let { channelId: t } = e;
            return t;
          });
        return (0, i.jsxs)("div", {
          className: f.privateChannels,
          children: [
            (0, i.jsx)("div", {
              className: f.searchBar,
              children: (0, i.jsx)("button", {
                type: "button",
                className: f.searchBarComponent,
                onClick: g,
                children: p.intl.string(p.t.LzcpeX),
              }),
            }),
            (0, i.jsx)(a.Z, {
              padding: 8,
              theme: h.BRd.DARK,
              version: e,
              selectedChannelId: t,
            }),
            (0, i.jsx)("section", {
              className: f.panels,
              "aria-label": p.intl.string(p.t.StREWF),
              children: (0, i.jsx)(o.Z, { guildId: null }),
            }),
          ],
        });
      });
    },
    711553: function (e, t, n) {
      "use strict";
      var i = n(200651);
      n(192379);
      var s = n(120356),
        r = n.n(s),
        a = n(481060),
        o = n(518084),
        l = n(981631),
        d = n(388032),
        c = n(624414);
      t.Z = function (e) {
        let t;
        let {
          title: n,
          header: s,
          children: u,
          renderSettings: h,
          onDragStart: p,
        } = e;
        return (
          (t =
            null != n
              ? (0, i.jsxs)(o.ZP.Bar, {
                  className: r()(c.header, c.draggableStartArea),
                  onMouseDown: p,
                  children: [
                    (0, i.jsx)(o.ZP.Content, {
                      className: r()(c.headerTitle, c.draggableStartArea),
                      dynamicSize: !0,
                      children: n,
                    }),
                    (0, i.jsx)(o.ZP.Content, {
                      children: (0, i.jsx)(a.Popout, {
                        position: "right",
                        renderPopout: null != h ? h : l.dG4,
                        autoInvert: !1,
                        children: (e) =>
                          (0, i.jsx)(o.ZP.Icon, {
                            ...e,
                            icon: a.SettingsIcon,
                            label: d.intl.string(d.t["3D5yo6"]),
                          }),
                      }),
                    }),
                  ],
                })
              : s),
          (0, i.jsxs)("div", {
            className: c.sidebar,
            children: [
              t,
              (0, i.jsx)("div", { className: c.children, children: u }),
            ],
          })
        );
      };
    },
    261435: function (e, t, n) {
      "use strict";
      n(47120), n(653041);
      var i,
        s,
        r,
        a,
        o,
        l,
        d,
        c,
        u = n(512722),
        h = n.n(u),
        p = n(772848),
        f = n(442837),
        g = n(570140),
        m = n(13245),
        v = n(836932),
        x = n(175553),
        _ = n(158979),
        S = n(181912),
        Z = n(791288),
        E = n(194295),
        C = n(998033),
        I = n(181364),
        y = n(435064),
        N = n(668761),
        b = n(86071),
        T = n(358446),
        O = n(371651),
        j = n(695346),
        M = n(314897),
        R = n(592125),
        P = n(292959),
        w = n(158776),
        A = n(944486),
        k = n(885110),
        D = n(246946),
        L = n(594174),
        z = n(974180),
        B = n(808506),
        V = n(237997),
        W = n(70956),
        U = n(150097),
        F = n(129724),
        G = n(145597),
        H = n(449224),
        Y = n(981631),
        K = n(987650),
        X = n(388032);
      ((a = i || (i = {}))[(a.GENERIC = 0)] = "GENERIC"),
        (a[(a.TEXT = 1)] = "TEXT"),
        (a[(a.INCOMING_CALL = 2)] = "INCOMING_CALL"),
        ((o = s || (s = {}))[(o.NORMAL = 0)] = "NORMAL"),
        (o[(o.HIGH = 1)] = "HIGH"),
        (o[(o.URGENT = 2)] = "URGENT");
      let Q = 5 * W.Z.Millis.SECOND,
        J = 8 * W.Z.Millis.SECOND,
        q = 30 * W.Z.Millis.SECOND,
        $ = Object.freeze({
          priority: 0,
          duration: Q,
          expirationExternallyManaged: !1,
          type: 0,
        }),
        ee = [],
        et = (e, t, n) => {
          let i = t ? Y._1z.TIMED_OUT : Y._1z.DISMISSED;
          return setTimeout(
            () => m.Z.updateNotificationStatus(e, i),
            null != n ? n : Q,
          );
        };
      function en(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Y._1z.DISMISSED;
        if (null == e) return !1;
        let n = ee.findIndex((t) => t.id === e);
        if (-1 === n) return !1;
        let i = ee[n];
        clearTimeout(i.timerId),
          (ee = [...ee]),
          t === Y._1z.DISMISSED
            ? ee.splice(n, 1)
            : (ee[n] = { ...i, status: t });
      }
      function ei(e) {
        let t = ee.length;
        return (
          (ee = ee.filter((t) => 1 !== t.type || t.channelId !== e || !1))
            .length !== t
        );
      }
      function es(e) {
        let t = ee.find((t) => 2 === t.type && t.channelId === e);
        return null != t ? t.id : null;
      }
      function er(e, t) {
        let n = { ...$, ...t };
        if (2 !== n.priority && !V.Z.isInstanceFocused()) return null;
        let i = (0, p.Z)(),
          s = {
            id: i,
            status: Y._1z.ACTIVE,
            timerId: et(i, n.expirationExternallyManaged, n.duration),
            props: e,
            ...n,
          },
          r = (ee = [...ee]).findIndex((e) => e.priority <= n.priority);
        return (
          -1 === r ? ee.push(s) : ee.splice(r, 0, s),
          ee.length > 10 && clearTimeout(ee.pop().timerId),
          i
        );
      }
      function ea(e) {
        let { channelId: t, ringing: n } = e,
          i = es(t);
        if (!n.includes(M.default.getId())) return en(i);
        if (null != i) return !1;
        let s = R.Z.getChannel(t);
        if (
          null == s ||
          !s.isPrivate() ||
          k.Z.getStatus() === Y.Skl.DND ||
          j.QZ.getSetting()
        )
          return !1;
        let r = ee.find(
          (e) =>
            1 === e.type && e.channelId === t && e.messageType === Y.uaV.CALL,
        );
        null != r && en(r.id),
          er((0, S.Z)(s), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: s.id,
          });
      }
      class eo extends (r = f.ZP.Store) {
        initialize() {
          this.waitFor(R.Z, L.default);
        }
        getNotifications() {
          return ee;
        }
      }
      (c = "OverlayNotificationsStore"),
        (d = "displayName") in (l = eo)
          ? Object.defineProperty(l, d, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[d] = c),
        (t.Z = new eo(g.Z, {
          OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
            let { notificationId: t, status: n } = e;
            en(t, n);
          },
          OVERLAY_MOUNTED: function (e) {
            var t;
            let { nudges: n } = e;
            if (
              O.Z.hasChangedRenderMode(
                null !== (t = B.Z.getFocusedPID()) && void 0 !== t
                  ? t
                  : (0, G.QF)(),
              )
            )
              return;
            let i = (function (e) {
              switch (e.type) {
                case K.nc.GO_LIVE_VOICE:
                case K.nc.GO_LIVE_NON_VOICE:
                  return (0, _.Z)(e);
                case K.nc.KEYBIND_INDICATORS:
                  return (0, T.Z)(e);
                case K.nc.NEWS:
                default:
                  return (0, I.Z)(e);
              }
            })(n[0]);
            null != i && er(i, { priority: 2, duration: J });
          },
          OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            if (t) return !1;
            ee = ee.map((e) =>
              e.status === Y._1z.ACTIVE
                ? (clearTimeout(e.timerId),
                  { ...e, timerId: et(e.id, e.expirationExternallyManaged) })
                : e,
            );
          },
          MESSAGE_CREATE: function (e) {
            var t, n, i;
            let { channelId: s, message: r } = e,
              a = R.Z.getChannel(s),
              o = L.default.getUser(
                null === (t = r.author) || void 0 === t ? void 0 : t.id,
              );
            if (null == a || null == o) return !1;
            if (
              (null === (n = r.activity) || void 0 === n ? void 0 : n.type) ===
                Y.mFx.JOIN ||
              (null === (i = r.activity) || void 0 === i ? void 0 : i.type) ===
                Y.mFx.JOIN_REQUEST
            ) {
              if (!(0, U.eF)(r, s, !0, !0)) return !1;
              let e = (function (e, t, n) {
                let i, s;
                if (
                  (h()(null != t.activity, "received null message activity"),
                  n.id === M.default.getId())
                )
                  return !1;
                let r = H.Z.getGame();
                if (null == r) return !1;
                switch (t.activity.type) {
                  case Y.mFx.JOIN:
                    if (
                      null == (i = w.Z.getApplicationActivity(n.id, r.id)) ||
                      null == i.party ||
                      i.party.id !== t.activity.party_id
                    )
                      return !1;
                    s = (0, v.Z)(e, t, n, r, i);
                    break;
                  case Y.mFx.JOIN_REQUEST:
                    if (
                      null == (i = k.Z.getApplicationActivity(r.id)) ||
                      null == i.party ||
                      i.party.id !== t.activity.party_id
                    )
                      return !1;
                    s = (0, E.Z)(e, n, r, i);
                }
                if (null == s) return !1;
                let a = er(s, {
                  priority: 2,
                  expirationExternallyManaged: !0,
                  channelId: e.id,
                });
                return null != a && et(a, !1, q), !0;
              })(a, r, o);
              if (!1 !== e) return e;
            }
            if (
              ((!V.Z.isInstanceLocked() || V.Z.isPinned(Y.Odu.TEXT)) &&
                s === A.Z.getChannelId()) ||
              V.Z.getTextChatNotificationMode() === Y.Ypu.DISABLED ||
              D.Z.disableNotifications ||
              !(0, U.eF)(r, s)
            )
              return !1;
            let l = !P.Z.isSoundDisabled(z.Ay);
            er((0, C.Z)(a, r, o, l), {
              type: 1,
              channelId: a.id,
              messageType: r.type,
            });
          },
          CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return null != t && ei(t);
          },
          MESSAGE_ACK: function (e) {
            let { channelId: t } = e;
            return ei(t);
          },
          CALL_CREATE: ea,
          CALL_UPDATE: ea,
          CALL_DELETE: function (e) {
            let { channelId: t } = e;
            en(es(t));
          },
          ACTIVITY_USER_ACTION: function (e) {
            let t,
              { actionType: n, user: i, applicationId: s } = e,
              r = H.Z.getGame();
            if (null == r || r.id !== s) return !1;
            if (n === Y.mFx.JOIN) t = (0, x.Z)(i, r);
            if (null == t) return !1;
            er(t, { priority: 2, type: 0 });
          },
          CLIPS_SAVE_CLIP_START: function () {
            er((0, N.f)(X.intl.string(X.t.NBMK9v)));
          },
          CLIPS_SAVE_CLIP: function () {
            er(
              (0, N.f)(
                X.intl.formatToPlainString(X.t.KLhk6u, {
                  duration: (0, F.A)(y.Z.getSettings().clipsLength / 1e3, !0),
                }),
              ),
            );
          },
          CLIPS_SAVE_CLIP_ERROR: function () {
            er((0, N.f)(X.intl.string(X.t["1ZbZur"])));
          },
          STREAM_START: function (e) {
            let t = (0, N.y)();
            null != t && er(t);
          },
          OVERLAY_CONTENT_INVENTORY_READY: function (e) {
            var t;
            let { contentInventoryEntries: n } = e;
            if (
              0 === n.length ||
              O.Z.hasChangedRenderMode(
                null !== (t = B.Z.getFocusedPID()) && void 0 !== t
                  ? t
                  : (0, G.QF)(),
              )
            )
              return;
            let i = H.Z.getGame();
            if (null == i) return;
            let { enabled: s } = b.Z.getCurrentConfig(
              { location: "OverlayNotificationsStore" },
              { autoTrackExposure: !0 },
            );
            s &&
              er((0, Z.Z)(i, n), {
                priority: 2,
                type: 0,
                expirationExternallyManaged: !0,
                duration: 30 * W.Z.Millis.SECOND,
              });
          },
        }));
    },
    114057: function (e, t, n) {
      "use strict";
      e.exports = { footer: "footer_f8c8a1", ctaButton: "ctaButton_f8c8a1" };
    },
    522634: function (e, t, n) {
      "use strict";
      e.exports = {
        avatarContainer: "avatarContainer_f27de4",
        helpText: "helpText_f27de4",
        userRow: "userRow_f27de4",
        userInfo: "userInfo_f27de4",
        usernameWrapper: "usernameWrapper_f27de4",
        username: "username_f27de4",
        inviteButtonWrapper: "inviteButtonWrapper_f27de4",
        inviteButton: "inviteButton_f27de4",
        header: "header_f27de4",
        gameInfo: "gameInfo_f27de4",
      };
    },
    53203: function (e, t, n) {
      "use strict";
      e.exports = {
        wrapper: "wrapper_cf3971",
        operation: "operation_cf3971",
        resizeNorth: "resizeNorth_cf3971 handle_cf3971",
        resizeSouth: "resizeSouth_cf3971 handle_cf3971",
        resizeNSCursor: "resizeNSCursor_cf3971",
        resizeWest: "resizeWest_cf3971 handle_cf3971",
        resizeEast: "resizeEast_cf3971 handle_cf3971",
        resizeEWCursor: "resizeEWCursor_cf3971",
        resizeNorthWest: "resizeNorthWest_cf3971 handle_cf3971",
        resizeNorthEast: "resizeNorthEast_cf3971 handle_cf3971",
        resizeSouthWest: "resizeSouthWest_cf3971 handle_cf3971",
        resizeSouthEast: "resizeSouthEast_cf3971 handle_cf3971",
        resizeNWSECursor: "resizeNWSECursor_cf3971",
        resizeNESWCursor: "resizeNESWCursor_cf3971",
      };
    },
    131478: function (e, t, n) {
      "use strict";
      e.exports = { key: "key_a384c4" };
    },
    521772: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_f6b647",
        clickBlocker: "clickBlocker_f6b647",
        content: "content_f6b647",
        details: "details_f6b647",
        hintText: "hintText_f6b647",
        clickable: "clickable_f6b647",
        dismissButton: "dismissButton_f6b647",
        dismissIcon: "dismissIcon_f6b647",
        buttonContainer: "buttonContainer_f6b647",
        button: "button_f6b647",
        avatar: "avatar_f6b647",
        title: "title_f6b647",
        body: "body_f6b647",
        divider: "divider_f6b647",
        keybindMessage: "keybindMessage_f6b647",
        keybind: "keybind_f6b647",
        hintSubtleText: "hintSubtleText_f6b647",
        themePrimary: "themePrimary_f6b647",
        innerText: "innerText_f6b647",
      };
    },
    373780: function (e, t, n) {
      "use strict";
      e.exports = {
        wrapper: "wrapper_b877fa",
        disabledSelected: "disabledSelected_b877fa",
        hiddenInput: "hiddenInput_b877fa",
        bottomLeft: "bottomLeft_b877fa option_b877fa",
        bottomRight: "bottomRight_b877fa option_b877fa",
        topLeft: "topLeft_b877fa option_b877fa",
        topRight: "topRight_b877fa option_b877fa",
        disabled: "disabled_b877fa",
        disabledIcon: "disabledIcon_b877fa",
        selected: "selected_b877fa",
      };
    },
    963656: function (e, t, n) {
      "use strict";
      e.exports = {
        controls: "controls_c5dd04",
        unpinned: "unpinned_c5dd04",
        content: "content_c5dd04",
        strikethrough: "strikethrough_c5dd04",
      };
    },
    433217: function (e, t, n) {
      "use strict";
      e.exports = { base: "base_aabd07", widget: "widget_aabd07" };
    },
    176259: function (e, t, n) {
      "use strict";
      e.exports = { wrapper: "wrapper_f9d934" };
    },
    346728: function (e, t, n) {
      "use strict";
      e.exports = {
        keybindIndicator: "keybindIndicator_a49331",
        keybindIcon: "keybindIcon_a49331",
        keybindIndicatorText: "keybindIndicatorText_a49331",
      };
    },
    60944: function (e, t, n) {
      "use strict";
      e.exports = {
        notificationBody: "notificationBody_a13960",
        iconContainer: "iconContainer_a13960",
      };
    },
    606953: function (e, t, n) {
      "use strict";
      e.exports = { notificationContainer: "notificationContainer_bcc984" };
    },
    544690: function (e, t, n) {
      "use strict";
      n.r(
        (e.exports = {
          container: "container_efc087",
          topLeft: "topLeft_efc087",
          topRight: "topRight_efc087",
          bottomLeft: "bottomLeft_efc087",
          bottomRight: "bottomRight_efc087",
        }),
      );
    },
    497343: function (e, t, n) {
      "use strict";
      e.exports = { canvas: "canvas_b7bd4c" };
    },
    684648: function (e, t, n) {
      "use strict";
      n.r(
        (e.exports = {
          contained: "contained_ac9afa",
          header: "header_ac9afa",
          headerDefault: "headerDefault_ac9afa header_ac9afa",
          activateContainer: "activateContainer_ac9afa",
          activateKeybind: "activateKeybind_ac9afa",
          inGame: "inGame_ac9afa",
          inGameActive: "inGameActive_ac9afa",
          footerContent: "footerContent_ac9afa footer_ac9afa",
          messages: "messages_ac9afa",
          headerPinned: "headerPinned_ac9afa header_ac9afa",
          widget: "widget_ac9afa",
          widgetWrapper: "widgetWrapper_ac9afa widget_ac9afa",
          widgetWrapperPinned: "widgetWrapperPinned_ac9afa widget_ac9afa",
          draggableStartArea: "draggableStartArea_ac9afa",
          footer: "footer_ac9afa",
          typingWrapper: "typingWrapper_ac9afa",
          typing: "typing_ac9afa",
          messagesContainer: "messagesContainer_ac9afa",
          disableHoverStates: "disableHoverStates_ac9afa",
          isDragging: "isDragging_ac9afa",
          pinned: "pinned_ac9afa",
          locked: "locked_ac9afa",
          scroller: "scroller_ac9afa",
          footerContentPinned: "footerContentPinned_ac9afa",
          looksLocked: "looksLocked_ac9afa",
          resizeIcon: "resizeIcon_ac9afa",
        }),
      );
    },
    970772: function (e, t, n) {
      "use strict";
      e.exports = {
        headerContainer: "headerContainer_c6d3b6",
        opacityHeader: "opacityHeader_c6d3b6 " + n("684648").header,
        dragIcon: "dragIcon_c6d3b6",
      };
    },
    394977: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_f86a0e",
        title: "title_f86a0e",
        sliderContainer: "sliderContainer_f86a0e",
      };
    },
    734701: function (e, t, n) {
      "use strict";
      e.exports = {
        icon: "icon_cfed93",
        voiceIcon: "voiceIcon_cfed93",
        voiceList: "voiceList_cfed93",
        dragIcon: "dragIcon_cfed93",
        draggableStartArea: "draggableStartArea_cfed93",
        content: "content_cfed93",
        speakerIcon: "speakerIcon_cfed93",
        interactive: "interactive_cfed93",
        username: "username_cfed93",
        voiceUserWrapper: "voiceUserWrapper_cfed93",
        locked: "locked_cfed93",
        lockedContainer: "lockedContainer_cfed93",
        faded: "faded_cfed93",
        preview: "preview_cfed93",
        hidden: "hidden_cfed93",
        title: "title_cfed93",
        streamerControls: "streamerControls_cfed93",
        unpinned: "unpinned_cfed93",
        streamerContent: "streamerContent_cfed93",
        streamerInner: "streamerInner_cfed93",
        gameIcon: "gameIcon_cfed93",
        streamerInfo: "streamerInfo_cfed93",
        streaming: "streaming_cfed93",
        streamerIconWrapper: "streamerIconWrapper_cfed93",
        streamerIcon: "streamerIcon_cfed93",
      };
    },
    513473: function (e, t, n) {
      "use strict";
      n.r(
        (e.exports = {
          content: "content_cbf964",
          staticSize: "staticSize_cbf964",
          widget: "widget_cbf964",
          inGameText: "inGameText_cbf964",
          inGameActive: "inGameActive_cbf964",
          inGame: "inGame_cbf964",
          default: "default_cbf964",
          unpinned: "unpinned_cbf964",
          bar: "bar_cbf964",
          body: "body_cbf964",
          pinned: "pinned_cbf964",
          icon: "icon_cbf964",
          toggledIconOn: "toggledIconOn_cbf964",
          tutorialTip: "tutorialTip_cbf964",
        }),
      );
    },
    389645: function (e, t, n) {
      "use strict";
      e.exports = {
        guildHeader: "guildHeader_c0cc4b",
        guildHeaderInner: "guildHeaderInner_c0cc4b",
        channelList: "channelList_c0cc4b",
        panels: "panels_c0cc4b",
      };
    },
    382595: function (e, t, n) {
      "use strict";
      e.exports = {
        header: "header_ea2748",
        headerTitle: "headerTitle_ea2748",
        headerClose: "headerClose_ea2748",
        tabBarItem: "tabBarItem_ea2748",
        content: "content_ea2748",
      };
    },
    959534: function (e, t, n) {
      "use strict";
      e.exports = {
        privateChannels: "privateChannels_ec7a6d",
        searchBar: "searchBar_ec7a6d",
        searchBarComponent: "searchBarComponent_ec7a6d",
        panels: "panels_ec7a6d",
      };
    },
    624414: function (e, t, n) {
      "use strict";
      e.exports = {
        sidebar: "sidebar_d86933",
        children: "children_d86933",
        header: "header_d86933",
        draggableStartArea: "draggableStartArea_d86933",
        headerTitle: "headerTitle_d86933",
      };
    },
  },
]);
//# sourceMappingURL=5c44c754f22bceef346b.js.map
