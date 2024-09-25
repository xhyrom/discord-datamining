"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36194"],
  {
    216019: function (e) {
      e.exports = "/assets/48340e291a1e5f7e391d.svg";
    },
    286359: function (e) {
      e.exports = "/assets/32a661e138db0f0e0bd6.svg";
    },
    635703: function (e, t, n) {
      n.r(t),
        n.d(t, {
          openCreateGuildModal: function () {
            return d;
          },
          updateCreateGuildModal: function () {
            return m;
          },
        });
      var o = n(735250);
      n(470079);
      var l = n(481060),
        a = n(390885),
        i = n(626135),
        r = n(299402),
        s = n(675999),
        c = n(981631),
        u = n(630724);
      function _(e, t, n, l) {
        return (0, o.jsx)(r.Z, {
          onSuccess: (t) => {
            a.Z.flowStep(u.MK.CREATE_GUILD, u.X2.SUCCESS),
              e.onClose(),
              null == l || l(t);
          },
          onSlideChange: (e) =>
            (function (e, t) {
              switch (e) {
                case s._m.GUILD_TEMPLATES:
                  a.Z.flowStepOrStart(u.MK.CREATE_GUILD, u.X2.GUILD_TEMPLATES),
                    i.default.track(c.rMx.OPEN_MODAL, {
                      type: "Create Guild Templates",
                      location: t,
                    });
                  break;
                case s._m.CUSTOMIZE_GUILD:
                  a.Z.flowStep(u.MK.CREATE_GUILD, u.X2.GUILD_CREATE),
                    i.default.track(c.rMx.OPEN_MODAL, {
                      type: "Create Guild Step 2",
                      location: t,
                    });
                  break;
                case s._m.CREATION_INTENT:
                  i.default.track(c.rMx.OPEN_MODAL, {
                    type: "Server Intent Discovery",
                    location: t,
                  });
                  break;
                case s._m.JOIN_GUILD:
                  a.Z.flowStep(u.MK.CREATE_GUILD, u.X2.JOIN_GUILD),
                    i.default.track(c.rMx.OPEN_MODAL, {
                      type: "Join Guild",
                      location: t,
                    });
              }
            })(e, n),
          initialSlide: t,
          hasJoinButton: !0,
          ...e,
        });
      }
      let d = (e) => {
          let { initialSlide: t, location: n, onSuccess: o } = e;
          (0, l.openModal)((e) => _(e, t, n, o), { modalKey: s.PU });
        },
        m = (e) => {
          let { slide: t, location: n } = e;
          (0, l.updateModal)(s.PU, (e) => _(e, t, n));
        };
    },
    299402: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
      }),
        n(47120);
      var o = n(735250),
        l = n(470079),
        a = n(512722),
        i = n.n(a),
        r = n(990547),
        s = n(481060),
        c = n(110924),
        u = n(626135),
        _ = n(215292),
        d = n(382086),
        m = n(996453),
        p = n(446706),
        I = n(867581),
        N = n(675999),
        f = n(981631),
        E = n(870863);
      function T(e) {
        let {
            transitionState: t,
            initialSlide: n = N._m.GUILD_TEMPLATES,
            onSuccess: a,
            onClose: T,
            onSlideChange: C,
            hasJoinButton: S,
          } = e,
          [L, A] = l.useState(n),
          D = (0, c.Z)(L),
          [M, O] = l.useState(null),
          [U, h] = l.useState(null),
          [x, g] = l.useState(null),
          [G, R] = l.useState(!1);
        l.useEffect(() => {
          A(n);
        }, [A, n]),
          l.useEffect(() => {
            L !== D && C(L);
          }, [C, L, D]);
        let w = l.useCallback((e) => {
            A(N._m.CREATION_INTENT),
              h(e),
              u.default.track(f.rMx.GUILD_TEMPLATE_SELECTED, {
                template_name: e.id,
                template_code: e.code,
              });
          }, []),
          v = l.useCallback((e) => {
            R(e === N.lr.COMMUNITY), A(N._m.CUSTOMIZE_GUILD);
          }, []),
          b = l.useCallback(() => A(N._m.JOIN_GUILD), [A]),
          k = l.useCallback(() => {
            if (L === N._m.CUSTOMIZE_GUILD) {
              A(N._m.CREATION_INTENT);
              return;
            }
            A(N._m.GUILD_TEMPLATES), h(null);
          }, [L]),
          Z = l.useCallback(
            (e) => {
              g(e), a(e);
            },
            [a, g],
          ),
          j = l.useCallback(() => {
            i()(null != x, "handleSuccess called before onGuildCreated"), a(x);
          }, [a, x]),
          P = { impression_group: r.ImpressionGroups.GUILD_ADD_FLOW };
        return (0, o.jsx)("div", {
          children: (0, o.jsx)(s.ModalRoot, {
            transitionState: t,
            disableTrack: !0,
            children: (0, o.jsx)("div", {
              className: E.container,
              children: (0, o.jsxs)(s.Slides, {
                activeSlide: L,
                width: 440,
                onSlideReady: (e) => O(e),
                children: [
                  (0, o.jsx)(s.Slide, {
                    id: N._m.GUILD_TEMPLATES,
                    impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
                    impressionProperties: P,
                    children: (0, o.jsx)(p.Z, {
                      isNewUser: !1,
                      onJoin: S ? b : void 0,
                      onChooseTemplate: w,
                      onClose: T,
                    }),
                  }),
                  (0, o.jsx)(s.Slide, {
                    id: N._m.CREATION_INTENT,
                    impressionName:
                      r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                    impressionProperties: P,
                    children: (0, o.jsx)(d.Z, {
                      onClose: T,
                      onBack: k,
                      onCreationIntentChosen: v,
                    }),
                  }),
                  (0, o.jsx)(s.Slide, {
                    id: N._m.CUSTOMIZE_GUILD,
                    impressionName: r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                    impressionProperties: P,
                    children: (0, o.jsx)(m.Z, {
                      guildTemplate: U,
                      onGuildCreated: Z,
                      onClose: T,
                      onBack: k,
                      isSlideReady: M === N._m.CUSTOMIZE_GUILD,
                      isCommunity: G,
                    }),
                  }),
                  (0, o.jsx)(s.Slide, {
                    id: N._m.CHANNEL_PROMPT,
                    impressionName: r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                    impressionProperties: P,
                    children: (0, o.jsx)(_.Z, {
                      createdGuildId: x,
                      onClose: T,
                      onChannelPromptCompleted: j,
                      isSlideReady: M === N._m.CHANNEL_PROMPT,
                    }),
                  }),
                  (0, o.jsx)(s.Slide, {
                    id: N._m.JOIN_GUILD,
                    impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
                    impressionProperties: P,
                    children: (0, o.jsx)(I.Z, {
                      onBack: k,
                      onClose: T,
                      isSlideReady: M === N._m.JOIN_GUILD,
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
    },
    675999: function (e, t, n) {
      var o, l, a, i;
      n.d(t, {
        PU: function () {
          return r;
        },
        _m: function () {
          return o;
        },
        lr: function () {
          return l;
        },
      }),
        ((a = o || (o = {})).GUILD_TEMPLATES = "guild-templates"),
        (a.CUSTOMIZE_GUILD = "customize-guild"),
        (a.CHANNEL_PROMPT = "channel-prompt"),
        (a.JOIN_GUILD = "join-guild"),
        (a.CREATION_INTENT = "creation-intent"),
        ((i = l || (l = {})).FRIENDS = "FRIENDS"),
        (i.COMMUNITY = "COMMUNITY"),
        (i.CLAN = "CLAN");
      let r = "create-guild";
    },
    867581: function (e, t, n) {
      let o, l;
      n.d(t, {
        Z: function () {
          return O;
        },
      }),
        n(47120);
      var a = n(735250),
        i = n(470079),
        r = n(120356),
        s = n.n(r),
        c = n(481060),
        u = n(447543),
        _ = n(881052),
        d = n(600164),
        m = n(313201),
        p = n(703656),
        I = n(782605),
        N = n(981631),
        f = n(689938),
        E = n(87789),
        T = n(216019),
        C = n(286359);
      let S = "hTKzmak",
        L = (0, m.hQ)();
      let A =
          ((o = window.GLOBAL_ENV.INVITE_HOST),
          (l = ""),
          null == o && ((o = location.host), (l = N.Z5c.INVITE(""))),
          "".concat(location.protocol, "//").concat(o).concat(l, "/")),
        D = [S, "".concat(A).concat(S), "".concat(A).concat("cool-people")],
        M = (e) => {
          let { onClick: t } = e;
          return (0, a.jsxs)(c.Clickable, {
            className: E.rowContainer,
            onClick: () => {
              t(), (0, p.uL)(N.Z5c.GUILD_DISCOVERY);
            },
            children: [
              (0, a.jsx)("img", {
                width: 40,
                height: 40,
                className: E.rowIcon,
                alt: "",
                src: C,
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)(c.Heading, {
                    className: E.rowText,
                    variant: "heading-md/semibold",
                    children: f.Z.Messages.DISCOVERY_UPSELL_HEADER,
                  }),
                  (0, a.jsx)(c.Text, {
                    className: E.rowText,
                    variant: "text-xs/normal",
                    children: f.Z.Messages.DISCOVERY_UPSELL_DESCRIPTION,
                  }),
                ],
              }),
              (0, a.jsx)("img", { className: E.rowArrow, alt: "", src: T }),
            ],
          });
        };
      function O(e) {
        let { onBack: t, onClose: n, isSlideReady: o } = e,
          [l, r] = i.useState(""),
          [m, p] = i.useState(!1),
          [N, T] = i.useState(null),
          C = i.useRef(null);
        i.useEffect(() => {
          var e;
          o && (null === (e = C.current) || void 0 === e || e.focus());
        }, [o]);
        let O = (e) => {
          e.preventDefault();
          let t = l.trim();
          if ("" === t) {
            T(f.Z.Messages.INVALID_INVITE_LINK_ERROR);
            return;
          }
          T(null), p(!0);
          let o = t.split("/"),
            a = o[o.length - 1];
          u.Z.resolveInvite(a, "Join Guild", { inputValue: t }).then(
            (e) => {
              let { invite: t } = e;
              if ((p(!1), null == t)) {
                T(f.Z.Messages.INSTANT_INVITE_EXPIRED);
                return;
              }
              if (null != t.channel) {
                let e = u.Z.getInviteContext("Join Guild", t);
                u.Z.acceptInvite({
                  inviteKey: t.code,
                  context: e,
                  callback: (e) => {
                    n(), u.Z.transitionToInvite(e);
                  },
                }).then(
                  () => {},
                  (e) => {
                    e instanceof _.yZ || e instanceof _.Hx
                      ? T((0, I.O)(e.code))
                      : T(f.Z.Messages.INVITE_MODAL_ERROR_DEFAULT);
                  },
                );
              }
            },
            (e) => {
              p(!1);
              let t = new _.yZ(e);
              T((0, I.O)(t.code));
            },
          );
        };
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsxs)(c.ModalHeader, {
              className: E.header,
              direction: d.Z.Direction.VERTICAL,
              separator: !1,
              children: [
                (0, a.jsx)(c.Heading, {
                  className: E.title,
                  variant: "heading-xl/semibold",
                  children: f.Z.Messages.JOIN_SERVER_TITLE,
                }),
                (0, a.jsx)(c.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: f.Z.Messages.JOIN_SERVER_DESCRIPTION_NUF,
                }),
                (0, a.jsx)(c.ModalCloseButton, {
                  className: E.closeButton,
                  onClick: n,
                }),
              ],
            }),
            (0, a.jsxs)(c.ModalContent, {
              className: E.__invalid_content,
              children: [
                (0, a.jsx)("form", {
                  onSubmit: O,
                  className: E.inputForm,
                  children: (0, a.jsxs)(c.FormItem, {
                    children: [
                      (0, a.jsx)(c.FormTitle, {
                        id: L,
                        error: N,
                        className: s()(E.formTitle, { [E.error]: null != N }),
                        required: !0,
                        children: f.Z.Messages.FORM_LABEL_INVITE_LINK,
                      }),
                      (0, a.jsx)(c.TextInput, {
                        value: l,
                        onChange: r,
                        className: E.input,
                        inputClassName: E.inputInner,
                        placeholder: "".concat(A).concat(S),
                        inputRef: C,
                        required: !0,
                        "aria-labelledby": L,
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(c.FormItem, {
                  title: f.Z.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
                  titleClassName: E.formTitle,
                  className: E.examplesForm,
                  children: D.map((e) =>
                    (0, a.jsx)(
                      c.Clickable,
                      {
                        className: E.sampleLink,
                        onClick: () => r(e),
                        children: e,
                      },
                      e,
                    ),
                  ),
                }),
                (0, a.jsx)(M, { onClick: n }),
              ],
            }),
            (0, a.jsxs)(c.ModalFooter, {
              className: E.footer,
              children: [
                (0, a.jsx)(c.Button, {
                  color: c.Button.Colors.BRAND,
                  submitting: m,
                  onClick: O,
                  children: f.Z.Messages.NUF_JOIN_SERVER_BUTTON,
                }),
                (0, a.jsx)(c.Button, {
                  color: c.Button.Colors.PRIMARY,
                  look: c.Button.Looks.LINK,
                  size: c.Button.Sizes.MIN,
                  onClick: t,
                  children: f.Z.Messages.BACK,
                }),
              ],
            }),
          ],
        });
      }
    },
    630724: function (e, t, n) {
      var o, l, a, i, r, s, c, u, _, d;
      n.d(t, {
        EW: function () {
          return r;
        },
        FF: function () {
          return l;
        },
        MK: function () {
          return o;
        },
        X2: function () {
          return i;
        },
        mx: function () {
          return a;
        },
      }),
        ((s = o || (o = {})).UNKNOWN = "unknown"),
        (s.ANY = "any"),
        (s.INVITE = "invite"),
        (s.ORGANIC = "organic_registration"),
        (s.ORGANIC_MARKETING = "organic_marketing"),
        (s.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (s.CREATE_GUILD = "create_guild"),
        ((c = l || (l = {})).AGE_GATE = "age_gate"),
        (c.AGE_GATE_UNDERAGE = "age_gate_underage"),
        ((u = a || (a = {})).CLAIM_ACCOUNT = "claim_account"),
        (u.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"),
        ((_ = i || (i = {})).GUILD_TEMPLATES = "guild_templates"),
        (_.GUILD_CREATE = "guild_create"),
        (_.CREATION_INTENT = "creation_intent"),
        (_.CHANNEL_PROMPT = "channel_prompt"),
        (_.JOIN_GUILD = "join_guild"),
        (_.SUCCESS = "create_success"),
        ((d = r || (r = {})).NUF_STARTED = "nuf_started"),
        (d.AGE_GATE = "age_gate"),
        (d.NUF_COMPLETE = "nuf_complete"),
        (d.HUB_CONNECTION = "hub_connection");
    },
    390885: function (e, t, n) {
      var o = n(652874),
        l = n(731965),
        a = n(433517),
        i = n(710845),
        r = n(626135),
        s = n(630724),
        c = n(981631);
      let u = "UserFlowAnalyticsStore_current",
        _ = "UserFlowAnalyticsStore";
      function d(e) {
        if (e === s.MK.UNKNOWN) return null;
        let t = a.K.get("".concat(_, "-").concat(e));
        if (null == t) return null;
        let { version: n, ...o } = t;
        return 1 !== n ? null : o;
      }
      new i.Z("UserFlowAnalytics");
      let m = (0, o.Z)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
          var e;
          let n =
            null !== (e = t().currentFlow) && void 0 !== e ? e : a.K.get(u);
          if (null == n) return null;
          let { [n]: o } = t().flows,
            l = null != o ? o : d(n);
          return (null == l ? void 0 : l.currentStep) != null ? n : null;
        },
      }));
      function p(e, t) {
        let { [e]: n, ...o } = m.getState().flows,
          a = null != n ? n : d(e);
        if ((null == a ? void 0 : a.currentStep) == null || a.currentStep !== t)
          (0, l.j)(() => {
            m.setState({
              flows: {
                ...o,
                [e]: {
                  type: e,
                  lastStep: null,
                  lastTimestamp: null,
                  currentStep: t,
                  currentTimestamp: new Date(),
                  skipped: !1,
                },
              },
              currentFlow: e,
            });
          });
      }
      function I(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          o = e;
        if (e === s.MK.ANY) {
          var a;
          o =
            null !== (a = m.getState().activeFlow()) && void 0 !== a
              ? a
              : s.MK.UNKNOWN;
        }
        let { [o]: i, ...r } = m.getState().flows,
          c = null != i ? i : d(o);
        if (null != c && null != c.currentStep && c.currentStep !== t)
          (0, l.j)(() => {
            m.setState({
              flows: {
                ...r,
                [o]: {
                  ...c,
                  lastStep: c.currentStep,
                  lastTimestamp: c.currentTimestamp,
                  currentStep: t,
                  currentTimestamp: new Date(),
                  ended: n,
                },
              },
              currentFlow: o,
            });
          });
      }
      m.subscribe(
        (e) => {
          var t;
          if (null != e) {
            if (
              (!(function (e) {
                if (e.type === s.MK.UNKNOWN) return;
                let t = "".concat(_, "-").concat(e.type);
                e.ended
                  ? (a.K.remove(t), a.K.remove(u))
                  : (a.K.set("".concat(_, "-").concat(e.type), {
                      ...e,
                      version: 1,
                    }),
                    a.K.set(u, e.type));
              })(e),
              r.default.track(
                c.rMx.NUO_TRANSITION,
                {
                  flow_type: e.type,
                  from_step: e.lastStep,
                  to_step: e.currentStep,
                  seconds_on_from_step:
                    "function" !=
                    typeof (null === (t = e.lastTimestamp) || void 0 === t
                      ? void 0
                      : t.getTime)
                      ? 0
                      : (e.currentTimestamp.getTime() -
                          e.lastTimestamp.getTime()) /
                        1e3,
                },
                { flush: !0 },
              ),
              e.ended)
            ) {
              let t = { ...m.getState().flows };
              delete t[e.type],
                (0, l.j)(() => {
                  m.setState({ flows: t, currentFlow: null });
                });
            }
          }
        },
        (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
      );
      function N() {
        return null != m.getState().activeFlow();
      }
      t.Z = {
        flowStart: p,
        flowStepOrStart: function (e, t) {
          N() ? I(e, t) : p(e, t);
        },
        flowStep: I,
        hasActiveFlow: N,
      };
    },
    510186: function (e, t, n) {
      e.exports = {
        iconContainer: "iconContainer_a2aef9",
        filledIcon: "filledIcon_a2aef9",
      };
    },
    85750: function (e, t, n) {
      e.exports = {
        header: "header_a49400",
        channelPrompt: "channelPrompt_a49400",
        closeButton: "closeButton_a49400",
        guildName: "guildName_a49400",
        title: "title_a49400",
        subtitle: "subtitle_a49400",
        skipButton: "skipButton_a49400",
      };
    },
    870863: function (e, t, n) {
      e.exports = { container: "container_a4d79f" };
    },
    886844: function (e, t, n) {
      e.exports = {
        header: "header_f5507e",
        closeButton: "closeButton_f5507e",
        title: "title_f5507e",
        subtitle: "subtitle_f5507e",
        optionsList: "optionsList_f5507e",
        backButton: "backButton_f5507e",
        skip: "skip_f5507e",
      };
    },
    294550: function (e, t, n) {
      e.exports = {
        header: "header_c1ee6b",
        closeButton: "closeButton_c1ee6b",
        title: "title_c1ee6b",
        backButton: "backButton_c1ee6b",
        subtitle: "subtitle_c1ee6b",
        createGuild: "createGuild_c1ee6b",
        uploadIcon: "uploadIcon_c1ee6b",
        nameInput: "nameInput_c1ee6b",
        guidelines: "guidelines_c1ee6b",
        formItemSpaced: "formItemSpaced_c1ee6b",
      };
    },
    662291: function (e, t, n) {
      e.exports = {
        header: "header_fc9dae",
        closeButton: "closeButton_fc9dae",
        templatesList: "templatesList_fc9dae",
        title: "title_fc9dae",
        subtitle: "subtitle_fc9dae",
        optionHeader: "optionHeader_fc9dae",
        footer: "footer_fc9dae",
        footerTitle: "footerTitle_fc9dae",
        footerButton: "footerButton_fc9dae",
      };
    },
    87789: function (e, t, n) {
      e.exports = {
        header: "header_e8a9c7",
        title: "title_e8a9c7",
        closeButton: "closeButton_e8a9c7",
        inputForm: "inputForm_e8a9c7",
        formTitle: "formTitle_e8a9c7",
        error: "error_e8a9c7",
        input: "input_e8a9c7",
        inputInner: "inputInner_e8a9c7",
        examplesForm: "examplesForm_e8a9c7",
        sampleLink: "sampleLink_e8a9c7",
        footer: "footer_e8a9c7",
        rowContainer: "rowContainer_e8a9c7",
        rowIcon: "rowIcon_e8a9c7",
        rowText: "rowText_e8a9c7",
        rowArrow: "rowArrow_e8a9c7",
      };
    },
    673835: function (e, t, n) {
      e.exports = {
        container: "container_a47d49",
        icon: "icon_a47d49",
        text: "text_a47d49",
        arrow: "arrow_a47d49",
      };
    },
  },
]);
//# sourceMappingURL=086746d2fbac61696208.js.map
