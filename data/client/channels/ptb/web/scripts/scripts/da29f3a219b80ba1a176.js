"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25788"],
  {
    533307: function (e, t, n) {
      let r;
      var s = n(544891),
        i = n(570140),
        l = n(728345),
        a = n(812206),
        o = n(625128),
        c = n(335131),
        d = n(669079),
        u = n(981631),
        _ = n(474936);
      async function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        i.Z.dispatch({ type: "GIFT_CODE_RESOLVE", code: e });
        try {
          let r = await (0, d.bT)(e, t, n);
          if (null != r.application_id && r.application_id !== _.CL) {
            let e = a.Z.getApplication(r.application_id);
            if (null == e)
              try {
                await l.ZP.fetchApplication(r.application_id);
              } catch (e) {}
          }
          if (r.application_id === u.XAJ)
            try {
              await (0, c.jr)(r.sku_id);
            } catch (e) {}
          return (
            i.Z.dispatch({ type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode: r }),
            { giftCode: r }
          );
        } catch (t) {
          throw (
            (i.Z.dispatch({
              type: "GIFT_CODE_RESOLVE_FAILURE",
              code: e,
              error: t,
            }),
            t)
          );
        }
      }
      (r = n(775644).Z),
        (t.Z = {
          resolveGiftCode: E,
          async fetchUserGiftCodesForSKU(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            i.Z.dispatch({
              type: "GIFT_CODES_FETCH",
              skuId: e,
              subscriptionPlanId: t,
            });
            try {
              let n = await s.tn.get({
                url: u.ANM.USER_GIFT_CODES,
                query: { sku_id: e, subscription_plan_id: t },
                oldFormErrors: !0,
              });
              i.Z.dispatch({
                type: "GIFT_CODES_FETCH_SUCCESS",
                giftCodes: n.body,
                skuId: e,
                subscriptionPlanId: t,
              });
            } catch (n) {
              i.Z.dispatch({
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
            i.Z.dispatch({
              type: "GIFT_CODE_CREATE_START",
              skuId: e,
              subscriptionPlanId: t,
            });
            try {
              let r = await s.tn.post({
                url: u.ANM.USER_GIFT_CODE_CREATE,
                body: { sku_id: e, subscription_plan_id: t, gift_style: n },
                oldFormErrors: !0,
              });
              return (
                i.Z.dispatch({
                  type: "GIFT_CODE_CREATE_SUCCESS",
                  giftCode: r.body,
                }),
                r.body
              );
            } catch (n) {
              i.Z.dispatch({
                type: "GIFT_CODE_CREATE_FAILURE",
                skuId: e,
                subscriptionPlanId: t,
              });
            }
          },
          async revokeGiftCode(e) {
            i.Z.dispatch({ type: "GIFT_CODE_REVOKE", code: e });
            try {
              await s.tn.del({
                url: u.ANM.USER_GIFT_CODE_REVOKE(e),
                oldFormErrors: !0,
              }),
                i.Z.dispatch({ type: "GIFT_CODE_REVOKE_SUCCESS", code: e });
            } catch (t) {
              i.Z.dispatch({ type: "GIFT_CODE_REVOKE_FAILURE", code: e });
            }
          },
          openNativeGiftCodeModal(e) {
            o.Z.openNativeAppModal(e, u.Etm.GIFT_CODE_BROWSER);
          },
          ...r,
        });
    },
    775644: function (e, t, n) {
      var r = n(544891),
        s = n(570140),
        i = n(881052),
        l = n(122289),
        a = n(981631);
      let o = Object.freeze({});
      async function c(e) {
        let { code: t, options: n = o, onRedeemed: c, onError: d } = e,
          { channelId: u = null, paymentSource: _ = null } = n;
        s.Z.dispatch({ type: "GIFT_CODE_REDEEM", code: t });
        try {
          let e = await r.tn.post({
            url: a.ANM.GIFT_CODE_REDEEM(t),
            body: {
              channel_id: u,
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
            null == c || c(),
            { code: t, entitlement: e }
          );
        } catch (n) {
          let e = new i.HF(n);
          throw (
            (s.Z.dispatch({
              type: "GIFT_CODE_REDEEM_FAILURE",
              code: t,
              error: e,
            }),
            null == d || d(e),
            e)
          );
        }
      }
      t.Z = { redeemGiftCode: c };
    },
    792766: function (e, t, n) {
      n.d(t, {
        y: function () {
          return S;
        },
      });
      var r = n(735250),
        s = n(470079),
        i = n(120356),
        l = n.n(i),
        a = n(481060),
        o = n(528144),
        c = n(112831),
        d = n(686546),
        u = n(565138),
        _ = n(601964),
        E = n(598077),
        p = n(689938),
        h = n(325929);
      let f = (e) => {
          var t;
          let { speaker: n, guildId: s, isEmbed: i } = e,
            l = new E.Z(n.user);
          return (0, r.jsxs)("div", {
            className: h.speaker,
            children: [
              (0, r.jsx)(a.Avatar, {
                src: l.getAvatarURL(s, i ? 16 : 24),
                size: i ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                "aria-label": "".concat(n.nick, "-avatar"),
                className: i ? null : h.avatar,
              }),
              (0, r.jsx)(c.Z, {
                size: i ? c.Z.Sizes.SIZE_12 : c.Z.Sizes.SIZE_14,
                color: c.Z.Colors.HEADER_SECONDARY,
                className: h.username,
                children:
                  null !== (t = n.nick) && void 0 !== t ? t : l.username,
              }),
            ],
          });
        },
        S = (e) => {
          let { guild: t, onlineCount: n } = e;
          if (null == t) return null;
          let s = new _.ZP(t),
            { name: i, description: l } = s;
          return (0, r.jsxs)("div", {
            children: [
              (0, r.jsx)(o.Z, {
                muted: !0,
                uppercase: !0,
                className: h.alignStart,
                children: p.Z.Messages.STAGE_INVITE_GUILD_HEADER,
              }),
              (0, r.jsxs)("div", {
                className: h.guild,
                children: [
                  (0, r.jsx)(d.ZP, {
                    mask: d.ZP.Masks.SQUIRCLE,
                    width: 40,
                    height: 40,
                    children: (0, r.jsx)(u.Z, {
                      guild: s,
                      size: u.Z.Sizes.MEDIUM,
                      active: !0,
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: h.guildInfo,
                    children: [
                      (0, r.jsx)(a.Heading, {
                        variant: "heading-sm/semibold",
                        children: i,
                      }),
                      (0, r.jsxs)("div", {
                        className: h.speaker,
                        children: [
                          (0, r.jsx)("div", { className: h.dot }),
                          null != n && n > 0
                            ? (0, r.jsx)(a.Text, {
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
                (0, r.jsx)(a.Text, {
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
            guild: i,
            isCard: E = !1,
            isEmbed: S = !1,
            onClick: m,
          } = e,
          I = s.useMemo(
            () => (null == i ? null : i instanceof _.ZP ? i : new _.ZP(i)),
            [i],
          );
        if (null == n || null == I) return null;
        let { topic: C, speaker_count: g, participant_count: A } = n,
          R = null !== (t = n.members) && void 0 !== t ? t : [],
          O = S ? R.slice(0, 3) : R,
          N = g - O.length;
        return (
          S && (N += R.length - O.length),
          (0, r.jsxs)("div", {
            children: [
              (0, r.jsxs)("div", {
                className: h.flex,
                children: [
                  (0, r.jsxs)("div", {
                    className: h.flex,
                    children: [
                      (0, r.jsx)(a.StageIcon, {
                        size: "custom",
                        color: "currentColor",
                        height: 24,
                        width: 24,
                        className: h.live,
                      }),
                      (0, r.jsx)(a.Heading, {
                        variant: "eyebrow",
                        className: l()(h.__invalid_label, h.live),
                        children: p.Z.Messages.STAGE_CHANNEL_LIVE_NOW,
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: h.background,
                    children: [
                      (0, r.jsx)(a.HeadphonesIcon, {
                        size: "custom",
                        color: "currentColor",
                        height: 16,
                        width: 16,
                        className: h.listeners,
                      }),
                      (0, r.jsx)(a.Heading, {
                        className: l()(h.__invalid_label, h.listeners),
                        variant: "heading-sm/semibold",
                        children: A,
                      }),
                    ],
                  }),
                ],
              }),
              S &&
                (0, r.jsxs)("div", {
                  className: l()(h.guild, { [h.embed]: S }),
                  children: [
                    (0, r.jsx)(d.ZP, {
                      mask: d.ZP.Masks.SQUIRCLE,
                      width: 20,
                      height: 20,
                      children: (0, r.jsx)(u.Z, {
                        guild: I,
                        size: u.Z.Sizes.MINI,
                        active: !0,
                      }),
                    }),
                    (0, r.jsx)(a.Text, {
                      color: "header-secondary",
                      className: h.__invalid_label,
                      variant: "text-sm/normal",
                      children: I.name,
                    }),
                  ],
                }),
              (0, r.jsx)(o.Z, {
                size: E || S ? o.Z.Sizes.SIZE_16 : o.Z.Sizes.SIZE_20,
                className: l()(h.header, { [h.embed]: S }),
                children: C,
              }),
              (0, r.jsxs)("div", {
                className: l()(h.members, { [h.embed]: S }),
                children: [
                  O.length > 0 &&
                    (0, r.jsxs)("div", {
                      className: h.speakers,
                      children: [
                        O.map((e) =>
                          (0, r.jsx)(
                            f,
                            { speaker: e, guildId: I.id, isEmbed: S },
                            e.user.id,
                          ),
                        ),
                        N > 0
                          ? (0, r.jsxs)("div", {
                              className: h.speaker,
                              children: [
                                (0, r.jsx)("div", {
                                  className: l()(h.icon, { [h.embed]: S }),
                                  children: (0, r.jsx)(a.MicrophoneIcon, {
                                    size: "custom",
                                    color: "currentColor",
                                    height: S ? 12 : 14,
                                    className: h.listeners,
                                  }),
                                }),
                                (0, r.jsxs)(c.Z, {
                                  size: S
                                    ? c.Z.Sizes.SIZE_12
                                    : c.Z.Sizes.SIZE_14,
                                  color: c.Z.Colors.HEADER_SECONDARY,
                                  children: [
                                    "+",
                                    p.Z.Messages.STAGE_INVITE_SPEAKER_COUNT.format(
                                      { count: N },
                                    ),
                                  ],
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                  S &&
                    (0, r.jsx)(a.Button, {
                      color: a.Button.Colors.GREEN,
                      onClick: m,
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
          return f;
        },
      });
      var r = n(525654),
        s = n.n(r),
        i = n(39612),
        l = n(271579),
        a = n(756647),
        o = n(232567),
        c = n(703656),
        d = n(314897),
        u = n(896797),
        _ = n(626135),
        E = n(954824),
        p = n(981631);
      async function h(e) {
        var t, n;
        let r = null === (t = s().os) || void 0 === t ? void 0 : t.family;
        if ("Android" === r || "iOS" === r) {
          let t =
              null !== (n = d.default.getFingerprint()) && void 0 !== n
                ? n
                : d.default.getId(),
            r = (0, l.WS)();
          if (null == t && d.default.isAuthenticated())
            try {
              await (0, o.k)(), (t = d.default.getId());
            } catch {}
          return (0, l.ZP)((0, i.Gk)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: r,
          });
        }
        return "discord://";
      }
      async function f(e) {
        let t = await h(e),
          n = (0, l.zS)(t);
        null != n &&
          _.default.track(p.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
          }),
          E.Z.launch(t, (e) => {
            !e && (0, c.dL)(u.Z.fallbackRoute);
          });
      }
    },
    144114: function (e, t, n) {
      n.d(t, {
        L: function () {
          return s;
        },
      });
      var r,
        s,
        i = n(990547),
        l = n(544891),
        a = n(570140),
        o = n(314897),
        c = n(573261),
        d = n(815660),
        u = n(981631);
      ((r = s || (s = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (r.USER_SETTINGS_UPDATE = "user_settings_update"),
        (r.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (r.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (r.CONTACT_SYNC = "contact_sync"),
        (t.Z = {
          setCountryCode(e) {
            a.Z.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: e });
          },
          removePhone: (e, t) =>
            l.tn.del({
              url: u.ANM.PHONE,
              body: { password: e, change_phone_reason: t },
              oldFormErrors: !0,
            }),
          resendCode(e) {
            let t = {},
              n = o.default.getFingerprint();
            return (
              null != n && "" !== n && (t["X-Fingerprint"] = n),
              l.tn.post({
                url: u.ANM.RESEND_PHONE,
                headers: t,
                body: { phone: e },
              })
            );
          },
          beginAddPhone: (e, t) =>
            l.tn.post({
              url: u.ANM.PHONE,
              body: { phone: e, change_phone_reason: t },
            }),
          addPhone: (e, t, n) =>
            l.tn.post({
              url: u.ANM.PHONE,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
            }),
          addPhoneWithoutPassword: (e) =>
            l.tn.post({
              url: u.ANM.PHONE_VERIFY_NO_PASSWORD,
              body: { code: e },
            }),
          beginReverifyPhone: (e, t) =>
            l.tn.post({
              url: u.ANM.PHONE_REVERIFY,
              body: { phone: e, change_phone_reason: t },
            }),
          reverifyPhone: (e, t, n) =>
            l.tn.post({
              url: u.ANM.PHONE_REVERIFY,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
            }),
          validatePhoneForSupport: (e) =>
            l.tn.post({
              url: u.ANM.VERIFY_PHONE_FOR_TICKET,
              body: { token: e },
              oldFormErrors: !0,
            }),
          async verifyPhone(e, t) {
            let n =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              r =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              s = {},
              l = o.default.getFingerprint();
            null != l && "" !== l && (s["X-Fingerprint"] = l),
              r && (s.authorization = "");
            let _ = await c.Z.post({
              url: u.ANM.VERIFY_PHONE,
              headers: s,
              body: { phone: e, code: t },
              oldFormErrors: !0,
              trackedActionData: {
                event: i.NetworkActionNames.USER_VERIFY_PHONE,
              },
            });
            return n && a.Z.dispatch({ type: "MODAL_POP", key: d.M }), _.body;
          },
        });
    },
    815660: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
        z: function () {
          return s;
        },
      });
      let r = "PHONE_VERIFICATION_MODAL_KEY",
        s = 6;
    },
    219496: function (e, t, n) {
      var r, s;
      n.d(t, {
        K: function () {
          return r;
        },
      }),
        ((s = r || (r = {})).AVAILABLE = "AVAILABLE"),
        (s.ERROR = "ERROR"),
        (s.RATE_LIMIT = "RATE_LIMIT"),
        (s.INTERNAL_ERROR = "INTERNAL_ERROR");
    },
    346585: function (e, t, n) {
      n.d(t, {
        IE: function () {
          return g;
        },
        K9: function () {
          return I;
        },
        NX: function () {
          return S;
        },
        R_: function () {
          return m;
        },
        e$: function () {
          return E;
        },
        ti: function () {
          return C;
        },
        zV: function () {
          return _;
        },
      }),
        n(757143),
        n(47120),
        n(627341);
      var r = n(913527),
        s = n.n(r),
        i = n(278074),
        l = n(768581),
        a = n(709054),
        o = n(624138),
        c = n(219496),
        d = n(801461),
        u = n(689938);
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
        let t = (0, o._I)(e.username)
          .replace(d.RN, "")
          .replace(d.iF, ".")
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
        f = [
          "discordtag",
          "everyone",
          "here",
          "discord nitro",
          "discord",
          "snowsgiving",
        ];
      function S(e) {
        var t, n;
        let r = e.username.toLowerCase();
        if (
          ((t = r),
          (n = d.kt),
          t
            .split("")
            .filter((e) => !n.includes(e.charCodeAt(0)))
            .join("")).length < 2
        )
          return !0;
        for (let e of p) if (r.includes(e)) return !0;
        for (let e of f) if (r === e.toLowerCase()) return !0;
        for (let e of h) if (r.includes(e.toLowerCase())) return !0;
        return !1;
      }
      function m(e) {
        return e.toLowerCase().replace(/\s/g, "").replace("@", "");
      }
      function I(e) {
        let t = a.default.extractTimestamp(e);
        try {
          return s()(new Date(t)).format("MMM DD, YYYY");
        } catch (e) {}
        return null;
      }
      function C(e) {
        return (0, i.EQ)(e)
          .with({ rateLimited: !0 }, () => ({
            type: c.K.RATE_LIMIT,
            message:
              u.Z.Messages
                .APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT,
          }))
          .with({ error: i.P.not(i.P.nullish) }, (e) => {
            let { error: t } = e;
            return { type: c.K.ERROR, message: t };
          })
          .with({ taken: !1 }, () => ({
            type: c.K.AVAILABLE,
            message: u.Z.Messages.POMELO_EXISTING_FLOW_AVAILABLE,
          }))
          .with({ taken: !0 }, () => ({
            type: c.K.ERROR,
            message: u.Z.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE,
          }))
          .with({ error: i.P.nullish }, () => ({
            type: c.K.INTERNAL_ERROR,
            message: "",
          }))
          .otherwise(() => void 0);
      }
      function g(e) {
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
          return c;
        },
      }),
        n(47120);
      var r = n(772848),
        s = n(579806),
        i = n(626135),
        l = n(981631);
      function a(e, t, n) {
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
      let o = new (class e {
        trackEvent(e, t) {
          let n = Date.now();
          requestIdleCallback(() => {
            i.default.track(e, {
              ...(function () {
                var e, t, n;
                let r = "--campaign-id=";
                for (let i of null !==
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
                  if (i.startsWith(r)) return { referrer: i.substr(r.length) };
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
                      let r =
                          null != n.encodedBodySize
                            ? n.encodedBodySize
                            : n.decodedBodySize,
                        s =
                          null != n.decodedBodySize
                            ? n.decodedBodySize
                            : n.encodedBodySize,
                        i = n.transferSize;
                      null != s &&
                        null != r &&
                        ((e = !0),
                        (t.total_compressed_byte_size += r),
                        (t.total_uncompressed_byte_size += s),
                        null != i && (t.total_uncompressed_byte_size += i),
                        "resource" === n.entryType &&
                          ("script" === n.initiatorType &&
                            null != n.name &&
                            null != n.name.match(/\.js/) &&
                            ((t.js_compressed_byte_size += r),
                            (t.js_uncompressed_byte_size += s),
                            null != i && (t.js_uncompressed_byte_size += i)),
                          "link" === n.initiatorType &&
                            null != n.name &&
                            null != n.name.match(/\.css/) &&
                            ((t.css_compressed_byte_size += r),
                            (t.css_uncompressed_byte_size += s),
                            null != i && (t.css_uncompressed_byte_size += i))));
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
          a(this, "loadId", (0, r.Z)()), a(this, "appUIViewed", !1);
        }
      })();
      function c(e) {
        o.trackAppUIViewed(e);
      }
    },
    82142: function (e, t, n) {
      n(47120);
      var r,
        s,
        i,
        l,
        a = n(913527),
        o = n.n(a),
        c = n(442837),
        d = n(846519),
        u = n(570140),
        _ = n(533307),
        E = n(590783),
        p = n(669079),
        h = n(981631);
      let f = {},
        S = new Map(),
        m = [],
        I = [],
        C = [],
        g = new Set(),
        A = {},
        R = {},
        O = new Set();
      function N(e) {
        let t = E.Z.createFromServer(e),
          n = t.code;
        if (S.has(n)) S.set(n, S.get(n).merge(t));
        else if ((S.set(n, t), null != t.expiresAt)) {
          let e = new d.V7();
          (f[n] = e),
            (function e(t) {
              let n = S.get(t);
              if (null == n || null == n.expiresAt) return;
              let r = n.expiresAt.valueOf() - o()().valueOf();
              if (r <= 0) S.delete(t), delete f[t], L.emitChange();
              else {
                let n = f[t];
                if (null == n) return;
                n.start(Math.min(2147483647, r), () => e(t));
              }
            })(n);
        }
      }
      function T(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t && !O.has(e.channel_id)) return !1;
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
            !m.includes(e) &&
              !C.includes(e) &&
              (y({ code: e }),
              u.Z.wait(() => _.Z.resolveGiftCode(e, !1, !0).catch(h.VqG)));
          }),
          !1)
        );
      }
      function y(e) {
        let { code: t } = e;
        !m.includes(t) && (m = [...m, t]);
      }
      function v(e) {
        let { message: t } = e;
        return T(t, !0);
      }
      function D(e) {
        let { channelId: t, messages: n } = e;
        O.add(t), n.forEach((e) => T(e, !0));
      }
      function F(e) {
        let { firstMessages: t } = e;
        if (null == t) return !1;
        null == t || t.forEach((e) => T(e));
      }
      class Z extends (r = c.ZP.Store) {
        get(e) {
          let t = S.get(e);
          return null == t || t.isExpired() ? null : t;
        }
        getError(e) {
          return null != e ? R[e] : null;
        }
        getForGifterSKUAndPlan(e, t, n) {
          return Array.from(S.values()).filter(
            (r) =>
              r.userId === e &&
              r.skuId === t &&
              (null == n || r.subscriptionPlanId === n) &&
              !r.isExpired(),
          );
        }
        getIsResolving(e) {
          return m.includes(e);
        }
        getIsResolved(e) {
          return C.includes(e);
        }
        getIsAccepting(e) {
          return I.includes(e);
        }
        getUserGiftCodesFetchingForSKUAndPlan(e, t) {
          return g.has((0, p.Bg)(e, t));
        }
        getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
          return A[(0, p.Bg)(e, t)];
        }
        getResolvingCodes() {
          return m;
        }
        getResolvedCodes() {
          return C;
        }
        getAcceptingCodes() {
          return I;
        }
      }
      (l = "GiftCodeStore"),
        (i = "displayName") in (s = Z)
          ? Object.defineProperty(s, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[i] = l);
      let L = new Z(u.Z, {
        CONNECTION_OPEN: function () {
          return O.clear(), !1;
        },
        CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          return null != t && O.add(t), !1;
        },
        GIFT_CODE_RESOLVE: y,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
          let { giftCode: t } = e;
          return (
            (m = m.filter((e) => e !== t.code)),
            !C.includes(t.code) && (C = [...C, t.code]),
            N(t)
          );
        },
        GIFT_CODE_RESOLVE_FAILURE: function (e) {
          let { code: t } = e;
          (m = m.filter((e) => e !== t)), !C.includes(t) && (C = [...C, t]);
        },
        GIFT_CODE_REDEEM: function (e) {
          let { code: t } = e;
          !I.includes(t) && (I = [...I, t]);
        },
        GIFT_CODE_REDEEM_SUCCESS: function (e) {
          let { code: t } = e;
          I = I.filter((e) => e !== t);
          let n = S.get(t);
          null != n && S.set(t, n.merge({ redeemed: !0, uses: n.uses + 1 }));
        },
        GIFT_CODE_REDEEM_FAILURE: function (e) {
          let { code: t, error: n } = e;
          I = I.filter((e) => e !== t);
          let r = S.get(t);
          if (((R[t] = n), null != r))
            switch (n.code) {
              case h.evJ.UNKNOWN_GIFT_CODE:
                S.set(t, r.set("revoked", !0));
                break;
              case h.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                S.set(t, r.set("uses", r.maxUses));
            }
        },
        GIFT_CODE_REVOKE_SUCCESS: function (e) {
          let { code: t } = e;
          S.delete(t);
          let n = f[t];
          null != n && (n.stop(), delete f[t]),
            !C.includes(t) && (C = [...C, t]);
        },
        GIFT_CODE_CREATE_SUCCESS: function (e) {
          let { giftCode: t } = e;
          N(t);
        },
        GIFT_CODES_FETCH: function (e) {
          let { skuId: t, subscriptionPlanId: n } = e;
          g.add((0, p.Bg)(t, n));
        },
        GIFT_CODES_FETCH_SUCCESS: function (e) {
          let { giftCodes: t, skuId: n, subscriptionPlanId: r } = e;
          t.forEach(N);
          let s = (0, p.Bg)(n, r);
          (A[s] = Date.now()), g.delete(s);
        },
        GIFT_CODES_FETCH_FAILURE: function (e) {
          let { skuId: t, subscriptionPlanId: n } = e;
          g.delete((0, p.Bg)(t, n));
        },
        MESSAGE_CREATE: v,
        MESSAGE_UPDATE: v,
        LOCAL_MESSAGES_LOADED: D,
        LOAD_MESSAGES_SUCCESS: D,
        LOAD_MESSAGES_AROUND_SUCCESS: D,
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
            r = S.get(n);
          null != r && S.set(n, r.set("uses", Math.max(r.uses, t)));
        },
        LOAD_THREADS_SUCCESS: F,
        LOAD_ARCHIVED_THREADS_SUCCESS: F,
        LOAD_FORUM_POSTS: function (e) {
          let { threads: t } = e;
          Object.values(t).map((e) => {
            let { first_message: t } = e;
            return null != t && T(t);
          });
        },
      });
      t.Z = L;
    },
  },
]);
//# sourceMappingURL=da29f3a219b80ba1a176.js.map
