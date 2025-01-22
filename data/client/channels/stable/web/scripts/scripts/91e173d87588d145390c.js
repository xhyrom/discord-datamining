"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86590"],
  {
    289823: function (e, t, i) {
      var n = i(200651),
        a = i(192379),
        l = i(120356),
        s = i.n(l),
        r = i(974674),
        c = i(438784),
        d = i(481060),
        o = i(686546),
        u = i(3682),
        A = i(465669);
      let I = {},
        _ = 1 / 4;
      function S(e) {
        let { height: t, fillColor: i } = e;
        return (0, n.jsx)("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: t / 2,
            backgroundColor: i,
            height: t,
            width: t * u.jR,
          },
          children: (0, n.jsx)(c.b, { className: A.dots, dotRadius: t * _ }),
        });
      }
      function E(e) {
        let { isTyping: t, statusCoords: i, status: a } = e,
          l = (0, d.useStatusFillColor)(d.StatusTypes.ONLINE);
        return t
          ? (0, n.jsx)("div", {
              style: { position: "absolute", top: i.y, left: i.x },
              children: (0, n.jsx)(S, { height: i.height, fillColor: l }),
            })
          : null != a
            ? (0, n.jsx)(d.Status, {
                size: i.height,
                status: a,
                style: { position: "absolute", top: i.y, left: i.x },
              })
            : null;
      }
      function f(e) {
        let { src: t, size: i } = e;
        return (0, n.jsx)("img", {
          className: A.circularImage,
          src: t,
          alt: "",
          width: i,
          height: i,
        });
      }
      let h = {
        [d.AvatarSizes.SIZE_16]: {
          default: o.QS.DIAGONAL_FACEPILE_16,
          typing: o.QS.DIAGONAL_FACEPILE_TYPING_16,
          status: o.QS.DIAGONAL_FACEPILE_STATUS_16,
        },
        [d.AvatarSizes.SIZE_20]: {
          default: o.QS.DIAGONAL_FACEPILE_20,
          typing: o.QS.DIAGONAL_FACEPILE_TYPING_20,
          status: o.QS.DIAGONAL_FACEPILE_STATUS_20,
        },
        [d.AvatarSizes.SIZE_24]: {
          default: o.QS.DIAGONAL_FACEPILE_24,
          typing: o.QS.DIAGONAL_FACEPILE_TYPING_24,
          status: o.QS.DIAGONAL_FACEPILE_STATUS_24,
        },
        [d.AvatarSizes.SIZE_32]: {
          default: o.QS.DIAGONAL_FACEPILE_32,
          typing: o.QS.DIAGONAL_FACEPILE_TYPING_32,
          status: o.QS.DIAGONAL_FACEPILE_STATUS_32,
        },
        [d.AvatarSizes.SIZE_40]: {
          default: o.QS.DIAGONAL_FACEPILE_32,
          typing: o.QS.DIAGONAL_FACEPILE_TYPING_32,
          status: o.QS.DIAGONAL_FACEPILE_STATUS_32,
        },
        [d.AvatarSizes.SIZE_48]: {
          default: o.QS.DIAGONAL_FACEPILE_40,
          typing: o.QS.DIAGONAL_FACEPILE_TYPING_40,
          status: o.QS.DIAGONAL_FACEPILE_STATUS_40,
        },
        [d.AvatarSizes.SIZE_56]: {
          default: o.QS.DIAGONAL_FACEPILE_56,
          typing: o.QS.DIAGONAL_FACEPILE_TYPING_56,
          status: o.QS.DIAGONAL_FACEPILE_STATUS_56,
        },
        [d.AvatarSizes.SIZE_80]: {
          default: o.QS.DIAGONAL_FACEPILE_80,
          typing: o.QS.DIAGONAL_FACEPILE_TYPING_80,
          status: o.QS.DIAGONAL_FACEPILE_STATUS_80,
        },
        [d.AvatarSizes.SIZE_120]: {
          default: o.QS.DIAGONAL_FACEPILE_120,
          typing: o.QS.DIAGONAL_FACEPILE_TYPING_120,
          status: o.QS.DIAGONAL_FACEPILE_STATUS_120,
        },
      };
      t.Z = function (e) {
        var t, i, l;
        let {
            backSrc: c,
            frontSrc: _,
            size: S,
            isTyping: g,
            status: p,
            style: L,
            className: N,
            ...b
          } = e,
          { size: x } = d.AvatarSizeSpecs[S],
          {
            statusCoords: T,
            frontAvatarOffsetPx: m,
            frontAvatarSizePx: y,
            backAvatarSizePx: G,
          } = a.useMemo(() => {
            var e;
            let t = "".concat(x, "-").concat(g);
            return null !== (e = I[t]) && void 0 !== e
              ? e
              : (function (e, t, i) {
                  let n = d.AvatarSizeSpecs[e],
                    a = n.size / (u.z3 + u.o),
                    l = a * u.z3,
                    s = a * u.o,
                    c = {
                      statusCoords: (0, r.Vq)(n, d.StatusTypes.ONLINE, !1, t),
                      frontAvatarSizePx: l,
                      backAvatarSizePx: a,
                      frontAvatarOffsetPx: s,
                      frontAvatarCenter: s + l / 2,
                    };
                  return (I[i] = c), c;
                })(S, g, t);
          }, [x, g, S]);
        let C =
          ((t = null != p),
          (i = g),
          (l = S),
          i ? h[l].typing : t ? h[l].status : h[l].default);
        return (0, n.jsxs)("div", {
          style: { width: x, height: x, ...L },
          "aria-label": b["aria-label"],
          "aria-hidden": b["aria-hidden"],
          className: s()(A.container, N),
          children: [
            (0, n.jsxs)(o.ZP, {
              mask: C,
              height: x,
              width: x,
              children: [
                (0, n.jsx)("img", { src: c, alt: "", width: G, height: G }),
                (0, n.jsx)("div", {
                  style: { position: "absolute", top: m, left: m },
                  children: (0, n.jsx)(f, {
                    src: _,
                    size: y,
                    isTyping: g,
                    status: p,
                  }),
                }),
              ],
            }),
            (0, n.jsx)(E, { statusCoords: T, status: p, isTyping: g }),
          ],
        });
      };
    },
    384331: function (e, t, i) {
      i.r(t),
        i.d(t, {
          FailedChannelRow: function () {
            return b;
          },
          FailedGroupDMRow: function () {
            return L;
          },
          FailedUserRow: function () {
            return N;
          },
          ForwardFailedAlertModal: function () {
            return T;
          },
        });
      var n = i(200651),
        a = i(192379),
        l = i(442837),
        s = i(481060),
        r = i(700582),
        c = i(933557),
        d = i(266076),
        o = i(810123),
        u = i(592125),
        A = i(430824),
        I = i(158776),
        _ = i(699516),
        S = i(594174),
        E = i(51144),
        f = i(912332),
        h = i(388032),
        g = i(917858);
      function p(e) {
        let { icon: t, label: i } = e;
        return (0, n.jsxs)("div", {
          className: g.failedRow,
          children: [
            t,
            (0, n.jsx)(s.Text, {
              className: g.label,
              variant: "text-md/medium",
              lineClamp: 1,
              children: i,
            }),
          ],
        });
      }
      function L(e) {
        let { channel: t } = e,
          i = (0, c.ZP)(t);
        return (0, n.jsx)(p, {
          icon: (0, n.jsx)(d.Z, {
            "aria-hidden": !0,
            size: s.AvatarSizes.SIZE_32,
            channel: t,
            experimentLocation: "forward-failed-retry-modal",
          }),
          label: i,
        });
      }
      function N(e) {
        let { user: t } = e,
          i = E.ZP.useName(t),
          a = (0, l.e7)([_.Z], () => _.Z.getNickname(t.id)),
          c = (0, l.e7)([I.Z], () => I.Z.getStatus(t.id));
        return (0, n.jsx)(p, {
          icon: (0, n.jsx)(r.Z, {
            "aria-hidden": !0,
            size: s.AvatarSizes.SIZE_32,
            user: t,
            status: c,
          }),
          label: null != a ? a : i,
        });
      }
      function b(e) {
        let { channel: t } = e,
          i = (0, l.e7)([A.Z], () =>
            A.Z.getGuild(null == t ? void 0 : t.guild_id),
          ),
          a = (0, c.ZP)(t);
        return (0, n.jsx)(p, {
          icon: (0, n.jsx)(o.Z, { size: o.E.SMALL_32, guild: i, channel: t }),
          label: a,
        });
      }
      function x(e) {
        let { destination: t } = e,
          { channel: i, user: a } = (0, l.cj)([u.Z, S.default], () => ({
            channel: "channel" === t.type ? u.Z.getChannel(t.id) : null,
            user: "user" === t.type ? S.default.getUser(t.id) : null,
          }));
        if (null == i ? void 0 : i.isGroupDM())
          return (0, n.jsx)(L, { channel: i });
        if (null != a) return (0, n.jsx)(N, { user: a });
        if (null != i) return (0, n.jsx)(b, { channel: i });
        return null;
      }
      function T(e) {
        let { message: t, failedDestinations: i, forwardOptions: l, ...r } = e,
          c = a.useCallback(() => {
            (0, f.l8)({
              message: t,
              source: "retry-modal",
              initialSelectedDestinations: i,
              forwardOptions: l,
            });
          }, [i, t, l]);
        return (0, n.jsxs)(s.ConfirmModal, {
          header: h.intl.string(h.t["/OPIaG"]),
          confirmText: h.intl.string(h.t["5911LS"]),
          cancelText: h.intl.string(h.t["ETE/oK"]),
          confirmButtonColor: s.Button.Colors.BRAND,
          onConfirm: c,
          ...r,
          children: [
            (0, n.jsx)(s.Text, {
              variant: "text-md/medium",
              children: h.intl.format(h.t.cn9vFR, { count: i.length }),
            }),
            (0, n.jsx)("div", {
              className: g.failedDestinations,
              children: i.map((e, t) => (0, n.jsx)(x, { destination: e }, t)),
            }),
          ],
        });
      }
    },
    93687: function (e, t, i) {
      let n = (0, i(818083).B)({
        kind: "user",
        id: "2024-04_gdm_presence",
        label: "Group DM Presence",
        defaultConfig: {
          isFacepileEnabled: !1,
          isStatusIndicatorEnabled: !1,
          isTypingIndicatorEnabled: !1,
        },
        treatments: [
          {
            id: 1,
            label: "Status Indicator Only",
            config: {
              isFacepileEnabled: !1,
              isStatusIndicatorEnabled: !0,
              isTypingIndicatorEnabled: !1,
            },
          },
          {
            id: 2,
            label: "Typing Indicator Only",
            config: {
              isFacepileEnabled: !1,
              isStatusIndicatorEnabled: !1,
              isTypingIndicatorEnabled: !0,
            },
          },
          {
            id: 3,
            label: "Status Indicator + Typing Indicator",
            config: {
              isFacepileEnabled: !1,
              isStatusIndicatorEnabled: !0,
              isTypingIndicatorEnabled: !0,
            },
          },
          {
            id: 4,
            label: "Facepile Only",
            config: {
              isFacepileEnabled: !0,
              isStatusIndicatorEnabled: !1,
              isTypingIndicatorEnabled: !1,
            },
          },
          {
            id: 5,
            label: "Facepile + Status Indicator",
            config: {
              isFacepileEnabled: !0,
              isStatusIndicatorEnabled: !0,
              isTypingIndicatorEnabled: !1,
            },
          },
          {
            id: 6,
            label: "Facepile + Typing Indicator",
            config: {
              isFacepileEnabled: !0,
              isStatusIndicatorEnabled: !1,
              isTypingIndicatorEnabled: !0,
            },
          },
          {
            id: 7,
            label: "Facepile + Typing Indicator + Status Indicator",
            config: {
              isFacepileEnabled: !0,
              isStatusIndicatorEnabled: !0,
              isTypingIndicatorEnabled: !0,
            },
          },
        ],
      });
      t.Z = n;
    },
    266076: function (e, t, i) {
      var n = i(200651),
        a = i(192379),
        l = i(481060),
        s = i(43267),
        r = i(93687),
        c = i(785232);
      t.Z = a.memo(function (e) {
        let {
            channel: t,
            size: i,
            facepileSizeOverride: a,
            experimentLocation: d,
            isTyping: o,
            status: u,
            className: A,
            animated: I = !1,
            ..._
          } = e,
          { isFacepileEnabled: S } = r.Z.useExperiment(
            { location: d },
            { autoTrackExposure: !0 },
          );
        return t.recipients.length >= 2 && S && null == t.icon
          ? (0, n.jsx)(c.Z, {
              "aria-label": _["aria-label"],
              "aria-hidden": _["aria-hidden"],
              className: A,
              recipients: t.recipients,
              size: null != a ? a : i,
              isTyping: o,
              status: u,
            })
          : (0, n.jsx)(l.Avatar, {
              "aria-hidden": _["aria-hidden"],
              "aria-label": _["aria-label"],
              className: A,
              size: i,
              src: (0, s.x)(t, 80, I),
            });
      });
    },
    785232: function (e, t, i) {
      var n = i(200651);
      i(192379);
      var a = i(442837),
        l = i(481060),
        s = i(289823),
        r = i(594174);
      t.Z = function (e) {
        let {
            recipients: t,
            size: i,
            status: c,
            isTyping: d,
            className: o,
            ...u
          } = e,
          A = l.AvatarSizeSpecs[i],
          I = (0, a.Wu)(
            [r.default],
            () =>
              t.slice(0, 2).map((e) => {
                let t = r.default.getUser(e);
                if (null != t) return t.getAvatarURL(void 0, A.size, !1);
              }),
            [t, A.size],
          );
        return (0, n.jsx)(s.Z, {
          "aria-label": u["aria-label"],
          "aria-hidden": u["aria-hidden"],
          backSrc: I[0],
          frontSrc: I[1],
          size: i,
          status: c,
          isTyping: null != d && d,
          className: o,
        });
      };
    },
    810123: function (e, t, i) {
      i.d(t, {
        E: function () {
          return n;
        },
      });
      var n,
        a = i(200651),
        l = i(120356),
        s = i.n(l),
        r = i(468194),
        c = i(471445),
        d = i(686546),
        o = i(311533);
      (n || (n = {})).SMALL_32 = "SMALL_32";
      let u = { SMALL_32: 24 },
        A = { SMALL_32: [13, 11, 10, 10, 10, 10, 10] };
      t.Z = function (e) {
        var t, i, n;
        let {
          className: l,
          iconClassName: I,
          size: _,
          channel: S,
          guild: E,
          locked: f,
          hasActiveThreads: h,
        } = e;
        if (null == E) return null;
        let g = E.getIconURL(48),
          p = A[_],
          L = u[_],
          N = (0, c.KS)(S, E, { locked: f, hasActiveThreads: h });
        if (null == N) return null;
        let b = (0, r.Zg)(
          null !== (t = null == E ? void 0 : E.toString()) && void 0 !== t
            ? t
            : null,
        );
        return (0, a.jsxs)("div", {
          role: "img",
          className: l,
          children: [
            (0, a.jsx)(d.ZP, {
              mask: d.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
              children:
                null != g
                  ? (0, a.jsx)("img", {
                      alt: "",
                      src: g,
                      className: o.channelGuildIcon,
                      style: { width: L, height: L },
                    })
                  : (0, a.jsx)("div", {
                      className: s()(o.channelGuildIcon, o.acronym),
                      style: {
                        fontSize:
                          ((i = p),
                          (n = b).length - 1 > i.length
                            ? i[i.length - 1]
                            : i[n.length - 1]),
                        width: L,
                        height: L,
                      },
                      children: b,
                    }),
            }),
            (0, a.jsx)(N, {
              className: s()(o.icon, o.iconWithGuildIcon, I),
              color: "currentColor",
            }),
          ],
        });
      };
    },
    465669: function (e, t, i) {
      e.exports = {
        container: "container_e85446",
        circularImage: "circularImage_e85446",
        dots: "dots_e85446",
      };
    },
    917858: function (e, t, i) {
      e.exports = {
        failedDestinations: "failedDestinations_a575a1",
        failedRow: "failedRow_a575a1",
        label: "label_a575a1",
      };
    },
    311533: function (e, t, i) {
      e.exports = {
        icon: "icon_fcf03e",
        iconWithGuildIcon: "iconWithGuildIcon_fcf03e",
        channelGuildIcon: "channelGuildIcon_fcf03e",
        acronym: "acronym_fcf03e",
      };
    },
  },
]);
//# sourceMappingURL=91e173d87588d145390c.js.map
