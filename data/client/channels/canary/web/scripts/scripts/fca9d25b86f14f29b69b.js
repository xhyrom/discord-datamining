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
        c = l(36311),
        o = l(367907),
        u = l(188471),
        h = l(541716),
        m = l(526120),
        g = l(563534),
        x = l(736052),
        C = l(665149),
        f = l(442336),
        v = l(910611),
        I = l(41776),
        Z = l(703656),
        p = l(6025),
        j = l(592125),
        N = l(703558),
        _ = l(731290),
        b = l(430824),
        E = l(375954),
        A = l(594174),
        S = l(933557),
        k = l(287746),
        y = l(981631),
        w = l(388032),
        M = l(868912);
      function P(e) {
        let {
            channelId: n,
            baseChannelId: P,
            channelViewSource: B = "Split View",
            isResourceChannelView: H,
          } = e,
          R = (0, t.e7)([j.Z], () => j.Z.getChannel(n)),
          T = (0, t.e7)([b.Z], () =>
            b.Z.getGuild(null == R ? void 0 : R.getGuildId()),
          ),
          L = (0, t.e7)([A.default], () => A.default.getCurrentUser()),
          D = (0, t.e7)([_.Z], () =>
            _.Z.didAgree(null == R ? void 0 : R.guild_id),
          ),
          W = (null == L ? void 0 : L.nsfwAllowed) === !0,
          U = (0, S.ZP)(R),
          z = (0, t.e7)(
            [I.Z],
            () => (null == T ? void 0 : T.id) != null && I.Z.isLurking(T.id),
            [T],
          ),
          G = (0, x.Z)(n),
          O = (0, t.e7)([g.Z], () => {
            var e;
            return null ===
              (e = g.Z.getResourceForChannel(null == T ? void 0 : T.id, n)) ||
              void 0 === e
              ? void 0
              : e.title;
          }),
          F = i.useRef(!1);
        if (
          (i.useEffect(() => {
            null != R &&
              !F.current &&
              ((F.current = !0),
              (0, o.yw)(y.rMx.CHANNEL_OPENED, {
                ...(0, o.$H)(R.id),
                channel_view: B,
              }),
              (0, u.a)(y.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: R.id }));
          }, [R, B]),
          null == R || null == T)
        )
          return null;
        let V = [];
        return (!z && V.push((0, a.jsx)(f.Z, { channel: R }, "notifications")),
        V.push(
          (0, a.jsx)(
            C.ZP.Icon,
            {
              icon: r.XSmallIcon,
              tooltip: w.intl.string(w.t.cpT0Cg),
              onClick: () => p.Z.closeChannelSidebar(P),
            },
            "close",
          ),
        ),
        !R.isNSFW() || (W && D))
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(d.Z, { channel: R, draftType: N.d.ChannelMessage }),
                (0, a.jsx)(C.ZP, {
                  toolbar: V,
                  "aria-label": w.intl.string(w.t.BIYAqa),
                  children: (0, v.ud)({
                    channel: R,
                    channelName: G ? O : U,
                    guild: T,
                    inSidebar: !0,
                    handleContextMenu: (e) => {
                      (0, s.jW)(e, async () => {
                        let { default: e } = await l
                          .e("24783")
                          .then(l.bind(l, 439635));
                        return (n) =>
                          (0, a.jsx)(e, { ...n, channel: R, guild: T });
                      });
                    },
                    handleClick: () => {
                      let e = E.Z.getMessages(R.id);
                      if (H) {
                        (0, Z.uL)(y.Z5c.CHANNEL(R.guild_id, R.id)),
                          (0, m.C3)(R.guild_id, null);
                        return;
                      }
                      (0, Z.XU)(R.guild_id, R.id, e.jumpTargetId);
                    },
                  }),
                }),
                (0, a.jsx)("div", {
                  className: M.chat,
                  children: (0, a.jsx)(
                    k.Z,
                    { channel: R, guild: T, chatInputType: h.I.SIDEBAR },
                    n,
                  ),
                }),
              ],
            })
          : (0, a.jsx)(c.Z, { guild: T });
      }
    },
    644080: function (e, n, l) {
      var a = l(200651),
        i = l(192379),
        t = l(120356),
        r = l.n(t),
        s = l(442837),
        d = l(692547),
        c = l(481060),
        o = l(410030),
        u = l(565138),
        h = l(523751),
        m = l(637853),
        g = l(434404),
        x = l(159300),
        C = l(496675),
        f = l(709586),
        v = l(768581),
        I = l(981631),
        Z = l(388032),
        p = l(215966),
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
          ? (0, a.jsxs)(c.Button, {
              className: p.editButton,
              innerClassName: p.editButtonInner,
              type: "button",
              size: c.Button.Sizes.MEDIUM,
              color: c.Button.Colors.BRAND,
              onClick: l,
              children: [
                (0, a.jsx)(c.ImagePlusIcon, {
                  size: "xs",
                  color: d.Z.unsafe_rawColors.WHITE_500.css,
                }),
                Z.intl.string(Z.t.b0y3DA),
              ],
            })
          : (0, a.jsxs)(c.ShinyButton, {
              color: c.Button.Colors.GREEN,
              className: p.editButton,
              innerClassName: p.editButtonInner,
              onClick: l,
              children: [
                (0, a.jsx)(f.Z, { height: 16, width: 16 }),
                Z.intl.string(Z.t["+7XY39"]),
              ],
            });
      }
      let E = i.memo(function (e) {
        let { guild: n, titleClassName: i } = e,
          { homeHeaderImage: t, isHomeHeaderImageSet: d } = _(n),
          g = (0, m.b$)(n.id),
          f = (0, s.e7)([C.Z], () => (0, x.b)(C.Z, n)),
          v = (0, o.ZP)();
        return (0, a.jsxs)("div", {
          className: p.header,
          children: [
            (0, a.jsxs)("div", {
              className: p.headerArtWrapper,
              children: [
                (0, a.jsx)("div", {
                  className: r()(p.headerArt, { [p.headerArtPlaceholder]: !d }),
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
              className: p.titleWrapper,
              children: (0, a.jsxs)("div", {
                className: i,
                children: [
                  (0, a.jsx)(u.Z, {
                    className: p.headerIcon,
                    guild: n,
                    size: u.Z.Sizes.XLARGE,
                    active: !0,
                  }),
                  (0, a.jsx)(c.HeadingLevel, {
                    children: (0, a.jsxs)("div", {
                      className: p.headerName,
                      children: [
                        (0, a.jsx)(c.Heading, {
                          className: p.headerName,
                          variant: "heading-xxl/bold",
                          children: n.name,
                        }),
                        (0, a.jsx)(h.Z, {
                          size: 24,
                          guild: n,
                          tooltipPosition: "bottom",
                          tooltipColor: c.Tooltip.Colors.PRIMARY,
                        }),
                        f &&
                          (0, a.jsx)(c.Button, {
                            className: p.inviteButton,
                            size: c.Button.Sizes.MEDIUM,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () =>
                              (0, c.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([
                                  l.e("7654"),
                                  l.e("85683"),
                                ]).then(l.bind(l, 560114));
                                return (l) =>
                                  (0, a.jsx)(e, {
                                    ...l,
                                    guild: n,
                                    source: I.t4x.GUILD_HOME,
                                  });
                              }),
                            children: Z.intl.string(Z.t.VINpSE),
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
      var a = l(200651),
        i = l(192379),
        t = l(442837),
        r = l(749210),
        s = l(112724),
        d = l(923029),
        c = l(353926),
        o = l(931261),
        u = l(333323),
        h = l(430824);
      let m = (0, s.Z)(u.Z);
      n.default = function (e) {
        let { guildId: n } = e,
          l = (0, t.e7)([h.Z], () => h.Z.getGuild(n), [n]),
          s = (0, t.e7)([c.Z], () => c.Z.hasLoadedExperiments),
          u = (0, o.g)(n);
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
          return o;
        },
      });
      var a = l(200651);
      l(192379);
      var i = l(442837),
        t = l(325708),
        r = l(213557),
        s = l(433355),
        d = l(981631),
        c = l(176505);
      let o = 656;
      function u(e) {
        let { pageWidth: n, onSidebarResize: l } = e,
          u = (0, i.e7)([s.ZP], () => s.ZP.getSidebarState(c.oC.GUILD_HOME));
        if (null == u || null == u.channelId) return null;
        let h = n - d.PrS - o;
        return (0, a.jsx)(t.Z, {
          sidebarType: t.y.HomeSidebar,
          maxWidth: h,
          onWidthChange: l,
          children: (0, a.jsx)(r.Z, {
            channelId: u.channelId,
            baseChannelId: c.oC.GUILD_HOME,
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
        c = l(749210),
        o = l(131388),
        u = l(367907),
        h = l(644080),
        m = l(984370),
        g = l(6025),
        x = l(433355),
        C = l(626135),
        f = l(526120),
        v = l(563534),
        I = l(846121),
        Z = l(460347),
        p = l(404488),
        j = l(605276),
        N = l(869764),
        _ = l(919318),
        b = l(150512),
        E = l(981631),
        A = l(176505),
        S = l(388032),
        k = l(469085),
        y = l(784237);
      let w = p.q + 300 + 64,
        M = i.memo(function (e) {
          let { guild: n } = e;
          return (0, a.jsxs)(m.Z, {
            channelId: A.oC.GUILD_HOME,
            guildId: n.id,
            className: r()(k.title, k.background),
            innerClassname: k.headerBarInner,
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
          S = (0, s.e7)([x.ZP], () => x.ZP.getSection(A.oC.GUILD_HOME)),
          [P, B] = i.useState(!1),
          [H, R] = i.useState(E.$Y6),
          T = S === E.ULH.SIDEBAR_CHAT,
          L = (0, d.useFocusJumpSection)(),
          D = (0, s.e7)([v.Z], () => v.Z.getSettings(t.id)),
          W = null == D ? void 0 : D.welcomeMessage,
          U = (0, Z.Z)(t.id),
          z =
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
          G = (0, o.Z)("(max-width: 1300px)"),
          O = m - E.PrS - H,
          F = (T && O < w) || G || z;
        return (i.useEffect(() => {
          if (D === v.P) (0, f.cP)(t.id);
          else if (null != D) {
            var e, n, l, a, i;
            C.default.track(E.rMx.SERVER_GUIDE_VIEWED, {
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
            g.Z.closeChannelSidebar(A.oC.GUILD_HOME);
          },
          [],
        ),
        i.useEffect(() => {
          z && D !== v.P && c.Z.escapeToDefaultChannel(t.id);
        }, [t.id, z, D]),
        z)
          ? null
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: r()(y.chat, k.background, {
                    [y.threadSidebarOpen]: T,
                    [y.threadSidebarFloating]: T && P,
                  }),
                  children: [
                    (0, a.jsx)(M, { guild: t }),
                    (0, a.jsx)(d.AdvancedScrollerAuto, {
                      ...L,
                      children: (0, a.jsxs)("div", {
                        className: r()(k.homeContainer, {
                          [k.homeContainerCollapsed]: F,
                        }),
                        children: [
                          (0, a.jsx)("div", {
                            className: k.maxWidthWrapper,
                            children: (0, a.jsx)(h.Z, {
                              guild: t,
                              titleClassName: G ? k.emptyHeaderTitle : void 0,
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: r()(k.homeContent, k.maxWidthWrapper),
                            children: [
                              (0, a.jsxs)("div", {
                                className: k.mainContent,
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
                T
                  ? (0, a.jsx)(p.Z, {
                      pageWidth: m,
                      onSidebarResize: (e, n) => {
                        B(n), R(e);
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
        c = l(249842),
        o = l(838367),
        u = l(6025),
        h = l(592125),
        m = l(375954),
        g = l(496675),
        x = l(768581),
        C = l(526120),
        f = l(825334),
        v = l(981631),
        I = l(388032),
        Z = l(469085);
      let p = i.memo(function (e) {
          let { guild: n } = e,
            l = (0, t.e7)([o.Z], () => o.Z.getGuild(n.id), [n]);
          return (
            i.useEffect(() => {
              null == l && (0, c.P)(n.id);
            }, [n.id, l]),
            (0, a.jsx)("div", {
              className: Z.sidebarCardWrapper,
              children: (0, a.jsxs)("div", {
                className: Z.sidebarCard,
                children: [
                  (0, a.jsx)(r.Heading, {
                    className: Z.sidebarCardHeader,
                    variant: "heading-md/bold",
                    color: "header-primary",
                    children: I.intl.string(I.t["6YriCA"]),
                  }),
                  (0, a.jsx)(r.Text, {
                    className: Z.guildDescription,
                    variant: "text-md/normal",
                    color: "text-normal",
                    children: n.description,
                  }),
                  (0, a.jsx)("div", {
                    className: Z.guildInfo,
                    children:
                      (null == l ? void 0 : l.memberCount) != null &&
                      (null == l ? void 0 : l.presenceCount) != null &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("div", { className: Z.dotOnline }),
                          (0, a.jsx)(r.Text, {
                            className: Z.guildInfoText,
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: I.intl.format(I.t.QAdRCw, {
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
        }),
        j = (e) => {
          let { channelId: n, title: l, icon: c } = e,
            o = (0, t.e7)([h.Z], () => h.Z.getChannel(n)),
            f = (0, t.e7)([m.Z], () => m.Z.getMessages(n)),
            I = (0, t.e7)([g.Z], () => g.Z.can(v.Plq.VIEW_CHANNEL, o)),
            p = f.first(),
            j = (0, d.zy)(p, !1),
            N = (null == j ? void 0 : j.length) > 0 ? j[0] : null,
            _ =
              null != o &&
              null == p &&
              !f.loadingMore &&
              !f.ready &&
              !f.hasFetched &&
              I;
          i.useEffect(() => {
            _ && s.Z.fetchMessages({ channelId: n, after: n, limit: 5 });
          }, [n, _]);
          let b = (e) => {
            null != o &&
              (e.shiftKey
                ? (0, C.C3)(o.guild_id, o.id)
                : u.Z.openResourceChannelAsSidebar({
                    guildId: o.guild_id,
                    channelId: o.id,
                  }));
          };
          return (0, a.jsx)(
            r.Clickable,
            {
              className: Z.resourceChannel,
              onClick: (e) => b(e),
              children: (0, a.jsxs)(a.Fragment, {
                children: [
                  (() => {
                    let e = x.ZP.getResourceChannelIconURL({
                      channelId: n,
                      icon: c,
                    });
                    return null != c && null != e
                      ? (0, a.jsx)("img", {
                          src: e,
                          className: Z.resourceImage,
                          alt: "",
                          "aria-hidden": !0,
                        })
                      : null != N
                        ? (0, a.jsx)("img", {
                            className: Z.resourceImage,
                            src: N.src,
                            alt: N.alt,
                          })
                        : (0, a.jsx)("div", {
                            className: Z.placeholderImage,
                            children: (0, a.jsx)(r.PaperIcon, {
                              size: "xs",
                              color: "currentColor",
                            }),
                          });
                  })(),
                  (0, a.jsx)(r.Text, {
                    className: Z.guildInfoText,
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
        N = i.memo(function (e) {
          let { guild: n } = e,
            l = (0, f.Z)(n.id);
          return 0 === l.length
            ? null
            : (0, a.jsx)("div", {
                className: Z.sidebarCardWrapper,
                children: (0, a.jsxs)("div", {
                  className: Z.sidebarCard,
                  children: [
                    (0, a.jsx)(r.Heading, {
                      className: Z.sidebarCardHeader,
                      variant: "heading-md/bold",
                      color: "header-primary",
                      children: I.intl.string(I.t.xwY4LS),
                    }),
                    (0, a.jsx)("div", {
                      className: Z.resourceChannelsList,
                      children: l.map((e) =>
                        (0, a.jsx)(
                          j,
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
        _ = i.memo(function (e) {
          let { guild: n, isNewMember: l } = e;
          return (0, a.jsxs)("aside", {
            className: Z.sidebar,
            children: [
              (0, a.jsx)(p, { guild: n }),
              l && (0, a.jsx)(N, { guild: n }),
            ],
          });
        });
      n.Z = _;
    },
    869764: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return w;
        },
        k: function () {
          return k;
        },
      }),
        l(789020);
      var a = l(200651),
        i = l(192379),
        t = l(442837),
        r = l(481060),
        s = l(933557),
        d = l(471445),
        c = l(905362),
        o = l(353093),
        u = l(979264),
        h = l(937111),
        m = l(592125),
        g = l(271383),
        x = l(430824),
        C = l(496675),
        f = l(186523),
        v = l(768581),
        I = l(630388),
        Z = l(526120),
        p = l(563534),
        j = l(846121),
        N = l(305762),
        _ = l(981631),
        b = l(308083),
        E = l(372897),
        A = l(388032),
        S = l(571413);
      function k(e) {
        let {
            title: n,
            emojiId: l,
            emojiName: i,
            icon: t,
            completed: s,
            Icon: d,
            ...c
          } = e,
          o = "channel" === c.variant ? c.channelId : null,
          u = "static" === c.variant ? c.subtitle : c.channelName,
          h =
            null != o
              ? v.ZP.getNewMemberActionIconURL({ channelId: o, icon: t })
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
              : (0, a.jsx)(f.Z, {
                  className: S.checkCircle,
                  width: 24,
                  height: 24,
                }),
          ],
        });
      }
      function y(e) {
        var n;
        let { action: l, completed: c } = e,
          { channelId: o, title: u, emoji: h, icon: g } = l,
          { id: x, name: f } = null != h ? h : {},
          v = (0, t.e7)([m.Z], () => m.Z.getChannel(o)),
          I = (0, s.ZP)(v, !0),
          p = (0, t.e7)([C.Z], () => C.Z.can(_.Plq.VIEW_CHANNEL, v)),
          j = i.useCallback(() => {
            if (null == v) return null;
            (0, Z.gp)(v.guild_id, v.id);
          }, [v]);
        if (null == v || !p) return null;
        let N = null !== (n = (0, d.KS)(v)) && void 0 !== n ? n : r.TextIcon;
        return (0, a.jsx)(r.Clickable, {
          className: S.clickableAction,
          onClick: j,
          children: (0, a.jsx)(k, {
            variant: "channel",
            channelId: o,
            title: u,
            channelName: I,
            emojiId: x,
            emojiName: f,
            icon: g,
            completed: c,
            Icon: N,
          }),
        });
      }
      function w(e) {
        var n;
        let { guildId: l } = e,
          s = (0, t.e7)([p.Z], () => p.Z.getNewMemberActions(l), [l]),
          d = (0, t.e7)([j.Z], () => j.Z.getCompletedActions(l)),
          m = (0, t.e7)([g.ZP], () => g.ZP.getSelfMember(l)),
          C = (0, t.e7)([x.Z], () => x.Z.getGuild(l)),
          f =
            null != C
              ? (0, o.ky)(
                  C.id,
                  null === (n = C.clan) || void 0 === n ? void 0 : n.badge,
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
              E.q.STARTED_HOME_ACTIONS,
            ) &&
            (0, Z.Fg)(l);
        }, [d, l, null == m ? void 0 : m.flags]);
        let N = i.useCallback(() => {
          null != C &&
            null != C.rulesChannelId &&
            (0, Z.gp)(C.id, C.rulesChannelId);
        }, [C]);
        return null == m || null == s || 0 === s.length
          ? null
          : (0, a.jsxs)("div", {
              className: S.container,
              children: [
                (0, a.jsx)(r.Heading, {
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children: A.intl.string(A.t.LhlgY2),
                }),
                (null == C ? void 0 : C.hasFeature(_.oNc.CLAN)) &&
                  null != f &&
                  (0, a.jsx)(r.Clickable, {
                    className: S.clickableAction,
                    onClick: () =>
                      (0, c.CK)(l, null == v ? void 0 : v.joinRequestId),
                    children: (0, a.jsxs)("div", {
                      className: S.action,
                      children: [
                        (0, a.jsx)("div", {
                          className: S.tagIconContainer,
                          children: (0, a.jsx)(u.KQ, {
                            src: f,
                            size: b.NC.SIZE_16,
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: S.actionInfo,
                          children: (0, a.jsx)(r.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: A.intl.string(A.t.MNhFER),
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
                (null == C ? void 0 : C.rulesChannelId) != null &&
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
                          children: A.intl.string(A.t["K/i3iY"]),
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
      var a = l(200651),
        i = l(192379),
        t = l(120356),
        r = l.n(t),
        s = l(442837),
        d = l(481060),
        c = l(904245),
        o = l(368844),
        u = l(73315),
        h = l(454585),
        m = l(406432),
        g = l(169525),
        x = l(524444),
        C = l(703656),
        f = l(6025),
        v = l(695346),
        I = l(592125),
        Z = l(984933),
        p = l(375954),
        j = l(496675),
        N = l(451478),
        _ = l(768581),
        b = l(526120),
        E = l(689981),
        A = l(825334),
        S = l(981631),
        k = l(388032),
        y = l(147715),
        w = l(554034),
        M = l(931057);
      function P(e) {
        let n,
          l,
          { firstMedia: i, channelId: t } = e,
          d = (0, s.e7)([I.Z], () => I.Z.getChannel(t)),
          [c, o] = (0, g.hL)({ media: i, channel: d }),
          h = (0, g.MC)(o),
          C = (0, s.e7)([N.Z], () => N.Z.isFocused()),
          f = (0, m.d$)(i.src),
          Z = v.QK.useSetting(),
          { src: p, width: j, height: _, alt: b } = i;
        return (
          _ > j ? (l = 72) : (n = 72),
          (0, a.jsxs)("div", {
            className: y.media,
            children: [
              (0, x.Yi)({
                src: p,
                maxHeight: n,
                maxWidth: l,
                width: j,
                height: _,
                alt: null != b && c && null != h ? h : b,
                autoPlay: Z,
                animated: f && !c && C,
                containerClassName: y.thumbnailContainer,
                imageClassName: r()({ [y.obscured]: c }),
              }),
              c &&
                (0, a.jsx)(u.Z, {
                  obscureReason: o,
                  iconClassname: y.obscuredTag,
                }),
            ],
          })
        );
      }
      function B(e) {
        let { resource: n } = e,
          l = (0, s.e7)([I.Z], () => I.Z.getChannel(n.channelId)),
          t = (0, s.e7)([p.Z], () => p.Z.getMessages(n.channelId)),
          u = (0, s.e7)([j.Z], () => j.Z.can(S.Plq.VIEW_CHANNEL, l)),
          m = t.first(),
          g = (0, E.Z)(m),
          x = (0, o.zy)(m, !1),
          C = (null == x ? void 0 : x.length) > 0 ? x[0] : null,
          v =
            null != l &&
            null == t.first() &&
            !t.loadingMore &&
            !t.ready &&
            !t.hasFetched &&
            u;
        i.useEffect(() => {
          v &&
            c.Z.fetchMessages({
              channelId: n.channelId,
              after: n.channelId,
              limit: 5,
            });
        }, [n.channelId, v]);
        if (null == l || null == l.guild_id) return null;
        let Z = _.ZP.getResourceChannelIconURL({
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
                : f.Z.openResourceChannelAsSidebar({
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
                    className: r()(y.messageContent, w.markup),
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
            null != n.icon && null != Z
              ? (0, a.jsx)("div", {
                  className: y.media,
                  children: (0, a.jsx)("img", {
                    src: Z,
                    className: y.__invalid_thumbnail,
                    width: 72,
                    height: 72,
                    alt: "",
                    "aria-hidden": !0,
                  }),
                })
              : null,
            null == Z && null != C
              ? (0, a.jsx)(P, { firstMedia: C, channelId: n.channelId })
              : null,
          ],
        });
      }
      function H(e) {
        let { guild: n, isNewMember: l } = e,
          i = (0, A.Z)(n.id);
        if (0 === i.length)
          return l
            ? null
            : (0, a.jsxs)("div", {
                className: y.emptyContainer,
                children: [
                  (0, a.jsx)(d.Heading, {
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    children: k.intl.string(k.t.owvC9f),
                  }),
                  (0, a.jsx)("img", {
                    className: y.emptyStateImage,
                    src: M,
                    alt: "",
                  }),
                  (0, a.jsx)(d.Button, {
                    className: y.emptyStateButton,
                    onClick: () => {
                      let e = Z.ZP.getDefaultChannel(n.id);
                      null != e && (0, C.uL)(S.Z5c.CHANNEL(n.id, e.id));
                    },
                    fullWidth: !0,
                    children: k.intl.string(k.t["3iCBUl"]),
                  }),
                ],
              });
        return (0, a.jsxs)("div", {
          className: y.container,
          children: [
            (0, a.jsx)(d.Heading, {
              variant: "heading-lg/bold",
              color: "header-primary",
              children: k.intl.string(k.t.xwY4LS),
            }),
            i.map((e) => (0, a.jsx)(B, { resource: e }, e.channelId)),
          ],
        });
      }
    },
    150512: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return N;
        },
      });
      var a = l(200651),
        i = l(192379),
        t = l(120356),
        r = l.n(t),
        s = l(866442),
        d = l(399606),
        c = l(481060),
        o = l(749210),
        u = l(410030),
        h = l(607070),
        m = l(603368),
        g = l(687158),
        x = l(576635),
        C = l(484459),
        f = l(502762),
        v = l(430824),
        I = l(594174),
        Z = l(5192),
        p = l(51144),
        j = l(36766);
      function N(e) {
        let { guildId: n, welcomeMessage: l, className: t } = e,
          N = (0, d.e7)([v.Z], () => v.Z.getGuild(n)),
          _ = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
          b = (0, d.e7)([I.default], () =>
            I.default.getUser(null == l ? void 0 : l.authorIds[0]),
          ),
          E = (0, d.e7)([I.default], () => I.default.getCurrentUser()),
          A = (0, g.ZP)(null == b ? void 0 : b.id, n),
          { theme: S, primaryColor: k } = (0, x.Z)({
            user: b,
            displayProfile: A,
          }),
          y = (0, u.ZP)(),
          w = (0, c.useToken)(c.tokens.colors.BACKGROUND_SECONDARY, S).hex(),
          M = i.useMemo(() => {
            var e;
            return null !== (e = null == l ? void 0 : l.authorIds) &&
              void 0 !== e
              ? e
              : [];
          }, [l]);
        i.useEffect(() => {
          o.Z.requestMembersById(n, M);
        }, [n, M]),
          i.useEffect(() => {
            null != b && (0, C.Z)(b.id, b.getAvatarURL(n, 48), { guildId: n });
          }, [b, n]);
        let P = (0, p._T)(E),
          B = null != k ? (0, s.br)(k, 1) : w,
          H = (0, m.$0)(B);
        if (null == b || null == E || null == l) return null;
        let R = null != N && N.ownerId === b.id;
        return (0, a.jsx)("div", {
          className: r()(j.welcomeMessageContainer, t),
          children: (0, a.jsxs)(f.Z, {
            className: j.welcomeMessageProfileContainer,
            user: b,
            displayProfile: A,
            profileType: null,
            themeOverride: y,
            forceShowPremium: !0,
            children: [
              (0, a.jsx)("div", { className: j.avatarBackground }),
              _
                ? (0, a.jsx)(c.Avatar, {
                    src: b.getAvatarURL(n, 48),
                    size: c.AvatarSizes.SIZE_48,
                    className: j.avatar,
                    "aria-label": b.username,
                  })
                : (0, a.jsx)(c.AnimatedAvatar, {
                    src: b.getAvatarURL(n, 48),
                    size: c.AvatarSizes.SIZE_48,
                    className: j.avatar,
                    "aria-label": b.username,
                  }),
              (0, a.jsx)("div", {
                className: j.avatarBorder,
                style: { backgroundColor: B },
              }),
              (0, a.jsxs)("div", {
                className: j.welcomeMessageContent,
                style: { color: H.hex() },
                children: [
                  (0, a.jsxs)("div", {
                    className: j.adminUsernameContainer,
                    children: [
                      (0, a.jsx)(c.Text, {
                        variant: "text-sm/semibold",
                        color: "currentColor",
                        children: Z.ZP.getName(n, null, b),
                      }),
                      R
                        ? (0, a.jsx)(c.CrownIcon, {
                            size: "md",
                            color: "currentColor",
                            className: j.ownerIcon,
                          })
                        : null,
                    ],
                  }),
                  (0, a.jsx)(c.Text, {
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
                                  ? (0, a.jsx)(c.Text, {
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
                      null == l ? void 0 : l.message,
                      null != P ? P : E.username,
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    215966: function (e, n, l) {
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
    469085: function (e, n, l) {
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
    571413: function (e, n, l) {
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
    147715: function (e, n, l) {
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
    36766: function (e, n, l) {
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
//# sourceMappingURL=fca9d25b86f14f29b69b.js.map
