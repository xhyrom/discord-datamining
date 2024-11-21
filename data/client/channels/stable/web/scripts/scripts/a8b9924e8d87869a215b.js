"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16514"],
  {
    985159: function (e, t, n) {
      n.d(t, {
        z: function () {
          return a;
        },
      });
      var i = n(442837),
        r = n(826581);
      function a(e) {
        let { guildId: t } = e;
        return (0, i.e7)([r.Z], () => r.Z.getSelectedApplicationTab(t), [t]);
      }
    },
    328977: function (e, t, n) {
      n.d(t, {
        L: function () {
          return a;
        },
      });
      var i = n(442837),
        r = n(826581);
      function a(e) {
        let { guildId: t } = e;
        return (0, i.e7)([r.Z], () => r.Z.getSelectedGuildJoinRequest(t), [t]);
      }
    },
    412222: function (e, t, n) {
      n.d(t, {
        C: function () {
          return a;
        },
      });
      var i = n(442837),
        r = n(826581);
      function a(e) {
        let { guildId: t } = e;
        return (0, i.e7)([r.Z], () => r.Z.getSelectedSortOrder(t), [t]);
      }
    },
    223312: function (e, t, n) {
      n.d(t, {
        j: function () {
          return o;
        },
      }),
        n(47120);
      var i = n(192379),
        r = n(442837),
        a = n(826581),
        l = n(246364);
      function o(e) {
        let { guildId: t, applicationStatus: n, sortOrder: o } = e,
          c = (0, r.e7)([a.Z], () => a.Z.getRequests(t, n), [n, t]);
        return {
          guildJoinRequests: i.useMemo(
            () => (o === l.Nw.TIMESTAMP_DESC ? [...c].reverse() : c),
            [o, c],
          ),
        };
      }
    },
    998420: function (e, t, n) {
      n.r(t);
      var i = n(200651),
        r = n(192379),
        a = n(442837),
        l = n(100527),
        o = n(906732),
        c = n(252618),
        s = n(598077),
        d = n(430824),
        u = n(693546),
        m = n(863249),
        f = n(328977),
        b = n(208257),
        x = n(853486),
        h = n(388032),
        p = n(257242);
      t.default = function (e) {
        let { guildId: t } = e,
          { analyticsLocations: n } = (0, o.ZP)(
            l.Z.GUILD_MEMBER_APPLICATION_REVIEW,
          ),
          g = (0, f.L)({ guildId: t }),
          { user: C } = null != g ? g : {},
          _ = r.useMemo(() => (null != C ? new s.Z(C) : null), [C]),
          v = (0, a.e7)([d.Z], () => d.Z.getGuild(t), [t]);
        (0, c.Tt)({
          subsection: h.intl.string(h.t.nqrK8f),
          location: null == v ? void 0 : v.name,
        }),
          r.useEffect(() => {
            m.ZP.fetchVerificationForm(t);
          }, [t]);
        let j = null != g && null != v && null != _;
        return (0, i.jsxs)(o.Gt, {
          value: n,
          children: [
            (0, i.jsx)("div", {
              className: p.content,
              children: (0, i.jsx)(b.Z, { guildId: t, isSidebarOpen: j }),
            }),
            j &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", { className: p.sidebarSeparator }),
                  (0, i.jsx)("section", {
                    className: p.sidebar,
                    children: (0, i.jsx)(x.Z, {
                      guild: v,
                      guildJoinRequest: g,
                      guildJoinRequestUser: _,
                      onClose: () => u.Z.setSelectedGuildJoinRequest(t, null),
                    }),
                  }),
                ],
              }),
          ],
        });
      };
    },
    572940: function (e, t, n) {
      var i = n(200651),
        r = n(192379),
        a = n(481060),
        l = n(246364),
        o = n(388032);
      t.Z = function (e) {
        let { className: t, sortOrder: n, onSortChange: c } = e,
          s = r.useMemo(
            () => [
              { value: l.Nw.TIMESTAMP_DESC, label: o.intl.string(o.t.eoXe0t) },
              { value: l.Nw.TIMESTAMP_ASC, label: o.intl.string(o.t.mmeWUF) },
            ],
            [],
          );
        return (0, i.jsx)(a.SingleSelect, {
          className: t,
          onChange: c,
          value: n,
          options: s,
        });
      };
    },
    208257: function (e, t, n) {
      n(47120);
      var i = n(200651),
        r = n(192379),
        a = n(442837),
        l = n(481060),
        o = n(970606),
        c = n(122051),
        s = n(650774),
        d = n(430824),
        u = n(496675),
        m = n(693546),
        f = n(246364),
        b = n(98493),
        x = n(985159),
        h = n(328977),
        p = n(412222),
        g = n(223312),
        C = n(571728),
        _ = n(572940),
        v = n(80487),
        j = n(146463),
        I = n(981631),
        T = n(388032),
        R = n(118442);
      function E(e) {
        let { guild: t } = e;
        return (0, i.jsxs)("div", {
          className: R.setupHeader,
          children: [
            (0, i.jsxs)("div", {
              className: R.previewContainer,
              children: [
                (0, i.jsx)(l.Heading, {
                  variant: "heading-lg/bold",
                  children: T.intl.string(T.t.aOQWKi),
                }),
                (0, i.jsxs)(l.Button, {
                  color: l.Button.Colors.TRANSPARENT,
                  onClick: () => {
                    (0, l.openModalLazy)(async () => {
                      let { default: e } = await n
                        .e("52657")
                        .then(n.bind(n, 645264));
                      return (n) =>
                        (0, i.jsx)(e, { ...n, guildId: t.id, isPreview: !0 });
                    });
                  },
                  size: l.ButtonSizes.SMALL,
                  "aria-label": T.intl.string(T.t.rqfRdX),
                  innerClassName: R.previewButton,
                  children: [
                    (0, i.jsx)(l.EyeIcon, {
                      size: "xs",
                      color: "currentColor",
                    }),
                    T.intl.string(T.t.rqfRdX),
                  ],
                }),
              ],
            }),
            (0, i.jsx)(l.Text, {
              className: R.description,
              variant: "text-sm/medium",
              color: "header-secondary",
              children: T.intl.format(T.t.xpB4Ym, { guildName: t.name }),
            }),
          ],
        });
      }
      function S(e) {
        var t, n;
        let { guildId: S, isSidebarOpen: w } = e,
          N = r.useRef(null),
          [A, B] = r.useState((0, x.z)({ guildId: S })),
          P = (0, p.C)({ guildId: S }),
          Z = (0, h.L)({ guildId: S }),
          k = null !== (t = (0, C.A)({ guildId: S })) && void 0 !== t ? t : 0,
          { guildJoinRequests: M } = (0, g.j)({
            guildId: S,
            applicationStatus: "REVIEW_APPLICATION" === A ? f.wB.SUBMITTED : A,
            sortOrder: P,
          }),
          y = (0, a.e7)([d.Z], () => d.Z.getGuild(S), [S]),
          F = (0, a.e7)([s.Z], () => s.Z.getMemberCount(S)),
          U = null != y && (null != F ? F : 0) >= y.maxMembers,
          { fetchNextPage: L } = (0, b.m)({ guildId: S, guildJoinRequests: M }),
          D = (0, a.e7)([u.Z], () => u.Z.can(I.Plq.KICK_MEMBERS, y)),
          O = r.useRef(!1);
        !O.current &&
          ((O.current = !0),
          L(P, "REVIEW_APPLICATION" === A ? f.wB.SUBMITTED : A)),
          r.useEffect(() => {
            !D && B("REVIEW_APPLICATION");
          }, [D]);
        let q = r.useRef(!1);
        r.useEffect(() => {
          q.current = !0;
        }, [P, A]),
          r.useEffect(() => {
            if (q.current && 0 !== M.length && "REVIEW_APPLICATION" !== A) {
              var e;
              (q.current = !1),
                m.Z.setSelectedGuildJoinRequest(S, M[0]),
                null === (e = N.current) || void 0 === e || e.scrollToTop();
            }
          }, [S, M, Z, A]);
        let H = r.useCallback(
            async (e) => {
              if ("REVIEW_APPLICATION" !== A)
                P !== e && (m.Z.setSelectedSortOrder(S, e), await L(e, A));
            },
            [A, P, S, L],
          ),
          J = r.useCallback(
            async (e) => {
              if (A !== e) {
                if (
                  (B(e),
                  (0, o.Q2)({
                    guildId: S,
                    source: I.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    tab: e,
                  }),
                  m.Z.setSelectedGuildJoinRequest(S, null),
                  "REVIEW_APPLICATION" !== e)
                )
                  m.Z.setSelectedApplicationTab(S, e), await L(P, e);
              }
            },
            [A, P, S, L],
          ),
          V = r.useCallback(async () => {
            var e;
            if ("REVIEW_APPLICATION" === A) return;
            let t =
              null === (e = N.current) || void 0 === e
                ? void 0
                : e.getScrollerState();
            if (null != t)
              t.scrollHeight - t.scrollTop - t.offsetHeight < 200 &&
                (await L(P, A));
          }, [A, P, L]),
          W =
            null !== (n = null == y ? void 0 : y.hasFeature(I.oNc.CLAN)) &&
            void 0 !== n &&
            n;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(v.Z, {
              currentTab: A,
              onTabItemSelect: J,
              pendingGuildJoinRequestsTotal: k,
              showSetupTab: W,
              canActionJoinRequests: D,
              isSidebarOpen: w,
            }),
            (0, i.jsx)("div", {
              className: R.content,
              children:
                "REVIEW_APPLICATION" === A
                  ? null != y
                    ? (0, i.jsx)(l.ScrollerThin, {
                        children: (0, i.jsxs)("div", {
                          className: R.scrollerContent,
                          children: [
                            (0, i.jsx)(E, { guild: y }),
                            (0, i.jsx)(c.Z, { guild: y, isClanContext: !0 }),
                          ],
                        }),
                      })
                    : null
                  : (0, i.jsxs)(i.Fragment, {
                      children: [
                        D &&
                          U &&
                          (0, i.jsx)(l.HelpMessage, {
                            messageType: l.HelpMessageTypes.WARNING,
                            textVariant: "text-sm/medium",
                            className: R.headerWarning,
                            children: T.intl.format(T.t.o3mLzM, {
                              count: null == y ? void 0 : y.maxMembers,
                            }),
                          }),
                        (0, i.jsx)("div", {
                          className: R.listControls,
                          children: (0, i.jsx)(_.Z, {
                            className: R.sortSelect,
                            sortOrder: P,
                            onSortChange: H,
                          }),
                        }),
                        (0, i.jsx)(l.Text, {
                          className: R.description,
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: T.intl.string(T.t.OCorGR),
                        }),
                        (0, i.jsx)(j.Z, {
                          applicationStatus: A,
                          guildJoinRequests: M,
                          guildId: S,
                          onScroll: V,
                          listRef: N,
                          atMaxMemberCapacity: U,
                        }),
                      ],
                    }),
            }),
          ],
        });
      }
      t.Z = r.memo(function (e) {
        let { guildId: t, isSidebarOpen: n } = e;
        return (0, i.jsx)(S, { guildId: t, isSidebarOpen: n });
      });
    },
    80487: function (e, t, n) {
      n(653041), n(47120);
      var i = n(200651),
        r = n(192379),
        a = n(120356),
        l = n.n(a),
        o = n(21260),
        c = n(780384),
        s = n(481060),
        d = n(410030),
        u = n(984370),
        m = n(785195),
        f = n(889711),
        b = n(246364),
        x = n(388032),
        h = n(358528);
      let p = (e) => {
          let { tabs: t, selectedTab: n, onTabSelect: r, onClose: a } = e;
          return (0, i.jsx)(s.Menu, {
            navId: "member-applications-tabs-overflow-menu",
            "aria-label": x.intl.string(x.t.riPnr6),
            hideScroller: !0,
            onClose: a,
            onSelect: a,
            children: (0, i.jsx)(
              s.MenuGroup,
              {
                children: t.map((e) => {
                  let { id: t, label: a } = e;
                  return (0, i.jsx)(
                    s.MenuItem,
                    {
                      id: t,
                      label: a,
                      icon: t === n ? s.CircleCheckIcon : void 0,
                      action: () => r(t),
                    },
                    t,
                  );
                }),
              },
              "applications-overflow-tabs",
            ),
          });
        },
        g = (e, t, n) => {
          let i = [];
          return (
            e &&
              i.push({
                id: "REVIEW_APPLICATION",
                label: x.intl.string(x.t.fSGLR0),
              }),
            t &&
              (i.push({
                id: b.wB.SUBMITTED,
                label:
                  0 === n
                    ? x.intl.string(x.t["4eQVBA"])
                    : x.intl.formatToPlainString(x.t["Wo+zLy"], { count: n }),
              }),
              i.push({ id: b.wB.APPROVED, label: x.intl.string(x.t.aURgY2) }),
              i.push({ id: b.wB.REJECTED, label: x.intl.string(x.t.bSZklZ) })),
            i
          );
        };
      function C(e) {
        let { onTabSelect: t, tabs: n, selectedTab: a } = e,
          o = (0, d.ZP)(),
          u = (0, c.wj)(o),
          m = r.useMemo(
            () =>
              null !=
              n.find((e) => {
                let { id: t } = e;
                return t === a;
              }),
            [a, n],
          ),
          f = m ? "header-primary" : u ? "text-muted" : "header-primary",
          b = m
            ? s.tokens.colors.HEADER_PRIMARY
            : u
              ? s.tokens.colors.TEXT_MUTED
              : s.tokens.colors.HEADER_PRIMARY;
        return (0, i.jsx)(s.Popout, {
          renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, i.jsx)(p, {
              selectedTab: a,
              onClose: r,
              tabs: n,
              onTabSelect: t,
            });
          },
          position: "bottom",
          align: "left",
          children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsxs)(s.TabBar.Item, {
              ...e,
              id: "more",
              color: "text-muted",
              className: l()(h.more, { [h.selected]: m }),
              "aria-label": x.intl.string(x.t.UKOtz8),
              children: [
                (0, i.jsx)(s.Text, {
                  variant: "text-md/medium",
                  color: f,
                  children: x.intl.string(x.t.UKOtz8),
                }),
                n
                  ? (0, i.jsx)(s.ChevronSmallUpIcon, { size: "sm", color: b })
                  : (0, i.jsx)(s.ChevronSmallDownIcon, {
                      size: "sm",
                      color: b,
                    }),
              ],
            });
          },
        });
      }
      t.Z = function (e) {
        let {
            pendingGuildJoinRequestsTotal: t,
            currentTab: n,
            onTabItemSelect: a,
            showSetupTab: l,
            canActionJoinRequests: c,
            isSidebarOpen: d,
          } = e,
          [b, p] = r.useState(0),
          _ = r.useRef(null),
          v = r.useRef(b),
          j = g(l, c, t),
          {
            lastVisibleIndex: I,
            onItemLayout: T,
            overflowItemsRef: R,
          } = (0, o.zP)({
            items: j,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: b - 400,
          }),
          E = r.useMemo(() => j.slice(0, I + 1), [I, j]),
          S = r.useMemo(() => j.slice(I + 1), [I, j]),
          w = r.useCallback(() => {
            var e;
            let t =
              null === (e = _.current) || void 0 === e
                ? void 0
                : e.getBoundingClientRect();
            null != t &&
              v.current !== t.width &&
              (p(t.width), (v.current = t.width));
          }, []);
        return (
          r.useEffect(() => {
            let e = (0, f.pP)(w);
            return (
              (0, f.YP)(e, document.body), () => (0, f.UC)(e, document.body)
            );
          }, [w]),
          r.useEffect(() => {
            w();
          }, [w, d]),
          (0, i.jsx)("div", {
            ref: _,
            children: (0, i.jsxs)(u.Z, {
              hideSearch: !0,
              toolbar: (0, i.jsx)("div", {}),
              children: [
                (0, i.jsx)(u.Z.Icon, {
                  icon: (0, s.makeIconCompat)(m.Z),
                  disabled: !0,
                  "aria-label": x.intl.string(x.t.tcvVXF),
                }),
                (0, i.jsx)(u.Z.Title, {
                  className: h.title,
                  children: x.intl.string(x.t.tcvVXF),
                }),
                (0, i.jsx)(u.Z.Divider, { className: h.divider }),
                (0, i.jsxs)("div", {
                  className: h.container,
                  children: [
                    (0, i.jsxs)("div", {
                      className: h.measurements,
                      children: [
                        j.map((e, t) =>
                          (0, i.jsx)(
                            o.AJ,
                            {
                              index: t,
                              onItemLayout: T,
                              children: (0, i.jsx)(s.TabBar.Item, {
                                id: e.id,
                                "aria-label": e.label,
                                children: e.label,
                              }),
                            },
                            e.id,
                          ),
                        ),
                        (0, i.jsx)("div", {
                          ref: R,
                          children: (0, i.jsx)(C, {
                            tabs: S,
                            onTabSelect: a,
                            selectedTab: n,
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(s.TabBar, {
                      "aria-label": x.intl.string(x.t.TdEu5e),
                      selectedItem: n,
                      type: "top-pill",
                      onItemSelect: a,
                      children: [
                        E.map((e) =>
                          (0, i.jsx)(
                            s.TabBar.Item,
                            {
                              id: e.id,
                              "aria-label": e.label,
                              children: e.label,
                            },
                            e.id,
                          ),
                        ),
                        0 !== S.length
                          ? (0, i.jsx)(C, {
                              tabs: S,
                              onTabSelect: a,
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
    146463: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var r = n(120356),
        a = n.n(r),
        l = n(91192),
        o = n(442837),
        c = n(481060),
        s = n(209613),
        d = n(430824),
        u = n(855981),
        m = n(55543),
        f = n(693546),
        b = n(826581),
        x = n(246364),
        h = n(328977),
        p = n(571728),
        g = n(762660),
        C = n(388032),
        _ = n(3969);
      let v = () => null;
      function j(e) {
        let { status: t } = e,
          n = C.intl.string(C.t["/wqiSk"]),
          r = C.intl.string(C.t.o47YZm);
        switch (t) {
          case x.wB.REJECTED:
            (n = C.intl.string(C.t["7YSJ6e"])), (r = C.intl.string(C.t.i05OUV));
            break;
          case x.wB.APPROVED:
            (n = C.intl.string(C.t.bv82GR)), (r = C.intl.string(C.t.D4OUHR));
            break;
          default:
            (n = C.intl.string(C.t["/wqiSk"])), (r = C.intl.string(C.t.o47YZm));
        }
        return (0, i.jsxs)("div", {
          className: _.emptyContainer,
          children: [
            (0, i.jsxs)("div", {
              className: _.emptyIcon,
              children: [
                (0, i.jsx)(m.Z, { className: _.star }),
                (0, i.jsx)(c.CheckmarkLargeIcon, {
                  size: "md",
                  color: "currentColor",
                  className: _.checkmark,
                }),
                (0, i.jsx)(u.Z, { className: _.plus }),
              ],
            }),
            (0, i.jsx)(c.Heading, {
              variant: "heading-xl/semibold",
              children: n,
            }),
            (0, i.jsx)(c.Text, {
              color: "header-secondary",
              className: _.emptyBody,
              variant: "text-sm/normal",
              children: r,
            }),
          ],
        });
      }
      t.Z = function (e) {
        var t;
        let {
            applicationStatus: n,
            guildJoinRequests: r,
            guildId: u,
            onScroll: m,
            listRef: I,
            atMaxMemberCapacity: T,
          } = e,
          R = (0, o.e7)([d.Z], () => d.Z.getGuild(u), [u]),
          E = (0, o.e7)([b.Z], () => b.Z.isFetching()),
          S = E ? [r.length + 25] : [r.length],
          w = (0, h.L)({ guildId: u }),
          N = null !== (t = (0, p.A)({ guildId: u })) && void 0 !== t ? t : 0,
          A = (0, s.Z)("guild-join-requests"),
          B = (e) => {
            let { row: t } = e,
              l = r[t];
            return null == l
              ? (0, i.jsx)(g.h, {}, t)
              : (0, i.jsx)(
                  g.C,
                  {
                    className: a()({
                      [_.selected]: w === l,
                      [_.siblingSelected]: w === r[t - 1],
                    }),
                    guild: R,
                    guildJoinRequest: l,
                    onClick: () => f.Z.setSelectedGuildJoinRequest(u, l),
                    applicationStatus: n,
                    atMaxMemberCapacity: T,
                  },
                  ""
                    .concat(l.userId, "-")
                    .concat(l.applicationStatus, "-")
                    .concat(t),
                );
          };
        return E || 0 !== r.length
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                0 !== N &&
                  n === x.wB.SUBMITTED &&
                  (0, i.jsx)(c.Text, {
                    className: _.title,
                    variant: "text-xs/semibold",
                    color: "header-secondary",
                    children: (function (e, t) {
                      let n = t.toLocaleString();
                      switch (e) {
                        case x.wB.SUBMITTED:
                          return C.intl.formatToPlainString(C.t["s/46en"], {
                            count: n,
                          });
                        case x.wB.REJECTED:
                          return C.intl.formatToPlainString(C.t["9voQIC"], {
                            count: n,
                          });
                        case x.wB.APPROVED:
                          return C.intl.formatToPlainString(C.t["8hLZsb"], {
                            count: n,
                          });
                        default:
                          return "";
                      }
                    })(n, N).toUpperCase(),
                  }),
                (0, i.jsx)(l.bG, {
                  navigator: A,
                  children: (0, i.jsx)(l.SJ, {
                    children: (e) => {
                      let { ref: t, role: n, ...r } = e;
                      return (0, i.jsx)(
                        c.List,
                        {
                          innerRole: n,
                          innerAriaLabel: C.intl.string(C.t["9Oq93t"]),
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
                          renderSection: v,
                          renderRow: B,
                          sections: S,
                          onScroll: m,
                          fade: !0,
                          ...r,
                        },
                        "guild-application-review",
                      );
                    },
                  }),
                }),
              ],
            })
          : (0, i.jsx)(j, { status: n });
      };
    },
    762660: function (e, t, n) {
      n.d(t, {
        C: function () {
          return g;
        },
        h: function () {
          return C;
        },
      }),
        n(47120),
        n(411104);
      var i = n(200651),
        r = n(192379),
        a = n(120356),
        l = n.n(a),
        o = n(913527),
        c = n.n(o),
        s = n(481060),
        d = n(239091),
        u = n(598077),
        m = n(768581),
        f = n(693546),
        b = n(246364),
        x = n(388032),
        h = n(3969);
      function p(e) {
        let { icon: t, onClick: n, submitting: r, disabled: a } = e;
        return (0, i.jsx)(s.Clickable, {
          className: l()(h.actionIconContainer, { [h.disabled]: a || r }),
          onClick: n,
          children: r
            ? (0, i.jsx)(s.Dots, {
                className: h.icon,
                dotRadius: 2,
                themed: !0,
              })
            : (0, i.jsx)(t, {
                className: h.icon,
                size: "xxs",
                color: "currentColor",
              }),
        });
      }
      function g(e) {
        let {
            applicationStatus: t,
            guild: a,
            guildJoinRequest: o,
            className: g,
            onClick: C,
            atMaxMemberCapacity: _,
          } = e,
          [v, j] = r.useState(null),
          { user: I, createdAt: T } = o;
        if (null == I) throw Error("Missing user on this guild join request!");
        let R = r.useMemo(() => new u.Z(I), [I]),
          E = m.ZP.getUserAvatarURL(R),
          S = t === b.wB.SUBMITTED,
          w = r.useCallback(
            async (e, t) => {
              let { guildId: n, userId: i } = e;
              if (null == v) {
                j(t);
                try {
                  await f.Z.updateGuildJoinRequest(n, i, o.joinRequestId, t);
                } catch (e) {
                  (0, s.showToast)(
                    (0, s.createToast)(
                      x.intl.string(x.t.R0RpRU),
                      s.ToastType.FAILURE,
                    ),
                  ),
                    j(null);
                }
              }
            },
            [v, o.joinRequestId],
          ),
          N = async () => {
            await w(o, b.wB.APPROVED);
          },
          A = async () => {
            await w(o, b.wB.REJECTED);
          };
        return (0, i.jsxs)(s.Clickable, {
          className: l()(h.container, g),
          onClick: C,
          children: [
            (0, i.jsx)(s.Avatar, {
              src: E,
              size: s.AvatarSizes.SIZE_40,
              "aria-label": I.username,
              className: h.__invalid_spacer,
            }),
            (0, i.jsxs)("div", {
              className: h.userDetails,
              children: [
                (0, i.jsx)(s.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: I.username,
                }),
                (0, i.jsx)(s.Text, {
                  className: h.createdAt,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: c()(T).format("lll"),
                }),
              ],
            }),
            S &&
              !_ &&
              (0, i.jsx)(p, {
                icon: s.CheckmarkLargeIcon,
                onClick: N,
                submitting: v === b.wB.APPROVED,
                disabled: null != v && v !== b.wB.APPROVED,
              }),
            S &&
              (0, i.jsx)(p, {
                icon: s.XSmallIcon,
                onClick: A,
                submitting: v === b.wB.REJECTED,
                disabled: null != v && v !== b.wB.REJECTED,
              }),
            (0, i.jsx)(s.Clickable, {
              className: l()(h.overflowMenuContainer, {
                [h.disabled]: null != v,
              }),
              onClick: (e) => {
                (0, d.jW)(
                  e,
                  async () => {
                    let { default: e } = await n
                      .e("84259")
                      .then(n.bind(n, 597409));
                    return (t) => (0, i.jsx)(e, { ...t, guild: a, user: R });
                  },
                  { position: "bottom", align: "right" },
                );
              },
              children: (0, i.jsx)(s.MoreHorizontalIcon, {
                size: "custom",
                color: "currentColor",
                className: h.icon,
                width: 18,
              }),
            }),
          ],
        });
      }
      function C() {
        let e = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
          t = "".concat(Math.floor(25 * Math.random()) + 50, "px");
        return (0, i.jsxs)("div", {
          className: h.placeholder,
          children: [
            (0, i.jsx)("div", { className: l()(h.placeholderAvatar) }),
            (0, i.jsxs)("div", {
              className: h.userDetails,
              children: [
                (0, i.jsx)("div", {
                  className: h.placeholderUsername,
                  style: { maxWidth: e },
                }),
                (0, i.jsx)("div", {
                  className: h.placeholderCreatedAt,
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
          return _;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(913527),
        a = n.n(r),
        l = n(442837),
        o = n(692547),
        c = n(481060),
        s = n(239091),
        d = n(171368),
        u = n(650774),
        m = n(271383),
        f = n(594174),
        b = n(709054),
        x = n(246364),
        h = n(360328),
        p = n(981631),
        g = n(388032),
        C = n(660815);
      function _(e) {
        var t;
        let { guildJoinRequest: r, guild: _, guildJoinRequestUser: v } = e,
          { createdAt: j, actionedAt: I, guildId: T, userId: R } = r,
          {
            approveRequest: E,
            rejectRequest: S,
            submitting: w,
          } = (0, h.s)(T, R, r.joinRequestId),
          N = null === (t = r.actionedByUser) || void 0 === t ? void 0 : t.id,
          A = (0, l.e7)([f.default], () => f.default.getUser(N)),
          B = (0, l.e7)(
            [m.ZP],
            () => (null != N ? m.ZP.getMember(T, N) : null),
            [N, T],
          ),
          P = (0, l.e7)([u.Z], () => u.Z.getMemberCount(T)),
          Z = (null != P ? P : 0) >= _.maxMembers,
          k = g.intl.string(g.t["4eQVBA"]),
          M = (0, i.jsx)(c.ClockIcon, {
            size: "custom",
            color: "currentColor",
            width: 24,
            height: 24,
            className: C.icon,
          });
        r.applicationStatus === x.wB.APPROVED
          ? ((k = g.intl.string(g.t.aURgY2)),
            (M = (0, i.jsx)(c.CircleCheckIcon, {
              size: "md",
              className: C.iconApproved,
              color: o.Z.colors.WHITE.css,
              secondaryColor: "currentColor",
            })))
          : r.applicationStatus === x.wB.REJECTED &&
            ((k = g.intl.string(g.t.bSZklZ)),
            (M = (0, i.jsx)(c.CircleXIcon, {
              size: "md",
              color: o.Z.colors.WHITE.css,
              secondaryColor: o.Z.colors.STATUS_DANGER.css,
            })));
        let y =
          null != A && null != I
            ? g.intl.format(g.t.pRpZCQ, {
                date: a()(b.default.extractTimestamp(I)).format("ll"),
                usernameHook: function () {
                  var e;
                  return (0, i.jsx)(
                    c.Clickable,
                    {
                      className: C.actionedByUser,
                      onClick: () =>
                        (0, d.openUserProfileModal)({
                          userId: A.id,
                          guildId: T,
                          analyticsLocation: {
                            section:
                              p.jXE
                                .GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                            object: p.qAy.ACTIONED_BY_USER,
                          },
                        }),
                      tag: "div",
                      role: "link",
                      children: (0, i.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "header-primary",
                        children:
                          null !== (e = null == B ? void 0 : B.nick) &&
                          void 0 !== e
                            ? e
                            : A.username,
                      }),
                    },
                    "username-hook",
                  );
                },
              })
            : a()(j).format("lll");
        return (0, i.jsxs)("div", {
          className: C.container,
          children: [
            (0, i.jsxs)("div", {
              className: C.wrapper,
              children: [
                (0, i.jsxs)("div", {
                  className: C.inline,
                  children: [
                    M,
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)(c.Heading, {
                          variant: "heading-sm/semibold",
                          children: k,
                        }),
                        (0, i.jsx)(c.Text, {
                          className: C.headerSubtext,
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: y,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: C.inline,
                  children: [
                    r.applicationStatus === x.wB.SUBMITTED &&
                      (0, i.jsxs)("div", {
                        className: C.buttons,
                        children: [
                          (0, i.jsx)(c.Tooltip, {
                            text: g.intl.string(g.t.RbIXi4),
                            shouldShow: Z,
                            children: (e) =>
                              (0, i.jsx)(c.Button, {
                                ...e,
                                color: c.Button.Colors.GREEN,
                                submitting: w,
                                disabled: Z,
                                onClick: E,
                                children: g.intl.string(g.t.BzjDQE),
                              }),
                          }),
                          (0, i.jsx)(c.Button, {
                            color: c.Button.Colors.RED,
                            onClick: S,
                            disabled: w,
                            children: g.intl.string(g.t.hDtbs7),
                          }),
                        ],
                      }),
                    (0, i.jsx)(c.Clickable, {
                      onClick: (e) => {
                        (0, s.jW)(e, async () => {
                          let { default: e } = await n
                            .e("84259")
                            .then(n.bind(n, 597409));
                          return (t) =>
                            (0, i.jsx)(e, { ...t, guild: _, user: v });
                        });
                      },
                      className: C.overflow,
                      children: (0, i.jsx)(c.MoreHorizontalIcon, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: C.iconInteractive,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            r.applicationStatus === x.wB.REJECTED &&
              null != r.rejectionReason &&
              (0, i.jsx)("div", {
                className: C.rejectionReason,
                children: (0, i.jsx)(c.Text, {
                  variant: "text-sm/normal",
                  children: r.rejectionReason,
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
        r = n(192379),
        a = n(442837),
        l = n(481060),
        o = n(287734),
        c = n(592125),
        s = n(693546),
        d = n(388032);
      function u(e) {
        let { joinRequest: t } = e,
          [n, u] = r.useState(!1),
          m = (0, a.e7)([c.Z], () => c.Z.getChannel(t.interviewChannelId)),
          f = r.useCallback(() => {
            (0, l.showToast)(
              (0, l.createToast)(
                d.intl.string(d.t.R0RpRU),
                l.ToastType.FAILURE,
              ),
            );
          }, []),
          b = r.useCallback(async () => {
            if (null != m) {
              o.default.selectPrivateChannel(m.id);
              return;
            }
            if (!n) {
              u(!0);
              try {
                await s.Z.createOrEnterJoinRequestInterview(t.joinRequestId);
              } catch {
                f();
              } finally {
                u(!1);
              }
            }
          }, [m, t.joinRequestId, f, n]);
        return (0, i.jsx)(l.Button, {
          color: l.Button.Colors.BRAND,
          submitting: n,
          onClick: b,
          children: d.intl.string(d.t.aqiUAA),
        });
      }
    },
    673885: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        a = n.n(r),
        l = n(481060),
        o = n(906732),
        c = n(171368),
        s = n(768581),
        d = n(51144),
        u = n(981631),
        m = n(388032),
        f = n(689719);
      function b(e) {
        let { user: t, joinRequestId: n, className: r } = e,
          { username: b } = t,
          x = s.ZP.getUserAvatarURL(t),
          { analyticsLocations: h } = (0, o.ZP)(),
          p = () => {
            (0, c.openUserProfileModal)({
              userId: t.id,
              joinRequestId: n,
              sourceAnalyticsLocations: h,
              analyticsLocation: {
                section: u.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                object: u.qAy.JOIN_REQUEST,
              },
            });
          };
        return (0, i.jsxs)("div", {
          className: a()(f.container, r),
          children: [
            (0, i.jsx)(l.Anchor, {
              onClick: p,
              children: (0, i.jsx)(l.Avatar, {
                src: x,
                size: l.AvatarSizes.SIZE_80,
                "aria-label": b,
                className: f.avatar,
              }),
            }),
            (0, i.jsx)("div", {
              className: f.username,
              children: (0, i.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                children: d.ZP.getFormattedName(t),
              }),
            }),
            (0, i.jsx)(l.Anchor, {
              onClick: p,
              children: m.intl.string(m.t.iXAna2),
            }),
          ],
        });
      }
    },
    853486: function (e, t, n) {
      var i = n(200651),
        r = n(192379),
        a = n(481060),
        l = n(665149),
        o = n(51144),
        c = n(246364),
        s = n(666233),
        d = n(50662),
        u = n(395716),
        m = n(673885),
        f = n(981631),
        b = n(388032),
        x = n(46355);
      t.Z = function (e) {
        let {
            guild: t,
            guildJoinRequest: h,
            guildJoinRequestUser: p,
            onClose: g,
          } = e,
          C = r.useMemo(() => {
            var e;
            return null !== (e = h.formResponses) && void 0 !== e ? e : [];
          }, [h.formResponses]),
          _ =
            t.hasFeature(f.oNc.CLAN) && h.applicationStatus === c.wB.SUBMITTED,
          v = r.useCallback(
            () =>
              (0, a.openModalLazy)(async () => {
                let { default: e } = await n.e("17945").then(n.bind(n, 223926));
                return (n) =>
                  (0, i.jsx)(e, {
                    ...n,
                    guild: t,
                    guildJoinRequest: h,
                    user: p,
                  });
              }),
            [t, h, p],
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(l.ZP, {
              toolbar: (0, i.jsx)(l.ZP.Icon, {
                icon: a.XSmallIcon,
                onClick: g,
                tooltip: b.intl.string(b.t.cpT0Cg),
              }),
              children: [
                (0, i.jsx)(l.ZP.Icon, {
                  icon: a.UserIcon,
                  disabled: !0,
                  "aria-label": b.intl.string(b.t.PuCkTU),
                }),
                (0, i.jsx)(a.Heading, {
                  variant: "heading-md/semibold",
                  children: o.ZP.getName(p),
                }),
              ],
            }),
            (0, i.jsx)(d.Z, {
              guildJoinRequest: h,
              guildJoinRequestUser: p,
              guild: t,
            }),
            (0, i.jsxs)(a.Scroller, {
              children: [
                (0, i.jsxs)("div", {
                  className: x.container,
                  children: [
                    (0, i.jsx)(m.Z, {
                      user: p,
                      joinRequestId: h.joinRequestId,
                    }),
                    _ &&
                      (0, i.jsxs)("div", {
                        className: x.actionButtons,
                        children: [
                          (0, i.jsx)(u.Z, { joinRequest: h }),
                          (0, i.jsx)(a.Button, {
                            color: a.ButtonColors.PRIMARY,
                            onClick: v,
                            children: b.intl.string(b.t["6DpJRU"]),
                          }),
                        ],
                      }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: x.disabledFormRenderer,
                  children: (0, i.jsx)(s.Z, {
                    guildId: t.id,
                    formFields: C,
                    user: p,
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
      var r = n(442837),
        a = n(481060),
        l = n(594174),
        o = n(246364),
        c = n(489813),
        s = n(186078),
        d = n(73880),
        u = n(196345),
        m = n(707592),
        f = n(388032);
      t.Z = function (e) {
        let { formFields: t, user: n, showRequirements: b = !0 } = e;
        return null ==
          (0, r.e7)([l.default], () =>
            null != n ? n : l.default.getCurrentUser(),
          )
          ? null
          : (0, i.jsxs)(i.Fragment, {
              children: [
                b &&
                  (0, i.jsx)(c.Ih, {
                    icon: a.ShieldIcon,
                    text: f.intl.string(f.t.v2z4c3),
                    meetsRequirement: !0,
                  }),
                t.map((e, t) =>
                  (function (e, t) {
                    switch (e.field_type) {
                      case o.QJ.TERMS:
                        return (0, i.jsx)(u.QC, { formField: e }, t);
                      case o.QJ.TEXT_INPUT:
                        return (0, i.jsx)(m.YJ, { formField: e }, t);
                      case o.QJ.PARAGRAPH:
                        return (0, i.jsx)(d.jn, { formField: e }, t);
                      case o.QJ.MULTIPLE_CHOICE:
                        return (0, i.jsx)(s.QH, { formField: e }, t);
                    }
                  })(e, t),
                ),
              ],
            });
      };
    },
    394951: function (e, t, n) {
      e.exports = {
        editCard: "editCard_cd99d3",
        toggled: "toggled_cd99d3",
        noBackground: "noBackground_cd99d3",
        innerHeader: "innerHeader_cd99d3",
        contentExpandContainer: "contentExpandContainer_cd99d3",
        showOverflow: "showOverflow_cd99d3",
      };
    },
    257242: function (e, t, n) {
      e.exports = {
        content: "content_ebb939",
        sidebar: "sidebar_ebb939",
        sidebarSeparator: "sidebarSeparator_ebb939",
      };
    },
    118442: function (e, t, n) {
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
    358528: function (e, t, n) {
      e.exports = {
        title: "title_c768e8",
        divider: "divider_c768e8",
        container: "container_c768e8",
        measurements: "measurements_c768e8",
        more: "more_c768e8",
        selected: "selected_c768e8",
      };
    },
    3969: function (e, t, n) {
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
    660815: function (e, t, n) {
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
    689719: function (e, t, n) {
      e.exports = {
        container: "container_a84246",
        avatar: "avatar_a84246",
        username: "username_a84246",
      };
    },
    46355: function (e, t, n) {
      e.exports = {
        container: "container_cc034a",
        disabledFormRenderer: "disabledFormRenderer_cc034a",
        actionButtons: "actionButtons_cc034a",
      };
    },
    55529: function (e, t, n) {
      e.exports = {
        spacingContainer: "spacingContainer_ceff93",
        formFieldContainer: "formFieldContainer_ceff93",
        actionButtonsContainer: "actionButtonsContainer_ceff93",
        actionButton: "actionButton_ceff93",
        backgroundContainer: "backgroundContainer_ceff93",
        containerPadding: "containerPadding_ceff93",
        dragContainer: "dragContainer_ceff93",
        dragIcon: "dragIcon_ceff93",
        dragIconContainer: "dragIconContainer_ceff93",
        dropHovered: "dropHovered_ceff93",
        iconContainer: "iconContainer_ceff93",
        icon: "icon_ceff93",
        iconInteractiveContainer: "iconInteractiveContainer_ceff93",
        iconInteractive: "iconInteractive_ceff93",
        containerTitle: "containerTitle_ceff93 title_ceff93",
        leftRailIconContainer: "leftRailIconContainer_ceff93",
        leftRailIconContainerTitle:
          "leftRailIconContainerTitle_ceff93 title_ceff93",
        leftRailIconContainerDescription:
          "leftRailIconContainerDescription_ceff93",
        containerTopHat: "containerTopHat_ceff93",
        containerTopHatText: "containerTopHatText_ceff93",
        containerFooter: "containerFooter_ceff93",
        verificationLevelTitle: "verificationLevelTitle_ceff93",
        verificationLevelHook:
          "verificationLevelHook_ceff93 containerTitle_ceff93 title_ceff93",
        fieldBackground: "fieldBackground_ceff93",
        withFooter: "withFooter_ceff93",
        clickable: "clickable_ceff93",
        fieldFooterContainer: "fieldFooterContainer_ceff93",
        guildVerificationText: "guildVerificationText_ceff93",
        verificationContainer:
          "verificationContainer_ceff93 fieldBackground_ceff93 fieldPadding_ceff93",
        button: "button_ceff93",
        removeButton: "removeButton_ceff93",
        termsFieldCaretIcon: "termsFieldCaretIcon_ceff93",
        addFormFieldContainer: "addFormFieldContainer_ceff93",
        addFormField: "addFormField_ceff93",
        addFormFieldText: "addFormFieldText_ceff93",
        multipleChoiceFixedTextColor: "multipleChoiceFixedTextColor_ceff93",
        errorText: "errorText_ceff93",
      };
    },
    291924: function (e, t, n) {
      e.exports = {
        container: "container_da027b",
        icon: "icon_da027b",
        menu: "menu_da027b",
      };
    },
    901797: function (e, t, n) {
      e.exports = {
        header: "header_e1b877",
        back: "back_e1b877",
        backButton: "backButton_e1b877",
        itemWrapper: "itemWrapper_e1b877",
        simpleItemWrapper: "simpleItemWrapper_e1b877 itemWrapper_e1b877",
        disabled: "disabled_e1b877",
        clickable: "clickable_e1b877",
        itemContent: "itemContent_e1b877",
        switch: "switch_e1b877",
        valuePill: "valuePill_e1b877",
        itemBodyContainer: "itemBodyContainer_e1b877",
        noPadding: "noPadding_e1b877",
        itemBodyInner: "itemBodyInner_e1b877",
        bringToFront: "bringToFront_e1b877",
        tooltip: "tooltip_e1b877",
        warning: "warning_e1b877",
        check: "check_e1b877",
        caret: "caret_e1b877",
      };
    },
    4581: function (e, t, n) {
      e.exports = {
        previewAndEnable: "previewAndEnable_ac6678",
        previewIcon: "previewIcon_ac6678",
        rulesScreeningItemsNoBorder: "rulesScreeningItemsNoBorder_ac6678",
        pillRow: "pillRow_ac6678",
      };
    },
  },
]);
//# sourceMappingURL=a8b9924e8d87869a215b.js.map
