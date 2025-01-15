"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["71888"],
  {
    621054: function (e) {
      e.exports = "/assets/a315359c0fd32511b45e.svg";
    },
    700582: function (e, t, n) {
      var l = n(200651),
        i = n(192379),
        a = n(481060),
        r = n(372900);
      t.Z = i.memo(function (e) {
        var t, n, s, o;
        let {
            user: c,
            size: u = a.AvatarSizes.SIZE_32,
            animate: d = !1,
            "aria-hidden": h = !1,
            ...f
          } = e,
          _ = i.useContext(r.Z);
        return (0, l.jsx)(a.Avatar, {
          src:
            ((t = c),
            (n = (0, a.getAvatarSize)(u)),
            (s = d),
            (o = _),
            t.getAvatarURL(o, n, s)),
          size: u,
          "aria-label": h ? void 0 : c.username,
          "aria-hidden": h,
          ...f,
        });
      });
    },
    724757: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var l = n(192379),
        i = n(924826),
        a = n(442837),
        r = n(607070);
      function s(e, t, n) {
        let s = (0, a.e7)([r.Z], () => r.Z.keyboardModeEnabled),
          o = l.useCallback(
            (e) => {
              let n = document.querySelector(e),
                l = t.current;
              null != n &&
                null != l &&
                (n.focus(), l.scrollIntoViewNode({ node: n, padding: 80 }));
            },
            [t],
          ),
          c = l.useCallback(
            () =>
              new Promise((e) => {
                let n = t.current;
                if (null == n) return e();
                n.scrollTo({
                  to: 0,
                  callback: () => requestAnimationFrame(() => e()),
                });
              }),
            [t],
          ),
          u = l.useCallback(
            () =>
              new Promise((e) => {
                let n = t.current;
                if (null == n) return e();
                n.scrollTo({
                  to: Number.MAX_SAFE_INTEGER,
                  callback: () => requestAnimationFrame(() => e()),
                });
              }),
            [t],
          );
        return (0, i.ZP)({
          id: e,
          isEnabled: s,
          setFocus: o,
          scrollToStart: c,
          scrollToEnd: u,
          orientation: null == n ? void 0 : n.orientation,
        });
      }
    },
    289823: function (e, t, n) {
      var l = n(200651),
        i = n(192379),
        a = n(120356),
        r = n.n(a),
        s = n(974674),
        o = n(438784),
        c = n(481060),
        u = n(686546),
        d = n(3682),
        h = n(640453);
      let f = {},
        _ = 1 / 4;
      function g(e) {
        let { height: t, fillColor: n } = e;
        return (0, l.jsx)("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: t / 2,
            backgroundColor: n,
            height: t,
            width: t * d.jR,
          },
          children: (0, l.jsx)(o.b, { className: h.dots, dotRadius: t * _ }),
        });
      }
      function m(e) {
        let { isTyping: t, statusCoords: n, status: i } = e,
          a = (0, c.useStatusFillColor)(c.StatusTypes.ONLINE);
        return t
          ? (0, l.jsx)("div", {
              style: { position: "absolute", top: n.y, left: n.x },
              children: (0, l.jsx)(g, { height: n.height, fillColor: a }),
            })
          : null != i
            ? (0, l.jsx)(c.Status, {
                size: n.height,
                status: i,
                style: { position: "absolute", top: n.y, left: n.x },
              })
            : null;
      }
      function E(e) {
        let { src: t, size: n } = e;
        return (0, l.jsx)("img", {
          className: h.circularImage,
          src: t,
          alt: "",
          width: n,
          height: n,
        });
      }
      let I = {
        [c.AvatarSizes.SIZE_16]: {
          default: u.QS.DIAGONAL_FACEPILE_16,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_16,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_16,
        },
        [c.AvatarSizes.SIZE_20]: {
          default: u.QS.DIAGONAL_FACEPILE_20,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_20,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_20,
        },
        [c.AvatarSizes.SIZE_24]: {
          default: u.QS.DIAGONAL_FACEPILE_24,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_24,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_24,
        },
        [c.AvatarSizes.SIZE_32]: {
          default: u.QS.DIAGONAL_FACEPILE_32,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_32,
        },
        [c.AvatarSizes.SIZE_40]: {
          default: u.QS.DIAGONAL_FACEPILE_32,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_32,
        },
        [c.AvatarSizes.SIZE_48]: {
          default: u.QS.DIAGONAL_FACEPILE_40,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_40,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_40,
        },
        [c.AvatarSizes.SIZE_56]: {
          default: u.QS.DIAGONAL_FACEPILE_56,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_56,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_56,
        },
        [c.AvatarSizes.SIZE_80]: {
          default: u.QS.DIAGONAL_FACEPILE_80,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_80,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_80,
        },
        [c.AvatarSizes.SIZE_120]: {
          default: u.QS.DIAGONAL_FACEPILE_120,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_120,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_120,
        },
      };
      t.Z = function (e) {
        var t, n, a;
        let {
            backSrc: o,
            frontSrc: _,
            size: g,
            isTyping: p,
            status: S,
            style: A,
            className: C,
            ...v
          } = e,
          { size: L } = c.AvatarSizeSpecs[g],
          {
            statusCoords: T,
            frontAvatarOffsetPx: b,
            frontAvatarSizePx: N,
            backAvatarSizePx: x,
          } = i.useMemo(() => {
            var e;
            let t = "".concat(L, "-").concat(p);
            return null !== (e = f[t]) && void 0 !== e
              ? e
              : (function (e, t, n) {
                  let l = c.AvatarSizeSpecs[e],
                    i = l.size / (d.z3 + d.o),
                    a = i * d.z3,
                    r = i * d.o,
                    o = {
                      statusCoords: (0, s.Vq)(l, c.StatusTypes.ONLINE, !1, t),
                      frontAvatarSizePx: a,
                      backAvatarSizePx: i,
                      frontAvatarOffsetPx: r,
                      frontAvatarCenter: r + a / 2,
                    };
                  return (f[n] = o), o;
                })(g, p, t);
          }, [L, p, g]);
        let P =
          ((t = null != S),
          (n = p),
          (a = g),
          n ? I[a].typing : t ? I[a].status : I[a].default);
        return (0, l.jsxs)("div", {
          style: { width: L, height: L, ...A },
          "aria-label": v["aria-label"],
          "aria-hidden": v["aria-hidden"],
          className: r()(h.container, C),
          children: [
            (0, l.jsxs)(u.ZP, {
              mask: P,
              height: L,
              width: L,
              children: [
                (0, l.jsx)("img", { src: o, alt: "", width: x, height: x }),
                (0, l.jsx)("div", {
                  style: { position: "absolute", top: b, left: b },
                  children: (0, l.jsx)(E, {
                    src: _,
                    size: N,
                    isTyping: p,
                    status: S,
                  }),
                }),
              ],
            }),
            (0, l.jsx)(m, { statusCoords: T, status: S, isTyping: p }),
          ],
        });
      };
    },
    859155: function (e, t, n) {
      n(411104);
      var l = n(991637),
        i = n.n(l),
        a = n(388123),
        r = n(904245),
        s = n(761080),
        o = n(957730),
        c = n(592125),
        u = n(496675),
        d = n(784384);
      let h = {
        async sendForward(e, t, n) {
          let l = c.Z.getChannel(t),
            i = c.Z.getChannel(e.channel_id),
            h = (null == n ? void 0 : n.isICYMIGameContentForwarding)
              ? s.KF
              : null == i
                ? void 0
                : i.guild_id;
          if (null == i && null == h)
            throw Error("Unable to find original channel for message");
          if (null == l)
            throw Error("Unable to find destination channel for message");
          let f = o.ZP.parse(l, ""),
            _ = {
              guild_id: h,
              channel_id: e.channel_id,
              message_id: e.id,
              type: a.U.FORWARD,
              forward_only:
                (null == n ? void 0 : n.onlyAttachmentIds) != null ||
                (null == n ? void 0 : n.onlyEmbedIndices) != null
                  ? {
                      attachment_ids: n.onlyAttachmentIds,
                      embed_indices: n.onlyEmbedIndices,
                    }
                  : void 0,
            };
          await r.Z.sendMessage(l.id, f, !1, {
            messageReference: _,
            eagerDispatch: !1,
          }),
            (null == n ? void 0 : n.withMessage) != null &&
              !(0, d.pU)(l, u.Z) &&
              (await r.Z.sendMessage(l.id, o.ZP.parse(l, n.withMessage), !1));
        },
        sendForwards: (e, t, n) => i()(t.map((t) => h.sendForward(e, t, n))),
      };
      t.Z = h;
    },
    819727: function (e, t, n) {
      n.d(t, {
        G: function () {
          return l;
        },
      });
      let l = 5;
    },
    784384: function (e, t, n) {
      n.d(t, {
        HY: function () {
          return S;
        },
        nm: function () {
          return p;
        },
        pU: function () {
          return A;
        },
        y: function () {
          return C;
        },
      }),
        n(47120),
        n(390547);
      var l = n(192379),
        i = n(106351),
        a = n(442837),
        r = n(933557),
        s = n(987509),
        o = n(926491),
        c = n(378233),
        u = n(131704),
        d = n(592125),
        h = n(496675),
        f = n(699516),
        _ = n(594174),
        g = n(408433),
        m = n(823379),
        E = n(981631),
        I = n(388032);
      function p(e) {
        let t = e.map(s.hl).find(m.lm),
          n = (0, a.e7)([d.Z], () => d.Z.getChannel(t), [t]);
        return l.useMemo(
          () => (null != n ? n : (0, u.kt)({ id: "1", type: i.d.DM })),
          [n],
        );
      }
      function S(e, t, n) {
        let l = n instanceof u.Sf;
        if (t.isNSFW() && !(l && n.isNSFW()))
          return { label: I.intl.string(I.t.KgPx1N) };
        if (l && (0, u.Km)(n.type)) {
          if (
            (e.attachments.length > 0 ||
              e.messageSnapshots.some(
                (e) => e.message.attachments.length > 0,
              )) &&
            !h.Z.can(E.Plq.ATTACH_FILES, n)
          )
            return { label: I.intl.string(I.t.P7yvbm) };
          if (
            (e.embeds.length > 0 ||
              e.messageSnapshots.some((e) => e.message.embeds.length > 0)) &&
            !(0, g.eC)(n, h.Z) &&
            !(0, g.En)(e)
          )
            return { label: I.intl.string(I.t.Wr4RIS) };
          let t = [
            ...(0, c.cv)(e),
            ...e.messageSnapshots.flatMap((e) => {
              let { message: t } = e;
              return (0, c.cv)(t);
            }),
          ];
          if (
            t.length > 0 &&
            !h.Z.can(E.Plq.USE_EXTERNAL_STICKERS, n) &&
            t.some((e) =>
              (function (e, t) {
                let n = o.Z.getStickerById(e.id);
                return (
                  !!(null != n && (0, c.J8)(n)) &&
                  (n.guild_id !== t.guild_id || void 0)
                );
              })(e, n),
            )
          )
            return { label: I.intl.string(I.t["0Yyrub"]) };
          if (
            (e.hasFlag(E.iLy.IS_VOICE_MESSAGE) ||
              e.messageSnapshots.some((e) =>
                e.message.hasFlag(E.iLy.IS_VOICE_MESSAGE),
              )) &&
            !h.Z.can(E.Plq.SEND_VOICE_MESSAGES, n)
          )
            return { label: I.intl.string(I.t.quj4DQ) };
        }
      }
      function A(e, t) {
        return (
          null != e.rateLimitPerUser &&
          !!(e.rateLimitPerUser > 0) &&
          !(t.can(E.Plq.MANAGE_CHANNELS, e) || t.can(E.Plq.MANAGE_MESSAGES, e))
        );
      }
      function C(e) {
        let t = (0, a.Wu)(
          [d.Z, h.Z],
          () =>
            e
              .map((e) => {
                let { type: t, id: n } = e;
                return "channel" === t ? d.Z.getChannel(n) : null;
              })
              .filter(m.lm)
              .filter((e) => A(e, h.Z)),
          [e],
        );
        return (0, a.Wu)(
          [_.default, f.Z],
          () => t.map((e) => (0, r.F6)(e, _.default, f.Z, !0)),
          [t],
        );
      }
    },
    318616: function (e, t, n) {
      n.d(t, {
        c: function () {
          return r;
        },
      });
      var l = n(442837),
        i = n(496675),
        a = n(408433);
      function r(e) {
        var t, n, r;
        let { message: s, channel: o, forwardOptions: c } = e,
          u = null == c ? void 0 : c.onlyAttachmentIds,
          d = null == c ? void 0 : c.onlyEmbedIndices,
          h =
            null !==
              (r =
                null === (t = s.messageSnapshots[0]) || void 0 === t
                  ? void 0
                  : t.message) && void 0 !== r
              ? r
              : s,
          f = h.attachments;
        null != u
          ? (f = h.attachments.filter((e) => u.includes(e.id)))
          : null != d && (f = []);
        let _ = [];
        return (
          !(0, l.e7)(
            [i.Z],
            () => null != o && !(0, a.eC)(o, i.Z) && (0, a.En)(s),
          ) &&
            ((_ = h.embeds),
            null != d
              ? (_ = h.embeds.filter((e, t) => d.includes(t)))
              : null != u && (_ = [])),
          (null != d || ("" === h.content && _.length > 0)) &&
            (h = h.set("content", _.map((e) => e.url).join("\n"))),
          "" === h.content &&
            (null === (n = h.embeds[0]) || void 0 === n
              ? void 0
              : n.rawDescription) != null &&
            (h = h.set("content", h.embeds[0].rawDescription)),
          {
            attachments: f,
            embeds: _,
            hasContent: "" !== h.content && null == u,
            contentMessage: h,
          }
        );
      }
    },
    895442: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var l = n(592125),
        i = n(430824),
        a = n(594174),
        r = n(981631);
      function s(e) {
        if (!e.isPrivate()) {
          let t = i.Z.getGuild(e.guild_id);
          return null != t && t.hasFeature(r.oNc.INTERNAL_EMPLOYEE_ONLY);
        }
        return e.recipients.every((e) => {
          let t = a.default.getUser(e);
          return null != t && t.isStaff();
        });
      }
      function o(e, t) {
        var n;
        if (
          !(null === (n = a.default.getCurrentUser()) || void 0 === n
            ? void 0
            : n.isStaff())
        )
          return !1;
        let i = l.Z.getChannel(e.channel_id);
        return (
          !!(null != i && s(i)) &&
          t.some((e) => {
            let t = l.Z.getChannel(e);
            return !(null == t || t.isPrivate()) && !s(t);
          })
        );
      }
    },
    757853: function (e, t, n) {
      n.d(t, {
        F: function () {
          return W;
        },
        G: function () {
          return l;
        },
      }),
        n(47120);
      var l,
        i,
        a = n(200651),
        r = n(192379),
        s = n(120356),
        o = n.n(s),
        c = n(913527),
        u = n.n(c),
        d = n(91192),
        h = n(442837),
        f = n(481060),
        _ = n(700582),
        g = n(493773),
        m = n(724757),
        E = n(212819),
        I = n(933557),
        p = n(266076),
        S = n(810123),
        A = n(448486),
        C = n(987509),
        v = n(592125),
        L = n(430824),
        T = n(158776),
        b = n(306680),
        N = n(699516),
        x = n(594174),
        P = n(626135),
        y = n(55935),
        Z = n(823379),
        O = n(51144),
        R = n(784384),
        w = n(981631),
        D = n(490897),
        M = n(388032),
        j = n(317536);
      function U(e) {
        let {
            message: t,
            destination: n,
            rowMode: l,
            icon: i,
            label: s,
            subLabel: c,
            selected: u,
            disabled: h,
            onPressDestination: _,
            "aria-setsize": m,
            "aria-posinset": E,
          } = e,
          I = (0, d.JA)(n.id),
          [p, S] = r.useState(!1),
          A = r.useRef(!1),
          C = r.useCallback(() => {
            if ("send" === l) {
              S(!0), (A.current = !0);
              return;
            }
            null == _ || _(n);
          }, [l, _, n]),
          v = r.useCallback(() => {
            P.default.track(w.rMx.FORWARD_ONE_TAP_VIEW, {
              channel_id: t.channel_id,
              message_id: t.id,
            }),
              (A.current = !1),
              null == _ ||
                _(n, { transitionToDestination: !0, closeAfterSend: !0 });
          }, [t.channel_id, t.id, _, n]),
          L = r.useCallback(() => {
            S(!1),
              (A.current = !1),
              P.default.track(w.rMx.FORWARD_ONE_TAP_UNDO, {
                channel_id: t.channel_id,
                message_id: t.id,
              });
          }, [t]);
        return (
          (0, g.Z)(() => () => {
            A.current &&
              ((A.current = !1),
              null == _ ||
                _(n, { transitionToDestination: !1, closeAfterSend: !1 }));
          }),
          (0, a.jsxs)(f.Clickable, {
            className: o()(j.destinationRow, { [j.disabled]: h }),
            onClick: h || p ? void 0 : C,
            "aria-selected": u,
            "aria-setsize": m,
            "aria-posinset": E,
            ...I,
            children: [
              (0, a.jsxs)("div", {
                className: j.identity,
                children: [
                  (0, a.jsx)("div", { className: j.iconWrapper, children: i }),
                  (0, a.jsxs)("div", {
                    className: j.labels,
                    children: [
                      (0, a.jsx)(f.Text, {
                        tag: "strong",
                        className: j.label,
                        variant: "text-md/semibold",
                        lineClamp: 1,
                        children: s,
                      }),
                      (0, a.jsx)(f.Text, {
                        className: j.subLabel,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: c,
                      }),
                    ],
                  }),
                ],
              }),
              "toggle" === l &&
                !h &&
                (0, a.jsx)(f.Checkbox, {
                  type: f.Checkbox.Types.INVERTED,
                  displayOnly: !0,
                  size: 24,
                  value: u,
                  className: j.checkbox,
                }),
              "send" === l &&
                !h &&
                (0, a.jsxs)("div", {
                  className: j.actions,
                  children: [
                    p
                      ? (0, a.jsx)(f.Button, {
                          size: f.Button.Sizes.SMALL,
                          color: f.Button.Colors.PRIMARY,
                          look: f.Button.Looks.LINK,
                          onClick: v,
                          children: M.intl.string(M.t["HO/oXl"]),
                        })
                      : (0, a.jsx)("div", {
                          className: o()(
                            (0, f.getButtonStyle)({
                              size: f.Button.Sizes.SMALL,
                              color: f.Button.Colors.BRAND,
                            }),
                            j.fauxButton,
                          ),
                          children: M.intl.string(M.t.TXNS7e),
                        }),
                    p &&
                      (0, a.jsx)(f.Button, {
                        size: f.Button.Sizes.SMALL,
                        color: f.Button.Colors.BRAND,
                        look: f.Button.Looks.OUTLINED,
                        onClick: L,
                        children: M.intl.string(M.t.KyUKhY),
                      }),
                  ],
                }),
            ],
          })
        );
      }
      function k(e) {
        let { user: t, subLabel: n, ...l } = e,
          i = O.ZP.useName(t),
          r = O.ZP.useUserTag(t, { decoration: "never" }),
          s = (0, h.e7)([N.Z], () => N.Z.getNickname(t.id)),
          o = (0, h.e7)([T.Z], () => T.Z.getStatus(t.id));
        return (0, a.jsx)(U, {
          ...l,
          icon: (0, a.jsx)(_.Z, {
            "aria-hidden": !0,
            size: f.AvatarSizes.SIZE_32,
            user: t,
            status: o,
          }),
          label: null != s ? s : i,
          subLabel: null != n ? n : r,
        });
      }
      function F(e) {
        let { channel: t, subLabel: n, ...l } = e,
          i = (0, I.ZP)(t),
          r = (0, A._)(t);
        return (0, a.jsx)(U, {
          ...l,
          icon: (0, a.jsx)(p.Z, {
            "aria-hidden": !0,
            size: f.AvatarSizes.SIZE_32,
            channel: t,
            experimentLocation: "forward-modal",
          }),
          label: i,
          subLabel: null != n ? n : r,
        });
      }
      function G(e) {
        let { channel: t, subLabel: n, ...l } = e,
          i = (0, h.e7)([L.Z], () =>
            L.Z.getGuild(null == t ? void 0 : t.guild_id),
          ),
          r = (0, I.ZP)(t),
          s = (0, h.e7)([v.Z, x.default, N.Z], () => {
            let e = v.Z.getChannel(t.parent_id);
            return null == e ? null : (0, I.F6)(e, x.default, N.Z, !1);
          }),
          o = (0, h.e7)([b.ZP], () =>
            b.ZP.lastMessageTimestamp(t.id, D.W.CHANNEL),
          ),
          c = null == i ? void 0 : i.name;
        if (t.isThread() || t.isForumPost()) {
          let e = t.isForumPost() ? f.ForumIcon : f.TextIcon;
          c = (0, a.jsxs)("div", {
            className: j.threadSubLabel,
            children: [
              (0, a.jsx)(e, {
                color: f.tokens.colors.TEXT_SECONDARY,
                className: j.subLabelIcon,
              }),
              (0, a.jsx)(f.Text, {
                variant: "text-xs/medium",
                color: "text-secondary",
                lineClamp: 1,
                children: s,
              }),
              null != o
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(f.Text, {
                        className: j.subLabelSeparator,
                        variant: "text-xs/medium",
                        color: "text-secondary",
                        children: "•",
                      }),
                      (0, a.jsx)(f.Text, {
                        variant: "text-xs/medium",
                        color: "text-secondary",
                        children: (0, y.Xf)(u()(o)),
                      }),
                    ],
                  })
                : null,
            ],
          });
        }
        return (0, a.jsx)(U, {
          ...l,
          icon: (0, a.jsx)(S.Z, { size: S.E.SMALL_32, guild: i, channel: t }),
          label: r,
          subLabel: null != n ? n : c,
        });
      }
      function W(e) {
        let {
            rowData: t,
            rowMode: n,
            message: l,
            originChannel: i,
            selectedDestinations: s,
            handleToggleDestination: o,
            disableSelection: c,
            ...u
          } = e,
          h = r.useMemo(() => [t.length], [t.length]),
          _ = r.useCallback(() => 48, []),
          g = r.useMemo(() => {
            var e;
            return null !== (e = null == s ? void 0 : s.map(C.hC)) &&
              void 0 !== e
              ? e
              : [];
          }, [s]),
          I = r.useCallback(
            (e) => {
              let { section: r, row: s } = e;
              if (r > 0) return;
              let { type: u, record: d } = t[s];
              if (u === E.h8.HEADER) return;
              let h =
                  u === E.h8.USER
                    ? { type: "user", id: d.id }
                    : { type: "channel", id: d.id },
                f = (0, C.hC)(h),
                _ = (0, R.HY)(l, i, d),
                m = g.includes(f),
                I = {
                  key: f,
                  message: l,
                  destination: h,
                  rowMode: n,
                  subLabel: null != _ ? _.label : void 0,
                  disabled: (c && !m) || null != _,
                  selected: m,
                  onPressDestination: o,
                  "aria-posinset": s + 1,
                  "aria-setsize": t.length,
                };
              if (u === E.h8.USER) return (0, a.jsx)(k, { user: d, ...I });
              if (u === E.h8.GROUP_DM)
                return (0, a.jsx)(F, { channel: d, ...I });
              if (u === E.h8.TEXT_CHANNEL || u === E.h8.VOICE_CHANNEL)
                return (0, a.jsx)(G, { channel: d, ...I });
              else (0, Z.vE)(u);
            },
            [c, o, l, i, t, n, g],
          ),
          p = r.useRef(null),
          S = (0, m.Z)("forward-modal", p);
        return (0, a.jsx)(d.bG, {
          navigator: S,
          children: (0, a.jsx)(d.SJ, {
            children: (e) => {
              let { ref: t, ...n } = e;
              return (0, a.jsx)(f.ModalListContent, {
                scrollerRef: (e) => {
                  var n;
                  (p.current = e),
                    (t.current =
                      null !== (n = null == e ? void 0 : e.getScrollerNode()) &&
                      void 0 !== n
                        ? n
                        : null);
                },
                ...n,
                ...u,
                sections: h,
                sectionHeight: 0,
                renderRow: I,
                rowHeight: _,
              });
            },
          }),
        });
      }
      ((i = l || (l = {})).TOGGLE = "toggle"), (i.SEND = "send");
    },
    388275: function (e, t, n) {
      n.d(t, {
        n: function () {
          return p;
        },
      }),
        n(47120);
      var l = n(200651),
        i = n(192379),
        a = n(442837),
        r = n(481060),
        s = n(430742),
        o = n(541716),
        c = n(752305),
        u = n(893718),
        d = n(849522),
        h = n(703558),
        f = n(784384),
        _ = n(822869),
        g = n(912332),
        m = n(646746),
        E = n(388032),
        I = n(317536);
      function p(e) {
        let {
            message: t,
            forwardOptions: n,
            sendLabel: p,
            canSend: S,
            selectedDestinations: A,
            isSending: C,
            onSend: v,
            showPreview: L,
          } = e,
          T = (0, d.Z)(),
          b = (0, f.nm)(A),
          N = (0, f.y)(A),
          x = (0, _.Ad)(),
          P = (0, a.e7)([h.Z], () =>
            h.Z.getDraft(t.channel_id, h.d.ForwardContextMessage),
          ),
          [y, Z] = i.useState(() => (0, c.eK)(P)),
          { textValue: O, richValue: R } = y,
          [w, D] = i.useState(!1),
          M = i.useCallback(() => D(!0), []),
          j = i.useCallback(() => D(!1), []),
          U = i.useCallback(
            (e, n, l) => {
              Z({ textValue: n, richValue: l }),
                s.Z.saveDraft(t.channel_id, n, h.d.ForwardContextMessage),
                x(t.channel_id, t.id);
            },
            [x, t],
          ),
          k = i.useCallback(() => {
            s.Z.clearDraft(t.channel_id, h.d.ForwardContextMessage), v(O);
          }, [t.channel_id, v, O]),
          F = i.useCallback(
            () =>
              !S || O.length > T
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (k(),
                  Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [k, O, T, S],
          );
        return (0, l.jsxs)(r.ModalFooter, {
          className: I.footerWithMessage,
          children: [
            L &&
              (0, l.jsx)("div", {
                className: I.forwardPreviewWrapper,
                children: (0, l.jsx)(m.O, {
                  message: t,
                  forwardOptions: n,
                  channel: b,
                }),
              }),
            (0, l.jsxs)("div", {
              className: I.footerWarningWrapper,
              children: [
                (0, l.jsxs)("div", {
                  className: I.footerButtons,
                  children: [
                    (0, l.jsx)(u.Z, {
                      innerClassName: I.messageInput,
                      onChange: U,
                      placeholder: E.intl.string(E.t.ZroO3N),
                      channel: b,
                      textValue: O,
                      richValue: R,
                      type: o.Ie.FORWARD_MESSAGE_INPUT,
                      onBlur: j,
                      onFocus: M,
                      focused: w,
                      onSubmit: F,
                      parentModalKey: g.so,
                      autoCompletePosition: "bottom",
                      emojiPickerCloseOnModalOuterClick: !0,
                      disableThemedBackground: !0,
                    }),
                    (0, l.jsx)(r.Button, {
                      className: I.sendWithMessage,
                      submitting: C,
                      disabled: !S || O.length > T,
                      onClick: k,
                      children: p,
                    }),
                  ],
                }),
                N.length > 0 &&
                  O.length > 0 &&
                  (0, l.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-warning",
                    children: E.intl.format(E.t.xJFpio, {
                      count: N.length,
                      channelNames: N.join(", "),
                    }),
                  }),
              ],
            }),
          ],
        });
      }
    },
    930864: function (e, t, n) {
      n.r(t),
        n.d(t, {
          ForwardModal: function () {
            return P;
          },
        }),
        n(47120);
      var l = n(200651),
        i = n(192379),
        a = n(392711),
        r = n(442837),
        s = n(481060),
        o = n(348245),
        c = n(359110),
        u = n(987509),
        d = n(72214),
        h = n(592125),
        f = n(375954),
        _ = n(934415),
        g = n(572004),
        m = n(823379),
        E = n(859155),
        I = n(822869),
        p = n(346610),
        S = n(895442),
        A = n(757853),
        C = n(388275),
        v = n(912332),
        L = n(646746),
        T = n(819727),
        b = n(388032),
        N = n(317536),
        x = n(621054);
      function P(e) {
        let {
            message: t,
            initialSelectedDestinations: P,
            forwardOptions: y,
            onClose: Z,
            onRequestSent: O,
            ...R
          } = e,
          { channel_id: w, id: D } = t,
          {
            hasOneTapSendButton: M,
            hasMessageInput: j,
            hasPreview: U,
          } = (0, p.yk)({ location: "ForwardModal" }),
          k = i.useMemo(() => (0, u.dL)(w), [w]),
          [F, G] = i.useState(!1),
          W = (0, r.e7)(
            [f.Z],
            () => {
              var e;
              return null !== (e = f.Z.getMessage(t.channel_id, t.id)) &&
                void 0 !== e
                ? e
                : t;
            },
            [t],
          ),
          B = (0, r.e7)([h.Z], () => h.Z.getChannel(w), [w]),
          H = (0, I.ZF)(),
          z = (0, I.mh)(),
          Q = i.useRef(0),
          V = i.useRef(0),
          [K, Y] = i.useState(P),
          q = K.length,
          X = q >= T.G,
          [J, $] = i.useState(""),
          { results: ee, updateSearchText: et } = (0, d.s)({
            selectedDestinations: K,
            originDestination: k,
            includeMissingDMs: !0,
          }),
          en = i.useCallback(
            (e) => {
              $(e), et(e), (V.current += 1), "" !== e && z(w, D);
            },
            [w, D, z, et],
          ),
          el = i.useCallback(() => {
            (0, I.sF)({
              channelId: w,
              messageId: D,
              numDestinationChanges: Q.current,
              numQueryChanges: V.current,
            }),
              Z();
          }, [w, D, Z]),
          ei = i.useCallback(() => {
            var e;
            let t =
                null === (e = h.Z.getChannel(w)) || void 0 === e
                  ? void 0
                  : e.guild_id,
              n = (0, _.wR)(t, w, D);
            (0, s.showToast)(
              (0, s.createToast)(
                b.intl.string(b.t["L/PwZW"]),
                s.ToastType.LINK,
              ),
            ),
              (0, g.JG)(n),
              (0, I.xp)(w, D);
          }, [w, D]),
          ea = i.useCallback(() => {
            $("");
          }, [$]),
          er = i.useRef(null);
        i.useEffect(() => {
          if ("" === J) {
            var e;
            null === (e = er.current) || void 0 === e || e.focus();
          }
        }, [J]);
        let es = i.useMemo(
            () =>
              (0, a.throttle)(
                () => {
                  (0, s.showToast)(
                    (0, s.createToast)(
                      b.intl.string(b.t.kwmYkp),
                      s.ToastType.FORWARD,
                    ),
                  );
                },
                3e3,
                { leading: !0, trailing: !1 },
              ),
            [],
          ),
          eo = i.useCallback(
            (e) => {
              H(w, D, "" !== J),
                Y((t) => {
                  let n = t.findIndex((t) => {
                    let { type: n, id: l } = t;
                    return n === e.type && l === e.id;
                  });
                  if (-1 === n)
                    return X ? t : ($(""), (Q.current += 1), [e, ...t]);
                  let l = [...t];
                  return l.splice(n, 1), (Q.current += 1), l;
                });
            },
            [w, X, D, J, H],
          ),
          ec = i.useCallback(
            async function (e) {
              var i;
              let {
                  withMessage: a,
                  transitionToDestination: r,
                  closeAfterSend: d,
                } = arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
                _ = null !== (i = f.Z.getMessage(w, D)) && void 0 !== i ? i : t;
              if (null == _) {
                (0, s.showToast)(
                  (0, s.createToast)(
                    b.intl.string(b.t.R0RpRU),
                    s.ToastType.FAILURE,
                  ),
                );
                return;
              }
              G(!0);
              let g = (await Promise.all(e.map(u.qx))).filter(m.lm);
              if (
                (0, S.Z)(_, g) &&
                !(await new Promise((e) => {
                  (0, s.openModalLazy)(async () => {
                    let { default: t } = await n
                      .e("88643")
                      .then(n.bind(n, 466080));
                    return (n) =>
                      (0, l.jsx)(t, {
                        ...n,
                        onConfirm: () => e(!0),
                        onBack: () => e(!1),
                      });
                  });
                }))
              ) {
                G(!1);
                return;
              }
              d && (0, v.mc)(),
                null == O || O(),
                r &&
                  (await o.Z.fetchMessages({ channelId: g[0] }),
                  (0, c.Kh)(g[0], { openTextInVoiceIfVoiceChannel: !0 }));
              let p = await E.Z.sendForwards(_, g, { ...y, withMessage: a }),
                A = g.some((e) => {
                  let t = h.Z.getChannel(e);
                  return null != t && t.rateLimitPerUser > 0;
                });
              if (
                p.every((e) => {
                  let { status: t } = e;
                  return "fulfilled" === t;
                })
              ) {
                (0, I.gP)({
                  channelId: w,
                  messageId: D,
                  hasError: !1,
                  hasContextMessage: null != a && "" !== a,
                  numDestinations: g.length,
                  numDestinationChanges: Q.current,
                  numQueryChanges: V.current,
                  anyDestinationHasSlowmode: A,
                }),
                  es();
                return;
              }
              (0, I.gP)({
                channelId: w,
                messageId: D,
                hasError: !0,
                hasContextMessage: null != a && "" !== a,
                numDestinations: g.length,
                numDestinationChanges: Q.current,
                numQueryChanges: V.current,
                anyDestinationHasSlowmode: A,
              });
              let C = e.filter((e, t) => "rejected" === p[t].status);
              (0, v.Np)({
                message: _,
                failedDestinations: C,
                forwardOptions: y,
              });
            },
            [w, y, D, t, O, es],
          ),
          eu = i.useCallback(
            (e) => {
              ec(K, {
                withMessage: e,
                transitionToDestination: 1 === K.length,
                closeAfterSend: !0,
              });
            },
            [ec, K],
          ),
          ed = i.useCallback(() => eu(), [eu]),
          eh = i.useCallback(
            function (e) {
              let { transitionToDestination: t, closeAfterSend: n } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              ec([e], { transitionToDestination: t, closeAfterSend: n });
            },
            [ec],
          );
        if (null == W || null == B) return null;
        let ef =
            ee.length > 0
              ? (0, l.jsx)(A.F, {
                  paddingBottom: 16,
                  paddingTop: 16,
                  rowData: ee,
                  rowMode: M ? A.G.SEND : A.G.TOGGLE,
                  message: W,
                  originChannel: B,
                  handleToggleDestination: M ? eh : eo,
                  selectedDestinations: K,
                  disableSelection: X,
                })
              : (0, l.jsxs)(s.ModalContent, {
                  className: N.noResults,
                  children: [
                    (0, l.jsx)("img", {
                      className: N.noResultsImg,
                      src: x,
                      alt: "",
                    }),
                    (0, l.jsx)(s.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: b.intl.string(b.t.V6nAfH),
                    }),
                  ],
                }),
          e_ =
            q <= 1
              ? b.intl.string(b.t.TXNS7e)
              : b.intl.formatToPlainString(b.t.jWtYUl, { count: q });
        return (0, l.jsxs)(s.ModalRoot, {
          className: N.modal,
          "aria-label": b.intl.string(b.t["+SkRRk"]),
          ...R,
          children: [
            (0, l.jsxs)(s.ModalHeader, {
              className: N.header,
              children: [
                (0, l.jsxs)("div", {
                  className: N.titleLine,
                  children: [
                    (0, l.jsx)("div", {
                      className: N.title,
                      children: (0, l.jsx)(s.HeadingLevel, {
                        component: (0, l.jsx)(s.Heading, {
                          variant: "heading-lg/semibold",
                          children: b.intl.string(b.t["+SkRRk"]),
                        }),
                        children: X
                          ? (0, l.jsx)(s.Text, {
                              variant: "text-sm/normal",
                              color: "text-warning",
                              children: b.intl.format(b.t["3Fbkio"], {
                                count: T.G,
                              }),
                            })
                          : (M || j) &&
                            (0, l.jsx)(s.Heading, {
                              variant: "heading-sm/normal",
                              color: "header-muted",
                              children: b.intl.string(b.t["VA+btL"]),
                            }),
                      }),
                    }),
                    (0, l.jsx)(s.ModalCloseButton, {
                      className: N.closeButton,
                      onClick: el,
                    }),
                  ],
                }),
                M &&
                  U &&
                  (0, l.jsx)("div", {
                    className: N.forwardPreviewWrapperInset,
                    children: (0, l.jsx)(L.O, {
                      message: W,
                      forwardOptions: y,
                    }),
                  }),
                (0, l.jsx)(s.SearchBar, {
                  ref: er,
                  size: s.SearchBar.Sizes.MEDIUM,
                  query: J,
                  onChange: en,
                  onClear: ea,
                  placeholder: b.intl.string(b.t["5h0QOD"]),
                  "aria-label": b.intl.string(b.t["5h0QOD"]),
                  autoFocus: !0,
                }),
              ],
            }),
            ef,
            !M &&
              (j
                ? (0, l.jsx)(C.n, {
                    message: W,
                    forwardOptions: y,
                    sendLabel: e_,
                    canSend: q > 0,
                    selectedDestinations: K,
                    isSending: F,
                    onSend: eu,
                    showPreview: U,
                  })
                : (0, l.jsxs)(s.ModalFooter, {
                    className: N.footer,
                    children: [
                      (0, l.jsx)(s.Button, {
                        submitting: F,
                        disabled: 0 === q,
                        onClick: ed,
                        children: e_,
                      }),
                      (0, l.jsx)(s.Button, {
                        onClick: ei,
                        look: s.Button.Looks.OUTLINED,
                        color: s.Button.Colors.PRIMARY,
                        children: b.intl.string(b.t.WqhZsr),
                      }),
                    ],
                  })),
          ],
        });
      }
    },
    646746: function (e, t, n) {
      n.d(t, {
        O: function () {
          return E;
        },
      });
      var l = n(200651),
        i = n(192379),
        a = n(120356),
        r = n.n(a),
        s = n(392711),
        o = n(481060),
        c = n(686546),
        u = n(124347),
        d = n(499376),
        h = n(937889),
        f = n(930282),
        _ = n(318616),
        g = n(388032),
        m = n(899134);
      function E(e) {
        let { message: t, forwardOptions: n, channel: a } = e,
          {
            attachments: E,
            embeds: I,
            hasContent: p,
            contentMessage: S,
          } = (0, _.c)({ message: t, channel: a, forwardOptions: n }),
          A = i.useMemo(
            () =>
              p
                ? (0, h.ZP)(t, {
                    formatInline: !0,
                    allowLinks: !0,
                    allowHeading: !0,
                    allowList: !0,
                    hideSimpleEmbedContent: !1,
                    contentMessage: S,
                  }).content
                : null,
            [S, p, t],
          ),
          C = E.length,
          v = null,
          L = null,
          T = null;
        if (C > 0 || I.length > 0) {
          var b, N, x, P;
          let e = (0, s.countBy)(E, (e) => (0, d.aw)(e, !0)),
            t = null !== (x = e.IMAGE) && void 0 !== x ? x : 0,
            n = null !== (P = e.VIDEO) && void 0 !== P ? P : 0;
          t > 0 && n > 0
            ? ((v = g.intl.formatToPlainString(g.t.Lr0Toq, {
                image_count: t,
                video_count: n,
              })),
              (L = o.ImagesIcon))
            : n > 0
              ? ((v = g.intl.formatToPlainString(g.t.SJ6pPT, { count: n })),
                (L = o.CirclePlayIcon))
              : t > 0
                ? ((v = g.intl.formatToPlainString(g.t.h4pFfX, { count: t })),
                  (L = 1 === t ? o.ImageIcon : o.ImagesIcon))
                : ((v = g.intl.formatToPlainString(g.t["89ihS0"], {
                    count: C,
                  })),
                  (L = o.AttachmentIcon)),
            n > 0 && C === n
              ? (T = (0, l.jsxs)("div", {
                  className: r()(m.attachmentPreview, m.attachmentPreviewVideo),
                  children: [
                    (0, l.jsx)(u.ZP, {
                      className: m.thumbnail,
                      src: E[0].proxy_url,
                      width: 56,
                      height: 56,
                    }),
                    (0, l.jsx)(o.CirclePlayIcon, {
                      className: m.playIcon,
                      size: "md",
                      color: "white",
                    }),
                  ],
                }))
              : C > 0
                ? (T = (0, l.jsx)("div", {
                    className: m.attachmentPreview,
                    children: (0, l.jsx)(u.ZP, {
                      src: E[0].proxy_url,
                      width: 56,
                      height: 56,
                    }),
                  }))
                : (null === (N = I[0]) || void 0 === N
                    ? void 0
                    : null === (b = N.thumbnail) || void 0 === b
                      ? void 0
                      : b.proxyURL) != null &&
                  (T = (0, l.jsx)("div", {
                    className: m.attachmentPreview,
                    children: (0, l.jsx)(u.ZP, {
                      src: I[0].thumbnail.proxyURL,
                      width: 56,
                      height: 56,
                    }),
                  }));
        }
        return (
          C > 1 &&
            null != T &&
            (T = (0, l.jsxs)("div", {
              className: m.attachmentPreviewOverflow,
              children: [
                (0, l.jsx)(c.ZP, {
                  mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                  width: 56,
                  height: 56,
                  children: T,
                }),
                (0, l.jsxs)(o.Text, {
                  className: m.overflowCount,
                  variant: "text-xs/semibold",
                  color: "text-normal",
                  children: ["+", C - 1],
                }),
              ],
            })),
          (0, l.jsxs)("div", {
            className: m.forwardPreview,
            children: [
              (0, l.jsx)("div", { className: m.quote }),
              (0, l.jsxs)("div", {
                className: m.contentWrapper,
                children: [
                  p &&
                    (0, l.jsx)(f.ZP, {
                      className: r()(
                        m.forwardPreviewMessage,
                        C > 0 && m.hasAttachments,
                      ),
                      message: t,
                      content: A,
                    }),
                  C > 0 &&
                    (0, l.jsxs)("div", {
                      className: m.attachmentRow,
                      children: [
                        null != L &&
                          (0, l.jsx)(L, {
                            size: "custom",
                            width: p ? 18 : 20,
                            color: o.tokens.colors.TEXT_LOW_CONTRAST,
                          }),
                        null != v &&
                          (0, l.jsx)(o.Text, {
                            variant: p ? "text-sm/medium" : "text-md/medium",
                            color: "text-low-contrast",
                            children: v,
                          }),
                      ],
                    }),
                ],
              }),
              T,
            ],
          })
        );
      }
    },
    761080: function (e, t, n) {
      n.d(t, {
        KF: function () {
          return c;
        },
      }),
        n(47120);
      var l,
        i,
        a,
        r,
        s = n(70956),
        o = n(981631);
      s.Z.Millis.MINUTE;
      let c = "1312632705086787756";
      ((a = l || (l = {}))[(a.MESSAGE = 0)] = "MESSAGE"),
        (a[(a.SUMMARY = 1)] = "SUMMARY"),
        (a[(a.ACTIVITY = 2)] = "ACTIVITY"),
        (a[(a.CUSTOM_STATUS = 3)] = "CUSTOM_STATUS"),
        (a[(a.GUILD_EVENT = 4)] = "GUILD_EVENT"),
        (a[(a.RECOMMENDED_GUILDS = 5)] = "RECOMMENDED_GUILDS"),
        o.hBH.IMAGE,
        o.hBH.GIFV,
        ((r = i || (i = {}))[(r.DEFAULT = 0)] = "DEFAULT"),
        (r[(r.NOTIFICATIONS = 1)] = "NOTIFICATIONS"),
        (r[(r.BOOKMARKS = 2)] = "BOOKMARKS");
    },
    93687: function (e, t, n) {
      let l = (0, n(818083).B)({
        kind: "user",
        id: "2024-04_gdm_presence",
        label: "Group DM Presence",
        defaultConfig: {
          isFacepileEnabled: !1,
          isStatusIndicatorEnabled: !1,
          isTypingIndicatorEnabled: !1,
        },
        treatments: [
          {
            id: 1,
            label: "Status Indicator Only",
            config: {
              isFacepileEnabled: !1,
              isStatusIndicatorEnabled: !0,
              isTypingIndicatorEnabled: !1,
            },
          },
          {
            id: 2,
            label: "Typing Indicator Only",
            config: {
              isFacepileEnabled: !1,
              isStatusIndicatorEnabled: !1,
              isTypingIndicatorEnabled: !0,
            },
          },
          {
            id: 3,
            label: "Status Indicator + Typing Indicator",
            config: {
              isFacepileEnabled: !1,
              isStatusIndicatorEnabled: !0,
              isTypingIndicatorEnabled: !0,
            },
          },
          {
            id: 4,
            label: "Facepile Only",
            config: {
              isFacepileEnabled: !0,
              isStatusIndicatorEnabled: !1,
              isTypingIndicatorEnabled: !1,
            },
          },
          {
            id: 5,
            label: "Facepile + Status Indicator",
            config: {
              isFacepileEnabled: !0,
              isStatusIndicatorEnabled: !0,
              isTypingIndicatorEnabled: !1,
            },
          },
          {
            id: 6,
            label: "Facepile + Typing Indicator",
            config: {
              isFacepileEnabled: !0,
              isStatusIndicatorEnabled: !1,
              isTypingIndicatorEnabled: !0,
            },
          },
          {
            id: 7,
            label: "Facepile + Typing Indicator + Status Indicator",
            config: {
              isFacepileEnabled: !0,
              isStatusIndicatorEnabled: !0,
              isTypingIndicatorEnabled: !0,
            },
          },
        ],
      });
      t.Z = l;
    },
    266076: function (e, t, n) {
      var l = n(200651),
        i = n(192379),
        a = n(481060),
        r = n(43267),
        s = n(93687),
        o = n(785232);
      t.Z = i.memo(function (e) {
        let {
            channel: t,
            size: n,
            facepileSizeOverride: i,
            experimentLocation: c,
            isTyping: u,
            status: d,
            className: h,
            animated: f = !1,
            ..._
          } = e,
          { isFacepileEnabled: g } = s.Z.useExperiment(
            { location: c },
            { autoTrackExposure: !0 },
          );
        return t.recipients.length >= 2 && g && null == t.icon
          ? (0, l.jsx)(o.Z, {
              "aria-label": _["aria-label"],
              "aria-hidden": _["aria-hidden"],
              className: h,
              recipients: t.recipients,
              size: null != i ? i : n,
              isTyping: u,
              status: d,
            })
          : (0, l.jsx)(a.Avatar, {
              "aria-hidden": _["aria-hidden"],
              "aria-label": _["aria-label"],
              className: h,
              size: n,
              src: (0, r.x)(t, 80, f),
            });
      });
    },
    785232: function (e, t, n) {
      var l = n(200651);
      n(192379);
      var i = n(442837),
        a = n(481060),
        r = n(289823),
        s = n(594174);
      t.Z = function (e) {
        let {
            recipients: t,
            size: n,
            status: o,
            isTyping: c,
            className: u,
            ...d
          } = e,
          h = a.AvatarSizeSpecs[n],
          f = (0, i.Wu)(
            [s.default],
            () =>
              t.slice(0, 2).map((e) => {
                let t = s.default.getUser(e);
                if (null != t) return t.getAvatarURL(void 0, h.size, !1);
              }),
            [t, h.size],
          );
        return (0, l.jsx)(r.Z, {
          "aria-label": d["aria-label"],
          "aria-hidden": d["aria-hidden"],
          backSrc: f[0],
          frontSrc: f[1],
          size: n,
          status: o,
          isTyping: null != c && c,
          className: u,
        });
      };
    },
    810123: function (e, t, n) {
      n.d(t, {
        E: function () {
          return l;
        },
      });
      var l,
        i = n(200651),
        a = n(120356),
        r = n.n(a),
        s = n(468194),
        o = n(471445),
        c = n(686546),
        u = n(795531);
      (l || (l = {})).SMALL_32 = "SMALL_32";
      let d = { SMALL_32: 24 },
        h = { SMALL_32: [13, 11, 10, 10, 10, 10, 10] };
      t.Z = function (e) {
        var t, n, l;
        let {
          className: a,
          iconClassName: f,
          size: _,
          channel: g,
          guild: m,
          locked: E,
          hasActiveThreads: I,
        } = e;
        if (null == m) return null;
        let p = m.getIconURL(48),
          S = h[_],
          A = d[_],
          C = (0, o.KS)(g, m, { locked: E, hasActiveThreads: I });
        if (null == C) return null;
        let v = (0, s.Zg)(
          null !== (t = null == m ? void 0 : m.toString()) && void 0 !== t
            ? t
            : null,
        );
        return (0, i.jsxs)("div", {
          role: "img",
          className: a,
          children: [
            (0, i.jsx)(c.ZP, {
              mask: c.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
              children:
                null != p
                  ? (0, i.jsx)("img", {
                      alt: "",
                      src: p,
                      className: u.channelGuildIcon,
                      style: { width: A, height: A },
                    })
                  : (0, i.jsx)("div", {
                      className: r()(u.channelGuildIcon, u.acronym),
                      style: {
                        fontSize:
                          ((n = S),
                          (l = v).length - 1 > n.length
                            ? n[n.length - 1]
                            : n[l.length - 1]),
                        width: A,
                        height: A,
                      },
                      children: v,
                    }),
            }),
            (0, i.jsx)(C, {
              className: r()(u.icon, u.iconWithGuildIcon, f),
              color: "currentColor",
            }),
          ],
        });
      };
    },
    448486: function (e, t, n) {
      n.d(t, {
        _: function () {
          return c;
        },
      });
      var l = n(192379),
        i = n(442837),
        a = n(594174),
        r = n(823379),
        s = n(51144),
        o = n(388032);
      function c(e) {
        let t = (0, i.Wu)([a.default], () =>
          e.recipients
            .map((e) => a.default.getUser(e))
            .filter(r.lm)
            .map((e) => s.ZP.getName(e)),
        );
        return l.useMemo(
          () =>
            "" === e.name
              ? null
              : (function (e) {
                  if (0 === e.length) return null;
                  if (1 === e.length)
                    return o.intl.formatToPlainString(o.t["J+Wpsr"], {
                      first: e[0],
                    });
                  if (2 === e.length)
                    return o.intl.formatToPlainString(o.t.gwRP0d, {
                      first: e[0],
                      second: e[1],
                    });
                  if (3 === e.length)
                    return o.intl.formatToPlainString(o.t.QDB5en, {
                      first: e[0],
                      second: e[1],
                      third: e[2],
                    });
                  let t = e.length - 3;
                  return o.intl.formatToPlainString(o.t.VYfueX, {
                    first: e[0],
                    second: e[1],
                    third: e[2],
                    count: t,
                  });
                })(t),
          [e, t],
        );
      }
    },
    499376: function (e, t, n) {
      n.d(t, {
        Ld: function () {
          return c;
        },
        R_: function () {
          return o;
        },
        aw: function () {
          return u;
        },
        pU: function () {
          return d;
        },
      }),
        n(789020);
      var l = n(630388),
        i = n(406432),
        a = n(828061),
        r = n(981631);
      let s = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
        o = (e) =>
          "IMAGE" === e ||
          "VIDEO" === e ||
          "CLIP" === e ||
          "VISUAL_PLACEHOLDER" === e,
        c = (e) => "IMAGE" === e || "VIDEO" === e || "VISUAL_PLACEHOLDER" === e;
      function u(e, t) {
        let { filename: n, width: o, height: c } = e;
        if (t && null != o && o > 0 && null != c && c > 0) {
          if ((0, i.CO)(n)) return "IMAGE";
          if (!(0, i.NU)(n) || null == e.proxy_url) return "INVALID";
          else {
            var u;
            return (0, l.yE)(
              null !== (u = e.flags) && void 0 !== u ? u : 0,
              r.J0y.IS_CLIP,
            )
              ? "CLIP"
              : "VIDEO";
          }
        }
        if (null != t && s.test(n) && null != e.url) return "AUDIO";
        if (null != e.url && (0, a.O)(n)) return "PLAINTEXT_PREVIEW";
        return "OTHER";
      }
      function d(e) {
        let { contentType: t, width: n, height: l } = e;
        if (null != n && n > 0 && null != l && l > 0) {
          if ((0, i.tw)(t)) return "IMAGE";
          if ((0, i.X2)(t)) return "VIDEO";
        }
        return "VISUAL_PLACEHOLDER";
      }
    },
    51596: function (e, t, n) {
      n.d(t, {
        $Z: function () {
          return x;
        },
        Cp: function () {
          return P;
        },
        F_: function () {
          return T;
        },
        Se: function () {
          return O;
        },
        tF: function () {
          return Z;
        },
        yC: function () {
          return y;
        },
      }),
        n(757143),
        n(47120);
      var l = n(570140),
        i = n(493683),
        a = n(475179),
        r = n(925549),
        s = n(287734),
        o = n(212819),
        c = n(336197),
        u = n(359110),
        d = n(769654),
        h = n(131704),
        f = n(592125),
        _ = n(283595),
        g = n(944486),
        m = n(914010),
        E = n(626135);
      if (12633 == n.j) var I = n(777754);
      var p = n(823385),
        S = n(981631),
        A = n(176505);
      let C = () => Promise.resolve();
      C = n(346329).playApplication;
      let v = Object.freeze({
          [o.xQ.USER]: o.h8.USER,
          [o.xQ.TEXT_CHANNEL]: o.h8.TEXT_CHANNEL,
          [o.xQ.VOICE_CHANNEL]: o.h8.VOICE_CHANNEL,
          [o.xQ.GUILD]: o.h8.GUILD,
          [o.xQ.APPLICATION]: o.h8.APPLICATION,
        }),
        L = new RegExp(
          "^"
            .concat(o.xQ.USER, "|")
            .concat(o.xQ.TEXT_CHANNEL, "|")
            .concat(o.xQ.VOICE_CHANNEL, "|\\")
            .concat(o.xQ.GUILD, "|\\")
            .concat(o.xQ.APPLICATION),
        );
      function T(e) {
        var t, n;
        let l;
        let [i, a] =
          ((l = null !== (n = v[(t = e).charAt(0)]) && void 0 !== n ? n : null),
          [t.replace(L, ""), l]);
        return { query: i, queryMode: a };
      }
      function b(e, t) {
        let {
            results: n,
            queryMode: l,
            query: i,
            maxQueryLength: a,
          } = p.Z.getProps(),
          r = m.Z.getGuildId(),
          s = g.Z.getChannelId(r),
          c = n[(0, o.gJ)(o.a8.DOWN, -1, n)],
          u = I.Z.isEmail(i),
          d = I.Z.isPhoneNumber(i),
          _ = I.Z.isUserTagLike(i),
          S = null != s && (0, A.AB)(s),
          C = (e) =>
            null == e
              ? null
              : e.type === o.h8.IN_APP_NAVIGATION
                ? e.type + "_" + e.record.type
                : e.type,
          v = {
            current_channel_id: S ? void 0 : s,
            current_channel_static_route: S ? s : void 0,
            current_guild_id: r,
            query_mode: null != l ? l : "GENERAL",
            query_length: i.length,
            max_query_length: a,
            is_email_like: u,
            is_phone_like: d,
            is_username_like: _,
            query: u || d || _ ? null : i,
            top_result_type: C(c),
            top_result_score: null != c ? c.score : null,
            num_results_total: p.Z.getResultTotals(),
            num_results_users: p.Z.getResultTotals(o.h8.USER),
            num_results_text_channels: p.Z.getResultTotals(o.h8.TEXT_CHANNEL),
            num_results_voice_channels: p.Z.getResultTotals(o.h8.VOICE_CHANNEL),
            num_results_guilds: p.Z.getResultTotals(o.h8.GUILD),
            num_results_group_dms: p.Z.getResultTotals(o.h8.GROUP_DM),
          };
        if (null != s) {
          let e = f.Z.getChannel(s);
          v.current_channel_type = null != e ? e.type : null;
        }
        if (null != t) {
          let { type: e, score: l, record: i } = t;
          switch (
            ((v.selected_type = C(t)),
            (v.selected_score = l),
            (v.selected_index = n.indexOf(t)),
            e)
          ) {
            case o.h8.GUILD:
              v.selected_guild_id = i.id;
              break;
            case o.h8.TEXT_CHANNEL:
            case o.h8.VOICE_CHANNEL:
              i instanceof h.Sf &&
                (v.selected_guild_id = null != i.guild_id ? i.guild_id : null),
                (v.selected_channel_id = i.id);
              break;
            case o.h8.GROUP_DM:
              v.selected_channel_id = i.id;
              break;
            case o.h8.USER:
              v.selected_user_id = i.id;
          }
        }
        E.default.track(e, v);
      }
      function N() {
        l.Z.dispatch({ type: "QUICKSWITCHER_HIDE" });
      }
      function x() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "KEYBIND",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        !(function (e) {
          let t;
          if (p.Z.isOpen()) return;
          let n = m.Z.getGuildId(),
            l = g.Z.getChannelId(n);
          if (null != l) {
            let e = f.Z.getChannel(l);
            t = null != e ? e.type : null;
          }
          E.default.track(S.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: l,
            current_channel_type: t,
          });
        })(e),
          l.Z.dispatch({ type: "QUICKSWITCHER_SHOW", ...T(t) });
      }
      function P() {
        b(S.rMx.QUICKSWITCHER_CLOSED), N();
      }
      function y(e) {
        l.Z.dispatch({ type: "QUICKSWITCHER_SEARCH", ...T(e) });
      }
      function Z(e) {
        l.Z.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
      }
      function O(e) {
        let t,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        N(), b(S.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
        let { type: h, record: g } = e,
          m = { page: S.ZY5.QUICK_SWITCHER };
        switch (h) {
          case o.h8.GUILD:
            (0, d.X)(g.id, { navigationReplace: !0 });
            break;
          case o.h8.TEXT_CHANNEL:
            null != (t = f.Z.getChannel(g.id)) &&
              (0, u.Kh)(t.id, {
                state: { analyticsSource: m },
                navigationReplace: !0,
              });
            break;
          case o.h8.VOICE_CHANNEL:
            null != (t = f.Z.getChannel(g.id)) &&
              (n
                ? a.Z.updateChatOpen(g.id, !0)
                : s.default.selectVoiceChannel(g.id),
              (0, u.Kh)(t.id, {
                state: { analyticsSource: m },
                navigationReplace: !0,
              }));
            break;
          case o.h8.USER:
            i.Z.openPrivateChannel([g.id], !1, !1, "Quickswitcher"),
              r.Z.channelListScrollTo(S.ME, f.Z.getDMFromUserId(g.id));
            break;
          case o.h8.GROUP_DM:
            (0, u.Kh)(g.id, { navigationReplace: !0 }),
              r.Z.channelListScrollTo(S.ME, g.id);
            break;
          case o.h8.APPLICATION:
            let E = _.Z.getActiveLibraryApplication(g.id);
            C(g.id, E, {
              analyticsParams: {
                source: S.Sbl.QUICK_SWITCHER,
                location: S.Sbl.QUICK_SWITCHER,
              },
            });
            break;
          case o.h8.LINK:
            (0, c.Z)(g.path, { navigationReplace: !0 });
            break;
          case o.h8.IN_APP_NAVIGATION:
            (0, c.Z)(g.path, { navigationReplace: !0 });
        }
        l.Z.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
      }
    },
    41837: function (e, t, n) {
      n.d(t, {
        M: function () {
          return i;
        },
        o: function () {
          return a;
        },
      });
      var l = n(212819);
      let i = Array.from([
        l.h8.USER,
        l.h8.TEXT_CHANNEL,
        l.h8.VOICE_CHANNEL,
        l.h8.GROUP_DM,
      ]);
      function a(e) {
        return i.includes(e.type);
      }
    },
    987509: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return A;
        },
        dL: function () {
          return _;
        },
        hC: function () {
          return g;
        },
        hl: function () {
          return m;
        },
        qx: function () {
          return E;
        },
      }),
        n(47120),
        n(653041);
      var l = n(392711),
        i = n(493683),
        a = n(212819),
        r = n(938078),
        s = n(823385),
        o = n(592125),
        c = n(496675),
        u = n(594174),
        d = n(823379),
        h = n(41837),
        f = n(981631);
      n(388032);
      function _(e) {
        let t = o.Z.getChannel(e);
        return (null == t ? void 0 : t.type) === f.d4z.DM
          ? { type: "user", id: t.recipients[0] }
          : { type: "channel", id: e };
      }
      function g(e) {
        return "".concat(e.type, "-").concat(e.id);
      }
      function m(e) {
        if ("channel" === e.type) return e.id;
        let t = o.Z.getDMFromUserId(e.id);
        if (null != t) return t;
      }
      async function E(e) {
        let t = m(e);
        if (null != t) return t;
        if ("user" === e.type)
          try {
            return await i.Z.getOrEnsurePrivateChannel(e.id);
          } catch (e) {
            return;
          }
      }
      function I(e) {
        if ("user" !== e.type) return (0, r.Z)(e.id);
        {
          let t = u.default.getUser(e.id);
          return null != t ? { type: a.h8.USER, record: t, score: 0 } : null;
        }
      }
      function p(e, t) {
        let n;
        let l = new Set();
        if (null != t) for (let e of t) l.add(e);
        let i = [];
        for (let t of e) {
          if (null != t)
            if (t.type === a.h8.HEADER) n = t;
            else {
              let { id: e } = t.record;
              !l.has(e) &&
                (l.add(e), null != n && (i.push(n), (n = void 0)), i.push(t));
            }
        }
        return i;
      }
      function S(e, t) {
        return e.filter((e) => {
          var n, l;
          return (
            (0, d.lm)(e) &&
            (e.type === a.h8.HEADER ||
              ((0, h.o)(e) &&
                ((n = e),
                (l = t),
                n.type === a.h8.USER
                  ? l || null != o.Z.getDMChannelFromUserId(n.record.id)
                  : n.type === a.h8.GROUP_DM ||
                    (n.record.type !== f.d4z.GUILD_FORUM &&
                      n.record.type !== f.d4z.GUILD_MEDIA &&
                      c.Z.can(f.Plq.VIEW_CHANNEL, n.record) &&
                      c.Z.can(f.Plq.SEND_MESSAGES, n.record)))))
          );
        });
      }
      function A(e) {
        let {
          results: t,
          hasQuery: n,
          queryMode: i,
          frequentChannels: a,
          targetDestination: o,
          selectedDestinations: c,
          pinnedDestinations: u,
          originDestination: d,
          includeMissingDMs: h,
        } = e;
        if (n) return p(S(t, h));
        let f = null != u && u.length > 0 ? u.map((e) => I(e)) : [],
          _ = s.Z.getChannelHistory(),
          g = _.length > 0 ? _.map((e) => (0, r.Z)(e)) : [],
          m = a.length > 0 ? a.map((e) => (0, r.Z)(e.id)) : [],
          E = S([...f, null != o ? I(o) : null, ...g, ...m], h),
          A =
            (null == c ? void 0 : c.find((e) => (0, l.isEqual)(e, d))) != null,
          C = null == d || A ? [] : [d.id];
        return null != i
          ? p(E.filter((e) => e.type === i))
          : p(E, C).slice(0, 15);
      }
    },
    601565: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      }),
        n(47120);
      var l = n(192379),
        i = n(211266),
        a = n(212819);
      function r(e) {
        let { searchOptions: t } = e,
          [n, r] = l.useState({ results: [], query: "" }),
          s = (0, i.Z)(() => {
            let e = new a.ZP((e, t) => {
              r({ results: e, query: t });
            });
            return e.setLimit(20), e.search(""), e;
          });
        return (
          l.useEffect(() => () => s.destroy(), [s]),
          l.useEffect(() => {
            null != t && t !== s.options && s.setOptions(t);
          }, [s, t]),
          {
            search: l.useCallback(
              (e) => {
                var t, n;
                let { query: l, resultTypes: i } = e;
                if (
                  null == s.resultTypes ||
                  ((t = i),
                  (n = s.resultTypes),
                  !(t.length === n.size && t.every((e) => n.has(e))))
                )
                  s.setResultTypes(i), s.setLimit(1 === i.length ? 50 : 20);
                s.search("" === l.trim() ? "" : l);
              },
              [s],
            ),
            ...n,
          }
        );
      }
    },
    72214: function (e, t, n) {
      n.d(t, {
        s: function () {
          return _;
        },
      }),
        n(47120);
      var l = n(192379),
        i = n(442837),
        a = n(38618),
        r = n(51596),
        s = n(516373),
        o = n(314897),
        c = n(580005),
        u = n(987509),
        d = n(601565),
        h = n(41837);
      function f(e) {
        let { query: t, queryMode: n } = (0, r.F_)(e),
          l = h.M,
          i = null;
        return (
          null != n && h.M.includes(n) && ((l = [n]), (i = n)),
          { query: t, queryMode: i, resultTypes: l }
        );
      }
      function _(e) {
        let {
            targetDestination: t,
            selectedDestinations: n,
            originDestination: r,
            includeMissingDMs: h = !1,
          } = e,
          _ = (0, i.e7)([o.default], () => o.default.getId()),
          g = l.useMemo(
            () => ({
              searchOptions: {
                blacklist: new Set(["user:".concat(_)]),
                frecencyBoosters: !0,
                userFilters: null,
              },
            }),
            [_],
          ),
          { search: m, query: E, results: I } = (0, d.Z)(g),
          [p, S] = l.useState(f("")),
          A = l.useCallback((e) => S(f(e)), [S]),
          { queryMode: C } = p,
          [v, L] = l.useState(null != n ? n : []),
          T = l.useRef(n);
        l.useEffect(() => {
          T.current = n;
        }),
          l.useLayoutEffect(() => {
            var e;
            let { query: t, resultTypes: n } = p;
            m({ query: t, resultTypes: n }),
              L(null !== (e = T.current) && void 0 !== e ? e : []);
          }, [m, p]),
          (0, s.D)();
        let b = (0, i.e7)([c.Z], () =>
            c.Z.getFrequentlyWithoutFetchingLatest(),
          ),
          N = (0, i.e7)([a.Z], () => a.Z.isConnected()),
          x = "" !== E;
        return {
          results: l.useMemo(
            () =>
              (0, u.ZP)({
                results: I,
                hasQuery: x,
                queryMode: C,
                targetDestination: t,
                frequentChannels: b,
                selectedDestinations: n,
                pinnedDestinations: v,
                originDestination: r,
                includeMissingDMs: h,
                isConnected: N,
              }),
            [I, x, C, t, b, n, v, r, h, N],
          ),
          updateSearchText: A,
        };
      }
    },
    850840: function (e, t, n) {
      let l;
      n(653041);
      var i,
        a = n(442837),
        r = n(570140);
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let o = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
      class c extends (i = a.ZP.PersistedStore) {
        initialize(e) {
          l = null != e ? e : o;
        }
        getState() {
          return l;
        }
        get hasAcceptedStoreTerms() {
          return l.hasAcceptedStoreTerms;
        }
        hasAcceptedEULA(e) {
          return l.hasAcceptedEulaIds.includes(e);
        }
      }
      s(c, "displayName", "ApplicationStoreUserSettingsStore"),
        s(c, "persistKey", "ApplicationStoreUserSettingsStore"),
        s(c, "migrations", [
          (e) =>
            null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e,
        ]),
        (t.Z = new c(r.Z, {
          APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
            l.hasAcceptedStoreTerms = !0;
          },
          APPLICATION_STORE_ACCEPT_EULA: function (e) {
            let { eulaId: t } = e;
            if (l.hasAcceptedEulaIds.includes(t)) return !1;
            l.hasAcceptedEulaIds.push(t);
          },
        }));
    },
    681230: function (e, t, n) {
      e.exports = {
        closeButton: "closeButton_e3c9f3",
        description: "description_e3c9f3",
        conflictButton: "conflictButton_e3c9f3",
        linkButtonSize: "linkButtonSize_e3c9f3",
        linkButton: "linkButton_e3c9f3",
        retryButton: "retryButton_e3c9f3",
        conflictButtonInner: "conflictButtonInner_e3c9f3",
        buttonBody: "buttonBody_e3c9f3",
        timestamp: "timestamp_e3c9f3",
        choiceWrapper: "choiceWrapper_e3c9f3",
        choiceLine: "choiceLine_e3c9f3",
        choiceTitle: "choiceTitle_e3c9f3 title_e3c9f3",
        conflictTitle: "conflictTitle_e3c9f3 title_e3c9f3",
        conflictUploadArt:
          "conflictUploadArt_e3c9f3 conflictArt_e3c9f3 art_e3c9f3",
        conflictDownloadArt:
          "conflictDownloadArt_e3c9f3 conflictArt_e3c9f3 art_e3c9f3",
        errorArt: "errorArt_e3c9f3 art_e3c9f3",
        modal: "modal_e3c9f3",
      };
    },
    640453: function (e, t, n) {
      e.exports = {
        container: "container_e85446",
        circularImage: "circularImage_e85446",
        dots: "dots_e85446",
      };
    },
    317536: function (e, t, n) {
      e.exports = {
        modal: "modal_d0585c",
        header: "header_d0585c",
        titleLine: "titleLine_d0585c",
        title: "title_d0585c",
        closeButton: "closeButton_d0585c",
        footer: "footer_d0585c",
        footerWithMessage: "footerWithMessage_d0585c",
        footerWarningWrapper: "footerWarningWrapper_d0585c",
        footerButtons: "footerButtons_d0585c",
        destinationRow: "destinationRow_d0585c",
        disabled: "disabled_d0585c",
        identity: "identity_d0585c",
        labels: "labels_d0585c",
        label: "label_d0585c",
        threadSubLabel: "threadSubLabel_d0585c",
        subLabelIcon: "subLabelIcon_d0585c",
        subLabelSeparator: "subLabelSeparator_d0585c",
        iconWrapper: "iconWrapper_d0585c",
        subLabel: "subLabel_d0585c",
        checkbox: "checkbox_d0585c",
        fauxButton: "fauxButton_d0585c",
        noResults: "noResults_d0585c",
        noResultsImg: "noResultsImg_d0585c",
        actions: "actions_d0585c",
        sendWithMessage: "sendWithMessage_d0585c",
        messageInput: "messageInput_d0585c",
        forwardPreviewWrapper: "forwardPreviewWrapper_d0585c",
        forwardPreviewWrapperInset: "forwardPreviewWrapperInset_d0585c",
      };
    },
    899134: function (e, t, n) {
      e.exports = {
        forwardPreview: "forwardPreview_e4c972",
        quote: "quote_e4c972",
        contentWrapper: "contentWrapper_e4c972",
        attachmentRow: "attachmentRow_e4c972",
        forwardPreviewMessage: "forwardPreviewMessage_e4c972",
        hasAttachments: "hasAttachments_e4c972",
        attachmentPreview: "attachmentPreview_e4c972",
        attachmentPreviewVideo: "attachmentPreviewVideo_e4c972",
        thumbnail: "thumbnail_e4c972",
        playIcon: "playIcon_e4c972",
        attachmentPreviewOverflow: "attachmentPreviewOverflow_e4c972",
        overflowCount: "overflowCount_e4c972",
      };
    },
    795531: function (e, t, n) {
      e.exports = {
        icon: "icon_fcf03e",
        iconWithGuildIcon: "iconWithGuildIcon_fcf03e",
        channelGuildIcon: "channelGuildIcon_fcf03e",
        acronym: "acronym_fcf03e",
      };
    },
  },
]);
//# sourceMappingURL=9915c4ae079687e185ea.js.map
