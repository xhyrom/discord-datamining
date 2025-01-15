"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64908"],
  {
    557944: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return p;
          },
        }),
        a(47120);
      var l = a(200651),
        n = a(192379),
        s = a(120356),
        i = a.n(s),
        r = a(512722),
        o = a.n(r),
        c = a(442837),
        d = a(481060),
        u = a(749210),
        h = a(600164),
        m = a(218867),
        b = a(430824),
        x = a(399860),
        C = a(335049),
        f = a(689079),
        k = a(388032),
        g = a(987188);
      function p(e) {
        let {
            editPermissions: t,
            guildId: a,
            hasMemberSearch: s,
            headerText: r,
            onClose: p,
            overwrittenKeys: j,
            search: y,
            searchPlaceholderText: B,
            selectedPermissionCount: E,
            transitionState: M,
          } = e,
          _ = (0, c.e7)([b.Z], () => b.Z.getGuild(a), [a]);
        o()(null != _, "");
        let [I, N] = n.useState(null),
          { query: T, results: v, setQuery: w } = y(a),
          [S, Z] = n.useState({}),
          D = n.useMemo(() => Object.keys(S).length, [S]),
          R = D + E >= f._n,
          H = n.useMemo(
            () =>
              v.filter((e) => {
                let t = (0, x.rE)(e.id, e.type);
                return !j.includes(t);
              }),
            [j, v],
          ),
          L = n.useCallback(
            (e, t) => {
              Z((a) => {
                let l = (0, x.rE)(e, t),
                  n = { ...a };
                return (
                  l in a
                    ? delete n[l]
                    : !R && (n[l] = { id: e, permission: !0, type: t }),
                  n
                );
              });
            },
            [R, Z],
          ),
          q = n.useCallback(() => {
            t(S, []), p();
          }, [t, p, S]);
        n.useEffect(() => () => clearTimeout(I), [I]);
        let V = n.useCallback(
            (e) => {
              w(e),
                s &&
                  N((t) =>
                    (clearTimeout(t), 0 === e.length)
                      ? null
                      : setTimeout(() => {
                          u.Z.requestMembers(a, e, 200, !1);
                        }, 500),
                  );
            },
            [a, s, w, N],
          ),
          z = n.useCallback(
            (e) => {
              let t = H[e],
                a = (0, x.rE)(t.id, t.type),
                n = a in S,
                s = R && !n;
              return (0, l.jsx)(
                "div",
                {
                  className: g.item,
                  children: (0, l.jsx)(d.Checkbox, {
                    type: d.Checkbox.Types.INVERTED,
                    className: i()({ [g.checkboxItemDisabled]: s }),
                    disabled: s,
                    value: n,
                    onChange: () => L(t.id, t.type),
                    children: (0, l.jsx)(C.Z, {
                      guild: _,
                      id: t.id,
                      type: t.type,
                      isLocked: !1,
                    }),
                  }),
                },
                a,
              );
            },
            [H, _, R, L, S],
          );
        return (
          n.useEffect(() => {
            u.Z.requestMembers(a, void 0, 200, !1);
          }, [a]),
          (0, l.jsxs)(d.ModalRoot, {
            "aria-label": k.intl.string(k.t["N+InBQ"]),
            transitionState: M,
            children: [
              (0, l.jsxs)(d.ModalHeader, {
                separator: !1,
                direction: h.Z.Direction.VERTICAL,
                children: [
                  (0, l.jsx)(d.Heading, {
                    variant: "heading-xl/semibold",
                    className: g.header,
                    children: r,
                  }),
                  R
                    ? (0, l.jsx)(d.Heading, {
                        variant: "heading-sm/medium",
                        color: "text-danger",
                        children: k.intl.string(k.t.XTwtW1),
                      })
                    : null,
                ],
              }),
              (0, l.jsxs)(d.ModalContent, {
                className: g.modalContent,
                children: [
                  (0, l.jsx)(d.SearchBar, {
                    className: g.searchBar,
                    query: T,
                    placeholder: B,
                    "aria-label": B,
                    onChange: V,
                    onClear: () => w(""),
                    size: d.SearchBar.Sizes.MEDIUM,
                  }),
                  (0, l.jsx)(m.Z, {
                    role: "listbox",
                    renderRow: z,
                    rowCount: H.length,
                    rowCountBySection: [H.length],
                    rowHeight: 36,
                    className: g.__invalid_list,
                  }),
                ],
              }),
              (0, l.jsxs)(d.ModalFooter, {
                children: [
                  (0, l.jsx)(d.Button, {
                    type: "submit",
                    onClick: q,
                    disabled: 0 === D,
                    children: k.intl.string(k.t.OYkgVl),
                  }),
                  (0, l.jsx)(d.Button, {
                    onClick: p,
                    look: d.Button.Looks.LINK,
                    color: d.Button.Colors.PRIMARY,
                    children: k.intl.string(k.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    987188: function (e, t, a) {
      e.exports = {
        header: "header_af5f95",
        item: "item_af5f95",
        checkboxItemDisabled: "checkboxItemDisabled_af5f95",
        modalContent: "modalContent_af5f95",
        searchBar: "searchBar_af5f95",
      };
    },
  },
]);
//# sourceMappingURL=c52c0bd3becdd87892df.js.map
