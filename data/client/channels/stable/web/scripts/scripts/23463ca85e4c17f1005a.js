"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10274"],
  {
    99713: function (e) {
      e.exports = "/assets/19030c98f81270503f7a.png";
    },
    215339: function (e, n, t) {
      t.d(n, {
        j: function () {
          return i;
        },
      });
      let l = (0, t(818083).B)({
          kind: "user",
          id: "2024-09_hd_streaming_potion",
          label: "Consumable HD Streaming Experiment",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 0, label: "Control", config: { enabled: !1 } },
            { id: 1, label: "Treatment", config: { enabled: !0 } },
          ],
        }),
        i = (e) => l.useExperiment({ location: e }).enabled;
    },
    955843: function (e, n, t) {
      t.d(n, {
        T: function () {
          return x;
        },
        Z: function () {
          return g;
        },
      }),
        t(47120);
      var l = t(192379),
        i = t(259443),
        r = t(442837),
        s = t(569545),
        a = t(199902),
        o = t(430824),
        d = t(158776),
        c = t(959457),
        u = t(594174),
        m = t(215339);
      let h = new i.Yd("HDStreamingConsumableModal"),
        x = (e) => {
          let n = (0, r.e7)([o.Z], () => o.Z.getGuild(e.guild_id)),
            t = (0, r.e7)([u.default], () => {
              var e;
              return null === (e = u.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            i = (0, r.e7)([a.Z], () =>
              a.Z.getAllActiveStreamsForChannel(e.id).filter(
                (e) => e.ownerId !== t,
              ),
            ),
            m = i.some((e) => {
              let n = u.default.getUser(e.ownerId);
              return null != n && d.Z.isMobileOnline(n.id);
            }),
            [x, g] = l.useState(null),
            [f, v] = l.useState([]);
          (0, r.e7)(
            [c.Z],
            () => {
              if (null == x || Date.now() - x > 1e4) {
                let e = i.map((e) => {
                  var n;
                  let t = (0, s.V9)(e),
                    l = c.Z.getRTCConnection(t);
                  return null == l
                    ? void 0
                    : null === (n = l.getVideoStats()) || void 0 === n
                      ? void 0
                      : n.inbound_bitrate_estimate_percentile99;
                });
                h.info("Setting bitrates", e), v(e), g(Date.now());
              }
            },
            [x, i],
          );
          let j = l.useMemo(() => {
            if (0 === f.length) return !0;
            if (f.some((e) => null == e)) return !1;
            for (let e of f) if (null == e || e < 35e5) return !1;
            return !0;
          }, [f]);
          return null != n && 0 === n.premiumTier && j && !m;
        },
        g = (e, n) => {
          let t = (0, r.e7)([u.default], () => {
              var e;
              return null === (e = u.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            l = (0, r.e7)([a.Z], () =>
              a.Z.getAllActiveStreamsForChannel(e.id).filter(
                (e) => e.ownerId !== t,
              ),
            ),
            i = (0, m.j)(n),
            s = x(e);
          return i && s && l.length > 0;
        };
    },
    942951: function (e, n, t) {
      t.d(n, {
        l: function () {
          return m;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(481060),
        s = t(100527),
        a = t(906732),
        o = t(184301),
        d = t(347475),
        c = t(592125),
        u = t(91047);
      function m(e) {
        var n, t;
        let {
            user: m,
            channelId: h,
            guildId: x,
            messageId: g,
            stopPropagation: f = !1,
            ariaLabel: v,
          } = e,
          { analyticsLocations: j } = (0, a.ZP)(s.Z.USERNAME);
        let p =
          ((n = m),
          (t = h),
          i.useCallback(
            (e) => {
              let l = c.Z.getChannel(t);
              null != l && null != n && (0, u.Pv)(e, n, l);
            },
            [n, t],
          ));
        return i.useCallback(
          (e) => (n, t) => {
            let i = (t) =>
                (0, l.jsx)(r.NameWithRoleAnchor, {
                  ...(null != t ? t : {}),
                  onContextMenu: p,
                  name: n,
                  color: null == e ? void 0 : e.colorString,
                  roleName: null == e ? void 0 : e.colorRoleName,
                  "aria-label": v,
                }),
              s = (e) => (n) => {
                f && n.stopPropagation(), e(n);
              };
            return (0, l.jsx)(
              a.Gt,
              {
                value: j,
                children:
                  null != m
                    ? (0, l.jsx)(r.Popout, {
                        position: "right",
                        preload: () =>
                          (0, o.Z)(m.id, m.getAvatarURL(x, 80), {
                            guildId: x,
                            channelId: h,
                          }),
                        renderPopout: (n) =>
                          (0, l.jsx)(d.Z, {
                            ...n,
                            userId: m.id,
                            guildId: x,
                            channelId: h,
                            messageId: g,
                            roleId: null == e ? void 0 : e.colorRoleId,
                          }),
                        children: (e) => {
                          let { onClick: n, ...t } = e;
                          return i({ onClick: s(n), ...t });
                        },
                      })
                    : i(void 0),
              },
              t,
            );
          },
          [j, m, h, x, g, p, f, v],
        );
      }
    },
    447564: function (e, n, t) {
      t.r(n),
        t.d(n, {
          HD_STREAMING_POTION_MODAL_KEY: function () {
            return I;
          },
          default: function () {
            return T;
          },
        }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(442837),
        s = t(692547),
        a = t(481060),
        o = t(100527),
        d = t(906732),
        c = t(335131),
        u = t(120619),
        m = t(955843),
        h = t(688465),
        x = t(690221),
        g = t(333867),
        f = t(937615),
        v = t(82950),
        j = t(981631),
        p = t(215023),
        Z = t(388032),
        C = t(1114),
        N = t(99713);
      function T(e) {
        let { transitionState: n, channel: t } = e;
        return (0, l.jsx)(a.ModalRoot, {
          size: a.ModalSize.DYNAMIC,
          transitionState: n,
          children: (0, l.jsx)(E, { channel: t }),
        });
      }
      let I = "HD_STREAMING_POTION_MODAL_KEY";
      function E(e) {
        let { channel: n } = e,
          t = (0, m.T)(n),
          [T, E] = i.useState(!1),
          [S, b, A, M, _, k] = (0, r.Wu)([u.Z], () => [
            u.Z.isFetchingPrice(p.FX),
            u.Z.isEntitlementFetched(p.FX),
            u.Z.isEntitlementFetching(p.FX),
            u.Z.getPrice(p.FX),
            u.Z.getErrored(p.FX),
            u.Z.getEntitlement(p.FX),
          ]),
          { analyticsLocations: F } = (0, d.ZP)([
            o.Z.HD_STREAMING_POTION_MODAL,
          ]),
          P = null != k && !k.consumed;
        i.useEffect(() => {
          null != k &&
            !1 === k.consumed &&
            k.type !== j.qc2.DEVELOPER_GIFT &&
            T &&
            (0, c.Zu)(n.id);
        }, [k, n, T]),
          i.useEffect(
            () => () => {
              (0, c.SN)(p.FX);
            },
            [],
          ),
          i.useEffect(() => {
            !S && null == M && !_ && (0, c.Gq)(p.FX);
          }, [S, M, _]),
          i.useEffect(() => {
            !b && !A && (0, c.gA)(p.FX);
          }, [b, A]);
        let D = () => (0, a.closeAllModals)();
        return _
          ? (0, l.jsx)("div", {
              className: C.anomaly,
              children: (0, l.jsxs)("div", {
                className: C.error,
                children: [
                  (0, l.jsx)(a.Image, { src: N, width: 178, height: 190 }),
                  (0, l.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children: Z.intl.string(Z.t.sIA0OD),
                  }),
                ],
              }),
            })
          : null == M
            ? (0, l.jsx)("div", {
                className: C.anomaly,
                children: (0, l.jsx)("div", {
                  className: C.spinner,
                  children: (0, l.jsx)(a.Spinner, {}),
                }),
              })
            : (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsxs)("div", {
                    className: C.modal,
                    children: [
                      (0, l.jsx)("img", {
                        className: C.image,
                        src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
                        alt: Z.intl.string(Z.t.DdigcX),
                      }),
                      (0, l.jsxs)("div", {
                        className: C.body,
                        children: [
                          (0, l.jsxs)("div", {
                            className: C.heading,
                            children: [
                              (0, l.jsx)(a.Heading, {
                                variant: "heading-lg/bold",
                                children: Z.intl.string(Z.t.K04rOD),
                              }),
                              (0, l.jsx)(h.Z, {}),
                            ],
                          }),
                          (0, l.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: Z.intl.string(Z.t.lq40Pz),
                          }),
                          (0, l.jsx)(x.Z, {
                            onClick: () => {},
                            children: (0, l.jsx)(a.Text, {
                              color: "text-link",
                              variant: "text-sm/normal",
                              children: Z.intl.string(Z.t["1wV4qq"]),
                            }),
                          }),
                          (0, l.jsx)(a.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: Z.intl.string(Z.t.qk07Mj),
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", { className: C.divider }),
                      (0, l.jsxs)("div", {
                        className: C.applyingTo,
                        children: [
                          (0, l.jsx)(a.Text, {
                            variant: "eyebrow",
                            children: Z.intl.string(Z.t.tZyXg4),
                          }),
                          (0, l.jsx)(v.Z, { channel: n }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: C.footer,
                    children: [
                      (0, l.jsx)(a.Button, {
                        onClick: () => {
                          (0, a.closeModal)(I);
                        },
                        color: a.Button.Colors.PRIMARY,
                        children: Z.intl.string(Z.t.Avt5KS),
                      }),
                      t
                        ? (0, l.jsx)(a.Button, {
                            onClick: () => {
                              if ((E(!0), P)) {
                                (0, c.Zu)(n.id), (0, a.closeAllModals)();
                                return;
                              }
                              (0, g.Z)({
                                skuId: p.FX,
                                analyticsLocations: F,
                                onComplete: D,
                              });
                            },
                            disabled: !t,
                            children: (0, l.jsxs)("div", {
                              className: C.buttonCopy,
                              children: [
                                (0, l.jsx)(a.PotionIcon, {
                                  color: s.Z.colors.INTERACTIVE_ACTIVE,
                                  size: "sm",
                                }),
                                P
                                  ? Z.intl.string(Z.t.sl6Tcn)
                                  : Z.intl.formatToPlainString(Z.t.S9LAdX, {
                                      price: (0, f.T4)(M.amount, M.currency),
                                    }),
                              ],
                            }),
                          })
                        : (0, l.jsx)(a.Tooltip, {
                            text: Z.intl.string(Z.t.Qrh2BQ),
                            children: (e) => {
                              let {
                                onClick: n,
                                onMouseEnter: t,
                                onMouseLeave: i,
                                ...r
                              } = e;
                              return (0, l.jsx)(a.Button, {
                                ...r,
                                disabled: !0,
                                onClick: n,
                                onMouseEnter: t,
                                onMouseLeave: i,
                                children: Z.intl.formatToPlainString(
                                  Z.t.S9LAdX,
                                  { price: (0, f.T4)(M.amount, M.currency) },
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
    207126: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(481060),
        r = t(422034),
        s = t(938475),
        a = t(628146);
      function o(e) {
        let { channel: n } = e;
        if (null == n) return null;
        let t = s.ZP.getVoiceStatesForChannel(n).slice(0, 6),
          o = t.map((e, n) => {
            let { user: s } = e;
            return (0, l.jsx)(
              r.O,
              {
                affinity: s,
                applyMask: n !== t.length - 1,
                size: i.AvatarSizes.SIZE_20,
              },
              s.id,
            );
          });
        return (0, l.jsx)("div", { className: a.avatars, children: o });
      }
    },
    82950: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(481060),
        r = t(207126),
        s = t(91783);
      function a(e) {
        let { channel: n } = e;
        return (0, l.jsxs)("div", {
          className: s.channel,
          children: [
            (0, l.jsxs)("div", {
              className: s.channelLeft,
              children: [
                (0, l.jsx)(i.VoiceNormalIcon, {}),
                (0, l.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: n.name,
                }),
              ],
            }),
            (0, l.jsx)(r.Z, { channel: n }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=23463ca85e4c17f1005a.js.map
