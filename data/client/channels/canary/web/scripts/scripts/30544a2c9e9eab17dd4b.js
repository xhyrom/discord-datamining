"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81171"],
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
            return _;
          },
          updateCreateGuildModal: function () {
            return m;
          },
        });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(390885),
        o = n(626135),
        a = n(299402),
        s = n(675999),
        c = n(981631),
        u = n(630724);
      function d(e, t, n, l) {
        return (0, i.jsx)(a.Z, {
          onSuccess: (t) => {
            r.Z.flowStep(u.MK.CREATE_GUILD, u.X2.SUCCESS),
              e.onClose(),
              null == l || l(t);
          },
          onSlideChange: (e) =>
            (function (e, t) {
              switch (e) {
                case s._m.GUILD_TEMPLATES:
                  r.Z.flowStepOrStart(u.MK.CREATE_GUILD, u.X2.GUILD_TEMPLATES),
                    o.default.track(c.rMx.OPEN_MODAL, {
                      type: "Create Guild Templates",
                      location: t,
                    });
                  break;
                case s._m.CUSTOMIZE_GUILD:
                  r.Z.flowStep(u.MK.CREATE_GUILD, u.X2.GUILD_CREATE),
                    o.default.track(c.rMx.OPEN_MODAL, {
                      type: "Create Guild Step 2",
                      location: t,
                    });
                  break;
                case s._m.CREATION_INTENT:
                  o.default.track(c.rMx.OPEN_MODAL, {
                    type: "Server Intent Discovery",
                    location: t,
                  });
                  break;
                case s._m.JOIN_GUILD:
                  r.Z.flowStep(u.MK.CREATE_GUILD, u.X2.JOIN_GUILD),
                    o.default.track(c.rMx.OPEN_MODAL, {
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
      let _ = (e) => {
          let { initialSlide: t, location: n, onSuccess: i } = e;
          (0, l.openModal)((e) => d(e, t, n, i), { modalKey: s.PU });
        },
        m = (e) => {
          let { slide: t, location: n } = e;
          (0, l.updateModal)(s.PU, (e) => d(e, t, n));
        };
    },
    299402: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(512722),
        o = n.n(r),
        a = n(990547),
        s = n(481060),
        c = n(110924),
        u = n(626135),
        d = n(215292),
        _ = n(382086),
        m = n(996453),
        p = n(446706),
        I = n(867581),
        f = n(675999),
        N = n(981631),
        T = n(849445);
      function C(e) {
        let {
            transitionState: t,
            initialSlide: n = f._m.GUILD_TEMPLATES,
            onSuccess: r,
            onClose: C,
            onSlideChange: E,
            hasJoinButton: S,
          } = e,
          [L, A] = l.useState(n),
          D = (0, c.Z)(L),
          [U, h] = l.useState(null),
          [g, x] = l.useState(null),
          [G, O] = l.useState(null),
          [M, w] = l.useState(!1);
        l.useEffect(() => {
          A(n);
        }, [A, n]),
          l.useEffect(() => {
            L !== D && E(L);
          }, [E, L, D]);
        let v = l.useCallback((e) => {
            A(f._m.CREATION_INTENT),
              x(e),
              u.default.track(N.rMx.GUILD_TEMPLATE_SELECTED, {
                template_name: e.id,
                template_code: e.code,
              });
          }, []),
          R = l.useCallback((e) => {
            w(e === f.lr.COMMUNITY), A(f._m.CUSTOMIZE_GUILD);
          }, []),
          k = l.useCallback(() => A(f._m.JOIN_GUILD), [A]),
          b = l.useCallback(() => {
            if (L === f._m.CUSTOMIZE_GUILD) {
              A(f._m.CREATION_INTENT);
              return;
            }
            A(f._m.GUILD_TEMPLATES), x(null);
          }, [L]),
          j = l.useCallback(
            (e) => {
              O(e), r(e);
            },
            [r, O],
          ),
          P = l.useCallback(() => {
            o()(null != G, "handleSuccess called before onGuildCreated"), r(G);
          }, [r, G]),
          Z = { impression_group: a.ImpressionGroups.GUILD_ADD_FLOW };
        return (0, i.jsx)("div", {
          children: (0, i.jsx)(s.ModalRoot, {
            transitionState: t,
            disableTrack: !0,
            children: (0, i.jsx)("div", {
              className: T.container,
              children: (0, i.jsxs)(s.Slides, {
                activeSlide: L,
                width: 440,
                onSlideReady: (e) => h(e),
                children: [
                  (0, i.jsx)(s.Slide, {
                    id: f._m.GUILD_TEMPLATES,
                    impressionName: a.ImpressionNames.GUILD_ADD_LANDING,
                    impressionProperties: Z,
                    children: (0, i.jsx)(p.Z, {
                      isNewUser: !1,
                      onJoin: S ? k : void 0,
                      onChooseTemplate: v,
                      onClose: C,
                    }),
                  }),
                  (0, i.jsx)(s.Slide, {
                    id: f._m.CREATION_INTENT,
                    impressionName:
                      a.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                    impressionProperties: Z,
                    children: (0, i.jsx)(_.Z, {
                      onClose: C,
                      onBack: b,
                      onCreationIntentChosen: R,
                    }),
                  }),
                  (0, i.jsx)(s.Slide, {
                    id: f._m.CUSTOMIZE_GUILD,
                    impressionName: a.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                    impressionProperties: Z,
                    children: (0, i.jsx)(m.Z, {
                      guildTemplate: g,
                      onGuildCreated: j,
                      onClose: C,
                      onBack: b,
                      isSlideReady: U === f._m.CUSTOMIZE_GUILD,
                      isCommunity: M,
                    }),
                  }),
                  (0, i.jsx)(s.Slide, {
                    id: f._m.CHANNEL_PROMPT,
                    impressionName: a.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                    impressionProperties: Z,
                    children: (0, i.jsx)(d.Z, {
                      createdGuildId: G,
                      onClose: C,
                      onChannelPromptCompleted: P,
                      isSlideReady: U === f._m.CHANNEL_PROMPT,
                    }),
                  }),
                  (0, i.jsx)(s.Slide, {
                    id: f._m.JOIN_GUILD,
                    impressionName: a.ImpressionNames.GUILD_ADD_JOIN,
                    impressionProperties: Z,
                    children: (0, i.jsx)(I.Z, {
                      onBack: b,
                      onClose: C,
                      isSlideReady: U === f._m.JOIN_GUILD,
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
      var i, l, r, o;
      n.d(t, {
        PU: function () {
          return a;
        },
        _m: function () {
          return i;
        },
        lr: function () {
          return l;
        },
      }),
        ((r = i || (i = {})).GUILD_TEMPLATES = "guild-templates"),
        (r.CUSTOMIZE_GUILD = "customize-guild"),
        (r.CHANNEL_PROMPT = "channel-prompt"),
        (r.JOIN_GUILD = "join-guild"),
        (r.CREATION_INTENT = "creation-intent"),
        ((o = l || (l = {})).FRIENDS = "FRIENDS"),
        (o.COMMUNITY = "COMMUNITY"),
        (o.CLAN = "CLAN");
      let a = "create-guild";
    },
    867581: function (e, t, n) {
      let i, l;
      n.d(t, {
        Z: function () {
          return h;
        },
      }),
        n(47120);
      var r = n(200651),
        o = n(192379),
        a = n(120356),
        s = n.n(a),
        c = n(481060),
        u = n(447543),
        d = n(881052),
        _ = n(600164),
        m = n(313201),
        p = n(703656),
        I = n(782605),
        f = n(981631),
        N = n(388032),
        T = n(729604),
        C = n(216019),
        E = n(286359);
      let S = "hTKzmak",
        L = (0, m.hQ)();
      let A =
          ((i = window.GLOBAL_ENV.INVITE_HOST),
          (l = ""),
          null == i && ((i = location.host), (l = f.Z5c.INVITE(""))),
          "".concat(location.protocol, "//").concat(i).concat(l, "/")),
        D = [S, "".concat(A).concat(S), "".concat(A).concat("cool-people")],
        U = (e) => {
          let { onClick: t } = e;
          return (0, r.jsxs)(c.Clickable, {
            className: T.rowContainer,
            onClick: () => {
              t(), (0, p.uL)(f.Z5c.GUILD_DISCOVERY);
            },
            children: [
              (0, r.jsx)("img", {
                width: 40,
                height: 40,
                className: T.rowIcon,
                alt: "",
                src: E,
              }),
              (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)(c.Heading, {
                    className: T.rowText,
                    variant: "heading-md/semibold",
                    children: N.intl.string(N.t.DwDxDQ),
                  }),
                  (0, r.jsx)(c.Text, {
                    className: T.rowText,
                    variant: "text-xs/normal",
                    children: N.intl.string(N.t["5RL4CA"]),
                  }),
                ],
              }),
              (0, r.jsx)("img", { className: T.rowArrow, alt: "", src: C }),
            ],
          });
        };
      function h(e) {
        let { onBack: t, onClose: n, isSlideReady: i } = e,
          [l, a] = o.useState(""),
          [m, p] = o.useState(!1),
          [f, C] = o.useState(null),
          E = o.useRef(null);
        o.useEffect(() => {
          var e;
          i && (null === (e = E.current) || void 0 === e || e.focus());
        }, [i]);
        let h = (e) => {
          e.preventDefault();
          let t = l.trim();
          if ("" === t) {
            C(N.intl.string(N.t.IRq5am));
            return;
          }
          C(null), p(!0);
          let i = t.split("/"),
            r = i[i.length - 1];
          u.Z.resolveInvite(r, "Join Guild", { inputValue: t }).then(
            (e) => {
              let { invite: t } = e;
              if ((p(!1), null == t)) {
                C(N.intl.string(N.t["GEYI+f"]));
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
                    e instanceof d.yZ || e instanceof d.Hx
                      ? C((0, I.O)(e.code))
                      : C(N.intl.string(N.t.dDZRd3));
                  },
                );
              }
            },
            (e) => {
              p(!1);
              let t = new d.yZ(e);
              C((0, I.O)(t.code));
            },
          );
        };
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsxs)(c.ModalHeader, {
              className: T.header,
              direction: _.Z.Direction.VERTICAL,
              separator: !1,
              children: [
                (0, r.jsx)(c.Heading, {
                  className: T.title,
                  variant: "heading-xl/semibold",
                  children: N.intl.string(N.t.riOUtL),
                }),
                (0, r.jsx)(c.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: N.intl.string(N.t["7jub2t"]),
                }),
                (0, r.jsx)(c.ModalCloseButton, {
                  className: T.closeButton,
                  onClick: n,
                }),
              ],
            }),
            (0, r.jsxs)(c.ModalContent, {
              className: T.__invalid_content,
              children: [
                (0, r.jsx)("form", {
                  onSubmit: h,
                  className: T.inputForm,
                  children: (0, r.jsxs)(c.FormItem, {
                    children: [
                      (0, r.jsx)(c.FormTitle, {
                        id: L,
                        error: f,
                        className: s()(T.formTitle, { [T.error]: null != f }),
                        required: !0,
                        children: N.intl.string(N.t.qreV29),
                      }),
                      (0, r.jsx)(c.TextInput, {
                        value: l,
                        onChange: a,
                        className: T.input,
                        inputClassName: T.inputInner,
                        placeholder: "".concat(A).concat(S),
                        inputRef: E,
                        required: !0,
                        "aria-labelledby": L,
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)(c.FormItem, {
                  title: N.intl.string(N.t.Bnq46O),
                  titleClassName: T.formTitle,
                  className: T.examplesForm,
                  children: D.map((e) =>
                    (0, r.jsx)(
                      c.Clickable,
                      {
                        className: T.sampleLink,
                        onClick: () => a(e),
                        children: e,
                      },
                      e,
                    ),
                  ),
                }),
                (0, r.jsx)(U, { onClick: n }),
              ],
            }),
            (0, r.jsxs)(c.ModalFooter, {
              className: T.footer,
              children: [
                (0, r.jsx)(c.Button, {
                  color: c.Button.Colors.BRAND,
                  submitting: m,
                  onClick: h,
                  children: N.intl.string(N.t["Ts/9AQ"]),
                }),
                (0, r.jsx)(c.Button, {
                  color: c.Button.Colors.PRIMARY,
                  look: c.Button.Looks.LINK,
                  size: c.Button.Sizes.MIN,
                  onClick: t,
                  children: N.intl.string(N.t["13/7kZ"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    630724: function (e, t, n) {
      var i, l, r, o, a, s, c, u, d, _;
      n.d(t, {
        EW: function () {
          return a;
        },
        FF: function () {
          return l;
        },
        MK: function () {
          return i;
        },
        X2: function () {
          return o;
        },
        mx: function () {
          return r;
        },
      }),
        ((s = i || (i = {})).UNKNOWN = "unknown"),
        (s.ANY = "any"),
        (s.INVITE = "invite"),
        (s.ORGANIC = "organic_registration"),
        (s.ORGANIC_MARKETING = "organic_marketing"),
        (s.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (s.CREATE_GUILD = "create_guild"),
        ((c = l || (l = {})).AGE_GATE = "age_gate"),
        (c.AGE_GATE_UNDERAGE = "age_gate_underage"),
        ((u = r || (r = {})).CLAIM_ACCOUNT = "claim_account"),
        (u.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"),
        ((d = o || (o = {})).GUILD_TEMPLATES = "guild_templates"),
        (d.GUILD_CREATE = "guild_create"),
        (d.CREATION_INTENT = "creation_intent"),
        (d.CHANNEL_PROMPT = "channel_prompt"),
        (d.JOIN_GUILD = "join_guild"),
        (d.SUCCESS = "create_success"),
        ((_ = a || (a = {})).NUF_STARTED = "nuf_started"),
        (_.AGE_GATE = "age_gate"),
        (_.NUF_COMPLETE = "nuf_complete"),
        (_.HUB_CONNECTION = "hub_connection");
    },
    390885: function (e, t, n) {
      var i = n(15729),
        l = n(877124),
        r = n(731965),
        o = n(433517),
        a = n(710845),
        s = n(626135),
        c = n(630724),
        u = n(981631);
      let d = "UserFlowAnalyticsStore_current",
        _ = "UserFlowAnalyticsStore";
      function m(e) {
        if (e === c.MK.UNKNOWN) return null;
        let t = o.K.get("".concat(_, "-").concat(e));
        if (null == t) return null;
        let { version: n, ...i } = t;
        return 1 !== n ? null : i;
      }
      new a.Z("UserFlowAnalytics");
      let p = (0, i.U)()(
        (0, l.XR)((e, t) => ({
          flows: {},
          currentFlow: null,
          activeFlow: () => {
            var e;
            let n =
              null !== (e = t().currentFlow) && void 0 !== e ? e : o.K.get(d);
            if (null == n) return null;
            let { [n]: i } = t().flows,
              l = null != i ? i : m(n);
            return (null == l ? void 0 : l.currentStep) != null ? n : null;
          },
        })),
      );
      function I(e, t) {
        let { [e]: n, ...i } = p.getState().flows,
          l = null != n ? n : m(e);
        if ((null == l ? void 0 : l.currentStep) == null || l.currentStep !== t)
          (0, r.j)(() => {
            p.setState({
              flows: {
                ...i,
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
      function f(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = e;
        if (e === c.MK.ANY) {
          var l;
          i =
            null !== (l = p.getState().activeFlow()) && void 0 !== l
              ? l
              : c.MK.UNKNOWN;
        }
        let { [i]: o, ...a } = p.getState().flows,
          s = null != o ? o : m(i);
        if (null != s && null != s.currentStep && s.currentStep !== t)
          (0, r.j)(() => {
            p.setState({
              flows: {
                ...a,
                [i]: {
                  ...s,
                  lastStep: s.currentStep,
                  lastTimestamp: s.currentTimestamp,
                  currentStep: t,
                  currentTimestamp: new Date(),
                  ended: n,
                },
              },
              currentFlow: i,
            });
          });
      }
      p.subscribe(
        (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
        (e) => {
          var t;
          if (null != e) {
            if (
              (!(function (e) {
                if (e.type === c.MK.UNKNOWN) return;
                let t = "".concat(_, "-").concat(e.type);
                e.ended
                  ? (o.K.remove(t), o.K.remove(d))
                  : (o.K.set("".concat(_, "-").concat(e.type), {
                      ...e,
                      version: 1,
                    }),
                    o.K.set(d, e.type));
              })(e),
              s.default.track(
                u.rMx.NUO_TRANSITION,
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
              let t = { ...p.getState().flows };
              delete t[e.type],
                (0, r.j)(() => {
                  p.setState({ flows: t, currentFlow: null });
                });
            }
          }
        },
      );
      function N() {
        return null != p.getState().activeFlow();
      }
      t.Z = {
        flowStart: I,
        flowStepOrStart: function (e, t) {
          N() ? f(e, t) : I(e, t);
        },
        flowStep: f,
        hasActiveFlow: N,
      };
    },
    782605: function (e, t, n) {
      n.d(t, {
        O: function () {
          return c;
        },
        l: function () {
          return s;
        },
      });
      var i = n(594174),
        l = n(63063),
        r = n(74538),
        o = n(981631),
        a = n(388032);
      function s(e) {
        switch (e) {
          case o.evJ.TOO_MANY_USER_GUILDS:
            let t = i.default.getCurrentUser(),
              n =
                r.ZP.canUseIncreasedGuildCap(t) ||
                (null == t ? void 0 : t.isStaff())
                  ? o.tHP
                  : o.DZw;
            return {
              title: a.intl.formatToPlainString(a.t["ttJ/ho"], { quantity: n }),
              description: a.intl.string(a.t.iLyuDA),
            };
          case o.evJ.GUILD_AT_CAPACITY:
            return {
              title: a.intl.string(a.t.ZZlox8),
              description: a.intl.string(a.t.ZUEGFh),
            };
          case o.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
              title: a.intl.string(a.t.kJwpBQ),
              description: a.intl.string(a.t.ZUEGFh),
            };
          default:
            return null;
        }
      }
      function c(e) {
        switch (e) {
          case o.evJ.TOO_MANY_USER_GUILDS:
            return a.intl.string(a.t.iLyuDA);
          case o.evJ.GUILD_AT_CAPACITY:
            return a.intl.string(a.t.M6unND);
          case o.evJ.INVALID_COUNTRY_CODE:
            return a.intl.string(a.t.sRJGR0);
          case o.evJ.INVALID_CANNOT_FRIEND_SELF:
            return a.intl.string(a.t["mY2R+P"]);
          case o.evJ.INVITES_DISABLED:
            return a.intl.format(a.t.RXSeLi, {
              articleLink: l.Z.getArticleURL(o.BhN.INVITE_DISABLED),
            });
          default:
            return a.intl.string(a.t.dDZRd3);
        }
      }
    },
    398584: function (e, t, n) {
      e.exports = {
        iconContainer: "iconContainer_a2aef9",
        filledIcon: "filledIcon_a2aef9",
      };
    },
    378969: function (e, t, n) {
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
    849445: function (e, t, n) {
      e.exports = { container: "container_a4d79f" };
    },
    176635: function (e, t, n) {
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
    886658: function (e, t, n) {
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
    148057: function (e, t, n) {
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
    729604: function (e, t, n) {
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
    674353: function (e, t, n) {
      e.exports = {
        container: "container_a47d49",
        icon: "icon_a47d49",
        text: "text_a47d49",
        arrow: "arrow_a47d49",
      };
    },
  },
]);
//# sourceMappingURL=30544a2c9e9eab17dd4b.js.map
