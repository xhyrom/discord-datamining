"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67455"],
  {
    744050: function (e) {
      e.exports = "/assets/45485d7fb82075646f32.svg";
    },
    129512: function (e) {
      e.exports = "/assets/04f1e61a6726a54518ee.svg";
    },
    330065: function (e) {
      e.exports = "/assets/4c698a6babb08607f4af.svg";
    },
    995648: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = a(735250);
      a(470079);
      var t = a(120356),
        r = a.n(t),
        l = a(481060),
        s = a(422559),
        o = a(594045);
      function c(e) {
        let {
          grantedPermissions: n,
          disabledPermissions: a,
          grantedPermissionsHeader: t,
          disabledPermissionsHeader: c,
          className: d,
        } = e;
        return (0, i.jsxs)("div", {
          className: r()(o.list, d),
          children: [
            null != n && n.length > 0
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    null != t
                      ? (0, i.jsx)(l.FormTitle, {
                          className: o.permissionHeader,
                          children: t,
                        })
                      : null,
                    (0, i.jsx)("div", {
                      className: o.container,
                      children: n.map((e) =>
                        (0, i.jsxs)(
                          "div",
                          {
                            className: o.permission,
                            children: [
                              (0, i.jsx)(l.CheckmarkLargeIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: o.check,
                              }),
                              (0, i.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: (0, s.wt)(e),
                              }),
                            ],
                          },
                          e.toString(),
                        ),
                      ),
                    }),
                  ],
                })
              : null,
            null != a && a.length > 0
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    null != c
                      ? (0, i.jsx)(l.FormTitle, {
                          className: o.permissionHeader,
                          children: c,
                        })
                      : null,
                    (0, i.jsx)("div", {
                      className: o.container,
                      children: a.map((e) =>
                        (0, i.jsxs)(
                          "div",
                          {
                            className: o.permission,
                            children: [
                              (0, i.jsx)(l.XSmallIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: o.cross,
                              }),
                              (0, i.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: (0, s.wt)(e),
                              }),
                            ],
                          },
                          e.toString(),
                        ),
                      ),
                    }),
                  ],
                })
              : null,
          ],
        });
      }
    },
    4461: function (e, n, a) {
      a.d(n, {
        P: function () {
          return r;
        },
      });
      var i = a(470079),
        t = a(135431);
      function r(e, n) {
        let a = i.useMemo(
          () =>
            null != e &&
            (0, t.E)({
              customInstallUrl: e.custom_install_url,
              installParams: e.install_params,
              integrationTypesConfig: e.integration_types_config,
            }),
          [e],
        );
        return {
          canInstall: a,
          install: i.useCallback(
            (a) => {
              if (null != e)
                (0, t.L)({
                  applicationId: e.id,
                  customInstallUrl: e.custom_install_url,
                  installParams: e.install_params,
                  integrationTypesConfig: e.integration_types_config,
                  guildId: null != n ? n : void 0,
                  source: a,
                });
            },
            [e, n],
          ),
        };
      }
    },
    744142: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = a(735250),
        t = a(470079),
        r = a(481060),
        l = a(768581),
        s = a(924489),
        o = a(950854),
        c = a(491576),
        d = a(169909);
      function u(e) {
        var n, a, u, _, m;
        let {
            application: p,
            className: g,
            childrenClassName: I,
            animatesOnHover: h,
            onClick: v,
            ...x
          } = e,
          f = l.ZP.getApplicationIconURL({ id: p.id, icon: p.icon, size: 48 }),
          C = (0, c.Z)({ application: p }),
          E = null === (n = p.categories) || void 0 === n ? void 0 : n[0],
          P =
            (null !==
              (_ =
                null === (a = p.directory_entry) || void 0 === a
                  ? void 0
                  : a.guild_count) && void 0 !== _
              ? _
              : 0) > 0 || C.length > 0,
          R = t.useCallback(() => {
            v({ mutualGuilds: C });
          }, [v, C]),
          b = (0, i.jsx)(s.Z, {
            application: p,
            textVariant: "text-xs/normal",
            mutualGuilds: C,
            mutualGuildShownMax: 3,
            guildIconSize: s.x.SMALL,
            compact: !0,
          });
        return (0, i.jsxs)(o.Z, {
          className: g,
          onClick: R,
          iconSrc: f,
          header: p.name,
          subheader:
            null != E &&
            (0, i.jsx)(r.Text, {
              tag: "span",
              color: "header-secondary",
              variant: "text-xs/normal",
              children: E.name,
            }),
          animatesOnHover: h,
          ...x,
          children: [
            (null != p.description || null != I) &&
              (0, i.jsx)("div", {
                className: I,
                children: (0, i.jsx)(r.Text, {
                  className: d.listingDescription,
                  variant: "text-sm/normal",
                  lineClamp: 2,
                  children:
                    null !==
                      (m =
                        null === (u = p.directory_entry) || void 0 === u
                          ? void 0
                          : u.short_description) && void 0 !== m
                      ? m
                      : p.description,
                }),
              }),
            P &&
              (0, i.jsx)("div", {
                className: d.bottomGuildCountContainer,
                children: b,
              }),
          ],
        });
      }
    },
    576958: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = a(735250);
      a(470079);
      var t = a(481060),
        r = a(463571),
        l = a(744142),
        s = a(981631),
        o = a(689938),
        c = a(558562);
      function d(e) {
        let {
          applications: n,
          className: a,
          listingClassName: l,
          title: d,
          showViewAll: _,
          onViewOne: m,
          onViewAll: p,
        } = e;
        return (0, i.jsxs)("div", {
          className: a,
          children: [
            null != d
              ? (0, i.jsxs)("div", {
                  className: c.header,
                  children: [
                    (0, i.jsx)(t.Heading, {
                      variant: "heading-lg/semibold",
                      children: d,
                    }),
                    _
                      ? (0, i.jsx)(t.Button, {
                          look: t.Button.Looks.LINK,
                          color: t.Button.Colors.LINK,
                          onClick: p,
                          children:
                            o.Z.Messages.APP_DIRECTORY_LISTING_VIEW_ALL_BUTTON,
                        })
                      : null,
                  ],
                })
              : null,
            (0, i.jsx)("ul", {
              className: c.list,
              children: n.map((e) =>
                (0, i.jsx)(
                  r.Z,
                  {
                    href: s.Z5c.APPLICATION_DIRECTORY_PROFILE(e.id),
                    children: (0, i.jsx)(u, {
                      className: l,
                      application: e,
                      onClick: (n) => {
                        let { mutualGuilds: a } = n;
                        return m({ application: e, mutualGuilds: a });
                      },
                    }),
                  },
                  e.id,
                ),
              ),
            }),
          ],
        });
      }
      function u(e) {
        return (0, i.jsx)(l.Z, { ...e });
      }
    },
    950854: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = a(735250);
      a(470079);
      var t = a(120356),
        r = a.n(t),
        l = a(481060),
        s = a(689938),
        o = a(882089);
      function c(e) {
        let {
            className: n,
            onClick: a,
            imageSrc: t,
            iconSrc: c,
            header: d,
            headerClassName: u,
            subheaderVariant: _ = "text-sm/normal",
            subheader: m,
            children: p,
            animatesOnHover: g,
            ...I
          } = e,
          h = null != t,
          v = (0, i.jsxs)(i.Fragment, {
            children: [
              h &&
                (0, i.jsx)("div", {
                  className: o.imageContainer,
                  children: (0, i.jsx)("img", {
                    alt: "",
                    className: o.image,
                    src: t,
                  }),
                }),
              (0, i.jsxs)("div", {
                className: o.textContainer,
                children: [
                  (0, i.jsxs)("div", {
                    className: r()(o.topRowContainer),
                    children: [
                      null != c &&
                        (0, i.jsx)("img", {
                          className: o.icon,
                          alt: "",
                          "aria-hidden": !0,
                          src: c,
                          width: 48,
                          height: 48,
                        }),
                      (0, i.jsxs)("div", {
                        className: o.headerContainer,
                        children: [
                          (0, i.jsx)(l.Heading, {
                            variant: "heading-md/medium",
                            className: u,
                            children: d,
                          }),
                          null != m &&
                            (0, i.jsx)(l.Text, {
                              className: o.subheader,
                              color: "header-secondary",
                              variant: _,
                              children: m,
                            }),
                        ],
                      }),
                    ],
                  }),
                  p,
                ],
              }),
            ],
          }),
          x = r()(n, o.container, { [o.hasImage]: h });
        return null != a
          ? (0, i.jsx)(l.ClickableContainer, {
              tag: "article",
              "aria-label":
                s.Z.Messages.APP_DIRECTORY_LISTING_CARD_BUTTON_A11Y_LABEL.format(
                  { name: d },
                ),
              onClick: a,
              className: r()(x, o.clickable, {
                [o.animatesOnHoverContainer]: g,
              }),
              focusProps: { offset: 4 },
              children: v,
            })
          : (0, i.jsx)("article", { className: x, ...I, children: v });
      }
    },
    409425: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = a(735250);
      a(470079);
      var t = a(120356),
        r = a.n(t),
        l = a(481060),
        s = a(377171),
        o = a(689938),
        c = a(274679);
      function d(e) {
        let { className: n, ...a } = e;
        return (0, i.jsx)(l.TextBadge, {
          ...a,
          text: o.Z.Messages.APP_DIRECTORY_PARTNER,
          color: s.Z.BACKGROUND_TERTIARY,
          className: r()(n, c.partnerBadge),
        });
      }
    },
    753450: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return eP;
          },
        }),
        a(47120),
        a(315314),
        a(610138),
        a(216116),
        a(78328),
        a(815648),
        a(789020),
        a(653041);
      var i = a(735250),
        t = a(470079),
        r = a(120356),
        l = a.n(r),
        s = a(525654),
        o = a.n(s),
        c = a(302454),
        d = a.n(c),
        u = a(873546),
        _ = a(149765),
        m = a(468194),
        p = a(442837),
        g = a(692547),
        I = a(477690),
        h = a(481060),
        v = a(995648),
        x = a(445986),
        f = a(9807),
        C = a(911969),
        E = a(330726),
        P = a(782568),
        R = a(607070),
        b = a(581364),
        A = a(970321),
        N = a(283836),
        T = a(220082),
        j = a(252618),
        S = a(299206),
        O = a(241209),
        L = a(422559),
        y = a(703656),
        D = a(280885),
        M = a(706454),
        Z = a(314897),
        k = a(451478),
        B = a(626135),
        w = a(768581),
        G = a(572004),
        H = a(823379),
        F = a(900849),
        Y = a(674588),
        U = a(264043),
        W = a(303383),
        V = a(887706),
        z = a(738130),
        K = a(4461),
        q = a(34674),
        X = a(576958),
        J = a(924489),
        Q = a(125909),
        $ = a(409425),
        ee = a(132871),
        en = a(147890),
        ea = a(491576),
        ei = a(527564),
        et = a(326135),
        er = a(940064),
        el = a(626004),
        es = a(939893),
        eo = a(430913),
        ec = a(606183),
        ed = a(272242),
        eu = a(981631),
        e_ = a(558921),
        em = a(689938),
        ep = a(613250),
        eg = a(902294);
      let eI = d().parserFor(es.Z),
        eh = d().reactFor(d().ruleOutput(es.Z, "react")),
        ev = (0, m.Mg)(I.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
        ex = "redirect_to_support_server",
        ef = "start_application_install",
        eC = (e) =>
          ""
            .concat(location.protocol, "//")
            .concat(location.host)
            .concat(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(e)),
        eE = (e) => {
          if (null == e) return null;
          let n = e.match(
            /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
          );
          return null != n ? n[1] : null;
        };
      function eP(e) {
        var n, r, s, c;
        let d,
          {
            match: {
              params: {
                applicationId: m,
                section: g = ed.ApplicationDirectoryProfileSections.GENERAL,
              },
            },
          } = e,
          I = (0, ee.useApplicationDirectoryHistory)((e) => e.guildId),
          C = (0, V.Z)(),
          R = (0, p.e7)(
            [W.Z],
            () =>
              W.Z.getFetchState({ applicationId: m, guildId: I }) ===
              W.M.FETCHING,
          ),
          T = t.useRef({ applicationId: void 0, guildId: void 0 }),
          { similarApplications: es, similarLoadId: eE } = (0, p.cj)(
            [W.Z],
            () => {
              let e = { applicationId: m, guildId: I },
                n = W.Z.getSimilarApplications(e);
              return (
                null == n
                  ? (n = W.Z.getSimilarApplications(T.current))
                  : (T.current = e),
                {
                  similarApplications: null == n ? void 0 : n.applications,
                  similarLoadId: null == n ? void 0 : n.loadId,
                }
              );
            },
          ),
          eP = t.useMemo(() => (null == es ? void 0 : es.slice(0, 3)), [es]),
          eA = (0, p.e7)([U.Z], () => U.Z.getApplicationFetchState(m)),
          [eT, ej] = t.useState(void 0),
          eS = t.useCallback(
            (e) => {
              if (null != m) {
                if (e === ed.ApplicationDirectoryProfileSections.GENERAL) {
                  (0, en.replaceAppDirectoryURLWith)(
                    eu.Z5c.APPLICATION_DIRECTORY_PROFILE(m),
                  );
                  return;
                }
                (0, en.replaceAppDirectoryURLWith)(
                  eu.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(m, e),
                );
              }
            },
            [m],
          ),
          eO = (0, p.e7)([k.Z], () => k.Z.isFocused()),
          eL = (0, p.e7)([M.default], () => M.default.locale),
          ey = t.useRef(m),
          eD = (0, p.e7)([U.Z], () => {
            let e = U.Z.getApplication(m);
            return (
              null == e
                ? (e = U.Z.getApplication(ey.current))
                : (ey.current = m),
              e
            );
          }),
          eM = (0, ea.Z)({ application: eD }),
          eZ = (0, p.e7)([Z.default], () => Z.default.getSessionId());
        (0, j.Tt)({ location: null == eD ? void 0 : eD.name });
        let ek = t.useCallback(async () => {
          try {
            var e;
            let n =
              null == eD
                ? void 0
                : null === (e = eD.guild) || void 0 === e
                  ? void 0
                  : e.id;
            if (null != n) {
              (null == eD ? void 0 : eD.id) != null &&
                B.default.track(eu.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                  application_id: eD.id,
                  guild_id: n,
                });
              let e = { page: eu.ZY5.APPLICATION_DIRECTORY };
              await (0, F.Ub)(n, e, { setsHistorySnapshot: !1 });
            }
          } catch {}
        }, [eD]);
        t.useEffect(() => {
          if (null == eD) return;
          let e = new URL(location.href);
          if (C && null != eZ && "true" === e.searchParams.get(ex)) {
            e.searchParams.delete(ex);
            let n = e.pathname + e.search;
            (0, y.dL)(n), ek();
          }
        }, [C, ek, eZ, eD]);
        let eB = t.useCallback(() => {
            var e;
            null !=
              (null == eD
                ? void 0
                : null === (e = eD.guild) || void 0 === e
                  ? void 0
                  : e.id) && (C ? ek() : (0, q.rf)({ [ex]: "true" }));
          }, [eD, C, ek]),
          ew = t.useCallback(() => {
            (0, en.replaceAppDirectoryURLWith)(
              ""
                .concat(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(m))
                .concat(location.search),
            );
          }, [m]);
        t.useEffect(() => {
          g === ed.ApplicationDirectoryProfileSections.GENERAL && ew();
        }, [ew, g]),
          t.useEffect(() => {
            null != m && Y.i6(m);
          }, [m]),
          t.useEffect(() => {
            if ((null == eD ? void 0 : eD.directory_entry) != null) {
              let e = eD.directory_entry,
                n = null == e ? void 0 : e.popular_application_commands;
              null != n
                ? ej(
                    n.map((e) =>
                      (0, b.Z8)({
                        rootCommand: e,
                        command: e,
                        applicationId: e.application_id,
                      }),
                    ),
                  )
                : ej(void 0);
            }
          }, [eD]);
        let eG = w.ZP.getApplicationIconURL({
            id:
              null !== (s = null == eD ? void 0 : eD.id) && void 0 !== s
                ? s
                : "-1",
            icon: null == eD ? void 0 : eD.icon,
            size: ev,
          }),
          eH = (0, S.Z)({
            id:
              null !== (c = null == eD ? void 0 : eD.id) && void 0 !== c
                ? c
                : "",
            label: em.Z.Messages.COPY_ID_APPLICATION,
          }),
          { canInstall: eF, install: eY } = (0, K.P)(eD, I),
          eU =
            null === (n = (0, ee.getPreviousView)()) || void 0 === n
              ? void 0
              : n.type;
        t.useEffect(() => {
          (null == eD ? void 0 : eD.id) != null &&
            B.default.track(eu.rMx.APP_DIRECTORY_PAGE_VIEWED, {
              current_page: "product",
              previous_page: eU,
              application_id: eD.id,
              guild_id: I,
              shown_mutual_guilds_count: eM.length,
              profile_section: g,
              referrer: document.referrer,
            });
        }, [null == eD ? void 0 : eD.id, I, eM]);
        let eW = t.useMemo(() => {
            var e;
            let n =
              null == eD
                ? void 0
                : null === (e = eD.install_params) || void 0 === e
                  ? void 0
                  : e.permissions;
            if (null != n) return L.VY.filter((e) => _.e$(_.vB(n), e));
          }, [
            null == eD
              ? void 0
              : null === (r = eD.install_params) || void 0 === r
                ? void 0
                : r.permissions,
          ]),
          eV = t.useCallback(
            (e) => {
              eS(e),
                (null == eD ? void 0 : eD.id) != null &&
                  B.default.track(eu.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                    application_id: eD.id,
                    guild_id: I,
                    tab_name: e,
                  });
            },
            [null == eD ? void 0 : eD.id, I, eS],
          ),
          ez = t.useMemo(() => {
            var e, n, a;
            return null !==
              (a = (
                null !==
                  (n =
                    null == eD
                      ? void 0
                      : null === (e = eD.directory_entry) || void 0 === e
                        ? void 0
                        : e.carousel_items) && void 0 !== n
                  ? n
                  : []
              )
                .map(eR)
                .filter(H.lm)) && void 0 !== a
              ? a
              : [];
          }, [eD]),
          eK = t.useCallback(
            (e, n) => {
              if (e.type === eu.s9s.IMG) {
                let n = ez.filter((e) => e.type === eu.s9s.IMG),
                  t = n.findIndex((n) => n === e);
                if (t < 0) return;
                let r = n.map((e) => ({
                  src: (0, x.Q)(e.src),
                  width: e.width,
                  height: e.height,
                }));
                (0, h.openModalLazy)(async () => {
                  let { default: e } = await a
                    .e("41814")
                    .then(a.bind(a, 895023));
                  return (n) => {
                    let { ...a } = n;
                    return (0, i.jsx)(e, {
                      ...a,
                      items: r,
                      startingIndex: t,
                      modalCarouselItemClassName: ep.appSlide,
                    });
                  };
                });
              }
            },
            [ez],
          ),
          eq = t.useCallback(
            (e) => {
              (null == eD ? void 0 : eD.id) != null &&
                B.default.track(eu.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                  current_page: "product",
                  category: e.name,
                  category_id: e.id,
                  application_id: eD.id,
                  guild_id: I,
                }),
                (0, en.goToCategory)({ categoryId: e.id });
            },
            [eD, I],
          );
        t.useEffect(() => {
          if (null != m) Y.T4({ applicationId: m, guildId: I });
        }, [m, I]);
        let eX = t.useCallback(
            (e) => {
              let { application: n, mutualGuilds: a } = e;
              (null == eD ? void 0 : eD.id) != null &&
                B.default.track(eu.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                  current_page: "product",
                  application_id: eD.id,
                  suggested_application_id: n.id,
                  load_id: eE,
                  guild_id: I,
                  shown_mutual_guilds_count: a.length,
                }),
                (0, en.goToApplication)({ applicationId: n.id });
            },
            [null == eD ? void 0 : eD.id, eE, I],
          ),
          eJ = t.useCallback(() => {
            null != eD &&
              (0, P.Z)((0, et.G)({ id: eD.id, name: eD.name, locale: eL }));
          }, [eL, eD]),
          eQ = t.useCallback(
            (e) =>
              (0, i.jsxs)(h.Menu, {
                navId: "application-directory-profile",
                "aria-label":
                  em.Z.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
                onClose: e,
                onSelect: void 0,
                children: [
                  (0, i.jsx)(h.MenuGroup, {
                    children: (0, i.jsx)(h.MenuItem, {
                      id: "report",
                      label: em.Z.Messages.REPORT_APP,
                      color: "danger",
                      action: eJ,
                    }),
                  }),
                  null != eH ? (0, i.jsx)(h.MenuGroup, { children: eH }) : null,
                ],
              }),
            [eH, eJ],
          ),
          [e$, e0] = (0, E.Z)(!1, 1e3),
          e6 = t.useCallback(() => {
            if (null != eD)
              B.default.track(eu.rMx.APP_SHARE_BUTTON_CLICKED, {
                source: "product_page",
                application_id: eD.id,
                guild_id: I,
              }),
                (0, G.JG)(eC(eD.id)),
                e0(!0);
          }, [eD, e0, I]);
        t.useEffect(() => {
          let e = new URL(location.href);
          if (C && "true" === e.searchParams.get(ef)) {
            e.searchParams.delete(ef);
            let n = e.pathname + e.search;
            (0, y.dL)(n), eY("product_page");
          }
        }, [C, eY]);
        let e1 = t.useCallback(() => {
            null != eD &&
              (C
                ? eY("product_page")
                : (B.default.track(eu.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: m,
                    guild_id: I,
                    auth_type:
                      null != eD.custom_install_url ? "custom_url" : "in_app",
                    source: "product_page",
                    device_platform: u.tq ? "mobile_web" : "desktop_web",
                  }),
                  (0, q.rf)({ [ef]: "true" })));
          }, [eD, C, eY, m, I]),
          e5 = (null == eD ? void 0 : eD.id) === e_.g,
          [e8, e2] = t.useState(!1),
          [e3, e4] = t.useState(!1),
          [e9, e7] = t.useState(!0),
          ne = (e) => {
            null != e && e2(e.scrollHeight > e.clientHeight);
          },
          nn = null != eW && eW.length > 0,
          na = (null == eD ? void 0 : eD.flags) != null,
          ni = (0, A.R)(null != m ? m : "");
        t.useEffect(() => {
          ni && null != m && (0, N.Z)(m);
        }, [ni, m]);
        let nt = t.useMemo(() => {
            let e = [],
              n = !0;
            switch (g) {
              case ed.ApplicationDirectoryProfileSections.GENERAL: {
                var a, t;
                let r =
                  null == eD
                    ? void 0
                    : null === (a = eD.directory_entry) || void 0 === a
                      ? void 0
                      : a.detailed_description;
                null != r && r.length > 0
                  ? (e.push(
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(h.Heading, {
                            className: ep.sectionHeader,
                            variant: "heading-md/semibold",
                            children:
                              em.Z.Messages
                                .APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING,
                          }),
                          (0, i.jsx)("div", {
                            ref: ne,
                            className: l()({
                              [ep.descriptionClamp]: !e3,
                              [ep.descriptionClampSafari]:
                                !e3 && "Safari" === o().name,
                            }),
                            children: (0, i.jsx)(O.Z, {
                              className: ep.detailedDescription,
                              parser: eI,
                              output: eh,
                              state: { allowLinks: !0 },
                              children: r,
                            }),
                          }),
                          (e8 || e3) &&
                            (0, i.jsx)(eb, {
                              isViewAll: e3,
                              onToggle: () => {
                                e4((e) => !e);
                              },
                            }),
                        ],
                      }),
                    ),
                    (n = !1))
                  : (null == eD
                        ? void 0
                        : null === (t = eD.directory_entry) || void 0 === t
                          ? void 0
                          : t.short_description) !== void 0
                    ? e.push(
                        (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(h.Heading, {
                              className: ep.sectionHeader,
                              variant: "heading-md/semibold",
                              children:
                                em.Z.Messages
                                  .APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING,
                            }),
                            (0, i.jsx)("span", {
                              children: eD.directory_entry.short_description,
                            }),
                          ],
                        }),
                      )
                    : (null == eD ? void 0 : eD.description) != null &&
                      e.push(
                        (0, i.jsx)(D.Z, {
                          className: ep.description,
                          userBio: eD.description,
                        }),
                      ),
                  null != eT &&
                    eT.length > 0 &&
                    (e.push(
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(h.Heading, {
                            className: ep.sectionHeader,
                            variant: "heading-md/semibold",
                            children:
                              em.Z.Messages
                                .APP_DIRECTORY_PROFILE_COMMANDS_HEADING,
                          }),
                          (0, i.jsx)(er.Z, {
                            className: ep.commandList,
                            commands: eT,
                          }),
                        ],
                      }),
                    ),
                    (n = !0));
                break;
              }
              case ed.ApplicationDirectoryProfileSections.IMAGES: {
                if (0 === ez.length) break;
                let n = (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("img", {
                      className: ep.errorImage,
                      src: eg,
                      "aria-hidden": !0,
                      alt: "",
                    }),
                    (0, i.jsx)(h.Heading, {
                      variant: "heading-xl/semibold",
                      children: em.Z.Messages.ERRORS_IMAGE_NOT_FOUND,
                    }),
                  ],
                });
                ez.forEach((e, n) => {
                  null != eD
                    ? (e.alt =
                        em.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format(
                          {
                            index: n + 1,
                            totalImages: ez.length,
                            name: eD.name,
                          },
                        ))
                    : (e.alt =
                        em.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT);
                }),
                  e.push(
                    (0, i.jsx)(f.Z, {
                      className: ep.carousel,
                      themedPagination: !0,
                      items: ez,
                      autoplayInterval: 8e3,
                      paused: !eO,
                      videoAutoPlay: !0,
                      onCurrentItemClick: eK,
                      errorComponent: n,
                      onImageLoad: (e) => {
                        let { src: n, loadTimeMs: a } = e;
                        null != a &&
                          null != eD &&
                          B.default.track(
                            eu.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED,
                            { application_id: eD.id, load_time_ms: a, src: n },
                          );
                      },
                    }),
                  );
                break;
              }
              case ed.ApplicationDirectoryProfileSections.STORE:
                ni && null != m && e.push((0, i.jsx)(ei.M, { appId: m }));
                break;
              case ed.ApplicationDirectoryProfileSections.PRIVACY:
                nn &&
                  e.push(
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(h.Heading, {
                          className: ep.sectionHeader,
                          variant: "heading-md/semibold",
                          children:
                            em.Z.Messages
                              .APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING,
                        }),
                        (0, i.jsx)(v.Z, {
                          className: ep.commandList,
                          grantedPermissions: eW,
                          grantedPermissionsHeader:
                            em.Z.Messages
                              .APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING,
                        }),
                      ],
                    }),
                  ),
                  na &&
                    e.push(
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(h.Heading, {
                            className: ep.sectionHeader,
                            variant: "heading-md/semibold",
                            children:
                              em.Z.Messages
                                .APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING,
                          }),
                          (0, i.jsx)(el.Z, { application: eD }),
                        ],
                      }),
                    );
            }
            return (
              e7(n),
              0 === e.length &&
                g !== ed.ApplicationDirectoryProfileSections.GENERAL &&
                null != eD &&
                ew(),
              e.map((e, n) =>
                (0, i.jsx)("div", { className: ep.section, children: e }, n),
              )
            );
          }, [g, ew, eD, eT, e3, e8, ez, eO, eK, ni, m, nn, na, eW]),
          nr = t.useMemo(() => {
            let e = [
              {
                name: ed.ApplicationDirectoryProfileSections.GENERAL,
                text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL,
                Icon: h.AppsIcon,
              },
            ];
            return (
              ez.length > 0 &&
                e.push({
                  name: ed.ApplicationDirectoryProfileSections.IMAGES,
                  text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES,
                  Icon: h.ImagesIcon,
                }),
              ni &&
                e.push({
                  name: ed.ApplicationDirectoryProfileSections.STORE,
                  text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
                  Icon: h.ShopSparkleIcon,
                }),
              (nn || na) &&
                e.push({
                  name: ed.ApplicationDirectoryProfileSections.PRIVACY,
                  text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
                  Icon: h.PrivacyAndSafetyIcon,
                }),
              e
            );
          }, [ez.length, nn, na, ni]);
        return (
          (d =
            null == eD
              ? null == eA || eA === U.M.FETCHING
                ? (0, i.jsx)(Q.Z, { loading: eA === U.M.FETCHING })
                : (0, i.jsx)("div", {
                    className: ep.__invalid_page,
                    children: (0, i.jsxs)("div", {
                      className: ep.emptyContainer,
                      children: [
                        (0, i.jsx)("img", {
                          className: ep.emptyImage,
                          src: eg,
                          alt: "",
                        }),
                        (0, i.jsx)(h.Heading, {
                          variant: "heading-xl/semibold",
                          children:
                            em.Z.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING,
                        }),
                      ],
                    }),
                  })
              : (0, i.jsxs)(Q.Z, {
                  loading: eA === U.M.FETCHING,
                  children: [
                    (0, i.jsx)(eN, { app: eD, iconSrc: eG }),
                    (0, i.jsxs)("div", {
                      className: ep.__invalid_page,
                      children: [
                        (0, i.jsxs)("div", {
                          className: ep.header,
                          children: [
                            (0, i.jsxs)("div", {
                              className: ep.headerSidebar,
                              children: [
                                (0, i.jsx)("img", {
                                  className: ep.headerIcon,
                                  alt: "",
                                  "aria-hidden": !0,
                                  src: eG,
                                  width: ev,
                                  height: ev,
                                }),
                                (0, i.jsx)(J.Z, {
                                  application: eD,
                                  mutualGuilds: eM,
                                  mutualGuildShownMax: 3,
                                  compact: !0,
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: ep.headerContent,
                              children: [
                                (0, i.jsxs)("div", {
                                  className: ep.headerNameAndButtons,
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className: ep.headerNameAndIcon,
                                      children: [
                                        (0, i.jsx)(h.Heading, {
                                          className: ep.name,
                                          variant: "heading-xxl/semibold",
                                          children: eD.name,
                                        }),
                                        ni &&
                                          (0, i.jsx)(h.Tooltip, {
                                            tooltipClassName:
                                              ep.premiumIconTooltip,
                                            text: em.Z.Messages
                                              .APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                            children: (e) =>
                                              (0, i.jsx)("img", {
                                                ...e,
                                                alt: em.Z.Messages
                                                  .APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                className: ep.premiumIcon,
                                                src: a(744050),
                                              }),
                                          }),
                                        e5 &&
                                          (0, i.jsx)($.Z, {
                                            className: ep.partnerBadge,
                                          }),
                                      ],
                                    }),
                                    (0, i.jsxs)("div", {
                                      className: ep.buttons,
                                      children: [
                                        (0, i.jsx)(h.Button, {
                                          onClick: e6,
                                          color: h.Button.Colors.PRIMARY,
                                          children: e$
                                            ? em.Z.Messages
                                                .INTEGRATIONS_WEBHOOK_COPIED_URL
                                            : em.Z.Messages
                                                .APP_DIRECTORY_PROFILE_SHARE_BUTTON,
                                        }),
                                        (0, i.jsx)(h.Button, {
                                          color: h.Button.Colors.BRAND,
                                          onClick: e1,
                                          disabled: !eF,
                                          children:
                                            em.Z.Messages
                                              .APPLICATION_ADD_BUTTON,
                                        }),
                                        (0, i.jsx)(h.Popout, {
                                          renderPopout: (e) => {
                                            let { closePopout: n } = e;
                                            return eQ(n);
                                          },
                                          position: "left",
                                          align: "top",
                                          animation: h.Popout.Animation.NONE,
                                          children: (e) =>
                                            (0, i.jsx)(h.Clickable, {
                                              className: ep.overflow,
                                              ...e,
                                              children: (0, i.jsx)(
                                                h.MoreHorizontalIcon,
                                                {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  width: 20,
                                                  height: 20,
                                                  className: ep.iconInteractive,
                                                },
                                              ),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsx)(ec.Z, {
                                  activeSection: g,
                                  setSection: eV,
                                  sections: nr,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: ep.contentContainer,
                          children: [
                            (0, i.jsxs)("div", {
                              className: ep.content,
                              children: [
                                nt,
                                null != eP && eP.length > 0
                                  ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                        e9 &&
                                          (0, i.jsx)("div", {
                                            className: ep.separator,
                                          }),
                                        (0, i.jsxs)("div", {
                                          className: ep.section,
                                          children: [
                                            (0, i.jsx)(h.Heading, {
                                              className: ep.relatedHeader,
                                              variant: "eyebrow",
                                              children:
                                                em.Z.Messages
                                                  .APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING,
                                            }),
                                            (0, i.jsx)(Q.Z, {
                                              loading: R,
                                              children: (0, i.jsx)(X.Z, {
                                                applications: eP,
                                                onViewOne: eX,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    })
                                  : null,
                              ],
                            }),
                            (0, i.jsx)(eo.Z, {
                              className: ep.sidebar,
                              application: eD,
                              guildId: I,
                              onViewCategory: eq,
                              onClickGuildWidget: eB,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })),
          (0, i.jsx)(z.Z, { children: d })
        );
      }
      function eR(e) {
        switch (e.type) {
          case C.ee.MEDIA_PROXY:
            var n;
            let a = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
            return { type: eu.s9s.IMG, width: 0, height: 0, src: a };
          case C.ee.YOUTUBE:
            let i = eE(e.url);
            if (null != i)
              return { type: eu.s9s.YOUTUBE_VIDEO, youtubeVideoId: i };
        }
        return console.warn("Unsupported carousel item", e), null;
      }
      let eb = (e) => {
          let n,
            { onToggle: a, isViewAll: t } = e;
          return (
            (n = t
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(h.Text, {
                      className: ep.showMoreButtonText,
                      variant: "eyebrow",
                      children: em.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS,
                    }),
                    (0, i.jsx)(h.ChevronSmallUpIcon, {
                      size: "md",
                      color: "currentColor",
                      className: ep.showMoreButtonIcon,
                    }),
                  ],
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(h.Text, {
                      className: ep.showMoreButtonText,
                      variant: "eyebrow",
                      children: em.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE,
                    }),
                    (0, i.jsx)(h.ChevronSmallDownIcon, {
                      size: "md",
                      color: "currentColor",
                      className: ep.showMoreButtonIcon,
                    }),
                  ],
                })),
            (0, i.jsx)(eA, {
              children: (0, i.jsx)(h.Button, {
                look: h.Button.Looks.BLANK,
                color: h.Button.Colors.TRANSPARENT,
                size: h.Button.Sizes.NONE,
                className: ep.showMoreButton,
                innerClassName: ep.showMoreButtonInner,
                onClick: a,
                children: n,
              }),
            })
          );
        },
        eA = (e) => {
          let { className: n, contentClassName: a, children: t } = e;
          return (0, i.jsxs)("div", {
            className: l()([ep.dividerContainer, n]),
            children: [
              (0, i.jsx)("div", { className: ep.divider }),
              null != t
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("div", {
                        className: l()(ep.contentDivider, a),
                        children: t,
                      }),
                      (0, i.jsx)("div", { className: ep.divider }),
                    ],
                  })
                : null,
            ],
          });
        };
      function eN(e) {
        let { app: n, iconSrc: a } = e,
          r = (0, T.ZP)(a, g.Z.unsafe_rawColors.PRIMARY_800.css),
          { bot: l } = n,
          s = (0, p.e7)([R.Z], () => R.Z.useReducedMotion),
          o = t.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != l) {
              let n = (0, w.aN)({
                id: l.id,
                banner: l.banner,
                size: 1024,
                canAnimate: !1,
              });
              if (
                (null != n &&
                  ((e["--custom-background-static"] = "url(".concat(n)),
                  (e.height = "212px")),
                !s)
              ) {
                let n = (0, w.aN)({
                  id: l.id,
                  banner: l.banner,
                  size: 1024,
                  canAnimate: !0,
                });
                null != n &&
                  (e["--custom-background-animated"] = "url(".concat(n));
              }
            }
            return e;
          }, [r, l, s]);
        return (0, i.jsx)("div", { style: o, className: ep.headerBanner });
      }
    },
    527564: function (e, n, a) {
      a.d(n, {
        M: function () {
          return C;
        },
      }),
        a(789020);
      var i = a(735250),
        t = a(470079),
        r = a(120356),
        l = a.n(r),
        s = a(442837),
        o = a(481060),
        c = a(765717),
        d = a(283836),
        u = a(507608),
        _ = a(147496),
        m = a(519896),
        p = a(171246),
        g = a(55563),
        I = a(147890),
        h = a(272242),
        v = a(981631),
        x = a(689938),
        f = a(778452);
      function C(e) {
        let { appId: n } = e,
          { subscriptions: a, otps: t } = (0, d.q)(n);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            a.length > 0 &&
              (0, i.jsxs)("div", {
                className: f.productSection,
                children: [
                  (0, i.jsx)(o.Heading, {
                    variant: "heading-lg/semibold",
                    children: x.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
                  }),
                  (0, i.jsx)("div", {
                    className: l()(f.productList, f.subList),
                    children: a.map((e) =>
                      (0, i.jsx)(
                        u.zz,
                        {
                          appId: n,
                          listing: e,
                          subscriptionType: (0, p.KW)(e.skuFlags)
                            ? "user"
                            : "guild",
                          onDetails: () => {
                            (0, I.goToApplicationStoreSku)({
                              applicationId: n,
                              skuId: e.skuId,
                            });
                          },
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
            t.length > 0 &&
              (0, i.jsxs)("div", {
                className: f.productSection,
                children: [
                  (0, i.jsx)(o.Heading, {
                    variant: "heading-lg/semibold",
                    children: x.Z.Messages.STOREFRONT_APP_PRODUCTS,
                  }),
                  (0, i.jsx)("div", {
                    className: l()(f.productList, f.itemList),
                    children: t.map((e) =>
                      (0, i.jsx)(
                        u.hd,
                        {
                          skuId: e.skuId,
                          appId: n,
                          onDetails: () => {
                            (0, I.goToApplicationStoreSku)({
                              applicationId: n,
                              skuId: e.skuId,
                            });
                          },
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
            (0, i.jsx)(c.Z, {
              path: v.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                ":applicationId",
                ":skuId",
              ),
              exact: !0,
              render: (e) => (0, i.jsx)(E, { ...e }),
            }),
          ],
        });
      }
      function E(e) {
        let {
            match: {
              params: { applicationId: n, skuId: a },
            },
          } = e,
          r = (0, s.e7)([g.Z], () => g.Z.get(a), [a]),
          l = (0, s.e7)(
            [g.Z],
            () => (null != a ? g.Z.getParentSKU(a) : void 0),
            [a],
          ),
          c = t.useId();
        return (
          t.useLayoutEffect(() => {
            switch (null == r ? void 0 : r.type) {
              case v.epS.CONSUMABLE:
              case v.epS.DURABLE:
                return (function (e, n, a) {
                  (0, o.openModal)(
                    (e) => {
                      let { onClose: t, transitionState: r } = e;
                      return (0, i.jsx)(_.ItemDetailsModal, {
                        appId: n,
                        skuId: a,
                        onClose: t,
                        transitionState: r,
                      });
                    },
                    {
                      modalKey: e,
                      onCloseCallback() {
                        !P() &&
                          (0, I.goToApplicationSection)({
                            applicationId: n,
                            section:
                              h.ApplicationDirectoryProfileSections.STORE,
                          });
                      },
                    },
                  );
                })(c, n, a);
              case v.epS.SUBSCRIPTION:
                if ((null == l ? void 0 : l.flags) == null) return;
                return (function (e, n, a, t) {
                  (0, o.openModal)(
                    (e) => {
                      let { onClose: r, transitionState: l } = e;
                      return (0, i.jsx)(m.SubscriptionDetailsModal, {
                        appId: n,
                        subscriptionType: (0, p.KW)(t) ? "user" : "guild",
                        skuId: a,
                        guildId: null,
                        onClose: r,
                        transitionState: l,
                      });
                    },
                    {
                      modalKey: e,
                      onCloseCallback() {
                        !P() &&
                          (0, I.goToApplicationSection)({
                            applicationId: n,
                            section:
                              h.ApplicationDirectoryProfileSections.STORE,
                          });
                      },
                    },
                  );
                })(c, n, a, l.flags);
            }
          }, [
            n,
            c,
            null == l ? void 0 : l.flags,
            null == r ? void 0 : r.type,
            a,
          ]),
          t.useLayoutEffect(
            () => () => {
              (0, o.closeModal)(c);
            },
            [c],
          ),
          null
        );
      }
      function P() {
        return window.location.pathname.startsWith("/login");
      }
    },
    326135: function (e, n, a) {
      a.d(n, {
        G: function () {
          return t;
        },
      }),
        a(610138),
        a(216116),
        a(78328),
        a(815648),
        a(47120);
      var i = a(981631);
      let t = (e) => {
        let { id: n, name: a, locale: t } = e,
          r = "https://"
            .concat(i.xr4, "/hc/")
            .concat(t.toLowerCase(), "/requests/new"),
          l = new URLSearchParams();
        return (
          l.append(
            "tf_12275088515223",
            "field_value_dc_category_report_an_app_bot",
          ),
          l.append(
            "tf_12276208289431",
            "field_value_dc_reported_action_app_directory",
          ),
          l.append("tf_12094971213335", n),
          l.append("ticket_form_id", "12275528604823"),
          l.append(
            "tf_subject",
            "App Directory Report ".concat(a, " ").concat(n),
          ),
          "".concat(r, "?").concat(l.toString())
        );
      };
    },
    940064: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = a(735250);
      a(470079);
      var t = a(120356),
        r = a.n(t),
        l = a(481060),
        s = a(665692),
        o = a(992534);
      function c(e) {
        let { commands: n, className: a } = e;
        return (0, i.jsx)("div", {
          className: r()(o.list, a),
          children: n.map((e) =>
            (0, i.jsxs)(
              "div",
              {
                className: o.row,
                children: [
                  (0, i.jsxs)(l.Text, {
                    className: o.commandName,
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: [s.GI, e.displayName],
                  }),
                  (0, i.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: e.displayDescription,
                  }),
                ],
              },
              e.id,
            ),
          ),
        });
      }
    },
    626004: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return I;
        },
      }),
        a(789020);
      var i = a(735250),
        t = a(470079),
        r = a(120356),
        l = a.n(r),
        s = a(481060),
        o = a(860719),
        c = a(63063),
        d = a(49012),
        u = a(981631),
        _ = a(689938),
        m = a(568161);
      let p = c.Z.getArticleURL(u.BhN.BOT_DATA_ACCESS);
      function g(e) {
        let { icon: n, heading: a, body: t } = e;
        return (0, i.jsxs)("li", {
          className: m.intentContainer,
          children: [
            (0, i.jsx)("div", {
              children: (0, i.jsx)(n, { color: "currentColor", size: "md" }),
            }),
            (0, i.jsxs)("div", {
              className: m.intentTextContainer,
              children: [
                (0, i.jsx)("div", {
                  children: (0, i.jsx)(s.Heading, {
                    variant: "eyebrow",
                    color: "header-secondary",
                    children: a,
                  }),
                }),
                (0, i.jsx)("div", {
                  className: m.intentBody,
                  children: (0, i.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: t,
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function I(e) {
        let { application: n } = e,
          {
            hasMessageContent: a,
            hasGuildPresences: r,
            hasGuildMembers: c,
            hasIntents: u,
          } = (0, o.w)({ flags: null == n ? void 0 : n.flags }),
          I = t.useCallback(() => {
            (null == n ? void 0 : n.privacy_policy_url) != null &&
              (0, d.q)({ href: n.privacy_policy_url });
          }, [null == n ? void 0 : n.privacy_policy_url]);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            u &&
              (0, i.jsx)("div", {
                className: m.intentsListHeading,
                children: (0, i.jsx)(s.Text, {
                  variant: "text-md/normal",
                  children:
                    _.Z.Messages
                      .APP_DIRECTORY_PROFILE_DATA_ACCESS_INTENTS_LIST_HEADING,
                }),
              }),
            (0, i.jsxs)("div", {
              className: m.intentsContainer,
              children: [
                u &&
                  (0, i.jsxs)("ul", {
                    className: m.intentsList,
                    children: [
                      a &&
                        (0, i.jsx)(g, {
                          icon: s.ChatIcon,
                          heading:
                            _.Z.Messages
                              .APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_HEADING,
                          body: _.Z.Messages
                            .APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_BODY,
                        }),
                      r &&
                        (0, i.jsx)(g, {
                          icon: s.UserCircleStatusIcon,
                          heading:
                            _.Z.Messages
                              .APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_HEADING,
                          body: _.Z.Messages
                            .APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_BODY,
                        }),
                      c &&
                        (0, i.jsx)(g, {
                          icon: s.GroupIcon,
                          heading:
                            _.Z.Messages
                              .APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_HEADING,
                          body: _.Z.Messages
                            .APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_BODY,
                        }),
                    ],
                  }),
                (0, i.jsxs)("div", {
                  className: l()({ [m.hasSeparator]: u }),
                  children: [
                    (0, i.jsx)(s.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: _.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
                        helpCenterUrl: p,
                      }),
                    }),
                    (null == n ? void 0 : n.privacy_policy_url) != null &&
                      (0, i.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        className: m.privacyPolicy,
                        children:
                          _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_PRIVACY_POLICY_V2.format(
                            { onClick: I },
                          ),
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    214912: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return x;
        },
      });
      var i = a(735250);
      a(470079);
      var t = a(120356),
        r = a.n(t),
        l = a(481060),
        s = a(410030),
        o = a(686546),
        c = a(565138),
        d = a(372769),
        u = a(134432),
        _ = a(601964),
        m = a(768581),
        p = a(981631),
        g = a(689938),
        I = a(660857),
        h = a(129512),
        v = a(330065);
      function x(e) {
        let { guild: n, className: a, onClick: t } = e,
          x = (0, s.ZP)(),
          f = new _.ZP({ name: n.name, icon: n.icon }),
          C = m.ZP.getGuildDiscoverySplashURL({
            id: n.id,
            splash: n.discovery_splash,
            size: 192 * (0, u.x_)(),
          }),
          E =
            null != C
              ? C
              : (function (e) {
                  switch (e) {
                    case p.BRd.DARK:
                      return h;
                    case p.BRd.LIGHT:
                      return v;
                  }
                })(x),
          P = m.ZP.getGuildIconURL({ id: n.id, icon: n.icon, size: 50 });
        return (0, i.jsxs)(l.Clickable, {
          className: r()(I.card, a),
          onClick: t,
          "aria-label": g.Z.Messages.APP_DIRECTORY_JOIN_SERVER_LABEL,
          children: [
            (0, i.jsxs)("div", {
              className: I.cardHeader,
              children: [
                (0, i.jsx)("img", {
                  src: E,
                  alt: "",
                  className: I.splashImage,
                }),
                (0, i.jsx)("div", {
                  className: I.guildIcon,
                  children: (0, i.jsx)(o.ZP, {
                    mask: o.ZP.Masks.AVATAR_DEFAULT,
                    width: 58,
                    height: 58,
                    children: (0, i.jsx)("div", {
                      className: I.iconMask,
                      children: (0, i.jsx)(c.Z, {
                        className: I.__invalid_icon,
                        iconSrc: P,
                        guild: f,
                        size: c.Z.Sizes.LARGE,
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: I.cardDetails,
              children: [
                (0, i.jsxs)("div", {
                  className: I.guildNameWrapper,
                  children: [
                    (0, i.jsx)(d.Z, {
                      className: I.guildBadge,
                      guild: n,
                      tooltipColor: l.Tooltip.Colors.PRIMARY,
                    }),
                    (0, i.jsx)(l.Heading, {
                      variant: "heading-md/semibold",
                      className: I.guildName,
                      children: n.name,
                    }),
                  ],
                }),
                (0, i.jsx)(l.Text, {
                  className: I.guildDescription,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  lineClamp: 2,
                  children: n.description,
                }),
                (0, i.jsx)("div", {
                  className: I.memberInfo,
                  children: (0, i.jsxs)("div", {
                    className: I.memberCountWrapper,
                    children: [
                      (0, i.jsx)(l.UserIcon, {
                        color: "currentColor",
                        className: I.memberCountIcon,
                        size: "xs",
                      }),
                      (0, i.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children:
                          g.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: n.approximate_member_count },
                          ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    939893: function (e, n, a) {
      var i = a(735250);
      a(470079);
      var t = a(302454),
        r = a.n(t),
        l = a(481060),
        s = a(447543),
        o = a(15470),
        c = a(960904),
        d = a(830121),
        u = a(746878),
        _ = a(241209);
      let m = /^discord.gg\/[a-zA-Z0-9-]+/,
        p = {
          ..._.Z.rules,
          heading: { ...o.i.heading },
          image: { ...r().defaultRules.image },
          inviteLink: {
            order: _.Z.rules.link.order + 1,
            match: (e, n) => (n.inline ? m.exec(e) : null),
            parse: (e, n, a) => {
              let i = (0, d.zO)(e[0]);
              return null == i || i.type !== c.g.INVITE
                ? { type: "text", content: e[0] }
                : {
                    type: "inviteLink",
                    content: [{ type: "text", content: e[0] }],
                    onClick: () => {
                      var e;
                      s.Z.acceptInviteAndTransitionToInviteChannel({
                        inviteKey: i.code,
                        context: { location: "Application Directory" },
                      }),
                        null === (e = a.closeModal) ||
                          void 0 === e ||
                          e.call(a);
                    },
                  };
            },
            react: (e, n, a) =>
              (0, i.jsx)(
                l.Anchor,
                {
                  onClick: (n) => {
                    n.preventDefault(), e.onClick();
                  },
                  children: (0, u.S)(e, n, a),
                },
                a.key,
              ),
          },
        };
      n.Z = p;
    },
    430913: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return P;
        },
      }),
        a(47120),
        a(653041),
        a(610138),
        a(216116),
        a(78328),
        a(815648);
      var i = a(735250),
        t = a(470079),
        r = a(120356),
        l = a.n(r),
        s = a(780384),
        o = a(481060),
        c = a(794295),
        d = a(410030),
        u = a(726542),
        _ = a(626135),
        m = a(463571),
        p = a(887706),
        g = a(214912),
        I = a(290247),
        h = a(981631),
        v = a(689938),
        x = a(319333);
      let f = v.Z.getAvailableLocales();
      function C(e) {
        var n, a, t;
        let { onClick: r, url: l, children: c } = e,
          _ = (0, d.ZP)(),
          m = u.Z.getByUrl(l),
          p = (0, s.wj)(_)
            ? null == m
              ? void 0
              : null === (n = m.icon) || void 0 === n
                ? void 0
                : n.darkSVG
            : null == m
              ? void 0
              : null === (a = m.icon) || void 0 === a
                ? void 0
                : a.lightSVG;
        return (0, i.jsx)(E, {
          icon: void 0 === p ? o.LinkIcon : void 0,
          imageSrc: p,
          onClick: r,
          url: l,
          type:
            null !== (t = null == m ? void 0 : m.name) && void 0 !== t
              ? t
              : "website",
          children: c,
        });
      }
      function E(e) {
        let {
            icon: n,
            imageSrc: a,
            iconColor: t,
            url: r,
            type: s,
            children: d,
            onClick: u,
          } = e,
          _ = (0, p.Z)(),
          m = null;
        null != n
          ? (m = (0, i.jsx)(n, {
              className: x.listIcon,
              color: null != t ? t : "currentColor",
              width: 20,
              height: 20,
              size: "custom",
            }))
          : null != a &&
            (m = (0, i.jsx)("img", {
              className: x.listImage,
              src: a,
              alt: "",
            }));
        let g = (0, i.jsxs)(i.Fragment, {
          children: [
            m,
            (0, i.jsx)(o.Text, {
              className: x.listText,
              variant: "text-md/normal",
              selectable: !0,
              children: d,
            }),
          ],
        });
        return (0, i.jsx)(c.Z, {
          href: r,
          className: l()(x.listItem, x.linkItem),
          onClick: () => (u(r, s), !1),
          trusted: !_,
          useDefaultUnderlineStyles: !1,
          children: g,
        });
      }
      function P(e) {
        var n, a, r;
        let {
            application: s,
            guildId: c,
            className: d,
            onViewCategory: u,
            onClickGuildWidget: p,
          } = e,
          [P, R] = t.useState(null),
          b = [],
          A =
            null !==
              (a =
                null == s
                  ? void 0
                  : null === (n = s.directory_entry) || void 0 === n
                    ? void 0
                    : n.external_urls) && void 0 !== a
              ? a
              : [];
        t.useEffect(() => {
          var e;
          if (
            (null === (e = s.directory_entry) || void 0 === e
              ? void 0
              : e.supported_locales) !== void 0
          ) {
            let e = new Set(s.directory_entry.supported_locales);
            R(f.filter((n) => e.has(n.value)).map((e) => e.localizedName));
          }
        }, [s.directory_entry]);
        let N = (e, n) => {
          _.default.track(
            h.rMx.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED,
            { application_id: s.id, guild_id: c, type: n, url: e },
          );
        };
        return (
          null != s.categories &&
            s.categories.length > 0 &&
            b.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(o.Heading, {
                    className: x.sectionHeader,
                    variant: "eyebrow",
                    children:
                      v.Z.Messages.APP_DIRECTORY_PROFILE_CATEGORIES_HEADING,
                  }),
                  (0, i.jsx)("div", {
                    className: x.categories,
                    children: (null !== (r = s.categories) && void 0 !== r
                      ? r
                      : []
                    ).map((e) => {
                      let n = new URLSearchParams();
                      return (
                        n.set("category_id", e.id.toString()),
                        (0, i.jsx)(
                          m.Z,
                          {
                            href: ""
                              .concat(h.Z5c.APPLICATION_DIRECTORY_SEARCH, "?")
                              .concat(n),
                            children: (0, i.jsx)(o.Clickable, {
                              className: x.category,
                              onClick: () => u(e),
                              children: (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "header-primary",
                                children: e.name,
                              }),
                            }),
                          },
                          e.id,
                        )
                      );
                    }),
                  }),
                ],
              }),
            ),
          null != P &&
            P.length > 0 &&
            b.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(o.Heading, {
                    className: x.sectionHeader,
                    variant: "eyebrow",
                    children:
                      v.Z.Messages.APP_DIRECTORY_PROFILE_LANGUAGES_HEADING,
                  }),
                  (0, i.jsx)(I.Z, { supportedLanguages: P }),
                ],
              }),
            ),
          (null != s.terms_of_service_url ||
            null != s.privacy_policy_url ||
            A.length > 0) &&
            b.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(o.Heading, {
                    className: x.sectionHeader,
                    variant: "eyebrow",
                    children: v.Z.Messages.APP_DIRECTORY_PROFILE_LINKS_HEADING,
                  }),
                  A.map((e, n) =>
                    (0, i.jsx)(
                      C,
                      { url: e.url, onClick: N, children: e.name },
                      n,
                    ),
                  ),
                  null != s.terms_of_service_url
                    ? (0, i.jsx)(E, {
                        icon: o.LinkIcon,
                        onClick: N,
                        url: s.terms_of_service_url,
                        type: "tos",
                        children: v.Z.Messages.APP_DIRECTORY_PROFILE_TERMS_LINK,
                      })
                    : null,
                  null != s.privacy_policy_url
                    ? (0, i.jsx)(E, {
                        icon: o.LockIcon,
                        onClick: N,
                        url: s.privacy_policy_url,
                        type: "policy",
                        children:
                          v.Z.Messages.APP_DIRECTORY_PROFILE_PRIVACY_LINK,
                      })
                    : null,
                ],
              }),
            ),
          null != s.guild &&
            s.guild.features.includes(h.oNc.DISCOVERABLE) &&
            b.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(o.Heading, {
                    className: x.sectionHeader,
                    variant: "eyebrow",
                    children: v.Z.Messages.APP_DIRECTORY_PROFILE_SERVER_HEADING,
                  }),
                  (0, i.jsx)(g.Z, { guild: s.guild, onClick: p }),
                ],
              }),
            ),
          (0, i.jsx)("div", {
            className: l()(x.sidebar, d),
            children:
              b.length > 0
                ? (0, i.jsx)(i.Fragment, {
                    children: b.map((e, n) =>
                      (0, i.jsx)(
                        "div",
                        { className: x.section, children: e },
                        n,
                      ),
                    ),
                  })
                : null,
          })
        );
      }
    },
    290247: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = a(735250);
      a(470079);
      var t = a(120356),
        r = a.n(t),
        l = a(481060),
        s = a(769003);
      function o(e) {
        let { supportedLanguages: n } = e;
        return (0, i.jsx)("ul", {
          className: s.outerContainer,
          children: n.map((e) =>
            (0, i.jsx)(
              "li",
              {
                className: r()(s.innerContainer, s.languageItem),
                children: (0, i.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: e,
                }),
              },
              e,
            ),
          ),
        });
      }
    },
    606183: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = a(735250);
      a(470079);
      var t = a(481060),
        r = a(668896);
      function l(e) {
        let { activeSection: n, setSection: a, sections: l } = e;
        return (0, i.jsx)(t.TabBar, {
          selectedItem: n,
          type: "top",
          onItemSelect: a,
          className: r.tabBar,
          children: l.map((e) => {
            let { name: n, text: a, Icon: l } = e;
            return (0, i.jsxs)(
              t.TabBar.Item,
              {
                id: n,
                className: r.tabBarItem,
                "aria-label": a,
                children: [
                  (0, i.jsx)(l, { className: r.icon, color: "currentColor" }),
                  a,
                ],
              },
              n,
            );
          }),
        });
      }
    },
    150414: function (e, n, a) {
      a.d(n, {
        q: function () {
          return r;
        },
      });
      var i = a(73346),
        t = a(591759);
      function r(e, n, a) {
        var r;
        return null !== (r = t.Z.toURLSafe((0, i._W)(e, n, a))) && void 0 !== r
          ? r
          : void 0;
      }
    },
    507608: function (e, n, a) {
      a.d(n, {
        AF: function () {
          return D;
        },
        hd: function () {
          return Z;
        },
        zz: function () {
          return M;
        },
      }),
        a(47120);
      var i = a(735250),
        t = a(470079),
        r = a(905322),
        l = a(200207),
        s = a(269210),
        o = a(442837),
        c = a(481060),
        d = a(607070),
        u = a(100527),
        _ = a(906732),
        m = a(87484),
        p = a(171246),
        g = a(930155),
        I = a(889989),
        h = a(696906),
        v = a(55563),
        x = a(551428),
        f = a(626135),
        C = a(768581),
        E = a(73346),
        P = a(624138),
        R = a(591759),
        b = a(601911),
        A = a(150414),
        N = a(110742),
        T = a(147496),
        j = a(680005),
        S = a(519896),
        O = a(981631),
        L = a(689938),
        y = a(335567);
      function D(e) {
        let { app: n, guildId: a, subscriptions: l, otps: s } = e,
          m = t.useMemo(() => (0, b.y)(n, 100), [n]),
          { bot: g } = n,
          I = t.useMemo(() => {
            var e;
            if ((null == g ? void 0 : g.banner) == null) return;
            let n = (0, C.aN)({
              id: g.id,
              banner: g.banner,
              size: 1024,
              canAnimate: !1,
            });
            return null != n && null !== (e = R.Z.toURLSafe(n)) && void 0 !== e
              ? e
              : void 0;
          }, [g]),
          h = t.useMemo(() => {
            var e;
            if ((null == g ? void 0 : g.banner) == null) return;
            let n = (0, C.aN)({
              id: g.id,
              banner: g.banner,
              size: 1024,
              canAnimate: !0,
            });
            return null != n && null !== (e = R.Z.toURLSafe(n)) && void 0 !== e
              ? e
              : void 0;
          }, [g]),
          v = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
          x = t.useMemo(
            () => [...l.map((e) => e.skuId), ...s.map((e) => e.skuId)],
            [l, s],
          ),
          { analyticsLocations: E } = (0, _.ZP)(u.Z.APP_STOREFRONT);
        return (
          t.useEffect(() => {
            0 !== x.length &&
              f.default.track(O.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                application_id: n.id,
                sku_ids: x,
                location_stack: E,
              });
          }, [E, n.id, x]),
          (0, i.jsxs)("div", {
            className: y.wrapper,
            children: [
              (0, i.jsx)(r.j, {
                title: n.name,
                iconSrc: m,
                backgroundSrc: I,
                animatedBackgroundSrc: h,
                prefersReducedMotion: v,
              }),
              l.length > 0 &&
                (0, i.jsxs)("div", {
                  className: y.productSection,
                  children: [
                    (0, i.jsx)(c.Heading, {
                      variant: "heading-lg/semibold",
                      color: "header-secondary",
                      children: L.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
                    }),
                    (0, i.jsx)("div", {
                      className: y.productList,
                      children: l.map((e) =>
                        (0, i.jsx)(
                          M,
                          {
                            appId: n.id,
                            guildId: a,
                            listing: e,
                            subscriptionType: (0, p.KW)(e.skuFlags)
                              ? "user"
                              : "guild",
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                }),
              s.length > 0 &&
                (0, i.jsxs)("div", {
                  className: y.productSection,
                  children: [
                    (0, i.jsx)(c.Heading, {
                      variant: "heading-lg/semibold",
                      color: "header-secondary",
                      children: L.Z.Messages.STOREFRONT_APP_PRODUCTS,
                    }),
                    (0, i.jsx)("div", {
                      className: y.productList,
                      children: s.map((e) =>
                        (0, i.jsx)(Z, { skuId: e.skuId, appId: n.id }, e.id),
                      ),
                    }),
                  ],
                }),
              (0, i.jsx)(c.Text, {
                variant: "text-md/normal",
                className: y.legalText,
                children:
                  null != n.termsOfServiceUrl && null != n.privacyPolicyUrl
                    ? L.Z.Messages.STOREFRONT_VIEW_TOS_PP.format({
                        tosUrl: n.termsOfServiceUrl,
                        ppUrl: n.privacyPolicyUrl,
                      })
                    : L.Z.Messages.STOREFRONT_NO_TOS_PP,
              }),
            ],
          })
        );
      }
      function M(e) {
        var n;
        let {
            appId: a,
            guildId: r,
            listing: l,
            subscriptionType: o,
            onDetails: d,
          } = e,
          { data: u } = (0, g.H)(l.skuId),
          {
            openModal: _,
            canOpenModal: m,
            cannotOpenReason: p,
          } = (0, h.Z)({
            guildId: r,
            showBenefitsFirst: !1,
            analyticsLocation: O.Sbl.APP_STOREFRONT,
            skuId: l.skuId,
          }),
          v = t.useMemo(() => {
            var e;
            return null === (e = l.benefits) || void 0 === e
              ? void 0
              : e.map((e) => ({
                  id: e.id,
                  title: e.name,
                  description: e.description,
                  icon: (0, I.n)(a, e.icon),
                }));
          }, [a, l.benefits]),
          x = t.useMemo(
            () =>
              null != l.thumbnail ? (0, A.q)(a, l.thumbnail, 256) : void 0,
            [a, l.thumbnail],
          ),
          f = t.useCallback(
            (e) =>
              null == u || 0 === u.length
                ? null
                : (0, i.jsx)(j.p, {
                    ...e,
                    appId: a,
                    subscriptionType: o,
                    skuId: l.skuId,
                    subscriptionPlan: u[0],
                    canPurchase: m,
                    cannotPurchaseReason: p,
                  }),
            [a, o, l.skuId, u, m, p],
          );
        return null == u
          ? null
          : (0, i.jsx)(s.U, {
              title: l.summary,
              description:
                null !== (n = l.description) && void 0 !== n ? n : void 0,
              imgSrc: x,
              subscriptionType: o,
              onPurchase: _,
              renderPurchaseButton: f,
              benefitItems:
                null != v
                  ? v.map((e) =>
                      (0, i.jsx)(s.G, { name: e.title, icon: e.icon }, e.id),
                    )
                  : void 0,
              onDetails:
                null != d
                  ? d
                  : null != v
                    ? () => {
                        (0, c.openModal)((e) => {
                          let { onClose: n, transitionState: t } = e;
                          return (0, i.jsx)(S.SubscriptionDetailsModal, {
                            appId: a,
                            subscriptionType: o,
                            onClose: n,
                            skuId: l.skuId,
                            transitionState: t,
                            guildId: r,
                          });
                        });
                      }
                    : void 0,
            });
      }
      function Z(e) {
        var n, a, t, r;
        let { skuId: s, appId: d, onDetails: p } = e,
          { analyticsLocations: g } = (0, _.ZP)(u.Z.APP_STOREFRONT),
          I = (0, o.e7)([x.Z], () => x.Z.getForSKU(s), [s]),
          h = (0, o.e7)([v.Z], () => v.Z.get(s), [s]),
          f = (0, N.M)(s);
        if (null == h) return null;
        let C = null !== (a = h.name) && void 0 !== a ? a : "",
          b =
            null !==
              (t =
                null == I
                  ? void 0
                  : null === (n = I.description) || void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== t
              ? t
              : void 0,
          A =
            (null == I ? void 0 : I.headerBackground) != null &&
            null !==
              (r = R.Z.toURLSafe((0, E._W)(d, I.headerBackground, 256))) &&
            void 0 !== r
              ? r
              : void 0,
          S = h.type === O.epS.DURABLE && f,
          y =
            h.type === O.epS.DURABLE
              ? S
                ? L.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
                : L.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
              : void 0,
          { price: D } = h;
        return null == D
          ? null
          : (0, i.jsx)(l.I, {
              title: C,
              description: b,
              headerImage: A,
              availabilityLabel: y,
              onDetails:
                null != p
                  ? p
                  : (0, P.Ew)(b)
                    ? void 0
                    : () => {
                        (0, c.openModal)((e) => {
                          let { onClose: n, transitionState: a } = e;
                          return (0, i.jsx)(T.ItemDetailsModal, {
                            appId: d,
                            skuId: s,
                            onClose: n,
                            transitionState: a,
                          });
                        });
                      },
              PurchaseButton: (e) =>
                (0, i.jsx)(j.Y, { ...e, appId: d, sku: h }),
              onPurchase: () => {
                (0, m.Z)({
                  applicationId: d,
                  skuId: h.id,
                  analyticsLocations: g,
                });
              },
            });
      }
    },
    860719: function (e, n, a) {
      a.d(n, {
        w: function () {
          return t;
        },
      }),
        a(789020);
      var i = a(85025);
      function t(e) {
        let { flags: n } = e,
          a = (0, i.O)(n),
          t =
            null != a &&
            ((null == a ? void 0 : a.messageContent) ||
              (null == a ? void 0 : a.messageContentLimited)),
          r =
            null != a &&
            ((null == a ? void 0 : a.guildPresences) ||
              (null == a ? void 0 : a.guildPresencesLimited)),
          l =
            null != a &&
            ((null == a ? void 0 : a.guildMembers) ||
              (null == a ? void 0 : a.guildMembersLimited));
        return {
          hasMessageContent: t,
          hasGuildPresences: r,
          hasGuildMembers: l,
          hasIntents: t || r || l,
        };
      }
    },
    85025: function (e, n, a) {
      a.d(n, {
        O: function () {
          return r;
        },
      });
      var i = a(630388),
        t = a(981631);
      function r(e) {
        if (null != e)
          return {
            guildPresences: (0, i.yE)(e, t.udG.GATEWAY_PRESENCE),
            guildMembers: (0, i.yE)(e, t.udG.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, i.yE)(e, t.udG.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, i.yE)(e, t.udG.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, i.yE)(
              e,
              t.udG.GATEWAY_GUILD_MEMBERS_LIMITED,
            ),
            messageContentLimited: (0, i.yE)(
              e,
              t.udG.GATEWAY_MESSAGE_CONTENT_LIMITED,
            ),
          };
      }
    },
    578361: function (e, n, a) {
      a.d(n, {
        n: function () {
          return t;
        },
      });
      var i,
        t,
        r = a(735250),
        l = a(470079),
        s = a(120356),
        o = a.n(s),
        c = a(748780),
        d = a(215569),
        u = a(189682);
      ((i = t || (t = {}))[(i.RIGHT = -1)] = "RIGHT"),
        (i[(i.LEFT = 1)] = "LEFT");
      let _ = { friction: 7, tension: 40, clamp: !0 };
      class m extends l.PureComponent {
        componentWillEnter(e) {
          this._animated.setValue(-this.props.direction),
            c.Z.spring(this._animated, {
              toValue: 0,
              ...this.props.springSettings,
            }).start(e);
        }
        componentDidAppear() {
          this._animated.setValue(0);
        }
        componentWillLeave(e) {
          c.Z.spring(this._animated, {
            toValue: this.props.direction,
            ...this.props.springSettings,
          }).start(e);
        }
        getStyle() {
          let e = c.Z.accelerate({
            transform: [
              {
                translateX: this._animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "-100%"],
                }),
              },
            ],
          });
          return (
            this.props.fadeInOut &&
              (e.opacity = this._animated.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [0, 1, 0],
              })),
            e
          );
        }
        render() {
          return (0, r.jsx)(c.Z.div, {
            style: this.getStyle(),
            className: u.item,
            children: this.props.children,
          });
        }
        constructor(e) {
          var n, a, i;
          super(e),
            (n = this),
            (i = void 0),
            (a = "_animated") in n
              ? Object.defineProperty(n, a, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (n[a] = i),
            (this._animated = new c.Z.Value(-1 * e.direction));
        }
      }
      n.Z = (e) => {
        let {
          children: n,
          step: a,
          direction: i,
          className: t,
          springSettings: l = _,
          fadeInOut: s = !1,
        } = e;
        return (0, r.jsx)(d.W, {
          component: "div",
          className: o()(u.animator, t),
          children: (0, r.jsx)(
            m,
            { direction: i, springSettings: l, fadeInOut: s, children: n },
            a,
          ),
        });
      };
    },
    905322: function (e, n, a) {
      a.d(n, {
        j: function () {
          return s;
        },
      });
      var i = a(735250),
        t = a(470079),
        r = a(777207),
        l = a(529079);
      function s(e) {
        let {
            title: n,
            subtitle: a,
            iconSrc: s,
            backgroundSrc: o,
            animatedBackgroundSrc: c,
            prefersReducedMotion: d = !0,
          } = e,
          u = t.useMemo(() => {
            let e = null != o ? o : s;
            if (null != e)
              return {
                "--custom-background-url": "url(".concat(e.toString(), ")"),
              };
          }, [o, s]),
          _ = t.useMemo(() => {
            if (null == o) return;
            let e = {
              "--custom-background-static": "url(".concat(o.toString()),
            };
            return (
              !d &&
                null != c &&
                (e["--custom-background-animated"] = "url(".concat(
                  c.toString(),
                  ")",
                )),
              e
            );
          }, [c, o, d]);
        return (0, i.jsxs)("div", {
          className: l.wrapper,
          children: [
            (0, i.jsx)("div", { className: l.background, style: u }),
            (0, i.jsxs)("div", {
              className: l.content,
              children: [
                null != s &&
                  (0, i.jsx)("div", {
                    className: l.icon,
                    children: (0, i.jsx)("img", { src: s.toString(), alt: "" }),
                  }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)(r.x, {
                      variant: "heading-xl/bold",
                      tag: "div",
                      children: n,
                    }),
                    null != a &&
                      (0, i.jsxs)(r.x, {
                        variant: "text-sm/normal",
                        children: ["“", a, "”"],
                      }),
                  ],
                }),
              ],
            }),
            null != o
              ? (0, i.jsx)("div", { className: l.image, style: _ })
              : null,
          ],
        });
      }
    },
    200207: function (e, n, a) {
      a.d(n, {
        I: function () {
          return u;
        },
      });
      var i = a(735250);
      a(470079);
      var t = a(557533),
        r = a.n(t),
        l = a(789978),
        s = a(790472),
        o = a(777207),
        c = a(147333),
        d = a(103077);
      function u(e) {
        let {
          title: n,
          description: a,
          headerImage: t,
          onDetails: u,
          onPurchase: _,
          PurchaseButton: m,
          availabilityLabel: p,
        } = e;
        return (0, i.jsx)(l.tE, {
          children: (0, i.jsxs)("div", {
            className: r()(c.wrapper, d.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != u ? u() : null != _ && _();
            },
            children: [
              (0, i.jsx)("div", {
                className: c.cardHeaderImg,
                style:
                  null != t
                    ? {
                        backgroundImage:
                          null != t ? "url(".concat(t.toString(), ")") : void 0,
                      }
                    : void 0,
                children:
                  null == t &&
                  (0, i.jsx)(s.P, {
                    color: "white",
                    size: "custom",
                    height: 80,
                    width: 80,
                  }),
              }),
              (0, i.jsxs)("div", {
                className: c.details,
                children: [
                  (0, i.jsx)(o.x, {
                    color: "header-primary",
                    variant: "text-md/semibold",
                    children: n,
                  }),
                  null != a &&
                    (0, i.jsx)(o.x, {
                      className: c.description,
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: a,
                    }),
                ],
              }),
              null != m &&
                (0, i.jsxs)("div", {
                  className: c.footer,
                  children: [
                    (0, i.jsx)(o.x, {
                      color: "interactive-normal",
                      variant: "text-sm/normal",
                      children: p,
                    }),
                    (0, i.jsx)(m, {
                      onClick: (e) => {
                        e.stopPropagation(), null == _ || _();
                      },
                    }),
                  ],
                }),
            ],
          }),
        });
      }
    },
    594045: function (e, n, a) {
      e.exports = {
        container: "container_a06168",
        list: "list_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
        permissionHeader: "permissionHeader_a06168",
      };
    },
    161243: function (e, n, a) {
      e.exports = {
        item: "item_b60f40",
        currentItem: "currentItem_b60f40",
        itemImage: "itemImage_b60f40",
        currentImage: "currentImage_b60f40 itemImage_b60f40",
        itemImageWrapper: "itemImageWrapper_b60f40",
        paginationItem: "paginationItem_b60f40",
        storePaginationImg: "storePaginationImg_b60f40",
        selectedStorePaginationItem: "selectedStorePaginationItem_b60f40",
        unselectedStorePaginationItem: "unselectedStorePaginationItem_b60f40",
        overlappingBorder: "overlappingBorder_b60f40",
        paginationVideoOverlay: "paginationVideoOverlay_b60f40",
        paginationVideoPlayPill: "paginationVideoPlayPill_b60f40",
        pagination: "pagination_b60f40",
        carouselButtonsContainer: "carouselButtonsContainer_b60f40",
        arrow: "arrow_b60f40",
        arrowHovered: "arrowHovered_b60f40",
        scroller: "scroller_b60f40",
        video: "video_b60f40",
        videoWrapper: "videoWrapper_b60f40",
        mediaPlayer: "mediaPlayer_b60f40",
      };
    },
    31185: function (e, n, a) {
      e.exports = {
        wrapper: "wrapper_b6f1f8",
        slide: "slide_b6f1f8",
        navPrev: "navPrev_b6f1f8 nav_b6f1f8",
        navNext: "navNext_b6f1f8 nav_b6f1f8",
      };
    },
    499142: function (e, n, a) {
      e.exports = {
        collapsed: "collapsed_e2ea95",
        blurb: "blurb_e2ea95",
        description: "description_e2ea95",
        toggleCollapseButton: "toggleCollapseButton_e2ea95",
        assetWrapper: "assetWrapper_e2ea95",
        asset: "asset_e2ea95",
      };
    },
    310436: function (e, n, a) {
      e.exports = {
        smallCarousel: "smallCarousel_b0360e",
        smallCarouselItem: "smallCarouselItem_b0360e",
        smallCarouselImage: "smallCarouselImage_b0360e",
        embedContainer: "embedContainer_b0360e",
        hidden: "hidden_b0360e",
        spinner: "spinner_b0360e",
        errorContainer: "errorContainer_b0360e",
        sizedToParent: "sizedToParent_b0360e",
      };
    },
    433027: function (e, n, a) {
      e.exports = {
        directoryContainer: "directoryContainer_da3f59",
        directoryContainerMobile: "directoryContainerMobile_da3f59",
        directoryContainerTablet: "directoryContainerTablet_da3f59",
        content: "content_da3f59",
        closeWrapper: "closeWrapper_da3f59",
        closeContent: "closeContent_da3f59",
        closeIcon: "closeIcon_da3f59",
        header: "header_da3f59",
        titleContainer: "titleContainer_da3f59",
        clickable: "clickable_da3f59",
        back: "back_da3f59",
        backIcon: "backIcon_da3f59",
        backHeader: "backHeader_da3f59",
      };
    },
    169909: function (e, n, a) {
      e.exports = {
        listingDescription: "listingDescription_d2c3da",
        bottomGuildCountContainer: "bottomGuildCountContainer_d2c3da",
      };
    },
    558562: function (e, n, a) {
      e.exports = { header: "header_d5abe9", list: "list_d5abe9" };
    },
    488107: function (e, n, a) {
      e.exports = {
        wrapper: "wrapper_b3d866",
        icons: "icons_b3d866",
        iconMask: "iconMask_b3d866",
        icon: "icon_b3d866",
        iconSmall: "iconSmall_b3d866",
        iconLarge: "iconLarge_b3d866",
        moreGuilds: "moreGuilds_b3d866",
        moreGuildsSmall: "moreGuildsSmall_b3d866",
        moreGuildsLarge: "moreGuildsLarge_b3d866",
        defaultIcon: "defaultIcon_b3d866",
      };
    },
    882089: function (e, n, a) {
      e.exports = {
        container: "container_d9c848",
        hasImage: "hasImage_d9c848",
        imageContainer: "imageContainer_d9c848",
        image: "image_d9c848",
        textContainer: "textContainer_d9c848",
        animatesOnHoverContainer: "animatesOnHoverContainer_d9c848",
        clickable: "clickable_d9c848",
        topRowContainer: "topRowContainer_d9c848",
        icon: "icon_d9c848",
        headerContainer: "headerContainer_d9c848",
        subheader: "subheader_d9c848",
      };
    },
    507716: function (e, n, a) {
      e.exports = {
        container: "container_da6719",
        spinnerContainer: "spinnerContainer_da6719",
        spinner: "spinner_da6719",
        loading: "loading_da6719",
      };
    },
    274679: function (e, n, a) {
      e.exports = { partnerBadge: "partnerBadge_de92a5" };
    },
    613250: function (e, n, a) {
      e.exports = {
        contentContainer: "contentContainer_a1eac2",
        content: "content_a1eac2",
        header: "header_a1eac2",
        headerIcon: "headerIcon_a1eac2",
        headerSidebar: "headerSidebar_a1eac2",
        headerContent: "headerContent_a1eac2",
        headerNameAndButtons: "headerNameAndButtons_a1eac2",
        headerNameAndIcon: "headerNameAndIcon_a1eac2",
        premiumIcon: "premiumIcon_a1eac2",
        premiumIconTooltip: "premiumIconTooltip_a1eac2",
        sidebar: "sidebar_a1eac2",
        name: "name_a1eac2",
        description: "description_a1eac2",
        detailedDescription: "detailedDescription_a1eac2",
        separator: "separator_a1eac2",
        divider: "divider_a1eac2",
        dividerContainer: "dividerContainer_a1eac2",
        contentDivider: "contentDivider_a1eac2",
        descriptionClamp: "descriptionClamp_a1eac2",
        descriptionClampSafari: "descriptionClampSafari_a1eac2",
        showMoreButtonText: "showMoreButtonText_a1eac2",
        showMoreButton: "showMoreButton_a1eac2",
        showMoreButtonInner: "showMoreButtonInner_a1eac2",
        showMoreButtonIcon: "showMoreButtonIcon_a1eac2",
        section: "section_a1eac2",
        commandList: "commandList_a1eac2",
        sectionHeader: "sectionHeader_a1eac2",
        relatedHeader: "relatedHeader_a1eac2",
        carousel: "carousel_a1eac2",
        overflow: "overflow_a1eac2",
        iconInteractive: "iconInteractive_a1eac2",
        emptyContainer: "emptyContainer_a1eac2",
        emptyImage: "emptyImage_a1eac2",
        buttons: "buttons_a1eac2",
        headerBanner: "headerBanner_a1eac2",
        partnerBadge: "partnerBadge_a1eac2",
        errorImage: "errorImage_a1eac2",
        appSlide: "appSlide_a1eac2",
      };
    },
    778452: function (e, n, a) {
      e.exports = {
        productSection: "productSection_a9d0f5",
        productList: "productList_a9d0f5",
        subList: "subList_a9d0f5",
        itemList: "itemList_a9d0f5",
      };
    },
    992534: function (e, n, a) {
      e.exports = {
        list: "list_e0307d",
        row: "row_e0307d",
        commandName: "commandName_e0307d",
      };
    },
    568161: function (e, n, a) {
      e.exports = {
        intentsListHeading: "intentsListHeading_f6d180",
        intentsContainer: "intentsContainer_f6d180",
        intentsList: "intentsList_f6d180",
        intentContainer: "intentContainer_f6d180",
        intentTextContainer: "intentTextContainer_f6d180",
        intentBody: "intentBody_f6d180",
        hasSeparator: "hasSeparator_f6d180",
        privacyPolicy: "privacyPolicy_f6d180",
      };
    },
    660857: function (e, n, a) {
      e.exports = {
        card: "card_b5d566",
        cardHeader: "cardHeader_b5d566",
        splashImage: "splashImage_b5d566",
        guildIcon: "guildIcon_b5d566",
        iconMask: "iconMask_b5d566",
        cardDetails: "cardDetails_b5d566",
        guildNameWrapper: "guildNameWrapper_b5d566",
        guildBadge: "guildBadge_b5d566",
        guildName: "guildName_b5d566",
        guildDescription: "guildDescription_b5d566",
        memberInfo: "memberInfo_b5d566",
        memberCountWrapper: "memberCountWrapper_b5d566",
        memberCountIcon: "memberCountIcon_b5d566",
      };
    },
    319333: function (e, n, a) {
      e.exports = {
        sidebar: "sidebar_d169f5",
        section: "section_d169f5",
        sectionHeader: "sectionHeader_d169f5",
        listItem: "listItem_d169f5",
        linkItem: "linkItem_d169f5",
        listIcon: "listIcon_d169f5",
        listText: "listText_d169f5",
        listImage: "listImage_d169f5",
        categories: "categories_d169f5",
        category: "category_d169f5",
      };
    },
    769003: function (e, n, a) {
      e.exports = {
        outerContainer: "outerContainer_b51750",
        innerContainer: "innerContainer_b51750",
        languageItem: "languageItem_b51750",
      };
    },
    668896: function (e, n, a) {
      e.exports = {
        tabBar: "tabBar_bc3297",
        tabBarItem: "tabBarItem_bc3297",
        icon: "icon_bc3297",
      };
    },
    335567: function (e, n, a) {
      e.exports = {
        wrapper: "wrapper_bfa0f5",
        productSection: "productSection_bfa0f5",
        productList: "productList_bfa0f5",
        legalText: "legalText_bfa0f5",
      };
    },
    353947: function (e, n, a) {
      e.exports = { title: "title_eaa702" };
    },
    189682: function (e, n, a) {
      e.exports = { animator: "animator_abd0f1", item: "item_abd0f1" };
    },
    985312: function (e, n, a) {
      e.exports = {
        logo: "logo_b0f834",
        title: "title_b0f834",
        header: "header_b0f834",
      };
    },
    207533: function (e, n, a) {
      e.exports = {
        markdown: "markdown_b97ce2",
        blockquote: "blockquote_b97ce2",
        codeInline: "codeInline_b97ce2",
        paragraph: "paragraph_b97ce2",
      };
    },
    446174: function (e, n, a) {
      e.exports = {
        alignCenter: "alignCenter_ad2a08",
        alignLeft: "alignLeft_ad2a08",
        horizontalPaginationItemContainer:
          "horizontalPaginationItemContainer_ad2a08",
        verticalPaginationItemContainer:
          "verticalPaginationItemContainer_ad2a08 alignLeft_ad2a08",
        arrow: "arrow_ad2a08",
        prevButtonContainer: "prevButtonContainer_ad2a08 arrowContainer_ad2a08",
        nextButtonContainer: "nextButtonContainer_ad2a08 arrowContainer_ad2a08",
      };
    },
    744184: function (e, n, a) {
      e.exports = {
        singleItemWrapper: "singleItemWrapper_e3183f",
        carousel: "carousel_e3183f",
        item: "item_e3183f",
        singleItem: "singleItem_e3183f item_e3183f",
        viewport: "viewport_e3183f",
      };
    },
    665923: function (e, n, a) {
      e.exports = {
        root: "root_db3abe",
        carouselContainer: "carouselContainer_db3abe",
        carousel: "carousel_db3abe",
        pagination: "pagination_db3abe",
        themedPagination: "themedPagination_db3abe pagination_db3abe",
        controls: "controls_db3abe",
        arrowHitbox: "arrowHitbox_db3abe",
        arrow: "arrow_db3abe",
        arrowHitboxPadding: "arrowHitboxPadding_db3abe",
        dots: "dots_db3abe",
        dotNormal: "dotNormal_db3abe dot_db3abe",
        dotSelected: "dotSelected_db3abe dot_db3abe",
      };
    },
    529079: function (e, n, a) {
      e.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    147333: function (e, n, a) {
      e.exports = {
        wrapper: "wrapper_a8220a",
        cardHeaderImg: "cardHeaderImg_a8220a",
        details: "details_a8220a",
        description: "description_a8220a",
        footer: "footer_a8220a",
      };
    },
  },
]);
//# sourceMappingURL=29ee15cc5ddb7c617621.js.map
