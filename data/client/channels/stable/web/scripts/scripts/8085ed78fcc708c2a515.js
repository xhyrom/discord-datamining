"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44798"],
  {
    985159: function (e, t, n) {
      n.d(t, {
        z: function () {
          return r;
        },
      });
      var i = n(442837),
        l = n(826581);
      function r(e) {
        let { guildId: t } = e;
        return (0, i.e7)([l.Z], () => l.Z.getSelectedApplicationTab(t), [t]);
      }
    },
    328977: function (e, t, n) {
      n.d(t, {
        L: function () {
          return r;
        },
      });
      var i = n(442837),
        l = n(826581);
      function r(e) {
        let { guildId: t } = e;
        return (0, i.e7)([l.Z], () => l.Z.getSelectedGuildJoinRequest(t), [t]);
      }
    },
    412222: function (e, t, n) {
      n.d(t, {
        C: function () {
          return r;
        },
      });
      var i = n(442837),
        l = n(826581);
      function r(e) {
        let { guildId: t } = e;
        return (0, i.e7)([l.Z], () => l.Z.getSelectedSortOrder(t), [t]);
      }
    },
    223312: function (e, t, n) {
      n.d(t, {
        j: function () {
          return s;
        },
      }),
        n(47120);
      var i = n(192379),
        l = n(442837),
        r = n(826581),
        a = n(246364);
      function s(e) {
        let { guildId: t, applicationStatus: n, sortOrder: s } = e,
          o = (0, l.e7)([r.Z], () => r.Z.getRequests(t, n), [n, t]);
        return {
          guildJoinRequests: i.useMemo(
            () => (s === a.Nw.TIMESTAMP_DESC ? [...o].reverse() : o),
            [s, o],
          ),
        };
      }
    },
    998420: function (e, t, n) {
      n.r(t);
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        a = n(100527),
        s = n(906732),
        o = n(252618),
        c = n(598077),
        d = n(430824),
        u = n(693546),
        m = n(863249),
        h = n(328977),
        x = n(208257),
        b = n(853486),
        j = n(388032),
        p = n(271648);
      t.default = function (e) {
        let { guildId: t } = e,
          { analyticsLocations: n } = (0, s.ZP)(
            a.Z.GUILD_MEMBER_APPLICATION_REVIEW,
          ),
          g = (0, h.L)({ guildId: t }),
          { user: v } = null != g ? g : {},
          f = l.useMemo(() => (null != v ? new c.Z(v) : null), [v]),
          C = (0, r.e7)([d.Z], () => d.Z.getGuild(t), [t]);
        (0, o.Tt)({
          subsection: j.intl.string(j.t.nqrK8f),
          location: null == C ? void 0 : C.name,
        }),
          l.useEffect(() => {
            m.ZP.fetchVerificationForm(t);
          }, [t]);
        let I = null != g && null != C && null != f;
        return (0, i.jsxs)(s.Gt, {
          value: n,
          children: [
            (0, i.jsx)("div", {
              className: p.content,
              children: (0, i.jsx)(x.Z, { guildId: t, isSidebarOpen: I }),
            }),
            I &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", { className: p.sidebarSeparator }),
                  (0, i.jsx)("section", {
                    className: p.sidebar,
                    children: (0, i.jsx)(b.Z, {
                      guild: C,
                      guildJoinRequest: g,
                      guildJoinRequestUser: f,
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
        l = n(192379),
        r = n(481060),
        a = n(246364),
        s = n(388032);
      t.Z = function (e) {
        let { className: t, sortOrder: n, onSortChange: o } = e,
          c = l.useMemo(
            () => [
              { value: a.Nw.TIMESTAMP_DESC, label: s.intl.string(s.t.eoXe0t) },
              { value: a.Nw.TIMESTAMP_ASC, label: s.intl.string(s.t.mmeWUF) },
            ],
            [],
          );
        return (0, i.jsx)(r.SingleSelect, {
          className: t,
          onChange: o,
          value: n,
          options: c,
        });
      };
    },
    208257: function (e, t, n) {
      n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        a = n(481060),
        s = n(970606),
        o = n(122051),
        c = n(650774),
        d = n(430824),
        u = n(496675),
        m = n(693546),
        h = n(246364),
        x = n(98493),
        b = n(985159),
        j = n(328977),
        p = n(412222),
        g = n(223312),
        v = n(571728),
        f = n(572940),
        C = n(80487),
        I = n(146463),
        R = n(981631),
        E = n(388032),
        T = n(958681);
      function S(e) {
        let { guild: t } = e;
        return (0, i.jsxs)("div", {
          className: T.setupHeader,
          children: [
            (0, i.jsxs)("div", {
              className: T.previewContainer,
              children: [
                (0, i.jsx)(a.Heading, {
                  variant: "heading-lg/bold",
                  children: E.intl.string(E.t.aOQWKi),
                }),
                (0, i.jsxs)(a.Button, {
                  color: a.Button.Colors.TRANSPARENT,
                  onClick: () => {
                    (0, a.openModalLazy)(async () => {
                      let { default: e } = await n
                        .e("52657")
                        .then(n.bind(n, 645264));
                      return (n) =>
                        (0, i.jsx)(e, { ...n, guildId: t.id, isPreview: !0 });
                    });
                  },
                  size: a.ButtonSizes.SMALL,
                  "aria-label": E.intl.string(E.t.rqfRdX),
                  innerClassName: T.previewButton,
                  children: [
                    (0, i.jsx)(a.EyeIcon, {
                      size: "xs",
                      color: "currentColor",
                    }),
                    E.intl.string(E.t.rqfRdX),
                  ],
                }),
              ],
            }),
            (0, i.jsx)(a.Text, {
              className: T.description,
              variant: "text-sm/medium",
              color: "header-secondary",
              children: E.intl.format(E.t.xpB4Ym, { guildName: t.name }),
            }),
          ],
        });
      }
      function _(e) {
        var t, n;
        let { guildId: _, isSidebarOpen: N } = e,
          A = l.useRef(null),
          [Z, w] = l.useState((0, b.z)({ guildId: _ })),
          P = (0, p.C)({ guildId: _ }),
          B = (0, j.L)({ guildId: _ }),
          M = null !== (t = (0, v.A)({ guildId: _ })) && void 0 !== t ? t : 0,
          { guildJoinRequests: y } = (0, g.j)({
            guildId: _,
            applicationStatus: "REVIEW_APPLICATION" === Z ? h.wB.SUBMITTED : Z,
            sortOrder: P,
          }),
          k = (0, r.e7)([d.Z], () => d.Z.getGuild(_), [_]),
          U = (0, r.e7)([c.Z], () => c.Z.getMemberCount(_)),
          D = null != k && (null != U ? U : 0) >= k.maxMembers,
          { fetchNextPage: L } = (0, x.m)({ guildId: _, guildJoinRequests: y }),
          O = (0, r.e7)([u.Z], () => u.Z.can(R.Plq.KICK_MEMBERS, k)),
          q = l.useRef(!1);
        !q.current &&
          ((q.current = !0),
          L(P, "REVIEW_APPLICATION" === Z ? h.wB.SUBMITTED : Z)),
          l.useEffect(() => {
            !O && w("REVIEW_APPLICATION");
          }, [O]);
        let J = l.useRef(!1);
        l.useEffect(() => {
          J.current = !0;
        }, [P, Z]),
          l.useEffect(() => {
            if (J.current && 0 !== y.length && "REVIEW_APPLICATION" !== Z) {
              var e;
              (J.current = !1),
                m.Z.setSelectedGuildJoinRequest(_, y[0]),
                null === (e = A.current) || void 0 === e || e.scrollToTop();
            }
          }, [_, y, B, Z]);
        let V = l.useCallback(
            async (e) => {
              if ("REVIEW_APPLICATION" !== Z)
                P !== e && (m.Z.setSelectedSortOrder(_, e), await L(e, Z));
            },
            [Z, P, _, L],
          ),
          z = l.useCallback(
            async (e) => {
              if (Z !== e) {
                if (
                  (w(e),
                  (0, s.Q2)({
                    guildId: _,
                    source: R.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    tab: e,
                  }),
                  m.Z.setSelectedGuildJoinRequest(_, null),
                  "REVIEW_APPLICATION" !== e)
                )
                  m.Z.setSelectedApplicationTab(_, e), await L(P, e);
              }
            },
            [Z, P, _, L],
          ),
          F = l.useCallback(async () => {
            var e;
            if ("REVIEW_APPLICATION" === Z) return;
            let t =
              null === (e = A.current) || void 0 === e
                ? void 0
                : e.getScrollerState();
            if (null != t)
              t.scrollHeight - t.scrollTop - t.offsetHeight < 200 &&
                (await L(P, Z));
          }, [Z, P, L]),
          W =
            null !== (n = null == k ? void 0 : k.hasFeature(R.oNc.CLAN)) &&
            void 0 !== n &&
            n;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(C.Z, {
              currentTab: Z,
              onTabItemSelect: z,
              pendingGuildJoinRequestsTotal: M,
              showSetupTab: W,
              canActionJoinRequests: O,
              isSidebarOpen: N,
            }),
            (0, i.jsx)("div", {
              className: T.content,
              children:
                "REVIEW_APPLICATION" === Z
                  ? null != k
                    ? (0, i.jsx)(a.ScrollerThin, {
                        children: (0, i.jsxs)("div", {
                          className: T.scrollerContent,
                          children: [
                            (0, i.jsx)(S, { guild: k }),
                            (0, i.jsx)(o.Z, { guild: k, isClanContext: !0 }),
                          ],
                        }),
                      })
                    : null
                  : (0, i.jsxs)(i.Fragment, {
                      children: [
                        O &&
                          D &&
                          (0, i.jsx)(a.HelpMessage, {
                            messageType: a.HelpMessageTypes.WARNING,
                            textVariant: "text-sm/medium",
                            className: T.headerWarning,
                            children: E.intl.format(E.t.o3mLzM, {
                              count: null == k ? void 0 : k.maxMembers,
                            }),
                          }),
                        (0, i.jsx)("div", {
                          className: T.listControls,
                          children: (0, i.jsx)(f.Z, {
                            className: T.sortSelect,
                            sortOrder: P,
                            onSortChange: V,
                          }),
                        }),
                        (0, i.jsx)(a.Text, {
                          className: T.description,
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: E.intl.string(E.t.OCorGR),
                        }),
                        (0, i.jsx)(I.Z, {
                          applicationStatus: Z,
                          guildJoinRequests: y,
                          guildId: _,
                          onScroll: F,
                          listRef: A,
                          atMaxMemberCapacity: D,
                        }),
                      ],
                    }),
            }),
          ],
        });
      }
      t.Z = l.memo(function (e) {
        let { guildId: t, isSidebarOpen: n } = e;
        return (0, i.jsx)(_, { guildId: t, isSidebarOpen: n });
      });
    },
    80487: function (e, t, n) {
      n(653041), n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        s = n(780384),
        o = n(481060),
        c = n(410030),
        d = n(355932),
        u = n(984370),
        m = n(785195),
        h = n(889711),
        x = n(246364),
        b = n(388032),
        j = n(576779);
      let p = (e) => {
          let { tabs: t, selectedTab: n, onTabSelect: l, onClose: r } = e;
          return (0, i.jsx)(o.Menu, {
            navId: "member-applications-tabs-overflow-menu",
            "aria-label": b.intl.string(b.t.riPnr6),
            hideScroller: !0,
            onClose: r,
            onSelect: r,
            children: (0, i.jsx)(
              o.MenuGroup,
              {
                children: t.map((e) => {
                  let { id: t, label: r } = e;
                  return (0, i.jsx)(
                    o.MenuItem,
                    {
                      id: t,
                      label: r,
                      icon: t === n ? o.CircleCheckIcon : void 0,
                      action: () => l(t),
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
                label: b.intl.string(b.t.fSGLR0),
              }),
            t &&
              (i.push({
                id: x.wB.SUBMITTED,
                label:
                  0 === n
                    ? b.intl.string(b.t["4eQVBA"])
                    : b.intl.formatToPlainString(b.t["Wo+zLy"], { count: n }),
              }),
              i.push({ id: x.wB.APPROVED, label: b.intl.string(b.t.aURgY2) }),
              i.push({ id: x.wB.REJECTED, label: b.intl.string(b.t.bSZklZ) })),
            i
          );
        };
      function v(e) {
        let { onTabSelect: t, tabs: n, selectedTab: r } = e,
          d = (0, c.ZP)(),
          u = (0, s.wj)(d),
          m = l.useMemo(
            () =>
              null !=
              n.find((e) => {
                let { id: t } = e;
                return t === r;
              }),
            [r, n],
          ),
          h = m ? "header-primary" : u ? "text-muted" : "header-primary",
          x = m
            ? o.tokens.colors.HEADER_PRIMARY
            : u
              ? o.tokens.colors.TEXT_MUTED
              : o.tokens.colors.HEADER_PRIMARY;
        return (0, i.jsx)(o.Popout, {
          renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(p, {
              selectedTab: r,
              onClose: l,
              tabs: n,
              onTabSelect: t,
            });
          },
          position: "bottom",
          align: "left",
          children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsxs)(o.TabBar.Item, {
              ...e,
              id: "more",
              color: "text-muted",
              className: a()(j.more, { [j.selected]: m }),
              "aria-label": b.intl.string(b.t.UKOtz8),
              children: [
                (0, i.jsx)(o.Text, {
                  variant: "text-md/medium",
                  color: h,
                  children: b.intl.string(b.t.UKOtz8),
                }),
                n
                  ? (0, i.jsx)(o.ChevronSmallUpIcon, { size: "sm", color: x })
                  : (0, i.jsx)(o.ChevronSmallDownIcon, {
                      size: "sm",
                      color: x,
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
            onTabItemSelect: r,
            showSetupTab: a,
            canActionJoinRequests: s,
            isSidebarOpen: c,
          } = e,
          [x, p] = l.useState(0),
          f = l.useRef(null),
          C = l.useRef(x),
          I = g(a, s, t),
          {
            lastVisibleIndex: R,
            onItemLayout: E,
            overflowItemsRef: T,
          } = (0, d.zP)({
            items: I,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: x - 400,
          }),
          S = l.useMemo(() => I.slice(0, R + 1), [R, I]),
          _ = l.useMemo(() => I.slice(R + 1), [R, I]),
          N = l.useCallback(() => {
            var e;
            let t =
              null === (e = f.current) || void 0 === e
                ? void 0
                : e.getBoundingClientRect();
            null != t &&
              C.current !== t.width &&
              (p(t.width), (C.current = t.width));
          }, []);
        return (
          l.useEffect(() => {
            let e = (0, h.pP)(N);
            return (
              (0, h.YP)(e, document.body), () => (0, h.UC)(e, document.body)
            );
          }, [N]),
          l.useEffect(() => {
            N();
          }, [N, c]),
          (0, i.jsx)("div", {
            ref: f,
            children: (0, i.jsxs)(u.Z, {
              hideSearch: !0,
              toolbar: (0, i.jsx)("div", {}),
              children: [
                (0, i.jsx)(u.Z.Icon, {
                  icon: (0, o.makeIconCompat)(m.Z),
                  disabled: !0,
                  "aria-label": b.intl.string(b.t.tcvVXF),
                }),
                (0, i.jsx)(u.Z.Title, {
                  className: j.title,
                  children: b.intl.string(b.t.tcvVXF),
                }),
                (0, i.jsx)(u.Z.Divider, { className: j.divider }),
                (0, i.jsxs)("div", {
                  className: j.container,
                  children: [
                    (0, i.jsxs)("div", {
                      className: j.measurements,
                      children: [
                        I.map((e, t) =>
                          (0, i.jsx)(
                            d.AJ,
                            {
                              index: t,
                              onItemLayout: E,
                              children: (0, i.jsx)(o.TabBar.Item, {
                                id: e.id,
                                "aria-label": e.label,
                                children: e.label,
                              }),
                            },
                            e.id,
                          ),
                        ),
                        (0, i.jsx)("div", {
                          ref: T,
                          children: (0, i.jsx)(v, {
                            tabs: _,
                            onTabSelect: r,
                            selectedTab: n,
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(o.TabBar, {
                      "aria-label": b.intl.string(b.t.TdEu5e),
                      selectedItem: n,
                      type: "top-pill",
                      onItemSelect: r,
                      children: [
                        S.map((e) =>
                          (0, i.jsx)(
                            o.TabBar.Item,
                            {
                              id: e.id,
                              "aria-label": e.label,
                              children: e.label,
                            },
                            e.id,
                          ),
                        ),
                        0 !== _.length
                          ? (0, i.jsx)(v, {
                              tabs: _,
                              onTabSelect: r,
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
      var l = n(120356),
        r = n.n(l),
        a = n(91192),
        s = n(442837),
        o = n(481060),
        c = n(209613),
        d = n(430824),
        u = n(855981),
        m = n(55543),
        h = n(693546),
        x = n(826581),
        b = n(246364),
        j = n(328977),
        p = n(571728),
        g = n(762660),
        v = n(388032),
        f = n(984221);
      let C = () => null;
      function I(e) {
        let { status: t } = e,
          n = v.intl.string(v.t["/wqiSk"]),
          l = v.intl.string(v.t.o47YZm);
        switch (t) {
          case b.wB.REJECTED:
            (n = v.intl.string(v.t["7YSJ6e"])), (l = v.intl.string(v.t.i05OUV));
            break;
          case b.wB.APPROVED:
            (n = v.intl.string(v.t.bv82GR)), (l = v.intl.string(v.t.D4OUHR));
            break;
          default:
            (n = v.intl.string(v.t["/wqiSk"])), (l = v.intl.string(v.t.o47YZm));
        }
        return (0, i.jsxs)("div", {
          className: f.emptyContainer,
          children: [
            (0, i.jsxs)("div", {
              className: f.emptyIcon,
              children: [
                (0, i.jsx)(m.Z, { className: f.star }),
                (0, i.jsx)(o.CheckmarkLargeIcon, {
                  size: "md",
                  color: "currentColor",
                  className: f.checkmark,
                }),
                (0, i.jsx)(u.Z, { className: f.plus }),
              ],
            }),
            (0, i.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              children: n,
            }),
            (0, i.jsx)(o.Text, {
              color: "header-secondary",
              className: f.emptyBody,
              variant: "text-sm/normal",
              children: l,
            }),
          ],
        });
      }
      t.Z = function (e) {
        var t;
        let {
            applicationStatus: n,
            guildJoinRequests: l,
            guildId: u,
            onScroll: m,
            listRef: R,
            atMaxMemberCapacity: E,
          } = e,
          T = (0, s.e7)([d.Z], () => d.Z.getGuild(u), [u]),
          S = (0, s.e7)([x.Z], () => x.Z.isFetching()),
          _ = S ? [l.length + 25] : [l.length],
          N = (0, j.L)({ guildId: u }),
          A = null !== (t = (0, p.A)({ guildId: u })) && void 0 !== t ? t : 0,
          Z = (0, c.Z)("guild-join-requests"),
          w = (e) => {
            let { row: t } = e,
              a = l[t];
            return null == a
              ? (0, i.jsx)(g.h, {}, t)
              : (0, i.jsx)(
                  g.C,
                  {
                    className: r()({
                      [f.selected]: N === a,
                      [f.siblingSelected]: N === l[t - 1],
                    }),
                    guild: T,
                    guildJoinRequest: a,
                    onClick: () => h.Z.setSelectedGuildJoinRequest(u, a),
                    applicationStatus: n,
                    atMaxMemberCapacity: E,
                  },
                  ""
                    .concat(a.userId, "-")
                    .concat(a.applicationStatus, "-")
                    .concat(t),
                );
          };
        return S || 0 !== l.length
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                0 !== A &&
                  n === b.wB.SUBMITTED &&
                  (0, i.jsx)(o.Text, {
                    className: f.title,
                    variant: "text-xs/semibold",
                    color: "header-secondary",
                    children: (function (e, t) {
                      let n = t.toLocaleString();
                      switch (e) {
                        case b.wB.SUBMITTED:
                          return v.intl.formatToPlainString(v.t["s/46en"], {
                            count: n,
                          });
                        case b.wB.REJECTED:
                          return v.intl.formatToPlainString(v.t["9voQIC"], {
                            count: n,
                          });
                        case b.wB.APPROVED:
                          return v.intl.formatToPlainString(v.t["8hLZsb"], {
                            count: n,
                          });
                        default:
                          return "";
                      }
                    })(n, A).toUpperCase(),
                  }),
                (0, i.jsx)(a.bG, {
                  navigator: Z,
                  children: (0, i.jsx)(a.SJ, {
                    children: (e) => {
                      let { ref: t, role: n, ...l } = e;
                      return (0, i.jsx)(
                        o.List,
                        {
                          innerRole: n,
                          innerAriaLabel: v.intl.string(v.t["9Oq93t"]),
                          ref: (e) => {
                            var n;
                            (R.current = e),
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
                          renderSection: C,
                          renderRow: w,
                          sections: _,
                          onScroll: m,
                          fade: !0,
                          ...l,
                        },
                        "guild-application-review",
                      );
                    },
                  }),
                }),
              ],
            })
          : (0, i.jsx)(I, { status: n });
      };
    },
    762660: function (e, t, n) {
      n.d(t, {
        C: function () {
          return g;
        },
        h: function () {
          return v;
        },
      }),
        n(47120),
        n(411104);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        s = n(913527),
        o = n.n(s),
        c = n(481060),
        d = n(239091),
        u = n(598077),
        m = n(768581),
        h = n(693546),
        x = n(246364),
        b = n(388032),
        j = n(984221);
      function p(e) {
        let { icon: t, onClick: n, submitting: l, disabled: r } = e;
        return (0, i.jsx)(c.Clickable, {
          className: a()(j.actionIconContainer, { [j.disabled]: r || l }),
          onClick: n,
          children: l
            ? (0, i.jsx)(c.Dots, {
                className: j.icon,
                dotRadius: 2,
                themed: !0,
              })
            : (0, i.jsx)(t, {
                className: j.icon,
                size: "xxs",
                color: "currentColor",
              }),
        });
      }
      function g(e) {
        let {
            applicationStatus: t,
            guild: r,
            guildJoinRequest: s,
            className: g,
            onClick: v,
            atMaxMemberCapacity: f,
          } = e,
          [C, I] = l.useState(null),
          { user: R, createdAt: E } = s;
        if (null == R) throw Error("Missing user on this guild join request!");
        let T = l.useMemo(() => new u.Z(R), [R]),
          S = m.ZP.getUserAvatarURL(T),
          _ = t === x.wB.SUBMITTED,
          N = l.useCallback(
            async (e, t) => {
              let { guildId: n, userId: i } = e;
              if (null == C) {
                I(t);
                try {
                  await h.Z.updateGuildJoinRequest(n, i, s.joinRequestId, t);
                } catch (e) {
                  (0, c.showToast)(
                    (0, c.createToast)(
                      b.intl.string(b.t.R0RpRU),
                      c.ToastType.FAILURE,
                    ),
                  ),
                    I(null);
                }
              }
            },
            [C, s.joinRequestId],
          ),
          A = async () => {
            await N(s, x.wB.APPROVED);
          },
          Z = async () => {
            await N(s, x.wB.REJECTED);
          };
        return (0, i.jsxs)(c.Clickable, {
          className: a()(j.container, g),
          onClick: v,
          children: [
            (0, i.jsx)(c.Avatar, {
              src: S,
              size: c.AvatarSizes.SIZE_40,
              "aria-label": R.username,
              className: j.__invalid_spacer,
            }),
            (0, i.jsxs)("div", {
              className: j.userDetails,
              children: [
                (0, i.jsx)(c.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: R.username,
                }),
                (0, i.jsx)(c.Text, {
                  className: j.createdAt,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: o()(E).format("lll"),
                }),
              ],
            }),
            _ &&
              !f &&
              (0, i.jsx)(p, {
                icon: c.CheckmarkLargeIcon,
                onClick: A,
                submitting: C === x.wB.APPROVED,
                disabled: null != C && C !== x.wB.APPROVED,
              }),
            _ &&
              (0, i.jsx)(p, {
                icon: c.XSmallIcon,
                onClick: Z,
                submitting: C === x.wB.REJECTED,
                disabled: null != C && C !== x.wB.REJECTED,
              }),
            (0, i.jsx)(c.Clickable, {
              className: a()(j.overflowMenuContainer, {
                [j.disabled]: null != C,
              }),
              onClick: (e) => {
                (0, d.jW)(
                  e,
                  async () => {
                    let { default: e } = await n
                      .e("84259")
                      .then(n.bind(n, 597409));
                    return (t) => (0, i.jsx)(e, { ...t, guild: r, user: T });
                  },
                  { position: "bottom", align: "right" },
                );
              },
              children: (0, i.jsx)(c.MoreHorizontalIcon, {
                size: "custom",
                color: "currentColor",
                className: j.icon,
                width: 18,
              }),
            }),
          ],
        });
      }
      function v() {
        let e = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
          t = "".concat(Math.floor(25 * Math.random()) + 50, "px");
        return (0, i.jsxs)("div", {
          className: j.placeholder,
          children: [
            (0, i.jsx)("div", { className: a()(j.placeholderAvatar) }),
            (0, i.jsxs)("div", {
              className: j.userDetails,
              children: [
                (0, i.jsx)("div", {
                  className: j.placeholderUsername,
                  style: { maxWidth: e },
                }),
                (0, i.jsx)("div", {
                  className: j.placeholderCreatedAt,
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
          return f;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(913527),
        r = n.n(l),
        a = n(442837),
        s = n(692547),
        o = n(481060),
        c = n(239091),
        d = n(171368),
        u = n(650774),
        m = n(271383),
        h = n(594174),
        x = n(709054),
        b = n(246364),
        j = n(360328),
        p = n(981631),
        g = n(388032),
        v = n(866323);
      function f(e) {
        var t;
        let { guildJoinRequest: l, guild: f, guildJoinRequestUser: C } = e,
          { createdAt: I, actionedAt: R, guildId: E, userId: T } = l,
          {
            approveRequest: S,
            rejectRequest: _,
            submitting: N,
          } = (0, j.s)(E, T, l.joinRequestId),
          A = null === (t = l.actionedByUser) || void 0 === t ? void 0 : t.id,
          Z = (0, a.e7)([h.default], () => h.default.getUser(A)),
          w = (0, a.e7)(
            [m.ZP],
            () => (null != A ? m.ZP.getMember(E, A) : null),
            [A, E],
          ),
          P = (0, a.e7)([u.Z], () => u.Z.getMemberCount(E)),
          B = (null != P ? P : 0) >= f.maxMembers,
          M = g.intl.string(g.t["4eQVBA"]),
          y = (0, i.jsx)(o.ClockIcon, {
            size: "custom",
            color: "currentColor",
            width: 24,
            height: 24,
            className: v.icon,
          });
        l.applicationStatus === b.wB.APPROVED
          ? ((M = g.intl.string(g.t.aURgY2)),
            (y = (0, i.jsx)(o.CircleCheckIcon, {
              size: "md",
              className: v.iconApproved,
              color: s.Z.colors.WHITE.css,
              secondaryColor: "currentColor",
            })))
          : l.applicationStatus === b.wB.REJECTED &&
            ((M = g.intl.string(g.t.bSZklZ)),
            (y = (0, i.jsx)(o.CircleXIcon, {
              size: "md",
              color: s.Z.colors.WHITE.css,
              secondaryColor: s.Z.colors.STATUS_DANGER.css,
            })));
        let k =
          null != Z && null != R
            ? g.intl.format(g.t.pRpZCQ, {
                date: r()(x.default.extractTimestamp(R)).format("ll"),
                usernameHook: function () {
                  var e;
                  return (0, i.jsx)(
                    o.Clickable,
                    {
                      className: v.actionedByUser,
                      onClick: () =>
                        (0, d.openUserProfileModal)({
                          userId: Z.id,
                          guildId: E,
                          analyticsLocation: {
                            section:
                              p.jXE
                                .GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                            object: p.qAy.ACTIONED_BY_USER,
                          },
                        }),
                      tag: "div",
                      role: "link",
                      children: (0, i.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "header-primary",
                        children:
                          null !== (e = null == w ? void 0 : w.nick) &&
                          void 0 !== e
                            ? e
                            : Z.username,
                      }),
                    },
                    "username-hook",
                  );
                },
              })
            : r()(I).format("lll");
        return (0, i.jsxs)("div", {
          className: v.container,
          children: [
            (0, i.jsxs)("div", {
              className: v.wrapper,
              children: [
                (0, i.jsxs)("div", {
                  className: v.inline,
                  children: [
                    y,
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)(o.Heading, {
                          variant: "heading-sm/semibold",
                          children: M,
                        }),
                        (0, i.jsx)(o.Text, {
                          className: v.headerSubtext,
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: k,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: v.inline,
                  children: [
                    l.applicationStatus === b.wB.SUBMITTED &&
                      (0, i.jsxs)("div", {
                        className: v.buttons,
                        children: [
                          (0, i.jsx)(o.Tooltip, {
                            text: g.intl.string(g.t.RbIXi4),
                            shouldShow: B,
                            children: (e) =>
                              (0, i.jsx)(o.Button, {
                                ...e,
                                color: o.Button.Colors.GREEN,
                                submitting: N,
                                disabled: B,
                                onClick: S,
                                children: g.intl.string(g.t.BzjDQE),
                              }),
                          }),
                          (0, i.jsx)(o.Button, {
                            color: o.Button.Colors.RED,
                            onClick: _,
                            disabled: N,
                            children: g.intl.string(g.t.hDtbs7),
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
                            (0, i.jsx)(e, { ...t, guild: f, user: C });
                        });
                      },
                      className: v.overflow,
                      children: (0, i.jsx)(o.MoreHorizontalIcon, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: v.iconInteractive,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            l.applicationStatus === b.wB.REJECTED &&
              null != l.rejectionReason &&
              (0, i.jsx)("div", {
                className: v.rejectionReason,
                children: (0, i.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children: l.rejectionReason,
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
        l = n(192379),
        r = n(442837),
        a = n(481060),
        s = n(287734),
        o = n(592125),
        c = n(693546),
        d = n(388032);
      function u(e) {
        let { joinRequest: t } = e,
          [n, u] = l.useState(!1),
          m = (0, r.e7)([o.Z], () => o.Z.getChannel(t.interviewChannelId)),
          h = l.useCallback(() => {
            (0, a.showToast)(
              (0, a.createToast)(
                d.intl.string(d.t.R0RpRU),
                a.ToastType.FAILURE,
              ),
            );
          }, []),
          x = l.useCallback(async () => {
            if (null != m) {
              s.default.selectPrivateChannel(m.id);
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
        return (0, i.jsx)(a.Button, {
          color: a.Button.Colors.BRAND,
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
      var l = n(120356),
        r = n.n(l),
        a = n(481060),
        s = n(906732),
        o = n(171368),
        c = n(768581),
        d = n(51144),
        u = n(981631),
        m = n(388032),
        h = n(634200);
      function x(e) {
        let { user: t, joinRequestId: n, className: l } = e,
          { username: x } = t,
          b = c.ZP.getUserAvatarURL(t),
          { analyticsLocations: j } = (0, s.ZP)(),
          p = () => {
            (0, o.openUserProfileModal)({
              userId: t.id,
              joinRequestId: n,
              sourceAnalyticsLocations: j,
              analyticsLocation: {
                section: u.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                object: u.qAy.JOIN_REQUEST,
              },
            });
          };
        return (0, i.jsxs)("div", {
          className: r()(h.container, l),
          children: [
            (0, i.jsx)(a.Anchor, {
              onClick: p,
              children: (0, i.jsx)(a.Avatar, {
                src: b,
                size: a.AvatarSizes.SIZE_80,
                "aria-label": x,
                className: h.avatar,
              }),
            }),
            (0, i.jsx)("div", {
              className: h.username,
              children: (0, i.jsx)(a.Heading, {
                variant: "heading-lg/semibold",
                children: d.ZP.getFormattedName(t),
              }),
            }),
            (0, i.jsx)(a.Anchor, {
              onClick: p,
              children: m.intl.string(m.t.iXAna2),
            }),
          ],
        });
      }
    },
    853486: function (e, t, n) {
      var i = n(200651),
        l = n(192379),
        r = n(481060),
        a = n(665149),
        s = n(51144),
        o = n(246364),
        c = n(666233),
        d = n(50662),
        u = n(395716),
        m = n(673885),
        h = n(981631),
        x = n(388032),
        b = n(794284);
      t.Z = function (e) {
        let {
            guild: t,
            guildJoinRequest: j,
            guildJoinRequestUser: p,
            onClose: g,
          } = e,
          v = l.useMemo(() => {
            var e;
            return null !== (e = j.formResponses) && void 0 !== e ? e : [];
          }, [j.formResponses]),
          f =
            t.hasFeature(h.oNc.CLAN) && j.applicationStatus === o.wB.SUBMITTED,
          C = l.useCallback(
            () =>
              (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("17945").then(n.bind(n, 223926));
                return (n) =>
                  (0, i.jsx)(e, {
                    ...n,
                    guild: t,
                    guildJoinRequest: j,
                    user: p,
                  });
              }),
            [t, j, p],
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(a.ZP, {
              toolbar: (0, i.jsx)(a.ZP.Icon, {
                icon: r.XSmallIcon,
                onClick: g,
                tooltip: x.intl.string(x.t.cpT0Cg),
              }),
              children: [
                (0, i.jsx)(a.ZP.Icon, {
                  icon: r.UserIcon,
                  disabled: !0,
                  "aria-label": x.intl.string(x.t.PuCkTU),
                }),
                (0, i.jsx)(r.Heading, {
                  variant: "heading-md/semibold",
                  children: s.ZP.getName(p),
                }),
              ],
            }),
            (0, i.jsx)(d.Z, {
              guildJoinRequest: j,
              guildJoinRequestUser: p,
              guild: t,
            }),
            (0, i.jsxs)(r.Scroller, {
              children: [
                (0, i.jsxs)("div", {
                  className: b.container,
                  children: [
                    (0, i.jsx)(m.Z, {
                      user: p,
                      joinRequestId: j.joinRequestId,
                    }),
                    f &&
                      (0, i.jsxs)("div", {
                        className: b.actionButtons,
                        children: [
                          (0, i.jsx)(u.Z, { joinRequest: j }),
                          (0, i.jsx)(r.Button, {
                            color: r.ButtonColors.PRIMARY,
                            onClick: C,
                            children: x.intl.string(x.t["6DpJRU"]),
                          }),
                        ],
                      }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: b.disabledFormRenderer,
                  children: (0, i.jsx)(c.Z, {
                    guildId: t.id,
                    formFields: v,
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
      var l = n(442837),
        r = n(481060),
        a = n(594174),
        s = n(246364),
        o = n(489813),
        c = n(186078),
        d = n(73880),
        u = n(196345),
        m = n(707592),
        h = n(388032);
      t.Z = function (e) {
        let { formFields: t, user: n, showRequirements: x = !0 } = e;
        return null ==
          (0, l.e7)([a.default], () =>
            null != n ? n : a.default.getCurrentUser(),
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
                      case s.QJ.TERMS:
                        return (0, i.jsx)(u.QC, { formField: e }, t);
                      case s.QJ.TEXT_INPUT:
                        return (0, i.jsx)(m.YJ, { formField: e }, t);
                      case s.QJ.PARAGRAPH:
                        return (0, i.jsx)(d.jn, { formField: e }, t);
                      case s.QJ.MULTIPLE_CHOICE:
                        return (0, i.jsx)(c.QH, { formField: e }, t);
                    }
                  })(e, t),
                ),
              ],
            });
      };
    },
    271648: function (e, t, n) {
      e.exports = {
        content: "content_ebb939",
        sidebar: "sidebar_ebb939",
        sidebarSeparator: "sidebarSeparator_ebb939",
      };
    },
    958681: function (e, t, n) {
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
    576779: function (e, t, n) {
      e.exports = {
        title: "title_c768e8",
        divider: "divider_c768e8",
        container: "container_c768e8",
        measurements: "measurements_c768e8",
        more: "more_c768e8",
        selected: "selected_c768e8",
      };
    },
    984221: function (e, t, n) {
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
    866323: function (e, t, n) {
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
    634200: function (e, t, n) {
      e.exports = {
        container: "container_a84246",
        avatar: "avatar_a84246",
        username: "username_a84246",
      };
    },
    794284: function (e, t, n) {
      e.exports = {
        container: "container_cc034a",
        disabledFormRenderer: "disabledFormRenderer_cc034a",
        actionButtons: "actionButtons_cc034a",
      };
    },
  },
]);
//# sourceMappingURL=8085ed78fcc708c2a515.js.map
