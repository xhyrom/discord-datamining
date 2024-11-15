"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31835"],
  {
    53365: function (n, t, i) {
      i.d(t, {
        $J: function () {
          return d;
        },
        He: function () {
          return l;
        },
        av: function () {
          return _;
        },
        df: function () {
          return A;
        },
        hY: function () {
          return N;
        },
        oL: function () {
          return O;
        },
        wE: function () {
          return s;
        },
        wZ: function () {
          return E;
        },
        yk: function () {
          return u;
        },
        zo: function () {
          return T;
        },
      });
      var e = i(544891),
        r = i(570140),
        o = i(728345),
        a = i(981631),
        c = i(674563);
      async function l(n) {
        await e.tn.post({ url: a.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(n) });
      }
      async function u(n) {
        return (
          await e.tn.get({ url: a.ANM.CREATOR_MONETIZATION_ELIGIBILITY(n) })
        ).body;
      }
      async function s(n, t) {
        await e.tn.post({ url: a.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(n, t) });
      }
      async function T(n) {
        await e.tn.post({ url: a.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(n) });
      }
      async function E(n) {
        return (
          await e.tn.get({
            url: a.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(n),
          })
        ).body;
      }
      async function _(n) {
        try {
          let t = await e.tn.get({
            url: a.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: n },
          });
          r.Z.dispatch({
            type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
            eligibleGuilds: t.body.eligible_guilds,
          });
        } catch (n) {}
      }
      async function A(n, t) {
        let i = (
          await e.tn.post({
            url: a.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(n),
            body: { team_id: t },
          })
        ).body;
        return (
          null != i.application &&
            r.Z.dispatch({
              type: "APPLICATION_FETCH_SUCCESS",
              application: i.application,
            }),
          i
        );
      }
      function N(n) {
        return e.tn.post({
          url: a.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(n),
        });
      }
      function d(n) {
        return e.tn.post({
          url: a.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(n),
        });
      }
      async function I(n) {
        await e.tn.post({
          url: a.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(n),
          body: {},
        });
      }
      async function O(n) {
        return (
          await I(n),
          await o.ZP.getApplicationsForGuild(n, {
            type: c.wW.GUILD_ROLE_SUBSCRIPTIONS,
            includeTeam: !0,
          })
        );
      }
    },
    377176: function (n, t, i) {
      i.d(t, {
        f: function () {
          return a;
        },
      });
      var e = i(63063),
        r = i(981631),
        o = i(388032);
      function a() {
        return o.intl.format(o.t["+ALa7+"], {
          fullTermsUrl: e.Z.getArticleURL(r.BhN.CREATOR_TERMS),
          creatorRevenuePolicyUrl: e.Z.getArticleURL(r.BhN.CREATOR_POLICY),
        });
      }
    },
    393809: function (n, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return s;
          },
        }),
        i(47120);
      var e = i(200651),
        r = i(192379),
        o = i(481060),
        a = i(53365),
        c = i(377176),
        l = i(388032),
        u = i(42788);
      function s(n) {
        let { guildId: t, transitionState: i, onClose: s } = n,
          [T, E] = r.useState(!1),
          [_, A] = r.useState(!1),
          N = async () => {
            E(!0);
            try {
              await (0, a.zo)(t), s();
            } finally {
              E(!1);
            }
          },
          d = l.intl.string(l.t["22itmp"]);
        return (0, e.jsxs)(o.ModalRoot, {
          className: u.__invalid_container,
          size: o.ModalSize.DYNAMIC,
          transitionState: i,
          "aria-label": d,
          children: [
            (0, e.jsxs)(o.ModalContent, {
              className: u.content,
              children: [
                (0, e.jsxs)("div", {
                  className: u.header,
                  children: [
                    (0, e.jsx)(o.CircleWarningIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: u.warningIcon,
                    }),
                    (0, e.jsx)(o.Spacer, { size: 8, horizontal: !0 }),
                    (0, e.jsx)(o.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children: d,
                    }),
                  ],
                }),
                (0, e.jsx)(o.Spacer, { size: 12 }),
                (0, e.jsx)(o.Text, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  className: u.__invalid_body,
                  children: l.intl.string(l.t.kdbm9P),
                }),
                (0, e.jsx)(o.Spacer, { size: 28 }),
                (0, e.jsx)(o.Checkbox, {
                  onChange: () => {
                    A((n) => !n);
                  },
                  size: 20,
                  type: o.Checkbox.Types.INVERTED,
                  value: _,
                  children: (0, e.jsx)(o.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: (0, c.f)(),
                  }),
                }),
              ],
            }),
            (0, e.jsxs)(o.ModalFooter, {
              children: [
                (0, e.jsx)(o.Button, {
                  color: o.Button.Colors.BRAND,
                  disabled: !_,
                  onClick: N,
                  submitting: T,
                  children: l.intl.string(l.t["cY+Ooa"]),
                }),
                (0, e.jsx)(o.Spacer, { size: 12, horizontal: !0 }),
                (0, e.jsx)(o.Button, {
                  color: o.Button.Colors.PRIMARY,
                  look: o.Button.Looks.OUTLINED,
                  onClick: s,
                  children: l.intl.string(l.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    42788: function (n, t, i) {
      n.exports = {
        content: "content_e7ba43",
        header: "header_e7ba43",
        warningIcon: "warningIcon_e7ba43",
      };
    },
  },
]);
//# sourceMappingURL=0fdf965047cc807e81c3.js.map
