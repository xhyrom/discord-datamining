"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93045"],
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
    241159: function (e, n, i) {
      i.d(n, {
        k: function () {
          return o;
        },
      });
      var t = i(544891),
        a = i(570140),
        r = i(981631);
      function o(e) {
        return (
          a.Z.dispatch({
            type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING",
            applicationId: e,
          }),
          t.tn
            .get({ url: r.ANM.STORE_LAYOUT(e) })
            .then(
              (n) => (
                a.Z.dispatch({
                  type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS",
                  applicationId: e,
                  listings: n.body,
                }),
                n.body
              ),
            )
            .catch(() => {
              a.Z.dispatch({
                type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED",
                applicationId: e,
              });
            })
        );
      }
    },
    995648: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return c;
        },
      });
      var t = i(735250);
      i(470079);
      var a = i(120356),
        r = i.n(a),
        o = i(481060),
        l = i(422559),
        s = i(812666);
      function c(e) {
        let {
          grantedPermissions: n,
          disabledPermissions: i,
          grantedPermissionsHeader: a,
          disabledPermissionsHeader: c,
          className: d,
        } = e;
        return (0, t.jsxs)("div", {
          className: r()(s.list, d),
          children: [
            null != n && n.length > 0
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    null != a
                      ? (0, t.jsx)(o.FormTitle, {
                          className: s.permissionHeader,
                          children: a,
                        })
                      : null,
                    (0, t.jsx)("div", {
                      className: s.container,
                      children: n.map((e) =>
                        (0, t.jsxs)(
                          "div",
                          {
                            className: s.permission,
                            children: [
                              (0, t.jsx)(o.CheckmarkLargeIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: s.check,
                              }),
                              (0, t.jsx)(o.Text, {
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
            null != i && i.length > 0
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    null != c
                      ? (0, t.jsx)(o.FormTitle, {
                          className: s.permissionHeader,
                          children: c,
                        })
                      : null,
                    (0, t.jsx)("div", {
                      className: s.container,
                      children: i.map((e) =>
                        (0, t.jsxs)(
                          "div",
                          {
                            className: s.permission,
                            children: [
                              (0, t.jsx)(o.XSmallIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: s.cross,
                              }),
                              (0, t.jsx)(o.Text, {
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
    4461: function (e, n, i) {
      i.d(n, {
        P: function () {
          return r;
        },
      });
      var t = i(470079),
        a = i(135431);
      function r(e, n) {
        let i = t.useMemo(
          () =>
            null != e &&
            (0, a.E)({
              customInstallUrl: e.custom_install_url,
              installParams: e.install_params,
              integrationTypesConfig: e.integration_types_config,
            }),
          [e],
        );
        return {
          canInstall: i,
          install: t.useCallback(
            (i) => {
              if (null != e)
                (0, a.L)({
                  applicationId: e.id,
                  customInstallUrl: e.custom_install_url,
                  installParams: e.install_params,
                  integrationTypesConfig: e.integration_types_config,
                  guildId: null != n ? n : void 0,
                  source: i,
                });
            },
            [e, n],
          ),
        };
      }
    },
    744142: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return u;
        },
      });
      var t = i(735250),
        a = i(470079),
        r = i(481060),
        o = i(768581),
        l = i(924489),
        s = i(950854),
        c = i(491576),
        d = i(982469);
      function u(e) {
        var n, i, u, _, p;
        let {
            application: m,
            className: I,
            childrenClassName: f,
            animatesOnHover: g,
            onClick: h,
            ...C
          } = e,
          v = o.ZP.getApplicationIconURL({ id: m.id, icon: m.icon, size: 48 }),
          E = (0, c.Z)({ application: m }),
          x = null === (n = m.categories) || void 0 === n ? void 0 : n[0],
          b =
            (null !==
              (_ =
                null === (i = m.directory_entry) || void 0 === i
                  ? void 0
                  : i.guild_count) && void 0 !== _
              ? _
              : 0) > 0 || E.length > 0,
          A = a.useCallback(() => {
            h({ mutualGuilds: E });
          }, [h, E]),
          P = (0, t.jsx)(l.Z, {
            application: m,
            textVariant: "text-xs/normal",
            mutualGuilds: E,
            mutualGuildShownMax: 3,
            guildIconSize: l.x.SMALL,
            compact: !0,
          });
        return (0, t.jsxs)(s.Z, {
          className: I,
          onClick: A,
          iconSrc: v,
          header: m.name,
          subheader:
            null != x &&
            (0, t.jsx)(r.Text, {
              tag: "span",
              color: "header-secondary",
              variant: "text-xs/normal",
              children: x.name,
            }),
          animatesOnHover: g,
          ...C,
          children: [
            (null != m.description || null != f) &&
              (0, t.jsx)("div", {
                className: f,
                children: (0, t.jsx)(r.Text, {
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
            b &&
              (0, t.jsx)("div", {
                className: d.bottomGuildCountContainer,
                children: P,
              }),
          ],
        });
      }
    },
    576958: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return d;
        },
      });
      var t = i(735250);
      i(470079);
      var a = i(481060),
        r = i(463571),
        o = i(744142),
        l = i(981631),
        s = i(689938),
        c = i(563727);
      function d(e) {
        let {
          applications: n,
          className: i,
          listingClassName: o,
          title: d,
          showViewAll: _,
          onViewOne: p,
          onViewAll: m,
        } = e;
        return (0, t.jsxs)("div", {
          className: i,
          children: [
            null != d
              ? (0, t.jsxs)("div", {
                  className: c.header,
                  children: [
                    (0, t.jsx)(a.Heading, {
                      variant: "heading-lg/semibold",
                      children: d,
                    }),
                    _
                      ? (0, t.jsx)(a.Button, {
                          look: a.Button.Looks.LINK,
                          color: a.Button.Colors.LINK,
                          onClick: m,
                          children:
                            s.Z.Messages.APP_DIRECTORY_LISTING_VIEW_ALL_BUTTON,
                        })
                      : null,
                  ],
                })
              : null,
            (0, t.jsx)("ul", {
              className: c.list,
              children: n.map((e) =>
                (0, t.jsx)(
                  r.Z,
                  {
                    href: l.Z5c.APPLICATION_DIRECTORY_PROFILE(e.id),
                    children: (0, t.jsx)(u, {
                      className: o,
                      application: e,
                      onClick: (n) => {
                        let { mutualGuilds: i } = n;
                        return p({ application: e, mutualGuilds: i });
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
        return (0, t.jsx)(o.Z, { ...e });
      }
    },
    950854: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return c;
        },
      });
      var t = i(735250);
      i(470079);
      var a = i(120356),
        r = i.n(a),
        o = i(481060),
        l = i(689938),
        s = i(276199);
      function c(e) {
        let {
            className: n,
            onClick: i,
            imageSrc: a,
            iconSrc: c,
            header: d,
            headerClassName: u,
            subheaderVariant: _ = "text-sm/normal",
            subheader: p,
            children: m,
            animatesOnHover: I,
            ...f
          } = e,
          g = null != a,
          h = (0, t.jsxs)(t.Fragment, {
            children: [
              g &&
                (0, t.jsx)("div", {
                  className: s.imageContainer,
                  children: (0, t.jsx)("img", {
                    alt: "",
                    className: s.image,
                    src: a,
                  }),
                }),
              (0, t.jsxs)("div", {
                className: s.textContainer,
                children: [
                  (0, t.jsxs)("div", {
                    className: r()(s.topRowContainer),
                    children: [
                      null != c &&
                        (0, t.jsx)("img", {
                          className: s.icon,
                          alt: "",
                          "aria-hidden": !0,
                          src: c,
                          width: 48,
                          height: 48,
                        }),
                      (0, t.jsxs)("div", {
                        className: s.headerContainer,
                        children: [
                          (0, t.jsx)(o.Heading, {
                            variant: "heading-md/medium",
                            className: u,
                            children: d,
                          }),
                          null != p &&
                            (0, t.jsx)(o.Text, {
                              className: s.subheader,
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
          C = r()(n, s.container, { [s.hasImage]: g });
        return null != i
          ? (0, t.jsx)(o.ClickableContainer, {
              tag: "article",
              "aria-label":
                l.Z.Messages.APP_DIRECTORY_LISTING_CARD_BUTTON_A11Y_LABEL.format(
                  { name: d },
                ),
              onClick: i,
              className: r()(C, s.clickable, {
                [s.animatesOnHoverContainer]: I,
              }),
              focusProps: { offset: 4 },
              children: h,
            })
          : (0, t.jsx)("article", { className: C, ...f, children: h });
      }
    },
    409425: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return d;
        },
      });
      var t = i(735250);
      i(470079);
      var a = i(120356),
        r = i.n(a),
        o = i(481060),
        l = i(377171),
        s = i(689938),
        c = i(914693);
      function d(e) {
        let { className: n, ...i } = e;
        return (0, t.jsx)(o.TextBadge, {
          ...i,
          text: s.Z.Messages.APP_DIRECTORY_PARTNER,
          color: l.Z.BACKGROUND_TERTIARY,
          className: r()(n, c.partnerBadge),
        });
      }
    },
    753450: function (e, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return eP;
          },
        }),
        i(47120),
        i(315314),
        i(610138),
        i(216116),
        i(78328),
        i(815648),
        i(789020),
        i(653041);
      var t = i(735250),
        a = i(470079),
        r = i(120356),
        o = i.n(r),
        l = i(525654),
        s = i.n(l),
        c = i(302454),
        d = i.n(c),
        u = i(873546),
        _ = i(149765),
        p = i(468194),
        m = i(442837),
        I = i(692547),
        f = i(477690),
        g = i(481060),
        h = i(995648),
        C = i(445986),
        v = i(9807),
        E = i(911969),
        x = i(330726),
        b = i(782568),
        A = i(607070),
        P = i(581364),
        T = i(970321),
        R = i(283836),
        N = i(220082),
        S = i(252618),
        L = i(299206),
        O = i(241209),
        j = i(422559),
        y = i(270144),
        D = i(864843),
        Z = i(703656),
        M = i(588822),
        B = i(706454),
        k = i(314897),
        w = i(451478),
        G = i(626135),
        H = i(768581),
        F = i(572004),
        U = i(823379),
        Y = i(900849),
        W = i(674588),
        V = i(264043),
        z = i(303383),
        K = i(887706),
        q = i(738130),
        J = i(4461),
        Q = i(34674),
        X = i(576958),
        $ = i(924489),
        ee = i(125909),
        en = i(409425),
        ei = i(132871),
        et = i(147890),
        ea = i(491576),
        er = i(527564),
        eo = i(326135),
        el = i(940064),
        es = i(626004),
        ec = i(939893),
        ed = i(430913),
        eu = i(606183),
        e_ = i(272242),
        ep = i(981631),
        em = i(558921),
        eI = i(689938),
        ef = i(364658),
        eg = i(902294);
      let eh = d().parserFor(ec.Z),
        eC = d().reactFor(d().ruleOutput(ec.Z, "react")),
        ev = (0, p.Mg)(f.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
        eE = "redirect_to_support_server",
        ex = "start_application_install",
        eb = (e) =>
          ""
            .concat(location.protocol, "//")
            .concat(location.host)
            .concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(e)),
        eA = (e) => {
          if (null == e) return null;
          let n = e.match(
            /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
          );
          return null != n ? n[1] : null;
        };
      function eP(e) {
        var n, r, l, c;
        let d,
          {
            match: {
              params: {
                applicationId: p,
                section: I = e_.ApplicationDirectoryProfileSections.GENERAL,
              },
            },
          } = e,
          f = (0, ei.useApplicationDirectoryHistory)((e) => e.guildId),
          E = (0, K.Z)(),
          A = (0, m.e7)(
            [z.Z],
            () =>
              z.Z.getFetchState({ applicationId: p, guildId: f }) ===
              z.M.FETCHING,
          ),
          N = a.useRef({ applicationId: void 0, guildId: void 0 }),
          { similarApplications: ec, similarLoadId: eA } = (0, m.cj)(
            [z.Z],
            () => {
              let e = { applicationId: p, guildId: f },
                n = z.Z.getSimilarApplications(e);
              return (
                null == n
                  ? (n = z.Z.getSimilarApplications(N.current))
                  : (N.current = e),
                {
                  similarApplications: null == n ? void 0 : n.applications,
                  similarLoadId: null == n ? void 0 : n.loadId,
                }
              );
            },
          ),
          eP = a.useMemo(() => (null == ec ? void 0 : ec.slice(0, 3)), [ec]),
          eN = (0, m.e7)([V.Z], () => V.Z.getApplicationFetchState(p)),
          [eL, eO] = a.useState(void 0),
          ej = a.useCallback(
            (e) => {
              if (null != p) {
                if (e === e_.ApplicationDirectoryProfileSections.GENERAL) {
                  (0, et.replaceAppDirectoryURLWith)(
                    ep.Z5c.APPLICATION_DIRECTORY_PROFILE(p),
                  );
                  return;
                }
                (0, et.replaceAppDirectoryURLWith)(
                  ep.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(p, e),
                );
              }
            },
            [p],
          ),
          ey = (0, m.e7)([w.Z], () => w.Z.isFocused()),
          eD = (0, m.e7)([B.default], () => B.default.locale),
          eZ = a.useRef(p),
          eM = (0, m.e7)([V.Z], () => {
            let e = V.Z.getApplication(p);
            return (
              null == e
                ? (e = V.Z.getApplication(eZ.current))
                : (eZ.current = p),
              e
            );
          }),
          eB = (0, ea.Z)({ application: eM }),
          ek = (0, m.e7)([k.default], () => k.default.getSessionId());
        (0, S.Tt)({ location: null == eM ? void 0 : eM.name });
        let ew = a.useCallback(async () => {
          try {
            var e;
            let n =
              null == eM
                ? void 0
                : null === (e = eM.guild) || void 0 === e
                  ? void 0
                  : e.id;
            if (null != n) {
              (null == eM ? void 0 : eM.id) != null &&
                G.default.track(ep.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                  application_id: eM.id,
                  guild_id: n,
                });
              let e = { page: ep.ZY5.APPLICATION_DIRECTORY };
              await (0, Y.Ub)(n, e, { setsHistorySnapshot: !1 });
            }
          } catch {}
        }, [eM]);
        a.useEffect(() => {
          if (null == eM) return;
          let e = new URL(location.href);
          if (E && null != ek && "true" === e.searchParams.get(eE)) {
            e.searchParams.delete(eE);
            let n = e.pathname + e.search;
            (0, Z.dL)(n), ew();
          }
        }, [E, ew, ek, eM]);
        let eG = a.useCallback(() => {
            var e;
            null !=
              (null == eM
                ? void 0
                : null === (e = eM.guild) || void 0 === e
                  ? void 0
                  : e.id) && (E ? ew() : (0, Q.rf)({ [eE]: "true" }));
          }, [eM, E, ew]),
          eH = a.useCallback(() => {
            (0, et.replaceAppDirectoryURLWith)(
              ""
                .concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(p))
                .concat(location.search),
            );
          }, [p]);
        a.useEffect(() => {
          I === e_.ApplicationDirectoryProfileSections.GENERAL && eH();
        }, [eH, I]),
          a.useEffect(() => {
            null != p && W.i6(p);
          }, [p]),
          a.useEffect(() => {
            if ((null == eM ? void 0 : eM.directory_entry) != null) {
              let e = eM.directory_entry,
                n = null == e ? void 0 : e.popular_application_commands;
              null != n
                ? eO(
                    n.map((e) =>
                      (0, P.Z8)({
                        rootCommand: e,
                        command: e,
                        applicationId: e.application_id,
                      }),
                    ),
                  )
                : eO(void 0);
            }
          }, [eM]);
        let eF = H.ZP.getApplicationIconURL({
            id:
              null !== (l = null == eM ? void 0 : eM.id) && void 0 !== l
                ? l
                : "-1",
            icon: null == eM ? void 0 : eM.icon,
            size: ev,
          }),
          eU = (0, L.Z)({
            id:
              null !== (c = null == eM ? void 0 : eM.id) && void 0 !== c
                ? c
                : "",
            label: eI.Z.Messages.COPY_ID_APPLICATION,
          }),
          { canInstall: eY, install: eW } = (0, J.P)(eM, f),
          eV =
            null === (n = (0, ei.getPreviousView)()) || void 0 === n
              ? void 0
              : n.type;
        a.useEffect(() => {
          (null == eM ? void 0 : eM.id) != null &&
            G.default.track(ep.rMx.APP_DIRECTORY_PAGE_VIEWED, {
              current_page: "product",
              previous_page: eV,
              application_id: eM.id,
              guild_id: f,
              shown_mutual_guilds_count: eB.length,
              profile_section: I,
              referrer: document.referrer,
            });
        }, [null == eM ? void 0 : eM.id, f, eB]);
        let ez = a.useMemo(() => {
            var e;
            let n =
              null == eM
                ? void 0
                : null === (e = eM.install_params) || void 0 === e
                  ? void 0
                  : e.permissions;
            if (null != n) return j.VY.filter((e) => _.e$(_.vB(n), e));
          }, [
            null == eM
              ? void 0
              : null === (r = eM.install_params) || void 0 === r
                ? void 0
                : r.permissions,
          ]),
          eK = a.useCallback(
            (e) => {
              ej(e),
                (null == eM ? void 0 : eM.id) != null &&
                  G.default.track(ep.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                    application_id: eM.id,
                    guild_id: f,
                    tab_name: e,
                  });
            },
            [null == eM ? void 0 : eM.id, f, ej],
          ),
          eq = a.useMemo(() => {
            var e, n, i;
            return null !==
              (i = (
                null !==
                  (n =
                    null == eM
                      ? void 0
                      : null === (e = eM.directory_entry) || void 0 === e
                        ? void 0
                        : e.carousel_items) && void 0 !== n
                  ? n
                  : []
              )
                .map(eT)
                .filter(U.lm)) && void 0 !== i
              ? i
              : [];
          }, [eM]),
          eJ = a.useCallback(
            (e, n) => {
              if (e.type === ep.s9s.IMG) {
                let n = eq.filter((e) => e.type === ep.s9s.IMG),
                  a = n.findIndex((n) => n === e);
                if (a < 0) return;
                let r = n.map((e) => ({
                  src: (0, C.Q)(e.src),
                  width: e.width,
                  height: e.height,
                }));
                (0, g.openModalLazy)(async () => {
                  let { default: e } = await i
                    .e("41814")
                    .then(i.bind(i, 895023));
                  return (n) => {
                    let { ...i } = n;
                    return (0, t.jsx)(e, {
                      ...i,
                      items: r,
                      startingIndex: a,
                      modalCarouselItemClassName: ef.appSlide,
                    });
                  };
                });
              }
            },
            [eq],
          ),
          eQ = a.useCallback(
            (e) => {
              (null == eM ? void 0 : eM.id) != null &&
                G.default.track(ep.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                  current_page: "product",
                  category: e.name,
                  category_id: e.id,
                  application_id: eM.id,
                  guild_id: f,
                }),
                (0, et.goToCategory)({ categoryId: e.id });
            },
            [eM, f],
          );
        a.useEffect(() => {
          if (null != p) W.T4({ applicationId: p, guildId: f });
        }, [p, f]);
        let eX = a.useCallback(
            (e) => {
              let { application: n, mutualGuilds: i } = e;
              (null == eM ? void 0 : eM.id) != null &&
                G.default.track(ep.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                  current_page: "product",
                  application_id: eM.id,
                  suggested_application_id: n.id,
                  load_id: eA,
                  guild_id: f,
                  shown_mutual_guilds_count: i.length,
                }),
                (0, et.goToApplication)({ applicationId: n.id });
            },
            [null == eM ? void 0 : eM.id, eA, f],
          ),
          e$ = a.useCallback(() => {
            null != eM &&
              (0, b.Z)((0, eo.G)({ id: eM.id, name: eM.name, locale: eD }));
          }, [eD, eM]),
          e0 = a.useCallback(
            (e) =>
              (0, t.jsxs)(g.Menu, {
                navId: "application-directory-profile",
                "aria-label":
                  eI.Z.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
                onClose: e,
                onSelect: void 0,
                children: [
                  (0, t.jsx)(g.MenuGroup, {
                    children: (0, t.jsx)(g.MenuItem, {
                      id: "report",
                      label: eI.Z.Messages.REPORT_APP,
                      color: "danger",
                      action: e$,
                    }),
                  }),
                  null != eU ? (0, t.jsx)(g.MenuGroup, { children: eU }) : null,
                ],
              }),
            [eU, e$],
          ),
          [e1, e6] = (0, x.Z)(!1, 1e3),
          e8 = a.useCallback(() => {
            if (null != eM)
              G.default.track(ep.rMx.APP_SHARE_BUTTON_CLICKED, {
                source: "product_page",
                application_id: eM.id,
                guild_id: f,
              }),
                (0, F.JG)(eb(eM.id)),
                e6(!0);
          }, [eM, e6, f]);
        a.useEffect(() => {
          let e = new URL(location.href);
          if (E && "true" === e.searchParams.get(ex)) {
            e.searchParams.delete(ex);
            let n = e.pathname + e.search;
            (0, Z.dL)(n), eW("product_page");
          }
        }, [E, eW]);
        let e5 = a.useCallback(() => {
            null != eM &&
              (E
                ? eW("product_page")
                : (G.default.track(ep.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: p,
                    guild_id: f,
                    auth_type:
                      null != eM.custom_install_url ? "custom_url" : "in_app",
                    source: "product_page",
                    device_platform: u.tq ? "mobile_web" : "desktop_web",
                  }),
                  (0, Q.rf)({ [ex]: "true" })));
          }, [eM, E, eW, p, f]),
          { applicationSubscriptionListingsShown: e3 } = (0, y.ZP)({
            applicationId: null == eM ? void 0 : eM.id,
            groupListingId: null == eM ? void 0 : eM.primary_sku_id,
            guildId: f,
          }),
          e4 = (null == eM ? void 0 : eM.id) === em.g,
          [e2, e9] = a.useState(!1),
          [e7, ne] = a.useState(!1),
          [nn, ni] = a.useState(!0),
          nt = (e) => {
            null != e && e9(e.scrollHeight > e.clientHeight);
          },
          na = null != ez && ez.length > 0,
          nr = (null == eM ? void 0 : eM.flags) != null,
          no = (0, T.R)(null != p ? p : "");
        a.useEffect(() => {
          no && null != p && (0, R.Z)(p);
        }, [no, p]);
        let nl = a.useMemo(() => {
            let e = [],
              n = !0;
            switch (I) {
              case e_.ApplicationDirectoryProfileSections.GENERAL: {
                var i, a;
                let r =
                  null == eM
                    ? void 0
                    : null === (i = eM.directory_entry) || void 0 === i
                      ? void 0
                      : i.detailed_description;
                null != r && r.length > 0
                  ? (e.push(
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(g.Heading, {
                            className: ef.sectionHeader,
                            variant: "heading-md/semibold",
                            children:
                              eI.Z.Messages
                                .APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING,
                          }),
                          (0, t.jsx)("div", {
                            ref: nt,
                            className: o()({
                              [ef.descriptionClamp]: !e7,
                              [ef.descriptionClampSafari]:
                                !e7 && "Safari" === s().name,
                            }),
                            children: (0, t.jsx)(O.Z, {
                              className: ef.detailedDescription,
                              parser: eh,
                              output: eC,
                              state: { allowLinks: !0 },
                              children: r,
                            }),
                          }),
                          (e2 || e7) &&
                            (0, t.jsx)(eR, {
                              isViewAll: e7,
                              onToggle: () => {
                                ne((e) => !e);
                              },
                            }),
                        ],
                      }),
                    ),
                    (n = !1))
                  : (null == eM
                        ? void 0
                        : null === (a = eM.directory_entry) || void 0 === a
                          ? void 0
                          : a.short_description) !== void 0
                    ? e.push(
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(g.Heading, {
                              className: ef.sectionHeader,
                              variant: "heading-md/semibold",
                              children:
                                eI.Z.Messages
                                  .APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING,
                            }),
                            (0, t.jsx)("span", {
                              children: eM.directory_entry.short_description,
                            }),
                          ],
                        }),
                      )
                    : (null == eM ? void 0 : eM.description) != null &&
                      e.push(
                        (0, t.jsx)(M.Z, {
                          className: ef.description,
                          userBio: eM.description,
                        }),
                      ),
                  null != eL &&
                    eL.length > 0 &&
                    (e.push(
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(g.Heading, {
                            className: ef.sectionHeader,
                            variant: "heading-md/semibold",
                            children:
                              eI.Z.Messages
                                .APP_DIRECTORY_PROFILE_COMMANDS_HEADING,
                          }),
                          (0, t.jsx)(el.Z, {
                            className: ef.commandList,
                            commands: eL,
                          }),
                        ],
                      }),
                    ),
                    (n = !0));
                break;
              }
              case e_.ApplicationDirectoryProfileSections.IMAGES: {
                if (0 === eq.length) break;
                let n = (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("img", {
                      className: ef.errorImage,
                      src: eg,
                      "aria-hidden": !0,
                      alt: "",
                    }),
                    (0, t.jsx)(g.Heading, {
                      variant: "heading-xl/semibold",
                      children: eI.Z.Messages.ERRORS_IMAGE_NOT_FOUND,
                    }),
                  ],
                });
                eq.forEach((e, n) => {
                  null != eM
                    ? (e.alt =
                        eI.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format(
                          {
                            index: n + 1,
                            totalImages: eq.length,
                            name: eM.name,
                          },
                        ))
                    : (e.alt =
                        eI.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT);
                }),
                  e.push(
                    (0, t.jsx)(v.Z, {
                      className: ef.carousel,
                      themedPagination: !0,
                      items: eq,
                      autoplayInterval: 8e3,
                      paused: !ey,
                      videoAutoPlay: !0,
                      onCurrentItemClick: eJ,
                      errorComponent: n,
                      onImageLoad: (e) => {
                        let { src: n, loadTimeMs: i } = e;
                        null != i &&
                          null != eM &&
                          G.default.track(
                            ep.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED,
                            { application_id: eM.id, load_time_ms: i, src: n },
                          );
                      },
                    }),
                  );
                break;
              }
              case e_.ApplicationDirectoryProfileSections.STORE:
                no &&
                  null != p &&
                  e.push(
                    (0, t.jsx)(er.M, {
                      appId: p,
                      guildId: null != f ? f : void 0,
                    }),
                  );
                break;
              case e_.ApplicationDirectoryProfileSections.PREMIUM:
                e3 &&
                  (null == eM ? void 0 : eM.primary_sku_id) != null &&
                  e.push(
                    (0, t.jsx)(D.Z, {
                      applicationId: eM.id,
                      applicationPrimarySkuId:
                        null == eM ? void 0 : eM.primary_sku_id,
                      analyticsLocation: ep.Sbl.APP_DIRECTORY_PROFILE,
                      forcesTransitionToGuild: !0,
                    }),
                  );
                break;
              case e_.ApplicationDirectoryProfileSections.PRIVACY:
                na &&
                  e.push(
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(g.Heading, {
                          className: ef.sectionHeader,
                          variant: "heading-md/semibold",
                          children:
                            eI.Z.Messages
                              .APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING,
                        }),
                        (0, t.jsx)(h.Z, {
                          className: ef.commandList,
                          grantedPermissions: ez,
                          grantedPermissionsHeader:
                            eI.Z.Messages
                              .APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING,
                        }),
                      ],
                    }),
                  ),
                  nr &&
                    e.push(
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(g.Heading, {
                            className: ef.sectionHeader,
                            variant: "heading-md/semibold",
                            children:
                              eI.Z.Messages
                                .APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING,
                          }),
                          (0, t.jsx)(es.Z, { application: eM }),
                        ],
                      }),
                    );
            }
            return (
              ni(n),
              0 === e.length &&
                I !== e_.ApplicationDirectoryProfileSections.GENERAL &&
                null != eM &&
                eH(),
              e.map((e, n) =>
                (0, t.jsx)("div", { className: ef.section, children: e }, n),
              )
            );
          }, [I, eH, eM, eL, e7, e2, eq, ey, eJ, no, p, f, e3, na, nr, ez]),
          ns = a.useMemo(() => {
            let e = [
              {
                name: e_.ApplicationDirectoryProfileSections.GENERAL,
                text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL,
                Icon: g.AppsIcon,
              },
            ];
            return (
              eq.length > 0 &&
                e.push({
                  name: e_.ApplicationDirectoryProfileSections.IMAGES,
                  text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES,
                  Icon: g.ImagesIcon,
                }),
              no &&
                e.push({
                  name: e_.ApplicationDirectoryProfileSections.STORE,
                  text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
                  Icon: g.ShopSparkleIcon,
                }),
              e3 &&
                !no &&
                e.push({
                  name: e_.ApplicationDirectoryProfileSections.PREMIUM,
                  text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PREMIUM,
                  Icon: g.ShopSparkleIcon,
                }),
              (na || nr) &&
                e.push({
                  name: e_.ApplicationDirectoryProfileSections.PRIVACY,
                  text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
                  Icon: g.PrivacyAndSafetyIcon,
                }),
              e
            );
          }, [eq.length, e3, na, nr, no]);
        return (
          (d =
            null == eM
              ? null == eN || eN === V.M.FETCHING
                ? (0, t.jsx)(ee.Z, { loading: eN === V.M.FETCHING })
                : (0, t.jsx)("div", {
                    className: ef.__invalid_page,
                    children: (0, t.jsxs)("div", {
                      className: ef.emptyContainer,
                      children: [
                        (0, t.jsx)("img", {
                          className: ef.emptyImage,
                          src: eg,
                          alt: "",
                        }),
                        (0, t.jsx)(g.Heading, {
                          variant: "heading-xl/semibold",
                          children:
                            eI.Z.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING,
                        }),
                      ],
                    }),
                  })
              : (0, t.jsxs)(ee.Z, {
                  loading: eN === V.M.FETCHING,
                  children: [
                    (0, t.jsx)(eS, { app: eM, iconSrc: eF }),
                    (0, t.jsxs)("div", {
                      className: ef.__invalid_page,
                      children: [
                        (0, t.jsxs)("div", {
                          className: ef.header,
                          children: [
                            (0, t.jsxs)("div", {
                              className: ef.headerSidebar,
                              children: [
                                (0, t.jsx)("img", {
                                  className: ef.headerIcon,
                                  alt: "",
                                  "aria-hidden": !0,
                                  src: eF,
                                  width: ev,
                                  height: ev,
                                }),
                                (0, t.jsx)($.Z, {
                                  application: eM,
                                  mutualGuilds: eB,
                                  mutualGuildShownMax: 3,
                                  compact: !0,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: ef.headerContent,
                              children: [
                                (0, t.jsxs)("div", {
                                  className: ef.headerNameAndButtons,
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className: ef.headerNameAndIcon,
                                      children: [
                                        (0, t.jsx)(g.Heading, {
                                          className: ef.name,
                                          variant: "heading-xxl/semibold",
                                          children: eM.name,
                                        }),
                                        (no || e3) &&
                                          (0, t.jsx)(g.Tooltip, {
                                            tooltipClassName:
                                              ef.premiumIconTooltip,
                                            text: eI.Z.Messages
                                              .APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                            children: (e) =>
                                              (0, t.jsx)("img", {
                                                ...e,
                                                alt: eI.Z.Messages
                                                  .APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                className: ef.premiumIcon,
                                                src: i(744050),
                                              }),
                                          }),
                                        e4 &&
                                          (0, t.jsx)(en.Z, {
                                            className: ef.partnerBadge,
                                          }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: ef.buttons,
                                      children: [
                                        (0, t.jsx)(g.Button, {
                                          onClick: e8,
                                          color: g.Button.Colors.PRIMARY,
                                          children: e1
                                            ? eI.Z.Messages
                                                .INTEGRATIONS_WEBHOOK_COPIED_URL
                                            : eI.Z.Messages
                                                .APP_DIRECTORY_PROFILE_SHARE_BUTTON,
                                        }),
                                        (0, t.jsx)(g.Button, {
                                          color: g.Button.Colors.BRAND,
                                          onClick: e5,
                                          disabled: !eY,
                                          children:
                                            eI.Z.Messages
                                              .APPLICATION_ADD_BUTTON,
                                        }),
                                        (0, t.jsx)(g.Popout, {
                                          renderPopout: (e) => {
                                            let { closePopout: n } = e;
                                            return e0(n);
                                          },
                                          position: "left",
                                          align: "top",
                                          animation: g.Popout.Animation.NONE,
                                          children: (e) =>
                                            (0, t.jsx)(g.Clickable, {
                                              className: ef.overflow,
                                              ...e,
                                              children: (0, t.jsx)(
                                                g.MoreHorizontalIcon,
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
                                (0, t.jsx)(eu.Z, {
                                  activeSection: I,
                                  setSection: eK,
                                  sections: ns,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: ef.contentContainer,
                          children: [
                            (0, t.jsxs)("div", {
                              className: ef.content,
                              children: [
                                nl,
                                null != eP && eP.length > 0
                                  ? (0, t.jsxs)(t.Fragment, {
                                      children: [
                                        nn &&
                                          (0, t.jsx)("div", {
                                            className: ef.separator,
                                          }),
                                        (0, t.jsxs)("div", {
                                          className: ef.section,
                                          children: [
                                            (0, t.jsx)(g.Heading, {
                                              className: ef.relatedHeader,
                                              variant: "eyebrow",
                                              children:
                                                eI.Z.Messages
                                                  .APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING,
                                            }),
                                            (0, t.jsx)(ee.Z, {
                                              loading: A,
                                              children: (0, t.jsx)(X.Z, {
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
                            (0, t.jsx)(ed.Z, {
                              className: ef.sidebar,
                              application: eM,
                              guildId: f,
                              onViewCategory: eQ,
                              onClickGuildWidget: eG,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })),
          (0, t.jsx)(q.Z, { children: d })
        );
      }
      function eT(e) {
        switch (e.type) {
          case E.ee.MEDIA_PROXY:
            var n;
            let i = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
            return { type: ep.s9s.IMG, width: 0, height: 0, src: i };
          case E.ee.YOUTUBE:
            let t = eA(e.url);
            if (null != t)
              return { type: ep.s9s.YOUTUBE_VIDEO, youtubeVideoId: t };
        }
        return console.warn("Unsupported carousel item", e), null;
      }
      let eR = (e) => {
          let n,
            { onToggle: i, isViewAll: a } = e;
          return (
            (n = a
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(g.Text, {
                      className: ef.showMoreButtonText,
                      variant: "eyebrow",
                      children: eI.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS,
                    }),
                    (0, t.jsx)(g.ChevronSmallUpIcon, {
                      size: "md",
                      color: "currentColor",
                      className: ef.showMoreButtonIcon,
                    }),
                  ],
                })
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(g.Text, {
                      className: ef.showMoreButtonText,
                      variant: "eyebrow",
                      children: eI.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE,
                    }),
                    (0, t.jsx)(g.ChevronSmallDownIcon, {
                      size: "md",
                      color: "currentColor",
                      className: ef.showMoreButtonIcon,
                    }),
                  ],
                })),
            (0, t.jsx)(eN, {
              children: (0, t.jsx)(g.Button, {
                look: g.Button.Looks.BLANK,
                color: g.Button.Colors.TRANSPARENT,
                size: g.Button.Sizes.NONE,
                className: ef.showMoreButton,
                innerClassName: ef.showMoreButtonInner,
                onClick: i,
                children: n,
              }),
            })
          );
        },
        eN = (e) => {
          let { className: n, contentClassName: i, children: a } = e;
          return (0, t.jsxs)("div", {
            className: o()([ef.dividerContainer, n]),
            children: [
              (0, t.jsx)("div", { className: ef.divider }),
              null != a
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("div", {
                        className: o()(ef.contentDivider, i),
                        children: a,
                      }),
                      (0, t.jsx)("div", { className: ef.divider }),
                    ],
                  })
                : null,
            ],
          });
        };
      function eS(e) {
        let { app: n, iconSrc: i } = e,
          r = (0, N.ZP)(i, I.Z.unsafe_rawColors.PRIMARY_800.css),
          { bot: o } = n,
          l = (0, m.e7)([A.Z], () => A.Z.useReducedMotion),
          s = a.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != o) {
              let n = (0, H.aN)({
                id: o.id,
                banner: o.banner,
                size: 1024,
                canAnimate: !1,
              });
              if (
                (null != n &&
                  ((e["--custom-background-static"] = "url(".concat(n)),
                  (e.height = "212px")),
                !l)
              ) {
                let n = (0, H.aN)({
                  id: o.id,
                  banner: o.banner,
                  size: 1024,
                  canAnimate: !0,
                });
                null != n &&
                  (e["--custom-background-animated"] = "url(".concat(n));
              }
            }
            return e;
          }, [r, o, l]);
        return (0, t.jsx)("div", { style: s, className: ef.headerBanner });
      }
    },
    527564: function (e, n, i) {
      i.d(n, {
        M: function () {
          return x;
        },
      });
      var t = i(735250),
        a = i(470079),
        r = i(120356),
        o = i.n(r),
        l = i(442837),
        s = i(481060),
        c = i(765717),
        d = i(283836),
        u = i(507608),
        _ = i(147496),
        p = i(519896),
        m = i(270144),
        I = i(171246),
        f = i(55563),
        g = i(147890),
        h = i(272242),
        C = i(981631),
        v = i(689938),
        E = i(696672);
      function x(e) {
        let { appId: n, guildId: i } = e,
          { subscriptionGroupListing: a } = (0, m.F5)(n, i),
          { subs: r, otps: l } = (0, d.q)(n, i);
        return (0, t.jsxs)(t.Fragment, {
          children: [
            r.length > 0 &&
              null != a &&
              (0, t.jsxs)("div", {
                className: E.productSection,
                children: [
                  (0, t.jsx)(s.Heading, {
                    variant: "heading-lg/semibold",
                    children: v.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
                  }),
                  (0, t.jsx)("div", {
                    className: o()(E.productList, E.subList),
                    children: r.map((e) =>
                      (0, t.jsx)(
                        u.zz,
                        {
                          appId: n,
                          groupListingId: a.id,
                          listing: e,
                          groupListingType: (0, I.KW)(a.sku_flags)
                            ? "user"
                            : "guild",
                          onDetails: () => {
                            (0, g.goToApplicationStoreSku)({
                              applicationId: n,
                              skuId: e.id,
                            });
                          },
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
            l.length > 0 &&
              (0, t.jsxs)("div", {
                className: E.productSection,
                children: [
                  (0, t.jsx)(s.Heading, {
                    variant: "heading-lg/semibold",
                    children: v.Z.Messages.STOREFRONT_APP_PRODUCTS,
                  }),
                  (0, t.jsx)("div", {
                    className: o()(E.productList, E.itemList),
                    children: l.map((e) =>
                      (0, t.jsx)(
                        u.hd,
                        {
                          skuId: e.sku.id,
                          appId: n,
                          onDetails: () => {
                            (0, g.goToApplicationStoreSku)({
                              applicationId: n,
                              skuId: e.sku.id,
                            });
                          },
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
            (0, t.jsx)(c.Z, {
              path: C.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                ":applicationId",
                ":skuId",
              ),
              exact: !0,
              render: (e) =>
                (0, t.jsx)(b, {
                  ...e,
                  subscriptionGroupListing: null != a ? a : void 0,
                }),
            }),
          ],
        });
      }
      function b(e) {
        let {
            match: {
              params: { applicationId: n, skuId: i },
            },
            subscriptionGroupListing: r,
          } = e,
          o = (0, l.e7)([f.Z], () => f.Z.get(i), [i]),
          c = a.useId();
        return (
          a.useLayoutEffect(() => {
            if (null != o)
              switch (o.type) {
                case C.epS.CONSUMABLE:
                case C.epS.DURABLE:
                  return (function (e, n, i) {
                    (0, s.openModal)(
                      (e) => {
                        let { onClose: a, transitionState: r } = e;
                        return (0, t.jsx)(_.ItemDetailsModal, {
                          appId: n,
                          skuId: i,
                          onClose: a,
                          transitionState: r,
                        });
                      },
                      {
                        modalKey: e,
                        onCloseCallback() {
                          !A() &&
                            (0, g.goToApplicationSection)({
                              applicationId: n,
                              section:
                                h.ApplicationDirectoryProfileSections.STORE,
                            });
                        },
                      },
                    );
                  })(c, n, i);
                case C.epS.SUBSCRIPTION: {
                  var e;
                  if (null == r) return;
                  let a =
                    null === (e = r.subscription_listings) || void 0 === e
                      ? void 0
                      : e.find((e) => e.id === i);
                  if (null == a) return;
                  return (function (e, n, i, a) {
                    (0, s.openModal)(
                      (e) => {
                        let { onClose: r, transitionState: o } = e;
                        return (0, t.jsx)(p.SubscriptionDetailsModal, {
                          appId: n,
                          groupListingId: i.id,
                          groupListingType: (0, I.KW)(i.sku_flags)
                            ? "user"
                            : "guild",
                          skuId: a.id,
                          onClose: r,
                          transitionState: o,
                        });
                      },
                      {
                        modalKey: e,
                        onCloseCallback() {
                          !A() &&
                            (0, g.goToApplicationSection)({
                              applicationId: n,
                              section:
                                h.ApplicationDirectoryProfileSections.STORE,
                            });
                        },
                      },
                    );
                  })(c, n, r, a);
                }
              }
          }, [n, c, o, i, r]),
          a.useLayoutEffect(
            () => () => {
              (0, s.closeModal)(c);
            },
            [c],
          ),
          null
        );
      }
      function A() {
        return window.location.pathname.startsWith("/login");
      }
    },
    940064: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return c;
        },
      });
      var t = i(735250);
      i(470079);
      var a = i(120356),
        r = i.n(a),
        o = i(481060),
        l = i(665692),
        s = i(856773);
      function c(e) {
        let { commands: n, className: i } = e;
        return (0, t.jsx)("div", {
          className: r()(s.list, i),
          children: n.map((e) =>
            (0, t.jsxs)(
              "div",
              {
                className: s.row,
                children: [
                  (0, t.jsxs)(o.Text, {
                    className: s.commandName,
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: [l.GI, e.displayName],
                  }),
                  (0, t.jsx)(o.Text, {
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
    626004: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return f;
        },
      }),
        i(789020);
      var t = i(735250),
        a = i(470079),
        r = i(120356),
        o = i.n(r),
        l = i(481060),
        s = i(860719),
        c = i(63063),
        d = i(49012),
        u = i(981631),
        _ = i(689938),
        p = i(121281);
      let m = c.Z.getArticleURL(u.BhN.BOT_DATA_ACCESS);
      function I(e) {
        let { icon: n, heading: i, body: a } = e;
        return (0, t.jsxs)("li", {
          className: p.intentContainer,
          children: [
            (0, t.jsx)("div", {
              children: (0, t.jsx)(n, { color: "currentColor", size: "md" }),
            }),
            (0, t.jsxs)("div", {
              className: p.intentTextContainer,
              children: [
                (0, t.jsx)("div", {
                  children: (0, t.jsx)(l.Heading, {
                    variant: "eyebrow",
                    color: "header-secondary",
                    children: i,
                  }),
                }),
                (0, t.jsx)("div", {
                  className: p.intentBody,
                  children: (0, t.jsx)(l.Text, {
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
        let { application: n } = e,
          {
            hasMessageContent: i,
            hasGuildPresences: r,
            hasGuildMembers: c,
            hasIntents: u,
          } = (0, s.w)({ flags: null == n ? void 0 : n.flags }),
          f = a.useCallback(() => {
            (null == n ? void 0 : n.privacy_policy_url) != null &&
              (0, d.q)({ href: n.privacy_policy_url });
          }, [null == n ? void 0 : n.privacy_policy_url]);
        return (0, t.jsxs)(t.Fragment, {
          children: [
            u &&
              (0, t.jsx)("div", {
                className: p.intentsListHeading,
                children: (0, t.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children:
                    _.Z.Messages
                      .APP_DIRECTORY_PROFILE_DATA_ACCESS_INTENTS_LIST_HEADING,
                }),
              }),
            (0, t.jsxs)("div", {
              className: p.intentsContainer,
              children: [
                u &&
                  (0, t.jsxs)("ul", {
                    className: p.intentsList,
                    children: [
                      i &&
                        (0, t.jsx)(I, {
                          icon: l.ChatIcon,
                          heading:
                            _.Z.Messages
                              .APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_HEADING,
                          body: _.Z.Messages
                            .APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_BODY,
                        }),
                      r &&
                        (0, t.jsx)(I, {
                          icon: l.UserCircleStatusIcon,
                          heading:
                            _.Z.Messages
                              .APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_HEADING,
                          body: _.Z.Messages
                            .APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_BODY,
                        }),
                      c &&
                        (0, t.jsx)(I, {
                          icon: l.GroupIcon,
                          heading:
                            _.Z.Messages
                              .APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_HEADING,
                          body: _.Z.Messages
                            .APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_BODY,
                        }),
                    ],
                  }),
                (0, t.jsxs)("div", {
                  className: o()({ [p.hasSeparator]: u }),
                  children: [
                    (0, t.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: _.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
                        helpCenterUrl: m,
                      }),
                    }),
                    (null == n ? void 0 : n.privacy_policy_url) != null &&
                      (0, t.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        className: p.privacyPolicy,
                        children:
                          _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_PRIVACY_POLICY_V2.format(
                            { onClick: f },
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
    214912: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return C;
        },
      });
      var t = i(735250);
      i(470079);
      var a = i(120356),
        r = i.n(a),
        o = i(481060),
        l = i(410030),
        s = i(686546),
        c = i(565138),
        d = i(372769),
        u = i(134432),
        _ = i(601964),
        p = i(768581),
        m = i(981631),
        I = i(689938),
        f = i(936404),
        g = i(129512),
        h = i(330065);
      function C(e) {
        let { guild: n, className: i, onClick: a } = e,
          C = (0, l.ZP)(),
          v = new _.ZP({ name: n.name, icon: n.icon }),
          E = p.ZP.getGuildDiscoverySplashURL({
            id: n.id,
            splash: n.discovery_splash,
            size: 192 * (0, u.x_)(),
          }),
          x =
            null != E
              ? E
              : (function (e) {
                  switch (e) {
                    case m.BRd.DARK:
                      return g;
                    case m.BRd.LIGHT:
                      return h;
                  }
                })(C),
          b = p.ZP.getGuildIconURL({ id: n.id, icon: n.icon, size: 50 });
        return (0, t.jsxs)(o.Clickable, {
          className: r()(f.card, i),
          onClick: a,
          "aria-label": I.Z.Messages.APP_DIRECTORY_JOIN_SERVER_LABEL,
          children: [
            (0, t.jsxs)("div", {
              className: f.cardHeader,
              children: [
                (0, t.jsx)("img", {
                  src: x,
                  alt: "",
                  className: f.splashImage,
                }),
                (0, t.jsx)("div", {
                  className: f.guildIcon,
                  children: (0, t.jsx)(s.ZP, {
                    mask: s.ZP.Masks.AVATAR_DEFAULT,
                    width: 58,
                    height: 58,
                    children: (0, t.jsx)("div", {
                      className: f.iconMask,
                      children: (0, t.jsx)(c.Z, {
                        className: f.__invalid_icon,
                        iconSrc: b,
                        guild: v,
                        size: c.Z.Sizes.LARGE,
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: f.cardDetails,
              children: [
                (0, t.jsxs)("div", {
                  className: f.guildNameWrapper,
                  children: [
                    (0, t.jsx)(d.Z, {
                      className: f.guildBadge,
                      guild: n,
                      tooltipColor: o.Tooltip.Colors.PRIMARY,
                    }),
                    (0, t.jsx)(o.Heading, {
                      variant: "heading-md/semibold",
                      className: f.guildName,
                      children: n.name,
                    }),
                  ],
                }),
                (0, t.jsx)(o.Text, {
                  className: f.guildDescription,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  lineClamp: 2,
                  children: n.description,
                }),
                (0, t.jsx)("div", {
                  className: f.memberInfo,
                  children: (0, t.jsxs)("div", {
                    className: f.memberCountWrapper,
                    children: [
                      (0, t.jsx)(o.UserIcon, {
                        color: "currentColor",
                        className: f.memberCountIcon,
                        size: "xs",
                      }),
                      (0, t.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children:
                          I.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
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
    939893: function (e, n, i) {
      var t = i(735250);
      i(470079);
      var a = i(302454),
        r = i.n(a),
        o = i(481060),
        l = i(447543),
        s = i(15470),
        c = i(960904),
        d = i(830121),
        u = i(746878),
        _ = i(241209);
      let p = /^discord.gg\/[a-zA-Z0-9-]+/,
        m = {
          ..._.Z.rules,
          heading: { ...s.i.heading },
          image: { ...r().defaultRules.image },
          inviteLink: {
            order: _.Z.rules.link.order + 1,
            match: (e, n) => (n.inline ? p.exec(e) : null),
            parse: (e, n, i) => {
              let t = (0, d.zO)(e[0]);
              return null == t || t.type !== c.g.INVITE
                ? { type: "text", content: e[0] }
                : {
                    type: "inviteLink",
                    content: [{ type: "text", content: e[0] }],
                    onClick: () => {
                      var e;
                      l.Z.acceptInviteAndTransitionToInviteChannel({
                        inviteKey: t.code,
                        context: { location: "Application Directory" },
                      }),
                        null === (e = i.closeModal) ||
                          void 0 === e ||
                          e.call(i);
                    },
                  };
            },
            react: (e, n, i) =>
              (0, t.jsx)(
                o.Anchor,
                {
                  onClick: (n) => {
                    n.preventDefault(), e.onClick();
                  },
                  children: (0, u.S)(e, n, i),
                },
                i.key,
              ),
          },
        };
      n.Z = m;
    },
    430913: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return b;
        },
      }),
        i(47120),
        i(653041),
        i(610138),
        i(216116),
        i(78328),
        i(815648);
      var t = i(735250),
        a = i(470079),
        r = i(120356),
        o = i.n(r),
        l = i(780384),
        s = i(481060),
        c = i(794295),
        d = i(410030),
        u = i(726542),
        _ = i(626135),
        p = i(463571),
        m = i(887706),
        I = i(214912),
        f = i(290247),
        g = i(981631),
        h = i(689938),
        C = i(200682);
      let v = h.Z.getAvailableLocales();
      function E(e) {
        var n, i, a;
        let { onClick: r, url: o, children: c } = e,
          _ = (0, d.ZP)(),
          p = u.Z.getByUrl(o),
          m = (0, l.wj)(_)
            ? null == p
              ? void 0
              : null === (n = p.icon) || void 0 === n
                ? void 0
                : n.darkSVG
            : null == p
              ? void 0
              : null === (i = p.icon) || void 0 === i
                ? void 0
                : i.lightSVG;
        return (0, t.jsx)(x, {
          icon: void 0 === m ? s.LinkIcon : void 0,
          imageSrc: m,
          onClick: r,
          url: o,
          type:
            null !== (a = null == p ? void 0 : p.name) && void 0 !== a
              ? a
              : "website",
          children: c,
        });
      }
      function x(e) {
        let {
            icon: n,
            imageSrc: i,
            iconColor: a,
            url: r,
            type: l,
            children: d,
            onClick: u,
          } = e,
          _ = (0, m.Z)(),
          p = null;
        null != n
          ? (p = (0, t.jsx)(n, {
              className: C.listIcon,
              color: null != a ? a : "currentColor",
              width: 20,
              height: 20,
              size: "custom",
            }))
          : null != i &&
            (p = (0, t.jsx)("img", {
              className: C.listImage,
              src: i,
              alt: "",
            }));
        let I = (0, t.jsxs)(t.Fragment, {
          children: [
            p,
            (0, t.jsx)(s.Text, {
              className: C.listText,
              variant: "text-md/normal",
              selectable: !0,
              children: d,
            }),
          ],
        });
        return (0, t.jsx)(c.Z, {
          href: r,
          className: o()(C.listItem, C.linkItem),
          onClick: () => (u(r, l), !1),
          trusted: !_,
          useDefaultUnderlineStyles: !1,
          children: I,
        });
      }
      function b(e) {
        var n, i, r;
        let {
            application: l,
            guildId: c,
            className: d,
            onViewCategory: u,
            onClickGuildWidget: m,
          } = e,
          [b, A] = a.useState(null),
          P = [],
          T =
            null !==
              (i =
                null == l
                  ? void 0
                  : null === (n = l.directory_entry) || void 0 === n
                    ? void 0
                    : n.external_urls) && void 0 !== i
              ? i
              : [];
        a.useEffect(() => {
          var e;
          if (
            (null === (e = l.directory_entry) || void 0 === e
              ? void 0
              : e.supported_locales) !== void 0
          ) {
            let e = new Set(l.directory_entry.supported_locales);
            A(v.filter((n) => e.has(n.value)).map((e) => e.localizedName));
          }
        }, [l.directory_entry]);
        let R = (e, n) => {
          _.default.track(
            g.rMx.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED,
            { application_id: l.id, guild_id: c, type: n, url: e },
          );
        };
        return (
          null != l.categories &&
            l.categories.length > 0 &&
            P.push(
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(s.Heading, {
                    className: C.sectionHeader,
                    variant: "eyebrow",
                    children:
                      h.Z.Messages.APP_DIRECTORY_PROFILE_CATEGORIES_HEADING,
                  }),
                  (0, t.jsx)("div", {
                    className: C.categories,
                    children: (null !== (r = l.categories) && void 0 !== r
                      ? r
                      : []
                    ).map((e) => {
                      let n = new URLSearchParams();
                      return (
                        n.set("category_id", e.id.toString()),
                        (0, t.jsx)(
                          p.Z,
                          {
                            href: ""
                              .concat(g.Z5c.APPLICATION_DIRECTORY_SEARCH, "?")
                              .concat(n),
                            children: (0, t.jsx)(s.Clickable, {
                              className: C.category,
                              onClick: () => u(e),
                              children: (0, t.jsx)(s.Text, {
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
          null != b &&
            b.length > 0 &&
            P.push(
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(s.Heading, {
                    className: C.sectionHeader,
                    variant: "eyebrow",
                    children:
                      h.Z.Messages.APP_DIRECTORY_PROFILE_LANGUAGES_HEADING,
                  }),
                  (0, t.jsx)(f.Z, { supportedLanguages: b }),
                ],
              }),
            ),
          (null != l.terms_of_service_url ||
            null != l.privacy_policy_url ||
            T.length > 0) &&
            P.push(
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(s.Heading, {
                    className: C.sectionHeader,
                    variant: "eyebrow",
                    children: h.Z.Messages.APP_DIRECTORY_PROFILE_LINKS_HEADING,
                  }),
                  T.map((e, n) =>
                    (0, t.jsx)(
                      E,
                      { url: e.url, onClick: R, children: e.name },
                      n,
                    ),
                  ),
                  null != l.terms_of_service_url
                    ? (0, t.jsx)(x, {
                        icon: s.LinkIcon,
                        onClick: R,
                        url: l.terms_of_service_url,
                        type: "tos",
                        children: h.Z.Messages.APP_DIRECTORY_PROFILE_TERMS_LINK,
                      })
                    : null,
                  null != l.privacy_policy_url
                    ? (0, t.jsx)(x, {
                        icon: s.LockIcon,
                        onClick: R,
                        url: l.privacy_policy_url,
                        type: "policy",
                        children:
                          h.Z.Messages.APP_DIRECTORY_PROFILE_PRIVACY_LINK,
                      })
                    : null,
                ],
              }),
            ),
          null != l.guild &&
            l.guild.features.includes(g.oNc.DISCOVERABLE) &&
            P.push(
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(s.Heading, {
                    className: C.sectionHeader,
                    variant: "eyebrow",
                    children: h.Z.Messages.APP_DIRECTORY_PROFILE_SERVER_HEADING,
                  }),
                  (0, t.jsx)(I.Z, { guild: l.guild, onClick: m }),
                ],
              }),
            ),
          (0, t.jsx)("div", {
            className: o()(C.sidebar, d),
            children:
              P.length > 0
                ? (0, t.jsx)(t.Fragment, {
                    children: P.map((e, n) =>
                      (0, t.jsx)(
                        "div",
                        { className: C.section, children: e },
                        n,
                      ),
                    ),
                  })
                : null,
          })
        );
      }
    },
    290247: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return s;
        },
      });
      var t = i(735250);
      i(470079);
      var a = i(120356),
        r = i.n(a),
        o = i(481060),
        l = i(357248);
      function s(e) {
        let { supportedLanguages: n } = e;
        return (0, t.jsx)("ul", {
          className: l.outerContainer,
          children: n.map((e) =>
            (0, t.jsx)(
              "li",
              {
                className: r()(l.innerContainer, l.languageItem),
                children: (0, t.jsx)(o.Text, {
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
    606183: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return o;
        },
      });
      var t = i(735250);
      i(470079);
      var a = i(481060),
        r = i(995187);
      function o(e) {
        let { activeSection: n, setSection: i, sections: o } = e;
        return (0, t.jsx)(a.TabBar, {
          selectedItem: n,
          type: "top",
          onItemSelect: i,
          className: r.tabBar,
          children: o.map((e) => {
            let { name: n, text: i, Icon: o } = e;
            return (0, t.jsxs)(
              a.TabBar.Item,
              {
                id: n,
                className: r.tabBarItem,
                "aria-label": i,
                children: [
                  (0, t.jsx)(o, { className: r.icon, color: "currentColor" }),
                  i,
                ],
              },
              n,
            );
          }),
        });
      }
    },
    860719: function (e, n, i) {
      i.d(n, {
        w: function () {
          return a;
        },
      }),
        i(789020);
      var t = i(85025);
      function a(e) {
        let { flags: n } = e,
          i = (0, t.O)(n),
          a =
            null != i &&
            ((null == i ? void 0 : i.messageContent) ||
              (null == i ? void 0 : i.messageContentLimited)),
          r =
            null != i &&
            ((null == i ? void 0 : i.guildPresences) ||
              (null == i ? void 0 : i.guildPresencesLimited)),
          o =
            null != i &&
            ((null == i ? void 0 : i.guildMembers) ||
              (null == i ? void 0 : i.guildMembersLimited));
        return {
          hasMessageContent: a,
          hasGuildPresences: r,
          hasGuildMembers: o,
          hasIntents: a || r || o,
        };
      }
    },
    85025: function (e, n, i) {
      i.d(n, {
        O: function () {
          return r;
        },
      });
      var t = i(630388),
        a = i(981631);
      function r(e) {
        if (null != e)
          return {
            guildPresences: (0, t.yE)(e, a.udG.GATEWAY_PRESENCE),
            guildMembers: (0, t.yE)(e, a.udG.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, t.yE)(e, a.udG.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, t.yE)(e, a.udG.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, t.yE)(
              e,
              a.udG.GATEWAY_GUILD_MEMBERS_LIMITED,
            ),
            messageContentLimited: (0, t.yE)(
              e,
              a.udG.GATEWAY_MESSAGE_CONTENT_LIMITED,
            ),
          };
      }
    },
    679056: function (e, n, i) {
      i(47120);
      var t,
        a = i(735250),
        r = i(470079),
        o = i(846519);
      function l(e, n, i) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = i),
          e
        );
      }
      class s extends (t = r.Component) {
        static getDerivedStateFromProps(e) {
          return e.disable ? { hovered: !1 } : null;
        }
        componentDidMount() {
          let { pauseOnHover: e, disable: n } = this.props,
            i = this.state.hovered && e;
          !n && !i && this.startTimer();
        }
        componentWillUnmount() {
          this.stopTimer();
        }
        componentDidUpdate(e, n) {
          let i,
            t,
            a,
            r,
            { props: o } = this;
          let l =
            ((i = o),
            (t = this.state),
            !i.disable && !(t.hovered && i.pauseOnHover));
          let s =
            ((a = e), (r = n), !a.disable && !(r.hovered && a.pauseOnHover));
          (l && !s) || e.interval !== o.interval
            ? this.startTimer()
            : !l && s && this.stopTimer();
        }
        startTimer() {
          let { interval: e, onInterval: n, disable: i } = this.props;
          if (!i)
            this.timer.start(e, () => {
              n();
            });
        }
        stopTimer() {
          this.timer.stop();
        }
        render() {
          let { children: e, className: n, disable: i } = this.props,
            t = i
              ? null
              : {
                  onMouseEnter: this.handlePause,
                  onFocus: this.handlePause,
                  onMouseLeave: this.handleResume,
                  onBlur: this.handleResume,
                };
          return (0, a.jsx)("div", { ...t, className: n, children: e });
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
      l(s, "defaultProps", { disable: !1, pauseOnHover: !1 }), (n.Z = s);
    },
    578361: function (e, n, i) {
      i.d(n, {
        n: function () {
          return a;
        },
      });
      var t,
        a,
        r = i(735250),
        o = i(470079),
        l = i(120356),
        s = i.n(l),
        c = i(748780),
        d = i(215569),
        u = i(607131);
      ((t = a || (a = {}))[(t.RIGHT = -1)] = "RIGHT"),
        (t[(t.LEFT = 1)] = "LEFT");
      let _ = { friction: 7, tension: 40, clamp: !0 };
      class p extends o.PureComponent {
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
          var n, i, t;
          super(e),
            (n = this),
            (t = void 0),
            (i = "_animated") in n
              ? Object.defineProperty(n, i, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (n[i] = t),
            (this._animated = new c.Z.Value(-1 * e.direction));
        }
      }
      n.Z = (e) => {
        let {
          children: n,
          step: i,
          direction: t,
          className: a,
          springSettings: o = _,
          fadeInOut: l = !1,
        } = e;
        return (0, r.jsx)(d.W, {
          component: "div",
          className: s()(u.animator, a),
          children: (0, r.jsx)(
            p,
            { direction: t, springSettings: o, fadeInOut: l, children: n },
            i,
          ),
        });
      };
    },
    817460: function (e, n, i) {
      i.d(n, {
        JE: function () {
          return l;
        },
        ab: function () {
          return o;
        },
        iG: function () {
          return s;
        },
        lL: function () {
          return d;
        },
        rC: function () {
          return c;
        },
      });
      var t = i(293810),
        a = i(474936),
        r = i(689938);
      function o(e) {
        return "roles" in e
          ? "emoji-".concat(e.id)
          : ""
              .concat(e.ref_type, "-")
              .concat(e.emoji_id, "-")
              .concat(e.name, "-")
              .concat(e.ref_id);
      }
      function l(e) {
        let { interval: n, interval_count: i } = e;
        return (function (e) {
          switch (e) {
            case a.rV.DAY:
              return r.Z.Messages.DAY;
            case a.rV.MONTH:
              return r.Z.Messages.MONTH;
            case a.rV.YEAR:
              return r.Z.Messages.YEAR;
          }
        })(n).format({ count: i });
      }
      function s(e) {
        let { interval: n, interval_count: i } = e;
        switch (n) {
          case a.rV.DAY:
            if (i > 0 && i % 7 == 0)
              return r.Z.Messages.DURATION_WEEKS_CAPITALIZE.format({
                weeks: i / 7,
              });
            return r.Z.Messages.DURATION_DAYS_CAPITALIZE.format({ days: i });
          case a.rV.MONTH:
            return r.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({
              months: i,
            });
          case a.rV.YEAR:
            return r.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: i });
        }
      }
      function c(e) {
        return e.ref_type === t.Qs.CHANNEL;
      }
      function d(e) {
        return e.ref_type === t.Qs.INTANGIBLE;
      }
    },
    724870: function (e, n, i) {
      i.d(n, {
        h: function () {
          return p;
        },
        m: function () {
          return I;
        },
      }),
        i(789020);
      var t = i(735250);
      i(470079);
      var a = i(512722),
        r = i.n(a),
        o = i(481060),
        l = i(496929),
        s = i(171246),
        c = i(509545),
        d = i(55563),
        u = i(987209),
        _ = i(981631);
      function p(e) {
        let {
          initialPlanId: n,
          activeSubscription: a,
          analyticsObject: r,
          analyticsLocation: l,
          analyticsLocations: s,
          analyticsSubscriptionType: c,
          renderHeader: d,
          planGroup: p,
          skuId: m,
          guildId: I,
          reviewWarningMessage: f,
          applicationId: g,
          showBenefitsFirst: h,
          eligibleApplicationSubscriptionGuilds: C,
          onComplete: v,
          forcesTransitionToGuild: E,
        } = e;
        (0, o.openModalLazy)(
          async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(
                i.bind(i, 598),
              ),
              o = (
                await Promise.all([
                  i.e("52249"),
                  i.e("47006"),
                  i.e("32776"),
                  i.e("66517"),
                ]).then(i.bind(i, 405083))
              ).default,
              { getApplicationPaymentSteps: _ } = await Promise.all([
                i.e("96427"),
                i.e("77298"),
                i.e("23357"),
                i.e("54803"),
                i.e("15685"),
                i.e("18209"),
                i.e("30671"),
                i.e("86751"),
              ]).then(i.bind(i, 759386)),
              x = _({
                guildId: I,
                showBenefitsFirst: h,
                eligibleApplicationSubscriptionGuilds: C,
              });
            return (i) =>
              (0, t.jsx)(e, {
                applicationId: g,
                activeSubscription: a,
                stepConfigs: x,
                skuIDs: [m],
                children: (0, t.jsx)(u.KB, {
                  children: (0, t.jsx)(o, {
                    ...i,
                    initialPlanId: n,
                    skuId: m,
                    analyticsLocations: s,
                    analyticsObject: r,
                    analyticsLocation: l,
                    analyticsSubscriptionType: c,
                    renderHeader: d,
                    planGroup: p,
                    reviewWarningMessage: f,
                    applicationId: g,
                    guildId: null != I ? I : void 0,
                    onComplete: v,
                    forcesTransitionToGuild: E,
                  }),
                }),
              });
          },
          { onCloseRequest: _.dG4 },
        );
      }
      let m = async (e, n) => {
        let i = (await (0, l.yD)(e))
          .filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date())
          .find((e) => e.sku_id === n);
        r()(null == i, "User already has an active subscription to this SKU");
      };
      async function I(e) {
        var n;
        let {
            applicationId: i,
            skuId: t,
            initialPlanId: a,
            analyticsLocationObject: o,
            analyticsLocations: l,
            renderHeader: u,
          } = e,
          I = d.Z.get(t),
          f = c.Z.getForSKU(t);
        r()(null != I, "Failed to find SKU");
        let g = (0, s.KW)(I.flags);
        r()(g, "Guild application subscriptions unsupported!"),
          await m(i, t),
          p({
            initialPlanId:
              null != a
                ? a
                : null === (n = f[0]) || void 0 === n
                  ? void 0
                  : n.id,
            activeSubscription: null,
            analyticsLocations: l,
            analyticsLocationObject: o,
            analyticsSubscriptionType: _.NYc.APPLICATION,
            renderHeader: u,
            planGroup: [],
            skuId: t,
            guildId: null,
            eligibleApplicationSubscriptionGuilds: [],
            showBenefitsFirst: !1,
            applicationId: i,
          });
      }
    },
    359610: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return r;
        },
      });
      var t = i(735250);
      i(470079);
      var a = i(481060);
      function r(e) {
        let {
          children: n,
          className: i,
          size: r = a.Button.Sizes.SMALL,
          ...o
        } = e;
        return (0, t.jsx)(a.Button, {
          ...o,
          color: a.Button.Colors.BRAND,
          size: r,
          className: i,
          children: n,
        });
      }
    },
    174931: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return R;
        },
      }),
        i(315314),
        i(610138),
        i(216116),
        i(78328),
        i(815648),
        i(47120);
      var t = i(735250),
        a = i(470079),
        r = i(468194),
        o = i(442837),
        l = i(477690),
        s = i(481060),
        c = i(887706),
        d = i(34674),
        u = i(817460),
        _ = i(703656),
        p = i(351402),
        m = i(937615),
        I = i(73346),
        f = i(270144),
        g = i(359610),
        h = i(245561),
        C = i(696906),
        v = i(981631),
        E = i(689938),
        x = i(683181);
      let b = (0, r.Mg)(l.Z.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
        A = "start_application_subscription",
        P = (e) => {
          let { listing: n } = e,
            i = n.image_asset;
          if (null == i) return null;
          let a = (0, I._W)(n.application_id, i, b);
          return (0, t.jsx)("div", {
            children: (0, t.jsx)("img", {
              src: a,
              alt: "",
              className: x.listingImage,
            }),
          });
        },
        T = (e) => {
          let { children: n } = e;
          return (0, t.jsx)(s.Button, {
            look: s.Button.Looks.OUTLINED,
            color: s.Button.Colors.PRIMARY,
            disabled: !0,
            size: s.Button.Sizes.SMALL,
            children: n,
          });
        };
      function R(e) {
        let {
            listing: n,
            groupListingId: i,
            guildId: r,
            analyticsLocation: l,
            onComplete: I,
            forcesTransitionToGuild: b,
          } = e,
          R = (0, o.e7)([p.Z], () => p.Z.isSyncing),
          { activeSubscription: N, activeSubscriptionListing: S } = (0, f.F5)(
            n.application_id,
            r,
          ),
          {
            openModal: L,
            canOpenModal: O,
            cannotOpenReason: j,
          } = (0, C.Z)({
            guildId: r,
            groupListingId: i,
            showBenefitsFirst: !1,
            analyticsLocation: l,
            onComplete: I,
            forcesTransitionToGuild: b,
            skuId: n.id,
          }),
          y = n.subscription_plans[0],
          D = 0 === y.price,
          Z = (null == S ? void 0 : S.id) === n.id,
          M = (0, c.Z)(),
          B = (M && !O) || R,
          k = () => {
            M ? L() : (0, d.rf)({ [A]: "true" });
          };
        return (
          a.useEffect(() => {
            let e = new URL(location.href);
            if (M && !B && "true" === e.searchParams.get(A)) {
              e.searchParams.delete(A);
              let n = e.pathname + e.search;
              (0, _.dL)(n), L();
            }
          }, [M, L, B]),
          (0, t.jsxs)("div", {
            className: x.container,
            children: [
              (0, t.jsxs)("div", {
                className: x.cardHeader,
                children: [
                  (0, t.jsx)(P, { listing: n }),
                  (0, t.jsx)(s.Text, {
                    variant: "text-lg/medium",
                    color: "interactive-active",
                    children: n.name,
                  }),
                  (0, t.jsxs)("div", {
                    className: x.priceAndButtonContainer,
                    children: [
                      (0, t.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "interactive-normal",
                        children: D
                          ? E.Z.Messages.APPLICATION_SUBSCRIPTION_FREE
                          : E.Z.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format(
                              {
                                amount: (0, m.T4)(y.price, y.currency),
                                period: (0, u.JE)(y),
                              },
                            ),
                      }),
                      (() => {
                        var e;
                        if (Z)
                          return (0, t.jsx)(T, {
                            children:
                              (null == N ? void 0 : N.status) === v.O0b.CANCELED
                                ? E.Z.Messages
                                    .APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL
                                : E.Z.Messages
                                    .APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL,
                          });
                        if (D)
                          return null == S
                            ? (0, t.jsx)(T, {
                                children:
                                  E.Z.Messages
                                    .APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL,
                              })
                            : null;
                        return (0, t.jsx)(s.Tooltip, {
                          tooltipClassName: x.subscribeButtonTooltip,
                          text: O || !M ? null : j,
                          "aria-label":
                            null !== (e = !O && j) && void 0 !== e && e,
                          children: (e) =>
                            (0, t.jsx)(g.Z, {
                              ...e,
                              disabled: B,
                              submitting: !1,
                              onClick: k,
                              children:
                                E.Z.Messages
                                  .APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL,
                            }),
                        });
                      })(),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: x.benefitsContainer,
                children: (0, t.jsx)(h.GU, {
                  applicationId: n.application_id,
                  storeListingBenefits: n.store_listing_benefits,
                  skuBenefits: n.sku_benefits.benefits,
                  className: x.benefit,
                }),
              }),
            ],
          })
        );
      }
    },
    864843: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return m;
        },
      });
      var t = i(735250),
        a = i(470079),
        r = i(481060),
        o = i(355467),
        l = i(887706),
        s = i(270144),
        c = i(171246),
        d = i(174931),
        u = i(689938),
        _ = i(732019);
      function p(e) {
        let { listing: n } = e,
          i = (0, c.KK)(n.sku_flags);
        return (0, c.KW)(n.sku_flags) || i
          ? (0, t.jsxs)("div", {
              className: _.cta,
              children: [
                (0, t.jsx)(r.Heading, {
                  variant: "heading-lg/bold",
                  children: i
                    ? u.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER
                    : u.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER,
                }),
                (0, t.jsx)(r.Heading, {
                  color: "interactive-normal",
                  variant: "heading-md/normal",
                  children: i
                    ? u.Z.Messages
                        .APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
                    : u.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format(
                        { applicationName: n.name },
                      ),
                }),
              ],
            })
          : null;
      }
      function m(e) {
        var n;
        let {
            guildId: i,
            applicationId: c,
            applicationPrimarySkuId: u,
            analyticsLocation: m,
            onComplete: I,
            forcesTransitionToGuild: f,
          } = e,
          { listingsLoaded: g } = (0, s.FE)(c, u),
          { entitlementsLoaded: h } = (0, s.LM)({ guildId: i }),
          { subscriptionGroupListing: C } = (0, s.F5)(c, i),
          v = (0, l.Z)();
        a.useEffect(() => {
          v && o.jg();
        }, [v]);
        let E = null == C ? void 0 : C.id,
          x =
            null == C
              ? void 0
              : null === (n = C.subscription_listings) || void 0 === n
                ? void 0
                : n.filter((e) => e.published);
        return g && (null == i || h)
          ? null == E || null == x || 0 === x.length
            ? null
            : (0, t.jsx)("div", {
                className: _.container,
                children: x.map((e) =>
                  (0, t.jsxs)(
                    a.Fragment,
                    {
                      children: [
                        (0, t.jsx)(p, { listing: e }),
                        (0, t.jsx)(d.Z, {
                          listing: e,
                          guildId: i,
                          groupListingId: E,
                          analyticsLocation: m,
                          onComplete: I,
                          forcesTransitionToGuild: f,
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              })
          : (0, t.jsx)("div", {
              className: _.loadingContainer,
              children: (0, t.jsx)(r.Spinner, {}),
            });
      }
    },
    714441: function (e, n, i) {
      i.d(n, {
        i: function () {
          return r;
        },
      });
      var t = i(735250);
      i(470079);
      var a = i(481060);
      function r(e) {
        let { applicationName: n, onConfirm: r, onCancel: o } = e;
        return (0, a.openModalLazy)(
          async () => {
            let { ConfirmNoSharedServerSubscribeWarningModal: e } = await i
              .e("99809")
              .then(i.bind(i, 525549));
            return (i) =>
              (0, t.jsx)(e, {
                ...i,
                applicationName: n,
                onConfirm: r,
                onCancel: o,
              });
          },
          { modalKey: "application-user-subscribe-no-shared-server-warning" },
        );
      }
    },
    696906: function (e, n, i) {
      i(789020);
      var t = i(735250),
        a = i(470079),
        r = i(512722),
        o = i.n(r),
        l = i(442837),
        s = i(570140),
        c = i(821849),
        d = i(906732),
        u = i(887706),
        _ = i(728345),
        p = i(724870),
        m = i(594174),
        I = i(509545),
        f = i(55563),
        g = i(551428),
        h = i(630388),
        C = i(270144),
        v = i(171246),
        E = i(689011),
        x = i(714441),
        b = i(981631),
        A = i(689938);
      n.Z = (e) => {
        var n;
        let i,
          {
            guildId: r,
            groupListingId: P,
            analyticsLocation: T,
            showBenefitsFirst: R,
            skuId: N,
            onComplete: S,
            forcesTransitionToGuild: L,
          } = e,
          O = (0, l.e7)([f.Z], () => (null != N ? f.Z.get(N) : void 0), [N]),
          j = (0, l.e7)([g.Z], () => (null != N ? g.Z.getForSKU(N) : void 0), [
            N,
          ]),
          y = (0, l.e7)([I.Z], () => (null != N ? I.Z.getForSKU(N) : void 0), [
            N,
          ]),
          D = null != y ? y[0] : void 0,
          Z = null == O ? void 0 : O.applicationId,
          M =
            (null == j ? void 0 : j.published) === !0 &&
            null != O &&
            (0, h.yE)(O.flags, b.l4R.AVAILABLE),
          B = null == D ? void 0 : D.skuId,
          { data: k } = (0, _.I)(Z),
          w = (0, C._k)(P, { includeSoftDeleted: !0 }).map(
            (e) => e.subscription_plans[0].id,
          ),
          { analyticsLocations: G } = (0, d.ZP)(),
          { activeSubscription: H, activeEntitlement: F } = (0, C.F5)(Z, r),
          U = (0, C.CR)(Z, r),
          Y = (0, u.Z)(),
          W = null != O && (0, v.KW)(O.flags),
          V =
            null != F &&
            F.userId ===
              (null === (n = m.default.getCurrentUser()) || void 0 === n
                ? void 0
                : n.id),
          z = null == F || V,
          K = null == F || w.length > 1,
          q = null != r || U.length > 0,
          J = W && V,
          Q = null != D && null != k && z && K && (q || W) && !J;
        return (
          z
            ? q
              ? J &&
                null != D &&
                (i =
                  A.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format(
                    { tierName: D.name },
                  ))
              : (i = A.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE)
            : (i =
                A.Z.Messages
                  .APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION),
          a.useEffect(() => {
            M &&
              null != B &&
              Y &&
              !(I.Z.isFetchingForSKU(B) || I.Z.isLoadedForSKU(B)) &&
              s.Z.wait(() => {
                (0, c.GZ)(B);
              });
          }, [M, B, Y]),
          {
            openModal: a.useCallback(() => {
              o()(null != k, "No application"),
                o()(null != D, "No subscription plan"),
                o()(M, "Cannot purchase this unpublished plan");
              let e = () => {
                (0, p.h)({
                  activeSubscription: H,
                  analyticsSubscriptionType: b.NYc.APPLICATION,
                  analyticsLocations: G,
                  analyticsLocation: T,
                  renderHeader: (e, n, i) =>
                    (0, t.jsx)(E.t, { step: i, onClose: () => n(!1) }),
                  initialPlanId: D.id,
                  skuId: D.skuId,
                  guildId: r,
                  eligibleApplicationSubscriptionGuilds: U,
                  planGroup: w,
                  applicationId: k.id,
                  showBenefitsFirst: R,
                  onComplete: S,
                  forcesTransitionToGuild: L,
                });
              };
              !q && W
                ? (0, x.i)({
                    applicationName: k.name,
                    onConfirm: e,
                    onCancel: () => {},
                  })
                : e();
            }, [M, D, w, k, r, q, W, G, T, H, R, U, S, L]),
            canOpenModal: Q,
            cannotOpenReason: i,
          }
        );
      };
    },
    238: function (e, n, i) {
      i.d(n, {
        N: function () {
          return t;
        },
      }),
        i(47120);
      var t,
        a,
        r,
        o,
        l,
        s,
        c = i(442837),
        d = i(570140),
        u = i(55563),
        _ = i(551428);
      let p = new Map(),
        m = new Map();
      ((r = t || (t = {}))[(r.NONE = 0)] = "NONE"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.FETCHED = 2)] = "FETCHED"),
        (r[(r.FAILED = 3)] = "FAILED");
      let I = { subscriptions: [], otps: [] };
      class f extends (a = c.ZP.Store) {
        initialize() {
          this.waitFor(u.Z, _.Z);
        }
        hasStorefront(e) {
          return p.has(e);
        }
        getStoreLayout(e) {
          var n;
          return null !== (n = p.get(e)) && void 0 !== n ? n : I;
        }
        getFetchStatus(e) {
          var n;
          return p.has(e) ? 2 : null !== (n = m.get(e)) && void 0 !== n ? n : 0;
        }
      }
      (s = "ApplicationStoreDirectoryStore"),
        (l = "displayName") in (o = f)
          ? Object.defineProperty(o, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[l] = s),
        (n.Z = new f(d.Z, {
          APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function (e) {
            let { applicationId: n, listings: i } = e;
            p.set(n, i), m.delete(n);
          },
          APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: function (e) {
            let { applicationId: n } = e;
            m.set(n, 3);
          },
          APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: function (e) {
            let { applicationId: n } = e;
            m.set(n, 1);
          },
        }));
    },
    812666: function (e, n, i) {
      e.exports = {
        container: "container_a06168",
        list: "list_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
        permissionHeader: "permissionHeader_a06168",
      };
    },
    34026: function (e, n, i) {
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
    512234: function (e, n, i) {
      e.exports = {
        wrapper: "wrapper_b6f1f8",
        slide: "slide_b6f1f8",
        navPrev: "navPrev_b6f1f8 nav_b6f1f8",
        navNext: "navNext_b6f1f8 nav_b6f1f8",
      };
    },
    988796: function (e, n, i) {
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
    897189: function (e, n, i) {
      e.exports = {
        collapsed: "collapsed_e2ea95",
        blurb: "blurb_e2ea95",
        description: "description_e2ea95",
        toggleCollapseButton: "toggleCollapseButton_e2ea95",
        assetWrapper: "assetWrapper_e2ea95",
        asset: "asset_e2ea95",
      };
    },
    100315: function (e, n, i) {
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
    537547: function (e, n, i) {
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
    982469: function (e, n, i) {
      e.exports = {
        listingDescription: "listingDescription_d2c3da",
        bottomGuildCountContainer: "bottomGuildCountContainer_d2c3da",
      };
    },
    563727: function (e, n, i) {
      e.exports = { header: "header_d5abe9", list: "list_d5abe9" };
    },
    66465: function (e, n, i) {
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
    276199: function (e, n, i) {
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
    140052: function (e, n, i) {
      e.exports = {
        container: "container_da6719",
        spinnerContainer: "spinnerContainer_da6719",
        spinner: "spinner_da6719",
        loading: "loading_da6719",
      };
    },
    914693: function (e, n, i) {
      e.exports = { partnerBadge: "partnerBadge_de92a5" };
    },
    364658: function (e, n, i) {
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
    696672: function (e, n, i) {
      e.exports = {
        productSection: "productSection_a9d0f5",
        productList: "productList_a9d0f5",
        subList: "subList_a9d0f5",
        itemList: "itemList_a9d0f5",
      };
    },
    856773: function (e, n, i) {
      e.exports = {
        list: "list_e0307d",
        row: "row_e0307d",
        commandName: "commandName_e0307d",
      };
    },
    121281: function (e, n, i) {
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
    936404: function (e, n, i) {
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
    200682: function (e, n, i) {
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
    357248: function (e, n, i) {
      e.exports = {
        outerContainer: "outerContainer_b51750",
        innerContainer: "innerContainer_b51750",
        languageItem: "languageItem_b51750",
      };
    },
    995187: function (e, n, i) {
      e.exports = {
        tabBar: "tabBar_bc3297",
        tabBarItem: "tabBarItem_bc3297",
        icon: "icon_bc3297",
      };
    },
    637714: function (e, n, i) {
      e.exports = {
        wrapper: "wrapper_bfa0f5",
        productSection: "productSection_bfa0f5",
        productList: "productList_bfa0f5",
        legalText: "legalText_bfa0f5",
      };
    },
    437561: function (e, n, i) {
      e.exports = {
        modal: "modal_c5ad85",
        modalHeader: "modalHeader_c5ad85",
        modalTitle: "modalTitle_c5ad85",
        modalHeaderLinks: "modalHeaderLinks_c5ad85",
        containerScrollGradient: "containerScrollGradient_c5ad85",
        modalCloseBtn: "modalCloseBtn_c5ad85",
      };
    },
    27399: function (e, n, i) {
      e.exports = {
        modal: "modal_c48629",
        footer: "footer_c48629",
        footerButtons: "footerButtons_c48629",
        linkButton: "linkButton_c48629",
        appIcon: "appIcon_c48629",
      };
    },
    986357: function (e, n, i) {
      e.exports = { btnContent: "btnContent_cdaed4" };
    },
    456831: function (e, n, i) {
      e.exports = { title: "title_eaa702" };
    },
    607131: function (e, n, i) {
      e.exports = { animator: "animator_abd0f1", item: "item_abd0f1" };
    },
    600636: function (e, n, i) {
      e.exports = {
        logo: "logo_b0f834",
        title: "title_b0f834",
        header: "header_b0f834",
      };
    },
    3732: function (e, n, i) {
      e.exports = {
        markdown: "markdown_b97ce2",
        blockquote: "blockquote_b97ce2",
        codeInline: "codeInline_b97ce2",
        paragraph: "paragraph_b97ce2",
      };
    },
    935687: function (e, n, i) {
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
    954291: function (e, n, i) {
      e.exports = {
        singleItemWrapper: "singleItemWrapper_e3183f",
        carousel: "carousel_e3183f",
        item: "item_e3183f",
        singleItem: "singleItem_e3183f item_e3183f",
        viewport: "viewport_e3183f",
      };
    },
    542538: function (e, n, i) {
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
    527926: function (e, n, i) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    853265: function (e, n, i) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    132805: function (e, n, i) {
      e.exports = {
        body: "body_bf926b",
        sliderBody: "sliderBody_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
      };
    },
    640360: function (e, n, i) {
      e.exports = {
        container: "container_a3545a",
        header: "header_a3545a",
        divider: "divider_a3545a",
        benefitsContainer: "benefitsContainer_a3545a",
        benefit: "benefit_a3545a",
      };
    },
    859993: function (e, n, i) {
      e.exports = {
        icon: "icon_e10dab",
        small: "small_e10dab",
        medium: "medium_e10dab",
      };
    },
    683181: function (e, n, i) {
      e.exports = {
        container: "container_a11d84",
        cardHeader: "cardHeader_a11d84",
        priceAndButtonContainer: "priceAndButtonContainer_a11d84",
        listingImage: "listingImage_a11d84",
        benefitsContainer: "benefitsContainer_a11d84",
        benefit: "benefit_a11d84",
        subscribeButtonTooltip: "subscribeButtonTooltip_a11d84",
      };
    },
    732019: function (e, n, i) {
      e.exports = {
        loadingContainer: "loadingContainer_e5ddf6",
        container: "container_e5ddf6",
        cta: "cta_e5ddf6",
      };
    },
    108204: function (e, n, i) {
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
    164892: function (e, n, i) {
      e.exports = {
        container: "container_ffcaea",
        emojiContainer: "emojiContainer_ffcaea",
        name: "name_ffcaea",
        infoContainer: "infoContainer_ffcaea",
      };
    },
    24701: function (e, n, i) {
      e.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
    415858: function (e, n, i) {
      e.exports = { containerScrollGradient: "containerScrollGradient_c2f634" };
    },
    393713: function (e, n, i) {
      e.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    689498: function (e, n, i) {
      e.exports = {
        container: "container_e8df26",
        header: "header_e8df26",
        headerBackground: "headerBackground_e8df26",
        headerTop: "headerTop_e8df26",
        headerImage: "headerImage_e8df26",
        scroll: "scroll_e8df26",
        scrollContent: "scrollContent_e8df26",
        details: "details_e8df26",
        benefits: "benefits_e8df26",
        description: "description_e8df26",
      };
    },
    25378: function (e, n, i) {
      e.exports = {
        wrapper: "wrapper_a8220a",
        cardHeaderImg: "cardHeaderImg_a8220a",
        details: "details_a8220a",
        description: "description_a8220a",
        footer: "footer_a8220a",
      };
    },
    772421: function (e, n, i) {
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
    33937: function (e, n, i) {
      e.exports = { container: "container_c99f26" };
    },
    778342: function (e, n, i) {
      e.exports = { hoverCard: "hoverCard_d991d3" };
    },
  },
]);
//# sourceMappingURL=9870f9e09adc90547580.js.map
