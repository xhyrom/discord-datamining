"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31835"],
  {
    53365: function (t, n, r) {
      r.d(n, {
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
          return T;
        },
        yk: function () {
          return u;
        },
        zo: function () {
          return E;
        },
      });
      var e = r(544891),
        i = r(570140),
        o = r(728345),
        a = r(981631),
        c = r(674563);
      async function l(t) {
        await e.tn.post({
          url: a.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(t),
          rejectWithError: !1,
        });
      }
      async function u(t) {
        return (
          await e.tn.get({
            url: a.ANM.CREATOR_MONETIZATION_ELIGIBILITY(t),
            rejectWithError: !1,
          })
        ).body;
      }
      async function s(t, n) {
        await e.tn.post({
          url: a.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(t, n),
          rejectWithError: !1,
        });
      }
      async function E(t) {
        await e.tn.post({
          url: a.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(t),
          rejectWithError: !1,
        });
      }
      async function T(t) {
        return (
          await e.tn.get({
            url: a.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(t),
            rejectWithError: !1,
          })
        ).body;
      }
      async function _(t) {
        try {
          let n = await e.tn.get({
            url: a.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: t },
            rejectWithError: !0,
          });
          i.Z.dispatch({
            type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
            eligibleGuilds: n.body.eligible_guilds,
          });
        } catch (t) {}
      }
      async function A(t, n) {
        let r = (
          await e.tn.post({
            url: a.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(t),
            body: { team_id: n },
            rejectWithError: !1,
          })
        ).body;
        return (
          null != r.application &&
            i.Z.dispatch({
              type: "APPLICATION_FETCH_SUCCESS",
              application: r.application,
            }),
          r
        );
      }
      function N(t) {
        return e.tn.post({
          url: a.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(t),
          rejectWithError: !1,
        });
      }
      function d(t) {
        return e.tn.post({
          url: a.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(t),
          rejectWithError: !1,
        });
      }
      async function I(t) {
        await e.tn.post({
          url: a.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(t),
          body: {},
          rejectWithError: !1,
        });
      }
      async function O(t) {
        return (
          await I(t),
          await o.ZP.getApplicationsForGuild(t, {
            type: c.wW.GUILD_ROLE_SUBSCRIPTIONS,
            includeTeam: !0,
          })
        );
      }
    },
    377176: function (t, n, r) {
      r.d(n, {
        f: function () {
          return a;
        },
      });
      var e = r(63063),
        i = r(981631),
        o = r(388032);
      function a() {
        return o.intl.format(o.t["+ALa7+"], {
          fullTermsUrl: e.Z.getArticleURL(i.BhN.CREATOR_TERMS),
          creatorRevenuePolicyUrl: e.Z.getArticleURL(i.BhN.CREATOR_POLICY),
        });
      }
    },
    393809: function (t, n, r) {
      r.r(n),
        r.d(n, {
          default: function () {
            return s;
          },
        }),
        r(47120);
      var e = r(200651),
        i = r(192379),
        o = r(481060),
        a = r(53365),
        c = r(377176),
        l = r(388032),
        u = r(722657);
      function s(t) {
        let { guildId: n, transitionState: r, onClose: s } = t,
          [E, T] = i.useState(!1),
          [_, A] = i.useState(!1),
          N = async () => {
            T(!0);
            try {
              await (0, a.zo)(n), s();
            } finally {
              T(!1);
            }
          },
          d = l.intl.string(l.t["22itmp"]);
        return (0, e.jsxs)(o.ModalRoot, {
          className: u.__invalid_container,
          size: o.ModalSize.DYNAMIC,
          transitionState: r,
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
                    A((t) => !t);
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
                  submitting: E,
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
    722657: function (t, n, r) {
      t.exports = {
        content: "content_e7ba43",
        header: "header_e7ba43",
        warningIcon: "warningIcon_e7ba43",
      };
    },
  },
]);
//# sourceMappingURL=42fe2725d0ce295aa6be.js.map
