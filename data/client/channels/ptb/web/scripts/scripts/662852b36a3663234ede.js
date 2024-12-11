"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82450"],
  {
    985159: function (e, t, n) {
      n.d(t, {
        z: function () {
          return o;
        },
      });
      var i = n(442837),
        r = n(826581);
      function o(e) {
        let { guildId: t } = e;
        return (0, i.e7)([r.Z], () => r.Z.getSelectedApplicationTab(t), [t]);
      }
    },
    571728: function (e, t, n) {
      n.d(t, {
        A: function () {
          return o;
        },
      });
      var i = n(442837),
        r = n(826581);
      function o(e) {
        let { guildId: t } = e;
        return (0, i.e7)(
          [r.Z],
          () => r.Z.getSubmittedGuildJoinRequestTotal(t),
          [t],
        );
      }
    },
    998420: function (e, t, n) {
      n.r(t);
      var i = n(200651),
        r = n(192379),
        o = n(442837),
        a = n(100527),
        l = n(906732),
        c = n(252618),
        s = n(598077),
        d = n(430824),
        u = n(693546),
        f = n(863249),
        b = n(328977),
        _ = n(208257),
        m = n(853486),
        p = n(388032),
        C = n(251806);
      t.default = function (e) {
        let { guildId: t } = e,
          { analyticsLocations: n } = (0, l.ZP)(
            a.Z.GUILD_MEMBER_APPLICATION_REVIEW,
          ),
          x = (0, b.L)({ guildId: t }),
          { user: v } = null != x ? x : {},
          I = r.useMemo(() => (null != v ? new s.Z(v) : null), [v]),
          h = (0, o.e7)([d.Z], () => d.Z.getGuild(t), [t]);
        (0, c.Tt)({
          subsection: p.intl.string(p.t.nqrK8f),
          location: null == h ? void 0 : h.name,
        }),
          r.useEffect(() => {
            f.ZP.fetchVerificationForm(t);
          }, [t]);
        let g = null != x && null != h && null != I;
        return (0, i.jsxs)(l.Gt, {
          value: n,
          children: [
            (0, i.jsx)("div", {
              className: C.content,
              children: (0, i.jsx)(_.Z, { guildId: t, isSidebarOpen: g }),
            }),
            g &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", { className: C.sidebarSeparator }),
                  (0, i.jsx)("section", {
                    className: C.sidebar,
                    children: (0, i.jsx)(m.Z, {
                      guild: h,
                      guildJoinRequest: x,
                      guildJoinRequestUser: I,
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
        o = n(481060),
        a = n(246364),
        l = n(388032);
      t.Z = function (e) {
        let { className: t, sortOrder: n, onSortChange: c } = e,
          s = r.useMemo(
            () => [
              { value: a.Nw.TIMESTAMP_DESC, label: l.intl.string(l.t.eoXe0t) },
              { value: a.Nw.TIMESTAMP_ASC, label: l.intl.string(l.t.mmeWUF) },
            ],
            [],
          );
        return (0, i.jsx)(o.SingleSelect, {
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
        o = n(442837),
        a = n(481060),
        l = n(970606),
        c = n(122051),
        s = n(650774),
        d = n(430824),
        u = n(496675),
        f = n(693546),
        b = n(246364),
        _ = n(98493),
        m = n(985159),
        p = n(328977),
        C = n(412222),
        x = n(223312),
        v = n(571728),
        I = n(572940),
        h = n(80487),
        g = n(146463),
        T = n(981631),
        E = n(388032),
        R = n(991154);
      function S(e) {
        let { guild: t } = e;
        return (0, i.jsxs)("div", {
          className: R.setupHeader,
          children: [
            (0, i.jsxs)("div", {
              className: R.previewContainer,
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
                  innerClassName: R.previewButton,
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
              className: R.description,
              variant: "text-sm/medium",
              color: "header-secondary",
              children: E.intl.format(E.t.xpB4Ym, { guildName: t.name }),
            }),
          ],
        });
      }
      function j(e) {
        var t, n;
        let { guildId: j, isSidebarOpen: A } = e,
          w = r.useRef(null),
          [B, P] = r.useState((0, m.z)({ guildId: j })),
          N = (0, C.C)({ guildId: j }),
          k = (0, p.L)({ guildId: j }),
          M = null !== (t = (0, v.A)({ guildId: j })) && void 0 !== t ? t : 0,
          { guildJoinRequests: Z } = (0, x.j)({
            guildId: j,
            applicationStatus: "REVIEW_APPLICATION" === B ? b.wB.SUBMITTED : B,
            sortOrder: N,
          }),
          F = (0, o.e7)([d.Z], () => d.Z.getGuild(j), [j]),
          y = (0, o.e7)([s.Z], () => s.Z.getMemberCount(j)),
          L = null != F && (null != y ? y : 0) >= F.maxMembers,
          { fetchNextPage: O } = (0, _.m)({ guildId: j, guildJoinRequests: Z }),
          W = (0, o.e7)([u.Z], () => u.Z.can(T.Plq.KICK_MEMBERS, F)),
          H = r.useRef(!1);
        !H.current &&
          ((H.current = !0),
          O(N, "REVIEW_APPLICATION" === B ? b.wB.SUBMITTED : B)),
          r.useEffect(() => {
            !W && P("REVIEW_APPLICATION");
          }, [W]);
        let V = r.useRef(!1);
        r.useEffect(() => {
          V.current = !0;
        }, [N, B]),
          r.useEffect(() => {
            if (V.current && 0 !== Z.length && "REVIEW_APPLICATION" !== B) {
              var e;
              (V.current = !1),
                f.Z.setSelectedGuildJoinRequest(j, Z[0]),
                null === (e = w.current) || void 0 === e || e.scrollToTop();
            }
          }, [j, Z, k, B]);
        let D = r.useCallback(
            async (e) => {
              if ("REVIEW_APPLICATION" !== B)
                N !== e && (f.Z.setSelectedSortOrder(j, e), await O(e, B));
            },
            [B, N, j, O],
          ),
          U = r.useCallback(
            async (e) => {
              if (B !== e) {
                if (
                  (P(e),
                  (0, l.Q2)({
                    guildId: j,
                    source: T.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    tab: e,
                  }),
                  f.Z.setSelectedGuildJoinRequest(j, null),
                  "REVIEW_APPLICATION" !== e)
                )
                  f.Z.setSelectedApplicationTab(j, e), await O(N, e);
              }
            },
            [B, N, j, O],
          ),
          G = r.useCallback(async () => {
            var e;
            if ("REVIEW_APPLICATION" === B) return;
            let t =
              null === (e = w.current) || void 0 === e
                ? void 0
                : e.getScrollerState();
            if (null != t)
              t.scrollHeight - t.scrollTop - t.offsetHeight < 200 &&
                (await O(N, B));
          }, [B, N, O]),
          q =
            null !== (n = null == F ? void 0 : F.hasFeature(T.oNc.CLAN)) &&
            void 0 !== n &&
            n;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(h.Z, {
              currentTab: B,
              onTabItemSelect: U,
              pendingGuildJoinRequestsTotal: M,
              showSetupTab: q,
              canActionJoinRequests: W,
              isSidebarOpen: A,
            }),
            (0, i.jsx)("div", {
              className: R.content,
              children:
                "REVIEW_APPLICATION" === B
                  ? null != F
                    ? (0, i.jsx)(a.ScrollerThin, {
                        children: (0, i.jsxs)("div", {
                          className: R.scrollerContent,
                          children: [
                            (0, i.jsx)(S, { guild: F }),
                            (0, i.jsx)(c.Z, { guild: F, isClanContext: !0 }),
                          ],
                        }),
                      })
                    : null
                  : (0, i.jsxs)(i.Fragment, {
                      children: [
                        W &&
                          L &&
                          (0, i.jsx)(a.HelpMessage, {
                            messageType: a.HelpMessageTypes.WARNING,
                            textVariant: "text-sm/medium",
                            className: R.headerWarning,
                            children: E.intl.format(E.t.o3mLzM, {
                              count: null == F ? void 0 : F.maxMembers,
                            }),
                          }),
                        (0, i.jsx)("div", {
                          className: R.listControls,
                          children: (0, i.jsx)(I.Z, {
                            className: R.sortSelect,
                            sortOrder: N,
                            onSortChange: D,
                          }),
                        }),
                        (0, i.jsx)(a.Text, {
                          className: R.description,
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: E.intl.string(E.t.OCorGR),
                        }),
                        (0, i.jsx)(g.Z, {
                          applicationStatus: B,
                          guildJoinRequests: Z,
                          guildId: j,
                          onScroll: G,
                          listRef: w,
                          atMaxMemberCapacity: L,
                        }),
                      ],
                    }),
            }),
          ],
        });
      }
      t.Z = r.memo(function (e) {
        let { guildId: t, isSidebarOpen: n } = e;
        return (0, i.jsx)(j, { guildId: t, isSidebarOpen: n });
      });
    },
    80487: function (e, t, n) {
      n(653041), n(47120);
      var i = n(200651),
        r = n(192379),
        o = n(120356),
        a = n.n(o),
        l = n(21260),
        c = n(780384),
        s = n(481060),
        d = n(410030),
        u = n(984370),
        f = n(785195),
        b = n(889711),
        _ = n(246364),
        m = n(388032),
        p = n(315651);
      let C = (e) => {
          let { tabs: t, selectedTab: n, onTabSelect: r, onClose: o } = e;
          return (0, i.jsx)(s.Menu, {
            navId: "member-applications-tabs-overflow-menu",
            "aria-label": m.intl.string(m.t.riPnr6),
            hideScroller: !0,
            onClose: o,
            onSelect: o,
            children: (0, i.jsx)(
              s.MenuGroup,
              {
                children: t.map((e) => {
                  let { id: t, label: o } = e;
                  return (0, i.jsx)(
                    s.MenuItem,
                    {
                      id: t,
                      label: o,
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
        x = (e, t, n) => {
          let i = [];
          return (
            e &&
              i.push({
                id: "REVIEW_APPLICATION",
                label: m.intl.string(m.t.fSGLR0),
              }),
            t &&
              (i.push({
                id: _.wB.SUBMITTED,
                label:
                  0 === n
                    ? m.intl.string(m.t["4eQVBA"])
                    : m.intl.formatToPlainString(m.t["Wo+zLy"], { count: n }),
              }),
              i.push({ id: _.wB.APPROVED, label: m.intl.string(m.t.aURgY2) }),
              i.push({ id: _.wB.REJECTED, label: m.intl.string(m.t.bSZklZ) })),
            i
          );
        };
      function v(e) {
        let { onTabSelect: t, tabs: n, selectedTab: o } = e,
          l = (0, d.ZP)(),
          u = (0, c.wj)(l),
          f = r.useMemo(
            () =>
              null !=
              n.find((e) => {
                let { id: t } = e;
                return t === o;
              }),
            [o, n],
          ),
          b = f ? "header-primary" : u ? "text-muted" : "header-primary",
          _ = f
            ? s.tokens.colors.HEADER_PRIMARY
            : u
              ? s.tokens.colors.TEXT_MUTED
              : s.tokens.colors.HEADER_PRIMARY;
        return (0, i.jsx)(s.Popout, {
          renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, i.jsx)(C, {
              selectedTab: o,
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
              className: a()(p.more, { [p.selected]: f }),
              "aria-label": m.intl.string(m.t.UKOtz8),
              children: [
                (0, i.jsx)(s.Text, {
                  variant: "text-md/medium",
                  color: b,
                  children: m.intl.string(m.t.UKOtz8),
                }),
                n
                  ? (0, i.jsx)(s.ChevronSmallUpIcon, { size: "sm", color: _ })
                  : (0, i.jsx)(s.ChevronSmallDownIcon, {
                      size: "sm",
                      color: _,
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
            onTabItemSelect: o,
            showSetupTab: a,
            canActionJoinRequests: c,
            isSidebarOpen: d,
          } = e,
          [_, C] = r.useState(0),
          I = r.useRef(null),
          h = r.useRef(_),
          g = x(a, c, t),
          {
            lastVisibleIndex: T,
            onItemLayout: E,
            overflowItemsRef: R,
          } = (0, l.zP)({
            items: g,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: _ - 400,
          }),
          S = r.useMemo(() => g.slice(0, T + 1), [T, g]),
          j = r.useMemo(() => g.slice(T + 1), [T, g]),
          A = r.useCallback(() => {
            var e;
            let t =
              null === (e = I.current) || void 0 === e
                ? void 0
                : e.getBoundingClientRect();
            null != t &&
              h.current !== t.width &&
              (C(t.width), (h.current = t.width));
          }, []);
        return (
          r.useEffect(() => {
            let e = (0, b.pP)(A);
            return (
              (0, b.YP)(e, document.body), () => (0, b.UC)(e, document.body)
            );
          }, [A]),
          r.useEffect(() => {
            A();
          }, [A, d]),
          (0, i.jsx)("div", {
            ref: I,
            children: (0, i.jsxs)(u.Z, {
              hideSearch: !0,
              toolbar: (0, i.jsx)("div", {}),
              children: [
                (0, i.jsx)(u.Z.Icon, {
                  icon: (0, s.makeIconCompat)(f.Z),
                  disabled: !0,
                  "aria-label": m.intl.string(m.t.tcvVXF),
                }),
                (0, i.jsx)(u.Z.Title, {
                  className: p.title,
                  children: m.intl.string(m.t.tcvVXF),
                }),
                (0, i.jsx)(u.Z.Divider, { className: p.divider }),
                (0, i.jsxs)("div", {
                  className: p.container,
                  children: [
                    (0, i.jsxs)("div", {
                      className: p.measurements,
                      children: [
                        g.map((e, t) =>
                          (0, i.jsx)(
                            l.AJ,
                            {
                              index: t,
                              onItemLayout: E,
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
                          children: (0, i.jsx)(v, {
                            tabs: j,
                            onTabSelect: o,
                            selectedTab: n,
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(s.TabBar, {
                      "aria-label": m.intl.string(m.t.TdEu5e),
                      selectedItem: n,
                      type: "top-pill",
                      onItemSelect: o,
                      children: [
                        S.map((e) =>
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
                        0 !== j.length
                          ? (0, i.jsx)(v, {
                              tabs: j,
                              onTabSelect: o,
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
    872939: function (e, t, n) {
      e.exports = {
        editCard: "editCard_cd99d3",
        toggled: "toggled_cd99d3",
        noBackground: "noBackground_cd99d3",
        innerHeader: "innerHeader_cd99d3",
        contentExpandContainer: "contentExpandContainer_cd99d3",
        showOverflow: "showOverflow_cd99d3",
      };
    },
    251806: function (e, t, n) {
      e.exports = {
        content: "content_ebb939",
        sidebar: "sidebar_ebb939",
        sidebarSeparator: "sidebarSeparator_ebb939",
      };
    },
    991154: function (e, t, n) {
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
    315651: function (e, t, n) {
      e.exports = {
        title: "title_c768e8",
        divider: "divider_c768e8",
        container: "container_c768e8",
        measurements: "measurements_c768e8",
        more: "more_c768e8",
        selected: "selected_c768e8",
      };
    },
    372819: function (e, t, n) {
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
    364068: function (e, t, n) {
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
    64371: function (e, t, n) {
      e.exports = {
        container: "container_a84246",
        avatar: "avatar_a84246",
        username: "username_a84246",
      };
    },
    337424: function (e, t, n) {
      e.exports = {
        container: "container_cc034a",
        disabledFormRenderer: "disabledFormRenderer_cc034a",
        actionButtons: "actionButtons_cc034a",
      };
    },
    31619: function (e, t, n) {
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
    117225: function (e, t, n) {
      e.exports = {
        container: "container_da027b",
        icon: "icon_da027b",
        menu: "menu_da027b",
      };
    },
    232203: function (e, t, n) {
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
    713960: function (e, t, n) {
      e.exports = {
        previewAndEnable: "previewAndEnable_ac6678",
        previewIcon: "previewIcon_ac6678",
        rulesScreeningItemsNoBorder: "rulesScreeningItemsNoBorder_ac6678",
        pillRow: "pillRow_ac6678",
      };
    },
  },
]);
//# sourceMappingURL=662852b36a3663234ede.js.map
