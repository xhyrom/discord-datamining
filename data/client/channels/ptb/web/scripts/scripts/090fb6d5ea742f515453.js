"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64908"],
  {
    46851: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return k;
          },
        }),
        s(47120);
      var t = s(735250),
        l = s(470079),
        n = s(120356),
        r = s.n(n),
        i = s(512722),
        o = s.n(i),
        c = s(442837),
        d = s(481060),
        u = s(749210),
        h = s(600164),
        m = s(218867),
        C = s(430824),
        b = s(399860),
        x = s(335049),
        I = s(689079),
        M = s(689938),
        f = s(51841);
      function k(e) {
        let {
            editPermissions: a,
            guildId: s,
            hasMemberSearch: n,
            headerText: i,
            onClose: k,
            overwrittenKeys: p,
            search: g,
            searchPlaceholderText: N,
            selectedPermissionCount: _,
            transitionState: S,
          } = e,
          j = (0, c.e7)([C.Z], () => C.Z.getGuild(s), [s]);
        o()(null != j, "");
        let [E, A] = l.useState(null),
          { query: T, results: y, setQuery: Z } = g(s),
          [B, D] = l.useState({}),
          R = l.useMemo(() => Object.keys(B).length, [B]),
          O = R + _ >= I._n,
          v = l.useMemo(
            () =>
              y.filter((e) => {
                let a = (0, b.rE)(e.id, e.type);
                return !p.includes(a);
              }),
            [p, y],
          ),
          L = l.useCallback(
            (e, a) => {
              D((s) => {
                let t = (0, b.rE)(e, a),
                  l = { ...s };
                return (
                  t in s
                    ? delete l[t]
                    : !O && (l[t] = { id: e, permission: !0, type: a }),
                  l
                );
              });
            },
            [O, D],
          ),
          P = l.useCallback(() => {
            a(B, []), k();
          }, [a, k, B]);
        l.useEffect(() => () => clearTimeout(E), [E]);
        let w = l.useCallback(
            (e) => {
              Z(e),
                n &&
                  A((a) =>
                    (clearTimeout(a), 0 === e.length)
                      ? null
                      : setTimeout(() => {
                          u.Z.requestMembers(s, e, 200, !1);
                        }, 500),
                  );
            },
            [s, n, Z, A],
          ),
          H = l.useCallback(
            (e) => {
              let a = v[e],
                s = (0, b.rE)(a.id, a.type),
                l = s in B,
                n = O && !l;
              return (0, t.jsx)(
                "div",
                {
                  className: f.item,
                  children: (0, t.jsx)(d.Checkbox, {
                    type: d.Checkbox.Types.INVERTED,
                    className: r()({ [f.checkboxItemDisabled]: n }),
                    disabled: n,
                    value: l,
                    onChange: () => L(a.id, a.type),
                    children: (0, t.jsx)(x.Z, {
                      guild: j,
                      id: a.id,
                      type: a.type,
                      isLocked: !1,
                    }),
                  }),
                },
                s,
              );
            },
            [v, j, O, L, B],
          );
        return (
          l.useEffect(() => {
            u.Z.requestMembers(s, void 0, 200, !1);
          }, [s]),
          (0, t.jsxs)(d.ModalRoot, {
            "aria-label":
              M.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_MODIFY,
            transitionState: S,
            children: [
              (0, t.jsxs)(d.ModalHeader, {
                separator: !1,
                direction: h.Z.Direction.VERTICAL,
                children: [
                  (0, t.jsx)(d.Heading, {
                    variant: "heading-xl/semibold",
                    className: f.header,
                    children: i,
                  }),
                  O
                    ? (0, t.jsx)(d.Heading, {
                        variant: "heading-sm/medium",
                        color: "text-danger",
                        children:
                          M.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_MAX,
                      })
                    : null,
                ],
              }),
              (0, t.jsxs)(d.ModalContent, {
                className: f.modalContent,
                children: [
                  (0, t.jsx)(d.SearchBar, {
                    className: f.searchBar,
                    query: T,
                    placeholder: N,
                    "aria-label": N,
                    onChange: w,
                    onClear: () => Z(""),
                    size: d.SearchBar.Sizes.MEDIUM,
                  }),
                  (0, t.jsx)(m.Z, {
                    role: "listbox",
                    renderRow: H,
                    rowCount: v.length,
                    rowCountBySection: [v.length],
                    rowHeight: 36,
                    className: f.__invalid_list,
                  }),
                ],
              }),
              (0, t.jsxs)(d.ModalFooter, {
                children: [
                  (0, t.jsx)(d.Button, {
                    type: "submit",
                    onClick: P,
                    disabled: 0 === R,
                    children: M.Z.Messages.ADD,
                  }),
                  (0, t.jsx)(d.Button, {
                    onClick: k,
                    look: d.Button.Looks.LINK,
                    color: d.Button.Colors.PRIMARY,
                    children: M.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    51841: function (e, a, s) {
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
//# sourceMappingURL=090fb6d5ea742f515453.js.map
