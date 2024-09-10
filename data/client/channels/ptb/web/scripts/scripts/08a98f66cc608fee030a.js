"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18993"],
  {
    228643: function (e, n, t) {
      t.d(n, {
        L_: function () {
          return i;
        },
        nj: function () {
          return r;
        },
        sE: function () {
          return s;
        },
      });
      var c = t(544891),
        o = t(570140),
        a = t(480608),
        l = t(981631);
      function s(e, n) {
        c.tn
          .get({ url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n) })
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
      async function i(e, n, t) {
        let s = t.map((e) =>
            e.map((e) => ({
              connection_type: e.connectionType,
              connection_metadata_field: e.connectionMetadataField,
              application_id: e.applicationId,
              operator: e.operator,
              value: e.value,
            })),
          ),
          i = await c.tn
            .put({
              url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
              body: 0 === s.length ? [] : s,
              oldFormErrors: !0,
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
          r = await (0, a.H)(e, n, !1);
        null != r &&
          o.Z.dispatch({
            type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
            guildId: e,
            roleId: n,
            count: r,
          }),
          o.Z.dispatch({
            type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
            roleId: n,
            roleConnectionConfigurations: i,
          });
      }
      async function r() {
        return (
          await c.tn.get({ url: l.ANM.APPLICATION_USER_ROLE_CONNECTIONS })
        ).body;
      }
    },
    107807: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return J;
          },
        }),
        t(47120),
        t(536091);
      var c,
        o,
        a = t(735250),
        l = t(470079),
        s = t(120356),
        i = t.n(s),
        r = t(512722),
        d = t.n(r),
        u = t(392711),
        C = t.n(u),
        N = t(442837),
        _ = t(692547),
        h = t(780384),
        T = t(481060),
        O = t(457330),
        m = t(749210),
        E = t(230711),
        A = t(99690),
        x = t(410030),
        p = t(726542),
        S = t(367907),
        I = t(385499),
        M = t(277800),
        f = t(471445),
        v = t(819602),
        g = t(706454),
        y = t(598077),
        j = t(314897),
        L = t(592125),
        k = t(553795),
        G = t(271383),
        b = t(496675),
        R = t(259580),
        Z = t(626135),
        D = t(228643),
        P = t(275759),
        U = t(231757),
        w = t(753194),
        B = t(225104),
        H = t(458034),
        F = t(856651),
        V = t(981631),
        Y = t(689938),
        z = t(654711);
      function K(e) {
        let { platformType: n, className: t } = e,
          c = (0, x.ZP)(),
          o = p.Z.get(n);
        return (0, a.jsx)("img", {
          src: (0, h.ap)(c) ? o.icon.lightSVG : o.icon.darkSVG,
          alt: "",
          className: i()(z.platformIcon, t),
        });
      }
      function q(e) {
        let { channel: n, className: t } = e,
          c = (0, f.KS)(n);
        return (0, a.jsxs)("div", {
          className: i()(z.channelName, t),
          children: [
            null != c ? (0, a.jsx)(c, { className: z.channelNameIcon }) : null,
            (0, a.jsx)(T.Heading, {
              variant: "heading-lg/semibold",
              color: "text-normal",
              className: z.channelNameText,
              children: n.name,
            }),
          ],
        });
      }
      function W(e) {
        let n,
          {
            connectionType: t,
            connectionMetadataField: c,
            operator: o,
            value: l,
            result: s,
            description: i,
          } = e,
          r = null;
        if (null != i)
          switch (o) {
            case F.iO.LESS_THAN:
              r = Y.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                description: i,
                count: Math.max(0, Number(l) - 1),
              });
              break;
            case F.iO.GREATER_THAN:
              r = Y.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                description: i,
                count: Math.max(0, Number(l) + 1),
              });
              break;
            default:
              r = i;
          }
        else {
          let e;
          switch (o) {
            case F.iO.EQUAL:
              (e = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_BE),
                t === V.ABu.PAYPAL &&
                  c === F.PC.PAYPAL_VERIFIED &&
                  (e =
                    Y.Z.Messages
                      .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_A);
              break;
            case F.iO.NOT_EQUAL:
              e = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_NOT_BE;
              break;
            case F.iO.LESS_THAN:
              e =
                Y.Z.Messages
                  .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_MOST;
              break;
            case F.iO.GREATER_THAN:
              e =
                Y.Z.Messages
                  .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_LEAST;
              break;
            case void 0:
            case null:
              return null;
          }
          if (
            null ==
            (r = (0, P.n_)({
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
          (n = s ? "header-secondary" : "text-danger"),
          (0, a.jsx)(T.Text, {
            variant: "text-xs/normal",
            color: n,
            className: z.connectionsCheck,
            children: r,
          })
        );
      }
      function Q(e) {
        let {
            eligibilityStatesGroups: n,
            onPlatformConnect: t,
            onPlatformConnected: c,
          } = e,
          [o, s] = l.useState({}),
          [r, u] = l.useState(0),
          [N, h] = l.useState(null),
          [O, m] = l.useState(null),
          E = l.useMemo(() => C().flatten(n), [n]),
          x = l.useMemo(
            () =>
              C().groupBy(E, (e) =>
                ""
                  .concat(e.connection_type)
                  .concat(
                    null != e.application_id
                      ? ":".concat(e.application_id)
                      : "",
                  ),
              ),
            [E],
          );
        l.useEffect(() => u(Date.now()), [E]),
          l.useEffect(() => {
            if (null == N) return;
            let e = x["".concat(N).concat(null != O ? ":".concat(O.id) : "")];
            if (null != e) e.every((e) => e.result) && c(N, O);
          }, [x, N, O, c]);
        let S = (0, T.useToken)(_.Z.unsafe_rawColors.GREEN_330).hex();
        return (0, a.jsx)(a.Fragment, {
          children: Object.keys(x)
            .sort((e, n) => {
              let t = x[e].every((e) => e.result),
                c = x[n].every((e) => e.result);
              return !0 === t && !1 === c ? 1 : !1 === t && !0 === c ? -1 : 0;
            })
            .map((e) => {
              var n, c, l;
              let u, C, N;
              let _ = x[e],
                O = _.find((e) => null == e.operator),
                E = _.filter((e) => null != e.operator),
                M = (null == O || O.result) && E.every((e) => e.result),
                f = _.find((e) => null != e.application),
                v = p.Z.get(e),
                g = null == v || v.enabled,
                j = null == f ? void 0 : f.application,
                L =
                  (null == j ? void 0 : j.bot) != null ? new y.Z(j.bot) : null;
              P.SJ.includes(
                null !== (n = null == j ? void 0 : j.id) && void 0 !== n
                  ? n
                  : "",
              )
                ? (u = (0, a.jsx)(w.Z, {
                    className: z.botTag,
                    color: S,
                    size: 16,
                  }))
                : null != L &&
                  (u = (0, a.jsx)(I.Z, {
                    className: z.botTag,
                    verified: L.isVerifiedBot(),
                  }));
              let k =
                  o[
                    null !== (c = null == v ? void 0 : v.type) && void 0 !== c
                      ? c
                      : F.Kt
                  ],
                G = !M && null != k && k <= r;
              return (
                (C = M
                  ? (0, a.jsx)(T.CheckmarkLargeIcon, {
                      size: "md",
                      color: "currentColor",
                      className: z.connectionsChecksGroupCheckmark,
                    })
                  : G
                    ? (0, a.jsx)(T.Button, {
                        size: T.Button.Sizes.TINY,
                        look: T.Button.Looks.LINK,
                        color: T.Button.Colors.LINK,
                        className: z.connectionsChecksGroupRetryButton,
                        children: Y.Z.Messages.RETRY,
                      })
                    : g
                      ? (0, a.jsx)(R.Z, {
                          direction: R.Z.Directions.RIGHT,
                          className: z.connectionsChecksGroupCaret,
                        })
                      : (0, a.jsx)(T.Text, {
                          variant: "text-md/medium",
                          color: "text-muted",
                          children:
                            Y.Z.Messages
                              .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_PLATFORM_DISABLED,
                        })),
                (null == v ? void 0 : v.type) === V.ABu.STEAM &&
                  (N = Y.Z.Messages.CONNECTIONS_STEAM_TOOLTIP),
                (0, a.jsxs)(
                  T.Clickable,
                  {
                    className: i()(
                      z.connectionsChecksGroup,
                      M ? z.connectionsChecksGroupPassed : null,
                      g ? null : z.connectionsChecksGroupPlatformDisabled,
                    ),
                    onClick:
                      !M && g
                        ? () => {
                            var e, n, c;
                            return (
                              (n =
                                null !== (e = null == v ? void 0 : v.type) &&
                                void 0 !== e
                                  ? e
                                  : F.Kt),
                              (c = j),
                              void ((0, U.Z)({
                                platformType: n,
                                location:
                                  "Verified Roles Connect Accounts Modal",
                                overrideUrl:
                                  null == c
                                    ? void 0
                                    : c.role_connections_verification_url,
                              }),
                              s({ ...o, [n]: Date.now() }),
                              h(n),
                              m(null != c ? c : null),
                              t())
                            );
                          }
                        : void 0,
                    children: [
                      !M && G
                        ? (0, a.jsx)("div", {
                            className:
                              z.connectionsChecksGroupRequirementsNotMet,
                            children: (0, a.jsx)(T.Text, {
                              variant: "text-xs/normal",
                              color: "always-white",
                              children:
                                Y.Z.Messages
                                  .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_REQUIREMENTS_NOT_MET,
                            }),
                          })
                        : null,
                      null != v
                        ? (0, a.jsx)(K, { platformType: v.type })
                        : null,
                      null != L ? (0, a.jsx)(A.Z, { user: L }) : null,
                      (0, a.jsxs)("div", {
                        className: z.connectionsChecksGroupTextContainer,
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              z.connectionsChecksGroupTextNameContainer,
                            children: [
                              (0, a.jsx)(T.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children:
                                  null !== (l = null == v ? void 0 : v.name) &&
                                  void 0 !== l
                                    ? l
                                    : null == j
                                      ? void 0
                                      : j.name,
                              }),
                              u,
                              null != N
                                ? (0, a.jsx)(T.Tooltip, {
                                    text: N,
                                    children: (e) =>
                                      (0, a.jsx)(T.CircleInformationIcon, {
                                        size: "xs",
                                        color: "currentColor",
                                        ...e,
                                        className:
                                          z.connectionsChecksGroupTextNameInfoIcon,
                                      }),
                                  })
                                : null,
                            ],
                          }),
                          E.map((e) => {
                            let {
                              connection_type: n,
                              connection_metadata_field: t,
                              operator: c,
                              value: o,
                              result: l,
                              description: s,
                            } = e;
                            return (
                              d()(null != t, "connectionMetadataField is null"),
                              d()(null != c, "operator is null"),
                              d()(null != o, "value is null"),
                              (0, a.jsx)(
                                W,
                                {
                                  connectionType: n,
                                  connectionMetadataField: t,
                                  operator: c,
                                  value: o,
                                  result: l,
                                  description: s,
                                },
                                t,
                              )
                            );
                          }),
                        ],
                      }),
                      C,
                    ],
                  },
                  e,
                )
              );
            }),
        });
      }
      function X(e) {
        let n,
          t,
          c,
          {
            account: o,
            setShowPreviewInvisibleIcon: s,
            setShowPreviewMetadata: i,
          } = e,
          [r, d] = l.useState(o.friendSync),
          [u, C] = l.useState(o.showActivity),
          [N, _] = l.useState(1 === o.metadataVisibility),
          [h, m] = l.useState(1 === o.visibility);
        l.useEffect(() => {
          s(!h), i(N);
        }, []);
        let E = p.Z.get(o.type);
        return (
          V.BFP.has(o.type) &&
            (n = (0, a.jsx)(T.FormSwitch, {
              className: z.accountConnectedPrivacyOptionsSwitchItem,
              hideBorder: !0,
              value: r,
              onChange: (e) => {
                d(e), O.Z.setFriendSync(o.type, o.id, e);
              },
              children: (0, a.jsx)(T.Text, {
                variant: "text-sm/semibold",
                children: Y.Z.Messages.SYNC_FRIENDS,
              }),
            })),
          V.vbS.has(o.type) &&
            (t = (0, a.jsx)(T.FormSwitch, {
              className: z.accountConnectedPrivacyOptionsSwitchItem,
              hideBorder: !0,
              value: u,
              onChange: (e) => {
                C(e), O.Z.setShowActivity(o.type, o.id, e);
              },
              children: (0, a.jsx)(T.Text, {
                variant: "text-sm/semibold",
                children: Y.Z.Messages.DISPLAY_ACTIVITY.format({
                  platform: E.name,
                }),
              }),
            })),
          !0 === E.hasMetadata &&
            (c = (0, a.jsx)(T.FormSwitch, {
              className: z.accountConnectedPrivacyOptionsSwitchItem,
              hideBorder: !0,
              value: N,
              disabled: !h,
              onChange: (e) => {
                i(e), _(e), O.Z.setMetadataVisibility(o.type, o.id, e ? 1 : 0);
              },
              children: (0, a.jsx)(T.Text, {
                variant: "text-sm/semibold",
                children: Y.Z.Messages.DISPLAY_DETAILS_ON_PROFILE,
              }),
            })),
          (0, a.jsxs)("div", {
            className: z.accountConnectedPrivacyOptionsContainer,
            children: [
              (0, a.jsx)(T.FormSwitch, {
                className: z.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: h,
                onChange: (e) => {
                  s(!e), m(e), O.Z.setVisibility(o.type, o.id, e ? 1 : 0);
                },
                children: (0, a.jsx)(T.Text, {
                  variant: "text-sm/semibold",
                  children: Y.Z.Messages.DISPLAY_ON_PROFILE,
                }),
              }),
              c,
              t,
              n,
            ],
          })
        );
      }
      function J(e) {
        let { transitionState: n, onClose: t, guildId: c, role: o } = e,
          [s, i] = l.useState(0),
          [r, u] = l.useState(null),
          [C, _] = l.useState(!1),
          [h, O] = l.useState(!0),
          [A, I] = l.useState(!1),
          [f, y] = l.useState(!0),
          [R, P] = l.useState(!1),
          U = (0, N.e7)([k.Z], () => k.Z.getAccounts()),
          w = (0, N.e7)([j.default], () => j.default.getId()),
          [F, K] = l.useState(null),
          [W, J] = l.useState(null),
          [$, ee] = l.useState(null),
          en = (0, x.ZP)(),
          et = (0, N.e7)([g.default], () => g.default.locale),
          ec = (0, N.e7)([G.ZP], () => G.ZP.getMember(c, w)),
          eo = Object.values(
            (0, N.e7)([L.Z], () => L.Z.getMutableGuildChannelsForGuild(c)),
          ).filter(
            (e) =>
              b.Z.can(V.Plq.VIEW_CHANNEL, e) &&
              b.Z.can(V.Plq.SEND_MESSAGES, e) &&
              (0, M.Z)(e).includes(o),
          );
        function ea() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          null == t || t(),
            e && (0, T.closeModal)(H.s$, T.DEFAULT_MODAL_CONTEXT);
        }
        function el() {
          ea(!0), E.Z.open(V.oAB.AUTHORIZED_APPS);
        }
        function es() {
          ea(!0), E.Z.open(V.oAB.CONNECTIONS);
        }
        async function ei() {
          I(!0), await m.Z.assignGuildRoleConnection(c, o.id);
        }
        function er() {
          Z.default.track(V.rMx.PASSPORT_CHALLENGE_STARTED, {
            role_id: o.id,
            ...(0, S.hH)(c),
          });
        }
        function ed(e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          K(e),
            J(n),
            i(1),
            null != n &&
              (0, D.nj)()
                .then((e) => {
                  ee(e);
                })
                .catch(() => {});
        }
        return (
          l.useEffect(() => {
            m.Z.fetchGuildRoleConnectionsEligibility(c, o.id).then((e) => {
              u(e), _(e.some((e) => e.every((e) => e.result))), O(!1);
            });
          }, [c, o.id, U]),
          l.useEffect(() => {
            Z.default.track(V.rMx.PASSPORT_CHALLENGE_VIEWED, {
              role_id: o.id,
              ...(0, S.hH)(c),
            });
          }, [c, o.id]),
          l.useEffect(() => {
            if (!!A && null != ec && !!ec.roles.includes(o.id))
              I(!1),
                eo.length > 0 ? i(2) : null == t || t(),
                Z.default.track(V.rMx.PASSPORT_CHALLENGE_FINISHED, {
                  role_id: o.id,
                  ...(0, S.hH)(c),
                });
          }, [A, eo.length, ec, c, o.id, t]),
          (0, a.jsxs)(T.ModalRoot, {
            size: T.ModalSize.MEDIUM,
            transitionState: n,
            "aria-label": Y.Z.Messages.CONNECT_ACCOUNT_TITLE,
            className: z.modalRoot,
            children: [
              (function () {
                switch (s) {
                  case 0:
                    return (0, a.jsxs)(T.ModalHeader, {
                      className: z.header,
                      separator: !1,
                      children: [
                        (0, a.jsx)("div", {
                          className: z.headerText,
                          children: (0, a.jsx)(T.Heading, {
                            variant: "heading-xl/extrabold",
                            children: Y.Z.Messages.CONNECT_ACCOUNT_TITLE,
                          }),
                        }),
                        (0, a.jsx)(T.ModalCloseButton, { onClick: () => ea() }),
                      ],
                    });
                  case 1: {
                    var e, n;
                    d()(null != F, "lastPlatformConnected is null");
                    let t =
                      null !== (n = null == W ? void 0 : W.name) && void 0 !== n
                        ? n
                        : null === (e = p.Z.get(F)) || void 0 === e
                          ? void 0
                          : e.name;
                    return (0, a.jsxs)(T.ModalHeader, {
                      className: z.header,
                      separator: !1,
                      children: [
                        (0, a.jsx)(T.Heading, {
                          variant: "heading-xl/extrabold",
                          className: z.headerText,
                          children:
                            Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED.format(
                              { platformName: t },
                            ),
                        }),
                        (0, a.jsx)(T.ModalCloseButton, { onClick: () => ea() }),
                      ],
                    });
                  }
                  case 2:
                    return (0, a.jsxs)(T.ModalHeader, {
                      className: z.header,
                      separator: !1,
                      children: [
                        (0, a.jsx)(T.Heading, {
                          variant: "heading-xl/extrabold",
                          className: z.headerText,
                          children:
                            Y.Z.Messages
                              .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ROLE_GRANTED,
                        }),
                        (0, a.jsx)(T.ModalCloseButton, {
                          onClick: () => ea(!0),
                        }),
                      ],
                    });
                  default:
                    return null;
                }
              })(),
              (0, a.jsx)(T.Sequencer, {
                step: s,
                steps: [0, 1, 2],
                children: (function () {
                  switch (s) {
                    case 0: {
                      let e = null != r && r.length > 1,
                        n = null != r && 1 === r.length && 1 === r[0].length;
                      return (0, a.jsx)(T.ModalContent, {
                        children:
                          h || null == r
                            ? (0, a.jsx)(T.Spinner, {
                                className: z.connectionsChecksGroups,
                              })
                            : (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)(T.Text, {
                                    variant: "text-md/medium",
                                    color: "header-secondary",
                                    children: (n
                                      ? Y.Z.Messages
                                          .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ONE
                                      : e
                                        ? Y.Z.Messages
                                            .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ANY
                                        : Y.Z.Messages
                                            .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ALL
                                    ).format({ roleName: o.name }),
                                  }),
                                  (0, a.jsx)(T.ScrollerThin, {
                                    className: z.connectionsChecksGroups,
                                    children: (0, a.jsx)(Q, {
                                      eligibilityStatesGroups: r,
                                      onPlatformConnect: er,
                                      onPlatformConnected: ed,
                                    }),
                                  }),
                                  (0, a.jsx)(T.Text, {
                                    variant: "text-xs/normal",
                                    className: z.footerText,
                                    color: "header-secondary",
                                    children:
                                      Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format(
                                        {
                                          privacyPolicyUrl: V.EYA.PRIVACY,
                                          onAuthorizedApplicationsClick: () =>
                                            el(),
                                          onConnectionsClick: () => es(),
                                        },
                                      ),
                                  }),
                                ],
                              }),
                      });
                    }
                    case 1: {
                      d()(null != F, "lastPlatformConnected is null");
                      let e = U.find((e) => {
                          let { type: n } = e;
                          return F === n;
                        }),
                        n =
                          null == $
                            ? void 0
                            : $.find((e) => {
                                let { application: n } = e;
                                return n.id === (null == W ? void 0 : W.id);
                              });
                      return (0, a.jsxs)(T.ModalContent, {
                        children: [
                          (0, a.jsx)(T.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children:
                              Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format(
                                {
                                  privacyPolicyUrl: V.EYA.PRIVACY,
                                  onAuthorizedApplicationsClick: () => el(),
                                  onConnectionsClick: () => es(),
                                },
                              ),
                          }),
                          (0, a.jsx)("div", {
                            className: z.accountConnectedContainer,
                            children:
                              null == e && null == n
                                ? (0, a.jsx)(T.Spinner, {
                                    className: z.accountConnectedLoading,
                                  })
                                : (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      null != e
                                        ? (0, a.jsxs)(a.Fragment, {
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className:
                                                  z.accountConnectedContainerChild,
                                                children: [
                                                  (0, a.jsx)(T.Text, {
                                                    variant: "eyebrow",
                                                    color: "header-secondary",
                                                    children:
                                                      Y.Z.Messages
                                                        .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW,
                                                  }),
                                                  (0, a.jsx)(v.E3, {
                                                    connectedAccount: e,
                                                    userId: w,
                                                    theme: en,
                                                    locale: et,
                                                    className:
                                                      z.accountConnectedPreviewConnectedUserAccount,
                                                    showMetadata: f,
                                                    showInvisibleIcon: R,
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className:
                                                  z.accountConnectedContainerChild,
                                                children: [
                                                  (0, a.jsx)(T.Text, {
                                                    variant: "eyebrow",
                                                    color: "header-secondary",
                                                    children:
                                                      Y.Z.Messages
                                                        .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PRIVACY,
                                                  }),
                                                  (0, a.jsx)(X, {
                                                    account: e,
                                                    setShowPreviewInvisibleIcon:
                                                      P,
                                                    setShowPreviewMetadata: y,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          })
                                        : null,
                                      null != n
                                        ? (0, a.jsxs)("div", {
                                            className:
                                              z.accountConnectedContainerChild,
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className:
                                                  z.accountConnectedHeader,
                                                children: [
                                                  (0, a.jsx)(T.Text, {
                                                    variant: "eyebrow",
                                                    color: "header-secondary",
                                                    children:
                                                      Y.Z.Messages
                                                        .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW,
                                                  }),
                                                  (0, a.jsx)(T.Tooltip, {
                                                    text: Y.Z.Messages
                                                      .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_TOOLTIP,
                                                    children: (e) =>
                                                      (0, a.jsx)(
                                                        T.CircleInformationIcon,
                                                        {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          ...e,
                                                        },
                                                      ),
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsx)(v.tH, {
                                                applicationRoleConnection: n,
                                                className:
                                                  z.accountConnectedPreviewConnectedUserAccount,
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
                      return (0, a.jsxs)(T.ModalContent, {
                        children: [
                          (0, a.jsxs)("div", {
                            className: z.roleGranted,
                            children: [
                              (0, a.jsx)(B.Z, {
                                guildId: c,
                                className: z.verifiedIcon,
                                role: o,
                                size: 24,
                              }),
                              (0, a.jsx)(T.Text, {
                                variant: "text-lg/semibold",
                                color: "header-primary",
                                className: z.roleGrantedName,
                                children: o.name,
                              }),
                            ],
                          }),
                          (0, a.jsx)(T.ScrollerThin, {
                            className: z.channelsGranted,
                            children: eo.map((e) =>
                              (0, a.jsx)(q, { channel: e }, e.id),
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
                      null == r
                        ? void 0
                        : r.flat().some((e) => null == e.application_id)) &&
                  void 0 !== e &&
                  e;
                switch (s) {
                  case 0:
                    return (0, a.jsxs)(T.ModalFooter, {
                      children: [
                        (0, a.jsx)(T.Button, {
                          color: T.ButtonColors.BRAND,
                          onClick: () => ei(),
                          disabled: h || !C || A,
                          children: Y.Z.Messages.FINISH,
                        }),
                        n
                          ? (0, a.jsx)("div", {
                              className: z.manageConnectionsFooterButton,
                              children: (0, a.jsx)(T.Button, {
                                look: T.ButtonLooks.LINK,
                                color: T.ButtonColors.LINK,
                                onClick: es,
                                children:
                                  Y.Z.Messages
                                    .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS,
                              }),
                            })
                          : null,
                      ],
                    });
                  case 1:
                    return (0, a.jsx)(T.ModalFooter, {
                      children: (0, a.jsx)(T.Button, {
                        color: T.ButtonColors.BRAND,
                        onClick: () => i(0),
                        children: Y.Z.Messages.DONE,
                      }),
                    });
                  default:
                    return (0, a.jsxs)(T.ModalFooter, {
                      children: [
                        (0, a.jsx)(T.Button, {
                          color: T.ButtonColors.BRAND,
                          onClick: () => ea(!0),
                          children: Y.Z.Messages.CLOSE,
                        }),
                        n
                          ? (0, a.jsx)("div", {
                              className: z.manageConnectionsFooterButton,
                              children: (0, a.jsx)(T.Button, {
                                look: T.ButtonLooks.LINK,
                                color: T.ButtonColors.LINK,
                                onClick: es,
                                children:
                                  Y.Z.Messages
                                    .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS,
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
    473522: function (e, n, t) {
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
    654711: function (e, n, t) {
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
    962586: function (e, n, t) {
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
    865244: function (e, n, t) {
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
//# sourceMappingURL=08a98f66cc608fee030a.js.map
