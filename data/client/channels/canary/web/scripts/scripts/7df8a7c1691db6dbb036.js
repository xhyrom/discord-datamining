"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6618"],
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
        o = n(481060),
        l = n(422559),
        s = n(95648);
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
                      ? (0, i.jsx)(o.Heading, {
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
                              (0, i.jsx)(o.CheckmarkLargeIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: s.check,
                              }),
                              (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: (0, l.wt)(e),
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
                      ? (0, i.jsx)(o.Heading, {
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
                              (0, i.jsx)(o.XSmallIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: s.cross,
                              }),
                              (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: (0, l.wt)(e),
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
        o = n(768581),
        l = n(924489),
        s = n(950854),
        c = n(824606),
        d = n(295519);
      function u(e) {
        var t, n, u, p, m;
        let {
            application: _,
            className: f,
            childrenClassName: g,
            animatesOnHover: h,
            onClick: I,
            ...b
          } = e,
          v = o.ZP.getApplicationIconURL({ id: _.id, icon: _.icon, size: 48 }),
          x = (0, c.Z)({ application: _ }),
          C = null === (t = _.categories) || void 0 === t ? void 0 : t[0],
          S =
            (null !==
              (p =
                null === (n = _.directory_entry) || void 0 === n
                  ? void 0
                  : n.guild_count) && void 0 !== p
              ? p
              : 0) > 0 || x.length > 0,
          N = a.useCallback(() => {
            I({ mutualGuilds: x });
          }, [I, x]),
          y = (0, i.jsx)(l.Z, {
            application: _,
            textVariant: "text-xs/normal",
            mutualGuilds: x,
            mutualGuildShownMax: 3,
            guildIconSize: l.x.SMALL,
            compact: !0,
          });
        return (0, i.jsxs)(s.Z, {
          className: f,
          onClick: N,
          iconSrc: v,
          header: _.name,
          subheader:
            null != C &&
            (0, i.jsx)(r.Text, {
              tag: "span",
              color: "header-secondary",
              variant: "text-xs/normal",
              children: C.name,
            }),
          animatesOnHover: h,
          ...b,
          children: [
            (null != _.description || null != g) &&
              (0, i.jsx)("div", {
                className: g,
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
            S &&
              (0, i.jsx)("div", {
                className: d.bottomGuildCountContainer,
                children: y,
              }),
          ],
        });
      }
    },
    576958: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        r = n(481060),
        o = n(434650),
        l = n(626135),
        s = n(463571),
        c = n(744142),
        d = n(132871),
        u = n(981631),
        p = n(388032),
        m = n(535040);
      function _(e) {
        let {
            applicationId: t,
            applications: n,
            className: c,
            listingClassName: _,
            title: g,
            showViewAll: h,
            onViewOne: I,
            onViewAll: b,
          } = e,
          v = (function (e) {
            let { applicationId: t, similarAppIds: n } = e,
              i = (0, d.useApplicationDirectoryHistory)((e) => e.guildId),
              [r, s] = a.useState(),
              c = (0, o.O)((e) => {
                e && s(t);
              });
            return (
              a.useEffect(() => {
                r === t &&
                  l.default.track(u.rMx.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                    application_id: t,
                    suggested_application_ids: n,
                    guild_id: i,
                  });
              }, [r, t, n, i]),
              c
            );
          })({
            applicationId: t,
            similarAppIds: a.useMemo(() => n.map((e) => e.id), [n]),
          });
        return (0, i.jsxs)("div", {
          className: c,
          ref: v,
          children: [
            null != g
              ? (0, i.jsxs)("div", {
                  className: m.header,
                  children: [
                    (0, i.jsx)(r.Heading, {
                      variant: "heading-lg/semibold",
                      children: g,
                    }),
                    h
                      ? (0, i.jsx)(r.Button, {
                          look: r.Button.Looks.LINK,
                          color: r.Button.Colors.LINK,
                          onClick: b,
                          children: p.intl.string(p.t["e+T3go"]),
                        })
                      : null,
                  ],
                })
              : null,
            (0, i.jsx)("ul", {
              className: m.list,
              children: n.map((e, t) =>
                (0, i.jsx)(
                  s.Z,
                  {
                    href: u.Z5c.APPLICATION_DIRECTORY_PROFILE(e.id),
                    children: (0, i.jsx)(f, {
                      className: _,
                      application: e,
                      onClick: (n) => {
                        let { mutualGuilds: i } = n;
                        return I({ application: e, mutualGuilds: i, index: t });
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
      function f(e) {
        return (0, i.jsx)(c.Z, { ...e });
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
        o = n(481060),
        l = n(388032),
        s = n(746220);
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
            animatesOnHover: f,
            ...g
          } = e,
          h = null != a,
          I = (0, i.jsxs)(i.Fragment, {
            children: [
              h &&
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
                          (0, i.jsx)(o.Heading, {
                            variant: "heading-md/medium",
                            className: u,
                            children: d,
                          }),
                          null != m &&
                            (0, i.jsx)(o.Text, {
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
          b = r()(t, s.container, { [s.hasImage]: h });
        return null != n
          ? (0, i.jsx)(o.ClickableContainer, {
              tag: "article",
              "aria-label": l.intl.formatToPlainString(l.t["0cVQIC"], {
                name: d,
              }),
              onClick: n,
              className: r()(b, s.clickable, {
                [s.animatesOnHoverContainer]: f,
              }),
              focusProps: { offset: 4 },
              children: I,
            })
          : (0, i.jsx)("article", { className: b, ...g, children: I });
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
        o = n(481060),
        l = n(377171),
        s = n(388032),
        c = n(493004);
      function d(e) {
        let { className: t, ...n } = e;
        return (0, i.jsx)(o.TextBadge, {
          ...n,
          text: s.intl.string(s.t.LO4f0N),
          color: l.Z.BACKGROUND_TERTIARY,
          className: r()(t, c.partnerBadge),
        });
      }
    },
    753450: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return eS;
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
        o = n.n(r),
        l = n(525654),
        s = n.n(l),
        c = n(477660),
        d = n.n(c),
        u = n(873546),
        p = n(149765),
        m = n(468194),
        _ = n(442837),
        f = n(692547),
        g = n(477690),
        h = n(481060),
        I = n(995648),
        b = n(445986),
        v = n(9807),
        x = n(330726),
        C = n(782568),
        S = n(581364),
        N = n(970321),
        y = n(283836),
        T = n(220082),
        j = n(252618),
        P = n(299206),
        E = n(241209),
        A = n(341176),
        L = n(312097),
        k = n(422559),
        R = n(703656),
        B = n(280885),
        w = n(706454),
        O = n(314897),
        Z = n(451478),
        H = n(626135),
        D = n(768581),
        F = n(572004),
        M = n(823379),
        U = n(900849),
        G = n(135431),
        V = n(674588),
        W = n(264043),
        z = n(303383),
        Y = n(887706),
        K = n(738130),
        q = n(4461),
        X = n(34674),
        J = n(576958),
        Q = n(924489),
        $ = n(125909),
        ee = n(409425),
        et = n(132871),
        en = n(147890),
        ei = n(824606),
        ea = n(527564),
        er = n(326135),
        eo = n(940064),
        el = n(626004),
        es = n(939893),
        ec = n(430913),
        ed = n(606183),
        eu = n(272242),
        ep = n(981631),
        em = n(558921),
        e_ = n(388032),
        ef = n(669761),
        eg = n(902294);
      let eh = d().parserFor(es.Z),
        eI = d().reactFor(d().ruleOutput(es.Z, "react")),
        eb = (0, m.Mg)(g.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
        ev = "redirect_to_support_server",
        ex = "start_application_install",
        eC = (e) =>
          ""
            .concat(location.protocol, "//")
            .concat(location.host)
            .concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(e));
      function eS(e) {
        var t, r, l, c;
        let d,
          {
            match: {
              params: {
                applicationId: m,
                section: f = eu.ApplicationDirectoryProfileSections.GENERAL,
              },
            },
          } = e,
          g = (0, et.useApplicationDirectoryHistory)((e) => e.guildId),
          T = (0, Y.Z)(),
          es = (0, _.e7)(
            [z.Z],
            () =>
              z.Z.getFetchState({ applicationId: m, guildId: g }) ===
              z.M.FETCHING,
          ),
          eS = a.useRef({ applicationId: void 0, guildId: void 0 }),
          { similarApplications: ey, similarLoadId: ej } = (0, _.cj)(
            [z.Z],
            () => {
              let e = { applicationId: m, guildId: g },
                t = z.Z.getSimilarApplications(e);
              return (
                null == t
                  ? (t = z.Z.getSimilarApplications(eS.current))
                  : (eS.current = e),
                {
                  similarApplications: null == t ? void 0 : t.applications,
                  similarLoadId: null == t ? void 0 : t.loadId,
                }
              );
            },
          ),
          eP = a.useMemo(() => (null == ey ? void 0 : ey.slice(0, 3)), [ey]),
          eE = (0, _.e7)([W.Z], () => W.Z.getApplicationFetchState(m)),
          [eA, eL] = a.useState(void 0),
          ek = a.useCallback(
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
          eR = (0, _.e7)([Z.Z], () => Z.Z.isFocused()),
          eB = (0, _.e7)([w.default], () => w.default.locale),
          ew = a.useRef(m),
          eO = (0, _.e7)([W.Z], () => {
            let e = W.Z.getApplication(m);
            return (
              null == e
                ? (e = W.Z.getApplication(ew.current))
                : (ew.current = m),
              e
            );
          }),
          eZ = (0, ei.Z)({ application: eO }),
          eH = (0, _.e7)([O.default], () => O.default.getSessionId());
        (0, j.Tt)({ location: null == eO ? void 0 : eO.name });
        let eD = a.useCallback(async () => {
          try {
            var e;
            let t =
              null == eO
                ? void 0
                : null === (e = eO.guild) || void 0 === e
                  ? void 0
                  : e.id;
            if (null != t) {
              (null == eO ? void 0 : eO.id) != null &&
                H.default.track(ep.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                  application_id: eO.id,
                  guild_id: g,
                  support_guild_id: t,
                });
              let e = { page: ep.ZY5.APPLICATION_DIRECTORY };
              await (0, U.Ub)(t, e, { setsHistorySnapshot: !1 });
            }
          } catch {}
        }, [eO, g]);
        a.useEffect(() => {
          if (null == eO) return;
          let e = new URL(location.href);
          if (T && null != eH && "true" === e.searchParams.get(ev)) {
            e.searchParams.delete(ev);
            let t = e.pathname + e.search;
            (0, R.dL)(t), eD();
          }
        }, [T, eD, eH, eO]);
        let eF = a.useCallback(() => {
            var e;
            null !=
              (null == eO
                ? void 0
                : null === (e = eO.guild) || void 0 === e
                  ? void 0
                  : e.id) && (T ? eD() : (0, X.rf)({ [ev]: "true" }));
          }, [eO, T, eD]),
          eM = a.useCallback(() => {
            (0, en.replaceAppDirectoryURLWith)(
              ""
                .concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(m))
                .concat(location.search),
            );
          }, [m]);
        a.useEffect(() => {
          f === eu.ApplicationDirectoryProfileSections.GENERAL && eM();
        }, [eM, f]),
          a.useEffect(() => {
            if (null != m) {
              let e =
                "true" ===
                  new URLSearchParams(location.search).get("preview") || void 0;
              V.i6(m, { noCache: e });
            }
          }, [m]),
          a.useEffect(() => {
            if ((null == eO ? void 0 : eO.directory_entry) != null) {
              let e = eO.directory_entry,
                t = null == e ? void 0 : e.popular_application_commands;
              null != t
                ? eL(
                    t.map((e) =>
                      (0, S.Z8)({
                        rootCommand: e,
                        command: e,
                        applicationId: e.application_id,
                      }),
                    ),
                  )
                : eL(void 0);
            }
          }, [eO]);
        let eU = D.ZP.getApplicationIconURL({
            id:
              null !== (l = null == eO ? void 0 : eO.id) && void 0 !== l
                ? l
                : "-1",
            icon: null == eO ? void 0 : eO.icon,
            size: eb,
          }),
          eG = (0, P.Z)({
            id:
              null !== (c = null == eO ? void 0 : eO.id) && void 0 !== c
                ? c
                : "",
            label: e_.intl.string(e_.t["FfCL+/"]),
          }),
          { canInstall: eV, install: eW } = (0, q.P)(eO, g),
          ez = {
            previousViewType:
              null === (t = (0, et.getPreviousView)()) || void 0 === t
                ? void 0
                : t.type,
            selectedSection: f,
          },
          eY = a.useRef(ez);
        a.useEffect(() => {
          eY.current = ez;
        }),
          a.useEffect(() => {
            let { previousViewType: e, selectedSection: t } = eY.current;
            (null == eO ? void 0 : eO.id) != null &&
              H.default.track(ep.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                current_page: "product",
                previous_page: e,
                application_id: eO.id,
                guild_id: g,
                shown_mutual_guilds_count: eZ.length,
                profile_section: t,
                referrer: document.referrer,
              });
          }, [null == eO ? void 0 : eO.id, g, eZ]);
        let eK = a.useMemo(() => {
            var e;
            let t =
              null == eO
                ? void 0
                : null === (e = eO.install_params) || void 0 === e
                  ? void 0
                  : e.permissions;
            if (null != t) return k.VY.filter((e) => p.e$(p.vB(t), e));
          }, [
            null == eO
              ? void 0
              : null === (r = eO.install_params) || void 0 === r
                ? void 0
                : r.permissions,
          ]),
          eq = a.useCallback(
            (e) => {
              ek(e),
                (null == eO ? void 0 : eO.id) != null &&
                  H.default.track(ep.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                    application_id: eO.id,
                    guild_id: g,
                    tab_name: e,
                  });
            },
            [null == eO ? void 0 : eO.id, g, ek],
          ),
          eX = a.useMemo(() => {
            var e, t, n;
            return null !==
              (n = (
                null !==
                  (t =
                    null == eO
                      ? void 0
                      : null === (e = eO.directory_entry) || void 0 === e
                        ? void 0
                        : e.carousel_items) && void 0 !== t
                  ? t
                  : []
              )
                .map(X.RF)
                .filter(M.lm)) && void 0 !== n
              ? n
              : [];
          }, [eO]),
          eJ = a.useCallback(
            (e, t) => {
              if (e.type === ep.s9s.IMG) {
                let t = eX.filter((e) => e.type === ep.s9s.IMG),
                  n = t.findIndex((t) => t === e);
                if (n < 0) return;
                let i = t.map((e) => ({
                  url: (0, b.Q)(e.src),
                  original: e.src,
                  width: e.width,
                  height: e.height,
                  type: "IMAGE",
                }));
                (0, L.K)({
                  items: i,
                  startingIndex: n,
                  fit: A.D.CONTAIN,
                  shouldHideMediaOptions: !0,
                  shouldAnimateCarousel: !0,
                  location: "ApplicationDirectoryProfile",
                });
              }
            },
            [eX],
          ),
          eQ = a.useCallback(
            (e) => {
              (null == eO ? void 0 : eO.id) != null &&
                H.default.track(ep.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                  current_page: "product",
                  category: e.name,
                  category_id: e.id,
                  application_id: eO.id,
                  guild_id: g,
                }),
                (0, en.goToCategory)({ categoryId: e.id });
            },
            [eO, g],
          );
        a.useEffect(() => {
          if (null != m) V.T4({ applicationId: m, guildId: g });
        }, [m, g]);
        let e$ = a.useCallback(
            (e) => {
              let { application: t, mutualGuilds: n, index: i } = e;
              (null == eO ? void 0 : eO.id) != null &&
                H.default.track(ep.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                  current_page: "product",
                  application_id: eO.id,
                  suggested_application_id: t.id,
                  position: i,
                  load_id: ej,
                  guild_id: g,
                  shown_mutual_guilds_count: n.length,
                }),
                (0, en.goToApplication)({ applicationId: t.id });
            },
            [null == eO ? void 0 : eO.id, ej, g],
          ),
          e0 = a.useCallback(() => {
            null != eO &&
              (0, C.Z)((0, er.G)({ id: eO.id, name: eO.name, locale: eB }));
          }, [eB, eO]),
          e6 = a.useCallback(
            (e) =>
              (0, i.jsxs)(h.Menu, {
                navId: "application-directory-profile",
                "aria-label": e_.intl.string(e_.t["/7I4/P"]),
                onClose: e,
                onSelect: void 0,
                children: [
                  (0, i.jsx)(h.MenuGroup, {
                    children: (0, i.jsx)(h.MenuItem, {
                      id: "report",
                      label: e_.intl.string(e_.t.NgA5vr),
                      color: "danger",
                      action: e0,
                    }),
                  }),
                  null != eG ? (0, i.jsx)(h.MenuGroup, { children: eG }) : null,
                ],
              }),
            [eG, e0],
          ),
          [e1, e2] = (0, x.Z)(!1, 1e3),
          e3 = a.useCallback(() => {
            if (null != eO)
              H.default.track(ep.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, {
                application_id: eO.id,
                guild_id: g,
              }),
                (0, F.JG)(eC(eO.id)),
                e2(!0);
          }, [eO, e2, g]);
        a.useEffect(() => {
          let e = new URL(location.href);
          if (T && "true" === e.searchParams.get(ex)) {
            e.searchParams.delete(ex);
            let t = e.pathname + e.search;
            (0, R.dL)(t), eW("product_page");
          }
        }, [T, eW]);
        let e5 = a.useCallback(() => {
            if (null != eO) {
              if ((u.tq || u.Em) && null == eO.custom_install_url) {
                let e = (0, G.Er)({
                  applicationId: eO.id,
                  customInstallUrl: eO.custom_install_url,
                  installParams: eO.install_params,
                  integrationTypesConfig: eO.integration_types_config,
                });
                if (null != e) {
                  window.open(e, "_blank");
                  return;
                }
              }
              T
                ? eW("product_page")
                : (H.default.track(ep.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: m,
                    guild_id: g,
                    auth_type:
                      null != eO.custom_install_url ? "custom_url" : "in_app",
                    source: "product_page",
                    device_platform: u.tq ? "mobile_web" : "desktop_web",
                  }),
                  (0, X.rf)({ [ex]: "true" }));
            }
          }, [eO, T, eW, m, g]),
          e8 = (null == eO ? void 0 : eO.id) === em.g,
          [e9, e4] = a.useState(!1),
          [e7, te] = a.useState(!1),
          [tt, tn] = a.useState(!0),
          ti = (e) => {
            null != e && e4(e.scrollHeight > e.clientHeight);
          },
          ta = null != eK && eK.length > 0,
          tr = (null == eO ? void 0 : eO.flags) != null,
          to = (0, N.R)(null != m ? m : "");
        a.useEffect(() => {
          to && null != m && (0, y.Z)(m);
        }, [to, m]);
        let tl = a.useMemo(() => {
            let e = [],
              t = !0;
            switch (f) {
              case eu.ApplicationDirectoryProfileSections.GENERAL: {
                var n, a;
                let r =
                  null == eO
                    ? void 0
                    : null === (n = eO.directory_entry) || void 0 === n
                      ? void 0
                      : n.detailed_description;
                null != r && r.length > 0
                  ? (e.push(
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(h.Heading, {
                            className: ef.sectionHeader,
                            variant: "heading-md/semibold",
                            children: e_.intl.string(e_.t.txraKS),
                          }),
                          (0, i.jsx)("div", {
                            ref: ti,
                            className: o()({
                              [ef.descriptionClamp]: !e7,
                              [ef.descriptionClampSafari]:
                                !e7 && "Safari" === s().name,
                            }),
                            children: (0, i.jsx)(E.Z, {
                              className: ef.detailedDescription,
                              parser: eh,
                              output: eI,
                              state: { allowLinks: !0 },
                              children: r,
                            }),
                          }),
                          (e9 || e7) &&
                            (0, i.jsx)(eN, {
                              isViewAll: e7,
                              onToggle: () => {
                                te((e) => !e);
                              },
                            }),
                        ],
                      }),
                    ),
                    (t = !1))
                  : (null == eO
                        ? void 0
                        : null === (a = eO.directory_entry) || void 0 === a
                          ? void 0
                          : a.short_description) !== void 0
                    ? e.push(
                        (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(h.Heading, {
                              className: ef.sectionHeader,
                              variant: "heading-md/semibold",
                              children: e_.intl.string(e_.t.txraKS),
                            }),
                            (0, i.jsx)("span", {
                              children: eO.directory_entry.short_description,
                            }),
                          ],
                        }),
                      )
                    : (null == eO ? void 0 : eO.description) != null &&
                      e.push(
                        (0, i.jsx)(B.Z, {
                          className: ef.description,
                          userBio: eO.description,
                        }),
                      ),
                  null != eA &&
                    eA.length > 0 &&
                    (e.push(
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(h.Heading, {
                            className: ef.sectionHeader,
                            variant: "heading-md/semibold",
                            children: e_.intl.string(e_.t.swIgTE),
                          }),
                          (0, i.jsx)(eo.Z, {
                            className: ef.commandList,
                            commands: eA,
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
                      className: ef.errorImage,
                      src: eg,
                      "aria-hidden": !0,
                      alt: "",
                    }),
                    (0, i.jsx)(h.Heading, {
                      variant: "heading-xl/semibold",
                      children: e_.intl.string(e_.t.UvDfMz),
                    }),
                  ],
                });
                eX.forEach((e, t) => {
                  null != eO
                    ? (e.alt = e_.intl.formatToPlainString(e_.t.sSEhHR, {
                        index: t + 1,
                        totalImages: eX.length,
                        name: eO.name,
                      }))
                    : (e.alt = e_.intl.string(e_.t["5UVm9/"]));
                }),
                  e.push(
                    (0, i.jsx)(v.Z, {
                      className: ef.carousel,
                      themedPagination: !0,
                      items: eX,
                      autoplayInterval: 8e3,
                      paused: !eR,
                      videoAutoPlay: !0,
                      onCurrentItemClick: eJ,
                      errorComponent: t,
                      onImageLoad: (e) => {
                        let { src: t, loadTimeMs: n } = e;
                        null != n &&
                          null != eO &&
                          H.default.track(
                            ep.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED,
                            { application_id: eO.id, load_time_ms: n, src: t },
                          );
                      },
                    }),
                  );
                break;
              }
              case eu.ApplicationDirectoryProfileSections.STORE:
                to && null != m && e.push((0, i.jsx)(ea.M, { appId: m }));
                break;
              case eu.ApplicationDirectoryProfileSections.PRIVACY:
                ta &&
                  e.push(
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(h.Heading, {
                          className: ef.sectionHeader,
                          variant: "heading-md/semibold",
                          children: e_.intl.string(e_.t.runNFx),
                        }),
                        (0, i.jsx)(I.Z, {
                          className: ef.commandList,
                          grantedPermissions: eK,
                          grantedPermissionsHeader: e_.intl.string(e_.t.SLgiND),
                        }),
                      ],
                    }),
                  ),
                  tr &&
                    e.push(
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(h.Heading, {
                            className: ef.sectionHeader,
                            variant: "heading-md/semibold",
                            children: e_.intl.string(e_.t.QzDgMj),
                          }),
                          (0, i.jsx)(el.Z, { application: eO }),
                        ],
                      }),
                    );
            }
            return (
              tn(t),
              0 === e.length &&
                f !== eu.ApplicationDirectoryProfileSections.GENERAL &&
                null != eO &&
                eM(),
              e.map((e, t) =>
                (0, i.jsx)("div", { className: ef.section, children: e }, t),
              )
            );
          }, [f, eM, eO, eA, e7, e9, eX, eR, eJ, to, m, ta, tr, eK]),
          ts = a.useMemo(() => {
            let e = [
              {
                name: eu.ApplicationDirectoryProfileSections.GENERAL,
                text: e_.intl.string(e_.t.r4vJeX),
                Icon: h.AppsIcon,
              },
            ];
            return (
              eX.length > 0 &&
                e.push({
                  name: eu.ApplicationDirectoryProfileSections.IMAGES,
                  text: e_.intl.string(e_.t.BEFwGR),
                  Icon: h.ImagesIcon,
                }),
              to &&
                e.push({
                  name: eu.ApplicationDirectoryProfileSections.STORE,
                  text: e_.intl.string(e_.t.pylO39),
                  Icon: h.ShopSparkleIcon,
                }),
              (ta || tr) &&
                e.push({
                  name: eu.ApplicationDirectoryProfileSections.PRIVACY,
                  text: e_.intl.string(e_.t.hrodJy),
                  Icon: h.PrivacyAndSafetyIcon,
                }),
              e
            );
          }, [eX.length, ta, tr, to]);
        return (
          (d =
            null == eO
              ? null == eE || eE === W.M.FETCHING
                ? (0, i.jsx)($.Z, { loading: eE === W.M.FETCHING })
                : (0, i.jsx)("div", {
                    className: ef.__invalid_page,
                    children: (0, i.jsxs)("div", {
                      className: ef.emptyContainer,
                      children: [
                        (0, i.jsx)("img", {
                          className: ef.emptyImage,
                          src: eg,
                          alt: "",
                        }),
                        (0, i.jsx)(h.Heading, {
                          variant: "heading-xl/semibold",
                          children: e_.intl.string(e_.t.T48fKS),
                        }),
                      ],
                    }),
                  })
              : (0, i.jsxs)($.Z, {
                  loading: eE === W.M.FETCHING,
                  children: [
                    (0, i.jsx)(eT, { app: eO, iconSrc: eU }),
                    (0, i.jsxs)("div", {
                      className: ef.__invalid_page,
                      children: [
                        (0, i.jsxs)("div", {
                          className: ef.header,
                          children: [
                            (0, i.jsxs)("div", {
                              className: ef.headerSidebar,
                              children: [
                                (0, i.jsx)("img", {
                                  className: ef.headerIcon,
                                  alt: "",
                                  "aria-hidden": !0,
                                  src: eU,
                                  width: eb,
                                  height: eb,
                                }),
                                (0, i.jsx)(Q.Z, {
                                  application: eO,
                                  mutualGuilds: eZ,
                                  mutualGuildShownMax: 3,
                                  compact: !0,
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: ef.headerContent,
                              children: [
                                (0, i.jsxs)("div", {
                                  className: ef.headerNameAndButtons,
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className: ef.headerNameAndIcon,
                                      children: [
                                        (0, i.jsx)(h.Heading, {
                                          className: ef.name,
                                          variant: "heading-xxl/semibold",
                                          children: eO.name,
                                        }),
                                        to &&
                                          (0, i.jsx)(h.Tooltip, {
                                            tooltipClassName:
                                              ef.premiumIconTooltip,
                                            text: e_.intl.string(
                                              e_.t["7B10XF"],
                                            ),
                                            children: (e) =>
                                              (0, i.jsx)("img", {
                                                ...e,
                                                alt: e_.intl.string(
                                                  e_.t["7B10XF"],
                                                ),
                                                className: ef.premiumIcon,
                                                src: n(744050),
                                              }),
                                          }),
                                        e8 &&
                                          (0, i.jsx)(ee.Z, {
                                            className: ef.partnerBadge,
                                          }),
                                      ],
                                    }),
                                    (0, i.jsxs)("div", {
                                      className: ef.buttons,
                                      children: [
                                        (0, i.jsx)(h.Button, {
                                          onClick: e3,
                                          color: h.Button.Colors.PRIMARY,
                                          children: e1
                                            ? e_.intl.string(e_.t.wwdb3t)
                                            : e_.intl.string(e_.t.z4sP5O),
                                        }),
                                        (0, i.jsx)(h.Button, {
                                          color: h.Button.Colors.BRAND,
                                          onClick: e5,
                                          disabled: !eV,
                                          children: e_.intl.string(e_.t.NgXl3N),
                                        }),
                                        (0, i.jsx)(h.Popout, {
                                          renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return e6(t);
                                          },
                                          position: "left",
                                          align: "top",
                                          animation: h.Popout.Animation.NONE,
                                          children: (e) =>
                                            (0, i.jsx)(h.Clickable, {
                                              className: ef.overflow,
                                              ...e,
                                              children: (0, i.jsx)(
                                                h.MoreHorizontalIcon,
                                                {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  width: 20,
                                                  height: 20,
                                                  className: ef.iconInteractive,
                                                },
                                              ),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsx)(ed.Z, {
                                  activeSection: f,
                                  setSection: eq,
                                  sections: ts,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: ef.contentContainer,
                          children: [
                            (0, i.jsxs)("div", {
                              className: ef.content,
                              children: [
                                tl,
                                null != eP && eP.length > 0
                                  ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                        tt &&
                                          (0, i.jsx)("div", {
                                            className: ef.separator,
                                          }),
                                        (0, i.jsxs)("div", {
                                          className: ef.section,
                                          children: [
                                            (0, i.jsx)(h.Heading, {
                                              className: ef.relatedHeader,
                                              variant: "eyebrow",
                                              children: e_.intl.string(
                                                e_.t.E8wCnp,
                                              ),
                                            }),
                                            (0, i.jsx)($.Z, {
                                              loading: es,
                                              children: (0, i.jsx)(J.Z, {
                                                applicationId: m,
                                                applications: eP,
                                                onViewOne: e$,
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
                              className: ef.sidebar,
                              application: eO,
                              guildId: g,
                              onViewCategory: eQ,
                              onClickGuildWidget: eF,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })),
          (0, i.jsx)(K.Z, { children: d })
        );
      }
      let eN = (e) => {
          let t,
            { onToggle: n, isViewAll: a } = e;
          return (
            (t = a
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(h.Text, {
                      className: ef.showMoreButtonText,
                      variant: "eyebrow",
                      children: e_.intl.string(e_.t["vtfc4+"]),
                    }),
                    (0, i.jsx)(h.ChevronSmallUpIcon, {
                      size: "md",
                      color: "currentColor",
                      className: ef.showMoreButtonIcon,
                    }),
                  ],
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(h.Text, {
                      className: ef.showMoreButtonText,
                      variant: "eyebrow",
                      children: e_.intl.string(e_.t.ZDRyur),
                    }),
                    (0, i.jsx)(h.ChevronSmallDownIcon, {
                      size: "md",
                      color: "currentColor",
                      className: ef.showMoreButtonIcon,
                    }),
                  ],
                })),
            (0, i.jsx)(ey, {
              children: (0, i.jsx)(h.Button, {
                look: h.Button.Looks.BLANK,
                color: h.Button.Colors.TRANSPARENT,
                size: h.Button.Sizes.NONE,
                className: ef.showMoreButton,
                innerClassName: ef.showMoreButtonInner,
                onClick: n,
                children: t,
              }),
            })
          );
        },
        ey = (e) => {
          let { className: t, contentClassName: n, children: a } = e;
          return (0, i.jsxs)("div", {
            className: o()([ef.dividerContainer, t]),
            children: [
              (0, i.jsx)("div", { className: ef.divider }),
              null != a
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("div", {
                        className: o()(ef.contentDivider, n),
                        children: a,
                      }),
                      (0, i.jsx)("div", { className: ef.divider }),
                    ],
                  })
                : null,
            ],
          });
        };
      function eT(e) {
        let { app: t, iconSrc: n } = e,
          r = (0, T.ZP)(n, f.Z.unsafe_rawColors.PRIMARY_800.css),
          { bot: o } = t,
          l = a.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != o) {
              let t = (0, D.aN)({
                id: o.id,
                banner: o.banner,
                size: 1024,
                canAnimate: !1,
              });
              null != t &&
                ((e["--custom-background-static"] = "url(".concat(t)),
                (e.height = "auto"));
              let n = (0, D.xR)(o.banner)
                ? (0, D.aN)({
                    id: o.id,
                    banner: o.banner,
                    size: 1024,
                    canAnimate: !0,
                  })
                : null;
              null != n &&
                (e["--custom-background-animated"] = "url(".concat(n));
            }
            return e;
          }, [r, o]);
        return (0, i.jsx)("div", {
          style: l,
          className: ef.headerBanner,
          "data-has-animated": "--custom-background-animated" in l,
        });
      }
    },
    527564: function (e, t, n) {
      n.d(t, {
        M: function () {
          return C;
        },
      }),
        n(789020);
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        o = n.n(r),
        l = n(442837),
        s = n(481060),
        c = n(765717),
        d = n(283836),
        u = n(507608),
        p = n(147496),
        m = n(955335),
        _ = n(519896),
        f = n(171246),
        g = n(55563),
        h = n(147890),
        I = n(272242),
        b = n(981631),
        v = n(388032),
        x = n(701672);
      function C(e) {
        let { appId: t } = e,
          { subscriptions: n, otps: a } = (0, d.q)(t);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            n.length > 0 &&
              (0, i.jsxs)("div", {
                className: x.productSection,
                children: [
                  (0, i.jsx)(m.r, { subscriptions: n }),
                  (0, i.jsx)("div", {
                    className: o()(x.productList, x.subList),
                    children: n.map((e) =>
                      (0, i.jsx)(
                        u.zz,
                        {
                          appId: t,
                          listing: e,
                          subscriptionType: (0, f.KW)(e.skuFlags)
                            ? "user"
                            : "guild",
                          onDetails: () => {
                            (0, h.goToApplicationStoreSku)({
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
                className: x.productSection,
                children: [
                  (0, i.jsx)(s.Heading, {
                    variant: "heading-lg/semibold",
                    children: v.intl.string(v.t.yUGTs7),
                  }),
                  (0, i.jsx)("div", {
                    className: o()(x.productList, x.itemList),
                    children: a.map((e) =>
                      (0, i.jsx)(
                        u.hd,
                        {
                          skuId: e.skuId,
                          appId: t,
                          onDetails: () => {
                            (0, h.goToApplicationStoreSku)({
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
              path: b.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                ":applicationId",
                ":skuId",
              ),
              exact: !0,
              render: (e) => (0, i.jsx)(S, { ...e }),
            }),
          ],
        });
      }
      function S(e) {
        let {
            match: {
              params: { applicationId: t, skuId: n },
            },
          } = e,
          r = (0, l.e7)([g.Z], () => g.Z.get(n), [n]),
          o = (0, l.e7)(
            [g.Z],
            () => (null != n ? g.Z.getParentSKU(n) : void 0),
            [n],
          ),
          c = a.useId();
        return (
          a.useLayoutEffect(() => {
            switch (null == r ? void 0 : r.type) {
              case b.epS.CONSUMABLE:
              case b.epS.DURABLE:
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
                        !N() &&
                          (0, h.goToApplicationSection)({
                            applicationId: t,
                            section:
                              I.ApplicationDirectoryProfileSections.STORE,
                          });
                      },
                    },
                  );
                })(c, t, n);
              case b.epS.SUBSCRIPTION:
                if ((null == o ? void 0 : o.flags) == null) return;
                return (function (e, t, n, a) {
                  (0, s.openModal)(
                    (e) => {
                      let { onClose: r, transitionState: o } = e;
                      return (0, i.jsx)(_.SubscriptionDetailsModal, {
                        appId: t,
                        subscriptionType: (0, f.KW)(a) ? "user" : "guild",
                        skuId: n,
                        guildId: null,
                        onClose: r,
                        transitionState: o,
                      });
                    },
                    {
                      modalKey: e,
                      onCloseCallback() {
                        !N() &&
                          (0, h.goToApplicationSection)({
                            applicationId: t,
                            section:
                              I.ApplicationDirectoryProfileSections.STORE,
                          });
                      },
                    },
                  );
                })(c, t, n, o.flags);
            }
          }, [
            t,
            c,
            null == o ? void 0 : o.flags,
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
      function N() {
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
        o = n(481060),
        l = n(665692),
        s = n(135807);
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
                  (0, i.jsxs)(o.Text, {
                    className: s.commandName,
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: [l.GI, e.displayName],
                  }),
                  (0, i.jsx)(o.Text, {
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
          return g;
        },
      }),
        n(789020);
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        o = n.n(r),
        l = n(481060),
        s = n(860719),
        c = n(63063),
        d = n(49012),
        u = n(981631),
        p = n(388032),
        m = n(369933);
      let _ = c.Z.getArticleURL(u.BhN.BOT_DATA_ACCESS);
      function f(e) {
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
                  children: (0, i.jsx)(l.Heading, {
                    variant: "eyebrow",
                    color: "header-secondary",
                    children: n,
                  }),
                }),
                (0, i.jsx)("div", {
                  className: m.intentBody,
                  children: (0, i.jsx)(l.Text, {
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
      function g(e) {
        let { application: t } = e,
          {
            hasMessageContent: n,
            hasGuildPresences: r,
            hasGuildMembers: c,
            hasIntents: u,
          } = (0, s.w)({ flags: null == t ? void 0 : t.flags }),
          g = a.useCallback(() => {
            (null == t ? void 0 : t.privacy_policy_url) != null &&
              (0, d.q)({ href: t.privacy_policy_url });
          }, [null == t ? void 0 : t.privacy_policy_url]);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            u &&
              (0, i.jsx)("div", {
                className: m.intentsListHeading,
                children: (0, i.jsx)(l.Text, {
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
                        (0, i.jsx)(f, {
                          icon: l.ChatIcon,
                          heading: p.intl.string(p.t.gJpBOz),
                          body: p.intl.string(p.t["L+QVbm"]),
                        }),
                      r &&
                        (0, i.jsx)(f, {
                          icon: l.UserCircleStatusIcon,
                          heading: p.intl.string(p.t.jo0oj4),
                          body: p.intl.string(p.t.Dm0jq6),
                        }),
                      c &&
                        (0, i.jsx)(f, {
                          icon: l.GroupIcon,
                          heading: p.intl.string(p.t.QZql7O),
                          body: p.intl.string(p.t["ez/N/f"]),
                        }),
                    ],
                  }),
                (0, i.jsxs)("div", {
                  className: o()({ [m.hasSeparator]: u }),
                  children: [
                    (0, i.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: p.intl.format(p.t.b6nqk5, { helpCenterUrl: _ }),
                    }),
                    (null == t ? void 0 : t.privacy_policy_url) != null &&
                      (0, i.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        className: m.privacyPolicy,
                        children: p.intl.format(p.t.agYVY2, { onClick: g }),
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
          return S;
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
        o = n.n(r),
        l = n(780384),
        s = n(481060),
        c = n(794295),
        d = n(410030),
        u = n(726542),
        p = n(626135),
        m = n(463571),
        _ = n(887706),
        f = n(214912),
        g = n(290247),
        h = n(981631),
        I = n(388032),
        b = n(755257);
      let v = (0, I.getAvailableLocales)();
      function x(e) {
        var t, n, a;
        let { onClick: r, url: o, children: c } = e,
          p = (0, d.ZP)(),
          m = u.Z.getByUrl(o),
          _ = (0, l.wj)(p)
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
        return (0, i.jsx)(C, {
          icon: void 0 === _ ? s.LinkIcon : void 0,
          imageSrc: _,
          onClick: r,
          url: o,
          type:
            null !== (a = null == m ? void 0 : m.name) && void 0 !== a
              ? a
              : "website",
          children: c,
        });
      }
      function C(e) {
        let {
            icon: t,
            imageSrc: n,
            iconColor: a,
            url: r,
            type: l,
            children: d,
            onClick: u,
          } = e,
          p = (0, _.Z)(),
          m = null;
        null != t
          ? (m = (0, i.jsx)(t, {
              className: b.listIcon,
              color: null != a ? a : "currentColor",
              width: 20,
              height: 20,
              size: "custom",
            }))
          : null != n &&
            (m = (0, i.jsx)("img", {
              className: b.listImage,
              src: n,
              alt: "",
            }));
        let f = (0, i.jsxs)(i.Fragment, {
          children: [
            m,
            (0, i.jsx)(s.Text, {
              className: b.listText,
              variant: "text-md/normal",
              selectable: !0,
              children: d,
            }),
          ],
        });
        return (0, i.jsx)(c.Z, {
          href: r,
          className: o()(b.listItem, b.linkItem),
          onClick: () => (u(r, l), !1),
          trusted: !p,
          useDefaultUnderlineStyles: !1,
          children: f,
        });
      }
      function S(e) {
        var t, n, r;
        let {
            application: l,
            guildId: c,
            className: d,
            onViewCategory: u,
            onClickGuildWidget: _,
          } = e,
          [S, N] = a.useState(null),
          y = [],
          T =
            null !==
              (n =
                null == l
                  ? void 0
                  : null === (t = l.directory_entry) || void 0 === t
                    ? void 0
                    : t.external_urls) && void 0 !== n
              ? n
              : [];
        a.useEffect(() => {
          var e;
          if (
            (null === (e = l.directory_entry) || void 0 === e
              ? void 0
              : e.supported_locales) !== void 0
          ) {
            let e = new Set(l.directory_entry.supported_locales);
            N(
              v
                .filter((t) => e.has(t.value))
                .map((e) => I.intl.string(e.localizedName)),
            );
          }
        }, [l.directory_entry]);
        let j = (e, t) => {
          p.default.track(
            h.rMx.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED,
            { application_id: l.id, guild_id: c, type: t, url: e },
          );
        };
        return (
          null != l.categories &&
            l.categories.length > 0 &&
            y.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(s.Heading, {
                    className: b.sectionHeader,
                    variant: "eyebrow",
                    children: I.intl.string(I.t.s7ialZ),
                  }),
                  (0, i.jsx)("div", {
                    className: b.categories,
                    children: (null !== (r = l.categories) && void 0 !== r
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
                              .concat(h.Z5c.APPLICATION_DIRECTORY_SEARCH, "?")
                              .concat(t),
                            children: (0, i.jsx)(s.Clickable, {
                              className: b.category,
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
          null != S &&
            S.length > 0 &&
            y.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(s.Heading, {
                    className: b.sectionHeader,
                    variant: "eyebrow",
                    children: I.intl.string(I.t.Fbjlu7),
                  }),
                  (0, i.jsx)(g.Z, { supportedLanguages: S }),
                ],
              }),
            ),
          (null != l.terms_of_service_url ||
            null != l.privacy_policy_url ||
            T.length > 0) &&
            y.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(s.Heading, {
                    className: b.sectionHeader,
                    variant: "eyebrow",
                    children: I.intl.string(I.t.l6DP2t),
                  }),
                  T.map((e, t) =>
                    (0, i.jsx)(
                      x,
                      { url: e.url, onClick: j, children: e.name },
                      t,
                    ),
                  ),
                  null != l.terms_of_service_url
                    ? (0, i.jsx)(C, {
                        icon: s.FileIcon,
                        onClick: j,
                        url: l.terms_of_service_url,
                        type: "tos",
                        children: I.intl.string(I.t.s7STcX),
                      })
                    : null,
                  null != l.privacy_policy_url
                    ? (0, i.jsx)(C, {
                        icon: s.LockIcon,
                        onClick: j,
                        url: l.privacy_policy_url,
                        type: "policy",
                        children: I.intl.string(I.t.kH3JR0),
                      })
                    : null,
                ],
              }),
            ),
          null != l.guild &&
            l.guild.features.includes(h.oNc.DISCOVERABLE) &&
            y.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(s.Heading, {
                    className: b.sectionHeader,
                    variant: "eyebrow",
                    children: I.intl.string(I.t.KJEO29),
                  }),
                  (0, i.jsx)(f.Z, { guild: l.guild, onClick: _ }),
                ],
              }),
            ),
          (0, i.jsx)("div", {
            className: o()(b.sidebar, d),
            children:
              y.length > 0
                ? (0, i.jsx)(i.Fragment, {
                    children: y.map((e, t) =>
                      (0, i.jsx)(
                        "div",
                        { className: b.section, children: e },
                        t,
                      ),
                    ),
                  })
                : null,
          })
        );
      }
    },
    290247: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(120356),
        r = n.n(a),
        o = n(481060),
        l = n(403339);
      function s(e) {
        let { supportedLanguages: t } = e;
        return (0, i.jsx)("ul", {
          className: l.outerContainer,
          children: t.map((e) =>
            (0, i.jsx)(
              "li",
              {
                className: r()(l.innerContainer, l.languageItem),
                children: (0, i.jsx)(o.Text, {
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
    606183: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(481060),
        r = n(802766);
      function o(e) {
        let { activeSection: t, setSection: n, sections: o } = e;
        return (0, i.jsx)(a.TabBar, {
          selectedItem: t,
          type: "top",
          onItemSelect: n,
          className: r.tabBar,
          children: o.map((e) => {
            let { name: t, text: n, Icon: o } = e;
            return (0, i.jsxs)(
              a.TabBar.Item,
              {
                id: t,
                className: r.tabBarItem,
                "aria-label": n,
                children: [
                  (0, i.jsx)(o, { className: r.icon, color: "currentColor" }),
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
    147496: function (e, t, n) {
      n.r(t),
        n.d(t, {
          ItemDetailsModal: function () {
            return h;
          },
        });
      var i = n(200651);
      n(192379);
      var a = n(752843),
        r = n(442837),
        o = n(481060),
        l = n(55563),
        s = n(551428),
        c = n(73346),
        d = n(591759),
        u = n(110742),
        p = n(886253),
        m = n(680005),
        _ = n(938337),
        f = n(981631),
        g = n(388032);
      function h(e) {
        var t, n, h, I;
        let {
            onClose: b,
            transitionState: v,
            skuId: x,
            appId: C,
            onHeaderTitleClick: S,
          } = e,
          N = (0, r.e7)([s.Z], () => s.Z.getForSKU(x), [x]),
          y = (0, r.e7)([l.Z], () => l.Z.get(x), [x]),
          T = (0, u.M)(x);
        if (null == y) return null;
        let j = null !== (n = y.name) && void 0 !== n ? n : "",
          P =
            null !==
              (h =
                null == N
                  ? void 0
                  : null === (t = N.description) || void 0 === t
                    ? void 0
                    : t.trim()) && void 0 !== h
              ? h
              : void 0,
          E =
            (null == N ? void 0 : N.headerBackground) != null &&
            null !==
              (I = d.Z.toURLSafe((0, c._W)(C, N.headerBackground, 256))) &&
            void 0 !== I
              ? I
              : void 0,
          A = y.type === f.epS.DURABLE && T,
          L =
            y.type === f.epS.DURABLE
              ? A
                ? g.intl.string(g.t.bm82mp)
                : g.intl.string(g.t["6gprwc"])
              : void 0,
          { price: k } = y;
        return null == k
          ? null
          : (0, i.jsx)(p.A, {
              appId: C,
              skuId: y.id,
              transitionState: v,
              onHeaderTitleClick: null != S ? S : b,
              onClose: b,
              footer: (0, i.jsx)(m.YG, { appId: C, sku: y }),
              children: (0, i.jsx)(_.i, {
                appId: C,
                skuId: y.id,
                title: j,
                description: P,
                imgSrc: E,
                tag: null != L ? (0, i.jsx)(a.V, { text: L }) : void 0,
                FallbackIcon: o.TicketIcon,
              }),
            });
      }
    },
    770146: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(120356),
        r = n.n(a),
        o = n(321065);
      function l(e) {
        let { children: t, tag: n, className: a } = e;
        return (
          (n = null != n ? n : "h3"),
          (0, i.jsx)(n, { className: r()(o.title, a), children: t })
        );
      }
    },
    679056: function (e, t, n) {
      n(47120);
      var i,
        a = n(200651),
        r = n(192379),
        o = n(846519);
      function l(e, t, n) {
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
            { props: o } = this;
          let l =
            ((n = o),
            (i = this.state),
            !n.disable && !(i.hovered && n.pauseOnHover));
          let s =
            ((a = e), (r = t), !a.disable && !(r.hovered && a.pauseOnHover));
          (l && !s) || e.interval !== o.interval
            ? this.startTimer()
            : !l && s && this.stopTimer();
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
            l(this, "timer", new o.Xp()),
            l(this, "state", { hovered: !1 }),
            l(this, "handlePause", () => {
              !this.state.hovered && this.setState({ hovered: !0 });
            }),
            l(this, "handleResume", () => {
              this.setState({ hovered: !1 });
            });
        }
      }
      l(s, "defaultProps", { disable: !1, pauseOnHover: !1 }), (t.Z = s);
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
        o = n(192379),
        l = n(120356),
        s = n.n(l),
        c = n(748780),
        d = n(215569),
        u = n(383583);
      ((i = a || (a = {}))[(i.RIGHT = -1)] = "RIGHT"),
        (i[(i.LEFT = 1)] = "LEFT");
      let p = { friction: 7, tension: 40, clamp: !0 };
      class m extends o.PureComponent {
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
          springSettings: o = p,
          fadeInOut: l = !1,
        } = e;
        return (0, r.jsx)(d.W, {
          component: "div",
          className: s()(u.animator, a),
          children: (0, r.jsx)(
            m,
            { direction: i, springSettings: o, fadeInOut: l, children: t },
            n,
          ),
        });
      };
    },
    241209: function (e, t, n) {
      var i,
        a,
        r = n(200651),
        o = n(192379),
        l = n(120356),
        s = n.n(l),
        c = n(477660),
        d = n.n(c),
        u = n(663993),
        p = n(770146),
        m = n(772096),
        _ = n(428595),
        f = n(532901),
        g = n(374865),
        h = n(763971);
      function I(e, t, n) {
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
      let b = new RegExp(
        "https?://".concat(
          null !== (i = window.GLOBAL_ENV.CDN_HOST) && void 0 !== i ? i : "",
        ),
      );
      function v(e) {
        return "string" == typeof e.content ? e.content : S(e.content);
      }
      let x = {
          ...d().defaultRules,
          heading: {
            ...d().defaultRules.heading,
            react(e, t, n) {
              let i = "h".concat(e.level);
              return (0, r.jsx)(
                p.Z,
                { tag: i, children: t(e.content, n) },
                n.key,
              );
            },
          },
          paragraph: {
            ...d().defaultRules.paragraph,
            react: (e, t, n) =>
              (0, r.jsx)(
                "div",
                { className: g.paragraph, children: t(e.content, n) },
                n.key,
              ),
          },
          strong: { ...d().defaultRules.strong, order: 6 },
          em: { ...d().defaultRules.em, order: 6 },
          u: { ...d().defaultRules.u, order: 5 },
          del: { ...d().defaultRules.del, order: 6 },
          link: {
            ...m.ZP,
            ...(0, f.Z)({ enableBuildOverrides: !1 }),
            order: 6,
          },
          blockQuote: {
            ...d().defaultRules.blockQuote,
            react: (e, t, n) =>
              (0, r.jsx)(
                "blockquote",
                { className: g.blockquote, children: v(e) },
                n.key,
              ),
          },
          image: {
            ...d().defaultRules.image,
            order: 6,
            match(e, t, n) {
              let i = d().defaultRules.image;
              if (null == i || null == i.match) return !1;
              let a = i.match(e, t, n);
              if (null != a && Array.isArray(a) && a.length >= 3) {
                let e = a[2];
                if ("string" == typeof e) return null != e.match(b) ? a : null;
              }
              return !1;
            },
          },
          inlineCode: {
            ..._.Z.RULES.inlineCode,
            order: 6,
            react: (e, t, n) =>
              (0, r.jsx)(
                "code",
                { className: g.codeInline, children: v(e) },
                n.key,
              ),
          },
          codeBlock: {
            ...d().defaultRules.codeBlock,
            react(e, t, i) {
              let a = () =>
                (0, r.jsx)(
                  "pre",
                  {
                    children: (0, r.jsx)("code", {
                      className: s()(h.scrollbarGhostHairline, "hljs"),
                      children: v(e),
                    }),
                  },
                  i.key,
                );
              return (0, r.jsx)(
                u.GI,
                {
                  createPromise: () =>
                    Promise.resolve().then(n.bind(n, 364964)),
                  webpackId: 364964,
                  renderFallback: a,
                  render: (t) => {
                    if (
                      !(e.lang && t.hasLanguage(e.lang)) ||
                      "string" != typeof e.content
                    )
                      return a();
                    {
                      let n = t.highlight(e.lang, e.content, !0);
                      return null == n
                        ? a()
                        : (0, r.jsx)(
                            "pre",
                            {
                              children: (0, r.jsx)("code", {
                                className: s()(
                                  h.scrollbarGhostHairline,
                                  "hljs",
                                  n.language,
                                ),
                                dangerouslySetInnerHTML: { __html: n.value },
                              }),
                            },
                            i.key,
                          );
                    }
                  },
                },
                i.key,
              );
            },
          },
        },
        C = d().parserFor(x),
        S = d().reactFor(d().ruleOutput(x, "react"));
      class N extends (a = o.PureComponent) {
        render() {
          let {
              className: e,
              children: t,
              state: n,
              parser: i,
              output: a,
            } = this.props,
            o = a(i("".concat(t, "\n\n"), { inline: !1, ...n }));
          return (0, r.jsx)("div", {
            className: s()(g.markdown, e),
            children: o,
          });
        }
      }
      I(N, "rules", x),
        I(N, "defaultProps", { parser: C, output: S }),
        (t.Z = N);
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
        o = n(981631);
      function l(e) {
        return {
          id: e.id,
          type: o.epS.SUBSCRIPTION,
          application_id: e.application_id,
          product_line: o.POd.APPLICATION,
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
          sku: l(e),
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
          skus: e.map(l),
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
          let o =
            null !== (t = n.subscription_listings) && void 0 !== t ? t : [];
          await Promise.all(
            o.map((t) => {
              if (t.subscription_plans[0].id === e)
                return a.GZ(t.id, void 0, void 0, !0);
            }),
          ),
            c(o);
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
        o,
        l,
        s,
        c = n(512722),
        d = n.n(c),
        u = n(442837),
        p = n(759174),
        m = n(570140),
        _ = n(959546),
        f = n(55563);
      function g(e) {
        return "subscription_listing:".concat(e);
      }
      function h(e) {
        return "application:".concat(e);
      }
      function I(e) {
        return "plan:".concat(e);
      }
      function b(e, t, n) {
        return "entitlement:".concat(e, ":").concat(n, ":").concat(t);
      }
      function v(e, t) {
        return "entitlement:".concat(t, ":").concat(e);
      }
      ((r = i || (i = {}))[(r.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.FETCHED = 2)] = "FETCHED");
      let x = new p.h(
          (e) => [h(e.application_id), ...e.subscription_listings_ids.map(g)],
          (e) => e.id,
        ),
        C = new p.h(
          (e) => [h(e.application_id), I(e.subscription_plans[0].id)],
          (e) => e.id,
        ),
        S = new p.h(
          (e) => [
            b(e.applicationId, e.isValid(null, f.Z), e.guildId),
            v(e.isValid(null, f.Z), e.guildId),
          ],
          (e) => e.id,
        ),
        N = {},
        y = {};
      function T(e) {
        var t;
        for (let n of (x.set(e.id, e),
        null !== (t = e.subscription_listings) && void 0 !== t ? t : []))
          (function (e) {
            C.set(e.id, e);
          })(n);
      }
      class j extends (a = u.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
          var t;
          return null !== (t = N[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionGroupListing(e) {
          return x.get(e);
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
          let t = x.values(g(e));
          return (
            d()(t.length <= 1, "Found multiple group listings for listing"),
            t[0]
          );
        }
        getSubscriptionListing(e) {
          return C.get(e);
        }
        getSubscriptionListingsForApplication(e) {
          return C.values(h(e));
        }
        getEntitlementsForGuildFetchState(e) {
          var t;
          return null !== (t = y[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionListingForPlan(e) {
          let t = C.values(I(e));
          return d()(t.length <= 1, "Found multiple listings for plan"), t[0];
        }
        getApplicationEntitlementsForGuild(e, t) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return S.values(b(e, n, t));
        }
        getEntitlementsForGuild(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return S.values(v(t, e));
        }
      }
      (s = "ApplicationSubscriptionStore"),
        (l = "displayName") in (o = j)
          ? Object.defineProperty(o, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[l] = s),
        (t.Z = new j(m.Z, {
          LOGOUT: function () {
            x.clear(), C.clear(), S.clear(), (N = {}), (y = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: t, groupListingId: n } = e;
            N[t] = 1;
            let i = x.get(n);
            if (null != i)
              for (let e of i.subscription_listings_ids) C.delete(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: t, groupListing: n } = e;
            (N[t] = 2), T(n);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: t } = e;
            N[t] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: t } = e;
            y[t] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: t, entitlements: n } = e;
            (y[t] = 2),
              n.forEach((e) => {
                let t = _.Z.createFromServer(e);
                S.set(t.id, t);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: t } = e;
            y[t] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            e,
          ) {
            let { groupListing: t } = e;
            T(t);
          },
        }));
    },
    95648: function (e, t, n) {
      e.exports = {
        list: "list_a06168",
        container: "container_a06168",
        header: "header_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
      };
    },
    396587: function (e, t, n) {
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
    707337: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_b6f1f8",
        slide: "slide_b6f1f8",
        navPrev: "navPrev_b6f1f8 nav_b6f1f8",
        navNext: "navNext_b6f1f8 nav_b6f1f8",
      };
    },
    678099: function (e, t, n) {
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
    797844: function (e, t, n) {
      e.exports = {
        collapsed: "collapsed_e2ea95",
        blurb: "blurb_e2ea95",
        description: "description_e2ea95",
        toggleCollapseButton: "toggleCollapseButton_e2ea95",
        assetWrapper: "assetWrapper_e2ea95",
        asset: "asset_e2ea95",
      };
    },
    16655: function (e, t, n) {
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
    260346: function (e, t, n) {
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
    295519: function (e, t, n) {
      e.exports = {
        listingDescription: "listingDescription_d2c3da",
        bottomGuildCountContainer: "bottomGuildCountContainer_d2c3da",
      };
    },
    535040: function (e, t, n) {
      e.exports = { header: "header_d5abe9", list: "list_d5abe9" };
    },
    484759: function (e, t, n) {
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
    746220: function (e, t, n) {
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
    496008: function (e, t, n) {
      e.exports = {
        container: "container_da6719",
        spinnerContainer: "spinnerContainer_da6719",
        spinner: "spinner_da6719",
        loading: "loading_da6719",
      };
    },
    493004: function (e, t, n) {
      e.exports = { partnerBadge: "partnerBadge_de92a5" };
    },
    669761: function (e, t, n) {
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
    701672: function (e, t, n) {
      e.exports = {
        productSection: "productSection_a9d0f5",
        productList: "productList_a9d0f5",
        subList: "subList_a9d0f5",
        itemList: "itemList_a9d0f5",
      };
    },
    135807: function (e, t, n) {
      e.exports = {
        list: "list_e0307d",
        row: "row_e0307d",
        commandName: "commandName_e0307d",
      };
    },
    369933: function (e, t, n) {
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
    892528: function (e, t, n) {
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
    755257: function (e, t, n) {
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
    403339: function (e, t, n) {
      e.exports = {
        outerContainer: "outerContainer_b51750",
        innerContainer: "innerContainer_b51750",
        languageItem: "languageItem_b51750",
      };
    },
    802766: function (e, t, n) {
      e.exports = {
        tabBar: "tabBar_bc3297",
        tabBarItem: "tabBarItem_bc3297",
        icon: "icon_bc3297",
      };
    },
    941221: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_bfa0f5",
        productsContainer: "productsContainer_bfa0f5",
        productSection: "productSection_bfa0f5",
        subscriptionCardSubtext: "subscriptionCardSubtext_bfa0f5",
      };
    },
    671702: function (e, t, n) {
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
    689762: function (e, t, n) {
      e.exports = {
        modal: "modal_c48629",
        footer: "footer_c48629",
        footerButtons: "footerButtons_c48629",
        linkButton: "linkButton_c48629",
        innerLinkButton: "innerLinkButton_c48629",
        appIcon: "appIcon_c48629",
        content: "content_c48629",
        unavailableTitle: "unavailableTitle_c48629",
        unavailableBody: "unavailableBody_c48629",
        button: "button_c48629",
      };
    },
    978733: function (e, t, n) {
      e.exports = { btnContent: "btnContent_cdaed4" };
    },
    755522: function (e, t, n) {
      e.exports = { heading: "heading_fcab0f" };
    },
    83909: function (e, t, n) {
      e.exports = { text: "text_b628d6" };
    },
    321065: function (e, t, n) {
      e.exports = { title: "title_eaa702" };
    },
    383583: function (e, t, n) {
      e.exports = { animator: "animator_abd0f1", item: "item_abd0f1" };
    },
    252646: function (e, t, n) {
      e.exports = {
        logo: "logo_b0f834",
        title: "title_b0f834",
        header: "header_b0f834",
      };
    },
    374865: function (e, t, n) {
      e.exports = {
        markdown: "markdown_b97ce2",
        blockquote: "blockquote_b97ce2",
        codeInline: "codeInline_b97ce2",
        paragraph: "paragraph_b97ce2",
      };
    },
    723478: function (e, t, n) {
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
    72714: function (e, t, n) {
      e.exports = {
        singleItemWrapper: "singleItemWrapper_e3183f",
        carousel: "carousel_e3183f",
        item: "item_e3183f",
        singleItem: "singleItem_e3183f item_e3183f",
        viewport: "viewport_e3183f",
      };
    },
    262309: function (e, t, n) {
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
    891589: function (e, t, n) {
      e.exports = {
        slide: "slide_f97a12",
        scaleDown: "scaleDown_f97a12",
        contain: "contain_f97a12",
      };
    },
    659915: function (e, t, n) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    221309: function (e, t, n) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    135970: function (e, t, n) {
      e.exports = {
        body: "body_bf926b",
        reviewStep: "reviewStep_bf926b",
        sliderBody: "sliderBody_bf926b",
        addPaymentSteps: "addPaymentSteps_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
        sliderBodyDynamic: "sliderBodyDynamic_bf926b",
      };
    },
    76962: function (e, t, n) {
      e.exports = {
        container: "container_a3545a",
        header: "header_a3545a",
        divider: "divider_a3545a",
        benefitsContainer: "benefitsContainer_a3545a",
        benefit: "benefit_a3545a",
      };
    },
    134384: function (e, t, n) {
      e.exports = {
        icon: "icon_e10dab",
        small: "small_e10dab",
        medium: "medium_e10dab",
      };
    },
    641479: function (e, t, n) {
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
    630480: function (e, t, n) {
      e.exports = {
        container: "container_ffcaea",
        emojiContainer: "emojiContainer_ffcaea",
        name: "name_ffcaea",
        infoContainer: "infoContainer_ffcaea",
      };
    },
    485270: function (e, t, n) {
      e.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
    366481: function (e, t, n) {
      e.exports = { containerScrollGradient: "containerScrollGradient_c2f634" };
    },
    422235: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    189090: function (e, t, n) {
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
    134992: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_a8220a",
        cardHeaderImg: "cardHeaderImg_a8220a",
        details: "details_a8220a",
        description: "description_a8220a",
        footer: "footer_a8220a",
      };
    },
    789864: function (e, t, n) {
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
    103665: function (e, t, n) {
      e.exports = { container: "container_c99f26" };
    },
    717729: function (e, t, n) {
      e.exports = { hoverCard: "hoverCard_d991d3" };
    },
  },
]);
//# sourceMappingURL=7df8a7c1691db6dbb036.js.map
