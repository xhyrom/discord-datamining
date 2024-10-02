"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1979"],
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
    995648: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return c;
        },
      });
      var i = n(735250);
      n(470079);
      var t = n(120356),
        r = n.n(t),
        l = n(481060),
        s = n(422559),
        o = n(594045);
      function c(e) {
        let {
          grantedPermissions: a,
          disabledPermissions: n,
          grantedPermissionsHeader: t,
          disabledPermissionsHeader: c,
          className: d,
        } = e;
        return (0, i.jsxs)("div", {
          className: r()(o.list, d),
          children: [
            null != a && a.length > 0
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
                      children: a.map((e) =>
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
            null != n && n.length > 0
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
                      children: n.map((e) =>
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
    4461: function (e, a, n) {
      n.d(a, {
        P: function () {
          return r;
        },
      });
      var i = n(470079),
        t = n(135431);
      function r(e, a) {
        let n = i.useMemo(
          () =>
            null != e &&
            (0, t.Eb)({
              customInstallUrl: e.custom_install_url,
              installParams: e.install_params,
              integrationTypesConfig: e.integration_types_config,
            }),
          [e],
        );
        return {
          canInstall: n,
          install: i.useCallback(
            (n) => {
              if (null != e)
                (0, t.LO)({
                  applicationId: e.id,
                  customInstallUrl: e.custom_install_url,
                  installParams: e.install_params,
                  integrationTypesConfig: e.integration_types_config,
                  guildId: null != a ? a : void 0,
                  source: n,
                });
            },
            [e, a],
          ),
        };
      }
    },
    744142: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return u;
        },
      });
      var i = n(735250),
        t = n(470079),
        r = n(481060),
        l = n(768581),
        s = n(924489),
        o = n(950854),
        c = n(491576),
        d = n(169909);
      function u(e) {
        var a, n, u, _, p;
        let {
            application: m,
            className: g,
            childrenClassName: I,
            animatesOnHover: h,
            onClick: f,
            ...x
          } = e,
          C = l.ZP.getApplicationIconURL({ id: m.id, icon: m.icon, size: 48 }),
          v = (0, c.Z)({ application: m }),
          E = null === (a = m.categories) || void 0 === a ? void 0 : a[0],
          P =
            (null !==
              (_ =
                null === (n = m.directory_entry) || void 0 === n
                  ? void 0
                  : n.guild_count) && void 0 !== _
              ? _
              : 0) > 0 || v.length > 0,
          b = t.useCallback(() => {
            f({ mutualGuilds: v });
          }, [f, v]),
          A = (0, i.jsx)(s.Z, {
            application: m,
            textVariant: "text-xs/normal",
            mutualGuilds: v,
            mutualGuildShownMax: 3,
            guildIconSize: s.x.SMALL,
            compact: !0,
          });
        return (0, i.jsxs)(o.Z, {
          className: g,
          onClick: b,
          iconSrc: C,
          header: m.name,
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
            (null != m.description || null != I) &&
              (0, i.jsx)("div", {
                className: I,
                children: (0, i.jsx)(r.Text, {
                  className: d.listingDescription,
                  variant: "text-sm/normal",
                  lineClamp: 2,
                  children:
                    null !==
                      (p =
                        null === (u = m.directory_entry) || void 0 === u
                          ? void 0
                          : u.short_description) && void 0 !== p
                      ? p
                      : m.description,
                }),
              }),
            P &&
              (0, i.jsx)("div", {
                className: d.bottomGuildCountContainer,
                children: A,
              }),
          ],
        });
      }
    },
    576958: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return d;
        },
      });
      var i = n(735250);
      n(470079);
      var t = n(481060),
        r = n(463571),
        l = n(744142),
        s = n(981631),
        o = n(689938),
        c = n(558562);
      function d(e) {
        let {
          applications: a,
          className: n,
          listingClassName: l,
          title: d,
          showViewAll: _,
          onViewOne: p,
          onViewAll: m,
        } = e;
        return (0, i.jsxs)("div", {
          className: n,
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
                          onClick: m,
                          children:
                            o.Z.Messages.APP_DIRECTORY_LISTING_VIEW_ALL_BUTTON,
                        })
                      : null,
                  ],
                })
              : null,
            (0, i.jsx)("ul", {
              className: c.list,
              children: a.map((e) =>
                (0, i.jsx)(
                  r.Z,
                  {
                    href: s.Z5c.APPLICATION_DIRECTORY_PROFILE(e.id),
                    children: (0, i.jsx)(u, {
                      className: l,
                      application: e,
                      onClick: (a) => {
                        let { mutualGuilds: n } = a;
                        return p({ application: e, mutualGuilds: n });
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
    950854: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return c;
        },
      });
      var i = n(735250);
      n(470079);
      var t = n(120356),
        r = n.n(t),
        l = n(481060),
        s = n(689938),
        o = n(882089);
      function c(e) {
        let {
            className: a,
            onClick: n,
            imageSrc: t,
            iconSrc: c,
            header: d,
            headerClassName: u,
            subheaderVariant: _ = "text-sm/normal",
            subheader: p,
            children: m,
            animatesOnHover: g,
            ...I
          } = e,
          h = null != t,
          f = (0, i.jsxs)(i.Fragment, {
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
                          null != p &&
                            (0, i.jsx)(l.Text, {
                              className: o.subheader,
                              color: "header-secondary",
                              variant: _,
                              children: p,
                            }),
                        ],
                      }),
                    ],
                  }),
                  m,
                ],
              }),
            ],
          }),
          x = r()(a, o.container, { [o.hasImage]: h });
        return null != n
          ? (0, i.jsx)(l.ClickableContainer, {
              tag: "article",
              "aria-label":
                s.Z.Messages.APP_DIRECTORY_LISTING_CARD_BUTTON_A11Y_LABEL.format(
                  { name: d },
                ),
              onClick: n,
              className: r()(x, o.clickable, {
                [o.animatesOnHoverContainer]: g,
              }),
              focusProps: { offset: 4 },
              children: f,
            })
          : (0, i.jsx)("article", { className: x, ...I, children: f });
      }
    },
    409425: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return d;
        },
      });
      var i = n(735250);
      n(470079);
      var t = n(120356),
        r = n.n(t),
        l = n(481060),
        s = n(377171),
        o = n(689938),
        c = n(274679);
      function d(e) {
        let { className: a, ...n } = e;
        return (0, i.jsx)(l.TextBadge, {
          ...n,
          text: o.Z.Messages.APP_DIRECTORY_PARTNER,
          color: s.Z.BACKGROUND_TERTIARY,
          className: r()(a, c.partnerBadge),
        });
      }
    },
    753450: function (e, a, n) {
      n.r(a),
        n.d(a, {
          default: function () {
            return eP;
          },
        }),
        n(47120),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(789020),
        n(653041);
      var i = n(735250),
        t = n(470079),
        r = n(120356),
        l = n.n(r),
        s = n(525654),
        o = n.n(s),
        c = n(302454),
        d = n.n(c),
        u = n(873546),
        _ = n(149765),
        p = n(468194),
        m = n(442837),
        g = n(692547),
        I = n(477690),
        h = n(481060),
        f = n(995648),
        x = n(445986),
        C = n(9807),
        v = n(911969),
        E = n(330726),
        P = n(782568),
        b = n(581364),
        A = n(970321),
        R = n(283836),
        N = n(220082),
        T = n(252618),
        j = n(299206),
        S = n(241209),
        O = n(422559),
        L = n(703656),
        y = n(280885),
        D = n(706454),
        M = n(314897),
        Z = n(451478),
        k = n(626135),
        w = n(768581),
        B = n(572004),
        G = n(823379),
        H = n(900849),
        Y = n(135431),
        F = n(674588),
        U = n(264043),
        W = n(303383),
        V = n(887706),
        z = n(738130),
        K = n(4461),
        q = n(34674),
        X = n(576958),
        J = n(924489),
        Q = n(125909),
        $ = n(409425),
        ee = n(132871),
        ea = n(147890),
        en = n(491576),
        ei = n(527564),
        et = n(326135),
        er = n(940064),
        el = n(626004),
        es = n(939893),
        eo = n(430913),
        ec = n(606183),
        ed = n(272242),
        eu = n(981631),
        e_ = n(558921),
        ep = n(689938),
        em = n(613250),
        eg = n(902294);
      let eI = d().parserFor(es.Z),
        eh = d().reactFor(d().ruleOutput(es.Z, "react")),
        ef = (0, p.Mg)(I.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
        ex = "redirect_to_support_server",
        eC = "start_application_install",
        ev = (e) =>
          ""
            .concat(location.protocol, "//")
            .concat(location.host)
            .concat(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(e)),
        eE = (e) => {
          if (null == e) return null;
          let a = e.match(
            /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
          );
          return null != a ? a[1] : null;
        };
      function eP(e) {
        var a, r, s, c;
        let d,
          {
            match: {
              params: {
                applicationId: p,
                section: g = ed.ApplicationDirectoryProfileSections.GENERAL,
              },
            },
          } = e,
          I = (0, ee.useApplicationDirectoryHistory)((e) => e.guildId),
          v = (0, V.Z)(),
          N = (0, m.e7)(
            [W.Z],
            () =>
              W.Z.getFetchState({ applicationId: p, guildId: I }) ===
              W.M.FETCHING,
          ),
          es = t.useRef({ applicationId: void 0, guildId: void 0 }),
          { similarApplications: eE, similarLoadId: eP } = (0, m.cj)(
            [W.Z],
            () => {
              let e = { applicationId: p, guildId: I },
                a = W.Z.getSimilarApplications(e);
              return (
                null == a
                  ? (a = W.Z.getSimilarApplications(es.current))
                  : (es.current = e),
                {
                  similarApplications: null == a ? void 0 : a.applications,
                  similarLoadId: null == a ? void 0 : a.loadId,
                }
              );
            },
          ),
          eR = t.useMemo(() => (null == eE ? void 0 : eE.slice(0, 3)), [eE]),
          eT = (0, m.e7)([U.Z], () => U.Z.getApplicationFetchState(p)),
          [ej, eS] = t.useState(void 0),
          eO = t.useCallback(
            (e) => {
              if (null != p) {
                if (e === ed.ApplicationDirectoryProfileSections.GENERAL) {
                  (0, ea.replaceAppDirectoryURLWith)(
                    eu.Z5c.APPLICATION_DIRECTORY_PROFILE(p),
                  );
                  return;
                }
                (0, ea.replaceAppDirectoryURLWith)(
                  eu.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(p, e),
                );
              }
            },
            [p],
          ),
          eL = (0, m.e7)([Z.Z], () => Z.Z.isFocused()),
          ey = (0, m.e7)([D.default], () => D.default.locale),
          eD = t.useRef(p),
          eM = (0, m.e7)([U.Z], () => {
            let e = U.Z.getApplication(p);
            return (
              null == e
                ? (e = U.Z.getApplication(eD.current))
                : (eD.current = p),
              e
            );
          }),
          eZ = (0, en.Z)({ application: eM }),
          ek = (0, m.e7)([M.default], () => M.default.getSessionId());
        (0, T.Tt)({ location: null == eM ? void 0 : eM.name });
        let ew = t.useCallback(async () => {
          try {
            var e;
            let a =
              null == eM
                ? void 0
                : null === (e = eM.guild) || void 0 === e
                  ? void 0
                  : e.id;
            if (null != a) {
              (null == eM ? void 0 : eM.id) != null &&
                k.default.track(eu.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                  application_id: eM.id,
                  guild_id: a,
                });
              let e = { page: eu.ZY5.APPLICATION_DIRECTORY };
              await (0, H.Ub)(a, e, { setsHistorySnapshot: !1 });
            }
          } catch {}
        }, [eM]);
        t.useEffect(() => {
          if (null == eM) return;
          let e = new URL(location.href);
          if (v && null != ek && "true" === e.searchParams.get(ex)) {
            e.searchParams.delete(ex);
            let a = e.pathname + e.search;
            (0, L.dL)(a), ew();
          }
        }, [v, ew, ek, eM]);
        let eB = t.useCallback(() => {
            var e;
            null !=
              (null == eM
                ? void 0
                : null === (e = eM.guild) || void 0 === e
                  ? void 0
                  : e.id) && (v ? ew() : (0, q.rf)({ [ex]: "true" }));
          }, [eM, v, ew]),
          eG = t.useCallback(() => {
            (0, ea.replaceAppDirectoryURLWith)(
              ""
                .concat(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(p))
                .concat(location.search),
            );
          }, [p]);
        t.useEffect(() => {
          g === ed.ApplicationDirectoryProfileSections.GENERAL && eG();
        }, [eG, g]),
          t.useEffect(() => {
            null != p && F.i6(p);
          }, [p]),
          t.useEffect(() => {
            if ((null == eM ? void 0 : eM.directory_entry) != null) {
              let e = eM.directory_entry,
                a = null == e ? void 0 : e.popular_application_commands;
              null != a
                ? eS(
                    a.map((e) =>
                      (0, b.Z8)({
                        rootCommand: e,
                        command: e,
                        applicationId: e.application_id,
                      }),
                    ),
                  )
                : eS(void 0);
            }
          }, [eM]);
        let eH = w.ZP.getApplicationIconURL({
            id:
              null !== (s = null == eM ? void 0 : eM.id) && void 0 !== s
                ? s
                : "-1",
            icon: null == eM ? void 0 : eM.icon,
            size: ef,
          }),
          eY = (0, j.Z)({
            id:
              null !== (c = null == eM ? void 0 : eM.id) && void 0 !== c
                ? c
                : "",
            label: ep.Z.Messages.COPY_ID_APPLICATION,
          }),
          { canInstall: eF, install: eU } = (0, K.P)(eM, I),
          eW =
            null === (a = (0, ee.getPreviousView)()) || void 0 === a
              ? void 0
              : a.type;
        t.useEffect(() => {
          (null == eM ? void 0 : eM.id) != null &&
            k.default.track(eu.rMx.APP_DIRECTORY_PAGE_VIEWED, {
              current_page: "product",
              previous_page: eW,
              application_id: eM.id,
              guild_id: I,
              shown_mutual_guilds_count: eZ.length,
              profile_section: g,
              referrer: document.referrer,
            });
        }, [null == eM ? void 0 : eM.id, I, eZ]);
        let eV = t.useMemo(() => {
            var e;
            let a =
              null == eM
                ? void 0
                : null === (e = eM.install_params) || void 0 === e
                  ? void 0
                  : e.permissions;
            if (null != a) return O.VY.filter((e) => _.e$(_.vB(a), e));
          }, [
            null == eM
              ? void 0
              : null === (r = eM.install_params) || void 0 === r
                ? void 0
                : r.permissions,
          ]),
          ez = t.useCallback(
            (e) => {
              eO(e),
                (null == eM ? void 0 : eM.id) != null &&
                  k.default.track(eu.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                    application_id: eM.id,
                    guild_id: I,
                    tab_name: e,
                  });
            },
            [null == eM ? void 0 : eM.id, I, eO],
          ),
          eK = t.useMemo(() => {
            var e, a, n;
            return null !==
              (n = (
                null !==
                  (a =
                    null == eM
                      ? void 0
                      : null === (e = eM.directory_entry) || void 0 === e
                        ? void 0
                        : e.carousel_items) && void 0 !== a
                  ? a
                  : []
              )
                .map(eb)
                .filter(G.lm)) && void 0 !== n
              ? n
              : [];
          }, [eM]),
          eq = t.useCallback(
            (e, a) => {
              if (e.type === eu.s9s.IMG) {
                let a = eK.filter((e) => e.type === eu.s9s.IMG),
                  t = a.findIndex((a) => a === e);
                if (t < 0) return;
                let r = a.map((e) => ({
                  src: (0, x.Q)(e.src),
                  width: e.width,
                  height: e.height,
                }));
                (0, h.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("41814")
                    .then(n.bind(n, 895023));
                  return (a) => {
                    let { ...n } = a;
                    return (0, i.jsx)(e, {
                      ...n,
                      items: r,
                      startingIndex: t,
                      modalCarouselItemClassName: em.appSlide,
                    });
                  };
                });
              }
            },
            [eK],
          ),
          eX = t.useCallback(
            (e) => {
              (null == eM ? void 0 : eM.id) != null &&
                k.default.track(eu.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                  current_page: "product",
                  category: e.name,
                  category_id: e.id,
                  application_id: eM.id,
                  guild_id: I,
                }),
                (0, ea.goToCategory)({ categoryId: e.id });
            },
            [eM, I],
          );
        t.useEffect(() => {
          if (null != p) F.T4({ applicationId: p, guildId: I });
        }, [p, I]);
        let eJ = t.useCallback(
            (e) => {
              let { application: a, mutualGuilds: n } = e;
              (null == eM ? void 0 : eM.id) != null &&
                k.default.track(eu.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                  current_page: "product",
                  application_id: eM.id,
                  suggested_application_id: a.id,
                  load_id: eP,
                  guild_id: I,
                  shown_mutual_guilds_count: n.length,
                }),
                (0, ea.goToApplication)({ applicationId: a.id });
            },
            [null == eM ? void 0 : eM.id, eP, I],
          ),
          eQ = t.useCallback(() => {
            null != eM &&
              (0, P.Z)((0, et.G)({ id: eM.id, name: eM.name, locale: ey }));
          }, [ey, eM]),
          e$ = t.useCallback(
            (e) =>
              (0, i.jsxs)(h.Menu, {
                navId: "application-directory-profile",
                "aria-label":
                  ep.Z.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
                onClose: e,
                onSelect: void 0,
                children: [
                  (0, i.jsx)(h.MenuGroup, {
                    children: (0, i.jsx)(h.MenuItem, {
                      id: "report",
                      label: ep.Z.Messages.REPORT_APP,
                      color: "danger",
                      action: eQ,
                    }),
                  }),
                  null != eY ? (0, i.jsx)(h.MenuGroup, { children: eY }) : null,
                ],
              }),
            [eY, eQ],
          ),
          [e0, e6] = (0, E.Z)(!1, 1e3),
          e1 = t.useCallback(() => {
            if (null != eM)
              k.default.track(eu.rMx.APP_SHARE_BUTTON_CLICKED, {
                source: "product_page",
                application_id: eM.id,
                guild_id: I,
              }),
                (0, B.JG)(ev(eM.id)),
                e6(!0);
          }, [eM, e6, I]);
        t.useEffect(() => {
          let e = new URL(location.href);
          if (v && "true" === e.searchParams.get(eC)) {
            e.searchParams.delete(eC);
            let a = e.pathname + e.search;
            (0, L.dL)(a), eU("product_page");
          }
        }, [v, eU]);
        let e8 = t.useCallback(() => {
            if (null != eM) {
              if ((u.tq || u.Em) && null == eM.custom_install_url) {
                let e = (0, Y.Er)({
                  applicationId: eM.id,
                  customInstallUrl: eM.custom_install_url,
                  installParams: eM.install_params,
                  integrationTypesConfig: eM.integration_types_config,
                });
                if (null != e) {
                  window.open(e, "_blank");
                  return;
                }
              }
              v
                ? eU("product_page")
                : (k.default.track(eu.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: p,
                    guild_id: I,
                    auth_type:
                      null != eM.custom_install_url ? "custom_url" : "in_app",
                    source: "product_page",
                    device_platform: u.tq ? "mobile_web" : "desktop_web",
                  }),
                  (0, q.rf)({ [eC]: "true" }));
            }
          }, [eM, v, eU, p, I]),
          e5 = (null == eM ? void 0 : eM.id) === e_.g,
          [e2, e3] = t.useState(!1),
          [e4, e9] = t.useState(!1),
          [e7, ae] = t.useState(!0),
          aa = (e) => {
            null != e && e3(e.scrollHeight > e.clientHeight);
          },
          an = null != eV && eV.length > 0,
          ai = (null == eM ? void 0 : eM.flags) != null,
          at = (0, A.R)(null != p ? p : "");
        t.useEffect(() => {
          at && null != p && (0, R.Z)(p);
        }, [at, p]);
        let ar = t.useMemo(() => {
            let e = [],
              a = !0;
            switch (g) {
              case ed.ApplicationDirectoryProfileSections.GENERAL: {
                var n, t;
                let r =
                  null == eM
                    ? void 0
                    : null === (n = eM.directory_entry) || void 0 === n
                      ? void 0
                      : n.detailed_description;
                null != r && r.length > 0
                  ? (e.push(
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(h.Heading, {
                            className: em.sectionHeader,
                            variant: "heading-md/semibold",
                            children:
                              ep.Z.Messages
                                .APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING,
                          }),
                          (0, i.jsx)("div", {
                            ref: aa,
                            className: l()({
                              [em.descriptionClamp]: !e4,
                              [em.descriptionClampSafari]:
                                !e4 && "Safari" === o().name,
                            }),
                            children: (0, i.jsx)(S.Z, {
                              className: em.detailedDescription,
                              parser: eI,
                              output: eh,
                              state: { allowLinks: !0 },
                              children: r,
                            }),
                          }),
                          (e2 || e4) &&
                            (0, i.jsx)(eA, {
                              isViewAll: e4,
                              onToggle: () => {
                                e9((e) => !e);
                              },
                            }),
                        ],
                      }),
                    ),
                    (a = !1))
                  : (null == eM
                        ? void 0
                        : null === (t = eM.directory_entry) || void 0 === t
                          ? void 0
                          : t.short_description) !== void 0
                    ? e.push(
                        (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(h.Heading, {
                              className: em.sectionHeader,
                              variant: "heading-md/semibold",
                              children:
                                ep.Z.Messages
                                  .APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING,
                            }),
                            (0, i.jsx)("span", {
                              children: eM.directory_entry.short_description,
                            }),
                          ],
                        }),
                      )
                    : (null == eM ? void 0 : eM.description) != null &&
                      e.push(
                        (0, i.jsx)(y.Z, {
                          className: em.description,
                          userBio: eM.description,
                        }),
                      ),
                  null != ej &&
                    ej.length > 0 &&
                    (e.push(
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(h.Heading, {
                            className: em.sectionHeader,
                            variant: "heading-md/semibold",
                            children:
                              ep.Z.Messages
                                .APP_DIRECTORY_PROFILE_COMMANDS_HEADING,
                          }),
                          (0, i.jsx)(er.Z, {
                            className: em.commandList,
                            commands: ej,
                          }),
                        ],
                      }),
                    ),
                    (a = !0));
                break;
              }
              case ed.ApplicationDirectoryProfileSections.IMAGES: {
                if (0 === eK.length) break;
                let a = (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("img", {
                      className: em.errorImage,
                      src: eg,
                      "aria-hidden": !0,
                      alt: "",
                    }),
                    (0, i.jsx)(h.Heading, {
                      variant: "heading-xl/semibold",
                      children: ep.Z.Messages.ERRORS_IMAGE_NOT_FOUND,
                    }),
                  ],
                });
                eK.forEach((e, a) => {
                  null != eM
                    ? (e.alt =
                        ep.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format(
                          {
                            index: a + 1,
                            totalImages: eK.length,
                            name: eM.name,
                          },
                        ))
                    : (e.alt =
                        ep.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT);
                }),
                  e.push(
                    (0, i.jsx)(C.Z, {
                      className: em.carousel,
                      themedPagination: !0,
                      items: eK,
                      autoplayInterval: 8e3,
                      paused: !eL,
                      videoAutoPlay: !0,
                      onCurrentItemClick: eq,
                      errorComponent: a,
                      onImageLoad: (e) => {
                        let { src: a, loadTimeMs: n } = e;
                        null != n &&
                          null != eM &&
                          k.default.track(
                            eu.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED,
                            { application_id: eM.id, load_time_ms: n, src: a },
                          );
                      },
                    }),
                  );
                break;
              }
              case ed.ApplicationDirectoryProfileSections.STORE:
                at && null != p && e.push((0, i.jsx)(ei.M, { appId: p }));
                break;
              case ed.ApplicationDirectoryProfileSections.PRIVACY:
                an &&
                  e.push(
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(h.Heading, {
                          className: em.sectionHeader,
                          variant: "heading-md/semibold",
                          children:
                            ep.Z.Messages
                              .APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING,
                        }),
                        (0, i.jsx)(f.Z, {
                          className: em.commandList,
                          grantedPermissions: eV,
                          grantedPermissionsHeader:
                            ep.Z.Messages
                              .APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING,
                        }),
                      ],
                    }),
                  ),
                  ai &&
                    e.push(
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(h.Heading, {
                            className: em.sectionHeader,
                            variant: "heading-md/semibold",
                            children:
                              ep.Z.Messages
                                .APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING,
                          }),
                          (0, i.jsx)(el.Z, { application: eM }),
                        ],
                      }),
                    );
            }
            return (
              ae(a),
              0 === e.length &&
                g !== ed.ApplicationDirectoryProfileSections.GENERAL &&
                null != eM &&
                eG(),
              e.map((e, a) =>
                (0, i.jsx)("div", { className: em.section, children: e }, a),
              )
            );
          }, [g, eG, eM, ej, e4, e2, eK, eL, eq, at, p, an, ai, eV]),
          al = t.useMemo(() => {
            let e = [
              {
                name: ed.ApplicationDirectoryProfileSections.GENERAL,
                text: ep.Z.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL,
                Icon: h.AppsIcon,
              },
            ];
            return (
              eK.length > 0 &&
                e.push({
                  name: ed.ApplicationDirectoryProfileSections.IMAGES,
                  text: ep.Z.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES,
                  Icon: h.ImagesIcon,
                }),
              at &&
                e.push({
                  name: ed.ApplicationDirectoryProfileSections.STORE,
                  text: ep.Z.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
                  Icon: h.ShopSparkleIcon,
                }),
              (an || ai) &&
                e.push({
                  name: ed.ApplicationDirectoryProfileSections.PRIVACY,
                  text: ep.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
                  Icon: h.PrivacyAndSafetyIcon,
                }),
              e
            );
          }, [eK.length, an, ai, at]);
        return (
          (d =
            null == eM
              ? null == eT || eT === U.M.FETCHING
                ? (0, i.jsx)(Q.Z, { loading: eT === U.M.FETCHING })
                : (0, i.jsx)("div", {
                    className: em.__invalid_page,
                    children: (0, i.jsxs)("div", {
                      className: em.emptyContainer,
                      children: [
                        (0, i.jsx)("img", {
                          className: em.emptyImage,
                          src: eg,
                          alt: "",
                        }),
                        (0, i.jsx)(h.Heading, {
                          variant: "heading-xl/semibold",
                          children:
                            ep.Z.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING,
                        }),
                      ],
                    }),
                  })
              : (0, i.jsxs)(Q.Z, {
                  loading: eT === U.M.FETCHING,
                  children: [
                    (0, i.jsx)(eN, { app: eM, iconSrc: eH }),
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
                                  src: eH,
                                  width: ef,
                                  height: ef,
                                }),
                                (0, i.jsx)(J.Z, {
                                  application: eM,
                                  mutualGuilds: eZ,
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
                                          children: eM.name,
                                        }),
                                        at &&
                                          (0, i.jsx)(h.Tooltip, {
                                            tooltipClassName:
                                              em.premiumIconTooltip,
                                            text: ep.Z.Messages
                                              .APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                            children: (e) =>
                                              (0, i.jsx)("img", {
                                                ...e,
                                                alt: ep.Z.Messages
                                                  .APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                className: em.premiumIcon,
                                                src: n(744050),
                                              }),
                                          }),
                                        e5 &&
                                          (0, i.jsx)($.Z, {
                                            className: em.partnerBadge,
                                          }),
                                      ],
                                    }),
                                    (0, i.jsxs)("div", {
                                      className: em.buttons,
                                      children: [
                                        (0, i.jsx)(h.Button, {
                                          onClick: e1,
                                          color: h.Button.Colors.PRIMARY,
                                          children: e0
                                            ? ep.Z.Messages
                                                .INTEGRATIONS_WEBHOOK_COPIED_URL
                                            : ep.Z.Messages
                                                .APP_DIRECTORY_PROFILE_SHARE_BUTTON,
                                        }),
                                        (0, i.jsx)(h.Button, {
                                          color: h.Button.Colors.BRAND,
                                          onClick: e8,
                                          disabled: !eF,
                                          children:
                                            ep.Z.Messages
                                              .APPLICATION_ADD_BUTTON,
                                        }),
                                        (0, i.jsx)(h.Popout, {
                                          renderPopout: (e) => {
                                            let { closePopout: a } = e;
                                            return e$(a);
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
                                (0, i.jsx)(ec.Z, {
                                  activeSection: g,
                                  setSection: ez,
                                  sections: al,
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
                                ar,
                                null != eR && eR.length > 0
                                  ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                        e7 &&
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
                                                ep.Z.Messages
                                                  .APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING,
                                            }),
                                            (0, i.jsx)(Q.Z, {
                                              loading: N,
                                              children: (0, i.jsx)(X.Z, {
                                                applications: eR,
                                                onViewOne: eJ,
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
                              className: em.sidebar,
                              application: eM,
                              guildId: I,
                              onViewCategory: eX,
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
      function eb(e) {
        switch (e.type) {
          case v.ee.MEDIA_PROXY:
            var a;
            let n = null !== (a = e.proxy_url) && void 0 !== a ? a : e.url;
            return { type: eu.s9s.IMG, width: 0, height: 0, src: n };
          case v.ee.YOUTUBE:
            let i = eE(e.url);
            if (null != i)
              return { type: eu.s9s.YOUTUBE_VIDEO, youtubeVideoId: i };
        }
        return console.warn("Unsupported carousel item", e), null;
      }
      let eA = (e) => {
          let a,
            { onToggle: n, isViewAll: t } = e;
          return (
            (a = t
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(h.Text, {
                      className: em.showMoreButtonText,
                      variant: "eyebrow",
                      children: ep.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS,
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
                      children: ep.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE,
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
                onClick: n,
                children: a,
              }),
            })
          );
        },
        eR = (e) => {
          let { className: a, contentClassName: n, children: t } = e;
          return (0, i.jsxs)("div", {
            className: l()([em.dividerContainer, a]),
            children: [
              (0, i.jsx)("div", { className: em.divider }),
              null != t
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("div", {
                        className: l()(em.contentDivider, n),
                        children: t,
                      }),
                      (0, i.jsx)("div", { className: em.divider }),
                    ],
                  })
                : null,
            ],
          });
        };
      function eN(e) {
        let { app: a, iconSrc: n } = e,
          r = (0, N.ZP)(n, g.Z.unsafe_rawColors.PRIMARY_800.css),
          { bot: l } = a,
          s = t.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != l) {
              let a = (0, w.aN)({
                id: l.id,
                banner: l.banner,
                size: 1024,
                canAnimate: !1,
              });
              null != a &&
                ((e["--custom-background-static"] = "url(".concat(a)),
                (e.height = "auto"));
              let n = (0, w.xR)(l.banner)
                ? (0, w.aN)({
                    id: l.id,
                    banner: l.banner,
                    size: 1024,
                    canAnimate: !0,
                  })
                : null;
              null != n &&
                (e["--custom-background-animated"] = "url(".concat(n));
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
    527564: function (e, a, n) {
      n.d(a, {
        M: function () {
          return E;
        },
      }),
        n(789020);
      var i = n(735250),
        t = n(470079),
        r = n(120356),
        l = n.n(r),
        s = n(442837),
        o = n(481060),
        c = n(765717),
        d = n(283836),
        u = n(507608),
        _ = n(147496),
        p = n(955335),
        m = n(519896),
        g = n(171246),
        I = n(55563),
        h = n(147890),
        f = n(272242),
        x = n(981631),
        C = n(689938),
        v = n(778452);
      function E(e) {
        let { appId: a } = e,
          { subscriptions: n, otps: t } = (0, d.q)(a);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            n.length > 0 &&
              (0, i.jsxs)("div", {
                className: v.productSection,
                children: [
                  (0, i.jsx)(p.r, { subscriptions: n }),
                  (0, i.jsx)("div", {
                    className: l()(v.productList, v.subList),
                    children: n.map((e) =>
                      (0, i.jsx)(
                        u.zz,
                        {
                          appId: a,
                          listing: e,
                          subscriptionType: (0, g.KW)(e.skuFlags)
                            ? "user"
                            : "guild",
                          onDetails: () => {
                            (0, h.goToApplicationStoreSku)({
                              applicationId: a,
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
                className: v.productSection,
                children: [
                  (0, i.jsx)(o.Heading, {
                    variant: "heading-lg/semibold",
                    children: C.Z.Messages.STOREFRONT_APP_PRODUCTS,
                  }),
                  (0, i.jsx)("div", {
                    className: l()(v.productList, v.itemList),
                    children: t.map((e) =>
                      (0, i.jsx)(
                        u.hd,
                        {
                          skuId: e.skuId,
                          appId: a,
                          onDetails: () => {
                            (0, h.goToApplicationStoreSku)({
                              applicationId: a,
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
              render: (e) => (0, i.jsx)(P, { ...e }),
            }),
          ],
        });
      }
      function P(e) {
        let {
            match: {
              params: { applicationId: a, skuId: n },
            },
          } = e,
          r = (0, s.e7)([I.Z], () => I.Z.get(n), [n]),
          l = (0, s.e7)(
            [I.Z],
            () => (null != n ? I.Z.getParentSKU(n) : void 0),
            [n],
          ),
          c = t.useId();
        return (
          t.useLayoutEffect(() => {
            switch (null == r ? void 0 : r.type) {
              case x.epS.CONSUMABLE:
              case x.epS.DURABLE:
                return (function (e, a, n) {
                  (0, o.openModal)(
                    (e) => {
                      let { onClose: t, transitionState: r } = e;
                      return (0, i.jsx)(_.ItemDetailsModal, {
                        appId: a,
                        skuId: n,
                        onClose: t,
                        transitionState: r,
                      });
                    },
                    {
                      modalKey: e,
                      onCloseCallback() {
                        !b() &&
                          (0, h.goToApplicationSection)({
                            applicationId: a,
                            section:
                              f.ApplicationDirectoryProfileSections.STORE,
                          });
                      },
                    },
                  );
                })(c, a, n);
              case x.epS.SUBSCRIPTION:
                if ((null == l ? void 0 : l.flags) == null) return;
                return (function (e, a, n, t) {
                  (0, o.openModal)(
                    (e) => {
                      let { onClose: r, transitionState: l } = e;
                      return (0, i.jsx)(m.SubscriptionDetailsModal, {
                        appId: a,
                        subscriptionType: (0, g.KW)(t) ? "user" : "guild",
                        skuId: n,
                        guildId: null,
                        onClose: r,
                        transitionState: l,
                      });
                    },
                    {
                      modalKey: e,
                      onCloseCallback() {
                        !b() &&
                          (0, h.goToApplicationSection)({
                            applicationId: a,
                            section:
                              f.ApplicationDirectoryProfileSections.STORE,
                          });
                      },
                    },
                  );
                })(c, a, n, l.flags);
            }
          }, [
            a,
            c,
            null == l ? void 0 : l.flags,
            null == r ? void 0 : r.type,
            n,
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
      function b() {
        return window.location.pathname.startsWith("/login");
      }
    },
    326135: function (e, a, n) {
      n.d(a, {
        G: function () {
          return t;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var i = n(981631);
      let t = (e) => {
        let { id: a, name: n, locale: t } = e,
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
          l.append("tf_12094971213335", a),
          l.append("ticket_form_id", "12275528604823"),
          l.append(
            "tf_subject",
            "App Directory Report ".concat(n, " ").concat(a),
          ),
          "".concat(r, "?").concat(l.toString())
        );
      };
    },
    940064: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return c;
        },
      });
      var i = n(735250);
      n(470079);
      var t = n(120356),
        r = n.n(t),
        l = n(481060),
        s = n(665692),
        o = n(992534);
      function c(e) {
        let { commands: a, className: n } = e;
        return (0, i.jsx)("div", {
          className: r()(o.list, n),
          children: a.map((e) =>
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
    626004: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return I;
        },
      }),
        n(789020);
      var i = n(735250),
        t = n(470079),
        r = n(120356),
        l = n.n(r),
        s = n(481060),
        o = n(860719),
        c = n(63063),
        d = n(49012),
        u = n(981631),
        _ = n(689938),
        p = n(568161);
      let m = c.Z.getArticleURL(u.BhN.BOT_DATA_ACCESS);
      function g(e) {
        let { icon: a, heading: n, body: t } = e;
        return (0, i.jsxs)("li", {
          className: p.intentContainer,
          children: [
            (0, i.jsx)("div", {
              children: (0, i.jsx)(a, { color: "currentColor", size: "md" }),
            }),
            (0, i.jsxs)("div", {
              className: p.intentTextContainer,
              children: [
                (0, i.jsx)("div", {
                  children: (0, i.jsx)(s.Heading, {
                    variant: "eyebrow",
                    color: "header-secondary",
                    children: n,
                  }),
                }),
                (0, i.jsx)("div", {
                  className: p.intentBody,
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
        let { application: a } = e,
          {
            hasMessageContent: n,
            hasGuildPresences: r,
            hasGuildMembers: c,
            hasIntents: u,
          } = (0, o.w)({ flags: null == a ? void 0 : a.flags }),
          I = t.useCallback(() => {
            (null == a ? void 0 : a.privacy_policy_url) != null &&
              (0, d.q)({ href: a.privacy_policy_url });
          }, [null == a ? void 0 : a.privacy_policy_url]);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            u &&
              (0, i.jsx)("div", {
                className: p.intentsListHeading,
                children: (0, i.jsx)(s.Text, {
                  variant: "text-md/normal",
                  children:
                    _.Z.Messages
                      .APP_DIRECTORY_PROFILE_DATA_ACCESS_INTENTS_LIST_HEADING,
                }),
              }),
            (0, i.jsxs)("div", {
              className: p.intentsContainer,
              children: [
                u &&
                  (0, i.jsxs)("ul", {
                    className: p.intentsList,
                    children: [
                      n &&
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
                  className: l()({ [p.hasSeparator]: u }),
                  children: [
                    (0, i.jsx)(s.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: _.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
                        helpCenterUrl: m,
                      }),
                    }),
                    (null == a ? void 0 : a.privacy_policy_url) != null &&
                      (0, i.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        className: p.privacyPolicy,
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
    214912: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return x;
        },
      });
      var i = n(735250);
      n(470079);
      var t = n(120356),
        r = n.n(t),
        l = n(481060),
        s = n(410030),
        o = n(686546),
        c = n(565138),
        d = n(372769),
        u = n(134432),
        _ = n(601964),
        p = n(768581),
        m = n(981631),
        g = n(689938),
        I = n(660857),
        h = n(129512),
        f = n(330065);
      function x(e) {
        let { guild: a, className: n, onClick: t } = e,
          x = (0, s.ZP)(),
          C = new _.ZP({ name: a.name, icon: a.icon }),
          v = p.ZP.getGuildDiscoverySplashURL({
            id: a.id,
            splash: a.discovery_splash,
            size: 192 * (0, u.x_)(),
          }),
          E =
            null != v
              ? v
              : (function (e) {
                  switch (e) {
                    case m.BRd.DARK:
                      return h;
                    case m.BRd.LIGHT:
                      return f;
                  }
                })(x),
          P = p.ZP.getGuildIconURL({ id: a.id, icon: a.icon, size: 50 });
        return (0, i.jsxs)(l.Clickable, {
          className: r()(I.card, n),
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
                        guild: C,
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
                      guild: a,
                      tooltipColor: l.Tooltip.Colors.PRIMARY,
                    }),
                    (0, i.jsx)(l.Heading, {
                      variant: "heading-md/semibold",
                      className: I.guildName,
                      children: a.name,
                    }),
                  ],
                }),
                (0, i.jsx)(l.Text, {
                  className: I.guildDescription,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  lineClamp: 2,
                  children: a.description,
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
                            { count: a.approximate_member_count },
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
    939893: function (e, a, n) {
      var i = n(735250);
      n(470079);
      var t = n(302454),
        r = n.n(t),
        l = n(481060),
        s = n(447543),
        o = n(15470),
        c = n(960904),
        d = n(830121),
        u = n(746878),
        _ = n(241209);
      let p = /^discord.gg\/[a-zA-Z0-9-]+/,
        m = {
          ..._.Z.rules,
          heading: { ...o.i.heading },
          image: { ...r().defaultRules.image },
          inviteLink: {
            order: _.Z.rules.link.order + 1,
            match: (e, a) => (a.inline ? p.exec(e) : null),
            parse: (e, a, n) => {
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
                        null === (e = n.closeModal) ||
                          void 0 === e ||
                          e.call(n);
                    },
                  };
            },
            react: (e, a, n) =>
              (0, i.jsx)(
                l.Anchor,
                {
                  onClick: (a) => {
                    a.preventDefault(), e.onClick();
                  },
                  children: (0, u.S)(e, a, n),
                },
                n.key,
              ),
          },
        };
      a.Z = m;
    },
    430913: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return P;
        },
      }),
        n(47120),
        n(653041),
        n(610138),
        n(216116),
        n(78328),
        n(815648);
      var i = n(735250),
        t = n(470079),
        r = n(120356),
        l = n.n(r),
        s = n(780384),
        o = n(481060),
        c = n(794295),
        d = n(410030),
        u = n(726542),
        _ = n(626135),
        p = n(463571),
        m = n(887706),
        g = n(214912),
        I = n(290247),
        h = n(981631),
        f = n(689938),
        x = n(319333);
      let C = f.Z.getAvailableLocales();
      function v(e) {
        var a, n, t;
        let { onClick: r, url: l, children: c } = e,
          _ = (0, d.ZP)(),
          p = u.Z.getByUrl(l),
          m = (0, s.wj)(_)
            ? null == p
              ? void 0
              : null === (a = p.icon) || void 0 === a
                ? void 0
                : a.darkSVG
            : null == p
              ? void 0
              : null === (n = p.icon) || void 0 === n
                ? void 0
                : n.lightSVG;
        return (0, i.jsx)(E, {
          icon: void 0 === m ? o.LinkIcon : void 0,
          imageSrc: m,
          onClick: r,
          url: l,
          type:
            null !== (t = null == p ? void 0 : p.name) && void 0 !== t
              ? t
              : "website",
          children: c,
        });
      }
      function E(e) {
        let {
            icon: a,
            imageSrc: n,
            iconColor: t,
            url: r,
            type: s,
            children: d,
            onClick: u,
          } = e,
          _ = (0, m.Z)(),
          p = null;
        null != a
          ? (p = (0, i.jsx)(a, {
              className: x.listIcon,
              color: null != t ? t : "currentColor",
              width: 20,
              height: 20,
              size: "custom",
            }))
          : null != n &&
            (p = (0, i.jsx)("img", {
              className: x.listImage,
              src: n,
              alt: "",
            }));
        let g = (0, i.jsxs)(i.Fragment, {
          children: [
            p,
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
        var a, n, r;
        let {
            application: s,
            guildId: c,
            className: d,
            onViewCategory: u,
            onClickGuildWidget: m,
          } = e,
          [P, b] = t.useState(null),
          A = [],
          R =
            null !==
              (n =
                null == s
                  ? void 0
                  : null === (a = s.directory_entry) || void 0 === a
                    ? void 0
                    : a.external_urls) && void 0 !== n
              ? n
              : [];
        t.useEffect(() => {
          var e;
          if (
            (null === (e = s.directory_entry) || void 0 === e
              ? void 0
              : e.supported_locales) !== void 0
          ) {
            let e = new Set(s.directory_entry.supported_locales);
            b(C.filter((a) => e.has(a.value)).map((e) => e.localizedName));
          }
        }, [s.directory_entry]);
        let N = (e, a) => {
          _.default.track(
            h.rMx.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED,
            { application_id: s.id, guild_id: c, type: a, url: e },
          );
        };
        return (
          null != s.categories &&
            s.categories.length > 0 &&
            A.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(o.Heading, {
                    className: x.sectionHeader,
                    variant: "eyebrow",
                    children:
                      f.Z.Messages.APP_DIRECTORY_PROFILE_CATEGORIES_HEADING,
                  }),
                  (0, i.jsx)("div", {
                    className: x.categories,
                    children: (null !== (r = s.categories) && void 0 !== r
                      ? r
                      : []
                    ).map((e) => {
                      let a = new URLSearchParams();
                      return (
                        a.set("category_id", e.id.toString()),
                        (0, i.jsx)(
                          p.Z,
                          {
                            href: ""
                              .concat(h.Z5c.APPLICATION_DIRECTORY_SEARCH, "?")
                              .concat(a),
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
            A.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(o.Heading, {
                    className: x.sectionHeader,
                    variant: "eyebrow",
                    children:
                      f.Z.Messages.APP_DIRECTORY_PROFILE_LANGUAGES_HEADING,
                  }),
                  (0, i.jsx)(I.Z, { supportedLanguages: P }),
                ],
              }),
            ),
          (null != s.terms_of_service_url ||
            null != s.privacy_policy_url ||
            R.length > 0) &&
            A.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(o.Heading, {
                    className: x.sectionHeader,
                    variant: "eyebrow",
                    children: f.Z.Messages.APP_DIRECTORY_PROFILE_LINKS_HEADING,
                  }),
                  R.map((e, a) =>
                    (0, i.jsx)(
                      v,
                      { url: e.url, onClick: N, children: e.name },
                      a,
                    ),
                  ),
                  null != s.terms_of_service_url
                    ? (0, i.jsx)(E, {
                        icon: o.LinkIcon,
                        onClick: N,
                        url: s.terms_of_service_url,
                        type: "tos",
                        children: f.Z.Messages.APP_DIRECTORY_PROFILE_TERMS_LINK,
                      })
                    : null,
                  null != s.privacy_policy_url
                    ? (0, i.jsx)(E, {
                        icon: o.LockIcon,
                        onClick: N,
                        url: s.privacy_policy_url,
                        type: "policy",
                        children:
                          f.Z.Messages.APP_DIRECTORY_PROFILE_PRIVACY_LINK,
                      })
                    : null,
                ],
              }),
            ),
          null != s.guild &&
            s.guild.features.includes(h.oNc.DISCOVERABLE) &&
            A.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(o.Heading, {
                    className: x.sectionHeader,
                    variant: "eyebrow",
                    children: f.Z.Messages.APP_DIRECTORY_PROFILE_SERVER_HEADING,
                  }),
                  (0, i.jsx)(g.Z, { guild: s.guild, onClick: m }),
                ],
              }),
            ),
          (0, i.jsx)("div", {
            className: l()(x.sidebar, d),
            children:
              A.length > 0
                ? (0, i.jsx)(i.Fragment, {
                    children: A.map((e, a) =>
                      (0, i.jsx)(
                        "div",
                        { className: x.section, children: e },
                        a,
                      ),
                    ),
                  })
                : null,
          })
        );
      }
    },
    290247: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return o;
        },
      });
      var i = n(735250);
      n(470079);
      var t = n(120356),
        r = n.n(t),
        l = n(481060),
        s = n(769003);
      function o(e) {
        let { supportedLanguages: a } = e;
        return (0, i.jsx)("ul", {
          className: s.outerContainer,
          children: a.map((e) =>
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
    606183: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return l;
        },
      });
      var i = n(735250);
      n(470079);
      var t = n(481060),
        r = n(668896);
      function l(e) {
        let { activeSection: a, setSection: n, sections: l } = e;
        return (0, i.jsx)(t.TabBar, {
          selectedItem: a,
          type: "top",
          onItemSelect: n,
          className: r.tabBar,
          children: l.map((e) => {
            let { name: a, text: n, Icon: l } = e;
            return (0, i.jsxs)(
              t.TabBar.Item,
              {
                id: a,
                className: r.tabBarItem,
                "aria-label": n,
                children: [
                  (0, i.jsx)(l, { className: r.icon, color: "currentColor" }),
                  n,
                ],
              },
              a,
            );
          }),
        });
      }
    },
    860719: function (e, a, n) {
      n.d(a, {
        w: function () {
          return t;
        },
      }),
        n(789020);
      var i = n(85025);
      function t(e) {
        let { flags: a } = e,
          n = (0, i.O)(a),
          t =
            null != n &&
            ((null == n ? void 0 : n.messageContent) ||
              (null == n ? void 0 : n.messageContentLimited)),
          r =
            null != n &&
            ((null == n ? void 0 : n.guildPresences) ||
              (null == n ? void 0 : n.guildPresencesLimited)),
          l =
            null != n &&
            ((null == n ? void 0 : n.guildMembers) ||
              (null == n ? void 0 : n.guildMembersLimited));
        return {
          hasMessageContent: t,
          hasGuildPresences: r,
          hasGuildMembers: l,
          hasIntents: t || r || l,
        };
      }
    },
    85025: function (e, a, n) {
      n.d(a, {
        O: function () {
          return r;
        },
      });
      var i = n(630388),
        t = n(981631);
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
    578361: function (e, a, n) {
      n.d(a, {
        n: function () {
          return t;
        },
      });
      var i,
        t,
        r = n(735250),
        l = n(470079),
        s = n(120356),
        o = n.n(s),
        c = n(748780),
        d = n(215569),
        u = n(189682);
      ((i = t || (t = {}))[(i.RIGHT = -1)] = "RIGHT"),
        (i[(i.LEFT = 1)] = "LEFT");
      let _ = { friction: 7, tension: 40, clamp: !0 };
      class p extends l.PureComponent {
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
          var a, n, i;
          super(e),
            (a = this),
            (i = void 0),
            (n = "_animated") in a
              ? Object.defineProperty(a, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (a[n] = i),
            (this._animated = new c.Z.Value(-1 * e.direction));
        }
      }
      a.Z = (e) => {
        let {
          children: a,
          step: n,
          direction: i,
          className: t,
          springSettings: l = _,
          fadeInOut: s = !1,
        } = e;
        return (0, r.jsx)(d.W, {
          component: "div",
          className: o()(u.animator, t),
          children: (0, r.jsx)(
            p,
            { direction: i, springSettings: l, fadeInOut: s, children: a },
            n,
          ),
        });
      };
    },
    594045: function (e, a, n) {
      e.exports = {
        container: "container_a06168",
        list: "list_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
        permissionHeader: "permissionHeader_a06168",
      };
    },
    161243: function (e, a, n) {
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
    31185: function (e, a, n) {
      e.exports = {
        wrapper: "wrapper_b6f1f8",
        slide: "slide_b6f1f8",
        navPrev: "navPrev_b6f1f8 nav_b6f1f8",
        navNext: "navNext_b6f1f8 nav_b6f1f8",
      };
    },
    499142: function (e, a, n) {
      e.exports = {
        collapsed: "collapsed_e2ea95",
        blurb: "blurb_e2ea95",
        description: "description_e2ea95",
        toggleCollapseButton: "toggleCollapseButton_e2ea95",
        assetWrapper: "assetWrapper_e2ea95",
        asset: "asset_e2ea95",
      };
    },
    310436: function (e, a, n) {
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
    433027: function (e, a, n) {
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
    169909: function (e, a, n) {
      e.exports = {
        listingDescription: "listingDescription_d2c3da",
        bottomGuildCountContainer: "bottomGuildCountContainer_d2c3da",
      };
    },
    558562: function (e, a, n) {
      e.exports = { header: "header_d5abe9", list: "list_d5abe9" };
    },
    488107: function (e, a, n) {
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
    882089: function (e, a, n) {
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
    507716: function (e, a, n) {
      e.exports = {
        container: "container_da6719",
        spinnerContainer: "spinnerContainer_da6719",
        spinner: "spinner_da6719",
        loading: "loading_da6719",
      };
    },
    274679: function (e, a, n) {
      e.exports = { partnerBadge: "partnerBadge_de92a5" };
    },
    613250: function (e, a, n) {
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
    778452: function (e, a, n) {
      e.exports = {
        productSection: "productSection_a9d0f5",
        productList: "productList_a9d0f5",
        subList: "subList_a9d0f5",
        itemList: "itemList_a9d0f5",
      };
    },
    992534: function (e, a, n) {
      e.exports = {
        list: "list_e0307d",
        row: "row_e0307d",
        commandName: "commandName_e0307d",
      };
    },
    568161: function (e, a, n) {
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
    660857: function (e, a, n) {
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
    319333: function (e, a, n) {
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
    769003: function (e, a, n) {
      e.exports = {
        outerContainer: "outerContainer_b51750",
        innerContainer: "innerContainer_b51750",
        languageItem: "languageItem_b51750",
      };
    },
    668896: function (e, a, n) {
      e.exports = {
        tabBar: "tabBar_bc3297",
        tabBarItem: "tabBarItem_bc3297",
        icon: "icon_bc3297",
      };
    },
    335567: function (e, a, n) {
      e.exports = {
        wrapper: "wrapper_bfa0f5",
        productSection: "productSection_bfa0f5",
        productList: "productList_bfa0f5",
        legalText: "legalText_bfa0f5",
      };
    },
    353947: function (e, a, n) {
      e.exports = { title: "title_eaa702" };
    },
    189682: function (e, a, n) {
      e.exports = { animator: "animator_abd0f1", item: "item_abd0f1" };
    },
    985312: function (e, a, n) {
      e.exports = {
        logo: "logo_b0f834",
        title: "title_b0f834",
        header: "header_b0f834",
      };
    },
    207533: function (e, a, n) {
      e.exports = {
        markdown: "markdown_b97ce2",
        blockquote: "blockquote_b97ce2",
        codeInline: "codeInline_b97ce2",
        paragraph: "paragraph_b97ce2",
      };
    },
    446174: function (e, a, n) {
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
    744184: function (e, a, n) {
      e.exports = {
        singleItemWrapper: "singleItemWrapper_e3183f",
        carousel: "carousel_e3183f",
        item: "item_e3183f",
        singleItem: "singleItem_e3183f item_e3183f",
        viewport: "viewport_e3183f",
      };
    },
    665923: function (e, a, n) {
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
    529079: function (e, a, n) {
      e.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    147333: function (e, a, n) {
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
//# sourceMappingURL=0061c8bd2b6a8c3f1dbf.js.map
