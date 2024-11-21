"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12858"],
  {
    444812: function (t) {
      t.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    289823: function (t, e, i) {
      var n = i(200651),
        s = i(192379),
        a = i(120356),
        r = i.n(a),
        l = i(974674),
        o = i(438784),
        c = i(481060),
        _ = i(686546),
        u = i(3682),
        d = i(300436);
      let A = {},
        I = 1 / 4;
      function m(t) {
        let { height: e, fillColor: i } = t;
        return (0, n.jsx)("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: e / 2,
            backgroundColor: i,
            height: e,
            width: e * u.jR,
          },
          children: (0, n.jsx)(o.b, { className: d.dots, dotRadius: e * I }),
        });
      }
      function S(t) {
        let { isTyping: e, statusCoords: i, status: s } = t,
          a = (0, c.useStatusFillColor)(c.StatusTypes.ONLINE);
        return e
          ? (0, n.jsx)("div", {
              style: { position: "absolute", top: i.y, left: i.x },
              children: (0, n.jsx)(m, { height: i.height, fillColor: a }),
            })
          : null != s
            ? (0, n.jsx)(c.Status, {
                size: i.height,
                status: s,
                style: { position: "absolute", top: i.y, left: i.x },
              })
            : null;
      }
      function g(t) {
        let { src: e, size: i } = t;
        return (0, n.jsx)("img", {
          className: d.circularImage,
          src: e,
          alt: "",
          width: i,
          height: i,
        });
      }
      let E = {
        [c.AvatarSizes.SIZE_16]: {
          default: _.QS.DIAGONAL_FACEPILE_16,
          typing: _.QS.DIAGONAL_FACEPILE_TYPING_16,
          status: _.QS.DIAGONAL_FACEPILE_STATUS_16,
        },
        [c.AvatarSizes.SIZE_20]: {
          default: _.QS.DIAGONAL_FACEPILE_20,
          typing: _.QS.DIAGONAL_FACEPILE_TYPING_20,
          status: _.QS.DIAGONAL_FACEPILE_STATUS_20,
        },
        [c.AvatarSizes.SIZE_24]: {
          default: _.QS.DIAGONAL_FACEPILE_24,
          typing: _.QS.DIAGONAL_FACEPILE_TYPING_24,
          status: _.QS.DIAGONAL_FACEPILE_STATUS_24,
        },
        [c.AvatarSizes.SIZE_32]: {
          default: _.QS.DIAGONAL_FACEPILE_32,
          typing: _.QS.DIAGONAL_FACEPILE_TYPING_32,
          status: _.QS.DIAGONAL_FACEPILE_STATUS_32,
        },
        [c.AvatarSizes.SIZE_40]: {
          default: _.QS.DIAGONAL_FACEPILE_32,
          typing: _.QS.DIAGONAL_FACEPILE_TYPING_32,
          status: _.QS.DIAGONAL_FACEPILE_STATUS_32,
        },
        [c.AvatarSizes.SIZE_48]: {
          default: _.QS.DIAGONAL_FACEPILE_40,
          typing: _.QS.DIAGONAL_FACEPILE_TYPING_40,
          status: _.QS.DIAGONAL_FACEPILE_STATUS_40,
        },
        [c.AvatarSizes.SIZE_56]: {
          default: _.QS.DIAGONAL_FACEPILE_56,
          typing: _.QS.DIAGONAL_FACEPILE_TYPING_56,
          status: _.QS.DIAGONAL_FACEPILE_STATUS_56,
        },
        [c.AvatarSizes.SIZE_80]: {
          default: _.QS.DIAGONAL_FACEPILE_80,
          typing: _.QS.DIAGONAL_FACEPILE_TYPING_80,
          status: _.QS.DIAGONAL_FACEPILE_STATUS_80,
        },
        [c.AvatarSizes.SIZE_120]: {
          default: _.QS.DIAGONAL_FACEPILE_120,
          typing: _.QS.DIAGONAL_FACEPILE_TYPING_120,
          status: _.QS.DIAGONAL_FACEPILE_STATUS_120,
        },
      };
      e.Z = function (t) {
        var e, i, a;
        let {
            backSrc: o,
            frontSrc: I,
            size: m,
            isTyping: N,
            status: h,
            style: f,
            className: x,
            ...L
          } = t,
          { size: p } = c.AvatarSizeSpecs[m],
          {
            statusCoords: v,
            frontAvatarOffsetPx: P,
            frontAvatarSizePx: C,
            backAvatarSizePx: j,
          } = s.useMemo(() => {
            var t;
            let e = "".concat(p, "-").concat(N);
            return null !== (t = A[e]) && void 0 !== t
              ? t
              : (function (t, e, i) {
                  let n = c.AvatarSizeSpecs[t],
                    s = n.size / (u.z3 + u.o),
                    a = s * u.z3,
                    r = s * u.o,
                    o = {
                      statusCoords: (0, l.Vq)(n, c.StatusTypes.ONLINE, !1, e),
                      frontAvatarSizePx: a,
                      backAvatarSizePx: s,
                      frontAvatarOffsetPx: r,
                      frontAvatarCenter: r + a / 2,
                    };
                  return (A[i] = o), o;
                })(m, N, e);
          }, [p, N, m]);
        let T =
          ((e = null != h),
          (i = N),
          (a = m),
          i ? E[a].typing : e ? E[a].status : E[a].default);
        return (0, n.jsxs)("div", {
          style: { width: p, height: p, ...f },
          "aria-label": L["aria-label"],
          "aria-hidden": L["aria-hidden"],
          className: r()(d.container, x),
          children: [
            (0, n.jsxs)(_.ZP, {
              mask: T,
              height: p,
              width: p,
              children: [
                (0, n.jsx)("img", { src: o, alt: "", width: j, height: j }),
                (0, n.jsx)("div", {
                  style: { position: "absolute", top: P, left: P },
                  children: (0, n.jsx)(g, {
                    src: I,
                    size: C,
                    isTyping: N,
                    status: h,
                  }),
                }),
              ],
            }),
            (0, n.jsx)(S, { statusCoords: v, status: h, isTyping: N }),
          ],
        });
      };
    },
    785232: function (t, e, i) {
      var n = i(200651);
      i(192379);
      var s = i(442837),
        a = i(481060),
        r = i(289823),
        l = i(594174);
      e.Z = function (t) {
        let {
            recipients: e,
            size: i,
            status: o,
            isTyping: c,
            className: _,
            ...u
          } = t,
          d = a.AvatarSizeSpecs[i],
          A = (0, s.Wu)(
            [l.default],
            () =>
              e.slice(0, 2).map((t) => {
                let e = l.default.getUser(t);
                if (null != e) return e.getAvatarURL(void 0, d.size, !1);
              }),
            [e, d.size],
          );
        return (0, n.jsx)(r.Z, {
          "aria-label": u["aria-label"],
          "aria-hidden": u["aria-hidden"],
          backSrc: A[0],
          frontSrc: A[1],
          size: i,
          status: o,
          isTyping: null != c && c,
          className: _,
        });
      };
    },
    404339: function (t, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return p;
          },
        }),
        i(47120),
        i(733860);
      var n = i(200651);
      i(192379);
      var s = i(990547),
        a = i(481060),
        r = i(785232),
        l = i(922611),
        o = i(592125),
        c = i(594174),
        _ = i(626135),
        u = i(5192),
        d = i(33194),
        A = i(807031),
        I = i(343544),
        m = i(110223),
        S = i(981631),
        g = i(388032),
        E = i(961929);
      let N = (t) => {
          let { multipleBlockedUsers: e } = t;
          return (0, l.Do)({ location: "blocked_user_in_voice_channel_header" })
            ? g.intl.string(g.t.zPUmzc)
            : e
              ? g.intl.string(g.t.aJRlSU)
              : g.intl.string(g.t.rlBMub);
        },
        h = (t) => {
          let { numOfBlockedUsers: e, numOfIgnoredUsers: i } = t;
          if (!(0, l.Do)({ location: "blocked_user_in_voice_channel_header" }))
            return g.intl.string(g.t.K8YIgY);
          let s = e > 0,
            a = i > 0;
          return s && a
            ? (0, n.jsxs)(n.Fragment, {
                children: [
                  g.intl.string(g.t.aTORmJ),
                  (0, n.jsx)("br", {}),
                  g.intl.string(g.t.LXFz19),
                ],
              })
            : s
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    g.intl.format(g.t["J/ZBu7"], { n: e }),
                    (0, n.jsx)("br", {}),
                    g.intl.string(g.t.tFvYm5),
                  ],
                })
              : a
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      g.intl.format(g.t["8mtcq6"], { n: i }),
                      (0, n.jsx)("br", {}),
                      g.intl.string(g.t.Z21Rp6),
                    ],
                  })
                : null;
        },
        f = (t, e, i, n) => {
          let s = [...t].map((t) => c.default.getUser(t));
          return e >= 4
            ? g.intl.formatToPlainString(g.t.RFVQV1, {
                username1: u.ZP.getName(i, n, s[0]),
                username2: u.ZP.getName(i, n, s[1]),
                numberOfOtherUsers: e - t.length,
              })
            : 3 === e
              ? g.intl.formatToPlainString(g.t.UdvSVF, {
                  username1: u.ZP.getName(i, n, s[0]),
                  username2: u.ZP.getName(i, n, s[1]),
                })
              : 2 === e
                ? g.intl.formatToPlainString(g.t.hqmVbm, {
                    username1: u.ZP.getName(i, n, s[0]),
                    username2: u.ZP.getName(i, n, s[1]),
                  })
                : g.intl.formatToPlainString(g.t.V5mxhY, {
                    username: u.ZP.getName(i, n, s[0]),
                  });
        },
        x = (t, e) => {
          if (1 === t.length) {
            let i = c.default.getUser(t[0]);
            return null != i
              ? (0, n.jsx)(a.Avatar, {
                  src: i.getAvatarURL(e, 32),
                  size: a.AvatarSizes.SIZE_32,
                  "aria-hidden": !0,
                })
              : (0, n.jsx)(a.UserIcon, {});
          }
          return (0, n.jsx)(r.Z, {
            recipients: t,
            size: a.AvatarSizes.SIZE_32,
          });
        },
        L = (t) => {
          let {
              channelId: e,
              blockedUserIds: i,
              ignoredUserIds: s,
              isStealthRemediationEnabled: l,
            } = t,
            _ = i.size > 1;
          if (!l)
            return [
              {
                icon: _
                  ? (0, n.jsx)(a.GroupIcon, {})
                  : (0, n.jsx)(a.UserIcon, {}),
                text: _
                  ? g.intl.formatToPlainString(g.t.Zqlt5e, {
                      blockedUserCount: i.size,
                    })
                  : g.intl.formatToPlainString(g.t.V0aCFx, {
                      userName: c.default.getUser([...i][0]),
                    }),
              },
              {
                icon: (0, n.jsx)(a.MicrophoneIcon, {}),
                text: g.intl.string(g.t["7jN3FB"]),
              },
            ];
          let u = o.Z.getChannel(e),
            d = i.size > 0,
            A = s.size > 0,
            I = [
              {
                icon: (0, n.jsx)("div", {
                  className: E.icon,
                  children: (0, n.jsx)(a.WarningIcon, {}),
                }),
                text: g.intl.string(g.t["7jN3FB"]),
                className: E.row,
              },
            ];
          if (d && A) {
            let t = [...i, ...s].slice(0, 2);
            I.unshift({
              icon: (0, n.jsx)("div", {
                className: E.icon,
                children: (0, n.jsx)(r.Z, {
                  recipients: t,
                  size: a.AvatarSizes.SIZE_32,
                }),
              }),
              text: g.intl.string(g.t.aTORmJ),
              className: E.row,
            });
          } else {
            let t = d ? [...i].slice(0, 2) : [...s].slice(0, 2),
              a = d ? i.size : s.size;
            I.unshift({
              icon: (0, n.jsx)("div", {
                className: E.icon,
                children: x(t, null == u ? void 0 : u.guild_id),
              }),
              text: f(t, a, null == u ? void 0 : u.guild_id, e),
              className: E.row,
            });
          }
          return I;
        };
      function p(t) {
        let {
            channelId: e,
            blockedUserIds: i,
            ignoredUserIds: a,
            transitionState: r,
            onClose: o,
            onJoin: c,
          } = t,
          u = (0, A.KR)({ location: "warning_modal" }),
          E = (0, l.Do)({ location: "blocked_user_in_voice_channel_modal" });
        if (!u) return null;
        let f = i.size > 1;
        return (0, n.jsx)(I.Z, {
          headerText: (0, n.jsx)(N, { multipleBlockedUsers: f }),
          secondaryHeaderText: E ? void 0 : g.intl.string(g.t.zPUmzc),
          descriptionText: (0, n.jsx)(h, {
            numOfBlockedUsers: i.size,
            numOfIgnoredUsers: a.size,
          }),
          infoRows: L({
            channelId: e,
            blockedUserIds: i,
            ignoredUserIds: a,
            isStealthRemediationEnabled: E,
          }),
          onDismissAndStay: () => {
            c(),
              o(),
              (0, d.g6)(e),
              _.default.track(
                S.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: m.q.CLICK_TO_JOIN,
                  channel_id: e,
                  blocked_user_ids: Array.from(i),
                  ignored_user_ids: Array.from(a),
                  warning_surface: m.fz.PRE_JOIN_MODAL,
                },
              );
          },
          onDismissAndLeave: () => {
            o(),
              _.default.track(
                S.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: m.q.CLICK_TO_LEAVE,
                  channel_id: e,
                  blocked_user_ids: Array.from(i),
                  ignored_user_ids: Array.from(a),
                  warning_surface: m.fz.PRE_JOIN_MODAL,
                },
              );
          },
          leaveButtonText: g.intl.string(g.t.Trz9Ji),
          stayButtonText: g.intl.string(g.t.kiODyM),
          transitionState: r,
          onClose: o,
          impression: {
            impressionName:
              s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
              channel_id: e,
              blocked_user_ids: Array.from(i),
              warning_surface: m.fz.PRE_JOIN_MODAL,
            },
          },
        });
      }
    },
    343544: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return d;
        },
      });
      var n = i(200651),
        s = i(192379),
        a = i(120356),
        r = i.n(a),
        l = i(481060),
        o = i(511010),
        c = i(922611),
        _ = i(126743),
        u = i(444812);
      function d(t) {
        let {
            headerText: e,
            secondaryHeaderText: i,
            descriptionText: a,
            infoRows: d,
            onDismissAndStay: A,
            onDismissAndLeave: I,
            leaveButtonText: m,
            stayButtonText: S,
            transitionState: g,
            impression: E,
          } = t,
          N = (0, c.Do)({ location: "blocked_user_warning_modal" });
        return (0, n.jsxs)(l.ModalRoot, {
          transitionState: g,
          impression: E,
          children: [
            (0, n.jsx)("img", { alt: "", className: _.headerImage, src: u }),
            (0, n.jsxs)(l.ModalHeader, {
              separator: !1,
              className: _.header,
              children: [
                (0, n.jsxs)(l.Heading, {
                  variant: N ? "heading-xl/bold" : "heading-lg/bold",
                  color: N ? "header-primary" : void 0,
                  className: _.title,
                  children: [
                    e,
                    null != i &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("br", {}), i],
                      }),
                  ],
                }),
                null != a &&
                  (0, n.jsx)(l.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: a,
                  }),
              ],
            }),
            (0, n.jsxs)(l.ModalContent, {
              className: _.content,
              children: [
                (0, n.jsx)("div", {
                  className: _.infoGroup,
                  children: d.map((t, e) =>
                    (0, n.jsxs)(
                      s.Fragment,
                      {
                        children: [
                          (0, n.jsxs)("div", {
                            className: r()(_.infoRow, t.className),
                            children: [
                              t.icon,
                              (0, n.jsx)(l.Text, {
                                variant: "text-md/medium",
                                children: t.text,
                              }),
                            ],
                          }),
                          e < d.length - 1 && (0, n.jsx)(o.Z, {}),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
                (0, n.jsxs)("div", {
                  className: _.buttonGroup,
                  children: [
                    (0, n.jsx)(l.Button, {
                      color: l.Button.Colors.PRIMARY,
                      onClick: A,
                      children: S,
                    }),
                    (0, n.jsx)(l.Button, {
                      color: l.Button.Colors.BRAND,
                      size: l.Button.Sizes.MEDIUM,
                      onClick: I,
                      className: _.leave,
                      children: m,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    300436: function (t, e, i) {
      t.exports = {
        container: "container_e85446",
        circularImage: "circularImage_e85446",
        dots: "dots_e85446",
      };
    },
    961929: function (t, e, i) {
      t.exports = { row: "row_bea841", icon: "icon_bea841" };
    },
    126743: function (t, e, i) {
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
//# sourceMappingURL=0a7948529c6f807686c7.js.map
