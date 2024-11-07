"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83374"],
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
    995648: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(120356),
        r = n.n(a),
        l = n(481060),
        o = n(422559),
        s = n(354266);
      function c(e) {
        let {
          grantedPermissions: t,
          disabledPermissions: n,
          grantedPermissionsHeader: a,
          disabledPermissionsHeader: c,
          className: d,
        } = e;
        return (0, i.jsxs)("div", {
          className: r()(s.list, d),
          children: [
            null != t && t.length > 0
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    null != a
                      ? (0, i.jsx)(l.Heading, {
                          variant: "heading-sm/semibold",
                          color: "header-primary",
                          className: s.header,
                          children: a,
                        })
                      : null,
                    (0, i.jsx)("div", {
                      className: s.container,
                      children: t.map((e) =>
                        (0, i.jsxs)(
                          "div",
                          {
                            className: s.permission,
                            children: [
                              (0, i.jsx)(l.CheckmarkLargeIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: s.check,
                              }),
                              (0, i.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: (0, o.wt)(e),
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
                      ? (0, i.jsx)(l.Heading, {
                          variant: "heading-sm/semibold",
                          color: "header-primary",
                          className: s.header,
                          children: c,
                        })
                      : null,
                    (0, i.jsx)("div", {
                      className: s.container,
                      children: n.map((e) =>
                        (0, i.jsxs)(
                          "div",
                          {
                            className: s.permission,
                            children: [
                              (0, i.jsx)(l.XSmallIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: s.cross,
                              }),
                              (0, i.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: (0, o.wt)(e),
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
    4461: function (e, t, n) {
      n.d(t, {
        P: function () {
          return r;
        },
      });
      var i = n(192379),
        a = n(135431);
      function r(e, t) {
        let n = i.useMemo(
          () =>
            null != e &&
            (0, a.Eb)({
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
                (0, a.LO)({
                  applicationId: e.id,
                  customInstallUrl: e.custom_install_url,
                  installParams: e.install_params,
                  integrationTypesConfig: e.integration_types_config,
                  guildId: null != t ? t : void 0,
                  source: n,
                });
            },
            [e, t],
          ),
        };
      }
    },
    744142: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651),
        a = n(192379),
        r = n(481060),
        l = n(768581),
        o = n(924489),
        s = n(950854),
        c = n(824606),
        d = n(212991);
      function u(e) {
        var t, n, u, p, m;
        let {
            application: _,
            className: h,
            childrenClassName: f,
            animatesOnHover: g,
            onClick: v,
            ...I
          } = e,
          x = l.ZP.getApplicationIconURL({ id: _.id, icon: _.icon, size: 48 }),
          C = (0, c.Z)({ application: _ }),
          S = null === (t = _.categories) || void 0 === t ? void 0 : t[0],
          N =
            (null !==
              (p =
                null === (n = _.directory_entry) || void 0 === n
                  ? void 0
                  : n.guild_count) && void 0 !== p
              ? p
              : 0) > 0 || C.length > 0,
          b = a.useCallback(() => {
            v({ mutualGuilds: C });
          }, [v, C]),
          T = (0, i.jsx)(o.Z, {
            application: _,
            textVariant: "text-xs/normal",
            mutualGuilds: C,
            mutualGuildShownMax: 3,
            guildIconSize: o.x.SMALL,
            compact: !0,
          });
        return (0, i.jsxs)(s.Z, {
          className: h,
          onClick: b,
          iconSrc: x,
          header: _.name,
          subheader:
            null != S &&
            (0, i.jsx)(r.Text, {
              tag: "span",
              color: "header-secondary",
              variant: "text-xs/normal",
              children: S.name,
            }),
          animatesOnHover: g,
          ...I,
          children: [
            (null != _.description || null != f) &&
              (0, i.jsx)("div", {
                className: f,
                children: (0, i.jsx)(r.Text, {
                  className: d.listingDescription,
                  variant: "text-sm/normal",
                  lineClamp: 2,
                  children:
                    null !==
                      (m =
                        null === (u = _.directory_entry) || void 0 === u
                          ? void 0
                          : u.short_description) && void 0 !== m
                      ? m
                      : _.description,
                }),
              }),
            N &&
              (0, i.jsx)("div", {
                className: d.bottomGuildCountContainer,
                children: T,
              }),
          ],
        });
      }
    },
    576958: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(481060),
        r = n(463571),
        l = n(744142),
        o = n(981631),
        s = n(388032),
        c = n(759235);
      function d(e) {
        let {
          applications: t,
          className: n,
          listingClassName: l,
          title: d,
          showViewAll: p,
          onViewOne: m,
          onViewAll: _,
        } = e;
        return (0, i.jsxs)("div", {
          className: n,
          children: [
            null != d
              ? (0, i.jsxs)("div", {
                  className: c.header,
                  children: [
                    (0, i.jsx)(a.Heading, {
                      variant: "heading-lg/semibold",
                      children: d,
                    }),
                    p
                      ? (0, i.jsx)(a.Button, {
                          look: a.Button.Looks.LINK,
                          color: a.Button.Colors.LINK,
                          onClick: _,
                          children: s.intl.string(s.t["e+T3go"]),
                        })
                      : null,
                  ],
                })
              : null,
            (0, i.jsx)("ul", {
              className: c.list,
              children: t.map((e) =>
                (0, i.jsx)(
                  r.Z,
                  {
                    href: o.Z5c.APPLICATION_DIRECTORY_PROFILE(e.id),
                    children: (0, i.jsx)(u, {
                      className: l,
                      application: e,
                      onClick: (t) => {
                        let { mutualGuilds: n } = t;
                        return m({ application: e, mutualGuilds: n });
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
    950854: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(120356),
        r = n.n(a),
        l = n(481060),
        o = n(388032),
        s = n(646267);
      function c(e) {
        let {
            className: t,
            onClick: n,
            imageSrc: a,
            iconSrc: c,
            header: d,
            headerClassName: u,
            subheaderVariant: p = "text-sm/normal",
            subheader: m,
            children: _,
            animatesOnHover: h,
            ...f
          } = e,
          g = null != a,
          v = (0, i.jsxs)(i.Fragment, {
            children: [
              g &&
                (0, i.jsx)("div", {
                  className: s.imageContainer,
                  children: (0, i.jsx)("img", {
                    alt: "",
                    className: s.image,
                    src: a,
                  }),
                }),
              (0, i.jsxs)("div", {
                className: s.textContainer,
                children: [
                  (0, i.jsxs)("div", {
                    className: r()(s.topRowContainer),
                    children: [
                      null != c &&
                        (0, i.jsx)("img", {
                          className: s.icon,
                          alt: "",
                          "aria-hidden": !0,
                          src: c,
                          width: 48,
                          height: 48,
                        }),
                      (0, i.jsxs)("div", {
                        className: s.headerContainer,
                        children: [
                          (0, i.jsx)(l.Heading, {
                            variant: "heading-md/medium",
                            className: u,
                            children: d,
                          }),
                          null != m &&
                            (0, i.jsx)(l.Text, {
                              className: s.subheader,
                              color: "header-secondary",
                              variant: p,
                              children: m,
                            }),
                        ],
                      }),
                    ],
                  }),
                  _,
                ],
              }),
            ],
          }),
          I = r()(t, s.container, { [s.hasImage]: g });
        return null != n
          ? (0, i.jsx)(l.ClickableContainer, {
              tag: "article",
              "aria-label": o.intl.formatToPlainString(o.t["0cVQIC"], {
                name: d,
              }),
              onClick: n,
              className: r()(I, s.clickable, {
                [s.animatesOnHoverContainer]: h,
              }),
              focusProps: { offset: 4 },
              children: v,
            })
          : (0, i.jsx)("article", { className: I, ...f, children: v });
      }
    },
    409425: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(120356),
        r = n.n(a),
        l = n(481060),
        o = n(377171),
        s = n(388032),
        c = n(639634);
      function d(e) {
        let { className: t, ...n } = e;
        return (0, i.jsx)(l.TextBadge, {
          ...n,
          text: s.intl.string(s.t.LO4f0N),
          color: o.Z.BACKGROUND_TERTIARY,
          className: r()(t, c.partnerBadge),
        });
      }
    },
    753450: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return eN;
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
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(525654),
        s = n.n(o),
        c = n(302454),
        d = n.n(c),
        u = n(873546),
        p = n(149765),
        m = n(468194),
        _ = n(442837),
        h = n(692547),
        f = n(477690),
        g = n(481060),
        v = n(995648),
        I = n(445986),
        x = n(9807),
        C = n(330726),
        S = n(782568),
        N = n(581364),
        b = n(970321),
        T = n(283836),
        j = n(220082),
        y = n(252618),
        E = n(299206),
        A = n(241209),
        P = n(341176),
        L = n(312097),
        R = n(422559),
        k = n(703656),
        O = n(280885),
        B = n(706454),
        Z = n(314897),
        w = n(451478),
        F = n(626135),
        D = n(768581),
        H = n(572004),
        M = n(823379),
        U = n(900849),
        G = n(135431),
        z = n(674588),
        Y = n(264043),
        V = n(303383),
        K = n(887706),
        W = n(738130),
        X = n(4461),
        q = n(34674),
        J = n(576958),
        Q = n(924489),
        $ = n(125909),
        ee = n(409425),
        et = n(132871),
        en = n(147890),
        ei = n(824606),
        ea = n(527564),
        er = n(326135),
        el = n(940064),
        eo = n(626004),
        es = n(939893),
        ec = n(430913),
        ed = n(606183),
        eu = n(272242),
        ep = n(981631),
        em = n(558921),
        e_ = n(388032),
        eh = n(67124),
        ef = n(902294);
      let eg = d().parserFor(es.Z),
        ev = d().reactFor(d().ruleOutput(es.Z, "react")),
        eI = (0, m.Mg)(f.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
        ex = "redirect_to_support_server",
        eC = "start_application_install",
        eS = (e) =>
          ""
            .concat(location.protocol, "//")
            .concat(location.host)
            .concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(e));
      function eN(e) {
        var t, r, o, c;
        let d,
          {
            match: {
              params: {
                applicationId: m,
                section: h = eu.ApplicationDirectoryProfileSections.GENERAL,
              },
            },
          } = e,
          f = (0, et.useApplicationDirectoryHistory)((e) => e.guildId),
          j = (0, K.Z)(),
          es = (0, _.e7)(
            [V.Z],
            () =>
              V.Z.getFetchState({ applicationId: m, guildId: f }) ===
              V.M.FETCHING,
          ),
          eN = a.useRef({ applicationId: void 0, guildId: void 0 }),
          { similarApplications: eT, similarLoadId: ey } = (0, _.cj)(
            [V.Z],
            () => {
              let e = { applicationId: m, guildId: f },
                t = V.Z.getSimilarApplications(e);
              return (
                null == t
                  ? (t = V.Z.getSimilarApplications(eN.current))
                  : (eN.current = e),
                {
                  similarApplications: null == t ? void 0 : t.applications,
                  similarLoadId: null == t ? void 0 : t.loadId,
                }
              );
            },
          ),
          eE = a.useMemo(() => (null == eT ? void 0 : eT.slice(0, 3)), [eT]),
          eA = (0, _.e7)([Y.Z], () => Y.Z.getApplicationFetchState(m)),
          [eP, eL] = a.useState(void 0),
          eR = a.useCallback(
            (e) => {
              if (null != m) {
                if (e === eu.ApplicationDirectoryProfileSections.GENERAL) {
                  (0, en.replaceAppDirectoryURLWith)(
                    ep.Z5c.APPLICATION_DIRECTORY_PROFILE(m),
                  );
                  return;
                }
                (0, en.replaceAppDirectoryURLWith)(
                  ep.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(m, e),
                );
              }
            },
            [m],
          ),
          ek = (0, _.e7)([w.Z], () => w.Z.isFocused()),
          eO = (0, _.e7)([B.default], () => B.default.locale),
          eB = a.useRef(m),
          eZ = (0, _.e7)([Y.Z], () => {
            let e = Y.Z.getApplication(m);
            return (
              null == e
                ? (e = Y.Z.getApplication(eB.current))
                : (eB.current = m),
              e
            );
          }),
          ew = (0, ei.Z)({ application: eZ }),
          eF = (0, _.e7)([Z.default], () => Z.default.getSessionId());
        (0, y.Tt)({ location: null == eZ ? void 0 : eZ.name });
        let eD = a.useCallback(async () => {
          try {
            var e;
            let t =
              null == eZ
                ? void 0
                : null === (e = eZ.guild) || void 0 === e
                  ? void 0
                  : e.id;
            if (null != t) {
              (null == eZ ? void 0 : eZ.id) != null &&
                F.default.track(ep.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                  application_id: eZ.id,
                  guild_id: t,
                });
              let e = { page: ep.ZY5.APPLICATION_DIRECTORY };
              await (0, U.Ub)(t, e, { setsHistorySnapshot: !1 });
            }
          } catch {}
        }, [eZ]);
        a.useEffect(() => {
          if (null == eZ) return;
          let e = new URL(location.href);
          if (j && null != eF && "true" === e.searchParams.get(ex)) {
            e.searchParams.delete(ex);
            let t = e.pathname + e.search;
            (0, k.dL)(t), eD();
          }
        }, [j, eD, eF, eZ]);
        let eH = a.useCallback(() => {
            var e;
            null !=
              (null == eZ
                ? void 0
                : null === (e = eZ.guild) || void 0 === e
                  ? void 0
                  : e.id) && (j ? eD() : (0, q.rf)({ [ex]: "true" }));
          }, [eZ, j, eD]),
          eM = a.useCallback(() => {
            (0, en.replaceAppDirectoryURLWith)(
              ""
                .concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(m))
                .concat(location.search),
            );
          }, [m]);
        a.useEffect(() => {
          h === eu.ApplicationDirectoryProfileSections.GENERAL && eM();
        }, [eM, h]),
          a.useEffect(() => {
            if (null != m) {
              let e =
                "true" ===
                  new URLSearchParams(location.search).get("preview") || void 0;
              z.i6(m, { noCache: e });
            }
          }, [m]),
          a.useEffect(() => {
            if ((null == eZ ? void 0 : eZ.directory_entry) != null) {
              let e = eZ.directory_entry,
                t = null == e ? void 0 : e.popular_application_commands;
              null != t
                ? eL(
                    t.map((e) =>
                      (0, N.Z8)({
                        rootCommand: e,
                        command: e,
                        applicationId: e.application_id,
                      }),
                    ),
                  )
                : eL(void 0);
            }
          }, [eZ]);
        let eU = D.ZP.getApplicationIconURL({
            id:
              null !== (o = null == eZ ? void 0 : eZ.id) && void 0 !== o
                ? o
                : "-1",
            icon: null == eZ ? void 0 : eZ.icon,
            size: eI,
          }),
          eG = (0, E.Z)({
            id:
              null !== (c = null == eZ ? void 0 : eZ.id) && void 0 !== c
                ? c
                : "",
            label: e_.intl.string(e_.t["FfCL+/"]),
          }),
          { canInstall: ez, install: eY } = (0, X.P)(eZ, f),
          eV =
            null === (t = (0, et.getPreviousView)()) || void 0 === t
              ? void 0
              : t.type;
        a.useEffect(() => {
          (null == eZ ? void 0 : eZ.id) != null &&
            F.default.track(ep.rMx.APP_DIRECTORY_PAGE_VIEWED, {
              current_page: "product",
              previous_page: eV,
              application_id: eZ.id,
              guild_id: f,
              shown_mutual_guilds_count: ew.length,
              profile_section: h,
              referrer: document.referrer,
            });
        }, [null == eZ ? void 0 : eZ.id, f, ew]);
        let eK = a.useMemo(() => {
            var e;
            let t =
              null == eZ
                ? void 0
                : null === (e = eZ.install_params) || void 0 === e
                  ? void 0
                  : e.permissions;
            if (null != t) return R.VY.filter((e) => p.e$(p.vB(t), e));
          }, [
            null == eZ
              ? void 0
              : null === (r = eZ.install_params) || void 0 === r
                ? void 0
                : r.permissions,
          ]),
          eW = a.useCallback(
            (e) => {
              eR(e),
                (null == eZ ? void 0 : eZ.id) != null &&
                  F.default.track(ep.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                    application_id: eZ.id,
                    guild_id: f,
                    tab_name: e,
                  });
            },
            [null == eZ ? void 0 : eZ.id, f, eR],
          ),
          eX = a.useMemo(() => {
            var e, t, n;
            return null !==
              (n = (
                null !==
                  (t =
                    null == eZ
                      ? void 0
                      : null === (e = eZ.directory_entry) || void 0 === e
                        ? void 0
                        : e.carousel_items) && void 0 !== t
                  ? t
                  : []
              )
                .map(q.RF)
                .filter(M.lm)) && void 0 !== n
              ? n
              : [];
          }, [eZ]),
          eq = a.useCallback(
            (e, t) => {
              if (e.type === ep.s9s.IMG) {
                let t = eX.filter((e) => e.type === ep.s9s.IMG),
                  n = t.findIndex((t) => t === e);
                if (n < 0) return;
                let i = t.map((e) => ({
                  url: (0, I.Q)(e.src),
                  original: e.src,
                  width: e.width,
                  height: e.height,
                  type: "IMAGE",
                }));
                (0, L.K)({
                  items: i,
                  startingIndex: n,
                  fit: P.D.CONTAIN,
                  shouldHideMediaOptions: !0,
                  shouldAnimateCarousel: !0,
                  location: "ApplicationDirectoryProfile",
                });
              }
            },
            [eX],
          ),
          eJ = a.useCallback(
            (e) => {
              (null == eZ ? void 0 : eZ.id) != null &&
                F.default.track(ep.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                  current_page: "product",
                  category: e.name,
                  category_id: e.id,
                  application_id: eZ.id,
                  guild_id: f,
                }),
                (0, en.goToCategory)({ categoryId: e.id });
            },
            [eZ, f],
          );
        a.useEffect(() => {
          if (null != m) z.T4({ applicationId: m, guildId: f });
        }, [m, f]);
        let eQ = a.useCallback(
            (e) => {
              let { application: t, mutualGuilds: n } = e;
              (null == eZ ? void 0 : eZ.id) != null &&
                F.default.track(ep.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                  current_page: "product",
                  application_id: eZ.id,
                  suggested_application_id: t.id,
                  load_id: ey,
                  guild_id: f,
                  shown_mutual_guilds_count: n.length,
                }),
                (0, en.goToApplication)({ applicationId: t.id });
            },
            [null == eZ ? void 0 : eZ.id, ey, f],
          ),
          e$ = a.useCallback(() => {
            null != eZ &&
              (0, S.Z)((0, er.G)({ id: eZ.id, name: eZ.name, locale: eO }));
          }, [eO, eZ]),
          e0 = a.useCallback(
            (e) =>
              (0, i.jsxs)(g.Menu, {
                navId: "application-directory-profile",
                "aria-label": e_.intl.string(e_.t["/7I4/P"]),
                onClose: e,
                onSelect: void 0,
                children: [
                  (0, i.jsx)(g.MenuGroup, {
                    children: (0, i.jsx)(g.MenuItem, {
                      id: "report",
                      label: e_.intl.string(e_.t.NgA5vr),
                      color: "danger",
                      action: e$,
                    }),
                  }),
                  null != eG ? (0, i.jsx)(g.MenuGroup, { children: eG }) : null,
                ],
              }),
            [eG, e$],
          ),
          [e1, e2] = (0, C.Z)(!1, 1e3),
          e3 = a.useCallback(() => {
            if (null != eZ)
              F.default.track(ep.rMx.APP_SHARE_BUTTON_CLICKED, {
                source: "product_page",
                application_id: eZ.id,
                guild_id: f,
              }),
                (0, H.JG)(eS(eZ.id)),
                e2(!0);
          }, [eZ, e2, f]);
        a.useEffect(() => {
          let e = new URL(location.href);
          if (j && "true" === e.searchParams.get(eC)) {
            e.searchParams.delete(eC);
            let t = e.pathname + e.search;
            (0, k.dL)(t), eY("product_page");
          }
        }, [j, eY]);
        let e6 = a.useCallback(() => {
            if (null != eZ) {
              if ((u.tq || u.Em) && null == eZ.custom_install_url) {
                let e = (0, G.Er)({
                  applicationId: eZ.id,
                  customInstallUrl: eZ.custom_install_url,
                  installParams: eZ.install_params,
                  integrationTypesConfig: eZ.integration_types_config,
                });
                if (null != e) {
                  window.open(e, "_blank");
                  return;
                }
              }
              j
                ? eY("product_page")
                : (F.default.track(ep.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: m,
                    guild_id: f,
                    auth_type:
                      null != eZ.custom_install_url ? "custom_url" : "in_app",
                    source: "product_page",
                    device_platform: u.tq ? "mobile_web" : "desktop_web",
                  }),
                  (0, q.rf)({ [eC]: "true" }));
            }
          }, [eZ, j, eY, m, f]),
          e5 = (null == eZ ? void 0 : eZ.id) === em.g,
          [e9, e8] = a.useState(!1),
          [e4, e7] = a.useState(!1),
          [te, tt] = a.useState(!0),
          tn = (e) => {
            null != e && e8(e.scrollHeight > e.clientHeight);
          },
          ti = null != eK && eK.length > 0,
          ta = (null == eZ ? void 0 : eZ.flags) != null,
          tr = (0, b.R)(null != m ? m : "");
        a.useEffect(() => {
          tr && null != m && (0, T.Z)(m);
        }, [tr, m]);
        let tl = a.useMemo(() => {
            let e = [],
              t = !0;
            switch (h) {
              case eu.ApplicationDirectoryProfileSections.GENERAL: {
                var n, a;
                let r =
                  null == eZ
                    ? void 0
                    : null === (n = eZ.directory_entry) || void 0 === n
                      ? void 0
                      : n.detailed_description;
                null != r && r.length > 0
                  ? (e.push(
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(g.Heading, {
                            className: eh.sectionHeader,
                            variant: "heading-md/semibold",
                            children: e_.intl.string(e_.t.txraKS),
                          }),
                          (0, i.jsx)("div", {
                            ref: tn,
                            className: l()({
                              [eh.descriptionClamp]: !e4,
                              [eh.descriptionClampSafari]:
                                !e4 && "Safari" === s().name,
                            }),
                            children: (0, i.jsx)(A.Z, {
                              className: eh.detailedDescription,
                              parser: eg,
                              output: ev,
                              state: { allowLinks: !0 },
                              children: r,
                            }),
                          }),
                          (e9 || e4) &&
                            (0, i.jsx)(eb, {
                              isViewAll: e4,
                              onToggle: () => {
                                e7((e) => !e);
                              },
                            }),
                        ],
                      }),
                    ),
                    (t = !1))
                  : (null == eZ
                        ? void 0
                        : null === (a = eZ.directory_entry) || void 0 === a
                          ? void 0
                          : a.short_description) !== void 0
                    ? e.push(
                        (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(g.Heading, {
                              className: eh.sectionHeader,
                              variant: "heading-md/semibold",
                              children: e_.intl.string(e_.t.txraKS),
                            }),
                            (0, i.jsx)("span", {
                              children: eZ.directory_entry.short_description,
                            }),
                          ],
                        }),
                      )
                    : (null == eZ ? void 0 : eZ.description) != null &&
                      e.push(
                        (0, i.jsx)(O.Z, {
                          className: eh.description,
                          userBio: eZ.description,
                        }),
                      ),
                  null != eP &&
                    eP.length > 0 &&
                    (e.push(
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(g.Heading, {
                            className: eh.sectionHeader,
                            variant: "heading-md/semibold",
                            children: e_.intl.string(e_.t.swIgTE),
                          }),
                          (0, i.jsx)(el.Z, {
                            className: eh.commandList,
                            commands: eP,
                          }),
                        ],
                      }),
                    ),
                    (t = !0));
                break;
              }
              case eu.ApplicationDirectoryProfileSections.IMAGES: {
                if (0 === eX.length) break;
                let t = (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("img", {
                      className: eh.errorImage,
                      src: ef,
                      "aria-hidden": !0,
                      alt: "",
                    }),
                    (0, i.jsx)(g.Heading, {
                      variant: "heading-xl/semibold",
                      children: e_.intl.string(e_.t.UvDfMz),
                    }),
                  ],
                });
                eX.forEach((e, t) => {
                  null != eZ
                    ? (e.alt = e_.intl.formatToPlainString(e_.t.sSEhHR, {
                        index: t + 1,
                        totalImages: eX.length,
                        name: eZ.name,
                      }))
                    : (e.alt = e_.intl.string(e_.t["5UVm9/"]));
                }),
                  e.push(
                    (0, i.jsx)(x.Z, {
                      className: eh.carousel,
                      themedPagination: !0,
                      items: eX,
                      autoplayInterval: 8e3,
                      paused: !ek,
                      videoAutoPlay: !0,
                      onCurrentItemClick: eq,
                      errorComponent: t,
                      onImageLoad: (e) => {
                        let { src: t, loadTimeMs: n } = e;
                        null != n &&
                          null != eZ &&
                          F.default.track(
                            ep.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED,
                            { application_id: eZ.id, load_time_ms: n, src: t },
                          );
                      },
                    }),
                  );
                break;
              }
              case eu.ApplicationDirectoryProfileSections.STORE:
                tr && null != m && e.push((0, i.jsx)(ea.M, { appId: m }));
                break;
              case eu.ApplicationDirectoryProfileSections.PRIVACY:
                ti &&
                  e.push(
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(g.Heading, {
                          className: eh.sectionHeader,
                          variant: "heading-md/semibold",
                          children: e_.intl.string(e_.t.runNFx),
                        }),
                        (0, i.jsx)(v.Z, {
                          className: eh.commandList,
                          grantedPermissions: eK,
                          grantedPermissionsHeader: e_.intl.string(e_.t.SLgiND),
                        }),
                      ],
                    }),
                  ),
                  ta &&
                    e.push(
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(g.Heading, {
                            className: eh.sectionHeader,
                            variant: "heading-md/semibold",
                            children: e_.intl.string(e_.t.QzDgMj),
                          }),
                          (0, i.jsx)(eo.Z, { application: eZ }),
                        ],
                      }),
                    );
            }
            return (
              tt(t),
              0 === e.length &&
                h !== eu.ApplicationDirectoryProfileSections.GENERAL &&
                null != eZ &&
                eM(),
              e.map((e, t) =>
                (0, i.jsx)("div", { className: eh.section, children: e }, t),
              )
            );
          }, [h, eM, eZ, eP, e4, e9, eX, ek, eq, tr, m, ti, ta, eK]),
          to = a.useMemo(() => {
            let e = [
              {
                name: eu.ApplicationDirectoryProfileSections.GENERAL,
                text: e_.intl.string(e_.t.r4vJeX),
                Icon: g.AppsIcon,
              },
            ];
            return (
              eX.length > 0 &&
                e.push({
                  name: eu.ApplicationDirectoryProfileSections.IMAGES,
                  text: e_.intl.string(e_.t.BEFwGR),
                  Icon: g.ImagesIcon,
                }),
              tr &&
                e.push({
                  name: eu.ApplicationDirectoryProfileSections.STORE,
                  text: e_.intl.string(e_.t.pylO39),
                  Icon: g.ShopSparkleIcon,
                }),
              (ti || ta) &&
                e.push({
                  name: eu.ApplicationDirectoryProfileSections.PRIVACY,
                  text: e_.intl.string(e_.t.hrodJy),
                  Icon: g.PrivacyAndSafetyIcon,
                }),
              e
            );
          }, [eX.length, ti, ta, tr]);
        return (
          (d =
            null == eZ
              ? null == eA || eA === Y.M.FETCHING
                ? (0, i.jsx)($.Z, { loading: eA === Y.M.FETCHING })
                : (0, i.jsx)("div", {
                    className: eh.__invalid_page,
                    children: (0, i.jsxs)("div", {
                      className: eh.emptyContainer,
                      children: [
                        (0, i.jsx)("img", {
                          className: eh.emptyImage,
                          src: ef,
                          alt: "",
                        }),
                        (0, i.jsx)(g.Heading, {
                          variant: "heading-xl/semibold",
                          children: e_.intl.string(e_.t.T48fKS),
                        }),
                      ],
                    }),
                  })
              : (0, i.jsxs)($.Z, {
                  loading: eA === Y.M.FETCHING,
                  children: [
                    (0, i.jsx)(ej, { app: eZ, iconSrc: eU }),
                    (0, i.jsxs)("div", {
                      className: eh.__invalid_page,
                      children: [
                        (0, i.jsxs)("div", {
                          className: eh.header,
                          children: [
                            (0, i.jsxs)("div", {
                              className: eh.headerSidebar,
                              children: [
                                (0, i.jsx)("img", {
                                  className: eh.headerIcon,
                                  alt: "",
                                  "aria-hidden": !0,
                                  src: eU,
                                  width: eI,
                                  height: eI,
                                }),
                                (0, i.jsx)(Q.Z, {
                                  application: eZ,
                                  mutualGuilds: ew,
                                  mutualGuildShownMax: 3,
                                  compact: !0,
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: eh.headerContent,
                              children: [
                                (0, i.jsxs)("div", {
                                  className: eh.headerNameAndButtons,
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className: eh.headerNameAndIcon,
                                      children: [
                                        (0, i.jsx)(g.Heading, {
                                          className: eh.name,
                                          variant: "heading-xxl/semibold",
                                          children: eZ.name,
                                        }),
                                        tr &&
                                          (0, i.jsx)(g.Tooltip, {
                                            tooltipClassName:
                                              eh.premiumIconTooltip,
                                            text: e_.intl.string(
                                              e_.t["7B10XF"],
                                            ),
                                            children: (e) =>
                                              (0, i.jsx)("img", {
                                                ...e,
                                                alt: e_.intl.string(
                                                  e_.t["7B10XF"],
                                                ),
                                                className: eh.premiumIcon,
                                                src: n(744050),
                                              }),
                                          }),
                                        e5 &&
                                          (0, i.jsx)(ee.Z, {
                                            className: eh.partnerBadge,
                                          }),
                                      ],
                                    }),
                                    (0, i.jsxs)("div", {
                                      className: eh.buttons,
                                      children: [
                                        (0, i.jsx)(g.Button, {
                                          onClick: e3,
                                          color: g.Button.Colors.PRIMARY,
                                          children: e1
                                            ? e_.intl.string(e_.t.wwdb3t)
                                            : e_.intl.string(e_.t.z4sP5O),
                                        }),
                                        (0, i.jsx)(g.Button, {
                                          color: g.Button.Colors.BRAND,
                                          onClick: e6,
                                          disabled: !ez,
                                          children: e_.intl.string(e_.t.NgXl3N),
                                        }),
                                        (0, i.jsx)(g.Popout, {
                                          renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return e0(t);
                                          },
                                          position: "left",
                                          align: "top",
                                          animation: g.Popout.Animation.NONE,
                                          children: (e) =>
                                            (0, i.jsx)(g.Clickable, {
                                              className: eh.overflow,
                                              ...e,
                                              children: (0, i.jsx)(
                                                g.MoreHorizontalIcon,
                                                {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  width: 20,
                                                  height: 20,
                                                  className: eh.iconInteractive,
                                                },
                                              ),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsx)(ed.Z, {
                                  activeSection: h,
                                  setSection: eW,
                                  sections: to,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: eh.contentContainer,
                          children: [
                            (0, i.jsxs)("div", {
                              className: eh.content,
                              children: [
                                tl,
                                null != eE && eE.length > 0
                                  ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                        te &&
                                          (0, i.jsx)("div", {
                                            className: eh.separator,
                                          }),
                                        (0, i.jsxs)("div", {
                                          className: eh.section,
                                          children: [
                                            (0, i.jsx)(g.Heading, {
                                              className: eh.relatedHeader,
                                              variant: "eyebrow",
                                              children: e_.intl.string(
                                                e_.t.E8wCnp,
                                              ),
                                            }),
                                            (0, i.jsx)($.Z, {
                                              loading: es,
                                              children: (0, i.jsx)(J.Z, {
                                                applications: eE,
                                                onViewOne: eQ,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    })
                                  : null,
                              ],
                            }),
                            (0, i.jsx)(ec.Z, {
                              className: eh.sidebar,
                              application: eZ,
                              guildId: f,
                              onViewCategory: eJ,
                              onClickGuildWidget: eH,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })),
          (0, i.jsx)(W.Z, { children: d })
        );
      }
      let eb = (e) => {
          let t,
            { onToggle: n, isViewAll: a } = e;
          return (
            (t = a
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(g.Text, {
                      className: eh.showMoreButtonText,
                      variant: "eyebrow",
                      children: e_.intl.string(e_.t["vtfc4+"]),
                    }),
                    (0, i.jsx)(g.ChevronSmallUpIcon, {
                      size: "md",
                      color: "currentColor",
                      className: eh.showMoreButtonIcon,
                    }),
                  ],
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(g.Text, {
                      className: eh.showMoreButtonText,
                      variant: "eyebrow",
                      children: e_.intl.string(e_.t.ZDRyur),
                    }),
                    (0, i.jsx)(g.ChevronSmallDownIcon, {
                      size: "md",
                      color: "currentColor",
                      className: eh.showMoreButtonIcon,
                    }),
                  ],
                })),
            (0, i.jsx)(eT, {
              children: (0, i.jsx)(g.Button, {
                look: g.Button.Looks.BLANK,
                color: g.Button.Colors.TRANSPARENT,
                size: g.Button.Sizes.NONE,
                className: eh.showMoreButton,
                innerClassName: eh.showMoreButtonInner,
                onClick: n,
                children: t,
              }),
            })
          );
        },
        eT = (e) => {
          let { className: t, contentClassName: n, children: a } = e;
          return (0, i.jsxs)("div", {
            className: l()([eh.dividerContainer, t]),
            children: [
              (0, i.jsx)("div", { className: eh.divider }),
              null != a
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("div", {
                        className: l()(eh.contentDivider, n),
                        children: a,
                      }),
                      (0, i.jsx)("div", { className: eh.divider }),
                    ],
                  })
                : null,
            ],
          });
        };
      function ej(e) {
        let { app: t, iconSrc: n } = e,
          r = (0, j.ZP)(n, h.Z.unsafe_rawColors.PRIMARY_800.css),
          { bot: l } = t,
          o = a.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != l) {
              let t = (0, D.aN)({
                id: l.id,
                banner: l.banner,
                size: 1024,
                canAnimate: !1,
              });
              null != t &&
                ((e["--custom-background-static"] = "url(".concat(t)),
                (e.height = "auto"));
              let n = (0, D.xR)(l.banner)
                ? (0, D.aN)({
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
          style: o,
          className: eh.headerBanner,
          "data-has-animated": "--custom-background-animated" in o,
        });
      }
    },
    527564: function (e, t, n) {
      n.d(t, {
        M: function () {
          return S;
        },
      }),
        n(789020);
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(442837),
        s = n(481060),
        c = n(765717),
        d = n(283836),
        u = n(507608),
        p = n(147496),
        m = n(955335),
        _ = n(519896),
        h = n(171246),
        f = n(55563),
        g = n(147890),
        v = n(272242),
        I = n(981631),
        x = n(388032),
        C = n(378659);
      function S(e) {
        let { appId: t } = e,
          { subscriptions: n, otps: a } = (0, d.q)(t);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            n.length > 0 &&
              (0, i.jsxs)("div", {
                className: C.productSection,
                children: [
                  (0, i.jsx)(m.r, { subscriptions: n }),
                  (0, i.jsx)("div", {
                    className: l()(C.productList, C.subList),
                    children: n.map((e) =>
                      (0, i.jsx)(
                        u.zz,
                        {
                          appId: t,
                          listing: e,
                          subscriptionType: (0, h.KW)(e.skuFlags)
                            ? "user"
                            : "guild",
                          onDetails: () => {
                            (0, g.goToApplicationStoreSku)({
                              applicationId: t,
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
            a.length > 0 &&
              (0, i.jsxs)("div", {
                className: C.productSection,
                children: [
                  (0, i.jsx)(s.Heading, {
                    variant: "heading-lg/semibold",
                    children: x.intl.string(x.t.yUGTs7),
                  }),
                  (0, i.jsx)("div", {
                    className: l()(C.productList, C.itemList),
                    children: a.map((e) =>
                      (0, i.jsx)(
                        u.hd,
                        {
                          skuId: e.skuId,
                          appId: t,
                          onDetails: () => {
                            (0, g.goToApplicationStoreSku)({
                              applicationId: t,
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
              path: I.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                ":applicationId",
                ":skuId",
              ),
              exact: !0,
              render: (e) => (0, i.jsx)(N, { ...e }),
            }),
          ],
        });
      }
      function N(e) {
        let {
            match: {
              params: { applicationId: t, skuId: n },
            },
          } = e,
          r = (0, o.e7)([f.Z], () => f.Z.get(n), [n]),
          l = (0, o.e7)(
            [f.Z],
            () => (null != n ? f.Z.getParentSKU(n) : void 0),
            [n],
          ),
          c = a.useId();
        return (
          a.useLayoutEffect(() => {
            switch (null == r ? void 0 : r.type) {
              case I.epS.CONSUMABLE:
              case I.epS.DURABLE:
                return (function (e, t, n) {
                  (0, s.openModal)(
                    (e) => {
                      let { onClose: a, transitionState: r } = e;
                      return (0, i.jsx)(p.ItemDetailsModal, {
                        appId: t,
                        skuId: n,
                        onClose: a,
                        transitionState: r,
                      });
                    },
                    {
                      modalKey: e,
                      onCloseCallback() {
                        !b() &&
                          (0, g.goToApplicationSection)({
                            applicationId: t,
                            section:
                              v.ApplicationDirectoryProfileSections.STORE,
                          });
                      },
                    },
                  );
                })(c, t, n);
              case I.epS.SUBSCRIPTION:
                if ((null == l ? void 0 : l.flags) == null) return;
                return (function (e, t, n, a) {
                  (0, s.openModal)(
                    (e) => {
                      let { onClose: r, transitionState: l } = e;
                      return (0, i.jsx)(_.SubscriptionDetailsModal, {
                        appId: t,
                        subscriptionType: (0, h.KW)(a) ? "user" : "guild",
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
                          (0, g.goToApplicationSection)({
                            applicationId: t,
                            section:
                              v.ApplicationDirectoryProfileSections.STORE,
                          });
                      },
                    },
                  );
                })(c, t, n, l.flags);
            }
          }, [
            t,
            c,
            null == l ? void 0 : l.flags,
            null == r ? void 0 : r.type,
            n,
          ]),
          a.useLayoutEffect(
            () => () => {
              (0, s.closeModal)(c);
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
    940064: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(120356),
        r = n.n(a),
        l = n(481060),
        o = n(665692),
        s = n(955749);
      function c(e) {
        let { commands: t, className: n } = e;
        return (0, i.jsx)("div", {
          className: r()(s.list, n),
          children: t.map((e) =>
            (0, i.jsxs)(
              "div",
              {
                className: s.row,
                children: [
                  (0, i.jsxs)(l.Text, {
                    className: s.commandName,
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: [o.GI, e.displayName],
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
    626004: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      }),
        n(789020);
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(481060),
        s = n(860719),
        c = n(63063),
        d = n(49012),
        u = n(981631),
        p = n(388032),
        m = n(268308);
      let _ = c.Z.getArticleURL(u.BhN.BOT_DATA_ACCESS);
      function h(e) {
        let { icon: t, heading: n, body: a } = e;
        return (0, i.jsxs)("li", {
          className: m.intentContainer,
          children: [
            (0, i.jsx)("div", {
              children: (0, i.jsx)(t, { color: "currentColor", size: "md" }),
            }),
            (0, i.jsxs)("div", {
              className: m.intentTextContainer,
              children: [
                (0, i.jsx)("div", {
                  children: (0, i.jsx)(o.Heading, {
                    variant: "eyebrow",
                    color: "header-secondary",
                    children: n,
                  }),
                }),
                (0, i.jsx)("div", {
                  className: m.intentBody,
                  children: (0, i.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: a,
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function f(e) {
        let { application: t } = e,
          {
            hasMessageContent: n,
            hasGuildPresences: r,
            hasGuildMembers: c,
            hasIntents: u,
          } = (0, s.w)({ flags: null == t ? void 0 : t.flags }),
          f = a.useCallback(() => {
            (null == t ? void 0 : t.privacy_policy_url) != null &&
              (0, d.q)({ href: t.privacy_policy_url });
          }, [null == t ? void 0 : t.privacy_policy_url]);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            u &&
              (0, i.jsx)("div", {
                className: m.intentsListHeading,
                children: (0, i.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children: p.intl.string(p.t.U6KH5e),
                }),
              }),
            (0, i.jsxs)("div", {
              className: m.intentsContainer,
              children: [
                u &&
                  (0, i.jsxs)("ul", {
                    className: m.intentsList,
                    children: [
                      n &&
                        (0, i.jsx)(h, {
                          icon: o.ChatIcon,
                          heading: p.intl.string(p.t.gJpBOz),
                          body: p.intl.string(p.t["L+QVbm"]),
                        }),
                      r &&
                        (0, i.jsx)(h, {
                          icon: o.UserCircleStatusIcon,
                          heading: p.intl.string(p.t.jo0oj4),
                          body: p.intl.string(p.t.Dm0jq6),
                        }),
                      c &&
                        (0, i.jsx)(h, {
                          icon: o.GroupIcon,
                          heading: p.intl.string(p.t.QZql7O),
                          body: p.intl.string(p.t["ez/N/f"]),
                        }),
                    ],
                  }),
                (0, i.jsxs)("div", {
                  className: l()({ [m.hasSeparator]: u }),
                  children: [
                    (0, i.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: p.intl.format(p.t.b6nqk5, { helpCenterUrl: _ }),
                    }),
                    (null == t ? void 0 : t.privacy_policy_url) != null &&
                      (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        className: m.privacyPolicy,
                        children: p.intl.format(p.t.agYVY2, { onClick: f }),
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    430913: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      }),
        n(47120),
        n(653041),
        n(610138),
        n(216116),
        n(78328),
        n(815648);
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(780384),
        s = n(481060),
        c = n(794295),
        d = n(410030),
        u = n(726542),
        p = n(626135),
        m = n(463571),
        _ = n(887706),
        h = n(214912),
        f = n(290247),
        g = n(981631),
        v = n(388032),
        I = n(748800);
      let x = (0, v.getAvailableLocales)();
      function C(e) {
        var t, n, a;
        let { onClick: r, url: l, children: c } = e,
          p = (0, d.ZP)(),
          m = u.Z.getByUrl(l),
          _ = (0, o.wj)(p)
            ? null == m
              ? void 0
              : null === (t = m.icon) || void 0 === t
                ? void 0
                : t.darkSVG
            : null == m
              ? void 0
              : null === (n = m.icon) || void 0 === n
                ? void 0
                : n.lightSVG;
        return (0, i.jsx)(S, {
          icon: void 0 === _ ? s.LinkIcon : void 0,
          imageSrc: _,
          onClick: r,
          url: l,
          type:
            null !== (a = null == m ? void 0 : m.name) && void 0 !== a
              ? a
              : "website",
          children: c,
        });
      }
      function S(e) {
        let {
            icon: t,
            imageSrc: n,
            iconColor: a,
            url: r,
            type: o,
            children: d,
            onClick: u,
          } = e,
          p = (0, _.Z)(),
          m = null;
        null != t
          ? (m = (0, i.jsx)(t, {
              className: I.listIcon,
              color: null != a ? a : "currentColor",
              width: 20,
              height: 20,
              size: "custom",
            }))
          : null != n &&
            (m = (0, i.jsx)("img", {
              className: I.listImage,
              src: n,
              alt: "",
            }));
        let h = (0, i.jsxs)(i.Fragment, {
          children: [
            m,
            (0, i.jsx)(s.Text, {
              className: I.listText,
              variant: "text-md/normal",
              selectable: !0,
              children: d,
            }),
          ],
        });
        return (0, i.jsx)(c.Z, {
          href: r,
          className: l()(I.listItem, I.linkItem),
          onClick: () => (u(r, o), !1),
          trusted: !p,
          useDefaultUnderlineStyles: !1,
          children: h,
        });
      }
      function N(e) {
        var t, n, r;
        let {
            application: o,
            guildId: c,
            className: d,
            onViewCategory: u,
            onClickGuildWidget: _,
          } = e,
          [N, b] = a.useState(null),
          T = [],
          j =
            null !==
              (n =
                null == o
                  ? void 0
                  : null === (t = o.directory_entry) || void 0 === t
                    ? void 0
                    : t.external_urls) && void 0 !== n
              ? n
              : [];
        a.useEffect(() => {
          var e;
          if (
            (null === (e = o.directory_entry) || void 0 === e
              ? void 0
              : e.supported_locales) !== void 0
          ) {
            let e = new Set(o.directory_entry.supported_locales);
            b(
              x
                .filter((t) => e.has(t.value))
                .map((e) => v.intl.string(e.localizedName)),
            );
          }
        }, [o.directory_entry]);
        let y = (e, t) => {
          p.default.track(
            g.rMx.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED,
            { application_id: o.id, guild_id: c, type: t, url: e },
          );
        };
        return (
          null != o.categories &&
            o.categories.length > 0 &&
            T.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(s.Heading, {
                    className: I.sectionHeader,
                    variant: "eyebrow",
                    children: v.intl.string(v.t.s7ialZ),
                  }),
                  (0, i.jsx)("div", {
                    className: I.categories,
                    children: (null !== (r = o.categories) && void 0 !== r
                      ? r
                      : []
                    ).map((e) => {
                      let t = new URLSearchParams();
                      return (
                        t.set("category_id", e.id.toString()),
                        (0, i.jsx)(
                          m.Z,
                          {
                            href: ""
                              .concat(g.Z5c.APPLICATION_DIRECTORY_SEARCH, "?")
                              .concat(t),
                            children: (0, i.jsx)(s.Clickable, {
                              className: I.category,
                              onClick: () => u(e),
                              children: (0, i.jsx)(s.Text, {
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
          null != N &&
            N.length > 0 &&
            T.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(s.Heading, {
                    className: I.sectionHeader,
                    variant: "eyebrow",
                    children: v.intl.string(v.t.Fbjlu7),
                  }),
                  (0, i.jsx)(f.Z, { supportedLanguages: N }),
                ],
              }),
            ),
          (null != o.terms_of_service_url ||
            null != o.privacy_policy_url ||
            j.length > 0) &&
            T.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(s.Heading, {
                    className: I.sectionHeader,
                    variant: "eyebrow",
                    children: v.intl.string(v.t.l6DP2t),
                  }),
                  j.map((e, t) =>
                    (0, i.jsx)(
                      C,
                      { url: e.url, onClick: y, children: e.name },
                      t,
                    ),
                  ),
                  null != o.terms_of_service_url
                    ? (0, i.jsx)(S, {
                        icon: s.LinkIcon,
                        onClick: y,
                        url: o.terms_of_service_url,
                        type: "tos",
                        children: v.intl.string(v.t.s7STcX),
                      })
                    : null,
                  null != o.privacy_policy_url
                    ? (0, i.jsx)(S, {
                        icon: s.LockIcon,
                        onClick: y,
                        url: o.privacy_policy_url,
                        type: "policy",
                        children: v.intl.string(v.t.kH3JR0),
                      })
                    : null,
                ],
              }),
            ),
          null != o.guild &&
            o.guild.features.includes(g.oNc.DISCOVERABLE) &&
            T.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(s.Heading, {
                    className: I.sectionHeader,
                    variant: "eyebrow",
                    children: v.intl.string(v.t.KJEO29),
                  }),
                  (0, i.jsx)(h.Z, { guild: o.guild, onClick: _ }),
                ],
              }),
            ),
          (0, i.jsx)("div", {
            className: l()(I.sidebar, d),
            children:
              T.length > 0
                ? (0, i.jsx)(i.Fragment, {
                    children: T.map((e, t) =>
                      (0, i.jsx)(
                        "div",
                        { className: I.section, children: e },
                        t,
                      ),
                    ),
                  })
                : null,
          })
        );
      }
    },
    606183: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(481060),
        r = n(651363);
      function l(e) {
        let { activeSection: t, setSection: n, sections: l } = e;
        return (0, i.jsx)(a.TabBar, {
          selectedItem: t,
          type: "top",
          onItemSelect: n,
          className: r.tabBar,
          children: l.map((e) => {
            let { name: t, text: n, Icon: l } = e;
            return (0, i.jsxs)(
              a.TabBar.Item,
              {
                id: t,
                className: r.tabBarItem,
                "aria-label": n,
                children: [
                  (0, i.jsx)(l, { className: r.icon, color: "currentColor" }),
                  n,
                ],
              },
              t,
            );
          }),
        });
      }
    },
    150414: function (e, t, n) {
      n.d(t, {
        q: function () {
          return r;
        },
      });
      var i = n(73346),
        a = n(591759);
      function r(e, t, n) {
        var r;
        return null !== (r = a.Z.toURLSafe((0, i._W)(e, t, n))) && void 0 !== r
          ? r
          : void 0;
      }
    },
    886253: function (e, t, n) {
      n.d(t, {
        A: function () {
          return f;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(442837),
        r = n(481060),
        l = n(264043),
        o = n(812206),
        s = n(572004),
        c = n(601911),
        d = n(504211),
        u = n(533159),
        p = n(981631),
        m = n(388032),
        _ = n(775012),
        h = n(191046);
      function f(e) {
        let {
            appId: t,
            skuId: n,
            transitionState: f,
            onClose: g,
            onHeaderTitleClick: v,
            children: I,
            footer: x,
          } = e,
          C = (0, a.e7)(
            [o.Z, l.Z],
            () => {
              var e;
              return null !== (e = o.Z.getApplication(t)) && void 0 !== e
                ? e
                : l.Z.getApplicationRecord(t);
            },
            [t],
          );
        if (null == C) return null;
        let S = (0, c.y)(C, 25),
          { termsOfServiceUrl: N, privacyPolicyUrl: b } = C;
        return (0, i.jsxs)(r.ModalRoot, {
          transitionState: f,
          size: r.ModalSize.DYNAMIC,
          className: h.modal,
          children: [
            (0, i.jsxs)(r.ModalHeader, {
              className: _.modalHeader,
              children: [
                (0, i.jsxs)(r.Clickable, {
                  className: _.modalTitle,
                  onClick: v,
                  children: [
                    null != S &&
                      (0, i.jsx)("img", {
                        src: S.href,
                        alt: "",
                        className: h.appIcon,
                      }),
                    (0, i.jsx)(r.Heading, {
                      variant: "heading-md/semibold",
                      children: C.name,
                    }),
                  ],
                }),
                (0, i.jsx)(r.ModalCloseButton, {
                  onClick: g,
                  className: _.modalCloseBtn,
                }),
              ],
            }),
            I,
            (0, i.jsxs)(r.ModalFooter, {
              className: h.footer,
              children: [
                null != N || null != b
                  ? (0, i.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children: (0, i.jsx)(u.Z, {
                        termsOfServiceUrl: N,
                        privacyPolicyUrl: b,
                      }),
                    })
                  : (0, i.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: m.intl.string(m.t["3ZY+0N"]),
                    }),
                (0, i.jsxs)("div", {
                  className: h.footerButtons,
                  children: [
                    s.wS &&
                      (0, i.jsx)(r.Button, {
                        look: r.Button.Looks.FILLED,
                        size: r.Button.Sizes.ICON,
                        color: r.Button.Colors.PRIMARY,
                        "aria-label": m.intl.string(m.t.WqhZsr),
                        className: h.linkButton,
                        innerClassName: h.innerLinkButton,
                        onClick: () => {
                          let e = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              p.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                                t,
                                n,
                              ),
                            );
                          (0, s.JG)(e),
                            (0, r.showToast)(
                              (0, r.createToast)(
                                m.intl.string(m.t["L/PwZW"]),
                                r.ToastType.SUCCESS,
                              ),
                            ),
                            (0, d.X)(t, d.B.DETAILS_MODAL, n);
                        },
                        children: (0, i.jsx)(r.LinkIcon, {
                          size: "xs",
                          color: "currentColor",
                        }),
                      }),
                    x,
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    147496: function (e, t, n) {
      n.r(t),
        n.d(t, {
          ItemDetailsModal: function () {
            return g;
          },
        });
      var i = n(200651);
      n(192379);
      var a = n(752843),
        r = n(442837),
        l = n(481060),
        o = n(55563),
        s = n(551428),
        c = n(73346),
        d = n(591759),
        u = n(110742),
        p = n(886253),
        m = n(680005),
        _ = n(938337),
        h = n(981631),
        f = n(388032);
      function g(e) {
        var t, n, g, v;
        let {
            onClose: I,
            transitionState: x,
            skuId: C,
            appId: S,
            onHeaderTitleClick: N,
          } = e,
          b = (0, r.e7)([s.Z], () => s.Z.getForSKU(C), [C]),
          T = (0, r.e7)([o.Z], () => o.Z.get(C), [C]),
          j = (0, u.M)(C);
        if (null == T) return null;
        let y = null !== (n = T.name) && void 0 !== n ? n : "",
          E =
            null !==
              (g =
                null == b
                  ? void 0
                  : null === (t = b.description) || void 0 === t
                    ? void 0
                    : t.trim()) && void 0 !== g
              ? g
              : void 0,
          A =
            (null == b ? void 0 : b.headerBackground) != null &&
            null !==
              (v = d.Z.toURLSafe((0, c._W)(S, b.headerBackground, 256))) &&
            void 0 !== v
              ? v
              : void 0,
          P = T.type === h.epS.DURABLE && j,
          L =
            T.type === h.epS.DURABLE
              ? P
                ? f.intl.string(f.t.bm82mp)
                : f.intl.string(f.t["6gprwc"])
              : void 0,
          { price: R } = T;
        return null == R
          ? null
          : (0, i.jsx)(p.A, {
              appId: S,
              skuId: T.id,
              transitionState: x,
              onHeaderTitleClick: null != N ? N : I,
              onClose: I,
              footer: (0, i.jsx)(m.Y, { appId: S, sku: T }),
              children: (0, i.jsx)(_.i, {
                appId: S,
                skuId: T.id,
                title: y,
                description: E,
                imgSrc: A,
                tag: null != L ? (0, i.jsx)(a.V, { text: L }) : void 0,
                FallbackIcon: l.TicketIcon,
              }),
            });
      }
    },
    519896: function (e, t, n) {
      n.r(t),
        n.d(t, {
          SubscriptionDetailsModal: function () {
            return g;
          },
        });
      var i = n(200651),
        a = n(192379),
        r = n(269210),
        l = n(752843),
        o = n(481060),
        s = n(757746),
        c = n(930155),
        d = n(889989),
        u = n(696906),
        p = n(73346),
        m = n(591759),
        _ = n(886253),
        h = n(680005),
        f = n(938337);
      function g(e) {
        var t, n;
        let {
            appId: g,
            subscriptionType: v,
            onClose: I,
            skuId: x,
            guildId: C,
            transitionState: S,
            onHeaderTitleClick: N,
          } = e,
          { data: b } = (0, c.H)(x),
          T = b[0],
          { data: j } = (0, s.Z)(x),
          y = a.useMemo(() => {
            var e;
            return (null == j ? void 0 : j.thumbnail) != null &&
              null !== (e = m.Z.toURLSafe((0, p._W)(g, j.thumbnail, 256))) &&
              void 0 !== e
              ? e
              : void 0;
          }, [g, null == j ? void 0 : j.thumbnail]),
          E = a.useMemo(() => {
            let e = null == j ? void 0 : j.benefits;
            if (null != e && 0 !== e.length)
              return e.map((e) => ({
                id: e.id,
                title: e.name,
                description: e.description,
                icon: (0, d.n)(g, e.icon),
              }));
          }, [g, null == j ? void 0 : j.benefits]),
          { openModal: A, cannotOpenReason: P } = (0, u.ZP)({
            skuId: x,
            subscribeForGuild: null != C ? C : void 0,
          });
        return null == j
          ? null
          : (0, i.jsx)(_.A, {
              appId: g,
              skuId: x,
              transitionState: S,
              onHeaderTitleClick: null != N ? N : I,
              onClose: I,
              footer: (0, i.jsx)(h.p, {
                onClick: A,
                appId: g,
                subscriptionType: v,
                skuId: x,
                subscriptionPlan: T,
                cannotOpenReason: P,
              }),
              children: (0, i.jsx)(f.i, {
                appId: g,
                skuId: x,
                benefits:
                  null != E
                    ? E.map((e) =>
                        (0, i.jsx)(
                          r.G,
                          {
                            name: e.title,
                            icon: e.icon,
                            description: e.description,
                          },
                          e.id,
                        ),
                      )
                    : void 0,
                description:
                  null !== (t = j.description) && void 0 !== t ? t : void 0,
                imgSrc: y,
                title:
                  null !== (n = null == T ? void 0 : T.name) && void 0 !== n
                    ? n
                    : j.summary,
                tag: (0, i.jsx)(l.Z, { type: v }),
                FallbackIcon: o.BadgeIcon,
              }),
            });
      }
    },
    938337: function (e, t, n) {
      n.d(t, {
        i: function () {
          return c;
        },
      });
      var i = n(200651),
        a = n(192379),
        r = n(512100),
        l = n(906732),
        o = n(626135),
        s = n(981631);
      function c(e) {
        let { appId: t, skuId: n, ...c } = e,
          { analyticsLocations: d } = (0, l.ZP)();
        return (
          a.useEffect(() => {
            o.default.track(s.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
              application_id: t,
              sku_id: n,
              location_stack: d,
            });
          }, [d, t, n]),
          (0, i.jsx)(r.u, { ...c })
        );
      }
    },
    679056: function (e, t, n) {
      n(47120);
      var i,
        a = n(200651),
        r = n(192379),
        l = n(846519);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class s extends (i = r.Component) {
        static getDerivedStateFromProps(e) {
          return e.disable ? { hovered: !1 } : null;
        }
        componentDidMount() {
          let { pauseOnHover: e, disable: t } = this.props,
            n = this.state.hovered && e;
          !t && !n && this.startTimer();
        }
        componentWillUnmount() {
          this.stopTimer();
        }
        componentDidUpdate(e, t) {
          let n,
            i,
            a,
            r,
            { props: l } = this;
          let o =
            ((n = l),
            (i = this.state),
            !n.disable && !(i.hovered && n.pauseOnHover));
          let s =
            ((a = e), (r = t), !a.disable && !(r.hovered && a.pauseOnHover));
          (o && !s) || e.interval !== l.interval
            ? this.startTimer()
            : !o && s && this.stopTimer();
        }
        startTimer() {
          let { interval: e, onInterval: t, disable: n } = this.props;
          if (!n)
            this.timer.start(e, () => {
              t();
            });
        }
        stopTimer() {
          this.timer.stop();
        }
        render() {
          let { children: e, className: t, disable: n } = this.props,
            i = n
              ? null
              : {
                  onMouseEnter: this.handlePause,
                  onFocus: this.handlePause,
                  onMouseLeave: this.handleResume,
                  onBlur: this.handleResume,
                };
          return (0, a.jsx)("div", { ...i, className: t, children: e });
        }
        constructor(...e) {
          super(...e),
            o(this, "timer", new l.Xp()),
            o(this, "state", { hovered: !1 }),
            o(this, "handlePause", () => {
              !this.state.hovered && this.setState({ hovered: !0 });
            }),
            o(this, "handleResume", () => {
              this.setState({ hovered: !1 });
            });
        }
      }
      o(s, "defaultProps", { disable: !1, pauseOnHover: !1 }), (t.Z = s);
    },
    578361: function (e, t, n) {
      n.d(t, {
        n: function () {
          return a;
        },
      });
      var i,
        a,
        r = n(200651),
        l = n(192379),
        o = n(120356),
        s = n.n(o),
        c = n(748780),
        d = n(215569),
        u = n(48246);
      ((i = a || (a = {}))[(i.RIGHT = -1)] = "RIGHT"),
        (i[(i.LEFT = 1)] = "LEFT");
      let p = { friction: 7, tension: 40, clamp: !0 };
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
          var t, n, i;
          super(e),
            (t = this),
            (i = void 0),
            (n = "_animated") in t
              ? Object.defineProperty(t, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = i),
            (this._animated = new c.Z.Value(-1 * e.direction));
        }
      }
      t.Z = (e) => {
        let {
          children: t,
          step: n,
          direction: i,
          className: a,
          springSettings: l = p,
          fadeInOut: o = !1,
        } = e;
        return (0, r.jsx)(d.W, {
          component: "div",
          className: s()(u.animator, a),
          children: (0, r.jsx)(
            m,
            { direction: i, springSettings: l, fadeInOut: o, children: t },
            n,
          ),
        });
      };
    },
    106976: function (e, t, n) {
      n.d(t, {
        i1: function () {
          return u;
        },
        rx: function () {
          return d;
        },
        sB: function () {
          return p;
        },
        vY: function () {
          return m;
        },
      }),
        n(47120);
      var i = n(570140),
        a = n(821849),
        r = n(307643),
        l = n(981631);
      function o(e) {
        return {
          id: e.id,
          type: l.epS.SUBSCRIPTION,
          application_id: e.application_id,
          product_line: l.POd.APPLICATION,
          name: e.name,
          summary: "",
          description: e.description,
          flags: e.sku_flags,
          manifests: [],
          available_regions: [],
          legal_notice: "",
          deleted: e.soft_deleted,
          price_tier: 0,
          show_age_gate: !1,
          restricted: !1,
        };
      }
      function s(e) {
        var t;
        return {
          id: e.id,
          sku: o(e),
          summary: e.description,
          description: e.description,
          benefits:
            null !== (t = e.store_listing_benefits) && void 0 !== t ? t : [],
          thumbnail: e.image_asset,
          published: e.published,
        };
      }
      function c(e) {
        for (let t of (i.Z.dispatch({
          type: "SKUS_FETCH_SUCCESS",
          skus: e.map(o),
        }),
        i.Z.dispatch({
          type: "STORE_LISTINGS_FETCH_SUCCESS",
          storeListings: e.map(s),
        }),
        e))
          i.Z.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: t.id,
            subscriptionPlans: t.subscription_plans,
          });
      }
      async function d(e, t) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: e,
          groupListingId: t,
        });
        try {
          var n;
          let a = await r.jz(e, t);
          return (
            i.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: e,
              groupListing: a,
            }),
            c(null !== (n = a.subscription_listings) && void 0 !== n ? n : []),
            a
          );
        } catch (t) {
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
            applicationId: e,
          });
        }
      }
      async function u(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
          guildId: e,
        });
        try {
          let t = await r.GF(e);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
            guildId: e,
            entitlements: t,
          });
        } catch (t) {
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
            guildId: e,
          });
        }
      }
      function p(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
          guildId: e,
        });
      }
      async function m(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
          planId: e,
        });
        try {
          var t;
          let n = await r.a_(e);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: n,
          });
          let l =
            null !== (t = n.subscription_listings) && void 0 !== t ? t : [];
          for (let t of l)
            t.subscription_plans[0].id === e &&
              (await a.GZ(t.id, void 0, void 0, !0));
          c(l);
        } catch (e) {}
      }
    },
    488915: function (e, t, n) {
      n.d(t, {
        M: function () {
          return i;
        },
      }),
        n(47120);
      var i,
        a,
        r,
        l,
        o,
        s,
        c = n(512722),
        d = n.n(c),
        u = n(442837),
        p = n(759174),
        m = n(570140),
        _ = n(959546),
        h = n(55563);
      function f(e) {
        return "subscription_listing:".concat(e);
      }
      function g(e) {
        return "application:".concat(e);
      }
      function v(e) {
        return "plan:".concat(e);
      }
      function I(e, t, n) {
        return "entitlement:".concat(e, ":").concat(n, ":").concat(t);
      }
      function x(e, t) {
        return "entitlement:".concat(t, ":").concat(e);
      }
      ((r = i || (i = {}))[(r.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.FETCHED = 2)] = "FETCHED");
      let C = new p.h(
          (e) => [g(e.application_id), ...e.subscription_listings_ids.map(f)],
          (e) => e.id,
        ),
        S = new p.h(
          (e) => [g(e.application_id), v(e.subscription_plans[0].id)],
          (e) => e.id,
        ),
        N = new p.h(
          (e) => [
            I(e.applicationId, e.isValid(null, h.Z), e.guildId),
            x(e.isValid(null, h.Z), e.guildId),
          ],
          (e) => e.id,
        ),
        b = {},
        T = {};
      function j(e) {
        var t;
        for (let n of (C.set(e.id, e),
        null !== (t = e.subscription_listings) && void 0 !== t ? t : []))
          (function (e) {
            S.set(e.id, e);
          })(n);
      }
      class y extends (a = u.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
          var t;
          return null !== (t = b[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionGroupListing(e) {
          return C.get(e);
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
          let t = C.values(f(e));
          return (
            d()(t.length <= 1, "Found multiple group listings for listing"),
            t[0]
          );
        }
        getSubscriptionListing(e) {
          return S.get(e);
        }
        getSubscriptionListingsForApplication(e) {
          return S.values(g(e));
        }
        getEntitlementsForGuildFetchState(e) {
          var t;
          return null !== (t = T[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionListingForPlan(e) {
          let t = S.values(v(e));
          return d()(t.length <= 1, "Found multiple listings for plan"), t[0];
        }
        getApplicationEntitlementsForGuild(e, t) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return N.values(I(e, n, t));
        }
        getEntitlementsForGuild(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return N.values(x(t, e));
        }
      }
      (s = "ApplicationSubscriptionStore"),
        (o = "displayName") in (l = y)
          ? Object.defineProperty(l, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[o] = s),
        (t.Z = new y(m.Z, {
          LOGOUT: function () {
            C.clear(), S.clear(), N.clear(), (b = {}), (T = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: t, groupListingId: n } = e;
            b[t] = 1;
            let i = C.get(n);
            if (null != i)
              for (let e of i.subscription_listings_ids) S.delete(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: t, groupListing: n } = e;
            (b[t] = 2), j(n);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: t } = e;
            b[t] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: t } = e;
            T[t] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: t, entitlements: n } = e;
            (T[t] = 2),
              n.forEach((e) => {
                let t = _.Z.createFromServer(e);
                N.set(t.id, t);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: t } = e;
            T[t] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            e,
          ) {
            let { groupListing: t } = e;
            j(t);
          },
        }));
    },
    757746: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(442837),
        a = n(558381),
        r = n(551428);
      let l = (0, i.Kb)(r.Z, {
        queryId: (e) => (null != e ? ["storeListing", e] : null),
        get: (e) => (null != e ? r.Z.getForSKU(e) : null),
        load: (e, t) => (null != t ? (0, a.km)(t) : Promise.resolve()),
        useStateHook: i.e7,
      });
    },
    512100: function (e, t, n) {
      n.d(t, {
        u: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(409794),
        r = n(777207),
        l = n(541822),
        o = n(330711),
        s = n(476818);
      function c(e) {
        let {
            benefits: t,
            description: n,
            imgSrc: c,
            title: d,
            tag: u,
            FallbackIcon: p,
          } = e,
          m =
            null != c
              ? { "--custom-background-url": "url(".concat(c.toString(), ")") }
              : void 0;
        return (0, i.jsx)("div", {
          className: s.container,
          children: (0, i.jsx)(l.Z, {
            className: s.scroller,
            children: (0, i.jsxs)("div", {
              className: s.scrollContent,
              children: [
                (0, i.jsxs)("div", {
                  className: s.header,
                  children: [
                    (0, i.jsx)("div", {
                      className: s.headerBackground,
                      style: m,
                    }),
                    (0, i.jsx)("div", {
                      className: s.headerImage,
                      children:
                        null != c
                          ? (0, i.jsx)("img", { src: c.toString(), alt: "" })
                          : (0, i.jsx)(p, {
                              size: "custom",
                              color: "var(--text-muted)",
                              height: 96,
                              width: 96,
                            }),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: s.content,
                  children: [
                    (0, i.jsxs)("div", {
                      className: s.details,
                      children: [
                        null != u && (0, i.jsx)("div", { children: u }),
                        (0, i.jsx)(a.X, {
                          color: "header-primary",
                          variant: "heading-xl/semibold",
                          children: d,
                        }),
                        null != n &&
                          "" !== n &&
                          (0, i.jsx)(r.x, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            className: s.description,
                            children: n,
                          }),
                      ],
                    }),
                    null != t &&
                      (0, i.jsxs)("div", {
                        className: s.benefits,
                        children: [
                          (0, i.jsx)(r.x, {
                            color: "header-secondary",
                            variant: "eyebrow",
                            children: o.Z.Messages.STOREFRONT_BENEFITS_TITLE,
                          }),
                          t,
                        ],
                      }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    752843: function (e, t, n) {
      n.d(t, {
        V: function () {
          return u;
        },
        Z: function () {
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(628028),
        r = n(220427),
        l = n(777207),
        o = n(692547),
        s = n(330711),
        c = n(124370);
      function d(e) {
        let { type: t } = e;
        return (0, i.jsx)(u, {
          icon:
            "user" === t
              ? (0, i.jsx)(r.t, {
                  size: "xxs",
                  color: o.Z.colors.INTERACTIVE_NORMAL,
                })
              : (0, i.jsx)(a.Q, {
                  size: "xxs",
                  color: o.Z.colors.INTERACTIVE_NORMAL,
                }),
          text:
            "user" === t
              ? s.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
              : s.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
        });
      }
      function u(e) {
        let { icon: t, text: n } = e;
        return (0, i.jsxs)("div", {
          className: c.container,
          children: [
            t,
            (0, i.jsx)(l.x, {
              color: "header-primary",
              variant: "text-sm/medium",
              children: n,
            }),
          ],
        });
      }
    },
    354266: function (e, t, n) {
      e.exports = {
        list: "list_a06168",
        container: "container_a06168",
        header: "header_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
      };
    },
    572058: function (e, t, n) {
      e.exports = {
        closeButton: "closeButton_e3c9f3",
        description: "description_e3c9f3",
        conflictButton: "conflictButton_e3c9f3",
        linkButtonSize: "linkButtonSize_e3c9f3",
        linkButton: "linkButton_e3c9f3",
        retryButton: "retryButton_e3c9f3",
        conflictButtonInner: "conflictButtonInner_e3c9f3",
        buttonBody: "buttonBody_e3c9f3",
        timestamp: "timestamp_e3c9f3",
        choiceWrapper: "choiceWrapper_e3c9f3",
        choiceLine: "choiceLine_e3c9f3",
        choiceTitle: "choiceTitle_e3c9f3 title_e3c9f3",
        conflictTitle: "conflictTitle_e3c9f3 title_e3c9f3",
        conflictUploadArt:
          "conflictUploadArt_e3c9f3 conflictArt_e3c9f3 art_e3c9f3",
        conflictDownloadArt:
          "conflictDownloadArt_e3c9f3 conflictArt_e3c9f3 art_e3c9f3",
        errorArt: "errorArt_e3c9f3 art_e3c9f3",
        modal: "modal_e3c9f3",
      };
    },
    975982: function (e, t, n) {
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
    212991: function (e, t, n) {
      e.exports = {
        listingDescription: "listingDescription_d2c3da",
        bottomGuildCountContainer: "bottomGuildCountContainer_d2c3da",
      };
    },
    759235: function (e, t, n) {
      e.exports = { header: "header_d5abe9", list: "list_d5abe9" };
    },
    646267: function (e, t, n) {
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
    639634: function (e, t, n) {
      e.exports = { partnerBadge: "partnerBadge_de92a5" };
    },
    67124: function (e, t, n) {
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
      };
    },
    378659: function (e, t, n) {
      e.exports = {
        productSection: "productSection_a9d0f5",
        productList: "productList_a9d0f5",
        subList: "subList_a9d0f5",
        itemList: "itemList_a9d0f5",
      };
    },
    955749: function (e, t, n) {
      e.exports = {
        list: "list_e0307d",
        row: "row_e0307d",
        commandName: "commandName_e0307d",
      };
    },
    268308: function (e, t, n) {
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
    748800: function (e, t, n) {
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
    651363: function (e, t, n) {
      e.exports = {
        tabBar: "tabBar_bc3297",
        tabBarItem: "tabBarItem_bc3297",
        icon: "icon_bc3297",
      };
    },
    775012: function (e, t, n) {
      e.exports = {
        modal: "modal_c5ad85",
        modalHeader: "modalHeader_c5ad85",
        modalTitle: "modalTitle_c5ad85",
        modalHeaderLinks: "modalHeaderLinks_c5ad85",
        modalCloseBtn: "modalCloseBtn_c5ad85",
        scrollerWrapper: "scrollerWrapper_c5ad85",
        scroller: "scroller_c5ad85",
      };
    },
    191046: function (e, t, n) {
      e.exports = {
        modal: "modal_c48629",
        footer: "footer_c48629",
        footerButtons: "footerButtons_c48629",
        linkButton: "linkButton_c48629",
        innerLinkButton: "innerLinkButton_c48629",
        appIcon: "appIcon_c48629",
      };
    },
    968629: function (e, t, n) {
      e.exports = { btnContent: "btnContent_cdaed4" };
    },
    266377: function (e, t, n) {
      e.exports = { text: "text_b628d6" };
    },
    48246: function (e, t, n) {
      e.exports = { animator: "animator_abd0f1", item: "item_abd0f1" };
    },
    234726: function (e, t, n) {
      e.exports = {
        logo: "logo_b0f834",
        title: "title_b0f834",
        header: "header_b0f834",
      };
    },
    652045: function (e, t, n) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    295082: function (e, t, n) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    854724: function (e, t, n) {
      e.exports = {
        body: "body_bf926b",
        sliderBody: "sliderBody_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
      };
    },
    53787: function (e, t, n) {
      e.exports = {
        container: "container_a3545a",
        header: "header_a3545a",
        divider: "divider_a3545a",
        benefitsContainer: "benefitsContainer_a3545a",
        benefit: "benefit_a3545a",
      };
    },
    655949: function (e, t, n) {
      e.exports = {
        icon: "icon_e10dab",
        small: "small_e10dab",
        medium: "medium_e10dab",
      };
    },
    421585: function (e, t, n) {
      e.exports = {
        headerContainer: "headerContainer_fe5d81",
        closeContainer: "closeContainer_fe5d81",
        closeIcon: "closeIcon_fe5d81",
        headerImageContainer: "headerImageContainer_fe5d81",
        headerImage: "headerImage_fe5d81",
        confirmationContainer: "confirmationContainer_fe5d81",
        purchaseConfirmation:
          "purchaseConfirmation_fe5d81 confirmationContainer_fe5d81",
        confirmationTitle: "confirmationTitle_fe5d81",
        confirmationSubtitle: "confirmationSubtitle_fe5d81",
      };
    },
    140936: function (e, t, n) {
      e.exports = {
        container: "container_ffcaea",
        emojiContainer: "emojiContainer_ffcaea",
        name: "name_ffcaea",
        infoContainer: "infoContainer_ffcaea",
      };
    },
    785798: function (e, t, n) {
      e.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
    875804: function (e, t, n) {
      e.exports = { containerScrollGradient: "containerScrollGradient_c2f634" };
    },
    476818: function (e, t, n) {
      e.exports = {
        container: "container_e8df26",
        header: "header_e8df26",
        headerBackground: "headerBackground_e8df26",
        headerImage: "headerImage_e8df26",
        scroller: "scroller_e8df26",
        scrollContent: "scrollContent_e8df26",
        content: "content_e8df26",
        details: "details_e8df26",
        benefits: "benefits_e8df26",
        description: "description_e8df26",
      };
    },
    377199: function (e, t, n) {
      e.exports = {
        container: "container_f91bb7",
        image: "image_f91bb7",
        description: "description_f91bb7",
        card: "card_f91bb7",
        body: "body_f91bb7",
        purchaseBtn: "purchaseBtn_f91bb7",
        benefits: "benefits_f91bb7",
        benefitsContainer: "benefitsContainer_f91bb7",
        benefitsList: "benefitsList_f91bb7",
        cardBenefit: "cardBenefit_f91bb7",
        cardBenefitIcon: "cardBenefitIcon_f91bb7",
        benefitsSummary: "benefitsSummary_f91bb7",
      };
    },
    124370: function (e, t, n) {
      e.exports = { container: "container_c99f26" };
    },
    847987: function (e, t, n) {
      e.exports = { hoverCard: "hoverCard_d991d3" };
    },
  },
]);
//# sourceMappingURL=78d39a9219fc30683618.js.map
