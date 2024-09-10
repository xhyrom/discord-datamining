"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86590"],
  {
    289823: function (e, i, t) {
      var a = t(735250),
        n = t(470079),
        l = t(120356),
        s = t.n(l),
        r = t(974674),
        c = t(438784),
        d = t(481060),
        o = t(686546),
        u = t(3682),
        A = t(300436);
      let I = {},
        _ = 1 / 4;
      function S(e) {
        let { height: i, fillColor: t } = e;
        return (0, a.jsx)("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: i / 2,
            backgroundColor: t,
            height: i,
            width: i * u.jR,
          },
          children: (0, a.jsx)(c.b, { className: A.dots, dotRadius: i * _ }),
        });
      }
      function E(e) {
        let { isTyping: i, statusCoords: t, status: n } = e,
          l = (0, d.useStatusFillColor)(d.StatusTypes.ONLINE);
        return i
          ? (0, a.jsx)("div", {
              style: { position: "absolute", top: t.y, left: t.x },
              children: (0, a.jsx)(S, { height: t.height, fillColor: l }),
            })
          : null != n
            ? (0, a.jsx)(d.Status, {
                size: t.height,
                status: n,
                style: { position: "absolute", top: t.y, left: t.x },
              })
            : null;
      }
      function f(e) {
        let { src: i, size: t } = e;
        return (0, a.jsx)("img", {
          className: A.circularImage,
          src: i,
          alt: "",
          width: t,
          height: t,
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
      i.Z = function (e) {
        var i, t, l;
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
            frontAvatarSizePx: C,
            backAvatarSizePx: G,
          } = n.useMemo(() => {
            var e;
            let i = "".concat(x, "-").concat(g);
            return null !== (e = I[i]) && void 0 !== e
              ? e
              : (function (e, i, t) {
                  let a = d.AvatarSizeSpecs[e],
                    n = a.size / (u.z3 + u.o),
                    l = n * u.z3,
                    s = n * u.o,
                    c = {
                      statusCoords: (0, r.Vq)(a, d.StatusTypes.ONLINE, !1, i),
                      frontAvatarSizePx: l,
                      backAvatarSizePx: n,
                      frontAvatarOffsetPx: s,
                      frontAvatarCenter: s + l / 2,
                    };
                  return (I[t] = c), c;
                })(S, g, i);
          }, [x, g, S]);
        let y =
          ((i = null != p),
          (t = g),
          (l = S),
          t ? h[l].typing : i ? h[l].status : h[l].default);
        return (0, a.jsxs)("div", {
          style: { width: x, height: x, ...L },
          "aria-label": b["aria-label"],
          "aria-hidden": b["aria-hidden"],
          className: s()(A.container, N),
          children: [
            (0, a.jsxs)(o.ZP, {
              mask: y,
              height: x,
              width: x,
              children: [
                (0, a.jsx)("img", { src: c, alt: "", width: G, height: G }),
                (0, a.jsx)("div", {
                  style: { position: "absolute", top: m, left: m },
                  children: (0, a.jsx)(f, {
                    src: _,
                    size: C,
                    isTyping: g,
                    status: p,
                  }),
                }),
              ],
            }),
            (0, a.jsx)(E, { statusCoords: T, status: p, isTyping: g }),
          ],
        });
      };
    },
    384331: function (e, i, t) {
      t.r(i),
        t.d(i, {
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
      var a = t(735250),
        n = t(470079),
        l = t(442837),
        s = t(481060),
        r = t(700582),
        c = t(933557),
        d = t(266076),
        o = t(810123),
        u = t(592125),
        A = t(430824),
        I = t(158776),
        _ = t(699516),
        S = t(594174),
        E = t(51144),
        f = t(912332),
        h = t(689938),
        g = t(703523);
      function p(e) {
        let { icon: i, label: t } = e;
        return (0, a.jsxs)("div", {
          className: g.failedRow,
          children: [
            i,
            (0, a.jsx)(s.Text, {
              className: g.label,
              variant: "text-md/medium",
              lineClamp: 1,
              children: t,
            }),
          ],
        });
      }
      function L(e) {
        let { channel: i } = e,
          t = (0, c.ZP)(i);
        return (0, a.jsx)(p, {
          icon: (0, a.jsx)(d.Z, {
            "aria-hidden": !0,
            size: s.AvatarSizes.SIZE_32,
            channel: i,
            experimentLocation: "forward-failed-retry-modal",
          }),
          label: t,
        });
      }
      function N(e) {
        let { user: i } = e,
          t = E.ZP.useName(i),
          n = (0, l.e7)([_.Z], () => _.Z.getNickname(i.id)),
          c = (0, l.e7)([I.Z], () => I.Z.getStatus(i.id));
        return (0, a.jsx)(p, {
          icon: (0, a.jsx)(r.Z, {
            "aria-hidden": !0,
            size: s.AvatarSizes.SIZE_32,
            user: i,
            status: c,
          }),
          label: null != n ? n : t,
        });
      }
      function b(e) {
        let { channel: i } = e,
          t = (0, l.e7)([A.Z], () =>
            A.Z.getGuild(null == i ? void 0 : i.guild_id),
          ),
          n = (0, c.ZP)(i);
        return (0, a.jsx)(p, {
          icon: (0, a.jsx)(o.Z, { size: o.E.SMALL_32, guild: t, channel: i }),
          label: n,
        });
      }
      function x(e) {
        let { destination: i } = e,
          { channel: t, user: n } = (0, l.cj)([u.Z, S.default], () => ({
            channel: "channel" === i.type ? u.Z.getChannel(i.id) : null,
            user: "user" === i.type ? S.default.getUser(i.id) : null,
          }));
        if (null == t ? void 0 : t.isGroupDM())
          return (0, a.jsx)(L, { channel: t });
        if (null != n) return (0, a.jsx)(N, { user: n });
        if (null != t) return (0, a.jsx)(b, { channel: t });
        return null;
      }
      function T(e) {
        let {
            messageId: i,
            channelId: t,
            failedDestinations: l,
            forwardOptions: r,
            ...c
          } = e,
          d = n.useCallback(() => {
            (0, f.l8)({
              messageId: i,
              channelId: t,
              source: "retry-modal",
              initialSelectedDestinations: l,
              forwardOptions: r,
            });
          }, [t, l, i, r]);
        return (0, a.jsxs)(s.ConfirmModal, {
          header: h.Z.Messages.MESSAGE_FORWARD_FAILED,
          confirmText: h.Z.Messages.RETRY,
          cancelText: h.Z.Messages.CANCEL,
          confirmButtonColor: s.Button.Colors.BRAND,
          onConfirm: d,
          ...c,
          children: [
            (0, a.jsx)(s.Text, {
              variant: "text-md/medium",
              children: h.Z.Messages.MESSAGE_FORWARD_FAILED_BODY.format({
                count: l.length,
              }),
            }),
            (0, a.jsx)("div", {
              className: g.failedDestinations,
              children: l.map((e, i) => (0, a.jsx)(x, { destination: e }, i)),
            }),
          ],
        });
      }
    },
    93687: function (e, i, t) {
      let a = (0, t(818083).B)({
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
      i.Z = a;
    },
    266076: function (e, i, t) {
      var a = t(735250),
        n = t(470079),
        l = t(481060),
        s = t(43267),
        r = t(93687),
        c = t(785232);
      i.Z = n.memo(function (e) {
        let {
            channel: i,
            size: t,
            facepileSizeOverride: n,
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
        return i.recipients.length >= 2 && S && null == i.icon
          ? (0, a.jsx)(c.Z, {
              "aria-label": _["aria-label"],
              "aria-hidden": _["aria-hidden"],
              className: A,
              recipients: i.recipients,
              size: null != n ? n : t,
              isTyping: o,
              status: u,
            })
          : (0, a.jsx)(l.Avatar, {
              "aria-hidden": _["aria-hidden"],
              "aria-label": _["aria-label"],
              className: A,
              size: t,
              src: (0, s.x)(i, 80, I),
            });
      });
    },
    785232: function (e, i, t) {
      var a = t(735250);
      t(470079);
      var n = t(442837),
        l = t(481060),
        s = t(289823),
        r = t(594174);
      i.Z = function (e) {
        let {
            recipients: i,
            size: t,
            status: c,
            isTyping: d,
            className: o,
            ...u
          } = e,
          A = l.AvatarSizeSpecs[t],
          I = (0, n.Wu)(
            [r.default],
            () =>
              i.slice(0, 2).map((e) => {
                let i = r.default.getUser(e);
                if (null != i) return i.getAvatarURL(void 0, A.size, !1);
              }),
            [i, A.size],
          );
        return (0, a.jsx)(s.Z, {
          "aria-label": u["aria-label"],
          "aria-hidden": u["aria-hidden"],
          backSrc: I[0],
          frontSrc: I[1],
          size: t,
          status: c,
          isTyping: null != d && d,
          className: o,
        });
      };
    },
    810123: function (e, i, t) {
      t.d(i, {
        E: function () {
          return a;
        },
      });
      var a,
        n = t(735250),
        l = t(120356),
        s = t.n(l),
        r = t(468194),
        c = t(471445),
        d = t(686546),
        o = t(664481);
      (a || (a = {})).SMALL_32 = "SMALL_32";
      let u = { SMALL_32: 24 },
        A = { SMALL_32: [13, 11, 10, 10, 10, 10, 10] };
      i.Z = function (e) {
        var i, t, a;
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
          null !== (i = null == E ? void 0 : E.toString()) && void 0 !== i
            ? i
            : null,
        );
        return (0, n.jsxs)("div", {
          role: "img",
          className: l,
          children: [
            (0, n.jsx)(d.ZP, {
              mask: d.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
              children:
                null != g
                  ? (0, n.jsx)("img", {
                      alt: "",
                      src: g,
                      className: o.channelGuildIcon,
                      style: { width: L, height: L },
                    })
                  : (0, n.jsx)("div", {
                      className: s()(o.channelGuildIcon, o.acronym),
                      style: {
                        fontSize:
                          ((t = p),
                          (a = b).length - 1 > t.length
                            ? t[t.length - 1]
                            : t[a.length - 1]),
                        width: L,
                        height: L,
                      },
                      children: b,
                    }),
            }),
            (0, n.jsx)(N, {
              className: s()(o.icon, o.iconWithGuildIcon, I),
              color: "currentColor",
            }),
          ],
        });
      };
    },
    300436: function (e, i, t) {
      e.exports = {
        container: "container_e85446",
        circularImage: "circularImage_e85446",
        dots: "dots_e85446",
      };
    },
    703523: function (e, i, t) {
      e.exports = {
        failedDestinations: "failedDestinations_a575a1",
        failedRow: "failedRow_a575a1",
        label: "label_a575a1",
      };
    },
    664481: function (e, i, t) {
      e.exports = {
        icon: "icon_fcf03e",
        iconWithGuildIcon: "iconWithGuildIcon_fcf03e",
        channelGuildIcon: "channelGuildIcon_fcf03e",
        acronym: "acronym_fcf03e",
      };
    },
  },
]);
//# sourceMappingURL=06520328ba9b2f25c7f6.js.map
