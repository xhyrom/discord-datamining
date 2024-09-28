"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35489"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    582712: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return g;
          },
        }),
        a(47120);
      var n = a(735250),
        s = a(470079),
        l = a(286379),
        i = a(442837),
        r = a(481060),
        o = a(565138),
        u = a(797614),
        _ = a(769654),
        d = a(695346),
        S = a(430824),
        T = a(88658),
        c = a(401416),
        N = a(920133),
        E = a(689938),
        I = a(520182),
        f = a(444812);
      function g(e) {
        let { transitionState: t, guildId: g, onClose: m } = e,
          M = (0, i.e7)([S.Z], () => S.Z.getGuild(g));
        return (s.useEffect(() => {
          (0, c.Y)(g),
            (0, N.L)(N.Q.MODAL_VIEWED, g),
            u.Z.increment({ name: l.V.DM_SETTINGS_UPSELL_VIEW });
        }, [g]),
        null == M)
          ? null
          : (0, n.jsx)(r.ModalRoot, {
              transitionState: t,
              className: I.modal,
              children: (0, n.jsxs)("form", {
                onSubmit: (e) => {
                  e.preventDefault();
                  let t = new Set((0, T.YK)());
                  t.add(g),
                    d.h2
                      .updateSetting(Array.from(t))
                      .then(() =>
                        (0, r.showToast)(
                          (0, r.createToast)(
                            E.Z.Messages.DM_SETTINGS_UPSELL_SUCCESS_TOAST,
                            r.ToastType.SUCCESS,
                          ),
                        ),
                      ),
                    m(),
                    (0, N.L)(N.Q.MODAL_DISABLED_DMS, g);
                },
                children: [
                  (0, n.jsx)("img", {
                    alt: "",
                    className: I.headerImage,
                    src: f,
                  }),
                  (0, n.jsxs)(r.ModalHeader, {
                    separator: !1,
                    className: I.header,
                    children: [
                      (0, n.jsx)(r.Heading, {
                        variant: "heading-lg/bold",
                        className: I.title,
                        children: E.Z.Messages.DM_SETTINGS_UPSELL_TITLE,
                      }),
                      (0, n.jsx)(r.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: I.body,
                        children: E.Z.Messages.DM_SETTINGS_UPSELL_BODY.format({
                          guild_name: M.name,
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsxs)(r.ModalContent, {
                    children: [
                      (0, n.jsx)(r.Text, {
                        variant: "eyebrow",
                        color: "header-secondary",
                        className: I.subtitle,
                        children: E.Z.Messages.DM_SETTINGS_UPSELL_SUBTITLE,
                      }),
                      (0, n.jsx)("div", {
                        className: I.guildContainer,
                        children: (0, n.jsxs)("div", {
                          className: I.guildInfo,
                          children: [
                            (0, n.jsx)(o.Z, {
                              guild: M,
                              size: o.Z.Sizes.SMALL,
                            }),
                            (0, n.jsx)(r.Text, {
                              className: I.guildName,
                              variant: "text-md/semibold",
                              children: M.name,
                            }),
                          ],
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className: I.content,
                        children: [
                          (0, n.jsx)(r.Button, {
                            className: I.button,
                            type: "submit",
                            color: r.Button.Colors.BRAND,
                            size: r.Button.Sizes.MEDIUM,
                            children:
                              E.Z.Messages.DM_SETTINGS_UPSELL_YES_BUTTON,
                          }),
                          (0, n.jsx)(r.Button, {
                            className: I.button,
                            color: r.Button.Colors.PRIMARY,
                            onClick: () => {
                              m(), (0, N.L)(N.Q.MODAL_DISMISSED, g);
                            },
                            children: E.Z.Messages.DM_SETTINGS_UPSELL_NO_BUTTON,
                          }),
                          (0, n.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: I.footer,
                            children:
                              E.Z.Messages.DM_SETTINGS_UPSELL_FOOTER.format({
                                onClick: () => {
                                  m(),
                                    (0, _.X)(g),
                                    (0, r.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([
                                        a.e("96427"),
                                        a.e("50506"),
                                        a.e("89350"),
                                        a.e("33477"),
                                        a.e("84605"),
                                        a.e("52249"),
                                        a.e("54803"),
                                        a.e("15685"),
                                        a.e("72652"),
                                        a.e("32776"),
                                        a.e("79915"),
                                        a.e("33053"),
                                        a.e("8016"),
                                        a.e("37581"),
                                        a.e("68136"),
                                        a.e("65840"),
                                        a.e("13351"),
                                        a.e("76540"),
                                        a.e("18101"),
                                        a.e("87624"),
                                        a.e("22646"),
                                        a.e("25183"),
                                        a.e("5528"),
                                        a.e("18146"),
                                        a.e("57674"),
                                        a.e("30419"),
                                        a.e("48923"),
                                        a.e("18824"),
                                        a.e("37229"),
                                        a.e("52619"),
                                        a.e("64838"),
                                        a.e("18815"),
                                        a.e("28044"),
                                        a.e("20399"),
                                        a.e("67564"),
                                        a.e("74925"),
                                        a.e("24582"),
                                        a.e("2766"),
                                      ]).then(a.bind(a, 241420));
                                      return (t) =>
                                        (0, n.jsx)(e, { ...t, guild: M });
                                    }),
                                    (0, N.L)(
                                      N.Q.MODAL_GUILD_SETTINGS_CLICKED,
                                      g,
                                    );
                                },
                              }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
      }
    },
    88658: function (e, t, a) {
      a.d(t, {
        $6: function () {
          return E;
        },
        YK: function () {
          return d;
        },
        _o: function () {
          return T;
        },
        ac: function () {
          return I;
        },
        bL: function () {
          return N;
        },
        g0: function () {
          return s;
        },
        gl: function () {
          return S;
        },
        rr: function () {
          return c;
        },
        xH: function () {
          return f;
        },
      });
      var n,
        s,
        l = a(695346),
        i = a(486472),
        r = a(430824);
      a(626135);
      var o = a(981631),
        u = a(689938);
      let _ = 864e5 * o.eBq;
      function d() {
        let e = l.h2.getSetting();
        return (
          0 === i.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != r.Z.getGuild(e))),
          e
        );
      }
      function S() {
        let e = l.zA.getSetting();
        return (
          0 === i.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != r.Z.getGuild(e))),
          e
        );
      }
      function T() {
        let e = l.SE.getSetting();
        return (
          0 === i.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != r.Z.getGuild(e))),
          e
        );
      }
      function c() {
        let e = l.iH.getSetting();
        return (
          0 === i.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != r.Z.getGuild(e))),
          e
        );
      }
      function N(e) {
        return (e & o.HGf) === o.HGf
          ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
          : {
              all: !1,
              mutualFriends:
                (e & o.SOq.MUTUAL_FRIENDS) === o.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & o.SOq.MUTUAL_GUILDS) === o.SOq.MUTUAL_GUILDS,
            };
      }
      function E(e, t) {
        return (
          !t.verified ||
          (null != e && _ > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((n = s || (s = {}))[(n.UNDECIDED = 0)] = "UNDECIDED"),
        (n[(n.OPTIN = 1)] = "OPTIN"),
        (n[(n.OPTOUT = 2)] = "OPTOUT");
      let I = { 0: void 0, 1: !0, 2: !1 };
      function f() {
        return [
          {
            name: u.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
            desc: u.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
            value: 1,
          },
          {
            name: u.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
            desc: u.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
            value: 2,
          },
          {
            name: u.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
            desc: u.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
            value: 0,
          },
        ];
      }
    },
    520182: function (e, t, a) {
      e.exports = {
        modal: "modal_f52e1a",
        header: "header_f52e1a",
        headerImage: "headerImage_f52e1a",
        title: "title_f52e1a",
        body: "body_f52e1a",
        content: "content_f52e1a",
        footer: "footer_f52e1a",
        subtitle: "subtitle_f52e1a",
        guildContainer: "guildContainer_f52e1a",
        guildInfo: "guildInfo_f52e1a",
        guildName: "guildName_f52e1a",
        button: "button_f52e1a",
      };
    },
  },
]);
//# sourceMappingURL=6a755a1de291b5a71a95.js.map
