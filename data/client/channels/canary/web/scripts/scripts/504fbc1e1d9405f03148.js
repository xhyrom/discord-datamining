"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83942"],
  {
    743582: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return p;
          },
        }),
        e(47120);
      var i = e(200651),
        l = e(192379),
        a = e(512722),
        s = e.n(a),
        o = e(481060),
        r = e(935369),
        c = e(728345),
        d = e(313201),
        u = e(577275),
        g = e(829857),
        m = e(388032),
        x = e(54237);
      function p(n) {
        var t, e;
        let { transitionState: a, application: p, onClose: h } = n,
          j = (0, d.Dt)(),
          [v, _] = l.useState(
            null == p
              ? void 0
              : null === (t = p.team) || void 0 === t
                ? void 0
                : t.id,
          ),
          { teams: b } = (0, u.Z)(),
          f = l.useMemo(
            () =>
              b
                .filter((n) => n.payout_account_status === g.C.ACTIVE)
                .map((n) => ({ label: n.name, value: n.id })),
            [b],
          ),
          C =
            (null == p
              ? void 0
              : null === (e = p.team) || void 0 === e
                ? void 0
                : e.id) !== v,
          [B, { loading: H, error: N }] = (0, r.Z)(c.ZP.transferApplication),
          w = async () => {
            s()(null != p, "no application"),
              s()(null != v, "no team selected"),
              null != (await B({ applicationId: p.id, teamId: v })) && h();
          },
          S = (null == p ? void 0 : p.team) != null;
        return (0, i.jsxs)(o.ModalRoot, {
          transitionState: a,
          "aria-labelledby": j,
          children: [
            (0, i.jsxs)(o.ModalHeader, {
              children: [
                (0, i.jsx)(o.Heading, {
                  id: j,
                  variant: "heading-md/semibold",
                  children: S
                    ? m.intl.string(m.t["4TveVl"])
                    : m.intl.string(m.t.feBUAQ),
                }),
                (0, i.jsx)(o.ModalCloseButton, {
                  className: x.closeButton,
                  onClick: h,
                }),
              ],
            }),
            (0, i.jsxs)(o.ModalContent, {
              className: x.content,
              children: [
                S
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(o.FormText, {
                          children: m.intl.string(m.t.c7HS0t),
                        }),
                        (0, i.jsx)(o.Spacer, { size: 8 }),
                        (0, i.jsxs)(o.Heading, {
                          className: x.warningHeading,
                          variant: "text-sm/semibold",
                          color: "text-danger",
                          children: [
                            (0, i.jsx)(o.CircleWarningIcon, {
                              size: "xs",
                              color: "currentColor",
                              className: x.warningIcon,
                            }),
                            m.intl.string(m.t.Caz8nJ),
                          ],
                        }),
                        (0, i.jsx)(o.Spacer, { size: 4 }),
                        (0, i.jsx)(o.FormText, {
                          type: o.FormText.Types.ERROR,
                          children: m.intl.string(m.t.u4ddHR),
                        }),
                      ],
                    })
                  : (0, i.jsx)(o.FormText, {
                      children: m.intl.string(m.t.atZ50N),
                    }),
                null != N
                  ? (0, i.jsx)(o.FormErrorBlock, { children: N.message })
                  : null,
                (0, i.jsx)(o.Spacer, { size: 16 }),
                (0, i.jsx)(o.FormItem, {
                  title: S
                    ? m.intl.string(m.t.xZ6ZLy)
                    : m.intl.string(m.t.bfmKdH),
                  required: !0,
                  children: (0, i.jsx)(o.SingleSelect, {
                    className: x.__invalid_teamSelect,
                    options: f,
                    placeholder: m.intl.string(m.t.QXf93N),
                    value: v,
                    isDisabled: 0 === f.length,
                    onChange: (n) => _(n),
                    "aria-label": m.intl.string(m.t.QXf93N),
                  }),
                }),
              ],
            }),
            (0, i.jsx)(o.ModalFooter, {
              className: x.__invalid_footer,
              children: (0, i.jsx)(o.Button, {
                color: o.Button.Colors.RED,
                className: x.__invalid_goBackButton,
                submitting: H,
                disabled: !C,
                onClick: w,
                children: m.intl.string(m.t.R3BPHx),
              }),
            }),
          ],
        });
      }
    },
    54237: function (n, t, e) {
      n.exports = {
        closeButton: "closeButton_aa3cfb",
        content: "content_aa3cfb",
        warningHeading: "warningHeading_aa3cfb",
        warningIcon: "warningIcon_aa3cfb",
      };
    },
  },
]);
//# sourceMappingURL=504fbc1e1d9405f03148.js.map
