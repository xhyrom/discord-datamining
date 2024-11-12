"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51269"],
  {
    701972: function (e) {
      e.exports = "/assets/71792026f672985a033d.svg";
    },
    818658: function (e) {
      e.exports = "/assets/4dae9f6eefe1407c3cec.svg";
    },
    546826: function (e) {
      e.exports = "/assets/ce7ed73a6aeb1b990d58.svg";
    },
    436267: function (e, n, t) {
      t.d(n, {
        O: function () {
          return l;
        },
        Z: function () {
          return i;
        },
      });
      var r = t(159277);
      function i(e) {
        return (
          r.t.XBOX_APPLICATION_ID === e ||
          r.M.PLAYSTATION_APPLICATION_IDS.has(e)
        );
      }
      function l(e) {
        return i(e);
      }
    },
    149418: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      }),
        t(789020);
      var r = t(630388),
        i = t(981631);
      function l(e) {
        return (
          null != e.flags && (0, r.yE)(e.flags, i.udG.SOCIAL_LAYER_INTEGRATION)
        );
      }
    },
    494620: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
        z: function () {
          return i;
        },
      });
      var r,
        i,
        l = t(200651);
      t(192379);
      var s = t(120356),
        a = t.n(s),
        o = t(481060),
        c = t(179840);
      ((r = i || (i = {})).INFO = "info"), (r.WARNING = "warning");
      let u = { info: c.info, warning: c.warning },
        d = { info: o.CircleInformationIcon, warning: o.CircleWarningIcon };
      function m(e) {
        let { children: n, className: t, look: r = "info" } = e,
          i = d[r];
        return (0, l.jsxs)("div", {
          className: a()(c.root, t, u[r]),
          children: [
            (0, l.jsx)(i, { className: c.icon, color: "currentColor" }),
            (0, l.jsx)(o.Text, {
              className: c.text,
              variant: "text-sm/medium",
              color: "text-normal",
              children: n,
            }),
          ],
        });
      }
    },
    795594: function (e, n, t) {
      t.d(n, {
        J: function () {
          return B;
        },
      }),
        t(653041),
        t(47120);
      var r = t(200651),
        i = t(192379),
        l = t(120356),
        s = t.n(l),
        a = t(658722),
        o = t.n(a),
        c = t(905837),
        u = t(243814),
        d = t(442837),
        m = t(921072),
        x = t(1561),
        h = t(481060),
        p = t(384275),
        f = t(230711),
        N = t(497321),
        I = t(468026),
        T = t(317381),
        g = t(513202),
        _ = t(979200),
        j = t(600164),
        A = t(713938),
        C = t(881998),
        S = t(246946),
        E = t(768581),
        v = t(585483),
        P = t(49012),
        L = t(709054),
        O = t(706454),
        Z = t(210887),
        y = t(436267),
        D = t(149418),
        F = t(494620),
        k = t(981631),
        w = t(388032),
        R = t(822352),
        H = t(113207);
      let b = d.ZP.connectStores([Z.Z], () => ({ theme: Z.Z.theme }))(
        h.EmptyState,
      );
      function U(e) {
        let { application: n } = e;
        return (0, r.jsxs)("div", {
          className: R.twoWayWarning,
          children: [
            (0, r.jsx)(h.CircleInformationIcon, {
              size: "md",
              color: "currentColor",
              className: R.twoWayWarningIcon,
            }),
            (0, r.jsx)(h.Text, {
              color: "text-normal",
              variant: "text-sm/medium",
              children: w.intl.format(w.t.jUhnwc, {
                applicationName: n.name,
                onConnectionPress: () =>
                  f.Z.setSection(k.jXE.SETTINGS_CONNECTIONS),
              }),
            }),
          ],
        });
      }
      let G = (e) => {
          let { disclosure: n } = e;
          return i.useMemo(() => {
            switch (n) {
              case m.u$.IP_LOCATION:
                return (0, r.jsx)(h.GlobeEarthIcon, {
                  size: "md",
                  color: "currentColor",
                  className: R.disclosureIcon,
                });
              case m.u$.DISPLAYS_ADVERTISEMENTS:
                return (0, r.jsx)(h.EmbedIcon, { className: R.disclosureIcon });
              default:
                return (0, r.jsx)(h.CircleInformationIcon, {
                  className: R.disclosureIcon,
                });
            }
          }, [n]);
        },
        M = (e) => {
          let {
              scopes: n,
              application: t,
              onDelete: i,
              disclosures: l,
              locale: a,
              id: o,
            } = e,
            c = () => {
              let e = w.intl.formatToPlainString(w.t.QWGvxM, {
                applicationName: t.name,
              });
              return (
                (0, D.Z)(t) &&
                  (e = (0, r.jsxs)(r.Fragment, {
                    children: [
                      e,
                      (0, r.jsx)(F.Z, {
                        look: F.z.WARNING,
                        className: R.infoBox,
                        children: w.intl.string(w.t.LY35Z2),
                      }),
                    ],
                  })),
                (0, y.Z)(t.id) &&
                  (e = (0, r.jsxs)(r.Fragment, {
                    children: [
                      e,
                      (0, r.jsx)(F.Z, {
                        className: R.infoBox,
                        children: w.intl.format(w.t.KRnERk, {
                          applicationName: t.name,
                        }),
                      }),
                    ],
                  })),
                (0, h.openModal)((n) =>
                  (0, r.jsx)(I.default, {
                    title: w.intl.string(w.t.DT39Aw),
                    body: e,
                    confirmText: w.intl.string(w.t.xUqheH),
                    cancelText: w.intl.string(w.t["ETE/oK"]),
                    onConfirm: i,
                    ...n,
                  }),
                )
              );
            },
            d = () => {
              null != t.terms_of_service_url &&
                (0, P.q)({ href: t.terms_of_service_url, shouldConfirm: !0 });
            },
            m = () => {
              null != t.privacy_policy_url &&
                (0, P.q)({ href: t.privacy_policy_url, shouldConfirm: !0 });
            },
            p = (0, y.O)(t.id);
          return (0, r.jsx)(h.Card, {
            className: s()(R.authedApp, H.marginBottom8),
            outline: !0,
            children: (0, r.jsxs)(h.HeadingLevel, {
              component: (() => {
                let e = E.ZP.getApplicationIconURL({ id: t.id, icon: t.icon }),
                  n =
                    null != e
                      ? (0, r.jsx)(j.Z.Child, {
                          className: R.appAvatar,
                          grow: 0,
                          children: (0, r.jsx)("img", { src: e, alt: "" }),
                        })
                      : null,
                  i = new Date(
                    L.default.extractTimestamp(o),
                  ).toLocaleDateString(a);
                return (0, r.jsxs)("div", {
                  className: s()(R.header, H.marginBottom20),
                  children: [
                    n,
                    (0, r.jsxs)("div", {
                      className: R.headerTextContainer,
                      children: [
                        (0, r.jsx)(h.Heading, {
                          variant: "text-sm/semibold",
                          className: R.headerText,
                          children: t.name,
                        }),
                        (0, r.jsx)(h.Text, {
                          variant: "text-xs/normal",
                          color: "text-normal",
                          children: w.intl.format(w.t.yOApCA, { date: i }),
                        }),
                      ],
                    }),
                    (0, r.jsx)(h.Button, {
                      color: h.ButtonColors.RED,
                      look: h.ButtonLooks.OUTLINED,
                      size: h.ButtonSizes.SMALL,
                      onClick: c,
                      children: w.intl.string(w.t.xUqheH),
                    }),
                  ],
                });
              })(),
              children: [
                (() => {
                  if (null != t.description && "" !== t.description)
                    return (0, r.jsx)(h.FormItem, {
                      faded: !0,
                      title: w.intl.string(w.t.GfRGra),
                      children: (0, r.jsx)(h.FormText, {
                        children: t.description,
                      }),
                    });
                })(),
                (() => {
                  if (
                    null != t.terms_of_service_url ||
                    null != t.privacy_policy_url
                  )
                    return (0, r.jsxs)("div", {
                      className: R.tosPrivacy,
                      children: [
                        null != t.terms_of_service_url
                          ? (0, r.jsxs)(x.P, {
                              tag: "a",
                              onClick: d,
                              className: R.tos,
                              children: [
                                (0, r.jsx)(h.FormText, {
                                  className: R.link,
                                  children: w.intl.string(w.t["lx+GeX"]),
                                }),
                                (0, r.jsx)(h.LinkExternalSmallIcon, {
                                  className: R.externalLinkIcon,
                                  color: "var(--text-link)",
                                }),
                              ],
                            })
                          : null,
                        null != t.privacy_policy_url
                          ? (0, r.jsxs)("div", {
                              className: R.privacy,
                              children: [
                                null != t.terms_of_service_url
                                  ? (0, r.jsx)("div", { className: R.divider })
                                  : null,
                                (0, r.jsxs)(x.P, {
                                  tag: "a",
                                  onClick: m,
                                  className: R.privacy,
                                  children: [
                                    (0, r.jsx)(h.FormText, {
                                      className: R.link,
                                      children: w.intl.string(w.t.okSwq6),
                                    }),
                                    (0, r.jsx)(h.LinkExternalSmallIcon, {
                                      className: R.externalLinkIcon,
                                      color: "var(--text-link)",
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : null,
                      ],
                    });
                })(),
                (() => {
                  let e = [];
                  for (let t of n)
                    e.push(...(0, A.CI)(t, n)),
                      t === u.x.APPLICATIONS_COMMANDS &&
                        e.push(w.intl.string(w.t.Ls2XRk));
                  if (e.length > 0 || (null != l && l.length > 0))
                    return (0, r.jsx)(h.FormItem, {
                      faded: !0,
                      title: w.intl.string(w.t.xrmhRU),
                      className: H.marginTop20,
                      children: (0, r.jsxs)("ul", {
                        children: [
                          e.map((e, n) =>
                            (0, r.jsxs)(
                              "li",
                              {
                                className: s()(R.permission, H.marginTop8),
                                children: [
                                  (0, r.jsx)("i", {
                                    className: R.permissionCheckmark,
                                  }),
                                  (0, r.jsx)(h.FormText, { children: e }),
                                ],
                              },
                              n,
                            ),
                          ),
                          null == l
                            ? void 0
                            : l.map((n, t) => {
                                let i = (0, _.PM)(n);
                                return null != i
                                  ? (0, r.jsxs)(
                                      "li",
                                      {
                                        className: s()(
                                          R.permission,
                                          H.marginTop8,
                                        ),
                                        children: [
                                          (0, r.jsx)(G, { disclosure: n }),
                                          (0, r.jsx)(h.FormText, {
                                            children: i,
                                          }),
                                        ],
                                      },
                                      t + e.length,
                                    )
                                  : null;
                              }),
                        ],
                      }),
                    });
                })(),
                p && (0, r.jsx)(U, { application: t }),
              ],
            }),
          });
        },
        B = (0, c.Ue)(() => ({ searchQuery: "" }));
      n.Z = () => {
        let e = (0, d.e7)([S.Z], () => S.Z.hidePersonalInformation),
          n = (0, d.e7)([C.Z], () => C.Z.getApps()),
          l = (0, d.e7)([O.default], () => O.default.locale),
          s = (0, d.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivities());
        i.useEffect(() => {
          p.Z.fetch();
        }, []),
          i.useEffect(
            () => () => {
              B.setState({ searchQuery: "" });
            },
            [],
          );
        let a = (e) => {
            let { id: n, application: t } = e;
            p.Z.delete(n),
              v.S.safeDispatch(
                k.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION,
                { applicationId: t.id },
              );
            let r = s.get(t.id);
            null != r &&
              g.Z.leaveActivity({
                channelId: r.channelId,
                applicationId: t.id,
                showFeedback: !1,
              });
          },
          c = B((e) => e.searchQuery),
          u = (e) => B.setState({ searchQuery: e }),
          m = (e) => {
            u(e);
          },
          x = () => {
            u("");
          },
          f = () =>
            (0, r.jsx)("div", {
              className: R.searchContainer,
              children: (0, r.jsx)(h.SearchBar, {
                size: h.SearchBar.Sizes.MEDIUM,
                query: c,
                onChange: m,
                onClear: x,
                placeholder: w.intl.string(w.t["5prvKS"]),
                "aria-label": w.intl.string(w.t["5prvKS"]),
              }),
            }),
          I = (e, n) =>
            (0, r.jsxs)(b, {
              className: R.__invalid_marginTop20,
              children: [
                (0, r.jsx)(h.EmptyStateImage, {
                  darkSrc: t(701972),
                  lightSrc: t(818658),
                  width: 380,
                  height: 282,
                }),
                (0, r.jsx)(h.EmptyStateText, { note: e, children: n }),
              ],
            }),
          _ = i.useMemo(() => {
            let e = c.trim().toLowerCase();
            return "" === e || null == n
              ? n
              : n.length < 100
                ? n.filter((n) => o()(e, n.application.name.toLowerCase()))
                : n.filter((n) => n.application.name.toLowerCase().includes(e));
          }, [n, c]);
        return e
          ? (0, r.jsx)(N.Z, {})
          : (0, r.jsx)(h.FormSection, {
              tag: h.FormTitleTags.H1,
              title: w.intl.string(w.t["f6kk+v"]),
              children: (0, r.jsx)(h.HeadingLevel, {
                component: (0, r.jsx)(h.FormNotice, {
                  className: H.marginBottom40,
                  type: h.CardTypes.PRIMARY,
                  title: w.intl.string(w.t.HU3RFx),
                  body: w.intl.string(w.t.Nu5Yi4),
                }),
                children:
                  null == n || null == _
                    ? (0, r.jsx)(h.Spinner, {
                        className: H.marginTop20,
                        type: h.Spinner.Type.SPINNING_CIRCLE,
                      })
                    : 0 === n.length
                      ? I(
                          w.intl.string(w.t.CpPv5u),
                          w.intl.string(w.t["E+SM6e"]),
                        )
                      : 0 === _.length
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [f(), I(null, w.intl.string(w.t.EVWFNj))],
                          })
                        : (0, r.jsxs)(r.Fragment, {
                            children: [
                              f(),
                              _.sort((e, n) => Number(n.id) - Number(e.id)).map(
                                (e) =>
                                  (0, r.jsx)(
                                    M,
                                    { locale: l, onDelete: () => a(e), ...e },
                                    e.id,
                                  ),
                              ),
                            ],
                          }),
              }),
            });
      };
    },
    881998: function (e, n, t) {
      t.d(n, {
        M: function () {
          return a;
        },
      });
      var r,
        i,
        l,
        s,
        a,
        o,
        c = t(442837),
        u = t(570140),
        d = t(592125),
        m = t(757266),
        x = t(375954);
      ((r = a || (a = {})).NOT_FETCHED = "NOT_FETCHED"),
        (r.FETCHING = "FETCHING"),
        (r.FETCHED = "FETCHED");
      let h = null,
        p = "NOT_FETCHED";
      class f extends (o = c.ZP.Store) {
        initialize() {
          this.waitFor(d.Z, m.Z, x.Z);
        }
        getApps() {
          return h;
        }
        getFetchState() {
          return p;
        }
      }
      (s = "AuthorizedAppsStore"),
        (l = "displayName") in (i = f)
          ? Object.defineProperty(i, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = s),
        (n.Z = new f(u.Z, {
          USER_AUTHORIZED_APPS_REQUEST: function () {
            p = "FETCHING";
          },
          USER_AUTHORIZED_APPS_UPDATE: function (e) {
            (p = "FETCHED"), (h = e.apps);
          },
        }));
    },
    159277: function (e, n, t) {
      var r, i;
      t.d(n, {
        M: function () {
          return l;
        },
        t: function () {
          return r;
        },
      }),
        t(47120),
        ((i = r || (r = {})).XBOX_APPLICATION_ID = "622174530214821906"),
        (i.PLAYSTATION_APPLICATION_ID = "1008890872156405890"),
        (i.PLAYSTATION_STAGING_APPLICATION_ID = "984193235868065795");
      let l = {
        PLAYSTATION_APPLICATION_IDS: new Set([
          "984193235868065795",
          "1008890872156405890",
        ]),
        ALL: new Set([
          "622174530214821906",
          "984193235868065795",
          "1008890872156405890",
        ]),
      };
    },
  },
]);
//# sourceMappingURL=735392d03764592d4636.js.map
