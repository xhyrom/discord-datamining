"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12858"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    289823: function (e, t, n) {
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        s = n.n(r),
        l = n(974674),
        o = n(438784),
        u = n(481060),
        d = n(686546),
        c = n(3682),
        _ = n(465669);
      let A = {},
        I = 1 / 4;
      function m(e) {
        let { height: t, fillColor: n } = e;
        return (0, i.jsx)("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: t / 2,
            backgroundColor: n,
            height: t,
            width: t * c.jR,
          },
          children: (0, i.jsx)(o.b, { className: _.dots, dotRadius: t * I }),
        });
      }
      function S(e) {
        let { isTyping: t, statusCoords: n, status: a } = e,
          r = (0, u.useStatusFillColor)(u.StatusTypes.ONLINE);
        return t
          ? (0, i.jsx)("div", {
              style: { position: "absolute", top: n.y, left: n.x },
              children: (0, i.jsx)(m, { height: n.height, fillColor: r }),
            })
          : null != a
            ? (0, i.jsx)(u.Status, {
                size: n.height,
                status: a,
                style: { position: "absolute", top: n.y, left: n.x },
              })
            : null;
      }
      function f(e) {
        let { src: t, size: n } = e;
        return (0, i.jsx)("img", {
          className: _.circularImage,
          src: t,
          alt: "",
          width: n,
          height: n,
        });
      }
      let E = {
        [u.AvatarSizes.SIZE_16]: {
          default: d.QS.DIAGONAL_FACEPILE_16,
          typing: d.QS.DIAGONAL_FACEPILE_TYPING_16,
          status: d.QS.DIAGONAL_FACEPILE_STATUS_16,
        },
        [u.AvatarSizes.SIZE_20]: {
          default: d.QS.DIAGONAL_FACEPILE_20,
          typing: d.QS.DIAGONAL_FACEPILE_TYPING_20,
          status: d.QS.DIAGONAL_FACEPILE_STATUS_20,
        },
        [u.AvatarSizes.SIZE_24]: {
          default: d.QS.DIAGONAL_FACEPILE_24,
          typing: d.QS.DIAGONAL_FACEPILE_TYPING_24,
          status: d.QS.DIAGONAL_FACEPILE_STATUS_24,
        },
        [u.AvatarSizes.SIZE_32]: {
          default: d.QS.DIAGONAL_FACEPILE_32,
          typing: d.QS.DIAGONAL_FACEPILE_TYPING_32,
          status: d.QS.DIAGONAL_FACEPILE_STATUS_32,
        },
        [u.AvatarSizes.SIZE_40]: {
          default: d.QS.DIAGONAL_FACEPILE_32,
          typing: d.QS.DIAGONAL_FACEPILE_TYPING_32,
          status: d.QS.DIAGONAL_FACEPILE_STATUS_32,
        },
        [u.AvatarSizes.SIZE_48]: {
          default: d.QS.DIAGONAL_FACEPILE_40,
          typing: d.QS.DIAGONAL_FACEPILE_TYPING_40,
          status: d.QS.DIAGONAL_FACEPILE_STATUS_40,
        },
        [u.AvatarSizes.SIZE_56]: {
          default: d.QS.DIAGONAL_FACEPILE_56,
          typing: d.QS.DIAGONAL_FACEPILE_TYPING_56,
          status: d.QS.DIAGONAL_FACEPILE_STATUS_56,
        },
        [u.AvatarSizes.SIZE_80]: {
          default: d.QS.DIAGONAL_FACEPILE_80,
          typing: d.QS.DIAGONAL_FACEPILE_TYPING_80,
          status: d.QS.DIAGONAL_FACEPILE_STATUS_80,
        },
        [u.AvatarSizes.SIZE_120]: {
          default: d.QS.DIAGONAL_FACEPILE_120,
          typing: d.QS.DIAGONAL_FACEPILE_TYPING_120,
          status: d.QS.DIAGONAL_FACEPILE_STATUS_120,
        },
      };
      t.Z = function (e) {
        var t, n, r;
        let {
            backSrc: o,
            frontSrc: I,
            size: m,
            isTyping: g,
            status: h,
            style: N,
            className: x,
            ...L
          } = e,
          { size: p } = u.AvatarSizeSpecs[m],
          {
            statusCoords: v,
            frontAvatarOffsetPx: C,
            frontAvatarSizePx: j,
            backAvatarSizePx: G,
          } = a.useMemo(() => {
            var e;
            let t = "".concat(p, "-").concat(g);
            return null !== (e = A[t]) && void 0 !== e
              ? e
              : (function (e, t, n) {
                  let i = u.AvatarSizeSpecs[e],
                    a = i.size / (c.z3 + c.o),
                    r = a * c.z3,
                    s = a * c.o,
                    o = {
                      statusCoords: (0, l.Vq)(i, u.StatusTypes.ONLINE, !1, t),
                      frontAvatarSizePx: r,
                      backAvatarSizePx: a,
                      frontAvatarOffsetPx: s,
                      frontAvatarCenter: s + r / 2,
                    };
                  return (A[n] = o), o;
                })(m, g, t);
          }, [p, g, m]);
        let O =
          ((t = null != h),
          (n = g),
          (r = m),
          n ? E[r].typing : t ? E[r].status : E[r].default);
        return (0, i.jsxs)("div", {
          style: { width: p, height: p, ...N },
          "aria-label": L["aria-label"],
          "aria-hidden": L["aria-hidden"],
          className: s()(_.container, x),
          children: [
            (0, i.jsxs)(d.ZP, {
              mask: O,
              height: p,
              width: p,
              children: [
                (0, i.jsx)("img", { src: o, alt: "", width: G, height: G }),
                (0, i.jsx)("div", {
                  style: { position: "absolute", top: C, left: C },
                  children: (0, i.jsx)(f, {
                    src: I,
                    size: j,
                    isTyping: g,
                    status: h,
                  }),
                }),
              ],
            }),
            (0, i.jsx)(S, { statusCoords: v, status: h, isTyping: g }),
          ],
        });
      };
    },
    785232: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var a = n(442837),
        r = n(481060),
        s = n(289823),
        l = n(594174);
      t.Z = function (e) {
        let {
            recipients: t,
            size: n,
            status: o,
            isTyping: u,
            className: d,
            ...c
          } = e,
          _ = r.AvatarSizeSpecs[n],
          A = (0, a.Wu)(
            [l.default],
            () =>
              t.slice(0, 2).map((e) => {
                let t = l.default.getUser(e);
                if (null != t) return t.getAvatarURL(void 0, _.size, !1);
              }),
            [t, _.size],
          );
        return (0, i.jsx)(s.Z, {
          "aria-label": c["aria-label"],
          "aria-hidden": c["aria-hidden"],
          backSrc: A[0],
          frontSrc: A[1],
          size: n,
          status: o,
          isTyping: null != u && u,
          className: d,
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
      var i = n(200651);
      n(192379);
      var a = n(990547),
        r = n(481060),
        s = n(785232),
        l = n(922611),
        o = n(592125),
        u = n(594174),
        d = n(626135),
        c = n(33194),
        _ = n(807031),
        A = n(343544),
        I = n(14251),
        m = n(110223),
        S = n(981631),
        f = n(388032),
        E = n(762471);
      let g = (e) => {
          let { multipleBlockedUsers: t } = e;
          return (0, l.Do)({ location: "blocked_user_in_voice_channel_header" })
            ? f.intl.string(f.t.zPUmzc)
            : t
              ? f.intl.string(f.t.aJRlSU)
              : f.intl.string(f.t.rlBMub);
        },
        h = (e) => {
          let { numOfBlockedUsers: t, numOfIgnoredUsers: n } = e;
          if (!(0, l.Do)({ location: "blocked_user_in_voice_channel_header" }))
            return f.intl.string(f.t.K8YIgY);
          let a = t > 0,
            r = n > 0;
          return a && r
            ? (0, i.jsxs)(i.Fragment, {
                children: [
                  f.intl.string(f.t.aTORmJ),
                  (0, i.jsx)("br", {}),
                  f.intl.string(f.t.LXFz19),
                ],
              })
            : a
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    f.intl.format(f.t["J/ZBu7"], { n: t }),
                    (0, i.jsx)("br", {}),
                    f.intl.string(f.t.tFvYm5),
                  ],
                })
              : r
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      f.intl.format(f.t["8mtcq6"], { n: n }),
                      (0, i.jsx)("br", {}),
                      f.intl.string(f.t.Z21Rp6),
                    ],
                  })
                : null;
        },
        N = (e) => {
          let {
              channelId: t,
              blockedUsers: n,
              ignoredUsers: a,
              isStealthRemediationEnabled: l,
            } = e,
            u = n.length > 1;
          if (!l) {
            var d;
            return [
              {
                icon: u
                  ? (0, i.jsx)(r.GroupIcon, {})
                  : (0, i.jsx)(r.UserIcon, {}),
                text: u
                  ? f.intl.formatToPlainString(f.t.Zqlt5e, {
                      blockedUserCount: n.length,
                    })
                  : f.intl.formatToPlainString(f.t.V0aCFx, {
                      userName:
                        null === (d = n[0]) || void 0 === d
                          ? void 0
                          : d.username,
                    }),
              },
              {
                icon: (0, i.jsx)(r.MicrophoneIcon, {}),
                text: f.intl.string(f.t["7jN3FB"]),
              },
            ];
          }
          let c = o.Z.getChannel(t),
            _ = n.length > 0,
            A = a.length > 0,
            m = [
              {
                icon: (0, i.jsx)("div", {
                  className: E.icon,
                  children: (0, i.jsx)(r.WarningIcon, {}),
                }),
                text: f.intl.string(f.t["7jN3FB"]),
                className: E.row,
              },
            ];
          if (_ && A) {
            let e = [...n, ...a],
              l = e.slice(0, 2).map((e) => e.id);
            m.unshift({
              icon: (0, i.jsx)("div", {
                className: E.icon,
                children: (0, i.jsx)(s.Z, {
                  recipients: l,
                  size: r.AvatarSizes.SIZE_32,
                }),
              }),
              text: (0, I.a)(l, e.length, null == c ? void 0 : c.guild_id, t),
              className: E.row,
            });
          } else {
            let e = _
                ? n.slice(0, 2).map((e) => e.id)
                : a.slice(0, 2).map((e) => e.id),
              r = _ ? n.length : a.length;
            m.unshift({
              icon: (0, i.jsx)("div", {
                className: E.icon,
                children: (0, I.r)(e, null == c ? void 0 : c.guild_id),
              }),
              text: (0, I.a)(e, r, null == c ? void 0 : c.guild_id, t),
              className: E.row,
            });
          }
          return m;
        };
      function x(e) {
        let {
            channelId: t,
            blockedUserIds: n,
            ignoredUserIds: r,
            transitionState: s,
            onClose: o,
            onJoin: I,
          } = e,
          E = (0, _.KR)({ location: "warning_modal" }),
          x = (0, l.Do)({ location: "blocked_user_in_voice_channel_modal" });
        if (!E) return null;
        let L = Array.from(n)
            .map((e) => u.default.getUser(e))
            .filter((e) => null !== e),
          p = Array.from(r)
            .map((e) => u.default.getUser(e))
            .filter((e) => null !== e);
        if (0 === L.length && 0 === p.length) return null;
        let v = n.size > 1;
        return (0, i.jsx)(A.Z, {
          headerText: (0, i.jsx)(g, { multipleBlockedUsers: v }),
          secondaryHeaderText: x ? void 0 : f.intl.string(f.t.zPUmzc),
          descriptionText: (0, i.jsx)(h, {
            numOfBlockedUsers: n.size,
            numOfIgnoredUsers: r.size,
          }),
          infoRows: N({
            channelId: t,
            blockedUsers: L,
            ignoredUsers: p,
            isStealthRemediationEnabled: x,
          }),
          onDismissAndStay: () => {
            I(),
              o(),
              (0, c.g6)(t),
              d.default.track(
                S.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: m.q.CLICK_TO_JOIN,
                  channel_id: t,
                  blocked_user_ids: Array.from(n),
                  ignored_user_ids: Array.from(r),
                  warning_surface: m.fz.PRE_JOIN_MODAL,
                },
              );
          },
          onDismissAndLeave: () => {
            o(),
              d.default.track(
                S.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: m.q.CLICK_TO_LEAVE,
                  channel_id: t,
                  blocked_user_ids: Array.from(n),
                  ignored_user_ids: Array.from(r),
                  warning_surface: m.fz.PRE_JOIN_MODAL,
                },
              );
          },
          leaveButtonText: f.intl.string(f.t.Trz9Ji),
          stayButtonText: f.intl.string(f.t.kiODyM),
          transitionState: s,
          onClose: o,
          impression: {
            impressionName:
              a.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
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
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        s = n.n(r),
        l = n(481060),
        o = n(511010),
        u = n(922611),
        d = n(786109),
        c = n(444812);
      function _(e) {
        let {
            headerText: t,
            secondaryHeaderText: n,
            descriptionText: r,
            infoRows: _,
            onDismissAndStay: A,
            onDismissAndLeave: I,
            leaveButtonText: m,
            stayButtonText: S,
            transitionState: f,
            impression: E,
          } = e,
          g = (0, u.Do)({ location: "blocked_user_warning_modal" });
        return (0, i.jsxs)(l.ModalRoot, {
          transitionState: f,
          impression: E,
          children: [
            (0, i.jsx)("img", { alt: "", className: d.headerImage, src: c }),
            (0, i.jsxs)(l.ModalHeader, {
              separator: !1,
              className: d.header,
              children: [
                (0, i.jsxs)(l.Heading, {
                  variant: g ? "heading-xl/bold" : "heading-lg/bold",
                  color: g ? "header-primary" : void 0,
                  className: d.title,
                  children: [
                    t,
                    null != n &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("br", {}), n],
                      }),
                  ],
                }),
                null != r &&
                  (0, i.jsx)(l.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: r,
                  }),
              ],
            }),
            (0, i.jsxs)(l.ModalContent, {
              className: d.content,
              children: [
                (0, i.jsx)("div", {
                  className: d.infoGroup,
                  children: _.map((e, t) =>
                    (0, i.jsxs)(
                      a.Fragment,
                      {
                        children: [
                          (0, i.jsxs)("div", {
                            className: s()(d.infoRow, e.className),
                            children: [
                              e.icon,
                              (0, i.jsx)(l.Text, {
                                variant: "text-md/medium",
                                children: e.text,
                              }),
                            ],
                          }),
                          t < _.length - 1 && (0, i.jsx)(o.Z, {}),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
                (0, i.jsxs)("div", {
                  className: d.buttonGroup,
                  children: [
                    (0, i.jsx)(l.Button, {
                      color: l.Button.Colors.PRIMARY,
                      onClick: A,
                      children: S,
                    }),
                    (0, i.jsx)(l.Button, {
                      color: l.Button.Colors.BRAND,
                      size: l.Button.Sizes.MEDIUM,
                      onClick: I,
                      className: d.leave,
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
          return c;
        },
        r: function () {
          return d;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(481060),
        r = n(785232),
        s = n(594174),
        l = n(5192),
        o = n(388032),
        u = n(762471);
      let d = (e, t) => {
          if (1 === e.length) {
            let n = s.default.getUser(e[0]);
            return null != n
              ? (0, i.jsx)(a.Avatar, {
                  src: n.getAvatarURL(t, 32),
                  size: a.AvatarSizes.SIZE_32,
                  "aria-hidden": !0,
                })
              : (0, i.jsx)(a.UserIcon, {});
          }
          return (0, i.jsx)(r.Z, {
            recipients: e,
            size: a.AvatarSizes.SIZE_32,
          });
        },
        c = (e, t, n, r) => {
          let d = [...e].map((e) => s.default.getUser(e)),
            c = (e) =>
              (0, i.jsx)(a.Text, {
                variant: "text-md/semibold",
                className: u.username,
                children: l.ZP.getName(n, r, e),
              });
          return t >= 4
            ? o.intl.format(o.t.qfo6KS, {
                usernameHook1: () => c(d[0]),
                usernameHook2: () => c(d[1]),
                numberOfOtherUsers: t - e.length,
              })
            : 3 === t
              ? o.intl.format(o.t["67ZE+/"], {
                  usernameHook1: () => c(d[0]),
                  usernameHook2: () => c(d[1]),
                })
              : 2 === t
                ? o.intl.format(o.t.veV4IC, {
                    usernameHook1: () => c(d[0]),
                    usernameHook2: () => c(d[1]),
                  })
                : o.intl.format(o.t["4WHCtr"], { usernameHook: () => c(d[0]) });
        };
    },
    465669: function (e, t, n) {
      e.exports = {
        container: "container_e85446",
        circularImage: "circularImage_e85446",
        dots: "dots_e85446",
      };
    },
    762471: function (e, t, n) {
      e.exports = {
        row: "row_eb2d7d",
        icon: "icon_eb2d7d",
        username: "username_eb2d7d",
      };
    },
    786109: function (e, t, n) {
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
//# sourceMappingURL=d6be38ddf166166e7eae.js.map
