"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35489"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    582712: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        }),
        n(47120);
      var a = n(200651),
        l = n(192379),
        i = n(286379),
        r = n(442837),
        s = n(481060),
        o = n(565138),
        u = n(797614),
        d = n(769654),
        c = n(695346),
        f = n(430824),
        g = n(88658),
        m = n(401416),
        h = n(920133),
        S = n(388032),
        D = n(517843),
        _ = n(444812);
      function x(e) {
        let { transitionState: t, guildId: x, onClose: I } = e,
          b = (0, r.e7)([f.Z], () => f.Z.getGuild(x));
        return (l.useEffect(() => {
          (0, m.Y)(x),
            (0, h.L)(h.Q.MODAL_VIEWED, x),
            u.Z.increment({ name: i.V.DM_SETTINGS_UPSELL_VIEW });
        }, [x]),
        null == b)
          ? null
          : (0, a.jsx)(s.ModalRoot, {
              transitionState: t,
              className: D.modal,
              children: (0, a.jsxs)("form", {
                onSubmit: (e) => {
                  e.preventDefault();
                  let t = new Set((0, g.YK)());
                  t.add(x),
                    c.h2
                      .updateSetting(Array.from(t))
                      .then(() =>
                        (0, s.showToast)(
                          (0, s.createToast)(
                            S.intl.string(S.t.rlYD1d),
                            s.ToastType.SUCCESS,
                          ),
                        ),
                      ),
                    I(),
                    (0, h.L)(h.Q.MODAL_DISABLED_DMS, x);
                },
                children: [
                  (0, a.jsx)("img", {
                    alt: "",
                    className: D.headerImage,
                    src: _,
                  }),
                  (0, a.jsxs)(s.ModalHeader, {
                    separator: !1,
                    className: D.header,
                    children: [
                      (0, a.jsx)(s.Heading, {
                        variant: "heading-lg/bold",
                        className: D.title,
                        children: S.intl.string(S.t.w2BvnJ),
                      }),
                      (0, a.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: D.body,
                        children: S.intl.format(S.t.Depjkp, {
                          guild_name: b.name,
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)(s.ModalContent, {
                    children: [
                      (0, a.jsx)(s.Text, {
                        variant: "eyebrow",
                        color: "header-secondary",
                        className: D.subtitle,
                        children: S.intl.string(S.t.KPB2i4),
                      }),
                      (0, a.jsx)("div", {
                        className: D.guildContainer,
                        children: (0, a.jsxs)("div", {
                          className: D.guildInfo,
                          children: [
                            (0, a.jsx)(o.Z, {
                              guild: b,
                              size: o.Z.Sizes.SMALL,
                            }),
                            (0, a.jsx)(s.Text, {
                              className: D.guildName,
                              variant: "text-md/semibold",
                              children: b.name,
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: D.content,
                        children: [
                          (0, a.jsx)(s.Button, {
                            className: D.button,
                            type: "submit",
                            color: s.Button.Colors.BRAND,
                            size: s.Button.Sizes.MEDIUM,
                            children: S.intl.string(S.t.TD7iU1),
                          }),
                          (0, a.jsx)(s.Button, {
                            className: D.button,
                            color: s.Button.Colors.PRIMARY,
                            onClick: () => {
                              I(), (0, h.L)(h.Q.MODAL_DISMISSED, x);
                            },
                            children: S.intl.string(S.t.PsWbcn),
                          }),
                          (0, a.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: D.footer,
                            children: S.intl.format(S.t.IzZxXV, {
                              onClick: () => {
                                I(),
                                  (0, d.X)(x),
                                  (0, s.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                      n.e("63288"),
                                      n.e("77298"),
                                      n.e("23357"),
                                      n.e("50506"),
                                      n.e("23755"),
                                      n.e("23217"),
                                      n.e("96211"),
                                      n.e("84605"),
                                      n.e("29549"),
                                      n.e("12013"),
                                      n.e("52249"),
                                      n.e("14627"),
                                      n.e("31605"),
                                      n.e("33053"),
                                      n.e("26182"),
                                      n.e("95900"),
                                      n.e("32776"),
                                      n.e("8016"),
                                      n.e("6380"),
                                      n.e("76540"),
                                      n.e("15669"),
                                      n.e("18543"),
                                      n.e("17938"),
                                      n.e("87624"),
                                      n.e("51269"),
                                      n.e("88449"),
                                      n.e("90508"),
                                      n.e("40216"),
                                      n.e("13351"),
                                      n.e("57674"),
                                      n.e("65840"),
                                      n.e("41309"),
                                      n.e("22646"),
                                      n.e("95393"),
                                      n.e("25183"),
                                      n.e("18101"),
                                      n.e("60365"),
                                      n.e("30419"),
                                      n.e("35886"),
                                      n.e("48923"),
                                      n.e("25788"),
                                      n.e("18824"),
                                      n.e("46097"),
                                      n.e("8739"),
                                      n.e("8821"),
                                      n.e("58059"),
                                      n.e("57772"),
                                      n.e("18895"),
                                      n.e("42587"),
                                      n.e("91304"),
                                      n.e("99393"),
                                      n.e("37229"),
                                      n.e("99008"),
                                      n.e("11388"),
                                      n.e("42471"),
                                      n.e("28044"),
                                      n.e("60178"),
                                      n.e("26069"),
                                      n.e("93936"),
                                      n.e("95863"),
                                    ]).then(n.bind(n, 241420));
                                    return (t) =>
                                      (0, a.jsx)(e, { ...t, guild: b });
                                  }),
                                  (0, h.L)(h.Q.MODAL_GUILD_SETTINGS_CLICKED, x);
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
    88658: function (e, t, n) {
      n.d(t, {
        $6: function () {
          return S;
        },
        YK: function () {
          return c;
        },
        _o: function () {
          return g;
        },
        ac: function () {
          return D;
        },
        bL: function () {
          return h;
        },
        g0: function () {
          return l;
        },
        gl: function () {
          return f;
        },
        rr: function () {
          return m;
        },
        xH: function () {
          return _;
        },
      });
      var a,
        l,
        i = n(695346),
        r = n(486472),
        s = n(430824);
      n(626135);
      var o = n(981631),
        u = n(388032);
      let d = 864e5 * o.eBq;
      function c() {
        let e = i.h2.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != s.Z.getGuild(e))),
          e
        );
      }
      function f() {
        let e = i.zA.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != s.Z.getGuild(e))),
          e
        );
      }
      function g() {
        let e = i.SE.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != s.Z.getGuild(e))),
          e
        );
      }
      function m() {
        let e = i.iH.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != s.Z.getGuild(e))),
          e
        );
      }
      function h(e) {
        return (e & o.HGf) === o.HGf
          ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
          : {
              all: !1,
              mutualFriends:
                (e & o.SOq.MUTUAL_FRIENDS) === o.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & o.SOq.MUTUAL_GUILDS) === o.SOq.MUTUAL_GUILDS,
            };
      }
      function S(e, t) {
        return (
          !t.verified ||
          (null != e && d > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((a = l || (l = {}))[(a.UNDECIDED = 0)] = "UNDECIDED"),
        (a[(a.OPTIN = 1)] = "OPTIN"),
        (a[(a.OPTOUT = 2)] = "OPTOUT");
      let D = { 0: void 0, 1: !0, 2: !1 };
      function _() {
        return [
          {
            name: u.intl.string(u.t["/yLMRU"]),
            desc: u.intl.string(u.t["3fzkPj"]),
            value: 1,
          },
          {
            name: u.intl.string(u.t["21fP2d"]),
            desc: u.intl.string(u.t.ggJ9jY),
            value: 2,
          },
          {
            name: u.intl.string(u.t["OWIo8/"]),
            desc: u.intl.string(u.t.HqYXp6),
            value: 0,
          },
        ];
      }
    },
    517843: function (e, t, n) {
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
//# sourceMappingURL=575a6a8c917a2f13c712.js.map
