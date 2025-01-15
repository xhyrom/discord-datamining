"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94650"],
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
          return l;
        },
      }),
        n(47120);
      var i = n(192379),
        r = n(442837),
        a = n(826581),
        o = n(246364);
      function l(e) {
        let { guildId: t, applicationStatus: n, sortOrder: l } = e,
          c = (0, r.e7)([a.Z], () => a.Z.getRequests(t, n), [n, t]);
        return {
          guildJoinRequests: i.useMemo(
            () => (l === o.Nw.TIMESTAMP_DESC ? [...c].reverse() : c),
            [l, c],
          ),
        };
      }
    },
    571728: function (e, t, n) {
      n.d(t, {
        A: function () {
          return a;
        },
      });
      var i = n(442837),
        r = n(826581);
      function a(e) {
        let { guildId: t } = e;
        return (0, i.e7)(
          [r.Z],
          () => (null != t ? r.Z.getSubmittedGuildJoinRequestTotal(t) : void 0),
          [t],
        );
      }
    },
    998420: function (e, t, n) {
      n.r(t);
      var i = n(200651),
        r = n(192379),
        a = n(442837),
        o = n(100527),
        l = n(906732),
        c = n(252618),
        s = n(598077),
        d = n(430824),
        u = n(693546),
        m = n(863249),
        f = n(328977),
        x = n(208257),
        b = n(853486),
        h = n(388032),
        p = n(921397);
      t.default = function (e) {
        let { guildId: t } = e,
          { analyticsLocations: n } = (0, l.ZP)(
            o.Z.GUILD_MEMBER_APPLICATION_REVIEW,
          ),
          C = (0, f.L)({ guildId: t }),
          { user: _ } = null != C ? C : {},
          g = r.useMemo(() => (null != _ ? new s.Z(_) : null), [_]),
          v = (0, a.e7)([d.Z], () => d.Z.getGuild(t), [t]);
        (0, c.Tt)({
          subsection: h.intl.string(h.t.nqrK8f),
          location: null == v ? void 0 : v.name,
        }),
          r.useEffect(() => {
            m.ZP.fetchVerificationForm(t);
          }, [t]);
        let j = null != C && null != v && null != g;
        return (0, i.jsxs)(l.Gt, {
          value: n,
          children: [
            (0, i.jsx)("div", {
              className: p.content,
              children: (0, i.jsx)(x.Z, { guildId: t, isSidebarOpen: j }),
            }),
            j &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", { className: p.sidebarSeparator }),
                  (0, i.jsx)("section", {
                    className: p.sidebar,
                    children: (0, i.jsx)(b.Z, {
                      guild: v,
                      guildJoinRequest: C,
                      guildJoinRequestUser: g,
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
        o = n(246364),
        l = n(388032);
      t.Z = function (e) {
        let { className: t, sortOrder: n, onSortChange: c } = e,
          s = r.useMemo(
            () => [
              { value: o.Nw.TIMESTAMP_DESC, label: l.intl.string(l.t.eoXe0t) },
              { value: o.Nw.TIMESTAMP_ASC, label: l.intl.string(l.t.mmeWUF) },
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
        o = n(481060),
        l = n(970606),
        c = n(122051),
        s = n(650774),
        d = n(430824),
        u = n(496675),
        m = n(693546),
        f = n(246364),
        x = n(98493),
        b = n(985159),
        h = n(328977),
        p = n(412222),
        C = n(223312),
        _ = n(571728),
        g = n(572940),
        v = n(80487),
        j = n(146463),
        I = n(981631),
        T = n(388032),
        R = n(898517);
      function E(e) {
        let { guild: t } = e;
        return (0, i.jsxs)("div", {
          className: R.setupHeader,
          children: [
            (0, i.jsxs)("div", {
              className: R.previewContainer,
              children: [
                (0, i.jsx)(o.Heading, {
                  variant: "heading-lg/bold",
                  children: T.intl.string(T.t.aOQWKi),
                }),
                (0, i.jsxs)(o.Button, {
                  color: o.Button.Colors.TRANSPARENT,
                  onClick: () => {
                    (0, o.openModalLazy)(async () => {
                      let { default: e } = await n
                        .e("52657")
                        .then(n.bind(n, 645264));
                      return (n) =>
                        (0, i.jsx)(e, { ...n, guildId: t.id, isPreview: !0 });
                    });
                  },
                  size: o.ButtonSizes.SMALL,
                  "aria-label": T.intl.string(T.t.rqfRdX),
                  innerClassName: R.previewButton,
                  children: [
                    (0, i.jsx)(o.EyeIcon, {
                      size: "xs",
                      color: "currentColor",
                    }),
                    T.intl.string(T.t.rqfRdX),
                  ],
                }),
              ],
            }),
            (0, i.jsx)(o.Text, {
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
        let { guildId: S, isSidebarOpen: A } = e,
          w = r.useRef(null),
          [N, P] = r.useState((0, b.z)({ guildId: S })),
          B = (0, p.C)({ guildId: S }),
          Z = (0, h.L)({ guildId: S }),
          k = null !== (t = (0, _.A)({ guildId: S })) && void 0 !== t ? t : 0,
          { guildJoinRequests: M } = (0, C.j)({
            guildId: S,
            applicationStatus: "REVIEW_APPLICATION" === N ? f.wB.SUBMITTED : N,
            sortOrder: B,
          }),
          y = (0, a.e7)([d.Z], () => d.Z.getGuild(S), [S]),
          F = (0, a.e7)([s.Z], () => s.Z.getMemberCount(S)),
          U = null != y && (null != F ? F : 0) >= y.maxMembers,
          { fetchNextPage: L } = (0, x.m)({ guildId: S, guildJoinRequests: M }),
          D = (0, a.e7)([u.Z], () => u.Z.can(I.Plq.KICK_MEMBERS, y)),
          O = r.useRef(!1);
        !O.current &&
          ((O.current = !0),
          L(B, "REVIEW_APPLICATION" === N ? f.wB.SUBMITTED : N)),
          r.useEffect(() => {
            !D && P("REVIEW_APPLICATION");
          }, [D]);
        let J = r.useRef(!1);
        r.useEffect(() => {
          J.current = !0;
        }, [B, N]),
          r.useEffect(() => {
            if (J.current && 0 !== M.length && "REVIEW_APPLICATION" !== N) {
              var e;
              (J.current = !1),
                m.Z.setSelectedGuildJoinRequest(S, M[0]),
                null === (e = w.current) || void 0 === e || e.scrollToTop();
            }
          }, [S, M, Z, N]);
        let q = r.useCallback(
            async (e) => {
              if ("REVIEW_APPLICATION" !== N)
                B !== e && (m.Z.setSelectedSortOrder(S, e), await L(e, N));
            },
            [N, B, S, L],
          ),
          H = r.useCallback(
            async (e) => {
              if (N !== e) {
                if (
                  (P(e),
                  (0, l.Q2)({
                    guildId: S,
                    source: I.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    tab: e,
                  }),
                  m.Z.setSelectedGuildJoinRequest(S, null),
                  "REVIEW_APPLICATION" !== e)
                )
                  m.Z.setSelectedApplicationTab(S, e), await L(B, e);
              }
            },
            [N, B, S, L],
          ),
          V = r.useCallback(async () => {
            var e;
            if ("REVIEW_APPLICATION" === N) return;
            let t =
              null === (e = w.current) || void 0 === e
                ? void 0
                : e.getScrollerState();
            if (null != t)
              t.scrollHeight - t.scrollTop - t.offsetHeight < 200 &&
                (await L(B, N));
          }, [N, B, L]),
          W =
            null !== (n = null == y ? void 0 : y.hasFeature(I.oNc.CLAN)) &&
            void 0 !== n &&
            n;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(v.Z, {
              currentTab: N,
              onTabItemSelect: H,
              pendingGuildJoinRequestsTotal: k,
              showSetupTab: W,
              canActionJoinRequests: D,
              isSidebarOpen: A,
            }),
            (0, i.jsx)("div", {
              className: R.content,
              children:
                "REVIEW_APPLICATION" === N
                  ? null != y
                    ? (0, i.jsx)(o.ScrollerThin, {
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
                          (0, i.jsx)(o.HelpMessage, {
                            messageType: o.HelpMessageTypes.WARNING,
                            textVariant: "text-sm/medium",
                            className: R.headerWarning,
                            children: T.intl.format(T.t.o3mLzM, {
                              count: null == y ? void 0 : y.maxMembers,
                            }),
                          }),
                        (0, i.jsx)("div", {
                          className: R.listControls,
                          children: (0, i.jsx)(g.Z, {
                            className: R.sortSelect,
                            sortOrder: B,
                            onSortChange: q,
                          }),
                        }),
                        (0, i.jsx)(o.Text, {
                          className: R.description,
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: T.intl.string(T.t.OCorGR),
                        }),
                        (0, i.jsx)(j.Z, {
                          applicationStatus: N,
                          guildJoinRequests: M,
                          guildId: S,
                          onScroll: V,
                          listRef: w,
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
        o = n.n(a),
        l = n(21260),
        c = n(780384),
        s = n(481060),
        d = n(410030),
        u = n(984370),
        m = n(785195),
        f = n(889711),
        x = n(246364),
        b = n(388032),
        h = n(954640);
      let p = (e) => {
          let { tabs: t, selectedTab: n, onTabSelect: r, onClose: a } = e;
          return (0, i.jsx)(s.Menu, {
            navId: "member-applications-tabs-overflow-menu",
            "aria-label": b.intl.string(b.t.riPnr6),
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
        C = (e, t, n) => {
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
      function _(e) {
        let { onTabSelect: t, tabs: n, selectedTab: a } = e,
          l = (0, d.ZP)(),
          u = (0, c.wj)(l),
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
          x = m
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
              className: o()(h.more, { [h.selected]: m }),
              "aria-label": b.intl.string(b.t.UKOtz8),
              children: [
                (0, i.jsx)(s.Text, {
                  variant: "text-md/medium",
                  color: f,
                  children: b.intl.string(b.t.UKOtz8),
                }),
                n
                  ? (0, i.jsx)(s.ChevronSmallUpIcon, { size: "sm", color: x })
                  : (0, i.jsx)(s.ChevronSmallDownIcon, {
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
            onTabItemSelect: a,
            showSetupTab: o,
            canActionJoinRequests: c,
            isSidebarOpen: d,
          } = e,
          [x, p] = r.useState(0),
          g = r.useRef(null),
          v = r.useRef(x),
          j = C(o, c, t),
          {
            lastVisibleIndex: I,
            onItemLayout: T,
            overflowItemsRef: R,
          } = (0, l.zP)({
            items: j,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: x - 400,
          }),
          E = r.useMemo(() => j.slice(0, I + 1), [I, j]),
          S = r.useMemo(() => j.slice(I + 1), [I, j]),
          A = r.useCallback(() => {
            var e;
            let t =
              null === (e = g.current) || void 0 === e
                ? void 0
                : e.getBoundingClientRect();
            null != t &&
              v.current !== t.width &&
              (p(t.width), (v.current = t.width));
          }, []);
        return (
          r.useEffect(() => {
            let e = (0, f.pP)(A);
            return (
              (0, f.YP)(e, document.body), () => (0, f.UC)(e, document.body)
            );
          }, [A]),
          r.useEffect(() => {
            A();
          }, [A, d]),
          (0, i.jsx)("div", {
            ref: g,
            children: (0, i.jsxs)(u.Z, {
              hideSearch: !0,
              toolbar: (0, i.jsx)("div", {}),
              children: [
                (0, i.jsx)(u.Z.Icon, {
                  icon: (0, s.makeIconCompat)(m.Z),
                  disabled: !0,
                  "aria-label": b.intl.string(b.t.tcvVXF),
                }),
                (0, i.jsx)(u.Z.Title, {
                  className: h.title,
                  children: b.intl.string(b.t.tcvVXF),
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
                            l.AJ,
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
                          children: (0, i.jsx)(_, {
                            tabs: S,
                            onTabSelect: a,
                            selectedTab: n,
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(s.TabBar, {
                      "aria-label": b.intl.string(b.t.TdEu5e),
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
                          ? (0, i.jsx)(_, {
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
        o = n(91192),
        l = n(442837),
        c = n(481060),
        s = n(209613),
        d = n(430824),
        u = n(855981),
        m = n(55543),
        f = n(693546),
        x = n(826581),
        b = n(246364),
        h = n(328977),
        p = n(571728),
        C = n(762660),
        _ = n(388032),
        g = n(163488);
      let v = () => null;
      function j(e) {
        let { status: t } = e,
          n = _.intl.string(_.t["/wqiSk"]),
          r = _.intl.string(_.t.o47YZm);
        switch (t) {
          case b.wB.REJECTED:
            (n = _.intl.string(_.t["7YSJ6e"])), (r = _.intl.string(_.t.i05OUV));
            break;
          case b.wB.APPROVED:
            (n = _.intl.string(_.t.bv82GR)), (r = _.intl.string(_.t.D4OUHR));
            break;
          default:
            (n = _.intl.string(_.t["/wqiSk"])), (r = _.intl.string(_.t.o47YZm));
        }
        return (0, i.jsxs)("div", {
          className: g.emptyContainer,
          children: [
            (0, i.jsxs)("div", {
              className: g.emptyIcon,
              children: [
                (0, i.jsx)(m.Z, { className: g.star }),
                (0, i.jsx)(c.CheckmarkLargeIcon, {
                  size: "md",
                  color: "currentColor",
                  className: g.checkmark,
                }),
                (0, i.jsx)(u.Z, { className: g.plus }),
              ],
            }),
            (0, i.jsx)(c.Heading, {
              variant: "heading-xl/semibold",
              children: n,
            }),
            (0, i.jsx)(c.Text, {
              color: "header-secondary",
              className: g.emptyBody,
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
          R = (0, l.e7)([d.Z], () => d.Z.getGuild(u), [u]),
          E = (0, l.e7)([x.Z], () => x.Z.isFetching()),
          S = E ? [r.length + 25] : [r.length],
          A = (0, h.L)({ guildId: u }),
          w = null !== (t = (0, p.A)({ guildId: u })) && void 0 !== t ? t : 0,
          N = (0, s.Z)("guild-join-requests"),
          P = (e) => {
            let { row: t } = e,
              o = r[t];
            return null == o
              ? (0, i.jsx)(C.h, {}, t)
              : (0, i.jsx)(
                  C.C,
                  {
                    className: a()({
                      [g.selected]: A === o,
                      [g.siblingSelected]: A === r[t - 1],
                    }),
                    guild: R,
                    guildJoinRequest: o,
                    onClick: () => f.Z.setSelectedGuildJoinRequest(u, o),
                    applicationStatus: n,
                    atMaxMemberCapacity: T,
                  },
                  ""
                    .concat(o.userId, "-")
                    .concat(o.applicationStatus, "-")
                    .concat(t),
                );
          };
        return E || 0 !== r.length
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                0 !== w &&
                  n === b.wB.SUBMITTED &&
                  (0, i.jsx)(c.Text, {
                    className: g.title,
                    variant: "text-xs/semibold",
                    color: "header-secondary",
                    children: (function (e, t) {
                      let n = t.toLocaleString();
                      switch (e) {
                        case b.wB.SUBMITTED:
                          return _.intl.formatToPlainString(_.t["s/46en"], {
                            count: n,
                          });
                        case b.wB.REJECTED:
                          return _.intl.formatToPlainString(_.t["9voQIC"], {
                            count: n,
                          });
                        case b.wB.APPROVED:
                          return _.intl.formatToPlainString(_.t["8hLZsb"], {
                            count: n,
                          });
                        default:
                          return "";
                      }
                    })(n, w).toUpperCase(),
                  }),
                (0, i.jsx)(o.bG, {
                  navigator: N,
                  children: (0, i.jsx)(o.SJ, {
                    children: (e) => {
                      let { ref: t, role: n, ...r } = e;
                      return (0, i.jsx)(
                        c.List,
                        {
                          innerRole: n,
                          innerAriaLabel: _.intl.string(_.t["9Oq93t"]),
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
                          renderRow: P,
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
          return C;
        },
        h: function () {
          return _;
        },
      }),
        n(47120),
        n(411104);
      var i = n(200651),
        r = n(192379),
        a = n(120356),
        o = n.n(a),
        l = n(913527),
        c = n.n(l),
        s = n(481060),
        d = n(239091),
        u = n(598077),
        m = n(768581),
        f = n(693546),
        x = n(246364),
        b = n(388032),
        h = n(163488);
      function p(e) {
        let { icon: t, onClick: n, submitting: r, disabled: a } = e;
        return (0, i.jsx)(s.Clickable, {
          className: o()(h.actionIconContainer, { [h.disabled]: a || r }),
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
      function C(e) {
        let {
            applicationStatus: t,
            guild: a,
            guildJoinRequest: l,
            className: C,
            onClick: _,
            atMaxMemberCapacity: g,
          } = e,
          [v, j] = r.useState(null),
          { user: I, createdAt: T } = l;
        if (null == I) throw Error("Missing user on this guild join request!");
        let R = r.useMemo(() => new u.Z(I), [I]),
          E = m.ZP.getUserAvatarURL(R),
          S = t === x.wB.SUBMITTED,
          A = r.useCallback(
            async (e, t) => {
              let { guildId: n, userId: i } = e;
              if (null == v) {
                j(t);
                try {
                  await f.Z.updateGuildJoinRequest(n, i, l.joinRequestId, t);
                } catch (e) {
                  (0, s.showToast)(
                    (0, s.createToast)(
                      b.intl.string(b.t.R0RpRU),
                      s.ToastType.FAILURE,
                    ),
                  ),
                    j(null);
                }
              }
            },
            [v, l.joinRequestId],
          ),
          w = async () => {
            await A(l, x.wB.APPROVED);
          },
          N = async () => {
            await A(l, x.wB.REJECTED);
          };
        return (0, i.jsxs)(s.Clickable, {
          className: o()(h.container, C),
          onClick: _,
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
              !g &&
              (0, i.jsx)(p, {
                icon: s.CheckmarkLargeIcon,
                onClick: w,
                submitting: v === x.wB.APPROVED,
                disabled: null != v && v !== x.wB.APPROVED,
              }),
            S &&
              (0, i.jsx)(p, {
                icon: s.XSmallIcon,
                onClick: N,
                submitting: v === x.wB.REJECTED,
                disabled: null != v && v !== x.wB.REJECTED,
              }),
            (0, i.jsx)(s.Clickable, {
              className: o()(h.overflowMenuContainer, {
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
      function _() {
        let e = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
          t = "".concat(Math.floor(25 * Math.random()) + 50, "px");
        return (0, i.jsxs)("div", {
          className: h.placeholder,
          children: [
            (0, i.jsx)("div", { className: o()(h.placeholderAvatar) }),
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
          return g;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(913527),
        a = n.n(r),
        o = n(442837),
        l = n(692547),
        c = n(481060),
        s = n(239091),
        d = n(171368),
        u = n(650774),
        m = n(271383),
        f = n(594174),
        x = n(709054),
        b = n(246364),
        h = n(360328),
        p = n(981631),
        C = n(388032),
        _ = n(852974);
      function g(e) {
        var t;
        let { guildJoinRequest: r, guild: g, guildJoinRequestUser: v } = e,
          { createdAt: j, actionedAt: I, guildId: T, userId: R } = r,
          {
            approveRequest: E,
            rejectRequest: S,
            submitting: A,
          } = (0, h.s)(T, R, r.joinRequestId),
          w = null === (t = r.actionedByUser) || void 0 === t ? void 0 : t.id,
          N = (0, o.e7)([f.default], () => f.default.getUser(w)),
          P = (0, o.e7)(
            [m.ZP],
            () => (null != w ? m.ZP.getMember(T, w) : null),
            [w, T],
          ),
          B = (0, o.e7)([u.Z], () => u.Z.getMemberCount(T)),
          Z = (null != B ? B : 0) >= g.maxMembers,
          k = C.intl.string(C.t["4eQVBA"]),
          M = (0, i.jsx)(c.ClockIcon, {
            size: "custom",
            color: "currentColor",
            width: 24,
            height: 24,
            className: _.icon,
          });
        r.applicationStatus === b.wB.APPROVED
          ? ((k = C.intl.string(C.t.aURgY2)),
            (M = (0, i.jsx)(c.CircleCheckIcon, {
              size: "md",
              className: _.iconApproved,
              color: l.Z.colors.WHITE.css,
              secondaryColor: "currentColor",
            })))
          : r.applicationStatus === b.wB.REJECTED &&
            ((k = C.intl.string(C.t.bSZklZ)),
            (M = (0, i.jsx)(c.CircleXIcon, {
              size: "md",
              color: l.Z.colors.WHITE.css,
              secondaryColor: l.Z.colors.STATUS_DANGER.css,
            })));
        let y =
          null != N && null != I
            ? C.intl.format(C.t.pRpZCQ, {
                date: a()(x.default.extractTimestamp(I)).format("ll"),
                usernameHook: function () {
                  var e;
                  return (0, i.jsx)(
                    c.Clickable,
                    {
                      className: _.actionedByUser,
                      onClick: () =>
                        (0, d.openUserProfileModal)({
                          userId: N.id,
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
                          null !== (e = null == P ? void 0 : P.nick) &&
                          void 0 !== e
                            ? e
                            : N.username,
                      }),
                    },
                    "username-hook",
                  );
                },
              })
            : a()(j).format("lll");
        return (0, i.jsxs)("div", {
          className: _.container,
          children: [
            (0, i.jsxs)("div", {
              className: _.wrapper,
              children: [
                (0, i.jsxs)("div", {
                  className: _.inline,
                  children: [
                    M,
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)(c.Heading, {
                          variant: "heading-sm/semibold",
                          children: k,
                        }),
                        (0, i.jsx)(c.Text, {
                          className: _.headerSubtext,
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: y,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: _.inline,
                  children: [
                    r.applicationStatus === b.wB.SUBMITTED &&
                      (0, i.jsxs)("div", {
                        className: _.buttons,
                        children: [
                          (0, i.jsx)(c.Tooltip, {
                            text: C.intl.string(C.t.RbIXi4),
                            shouldShow: Z,
                            children: (e) =>
                              (0, i.jsx)(c.Button, {
                                ...e,
                                color: c.Button.Colors.GREEN,
                                submitting: A,
                                disabled: Z,
                                onClick: E,
                                children: C.intl.string(C.t.BzjDQE),
                              }),
                          }),
                          (0, i.jsx)(c.Button, {
                            color: c.Button.Colors.RED,
                            onClick: S,
                            disabled: A,
                            children: C.intl.string(C.t.hDtbs7),
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
                            (0, i.jsx)(e, { ...t, guild: g, user: v });
                        });
                      },
                      className: _.overflow,
                      children: (0, i.jsx)(c.MoreHorizontalIcon, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: _.iconInteractive,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            r.applicationStatus === b.wB.REJECTED &&
              null != r.rejectionReason &&
              (0, i.jsx)("div", {
                className: _.rejectionReason,
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
        o = n(481060),
        l = n(287734),
        c = n(592125),
        s = n(693546),
        d = n(388032);
      function u(e) {
        let { joinRequest: t } = e,
          [n, u] = r.useState(!1),
          m = (0, a.e7)([c.Z], () => c.Z.getChannel(t.interviewChannelId)),
          f = r.useCallback(() => {
            (0, o.showToast)(
              (0, o.createToast)(
                d.intl.string(d.t.R0RpRU),
                o.ToastType.FAILURE,
              ),
            );
          }, []),
          x = r.useCallback(async () => {
            if (null != m) {
              l.default.selectPrivateChannel(m.id);
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
        return (0, i.jsx)(o.Button, {
          color: o.Button.Colors.BRAND,
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
      var r = n(120356),
        a = n.n(r),
        o = n(481060),
        l = n(906732),
        c = n(171368),
        s = n(768581),
        d = n(51144),
        u = n(981631),
        m = n(388032),
        f = n(440026);
      function x(e) {
        let { user: t, joinRequestId: n, className: r } = e,
          { username: x } = t,
          b = s.ZP.getUserAvatarURL(t),
          { analyticsLocations: h } = (0, l.ZP)(),
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
            (0, i.jsx)(o.Anchor, {
              onClick: p,
              children: (0, i.jsx)(o.Avatar, {
                src: b,
                size: o.AvatarSizes.SIZE_80,
                "aria-label": x,
                className: f.avatar,
              }),
            }),
            (0, i.jsx)("div", {
              className: f.username,
              children: (0, i.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                children: d.ZP.getFormattedName(t),
              }),
            }),
            (0, i.jsx)(o.Anchor, {
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
        o = n(665149),
        l = n(51144),
        c = n(246364),
        s = n(666233),
        d = n(50662),
        u = n(395716),
        m = n(673885),
        f = n(981631),
        x = n(388032),
        b = n(376102);
      t.Z = function (e) {
        let {
            guild: t,
            guildJoinRequest: h,
            guildJoinRequestUser: p,
            onClose: C,
          } = e,
          _ = r.useMemo(() => {
            var e;
            return null !== (e = h.formResponses) && void 0 !== e ? e : [];
          }, [h.formResponses]),
          g =
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
            (0, i.jsxs)(o.ZP, {
              toolbar: (0, i.jsx)(o.ZP.Icon, {
                icon: a.XSmallIcon,
                onClick: C,
                tooltip: x.intl.string(x.t.cpT0Cg),
              }),
              children: [
                (0, i.jsx)(o.ZP.Icon, {
                  icon: a.UserIcon,
                  disabled: !0,
                  "aria-label": x.intl.string(x.t.PuCkTU),
                }),
                (0, i.jsx)(a.Heading, {
                  variant: "heading-md/semibold",
                  children: l.ZP.getName(p),
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
                  className: b.container,
                  children: [
                    (0, i.jsx)(m.Z, {
                      user: p,
                      joinRequestId: h.joinRequestId,
                    }),
                    g &&
                      (0, i.jsxs)("div", {
                        className: b.actionButtons,
                        children: [
                          (0, i.jsx)(u.Z, { joinRequest: h }),
                          (0, i.jsx)(a.Button, {
                            color: a.ButtonColors.PRIMARY,
                            onClick: v,
                            children: x.intl.string(x.t["6DpJRU"]),
                          }),
                        ],
                      }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: b.disabledFormRenderer,
                  children: (0, i.jsx)(s.Z, {
                    guildId: t.id,
                    formFields: _,
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
        o = n(594174),
        l = n(63568),
        c = n(246364),
        s = n(489813),
        d = n(186078),
        u = n(73880),
        m = n(196345),
        f = n(707592),
        x = n(476770),
        b = n(483760),
        h = n(465588),
        p = n(644929),
        C = n(814960),
        _ = n(388032);
      t.Z = function (e) {
        let {
            guildId: t,
            formFields: n,
            user: g,
            showRequirements: v = !0,
          } = e,
          j = (0, r.e7)([o.default], () =>
            null != g ? g : o.default.getCurrentUser(),
          ),
          I = (0, l.jS)(t, "DisabledFormRenderer");
        if (null == j) return null;
        let T = I ? x.Ih : s.Ih;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            v &&
              (0, i.jsx)(T, {
                icon: a.ShieldIcon,
                text: _.intl.string(_.t.v2z4c3),
                meetsRequirement: !0,
              }),
            n.map((e, t) =>
              I
                ? (function (e, t) {
                    switch (e.field_type) {
                      case c.QJ.TERMS:
                        return (0, i.jsx)(p.QC, { formField: e }, t);
                      case c.QJ.TEXT_INPUT:
                        return (0, i.jsx)(C.YJ, { formField: e }, t);
                      case c.QJ.PARAGRAPH:
                        return (0, i.jsx)(h.jn, { formField: e }, t);
                      case c.QJ.MULTIPLE_CHOICE:
                        return (0, i.jsx)(b.QH, { formField: e }, t);
                    }
                  })(e, t)
                : (function (e, t) {
                    switch (e.field_type) {
                      case c.QJ.TERMS:
                        return (0, i.jsx)(m.QC, { formField: e }, t);
                      case c.QJ.TEXT_INPUT:
                        return (0, i.jsx)(f.YJ, { formField: e }, t);
                      case c.QJ.PARAGRAPH:
                        return (0, i.jsx)(u.jn, { formField: e }, t);
                      case c.QJ.MULTIPLE_CHOICE:
                        return (0, i.jsx)(d.QH, { formField: e }, t);
                    }
                  })(e, t),
            ),
          ],
        });
      };
    },
    189667: function (e, t, n) {
      e.exports = {
        editCard: "editCard_cd99d3",
        toggled: "toggled_cd99d3",
        noBackground: "noBackground_cd99d3",
        innerHeader: "innerHeader_cd99d3",
        contentExpandContainer: "contentExpandContainer_cd99d3",
        showOverflow: "showOverflow_cd99d3",
      };
    },
    921397: function (e, t, n) {
      e.exports = {
        content: "content_ebb939",
        sidebar: "sidebar_ebb939",
        sidebarSeparator: "sidebarSeparator_ebb939",
      };
    },
    898517: function (e, t, n) {
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
    954640: function (e, t, n) {
      e.exports = {
        title: "title_c768e8",
        divider: "divider_c768e8",
        container: "container_c768e8",
        measurements: "measurements_c768e8",
        more: "more_c768e8",
        selected: "selected_c768e8",
      };
    },
    163488: function (e, t, n) {
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
    852974: function (e, t, n) {
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
    440026: function (e, t, n) {
      e.exports = {
        container: "container_a84246",
        avatar: "avatar_a84246",
        username: "username_a84246",
      };
    },
    376102: function (e, t, n) {
      e.exports = {
        container: "container_cc034a",
        disabledFormRenderer: "disabledFormRenderer_cc034a",
        actionButtons: "actionButtons_cc034a",
      };
    },
    4969: function (e, t, n) {
      e.exports = {
        spacingContainer: "spacingContainer_ceff93",
        formFieldContainer: "formFieldContainer_ceff93",
        actionButtonsContainer: "actionButtonsContainer_ceff93",
        compact: "compact_ceff93",
        canRemove: "canRemove_ceff93",
        actionButton: "actionButton_ceff93",
        backgroundContainer: "backgroundContainer_ceff93",
        containerPadding: "containerPadding_ceff93",
        compactContainer: "compactContainer_ceff93",
        compactTitle: "compactTitle_ceff93",
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
        typeTag: "typeTag_ceff93",
      };
    },
    603163: function (e, t, n) {
      e.exports = { container: "container_d1d059", icon: "icon_d1d059" };
    },
    831826: function (e, t, n) {
      e.exports = { menu: "menu_da027b" };
    },
    711677: function (e, t, n) {
      e.exports = { addQuestionsContainer: "addQuestionsContainer_f93856" };
    },
    246691: function (e, t, n) {
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
    912698: function (e, t, n) {
      e.exports = {
        previewAndEnable: "previewAndEnable_ac6678",
        previewIcon: "previewIcon_ac6678",
        rulesScreeningItemsNoBorder: "rulesScreeningItemsNoBorder_ac6678",
        pillRow: "pillRow_ac6678",
      };
    },
  },
]);
//# sourceMappingURL=27027b3452458ee0c64f.js.map
