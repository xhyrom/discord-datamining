"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17945"],
  {
    223926: function (e, s, a) {
      a.r(s), a(47120);
      var n,
        t,
        o = a(735250),
        l = a(470079),
        i = a(442837),
        R = a(481060),
        E = a(313201),
        r = a(496675),
        A = a(5192),
        _ = a(693546),
        u = a(863249),
        d = a(246364),
        M = a(981631),
        P = a(689938),
        C = a(885549);
      ((t = n || (n = {})).SPAM = "spam"),
        (t.ABUSIVE = "abusive"),
        (t.HARM = "harm"),
        (t.PII = "pii"),
        (t.OTHER = "other");
      s.default = function (e) {
        let {
            guild: s,
            guildJoinRequest: n,
            user: t,
            transitionState: c,
            onClose: N,
          } = e,
          O = (0, E.Dt)(),
          [I, h] = l.useState(null),
          [T, p] = l.useState(""),
          L = (0, i.e7)([r.Z], () =>
            r.Z.canManageUser(M.Plq.BAN_MEMBERS, t, s),
          ),
          [m, g] = l.useState(!1),
          x = l.useCallback(() => {
            var e;
            u.ZP.reportApplication({
              guild: s,
              guildJoinRequest: n,
              guildJoinRequestUser: t,
              reason: I,
              reasonOther: T,
              responses: JSON.stringify(
                null === (e = n.formResponses) || void 0 === e
                  ? void 0
                  : e.map((e) => e.response),
              ),
            }),
              L && m
                ? (_.Z.updateGuildJoinRequest(
                    s.id,
                    t.id,
                    n.joinRequestId,
                    d.wB.REJECTED,
                    "",
                  ),
                  N(),
                  (0, R.openModalLazy)(async () => {
                    let { default: e } = await a
                      .e("43350")
                      .then(a.bind(a, 98746));
                    return (a) =>
                      (0, o.jsx)(e, { ...a, guildId: s.id, user: t });
                  }))
                : N();
          }, [s, n, t, I, T, L, m, N]),
          B = l.useCallback(
            (e) => {
              h(e.value);
            },
            [h],
          ),
          v = l.useMemo(
            () => [
              {
                value: "spam",
                name: P.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_SPAM,
              },
              {
                value: "abusive",
                name: P.Z.Messages
                  .CLAN_MEMBER_APPLICATION_REPORT_REASON_ABUSIVE,
              },
              {
                value: "harm",
                name: P.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_HARM,
              },
              {
                value: "pii",
                name: P.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_PII,
              },
              {
                value: "other",
                name: P.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_OTHER,
              },
            ],
            [],
          ),
          S = A.ZP.getName(null, null, t);
        return (0, o.jsxs)(R.ModalRoot, {
          transitionState: c,
          "aria-labelledby": O,
          children: [
            (0, o.jsx)(R.ModalHeader, {
              children: (0, o.jsx)(R.Heading, {
                id: O,
                variant: "heading-md/semibold",
                children:
                  P.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_MODAL_HEADER,
              }),
            }),
            (0, o.jsxs)(R.ModalContent, {
              className: C.content,
              children: [
                (0, o.jsx)(R.Text, {
                  variant: "text-md/normal",
                  children:
                    P.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_DESCRIPTION.format(
                      { username: S },
                    ),
                }),
                (0, o.jsx)(R.RadioGroup, { options: v, value: I, onChange: B }),
                "other" === I &&
                  (0, o.jsx)(R.TextArea, {
                    value: T,
                    onChange: p,
                    placeholder:
                      P.Z.Messages
                        .CLAN_MEMBER_APPLICATION_REPORT_REASON_OTHER_PLACEHOLDER,
                    maxLength: 200,
                  }),
                L &&
                  (0, o.jsx)(R.Checkbox, {
                    type: R.Checkbox.Types.INVERTED,
                    value: m,
                    onChange: (e, s) => g(s),
                    children: (0, o.jsx)(R.Text, {
                      variant: "text-md/normal",
                      children:
                        P.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_BAN.format({
                          username: S,
                        }),
                    }),
                  }),
              ],
            }),
            (0, o.jsxs)(R.ModalFooter, {
              children: [
                (0, o.jsx)(R.Button, {
                  onClick: x,
                  children: P.Z.Messages.REPORT,
                }),
                (0, o.jsx)(R.Button, {
                  look: R.ButtonLooks.LINK,
                  color: R.ButtonColors.PRIMARY,
                  onClick: N,
                  children: P.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      };
    },
    885549: function (e, s, a) {
      e.exports = { content: "content_fa20bf" };
    },
  },
]);
//# sourceMappingURL=3f42682bf83723fdbd52.js.map
