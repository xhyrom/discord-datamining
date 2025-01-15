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
    951716: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(344532),
        s = n(23434);
      function l() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : i.Z,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Z;
        return null != t.getAction() || Object.keys(e.getState()).length > 0;
      }
    },
    645792: function (e, t, n) {
      n.d(t, {
        b: function () {
          return s;
        },
      });
      let i = (0, n(818083).B)({
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
      function s() {
        return i.getCurrentConfig(
          { location: "68acbb_1" },
          { autoTrackExposure: !1 },
        ).enabled;
      }
      t.Z = i;
    },
    495784: function (e, t, n) {
      var i = n(913527),
        s = n.n(i),
        l = n(704215),
        a = n(951716),
        r = n(605236),
        o = n(972830),
        c = n(430824),
        d = n(594174),
        u = n(374023),
        m = n(709054),
        x = n(645792),
        h = n(981631),
        g = n(921944);
      t.Z = {
        init(e) {
          let { hasModalOpen: t, openModal: n } = e;
          if (!u.s.isDisallowPopupsSet())
            (0, o.h)(() => {
              if ((0, a.Z)()) return;
              let e = d.default.getCurrentUser(),
                i =
                  null != e &&
                  7 > s()().diff(s()(m.default.extractTimestamp(e.id)), "days"),
                o =
                  null !=
                  Object.values(c.Z.getGuilds()).find((e) =>
                    e.hasFeature(h.oNc.HUB),
                  ),
                u = !(0, r.un)(l.z.HUB_BACK_TO_SCHOOL_UPSELL);
              !(i || t() || o || !u) &&
                (0, x.b)() &&
                (x.Z.trackExposure({ location: "8b792a_1" }),
                n(),
                (0, r.kk)(l.z.HUB_BACK_TO_SCHOOL_UPSELL));
            });
        },
        hideHubUpsell() {
          (0, r.EW)(l.z.HUB_BACK_TO_SCHOOL_UPSELL, { dismissAction: g.L.AUTO });
        },
      };
    },
    994640: function (e, t, n) {
      n(47120);
      var i = n(200651),
        s = n(192379),
        l = n(120356),
        a = n.n(l),
        r = n(481060),
        o = n(231239),
        c = n(881052),
        d = n(313201),
        u = n(592125),
        m = n(888592),
        x = n(981631),
        h = n(388032),
        g = n(11682);
      let v = (0, d.hQ)();
      t.Z = (e) => {
        let {
            setStep: t,
            setGuildsInfo: n,
            email: l,
            setEmail: d,
            setGuildId: N,
            invite: j,
            onClose: f,
            isNUXFlow: C,
          } = e,
          [I, p] = s.useState(null),
          [S, T] = s.useState(!1),
          b = async (e) => {
            e.preventDefault(), p(null), T(!0);
            try {
              var i, s, a, r, d;
              let e =
                null !==
                  (d =
                    null !==
                      (r =
                        null == j
                          ? void 0
                          : null === (i = j.guild) || void 0 === i
                            ? void 0
                            : i.id) && void 0 !== r
                      ? r
                      : null ===
                            (s = u.Z.getChannel(
                              null == j
                                ? void 0
                                : null === (a = j.channel) || void 0 === a
                                  ? void 0
                                  : a.id,
                            )) || void 0 === s
                        ? void 0
                        : s.getGuildId()) && void 0 !== d
                  ? d
                  : void 0;
              e === m.fQ && (e = void 0);
              let c = await o.Z.sendVerificationEmail(l, !0, e),
                x = c.guilds_info;
              c.has_matching_guild
                ? (N(e), t(m.tF.VERIFY_PIN))
                : 0 === x.length
                  ? t(m.tF.SUBMIT_SCHOOL)
                  : 1 === x.length
                    ? (N(x[0].id),
                      await o.Z.sendVerificationEmail(l, !0, x[0].id),
                      t(m.tF.VERIFY_PIN))
                    : (n(x), t(m.tF.SELECT_SCHOOL));
            } catch (e) {
              p(new c.Hx(e));
            } finally {
              T(!1);
            }
          },
          _ = h.intl.string(h.t.H1jCHB),
          E = h.intl.string(h.t.YfeHRE);
        if (C) (_ = h.intl.string(h.t.LVyxND)), (E = h.intl.string(h.t.ECd7Rk));
        else if (
          (null == j ? void 0 : j.guild) != null &&
          j.guild.id !== m.fQ &&
          (null == j ? void 0 : j.approximate_member_count) != null
        ) {
          let { name: e } = j.guild;
          _ = h.intl.formatToPlainString(h.t["4T4+p6"], {
            guildName: e,
            count: j.approximate_member_count,
          });
        }
        return (0, i.jsxs)("div", {
          className: g.container,
          children: [
            (0, i.jsx)("div", { className: g.topImage }),
            (0, i.jsx)(r.Heading, {
              className: a()(g.centerText, g.header),
              variant: "heading-xl/semibold",
              children: _,
            }),
            (0, i.jsx)("div", {
              className: g.descriptionWidth,
              children: (0, i.jsx)(r.Text, {
                className: g.centerText,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: E,
              }),
            }),
            (0, i.jsxs)("form", {
              className: g.formContent,
              onSubmit: b,
              children: [
                (0, i.jsxs)(r.FormItem, {
                  children: [
                    (0, i.jsx)(r.FormTitle, {
                      id: v,
                      children: h.intl.string(h.t.kmCxkZ),
                    }),
                    (0, i.jsx)(r.TextInput, {
                      placeholder: h.intl.string(h.t.ImAOh4),
                      onChange: (e) => {
                        d(e);
                      },
                      error: null == I ? void 0 : I.getAnyErrorMessage(),
                      "aria-labelledby": v,
                    }),
                  ],
                }),
                (0, i.jsx)(r.Text, {
                  color: "header-secondary",
                  className: g.formDescription,
                  variant: "text-sm/normal",
                  children: h.intl.string(h.t.Cv7mmJ),
                }),
                (0, i.jsx)(r.Button, {
                  type: "submit",
                  size: r.Button.Sizes.LARGE,
                  color: r.Button.Colors.BRAND,
                  className: g.submitButton,
                  submitting: S,
                  children: h.intl.string(h.t["8vmKOz"]),
                }),
                (0, i.jsx)(r.Text, {
                  className: g.termsPhrase,
                  color: "header-secondary",
                  variant: "text-xs/normal",
                  children: h.intl.format(h.t.RPT0vr, {
                    termsURL: x.EYA.TERMS,
                    privacyURL: x.EYA.PRIVACY,
                  }),
                }),
                C &&
                  (0, i.jsx)(r.Button, {
                    look: r.Button.Looks.LINK,
                    onClick: f,
                    className: g.cancelButton,
                    children: h.intl.string(h.t.hO6qJy),
                  }),
              ],
            }),
          ],
        });
      };
    },
    950012: function (e, t, n) {
      n(47120);
      var i = n(200651),
        s = n(192379),
        l = n(994640),
        a = n(247007),
        r = n(999464),
        o = n(503406),
        c = n(463115),
        d = n(888592);
      t.Z = (e) => {
        let {
            onClose: t,
            invite: n,
            forceGuildScrollHeight: u = !0,
            isNUXFlow: m,
          } = e,
          [x, h] = s.useState([d.tF.VERIFY_EMAIL]),
          [g, v] = s.useState(""),
          [N, j] = s.useState(""),
          [f, C] = s.useState(void 0),
          [I, p] = s.useState([]),
          S = (e) => {
            h(x.concat(e).slice(-4));
          };
        switch (x[x.length - 1]) {
          case d.tF.VERIFY_EMAIL:
            return (0, i.jsx)(l.Z, {
              setGuildsInfo: p,
              setStep: S,
              email: g,
              setEmail: v,
              setGuildId: C,
              invite: n,
              onClose: t,
              isNUXFlow: m,
            });
          case d.tF.SELECT_SCHOOL:
            return (0, i.jsx)(a.Z, {
              guildsInfo: I,
              setStep: S,
              email: g,
              setGuildId: C,
              forceGuildScrollHeight: u,
            });
          case d.tF.SUBMIT_SCHOOL:
            return (0, i.jsx)(r.Z, {
              onBack: () => {
                x.length > 1 && h(x.slice(0, -1).slice(-4));
              },
              setStep: S,
              email: g,
              school: N,
              setSchool: j,
            });
          case d.tF.VERIFY_PIN:
            return (0, i.jsx)(o.Z, { email: g, onClose: t, guildId: f });
          case d.tF.EMAIL_WAITLIST:
            return (0, i.jsx)(c.Z, { setStep: S, school: N });
          default:
            return null;
        }
      };
    },
    247007: function (e, t, n) {
      n(47120);
      var i = n(200651),
        s = n(192379),
        l = n(120356),
        a = n.n(l),
        r = n(658722),
        o = n.n(r),
        c = n(481060),
        d = n(231239),
        u = n(881052),
        m = n(686546),
        x = n(565138),
        h = n(601964),
        g = n(768581),
        v = n(888592),
        N = n(388032),
        j = n(628686),
        f = n(216019);
      function C(e) {
        var t;
        let { guildInfo: n, onClick: s, submitting: l } = e,
          a =
            null !==
              (t = g.ZP.getGuildIconURL({
                id: n.id,
                icon: n.icon,
                size: 40,
              })) && void 0 !== t
              ? t
              : void 0;
        return (0, i.jsxs)(c.Clickable, {
          className: j.clickableGuildInfoRow,
          onClick: s,
          children: [
            (0, i.jsx)(m.ZP, {
              mask: m.ZP.Masks.AVATAR_DEFAULT,
              width: 40,
              height: 40,
              children: (0, i.jsx)(x.Z, {
                className: j.guildIcon,
                iconSrc: a,
                guild: new h.ZP(n),
                size: x.Z.Sizes.MEDIUM,
              }),
            }),
            (0, i.jsx)(c.Text, {
              className: j.guildName,
              variant: "text-md/semibold",
              children: n.name,
            }),
            l
              ? (0, i.jsx)(c.Spinner, { type: c.Spinner.Type.PULSING_ELLIPSIS })
              : (0, i.jsx)("img", {
                  className: j.__invalid_arrow,
                  alt: "",
                  src: f,
                }),
          ],
        });
      }
      t.Z = (e) => {
        let {
            setStep: t,
            email: n,
            guildsInfo: l,
            setGuildId: r,
            forceGuildScrollHeight: m,
          } = e,
          [x, h] = s.useState(null),
          [g, f] = s.useState(void 0),
          [I, p] = s.useState(null),
          S = (e) => async () => {
            h(null), r(e), p(e);
            try {
              await d.Z.sendVerificationEmail(n, !0, e), t(v.tF.VERIFY_PIN);
            } catch (e) {
              h(new u.Hx(e));
            } finally {
              p(null);
            }
          },
          T = () => t(v.tF.SUBMIT_SCHOOL),
          b = l;
        return (
          null != g &&
            "" !== g &&
            (b = l.filter((e) => o()(g.toLowerCase(), e.name.toLowerCase()))),
          (0, i.jsxs)("div", {
            className: j.container,
            children: [
              (0, i.jsx)(c.Heading, {
                className: a()(j.centerText, j.header),
                variant: "heading-xl/semibold",
                children: N.intl.string(N.t.mOMeiY),
              }),
              (0, i.jsx)("div", {
                className: j.description,
                children: (0, i.jsx)(c.Text, {
                  className: j.centerText,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: N.intl.format(N.t.dZeiTE, { onJoinWaitlist: T }),
                }),
              }),
              (0, i.jsxs)("div", {
                className: a()(j.guildList, { [j.forcedHeight]: m }),
                children: [
                  (0, i.jsxs)("div", {
                    className: j.searchContainer,
                    children: [
                      (0, i.jsx)(c.SearchBox, {
                        placeholder: N.intl.string(N.t["5h0QOD"]),
                        className: j.searchBox,
                        inputClassName: j.searchBoxInput,
                        searchIconClassName: j.searchBoxIcon,
                        closeIconClassName: j.searchBoxIcon,
                        onChange: (e) => {
                          f(e);
                        },
                        label: N.intl.string(N.t["5h0QOD"]),
                        searchTerm: g,
                        onClear: () => {
                          f(void 0);
                        },
                      }),
                      (0, i.jsx)(c.Text, {
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: null == x ? void 0 : x.getAnyErrorMessage(),
                      }),
                    ],
                  }),
                  b.length > 0
                    ? (0, i.jsx)(c.ScrollerThin, {
                        className: j.scroller,
                        children: b.map((e) =>
                          void 0 === e
                            ? null
                            : (0, i.jsx)(
                                C,
                                {
                                  guildInfo: e,
                                  onClick: S(e.id),
                                  submitting: I === e.id,
                                },
                                e.id,
                              ),
                        ),
                      })
                    : (0, i.jsx)("div", {
                        className: j.noResultsContainer,
                        children: (0, i.jsxs)("div", {
                          className: j.noResultsContent,
                          children: [
                            (0, i.jsx)("div", { className: j.noResultsImage }),
                            (0, i.jsx)(c.Heading, {
                              className: a()(j.centerText, j.header),
                              variant: "heading-xl/semibold",
                              children: N.intl.string(N.t["1eUrDQ"]),
                            }),
                            (0, i.jsx)(c.Text, {
                              className: j.centerText,
                              variant: "text-md/normal",
                              children: N.intl.format(N.t.flgDKC, {
                                onJoinWaitlist: T,
                              }),
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
    650233: function (e, t, n) {
      n.r(t),
        n.d(t, {
          HubEmailConnectionModalView: function () {
            return g;
          },
          default: function () {
            return h;
          },
        });
      var i = n(200651),
        s = n(192379),
        l = n(990547),
        a = n(481060),
        r = n(390885),
        o = n(495784),
        c = n(950012),
        d = n(161836),
        u = n(630724),
        m = n(388032),
        x = n(168844);
      function h(e) {
        let { transitionState: t, onClose: n, isNUXFlow: h } = e;
        return (
          s.useEffect(() => {
            o.Z.hideHubUpsell(),
              h && r.Z.flowStep(u.MK.ORGANIC, u.EW.HUB_CONNECTION);
          }, [h]),
          (0, i.jsx)(a.ModalRoot, {
            className: x.modalRoot,
            transitionState: t,
            "aria-label": m.intl.string(m.t["3khS8P"]),
            impression: { impressionName: l.ImpressionNames.HUB_EMAIL_SIGNUP },
            children: (0, i.jsx)(a.ModalContent, {
              style: { overflow: "hidden", paddingRight: "0px" },
              paddingFix: !1,
              className: x.modalContent,
              children: (0, i.jsxs)("div", {
                className: x.container,
                children: [
                  (0, i.jsx)("div", {
                    className: x.sidebarContainer,
                    children: (0, i.jsx)(d.Z, {}),
                  }),
                  (0, i.jsxs)("div", {
                    className: x.contentContainer,
                    children: [
                      (0, i.jsx)(a.ModalCloseButton, {
                        onClick: n,
                        className: x.closeButton,
                      }),
                      (0, i.jsx)(c.Z, { isNUXFlow: h, onClose: n }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      let g = (e) => {
        let { invite: t } = e;
        return (0, i.jsxs)("div", {
          className: x.container,
          children: [
            (0, i.jsx)("div", {
              className: x.sidebarContainer,
              children: (0, i.jsx)(d.Z, {}),
            }),
            (0, i.jsx)("div", {
              className: x.contentContainer,
              children: (0, i.jsx)(c.Z, { invite: t }),
            }),
          ],
        });
      };
    },
    161836: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var s = n(481060),
        l = n(388032),
        a = n(220597);
      t.Z = () =>
        (0, i.jsxs)("div", {
          className: a.container,
          children: [
            (0, i.jsx)("div", {
              className: a.iconContainer,
              children: (0, i.jsx)("div", { className: a.icon }),
            }),
            (0, i.jsx)(s.Text, {
              color: "header-primary",
              variant: "text-lg/semibold",
              className: a.header,
              children: l.intl.string(l.t.PAnzbW),
            }),
            (0, i.jsx)(s.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              className: a.description,
              children: l.intl.format(l.t["8Kp48/"], {}),
            }),
          ],
        });
    },
    999464: function (e, t, n) {
      n(47120);
      var i = n(200651),
        s = n(192379),
        l = n(120356),
        a = n.n(l),
        r = n(481060),
        o = n(231239),
        c = n(881052),
        d = n(313201),
        u = n(888592),
        m = n(981631),
        x = n(388032),
        h = n(122801);
      let g = (0, d.hQ)();
      t.Z = (e) => {
        let { email: t, setStep: n, onBack: l, school: d, setSchool: v } = e,
          [N, j] = s.useState(null),
          [f, C] = s.useState(!1),
          I = async () => {
            j(null), C(!0);
            try {
              await o.Z.signup(t, d), n(u.tF.EMAIL_WAITLIST);
            } catch (e) {
              j(new c.Hx(e));
            } finally {
              C(!1);
            }
          },
          p = async (e) => {
            null != d && "" !== d && e.charCode === m.yXg.ENTER && (await I());
          };
        return (0, i.jsxs)("div", {
          className: h.container,
          children: [
            (0, i.jsx)("div", { className: h.__invalid_topImage }),
            (0, i.jsx)(r.Heading, {
              className: a()(h.centerText, h.header),
              variant: "heading-xl/semibold",
              children: x.intl.string(x.t["2FNWBA"]),
            }),
            (0, i.jsx)("div", {
              className: h.descriptionWidth,
              children: (0, i.jsx)(r.Text, {
                className: h.centerText,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: x.intl.string(x.t["/4y6o6"]),
              }),
            }),
            (0, i.jsxs)(r.FormItem, {
              className: h.formItem,
              children: [
                (0, i.jsx)(r.FormTitle, {
                  id: g,
                  children: x.intl.string(x.t["L+AfJi"]),
                }),
                (0, i.jsx)(r.TextInput, {
                  onKeyPress: p,
                  placeholder: x.intl.string(x.t.Y1btJS),
                  onChange: (e) => {
                    v(e);
                  },
                  error: null == N ? void 0 : N.getAnyErrorMessage(),
                  "aria-labelledby": g,
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: h.footer,
              children: [
                (0, i.jsx)(r.Button, {
                  className: h.backButton,
                  onClick: l,
                  look: r.Button.Looks.LINK,
                  size: r.Button.Sizes.NONE,
                  color: r.Button.Colors.PRIMARY,
                  children: x.intl.string(x.t["13/7kZ"]),
                }),
                (0, i.jsx)(r.Button, {
                  onClick: I,
                  size: r.Button.Sizes.MEDIUM,
                  color: r.Button.Colors.BRAND,
                  className: h.__invalid_submitButton,
                  submitting: f,
                  children: x.intl.string(x.t.PDsYAg),
                }),
              ],
            }),
          ],
        });
      };
    },
    503406: function (e, t, n) {
      n(47120);
      var i = n(200651),
        s = n(192379),
        l = n(120356),
        a = n.n(l),
        r = n(392711),
        o = n.n(r),
        c = n(481060),
        d = n(231239),
        u = n(881052),
        m = n(313201),
        x = n(703656),
        h = n(981631),
        g = n(388032),
        v = n(969779);
      let N = (0, m.hQ)();
      t.Z = (e) => {
        let { email: t, guildId: n, onClose: l } = e,
          [r, m] = s.useState(""),
          [j, f] = s.useState(null),
          C = s.useCallback(async () => {
            if (null != n)
              try {
                let e = await d.Z.verifyCode(r, n, t);
                e.guild &&
                  (null == l || l(), (0, x.uL)(h.Z5c.CHANNEL(e.guild.id)));
              } catch (e) {
                f(new u.Hx(e));
              }
          }, [r, t, n, l]),
          I = o().throttle(() => {
            d.Z.sendVerificationEmail(t, !0, n);
          }, 1e3),
          p = async (e) => {
            null != r && "" !== r && e.charCode === h.yXg.ENTER && (await C());
          };
        return (0, i.jsxs)("div", {
          className: v.container,
          children: [
            (0, i.jsx)("div", { className: v.topImage }),
            (0, i.jsx)(c.Heading, {
              className: a()(v.centerText, v.header),
              variant: "heading-xl/semibold",
              children: g.intl.string(g.t.SJ3Lxc),
            }),
            (0, i.jsx)("div", {
              className: v.descriptionWidth,
              children: (0, i.jsx)(c.Text, {
                className: v.centerText,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: g.intl.format(g.t["b+W0oq"], {
                  email: t,
                  onClick: I,
                }),
              }),
            }),
            (0, i.jsxs)(c.FormItem, {
              className: v.formItem,
              children: [
                (0, i.jsx)(c.FormTitle, {
                  id: N,
                  children: g.intl.string(g.t.rpWT1t),
                }),
                (0, i.jsx)(c.TextInput, {
                  onKeyPress: p,
                  onChange: (e) => {
                    null != e && "" !== e && m(e);
                  },
                  error: null == j ? void 0 : j.getAnyErrorMessage(),
                  "aria-labelledby": N,
                }),
              ],
            }),
            (0, i.jsx)(c.Button, {
              fullWidth: !0,
              onClick: C,
              size: c.Button.Sizes.LARGE,
              color: c.Button.Colors.BRAND,
              children: (0, i.jsx)(c.Text, {
                className: v.submitText,
                variant: "text-sm/normal",
                children: g.intl.string(g.t.geKm7u),
              }),
            }),
          ],
        });
      };
    },
    463115: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var s = n(120356),
        l = n.n(s),
        a = n(481060),
        r = n(888592),
        o = n(388032),
        c = n(11682);
      t.Z = (e) => {
        let { school: t, setStep: n } = e;
        return (0, i.jsxs)("div", {
          className: c.container,
          children: [
            (0, i.jsx)("div", { className: c.topImage }),
            (0, i.jsx)(a.Heading, {
              className: l()(c.centerText, c.header),
              variant: "heading-xl/semibold",
              children: o.intl.string(o.t.OaloU1),
            }),
            (0, i.jsx)("div", {
              className: c.descriptionWidth,
              children: (0, i.jsx)(a.Text, {
                className: c.centerText,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: o.intl.format(o.t.Rs7MXF, { school: t }),
              }),
            }),
            (0, i.jsx)(a.Button, {
              look: a.Button.Looks.LINK,
              size: a.Button.Sizes.SMALL,
              color: a.Button.Colors.LINK,
              onClick: () => {
                n(r.tF.VERIFY_EMAIL);
              },
              className: c.__invalid_resendLink,
              children: o.intl.string(o.t.Zg63h4),
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=da3ddf557d21c1e034dc.js.map
