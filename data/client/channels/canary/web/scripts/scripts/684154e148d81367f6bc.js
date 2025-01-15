"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78704"],
  {
    560602: function (e, l, t) {
      t.r(l), t(47120), t(653041), t(724458);
      var n = t(200651),
        r = t(192379),
        i = t(120356),
        o = t.n(i),
        a = t(149765),
        s = t(442837),
        d = t(481060),
        c = t(741361),
        u = t(911969),
        h = t(605436),
        m = t(430824),
        v = t(700785),
        p = t(993259),
        f = t(388032),
        x = t(265100);
      function w(e) {
        return (l) => null != l && !(0, h.pM)(e, l);
      }
      let S = (e, l, t) => {
          let n = v.Uu(t, l),
            [i, o] = r.useState(n);
          return { shouldEveryonePost: i, setShouldEveryonePost: o };
        },
        j = (e) => {
          let { rolesRow: l } = e;
          return (0, n.jsx)("div", {
            "aria-hidden": !0,
            className: x.roleCircle,
            style: { backgroundColor: null == l ? void 0 : l.colorString },
          });
        };
      l.default = (e) => {
        let {
            guild: l,
            channel: t,
            permission: i,
            onClose: g,
            transitionState: N,
            currentSelectedRoles: C = [],
          } = e,
          { shouldEveryonePost: b, setShouldEveryonePost: _ } = S(l, t, i),
          k = r.useRef(null),
          y = (function (e) {
            let l = (0, s.e7)([m.Z], () => m.Z.getRoles(e.id));
            return r.useMemo(
              () => (0, p.KV)(e, l).filter((l) => w(e.id)(l.id)),
              [e, l],
            );
          })(l),
          H = y.reduce((e, l) => (e.set(l.id, l), e), new Map()),
          R = y.map((e) => ({ key: e.key, label: e.name, value: e.id })),
          [B, M] = r.useState(C.map((e) => e.id).filter(w(l.id))),
          [O, E] = r.useState(!1),
          [L, Z] = r.useState(!1),
          A = B.length > 0 || b,
          F = (function (e, l) {
            let t = (0, s.e7)([m.Z], () => m.Z.getRoles(e.id));
            return r.useCallback(
              (n, r) => {
                let i = (0, p.KV)(e, t),
                  o = new Set(r),
                  s = { ...l.permissionOverwrites },
                  d = [],
                  m = [];
                return (
                  i.forEach((l) => {
                    var t, r, i, c, p, f, x, w, S, j;
                    let g = l.id,
                      N = o.has(g);
                    N
                      ? d.push({
                          id: g,
                          type: u.BN.ROLE,
                          allow: N
                            ? a.IH(
                                null !==
                                  (c =
                                    null === (t = s[g]) || void 0 === t
                                      ? void 0
                                      : t.allow) && void 0 !== c
                                  ? c
                                  : v.Hn,
                                n,
                              )
                            : a.Od(
                                null !==
                                  (p =
                                    null === (r = s[g]) || void 0 === r
                                      ? void 0
                                      : r.allow) && void 0 !== p
                                  ? p
                                  : v.Hn,
                                n,
                              ),
                          deny: a.Od(
                            null !==
                              (f =
                                null === (i = s[g]) || void 0 === i
                                  ? void 0
                                  : i.deny) && void 0 !== f
                              ? f
                              : v.Hn,
                            n,
                          ),
                        })
                      : (0, h.pM)(e.id, g)
                        ? d.push({
                            id: g,
                            type: u.BN.ROLE,
                            allow: a.Od(
                              null !==
                                (S =
                                  null === (x = s[g]) || void 0 === x
                                    ? void 0
                                    : x.allow) && void 0 !== S
                                ? S
                                : v.Hn,
                              n,
                            ),
                            deny: a.IH(
                              null !==
                                (j =
                                  null === (w = s[g]) || void 0 === w
                                    ? void 0
                                    : w.deny) && void 0 !== j
                                ? j
                                : v.Hn,
                              n,
                            ),
                          })
                        : g in s && m.push(g);
                  }, []),
                  (0, c.kU)(l.id, d, m)
                );
              },
              [e, t, l],
            );
          })(l, t),
          G = async () => {
            if (!A) return;
            E(!0), Z(!1);
            let e = [...B];
            if (b) {
              let t = l.getEveryoneRoleId();
              e.push(t);
            }
            try {
              await F(i, e), g();
            } catch (e) {
              Z(!0);
            } finally {
              E(!1);
            }
          };
        return O
          ? (0, n.jsx)(d.Spinner, {})
          : (0, n.jsxs)(d.ModalRoot, {
              transitionState: N,
              "aria-label": f.intl.string(f.t["3khS8P"]),
              children: [
                (0, n.jsx)(d.ModalHeader, {
                  separator: !1,
                  className: x.modalHeader,
                  children: (0, n.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    className: x.header,
                    children: f.intl.string(f.t.TFGnmp),
                  }),
                }),
                (0, n.jsx)(d.ModalContent, {
                  children: (0, n.jsxs)("div", {
                    className: x.container,
                    children: [
                      (0, n.jsx)("div", {
                        className: x.row,
                        children: (0, n.jsx)("div", {
                          ref: k,
                          className: x.__invalid_roleSelectorContainer,
                          children: (0, n.jsx)(d.FocusRingScope, {
                            containerRef: k,
                            children: (0, n.jsx)(d.SearchableSelect, {
                              closeOnSelect: !1,
                              className: x.roleSelector,
                              maxVisibleItems: 5,
                              placeholder: f.intl.string(f.t["8kKqCQ"]),
                              multi: !0,
                              value: B,
                              options: R,
                              onChange: (e) => {
                                M(e);
                              },
                              renderOptionPrefix: (e) =>
                                null != e
                                  ? (0, n.jsx)(j, { rolesRow: H.get(e.value) })
                                  : null,
                            }),
                          }),
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className: x.row,
                        children: [
                          (0, n.jsx)(d.FormSwitch, {
                            value: b,
                            hideBorder: !0,
                            onChange: _,
                            className: x.switchGroup,
                            children: f.intl.string(f.t.kPwwAw),
                          }),
                          (0, n.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            children: f.intl.format(f.t.NjCtHx, {}),
                          }),
                        ],
                      }),
                      L
                        ? (0, n.jsx)("div", {
                            className: x.row,
                            children: (0, n.jsx)(d.Text, {
                              className: o()(x.row, x.error),
                              variant: "text-sm/normal",
                              children: f.intl.string(f.t.mgZKZG),
                            }),
                          })
                        : null,
                    ],
                  }),
                }),
                (0, n.jsxs)(d.ModalFooter, {
                  className: x.footer,
                  children: [
                    (0, n.jsx)(d.Button, {
                      type: "submit",
                      color: d.Button.Colors.BRAND,
                      size: d.Button.Sizes.SMALL,
                      className: x.button,
                      onClick: G,
                      disabled: !A,
                      autoFocus: !0,
                      children: f.intl.string(f.t.R3BPHx),
                    }),
                    (0, n.jsx)(d.Button, {
                      color: d.Button.Colors.PRIMARY,
                      size: d.Button.Sizes.SMALL,
                      className: x.button,
                      onClick: g,
                      children: f.intl.string(f.t["ETE/oK"]),
                    }),
                  ],
                }),
              ],
            });
      };
    },
    265100: function (e, l, t) {
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
//# sourceMappingURL=684154e148d81367f6bc.js.map
