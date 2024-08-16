"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17945"],
  {
    223926: function (e, a, s) {
      s.r(a), s(47120);
      var n,
        t,
        o = s(735250),
        l = s(470079),
        i = s(442837),
        R = s(481060),
        E = s(313201),
        r = s(496675),
        A = s(5192),
        _ = s(693546),
        u = s(863249),
        M = s(246364),
        d = s(981631),
        P = s(689938),
        C = s(514045);
      ((t = n || (n = {})).SPAM = "spam"),
        (t.ABUSIVE = "abusive"),
        (t.HARM = "harm"),
        (t.PII = "pii"),
        (t.OTHER = "other");
      a.default = function (e) {
        let {
            guild: a,
            guildJoinRequest: n,
            user: t,
            transitionState: c,
            onClose: N,
          } = e,
          O = (0, E.Dt)(),
          [I, h] = l.useState(null),
          [T, p] = l.useState(""),
          L = (0, i.e7)([r.Z], () =>
            r.Z.canManageUser(d.Plq.BAN_MEMBERS, t, a),
          ),
          [m, g] = l.useState(!1),
          x = l.useCallback(() => {
            var e;
            u.Z.reportApplication({
              guild: a,
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
              L &&
                m &&
                (_.Z.updateGuildJoinRequest(a.id, t.id, M.wB.REJECTED, ""),
                null == N || N(),
                (0, R.openModalLazy)(async () => {
                  let { default: e } = await s
                    .e("43350")
                    .then(s.bind(s, 98746));
                  return (s) => (0, o.jsx)(e, { ...s, guildId: a.id, user: t });
                }));
          }, [a, n, t, I, T, L, m, N]),
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
                    onChange: (e, a) => g(a),
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
    514045: function (e, a, s) {
      e.exports = { content: "content_fa20bf" };
    },
  },
]);
//# sourceMappingURL=b800795145ea5a717d44.js.map
