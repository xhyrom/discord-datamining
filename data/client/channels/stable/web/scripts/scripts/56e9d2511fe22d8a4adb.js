"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20882"],
  {
    328977: function (e, t, n) {
      n.d(t, {
        L: function () {
          return r;
        },
      });
      var i = n(442837),
        s = n(826581);
      function r(e) {
        let { guildId: t } = e;
        return (0, i.e7)([s.Z], () => s.Z.getSelectedGuildJoinRequest(t), [t]);
      }
    },
    412222: function (e, t, n) {
      n.d(t, {
        C: function () {
          return r;
        },
      });
      var i = n(442837),
        s = n(826581);
      function r(e) {
        let { guildId: t } = e;
        return (0, i.e7)([s.Z], () => s.Z.getSelectedSortOrder(t), [t]);
      }
    },
    223312: function (e, t, n) {
      n.d(t, {
        j: function () {
          return a;
        },
      }),
        n(47120);
      var i = n(192379),
        s = n(442837),
        r = n(826581),
        l = n(246364);
      function a(e) {
        let { guildId: t, applicationStatus: n, sortOrder: a } = e,
          o = (0, s.e7)([r.Z], () => r.Z.getRequests(t, n), [n, t]);
        return {
          guildJoinRequests: i.useMemo(
            () => (a === l.Nw.TIMESTAMP_DESC ? [...o].reverse() : o),
            [a, o],
          ),
        };
      }
    },
    146463: function (e, t, n) {
      n.d(t, {
        u: function () {
          return p;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(120356),
        r = n.n(s),
        l = n(91192),
        a = n(442837),
        o = n(481060),
        c = n(209613),
        d = n(430824),
        u = n(855981),
        m = n(55543),
        h = n(693546),
        x = n(826581),
        j = n(246364),
        g = n(328977),
        v = n(571728),
        C = n(762660),
        f = n(388032),
        R = n(372819);
      let E = () => null;
      function p(e) {
        let { status: t } = e,
          n = f.intl.string(f.t["/wqiSk"]),
          s = f.intl.string(f.t.o47YZm);
        switch (t) {
          case j.wB.REJECTED:
            (n = f.intl.string(f.t["7YSJ6e"])), (s = f.intl.string(f.t.i05OUV));
            break;
          case j.wB.APPROVED:
            (n = f.intl.string(f.t.bv82GR)), (s = f.intl.string(f.t.D4OUHR));
            break;
          default:
            (n = f.intl.string(f.t["/wqiSk"])), (s = f.intl.string(f.t.o47YZm));
        }
        return (0, i.jsxs)("div", {
          className: R.emptyContainer,
          children: [
            (0, i.jsxs)("div", {
              className: R.emptyIcon,
              children: [
                (0, i.jsx)(m.Z, { className: R.star }),
                (0, i.jsx)(o.CheckmarkLargeIcon, {
                  size: "md",
                  color: "currentColor",
                  className: R.checkmark,
                }),
                (0, i.jsx)(u.Z, { className: R.plus }),
              ],
            }),
            (0, i.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              children: n,
            }),
            (0, i.jsx)(o.Text, {
              color: "header-secondary",
              className: R.emptyBody,
              variant: "text-sm/normal",
              children: s,
            }),
          ],
        });
      }
      t.Z = function (e) {
        var t;
        let {
            applicationStatus: n,
            guildJoinRequests: s,
            guildId: u,
            onScroll: m,
            listRef: I,
            atMaxMemberCapacity: T,
          } = e,
          N = (0, a.e7)([d.Z], () => d.Z.getGuild(u), [u]),
          b = (0, a.e7)([x.Z], () => x.Z.isFetching()),
          Z = b ? [s.length + 25] : [s.length],
          w = (0, g.L)({ guildId: u }),
          S = null !== (t = (0, v.A)({ guildId: u })) && void 0 !== t ? t : 0,
          k = (0, c.Z)("guild-join-requests"),
          A = (e) => {
            let { row: t } = e,
              l = s[t];
            return null == l
              ? (0, i.jsx)(C.h, {}, t)
              : (0, i.jsx)(
                  C.C,
                  {
                    className: r()({
                      [R.selected]: w === l,
                      [R.siblingSelected]: w === s[t - 1],
                    }),
                    guild: N,
                    guildJoinRequest: l,
                    onClick: () => h.Z.setSelectedGuildJoinRequest(u, l),
                    applicationStatus: n,
                    atMaxMemberCapacity: T,
                  },
                  ""
                    .concat(l.userId, "-")
                    .concat(l.applicationStatus, "-")
                    .concat(t),
                );
          };
        return b || 0 !== s.length
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                0 !== S &&
                  n === j.wB.SUBMITTED &&
                  (0, i.jsx)(o.Text, {
                    className: R.title,
                    variant: "text-xs/semibold",
                    color: "header-secondary",
                    children: (function (e, t) {
                      let n = t.toLocaleString();
                      switch (e) {
                        case j.wB.SUBMITTED:
                          return f.intl.formatToPlainString(f.t["s/46en"], {
                            count: n,
                          });
                        case j.wB.REJECTED:
                          return f.intl.formatToPlainString(f.t["9voQIC"], {
                            count: n,
                          });
                        case j.wB.APPROVED:
                          return f.intl.formatToPlainString(f.t["8hLZsb"], {
                            count: n,
                          });
                        default:
                          return "";
                      }
                    })(n, S).toUpperCase(),
                  }),
                (0, i.jsx)(l.bG, {
                  navigator: k,
                  children: (0, i.jsx)(l.SJ, {
                    children: (e) => {
                      let { ref: t, role: n, ...s } = e;
                      return (0, i.jsx)(
                        o.List,
                        {
                          innerRole: n,
                          innerAriaLabel: f.intl.string(f.t["9Oq93t"]),
                          ref: (e) => {
                            var n;
                            (I.current = e),
                              (t.current =
                                null !==
                                  (n =
                                    null == e ? void 0 : e.getScrollerNode()) &&
                                void 0 !== n
                                  ? n
                                  : null);
                          },
                          paddingTop: 0,
                          paddingBottom: 16,
                          sectionHeight: 0,
                          rowHeight: 64,
                          renderSection: E,
                          renderRow: A,
                          sections: Z,
                          onScroll: m,
                          fade: !0,
                          ...s,
                        },
                        "guild-application-review",
                      );
                    },
                  }),
                }),
              ],
            })
          : (0, i.jsx)(p, { status: n });
      };
    },
    762660: function (e, t, n) {
      n.d(t, {
        C: function () {
          return C;
        },
        h: function () {
          return f;
        },
      }),
        n(47120),
        n(411104);
      var i = n(200651),
        s = n(192379),
        r = n(120356),
        l = n.n(r),
        a = n(913527),
        o = n.n(a),
        c = n(481060),
        d = n(239091),
        u = n(598077),
        m = n(768581),
        h = n(693546),
        x = n(246364),
        j = n(388032),
        g = n(372819);
      function v(e) {
        let { icon: t, onClick: n, submitting: s, disabled: r } = e;
        return (0, i.jsx)(c.Clickable, {
          className: l()(g.actionIconContainer, { [g.disabled]: r || s }),
          onClick: n,
          children: s
            ? (0, i.jsx)(c.Dots, {
                className: g.icon,
                dotRadius: 2,
                themed: !0,
              })
            : (0, i.jsx)(t, {
                className: g.icon,
                size: "xxs",
                color: "currentColor",
              }),
        });
      }
      function C(e) {
        let {
            applicationStatus: t,
            guild: r,
            guildJoinRequest: a,
            className: C,
            onClick: f,
            atMaxMemberCapacity: R,
          } = e,
          [E, p] = s.useState(null),
          { user: I, createdAt: T } = a;
        if (null == I) throw Error("Missing user on this guild join request!");
        let N = s.useMemo(() => new u.Z(I), [I]),
          b = m.ZP.getUserAvatarURL(N),
          Z = t === x.wB.SUBMITTED,
          w = s.useCallback(
            async (e, t) => {
              let { guildId: n, userId: i } = e;
              if (null == E) {
                p(t);
                try {
                  await h.Z.updateGuildJoinRequest(n, i, a.joinRequestId, t);
                } catch (e) {
                  (0, c.showToast)(
                    (0, c.createToast)(
                      j.intl.string(j.t.R0RpRU),
                      c.ToastType.FAILURE,
                    ),
                  ),
                    p(null);
                }
              }
            },
            [E, a.joinRequestId],
          ),
          S = async () => {
            await w(a, x.wB.APPROVED);
          },
          k = async () => {
            await w(a, x.wB.REJECTED);
          };
        return (0, i.jsxs)(c.Clickable, {
          className: l()(g.container, C),
          onClick: f,
          children: [
            (0, i.jsx)(c.Avatar, {
              src: b,
              size: c.AvatarSizes.SIZE_40,
              "aria-label": I.username,
              className: g.__invalid_spacer,
            }),
            (0, i.jsxs)("div", {
              className: g.userDetails,
              children: [
                (0, i.jsx)(c.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: I.username,
                }),
                (0, i.jsx)(c.Text, {
                  className: g.createdAt,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: o()(T).format("lll"),
                }),
              ],
            }),
            Z &&
              !R &&
              (0, i.jsx)(v, {
                icon: c.CheckmarkLargeIcon,
                onClick: S,
                submitting: E === x.wB.APPROVED,
                disabled: null != E && E !== x.wB.APPROVED,
              }),
            Z &&
              (0, i.jsx)(v, {
                icon: c.XSmallIcon,
                onClick: k,
                submitting: E === x.wB.REJECTED,
                disabled: null != E && E !== x.wB.REJECTED,
              }),
            (0, i.jsx)(c.Clickable, {
              className: l()(g.overflowMenuContainer, {
                [g.disabled]: null != E,
              }),
              onClick: (e) => {
                (0, d.jW)(
                  e,
                  async () => {
                    let { default: e } = await n
                      .e("84259")
                      .then(n.bind(n, 597409));
                    return (t) => (0, i.jsx)(e, { ...t, guild: r, user: N });
                  },
                  { position: "bottom", align: "right" },
                );
              },
              children: (0, i.jsx)(c.MoreHorizontalIcon, {
                size: "custom",
                color: "currentColor",
                className: g.icon,
                width: 18,
              }),
            }),
          ],
        });
      }
      function f() {
        let e = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
          t = "".concat(Math.floor(25 * Math.random()) + 50, "px");
        return (0, i.jsxs)("div", {
          className: g.placeholder,
          children: [
            (0, i.jsx)("div", { className: l()(g.placeholderAvatar) }),
            (0, i.jsxs)("div", {
              className: g.userDetails,
              children: [
                (0, i.jsx)("div", {
                  className: g.placeholderUsername,
                  style: { maxWidth: e },
                }),
                (0, i.jsx)("div", {
                  className: g.placeholderCreatedAt,
                  style: { maxWidth: t },
                }),
              ],
            }),
          ],
        });
      }
    },
    50662: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return R;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(913527),
        r = n.n(s),
        l = n(442837),
        a = n(692547),
        o = n(481060),
        c = n(239091),
        d = n(171368),
        u = n(650774),
        m = n(271383),
        h = n(594174),
        x = n(709054),
        j = n(246364),
        g = n(360328),
        v = n(981631),
        C = n(388032),
        f = n(364068);
      function R(e) {
        var t;
        let { guildJoinRequest: s, guild: R, guildJoinRequestUser: E } = e,
          { createdAt: p, actionedAt: I, guildId: T, userId: N } = s,
          {
            approveRequest: b,
            rejectRequest: Z,
            submitting: w,
          } = (0, g.s)(T, N, s.joinRequestId),
          S = null === (t = s.actionedByUser) || void 0 === t ? void 0 : t.id,
          k = (0, l.e7)([h.default], () => h.default.getUser(S)),
          A = (0, l.e7)(
            [m.ZP],
            () => (null != S ? m.ZP.getMember(T, S) : null),
            [S, T],
          ),
          B = (0, l.e7)([u.Z], () => u.Z.getMemberCount(T)),
          P = (null != B ? B : 0) >= R.maxMembers,
          y = C.intl.string(C.t["4eQVBA"]),
          U = (0, i.jsx)(o.ClockIcon, {
            size: "custom",
            color: "currentColor",
            width: 24,
            height: 24,
            className: f.icon,
          });
        s.applicationStatus === j.wB.APPROVED
          ? ((y = C.intl.string(C.t.aURgY2)),
            (U = (0, i.jsx)(o.CircleCheckIcon, {
              size: "md",
              className: f.iconApproved,
              color: a.Z.colors.WHITE.css,
              secondaryColor: "currentColor",
            })))
          : s.applicationStatus === j.wB.REJECTED &&
            ((y = C.intl.string(C.t.bSZklZ)),
            (U = (0, i.jsx)(o.CircleXIcon, {
              size: "md",
              color: a.Z.colors.WHITE.css,
              secondaryColor: a.Z.colors.STATUS_DANGER.css,
            })));
        let M =
          null != k && null != I
            ? C.intl.format(C.t.pRpZCQ, {
                date: r()(x.default.extractTimestamp(I)).format("ll"),
                usernameHook: function () {
                  var e;
                  return (0, i.jsx)(
                    o.Clickable,
                    {
                      className: f.actionedByUser,
                      onClick: () =>
                        (0, d.openUserProfileModal)({
                          userId: k.id,
                          guildId: T,
                          analyticsLocation: {
                            section:
                              v.jXE
                                .GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                            object: v.qAy.ACTIONED_BY_USER,
                          },
                        }),
                      tag: "div",
                      role: "link",
                      children: (0, i.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "header-primary",
                        children:
                          null !== (e = null == A ? void 0 : A.nick) &&
                          void 0 !== e
                            ? e
                            : k.username,
                      }),
                    },
                    "username-hook",
                  );
                },
              })
            : r()(p).format("lll");
        return (0, i.jsxs)("div", {
          className: f.container,
          children: [
            (0, i.jsxs)("div", {
              className: f.wrapper,
              children: [
                (0, i.jsxs)("div", {
                  className: f.inline,
                  children: [
                    U,
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)(o.Heading, {
                          variant: "heading-sm/semibold",
                          children: y,
                        }),
                        (0, i.jsx)(o.Text, {
                          className: f.headerSubtext,
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: M,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: f.inline,
                  children: [
                    s.applicationStatus === j.wB.SUBMITTED &&
                      (0, i.jsxs)("div", {
                        className: f.buttons,
                        children: [
                          (0, i.jsx)(o.Tooltip, {
                            text: C.intl.string(C.t.RbIXi4),
                            shouldShow: P,
                            children: (e) =>
                              (0, i.jsx)(o.Button, {
                                ...e,
                                color: o.Button.Colors.GREEN,
                                submitting: w,
                                disabled: P,
                                onClick: b,
                                children: C.intl.string(C.t.BzjDQE),
                              }),
                          }),
                          (0, i.jsx)(o.Button, {
                            color: o.Button.Colors.RED,
                            onClick: Z,
                            disabled: w,
                            children: C.intl.string(C.t.hDtbs7),
                          }),
                        ],
                      }),
                    (0, i.jsx)(o.Clickable, {
                      onClick: (e) => {
                        (0, c.jW)(e, async () => {
                          let { default: e } = await n
                            .e("84259")
                            .then(n.bind(n, 597409));
                          return (t) =>
                            (0, i.jsx)(e, { ...t, guild: R, user: E });
                        });
                      },
                      className: f.overflow,
                      children: (0, i.jsx)(o.MoreHorizontalIcon, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: f.iconInteractive,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            s.applicationStatus === j.wB.REJECTED &&
              null != s.rejectionReason &&
              (0, i.jsx)("div", {
                className: f.rejectionReason,
                children: (0, i.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children: s.rejectionReason,
                }),
              }),
          ],
        });
      }
    },
    395716: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(442837),
        l = n(481060),
        a = n(287734),
        o = n(592125),
        c = n(693546),
        d = n(388032);
      function u(e) {
        let { joinRequest: t } = e,
          [n, u] = s.useState(!1),
          m = (0, r.e7)([o.Z], () => o.Z.getChannel(t.interviewChannelId)),
          h = s.useCallback(() => {
            (0, l.showToast)(
              (0, l.createToast)(
                d.intl.string(d.t.R0RpRU),
                l.ToastType.FAILURE,
              ),
            );
          }, []),
          x = s.useCallback(async () => {
            if (null != m) {
              a.default.selectPrivateChannel(m.id);
              return;
            }
            if (!n) {
              u(!0);
              try {
                await c.Z.createOrEnterJoinRequestInterview(t.joinRequestId);
              } catch {
                h();
              } finally {
                u(!1);
              }
            }
          }, [m, t.joinRequestId, h, n]);
        return (0, i.jsx)(l.Button, {
          color: l.Button.Colors.BRAND,
          submitting: n,
          onClick: x,
          children: d.intl.string(d.t.aqiUAA),
        });
      }
    },
    673885: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(120356),
        r = n.n(s),
        l = n(481060),
        a = n(906732),
        o = n(171368),
        c = n(768581),
        d = n(51144),
        u = n(981631),
        m = n(388032),
        h = n(64371);
      function x(e) {
        let { user: t, joinRequestId: n, className: s } = e,
          { username: x } = t,
          j = c.ZP.getUserAvatarURL(t),
          { analyticsLocations: g } = (0, a.ZP)(),
          v = () => {
            (0, o.openUserProfileModal)({
              userId: t.id,
              joinRequestId: n,
              sourceAnalyticsLocations: g,
              analyticsLocation: {
                section: u.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                object: u.qAy.JOIN_REQUEST,
              },
            });
          };
        return (0, i.jsxs)("div", {
          className: r()(h.container, s),
          children: [
            (0, i.jsx)(l.Anchor, {
              onClick: v,
              children: (0, i.jsx)(l.Avatar, {
                src: j,
                size: l.AvatarSizes.SIZE_80,
                "aria-label": x,
                className: h.avatar,
              }),
            }),
            (0, i.jsx)("div", {
              className: h.username,
              children: (0, i.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                children: d.ZP.getFormattedName(t),
              }),
            }),
            (0, i.jsx)(l.Anchor, {
              onClick: v,
              children: m.intl.string(m.t.iXAna2),
            }),
          ],
        });
      }
    },
    853486: function (e, t, n) {
      var i = n(200651),
        s = n(192379),
        r = n(481060),
        l = n(665149),
        a = n(51144),
        o = n(246364),
        c = n(666233),
        d = n(50662),
        u = n(395716),
        m = n(673885),
        h = n(981631),
        x = n(388032),
        j = n(337424);
      t.Z = function (e) {
        let {
            guild: t,
            guildJoinRequest: g,
            guildJoinRequestUser: v,
            onClose: C,
          } = e,
          f = s.useMemo(() => {
            var e;
            return null !== (e = g.formResponses) && void 0 !== e ? e : [];
          }, [g.formResponses]),
          R =
            t.hasFeature(h.oNc.CLAN) && g.applicationStatus === o.wB.SUBMITTED,
          E = s.useCallback(
            () =>
              (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("17945").then(n.bind(n, 223926));
                return (n) =>
                  (0, i.jsx)(e, {
                    ...n,
                    guild: t,
                    guildJoinRequest: g,
                    user: v,
                  });
              }),
            [t, g, v],
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(l.ZP, {
              toolbar: (0, i.jsx)(l.ZP.Icon, {
                icon: r.XSmallIcon,
                onClick: C,
                tooltip: x.intl.string(x.t.cpT0Cg),
              }),
              children: [
                (0, i.jsx)(l.ZP.Icon, {
                  icon: r.UserIcon,
                  disabled: !0,
                  "aria-label": x.intl.string(x.t.PuCkTU),
                }),
                (0, i.jsx)(r.Heading, {
                  variant: "heading-md/semibold",
                  children: a.ZP.getName(v),
                }),
              ],
            }),
            (0, i.jsx)(d.Z, {
              guildJoinRequest: g,
              guildJoinRequestUser: v,
              guild: t,
            }),
            (0, i.jsxs)(r.Scroller, {
              children: [
                (0, i.jsxs)("div", {
                  className: j.container,
                  children: [
                    (0, i.jsx)(m.Z, {
                      user: v,
                      joinRequestId: g.joinRequestId,
                    }),
                    R &&
                      (0, i.jsxs)("div", {
                        className: j.actionButtons,
                        children: [
                          (0, i.jsx)(u.Z, { joinRequest: g }),
                          (0, i.jsx)(r.Button, {
                            color: r.ButtonColors.PRIMARY,
                            onClick: E,
                            children: x.intl.string(x.t["6DpJRU"]),
                          }),
                        ],
                      }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: j.disabledFormRenderer,
                  children: (0, i.jsx)(c.Z, {
                    guildId: t.id,
                    formFields: f,
                    user: v,
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    666233: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var s = n(442837),
        r = n(481060),
        l = n(594174),
        a = n(246364),
        o = n(489813),
        c = n(186078),
        d = n(73880),
        u = n(196345),
        m = n(707592),
        h = n(388032);
      t.Z = function (e) {
        let { formFields: t, user: n, showRequirements: x = !0 } = e;
        return null ==
          (0, s.e7)([l.default], () =>
            null != n ? n : l.default.getCurrentUser(),
          )
          ? null
          : (0, i.jsxs)(i.Fragment, {
              children: [
                x &&
                  (0, i.jsx)(o.Ih, {
                    icon: r.ShieldIcon,
                    text: h.intl.string(h.t.v2z4c3),
                    meetsRequirement: !0,
                  }),
                t.map((e, t) =>
                  (function (e, t) {
                    switch (e.field_type) {
                      case a.QJ.TERMS:
                        return (0, i.jsx)(u.QC, { formField: e }, t);
                      case a.QJ.TEXT_INPUT:
                        return (0, i.jsx)(m.YJ, { formField: e }, t);
                      case a.QJ.PARAGRAPH:
                        return (0, i.jsx)(d.jn, { formField: e }, t);
                      case a.QJ.MULTIPLE_CHOICE:
                        return (0, i.jsx)(c.QH, { formField: e }, t);
                    }
                  })(e, t),
                ),
              ],
            });
      };
    },
  },
]);
//# sourceMappingURL=56e9d2511fe22d8a4adb.js.map
