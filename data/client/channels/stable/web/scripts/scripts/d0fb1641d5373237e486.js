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
            return I;
          },
        });
      var o = n(735250);
      n(470079);
      var l = n(481060),
        a = n(390885),
        s = n(626135),
        r = n(299402),
        i = n(675999),
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
                case i._m.GUILD_TEMPLATES:
                  a.Z.flowStepOrStart(u.MK.CREATE_GUILD, u.X2.GUILD_TEMPLATES),
                    s.default.track(c.rMx.OPEN_MODAL, {
                      type: "Create Guild Templates",
                      location: t,
                    });
                  break;
                case i._m.CUSTOMIZE_GUILD:
                  a.Z.flowStep(u.MK.CREATE_GUILD, u.X2.GUILD_CREATE),
                    s.default.track(c.rMx.OPEN_MODAL, {
                      type: "Create Guild Step 2",
                      location: t,
                    });
                  break;
                case i._m.CREATION_INTENT:
                  s.default.track(c.rMx.OPEN_MODAL, {
                    type: "Server Intent Discovery",
                    location: t,
                  });
                  break;
                case i._m.JOIN_GUILD:
                  a.Z.flowStep(u.MK.CREATE_GUILD, u.X2.JOIN_GUILD),
                    s.default.track(c.rMx.OPEN_MODAL, {
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
          (0, l.openModal)((e) => _(e, t, n, o), { modalKey: i.PU });
        },
        I = (e) => {
          let { slide: t, location: n } = e;
          (0, l.updateModal)(i.PU, (e) => _(e, t, n));
        };
    },
    299402: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      }),
        n(47120);
      var o = n(735250),
        l = n(470079),
        a = n(512722),
        s = n.n(a),
        r = n(990547),
        i = n(481060),
        c = n(110924),
        u = n(626135),
        _ = n(215292),
        d = n(382086),
        I = n(996453),
        E = n(446706),
        N = n(867581),
        m = n(675999),
        T = n(981631),
        p = n(870863);
      function f(e) {
        let {
            transitionState: t,
            initialSlide: n = m._m.GUILD_TEMPLATES,
            onSuccess: a,
            onClose: f,
            onSlideChange: S,
            hasJoinButton: C,
          } = e,
          [L, A] = l.useState(n),
          D = (0, c.Z)(L),
          [M, O] = l.useState(null),
          [U, R] = l.useState(null),
          [g, G] = l.useState(null),
          [h, x] = l.useState(!1);
        l.useEffect(() => {
          A(n);
        }, [A, n]),
          l.useEffect(() => {
            L !== D && S(L);
          }, [S, L, D]);
        let w = l.useCallback((e) => {
            A(m._m.CREATION_INTENT),
              R(e),
              u.default.track(T.rMx.GUILD_TEMPLATE_SELECTED, {
                template_name: e.id,
                template_code: e.code,
              });
          }, []),
          v = l.useCallback((e) => {
            x(e === m.lr.COMMUNITY), A(m._m.CUSTOMIZE_GUILD);
          }, []),
          Z = l.useCallback(() => A(m._m.JOIN_GUILD), [A]),
          P = l.useCallback(() => {
            if (L === m._m.CUSTOMIZE_GUILD) {
              A(m._m.CREATION_INTENT);
              return;
            }
            A(m._m.GUILD_TEMPLATES), R(null);
          }, [L]),
          k = l.useCallback(
            (e) => {
              G(e), a(e);
            },
            [a, G],
          ),
          b = l.useCallback(() => {
            s()(null != g, "handleSuccess called before onGuildCreated"), a(g);
          }, [a, g]),
          j = { impression_group: r.ImpressionGroups.GUILD_ADD_FLOW };
        return (0, o.jsx)("div", {
          children: (0, o.jsx)(i.ModalRoot, {
            transitionState: t,
            disableTrack: !0,
            children: (0, o.jsx)("div", {
              className: p.container,
              children: (0, o.jsxs)(i.Slides, {
                activeSlide: L,
                width: 440,
                onSlideReady: (e) => O(e),
                children: [
                  (0, o.jsx)(i.Slide, {
                    id: m._m.GUILD_TEMPLATES,
                    impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
                    impressionProperties: j,
                    children: (0, o.jsx)(E.Z, {
                      isNewUser: !1,
                      onJoin: C ? Z : void 0,
                      onChooseTemplate: w,
                      onClose: f,
                    }),
                  }),
                  (0, o.jsx)(i.Slide, {
                    id: m._m.CREATION_INTENT,
                    impressionName:
                      r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                    impressionProperties: j,
                    children: (0, o.jsx)(d.Z, {
                      onClose: f,
                      onBack: P,
                      onCreationIntentChosen: v,
                    }),
                  }),
                  (0, o.jsx)(i.Slide, {
                    id: m._m.CUSTOMIZE_GUILD,
                    impressionName: r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                    impressionProperties: j,
                    children: (0, o.jsx)(I.Z, {
                      guildTemplate: U,
                      onGuildCreated: k,
                      onClose: f,
                      onBack: P,
                      isSlideReady: M === m._m.CUSTOMIZE_GUILD,
                      isCommunity: h,
                    }),
                  }),
                  (0, o.jsx)(i.Slide, {
                    id: m._m.CHANNEL_PROMPT,
                    impressionName: r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                    impressionProperties: j,
                    children: (0, o.jsx)(_.Z, {
                      createdGuildId: g,
                      onClose: f,
                      onChannelPromptCompleted: b,
                      isSlideReady: M === m._m.CHANNEL_PROMPT,
                    }),
                  }),
                  (0, o.jsx)(i.Slide, {
                    id: m._m.JOIN_GUILD,
                    impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
                    impressionProperties: j,
                    children: (0, o.jsx)(N.Z, {
                      onBack: P,
                      onClose: f,
                      isSlideReady: M === m._m.JOIN_GUILD,
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
      var o, l, a, s;
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
        ((s = l || (l = {})).FRIENDS = "FRIENDS"),
        (s.COMMUNITY = "COMMUNITY"),
        (s.CLAN = "CLAN");
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
        s = n(470079),
        r = n(120356),
        i = n.n(r),
        c = n(481060),
        u = n(447543),
        _ = n(881052),
        d = n(600164),
        I = n(313201),
        E = n(703656),
        N = n(782605),
        m = n(981631),
        T = n(689938),
        p = n(87789),
        f = n(216019),
        S = n(286359);
      let C = "hTKzmak",
        L = (0, I.hQ)();
      let A =
          ((o = window.GLOBAL_ENV.INVITE_HOST),
          (l = ""),
          null == o && ((o = location.host), (l = m.Z5c.INVITE(""))),
          "".concat(location.protocol, "//").concat(o).concat(l, "/")),
        D = [C, "".concat(A).concat(C), "".concat(A).concat("cool-people")],
        M = (e) => {
          let { onClick: t } = e;
          return (0, a.jsxs)(c.Clickable, {
            className: p.rowContainer,
            onClick: () => {
              t(), (0, E.uL)(m.Z5c.GUILD_DISCOVERY);
            },
            children: [
              (0, a.jsx)("img", {
                width: 40,
                height: 40,
                className: p.rowIcon,
                alt: "",
                src: S,
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)(c.Heading, {
                    className: p.rowText,
                    variant: "heading-md/semibold",
                    children: T.Z.Messages.DISCOVERY_UPSELL_HEADER,
                  }),
                  (0, a.jsx)(c.Text, {
                    className: p.rowText,
                    variant: "text-xs/normal",
                    children: T.Z.Messages.DISCOVERY_UPSELL_DESCRIPTION,
                  }),
                ],
              }),
              (0, a.jsx)("img", { className: p.rowArrow, alt: "", src: f }),
            ],
          });
        };
      function O(e) {
        let { onBack: t, onClose: n, isSlideReady: o } = e,
          [l, r] = s.useState(""),
          [I, E] = s.useState(!1),
          [m, f] = s.useState(null),
          S = s.useRef(null);
        s.useEffect(() => {
          var e;
          o && (null === (e = S.current) || void 0 === e || e.focus());
        }, [o]);
        let O = (e) => {
          e.preventDefault();
          let t = l.trim();
          if ("" === t) {
            f(T.Z.Messages.INVALID_INVITE_LINK_ERROR);
            return;
          }
          f(null), E(!0);
          let o = t.split("/"),
            a = o[o.length - 1];
          u.Z.resolveInvite(a, "Join Guild", { inputValue: t }).then(
            (e) => {
              let { invite: t } = e;
              if ((E(!1), null == t)) {
                f(T.Z.Messages.INSTANT_INVITE_EXPIRED);
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
                      ? f((0, N.O)(e.code))
                      : f(T.Z.Messages.INVITE_MODAL_ERROR_DEFAULT);
                  },
                );
              }
            },
            (e) => {
              E(!1);
              let t = new _.yZ(e);
              f((0, N.O)(t.code));
            },
          );
        };
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsxs)(c.ModalHeader, {
              className: p.header,
              direction: d.Z.Direction.VERTICAL,
              separator: !1,
              children: [
                (0, a.jsx)(c.Heading, {
                  className: p.title,
                  variant: "heading-xl/semibold",
                  children: T.Z.Messages.JOIN_SERVER_TITLE,
                }),
                (0, a.jsx)(c.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: T.Z.Messages.JOIN_SERVER_DESCRIPTION_NUF,
                }),
                (0, a.jsx)(c.ModalCloseButton, {
                  className: p.closeButton,
                  onClick: n,
                }),
              ],
            }),
            (0, a.jsxs)(c.ModalContent, {
              className: p.__invalid_content,
              children: [
                (0, a.jsx)("form", {
                  onSubmit: O,
                  className: p.inputForm,
                  children: (0, a.jsxs)(c.FormItem, {
                    children: [
                      (0, a.jsx)(c.FormTitle, {
                        id: L,
                        error: m,
                        className: i()(p.formTitle, { [p.error]: null != m }),
                        required: !0,
                        children: T.Z.Messages.FORM_LABEL_INVITE_LINK,
                      }),
                      (0, a.jsx)(c.TextInput, {
                        value: l,
                        onChange: r,
                        className: p.input,
                        inputClassName: p.inputInner,
                        placeholder: "".concat(A).concat(C),
                        inputRef: S,
                        required: !0,
                        "aria-labelledby": L,
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(c.FormItem, {
                  title: T.Z.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
                  titleClassName: p.formTitle,
                  className: p.examplesForm,
                  children: D.map((e) =>
                    (0, a.jsx)(
                      c.Clickable,
                      {
                        className: p.sampleLink,
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
              className: p.footer,
              children: [
                (0, a.jsx)(c.Button, {
                  color: c.Button.Colors.BRAND,
                  submitting: I,
                  onClick: O,
                  children: T.Z.Messages.NUF_JOIN_SERVER_BUTTON,
                }),
                (0, a.jsx)(c.Button, {
                  color: c.Button.Colors.PRIMARY,
                  look: c.Button.Looks.LINK,
                  size: c.Button.Sizes.MIN,
                  onClick: t,
                  children: T.Z.Messages.BACK,
                }),
              ],
            }),
          ],
        });
      }
    },
    630724: function (e, t, n) {
      var o, l, a, s, r, i, c, u, _, d;
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
          return s;
        },
        mx: function () {
          return a;
        },
      }),
        ((i = o || (o = {})).UNKNOWN = "unknown"),
        (i.ANY = "any"),
        (i.INVITE = "invite"),
        (i.ORGANIC = "organic_registration"),
        (i.ORGANIC_MARKETING = "organic_marketing"),
        (i.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (i.CREATE_GUILD = "create_guild"),
        ((c = l || (l = {})).AGE_GATE = "age_gate"),
        (c.AGE_GATE_UNDERAGE = "age_gate_underage"),
        ((u = a || (a = {})).CLAIM_ACCOUNT = "claim_account"),
        (u.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"),
        ((_ = s || (s = {})).GUILD_TEMPLATES = "guild_templates"),
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
        s = n(710845),
        r = n(626135),
        i = n(630724),
        c = n(981631);
      let u = "UserFlowAnalyticsStore_current",
        _ = "UserFlowAnalyticsStore";
      function d(e) {
        if (e === i.MK.UNKNOWN) return null;
        let t = a.K.get("".concat(_, "-").concat(e));
        if (null == t) return null;
        let { version: n, ...o } = t;
        return 1 !== n ? null : o;
      }
      new s.Z("UserFlowAnalytics");
      let I = (0, o.Z)((e, t) => ({
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
      function E(e, t) {
        let { [e]: n, ...o } = I.getState().flows,
          a = null != n ? n : d(e);
        if ((null == a ? void 0 : a.currentStep) == null || a.currentStep !== t)
          (0, l.j)(() => {
            I.setState({
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
      function N(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          o = e;
        if (e === i.MK.ANY) {
          var a;
          o =
            null !== (a = I.getState().activeFlow()) && void 0 !== a
              ? a
              : i.MK.UNKNOWN;
        }
        let { [o]: s, ...r } = I.getState().flows,
          c = null != s ? s : d(o);
        if (null != c && null != c.currentStep && c.currentStep !== t)
          (0, l.j)(() => {
            I.setState({
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
      I.subscribe(
        (e) => {
          var t;
          if (null != e) {
            if (
              (!(function (e) {
                if (e.type === i.MK.UNKNOWN) return;
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
              let t = { ...I.getState().flows };
              delete t[e.type],
                (0, l.j)(() => {
                  I.setState({ flows: t, currentFlow: null });
                });
            }
          }
        },
        (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
      );
      function m() {
        return null != I.getState().activeFlow();
      }
      t.Z = {
        flowStart: E,
        flowStepOrStart: function (e, t) {
          m() ? N(e, t) : E(e, t);
        },
        flowStep: N,
        hasActiveFlow: m,
      };
    },
    782605: function (e, t, n) {
      n.d(t, {
        O: function () {
          return c;
        },
        l: function () {
          return i;
        },
      });
      var o = n(594174),
        l = n(63063),
        a = n(74538),
        s = n(981631),
        r = n(689938);
      function i(e) {
        switch (e) {
          case s.evJ.TOO_MANY_USER_GUILDS:
            let t = o.default.getCurrentUser(),
              n =
                a.ZP.canUseIncreasedGuildCap(t) ||
                (null == t ? void 0 : t.isStaff())
                  ? s.tHP
                  : s.DZw;
            return {
              title: r.Z.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({
                quantity: n,
              }),
              description: r.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION,
            };
          case s.evJ.GUILD_AT_CAPACITY:
            return {
              title: r.Z.Messages.SERVER_IS_CURRENTLY_FULL,
              description: r.Z.Messages.PLEASE_TRY_AGAIN_LATER,
            };
          case s.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
              title: r.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING,
              description: r.Z.Messages.PLEASE_TRY_AGAIN_LATER,
            };
          default:
            return null;
        }
      }
      function c(e) {
        switch (e) {
          case s.evJ.TOO_MANY_USER_GUILDS:
            return r.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
          case s.evJ.GUILD_AT_CAPACITY:
            return r.Z.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
          case s.evJ.INVALID_COUNTRY_CODE:
            return r.Z.Messages.INVALID_COUNTRY_CODE;
          case s.evJ.INVALID_CANNOT_FRIEND_SELF:
            return r.Z.Messages.INVALID_CANNOT_FRIEND_SELF;
          case s.evJ.INVITES_DISABLED:
            return r.Z.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format({
              articleLink: l.Z.getArticleURL(s.BhN.INVITE_DISABLED),
            });
          default:
            return r.Z.Messages.INVITE_MODAL_ERROR_DEFAULT;
        }
      }
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
//# sourceMappingURL=d0fb1641d5373237e486.js.map
