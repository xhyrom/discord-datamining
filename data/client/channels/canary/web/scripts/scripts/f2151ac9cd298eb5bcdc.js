"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17712"],
  {
    620021: function (l, n, t) {
      t.r(n), t(47120);
      var e = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(442837),
        s = t(544891),
        d = t(481060),
        u = t(493773),
        c = t(910693),
        v = t(314897),
        x = t(271383),
        N = t(430824),
        g = t(496675),
        m = t(594174),
        h = t(626135),
        k = t(51144),
        C = t(981631),
        f = t(388032),
        E = t(925172);
      function p(l) {
        let {
            disabled: n = !1,
            user: t,
            setNickname: r,
            nickname: o,
            error: s,
            hasNick: u,
          } = l,
          c = i.useRef(null),
          x = i.useCallback(() => {
            var l;
            r(""), null === (l = c.current) || void 0 === l || l.focus();
          }, [r]);
        return (0, e.jsxs)(e.Fragment, {
          children: [
            n || null == t || t.id === v.default.getId()
              ? null
              : (0, e.jsx)(d.Card, {
                  type: d.Card.Types.WARNING,
                  className: E.card,
                  children: (0, e.jsx)(d.Text, {
                    className: E.warning,
                    variant: "text-md/normal",
                    children: f.intl.string(f.t.dq3At7),
                  }),
                }),
            (0, e.jsx)(d.FormTitle, {
              className: a()(E.itemGroup, { [E.disabled]: n }),
              children: n
                ? f.intl.string(f.t.EyA4q6)
                : f.intl.string(f.t["621LJC"]),
            }),
            (0, e.jsx)(d.TextInput, {
              disabled: n,
              inputRef: c,
              maxLength: C.l$U,
              value: o,
              placeholder: k.ZP.getName(t),
              onChange: r,
              autoFocus: !0,
            }),
            null != s
              ? (0, e.jsx)(d.Text, {
                  variant: "text-xs/normal",
                  color: "text-danger",
                  className: E.nickError,
                  children: s,
                })
              : null,
            u && !n
              ? (0, e.jsx)(d.Button, {
                  look: d.Button.Looks.LINK,
                  color: d.Button.Colors.LINK,
                  size: d.Button.Sizes.NONE,
                  onClick: x,
                  className: E.reset,
                  children: f.intl.string(f.t.aE02R0),
                })
              : null,
          ],
        });
      }
      n.default = function (l) {
        var n;
        let {
            transitionState: t,
            user: r,
            guildId: a,
            onClose: v,
            analyticsSource: k,
            analyticsLocations: j,
          } = l,
          M = (0, o.e7)([x.ZP], () =>
            null != a ? x.ZP.getMember(a, r.id) : null,
          ),
          _ = (0, o.e7)([g.Z, m.default, N.Z], () => {
            var l;
            let n = N.Z.getGuild(a);
            return (
              null != n &&
              ((null === (l = m.default.getCurrentUser()) || void 0 === l
                ? void 0
                : l.id) === r.id
                ? g.Z.can(C.Plq.CHANGE_NICKNAME, n) ||
                  g.Z.can(C.Plq.MANAGE_NICKNAMES, n)
                : g.Z.canManageUser(C.Plq.MANAGE_NICKNAMES, r.id, n))
            );
          }),
          [A, b] = i.useState(!1),
          [I, B] = i.useState(
            null !== (n = null == M ? void 0 : M.nick) && void 0 !== n ? n : "",
          ),
          [G, L] = i.useState({});
        (0, u.Z)(() => {
          h.default.track(C.rMx.OPEN_MODAL, {
            type: "Change Server Identity",
            location: C.ZY5.GUILD_CHANNEL,
            source: k,
          });
        });
        let P = (0, c.sE)(a, {
            location: null == j ? void 0 : j[0],
            targetUserId: r.id,
          }),
          Z = i.useCallback(
            async (l) => {
              var n, t, e, i, o, d, u, x, N;
              l.preventDefault();
              let g = null;
              if (
                (I !==
                  (null !== (n = null == M ? void 0 : M.nick) && void 0 !== n
                    ? n
                    : "") && ((g = null != g ? g : {}).nick = I),
                null == g)
              ) {
                v();
                return;
              }
              try {
                b(!0),
                  await s.tn.patch({
                    url: C.ANM.GUILD_MEMBER(a, r.id),
                    body: g,
                    rejectWithError: !1,
                  }),
                  P(c.jQ.CHANGE_NICKNAME),
                  v();
              } catch (r) {
                let l;
                b(!1);
                let n =
                  null !==
                    (e =
                      null === (t = r.body) || void 0 === t
                        ? void 0
                        : t.errors) && void 0 !== e
                    ? e
                    : null;
                (null == n ? void 0 : n.nick) != null
                  ? (l =
                      (null === (d = n.nick) || void 0 === d
                        ? void 0
                        : null === (o = d._errors) || void 0 === o
                          ? void 0
                          : null === (i = o[0]) || void 0 === i
                            ? void 0
                            : i.message) || f.intl.string(f.t.xex86u))
                  : (null == n ? void 0 : n.username) != null &&
                    (l =
                      (null === (N = n.username) || void 0 === N
                        ? void 0
                        : null === (x = N._errors) || void 0 === x
                          ? void 0
                          : null === (u = x[0]) || void 0 === u
                            ? void 0
                            : u.message) || f.intl.string(f.t.xex86u)),
                  L({ nick: l });
              }
            },
            [a, I, v, r, M, P],
          );
        return (0, e.jsx)(d.ModalRoot, {
          "aria-label": f.intl.string(f.t["PKQB/P"]),
          transitionState: t,
          children: (0, e.jsxs)("form", {
            onSubmit: Z,
            children: [
              (0, e.jsx)(d.ModalHeader, {
                separator: !1,
                children: (0, e.jsx)(d.Heading, {
                  variant: "heading-lg/semibold",
                  children: f.intl.string(f.t.dilOFx),
                }),
              }),
              (0, e.jsx)(d.ModalContent, {
                className: E.modalContent,
                children: (0, e.jsx)(p, {
                  disabled: !_,
                  user: r,
                  error: G.nick,
                  nickname: I,
                  setNickname: B,
                  hasNick: (null == M ? void 0 : M.nick) != null,
                }),
              }),
              (0, e.jsxs)(d.ModalFooter, {
                children: [
                  (0, e.jsx)(d.Button, {
                    type: "submit",
                    disabled: A,
                    children: f.intl.string(f.t.R3BPHx),
                  }),
                  (0, e.jsx)(d.Button, {
                    onClick: v,
                    look: d.Button.Looks.LINK,
                    color: d.Button.Colors.PRIMARY,
                    children: f.intl.string(f.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    925172: function (l, n, t) {
      l.exports = {
        card: "card_fa7401",
        itemGroup: "itemGroup_fa7401",
        modalContent: "modalContent_fa7401",
        reset: "reset_fa7401",
        nickError: "nickError_fa7401",
        warning: "warning_fa7401",
        disabled: "disabled_fa7401",
      };
    },
  },
]);
//# sourceMappingURL=f2151ac9cd298eb5bcdc.js.map
