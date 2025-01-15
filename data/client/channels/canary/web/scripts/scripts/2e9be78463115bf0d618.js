"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8653"],
  {
    591876: function (e) {
      e.exports = "/assets/c54c91ba13d39fe38d6f.svg";
    },
    689963: function (e) {
      e.exports = "/assets/a9a68ec0f731c3646899.svg";
    },
    700582: function (e, t, a) {
      var r = a(200651),
        n = a(192379),
        i = a(481060),
        s = a(372900);
      t.Z = n.memo(function (e) {
        var t, a, o, l;
        let {
            user: c,
            size: d = i.AvatarSizes.SIZE_32,
            animate: u = !1,
            "aria-hidden": m = !1,
            ...f
          } = e,
          x = n.useContext(s.Z);
        return (0, r.jsx)(i.Avatar, {
          src:
            ((t = c),
            (a = (0, i.getAvatarSize)(d)),
            (o = u),
            (l = x),
            t.getAvatarURL(l, a, o)),
          size: d,
          "aria-label": m ? void 0 : c.username,
          "aria-hidden": m,
          ...f,
        });
      });
    },
    928090: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return I;
          },
        }),
        a(47120);
      var r = a(200651),
        n = a(192379),
        i = a(990547),
        s = a(481060),
        o = a(37234),
        l = a(700582),
        c = a(213609),
        d = a(600164),
        u = a(434404),
        m = a(706454),
        f = a(768581),
        x = a(5192),
        T = a(51144),
        h = a(981631),
        p = a(72766),
        N = a(388032),
        _ = a(865088);
      let E = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : m.default.locale;
        return "https://"
          .concat(h.xr4, "/hc/")
          .concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000168511");
      };
      function I(e) {
        let {
            guild: t,
            toUser: m,
            fromUser: I,
            onClose: A,
            transitionState: R,
          } = e,
          [b, S] = n.useState(!1),
          v = t.hasFeature(h.oNc.VERIFIED) || t.hasFeature(h.oNc.PARTNERED),
          g = v ? N.intl.string(N.t.wDkfrK) : null,
          j = v ? N.intl.format(N.t.A37vwM, { ticketUrl: E() }) : null,
          C =
            t.hasFeature(h.oNc.CREATOR_MONETIZABLE) ||
            t.hasFeature(h.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
        async function F(e) {
          await u.Z.transferOwnership(t.id, m.id, p.X.EMAIL, e);
        }
        async function O() {
          await u.Z.sendTransferOwnershipPincode(t.id, !0);
        }
        async function Z(e) {
          e.preventDefault(), A();
          try {
            I.mfaEnabled || null == I.email
              ? (await u.Z.transferOwnership(
                  t.id,
                  m.id,
                  I.mfaEnabled ? p.X.MFA : null,
                ),
                (0, o.xf)())
              : (await u.Z.sendTransferOwnershipPincode(t.id),
                (0, s.openModalLazy)(async () => {
                  let { default: e } = await a
                    .e("94566")
                    .then(a.bind(a, 965072));
                  return (t) =>
                    (0, r.jsx)(e, {
                      ...t,
                      onFormSubmit: F,
                      onResend: O,
                      onSuccess: o.xf,
                      headerText: N.intl.string(N.t.Z5s7PD),
                      confirmButtonText: N.intl.string(N.t.Z5s7PD),
                      confirmButtonColor: s.Button.Colors.RED,
                      impressionName:
                        i.ImpressionNames
                          .GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE,
                    });
                }));
          } catch (e) {
            e.body.code ===
              h.evJ.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION &&
              (0, s.openModal)((e) =>
                (0, r.jsx)(s.ConfirmModal, {
                  ...e,
                  header: N.intl.string(N.t["m+nQlp"]),
                  confirmText: N.intl.string(N.t["NX+WJC"]),
                  confirmButtonColor: s.Button.Colors.BRAND,
                  children: (0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: N.intl.format(N.t.wG747e, {
                      server_subscription_owner_transfer_article: h.T23,
                    }),
                  }),
                }),
              );
          }
        }
        (0, c.Z)({
          type: i.ImpressionTypes.MODAL,
          name: i.ImpressionNames.GUILD_TRANSFER_OWNERSHIP,
        });
        let k = x.ZP.getNickname(t.id, void 0, m),
          L = m.hasAvatarForGuild(t.id),
          M = () =>
            (0, r.jsxs)("span", {
              className: _.guildTransfer,
              children: [
                null != t.icon
                  ? (0, r.jsx)(s.Avatar, {
                      src: f.ZP.getGuildIconURL({
                        id: t.id,
                        icon: t.icon,
                        size: 16,
                      }),
                      size: s.AvatarSizes.SIZE_16,
                      className: _.miniGuildIcon,
                      "aria-hidden": !0,
                    })
                  : null,
                (0, r.jsx)(s.Text, {
                  className: _.guildName,
                  variant: "text-sm/bold",
                  children: t.toString(),
                }),
              ],
            });
        return (0, r.jsx)(s.ModalRoot, {
          transitionState: R,
          children: (0, r.jsxs)("form", {
            onSubmit: Z,
            children: [
              (0, r.jsx)(s.ModalHeader, {
                separator: !1,
                children: (0, r.jsx)(s.Heading, {
                  variant: "heading-lg/semibold",
                  className: _.header,
                  children: N.intl.string(N.t.Z5s7PD),
                }),
              }),
              (0, r.jsxs)(s.ModalContent, {
                children: [
                  (0, r.jsx)(s.FormText, {
                    type: s.FormText.Types.DESCRIPTION,
                    className: _.subHeader,
                    children:
                      null != k || L
                        ? N.intl.format(N.t.E90vgo, {
                            GuildHook: M,
                            user: (0, T.W5)(m),
                            AKAHook: function () {
                              return (0, r.jsxs)("span", {
                                className: _.akaTransfer,
                                children: [
                                  (0, r.jsx)(s.TextBadge, {
                                    text: N.intl.string(N.t.l1QVfn),
                                    disableColor: !0,
                                    className: _.akaBadge,
                                  }),
                                  L
                                    ? (0, r.jsx)(s.Avatar, {
                                        src: m.getAvatarURL(t.id, 16, !0),
                                        size: s.AvatarSizes.SIZE_16,
                                        className: _.miniAvatar,
                                        "aria-hidden": !0,
                                      })
                                    : null,
                                  (0, r.jsx)(s.Text, {
                                    className: _.nickname,
                                    variant: "text-sm/normal",
                                    children: null != k ? k : T.ZP.getName(m),
                                  }),
                                ],
                              });
                            },
                          })
                        : N.intl.format(N.t["2XLnGx"], {
                            GuildHook: M,
                            user: (0, T.W5)(m),
                          }),
                  }),
                  (0, r.jsxs)(d.Z, {
                    className: _.fromToWrapper,
                    justify: d.Z.Justify.CENTER,
                    children: [
                      (0, r.jsx)("div", {
                        className: _.from,
                        children: (0, r.jsx)(l.Z, {
                          user: I,
                          size: s.AvatarSizes.SIZE_80,
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: _.to,
                        children: (0, r.jsx)(l.Z, {
                          user: m,
                          size: s.AvatarSizes.SIZE_80,
                        }),
                      }),
                    ],
                  }),
                  C &&
                    (0, r.jsx)(s.FormText, {
                      type: s.FormText.Types.DESCRIPTION,
                      className: _.roleSubscriptionText,
                      children: N.intl.format(N.t.LAlucX, {
                        server_subscription_owner_transfer_article: h.T23,
                      }),
                    }),
                  (0, r.jsx)(s.FormSwitch, {
                    disabled: v,
                    tooltipNote: g,
                    hideBorder: !0,
                    value: b,
                    onChange: function (e) {
                      S(e);
                    },
                    children: (0, r.jsx)(s.FormText, {
                      type: s.FormText.Types.DESCRIPTION,
                      children: N.intl.format(N.t.xm6ACA, {
                        username: (0, T.W5)(m),
                      }),
                    }),
                  }),
                  (0, r.jsx)(s.FormText, {
                    className: _.protectedText,
                    type: s.FormText.Types.DEFAULT,
                    children: j,
                  }),
                ],
              }),
              (0, r.jsxs)(s.ModalFooter, {
                children: [
                  (0, r.jsx)(s.Button, {
                    type: "submit",
                    disabled: !b,
                    color: s.Button.Colors.RED,
                    children: N.intl.string(N.t.Z5s7PD),
                  }),
                  (0, r.jsx)(s.Button, {
                    look: s.Button.Looks.LINK,
                    color: s.Button.Colors.PRIMARY,
                    onClick: A,
                    children: N.intl.string(N.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    72766: function (e, t, a) {
      var r, n, i, s;
      a.d(t, {
        X: function () {
          return n;
        },
      }),
        ((i = r || (r = {})).TRANFSER_OWNERSHIP = "TRANFSER_OWNERSHIP"),
        (i.CONFIRM_EMAIL_CODE = "CONFIRM_EMAIL_CODE"),
        ((s = n || (n = {})).MFA = "mfa"),
        (s.SMS = "sms"),
        (s.EMAIL = "email");
    },
    865088: function (e, t, a) {
      e.exports = {
        akaBadge: "akaBadge_b24f45",
        header: "header_b24f45",
        subHeader: "subHeader_b24f45",
        miniAvatar: "miniAvatar_b24f45",
        miniGuildIcon: "miniGuildIcon_b24f45",
        akaTransfer: "akaTransfer_b24f45",
        guildTransfer: "guildTransfer_b24f45",
        guildName: "guildName_b24f45",
        nickname: "nickname_b24f45",
        fromToWrapper: "fromToWrapper_b24f45 spacing_b24f45",
        from: "from_b24f45",
        to: "to_b24f45",
        protectedText: "protectedText_b24f45",
        roleSubscriptionText: "roleSubscriptionText_b24f45",
      };
    },
  },
]);
//# sourceMappingURL=2e9be78463115bf0d618.js.map
