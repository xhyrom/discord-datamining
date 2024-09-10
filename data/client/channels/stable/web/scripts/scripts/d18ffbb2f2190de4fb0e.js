"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95468"],
  {
    216019: function (e) {
      e.exports = "/assets/48340e291a1e5f7e391d.svg";
    },
    524094: function (e) {
      e.exports = "/assets/422277d5d38b9aad604e.svg";
    },
    802670: function (e) {
      e.exports = "/assets/32a122be9f6977df7c96.svg";
    },
    17754: function (e) {
      e.exports = "/assets/9181bb55a843090db30d.svg";
    },
    951716: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return l;
        },
      });
      var t = a(344532),
        n = a(23434);
      function l() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : t.Z,
          s =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : n.Z;
        return null != s.getAction() || Object.keys(e.getState()).length > 0;
      }
    },
    645792: function (e, s, a) {
      a.d(s, {
        b: function () {
          return n;
        },
      });
      let t = (0, a(818083).B)({
        kind: "user",
        id: "2022-08_back_to_school",
        label: "Back to School Event",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Back to School experience enabled",
            config: { enabled: !0 },
          },
        ],
      });
      function n() {
        return t.getCurrentConfig(
          { location: "68acbb_1" },
          { autoTrackExposure: !1 },
        ).enabled;
      }
      s.Z = t;
    },
    495784: function (e, s, a) {
      var t = a(913527),
        n = a.n(t),
        l = a(704215),
        i = a(951716),
        r = a(605236),
        o = a(972830),
        c = a(430824),
        d = a(594174),
        N = a(374023),
        u = a(709054),
        _ = a(645792),
        m = a(981631),
        E = a(921944);
      s.Z = {
        init(e) {
          let { hasModalOpen: s, openModal: a } = e;
          if (!N.s.isDisallowPopupsSet())
            (0, o.h)(() => {
              if ((0, i.Z)()) return;
              let e = d.default.getCurrentUser(),
                t =
                  null != e &&
                  7 > n()().diff(n()(u.default.extractTimestamp(e.id)), "days"),
                o =
                  null !=
                  Object.values(c.Z.getGuilds()).find((e) =>
                    e.hasFeature(m.oNc.HUB),
                  ),
                N = !(0, r.un)(l.z.HUB_BACK_TO_SCHOOL_UPSELL);
              !(t || s() || o || !N) &&
                (0, _.b)() &&
                (_.Z.trackExposure({ location: "8b792a_1" }),
                a(),
                (0, r.kk)(l.z.HUB_BACK_TO_SCHOOL_UPSELL));
            });
        },
        hideHubUpsell() {
          (0, r.EW)(l.z.HUB_BACK_TO_SCHOOL_UPSELL, { dismissAction: E.L.AUTO });
        },
      };
    },
    994640: function (e, s, a) {
      a(47120);
      var t = a(735250),
        n = a(470079),
        l = a(120356),
        i = a.n(l),
        r = a(481060),
        o = a(231239),
        c = a(881052),
        d = a(313201),
        N = a(592125),
        u = a(888592),
        _ = a(981631),
        m = a(689938),
        E = a(850477);
      let I = (0, d.hQ)();
      s.Z = (e) => {
        let {
            setStep: s,
            setGuildsInfo: a,
            email: l,
            setEmail: d,
            setGuildId: x,
            invite: h,
            onClose: C,
            isNUXFlow: T,
          } = e,
          [g, O] = n.useState(null),
          [v, L] = n.useState(!1),
          S = async (e) => {
            e.preventDefault(), O(null), L(!0);
            try {
              var t, n, i, r, d;
              let e =
                null !==
                  (d =
                    null !==
                      (r =
                        null == h
                          ? void 0
                          : null === (t = h.guild) || void 0 === t
                            ? void 0
                            : t.id) && void 0 !== r
                      ? r
                      : null ===
                            (n = N.Z.getChannel(
                              null == h
                                ? void 0
                                : null === (i = h.channel) || void 0 === i
                                  ? void 0
                                  : i.id,
                            )) || void 0 === n
                        ? void 0
                        : n.getGuildId()) && void 0 !== d
                  ? d
                  : void 0;
              e === u.fQ && (e = void 0);
              let c = await o.Z.sendVerificationEmail(l, !0, e),
                _ = c.guilds_info;
              c.has_matching_guild
                ? (x(e), s(u.tF.VERIFY_PIN))
                : 0 === _.length
                  ? s(u.tF.SUBMIT_SCHOOL)
                  : 1 === _.length
                    ? (x(_[0].id),
                      await o.Z.sendVerificationEmail(l, !0, _[0].id),
                      s(u.tF.VERIFY_PIN))
                    : (a(_), s(u.tF.SELECT_SCHOOL));
            } catch (e) {
              O(new c.Hx(e));
            } finally {
              L(!1);
            }
          },
          M = m.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_HEADER,
          A = m.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_DESCRIPTION;
        if (T)
          (M = m.Z.Messages.HUB_EMAIL_CONNECTION_NUX_HEADER),
            (A = m.Z.Messages.HUB_EMAIL_CONNECTION_NUX_CONTENT_DESCRIPTION);
        else if (
          (null == h ? void 0 : h.guild) != null &&
          h.guild.id !== u.fQ &&
          (null == h ? void 0 : h.approximate_member_count) != null
        ) {
          let { name: e } = h.guild;
          M = m.Z.Messages.HUB_EMAIL_CONNECTION_INVITE_HEADER.format({
            guildName: e,
            count: h.approximate_member_count,
          });
        }
        return (0, t.jsxs)("div", {
          className: E.container,
          children: [
            (0, t.jsx)("div", { className: E.topImage }),
            (0, t.jsx)(r.Heading, {
              className: i()(E.centerText, E.header),
              variant: "heading-xl/semibold",
              children: M,
            }),
            (0, t.jsx)("div", {
              className: E.descriptionWidth,
              children: (0, t.jsx)(r.Text, {
                className: E.centerText,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: A,
              }),
            }),
            (0, t.jsxs)("form", {
              className: E.formContent,
              onSubmit: S,
              children: [
                (0, t.jsxs)(r.FormItem, {
                  children: [
                    (0, t.jsx)(r.FormTitle, {
                      id: I,
                      children:
                        m.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_HEADER,
                    }),
                    (0, t.jsx)(r.TextInput, {
                      placeholder:
                        m.Z.Messages
                          .HUB_EMAIL_CONNECTION_CONTENT_INPUT_PLACEHOLDER,
                      onChange: (e) => {
                        d(e);
                      },
                      error: null == g ? void 0 : g.getAnyErrorMessage(),
                      "aria-labelledby": I,
                    }),
                  ],
                }),
                (0, t.jsx)(r.Text, {
                  color: "header-secondary",
                  className: E.formDescription,
                  variant: "text-sm/normal",
                  children:
                    m.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_DESCRIPTION,
                }),
                (0, t.jsx)(r.Button, {
                  type: "submit",
                  size: r.Button.Sizes.LARGE,
                  color: r.Button.Colors.BRAND,
                  className: E.submitButton,
                  submitting: v,
                  children: m.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_BUTTON,
                }),
                (0, t.jsx)(r.Text, {
                  className: E.termsPhrase,
                  color: "header-secondary",
                  variant: "text-xs/normal",
                  children:
                    m.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_TOS_AND_PP.format(
                      { termsURL: _.EYA.TERMS, privacyURL: _.EYA.PRIVACY },
                    ),
                }),
                T &&
                  (0, t.jsx)(r.Button, {
                    look: r.Button.Looks.LINK,
                    onClick: C,
                    className: E.cancelButton,
                    children: m.Z.Messages.HUB_EMAIL_CONNECTION_CANCEL,
                  }),
              ],
            }),
          ],
        });
      };
    },
    950012: function (e, s, a) {
      a(47120);
      var t = a(735250),
        n = a(470079),
        l = a(994640),
        i = a(247007),
        r = a(999464),
        o = a(503406),
        c = a(463115),
        d = a(888592);
      s.Z = (e) => {
        let {
            onClose: s,
            invite: a,
            forceGuildScrollHeight: N = !0,
            isNUXFlow: u,
          } = e,
          [_, m] = n.useState([d.tF.VERIFY_EMAIL]),
          [E, I] = n.useState(""),
          [x, h] = n.useState(""),
          [C, T] = n.useState(void 0),
          [g, O] = n.useState([]),
          v = (e) => {
            m(_.concat(e).slice(-4));
          };
        switch (_[_.length - 1]) {
          case d.tF.VERIFY_EMAIL:
            return (0, t.jsx)(l.Z, {
              setGuildsInfo: O,
              setStep: v,
              email: E,
              setEmail: I,
              setGuildId: T,
              invite: a,
              onClose: s,
              isNUXFlow: u,
            });
          case d.tF.SELECT_SCHOOL:
            return (0, t.jsx)(i.Z, {
              guildsInfo: g,
              setStep: v,
              email: E,
              setGuildId: T,
              forceGuildScrollHeight: N,
            });
          case d.tF.SUBMIT_SCHOOL:
            return (0, t.jsx)(r.Z, {
              onBack: () => {
                _.length > 1 && m(_.slice(0, -1).slice(-4));
              },
              setStep: v,
              email: E,
              school: x,
              setSchool: h,
            });
          case d.tF.VERIFY_PIN:
            return (0, t.jsx)(o.Z, { email: E, onClose: s, guildId: C });
          case d.tF.EMAIL_WAITLIST:
            return (0, t.jsx)(c.Z, { setStep: v, school: x });
          default:
            return null;
        }
      };
    },
    247007: function (e, s, a) {
      a(47120);
      var t = a(735250),
        n = a(470079),
        l = a(120356),
        i = a.n(l),
        r = a(658722),
        o = a.n(r),
        c = a(481060),
        d = a(231239),
        N = a(881052),
        u = a(686546),
        _ = a(565138),
        m = a(601964),
        E = a(768581),
        I = a(888592),
        x = a(689938),
        h = a(817034),
        C = a(216019);
      function T(e) {
        var s;
        let { guildInfo: a, onClick: n, submitting: l } = e,
          i =
            null !==
              (s = E.ZP.getGuildIconURL({
                id: a.id,
                icon: a.icon,
                size: 40,
              })) && void 0 !== s
              ? s
              : void 0;
        return (0, t.jsxs)(c.Clickable, {
          className: h.clickableGuildInfoRow,
          onClick: n,
          children: [
            (0, t.jsx)(u.ZP, {
              mask: u.ZP.Masks.AVATAR_DEFAULT,
              width: 40,
              height: 40,
              children: (0, t.jsx)(_.Z, {
                className: h.guildIcon,
                iconSrc: i,
                guild: new m.ZP(a),
                size: _.Z.Sizes.MEDIUM,
              }),
            }),
            (0, t.jsx)(c.Text, {
              className: h.guildName,
              variant: "text-md/semibold",
              children: a.name,
            }),
            l
              ? (0, t.jsx)(c.Spinner, { type: c.Spinner.Type.PULSING_ELLIPSIS })
              : (0, t.jsx)("img", {
                  className: h.__invalid_arrow,
                  alt: "",
                  src: C,
                }),
          ],
        });
      }
      s.Z = (e) => {
        let {
            setStep: s,
            email: a,
            guildsInfo: l,
            setGuildId: r,
            forceGuildScrollHeight: u,
          } = e,
          [_, m] = n.useState(null),
          [E, C] = n.useState(void 0),
          [g, O] = n.useState(null),
          v = (e) => async () => {
            m(null), r(e), O(e);
            try {
              await d.Z.sendVerificationEmail(a, !0, e), s(I.tF.VERIFY_PIN);
            } catch (e) {
              m(new N.Hx(e));
            } finally {
              O(null);
            }
          },
          L = () => s(I.tF.SUBMIT_SCHOOL),
          S = l;
        return (
          null != E &&
            "" !== E &&
            (S = l.filter((e) => o()(E.toLowerCase(), e.name.toLowerCase()))),
          (0, t.jsxs)("div", {
            className: h.container,
            children: [
              (0, t.jsx)(c.Heading, {
                className: i()(h.centerText, h.header),
                variant: "heading-xl/semibold",
                children: x.Z.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_HEADER,
              }),
              (0, t.jsx)("div", {
                className: h.description,
                children: (0, t.jsx)(c.Text, {
                  className: h.centerText,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children:
                    x.Z.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_SUBHEADER.format(
                      { onJoinWaitlist: L },
                    ),
                }),
              }),
              (0, t.jsxs)("div", {
                className: i()(h.guildList, { [h.forcedHeight]: u }),
                children: [
                  (0, t.jsxs)("div", {
                    className: h.searchContainer,
                    children: [
                      (0, t.jsx)(c.SearchBox, {
                        placeholder: x.Z.Messages.SEARCH,
                        className: h.searchBox,
                        inputClassName: h.searchBoxInput,
                        searchIconClassName: h.searchBoxIcon,
                        closeIconClassName: h.searchBoxIcon,
                        onChange: (e) => {
                          C(e);
                        },
                        label: x.Z.Messages.SEARCH,
                        searchTerm: E,
                        onClear: () => {
                          C(void 0);
                        },
                      }),
                      (0, t.jsx)(c.Text, {
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: null == _ ? void 0 : _.getAnyErrorMessage(),
                      }),
                    ],
                  }),
                  S.length > 0
                    ? (0, t.jsx)(c.ScrollerThin, {
                        className: h.scroller,
                        children: S.map((e) =>
                          void 0 === e
                            ? null
                            : (0, t.jsx)(
                                T,
                                {
                                  guildInfo: e,
                                  onClick: v(e.id),
                                  submitting: g === e.id,
                                },
                                e.id,
                              ),
                        ),
                      })
                    : (0, t.jsx)("div", {
                        className: h.noResultsContainer,
                        children: (0, t.jsxs)("div", {
                          className: h.noResultsContent,
                          children: [
                            (0, t.jsx)("div", { className: h.noResultsImage }),
                            (0, t.jsx)(c.Heading, {
                              className: i()(h.centerText, h.header),
                              variant: "heading-xl/semibold",
                              children:
                                x.Z.Messages
                                  .HUB_EMAIL_CONNECTION_GUILD_SELECT_NO_RESULTS_HEADER,
                            }),
                            (0, t.jsx)(c.Text, {
                              className: h.centerText,
                              variant: "text-md/normal",
                              children:
                                x.Z.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_NO_RESULTS_SUBHEADER.format(
                                  { onJoinWaitlist: L },
                                ),
                            }),
                          ],
                        }),
                      }),
                ],
              }),
            ],
          })
        );
      };
    },
    650233: function (e, s, a) {
      a.r(s),
        a.d(s, {
          HubEmailConnectionModalView: function () {
            return E;
          },
          default: function () {
            return m;
          },
        });
      var t = a(735250),
        n = a(470079),
        l = a(990547),
        i = a(481060),
        r = a(390885),
        o = a(495784),
        c = a(950012),
        d = a(161836),
        N = a(630724),
        u = a(689938),
        _ = a(668169);
      function m(e) {
        let { transitionState: s, onClose: a, isNUXFlow: m } = e;
        return (
          n.useEffect(() => {
            o.Z.hideHubUpsell(),
              m && r.Z.flowStep(N.MK.ORGANIC, N.EW.HUB_CONNECTION);
          }, [m]),
          (0, t.jsx)(i.ModalRoot, {
            className: _.modalRoot,
            transitionState: s,
            "aria-label": u.Z.Messages.HUB_WAITLIST_MODAL_JOIN_HEADER,
            impression: { impressionName: l.ImpressionNames.HUB_EMAIL_SIGNUP },
            children: (0, t.jsx)(i.ModalContent, {
              style: { overflow: "hidden", paddingRight: "0px" },
              paddingFix: !1,
              className: _.modalContent,
              children: (0, t.jsxs)("div", {
                className: _.container,
                children: [
                  (0, t.jsx)("div", {
                    className: _.sidebarContainer,
                    children: (0, t.jsx)(d.Z, {}),
                  }),
                  (0, t.jsxs)("div", {
                    className: _.contentContainer,
                    children: [
                      (0, t.jsx)(i.ModalCloseButton, {
                        onClick: a,
                        className: _.closeButton,
                      }),
                      (0, t.jsx)(c.Z, { isNUXFlow: m, onClose: a }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      let E = (e) => {
        let { invite: s } = e;
        return (0, t.jsxs)("div", {
          className: _.container,
          children: [
            (0, t.jsx)("div", {
              className: _.sidebarContainer,
              children: (0, t.jsx)(d.Z, {}),
            }),
            (0, t.jsx)("div", {
              className: _.contentContainer,
              children: (0, t.jsx)(c.Z, { invite: s }),
            }),
          ],
        });
      };
    },
    161836: function (e, s, a) {
      var t = a(735250);
      a(470079);
      var n = a(481060),
        l = a(689938),
        i = a(397503);
      s.Z = () =>
        (0, t.jsxs)("div", {
          className: i.container,
          children: [
            (0, t.jsx)("div", {
              className: i.iconContainer,
              children: (0, t.jsx)("div", { className: i.icon }),
            }),
            (0, t.jsx)(n.Text, {
              color: "header-primary",
              variant: "text-lg/semibold",
              className: i.header,
              children: l.Z.Messages.HUB_EMAIL_CONNECTION_SIDEBAR_HEADER,
            }),
            (0, t.jsx)(n.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              className: i.description,
              children:
                l.Z.Messages.HUB_EMAIL_CONNECTION_SIDEBAR_DESCRIPTION.format(),
            }),
          ],
        });
    },
    999464: function (e, s, a) {
      a(47120);
      var t = a(735250),
        n = a(470079),
        l = a(120356),
        i = a.n(l),
        r = a(481060),
        o = a(231239),
        c = a(881052),
        d = a(313201),
        N = a(888592),
        u = a(981631),
        _ = a(689938),
        m = a(459501);
      let E = (0, d.hQ)();
      s.Z = (e) => {
        let { email: s, setStep: a, onBack: l, school: d, setSchool: I } = e,
          [x, h] = n.useState(null),
          [C, T] = n.useState(!1),
          g = async () => {
            h(null), T(!0);
            try {
              await o.Z.signup(s, d), a(N.tF.EMAIL_WAITLIST);
            } catch (e) {
              h(new c.Hx(e));
            } finally {
              T(!1);
            }
          },
          O = async (e) => {
            null != d && "" !== d && e.charCode === u.yXg.ENTER && (await g());
          };
        return (0, t.jsxs)("div", {
          className: m.container,
          children: [
            (0, t.jsx)("div", { className: m.__invalid_topImage }),
            (0, t.jsx)(r.Heading, {
              className: i()(m.centerText, m.header),
              variant: "heading-xl/semibold",
              children: _.Z.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_HEADER,
            }),
            (0, t.jsx)("div", {
              className: m.descriptionWidth,
              children: (0, t.jsx)(r.Text, {
                className: m.centerText,
                variant: "text-sm/normal",
                color: "header-secondary",
                children:
                  _.Z.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_DESCRIPTION,
              }),
            }),
            (0, t.jsxs)(r.FormItem, {
              className: m.formItem,
              children: [
                (0, t.jsx)(r.FormTitle, {
                  id: E,
                  children:
                    _.Z.Messages
                      .HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_INPUT_HEADER,
                }),
                (0, t.jsx)(r.TextInput, {
                  onKeyPress: O,
                  placeholder:
                    _.Z.Messages
                      .HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_INPUT_PLACEHOLDER,
                  onChange: (e) => {
                    I(e);
                  },
                  error: null == x ? void 0 : x.getAnyErrorMessage(),
                  "aria-labelledby": E,
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: m.footer,
              children: [
                (0, t.jsx)(r.Button, {
                  className: m.backButton,
                  onClick: l,
                  look: r.Button.Looks.LINK,
                  size: r.Button.Sizes.NONE,
                  color: r.Button.Colors.PRIMARY,
                  children: _.Z.Messages.BACK,
                }),
                (0, t.jsx)(r.Button, {
                  onClick: g,
                  size: r.Button.Sizes.MEDIUM,
                  color: r.Button.Colors.BRAND,
                  className: m.__invalid_submitButton,
                  submitting: C,
                  children: _.Z.Messages.JOIN_WAITLIST,
                }),
              ],
            }),
          ],
        });
      };
    },
    503406: function (e, s, a) {
      a(47120);
      var t = a(735250),
        n = a(470079),
        l = a(120356),
        i = a.n(l),
        r = a(392711),
        o = a.n(r),
        c = a(481060),
        d = a(231239),
        N = a(881052),
        u = a(313201),
        _ = a(703656),
        m = a(981631),
        E = a(689938),
        I = a(651439);
      let x = (0, u.hQ)();
      s.Z = (e) => {
        let { email: s, guildId: a, onClose: l } = e,
          [r, u] = n.useState(""),
          [h, C] = n.useState(null),
          T = n.useCallback(async () => {
            if (null != a)
              try {
                let e = await d.Z.verifyCode(r, a, s);
                e.guild &&
                  (null == l || l(), (0, _.uL)(m.Z5c.CHANNEL(e.guild.id)));
              } catch (e) {
                C(new N.Hx(e));
              }
          }, [r, s, a, l]),
          g = o().throttle(() => {
            d.Z.sendVerificationEmail(s, !0, a);
          }, 1e3),
          O = async (e) => {
            null != r && "" !== r && e.charCode === m.yXg.ENTER && (await T());
          };
        return (0, t.jsxs)("div", {
          className: I.container,
          children: [
            (0, t.jsx)("div", { className: I.topImage }),
            (0, t.jsx)(c.Heading, {
              className: i()(I.centerText, I.header),
              variant: "heading-xl/semibold",
              children: E.Z.Messages.HUB_VERIFY_EMAIL_ADDRESS,
            }),
            (0, t.jsx)("div", {
              className: I.descriptionWidth,
              children: (0, t.jsx)(c.Text, {
                className: I.centerText,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: E.Z.Messages.HUB_PIN_DESCRIPTION.format({
                  email: s,
                  onClick: g,
                }),
              }),
            }),
            (0, t.jsxs)(c.FormItem, {
              className: I.formItem,
              children: [
                (0, t.jsx)(c.FormTitle, {
                  id: x,
                  children: E.Z.Messages.HUB_ENTER_PIN,
                }),
                (0, t.jsx)(c.TextInput, {
                  onKeyPress: O,
                  onChange: (e) => {
                    null != e && "" !== e && u(e);
                  },
                  error: null == h ? void 0 : h.getAnyErrorMessage(),
                  "aria-labelledby": x,
                }),
              ],
            }),
            (0, t.jsx)(c.Button, {
              fullWidth: !0,
              onClick: T,
              size: c.Button.Sizes.LARGE,
              color: c.Button.Colors.BRAND,
              children: (0, t.jsx)(c.Text, {
                className: I.submitText,
                variant: "text-sm/normal",
                children: E.Z.Messages.SUBMIT,
              }),
            }),
          ],
        });
      };
    },
    463115: function (e, s, a) {
      var t = a(735250);
      a(470079);
      var n = a(120356),
        l = a.n(n),
        i = a(481060),
        r = a(888592),
        o = a(689938),
        c = a(850477);
      s.Z = (e) => {
        let { school: s, setStep: a } = e;
        return (0, t.jsxs)("div", {
          className: c.container,
          children: [
            (0, t.jsx)("div", { className: c.topImage }),
            (0, t.jsx)(i.Heading, {
              className: l()(c.centerText, c.header),
              variant: "heading-xl/semibold",
              children: o.Z.Messages.HUB_WAITLIST_MODAL_JOINED_HEADER,
            }),
            (0, t.jsx)("div", {
              className: c.descriptionWidth,
              children: (0, t.jsx)(i.Text, {
                className: c.centerText,
                variant: "text-sm/normal",
                color: "header-secondary",
                children:
                  o.Z.Messages.HUB_WAITLIST_MODAL_JOINED_DESCRIPTION.format({
                    school: s,
                  }),
              }),
            }),
            (0, t.jsx)(i.Button, {
              look: i.Button.Looks.LINK,
              size: i.Button.Sizes.SMALL,
              color: i.Button.Colors.LINK,
              onClick: () => {
                a(r.tF.VERIFY_EMAIL);
              },
              className: c.__invalid_resendLink,
              children: o.Z.Messages.HUB_EMAIL_CONFIRMATION_DIFFERENT_EMAIL,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=d18ffbb2f2190de4fb0e.js.map
