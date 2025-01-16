"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17945"],
  {
    223926: function (e, t, n) {
      n.r(t), n(47120);
      var a,
        i,
        l = n(200651),
        o = n(192379),
        s = n(442837),
        r = n(481060),
        u = n(313201),
        d = n(496675),
        c = n(5192),
        h = n(693546),
        p = n(863249),
        m = n(246364),
        x = n(981631),
        g = n(388032),
        v = n(6131);
      ((i = a || (a = {})).SPAM = "spam"),
        (i.ABUSIVE = "abusive"),
        (i.HARM = "harm"),
        (i.PII = "pii"),
        (i.OTHER = "other");
      t.default = function (e) {
        let {
            guild: t,
            guildJoinRequest: a,
            user: i,
            transitionState: C,
            onClose: f,
          } = e,
          j = (0, u.Dt)(),
          [E, b] = o.useState(null),
          [k, R] = o.useState(""),
          M = (0, s.e7)([d.Z], () =>
            d.Z.canManageUser(x.Plq.BAN_MEMBERS, i, t),
          ),
          [I, S] = o.useState(!1),
          B = o.useCallback(() => {
            var e;
            p.ZP.reportApplication({
              guild: t,
              guildJoinRequest: a,
              guildJoinRequestUser: i,
              reason: E,
              reasonOther: k,
              responses: JSON.stringify(
                null === (e = a.formResponses) || void 0 === e
                  ? void 0
                  : e.map((e) => e.response),
              ),
            }),
              M && I
                ? (h.Z.updateGuildJoinRequest(
                    t.id,
                    i.id,
                    a.joinRequestId,
                    m.wB.REJECTED,
                    "",
                  ),
                  f(),
                  (0, r.openModalLazy)(async () => {
                    let { default: e } = await n
                      .e("43350")
                      .then(n.bind(n, 98746));
                    return (n) =>
                      (0, l.jsx)(e, { ...n, guildId: t.id, user: i });
                  }))
                : f();
          }, [t, a, i, E, k, M, I, f]),
          P = o.useCallback(
            (e) => {
              b(e.value);
            },
            [b],
          ),
          T = o.useMemo(
            () => [
              { value: "spam", name: g.intl.string(g.t.iq4Iur) },
              { value: "abusive", name: g.intl.string(g.t["2EwC2d"]) },
              { value: "harm", name: g.intl.string(g.t.c2x8o6) },
              { value: "pii", name: g.intl.string(g.t.O2PDJC) },
              { value: "other", name: g.intl.string(g.t["NkfV+f"]) },
            ],
            [],
          ),
          q = c.ZP.getName(null, null, i);
        return (0, l.jsxs)(r.ModalRoot, {
          transitionState: C,
          "aria-labelledby": j,
          children: [
            (0, l.jsx)(r.ModalHeader, {
              children: (0, l.jsx)(r.Heading, {
                id: j,
                variant: "heading-md/semibold",
                children: g.intl.string(g.t.aEqS3d),
              }),
            }),
            (0, l.jsxs)(r.ModalContent, {
              className: v.content,
              children: [
                (0, l.jsx)(r.Text, {
                  variant: "text-md/normal",
                  children: g.intl.format(g.t.wrYOur, { username: q }),
                }),
                (0, l.jsx)(r.RadioGroup, { options: T, value: E, onChange: P }),
                "other" === E &&
                  (0, l.jsx)(r.TextArea, {
                    value: k,
                    onChange: R,
                    placeholder: g.intl.string(g.t["+E7Irq"]),
                    maxLength: 200,
                  }),
                M &&
                  (0, l.jsx)(r.Checkbox, {
                    type: r.Checkbox.Types.INVERTED,
                    value: I,
                    onChange: (e, t) => S(t),
                    children: (0, l.jsx)(r.Text, {
                      variant: "text-md/normal",
                      children: g.intl.format(g.t.cD5hlp, { username: q }),
                    }),
                  }),
              ],
            }),
            (0, l.jsxs)(r.ModalFooter, {
              children: [
                (0, l.jsx)(r.Button, {
                  onClick: B,
                  children: g.intl.string(g.t["+78Pfn"]),
                }),
                (0, l.jsx)(r.Button, {
                  look: r.ButtonLooks.LINK,
                  color: r.ButtonColors.PRIMARY,
                  onClick: f,
                  children: g.intl.string(g.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      };
    },
    6131: function (e, t, n) {
      e.exports = { content: "content_fa20bf" };
    },
  },
]);
//# sourceMappingURL=39f6dc53292b4acc1cb2.js.map
