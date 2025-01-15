"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60356"],
  {
    98118: function (e) {
      e.exports = "/assets/d2259d3ca22746e44d10.svg";
    },
    134978: function (e) {
      e.exports = "/assets/4d59a8d7e497a428871d.svg";
    },
    290068: function (e) {
      e.exports = "/assets/2297f5f7cdfd7cc10377.svg";
    },
    465644: function (e) {
      e.exports = "/assets/1b2e6afe5b46808ec54a.svg";
    },
    639738: function (e) {
      e.exports = "/assets/76b43bee81103929cfa5.svg";
    },
    176530: function (e) {
      e.exports = "/assets/a3c71c98967d938828b0.svg";
    },
    719082: function (e) {
      e.exports = "/assets/d3ab98ac02693056e6b0.svg";
    },
    882572: function (e) {
      e.exports = "/assets/e26e5e853fb63be87cd1.svg";
    },
    257709: function (e) {
      e.exports = "/assets/ca30936921c9e8b51b2d.svg";
    },
    974977: function (e) {
      e.exports = "/assets/fd441fe73cd855dee579.svg";
    },
    596465: function (e) {
      e.exports = "/assets/8fafc228ce91a2df9658.svg";
    },
    319846: function (e) {
      e.exports = "/assets/4b96f306cd9af86e3136.svg";
    },
    436046: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return x;
        },
      }),
        s(47120);
      var n = s(200651),
        o = s(192379),
        a = s(512722),
        i = s.n(a),
        r = s(442837),
        l = s(692547),
        c = s(481060),
        d = s(771308),
        u = s(13430),
        f = s(594174),
        _ = s(63063),
        p = s(981631),
        m = s(723359),
        h = s(388032),
        N = s(653090);
      function x(e) {
        let { onComplete: t, onClose: s } = e,
          [a, x] = o.useState(null),
          [C, E] = o.useState(null),
          [T, b] = o.useState(!1),
          I = (0, r.e7)([f.default], () => f.default.getCurrentUser()),
          j = o.createRef();
        async function v(e) {
          e.preventDefault(),
            i()(null != a, "Cannot submit null birthday."),
            b(!0);
          try {
            await d.Av(a, m.L0.NEW_USER_FLOW), t();
          } catch (e) {
            if (null != e.body && null != e.body.date_of_birth)
              d.wE(m.L0.NEW_USER_FLOW), d.hp(m.L0.NEW_USER_FLOW), s();
            else {
              var n;
              (null == e
                ? void 0
                : null === (n = e.body) || void 0 === n
                  ? void 0
                  : n.username) != null
                ? E(h.intl.string(h.t["TGg/2t"]))
                : E(null == e ? void 0 : e.body.message);
            }
          }
          b(!1);
        }
        o.useEffect(() => {
          null != I && null != I.nsfwAllowed && t();
        }, [I, t]);
        let A = o.useCallback(
            (e) => {
              x(e);
            },
            [x],
          ),
          F = o.useCallback(() => {
            var e;
            null === (e = j.current) || void 0 === e || e.focus();
          }, [j]);
        return null == I
          ? null
          : (0, n.jsxs)("form", {
              className: N.content,
              onSubmit: v,
              children: [
                (0, n.jsx)(c.ClydeIcon, {
                  size: "custom",
                  width: 56,
                  height: 40,
                  className: N.logo,
                  color: l.Z.unsafe_rawColors.BRAND_500.css,
                }),
                (0, n.jsx)(c.Heading, {
                  className: N.title,
                  variant: "heading-xl/semibold",
                  children: h.intl.string(h.t.n7i7sr),
                }),
                (0, n.jsx)(c.Text, {
                  color: "text-normal",
                  className: N.description,
                  variant: "text-md/normal",
                  children: h.intl.format(h.t.fa8kW1, {
                    helpURL: _.Z.getArticleURL(p.BhN.AGE_GATE),
                  }),
                }),
                (0, n.jsx)(c.ThemeContextProvider, {
                  theme: p.BRd.LIGHT,
                  children: (0, n.jsx)(u.Z, {
                    required: !0,
                    autoFocus: !0,
                    wrapperClassName: N.formItem,
                    label: h.intl.string(h.t.rhBeKS),
                    name: "birthday",
                    onChange: A,
                    onPopulated: F,
                    error: C,
                    value: a,
                  }),
                }),
                (0, n.jsx)("div", {
                  className: N.footer,
                  children: (0, n.jsx)("div", {
                    className: N.buttonWrapper,
                    children: (0, n.jsx)(c.Button, {
                      buttonRef: j,
                      type: "submit",
                      size: c.Button.Sizes.LARGE,
                      submitting: T,
                      disabled: null == a,
                      fullWidth: !0,
                      children: h.intl.string(h.t.PDTjLC),
                    }),
                  }),
                }),
              ],
            });
      }
    },
    963209: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = s(200651);
      s(192379);
      var o = s(120356),
        a = s.n(o),
        i = s(481060),
        r = s(118012),
        l = s(388032),
        c = s(709588);
      function d(e) {
        let { onComplete: t } = e;
        return (0, n.jsxs)(i.Clickable, {
          className: c.container,
          onClick: t,
          children: [
            (0, n.jsx)(r.Z, {
              size: r.Z.Sizes.SIZE_24,
              className: c.title,
              children: l.intl.string(l.t["Deps4+"]),
            }),
            (0, n.jsx)(r.Z, {
              size: r.Z.Sizes.SIZE_24,
              className: a()(c.title, c.subtitle),
              children: l.intl.string(l.t.xv5g7O),
            }),
            (0, n.jsx)(i.Button, {
              color: i.Button.Colors.WHITE,
              onClick: t,
              children: l.intl.string(l.t["6X9YKC"]),
            }),
          ],
        });
      }
    },
    436457: function (e, t, s) {
      let n, o;
      s.d(t, {
        Z: function () {
          return E;
        },
      }),
        s(47120);
      var a = s(200651),
        i = s(192379),
        r = s(120356),
        l = s.n(r),
        c = s(481060),
        d = s(447543),
        u = s(230711),
        f = s(881052),
        _ = s(600164),
        p = s(118012),
        m = s(782605),
        h = s(981631),
        N = s(388032),
        x = s(735361);
      let C =
        ((n = window.GLOBAL_ENV.INVITE_HOST),
        (o = ""),
        null == n && ((n = location.host), (o = h.Z5c.INVITE(""))),
        "".concat(location.protocol, "//").concat(n).concat(o, "/"));
      function E(e) {
        let { onBack: t, onComplete: s, onConnect: n, isSlideReady: o } = e,
          [r, E] = i.useState(""),
          [T, b] = i.useState(!1),
          [I, j] = i.useState(null),
          v = i.useRef(null);
        i.useEffect(() => {
          var e;
          o && (null === (e = v.current) || void 0 === e || e.focus());
        }, [o]);
        let A = i.useCallback(
            (e) => {
              e.preventDefault();
              let t = r.trim();
              if ("" === t) {
                j(N.intl.string(N.t.IRq5am));
                return;
              }
              j(null), b(!0);
              let n = t.split("/"),
                o = n[n.length - 1];
              d.Z.resolveInvite(o, "Join Guild", { inputValue: t }).then(
                (e) => {
                  let { invite: t } = e;
                  if ((b(!1), null == t)) {
                    j(N.intl.string(N.t["GEYI+f"]));
                    return;
                  }
                  if (null != t.channel) {
                    let e = d.Z.getInviteContext("Join Guild", t);
                    d.Z.acceptInvite({
                      inviteKey: t.code,
                      context: e,
                      callback: (e) => {
                        s(), d.Z.transitionToInvite(e);
                      },
                    }).catch((e) => {
                      e instanceof f.yZ || e instanceof f.Hx
                        ? j((0, m.O)(e.code))
                        : j(N.intl.string(N.t.dDZRd3));
                    });
                  }
                },
                (e) => {
                  b(!1);
                  let t = new f.yZ(e);
                  j((0, m.O)(t.code));
                },
              );
            },
            [r, b, j, s],
          ),
          F = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                className: x.header,
                direction: _.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                  (0, a.jsx)(p.Z, {
                    className: x.title,
                    size: p.Z.Sizes.SIZE_24,
                    color: p.Z.Colors.HEADER_PRIMARY,
                    children: N.intl.string(N.t.riOUtL),
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: N.intl.string(N.t["7jub2t"]),
                  }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                children: [
                  (0, a.jsx)("form", {
                    onSubmit: A,
                    className: x.inputForm,
                    children: (0, a.jsx)(c.FormItem, {
                      title: N.intl.string(N.t.qreV29),
                      error: I,
                      titleClassName: l()(x.formTitle, {
                        [x.error]: null != I,
                      }),
                      children: (0, a.jsx)(c.TextInput, {
                        value: r,
                        onChange: E,
                        className: x.input,
                        inputClassName: x.inputInner,
                        inputRef: v,
                      }),
                    }),
                  }),
                  (0, a.jsx)(c.Text, {
                    color: "header-secondary",
                    variant: "text-xs/normal",
                    children: N.intl.format(N.t.lHTZl5, {
                      examples: ""
                        .concat(C)
                        .concat("cool-people", ", ")
                        .concat("hTKzmak"),
                    }),
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    className: x.connectCTA,
                    children: N.intl.format(N.t["8F/who"], {
                      onClick: () => {
                        n(), u.Z.open(h.oAB.CONNECTIONS);
                      },
                    }),
                  }),
                ],
              }),
            ],
          });
        return {
          content: F,
          footer: (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(c.Button, {
                color: c.Button.Colors.BRAND,
                onClick: A,
                disabled: 0 === r.length,
                submitting: T,
                children: N.intl.string(N.t.VJlc0d),
              }),
              (0, a.jsx)(c.Button, {
                className: x.__invalid_skipButton,
                look: c.Button.Looks.BLANK,
                size: c.Button.Sizes.MIN,
                onClick: t,
                children: N.intl.string(N.t["13/7kZ"]),
              }),
            ],
          }),
        };
      }
    },
    599219: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return B;
          },
        }),
        s(47120);
      var n = s(200651),
        o = s(192379),
        a = s(120356),
        i = s.n(a),
        r = s(990547),
        l = s(442837),
        c = s(481060),
        d = s(393238),
        u = s(600164),
        f = s(313201),
        _ = s(215292),
        p = s(382086),
        m = s(996453),
        h = s(446706),
        N = s(594174),
        x = s(626135),
        C = s(179645),
        E = s(436046),
        T = s(963209),
        b = s(436457),
        I = s(877758),
        j = s(701476),
        v = s(785997),
        A = s(981631),
        F = s(834891),
        g = s(675999),
        S = s(388032),
        L = s(117820);
      function B(e) {
        let t = (0, f.Dt)(),
          { onSlideChange: s, ...a } = e,
          { onClose: B } = a,
          [O, G] = o.useState(!1),
          Z = (0, l.e7)([N.default], () => N.default.getCurrentUser()),
          D = null != Z && null == Z.nsfwAllowed,
          [M, R] = o.useState(D ? v.F.AGE_GATE : v.F.CHOOSE_TEMPLATE),
          [k, U] = o.useState(null);
        o.useEffect(() => {
          s(O ? v.F.COMPLETE : M);
        }, [s, M, O]);
        let [w, P] = o.useState(null),
          [y, H] = o.useState(null),
          [z, W] = o.useState(!1),
          J = (0, l.e7)([C.Z], () => C.Z.getType() === j.M5.INVITE_UNCLAIMED),
          V = o.useCallback(
            (e) => {
              H(e),
                R(v.F.CREATION_INTENT),
                x.default.track(A.rMx.GUILD_TEMPLATE_SELECTED, {
                  template_name: e.label,
                  template_code: e.code,
                });
            },
            [H, R],
          ),
          { content: K, footer: Y } = (0, p.v)({
            hasFooter: !1,
            onBack: () => {
              H(null), R(v.F.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
              W(e === g.lr.COMMUNITY), R(v.F.CUSTOMIZE_GUILD);
            },
          }),
          { content: q, footer: X } = (0, m.G)({
            guildTemplate: y,
            titleClassName: L.customizeGuildTitle,
            hasFooter: !1,
            onGuildCreated: (e) => {
              P(e),
                (null == y ? void 0 : y.id) === F.l.CREATE
                  ? R(v.F.CHANNEL_PROMPT)
                  : G(!0);
            },
            onBack: () => {
              R(v.F.CREATION_INTENT);
            },
            isSlideReady: k === v.F.CUSTOMIZE_GUILD,
            isCommunity: z,
          }),
          { content: Q, footer: $ } = (0, _.F)({
            createdGuildId: w,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
              G(!0);
            },
            isSlideReady: k === v.F.CHANNEL_PROMPT,
          }),
          { content: ee, footer: et } = (0, b.Z)({
            onBack: () => R(v.F.CHOOSE_TEMPLATE),
            onComplete: () => {
              B();
            },
            onConnect: B,
            isSlideReady: k === v.F.JOIN_GUILD,
          }),
          es = null;
        switch (M) {
          case v.F.CUSTOMIZE_GUILD:
            es = X;
            break;
          case v.F.CHANNEL_PROMPT:
            es = $;
            break;
          case v.F.JOIN_GUILD:
            es = et;
            break;
          case v.F.CREATION_INTENT:
            es = Y;
        }
        let { ref: en, width: eo } = (0, d.Z)();
        if (O)
          return (0, n.jsx)(c.ModalRoot, {
            ...a,
            size: c.ModalSize.MEDIUM,
            className: i()(L.modal, L.completed),
            "aria-labelledby": t,
            children: (0, n.jsx)(T.Z, { onComplete: B }),
          });
        let ea = { impression_group: r.ImpressionGroups.GUILD_ADD_NUF };
        return (0, n.jsxs)(c.ModalRoot, {
          ...a,
          size: c.ModalSize.MEDIUM,
          className: L.modal,
          "aria-labelledby": t,
          children: [
            (0, n.jsx)("div", {
              className: L.sidebar,
              children: (0, n.jsx)(I.Z, { step: M }),
            }),
            (0, n.jsx)(c.ThemeProvider, {
              theme: A.BRd.LIGHT,
              children: (e) =>
                (0, n.jsxs)("div", {
                  className: i()(L.content, e),
                  ref: en,
                  children: [
                    (0, n.jsx)("div", {
                      className: L.slidesContainer,
                      children: (0, n.jsxs)(c.Slides, {
                        activeSlide: M,
                        onSlideReady: (e) => U(e),
                        centered: !1,
                        width: eo,
                        children: [
                          (0, n.jsx)(c.Slide, {
                            id: v.F.AGE_GATE,
                            children: (0, n.jsx)("div", {
                              className: L.container,
                              children: (0, n.jsx)(E.Z, {
                                onComplete: () => {
                                  J ? B() : R(v.F.CHOOSE_TEMPLATE);
                                },
                                onClose: B,
                              }),
                            }),
                          }),
                          (0, n.jsx)(c.Slide, {
                            id: v.F.CHOOSE_TEMPLATE,
                            impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
                            impressionProperties: ea,
                            children: (0, n.jsx)("div", {
                              className: i()(L.container, L.shortFooter),
                              children: (0, n.jsx)(h.Z, {
                                className: L.templates,
                                onChooseTemplate: V,
                                isNewUser: !0,
                              }),
                            }),
                          }),
                          (0, n.jsx)(c.Slide, {
                            id: v.F.CREATION_INTENT,
                            impressionName:
                              r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                            impressionProperties: ea,
                            children: (0, n.jsx)("div", {
                              className: i()(L.container, L.standardFooter),
                              children: K,
                            }),
                          }),
                          (0, n.jsx)(c.Slide, {
                            id: v.F.CUSTOMIZE_GUILD,
                            impressionName:
                              r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                            impressionProperties: ea,
                            children: (0, n.jsx)("div", {
                              className: i()(L.container, L.standardFooter),
                              children: q,
                            }),
                          }),
                          (0, n.jsx)(c.Slide, {
                            id: v.F.CHANNEL_PROMPT,
                            impressionName:
                              r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                            impressionProperties: ea,
                            children: (0, n.jsx)("div", {
                              className: i()(L.container, L.standardFooter),
                              children: Q,
                            }),
                          }),
                          (0, n.jsx)(c.Slide, {
                            id: v.F.JOIN_GUILD,
                            impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
                            impressionProperties: ea,
                            children: (0, n.jsx)("div", {
                              className: i()(L.container, L.standardFooter),
                              children: ee,
                            }),
                          }),
                        ],
                      }),
                    }),
                    M !== v.F.AGE_GATE
                      ? (0, n.jsx)(c.ModalCloseButton, {
                          onClick: B,
                          className: L.closeButton,
                        })
                      : null,
                    M === v.F.CHOOSE_TEMPLATE
                      ? (0, n.jsx)(c.ModalFooter, {
                          justify: u.Z.Justify.BETWEEN,
                          className: i()(L.footer, L.join),
                          children: (0, n.jsx)(c.Anchor, {
                            className: L.joinCTA,
                            onClick: () => {
                              R(v.F.JOIN_GUILD);
                            },
                            children: (0, n.jsxs)(c.Text, {
                              variant: "text-sm/medium",
                              className: L.joinCTA,
                              children: [
                                S.intl.string(S.t["N+Mi/f"]),
                                " ",
                                S.intl.string(S.t.yRjK4u),
                              ],
                            }),
                          }),
                        })
                      : null,
                    null != es
                      ? (0, n.jsx)(c.ModalFooter, {
                          justify: u.Z.Justify.BETWEEN,
                          className: L.footer,
                          children: es,
                        })
                      : null,
                  ],
                }),
            }),
          ],
        });
      }
    },
    877758: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = s(200651);
      s(192379);
      var o = s(120356),
        a = s.n(o),
        i = s(785997),
        r = s(705574);
      function l(e) {
        let { step: t } = e,
          s = t === i.F.AGE_GATE,
          o = t === i.F.CHOOSE_TEMPLATE || t === i.F.CREATION_INTENT,
          l = t === i.F.CUSTOMIZE_GUILD,
          c = t === i.F.CHANNEL_PROMPT || t === i.F.JOIN_GUILD,
          d = l || c,
          u = o || d;
        return (0, n.jsxs)("div", {
          className: r.sidebar,
          children: [
            (0, n.jsx)("div", { className: a()(r.step1, { [r.show]: s }) }),
            (0, n.jsx)("div", {
              className: a()(r.step24Clouds, { [r.show]: u }),
            }),
            (0, n.jsx)("div", {
              className: a()(r.step34Flag, { [r.show]: d }),
            }),
            (0, n.jsx)("div", {
              className: a()(r.step24Base, { [r.show]: u }),
            }),
            (0, n.jsx)("div", {
              className: a()(r.step24Ground, { [r.show]: u }),
            }),
            (0, n.jsx)("div", { className: a()(r.step2Base, { [r.show]: o }) }),
            (0, n.jsx)("div", {
              className: a()(r.step2Character, { [r.show]: o }),
            }),
            (0, n.jsx)("div", {
              className: a()(r.step34Base, { [r.show]: d }),
            }),
            (0, n.jsx)("div", {
              className: a()(r.step3Character, { [r.show]: l }),
            }),
            (0, n.jsx)("div", {
              className: a()(r.step4Character, { [r.show]: c }),
            }),
            (0, n.jsx)("div", {
              className: a()(r.step24Foreground, { [r.show]: u }),
            }),
          ],
        });
      }
    },
    398584: function (e, t, s) {
      e.exports = {
        iconContainer: "iconContainer_a2aef9",
        filledIcon: "filledIcon_a2aef9",
      };
    },
    342746: function (e, t, s) {
      s.r(
        (e.exports = {
          container: "container_a57e6a",
          title: "title_a57e6a",
          inputs: "inputs_a57e6a",
          day: "day_a57e6a",
          month: "month_a57e6a",
          year: "year_a57e6a",
          errors: "errors_a57e6a",
        }),
      );
    },
    378969: function (e, t, s) {
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
    176635: function (e, t, s) {
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
    886658: function (e, t, s) {
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
    148057: function (e, t, s) {
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
    674353: function (e, t, s) {
      e.exports = {
        container: "container_a47d49",
        icon: "icon_a47d49",
        text: "text_a47d49",
        arrow: "arrow_a47d49",
      };
    },
    55161: function (e, t, s) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    653090: function (e, t, s) {
      e.exports = {
        content: "content_cbc80a",
        logo: "logo_cbc80a",
        title: "title_cbc80a",
        description: "description_cbc80a",
        formItem: "formItem_cbc80a",
        footer: "footer_cbc80a",
        buttonWrapper: "buttonWrapper_cbc80a",
      };
    },
    709588: function (e, t, s) {
      e.exports = {
        container: "container_f0ded7",
        title: "title_f0ded7",
        subtitle: "subtitle_f0ded7",
      };
    },
    735361: function (e, t, s) {
      e.exports = {
        header: "header_f3e944",
        title: "title_f3e944",
        inputForm: "inputForm_f3e944",
        formTitle: "formTitle_f3e944",
        error: "error_f3e944",
        input: "input_f3e944",
        inputInner: "inputInner_f3e944",
        connectCTA: "connectCTA_f3e944",
      };
    },
    117820: function (e, t, s) {
      e.exports = {
        modal: "modal_d5f0da",
        completed: "completed_d5f0da",
        sidebar: "sidebar_d5f0da",
        content: "content_d5f0da",
        slidesContainer: "slidesContainer_d5f0da",
        closeButton: "closeButton_d5f0da",
        container: "container_d5f0da",
        shortFooter: "shortFooter_d5f0da",
        standardFooter: "standardFooter_d5f0da",
        templates: "templates_d5f0da",
        footer: "footer_d5f0da",
        join: "join_d5f0da",
        customizeGuildTitle: "customizeGuildTitle_d5f0da",
        joinCTA: "joinCTA_d5f0da",
      };
    },
    705574: function (e, t, s) {
      e.exports = {
        sidebar: "sidebar_dc763f",
        show: "show_dc763f",
        step1: "step1_dc763f art_dc763f",
        step24Clouds: "step24Clouds_dc763f art_dc763f step12Animation_dc763f",
        step24Base: "step24Base_dc763f art_dc763f step12Animation_dc763f",
        step24Ground: "step24Ground_dc763f art_dc763f step12Animation_dc763f",
        step2Character:
          "step2Character_dc763f art_dc763f step24Animation_dc763f",
        step2Base: "step2Base_dc763f art_dc763f step12Animation_dc763f",
        step34Base: "step34Base_dc763f art_dc763f step24Animation_dc763f",
        step34Flag: "step34Flag_dc763f art_dc763f step24Animation_dc763f",
        step3Character:
          "step3Character_dc763f art_dc763f step24Animation_dc763f",
        step4Character:
          "step4Character_dc763f art_dc763f step24Animation_dc763f",
        step24Foreground:
          "step24Foreground_dc763f art_dc763f step12Animation_dc763f",
      };
    },
  },
]);
//# sourceMappingURL=1be277a8b59958424843.js.map
