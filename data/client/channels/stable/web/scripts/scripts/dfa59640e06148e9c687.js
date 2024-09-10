"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44798"],
  {
    985159: function (e, s, n) {
      n.d(s, {
        z: function () {
          return l;
        },
      });
      var t = n(442837),
        a = n(826581);
      function l(e) {
        let { guildId: s } = e;
        return (0, t.e7)([a.Z], () => a.Z.getSelectedApplicationTab(s), [s]);
      }
    },
    328977: function (e, s, n) {
      n.d(s, {
        L: function () {
          return l;
        },
      });
      var t = n(442837),
        a = n(826581);
      function l(e) {
        let { guildId: s } = e;
        return (0, t.e7)([a.Z], () => a.Z.getSelectedGuildJoinRequest(s), [s]);
      }
    },
    412222: function (e, s, n) {
      n.d(s, {
        C: function () {
          return l;
        },
      });
      var t = n(442837),
        a = n(826581);
      function l(e) {
        let { guildId: s } = e;
        return (0, t.e7)([a.Z], () => a.Z.getSelectedSortOrder(s), [s]);
      }
    },
    223312: function (e, s, n) {
      n.d(s, {
        j: function () {
          return i;
        },
      }),
        n(47120);
      var t = n(470079),
        a = n(442837),
        l = n(826581),
        r = n(246364);
      function i(e) {
        let { guildId: s, applicationStatus: n, sortOrder: i } = e,
          o = (0, a.e7)([l.Z], () => l.Z.getRequests(s, n), [n, s]);
        return {
          guildJoinRequests: t.useMemo(
            () => (i === r.Nw.TIMESTAMP_DESC ? [...o].reverse() : o),
            [i, o],
          ),
        };
      }
    },
    998420: function (e, s, n) {
      n.r(s);
      var t = n(735250),
        a = n(470079),
        l = n(442837),
        r = n(100527),
        i = n(906732),
        o = n(252618),
        c = n(598077),
        d = n(430824),
        u = n(693546),
        I = n(863249),
        E = n(328977),
        _ = n(208257),
        T = n(853486),
        m = n(689938),
        R = n(271648);
      s.default = function (e) {
        let { guildId: s } = e,
          { analyticsLocations: n } = (0, i.ZP)(
            r.Z.GUILD_MEMBER_APPLICATION_REVIEW,
          ),
          M = (0, E.L)({ guildId: s }),
          { user: N } = null != M ? M : {},
          C = a.useMemo(() => (null != N ? new c.Z(N) : null), [N]),
          x = (0, l.e7)([d.Z], () => d.Z.getGuild(s), [s]);
        (0, o.Tt)({
          subsection:
            m.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REQUIREMENTS,
          location: null == x ? void 0 : x.name,
        }),
          a.useEffect(() => {
            I.ZP.fetchVerificationForm(s);
          }, [s]);
        let h = null != M && null != x && null != C;
        return (0, t.jsxs)(i.Gt, {
          value: n,
          children: [
            (0, t.jsx)("div", {
              className: R.content,
              children: (0, t.jsx)(_.Z, { guildId: s, isSidebarOpen: h }),
            }),
            h &&
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("div", { className: R.sidebarSeparator }),
                  (0, t.jsx)("section", {
                    className: R.sidebar,
                    children: (0, t.jsx)(T.Z, {
                      guild: x,
                      guildJoinRequest: M,
                      guildJoinRequestUser: C,
                      onClose: () => u.Z.setSelectedGuildJoinRequest(s, null),
                    }),
                  }),
                ],
              }),
          ],
        });
      };
    },
    572940: function (e, s, n) {
      var t = n(735250),
        a = n(470079),
        l = n(481060),
        r = n(246364),
        i = n(689938);
      s.Z = function (e) {
        let { className: s, sortOrder: n, onSortChange: o } = e,
          c = a.useMemo(
            () => [
              {
                value: r.Nw.TIMESTAMP_DESC,
                label:
                  i.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_NEWEST,
              },
              {
                value: r.Nw.TIMESTAMP_ASC,
                label:
                  i.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_OLDEST,
              },
            ],
            [],
          );
        return (0, t.jsx)(l.SingleSelect, {
          className: s,
          onChange: o,
          value: n,
          options: c,
        });
      };
    },
    208257: function (e, s, n) {
      n(47120);
      var t = n(735250),
        a = n(470079),
        l = n(442837),
        r = n(481060),
        i = n(970606),
        o = n(616230),
        c = n(650774),
        d = n(430824),
        u = n(496675),
        I = n(693546),
        E = n(246364),
        _ = n(98493),
        T = n(985159),
        m = n(328977),
        R = n(412222),
        M = n(223312),
        N = n(571728),
        C = n(572940),
        x = n(80487),
        h = n(146463),
        A = n(981631),
        b = n(689938),
        S = n(958681);
      function j(e) {
        let { guild: s } = e;
        return (0, t.jsxs)("div", {
          className: S.setupHeader,
          children: [
            (0, t.jsxs)("div", {
              className: S.previewContainer,
              children: [
                (0, t.jsx)(r.Heading, {
                  variant: "heading-lg/bold",
                  children:
                    b.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP,
                }),
                (0, t.jsxs)(r.Button, {
                  color: r.Button.Colors.TRANSPARENT,
                  onClick: () => {
                    (0, r.openModalLazy)(async () => {
                      let { default: e } = await n
                        .e("52657")
                        .then(n.bind(n, 645264));
                      return (n) =>
                        (0, t.jsx)(e, { ...n, guildId: s.id, isPreview: !0 });
                    });
                  },
                  size: r.ButtonSizes.SMALL,
                  "aria-label":
                    b.Z.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION,
                  innerClassName: S.previewButton,
                  children: [
                    (0, t.jsx)(r.EyeIcon, {
                      size: "xs",
                      color: "currentColor",
                    }),
                    b.Z.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION,
                  ],
                }),
              ],
            }),
            (0, t.jsx)(r.Text, {
              className: S.description,
              variant: "text-sm/medium",
              color: "header-secondary",
              children: b.Z.Messages.CLAN_APPLICATION_SETUP_HEADER.format({
                guildName: s.name,
              }),
            }),
          ],
        });
      }
      function P(e) {
        var s, n;
        let { guildId: P, isSidebarOpen: p } = e,
          g = a.useRef(null),
          [v, f] = a.useState((0, T.z)({ guildId: P })),
          Z = (0, R.C)({ guildId: P }),
          O = (0, m.L)({ guildId: P }),
          B = null !== (s = (0, N.A)({ guildId: P })) && void 0 !== s ? s : 0,
          { guildJoinRequests: L } = (0, M.j)({
            guildId: P,
            applicationStatus: "REVIEW_APPLICATION" === v ? E.wB.SUBMITTED : v,
            sortOrder: Z,
          }),
          D = (0, l.e7)([d.Z], () => d.Z.getGuild(P), [P]),
          G = (0, l.e7)([c.Z], () => c.Z.getMemberCount(P)),
          w = null != D && (null != G ? G : 0) >= D.maxMembers,
          { fetchNextPage: U } = (0, _.m)({ guildId: P, guildJoinRequests: L }),
          V = (0, l.e7)([u.Z], () => u.Z.can(A.Plq.KICK_MEMBERS, D)),
          y = a.useRef(!1);
        !y.current &&
          ((y.current = !0),
          U(Z, "REVIEW_APPLICATION" === v ? E.wB.SUBMITTED : v)),
          a.useEffect(() => {
            !V && f("REVIEW_APPLICATION");
          }, [V]);
        let F = a.useRef(!1);
        a.useEffect(() => {
          F.current = !0;
        }, [Z, v]),
          a.useEffect(() => {
            if (F.current && 0 !== L.length && "REVIEW_APPLICATION" !== v) {
              var e;
              (F.current = !1),
                I.Z.setSelectedGuildJoinRequest(P, L[0]),
                null === (e = g.current) || void 0 === e || e.scrollToTop();
            }
          }, [P, L, O, v]);
        let k = a.useCallback(
            async (e) => {
              if ("REVIEW_APPLICATION" !== v)
                Z !== e && (I.Z.setSelectedSortOrder(P, e), await U(e, v));
            },
            [v, Z, P, U],
          ),
          J = a.useCallback(
            async (e) => {
              if (v !== e) {
                if (
                  (f(e),
                  (0, i.Q2)({
                    guildId: P,
                    source: A.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    tab: e,
                  }),
                  I.Z.setSelectedGuildJoinRequest(P, null),
                  "REVIEW_APPLICATION" !== e)
                )
                  I.Z.setSelectedApplicationTab(P, e), await U(Z, e);
              }
            },
            [v, Z, P, U],
          ),
          q = a.useCallback(async () => {
            var e;
            if ("REVIEW_APPLICATION" === v) return;
            let s =
              null === (e = g.current) || void 0 === e
                ? void 0
                : e.getScrollerState();
            if (null != s)
              s.scrollHeight - s.scrollTop - s.offsetHeight < 200 &&
                (await U(Z, v));
          }, [v, Z, U]),
          W =
            null !== (n = null == D ? void 0 : D.hasFeature(A.oNc.CLAN)) &&
            void 0 !== n &&
            n;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(x.Z, {
              currentTab: v,
              onTabItemSelect: J,
              pendingGuildJoinRequestsTotal: B,
              showSetupTab: W,
              canActionJoinRequests: V,
              isSidebarOpen: p,
            }),
            (0, t.jsx)("div", {
              className: S.content,
              children:
                "REVIEW_APPLICATION" === v
                  ? null != D
                    ? (0, t.jsx)(r.ScrollerThin, {
                        children: (0, t.jsxs)("div", {
                          className: S.scrollerContent,
                          children: [
                            (0, t.jsx)(j, { guild: D }),
                            (0, t.jsx)(o.Z, { guild: D, isClanContext: !0 }),
                          ],
                        }),
                      })
                    : null
                  : (0, t.jsxs)(t.Fragment, {
                      children: [
                        V &&
                          w &&
                          (0, t.jsx)(r.HelpMessage, {
                            messageType: r.HelpMessageTypes.WARNING,
                            textVariant: "text-sm/medium",
                            className: S.headerWarning,
                            children:
                              b.Z.Messages.CLAN_MAX_MEMBER_LIMIT_WARNING.format(
                                { count: null == D ? void 0 : D.maxMembers },
                              ),
                          }),
                        (0, t.jsx)("div", {
                          className: S.listControls,
                          children: (0, t.jsx)(C.Z, {
                            className: S.sortSelect,
                            sortOrder: Z,
                            onSortChange: k,
                          }),
                        }),
                        (0, t.jsx)(r.Text, {
                          className: S.description,
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children:
                            b.Z.Messages
                              .GUILD_SETTINGS_MEMBER_VERIFICATION_LIST_DESCRIPTION,
                        }),
                        (0, t.jsx)(h.Z, {
                          applicationStatus: v,
                          guildJoinRequests: L,
                          guildId: P,
                          onScroll: q,
                          listRef: g,
                          atMaxMemberCapacity: w,
                        }),
                      ],
                    }),
            }),
          ],
        });
      }
      s.Z = a.memo(function (e) {
        let { guildId: s, isSidebarOpen: n } = e;
        return (0, t.jsx)(P, { guildId: s, isSidebarOpen: n });
      });
    },
    80487: function (e, s, n) {
      n(653041), n(47120);
      var t = n(735250),
        a = n(470079),
        l = n(120356),
        r = n.n(l),
        i = n(780384),
        o = n(481060),
        c = n(410030),
        d = n(355932),
        u = n(984370),
        I = n(669405),
        E = n(889711),
        _ = n(246364),
        T = n(689938),
        m = n(576779);
      let R = (e) => {
          let { tabs: s, selectedTab: n, onTabSelect: a, onClose: l } = e;
          return (0, t.jsx)(o.Menu, {
            navId: "member-applications-tabs-overflow-menu",
            "aria-label": T.Z.Messages.GLOBAL_DISCOVERY_MORE_MENU_A11Y,
            hideScroller: !0,
            onClose: l,
            onSelect: l,
            children: (0, t.jsx)(
              o.MenuGroup,
              {
                children: s.map((e) => {
                  let { id: s, label: l } = e;
                  return (0, t.jsx)(
                    o.MenuItem,
                    {
                      id: s,
                      label: l,
                      icon: s === n ? o.CircleCheckIcon : void 0,
                      action: () => a(s),
                    },
                    s,
                  );
                }),
              },
              "applications-overflow-tabs",
            ),
          });
        },
        M = (e, s, n) => {
          let t = [];
          return (
            e &&
              t.push({
                id: "REVIEW_APPLICATION",
                label:
                  T.Z.Messages
                    .GUILD_SETTINGS_MEMBER_VERIFICATION_REVIEW_APPLICATION_TITLE,
              }),
            s &&
              (t.push({
                id: _.wB.SUBMITTED,
                label:
                  0 === n
                    ? T.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING
                    : T.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT.format(
                        { count: n },
                      ),
              }),
              t.push({
                id: _.wB.APPROVED,
                label: T.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED,
              }),
              t.push({
                id: _.wB.REJECTED,
                label: T.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED,
              })),
            t
          );
        };
      function N(e) {
        let { onTabSelect: s, tabs: n, selectedTab: l } = e,
          d = (0, c.ZP)(),
          u = (0, i.wj)(d),
          I = a.useMemo(
            () =>
              null !=
              n.find((e) => {
                let { id: s } = e;
                return s === l;
              }),
            [l, n],
          ),
          E = I ? "header-primary" : u ? "text-muted" : "header-primary",
          _ = I
            ? o.tokens.colors.HEADER_PRIMARY
            : u
              ? o.tokens.colors.TEXT_MUTED
              : o.tokens.colors.HEADER_PRIMARY;
        return (0, t.jsx)(o.Popout, {
          renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, t.jsx)(R, {
              selectedTab: l,
              onClose: a,
              tabs: n,
              onTabSelect: s,
            });
          },
          position: "bottom",
          align: "left",
          children: (e, s) => {
            let { isShown: n } = s;
            return (0, t.jsxs)(o.TabBar.Item, {
              ...e,
              id: "more",
              color: "text-muted",
              className: r()(m.more, { [m.selected]: I }),
              "aria-label": T.Z.Messages.MORE,
              children: [
                (0, t.jsx)(o.Text, {
                  variant: "text-md/medium",
                  color: E,
                  children: T.Z.Messages.MORE,
                }),
                n
                  ? (0, t.jsx)(o.ChevronSmallUpIcon, { size: "sm", color: _ })
                  : (0, t.jsx)(o.ChevronSmallDownIcon, {
                      size: "sm",
                      color: _,
                    }),
              ],
            });
          },
        });
      }
      s.Z = function (e) {
        let {
            pendingGuildJoinRequestsTotal: s,
            currentTab: n,
            onTabItemSelect: l,
            showSetupTab: r,
            canActionJoinRequests: i,
            isSidebarOpen: c,
          } = e,
          [_, R] = a.useState(0),
          C = a.useRef(null),
          x = a.useRef(_),
          h = M(r, i, s),
          {
            lastVisibleIndex: A,
            onItemLayout: b,
            overflowItemsRef: S,
          } = (0, d.zP)({
            items: h,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: _ - 400,
          }),
          j = a.useMemo(() => h.slice(0, A + 1), [A, h]),
          P = a.useMemo(() => h.slice(A + 1), [A, h]),
          p = a.useCallback(() => {
            var e;
            let s =
              null === (e = C.current) || void 0 === e
                ? void 0
                : e.getBoundingClientRect();
            null != s &&
              x.current !== s.width &&
              (R(s.width), (x.current = s.width));
          }, []);
        return (
          a.useEffect(() => {
            let e = (0, E.pP)(p);
            return (
              (0, E.YP)(e, document.body), () => (0, E.UC)(e, document.body)
            );
          }, [p]),
          a.useEffect(() => {
            p();
          }, [p, c]),
          (0, t.jsx)("div", {
            ref: C,
            children: (0, t.jsxs)(u.Z, {
              hideSearch: !0,
              toolbar: (0, t.jsx)("div", {}),
              children: [
                (0, t.jsx)(u.Z.Icon, {
                  icon: (0, o.makeIconCompat)(I.Z),
                  disabled: !0,
                  "aria-label":
                    T.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS,
                }),
                (0, t.jsx)(u.Z.Title, {
                  className: m.title,
                  children:
                    T.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS,
                }),
                (0, t.jsx)(u.Z.Divider, { className: m.divider }),
                (0, t.jsxs)("div", {
                  className: m.container,
                  children: [
                    (0, t.jsxs)("div", {
                      className: m.measurements,
                      children: [
                        h.map((e, s) =>
                          (0, t.jsx)(
                            d.AJ,
                            {
                              index: s,
                              onItemLayout: b,
                              children: (0, t.jsx)(o.TabBar.Item, {
                                id: e.id,
                                "aria-label": e.label,
                                children: e.label,
                              }),
                            },
                            e.id,
                          ),
                        ),
                        (0, t.jsx)("div", {
                          ref: S,
                          children: (0, t.jsx)(N, {
                            tabs: P,
                            onTabSelect: l,
                            selectedTab: n,
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)(o.TabBar, {
                      "aria-label": T.Z.Messages.FRIENDS,
                      selectedItem: n,
                      type: "top-pill",
                      onItemSelect: l,
                      children: [
                        j.map((e) =>
                          (0, t.jsx)(
                            o.TabBar.Item,
                            {
                              id: e.id,
                              "aria-label": e.label,
                              children: e.label,
                            },
                            e.id,
                          ),
                        ),
                        0 !== P.length
                          ? (0, t.jsx)(N, {
                              tabs: P,
                              onTabSelect: l,
                              selectedTab: n,
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    146463: function (e, s, n) {
      var t = n(735250);
      n(470079);
      var a = n(120356),
        l = n.n(a),
        r = n(91192),
        i = n(442837),
        o = n(481060),
        c = n(209613),
        d = n(430824),
        u = n(855981),
        I = n(55543),
        E = n(693546),
        _ = n(826581),
        T = n(246364),
        m = n(328977),
        R = n(571728),
        M = n(762660),
        N = n(689938),
        C = n(984221);
      let x = () => null;
      function h(e) {
        let { status: s } = e,
          n =
            N.Z.Messages
              .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE,
          a =
            N.Z.Messages
              .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY;
        switch (s) {
          case T.wB.REJECTED:
            (n =
              N.Z.Messages
                .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_TITLE),
              (a =
                N.Z.Messages
                  .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_BODY);
            break;
          case T.wB.APPROVED:
            (n =
              N.Z.Messages
                .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_TITLE),
              (a =
                N.Z.Messages
                  .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_BODY);
            break;
          default:
            (n =
              N.Z.Messages
                .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE),
              (a =
                N.Z.Messages
                  .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY);
        }
        return (0, t.jsxs)("div", {
          className: C.emptyContainer,
          children: [
            (0, t.jsxs)("div", {
              className: C.emptyIcon,
              children: [
                (0, t.jsx)(I.Z, { className: C.star }),
                (0, t.jsx)(o.CheckmarkLargeIcon, {
                  size: "md",
                  color: "currentColor",
                  className: C.checkmark,
                }),
                (0, t.jsx)(u.Z, { className: C.plus }),
              ],
            }),
            (0, t.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              children: n,
            }),
            (0, t.jsx)(o.Text, {
              color: "header-secondary",
              className: C.emptyBody,
              variant: "text-sm/normal",
              children: a,
            }),
          ],
        });
      }
      s.Z = function (e) {
        var s;
        let {
            applicationStatus: n,
            guildJoinRequests: a,
            guildId: u,
            onScroll: I,
            listRef: A,
            atMaxMemberCapacity: b,
          } = e,
          S = (0, i.e7)([d.Z], () => d.Z.getGuild(u), [u]),
          j = (0, i.e7)([_.Z], () => _.Z.isFetching()),
          P = j ? [a.length + 25] : [a.length],
          p = (0, m.L)({ guildId: u }),
          g = null !== (s = (0, R.A)({ guildId: u })) && void 0 !== s ? s : 0,
          v = (0, c.Z)("guild-join-requests"),
          f = (e) => {
            let { row: s } = e,
              r = a[s];
            return null == r
              ? (0, t.jsx)(M.h, {}, s)
              : (0, t.jsx)(
                  M.C,
                  {
                    className: l()({
                      [C.selected]: p === r,
                      [C.siblingSelected]: p === a[s - 1],
                    }),
                    guild: S,
                    guildJoinRequest: r,
                    onClick: () => E.Z.setSelectedGuildJoinRequest(u, r),
                    applicationStatus: n,
                    atMaxMemberCapacity: b,
                  },
                  ""
                    .concat(r.userId, "-")
                    .concat(r.applicationStatus, "-")
                    .concat(s),
                );
          };
        return j || 0 !== a.length
          ? (0, t.jsxs)(t.Fragment, {
              children: [
                0 !== g &&
                  n === T.wB.SUBMITTED &&
                  (0, t.jsx)(o.Text, {
                    className: C.title,
                    variant: "text-xs/semibold",
                    color: "header-secondary",
                    children: (function (e, s) {
                      let n = s.toLocaleString();
                      switch (e) {
                        case T.wB.SUBMITTED:
                          return N.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT_HYPEN.format(
                            { count: n },
                          );
                        case T.wB.REJECTED:
                          return N.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED_COUNT_HYPEN.format(
                            { count: n },
                          );
                        case T.wB.APPROVED:
                          return N.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED_COUNT_HYPEN.format(
                            { count: n },
                          );
                        default:
                          return "";
                      }
                    })(n, g).toUpperCase(),
                  }),
                (0, t.jsx)(r.bG, {
                  navigator: v,
                  children: (0, t.jsx)(r.SJ, {
                    children: (e) => {
                      let { ref: s, role: n, ...a } = e;
                      return (0, t.jsx)(
                        o.List,
                        {
                          innerRole: n,
                          innerAriaLabel: N.Z.Messages.MEMBERS,
                          ref: (e) => {
                            var n;
                            (A.current = e),
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
                          renderSection: x,
                          renderRow: f,
                          sections: P,
                          onScroll: I,
                          fade: !0,
                          ...a,
                        },
                        "guild-application-review",
                      );
                    },
                  }),
                }),
              ],
            })
          : (0, t.jsx)(h, { status: n });
      };
    },
    762660: function (e, s, n) {
      n.d(s, {
        C: function () {
          return M;
        },
        h: function () {
          return N;
        },
      }),
        n(47120),
        n(411104);
      var t = n(735250),
        a = n(470079),
        l = n(120356),
        r = n.n(l),
        i = n(913527),
        o = n.n(i),
        c = n(481060),
        d = n(239091),
        u = n(598077),
        I = n(768581),
        E = n(693546),
        _ = n(246364),
        T = n(689938),
        m = n(984221);
      function R(e) {
        let { icon: s, onClick: n, submitting: a, disabled: l } = e;
        return (0, t.jsx)(c.Clickable, {
          className: r()(m.actionIconContainer, { [m.disabled]: l || a }),
          onClick: n,
          children: a
            ? (0, t.jsx)(c.Dots, {
                className: m.icon,
                dotRadius: 2,
                themed: !0,
              })
            : (0, t.jsx)(s, {
                className: m.icon,
                size: "xxs",
                color: "currentColor",
              }),
        });
      }
      function M(e) {
        let {
            applicationStatus: s,
            guild: l,
            guildJoinRequest: i,
            className: M,
            onClick: N,
            atMaxMemberCapacity: C,
          } = e,
          [x, h] = a.useState(null),
          { user: A, createdAt: b } = i;
        if (null == A) throw Error("Missing user on this guild join request!");
        let S = a.useMemo(() => new u.Z(A), [A]),
          j = I.ZP.getUserAvatarURL(S),
          P = s === _.wB.SUBMITTED,
          p = a.useCallback(
            async (e, s) => {
              let { guildId: n, userId: t } = e;
              if (null == x) {
                h(s);
                try {
                  await E.Z.updateGuildJoinRequest(n, t, i.joinRequestId, s);
                } catch (e) {
                  (0, c.showToast)(
                    (0, c.createToast)(
                      T.Z.Messages.ERROR_GENERIC_TITLE,
                      c.ToastType.FAILURE,
                    ),
                  ),
                    h(null);
                }
              }
            },
            [x, i.joinRequestId],
          ),
          g = async () => {
            await p(i, _.wB.APPROVED);
          },
          v = async () => {
            await p(i, _.wB.REJECTED);
          };
        return (0, t.jsxs)(c.Clickable, {
          className: r()(m.container, M),
          onClick: N,
          children: [
            (0, t.jsx)(c.Avatar, {
              src: j,
              size: c.AvatarSizes.SIZE_40,
              "aria-label": A.username,
              className: m.__invalid_spacer,
            }),
            (0, t.jsxs)("div", {
              className: m.userDetails,
              children: [
                (0, t.jsx)(c.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: A.username,
                }),
                (0, t.jsx)(c.Text, {
                  className: m.createdAt,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: o()(b).format("lll"),
                }),
              ],
            }),
            P &&
              !C &&
              (0, t.jsx)(R, {
                icon: c.CheckmarkLargeIcon,
                onClick: g,
                submitting: x === _.wB.APPROVED,
                disabled: null != x && x !== _.wB.APPROVED,
              }),
            P &&
              (0, t.jsx)(R, {
                icon: c.XSmallIcon,
                onClick: v,
                submitting: x === _.wB.REJECTED,
                disabled: null != x && x !== _.wB.REJECTED,
              }),
            (0, t.jsx)(c.Clickable, {
              className: r()(m.overflowMenuContainer, {
                [m.disabled]: null != x,
              }),
              onClick: (e) => {
                (0, d.jW)(
                  e,
                  async () => {
                    let { default: e } = await n
                      .e("84259")
                      .then(n.bind(n, 597409));
                    return (s) => (0, t.jsx)(e, { ...s, guild: l, user: S });
                  },
                  { position: "bottom", align: "right" },
                );
              },
              children: (0, t.jsx)(c.MoreHorizontalIcon, {
                size: "custom",
                color: "currentColor",
                className: m.icon,
                width: 18,
              }),
            }),
          ],
        });
      }
      function N() {
        let e = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
          s = "".concat(Math.floor(25 * Math.random()) + 50, "px");
        return (0, t.jsxs)("div", {
          className: m.placeholder,
          children: [
            (0, t.jsx)("div", { className: r()(m.placeholderAvatar) }),
            (0, t.jsxs)("div", {
              className: m.userDetails,
              children: [
                (0, t.jsx)("div", {
                  className: m.placeholderUsername,
                  style: { maxWidth: e },
                }),
                (0, t.jsx)("div", {
                  className: m.placeholderCreatedAt,
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
          return C;
        },
      });
      var t = n(735250);
      n(470079);
      var a = n(913527),
        l = n.n(a),
        r = n(442837),
        i = n(692547),
        o = n(481060),
        c = n(239091),
        d = n(171368),
        u = n(650774),
        I = n(271383),
        E = n(594174),
        _ = n(709054),
        T = n(246364),
        m = n(360328),
        R = n(981631),
        M = n(689938),
        N = n(866323);
      function C(e) {
        var s;
        let { guildJoinRequest: a, guild: C, guildJoinRequestUser: x } = e,
          { createdAt: h, actionedAt: A, guildId: b, userId: S } = a,
          {
            approveRequest: j,
            rejectRequest: P,
            submitting: p,
          } = (0, m.s)(b, S, a.joinRequestId),
          g = null === (s = a.actionedByUser) || void 0 === s ? void 0 : s.id,
          v = (0, r.e7)([E.default], () => E.default.getUser(g)),
          f = (0, r.e7)(
            [I.ZP],
            () => (null != g ? I.ZP.getMember(b, g) : null),
            [g, b],
          ),
          Z = (0, r.e7)([u.Z], () => u.Z.getMemberCount(b)),
          O = (null != Z ? Z : 0) >= C.maxMembers,
          B = M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING,
          L = (0, t.jsx)(o.ClockIcon, {
            size: "custom",
            color: "currentColor",
            width: 24,
            height: 24,
            className: N.icon,
          });
        a.applicationStatus === T.wB.APPROVED
          ? ((B = M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED),
            (L = (0, t.jsx)(o.CircleCheckIcon, {
              size: "md",
              className: N.iconApproved,
              color: i.Z.colors.WHITE.css,
              secondaryColor: "currentColor",
            })))
          : a.applicationStatus === T.wB.REJECTED &&
            ((B = M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED),
            (L = (0, t.jsx)(o.CircleXIcon, {
              size: "md",
              color: i.Z.colors.WHITE.css,
              secondaryColor: i.Z.colors.STATUS_DANGER.css,
            })));
        let D =
          null != v && null != A
            ? M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_ACTIONED_BY_HOOK.format(
                {
                  date: l()(_.default.extractTimestamp(A)).format("ll"),
                  usernameHook: function () {
                    var e;
                    return (0, t.jsx)(
                      o.Clickable,
                      {
                        className: N.actionedByUser,
                        onClick: () =>
                          (0, d.openUserProfileModal)({
                            userId: v.id,
                            guildId: b,
                            analyticsLocation: {
                              section:
                                R.jXE
                                  .GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                              object: R.qAy.ACTIONED_BY_USER,
                            },
                          }),
                        tag: "div",
                        role: "link",
                        children: (0, t.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          color: "header-primary",
                          children:
                            null !== (e = null == f ? void 0 : f.nick) &&
                            void 0 !== e
                              ? e
                              : v.username,
                        }),
                      },
                      "username-hook",
                    );
                  },
                },
              )
            : l()(h).format("lll");
        return (0, t.jsxs)("div", {
          className: N.container,
          children: [
            (0, t.jsxs)("div", {
              className: N.wrapper,
              children: [
                (0, t.jsxs)("div", {
                  className: N.inline,
                  children: [
                    L,
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)(o.Heading, {
                          variant: "heading-sm/semibold",
                          children: B,
                        }),
                        (0, t.jsx)(o.Text, {
                          className: N.headerSubtext,
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: D,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: N.inline,
                  children: [
                    a.applicationStatus === T.wB.SUBMITTED &&
                      (0, t.jsxs)("div", {
                        className: N.buttons,
                        children: [
                          (0, t.jsx)(o.Tooltip, {
                            text: M.Z.Messages
                              .CLAN_APPLICATION_MAX_MEMBER_LIMIT_TOOLTIP,
                            shouldShow: O,
                            children: (e) =>
                              (0, t.jsx)(o.Button, {
                                ...e,
                                color: o.Button.Colors.GREEN,
                                submitting: p,
                                disabled: O,
                                onClick: j,
                                children:
                                  M.Z.Messages
                                    .GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION,
                              }),
                          }),
                          (0, t.jsx)(o.Button, {
                            color: o.Button.Colors.RED,
                            onClick: P,
                            disabled: p,
                            children:
                              M.Z.Messages
                                .GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION,
                          }),
                        ],
                      }),
                    (0, t.jsx)(o.Clickable, {
                      onClick: (e) => {
                        (0, c.jW)(e, async () => {
                          let { default: e } = await n
                            .e("84259")
                            .then(n.bind(n, 597409));
                          return (s) =>
                            (0, t.jsx)(e, { ...s, guild: C, user: x });
                        });
                      },
                      className: N.overflow,
                      children: (0, t.jsx)(o.MoreHorizontalIcon, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: N.iconInteractive,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            a.applicationStatus === T.wB.REJECTED &&
              null != a.rejectionReason &&
              (0, t.jsx)("div", {
                className: N.rejectionReason,
                children: (0, t.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children: a.rejectionReason,
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
      var t = n(735250),
        a = n(470079),
        l = n(442837),
        r = n(481060),
        i = n(287734),
        o = n(592125),
        c = n(693546),
        d = n(689938);
      function u(e) {
        let { joinRequest: s } = e,
          [n, u] = a.useState(!1),
          I = (0, l.e7)([o.Z], () => o.Z.getChannel(s.interviewChannelId)),
          E = a.useCallback(() => {
            (0, r.showToast)(
              (0, r.createToast)(
                d.Z.Messages.ERROR_GENERIC_TITLE,
                r.ToastType.FAILURE,
              ),
            );
          }, []),
          _ = a.useCallback(async () => {
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
        return (0, t.jsx)(r.Button, {
          color: r.Button.Colors.BRAND,
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
      var t = n(735250);
      n(470079);
      var a = n(120356),
        l = n.n(a),
        r = n(481060),
        i = n(906732),
        o = n(171368),
        c = n(768581),
        d = n(51144),
        u = n(981631),
        I = n(689938),
        E = n(634200);
      function _(e) {
        let { user: s, joinRequestId: n, className: a } = e,
          { username: _ } = s,
          T = c.ZP.getUserAvatarURL(s),
          { analyticsLocations: m } = (0, i.ZP)(),
          R = () => {
            (0, o.openUserProfileModal)({
              userId: s.id,
              guildId: null,
              joinRequestId: n,
              sourceAnalyticsLocations: m,
              analyticsLocation: {
                section: u.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                object: u.qAy.JOIN_REQUEST,
              },
            });
          };
        return (0, t.jsxs)("div", {
          className: l()(E.container, a),
          children: [
            (0, t.jsx)(r.Anchor, {
              onClick: R,
              children: (0, t.jsx)(r.Avatar, {
                src: T,
                size: r.AvatarSizes.SIZE_80,
                "aria-label": _,
                className: E.avatar,
              }),
            }),
            (0, t.jsx)("div", {
              className: E.username,
              children: (0, t.jsx)(r.Heading, {
                variant: "heading-lg/semibold",
                children: d.ZP.getFormattedName(s),
              }),
            }),
            (0, t.jsx)(r.Anchor, {
              onClick: R,
              children: I.Z.Messages.VIEW_PROFILE,
            }),
          ],
        });
      }
    },
    853486: function (e, s, n) {
      var t = n(735250),
        a = n(470079),
        l = n(481060),
        r = n(665149),
        i = n(51144),
        o = n(246364),
        c = n(666233),
        d = n(50662),
        u = n(395716),
        I = n(673885),
        E = n(981631),
        _ = n(689938),
        T = n(794284);
      s.Z = function (e) {
        let {
            guild: s,
            guildJoinRequest: m,
            guildJoinRequestUser: R,
            onClose: M,
          } = e,
          N = a.useMemo(() => {
            var e;
            return null !== (e = m.formResponses) && void 0 !== e ? e : [];
          }, [m.formResponses]),
          C =
            s.hasFeature(E.oNc.CLAN) && m.applicationStatus === o.wB.SUBMITTED,
          x = a.useCallback(
            () =>
              (0, l.openModalLazy)(async () => {
                let { default: e } = await n.e("17945").then(n.bind(n, 223926));
                return (n) =>
                  (0, t.jsx)(e, {
                    ...n,
                    guild: s,
                    guildJoinRequest: m,
                    user: R,
                  });
              }),
            [s, m, R],
          );
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(r.ZP, {
              toolbar: (0, t.jsx)(r.ZP.Icon, {
                icon: l.XSmallIcon,
                onClick: M,
                tooltip: _.Z.Messages.CLOSE,
              }),
              children: [
                (0, t.jsx)(r.ZP.Icon, {
                  icon: l.UserIcon,
                  disabled: !0,
                  "aria-label":
                    _.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION,
                }),
                (0, t.jsx)(l.Heading, {
                  variant: "heading-md/semibold",
                  children: i.ZP.getName(R),
                }),
              ],
            }),
            (0, t.jsx)(d.Z, {
              guildJoinRequest: m,
              guildJoinRequestUser: R,
              guild: s,
            }),
            (0, t.jsxs)(l.Scroller, {
              children: [
                (0, t.jsxs)("div", {
                  className: T.container,
                  children: [
                    (0, t.jsx)(I.Z, {
                      user: R,
                      joinRequestId: m.joinRequestId,
                    }),
                    C &&
                      (0, t.jsxs)("div", {
                        className: T.actionButtons,
                        children: [
                          (0, t.jsx)(u.Z, { joinRequest: m }),
                          (0, t.jsx)(l.Button, {
                            color: l.ButtonColors.PRIMARY,
                            onClick: x,
                            children:
                              _.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_CTA,
                          }),
                        ],
                      }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: T.disabledFormRenderer,
                  children: (0, t.jsx)(c.Z, {
                    guildId: s.id,
                    formFields: N,
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
      var t = n(735250);
      n(470079);
      var a = n(442837),
        l = n(481060),
        r = n(594174),
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
          (0, a.e7)([r.default], () =>
            null != n ? n : r.default.getCurrentUser(),
          )
          ? null
          : (0, t.jsxs)(t.Fragment, {
              children: [
                _ &&
                  (0, t.jsx)(o.Ih, {
                    icon: l.ShieldIcon,
                    text: E.Z.Messages
                      .MEMBER_VERIFICATION_FORM_PASSED_REQUIREMENTS,
                    meetsRequirement: !0,
                  }),
                s.map((e, s) =>
                  (function (e, s) {
                    switch (e.field_type) {
                      case i.QJ.TERMS:
                        return (0, t.jsx)(u.QC, { formField: e }, s);
                      case i.QJ.TEXT_INPUT:
                        return (0, t.jsx)(I.YJ, { formField: e }, s);
                      case i.QJ.PARAGRAPH:
                        return (0, t.jsx)(d.jn, { formField: e }, s);
                      case i.QJ.MULTIPLE_CHOICE:
                        return (0, t.jsx)(c.QH, { formField: e }, s);
                    }
                  })(e, s),
                ),
              ],
            });
      };
    },
    271648: function (e, s, n) {
      e.exports = {
        content: "content_ebb939",
        sidebar: "sidebar_ebb939",
        sidebarSeparator: "sidebarSeparator_ebb939",
      };
    },
    958681: function (e, s, n) {
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
    576779: function (e, s, n) {
      e.exports = {
        title: "title_c768e8",
        divider: "divider_c768e8",
        container: "container_c768e8",
        measurements: "measurements_c768e8",
        more: "more_c768e8",
        selected: "selected_c768e8",
      };
    },
    984221: function (e, s, n) {
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
    866323: function (e, s, n) {
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
    634200: function (e, s, n) {
      e.exports = {
        container: "container_a84246",
        avatar: "avatar_a84246",
        username: "username_a84246",
      };
    },
    794284: function (e, s, n) {
      e.exports = {
        container: "container_cc034a",
        disabledFormRenderer: "disabledFormRenderer_cc034a",
        actionButtons: "actionButtons_cc034a",
      };
    },
  },
]);
//# sourceMappingURL=dfa59640e06148e9c687.js.map
