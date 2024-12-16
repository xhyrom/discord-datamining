"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85505"],
  {
    444812: function (t) {
      t.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    289823: function (t, e, n) {
      var a = n(200651),
        i = n(192379),
        s = n(120356),
        r = n.n(s),
        o = n(974674),
        l = n(438784),
        d = n(481060),
        u = n(686546),
        _ = n(3682),
        c = n(465669);
      let A = {},
        I = 1 / 4;
      function S(t) {
        let { height: e, fillColor: n } = t;
        return (0, a.jsx)("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: e / 2,
            backgroundColor: n,
            height: e,
            width: e * _.jR,
          },
          children: (0, a.jsx)(l.b, { className: c.dots, dotRadius: e * I }),
        });
      }
      function E(t) {
        let { isTyping: e, statusCoords: n, status: i } = t,
          s = (0, d.useStatusFillColor)(d.StatusTypes.ONLINE);
        return e
          ? (0, a.jsx)("div", {
              style: { position: "absolute", top: n.y, left: n.x },
              children: (0, a.jsx)(S, { height: n.height, fillColor: s }),
            })
          : null != i
            ? (0, a.jsx)(d.Status, {
                size: n.height,
                status: i,
                style: { position: "absolute", top: n.y, left: n.x },
              })
            : null;
      }
      function h(t) {
        let { src: e, size: n } = t;
        return (0, a.jsx)("img", {
          className: c.circularImage,
          src: e,
          alt: "",
          width: n,
          height: n,
        });
      }
      let g = {
        [d.AvatarSizes.SIZE_16]: {
          default: u.QS.DIAGONAL_FACEPILE_16,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_16,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_16,
        },
        [d.AvatarSizes.SIZE_20]: {
          default: u.QS.DIAGONAL_FACEPILE_20,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_20,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_20,
        },
        [d.AvatarSizes.SIZE_24]: {
          default: u.QS.DIAGONAL_FACEPILE_24,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_24,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_24,
        },
        [d.AvatarSizes.SIZE_32]: {
          default: u.QS.DIAGONAL_FACEPILE_32,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_32,
        },
        [d.AvatarSizes.SIZE_40]: {
          default: u.QS.DIAGONAL_FACEPILE_32,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_32,
        },
        [d.AvatarSizes.SIZE_48]: {
          default: u.QS.DIAGONAL_FACEPILE_40,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_40,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_40,
        },
        [d.AvatarSizes.SIZE_56]: {
          default: u.QS.DIAGONAL_FACEPILE_56,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_56,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_56,
        },
        [d.AvatarSizes.SIZE_80]: {
          default: u.QS.DIAGONAL_FACEPILE_80,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_80,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_80,
        },
        [d.AvatarSizes.SIZE_120]: {
          default: u.QS.DIAGONAL_FACEPILE_120,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_120,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_120,
        },
      };
      e.Z = function (t) {
        var e, n, s;
        let {
            backSrc: l,
            frontSrc: I,
            size: S,
            isTyping: N,
            status: m,
            style: f,
            className: L,
            ...x
          } = t,
          { size: p } = d.AvatarSizeSpecs[S],
          {
            statusCoords: C,
            frontAvatarOffsetPx: v,
            frontAvatarSizePx: G,
            backAvatarSizePx: O,
          } = i.useMemo(() => {
            var t;
            let e = "".concat(p, "-").concat(N);
            return null !== (t = A[e]) && void 0 !== t
              ? t
              : (function (t, e, n) {
                  let a = d.AvatarSizeSpecs[t],
                    i = a.size / (_.z3 + _.o),
                    s = i * _.z3,
                    r = i * _.o,
                    l = {
                      statusCoords: (0, o.Vq)(a, d.StatusTypes.ONLINE, !1, e),
                      frontAvatarSizePx: s,
                      backAvatarSizePx: i,
                      frontAvatarOffsetPx: r,
                      frontAvatarCenter: r + s / 2,
                    };
                  return (A[n] = l), l;
                })(S, N, e);
          }, [p, N, S]);
        let T =
          ((e = null != m),
          (n = N),
          (s = S),
          n ? g[s].typing : e ? g[s].status : g[s].default);
        return (0, a.jsxs)("div", {
          style: { width: p, height: p, ...f },
          "aria-label": x["aria-label"],
          "aria-hidden": x["aria-hidden"],
          className: r()(c.container, L),
          children: [
            (0, a.jsxs)(u.ZP, {
              mask: T,
              height: p,
              width: p,
              children: [
                (0, a.jsx)("img", { src: l, alt: "", width: O, height: O }),
                (0, a.jsx)("div", {
                  style: { position: "absolute", top: v, left: v },
                  children: (0, a.jsx)(h, {
                    src: I,
                    size: G,
                    isTyping: N,
                    status: m,
                  }),
                }),
              ],
            }),
            (0, a.jsx)(E, { statusCoords: C, status: m, isTyping: N }),
          ],
        });
      };
    },
    785232: function (t, e, n) {
      var a = n(200651);
      n(192379);
      var i = n(442837),
        s = n(481060),
        r = n(289823),
        o = n(594174);
      e.Z = function (t) {
        let {
            recipients: e,
            size: n,
            status: l,
            isTyping: d,
            className: u,
            ..._
          } = t,
          c = s.AvatarSizeSpecs[n],
          A = (0, i.Wu)(
            [o.default],
            () =>
              e.slice(0, 2).map((t) => {
                let e = o.default.getUser(t);
                if (null != e) return e.getAvatarURL(void 0, c.size, !1);
              }),
            [e, c.size],
          );
        return (0, a.jsx)(r.Z, {
          "aria-label": _["aria-label"],
          "aria-hidden": _["aria-hidden"],
          backSrc: A[0],
          frontSrc: A[1],
          size: n,
          status: l,
          isTyping: null != d && d,
          className: u,
        });
      };
    },
    232837: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return L;
          },
        }),
        n(627341);
      var a = n(200651);
      n(192379);
      var i = n(278074),
        s = n(990547),
        r = n(442837),
        o = n(481060),
        l = n(287734),
        d = n(922611),
        u = n(592125),
        _ = n(699516),
        c = n(594174),
        A = n(626135),
        I = n(33194),
        S = n(807031),
        E = n(343544),
        h = n(14251),
        g = n(110223),
        N = n(981631),
        m = n(388032),
        f = n(633211);
      function L(t) {
        let { channelId: e, userId: n, transitionState: L, onClose: x } = t,
          p = (0, S.KR)({ location: "warning_modal" }),
          C = (0, r.e7)([_.Z], () => _.Z.isBlocked(n)),
          v = (0, d.Do)({ location: "BlockedUserJoinedVoiceChannelModal" }),
          G = (0, r.e7)([u.Z], () => u.Z.getChannel(e));
        if (!p) return null;
        let O = c.default.getUser(n);
        if (null == O) return null;
        let T = [
            {
              icon: v
                ? (0, h.r)([n], null == G ? void 0 : G.guild_id)
                : (0, a.jsx)(o.UserIcon, {}),
              text: v
                ? (0, h.a)([n], 1, null == G ? void 0 : G.guild_id, e)
                : m.intl.formatToPlainString(m.t.w0YvUl, {
                    userName: null == O ? void 0 : O.username,
                  }),
              className: v ? f.row : void 0,
            },
            {
              icon: v
                ? (0, a.jsx)("div", {
                    className: f.icon,
                    children: (0, a.jsx)(o.WarningIcon, {}),
                  })
                : (0, a.jsx)(o.MicrophoneIcon, {}),
              text: m.intl.string(m.t["+4O9nZ"]),
              className: v ? f.row : void 0,
            },
          ],
          j = (0, i.EQ)({ stealthRemediationEnabled: v, isBlocked: C })
            .with({ stealthRemediationEnabled: !0, isBlocked: !0 }, () =>
              (0, a.jsxs)(a.Fragment, {
                children: [
                  m.intl.string(m.t.cpgfFh),
                  (0, a.jsx)("br", {}),
                  m.intl.string(m.t.UKQ4Cg),
                ],
              }),
            )
            .with({ stealthRemediationEnabled: !0, isBlocked: !1 }, () =>
              (0, a.jsxs)(a.Fragment, {
                children: [
                  m.intl.string(m.t["xj3j4+"]),
                  (0, a.jsx)("br", {}),
                  m.intl.string(m.t.wWueRU),
                ],
              }),
            )
            .otherwise(() => m.intl.string(m.t.K8YIgY));
        return (0, a.jsx)(E.Z, {
          headerText: v
            ? m.intl.string(m.t["1/gpFh"])
            : m.intl.string(m.t.LGnmpa),
          secondaryHeaderText: v ? void 0 : m.intl.string(m.t["1/gpFh"]),
          descriptionText: j,
          infoRows: T,
          onDismissAndStay: () => {
            x(),
              (0, I.g6)(e),
              A.default.track(
                N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: g.q.CLICK_TO_STAY,
                  channel_id: e,
                  blocked_user_ids: C ? [n] : [],
                  ignored_user_ids: C ? [] : [n],
                  warning_surface: g.fz.POST_JOIN_MODAL,
                },
              );
          },
          onDismissAndLeave: () => {
            x(),
              l.default.disconnect(),
              A.default.track(
                N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: g.q.CLICK_TO_LEAVE,
                  channel_id: e,
                  blocked_user_ids: C ? [n] : [],
                  ignored_user_ids: C ? [] : [n],
                  warning_surface: g.fz.POST_JOIN_MODAL,
                },
              );
          },
          leaveButtonText: m.intl.string(m.t["Y56/oK"]),
          stayButtonText: m.intl.string(m.t["Z+/hfX"]),
          transitionState: L,
          onClose: x,
          impression: {
            impressionName:
              s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
              channel_id: e,
              blocked_user_ids: C ? [n] : [],
              ignored_user_ids: C ? [] : [n],
              warning_surface: g.fz.POST_JOIN_MODAL,
            },
          },
        });
      }
    },
    343544: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return c;
        },
      });
      var a = n(200651),
        i = n(192379),
        s = n(120356),
        r = n.n(s),
        o = n(481060),
        l = n(511010),
        d = n(922611),
        u = n(786109),
        _ = n(444812);
      function c(t) {
        let {
            headerText: e,
            secondaryHeaderText: n,
            descriptionText: s,
            infoRows: c,
            onDismissAndStay: A,
            onDismissAndLeave: I,
            leaveButtonText: S,
            stayButtonText: E,
            transitionState: h,
            impression: g,
          } = t,
          N = (0, d.Do)({ location: "blocked_user_warning_modal" });
        return (0, a.jsxs)(o.ModalRoot, {
          transitionState: h,
          impression: g,
          children: [
            (0, a.jsx)("img", { alt: "", className: u.headerImage, src: _ }),
            (0, a.jsxs)(o.ModalHeader, {
              separator: !1,
              className: u.header,
              children: [
                (0, a.jsxs)(o.Heading, {
                  variant: N ? "heading-xl/bold" : "heading-lg/bold",
                  color: N ? "header-primary" : void 0,
                  className: u.title,
                  children: [
                    e,
                    null != n &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("br", {}), n],
                      }),
                  ],
                }),
                null != s &&
                  (0, a.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: s,
                  }),
              ],
            }),
            (0, a.jsxs)(o.ModalContent, {
              className: u.content,
              children: [
                (0, a.jsx)("div", {
                  className: u.infoGroup,
                  children: c.map((t, e) =>
                    (0, a.jsxs)(
                      i.Fragment,
                      {
                        children: [
                          (0, a.jsxs)("div", {
                            className: r()(u.infoRow, t.className),
                            children: [
                              t.icon,
                              (0, a.jsx)(o.Text, {
                                variant: "text-md/medium",
                                children: t.text,
                              }),
                            ],
                          }),
                          e < c.length - 1 && (0, a.jsx)(l.Z, {}),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
                (0, a.jsxs)("div", {
                  className: u.buttonGroup,
                  children: [
                    (0, a.jsx)(o.Button, {
                      color: o.Button.Colors.PRIMARY,
                      onClick: A,
                      children: E,
                    }),
                    (0, a.jsx)(o.Button, {
                      color: o.Button.Colors.BRAND,
                      size: o.Button.Sizes.MEDIUM,
                      onClick: I,
                      className: u.leave,
                      children: S,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    14251: function (t, e, n) {
      n.d(e, {
        a: function () {
          return _;
        },
        r: function () {
          return u;
        },
      }),
        n(47120);
      var a = n(200651),
        i = n(481060),
        s = n(785232),
        r = n(594174),
        o = n(5192),
        l = n(388032),
        d = n(762471);
      let u = (t, e) => {
          if (1 === t.length) {
            let n = r.default.getUser(t[0]);
            return null != n
              ? (0, a.jsx)(i.Avatar, {
                  src: n.getAvatarURL(e, 32),
                  size: i.AvatarSizes.SIZE_32,
                  "aria-hidden": !0,
                })
              : (0, a.jsx)(i.UserIcon, {});
          }
          return (0, a.jsx)(s.Z, {
            recipients: t,
            size: i.AvatarSizes.SIZE_32,
          });
        },
        _ = (t, e, n, s) => {
          let u = [...t].map((t) => r.default.getUser(t)),
            _ = (t) =>
              (0, a.jsx)(i.Text, {
                variant: "text-md/semibold",
                className: d.username,
                children: o.ZP.getName(n, s, t),
              });
          return e >= 4
            ? l.intl.format(l.t.qfo6KS, {
                usernameHook1: () => _(u[0]),
                usernameHook2: () => _(u[1]),
                numberOfOtherUsers: e - t.length,
              })
            : 3 === e
              ? l.intl.format(l.t["67ZE+/"], {
                  usernameHook1: () => _(u[0]),
                  usernameHook2: () => _(u[1]),
                })
              : 2 === e
                ? l.intl.format(l.t.veV4IC, {
                    usernameHook1: () => _(u[0]),
                    usernameHook2: () => _(u[1]),
                  })
                : l.intl.format(l.t["4WHCtr"], { usernameHook: () => _(u[0]) });
        };
    },
    465669: function (t, e, n) {
      t.exports = {
        container: "container_e85446",
        circularImage: "circularImage_e85446",
        dots: "dots_e85446",
      };
    },
    633211: function (t, e, n) {
      t.exports = { row: "row_dd8598", icon: "icon_dd8598" };
    },
    762471: function (t, e, n) {
      t.exports = {
        row: "row_eb2d7d",
        icon: "icon_eb2d7d",
        username: "username_eb2d7d",
      };
    },
    786109: function (t, e, n) {
      t.exports = {
        header: "header_a70452",
        headerImage: "headerImage_a70452",
        title: "title_a70452",
        content: "content_a70452",
        buttonGroup: "buttonGroup_a70452",
        leave: "leave_a70452",
        infoGroup: "infoGroup_a70452",
        infoRow: "infoRow_a70452",
      };
    },
  },
]);
//# sourceMappingURL=18a0ac31583e64fd1972.js.map
