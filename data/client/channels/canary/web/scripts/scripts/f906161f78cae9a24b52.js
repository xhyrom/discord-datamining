"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59500"],
  {
    241420: function (n, t, i) {
      i.r(t),
        i.d(t, {
          PrivacySettings: function () {
            return h;
          },
          default: function () {
            return x;
          },
        });
      var e = i(200651);
      i(192379);
      var s = i(481060),
        r = i(546957),
        o = i(190014),
        d = i(301812),
        c = i(988043),
        l = i(919539),
        a = i(526761),
        u = i(388032),
        g = i(916442);
      function h(n) {
        let { guildId: t } = n;
        return (0, e.jsxs)(r.Z, {
          children: [
            (0, e.jsx)(c.Z, { ingress: a.f4.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, e.jsx)(l.Z, { ingress: a.f4.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, e.jsx)(d.Z, { ingress: a.f4.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, e.jsx)(o.Z, { ingress: a.f4.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, e.jsx)(s.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              children: u.intl.format(u.t.LNsV09, {
                policyLink:
                  "https://discord.com/safety/360043709612-our-policies",
              }),
            }),
          ],
        });
      }
      function x(n) {
        let { guild: t, transitionState: i, onClose: r } = n,
          o = ""
            .concat(u.intl.string(u.t.BayiAg), "—")
            .concat(null != t ? t.toString() : "??");
        return (0, e.jsxs)(s.ModalRoot, {
          transitionState: i,
          size: s.ModalSize.SMALL,
          "aria-label": o,
          children: [
            (0, e.jsx)(s.ModalHeader, {
              children: (0, e.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                children: o,
              }),
            }),
            (0, e.jsx)(s.ModalContent, {
              className: g.content,
              children: (0, e.jsx)(h, { guildId: t.id }),
            }),
            (0, e.jsx)(s.ModalFooter, {
              children: (0, e.jsx)(s.Button, {
                onClick: () => r(),
                children: u.intl.string(u.t.i4jeWV),
              }),
            }),
          ],
        });
      }
    },
    916442: function (n, t, i) {
      n.exports = { content: "content_efb43c" };
    },
  },
]);
//# sourceMappingURL=f906161f78cae9a24b52.js.map
