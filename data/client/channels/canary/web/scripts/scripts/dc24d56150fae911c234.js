"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83953"],
  {
    228643: function (e, n, t) {
      t.d(n, {
        L_: function () {
          return r;
        },
        nj: function () {
          return s;
        },
        sE: function () {
          return i;
        },
      });
      var c = t(544891),
        o = t(570140),
        a = t(480608),
        l = t(981631);
      function i(e, n) {
        c.tn
          .get({
            url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
            rejectWithError: !0,
          })
          .then((e) => {
            let t = [];
            e.body.length > 0 &&
              (t = e.body.map((e) =>
                e.map((e) => ({
                  connectionType: e.connection_type,
                  connectionMetadataField: e.connection_metadata_field,
                  applicationId: e.application_id,
                  operator: e.operator,
                  value: e.value,
                })),
              )),
              o.Z.dispatch({
                type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                roleId: n,
                roleConnectionConfigurations: t,
              });
          })
          .catch(() => {});
      }
      async function r(e, n, t) {
        let i = t.map((e) =>
            e.map((e) => ({
              connection_type: e.connectionType,
              connection_metadata_field: e.connectionMetadataField,
              application_id: e.applicationId,
              operator: e.operator,
              value: e.value,
            })),
          ),
          r = await c.tn
            .put({
              url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
              body: 0 === i.length ? [] : i,
              oldFormErrors: !0,
              rejectWithError: !1,
            })
            .then((e) => {
              let n = [];
              return (
                e.body.length > 0 &&
                  (n = e.body.map((e) =>
                    e.map((e) => ({
                      connectionType: e.connection_type,
                      connectionMetadataField: e.connection_metadata_field,
                      applicationId: e.application_id,
                      operator: e.operator,
                      value: e.value,
                    })),
                  )),
                n
              );
            }),
          s = await (0, a.H)(e, n, !1);
        null != s &&
          o.Z.dispatch({
            type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
            guildId: e,
            roleId: n,
            count: s,
          }),
          o.Z.dispatch({
            type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
            roleId: n,
            roleConnectionConfigurations: r,
          });
      }
      async function s() {
        return (
          await c.tn.get({
            url: l.ANM.APPLICATION_USER_ROLE_CONNECTIONS,
            rejectWithError: !1,
          })
        ).body;
      }
    },
    107807: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return $;
          },
        }),
        t(47120),
        t(536091);
      var c,
        o,
        a = t(200651),
        l = t(192379),
        i = t(120356),
        r = t.n(i),
        s = t(512722),
        d = t.n(s),
        u = t(392711),
        h = t.n(u),
        C = t(442837),
        m = t(692547),
        x = t(780384),
        p = t(481060),
        N = t(457330),
        _ = t(749210),
        f = t(230711),
        v = t(99690),
        A = t(493773),
        T = t(410030),
        j = t(726542),
        y = t(367907),
        I = t(385499),
        g = t(277800),
        k = t(471445),
        S = t(819602),
        E = t(706454),
        b = t(598077),
        G = t(314897),
        O = t(592125),
        M = t(553795),
        P = t(271383),
        R = t(496675),
        w = t(259580),
        B = t(626135),
        L = t(228643),
        Z = t(275759),
        F = t(231757),
        H = t(753194),
        V = t(225104),
        U = t(458034),
        D = t(856651),
        K = t(981631),
        z = t(388032),
        Y = t(245209);
      function W(e) {
        let { platformType: n, className: t } = e,
          c = (0, T.ZP)(),
          o = j.Z.get(n);
        return (0, a.jsx)("img", {
          src: (0, x.ap)(c) ? o.icon.lightSVG : o.icon.darkSVG,
          alt: "",
          className: r()(Y.platformIcon, t),
        });
      }
      function Q(e) {
        let { channel: n, className: t } = e,
          c = (0, k.KS)(n);
        return (0, a.jsxs)("div", {
          className: r()(Y.channelName, t),
          children: [
            null != c ? (0, a.jsx)(c, { className: Y.channelNameIcon }) : null,
            (0, a.jsx)(p.Heading, {
              variant: "heading-lg/semibold",
              color: "text-normal",
              className: Y.channelNameText,
              children: n.name,
            }),
          ],
        });
      }
      function q(e) {
        let n,
          {
            connectionType: t,
            connectionMetadataField: c,
            operator: o,
            value: l,
            result: i,
            description: r,
          } = e,
          s = null;
        if (null != r)
          switch (o) {
            case D.iO.LESS_THAN:
              s = z.intl.format(z.t["2p7dAw"], {
                description: r,
                count: Math.max(0, Number(l) - 1),
              });
              break;
            case D.iO.GREATER_THAN:
              s = z.intl.format(z.t["2p7dAw"], {
                description: r,
                count: Math.max(0, Number(l) + 1),
              });
              break;
            default:
              s = r;
          }
        else {
          let e;
          switch (o) {
            case D.iO.EQUAL:
              (e = z.t["0BlpbG"]),
                t === K.ABu.PAYPAL &&
                  c === D.PC.PAYPAL_VERIFIED &&
                  (e = z.t.dcSDhY);
              break;
            case D.iO.NOT_EQUAL:
              e = z.t.otcpTE;
              break;
            case D.iO.LESS_THAN:
              e = z.t.Ef35xs;
              break;
            case D.iO.GREATER_THAN:
              e = z.t["8W9OXV"];
              break;
            case void 0:
            case null:
              return null;
          }
          if (
            null ==
            (s = (0, Z.n_)({
              connectionType: t,
              connectionMetadataField: c,
              operator: o,
              operatorText: e,
              value: l,
            }))
          )
            return null;
        }
        return (
          (n = i ? "header-secondary" : "text-danger"),
          (0, a.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: n,
            className: Y.connectionsCheck,
            children: s,
          })
        );
      }
      function X(e) {
        let {
            eligibilityStatesGroups: n,
            onPlatformConnect: t,
            onPlatformConnected: c,
          } = e,
          [o, i] = l.useState({}),
          [s, u] = l.useState(0),
          [C, x] = l.useState(null),
          [N, _] = l.useState(null),
          f = l.useMemo(() => h().flatten(n), [n]),
          A = l.useMemo(
            () =>
              h().groupBy(f, (e) =>
                ""
                  .concat(e.connection_type)
                  .concat(
                    null != e.application_id
                      ? ":".concat(e.application_id)
                      : "",
                  ),
              ),
            [f],
          );
        l.useEffect(() => u(Date.now()), [f]),
          l.useEffect(() => {
            if (null == C) return;
            let e = A["".concat(C).concat(null != N ? ":".concat(N.id) : "")];
            if (null != e) e.every((e) => e.result) && c(C, N);
          }, [A, C, N, c]);
        let T = (0, p.useToken)(m.Z.unsafe_rawColors.GREEN_330).hex();
        return (0, a.jsx)(a.Fragment, {
          children: Object.keys(A)
            .sort((e, n) => {
              let t = A[e].every((e) => e.result),
                c = A[n].every((e) => e.result);
              return !0 === t && !1 === c ? 1 : !1 === t && !0 === c ? -1 : 0;
            })
            .map((e) => {
              var n, c, l;
              let u, h, C;
              let m = A[e],
                N = m.find((e) => null == e.operator),
                f = m.filter((e) => null != e.operator),
                y = (null == N || N.result) && f.every((e) => e.result),
                g = m.find((e) => null != e.application),
                k = j.Z.get(e),
                S = null == k || k.enabled,
                E = null == g ? void 0 : g.application,
                G =
                  (null == E ? void 0 : E.bot) != null ? new b.Z(E.bot) : null;
              Z.SJ.includes(
                null !== (n = null == E ? void 0 : E.id) && void 0 !== n
                  ? n
                  : "",
              )
                ? (u = (0, a.jsx)(H.Z, {
                    className: Y.botTag,
                    color: T,
                    size: 16,
                  }))
                : null != G &&
                  (u = (0, a.jsx)(I.Z, {
                    className: Y.botTag,
                    verified: G.isVerifiedBot(),
                  }));
              let O =
                  o[
                    null !== (c = null == k ? void 0 : k.type) && void 0 !== c
                      ? c
                      : D.Kt
                  ],
                M = !y && null != O && O <= s;
              return (
                (h = y
                  ? (0, a.jsx)(p.CheckmarkLargeIcon, {
                      size: "md",
                      color: "currentColor",
                      className: Y.connectionsChecksGroupCheckmark,
                    })
                  : M
                    ? (0, a.jsx)(p.Button, {
                        size: p.Button.Sizes.TINY,
                        look: p.Button.Looks.LINK,
                        color: p.Button.Colors.LINK,
                        className: Y.connectionsChecksGroupRetryButton,
                        children: z.intl.string(z.t["5911LS"]),
                      })
                    : S
                      ? (0, a.jsx)(w.Z, {
                          direction: w.Z.Directions.RIGHT,
                          className: Y.connectionsChecksGroupCaret,
                        })
                      : (0, a.jsx)(p.Text, {
                          variant: "text-md/medium",
                          color: "text-muted",
                          children: z.intl.string(z.t["cEts6+"]),
                        })),
                (null == k ? void 0 : k.type) === K.ABu.STEAM &&
                  (C = z.intl.string(z.t.NcZh6O)),
                (0, a.jsxs)(
                  p.Clickable,
                  {
                    className: r()(
                      Y.connectionsChecksGroup,
                      y ? Y.connectionsChecksGroupPassed : null,
                      S ? null : Y.connectionsChecksGroupPlatformDisabled,
                    ),
                    onClick:
                      !y && S
                        ? () => {
                            var e, n, c;
                            return (
                              (n =
                                null !== (e = null == k ? void 0 : k.type) &&
                                void 0 !== e
                                  ? e
                                  : D.Kt),
                              (c = E),
                              void ((0, F.Z)({
                                platformType: n,
                                location:
                                  "Verified Roles Connect Accounts Modal",
                                overrideUrl:
                                  null == c
                                    ? void 0
                                    : c.role_connections_verification_url,
                              }),
                              i({ ...o, [n]: Date.now() }),
                              x(n),
                              _(null != c ? c : null),
                              t())
                            );
                          }
                        : void 0,
                    children: [
                      !y && M
                        ? (0, a.jsx)("div", {
                            className:
                              Y.connectionsChecksGroupRequirementsNotMet,
                            children: (0, a.jsx)(p.Text, {
                              variant: "text-xs/normal",
                              color: "always-white",
                              children: z.intl.string(z.t.UB3hKi),
                            }),
                          })
                        : null,
                      null != k
                        ? (0, a.jsx)(W, { platformType: k.type })
                        : null,
                      null != G ? (0, a.jsx)(v.Z, { user: G }) : null,
                      (0, a.jsxs)("div", {
                        className: Y.connectionsChecksGroupTextContainer,
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              Y.connectionsChecksGroupTextNameContainer,
                            children: [
                              (0, a.jsx)(p.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children:
                                  null !== (l = null == k ? void 0 : k.name) &&
                                  void 0 !== l
                                    ? l
                                    : null == E
                                      ? void 0
                                      : E.name,
                              }),
                              u,
                              null != C
                                ? (0, a.jsx)(p.Tooltip, {
                                    text: C,
                                    children: (e) =>
                                      (0, a.jsx)(p.CircleInformationIcon, {
                                        size: "xs",
                                        color: "currentColor",
                                        ...e,
                                        className:
                                          Y.connectionsChecksGroupTextNameInfoIcon,
                                      }),
                                  })
                                : null,
                            ],
                          }),
                          f.map((e) => {
                            let {
                              connection_type: n,
                              connection_metadata_field: t,
                              operator: c,
                              value: o,
                              result: l,
                              description: i,
                            } = e;
                            return (
                              d()(null != t, "connectionMetadataField is null"),
                              d()(null != c, "operator is null"),
                              d()(null != o, "value is null"),
                              (0, a.jsx)(
                                q,
                                {
                                  connectionType: n,
                                  connectionMetadataField: t,
                                  operator: c,
                                  value: o,
                                  result: l,
                                  description: i,
                                },
                                t,
                              )
                            );
                          }),
                        ],
                      }),
                      h,
                    ],
                  },
                  e,
                )
              );
            }),
        });
      }
      function J(e) {
        let n,
          t,
          c,
          {
            account: o,
            setShowPreviewInvisibleIcon: i,
            setShowPreviewMetadata: r,
          } = e,
          [s, d] = l.useState(o.friendSync),
          [u, h] = l.useState(o.showActivity),
          [C, m] = l.useState(1 === o.metadataVisibility),
          [x, _] = l.useState(1 === o.visibility);
        (0, A.Z)(() => {
          i(!x), r(C);
        });
        let f = j.Z.get(o.type);
        return (
          K.BFP.has(o.type) &&
            (n = (0, a.jsx)(p.FormSwitch, {
              className: Y.accountConnectedPrivacyOptionsSwitchItem,
              hideBorder: !0,
              value: s,
              onChange: (e) => {
                d(e), N.Z.setFriendSync(o.type, o.id, e);
              },
              children: (0, a.jsx)(p.Text, {
                variant: "text-sm/semibold",
                children: z.intl.string(z.t["+KCMSk"]),
              }),
            })),
          K.vbS.has(o.type) &&
            (t = (0, a.jsx)(p.FormSwitch, {
              className: Y.accountConnectedPrivacyOptionsSwitchItem,
              hideBorder: !0,
              value: u,
              onChange: (e) => {
                h(e), N.Z.setShowActivity(o.type, o.id, e);
              },
              children: (0, a.jsx)(p.Text, {
                variant: "text-sm/semibold",
                children: z.intl.format(z.t["6u6J0t"], { platform: f.name }),
              }),
            })),
          !0 === f.hasMetadata &&
            (c = (0, a.jsx)(p.FormSwitch, {
              className: Y.accountConnectedPrivacyOptionsSwitchItem,
              hideBorder: !0,
              value: C,
              disabled: !x,
              onChange: (e) => {
                r(e), m(e), N.Z.setMetadataVisibility(o.type, o.id, e ? 1 : 0);
              },
              children: (0, a.jsx)(p.Text, {
                variant: "text-sm/semibold",
                children: z.intl.string(z.t.FYKGsL),
              }),
            })),
          (0, a.jsxs)("div", {
            className: Y.accountConnectedPrivacyOptionsContainer,
            children: [
              (0, a.jsx)(p.FormSwitch, {
                className: Y.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: x,
                onChange: (e) => {
                  i(!e), _(e), N.Z.setVisibility(o.type, o.id, e ? 1 : 0);
                },
                children: (0, a.jsx)(p.Text, {
                  variant: "text-sm/semibold",
                  children: z.intl.string(z.t.f7yOAQ),
                }),
              }),
              c,
              t,
              n,
            ],
          })
        );
      }
      function $(e) {
        let { transitionState: n, onClose: t, guildId: c, role: o } = e,
          [i, r] = l.useState(0),
          [s, u] = l.useState(null),
          [h, m] = l.useState(!1),
          [x, N] = l.useState(!0),
          [v, A] = l.useState(!1),
          [I, k] = l.useState(!0),
          [b, w] = l.useState(!1),
          Z = (0, C.e7)([M.Z], () => M.Z.getAccounts()),
          F = (0, C.e7)([G.default], () => G.default.getId()),
          [H, D] = l.useState(null),
          [W, q] = l.useState(null),
          [$, ee] = l.useState(null),
          en = (0, T.ZP)(),
          et = (0, C.e7)([E.default], () => E.default.locale),
          ec = (0, C.e7)([P.ZP], () => P.ZP.getMember(c, F)),
          eo = Object.values(
            (0, C.e7)([O.Z], () => O.Z.getMutableGuildChannelsForGuild(c)),
          ).filter(
            (e) =>
              R.Z.can(K.Plq.VIEW_CHANNEL, e) &&
              R.Z.can(K.Plq.SEND_MESSAGES, e) &&
              (0, g.Z)(e).includes(o),
          );
        function ea() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          null == t || t(),
            e && (0, p.closeModal)(U.s$, p.DEFAULT_MODAL_CONTEXT);
        }
        function el() {
          ea(!0), f.Z.open(K.oAB.AUTHORIZED_APPS);
        }
        function ei() {
          ea(!0), f.Z.open(K.oAB.CONNECTIONS);
        }
        async function er() {
          A(!0), await _.Z.assignGuildRoleConnection(c, o.id);
        }
        function es() {
          B.default.track(K.rMx.PASSPORT_CHALLENGE_STARTED, {
            role_id: o.id,
            ...(0, y.hH)(c),
          });
        }
        function ed(e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          D(e),
            q(n),
            r(1),
            null != n &&
              (0, L.nj)()
                .then((e) => {
                  ee(e);
                })
                .catch(() => {});
        }
        return (
          l.useEffect(() => {
            _.Z.fetchGuildRoleConnectionsEligibility(c, o.id).then((e) => {
              u(e), m(e.some((e) => e.every((e) => e.result))), N(!1);
            });
          }, [c, o.id, Z]),
          l.useEffect(() => {
            B.default.track(K.rMx.PASSPORT_CHALLENGE_VIEWED, {
              role_id: o.id,
              ...(0, y.hH)(c),
            });
          }, [c, o.id]),
          l.useEffect(() => {
            if (!!v && null != ec && !!ec.roles.includes(o.id))
              A(!1),
                eo.length > 0 ? r(2) : null == t || t(),
                B.default.track(K.rMx.PASSPORT_CHALLENGE_FINISHED, {
                  role_id: o.id,
                  ...(0, y.hH)(c),
                });
          }, [v, eo.length, ec, c, o.id, t]),
          (0, a.jsxs)(p.ModalRoot, {
            size: p.ModalSize.MEDIUM,
            transitionState: n,
            "aria-label": z.intl.string(z.t.zOZh3d),
            className: Y.modalRoot,
            children: [
              (function () {
                switch (i) {
                  case 0:
                    return (0, a.jsxs)(p.ModalHeader, {
                      className: Y.header,
                      separator: !1,
                      children: [
                        (0, a.jsx)("div", {
                          className: Y.headerText,
                          children: (0, a.jsx)(p.Heading, {
                            variant: "heading-xl/extrabold",
                            children: z.intl.string(z.t.zOZh3d),
                          }),
                        }),
                        (0, a.jsx)(p.ModalCloseButton, { onClick: () => ea() }),
                      ],
                    });
                  case 1: {
                    var e, n;
                    d()(null != H, "lastPlatformConnected is null");
                    let t =
                      null !== (n = null == W ? void 0 : W.name) && void 0 !== n
                        ? n
                        : null === (e = j.Z.get(H)) || void 0 === e
                          ? void 0
                          : e.name;
                    return (0, a.jsxs)(p.ModalHeader, {
                      className: Y.header,
                      separator: !1,
                      children: [
                        (0, a.jsx)(p.Heading, {
                          variant: "heading-xl/extrabold",
                          className: Y.headerText,
                          children: z.intl.format(z.t.yQvgBA, {
                            platformName: t,
                          }),
                        }),
                        (0, a.jsx)(p.ModalCloseButton, { onClick: () => ea() }),
                      ],
                    });
                  }
                  case 2:
                    return (0, a.jsxs)(p.ModalHeader, {
                      className: Y.header,
                      separator: !1,
                      children: [
                        (0, a.jsx)(p.Heading, {
                          variant: "heading-xl/extrabold",
                          className: Y.headerText,
                          children: z.intl.string(z.t.najNd3),
                        }),
                        (0, a.jsx)(p.ModalCloseButton, {
                          onClick: () => ea(!0),
                        }),
                      ],
                    });
                  default:
                    return null;
                }
              })(),
              (0, a.jsx)(p.Sequencer, {
                step: i,
                steps: [0, 1, 2],
                children: (function () {
                  switch (i) {
                    case 0: {
                      let e = null != s && s.length > 1,
                        n = null != s && 1 === s.length && 1 === s[0].length;
                      return (0, a.jsx)(p.ModalContent, {
                        children:
                          x || null == s
                            ? (0, a.jsx)(p.Spinner, {
                                className: Y.connectionsChecksGroups,
                              })
                            : (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)(p.Text, {
                                    variant: "text-md/medium",
                                    color: "header-secondary",
                                    children: z.intl.format(
                                      n
                                        ? z.t.jHfRvb
                                        : e
                                          ? z.t.mOQ8k5
                                          : z.t.U0olLi,
                                      { roleName: o.name },
                                    ),
                                  }),
                                  (0, a.jsx)(p.ScrollerThin, {
                                    className: Y.connectionsChecksGroups,
                                    children: (0, a.jsx)(X, {
                                      eligibilityStatesGroups: s,
                                      onPlatformConnect: es,
                                      onPlatformConnected: ed,
                                    }),
                                  }),
                                  (0, a.jsx)(p.Text, {
                                    variant: "text-xs/normal",
                                    className: Y.footerText,
                                    color: "header-secondary",
                                    children: z.intl.format(z.t.gsgvxs, {
                                      privacyPolicyUrl: K.EYA.PRIVACY,
                                      onAuthorizedApplicationsClick: () => el(),
                                      onConnectionsClick: () => ei(),
                                    }),
                                  }),
                                ],
                              }),
                      });
                    }
                    case 1: {
                      d()(null != H, "lastPlatformConnected is null");
                      let e = Z.find((e) => {
                          let { type: n } = e;
                          return H === n;
                        }),
                        n =
                          null == $
                            ? void 0
                            : $.find((e) => {
                                let { application: n } = e;
                                return n.id === (null == W ? void 0 : W.id);
                              });
                      return (0, a.jsxs)(p.ModalContent, {
                        children: [
                          (0, a.jsx)(p.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: z.intl.format(z.t.gsgvxs, {
                              privacyPolicyUrl: K.EYA.PRIVACY,
                              onAuthorizedApplicationsClick: () => el(),
                              onConnectionsClick: () => ei(),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: Y.accountConnectedContainer,
                            children:
                              null == e && null == n
                                ? (0, a.jsx)(p.Spinner, {
                                    className: Y.accountConnectedLoading,
                                  })
                                : (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      null != e
                                        ? (0, a.jsxs)(a.Fragment, {
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className:
                                                  Y.accountConnectedContainerChild,
                                                children: [
                                                  (0, a.jsx)(p.Text, {
                                                    variant: "eyebrow",
                                                    color: "header-secondary",
                                                    children: z.intl.string(
                                                      z.t.TOjkEh,
                                                    ),
                                                  }),
                                                  (0, a.jsx)(S.E3, {
                                                    connectedAccount: e,
                                                    userId: F,
                                                    theme: en,
                                                    locale: et,
                                                    className:
                                                      Y.accountConnectedPreviewConnectedUserAccount,
                                                    showMetadata: I,
                                                    showInvisibleIcon: b,
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className:
                                                  Y.accountConnectedContainerChild,
                                                children: [
                                                  (0, a.jsx)(p.Text, {
                                                    variant: "eyebrow",
                                                    color: "header-secondary",
                                                    children: z.intl.string(
                                                      z.t.jndPhY,
                                                    ),
                                                  }),
                                                  (0, a.jsx)(J, {
                                                    account: e,
                                                    setShowPreviewInvisibleIcon:
                                                      w,
                                                    setShowPreviewMetadata: k,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          })
                                        : null,
                                      null != n
                                        ? (0, a.jsxs)("div", {
                                            className:
                                              Y.accountConnectedContainerChild,
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className:
                                                  Y.accountConnectedHeader,
                                                children: [
                                                  (0, a.jsx)(p.Text, {
                                                    variant: "eyebrow",
                                                    color: "header-secondary",
                                                    children: z.intl.string(
                                                      z.t.TOjkEh,
                                                    ),
                                                  }),
                                                  (0, a.jsx)(p.Tooltip, {
                                                    text: z.intl.string(
                                                      z.t.x3svVV,
                                                    ),
                                                    children: (e) =>
                                                      (0, a.jsx)(
                                                        p.CircleInformationIcon,
                                                        {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          ...e,
                                                        },
                                                      ),
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsx)(S.tH, {
                                                applicationRoleConnection: n,
                                                className:
                                                  Y.accountConnectedPreviewConnectedUserAccount,
                                                locale: et,
                                              }),
                                            ],
                                          })
                                        : null,
                                    ],
                                  }),
                          }),
                        ],
                      });
                    }
                    case 2:
                      return (0, a.jsxs)(p.ModalContent, {
                        children: [
                          (0, a.jsxs)("div", {
                            className: Y.roleGranted,
                            children: [
                              (0, a.jsx)(V.Z, {
                                guildId: c,
                                className: Y.verifiedIcon,
                                role: o,
                                size: 24,
                              }),
                              (0, a.jsx)(p.Text, {
                                variant: "text-lg/semibold",
                                color: "header-primary",
                                className: Y.roleGrantedName,
                                children: o.name,
                              }),
                            ],
                          }),
                          (0, a.jsx)(p.ScrollerThin, {
                            className: Y.channelsGranted,
                            children: eo.map((e) =>
                              (0, a.jsx)(Q, { channel: e }, e.id),
                            ),
                          }),
                        ],
                      });
                    default:
                      return null;
                  }
                })(),
              }),
              (function () {
                var e;
                let n =
                  null !==
                    (e =
                      null == s
                        ? void 0
                        : s.flat().some((e) => null == e.application_id)) &&
                  void 0 !== e &&
                  e;
                switch (i) {
                  case 0:
                    return (0, a.jsxs)(p.ModalFooter, {
                      children: [
                        (0, a.jsx)(p.Button, {
                          color: p.ButtonColors.BRAND,
                          onClick: () => er(),
                          disabled: x || !h || v,
                          children: z.intl.string(z.t["8SuVoK"]),
                        }),
                        n
                          ? (0, a.jsx)("div", {
                              className: Y.manageConnectionsFooterButton,
                              children: (0, a.jsx)(p.Button, {
                                look: p.ButtonLooks.LINK,
                                color: p.ButtonColors.LINK,
                                onClick: ei,
                                children: z.intl.string(z.t.VXV55O),
                              }),
                            })
                          : null,
                      ],
                    });
                  case 1:
                    return (0, a.jsx)(p.ModalFooter, {
                      children: (0, a.jsx)(p.Button, {
                        color: p.ButtonColors.BRAND,
                        onClick: () => r(0),
                        children: z.intl.string(z.t.i4jeWV),
                      }),
                    });
                  default:
                    return (0, a.jsxs)(p.ModalFooter, {
                      children: [
                        (0, a.jsx)(p.Button, {
                          color: p.ButtonColors.BRAND,
                          onClick: () => ea(!0),
                          children: z.intl.string(z.t.cpT0Cg),
                        }),
                        n
                          ? (0, a.jsx)("div", {
                              className: Y.manageConnectionsFooterButton,
                              children: (0, a.jsx)(p.Button, {
                                look: p.ButtonLooks.LINK,
                                color: p.ButtonColors.LINK,
                                onClick: ei,
                                children: z.intl.string(z.t.VXV55O),
                              }),
                            })
                          : null,
                      ],
                    });
                }
              })(),
            ],
          })
        );
      }
      ((o = c || (c = {}))[(o.CHECKS_REQUIRED = 0)] = "CHECKS_REQUIRED"),
        (o[(o.ACCOUNT_CONNECTED = 1)] = "ACCOUNT_CONNECTED"),
        (o[(o.ROLE_GRANTED = 2)] = "ROLE_GRANTED");
    },
    119028: function (e, n, t) {
      e.exports = {
        connectedAccountVanityMetadata: "connectedAccountVanityMetadata_a1f026",
        connectedAccountVanityMetadataTag:
          "connectedAccountVanityMetadataTag_a1f026",
        connectedAccountVanityMetadataItem:
          "connectedAccountVanityMetadataItem_a1f026",
        connectedAccountVanityMetadataItemIcon:
          "connectedAccountVanityMetadataItemIcon_a1f026",
        paypalVerifiedTag: "paypalVerifiedTag_a1f026",
      };
    },
    245209: function (e, n, t) {
      e.exports = {
        modalRoot: "modalRoot_c3d805",
        header: "header_c3d805",
        headerText: "headerText_c3d805",
        manageConnectionsFooterButton: "manageConnectionsFooterButton_c3d805",
        platformIcon: "platformIcon_c3d805",
        botTag: "botTag_c3d805",
        connectionsChecksGroups: "connectionsChecksGroups_c3d805",
        connectionsChecksGroup: "connectionsChecksGroup_c3d805",
        connectionsChecksGroupPassed: "connectionsChecksGroupPassed_c3d805",
        connectionsChecksGroupPlatformDisabled:
          "connectionsChecksGroupPlatformDisabled_c3d805",
        connectionsChecksGroupTextContainer:
          "connectionsChecksGroupTextContainer_c3d805",
        connectionsChecksGroupTextNameContainer:
          "connectionsChecksGroupTextNameContainer_c3d805",
        connectionsChecksGroupTextNameInfoIcon:
          "connectionsChecksGroupTextNameInfoIcon_c3d805",
        connectionsChecksGroupRequirementsNotMet:
          "connectionsChecksGroupRequirementsNotMet_c3d805",
        connectionsChecksGroupCaret: "connectionsChecksGroupCaret_c3d805",
        connectionsChecksGroupRetryButton:
          "connectionsChecksGroupRetryButton_c3d805",
        connectionsChecksGroupCheckmark:
          "connectionsChecksGroupCheckmark_c3d805",
        connectionsCheck: "connectionsCheck_c3d805",
        footerText: "footerText_c3d805",
        accountConnectedContainer: "accountConnectedContainer_c3d805",
        accountConnectedLoading: "accountConnectedLoading_c3d805",
        accountConnectedContainerChild: "accountConnectedContainerChild_c3d805",
        accountConnectedHeader: "accountConnectedHeader_c3d805",
        accountConnectedPreviewConnectedUserAccount:
          "accountConnectedPreviewConnectedUserAccount_c3d805",
        accountConnectedPrivacyOptionsContainer:
          "accountConnectedPrivacyOptionsContainer_c3d805",
        accountConnectedPrivacyOptionsSwitchItem:
          "accountConnectedPrivacyOptionsSwitchItem_c3d805",
        roleGranted: "roleGranted_c3d805",
        roleGrantedName: "roleGrantedName_c3d805",
        verifiedIcon: "verifiedIcon_c3d805",
        channelsGranted: "channelsGranted_c3d805",
        channelName: "channelName_c3d805",
        channelNameIcon: "channelNameIcon_c3d805",
        channelNameText: "channelNameText_c3d805",
      };
    },
    196161: function (e, n, t) {
      e.exports = {
        connectedAccounts: "connectedAccounts_ab12c6",
        connectedAccountsColumn: "connectedAccountsColumn_ab12c6",
        connectedAccountContainer: "connectedAccountContainer_ab12c6",
        connectedAccountContainerWithMetadata:
          "connectedAccountContainerWithMetadata_ab12c6",
        connectedAccount: "connectedAccount_ab12c6",
        connectedAccountChildren: "connectedAccountChildren_ab12c6",
        connectedAccountChildrenNoIcon: "connectedAccountChildrenNoIcon_ab12c6",
        connectedAccountPoweredBy: "connectedAccountPoweredBy_ab12c6",
        connectedAccountPoweredByText: "connectedAccountPoweredByText_ab12c6",
        connectedAccountIcon: "connectedAccountIcon_ab12c6",
        connectedAccountNameContainer: "connectedAccountNameContainer_ab12c6",
        connectedAccountNameContainerClickable:
          "connectedAccountNameContainerClickable_ab12c6",
        connectedAccountName: "connectedAccountName_ab12c6",
        connectedAccountNameTextContainer:
          "connectedAccountNameTextContainer_ab12c6",
        connectedAccountNameText: "connectedAccountNameText_ab12c6",
        connectedAccountVerifiedIcon: "connectedAccountVerifiedIcon_ab12c6",
        connectedAccountHideIcon: "connectedAccountHideIcon_ab12c6",
        connectedAccountOpenIcon: "connectedAccountOpenIcon_ab12c6",
      };
    },
    485270: function (e, n, t) {
      e.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
  },
]);
//# sourceMappingURL=dc24d56150fae911c234.js.map
