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
        });
      var a = n(200651),
        l = n(192379),
        i = n(286379),
        r = n(442837),
        o = n(481060),
        s = n(565138),
        u = n(797614),
        d = n(769654),
        c = n(695346),
        f = n(430824),
        m = n(88658),
        g = n(401416),
        S = n(920133),
        h = n(388032),
        D = n(215084),
        _ = n(444812);
      function x(e) {
        let { transitionState: t, guildId: x, onClose: I } = e,
          b = (0, r.e7)([f.Z], () => f.Z.getGuild(x));
        return (l.useEffect(() => {
          (0, g.Y)(x),
            (0, S.L)(S.Q.MODAL_VIEWED, x),
            u.Z.increment({ name: i.V.DM_SETTINGS_UPSELL_VIEW });
        }, [x]),
        null == b)
          ? null
          : (0, a.jsx)(o.ModalRoot, {
              transitionState: t,
              className: D.modal,
              children: (0, a.jsxs)("form", {
                onSubmit: (e) => {
                  e.preventDefault();
                  let t = (0, m.YK)();
                  t.add(x),
                    c.h2
                      .updateSetting(Array.from(t))
                      .then(() =>
                        (0, o.showToast)(
                          (0, o.createToast)(
                            h.intl.string(h.t.rlYD1d),
                            o.ToastType.SUCCESS,
                          ),
                        ),
                      ),
                    I(),
                    (0, S.L)(S.Q.MODAL_DISABLED_DMS, x);
                },
                children: [
                  (0, a.jsx)("img", {
                    alt: "",
                    className: D.headerImage,
                    src: _,
                  }),
                  (0, a.jsxs)(o.ModalHeader, {
                    separator: !1,
                    className: D.header,
                    children: [
                      (0, a.jsx)(o.Heading, {
                        variant: "heading-lg/bold",
                        className: D.title,
                        children: h.intl.string(h.t.w2BvnJ),
                      }),
                      (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: D.body,
                        children: h.intl.format(h.t.Depjkp, {
                          guild_name: b.name,
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)(o.ModalContent, {
                    children: [
                      (0, a.jsx)(o.Text, {
                        variant: "eyebrow",
                        color: "header-secondary",
                        className: D.subtitle,
                        children: h.intl.string(h.t.KPB2i4),
                      }),
                      (0, a.jsx)("div", {
                        className: D.guildContainer,
                        children: (0, a.jsxs)("div", {
                          className: D.guildInfo,
                          children: [
                            (0, a.jsx)(s.Z, {
                              guild: b,
                              size: s.Z.Sizes.SMALL,
                            }),
                            (0, a.jsx)(o.Text, {
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
                          (0, a.jsx)(o.Button, {
                            className: D.button,
                            type: "submit",
                            color: o.Button.Colors.BRAND,
                            size: o.Button.Sizes.MEDIUM,
                            children: h.intl.string(h.t.TD7iU1),
                          }),
                          (0, a.jsx)(o.Button, {
                            className: D.button,
                            color: o.Button.Colors.PRIMARY,
                            onClick: () => {
                              I(), (0, S.L)(S.Q.MODAL_DISMISSED, x);
                            },
                            children: h.intl.string(h.t.PsWbcn),
                          }),
                          (0, a.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: D.footer,
                            children: h.intl.format(h.t.IzZxXV, {
                              onClick: () => {
                                I(),
                                  (0, d.X)(x),
                                  (0, o.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                      n.e("77298"),
                                      n.e("23357"),
                                      n.e("50506"),
                                      n.e("96211"),
                                      n.e("23217"),
                                      n.e("84605"),
                                      n.e("12013"),
                                      n.e("73503"),
                                      n.e("52249"),
                                      n.e("68956"),
                                      n.e("6380"),
                                      n.e("72181"),
                                      n.e("8016"),
                                      n.e("56630"),
                                      n.e("26182"),
                                      n.e("95900"),
                                      n.e("51269"),
                                      n.e("32776"),
                                      n.e("66711"),
                                      n.e("90508"),
                                      n.e("13351"),
                                      n.e("86282"),
                                      n.e("65840"),
                                      n.e("21628"),
                                      n.e("18543"),
                                      n.e("17938"),
                                      n.e("87624"),
                                      n.e("74421"),
                                      n.e("18101"),
                                      n.e("24207"),
                                      n.e("46097"),
                                      n.e("76540"),
                                      n.e("8739"),
                                      n.e("58059"),
                                      n.e("18895"),
                                      n.e("68445"),
                                      n.e("24391"),
                                      n.e("57674"),
                                      n.e("99393"),
                                      n.e("99008"),
                                      n.e("37229"),
                                      n.e("22646"),
                                      n.e("95393"),
                                      n.e("57661"),
                                      n.e("3940"),
                                      n.e("80284"),
                                      n.e("25183"),
                                      n.e("27289"),
                                      n.e("48923"),
                                      n.e("20561"),
                                      n.e("30419"),
                                      n.e("69174"),
                                      n.e("8821"),
                                      n.e("18824"),
                                      n.e("84308"),
                                      n.e("18076"),
                                    ]).then(n.bind(n, 241420));
                                    return (t) =>
                                      (0, a.jsx)(e, { ...t, guild: b });
                                  }),
                                  (0, S.L)(S.Q.MODAL_GUILD_SETTINGS_CLICKED, x);
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
          return d;
        },
        _o: function () {
          return f;
        },
        bL: function () {
          return g;
        },
        gl: function () {
          return c;
        },
        rr: function () {
          return m;
        },
      }),
        n(47120);
      var a,
        l,
        i = n(695346),
        r = n(486472),
        o = n(430824);
      n(626135);
      var s = n(981631);
      n(388032);
      let u = 864e5 * s.eBq;
      function d() {
        let e = i.h2.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          new Set(e)
        );
      }
      function c() {
        let e = i.zA.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          new Set(e)
        );
      }
      function f() {
        let e = i.SE.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          new Set(e)
        );
      }
      function m() {
        let e = i.iH.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          new Set(e)
        );
      }
      function g(e) {
        return (e & s.HGf) === s.HGf
          ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
          : {
              all: !1,
              mutualFriends:
                (e & s.SOq.MUTUAL_FRIENDS) === s.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & s.SOq.MUTUAL_GUILDS) === s.SOq.MUTUAL_GUILDS,
            };
      }
      function S(e, t) {
        return (
          !!(!t.verified || t.isStaff()) ||
          (null != e && u > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((l = a || (a = {}))[(l.UNDECIDED = 0)] = "UNDECIDED"),
        (l[(l.OPTIN = 1)] = "OPTIN"),
        (l[(l.OPTOUT = 2)] = "OPTOUT");
    },
    215084: function (e, t, n) {
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
//# sourceMappingURL=344bf6e762b8bae63330.js.map
