"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67455"],
  {
    305395: function (e) {
      e.exports =
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>✨</text></svg>";
    },
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
            onClick: x,
            ...v
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
          b = t.useCallback(() => {
            x({ mutualGuilds: C });
          }, [x, C]),
          R = (0, i.jsx)(s.Z, {
            application: p,
            textVariant: "text-xs/normal",
            mutualGuilds: C,
            mutualGuildShownMax: 3,
            guildIconSize: s.x.SMALL,
            compact: !0,
          });
        return (0, i.jsxs)(o.Z, {
          className: g,
          onClick: b,
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
          ...v,
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
                children: R,
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
          x = (0, i.jsxs)(i.Fragment, {
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
          v = r()(n, o.container, { [o.hasImage]: h });
        return null != a
          ? (0, i.jsx)(l.ClickableContainer, {
              tag: "article",
              "aria-label":
                s.Z.Messages.APP_DIRECTORY_LISTING_CARD_BUTTON_A11Y_LABEL.format(
                  { name: d },
                ),
              onClick: a,
              className: r()(v, o.clickable, {
                [o.animatesOnHoverContainer]: g,
              }),
              focusProps: { offset: 4 },
              children: x,
            })
          : (0, i.jsx)("article", { className: v, ...I, children: x });
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
            return eE;
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
        x = a(995648),
        v = a(445986),
        f = a(9807),
        C = a(911969),
        E = a(330726),
        P = a(782568),
        b = a(581364),
        R = a(970321),
        A = a(283836),
        N = a(220082),
        T = a(252618),
        j = a(299206),
        S = a(241209),
        O = a(422559),
        L = a(703656),
        y = a(280885),
        D = a(706454),
        M = a(314897),
        Z = a(451478),
        k = a(626135),
        w = a(768581),
        B = a(572004),
        G = a(823379),
        H = a(900849),
        F = a(674588),
        Y = a(264043),
        U = a(303383),
        W = a(887706),
        V = a(738130),
        z = a(4461),
        K = a(34674),
        q = a(576958),
        X = a(924489),
        J = a(125909),
        Q = a(409425),
        $ = a(132871),
        ee = a(147890),
        en = a(491576),
        ea = a(527564),
        ei = a(326135),
        et = a(940064),
        er = a(626004),
        el = a(939893),
        es = a(430913),
        eo = a(606183),
        ec = a(272242),
        ed = a(981631),
        eu = a(558921),
        e_ = a(689938),
        em = a(613250),
        ep = a(902294);
      let eg = d().parserFor(el.Z),
        eI = d().reactFor(d().ruleOutput(el.Z, "react")),
        eh = (0, m.Mg)(I.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
        ex = "redirect_to_support_server",
        ev = "start_application_install",
        ef = (e) =>
          ""
            .concat(location.protocol, "//")
            .concat(location.host)
            .concat(ed.Z5c.APPLICATION_DIRECTORY_PROFILE(e)),
        eC = (e) => {
          if (null == e) return null;
          let n = e.match(
            /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
          );
          return null != n ? n[1] : null;
        };
      function eE(e) {
        var n, r, s, c;
        let d,
          {
            match: {
              params: {
                applicationId: m,
                section: g = ec.ApplicationDirectoryProfileSections.GENERAL,
              },
            },
          } = e,
          I = (0, $.useApplicationDirectoryHistory)((e) => e.guildId),
          C = (0, W.Z)(),
          N = (0, p.e7)(
            [U.Z],
            () =>
              U.Z.getFetchState({ applicationId: m, guildId: I }) ===
              U.M.FETCHING,
          ),
          el = t.useRef({ applicationId: void 0, guildId: void 0 }),
          { similarApplications: eC, similarLoadId: eE } = (0, p.cj)(
            [U.Z],
            () => {
              let e = { applicationId: m, guildId: I },
                n = U.Z.getSimilarApplications(e);
              return (
                null == n
                  ? (n = U.Z.getSimilarApplications(el.current))
                  : (el.current = e),
                {
                  similarApplications: null == n ? void 0 : n.applications,
                  similarLoadId: null == n ? void 0 : n.loadId,
                }
              );
            },
          ),
          eR = t.useMemo(() => (null == eC ? void 0 : eC.slice(0, 3)), [eC]),
          eN = (0, p.e7)([Y.Z], () => Y.Z.getApplicationFetchState(m)),
          [eT, ej] = t.useState(void 0),
          eS = t.useCallback(
            (e) => {
              if (null != m) {
                if (e === ec.ApplicationDirectoryProfileSections.GENERAL) {
                  (0, ee.replaceAppDirectoryURLWith)(
                    ed.Z5c.APPLICATION_DIRECTORY_PROFILE(m),
                  );
                  return;
                }
                (0, ee.replaceAppDirectoryURLWith)(
                  ed.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(m, e),
                );
              }
            },
            [m],
          ),
          eO = (0, p.e7)([Z.Z], () => Z.Z.isFocused()),
          eL = (0, p.e7)([D.default], () => D.default.locale),
          ey = t.useRef(m),
          eD = (0, p.e7)([Y.Z], () => {
            let e = Y.Z.getApplication(m);
            return (
              null == e
                ? (e = Y.Z.getApplication(ey.current))
                : (ey.current = m),
              e
            );
          }),
          eM = (0, en.Z)({ application: eD }),
          eZ = (0, p.e7)([M.default], () => M.default.getSessionId());
        (0, T.Tt)({ location: null == eD ? void 0 : eD.name });
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
                k.default.track(ed.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                  application_id: eD.id,
                  guild_id: n,
                });
              let e = { page: ed.ZY5.APPLICATION_DIRECTORY };
              await (0, H.Ub)(n, e, { setsHistorySnapshot: !1 });
            }
          } catch {}
        }, [eD]);
        t.useEffect(() => {
          if (null == eD) return;
          let e = new URL(location.href);
          if (C && null != eZ && "true" === e.searchParams.get(ex)) {
            e.searchParams.delete(ex);
            let n = e.pathname + e.search;
            (0, L.dL)(n), ek();
          }
        }, [C, ek, eZ, eD]);
        let ew = t.useCallback(() => {
            var e;
            null !=
              (null == eD
                ? void 0
                : null === (e = eD.guild) || void 0 === e
                  ? void 0
                  : e.id) && (C ? ek() : (0, K.rf)({ [ex]: "true" }));
          }, [eD, C, ek]),
          eB = t.useCallback(() => {
            (0, ee.replaceAppDirectoryURLWith)(
              ""
                .concat(ed.Z5c.APPLICATION_DIRECTORY_PROFILE(m))
                .concat(location.search),
            );
          }, [m]);
        t.useEffect(() => {
          g === ec.ApplicationDirectoryProfileSections.GENERAL && eB();
        }, [eB, g]),
          t.useEffect(() => {
            null != m && F.i6(m);
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
            size: eh,
          }),
          eH = (0, j.Z)({
            id:
              null !== (c = null == eD ? void 0 : eD.id) && void 0 !== c
                ? c
                : "",
            label: e_.Z.Messages.COPY_ID_APPLICATION,
          }),
          { canInstall: eF, install: eY } = (0, z.P)(eD, I),
          eU =
            null === (n = (0, $.getPreviousView)()) || void 0 === n
              ? void 0
              : n.type;
        t.useEffect(() => {
          (null == eD ? void 0 : eD.id) != null &&
            k.default.track(ed.rMx.APP_DIRECTORY_PAGE_VIEWED, {
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
            if (null != n) return O.VY.filter((e) => _.e$(_.vB(n), e));
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
                  k.default.track(ed.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
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
                .map(eP)
                .filter(G.lm)) && void 0 !== a
              ? a
              : [];
          }, [eD]),
          eK = t.useCallback(
            (e, n) => {
              if (e.type === ed.s9s.IMG) {
                let n = ez.filter((e) => e.type === ed.s9s.IMG),
                  t = n.findIndex((n) => n === e);
                if (t < 0) return;
                let r = n.map((e) => ({
                  src: (0, v.Q)(e.src),
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
                      modalCarouselItemClassName: em.appSlide,
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
                k.default.track(ed.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                  current_page: "product",
                  category: e.name,
                  category_id: e.id,
                  application_id: eD.id,
                  guild_id: I,
                }),
                (0, ee.goToCategory)({ categoryId: e.id });
            },
            [eD, I],
          );
        t.useEffect(() => {
          if (null != m) F.T4({ applicationId: m, guildId: I });
        }, [m, I]);
        let eX = t.useCallback(
            (e) => {
              let { application: n, mutualGuilds: a } = e;
              (null == eD ? void 0 : eD.id) != null &&
                k.default.track(ed.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                  current_page: "product",
                  application_id: eD.id,
                  suggested_application_id: n.id,
                  load_id: eE,
                  guild_id: I,
                  shown_mutual_guilds_count: a.length,
                }),
                (0, ee.goToApplication)({ applicationId: n.id });
            },
            [null == eD ? void 0 : eD.id, eE, I],
          ),
          eJ = t.useCallback(() => {
            null != eD &&
              (0, P.Z)((0, ei.G)({ id: eD.id, name: eD.name, locale: eL }));
          }, [eL, eD]),
          eQ = t.useCallback(
            (e) =>
              (0, i.jsxs)(h.Menu, {
                navId: "application-directory-profile",
                "aria-label":
                  e_.Z.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
                onClose: e,
                onSelect: void 0,
                children: [
                  (0, i.jsx)(h.MenuGroup, {
                    children: (0, i.jsx)(h.MenuItem, {
                      id: "report",
                      label: e_.Z.Messages.REPORT_APP,
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
              k.default.track(ed.rMx.APP_SHARE_BUTTON_CLICKED, {
                source: "product_page",
                application_id: eD.id,
                guild_id: I,
              }),
                (0, B.JG)(ef(eD.id)),
                e0(!0);
          }, [eD, e0, I]);
        t.useEffect(() => {
          let e = new URL(location.href);
          if (C && "true" === e.searchParams.get(ev)) {
            e.searchParams.delete(ev);
            let n = e.pathname + e.search;
            (0, L.dL)(n), eY("product_page");
          }
        }, [C, eY]);
        let e1 = t.useCallback(() => {
            null != eD &&
              (C
                ? eY("product_page")
                : (k.default.track(ed.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: m,
                    guild_id: I,
                    auth_type:
                      null != eD.custom_install_url ? "custom_url" : "in_app",
                    source: "product_page",
                    device_platform: u.tq ? "mobile_web" : "desktop_web",
                  }),
                  (0, K.rf)({ [ev]: "true" })));
          }, [eD, C, eY, m, I]),
          e5 = (null == eD ? void 0 : eD.id) === eu.g,
          [e8, e2] = t.useState(!1),
          [e3, e4] = t.useState(!1),
          [e9, e7] = t.useState(!0),
          ne = (e) => {
            null != e && e2(e.scrollHeight > e.clientHeight);
          },
          nn = null != eW && eW.length > 0,
          na = (null == eD ? void 0 : eD.flags) != null,
          ni = (0, R.R)(null != m ? m : "");
        t.useEffect(() => {
          ni && null != m && (0, A.Z)(m);
        }, [ni, m]);
        let nt = t.useMemo(() => {
            let e = [],
              n = !0;
            switch (g) {
              case ec.ApplicationDirectoryProfileSections.GENERAL: {
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
                            className: em.sectionHeader,
                            variant: "heading-md/semibold",
                            children:
                              e_.Z.Messages
                                .APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING,
                          }),
                          (0, i.jsx)("div", {
                            ref: ne,
                            className: l()({
                              [em.descriptionClamp]: !e3,
                              [em.descriptionClampSafari]:
                                !e3 && "Safari" === o().name,
                            }),
                            children: (0, i.jsx)(S.Z, {
                              className: em.detailedDescription,
                              parser: eg,
                              output: eI,
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
                              className: em.sectionHeader,
                              variant: "heading-md/semibold",
                              children:
                                e_.Z.Messages
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
                        (0, i.jsx)(y.Z, {
                          className: em.description,
                          userBio: eD.description,
                        }),
                      ),
                  null != eT &&
                    eT.length > 0 &&
                    (e.push(
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(h.Heading, {
                            className: em.sectionHeader,
                            variant: "heading-md/semibold",
                            children:
                              e_.Z.Messages
                                .APP_DIRECTORY_PROFILE_COMMANDS_HEADING,
                          }),
                          (0, i.jsx)(et.Z, {
                            className: em.commandList,
                            commands: eT,
                          }),
                        ],
                      }),
                    ),
                    (n = !0));
                break;
              }
              case ec.ApplicationDirectoryProfileSections.IMAGES: {
                if (0 === ez.length) break;
                let n = (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("img", {
                      className: em.errorImage,
                      src: ep,
                      "aria-hidden": !0,
                      alt: "",
                    }),
                    (0, i.jsx)(h.Heading, {
                      variant: "heading-xl/semibold",
                      children: e_.Z.Messages.ERRORS_IMAGE_NOT_FOUND,
                    }),
                  ],
                });
                ez.forEach((e, n) => {
                  null != eD
                    ? (e.alt =
                        e_.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format(
                          {
                            index: n + 1,
                            totalImages: ez.length,
                            name: eD.name,
                          },
                        ))
                    : (e.alt =
                        e_.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT);
                }),
                  e.push(
                    (0, i.jsx)(f.Z, {
                      className: em.carousel,
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
                          k.default.track(
                            ed.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED,
                            { application_id: eD.id, load_time_ms: a, src: n },
                          );
                      },
                    }),
                  );
                break;
              }
              case ec.ApplicationDirectoryProfileSections.STORE:
                ni && null != m && e.push((0, i.jsx)(ea.M, { appId: m }));
                break;
              case ec.ApplicationDirectoryProfileSections.PRIVACY:
                nn &&
                  e.push(
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(h.Heading, {
                          className: em.sectionHeader,
                          variant: "heading-md/semibold",
                          children:
                            e_.Z.Messages
                              .APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING,
                        }),
                        (0, i.jsx)(x.Z, {
                          className: em.commandList,
                          grantedPermissions: eW,
                          grantedPermissionsHeader:
                            e_.Z.Messages
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
                            className: em.sectionHeader,
                            variant: "heading-md/semibold",
                            children:
                              e_.Z.Messages
                                .APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING,
                          }),
                          (0, i.jsx)(er.Z, { application: eD }),
                        ],
                      }),
                    );
            }
            return (
              e7(n),
              0 === e.length &&
                g !== ec.ApplicationDirectoryProfileSections.GENERAL &&
                null != eD &&
                eB(),
              e.map((e, n) =>
                (0, i.jsx)("div", { className: em.section, children: e }, n),
              )
            );
          }, [g, eB, eD, eT, e3, e8, ez, eO, eK, ni, m, nn, na, eW]),
          nr = t.useMemo(() => {
            let e = [
              {
                name: ec.ApplicationDirectoryProfileSections.GENERAL,
                text: e_.Z.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL,
                Icon: h.AppsIcon,
              },
            ];
            return (
              ez.length > 0 &&
                e.push({
                  name: ec.ApplicationDirectoryProfileSections.IMAGES,
                  text: e_.Z.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES,
                  Icon: h.ImagesIcon,
                }),
              ni &&
                e.push({
                  name: ec.ApplicationDirectoryProfileSections.STORE,
                  text: e_.Z.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
                  Icon: h.ShopSparkleIcon,
                }),
              (nn || na) &&
                e.push({
                  name: ec.ApplicationDirectoryProfileSections.PRIVACY,
                  text: e_.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
                  Icon: h.PrivacyAndSafetyIcon,
                }),
              e
            );
          }, [ez.length, nn, na, ni]);
        return (
          (d =
            null == eD
              ? null == eN || eN === Y.M.FETCHING
                ? (0, i.jsx)(J.Z, { loading: eN === Y.M.FETCHING })
                : (0, i.jsx)("div", {
                    className: em.__invalid_page,
                    children: (0, i.jsxs)("div", {
                      className: em.emptyContainer,
                      children: [
                        (0, i.jsx)("img", {
                          className: em.emptyImage,
                          src: ep,
                          alt: "",
                        }),
                        (0, i.jsx)(h.Heading, {
                          variant: "heading-xl/semibold",
                          children:
                            e_.Z.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING,
                        }),
                      ],
                    }),
                  })
              : (0, i.jsxs)(J.Z, {
                  loading: eN === Y.M.FETCHING,
                  children: [
                    (0, i.jsx)(eA, { app: eD, iconSrc: eG }),
                    (0, i.jsxs)("div", {
                      className: em.__invalid_page,
                      children: [
                        (0, i.jsxs)("div", {
                          className: em.header,
                          children: [
                            (0, i.jsxs)("div", {
                              className: em.headerSidebar,
                              children: [
                                (0, i.jsx)("img", {
                                  className: em.headerIcon,
                                  alt: "",
                                  "aria-hidden": !0,
                                  src: eG,
                                  width: eh,
                                  height: eh,
                                }),
                                (0, i.jsx)(X.Z, {
                                  application: eD,
                                  mutualGuilds: eM,
                                  mutualGuildShownMax: 3,
                                  compact: !0,
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: em.headerContent,
                              children: [
                                (0, i.jsxs)("div", {
                                  className: em.headerNameAndButtons,
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className: em.headerNameAndIcon,
                                      children: [
                                        (0, i.jsx)(h.Heading, {
                                          className: em.name,
                                          variant: "heading-xxl/semibold",
                                          children: eD.name,
                                        }),
                                        ni &&
                                          (0, i.jsx)(h.Tooltip, {
                                            tooltipClassName:
                                              em.premiumIconTooltip,
                                            text: e_.Z.Messages
                                              .APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                            children: (e) =>
                                              (0, i.jsx)("img", {
                                                ...e,
                                                alt: e_.Z.Messages
                                                  .APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                className: em.premiumIcon,
                                                src: a(744050),
                                              }),
                                          }),
                                        e5 &&
                                          (0, i.jsx)(Q.Z, {
                                            className: em.partnerBadge,
                                          }),
                                      ],
                                    }),
                                    (0, i.jsxs)("div", {
                                      className: em.buttons,
                                      children: [
                                        (0, i.jsx)(h.Button, {
                                          onClick: e6,
                                          color: h.Button.Colors.PRIMARY,
                                          children: e$
                                            ? e_.Z.Messages
                                                .INTEGRATIONS_WEBHOOK_COPIED_URL
                                            : e_.Z.Messages
                                                .APP_DIRECTORY_PROFILE_SHARE_BUTTON,
                                        }),
                                        (0, i.jsx)(h.Button, {
                                          color: h.Button.Colors.BRAND,
                                          onClick: e1,
                                          disabled: !eF,
                                          children:
                                            e_.Z.Messages
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
                                              className: em.overflow,
                                              ...e,
                                              children: (0, i.jsx)(
                                                h.MoreHorizontalIcon,
                                                {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  width: 20,
                                                  height: 20,
                                                  className: em.iconInteractive,
                                                },
                                              ),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsx)(eo.Z, {
                                  activeSection: g,
                                  setSection: eV,
                                  sections: nr,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: em.contentContainer,
                          children: [
                            (0, i.jsxs)("div", {
                              className: em.content,
                              children: [
                                nt,
                                null != eR && eR.length > 0
                                  ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                        e9 &&
                                          (0, i.jsx)("div", {
                                            className: em.separator,
                                          }),
                                        (0, i.jsxs)("div", {
                                          className: em.section,
                                          children: [
                                            (0, i.jsx)(h.Heading, {
                                              className: em.relatedHeader,
                                              variant: "eyebrow",
                                              children:
                                                e_.Z.Messages
                                                  .APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING,
                                            }),
                                            (0, i.jsx)(J.Z, {
                                              loading: N,
                                              children: (0, i.jsx)(q.Z, {
                                                applications: eR,
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
                            (0, i.jsx)(es.Z, {
                              className: em.sidebar,
                              application: eD,
                              guildId: I,
                              onViewCategory: eq,
                              onClickGuildWidget: ew,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })),
          (0, i.jsx)(V.Z, { children: d })
        );
      }
      function eP(e) {
        switch (e.type) {
          case C.ee.MEDIA_PROXY:
            var n;
            let a = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
            return { type: ed.s9s.IMG, width: 0, height: 0, src: a };
          case C.ee.YOUTUBE:
            let i = eC(e.url);
            if (null != i)
              return { type: ed.s9s.YOUTUBE_VIDEO, youtubeVideoId: i };
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
                      className: em.showMoreButtonText,
                      variant: "eyebrow",
                      children: e_.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS,
                    }),
                    (0, i.jsx)(h.ChevronSmallUpIcon, {
                      size: "md",
                      color: "currentColor",
                      className: em.showMoreButtonIcon,
                    }),
                  ],
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(h.Text, {
                      className: em.showMoreButtonText,
                      variant: "eyebrow",
                      children: e_.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE,
                    }),
                    (0, i.jsx)(h.ChevronSmallDownIcon, {
                      size: "md",
                      color: "currentColor",
                      className: em.showMoreButtonIcon,
                    }),
                  ],
                })),
            (0, i.jsx)(eR, {
              children: (0, i.jsx)(h.Button, {
                look: h.Button.Looks.BLANK,
                color: h.Button.Colors.TRANSPARENT,
                size: h.Button.Sizes.NONE,
                className: em.showMoreButton,
                innerClassName: em.showMoreButtonInner,
                onClick: a,
                children: n,
              }),
            })
          );
        },
        eR = (e) => {
          let { className: n, contentClassName: a, children: t } = e;
          return (0, i.jsxs)("div", {
            className: l()([em.dividerContainer, n]),
            children: [
              (0, i.jsx)("div", { className: em.divider }),
              null != t
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("div", {
                        className: l()(em.contentDivider, a),
                        children: t,
                      }),
                      (0, i.jsx)("div", { className: em.divider }),
                    ],
                  })
                : null,
            ],
          });
        };
      function eA(e) {
        let { app: n, iconSrc: a } = e,
          r = (0, N.ZP)(a, g.Z.unsafe_rawColors.PRIMARY_800.css),
          { bot: l } = n,
          s = t.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != l) {
              let n = (0, w.aN)({
                id: l.id,
                banner: l.banner,
                size: 1024,
                canAnimate: !1,
              });
              null != n &&
                ((e["--custom-background-static"] = "url(".concat(n)),
                (e.height = "auto"));
              let a = (0, w.xR)(l.banner)
                ? (0, w.aN)({
                    id: l.id,
                    banner: l.banner,
                    size: 1024,
                    canAnimate: !0,
                  })
                : null;
              null != a &&
                (e["--custom-background-animated"] = "url(".concat(a));
            }
            return e;
          }, [r, l]);
        return (0, i.jsx)("div", {
          style: s,
          className: em.headerBanner,
          "data-has-animated": "--custom-background-animated" in s,
        });
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
        x = a(981631),
        v = a(689938),
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
                    children: v.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
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
                    children: v.Z.Messages.STOREFRONT_APP_PRODUCTS,
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
              path: x.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
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
              case x.epS.CONSUMABLE:
              case x.epS.DURABLE:
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
              case x.epS.SUBSCRIPTION:
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
          return v;
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
        x = a(330065);
      function v(e) {
        let { guild: n, className: a, onClick: t } = e,
          v = (0, s.ZP)(),
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
                      return x;
                  }
                })(v),
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
        x = a(689938),
        v = a(319333);
      let f = x.Z.getAvailableLocales();
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
              className: v.listIcon,
              color: null != t ? t : "currentColor",
              width: 20,
              height: 20,
              size: "custom",
            }))
          : null != a &&
            (m = (0, i.jsx)("img", {
              className: v.listImage,
              src: a,
              alt: "",
            }));
        let g = (0, i.jsxs)(i.Fragment, {
          children: [
            m,
            (0, i.jsx)(o.Text, {
              className: v.listText,
              variant: "text-md/normal",
              selectable: !0,
              children: d,
            }),
          ],
        });
        return (0, i.jsx)(c.Z, {
          href: r,
          className: l()(v.listItem, v.linkItem),
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
          [P, b] = t.useState(null),
          R = [],
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
            b(f.filter((n) => e.has(n.value)).map((e) => e.localizedName));
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
            R.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(o.Heading, {
                    className: v.sectionHeader,
                    variant: "eyebrow",
                    children:
                      x.Z.Messages.APP_DIRECTORY_PROFILE_CATEGORIES_HEADING,
                  }),
                  (0, i.jsx)("div", {
                    className: v.categories,
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
                              className: v.category,
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
            R.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(o.Heading, {
                    className: v.sectionHeader,
                    variant: "eyebrow",
                    children:
                      x.Z.Messages.APP_DIRECTORY_PROFILE_LANGUAGES_HEADING,
                  }),
                  (0, i.jsx)(I.Z, { supportedLanguages: P }),
                ],
              }),
            ),
          (null != s.terms_of_service_url ||
            null != s.privacy_policy_url ||
            A.length > 0) &&
            R.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(o.Heading, {
                    className: v.sectionHeader,
                    variant: "eyebrow",
                    children: x.Z.Messages.APP_DIRECTORY_PROFILE_LINKS_HEADING,
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
                        children: x.Z.Messages.APP_DIRECTORY_PROFILE_TERMS_LINK,
                      })
                    : null,
                  null != s.privacy_policy_url
                    ? (0, i.jsx)(E, {
                        icon: o.LockIcon,
                        onClick: N,
                        url: s.privacy_policy_url,
                        type: "policy",
                        children:
                          x.Z.Messages.APP_DIRECTORY_PROFILE_PRIVACY_LINK,
                      })
                    : null,
                ],
              }),
            ),
          null != s.guild &&
            s.guild.features.includes(h.oNc.DISCOVERABLE) &&
            R.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(o.Heading, {
                    className: v.sectionHeader,
                    variant: "eyebrow",
                    children: x.Z.Messages.APP_DIRECTORY_PROFILE_SERVER_HEADING,
                  }),
                  (0, i.jsx)(g.Z, { guild: s.guild, onClick: p }),
                ],
              }),
            ),
          (0, i.jsx)("div", {
            className: l()(v.sidebar, d),
            children:
              R.length > 0
                ? (0, i.jsx)(i.Fragment, {
                    children: R.map((e, n) =>
                      (0, i.jsx)(
                        "div",
                        { className: v.section, children: e },
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
        x = a(55563),
        v = a(551428),
        f = a(626135),
        C = a(768581),
        E = a(73346),
        P = a(624138),
        b = a(591759),
        R = a(601911),
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
          m = t.useMemo(() => (0, R.y)(n, 100), [n]),
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
            return null != n && null !== (e = b.Z.toURLSafe(n)) && void 0 !== e
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
            return null != n && null !== (e = b.Z.toURLSafe(n)) && void 0 !== e
              ? e
              : void 0;
          }, [g]),
          x = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
          v = t.useMemo(
            () => [...l.map((e) => e.skuId), ...s.map((e) => e.skuId)],
            [l, s],
          ),
          { analyticsLocations: E } = (0, _.ZP)(u.Z.APP_STOREFRONT);
        return (
          t.useEffect(() => {
            0 !== v.length &&
              f.default.track(O.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                application_id: n.id,
                sku_ids: v,
                location_stack: E,
              });
          }, [E, n.id, v]),
          (0, i.jsxs)("div", {
            className: y.wrapper,
            children: [
              (0, i.jsx)(r.j, {
                title: n.name,
                iconSrc: m,
                backgroundSrc: I,
                animatedBackgroundSrc: h,
                prefersReducedMotion: x,
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
          x = t.useMemo(() => {
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
          v = t.useMemo(
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
              imgSrc: v,
              subscriptionType: o,
              onPurchase: _,
              renderPurchaseButton: f,
              benefitItems:
                null != x
                  ? x.map((e) =>
                      (0, i.jsx)(s.G, { name: e.title, icon: e.icon }, e.id),
                    )
                  : void 0,
              onDetails:
                null != d
                  ? d
                  : null != x
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
          I = (0, o.e7)([v.Z], () => v.Z.getForSKU(s), [s]),
          h = (0, o.e7)([x.Z], () => x.Z.get(s), [s]),
          f = (0, N.M)(s);
        if (null == h) return null;
        let C = null !== (a = h.name) && void 0 !== a ? a : "",
          R =
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
              (r = b.Z.toURLSafe((0, E._W)(d, I.headerBackground, 256))) &&
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
              description: R,
              headerImage: A,
              availabilityLabel: y,
              onDetails:
                null != p
                  ? p
                  : (0, P.Ew)(R)
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
//# sourceMappingURL=8d1074d02c87fccb5c12.js.map
