"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17712"],
  {
    620021: function (e, l, n) {
      n.r(l), n(47120);
      var a = n(735250),
        s = n(470079),
        t = n(120356),
        r = n.n(t),
        i = n(442837),
        o = n(544891),
        d = n(481060),
        u = n(910693),
        c = n(314897),
        N = n(271383),
        E = n(430824),
        C = n(496675),
        v = n(594174),
        M = n(626135),
        _ = n(51144),
        A = n(981631),
        g = n(689938),
        m = n(741836);
      function I(e) {
        let {
            disabled: l = !1,
            user: n,
            setNickname: t,
            nickname: i,
            error: o,
            hasNick: u,
          } = e,
          N = s.useRef(null),
          E = s.useCallback(() => {
            var e;
            t(""), null === (e = N.current) || void 0 === e || e.focus();
          }, [t]);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            l || null == n || n.id === c.default.getId()
              ? null
              : (0, a.jsx)(d.Card, {
                  type: d.Card.Types.WARNING,
                  className: m.card,
                  children: (0, a.jsx)(d.Text, {
                    className: m.warning,
                    variant: "text-md/normal",
                    children: g.Z.Messages.CHANGE_NICKNAME_WARNING,
                  }),
                }),
            (0, a.jsx)(d.FormTitle, {
              className: r()(m.itemGroup, { [m.disabled]: l }),
              children: l
                ? g.Z.Messages.CHANGE_IDENTITY_MODAL_CHANGE_NICKNAME_DISABLED
                : g.Z.Messages.NICKNAME,
            }),
            (0, a.jsx)(d.TextInput, {
              disabled: l,
              inputRef: N,
              maxLength: A.l$U,
              value: i,
              placeholder: _.ZP.getName(n),
              onChange: t,
              autoFocus: !0,
            }),
            null != o
              ? (0, a.jsx)(d.Text, {
                  variant: "text-xs/normal",
                  color: "text-danger",
                  className: m.nickError,
                  children: o,
                })
              : null,
            u && !l
              ? (0, a.jsx)(d.Button, {
                  look: d.Button.Looks.LINK,
                  color: d.Button.Colors.LINK,
                  size: d.Button.Sizes.NONE,
                  onClick: E,
                  className: m.reset,
                  children: g.Z.Messages.RESET_NICKNAME,
                })
              : null,
          ],
        });
      }
      l.default = function (e) {
        var l;
        let {
            transitionState: n,
            user: t,
            guildId: r,
            onClose: c,
            analyticsSource: _,
            analyticsLocations: h,
          } = e,
          k = (0, i.e7)([N.ZP], () =>
            null != r ? N.ZP.getMember(r, t.id) : null,
          ),
          x = (0, i.e7)([C.Z, v.default, E.Z], () => {
            var e;
            let l = E.Z.getGuild(r);
            return (
              null != l &&
              ((null === (e = v.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id) === t.id
                ? C.Z.can(A.Plq.CHANGE_NICKNAME, l) ||
                  C.Z.can(A.Plq.MANAGE_NICKNAMES, l)
                : C.Z.canManageUser(A.Plq.MANAGE_NICKNAMES, t.id, l))
            );
          }),
          [f, p] = s.useState(!1),
          [Z, G] = s.useState(
            null !== (l = null == k ? void 0 : k.nick) && void 0 !== l ? l : "",
          ),
          [j, b] = s.useState({});
        s.useEffect(() => {
          M.default.track(A.rMx.OPEN_MODAL, {
            type: "Change Server Identity",
            location: A.ZY5.GUILD_CHANNEL,
            source: _,
          });
        }, []);
        let L = (0, u.sE)(r, {
            location: null == h ? void 0 : h[0],
            targetUserId: t.id,
          }),
          R = s.useCallback(
            async (e) => {
              var l, n, a, s, i, d, N, E, C;
              e.preventDefault();
              let v = null;
              if (
                (Z !==
                  (null !== (l = null == k ? void 0 : k.nick) && void 0 !== l
                    ? l
                    : "") && ((v = null != v ? v : {}).nick = Z),
                null == v)
              ) {
                c();
                return;
              }
              try {
                p(!0),
                  await o.tn.patch({
                    url: A.ANM.GUILD_MEMBER(r, t.id),
                    body: v,
                  }),
                  L(u.jQ.CHANGE_NICKNAME),
                  c();
              } catch (t) {
                let e;
                p(!1);
                let l =
                  null !==
                    (a =
                      null === (n = t.body) || void 0 === n
                        ? void 0
                        : n.errors) && void 0 !== a
                    ? a
                    : null;
                (null == l ? void 0 : l.nick) != null
                  ? (e =
                      (null === (d = l.nick) || void 0 === d
                        ? void 0
                        : null === (i = d._errors) || void 0 === i
                          ? void 0
                          : null === (s = i[0]) || void 0 === s
                            ? void 0
                            : s.message) ||
                      g.Z.Messages.CHANGE_IDENTITY_MODAL_UNKNOWN_ERROR)
                  : (null == l ? void 0 : l.username) != null &&
                    (e =
                      (null === (C = l.username) || void 0 === C
                        ? void 0
                        : null === (E = C._errors) || void 0 === E
                          ? void 0
                          : null === (N = E[0]) || void 0 === N
                            ? void 0
                            : N.message) ||
                      g.Z.Messages.CHANGE_IDENTITY_MODAL_UNKNOWN_ERROR),
                  b({ nick: e });
              }
            },
            [r, Z, c, t, k, L],
          );
        return (0, a.jsx)(d.ModalRoot, {
          "aria-label": g.Z.Messages.CHANGE_IDENTITY,
          transitionState: n,
          children: (0, a.jsxs)("form", {
            onSubmit: R,
            children: [
              (0, a.jsx)(d.ModalHeader, {
                separator: !1,
                children: (0, a.jsx)(d.Heading, {
                  variant: "heading-lg/semibold",
                  children: g.Z.Messages.CHANGE_NICKNAME,
                }),
              }),
              (0, a.jsx)(d.ModalContent, {
                className: m.modalContent,
                children: (0, a.jsx)(I, {
                  disabled: !x,
                  user: t,
                  error: j.nick,
                  nickname: Z,
                  setNickname: G,
                  hasNick: (null == k ? void 0 : k.nick) != null,
                }),
              }),
              (0, a.jsxs)(d.ModalFooter, {
                children: [
                  (0, a.jsx)(d.Button, {
                    type: "submit",
                    disabled: f,
                    children: g.Z.Messages.SAVE,
                  }),
                  (0, a.jsx)(d.Button, {
                    onClick: c,
                    look: d.Button.Looks.LINK,
                    color: d.Button.Colors.PRIMARY,
                    children: g.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    741836: function (e, l, n) {
      e.exports = {
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
//# sourceMappingURL=7a1c36d27cdb5d3fee09.js.map
