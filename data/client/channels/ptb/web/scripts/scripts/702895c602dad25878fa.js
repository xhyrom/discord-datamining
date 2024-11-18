"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35886"],
  {
    99713: function (e) {
      e.exports = "/assets/19030c98f81270503f7a.png";
    },
    997323: function (e, t, n) {
      n.d(t, {
        Gq: function () {
          return o;
        },
        LE: function () {
          return m;
        },
        SN: function () {
          return u;
        },
        Zu: function () {
          return d;
        },
        ag: function () {
          return E;
        },
        gA: function () {
          return c;
        },
        x8: function () {
          return h;
        },
      }),
        n(411104);
      var r = n(544891),
        l = n(343817),
        i = n(570140),
        a = n(959546),
        s = n(981631);
      let o = async (e) => {
          i.Z.dispatch({ type: "CONSUMABLES_PRICE_FETCH_STARTED", skuId: e });
          try {
            let t = await r.tn.get({
              url: s.ANM.CONSUMABLE_FETCH_PRICE(e),
              rejectWithError: !1,
            });
            if (null == t.body.price)
              throw (
                (i.Z.dispatch({
                  type: "CONSUMABLES_PRICE_FETCH_FAILED",
                  skuId: e,
                }),
                Error("price not found"))
              );
            let n = t.body.price;
            return (
              i.Z.dispatch({
                type: "CONSUMABLES_PRICE_FETCH_SUCCEEDED",
                skuId: e,
                price: n,
              }),
              {
                amount: n.amount,
                currency: n.currency,
                exponent: n.currency_exponent,
              }
            );
          } catch (t) {
            throw (
              (i.Z.dispatch({
                type: "CONSUMABLES_PRICE_FETCH_FAILED",
                skuId: e,
              }),
              new l.Hx(t))
            );
          }
        },
        c = async (e) => {
          i.Z.dispatch({
            type: "CONSUMABLES_ENTITLEMENT_FETCH_STARTED",
            skuId: e,
          });
          try {
            let t = await r.tn.get({
                url: s.ANM.FETCH_HD_STREAMING_ENTITLEMENT,
                rejectWithError: !1,
              }),
              n =
                null != t.body.entitlement
                  ? a.Z.createFromServer(t.body.entitlement)
                  : null;
            return (
              i.Z.dispatch({
                type: "CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED",
                skuId: e,
                entitlement: n,
              }),
              t.body.entitlement
            );
          } catch (t) {
            throw (
              (i.Z.dispatch({
                type: "CONSUMABLES_ENTITLEMENT_FETCH_FAILED",
                skuId: e,
              }),
              new l.Hx(t))
            );
          }
        },
        d = async (e, t) => {
          try {
            await r.tn.post({
              url: s.ANM.CONSUME_HD_STREAMING_POTION,
              body: { channel_id: e },
              rejectWithError: !1,
            }),
              i.Z.dispatch({ type: "CLEAR_CONSUMED_ENTITLEMENT", skuId: t });
          } catch (e) {
            throw new l.Hx(e);
          }
        },
        u = (e) => {
          i.Z.dispatch({ type: "CONSUMABLES_CLEAR_ERROR", skuId: e });
        },
        E = () => {
          i.Z.dispatch({ type: "PLAYED_HD_STREAMING_POTION_ANIMATION" });
        },
        m = () => {
          i.Z.dispatch({ type: "RESET_PLAYED_HD_STREAMING_POTION_ANIMATION" });
        },
        h = (e) => {
          i.Z.dispatch({
            type: "SET_PREVIOUS_GO_LIVE_SETTINGS",
            previousGoLiveSettings: e,
          });
        };
    },
    215339: function (e, t, n) {
      n.d(t, {
        j: function () {
          return l;
        },
      });
      let r = (0, n(818083).B)({
          kind: "user",
          id: "2024-09_hd_streaming_potion",
          label: "Consumable HD Streaming Experiment",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 0, label: "Control", config: { enabled: !1 } },
            { id: 1, label: "Treatment", config: { enabled: !0 } },
          ],
        }),
        l = (e) => r.useExperiment({ location: e }).enabled;
    },
    955843: function (e, t, n) {
      n.d(t, {
        R2: function () {
          return T;
        },
        T$: function () {
          return f;
        },
        Zm: function () {
          return x;
        },
        t6: function () {
          return _;
        },
      }),
        n(47120);
      var r = n(192379),
        l = n(259443),
        i = n(442837),
        a = n(569545),
        s = n(199902),
        o = n(430824),
        c = n(158776),
        d = n(959457),
        u = n(594174),
        E = n(997323),
        m = n(120619),
        h = n(215339);
      let p = new l.Yd("HDStreamingConsumableModal"),
        f = (e) => {
          let t = (0, i.e7)([o.Z], () => o.Z.getGuild(e.guild_id)),
            n = (0, i.e7)([u.default], () => {
              var e;
              return null === (e = u.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            l = (0, i.Wu)([s.Z], () =>
              s.Z.getAllActiveStreamsForChannel(e.id).filter(
                (e) => e.ownerId !== n,
              ),
            ),
            E = l.some((e) => {
              let t = u.default.getUser(e.ownerId);
              return null != t && c.Z.isMobileOnline(t.id);
            }),
            [m, h] = (0, r.useState)(null),
            [f, x] = (0, r.useState)([]);
          (0, i.e7)(
            [d.Z],
            () => {
              if (null == m || Date.now() - m > 1e4) {
                let e = l.map((e) => {
                  var t;
                  let n = (0, a.V9)(e),
                    r = d.Z.getRTCConnection(n);
                  return null == r
                    ? void 0
                    : null === (t = r.getVideoStats()) || void 0 === t
                      ? void 0
                      : t.inbound_bitrate_estimate_percentile99;
                });
                p.info("Setting bitrates", e), x(e), h(Date.now());
              }
            },
            [m, l],
          );
          let T = (0, r.useMemo)(
            () =>
              0 === f.length || (!f.some((e) => null == e || e < 35e5) && !0),
            [f],
          );
          return null != t && 0 === t.premiumTier && T && !E;
        },
        x = (e, t) => {
          let n = (0, i.e7)([u.default], () => {
              var e;
              return null === (e = u.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            r = (0, i.Wu)([s.Z], () =>
              s.Z.getAllActiveStreamsForChannel(e.id).filter(
                (e) => e.ownerId !== n,
              ),
            ),
            l = (0, h.j)(t),
            a = f(e);
          return l && a && r.length > 0;
        };
      function T(e) {
        let [t, n, l] = (0, i.Wu)([m.Z], () => [
          m.Z.isFetchingPrice(e),
          m.Z.getPrice(e),
          m.Z.getErrored(e),
        ]);
        return (
          (0, r.useEffect)(() => {
            !t && null == n && !l && (0, E.Gq)(e);
          }, [t, n, l, e]),
          { price: n, fetchingPrice: t, error: l }
        );
      }
      function _(e) {
        let [t, n, l, a] = (0, i.Wu)([m.Z], () => [
          m.Z.isEntitlementFetched(e),
          m.Z.isEntitlementFetching(e),
          m.Z.getEntitlement(e),
          m.Z.getErrored(e),
        ]);
        return (
          (0, r.useEffect)(() => {
            !t && !n && (0, E.gA)(e);
          }, [t, n, e]),
          { entitlement: l, fetchedEntitlement: t, error: a }
        );
      }
    },
    461195: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
        n: function () {
          return l;
        },
      });
      var r,
        l,
        i = n(200651);
      n(192379);
      var a = n(120356),
        s = n.n(a),
        o = n(410030),
        c = n(231338),
        d = n(388032),
        u = n(501404);
      function E(e) {
        let { className: t, size: n = "md" } = e,
          r =
            (0, o.ZP)() === c.BR.LIGHT
              ? "https://cdn.discordapp.com/assets/content/e4ec02f7af5d01c8c168eb814823a94a6bf1ce440e70e35e5a6f18b0fdad3321.png"
              : "https://cdn.discordapp.com/assets/content/f814e4be3c27004f4e60c1bdad648ee24acfa9716c0be8048cc63b5b869e56a4.png";
        return (0, i.jsx)("img", {
          className: s()(t, { [u.sm]: "sm" === n, [u.md]: "md" === n }),
          src: r,
          alt: d.intl.string(d.t.htEhYm),
        });
      }
      ((r = l || (l = {})).SMALL = "sm"), (r.MEDIUM = "md");
    },
    942951: function (e, t, n) {
      n.d(t, {
        l: function () {
          return E;
        },
      });
      var r = n(200651),
        l = n(192379),
        i = n(481060),
        a = n(100527),
        s = n(906732),
        o = n(184301),
        c = n(347475),
        d = n(592125),
        u = n(91047);
      function E(e) {
        var t, n;
        let {
            user: E,
            channelId: m,
            guildId: h,
            messageId: p,
            stopPropagation: f = !1,
            ariaLabel: x,
          } = e,
          { analyticsLocations: T } = (0, s.ZP)(a.Z.USERNAME);
        let _ =
          ((t = E),
          (n = m),
          l.useCallback(
            (e) => {
              let r = d.Z.getChannel(n);
              null != r && null != t && (0, u.Pv)(e, t, r);
            },
            [t, n],
          ));
        return l.useCallback(
          (e) => (t, n) => {
            let l = (n) =>
                (0, r.jsx)(i.NameWithRoleAnchor, {
                  ...(null != n ? n : {}),
                  onContextMenu: _,
                  name: t,
                  color: null == e ? void 0 : e.colorString,
                  roleName: null == e ? void 0 : e.colorRoleName,
                  "aria-label": x,
                }),
              a = (e) => (t) => {
                f && t.stopPropagation(), e(t);
              };
            return (0, r.jsx)(
              s.Gt,
              {
                value: T,
                children:
                  null != E
                    ? (0, r.jsx)(i.Popout, {
                        position: "right",
                        preload: () =>
                          (0, o.Z)(E.id, E.getAvatarURL(h, 80), {
                            guildId: h,
                            channelId: m,
                          }),
                        renderPopout: (t) =>
                          (0, r.jsx)(c.Z, {
                            ...t,
                            userId: E.id,
                            guildId: h,
                            channelId: m,
                            messageId: p,
                            roleId: null == e ? void 0 : e.colorRoleId,
                          }),
                        children: (e) => {
                          let { onClick: t, ...n } = e;
                          return l({ onClick: a(t), ...n });
                        },
                      })
                    : l(void 0),
              },
              n,
            );
          },
          [T, E, m, h, p, _, f, x],
        );
      }
    },
    447564: function (e, t, n) {
      n.r(t),
        n.d(t, {
          HD_STREAMING_POTION_MODAL_KEY: function () {
            return S;
          },
          default: function () {
            return I;
          },
        }),
        n(47120);
      var r,
        l,
        i = n(200651),
        a = n(192379),
        s = n(692547),
        o = n(481060),
        c = n(100527),
        d = n(906732),
        u = n(997323),
        E = n(955843),
        m = n(688465),
        h = n(333867),
        p = n(63063),
        f = n(937615),
        x = n(82950),
        T = n(981631),
        _ = n(215023),
        N = n(388032),
        g = n(1114),
        A = n(99713);
      function I(e) {
        let { transitionState: t, channel: n } = e;
        return (0, i.jsx)(o.ModalRoot, {
          size: o.ModalSize.DYNAMIC,
          transitionState: t,
          children: (0, i.jsx)(C, { channel: n }),
        });
      }
      let S = "HD_STREAMING_POTION_MODAL_KEY";
      function C(e) {
        let { channel: t } = e,
          n = (0, E.T$)(t),
          [r, l] = (0, a.useState)(!1),
          { price: s, fetchingPrice: m, error: p } = (0, E.R2)(_.FX),
          { entitlement: f, fetchedEntitlement: x, error: N } = (0, E.t6)(_.FX),
          g = p || N,
          { analyticsLocations: A } = (0, d.ZP)([
            c.Z.HD_STREAMING_POTION_MODAL,
          ]),
          I = null != f && !f.consumed;
        (0, a.useEffect)(
          () => (
            null != f && !1 === f.consumed && r && (0, u.Zu)(t.id, _.FX),
            () => {
              g && (0, u.SN)(_.FX);
            }
          ),
          [f, t, r, g],
        );
        let S = (0, a.useMemo)(
            () => () =>
              (0, h.Z)({
                skuId: _.FX,
                analyticsLocations: A,
                onComplete: o.closeAllModals,
              }),
            [A],
          ),
          C = (0, a.useMemo)(
            () => () => {
              (0, u.Zu)(t.id, _.FX), (0, o.closeAllModals)();
            },
            [t.id],
          ),
          j = (0, a.useMemo)(
            () => () =>
              t.isHDStreamSplashed
                ? 4
                : n
                  ? (null == f ? void 0 : f.type) === T.qc2.DEVELOPER_GIFT
                    ? 1
                    : I
                      ? 2
                      : 0
                  : 3,
            [t.isHDStreamSplashed, n, null == f ? void 0 : f.type, I],
          ),
          M = (0, a.useMemo)(() => j(), [j]);
        return (0, i.jsx)(v, {
          channel: t,
          buttonState: M,
          price: s,
          onActionClick: () => {
            l(!0), (I ? C : S)();
          },
          loading: m || !x,
        });
      }
      let v = (e) => {
          let {
            channel: t,
            buttonState: n,
            price: r,
            onActionClick: l,
            loading: a,
          } = e;
          return a
            ? (0, i.jsx)(R, {})
            : null == r
              ? (0, i.jsx)(b, {})
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)("div", {
                      className: g.modal,
                      children: [
                        (0, i.jsx)(j, {}),
                        (0, i.jsx)(M, { channel: t }),
                      ],
                    }),
                    (0, i.jsx)(Z, {
                      buttonState: n,
                      price: r,
                      onActionClick: l,
                    }),
                  ],
                });
        },
        j = () =>
          (0, i.jsx)("img", {
            className: g.image,
            src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
            alt: N.intl.string(N.t.DdigcX),
          }),
        M = (e) => {
          let { channel: t } = e;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                className: g.body,
                children: [
                  (0, i.jsxs)("div", {
                    className: g.heading,
                    children: [
                      (0, i.jsx)(o.Heading, {
                        variant: "heading-lg/bold",
                        children: N.intl.string(N.t.K04rOD),
                      }),
                      (0, i.jsx)(m.Z, {}),
                    ],
                  }),
                  (0, i.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: N.intl.string(N.t.lq40Pz),
                  }),
                  (0, i.jsx)(o.Text, {
                    color: "text-link",
                    variant: "text-sm/normal",
                    children: N.intl.format(N.t["1wV4qq"], {
                      helpCenterLink: p.Z.getArticleURL(
                        T.BhN.HD_STREAMING_POTION,
                      ),
                    }),
                  }),
                  (0, i.jsx)(o.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    children: N.intl.string(N.t.qk07Mj),
                  }),
                ],
              }),
              (0, i.jsx)("div", { className: g.divider }),
              (0, i.jsxs)("div", {
                className: g.applyingTo,
                children: [
                  (0, i.jsx)(o.Text, {
                    variant: "eyebrow",
                    children: N.intl.string(N.t.tZyXg4),
                  }),
                  (0, i.jsx)(x.Z, { channel: t }),
                ],
              }),
            ],
          });
        };
      ((l = r || (r = {}))[(l.BUY = 0)] = "BUY"),
        (l[(l.REDEEM = 1)] = "REDEEM"),
        (l[(l.ACTIVATE = 2)] = "ACTIVATE"),
        (l[(l.INELIGIBLE = 3)] = "INELIGIBLE"),
        (l[(l.ALREADY_ACTIVE = 4)] = "ALREADY_ACTIVE");
      let Z = (e) => {
          let { buttonState: t, price: n, onActionClick: r } = e;
          return (0, i.jsxs)("div", {
            className: g.footer,
            children: [
              (0, i.jsx)(o.Button, {
                onClick: () => {
                  (0, o.closeModal)(S);
                },
                color: o.Button.Colors.PRIMARY,
                children: N.intl.string(N.t.Avt5KS),
              }),
              (0, i.jsx)(L, { buttonState: t, price: n, onActionClick: r }),
            ],
          });
        },
        L = (e) => {
          let { buttonState: t, price: n, onActionClick: r } = e,
            l = N.intl.formatToPlainString(N.t.S9LAdX, {
              price: (0, f.T4)(n.amount, n.currency),
            });
          if (3 === t || 4 === t) {
            let e = {
              3: N.intl.string(N.t.Qrh2BQ),
              4: N.intl.string(N.t.utRdl5),
            }[t];
            return (0, i.jsx)(o.Tooltip, {
              tooltipContentClassName: g.tooltip,
              text: e,
              children: (e) =>
                (0, i.jsx)(o.Button, { ...e, disabled: !0, children: l }),
            });
          }
          let a = {
            0: l,
            1: N.intl.string(N.t.sl6Tcn),
            2: N.intl.string(N.t.XJ9INj),
          }[t];
          return (0, i.jsx)(o.Button, {
            onClick: r,
            children: (0, i.jsxs)("div", {
              className: g.buttonCopy,
              children: [
                (0, i.jsx)(o.PotionIcon, {
                  color: s.Z.colors.WHITE,
                  size: "sm",
                }),
                a,
              ],
            }),
          });
        },
        b = () =>
          (0, i.jsx)("div", {
            className: g.anomaly,
            children: (0, i.jsxs)("div", {
              className: g.error,
              children: [
                (0, i.jsx)(o.Image, { src: A, width: 178, height: 190 }),
                (0, i.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children: N.intl.string(N.t.sIA0OD),
                }),
              ],
            }),
          }),
        R = () =>
          (0, i.jsx)("div", {
            className: g.anomaly,
            children: (0, i.jsx)("div", {
              className: g.spinner,
              children: (0, i.jsx)(o.Spinner, {}),
            }),
          });
    },
    207126: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(200651);
      n(192379);
      var l = n(481060),
        i = n(422034),
        a = n(938475),
        s = n(628146);
      function o(e) {
        let { channel: t } = e;
        if (null == t) return null;
        let n = a.ZP.getVoiceStatesForChannel(t).slice(0, 6),
          o = n.map((e, t) => {
            let { user: a } = e;
            return (0, r.jsx)(
              i.O,
              {
                affinity: a,
                applyMask: t !== n.length - 1,
                size: l.AvatarSizes.SIZE_20,
              },
              a.id,
            );
          });
        return (0, r.jsx)("div", { className: s.avatars, children: o });
      }
    },
    82950: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(200651);
      n(192379);
      var l = n(481060),
        i = n(207126),
        a = n(91783);
      function s(e) {
        let { channel: t } = e;
        return (0, r.jsxs)("div", {
          className: a.channel,
          children: [
            (0, r.jsxs)("div", {
              className: a.channelLeft,
              children: [
                (0, r.jsx)(l.VoiceNormalIcon, {}),
                (0, r.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: t.name,
                }),
              ],
            }),
            (0, r.jsx)(i.Z, { channel: t }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=702895c602dad25878fa.js.map
