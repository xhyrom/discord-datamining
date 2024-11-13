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
          id: "2024-10_consumables_hd_streaming",
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
          return h;
        },
        Z: function () {
          return x;
        },
      }),
        t(47120);
      var l = t(192379),
        i = t(259443),
        r = t(442837),
        a = t(569545),
        s = t(199902),
        o = t(430824),
        c = t(959457),
        d = t(594174),
        u = t(215339);
      let m = new i.Yd("HDStreamingConsumableModal"),
        h = (e) => {
          let n = (0, r.e7)([o.Z], () => o.Z.getGuild(e.guild_id)),
            t = (0, r.e7)([d.default], () => {
              var e;
              return null === (e = d.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            i = (0, r.e7)([s.Z], () =>
              s.Z.getAllActiveStreamsForChannel(e.id).filter(
                (e) => e.ownerId !== t,
              ),
            ),
            [u, h] = l.useState(null),
            [x, f] = l.useState([]);
          (0, r.e7)(
            [c.Z],
            () => {
              if (null == u || Date.now() - u > 1e4) {
                let e = i.map((e) => {
                  var n;
                  let t = (0, a.V9)(e),
                    l = c.Z.getRTCConnection(t);
                  return null == l
                    ? void 0
                    : null === (n = l.getVideoStats()) || void 0 === n
                      ? void 0
                      : n.inbound_bitrate_estimate_percentile99;
                });
                m.info("Setting bitrates", e), f(e), h(Date.now());
              }
            },
            [u, i],
          );
          let g = l.useMemo(() => {
            if (0 === x.length) return !0;
            if (x.some((e) => null == e)) return !1;
            for (let e of x) if (null == e || e < 35e5) return !1;
            return !0;
          }, [x]);
          return null != n && 0 === n.premiumTier && g;
        },
        x = (e, n) => {
          let t = (0, r.e7)([d.default], () => {
              var e;
              return null === (e = d.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            l = (0, r.e7)([s.Z], () =>
              s.Z.getAllActiveStreamsForChannel(e.id).filter(
                (e) => e.ownerId !== t,
              ),
            ),
            i = (0, u.j)(n),
            a = h(e);
          return i && a && l.length > 0;
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
        a = t(100527),
        s = t(906732),
        o = t(184301),
        c = t(347475),
        d = t(592125),
        u = t(91047);
      function m(e) {
        var n, t;
        let {
            user: m,
            channelId: h,
            guildId: x,
            messageId: f,
            stopPropagation: g = !1,
            ariaLabel: v,
          } = e,
          { analyticsLocations: j } = (0, s.ZP)(a.Z.USERNAME);
        let p =
          ((n = m),
          (t = h),
          i.useCallback(
            (e) => {
              let l = d.Z.getChannel(t);
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
              a = (e) => (n) => {
                g && n.stopPropagation(), e(n);
              };
            return (0, l.jsx)(
              s.Gt,
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
                          (0, l.jsx)(c.Z, {
                            ...n,
                            userId: m.id,
                            guildId: x,
                            channelId: h,
                            messageId: f,
                            roleId: null == e ? void 0 : e.colorRoleId,
                          }),
                        children: (e) => {
                          let { onClick: n, ...t } = e;
                          return i({ onClick: a(n), ...t });
                        },
                      })
                    : i(void 0),
              },
              t,
            );
          },
          [j, m, h, x, f, p, g, v],
        );
      }
    },
    447564: function (e, n, t) {
      t.r(n),
        t.d(n, {
          HD_STREAMING_POTION_MODAL_KEY: function () {
            return N;
          },
          default: function () {
            return E;
          },
        }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(442837),
        a = t(692547),
        s = t(481060),
        o = t(100527),
        c = t(906732),
        d = t(335131),
        u = t(120619),
        m = t(955843),
        h = t(688465),
        x = t(690221),
        f = t(333867),
        g = t(937615),
        v = t(82950),
        j = t(981631),
        p = t(215023),
        Z = t(388032),
        b = t(912568),
        C = t(99713);
      function E(e) {
        let { transitionState: n, channel: t } = e;
        return (0, l.jsx)(s.ModalRoot, {
          size: s.ModalSize.DYNAMIC,
          transitionState: n,
          children: (0, l.jsx)(T, { channel: t }),
        });
      }
      let N = "HD_STREAMING_POTION_MODAL_KEY";
      function T(e) {
        let { channel: n } = e,
          t = (0, m.T)(n),
          [E, T, I, A, S, _] = (0, r.Wu)([u.Z], () => [
            u.Z.isFetchingPrice(p.FX),
            u.Z.isEntitlementFetched(p.FX),
            u.Z.isEntitlementFetching(p.FX),
            u.Z.getPrice(p.FX),
            u.Z.getErrored(p.FX),
            u.Z.getEntitlement(p.FX),
          ]),
          { analyticsLocations: M } = (0, c.ZP)([
            o.Z.HD_STREAMING_POTION_MODAL,
          ]),
          F = null != _ && !_.consumed && _.type === j.qc2.DEVELOPER_GIFT;
        i.useEffect(() => {
          null != _ &&
            !1 === _.consumed &&
            _.type !== j.qc2.DEVELOPER_GIFT &&
            (0, d.Zu)(n.id);
        }, [_, n]),
          i.useEffect(
            () => () => {
              (0, d.SN)(p.FX);
            },
            [],
          ),
          i.useEffect(() => {
            !E && null == A && !S && (0, d.Gq)(p.FX);
          }, [E, A, S]),
          i.useEffect(() => {
            !T && !I && (0, d.gA)(p.FX);
          }, [T, I]);
        let P = () => (0, s.closeAllModals)();
        return S
          ? (0, l.jsx)("div", {
              className: b.anomaly,
              children: (0, l.jsxs)("div", {
                className: b.error,
                children: [
                  (0, l.jsx)(s.Image, { src: C, width: 178, height: 190 }),
                  (0, l.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: Z.intl.string(Z.t.sIA0OD),
                  }),
                ],
              }),
            })
          : null == A
            ? (0, l.jsx)("div", {
                className: b.anomaly,
                children: (0, l.jsx)("div", {
                  className: b.spinner,
                  children: (0, l.jsx)(s.Spinner, {}),
                }),
              })
            : (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsxs)("div", {
                    className: b.modal,
                    children: [
                      (0, l.jsx)("img", {
                        className: b.image,
                        src: "https://cdn.discordapp.com/assets/content/f7cb08dc1c9ca86a0c705f26d6e9af2ba2cc1acd4fd51e039417b2936069bc5b.png",
                        alt: Z.intl.string(Z.t.DdigcX),
                      }),
                      (0, l.jsxs)("div", {
                        className: b.body,
                        children: [
                          (0, l.jsxs)("div", {
                            className: b.heading,
                            children: [
                              (0, l.jsx)(s.Heading, {
                                variant: "heading-lg/bold",
                                children: Z.intl.string(Z.t.K04rOD),
                              }),
                              (0, l.jsx)(h.Z, {}),
                            ],
                          }),
                          (0, l.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: Z.intl.string(Z.t.lq40Pz),
                          }),
                          (0, l.jsx)(x.Z, {
                            onClick: () => {},
                            children: (0, l.jsx)(s.Text, {
                              color: "text-link",
                              variant: "text-sm/normal",
                              children: Z.intl.string(Z.t["1wV4qq"]),
                            }),
                          }),
                          (0, l.jsx)(s.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: Z.intl.string(Z.t.qk07Mj),
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", { className: b.divider }),
                      (0, l.jsxs)("div", {
                        className: b.applyingTo,
                        children: [
                          (0, l.jsx)(s.Text, {
                            variant: "eyebrow",
                            children: Z.intl.string(Z.t.tZyXg4),
                          }),
                          (0, l.jsx)(v.Z, { channel: n }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: b.footer,
                    children: [
                      (0, l.jsx)(s.Button, {
                        onClick: () => {
                          (0, s.closeModal)(N);
                        },
                        color: s.Button.Colors.PRIMARY,
                        children: Z.intl.string(Z.t.Avt5KS),
                      }),
                      t
                        ? (0, l.jsx)(s.Button, {
                            onClick: () => {
                              if (F) {
                                (0, d.Zu)(n.id), (0, s.closeAllModals)();
                                return;
                              }
                              (0, f.Z)({
                                skuId: p.FX,
                                analyticsLocations: M,
                                onComplete: P,
                              });
                            },
                            disabled: !t,
                            children: (0, l.jsxs)("div", {
                              className: b.buttonCopy,
                              children: [
                                (0, l.jsx)(s.PotionIcon, {
                                  color: a.Z.colors.INTERACTIVE_ACTIVE,
                                  size: "sm",
                                }),
                                F
                                  ? Z.intl.string(Z.t.sl6Tcn)
                                  : Z.intl.formatToPlainString(Z.t.S9LAdX, {
                                      price: (0, g.T4)(A.amount, A.currency),
                                    }),
                              ],
                            }),
                          })
                        : (0, l.jsx)(s.Tooltip, {
                            text: Z.intl.string(Z.t.Qrh2BQ),
                            children: (e) => {
                              let {
                                onClick: n,
                                onMouseEnter: t,
                                onMouseLeave: i,
                                ...r
                              } = e;
                              return (0, l.jsx)(s.Button, {
                                ...r,
                                disabled: !0,
                                onClick: n,
                                onMouseEnter: t,
                                onMouseLeave: i,
                                children: Z.intl.formatToPlainString(
                                  Z.t.S9LAdX,
                                  { price: (0, g.T4)(A.amount, A.currency) },
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
        a = t(938475),
        s = t(858836);
      function o(e) {
        let { channel: n } = e;
        if (null == n) return null;
        let t = a.ZP.getVoiceStatesForChannel(n).slice(0, 6),
          o = t.map((e, n) => {
            let { user: a } = e;
            return (0, l.jsx)(
              r.O,
              {
                affinity: a,
                applyMask: n !== t.length - 1,
                size: i.AvatarSizes.SIZE_20,
              },
              a.id,
            );
          });
        return (0, l.jsx)("div", { className: s.avatars, children: o });
      }
    },
    82950: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(481060),
        r = t(207126),
        a = t(666956);
      function s(e) {
        let { channel: n } = e;
        return (0, l.jsxs)("div", {
          className: a.channel,
          children: [
            (0, l.jsxs)("div", {
              className: a.channelLeft,
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
//# sourceMappingURL=aa0b76ebd6896d97fa15.js.map
