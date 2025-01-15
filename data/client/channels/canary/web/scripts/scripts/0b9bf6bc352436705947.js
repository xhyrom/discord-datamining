"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86590"],
  {
    700582: function (e, t, i) {
      var a = i(200651),
        n = i(192379),
        l = i(481060),
        s = i(372900);
      t.Z = n.memo(function (e) {
        var t, i, r, c;
        let {
            user: d,
            size: o = l.AvatarSizes.SIZE_32,
            animate: u = !1,
            "aria-hidden": A = !1,
            ...I
          } = e,
          S = n.useContext(s.Z);
        return (0, a.jsx)(l.Avatar, {
          src:
            ((t = d),
            (i = (0, l.getAvatarSize)(o)),
            (r = u),
            (c = S),
            t.getAvatarURL(c, i, r)),
          size: o,
          "aria-label": A ? void 0 : d.username,
          "aria-hidden": A,
          ...I,
        });
      });
    },
    289823: function (e, t, i) {
      var a = i(200651),
        n = i(192379),
        l = i(120356),
        s = i.n(l),
        r = i(974674),
        c = i(438784),
        d = i(481060),
        o = i(686546),
        u = i(3682),
        A = i(640453);
      let I = {},
        S = 1 / 4;
      function _(e) {
        let { height: t, fillColor: i } = e;
        return (0, a.jsx)("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: t / 2,
            backgroundColor: i,
            height: t,
            width: t * u.jR,
          },
          children: (0, a.jsx)(c.b, { className: A.dots, dotRadius: t * S }),
        });
      }
      function E(e) {
        let { isTyping: t, statusCoords: i, status: n } = e,
          l = (0, d.useStatusFillColor)(d.StatusTypes.ONLINE);
        return t
          ? (0, a.jsx)("div", {
              style: { position: "absolute", top: i.y, left: i.x },
              children: (0, a.jsx)(_, { height: i.height, fillColor: l }),
            })
          : null != n
            ? (0, a.jsx)(d.Status, {
                size: i.height,
                status: n,
                style: { position: "absolute", top: i.y, left: i.x },
              })
            : null;
      }
      function f(e) {
        let { src: t, size: i } = e;
        return (0, a.jsx)("img", {
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
            frontSrc: S,
            size: _,
            isTyping: g,
            status: p,
            style: L,
            className: N,
            ...b
          } = e,
          { size: x } = d.AvatarSizeSpecs[_],
          {
            statusCoords: m,
            frontAvatarOffsetPx: T,
            frontAvatarSizePx: v,
            backAvatarSizePx: y,
          } = n.useMemo(() => {
            var e;
            let t = "".concat(x, "-").concat(g);
            return null !== (e = I[t]) && void 0 !== e
              ? e
              : (function (e, t, i) {
                  let a = d.AvatarSizeSpecs[e],
                    n = a.size / (u.z3 + u.o),
                    l = n * u.z3,
                    s = n * u.o,
                    c = {
                      statusCoords: (0, r.Vq)(a, d.StatusTypes.ONLINE, !1, t),
                      frontAvatarSizePx: l,
                      backAvatarSizePx: n,
                      frontAvatarOffsetPx: s,
                      frontAvatarCenter: s + l / 2,
                    };
                  return (I[i] = c), c;
                })(_, g, t);
          }, [x, g, _]);
        let C =
          ((t = null != p),
          (i = g),
          (l = _),
          i ? h[l].typing : t ? h[l].status : h[l].default);
        return (0, a.jsxs)("div", {
          style: { width: x, height: x, ...L },
          "aria-label": b["aria-label"],
          "aria-hidden": b["aria-hidden"],
          className: s()(A.container, N),
          children: [
            (0, a.jsxs)(o.ZP, {
              mask: C,
              height: x,
              width: x,
              children: [
                (0, a.jsx)("img", { src: c, alt: "", width: y, height: y }),
                (0, a.jsx)("div", {
                  style: { position: "absolute", top: T, left: T },
                  children: (0, a.jsx)(f, {
                    src: S,
                    size: v,
                    isTyping: g,
                    status: p,
                  }),
                }),
              ],
            }),
            (0, a.jsx)(E, { statusCoords: m, status: p, isTyping: g }),
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
            return m;
          },
        });
      var a = i(200651),
        n = i(192379),
        l = i(442837),
        s = i(481060),
        r = i(700582),
        c = i(933557),
        d = i(266076),
        o = i(810123),
        u = i(592125),
        A = i(430824),
        I = i(158776),
        S = i(699516),
        _ = i(594174),
        E = i(51144),
        f = i(912332),
        h = i(388032),
        g = i(252898);
      function p(e) {
        let { icon: t, label: i } = e;
        return (0, a.jsxs)("div", {
          className: g.failedRow,
          children: [
            t,
            (0, a.jsx)(s.Text, {
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
        return (0, a.jsx)(p, {
          icon: (0, a.jsx)(d.Z, {
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
          n = (0, l.e7)([S.Z], () => S.Z.getNickname(t.id)),
          c = (0, l.e7)([I.Z], () => I.Z.getStatus(t.id));
        return (0, a.jsx)(p, {
          icon: (0, a.jsx)(r.Z, {
            "aria-hidden": !0,
            size: s.AvatarSizes.SIZE_32,
            user: t,
            status: c,
          }),
          label: null != n ? n : i,
        });
      }
      function b(e) {
        let { channel: t } = e,
          i = (0, l.e7)([A.Z], () =>
            A.Z.getGuild(null == t ? void 0 : t.guild_id),
          ),
          n = (0, c.ZP)(t);
        return (0, a.jsx)(p, {
          icon: (0, a.jsx)(o.Z, { size: o.E.SMALL_32, guild: i, channel: t }),
          label: n,
        });
      }
      function x(e) {
        let { destination: t } = e,
          { channel: i, user: n } = (0, l.cj)([u.Z, _.default], () => ({
            channel: "channel" === t.type ? u.Z.getChannel(t.id) : null,
            user: "user" === t.type ? _.default.getUser(t.id) : null,
          }));
        if (null == i ? void 0 : i.isGroupDM())
          return (0, a.jsx)(L, { channel: i });
        if (null != n) return (0, a.jsx)(N, { user: n });
        if (null != i) return (0, a.jsx)(b, { channel: i });
        return null;
      }
      function m(e) {
        let { message: t, failedDestinations: i, forwardOptions: l, ...r } = e,
          c = n.useCallback(() => {
            (0, f.l8)({
              message: t,
              source: "retry-modal",
              initialSelectedDestinations: i,
              forwardOptions: l,
            });
          }, [i, t, l]);
        return (0, a.jsxs)(s.ConfirmModal, {
          header: h.intl.string(h.t["/OPIaG"]),
          confirmText: h.intl.string(h.t["5911LS"]),
          cancelText: h.intl.string(h.t["ETE/oK"]),
          confirmButtonColor: s.Button.Colors.BRAND,
          onConfirm: c,
          ...r,
          children: [
            (0, a.jsx)(s.Text, {
              variant: "text-md/medium",
              children: h.intl.format(h.t.cn9vFR, { count: i.length }),
            }),
            (0, a.jsx)("div", {
              className: g.failedDestinations,
              children: i.map((e, t) => (0, a.jsx)(x, { destination: e }, t)),
            }),
          ],
        });
      }
    },
    93687: function (e, t, i) {
      let a = (0, i(818083).B)({
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
      t.Z = a;
    },
    266076: function (e, t, i) {
      var a = i(200651),
        n = i(192379),
        l = i(481060),
        s = i(43267),
        r = i(93687),
        c = i(785232);
      t.Z = n.memo(function (e) {
        let {
            channel: t,
            size: i,
            facepileSizeOverride: n,
            experimentLocation: d,
            isTyping: o,
            status: u,
            className: A,
            animated: I = !1,
            ...S
          } = e,
          { isFacepileEnabled: _ } = r.Z.useExperiment(
            { location: d },
            { autoTrackExposure: !0 },
          );
        return t.recipients.length >= 2 && _ && null == t.icon
          ? (0, a.jsx)(c.Z, {
              "aria-label": S["aria-label"],
              "aria-hidden": S["aria-hidden"],
              className: A,
              recipients: t.recipients,
              size: null != n ? n : i,
              isTyping: o,
              status: u,
            })
          : (0, a.jsx)(l.Avatar, {
              "aria-hidden": S["aria-hidden"],
              "aria-label": S["aria-label"],
              className: A,
              size: i,
              src: (0, s.x)(t, 80, I),
            });
      });
    },
    785232: function (e, t, i) {
      var a = i(200651);
      i(192379);
      var n = i(442837),
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
          I = (0, n.Wu)(
            [r.default],
            () =>
              t.slice(0, 2).map((e) => {
                let t = r.default.getUser(e);
                if (null != t) return t.getAvatarURL(void 0, A.size, !1);
              }),
            [t, A.size],
          );
        return (0, a.jsx)(s.Z, {
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
          return a;
        },
      });
      var a,
        n = i(200651),
        l = i(120356),
        s = i.n(l),
        r = i(468194),
        c = i(471445),
        d = i(686546),
        o = i(795531);
      (a || (a = {})).SMALL_32 = "SMALL_32";
      let u = { SMALL_32: 24 },
        A = { SMALL_32: [13, 11, 10, 10, 10, 10, 10] };
      t.Z = function (e) {
        var t, i, a;
        let {
          className: l,
          iconClassName: I,
          size: S,
          channel: _,
          guild: E,
          locked: f,
          hasActiveThreads: h,
        } = e;
        if (null == E) return null;
        let g = E.getIconURL(48),
          p = A[S],
          L = u[S],
          N = (0, c.KS)(_, E, { locked: f, hasActiveThreads: h });
        if (null == N) return null;
        let b = (0, r.Zg)(
          null !== (t = null == E ? void 0 : E.toString()) && void 0 !== t
            ? t
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
                          ((i = p),
                          (a = b).length - 1 > i.length
                            ? i[i.length - 1]
                            : i[a.length - 1]),
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
    640453: function (e, t, i) {
      e.exports = {
        container: "container_e85446",
        circularImage: "circularImage_e85446",
        dots: "dots_e85446",
      };
    },
    252898: function (e, t, i) {
      e.exports = {
        failedDestinations: "failedDestinations_a575a1",
        failedRow: "failedRow_a575a1",
        label: "label_a575a1",
      };
    },
    795531: function (e, t, i) {
      e.exports = {
        icon: "icon_fcf03e",
        iconWithGuildIcon: "iconWithGuildIcon_fcf03e",
        channelGuildIcon: "channelGuildIcon_fcf03e",
        acronym: "acronym_fcf03e",
      };
    },
  },
]);
//# sourceMappingURL=0b9bf6bc352436705947.js.map
