"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57486"],
  {
    289575: function (e) {
      e.exports = "/assets/f3b668d24838c7031ba4.svg";
    },
    371411: function (e) {
      e.exports = "/assets/7b87609b13dad1dd3389.svg";
    },
    112847: function (e) {
      e.exports = "/assets/e7681bff22fc3aa4a4bd.svg";
    },
    516954: function (e) {
      e.exports = "/assets/3e87b61a306227219abc.svg";
    },
    674889: function (e) {
      e.exports = "/assets/311b25874ac56fabe7df.svg";
    },
    162752: function (e) {
      e.exports = "/assets/93f0efd81608b23a80bb.svg";
    },
    785697: function (e, s, t) {
      t.d(s, {
        D2: function () {
          return r;
        },
        SE: function () {
          return c;
        },
      });
      var a = t(442837),
        l = t(818083),
        i = t(496675),
        n = t(981631);
      let o = (0, l.B)({
        kind: "guild",
        id: "2022-11_default_disable_mass_mention",
        label: "Disable mass mentions for communities by default",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function r(e) {
        return o.useExperiment(
          { guildId: e, location: "dd4beb_1" },
          { autoTrackExposure: !0 },
        );
      }
      function c(e) {
        var s;
        let t = (0, a.e7)([i.Z], () => i.Z.can(n.Plq.MANAGE_GUILD, e)),
          { enabled: l } = o.useExperiment(
            {
              guildId:
                null !== (s = null == e ? void 0 : e.id) && void 0 !== s
                  ? s
                  : n.lds,
              location: "dd4beb_3",
            },
            { autoTrackExposure: !0 },
          );
        if (null == e) return !1;
        let r = e.hasFeature(n.oNc.COMMUNITY);
        return t && r && l;
      }
    },
    416162: function (e, s, t) {
      t(47120);
      var a = t(735250),
        l = t(470079),
        i = t(120356),
        n = t.n(i),
        o = t(481060),
        r = t(313201),
        c = t(689938),
        d = t(671075);
      let _ = (e) => {
        let { index: s, title: t, selected: l } = e;
        return (0, a.jsxs)("div", {
          className: n()(d.overviewStep, { [d.selected]: l }),
          children: [
            (0, a.jsx)(o.Text, {
              className: d.stepIndex,
              variant: "text-sm/normal",
              children: s + 1,
            }),
            (0, a.jsx)(o.Text, {
              variant: "text-md/normal",
              className: d.stepTitle,
              children: t,
            }),
          ],
        });
      };
      s.Z = (e) => {
        let {
            className: s,
            title: t,
            stepData: i,
            transitionState: E,
            onClose: N,
            completeButtonText: I,
            overviewFooter: T,
            onNextPressed: M,
            onPrevPressed: m,
            onComplete: x,
            sequencerClassName: u,
            initialStep: L = 0,
            forceStep: O,
            submitting: C = !1,
            autoCloseOnComplete: h = !0,
          } = e,
          [A, p] = l.useState([]),
          [S, f] = l.useState(L),
          g = (0, r.Dt)();
        l.useEffect(() => {
          p([...Array(i.length).keys()]);
        }, [i.length]);
        let v = null != O ? O : S,
          b = i[v],
          D = 0 === v,
          j = v === i.length - 1,
          R = null != I ? I : c.Z.Messages.DONE,
          U = l.useCallback(() => {
            null == m || m(), f(v - 1);
          }, [m, v, f]);
        return (0, a.jsxs)(o.ModalRoot, {
          size: o.ModalSize.MEDIUM,
          className: n()(d.container, s),
          transitionState: E,
          "aria-labelledby": g,
          children: [
            (0, a.jsxs)("div", {
              className: d.overviewSidebar,
              children: [
                (0, a.jsx)(o.Heading, {
                  id: g,
                  variant: "heading-xl/semibold",
                  className: d.header,
                  children: t,
                }),
                (0, a.jsx)("div", {
                  className: d.overviewSteps,
                  children: i.map((e, s) =>
                    (0, a.jsx)(
                      _,
                      { index: s, title: e.overviewTitle, selected: s === v },
                      s,
                    ),
                  ),
                }),
                T,
              ],
            }),
            (0, a.jsxs)("div", {
              className: d.modal,
              children: [
                (0, a.jsxs)(o.ModalContent, {
                  children: [
                    (0, a.jsx)(o.ModalCloseButton, {
                      focusProps: { offset: { top: 4, right: 4, left: 4 } },
                      onClick: N,
                      className: d.closeButton,
                    }),
                    (0, a.jsx)(o.Sequencer, {
                      step: v,
                      steps: A,
                      sideMargin: 24,
                      verticalMargin: 24,
                      className: n()(d.sequencer, u),
                      innerClassName: d.innerSequencer,
                      children: b.modalContent,
                    }),
                  ],
                }),
                (0, a.jsxs)(o.ModalFooter, {
                  className: d.footer,
                  children: [
                    (0, a.jsx)(o.Button, {
                      type: "submit",
                      submitting: C,
                      onClick: () => {
                        j ? (x(), h && N()) : (null == M || M(), f(v + 1));
                      },
                      color: o.Button.Colors.GREEN,
                      disabled: b.disableNextStep,
                      children: j ? R : c.Z.Messages.NEXT,
                    }),
                    D
                      ? null
                      : (0, a.jsx)(o.Button, {
                          look: o.Button.Looks.LINK,
                          color: o.Button.Colors.PRIMARY,
                          size: o.Button.Sizes.MIN,
                          onClick: U,
                          children: c.Z.Messages.BACK,
                        }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    87026: function (e, s, t) {
      t.r(s), t(653041), t(47120);
      var a = t(735250),
        l = t(470079),
        i = t(120356),
        n = t.n(i),
        o = t(149765),
        r = t(442837),
        c = t(692547),
        d = t(780384),
        _ = t(481060),
        E = t(785697),
        N = t(933557),
        I = t(313201),
        T = t(434404),
        M = t(764260),
        m = t(999382),
        x = t(416162),
        u = t(422559),
        L = t(210887),
        O = t(984933),
        C = t(430824),
        h = t(699516),
        A = t(594174),
        p = t(626135),
        S = t(63063),
        f = t(700785),
        g = t(245315),
        v = t(135899),
        b = t(981631),
        D = t(689938),
        j = t(990237),
        R = t(289575),
        U = t(371411),
        B = t(112847),
        P = t(516954),
        Z = t(674889),
        F = t(162752),
        Y = t(438825);
      let y = (e) => {
          let {
              guild: s,
              onAcceptVerificationLevel: t,
              onAcceptContentFilter: l,
              disableContentFilter: i,
              disableVerificationLevel: n,
              headerId: o,
              theme: c,
            } = e,
            E = (0, r.e7)([C.Z], () => C.Z.getGuild(s.id), [s.id]),
            N = null != E && E.verificationLevel > b.sFg.NONE,
            I =
              (null == E ? void 0 : E.explicitContentFilter) ===
              b.lxg.ALL_MEMBERS,
            T = (0, d.wj)(c) ? Z : F;
          return (0, a.jsxs)("div", {
            className: j.container,
            children: [
              (0, a.jsxs)("div", {
                className: j.content,
                children: [
                  (0, a.jsx)("img", { alt: "", src: T, width: 80 }),
                  (0, a.jsx)(_.Heading, {
                    variant: "heading-xl/semibold",
                    className: j.header,
                    id: o,
                    children: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_HEADER,
                  }),
                  (0, a.jsx)(_.Text, {
                    color: "none",
                    variant: "text-md/normal",
                    className: j.headerCaption,
                    children: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_BODY,
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: j.form,
                children: [
                  (0, a.jsx)(_.FormTitle, {
                    children: D.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL,
                  }),
                  (0, a.jsx)(_.FormText, {
                    type: _.FormTextTypes.DESCRIPTION,
                    className: j.description,
                    children: N
                      ? D.Z.Messages
                          .ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_MET
                      : D.Z.Messages
                          .ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_HELP,
                  }),
                  (0, a.jsx)(_.Checkbox, {
                    type: _.Checkbox.Types.ROW,
                    disabled: n,
                    value: s.verificationLevel > b.sFg.NONE,
                    onChange: t,
                    children: (0, a.jsx)(_.Text, {
                      variant: "text-sm/normal",
                      children:
                        D.Z.Messages
                          .ENABLE_PUBLIC_MODAL_VERIFICATION_LEVEL_DESCRIPTION,
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: j.form,
                children: [
                  (0, a.jsx)(_.FormTitle, {
                    children: D.Z.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER,
                  }),
                  (0, a.jsx)(_.FormText, {
                    type: _.FormTextTypes.DESCRIPTION,
                    className: j.description,
                    children: I
                      ? D.Z.Messages.ENABLE_COMMUNITY_MODAL_CONTENT_FILTER_MET
                      : D.Z.Messages.ENABLE_PUBLIC_MODAL_CONTENT_FILTER_HELP,
                  }),
                  (0, a.jsx)(_.Checkbox, {
                    type: _.Checkbox.Types.ROW,
                    disabled: i,
                    value: s.explicitContentFilter === b.lxg.ALL_MEMBERS,
                    onChange: l,
                    children: (0, a.jsx)(_.Text, {
                      variant: "text-sm/normal",
                      children: D.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH,
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        G = (e) => {
          let {
            selectableChannels: s,
            onRuleChannelChange: t,
            ruleChannel: i,
            onPublicUpdatesChannelChange: n,
            publicUpdatesChannel: o,
            headerId: r,
            theme: c,
            guildId: E,
          } = e;
          l.useEffect(() => {
            (0, g.BF)({
              fromStep: v.IO.SAFETY_CHECK,
              toStep: v.IO.BASICS,
              guildId: E,
            });
          }, [E]);
          let N = (0, d.wj)(c) ? R : U;
          return (0, a.jsxs)("div", {
            className: j.container,
            children: [
              (0, a.jsxs)("div", {
                className: j.content,
                children: [
                  (0, a.jsx)("img", { alt: "", src: N, width: 80 }),
                  (0, a.jsx)(_.Heading, {
                    variant: "heading-xl/semibold",
                    className: j.header,
                    id: r,
                    children: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_HEADER,
                  }),
                  (0, a.jsx)(_.Text, {
                    color: "none",
                    variant: "text-md/normal",
                    className: j.headerCaption,
                    children: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_BODY,
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: j.form,
                children: [
                  (0, a.jsx)(_.FormTitle, {
                    children:
                      D.Z.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_TITLE,
                  }),
                  (0, a.jsx)(_.FormText, {
                    type: _.FormTextTypes.DESCRIPTION,
                    className: j.description,
                    children:
                      D.Z.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_HELP,
                  }),
                  (0, a.jsx)(_.SearchableSelect, {
                    options: s,
                    onChange: t,
                    value: i,
                    maxVisibleItems: 4,
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: j.form,
                children: [
                  (0, a.jsx)(_.FormTitle, {
                    children:
                      D.Z.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE,
                  }),
                  (0, a.jsx)(_.FormText, {
                    type: _.FormTextTypes.DESCRIPTION,
                    className: j.description,
                    children:
                      D.Z.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_HELP,
                  }),
                  (0, a.jsx)(_.SearchableSelect, {
                    options: s,
                    onChange: n,
                    value: o,
                    popoutPosition: "top",
                    maxVisibleItems: 4,
                  }),
                ],
              }),
            ],
          });
        },
        k = (e) => {
          let {
              guild: s,
              policyAccepted: t,
              everyoneRolePermissionsAccepted: i,
              onAcceptPolicy: o,
              onAcceptDefaultNotifications: r,
              onAcceptEveryoneRolePermissions: c,
              disableDefaultNotifications: E,
              disableEveryoneRolePermissions: N,
              headerId: I,
              theme: T,
            } = e,
            M = (0, d.wj)(T) ? B : P;
          return (
            l.useEffect(() => {
              (0, g.BF)({
                fromStep: v.IO.BASICS,
                toStep: v.IO.FINISH,
                guildId: s.id,
              });
            }, [s.id]),
            (0, a.jsxs)("div", {
              className: j.container,
              children: [
                (0, a.jsxs)("div", {
                  className: j.content,
                  children: [
                    (0, a.jsx)("img", { alt: "", src: M, width: 80 }),
                    (0, a.jsx)(_.Heading, {
                      variant: "heading-xl/semibold",
                      className: j.header,
                      id: I,
                      children:
                        D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER,
                    }),
                    (0, a.jsx)(_.Text, {
                      color: "none",
                      variant: "text-md/normal",
                      className: j.headerCaption,
                      children: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_BODY,
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: j.form,
                  children: (0, a.jsx)(_.Tooltip, {
                    text: E
                      ? D.Z.Messages
                          .ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP
                      : null,
                    "aria-label":
                      !!E &&
                      D.Z.Messages
                        .ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
                    children: (e) =>
                      (0, a.jsx)("div", {
                        ...e,
                        children: (0, a.jsx)(_.Checkbox, {
                          type: _.Checkbox.Types.ROW,
                          disabled: E,
                          value:
                            s.defaultMessageNotifications ===
                            b.bL.ONLY_MENTIONS,
                          onChange: r,
                          className: n()({ [j.disabled]: E }),
                          children: (0, a.jsx)(_.Text, {
                            variant: "text-sm/normal",
                            children:
                              D.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format(
                                {
                                  infoHook: () =>
                                    (0, a.jsx)(_.Tooltip, {
                                      text: D.Z.Messages
                                        .ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                      "aria-label":
                                        D.Z.Messages
                                          .ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                      children: (e) =>
                                        (0, a.jsx)(_.CircleInformationIcon, {
                                          size: "xs",
                                          color: "currentColor",
                                          className: j.icon,
                                          ...e,
                                        }),
                                    }),
                                },
                              ),
                          }),
                        }),
                      }),
                  }),
                }),
                (0, a.jsx)(_.Tooltip, {
                  text: N
                    ? D.Z.Messages
                        .ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP
                    : null,
                  "aria-label":
                    !!N &&
                    D.Z.Messages
                      .ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
                  children: (e) =>
                    (0, a.jsx)("div", {
                      ...e,
                      className: j.checkboxOption,
                      children: (0, a.jsx)(_.Checkbox, {
                        type: _.Checkbox.Types.ROW,
                        disabled: N,
                        value: i,
                        onChange: c,
                        className: n()({ [j.disabled]: N }),
                        children: (0, a.jsx)(_.Text, {
                          variant: "text-sm/normal",
                          children:
                            D.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL.format(
                              {
                                infoHook: () =>
                                  (0, a.jsx)(_.Tooltip, {
                                    text: D.Z.Messages
                                      .ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                                    "aria-label":
                                      D.Z.Messages
                                        .ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                                    children: (e) =>
                                      (0, a.jsx)(_.CircleInformationIcon, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: j.icon,
                                        ...e,
                                      }),
                                  }),
                              },
                            ),
                        }),
                      }),
                    }),
                }),
                (0, a.jsxs)("div", {
                  className: j.form,
                  children: [
                    (0, a.jsx)(_.FormTitle, {
                      children: D.Z.Messages.PUBLIC_GUILD_POLICY_TITLE,
                    }),
                    (0, a.jsx)(_.FormText, {
                      type: _.FormTextTypes.DESCRIPTION,
                      className: j.description,
                      children:
                        D.Z.Messages.COMMUNITY_GUIDELINES_AND_TYPES_OF_SPACES_POLICIES.format(
                          {
                            communityGuidelines: S.Z.getArticleURL(
                              b.BhN.PUBLIC_GUILD_GUILDLINES,
                            ),
                            typesOfGuilds: S.Z.getArticleURL(
                              b.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES,
                            ),
                          },
                        ),
                    }),
                    (0, a.jsx)(_.Checkbox, {
                      type: _.Checkbox.Types.ROW,
                      value: t,
                      onChange: o,
                      children: (0, a.jsx)(_.Text, {
                        variant: "text-sm/normal",
                        children: D.Z.Messages.PUBLIC_GUILD_POLICY_ACCEPT,
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
      function w(e) {
        let { guild: s } = e,
          t = (0, r.e7)([C.Z], () => C.Z.getRole(s.id, s.getEveryoneRoleId()));
        if (null == t) return null;
        let { name: l, color: i } = t;
        return (0, a.jsx)("div", {
          className: j.__invalid_role,
          children: (0, a.jsxs)("span", {
            className: j.roleRow,
            children: [
              (0, a.jsx)(_.RoleDot, {
                className: j.roleDot,
                color: i.toString(),
                background: !1,
                tooltip: !1,
              }),
              (0, a.jsx)(_.Text, {
                className: j.roleName,
                variant: "text-sm/medium",
                color: "interactive-active",
                children: l,
              }),
            ],
          }),
        });
      }
      function H(e) {
        let { enabledPermissions: s, onGetPermisisonName: t } = e;
        return (0, a.jsxs)("div", {
          className: j.tableContainer,
          children: [
            (0, a.jsx)(_.Text, {
              className: j.tableHeader,
              variant: "text-xs/semibold",
              color: "text-muted",
              children:
                D.Z.Messages
                  .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLING_PERMISSIONS,
            }),
            (0, a.jsx)("div", {
              className: j.permissionsTable,
              children: s.map((e, s) =>
                (0, a.jsxs)(
                  "div",
                  {
                    className: j.permissionRow,
                    children: [
                      (0, a.jsx)("div", { className: j.bulletWarning }),
                      (0, a.jsx)(_.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        children: t(e),
                      }),
                    ],
                  },
                  s,
                ),
              ),
            }),
          ],
        });
      }
      function V(e) {
        let { disabledPermissions: s, onGetPermisisonName: t } = e,
          l =
            D.Z.Messages
              .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS;
        return (
          s.length === v.$X.length &&
            (l = D.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED),
          (0, a.jsxs)("div", {
            className: j.tableContainer,
            children: [
              (0, a.jsx)(_.Text, {
                className: j.tableHeader,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: l,
              }),
              (0, a.jsx)("div", {
                className: j.permissionsTable,
                children: s.map((e, s) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className: j.permissionRow,
                      children: [
                        (0, a.jsx)("div", { className: j.bullet }),
                        (0, a.jsx)(_.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: t(e),
                        }),
                      ],
                    },
                    s,
                  ),
                ),
              }),
            ],
          })
        );
      }
      function q(e) {
        let { permissions: s } = e,
          t = (e) => {
            switch (e.toString()) {
              case b.Plq.MENTION_EVERYONE.toString():
                return D.Z.Messages
                  .ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
              case b.Plq.CREATE_GUILD_EXPRESSIONS.toString():
                return D.Z.Messages
                  .ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_CREATE_EMOJI;
              case b.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
                return D.Z.Messages
                  .ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MANAGE_EMOJI;
              default:
                return (0, u.wt)(e);
            }
          },
          { enabledPermissions: l, disabledPermissions: i } = s;
        return (0, a.jsxs)("div", {
          className: j.table,
          children: [
            0 !== l.length
              ? (0, a.jsx)(H, { enabledPermissions: l, onGetPermisisonName: t })
              : null,
            (0, a.jsx)(V, { disabledPermissions: i, onGetPermisisonName: t }),
          ],
        });
      }
      let z = (e) => {
        let {
            guild: s,
            policyAccepted: t,
            onAcceptPolicy: i,
            headerId: n,
            theme: o,
          } = e,
          r = (0, d.wj)(o) ? B : P;
        l.useEffect(() => {
          (0, g.BF)({
            fromStep: v.IO.BASICS,
            toStep: v.IO.FINISH,
            guildId: s.id,
          });
        }, [s.id]);
        let E = l.useMemo(() => {
          let e = [],
            t = [];
          return (
            v.$X.map((a) => {
              f.oz(a, s) ? e.push(a) : t.push(a);
            }),
            { enabledPermissions: e, disabledPermissions: t }
          );
        }, [s]);
        return (0, a.jsxs)("div", {
          className: j.container,
          children: [
            (0, a.jsxs)("div", {
              className: j.content,
              children: [
                (0, a.jsx)("img", { alt: "", src: r, width: 80 }),
                (0, a.jsx)(_.Heading, {
                  variant: "heading-xl/semibold",
                  className: j.updatedHeader,
                  id: n,
                  children: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER,
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: j.updatedForm,
              children: [
                (0, a.jsx)(_.FormTitle, {
                  className: j.formTitle,
                  children:
                    D.Z.Messages.ENABLE_COMMUNITY_MODAL_UPDATED_SETTINGS_LABEL,
                }),
                (0, a.jsxs)("div", {
                  className: j.checklistRow,
                  children: [
                    (0, a.jsx)(_.CircleCheckIcon, {
                      size: "md",
                      className: j.checklistIcon,
                      color: c.Z.unsafe_rawColors.GREEN_360.css,
                      secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css,
                    }),
                    (0, a.jsx)(_.Text, {
                      variant: "text-md/normal",
                      children:
                        D.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format(
                          {
                            infoHook: () =>
                              (0, a.jsx)(_.Tooltip, {
                                text: D.Z.Messages
                                  .ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                "aria-label":
                                  D.Z.Messages
                                    .ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                children: (e) =>
                                  (0, a.jsx)(_.CircleInformationIcon, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: j.icon,
                                    ...e,
                                  }),
                              }),
                          },
                        ),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: j.checklistRow,
                  children: [
                    (0, a.jsx)(_.CircleCheckIcon, {
                      size: "md",
                      className: j.checklistIcon,
                      color: c.Z.unsafe_rawColors.GREEN_360.css,
                      secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css,
                    }),
                    (0, a.jsx)(_.Text, {
                      variant: "text-md/normal",
                      children:
                        D.Z.Messages
                          .ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL_UPDATED,
                    }),
                    (0, a.jsx)(w, { guild: s }),
                  ],
                }),
                (0, a.jsx)(q, { permissions: E }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: j.updatedForm,
              children: [
                (0, a.jsx)(_.FormTitle, {
                  className: j.formTitle,
                  children: D.Z.Messages.PUBLIC_GUILD_POLICY_TITLE,
                }),
                (0, a.jsx)(_.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  className: j.description,
                  children:
                    D.Z.Messages.COMMUNITY_GUIDELINES_AND_TYPES_OF_SPACES_POLICIES.format(
                      {
                        communityGuidelines: S.Z.getArticleURL(
                          b.BhN.PUBLIC_GUILD_GUILDLINES,
                        ),
                        typesOfGuilds: S.Z.getArticleURL(
                          b.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES,
                        ),
                      },
                    ),
                }),
                (0, a.jsx)(_.Checkbox, {
                  type: _.Checkbox.Types.ROW,
                  value: t,
                  onChange: i,
                  children: (0, a.jsx)(_.Text, {
                    className: j.acceptText,
                    variant: "text-md/medium",
                    color: "header-primary",
                    children: D.Z.Messages.PUBLIC_GUILD_POLICY_ACCEPT,
                  }),
                }),
              ],
            }),
          ],
        });
      };
      s.default = (e) => {
        var s;
        let { transitionState: t, onClose: i } = e;
        l.useEffect(() => {
          p.default.track(b.rMx.OPEN_MODAL, { type: v.tA });
        }, []);
        let { guild: n } = (0, r.cj)([m.Z], () => m.Z.getProps()),
          c = (0, r.e7)([L.Z], () => L.Z.theme),
          [d, _] = l.useState(!1),
          [u, S] = l.useState(!v.$X.some((e) => f.oz(e, n))),
          [g, R] = l.useState(v.b4),
          [U, B] = l.useState(v.b4),
          [P] = l.useState(null == n ? void 0 : n.defaultMessageNotifications),
          [Z] = l.useState(null == n ? void 0 : n.verificationLevel),
          [F] = l.useState(null == n ? void 0 : n.explicitContentFilter),
          [w] = l.useState(u),
          H = (0, r.e7)([C.Z], () =>
            null != n ? C.Z.getRole(n.id, n.getEveryoneRoleId()) : void 0,
          ),
          V = (0, r.e7)([O.ZP], () =>
            null != n ? O.ZP.getChannels(n.id) : null,
          ),
          q = (0, I.Dt)(),
          { enabled: W } = (0, E.D2)(
            null !== (s = null == n ? void 0 : n.id) && void 0 !== s
              ? s
              : b.lds,
          );
        if (null == n) return null;
        let X = [
          {
            value: v.b4,
            label: D.Z.Messages.ENABLE_PUBLIC_MODAL_CREATE_CHANNEL,
          },
        ];
        V[O.sH].forEach((e) => {
          let { channel: s } = e;
          s.type === b.d4z.GUILD_TEXT &&
            X.push({ value: s.id, label: (0, N.F6)(s, A.default, h.Z, !0) });
        });
        let Q = Z !== b.sFg.NONE,
          K = F === b.lxg.ALL_MEMBERS,
          $ = P === b.bL.ONLY_MENTIONS,
          J = async () => {
            if (null == H || !d) return;
            let e = new Set(n.features);
            e.add(b.oNc.COMMUNITY);
            let s = u ? o.Od(H.permissions, v.mu) : H.permissions,
              t = { ...H, permissions: s };
            s !== H.permissions && (await (0, M.Gf)(n.id, [t])),
              T.Z.updateGuild({
                features: e,
                rulesChannelId: g,
                publicUpdatesChannelId: U,
              }),
              await T.Z.saveGuild(n.id, {
                features: e,
                rulesChannelId: g,
                verificationLevel: n.verificationLevel,
                explicitContentFilter: n.explicitContentFilter,
                publicUpdatesChannelId: U,
                defaultMessageNotifications: n.defaultMessageNotifications,
              }),
              setTimeout(() => {
                i();
              }, 0);
          },
          ee = (0, a.jsx)(y, {
            guild: n,
            disableVerificationLevel: Q,
            disableContentFilter: K,
            onAcceptVerificationLevel: (e, s) => {
              if (!s) {
                T.Z.updateGuild({ verificationLevel: Z });
                return;
              }
              s && T.Z.updateGuild({ verificationLevel: b.sFg.LOW });
            },
            onAcceptContentFilter: (e, s) => {
              if (!s) {
                T.Z.updateGuild({ explicitContentFilter: F });
                return;
              }
              T.Z.updateGuild({ explicitContentFilter: b.lxg.ALL_MEMBERS });
            },
            headerId: q,
            theme: c,
          }),
          es = (0, a.jsx)(G, {
            selectableChannels: X,
            onRuleChannelChange: (e) => {
              R(e);
            },
            onPublicUpdatesChannelChange: (e) => {
              B(e);
            },
            ruleChannel: g,
            publicUpdatesChannel: U,
            headerId: q,
            theme: c,
            guildId: n.id,
          }),
          et = W
            ? (0, a.jsx)(z, {
                guild: n,
                policyAccepted: d,
                onAcceptPolicy: (e, s) => {
                  if (s) {
                    _(!0),
                      !$ &&
                        T.Z.updateGuild({
                          defaultMessageNotifications: b.bL.ONLY_MENTIONS,
                        }),
                      !u && null != H && S(!0);
                    return;
                  }
                  _(!1),
                    $ && T.Z.updateGuild({ defaultMessageNotifications: P }),
                    u && null != H && S(!1);
                },
                headerId: q,
                theme: c,
              })
            : (0, a.jsx)(k, {
                guild: n,
                disableDefaultNotifications: $,
                disableEveryoneRolePermissions: w,
                policyAccepted: d,
                everyoneRolePermissionsAccepted: u,
                onAcceptPolicy: (e, s) => {
                  if (s) {
                    _(!0);
                    return;
                  }
                  _(!1);
                },
                onAcceptDefaultNotifications: (e, s) => {
                  if (!s) {
                    T.Z.updateGuild({ defaultMessageNotifications: P });
                    return;
                  }
                  T.Z.updateGuild({
                    defaultMessageNotifications: b.bL.ONLY_MENTIONS,
                  });
                },
                onAcceptEveryoneRolePermissions: (e, s) => {
                  null != H && (s ? S(!0) : S(!1));
                },
                headerId: q,
                theme: c,
              }),
          ea = (0, a.jsx)("img", {
            alt: "",
            src: Y,
            className: j.footerImage,
            width: 240,
          }),
          el = [
            {
              modalContent: ee,
              disableNextStep:
                n.explicitContentFilter !== b.lxg.ALL_MEMBERS ||
                n.verificationLevel === b.sFg.NONE,
              overviewTitle: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_TITLE,
            },
            {
              modalContent: es,
              disableNextStep: null == g || null == U,
              overviewTitle: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_TITLE,
            },
            {
              modalContent: et,
              disableNextStep: !d,
              overviewTitle: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_TITLE,
            },
          ];
        return (0, a.jsx)(x.Z, {
          stepData: el,
          title: D.Z.Messages.ENABLE_COMMUNITY_MODAL_TITLE,
          transitionState: t,
          onClose: () => {
            i(), p.default.track(b.rMx.MODAL_DISMISSED, { type: v.tA });
          },
          completeButtonText: D.Z.Messages.ENABLE_COMMUNITY_BUTTON_TEXT,
          onComplete: J,
          overviewFooter: ea,
          sequencerClassName: j.container,
          autoCloseOnComplete: !1,
        });
      };
    },
    671075: function (e, s, t) {
      e.exports = {
        container: "container_d65fcf noScroll_d65fcf",
        sequencer: "sequencer_d65fcf",
        innerSequencer: "innerSequencer_d65fcf",
        modal: "modal_d65fcf",
        overviewSidebar: "overviewSidebar_d65fcf",
        header: "header_d65fcf",
        closeButton: "closeButton_d65fcf",
        footer: "footer_d65fcf",
        overviewSteps: "overviewSteps_d65fcf",
        overviewStep: "overviewStep_d65fcf",
        stepTitle: "stepTitle_d65fcf",
        stepIndex: "stepIndex_d65fcf",
        selected: "selected_d65fcf",
      };
    },
    990237: function (e, s, t) {
      e.exports = {
        container: "container_ccd405",
        content: "content_ccd405",
        headerCaption: "headerCaption_ccd405",
        form: "form_ccd405",
        description: "description_ccd405",
        icon: "icon_ccd405",
        header: "header_ccd405",
        checkboxOption: "checkboxOption_ccd405",
        disabled: "disabled_ccd405",
        footerImage: "footerImage_ccd405",
        updatedHeader: "updatedHeader_ccd405",
        updatedForm: "updatedForm_ccd405",
        formTitle: "formTitle_ccd405",
        checklistRow: "checklistRow_ccd405",
        checklistIcon: "checklistIcon_ccd405",
        roleRow: "roleRow_ccd405",
        roleDot: "roleDot_ccd405",
        roleName: "roleName_ccd405",
        table: "table_ccd405",
        tableContainer: "tableContainer_ccd405",
        tableHeader: "tableHeader_ccd405",
        permissionsTable: "permissionsTable_ccd405",
        permissionRow: "permissionRow_ccd405",
        bullet: "bullet_ccd405",
        bulletWarning: "bulletWarning_ccd405 bullet_ccd405",
        acceptText: "acceptText_ccd405",
      };
    },
  },
]);
//# sourceMappingURL=44684bfefad14d376260.js.map
