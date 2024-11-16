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
        i = n(343817),
        l = n(570140),
        a = n(959546),
        s = n(981631);
      let o = async (e) => {
          l.Z.dispatch({ type: "CONSUMABLES_PRICE_FETCH_STARTED", skuId: e });
          try {
            let t = await r.tn.get({ url: s.ANM.CONSUMABLE_FETCH_PRICE(e) });
            if (null == t.body.price)
              throw (
                (l.Z.dispatch({
                  type: "CONSUMABLES_PRICE_FETCH_FAILED",
                  skuId: e,
                }),
                Error("price not found"))
              );
            let n = t.body.price;
            return (
              l.Z.dispatch({
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
              (l.Z.dispatch({
                type: "CONSUMABLES_PRICE_FETCH_FAILED",
                skuId: e,
              }),
              new i.Hx(t))
            );
          }
        },
        c = async (e) => {
          l.Z.dispatch({
            type: "CONSUMABLES_ENTITLEMENT_FETCH_STARTED",
            skuId: e,
          });
          try {
            let t = await r.tn.get({
                url: s.ANM.FETCH_HD_STREAMING_ENTITLEMENT,
              }),
              n =
                null != t.body.entitlement
                  ? a.Z.createFromServer(t.body.entitlement)
                  : null;
            return (
              l.Z.dispatch({
                type: "CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED",
                skuId: e,
                entitlement: n,
              }),
              t.body.entitlement
            );
          } catch (t) {
            throw (
              (l.Z.dispatch({
                type: "CONSUMABLES_ENTITLEMENT_FETCH_FAILED",
                skuId: e,
              }),
              new i.Hx(t))
            );
          }
        },
        d = async (e, t) => {
          try {
            await r.tn.post({
              url: s.ANM.CONSUME_HD_STREAMING_POTION,
              body: { channel_id: e },
            }),
              l.Z.dispatch({ type: "CLEAR_CONSUMED_ENTITLEMENT", skuId: t });
          } catch (e) {
            throw new i.Hx(e);
          }
        },
        u = (e) => {
          l.Z.dispatch({ type: "CONSUMABLES_CLEAR_ERROR", skuId: e });
        },
        E = () => {
          l.Z.dispatch({ type: "PLAYED_HD_STREAMING_POTION_ANIMATION" });
        },
        m = () => {
          l.Z.dispatch({ type: "RESET_PLAYED_HD_STREAMING_POTION_ANIMATION" });
        },
        h = (e) => {
          l.Z.dispatch({
            type: "SET_PREVIOUS_GO_LIVE_SETTINGS",
            previousGoLiveSettings: e,
          });
        };
    },
    215339: function (e, t, n) {
      n.d(t, {
        j: function () {
          return i;
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
        i = (e) => r.useExperiment({ location: e }).enabled;
    },
    955843: function (e, t, n) {
      n.d(t, {
        T: function () {
          return h;
        },
        Z: function () {
          return f;
        },
      }),
        n(47120);
      var r = n(192379),
        i = n(259443),
        l = n(442837),
        a = n(569545),
        s = n(199902),
        o = n(430824),
        c = n(158776),
        d = n(959457),
        u = n(594174),
        E = n(215339);
      let m = new i.Yd("HDStreamingConsumableModal"),
        h = (e) => {
          let t = (0, l.e7)([o.Z], () => o.Z.getGuild(e.guild_id)),
            n = (0, l.e7)([u.default], () => {
              var e;
              return null === (e = u.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            i = (0, l.e7)([s.Z], () =>
              s.Z.getAllActiveStreamsForChannel(e.id).filter(
                (e) => e.ownerId !== n,
              ),
            ),
            E = i.some((e) => {
              let t = u.default.getUser(e.ownerId);
              return null != t && c.Z.isMobileOnline(t.id);
            }),
            [h, f] = r.useState(null),
            [p, _] = r.useState([]);
          (0, l.e7)(
            [d.Z],
            () => {
              if (null == h || Date.now() - h > 1e4) {
                let e = i.map((e) => {
                  var t;
                  let n = (0, a.V9)(e),
                    r = d.Z.getRTCConnection(n);
                  return null == r
                    ? void 0
                    : null === (t = r.getVideoStats()) || void 0 === t
                      ? void 0
                      : t.inbound_bitrate_estimate_percentile99;
                });
                m.info("Setting bitrates", e), _(e), f(Date.now());
              }
            },
            [h, i],
          );
          let T = r.useMemo(() => {
            if (0 === p.length) return !0;
            if (p.some((e) => null == e)) return !1;
            for (let e of p) if (null == e || e < 35e5) return !1;
            return !0;
          }, [p]);
          return null != t && 0 === t.premiumTier && T && !E;
        },
        f = (e, t) => {
          let n = (0, l.e7)([u.default], () => {
              var e;
              return null === (e = u.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            r = (0, l.e7)([s.Z], () =>
              s.Z.getAllActiveStreamsForChannel(e.id).filter(
                (e) => e.ownerId !== n,
              ),
            ),
            i = (0, E.j)(t),
            a = h(e);
          return i && a && r.length > 0;
        };
    },
    461195: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
        n: function () {
          return i;
        },
      });
      var r,
        i,
        l = n(200651);
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
        return (0, l.jsx)("img", {
          className: s()(t, { [u.sm]: "sm" === n, [u.md]: "md" === n }),
          src: r,
          alt: d.intl.string(d.t.htEhYm),
        });
      }
      ((r = i || (i = {})).SMALL = "sm"), (r.MEDIUM = "md");
    },
    942951: function (e, t, n) {
      n.d(t, {
        l: function () {
          return E;
        },
      });
      var r = n(200651),
        i = n(192379),
        l = n(481060),
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
            messageId: f,
            stopPropagation: p = !1,
            ariaLabel: _,
          } = e,
          { analyticsLocations: T } = (0, s.ZP)(a.Z.USERNAME);
        let g =
          ((t = E),
          (n = m),
          i.useCallback(
            (e) => {
              let r = d.Z.getChannel(n);
              null != r && null != t && (0, u.Pv)(e, t, r);
            },
            [t, n],
          ));
        return i.useCallback(
          (e) => (t, n) => {
            let i = (n) =>
                (0, r.jsx)(l.NameWithRoleAnchor, {
                  ...(null != n ? n : {}),
                  onContextMenu: g,
                  name: t,
                  color: null == e ? void 0 : e.colorString,
                  roleName: null == e ? void 0 : e.colorRoleName,
                  "aria-label": _,
                }),
              a = (e) => (t) => {
                p && t.stopPropagation(), e(t);
              };
            return (0, r.jsx)(
              s.Gt,
              {
                value: T,
                children:
                  null != E
                    ? (0, r.jsx)(l.Popout, {
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
                            messageId: f,
                            roleId: null == e ? void 0 : e.colorRoleId,
                          }),
                        children: (e) => {
                          let { onClick: t, ...n } = e;
                          return i({ onClick: a(t), ...n });
                        },
                      })
                    : i(void 0),
              },
              n,
            );
          },
          [T, E, m, h, f, g, p, _],
        );
      }
    },
    447564: function (e, t, n) {
      n.r(t),
        n.d(t, {
          HD_STREAMING_POTION_MODAL_KEY: function () {
            return C;
          },
          default: function () {
            return v;
          },
        }),
        n(47120);
      var r = n(200651),
        i = n(192379),
        l = n(442837),
        a = n(692547),
        s = n(481060),
        o = n(100527),
        c = n(906732),
        d = n(997323),
        u = n(120619),
        E = n(955843),
        m = n(688465),
        h = n(690221),
        f = n(333867),
        p = n(937615),
        _ = n(82950),
        T = n(981631),
        g = n(215023),
        x = n(388032),
        N = n(1114),
        S = n(99713);
      function v(e) {
        let { transitionState: t, channel: n } = e;
        return (0, r.jsx)(s.ModalRoot, {
          size: s.ModalSize.DYNAMIC,
          transitionState: t,
          children: (0, r.jsx)(A, { channel: n }),
        });
      }
      let C = "HD_STREAMING_POTION_MODAL_KEY";
      function A(e) {
        let { channel: t } = e,
          n = (0, E.T)(t),
          [v, A] = i.useState(!1),
          [I, M, Z, j, b, y] = (0, l.Wu)([u.Z], () => [
            u.Z.isFetchingPrice(g.FX),
            u.Z.isEntitlementFetched(g.FX),
            u.Z.isEntitlementFetching(g.FX),
            u.Z.getPrice(g.FX),
            u.Z.getErrored(g.FX),
            u.Z.getEntitlement(g.FX),
          ]),
          { analyticsLocations: L } = (0, c.ZP)([
            o.Z.HD_STREAMING_POTION_MODAL,
          ]),
          O = null != y && !y.consumed;
        i.useEffect(() => {
          null != y &&
            !1 === y.consumed &&
            y.type !== T.qc2.DEVELOPER_GIFT &&
            v &&
            (0, d.Zu)(t.id, g.FX);
        }, [y, t, v]),
          i.useEffect(
            () => () => {
              (0, d.SN)(g.FX);
            },
            [],
          ),
          i.useEffect(() => {
            !I && null == j && !b && (0, d.Gq)(g.FX);
          }, [I, j, b]),
          i.useEffect(() => {
            !M && !Z && (0, d.gA)(g.FX);
          }, [M, Z]);
        let F = () => (0, s.closeAllModals)();
        return b
          ? (0, r.jsx)("div", {
              className: N.anomaly,
              children: (0, r.jsxs)("div", {
                className: N.error,
                children: [
                  (0, r.jsx)(s.Image, { src: S, width: 178, height: 190 }),
                  (0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: x.intl.string(x.t.sIA0OD),
                  }),
                ],
              }),
            })
          : null == j
            ? (0, r.jsx)("div", {
                className: N.anomaly,
                children: (0, r.jsx)("div", {
                  className: N.spinner,
                  children: (0, r.jsx)(s.Spinner, {}),
                }),
              })
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)("div", {
                    className: N.modal,
                    children: [
                      (0, r.jsx)("img", {
                        className: N.image,
                        src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
                        alt: x.intl.string(x.t.DdigcX),
                      }),
                      (0, r.jsxs)("div", {
                        className: N.body,
                        children: [
                          (0, r.jsxs)("div", {
                            className: N.heading,
                            children: [
                              (0, r.jsx)(s.Heading, {
                                variant: "heading-lg/bold",
                                children: x.intl.string(x.t.K04rOD),
                              }),
                              (0, r.jsx)(m.Z, {}),
                            ],
                          }),
                          (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: x.intl.string(x.t.lq40Pz),
                          }),
                          (0, r.jsx)(h.Z, {
                            onClick: () => {},
                            children: (0, r.jsx)(s.Text, {
                              color: "text-link",
                              variant: "text-sm/normal",
                              children: x.intl.string(x.t["1wV4qq"]),
                            }),
                          }),
                          (0, r.jsx)(s.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: x.intl.string(x.t.qk07Mj),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", { className: N.divider }),
                      (0, r.jsxs)("div", {
                        className: N.applyingTo,
                        children: [
                          (0, r.jsx)(s.Text, {
                            variant: "eyebrow",
                            children: x.intl.string(x.t.tZyXg4),
                          }),
                          (0, r.jsx)(_.Z, { channel: t }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: N.footer,
                    children: [
                      (0, r.jsx)(s.Button, {
                        onClick: () => {
                          (0, s.closeModal)(C);
                        },
                        color: s.Button.Colors.PRIMARY,
                        children: x.intl.string(x.t.Avt5KS),
                      }),
                      n
                        ? (0, r.jsx)(s.Button, {
                            onClick: () => {
                              if ((A(!0), O)) {
                                (0, d.Zu)(t.id, g.FX), (0, s.closeAllModals)();
                                return;
                              }
                              (0, f.Z)({
                                skuId: g.FX,
                                analyticsLocations: L,
                                onComplete: F,
                              });
                            },
                            disabled: !n,
                            children: (0, r.jsxs)("div", {
                              className: N.buttonCopy,
                              children: [
                                (0, r.jsx)(s.PotionIcon, {
                                  color: a.Z.colors.WHITE,
                                  size: "sm",
                                }),
                                O
                                  ? x.intl.string(x.t.sl6Tcn)
                                  : x.intl.formatToPlainString(x.t.S9LAdX, {
                                      price: (0, p.T4)(j.amount, j.currency),
                                    }),
                              ],
                            }),
                          })
                        : (0, r.jsx)(s.Tooltip, {
                            text: x.intl.string(x.t.Qrh2BQ),
                            children: (e) => {
                              let {
                                onClick: t,
                                onMouseEnter: n,
                                onMouseLeave: i,
                                ...l
                              } = e;
                              return (0, r.jsx)(s.Button, {
                                ...l,
                                disabled: !0,
                                onClick: t,
                                onMouseEnter: n,
                                onMouseLeave: i,
                                children: x.intl.formatToPlainString(
                                  x.t.S9LAdX,
                                  { price: (0, p.T4)(j.amount, j.currency) },
                                ),
                              });
                            },
                          }),
                    ],
                  }),
                ],
              });
      }
    },
    207126: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(481060),
        l = n(422034),
        a = n(938475),
        s = n(628146);
      function o(e) {
        let { channel: t } = e;
        if (null == t) return null;
        let n = a.ZP.getVoiceStatesForChannel(t).slice(0, 6),
          o = n.map((e, t) => {
            let { user: a } = e;
            return (0, r.jsx)(
              l.O,
              {
                affinity: a,
                applyMask: t !== n.length - 1,
                size: i.AvatarSizes.SIZE_20,
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
      var i = n(481060),
        l = n(207126),
        a = n(91783);
      function s(e) {
        let { channel: t } = e;
        return (0, r.jsxs)("div", {
          className: a.channel,
          children: [
            (0, r.jsxs)("div", {
              className: a.channelLeft,
              children: [
                (0, r.jsx)(i.VoiceNormalIcon, {}),
                (0, r.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: t.name,
                }),
              ],
            }),
            (0, r.jsx)(l.Z, { channel: t }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=3fbd5087b3306c8aa39b.js.map
