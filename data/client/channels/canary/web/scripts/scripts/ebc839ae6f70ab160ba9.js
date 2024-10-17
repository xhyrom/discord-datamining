"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25788"],
  {
    533307: function (e, t, n) {
      let i;
      var s = n(544891),
        r = n(570140),
        l = n(728345),
        o = n(812206),
        a = n(625128),
        d = n(335131),
        u = n(669079),
        c = n(981631),
        _ = n(474936);
      async function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        r.Z.dispatch({ type: "GIFT_CODE_RESOLVE", code: e });
        try {
          let i = await (0, u.bT)(e, t, n);
          if (null != i.application_id && i.application_id !== _.CL) {
            let e = o.Z.getApplication(i.application_id);
            if (null == e)
              try {
                await l.ZP.fetchApplication(i.application_id);
              } catch (e) {}
          }
          if (i.application_id === c.XAJ)
            try {
              await (0, d.jr)(i.sku_id);
            } catch (e) {}
          return (
            r.Z.dispatch({ type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode: i }),
            { giftCode: i }
          );
        } catch (t) {
          throw (
            (r.Z.dispatch({
              type: "GIFT_CODE_RESOLVE_FAILURE",
              code: e,
              error: t,
            }),
            t)
          );
        }
      }
      (i = n(775644).Z),
        (t.Z = {
          resolveGiftCode: E,
          async fetchUserGiftCodesForSKU(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            r.Z.dispatch({
              type: "GIFT_CODES_FETCH",
              skuId: e,
              subscriptionPlanId: t,
            });
            try {
              let n = await s.tn.get({
                url: c.ANM.USER_GIFT_CODES,
                query: { sku_id: e, subscription_plan_id: t },
                oldFormErrors: !0,
              });
              r.Z.dispatch({
                type: "GIFT_CODES_FETCH_SUCCESS",
                giftCodes: n.body,
                skuId: e,
                subscriptionPlanId: t,
              });
            } catch (n) {
              r.Z.dispatch({
                type: "GIFT_CODES_FETCH_FAILURE",
                skuId: e,
                subscriptionPlanId: t,
              });
            }
          },
          async createGiftCode(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
            r.Z.dispatch({
              type: "GIFT_CODE_CREATE_START",
              skuId: e,
              subscriptionPlanId: t,
            });
            try {
              let i = await s.tn.post({
                url: c.ANM.USER_GIFT_CODE_CREATE,
                body: { sku_id: e, subscription_plan_id: t, gift_style: n },
                oldFormErrors: !0,
              });
              return (
                r.Z.dispatch({
                  type: "GIFT_CODE_CREATE_SUCCESS",
                  giftCode: i.body,
                }),
                i.body
              );
            } catch (n) {
              r.Z.dispatch({
                type: "GIFT_CODE_CREATE_FAILURE",
                skuId: e,
                subscriptionPlanId: t,
              });
            }
          },
          async revokeGiftCode(e) {
            r.Z.dispatch({ type: "GIFT_CODE_REVOKE", code: e });
            try {
              await s.tn.del({
                url: c.ANM.USER_GIFT_CODE_REVOKE(e),
                oldFormErrors: !0,
              }),
                r.Z.dispatch({ type: "GIFT_CODE_REVOKE_SUCCESS", code: e });
            } catch (t) {
              r.Z.dispatch({ type: "GIFT_CODE_REVOKE_FAILURE", code: e });
            }
          },
          openNativeGiftCodeModal(e) {
            a.Z.openNativeAppModal(e, c.Etm.GIFT_CODE_BROWSER);
          },
          ...i,
        });
    },
    775644: function (e, t, n) {
      var i = n(544891),
        s = n(570140),
        r = n(881052),
        l = n(122289),
        o = n(981631);
      let a = Object.freeze({});
      async function d(e) {
        let { code: t, options: n = a, onRedeemed: d, onError: u } = e,
          { channelId: c = null, paymentSource: _ = null } = n;
        s.Z.dispatch({ type: "GIFT_CODE_REDEEM", code: t });
        try {
          let e = await i.tn.post({
            url: o.ANM.GIFT_CODE_REDEEM(t),
            body: {
              channel_id: c,
              payment_source_id: null == _ ? void 0 : _.id,
              gateway_checkout_context: await (0, l.cn)(_),
            },
            oldFormErrors: !0,
          });
          return (
            s.Z.dispatch({
              type: "GIFT_CODE_REDEEM_SUCCESS",
              code: t,
              entitlement: e.body,
            }),
            null == d || d(),
            { code: t, entitlement: e }
          );
        } catch (n) {
          let e = new r.HF(n);
          throw (
            (s.Z.dispatch({
              type: "GIFT_CODE_REDEEM_FAILURE",
              code: t,
              error: e,
            }),
            null == u || u(e),
            e)
          );
        }
      }
      t.Z = { redeemGiftCode: d };
    },
    792766: function (e, t, n) {
      n.d(t, {
        y: function () {
          return f;
        },
      });
      var i = n(735250),
        s = n(470079),
        r = n(120356),
        l = n.n(r),
        o = n(481060),
        a = n(528144),
        d = n(112831),
        u = n(686546),
        c = n(565138),
        _ = n(601964),
        E = n(598077),
        p = n(689938),
        h = n(325929);
      let m = (e) => {
          var t;
          let { speaker: n, guildId: s, isEmbed: r } = e,
            l = new E.Z(n.user);
          return (0, i.jsxs)("div", {
            className: h.speaker,
            children: [
              (0, i.jsx)(o.Avatar, {
                src: l.getAvatarURL(s, r ? 16 : 24),
                size: r ? o.AvatarSizes.SIZE_16 : o.AvatarSizes.SIZE_24,
                "aria-label": "".concat(n.nick, "-avatar"),
                className: r ? null : h.avatar,
              }),
              (0, i.jsx)(d.Z, {
                size: r ? d.Z.Sizes.SIZE_12 : d.Z.Sizes.SIZE_14,
                color: d.Z.Colors.HEADER_SECONDARY,
                className: h.username,
                children:
                  null !== (t = n.nick) && void 0 !== t ? t : l.username,
              }),
            ],
          });
        },
        f = (e) => {
          let { guild: t, onlineCount: n } = e;
          if (null == t) return null;
          let s = new _.ZP(t),
            { name: r, description: l } = s;
          return (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)(a.Z, {
                muted: !0,
                uppercase: !0,
                className: h.alignStart,
                children: p.Z.Messages.STAGE_INVITE_GUILD_HEADER,
              }),
              (0, i.jsxs)("div", {
                className: h.guild,
                children: [
                  (0, i.jsx)(u.ZP, {
                    mask: u.ZP.Masks.SQUIRCLE,
                    width: 40,
                    height: 40,
                    children: (0, i.jsx)(c.Z, {
                      guild: s,
                      size: c.Z.Sizes.MEDIUM,
                      active: !0,
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: h.guildInfo,
                    children: [
                      (0, i.jsx)(o.Heading, {
                        variant: "heading-sm/semibold",
                        children: r,
                      }),
                      (0, i.jsxs)("div", {
                        className: h.speaker,
                        children: [
                          (0, i.jsx)("div", { className: h.dot }),
                          null != n && n > 0
                            ? (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children:
                                  p.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                                    { membersOnline: n },
                                  ),
                              })
                            : null,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              null != l &&
                "" !== l &&
                (0, i.jsx)(o.Text, {
                  color: "header-secondary",
                  className: h.alignStart,
                  variant: "text-sm/normal",
                  children: l,
                }),
            ],
          });
        };
      t.Z = (e) => {
        var t;
        let {
            stageInstance: n,
            guild: r,
            isCard: E = !1,
            isEmbed: f = !1,
            onClick: S,
          } = e,
          I = s.useMemo(
            () => (null == r ? null : r instanceof _.ZP ? r : new _.ZP(r)),
            [r],
          );
        if (null == n || null == I) return null;
        let { topic: g, speaker_count: C, participant_count: A } = n,
          v = null !== (t = n.members) && void 0 !== t ? t : [],
          R = f ? v.slice(0, 3) : v,
          O = C - R.length;
        return (
          f && (O += v.length - R.length),
          (0, i.jsxs)("div", {
            children: [
              (0, i.jsxs)("div", {
                className: h.flex,
                children: [
                  (0, i.jsxs)("div", {
                    className: h.flex,
                    children: [
                      (0, i.jsx)(o.StageIcon, {
                        size: "custom",
                        color: "currentColor",
                        height: 24,
                        width: 24,
                        className: h.live,
                      }),
                      (0, i.jsx)(o.Heading, {
                        variant: "eyebrow",
                        className: l()(h.__invalid_label, h.live),
                        children: p.Z.Messages.STAGE_CHANNEL_LIVE_NOW,
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: h.background,
                    children: [
                      (0, i.jsx)(o.HeadphonesIcon, {
                        size: "custom",
                        color: "currentColor",
                        height: 16,
                        width: 16,
                        className: h.listeners,
                      }),
                      (0, i.jsx)(o.Heading, {
                        className: l()(h.__invalid_label, h.listeners),
                        variant: "heading-sm/semibold",
                        children: A,
                      }),
                    ],
                  }),
                ],
              }),
              f &&
                (0, i.jsxs)("div", {
                  className: l()(h.guild, { [h.embed]: f }),
                  children: [
                    (0, i.jsx)(u.ZP, {
                      mask: u.ZP.Masks.SQUIRCLE,
                      width: 20,
                      height: 20,
                      children: (0, i.jsx)(c.Z, {
                        guild: I,
                        size: c.Z.Sizes.MINI,
                        active: !0,
                      }),
                    }),
                    (0, i.jsx)(o.Text, {
                      color: "header-secondary",
                      className: h.__invalid_label,
                      variant: "text-sm/normal",
                      children: I.name,
                    }),
                  ],
                }),
              (0, i.jsx)(a.Z, {
                size: E || f ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_20,
                className: l()(h.header, { [h.embed]: f }),
                children: g,
              }),
              (0, i.jsxs)("div", {
                className: l()(h.members, { [h.embed]: f }),
                children: [
                  R.length > 0 &&
                    (0, i.jsxs)("div", {
                      className: h.speakers,
                      children: [
                        R.map((e) =>
                          (0, i.jsx)(
                            m,
                            { speaker: e, guildId: I.id, isEmbed: f },
                            e.user.id,
                          ),
                        ),
                        O > 0
                          ? (0, i.jsxs)("div", {
                              className: h.speaker,
                              children: [
                                (0, i.jsx)("div", {
                                  className: l()(h.icon, { [h.embed]: f }),
                                  children: (0, i.jsx)(o.MicrophoneIcon, {
                                    size: "custom",
                                    color: "currentColor",
                                    height: f ? 12 : 14,
                                    className: h.listeners,
                                  }),
                                }),
                                (0, i.jsxs)(d.Z, {
                                  size: f
                                    ? d.Z.Sizes.SIZE_12
                                    : d.Z.Sizes.SIZE_14,
                                  color: d.Z.Colors.HEADER_SECONDARY,
                                  children: [
                                    "+",
                                    p.Z.Messages.STAGE_INVITE_SPEAKER_COUNT.format(
                                      { count: O },
                                    ),
                                  ],
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                  f &&
                    (0, i.jsx)(o.Button, {
                      color: o.Button.Colors.GREEN,
                      onClick: S,
                      className: h.joinButton,
                      children: p.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON,
                    }),
                ],
              }),
            ],
          })
        );
      };
    },
    17894: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(525654),
        s = n.n(i),
        r = n(39612),
        l = n(271579),
        o = n(756647),
        a = n(232567),
        d = n(703656),
        u = n(314897),
        c = n(896797),
        _ = n(626135),
        E = n(954824),
        p = n(981631);
      async function h(e) {
        var t, n;
        let i = null === (t = s().os) || void 0 === t ? void 0 : t.family;
        if ("Android" === i || "iOS" === i) {
          let t =
              null !== (n = u.default.getFingerprint()) && void 0 !== n
                ? n
                : u.default.getId(),
            i = (0, l.WS)();
          if (null == t && u.default.isAuthenticated())
            try {
              await (0, a.k)(), (t = u.default.getId());
            } catch {}
          return (0, l.ZP)((0, r.Gk)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: i,
          });
        }
        return "discord://";
      }
      async function m(e) {
        let t = await h(e),
          n = (0, l.zS)(t);
        null != n &&
          _.default.track(p.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
          }),
          E.Z.launch(t, (e) => {
            !e && (0, d.dL)(c.Z.fallbackRoute);
          });
      }
    },
    144114: function (e, t, n) {
      n.d(t, {
        L: function () {
          return s;
        },
      });
      var i,
        s,
        r = n(990547),
        l = n(544891),
        o = n(570140),
        a = n(314897),
        d = n(573261),
        u = n(815660),
        c = n(981631);
      ((i = s || (s = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (i.USER_SETTINGS_UPDATE = "user_settings_update"),
        (i.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (i.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (i.CONTACT_SYNC = "contact_sync"),
        (t.Z = {
          setCountryCode(e) {
            o.Z.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: e });
          },
          removePhone: (e, t) =>
            l.tn.del({
              url: c.ANM.PHONE,
              body: { password: e, change_phone_reason: t },
              oldFormErrors: !0,
            }),
          resendCode(e) {
            let t = {},
              n = a.default.getFingerprint();
            return (
              null != n && "" !== n && (t["X-Fingerprint"] = n),
              l.tn.post({
                url: c.ANM.RESEND_PHONE,
                headers: t,
                body: { phone: e },
              })
            );
          },
          beginAddPhone: (e, t) =>
            l.tn.post({
              url: c.ANM.PHONE,
              body: { phone: e, change_phone_reason: t },
            }),
          addPhone: (e, t, n) =>
            l.tn.post({
              url: c.ANM.PHONE,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
            }),
          addPhoneWithoutPassword: (e) =>
            l.tn.post({
              url: c.ANM.PHONE_VERIFY_NO_PASSWORD,
              body: { code: e },
            }),
          beginReverifyPhone: (e, t) =>
            l.tn.post({
              url: c.ANM.PHONE_REVERIFY,
              body: { phone: e, change_phone_reason: t },
            }),
          reverifyPhone: (e, t, n) =>
            l.tn.post({
              url: c.ANM.PHONE_REVERIFY,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
            }),
          validatePhoneForSupport: (e) =>
            l.tn.post({
              url: c.ANM.VERIFY_PHONE_FOR_TICKET,
              body: { token: e },
              oldFormErrors: !0,
            }),
          async verifyPhone(e, t) {
            let n =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              i =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              s = {},
              l = a.default.getFingerprint();
            null != l && "" !== l && (s["X-Fingerprint"] = l),
              i && (s.authorization = "");
            let _ = await d.Z.post({
              url: c.ANM.VERIFY_PHONE,
              headers: s,
              body: { phone: e, code: t },
              oldFormErrors: !0,
              trackedActionData: {
                event: r.NetworkActionNames.USER_VERIFY_PHONE,
              },
            });
            return n && o.Z.dispatch({ type: "MODAL_POP", key: u.M }), _.body;
          },
        });
    },
    815660: function (e, t, n) {
      n.d(t, {
        M: function () {
          return i;
        },
        z: function () {
          return s;
        },
      });
      let i = "PHONE_VERIFICATION_MODAL_KEY",
        s = 6;
    },
    219496: function (e, t, n) {
      var i, s;
      n.d(t, {
        K: function () {
          return i;
        },
      }),
        ((s = i || (i = {})).AVAILABLE = "AVAILABLE"),
        (s.ERROR = "ERROR"),
        (s.RATE_LIMIT = "RATE_LIMIT"),
        (s.INTERNAL_ERROR = "INTERNAL_ERROR");
    },
    346585: function (e, t, n) {
      n.d(t, {
        IE: function () {
          return C;
        },
        K9: function () {
          return I;
        },
        NX: function () {
          return f;
        },
        R_: function () {
          return S;
        },
        e$: function () {
          return E;
        },
        ti: function () {
          return g;
        },
        zV: function () {
          return _;
        },
      }),
        n(757143),
        n(47120),
        n(627341);
      var i = n(913527),
        s = n.n(i),
        r = n(278074),
        l = n(768581),
        o = n(709054),
        a = n(624138),
        d = n(219496),
        u = n(801461),
        c = n(689938);
      function _(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return l.ZP.getUserAvatarURL(
          { id: e.id, avatar: e.avatar, bot: e.bot, discriminator: "0000" },
          t,
          80,
        );
      }
      function E(e) {
        let t = (0, a._I)(e.username)
          .replace(u.RN, "")
          .replace(u.iF, ".")
          .toLowerCase();
        return "".concat(t).concat(e.discriminator).substring(0, 32);
      }
      let p = ["@", "#", ":"],
        h = [
          "```",
          "discord",
          "hypesquad",
          "system message",
          "system mesage",
          "sustem message",
          "sustem mesage",
          "clyde",
        ],
        m = [
          "discordtag",
          "everyone",
          "here",
          "discord nitro",
          "discord",
          "snowsgiving",
        ];
      function f(e) {
        var t, n;
        let i = e.username.toLowerCase();
        if (
          ((t = i),
          (n = u.kt),
          t
            .split("")
            .filter((e) => !n.includes(e.charCodeAt(0)))
            .join("")).length < 2
        )
          return !0;
        for (let e of p) if (i.includes(e)) return !0;
        for (let e of m) if (i === e.toLowerCase()) return !0;
        for (let e of h) if (i.includes(e.toLowerCase())) return !0;
        return !1;
      }
      function S(e) {
        return e.toLowerCase().replace(/\s/g, "").replace("@", "");
      }
      function I(e) {
        let t = o.default.extractTimestamp(e);
        try {
          return s()(new Date(t)).format("MMM DD, YYYY");
        } catch (e) {}
        return null;
      }
      function g(e) {
        return (0, r.EQ)(e)
          .with({ rateLimited: !0 }, () => ({
            type: d.K.RATE_LIMIT,
            message:
              c.Z.Messages
                .APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT,
          }))
          .with({ error: r.P.not(r.P.nullish) }, (e) => {
            let { error: t } = e;
            return { type: d.K.ERROR, message: t };
          })
          .with({ taken: !1 }, () => ({
            type: d.K.AVAILABLE,
            message: c.Z.Messages.POMELO_EXISTING_FLOW_AVAILABLE,
          }))
          .with({ taken: !0 }, () => ({
            type: d.K.ERROR,
            message: c.Z.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE,
          }))
          .with({ error: r.P.nullish }, () => ({
            type: d.K.INTERNAL_ERROR,
            message: "",
          }))
          .otherwise(() => void 0);
      }
      function C(e) {
        return new Date(2024, 2, 4).toLocaleDateString(e, {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      }
    },
    108427: function (e, t, n) {
      n.d(t, {
        e: function () {
          return d;
        },
      }),
        n(47120);
      var i = n(772848),
        s = n(579806),
        r = n(626135),
        l = n(981631);
      function o(e, t, n) {
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
      let a = new (class e {
        trackEvent(e, t) {
          let n = Date.now();
          requestIdleCallback(() => {
            r.default.track(e, {
              ...(function () {
                var e, t, n;
                let i = "--campaign-id=";
                for (let r of null !==
                  (n =
                    null === s.Z || void 0 === s.Z
                      ? void 0
                      : null === (t = s.Z.processUtils) || void 0 === t
                        ? void 0
                        : null === (e = t.getMainArgvSync) || void 0 === e
                          ? void 0
                          : e.call(t)) && void 0 !== n
                  ? n
                  : [])
                  if (r.startsWith(i)) return { referrer: r.substr(i.length) };
                return {};
              })(),
              ...(function () {
                let e = !1,
                  t = {
                    total_compressed_byte_size: 0,
                    total_uncompressed_byte_size: 0,
                    total_transfer_byte_size: 0,
                    js_compressed_byte_size: 0,
                    js_uncompressed_byte_size: 0,
                    js_transfer_byte_size: 0,
                    css_compressed_byte_size: 0,
                    css_uncompressed_byte_size: 0,
                    css_transfer_byte_size: 0,
                  };
                return (
                  null != window.performance &&
                    null != window.performance.getEntries &&
                    window.performance.getEntries().forEach((n) => {
                      let i =
                          null != n.encodedBodySize
                            ? n.encodedBodySize
                            : n.decodedBodySize,
                        s =
                          null != n.decodedBodySize
                            ? n.decodedBodySize
                            : n.encodedBodySize,
                        r = n.transferSize;
                      null != s &&
                        null != i &&
                        ((e = !0),
                        (t.total_compressed_byte_size += i),
                        (t.total_uncompressed_byte_size += s),
                        null != r && (t.total_uncompressed_byte_size += r),
                        "resource" === n.entryType &&
                          ("script" === n.initiatorType &&
                            null != n.name &&
                            null != n.name.match(/\.js/) &&
                            ((t.js_compressed_byte_size += i),
                            (t.js_uncompressed_byte_size += s),
                            null != r && (t.js_uncompressed_byte_size += r)),
                          "link" === n.initiatorType &&
                            null != n.name &&
                            null != n.name.match(/\.css/) &&
                            ((t.css_compressed_byte_size += i),
                            (t.css_uncompressed_byte_size += s),
                            null != r && (t.css_uncompressed_byte_size += r))));
                    }),
                  e ? t : {}
                );
              })(),
              load_id: this.loadId,
              screen_name: t,
              duration_ms_since_app_opened:
                n - window.GLOBAL_ENV.HTML_TIMESTAMP,
            });
          });
        }
        trackAppUIViewed(e) {
          if (!this.appUIViewed)
            this.trackEvent(l.rMx.APP_UI_VIEWED, e), (this.appUIViewed = !0);
        }
        constructor() {
          o(this, "loadId", (0, i.Z)()), o(this, "appUIViewed", !1);
        }
      })();
      function d(e) {
        a.trackAppUIViewed(e);
      }
    },
    590783: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(789020);
      var i = n(913527),
        s = n.n(i),
        r = n(81825),
        l = n(630388),
        o = n(301766),
        a = n(474936);
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
      let u = Object.freeze({
        PAYMENT_SOURCE_REQUIRED: 1,
        EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
        NOT_SELF_REDEEMABLE: 4,
      });
      class c extends r.Z {
        static createFromServer(e) {
          return new c({
            userId: null != e.user ? e.user.id : null,
            code: e.code,
            skuId: e.sku_id,
            applicationId: e.application_id,
            uses: e.uses,
            maxUses: e.max_uses,
            storeListingId: null != e.store_listing ? e.store_listing.id : null,
            expiresAt: null != e.expires_at ? s()(e.expires_at) : null,
            redeemed: e.redeemed,
            subscriptionPlanId:
              null != e.subscription_plan
                ? e.subscription_plan.id
                : e.subscription_plan_id,
            subscriptionPlan:
              null != e.subscription_plan
                ? o.ZP.createFromServer(e.subscription_plan)
                : null,
            revoked: !1,
            entitlementBranches:
              null != e.entitlement_branches ? e.entitlement_branches : null,
            flags: null != e.flags ? e.flags : 0,
            giftStyle: e.gift_style,
            subscriptionTrial:
              null != e.subscription_trial
                ? {
                    id: e.subscription_trial.id,
                    interval: e.subscription_trial.interval,
                    intervalCount: e.subscription_trial.interval_count,
                    skuId: e.subscription_trial.sku_id,
                  }
                : null,
            promotion:
              null != e.promotion
                ? {
                    id: e.promotion.id,
                    startDate: e.promotion.start_date,
                    endDate: e.promotion.end_date,
                    inboundHeaderText: e.promotion.inbound_header_text,
                    inboundBodyText: e.promotion.inbound_body_text,
                    inboundHelpCenterLink: e.promotion.inbound_help_center_link,
                  }
                : null,
          });
        }
        isExpired() {
          let e = this.expiresAt;
          return null != e && s()().isAfter(e);
        }
        get hasMultipleCopies() {
          return this.maxUses > 1;
        }
        get isClaimed() {
          return this.uses >= this.maxUses;
        }
        get remainingUses() {
          return this.maxUses - this.uses;
        }
        get isSubscription() {
          return null != this.subscriptionPlanId;
        }
        get premiumSubscriptionType() {
          return (this.isSubscription && a.y7[this.skuId]) || null;
        }
        get isSelfRedeemable() {
          return !(0, l.yE)(this.flags, u.NOT_SELF_REDEEMABLE);
        }
        get isExistingPremiumSubscriptionDisallowed() {
          return (0, l.yE)(
            this.flags,
            u.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED,
          );
        }
        get analyticsData() {
          return { gift_code: this.code, gift_code_max_uses: this.maxUses };
        }
        toString() {
          return this.code;
        }
        constructor(e) {
          super(),
            d(this, "userId", void 0),
            d(this, "code", void 0),
            d(this, "skuId", void 0),
            d(this, "applicationId", void 0),
            d(this, "uses", void 0),
            d(this, "maxUses", void 0),
            d(this, "expiresAt", void 0),
            d(this, "redeemed", void 0),
            d(this, "storeListingId", void 0),
            d(this, "subscriptionPlanId", void 0),
            d(this, "subscriptionPlan", void 0),
            d(this, "revoked", void 0),
            d(this, "entitlementBranches", void 0),
            d(this, "flags", void 0),
            d(this, "subscriptionTrial", void 0),
            d(this, "promotion", void 0),
            d(this, "giftStyle", void 0),
            (this.userId = e.userId),
            (this.code = e.code),
            (this.skuId = e.skuId),
            (this.applicationId = e.applicationId),
            (this.uses = e.uses),
            (this.maxUses = e.maxUses),
            (this.expiresAt = e.expiresAt),
            (this.redeemed = e.redeemed),
            (this.storeListingId = e.storeListingId),
            (this.subscriptionPlanId = e.subscriptionPlanId),
            (this.subscriptionPlan = e.subscriptionPlan),
            (this.revoked = e.revoked),
            (this.entitlementBranches = e.entitlementBranches),
            (this.flags = e.flags),
            (this.subscriptionTrial = e.subscriptionTrial),
            (this.promotion = e.promotion),
            (this.giftStyle = e.giftStyle);
        }
      }
    },
    82142: function (e, t, n) {
      n(47120);
      var i,
        s,
        r,
        l,
        o = n(913527),
        a = n.n(o),
        d = n(442837),
        u = n(846519),
        c = n(570140),
        _ = n(533307),
        E = n(590783),
        p = n(669079),
        h = n(981631);
      let m = {},
        f = new Map(),
        S = [],
        I = [],
        g = [],
        C = new Set(),
        A = {},
        v = {},
        R = new Set();
      function O(e) {
        let t = E.Z.createFromServer(e),
          n = t.code;
        if (f.has(n)) f.set(n, f.get(n).merge(t));
        else if ((f.set(n, t), null != t.expiresAt)) {
          let e = new u.V7();
          (m[n] = e),
            (function e(t) {
              let n = f.get(t);
              if (null == n || null == n.expiresAt) return;
              let i = n.expiresAt.valueOf() - a()().valueOf();
              if (i <= 0) f.delete(t), delete m[t], F.emitChange();
              else {
                let n = m[t];
                if (null == n) return;
                n.start(Math.min(2147483647, i), () => e(t));
              }
            })(n);
        }
      }
      function T(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t && !R.has(e.channel_id)) return !1;
        let n = (0, p.Fp)(e)
          ? (0, p.Q_)(
              (null == e ? void 0 : e.embeds) != null
                ? null == e
                  ? void 0
                  : e.embeds[0].url
                : void 0,
            )
          : (0, p.Q_)(e.content);
        return (
          0 !== n.length &&
          (n.forEach((e) => {
            !S.includes(e) &&
              !g.includes(e) &&
              (N({ code: e }),
              c.Z.wait(() => _.Z.resolveGiftCode(e, !1, !0).catch(h.VqG)));
          }),
          !1)
        );
      }
      function N(e) {
        let { code: t } = e;
        !S.includes(t) && (S = [...S, t]);
      }
      function y(e) {
        let { message: t } = e;
        return T(t, !0);
      }
      function b(e) {
        let { channelId: t, messages: n } = e;
        R.add(t), n.forEach((e) => T(e, !0));
      }
      function D(e) {
        let { firstMessages: t } = e;
        if (null == t) return !1;
        null == t || t.forEach((e) => T(e));
      }
      class L extends (i = d.ZP.Store) {
        get(e) {
          let t = f.get(e);
          return null == t || t.isExpired() ? null : t;
        }
        getError(e) {
          return null != e ? v[e] : null;
        }
        getForGifterSKUAndPlan(e, t, n) {
          return Array.from(f.values()).filter(
            (i) =>
              i.userId === e &&
              i.skuId === t &&
              (null == n || i.subscriptionPlanId === n) &&
              !i.isExpired(),
          );
        }
        getIsResolving(e) {
          return S.includes(e);
        }
        getIsResolved(e) {
          return g.includes(e);
        }
        getIsAccepting(e) {
          return I.includes(e);
        }
        getUserGiftCodesFetchingForSKUAndPlan(e, t) {
          return C.has((0, p.Bg)(e, t));
        }
        getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
          return A[(0, p.Bg)(e, t)];
        }
        getResolvingCodes() {
          return S;
        }
        getResolvedCodes() {
          return g;
        }
        getAcceptingCodes() {
          return I;
        }
      }
      (l = "GiftCodeStore"),
        (r = "displayName") in (s = L)
          ? Object.defineProperty(s, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[r] = l);
      let F = new L(c.Z, {
        CONNECTION_OPEN: function () {
          return R.clear(), !1;
        },
        CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          return null != t && R.add(t), !1;
        },
        GIFT_CODE_RESOLVE: N,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
          let { giftCode: t } = e;
          return (
            (S = S.filter((e) => e !== t.code)),
            !g.includes(t.code) && (g = [...g, t.code]),
            O(t)
          );
        },
        GIFT_CODE_RESOLVE_FAILURE: function (e) {
          let { code: t } = e;
          (S = S.filter((e) => e !== t)), !g.includes(t) && (g = [...g, t]);
        },
        GIFT_CODE_REDEEM: function (e) {
          let { code: t } = e;
          !I.includes(t) && (I = [...I, t]);
        },
        GIFT_CODE_REDEEM_SUCCESS: function (e) {
          let { code: t } = e;
          I = I.filter((e) => e !== t);
          let n = f.get(t);
          null != n && f.set(t, n.merge({ redeemed: !0, uses: n.uses + 1 }));
        },
        GIFT_CODE_REDEEM_FAILURE: function (e) {
          let { code: t, error: n } = e;
          I = I.filter((e) => e !== t);
          let i = f.get(t);
          if (((v[t] = n), null != i))
            switch (n.code) {
              case h.evJ.UNKNOWN_GIFT_CODE:
                f.set(t, i.set("revoked", !0));
                break;
              case h.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                f.set(t, i.set("uses", i.maxUses));
            }
        },
        GIFT_CODE_REVOKE_SUCCESS: function (e) {
          let { code: t } = e;
          f.delete(t);
          let n = m[t];
          null != n && (n.stop(), delete m[t]),
            !g.includes(t) && (g = [...g, t]);
        },
        GIFT_CODE_CREATE_SUCCESS: function (e) {
          let { giftCode: t } = e;
          O(t);
        },
        GIFT_CODES_FETCH: function (e) {
          let { skuId: t, subscriptionPlanId: n } = e;
          C.add((0, p.Bg)(t, n));
        },
        GIFT_CODES_FETCH_SUCCESS: function (e) {
          let { giftCodes: t, skuId: n, subscriptionPlanId: i } = e;
          t.forEach(O);
          let s = (0, p.Bg)(n, i);
          (A[s] = Date.now()), C.delete(s);
        },
        GIFT_CODES_FETCH_FAILURE: function (e) {
          let { skuId: t, subscriptionPlanId: n } = e;
          C.delete((0, p.Bg)(t, n));
        },
        MESSAGE_CREATE: y,
        MESSAGE_UPDATE: y,
        LOCAL_MESSAGES_LOADED: b,
        LOAD_MESSAGES_SUCCESS: b,
        LOAD_MESSAGES_AROUND_SUCCESS: b,
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
          let { messages: t } = e;
          t.forEach((e) => T(e));
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
          let { messages: t } = e;
          t.forEach((e) => T(e));
        },
        SEARCH_FINISH: function (e) {
          e.messages.forEach((e) => {
            e.forEach((e) => T(e));
          });
        },
        GIFT_CODE_UPDATE: function (e) {
          let { uses: t, code: n } = e,
            i = f.get(n);
          null != i && f.set(n, i.set("uses", Math.max(i.uses, t)));
        },
        LOAD_THREADS_SUCCESS: D,
        LOAD_ARCHIVED_THREADS_SUCCESS: D,
        LOAD_FORUM_POSTS: function (e) {
          let { threads: t } = e;
          Object.values(t).map((e) => {
            let { first_message: t } = e;
            return null != t && T(t);
          });
        },
      });
      t.Z = F;
    },
  },
]);
//# sourceMappingURL=ebc839ae6f70ab160ba9.js.map
