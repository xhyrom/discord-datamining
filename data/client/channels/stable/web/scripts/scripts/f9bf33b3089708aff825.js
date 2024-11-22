"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12858"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    289823: function (e, t, n) {
      var s = n(200651),
        i = n(192379),
        a = n(120356),
        r = n.n(a),
        l = n(974674),
        o = n(438784),
        c = n(481060),
        u = n(686546),
        d = n(3682),
        _ = n(300436);
      let A = {},
        I = 1 / 4;
      function m(e) {
        let { height: t, fillColor: n } = e;
        return (0, s.jsx)("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: t / 2,
            backgroundColor: n,
            height: t,
            width: t * d.jR,
          },
          children: (0, s.jsx)(o.b, { className: _.dots, dotRadius: t * I }),
        });
      }
      function S(e) {
        let { isTyping: t, statusCoords: n, status: i } = e,
          a = (0, c.useStatusFillColor)(c.StatusTypes.ONLINE);
        return t
          ? (0, s.jsx)("div", {
              style: { position: "absolute", top: n.y, left: n.x },
              children: (0, s.jsx)(m, { height: n.height, fillColor: a }),
            })
          : null != i
            ? (0, s.jsx)(c.Status, {
                size: n.height,
                status: i,
                style: { position: "absolute", top: n.y, left: n.x },
              })
            : null;
      }
      function E(e) {
        let { src: t, size: n } = e;
        return (0, s.jsx)("img", {
          className: _.circularImage,
          src: t,
          alt: "",
          width: n,
          height: n,
        });
      }
      let f = {
        [c.AvatarSizes.SIZE_16]: {
          default: u.QS.DIAGONAL_FACEPILE_16,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_16,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_16,
        },
        [c.AvatarSizes.SIZE_20]: {
          default: u.QS.DIAGONAL_FACEPILE_20,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_20,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_20,
        },
        [c.AvatarSizes.SIZE_24]: {
          default: u.QS.DIAGONAL_FACEPILE_24,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_24,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_24,
        },
        [c.AvatarSizes.SIZE_32]: {
          default: u.QS.DIAGONAL_FACEPILE_32,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_32,
        },
        [c.AvatarSizes.SIZE_40]: {
          default: u.QS.DIAGONAL_FACEPILE_32,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_32,
        },
        [c.AvatarSizes.SIZE_48]: {
          default: u.QS.DIAGONAL_FACEPILE_40,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_40,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_40,
        },
        [c.AvatarSizes.SIZE_56]: {
          default: u.QS.DIAGONAL_FACEPILE_56,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_56,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_56,
        },
        [c.AvatarSizes.SIZE_80]: {
          default: u.QS.DIAGONAL_FACEPILE_80,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_80,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_80,
        },
        [c.AvatarSizes.SIZE_120]: {
          default: u.QS.DIAGONAL_FACEPILE_120,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_120,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_120,
        },
      };
      t.Z = function (e) {
        var t, n, a;
        let {
            backSrc: o,
            frontSrc: I,
            size: m,
            isTyping: N,
            status: h,
            style: g,
            className: x,
            ...L
          } = e,
          { size: v } = c.AvatarSizeSpecs[m],
          {
            statusCoords: p,
            frontAvatarOffsetPx: C,
            frontAvatarSizePx: j,
            backAvatarSizePx: G,
          } = i.useMemo(() => {
            var e;
            let t = "".concat(v, "-").concat(N);
            return null !== (e = A[t]) && void 0 !== e
              ? e
              : (function (e, t, n) {
                  let s = c.AvatarSizeSpecs[e],
                    i = s.size / (d.z3 + d.o),
                    a = i * d.z3,
                    r = i * d.o,
                    o = {
                      statusCoords: (0, l.Vq)(s, c.StatusTypes.ONLINE, !1, t),
                      frontAvatarSizePx: a,
                      backAvatarSizePx: i,
                      frontAvatarOffsetPx: r,
                      frontAvatarCenter: r + a / 2,
                    };
                  return (A[n] = o), o;
                })(m, N, t);
          }, [v, N, m]);
        let O =
          ((t = null != h),
          (n = N),
          (a = m),
          n ? f[a].typing : t ? f[a].status : f[a].default);
        return (0, s.jsxs)("div", {
          style: { width: v, height: v, ...g },
          "aria-label": L["aria-label"],
          "aria-hidden": L["aria-hidden"],
          className: r()(_.container, x),
          children: [
            (0, s.jsxs)(u.ZP, {
              mask: O,
              height: v,
              width: v,
              children: [
                (0, s.jsx)("img", { src: o, alt: "", width: G, height: G }),
                (0, s.jsx)("div", {
                  style: { position: "absolute", top: C, left: C },
                  children: (0, s.jsx)(E, {
                    src: I,
                    size: j,
                    isTyping: N,
                    status: h,
                  }),
                }),
              ],
            }),
            (0, s.jsx)(S, { statusCoords: p, status: h, isTyping: N }),
          ],
        });
      };
    },
    785232: function (e, t, n) {
      var s = n(200651);
      n(192379);
      var i = n(442837),
        a = n(481060),
        r = n(289823),
        l = n(594174);
      t.Z = function (e) {
        let {
            recipients: t,
            size: n,
            status: o,
            isTyping: c,
            className: u,
            ...d
          } = e,
          _ = a.AvatarSizeSpecs[n],
          A = (0, i.Wu)(
            [l.default],
            () =>
              t.slice(0, 2).map((e) => {
                let t = l.default.getUser(e);
                if (null != t) return t.getAvatarURL(void 0, _.size, !1);
              }),
            [t, _.size],
          );
        return (0, s.jsx)(r.Z, {
          "aria-label": d["aria-label"],
          "aria-hidden": d["aria-hidden"],
          backSrc: A[0],
          frontSrc: A[1],
          size: n,
          status: o,
          isTyping: null != c && c,
          className: u,
        });
      };
    },
    404339: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        }),
        n(47120),
        n(733860);
      var s = n(200651);
      n(192379);
      var i = n(990547),
        a = n(481060),
        r = n(785232),
        l = n(922611),
        o = n(592125),
        c = n(594174),
        u = n(626135),
        d = n(33194),
        _ = n(807031),
        A = n(343544),
        I = n(14251),
        m = n(110223),
        S = n(981631),
        E = n(388032),
        f = n(17222);
      let N = (e) => {
          let { multipleBlockedUsers: t } = e;
          return (0, l.Do)({ location: "blocked_user_in_voice_channel_header" })
            ? E.intl.string(E.t.zPUmzc)
            : t
              ? E.intl.string(E.t.aJRlSU)
              : E.intl.string(E.t.rlBMub);
        },
        h = (e) => {
          let { numOfBlockedUsers: t, numOfIgnoredUsers: n } = e;
          if (!(0, l.Do)({ location: "blocked_user_in_voice_channel_header" }))
            return E.intl.string(E.t.K8YIgY);
          let i = t > 0,
            a = n > 0;
          return i && a
            ? (0, s.jsxs)(s.Fragment, {
                children: [
                  E.intl.string(E.t.aTORmJ),
                  (0, s.jsx)("br", {}),
                  E.intl.string(E.t.LXFz19),
                ],
              })
            : i
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    E.intl.format(E.t["J/ZBu7"], { n: t }),
                    (0, s.jsx)("br", {}),
                    E.intl.string(E.t.tFvYm5),
                  ],
                })
              : a
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      E.intl.format(E.t["8mtcq6"], { n: n }),
                      (0, s.jsx)("br", {}),
                      E.intl.string(E.t.Z21Rp6),
                    ],
                  })
                : null;
        },
        g = (e) => {
          let {
              channelId: t,
              blockedUserIds: n,
              ignoredUserIds: i,
              isStealthRemediationEnabled: l,
            } = e,
            u = n.size > 1;
          if (!l)
            return [
              {
                icon: u
                  ? (0, s.jsx)(a.GroupIcon, {})
                  : (0, s.jsx)(a.UserIcon, {}),
                text: u
                  ? E.intl.formatToPlainString(E.t.Zqlt5e, {
                      blockedUserCount: n.size,
                    })
                  : E.intl.formatToPlainString(E.t.V0aCFx, {
                      userName: c.default.getUser([...n][0]),
                    }),
              },
              {
                icon: (0, s.jsx)(a.MicrophoneIcon, {}),
                text: E.intl.string(E.t["7jN3FB"]),
              },
            ];
          let d = o.Z.getChannel(t),
            _ = n.size > 0,
            A = i.size > 0,
            m = [
              {
                icon: (0, s.jsx)("div", {
                  className: f.icon,
                  children: (0, s.jsx)(a.WarningIcon, {}),
                }),
                text: E.intl.string(E.t["7jN3FB"]),
                className: f.row,
              },
            ];
          if (_ && A) {
            let e = [...n, ...i],
              l = e.slice(0, 2);
            m.unshift({
              icon: (0, s.jsx)("div", {
                className: f.icon,
                children: (0, s.jsx)(r.Z, {
                  recipients: l,
                  size: a.AvatarSizes.SIZE_32,
                }),
              }),
              text: (0, I.a)(l, e.length, null == d ? void 0 : d.guild_id, t),
              className: f.row,
            });
          } else {
            let e = _ ? [...n].slice(0, 2) : [...i].slice(0, 2),
              a = _ ? n.size : i.size;
            m.unshift({
              icon: (0, s.jsx)("div", {
                className: f.icon,
                children: (0, I.r)(e, null == d ? void 0 : d.guild_id),
              }),
              text: (0, I.a)(e, a, null == d ? void 0 : d.guild_id, t),
              className: f.row,
            });
          }
          return m;
        };
      function x(e) {
        let {
            channelId: t,
            blockedUserIds: n,
            ignoredUserIds: a,
            transitionState: r,
            onClose: o,
            onJoin: c,
          } = e,
          I = (0, _.KR)({ location: "warning_modal" }),
          f = (0, l.Do)({ location: "blocked_user_in_voice_channel_modal" });
        if (!I) return null;
        let x = n.size > 1;
        return (0, s.jsx)(A.Z, {
          headerText: (0, s.jsx)(N, { multipleBlockedUsers: x }),
          secondaryHeaderText: f ? void 0 : E.intl.string(E.t.zPUmzc),
          descriptionText: (0, s.jsx)(h, {
            numOfBlockedUsers: n.size,
            numOfIgnoredUsers: a.size,
          }),
          infoRows: g({
            channelId: t,
            blockedUserIds: n,
            ignoredUserIds: a,
            isStealthRemediationEnabled: f,
          }),
          onDismissAndStay: () => {
            c(),
              o(),
              (0, d.g6)(t),
              u.default.track(
                S.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: m.q.CLICK_TO_JOIN,
                  channel_id: t,
                  blocked_user_ids: Array.from(n),
                  ignored_user_ids: Array.from(a),
                  warning_surface: m.fz.PRE_JOIN_MODAL,
                },
              );
          },
          onDismissAndLeave: () => {
            o(),
              u.default.track(
                S.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: m.q.CLICK_TO_LEAVE,
                  channel_id: t,
                  blocked_user_ids: Array.from(n),
                  ignored_user_ids: Array.from(a),
                  warning_surface: m.fz.PRE_JOIN_MODAL,
                },
              );
          },
          leaveButtonText: E.intl.string(E.t.Trz9Ji),
          stayButtonText: E.intl.string(E.t.kiODyM),
          transitionState: r,
          onClose: o,
          impression: {
            impressionName:
              i.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
              channel_id: t,
              blocked_user_ids: Array.from(n),
              warning_surface: m.fz.PRE_JOIN_MODAL,
            },
          },
        });
      }
    },
    343544: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var s = n(200651),
        i = n(192379),
        a = n(120356),
        r = n.n(a),
        l = n(481060),
        o = n(511010),
        c = n(922611),
        u = n(126743),
        d = n(444812);
      function _(e) {
        let {
            headerText: t,
            secondaryHeaderText: n,
            descriptionText: a,
            infoRows: _,
            onDismissAndStay: A,
            onDismissAndLeave: I,
            leaveButtonText: m,
            stayButtonText: S,
            transitionState: E,
            impression: f,
          } = e,
          N = (0, c.Do)({ location: "blocked_user_warning_modal" });
        return (0, s.jsxs)(l.ModalRoot, {
          transitionState: E,
          impression: f,
          children: [
            (0, s.jsx)("img", { alt: "", className: u.headerImage, src: d }),
            (0, s.jsxs)(l.ModalHeader, {
              separator: !1,
              className: u.header,
              children: [
                (0, s.jsxs)(l.Heading, {
                  variant: N ? "heading-xl/bold" : "heading-lg/bold",
                  color: N ? "header-primary" : void 0,
                  className: u.title,
                  children: [
                    t,
                    null != n &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("br", {}), n],
                      }),
                  ],
                }),
                null != a &&
                  (0, s.jsx)(l.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: a,
                  }),
              ],
            }),
            (0, s.jsxs)(l.ModalContent, {
              className: u.content,
              children: [
                (0, s.jsx)("div", {
                  className: u.infoGroup,
                  children: _.map((e, t) =>
                    (0, s.jsxs)(
                      i.Fragment,
                      {
                        children: [
                          (0, s.jsxs)("div", {
                            className: r()(u.infoRow, e.className),
                            children: [
                              e.icon,
                              (0, s.jsx)(l.Text, {
                                variant: "text-md/medium",
                                children: e.text,
                              }),
                            ],
                          }),
                          t < _.length - 1 && (0, s.jsx)(o.Z, {}),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
                (0, s.jsxs)("div", {
                  className: u.buttonGroup,
                  children: [
                    (0, s.jsx)(l.Button, {
                      color: l.Button.Colors.PRIMARY,
                      onClick: A,
                      children: S,
                    }),
                    (0, s.jsx)(l.Button, {
                      color: l.Button.Colors.BRAND,
                      size: l.Button.Sizes.MEDIUM,
                      onClick: I,
                      className: u.leave,
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
    14251: function (e, t, n) {
      n.d(t, {
        a: function () {
          return d;
        },
        r: function () {
          return u;
        },
      }),
        n(47120);
      var s = n(200651),
        i = n(481060),
        a = n(785232),
        r = n(594174),
        l = n(5192),
        o = n(388032),
        c = n(17222);
      let u = (e, t) => {
          if (1 === e.length) {
            let n = r.default.getUser(e[0]);
            return null != n
              ? (0, s.jsx)(i.Avatar, {
                  src: n.getAvatarURL(t, 32),
                  size: i.AvatarSizes.SIZE_32,
                  "aria-hidden": !0,
                })
              : (0, s.jsx)(i.UserIcon, {});
          }
          return (0, s.jsx)(a.Z, {
            recipients: e,
            size: i.AvatarSizes.SIZE_32,
          });
        },
        d = (e, t, n, a) => {
          let u = [...e].map((e) => r.default.getUser(e)),
            d = (e) =>
              (0, s.jsx)(i.Text, {
                variant: "text-md/semibold",
                className: c.username,
                children: l.ZP.getName(n, a, e),
              });
          return t >= 4
            ? o.intl.format(o.t.qfo6KS, {
                usernameHook1: () => d(u[0]),
                usernameHook2: () => d(u[1]),
                numberOfOtherUsers: t - e.length,
              })
            : 3 === t
              ? o.intl.format(o.t["67ZE+/"], {
                  usernameHook1: () => d(u[0]),
                  usernameHook2: () => d(u[1]),
                })
              : 2 === t
                ? o.intl.format(o.t.veV4IC, {
                    usernameHook1: () => d(u[0]),
                    usernameHook2: () => d(u[1]),
                  })
                : o.intl.format(o.t["4WHCtr"], { usernameHook: () => d(u[0]) });
        };
    },
    300436: function (e, t, n) {
      e.exports = {
        container: "container_e85446",
        circularImage: "circularImage_e85446",
        dots: "dots_e85446",
      };
    },
    17222: function (e, t, n) {
      e.exports = {
        row: "row_eb2d7d",
        icon: "icon_eb2d7d",
        username: "username_eb2d7d",
      };
    },
    126743: function (e, t, n) {
      e.exports = {
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
//# sourceMappingURL=f9bf33b3089708aff825.js.map
