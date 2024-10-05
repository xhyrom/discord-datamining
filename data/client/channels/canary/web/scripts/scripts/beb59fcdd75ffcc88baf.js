"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88390"],
  {
    533307: function (e, t, n) {
      let s;
      var i = n(544891),
        l = n(570140),
        r = n(728345),
        a = n(812206),
        c = n(625128),
        o = n(335131),
        E = n(669079),
        u = n(981631),
        d = n(474936);
      async function _(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        l.Z.dispatch({ type: "GIFT_CODE_RESOLVE", code: e });
        try {
          let s = await (0, E.bT)(e, t, n);
          if (null != s.application_id && s.application_id !== d.CL) {
            let e = a.Z.getApplication(s.application_id);
            if (null == e)
              try {
                await r.ZP.fetchApplication(s.application_id);
              } catch (e) {}
          }
          if (s.application_id === u.XAJ)
            try {
              await (0, o.jr)(s.sku_id);
            } catch (e) {}
          return (
            l.Z.dispatch({ type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode: s }),
            { giftCode: s }
          );
        } catch (t) {
          throw (
            (l.Z.dispatch({
              type: "GIFT_CODE_RESOLVE_FAILURE",
              code: e,
              error: t,
            }),
            t)
          );
        }
      }
      (s = n(775644).Z),
        (t.Z = {
          resolveGiftCode: _,
          async fetchUserGiftCodesForSKU(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            l.Z.dispatch({
              type: "GIFT_CODES_FETCH",
              skuId: e,
              subscriptionPlanId: t,
            });
            try {
              let n = await i.tn.get({
                url: u.ANM.USER_GIFT_CODES,
                query: { sku_id: e, subscription_plan_id: t },
                oldFormErrors: !0,
              });
              l.Z.dispatch({
                type: "GIFT_CODES_FETCH_SUCCESS",
                giftCodes: n.body,
                skuId: e,
                subscriptionPlanId: t,
              });
            } catch (n) {
              l.Z.dispatch({
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
            l.Z.dispatch({
              type: "GIFT_CODE_CREATE_START",
              skuId: e,
              subscriptionPlanId: t,
            });
            try {
              let s = await i.tn.post({
                url: u.ANM.USER_GIFT_CODE_CREATE,
                body: { sku_id: e, subscription_plan_id: t, gift_style: n },
                oldFormErrors: !0,
              });
              return (
                l.Z.dispatch({
                  type: "GIFT_CODE_CREATE_SUCCESS",
                  giftCode: s.body,
                }),
                s.body
              );
            } catch (n) {
              l.Z.dispatch({
                type: "GIFT_CODE_CREATE_FAILURE",
                skuId: e,
                subscriptionPlanId: t,
              });
            }
          },
          async revokeGiftCode(e) {
            l.Z.dispatch({ type: "GIFT_CODE_REVOKE", code: e });
            try {
              await i.tn.del({
                url: u.ANM.USER_GIFT_CODE_REVOKE(e),
                oldFormErrors: !0,
              }),
                l.Z.dispatch({ type: "GIFT_CODE_REVOKE_SUCCESS", code: e });
            } catch (t) {
              l.Z.dispatch({ type: "GIFT_CODE_REVOKE_FAILURE", code: e });
            }
          },
          openNativeGiftCodeModal(e) {
            c.Z.openNativeAppModal(e, u.Etm.GIFT_CODE_BROWSER);
          },
          ...s,
        });
    },
    775644: function (e, t, n) {
      var s = n(544891),
        i = n(570140),
        l = n(881052),
        r = n(122289),
        a = n(981631);
      let c = Object.freeze({});
      async function o(e) {
        let { code: t, options: n = c, onRedeemed: o, onError: E } = e,
          { channelId: u = null, paymentSource: d = null } = n;
        i.Z.dispatch({ type: "GIFT_CODE_REDEEM", code: t });
        try {
          let e = await s.tn.post({
            url: a.ANM.GIFT_CODE_REDEEM(t),
            body: {
              channel_id: u,
              payment_source_id: null == d ? void 0 : d.id,
              gateway_checkout_context: await (0, r.cn)(d),
            },
            oldFormErrors: !0,
          });
          return (
            i.Z.dispatch({
              type: "GIFT_CODE_REDEEM_SUCCESS",
              code: t,
              entitlement: e.body,
            }),
            null == o || o(),
            { code: t, entitlement: e }
          );
        } catch (n) {
          let e = new l.HF(n);
          throw (
            (i.Z.dispatch({
              type: "GIFT_CODE_REDEEM_FAILURE",
              code: t,
              error: e,
            }),
            null == E || E(e),
            e)
          );
        }
      }
      t.Z = { redeemGiftCode: o };
    },
    792766: function (e, t, n) {
      n.d(t, {
        y: function () {
          return f;
        },
      });
      var s = n(735250),
        i = n(470079),
        l = n(120356),
        r = n.n(l),
        a = n(481060),
        c = n(528144),
        o = n(112831),
        E = n(686546),
        u = n(565138),
        d = n(601964),
        _ = n(598077),
        S = n(689938),
        h = n(325929);
      let C = (e) => {
          var t;
          let { speaker: n, guildId: i, isEmbed: l } = e,
            r = new _.Z(n.user);
          return (0, s.jsxs)("div", {
            className: h.speaker,
            children: [
              (0, s.jsx)(a.Avatar, {
                src: r.getAvatarURL(i, l ? 16 : 24),
                size: l ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                "aria-label": "".concat(n.nick, "-avatar"),
                className: l ? null : h.avatar,
              }),
              (0, s.jsx)(o.Z, {
                size: l ? o.Z.Sizes.SIZE_12 : o.Z.Sizes.SIZE_14,
                color: o.Z.Colors.HEADER_SECONDARY,
                className: h.username,
                children:
                  null !== (t = n.nick) && void 0 !== t ? t : r.username,
              }),
            ],
          });
        },
        f = (e) => {
          let { guild: t, onlineCount: n } = e;
          if (null == t) return null;
          let i = new d.ZP(t),
            { name: l, description: r } = i;
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsx)(c.Z, {
                muted: !0,
                uppercase: !0,
                className: h.alignStart,
                children: S.Z.Messages.STAGE_INVITE_GUILD_HEADER,
              }),
              (0, s.jsxs)("div", {
                className: h.guild,
                children: [
                  (0, s.jsx)(E.ZP, {
                    mask: E.ZP.Masks.SQUIRCLE,
                    width: 40,
                    height: 40,
                    children: (0, s.jsx)(u.Z, {
                      guild: i,
                      size: u.Z.Sizes.MEDIUM,
                      active: !0,
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: h.guildInfo,
                    children: [
                      (0, s.jsx)(a.Heading, {
                        variant: "heading-sm/semibold",
                        children: l,
                      }),
                      (0, s.jsxs)("div", {
                        className: h.speaker,
                        children: [
                          (0, s.jsx)("div", { className: h.dot }),
                          null != n && n > 0
                            ? (0, s.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                children:
                                  S.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
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
              null != r &&
                "" !== r &&
                (0, s.jsx)(a.Text, {
                  color: "header-secondary",
                  className: h.alignStart,
                  variant: "text-sm/normal",
                  children: r,
                }),
            ],
          });
        };
      t.Z = (e) => {
        var t;
        let {
            stageInstance: n,
            guild: l,
            isCard: _ = !1,
            isEmbed: f = !1,
            onClick: I,
          } = e,
          m = i.useMemo(
            () => (null == l ? null : l instanceof d.ZP ? l : new d.ZP(l)),
            [l],
          );
        if (null == n || null == m) return null;
        let { topic: A, speaker_count: p, participant_count: R } = n,
          g = null !== (t = n.members) && void 0 !== t ? t : [],
          O = f ? g.slice(0, 3) : g,
          T = p - O.length;
        return (
          f && (T += g.length - O.length),
          (0, s.jsxs)("div", {
            children: [
              (0, s.jsxs)("div", {
                className: h.flex,
                children: [
                  (0, s.jsxs)("div", {
                    className: h.flex,
                    children: [
                      (0, s.jsx)(a.StageIcon, {
                        size: "custom",
                        color: "currentColor",
                        height: 24,
                        width: 24,
                        className: h.live,
                      }),
                      (0, s.jsx)(a.Heading, {
                        variant: "eyebrow",
                        className: r()(h.__invalid_label, h.live),
                        children: S.Z.Messages.STAGE_CHANNEL_LIVE_NOW,
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: h.background,
                    children: [
                      (0, s.jsx)(a.HeadphonesIcon, {
                        size: "custom",
                        color: "currentColor",
                        height: 16,
                        width: 16,
                        className: h.listeners,
                      }),
                      (0, s.jsx)(a.Heading, {
                        className: r()(h.__invalid_label, h.listeners),
                        variant: "heading-sm/semibold",
                        children: R,
                      }),
                    ],
                  }),
                ],
              }),
              f &&
                (0, s.jsxs)("div", {
                  className: r()(h.guild, { [h.embed]: f }),
                  children: [
                    (0, s.jsx)(E.ZP, {
                      mask: E.ZP.Masks.SQUIRCLE,
                      width: 20,
                      height: 20,
                      children: (0, s.jsx)(u.Z, {
                        guild: m,
                        size: u.Z.Sizes.MINI,
                        active: !0,
                      }),
                    }),
                    (0, s.jsx)(a.Text, {
                      color: "header-secondary",
                      className: h.__invalid_label,
                      variant: "text-sm/normal",
                      children: m.name,
                    }),
                  ],
                }),
              (0, s.jsx)(c.Z, {
                size: _ || f ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_20,
                className: r()(h.header, { [h.embed]: f }),
                children: A,
              }),
              (0, s.jsxs)("div", {
                className: r()(h.members, { [h.embed]: f }),
                children: [
                  O.length > 0 &&
                    (0, s.jsxs)("div", {
                      className: h.speakers,
                      children: [
                        O.map((e) =>
                          (0, s.jsx)(
                            C,
                            { speaker: e, guildId: m.id, isEmbed: f },
                            e.user.id,
                          ),
                        ),
                        T > 0
                          ? (0, s.jsxs)("div", {
                              className: h.speaker,
                              children: [
                                (0, s.jsx)("div", {
                                  className: r()(h.icon, { [h.embed]: f }),
                                  children: (0, s.jsx)(a.MicrophoneIcon, {
                                    size: "custom",
                                    color: "currentColor",
                                    height: f ? 12 : 14,
                                    className: h.listeners,
                                  }),
                                }),
                                (0, s.jsxs)(o.Z, {
                                  size: f
                                    ? o.Z.Sizes.SIZE_12
                                    : o.Z.Sizes.SIZE_14,
                                  color: o.Z.Colors.HEADER_SECONDARY,
                                  children: [
                                    "+",
                                    S.Z.Messages.STAGE_INVITE_SPEAKER_COUNT.format(
                                      { count: T },
                                    ),
                                  ],
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                  f &&
                    (0, s.jsx)(a.Button, {
                      color: a.Button.Colors.GREEN,
                      onClick: I,
                      className: h.joinButton,
                      children: S.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON,
                    }),
                ],
              }),
            ],
          })
        );
      };
    },
    219496: function (e, t, n) {
      var s, i;
      n.d(t, {
        K: function () {
          return s;
        },
      }),
        ((i = s || (s = {})).AVAILABLE = "AVAILABLE"),
        (i.ERROR = "ERROR"),
        (i.RATE_LIMIT = "RATE_LIMIT"),
        (i.INTERNAL_ERROR = "INTERNAL_ERROR");
    },
    346585: function (e, t, n) {
      n.d(t, {
        IE: function () {
          return p;
        },
        K9: function () {
          return m;
        },
        NX: function () {
          return f;
        },
        R_: function () {
          return I;
        },
        e$: function () {
          return _;
        },
        ti: function () {
          return A;
        },
        zV: function () {
          return d;
        },
      }),
        n(757143),
        n(47120),
        n(627341);
      var s = n(913527),
        i = n.n(s),
        l = n(278074),
        r = n(768581),
        a = n(709054),
        c = n(624138),
        o = n(219496),
        E = n(801461),
        u = n(689938);
      function d(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return r.ZP.getUserAvatarURL(
          { id: e.id, avatar: e.avatar, bot: e.bot, discriminator: "0000" },
          t,
          80,
        );
      }
      function _(e) {
        let t = (0, c._I)(e.username)
          .replace(E.RN, "")
          .replace(E.iF, ".")
          .toLowerCase();
        return "".concat(t).concat(e.discriminator).substring(0, 32);
      }
      let S = ["@", "#", ":"],
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
        C = [
          "discordtag",
          "everyone",
          "here",
          "discord nitro",
          "discord",
          "snowsgiving",
        ];
      function f(e) {
        var t, n;
        let s = e.username.toLowerCase();
        if (
          ((t = s),
          (n = E.kt),
          t
            .split("")
            .filter((e) => !n.includes(e.charCodeAt(0)))
            .join("")).length < 2
        )
          return !0;
        for (let e of S) if (s.includes(e)) return !0;
        for (let e of C) if (s === e.toLowerCase()) return !0;
        for (let e of h) if (s.includes(e.toLowerCase())) return !0;
        return !1;
      }
      function I(e) {
        return e.toLowerCase().replace(/\s/g, "").replace("@", "");
      }
      function m(e) {
        let t = a.default.extractTimestamp(e);
        try {
          return i()(new Date(t)).format("MMM DD, YYYY");
        } catch (e) {}
        return null;
      }
      function A(e) {
        return (0, l.EQ)(e)
          .with({ rateLimited: !0 }, () => ({
            type: o.K.RATE_LIMIT,
            message:
              u.Z.Messages
                .APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT,
          }))
          .with({ error: l.P.not(l.P.nullish) }, (e) => {
            let { error: t } = e;
            return { type: o.K.ERROR, message: t };
          })
          .with({ taken: !1 }, () => ({
            type: o.K.AVAILABLE,
            message: u.Z.Messages.POMELO_EXISTING_FLOW_AVAILABLE,
          }))
          .with({ taken: !0 }, () => ({
            type: o.K.ERROR,
            message: u.Z.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE,
          }))
          .with({ error: l.P.nullish }, () => ({
            type: o.K.INTERNAL_ERROR,
            message: "",
          }))
          .otherwise(() => void 0);
      }
      function p(e) {
        return new Date(2024, 2, 4).toLocaleDateString(e, {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      }
    },
    82142: function (e, t, n) {
      n(47120);
      var s,
        i,
        l,
        r,
        a = n(913527),
        c = n.n(a),
        o = n(442837),
        E = n(846519),
        u = n(570140),
        d = n(533307),
        _ = n(590783),
        S = n(669079),
        h = n(981631);
      let C = {},
        f = new Map(),
        I = [],
        m = [],
        A = [],
        p = new Set(),
        R = {},
        g = {},
        O = new Set();
      function T(e) {
        let t = _.Z.createFromServer(e),
          n = t.code;
        if (f.has(n)) f.set(n, f.get(n).merge(t));
        else if ((f.set(n, t), null != t.expiresAt)) {
          let e = new E.V7();
          (C[n] = e),
            (function e(t) {
              let n = f.get(t);
              if (null == n || null == n.expiresAt) return;
              let s = n.expiresAt.valueOf() - c()().valueOf();
              if (s <= 0) f.delete(t), delete C[t], G.emitChange();
              else {
                let n = C[t];
                if (null == n) return;
                n.start(Math.min(2147483647, s), () => e(t));
              }
            })(n);
        }
      }
      function N(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t && !O.has(e.channel_id)) return !1;
        let n = (0, S.Fp)(e)
          ? (0, S.Q_)(
              (null == e ? void 0 : e.embeds) != null
                ? null == e
                  ? void 0
                  : e.embeds[0].url
                : void 0,
            )
          : (0, S.Q_)(e.content);
        return (
          0 !== n.length &&
          (n.forEach((e) => {
            !I.includes(e) &&
              !A.includes(e) &&
              (v({ code: e }),
              u.Z.wait(() => d.Z.resolveGiftCode(e, !1, !0).catch(h.VqG)));
          }),
          !1)
        );
      }
      function v(e) {
        let { code: t } = e;
        !I.includes(t) && (I = [...I, t]);
      }
      function D(e) {
        let { message: t } = e;
        return N(t, !0);
      }
      function L(e) {
        let { channelId: t, messages: n } = e;
        O.add(t), n.forEach((e) => N(e, !0));
      }
      function Z(e) {
        let { firstMessages: t } = e;
        if (null == t) return !1;
        null == t || t.forEach((e) => N(e));
      }
      class F extends (s = o.ZP.Store) {
        get(e) {
          let t = f.get(e);
          return null == t || t.isExpired() ? null : t;
        }
        getError(e) {
          return null != e ? g[e] : null;
        }
        getForGifterSKUAndPlan(e, t, n) {
          return Array.from(f.values()).filter(
            (s) =>
              s.userId === e &&
              s.skuId === t &&
              (null == n || s.subscriptionPlanId === n) &&
              !s.isExpired(),
          );
        }
        getIsResolving(e) {
          return I.includes(e);
        }
        getIsResolved(e) {
          return A.includes(e);
        }
        getIsAccepting(e) {
          return m.includes(e);
        }
        getUserGiftCodesFetchingForSKUAndPlan(e, t) {
          return p.has((0, S.Bg)(e, t));
        }
        getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
          return R[(0, S.Bg)(e, t)];
        }
        getResolvingCodes() {
          return I;
        }
        getResolvedCodes() {
          return A;
        }
        getAcceptingCodes() {
          return m;
        }
      }
      (r = "GiftCodeStore"),
        (l = "displayName") in (i = F)
          ? Object.defineProperty(i, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = r);
      let G = new F(u.Z, {
        CONNECTION_OPEN: function () {
          return O.clear(), !1;
        },
        CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          return null != t && O.add(t), !1;
        },
        GIFT_CODE_RESOLVE: v,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
          let { giftCode: t } = e;
          return (
            (I = I.filter((e) => e !== t.code)),
            !A.includes(t.code) && (A = [...A, t.code]),
            T(t)
          );
        },
        GIFT_CODE_RESOLVE_FAILURE: function (e) {
          let { code: t } = e;
          (I = I.filter((e) => e !== t)), !A.includes(t) && (A = [...A, t]);
        },
        GIFT_CODE_REDEEM: function (e) {
          let { code: t } = e;
          !m.includes(t) && (m = [...m, t]);
        },
        GIFT_CODE_REDEEM_SUCCESS: function (e) {
          let { code: t } = e;
          m = m.filter((e) => e !== t);
          let n = f.get(t);
          null != n && f.set(t, n.merge({ redeemed: !0, uses: n.uses + 1 }));
        },
        GIFT_CODE_REDEEM_FAILURE: function (e) {
          let { code: t, error: n } = e;
          m = m.filter((e) => e !== t);
          let s = f.get(t);
          if (((g[t] = n), null != s))
            switch (n.code) {
              case h.evJ.UNKNOWN_GIFT_CODE:
                f.set(t, s.set("revoked", !0));
                break;
              case h.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                f.set(t, s.set("uses", s.maxUses));
            }
        },
        GIFT_CODE_REVOKE_SUCCESS: function (e) {
          let { code: t } = e;
          f.delete(t);
          let n = C[t];
          null != n && (n.stop(), delete C[t]),
            !A.includes(t) && (A = [...A, t]);
        },
        GIFT_CODE_CREATE_SUCCESS: function (e) {
          let { giftCode: t } = e;
          T(t);
        },
        GIFT_CODES_FETCH: function (e) {
          let { skuId: t, subscriptionPlanId: n } = e;
          p.add((0, S.Bg)(t, n));
        },
        GIFT_CODES_FETCH_SUCCESS: function (e) {
          let { giftCodes: t, skuId: n, subscriptionPlanId: s } = e;
          t.forEach(T);
          let i = (0, S.Bg)(n, s);
          (R[i] = Date.now()), p.delete(i);
        },
        GIFT_CODES_FETCH_FAILURE: function (e) {
          let { skuId: t, subscriptionPlanId: n } = e;
          p.delete((0, S.Bg)(t, n));
        },
        MESSAGE_CREATE: D,
        MESSAGE_UPDATE: D,
        LOCAL_MESSAGES_LOADED: L,
        LOAD_MESSAGES_SUCCESS: L,
        LOAD_MESSAGES_AROUND_SUCCESS: L,
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
          let { messages: t } = e;
          t.forEach((e) => N(e));
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
          let { messages: t } = e;
          t.forEach((e) => N(e));
        },
        SEARCH_FINISH: function (e) {
          e.messages.forEach((e) => {
            e.forEach((e) => N(e));
          });
        },
        GIFT_CODE_UPDATE: function (e) {
          let { uses: t, code: n } = e,
            s = f.get(n);
          null != s && f.set(n, s.set("uses", Math.max(s.uses, t)));
        },
        LOAD_THREADS_SUCCESS: Z,
        LOAD_ARCHIVED_THREADS_SUCCESS: Z,
        LOAD_FORUM_POSTS: function (e) {
          let { threads: t } = e;
          Object.values(t).map((e) => {
            let { first_message: t } = e;
            return null != t && N(t);
          });
        },
      });
      t.Z = G;
    },
  },
]);
//# sourceMappingURL=beb59fcdd75ffcc88baf.js.map
