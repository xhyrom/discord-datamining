"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78704"],
  {
    560602: function (e, l, o) {
      o.r(l), o(47120), o(653041), o(724458);
      var s = o(735250),
        r = o(470079),
        a = o(120356),
        n = o.n(a),
        t = o(149765),
        i = o(442837),
        d = o(481060),
        c = o(741361),
        u = o(911969),
        _ = o(605436),
        N = o(430824),
        h = o(700785),
        O = o(993259),
        R = o(689938),
        M = o(614731);
      function S(e) {
        return (l) => null != l && !(0, _.pM)(e, l);
      }
      let m = (e, l, o) => {
          let s = h.Uu(o, l),
            [a, n] = r.useState(s);
          return { shouldEveryonePost: a, setShouldEveryonePost: n };
        },
        v = (e) => {
          let { rolesRow: l } = e;
          return (0, s.jsx)("div", {
            "aria-hidden": !0,
            className: M.roleCircle,
            style: { backgroundColor: null == l ? void 0 : l.colorString },
          });
        };
      l.default = (e) => {
        let {
            guild: l,
            channel: o,
            permission: a,
            onClose: f,
            transitionState: p,
            currentSelectedRoles: E = [],
          } = e,
          { shouldEveryonePost: x, setShouldEveryonePost: I } = m(l, o, a),
          C = r.useRef(null),
          L = (function (e) {
            let l = (0, i.e7)([N.Z], () => N.Z.getRoles(e.id));
            return r.useMemo(
              () => (0, O.KV)(e, l).filter((l) => S(e.id)(l.id)),
              [e, l],
            );
          })(l),
          A = L.reduce((e, l) => (e.set(l.id, l), e), new Map()),
          w = L.map((e) => ({ key: e.key, label: e.name, value: e.id })),
          [g, j] = r.useState(E.map((e) => e.id).filter(S(l.id))),
          [H, B] = r.useState(!1),
          [b, D] = r.useState(!1),
          y = g.length > 0 || x,
          Z = (function (e, l) {
            let o = (0, i.e7)([N.Z], () => N.Z.getRoles(e.id));
            return r.useCallback(
              (s, r) => {
                let a = (0, O.KV)(e, o),
                  n = new Set(r),
                  i = { ...l.permissionOverwrites },
                  d = [],
                  N = [];
                return (
                  a.forEach((l) => {
                    var o, r, a, c, O, R, M, S, m, v;
                    let f = l.id,
                      p = n.has(f);
                    p
                      ? d.push({
                          id: f,
                          type: u.BN.ROLE,
                          allow: p
                            ? t.IH(
                                null !==
                                  (c =
                                    null === (o = i[f]) || void 0 === o
                                      ? void 0
                                      : o.allow) && void 0 !== c
                                  ? c
                                  : h.Hn,
                                s,
                              )
                            : t.Od(
                                null !==
                                  (O =
                                    null === (r = i[f]) || void 0 === r
                                      ? void 0
                                      : r.allow) && void 0 !== O
                                  ? O
                                  : h.Hn,
                                s,
                              ),
                          deny: t.Od(
                            null !==
                              (R =
                                null === (a = i[f]) || void 0 === a
                                  ? void 0
                                  : a.deny) && void 0 !== R
                              ? R
                              : h.Hn,
                            s,
                          ),
                        })
                      : (0, _.pM)(e.id, f)
                        ? d.push({
                            id: f,
                            type: u.BN.ROLE,
                            allow: t.Od(
                              null !==
                                (m =
                                  null === (M = i[f]) || void 0 === M
                                    ? void 0
                                    : M.allow) && void 0 !== m
                                ? m
                                : h.Hn,
                              s,
                            ),
                            deny: t.IH(
                              null !==
                                (v =
                                  null === (S = i[f]) || void 0 === S
                                    ? void 0
                                    : S.deny) && void 0 !== v
                                ? v
                                : h.Hn,
                              s,
                            ),
                          })
                        : f in i && N.push(f);
                  }, []),
                  (0, c.kU)(l.id, d, N)
                );
              },
              [e, o, l],
            );
          })(l, o),
          k = async () => {
            if (!y) return;
            B(!0), D(!1);
            let e = [...g];
            if (x) {
              let o = l.getEveryoneRoleId();
              e.push(o);
            }
            try {
              await Z(a, e), f();
            } catch (e) {
              D(!0);
            } finally {
              B(!1);
            }
          };
        return H
          ? (0, s.jsx)(d.Spinner, {})
          : (0, s.jsxs)(d.ModalRoot, {
              transitionState: p,
              "aria-label": R.Z.Messages.HUB_WAITLIST_MODAL_JOIN_HEADER,
              children: [
                (0, s.jsx)(d.ModalHeader, {
                  separator: !1,
                  className: M.modalHeader,
                  children: (0, s.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    className: M.header,
                    children:
                      R.Z.Messages
                        .FORUM_CHANNEL_ONBOARDING_PERMISSION_MODAL_TITLE,
                  }),
                }),
                (0, s.jsx)(d.ModalContent, {
                  children: (0, s.jsxs)("div", {
                    className: M.container,
                    children: [
                      (0, s.jsx)("div", {
                        className: M.row,
                        children: (0, s.jsx)("div", {
                          ref: C,
                          className: M.__invalid_roleSelectorContainer,
                          children: (0, s.jsx)(d.FocusRingScope, {
                            containerRef: C,
                            children: (0, s.jsx)(d.SearchableSelect, {
                              closeOnSelect: !1,
                              className: M.roleSelector,
                              maxVisibleItems: 5,
                              placeholder:
                                R.Z.Messages
                                  .FORUM_CHANNEL_ONBOARDING_PERMISSION_MODAL_ROLE_INPUT_PLACEHOLDER,
                              multi: !0,
                              value: g,
                              options: w,
                              onChange: (e) => {
                                j(e);
                              },
                              renderOptionPrefix: (e) =>
                                null != e
                                  ? (0, s.jsx)(v, { rolesRow: A.get(e.value) })
                                  : null,
                            }),
                          }),
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: M.row,
                        children: [
                          (0, s.jsx)(d.FormSwitch, {
                            value: x,
                            hideBorder: !0,
                            onChange: I,
                            className: M.switchGroup,
                            children:
                              R.Z.Messages
                                .FORUM_CHANNEL_ONBOARDING_PERMISSION_MODAL_LET_EVERYONE_POST,
                          }),
                          (0, s.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            children:
                              R.Z.Messages.FORUM_CHANNEL_ONBOARDING_PERMISSION_MODEL_DESCRIPTION.format(),
                          }),
                        ],
                      }),
                      b
                        ? (0, s.jsx)("div", {
                            className: M.row,
                            children: (0, s.jsx)(d.Text, {
                              className: n()(M.row, M.error),
                              variant: "text-sm/normal",
                              children:
                                R.Z.Messages
                                  .FORUM_CHANNEL_ONBOARDING_PERMISSION_MODEL_ERROR,
                            }),
                          })
                        : null,
                    ],
                  }),
                }),
                (0, s.jsxs)(d.ModalFooter, {
                  className: M.footer,
                  children: [
                    (0, s.jsx)(d.Button, {
                      type: "submit",
                      color: d.Button.Colors.BRAND,
                      size: d.Button.Sizes.SMALL,
                      className: M.button,
                      onClick: k,
                      disabled: !y,
                      autoFocus: !0,
                      children: R.Z.Messages.SAVE,
                    }),
                    (0, s.jsx)(d.Button, {
                      color: d.Button.Colors.PRIMARY,
                      size: d.Button.Sizes.SMALL,
                      className: M.button,
                      onClick: f,
                      children: R.Z.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            });
      };
    },
    614731: function (e, l, o) {
      e.exports = {
        container: "container_fe3c45",
        modalHeader: "modalHeader_fe3c45",
        header: "header_fe3c45",
        row: "row_fe3c45",
        switchGroup: "switchGroup_fe3c45",
        error: "error_fe3c45",
        roleSelector: "roleSelector_fe3c45",
        roleCircle: "roleCircle_fe3c45",
        footer: "footer_fe3c45",
        button: "button_fe3c45",
      };
    },
  },
]);
//# sourceMappingURL=7745e8781e552b06664f.js.map
