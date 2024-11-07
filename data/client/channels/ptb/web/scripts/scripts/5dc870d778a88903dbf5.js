"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91834"],
  {
    621054: function (e) {
      e.exports = "/assets/a315359c0fd32511b45e.svg";
    },
    560361: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var l = n(192379);
      function i(e) {
        let t = l.useRef();
        (t.current = e),
          l.useEffect(
            () => () => {
              var e;
              return null === (e = t.current) || void 0 === e
                ? void 0
                : e.call(t);
            },
            [],
          );
      }
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
        h = n(287279);
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
      function p(e) {
        let { src: t, size: n } = e;
        return (0, l.jsx)("img", {
          className: h.circularImage,
          src: t,
          alt: "",
          width: n,
          height: n,
        });
      }
      let E = {
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
            isTyping: I,
            status: S,
            style: A,
            className: C,
            ...v
          } = e,
          { size: b } = c.AvatarSizeSpecs[g],
          {
            statusCoords: L,
            frontAvatarOffsetPx: N,
            frontAvatarSizePx: x,
            backAvatarSizePx: T,
          } = i.useMemo(() => {
            var e;
            let t = "".concat(b, "-").concat(I);
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
                })(g, I, t);
          }, [b, I, g]);
        let P =
          ((t = null != S),
          (n = I),
          (a = g),
          n ? E[a].typing : t ? E[a].status : E[a].default);
        return (0, l.jsxs)("div", {
          style: { width: b, height: b, ...A },
          "aria-label": v["aria-label"],
          "aria-hidden": v["aria-hidden"],
          className: r()(h.container, C),
          children: [
            (0, l.jsxs)(u.ZP, {
              mask: P,
              height: b,
              width: b,
              children: [
                (0, l.jsx)("img", { src: o, alt: "", width: T, height: T }),
                (0, l.jsx)("div", {
                  style: { position: "absolute", top: N, left: N },
                  children: (0, l.jsx)(p, {
                    src: _,
                    size: x,
                    isTyping: I,
                    status: S,
                  }),
                }),
              ],
            }),
            (0, l.jsx)(m, { statusCoords: L, status: S, isTyping: I }),
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
        s = n(957730),
        o = n(592125),
        c = n(496675),
        u = n(784384);
      let d = {
        async sendForward(e, t, n) {
          let l = o.Z.getChannel(t),
            i = o.Z.getChannel(e.channel_id);
          if (null == i)
            throw Error("Unable to find original channel for message");
          if (null == l)
            throw Error("Unable to find destination channel for message");
          let d = s.ZP.parse(l, ""),
            h = {
              guild_id: i.guild_id,
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
          await r.Z.sendMessage(l.id, d, !1, {
            messageReference: h,
            eagerDispatch: !1,
          }),
            (null == n ? void 0 : n.withMessage) != null &&
              !(0, u.pU)(l, c.Z) &&
              (await r.Z.sendMessage(l.id, s.ZP.parse(l, n.withMessage), !1));
        },
        sendForwards: (e, t, n) => i()(t.map((t) => d.sendForward(e, t, n))),
      };
      t.Z = d;
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
          return I;
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
        p = n(981631),
        E = n(388032);
      function I(e) {
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
          return { label: E.intl.string(E.t.KgPx1N) };
        if (l && (0, u.Km)(n.type)) {
          if (
            (e.attachments.length > 0 ||
              e.messageSnapshots.some(
                (e) => e.message.attachments.length > 0,
              )) &&
            !h.Z.can(p.Plq.ATTACH_FILES, n)
          )
            return { label: E.intl.string(E.t.P7yvbm) };
          if (
            (e.embeds.length > 0 ||
              e.messageSnapshots.some((e) => e.message.embeds.length > 0)) &&
            !(0, g.eC)(n, h.Z) &&
            !(0, g.En)(e)
          )
            return { label: E.intl.string(E.t.Wr4RIS) };
          let t = [
            ...(0, c.cv)(e),
            ...e.messageSnapshots.flatMap((e) => {
              let { message: t } = e;
              return (0, c.cv)(t);
            }),
          ];
          if (
            t.length > 0 &&
            !h.Z.can(p.Plq.USE_EXTERNAL_STICKERS, n) &&
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
            return { label: E.intl.string(E.t["0Yyrub"]) };
          if (
            (e.hasFlag(p.iLy.IS_VOICE_MESSAGE) ||
              e.messageSnapshots.some((e) =>
                e.message.hasFlag(p.iLy.IS_VOICE_MESSAGE),
              )) &&
            !h.Z.can(p.Plq.SEND_VOICE_MESSAGES, n)
          )
            return { label: E.intl.string(E.t.quj4DQ) };
        }
      }
      function A(e, t) {
        return (
          null != e.rateLimitPerUser &&
          !!(e.rateLimitPerUser > 0) &&
          !(t.can(p.Plq.MANAGE_CHANNELS, e) || t.can(p.Plq.MANAGE_MESSAGES, e))
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
        g = n(560361),
        m = n(724757),
        p = n(212819),
        E = n(933557),
        I = n(266076),
        S = n(810123),
        A = n(448486),
        C = n(987509),
        v = n(592125),
        b = n(430824),
        L = n(158776),
        N = n(306680),
        x = n(699516),
        T = n(594174),
        P = n(626135),
        y = n(55935),
        Z = n(823379),
        w = n(51144),
        R = n(784384),
        O = n(981631),
        D = n(490897),
        j = n(388032),
        M = n(276496);
      function k(e) {
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
            "aria-posinset": p,
          } = e,
          E = (0, d.JA)(n.id),
          [I, S] = r.useState(!1),
          A = r.useRef(!1),
          C = r.useCallback(() => {
            if ("send" === l) {
              S(!0), (A.current = !0);
              return;
            }
            null == _ || _(n);
          }, [l, _, n]),
          v = r.useCallback(() => {
            P.default.track(O.rMx.FORWARD_ONE_TAP_VIEW, {
              channel_id: t.channel_id,
              message_id: t.id,
            }),
              (A.current = !1),
              null == _ ||
                _(n, { transitionToDestination: !0, closeAfterSend: !0 });
          }, [t.channel_id, t.id, _, n]),
          b = r.useCallback(() => {
            S(!1),
              (A.current = !1),
              P.default.track(O.rMx.FORWARD_ONE_TAP_UNDO, {
                channel_id: t.channel_id,
                message_id: t.id,
              });
          }, [t]);
        return (
          (0, g.Z)(() => {
            A.current &&
              ((A.current = !1),
              null == _ ||
                _(n, { transitionToDestination: !1, closeAfterSend: !1 }));
          }),
          (0, a.jsxs)(f.Clickable, {
            className: o()(M.destinationRow, { [M.disabled]: h }),
            onClick: h || I ? void 0 : C,
            "aria-selected": u,
            "aria-setsize": m,
            "aria-posinset": p,
            ...E,
            children: [
              (0, a.jsxs)("div", {
                className: M.identity,
                children: [
                  (0, a.jsx)("div", { className: M.iconWrapper, children: i }),
                  (0, a.jsxs)("div", {
                    className: M.labels,
                    children: [
                      (0, a.jsx)(f.Text, {
                        tag: "strong",
                        className: M.label,
                        variant: "text-md/semibold",
                        lineClamp: 1,
                        children: s,
                      }),
                      (0, a.jsx)(f.Text, {
                        className: M.subLabel,
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
                  className: M.checkbox,
                }),
              "send" === l &&
                !h &&
                (0, a.jsxs)("div", {
                  className: M.actions,
                  children: [
                    I
                      ? (0, a.jsx)(f.Button, {
                          size: f.Button.Sizes.SMALL,
                          color: f.Button.Colors.PRIMARY,
                          look: f.Button.Looks.LINK,
                          onClick: v,
                          children: j.intl.string(j.t["HO/oXl"]),
                        })
                      : (0, a.jsx)("div", {
                          className: o()(
                            (0, f.getButtonStyle)({
                              size: f.Button.Sizes.SMALL,
                              color: f.Button.Colors.BRAND,
                            }),
                            M.fauxButton,
                          ),
                          children: j.intl.string(j.t.TXNS7e),
                        }),
                    I &&
                      (0, a.jsx)(f.Button, {
                        size: f.Button.Sizes.SMALL,
                        color: f.Button.Colors.BRAND,
                        look: f.Button.Looks.OUTLINED,
                        onClick: b,
                        children: j.intl.string(j.t.KyUKhY),
                      }),
                  ],
                }),
            ],
          })
        );
      }
      function F(e) {
        let { user: t, subLabel: n, ...l } = e,
          i = w.ZP.useName(t),
          r = w.ZP.useUserTag(t, { decoration: "never" }),
          s = (0, h.e7)([x.Z], () => x.Z.getNickname(t.id)),
          o = (0, h.e7)([L.Z], () => L.Z.getStatus(t.id));
        return (0, a.jsx)(k, {
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
      function G(e) {
        let { channel: t, subLabel: n, ...l } = e,
          i = (0, E.ZP)(t),
          r = (0, A._)(t);
        return (0, a.jsx)(k, {
          ...l,
          icon: (0, a.jsx)(I.Z, {
            "aria-hidden": !0,
            size: f.AvatarSizes.SIZE_32,
            channel: t,
            experimentLocation: "forward-modal",
          }),
          label: i,
          subLabel: null != n ? n : r,
        });
      }
      function U(e) {
        let { channel: t, subLabel: n, ...l } = e,
          i = (0, h.e7)([b.Z], () =>
            b.Z.getGuild(null == t ? void 0 : t.guild_id),
          ),
          r = (0, E.ZP)(t),
          s = (0, h.e7)([v.Z, T.default, x.Z], () => {
            let e = v.Z.getChannel(t.parent_id);
            return null == e ? null : (0, E.F6)(e, T.default, x.Z, !1);
          }),
          o = (0, h.e7)([N.ZP], () =>
            N.ZP.lastMessageTimestamp(t.id, D.W.CHANNEL),
          ),
          c = null == i ? void 0 : i.name;
        if (t.isThread() || t.isForumPost()) {
          let e = t.isForumPost() ? f.ForumIcon : f.TextIcon;
          c = (0, a.jsxs)("div", {
            className: M.threadSubLabel,
            children: [
              (0, a.jsx)(e, {
                color: f.tokens.colors.TEXT_SECONDARY,
                className: M.subLabelIcon,
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
                        className: M.subLabelSeparator,
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
        return (0, a.jsx)(k, {
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
          E = r.useCallback(
            (e) => {
              let { section: r, row: s } = e;
              if (r > 0) return;
              let { type: u, record: d } = t[s];
              if (u === p.h8.HEADER) return;
              let h =
                  u === p.h8.USER
                    ? { type: "user", id: d.id }
                    : { type: "channel", id: d.id },
                f = (0, C.hC)(h),
                _ = (0, R.HY)(l, i, d),
                m = g.includes(f),
                E = {
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
              if (u === p.h8.USER) return (0, a.jsx)(F, { user: d, ...E });
              if (u === p.h8.GROUP_DM)
                return (0, a.jsx)(G, { channel: d, ...E });
              if (u === p.h8.TEXT_CHANNEL || u === p.h8.VOICE_CHANNEL)
                return (0, a.jsx)(U, { channel: d, ...E });
              else (0, Z.vE)(u);
            },
            [c, o, l, i, t, n, g],
          ),
          I = r.useRef(null),
          S = (0, m.Z)("forward-modal", I);
        return (0, a.jsx)(d.bG, {
          navigator: S,
          children: (0, a.jsx)(d.SJ, {
            children: (e) => {
              let { ref: t, ...n } = e;
              return (0, a.jsx)(f.ModalListContent, {
                scrollerRef: (e) => {
                  var n;
                  (I.current = e),
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
                renderRow: E,
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
          return I;
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
        p = n(388032),
        E = n(276496);
      function I(e) {
        let {
            message: t,
            forwardOptions: n,
            sendLabel: I,
            canSend: S,
            selectedDestinations: A,
            isSending: C,
            onSend: v,
            showPreview: b,
          } = e,
          L = (0, d.Z)(),
          N = (0, f.nm)(A),
          x = (0, f.y)(A),
          T = (0, _.Ad)(),
          P = (0, a.e7)([h.Z], () =>
            h.Z.getDraft(t.channel_id, h.d.ForwardContextMessage),
          ),
          [y, Z] = i.useState(() => (0, c.eK)(P)),
          { textValue: w, richValue: R } = y,
          [O, D] = i.useState(!1),
          j = i.useCallback(() => D(!0), []),
          M = i.useCallback(() => D(!1), []),
          k = i.useCallback(
            (e, n, l) => {
              Z({ textValue: n, richValue: l }),
                s.Z.saveDraft(t.channel_id, n, h.d.ForwardContextMessage),
                T(t.channel_id, t.id);
            },
            [T, t],
          ),
          F = i.useCallback(() => {
            s.Z.clearDraft(t.channel_id, h.d.ForwardContextMessage), v(w);
          }, [t.channel_id, v, w]),
          G = i.useCallback(
            () =>
              !S || w.length > L
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (F(),
                  Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [F, w, L, S],
          );
        return (0, l.jsxs)(r.ModalFooter, {
          className: E.footerWithMessage,
          children: [
            b &&
              (0, l.jsx)("div", {
                className: E.forwardPreviewWrapper,
                children: (0, l.jsx)(m.O, {
                  message: t,
                  forwardOptions: n,
                  channel: N,
                }),
              }),
            (0, l.jsxs)("div", {
              className: E.footerWarningWrapper,
              children: [
                (0, l.jsxs)("div", {
                  className: E.footerButtons,
                  children: [
                    (0, l.jsx)(u.Z, {
                      innerClassName: E.messageInput,
                      onChange: k,
                      placeholder: p.intl.string(p.t.ZroO3N),
                      channel: N,
                      textValue: w,
                      richValue: R,
                      type: o.I.FORWARD_MESSAGE_INPUT,
                      onBlur: M,
                      onFocus: j,
                      focused: O,
                      onSubmit: G,
                      parentModalKey: g.so,
                      autoCompletePosition: "bottom",
                      emojiPickerCloseOnModalOuterClick: !0,
                      disableThemedBackground: !0,
                    }),
                    (0, l.jsx)(r.Button, {
                      className: E.sendWithMessage,
                      submitting: C,
                      disabled: !S || w.length > L,
                      onClick: F,
                      children: I,
                    }),
                  ],
                }),
                x.length > 0 &&
                  w.length > 0 &&
                  (0, l.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-warning",
                    children: p.intl.format(p.t.xJFpio, {
                      count: x.length,
                      channelNames: x.join(", "),
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
        p = n(859155),
        E = n(822869),
        I = n(346610),
        S = n(895442),
        A = n(757853),
        C = n(388275),
        v = n(912332),
        b = n(646746),
        L = n(819727),
        N = n(388032),
        x = n(276496),
        T = n(621054);
      function P(e) {
        let {
            channelId: t,
            messageId: P,
            message: y,
            initialSelectedDestinations: Z,
            forwardOptions: w,
            onClose: R,
            onRequestSent: O,
            ...D
          } = e,
          {
            hasOneTapSendButton: j,
            hasMessageInput: M,
            hasPreview: k,
          } = (0, I.yk)({ location: "ForwardModal" }),
          F = i.useMemo(() => (0, u.dL)(t), [t]),
          [G, U] = i.useState(!1),
          W = (0, r.e7)(
            [f.Z],
            () => {
              var e;
              return null !== (e = f.Z.getMessage(t, P)) && void 0 !== e
                ? e
                : y;
            },
            [t, P, y],
          ),
          Q = (0, r.e7)([h.Z], () => h.Z.getChannel(t), [t]),
          B = (0, E.ZF)(),
          H = (0, E.mh)(),
          z = i.useRef(0),
          V = i.useRef(0),
          [q, K] = i.useState(Z),
          Y = q.length,
          X = Y >= L.G,
          [J, $] = i.useState(""),
          ee = i.useCallback(
            (e) => {
              $(e), (V.current += 1), "" !== e && H(t, P);
            },
            [t, P, H],
          ),
          et = (0, d.s)({
            searchText: J,
            selectedDestinations: q,
            originDestination: F,
            includeMissingDMs: !0,
          }),
          en = i.useCallback(() => {
            (0, E.sF)({
              channelId: t,
              messageId: P,
              numDestinationChanges: z.current,
              numQueryChanges: V.current,
            }),
              R();
          }, [t, P, R]),
          el = i.useCallback(() => {
            var e;
            let n =
                null === (e = h.Z.getChannel(t)) || void 0 === e
                  ? void 0
                  : e.guild_id,
              l = (0, _.wR)(n, t, P);
            (0, s.showToast)(
              (0, s.createToast)(
                N.intl.string(N.t["L/PwZW"]),
                s.ToastType.LINK,
              ),
            ),
              (0, g.JG)(l),
              (0, E.xp)(t, P);
          }, [t, P]),
          ei = i.useCallback(() => {
            $("");
          }, [$]),
          ea = i.useRef(null);
        i.useEffect(() => {
          if ("" === J) {
            var e;
            null === (e = ea.current) || void 0 === e || e.focus();
          }
        }, [J]);
        let er = i.useMemo(
            () =>
              (0, a.throttle)(
                () => {
                  (0, s.showToast)(
                    (0, s.createToast)(
                      N.intl.string(N.t.kwmYkp),
                      s.ToastType.FORWARD,
                    ),
                  );
                },
                3e3,
                { leading: !0, trailing: !1 },
              ),
            [],
          ),
          es = i.useCallback(
            (e) => {
              B(t, P, "" !== J),
                K((t) => {
                  let n = t.findIndex((t) => {
                    let { type: n, id: l } = t;
                    return n === e.type && l === e.id;
                  });
                  if (-1 === n)
                    return X ? t : ($(""), (z.current += 1), [e, ...t]);
                  let l = [...t];
                  return l.splice(n, 1), (z.current += 1), l;
                });
            },
            [t, X, P, J, B],
          ),
          eo = i.useCallback(
            async function (e) {
              var i;
              let {
                  withMessage: a,
                  transitionToDestination: r,
                  closeAfterSend: d,
                } = arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
                _ = null !== (i = f.Z.getMessage(t, P)) && void 0 !== i ? i : y;
              if (null == _) {
                (0, s.showToast)(
                  (0, s.createToast)(
                    N.intl.string(N.t.R0RpRU),
                    s.ToastType.FAILURE,
                  ),
                );
                return;
              }
              U(!0);
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
                U(!1);
                return;
              }
              d && (0, v.mc)(),
                null == O || O(),
                r &&
                  (await o.Z.fetchMessages({ channelId: g[0] }),
                  (0, c.Kh)(g[0]));
              let I = await p.Z.sendForwards(_, g, { ...w, withMessage: a }),
                A = g.some((e) => {
                  let t = h.Z.getChannel(e);
                  return null != t && t.rateLimitPerUser > 0;
                });
              if (
                I.every((e) => {
                  let { status: t } = e;
                  return "fulfilled" === t;
                })
              ) {
                (0, E.gP)({
                  channelId: t,
                  messageId: P,
                  hasError: !1,
                  hasContextMessage: null != a && "" !== a,
                  numDestinations: g.length,
                  numDestinationChanges: z.current,
                  numQueryChanges: V.current,
                  anyDestinationHasSlowmode: A,
                }),
                  er();
                return;
              }
              (0, E.gP)({
                channelId: t,
                messageId: P,
                hasError: !0,
                hasContextMessage: null != a && "" !== a,
                numDestinations: g.length,
                numDestinationChanges: z.current,
                numQueryChanges: V.current,
                anyDestinationHasSlowmode: A,
              });
              let C = e.filter((e, t) => "rejected" === I[t].status);
              (0, v.Np)({
                messageId: P,
                channelId: t,
                message: _,
                failedDestinations: C,
                forwardOptions: w,
              });
            },
            [t, w, P, y, O, er],
          ),
          ec = i.useCallback(
            (e) => {
              eo(q, {
                withMessage: e,
                transitionToDestination: 1 === q.length,
                closeAfterSend: !0,
              });
            },
            [eo, q],
          ),
          eu = i.useCallback(() => ec(), [ec]),
          ed = i.useCallback(
            function (e) {
              let { transitionToDestination: t, closeAfterSend: n } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              eo([e], { transitionToDestination: t, closeAfterSend: n });
            },
            [eo],
          );
        if (null == W || null == Q) return null;
        let eh =
            et.length > 0
              ? (0, l.jsx)(A.F, {
                  paddingBottom: 16,
                  paddingTop: 16,
                  rowData: et,
                  rowMode: j ? A.G.SEND : A.G.TOGGLE,
                  message: W,
                  originChannel: Q,
                  handleToggleDestination: j ? ed : es,
                  selectedDestinations: q,
                  disableSelection: X,
                })
              : (0, l.jsxs)(s.ModalContent, {
                  className: x.noResults,
                  children: [
                    (0, l.jsx)("img", {
                      className: x.noResultsImg,
                      src: T,
                      alt: "",
                    }),
                    (0, l.jsx)(s.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: N.intl.string(N.t.V6nAfH),
                    }),
                  ],
                }),
          ef =
            Y <= 1
              ? N.intl.string(N.t.TXNS7e)
              : N.intl.formatToPlainString(N.t.jWtYUl, { count: Y });
        return (0, l.jsxs)(s.ModalRoot, {
          className: x.modal,
          "aria-label": N.intl.string(N.t["+SkRRk"]),
          ...D,
          children: [
            (0, l.jsxs)(s.ModalHeader, {
              className: x.header,
              children: [
                (0, l.jsxs)("div", {
                  className: x.titleLine,
                  children: [
                    (0, l.jsx)("div", {
                      className: x.title,
                      children: (0, l.jsx)(s.HeadingLevel, {
                        component: (0, l.jsx)(s.Heading, {
                          variant: "heading-lg/semibold",
                          children: N.intl.string(N.t["+SkRRk"]),
                        }),
                        children: X
                          ? (0, l.jsx)(s.Text, {
                              variant: "text-sm/normal",
                              color: "text-warning",
                              children: N.intl.format(N.t["3Fbkio"], {
                                count: L.G,
                              }),
                            })
                          : (j || M) &&
                            (0, l.jsx)(s.Heading, {
                              variant: "heading-sm/normal",
                              color: "header-muted",
                              children: N.intl.string(N.t["VA+btL"]),
                            }),
                      }),
                    }),
                    (0, l.jsx)(s.ModalCloseButton, {
                      className: x.closeButton,
                      onClick: en,
                    }),
                  ],
                }),
                j &&
                  k &&
                  (0, l.jsx)("div", {
                    className: x.forwardPreviewWrapperInset,
                    children: (0, l.jsx)(b.O, {
                      message: W,
                      forwardOptions: w,
                    }),
                  }),
                (0, l.jsx)(s.SearchBar, {
                  ref: ea,
                  size: s.SearchBar.Sizes.MEDIUM,
                  query: J,
                  onChange: ee,
                  onClear: ei,
                  placeholder: N.intl.string(N.t["5h0QOD"]),
                  "aria-label": N.intl.string(N.t["5h0QOD"]),
                  autoFocus: !0,
                }),
              ],
            }),
            eh,
            !j &&
              (M
                ? (0, l.jsx)(C.n, {
                    message: W,
                    forwardOptions: w,
                    sendLabel: ef,
                    canSend: Y > 0,
                    selectedDestinations: q,
                    isSending: G,
                    onSend: ec,
                    showPreview: k,
                  })
                : (0, l.jsxs)(s.ModalFooter, {
                    className: x.footer,
                    children: [
                      (0, l.jsx)(s.Button, {
                        submitting: G,
                        disabled: 0 === Y,
                        onClick: eu,
                        children: ef,
                      }),
                      (0, l.jsx)(s.Button, {
                        onClick: el,
                        look: s.Button.Looks.OUTLINED,
                        color: s.Button.Colors.PRIMARY,
                        children: N.intl.string(N.t.WqhZsr),
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
          return p;
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
        m = n(766177);
      function p(e) {
        let { message: t, forwardOptions: n, channel: a } = e,
          {
            attachments: p,
            embeds: E,
            hasContent: I,
            contentMessage: S,
          } = (0, _.c)({ message: t, channel: a, forwardOptions: n }),
          A = i.useMemo(
            () =>
              I
                ? (0, h.ZP)(t, {
                    formatInline: !0,
                    allowLinks: !0,
                    allowHeading: !0,
                    allowList: !0,
                    hideSimpleEmbedContent: !1,
                    contentMessage: S,
                  }).content
                : null,
            [S, I, t],
          ),
          C = p.length,
          v = null,
          b = null,
          L = null;
        if (C > 0 || E.length > 0) {
          var N, x, T, P;
          let e = (0, s.countBy)(p, (e) => (0, d.aw)(e, !0)),
            t = null !== (T = e.IMAGE) && void 0 !== T ? T : 0,
            n = null !== (P = e.VIDEO) && void 0 !== P ? P : 0;
          t > 0 && n > 0
            ? ((v = g.intl.formatToPlainString(g.t.Lr0Toq, {
                image_count: t,
                video_count: n,
              })),
              (b = o.ImagesIcon))
            : n > 0
              ? ((v = g.intl.formatToPlainString(g.t.SJ6pPT, { count: n })),
                (b = o.CirclePlayIcon))
              : t > 0
                ? ((v = g.intl.formatToPlainString(g.t.h4pFfX, { count: t })),
                  (b = 1 === t ? o.ImageIcon : o.ImagesIcon))
                : ((v = g.intl.formatToPlainString(g.t["89ihS0"], {
                    count: C,
                  })),
                  (b = o.AttachmentIcon)),
            n > 0 && C === n
              ? (L = (0, l.jsxs)("div", {
                  className: r()(m.attachmentPreview, m.attachmentPreviewVideo),
                  children: [
                    (0, l.jsx)(u.ZP, {
                      className: m.thumbnail,
                      src: p[0].proxy_url,
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
                ? (L = (0, l.jsx)("div", {
                    className: m.attachmentPreview,
                    children: (0, l.jsx)(u.ZP, {
                      src: p[0].proxy_url,
                      width: 56,
                      height: 56,
                    }),
                  }))
                : (null === (x = E[0]) || void 0 === x
                    ? void 0
                    : null === (N = x.thumbnail) || void 0 === N
                      ? void 0
                      : N.proxyURL) != null &&
                  (L = (0, l.jsx)("div", {
                    className: m.attachmentPreview,
                    children: (0, l.jsx)(u.ZP, {
                      src: E[0].thumbnail.proxyURL,
                      width: 56,
                      height: 56,
                    }),
                  }));
        }
        return (
          C > 1 &&
            null != L &&
            (L = (0, l.jsxs)("div", {
              className: m.attachmentPreviewOverflow,
              children: [
                (0, l.jsx)(c.ZP, {
                  mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                  width: 56,
                  height: 56,
                  children: L,
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
                  I &&
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
                        null != b &&
                          (0, l.jsx)(b, {
                            size: "custom",
                            width: I ? 18 : 20,
                            color: o.tokens.colors.TEXT_LOW_CONTRAST,
                          }),
                        null != v &&
                          (0, l.jsx)(o.Text, {
                            variant: I ? "text-sm/medium" : "text-md/medium",
                            color: "text-low-contrast",
                            children: v,
                          }),
                      ],
                    }),
                ],
              }),
              L,
            ],
          })
        );
      }
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
        u = n(614148);
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
          locked: p,
          hasActiveThreads: E,
        } = e;
        if (null == m) return null;
        let I = m.getIconURL(48),
          S = h[_],
          A = d[_],
          C = (0, o.KS)(g, m, { locked: p, hasActiveThreads: E });
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
                null != I
                  ? (0, i.jsx)("img", {
                      alt: "",
                      src: I,
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
        o = (e) => "IMAGE" === e || "VIDEO" === e || "CLIP" === e,
        c = (e) => "IMAGE" === e || "VIDEO" === e;
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
      function d(e, t) {
        let { contentType: n, width: l, height: a } = e;
        if (t && l > 0 && a > 0)
          return (0, i.tw)(n) ? "IMAGE" : (0, i.X2)(n) ? "VIDEO" : "INVALID";
        return "OTHER";
      }
    },
    51596: function (e, t, n) {
      n.d(t, {
        $Z: function () {
          return T;
        },
        Cp: function () {
          return P;
        },
        F_: function () {
          return L;
        },
        Se: function () {
          return w;
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
        p = n(626135),
        E = n(777754),
        I = n(823385),
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
        b = new RegExp(
          "^"
            .concat(o.xQ.USER, "|")
            .concat(o.xQ.TEXT_CHANNEL, "|")
            .concat(o.xQ.VOICE_CHANNEL, "|\\")
            .concat(o.xQ.GUILD, "|\\")
            .concat(o.xQ.APPLICATION),
        );
      function L(e) {
        var t, n;
        let l;
        let [i, a] =
          ((l = null !== (n = v[(t = e).charAt(0)]) && void 0 !== n ? n : null),
          [t.replace(b, ""), l]);
        return { query: i, queryMode: a };
      }
      function N(e, t) {
        let {
            results: n,
            queryMode: l,
            query: i,
            maxQueryLength: a,
          } = I.Z.getProps(),
          r = m.Z.getGuildId(),
          s = g.Z.getChannelId(r),
          c = n[(0, o.gJ)(o.a8.DOWN, -1, n)],
          u = E.Z.isEmail(i),
          d = E.Z.isPhoneNumber(i),
          _ = E.Z.isUserTagLike(i),
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
            num_results_total: I.Z.getResultTotals(),
            num_results_users: I.Z.getResultTotals(o.h8.USER),
            num_results_text_channels: I.Z.getResultTotals(o.h8.TEXT_CHANNEL),
            num_results_voice_channels: I.Z.getResultTotals(o.h8.VOICE_CHANNEL),
            num_results_guilds: I.Z.getResultTotals(o.h8.GUILD),
            num_results_group_dms: I.Z.getResultTotals(o.h8.GROUP_DM),
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
        p.default.track(e, v);
      }
      function x() {
        l.Z.dispatch({ type: "QUICKSWITCHER_HIDE" });
      }
      function T() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "KEYBIND",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        !(function (e) {
          let t;
          if (I.Z.isOpen()) return;
          let n = m.Z.getGuildId(),
            l = g.Z.getChannelId(n);
          if (null != l) {
            let e = f.Z.getChannel(l);
            t = null != e ? e.type : null;
          }
          p.default.track(S.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: l,
            current_channel_type: t,
          });
        })(e),
          l.Z.dispatch({ type: "QUICKSWITCHER_SHOW", ...L(t) });
      }
      function P() {
        N(S.rMx.QUICKSWITCHER_CLOSED), x();
      }
      function y(e) {
        l.Z.dispatch({ type: "QUICKSWITCHER_SEARCH", ...L(e) });
      }
      function Z(e) {
        l.Z.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
      }
      function w(e) {
        let t,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        x(), N(S.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
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
            let p = _.Z.getActiveLibraryApplication(g.id);
            C(g.id, p, {
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
          return p;
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
      async function p(e) {
        let t = m(e);
        if (null != t) return t;
        if ("user" === e.type)
          try {
            return await i.Z.getOrEnsurePrivateChannel(e.id);
          } catch (e) {
            return;
          }
      }
      function E(e) {
        if ("user" !== e.type) return (0, r.Z)(e.id);
        {
          let t = u.default.getUser(e.id);
          return null != t ? { type: a.h8.USER, record: t, score: 0 } : null;
        }
      }
      function I(e, t) {
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
        if (n) return I(S(t, h));
        let f = null != u && u.length > 0 ? u.map((e) => E(e)) : [],
          _ = s.Z.getChannelHistory(),
          g = _.length > 0 ? _.map((e) => (0, r.Z)(e)) : [],
          m = a.length > 0 ? a.map((e) => (0, r.Z)(e.id)) : [],
          p = S([...f, null != o ? E(o) : null, ...g, ...m], h),
          A =
            (null == c ? void 0 : c.find((e) => (0, l.isEqual)(e, d))) != null,
          C = null == d || A ? [] : [d.id];
        return null != i
          ? I(p.filter((e) => e.type === i))
          : I(p, C).slice(0, 15);
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
        i = n(75124),
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
          return f;
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
        let {
            searchText: t,
            targetDestination: n,
            selectedDestinations: f,
            originDestination: _,
            includeMissingDMs: g = !1,
          } = e,
          m = (0, i.e7)([o.default], () => o.default.getId()),
          p = l.useMemo(
            () => ({
              searchOptions: {
                blacklist: new Set(["user:".concat(m)]),
                frecencyBoosters: !0,
                userFilters: null,
              },
            }),
            [m],
          ),
          { search: E, query: I, results: S } = (0, d.Z)(p),
          A = l.useMemo(
            () =>
              (function (e) {
                let { query: t, queryMode: n } = (0, r.F_)(e),
                  l = h.M,
                  i = null;
                return (
                  null != n && h.M.includes(n) && ((l = [n]), (i = n)),
                  { query: t, queryMode: i, resultTypes: l }
                );
              })(t),
            [t],
          ),
          { queryMode: C } = A,
          [v, b] = l.useState(null != f ? f : []);
        l.useLayoutEffect(() => {
          let { query: e, resultTypes: t } = A;
          E({ query: e, resultTypes: t }), b(null != f ? f : []);
        }, [E, A]),
          (0, s.D)();
        let L = (0, i.e7)([c.Z], () =>
            c.Z.getFrequentlyWithoutFetchingLatest(),
          ),
          N = (0, i.e7)([a.Z], () => a.Z.isConnected()),
          x = "" !== I;
        return l.useMemo(
          () =>
            (0, u.ZP)({
              results: S,
              hasQuery: x,
              queryMode: C,
              targetDestination: n,
              frequentChannels: L,
              selectedDestinations: f,
              pinnedDestinations: v,
              originDestination: _,
              includeMissingDMs: g,
              isConnected: N,
            }),
          [S, x, C, n, L, f, v, _, g, N],
        );
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
    572058: function (e, t, n) {
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
    287279: function (e, t, n) {
      e.exports = {
        container: "container_e85446",
        circularImage: "circularImage_e85446",
        dots: "dots_e85446",
      };
    },
    276496: function (e, t, n) {
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
    766177: function (e, t, n) {
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
    614148: function (e, t, n) {
      e.exports = {
        icon: "icon_fcf03e",
        iconWithGuildIcon: "iconWithGuildIcon_fcf03e",
        channelGuildIcon: "channelGuildIcon_fcf03e",
        acronym: "acronym_fcf03e",
      };
    },
  },
]);
//# sourceMappingURL=5dc870d778a88903dbf5.js.map
