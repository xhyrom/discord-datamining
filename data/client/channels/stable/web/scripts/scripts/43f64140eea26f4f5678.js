"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39010"],
  {
    269254: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var a = n(735250);
      n(470079);
      var i = n(828214),
        l = n(481060),
        u = n(239091),
        s = n(299206),
        o = n(519110),
        r = n(695346),
        c = n(572004),
        I = n(691251),
        d = n(689938);
      function E(e) {
        let { target: t, onSelect: n } = e,
          E = t.getAttribute("data-type"),
          M = t.getAttribute("data-id"),
          S = t.getAttribute("data-name"),
          g = t.getAttribute("data-surrogates"),
          b = "true" === t.getAttribute("data-animated"),
          f = r.Sb.useSetting(),
          O = (0, o.Z)({ type: E, id: M, name: S, isInExpressionPicker: !0 }),
          Z =
            null != g
              ? (0, a.jsx)(i.sN, {
                  id: "copy",
                  label: d.Z.Messages.COPY_EMOJI,
                  action: () => (0, c.JG)(g),
                })
              : null,
          C = (0, s.Z)({
            id: M,
            shiftId:
              E === I.S.EMOJI
                ? "<"
                    .concat(b ? "a" : "", ":")
                    .concat(null == S ? void 0 : S.split("~")[0], ":")
                    .concat(M, ">")
                : void 0,
            label:
              E === I.S.STICKER
                ? d.Z.Messages.COPY_ID_STICKER
                : d.Z.Messages.COPY_ID_EMOJI,
          });
        return (0, a.jsx)(l.Menu, {
          navId: "expression-picker",
          onClose: u.Zy,
          "aria-label": d.Z.Messages.EXPRESSION_PICKER_ACTIONS_MENU_LABEL,
          onSelect: n,
          className: "context-menu",
          children: (0, a.jsxs)(l.MenuGroup, {
            children: [O, c.wS && f ? (null != Z ? Z : C) : null],
          }),
        });
      }
    },
    519110: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      }),
        n(757143);
      var a = n(735250),
        i = n(470079),
        l = n(442837),
        u = n(481060),
        s = n(80932),
        o = n(2052),
        r = n(543241),
        c = n(339085),
        I = n(633302),
        d = n(691251),
        E = n(268350),
        M = n(217590),
        S = n(453070),
        g = n(926491),
        b = n(378233),
        f = n(981631),
        O = n(689938);
      function Z(e) {
        return I.ZP.getByName(e.replace(/(^:|:$)/g, ""));
      }
      function C(e) {
        let { type: t, id: n, name: C, isInExpressionPicker: T = !1 } = e,
          { location: _ } = (0, o.O)(),
          p = i.useMemo(
            () => ({
              ..._,
              section: T ? f.jXE.EXPRESSION_PICKER : f.jXE.CONTEXT_MENU,
            }),
            [_, T],
          ),
          v = (0, S.Go)(),
          A = (0, l.e7)([g.Z], () =>
            t === d.S.STICKER && null != n ? g.Z.getStickerById(n) : null,
          ),
          m = null != A && v.includes(A.id),
          R = (0, l.e7)([c.ZP], () => {
            if (t === d.S.EMOJI) {
              if (null != n)
                return c.ZP.getDisambiguatedEmojiContext().getById(n);
              if (null != C) {
                var e;
                return null !== (e = Z(C)) && void 0 !== e
                  ? e
                  : Z(I.ZP.convertSurrogateToName(C));
              }
            }
          }),
          j = (0, r.C1)(null, R);
        if (null != A && t === d.S.STICKER)
          return (0, b.J8)(A) && !(0, b.V9)(A)
            ? null
            : m
              ? (0, a.jsx)(u.MenuItem, {
                  id: "unfavorite",
                  action: () => (0, E.hW)(A.id),
                  label: O.Z.Messages.UNFAVORITE_ITEM,
                })
              : (0, a.jsx)(u.MenuItem, {
                  id: "favorite",
                  action: () => {
                    (0, M.cQ)({
                      sticker: A,
                      location: { ...p, object: f.qAy.STICKER },
                    }),
                      (0, E.SA)(null == A ? void 0 : A.id);
                  },
                  label: O.Z.Messages.FAVORITE_ITEM,
                });
        if (null != R && t === d.S.EMOJI)
          return j
            ? (0, a.jsx)(u.MenuItem, {
                id: "unfavorite",
                action: () => (0, s.Xe)(R),
                label: O.Z.Messages.UNFAVORITE_ITEM,
              })
            : (0, a.jsx)(u.MenuItem, {
                id: "favorite",
                action: () => {
                  (0, r.J1)({
                    emoji: R,
                    location: { ...p, object: f.qAy.EMOJI },
                  }),
                    (0, s.$K)(R);
                },
                label: O.Z.Messages.FAVORITE_ITEM,
              });
      }
    },
  },
]);
//# sourceMappingURL=43f64140eea26f4f5678.js.map
