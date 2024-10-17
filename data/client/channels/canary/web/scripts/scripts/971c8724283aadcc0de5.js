"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["71979"],
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
    995648: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        r = t.n(a),
        o = t(481060),
        l = t(422559),
        s = t(594045);
      function c(e) {
        let {
          grantedPermissions: n,
          disabledPermissions: t,
          grantedPermissionsHeader: a,
          disabledPermissionsHeader: c,
          className: d,
        } = e;
        return (0, i.jsxs)("div", {
          className: r()(s.list, d),
          children: [
            null != n && n.length > 0
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    null != a
                      ? (0, i.jsx)(o.FormTitle, {
                          className: s.permissionHeader,
                          children: a,
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
            null != t && t.length > 0
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    null != c
                      ? (0, i.jsx)(o.FormTitle, {
                          className: s.permissionHeader,
                          children: c,
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
    4461: function (e, n, t) {
      t.d(n, {
        P: function () {
          return r;
        },
      });
      var i = t(470079),
        a = t(135431);
      function r(e, n) {
        let t = i.useMemo(
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
          canInstall: t,
          install: i.useCallback(
            (t) => {
              if (null != e)
                (0, a.LO)({
                  applicationId: e.id,
                  customInstallUrl: e.custom_install_url,
                  installParams: e.install_params,
                  integrationTypesConfig: e.integration_types_config,
                  guildId: null != n ? n : void 0,
                  source: t,
                });
            },
            [e, n],
          ),
        };
      }
    },
    744142: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250),
        a = t(470079),
        r = t(481060),
        o = t(768581),
        l = t(924489),
        s = t(950854),
        c = t(491576),
        d = t(169909);
      function u(e) {
        var n, t, u, _, p;
        let {
            application: m,
            className: I,
            childrenClassName: f,
            animatesOnHover: h,
            onClick: g,
            ...C
          } = e,
          v = o.ZP.getApplicationIconURL({ id: m.id, icon: m.icon, size: 48 }),
          b = (0, c.Z)({ application: m }),
          E = null === (n = m.categories) || void 0 === n ? void 0 : n[0],
          x =
            (null !==
              (_ =
                null === (t = m.directory_entry) || void 0 === t
                  ? void 0
                  : t.guild_count) && void 0 !== _
              ? _
              : 0) > 0 || b.length > 0,
          T = a.useCallback(() => {
            g({ mutualGuilds: b });
          }, [g, b]),
          P = (0, i.jsx)(l.Z, {
            application: m,
            textVariant: "text-xs/normal",
            mutualGuilds: b,
            mutualGuildShownMax: 3,
            guildIconSize: l.x.SMALL,
            compact: !0,
          });
        return (0, i.jsxs)(s.Z, {
          className: I,
          onClick: T,
          iconSrc: v,
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
          ...C,
          children: [
            (null != m.description || null != f) &&
              (0, i.jsx)("div", {
                className: f,
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
            x &&
              (0, i.jsx)("div", {
                className: d.bottomGuildCountContainer,
                children: P,
              }),
          ],
        });
      }
    },
    576958: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        r = t(463571),
        o = t(744142),
        l = t(981631),
        s = t(689938),
        c = t(558562);
      function d(e) {
        let {
          applications: n,
          className: t,
          listingClassName: o,
          title: d,
          showViewAll: _,
          onViewOne: p,
          onViewAll: m,
        } = e;
        return (0, i.jsxs)("div", {
          className: t,
          children: [
            null != d
              ? (0, i.jsxs)("div", {
                  className: c.header,
                  children: [
                    (0, i.jsx)(a.Heading, {
                      variant: "heading-lg/semibold",
                      children: d,
                    }),
                    _
                      ? (0, i.jsx)(a.Button, {
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
            (0, i.jsx)("ul", {
              className: c.list,
              children: n.map((e) =>
                (0, i.jsx)(
                  r.Z,
                  {
                    href: l.Z5c.APPLICATION_DIRECTORY_PROFILE(e.id),
                    children: (0, i.jsx)(u, {
                      className: o,
                      application: e,
                      onClick: (n) => {
                        let { mutualGuilds: t } = n;
                        return p({ application: e, mutualGuilds: t });
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
        return (0, i.jsx)(o.Z, { ...e });
      }
    },
    950854: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        r = t.n(a),
        o = t(481060),
        l = t(689938),
        s = t(882089);
      function c(e) {
        let {
            className: n,
            onClick: t,
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
          h = null != a,
          g = (0, i.jsxs)(i.Fragment, {
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
                          null != p &&
                            (0, i.jsx)(o.Text, {
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
          C = r()(n, s.container, { [s.hasImage]: h });
        return null != t
          ? (0, i.jsx)(o.ClickableContainer, {
              tag: "article",
              "aria-label":
                l.Z.Messages.APP_DIRECTORY_LISTING_CARD_BUTTON_A11Y_LABEL.format(
                  { name: d },
                ),
              onClick: t,
              className: r()(C, s.clickable, {
                [s.animatesOnHoverContainer]: I,
              }),
              focusProps: { offset: 4 },
              children: g,
            })
          : (0, i.jsx)("article", { className: C, ...f, children: g });
      }
    },
    409425: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        r = t.n(a),
        o = t(481060),
        l = t(377171),
        s = t(689938),
        c = t(274679);
      function d(e) {
        let { className: n, ...t } = e;
        return (0, i.jsx)(o.TextBadge, {
          ...t,
          text: s.Z.Messages.APP_DIRECTORY_PARTNER,
          color: l.Z.BACKGROUND_TERTIARY,
          className: r()(n, c.partnerBadge),
        });
      }
    },
    753450: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return eP;
          },
        }),
        t(47120),
        t(315314),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(789020),
        t(653041);
      var i = t(735250),
        a = t(470079),
        r = t(120356),
        o = t.n(r),
        l = t(525654),
        s = t.n(l),
        c = t(302454),
        d = t.n(c),
        u = t(873546),
        _ = t(149765),
        p = t(468194),
        m = t(442837),
        I = t(692547),
        f = t(477690),
        h = t(481060),
        g = t(995648),
        C = t(445986),
        v = t(9807),
        b = t(911969),
        E = t(330726),
        x = t(782568),
        T = t(581364),
        P = t(970321),
        S = t(283836),
        A = t(220082),
        N = t(252618),
        R = t(299206),
        L = t(241209),
        O = t(341176),
        y = t(422559),
        j = t(703656),
        D = t(280885),
        M = t(706454),
        Z = t(314897),
        B = t(451478),
        k = t(626135),
        w = t(768581),
        F = t(572004),
        H = t(823379),
        G = t(900849),
        U = t(135431),
        Y = t(674588),
        W = t(264043),
        V = t(303383),
        z = t(887706),
        K = t(738130),
        q = t(4461),
        X = t(34674),
        J = t(576958),
        Q = t(924489),
        $ = t(125909),
        ee = t(409425),
        en = t(132871),
        et = t(147890),
        ei = t(491576),
        ea = t(527564),
        er = t(326135),
        eo = t(940064),
        el = t(626004),
        es = t(939893),
        ec = t(430913),
        ed = t(606183),
        eu = t(272242),
        e_ = t(981631),
        ep = t(701865),
        em = t(558921),
        eI = t(689938),
        ef = t(613250),
        eh = t(902294);
      let eg = d().parserFor(es.Z),
        eC = d().reactFor(d().ruleOutput(es.Z, "react")),
        ev = (0, p.Mg)(f.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
        eb = "redirect_to_support_server",
        eE = "start_application_install",
        ex = (e) =>
          ""
            .concat(location.protocol, "//")
            .concat(location.host)
            .concat(e_.Z5c.APPLICATION_DIRECTORY_PROFILE(e)),
        eT = (e) => {
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
                section: I = eu.ApplicationDirectoryProfileSections.GENERAL,
              },
            },
          } = e,
          f = (0, en.useApplicationDirectoryHistory)((e) => e.guildId),
          b = (0, z.Z)(),
          A = (0, m.e7)(
            [V.Z],
            () =>
              V.Z.getFetchState({ applicationId: p, guildId: f }) ===
              V.M.FETCHING,
          ),
          es = a.useRef({ applicationId: void 0, guildId: void 0 }),
          { similarApplications: eT, similarLoadId: eP } = (0, m.cj)(
            [V.Z],
            () => {
              let e = { applicationId: p, guildId: f },
                n = V.Z.getSimilarApplications(e);
              return (
                null == n
                  ? (n = V.Z.getSimilarApplications(es.current))
                  : (es.current = e),
                {
                  similarApplications: null == n ? void 0 : n.applications,
                  similarLoadId: null == n ? void 0 : n.loadId,
                }
              );
            },
          ),
          eN = a.useMemo(() => (null == eT ? void 0 : eT.slice(0, 3)), [eT]),
          eL = (0, m.e7)([W.Z], () => W.Z.getApplicationFetchState(p)),
          [eO, ey] = a.useState(void 0),
          ej = a.useCallback(
            (e) => {
              if (null != p) {
                if (e === eu.ApplicationDirectoryProfileSections.GENERAL) {
                  (0, et.replaceAppDirectoryURLWith)(
                    e_.Z5c.APPLICATION_DIRECTORY_PROFILE(p),
                  );
                  return;
                }
                (0, et.replaceAppDirectoryURLWith)(
                  e_.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(p, e),
                );
              }
            },
            [p],
          ),
          eD = (0, m.e7)([B.Z], () => B.Z.isFocused()),
          eM = (0, m.e7)([M.default], () => M.default.locale),
          eZ = a.useRef(p),
          eB = (0, m.e7)([W.Z], () => {
            let e = W.Z.getApplication(p);
            return (
              null == e
                ? (e = W.Z.getApplication(eZ.current))
                : (eZ.current = p),
              e
            );
          }),
          ek = (0, ei.Z)({ application: eB }),
          ew = (0, m.e7)([Z.default], () => Z.default.getSessionId());
        (0, N.Tt)({ location: null == eB ? void 0 : eB.name });
        let eF = a.useCallback(async () => {
          try {
            var e;
            let n =
              null == eB
                ? void 0
                : null === (e = eB.guild) || void 0 === e
                  ? void 0
                  : e.id;
            if (null != n) {
              (null == eB ? void 0 : eB.id) != null &&
                k.default.track(e_.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                  application_id: eB.id,
                  guild_id: n,
                });
              let e = { page: e_.ZY5.APPLICATION_DIRECTORY };
              await (0, G.Ub)(n, e, { setsHistorySnapshot: !1 });
            }
          } catch {}
        }, [eB]);
        a.useEffect(() => {
          if (null == eB) return;
          let e = new URL(location.href);
          if (b && null != ew && "true" === e.searchParams.get(eb)) {
            e.searchParams.delete(eb);
            let n = e.pathname + e.search;
            (0, j.dL)(n), eF();
          }
        }, [b, eF, ew, eB]);
        let eH = a.useCallback(() => {
            var e;
            null !=
              (null == eB
                ? void 0
                : null === (e = eB.guild) || void 0 === e
                  ? void 0
                  : e.id) && (b ? eF() : (0, X.rf)({ [eb]: "true" }));
          }, [eB, b, eF]),
          eG = a.useCallback(() => {
            (0, et.replaceAppDirectoryURLWith)(
              ""
                .concat(e_.Z5c.APPLICATION_DIRECTORY_PROFILE(p))
                .concat(location.search),
            );
          }, [p]);
        a.useEffect(() => {
          I === eu.ApplicationDirectoryProfileSections.GENERAL && eG();
        }, [eG, I]),
          a.useEffect(() => {
            if (null != p) {
              let e =
                "true" ===
                  new URLSearchParams(location.search).get("preview") || void 0;
              Y.i6(p, { noCache: e });
            }
          }, [p]),
          a.useEffect(() => {
            if ((null == eB ? void 0 : eB.directory_entry) != null) {
              let e = eB.directory_entry,
                n = null == e ? void 0 : e.popular_application_commands;
              null != n
                ? ey(
                    n.map((e) =>
                      (0, T.Z8)({
                        rootCommand: e,
                        command: e,
                        applicationId: e.application_id,
                      }),
                    ),
                  )
                : ey(void 0);
            }
          }, [eB]);
        let eU = w.ZP.getApplicationIconURL({
            id:
              null !== (l = null == eB ? void 0 : eB.id) && void 0 !== l
                ? l
                : "-1",
            icon: null == eB ? void 0 : eB.icon,
            size: ev,
          }),
          eY = (0, R.Z)({
            id:
              null !== (c = null == eB ? void 0 : eB.id) && void 0 !== c
                ? c
                : "",
            label: eI.Z.Messages.COPY_ID_APPLICATION,
          }),
          { canInstall: eW, install: eV } = (0, q.P)(eB, f),
          ez =
            null === (n = (0, en.getPreviousView)()) || void 0 === n
              ? void 0
              : n.type;
        a.useEffect(() => {
          (null == eB ? void 0 : eB.id) != null &&
            k.default.track(e_.rMx.APP_DIRECTORY_PAGE_VIEWED, {
              current_page: "product",
              previous_page: ez,
              application_id: eB.id,
              guild_id: f,
              shown_mutual_guilds_count: ek.length,
              profile_section: I,
              referrer: document.referrer,
            });
        }, [null == eB ? void 0 : eB.id, f, ek]);
        let eK = a.useMemo(() => {
            var e;
            let n =
              null == eB
                ? void 0
                : null === (e = eB.install_params) || void 0 === e
                  ? void 0
                  : e.permissions;
            if (null != n) return y.VY.filter((e) => _.e$(_.vB(n), e));
          }, [
            null == eB
              ? void 0
              : null === (r = eB.install_params) || void 0 === r
                ? void 0
                : r.permissions,
          ]),
          eq = a.useCallback(
            (e) => {
              ej(e),
                (null == eB ? void 0 : eB.id) != null &&
                  k.default.track(e_.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                    application_id: eB.id,
                    guild_id: f,
                    tab_name: e,
                  });
            },
            [null == eB ? void 0 : eB.id, f, ej],
          ),
          eX = a.useMemo(() => {
            var e, n, t;
            return null !==
              (t = (
                null !==
                  (n =
                    null == eB
                      ? void 0
                      : null === (e = eB.directory_entry) || void 0 === e
                        ? void 0
                        : e.carousel_items) && void 0 !== n
                  ? n
                  : []
              )
                .map(eS)
                .filter(H.lm)) && void 0 !== t
              ? t
              : [];
          }, [eB]),
          eJ = a.useCallback(
            (e, n) => {
              if (e.type === e_.s9s.IMG) {
                let n = eX.filter((e) => e.type === e_.s9s.IMG),
                  a = n.findIndex((n) => n === e);
                if (a < 0) return;
                let r = n.map((e) => ({
                  url: (0, C.Q)(e.src),
                  original: e.src,
                  width: e.width,
                  height: e.height,
                  type: "IMAGE",
                }));
                (0, h.openModalLazy)(
                  async () => {
                    let { default: e } = await Promise.resolve().then(
                      t.bind(t, 950120),
                    );
                    return (n) =>
                      (0, i.jsx)(e, {
                        ...n,
                        items: r,
                        startingIndex: a,
                        fit: O.D.CONTAIN,
                        shouldHideMediaOptions: !0,
                        shouldAnimateCarousel: !0,
                      });
                  },
                  { modalKey: ep.U },
                );
              }
            },
            [eX],
          ),
          eQ = a.useCallback(
            (e) => {
              (null == eB ? void 0 : eB.id) != null &&
                k.default.track(e_.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                  current_page: "product",
                  category: e.name,
                  category_id: e.id,
                  application_id: eB.id,
                  guild_id: f,
                }),
                (0, et.goToCategory)({ categoryId: e.id });
            },
            [eB, f],
          );
        a.useEffect(() => {
          if (null != p) Y.T4({ applicationId: p, guildId: f });
        }, [p, f]);
        let e$ = a.useCallback(
            (e) => {
              let { application: n, mutualGuilds: t } = e;
              (null == eB ? void 0 : eB.id) != null &&
                k.default.track(e_.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                  current_page: "product",
                  application_id: eB.id,
                  suggested_application_id: n.id,
                  load_id: eP,
                  guild_id: f,
                  shown_mutual_guilds_count: t.length,
                }),
                (0, et.goToApplication)({ applicationId: n.id });
            },
            [null == eB ? void 0 : eB.id, eP, f],
          ),
          e0 = a.useCallback(() => {
            null != eB &&
              (0, x.Z)((0, er.G)({ id: eB.id, name: eB.name, locale: eM }));
          }, [eM, eB]),
          e1 = a.useCallback(
            (e) =>
              (0, i.jsxs)(h.Menu, {
                navId: "application-directory-profile",
                "aria-label":
                  eI.Z.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
                onClose: e,
                onSelect: void 0,
                children: [
                  (0, i.jsx)(h.MenuGroup, {
                    children: (0, i.jsx)(h.MenuItem, {
                      id: "report",
                      label: eI.Z.Messages.REPORT_APP,
                      color: "danger",
                      action: e0,
                    }),
                  }),
                  null != eY ? (0, i.jsx)(h.MenuGroup, { children: eY }) : null,
                ],
              }),
            [eY, e0],
          ),
          [e6, e5] = (0, E.Z)(!1, 1e3),
          e3 = a.useCallback(() => {
            if (null != eB)
              k.default.track(e_.rMx.APP_SHARE_BUTTON_CLICKED, {
                source: "product_page",
                application_id: eB.id,
                guild_id: f,
              }),
                (0, F.JG)(ex(eB.id)),
                e5(!0);
          }, [eB, e5, f]);
        a.useEffect(() => {
          let e = new URL(location.href);
          if (b && "true" === e.searchParams.get(eE)) {
            e.searchParams.delete(eE);
            let n = e.pathname + e.search;
            (0, j.dL)(n), eV("product_page");
          }
        }, [b, eV]);
        let e8 = a.useCallback(() => {
            if (null != eB) {
              if ((u.tq || u.Em) && null == eB.custom_install_url) {
                let e = (0, U.Er)({
                  applicationId: eB.id,
                  customInstallUrl: eB.custom_install_url,
                  installParams: eB.install_params,
                  integrationTypesConfig: eB.integration_types_config,
                });
                if (null != e) {
                  window.open(e, "_blank");
                  return;
                }
              }
              b
                ? eV("product_page")
                : (k.default.track(e_.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: p,
                    guild_id: f,
                    auth_type:
                      null != eB.custom_install_url ? "custom_url" : "in_app",
                    source: "product_page",
                    device_platform: u.tq ? "mobile_web" : "desktop_web",
                  }),
                  (0, X.rf)({ [eE]: "true" }));
            }
          }, [eB, b, eV, p, f]),
          e9 = (null == eB ? void 0 : eB.id) === em.g,
          [e2, e4] = a.useState(!1),
          [e7, ne] = a.useState(!1),
          [nn, nt] = a.useState(!0),
          ni = (e) => {
            null != e && e4(e.scrollHeight > e.clientHeight);
          },
          na = null != eK && eK.length > 0,
          nr = (null == eB ? void 0 : eB.flags) != null,
          no = (0, P.R)(null != p ? p : "");
        a.useEffect(() => {
          no && null != p && (0, S.Z)(p);
        }, [no, p]);
        let nl = a.useMemo(() => {
            let e = [],
              n = !0;
            switch (I) {
              case eu.ApplicationDirectoryProfileSections.GENERAL: {
                var t, a;
                let r =
                  null == eB
                    ? void 0
                    : null === (t = eB.directory_entry) || void 0 === t
                      ? void 0
                      : t.detailed_description;
                null != r && r.length > 0
                  ? (e.push(
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(h.Heading, {
                            className: ef.sectionHeader,
                            variant: "heading-md/semibold",
                            children:
                              eI.Z.Messages
                                .APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING,
                          }),
                          (0, i.jsx)("div", {
                            ref: ni,
                            className: o()({
                              [ef.descriptionClamp]: !e7,
                              [ef.descriptionClampSafari]:
                                !e7 && "Safari" === s().name,
                            }),
                            children: (0, i.jsx)(L.Z, {
                              className: ef.detailedDescription,
                              parser: eg,
                              output: eC,
                              state: { allowLinks: !0 },
                              children: r,
                            }),
                          }),
                          (e2 || e7) &&
                            (0, i.jsx)(eA, {
                              isViewAll: e7,
                              onToggle: () => {
                                ne((e) => !e);
                              },
                            }),
                        ],
                      }),
                    ),
                    (n = !1))
                  : (null == eB
                        ? void 0
                        : null === (a = eB.directory_entry) || void 0 === a
                          ? void 0
                          : a.short_description) !== void 0
                    ? e.push(
                        (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(h.Heading, {
                              className: ef.sectionHeader,
                              variant: "heading-md/semibold",
                              children:
                                eI.Z.Messages
                                  .APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING,
                            }),
                            (0, i.jsx)("span", {
                              children: eB.directory_entry.short_description,
                            }),
                          ],
                        }),
                      )
                    : (null == eB ? void 0 : eB.description) != null &&
                      e.push(
                        (0, i.jsx)(D.Z, {
                          className: ef.description,
                          userBio: eB.description,
                        }),
                      ),
                  null != eO &&
                    eO.length > 0 &&
                    (e.push(
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(h.Heading, {
                            className: ef.sectionHeader,
                            variant: "heading-md/semibold",
                            children:
                              eI.Z.Messages
                                .APP_DIRECTORY_PROFILE_COMMANDS_HEADING,
                          }),
                          (0, i.jsx)(eo.Z, {
                            className: ef.commandList,
                            commands: eO,
                          }),
                        ],
                      }),
                    ),
                    (n = !0));
                break;
              }
              case eu.ApplicationDirectoryProfileSections.IMAGES: {
                if (0 === eX.length) break;
                let n = (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("img", {
                      className: ef.errorImage,
                      src: eh,
                      "aria-hidden": !0,
                      alt: "",
                    }),
                    (0, i.jsx)(h.Heading, {
                      variant: "heading-xl/semibold",
                      children: eI.Z.Messages.ERRORS_IMAGE_NOT_FOUND,
                    }),
                  ],
                });
                eX.forEach((e, n) => {
                  null != eB
                    ? (e.alt =
                        eI.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format(
                          {
                            index: n + 1,
                            totalImages: eX.length,
                            name: eB.name,
                          },
                        ))
                    : (e.alt =
                        eI.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT);
                }),
                  e.push(
                    (0, i.jsx)(v.Z, {
                      className: ef.carousel,
                      themedPagination: !0,
                      items: eX,
                      autoplayInterval: 8e3,
                      paused: !eD,
                      videoAutoPlay: !0,
                      onCurrentItemClick: eJ,
                      errorComponent: n,
                      onImageLoad: (e) => {
                        let { src: n, loadTimeMs: t } = e;
                        null != t &&
                          null != eB &&
                          k.default.track(
                            e_.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED,
                            { application_id: eB.id, load_time_ms: t, src: n },
                          );
                      },
                    }),
                  );
                break;
              }
              case eu.ApplicationDirectoryProfileSections.STORE:
                no && null != p && e.push((0, i.jsx)(ea.M, { appId: p }));
                break;
              case eu.ApplicationDirectoryProfileSections.PRIVACY:
                na &&
                  e.push(
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(h.Heading, {
                          className: ef.sectionHeader,
                          variant: "heading-md/semibold",
                          children:
                            eI.Z.Messages
                              .APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING,
                        }),
                        (0, i.jsx)(g.Z, {
                          className: ef.commandList,
                          grantedPermissions: eK,
                          grantedPermissionsHeader:
                            eI.Z.Messages
                              .APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING,
                        }),
                      ],
                    }),
                  ),
                  nr &&
                    e.push(
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(h.Heading, {
                            className: ef.sectionHeader,
                            variant: "heading-md/semibold",
                            children:
                              eI.Z.Messages
                                .APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING,
                          }),
                          (0, i.jsx)(el.Z, { application: eB }),
                        ],
                      }),
                    );
            }
            return (
              nt(n),
              0 === e.length &&
                I !== eu.ApplicationDirectoryProfileSections.GENERAL &&
                null != eB &&
                eG(),
              e.map((e, n) =>
                (0, i.jsx)("div", { className: ef.section, children: e }, n),
              )
            );
          }, [I, eG, eB, eO, e7, e2, eX, eD, eJ, no, p, na, nr, eK]),
          ns = a.useMemo(() => {
            let e = [
              {
                name: eu.ApplicationDirectoryProfileSections.GENERAL,
                text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL,
                Icon: h.AppsIcon,
              },
            ];
            return (
              eX.length > 0 &&
                e.push({
                  name: eu.ApplicationDirectoryProfileSections.IMAGES,
                  text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES,
                  Icon: h.ImagesIcon,
                }),
              no &&
                e.push({
                  name: eu.ApplicationDirectoryProfileSections.STORE,
                  text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
                  Icon: h.ShopSparkleIcon,
                }),
              (na || nr) &&
                e.push({
                  name: eu.ApplicationDirectoryProfileSections.PRIVACY,
                  text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
                  Icon: h.PrivacyAndSafetyIcon,
                }),
              e
            );
          }, [eX.length, na, nr, no]);
        return (
          (d =
            null == eB
              ? null == eL || eL === W.M.FETCHING
                ? (0, i.jsx)($.Z, { loading: eL === W.M.FETCHING })
                : (0, i.jsx)("div", {
                    className: ef.__invalid_page,
                    children: (0, i.jsxs)("div", {
                      className: ef.emptyContainer,
                      children: [
                        (0, i.jsx)("img", {
                          className: ef.emptyImage,
                          src: eh,
                          alt: "",
                        }),
                        (0, i.jsx)(h.Heading, {
                          variant: "heading-xl/semibold",
                          children:
                            eI.Z.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING,
                        }),
                      ],
                    }),
                  })
              : (0, i.jsxs)($.Z, {
                  loading: eL === W.M.FETCHING,
                  children: [
                    (0, i.jsx)(eR, { app: eB, iconSrc: eU }),
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
                                  width: ev,
                                  height: ev,
                                }),
                                (0, i.jsx)(Q.Z, {
                                  application: eB,
                                  mutualGuilds: ek,
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
                                          children: eB.name,
                                        }),
                                        no &&
                                          (0, i.jsx)(h.Tooltip, {
                                            tooltipClassName:
                                              ef.premiumIconTooltip,
                                            text: eI.Z.Messages
                                              .APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                            children: (e) =>
                                              (0, i.jsx)("img", {
                                                ...e,
                                                alt: eI.Z.Messages
                                                  .APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                className: ef.premiumIcon,
                                                src: t(744050),
                                              }),
                                          }),
                                        e9 &&
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
                                          children: e6
                                            ? eI.Z.Messages
                                                .INTEGRATIONS_WEBHOOK_COPIED_URL
                                            : eI.Z.Messages
                                                .APP_DIRECTORY_PROFILE_SHARE_BUTTON,
                                        }),
                                        (0, i.jsx)(h.Button, {
                                          color: h.Button.Colors.BRAND,
                                          onClick: e8,
                                          disabled: !eW,
                                          children:
                                            eI.Z.Messages
                                              .APPLICATION_ADD_BUTTON,
                                        }),
                                        (0, i.jsx)(h.Popout, {
                                          renderPopout: (e) => {
                                            let { closePopout: n } = e;
                                            return e1(n);
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
                                  activeSection: I,
                                  setSection: eq,
                                  sections: ns,
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
                                nl,
                                null != eN && eN.length > 0
                                  ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                        nn &&
                                          (0, i.jsx)("div", {
                                            className: ef.separator,
                                          }),
                                        (0, i.jsxs)("div", {
                                          className: ef.section,
                                          children: [
                                            (0, i.jsx)(h.Heading, {
                                              className: ef.relatedHeader,
                                              variant: "eyebrow",
                                              children:
                                                eI.Z.Messages
                                                  .APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING,
                                            }),
                                            (0, i.jsx)($.Z, {
                                              loading: A,
                                              children: (0, i.jsx)(J.Z, {
                                                applications: eN,
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
                              application: eB,
                              guildId: f,
                              onViewCategory: eQ,
                              onClickGuildWidget: eH,
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
      function eS(e) {
        switch (e.type) {
          case b.ee.MEDIA_PROXY:
            var n;
            let t = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
            return { type: e_.s9s.IMG, width: 0, height: 0, src: t };
          case b.ee.YOUTUBE:
            let i = eT(e.url);
            if (null != i)
              return { type: e_.s9s.YOUTUBE_VIDEO, youtubeVideoId: i };
        }
        return console.warn("Unsupported carousel item", e), null;
      }
      let eA = (e) => {
          let n,
            { onToggle: t, isViewAll: a } = e;
          return (
            (n = a
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(h.Text, {
                      className: ef.showMoreButtonText,
                      variant: "eyebrow",
                      children: eI.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS,
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
                      children: eI.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE,
                    }),
                    (0, i.jsx)(h.ChevronSmallDownIcon, {
                      size: "md",
                      color: "currentColor",
                      className: ef.showMoreButtonIcon,
                    }),
                  ],
                })),
            (0, i.jsx)(eN, {
              children: (0, i.jsx)(h.Button, {
                look: h.Button.Looks.BLANK,
                color: h.Button.Colors.TRANSPARENT,
                size: h.Button.Sizes.NONE,
                className: ef.showMoreButton,
                innerClassName: ef.showMoreButtonInner,
                onClick: t,
                children: n,
              }),
            })
          );
        },
        eN = (e) => {
          let { className: n, contentClassName: t, children: a } = e;
          return (0, i.jsxs)("div", {
            className: o()([ef.dividerContainer, n]),
            children: [
              (0, i.jsx)("div", { className: ef.divider }),
              null != a
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("div", {
                        className: o()(ef.contentDivider, t),
                        children: a,
                      }),
                      (0, i.jsx)("div", { className: ef.divider }),
                    ],
                  })
                : null,
            ],
          });
        };
      function eR(e) {
        let { app: n, iconSrc: t } = e,
          r = (0, A.ZP)(t, I.Z.unsafe_rawColors.PRIMARY_800.css),
          { bot: o } = n,
          l = a.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != o) {
              let n = (0, w.aN)({
                id: o.id,
                banner: o.banner,
                size: 1024,
                canAnimate: !1,
              });
              null != n &&
                ((e["--custom-background-static"] = "url(".concat(n)),
                (e.height = "auto"));
              let t = (0, w.xR)(o.banner)
                ? (0, w.aN)({
                    id: o.id,
                    banner: o.banner,
                    size: 1024,
                    canAnimate: !0,
                  })
                : null;
              null != t &&
                (e["--custom-background-animated"] = "url(".concat(t));
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
    527564: function (e, n, t) {
      t.d(n, {
        M: function () {
          return E;
        },
      }),
        t(789020);
      var i = t(735250),
        a = t(470079),
        r = t(120356),
        o = t.n(r),
        l = t(442837),
        s = t(481060),
        c = t(765717),
        d = t(283836),
        u = t(507608),
        _ = t(147496),
        p = t(955335),
        m = t(519896),
        I = t(171246),
        f = t(55563),
        h = t(147890),
        g = t(272242),
        C = t(981631),
        v = t(689938),
        b = t(778452);
      function E(e) {
        let { appId: n } = e,
          { subscriptions: t, otps: a } = (0, d.q)(n);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            t.length > 0 &&
              (0, i.jsxs)("div", {
                className: b.productSection,
                children: [
                  (0, i.jsx)(p.r, { subscriptions: t }),
                  (0, i.jsx)("div", {
                    className: o()(b.productList, b.subList),
                    children: t.map((e) =>
                      (0, i.jsx)(
                        u.zz,
                        {
                          appId: n,
                          listing: e,
                          subscriptionType: (0, I.KW)(e.skuFlags)
                            ? "user"
                            : "guild",
                          onDetails: () => {
                            (0, h.goToApplicationStoreSku)({
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
            a.length > 0 &&
              (0, i.jsxs)("div", {
                className: b.productSection,
                children: [
                  (0, i.jsx)(s.Heading, {
                    variant: "heading-lg/semibold",
                    children: v.Z.Messages.STOREFRONT_APP_PRODUCTS,
                  }),
                  (0, i.jsx)("div", {
                    className: o()(b.productList, b.itemList),
                    children: a.map((e) =>
                      (0, i.jsx)(
                        u.hd,
                        {
                          skuId: e.skuId,
                          appId: n,
                          onDetails: () => {
                            (0, h.goToApplicationStoreSku)({
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
              path: C.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                ":applicationId",
                ":skuId",
              ),
              exact: !0,
              render: (e) => (0, i.jsx)(x, { ...e }),
            }),
          ],
        });
      }
      function x(e) {
        let {
            match: {
              params: { applicationId: n, skuId: t },
            },
          } = e,
          r = (0, l.e7)([f.Z], () => f.Z.get(t), [t]),
          o = (0, l.e7)(
            [f.Z],
            () => (null != t ? f.Z.getParentSKU(t) : void 0),
            [t],
          ),
          c = a.useId();
        return (
          a.useLayoutEffect(() => {
            switch (null == r ? void 0 : r.type) {
              case C.epS.CONSUMABLE:
              case C.epS.DURABLE:
                return (function (e, n, t) {
                  (0, s.openModal)(
                    (e) => {
                      let { onClose: a, transitionState: r } = e;
                      return (0, i.jsx)(_.ItemDetailsModal, {
                        appId: n,
                        skuId: t,
                        onClose: a,
                        transitionState: r,
                      });
                    },
                    {
                      modalKey: e,
                      onCloseCallback() {
                        !T() &&
                          (0, h.goToApplicationSection)({
                            applicationId: n,
                            section:
                              g.ApplicationDirectoryProfileSections.STORE,
                          });
                      },
                    },
                  );
                })(c, n, t);
              case C.epS.SUBSCRIPTION:
                if ((null == o ? void 0 : o.flags) == null) return;
                return (function (e, n, t, a) {
                  (0, s.openModal)(
                    (e) => {
                      let { onClose: r, transitionState: o } = e;
                      return (0, i.jsx)(m.SubscriptionDetailsModal, {
                        appId: n,
                        subscriptionType: (0, I.KW)(a) ? "user" : "guild",
                        skuId: t,
                        guildId: null,
                        onClose: r,
                        transitionState: o,
                      });
                    },
                    {
                      modalKey: e,
                      onCloseCallback() {
                        !T() &&
                          (0, h.goToApplicationSection)({
                            applicationId: n,
                            section:
                              g.ApplicationDirectoryProfileSections.STORE,
                          });
                      },
                    },
                  );
                })(c, n, t, o.flags);
            }
          }, [
            n,
            c,
            null == o ? void 0 : o.flags,
            null == r ? void 0 : r.type,
            t,
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
      function T() {
        return window.location.pathname.startsWith("/login");
      }
    },
    940064: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        r = t.n(a),
        o = t(481060),
        l = t(665692),
        s = t(992534);
      function c(e) {
        let { commands: n, className: t } = e;
        return (0, i.jsx)("div", {
          className: r()(s.list, t),
          children: n.map((e) =>
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
    626004: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      }),
        t(789020);
      var i = t(735250),
        a = t(470079),
        r = t(120356),
        o = t.n(r),
        l = t(481060),
        s = t(860719),
        c = t(63063),
        d = t(49012),
        u = t(981631),
        _ = t(689938),
        p = t(568161);
      let m = c.Z.getArticleURL(u.BhN.BOT_DATA_ACCESS);
      function I(e) {
        let { icon: n, heading: t, body: a } = e;
        return (0, i.jsxs)("li", {
          className: p.intentContainer,
          children: [
            (0, i.jsx)("div", {
              children: (0, i.jsx)(n, { color: "currentColor", size: "md" }),
            }),
            (0, i.jsxs)("div", {
              className: p.intentTextContainer,
              children: [
                (0, i.jsx)("div", {
                  children: (0, i.jsx)(l.Heading, {
                    variant: "eyebrow",
                    color: "header-secondary",
                    children: t,
                  }),
                }),
                (0, i.jsx)("div", {
                  className: p.intentBody,
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
      function f(e) {
        let { application: n } = e,
          {
            hasMessageContent: t,
            hasGuildPresences: r,
            hasGuildMembers: c,
            hasIntents: u,
          } = (0, s.w)({ flags: null == n ? void 0 : n.flags }),
          f = a.useCallback(() => {
            (null == n ? void 0 : n.privacy_policy_url) != null &&
              (0, d.q)({ href: n.privacy_policy_url });
          }, [null == n ? void 0 : n.privacy_policy_url]);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            u &&
              (0, i.jsx)("div", {
                className: p.intentsListHeading,
                children: (0, i.jsx)(l.Text, {
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
                      t &&
                        (0, i.jsx)(I, {
                          icon: l.ChatIcon,
                          heading:
                            _.Z.Messages
                              .APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_HEADING,
                          body: _.Z.Messages
                            .APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_BODY,
                        }),
                      r &&
                        (0, i.jsx)(I, {
                          icon: l.UserCircleStatusIcon,
                          heading:
                            _.Z.Messages
                              .APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_HEADING,
                          body: _.Z.Messages
                            .APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_BODY,
                        }),
                      c &&
                        (0, i.jsx)(I, {
                          icon: l.GroupIcon,
                          heading:
                            _.Z.Messages
                              .APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_HEADING,
                          body: _.Z.Messages
                            .APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_BODY,
                        }),
                    ],
                  }),
                (0, i.jsxs)("div", {
                  className: o()({ [p.hasSeparator]: u }),
                  children: [
                    (0, i.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: _.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
                        helpCenterUrl: m,
                      }),
                    }),
                    (null == n ? void 0 : n.privacy_policy_url) != null &&
                      (0, i.jsx)(l.Text, {
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
    214912: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        r = t.n(a),
        o = t(481060),
        l = t(410030),
        s = t(686546),
        c = t(565138),
        d = t(372769),
        u = t(134432),
        _ = t(601964),
        p = t(768581),
        m = t(981631),
        I = t(689938),
        f = t(660857),
        h = t(129512),
        g = t(330065);
      function C(e) {
        let { guild: n, className: t, onClick: a } = e,
          C = (0, l.ZP)(),
          v = new _.ZP({ name: n.name, icon: n.icon }),
          b = p.ZP.getGuildDiscoverySplashURL({
            id: n.id,
            splash: n.discovery_splash,
            size: 192 * (0, u.x_)(),
          }),
          E =
            null != b
              ? b
              : (function (e) {
                  switch (e) {
                    case m.BRd.DARK:
                      return h;
                    case m.BRd.LIGHT:
                      return g;
                  }
                })(C),
          x = p.ZP.getGuildIconURL({ id: n.id, icon: n.icon, size: 50 });
        return (0, i.jsxs)(o.Clickable, {
          className: r()(f.card, t),
          onClick: a,
          "aria-label": I.Z.Messages.APP_DIRECTORY_JOIN_SERVER_LABEL,
          children: [
            (0, i.jsxs)("div", {
              className: f.cardHeader,
              children: [
                (0, i.jsx)("img", {
                  src: E,
                  alt: "",
                  className: f.splashImage,
                }),
                (0, i.jsx)("div", {
                  className: f.guildIcon,
                  children: (0, i.jsx)(s.ZP, {
                    mask: s.ZP.Masks.AVATAR_DEFAULT,
                    width: 58,
                    height: 58,
                    children: (0, i.jsx)("div", {
                      className: f.iconMask,
                      children: (0, i.jsx)(c.Z, {
                        className: f.__invalid_icon,
                        iconSrc: x,
                        guild: v,
                        size: c.Z.Sizes.LARGE,
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: f.cardDetails,
              children: [
                (0, i.jsxs)("div", {
                  className: f.guildNameWrapper,
                  children: [
                    (0, i.jsx)(d.Z, {
                      className: f.guildBadge,
                      guild: n,
                      tooltipColor: o.Tooltip.Colors.PRIMARY,
                    }),
                    (0, i.jsx)(o.Heading, {
                      variant: "heading-md/semibold",
                      className: f.guildName,
                      children: n.name,
                    }),
                  ],
                }),
                (0, i.jsx)(o.Text, {
                  className: f.guildDescription,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  lineClamp: 2,
                  children: n.description,
                }),
                (0, i.jsx)("div", {
                  className: f.memberInfo,
                  children: (0, i.jsxs)("div", {
                    className: f.memberCountWrapper,
                    children: [
                      (0, i.jsx)(o.UserIcon, {
                        color: "currentColor",
                        className: f.memberCountIcon,
                        size: "xs",
                      }),
                      (0, i.jsx)(o.Text, {
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
    939893: function (e, n, t) {
      var i = t(735250);
      t(470079);
      var a = t(302454),
        r = t.n(a),
        o = t(481060),
        l = t(447543),
        s = t(15470),
        c = t(960904),
        d = t(830121),
        u = t(746878),
        _ = t(241209);
      let p = /^discord.gg\/[a-zA-Z0-9-]+/,
        m = {
          ..._.Z.rules,
          heading: { ...s.i.heading },
          image: { ...r().defaultRules.image },
          inviteLink: {
            order: _.Z.rules.link.order + 1,
            match: (e, n) => (n.inline ? p.exec(e) : null),
            parse: (e, n, t) => {
              let i = (0, d.zO)(e[0]);
              return null == i || i.type !== c.g.INVITE
                ? { type: "text", content: e[0] }
                : {
                    type: "inviteLink",
                    content: [{ type: "text", content: e[0] }],
                    onClick: () => {
                      var e;
                      l.Z.acceptInviteAndTransitionToInviteChannel({
                        inviteKey: i.code,
                        context: { location: "Application Directory" },
                      }),
                        null === (e = t.closeModal) ||
                          void 0 === e ||
                          e.call(t);
                    },
                  };
            },
            react: (e, n, t) =>
              (0, i.jsx)(
                o.Anchor,
                {
                  onClick: (n) => {
                    n.preventDefault(), e.onClick();
                  },
                  children: (0, u.S)(e, n, t),
                },
                t.key,
              ),
          },
        };
      n.Z = m;
    },
    430913: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      }),
        t(47120),
        t(653041),
        t(610138),
        t(216116),
        t(78328),
        t(815648);
      var i = t(735250),
        a = t(470079),
        r = t(120356),
        o = t.n(r),
        l = t(780384),
        s = t(481060),
        c = t(794295),
        d = t(410030),
        u = t(726542),
        _ = t(626135),
        p = t(463571),
        m = t(887706),
        I = t(214912),
        f = t(290247),
        h = t(981631),
        g = t(689938),
        C = t(319333);
      let v = g.Z.getAvailableLocales();
      function b(e) {
        var n, t, a;
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
              : null === (t = p.icon) || void 0 === t
                ? void 0
                : t.lightSVG;
        return (0, i.jsx)(E, {
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
      function E(e) {
        let {
            icon: n,
            imageSrc: t,
            iconColor: a,
            url: r,
            type: l,
            children: d,
            onClick: u,
          } = e,
          _ = (0, m.Z)(),
          p = null;
        null != n
          ? (p = (0, i.jsx)(n, {
              className: C.listIcon,
              color: null != a ? a : "currentColor",
              width: 20,
              height: 20,
              size: "custom",
            }))
          : null != t &&
            (p = (0, i.jsx)("img", {
              className: C.listImage,
              src: t,
              alt: "",
            }));
        let I = (0, i.jsxs)(i.Fragment, {
          children: [
            p,
            (0, i.jsx)(s.Text, {
              className: C.listText,
              variant: "text-md/normal",
              selectable: !0,
              children: d,
            }),
          ],
        });
        return (0, i.jsx)(c.Z, {
          href: r,
          className: o()(C.listItem, C.linkItem),
          onClick: () => (u(r, l), !1),
          trusted: !_,
          useDefaultUnderlineStyles: !1,
          children: I,
        });
      }
      function x(e) {
        var n, t, r;
        let {
            application: l,
            guildId: c,
            className: d,
            onViewCategory: u,
            onClickGuildWidget: m,
          } = e,
          [x, T] = a.useState(null),
          P = [],
          S =
            null !==
              (t =
                null == l
                  ? void 0
                  : null === (n = l.directory_entry) || void 0 === n
                    ? void 0
                    : n.external_urls) && void 0 !== t
              ? t
              : [];
        a.useEffect(() => {
          var e;
          if (
            (null === (e = l.directory_entry) || void 0 === e
              ? void 0
              : e.supported_locales) !== void 0
          ) {
            let e = new Set(l.directory_entry.supported_locales);
            T(v.filter((n) => e.has(n.value)).map((e) => e.localizedName));
          }
        }, [l.directory_entry]);
        let A = (e, n) => {
          _.default.track(
            h.rMx.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED,
            { application_id: l.id, guild_id: c, type: n, url: e },
          );
        };
        return (
          null != l.categories &&
            l.categories.length > 0 &&
            P.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(s.Heading, {
                    className: C.sectionHeader,
                    variant: "eyebrow",
                    children:
                      g.Z.Messages.APP_DIRECTORY_PROFILE_CATEGORIES_HEADING,
                  }),
                  (0, i.jsx)("div", {
                    className: C.categories,
                    children: (null !== (r = l.categories) && void 0 !== r
                      ? r
                      : []
                    ).map((e) => {
                      let n = new URLSearchParams();
                      return (
                        n.set("category_id", e.id.toString()),
                        (0, i.jsx)(
                          p.Z,
                          {
                            href: ""
                              .concat(h.Z5c.APPLICATION_DIRECTORY_SEARCH, "?")
                              .concat(n),
                            children: (0, i.jsx)(s.Clickable, {
                              className: C.category,
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
          null != x &&
            x.length > 0 &&
            P.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(s.Heading, {
                    className: C.sectionHeader,
                    variant: "eyebrow",
                    children:
                      g.Z.Messages.APP_DIRECTORY_PROFILE_LANGUAGES_HEADING,
                  }),
                  (0, i.jsx)(f.Z, { supportedLanguages: x }),
                ],
              }),
            ),
          (null != l.terms_of_service_url ||
            null != l.privacy_policy_url ||
            S.length > 0) &&
            P.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(s.Heading, {
                    className: C.sectionHeader,
                    variant: "eyebrow",
                    children: g.Z.Messages.APP_DIRECTORY_PROFILE_LINKS_HEADING,
                  }),
                  S.map((e, n) =>
                    (0, i.jsx)(
                      b,
                      { url: e.url, onClick: A, children: e.name },
                      n,
                    ),
                  ),
                  null != l.terms_of_service_url
                    ? (0, i.jsx)(E, {
                        icon: s.LinkIcon,
                        onClick: A,
                        url: l.terms_of_service_url,
                        type: "tos",
                        children: g.Z.Messages.APP_DIRECTORY_PROFILE_TERMS_LINK,
                      })
                    : null,
                  null != l.privacy_policy_url
                    ? (0, i.jsx)(E, {
                        icon: s.LockIcon,
                        onClick: A,
                        url: l.privacy_policy_url,
                        type: "policy",
                        children:
                          g.Z.Messages.APP_DIRECTORY_PROFILE_PRIVACY_LINK,
                      })
                    : null,
                ],
              }),
            ),
          null != l.guild &&
            l.guild.features.includes(h.oNc.DISCOVERABLE) &&
            P.push(
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(s.Heading, {
                    className: C.sectionHeader,
                    variant: "eyebrow",
                    children: g.Z.Messages.APP_DIRECTORY_PROFILE_SERVER_HEADING,
                  }),
                  (0, i.jsx)(I.Z, { guild: l.guild, onClick: m }),
                ],
              }),
            ),
          (0, i.jsx)("div", {
            className: o()(C.sidebar, d),
            children:
              P.length > 0
                ? (0, i.jsx)(i.Fragment, {
                    children: P.map((e, n) =>
                      (0, i.jsx)(
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
    290247: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        r = t.n(a),
        o = t(481060),
        l = t(769003);
      function s(e) {
        let { supportedLanguages: n } = e;
        return (0, i.jsx)("ul", {
          className: l.outerContainer,
          children: n.map((e) =>
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
    606183: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        r = t(668896);
      function o(e) {
        let { activeSection: n, setSection: t, sections: o } = e;
        return (0, i.jsx)(a.TabBar, {
          selectedItem: n,
          type: "top",
          onItemSelect: t,
          className: r.tabBar,
          children: o.map((e) => {
            let { name: n, text: t, Icon: o } = e;
            return (0, i.jsxs)(
              a.TabBar.Item,
              {
                id: n,
                className: r.tabBarItem,
                "aria-label": t,
                children: [
                  (0, i.jsx)(o, { className: r.icon, color: "currentColor" }),
                  t,
                ],
              },
              n,
            );
          }),
        });
      }
    },
    860719: function (e, n, t) {
      t.d(n, {
        w: function () {
          return a;
        },
      }),
        t(789020);
      var i = t(85025);
      function a(e) {
        let { flags: n } = e,
          t = (0, i.O)(n),
          a =
            null != t &&
            ((null == t ? void 0 : t.messageContent) ||
              (null == t ? void 0 : t.messageContentLimited)),
          r =
            null != t &&
            ((null == t ? void 0 : t.guildPresences) ||
              (null == t ? void 0 : t.guildPresencesLimited)),
          o =
            null != t &&
            ((null == t ? void 0 : t.guildMembers) ||
              (null == t ? void 0 : t.guildMembersLimited));
        return {
          hasMessageContent: a,
          hasGuildPresences: r,
          hasGuildMembers: o,
          hasIntents: a || r || o,
        };
      }
    },
    85025: function (e, n, t) {
      t.d(n, {
        O: function () {
          return r;
        },
      });
      var i = t(630388),
        a = t(981631);
      function r(e) {
        if (null != e)
          return {
            guildPresences: (0, i.yE)(e, a.udG.GATEWAY_PRESENCE),
            guildMembers: (0, i.yE)(e, a.udG.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, i.yE)(e, a.udG.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, i.yE)(e, a.udG.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, i.yE)(
              e,
              a.udG.GATEWAY_GUILD_MEMBERS_LIMITED,
            ),
            messageContentLimited: (0, i.yE)(
              e,
              a.udG.GATEWAY_MESSAGE_CONTENT_LIMITED,
            ),
          };
      }
    },
    679056: function (e, n, t) {
      t(47120);
      var i,
        a = t(735250),
        r = t(470079),
        o = t(846519);
      function l(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      class s extends (i = r.Component) {
        static getDerivedStateFromProps(e) {
          return e.disable ? { hovered: !1 } : null;
        }
        componentDidMount() {
          let { pauseOnHover: e, disable: n } = this.props,
            t = this.state.hovered && e;
          !n && !t && this.startTimer();
        }
        componentWillUnmount() {
          this.stopTimer();
        }
        componentDidUpdate(e, n) {
          let t,
            i,
            a,
            r,
            { props: o } = this;
          let l =
            ((t = o),
            (i = this.state),
            !t.disable && !(i.hovered && t.pauseOnHover));
          let s =
            ((a = e), (r = n), !a.disable && !(r.hovered && a.pauseOnHover));
          (l && !s) || e.interval !== o.interval
            ? this.startTimer()
            : !l && s && this.stopTimer();
        }
        startTimer() {
          let { interval: e, onInterval: n, disable: t } = this.props;
          if (!t)
            this.timer.start(e, () => {
              n();
            });
        }
        stopTimer() {
          this.timer.stop();
        }
        render() {
          let { children: e, className: n, disable: t } = this.props,
            i = t
              ? null
              : {
                  onMouseEnter: this.handlePause,
                  onFocus: this.handlePause,
                  onMouseLeave: this.handleResume,
                  onBlur: this.handleResume,
                };
          return (0, a.jsx)("div", { ...i, className: n, children: e });
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
    578361: function (e, n, t) {
      t.d(n, {
        n: function () {
          return a;
        },
      });
      var i,
        a,
        r = t(735250),
        o = t(470079),
        l = t(120356),
        s = t.n(l),
        c = t(748780),
        d = t(215569),
        u = t(189682);
      ((i = a || (a = {}))[(i.RIGHT = -1)] = "RIGHT"),
        (i[(i.LEFT = 1)] = "LEFT");
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
          var n, t, i;
          super(e),
            (n = this),
            (i = void 0),
            (t = "_animated") in n
              ? Object.defineProperty(n, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (n[t] = i),
            (this._animated = new c.Z.Value(-1 * e.direction));
        }
      }
      n.Z = (e) => {
        let {
          children: n,
          step: t,
          direction: i,
          className: a,
          springSettings: o = _,
          fadeInOut: l = !1,
        } = e;
        return (0, r.jsx)(d.W, {
          component: "div",
          className: s()(u.animator, a),
          children: (0, r.jsx)(
            p,
            { direction: i, springSettings: o, fadeInOut: l, children: n },
            t,
          ),
        });
      };
    },
    106976: function (e, n, t) {
      t.d(n, {
        i1: function () {
          return u;
        },
        rx: function () {
          return d;
        },
        sB: function () {
          return _;
        },
        vY: function () {
          return p;
        },
      }),
        t(47120);
      var i = t(570140),
        a = t(821849),
        r = t(307643),
        o = t(981631);
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
        var n;
        return {
          id: e.id,
          sku: l(e),
          summary: e.description,
          description: e.description,
          benefits:
            null !== (n = e.store_listing_benefits) && void 0 !== n ? n : [],
          thumbnail: e.image_asset,
          published: e.published,
        };
      }
      function c(e) {
        for (let n of (i.Z.dispatch({
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
            skuId: n.id,
            subscriptionPlans: n.subscription_plans,
          });
      }
      async function d(e, n) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: e,
          groupListingId: n,
        });
        try {
          var t;
          let a = await r.jz(e, n);
          return (
            i.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: e,
              groupListing: a,
            }),
            c(null !== (t = a.subscription_listings) && void 0 !== t ? t : []),
            a
          );
        } catch (n) {
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
          let n = await r.GF(e);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
            guildId: e,
            entitlements: n,
          });
        } catch (n) {
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
            guildId: e,
          });
        }
      }
      function _(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
          guildId: e,
        });
      }
      async function p(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
          planId: e,
        });
        try {
          var n;
          let t = await r.a_(e);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: t,
          });
          let o =
            null !== (n = t.subscription_listings) && void 0 !== n ? n : [];
          for (let n of o)
            n.subscription_plans[0].id === e &&
              (await a.GZ(n.id, void 0, void 0, !0));
          c(o);
        } catch (e) {}
      }
    },
    488915: function (e, n, t) {
      t.d(n, {
        M: function () {
          return i;
        },
      }),
        t(47120);
      var i,
        a,
        r,
        o,
        l,
        s,
        c = t(512722),
        d = t.n(c),
        u = t(442837),
        _ = t(759174),
        p = t(570140),
        m = t(959546),
        I = t(55563);
      function f(e) {
        return "subscription_listing:".concat(e);
      }
      function h(e) {
        return "application:".concat(e);
      }
      function g(e) {
        return "plan:".concat(e);
      }
      function C(e, n, t) {
        return "entitlement:".concat(e, ":").concat(t, ":").concat(n);
      }
      function v(e, n) {
        return "entitlement:".concat(n, ":").concat(e);
      }
      ((r = i || (i = {}))[(r.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.FETCHED = 2)] = "FETCHED");
      let b = new _.h(
          (e) => [h(e.application_id), ...e.subscription_listings_ids.map(f)],
          (e) => e.id,
        ),
        E = new _.h(
          (e) => [h(e.application_id), g(e.subscription_plans[0].id)],
          (e) => e.id,
        ),
        x = new _.h(
          (e) => [
            C(e.applicationId, e.isValid(null, I.Z), e.guildId),
            v(e.isValid(null, I.Z), e.guildId),
          ],
          (e) => e.id,
        ),
        T = {},
        P = {};
      function S(e) {
        var n;
        for (let t of (b.set(e.id, e),
        null !== (n = e.subscription_listings) && void 0 !== n ? n : []))
          (function (e) {
            E.set(e.id, e);
          })(t);
      }
      class A extends (a = u.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
          var n;
          return null !== (n = T[e]) && void 0 !== n ? n : 0;
        }
        getSubscriptionGroupListing(e) {
          return b.get(e);
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
          let n = b.values(f(e));
          return (
            d()(n.length <= 1, "Found multiple group listings for listing"),
            n[0]
          );
        }
        getSubscriptionListing(e) {
          return E.get(e);
        }
        getSubscriptionListingsForApplication(e) {
          return E.values(h(e));
        }
        getEntitlementsForGuildFetchState(e) {
          var n;
          return null !== (n = P[e]) && void 0 !== n ? n : 0;
        }
        getSubscriptionListingForPlan(e) {
          let n = E.values(g(e));
          return d()(n.length <= 1, "Found multiple listings for plan"), n[0];
        }
        getApplicationEntitlementsForGuild(e, n) {
          let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return x.values(C(e, t, n));
        }
        getEntitlementsForGuild(e) {
          let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return x.values(v(n, e));
        }
      }
      (s = "ApplicationSubscriptionStore"),
        (l = "displayName") in (o = A)
          ? Object.defineProperty(o, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[l] = s),
        (n.Z = new A(p.Z, {
          LOGOUT: function () {
            b.clear(), E.clear(), x.clear(), (T = {}), (P = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: n, groupListingId: t } = e;
            T[n] = 1;
            let i = b.get(t);
            if (null != i)
              for (let e of i.subscription_listings_ids) E.delete(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: n, groupListing: t } = e;
            (T[n] = 2), S(t);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: n } = e;
            T[n] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: n } = e;
            P[n] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: n, entitlements: t } = e;
            (P[n] = 2),
              t.forEach((e) => {
                let n = m.Z.createFromServer(e);
                x.set(n.id, n);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: n } = e;
            P[n] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            e,
          ) {
            let { groupListing: n } = e;
            S(n);
          },
        }));
    },
    594045: function (e, n, t) {
      e.exports = {
        container: "container_a06168",
        list: "list_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
        permissionHeader: "permissionHeader_a06168",
      };
    },
    161243: function (e, n, t) {
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
    31185: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_b6f1f8",
        slide: "slide_b6f1f8",
        navPrev: "navPrev_b6f1f8 nav_b6f1f8",
        navNext: "navNext_b6f1f8 nav_b6f1f8",
      };
    },
    621839: function (e, n, t) {
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
    499142: function (e, n, t) {
      e.exports = {
        collapsed: "collapsed_e2ea95",
        blurb: "blurb_e2ea95",
        description: "description_e2ea95",
        toggleCollapseButton: "toggleCollapseButton_e2ea95",
        assetWrapper: "assetWrapper_e2ea95",
        asset: "asset_e2ea95",
      };
    },
    310436: function (e, n, t) {
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
    433027: function (e, n, t) {
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
    169909: function (e, n, t) {
      e.exports = {
        listingDescription: "listingDescription_d2c3da",
        bottomGuildCountContainer: "bottomGuildCountContainer_d2c3da",
      };
    },
    558562: function (e, n, t) {
      e.exports = { header: "header_d5abe9", list: "list_d5abe9" };
    },
    488107: function (e, n, t) {
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
    882089: function (e, n, t) {
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
    507716: function (e, n, t) {
      e.exports = {
        container: "container_da6719",
        spinnerContainer: "spinnerContainer_da6719",
        spinner: "spinner_da6719",
        loading: "loading_da6719",
      };
    },
    274679: function (e, n, t) {
      e.exports = { partnerBadge: "partnerBadge_de92a5" };
    },
    613250: function (e, n, t) {
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
    778452: function (e, n, t) {
      e.exports = {
        productSection: "productSection_a9d0f5",
        productList: "productList_a9d0f5",
        subList: "subList_a9d0f5",
        itemList: "itemList_a9d0f5",
      };
    },
    992534: function (e, n, t) {
      e.exports = {
        list: "list_e0307d",
        row: "row_e0307d",
        commandName: "commandName_e0307d",
      };
    },
    568161: function (e, n, t) {
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
    660857: function (e, n, t) {
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
    319333: function (e, n, t) {
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
    769003: function (e, n, t) {
      e.exports = {
        outerContainer: "outerContainer_b51750",
        innerContainer: "innerContainer_b51750",
        languageItem: "languageItem_b51750",
      };
    },
    668896: function (e, n, t) {
      e.exports = {
        tabBar: "tabBar_bc3297",
        tabBarItem: "tabBarItem_bc3297",
        icon: "icon_bc3297",
      };
    },
    335567: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_bfa0f5",
        productSection: "productSection_bfa0f5",
        productList: "productList_bfa0f5",
        legalText: "legalText_bfa0f5",
      };
    },
    213891: function (e, n, t) {
      e.exports = {
        modal: "modal_c5ad85",
        modalHeader: "modalHeader_c5ad85",
        modalTitle: "modalTitle_c5ad85",
        modalHeaderLinks: "modalHeaderLinks_c5ad85",
        containerScrollGradient: "containerScrollGradient_c5ad85",
        modalCloseBtn: "modalCloseBtn_c5ad85",
      };
    },
    566809: function (e, n, t) {
      e.exports = {
        modal: "modal_c48629",
        footer: "footer_c48629",
        footerButtons: "footerButtons_c48629",
        linkButton: "linkButton_c48629",
        innerLinkButton: "innerLinkButton_c48629",
        appIcon: "appIcon_c48629",
      };
    },
    962083: function (e, n, t) {
      e.exports = { btnContent: "btnContent_cdaed4" };
    },
    132313: function (e, n, t) {
      e.exports = { heading: "heading_fcab0f" };
    },
    353947: function (e, n, t) {
      e.exports = { title: "title_eaa702" };
    },
    189682: function (e, n, t) {
      e.exports = { animator: "animator_abd0f1", item: "item_abd0f1" };
    },
    985312: function (e, n, t) {
      e.exports = {
        logo: "logo_b0f834",
        title: "title_b0f834",
        header: "header_b0f834",
      };
    },
    207533: function (e, n, t) {
      e.exports = {
        markdown: "markdown_b97ce2",
        blockquote: "blockquote_b97ce2",
        codeInline: "codeInline_b97ce2",
        paragraph: "paragraph_b97ce2",
      };
    },
    744184: function (e, n, t) {
      e.exports = {
        singleItemWrapper: "singleItemWrapper_e3183f",
        carousel: "carousel_e3183f",
        item: "item_e3183f",
        singleItem: "singleItem_e3183f item_e3183f",
        viewport: "viewport_e3183f",
      };
    },
    665923: function (e, n, t) {
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
    297908: function (e, n, t) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    638635: function (e, n, t) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    130298: function (e, n, t) {
      e.exports = {
        body: "body_bf926b",
        sliderBody: "sliderBody_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
      };
    },
    893896: function (e, n, t) {
      e.exports = {
        container: "container_a3545a",
        header: "header_a3545a",
        divider: "divider_a3545a",
        benefitsContainer: "benefitsContainer_a3545a",
        benefit: "benefit_a3545a",
      };
    },
    622085: function (e, n, t) {
      e.exports = {
        icon: "icon_e10dab",
        small: "small_e10dab",
        medium: "medium_e10dab",
      };
    },
    555730: function (e, n, t) {
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
    600699: function (e, n, t) {
      e.exports = {
        container: "container_ffcaea",
        emojiContainer: "emojiContainer_ffcaea",
        name: "name_ffcaea",
        infoContainer: "infoContainer_ffcaea",
      };
    },
    865244: function (e, n, t) {
      e.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
    698117: function (e, n, t) {
      e.exports = { containerScrollGradient: "containerScrollGradient_c2f634" };
    },
    529079: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    770561: function (e, n, t) {
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
    147333: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_a8220a",
        cardHeaderImg: "cardHeaderImg_a8220a",
        details: "details_a8220a",
        description: "description_a8220a",
        footer: "footer_a8220a",
      };
    },
    56273: function (e, n, t) {
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
    350727: function (e, n, t) {
      e.exports = { container: "container_c99f26" };
    },
    103077: function (e, n, t) {
      e.exports = { hoverCard: "hoverCard_d991d3" };
    },
  },
]);
//# sourceMappingURL=971c8724283aadcc0de5.js.map
