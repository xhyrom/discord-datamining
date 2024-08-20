"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44798"],
  {
    985159: function (e, s, n) {
      n.d(s, {
        z: function () {
          return r;
        },
      });
      var a = n(442837),
        t = n(826581);
      function r(e) {
        let { guildId: s } = e;
        return (0, a.e7)([t.Z], () => t.Z.getSelectedApplicationTab(s), [s]);
      }
    },
    328977: function (e, s, n) {
      n.d(s, {
        L: function () {
          return r;
        },
      });
      var a = n(442837),
        t = n(826581);
      function r(e) {
        let { guildId: s } = e;
        return (0, a.e7)([t.Z], () => t.Z.getSelectedGuildJoinRequest(s), [s]);
      }
    },
    412222: function (e, s, n) {
      n.d(s, {
        C: function () {
          return r;
        },
      });
      var a = n(442837),
        t = n(826581);
      function r(e) {
        let { guildId: s } = e;
        return (0, a.e7)([t.Z], () => t.Z.getSelectedSortOrder(s), [s]);
      }
    },
    223312: function (e, s, n) {
      n.d(s, {
        j: function () {
          return i;
        },
      }),
        n(47120);
      var a = n(470079),
        t = n(442837),
        r = n(826581),
        l = n(246364);
      function i(e) {
        let { guildId: s, applicationStatus: n, sortOrder: i } = e,
          o = (0, t.e7)([r.Z], () => r.Z.getRequests(s, n), [n, s]);
        return {
          guildJoinRequests: a.useMemo(
            () => (i === l.Nw.TIMESTAMP_DESC ? [...o].reverse() : o),
            [i, o],
          ),
        };
      }
    },
    998420: function (e, s, n) {
      n.r(s);
      var a = n(735250),
        t = n(470079),
        r = n(442837),
        l = n(100527),
        i = n(906732),
        o = n(252618),
        c = n(598077),
        d = n(430824),
        u = n(693546),
        I = n(863249),
        E = n(328977),
        _ = n(208257),
        T = n(853486),
        N = n(689938),
        R = n(344200);
      s.default = function (e) {
        let { guildId: s } = e,
          { analyticsLocations: n } = (0, i.ZP)(
            l.Z.GUILD_MEMBER_APPLICATION_REVIEW,
          ),
          C = (0, E.L)({ guildId: s }),
          { user: M } = null != C ? C : {},
          m = t.useMemo(() => (null != M ? new c.Z(M) : null), [M]),
          A = (0, r.e7)([d.Z], () => d.Z.getGuild(s), [s]);
        return (
          (0, o.Tt)({
            subsection:
              N.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REQUIREMENTS,
            location: null == A ? void 0 : A.name,
          }),
          t.useEffect(() => {
            I.Z.fetchVerificationForm(s);
          }, [s]),
          (0, a.jsxs)(i.Gt, {
            value: n,
            children: [
              (0, a.jsx)("div", {
                className: R.content,
                children: (0, a.jsx)(_.Z, { guildId: s }),
              }),
              null != C &&
                null != A &&
                null != m &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", { className: R.sidebarSeparator }),
                    (0, a.jsx)("section", {
                      className: R.sidebar,
                      children: (0, a.jsx)(T.Z, {
                        guild: A,
                        guildJoinRequest: C,
                        guildJoinRequestUser: m,
                        onClose: () => u.Z.setSelectedGuildJoinRequest(s, null),
                      }),
                    }),
                  ],
                }),
            ],
          })
        );
      };
    },
    572940: function (e, s, n) {
      var a = n(735250),
        t = n(470079),
        r = n(481060),
        l = n(246364),
        i = n(689938);
      s.Z = function (e) {
        let { className: s, sortOrder: n, onSortChange: o } = e,
          c = t.useMemo(
            () => [
              {
                value: l.Nw.TIMESTAMP_DESC,
                label:
                  i.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_NEWEST,
              },
              {
                value: l.Nw.TIMESTAMP_ASC,
                label:
                  i.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_OLDEST,
              },
            ],
            [],
          );
        return (0, a.jsx)(r.SingleSelect, {
          className: s,
          onChange: o,
          value: n,
          options: c,
        });
      };
    },
    208257: function (e, s, n) {
      n(47120);
      var a = n(735250),
        t = n(470079),
        r = n(442837),
        l = n(481060),
        i = n(970606),
        o = n(616230),
        c = n(777036),
        d = n(650774),
        u = n(430824),
        I = n(693546),
        E = n(246364),
        _ = n(98493),
        T = n(985159),
        N = n(328977),
        R = n(412222),
        C = n(223312),
        M = n(571728),
        m = n(572940),
        A = n(80487),
        x = n(146463),
        h = n(981631),
        S = n(689938),
        j = n(412449);
      function P(e) {
        let { guild: s } = e;
        return (0, a.jsxs)("div", {
          className: j.setupHeader,
          children: [
            (0, a.jsxs)("div", {
              className: j.previewContainer,
              children: [
                (0, a.jsx)(l.Heading, {
                  variant: "heading-lg/bold",
                  children:
                    S.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP,
                }),
                (0, a.jsxs)(l.Button, {
                  color: l.Button.Colors.TRANSPARENT,
                  onClick: () => {
                    (0, l.openModalLazy)(async () => {
                      let { default: e } = await n
                        .e("52657")
                        .then(n.bind(n, 645264));
                      return (n) =>
                        (0, a.jsx)(e, { ...n, guildId: s.id, isPreview: !0 });
                    });
                  },
                  size: l.ButtonSizes.SMALL,
                  "aria-label":
                    S.Z.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION,
                  innerClassName: j.previewButton,
                  children: [
                    (0, a.jsx)(l.EyeIcon, {
                      size: "xs",
                      color: "currentColor",
                    }),
                    S.Z.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION,
                  ],
                }),
              ],
            }),
            (0, a.jsx)(l.Text, {
              className: j.description,
              variant: "text-sm/medium",
              color: "header-secondary",
              children: S.Z.Messages.CLAN_APPLICATION_SETUP_HEADER.format({
                guildName: s.name,
              }),
            }),
          ],
        });
      }
      function g(e) {
        var s, n;
        let { guildId: g } = e,
          b = t.useRef(null),
          [v, p] = t.useState((0, T.z)({ guildId: g })),
          f = (0, R.C)({ guildId: g }),
          Z = (0, N.L)({ guildId: g }),
          B = null !== (s = (0, M.A)({ guildId: g })) && void 0 !== s ? s : 0,
          { guildJoinRequests: O } = (0, C.j)({
            guildId: g,
            applicationStatus: "REVIEW_APPLICATION" === v ? E.wB.SUBMITTED : v,
            sortOrder: f,
          }),
          L = (0, r.e7)([u.Z], () => u.Z.getGuild(g), [g]),
          D = (0, r.e7)([d.Z], () => d.Z.getMemberCount(g)),
          G = null != L && (null != D ? D : 0) >= L.maxMembers,
          { fetchNextPage: w } = (0, _.m)({ guildId: g, guildJoinRequests: O }),
          U = t.useRef(!1);
        !U.current &&
          ((U.current = !0),
          w(f, "REVIEW_APPLICATION" === v ? E.wB.SUBMITTED : v));
        let V = t.useRef(!1);
        t.useEffect(() => {
          V.current = !0;
        }, [f, v]),
          t.useEffect(() => {
            if (V.current && 0 !== O.length && "REVIEW_APPLICATION" !== v) {
              var e;
              (V.current = !1),
                I.Z.setSelectedGuildJoinRequest(g, O[0]),
                null === (e = b.current) || void 0 === e || e.scrollToTop();
            }
          }, [g, O, Z, v]);
        let F = t.useCallback(
            async (e) => {
              if ("REVIEW_APPLICATION" !== v)
                f !== e && (I.Z.setSelectedSortOrder(g, e), await w(e, v));
            },
            [v, f, g, w],
          ),
          y = t.useCallback(
            async (e) => {
              if (v !== e) {
                if (
                  (p(e),
                  (0, i.Q2)({
                    guildId: g,
                    source: h.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    tab: e,
                  }),
                  I.Z.setSelectedGuildJoinRequest(g, null),
                  "REVIEW_APPLICATION" !== e)
                )
                  I.Z.setSelectedApplicationTab(g, e), await w(f, e);
              }
            },
            [v, f, g, w],
          ),
          k = t.useCallback(async () => {
            var e;
            if ("REVIEW_APPLICATION" === v) return;
            let s =
              null === (e = b.current) || void 0 === e
                ? void 0
                : e.getScrollerState();
            if (null != s)
              s.scrollHeight - s.scrollTop - s.offsetHeight < 200 &&
                (await w(f, v));
          }, [v, f, w]),
          J =
            null !== (n = null == L ? void 0 : L.hasFeature(h.oNc.CLAN)) &&
            void 0 !== n &&
            n;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(A.Z, {
              currentTab: v,
              onTabItemSelect: y,
              pendingGuildJoinRequestsTotal: B,
              showSetupTab: J,
            }),
            (0, a.jsx)("div", {
              className: j.content,
              children:
                "REVIEW_APPLICATION" === v
                  ? null != L
                    ? (0, a.jsx)(l.ScrollerThin, {
                        children: (0, a.jsxs)("div", {
                          className: j.scrollerContent,
                          children: [
                            (0, a.jsx)(P, { guild: L }),
                            (0, a.jsx)(o.Z, { guild: L, isClanContext: !0 }),
                          ],
                        }),
                      })
                    : null
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        G &&
                          (0, a.jsx)(c.Z, {
                            messageType: c.Q.WARNING,
                            textVariant: "text-sm/medium",
                            className: j.headerWarning,
                            children:
                              S.Z.Messages.CLAN_MAX_MEMBER_LIMIT_WARNING.format(
                                { count: null == L ? void 0 : L.maxMembers },
                              ),
                          }),
                        (0, a.jsx)("div", {
                          className: j.listControls,
                          children: (0, a.jsx)(m.Z, {
                            className: j.sortSelect,
                            sortOrder: f,
                            onSortChange: F,
                          }),
                        }),
                        (0, a.jsx)(l.Text, {
                          className: j.description,
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children:
                            S.Z.Messages
                              .GUILD_SETTINGS_MEMBER_VERIFICATION_LIST_DESCRIPTION,
                        }),
                        (0, a.jsx)(x.Z, {
                          applicationStatus: v,
                          guildJoinRequests: O,
                          guildId: g,
                          onScroll: k,
                          listRef: b,
                          atMaxMemberCapacity: G,
                        }),
                      ],
                    }),
            }),
          ],
        });
      }
      s.Z = t.memo(function (e) {
        let { guildId: s } = e;
        return (0, a.jsx)(g, { guildId: s });
      });
    },
    80487: function (e, s, n) {
      var a = n(735250);
      n(470079);
      var t = n(481060),
        r = n(984370),
        l = n(669405),
        i = n(246364),
        o = n(689938),
        c = n(859955);
      s.Z = function (e) {
        let {
          pendingGuildJoinRequestsTotal: s,
          currentTab: n,
          onTabItemSelect: d,
          showSetupTab: u,
        } = e;
        return (0, a.jsxs)(r.Z, {
          className: c.__invalid_container,
          hideSearch: !0,
          toolbar: (0, a.jsx)("div", {}),
          children: [
            (0, a.jsx)(r.Z.Icon, {
              icon: (0, t.makeIconCompat)(l.Z),
              disabled: !0,
              "aria-label":
                o.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS,
            }),
            (0, a.jsx)(r.Z.Title, {
              className: c.title,
              children: o.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS,
            }),
            (0, a.jsx)(r.Z.Divider, { className: c.divider }),
            (0, a.jsxs)(t.TabBar, {
              "aria-label": o.Z.Messages.FRIENDS,
              selectedItem: n,
              type: "top-pill",
              onItemSelect: d,
              className: c.__invalid_tabBar,
              children: [
                u
                  ? (0, a.jsx)(t.TabBar.Item, {
                      id: "REVIEW_APPLICATION",
                      children:
                        o.Z.Messages
                          .GUILD_SETTINGS_MEMBER_VERIFICATION_REVIEW_APPLICATION_TITLE,
                    })
                  : null,
                (0, a.jsx)(t.TabBar.Item, {
                  id: i.wB.SUBMITTED,
                  children:
                    0 === s
                      ? o.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING
                      : o.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT.format(
                          { count: s },
                        ),
                }),
                (0, a.jsx)(t.TabBar.Item, {
                  id: i.wB.APPROVED,
                  children:
                    o.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED,
                }),
                (0, a.jsx)(t.TabBar.Item, {
                  id: i.wB.REJECTED,
                  children:
                    o.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED,
                }),
              ],
            }),
          ],
        });
      };
    },
    146463: function (e, s, n) {
      var a = n(735250);
      n(470079);
      var t = n(120356),
        r = n.n(t),
        l = n(91192),
        i = n(442837),
        o = n(481060),
        c = n(209613),
        d = n(430824),
        u = n(855981),
        I = n(55543),
        E = n(693546),
        _ = n(826581),
        T = n(246364),
        N = n(328977),
        R = n(571728),
        C = n(762660),
        M = n(689938),
        m = n(811140);
      let A = () => null;
      function x(e) {
        let { status: s } = e,
          n =
            M.Z.Messages
              .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE,
          t =
            M.Z.Messages
              .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY;
        switch (s) {
          case T.wB.REJECTED:
            (n =
              M.Z.Messages
                .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_TITLE),
              (t =
                M.Z.Messages
                  .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_BODY);
            break;
          case T.wB.APPROVED:
            (n =
              M.Z.Messages
                .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_TITLE),
              (t =
                M.Z.Messages
                  .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_BODY);
            break;
          default:
            (n =
              M.Z.Messages
                .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE),
              (t =
                M.Z.Messages
                  .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY);
        }
        return (0, a.jsxs)("div", {
          className: m.emptyContainer,
          children: [
            (0, a.jsxs)("div", {
              className: m.emptyIcon,
              children: [
                (0, a.jsx)(I.Z, { className: m.star }),
                (0, a.jsx)(o.CheckmarkLargeIcon, {
                  size: "md",
                  color: "currentColor",
                  className: m.checkmark,
                }),
                (0, a.jsx)(u.Z, { className: m.plus }),
              ],
            }),
            (0, a.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              children: n,
            }),
            (0, a.jsx)(o.Text, {
              color: "header-secondary",
              className: m.emptyBody,
              variant: "text-sm/normal",
              children: t,
            }),
          ],
        });
      }
      s.Z = function (e) {
        var s;
        let {
            applicationStatus: n,
            guildJoinRequests: t,
            guildId: u,
            onScroll: I,
            listRef: h,
            atMaxMemberCapacity: S,
          } = e,
          j = (0, i.e7)([d.Z], () => d.Z.getGuild(u), [u]),
          P = (0, i.e7)([_.Z], () => _.Z.isFetching()),
          g = P ? [t.length + 25] : [t.length],
          b = (0, N.L)({ guildId: u }),
          v = null !== (s = (0, R.A)({ guildId: u })) && void 0 !== s ? s : 0,
          p = (0, c.Z)("guild-join-requests"),
          f = (e) => {
            let { row: s } = e,
              l = t[s];
            return null == l
              ? (0, a.jsx)(C.h, {}, s)
              : (0, a.jsx)(
                  C.C,
                  {
                    className: r()({
                      [m.selected]: b === l,
                      [m.siblingSelected]: b === t[s - 1],
                    }),
                    guild: j,
                    guildJoinRequest: l,
                    onClick: () => E.Z.setSelectedGuildJoinRequest(u, l),
                    applicationStatus: n,
                    atMaxMemberCapacity: S,
                  },
                  ""
                    .concat(l.userId, "-")
                    .concat(l.applicationStatus, "-")
                    .concat(s),
                );
          };
        return P || 0 !== t.length
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                0 !== v &&
                  n === T.wB.SUBMITTED &&
                  (0, a.jsx)(o.Text, {
                    className: m.title,
                    variant: "text-xs/semibold",
                    color: "header-secondary",
                    children: (function (e, s) {
                      let n = s.toLocaleString();
                      switch (e) {
                        case T.wB.SUBMITTED:
                          return M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT_HYPEN.format(
                            { count: n },
                          );
                        case T.wB.REJECTED:
                          return M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED_COUNT_HYPEN.format(
                            { count: n },
                          );
                        case T.wB.APPROVED:
                          return M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED_COUNT_HYPEN.format(
                            { count: n },
                          );
                        default:
                          return "";
                      }
                    })(n, v).toUpperCase(),
                  }),
                (0, a.jsx)(l.bG, {
                  navigator: p,
                  children: (0, a.jsx)(l.SJ, {
                    children: (e) => {
                      let { ref: s, role: n, ...t } = e;
                      return (0, a.jsx)(
                        o.List,
                        {
                          innerRole: n,
                          innerAriaLabel: M.Z.Messages.MEMBERS,
                          ref: (e) => {
                            var n;
                            (h.current = e),
                              (s.current =
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
                          renderSection: A,
                          renderRow: f,
                          sections: g,
                          onScroll: I,
                          fade: !0,
                          ...t,
                        },
                        "guild-application-review",
                      );
                    },
                  }),
                }),
              ],
            })
          : (0, a.jsx)(x, { status: n });
      };
    },
    762660: function (e, s, n) {
      n.d(s, {
        C: function () {
          return C;
        },
        h: function () {
          return M;
        },
      }),
        n(47120),
        n(411104);
      var a = n(735250),
        t = n(470079),
        r = n(120356),
        l = n.n(r),
        i = n(913527),
        o = n.n(i),
        c = n(481060),
        d = n(239091),
        u = n(598077),
        I = n(768581),
        E = n(693546),
        _ = n(246364),
        T = n(689938),
        N = n(811140);
      function R(e) {
        let { icon: s, onClick: n, submitting: t, disabled: r } = e;
        return (0, a.jsx)(c.Clickable, {
          className: l()(N.actionIconContainer, { [N.disabled]: r || t }),
          onClick: n,
          children: t
            ? (0, a.jsx)(c.Dots, {
                className: N.icon,
                dotRadius: 2,
                themed: !0,
              })
            : (0, a.jsx)(s, {
                className: N.icon,
                size: "xxs",
                color: "currentColor",
              }),
        });
      }
      function C(e) {
        let {
            applicationStatus: s,
            guild: r,
            guildJoinRequest: i,
            className: C,
            onClick: M,
            atMaxMemberCapacity: m,
          } = e,
          [A, x] = t.useState(null),
          { user: h, createdAt: S } = i;
        if (null == h) throw Error("Missing user on this guild join request!");
        let j = t.useMemo(() => new u.Z(h), [h]),
          P = I.ZP.getUserAvatarURL(j),
          g = s === _.wB.SUBMITTED,
          b = t.useCallback(
            async (e, s) => {
              let { guildId: n, userId: a } = e;
              if (null == A) {
                x(s);
                try {
                  await E.Z.updateGuildJoinRequest(n, a, i.joinRequestId, s);
                } catch (e) {
                  (0, c.showToast)(
                    (0, c.createToast)(
                      T.Z.Messages.ERROR_GENERIC_TITLE,
                      c.ToastType.FAILURE,
                    ),
                  ),
                    x(null);
                }
              }
            },
            [A, i.joinRequestId],
          ),
          v = async () => {
            await b(i, _.wB.APPROVED);
          },
          p = async () => {
            await b(i, _.wB.REJECTED);
          };
        return (0, a.jsxs)(c.Clickable, {
          className: l()(N.container, C),
          onClick: M,
          children: [
            (0, a.jsx)(c.Avatar, {
              src: P,
              size: c.AvatarSizes.SIZE_40,
              "aria-label": h.username,
              className: N.__invalid_spacer,
            }),
            (0, a.jsxs)("div", {
              className: N.userDetails,
              children: [
                (0, a.jsx)(c.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: h.username,
                }),
                (0, a.jsx)(c.Text, {
                  className: N.createdAt,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: o()(S).format("lll"),
                }),
              ],
            }),
            g &&
              !m &&
              (0, a.jsx)(R, {
                icon: c.CheckmarkLargeIcon,
                onClick: v,
                submitting: A === _.wB.APPROVED,
                disabled: null != A && A !== _.wB.APPROVED,
              }),
            g &&
              (0, a.jsx)(R, {
                icon: c.XSmallIcon,
                onClick: p,
                submitting: A === _.wB.REJECTED,
                disabled: null != A && A !== _.wB.REJECTED,
              }),
            (0, a.jsx)(c.Clickable, {
              className: l()(N.overflowMenuContainer, {
                [N.disabled]: null != A,
              }),
              onClick: (e) => {
                (0, d.jW)(
                  e,
                  async () => {
                    let { default: e } = await n
                      .e("84259")
                      .then(n.bind(n, 597409));
                    return (s) => (0, a.jsx)(e, { ...s, guild: r, user: j });
                  },
                  { position: "bottom", align: "right" },
                );
              },
              children: (0, a.jsx)(c.MoreHorizontalIcon, {
                size: "custom",
                color: "currentColor",
                className: N.icon,
                width: 18,
              }),
            }),
          ],
        });
      }
      function M() {
        let e = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
          s = "".concat(Math.floor(25 * Math.random()) + 50, "px");
        return (0, a.jsxs)("div", {
          className: N.placeholder,
          children: [
            (0, a.jsx)("div", { className: l()(N.placeholderAvatar) }),
            (0, a.jsxs)("div", {
              className: N.userDetails,
              children: [
                (0, a.jsx)("div", {
                  className: N.placeholderUsername,
                  style: { maxWidth: e },
                }),
                (0, a.jsx)("div", {
                  className: N.placeholderCreatedAt,
                  style: { maxWidth: s },
                }),
              ],
            }),
          ],
        });
      }
    },
    50662: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return m;
        },
      });
      var a = n(735250);
      n(470079);
      var t = n(913527),
        r = n.n(t),
        l = n(442837),
        i = n(692547),
        o = n(481060),
        c = n(239091),
        d = n(171368),
        u = n(650774),
        I = n(271383),
        E = n(594174),
        _ = n(709054),
        T = n(246364),
        N = n(360328),
        R = n(981631),
        C = n(689938),
        M = n(385747);
      function m(e) {
        var s;
        let { guildJoinRequest: t, guild: m, guildJoinRequestUser: A } = e,
          { createdAt: x, actionedAt: h, guildId: S, userId: j } = t,
          {
            approveRequest: P,
            rejectRequest: g,
            submitting: b,
          } = (0, N.s)(S, j, t.joinRequestId),
          v = null === (s = t.actionedByUser) || void 0 === s ? void 0 : s.id,
          p = (0, l.e7)([E.default], () => E.default.getUser(v)),
          f = (0, l.e7)(
            [I.ZP],
            () => (null != v ? I.ZP.getMember(S, v) : null),
            [v, S],
          ),
          Z = (0, l.e7)([u.Z], () => u.Z.getMemberCount(S)),
          B = (null != Z ? Z : 0) >= m.maxMembers,
          O = C.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING,
          L = (0, a.jsx)(o.ClockIcon, {
            size: "custom",
            color: "currentColor",
            width: 24,
            height: 24,
            className: M.icon,
          });
        t.applicationStatus === T.wB.APPROVED
          ? ((O = C.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED),
            (L = (0, a.jsx)(o.CircleCheckIcon, {
              size: "md",
              className: M.iconApproved,
              color: i.Z.colors.WHITE.css,
              secondaryColor: "currentColor",
            })))
          : t.applicationStatus === T.wB.REJECTED &&
            ((O = C.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED),
            (L = (0, a.jsx)(o.CircleXIcon, {
              size: "md",
              color: i.Z.colors.WHITE.css,
              secondaryColor: i.Z.colors.STATUS_DANGER.css,
            })));
        let D =
          null != p && null != h
            ? C.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_ACTIONED_BY_HOOK.format(
                {
                  date: r()(_.default.extractTimestamp(h)).format("ll"),
                  usernameHook: function () {
                    var e;
                    return (0, a.jsx)(
                      o.Clickable,
                      {
                        className: M.actionedByUser,
                        onClick: () =>
                          (0, d.openUserProfileModal)({
                            userId: p.id,
                            guildId: S,
                            analyticsLocation: {
                              section:
                                R.jXE
                                  .GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                              object: R.qAy.ACTIONED_BY_USER,
                            },
                          }),
                        tag: "div",
                        role: "link",
                        children: (0, a.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          color: "header-primary",
                          children:
                            null !== (e = null == f ? void 0 : f.nick) &&
                            void 0 !== e
                              ? e
                              : p.username,
                        }),
                      },
                      "username-hook",
                    );
                  },
                },
              )
            : r()(x).format("lll");
        return (0, a.jsxs)("div", {
          className: M.container,
          children: [
            (0, a.jsxs)("div", {
              className: M.wrapper,
              children: [
                (0, a.jsxs)("div", {
                  className: M.inline,
                  children: [
                    L,
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)(o.Heading, {
                          variant: "heading-sm/semibold",
                          children: O,
                        }),
                        (0, a.jsx)(o.Text, {
                          className: M.headerSubtext,
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: D,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: M.inline,
                  children: [
                    t.applicationStatus === T.wB.SUBMITTED &&
                      (0, a.jsxs)("div", {
                        className: M.buttons,
                        children: [
                          (0, a.jsx)(o.Tooltip, {
                            text: C.Z.Messages
                              .CLAN_APPLICATION_MAX_MEMBER_LIMIT_TOOLTIP,
                            shouldShow: B,
                            children: (e) =>
                              (0, a.jsx)(o.Button, {
                                ...e,
                                color: o.Button.Colors.GREEN,
                                submitting: b,
                                disabled: B,
                                onClick: P,
                                children:
                                  C.Z.Messages
                                    .GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION,
                              }),
                          }),
                          (0, a.jsx)(o.Button, {
                            color: o.Button.Colors.RED,
                            onClick: g,
                            disabled: b,
                            children:
                              C.Z.Messages
                                .GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION,
                          }),
                        ],
                      }),
                    (0, a.jsx)(o.Clickable, {
                      onClick: (e) => {
                        (0, c.jW)(e, async () => {
                          let { default: e } = await n
                            .e("84259")
                            .then(n.bind(n, 597409));
                          return (s) =>
                            (0, a.jsx)(e, { ...s, guild: m, user: A });
                        });
                      },
                      className: M.overflow,
                      children: (0, a.jsx)(o.MoreHorizontalIcon, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: M.iconInteractive,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            t.applicationStatus === T.wB.REJECTED &&
              null != t.rejectionReason &&
              (0, a.jsx)("div", {
                className: M.rejectionReason,
                children: (0, a.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children: t.rejectionReason,
                }),
              }),
          ],
        });
      }
    },
    395716: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var a = n(735250),
        t = n(470079),
        r = n(442837),
        l = n(481060),
        i = n(287734),
        o = n(592125),
        c = n(693546),
        d = n(689938);
      function u(e) {
        let { joinRequest: s } = e,
          [n, u] = t.useState(!1),
          I = (0, r.e7)([o.Z], () => o.Z.getChannel(s.interviewChannelId)),
          E = t.useCallback(() => {
            (0, l.showToast)(
              (0, l.createToast)(
                d.Z.Messages.ERROR_GENERIC_TITLE,
                l.ToastType.FAILURE,
              ),
            );
          }, []),
          _ = t.useCallback(async () => {
            if (null != I) {
              i.default.selectPrivateChannel(I.id);
              return;
            }
            if (!n) {
              u(!0);
              try {
                await c.Z.createOrEnterJoinRequestInterview(s.joinRequestId);
              } catch {
                E();
              } finally {
                u(!1);
              }
            }
          }, [I, s.joinRequestId, E, n]);
        return (0, a.jsx)(l.Button, {
          color: l.Button.Colors.BRAND,
          submitting: n,
          onClick: _,
          children: d.Z.Messages.CLAN_DM_APPLICANT,
        });
      }
    },
    673885: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return _;
        },
      });
      var a = n(735250);
      n(470079);
      var t = n(120356),
        r = n.n(t),
        l = n(481060),
        i = n(906732),
        o = n(171368),
        c = n(768581),
        d = n(51144),
        u = n(981631),
        I = n(689938),
        E = n(691700);
      function _(e) {
        let { user: s, guildId: n, className: t } = e,
          { username: _ } = s,
          T = c.ZP.getUserAvatarURL(s),
          { analyticsLocations: N } = (0, i.ZP)(),
          R = () => {
            (0, o.openUserProfileModal)({
              userId: s.id,
              guildId: n,
              sourceAnalyticsLocations: N,
              analyticsLocation: {
                section: u.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                object: u.qAy.JOIN_REQUEST,
              },
            });
          };
        return (0, a.jsxs)("div", {
          className: r()(E.container, t),
          children: [
            (0, a.jsx)(l.Anchor, {
              onClick: R,
              children: (0, a.jsx)(l.Avatar, {
                src: T,
                size: l.AvatarSizes.SIZE_80,
                "aria-label": _,
                className: E.avatar,
              }),
            }),
            (0, a.jsx)("div", {
              className: E.username,
              children: (0, a.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                children: d.ZP.getFormattedName(s),
              }),
            }),
            (0, a.jsx)(l.Anchor, {
              onClick: R,
              children: I.Z.Messages.VIEW_PROFILE,
            }),
          ],
        });
      }
    },
    853486: function (e, s, n) {
      var a = n(735250),
        t = n(470079),
        r = n(481060),
        l = n(665149),
        i = n(51144),
        o = n(246364),
        c = n(666233),
        d = n(50662),
        u = n(395716),
        I = n(673885),
        E = n(981631),
        _ = n(689938),
        T = n(189522);
      s.Z = function (e) {
        let {
            guild: s,
            guildJoinRequest: N,
            guildJoinRequestUser: R,
            onClose: C,
          } = e,
          M = t.useMemo(() => {
            var e;
            return null !== (e = N.formResponses) && void 0 !== e ? e : [];
          }, [N.formResponses]),
          m =
            s.hasFeature(E.oNc.CLAN) && N.applicationStatus === o.wB.SUBMITTED,
          A = t.useCallback(
            () =>
              (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("17945").then(n.bind(n, 223926));
                return (n) =>
                  (0, a.jsx)(e, {
                    ...n,
                    guild: s,
                    guildJoinRequest: N,
                    user: R,
                  });
              }),
            [s, N, R],
          );
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(l.ZP, {
              toolbar: (0, a.jsx)(l.ZP.Icon, {
                icon: r.XSmallIcon,
                onClick: C,
                tooltip: _.Z.Messages.CLOSE,
              }),
              children: [
                (0, a.jsx)(l.ZP.Icon, {
                  icon: r.UserIcon,
                  disabled: !0,
                  "aria-label":
                    _.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION,
                }),
                (0, a.jsx)(r.Heading, {
                  variant: "heading-md/semibold",
                  children: i.ZP.getName(R),
                }),
              ],
            }),
            (0, a.jsx)(d.Z, {
              guildJoinRequest: N,
              guildJoinRequestUser: R,
              guild: s,
            }),
            (0, a.jsxs)(r.Scroller, {
              children: [
                (0, a.jsxs)("div", {
                  className: T.container,
                  children: [
                    (0, a.jsx)(I.Z, { user: R, guildId: s.id }),
                    m &&
                      (0, a.jsxs)("div", {
                        className: T.actionButtons,
                        children: [
                          (0, a.jsx)(u.Z, { joinRequest: N }),
                          (0, a.jsx)(r.Button, {
                            color: r.ButtonColors.PRIMARY,
                            onClick: A,
                            children:
                              _.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_CTA,
                          }),
                        ],
                      }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: T.disabledFormRenderer,
                  children: (0, a.jsx)(c.Z, {
                    guildId: s.id,
                    formFields: M,
                    user: R,
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    666233: function (e, s, n) {
      var a = n(735250);
      n(470079);
      var t = n(442837),
        r = n(481060),
        l = n(594174),
        i = n(246364),
        o = n(489813),
        c = n(186078),
        d = n(73880),
        u = n(196345),
        I = n(707592),
        E = n(689938);
      s.Z = function (e) {
        let { formFields: s, user: n, showRequirements: _ = !0 } = e;
        return null ==
          (0, t.e7)([l.default], () =>
            null != n ? n : l.default.getCurrentUser(),
          )
          ? null
          : (0, a.jsxs)(a.Fragment, {
              children: [
                _ &&
                  (0, a.jsx)(o.Ih, {
                    icon: r.ShieldIcon,
                    text: E.Z.Messages
                      .MEMBER_VERIFICATION_FORM_PASSED_REQUIREMENTS,
                    meetsRequirement: !0,
                  }),
                s.map((e, s) =>
                  (function (e, s) {
                    switch (e.field_type) {
                      case i.QJ.TERMS:
                        return (0, a.jsx)(u.QC, { formField: e }, s);
                      case i.QJ.TEXT_INPUT:
                        return (0, a.jsx)(I.YJ, { formField: e }, s);
                      case i.QJ.PARAGRAPH:
                        return (0, a.jsx)(d.jn, { formField: e }, s);
                      case i.QJ.MULTIPLE_CHOICE:
                        return (0, a.jsx)(c.QH, { formField: e }, s);
                    }
                  })(e, s),
                ),
              ],
            });
      };
    },
    344200: function (e, s, n) {
      e.exports = {
        content: "content_ebb939",
        sidebar: "sidebar_ebb939",
        sidebarSeparator: "sidebarSeparator_ebb939",
      };
    },
    412449: function (e, s, n) {
      e.exports = {
        content: "content_b8b510",
        listControls: "listControls_b8b510",
        sortSelect: "sortSelect_b8b510",
        description: "description_b8b510",
        scrollerContent: "scrollerContent_b8b510",
        setupHeader: "setupHeader_b8b510",
        previewContainer: "previewContainer_b8b510",
        previewButton: "previewButton_b8b510",
        headerWarning: "headerWarning_b8b510",
      };
    },
    859955: function (e, s, n) {
      e.exports = { title: "title_c768e8", divider: "divider_c768e8" };
    },
    811140: function (e, s, n) {
      e.exports = {
        title: "title_a43b87",
        container: "container_a43b87",
        siblingSelected: "siblingSelected_a43b87",
        selected: "selected_a43b87",
        contextMenu: "contextMenu_a43b87",
        userDetails: "userDetails_a43b87",
        createdAt: "createdAt_a43b87",
        actionIconContainer: "actionIconContainer_a43b87 iconContainer_a43b87",
        overflowMenuContainer:
          "overflowMenuContainer_a43b87 iconContainer_a43b87",
        icon: "icon_a43b87",
        disabled: "disabled_a43b87",
        placeholder: "placeholder_a43b87",
        placeholderUsername: "placeholderUsername_a43b87",
        placeholderCreatedAt: "placeholderCreatedAt_a43b87",
        placeholderAvatar: "placeholderAvatar_a43b87",
        emptyContainer: "emptyContainer_a43b87",
        emptyIcon: "emptyIcon_a43b87",
        checkmark: "checkmark_a43b87",
        star: "star_a43b87",
        plus: "plus_a43b87",
        emptyBody: "emptyBody_a43b87",
      };
    },
    385747: function (e, s, n) {
      e.exports = {
        container: "container_c61d8c",
        wrapper: "wrapper_c61d8c",
        headerSubtext: "headerSubtext_c61d8c",
        inline: "inline_c61d8c",
        icon: "icon_c61d8c",
        iconInteractive: "iconInteractive_c61d8c icon_c61d8c",
        iconApproved: "iconApproved_c61d8c",
        buttons: "buttons_c61d8c",
        overflow: "overflow_c61d8c",
        rejectionReason: "rejectionReason_c61d8c",
        actionedByUser: "actionedByUser_c61d8c",
      };
    },
    691700: function (e, s, n) {
      e.exports = {
        container: "container_a84246",
        avatar: "avatar_a84246",
        username: "username_a84246",
      };
    },
    189522: function (e, s, n) {
      e.exports = {
        container: "container_cc034a",
        disabledFormRenderer: "disabledFormRenderer_cc034a",
        actionButtons: "actionButtons_cc034a",
      };
    },
  },
]);
//# sourceMappingURL=460f6056d4e5557fe16b.js.map
