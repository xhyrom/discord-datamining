(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41916"],
  {
    447479: function (e) {
      e.exports = function (e, t, n, i) {
        var s = -1,
          a = null == e ? 0 : e.length;
        for (i && a && (n = e[++s]); ++s < a; ) n = t(n, e[s], s, e);
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
        a = n(232396),
        r = n(263604);
      e.exports = function (e) {
        return function (t) {
          var n = s((t = r(t))) ? a(t) : void 0,
            o = n ? n[0] : t.charAt(0),
            l = n ? i(n, 1).join("") : t.slice(1);
          return o[e]() + l;
        };
      };
    },
    145983: function (e, t, n) {
      var i = n(447479),
        s = n(658141),
        a = n(401427),
        r = RegExp("['’]", "g");
      e.exports = function (e) {
        return function (t) {
          return i(a(s(t).replace(r, "")), e, "");
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
        a = n(12276);
      e.exports = function (e) {
        return s(e) ? a(e) : i(e);
      };
    },
    12276: function (e) {
      var t = "\ud800-\udfff",
        n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        i = "\ud83c[\udffb-\udfff]",
        s = "[^" + t + "]",
        a = "(?:\ud83c[\udde6-\uddff]){2}",
        r = "[\ud800-\udbff][\udc00-\udfff]",
        o = "(?:" + n + "|" + i + ")?",
        l = "[\\ufe0e\\ufe0f]?",
        c = "(?:\\u200d(?:" + [s, a, r].join("|") + ")" + l + o + ")*",
        d = RegExp(
          i +
            "(?=" +
            i +
            ")|" +
            ("(?:" + [s + n + "?", n, a, r, "[" + t + "]"].join("|") + ")") +
            (l + o + c),
          "g",
        );
      e.exports = function (e) {
        return e.match(d) || [];
      };
    },
    519342: function (e) {
      var t = "\ud800-\udfff",
        n = "\\u2700-\\u27bf",
        i = "a-z\\xdf-\\xf6\\xf8-\\xff",
        s = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        a =
          "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        r = "['’]",
        o = "[" + a + "]",
        l = "[" + i + "]",
        c = "[^" + t + a + "\\d+" + n + i + s + "]",
        d = "(?:\ud83c[\udde6-\uddff]){2}",
        u = "[\ud800-\udbff][\udc00-\udfff]",
        h = "[" + s + "]",
        p = "(?:" + l + "|" + c + ")",
        f = "(?:" + h + "|" + c + ")",
        _ = "(?:" + r + "(?:d|ll|m|re|s|t|ve))?",
        E = "(?:" + r + "(?:D|LL|M|RE|S|T|VE))?",
        g =
          "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
        m = "[\\ufe0e\\ufe0f]?",
        I =
          "(?:\\u200d(?:" +
          ["[^" + t + "]", d, u].join("|") +
          ")" +
          m +
          g +
          ")*",
        Z = "(?:" + ["[" + n + "]", d, u].join("|") + ")" + (m + g + I),
        v = RegExp(
          [
            h + "?" + l + "+" + _ + "(?=" + [o, h, "$"].join("|") + ")",
            f + "+" + E + "(?=" + [o, h + p, "$"].join("|") + ")",
            h + "?" + p + "+" + _,
            h + "+" + E,
            "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            "\\d+",
            Z,
          ].join("|"),
          "g",
        );
      e.exports = function (e) {
        return e.match(v) || [];
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
        a = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        r = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
      e.exports = function (e) {
        return (e = s(e)) && e.replace(a, i).replace(r, "");
      };
    },
    278759: function (e, t, n) {
      var i = n(128971)("toUpperCase");
      e.exports = i;
    },
    401427: function (e, t, n) {
      var i = n(160739),
        s = n(988513),
        a = n(263604),
        r = n(519342);
      e.exports = function (e, t, n) {
        return ((e = a(e)), void 0 === (t = n ? void 0 : t))
          ? s(e)
            ? r(e)
            : i(e)
          : e.match(t) || [];
      };
    },
    988131: function (e) {
      "use strict";
      e.exports = "/assets/13023c608fc6d40094e8.svg";
    },
    847881: function (e) {
      "use strict";
      e.exports = "/assets/f3bf33abef8a529123fa.svg";
    },
    296507: function (e) {
      "use strict";
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      "use strict";
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    26229: function (e, t, n) {
      "use strict";
      var i = n(735250),
        s = n(470079);
      class a extends s.PureComponent {
        render() {
          let {
            layout: e,
            layoutSize: t,
            className: n,
            renderWidget: s,
          } = this.props;
          return null != e
            ? (0, i.jsx)("div", {
                className: n,
                style: { width: t.width, height: t.height },
                children: e.widgets.map((e) => s(e, t)),
              })
            : null;
        }
      }
      t.Z = a;
    },
    312839: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return d;
        },
        R: function () {
          return c;
        },
      });
      var i = n(13245),
        s = n(556296),
        a = n(237997),
        r = n(13140),
        o = n(981631),
        l = n(987650);
      function c(e, t) {
        return {
          trackView() {
            i.Z.track(o.rMx.NOTIFICATION_VIEWED, t),
              i.Z.notificationEvent(e, l.bv.Viewed);
          },
          trackClick(n) {
            let s = a.Z.isInstanceUILocked()
              ? o.Sbl.LOCKED_OVERLAY
              : o.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(o.rMx.NOTIFICATION_CLICKED, {
              ...t,
              location: s,
              action_type: n,
            }),
              i.Z.notificationEvent(e, l.bv.Clicked);
          },
          trackEvent(n, s) {
            let r = a.Z.isInstanceUILocked()
              ? o.Sbl.LOCKED_OVERLAY
              : o.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(n, { ...t, ...s, location: r }),
              i.Z.notificationEvent(e, l.bv.Clicked);
          },
        };
      }
      function d() {
        let e = s.Z.getOverlayKeybind();
        return null != e ? (0, r.BB)(e.shortcut, !0).split(" + ") : ["???"];
      }
    },
    836932: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(224706),
        s = n(13245),
        a = n(593481),
        r = n(150097),
        o = n(312839),
        l = n(987650),
        c = n(689938);
      function d(e, t, n, d, u) {
        if (null == t.activity) return null;
        let h = t.activity.type,
          p = u.session_id;
        if (null == p) return null;
        let { icon: f, title: _, body: E } = (0, r.Xi)(e, t, n),
          { trackView: g, trackClick: m } = (0, o.R)(l.n0.ActivityInvite, {
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
          colorScheme: a.ZP.ColorSchemes.PRIMARY,
          icon: f,
          title: _,
          body: E,
          hint: (e) =>
            (0, a.QR)(e, (0, o.P)(), c.Z.Messages.OVERLAY_UNLOCK_TO_JOIN),
          onNotificationShow: () => {
            g();
          },
          confirmText: c.Z.Messages.JOIN,
          onConfirmClick: (a, r) => {
            i.Z.join({
              userId: n.id,
              sessionId: p,
              applicationId: d.id,
              channelId: e.id,
              messageId: t.id,
            }),
              s.Z.updateNotificationStatus(r),
              m("join");
          },
          onDismissClick: () => {
            m("dismiss");
          },
        };
      }
    },
    175553: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(593481),
        s = n(768581),
        a = n(312839),
        r = n(981631),
        o = n(987650),
        l = n(689938);
      function c(e, t) {
        let n = e.username,
          c = l.Z.Messages.USER_ACTIVITY_USER_JOIN.format({ username: "" }),
          d = (0, s.ov)(e),
          { trackView: u, trackClick: h } = (0, a.R)(o.n0.ActivityUserJoin, {
            notif_type: o.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: r.mFx.JOIN,
            activity_name: t.name,
          });
        return {
          colorScheme: i.ZP.ColorSchemes.PRIMARY,
          icon: d,
          title: n,
          body: c,
          hint: (e) => (0, i.Yj)(e, l.Z.Messages.USER_ACTIVITY_USER_JOIN_HINT),
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
          return p;
        },
      });
      var i = n(735250);
      n(470079);
      var s = n(481060),
        a = n(13245),
        r = n(593481),
        o = n(312839),
        l = n(981631),
        c = n(987650),
        d = n(689938),
        u = n(57266);
      function h() {
        return (0, i.jsx)("div", {
          className: u.footer,
          children: (0, i.jsx)(s.Button, {
            color: s.Button.Colors.GREEN,
            size: s.Button.Sizes.SMALL,
            className: u.ctaButton,
            children: d.Z.Messages.OVERLAY_NEWS_GO_LIVE_CTA,
          }),
        });
      }
      function p(e) {
        switch (e.type) {
          case c.nc.GO_LIVE_VOICE: {
            let { game: t, voiceGuild: u } = e,
              { trackView: p, trackClick: f } = (0, o.R)(c.n0.GoLiveNudge, {
                notif_type: c.n0.GoLiveNudge,
              });
            return {
              colorScheme: r.IC.PRIMARY,
              icon: n(847881),
              title: null,
              body: d.Z.Messages.OVERLAY_NEWS_GO_LIVE_BODY.format({
                game: t.name,
                server: u.toString(),
              }),
              hint: () => (0, i.jsx)(h, {}),
              renderFooter: () => (0, i.jsx)(h, {}),
              onNotificationShow: () => {
                p();
              },
              onNotificationClick: (e, t) => {
                f("unlock"),
                  a.Z.updateNotificationStatus(t),
                  a.Z.setInstanceLocked(!1),
                  (0, s.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                      n.e("46746"),
                      n.e("33641"),
                    ]).then(n.bind(n, 60594));
                    return (t) =>
                      (0, i.jsx)(e, {
                        ...t,
                        selectSource: !1,
                        guildId: u.id,
                        analyticsLocation: l.Sbl.OVERLAY_NUDGE,
                      });
                  });
              },
              onDismissClick: () => {
                f("dismiss");
              },
            };
          }
          case c.nc.GO_LIVE_NON_VOICE: {
            let { game: t } = e,
              { trackView: u, trackClick: p } = (0, o.R)(
                c.n0.GoLiveNonVoiceNudge,
                { notif_type: c.n0.GoLiveNonVoiceNudge },
              );
            return {
              colorScheme: r.IC.PRIMARY,
              icon: n(847881),
              title: null,
              body: d.Z.Messages.OVERLAY_NEWS_GO_LIVE_BODY_NO_VOICE_CHANNEL.format(
                { game: t.name },
              ),
              hint: () => (0, i.jsx)(h, {}),
              renderFooter: () => (0, i.jsx)(h, {}),
              onNotificationShow: () => {
                u();
              },
              onNotificationClick: (e, t) => {
                p("unlock"),
                  a.Z.updateNotificationStatus(t),
                  a.Z.setInstanceLocked(!1),
                  (0, s.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                      n.e("46746"),
                      n.e("33641"),
                    ]).then(n.bind(n, 60594));
                    return (t) =>
                      (0, i.jsx)(e, {
                        ...t,
                        selectSource: !1,
                        selectGuild: !0,
                        analyticsLocation: l.Sbl.OVERLAY_NUDGE,
                      });
                  });
              },
              onDismissClick: () => {
                p("dismiss");
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
        a = n(43267),
        r = n(933557),
        o = n(593481),
        l = n(699516),
        c = n(594174),
        d = n(312839),
        u = n(981631),
        h = n(987650),
        p = n(689938);
      function f(e) {
        let t = (0, r.F6)(e, c.default, l.Z),
          n = p.Z.Messages.OVERLAY_NOTIFICATION_INCOMING_CALL,
          f = (0, a.x)(e),
          { trackView: _, trackClick: E } = (0, d.R)(h.n0.IncomingCall, {
            notif_type: h.n0.IncomingCall,
            notif_user_id: 1 === e.recipients.length ? e.recipients[0] : null,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
          });
        return {
          colorScheme: o.ZP.ColorSchemes.PRIMARY,
          icon: f,
          title: t,
          body: n,
          hint: (e) =>
            (0, o.QR)(e, (0, d.P)(), p.Z.Messages.OVERLAY_UNLOCK_TO_ANSWER),
          confirmText: p.Z.Messages.JOIN_CALL,
          cancelText: p.Z.Messages.DECLINE,
          onNotificationShow: () => {
            _();
          },
          onConfirmClick: () => {
            s.Z.callPrivateChannel(e.id),
              E("join"),
              s.Z.track(u.rMx.VOICE_CHANNEL_SELECTED, {
                location: "Overlay Notificaiton",
                guild_id: null,
                channel_id: e.id,
                video_enabled: !1,
              });
          },
          onCancelClick: () => {
            i.Z.stopRinging(e.id), E("decline");
          },
          onDismissClick: () => {
            E("dismiss");
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
      var i = n(735250),
        s = n(470079),
        a = n(512722),
        r = n.n(a),
        o = n(442837),
        l = n(481060),
        c = n(493683),
        d = n(13245),
        u = n(99690),
        h = n(835473),
        p = n(194082),
        f = n(442550),
        _ = n(297781),
        E = n(371991),
        g = n(656709),
        m = n(561308),
        I = n(593481),
        Z = n(703656),
        v = n(199902),
        S = n(592125),
        C = n(158776),
        x = n(594174),
        N = n(5192),
        T = n(312839),
        O = n(981631),
        A = n(701488),
        y = n(987650),
        R = n(689938),
        M = n(810489);
      function L(e) {
        let { game: t } = e,
          n = (0, h.q)(t.id);
        if (null == n) return null;
        let s = n.getIconURL(A.Si.LARGE);
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: M.header,
            children: [
              (0, i.jsx)(f.f, { src: s, size: 32 }),
              (0, i.jsx)(l.Text, {
                className: M.gameInfo,
                variant: "text-md/semibold",
                color: "header-primary",
                children: n.name,
              }),
            ],
          }),
        });
      }
      function b(e) {
        let { entry: t, idx: n, onTrackEvent: a } = e,
          d = (0, o.e7)([x.default], () => x.default.getUser(t.author_id)),
          h = (0, m.kr)(t),
          f = h
            ? l.tokens.colors.TEXT_POSITIVE
            : l.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
          [I, T] = s.useState("unsent"),
          [A, y] = s.useState(!1),
          L = (0, o.e7)(
            [v.Z],
            () => (null != d ? v.Z.getAnyStreamForUser(d.id) : null),
            [d],
          ),
          { isMobileOnline: b, status: P } = (0, o.cj)(
            [C.Z],
            () =>
              null == d
                ? { isMobileOnline: void 0, status: void 0 }
                : {
                    isMobileOnline: C.Z.isMobileOnline(d.id),
                    status: C.Z.getStatus(d.id),
                  },
            [d],
          );
        s.useEffect(() => {
          if ("sent" === I) {
            let e = setTimeout(() => y(!0), 2e3);
            return () => clearTimeout(e);
          }
        }, [I]);
        let D = async (e) => {
            if (null != d && "unsent" === I) {
              e.stopPropagation();
              try {
                var i;
                T("sending");
                let e = await c.Z.getOrEnsurePrivateChannel(d.id),
                  s =
                    null !== (i = S.Z.getChannel(e)) && void 0 !== i ? i : null;
                r()(null != s, "Send channel must be defined"),
                  (0, Z.uL)(O.Z5c.CHANNEL(s.guild_id, s.id)),
                  await (0, g.p)({
                    channel: s,
                    content:
                      R.Z.Messages.CONTENT_INVENTORY_OVERLAY_INVITE_MESSAGE,
                    entry: t,
                    whenReady: !0,
                  }),
                  a(O.rMx.OVERLAY_GAME_INVITE_SENT, {
                    target_user_id: d.id,
                    target_content_entry_id: t.id,
                    target_index: n,
                  }),
                  T("sent");
              } catch (e) {
                T("unsent");
              }
            }
          },
          j = async () => {
            var e;
            if (null == d) return;
            let t = await c.Z.getOrEnsurePrivateChannel(d.id),
              n = null !== (e = S.Z.getChannel(t)) && void 0 !== e ? e : null;
            r()(null != n, "Send channel must be defined"),
              (0, Z.uL)(O.Z5c.CHANNEL(n.guild_id, n.id));
          };
        return null == d
          ? null
          : (0, i.jsxs)("div", {
              className: M.userRow,
              children: [
                (0, i.jsx)(u.Z, {
                  className: M.avatarContainer,
                  user: d,
                  isMobile: b,
                  status: P,
                }),
                (0, i.jsxs)("div", {
                  className: M.userInfo,
                  children: [
                    (0, i.jsxs)("div", {
                      className: M.usernameWrapper,
                      children: [
                        (0, i.jsx)(l.Text, {
                          className: M.username,
                          variant: "text-md/medium",
                          color: "header-primary",
                          children: N.ZP.getName(void 0, void 0, d),
                        }),
                        null != L && (0, i.jsx)(p.ZP, {}),
                      ],
                    }),
                    (0, i.jsxs)(_.m7, {
                      children: [
                        (0, i.jsx)(l.GameControllerIcon, {
                          size: "xxs",
                          color: f,
                        }),
                        (0, i.jsx)(E.ZP, {
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
                  className: M.inviteButtonWrapper,
                  children: (0, i.jsx)(l.Button, {
                    submitting: "sending" === I,
                    onClick: A ? j : D,
                    className: M.inviteButton,
                    color: l.ButtonColors.PRIMARY,
                    look:
                      "sent" === I
                        ? l.ButtonLooks.OUTLINED
                        : l.ButtonLooks.FILLED,
                    size: l.ButtonSizes.MAX,
                    children:
                      "sent" === I
                        ? A
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
      function P(e) {
        let { entries: t, onTrackEvent: n } = e,
          s = t.slice(0, 5);
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(I.iz, {}),
            (0, i.jsxs)(l.Text, {
              className: M.helpText,
              variant: "text-sm/medium",
              color: "header-secondary",
              children: [
                (0, i.jsx)(l.ChatPlusIcon, { size: "xxs" }),
                R.Z.Messages.CONTENT_INVENTORY_OVERLAY_INVITES_HELP,
              ],
            }),
            s.map((e, t) =>
              (0, i.jsx)(b, { idx: t, entry: e, onTrackEvent: n }, t),
            ),
          ],
        });
      }
      function D(e, t) {
        let {
          trackView: n,
          trackClick: s,
          trackEvent: a,
        } = (0, T.R)(y.n0.SendGameInvitesNotification, {
          notif_type: y.n0.SendGameInvitesNotification,
        });
        return (
          r()(t.length > 0, "Some entries must be present"),
          {
            colorScheme: I.IC.PRIMARY,
            icon: null,
            title: (0, i.jsx)(L, { game: e }),
            body: (0, i.jsx)(P, { entries: t, onTrackEvent: a }),
            onNotificationShow: () => {
              n(),
                a(O.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                  user_ids: t.map((e) => e.author_id),
                  entry_ids: t.map((e) => e.id),
                });
            },
            onNotificationClick: (e, t) => {
              s("unlock"), d.Z.setInstanceLocked(!1);
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
        a = n(45114),
        r = n(593481),
        o = n(237997),
        l = n(312839),
        c = n(981631),
        d = n(987650),
        u = n(689938);
      function h(e, t, n, h) {
        let p = t.username,
          f = u.Z.Messages.USER_ACTIVITY_INVITE_REQUEST_REQUESTED.format({
            username: "",
            game: n.name,
          }),
          _ = t.getAvatarURL(e.guild_id, 80),
          { trackView: E, trackClick: g } = (0, l.R)(d.n0.ActivityInvite, {
            notif_type: d.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: c.mFx.JOIN_REQUEST,
            activity_name: n.name,
          });
        return {
          colorScheme: r.ZP.ColorSchemes.PRIMARY,
          icon: _,
          title: p,
          body: f,
          hint: (e) =>
            (0, r.QR)(e, (0, l.P)(), u.Z.Messages.OVERLAY_UNLOCK_TO_ANSWER),
          confirmText: u.Z.Messages.USER_ACTIVITY_RESPOND_YEAH,
          cancelText: u.Z.Messages.USER_ACTIVITY_RESPOND_NOPE,
          onNotificationShow: () => {
            E();
          },
          onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
              channelId: e.id,
              type: c.mFx.JOIN,
              activity: h,
              location: o.Z.isInstanceUILocked()
                ? c.Sbl.LOCKED_OVERLAY
                : c.Sbl.UNLOCKED_OVERLAY,
            }),
              g("join"),
              s.Z.updateNotificationStatus(n);
          },
          onCancelClick: (t, n) => {
            (0, a.In)(e.id, !0, !0),
              s.Z.updateNotificationStatus(n),
              g("decline");
          },
          onDismissClick: () => {
            g("dismiss");
          },
        };
      }
    },
    998033: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var i = n(735250);
      n(470079);
      var s = n(13245),
        a = n(593481),
        r = n(703656),
        o = n(974180),
        l = n(237997),
        c = n(150097),
        d = n(557177),
        u = n(312839),
        h = n(981631),
        p = n(987650),
        f = n(689938);
      function _(e, t, n, _) {
        var E;
        let { icon: g, title: m, body: I } = (0, c.Xi)(e, t, n),
          { trackView: Z, trackClick: v } = (0, u.R)(p.n0.TextChat, {
            notif_type: p.n0.TextChat,
            notif_user_id:
              null === (E = t.author) || void 0 === E ? void 0 : E.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
          });
        return {
          colorScheme: a.IC.PRIMARY,
          icon: g,
          title: m,
          body: I,
          renderFooter: (e) =>
            e
              ? (0, i.jsx)("div", {
                  style: { textAlign: "center" },
                  children: f.Z.Messages.OVERLAY_CLICK_TO_JUMP_TO_CHANNEL,
                })
              : null,
          maxBodyLines: 2,
          onNotificationShow: () => {
            _ && (0, d.GN)(o.Ay, o.yk), Z();
          },
          onNotificationClick: () => {
            (0, r.uL)(h.Z5c.CHANNEL(e.guild_id, e.id)),
              v("jump"),
              l.Z.isInstanceUILocked() && s.Z.setInstanceLocked(!1);
          },
          onDismissClick: () => {
            v("dismiss");
          },
        };
      }
    },
    181364: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = n(735250);
      n(470079);
      var s = n(13245),
        a = n(593481),
        r = n(237997),
        o = n(312839),
        l = n(987650),
        c = n(689938);
      let d = () => ({
          icon: n(328756),
          title: c.Z.Messages.OVERLAY_LAUNCH_TITLE,
          body: null,
          hint: u,
          colorScheme: a.IC.PRIMARY,
          notifType: l.n0.WelcomeNudge,
        }),
        u = (e) =>
          (0, a.QR)(e, (0, o.P)(), c.Z.Messages.OVERLAY_LAUNCH_OPEN_TIP);
      function h(e) {
        let { type: t } = e,
          {
            icon: n,
            title: u,
            body: h,
            hint: p,
            colorScheme: f,
            notifType: _,
          } = (function (e, t) {
            if (t.type === l.nc.NEWS) {
              var n, i, s, r, o, c, d, u;
              return {
                icon:
                  null !==
                    (o =
                      null === (n = t.news) || void 0 === n
                        ? void 0
                        : n.icon) && void 0 !== o
                    ? o
                    : e.icon,
                title:
                  null !==
                    (c =
                      null === (i = t.news) || void 0 === i
                        ? void 0
                        : i.title) && void 0 !== c
                    ? c
                    : e.title,
                body:
                  null !==
                    (d =
                      null === (s = t.news) || void 0 === s
                        ? void 0
                        : s.body) && void 0 !== d
                    ? d
                    : e.body,
                hint:
                  null !==
                    (u =
                      null === (r = t.news) || void 0 === r
                        ? void 0
                        : r.hint) && void 0 !== u
                    ? u
                    : e.hint,
                colorScheme: null != t.news ? a.IC.BRAND : e.colorScheme,
                notifType: null != t.news ? l.n0.NewsNudge : e.notifType,
              };
            }
            return e;
          })(d(), e),
          { trackView: E, trackClick: g } = (0, o.R)(_, { notif_type: _ });
        return {
          colorScheme: f,
          icon: n,
          title: u,
          body: h,
          hint: p,
          renderFooter: () =>
            (0, i.jsx)("div", {
              style: { textAlign: "center", padding: 2 },
              children: c.Z.Messages.OVERLAY_CLICK_TO_UNLOCK,
            }),
          onNotificationShow: () => {
            E();
          },
          onNotificationClick: (e, n) => {
            g("unlock"),
              t === l.nc.NEWS && s.Z.updateNotificationStatus(n),
              r.Z.isInstanceUILocked() && s.Z.setInstanceLocked(!1);
          },
          onDismissClick: () => {
            g("dismiss");
          },
        };
      }
    },
    668761: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return p;
        },
        y: function () {
          return h;
        },
      });
      var i = n(735250);
      n(470079);
      var s = n(481060),
        a = n(312839),
        r = n(593481),
        o = n(556296),
        l = n(13140),
        c = n(981631),
        d = n(987650),
        u = n(689938);
      function h() {
        let { trackView: e, trackClick: t } = (0, a.R)(
            d.n0.ClipsReminderNotification,
            { notif_type: d.n0.ClipsReminderNotification },
          ),
          n = o.Z.getKeybindForAction(c.kg4.SAVE_CLIP);
        if (null == n) return null;
        let h = l.BB(n.shortcut, !0);
        return {
          colorScheme: r.IC.PRIMARY,
          title: u.Z.Messages.CLIPS_REMINDER_NOTIFICATION_TITLE.format({
            keybind: h,
            keybindHook: () =>
              (0, i.jsx)("span", {
                style: { display: "inline-block" },
                children: (0, i.jsx)(s.KeyCombo, { shortcut: h }),
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
      function p(e) {
        let { trackView: t, trackClick: n } = (0, a.R)(d.n0.ClipsNotification, {
          notif_type: d.n0.ClipsNotification,
        });
        return {
          colorScheme: r.IC.PRIMARY,
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
        a,
        r = n(735250),
        o = n(470079),
        l = n(120356),
        c = n.n(l),
        d = n(902704),
        u = n(434529),
        h = n(981631),
        p = n(242319);
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
      let _ = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
      ((a = i || (i = {})).MOVE = "MOVE"),
        (a.RESIZE_NORTH = "RESIZE_NORTH"),
        (a.RESIZE_WEST = "RESIZE_WEST"),
        (a.RESIZE_EAST = "RESIZE_EAST"),
        (a.RESIZE_SOUTH = "RESIZE_SOUTH"),
        (a.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST"),
        (a.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST"),
        (a.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST"),
        (a.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST");
      let E = new Set([
        "RESIZE_NORTH",
        "RESIZE_WEST",
        "RESIZE_EAST",
        "RESIZE_SOUTH",
        "RESIZE_NORTH_WEST",
        "RESIZE_NORTH_EAST",
        "RESIZE_SOUTH_WEST",
        "RESIZE_SOUTH_EAST",
      ]);
      function g(e, t, n) {
        let { width: i, height: s } = e;
        return {
          width: "auto" === i ? "auto" : Math.max(t, i),
          height: "auto" === s ? "auto" : Math.max(n, s),
        };
      }
      function m(e) {
        let { top: t, left: n, bottom: i, right: s } = e;
        return (
          null == n && null == s && (n = 0),
          null != n && null != s && (s = null),
          null == t && null == i && (t = 0),
          null != t && null != i && (i = null),
          { top: t, left: n, bottom: i, right: s }
        );
      }
      function I(e) {
        return "auto" === e || null == e ? "auto" : "".concat(e, "px");
      }
      function Z(e, t) {
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
      function v(e, t) {
        let { top: n, left: i, bottom: s, right: a } = t;
        switch (e) {
          case "RESIZE_EAST":
          case "RESIZE_NORTH_EAST":
          case "RESIZE_NORTH":
            return { bottom: s, left: i, right: null, top: null };
          case "RESIZE_WEST":
          case "RESIZE_NORTH_WEST":
            return { bottom: s, right: a, left: null, top: null };
          case "RESIZE_SOUTH_EAST":
            return { top: n, left: i, bottom: null, right: null };
          case "RESIZE_SOUTH":
          case "RESIZE_SOUTH_WEST":
            return { top: n, right: a, bottom: null, left: null };
          default:
            throw Error("getOrientedCoords: Invalid orientation: ".concat(e));
        }
      }
      class S extends (s = o.Component) {
        shouldComponentUpdate(e, t) {
          return (
            !(0, d.Z)(t, this.state) ||
            !(0, d.Z)(e, this.props, [
              "anchor",
              "size",
              "minSize",
              "container",
            ]) ||
            !(0, d.Z)(e.anchor, this.props.anchor) ||
            !(0, d.Z)(e.size, this.props.size) ||
            !(0, d.Z)(e.minSize, this.props.minSize) ||
            !(0, d.Z)(e.container, this.props.container)
          );
        }
        componentDidUpdate(e, t) {
          null == t.operation &&
            (!(0, d.Z)(this.props.anchor, e.anchor) &&
              this.setDOMPositions(m(this.props.anchor)),
            !(0, d.Z)(this.props.size, e.size) &&
              this.setDOMSize(
                g(
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
              container: { maxX: s, maxY: a, minX: r, minY: o },
              onDragStart: l,
              onDrag: c,
              snapOrientation: d,
            },
            dragState: { offsetX: h, offsetY: p },
            state: { operationStarted: f },
          } = this;
          if (null == n) return null;
          (e = Math.max(Math.min(s, e), r)), (t = Math.max(Math.min(a, t), o));
          let { width: _, height: E } = Z(n, this.size),
            g = t - p,
            m = e - h,
            I = (0, u.ou)(
              (0, u.PY)(
                { top: g, left: m, bottom: null, right: null },
                s,
                a,
                _,
                E,
              ),
            ),
            S = d ? (0, u.R)(I) : v("RESIZE_SOUTH_EAST", I);
          this.setDOMPositions(S),
            !f && (null != l && l(), this.setState({ operationStarted: !0 })),
            null != c && c(i, "MOVE", this.anchor, this.size);
        }
        handleResizeMove(e, t) {
          let {
              props: {
                id: n,
                minSize: i,
                container: { maxX: s, maxY: a, minX: r, minY: o },
                onDragStart: l,
                onDrag: c,
              },
              state: { operation: d, operationStarted: u },
            } = this,
            {
              startX: h,
              startY: p,
              offsetWidth: f,
              offsetHeight: _,
            } = this.dragState,
            E = 0,
            g = 0;
          if (null != d) {
            switch (
              ((e = Math.max(Math.min(s, e), r)),
              (t = Math.max(Math.min(a, t), o)),
              d)
            ) {
              case "RESIZE_EAST":
              case "RESIZE_SOUTH_EAST":
              case "RESIZE_NORTH_EAST":
                E -= h - e;
                break;
              case "RESIZE_WEST":
              case "RESIZE_SOUTH_WEST":
              case "RESIZE_NORTH_WEST":
                E += h - e;
            }
            switch (d) {
              case "RESIZE_SOUTH":
              case "RESIZE_SOUTH_WEST":
              case "RESIZE_SOUTH_EAST":
                g -= p - t;
                break;
              case "RESIZE_NORTH":
              case "RESIZE_NORTH_WEST":
              case "RESIZE_NORTH_EAST":
                g += p - t;
            }
            (f = Math.max(f + E, i.width)),
              (_ = Math.max(_ + g, i.height)),
              this.setDOMSize({ width: f, height: _ }),
              !u && (null != l && l(), this.setState({ operationStarted: !0 })),
              null != c && c(n, d, this.anchor, this.size);
          }
        }
        setDOMPositions(e) {
          let { top: t, left: n, bottom: i, right: s } = e,
            { current: a } = this.ref;
          if (
            ((this.anchor = { top: t, left: n, bottom: i, right: s }),
            null != a)
          )
            (a.style.top = I(t)),
              (a.style.bottom = I(i)),
              (a.style.left = I(n)),
              (a.style.right = I(s));
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
            (i.style.width = I(t)), (i.style.height = I(n));
        }
        renderResizeHandles() {
          let { resizeY: e, resizeX: t, active: n } = this.props;
          return (0, r.jsxs)(o.Fragment, {
            children: [
              e
                ? (0, r.jsxs)(o.Fragment, {
                    children: [
                      (0, r.jsx)("div", {
                        className: c()(p.resizeNorth, {
                          [p.resizeNSCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH"),
                      }),
                      (0, r.jsx)("div", {
                        className: c()(p.resizeSouth, {
                          [p.resizeNSCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_SOUTH"),
                      }),
                    ],
                  })
                : null,
              t
                ? (0, r.jsxs)(o.Fragment, {
                    children: [
                      (0, r.jsx)("div", {
                        className: c()(p.resizeEast, { [p.resizeEWCursor]: n }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_EAST"),
                      }),
                      (0, r.jsx)("div", {
                        className: c()(p.resizeWest, { [p.resizeEWCursor]: n }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_WEST"),
                      }),
                    ],
                  })
                : null,
              t && e
                ? (0, r.jsxs)(o.Fragment, {
                    children: [
                      (0, r.jsx)("div", {
                        className: c()(p.resizeNorthWest, {
                          [p.resizeNWSECursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST"),
                      }),
                      (0, r.jsx)("div", {
                        className: c()(p.resizeNorthEast, {
                          [p.resizeNESWCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST"),
                      }),
                      (0, r.jsx)("div", {
                        className: c()(p.resizeSouthWest, {
                          [p.resizeNESWCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST"),
                      }),
                      (0, r.jsx)("div", {
                        className: c()(p.resizeSouthEast, {
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
            size: a,
            anchor: o,
            state: { operation: l, operationStarted: d },
          } = this;
          return (0, r.jsxs)("div", {
            ref: this.ref,
            style: {
              ...o,
              ...a,
              ...s,
              ...(null != l ? { zIndex: 1e3 } : void 0),
              ...(t ? { visibility: "hidden" } : void 0),
            },
            className: c()({ [p.wrapper]: !0, [p.operation]: d }),
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
                  state: { operation: a, operationStarted: r },
                } = this;
              if (!(null == a || (!r && 3 > _(i, s, t, n))))
                "MOVE" === a
                  ? this.handleDragMove(t, n)
                  : E.has(a) && this.handleResizeMove(t, n);
            }),
            f(this, "handleOperationStart", (e, t, n) => {
              let {
                ref: { current: i },
                props: {
                  active: s,
                  container: { maxX: a, maxY: r },
                },
              } = this;
              if (null == i || !s) return;
              let { width: o, height: l } = Z(i, this.size),
                c = (0, u.PY)(this.anchor, a, r, o, l);
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
                let i = v(e, c);
                this.setDOMPositions(i),
                  (this.dragState = {
                    ...this.dragState,
                    startX: t,
                    startY: n,
                    offsetWidth: o,
                    offsetHeight: l,
                  });
              }
              this.setState({ operation: e, operationStarted: !1 }, () => {
                window.addEventListener("mousemove", this.handleMouseMove),
                  window.addEventListener("mouseup", this.handleOperationEnd);
              });
            }),
            f(this, "handleOperationEnd", () => {
              let { operation: e, operationStarted: t } = this.state,
                { onDragEnd: n } = this.props;
              window.removeEventListener("mousemove", this.handleMouseMove),
                window.removeEventListener("mouseup", this.handleOperationEnd);
              let i = t
                ? () => {
                    let { onUpdate: t, id: n } = this.props;
                    t(
                      e,
                      n,
                      this.anchor,
                      this.size,
                      Z(this.ref.current, this.size),
                    );
                  }
                : void 0;
              if (t) {
                let { maxX: e, maxY: t } = this.props.container,
                  { width: i, height: s } = Z(this.ref.current, this.size),
                  a = (0, u.PY)(this.anchor, e, t, i, s),
                  r = (0, u.R)(a);
                this.setDOMPositions(r),
                  this.setDOMSize({ width: i, height: s }),
                  null != n && n();
              }
              this.setState({ operation: null, operationStarted: !1 }, i);
            }),
            (this.anchor = m(e.anchor)),
            (this.size = g(e.size, e.minSize.width, e.minSize.height));
        }
      }
      f(S, "Operations", i),
        f(S, "defaultProps", {
          snapOrientation: !0,
          minSize: { width: 0, height: 0 },
          container: { minX: 0, minY: 0, maxX: 1 / 0, maxY: 1 / 0 },
          resizeX: !0,
          resizeY: !0,
          hidden: !1,
          dragAnywhere: !0,
          active: !0,
        }),
        (t.Z = S);
    },
    567409: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ns: function () {
          return _;
        },
      }),
        n(47120);
      var i = n(470079),
        s = n(392711),
        a = n.n(s),
        r = n(876215),
        o = n(442837),
        l = n(146282),
        c = n(26033),
        d = n(897674),
        u = n(709054),
        h = n(206583);
      let p = new Set([r.s.PLAYED_GAME]),
        f = (e) => p.has(e.content_type);
      function _(e) {
        let { entries: t } = (function () {
          let e = (0, d.Z)(h.YN.GAME_PROFILE_FEED),
            t = (0, d.Z)(h.YN.GLOBAL_FEED),
            n = i.useMemo(
              () =>
                a()(t)
                  .unionBy(e, (e) => e.id)
                  .filter(f)
                  .orderBy((e) => u.default.extractTimestamp(e.id), "desc")
                  .uniqWith(
                    (e, t) =>
                      e.author_id === t.author_id &&
                      e.extra.application_id === t.extra.application_id,
                  )
                  .value(),
              [e, t],
            );
          return {
            requestId: (0, o.e7)([l.Z], () =>
              l.Z.getFeedRequestId(h.YN.GAME_PROFILE_FEED),
            ),
            entries: n,
          };
        })();
        return i.useMemo(
          () =>
            null == t
              ? void 0
              : t.filter((t) => (0, c.dX)(t) && t.extra.application_id === e),
          [t, e],
        );
      }
    },
    552282: function (e, t, n) {
      "use strict";
      function i(e) {
        var t;
        return null != e
          ? { id: e.id, name: null !== (t = e.name) && void 0 !== t ? t : "" }
          : null;
      }
      n.d(t, {
        Z: function () {
          return i;
        },
      });
    },
    294033: function (e, t, n) {
      "use strict";
      var i = n(735250),
        s = n(470079),
        a = n(120356),
        r = n.n(a),
        o = n(846337);
      let l = (e) => {
        let { keybind: t, separator: n, className: a } = e;
        return (0, i.jsx)(i.Fragment, {
          children: t.map((e, l) =>
            (0, i.jsxs)(
              s.Fragment,
              {
                children: [
                  (0, i.jsx)("span", { className: r()(o.key, a), children: e }),
                  l === t.length - 1 ? void 0 : n,
                ],
              },
              l,
            ),
          ),
        });
      };
      (l.defaultProps = { separator: "+" }), (t.Z = l);
    },
    593481: function (e, t, n) {
      "use strict";
      n.d(t, {
        IC: function () {
          return s;
        },
        QR: function () {
          return I;
        },
        Yj: function () {
          return Z;
        },
        iz: function () {
          return m;
        },
      });
      var i,
        s,
        a,
        r = n(735250),
        o = n(470079),
        l = n(120356),
        c = n.n(l),
        d = n(481060),
        u = n(294033),
        h = n(689938),
        p = n(157004),
        f = n(113207);
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
      let E = (e) => e.stopPropagation(),
        g = () =>
          (0, r.jsx)("div", {
            className: p.clickBlocker,
            onClick: E,
            onMouseEnter: E,
            onMouseOver: E,
          }),
        m = () => (0, r.jsx)("div", { className: p.divider }),
        I = (e, t, n) =>
          (0, r.jsx)("div", {
            className: p.keybindMessage,
            children: n.format({
              keybind: t,
              keybindHook: (e, n) =>
                (0, r.jsx)(u.Z, { keybind: t, className: p.keybind }, n),
            }),
          }),
        Z = (e, t) =>
          (0, r.jsx)("div", { className: p.hintSubtleText, children: t });
      ((i = s || (s = {})).PRIMARY = "PRIMARY"),
        (i.BRAND = "BRAND"),
        (i.DANGER = "DANGER");
      class v extends (a = o.PureComponent) {
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
          return (0, r.jsx)(d.Button, {
            look: d.Button.Looks.BLANK,
            size: d.Button.Sizes.NONE,
            onClick: this.handleDismiss,
            className: p.dismissButton,
            "aria-label": h.Z.Messages.NOTIFICATION_DISMISS,
            children: (0, r.jsx)(d.XSmallIcon, {
              size: "xs",
              color: "currentColor",
              className: p.dismissIcon,
            }),
          });
        }
        renderHint() {
          let {
            props: { hint: e, colorScheme: t },
            state: { expanded: n },
          } = this;
          if (null == e) return null;
          if ("function" == typeof e) {
            let i = e(n, t);
            return null != i
              ? (0, r.jsxs)(
                  o.Fragment,
                  { children: [(0, r.jsx)(m, {}), i] },
                  "hint-custom",
                )
              : null;
          }
          return (0, r.jsxs)(
            o.Fragment,
            {
              children: [
                (0, r.jsx)(m, {}),
                (0, r.jsx)(
                  "div",
                  {
                    className: "string" == typeof e ? p.hintText : void 0,
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
              renderFooter: e,
              cancelText: t,
              confirmText: n,
              onConfirmClick: i,
              onCancelClick: s,
              hint: a,
              colorScheme: l,
            },
            state: { expanded: c },
          } = this;
          if (!c) return null != a ? this.renderHint() : null;
          if (null != e) {
            let t = e(c, l);
            return null != t
              ? (0, r.jsxs)(
                  o.Fragment,
                  { children: [(0, r.jsx)(m, {}), t] },
                  "footer-custom-content",
                )
              : null;
          }
          if (null != i || null != s) {
            let e = d.Button.Colors.GREEN,
              a = d.Button.Colors.PRIMARY,
              c = d.Button.Looks.FILLED;
            switch (l) {
              case "DANGER":
              case "BRAND":
                (e = a = d.Button.Colors.WHITE), (c = d.Button.Looks.OUTLINED);
            }
            return (0, r.jsxs)(
              o.Fragment,
              {
                children: [
                  (0, r.jsx)(m, {}),
                  (0, r.jsxs)("div", {
                    className: p.buttonContainer,
                    children: [
                      null != i
                        ? (0, r.jsx)(d.Button, {
                            fullWidth: !0,
                            size: d.Button.Sizes.SMALL,
                            color: e,
                            onClick: this.handleConfirmClick,
                            className: p.button,
                            innerClassName: p.innerText,
                            children: null != n ? n : h.Z.Messages.OKAY,
                          })
                        : null,
                      null != s
                        ? (0, r.jsx)(d.Button, {
                            fullWidth: !0,
                            size: d.Button.Sizes.SMALL,
                            look: c,
                            color: a,
                            onClick: this.handleCancelClick,
                            className: p.button,
                            children: null != t ? t : h.Z.Messages.CANCEL,
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
              ? (0, r.jsx)(d.Avatar, {
                  src: e,
                  size: d.AvatarSizes.SIZE_40,
                  className: p.avatar,
                  "aria-hidden": !0,
                })
              : (0, r.jsx)("div", { className: p.avatar, children: e });
        }
        renderContent() {
          let { body: e, title: t, maxBodyLines: n } = this.props;
          return (0, r.jsxs)("div", {
            className: p.content,
            children: [
              this.renderIcon(),
              (0, r.jsxs)("div", {
                className: p.details,
                children: [
                  (0, r.jsx)("div", { className: p.title, children: t }),
                  null != e
                    ? (0, r.jsx)("div", {
                        className: c()(p.body, f.marginTop4),
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
              props: { onNotificationClick: e, colorScheme: t, disabled: n },
              state: { expanded: i },
            } = this,
            s = null != e ? d.Clickable : "div";
          return (0, r.jsxs)(s, {
            onMouseOver: i ? null : this.handleMouseEnter,
            onFocus: i ? null : this.handleMouseEnter,
            onClick: e,
            className: c()(p.container, {
              [p.themePrimary]: "PRIMARY" === t,
              [p.themeBrand]: "BRAND" === t,
              [p.themeDanger]: "DANGER" === t,
              [p.clickable]: null != e && !n,
            }),
            children: [
              this.renderCloseButton(),
              this.renderContent(),
              this.renderFooter(),
              n ? (0, r.jsx)(g, {}) : null,
            ],
          });
        }
        constructor(e) {
          super(e),
            _(this, "handleDismiss", (e) => {
              e.stopPropagation();
              let { onDismissClick: t } = this.props;
              null == t || t(e);
            }),
            _(this, "handleConfirmClick", (e) => {
              e.stopPropagation();
              let { onConfirmClick: t } = this.props;
              null == t || t(e);
            }),
            _(this, "handleCancelClick", (e) => {
              e.stopPropagation();
              let { onCancelClick: t } = this.props;
              null == t || t(e);
            }),
            _(this, "handleMouseEnter", () => {
              !this.props.disabled && this.setState({ expanded: !0 });
            });
          let { expand: t } = e;
          this.state = { expanded: t };
        }
      }
      _(v, "ColorSchemes", s),
        _(v, "defaultProps", {
          maxBodyLines: void 0,
          colorScheme: "PRIMARY",
          expand: !1,
          disabled: !1,
        }),
        (t.ZP = v);
    },
    212632: function (e, t, n) {
      "use strict";
      n(47120);
      var i = n(735250),
        s = n(470079),
        a = n(120356),
        r = n.n(a),
        o = n(481060),
        l = n(981631),
        c = n(689938),
        d = n(167740),
        u = n(113207);
      let h = 0,
        p = () => "notification-position-selector-".concat(h++),
        f = (e) => {
          switch (e) {
            case l._vf.TOP_LEFT:
              return c.Z.Messages.OVERLAY_NOTIFICATIONS_TOP_LEFT;
            case l._vf.TOP_RIGHT:
              return c.Z.Messages.OVERLAY_NOTIFICATIONS_TOP_RIGHT;
            case l._vf.BOTTOM_LEFT:
              return c.Z.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_LEFT;
            case l._vf.BOTTOM_RIGHT:
              return c.Z.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_RIGHT;
            default:
              return c.Z.Messages.OVERLAY_NOTIFICATIONS_DISABLED;
          }
        },
        _ = [
          l._vf.DISABLED,
          l._vf.TOP_LEFT,
          l._vf.TOP_RIGHT,
          l._vf.BOTTOM_LEFT,
          l._vf.BOTTOM_RIGHT,
        ];
      function E(e) {
        let { position: t, onChange: n } = e,
          [a] = s.useState(() => p()),
          h =
            t === l._vf.DISABLED
              ? c.Z.Messages.OVERLAY_NOTIFICATION_SETTINGS_DISABLED
              : c.Z.Messages.OVERLAY_NOTIFICATION_SETTINGS_POSITION.format({
                  position: f(t),
                });
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(o.FocusRing, {
              within: !0,
              offset: -2,
              children: (0, i.jsx)("div", {
                className: r()(d.wrapper, {
                  [d.disabledSelected]: t === l._vf.DISABLED,
                }),
                children: _.map((e) =>
                  (0, i.jsxs)(
                    "label",
                    {
                      className: r()({
                        [d.selected]: e === t,
                        [d.disabled]: e === l._vf.DISABLED,
                        [d.topRight]: e === l._vf.TOP_RIGHT,
                        [d.topLeft]: e === l._vf.TOP_LEFT,
                        [d.bottomRight]: e === l._vf.BOTTOM_RIGHT,
                        [d.bottomLeft]: e === l._vf.BOTTOM_LEFT,
                      }),
                      children: [
                        f(e),
                        e === l._vf.DISABLED
                          ? (0, i.jsx)(o.DenyIcon, {
                              size: "md",
                              color: "currentColor",
                              className: d.disabledIcon,
                            })
                          : null,
                        (0, i.jsx)("input", {
                          type: "radio",
                          name: a,
                          value: e,
                          onChange: (t) => n(t, e),
                          className: d.hiddenInput,
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
      (E.Positions = l._vf), (t.Z = E);
    },
    635324: function (e, t, n) {
      "use strict";
      n(47120);
      var i = n(735250),
        s = n(149765),
        a = n(481060),
        r = n(570140),
        o = n(700785);
      __OVERLAY__ &&
        r.Z.subscribe("OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN", function (e) {
          let {
              clientId: t,
              authorizeProps: { authorizations: l, permissions: c, ...d },
            } = e,
            u = "OAuth2Authorize_"
              .concat(t, "_")
              .concat(d.guildId, "_")
              .concat(d.channelId);
          function h(e) {
            let { location: n } = e;
            r.Z.dispatch({
              type: "OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE",
              clientId: t,
              location: n,
            });
          }
          let p = o.Hn;
          try {
            p = s.vB(null != c ? c : 0);
          } catch (e) {}
          (0, a.openModalLazy)(
            async () => {
              let { OAuth2AuthorizeModal: e } = await Promise.resolve().then(
                n.bind(n, 69580),
              );
              return (t) =>
                (0, i.jsx)(e, {
                  ...t,
                  ...d,
                  authorizations: new Map(l),
                  permissions: p,
                  callback: h,
                });
            },
            {
              modalKey: u,
              onCloseRequest: () => {
                (0, a.closeModal)(u), h({});
              },
            },
          );
        });
    },
    86071: function (e, t, n) {
      "use strict";
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2024-10_hotwheels_overlay_invites",
        label: "Overlay Invites Notification",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      t.Z = i;
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
    290161: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(735250),
        s = n(470079),
        a = n(442837),
        r = n(481060),
        o = n(490173),
        l = n(735246),
        c = n(40851),
        d = n(503737),
        u = n(823453),
        h = n(436774),
        p = n(686546),
        f = n(314910),
        _ = n(367207),
        E = n(241890),
        g = n(649561),
        m = n(631553),
        I = n(981631);
      n(635324), n(167666), n(308765), n(913487), a.ZP.initialize();
      t.default = function () {
        return (
          s.useEffect(
            () => (
              _.Z.initialize(),
              d.Z.initialize(),
              E.Z.init(),
              () => {
                _.Z.terminate(), d.Z.terminate();
              }
            ),
            [],
          ),
          (0, i.jsxs)(s.Fragment, {
            children: [
              (0, i.jsx)(u.Z, {}),
              (0, i.jsx)(l.T, {
                children: (0, i.jsxs)(g.Z, {
                  children: [
                    (0, i.jsx)(p.Co, {}),
                    (0, i.jsx)(h.ZP, {}),
                    (0, i.jsx)(c.Wu, {
                      appContext: I.IlC.OVERLAY,
                      renderWindow: window,
                      children: (0, i.jsxs)(f.yP, {
                        children: [
                          (0, i.jsx)(m.Z, {}),
                          (0, i.jsx)(r.Modals, {}),
                          (0, i.jsx)(o.Z, {}),
                          (0, i.jsx)(f.Un, {}),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
    681603: function (e, t, n) {
      "use strict";
      var i = n(470079),
        s = n(149765),
        a = n(442837),
        r = n(367907),
        o = n(731429),
        l = n(188471),
        c = n(318885),
        d = n(592125),
        u = n(984933),
        h = n(271383),
        p = n(430824),
        f = n(496675),
        _ = n(944486),
        E = n(914010),
        g = n(594174),
        m = n(237997),
        I = n(145597),
        Z = n(981631);
      class v extends i.Component {
        componentDidUpdate(e) {
          if (this.props.locked) return null;
          let {
            selectedGuild: t,
            selectedChannel: n,
            isMemberPending: i,
            hasPreviewEnabled: s,
            postableChannelCount: a,
          } = this.props;
          if (
            (null != t &&
              (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
              ((0, c.Q)(Z.rMx.GUILD_VIEWED, {
                ...(i ? { is_pending: i, preview_enabled: s } : {}),
                postable_channels: a,
              }),
              (0, l.a)(Z.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != n && n !== e.selectedChannel)
          ) {
            let e = (0, o.K)(d.Z.getChannel(n), !0);
            (0, c.Q)(Z.rMx.CHANNEL_OPENED, { ...e, ...(0, r.$H)(n) }),
              (0, l.a)(Z.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
          }
        }
        render() {
          return null;
        }
      }
      t.Z = a.ZP.connectStores(
        [E.Z, _.Z, p.Z, g.default, m.Z, u.ZP, f.Z, h.ZP],
        () => {
          var e, t, n;
          let i = E.Z.getGuildId(),
            a = _.Z.getChannelId(i),
            r = p.Z.getGuild(i),
            o = g.default.getCurrentUser(),
            l =
              null !==
                (t = u.ZP.getChannels(null == r ? void 0 : r.id)[u.sH]) &&
              void 0 !== t
                ? t
                : [],
            c =
              l.length > 0
                ? l.filter((e) => {
                    let { channel: t } = e;
                    return f.Z.can(
                      s.$e(Z.Plq.SEND_MESSAGES, Z.Plq.VIEW_CHANNEL),
                      t,
                    );
                  }).length
                : 0,
            d =
              null != o &&
              null != i &&
              null !==
                (n =
                  null === (e = h.ZP.getMember(i, o.id)) || void 0 === e
                    ? void 0
                    : e.isPending) &&
              void 0 !== n &&
              n;
          return {
            selectedGuild: i,
            selectedChannel: a,
            locked: m.Z.isUILocked((0, I.QF)()),
            hasPreviewEnabled:
              null == r ? void 0 : r.features.has(Z.oNc.PREVIEW_ENABLED),
            isMemberPending: d,
            postableChannelCount: c,
          };
        },
      )(v);
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
        s = n(470079),
        a = n(392711),
        r = n.n(a),
        o = n(699581),
        l = n(374470),
        c = n(902704),
        d = n(846519),
        u = n(13245),
        h = n(671999),
        p = n(358085),
        f = n(998502),
        _ = n(145597);
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
      let g = { x: 0, y: 0 },
        m = !1;
      function I(e) {
        let { clientX: t, clientY: n } = e;
        (m = !0), (g.x = t), (g.y = n);
      }
      let Z = new Map();
      function v(e, t) {
        if (null == t)
          Z.delete(e),
            0 === Z.size &&
              (window.removeEventListener("mousemove", I), (m = !1));
        else {
          let n = Z.get(e);
          if (null != n && (0, c.Z)(n.zone, t.zone)) return;
          0 === Z.size && window.addEventListener("mousemove", I), Z.set(e, t);
        }
        p.isPlatformEmbedded &&
          ((0, _.W2)()
            ? u.Z.setClickZones(
                Array.from(Z.values()).map((e) => {
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
            : (f.ZP.requireModule("discord_overlay2").broadcastCommand({
                message: "set_click_zones",
                zones: Array.from(Z.values()).map((e) => {
                  let { zone: t } = e;
                  return t;
                }),
              }),
              (function () {
                if (!S)
                  f.ZP.requireModule("discord_overlay2").setClickZoneCallback(
                    (e, t, n) => {
                      let i = Z.get(e);
                      null != i &&
                        (!m && ((g.x = t), (g.y = n)), i.instance.click());
                    },
                  ),
                    (S = !0);
              })()));
      }
      let S = !1;
      class C extends (i = s.PureComponent) {
        componentDidMount() {
          this.props.observe ? this.observeZone() : this.updateZone();
        }
        componentWillUnmount() {
          this.interval.stop(), v(this.zone, null);
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
          let e = (0, h.B)("click", g.x, g.y);
          (0, h.J)(e, g.x, g.y);
        }
        constructor(...e) {
          super(...e),
            E(this, "zone", r().uniqueId("ClickArea")),
            E(this, "interval", new d.Xp()),
            E(this, "updateZone", () => {
              let e = (0, o.findDOMNode)(this);
              if ((0, l.k)(e)) {
                let {
                  left: t,
                  top: n,
                  right: i,
                  bottom: s,
                } = e.getBoundingClientRect();
                v(this.zone, {
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
      E(C, "defaultProps", { observe: !0, observeInterval: 1e3 });
    },
    244073: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return L;
        },
      }),
        n(47120);
      var i = n(735250),
        s = n(470079),
        a = n(120356),
        r = n.n(a),
        o = n(613828),
        l = n(442837),
        c = n(481060),
        d = n(846027),
        u = n(925549),
        h = n(287734),
        p = n(933557),
        f = n(600164),
        _ = n(870569),
        E = n(345243),
        g = n(873596),
        m = n(917405),
        I = n(430824),
        Z = n(131951),
        v = n(699516),
        S = n(594174),
        C = n(979651),
        x = n(362446),
        N = n(518084),
        T = n(981631),
        O = n(689938),
        A = n(945768),
        y = n(663031);
      function R(e, t, n) {
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
            n = (0, p.F6)(e, S.default, v.Z),
            s = null != t ? "".concat(n, " / ").concat(t.name) : n,
            a = null != t ? t.id : T.ME;
          return (0, i.jsx)(o.rU, {
            to: T.Z5c.CHANNEL(a),
            onClick: (t) => {
              t.stopPropagation(), u.Z.channelListScrollTo(a, e.id);
            },
            children: (0, i.jsx)(E.Z, { className: y.channel, children: s }),
          });
        }
        render() {
          let {
            className: e,
            contentClassName: t,
            pinned: n,
            lobbyId: s,
            channel: a,
            quality: o,
            lastPing: l,
            hasVideo: d,
            connectionState: u,
            deaf: h,
            mute: p,
          } = this.props;
          return null == a
            ? null
            : (0, i.jsx)(N.ZP.Bar, {
                className: r()(e, A.controls, { [A.unpinned]: !n }),
                children: (0, i.jsxs)(N.ZP.Content, {
                  className: r()(t, A.content),
                  dynamicSize: !0,
                  children: [
                    (0, i.jsx)("div", {
                      className: y.inner,
                      children: (0, i.jsx)(c.Popout, {
                        renderPopout: () => this.renderPopout(a.id),
                        position: "top",
                        children: (e) =>
                          (0, i.jsx)(c.Clickable, {
                            ...e,
                            children: (0, i.jsx)(m.Z, {
                              channelId: a.id,
                              quality: o,
                              lastPing: l,
                              hasVideo: d,
                              state: u,
                              children: this.renderChannelLink(a),
                            }),
                          }),
                      }),
                    }),
                    (0, i.jsxs)(f.Z, {
                      grow: 0,
                      children: [
                        (0, i.jsx)(_.Z, {
                          tooltipText: p
                            ? O.Z.Messages.UNMUTE
                            : O.Z.Messages.MUTE,
                          icon: p ? c.MicrophoneSlashIcon : c.MicrophoneIcon,
                          iconForeground: p ? A.strikethrough : null,
                          onClick: this.handleToggleSelfMute,
                        }),
                        (0, i.jsx)(_.Z, {
                          tooltipText: h
                            ? O.Z.Messages.UNDEAFEN
                            : O.Z.Messages.DEAFEN,
                          icon: h ? c.HeadphonesSlashIcon : c.HeadphonesIcon,
                          onClick: this.handleToggleSelfDeaf,
                          iconForeground: h ? A.strikethrough : null,
                        }),
                        null == s &&
                          (0, i.jsx)(_.Z, {
                            tooltipText: O.Z.Messages.DISCONNECT_SELF,
                            onClick: this.handleDisconnect,
                            icon: c.PhoneHangUpIcon,
                          }),
                      ],
                    }),
                  ],
                }),
              });
        }
        constructor(...e) {
          super(...e),
            R(this, "handleToggleSelfMute", () => {
              let { context: e } = this.props;
              d.Z.toggleSelfMute({ context: e, location: "Overlay Controls" });
            }),
            R(this, "handleToggleSelfDeaf", () => {
              let { context: e } = this.props;
              d.Z.toggleSelfDeaf({ context: e, location: "Overlay Controls" });
            }),
            R(this, "renderPopout", (e) => {
              let { lobbyId: t } = this.props;
              return (0, i.jsx)(g.Z, {
                channelId: e,
                lobbyId: t,
                isOverlay: !0,
              });
            });
        }
      }
      function L(e) {
        let { context: t, lobbyId: n, channel: s, ...a } = e,
          r = (0, l.e7)([I.Z], () =>
            I.Z.getGuild(null == s ? void 0 : s.getGuildId()),
          ),
          o = (0, l.e7)([C.Z], () => null != s && C.Z.hasVideo(s.id)),
          [c, d] = (0, l.Wu)([Z.Z], () => [
            Z.Z.isSelfMute(t) || Z.Z.isSelfMutedTemporarily(t),
            Z.Z.isSelfDeaf(t),
          ]),
          [u, h, p] = (0, l.Wu)([x.Z], () => [
            x.Z.getConnectionState(n),
            x.Z.getLastPing(n),
            x.Z.getQuality(n),
          ]);
        return (0, i.jsx)(M, {
          ...a,
          context: t,
          lobbyId: n,
          channel: s,
          guild: r,
          hasVideo: o,
          mute: c,
          deaf: d,
          connectionState: u,
          lastPing: h,
          quality: p,
        });
      }
    },
    649561: function (e, t, n) {
      "use strict";
      n(47120), n(177593);
      var i = n(735250),
        s = n(470079),
        a = n(120356),
        r = n.n(a),
        o = n(392711),
        l = n.n(o),
        c = n(818405),
        d = n(587158),
        u = n(286379),
        h = n(481060),
        p = n(13245),
        f = n(490029),
        _ = n(797614),
        E = n(593481),
        g = n(703656),
        m = n(254761),
        I = n(70956),
        Z = n(960048),
        v = n(145597),
        S = n(692546),
        C = n(518084),
        x = n(987650),
        N = n(981631),
        T = n(689938),
        O = n(372049);
      function A(e, t, n) {
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
      let y = 10 * I.Z.Millis.SECOND;
      function R() {
        let e = (0, v.QF)(),
          t = (0, v.Ht)();
        (0, f.lW)({
          type: N.BmY.DISPATCH,
          pid: e,
          token: t,
          payloads: [{ type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: e }],
        });
      }
      class M extends s.PureComponent {
        componentDidMount() {
          (this.notificationTimer = setTimeout(this.hideNotification, y)),
            p.Z.track(N.rMx.NOTIFICATION_VIEWED, {
              notif_type: x.n0.OverlayCrashed,
            });
        }
        componentWillUnmount() {
          let { notificationTimer: e } = this;
          null != e && clearTimeout(e);
        }
        render() {
          let { info: e, error: t } = this.props,
            { showTrace: n } = this.state,
            { notificationTimer: s } = this;
          return null == s
            ? null
            : (0, i.jsx)(S.Z, {
                observe: !1,
                children: (0, i.jsx)(h.ThemeProvider, {
                  theme: N.BRd.DARK,
                  children: (s) =>
                    (0, i.jsxs)(h.Clickable, {
                      className: r()(s, O.container),
                      onClick: (e) => e.stopPropagation(),
                      children: [
                        (0, i.jsx)(E.ZP, {
                          expand: !0,
                          colorScheme: E.IC.DANGER,
                          icon: (0, i.jsx)(m.Z, {
                            width: 40,
                            height: 40,
                            className: O.notificationIcon,
                          }),
                          title: T.Z.Messages.OVERLAY_CRASHED_TITLE,
                          confirmText: T.Z.Messages.OVERLAY_RELOAD,
                          onNotificationClick: this.handleNotificationClick,
                          onConfirmClick: this.handleReload,
                          onDismissClick: this.hideNotification,
                        }),
                        n && null != e
                          ? (0, i.jsxs)(C.ZP, {
                              className: O.stackTrace,
                              children: [
                                (0, i.jsx)(C.ZP.Bar, {
                                  children: "Error Details",
                                }),
                                (0, i.jsx)(C.ZP.Content, {
                                  className: O.stackTraceCode,
                                  children: (0, i.jsx)("code", {
                                    className: O.code,
                                    children: (0, i.jsx)("pre", {
                                      children: t.stack,
                                    }),
                                  }),
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                }),
              });
        }
        constructor(...e) {
          super(...e),
            A(this, "state", { showTrace: !1, busy: !1 }),
            A(this, "notificationTimer", void 0),
            A(this, "hideNotification", () => {
              R();
              let { notificationTimer: e } = this;
              null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            A(this, "handleReload", (e) => {
              this.setState({ busy: !0 }),
                R(),
                p.Z.track(
                  N.rMx.NOTIFICATION_CLICKED,
                  { notif_type: x.n0.OverlayCrashed, action_type: "reload" },
                  !0,
                ),
                e.stopPropagation(),
                setTimeout(() => location.reload(!0), 200);
            }),
            A(this, "handleNotificationClick", (e) => {
              e.stopPropagation();
              let { notificationTimer: t } = this;
              null != t && clearTimeout(t),
                e.shiftKey && this.setState({ showTrace: !0 });
            });
        }
      }
      let L = l().throttle(
        () => {
          _.Z.increment(
            {
              name: u.V.APP_CRASHED,
              tags: [
                "reason:".concat(c.v.UNHANDLED_JS_ERROR),
                "level:".concat(d.c.FATAL),
              ],
            },
            !0,
          );
        },
        100,
        { trailing: !1 },
      );
      class b extends s.PureComponent {
        componentDidCatch(e, t) {
          let n = (0, g.s1)().location;
          this.setState({ error: e, info: t });
          let i = (0, v.QF)(),
            s = (0, v.Ht)();
          (0, f.lW)({
            type: N.BmY.DISPATCH,
            pid: (0, v.QF)(),
            token: s,
            payloads: [
              { type: "OVERLAY_CRASHED", pid: i },
              { type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: i },
            ],
          }),
            setImmediate(() => window.addEventListener("click", R));
          let a = Z.Z.captureCrash(e, { extra: t });
          p.Z.track(N.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: a,
            error_level: "fatal",
          }),
            L();
        }
        render() {
          let { children: e, className: t } = this.props,
            { error: n, info: s } = this.state;
          return null != n
            ? (0, i.jsx)(M, { error: n, info: s })
            : (0, i.jsx)("div", { className: t, children: e });
        }
        constructor(...e) {
          super(...e), A(this, "state", { error: null, info: null });
        }
      }
      t.Z = b;
    },
    382790: function (e, t, n) {
      "use strict";
      n(47120);
      var i,
        s = n(735250),
        a = n(470079),
        r = n(120356),
        o = n.n(r),
        l = n(442837),
        c = n(552062),
        d = n(416568),
        u = n(914010),
        h = n(518084),
        p = n(178528),
        f = n(669083),
        _ = n(483962),
        E = n(711553),
        g = n(689938),
        m = n(925790);
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
      function Z(e) {
        let { closePopout: t } = e;
        return (0, s.jsx)(f.Z, { onClose: t });
      }
      class v extends (i = a.PureComponent) {
        render() {
          let { selectedGuildId: e, locked: t, contained: n } = this.props,
            i =
              null != e
                ? (0, s.jsx)(
                    p.Z,
                    { guildId: e, onDragStart: this.onDragStart },
                    e,
                  )
                : (0, s.jsx)(E.Z, {
                    title: g.Z.Messages.DIRECT_MESSAGES,
                    renderSettings: Z,
                    onDragStart: this.onDragStart,
                    children: (0, s.jsx)(_.Z, {}),
                  }),
            a = n ? "div" : h.ZP;
          return (0, s.jsxs)(a, {
            className: o()(m.base, { [m.widget]: !n }),
            children: [
              (0, s.jsx)(d.Z, {
                isOverlay: !0,
                disableAppDownload: !0,
                isVisible: !t,
              }),
              i,
            ],
          });
        }
        constructor(...e) {
          super(...e),
            I(this, "onDragStart", (e) => {
              let { dragStart: t } = this.props;
              t(c.B.MOVE, e.clientX, e.clientY);
            });
        }
      }
      I(v, "defaultProps", { contained: !1 }),
        (t.Z = l.ZP.connectStores([u.Z], () => ({
          selectedGuildId: u.Z.getGuildId(),
        }))(v));
    },
    990673: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(735250);
      n(470079);
      var s = n(382790),
        a = n(430036),
        r = n(518084),
        o = n(240038);
      function l(e) {
        let { dragStart: t, dragging: n, pinned: l, locked: c } = e;
        return (0, i.jsxs)(r.ZP, {
          className: o.wrapper,
          children: [
            (0, i.jsx)(s.Z, { contained: !0, dragStart: t, locked: c }),
            (0, i.jsx)(a.Z, {
              dragStart: t,
              locked: c,
              pinned: l,
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
      var i = n(735250);
      n(470079);
      var s = n(120356),
        a = n.n(s),
        r = n(442837),
        o = n(481060),
        l = n(556296),
        c = n(13140),
        d = n(981631),
        u = n(389439);
      let h = {
        [d.kg4.TOGGLE_MUTE]: {
          legacy: { slash: o.MicrophoneSlashIcon, default: o.MicrophoneIcon },
          new: { slash: o.MicrophoneSlashIcon, default: o.MicrophoneIcon },
        },
      };
      function p(e) {
        let { value: t, action: n, shouldShow: s } = e,
          d = (0, r.e7)([l.Z], () => l.Z.getKeybindForAction(n, !1, !0)),
          p = (0, o.useRedesignIconContext)().enabled;
        if (null == d || !s) return null;
        let f = c.BB(d.shortcut),
          _ = p ? h[n].new : h[n].legacy,
          E = t ? _.slash : _.default;
        return (0, i.jsxs)("div", {
          className: u.keybindIndicator,
          children: [
            (0, i.jsx)(E, {
              className: u.keybindIcon,
              size: "xs",
              color: "currentColor",
            }),
            (0, i.jsx)(o.Text, {
              variant: "text-xxs/semibold",
              className: a()(u.keybindIndicatorText),
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
          return _;
        },
        Z: function () {
          return E;
        },
      }),
        n(47120);
      var i = n(735250);
      n(470079);
      var s = n(704215),
        a = n(481060),
        r = n(13245),
        o = n(312839),
        l = n(706140),
        c = n(593481),
        d = n(658785),
        u = n(987650),
        h = n(921944),
        p = n(689938),
        f = n(240209);
      function _() {
        let [e, t] = (0, l.cv)([s.z.OVERLAY_KEYBIND_NOTIFICATION]),
          { showKeybindIndicators: n } = d.Z.useExperiment(
            { location: "Overlay" },
            { autoTrackExposure: !1 },
          );
        return {
          showKeybindIndicators: null != e && n,
          dismissKeybindNotification: t,
        };
      }
      function E(e) {
        let { markAsDismissed: t } = e,
          { trackView: n, trackClick: s } = (0, o.R)(
            u.n0.KeybindIndicatorsNotification,
            { notif_type: u.n0.KeybindIndicatorsNotification },
          );
        return {
          icon: null,
          body: (0, i.jsxs)("div", {
            className: f.notificationBody,
            children: [
              (0, i.jsx)("div", {
                className: f.iconContainer,
                children: (0, i.jsx)(a.MicrophoneIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 28,
                  width: 28,
                }),
              }),
              (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: p.Z.Messages.KEYBIND_NOTIFICATION_DESCRIPTION,
              }),
            ],
          }),
          colorScheme: c.IC.PRIMARY,
          onDismissClick: (e, n) => {
            s("dismiss"), t(h.L.DISMISS), r.Z.updateNotificationStatus(n);
          },
          onNotificationShow: () => {
            t(h.L.AUTO_DISMISS), n();
          },
        };
      }
    },
    438015: function (e, t, n) {
      "use strict";
      n(47120);
      var i = n(735250),
        s = n(470079),
        a = n(13245),
        r = n(593481),
        o = n(692546),
        l = n(981631),
        c = n(668697);
      function d(e, t, n) {
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
            props: { position: s, zIndex: a },
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
          return { left: e, right: t, bottom: n, top: i, zIndex: a };
        }
        render() {
          let {
              props: {
                locked: e,
                index: t,
                notification: {
                  props: {
                    onNotificationShow: n,
                    onDismissClick: s,
                    onNotificationClick: a,
                    onConfirmClick: l,
                    onCancelClick: d,
                    ...u
                  },
                },
              },
            } = this,
            h = (0, i.jsx)("div", {
              className: c.notificationContainer,
              children: (0, i.jsx)(r.ZP, {
                ...u,
                onNotificationShow:
                  0 === t ? this.handleNotificationShow : null,
                onDismissClick: this.handleDismissClick,
                onNotificationClick:
                  null != a ? this.handleNotificationClick : null,
                onConfirmClick: null != l ? this.handleConfirmClick : null,
                onCancelClick: null != d ? this.handleCancelClick : null,
                expand: !e && 0 === t,
              }),
            });
          return 0 === t
            ? (0, i.jsx)(o.Z, { observeInterval: 200, children: h })
            : h;
        }
        constructor(...e) {
          super(...e),
            d(this, "handleNotificationShow", () => {
              let {
                id: e,
                props: { onNotificationShow: t },
              } = this.props.notification;
              t(e);
            }),
            d(this, "handleDismissClick", (e) => {
              let {
                id: t,
                props: { onDismissClick: n },
              } = this.props.notification;
              a.Z.updateNotificationStatus(t), null != n && n(e, t);
            }),
            d(this, "handleNotificationClick", (e) => {
              let {
                id: t,
                props: { onNotificationClick: n },
              } = this.props.notification;
              null != n && n(e, t);
            }),
            d(this, "handleConfirmClick", (e) => {
              let {
                id: t,
                props: { onConfirmClick: n },
              } = this.props.notification;
              null != n && n(e, t);
            }),
            d(this, "handleCancelClick", (e) => {
              let {
                id: t,
                props: { onCancelClick: n },
              } = this.props.notification;
              null != n && n(e, t);
            });
        }
      }
      t.Z = u;
    },
    348733: function (e, t, n) {
      "use strict";
      var i = n(735250),
        s = n(470079),
        a = n(120356),
        r = n.n(a),
        o = n(442837),
        l = n(261435),
        c = n(237997),
        d = n(438015),
        u = n(981631),
        h = n(455178);
      class p extends s.Component {
        render() {
          let {
            keybind: e,
            notifications: t,
            position: n,
            locked: s,
          } = this.props;
          if (n === u._vf.DISABLED) return null;
          let a = -1;
          return (0, i.jsx)("div", {
            className: r()(h.container, h[n]),
            children: t.map((t) =>
              s && t.status === u._1z.TIMED_OUT
                ? null
                : ((a += 1),
                  (0, i.jsx)(
                    d.Z,
                    {
                      index: a,
                      zIndex: 100 - a,
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
      t.Z = o.ZP.connectStores([l.Z, c.Z], () => ({
        notifications: l.Z.getNotifications(),
        position: c.Z.getNotificationPositionMode(),
      }))(p);
    },
    631553: function (e, t, n) {
      "use strict";
      let i;
      n.d(t, {
        Z: function () {
          return eE;
        },
      }),
        n(653041);
      var s = n(735250),
        a = n(470079),
        r = n(120356),
        o = n.n(r),
        l = n(921738),
        c = n.n(l),
        d = n(954955),
        u = n.n(d),
        h = n(498607),
        p = n.n(h),
        f = n(442837),
        _ = n(481060),
        E = n(668781),
        g = n(239091),
        m = n(13245),
        I = n(425493),
        Z = n(951483),
        v = n(714338),
        S = n(185666),
        C = n(100527),
        x = n(906732),
        N = n(146282),
        T = n(600164);
      n(70097);
      var O = n(594190),
        A = n(567409),
        y = n(74299),
        R = n(989941),
        M = n(377400),
        L = n(329557),
        b = n(199902),
        P = n(314897),
        D = n(592125),
        j = n(430824),
        w = n(131951),
        k = n(944486),
        V = n(618541),
        B = n(449224),
        U = n(574254),
        z = n(556296),
        G = n(237997),
        Y = n(451478),
        W = n(70956),
        F = n(358085),
        H = n(998502),
        K = n(13140),
        X = n(145597),
        Q = n(658785),
        J = n(681603),
        q = n(358446),
        $ = n(348733),
        ee = n(312178),
        et = n(708383),
        en = n(923532),
        ei = n(107200),
        es = n(987650),
        ea = n(981631),
        er = n(206583),
        eo = n(689938),
        el = n(310906);
      function ec(e, t, n) {
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
      (f.ZP.PersistedStore.disableWrites = __OVERLAY__), f.ZP.initialize();
      let ed = null;
      function eu(e) {
        e.preventDefault();
      }
      function eh(e) {
        (0, g.jW)(e, async () => {
          let { default: e } = await n.e("92780").then(n.bind(n, 930381));
          return (t) => (0, s.jsx)(e, { ...t });
        });
      }
      F.isPlatformEmbedded;
      let ep = (e) => {
          let { keybind: t, onClick: n, isPreviewingInGame: i, locked: a } = e,
            r = a ? _.Clickable : "div";
          return (0, s.jsx)(r, {
            className: o()(el.overlayBackground, {
              [el.overlayActive]: !a,
              [el.overlayLocked]: a,
              [el.previewMode]: !a && i,
            }),
            onMouseDown: (e) => {
              let { currentTarget: t, target: i, button: s } = e;
              s === ea.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: eh,
            children: a
              ? null
              : (0, s.jsx)("div", {
                  className: el.closeContainer,
                  children: (0, s.jsx)(I.Z, {
                    variant: I.Z.Variants.BOLD,
                    keybind: t,
                    closeAction: n,
                  }),
                }),
          });
        },
        ef = (e) => {
          let {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: s,
            ctrlKey: a,
          } = e;
          return { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: a };
        };
      class e_ extends a.Component {
        handleLock() {
          !(0, _.hasAnyModalOpen)() &&
            !U.Z.isOpen() &&
            m.Z.setLocked(!0, (0, X.QF)());
        }
        handleDeactivate() {
          m.Z.deactivateAllRegions();
        }
        componentDidMount() {
          m.Z.startSession(),
            M.Z.initialize(),
            S.Z.initialize(),
            L.Z.initialize();
        }
        componentDidUpdate(e) {
          let { initialized: t } = this.props;
          if (!!t) {
            if (t && !e.initialized) {
              this.initialSetup();
              return;
            }
            if (!e.locked && this.props.locked) {
              if (
                (window.addEventListener("contextmenu", eu, !1), null != ed)
              ) {
                let e = Date.now() - ed;
                m.Z.track(ea.rMx.OVERLAY_LOCKED, { unlocked_duration: e }),
                  (ed = null);
              }
              v.Z.disable(),
                (this.activeKeyEventShapes = []),
                G.Z.isPinned(ea.Odu.TEXT) &&
                  (v.Z.setLayout(Z.Xq), v.Z.enable());
            } else
              e.locked &&
                !this.props.locked &&
                (window.removeEventListener("contextmenu", eu, !1),
                null == ed &&
                  ((ed = Date.now()), m.Z.track(ea.rMx.OVERLAY_UNLOCKED)),
                v.Z.disable(),
                (this.activeKeyEventShapes = []),
                v.Z.setLayout(Z.Sr),
                v.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
              (this.lockEventShape = (0, K.d2)(this.props.keybindKeyCodes)),
              !e.hasFetchedContentInventory &&
                this.props.hasFetchedContentInventory &&
                m.Z.notifyContentInventoryReady(
                  this.props.contentInventoryEntries,
                );
          }
        }
        initialSetup() {
          let {
            connectedToVoice: e,
            locked: t,
            canGoLive: n,
            isStreaming: i,
            voiceGuild: s,
            voiceChannelId: a,
            game: r,
            showKeybindNotification: o,
            dismissKeybindNotification: l,
          } = this.props;
          m.Z.track(ea.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: G.Z.isPinned(ea.Odu.TEXT),
          }),
            Q.Z.trackExposure({ location: "Overlay" });
          let c = n && !i && null != r,
            d = e && null != s && null != a,
            u = { type: es.nc.WELCOME };
          if (
            (o
              ? (u = { type: es.nc.KEYBIND_INDICATORS, markAsDismissed: l })
              : c && d
                ? (u = {
                    type: es.nc.GO_LIVE_VOICE,
                    game: r,
                    voiceChannelId: a,
                    voiceGuild: s,
                  })
                : c && (u = { type: es.nc.GO_LIVE_NON_VOICE, game: r }),
            m.Z.overlayMounted(u),
            window.addEventListener("resize", this.handleWindowResize),
            t && window.addEventListener("contextmenu", eu, !1),
            F.isPlatformEmbedded)
          ) {
            let e = H.ZP.requireModule("discord_overlay2");
            void 0 !== e.setPerfInfoCallback &&
              (e.setPerfInfoCallback((e) => {
                m.Z.track(ea.rMx.OVERLAY_PERF_INFO, e);
              }),
              e.broadcastCommand({
                message: "set_perf_report_interval",
                interval: 15 * W.Z.Millis.MINUTE,
              })),
              H.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                G.Z.getDisableExternalLinkAlert() || t === V.Z.getLastURL()
                  ? H.ZP.send("OPEN_EXTERNAL_URL", t)
                  : E.Z.show({
                      title: eo.Z.Messages.OVERLAY_LINK_ALERT_TITLE,
                      body: eo.Z.Messages.OVERLAY_LINK_ALERT_BODY,
                      secondaryConfirmText:
                        eo.Z.Messages.OVERLAY_LINK_ALERT_SECONDARY,
                      confirmText: eo.Z.Messages.CONTINUE,
                      cancelText: eo.Z.Messages.CANCEL,
                      onConfirmSecondary: () => {
                        m.Z.disableExternalLinkAlert(),
                          H.ZP.send("OPEN_EXTERNAL_URL", t);
                      },
                      onConfirm: () => H.ZP.send("OPEN_EXTERNAL_URL", t),
                    });
              });
          }
          window.addEventListener("keydown", this.onKeyDownGlobal, !0),
            window.addEventListener("keyup", this.onKeyUpGlobal, !0);
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.handleWindowResize),
            window.removeEventListener("keydown", this.onKeyDownGlobal, !0),
            window.removeEventListener("keyup", this.onKeyUpGlobal, !0),
            this.props.locked &&
              window.removeEventListener("contextmenu", eu, !1),
            M.Z.terminate(),
            S.Z.terminate(),
            L.Z.terminate();
        }
        renderInvalidSizeMessage() {
          return (0, s.jsx)(T.Z, {
            justify: T.Z.Justify.CENTER,
            align: T.Z.Align.CENTER,
            className: el.invalidContainer,
            children: (0, s.jsx)("div", {
              className: el.inactiveContainer,
              children: eo.Z.Messages.OVERLAY_TOO_SMALL.format(X.FW),
            }),
          });
        }
        render() {
          let {
              locked: e,
              keybind: t,
              incompatibleApp: n,
              initialized: a,
              isPreviewingInGame: r,
              activeRegions: l,
              windowSize: c,
              voiceGuild: d,
              voiceChannelId: u,
            } = this.props,
            { width: h, height: p } = c;
          if (0 === h || 0 === p || n || !a) return null;
          let f = e || r,
            _ = P.default.getId();
          return (0, s.jsxs)("div", {
            className: el.overlay,
            children: [
              (0, s.jsx)(et.Z, {}),
              r &&
                (0, s.jsx)("header", {
                  className: el.previewingInGameHeader,
                  children: eo.Z.Messages.OVERLAY_IN_GAME_PREVIEW_HEADER,
                }),
              i,
              (!e || l.has(ea.O0n.TEXT_WIDGET)) &&
                (0, s.jsx)(ep, {
                  locked: e,
                  keybind: t,
                  onClick: e ? this.handleDeactivate : this.handleLock,
                  isPreviewingInGame: r,
                }),
              (0, X.Te)(c)
                ? (0, s.jsx)(ee.Z, {
                    className: o()({
                      [el.layoutLocked]: e,
                      [el.layoutUnlocked]: !e,
                    }),
                  })
                : e
                  ? null
                  : this.renderInvalidSizeMessage(),
              (0, s.jsx)(ei.Z, {}),
              null != d &&
                null != u &&
                (0, s.jsx)(en.Z, {
                  streamerId: _,
                  guildId: d.id,
                  channelId: u,
                }),
              (0, s.jsx)($.Z, { locked: f, keybind: t }),
              (0, s.jsx)(J.Z, {}),
            ],
          });
        }
        constructor(e) {
          super(e),
            ec(this, "handleWindowResize", () => {
              (0, X.W2)()
                ? this.forceUpdate()
                : u()(() => {
                    this.forceUpdate();
                  }, 500);
            }),
            ec(this, "activeKeyEventShapes", []),
            ec(this, "lockEventShape", (0, K.d2)(this.props.keybindKeyCodes)),
            ec(this, "getActiveKeyEventIndex", (e) =>
              this.activeKeyEventShapes.findIndex((t) => p()(t, e)),
            ),
            ec(this, "onKeyDownGlobal", (e) => {
              let t = ef(e),
                n = this.getActiveKeyEventIndex(t) > -1,
                i = [16, 17, 18, 91].includes(e.keyCode);
              !n && !i && this.activeKeyEventShapes.push(t),
                this.activeKeyEventShapes.length ===
                  this.lockEventShape.length &&
                  this.lockEventShape.every((e) =>
                    this.activeKeyEventShapes.some((t) => p()(e, t)),
                  ) &&
                  (e.preventDefault(), e.stopPropagation());
              let { locked: s, activeRegions: a } = this.props;
              t.keyCode === c().codes.esc &&
                s &&
                a.has(ea.O0n.TEXT_WIDGET) &&
                m.Z.deactivateAllRegions();
            }),
            ec(this, "onKeyUpGlobal", (e) => {
              let t = ef(e),
                n = this.getActiveKeyEventIndex(t);
              n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
          let t = e.locked && G.Z.isPinned(ea.Odu.TEXT);
          v.Z.setLayout(t ? Z.Xq : Z.Sr), t && v.Z.enable();
        }
      }
      function eE() {
        let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: a,
          } = (0, f.cj)([G.Z], () => ({
            locked: G.Z.isUILocked((0, X.QF)()),
            initialized: G.Z.initialized,
            incompatibleApp: G.Z.incompatibleApp,
            activeRegions: G.Z.getActiveRegions(),
            isPreviewingInGame: G.Z.isPreviewingInGame(),
          })),
          r = (0, f.e7)([Y.Z], () => Y.Z.windowSize()),
          o = (0, f.e7)([z.Z], () => z.Z.getOverlayKeybind()),
          l = (0, f.e7)([k.Z], () => k.Z.getVoiceChannelId()),
          c = (0, f.e7)([D.Z], () => D.Z.getChannel(l)),
          d = (0, f.e7)([j.Z], () =>
            null != c ? j.Z.getGuild(c.guild_id) : null,
          ),
          u = (0, f.e7)([O.ZP, B.Z], () => (0, R.Z)(O.ZP, B.Z)),
          h = (0, A.Ns)(null == u ? void 0 : u.id),
          p = (0, f.e7)(
            [N.Z],
            () => null != N.Z.getLastFeedFetchDate(er.YN.GAME_PROFILE_FEED),
          ),
          E = (0, f.e7)([w.Z], () => (0, y.Z)(w.Z)),
          g = (0, f.e7)([b.Z], () => null != b.Z.getCurrentUserActiveStream()),
          { analyticsLocations: m } = (0, x.ZP)(C.Z.OVERLAY),
          { showKeybindIndicators: I, dismissKeybindNotification: Z } = (0,
          q.K)();
        return (0, s.jsx)(x.Gt, {
          value: m,
          children: (0, s.jsx)(_.RedesignIconContextProvider, {
            children: (0, s.jsx)(e_, {
              locked: e,
              initialized: t,
              incompatibleApp: n,
              activeRegions: i,
              isPreviewingInGame: a,
              windowSize: r,
              keybind: null != o ? (0, K.BB)(o.shortcut, !0) : "???",
              keybindKeyCodes: null != o ? o.shortcut : [],
              connectedToVoice: null != l,
              voiceChannelId: null != c ? c.id : null,
              voiceGuild: d,
              game: u,
              canGoLive: E,
              isStreaming: g,
              showKeybindNotification: I,
              dismissKeybindNotification: Z,
              contentInventoryEntries: h,
              hasFetchedContentInventory: p,
            }),
          }),
        });
      }
    },
    312178: function (e, t, n) {
      "use strict";
      n(411104), n(47120);
      var i = n(735250),
        s = n(470079),
        a = n(442837),
        r = n(765250),
        o = n(13245),
        l = n(26229),
        c = n(552062),
        d = n(355863),
        u = n(237997),
        h = n(451478),
        p = n(434529),
        f = n(145597),
        _ = n(382790),
        E = n(990673),
        g = n(906037),
        m = n(430036),
        I = n(839434),
        Z = n(981631);
      function v(e, t, n) {
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
      let S = {
        [Z.Odu.TEXT](e) {
          let { dragging: t, locked: n, pinned: s, dragStart: a } = e;
          return (0, i.jsx)(m.Z, {
            dragStart: a,
            locked: n,
            pinned: s,
            dragging: t,
          });
        },
        [Z.Odu.GUILDS](e) {
          let { locked: t, dragStart: n } = e;
          return (0, i.jsx)(_.Z, { dragStart: n, locked: t });
        },
        [Z.Odu.VOICE](e) {
          let {
            id: t,
            anchor: n,
            isPreviewingInGame: s,
            locked: a,
            pinned: r,
          } = e;
          return (0, i.jsx)(I.Z, {
            anchor: n,
            id: t,
            locked: a,
            pinned: r,
            widget: Z.Odu.VOICE,
            isPreviewingInGame: s,
          });
        },
        [Z.Odu.GUILDS_TEXT](e) {
          let { dragging: t, locked: n, dragStart: s } = e;
          return (0, i.jsx)(E.Z, {
            dragStart: s,
            dragging: t,
            locked: n,
            pinned: !1,
          });
        },
      };
      class C extends s.PureComponent {
        componentDidUpdate(e) {
          this.props.locked &&
            !e.locked &&
            null != this.state.lastLayoutUpdate &&
            (o.Z.track(
              Z.rMx.OVERLAY_LAYOUT_UPDATED,
              this.state.lastLayoutUpdate,
            ),
            this.setState({ lastLayoutUpdate: null }));
        }
        renderWidget(e, t, n) {
          let {
              props: { locked: i, isPreviewingInGame: s },
              state: { dragging: a },
            } = this,
            r = S[e.type];
          if (null == r)
            throw Error("OverlayLayout: Widget does not exist in WidgetMap");
          return (o) =>
            r({
              id: e.id,
              locked: i,
              pinned: e.pinned,
              dragging: a,
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
            isPreviewingInGame: a,
            isActiveRegion: r,
          } = this.props;
          if (null == e || null == t) return null;
          let { id: o, pinned: l, zIndex: d, size: u, anchor: h } = e,
            f = (0, p.w_)(u, n),
            _ = (0, p.KR)(h, n),
            { minSize: E, resizeX: m, resizeY: I, dragAnywhere: Z } = t,
            v = (0, g.eM)({ locked: s, isPreviewingInGame: a, pinned: l }),
            S = { minX: 0, minY: 0, maxX: n.width, maxY: n.height };
          return (0, i.jsx)(c.Z, {
            id: o,
            size: f,
            anchor: _,
            container: S,
            minSize: E,
            hidden: !v,
            resizeX: m,
            resizeY: I,
            style: { zIndex: d },
            dragAnywhere: Z,
            active: !s || r,
            onUpdate: this.handleUpdate,
            onClick: this.handleFocus,
            onDragStart: this.handleDragStart,
            onDragEnd: this.handleDragEnd,
            children: this.renderWidget(e, _, f),
          });
        }
        constructor(...e) {
          super(...e),
            v(this, "state", { lastLayoutUpdate: null, dragging: !1 }),
            v(this, "handleUpdate", (e, t, n, i, s) => {
              let {
                props: { layoutSize: a },
                state: { lastLayoutUpdate: o },
              } = this;
              if (!(0, f.Te)(a)) return;
              let l = (0, p.jL)(n, a),
                u = (0, p.Ox)(i, a);
              (0, r.Os)(t), (0, r.nv)(t, l, u);
              let h = e === c.B.MOVE,
                _ = (0, p.PY)(n, a.width, a.height, s.width, s.height);
              this.setState({
                lastLayoutUpdate: {
                  was_resized: (null != o && o.was_resized) || !h,
                  was_dragged: (null != o && o.was_dragged) || h,
                  widget_type: d.Z.getWidgetType(t),
                  window_width: a.width,
                  window_height: a.height,
                  widget_width: s.width,
                  widget_height: s.height,
                  widget_left: _.left,
                  widget_top: _.top,
                },
              });
            }),
            v(this, "handleFocus", (e) => {
              let { layoutSize: t } = this.props;
              (0, f.Te)(t) && (0, r.Os)(e);
            }),
            v(this, "handleDragStart", () => {
              let { widget: e } = this.props;
              null != e &&
                (e.pinned && o.Z.setPreviewInGameMode(!0),
                this.setState({ dragging: !0 }));
            }),
            v(this, "handleDragEnd", () => {
              let { widget: e } = this.props;
              null != e &&
                (e.pinned && o.Z.setPreviewInGameMode(!1),
                this.setState({ dragging: !1 }));
            });
        }
      }
      let x = a.ZP.connectStores([d.Z, u.Z], (e) => {
        let { widgetId: t } = e,
          n = d.Z.getWidget(t),
          i = u.Z.getActiveRegions();
        return {
          widget: n,
          widgetConfig: null != n ? d.Z.getWidgetConfig(n.type) : null,
          locked: u.Z.isInstanceUILocked(),
          isPreviewingInGame: u.Z.isPreviewingInGame(),
          isActiveRegion:
            null != n && n.type === Z.Odu.TEXT && i.has(Z.O0n.TEXT_WIDGET),
        };
      })(C);
      function N(e, t) {
        return (0, i.jsx)(x, { widgetId: e, layoutSize: t }, e);
      }
      t.Z = a.ZP.connectStores([d.Z, h.Z], () => ({
        layout: d.Z.getLayout(f.qU),
        layoutSize: h.Z.windowSize(),
        renderWidget: N,
      }))(l.Z);
    },
    913487: function (e, t, n) {
      "use strict";
      var i = n(570140),
        s = n(703656),
        a = n(981631);
      __OVERLAY__ &&
        i.Z.subscribe("OVERLAY_OPEN_MESSAGE", function (e) {
          let { guildId: t, channelId: n, messageId: i } = e;
          (0, s.dL)({ pathname: a.Z5c.CHANNEL(t, n, i) });
        });
    },
    906037: function (e, t, n) {
      "use strict";
      n.d(t, {
        CR: function () {
          return r;
        },
        eM: function () {
          return a;
        },
        m3: function () {
          return o;
        },
      });
      var i = n(570140),
        s = n(449224);
      function a(e) {
        return (!e.isPreviewingInGame && !e.locked) || e.pinned;
      }
      function r(e, t, n) {
        (e.locked !== t.locked ||
          e.pinned !== t.pinned ||
          n(e) !== n(t) ||
          a(e) !== a(t)) &&
          o(t, n(t));
      }
      function o(e, t) {
        var n, r;
        let o = a(e),
          l = s.Z.getGame();
        i.Z.dispatch({
          type: "OVERLAY_WIDGET_CHANGED",
          gameName:
            null !== (n = null == l ? void 0 : l.name) && void 0 !== n
              ? n
              : null,
          gameId:
            null !== (r = null == l ? void 0 : l.id) && void 0 !== r ? r : null,
          widgetType: e.widget,
          visible: o && t,
          locked: e.locked,
          pinned: e.pinned,
        });
      }
    },
    708383: function (e, t, n) {
      "use strict";
      var i = n(735250),
        s = n(470079),
        a = n(266067),
        r = n(749210),
        o = n(287734),
        l = n(765717),
        c = n(893607),
        d = n(703656),
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
          (0, c.Ss)(t) && (0, c.cq)(n)
            ? (r.Z.selectGuild(t),
              o.default.selectChannel({
                guildId: t,
                channelId: n,
                messageId: i,
              }))
            : (0, d.dL)(u.Z5c.ME);
        }
        render() {
          return null;
        }
      }
      t.Z = () =>
        (0, i.jsxs)(a.rs, {
          children: [
            (0, i.jsx)(l.Z, {
              path: u.Z5c.CHANNEL(
                c.Hw.guildId(),
                c.Hw.channelId({ optional: !0 }),
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
      var i = n(735250),
        s = n(470079),
        a = n(512722),
        r = n.n(a),
        o = n(399606),
        l = n(822183),
        c = n(673125),
        d = n(610947),
        u = n(594174),
        h = n(425423);
      function p(e) {
        let { streamerId: t, channelId: n } = e,
          a = s.useRef(null),
          l = (0, o.e7)([u.default], () => u.default.getCurrentUser());
        return (
          r()(null != l, "user cannot be null"),
          (0, d.Z)(a, l, t, n),
          (0, i.jsx)("canvas", { className: h.canvas, ref: a })
        );
      }
      function f(e) {
        let { guildId: t, channelId: n, streamerId: s } = e,
          { isSharedCanvasEnabled: a } = l.Z.useExperiment(
            { guildId: t, location: "f0d1b1_1" },
            { autoTrackExposure: !0 },
          ),
          r = (0, o.e7)([c.Z], () => c.Z.visibleOverlayCanvas);
        return a && r
          ? (0, i.jsx)(p, { guildId: t, channelId: n, streamerId: s })
          : null;
      }
    },
    107200: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return p;
        },
      }),
        n(47120);
      var i = n(735250);
      n(470079);
      var s = n(442837),
        a = n(352527),
        r = n(183584),
        o = n(487029),
        l = n(592125),
        c = n(944486),
        d = n(554174),
        u = n(710111),
        h = n(716079);
      function p() {
        let [e, t] = (0, s.Wu)([a.Z], () => [a.Z.enabled, a.Z.keepOpen]),
          n = (0, s.e7)([c.Z], () => c.Z.getVoiceChannelId()),
          p = (0, s.e7)([l.Z], () => l.Z.getChannel(n), [n]),
          f = null == p ? void 0 : p.getGuildId();
        return e && null != p
          ? (0, i.jsx)("div", {
              className: h.widget,
              children: (0, i.jsx)(o.Z, {
                width: u.FW.width,
                height: u.FW.height,
                guildId: f,
                channel: p,
                keepOpen: t,
                onClose: function () {
                  let e = (0, d.Z)();
                  null != e && (0, r.oZ)(e);
                },
                analyticsSource: "overlay",
              }),
            })
          : null;
      }
    },
    430036: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return ea;
        },
      }),
        n(47120);
      var i = n(735250),
        s = n(470079),
        a = n(120356),
        r = n.n(a),
        o = n(512722),
        l = n.n(o),
        c = n(442837),
        d = n(481060),
        u = n(239091),
        h = n(430742),
        p = n(904245),
        f = n(13245),
        _ = n(144144),
        E = n(738619),
        g = n(744061),
        m = n(36311),
        I = n(655687),
        Z = n(823748),
        v = n(25007),
        S = n(199649),
        C = n(1397),
        x = n(541716),
        N = n(752305),
        T = n(974251),
        O = n(893718),
        A = n(249458),
        y = n(552062),
        R = n(957730),
        M = n(400023),
        L = n(623292),
        b = n(807092),
        P = n(592125),
        D = n(703558),
        j = n(731290),
        w = n(430824),
        k = n(375954),
        V = n(944486),
        B = n(914010),
        U = n(594174),
        z = n(556296),
        G = n(237997),
        Y = n(585483),
        W = n(838440),
        F = n(13140),
        H = n(519591),
        K = n(906037),
        X = n(786906),
        Q = n(518084),
        J = n(987650),
        q = n(981631),
        $ = n(689938),
        ee = n(619267);
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
          D.Z.removeChangeListener(this.draftDidChange),
            Y.S.unsubscribe(q.CkL.TEXTAREA_FOCUS, this.focusInput),
            Y.S.unsubscribe(q.CkL.TEXTAREA_BLUR, this.blurInput);
        }
        render() {
          let { channel: e, placeholder: t, ...n } = this.props,
            {
              focused: s,
              textValue: a,
              contentWarningProps: r,
              richValue: o,
            } = this.state,
            c = (0, i.jsx)(d.Popout, {
              position: "top",
              onRequestClose: () => {
                var e;
                null == r ||
                  null === (e = r.onCancel) ||
                  void 0 === e ||
                  e.call(r),
                  this.setState({ contentWarningProps: null });
              },
              shouldShow: null != r,
              renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                  l()(
                    null != r,
                    "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null",
                  ),
                  (0, i.jsx)(g.Z, { onClose: t, ...r })
                );
              },
              children: () =>
                (0, i.jsx)(O.Z, {
                  ...n,
                  renderAttachButton: this.renderAttachButton,
                  channel: e,
                  type: x.I.OVERLAY,
                  onFocus: () => this.setState({ focused: !0 }),
                  onBlur: () => this.setState({ focused: !1 }),
                  placeholder: t,
                  textValue: a,
                  richValue: o,
                  onSubmit: this.handleSendMessage,
                  onChange: this.handleTextareaChange,
                  onKeyDown: this.handleTextareaKeyDown,
                  focused: s,
                }),
            });
          return e.isPrivate()
            ? (0, i.jsx)(S.Z, { channel: e, children: c }, e.id)
            : (0, i.jsx)(C.Z, { channel: e, children: c }, e.id);
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
                i = D.Z.getDraft(e.channel.id, D.d.ChannelMessage);
              n !== i && "" === i && t.setState((0, N.eK)(i));
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
                  n = k.Z.getLastEditableMessage(t.id);
                null != n && p.Z.startEditMessage(t.id, n.id, n.content);
              }
            }),
            et(this, "handleTextareaChange", (e, t, n) => {
              let {
                channel: { id: i },
              } = this.props;
              h.Z.changeDraft(i, this.state.textValue, D.d.ChannelMessage),
                "" !== t ? _.Z.startTyping(i) : _.Z.stopTyping(i),
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
                : (0, W.v)({
                    openWarningPopout: (e) =>
                      this.setState({ contentWarningProps: e }),
                    type: x.I.OVERLAY,
                    content: t,
                    channel: n,
                  }).then((e) => {
                    let { valid: a, failureReason: r } = e;
                    if (!a)
                      return r === q.zYc.SLOWMODE_COOLDOWN
                        ? (Y.S.dispatch(q.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                          { shouldClear: !1, shouldRefocus: !0 })
                        : { shouldClear: !1, shouldRefocus: !1 };
                    let o = p.Z.getSendMessageOptionsForReply(i);
                    return (p.Z.sendMessage(n.id, R.ZP.parse(n, t), !0, o),
                    this.setState((0, N.H2)()),
                    (0, L.A6)(n.id),
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
              (0, i.jsx)(T.Z, {
                className: t,
                channel: this.props.channel,
                draftType: D.d.ChannelMessage,
                editorTextContent: this.state.textValue,
                setValue: (e) =>
                  this.handleTextareaChange(null, e, (0, N.JM)(e)),
                canOnlyUseTextCommands: e,
              }),
            ),
            D.Z.addChangeListener(this.draftDidChange);
          let n = D.Z.getDraft(e.channel.id, D.d.ChannelMessage);
          (this.state = {
            ...(0, N.eK)(n),
            focused: !1,
            contentWarningProps: null,
          }),
            Y.S.subscribe(q.CkL.TEXTAREA_FOCUS, this.focusInput),
            Y.S.subscribe(q.CkL.TEXTAREA_BLUR, this.blurInput);
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
            nsfwAgree: a,
            guild: o,
            locked: l,
            activated: c,
            chatKeybind: d,
            pinned: u,
            isPreviewingInGame: h,
            dragging: p,
            pendingReply: f,
          } = this.props;
          if (null == t) return null;
          let _ = l || h,
            g = !a && null != t && t.isNSFW(),
            I = !_ || c;
          return (
            (e =
              g && null != o
                ? (0, i.jsx)(m.Z, { guild: o })
                : (0, i.jsx)(
                    M.Z,
                    {
                      channel: t,
                      className: ee.messages,
                      forceCompact: u,
                      showNewMessagesBar: !_,
                      scrollerClassName: u ? ee.scroller : void 0,
                      showingQuarantineBanner: !1,
                    },
                    t.id,
                  )),
            (0, i.jsx)(A.G.Provider, {
              value: {
                disableInteractions: u && l && !c,
                disableAnimations: u && _ && !c,
              },
              children: (0, i.jsxs)(s.Fragment, {
                children: [
                  !l && !h && (0, i.jsx)(v.Z, { channel: t, guild: o }),
                  (0, i.jsx)(Q.ZP.Background, {
                    opacityOverride: l || h ? null : en,
                    children: (0, i.jsx)("div", {
                      className: r()(ee.messagesContainer, {
                        [ee.isDragging]: p,
                        [ee.disableHoverStates]: u && l && !c,
                      }),
                      children: e,
                    }),
                  }),
                  g
                    ? null
                    : (0, i.jsx)("div", {
                        children: I
                          ? (0, i.jsx)(Q.ZP.Background, {
                              opacityOverride: l || h ? null : en,
                              children: (0, i.jsxs)("div", {
                                className: ee.footerContent,
                                children: [
                                  (0, i.jsx)(ei, {
                                    channel: t,
                                    placeholder: n,
                                    isTemporarilyActive: c,
                                    pendingReply: f,
                                  }),
                                  (0, i.jsx)("div", {
                                    className: ee.typingWrapper,
                                    children: (0, i.jsx)(E.Z, {
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
                                  className: r()(
                                    ee.activateKeybind,
                                    ee.__invalid_mediumBackgroundOpacity,
                                  ),
                                  children:
                                    null != t.name && t.name.length > 0
                                      ? $.Z.Messages.OVERLAY_CHANNEL_CHAT_HOTKEY.format(
                                          {
                                            keybind: d,
                                            channelName: t.isMultiUserDM()
                                              ? t.name
                                              : "#".concat(t.name),
                                          },
                                        )
                                      : $.Z.Messages.OVERLAY_USER_CHAT_HOTKEY.format(
                                          { keybind: d },
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
              isPreviewingInGame: a,
              opacity: o,
            } = this.props,
            l = q.t_t.UNPINNED;
          s
            ? (l = q.t_t.IN_GAME_ACTIVE)
            : (n && t) || a
              ? (l = q.t_t.IN_GAME_TEXT)
              : n && (l = q.t_t.PINNED);
          let c = (t && !s) || a,
            d = n && (c || s),
            u = n && s,
            h = n && c && !s,
            p = (0, H.Z)(o);
          return (0, i.jsx)(Q.ZP, {
            className: r()(p, {
              [ee.widgetWrapper]: !n,
              [ee.widgetWrapperPinned]: n,
              [ee.locked]: h,
              [ee.inGame]: d,
              [ee.inGameActive]: u,
              [ee.pinned]: n,
              "overlay-unlocked": !t,
            }),
            type: l,
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
            isPreviewingInGame: a,
            contained: r,
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
                disableDragIndicator: r,
                isPreviewingInGame: a,
                handlePin: this.handlePin,
                onContextMenu: this.handleContextMenu,
                onMouseDown: this.moveDragStart,
              }),
              this.renderContent(),
              e || a
                ? null
                : (0, i.jsx)("div", {
                    className: ee.resizeIcon,
                    onMouseDown: this.resizeDragStart,
                  }),
            ],
          });
          return r
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
                    n.e("29212"),
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
              t(y.B.MOVE, e.clientX, e.clientY);
            }),
            et(this, "resizeDragStart", (e) => {
              let { dragStart: t } = this.props;
              t(y.B.RESIZE_SOUTH_EAST, e.clientX, e.clientY);
            });
        }
      }
      function ea(e) {
        let { contained: t = !1, ...n } = e,
          s = (0, c.e7)([B.Z], () => B.Z.getGuildId()),
          a = (0, c.e7)([V.Z], () => V.Z.getChannelId(s)),
          r = (0, c.e7)([P.Z], () => P.Z.getChannel(a)),
          o = (0, c.e7)([z.Z], () => z.Z.getOverlayChatKeybind()),
          l = null != o ? (0, F.BB)(o.shortcut, !0) : "]",
          [d, u, h] = (0, c.Wu)([G.Z], () => [
            G.Z.getTextWidgetOpacity(),
            G.Z.getActiveRegions(),
            !t && G.Z.isPreviewingInGame(),
          ]),
          p = (0, c.e7)([w.Z], () => w.Z.getGuild(s)),
          f = (0, c.e7)([j.Z], () => null != s && j.Z.didAgree(s)),
          _ = null != r && r.isPrivate() ? r.getRecipientId() : null,
          E = (0, c.e7)([b.Z], () =>
            null != a ? b.Z.getPendingReply(a) : void 0,
          ),
          g = (0, c.e7)([U.default], () =>
            null != _ ? U.default.getUser(_) : null,
          ),
          { placeholder: m } = (0, I.Z)(r);
        return null != r && null != p && q.TPd.GUILD_THREADS_ONLY.has(r.type)
          ? (0, i.jsx)(Z.Z, {})
          : (0, i.jsx)(es, {
              guild: p,
              channel: r,
              user: g,
              opacity: d,
              nsfwAgree: f,
              chatKeybind: l,
              activated: u.has(q.O0n.TEXT_WIDGET),
              isPreviewingInGame: h,
              pendingReply: E,
              contained: t,
              placeholder: m,
              widget: q.Odu.TEXT,
              ...n,
            });
      }
    },
    786906: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return T;
        },
      }),
        n(47120);
      var i = n(735250),
        s = n(470079),
        a = n(120356),
        r = n.n(a),
        o = n(442837),
        l = n(481060),
        c = n(13245),
        d = n(287734),
        u = n(933557),
        h = n(984370),
        p = n(910611),
        f = n(131704),
        _ = n(523746),
        E = n(592125),
        g = n(430824),
        m = n(699516),
        I = n(944486),
        Z = n(707878),
        v = n(518084),
        S = n(689938),
        C = n(64437);
      function x(e, t, n) {
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
      class N extends s.Component {
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
            userIsInChannelCall: a,
            isBlocked: r,
          } = this.props;
          if (!(0, f.hv)(n.type)) return null;
          let o = l.PhoneCallIcon,
            c = !1;
          return (
            s
              ? a
                ? ((e = S.Z.Messages.LEAVE_CALL), (o = l.PhoneHangUpIcon))
                : (e = S.Z.Messages.JOIN_CALL)
              : r
                ? ((e = S.Z.Messages.CALL_UNAVAILABLE_BLOCKED_USERS),
                  (t = l.Tooltip.Colors.RED),
                  (c = !0))
                : (e = S.Z.Messages.START_VOICE_CALL),
            (0, i.jsx)(h.Z.Icon, {
              icon: o,
              tooltip: e,
              onClick: this.handleClickCall,
              tooltipColor: t,
              disabled: c,
            })
          );
        }
        render() {
          let {
              className: e,
              draggableClassName: t,
              locked: n,
              channel: s,
              channelName: a,
              guild: o,
              onMouseDown: c,
              onContextMenu: d,
              isPreviewingInGame: u,
              disableDragIndicator: f,
            } = this.props,
            { showOpacitySlider: _ } = this.state;
          return _ && !n
            ? (0, i.jsxs)(v.ZP.Bar, {
                className: C.opacityHeader,
                children: [
                  (0, i.jsx)(Z.Z, {}),
                  (0, i.jsx)(h.Z.Icon, {
                    icon: l.XSmallIcon,
                    onClick: this.handleCloseOpacitySettings,
                    tooltip: S.Z.Messages.CLOSE,
                  }),
                ],
              })
            : (0, i.jsx)(v.ZP.Background, {
                opacityOverride: n || u ? null : 1,
                children: (0, i.jsx)("div", {
                  className: r()(e, t, C.headerContainer),
                  onMouseDown: c,
                  onContextMenu: d,
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
                            className: r()(C.dragIcon, t),
                            width: 20,
                            height: 20,
                          }),
                      (0, p.ud)({ channel: s, channelName: a }),
                      n ? null : (0, p.v0)(s, o),
                    ],
                  }),
                }),
              });
        }
        constructor(...e) {
          super(...e),
            x(this, "state", { showOpacitySlider: !1 }),
            x(this, "handleClickCall", (e) => {
              let {
                channel: t,
                userIsInChannelCall: n,
                channelHasActiveCall: i,
              } = this.props;
              if (i)
                n
                  ? d.default.selectVoiceChannel(null)
                  : c.Z.callPrivateChannel(t.id, !1);
              else {
                let n = !i && !e.shiftKey;
                c.Z.callPrivateChannel(t.id, n);
              }
            }),
            x(this, "handleOpenOpacitySettings", () => {
              let { pinned: e } = this.props;
              this.setState({ showOpacitySlider: !0 }),
                e && c.Z.setPreviewInGameMode(!0);
            }),
            x(this, "handleCloseOpacitySettings", () => {
              let { pinned: e } = this.props;
              this.setState({ showOpacitySlider: !1 }),
                e && c.Z.setPreviewInGameMode(!1);
            }),
            x(this, "handleMouseDown", (e) => {
              let { onMouseDown: t } = this.props;
              null != t && t(e);
            }),
            x(this, "renderWidgetButtons", () => {
              let { locked: e, handlePin: t, pinned: n } = this.props,
                a = n
                  ? S.Z.Messages.OVERLAY_WIDGET_HIDE_IN_GAME
                  : S.Z.Messages.OVERLAY_WIDGET_SHOW_IN_GAME;
              return e
                ? null
                : (0, i.jsxs)(s.Fragment, {
                    children: [
                      this.renderCallButton(),
                      n
                        ? (0, i.jsx)(h.Z.Icon, {
                            icon: l.BrowserCheckeredIcon,
                            tooltip:
                              S.Z.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY,
                            onClick: this.handleOpenOpacitySettings,
                          })
                        : null,
                      (0, i.jsx)(h.Z.Icon, {
                        icon: n ? l.PinUprightSlashIcon : l.PinUprightIcon,
                        tooltip: a,
                        selected: n,
                        onClick: t,
                      }),
                    ],
                  });
            });
        }
      }
      function T(e) {
        let { channel: t, ...n } = e,
          s = (0, o.e7)([I.Z, E.Z], () => {
            let e = I.Z.getVoiceChannelId();
            return E.Z.getChannel(e);
          }),
          a = (0, o.e7)([g.Z], () => g.Z.getGuild(t.guild_id)),
          r = (0, o.e7)([_.Z], () => _.Z.isCallActive(t.id)),
          l = (0, u.ZP)(t),
          c = (0, o.e7)(
            [m.Z],
            () =>
              !!t.isDM() &&
              null != t.getRecipientId() &&
              m.Z.isBlocked(t.getRecipientId()),
          );
        return (0, i.jsx)(N, {
          channel: t,
          channelName: l,
          guild: a,
          channelHasActiveCall: r,
          userIsInChannelCall: null != s && s.id === t.id,
          isBlocked: c,
          ...n,
        });
      }
    },
    707878: function (e, t, n) {
      "use strict";
      n(47120);
      var i = n(735250),
        s = n(470079),
        a = n(442837),
        r = n(481060),
        o = n(13245),
        l = n(313201),
        c = n(237997),
        d = n(766032),
        u = n(987650),
        h = n(981631),
        p = n(689938),
        f = n(824425);
      let _ = Object.values(u.wF).map((e) => 100 * e),
        E = (0, l.hQ)();
      class g extends s.PureComponent {
        handleUpdateBackgroundOpacity(e) {
          o.Z.setTextWidgetOpacity((0, d.Z)(e / 100)),
            o.Z.track(h.rMx.OVERLAY_SETTINGS_UPDATED, {
              text_opacity_slider: e,
            });
        }
        handlePreviewBackgroundOpacity(e) {
          o.Z.setTextWidgetOpacity((0, d.Z)(e / 100));
        }
        render() {
          return (0, i.jsxs)("div", {
            className: f.container,
            children: [
              (0, i.jsx)(r.FormTitle, {
                id: E,
                tag: r.FormTitleTags.H5,
                className: f.title,
                children: p.Z.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY,
              }),
              (0, i.jsx)("div", {
                className: f.sliderContainer,
                children: (0, i.jsx)(r.Slider, {
                  mini: !0,
                  initialValue: this.initialValue,
                  defaultValue: this.initialValue,
                  minValue: _[0],
                  maxValue: _[_.length - 1],
                  handleSize: 10,
                  onValueChange: this.handleUpdateBackgroundOpacity,
                  asValueChanges: this.handlePreviewBackgroundOpacity,
                  markers: _,
                  onMarkerRender: h.dG4,
                  equidistant: !0,
                  stickToMarkers: !0,
                  "aria-labelledby": E,
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
      t.Z = a.ZP.connectStores([c.Z], () => ({
        opacity: c.Z.getTextWidgetOpacity(),
      }))(g);
    },
    839434: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return ea;
        },
      }),
        n(47120);
      var i,
        s = n(735250),
        a = n(470079),
        r = n(120356),
        o = n.n(r),
        l = n(442837),
        c = n(692547),
        d = n(477690),
        u = n(481060),
        h = n(239091),
        p = n(765250),
        f = n(13245),
        _ = n(872810),
        E = n(586902),
        g = n(835473),
        m = n(933557),
        I = n(600164),
        Z = n(112831),
        v = n(594190),
        S = n(925329),
        C = n(569545),
        x = n(914923),
        N = n(165393),
        T = n(989941),
        O = n(552282),
        A = n(345243),
        y = n(565799),
        R = n(501655),
        M = n(786915),
        L = n(7188),
        b = n(597998),
        P = n(199902),
        D = n(314897),
        j = n(592125),
        w = n(77498),
        k = n(131951),
        V = n(944486),
        B = n(606304),
        U = n(449224),
        z = n(938475),
        G = n(237997),
        Y = n(136015),
        W = n(51144),
        F = n(145597),
        H = n(658785),
        K = n(244073),
        X = n(876205),
        Q = n(906037),
        J = n(518084),
        q = n(981631),
        $ = n(65154),
        ee = n(689938),
        et = n(5239);
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
            nick: r,
            displayNameMode: c,
            displayUserMode: d,
            size: u = q.ipw.LARGE,
            onClick: h,
            onContextMenu: p,
            context: f,
            guildId: _,
            voiceState: g,
          } = e,
          { showKeybindIndicators: m } = H.Z.useExperiment({
            location: "overlay_voice_widget",
          }),
          I = (0, l.e7)([G.Z], () => G.Z.showKeybindIndicators),
          Z = (0, l.e7)([D.default], () => D.default.getId()),
          v = (0, l.e7)([k.Z], () => k.Z.isLocalMute(i.id)),
          S = (0, l.e7)([P.Z], () => P.Z.getCurrentUserActiveStream()),
          C = (0, l.Wu)([P.Z], () => (null != S ? P.Z.getViewerIds(S) : [])),
          x = (0, E.Z)({ userId: i.id, context: f }),
          N = (0, l.e7)([B.Z], () => B.Z.isPrioritySpeaker(i.id, f)),
          T = (0, l.e7)([P.Z], () => null != P.Z.getStreamForUser(i.id, _)),
          O = a.useMemo(
            () => null != S && S.ownerId !== i.id && C.includes(i.id),
            [S, i.id, C],
          );
        if (d === q.OYC.ONLY_WHILE_SPEAKING && n && !x) return null;
        let A = i.id === Z,
          { mute: y, selfMute: R, suppress: M, deaf: L, selfDeaf: j } = g,
          w = m && I,
          V = R && (!A || !w);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(b.Z, {
              guildId: _,
              onClick: n ? void 0 : (e) => (null == h ? void 0 : h(e, i)),
              onContextMenu: n ? void 0 : (e) => (null == p ? void 0 : p(e, i)),
              className: o()(et.voiceUserWrapper, {
                [et.faded]: !x,
                [et.interactive]: !n,
              }),
              user: i,
              nick: r,
              speaking: !1,
              flipped: t,
              isStreaming: T,
              iconClassName: o()(et.voiceIcon, { [et.locked]: n }),
              isWatching: O,
              isOverlay: !0,
              size: u,
              priority: N,
              mute: y || V || v,
              localMute: v,
              serverMute: y || M,
              deaf: L || j,
              serverDeaf: L,
              userNameClassName: o()(et.username, {
                [et.locked]: n,
                [et.hidden]:
                  n &&
                  (c === q.wC$.NEVER ||
                    (!x && c === q.wC$.ONLY_WHILE_SPEAKING)),
              }),
            }),
            A &&
              w &&
              (0, s.jsx)(X.Z, {
                value: R,
                action: q.kg4.TOGGLE_MUTE,
                shouldShow: !y && !M,
              }),
          ],
        });
      }
      class es extends (i = a.PureComponent) {
        renderVoiceUsers() {
          let {
              context: e,
              sortedVoiceStates: t,
              displayNameMode: n,
              displayUserMode: i,
              locked: a,
              isPreviewingInGame: r,
              channel: l,
              anchor: c,
              avatarSizeMode: u,
            } = this.props,
            h = null != c.right,
            p = t.map((t) => {
              var o;
              let { user: c, voiceState: d, member: p } = t;
              if (null == c || null == l || null == e) return null;
              let f = a || r;
              return (0, s.jsx)(
                ei,
                {
                  guildId: null == l ? void 0 : l.guild_id,
                  user: c,
                  nick:
                    null !== (o = null == p ? void 0 : p.nick) && void 0 !== o
                      ? o
                      : W.ZP.getName(c),
                  flipped: h,
                  voiceState: d,
                  displayNameMode: n,
                  displayUserMode: i,
                  size: u,
                  locked: f,
                  onContextMenu: this.handleUserContextMenu,
                  onClick: this.handleUserContextMenu,
                  context: e,
                },
                c.id,
              );
            });
          return (0, s.jsx)(J.ZP.Body, {
            className: o()({
              [d.Z.VOICE_WIDGET_TOP_MARGIN]: a,
              [et.bottomMargin]: a,
            }),
            children: (0, s.jsx)(b.e, { className: et.voiceList, children: p }),
          });
        }
        renderHeader() {
          let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
          return (0, s.jsxs)(J.ZP.Bar, {
            className: o()(et.draggableStartArea, { [et.preview]: n }),
            children: [
              (0, s.jsxs)(J.ZP.Content, {
                dynamicSize: !0,
                className: o()(et.content, { [et.hidden]: n }),
                children: [
                  (0, s.jsx)(u.DragIcon, {
                    size: "custom",
                    color: c.Z.unsafe_rawColors.WHITE_500.css,
                    width: 20,
                    height: 20,
                    className: o()(et.icon, et.faded, et.dragIcon),
                  }),
                  (0, s.jsx)(u.VoiceNormalIcon, {
                    size: "custom",
                    color: c.Z.unsafe_rawColors.WHITE_500.css,
                    width: 20,
                    height: 20,
                    className: o()(et.icon, et.faded, et.speakerIcon),
                  }),
                  (0, s.jsx)(Z.Z, {
                    color: c.Z.unsafe_rawColors.PRIMARY_200.css,
                    className: et.title,
                    children: t,
                  }),
                ],
              }),
              n
                ? null
                : (0, s.jsx)(J.ZP.Icon, {
                    icon: u.SettingsIcon,
                    label: ee.Z.Messages.VOICE_SETTINGS,
                    onClick: this.handleOpenVoiceSettings,
                    tooltipPosition: "left",
                    size: 18,
                  }),
              n
                ? null
                : (0, s.jsx)(J.ZP.Icon, {
                    icon: e ? u.PinUprightSlashIcon : u.PinUprightIcon,
                    label: e
                      ? ee.Z.Messages.OVERLAY_WIDGET_HIDE_IN_GAME
                      : ee.Z.Messages.OVERLAY_WIDGET_SHOW_IN_GAME,
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
            channel: a,
            application: r,
            streamMetadata: l,
            streamApplication: c,
            stream: d,
          } = this.props;
          if (t || null == d || null == a) return null;
          let { sanitizedTitle: h, title: p } = (0, x.Z)(l);
          return (0, s.jsx)(J.ZP.Bar, {
            className: o()(et.streamerControls, {
              [et.hidden]: i,
              [et.unpinned]: !n,
            }),
            children: (0, s.jsxs)(J.ZP.Content, {
              className: et.streamerContent,
              dynamicSize: !0,
              children: [
                (0, s.jsxs)("div", {
                  className: et.streamerInner,
                  children: [
                    (null == c ? void 0 : c.id) != null &&
                    c.id === (null == r ? void 0 : r.id)
                      ? (0, s.jsx)(S.Z, { className: et.gameIcon, game: r })
                      : (0, s.jsx)(N.Z, { title: h }),
                    (0, s.jsxs)(I.Z, {
                      direction: I.Z.Direction.VERTICAL,
                      justify: I.Z.Justify.BETWEEN,
                      className: et.streamerInfo,
                      children: [
                        (0, s.jsx)(u.Text, {
                          className: et.streaming,
                          variant: "text-sm/normal",
                          children: ee.Z.Messages.STATUS_STREAMING,
                        }),
                        (0, s.jsx)(A.Z, {
                          children:
                            null !== (e = null == c ? void 0 : c.name) &&
                            void 0 !== e
                              ? e
                              : p,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)(I.Z, {
                  grow: 0,
                  children: [
                    (0, s.jsx)("div", {
                      className: et.streamerIconWrapper,
                      children: (0, s.jsx)(M.Z, {
                        stream: d,
                        iconClassName: et.streamerIcon,
                        appContext: q.IlC.OVERLAY,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: et.streamerIconWrapper,
                      children: (0, s.jsx)(L.Z, {
                        stream: d,
                        appContext: q.IlC.OVERLAY,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: et.streamerIconWrapper,
                      children: (0, s.jsx)(u.TooltipContainer, {
                        text: ee.Z.Messages.STOP_STREAMING,
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
          (0, Q.m3)(this.props, this.shouldDisplay());
        }
        componentDidUpdate(e) {
          (0, Q.CR)(e, this.props, this.shouldDisplay);
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
              channel: a,
            } = e;
          return 0 !== s.length && null != t && null != a && (!n || !!i) && !0;
        }
        render() {
          let {
            context: e,
            lobbyId: t,
            locked: n,
            pinned: i,
            isPreviewingInGame: a,
            channel: r,
          } = this.props;
          if (null == r || null == e || !this.shouldDisplay()) return null;
          let l = q.t_t.UNPINNED;
          return (
            i && (l = q.t_t.PINNED),
            a && (l = q.t_t.IN_GAME_PREVIEW),
            n && (l = q.t_t.IN_GAME),
            (0, s.jsxs)(J.ZP, {
              type: l,
              width: 380,
              children: [
                n ? null : this.renderHeader(),
                this.renderVoiceUsers(),
                this.renderStreamerSettings(),
                n
                  ? null
                  : (0, s.jsx)(K.Z, {
                      className: o()({ [et.preview]: a }),
                      contentClassName: o()({ [et.hidden]: a }),
                      channel: r,
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
                  n.e("5901"),
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
                let { default: a } = await n.e("66063").then(n.bind(n, 344516));
                return (n) =>
                  (0, s.jsx)(a, {
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
              if (null != e) _.g((0, C.V9)(e));
            });
        }
      }
      en(es, "defaultProps", { context: $.Yn.DEFAULT });
      function ea(e) {
        var t;
        let n = (0, l.e7)([V.Z, j.Z], () =>
            j.Z.getChannel(V.Z.getVoiceChannelId()),
          ),
          i = (0, m.ZP)(n),
          r = (function () {
            let [e] = (0, l.e7)(
                [z.ZP, y.Z, V.Z, j.Z],
                () => {
                  let e = j.Z.getChannel(V.Z.getVoiceChannelId());
                  return null == e
                    ? [[], -1]
                    : e.isGuildStageVoice()
                      ? [
                          y.Z.getMutableParticipants(e.id, R.pV.SPEAKER),
                          y.Z.getParticipantsVersion(e.id),
                        ]
                      : [
                          z.ZP.getVoiceStatesForChannel(e),
                          z.ZP.getVoiceStateVersion(e.getGuildId()),
                        ];
                },
                [],
                Y.Q,
              ),
              t = (0, l.e7)([D.default], () => D.default.getId()),
              { showKeybindIndicators: n } = H.Z.useExperiment({
                location: "voice_widget",
              });
            return a.useMemo(
              () =>
                n
                  ? [...e].sort((e, n) =>
                      e.user.id === t ? -1 : n.user.id === t ? 1 : 0,
                    )
                  : e,
              [e, t, n],
            );
          })(),
          o = (0, l.e7)([P.Z], () => P.Z.getStreamerActiveStreamMetadata()),
          c = (0, l.e7)([v.ZP, U.Z, w.Z], () => {
            var e;
            let t = (0, T.Z)(v.ZP, U.Z);
            return null != t
              ? null === (e = w.Z.getGameByGameData(t)) || void 0 === e
                ? void 0
                : e.id
              : null;
          }),
          d = (0, g.q)(c),
          u = (0, l.cj)([v.ZP, U.Z, P.Z, G.Z], () => {
            let e = (0, T.Z)(v.ZP, U.Z),
              t = P.Z.getCurrentUserActiveStream();
            return {
              displayUserMode: G.Z.getDisplayUserMode(),
              displayNameMode: G.Z.getDisplayNameMode(),
              avatarSizeMode: G.Z.getAvatarSizeMode(),
              streamApplication:
                (null == o ? void 0 : o.pid) === (0, F.QF)()
                  ? (0, O.Z)(e)
                  : null,
              stream: t,
            };
          });
        return (0, s.jsx)(es, {
          ...u,
          application: d,
          ...e,
          sortedVoiceStates: r,
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
          return m;
        },
      }),
        n(411104);
      var i,
        s,
        a,
        r,
        o = n(735250),
        l = n(470079),
        c = n(120356),
        d = n.n(c),
        u = n(877921),
        h = n.n(u),
        p = n(481060),
        f = n(981631),
        _ = n(344037),
        E = n(739017);
      let g = f.t_t.DEFAULT,
        m = 1,
        I = l.createContext({ type: g, opacity: m }),
        Z = l.createContext(void 0),
        v = (e) => {
          let { children: t, className: n, ...i } = e;
          return (0, o.jsx)(I.Consumer, {
            children: (e) => {
              let { type: s } = e;
              return (0, o.jsx)(Z.Consumer, {
                children: (e) =>
                  (0, o.jsx)("div", {
                    className: d()(n, _.bar, _[h()(s)]),
                    style: e,
                    ...i,
                    children: t,
                  }),
              });
            },
          });
        };
      class S extends (i = l.PureComponent) {
        render() {
          let { disableScroll: e, children: t, className: n } = this.props;
          return (0, o.jsx)(Z.Consumer, {
            children: (i) =>
              (0, o.jsx)(I.Consumer, {
                children: (s) => {
                  let a = d()(_.body, _[h()(s.type)], n);
                  return e
                    ? (0, o.jsx)("div", { className: a, style: i, children: t })
                    : (0, o.jsx)(p.Scroller, {
                        fade: !0,
                        className: a,
                        children: t,
                      });
                },
              }),
          });
        }
      }
      (r = { disableScroll: !1 }),
        (a = "defaultProps") in (s = S)
          ? Object.defineProperty(s, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[a] = r);
      let C = (e) => {
          let {
            type: t = g,
            width: n,
            height: i,
            children: s,
            className: a,
            opacity: r = m,
            onClick: l,
          } = e;
          return (0, o.jsx)(I.Provider, {
            value: { type: t, opacity: r },
            children: (0, o.jsx)("div", {
              className: d()(_.widget, _[h()(t)], a),
              style: { width: n, height: i },
              onClick: l,
              children: s,
            }),
          });
        },
        x = (e) => {
          let { children: t, className: n, dynamicSize: i = !1 } = e;
          return (0, o.jsx)(Z.Consumer, {
            children: (e) =>
              (0, o.jsx)("div", {
                className: d()(_.content, n, { [_.staticSize]: !i }),
                style: e,
                children: t,
              }),
          });
        };
      (C.Background = (e) => {
        let { children: t, opacityOverride: n } = e;
        if (null == t) return null;
        let i = [v, S, x];
        return (0, o.jsx)(I.Consumer, {
          children: (e) => {
            let { opacity: s } = e,
              a = {
                backgroundColor: "rgba(54, 57, 63, ".concat(
                  "" + (null != n ? n : s),
                  ")",
                ),
              };
            if ("string" == typeof t.type)
              return l.cloneElement(t, { style: a });
            if (i.includes(t.type))
              return (0, o.jsx)(Z.Provider, { value: a, children: t });
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
        (C.Body = S),
        (C.Content = x),
        (C.Icon = (e) => {
          let {
            icon: t,
            label: n,
            onClick: i,
            isActive: s,
            tooltipPosition: a = "top",
            size: r = 20,
            isTutorial: l = !1,
          } = e;
          return (0, o.jsx)(p.Tooltip, {
            text: l
              ? (0, o.jsx)("div", { className: _.tutorialTip, children: n })
              : n,
            "aria-label": n,
            position: a,
            forceOpen: l,
            color: l ? p.Tooltip.Colors.BRAND : p.Tooltip.Colors.BLACK,
            children: (e) => {
              let { onMouseEnter: a, onMouseLeave: l } = e;
              return (0, o.jsx)(p.Button, {
                look: p.Button.Looks.BLANK,
                size: p.Button.Sizes.NONE,
                onClick: i,
                onMouseEnter: a,
                onMouseLeave: l,
                className: d()(_.icon, { [_.toggledIconOn]: s }),
                innerClassName: E.flexCenter,
                "aria-label": n,
                children: (0, o.jsx)(t, {
                  color: "currentColor",
                  size: "custom",
                  width: r,
                  height: r,
                  role: "img",
                }),
              });
            },
          });
        }),
        (C.Bar = v),
        (t.ZP = C);
    },
    178528: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return w;
        },
      }),
        n(47120);
      var i = n(735250),
        s = n(470079),
        a = n(212433),
        r = n(442837),
        o = n(481060),
        l = n(619915),
        c = n(554747),
        d = n(373274),
        u = n(315174),
        h = n(840780),
        p = n(905423),
        f = n(680089),
        _ = n(58468),
        E = n(796974),
        g = n(324067),
        m = n(984933),
        I = n(888369),
        Z = n(430824),
        v = n(496675),
        S = n(878884),
        C = n(19780),
        x = n(944486),
        N = n(9156),
        T = n(938475),
        O = n(518084),
        A = n(669083),
        y = n(711553),
        R = n(981631),
        M = n(647086),
        L = n(689938),
        b = n(867144);
      function P(e, t, n) {
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
      let D = 54;
      class j extends s.PureComponent {
        static getDerivedStateFromProps(e) {
          let { guild: t } = e;
          return null == t || null == t.banner
            ? { renderBanner: !1, bannerVisible: !1 }
            : null;
        }
        componentDidMount() {
          let { guildId: e } = this.props,
            { scrollTop: t } = E.Z.getGuildDimensions(e);
          this.setAnimatedValue(null != t ? t : 0);
        }
        componentDidUpdate(e) {
          let { guild: t, guildId: n } = this.props;
          if (e.guild !== t) {
            let { scrollTop: e } = E.Z.getGuildDimensions(n);
            this.setAnimatedValue(null != e ? e : 0);
          }
        }
        renderSettings(e) {
          let { closePopout: t } = e;
          return (0, i.jsx)(A.Z, { onClose: t });
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
          ((e >= D && i) || (e < D && !i)) && (i = !i),
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
              renderBanner: a,
              bannerVisible: r,
              communityInfoVisible: l,
            } = this.state,
            c = n.id === M._ ? d.j : d.E;
          return (0, i.jsxs)(y.Z, {
            header: (0, i.jsx)(u.ZP, {
              guild: n,
              controller: s,
              renderBanner: a,
              bannerVisible: r,
              className: b.guildHeader,
              headerClassName: b.guildHeaderInner,
              onMouseDown: e,
              disableBannerAnimation: !1,
              communityInfoVisible: l,
              children: (0, i.jsx)(o.Popout, {
                position: "right",
                renderPopout: this.renderSettings,
                children: (e) =>
                  (0, i.jsx)(O.ZP.Icon, {
                    icon: o.SettingsIcon,
                    label: L.Z.Messages.SETTINGS,
                    ...e,
                  }),
              }),
            }),
            children: [
              (0, i.jsx)("div", {
                className: b.channelList,
                children: (0, i.jsx)(c, {
                  ...t,
                  guild: n,
                  disableManageChannels: !0,
                  onScroll:
                    null != n && null != n.banner ? this.handleScroll : null,
                }),
              }),
              (0, i.jsx)("section", {
                className: b.panels,
                "aria-label": L.Z.Messages.ACCOUNT_A11Y_LABEL,
                children: (0, i.jsx)(h.Z, { guildId: n.id }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            P(this, "state", {
              controller: new a.Controller({ value: 1, immediate: !0 }),
              renderBanner: !1,
              bannerVisible: !1,
              communityInfoVisible: !1,
            }),
            P(this, "handleScroll", (e) => {
              let { scrollTop: t } = e;
              this.setAnimatedValue(t);
            });
        }
      }
      function w(e) {
        var t;
        let { guildId: n } = e,
          s = (0, r.e7)([Z.Z], () => Z.Z.getGuild(n)),
          a = (0, r.e7)([m.ZP], () => m.ZP.getChannels(n)),
          o = (0, r.e7)([g.Z], () => g.Z.getCategories(n)),
          { mutedChannels: d, collapseMuted: u } = (0, r.cj)([N.ZP], () => ({
            mutedChannels: N.ZP.getMutedChannels(n),
            collapseMuted: N.ZP.isGuildCollapsed(n),
          })),
          h = (0, r.e7)([T.ZP], () => T.ZP.getVoiceStates(n)),
          O = (0, r.e7)([_.Z], () => _.Z.getCollapsed()),
          { scrollTo: A } = (0, r.e7)([E.Z], () => E.Z.getGuildDimensions(n)),
          y = (0, p.Z)((e) => {
            let { channelId: t } = e;
            return t;
          }),
          M = (0, r.e7)([x.Z], () => x.Z.getVoiceChannelId()),
          L = (0, r.e7)([v.Z], () => v.Z.getGuildVersion(n)),
          b = (0, r.e7)([f.Z], () => f.Z.version),
          P = (0, r.e7)([I.default], () => I.default.getGuildChangeSentinel(n)),
          D = (0, l.QN)(null == s ? void 0 : s.id),
          w = (0, c.gM)(null == s ? void 0 : s.id),
          k =
            null !== (t = null == s ? void 0 : s.hasFeature(R.oNc.COMMUNITY)) &&
            void 0 !== t &&
            t,
          V = (0, r.e7)([C.Z], () => C.Z.getChannelId()),
          B = (0, r.e7)([S.Z], () => S.Z.desyncedVoiceStatesCount);
        return (0, i.jsx)(j, {
          guildId: n,
          guild: s,
          channels: a,
          categories: o,
          mutedChannels: d,
          scrollToChannel: A,
          selectedChannelId: y,
          selectedVoiceChannelId: M,
          voiceStates: h,
          rtcConnectedChannelId: V,
          rtcDesyncedVoiceStatesCount: B,
          collapsedChannels: O,
          collapseMuted: u,
          guildReadStateSentinel: P,
          permissionVersion: L,
          categoryCollapseVersion: b,
          embeddedAppsByChannel: D,
          activeEventsByChannel: w,
          showNewUnreadsBar: k,
          optInEnabled: !1,
        });
      }
    },
    669083: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return A;
        },
      }),
        n(47120);
      var i,
        s,
        a = n(735250),
        r = n(470079),
        o = n(442837),
        l = n(481060),
        c = n(13245),
        d = n(600164),
        u = n(212632),
        h = n(906467),
        p = n(556296),
        f = n(237997),
        _ = n(998502),
        E = n(13140),
        g = n(658785),
        m = n(981631),
        I = n(689938),
        Z = n(635958),
        v = n(113207);
      function S(e, t, n) {
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
          { value: m.ipw.LARGE, name: I.Z.Messages.AVATAR_SIZE_OPTION_LARGE },
          { value: m.ipw.SMALL, name: I.Z.Messages.AVATAR_SIZE_OPTION_SMALL },
        ],
        x = () => [
          { value: m.wC$.ALWAYS, name: I.Z.Messages.DISPLAY_OPTION_ALWAYS },
          {
            value: m.wC$.ONLY_WHILE_SPEAKING,
            name: I.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
          },
          { value: m.wC$.NEVER, name: I.Z.Messages.DISPLAY_OPTION_NEVER },
        ],
        N = () => [
          { value: m.OYC.ALWAYS, name: I.Z.Messages.DISPLAY_OPTION_ALWAYS },
          {
            value: m.OYC.ONLY_WHILE_SPEAKING,
            name: I.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
          },
        ];
      function T() {
        let e = f.Z.getNotificationPositionMode(),
          t = e !== m._vf.DISABLED,
          n = p.Z.getOverlayKeybind(),
          i = p.Z.getOverlayChatKeybind();
        c.Z.track(m.rMx.OVERLAY_SETTINGS_UPDATED, {
          enabled: !0,
          notifications_enabled: t,
          notifications_position: t ? e : null,
          text_notifications_mode: f.Z.getTextChatNotificationMode(),
          text_opacity_slider: f.Z.getTextWidgetOpacity(),
          hotkey: null != n ? (0, E.BB)(n.shortcut) : null,
          text_activation_hotkey: null != i ? (0, E.BB)(i.shortcut) : null,
        });
      }
      class O extends r.PureComponent {
        componentDidMount() {
          c.Z.track(m.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null,
          });
        }
        handleChangeNotificationPositionMode(e, t) {
          c.Z.setNotificationPositionMode(t), T();
        }
        handleChangeAvatarSizeMode(e) {
          let { value: t } = e;
          c.Z.setAvatarSizeMode(t);
        }
        handleChangeDisplayNameMode(e) {
          let { value: t } = e;
          c.Z.setDisplayNameMode(t);
        }
        handleChangeDisplayUserMode(e) {
          let { value: t } = e;
          c.Z.setDisplayUserMode(t);
        }
        renderHeader() {
          return (0, a.jsxs)(d.Z, {
            direction: d.Z.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: Z.header,
            children: [
              (0, a.jsxs)(d.Z, {
                children: [
                  (0, a.jsx)(l.FormTitle, {
                    className: Z.headerTitle,
                    tag: "h1",
                    children: I.Z.Messages.OVERLAY_SETTINGS_TITLE,
                  }),
                  (0, a.jsx)(l.ModalCloseButton, {
                    className: Z.headerClose,
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
              ? (0, a.jsx)(l.TabBar.Item, {
                  id: "DEVELOPER",
                  className: Z.tabBarItem,
                  children: "Developer",
                })
              : null;
          return (0, a.jsxs)(l.TabBar, {
            selectedItem: e,
            type: "top",
            className: Z.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
              (0, a.jsx)(l.TabBar.Item, {
                id: "GENERAL",
                className: Z.tabBarItem,
                children: I.Z.Messages.OVERLAY_SETTINGS_GENERAL_TAB,
              }),
              (0, a.jsx)(l.TabBar.Item, {
                id: "VOICE",
                className: Z.tabBarItem,
                children: I.Z.Messages.OVERLAY_SETTINGS_VOICE_TAB,
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
          return (0, a.jsx)(
            l.ModalContent,
            { className: Z.content, children: e },
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
            s = t !== m._vf.DISABLED;
          return (0, a.jsxs)(r.Fragment, {
            children: [
              (0, a.jsx)(l.FormItem, {
                title: I.Z.Messages.FORM_LABEL_NOTIFICATION_POSITION,
                className: v.marginBottom20,
                children: (0, a.jsx)(u.Z, {
                  position: t,
                  onChange: this.handleChangeNotificationPositionMode,
                }),
              }),
              (0, a.jsx)(l.FormSwitch, {
                value: s && e === m.Ypu.ENABLED,
                onChange: this.handleToggleTextChatNotifications,
                disabled: !s,
                hideBorder: !0,
                children:
                  I.Z.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS,
              }),
              i &&
                (0, a.jsx)(l.FormSwitch, {
                  value: n,
                  onChange: (e) => c.Z.setShowKeybindIndicators(e),
                  hideBorder: !0,
                  children:
                    I.Z.Messages.FORM_LABEL_OVERLAY_SHOW_MUTE_DEAFEN_KEYBINDS,
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
          return (0, a.jsxs)(r.Fragment, {
            children: [
              (0, a.jsx)(l.FormItem, {
                title: I.Z.Messages.FORM_LABEL_AVATAR_SIZE,
                className: v.marginBottom20,
                children: (0, a.jsx)(l.RadioGroup, {
                  onChange: this.handleChangeAvatarSizeMode,
                  options: C(),
                  value: e,
                  size: l.RadioGroup.Sizes.SMALL,
                }),
              }),
              (0, a.jsx)(l.FormItem, {
                title: I.Z.Messages.FORM_LABEL_DISPLAY_NAMES,
                className: v.marginBottom20,
                children: (0, a.jsx)(l.RadioGroup, {
                  onChange: this.handleChangeDisplayNameMode,
                  options: x(),
                  value: t,
                  size: l.RadioGroup.Sizes.SMALL,
                }),
              }),
              (0, a.jsx)(l.FormItem, {
                title: I.Z.Messages.FORM_LABEL_DISPLAY_USERS,
                className: v.marginBottom20,
                children: (0, a.jsx)(l.RadioGroup, {
                  onChange: this.handleChangeDisplayUserMode,
                  options: N(),
                  value: n,
                  size: l.RadioGroup.Sizes.SMALL,
                }),
              }),
            ],
          });
        }
        renderDeveloperSettings() {
          return (0, a.jsx)(r.Fragment, {
            children: (0, a.jsx)(l.FormItem, {
              title: "Crashes",
              className: v.marginBottom20,
              children: (0, a.jsx)(l.SingleSelect, {
                value: void 0,
                options: [
                  { value: void 0, label: "Native crash" },
                  { value: 0, label: "Abort()" },
                  { value: 1, label: "SIGSEGV()" },
                  { value: 2, label: "EXCEPTION_ACCESS_VIOLATION" },
                  { value: 3, label: "RaiseFailFastException" },
                  { value: 4, label: "Out of Memory" },
                ],
                onChange: (e) => null != e && _.ZP.crash(e),
              }),
            }),
          });
        }
        render() {
          return (0, a.jsxs)(l.ModalRoot, {
            "aria-label": I.Z.Messages.OVERLAY_SETTINGS_TITLE,
            transitionState: l.ModalTransitionState.ENTERED,
            children: [this.renderHeader(), this.renderBody()],
          });
        }
        constructor(...e) {
          super(...e),
            S(this, "state", { selectedSection: "GENERAL" }),
            S(this, "handleSelectSection", (e) => {
              this.setState({ selectedSection: e });
            }),
            S(this, "handleToggleTextChatNotifications", () => {
              let { ENABLED: e, DISABLED: t } = m.Ypu,
                n = this.props.textChatNotificationMode === e ? t : e;
              c.Z.setTextChatNotificationMode(n), T();
            });
        }
      }
      function A(e) {
        let { onClose: t } = e,
          {
            avatarSizeMode: n,
            displayNameMode: i,
            displayUserMode: s,
            notificationPositionMode: r,
            textChatNotificationMode: l,
            shouldShowKeybindIndicators: c,
          } = (0, o.cj)([f.Z], () => ({
            avatarSizeMode: f.Z.getAvatarSizeMode(),
            displayNameMode: f.Z.getDisplayNameMode(),
            displayUserMode: f.Z.getDisplayUserMode(),
            notificationPositionMode: f.Z.getNotificationPositionMode(),
            textChatNotificationMode: f.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: f.Z.showKeybindIndicators,
          })),
          { showKeybindIndicators: d } = g.Z.useExperiment({
            location: "Overlay Settings",
          });
        return (0, a.jsx)(O, {
          onClose: t,
          avatarSizeMode: n,
          displayNameMode: i,
          displayUserMode: s,
          notificationPositionMode: r,
          textChatNotificationMode: l,
          shouldShowKeybindIndicators: c,
          showKeybindIndicators: d,
        });
      }
    },
    483962: function (e, t, n) {
      "use strict";
      var i = n(735250),
        s = n(470079),
        a = n(442837),
        r = n(831218),
        o = n(840780),
        l = n(51596),
        c = n(905423),
        d = n(237997),
        u = n(145597),
        h = n(981631),
        p = n(689938),
        f = n(53800);
      let _ = () => (0, l.$Z)("DM_SEARCH");
      t.Z = s.memo(function () {
        let e = (0, a.e7)([d.Z], () =>
            d.Z.isUILocked((0, u.QF)()) ? "true" : "false",
          ),
          t = (0, c.Z)((e) => {
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
                onClick: _,
                children: p.Z.Messages.DM_SEARCH_PLACEHOLDER,
              }),
            }),
            (0, i.jsx)(r.Z, {
              padding: 8,
              theme: h.BRd.DARK,
              version: e,
              selectedChannelId: t,
            }),
            (0, i.jsx)("section", {
              className: f.panels,
              "aria-label": p.Z.Messages.ACCOUNT_A11Y_LABEL,
              children: (0, i.jsx)(o.Z, { guildId: null }),
            }),
          ],
        });
      });
    },
    711553: function (e, t, n) {
      "use strict";
      var i = n(735250);
      n(470079);
      var s = n(120356),
        a = n.n(s),
        r = n(481060),
        o = n(518084),
        l = n(981631),
        c = n(689938),
        d = n(230519);
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
                  className: a()(d.header, d.draggableStartArea),
                  onMouseDown: p,
                  children: [
                    (0, i.jsx)(o.ZP.Content, {
                      className: a()(d.headerTitle, d.draggableStartArea),
                      dynamicSize: !0,
                      children: n,
                    }),
                    (0, i.jsx)(o.ZP.Content, {
                      children: (0, i.jsx)(r.Popout, {
                        position: "right",
                        renderPopout: null != h ? h : l.dG4,
                        autoInvert: !1,
                        children: (e) =>
                          (0, i.jsx)(o.ZP.Icon, {
                            ...e,
                            icon: r.SettingsIcon,
                            label: c.Z.Messages.SETTINGS,
                          }),
                      }),
                    }),
                  ],
                })
              : s),
          (0, i.jsxs)("div", {
            className: d.sidebar,
            children: [
              t,
              (0, i.jsx)("div", { className: d.children, children: u }),
            ],
          })
        );
      };
    },
    352527: function (e, t, n) {
      "use strict";
      var i,
        s,
        a,
        r,
        o = n(442837),
        l = n(570140);
      let c = !1,
        d = !1;
      class u extends (r = o.ZP.Store) {
        get keepOpen() {
          return d;
        }
        get enabled() {
          return c;
        }
      }
      (a = "SoundboardOverlayStore"),
        (s = "displayName") in (i = u)
          ? Object.defineProperty(i, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[s] = a),
        (t.Z = new u(l.Z, {
          SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
            if (((c = e.enabled), e.enabled)) {
              var t;
              d = null !== (t = e.keepOpen) && void 0 !== t && t;
            }
          },
        }));
    },
    261435: function (e, t, n) {
      "use strict";
      n(47120), n(653041);
      var i,
        s,
        a,
        r,
        o,
        l,
        c,
        d,
        u = n(512722),
        h = n.n(u),
        p = n(772848),
        f = n(442837),
        _ = n(570140),
        E = n(13245),
        g = n(836932),
        m = n(175553),
        I = n(158979),
        Z = n(181912),
        v = n(791288),
        S = n(194295),
        C = n(998033),
        x = n(181364),
        N = n(435064),
        T = n(668761),
        O = n(86071),
        A = n(358446),
        y = n(695346),
        R = n(314897),
        M = n(592125),
        L = n(292959),
        b = n(158776),
        P = n(944486),
        D = n(885110),
        j = n(246946),
        w = n(594174),
        k = n(974180),
        V = n(237997),
        B = n(70956),
        U = n(150097),
        z = n(129724),
        G = n(449224),
        Y = n(981631),
        W = n(987650),
        F = n(689938);
      ((r = i || (i = {}))[(r.GENERIC = 0)] = "GENERIC"),
        (r[(r.TEXT = 1)] = "TEXT"),
        (r[(r.INCOMING_CALL = 2)] = "INCOMING_CALL"),
        ((o = s || (s = {}))[(o.NORMAL = 0)] = "NORMAL"),
        (o[(o.HIGH = 1)] = "HIGH"),
        (o[(o.URGENT = 2)] = "URGENT");
      let H = 5 * B.Z.Millis.SECOND,
        K = 8 * B.Z.Millis.SECOND,
        X = 30 * B.Z.Millis.SECOND,
        Q = Object.freeze({
          priority: 0,
          duration: H,
          expirationExternallyManaged: !1,
          type: 0,
        }),
        J = [],
        q = (e, t, n) => {
          let i = t ? Y._1z.TIMED_OUT : Y._1z.DISMISSED;
          return setTimeout(
            () => E.Z.updateNotificationStatus(e, i),
            null != n ? n : H,
          );
        };
      function $(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Y._1z.DISMISSED;
        if (null == e) return !1;
        let n = J.findIndex((t) => t.id === e);
        if (-1 === n) return !1;
        let i = J[n];
        clearTimeout(i.timerId),
          (J = [...J]),
          t === Y._1z.DISMISSED ? J.splice(n, 1) : (J[n] = { ...i, status: t });
      }
      function ee(e) {
        let t = J.length;
        return (
          (J = J.filter((t) => 1 !== t.type || t.channelId !== e || !1))
            .length !== t
        );
      }
      function et(e) {
        let t = J.find((t) => 2 === t.type && t.channelId === e);
        return null != t ? t.id : null;
      }
      function en(e, t) {
        let n = { ...Q, ...t };
        if (2 !== n.priority && !V.Z.isInstanceFocused()) return null;
        let i = (0, p.Z)(),
          s = {
            id: i,
            status: Y._1z.ACTIVE,
            timerId: q(i, n.expirationExternallyManaged, n.duration),
            props: e,
            ...n,
          },
          a = (J = [...J]).findIndex((e) => e.priority <= n.priority);
        return (
          -1 === a ? J.push(s) : J.splice(a, 0, s),
          J.length > 10 && clearTimeout(J.pop().timerId),
          i
        );
      }
      function ei(e) {
        let { channelId: t, ringing: n } = e,
          i = et(t);
        if (!n.includes(R.default.getId())) return $(i);
        if (null != i) return !1;
        let s = M.Z.getChannel(t);
        if (
          null == s ||
          !s.isPrivate() ||
          D.Z.getStatus() === Y.Skl.DND ||
          y.QZ.getSetting()
        )
          return !1;
        let a = J.find(
          (e) =>
            1 === e.type && e.channelId === t && e.messageType === Y.uaV.CALL,
        );
        null != a && $(a.id),
          en((0, Z.Z)(s), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: s.id,
          });
      }
      class es extends (a = f.ZP.Store) {
        initialize() {
          this.waitFor(M.Z, w.default);
        }
        getNotifications() {
          return J;
        }
      }
      (d = "OverlayNotificationsStore"),
        (c = "displayName") in (l = es)
          ? Object.defineProperty(l, c, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[c] = d),
        (t.Z = new es(
          _.Z,
          __OVERLAY__
            ? {
                OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
                  let { notificationId: t, status: n } = e;
                  $(t, n);
                },
                OVERLAY_MOUNTED: function (e) {
                  let { nudge: t } = e,
                    n = (function (e) {
                      switch (e.type) {
                        case W.nc.GO_LIVE_VOICE:
                        case W.nc.GO_LIVE_NON_VOICE:
                          return (0, I.Z)(e);
                        case W.nc.KEYBIND_INDICATORS:
                          return (0, A.Z)(e);
                        case W.nc.NEWS:
                        default:
                          return (0, x.Z)(e);
                      }
                    })(t);
                  null != n && en(n, { priority: 2, duration: K });
                },
                OVERLAY_SET_INPUT_LOCKED: function (e) {
                  let { locked: t } = e;
                  if (t) return !1;
                  J = J.map((e) =>
                    e.status === Y._1z.ACTIVE
                      ? (clearTimeout(e.timerId),
                        {
                          ...e,
                          timerId: q(e.id, e.expirationExternallyManaged),
                        })
                      : e,
                  );
                },
                MESSAGE_CREATE: function (e) {
                  var t, n, i;
                  let { channelId: s, message: a } = e,
                    r = M.Z.getChannel(s),
                    o = w.default.getUser(
                      null === (t = a.author) || void 0 === t ? void 0 : t.id,
                    );
                  if (null == r || null == o) return !1;
                  if (
                    (null === (n = a.activity) || void 0 === n
                      ? void 0
                      : n.type) === Y.mFx.JOIN ||
                    (null === (i = a.activity) || void 0 === i
                      ? void 0
                      : i.type) === Y.mFx.JOIN_REQUEST
                  ) {
                    if (!(0, U.eF)(a, s, !0, !0)) return !1;
                    let e = (function (e, t, n) {
                      let i, s;
                      if (
                        (h()(
                          null != t.activity,
                          "received null message activity",
                        ),
                        n.id === R.default.getId())
                      )
                        return !1;
                      let a = G.Z.getGame();
                      if (null == a) return !1;
                      switch (t.activity.type) {
                        case Y.mFx.JOIN:
                          if (
                            null ==
                              (i = b.Z.getApplicationActivity(n.id, a.id)) ||
                            null == i.party ||
                            i.party.id !== t.activity.party_id
                          )
                            return !1;
                          s = (0, g.Z)(e, t, n, a, i);
                          break;
                        case Y.mFx.JOIN_REQUEST:
                          if (
                            null == (i = D.Z.getApplicationActivity(a.id)) ||
                            null == i.party ||
                            i.party.id !== t.activity.party_id
                          )
                            return !1;
                          s = (0, S.Z)(e, n, a, i);
                      }
                      if (null == s) return !1;
                      let r = en(s, {
                        priority: 2,
                        expirationExternallyManaged: !0,
                        channelId: e.id,
                      });
                      return null != r && q(r, !1, X), !0;
                    })(r, a, o);
                    if (!1 !== e) return e;
                  }
                  if (
                    ((!V.Z.isInstanceUILocked() || V.Z.isPinned(Y.Odu.TEXT)) &&
                      s === P.Z.getChannelId()) ||
                    V.Z.getTextChatNotificationMode() === Y.Ypu.DISABLED ||
                    j.Z.disableNotifications ||
                    !(0, U.eF)(a, s)
                  )
                    return !1;
                  let l = !L.Z.isSoundDisabled(k.Ay);
                  en((0, C.Z)(r, a, o, l), {
                    type: 1,
                    channelId: r.id,
                    messageType: a.type,
                  });
                },
                CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  return null != t && ee(t);
                },
                MESSAGE_ACK: function (e) {
                  let { channelId: t } = e;
                  return ee(t);
                },
                CALL_CREATE: ei,
                CALL_UPDATE: ei,
                CALL_DELETE: function (e) {
                  let { channelId: t } = e;
                  $(et(t));
                },
                ACTIVITY_USER_ACTION: function (e) {
                  let t,
                    { actionType: n, user: i, applicationId: s } = e,
                    a = G.Z.getGame();
                  if (null == a || a.id !== s) return !1;
                  if (n === Y.mFx.JOIN) t = (0, m.Z)(i, a);
                  if (null == t) return !1;
                  en(t, { priority: 2, type: 0 });
                },
                CLIPS_SAVE_CLIP_START: function () {
                  en(
                    (0, T.f)(F.Z.Messages.CLIPS_SAVE_START_NOTIFICATION_TITLE),
                  );
                },
                CLIPS_SAVE_CLIP: function () {
                  en(
                    (0, T.f)(
                      F.Z.Messages.CLIPS_NOTIFICATION_TITLE.format({
                        duration: (0, z.A)(
                          N.Z.getSettings().clipsLength / 1e3,
                          !0,
                        ),
                      }),
                    ),
                  );
                },
                CLIPS_SAVE_CLIP_ERROR: function () {
                  en(
                    (0, T.f)(F.Z.Messages.CLIPS_SAVE_ERROR_NOTIFICATION_TITLE),
                  );
                },
                STREAM_START: function (e) {
                  let t = (0, T.y)();
                  null != t && en(t);
                },
                OVERLAY_CONTENT_INVENTORY_READY: function (e) {
                  let { contentInventoryEntries: t } = e;
                  if (0 === t.length) return;
                  let n = G.Z.getGame();
                  if (null == n) return;
                  let { enabled: i } = O.Z.getCurrentConfig(
                    { location: "OverlayNotificationsStore" },
                    { autoTrackExposure: !0 },
                  );
                  i &&
                    en((0, v.Z)(n, t), {
                      priority: 2,
                      type: 0,
                      expirationExternallyManaged: !0,
                      duration: 30 * B.Z.Millis.SECOND,
                    });
                },
              }
            : {},
        ));
    },
    254761: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(735250);
      n(470079);
      var s = n(325767);
      function a(e) {
        let {
          width: t = 16,
          height: n = 16,
          color: a = "currentColor",
          foreground: r,
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, s.Z)(o),
          width: t,
          height: n,
          viewBox: "0 0 430 430",
          children: (0, i.jsx)("path", {
            className: r,
            color: a,
            d: "M187.9,308.1c17.9-13.5,43-13.7,61.1-0.3c1.9,1.3,2.4,4,1.1,5.8s-3.7,2.3-5.6,0.9l-0.3-0.3 c-15.1-11.3-36.3-11.2-51.3,0.1c-0.8,0.5-1.6,0.8-2.4,0.8c-1.2,0-2.4-0.5-3.2-1.6C185.8,312,186.2,309.3,187.9,308.1 M124.4,236 c11.7,0,21.3,9.4,21.3,21.1s-9.4,21.1-21.1,21.1c-11.7,0-21.1-9.4-21.1-21.1C103.1,245.6,112.7,236,124.4,236 M315,236 c11.7,0,21.3,9.4,21.3,21.3c0,11.7-9.4,21.1-21.1,21.1s-21.1-9.4-21.1-21.1C294,245.6,303.5,236,315,236 M347.8,307.2 c2-0.3,4-0.7,6-1.2c2.3-0.5,4.4,0.7,5,2.9c0.7,2.1-0.7,4.4-2.8,5c-2.3,0.7-4.6,1.1-7,1.3c-0.1,0-0.3,0-0.5,0c-2,0-3.7-1.5-4-3.6 C344.1,309.7,345.7,307.6,347.8,307.2 M128.1,87.2l-0.3,0.1c-14.3,5.8-23.6,19.5-23.6,35.1c0,8.5,2.9,16.6,8.5,23.5 c0,0,0,0.1,0.1,0.1l0,0c0.1,0.1,11.3,15.3,31.4,16.9c2.3,0.1,3.9,2.1,3.7,4.4c-0.1,2.1-2,3.7-4,3.7c-0.1,0-0.3,0-0.3,0 c-18.9-1.5-30.8-12.8-35.3-17.8l-4.6,1.7c-0.1,0.1-0.3,0.1-0.5,0.3c-25.6,9.6-42.2,32.1-42.2,57.5c0,10.6,3.1,21.1,8.6,30.4 c0.7,1.1,0.8,2.3,0.4,3.3c-0.3,1.2-1.2,2-2.3,2.5C36.2,263.1,16,293.6,16,327c0,47.6,39.9,86.2,88.9,86.2c32.4,0,68-6.2,106.1-18.5 c3.1-1.3,39.5-16.7,91.1-14.5c2.3,0.1,4,2,3.9,4.3c-0.1,2.3-1.9,4.1-4.3,3.9c-35.6-1.6-64,5.7-78.1,10.4 c26.2,9.6,63.8,14.5,111.7,14.5c43.3,0,78.6-35.2,78.6-78.6c0-20.3-8-39.7-22.1-54.3c-3.2,7.6-10.2,20.2-23.2,28.2 c-0.7,0.4-1.3,0.7-2.1,0.7c-1.3,0-2.7-0.7-3.5-1.9c-1.2-1.9-0.5-4.4,1.3-5.6c16.2-10,21.8-28.7,22.1-29.6 c4.1-17.7,2.4-35.6-4.9-53.3c-4.1-10-10.1-19-17.8-26.8c-1.5-1.6-13.5-11.3-13.5-11.3c-3.6,6.9-12.8,19-33.6,23.6 c-0.3,0-0.5,0.1-0.8,0.1c-1.9,0-3.6-1.3-4-3.2c-0.5-2.3,0.9-4.4,3.1-4.8c23.9-5.2,29.2-21.7,29.6-22.7c3.5-13,2.3-26.4-3.5-39.6 c-8.2-18.9-25.9-32.7-47.4-37.2c-3.5,5.2-12.8,16.1-31.6,20.3c-0.3,0.1-0.7,0.1-0.9,0.1c-1.9,0-3.6-1.3-4-3.2 c-0.5-2.3,0.8-4.4,3.1-4.9c20.2-4.6,27.2-17.7,27.8-18.7c2.8-6.4,2.8-13.7,0.3-21.4c-4.6-14.1-15.9-16.9-31.6-20.9 c-16.9-4.1-37.6-9.3-55.7-31.5c-15.7,10.9-30.8,33.3-29,50.7c1.1,9.8,7.4,16.9,19,20.9c2.1,0.8,3.2,3.1,2.5,5.2 c-0.8,2.1-3.1,3.2-5.2,2.5c-11.8-4.1-18.1-10.5-21.4-17C167,79.1,141.9,80.6,128.1,87.2z",
          }),
        });
      }
    },
    129724: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return r;
        },
      });
      var i = n(913527),
        s = n.n(i),
        a = n(689938);
      function r(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : a.Z.Messages.FORM_LABEL_OFF,
          i = s().duration(e, "seconds");
        if (i.days() > 0)
          return (
            t ? a.Z.Messages.DURATION_DAYS_SHORT : a.Z.Messages.DURATION_DAYS
          ).format({ days: i.days() });
        if (i.hours() > 0)
          return (
            t ? a.Z.Messages.DURATION_HOURS_SHORT : a.Z.Messages.DURATION_HOURS
          ).format({ hours: i.hours() });
        if (i.minutes() > 0)
          return (
            t
              ? a.Z.Messages.DURATION_MINUTES_SHORT
              : a.Z.Messages.DURATION_MINUTES
          ).format({ minutes: i.minutes() });
        else if (e > 0)
          return (
            t
              ? a.Z.Messages.DURATION_SECONDS_SHORT
              : a.Z.Messages.DURATION_SECONDS
          ).format({ seconds: i.seconds() });
        else return t ? a.Z.Messages.FORM_LABEL_OFF : n;
      }
    },
    57266: function (e, t, n) {
      "use strict";
      e.exports = { footer: "footer_f8c8a1", ctaButton: "ctaButton_f8c8a1" };
    },
    810489: function (e, t, n) {
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
    242319: function (e, t, n) {
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
    846337: function (e, t, n) {
      "use strict";
      e.exports = { key: "key_a384c4" };
    },
    157004: function (e, t, n) {
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
        themeBrand: "themeBrand_f6b647",
        innerText: "innerText_f6b647",
        themeDanger: "themeDanger_f6b647",
      };
    },
    167740: function (e, t, n) {
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
    945768: function (e, t, n) {
      "use strict";
      e.exports = {
        controls: "controls_c5dd04",
        unpinned: "unpinned_c5dd04",
        content: "content_c5dd04",
        strikethrough: "strikethrough_c5dd04",
      };
    },
    372049: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_e4a90f",
        stackTrace: "stackTrace_e4a90f",
        stackTraceCode: "stackTraceCode_e4a90f",
        code: "code_e4a90f",
        notificationIcon: "notificationIcon_e4a90f",
      };
    },
    925790: function (e, t, n) {
      "use strict";
      e.exports = { base: "base_aabd07", widget: "widget_aabd07" };
    },
    240038: function (e, t, n) {
      "use strict";
      e.exports = { wrapper: "wrapper_f9d934" };
    },
    389439: function (e, t, n) {
      "use strict";
      e.exports = {
        keybindIndicator: "keybindIndicator_a49331",
        keybindIcon: "keybindIcon_a49331",
        keybindIndicatorText: "keybindIndicatorText_a49331",
      };
    },
    240209: function (e, t, n) {
      "use strict";
      e.exports = {
        notificationBody: "notificationBody_a13960",
        iconContainer: "iconContainer_a13960",
      };
    },
    668697: function (e, t, n) {
      "use strict";
      e.exports = { notificationContainer: "notificationContainer_bcc984" };
    },
    455178: function (e, t, n) {
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
    310906: function (e, t, n) {
      "use strict";
      e.exports = {
        overlay: "overlay_e17343",
        overlayBackground: "overlayBackground_e17343",
        overlayActive: "overlayActive_e17343",
        overlayLocked: "overlayLocked_e17343",
        previewMode: "previewMode_e17343",
        closeContainer: "closeContainer_e17343",
        invalidContainer: "invalidContainer_e17343",
        inactiveContainer: "inactiveContainer_e17343",
        layoutLocked: "layoutLocked_e17343",
        layoutUnlocked: "layoutUnlocked_e17343 layoutLocked_e17343",
        previewingInGameHeader: "previewingInGameHeader_e17343",
      };
    },
    425423: function (e, t, n) {
      "use strict";
      e.exports = { canvas: "canvas_b7bd4c" };
    },
    716079: function (e, t, n) {
      "use strict";
      e.exports = { widget: "widget_a7182b" };
    },
    619267: function (e, t, n) {
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
    64437: function (e, t, n) {
      "use strict";
      e.exports = {
        headerContainer: "headerContainer_c6d3b6",
        opacityHeader: "opacityHeader_c6d3b6 " + n("619267").header,
        dragIcon: "dragIcon_c6d3b6",
      };
    },
    824425: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_f86a0e",
        title: "title_f86a0e",
        sliderContainer: "sliderContainer_f86a0e",
      };
    },
    5239: function (e, t, n) {
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
        faded: "faded_cfed93",
        preview: "preview_cfed93",
        hidden: "hidden_cfed93",
        bottomMargin: "bottomMargin_cfed93",
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
    344037: function (e, t, n) {
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
    867144: function (e, t, n) {
      "use strict";
      e.exports = {
        guildHeader: "guildHeader_c0cc4b",
        guildHeaderInner: "guildHeaderInner_c0cc4b",
        channelList: "channelList_c0cc4b",
        panels: "panels_c0cc4b",
      };
    },
    635958: function (e, t, n) {
      "use strict";
      e.exports = {
        header: "header_ea2748",
        headerTitle: "headerTitle_ea2748",
        headerClose: "headerClose_ea2748",
        tabBarItem: "tabBarItem_ea2748",
        content: "content_ea2748",
      };
    },
    53800: function (e, t, n) {
      "use strict";
      e.exports = {
        privateChannels: "privateChannels_ec7a6d",
        searchBar: "searchBar_ec7a6d",
        searchBarComponent: "searchBarComponent_ec7a6d",
        panels: "panels_ec7a6d",
      };
    },
    230519: function (e, t, n) {
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
//# sourceMappingURL=ec4d17532a73b077a738.js.map
