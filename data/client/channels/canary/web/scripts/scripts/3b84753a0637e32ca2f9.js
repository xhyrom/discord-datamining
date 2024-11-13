(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17157"],
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
            l = n ? n[0] : t.charAt(0),
            o = n ? i(n, 1).join("") : t.slice(1);
          return l[e]() + o;
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
        l = "(?:" + n + "|" + i + ")?",
        o = "[\\ufe0e\\ufe0f]?",
        c = "(?:\\u200d(?:" + [s, r, a].join("|") + ")" + o + l + ")*",
        d = RegExp(
          i +
            "(?=" +
            i +
            ")|" +
            ("(?:" + [s + n + "?", n, r, a, "[" + t + "]"].join("|") + ")") +
            (o + l + c),
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
        r =
          "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        a = "['’]",
        l = "[" + r + "]",
        o = "[" + i + "]",
        c = "[^" + t + r + "\\d+" + n + i + s + "]",
        d = "(?:\ud83c[\udde6-\uddff]){2}",
        u = "[\ud800-\udbff][\udc00-\udfff]",
        h = "[" + s + "]",
        p = "(?:" + o + "|" + c + ")",
        f = "(?:" + h + "|" + c + ")",
        m = "(?:" + a + "(?:d|ll|m|re|s|t|ve))?",
        g = "(?:" + a + "(?:D|LL|M|RE|S|T|VE))?",
        v =
          "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
        _ = "[\\ufe0e\\ufe0f]?",
        E =
          "(?:\\u200d(?:" +
          ["[^" + t + "]", d, u].join("|") +
          ")" +
          _ +
          v +
          ")*",
        x = "(?:" + ["[" + n + "]", d, u].join("|") + ")" + (_ + v + E),
        Z = RegExp(
          [
            h + "?" + o + "+" + m + "(?=" + [l, h, "$"].join("|") + ")",
            f + "+" + g + "(?=" + [l, h + p, "$"].join("|") + ")",
            h + "?" + p + "+" + m,
            h + "+" + g,
            "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            "\\d+",
            x,
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
    296507: function (e) {
      "use strict";
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      "use strict";
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    588705: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return C;
        },
      }),
        n(411104);
      var i = n(200651),
        s = n(192379),
        r = n(442837),
        a = n(481060),
        l = n(388905),
        o = n(686546),
        c = n(925329),
        d = n(372769),
        u = n(726745),
        h = n(973616),
        p = n(131704),
        f = n(601964),
        m = n(598077),
        g = n(594174),
        v = n(51144),
        _ = n(981631),
        E = n(888592),
        x = n(245335),
        Z = n(388032),
        S = n(658797);
      let C = () =>
          (0, i.jsxs)(s.Fragment, {
            children: [
              (0, i.jsx)(l.qE, {
                src: null,
                size: a.AvatarSizes.DEPRECATED_SIZE_100,
                className: S.avatar,
              }),
              (0, i.jsx)(l.DK, { children: Z.intl.string(Z.t["3rE1Pz"]) }),
              (0, i.jsx)(l.Dx, {
                className: S.inviteResolvingGuildName,
                children: Z.intl.string(Z.t.ZTNur6),
              }),
            ],
          }),
        I = (e) => {
          let { guild: t, user: n, application: s, compact: r } = e;
          if (null != s)
            return (0, i.jsx)(c.Z, {
              className: S.appIcon,
              game: s,
              size: S.appIconSize,
            });
          if (null != n)
            return (0, i.jsx)(l.qE, {
              src: null != n ? n.getAvatarURL(void 0, 80) : null,
              size: a.AvatarSizes.SIZE_80,
              className: r ? S.compactAvatar : S.avatar,
            });
          if (null != t)
            return (0, i.jsx)(o.ZP, {
              mask: o.ZP.Masks.SQUIRCLE,
              width: 64,
              height: 64,
              className: S.guildIcon,
              children: (0, i.jsx)(l.Vj, {
                guild: t,
                size: l.Vj.Sizes.LARGER,
                animate: !0,
              }),
            });
          else return null;
        };
      t.Z = (e) => {
        var t;
        let n,
          s,
          o,
          {
            invite: c,
            disableUser: C = !1,
            error: y,
            flatActivityCount: N = !1,
            isRegister: T = !1,
          } = e,
          { currentUser: b, multiAccounts: O } = (0, r.cj)(
            [u.Z, g.default],
            () => ({
              currentUser: g.default.getCurrentUser(),
              multiAccounts: u.Z.getUsers(),
            }),
          );
        if (null == c) return null;
        let j = null != c.guild ? new f.ZP(c.guild) : null,
          A = null != c.channel ? (0, p.jD)(c.channel) : null,
          M =
            null != c.target_application ? new h.Z(c.target_application) : null,
          P = C || null == c.inviter ? null : new m.Z(c.inviter),
          L =
            !(
              (null != c.approximate_member_count &&
                c.approximate_member_count > 100) ||
              (null != j && j.hasFeature(_.oNc.COMMUNITY))
            ) && null != P,
          R = null,
          w = !1;
        if (null != j)
          (R =
            null == P
              ? Z.intl.string(Z.t["3rE1Pz"])
              : Z.intl.formatToPlainString(Z.t["5u47vb"], {
                  username: v.ZP.getFormattedName(P),
                })),
            c.target_type === x.Iq.STREAM &&
              null != c.target_user &&
              (R = Z.intl.formatToPlainString(Z.t.x2L32d, {
                username: v.ZP.getFormattedName(c.target_user),
              })),
            c.target_type === x.Iq.EMBEDDED_APPLICATION &&
              null != c.target_application &&
              (R =
                null != P
                  ? Z.intl.formatToPlainString(Z.t.UW1Cam, {
                      username: v.ZP.getFormattedName(P),
                    })
                  : Z.intl.string(Z.t.ENSuNz)),
            L &&
              null == M &&
              (n = (0, i.jsx)(l.Vj, {
                className: S.icon,
                guild: j,
                size: l.Vj.Sizes.SMALL,
              })),
            (s = j.name),
            null != M &&
              ((s = M.name),
              (o = (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)(l.DK, {
                    className: S.appIn,
                    children: Z.intl.string(Z.t["3gg9fH"]),
                  }),
                  (0, i.jsxs)("div", {
                    className: S.guildContainer,
                    children: [
                      (0, i.jsx)(l.Vj, { guild: j, size: l.Vj.Sizes.SMALL }),
                      (0, i.jsx)(a.Text, {
                        tag: "span",
                        variant: "text-lg/normal",
                        color: "header-primary",
                        className: S.appGuildName,
                        children: j.name,
                      }),
                    ],
                  }),
                ],
              })));
        else if (null != A) {
          if (null == P) throw Error("no inviter in group DM invite");
          let e = v.ZP.getFormattedName(P);
          null != A.name && "" !== A.name
            ? ((R = Z.intl.formatToPlainString(Z.t["5u47vb"], { username: e })),
              (s = A.name),
              null != A.icon &&
                (n = (0, i.jsx)(l.MC, {
                  channel: A,
                  size: a.AvatarSizes.SIZE_32,
                })))
            : ((R = Z.intl.string(Z.t.OsdY8P)), (s = e));
        } else if (null != P) {
          let e = v.ZP.getFormattedName(P, !0);
          (s = Z.intl.formatToPlainString(Z.t["4aF92d"], { username: e })),
            (w = !0),
            (o =
              null != y
                ? null
                : (0, i.jsx)(l.DK, {
                    className: S.directInviteSubTitle,
                    children: T
                      ? Z.intl.format(Z.t["6r4JiY"], { username: e })
                      : Z.intl.format(Z.t.Quj7HR, { username: e }),
                  }));
        }
        return (0, i.jsxs)("div", {
          className: S.container,
          children: [
            (0, i.jsx)(I, {
              application: M,
              guild: j,
              user: L ? P : null,
              compact: w,
            }),
            null != y
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(l.DK, { children: Z.intl.string(Z.t.mDFGFh) }),
                    (0, i.jsx)(l.Dx, { children: y }),
                  ],
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(l.DK, { children: R }),
                    (0, i.jsxs)(l.Dx, {
                      className: S.title,
                      children: [
                        null != j
                          ? (0, i.jsx)(d.Z, {
                              guild: j,
                              className: S.guildBadge,
                              tooltipPosition: "left",
                            })
                          : null,
                        n,
                        s,
                      ],
                    }),
                  ],
                }),
            o,
            null != M ||
            w ||
            (null == c
              ? void 0
              : null === (t = c.guild) || void 0 === t
                ? void 0
                : t.id) === E.fQ
              ? null
              : (0, i.jsx)(l.EJ, {
                  className: S.activityCount,
                  online: c.approximate_presence_count,
                  total: c.approximate_member_count,
                  flat: N,
                }),
            O.length > 1 ? (0, i.jsx)(l.jQ, { user: b }) : null,
          ],
        });
      };
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
          return d;
        },
        R: function () {
          return c;
        },
      });
      var i = n(13245),
        s = n(556296),
        r = n(237997),
        a = n(13140),
        l = n(981631),
        o = n(987650);
      function c(e, t) {
        return {
          trackView() {
            i.Z.track(l.rMx.NOTIFICATION_VIEWED, t),
              i.Z.notificationEvent(e, o.bv.Viewed);
          },
          trackClick(n) {
            let s = r.Z.isInstanceLocked()
              ? l.Sbl.LOCKED_OVERLAY
              : l.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(l.rMx.NOTIFICATION_CLICKED, {
              ...t,
              location: s,
              action_type: n,
            }),
              i.Z.notificationEvent(e, o.bv.Clicked);
          },
        };
      }
      function d() {
        let e = s.Z.getOverlayKeybind();
        return null != e ? (0, a.BB)(e.shortcut, !0).split(" + ") : ["???"];
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
        r = n(593481),
        a = n(150097),
        l = n(312839),
        o = n(987650),
        c = n(388032);
      function d(e, t, n, d, u) {
        if (null == t.activity) return null;
        let h = t.activity.type,
          p = u.session_id;
        if (null == p) return null;
        let { icon: f, title: m, body: g } = (0, a.Xi)(e, t, n),
          { trackView: v, trackClick: _ } = (0, l.R)(o.n0.ActivityInvite, {
            notif_type: o.n0.ActivityInvite,
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
          title: m,
          body: g,
          hint: (e) => (0, r.QR)(e, (0, l.P)(), c.t.aB5xLy),
          onNotificationShow: () => {
            v();
          },
          confirmText: c.intl.string(c.t.VJlc0d),
          onConfirmClick: (r, a) => {
            i.Z.join({
              userId: n.id,
              sessionId: p,
              applicationId: d.id,
              channelId: e.id,
              messageId: t.id,
            }),
              s.Z.updateNotificationStatus(a),
              _("join");
          },
          onDismissClick: () => {
            _("dismiss");
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
        r = n(312839),
        a = n(981631),
        l = n(987650),
        o = n(388032);
      function c(e, t) {
        let n = e.username,
          c = o.intl.format(o.t["Yk+uYG"], { username: "" }),
          d = (0, s.ov)(e),
          { trackView: u, trackClick: h } = (0, r.R)(l.n0.ActivityUserJoin, {
            notif_type: l.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: a.mFx.JOIN,
            activity_name: t.name,
          });
        return {
          icon: d,
          title: n,
          body: c,
          hint: (e) => (0, i.Yj)(e, o.intl.string(o.t.WRj1Wl)),
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
          return h;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(481060),
        r = n(13245),
        a = n(312839),
        l = n(981631),
        o = n(987650),
        c = n(388032),
        d = n(57266);
      function u() {
        return (0, i.jsx)("div", {
          className: d.footer,
          children: (0, i.jsx)(s.Button, {
            color: s.Button.Colors.GREEN,
            size: s.Button.Sizes.SMALL,
            className: d.ctaButton,
            children: c.intl.string(c.t.U76Ft7),
          }),
        });
      }
      function h(e) {
        switch (e.type) {
          case o.nc.GO_LIVE_VOICE: {
            let { game: t, voiceGuild: d } = e,
              { trackView: h, trackClick: p } = (0, a.R)(o.n0.GoLiveNudge, {
                notif_type: o.n0.GoLiveNudge,
              });
            return {
              icon: n(847881),
              title: null,
              body: c.intl.formatToPlainString(c.t.z9znpa, {
                game: t.name,
                server: d.toString(),
              }),
              hint: () => (0, i.jsx)(u, {}),
              renderFooter: () => (0, i.jsx)(u, {}),
              onNotificationShow: () => {
                h();
              },
              onNotificationClick: (e, t) => {
                p("unlock"),
                  r.Z.updateNotificationStatus(t),
                  r.Z.setInstanceLocked(!1),
                  (0, s.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                      n.e("46746"),
                      n.e("33641"),
                    ]).then(n.bind(n, 60594));
                    return (t) =>
                      (0, i.jsx)(e, {
                        ...t,
                        selectSource: !1,
                        guildId: d.id,
                        analyticsLocation: l.Sbl.OVERLAY_NUDGE,
                      });
                  });
              },
              onDismissClick: () => {
                p("dismiss");
              },
            };
          }
          case o.nc.GO_LIVE_NON_VOICE: {
            let { game: t } = e,
              { trackView: d, trackClick: h } = (0, a.R)(
                o.n0.GoLiveNonVoiceNudge,
                { notif_type: o.n0.GoLiveNonVoiceNudge },
              );
            return {
              icon: n(847881),
              title: null,
              body: c.intl.formatToPlainString(c.t["0SVWgI"], { game: t.name }),
              hint: () => (0, i.jsx)(u, {}),
              renderFooter: () => (0, i.jsx)(u, {}),
              onNotificationShow: () => {
                d();
              },
              onNotificationClick: (e, t) => {
                h("unlock"),
                  r.Z.updateNotificationStatus(t),
                  r.Z.setInstanceLocked(!1),
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
                h("dismiss");
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
        l = n(593481),
        o = n(699516),
        c = n(594174),
        d = n(312839),
        u = n(981631),
        h = n(987650),
        p = n(388032);
      function f(e) {
        let t = (0, a.F6)(e, c.default, o.Z),
          n = p.intl.string(p.t.ssrVzM),
          f = (0, r.x)(e),
          { trackView: m, trackClick: g } = (0, d.R)(h.n0.IncomingCall, {
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
          hint: (e) => (0, l.QR)(e, (0, d.P)(), p.t["Odi54+"]),
          confirmText: p.intl.string(p.t["0D/6R0"]),
          cancelText: p.intl.string(p.t.BVN4pK),
          onNotificationShow: () => {
            m();
          },
          onConfirmClick: () => {
            s.Z.callPrivateChannel(e.id),
              g("join"),
              s.Z.track(u.rMx.VOICE_CHANNEL_SELECTED, {
                location: "Overlay Notificaiton",
                guild_id: null,
                channel_id: e.id,
                video_enabled: !1,
              });
          },
          onCancelClick: () => {
            i.Z.stopRinging(e.id), g("decline");
          },
          onDismissClick: () => {
            g("dismiss");
          },
        };
      }
    },
    791288: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return R;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(512722),
        a = n.n(r),
        l = n(442837),
        o = n(481060),
        c = n(493683),
        d = n(13245),
        u = n(99690),
        h = n(835473),
        p = n(194082),
        f = n(442550),
        m = n(297781),
        g = n(371991),
        v = n(656709),
        _ = n(561308),
        E = n(593481),
        x = n(703656),
        Z = n(199902),
        S = n(592125),
        C = n(158776),
        I = n(594174),
        y = n(5192),
        N = n(312839),
        T = n(981631),
        b = n(701488),
        O = n(987650),
        j = n(388032),
        A = n(810489);
      function M(e) {
        let { game: t } = e,
          n = (0, h.q)(t.id);
        if (null == n) return null;
        let s = n.getIconURL(b.Si.LARGE);
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: A.header,
            children: [
              (0, i.jsx)(f.f, { src: s, size: 32 }),
              (0, i.jsx)(o.Text, {
                className: A.gameInfo,
                variant: "text-md/semibold",
                color: "header-primary",
                children: n.name,
              }),
            ],
          }),
        });
      }
      function P(e) {
        let { entry: t, idx: n } = e,
          r = (0, l.e7)([I.default], () => I.default.getUser(t.author_id)),
          h = (0, _.kr)(t),
          f = h
            ? o.tokens.colors.TEXT_POSITIVE
            : o.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
          [E, N] = s.useState("unsent"),
          [b, O] = s.useState(!1),
          M = (0, l.e7)(
            [Z.Z],
            () => (null != r ? Z.Z.getAnyStreamForUser(r.id) : null),
            [r],
          ),
          { isMobileOnline: P, status: L } = (0, l.cj)(
            [C.Z],
            () =>
              null == r
                ? { isMobileOnline: void 0, status: void 0 }
                : {
                    isMobileOnline: C.Z.isMobileOnline(r.id),
                    status: C.Z.getStatus(r.id),
                  },
            [r],
          );
        s.useEffect(() => {
          if ("sent" === E) {
            let e = setTimeout(() => O(!0), 2e3);
            return () => clearTimeout(e);
          }
        }, [E]);
        let R = async (e) => {
            if (null != r && "unsent" === E) {
              e.stopPropagation();
              try {
                var i;
                N("sending");
                let e = await c.Z.getOrEnsurePrivateChannel(r.id),
                  s =
                    null !== (i = S.Z.getChannel(e)) && void 0 !== i ? i : null;
                a()(null != s, "Send channel must be defined"),
                  (0, x.uL)(T.Z5c.CHANNEL(s.guild_id, s.id)),
                  await (0, v.p)({
                    channel: s,
                    content: j.intl.string(j.t.DwAcMz),
                    entry: t,
                    whenReady: !0,
                  }),
                  d.Z.track(T.rMx.OVERLAY_GAME_INVITE_SENT, {
                    target_user_id: r.id,
                    target_content_entry_id: t.id,
                    target_index: n,
                  }),
                  N("sent");
              } catch (e) {
                N("unsent");
              }
            }
          },
          w = async () => {
            var e;
            if (null == r) return;
            let t = await c.Z.getOrEnsurePrivateChannel(r.id),
              n = null !== (e = S.Z.getChannel(t)) && void 0 !== e ? e : null;
            a()(null != n, "Send channel must be defined"),
              (0, x.uL)(T.Z5c.CHANNEL(n.guild_id, n.id));
          };
        return null == r
          ? null
          : (0, i.jsxs)("div", {
              className: A.userRow,
              children: [
                (0, i.jsx)(u.Z, {
                  className: A.avatarContainer,
                  user: r,
                  isMobile: P,
                  status: L,
                }),
                (0, i.jsxs)("div", {
                  className: A.userInfo,
                  children: [
                    (0, i.jsxs)("div", {
                      className: A.usernameWrapper,
                      children: [
                        (0, i.jsx)(o.Text, {
                          className: A.username,
                          variant: "text-md/medium",
                          color: "header-primary",
                          children: y.ZP.getName(void 0, void 0, r),
                        }),
                        null != M && (0, i.jsx)(p.ZP, {}),
                      ],
                    }),
                    (0, i.jsxs)(m.m7, {
                      children: [
                        (0, i.jsx)(o.GameControllerIcon, {
                          size: "xxs",
                          color: f,
                        }),
                        (0, i.jsx)(g.ZP, {
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
                  className: A.inviteButtonWrapper,
                  children: (0, i.jsx)(o.Button, {
                    submitting: "sending" === E,
                    onClick: b ? w : R,
                    className: A.inviteButton,
                    color: o.ButtonColors.PRIMARY,
                    look:
                      "sent" === E
                        ? o.ButtonLooks.OUTLINED
                        : o.ButtonLooks.FILLED,
                    size: o.ButtonSizes.MAX,
                    children:
                      "sent" === E
                        ? b
                          ? (0, i.jsx)(o.ChatIcon, { size: "sm" })
                          : (0, i.jsx)(o.CheckmarkSmallBoldIcon, {
                              size: "sm",
                              color: o.tokens.colors.WHITE,
                            })
                        : (0, i.jsx)(o.SendMessageIcon, { size: "sm" }),
                  }),
                }),
              ],
            });
      }
      function L(e) {
        let { entries: t } = e,
          n = t.slice(0, 5);
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(E.iz, {}),
            (0, i.jsxs)(o.Text, {
              className: A.helpText,
              variant: "text-sm/medium",
              color: "header-secondary",
              children: [
                (0, i.jsx)(o.ChatPlusIcon, { size: "xxs" }),
                j.intl.string(j.t.y9eo7e),
              ],
            }),
            n.map((e, t) => (0, i.jsx)(P, { idx: t, entry: e }, t)),
          ],
        });
      }
      function R(e, t) {
        let { trackView: n, trackClick: s } = (0, N.R)(
          O.n0.SendGameInvitesNotification,
          { notif_type: O.n0.SendGameInvitesNotification },
        );
        return (
          a()(t.length > 0, "Some entries must be present"),
          {
            icon: null,
            title: (0, i.jsx)(M, { game: e }),
            body: (0, i.jsx)(L, { entries: t }),
            onNotificationShow: () => {
              n(),
                d.Z.track(T.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
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
        r = n(45114),
        a = n(593481),
        l = n(237997),
        o = n(312839),
        c = n(981631),
        d = n(987650),
        u = n(388032);
      function h(e, t, n, h) {
        let p = t.username,
          f = u.intl.format(u.t.VDODnp, { username: "", game: n.name }),
          m = t.getAvatarURL(e.guild_id, 80),
          { trackView: g, trackClick: v } = (0, o.R)(d.n0.ActivityInvite, {
            notif_type: d.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: c.mFx.JOIN_REQUEST,
            activity_name: n.name,
          });
        return {
          icon: m,
          title: p,
          body: f,
          hint: (e) => (0, a.QR)(e, (0, o.P)(), u.t["Odi54+"]),
          confirmText: u.intl.string(u.t["fgP/wc"]),
          cancelText: u.intl.string(u.t.tpXzJy),
          onNotificationShow: () => {
            g();
          },
          onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
              channelId: e.id,
              type: c.mFx.JOIN,
              activity: h,
              location: l.Z.isInstanceLocked()
                ? c.Sbl.LOCKED_OVERLAY
                : c.Sbl.UNLOCKED_OVERLAY,
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
          return f;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(13245),
        r = n(703656),
        a = n(974180),
        l = n(237997),
        o = n(150097),
        c = n(557177),
        d = n(312839),
        u = n(981631),
        h = n(987650),
        p = n(388032);
      function f(e, t, n, f) {
        var m;
        let { icon: g, title: v, body: _ } = (0, o.Xi)(e, t, n),
          { trackView: E, trackClick: x } = (0, d.R)(h.n0.TextChat, {
            notif_type: h.n0.TextChat,
            notif_user_id:
              null === (m = t.author) || void 0 === m ? void 0 : m.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
          });
        return {
          icon: g,
          title: v,
          body: _,
          renderFooter: (e) =>
            e
              ? (0, i.jsx)("div", {
                  style: { textAlign: "center" },
                  children: p.intl.string(p.t["+MJm39"]),
                })
              : null,
          maxBodyLines: 2,
          onNotificationShow: () => {
            f && (0, c.GN)(a.Ay, a.yk), E();
          },
          onNotificationClick: () => {
            (0, r.uL)(u.Z5c.CHANNEL(e.guild_id, e.id)),
              x("jump"),
              l.Z.isInstanceLocked() && s.Z.setInstanceLocked(!1);
          },
          onDismissClick: () => {
            x("dismiss");
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
      var i = n(200651);
      n(192379);
      var s = n(13245),
        r = n(593481),
        a = n(237997),
        l = n(312839),
        o = n(987650),
        c = n(388032);
      let d = () => ({
          icon: n(328756),
          title: c.intl.string(c.t.pkXAeH),
          body: null,
          hint: u,
          notifType: o.n0.WelcomeNudge,
        }),
        u = (e) => (0, r.QR)(e, (0, l.P)(), c.t["z8/sgI"]);
      function h(e) {
        let { type: t } = e,
          {
            icon: n,
            title: r,
            body: u,
            hint: h,
            notifType: p,
          } = (function (e, t) {
            if (t.type === o.nc.NEWS) {
              var n, i, s, r, a, l, c, d;
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
                    (l =
                      null === (i = t.news) || void 0 === i
                        ? void 0
                        : i.title) && void 0 !== l
                    ? l
                    : e.title,
                body:
                  null !==
                    (c =
                      null === (s = t.news) || void 0 === s
                        ? void 0
                        : s.body) && void 0 !== c
                    ? c
                    : e.body,
                hint:
                  null !==
                    (d =
                      null === (r = t.news) || void 0 === r
                        ? void 0
                        : r.hint) && void 0 !== d
                    ? d
                    : e.hint,
                notifType: null != t.news ? o.n0.NewsNudge : e.notifType,
              };
            }
            return e;
          })(d(), e),
          { trackView: f, trackClick: m } = (0, l.R)(p, { notif_type: p });
        return {
          icon: n,
          title: r,
          body: u,
          hint: h,
          renderFooter: () =>
            (0, i.jsx)("div", {
              style: { textAlign: "center", padding: 2 },
              children: c.intl.string(c.t["9MyuT0"]),
            }),
          onNotificationShow: () => {
            f();
          },
          onNotificationClick: (e, n) => {
            m("unlock"),
              t === o.nc.NEWS && s.Z.updateNotificationStatus(n),
              a.Z.isInstanceLocked() && s.Z.setInstanceLocked(!1);
          },
          onDismissClick: () => {
            m("dismiss");
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
        l = n(13140),
        o = n(981631),
        c = n(987650),
        d = n(388032);
      function u() {
        let { trackView: e, trackClick: t } = (0, r.R)(
            c.n0.ClipsReminderNotification,
            { notif_type: c.n0.ClipsReminderNotification },
          ),
          n = a.Z.getKeybindForAction(o.kg4.SAVE_CLIP);
        if (null == n) return null;
        let u = l.BB(n.shortcut, !0);
        return {
          title: d.intl.format(d.t.S5uhCA, {
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
        let { trackView: t, trackClick: n } = (0, r.R)(c.n0.ClipsNotification, {
          notif_type: c.n0.ClipsNotification,
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
        l = n(192379),
        o = n(120356),
        c = n.n(o),
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
      let m = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
      ((r = i || (i = {})).MOVE = "MOVE"),
        (r.RESIZE_NORTH = "RESIZE_NORTH"),
        (r.RESIZE_WEST = "RESIZE_WEST"),
        (r.RESIZE_EAST = "RESIZE_EAST"),
        (r.RESIZE_SOUTH = "RESIZE_SOUTH"),
        (r.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST"),
        (r.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST"),
        (r.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST"),
        (r.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST");
      let g = new Set([
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
      function _(e) {
        let { top: t, left: n, bottom: i, right: s } = e;
        return (
          null == n && null == s && (n = 0),
          null != n && null != s && (s = void 0),
          null == t && null == i && (t = 0),
          null != t && null != i && (i = void 0),
          { top: t, left: n, bottom: i, right: s }
        );
      }
      function E(e) {
        return "auto" === e || null == e ? "auto" : "".concat(e, "px");
      }
      function x(e, t) {
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
      class S extends (s = l.Component) {
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
              this.setDOMPositions(_(this.props.anchor)),
            !(0, d.Z)(this.props.size, e.size) &&
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
              container: { maxX: s, maxY: r, minX: a, minY: l },
              onDragStart: o,
              onDrag: c,
              snapOrientation: d,
            },
            dragState: { offsetX: h, offsetY: p },
            state: { operationStarted: f },
          } = this;
          if (null == n) return null;
          (e = Math.max(Math.min(s, e), a)), (t = Math.max(Math.min(r, t), l));
          let { width: m, height: g } = x(n, this.size),
            v = t - p,
            _ = e - h,
            E = (0, u.ou)(
              (0, u.PY)(
                { top: v, left: _, bottom: void 0, right: void 0 },
                s,
                r,
                m,
                g,
              ),
            ),
            S = d ? (0, u.R)(E) : Z("RESIZE_SOUTH_EAST", E);
          this.setDOMPositions(S),
            !f && (null != o && o(), this.setState({ operationStarted: !0 })),
            null != c && c(i, "MOVE", this.anchor, this.size);
        }
        handleResizeMove(e, t) {
          let {
              props: {
                id: n,
                minSize: i,
                container: { maxX: s, maxY: r, minX: a, minY: l },
                onDragStart: o,
                onDrag: c,
              },
              state: { operation: d, operationStarted: u },
            } = this,
            {
              startX: h,
              startY: p,
              offsetWidth: f,
              offsetHeight: m,
            } = this.dragState,
            g = 0,
            v = 0;
          if (null != d) {
            switch (
              ((e = Math.max(Math.min(s, e), a)),
              (t = Math.max(Math.min(r, t), l)),
              d)
            ) {
              case "RESIZE_EAST":
              case "RESIZE_SOUTH_EAST":
              case "RESIZE_NORTH_EAST":
                g -= h - e;
                break;
              case "RESIZE_WEST":
              case "RESIZE_SOUTH_WEST":
              case "RESIZE_NORTH_WEST":
                g += h - e;
            }
            switch (d) {
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
            (f = Math.max(f + g, i.width)),
              (m = Math.max(m + v, i.height)),
              this.setDOMSize({ width: f, height: m }),
              !u && (null != o && o(), this.setState({ operationStarted: !0 })),
              null != c && c(n, d, this.anchor, this.size);
          }
        }
        setDOMPositions(e) {
          let { top: t, left: n, bottom: i, right: s } = e,
            { current: r } = this.ref;
          if (
            ((this.anchor = { top: t, left: n, bottom: i, right: s }),
            null != r)
          )
            (r.style.top = E(t)),
              (r.style.bottom = E(i)),
              (r.style.left = E(n)),
              (r.style.right = E(s));
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
            (i.style.width = E(t)), (i.style.height = E(n));
        }
        renderResizeHandles() {
          let { resizeY: e, resizeX: t, active: n } = this.props;
          return (0, a.jsxs)(l.Fragment, {
            children: [
              e
                ? (0, a.jsxs)(l.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: c()(p.resizeNorth, {
                          [p.resizeNSCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH"),
                      }),
                      (0, a.jsx)("div", {
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
                ? (0, a.jsxs)(l.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: c()(p.resizeEast, { [p.resizeEWCursor]: n }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_EAST"),
                      }),
                      (0, a.jsx)("div", {
                        className: c()(p.resizeWest, { [p.resizeEWCursor]: n }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_WEST"),
                      }),
                    ],
                  })
                : null,
              t && e
                ? (0, a.jsxs)(l.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: c()(p.resizeNorthWest, {
                          [p.resizeNWSECursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST"),
                      }),
                      (0, a.jsx)("div", {
                        className: c()(p.resizeNorthEast, {
                          [p.resizeNESWCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST"),
                      }),
                      (0, a.jsx)("div", {
                        className: c()(p.resizeSouthWest, {
                          [p.resizeNESWCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST"),
                      }),
                      (0, a.jsx)("div", {
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
            size: r,
            anchor: l,
            state: { operation: o, operationStarted: d },
          } = this;
          return (0, a.jsxs)("div", {
            ref: this.ref,
            style: {
              ...l,
              ...r,
              ...s,
              ...(null != o ? { zIndex: 1e3 } : void 0),
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
            f(this, "ref", l.createRef()),
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
              if (!(null == r || (!a && 3 > m(i, s, t, n))))
                "MOVE" === r
                  ? this.handleDragMove(t, n)
                  : g.has(r) && this.handleResizeMove(t, n);
            }),
            f(this, "handleOperationStart", (e, t, n) => {
              let {
                ref: { current: i },
                props: {
                  targetWindow: s,
                  active: r,
                  container: { maxX: a, maxY: l },
                },
              } = this;
              if (null == i || !r) return;
              let { width: o, height: c } = x(i, this.size),
                d = (0, u.PY)(this.anchor, a, l, o, c);
              if ("MOVE" === e) {
                let { x: e, y: i } = (function (e) {
                  let { top: t, left: n } = e;
                  return { x: n, y: t };
                })(d);
                this.dragState = {
                  ...this.dragState,
                  startX: t,
                  startY: n,
                  offsetX: t - e,
                  offsetY: n - i,
                };
              } else {
                let i = Z(e, d);
                this.setDOMPositions(i),
                  (this.dragState = {
                    ...this.dragState,
                    startX: t,
                    startY: n,
                    offsetWidth: o,
                    offsetHeight: c,
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
                      x(this.ref.current, this.size),
                    );
                  }
                : void 0;
              if (t) {
                let { maxX: e, maxY: t } = this.props.container,
                  { width: n, height: s } = x(this.ref.current, this.size),
                  r = (0, u.PY)(this.anchor, e, t, n, s),
                  a = (0, u.R)(r);
                this.setDOMPositions(a),
                  this.setDOMSize({ width: n, height: s }),
                  null != i && i();
              }
              this.setState({ operation: null, operationStarted: !1 }, s);
            }),
            (this.anchor = _(e.anchor)),
            (this.size = v(e.size, e.minSize.width, e.minSize.height));
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
          targetWindow: window,
        }),
        (t.Z = S);
    },
    567409: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ns: function () {
          return m;
        },
      }),
        n(47120);
      var i = n(192379),
        s = n(392711),
        r = n.n(s),
        a = n(876215),
        l = n(442837),
        o = n(146282),
        c = n(26033),
        d = n(897674),
        u = n(709054),
        h = n(206583);
      let p = new Set([a.s.PLAYED_GAME]),
        f = (e) => p.has(e.content_type);
      function m(e) {
        let { entries: t } = (function () {
          let e = (0, d.Z)(h.YN.GAME_PROFILE_FEED),
            t = (0, d.Z)(h.YN.GLOBAL_FEED),
            n = i.useMemo(
              () =>
                r()(t)
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
            requestId: (0, l.e7)([o.Z], () =>
              o.Z.getFeedRequestId(h.YN.GAME_PROFILE_FEED),
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
    888592: function (e, t, n) {
      "use strict";
      var i, s;
      n.d(t, {
        fQ: function () {
          return r;
        },
        tF: function () {
          return i;
        },
      }),
        ((s = i || (i = {})).STUDENT_PROMPT = "STUDENT_PROMPT"),
        (s.VERIFY_EMAIL = "VERIFY_EMAIL"),
        (s.VERIFY_PIN = "VERIFY_PIN"),
        (s.SELECT_SCHOOL = "SELECT_SCHOOL"),
        (s.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH"),
        (s.SUBMIT_SCHOOL = "SUBMIT_SCHOOL"),
        (s.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION"),
        (s.EMAIL_WAITLIST = "EMAIL_WAITLIST");
      let r = "884924873015689226";
    },
    294033: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        l = n(846337);
      function o(e) {
        let { keybind: t, separator: n = "+", className: r } = e;
        return (0, i.jsx)(i.Fragment, {
          children: t.map((e, o) =>
            (0, i.jsxs)(
              s.Fragment,
              {
                children: [
                  (0, i.jsx)("span", { className: a()(l.key, r), children: e }),
                  o === t.length - 1 ? void 0 : n,
                ],
              },
              o,
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
          return _;
        },
        iz: function () {
          return g;
        },
      });
      var i,
        s = n(200651),
        r = n(192379),
        a = n(120356),
        l = n.n(a),
        o = n(481060),
        c = n(294033),
        d = n(388032),
        u = n(157004),
        h = n(113207);
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
        m = () =>
          (0, s.jsx)("div", {
            className: u.clickBlocker,
            onClick: f,
            onMouseEnter: f,
            onMouseOver: f,
          }),
        g = () => (0, s.jsx)("div", { className: u.divider }),
        v = (e, t, n) =>
          (0, s.jsx)("div", {
            className: u.keybindMessage,
            children: d.intl.format(n, {
              keybind: t,
              keybindHook: (e, n) =>
                (0, s.jsx)(c.Z, { keybind: t, className: u.keybind }, n),
            }),
          }),
        _ = (e, t) =>
          (0, s.jsx)("div", { className: u.hintSubtleText, children: t });
      class E extends (i = r.PureComponent) {
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
          return (0, s.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.NONE,
            onClick: this.handleDismiss,
            className: u.dismissButton,
            "aria-label": d.intl.string(d.t.LnEgqa),
            children: (0, s.jsx)(o.XSmallIcon, {
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
                  { children: [(0, s.jsx)(g, {}), n] },
                  "hint-custom",
                )
              : null;
          }
          return (0, s.jsxs)(
            r.Fragment,
            {
              children: [
                (0, s.jsx)(g, {}),
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
            state: { expanded: l },
          } = this;
          if (!l) return null != a ? this.renderHint() : null;
          if (null != this.props.renderFooter) {
            let e = this.props.renderFooter(l);
            return null != e
              ? (0, s.jsxs)(
                  r.Fragment,
                  { children: [(0, s.jsx)(g, {}), e] },
                  "footer-custom-content",
                )
              : null;
          }
          if (null != n || null != i) {
            let a = o.Button.Colors.GREEN,
              l = o.Button.Colors.PRIMARY,
              c = o.Button.Looks.FILLED;
            return (0, s.jsxs)(
              r.Fragment,
              {
                children: [
                  (0, s.jsx)(g, {}),
                  (0, s.jsxs)("div", {
                    className: u.buttonContainer,
                    children: [
                      null != n
                        ? (0, s.jsx)(o.Button, {
                            fullWidth: !0,
                            size: o.Button.Sizes.SMALL,
                            color: a,
                            onClick: this.handleConfirmClick,
                            className: u.button,
                            innerClassName: u.innerText,
                            children: null != t ? t : d.intl.string(d.t.BddRzc),
                          })
                        : null,
                      null != i
                        ? (0, s.jsx)(o.Button, {
                            fullWidth: !0,
                            size: o.Button.Sizes.SMALL,
                            look: c,
                            color: l,
                            onClick: this.handleCancelClick,
                            className: u.button,
                            children:
                              null != e ? e : d.intl.string(d.t["ETE/oK"]),
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
              ? (0, s.jsx)(o.Avatar, {
                  src: e,
                  size: o.AvatarSizes.SIZE_40,
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
                        className: l()(u.body, h.marginTop4),
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
            i = null != e ? o.Clickable : "div";
          return (0, s.jsxs)(i, {
            onMouseOver: n ? null : this.handleMouseEnter,
            onFocus: n ? null : this.handleMouseEnter,
            onClick: e,
            className: l()(u.container, {
              [u.themePrimary]: !0,
              [u.clickable]: null != e && !t,
            }),
            children: [
              this.renderCloseButton(),
              this.renderContent(),
              this.renderFooter(),
              t ? (0, s.jsx)(m, {}) : null,
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
      p(E, "defaultProps", { maxBodyLines: void 0, expand: !1, disabled: !1 }),
        (t.ZP = E);
    },
    212632: function (e, t, n) {
      "use strict";
      n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        l = n(481060),
        o = n(981631),
        c = n(388032),
        d = n(167740),
        u = n(113207);
      let h = 0,
        p = () => "notification-position-selector-".concat(h++),
        f = (e) => {
          switch (e) {
            case o._vf.TOP_LEFT:
              return c.intl.string(c.t.xlchpa);
            case o._vf.TOP_RIGHT:
              return c.intl.string(c.t["4uHRHB"]);
            case o._vf.BOTTOM_LEFT:
              return c.intl.string(c.t.ovWFnJ);
            case o._vf.BOTTOM_RIGHT:
              return c.intl.string(c.t["M/9V7+"]);
            default:
              return c.intl.string(c.t.AlY4ZW);
          }
        },
        m = [
          o._vf.DISABLED,
          o._vf.TOP_LEFT,
          o._vf.TOP_RIGHT,
          o._vf.BOTTOM_LEFT,
          o._vf.BOTTOM_RIGHT,
        ];
      function g(e) {
        let { position: t, onChange: n } = e,
          [r] = s.useState(() => p()),
          h =
            t === o._vf.DISABLED
              ? c.intl.string(c.t.R6LxVV)
              : c.intl.formatToPlainString(c.t.XXHDMz, { position: f(t) });
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(l.FocusRing, {
              within: !0,
              offset: -2,
              children: (0, i.jsx)("div", {
                className: a()(d.wrapper, {
                  [d.disabledSelected]: t === o._vf.DISABLED,
                }),
                children: m.map((e) =>
                  (0, i.jsxs)(
                    "label",
                    {
                      className: a()({
                        [d.selected]: e === t,
                        [d.disabled]: e === o._vf.DISABLED,
                        [d.topRight]: e === o._vf.TOP_RIGHT,
                        [d.topLeft]: e === o._vf.TOP_LEFT,
                        [d.bottomRight]: e === o._vf.BOTTOM_RIGHT,
                        [d.bottomLeft]: e === o._vf.BOTTOM_LEFT,
                      }),
                      children: [
                        f(e),
                        e === o._vf.DISABLED
                          ? (0, i.jsx)(l.DenyIcon, {
                              size: "md",
                              color: "currentColor",
                              className: d.disabledIcon,
                            })
                          : null,
                        (0, i.jsx)("input", {
                          type: "radio",
                          name: r,
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
            (0, i.jsx)(l.FormText, {
              type: l.FormTextTypes.DESCRIPTION,
              className: u.marginTop8,
              children: h,
            }),
          ],
        });
      }
      (g.Positions = o._vf), (t.Z = g);
    },
    635324: function (e, t, n) {
      "use strict";
      n(47120);
      var i = n(200651),
        s = n(149765),
        r = n(481060),
        a = n(570140),
        l = n(700785);
      __OVERLAY__ &&
        a.Z.subscribe("OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN", function (e) {
          let {
              clientId: t,
              authorizeProps: { authorizations: o, permissions: c, ...d },
            } = e,
            u = "OAuth2Authorize_"
              .concat(t, "_")
              .concat(d.guildId, "_")
              .concat(d.channelId);
          function h(e) {
            let { location: n } = e;
            a.Z.dispatch({
              type: "OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE",
              clientId: t,
              location: n,
            });
          }
          let p = l.Hn;
          try {
            p = s.vB(null != c ? c : 0);
          } catch (e) {}
          (0, r.openModalLazy)(
            async () => {
              let { OAuth2AuthorizeModal: e } = await Promise.resolve().then(
                n.bind(n, 69580),
              );
              return (t) =>
                (0, i.jsx)(e, {
                  ...t,
                  ...d,
                  authorizations: new Map(o),
                  permissions: p,
                  callback: h,
                });
            },
            {
              modalKey: u,
              onCloseRequest: () => {
                (0, r.closeModal)(u), h({});
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
      var i = n(200651),
        s = n(192379),
        r = n(442837),
        a = n(481060),
        l = n(490173),
        o = n(735246),
        c = n(40851),
        d = n(503737),
        u = n(823453),
        h = n(436774),
        p = n(686546),
        f = n(314910),
        m = n(367207),
        g = n(241890),
        v = n(649561),
        _ = n(631553),
        E = n(981631);
      n(635324), n(167666), n(308765), n(913487), r.ZP.initialize();
      t.default = function () {
        return (
          s.useEffect(
            () => (
              m.Z.initialize(),
              d.Z.initialize(),
              g.Z.init(),
              () => {
                m.Z.terminate(), d.Z.terminate();
              }
            ),
            [],
          ),
          (0, i.jsxs)(s.Fragment, {
            children: [
              (0, i.jsx)(u.Z, {}),
              (0, i.jsx)(o.T, {
                children: (0, i.jsxs)(v.Z, {
                  children: [
                    (0, i.jsx)(p.Co, {}),
                    (0, i.jsx)(h.ZP, {}),
                    (0, i.jsx)(c.Wu, {
                      appContext: E.IlC.OVERLAY,
                      renderWindow: window,
                      children: (0, i.jsxs)(f.yP, {
                        children: [
                          (0, i.jsx)(_.Z, {}),
                          (0, i.jsx)(a.Modals, {}),
                          (0, i.jsx)(l.Z, {}),
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
      var i = n(192379),
        s = n(149765),
        r = n(442837),
        a = n(367907),
        l = n(731429),
        o = n(188471),
        c = n(318885),
        d = n(592125),
        u = n(984933),
        h = n(271383),
        p = n(430824),
        f = n(496675),
        m = n(944486),
        g = n(914010),
        v = n(594174),
        _ = n(237997),
        E = n(145597),
        x = n(981631);
      class Z extends i.Component {
        componentDidUpdate(e) {
          if (this.props.locked) return null;
          let {
            selectedGuild: t,
            selectedChannel: n,
            isMemberPending: i,
            hasPreviewEnabled: s,
            postableChannelCount: r,
          } = this.props;
          if (
            (null != t &&
              (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
              ((0, c.Q)(x.rMx.GUILD_VIEWED, {
                ...(i ? { is_pending: i, preview_enabled: s } : {}),
                postable_channels: r,
              }),
              (0, o.a)(x.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != n && n !== e.selectedChannel)
          ) {
            let e = (0, l.K)(d.Z.getChannel(n), !0);
            (0, c.Q)(x.rMx.CHANNEL_OPENED, { ...e, ...(0, a.$H)(n) }),
              (0, o.a)(x.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
          }
        }
        render() {
          return null;
        }
      }
      t.Z = r.ZP.connectStores(
        [g.Z, m.Z, p.Z, v.default, _.Z, u.ZP, f.Z, h.ZP],
        () => {
          var e, t, n;
          let i = g.Z.getGuildId(),
            r = m.Z.getChannelId(i),
            a = p.Z.getGuild(i),
            l = v.default.getCurrentUser(),
            o =
              null !==
                (t = u.ZP.getChannels(null == a ? void 0 : a.id)[u.sH]) &&
              void 0 !== t
                ? t
                : [],
            c =
              o.length > 0
                ? o.filter((e) => {
                    let { channel: t } = e;
                    return f.Z.can(
                      s.$e(x.Plq.SEND_MESSAGES, x.Plq.VIEW_CHANNEL),
                      t,
                    );
                  }).length
                : 0,
            d =
              null != l &&
              null != i &&
              null !==
                (n =
                  null === (e = h.ZP.getMember(i, l.id)) || void 0 === e
                    ? void 0
                    : e.isPending) &&
              void 0 !== n &&
              n;
          return {
            selectedGuild: i,
            selectedChannel: r,
            locked: _.Z.isLocked((0, E.QF)()),
            hasPreviewEnabled:
              null == a ? void 0 : a.features.has(x.oNc.PREVIEW_ENABLED),
            isMemberPending: d,
            postableChannelCount: c,
          };
        },
      )(Z);
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
        l = n(995295),
        o = n(374470),
        c = n(902704),
        d = n(846519),
        u = n(13245),
        h = n(671999),
        p = n(358085),
        f = n(998502),
        m = n(145597);
      function g(e, t, n) {
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
        _ = !1;
      function E(e) {
        let { clientX: t, clientY: n } = e;
        (_ = !0), (v.x = t), (v.y = n);
      }
      let x = new Map();
      function Z(e, t) {
        if (null == t)
          x.delete(e),
            0 === x.size &&
              (window.removeEventListener("mousemove", E), (_ = !1));
        else {
          let n = x.get(e);
          if (null != n && (0, c.Z)(n.zone, t.zone)) return;
          0 === x.size && window.addEventListener("mousemove", E), x.set(e, t);
        }
        p.isPlatformEmbedded &&
          ((0, m.W2)()
            ? u.Z.setClickZones(
                Array.from(x.values()).map((e) => {
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
                zones: Array.from(x.values()).map((e) => {
                  let { zone: t } = e;
                  return t;
                }),
              }),
              (function () {
                if (!S)
                  f.ZP.requireModule("discord_overlay2").setClickZoneCallback(
                    (e, t, n) => {
                      let i = x.get(e);
                      null != i &&
                        (!_ && ((v.x = t), (v.y = n)), i.instance.click());
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
          let e = (0, h.B)("click", v.x, v.y);
          (0, h.J)(e, v.x, v.y);
        }
        constructor(...e) {
          super(...e),
            g(this, "zone", a().uniqueId("ClickArea")),
            g(this, "interval", new d.Xp()),
            g(this, "updateZone", () => {
              let e = (0, l.findDOMNode)(this);
              if ((0, o.k)(e)) {
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
      g(C, "defaultProps", { observe: !0, observeInterval: 1e3 });
    },
    244073: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return M;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        l = n(568611),
        o = n(442837),
        c = n(481060),
        d = n(846027),
        u = n(925549),
        h = n(287734),
        p = n(933557),
        f = n(600164),
        m = n(870569),
        g = n(345243),
        v = n(873596),
        _ = n(917405),
        E = n(430824),
        x = n(131951),
        Z = n(699516),
        S = n(594174),
        C = n(979651),
        I = n(362446),
        y = n(518084),
        N = n(981631),
        T = n(388032),
        b = n(945768),
        O = n(663031);
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
      class A extends s.PureComponent {
        handleDisconnect() {
          h.default.selectVoiceChannel(null);
        }
        renderChannelLink(e) {
          let { guild: t } = this.props,
            n = (0, p.F6)(e, S.default, Z.Z),
            s = null != t ? "".concat(n, " / ").concat(t.name) : n,
            r = null != t ? t.id : N.ME;
          return (0, i.jsx)(l.rU, {
            to: N.Z5c.CHANNEL(r),
            onClick: (t) => {
              t.stopPropagation(), u.Z.channelListScrollTo(r, e.id);
            },
            children: (0, i.jsx)(g.Z, { className: O.channel, children: s }),
          });
        }
        render() {
          let {
            className: e,
            contentClassName: t,
            pinned: n,
            lobbyId: s,
            channel: r,
            quality: l,
            lastPing: o,
            hasVideo: d,
            connectionState: u,
            deaf: h,
            mute: p,
          } = this.props;
          return null == r
            ? null
            : (0, i.jsx)(y.ZP.Bar, {
                className: a()(e, b.controls, { [b.unpinned]: !n }),
                children: (0, i.jsxs)(y.ZP.Content, {
                  className: a()(t, b.content),
                  dynamicSize: !0,
                  children: [
                    (0, i.jsx)("div", {
                      className: O.inner,
                      children: (0, i.jsx)(c.Popout, {
                        renderPopout: () => this.renderPopout(r.id),
                        position: "top",
                        children: (e) =>
                          (0, i.jsx)(c.Clickable, {
                            ...e,
                            children: (0, i.jsx)(_.Z, {
                              channelId: r.id,
                              quality: l,
                              lastPing: o,
                              hasVideo: d,
                              state: u,
                              children: this.renderChannelLink(r),
                            }),
                          }),
                      }),
                    }),
                    (0, i.jsxs)(f.Z, {
                      grow: 0,
                      children: [
                        (0, i.jsx)(m.Z, {
                          tooltipText: p
                            ? T.intl.string(T.t.YqAjX1)
                            : T.intl.string(T.t["w4m94+"]),
                          icon: p ? c.MicrophoneSlashIcon : c.MicrophoneIcon,
                          iconForeground: p ? b.strikethrough : null,
                          onClick: this.handleToggleSelfMute,
                        }),
                        (0, i.jsx)(m.Z, {
                          tooltipText: h
                            ? T.intl.string(T.t["2US87+"])
                            : T.intl.string(T.t.wjcRFR),
                          icon: h ? c.HeadphonesSlashIcon : c.HeadphonesIcon,
                          onClick: this.handleToggleSelfDeaf,
                          iconForeground: h ? b.strikethrough : null,
                        }),
                        null == s &&
                          (0, i.jsx)(m.Z, {
                            tooltipText: T.intl.string(T.t["6vrfgo"]),
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
            j(this, "handleToggleSelfMute", () => {
              let { context: e } = this.props;
              d.Z.toggleSelfMute({ context: e, location: "Overlay Controls" });
            }),
            j(this, "handleToggleSelfDeaf", () => {
              let { context: e } = this.props;
              d.Z.toggleSelfDeaf({ context: e, location: "Overlay Controls" });
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
      function M(e) {
        let { context: t, lobbyId: n, channel: s, ...r } = e,
          a = (0, o.e7)([E.Z], () =>
            E.Z.getGuild(null == s ? void 0 : s.getGuildId()),
          ),
          l = (0, o.e7)([C.Z], () => null != s && C.Z.hasVideo(s.id)),
          [c, d] = (0, o.Wu)([x.Z], () => [
            x.Z.isSelfMute(t) || x.Z.isSelfMutedTemporarily(t),
            x.Z.isSelfDeaf(t),
          ]),
          [u, h, p] = (0, o.Wu)([I.Z], () => [
            I.Z.getConnectionState(n),
            I.Z.getLastPing(n),
            I.Z.getQuality(n),
          ]);
        return (0, i.jsx)(A, {
          ...r,
          context: t,
          lobbyId: n,
          channel: s,
          guild: a,
          hasVideo: l,
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
      var i = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        l = n(392711),
        o = n.n(l),
        c = n(818405),
        d = n(587158),
        u = n(286379),
        h = n(481060),
        p = n(13245),
        f = n(490029),
        m = n(797614),
        g = n(593481),
        v = n(703656),
        _ = n(254761),
        E = n(70956),
        x = n(960048),
        Z = n(145597),
        S = n(692546),
        C = n(518084),
        I = n(987650),
        y = n(981631),
        N = n(388032),
        T = n(372049);
      function b(e, t, n) {
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
      let O = 10 * E.Z.Millis.SECOND;
      function j() {
        let e = (0, Z.QF)(),
          t = (0, Z.Ht)();
        (0, f.lW)({
          type: y.BmY.DISPATCH,
          pid: e,
          token: t,
          payloads: [{ type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: e }],
        });
      }
      class A extends s.PureComponent {
        componentDidMount() {
          (this.notificationTimer = setTimeout(this.hideNotification, O)),
            p.Z.track(y.rMx.NOTIFICATION_VIEWED, {
              notif_type: I.n0.OverlayCrashed,
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
                  theme: y.BRd.DARK,
                  children: (s) =>
                    (0, i.jsxs)(h.Clickable, {
                      className: a()(s, T.container),
                      onClick: (e) => e.stopPropagation(),
                      children: [
                        (0, i.jsx)(g.ZP, {
                          expand: !0,
                          icon: (0, i.jsx)(_.Z, {
                            width: 40,
                            height: 40,
                            className: T.notificationIcon,
                          }),
                          title: N.intl.string(N.t.U38qZm),
                          confirmText: N.intl.string(N.t.TzAl1d),
                          onNotificationClick: this.handleNotificationClick,
                          onConfirmClick: this.handleReload,
                          onDismissClick: this.hideNotification,
                        }),
                        n && null != e
                          ? (0, i.jsxs)(C.ZP, {
                              className: T.stackTrace,
                              children: [
                                (0, i.jsx)(C.ZP.Bar, {
                                  children: "Error Details",
                                }),
                                (0, i.jsx)(C.ZP.Content, {
                                  className: T.stackTraceCode,
                                  children: (0, i.jsx)("code", {
                                    className: T.code,
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
            b(this, "state", { showTrace: !1, busy: !1 }),
            b(this, "notificationTimer", void 0),
            b(this, "hideNotification", () => {
              j();
              let { notificationTimer: e } = this;
              null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            b(this, "handleReload", (e) => {
              this.setState({ busy: !0 }),
                j(),
                p.Z.track(
                  y.rMx.NOTIFICATION_CLICKED,
                  { notif_type: I.n0.OverlayCrashed, action_type: "reload" },
                  !0,
                ),
                e.stopPropagation(),
                setTimeout(() => location.reload(!0), 200);
            }),
            b(this, "handleNotificationClick", (e) => {
              e.stopPropagation();
              let { notificationTimer: t } = this;
              null != t && clearTimeout(t),
                e.shiftKey && this.setState({ showTrace: !0 });
            });
        }
      }
      let M = o().throttle(
        () => {
          m.Z.increment(
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
      class P extends s.PureComponent {
        componentDidCatch(e, t) {
          let n = (0, v.s1)().location;
          this.setState({ error: e, info: t });
          let i = (0, Z.QF)(),
            s = (0, Z.Ht)();
          (0, f.lW)({
            type: y.BmY.DISPATCH,
            pid: (0, Z.QF)(),
            token: s,
            payloads: [
              { type: "OVERLAY_CRASHED", pid: i },
              { type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: i },
            ],
          }),
            setImmediate(() => window.addEventListener("click", j));
          let r = x.Z.captureCrash(e, { extra: t });
          p.Z.track(y.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: r,
            error_level: "fatal",
          }),
            M();
        }
        render() {
          let { children: e, className: t } = this.props,
            { error: n, info: s } = this.state;
          return null != n
            ? (0, i.jsx)(A, { error: n, info: s })
            : (0, i.jsx)("div", { className: t, children: e });
        }
        constructor(...e) {
          super(...e), b(this, "state", { error: null, info: null });
        }
      }
      t.Z = P;
    },
    382790: function (e, t, n) {
      "use strict";
      n(47120);
      var i,
        s = n(200651),
        r = n(192379),
        a = n(120356),
        l = n.n(a),
        o = n(442837),
        c = n(552062),
        d = n(416568),
        u = n(914010),
        h = n(518084),
        p = n(178528),
        f = n(669083),
        m = n(483962),
        g = n(711553),
        v = n(388032),
        _ = n(925790);
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
      function x(e) {
        let { closePopout: t } = e;
        return (0, s.jsx)(f.Z, { onClose: t });
      }
      class Z extends (i = r.PureComponent) {
        render() {
          let { selectedGuildId: e, locked: t, contained: n } = this.props,
            i =
              null != e
                ? (0, s.jsx)(
                    p.Z,
                    { guildId: e, onDragStart: this.onDragStart },
                    e,
                  )
                : (0, s.jsx)(g.Z, {
                    title: v.intl.string(v.t.YUU0RE),
                    renderSettings: x,
                    onDragStart: this.onDragStart,
                    children: (0, s.jsx)(m.Z, {}),
                  }),
            r = n ? "div" : h.ZP;
          return (0, s.jsxs)(r, {
            className: l()(_.base, { [_.widget]: !n }),
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
            E(this, "onDragStart", (e) => {
              let { dragStart: t } = this.props;
              t(c.B.MOVE, e.clientX, e.clientY);
            });
        }
      }
      E(Z, "defaultProps", { contained: !1 }),
        (t.Z = o.ZP.connectStores([u.Z], () => ({
          selectedGuildId: u.Z.getGuildId(),
        }))(Z));
    },
    990673: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(382790),
        r = n(430036),
        a = n(518084),
        l = n(240038);
      function o(e) {
        let { dragStart: t, dragging: n, pinned: o, locked: c } = e;
        return (0, i.jsxs)(a.ZP, {
          className: l.wrapper,
          children: [
            (0, i.jsx)(s.Z, { contained: !0, dragStart: t, locked: c }),
            (0, i.jsx)(r.Z, {
              dragStart: t,
              locked: c,
              pinned: o,
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
        l = n(481060),
        o = n(556296),
        c = n(13140),
        d = n(981631),
        u = n(389439);
      let h = {
        [d.kg4.TOGGLE_MUTE]: {
          legacy: { slash: l.MicrophoneSlashIcon, default: l.MicrophoneIcon },
          new: { slash: l.MicrophoneSlashIcon, default: l.MicrophoneIcon },
        },
      };
      function p(e) {
        let { value: t, action: n, shouldShow: s } = e,
          d = (0, a.e7)([o.Z], () => o.Z.getKeybindForAction(n, !1, !0)),
          p = (0, l.useRedesignIconContext)().enabled;
        if (null == d || !s) return null;
        let f = c.BB(d.shortcut),
          m = p ? h[n].new : h[n].legacy,
          g = t ? m.slash : m.default;
        return (0, i.jsxs)("div", {
          className: u.keybindIndicator,
          children: [
            (0, i.jsx)(g, {
              className: u.keybindIcon,
              size: "xs",
              color: "currentColor",
            }),
            (0, i.jsx)(l.Text, {
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
          return m;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var s = n(704215),
        r = n(481060),
        a = n(13245),
        l = n(312839),
        o = n(706140),
        c = n(658785),
        d = n(987650),
        u = n(921944),
        h = n(388032),
        p = n(240209);
      function f() {
        let [e, t] = (0, o.cv)([s.z.OVERLAY_KEYBIND_NOTIFICATION]),
          { showKeybindIndicators: n } = c.Z.useExperiment(
            { location: "Overlay" },
            { autoTrackExposure: !1 },
          );
        return {
          showKeybindIndicators: null != e && n,
          dismissKeybindNotification: t,
        };
      }
      function m(e) {
        let { markAsDismissed: t } = e,
          { trackView: n, trackClick: s } = (0, l.R)(
            d.n0.KeybindIndicatorsNotification,
            { notif_type: d.n0.KeybindIndicatorsNotification },
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
        l = n(692546),
        o = n(981631),
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
            props: { position: s, zIndex: r },
          } = this;
          switch (s) {
            case o._vf.TOP_LEFT:
            case o._vf.BOTTOM_LEFT:
              e = 0;
              break;
            default:
              t = 0;
          }
          switch (s) {
            case o._vf.BOTTOM_LEFT:
            case o._vf.BOTTOM_RIGHT:
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
                    onNotificationClick: o,
                    onConfirmClick: d,
                    onCancelClick: u,
                    ...h
                  },
                },
              },
            } = this,
            p = (0, i.jsx)("div", {
              className: c.notificationContainer,
              children: (0, i.jsx)(a.ZP, {
                ...h,
                onNotificationShow:
                  0 === t ? this.handleNotificationShow : null,
                onDismissClick: this.handleDismissClick,
                onNotificationClick:
                  null != o ? this.handleNotificationClick : null,
                onConfirmClick: null != d ? this.handleConfirmClick : null,
                onCancelClick: null != u ? this.handleCancelClick : null,
                renderFooter: this.renderFooter,
                expand: !e && 0 === t,
                disabled: 0 !== t,
              }),
            });
          return 0 === t
            ? (0, i.jsx)(l.Z, { observeInterval: 200, children: p })
            : p;
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
              r.Z.updateNotificationStatus(t), null != n && n(e, t);
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
            }),
            d(this, "renderFooter", (e) => {
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
        l = n(442837),
        o = n(261435),
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
          let r = -1;
          return (0, i.jsx)("div", {
            className: a()(h.container, h[n]),
            children: t.map((t) =>
              s && t.status === u._1z.TIMED_OUT
                ? null
                : ((r += 1),
                  (0, i.jsx)(
                    d.Z,
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
      t.Z = l.ZP.connectStores([o.Z, c.Z], () => ({
        notifications: o.Z.getNotifications(),
        position: c.Z.getNotificationPositionMode(),
      }))(p);
    },
    631553: function (e, t, n) {
      "use strict";
      let i;
      n.d(t, {
        Z: function () {
          return eg;
        },
      }),
        n(653041);
      var s = n(200651),
        r = n(192379),
        a = n(120356),
        l = n.n(a),
        o = n(921738),
        c = n.n(o),
        d = n(954955),
        u = n.n(d),
        h = n(498607),
        p = n.n(h),
        f = n(442837),
        m = n(481060),
        g = n(668781),
        v = n(239091),
        _ = n(13245),
        E = n(425493),
        x = n(951483),
        Z = n(714338),
        S = n(185666),
        C = n(100527),
        I = n(906732),
        y = n(146282),
        N = n(600164);
      n(70097);
      var T = n(594190),
        b = n(567409),
        O = n(74299),
        j = n(989941),
        A = n(377400),
        M = n(329557),
        P = n(199902),
        L = n(314897),
        R = n(592125),
        w = n(430824),
        k = n(131951),
        D = n(944486),
        z = n(618541),
        B = n(449224),
        V = n(574254),
        U = n(556296),
        W = n(237997),
        G = n(451478),
        F = n(70956),
        H = n(358085),
        Y = n(998502),
        K = n(13140),
        X = n(145597),
        Q = n(658785),
        q = n(681603),
        J = n(358446),
        $ = n(348733),
        ee = n(312178),
        et = n(708383),
        en = n(923532),
        ei = n(107200),
        es = n(987650),
        er = n(981631),
        ea = n(206583),
        el = n(388032),
        eo = n(310906);
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
        (0, v.jW)(e, async () => {
          let { default: e } = await n.e("92780").then(n.bind(n, 930381));
          return (t) => (0, s.jsx)(e, { ...t });
        });
      }
      H.isPlatformEmbedded;
      let ep = (e) => {
          let { keybind: t, onClick: n, isPreviewingInGame: i, locked: r } = e,
            a = r ? m.Clickable : "div";
          return (0, s.jsx)(a, {
            className: l()(eo.overlayBackground, {
              [eo.overlayActive]: !r,
              [eo.overlayLocked]: r,
              [eo.previewMode]: !r && i,
            }),
            onMouseDown: (e) => {
              let { currentTarget: t, target: i, button: s } = e;
              s === er.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: eh,
            children: r
              ? null
              : (0, s.jsx)("div", {
                  className: eo.closeContainer,
                  children: (0, s.jsx)(E.Z, {
                    variant: E.Z.Variants.BOLD,
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
            ctrlKey: r,
          } = e;
          return { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: r };
        };
      class em extends r.Component {
        handleLock() {
          !(0, m.hasAnyModalOpen)() &&
            !V.Z.isOpen() &&
            _.Z.setInputLocked(!0, (0, X.QF)());
        }
        handleDeactivate() {
          _.Z.deactivateAllRegions();
        }
        componentDidMount() {
          _.Z.startSession(),
            A.Z.initialize(),
            S.Z.initialize(),
            M.Z.initialize();
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
                _.Z.track(er.rMx.OVERLAY_LOCKED, { unlocked_duration: e }),
                  (ed = null);
              }
              Z.Z.disable(),
                (this.activeKeyEventShapes = []),
                W.Z.isPinned(er.Odu.TEXT) &&
                  (Z.Z.setLayout(x.Xq), Z.Z.enable());
            } else
              e.locked &&
                !this.props.locked &&
                (window.removeEventListener("contextmenu", eu, !1),
                null == ed &&
                  ((ed = Date.now()), _.Z.track(er.rMx.OVERLAY_UNLOCKED)),
                Z.Z.disable(),
                (this.activeKeyEventShapes = []),
                Z.Z.setLayout(x.Sr),
                Z.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
              (this.lockEventShape = (0, K.d2)(this.props.keybindKeyCodes)),
              !e.hasFetchedContentInventory &&
                this.props.hasFetchedContentInventory &&
                _.Z.notifyContentInventoryReady(
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
            voiceChannelId: r,
            game: a,
            showKeybindNotification: l,
            dismissKeybindNotification: o,
          } = this.props;
          _.Z.track(er.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: W.Z.isPinned(er.Odu.TEXT),
          }),
            Q.Z.trackExposure({ location: "Overlay" });
          let c = n && !i && null != a,
            d = e && null != s && null != r,
            u = { type: es.nc.WELCOME };
          if (
            (l
              ? (u = { type: es.nc.KEYBIND_INDICATORS, markAsDismissed: o })
              : c && d
                ? (u = {
                    type: es.nc.GO_LIVE_VOICE,
                    game: a,
                    voiceChannelId: r,
                    voiceGuild: s,
                  })
                : c && (u = { type: es.nc.GO_LIVE_NON_VOICE, game: a }),
            _.Z.overlayMounted(u),
            window.addEventListener("resize", this.handleWindowResize),
            t && window.addEventListener("contextmenu", eu, !1),
            H.isPlatformEmbedded)
          ) {
            let e = Y.ZP.requireModule("discord_overlay2");
            void 0 !== e.setPerfInfoCallback &&
              (e.setPerfInfoCallback((e) => {
                _.Z.track(er.rMx.OVERLAY_PERF_INFO, e);
              }),
              e.broadcastCommand({
                message: "set_perf_report_interval",
                interval: 15 * F.Z.Millis.MINUTE,
              })),
              Y.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                W.Z.getDisableExternalLinkAlert() || t === z.Z.getLastURL()
                  ? Y.ZP.send("OPEN_EXTERNAL_URL", t)
                  : g.Z.show({
                      title: el.intl.string(el.t.WLx4Fx),
                      body: el.intl.string(el.t.H8O1TE),
                      secondaryConfirmText: el.intl.string(el.t.IwqGhY),
                      confirmText: el.intl.string(el.t["3PatS0"]),
                      cancelText: el.intl.string(el.t["ETE/oK"]),
                      onConfirmSecondary: () => {
                        _.Z.disableExternalLinkAlert(),
                          Y.ZP.send("OPEN_EXTERNAL_URL", t);
                      },
                      onConfirm: () => Y.ZP.send("OPEN_EXTERNAL_URL", t),
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
            A.Z.terminate(),
            S.Z.terminate(),
            M.Z.terminate();
        }
        renderInvalidSizeMessage() {
          return (0, s.jsx)(N.Z, {
            justify: N.Z.Justify.CENTER,
            align: N.Z.Align.CENTER,
            className: eo.invalidContainer,
            children: (0, s.jsx)("div", {
              className: eo.inactiveContainer,
              children: el.intl.format(el.t.ketnW1, X.FW),
            }),
          });
        }
        render() {
          let {
              locked: e,
              keybind: t,
              incompatibleApp: n,
              initialized: r,
              isPreviewingInGame: a,
              activeRegions: o,
              windowSize: c,
              voiceGuild: d,
              voiceChannelId: u,
            } = this.props,
            { width: h, height: p } = c;
          if (0 === h || 0 === p || n || !r) return null;
          let f = e || a,
            m = L.default.getId();
          return (0, s.jsxs)("div", {
            className: eo.overlay,
            children: [
              (0, s.jsx)(et.Z, {}),
              a &&
                (0, s.jsx)("header", {
                  className: eo.previewingInGameHeader,
                  children: el.intl.string(el.t.iOq96u),
                }),
              i,
              (!e || o.has(er.O0n.TEXT_WIDGET)) &&
                (0, s.jsx)(ep, {
                  locked: e,
                  keybind: t,
                  onClick: e ? this.handleDeactivate : this.handleLock,
                  isPreviewingInGame: a,
                }),
              (0, X.Te)(c)
                ? (0, s.jsx)(ee.Z, {
                    className: l()({
                      [eo.layoutLocked]: e,
                      [eo.layoutUnlocked]: !e,
                    }),
                  })
                : e
                  ? null
                  : this.renderInvalidSizeMessage(),
              (0, s.jsx)(ei.Z, {}),
              null != d &&
                null != u &&
                (0, s.jsx)(en.Z, {
                  streamerId: m,
                  guildId: d.id,
                  channelId: u,
                }),
              (0, s.jsx)($.Z, { locked: f, keybind: t }),
              (0, s.jsx)(q.Z, {}),
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
              let { locked: s, activeRegions: r } = this.props;
              t.keyCode === c().codes.esc &&
                s &&
                r.has(er.O0n.TEXT_WIDGET) &&
                _.Z.deactivateAllRegions();
            }),
            ec(this, "onKeyUpGlobal", (e) => {
              let t = ef(e),
                n = this.getActiveKeyEventIndex(t);
              n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
          let t = e.locked && W.Z.isPinned(er.Odu.TEXT);
          Z.Z.setLayout(t ? x.Xq : x.Sr), t && Z.Z.enable();
        }
      }
      function eg() {
        let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: r,
          } = (0, f.cj)([W.Z], () => ({
            locked: W.Z.isLocked((0, X.QF)()),
            initialized: W.Z.initialized,
            incompatibleApp: W.Z.incompatibleApp,
            activeRegions: W.Z.getActiveRegions(),
            isPreviewingInGame: W.Z.isPreviewingInGame(),
          })),
          a = (0, f.e7)([G.Z], () => G.Z.windowSize()),
          l = (0, f.e7)([U.Z], () => U.Z.getOverlayKeybind()),
          o = (0, f.e7)([D.Z], () => D.Z.getVoiceChannelId()),
          c = (0, f.e7)([R.Z], () => R.Z.getChannel(o)),
          d = (0, f.e7)([w.Z], () =>
            null != c ? w.Z.getGuild(c.guild_id) : null,
          ),
          u = (0, f.e7)([T.ZP, B.Z], () => (0, j.Z)(T.ZP, B.Z)),
          h = (0, b.Ns)(null == u ? void 0 : u.id),
          p = (0, f.e7)(
            [y.Z],
            () => null != y.Z.getLastFeedFetchDate(ea.YN.GAME_PROFILE_FEED),
          ),
          g = (0, f.e7)([k.Z], () => (0, O.Z)(k.Z)),
          v = (0, f.e7)([P.Z], () => null != P.Z.getCurrentUserActiveStream()),
          { analyticsLocations: _ } = (0, I.ZP)(C.Z.OVERLAY),
          { showKeybindIndicators: E, dismissKeybindNotification: x } = (0,
          J.K)();
        return (0, s.jsx)(I.Gt, {
          value: _,
          children: (0, s.jsx)(m.RedesignIconContextProvider, {
            children: (0, s.jsx)(em, {
              locked: e,
              initialized: t,
              incompatibleApp: n,
              activeRegions: i,
              isPreviewingInGame: r,
              windowSize: a,
              keybind: null != l ? (0, K.BB)(l.shortcut, !0) : "???",
              keybindKeyCodes: null != l ? l.shortcut : [],
              connectedToVoice: null != o,
              voiceChannelId: null != c ? c.id : null,
              voiceGuild: d,
              game: u,
              canGoLive: g,
              isStreaming: v,
              showKeybindNotification: E,
              dismissKeybindNotification: x,
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
      var i = n(200651),
        s = n(192379),
        r = n(442837),
        a = n(765250),
        l = n(13245),
        o = n(26229),
        c = n(552062),
        d = n(355863),
        u = n(237997),
        h = n(451478),
        p = n(434529),
        f = n(145597),
        m = n(382790),
        g = n(990673),
        v = n(906037),
        _ = n(430036),
        E = n(839434),
        x = n(981631);
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
      let S = {
        [x.Odu.TEXT](e) {
          let { dragging: t, locked: n, pinned: s, dragStart: r } = e;
          return (0, i.jsx)(_.Z, {
            dragStart: r,
            locked: n,
            pinned: s,
            dragging: t,
          });
        },
        [x.Odu.GUILDS](e) {
          let { locked: t, dragStart: n } = e;
          return (0, i.jsx)(m.Z, { dragStart: n, locked: t });
        },
        [x.Odu.VOICE](e) {
          let {
            id: t,
            anchor: n,
            isPreviewingInGame: s,
            locked: r,
            pinned: a,
          } = e;
          return (0, i.jsx)(E.Z, {
            anchor: n,
            id: t,
            locked: r,
            pinned: a,
            widget: x.Odu.VOICE,
            isPreviewingInGame: s,
          });
        },
        [x.Odu.GUILDS_TEXT](e) {
          let { dragging: t, locked: n, dragStart: s } = e;
          return (0, i.jsx)(g.Z, {
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
            (l.Z.track(
              x.rMx.OVERLAY_LAYOUT_UPDATED,
              this.state.lastLayoutUpdate,
            ),
            this.setState({ lastLayoutUpdate: null }));
        }
        renderWidget(e, t, n) {
          let {
              props: { locked: i, isPreviewingInGame: s },
              state: { dragging: r },
            } = this,
            a = S[e.type];
          if (null == a)
            throw Error("OverlayLayout: Widget does not exist in WidgetMap");
          return (l) =>
            a({
              id: e.id,
              locked: i,
              pinned: e.pinned,
              dragging: r,
              isPreviewingInGame: s,
              anchor: t,
              size: n,
              dragStart: l,
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
          let { id: l, pinned: o, zIndex: d, size: u, anchor: h } = e,
            f = (0, p.w_)(u, n),
            m = (0, p.KR)(h, n),
            { minSize: g, resizeX: _, resizeY: E, dragAnywhere: x } = t,
            Z = (0, v.eM)({ locked: s, isPreviewingInGame: r, pinned: o }),
            S = { minX: 0, minY: 0, maxX: n.width, maxY: n.height };
          return (0, i.jsx)(c.Z, {
            id: l,
            size: f,
            anchor: m,
            container: S,
            minSize: g,
            hidden: !Z,
            resizeX: _,
            resizeY: E,
            style: { zIndex: d },
            dragAnywhere: x,
            active: !s || a,
            onUpdate: this.handleUpdate,
            onClick: this.handleFocus,
            onDragStart: this.handleDragStart,
            onDragEnd: this.handleDragEnd,
            children: this.renderWidget(e, m, f),
          });
        }
        constructor(...e) {
          super(...e),
            Z(this, "state", { lastLayoutUpdate: null, dragging: !1 }),
            Z(this, "handleUpdate", (e, t, n, i, s) => {
              let {
                props: { layoutSize: r },
                state: { lastLayoutUpdate: l },
              } = this;
              if (!(0, f.Te)(r)) return;
              let o = (0, p.jL)(n, r),
                u = (0, p.Ox)(i, r);
              (0, a.Os)(t), (0, a.nv)({ widgetId: t, anchor: o, size: u });
              let h = e === c.B.MOVE,
                m = (0, p.PY)(n, r.width, r.height, s.width, s.height);
              this.setState({
                lastLayoutUpdate: {
                  was_resized: (null != l && l.was_resized) || !h,
                  was_dragged: (null != l && l.was_dragged) || h,
                  widget_type: d.Z.getWidgetType(t),
                  window_width: r.width,
                  window_height: r.height,
                  widget_width: s.width,
                  widget_height: s.height,
                  widget_left: m.left,
                  widget_top: m.top,
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
                (e.pinned && l.Z.setPreviewInGameMode(!0),
                this.setState({ dragging: !0 }));
            }),
            Z(this, "handleDragEnd", () => {
              let { widget: e } = this.props;
              null != e &&
                (e.pinned && l.Z.setPreviewInGameMode(!1),
                this.setState({ dragging: !1 }));
            });
        }
      }
      let I = r.ZP.connectStores([d.Z, u.Z], (e) => {
        let { widgetId: t } = e,
          n = d.Z.getWidget(t),
          i = u.Z.getActiveRegions();
        return {
          widget: n,
          widgetConfig: null != n ? d.Z.getWidgetConfig(n.type) : null,
          locked: u.Z.isInstanceLocked(),
          isPreviewingInGame: u.Z.isPreviewingInGame(),
          isActiveRegion:
            null != n && n.type === x.Odu.TEXT && i.has(x.O0n.TEXT_WIDGET),
        };
      })(C);
      function y(e, t) {
        return (0, i.jsx)(I, { widgetId: e, layoutSize: t }, e);
      }
      t.Z = r.ZP.connectStores([d.Z, h.Z], () => {
        var e;
        return {
          layout:
            null !== (e = d.Z.getLayout(f.qU)) && void 0 !== e ? e : void 0,
          layoutSize: h.Z.windowSize(),
          renderWidget: y,
        };
      })(o.Z);
    },
    913487: function (e, t, n) {
      "use strict";
      var i = n(570140),
        s = n(703656),
        r = n(981631);
      __OVERLAY__ &&
        i.Z.subscribe("OVERLAY_OPEN_MESSAGE", function (e) {
          let { guildId: t, channelId: n, messageId: i } = e;
          (0, s.dL)({ pathname: r.Z5c.CHANNEL(t, n, i) });
        });
    },
    906037: function (e, t, n) {
      "use strict";
      n.d(t, {
        CR: function () {
          return a;
        },
        eM: function () {
          return r;
        },
        m3: function () {
          return l;
        },
      });
      var i = n(570140),
        s = n(449224);
      function r(e) {
        return (!e.isPreviewingInGame && !e.locked) || e.pinned;
      }
      function a(e, t, n) {
        (e.locked !== t.locked ||
          e.pinned !== t.pinned ||
          n(e) !== n(t) ||
          r(e) !== r(t)) &&
          l(t, n(t));
      }
      function l(e, t) {
        var n, a;
        let l = r(e),
          o = s.Z.getGame();
        i.Z.dispatch({
          type: "OVERLAY_WIDGET_CHANGED",
          gameName:
            null !== (n = null == o ? void 0 : o.name) && void 0 !== n
              ? n
              : null,
          gameId:
            null !== (a = null == o ? void 0 : o.id) && void 0 !== a ? a : null,
          widgetType: e.widget,
          visible: l && t,
          locked: e.locked,
          pinned: e.pinned,
        });
      }
    },
    708383: function (e, t, n) {
      "use strict";
      var i = n(200651),
        s = n(192379),
        r = n(512969),
        a = n(749210),
        l = n(287734),
        o = n(765717),
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
            ? (a.Z.selectGuild(t),
              l.default.selectChannel({
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
        (0, i.jsxs)(r.rs, {
          children: [
            (0, i.jsx)(o.Z, {
              path: u.Z5c.CHANNEL(
                c.Hw.guildId(),
                c.Hw.channelId({ optional: !0 }),
                ":messageId?",
              ),
              component: h,
            }),
            (0, i.jsx)(o.Z, { component: h }),
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
        l = n(399606),
        o = n(822183),
        c = n(673125),
        d = n(610947),
        u = n(594174),
        h = n(425423);
      function p(e) {
        let { streamerId: t, channelId: n } = e,
          r = s.useRef(null),
          o = (0, l.e7)([u.default], () => u.default.getCurrentUser());
        return (
          a()(null != o, "user cannot be null"),
          (0, d.Z)(r, o, t, n),
          (0, i.jsx)("canvas", { className: h.canvas, ref: r })
        );
      }
      function f(e) {
        let { guildId: t, channelId: n, streamerId: s } = e,
          { isSharedCanvasEnabled: r } = o.Z.useExperiment(
            { guildId: t, location: "f0d1b1_1" },
            { autoTrackExposure: !0 },
          ),
          a = (0, l.e7)([c.Z], () => c.Z.visibleOverlayCanvas);
        return r && a
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
      var i = n(200651);
      n(192379);
      var s = n(442837),
        r = n(352527),
        a = n(183584),
        l = n(487029),
        o = n(592125),
        c = n(944486),
        d = n(554174),
        u = n(710111),
        h = n(716079);
      function p() {
        let [e, t] = (0, s.Wu)([r.Z], () => [r.Z.enabled, r.Z.keepOpen]),
          n = (0, s.e7)([c.Z], () => c.Z.getVoiceChannelId()),
          p = (0, s.e7)([o.Z], () => o.Z.getChannel(n), [n]),
          f = null == p ? void 0 : p.getGuildId();
        return e && null != p
          ? (0, i.jsx)("div", {
              className: h.widget,
              children: (0, i.jsx)(l.Z, {
                width: u.FW.width,
                height: u.FW.height,
                guildId: f,
                channel: p,
                keepOpen: t,
                onClose: function () {
                  let e = (0, d.Z)();
                  null != e && (0, a.oZ)(e);
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
          return er;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        l = n(512722),
        o = n.n(l),
        c = n(442837),
        d = n(481060),
        u = n(239091),
        h = n(430742),
        p = n(904245),
        f = n(13245),
        m = n(144144),
        g = n(738619),
        v = n(744061),
        _ = n(36311),
        E = n(655687),
        x = n(823748),
        Z = n(25007),
        S = n(199649),
        C = n(1397),
        I = n(541716),
        y = n(752305),
        N = n(974251),
        T = n(893718),
        b = n(249458),
        O = n(552062),
        j = n(957730),
        A = n(400023),
        M = n(623292),
        P = n(807092),
        L = n(592125),
        R = n(703558),
        w = n(731290),
        k = n(430824),
        D = n(375954),
        z = n(944486),
        B = n(914010),
        V = n(594174),
        U = n(556296),
        W = n(237997),
        G = n(585483),
        F = n(838440),
        H = n(13140),
        Y = n(519591),
        K = n(906037),
        X = n(786906),
        Q = n(518084),
        q = n(987650),
        J = n(981631),
        $ = n(388032),
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
      let en = q.wF.TOP;
      class ei extends s.Component {
        componentDidUpdate(e) {
          e.channel.id !== this.props.channel.id &&
            this.draftDidChange(this.props),
            (this.props.channel !== e.channel ||
              (this.props.isTemporarilyActive && !e.isTemporarilyActive)) &&
              this.setState({ focused: !0 });
        }
        componentWillUnmount() {
          R.Z.removeChangeListener(this.draftDidChange),
            G.S.unsubscribe(J.CkL.TEXTAREA_FOCUS, this.focusInput),
            G.S.unsubscribe(J.CkL.TEXTAREA_BLUR, this.blurInput);
        }
        render() {
          let { channel: e, placeholder: t, ...n } = this.props,
            {
              focused: s,
              textValue: r,
              contentWarningProps: a,
              richValue: l,
            } = this.state,
            c = (0, i.jsx)(d.Popout, {
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
                  o()(
                    null != a,
                    "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null",
                  ),
                  (0, i.jsx)(v.Z, { onClose: t, ...a })
                );
              },
              children: () =>
                (0, i.jsx)(T.Z, {
                  ...n,
                  renderAttachButton: this.renderAttachButton,
                  channel: e,
                  type: I.I.OVERLAY,
                  onFocus: () => this.setState({ focused: !0 }),
                  onBlur: () => this.setState({ focused: !1 }),
                  placeholder: t,
                  textValue: r,
                  richValue: l,
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
                i = R.Z.getDraft(e.channel.id, R.d.ChannelMessage);
              n !== i && "" === i && t.setState((0, y.eK)(i));
            }),
            et(this, "handleTextareaKeyDown", (e) => {
              if (
                e.which === J.yXg.ARROW_UP &&
                !e.shiftKey &&
                !e.altKey &&
                !e.ctrlKey &&
                !e.metaKey &&
                0 === this.state.textValue.length
              ) {
                e.preventDefault();
                let { channel: t } = this.props,
                  n = D.Z.getLastEditableMessage(t.id);
                null != n && p.Z.startEditMessage(t.id, n.id, n.content);
              }
            }),
            et(this, "handleTextareaChange", (e, t, n) => {
              let {
                channel: { id: i },
              } = this.props;
              h.Z.changeDraft(i, this.state.textValue, R.d.ChannelMessage),
                "" !== t ? m.Z.startTyping(i) : m.Z.stopTyping(i),
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
                : (0, F.v)({
                    openWarningPopout: (e) =>
                      this.setState({ contentWarningProps: e }),
                    type: I.I.OVERLAY,
                    content: t,
                    channel: n,
                  }).then((e) => {
                    let { valid: r, failureReason: a } = e;
                    if (!r)
                      return a === J.zYc.SLOWMODE_COOLDOWN
                        ? (G.S.dispatch(J.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                          { shouldClear: !1, shouldRefocus: !0 })
                        : { shouldClear: !1, shouldRefocus: !1 };
                    let l = p.Z.getSendMessageOptionsForReply(i);
                    return (p.Z.sendMessage(n.id, j.ZP.parse(n, t), !0, l),
                    this.setState((0, y.H2)()),
                    (0, M.A6)(n.id),
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
                draftType: R.d.ChannelMessage,
                editorTextContent: this.state.textValue,
                setValue: (e) =>
                  this.handleTextareaChange(null, e, (0, y.JM)(e)),
                canOnlyUseTextCommands: e,
              }),
            ),
            R.Z.addChangeListener(this.draftDidChange);
          let n = R.Z.getDraft(e.channel.id, R.d.ChannelMessage);
          (this.state = {
            ...(0, y.eK)(n),
            focused: !1,
            contentWarningProps: null,
          }),
            G.S.subscribe(J.CkL.TEXTAREA_FOCUS, this.focusInput),
            G.S.subscribe(J.CkL.TEXTAREA_BLUR, this.blurInput);
        }
      }
      class es extends s.PureComponent {
        componentDidUpdate(e) {
          let { channel: t, activated: n } = this.props;
          if (((0, K.CR)(e, this.props, this.shouldDisplay), null != t))
            n &&
              !e.activated &&
              f.Z.track(J.rMx.OVERLAY_UNLOCKED, {
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
            guild: l,
            locked: o,
            activated: c,
            chatKeybind: d,
            pinned: u,
            isPreviewingInGame: h,
            dragging: p,
            pendingReply: f,
          } = this.props;
          if (null == t) return null;
          let m = o || h,
            v = !r && null != t && t.isNSFW(),
            E = !m || c;
          return (
            (e =
              v && null != l
                ? (0, i.jsx)(_.Z, { guild: l })
                : (0, i.jsx)(
                    A.Z,
                    {
                      channel: t,
                      className: ee.messages,
                      forceCompact: u,
                      showNewMessagesBar: !m,
                      scrollerClassName: u ? ee.scroller : void 0,
                      showingQuarantineBanner: !1,
                    },
                    t.id,
                  )),
            (0, i.jsx)(b.G.Provider, {
              value: {
                disableInteractions: u && o && !c,
                disableAnimations: u && m && !c,
              },
              children: (0, i.jsxs)(s.Fragment, {
                children: [
                  !o && !h && (0, i.jsx)(Z.Z, { channel: t, guild: l }),
                  (0, i.jsx)(Q.ZP.Background, {
                    opacityOverride: o || h ? null : en,
                    children: (0, i.jsx)("div", {
                      className: a()(ee.messagesContainer, {
                        [ee.isDragging]: p,
                        [ee.disableHoverStates]: u && o && !c,
                      }),
                      children: e,
                    }),
                  }),
                  v
                    ? null
                    : (0, i.jsx)("div", {
                        children: E
                          ? (0, i.jsx)(Q.ZP.Background, {
                              opacityOverride: o || h ? null : en,
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
                                    children: (0, i.jsx)(g.Z, {
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
                                opacityOverride: q.wF.LOWER,
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
                                            keybind: d,
                                            channelName: t.isMultiUserDM()
                                              ? t.name
                                              : "#".concat(t.name),
                                          },
                                        )
                                      : $.intl.formatToPlainString(
                                          $.t["hxz/4O"],
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
              isPreviewingInGame: r,
              opacity: l,
            } = this.props,
            o = J.t_t.UNPINNED;
          s
            ? (o = J.t_t.IN_GAME_ACTIVE)
            : (n && t) || r
              ? (o = J.t_t.IN_GAME_TEXT)
              : n && (o = J.t_t.PINNED);
          let c = (t && !s) || r,
            d = n && (c || s),
            u = n && s,
            h = n && c && !s,
            p = (0, Y.Z)(l);
          return (0, i.jsx)(Q.ZP, {
            className: a()(p, {
              [ee.widgetWrapper]: !n,
              [ee.widgetWrapperPinned]: n,
              [ee.locked]: h,
              [ee.inGame]: d,
              [ee.inGameActive]: u,
              [ee.pinned]: n,
              "overlay-unlocked": !t,
            }),
            type: o,
            opacity: l,
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
          let l = (0, i.jsxs)(s.Fragment, {
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
            ? this.renderContainedWrapper(l)
            : this.renderWidgetWrapper(l);
        }
        constructor(...e) {
          super(...e),
            et(this, "handlePin", () => {
              var e, t, n;
              let i = !this.props.pinned;
              f.Z.track(J.rMx.OVERLAY_PIN_TOGGLED, {
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
                widget_type: J.Odu.TEXT,
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
          s = (0, c.e7)([B.Z], () => B.Z.getGuildId()),
          r = (0, c.e7)([z.Z], () => z.Z.getChannelId(s)),
          a = (0, c.e7)([L.Z], () => L.Z.getChannel(r)),
          l = (0, c.e7)([U.Z], () => U.Z.getOverlayChatKeybind()),
          o = null != l ? (0, H.BB)(l.shortcut, !0) : "]",
          [d, u, h] = (0, c.Wu)([W.Z], () => [
            W.Z.getTextWidgetOpacity(),
            W.Z.getActiveRegions(),
            !t && W.Z.isPreviewingInGame(),
          ]),
          p = (0, c.e7)([k.Z], () => k.Z.getGuild(s)),
          f = (0, c.e7)([w.Z], () => null != s && w.Z.didAgree(s)),
          m = null != a && a.isPrivate() ? a.getRecipientId() : null,
          g = (0, c.e7)([P.Z], () =>
            null != r ? P.Z.getPendingReply(r) : void 0,
          ),
          v = (0, c.e7)([V.default], () =>
            null != m ? V.default.getUser(m) : null,
          ),
          { placeholder: _ } = (0, E.Z)(a);
        return null != a && null != p && J.TPd.GUILD_THREADS_ONLY.has(a.type)
          ? (0, i.jsx)(x.Z, {})
          : (0, i.jsx)(es, {
              guild: p,
              channel: a,
              user: v,
              opacity: d,
              nsfwAgree: f,
              chatKeybind: o,
              activated: u.has(J.O0n.TEXT_WIDGET),
              isPreviewingInGame: h,
              pendingReply: g,
              contained: t,
              placeholder: _,
              widget: J.Odu.TEXT,
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
        l = n(442837),
        o = n(481060),
        c = n(13245),
        d = n(287734),
        u = n(933557),
        h = n(984370),
        p = n(910611),
        f = n(131704),
        m = n(523746),
        g = n(592125),
        v = n(430824),
        _ = n(699516),
        E = n(944486),
        x = n(707878),
        Z = n(518084),
        S = n(388032),
        C = n(64437);
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
          let l = o.PhoneCallIcon,
            c = !1;
          return (
            s
              ? r
                ? ((e = S.intl.string(S.t["4ry6ys"])), (l = o.PhoneHangUpIcon))
                : (e = S.intl.string(S.t["0D/6R0"]))
              : a
                ? ((e = S.intl.string(S.t.PHzjvb)),
                  (t = o.Tooltip.Colors.RED),
                  (c = !0))
                : (e = S.intl.string(S.t.focH1t)),
            (0, i.jsx)(h.Z.Icon, {
              icon: l,
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
              channelName: r,
              guild: l,
              onMouseDown: c,
              onContextMenu: d,
              isPreviewingInGame: u,
              disableDragIndicator: f,
            } = this.props,
            { showOpacitySlider: m } = this.state;
          return m && !n
            ? (0, i.jsxs)(Z.ZP.Bar, {
                className: C.opacityHeader,
                children: [
                  (0, i.jsx)(x.Z, {}),
                  (0, i.jsx)(h.Z.Icon, {
                    icon: o.XSmallIcon,
                    onClick: this.handleCloseOpacitySettings,
                    tooltip: S.intl.string(S.t.cpT0Cg),
                  }),
                ],
              })
            : (0, i.jsx)(Z.ZP.Background, {
                opacityOverride: n || u ? null : 1,
                children: (0, i.jsx)("div", {
                  className: a()(e, t, C.headerContainer),
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
                        : (0, i.jsx)(o.DragIcon, {
                            size: "custom",
                            color: "currentColor",
                            className: a()(C.dragIcon, t),
                            width: 20,
                            height: 20,
                          }),
                      (0, p.ud)({ channel: s, channelName: r }),
                      n ? null : (0, p.v0)(s, l),
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
                  ? d.default.selectVoiceChannel(null)
                  : c.Z.callPrivateChannel(t.id, !1);
              else {
                let n = !i && !e.shiftKey;
                c.Z.callPrivateChannel(t.id, n);
              }
            }),
            I(this, "handleOpenOpacitySettings", () => {
              let { pinned: e } = this.props;
              this.setState({ showOpacitySlider: !0 }),
                e && c.Z.setPreviewInGameMode(!0);
            }),
            I(this, "handleCloseOpacitySettings", () => {
              let { pinned: e } = this.props;
              this.setState({ showOpacitySlider: !1 }),
                e && c.Z.setPreviewInGameMode(!1);
            }),
            I(this, "handleMouseDown", (e) => {
              let { onMouseDown: t } = this.props;
              null != t && t(e);
            }),
            I(this, "renderWidgetButtons", () => {
              let { locked: e, handlePin: t, pinned: n } = this.props,
                r = n ? S.intl.string(S.t.cSu80t) : S.intl.string(S.t.cM8Vnp);
              return e
                ? null
                : (0, i.jsxs)(s.Fragment, {
                    children: [
                      this.renderCallButton(),
                      n
                        ? (0, i.jsx)(h.Z.Icon, {
                            icon: o.BrowserCheckeredIcon,
                            tooltip: S.intl.string(S.t.OVovCQ),
                            onClick: this.handleOpenOpacitySettings,
                          })
                        : null,
                      (0, i.jsx)(h.Z.Icon, {
                        icon: n ? o.PinUprightSlashIcon : o.PinUprightIcon,
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
          s = (0, l.e7)([E.Z, g.Z], () => {
            let e = E.Z.getVoiceChannelId();
            return g.Z.getChannel(e);
          }),
          r = (0, l.e7)([v.Z], () => v.Z.getGuild(t.guild_id)),
          a = (0, l.e7)([m.Z], () => m.Z.isCallActive(t.id)),
          o = (0, u.ZP)(t),
          c = (0, l.e7)(
            [_.Z],
            () =>
              !!t.isDM() &&
              null != t.getRecipientId() &&
              _.Z.isBlocked(t.getRecipientId()),
          );
        return (0, i.jsx)(y, {
          channel: t,
          channelName: o,
          guild: r,
          channelHasActiveCall: a,
          userIsInChannelCall: null != s && s.id === t.id,
          isBlocked: c,
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
        l = n(13245),
        o = n(313201),
        c = n(237997),
        d = n(766032),
        u = n(987650),
        h = n(981631),
        p = n(388032),
        f = n(824425);
      let m = Object.values(u.wF).map((e) => 100 * e),
        g = (0, o.hQ)();
      class v extends s.PureComponent {
        handleUpdateBackgroundOpacity(e) {
          l.Z.setTextWidgetOpacity((0, d.Z)(e / 100)),
            l.Z.track(h.rMx.OVERLAY_SETTINGS_UPDATED, {
              text_opacity_slider: e,
            });
        }
        handlePreviewBackgroundOpacity(e) {
          l.Z.setTextWidgetOpacity((0, d.Z)(e / 100));
        }
        render() {
          return (0, i.jsxs)("div", {
            className: f.container,
            children: [
              (0, i.jsx)(a.FormTitle, {
                id: g,
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
                  minValue: m[0],
                  maxValue: m[m.length - 1],
                  handleSize: 10,
                  onValueChange: this.handleUpdateBackgroundOpacity,
                  asValueChanges: this.handlePreviewBackgroundOpacity,
                  markers: m,
                  onMarkerRender: h.dG4,
                  equidistant: !0,
                  stickToMarkers: !0,
                  "aria-labelledby": g,
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
      t.Z = r.ZP.connectStores([c.Z], () => ({
        opacity: c.Z.getTextWidgetOpacity(),
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
        l = n.n(a),
        o = n(442837),
        c = n(692547),
        d = n(477690),
        u = n(481060),
        h = n(239091),
        p = n(765250),
        f = n(13245),
        m = n(872810),
        g = n(586902),
        v = n(835473),
        _ = n(933557),
        E = n(600164),
        x = n(118012),
        Z = n(594190),
        S = n(925329),
        C = n(569545),
        I = n(914923),
        y = n(165393),
        N = n(989941),
        T = n(552282),
        b = n(345243),
        O = n(565799),
        j = n(501655),
        A = n(786915),
        M = n(7188),
        P = n(597998),
        L = n(199902),
        R = n(314897),
        w = n(592125),
        k = n(77498),
        D = n(131951),
        z = n(944486),
        B = n(606304),
        V = n(449224),
        U = n(938475),
        W = n(237997),
        G = n(136015),
        F = n(51144),
        H = n(145597),
        Y = n(658785),
        K = n(244073),
        X = n(876205),
        Q = n(906037),
        q = n(518084),
        J = n(981631),
        $ = n(65154),
        ee = n(388032),
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
            nick: a,
            displayNameMode: c,
            displayUserMode: d,
            size: u = J.ipw.LARGE,
            onClick: h,
            onContextMenu: p,
            context: f,
            guildId: m,
            voiceState: v,
          } = e,
          { showKeybindIndicators: _ } = Y.Z.useExperiment({
            location: "overlay_voice_widget",
          }),
          E = (0, o.e7)([W.Z], () => W.Z.showKeybindIndicators),
          x = (0, o.e7)([R.default], () => R.default.getId()),
          Z = (0, o.e7)([D.Z], () => D.Z.isLocalMute(i.id)),
          S = (0, o.e7)([L.Z], () => L.Z.getCurrentUserActiveStream()),
          C = (0, o.Wu)([L.Z], () => (null != S ? L.Z.getViewerIds(S) : [])),
          I = (0, g.Z)({ userId: i.id, context: f }),
          y = (0, o.e7)([B.Z], () => B.Z.isPrioritySpeaker(i.id, f)),
          N = (0, o.e7)([L.Z], () => null != L.Z.getStreamForUser(i.id, m)),
          T = r.useMemo(
            () => null != S && S.ownerId !== i.id && C.includes(i.id),
            [S, i.id, C],
          );
        if (d === J.OYC.ONLY_WHILE_SPEAKING && n && !I) return null;
        let b = i.id === x,
          { mute: O, selfMute: j, suppress: A, deaf: M, selfDeaf: w } = v,
          k = _ && E,
          z = j && (!b || !k);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(P.ZP, {
              guildId: m,
              onClick: n ? void 0 : (e) => (null == h ? void 0 : h(e, i)),
              onContextMenu: n ? void 0 : (e) => (null == p ? void 0 : p(e, i)),
              className: l()(et.voiceUserWrapper, {
                [et.faded]: !I,
                [et.interactive]: !n,
              }),
              user: i,
              nick: a,
              speaking: !1,
              flipped: t,
              isStreaming: N,
              iconClassName: l()(et.voiceIcon, { [et.locked]: n }),
              isWatching: T,
              isOverlay: !0,
              size: u,
              priority: y,
              mute: O || z || Z,
              localMute: Z,
              serverMute: O || A,
              deaf: M || w,
              serverDeaf: M,
              userNameClassName: l()(et.username, {
                [et.locked]: n,
                [et.hidden]:
                  n &&
                  (c === J.wC$.NEVER ||
                    (!I && c === J.wC$.ONLY_WHILE_SPEAKING)),
              }),
            }),
            b &&
              k &&
              (0, s.jsx)(X.Z, {
                value: j,
                action: J.kg4.TOGGLE_MUTE,
                shouldShow: !O && !A,
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
              channel: o,
              anchor: c,
              avatarSizeMode: u,
            } = this.props,
            h = null != c.right,
            p = t.map((t) => {
              var l;
              let { user: c, voiceState: d, member: p } = t;
              if (null == c || null == o || null == e) return null;
              let f = r || a;
              return (0, s.jsx)(
                ei,
                {
                  guildId: null == o ? void 0 : o.guild_id,
                  user: c,
                  nick:
                    null !== (l = null == p ? void 0 : p.nick) && void 0 !== l
                      ? l
                      : F.ZP.getName(c),
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
          return (0, s.jsx)(q.ZP.Body, {
            className: l()({
              [d.Z.VOICE_WIDGET_TOP_MARGIN]: r,
              [et.bottomMargin]: r,
            }),
            children: (0, s.jsx)(P.eJ, {
              className: et.voiceList,
              children: p,
            }),
          });
        }
        renderHeader() {
          let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
          return (0, s.jsxs)(q.ZP.Bar, {
            className: l()(et.draggableStartArea, { [et.preview]: n }),
            children: [
              (0, s.jsxs)(q.ZP.Content, {
                dynamicSize: !0,
                className: l()(et.content, { [et.hidden]: n }),
                children: [
                  (0, s.jsx)(u.DragIcon, {
                    size: "custom",
                    color: c.Z.unsafe_rawColors.WHITE_500.css,
                    width: 20,
                    height: 20,
                    className: l()(et.icon, et.faded, et.dragIcon),
                  }),
                  (0, s.jsx)(u.VoiceNormalIcon, {
                    size: "custom",
                    color: c.Z.unsafe_rawColors.WHITE_500.css,
                    width: 20,
                    height: 20,
                    className: l()(et.icon, et.faded, et.speakerIcon),
                  }),
                  (0, s.jsx)(x.Z, {
                    color: c.Z.unsafe_rawColors.PRIMARY_200.css,
                    className: et.title,
                    children: t,
                  }),
                ],
              }),
              n
                ? null
                : (0, s.jsx)(q.ZP.Icon, {
                    icon: u.SettingsIcon,
                    label: ee.intl.string(ee.t.NiTd0d),
                    onClick: this.handleOpenVoiceSettings,
                    tooltipPosition: "left",
                    size: 18,
                  }),
              n
                ? null
                : (0, s.jsx)(q.ZP.Icon, {
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
            streamMetadata: o,
            streamApplication: c,
            stream: d,
          } = this.props;
          if (t || null == d || null == r) return null;
          let { sanitizedTitle: h, title: p } = (0, I.Z)(o);
          return (0, s.jsx)(q.ZP.Bar, {
            className: l()(et.streamerControls, {
              [et.hidden]: i,
              [et.unpinned]: !n,
            }),
            children: (0, s.jsxs)(q.ZP.Content, {
              className: et.streamerContent,
              dynamicSize: !0,
              children: [
                (0, s.jsxs)("div", {
                  className: et.streamerInner,
                  children: [
                    (null == c ? void 0 : c.id) != null &&
                    c.id === (null == a ? void 0 : a.id)
                      ? (0, s.jsx)(S.Z, { className: et.gameIcon, game: a })
                      : (0, s.jsx)(y.Z, { title: h }),
                    (0, s.jsxs)(E.Z, {
                      direction: E.Z.Direction.VERTICAL,
                      justify: E.Z.Justify.BETWEEN,
                      className: et.streamerInfo,
                      children: [
                        (0, s.jsx)(u.Text, {
                          className: et.streaming,
                          variant: "text-sm/normal",
                          children: ee.intl.string(ee.t.XKYej4),
                        }),
                        (0, s.jsx)(b.Z, {
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
                (0, s.jsxs)(E.Z, {
                  grow: 0,
                  children: [
                    (0, s.jsx)("div", {
                      className: et.streamerIconWrapper,
                      children: (0, s.jsx)(A.Z, {
                        stream: d,
                        iconClassName: et.streamerIcon,
                        appContext: J.IlC.OVERLAY,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: et.streamerIconWrapper,
                      children: (0, s.jsx)(M.Z, {
                        stream: d,
                        appContext: J.IlC.OVERLAY,
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
          let o = J.t_t.UNPINNED;
          return (
            i && (o = J.t_t.PINNED),
            r && (o = J.t_t.IN_GAME_PREVIEW),
            n && (o = J.t_t.IN_GAME),
            (0, s.jsxs)(q.ZP, {
              type: o,
              width: 380,
              children: [
                n ? null : this.renderHeader(),
                this.renderVoiceUsers(),
                this.renderStreamerSettings(),
                n
                  ? null
                  : (0, s.jsx)(K.Z, {
                      className: l()({ [et.preview]: r }),
                      contentClassName: l()({ [et.hidden]: r }),
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
              f.Z.track(J.rMx.OVERLAY_PIN_TOGGLED, {
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
                widget_type: J.Odu.VOICE,
              });
              let { id: s } = this.props;
              (0, p.xh)(s);
            }),
            en(this, "handleStopStream", () => {
              let { stream: e } = this.props;
              if (null != e) m.g((0, C.V9)(e));
            });
        }
      }
      en(es, "defaultProps", { context: $.Yn.DEFAULT });
      function er(e) {
        var t;
        let n = (0, o.e7)([z.Z, w.Z], () =>
            w.Z.getChannel(z.Z.getVoiceChannelId()),
          ),
          i = (0, _.ZP)(n),
          a = (function () {
            let [e] = (0, o.e7)(
                [U.ZP, O.Z, z.Z, w.Z],
                () => {
                  let e = w.Z.getChannel(z.Z.getVoiceChannelId());
                  return null == e
                    ? [[], -1]
                    : e.isGuildStageVoice()
                      ? [
                          O.Z.getMutableParticipants(e.id, j.pV.SPEAKER),
                          O.Z.getParticipantsVersion(e.id),
                        ]
                      : [
                          U.ZP.getVoiceStatesForChannel(e),
                          U.ZP.getVoiceStateVersion(e.getGuildId()),
                        ];
                },
                [],
                G.Q,
              ),
              t = (0, o.e7)([R.default], () => R.default.getId()),
              { showKeybindIndicators: n } = Y.Z.useExperiment({
                location: "voice_widget",
              });
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
          l = (0, o.e7)([L.Z], () => L.Z.getStreamerActiveStreamMetadata()),
          c = (0, o.e7)([Z.ZP, V.Z, k.Z], () => {
            var e;
            let t = (0, N.Z)(Z.ZP, V.Z);
            return null != t
              ? null === (e = k.Z.getGameByGameData(t)) || void 0 === e
                ? void 0
                : e.id
              : null;
          }),
          d = (0, v.q)(c),
          u = (0, o.cj)([Z.ZP, V.Z, L.Z, W.Z], () => {
            let e = (0, N.Z)(Z.ZP, V.Z),
              t = L.Z.getCurrentUserActiveStream();
            return {
              displayUserMode: W.Z.getDisplayUserMode(),
              displayNameMode: W.Z.getDisplayNameMode(),
              avatarSizeMode: W.Z.getAvatarSizeMode(),
              streamApplication:
                (null == l ? void 0 : l.pid) === (0, H.QF)()
                  ? (0, T.Z)(e)
                  : null,
              stream: t,
            };
          });
        return (0, s.jsx)(es, {
          ...u,
          application: d,
          ...e,
          sortedVoiceStates: a,
          channel: n,
          title: null != i ? i : "",
          streamMetadata: l,
          streamApplication:
            null !== (t = u.streamApplication) && void 0 !== t
              ? t
              : { id: null, name: null == l ? void 0 : l.sourceName },
        });
      }
    },
    518084: function (e, t, n) {
      "use strict";
      n.d(t, {
        wB: function () {
          return _;
        },
      }),
        n(411104);
      var i,
        s,
        r,
        a,
        l = n(200651),
        o = n(192379),
        c = n(120356),
        d = n.n(c),
        u = n(877921),
        h = n.n(u),
        p = n(481060),
        f = n(981631),
        m = n(344037),
        g = n(739017);
      let v = f.t_t.DEFAULT,
        _ = 1,
        E = o.createContext({ type: v, opacity: _ }),
        x = o.createContext(void 0),
        Z = (e) => {
          let { children: t, className: n, ...i } = e;
          return (0, l.jsx)(E.Consumer, {
            children: (e) => {
              let { type: s } = e;
              return (0, l.jsx)(x.Consumer, {
                children: (e) =>
                  (0, l.jsx)("div", {
                    className: d()(m.bar, m[h()(s)], n),
                    style: e,
                    ...i,
                    children: t,
                  }),
              });
            },
          });
        };
      class S extends (i = o.PureComponent) {
        render() {
          let { disableScroll: e, children: t, className: n } = this.props;
          return (0, l.jsx)(x.Consumer, {
            children: (i) =>
              (0, l.jsx)(E.Consumer, {
                children: (s) => {
                  let r = d()(m.body, m[h()(s.type)], n);
                  return e
                    ? (0, l.jsx)("div", { className: r, style: i, children: t })
                    : (0, l.jsx)(p.Scroller, {
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
        (r = "defaultProps") in (s = S)
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
            opacity: a = _,
            onClick: o,
          } = e;
          return (0, l.jsx)(E.Provider, {
            value: { type: t, opacity: a },
            children: (0, l.jsx)("div", {
              className: d()(m.widget, m[h()(t)], r),
              style: { width: n, height: i },
              onClick: o,
              children: s,
            }),
          });
        },
        I = (e) => {
          let { children: t, className: n, dynamicSize: i = !1 } = e;
          return (0, l.jsx)(x.Consumer, {
            children: (e) =>
              (0, l.jsx)("div", {
                className: d()(m.content, { [m.staticSize]: !i }, n),
                style: e,
                children: t,
              }),
          });
        };
      (C.Background = (e) => {
        let { children: t, opacityOverride: n } = e;
        if (null == t) return null;
        let i = [Z, S, I];
        return (0, l.jsx)(E.Consumer, {
          children: (e) => {
            let { opacity: s } = e,
              r = {
                backgroundColor: "rgba(54, 57, 63, ".concat(
                  "" + (null != n ? n : s),
                  ")",
                ),
              };
            if ("string" == typeof t.type)
              return o.cloneElement(t, { style: r });
            if (i.includes(t.type))
              return (0, l.jsx)(x.Provider, { value: r, children: t });
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
        (C.Content = I),
        (C.Icon = (e) => {
          let {
            icon: t,
            label: n,
            onClick: i,
            isActive: s,
            tooltipPosition: r = "top",
            size: a = 20,
            isTutorial: o = !1,
          } = e;
          return (0, l.jsx)(p.Tooltip, {
            text: o
              ? (0, l.jsx)("div", { className: m.tutorialTip, children: n })
              : n,
            "aria-label": n,
            position: r,
            forceOpen: o,
            color: o ? p.Tooltip.Colors.BRAND : p.Tooltip.Colors.BLACK,
            children: (e) => {
              let { onMouseEnter: r, onMouseLeave: o } = e;
              return (0, l.jsx)(p.Button, {
                look: p.Button.Looks.BLANK,
                size: p.Button.Sizes.NONE,
                onClick: i,
                onMouseEnter: r,
                onMouseLeave: o,
                className: d()(m.icon, { [m.toggledIconOn]: s }),
                innerClassName: g.flexCenter,
                "aria-label": n,
                children: (0, l.jsx)(t, {
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
          return k;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(100621),
        a = n(442837),
        l = n(481060),
        o = n(619915),
        c = n(554747),
        d = n(373274),
        u = n(315174),
        h = n(840780),
        p = n(905423),
        f = n(680089),
        m = n(58468),
        g = n(796974),
        v = n(324067),
        _ = n(984933),
        E = n(888369),
        x = n(430824),
        Z = n(496675),
        S = n(878884),
        C = n(19780),
        I = n(944486),
        y = n(9156),
        N = n(938475),
        T = n(518084),
        b = n(669083),
        O = n(711553),
        j = n(981631),
        A = n(647086),
        M = n(388032),
        P = n(867144);
      function L(e, t, n) {
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
      let R = 54;
      class w extends s.PureComponent {
        static getDerivedStateFromProps(e) {
          let { guild: t } = e;
          return null == t || null == t.banner
            ? { renderBanner: !1, bannerVisible: !1 }
            : null;
        }
        componentDidMount() {
          let { guildId: e } = this.props,
            { scrollTop: t } = g.Z.getGuildDimensions(e);
          this.setAnimatedValue(null != t ? t : 0);
        }
        componentDidUpdate(e) {
          let { guild: t, guildId: n } = this.props;
          if (e.guild !== t) {
            let { scrollTop: e } = g.Z.getGuildDimensions(n);
            this.setAnimatedValue(null != e ? e : 0);
          }
        }
        renderSettings(e) {
          let { closePopout: t } = e;
          return (0, i.jsx)(b.Z, { onClose: t });
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
          ((e >= R && i) || (e < R && !i)) && (i = !i),
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
              communityInfoVisible: o,
            } = this.state,
            c = n.id === A._ ? d.j : d.E;
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
              communityInfoVisible: o,
              children: (0, i.jsx)(l.Popout, {
                position: "right",
                renderPopout: this.renderSettings,
                children: (e) =>
                  (0, i.jsx)(T.ZP.Icon, {
                    icon: l.SettingsIcon,
                    label: M.intl.string(M.t["3D5yo6"]),
                    ...e,
                  }),
              }),
            }),
            children: [
              (0, i.jsx)("div", {
                className: P.channelList,
                children: (0, i.jsx)(c, {
                  ...t,
                  guild: n,
                  disableManageChannels: !0,
                  onScroll:
                    null != n && null != n.banner ? this.handleScroll : null,
                }),
              }),
              (0, i.jsx)("section", {
                className: P.panels,
                "aria-label": M.intl.string(M.t.StREWF),
                children: (0, i.jsx)(h.Z, { guildId: n.id }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            L(this, "state", {
              controller: new r.Controller({ value: 1, immediate: !0 }),
              renderBanner: !1,
              bannerVisible: !1,
              communityInfoVisible: !1,
            }),
            L(this, "handleScroll", (e) => {
              let { scrollTop: t } = e;
              this.setAnimatedValue(t);
            });
        }
      }
      function k(e) {
        var t;
        let { guildId: n } = e,
          s = (0, a.e7)([x.Z], () => x.Z.getGuild(n)),
          r = (0, a.e7)([_.ZP], () => _.ZP.getChannels(n)),
          l = (0, a.e7)([v.Z], () => v.Z.getCategories(n)),
          { mutedChannels: d, collapseMuted: u } = (0, a.cj)([y.ZP], () => ({
            mutedChannels: y.ZP.getMutedChannels(n),
            collapseMuted: y.ZP.isGuildCollapsed(n),
          })),
          h = (0, a.e7)([N.ZP], () => N.ZP.getVoiceStates(n)),
          T = (0, a.e7)([m.Z], () => m.Z.getCollapsed()),
          { scrollTo: b } = (0, a.e7)([g.Z], () => g.Z.getGuildDimensions(n)),
          O = (0, p.Z)((e) => {
            let { channelId: t } = e;
            return t;
          }),
          A = (0, a.e7)([I.Z], () => I.Z.getVoiceChannelId()),
          M = (0, a.e7)([Z.Z], () => Z.Z.getGuildVersion(n)),
          P = (0, a.e7)([f.Z], () => f.Z.version),
          L = (0, a.e7)([E.default], () => E.default.getGuildChangeSentinel(n)),
          R = (0, o.QN)(null == s ? void 0 : s.id),
          k = (0, c.gM)(null == s ? void 0 : s.id),
          D =
            null !== (t = null == s ? void 0 : s.hasFeature(j.oNc.COMMUNITY)) &&
            void 0 !== t &&
            t,
          z = (0, a.e7)([C.Z], () => C.Z.getChannelId()),
          B = (0, a.e7)([S.Z], () => S.Z.desyncedVoiceStatesCount);
        return (0, i.jsx)(w, {
          guildId: n,
          guild: s,
          channels: r,
          categories: l,
          mutedChannels: d,
          scrollToChannel: b,
          selectedChannelId: O,
          selectedVoiceChannelId: A,
          voiceStates: h,
          rtcConnectedChannelId: z,
          rtcDesyncedVoiceStatesCount: B,
          collapsedChannels: T,
          collapseMuted: u,
          guildReadStateSentinel: L,
          permissionVersion: M,
          categoryCollapseVersion: P,
          embeddedAppsByChannel: R,
          activeEventsByChannel: k,
          showNewUnreadsBar: D,
          optInEnabled: !1,
        });
      }
    },
    669083: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return b;
        },
      }),
        n(47120);
      var i,
        s,
        r = n(200651),
        a = n(192379),
        l = n(442837),
        o = n(481060),
        c = n(13245),
        d = n(600164),
        u = n(212632),
        h = n(906467),
        p = n(556296),
        f = n(237997),
        m = n(998502),
        g = n(13140),
        v = n(658785),
        _ = n(981631),
        E = n(388032),
        x = n(635958),
        Z = n(113207);
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
          { value: _.ipw.LARGE, name: E.intl.string(E.t.YcOxtr) },
          { value: _.ipw.SMALL, name: E.intl.string(E.t.BKIKq6) },
        ],
        I = () => [
          { value: _.wC$.ALWAYS, name: E.intl.string(E.t.nBmDra) },
          {
            value: _.wC$.ONLY_WHILE_SPEAKING,
            name: E.intl.string(E.t["2OvIZW"]),
          },
          { value: _.wC$.NEVER, name: E.intl.string(E.t.ekjlPD) },
        ],
        y = () => [
          { value: _.OYC.ALWAYS, name: E.intl.string(E.t.nBmDra) },
          {
            value: _.OYC.ONLY_WHILE_SPEAKING,
            name: E.intl.string(E.t["2OvIZW"]),
          },
        ];
      function N() {
        let e = f.Z.getNotificationPositionMode(),
          t = e !== _._vf.DISABLED,
          n = p.Z.getOverlayKeybind(),
          i = p.Z.getOverlayChatKeybind();
        c.Z.track(_.rMx.OVERLAY_SETTINGS_UPDATED, {
          enabled: !0,
          notifications_enabled: t,
          notifications_position: t ? e : null,
          text_notifications_mode: f.Z.getTextChatNotificationMode(),
          text_opacity_slider: f.Z.getTextWidgetOpacity(),
          hotkey: null != n ? (0, g.BB)(n.shortcut) : null,
          text_activation_hotkey: null != i ? (0, g.BB)(i.shortcut) : null,
        });
      }
      class T extends a.PureComponent {
        componentDidMount() {
          c.Z.track(_.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null,
          });
        }
        handleChangeNotificationPositionMode(e, t) {
          c.Z.setNotificationPositionMode(t), N();
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
          return (0, r.jsxs)(d.Z, {
            direction: d.Z.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: x.header,
            children: [
              (0, r.jsxs)(d.Z, {
                children: [
                  (0, r.jsx)(o.FormTitle, {
                    className: x.headerTitle,
                    tag: "h1",
                    children: E.intl.string(E.t["35G2Mj"]),
                  }),
                  (0, r.jsx)(o.ModalCloseButton, {
                    className: x.headerClose,
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
              ? (0, r.jsx)(o.TabBar.Item, {
                  id: "DEVELOPER",
                  className: x.tabBarItem,
                  children: "Developer",
                })
              : null;
          return (0, r.jsxs)(o.TabBar, {
            selectedItem: e,
            type: "top",
            className: x.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
              (0, r.jsx)(o.TabBar.Item, {
                id: "GENERAL",
                className: x.tabBarItem,
                children: E.intl.string(E.t["0FYxx8"]),
              }),
              (0, r.jsx)(o.TabBar.Item, {
                id: "VOICE",
                className: x.tabBarItem,
                children: E.intl.string(E.t["3WeSiI"]),
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
            o.ModalContent,
            { className: x.content, children: e },
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
            s = t !== _._vf.DISABLED;
          return (0, r.jsxs)(a.Fragment, {
            children: [
              (0, r.jsx)(o.FormItem, {
                title: E.intl.string(E.t.IQv8Eh),
                className: Z.marginBottom20,
                children: (0, r.jsx)(u.Z, {
                  position: t,
                  onChange: this.handleChangeNotificationPositionMode,
                }),
              }),
              (0, r.jsx)(o.FormSwitch, {
                value: s && e === _.Ypu.ENABLED,
                onChange: this.handleToggleTextChatNotifications,
                disabled: !s,
                hideBorder: !0,
                children: E.intl.string(E.t.Fy5kPj),
              }),
              i &&
                (0, r.jsx)(o.FormSwitch, {
                  value: n,
                  onChange: (e) => c.Z.setShowKeybindIndicators(e),
                  hideBorder: !0,
                  children: E.intl.string(E.t.XZTl9v),
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
              (0, r.jsx)(o.FormItem, {
                title: E.intl.string(E.t.dnvZSk),
                className: Z.marginBottom20,
                children: (0, r.jsx)(o.RadioGroup, {
                  onChange: this.handleChangeAvatarSizeMode,
                  options: C(),
                  value: e,
                  size: o.RadioGroup.Sizes.SMALL,
                }),
              }),
              (0, r.jsx)(o.FormItem, {
                title: E.intl.string(E.t.J0dpcH),
                className: Z.marginBottom20,
                children: (0, r.jsx)(o.RadioGroup, {
                  onChange: this.handleChangeDisplayNameMode,
                  options: I(),
                  value: t,
                  size: o.RadioGroup.Sizes.SMALL,
                }),
              }),
              (0, r.jsx)(o.FormItem, {
                title: E.intl.string(E.t.swsWWF),
                className: Z.marginBottom20,
                children: (0, r.jsx)(o.RadioGroup, {
                  onChange: this.handleChangeDisplayUserMode,
                  options: y(),
                  value: n,
                  size: o.RadioGroup.Sizes.SMALL,
                }),
              }),
            ],
          });
        }
        renderDeveloperSettings() {
          return (0, r.jsx)(a.Fragment, {
            children: (0, r.jsx)(o.FormItem, {
              title: "Crashes",
              className: Z.marginBottom20,
              children: (0, r.jsx)(o.SingleSelect, {
                value: void 0,
                options: [
                  { value: void 0, label: "Native crash" },
                  { value: 0, label: "Abort()" },
                  { value: 1, label: "SIGSEGV()" },
                  { value: 2, label: "EXCEPTION_ACCESS_VIOLATION" },
                  { value: 3, label: "RaiseFailFastException" },
                  { value: 4, label: "Out of Memory" },
                ],
                onChange: (e) => null != e && m.ZP.crash(e),
              }),
            }),
          });
        }
        render() {
          return (0, r.jsxs)(o.ModalRoot, {
            "aria-label": E.intl.string(E.t["35G2Mj"]),
            transitionState: o.ModalTransitionState.ENTERED,
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
              let { ENABLED: e, DISABLED: t } = _.Ypu,
                n = this.props.textChatNotificationMode === e ? t : e;
              c.Z.setTextChatNotificationMode(n), N();
            });
        }
      }
      function b(e) {
        let { onClose: t } = e,
          {
            avatarSizeMode: n,
            displayNameMode: i,
            displayUserMode: s,
            notificationPositionMode: a,
            textChatNotificationMode: o,
            shouldShowKeybindIndicators: c,
          } = (0, l.cj)([f.Z], () => ({
            avatarSizeMode: f.Z.getAvatarSizeMode(),
            displayNameMode: f.Z.getDisplayNameMode(),
            displayUserMode: f.Z.getDisplayUserMode(),
            notificationPositionMode: f.Z.getNotificationPositionMode(),
            textChatNotificationMode: f.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: f.Z.showKeybindIndicators,
          })),
          { showKeybindIndicators: d } = v.Z.useExperiment({
            location: "Overlay Settings",
          });
        return (0, r.jsx)(T, {
          onClose: t,
          avatarSizeMode: n,
          displayNameMode: i,
          displayUserMode: s,
          notificationPositionMode: a,
          textChatNotificationMode: o,
          shouldShowKeybindIndicators: c,
          showKeybindIndicators: d,
        });
      }
    },
    483962: function (e, t, n) {
      "use strict";
      var i = n(200651),
        s = n(192379),
        r = n(442837),
        a = n(831218),
        l = n(840780),
        o = n(51596),
        c = n(905423),
        d = n(237997),
        u = n(145597),
        h = n(981631),
        p = n(388032),
        f = n(53800);
      let m = () => (0, o.$Z)("DM_SEARCH");
      t.Z = s.memo(function () {
        let e = (0, r.e7)([d.Z], () =>
            d.Z.isLocked((0, u.QF)()) ? "true" : "false",
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
                onClick: m,
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
              children: (0, i.jsx)(l.Z, { guildId: null }),
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
        l = n(518084),
        o = n(981631),
        c = n(388032),
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
              ? (0, i.jsxs)(l.ZP.Bar, {
                  className: r()(d.header, d.draggableStartArea),
                  onMouseDown: p,
                  children: [
                    (0, i.jsx)(l.ZP.Content, {
                      className: r()(d.headerTitle, d.draggableStartArea),
                      dynamicSize: !0,
                      children: n,
                    }),
                    (0, i.jsx)(l.ZP.Content, {
                      children: (0, i.jsx)(a.Popout, {
                        position: "right",
                        renderPopout: null != h ? h : o.dG4,
                        autoInvert: !1,
                        children: (e) =>
                          (0, i.jsx)(l.ZP.Icon, {
                            ...e,
                            icon: a.SettingsIcon,
                            label: c.intl.string(c.t["3D5yo6"]),
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
        r,
        a,
        l = n(442837),
        o = n(570140);
      let c = !1,
        d = !1;
      class u extends (a = l.ZP.Store) {
        get keepOpen() {
          return d;
        }
        get enabled() {
          return c;
        }
      }
      (r = "SoundboardOverlayStore"),
        (s = "displayName") in (i = u)
          ? Object.defineProperty(i, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[s] = r),
        (t.Z = new u(o.Z, {
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
        r,
        a,
        l,
        o,
        c,
        d,
        u = n(512722),
        h = n.n(u),
        p = n(772848),
        f = n(442837),
        m = n(570140),
        g = n(13245),
        v = n(836932),
        _ = n(175553),
        E = n(158979),
        x = n(181912),
        Z = n(791288),
        S = n(194295),
        C = n(998033),
        I = n(181364),
        y = n(435064),
        N = n(668761),
        T = n(86071),
        b = n(358446),
        O = n(695346),
        j = n(314897),
        A = n(592125),
        M = n(292959),
        P = n(158776),
        L = n(944486),
        R = n(885110),
        w = n(246946),
        k = n(594174),
        D = n(974180),
        z = n(237997),
        B = n(70956),
        V = n(150097),
        U = n(129724),
        W = n(449224),
        G = n(981631),
        F = n(987650),
        H = n(388032);
      ((a = i || (i = {}))[(a.GENERIC = 0)] = "GENERIC"),
        (a[(a.TEXT = 1)] = "TEXT"),
        (a[(a.INCOMING_CALL = 2)] = "INCOMING_CALL"),
        ((l = s || (s = {}))[(l.NORMAL = 0)] = "NORMAL"),
        (l[(l.HIGH = 1)] = "HIGH"),
        (l[(l.URGENT = 2)] = "URGENT");
      let Y = 5 * B.Z.Millis.SECOND,
        K = 8 * B.Z.Millis.SECOND,
        X = 30 * B.Z.Millis.SECOND,
        Q = Object.freeze({
          priority: 0,
          duration: Y,
          expirationExternallyManaged: !1,
          type: 0,
        }),
        q = [],
        J = (e, t, n) => {
          let i = t ? G._1z.TIMED_OUT : G._1z.DISMISSED;
          return setTimeout(
            () => g.Z.updateNotificationStatus(e, i),
            null != n ? n : Y,
          );
        };
      function $(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : G._1z.DISMISSED;
        if (null == e) return !1;
        let n = q.findIndex((t) => t.id === e);
        if (-1 === n) return !1;
        let i = q[n];
        clearTimeout(i.timerId),
          (q = [...q]),
          t === G._1z.DISMISSED ? q.splice(n, 1) : (q[n] = { ...i, status: t });
      }
      function ee(e) {
        let t = q.length;
        return (
          (q = q.filter((t) => 1 !== t.type || t.channelId !== e || !1))
            .length !== t
        );
      }
      function et(e) {
        let t = q.find((t) => 2 === t.type && t.channelId === e);
        return null != t ? t.id : null;
      }
      function en(e, t) {
        let n = { ...Q, ...t };
        if (2 !== n.priority && !z.Z.isInstanceFocused()) return null;
        let i = (0, p.Z)(),
          s = {
            id: i,
            status: G._1z.ACTIVE,
            timerId: J(i, n.expirationExternallyManaged, n.duration),
            props: e,
            ...n,
          },
          r = (q = [...q]).findIndex((e) => e.priority <= n.priority);
        return (
          -1 === r ? q.push(s) : q.splice(r, 0, s),
          q.length > 10 && clearTimeout(q.pop().timerId),
          i
        );
      }
      function ei(e) {
        let { channelId: t, ringing: n } = e,
          i = et(t);
        if (!n.includes(j.default.getId())) return $(i);
        if (null != i) return !1;
        let s = A.Z.getChannel(t);
        if (
          null == s ||
          !s.isPrivate() ||
          R.Z.getStatus() === G.Skl.DND ||
          O.QZ.getSetting()
        )
          return !1;
        let r = q.find(
          (e) =>
            1 === e.type && e.channelId === t && e.messageType === G.uaV.CALL,
        );
        null != r && $(r.id),
          en((0, x.Z)(s), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: s.id,
          });
      }
      class es extends (r = f.ZP.Store) {
        initialize() {
          this.waitFor(A.Z, k.default);
        }
        getNotifications() {
          return q;
        }
      }
      (d = "OverlayNotificationsStore"),
        (c = "displayName") in (o = es)
          ? Object.defineProperty(o, c, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[c] = d),
        (t.Z = new es(
          m.Z,
          __OVERLAY__
            ? {
                OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
                  let { notificationId: t, status: n } = e;
                  $(t, n);
                },
                OVERLAY_MOUNTED: function (e) {
                  let { nudges: t } = e,
                    n = (function (e) {
                      switch (e.type) {
                        case F.nc.GO_LIVE_VOICE:
                        case F.nc.GO_LIVE_NON_VOICE:
                          return (0, E.Z)(e);
                        case F.nc.KEYBIND_INDICATORS:
                          return (0, b.Z)(e);
                        case F.nc.NEWS:
                        default:
                          return (0, I.Z)(e);
                      }
                    })(t[0]);
                  null != n && en(n, { priority: 2, duration: K });
                },
                OVERLAY_SET_INPUT_LOCKED: function (e) {
                  let { locked: t } = e;
                  if (t) return !1;
                  q = q.map((e) =>
                    e.status === G._1z.ACTIVE
                      ? (clearTimeout(e.timerId),
                        {
                          ...e,
                          timerId: J(e.id, e.expirationExternallyManaged),
                        })
                      : e,
                  );
                },
                MESSAGE_CREATE: function (e) {
                  var t, n, i;
                  let { channelId: s, message: r } = e,
                    a = A.Z.getChannel(s),
                    l = k.default.getUser(
                      null === (t = r.author) || void 0 === t ? void 0 : t.id,
                    );
                  if (null == a || null == l) return !1;
                  if (
                    (null === (n = r.activity) || void 0 === n
                      ? void 0
                      : n.type) === G.mFx.JOIN ||
                    (null === (i = r.activity) || void 0 === i
                      ? void 0
                      : i.type) === G.mFx.JOIN_REQUEST
                  ) {
                    if (!(0, V.eF)(r, s, !0, !0)) return !1;
                    let e = (function (e, t, n) {
                      let i, s;
                      if (
                        (h()(
                          null != t.activity,
                          "received null message activity",
                        ),
                        n.id === j.default.getId())
                      )
                        return !1;
                      let r = W.Z.getGame();
                      if (null == r) return !1;
                      switch (t.activity.type) {
                        case G.mFx.JOIN:
                          if (
                            null ==
                              (i = P.Z.getApplicationActivity(n.id, r.id)) ||
                            null == i.party ||
                            i.party.id !== t.activity.party_id
                          )
                            return !1;
                          s = (0, v.Z)(e, t, n, r, i);
                          break;
                        case G.mFx.JOIN_REQUEST:
                          if (
                            null == (i = R.Z.getApplicationActivity(r.id)) ||
                            null == i.party ||
                            i.party.id !== t.activity.party_id
                          )
                            return !1;
                          s = (0, S.Z)(e, n, r, i);
                      }
                      if (null == s) return !1;
                      let a = en(s, {
                        priority: 2,
                        expirationExternallyManaged: !0,
                        channelId: e.id,
                      });
                      return null != a && J(a, !1, X), !0;
                    })(a, r, l);
                    if (!1 !== e) return e;
                  }
                  if (
                    ((!z.Z.isInstanceLocked() || z.Z.isPinned(G.Odu.TEXT)) &&
                      s === L.Z.getChannelId()) ||
                    z.Z.getTextChatNotificationMode() === G.Ypu.DISABLED ||
                    w.Z.disableNotifications ||
                    !(0, V.eF)(r, s)
                  )
                    return !1;
                  let o = !M.Z.isSoundDisabled(D.Ay);
                  en((0, C.Z)(a, r, l, o), {
                    type: 1,
                    channelId: a.id,
                    messageType: r.type,
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
                    r = W.Z.getGame();
                  if (null == r || r.id !== s) return !1;
                  if (n === G.mFx.JOIN) t = (0, _.Z)(i, r);
                  if (null == t) return !1;
                  en(t, { priority: 2, type: 0 });
                },
                CLIPS_SAVE_CLIP_START: function () {
                  en((0, N.f)(H.intl.string(H.t.NBMK9v)));
                },
                CLIPS_SAVE_CLIP: function () {
                  en(
                    (0, N.f)(
                      H.intl.formatToPlainString(H.t.KLhk6u, {
                        duration: (0, U.A)(
                          y.Z.getSettings().clipsLength / 1e3,
                          !0,
                        ),
                      }),
                    ),
                  );
                },
                CLIPS_SAVE_CLIP_ERROR: function () {
                  en((0, N.f)(H.intl.string(H.t["1ZbZur"])));
                },
                STREAM_START: function (e) {
                  let t = (0, N.y)();
                  null != t && en(t);
                },
                OVERLAY_CONTENT_INVENTORY_READY: function (e) {
                  let { contentInventoryEntries: t } = e;
                  if (0 === t.length) return;
                  let n = W.Z.getGame();
                  if (null == n) return;
                  let { enabled: i } = T.Z.getCurrentConfig(
                    { location: "OverlayNotificationsStore" },
                    { autoTrackExposure: !0 },
                  );
                  i &&
                    en((0, Z.Z)(n, t), {
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
          return r;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(325767);
      function r(e) {
        let {
          width: t = 16,
          height: n = 16,
          color: r = "currentColor",
          foreground: a,
          ...l
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, s.Z)(l),
          width: t,
          height: n,
          viewBox: "0 0 430 430",
          children: (0, i.jsx)("path", {
            className: a,
            color: r,
            d: "M187.9,308.1c17.9-13.5,43-13.7,61.1-0.3c1.9,1.3,2.4,4,1.1,5.8s-3.7,2.3-5.6,0.9l-0.3-0.3 c-15.1-11.3-36.3-11.2-51.3,0.1c-0.8,0.5-1.6,0.8-2.4,0.8c-1.2,0-2.4-0.5-3.2-1.6C185.8,312,186.2,309.3,187.9,308.1 M124.4,236 c11.7,0,21.3,9.4,21.3,21.1s-9.4,21.1-21.1,21.1c-11.7,0-21.1-9.4-21.1-21.1C103.1,245.6,112.7,236,124.4,236 M315,236 c11.7,0,21.3,9.4,21.3,21.3c0,11.7-9.4,21.1-21.1,21.1s-21.1-9.4-21.1-21.1C294,245.6,303.5,236,315,236 M347.8,307.2 c2-0.3,4-0.7,6-1.2c2.3-0.5,4.4,0.7,5,2.9c0.7,2.1-0.7,4.4-2.8,5c-2.3,0.7-4.6,1.1-7,1.3c-0.1,0-0.3,0-0.5,0c-2,0-3.7-1.5-4-3.6 C344.1,309.7,345.7,307.6,347.8,307.2 M128.1,87.2l-0.3,0.1c-14.3,5.8-23.6,19.5-23.6,35.1c0,8.5,2.9,16.6,8.5,23.5 c0,0,0,0.1,0.1,0.1l0,0c0.1,0.1,11.3,15.3,31.4,16.9c2.3,0.1,3.9,2.1,3.7,4.4c-0.1,2.1-2,3.7-4,3.7c-0.1,0-0.3,0-0.3,0 c-18.9-1.5-30.8-12.8-35.3-17.8l-4.6,1.7c-0.1,0.1-0.3,0.1-0.5,0.3c-25.6,9.6-42.2,32.1-42.2,57.5c0,10.6,3.1,21.1,8.6,30.4 c0.7,1.1,0.8,2.3,0.4,3.3c-0.3,1.2-1.2,2-2.3,2.5C36.2,263.1,16,293.6,16,327c0,47.6,39.9,86.2,88.9,86.2c32.4,0,68-6.2,106.1-18.5 c3.1-1.3,39.5-16.7,91.1-14.5c2.3,0.1,4,2,3.9,4.3c-0.1,2.3-1.9,4.1-4.3,3.9c-35.6-1.6-64,5.7-78.1,10.4 c26.2,9.6,63.8,14.5,111.7,14.5c43.3,0,78.6-35.2,78.6-78.6c0-20.3-8-39.7-22.1-54.3c-3.2,7.6-10.2,20.2-23.2,28.2 c-0.7,0.4-1.3,0.7-2.1,0.7c-1.3,0-2.7-0.7-3.5-1.9c-1.2-1.9-0.5-4.4,1.3-5.6c16.2-10,21.8-28.7,22.1-29.6 c4.1-17.7,2.4-35.6-4.9-53.3c-4.1-10-10.1-19-17.8-26.8c-1.5-1.6-13.5-11.3-13.5-11.3c-3.6,6.9-12.8,19-33.6,23.6 c-0.3,0-0.5,0.1-0.8,0.1c-1.9,0-3.6-1.3-4-3.2c-0.5-2.3,0.9-4.4,3.1-4.8c23.9-5.2,29.2-21.7,29.6-22.7c3.5-13,2.3-26.4-3.5-39.6 c-8.2-18.9-25.9-32.7-47.4-37.2c-3.5,5.2-12.8,16.1-31.6,20.3c-0.3,0.1-0.7,0.1-0.9,0.1c-1.9,0-3.6-1.3-4-3.2 c-0.5-2.3,0.8-4.4,3.1-4.9c20.2-4.6,27.2-17.7,27.8-18.7c2.8-6.4,2.8-13.7,0.3-21.4c-4.6-14.1-15.9-16.9-31.6-20.9 c-16.9-4.1-37.6-9.3-55.7-31.5c-15.7,10.9-30.8,33.3-29,50.7c1.1,9.8,7.4,16.9,19,20.9c2.1,0.8,3.2,3.1,2.5,5.2 c-0.8,2.1-3.1,3.2-5.2,2.5c-11.8-4.1-18.1-10.5-21.4-17C167,79.1,141.9,80.6,128.1,87.2z",
          }),
        });
      }
    },
    129724: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return a;
        },
      });
      var i = n(913527),
        s = n.n(i),
        r = n(388032);
      function a(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : r.intl.string(r.t["Yl1D8/"]),
          i = s().duration(e, "seconds");
        if (i.days() > 0)
          return r.intl.formatToPlainString(t ? r.t.GBLpQ0 : r.t.k2UNz8, {
            days: i.days(),
          });
        if (i.hours() > 0)
          return r.intl.formatToPlainString(t ? r.t.rhY1Rk : r.t.xCjYxM, {
            hours: i.hours(),
          });
        if (i.minutes() > 0)
          return r.intl.formatToPlainString(t ? r.t["XIGt+f"] : r.t.iXLF9f, {
            minutes: i.minutes(),
          });
        else if (e > 0)
          return r.intl.formatToPlainString(t ? r.t.pyvjRk : r.t.geSp4O, {
            seconds: i.seconds(),
          });
        else return t ? r.intl.string(r.t["Yl1D8/"]) : n;
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
        innerText: "innerText_f6b647",
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
//# sourceMappingURL=3b84753a0637e32ca2f9.js.map
