"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87337"],
  {
    444812: function (t) {
      t.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    289823: function (t, e, n) {
      var i = n(200651),
        s = n(192379),
        a = n(120356),
        r = n.n(a),
        l = n(974674),
        o = n(438784),
        d = n(481060),
        c = n(686546),
        u = n(3682),
        _ = n(640453);
      let A = {},
        I = 1 / 4;
      function S(t) {
        let { height: e, fillColor: n } = t;
        return (0, i.jsx)("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: e / 2,
            backgroundColor: n,
            height: e,
            width: e * u.jR,
          },
          children: (0, i.jsx)(o.b, { className: _.dots, dotRadius: e * I }),
        });
      }
      function h(t) {
        let { isTyping: e, statusCoords: n, status: s } = t,
          a = (0, d.useStatusFillColor)(d.StatusTypes.ONLINE);
        return e
          ? (0, i.jsx)("div", {
              style: { position: "absolute", top: n.y, left: n.x },
              children: (0, i.jsx)(S, { height: n.height, fillColor: a }),
            })
          : null != s
            ? (0, i.jsx)(d.Status, {
                size: n.height,
                status: s,
                style: { position: "absolute", top: n.y, left: n.x },
              })
            : null;
      }
      function m(t) {
        let { src: e, size: n } = t;
        return (0, i.jsx)("img", {
          className: _.circularImage,
          src: e,
          alt: "",
          width: n,
          height: n,
        });
      }
      let g = {
        [d.AvatarSizes.SIZE_16]: {
          default: c.QS.DIAGONAL_FACEPILE_16,
          typing: c.QS.DIAGONAL_FACEPILE_TYPING_16,
          status: c.QS.DIAGONAL_FACEPILE_STATUS_16,
        },
        [d.AvatarSizes.SIZE_20]: {
          default: c.QS.DIAGONAL_FACEPILE_20,
          typing: c.QS.DIAGONAL_FACEPILE_TYPING_20,
          status: c.QS.DIAGONAL_FACEPILE_STATUS_20,
        },
        [d.AvatarSizes.SIZE_24]: {
          default: c.QS.DIAGONAL_FACEPILE_24,
          typing: c.QS.DIAGONAL_FACEPILE_TYPING_24,
          status: c.QS.DIAGONAL_FACEPILE_STATUS_24,
        },
        [d.AvatarSizes.SIZE_32]: {
          default: c.QS.DIAGONAL_FACEPILE_32,
          typing: c.QS.DIAGONAL_FACEPILE_TYPING_32,
          status: c.QS.DIAGONAL_FACEPILE_STATUS_32,
        },
        [d.AvatarSizes.SIZE_40]: {
          default: c.QS.DIAGONAL_FACEPILE_32,
          typing: c.QS.DIAGONAL_FACEPILE_TYPING_32,
          status: c.QS.DIAGONAL_FACEPILE_STATUS_32,
        },
        [d.AvatarSizes.SIZE_48]: {
          default: c.QS.DIAGONAL_FACEPILE_40,
          typing: c.QS.DIAGONAL_FACEPILE_TYPING_40,
          status: c.QS.DIAGONAL_FACEPILE_STATUS_40,
        },
        [d.AvatarSizes.SIZE_56]: {
          default: c.QS.DIAGONAL_FACEPILE_56,
          typing: c.QS.DIAGONAL_FACEPILE_TYPING_56,
          status: c.QS.DIAGONAL_FACEPILE_STATUS_56,
        },
        [d.AvatarSizes.SIZE_80]: {
          default: c.QS.DIAGONAL_FACEPILE_80,
          typing: c.QS.DIAGONAL_FACEPILE_TYPING_80,
          status: c.QS.DIAGONAL_FACEPILE_STATUS_80,
        },
        [d.AvatarSizes.SIZE_120]: {
          default: c.QS.DIAGONAL_FACEPILE_120,
          typing: c.QS.DIAGONAL_FACEPILE_TYPING_120,
          status: c.QS.DIAGONAL_FACEPILE_STATUS_120,
        },
      };
      e.Z = function (t) {
        var e, n, a;
        let {
            backSrc: o,
            frontSrc: I,
            size: S,
            isTyping: x,
            status: E,
            style: f,
            className: N,
            ...L
          } = t,
          { size: v } = d.AvatarSizeSpecs[S],
          {
            statusCoords: C,
            frontAvatarOffsetPx: j,
            frontAvatarSizePx: p,
            backAvatarSizePx: G,
          } = s.useMemo(() => {
            var t;
            let e = "".concat(v, "-").concat(x);
            return null !== (t = A[e]) && void 0 !== t
              ? t
              : (function (t, e, n) {
                  let i = d.AvatarSizeSpecs[t],
                    s = i.size / (u.z3 + u.o),
                    a = s * u.z3,
                    r = s * u.o,
                    o = {
                      statusCoords: (0, l.Vq)(i, d.StatusTypes.ONLINE, !1, e),
                      frontAvatarSizePx: a,
                      backAvatarSizePx: s,
                      frontAvatarOffsetPx: r,
                      frontAvatarCenter: r + a / 2,
                    };
                  return (A[n] = o), o;
                })(S, x, e);
          }, [v, x, S]);
        let T =
          ((e = null != E),
          (n = x),
          (a = S),
          n ? g[a].typing : e ? g[a].status : g[a].default);
        return (0, i.jsxs)("div", {
          style: { width: v, height: v, ...f },
          "aria-label": L["aria-label"],
          "aria-hidden": L["aria-hidden"],
          className: r()(_.container, N),
          children: [
            (0, i.jsxs)(c.ZP, {
              mask: T,
              height: v,
              width: v,
              children: [
                (0, i.jsx)("img", { src: o, alt: "", width: G, height: G }),
                (0, i.jsx)("div", {
                  style: { position: "absolute", top: j, left: j },
                  children: (0, i.jsx)(m, {
                    src: I,
                    size: p,
                    isTyping: x,
                    status: E,
                  }),
                }),
              ],
            }),
            (0, i.jsx)(h, { statusCoords: C, status: E, isTyping: x }),
          ],
        });
      };
    },
    785232: function (t, e, n) {
      var i = n(200651);
      n(192379);
      var s = n(442837),
        a = n(481060),
        r = n(289823),
        l = n(594174);
      e.Z = function (t) {
        let {
            recipients: e,
            size: n,
            status: o,
            isTyping: d,
            className: c,
            ...u
          } = t,
          _ = a.AvatarSizeSpecs[n],
          A = (0, s.Wu)(
            [l.default],
            () =>
              e.slice(0, 2).map((t) => {
                let e = l.default.getUser(t);
                if (null != e) return e.getAvatarURL(void 0, _.size, !1);
              }),
            [e, _.size],
          );
        return (0, i.jsx)(r.Z, {
          "aria-label": u["aria-label"],
          "aria-hidden": u["aria-hidden"],
          backSrc: A[0],
          frontSrc: A[1],
          size: n,
          status: o,
          isTyping: null != d && d,
          className: c,
        });
      };
    },
    164375: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return N;
          },
        }),
        n(47120),
        n(733860);
      var i = n(200651),
        s = n(192379),
        a = n(481060),
        r = n(493683),
        l = n(785232),
        o = n(922611),
        d = n(592125),
        c = n(594174),
        u = n(626135),
        _ = n(799352),
        A = n(343544),
        I = n(14251),
        S = n(110223),
        h = n(981631),
        m = n(388032),
        g = n(69538);
      let x = (t) => {
          let { multipleBlockedUsers: e } = t;
          return (0, o.Do)({ location: "blocked_user_in_gdm_header" })
            ? m.intl.string(m.t["mwJJ+f"])
            : e
              ? m.intl.string(m.t.aJRlSU)
              : m.intl.string(m.t.rlBMub);
        },
        E = (t) => {
          let { numOfBlockedUsers: e, numOfIgnoredUsers: n } = t;
          if (!(0, o.Do)({ location: "blocked_user_in_voice_channel_header" }))
            return;
          let s = e > 0,
            a = n > 0;
          return s && a
            ? (0, i.jsxs)(i.Fragment, {
                children: [
                  m.intl.string(m.t.xbRNIy),
                  (0, i.jsx)("br", {}),
                  m.intl.string(m.t["Bp2/np"]),
                ],
              })
            : s
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    m.intl.format(m.t.iKtixc, { n: e }),
                    (0, i.jsx)("br", {}),
                    m.intl.string(m.t.SN1hrq),
                  ],
                })
              : a
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      m.intl.format(m.t["6IRwub"], { n: n }),
                      (0, i.jsx)("br", {}),
                      m.intl.string(m.t["6AKLRk"]),
                    ],
                  })
                : null;
        },
        f = (t) => {
          let {
              channelId: e,
              blockedUserIds: n,
              ignoredUserIds: s,
              isStealthRemediationEnabled: r,
            } = t,
            o = n.length > 1;
          if (!r) {
            var u;
            return [
              {
                icon: o
                  ? (0, i.jsx)(a.GroupIcon, {})
                  : (0, i.jsx)(a.UserIcon, {}),
                text: o
                  ? m.intl.formatToPlainString(m.t.Zqlt5e, {
                      blockedUserCount: n.length,
                    })
                  : m.intl.formatToPlainString(m.t.V0aCFx, {
                      userName:
                        null === (u = c.default.getUser([...n][0])) ||
                        void 0 === u
                          ? void 0
                          : u.username,
                    }),
              },
              {
                icon: (0, i.jsx)(a.BellSlashIcon, {}),
                text: m.intl.string(m.t["RIMw5+"]),
              },
              {
                icon: (0, i.jsx)(a.EnvelopeIcon, {}),
                text: m.intl.string(m.t.bejNWF),
              },
            ];
          }
          let _ = d.Z.getChannel(e),
            A = n.length > 0,
            S = s.length > 0,
            h = [
              {
                icon: (0, i.jsx)("div", {
                  className: g.icon,
                  children: (0, i.jsx)(a.CircleCheckIcon, {}),
                }),
                text: m.intl.string(m.t["RIMw5+"]),
                className: g.row,
              },
              {
                icon: (0, i.jsx)("div", {
                  className: g.icon,
                  children: (0, i.jsx)(a.CircleInformationIcon, {}),
                }),
                text: m.intl.string(m.t.bejNWF),
                className: g.row,
              },
            ];
          if (A && S) {
            let t = [...n, ...s],
              r = t.slice(0, 2);
            h.unshift({
              icon: (0, i.jsx)("div", {
                className: g.icon,
                children: (0, i.jsx)(l.Z, {
                  recipients: r,
                  size: a.AvatarSizes.SIZE_32,
                }),
              }),
              text: (0, I.a)(r, t.length, null == _ ? void 0 : _.guild_id, e),
              className: g.row,
            });
          } else {
            let t = A ? [...n].slice(0, 2) : [...s].slice(0, 2),
              a = A ? n.length : s.length;
            h.unshift({
              icon: (0, i.jsx)("div", {
                className: g.icon,
                children: (0, I.r)(t, null == _ ? void 0 : _.guild_id),
              }),
              text: (0, I.a)(t, a, null == _ ? void 0 : _.guild_id, e),
              className: g.row,
            });
          }
          return h;
        };
      function N(t) {
        let {
            channelId: e,
            blockedUserIds: n,
            ignoredUserIds: a = [],
            transitionState: l,
            onClose: d,
          } = t,
          c = (0, o.Do)({ location: "blocked_user_in_gdm_modal" });
        s.useEffect(() => {
          u.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: e,
            warning_medium: S.WR.MODAL,
            blocked_user_ids: n,
            ignored_user_ids: a,
          });
        }, [e, n, a]);
        let I = n.length > 1;
        return (0, i.jsx)(A.Z, {
          headerText: (0, i.jsx)(x, { multipleBlockedUsers: I }),
          secondaryHeaderText: c ? void 0 : m.intl.string(m.t["mwJJ+f"]),
          descriptionText: (0, i.jsx)(E, {
            numOfBlockedUsers: n.length,
            numOfIgnoredUsers: a.length,
          }),
          infoRows: f({
            channelId: e,
            blockedUserIds: n,
            ignoredUserIds: a,
            isStealthRemediationEnabled: c,
          }),
          onDismissAndStay: () => {
            d(),
              (0, _.O)(e),
              u.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: S.q.CLICK_TO_STAY,
                channel_id: e,
                warning_medium: S.WR.MODAL,
                blocked_user_ids: n,
                ignored_user_ids: a,
              });
          },
          onDismissAndLeave: () => {
            d(),
              (0, _.O)(e),
              r.Z.closePrivateChannel(e, !0, !0),
              u.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: S.q.CLICK_TO_LEAVE,
                channel_id: e,
                warning_medium: S.WR.MODAL,
                blocked_user_ids: n,
                ignored_user_ids: a,
              });
          },
          leaveButtonText: m.intl.string(m.t.I4q1kJ),
          stayButtonText: m.intl.string(m.t.DRJhmZ),
          transitionState: l,
          onClose: d,
        });
      }
    },
    343544: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return _;
        },
      });
      var i = n(200651),
        s = n(192379),
        a = n(120356),
        r = n.n(a),
        l = n(481060),
        o = n(511010),
        d = n(922611),
        c = n(550887),
        u = n(444812);
      function _(t) {
        let {
            headerText: e,
            secondaryHeaderText: n,
            descriptionText: a,
            infoRows: _,
            onDismissAndStay: A,
            onDismissAndLeave: I,
            leaveButtonText: S,
            stayButtonText: h,
            transitionState: m,
            impression: g,
          } = t,
          x = (0, d.Do)({ location: "blocked_user_warning_modal" });
        return (0, i.jsxs)(l.ModalRoot, {
          transitionState: m,
          impression: g,
          children: [
            (0, i.jsx)("img", { alt: "", className: c.headerImage, src: u }),
            (0, i.jsxs)(l.ModalHeader, {
              separator: !1,
              className: c.header,
              children: [
                (0, i.jsxs)(l.Heading, {
                  variant: x ? "heading-xl/bold" : "heading-lg/bold",
                  color: x ? "header-primary" : void 0,
                  className: c.title,
                  children: [
                    e,
                    null != n &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("br", {}), n],
                      }),
                  ],
                }),
                null != a &&
                  (0, i.jsx)(l.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: a,
                  }),
              ],
            }),
            (0, i.jsxs)(l.ModalContent, {
              className: c.content,
              children: [
                (0, i.jsx)("div", {
                  className: c.infoGroup,
                  children: _.map((t, e) =>
                    (0, i.jsxs)(
                      s.Fragment,
                      {
                        children: [
                          (0, i.jsxs)("div", {
                            className: r()(c.infoRow, t.className),
                            children: [
                              t.icon,
                              (0, i.jsx)(l.Text, {
                                variant: "text-md/medium",
                                children: t.text,
                              }),
                            ],
                          }),
                          e < _.length - 1 && (0, i.jsx)(o.Z, {}),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
                (0, i.jsxs)("div", {
                  className: c.buttonGroup,
                  children: [
                    (0, i.jsx)(l.Button, {
                      color: l.Button.Colors.PRIMARY,
                      onClick: A,
                      children: h,
                    }),
                    (0, i.jsx)(l.Button, {
                      color: l.Button.Colors.BRAND,
                      size: l.Button.Sizes.MEDIUM,
                      onClick: I,
                      className: c.leave,
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
          return u;
        },
        r: function () {
          return c;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(481060),
        a = n(785232),
        r = n(594174),
        l = n(5192),
        o = n(388032),
        d = n(69538);
      let c = (t, e) => {
          if (1 === t.length) {
            let n = r.default.getUser(t[0]);
            return null != n
              ? (0, i.jsx)(s.Avatar, {
                  src: n.getAvatarURL(e, 32),
                  size: s.AvatarSizes.SIZE_32,
                  "aria-hidden": !0,
                })
              : (0, i.jsx)(s.UserIcon, {});
          }
          return (0, i.jsx)(a.Z, {
            recipients: t,
            size: s.AvatarSizes.SIZE_32,
          });
        },
        u = (t, e, n, a) => {
          let c = [...t].map((t) => r.default.getUser(t)),
            u = (t) =>
              (0, i.jsx)(s.Text, {
                variant: "text-md/semibold",
                className: d.username,
                children: l.ZP.getName(n, a, t),
              });
          return e >= 4
            ? o.intl.format(o.t.qfo6KS, {
                usernameHook1: () => u(c[0]),
                usernameHook2: () => u(c[1]),
                numberOfOtherUsers: e - t.length,
              })
            : 3 === e
              ? o.intl.format(o.t["67ZE+/"], {
                  usernameHook1: () => u(c[0]),
                  usernameHook2: () => u(c[1]),
                })
              : 2 === e
                ? o.intl.format(o.t.veV4IC, {
                    usernameHook1: () => u(c[0]),
                    usernameHook2: () => u(c[1]),
                  })
                : o.intl.format(o.t["4WHCtr"], { usernameHook: () => u(c[0]) });
        };
    },
    640453: function (t, e, n) {
      t.exports = {
        container: "container_e85446",
        circularImage: "circularImage_e85446",
        dots: "dots_e85446",
      };
    },
    69538: function (t, e, n) {
      t.exports = {
        row: "row_eb2d7d",
        icon: "icon_eb2d7d",
        username: "username_eb2d7d",
      };
    },
    550887: function (t, e, n) {
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
//# sourceMappingURL=c5f48314676bc114084a.js.map
