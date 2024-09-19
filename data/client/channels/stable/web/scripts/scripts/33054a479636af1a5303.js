"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86975"],
  {
    533307: function (e, t, n) {
      let i;
      var r = n(544891),
        s = n(570140),
        l = n(728345),
        a = n(812206),
        o = n(625128),
        u = n(335131),
        d = n(669079),
        c = n(981631),
        _ = n(474936);
      async function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        s.Z.dispatch({ type: "GIFT_CODE_RESOLVE", code: e });
        try {
          let i = await (0, d.bT)(e, t, n);
          if (null != i.application_id && i.application_id !== _.CL) {
            let e = a.Z.getApplication(i.application_id);
            if (null == e)
              try {
                await l.Z.fetchApplication(i.application_id);
              } catch (e) {}
          }
          if (i.application_id === c.XAJ)
            try {
              await (0, u.jr)(i.sku_id);
            } catch (e) {}
          return (
            s.Z.dispatch({ type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode: i }),
            { giftCode: i }
          );
        } catch (t) {
          throw (
            (s.Z.dispatch({
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
            s.Z.dispatch({
              type: "GIFT_CODES_FETCH",
              skuId: e,
              subscriptionPlanId: t,
            });
            try {
              let n = await r.tn.get({
                url: c.ANM.USER_GIFT_CODES,
                query: { sku_id: e, subscription_plan_id: t },
                oldFormErrors: !0,
              });
              s.Z.dispatch({
                type: "GIFT_CODES_FETCH_SUCCESS",
                giftCodes: n.body,
                skuId: e,
                subscriptionPlanId: t,
              });
            } catch (n) {
              s.Z.dispatch({
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
            s.Z.dispatch({
              type: "GIFT_CODE_CREATE_START",
              skuId: e,
              subscriptionPlanId: t,
            });
            try {
              let i = await r.tn.post({
                url: c.ANM.USER_GIFT_CODE_CREATE,
                body: { sku_id: e, subscription_plan_id: t, gift_style: n },
                oldFormErrors: !0,
              });
              return (
                s.Z.dispatch({
                  type: "GIFT_CODE_CREATE_SUCCESS",
                  giftCode: i.body,
                }),
                i.body
              );
            } catch (n) {
              s.Z.dispatch({
                type: "GIFT_CODE_CREATE_FAILURE",
                skuId: e,
                subscriptionPlanId: t,
              });
            }
          },
          async revokeGiftCode(e) {
            s.Z.dispatch({ type: "GIFT_CODE_REVOKE", code: e });
            try {
              await r.tn.del({
                url: c.ANM.USER_GIFT_CODE_REVOKE(e),
                oldFormErrors: !0,
              }),
                s.Z.dispatch({ type: "GIFT_CODE_REVOKE_SUCCESS", code: e });
            } catch (t) {
              s.Z.dispatch({ type: "GIFT_CODE_REVOKE_FAILURE", code: e });
            }
          },
          openNativeGiftCodeModal(e) {
            o.Z.openNativeAppModal(e, c.Etm.GIFT_CODE_BROWSER);
          },
          ...i,
        });
    },
    775644: function (e, t, n) {
      var i = n(544891),
        r = n(570140),
        s = n(881052),
        l = n(122289),
        a = n(981631);
      let o = Object.freeze({});
      async function u(e) {
        let { code: t, options: n = o, onRedeemed: u, onError: d } = e,
          { channelId: c = null, paymentSource: _ = null } = n;
        r.Z.dispatch({ type: "GIFT_CODE_REDEEM", code: t });
        try {
          let e = await i.tn.post({
            url: a.ANM.GIFT_CODE_REDEEM(t),
            body: {
              channel_id: c,
              payment_source_id: null == _ ? void 0 : _.id,
              gateway_checkout_context: await (0, l.cn)(_),
            },
            oldFormErrors: !0,
          });
          return (
            r.Z.dispatch({
              type: "GIFT_CODE_REDEEM_SUCCESS",
              code: t,
              entitlement: e.body,
            }),
            null == u || u(),
            { code: t, entitlement: e }
          );
        } catch (n) {
          let e = new s.HF(n);
          throw (
            (r.Z.dispatch({
              type: "GIFT_CODE_REDEEM_FAILURE",
              code: t,
              error: e,
            }),
            null == d || d(e),
            e)
          );
        }
      }
      t.Z = { redeemGiftCode: u };
    },
    792766: function (e, t, n) {
      n.d(t, {
        y: function () {
          return S;
        },
      });
      var i = n(735250),
        r = n(470079),
        s = n(120356),
        l = n.n(s),
        a = n(481060),
        o = n(528144),
        u = n(112831),
        d = n(686546),
        c = n(565138),
        _ = n(601964),
        E = n(598077),
        h = n(689938),
        p = n(325929);
      let f = (e) => {
          var t;
          let { speaker: n, guildId: r, isEmbed: s } = e,
            l = new E.Z(n.user);
          return (0, i.jsxs)("div", {
            className: p.speaker,
            children: [
              (0, i.jsx)(a.Avatar, {
                src: l.getAvatarURL(r, s ? 16 : 24),
                size: s ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                "aria-label": "".concat(n.nick, "-avatar"),
                className: s ? null : p.avatar,
              }),
              (0, i.jsx)(u.Z, {
                size: s ? u.Z.Sizes.SIZE_12 : u.Z.Sizes.SIZE_14,
                color: u.Z.Colors.HEADER_SECONDARY,
                className: p.username,
                children:
                  null !== (t = n.nick) && void 0 !== t ? t : l.username,
              }),
            ],
          });
        },
        S = (e) => {
          let { guild: t, onlineCount: n } = e;
          if (null == t) return null;
          let r = new _.ZP(t),
            { name: s, description: l } = r;
          return (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)(o.Z, {
                muted: !0,
                uppercase: !0,
                className: p.alignStart,
                children: h.Z.Messages.STAGE_INVITE_GUILD_HEADER,
              }),
              (0, i.jsxs)("div", {
                className: p.guild,
                children: [
                  (0, i.jsx)(d.ZP, {
                    mask: d.ZP.Masks.SQUIRCLE,
                    width: 40,
                    height: 40,
                    children: (0, i.jsx)(c.Z, {
                      guild: r,
                      size: c.Z.Sizes.MEDIUM,
                      active: !0,
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: p.guildInfo,
                    children: [
                      (0, i.jsx)(a.Heading, {
                        variant: "heading-sm/semibold",
                        children: s,
                      }),
                      (0, i.jsxs)("div", {
                        className: p.speaker,
                        children: [
                          (0, i.jsx)("div", { className: p.dot }),
                          null != n && n > 0
                            ? (0, i.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                children:
                                  h.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
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
                (0, i.jsx)(a.Text, {
                  color: "header-secondary",
                  className: p.alignStart,
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
            guild: s,
            isCard: E = !1,
            isEmbed: S = !1,
            onClick: m,
          } = e,
          I = r.useMemo(
            () => (null == s ? null : s instanceof _.ZP ? s : new _.ZP(s)),
            [s],
          );
        if (null == n || null == I) return null;
        let { topic: b, speaker_count: g, participant_count: C } = n,
          O = null !== (t = n.members) && void 0 !== t ? t : [],
          A = S ? O.slice(0, 3) : O,
          R = g - A.length;
        return (
          S && (R += O.length - A.length),
          (0, i.jsxs)("div", {
            children: [
              (0, i.jsxs)("div", {
                className: p.flex,
                children: [
                  (0, i.jsxs)("div", {
                    className: p.flex,
                    children: [
                      (0, i.jsx)(a.StageIcon, {
                        size: "custom",
                        color: "currentColor",
                        height: 24,
                        width: 24,
                        className: p.live,
                      }),
                      (0, i.jsx)(a.Heading, {
                        variant: "eyebrow",
                        className: l()(p.__invalid_label, p.live),
                        children: h.Z.Messages.STAGE_CHANNEL_LIVE_NOW,
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: p.background,
                    children: [
                      (0, i.jsx)(a.HeadphonesIcon, {
                        size: "custom",
                        color: "currentColor",
                        height: 16,
                        width: 16,
                        className: p.listeners,
                      }),
                      (0, i.jsx)(a.Heading, {
                        className: l()(p.__invalid_label, p.listeners),
                        variant: "heading-sm/semibold",
                        children: C,
                      }),
                    ],
                  }),
                ],
              }),
              S &&
                (0, i.jsxs)("div", {
                  className: l()(p.guild, { [p.embed]: S }),
                  children: [
                    (0, i.jsx)(d.ZP, {
                      mask: d.ZP.Masks.SQUIRCLE,
                      width: 20,
                      height: 20,
                      children: (0, i.jsx)(c.Z, {
                        guild: I,
                        size: c.Z.Sizes.MINI,
                        active: !0,
                      }),
                    }),
                    (0, i.jsx)(a.Text, {
                      color: "header-secondary",
                      className: p.__invalid_label,
                      variant: "text-sm/normal",
                      children: I.name,
                    }),
                  ],
                }),
              (0, i.jsx)(o.Z, {
                size: E || S ? o.Z.Sizes.SIZE_16 : o.Z.Sizes.SIZE_20,
                className: l()(p.header, { [p.embed]: S }),
                children: b,
              }),
              (0, i.jsxs)("div", {
                className: l()(p.members, { [p.embed]: S }),
                children: [
                  A.length > 0 &&
                    (0, i.jsxs)("div", {
                      className: p.speakers,
                      children: [
                        A.map((e) =>
                          (0, i.jsx)(
                            f,
                            { speaker: e, guildId: I.id, isEmbed: S },
                            e.user.id,
                          ),
                        ),
                        R > 0
                          ? (0, i.jsxs)("div", {
                              className: p.speaker,
                              children: [
                                (0, i.jsx)("div", {
                                  className: l()(p.icon, { [p.embed]: S }),
                                  children: (0, i.jsx)(a.MicrophoneIcon, {
                                    size: "custom",
                                    color: "currentColor",
                                    height: S ? 12 : 14,
                                    className: p.listeners,
                                  }),
                                }),
                                (0, i.jsxs)(u.Z, {
                                  size: S
                                    ? u.Z.Sizes.SIZE_12
                                    : u.Z.Sizes.SIZE_14,
                                  color: u.Z.Colors.HEADER_SECONDARY,
                                  children: [
                                    "+",
                                    h.Z.Messages.STAGE_INVITE_SPEAKER_COUNT.format(
                                      { count: R },
                                    ),
                                  ],
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                  S &&
                    (0, i.jsx)(a.Button, {
                      color: a.Button.Colors.GREEN,
                      onClick: m,
                      className: p.joinButton,
                      children: h.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON,
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
      var i = n(525654),
        r = n.n(i),
        s = n(39612),
        l = n(271579),
        a = n(756647),
        o = n(232567),
        u = n(703656),
        d = n(314897),
        c = n(896797),
        _ = n(626135),
        E = n(954824),
        h = n(981631);
      async function p(e) {
        var t, n;
        let i = null === (t = r().os) || void 0 === t ? void 0 : t.family;
        if ("Android" === i || "iOS" === i) {
          let t =
              null !== (n = d.default.getFingerprint()) && void 0 !== n
                ? n
                : d.default.getId(),
            i = (0, l.WS)();
          if (null == t && d.default.isAuthenticated())
            try {
              await (0, o.k)(), (t = d.default.getId());
            } catch {}
          return (0, l.ZP)((0, s.Gk)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: i,
          });
        }
        return "discord://";
      }
      async function f(e) {
        let t = await p(e),
          n = (0, l.zS)(t);
        null != n &&
          _.default.track(h.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
          }),
          E.Z.launch(t, (e) => {
            !e && (0, u.dL)(c.Z.fallbackRoute);
          });
      }
    },
    144114: function (e, t, n) {
      n.d(t, {
        L: function () {
          return r;
        },
      });
      var i,
        r,
        s = n(990547),
        l = n(544891),
        a = n(570140),
        o = n(314897),
        u = n(573261),
        d = n(815660),
        c = n(981631);
      ((i = r || (r = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (i.USER_SETTINGS_UPDATE = "user_settings_update"),
        (i.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (i.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (i.CONTACT_SYNC = "contact_sync"),
        (t.Z = {
          setCountryCode(e) {
            a.Z.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: e });
          },
          removePhone: (e, t) =>
            l.tn.del({
              url: c.ANM.PHONE,
              body: { password: e, change_phone_reason: t },
              oldFormErrors: !0,
            }),
          resendCode(e) {
            let t = {},
              n = o.default.getFingerprint();
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
              r = {},
              l = o.default.getFingerprint();
            null != l && "" !== l && (r["X-Fingerprint"] = l),
              i && (r.authorization = "");
            let _ = await u.Z.post({
              url: c.ANM.VERIFY_PHONE,
              headers: r,
              body: { phone: e, code: t },
              oldFormErrors: !0,
              trackedActionData: {
                event: s.NetworkActionNames.USER_VERIFY_PHONE,
              },
            });
            return n && a.Z.dispatch({ type: "MODAL_POP", key: d.M }), _.body;
          },
        });
    },
    815660: function (e, t, n) {
      n.d(t, {
        M: function () {
          return i;
        },
        z: function () {
          return r;
        },
      });
      let i = "PHONE_VERIFICATION_MODAL_KEY",
        r = 6;
    },
    219496: function (e, t, n) {
      var i, r;
      n.d(t, {
        K: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).AVAILABLE = "AVAILABLE"),
        (r.ERROR = "ERROR"),
        (r.RATE_LIMIT = "RATE_LIMIT"),
        (r.INTERNAL_ERROR = "INTERNAL_ERROR");
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
          return b;
        },
        zV: function () {
          return _;
        },
      }),
        n(757143),
        n(47120),
        n(627341);
      var i = n(913527),
        r = n.n(i),
        s = n(278074),
        l = n(768581),
        a = n(709054),
        o = n(624138),
        u = n(219496),
        d = n(801461),
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
        let t = (0, o._I)(e.username)
          .replace(d.RN, "")
          .replace(d.iF, ".")
          .toLowerCase();
        return "".concat(t).concat(e.discriminator).substring(0, 32);
      }
      let h = ["@", "#", ":"],
        p = [
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
        let i = e.username.toLowerCase();
        if (
          ((t = i),
          (n = d.kt),
          t
            .split("")
            .filter((e) => !n.includes(e.charCodeAt(0)))
            .join("")).length < 2
        )
          return !0;
        for (let e of h) if (i.includes(e)) return !0;
        for (let e of f) if (i === e.toLowerCase()) return !0;
        for (let e of p) if (i.includes(e.toLowerCase())) return !0;
        return !1;
      }
      function m(e) {
        return e.toLowerCase().replace(/\s/g, "").replace("@", "");
      }
      function I(e) {
        let t = a.default.extractTimestamp(e);
        try {
          return r()(new Date(t)).format("MMM DD, YYYY");
        } catch (e) {}
        return null;
      }
      function b(e) {
        return (0, s.EQ)(e)
          .with({ rateLimited: !0 }, () => ({
            type: u.K.RATE_LIMIT,
            message:
              c.Z.Messages
                .APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT,
          }))
          .with({ error: s.P.not(s.P.nullish) }, (e) => {
            let { error: t } = e;
            return { type: u.K.ERROR, message: t };
          })
          .with({ taken: !1 }, () => ({
            type: u.K.AVAILABLE,
            message: c.Z.Messages.POMELO_EXISTING_FLOW_AVAILABLE,
          }))
          .with({ taken: !0 }, () => ({
            type: u.K.ERROR,
            message: c.Z.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE,
          }))
          .with({ error: s.P.nullish }, () => ({
            type: u.K.INTERNAL_ERROR,
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
    981632: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(47120),
        n(411104);
      var i = n(735250),
        r = n(470079),
        s = n(442837),
        l = n(481060),
        a = n(607070),
        o = n(409302),
        u = n(474936);
      function d(e) {
        let {
            giftStyle: t,
            className: n,
            shouldAnimate: d = !0,
            defaultAnimationState: c,
            idleAnimationState: _,
          } = e,
          E = (0, s.e7)([a.Z], () => a.Z.useReducedMotion),
          [h, p] = r.useState(c),
          f = r.useRef((0, o._)(t, h)),
          [S, m] = r.useState(null == _),
          [I, b] = r.useState(!1),
          [g, C] = r.useState(-1),
          O = () => {
            (f.current = (0, o._)(t, h)), C((e) => e + 1);
          },
          A = () => {
            m(!1), b(!0), C(-1), p(c);
          };
        r.useEffect(() => {
          null == _ && p(c);
        }, [_, c]),
          r.useEffect(() => {
            if (null != _ && g >= 0) {
              A();
              return;
            }
            O();
          }, [t, _]),
          r.useEffect(() => {
            (!I || null == _) && O();
          }, [h]),
          r.useEffect(() => {
            I && (m(null == _), b(!1), O());
          }, [I]);
        if (!u.Cj.hasOwnProperty(t))
          throw Error("Unexpected giftStyle ".concat(t));
        return (0, i.jsx)(l.LottieAnimation, {
          importData: f.current,
          shouldAnimate: !E && d,
          className: n,
          versionKey: g,
          onComplete:
            null != _
              ? () => {
                  null != _ && (p(_), m(!0));
                }
              : void 0,
          loop: S,
        });
      }
    },
    409302: function (e, t, n) {
      n.d(t, {
        _: function () {
          return s;
        },
      });
      var i = n(479446),
        r = n(474936);
      let s = (e, t) => {
        let s;
        switch (e) {
          case r.Cj.SNOWGLOBE:
            s = () =>
              n
                .e("20268")
                .then(n.t.bind(n, 22952, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case r.Cj.BOX:
            s = () =>
              n
                .e("37372")
                .then(n.t.bind(n, 459274, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case r.Cj.CUP:
            s = () =>
              n
                .e("37066")
                .then(n.t.bind(n, 990632, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case r.Cj.STANDARD_BOX:
            switch (t) {
              case i.SR.IDLE:
                s = () =>
                  n
                    .e("60592")
                    .then(n.t.bind(n, 433166, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                s = () =>
                  n
                    .e("81358")
                    .then(n.t.bind(n, 145894, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                s = () =>
                  n
                    .e("46468")
                    .then(n.t.bind(n, 70303, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.CAKE:
            switch (t) {
              case i.SR.IDLE:
                s = () =>
                  n
                    .e("5996")
                    .then(n.t.bind(n, 889601, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                s = () =>
                  n
                    .e("71378")
                    .then(n.t.bind(n, 445637, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                s = () =>
                  n
                    .e("69806")
                    .then(n.t.bind(n, 549883, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.CHEST:
            switch (t) {
              case i.SR.IDLE:
                s = () =>
                  n
                    .e("38506")
                    .then(n.t.bind(n, 449445, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                s = () =>
                  n
                    .e("31085")
                    .then(n.t.bind(n, 837312, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                s = () =>
                  n
                    .e("40331")
                    .then(n.t.bind(n, 669711, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.COFFEE:
            switch (t) {
              case i.SR.IDLE:
                s = () =>
                  n
                    .e("23847")
                    .then(n.t.bind(n, 98860, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                s = () =>
                  n
                    .e("93554")
                    .then(n.t.bind(n, 732573, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                s = () =>
                  n
                    .e("71244")
                    .then(n.t.bind(n, 398161, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.SEASONAL_STANDARD_BOX:
            switch (t) {
              case i.SR.IDLE:
                s = () =>
                  n
                    .e("20196")
                    .then(n.t.bind(n, 862977, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                s = () =>
                  n
                    .e("58903")
                    .then(n.t.bind(n, 883984, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                s = () =>
                  n
                    .e("62065")
                    .then(n.t.bind(n, 402483, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.SEASONAL_CAKE:
            switch (t) {
              case i.SR.IDLE:
                s = () =>
                  n
                    .e("22101")
                    .then(n.t.bind(n, 953256, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                s = () =>
                  n
                    .e("63007")
                    .then(n.t.bind(n, 320152, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                s = () =>
                  n
                    .e("68822")
                    .then(n.t.bind(n, 721670, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.SEASONAL_CHEST:
            switch (t) {
              case i.SR.IDLE:
                s = () =>
                  n
                    .e("97674")
                    .then(n.t.bind(n, 897198, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                s = () =>
                  n
                    .e("37357")
                    .then(n.t.bind(n, 967705, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                s = () =>
                  n
                    .e("72637")
                    .then(n.t.bind(n, 209128, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.SEASONAL_COFFEE:
            switch (t) {
              case i.SR.IDLE:
                s = () =>
                  n
                    .e("83646")
                    .then(n.t.bind(n, 804732, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                s = () =>
                  n
                    .e("92695")
                    .then(n.t.bind(n, 702411, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                s = () =>
                  n
                    .e("12112")
                    .then(n.t.bind(n, 335878, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          default:
            s = () => Promise.resolve("Error: Invalid giftStyle");
        }
        return s;
      };
    },
    108427: function (e, t, n) {
      n.d(t, {
        e: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(772848),
        r = n(579806),
        s = n(626135),
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
            s.default.track(e, {
              ...(function () {
                var e, t, n;
                let i = "--campaign-id=";
                for (let s of null !==
                  (n =
                    null === r.Z || void 0 === r.Z
                      ? void 0
                      : null === (t = r.Z.processUtils) || void 0 === t
                        ? void 0
                        : null === (e = t.getMainArgvSync) || void 0 === e
                          ? void 0
                          : e.call(t)) && void 0 !== n
                  ? n
                  : [])
                  if (s.startsWith(i)) return { referrer: s.substr(i.length) };
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
                        r =
                          null != n.decodedBodySize
                            ? n.decodedBodySize
                            : n.encodedBodySize,
                        s = n.transferSize;
                      null != r &&
                        null != i &&
                        ((e = !0),
                        (t.total_compressed_byte_size += i),
                        (t.total_uncompressed_byte_size += r),
                        null != s && (t.total_uncompressed_byte_size += s),
                        "resource" === n.entryType &&
                          ("script" === n.initiatorType &&
                            null != n.name &&
                            null != n.name.match(/\.js/) &&
                            ((t.js_compressed_byte_size += i),
                            (t.js_uncompressed_byte_size += r),
                            null != s && (t.js_uncompressed_byte_size += s)),
                          "link" === n.initiatorType &&
                            null != n.name &&
                            null != n.name.match(/\.css/) &&
                            ((t.css_compressed_byte_size += i),
                            (t.css_uncompressed_byte_size += r),
                            null != s && (t.css_uncompressed_byte_size += s))));
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
          a(this, "loadId", (0, i.Z)()), a(this, "appUIViewed", !1);
        }
      })();
      function u(e) {
        o.trackAppUIViewed(e);
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
        r = n.n(i),
        s = n(81825),
        l = n(630388),
        a = n(301766),
        o = n(474936);
      function u(e, t, n) {
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
      let d = Object.freeze({
        PAYMENT_SOURCE_REQUIRED: 1,
        EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
        NOT_SELF_REDEEMABLE: 4,
      });
      class c extends s.Z {
        static createFromServer(e) {
          return new c({
            userId: null != e.user ? e.user.id : null,
            code: e.code,
            skuId: e.sku_id,
            applicationId: e.application_id,
            uses: e.uses,
            maxUses: e.max_uses,
            storeListingId: null != e.store_listing ? e.store_listing.id : null,
            expiresAt: null != e.expires_at ? r()(e.expires_at) : null,
            redeemed: e.redeemed,
            subscriptionPlanId:
              null != e.subscription_plan
                ? e.subscription_plan.id
                : e.subscription_plan_id,
            subscriptionPlan:
              null != e.subscription_plan
                ? a.ZP.createFromServer(e.subscription_plan)
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
          return null != e && r()().isAfter(e);
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
          return (this.isSubscription && o.y7[this.skuId]) || null;
        }
        get isSelfRedeemable() {
          return !(0, l.yE)(this.flags, d.NOT_SELF_REDEEMABLE);
        }
        get isExistingPremiumSubscriptionDisallowed() {
          return (0, l.yE)(
            this.flags,
            d.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED,
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
            u(this, "userId", void 0),
            u(this, "code", void 0),
            u(this, "skuId", void 0),
            u(this, "applicationId", void 0),
            u(this, "uses", void 0),
            u(this, "maxUses", void 0),
            u(this, "expiresAt", void 0),
            u(this, "redeemed", void 0),
            u(this, "storeListingId", void 0),
            u(this, "subscriptionPlanId", void 0),
            u(this, "subscriptionPlan", void 0),
            u(this, "revoked", void 0),
            u(this, "entitlementBranches", void 0),
            u(this, "flags", void 0),
            u(this, "subscriptionTrial", void 0),
            u(this, "promotion", void 0),
            u(this, "giftStyle", void 0),
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
        r,
        s,
        l,
        a = n(913527),
        o = n.n(a),
        u = n(442837),
        d = n(846519),
        c = n(570140),
        _ = n(533307),
        E = n(590783),
        h = n(669079),
        p = n(981631);
      let f = {},
        S = new Map(),
        m = [],
        I = [],
        b = [],
        g = new Set(),
        C = {},
        O = {},
        A = new Set();
      function R(e) {
        let t = E.Z.createFromServer(e),
          n = t.code;
        if (S.has(n)) S.set(n, S.get(n).merge(t));
        else if ((S.set(n, t), null != t.expiresAt)) {
          let e = new d.V7();
          (f[n] = e),
            (function e(t) {
              let n = S.get(t);
              if (null == n || null == n.expiresAt) return;
              let i = n.expiresAt.valueOf() - o()().valueOf();
              if (i <= 0) S.delete(t), delete f[t], F.emitChange();
              else {
                let n = f[t];
                if (null == n) return;
                n.start(Math.min(2147483647, i), () => e(t));
              }
            })(n);
        }
      }
      function v(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t && !A.has(e.channel_id)) return !1;
        let n = (0, h.Fp)(e)
          ? (0, h.Q_)(
              (null == e ? void 0 : e.embeds) != null
                ? null == e
                  ? void 0
                  : e.embeds[0].url
                : void 0,
            )
          : (0, h.Q_)(e.content);
        return (
          0 !== n.length &&
          (n.forEach((e) => {
            !m.includes(e) &&
              !b.includes(e) &&
              (N({ code: e }),
              c.Z.wait(() => _.Z.resolveGiftCode(e, !1, !0).catch(p.VqG)));
          }),
          !1)
        );
      }
      function N(e) {
        let { code: t } = e;
        !m.includes(t) && (m = [...m, t]);
      }
      function T(e) {
        let { message: t } = e;
        return v(t, !0);
      }
      function y(e) {
        let { channelId: t, messages: n } = e;
        A.add(t), n.forEach((e) => v(e, !0));
      }
      function L(e) {
        let { firstMessages: t } = e;
        if (null == t) return !1;
        null == t || t.forEach((e) => v(e));
      }
      class D extends (i = u.ZP.Store) {
        get(e) {
          let t = S.get(e);
          return null == t || t.isExpired() ? null : t;
        }
        getError(e) {
          return null != e ? O[e] : null;
        }
        getForGifterSKUAndPlan(e, t, n) {
          return Array.from(S.values()).filter(
            (i) =>
              i.userId === e &&
              i.skuId === t &&
              (null == n || i.subscriptionPlanId === n) &&
              !i.isExpired(),
          );
        }
        getIsResolving(e) {
          return m.includes(e);
        }
        getIsResolved(e) {
          return b.includes(e);
        }
        getIsAccepting(e) {
          return I.includes(e);
        }
        getUserGiftCodesFetchingForSKUAndPlan(e, t) {
          return g.has((0, h.Bg)(e, t));
        }
        getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
          return C[(0, h.Bg)(e, t)];
        }
        getResolvingCodes() {
          return m;
        }
        getResolvedCodes() {
          return b;
        }
        getAcceptingCodes() {
          return I;
        }
      }
      (l = "GiftCodeStore"),
        (s = "displayName") in (r = D)
          ? Object.defineProperty(r, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[s] = l);
      let F = new D(c.Z, {
        CONNECTION_OPEN: function () {
          return A.clear(), !1;
        },
        CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          return null != t && A.add(t), !1;
        },
        GIFT_CODE_RESOLVE: N,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
          let { giftCode: t } = e;
          return (
            (m = m.filter((e) => e !== t.code)),
            !b.includes(t.code) && (b = [...b, t.code]),
            R(t)
          );
        },
        GIFT_CODE_RESOLVE_FAILURE: function (e) {
          let { code: t } = e;
          (m = m.filter((e) => e !== t)), !b.includes(t) && (b = [...b, t]);
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
          let i = S.get(t);
          if (((O[t] = n), null != i))
            switch (n.code) {
              case p.evJ.UNKNOWN_GIFT_CODE:
                S.set(t, i.set("revoked", !0));
                break;
              case p.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                S.set(t, i.set("uses", i.maxUses));
            }
        },
        GIFT_CODE_REVOKE_SUCCESS: function (e) {
          let { code: t } = e;
          S.delete(t);
          let n = f[t];
          null != n && (n.stop(), delete f[t]),
            !b.includes(t) && (b = [...b, t]);
        },
        GIFT_CODE_CREATE_SUCCESS: function (e) {
          let { giftCode: t } = e;
          R(t);
        },
        GIFT_CODES_FETCH: function (e) {
          let { skuId: t, subscriptionPlanId: n } = e;
          g.add((0, h.Bg)(t, n));
        },
        GIFT_CODES_FETCH_SUCCESS: function (e) {
          let { giftCodes: t, skuId: n, subscriptionPlanId: i } = e;
          t.forEach(R);
          let r = (0, h.Bg)(n, i);
          (C[r] = Date.now()), g.delete(r);
        },
        GIFT_CODES_FETCH_FAILURE: function (e) {
          let { skuId: t, subscriptionPlanId: n } = e;
          g.delete((0, h.Bg)(t, n));
        },
        MESSAGE_CREATE: T,
        MESSAGE_UPDATE: T,
        LOCAL_MESSAGES_LOADED: y,
        LOAD_MESSAGES_SUCCESS: y,
        LOAD_MESSAGES_AROUND_SUCCESS: y,
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
          let { messages: t } = e;
          t.forEach((e) => v(e));
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
          let { messages: t } = e;
          t.forEach((e) => v(e));
        },
        SEARCH_FINISH: function (e) {
          e.messages.forEach((e) => {
            e.forEach((e) => v(e));
          });
        },
        GIFT_CODE_UPDATE: function (e) {
          let { uses: t, code: n } = e,
            i = S.get(n);
          null != i && S.set(n, i.set("uses", Math.max(i.uses, t)));
        },
        LOAD_THREADS_SUCCESS: L,
        LOAD_ARCHIVED_THREADS_SUCCESS: L,
        LOAD_FORUM_POSTS: function (e) {
          let { threads: t } = e;
          Object.values(t).map((e) => {
            let { first_message: t } = e;
            return null != t && v(t);
          });
        },
      });
      t.Z = F;
    },
  },
]);
//# sourceMappingURL=33054a479636af1a5303.js.map
