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
    726721: function (e, n, t) {
      let r = (0, t(818083).B)({
        kind: "user",
        id: "2024-11_application_reporting_flow",
        label: "Apps In-App Reporting",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable application IAR reporting flow",
            config: { enabled: !0 },
          },
        ],
      });
      n.Z = r;
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
          return Y;
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
        p = t(481060),
        h = t(384275),
        f = t(230711),
        N = t(497321),
        I = t(468026),
        g = t(317381),
        j = t(513202),
        T = t(979200),
        A = t(600164),
        _ = t(726721),
        S = t(726521),
        C = t(713938),
        v = t(973616),
        L = t(881998),
        P = t(246946),
        E = t(768581),
        k = t(585483),
        y = t(49012),
        Z = t(709054),
        O = t(706454),
        w = t(210887),
        R = t(436267),
        b = t(149418),
        B = t(494620),
        D = t(981631),
        F = t(388032),
        M = t(822352),
        G = t(113207);
      let U = d.ZP.connectStores([w.Z], () => ({ theme: w.Z.theme }))(
        p.EmptyState,
      );
      function z(e) {
        let { application: n } = e;
        return (0, r.jsxs)("div", {
          className: M.twoWayWarning,
          children: [
            (0, r.jsx)(p.CircleInformationIcon, {
              size: "md",
              color: "currentColor",
              className: M.twoWayWarningIcon,
            }),
            (0, r.jsx)(p.Text, {
              color: "text-normal",
              variant: "text-sm/medium",
              children: F.intl.format(F.t.jUhnwc, {
                applicationName: n.name,
                onConnectionPress: () =>
                  f.Z.setSection(D.jXE.SETTINGS_CONNECTIONS),
              }),
            }),
          ],
        });
      }
      let H = (e) => {
          let { disclosure: n } = e;
          return i.useMemo(() => {
            switch (n) {
              case m.u$.IP_LOCATION:
                return (0, r.jsx)(p.GlobeEarthIcon, {
                  size: "md",
                  color: "currentColor",
                  className: M.disclosureIcon,
                });
              case m.u$.DISPLAYS_ADVERTISEMENTS:
                return (0, r.jsx)(p.EmbedIcon, { className: M.disclosureIcon });
              default:
                return (0, r.jsx)(p.CircleInformationIcon, {
                  className: M.disclosureIcon,
                });
            }
          }, [n]);
        },
        W = (e) => {
          let {
              scopes: n,
              application: t,
              onDelete: l,
              disclosures: a,
              locale: o,
              id: c,
            } = e,
            d = i.useMemo(() => v.Z.createFromServer(t), [t]),
            m = _.Z.useExperiment(
              { location: "Authorized Applications" },
              { autoTrackExposure: !1 },
            ).enabled,
            h = () => {
              let e = F.intl.formatToPlainString(F.t.QWGvxM, {
                applicationName: t.name,
              });
              return (
                (0, b.Z)(t) &&
                  (e = (0, r.jsxs)(r.Fragment, {
                    children: [
                      e,
                      (0, r.jsx)(B.Z, {
                        look: B.z.WARNING,
                        className: M.infoBox,
                        children: F.intl.string(F.t.LY35Z2),
                      }),
                    ],
                  })),
                (0, R.Z)(t.id) &&
                  (e = (0, r.jsxs)(r.Fragment, {
                    children: [
                      e,
                      (0, r.jsx)(B.Z, {
                        className: M.infoBox,
                        children: F.intl.format(F.t.KRnERk, {
                          applicationName: t.name,
                        }),
                      }),
                    ],
                  })),
                (0, p.openModal)((n) =>
                  (0, r.jsx)(I.default, {
                    title: F.intl.string(F.t.DT39Aw),
                    body: e,
                    confirmText: F.intl.string(F.t.xUqheH),
                    cancelText: F.intl.string(F.t["ETE/oK"]),
                    onConfirm: l,
                    ...n,
                  }),
                )
              );
            },
            f = () => {
              (0, S.uu)(d);
            },
            N = () => {
              null != t.terms_of_service_url &&
                (0, y.q)({ href: t.terms_of_service_url, shouldConfirm: !0 });
            },
            g = () => {
              null != t.privacy_policy_url &&
                (0, y.q)({ href: t.privacy_policy_url, shouldConfirm: !0 });
            },
            j = (0, R.O)(t.id);
          return (0, r.jsx)(p.Card, {
            className: s()(M.authedApp, G.marginBottom8),
            outline: !0,
            children: (0, r.jsxs)(p.HeadingLevel, {
              component: (() => {
                let e = E.ZP.getApplicationIconURL({ id: t.id, icon: t.icon }),
                  n =
                    null != e
                      ? (0, r.jsx)(A.Z.Child, {
                          className: M.appAvatar,
                          grow: 0,
                          children: (0, r.jsx)("img", { src: e, alt: "" }),
                        })
                      : null,
                  i = new Date(
                    Z.default.extractTimestamp(c),
                  ).toLocaleDateString(o);
                return (0, r.jsxs)("div", {
                  className: s()(M.header, G.marginBottom20),
                  children: [
                    n,
                    (0, r.jsxs)("div", {
                      className: M.headerTextContainer,
                      children: [
                        (0, r.jsx)(p.Heading, {
                          variant: "text-sm/semibold",
                          className: M.headerText,
                          children: t.name,
                        }),
                        (0, r.jsx)(p.Text, {
                          variant: "text-xs/normal",
                          color: "text-normal",
                          children: F.intl.format(F.t.yOApCA, { date: i }),
                        }),
                      ],
                    }),
                    m
                      ? (0, r.jsx)(p.Button, {
                          color: p.ButtonColors.TRANSPARENT,
                          look: p.ButtonLooks.LINK,
                          size: p.ButtonSizes.SMALL,
                          className: M.reportButton,
                          onClick: f,
                          children: F.intl.string(F.t["+78Pfn"]),
                        })
                      : null,
                    (0, r.jsx)(p.Button, {
                      color: p.ButtonColors.RED,
                      look: p.ButtonLooks.OUTLINED,
                      size: p.ButtonSizes.SMALL,
                      onClick: h,
                      children: F.intl.string(F.t.xUqheH),
                    }),
                  ],
                });
              })(),
              children: [
                (() => {
                  if (null != t.description && "" !== t.description)
                    return (0, r.jsx)(p.FormItem, {
                      faded: !0,
                      title: F.intl.string(F.t.GfRGra),
                      children: (0, r.jsx)(p.FormText, {
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
                      className: M.tosPrivacy,
                      children: [
                        null != t.terms_of_service_url
                          ? (0, r.jsxs)(x.P, {
                              tag: "a",
                              onClick: N,
                              className: M.tos,
                              children: [
                                (0, r.jsx)(p.FormText, {
                                  className: M.link,
                                  children: F.intl.string(F.t["lx+GeX"]),
                                }),
                                (0, r.jsx)(p.LinkExternalSmallIcon, {
                                  className: M.externalLinkIcon,
                                  color: "var(--text-link)",
                                }),
                              ],
                            })
                          : null,
                        null != t.privacy_policy_url
                          ? (0, r.jsxs)("div", {
                              className: M.privacy,
                              children: [
                                null != t.terms_of_service_url
                                  ? (0, r.jsx)("div", { className: M.divider })
                                  : null,
                                (0, r.jsxs)(x.P, {
                                  tag: "a",
                                  onClick: g,
                                  className: M.privacy,
                                  children: [
                                    (0, r.jsx)(p.FormText, {
                                      className: M.link,
                                      children: F.intl.string(F.t.okSwq6),
                                    }),
                                    (0, r.jsx)(p.LinkExternalSmallIcon, {
                                      className: M.externalLinkIcon,
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
                    e.push(...(0, C.CI)(t, n)),
                      t === u.x.APPLICATIONS_COMMANDS &&
                        e.push(F.intl.string(F.t.Ls2XRk));
                  if (e.length > 0 || (null != a && a.length > 0))
                    return (0, r.jsx)(p.FormItem, {
                      faded: !0,
                      title: F.intl.string(F.t.xrmhRU),
                      className: G.marginTop20,
                      children: (0, r.jsxs)("ul", {
                        children: [
                          e.map((e, n) =>
                            (0, r.jsxs)(
                              "li",
                              {
                                className: s()(M.permission, G.marginTop8),
                                children: [
                                  (0, r.jsx)("i", {
                                    className: M.permissionCheckmark,
                                  }),
                                  (0, r.jsx)(p.FormText, { children: e }),
                                ],
                              },
                              n,
                            ),
                          ),
                          null == a
                            ? void 0
                            : a.map((n, t) => {
                                let i = (0, T.PM)(n);
                                return null != i
                                  ? (0, r.jsxs)(
                                      "li",
                                      {
                                        className: s()(
                                          M.permission,
                                          G.marginTop8,
                                        ),
                                        children: [
                                          (0, r.jsx)(H, { disclosure: n }),
                                          (0, r.jsx)(p.FormText, {
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
                j && (0, r.jsx)(z, { application: t }),
              ],
            }),
          });
        },
        Y = (0, c.Ue)(() => ({ searchQuery: "" }));
      n.Z = () => {
        let e = (0, d.e7)([P.Z], () => P.Z.hidePersonalInformation),
          n = (0, d.e7)([L.Z], () => L.Z.getApps()),
          l = (0, d.e7)([O.default], () => O.default.locale),
          s = (0, d.e7)([g.ZP], () => g.ZP.getSelfEmbeddedActivities());
        i.useEffect(() => {
          h.Z.fetch();
        }, []),
          i.useEffect(
            () => () => {
              Y.setState({ searchQuery: "" });
            },
            [],
          );
        let a = (e) => {
            let { id: n, application: t } = e;
            h.Z.delete(n),
              k.S.safeDispatch(
                D.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION,
                { applicationId: t.id },
              );
            let r = s.get(t.id);
            null != r &&
              j.Z.leaveActivity({
                channelId: r.channelId,
                applicationId: t.id,
                showFeedback: !1,
              });
          },
          c = Y((e) => e.searchQuery),
          u = (e) => Y.setState({ searchQuery: e }),
          m = (e) => {
            u(e);
          },
          x = () => {
            u("");
          },
          f = () =>
            (0, r.jsx)("div", {
              className: M.searchContainer,
              children: (0, r.jsx)(p.SearchBar, {
                size: p.SearchBar.Sizes.MEDIUM,
                query: c,
                onChange: m,
                onClear: x,
                placeholder: F.intl.string(F.t["5prvKS"]),
                "aria-label": F.intl.string(F.t["5prvKS"]),
              }),
            }),
          I = (e, n) =>
            (0, r.jsxs)(U, {
              className: M.__invalid_marginTop20,
              children: [
                (0, r.jsx)(p.EmptyStateImage, {
                  darkSrc: t(701972),
                  lightSrc: t(818658),
                  width: 380,
                  height: 282,
                }),
                (0, r.jsx)(p.EmptyStateText, { note: e, children: n }),
              ],
            }),
          T = i.useMemo(() => {
            let e = c.trim().toLowerCase();
            return "" === e || null == n
              ? n
              : n.length < 100
                ? n.filter((n) => o()(e, n.application.name.toLowerCase()))
                : n.filter((n) => n.application.name.toLowerCase().includes(e));
          }, [n, c]);
        return e
          ? (0, r.jsx)(N.Z, {})
          : (0, r.jsx)(p.FormSection, {
              tag: p.FormTitleTags.H1,
              title: F.intl.string(F.t["f6kk+v"]),
              children: (0, r.jsx)(p.HeadingLevel, {
                component: (0, r.jsx)(p.FormNotice, {
                  className: G.marginBottom40,
                  type: p.CardTypes.PRIMARY,
                  title: F.intl.string(F.t.HU3RFx),
                  body: F.intl.string(F.t.Nu5Yi4),
                }),
                children:
                  null == n || null == T
                    ? (0, r.jsx)(p.Spinner, {
                        className: G.marginTop20,
                        type: p.Spinner.Type.SPINNING_CIRCLE,
                      })
                    : 0 === n.length
                      ? I(
                          F.intl.string(F.t.CpPv5u),
                          F.intl.string(F.t["E+SM6e"]),
                        )
                      : 0 === T.length
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [f(), I(null, F.intl.string(F.t.EVWFNj))],
                          })
                        : (0, r.jsxs)(r.Fragment, {
                            children: [
                              f(),
                              T.sort((e, n) => Number(n.id) - Number(e.id)).map(
                                (e) =>
                                  (0, r.jsx)(
                                    W,
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
//# sourceMappingURL=aee9e7fde672ef435828.js.map
