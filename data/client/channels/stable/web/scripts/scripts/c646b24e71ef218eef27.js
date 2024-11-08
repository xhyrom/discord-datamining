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
        u = t(910693),
        c = t(314897),
        v = t(271383),
        x = t(430824),
        N = t(496675),
        g = t(594174),
        m = t(626135),
        h = t(51144),
        k = t(981631),
        C = t(388032),
        f = t(371301);
      function E(l) {
        let {
            disabled: n = !1,
            user: t,
            setNickname: r,
            nickname: o,
            error: s,
            hasNick: u,
          } = l,
          v = i.useRef(null),
          x = i.useCallback(() => {
            var l;
            r(""), null === (l = v.current) || void 0 === l || l.focus();
          }, [r]);
        return (0, e.jsxs)(e.Fragment, {
          children: [
            n || null == t || t.id === c.default.getId()
              ? null
              : (0, e.jsx)(d.Card, {
                  type: d.Card.Types.WARNING,
                  className: f.card,
                  children: (0, e.jsx)(d.Text, {
                    className: f.warning,
                    variant: "text-md/normal",
                    children: C.intl.string(C.t.dq3At7),
                  }),
                }),
            (0, e.jsx)(d.FormTitle, {
              className: a()(f.itemGroup, { [f.disabled]: n }),
              children: n
                ? C.intl.string(C.t.EyA4q6)
                : C.intl.string(C.t["621LJC"]),
            }),
            (0, e.jsx)(d.TextInput, {
              disabled: n,
              inputRef: v,
              maxLength: k.l$U,
              value: o,
              placeholder: h.ZP.getName(t),
              onChange: r,
              autoFocus: !0,
            }),
            null != s
              ? (0, e.jsx)(d.Text, {
                  variant: "text-xs/normal",
                  color: "text-danger",
                  className: f.nickError,
                  children: s,
                })
              : null,
            u && !n
              ? (0, e.jsx)(d.Button, {
                  look: d.Button.Looks.LINK,
                  color: d.Button.Colors.LINK,
                  size: d.Button.Sizes.NONE,
                  onClick: x,
                  className: f.reset,
                  children: C.intl.string(C.t.aE02R0),
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
            onClose: c,
            analyticsSource: h,
            analyticsLocations: p,
          } = l,
          M = (0, o.e7)([v.ZP], () =>
            null != a ? v.ZP.getMember(a, r.id) : null,
          ),
          _ = (0, o.e7)([N.Z, g.default, x.Z], () => {
            var l;
            let n = x.Z.getGuild(a);
            return (
              null != n &&
              ((null === (l = g.default.getCurrentUser()) || void 0 === l
                ? void 0
                : l.id) === r.id
                ? N.Z.can(k.Plq.CHANGE_NICKNAME, n) ||
                  N.Z.can(k.Plq.MANAGE_NICKNAMES, n)
                : N.Z.canManageUser(k.Plq.MANAGE_NICKNAMES, r.id, n))
            );
          }),
          [j, A] = i.useState(!1),
          [b, I] = i.useState(
            null !== (n = null == M ? void 0 : M.nick) && void 0 !== n ? n : "",
          ),
          [B, G] = i.useState({});
        i.useEffect(() => {
          m.default.track(k.rMx.OPEN_MODAL, {
            type: "Change Server Identity",
            location: k.ZY5.GUILD_CHANNEL,
            source: h,
          });
        }, []);
        let L = (0, u.sE)(a, {
            location: null == p ? void 0 : p[0],
            targetUserId: r.id,
          }),
          P = i.useCallback(
            async (l) => {
              var n, t, e, i, o, d, v, x, N;
              l.preventDefault();
              let g = null;
              if (
                (b !==
                  (null !== (n = null == M ? void 0 : M.nick) && void 0 !== n
                    ? n
                    : "") && ((g = null != g ? g : {}).nick = b),
                null == g)
              ) {
                c();
                return;
              }
              try {
                A(!0),
                  await s.tn.patch({
                    url: k.ANM.GUILD_MEMBER(a, r.id),
                    body: g,
                  }),
                  L(u.jQ.CHANGE_NICKNAME),
                  c();
              } catch (r) {
                let l;
                A(!1);
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
                            : i.message) || C.intl.string(C.t.xex86u))
                  : (null == n ? void 0 : n.username) != null &&
                    (l =
                      (null === (N = n.username) || void 0 === N
                        ? void 0
                        : null === (x = N._errors) || void 0 === x
                          ? void 0
                          : null === (v = x[0]) || void 0 === v
                            ? void 0
                            : v.message) || C.intl.string(C.t.xex86u)),
                  G({ nick: l });
              }
            },
            [a, b, c, r, M, L],
          );
        return (0, e.jsx)(d.ModalRoot, {
          "aria-label": C.intl.string(C.t["PKQB/P"]),
          transitionState: t,
          children: (0, e.jsxs)("form", {
            onSubmit: P,
            children: [
              (0, e.jsx)(d.ModalHeader, {
                separator: !1,
                children: (0, e.jsx)(d.Heading, {
                  variant: "heading-lg/semibold",
                  children: C.intl.string(C.t.dilOFx),
                }),
              }),
              (0, e.jsx)(d.ModalContent, {
                className: f.modalContent,
                children: (0, e.jsx)(E, {
                  disabled: !_,
                  user: r,
                  error: B.nick,
                  nickname: b,
                  setNickname: I,
                  hasNick: (null == M ? void 0 : M.nick) != null,
                }),
              }),
              (0, e.jsxs)(d.ModalFooter, {
                children: [
                  (0, e.jsx)(d.Button, {
                    type: "submit",
                    disabled: j,
                    children: C.intl.string(C.t.R3BPHx),
                  }),
                  (0, e.jsx)(d.Button, {
                    onClick: c,
                    look: d.Button.Looks.LINK,
                    color: d.Button.Colors.PRIMARY,
                    children: C.intl.string(C.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    371301: function (l, n, t) {
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
//# sourceMappingURL=c646b24e71ef218eef27.js.map
