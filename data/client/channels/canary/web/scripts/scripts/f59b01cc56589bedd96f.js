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
          return P;
        },
      }),
        l(653041);
      var a = l(200651),
        i = l(192379),
        t = l(442837),
        r = l(481060),
        s = l(239091),
        d = l(561472),
        o = l(36311),
        c = l(367907),
        u = l(188471),
        h = l(541716),
        m = l(526120),
        g = l(563534),
        x = l(736052),
        f = l(665149),
        C = l(442336),
        v = l(910611),
        I = l(41776),
        p = l(703656),
        Z = l(6025),
        j = l(592125),
        N = l(703558),
        _ = l(731290),
        b = l(430824),
        A = l(375954),
        E = l(594174),
        S = l(933557),
        M = l(287746),
        y = l(981631),
        k = l(388032),
        w = l(837199);
      function P(e) {
        let {
            channelId: n,
            baseChannelId: P,
            channelViewSource: B = "Split View",
            isResourceChannelView: R,
          } = e,
          T = (0, t.e7)([j.Z], () => j.Z.getChannel(n)),
          H = (0, t.e7)([b.Z], () =>
            b.Z.getGuild(null == T ? void 0 : T.getGuildId()),
          ),
          L = (0, t.e7)([E.default], () => E.default.getCurrentUser()),
          D = (0, t.e7)([_.Z], () =>
            _.Z.didAgree(null == T ? void 0 : T.guild_id),
          ),
          W = (null == L ? void 0 : L.nsfwAllowed) === !0,
          U = (0, S.ZP)(T),
          G = (0, t.e7)(
            [I.Z],
            () => (null == H ? void 0 : H.id) != null && I.Z.isLurking(H.id),
            [H],
          ),
          O = (0, x.Z)(n),
          z = (0, t.e7)([g.Z], () => {
            var e;
            return null ===
              (e = g.Z.getResourceForChannel(null == H ? void 0 : H.id, n)) ||
              void 0 === e
              ? void 0
              : e.title;
          }),
          F = i.useRef(!1);
        if (
          (i.useEffect(() => {
            null != T &&
              !F.current &&
              ((F.current = !0),
              (0, c.yw)(y.rMx.CHANNEL_OPENED, {
                ...(0, c.$H)(T.id),
                channel_view: B,
              }),
              (0, u.a)(y.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: T.id }));
          }, [T, B]),
          null == T || null == H)
        )
          return null;
        let Y = [];
        return (!G && Y.push((0, a.jsx)(C.Z, { channel: T }, "notifications")),
        Y.push(
          (0, a.jsx)(
            f.ZP.Icon,
            {
              icon: r.XSmallIcon,
              tooltip: k.intl.string(k.t.cpT0Cg),
              onClick: () => Z.Z.closeChannelSidebar(P),
            },
            "close",
          ),
        ),
        !T.isNSFW() || (W && D))
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(d.Z, { channel: T, draftType: N.d.ChannelMessage }),
                (0, a.jsx)(f.ZP, {
                  toolbar: Y,
                  "aria-label": k.intl.string(k.t.BIYAqa),
                  children: (0, v.ud)({
                    channel: T,
                    channelName: O ? z : U,
                    guild: H,
                    inSidebar: !0,
                    handleContextMenu: (e) => {
                      (0, s.jW)(e, async () => {
                        let { default: e } = await l
                          .e("24783")
                          .then(l.bind(l, 439635));
                        return (n) =>
                          (0, a.jsx)(e, { ...n, channel: T, guild: H });
                      });
                    },
                    handleClick: () => {
                      let e = A.Z.getMessages(T.id);
                      if (R) {
                        (0, p.uL)(y.Z5c.CHANNEL(T.guild_id, T.id)),
                          (0, m.C3)(T.guild_id, null);
                        return;
                      }
                      (0, p.XU)(T.guild_id, T.id, e.jumpTargetId);
                    },
                  }),
                }),
                (0, a.jsx)("div", {
                  className: w.chat,
                  children: (0, a.jsx)(
                    M.Z,
                    { channel: T, guild: H, chatInputType: h.Ie.SIDEBAR },
                    n,
                  ),
                }),
              ],
            })
          : (0, a.jsx)(o.Z, { guild: H });
      }
    },
    644080: function (e, n, l) {
      var a = l(200651),
        i = l(192379),
        t = l(120356),
        r = l.n(t),
        s = l(442837),
        d = l(692547),
        o = l(481060),
        c = l(410030),
        u = l(565138),
        h = l(523751),
        m = l(637853),
        g = l(434404),
        x = l(159300),
        f = l(496675),
        C = l(709586),
        v = l(768581),
        I = l(981631),
        p = l(388032),
        Z = l(521509),
        j = l(63190),
        N = l(102219);
      let _ = (e) => {
        let n = i.useMemo(
          () =>
            null == e
              ? null
              : v.ZP.getGuildHomeHeaderURL({
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
            g.Z.open(n.id, I.pNK.ONBOARDING, void 0, I.KsC.SERVER_GUIDE);
          };
        return n.hasFeature(I.oNc.BANNER)
          ? (0, a.jsxs)(o.Button, {
              className: Z.editButton,
              innerClassName: Z.editButtonInner,
              type: "button",
              size: o.Button.Sizes.MEDIUM,
              color: o.Button.Colors.BRAND,
              onClick: l,
              children: [
                (0, a.jsx)(o.ImagePlusIcon, {
                  size: "xs",
                  color: d.Z.unsafe_rawColors.WHITE_500.css,
                }),
                p.intl.string(p.t.b0y3DA),
              ],
            })
          : (0, a.jsxs)(o.ShinyButton, {
              color: o.Button.Colors.GREEN,
              className: Z.editButton,
              innerClassName: Z.editButtonInner,
              onClick: l,
              children: [
                (0, a.jsx)(C.Z, { height: 16, width: 16 }),
                p.intl.string(p.t["+7XY39"]),
              ],
            });
      }
      let A = i.memo(function (e) {
        let { guild: n, titleClassName: i } = e,
          { homeHeaderImage: t, isHomeHeaderImageSet: d } = _(n),
          g = (0, m.b$)(n.id),
          C = (0, s.e7)([f.Z], () => (0, x.b)(f.Z, n)),
          v = (0, c.ZP)();
        return (0, a.jsxs)("div", {
          className: Z.header,
          children: [
            (0, a.jsxs)("div", {
              className: Z.headerArtWrapper,
              children: [
                (0, a.jsx)("div", {
                  className: r()(Z.headerArt, { [Z.headerArtPlaceholder]: !d }),
                  style: {
                    backgroundImage: "url(".concat(
                      d ? t : "dark" === v ? j : N,
                      ")",
                    ),
                  },
                }),
                g && (0, a.jsx)(b, { guild: n }),
              ],
            }),
            (0, a.jsx)("div", {
              className: Z.titleWrapper,
              children: (0, a.jsxs)("div", {
                className: i,
                children: [
                  (0, a.jsx)(u.Z, {
                    className: Z.headerIcon,
                    guild: n,
                    size: u.Z.Sizes.XLARGE,
                    active: !0,
                  }),
                  (0, a.jsx)(o.HeadingLevel, {
                    children: (0, a.jsxs)("div", {
                      className: Z.headerName,
                      children: [
                        (0, a.jsx)(o.Heading, {
                          className: Z.headerName,
                          variant: "heading-xxl/bold",
                          children: n.name,
                        }),
                        (0, a.jsx)(h.Z, {
                          size: 24,
                          guild: n,
                          tooltipPosition: "bottom",
                          tooltipColor: o.Tooltip.Colors.PRIMARY,
                        }),
                        C &&
                          (0, a.jsx)(o.Button, {
                            className: Z.inviteButton,
                            size: o.Button.Sizes.MEDIUM,
                            color: o.Button.Colors.PRIMARY,
                            onClick: () =>
                              (0, o.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([
                                  l.e("7654"),
                                  l.e("54655"),
                                ]).then(l.bind(l, 560114));
                                return (l) =>
                                  (0, a.jsx)(e, {
                                    ...l,
                                    guild: n,
                                    source: I.t4x.GUILD_HOME,
                                  });
                              }),
                            children: p.intl.string(p.t.VINpSE),
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
      n.Z = A;
    },
    231588: function (e, n, l) {
      l.r(n);
      var a = l(200651),
        i = l(192379),
        t = l(442837),
        r = l(749210),
        s = l(112724),
        d = l(923029),
        o = l(353926),
        c = l(931261),
        u = l(333323),
        h = l(430824);
      let m = (0, s.Z)(u.Z);
      n.default = function (e) {
        let { guildId: n } = e,
          l = (0, t.e7)([h.Z], () => h.Z.getGuild(n), [n]),
          s = (0, t.e7)([o.Z], () => o.Z.hasLoadedExperiments),
          u = (0, c.g)(n);
        return (i.useEffect(() => {
          if (!!s) {
            if (!u) {
              r.Z.escapeToDefaultChannel(n);
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
          return r;
        },
      });
      var a = l(399606),
        i = l(592125),
        t = l(563534);
      function r(e) {
        return (0, a.Wu)([t.Z, i.Z], () =>
          t.Z.getResourceChannels(e).filter(
            (e) => null != i.Z.getChannel(e.channelId),
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
      var a = l(200651);
      l(192379);
      var i = l(442837),
        t = l(325708),
        r = l(213557),
        s = l(433355),
        d = l(981631),
        o = l(176505);
      let c = 656;
      function u(e) {
        let { pageWidth: n, onSidebarResize: l } = e,
          u = (0, i.e7)([s.ZP], () => s.ZP.getSidebarState(o.oC.GUILD_HOME));
        if (null == u || null == u.channelId) return null;
        let h = n - d.PrS - c;
        return (0, a.jsx)(t.Z, {
          sidebarType: t.y.HomeSidebar,
          maxWidth: h,
          onWidthChange: l,
          children: (0, a.jsx)(r.Z, {
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
          return P;
        },
      }),
        l(47120);
      var a = l(200651),
        i = l(192379),
        t = l(120356),
        r = l.n(t),
        s = l(399606),
        d = l(481060),
        o = l(749210),
        c = l(131388),
        u = l(367907),
        h = l(644080),
        m = l(984370),
        g = l(6025),
        x = l(433355),
        f = l(626135),
        C = l(526120),
        v = l(563534),
        I = l(846121),
        p = l(460347),
        Z = l(404488),
        j = l(605276),
        N = l(869764),
        _ = l(919318),
        b = l(150512),
        A = l(981631),
        E = l(176505),
        S = l(388032),
        M = l(588898),
        y = l(247627);
      let k = Z.q + 300 + 64,
        w = i.memo(function (e) {
          let { guild: n } = e;
          return (0, a.jsxs)(m.Z, {
            channelId: E.oC.GUILD_HOME,
            guildId: n.id,
            className: r()(M.title, M.background),
            innerClassname: M.headerBarInner,
            children: [
              (0, a.jsx)(m.Z.Icon, { icon: d.SignPostIcon, "aria-hidden": !0 }),
              (0, a.jsxs)(m.Z.Title, {
                children: [
                  (0, a.jsx)(d.HiddenVisually, { children: n.name }),
                  S.intl.string(S.t.VbpLyc),
                ],
              }),
            ],
          });
        });
      function P(e) {
        var n, l;
        let { guild: t, width: m } = e,
          S = (0, s.e7)([x.ZP], () => x.ZP.getSection(E.oC.GUILD_HOME)),
          [P, B] = i.useState(!1),
          [R, T] = i.useState(A.$Y6),
          H = S === A.ULH.SIDEBAR_CHAT,
          L = (0, d.useFocusJumpSection)(),
          D = (0, s.e7)([v.Z], () => v.Z.getSettings(t.id)),
          W = null == D ? void 0 : D.welcomeMessage,
          U = (0, p.Z)(t.id),
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
          O = (0, c.Z)("(max-width: 1300px)"),
          z = m - A.PrS - R,
          F = (H && z < k) || O || G;
        return (i.useEffect(() => {
          if (D === v.P) (0, C.cP)(t.id);
          else if (null != D) {
            var e, n, l, a, i;
            f.default.track(A.rMx.SERVER_GUIDE_VIEWED, {
              ...(0, u.hH)(t.id),
              num_member_actions:
                null !==
                  (l =
                    null === (e = D.newMemberActions) || void 0 === e
                      ? void 0
                      : e.length) && void 0 !== l
                  ? l
                  : 0,
              num_member_actions_completed: Object.keys(
                null !== (a = I.Z.getCompletedActions(t.id)) && void 0 !== a
                  ? a
                  : {},
              ).length,
              num_resource_channels:
                null !==
                  (i =
                    null === (n = D.resourceChannels) || void 0 === n
                      ? void 0
                      : n.length) && void 0 !== i
                  ? i
                  : 0,
            });
          }
        }, [t.id, D]),
        i.useEffect(
          () => () => {
            g.Z.closeChannelSidebar(E.oC.GUILD_HOME);
          },
          [],
        ),
        i.useEffect(() => {
          G && D !== v.P && o.Z.escapeToDefaultChannel(t.id);
        }, [t.id, G, D]),
        G)
          ? null
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: r()(y.chat, M.background, {
                    [y.threadSidebarOpen]: H,
                    [y.threadSidebarFloating]: H && P,
                  }),
                  children: [
                    (0, a.jsx)(w, { guild: t }),
                    (0, a.jsx)(d.AdvancedScrollerAuto, {
                      ...L,
                      children: (0, a.jsxs)("div", {
                        className: r()(M.homeContainer, {
                          [M.homeContainerCollapsed]: F,
                        }),
                        children: [
                          (0, a.jsx)("div", {
                            className: M.maxWidthWrapper,
                            children: (0, a.jsx)(h.Z, {
                              guild: t,
                              titleClassName: O ? M.emptyHeaderTitle : void 0,
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: r()(M.homeContent, M.maxWidthWrapper),
                            children: [
                              (0, a.jsxs)("div", {
                                className: M.mainContent,
                                children: [
                                  U &&
                                    (0, a.jsx)(b.Z, {
                                      guildId: t.id,
                                      welcomeMessage: W,
                                    }),
                                  U && (0, a.jsx)(N.Z, { guildId: t.id }),
                                  !U || F
                                    ? (0, a.jsx)(_.ZP, {
                                        guild: t,
                                        isNewMember: U,
                                      })
                                    : null,
                                ],
                              }),
                              F
                                ? null
                                : (0, a.jsx)(j.Z, { guild: t, isNewMember: U }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                H
                  ? (0, a.jsx)(Z.Z, {
                      pageWidth: m,
                      onSidebarResize: (e, n) => {
                        B(n), T(e);
                      },
                    })
                  : null,
              ],
            });
      }
    },
    605276: function (e, n, l) {
      var a = l(200651),
        i = l(192379),
        t = l(399606),
        r = l(481060),
        s = l(904245),
        d = l(368844),
        o = l(249842),
        c = l(838367),
        u = l(576306),
        h = l(934269),
        m = l(910200),
        g = l(6025),
        x = l(592125),
        f = l(375954),
        C = l(496675),
        v = l(768581),
        I = l(526120),
        p = l(825334),
        Z = l(981631),
        j = l(388032),
        N = l(588898);
      function _(e) {
        let { guild: n } = e,
          l = (0, t.e7)([c.Z], () => c.Z.getGuild(n.id), [n]);
        return (
          i.useEffect(() => {
            null == l && (0, o.P)(n.id);
          }, [n.id, l]),
          (0, a.jsx)("div", {
            className: N.sidebarCardWrapper,
            children: (0, a.jsxs)("div", {
              className: N.sidebarCard,
              children: [
                (0, a.jsx)(r.Heading, {
                  className: N.sidebarCardHeader,
                  variant: "heading-md/bold",
                  color: "header-primary",
                  children: j.intl.string(j.t["6YriCA"]),
                }),
                (0, a.jsx)(r.Text, {
                  className: N.guildDescription,
                  variant: "text-md/normal",
                  color: "text-normal",
                  children: n.description,
                }),
                (0, a.jsx)("div", {
                  className: N.guildInfo,
                  children:
                    (null == l ? void 0 : l.memberCount) != null &&
                    (null == l ? void 0 : l.presenceCount) != null &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("div", { className: N.dotOnline }),
                        (0, a.jsx)(r.Text, {
                          className: N.guildInfoText,
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: j.intl.format(j.t.QAdRCw, {
                            online: null == l ? void 0 : l.presenceCount,
                            total: null == l ? void 0 : l.memberCount,
                          }),
                        }),
                      ],
                    }),
                }),
              ],
            }),
          })
        );
      }
      function b(e) {
        let { guild: n } = e,
          { guildProfile: l, fetchGuildProfile: t } = (0, h.u)(n.id);
        return (i.useEffect(() => {
          t();
        }, [t]),
        null == l)
          ? null
          : (0, a.jsx)(m.Z, { profile: l });
      }
      let A = i.memo(function (e) {
          let { guild: n } = e;
          return (0, u.h)()
            ? (0, a.jsx)(b, { guild: n })
            : (0, a.jsx)(_, { guild: n });
        }),
        E = (e) => {
          let { channelId: n, title: l, icon: o } = e,
            c = (0, t.e7)([x.Z], () => x.Z.getChannel(n)),
            u = (0, t.e7)([f.Z], () => f.Z.getMessages(n)),
            h = (0, t.e7)([C.Z], () => C.Z.can(Z.Plq.VIEW_CHANNEL, c)),
            m = u.first(),
            p = (0, d.zy)(m, !1),
            j = (null == p ? void 0 : p.length) > 0 ? p[0] : null,
            _ =
              null != c &&
              null == m &&
              !u.loadingMore &&
              !u.ready &&
              !u.hasFetched &&
              h;
          i.useEffect(() => {
            _ && s.Z.fetchMessages({ channelId: n, after: n, limit: 5 });
          }, [n, _]);
          let b = (e) => {
            null != c &&
              (e.shiftKey
                ? (0, I.C3)(c.guild_id, c.id)
                : g.Z.openResourceChannelAsSidebar({
                    guildId: c.guild_id,
                    channelId: c.id,
                  }));
          };
          return (0, a.jsx)(
            r.Clickable,
            {
              className: N.resourceChannel,
              onClick: (e) => b(e),
              children: (0, a.jsxs)(a.Fragment, {
                children: [
                  (() => {
                    let e = v.ZP.getResourceChannelIconURL({
                      channelId: n,
                      icon: o,
                    });
                    return null != o && null != e
                      ? (0, a.jsx)("img", {
                          src: e,
                          className: N.resourceImage,
                          alt: "",
                          "aria-hidden": !0,
                        })
                      : null != j
                        ? (0, a.jsx)("img", {
                            className: N.resourceImage,
                            src: j.src,
                            alt: j.alt,
                          })
                        : (0, a.jsx)("div", {
                            className: N.placeholderImage,
                            children: (0, a.jsx)(r.PaperIcon, {
                              size: "xs",
                              color: "currentColor",
                            }),
                          });
                  })(),
                  (0, a.jsx)(r.Text, {
                    className: N.guildInfoText,
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
        S = i.memo(function (e) {
          let { guild: n } = e,
            l = (0, p.Z)(n.id);
          return 0 === l.length
            ? null
            : (0, a.jsx)("div", {
                className: N.sidebarCardWrapper,
                children: (0, a.jsxs)("div", {
                  className: N.sidebarCard,
                  children: [
                    (0, a.jsx)(r.Heading, {
                      className: N.sidebarCardHeader,
                      variant: "heading-md/bold",
                      color: "header-primary",
                      children: j.intl.string(j.t.xwY4LS),
                    }),
                    (0, a.jsx)("div", {
                      className: N.resourceChannelsList,
                      children: l.map((e) =>
                        (0, a.jsx)(
                          E,
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
        M = i.memo(function (e) {
          let { guild: n, isNewMember: l } = e;
          return (0, a.jsxs)("aside", {
            className: N.sidebar,
            children: [
              (0, a.jsx)(A, { guild: n }),
              l && (0, a.jsx)(S, { guild: n }),
            ],
          });
        });
      n.Z = M;
    },
    869764: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return k;
        },
        k: function () {
          return M;
        },
      }),
        l(789020);
      var a = l(200651),
        i = l(192379),
        t = l(442837),
        r = l(481060),
        s = l(933557),
        d = l(471445),
        o = l(905362),
        c = l(353093),
        u = l(979264),
        h = l(937111),
        m = l(592125),
        g = l(271383),
        x = l(430824),
        f = l(496675),
        C = l(186523),
        v = l(768581),
        I = l(630388),
        p = l(526120),
        Z = l(563534),
        j = l(846121),
        N = l(216701),
        _ = l(981631),
        b = l(308083),
        A = l(372897),
        E = l(388032),
        S = l(51979);
      function M(e) {
        let {
            title: n,
            emojiId: l,
            emojiName: i,
            icon: t,
            completed: s,
            Icon: d,
            ...o
          } = e,
          c = "channel" === o.variant ? o.channelId : null,
          u = "static" === o.variant ? o.subtitle : o.channelName,
          h =
            null != c
              ? v.ZP.getNewMemberActionIconURL({ channelId: c, icon: t })
              : null;
        return (0, a.jsxs)("div", {
          className: S.action,
          children: [
            null != h
              ? (0, a.jsx)("img", {
                  src: h,
                  className: S.icon,
                  width: 32,
                  height: 32,
                  alt: "",
                  "aria-hidden": !0,
                })
              : (0, a.jsx)(N.Z, {
                  emojiId: l,
                  emojiName: i,
                  size: N.R.LARGE,
                  defaultComponent: (0, a.jsx)("div", {
                    className: S.channelIconContainer,
                    children: (0, a.jsx)(d, {
                      className: S.channelIcon,
                      color: "currentColor",
                    }),
                  }),
                }),
            (0, a.jsxs)("div", {
              className: S.actionInfo,
              children: [
                (0, a.jsx)(r.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: n,
                }),
                null != u
                  ? (0, a.jsx)(r.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: u,
                    })
                  : null,
              ],
            }),
            s
              ? (0, a.jsx)(r.CircleCheckIcon, {
                  size: "md",
                  color: "currentColor",
                  secondaryColor: "#fff",
                  className: S.checkCircleCompleted,
                })
              : (0, a.jsx)(C.Z, {
                  className: S.checkCircle,
                  width: 24,
                  height: 24,
                }),
          ],
        });
      }
      function y(e) {
        var n;
        let { action: l, completed: o } = e,
          { channelId: c, title: u, emoji: h, icon: g } = l,
          { id: x, name: C } = null != h ? h : {},
          v = (0, t.e7)([m.Z], () => m.Z.getChannel(c)),
          I = (0, s.ZP)(v, !0),
          Z = (0, t.e7)([f.Z], () => f.Z.can(_.Plq.VIEW_CHANNEL, v)),
          j = i.useCallback(() => {
            if (null == v) return null;
            (0, p.gp)(v.guild_id, v.id);
          }, [v]);
        if (null == v || !Z) return null;
        let N = null !== (n = (0, d.KS)(v)) && void 0 !== n ? n : r.TextIcon;
        return (0, a.jsx)(r.Clickable, {
          className: S.clickableAction,
          onClick: j,
          children: (0, a.jsx)(M, {
            variant: "channel",
            channelId: c,
            title: u,
            channelName: I,
            emojiId: x,
            emojiName: C,
            icon: g,
            completed: o,
            Icon: N,
          }),
        });
      }
      function k(e) {
        var n;
        let { guildId: l } = e,
          s = (0, t.e7)([Z.Z], () => Z.Z.getNewMemberActions(l), [l]),
          d = (0, t.e7)([j.Z], () => j.Z.getCompletedActions(l)),
          m = (0, t.e7)([g.ZP], () => g.ZP.getSelfMember(l)),
          f = (0, t.e7)([x.Z], () => x.Z.getGuild(l)),
          C =
            null != f
              ? (0, c.ky)(
                  f.id,
                  null === (n = f.profile) || void 0 === n ? void 0 : n.badge,
                  b.NC.SIZE_16,
                )
              : null,
          v = (0, t.e7)([h.Z], () => h.Z.getRequest(l));
        i.useEffect(() => {
          var e;
          null == d &&
            (null == m ? void 0 : m.flags) != null &&
            (0, I.yE)(
              null !== (e = m.flags) && void 0 !== e ? e : 0,
              A.q.STARTED_HOME_ACTIONS,
            ) &&
            (0, p.Fg)(l);
        }, [d, l, null == m ? void 0 : m.flags]);
        let N = i.useCallback(() => {
          null != f &&
            null != f.rulesChannelId &&
            (0, p.gp)(f.id, f.rulesChannelId);
        }, [f]);
        return null == m || null == s || 0 === s.length
          ? null
          : (0, a.jsxs)("div", {
              className: S.container,
              children: [
                (0, a.jsx)(r.Heading, {
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children: E.intl.string(E.t.LhlgY2),
                }),
                (null == f ? void 0 : f.hasFeature(_.oNc.CLAN)) &&
                  null != C &&
                  (0, a.jsx)(r.Clickable, {
                    className: S.clickableAction,
                    onClick: () =>
                      (0, o.CK)(l, null == v ? void 0 : v.joinRequestId),
                    children: (0, a.jsxs)("div", {
                      className: S.action,
                      children: [
                        (0, a.jsx)("div", {
                          className: S.tagIconContainer,
                          children: (0, a.jsx)(u.KQ, {
                            src: C,
                            size: b.NC.SIZE_16,
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: S.actionInfo,
                          children: (0, a.jsx)(r.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: E.intl.string(E.t.MNhFER),
                          }),
                        }),
                      ],
                    }),
                  }),
                s.map((e) =>
                  (0, a.jsx)(
                    y,
                    {
                      action: e,
                      completed: (null == d ? void 0 : d[e.channelId]) === !0,
                      guildId: l,
                    },
                    e.channelId,
                  ),
                ),
                (null == f ? void 0 : f.rulesChannelId) != null &&
                  (0, a.jsxs)(r.Clickable, {
                    className: S.action,
                    onClick: N,
                    children: [
                      (0, a.jsx)("div", {
                        className: S.rulesIconContainer,
                        children: (0, a.jsx)(r.BookCheckIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: S.rulesIcon,
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: S.actionInfo,
                        children: (0, a.jsx)(r.Text, {
                          variant: "text-md/semibold",
                          color: "header-primary",
                          children: E.intl.string(E.t["K/i3iY"]),
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
          return R;
        },
      }),
        l(47120);
      var a = l(200651),
        i = l(192379),
        t = l(120356),
        r = l.n(t),
        s = l(442837),
        d = l(481060),
        o = l(904245),
        c = l(368844),
        u = l(73315),
        h = l(454585),
        m = l(406432),
        g = l(169525),
        x = l(524444),
        f = l(703656),
        C = l(6025),
        v = l(695346),
        I = l(592125),
        p = l(984933),
        Z = l(375954),
        j = l(496675),
        N = l(451478),
        _ = l(768581),
        b = l(526120),
        A = l(689981),
        E = l(825334),
        S = l(981631),
        M = l(388032),
        y = l(288622),
        k = l(665162),
        w = l(931057);
      function P(e) {
        let n,
          l,
          { firstMedia: i, channelId: t } = e,
          d = (0, s.e7)([I.Z], () => I.Z.getChannel(t)),
          [o, c] = (0, g.hL)({ media: i, channel: d }),
          h = (0, g.MC)(c),
          f = (0, s.e7)([N.Z], () => N.Z.isFocused()),
          C = (0, m.d$)(i.src),
          p = v.QK.useSetting(),
          { src: Z, width: j, height: _, alt: b } = i;
        return (
          _ > j ? (l = 72) : (n = 72),
          (0, a.jsxs)("div", {
            className: y.media,
            children: [
              (0, x.Yi)({
                src: Z,
                maxHeight: n,
                maxWidth: l,
                width: j,
                height: _,
                alt: null != b && o && null != h ? h : b,
                autoPlay: p,
                animated: C && !o && f,
                containerClassName: y.thumbnailContainer,
                imageClassName: r()({ [y.obscured]: o }),
                analyticsSource: "ResourceChannelMedia",
              }),
              o &&
                (0, a.jsx)(u.Z, {
                  obscureReason: c,
                  iconClassname: y.obscuredTag,
                }),
            ],
          })
        );
      }
      function B(e) {
        let { resource: n } = e,
          l = (0, s.e7)([I.Z], () => I.Z.getChannel(n.channelId)),
          t = (0, s.e7)([Z.Z], () => Z.Z.getMessages(n.channelId)),
          u = (0, s.e7)([j.Z], () => j.Z.can(S.Plq.VIEW_CHANNEL, l)),
          m = t.first(),
          g = (0, A.Z)(m),
          x = (0, c.zy)(m, !1),
          f = (null == x ? void 0 : x.length) > 0 ? x[0] : null,
          v =
            null != l &&
            null == t.first() &&
            !t.loadingMore &&
            !t.ready &&
            !t.hasFetched &&
            u;
        i.useEffect(() => {
          v &&
            o.Z.fetchMessages({
              channelId: n.channelId,
              after: n.channelId,
              limit: 5,
            });
        }, [n.channelId, v]);
        if (null == l || null == l.guild_id) return null;
        let p = _.ZP.getResourceChannelIconURL({
            channelId: l.id,
            icon: n.icon,
          }),
          N = null == n.description || 0 === n.description.length;
        return (0, a.jsxs)(d.Clickable, {
          className: y.row,
          onClick: (e) => {
            null != l &&
              (e.shiftKey
                ? (0, b.C3)(l.guild_id, l.id)
                : C.Z.openResourceChannelAsSidebar({
                    guildId: l.guild_id,
                    channelId: l.id,
                  }));
          },
          children: [
            (0, a.jsxs)("div", {
              className: y.content,
              children: [
                (0, a.jsx)(d.Text, {
                  className: y.title,
                  variant: "text-md/bold",
                  color: "header-primary",
                  children: n.title,
                }),
                N &&
                  null != g &&
                  (0, a.jsx)(d.Text, {
                    className: y.messageContent,
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
                    className: r()(y.messageContent, k.markup),
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
            null != n.icon && null != p
              ? (0, a.jsx)("div", {
                  className: y.media,
                  children: (0, a.jsx)("img", {
                    src: p,
                    className: y.__invalid_thumbnail,
                    width: 72,
                    height: 72,
                    alt: "",
                    "aria-hidden": !0,
                  }),
                })
              : null,
            null == p && null != f
              ? (0, a.jsx)(P, { firstMedia: f, channelId: n.channelId })
              : null,
          ],
        });
      }
      function R(e) {
        let { guild: n, isNewMember: l } = e,
          i = (0, E.Z)(n.id);
        if (0 === i.length)
          return l
            ? null
            : (0, a.jsxs)("div", {
                className: y.emptyContainer,
                children: [
                  (0, a.jsx)(d.Heading, {
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    children: M.intl.string(M.t.owvC9f),
                  }),
                  (0, a.jsx)("img", {
                    className: y.emptyStateImage,
                    src: w,
                    alt: "",
                  }),
                  (0, a.jsx)(d.Button, {
                    className: y.emptyStateButton,
                    onClick: () => {
                      let e = p.ZP.getDefaultChannel(n.id);
                      null != e && (0, f.uL)(S.Z5c.CHANNEL(n.id, e.id));
                    },
                    fullWidth: !0,
                    children: M.intl.string(M.t["3iCBUl"]),
                  }),
                ],
              });
        return (0, a.jsxs)("div", {
          className: y.container,
          children: [
            (0, a.jsx)(d.Heading, {
              variant: "heading-lg/bold",
              color: "header-primary",
              children: M.intl.string(M.t.xwY4LS),
            }),
            i.map((e) => (0, a.jsx)(B, { resource: e }, e.channelId)),
          ],
        });
      }
    },
    150512: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return _;
        },
      });
      var a = l(200651),
        i = l(192379),
        t = l(120356),
        r = l.n(t),
        s = l(866442),
        d = l(399606),
        o = l(481060),
        c = l(749210),
        u = l(410030),
        h = l(607070),
        m = l(603368),
        g = l(903518),
        x = l(687158),
        f = l(576635),
        C = l(484459),
        v = l(502762),
        I = l(430824),
        p = l(594174),
        Z = l(5192),
        j = l(51144),
        N = l(240249);
      function _(e) {
        var n;
        let { guildId: l, welcomeMessage: t, className: _ } = e,
          b = (0, d.e7)([I.Z], () => I.Z.getGuild(l)),
          A = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
          E = (0, d.e7)([p.default], () =>
            p.default.getUser(null == t ? void 0 : t.authorIds[0]),
          ),
          S = i.useMemo(
            () => (null != b && null != E && (0, g.Y)(b, E) ? E : null),
            [b, E],
          ),
          M = (0, d.e7)([p.default], () => p.default.getCurrentUser()),
          y = (0, x.ZP)(
            null !== (n = null == S ? void 0 : S.id) && void 0 !== n ? n : "0",
            l,
          ),
          { theme: k, primaryColor: w } = (0, f.Z)({
            user: null != S ? S : void 0,
            displayProfile: y,
          }),
          P = (0, u.ZP)(),
          B = (0, o.useToken)(o.tokens.colors.BACKGROUND_SECONDARY, k).hex(),
          R = i.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.authorIds) &&
              void 0 !== e
              ? e
              : [];
          }, [t]);
        i.useEffect(() => {
          c.Z.requestMembersById(l, R);
        }, [l, R]),
          i.useEffect(() => {
            null != S && (0, C.Z)(S.id, S.getAvatarURL(l, 48), { guildId: l });
          }, [S, l]);
        let T = (0, j._T)(M),
          H = null != w ? (0, s.br)(w, 1) : B,
          L = (0, m.$0)(H);
        if (null == S || null == M || null == t) return null;
        let D = null != b && b.ownerId === S.id;
        return (0, a.jsx)("div", {
          className: r()(N.welcomeMessageContainer, _),
          children: (0, a.jsxs)(v.Z, {
            className: N.welcomeMessageProfileContainer,
            user: S,
            displayProfile: y,
            profileType: null,
            themeOverride: P,
            forceShowPremium: !0,
            children: [
              (0, a.jsx)("div", { className: N.avatarBackground }),
              A
                ? (0, a.jsx)(o.Avatar, {
                    src: S.getAvatarURL(l, 48),
                    size: o.AvatarSizes.SIZE_48,
                    className: N.avatar,
                    "aria-label": S.username,
                  })
                : (0, a.jsx)(o.AnimatedAvatar, {
                    src: S.getAvatarURL(l, 48),
                    size: o.AvatarSizes.SIZE_48,
                    className: N.avatar,
                    "aria-label": S.username,
                  }),
              (0, a.jsx)("div", {
                className: N.avatarBorder,
                style: { backgroundColor: H },
              }),
              (0, a.jsxs)("div", {
                className: N.welcomeMessageContent,
                style: { color: L.hex() },
                children: [
                  (0, a.jsxs)("div", {
                    className: N.adminUsernameContainer,
                    children: [
                      (0, a.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: "currentColor",
                        children: Z.ZP.getName(l, null, S),
                      }),
                      D
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
                        children: l.map((e, t) =>
                          (0, a.jsxs)(
                            i.Fragment,
                            {
                              children: [
                                e,
                                t < l.length - 1
                                  ? (0, a.jsx)(o.Text, {
                                      tag: "span",
                                      variant: "text-md/semibold",
                                      children: "@".concat(n),
                                    })
                                  : null,
                              ],
                            },
                            "username-".concat(t),
                          ),
                        ),
                      });
                    })(
                      null == t ? void 0 : t.message,
                      null != T ? T : M.username,
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    903518: function (e, n, l) {
      l.d(n, {
        Y: function () {
          return t;
        },
      });
      var a = l(700785),
        i = l(981631);
      function t(e, n) {
        return (
          !!(
            e.isOwner(n) ||
            a.BT({ permission: i.Plq.ADMINISTRATOR, context: e, user: n })
          ) ||
          (a.BT({ permission: i.Plq.MANAGE_GUILD, context: e, user: n }) &&
            a.BT({ permission: i.Plq.MANAGE_ROLES, context: e, user: n }))
        );
      }
    },
    521509: function (e, n, l) {
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
    588898: function (e, n, l) {
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
    51979: function (e, n, l) {
      e.exports = {
        container: "container_e3f878",
        action: "action_e3f878",
        clickableAction: "clickableAction_e3f878",
        actionInfo: "actionInfo_e3f878",
        channelIcon: "channelIcon_e3f878",
        tagIconContainer: "tagIconContainer_e3f878",
        channelIconContainer: "channelIconContainer_e3f878",
        rulesIconContainer: "rulesIconContainer_e3f878",
        rulesIcon: "rulesIcon_e3f878",
        checkCircle: "checkCircle_e3f878",
        checkCircleCompleted: "checkCircleCompleted_e3f878",
        icon: "icon_e3f878",
      };
    },
    288622: function (e, n, l) {
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
    240249: function (e, n, l) {
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
//# sourceMappingURL=f59b01cc56589bedd96f.js.map
