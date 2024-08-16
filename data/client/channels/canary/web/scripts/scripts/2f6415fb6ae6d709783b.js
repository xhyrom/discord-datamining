"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60493"],
  {
    63190: function (e) {
      e.exports = "/assets/9340da265d74c18a4603.svg";
    },
    102219: function (e) {
      e.exports = "/assets/0fbecc08c2f996a92e11.svg";
    },
    931057: function (e) {
      e.exports = "/assets/daf7d60c92c10cc8359c.svg";
    },
    213557: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return B;
        },
      }),
        l(653041);
      var a = l(735250),
        r = l(470079),
        i = l(442837),
        t = l(481060),
        s = l(239091),
        d = l(561472),
        o = l(36311),
        c = l(367907),
        u = l(188471),
        h = l(541716),
        m = l(526120),
        g = l(563534),
        C = l(736052),
        x = l(665149),
        f = l(442336),
        I = l(910611),
        Z = l(41776),
        _ = l(703656),
        v = l(6025),
        p = l(592125),
        N = l(703558),
        j = l(731290),
        b = l(430824),
        E = l(375954),
        M = l(594174),
        A = l(933557),
        S = l(287746),
        T = l(981631),
        R = l(689938),
        P = l(225301);
      function B(e) {
        let {
            channelId: n,
            baseChannelId: B,
            channelViewSource: y = "Split View",
            isResourceChannelView: H,
          } = e,
          k = (0, i.e7)([p.Z], () => p.Z.getChannel(n)),
          L = (0, i.e7)([b.Z], () =>
            b.Z.getGuild(null == k ? void 0 : k.getGuildId()),
          ),
          w = (0, i.e7)([M.default], () => M.default.getCurrentUser()),
          D = (0, i.e7)([j.Z], () =>
            j.Z.didAgree(null == k ? void 0 : k.guild_id),
          ),
          O = (null == w ? void 0 : w.nsfwAllowed) === !0,
          U = (0, A.ZP)(k),
          G = (0, i.e7)(
            [Z.Z],
            () => (null == L ? void 0 : L.id) != null && Z.Z.isLurking(L.id),
            [L],
          ),
          W = (0, C.Z)(n),
          z = (0, i.e7)([g.Z], () => {
            var e;
            return null ===
              (e = g.Z.getResourceForChannel(null == L ? void 0 : L.id, n)) ||
              void 0 === e
              ? void 0
              : e.title;
          }),
          F = r.useRef(!1);
        if (
          (r.useEffect(() => {
            null != k &&
              !F.current &&
              ((F.current = !0),
              (0, c.yw)(T.rMx.CHANNEL_OPENED, {
                ...(0, c.$H)(k.id),
                channel_view: y,
              }),
              (0, u.a)(T.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: k.id }));
          }, [k, y]),
          null == k || null == L)
        )
          return null;
        let V = [];
        return (!G && V.push((0, a.jsx)(f.Z, { channel: k }, "notifications")),
        V.push(
          (0, a.jsx)(
            x.ZP.Icon,
            {
              icon: t.XSmallIcon,
              tooltip: R.Z.Messages.CLOSE,
              onClick: () => v.Z.closeChannelSidebar(B),
            },
            "close",
          ),
        ),
        !k.isNSFW() || (O && D))
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(d.Z, { channel: k, draftType: N.d.ChannelMessage }),
                (0, a.jsx)(x.ZP, {
                  toolbar: V,
                  "aria-label": R.Z.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
                  children: (0, I.ud)({
                    channel: k,
                    channelName: W ? z : U,
                    guild: L,
                    inSidebar: !0,
                    handleContextMenu: (e) => {
                      (0, s.jW)(e, async () => {
                        let { default: e } = await l
                          .e("24783")
                          .then(l.bind(l, 439635));
                        return (n) =>
                          (0, a.jsx)(e, { ...n, channel: k, guild: L });
                      });
                    },
                    handleClick: () => {
                      let e = E.Z.getMessages(k.id);
                      if (H) {
                        (0, _.uL)(T.Z5c.CHANNEL(k.guild_id, k.id)),
                          (0, m.C3)(k.guild_id, null);
                        return;
                      }
                      (0, _.XU)(k.guild_id, k.id, e.jumpTargetId);
                    },
                  }),
                }),
                (0, a.jsx)("div", {
                  className: P.chat,
                  children: (0, a.jsx)(
                    S.Z,
                    { channel: k, guild: L, chatInputType: h.I.SIDEBAR },
                    n,
                  ),
                }),
              ],
            })
          : (0, a.jsx)(o.Z, { guild: L });
      }
    },
    644080: function (e, n, l) {
      var a = l(735250),
        r = l(470079),
        i = l(120356),
        t = l.n(i),
        s = l(442837),
        d = l(692547),
        o = l(481060),
        c = l(410030),
        u = l(565138),
        h = l(523751),
        m = l(637853),
        g = l(434404),
        C = l(159300),
        x = l(496675),
        f = l(709586),
        I = l(768581),
        Z = l(981631),
        _ = l(689938),
        v = l(672256),
        p = l(63190),
        N = l(102219);
      let j = (e) => {
        let n = r.useMemo(
          () =>
            null == e
              ? null
              : I.ZP.getGuildHomeHeaderURL({
                  id: e.id,
                  homeHeader: e.homeHeader,
                }),
          [e],
        );
        return {
          homeHeaderImage: n,
          isHomeHeaderImageSet: null != n,
          homeHeaderScroll: null != n ? 200 : 0,
        };
      };
      function b(e) {
        let { guild: n } = e,
          l = () => {
            g.Z.open(n.id, Z.pNK.ONBOARDING, void 0, Z.KsC.SERVER_GUIDE);
          };
        return n.hasFeature(Z.oNc.BANNER)
          ? (0, a.jsxs)(o.Button, {
              className: v.editButton,
              innerClassName: v.editButtonInner,
              type: "button",
              size: o.Button.Sizes.MEDIUM,
              color: o.Button.Colors.BRAND,
              onClick: l,
              children: [
                (0, a.jsx)(o.ImagePlusIcon, {
                  size: "xs",
                  color: d.Z.unsafe_rawColors.WHITE_500.css,
                }),
                _.Z.Messages.EDIT_IMAGE,
              ],
            })
          : (0, a.jsxs)(o.ShinyButton, {
              color: o.Button.Colors.GREEN,
              className: v.editButton,
              innerClassName: v.editButtonInner,
              onClick: l,
              children: [
                (0, a.jsx)(f.Z, { height: 16, width: 16 }),
                _.Z.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA,
              ],
            });
      }
      let E = r.memo(function (e) {
        let { guild: n, titleClassName: r } = e,
          { homeHeaderImage: i, isHomeHeaderImageSet: d } = j(n),
          g = (0, m.b$)(n.id),
          f = (0, s.e7)([x.Z], () => (0, C.b)(x.Z, n)),
          I = (0, c.ZP)();
        return (0, a.jsxs)("div", {
          className: v.header,
          children: [
            (0, a.jsxs)("div", {
              className: v.headerArtWrapper,
              children: [
                (0, a.jsx)("div", {
                  className: t()(v.headerArt, { [v.headerArtPlaceholder]: !d }),
                  style: {
                    backgroundImage: "url(".concat(
                      d ? i : "dark" === I ? p : N,
                      ")",
                    ),
                  },
                }),
                g && (0, a.jsx)(b, { guild: n }),
              ],
            }),
            (0, a.jsx)("div", {
              className: v.titleWrapper,
              children: (0, a.jsxs)("div", {
                className: r,
                children: [
                  (0, a.jsx)(u.Z, {
                    className: v.headerIcon,
                    guild: n,
                    size: u.Z.Sizes.XLARGE,
                    active: !0,
                  }),
                  (0, a.jsx)(o.HeadingLevel, {
                    children: (0, a.jsxs)("div", {
                      className: v.headerName,
                      children: [
                        (0, a.jsx)(o.Heading, {
                          className: v.headerName,
                          variant: "heading-xxl/bold",
                          children: n.name,
                        }),
                        (0, a.jsx)(h.Z, {
                          size: 24,
                          guild: n,
                          tooltipPosition: "bottom",
                          tooltipColor: o.Tooltip.Colors.PRIMARY,
                        }),
                        f &&
                          (0, a.jsx)(o.Button, {
                            className: v.inviteButton,
                            size: o.Button.Sizes.MEDIUM,
                            color: o.Button.Colors.PRIMARY,
                            onClick: () =>
                              (0, o.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([
                                  l.e("7654"),
                                  l.e("66633"),
                                ]).then(l.bind(l, 560114));
                                return (l) =>
                                  (0, a.jsx)(e, {
                                    ...l,
                                    guild: n,
                                    source: Z.t4x.GUILD_HOME,
                                  });
                              }),
                            children: _.Z.Messages.INSTANT_INVITE,
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      });
      n.Z = E;
    },
    231588: function (e, n, l) {
      l.r(n);
      var a = l(735250),
        r = l(470079),
        i = l(442837),
        t = l(749210),
        s = l(112724),
        d = l(923029),
        o = l(353926),
        c = l(931261),
        u = l(333323),
        h = l(430824);
      let m = (0, s.Z)(u.Z);
      n.default = function (e) {
        let { guildId: n } = e,
          l = (0, i.e7)([h.Z], () => h.Z.getGuild(n), [n]),
          s = (0, i.e7)([o.Z], () => o.Z.hasLoadedExperiments),
          u = (0, c.g)(n);
        return (r.useEffect(() => {
          if (!!s) {
            if (!u) {
              t.Z.escapeToDefaultChannel(n);
              return;
            }
          }
        }, [n, s, u]),
        null != l && u)
          ? (0, a.jsx)(m, { guild: l })
          : (0, a.jsx)(d.Z, { channelId: void 0 });
      };
    },
    689981: function (e, n, l) {
      function a(e) {
        var n, l;
        if (null == e) return null;
        if ((null === (n = e.content) || void 0 === n ? void 0 : n.length) > 0)
          return e.content;
        if ((null === (l = e.embeds) || void 0 === l ? void 0 : l.length) > 0) {
          for (let n of e.embeds)
            if (null != n.rawDescription && n.rawDescription.length > 0)
              return n.rawDescription;
        }
        return null;
      }
      l.d(n, {
        Z: function () {
          return a;
        },
      }),
        l(47120);
    },
    825334: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return t;
        },
      });
      var a = l(399606),
        r = l(592125),
        i = l(563534);
      function t(e) {
        return (0, a.Wu)([i.Z, r.Z], () =>
          i.Z.getResourceChannels(e).filter(
            (e) => null != r.Z.getChannel(e.channelId),
          ),
        );
      }
    },
    404488: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return u;
        },
        q: function () {
          return c;
        },
      });
      var a = l(735250);
      l(470079);
      var r = l(442837),
        i = l(325708),
        t = l(213557),
        s = l(433355),
        d = l(981631),
        o = l(176505);
      let c = 656;
      function u(e) {
        let { pageWidth: n, onSidebarResize: l } = e,
          u = (0, r.e7)([s.ZP], () => s.ZP.getSidebarState(o.oC.GUILD_HOME));
        if (null == u || null == u.channelId) return null;
        let h = n - d.PrS - c;
        return (0, a.jsx)(i.Z, {
          sidebarType: i.y.HomeSidebar,
          maxWidth: h,
          onWidthChange: l,
          children: (0, a.jsx)(t.Z, {
            channelId: u.channelId,
            baseChannelId: o.oC.GUILD_HOME,
            channelViewSource: "Home View",
            isResourceChannelView: !0,
          }),
        });
      }
    },
    333323: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return B;
        },
      }),
        l(47120);
      var a = l(735250),
        r = l(470079),
        i = l(120356),
        t = l.n(i),
        s = l(399606),
        d = l(481060),
        o = l(749210),
        c = l(131388),
        u = l(367907),
        h = l(644080),
        m = l(984370),
        g = l(6025),
        C = l(433355),
        x = l(626135),
        f = l(526120),
        I = l(563534),
        Z = l(846121),
        _ = l(460347),
        v = l(404488),
        p = l(605276),
        N = l(869764),
        j = l(919318),
        b = l(150512),
        E = l(981631),
        M = l(176505),
        A = l(689938),
        S = l(523460),
        T = l(625032);
      let R = v.q + 300 + 64,
        P = r.memo(function (e) {
          let { guild: n } = e;
          return (0, a.jsxs)(m.Z, {
            channelId: M.oC.GUILD_HOME,
            guildId: n.id,
            className: t()(S.title, S.background),
            innerClassname: S.headerBarInner,
            children: [
              (0, a.jsx)(m.Z.Icon, { icon: d.SignPostIcon, "aria-hidden": !0 }),
              (0, a.jsxs)(m.Z.Title, {
                children: [
                  (0, a.jsx)(d.HiddenVisually, { children: n.name }),
                  A.Z.Messages.SERVER_GUIDE,
                ],
              }),
            ],
          });
        });
      function B(e) {
        var n, l;
        let { guild: i, width: m } = e,
          A = (0, s.e7)([C.ZP], () => C.ZP.getSection(M.oC.GUILD_HOME)),
          [B, y] = r.useState(!1),
          [H, k] = r.useState(E.$Y6),
          L = A === E.ULH.SIDEBAR_CHAT,
          w = (0, d.useFocusJumpSection)(),
          D = (0, s.e7)([I.Z], () => I.Z.getSettings(i.id)),
          O = null == D ? void 0 : D.welcomeMessage,
          U = (0, _.Z)(i.id),
          G =
            !U &&
            (null !==
              (l =
                null == D
                  ? void 0
                  : null === (n = D.resourceChannels) || void 0 === n
                    ? void 0
                    : n.length) && void 0 !== l
              ? l
              : 0) === 0,
          W = (0, c.Z)("(max-width: 1300px)"),
          z = m - E.PrS - H,
          F = (L && z < R) || W || G;
        return (r.useEffect(() => {
          if (D === I.P) (0, f.cP)(i.id);
          else if (null != D) {
            var e, n, l, a, r;
            x.default.track(E.rMx.SERVER_GUIDE_VIEWED, {
              ...(0, u.hH)(i.id),
              num_member_actions:
                null !==
                  (l =
                    null === (e = D.newMemberActions) || void 0 === e
                      ? void 0
                      : e.length) && void 0 !== l
                  ? l
                  : 0,
              num_member_actions_completed: Object.keys(
                null !== (a = Z.Z.getCompletedActions(i.id)) && void 0 !== a
                  ? a
                  : {},
              ).length,
              num_resource_channels:
                null !==
                  (r =
                    null === (n = D.resourceChannels) || void 0 === n
                      ? void 0
                      : n.length) && void 0 !== r
                  ? r
                  : 0,
            });
          }
        }, [i.id, D]),
        r.useEffect(
          () => () => {
            g.Z.closeChannelSidebar(M.oC.GUILD_HOME);
          },
          [],
        ),
        r.useEffect(() => {
          G && D !== I.P && o.Z.escapeToDefaultChannel(i.id);
        }, [i.id, G, D]),
        G)
          ? null
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: t()(T.chat, S.background, {
                    [T.threadSidebarOpen]: L,
                    [T.threadSidebarFloating]: L && B,
                  }),
                  children: [
                    (0, a.jsx)(P, { guild: i }),
                    (0, a.jsx)(d.AdvancedScrollerAuto, {
                      ...w,
                      children: (0, a.jsxs)("div", {
                        className: t()(S.homeContainer, {
                          [S.homeContainerCollapsed]: F,
                        }),
                        children: [
                          (0, a.jsx)("div", {
                            className: S.maxWidthWrapper,
                            children: (0, a.jsx)(h.Z, {
                              guild: i,
                              titleClassName: W ? S.emptyHeaderTitle : void 0,
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: t()(S.homeContent, S.maxWidthWrapper),
                            children: [
                              (0, a.jsxs)("div", {
                                className: S.mainContent,
                                children: [
                                  U &&
                                    (0, a.jsx)(b.Z, {
                                      guildId: i.id,
                                      welcomeMessage: O,
                                    }),
                                  U && (0, a.jsx)(N.Z, { guildId: i.id }),
                                  !U || F
                                    ? (0, a.jsx)(j.ZP, {
                                        guild: i,
                                        isNewMember: U,
                                      })
                                    : null,
                                ],
                              }),
                              F
                                ? null
                                : (0, a.jsx)(p.Z, { guild: i, isNewMember: U }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                L
                  ? (0, a.jsx)(v.Z, {
                      pageWidth: m,
                      onSidebarResize: (e, n) => {
                        y(n), k(e);
                      },
                    })
                  : null,
              ],
            });
      }
    },
    605276: function (e, n, l) {
      var a = l(735250),
        r = l(470079),
        i = l(399606),
        t = l(481060),
        s = l(904245),
        d = l(368844),
        o = l(249842),
        c = l(838367),
        u = l(6025),
        h = l(592125),
        m = l(375954),
        g = l(496675),
        C = l(768581),
        x = l(526120),
        f = l(825334),
        I = l(981631),
        Z = l(689938),
        _ = l(523460);
      let v = r.memo(function (e) {
          let { guild: n } = e,
            l = (0, i.e7)([c.Z], () => c.Z.getGuild(n.id), [n]);
          return (
            r.useEffect(() => {
              null == l && (0, o.P)(n.id);
            }, [n.id, l]),
            (0, a.jsx)("div", {
              className: _.sidebarCardWrapper,
              children: (0, a.jsxs)("div", {
                className: _.sidebarCard,
                children: [
                  (0, a.jsx)(t.Heading, {
                    className: _.sidebarCardHeader,
                    variant: "heading-md/bold",
                    color: "header-primary",
                    children: Z.Z.Messages.GUILD_HOME_ABOUT,
                  }),
                  (0, a.jsx)(t.Text, {
                    className: _.guildDescription,
                    variant: "text-md/normal",
                    color: "text-normal",
                    children: n.description,
                  }),
                  (0, a.jsx)("div", {
                    className: _.guildInfo,
                    children:
                      (null == l ? void 0 : l.memberCount) != null &&
                      (null == l ? void 0 : l.presenceCount) != null &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("div", { className: _.dotOnline }),
                          (0, a.jsx)(t.Text, {
                            className: _.guildInfoText,
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children:
                              Z.Z.Messages.GUILD_ONBOARDING_HOME_GUILD_MEMBERS_RATIO.format(
                                {
                                  online: null == l ? void 0 : l.presenceCount,
                                  total: null == l ? void 0 : l.memberCount,
                                },
                              ),
                          }),
                        ],
                      }),
                  }),
                ],
              }),
            })
          );
        }),
        p = (e) => {
          let { channelId: n, title: l, icon: o } = e,
            c = (0, i.e7)([h.Z], () => h.Z.getChannel(n)),
            f = (0, i.e7)([m.Z], () => m.Z.getMessages(n)),
            Z = (0, i.e7)([g.Z], () => g.Z.can(I.Plq.VIEW_CHANNEL, c)),
            v = f.first(),
            p = (0, d.zy)(v, !1),
            N = (null == p ? void 0 : p.length) > 0 ? p[0] : null,
            j =
              null != c &&
              null == v &&
              !f.loadingMore &&
              !f.ready &&
              !f.hasFetched &&
              Z;
          r.useEffect(() => {
            j && s.Z.fetchMessages({ channelId: n, after: n, limit: 5 });
          }, [n, j]);
          let b = (e) => {
            null != c &&
              (e.shiftKey
                ? (0, x.C3)(c.guild_id, c.id)
                : u.Z.openResourceChannelAsSidebar({
                    guildId: c.guild_id,
                    channelId: c.id,
                  }));
          };
          return (0, a.jsx)(
            t.Clickable,
            {
              className: _.resourceChannel,
              onClick: (e) => b(e),
              children: (0, a.jsxs)(a.Fragment, {
                children: [
                  (() => {
                    let e = C.ZP.getResourceChannelIconURL({
                      channelId: n,
                      icon: o,
                    });
                    return null != o && null != e
                      ? (0, a.jsx)("img", {
                          src: e,
                          className: _.resourceImage,
                          alt: "",
                          "aria-hidden": !0,
                        })
                      : null != N
                        ? (0, a.jsx)("img", {
                            className: _.resourceImage,
                            src: N.src,
                            alt: N.alt,
                          })
                        : (0, a.jsx)("div", {
                            className: _.placeholderImage,
                            children: (0, a.jsx)(t.PaperIcon, {
                              size: "xs",
                              color: "currentColor",
                            }),
                          });
                  })(),
                  (0, a.jsx)(t.Text, {
                    className: _.guildInfoText,
                    variant: "text-sm/semibold",
                    color: "none",
                    children: l,
                  }),
                ],
              }),
            },
            n,
          );
        },
        N = r.memo(function (e) {
          let { guild: n } = e,
            l = (0, f.Z)(n.id);
          return 0 === l.length
            ? null
            : (0, a.jsx)("div", {
                className: _.sidebarCardWrapper,
                children: (0, a.jsxs)("div", {
                  className: _.sidebarCard,
                  children: [
                    (0, a.jsx)(t.Heading, {
                      className: _.sidebarCardHeader,
                      variant: "heading-md/bold",
                      color: "header-primary",
                      children: Z.Z.Messages.GUILD_HOME_RESOURCES,
                    }),
                    (0, a.jsx)("div", {
                      className: _.resourceChannelsList,
                      children: l.map((e) =>
                        (0, a.jsx)(
                          p,
                          {
                            channelId: e.channelId,
                            title: e.title,
                            icon: e.icon,
                          },
                          "widget-resource-".concat(e.channelId),
                        ),
                      ),
                    }),
                  ],
                }),
              });
        }),
        j = r.memo(function (e) {
          let { guild: n, isNewMember: l } = e;
          return (0, a.jsxs)("aside", {
            className: _.sidebar,
            children: [
              (0, a.jsx)(v, { guild: n }),
              l && (0, a.jsx)(N, { guild: n }),
            ],
          });
        });
      n.Z = j;
    },
    869764: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return E;
        },
        k: function () {
          return j;
        },
      }),
        l(789020);
      var a = l(735250),
        r = l(470079),
        i = l(442837),
        t = l(481060),
        s = l(933557),
        d = l(471445),
        o = l(592125),
        c = l(271383),
        u = l(430824),
        h = l(496675),
        m = l(186523),
        g = l(768581),
        C = l(630388),
        x = l(526120),
        f = l(563534),
        I = l(846121),
        Z = l(305762),
        _ = l(981631),
        v = l(372897),
        p = l(689938),
        N = l(591294);
      function j(e) {
        let {
            title: n,
            emojiId: l,
            emojiName: r,
            icon: i,
            completed: s,
            Icon: d,
            ...o
          } = e,
          c = "channel" === o.variant ? o.channelId : null,
          u = "static" === o.variant ? o.subtitle : o.channelName,
          h =
            null != c
              ? g.ZP.getNewMemberActionIconURL({ channelId: c, icon: i })
              : null;
        return (0, a.jsxs)("div", {
          className: N.action,
          children: [
            null != h
              ? (0, a.jsx)("img", {
                  src: h,
                  className: N.icon,
                  width: 32,
                  height: 32,
                  alt: "",
                  "aria-hidden": !0,
                })
              : (0, a.jsx)(Z.Z, {
                  emojiId: l,
                  emojiName: r,
                  size: Z.R.LARGE,
                  defaultComponent: (0, a.jsx)("div", {
                    className: N.channelIconContainer,
                    children: (0, a.jsx)(d, {
                      className: N.channelIcon,
                      color: "currentColor",
                    }),
                  }),
                }),
            (0, a.jsxs)("div", {
              className: N.actionInfo,
              children: [
                (0, a.jsx)(t.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: n,
                }),
                null != u
                  ? (0, a.jsx)(t.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: u,
                    })
                  : null,
              ],
            }),
            s
              ? (0, a.jsx)(t.CircleCheckIcon, {
                  size: "md",
                  color: "currentColor",
                  secondaryColor: "#fff",
                  className: N.checkCircleCompleted,
                })
              : (0, a.jsx)(m.Z, {
                  className: N.checkCircle,
                  width: 24,
                  height: 24,
                }),
          ],
        });
      }
      function b(e) {
        var n;
        let { action: l, completed: c } = e,
          { channelId: u, title: m, emoji: g, icon: C } = l,
          { id: f, name: I } = null != g ? g : {},
          Z = (0, i.e7)([o.Z], () => o.Z.getChannel(u)),
          v = (0, s.ZP)(Z, !0),
          p = (0, i.e7)([h.Z], () => h.Z.can(_.Plq.VIEW_CHANNEL, Z)),
          b = r.useCallback(() => {
            if (null == Z) return null;
            (0, x.gp)(Z.guild_id, Z.id);
          }, [Z]);
        if (null == Z || !p) return null;
        let E = null !== (n = (0, d.KS)(Z)) && void 0 !== n ? n : t.TextIcon;
        return (0, a.jsx)(t.Clickable, {
          className: N.clickableAction,
          onClick: b,
          children: (0, a.jsx)(j, {
            variant: "channel",
            channelId: u,
            title: m,
            channelName: v,
            emojiId: f,
            emojiName: I,
            icon: C,
            completed: c,
            Icon: E,
          }),
        });
      }
      function E(e) {
        let { guildId: n } = e,
          l = (0, i.e7)([f.Z], () => f.Z.getNewMemberActions(n), [n]),
          s = (0, i.e7)([I.Z], () => I.Z.getCompletedActions(n)),
          d = (0, i.e7)([c.ZP], () => c.ZP.getSelfMember(n)),
          o = (0, i.e7)([u.Z], () => u.Z.getGuild(n));
        r.useEffect(() => {
          var e;
          null == s &&
            (null == d ? void 0 : d.flags) != null &&
            (0, C.yE)(
              null !== (e = d.flags) && void 0 !== e ? e : 0,
              v.q.STARTED_HOME_ACTIONS,
            ) &&
            (0, x.Fg)(n);
        }, [s, n, null == d ? void 0 : d.flags]);
        let h = r.useCallback(() => {
          null != o &&
            null != o.rulesChannelId &&
            (0, x.gp)(o.id, o.rulesChannelId);
        }, [o]);
        return null == d || null == l || 0 === l.length
          ? null
          : (0, a.jsxs)("div", {
              className: N.container,
              children: [
                (0, a.jsx)(t.Heading, {
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children: p.Z.Messages.GET_STARTED,
                }),
                l.map((e) =>
                  (0, a.jsx)(
                    b,
                    {
                      action: e,
                      completed: (null == s ? void 0 : s[e.channelId]) === !0,
                      guildId: n,
                    },
                    e.channelId,
                  ),
                ),
                (null == o ? void 0 : o.rulesChannelId) != null &&
                  (0, a.jsxs)(t.Clickable, {
                    className: N.action,
                    onClick: h,
                    children: [
                      (0, a.jsx)("div", {
                        className: N.rulesIconContainer,
                        children: (0, a.jsx)(t.BookCheckIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: N.rulesIcon,
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: N.actionInfo,
                        children: (0, a.jsx)(t.Text, {
                          variant: "text-md/semibold",
                          color: "header-primary",
                          children:
                            p.Z.Messages.GUILD_SETTINGS_ONBOARDING_RULES_ACTION,
                        }),
                      }),
                    ],
                  }),
              ],
            });
      }
    },
    919318: function (e, n, l) {
      l.d(n, {
        ZP: function () {
          return H;
        },
      }),
        l(47120);
      var a = l(735250),
        r = l(470079),
        i = l(120356),
        t = l.n(i),
        s = l(442837),
        d = l(481060),
        o = l(904245),
        c = l(368844),
        u = l(73315),
        h = l(454585),
        m = l(406432),
        g = l(169525),
        C = l(524444),
        x = l(703656),
        f = l(6025),
        I = l(695346),
        Z = l(592125),
        _ = l(984933),
        v = l(375954),
        p = l(496675),
        N = l(451478),
        j = l(768581),
        b = l(526120),
        E = l(689981),
        M = l(825334),
        A = l(981631),
        S = l(689938),
        T = l(706221),
        R = l(910212),
        P = l(931057);
      function B(e) {
        let n,
          l,
          { firstMedia: r, channelId: i } = e,
          d = (0, s.e7)([Z.Z], () => Z.Z.getChannel(i)),
          [o, c] = (0, g.hL)({ media: r, channel: d }),
          h = (0, g.MC)(c),
          x = (0, s.e7)([N.Z], () => N.Z.isFocused()),
          f = (0, m.d$)(r.src),
          _ = I.QK.useSetting(),
          { src: v, width: p, height: j, alt: b } = r;
        return (
          j > p ? (l = 72) : (n = 72),
          (0, a.jsxs)("div", {
            className: T.media,
            children: [
              (0, C.Yi)({
                src: v,
                maxHeight: n,
                maxWidth: l,
                width: p,
                height: j,
                alt: null != b && o && null != h ? h : b,
                autoPlay: _,
                animated: f && !o && x,
                containerClassName: T.thumbnailContainer,
                imageClassName: t()({ [T.obscured]: o }),
                renderForwardComponent: A.VqG,
              }),
              o &&
                (0, a.jsx)(u.Z, {
                  obscureReason: c,
                  iconClassname: T.obscuredTag,
                }),
            ],
          })
        );
      }
      function y(e) {
        let { resource: n } = e,
          l = (0, s.e7)([Z.Z], () => Z.Z.getChannel(n.channelId)),
          i = (0, s.e7)([v.Z], () => v.Z.getMessages(n.channelId)),
          u = (0, s.e7)([p.Z], () => p.Z.can(A.Plq.VIEW_CHANNEL, l)),
          m = i.first(),
          g = (0, E.Z)(m),
          C = (0, c.zy)(m, !1),
          x = (null == C ? void 0 : C.length) > 0 ? C[0] : null,
          I =
            null != l &&
            null == i.first() &&
            !i.loadingMore &&
            !i.ready &&
            !i.hasFetched &&
            u;
        r.useEffect(() => {
          I &&
            o.Z.fetchMessages({
              channelId: n.channelId,
              after: n.channelId,
              limit: 5,
            });
        }, [n.channelId, I]);
        if (null == l || null == l.guild_id) return null;
        let _ = j.ZP.getResourceChannelIconURL({
            channelId: l.id,
            icon: n.icon,
          }),
          N = null == n.description || 0 === n.description.length;
        return (0, a.jsxs)(d.Clickable, {
          className: T.row,
          onClick: (e) => {
            null != l &&
              (e.shiftKey
                ? (0, b.C3)(l.guild_id, l.id)
                : f.Z.openResourceChannelAsSidebar({
                    guildId: l.guild_id,
                    channelId: l.id,
                  }));
          },
          children: [
            (0, a.jsxs)("div", {
              className: T.content,
              children: [
                (0, a.jsx)(d.Text, {
                  className: T.title,
                  variant: "text-md/bold",
                  color: "header-primary",
                  children: n.title,
                }),
                N &&
                  null != g &&
                  (0, a.jsx)(d.Text, {
                    className: T.messageContent,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    lineClamp: 3,
                    children: h.Z.parse(g, !0, {
                      guildId: l.guild_id,
                      channelId: l.id,
                    }),
                  }),
                !N &&
                  (0, a.jsx)(d.Text, {
                    className: t()(T.messageContent, R.markup),
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    lineClamp: 3,
                    children: h.Z.parse(n.description, !0, {
                      guildId: l.guild_id,
                      channelId: l.id,
                    }),
                  }),
              ],
            }),
            null != n.icon && null != _
              ? (0, a.jsx)("div", {
                  className: T.media,
                  children: (0, a.jsx)("img", {
                    src: _,
                    className: T.__invalid_thumbnail,
                    width: 72,
                    height: 72,
                    alt: "",
                    "aria-hidden": !0,
                  }),
                })
              : null,
            null == _ && null != x
              ? (0, a.jsx)(B, { firstMedia: x, channelId: n.channelId })
              : null,
          ],
        });
      }
      function H(e) {
        let { guild: n, isNewMember: l } = e,
          r = (0, M.Z)(n.id);
        if (0 === r.length)
          return l
            ? null
            : (0, a.jsxs)("div", {
                className: T.emptyContainer,
                children: [
                  (0, a.jsx)(d.Heading, {
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    children: S.Z.Messages.MEMBER_ACTION_COMPLETE_EMPTY_STATE,
                  }),
                  (0, a.jsx)("img", {
                    className: T.emptyStateImage,
                    src: P,
                    alt: "",
                  }),
                  (0, a.jsx)(d.Button, {
                    className: T.emptyStateButton,
                    onClick: () => {
                      let e = _.ZP.getDefaultChannel(n.id);
                      null != e && (0, x.uL)(A.Z5c.CHANNEL(n.id, e.id));
                    },
                    fullWidth: !0,
                    children:
                      S.Z.Messages.MEMBER_ACTION_COMPLETE_EMPTY_STATE_CTA,
                  }),
                ],
              });
        return (0, a.jsxs)("div", {
          className: T.container,
          children: [
            (0, a.jsx)(d.Heading, {
              variant: "heading-lg/bold",
              color: "header-primary",
              children: S.Z.Messages.GUILD_HOME_RESOURCES,
            }),
            r.map((e) => (0, a.jsx)(y, { resource: e }, e.channelId)),
          ],
        });
      }
    },
    150512: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return j;
        },
      });
      var a = l(735250),
        r = l(470079),
        i = l(120356),
        t = l.n(i),
        s = l(866442),
        d = l(399606),
        o = l(481060),
        c = l(749210),
        u = l(410030),
        h = l(607070),
        m = l(603368),
        g = l(484459),
        C = l(318661),
        x = l(721987),
        f = l(502762),
        I = l(430824),
        Z = l(594174),
        _ = l(5192),
        v = l(51144),
        p = l(228168),
        N = l(65679);
      function j(e) {
        let { guildId: n, welcomeMessage: l, className: i } = e,
          j = (0, d.e7)([I.Z], () => I.Z.getGuild(n)),
          b = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
          E = (0, d.e7)([Z.default], () =>
            Z.default.getUser(null == l ? void 0 : l.authorIds[0]),
          ),
          M = (0, d.e7)([Z.default], () => Z.default.getCurrentUser()),
          A = (0, C.ZP)(null == E ? void 0 : E.id, n),
          { theme: S, primaryColor: T } = (0, x.Z)({
            user: E,
            displayProfile: A,
          }),
          R = (0, u.ZP)(),
          P = (0, o.useToken)(o.tokens.colors.BACKGROUND_SECONDARY, S).hex(),
          B = r.useMemo(() => {
            var e;
            return null !== (e = null == l ? void 0 : l.authorIds) &&
              void 0 !== e
              ? e
              : [];
          }, [l]);
        r.useEffect(() => {
          c.Z.requestMembersById(n, B);
        }, [n, B]),
          r.useEffect(() => {
            null != E && (0, g.Z)(E.id, E.getAvatarURL(n, 48), { guildId: n });
          }, [E, n]);
        let y = (0, v._T)(M),
          H = null != T ? (0, s.br)(T, 1) : P,
          k = (0, m.$0)(H);
        if (null == E || null == M || null == l) return null;
        let L = null != j && j.ownerId === E.id;
        return (0, a.jsx)("div", {
          className: t()(N.welcomeMessageContainer, i),
          children: (0, a.jsxs)(f.Z, {
            className: N.welcomeMessageProfileContainer,
            user: E,
            displayProfile: A,
            profileType: p.y0.CARD,
            themeOverride: R,
            forceShowPremium: !0,
            children: [
              (0, a.jsx)("div", { className: N.avatarBackground }),
              b
                ? (0, a.jsx)(o.Avatar, {
                    src: E.getAvatarURL(n, 48),
                    size: o.AvatarSizes.SIZE_48,
                    className: N.avatar,
                    "aria-label": E.username,
                  })
                : (0, a.jsx)(o.AnimatedAvatar, {
                    src: E.getAvatarURL(n, 48),
                    size: o.AvatarSizes.SIZE_48,
                    className: N.avatar,
                    "aria-label": E.username,
                  }),
              (0, a.jsx)("div", {
                className: N.avatarBorder,
                style: { backgroundColor: H },
              }),
              (0, a.jsxs)("div", {
                className: N.welcomeMessageContent,
                style: { color: k.hex() },
                children: [
                  (0, a.jsxs)("div", {
                    className: N.adminUsernameContainer,
                    children: [
                      (0, a.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: "currentColor",
                        children: _.ZP.getName(n, null, E),
                      }),
                      L
                        ? (0, a.jsx)(o.CrownIcon, {
                            size: "md",
                            color: "currentColor",
                            className: N.ownerIcon,
                          })
                        : null,
                    ],
                  }),
                  (0, a.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "currentColor",
                    children: (function (e, n) {
                      let l = e.split(/\[@username\]/g);
                      return (0, a.jsx)("span", {
                        children: l.map((e, i) =>
                          (0, a.jsxs)(
                            r.Fragment,
                            {
                              children: [
                                e,
                                i < l.length - 1
                                  ? (0, a.jsx)(o.Text, {
                                      tag: "span",
                                      variant: "text-md/semibold",
                                      children: "@".concat(n),
                                    })
                                  : null,
                              ],
                            },
                            "username-".concat(i),
                          ),
                        ),
                      });
                    })(
                      null == l ? void 0 : l.message,
                      null != y ? y : M.username,
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    672256: function (e, n, l) {
      e.exports = {
        header: "header_d32e26",
        headerArtWrapper: "headerArtWrapper_d32e26",
        headerArt: "headerArt_d32e26",
        headerArtPlaceholder: "headerArtPlaceholder_d32e26",
        editButton: "editButton_d32e26",
        editButtonInner: "editButtonInner_d32e26",
        headerIcon: "headerIcon_d32e26",
        headerName: "headerName_d32e26",
        inviteButton: "inviteButton_d32e26",
        titleWrapper: "titleWrapper_d32e26",
      };
    },
    523460: function (e, n, l) {
      e.exports = {
        maxWidthWrapper: "maxWidthWrapper_e85cee",
        homeContainer: "homeContainer_e85cee",
        homeContainerCollapsed: "homeContainerCollapsed_e85cee",
        emptyHeaderTitle: "emptyHeaderTitle_e85cee",
        homeContent: "homeContent_e85cee",
        mainContent: "mainContent_e85cee",
        sidebar: "sidebar_e85cee",
        sidebarCardWrapper: "sidebarCardWrapper_e85cee",
        sidebarCard: "sidebarCard_e85cee",
        sidebarCardHeader: "sidebarCardHeader_e85cee",
        guildDescription: "guildDescription_e85cee",
        guildInfo: "guildInfo_e85cee",
        guildInfoText: "guildInfoText_e85cee",
        dotOnline: "dotOnline_e85cee",
        resourceChannelsList: "resourceChannelsList_e85cee",
        resourceChannel: "resourceChannel_e85cee",
        resourceImage: "resourceImage_e85cee resourceImageBase_e85cee",
        placeholderImage: "placeholderImage_e85cee resourceImageBase_e85cee",
        title: "title_e85cee",
        background: "background_e85cee",
        headerBarInner: "headerBarInner_e85cee",
      };
    },
    591294: function (e, n, l) {
      e.exports = {
        container: "container_e3f878",
        action: "action_e3f878",
        clickableAction: "clickableAction_e3f878",
        actionInfo: "actionInfo_e3f878",
        channelIcon: "channelIcon_e3f878",
        channelIconContainer: "channelIconContainer_e3f878",
        rulesIconContainer: "rulesIconContainer_e3f878",
        rulesIcon: "rulesIcon_e3f878",
        checkCircle: "checkCircle_e3f878",
        checkCircleCompleted: "checkCircleCompleted_e3f878",
        icon: "icon_e3f878",
      };
    },
    706221: function (e, n, l) {
      e.exports = {
        container: "container_b53f4f",
        row: "row_b53f4f",
        content: "content_b53f4f",
        title: "title_b53f4f",
        media: "media_b53f4f",
        thumbnailContainer: "thumbnailContainer_b53f4f",
        obscured: "obscured_b53f4f",
        obscuredTag: "obscuredTag_b53f4f",
        emptyContainer: "emptyContainer_b53f4f",
        emptyStateImage: "emptyStateImage_b53f4f",
        emptyStateButton: "emptyStateButton_b53f4f",
        messageContent: "messageContent_b53f4f",
      };
    },
    65679: function (e, n, l) {
      e.exports = {
        welcomeMessageContainer: "welcomeMessageContainer_a1289e",
        welcomeMessageProfileContainer: "welcomeMessageProfileContainer_a1289e",
        avatar: "avatar_a1289e",
        avatarBackground: "avatarBackground_a1289e",
        avatarBorder: "avatarBorder_a1289e",
        adminUsernameContainer: "adminUsernameContainer_a1289e",
        welcomeMessageContent: "welcomeMessageContent_a1289e",
        ownerIcon: "ownerIcon_a1289e",
      };
    },
  },
]);
//# sourceMappingURL=2f6415fb6ae6d709783b.js.map
