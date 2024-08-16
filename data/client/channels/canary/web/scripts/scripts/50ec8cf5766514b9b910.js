"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29975"],
  {
    332148: function (e, n, t) {
      var i = t(544891),
        s = t(570140),
        l = t(346479),
        a = t(624453),
        r = t(668781),
        o = t(981631),
        u = t(689938);
      let d = {
        async pinMessage(e, n) {
          let { id: t, name: s } = e;
          await l.Z.unarchiveThreadIfNecessary(e.id),
            i.tn.put({ url: o.ANM.PIN(t, n), oldFormErrors: !0 }).catch(() => {
              let n;
              (n = e.isPrivate()
                ? u.Z.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format(
                    { maxPins: o.tG9 },
                  )
                : u.Z.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
                    maxPins: o.tG9,
                    channelName: s,
                  })),
                r.Z.show({
                  title: u.Z.Messages.PIN_MESSAGE_TOO_MANY_TITLE,
                  body: n,
                  confirmText: u.Z.Messages.OKAY,
                });
            });
        },
        async unpinMessage(e, n) {
          await l.Z.unarchiveThreadIfNecessary(e.id),
            i.tn
              .del({ url: o.ANM.PIN(e.id, n), oldFormErrors: !0 })
              .catch(() =>
                r.Z.show({
                  title: u.Z.Messages.UNPIN_MESSAGE_FAILED_TITLE,
                  body: u.Z.Messages.UNPIN_MESSAGE_FAILED_BODY,
                  confirmText: u.Z.Messages.TRY_AGAIN,
                  cancelText: u.Z.Messages.CANCEL,
                  onConfirm: d.unpinMessage.bind(d, e, n),
                }),
              );
        },
        ackPins(e) {
          s.Z.dispatch({ type: "CHANNEL_PINS_ACK", channelId: e });
        },
        fetchPins(e) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = a.Z.getPinnedMessages(e);
          if (!!n || null == t || (!t.loaded && !t.loading))
            s.Z.dispatch({ type: "LOAD_PINNED_MESSAGES", channelId: e }),
              i.tn
                .get({ url: o.ANM.PINS(e), retries: 2, oldFormErrors: !0 })
                .then(
                  (n) => {
                    s.Z.dispatch({
                      type: "LOAD_PINNED_MESSAGES_SUCCESS",
                      messages: n.body,
                      channelId: e,
                    });
                  },
                  () => {
                    s.Z.dispatch({
                      type: "LOAD_PINNED_MESSAGES_FAILURE",
                      channelId: e,
                    });
                  },
                );
        },
      };
      n.Z = d;
    },
    257559: function (e, n, t) {
      t(789020), t(47120);
      var i = t(735250),
        s = t(470079),
        l = t(120356),
        a = t.n(l),
        r = t(481060),
        o = t(332148),
        u = t(904245),
        d = t(933557),
        c = t(951844),
        E = t(372900),
        f = t(726521),
        g = t(294218),
        m = t(699516),
        M = t(594174),
        _ = t(630388),
        h = t(970257),
        N = t(981631),
        I = t(689938),
        Z = t(608362);
      function A(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      class p extends s.PureComponent {
        render() {
          let e, n;
          let { report: t } = this.state,
            {
              channel: s,
              message: l,
              showContextMenuHint: a,
              ...o
            } = this.props,
            u =
              s.type === N.d4z.GUILD_ANNOUNCEMENT &&
              (0, _.yE)(l.flags, N.iLy.CROSSPOSTED);
          return (
            a &&
              (e = (0, i.jsx)(c.Z, {
                className: Z.spacingTop,
                children:
                  I.Z.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format(),
              })),
            (0, h.vc)(l) &&
              (n = (0, i.jsx)(r.FormSwitch, {
                value: t,
                onChange: this.handleToggleReport,
                hideBorder: !0,
                className: Z.spacingTop,
                children: I.Z.Messages.DELETE_MESSAGE_REPORT,
              })),
            (0, i.jsx)(E.Z.Provider, {
              value: s.guild_id,
              children: (0, i.jsxs)(r.ConfirmModal, {
                header: u
                  ? I.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER
                  : I.Z.Messages.DELETE_MESSAGE_TITLE,
                confirmText: I.Z.Messages.DELETE,
                cancelText: I.Z.Messages.CANCEL,
                onConfirm: this.handleDelete,
                ...o,
                children: [
                  (0, i.jsx)(r.Text, {
                    variant: "text-md/normal",
                    className: Z.spacing,
                    children: u
                      ? I.Z.Messages.DELETE_FOLLOWED_NEWS_BODY
                      : I.Z.Messages.DELETE_MESSAGE_BODY,
                  }),
                  (0, i.jsx)("div", {
                    className: Z.message,
                    children: (0, i.jsx)(g.Z, {
                      channel: s,
                      message: l,
                      disableInteraction: !0,
                    }),
                  }),
                  n,
                  e,
                ],
              }),
            })
          );
        }
        constructor(...e) {
          super(...e),
            A(this, "state", { report: !1 }),
            A(this, "handleDelete", () => {
              let { report: e } = this.state,
                { channel: n, message: t } = this.props;
              e
                ? (0, f.ak)(t, "message_delete_alert", () =>
                    u.Z.deleteMessage(n.id, t.id),
                  )
                : u.Z.deleteMessage(n.id, t.id);
            }),
            A(this, "handleToggleReport", (e) => {
              this.setState({ report: e });
            });
        }
      }
      n.Z = {
        confirmPin: function (e, n) {
          (0, r.openModal)((t) => {
            let s;
            let l = (0, d.F6)(e, M.default, m.Z);
            return (
              (s = e.isPrivate()
                ? I.Z.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL
                : I.Z.Messages.PIN_MESSAGE_BODY.format({ channelName: l })),
              (0, i.jsx)(E.Z.Provider, {
                value: e.guild_id,
                children: (0, i.jsxs)(r.ConfirmModal, {
                  header: I.Z.Messages.PIN_MESSAGE_TITLE,
                  confirmText: I.Z.Messages.PIN_CONFIRM,
                  cancelText: I.Z.Messages.CANCEL,
                  confirmButtonColor: r.Button.Colors.BRAND,
                  onConfirm: () => o.Z.pinMessage(e, n.id),
                  ...t,
                  children: [
                    (0, i.jsx)(r.Text, {
                      variant: "text-md/normal",
                      className: Z.spacing,
                      children: s,
                    }),
                    (0, i.jsx)("div", {
                      className: Z.message,
                      children: (0, i.jsx)(g.Z, {
                        channel: e,
                        message: n,
                        animateAvatar: !1,
                        disableInteraction: !0,
                      }),
                    }),
                  ],
                }),
              })
            );
          });
        },
        confirmUnpin: function (e, n) {
          (0, r.openModal)((t) =>
            (0, i.jsx)(E.Z.Provider, {
              value: e.guild_id,
              children: (0, i.jsxs)(r.ConfirmModal, {
                header: I.Z.Messages.UNPIN_MESSAGE_TITLE,
                confirmText: I.Z.Messages.UNPIN_CONFIRM,
                cancelText: I.Z.Messages.CANCEL,
                onConfirm: () => o.Z.unpinMessage(e, n.id),
                ...t,
                children: [
                  (0, i.jsx)(r.Text, {
                    variant: "text-md/normal",
                    className: Z.spacing,
                    children: I.Z.Messages.UNPIN_MESSAGE_BODY,
                  }),
                  (0, i.jsx)("div", {
                    className: a()(Z.message, Z.spacing),
                    children: (0, i.jsx)(g.Z, {
                      channel: e,
                      message: n,
                      disableInteraction: !0,
                    }),
                  }),
                  (0, i.jsx)(c.Z, {
                    children:
                      I.Z.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format(),
                  }),
                ],
              }),
            }),
          );
        },
        confirmDelete: function (e, n) {
          let t =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          (0, r.openModal)((s) =>
            (0, i.jsx)(p, {
              channel: e,
              message: n,
              showContextMenuHint: t,
              ...s,
            }),
          );
        },
        confirmEdit: function (e, n, t) {
          (0, r.openModal)((s) =>
            (0, i.jsx)(r.ConfirmModal, {
              header: I.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
              confirmText: I.Z.Messages.CONFIRM,
              cancelText: I.Z.Messages.CANCEL,
              confirmButtonColor: r.Button.Colors.BRAND,
              onConfirm: () => u.Z.editMessage(e, n, { content: t }),
              ...s,
              children: (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                className: Z.spacing,
                children: I.Z.Messages.EDIT_FOLLOWED_NEWS_BODY,
              }),
            }),
          );
        },
      };
    },
    276022: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      }),
        t(653041);
      var i = t(735250),
        s = t(470079),
        l = t(442837),
        a = t(481060),
        r = t(139387),
        o = t(230711),
        u = t(213459),
        d = t(434404),
        c = t(430824),
        E = t(496675),
        f = t(981631),
        g = t(689938);
      function m(e) {
        let { user: n, guildId: t, channel: m, context: M } = e,
          _ = c.Z.getGuild(t),
          h = (0, l.e7)([E.Z], () =>
            null != _ ? E.Z.can(f.Plq.MANAGE_GUILD, _) : null,
          ),
          N = (0, u.em)(m, !0, !0),
          I = (0, u.PL)(!0, !0),
          { isUserApp: Z, isGuildApp: A } = s.useMemo(() => {
            var e, t, i, s;
            if ((null == n ? void 0 : n.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let l = Object.values(
                null !==
                  (i =
                    null === (e = N.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== i
                  ? i
                  : {},
              ),
              a = Object.values(
                null !==
                  (s =
                    null === (t = I.result) || void 0 === t
                      ? void 0
                      : t.sections) && void 0 !== s
                  ? s
                  : {},
              );
            return {
              isGuildApp: l.some((e) => {
                var t;
                return (
                  (null === (t = e.descriptor.application) || void 0 === t
                    ? void 0
                    : t.id) === (null == n ? void 0 : n.id)
                );
              }),
              isUserApp: a.some((e) => {
                var t;
                return (
                  (null === (t = e.descriptor.application) || void 0 === t
                    ? void 0
                    : t.id) === (null == n ? void 0 : n.id)
                );
              }),
            };
          }, [N, I, null == n ? void 0 : n.id]),
          p = s.useCallback(() => {
            if ((null == _ ? void 0 : _.id) != null)
              d.Z.open(_.id, f.pNK.INTEGRATIONS),
                r.Z.setSection(f.b4C.APPLICATION, null == n ? void 0 : n.id);
          }, [null == n ? void 0 : n.id, null == _ ? void 0 : _.id]),
          S = s.useCallback(() => {
            o.Z.open(f.oAB.AUTHORIZED_APPS);
          }, []),
          v = M === f.IlC.POPOUT;
        if (!(null == n ? void 0 : n.bot) || !h || v || (!A && !Z)) return null;
        let T = [];
        return (
          A &&
            T.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-integration",
                  label: g.Z.Messages.MANAGE_INTEGRATION,
                  action: p,
                },
                "manage-integration",
              ),
            ),
          Z &&
            T.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: g.Z.Messages.MANAGE_AUTHORIZED_APP,
                  action: S,
                },
                "manage-authorized-app",
              ),
            ),
          T
        );
      }
    },
    111618: function (e, n, t) {
      var i,
        s,
        l,
        a,
        r = t(442837),
        o = t(570140);
      let u = {};
      class d extends (a = r.ZP.Store) {
        getOptions(e) {
          return u[e];
        }
      }
      (l = "SendMessageOptionsStore"),
        (s = "displayName") in (i = d)
          ? Object.defineProperty(i, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[s] = l),
        (n.Z = new d(o.Z, {
          MESSAGE_CREATE: function (e) {
            let { message: n, sendMessageOptions: t } = e;
            null != t && (u[n.id] = t),
              null != n.nonce && n.nonce in u && delete u[n.nonce];
          },
        }));
    },
    730954: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      }),
        t(789020);
      var i = t(904245),
        s = t(667204);
      function l(e, n, t) {
        let l =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if ((i.Z.deleteMessage(e.id, n.id, !0), n.isCommandType())) {
          null != n.interactionData &&
            null != l.applicationId &&
            (0, s.d)(n, e, l.applicationId);
          return;
        }
        let { content: a, tts: r, messageReference: o, flags: u, nonce: d } = n;
        i.Z.sendMessage(
          e.id,
          { content: a, tts: r, invalidEmojis: [], validNonShortcutEmojis: [] },
          void 0,
          {
            nonce: d,
            flags: u,
            messageReference: null != o ? o : void 0,
            ...l,
          },
        );
      }
    },
    996861: function (e, n, t) {
      t.d(n, {
        $Z: function () {
          return T;
        },
        B8: function () {
          return P;
        },
        F4: function () {
          return S;
        },
        HH: function () {
          return x;
        },
        Hd: function () {
          return C;
        },
        Xl: function () {
          return D;
        },
        dF: function () {
          return y;
        },
        eM: function () {
          return R;
        },
        fB: function () {
          return v;
        },
        gK: function () {
          return G;
        },
        mG: function () {
          return L;
        },
        qe: function () {
          return b;
        },
        rY: function () {
          return O;
        },
        ts: function () {
          return j;
        },
        zW: function () {
          return p;
        },
      }),
        t(735250),
        t(470079),
        t(481060);
      var i = t(332148),
        s = t(904245),
        l = t(257559),
        a = t(143740),
        r = t(912332),
        o = t(434404);
      t(726521);
      var u = t(623292),
        d = t(324701),
        c = t(488131),
        E = t(314897),
        f = t(592125),
        g = t(626135),
        m = t(934415),
        M = t(572004),
        _ = t(585483),
        h = t(709054),
        N = t(111618),
        I = t(50284),
        Z = t(730954),
        A = t(981631);
      function p(e) {
        let n = e.getGuildId();
        null != n && o.Z.open(n, A.pNK.OVERVIEW);
      }
      function S(e, n, t) {
        (0, M.JG)(
          t.shiftKey ? "".concat(n.channel_id, "-").concat(n.id) : n.id,
        );
      }
      function v(e, n) {
        g.default.track(A.rMx.MESSAGE_LINK_COPIED, {
          message_id: n.id,
          channel: n.channel_id,
        }),
          (0, M.JG)((0, m.wR)(e.guild_id, e.id, n.id));
      }
      function T(e, n, t) {
        n.state === A.yb.SEND_FAILED || t.shiftKey
          ? s.Z.deleteMessage(e.id, n.id, n.state === A.yb.SEND_FAILED)
          : l.Z.confirmDelete(e, n);
      }
      function C(e, n) {
        s.Z.startEditMessage(e.id, n.id, n.content);
      }
      function P(e, n) {
        (0, I.Z)(e.id, n.id);
      }
      function O(e, n, t) {
        if (!1 === n.pinned) {
          t.shiftKey ? i.Z.pinMessage(e, n.id) : l.Z.confirmPin(e, n);
          return;
        }
        t.shiftKey ? i.Z.unpinMessage(e, n.id) : l.Z.confirmUnpin(e, n);
      }
      function D(e, n) {
        (0, a.Z)(e.id, n.id);
      }
      function L(e, n) {
        (0, Z.Z)(e, n, void 0, N.Z.getOptions(n.id));
      }
      function x(e, n, t) {
        let i = e.isPrivate(),
          s = n.author.id === E.default.getId();
        (0, u.fE)({
          channel: e,
          message: n,
          shouldMention: !t.shiftKey && !s,
          showMentionToggle: !i && !s,
        }),
          _.S.dispatchToLastSubscribed(A.CkL.TEXTAREA_FOCUS);
      }
      function G(e, n) {
        (0, c.R6)(e, n, "Message");
      }
      function b(e, n) {
        let t = f.Z.getChannel(h.default.castMessageIdAsChannelId(n.id));
        null != t && (0, c.ok)(t);
      }
      function y(e, n) {
        (0, d.z)({ channelId: e.id, messageId: n.id });
      }
      function R(e, n) {
        (0, d.z)({ channelId: e.id, messageId: n.id });
      }
      function j(e, n) {
        (0, r.l8)({
          channelId: e.id,
          messageId: n.id,
          source: "message-actions",
        });
      }
    },
    449751: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(852229),
        l = t(481060),
        a = t(626135),
        r = t(572004),
        o = t(981631),
        u = t(689938);
      function d(e, n) {
        return r.wS && e.type !== o.uaV.GUILD_INVITE_REMINDER
          ? (0, i.jsx)(l.MenuItem, {
              id: "copy-link",
              label: u.Z.Messages.COPY_MESSAGE_LINK,
              icon: l.LinkIcon,
              action: () => {
                (0, s.J)(
                  ""
                    .concat(location.protocol, "//")
                    .concat(location.host)
                    .concat(o.Z5c.CHANNEL(n.guild_id, n.id, e.id)),
                ),
                  a.default.track(o.rMx.MESSAGE_LINK_COPIED, {
                    message_id: e.id,
                    channel: e.channel_id,
                  });
              },
            })
          : null;
      }
    },
    601184: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(442837),
        l = t(481060),
        a = t(904245),
        r = t(257559),
        o = t(665906),
        u = t(496675),
        d = t(594174),
        c = t(981631),
        E = t(689938);
      function f(e, n) {
        let t = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
          f = (0, o.$R)(n),
          g = (0, s.e7)([u.Z], () => u.Z.can(c.Plq.MANAGE_MESSAGES, n), [n]),
          m = g || (null != t && e.canDeleteOwnMessage(t.id));
        return e.state === c.yb.SENDING ||
          !m ||
          c.V$x.UNDELETABLE.has(e.type) ||
          !f
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "delete",
              label: E.Z.Messages.DELETE_MESSAGE,
              action: function (t) {
                e.state === c.yb.SEND_FAILED
                  ? a.Z.deleteMessage(n.id, e.id, !0)
                  : t.shiftKey
                    ? a.Z.deleteMessage(n.id, e.id)
                    : r.Z.confirmDelete(n, e, !0);
              },
              color: "danger",
              icon: l.TrashIcon,
            });
      }
    },
    168405: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(481060),
        l = t(665906),
        a = t(50284),
        r = t(689938);
      function o(e, n) {
        return (0, l.$R)(n)
          ? (0, i.jsx)(s.MenuItem, {
              id: "mark-unread",
              label: r.Z.Messages.MARK_UNREAD,
              action: () => (0, a.Z)(n.id, e.id),
              icon: s.ChatMarkUnreadIcon,
            })
          : null;
      }
    },
    134323: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(481060),
        l = t(280845),
        a = t(996861),
        r = t(689938);
      function o(e, n) {
        return (0, l.U)(n, e)
          ? (0, i.jsx)(s.MenuItem, {
              id: "reply",
              label: r.Z.Messages.MESSAGE_ACTION_REPLY,
              icon: s.ArrowAngleLeftUpIcon,
              action: (t) => {
                (0, a.HH)(n, e, t);
              },
            })
          : null;
      }
    },
    36998: function (e, n, t) {
      t.d(n, {
        v: function () {
          return l;
        },
      });
      var i = t(944486),
        s = t(176505);
      function l() {
        var e;
        let n =
          null !== (e = i.Z.getCurrentlySelectedChannelId()) && void 0 !== e
            ? e
            : void 0;
        return null != n && (0, s.AB)(n)
          ? { channel_static_route: n }
          : { channel_id: n };
      }
    },
    26737: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(481060),
        l = t(358085),
        a = t(998502),
        r = t(689938);
      function o(e, n) {
        return l.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0
          ? (0, i.jsx)(s.MenuItem, {
              id: "copy",
              label: r.Z.Messages.COPY,
              hint: (0, l.isMac)() ? "⌘C" : "Ctrl+C",
              action: () => {
                a.ZP.copy(e), null == n || n.focus();
              },
            })
          : null;
      }
    },
    905041: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(481060),
        l = t(829883),
        a = t(976853),
        r = t(378233),
        o = t(902676),
        u = t(626135),
        d = t(49012),
        c = t(358085),
        E = t(998502),
        f = t(36998),
        g = t(981631),
        m = t(689938);
      function M(e, n, t, M) {
        let _ = (0, a.Z)(null == t ? void 0 : t.getChannelId());
        if (
          !c.isPlatformEmbedded ||
          null == e ||
          "" === e ||
          _ ||
          (null == M ? void 0 : M.shouldHideMediaOptions) === !0 ||
          (null != e && null != (0, r.B0)(e)) ||
          (null != e && (0, l.zt)(e))
        )
          return null;
        let h = (0, o.F)(e),
          N = (t) => {
            u.default.track(g.rMx.CONTEXT_MENU_LINK_OPENED, {
              hostname: h,
              ...(0, f.v)(),
            }),
              (0, d.q)(
                { href: e, trusted: (0, d.r)(e, n), shouldConfirm: !0 },
                t,
              );
          };
        return [
          (0, i.jsx)(
            s.MenuItem,
            {
              id: "copy-native-link",
              label: m.Z.Messages.COPY_LINK,
              action: () => {
                u.default.track(g.rMx.CONTEXT_MENU_LINK_COPIED, {
                  hostname: h,
                  ...(0, f.v)(),
                }),
                  E.ZP.copy(e);
              },
            },
            "copy-native-link",
          ),
          (0, i.jsx)(
            s.MenuItem,
            {
              id: "open-native-link",
              label: m.Z.Messages.OPEN_LINK,
              action: (e) => N(e),
            },
            "open-native-link",
          ),
        ];
      }
    },
    89013: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var i = t(735250),
        s = t(470079),
        l = t(512722),
        a = t.n(l),
        r = t(481060),
        o = t(626135),
        u = t(358085),
        d = t(981631),
        c = t(689938);
      function E(e) {
        let n = s.useCallback(() => {
          a()(null != e, "text cannot be null"),
            o.default.track(d.rMx.MESSAGE_MENU_GOOGLE_SEARCHED),
            window.open(
              "https://www.google.com/search?q=".concat(encodeURIComponent(e)),
              "_blank",
            );
        }, [e]);
        return u.isPlatformEmbedded &&
          null != e &&
          (null == e ? void 0 : e.length) !== 0
          ? [
              (0, i.jsx)(
                r.MenuItem,
                {
                  id: "search-google",
                  label: c.Z.Messages.SEARCH_WITH_GOOGLE,
                  action: n,
                },
                "search-google",
              ),
            ]
          : null;
      }
    },
    280845: function (e, n, t) {
      t.d(n, {
        U: function () {
          return f;
        },
        o: function () {
          return g;
        },
      }),
        t(47120);
      var i = t(275726),
        s = t(442837),
        l = t(71619),
        a = t(665906),
        r = t(496675),
        o = t(594174),
        u = t(981631),
        d = t(231338);
      function c(e, n, t) {
        let s;
        return (
          (s = e.isPrivate()
            ? !e.isSystemDM()
            : t.can(d.Pl.SEND_MESSAGES, e) &&
              t.can(d.Pl.READ_MESSAGE_HISTORY, e)) && i.V.REPLYABLE.has(n.type)
        );
      }
      function E(e, n, t, i, s) {
        let l = n.hasFlag(u.iLy.EPHEMERAL),
          a = n.state === u.yb.SENT,
          r = !e.isArchivedThread() || s;
        return t && a && !l && !i && r;
      }
      function f(e, n) {
        var t;
        let i = (0, a.tc)(e),
          [, o] = (0, l.AB)(
            null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t
              ? t
              : void 0,
          ),
          u = (0, s.e7)([r.Z], () => null != e && null != n && c(e, n, r.Z));
        return null != e && null != n && E(e, n, u, o, i);
      }
      function g(e, n) {
        var t;
        let i = (0, a.kn)(e),
          s = c(e, n, r.Z),
          u = o.default.getCurrentUser(),
          [, d] = (0, l.s5)(
            null == u ? void 0 : u.id,
            null !== (t = e.getGuildId()) && void 0 !== t ? t : void 0,
          );
        return E(e, n, s, d, i);
      }
    },
    570870: function (e, n, t) {
      var i = t(735250),
        s = t(470079),
        l = t(512722),
        a = t.n(l),
        r = t(442837),
        o = t(481060),
        u = t(10718),
        d = t(667204),
        c = t(826298),
        E = t(276022),
        f = t(978983),
        g = t(430824),
        m = t(594174),
        M = t(981631),
        _ = t(689079),
        h = t(689938),
        N = t(359522);
      n.Z = (e) => {
        let n,
          {
            commandType: t,
            commandTargetId: l,
            channel: I,
            guildId: Z,
            onHeightUpdate: A,
            context: p,
          } = e,
          S = (0, r.e7)([g.Z], () => g.Z.getGuild(null != Z ? Z : I.guild_id)),
          v = (0, r.e7)([m.default], () => m.default.getUser(l)),
          T = (0, E.Z)({
            user: v,
            guildId: null == S ? void 0 : S.id,
            channel: I,
            context: p,
          }),
          {
            commands: C,
            sectionDescriptors: P,
            loading: O,
          } = u.wi(I, { commandTypes: [t] }, { limit: _.lr }),
          { sections: D } = s.useMemo(() => {
            let e = {};
            return (
              P.forEach((n) => {
                e[n.id] = n;
              }),
              { sections: e }
            );
          }, [P]),
          L = s.useRef(O.current);
        s.useEffect(() => {
          O.current !== L.current &&
            ((L.current = O.current), null == A || A());
        }, [O, A]);
        let x = s.useCallback(
          (e) => {
            a()(null != I, "menu item should not show if channel is null");
            let n = D[e.applicationId],
              t = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
              o.MenuItem,
              {
                id: e.id,
                label: e.displayName,
                showIconFirst: !0,
                icon: () =>
                  null != t
                    ? (0, i.jsx)(t, {
                        channel: I,
                        section: n,
                        width: 18,
                        height: 18,
                        selectable: !1,
                      })
                    : null,
                action: () => {
                  (0, d.Z)({
                    command: e,
                    optionValues: {},
                    context: { channel: I, guild: S },
                    commandTargetId: l,
                  });
                },
              },
              e.id,
            );
          },
          [I, S, l, D],
        );
        if (
          (O.current
            ? (n = (0, i.jsx)(
                o.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(f.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((n =
                0 === C.length
                  ? (0, i.jsx)(
                      o.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: h.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : C.map(x)),
              null != T &&
                (n = (0, i.jsxs)(i.Fragment, {
                  children: [
                    n,
                    (0, i.jsx)(o.MenuSeparator, {}, "separator"),
                    T,
                  ],
                }))),
          !M.TPd.TEXTUAL.has(I.type))
        ) {
          if (null == T) return null;
          n = T;
        }
        return (0, i.jsx)(o.MenuItem, {
          id: "apps",
          label: h.Z.Messages.APPS,
          listClassName: N.list,
          children: n,
        });
      };
    },
    624453: function (e, n, t) {
      t(733860);
      var i,
        s,
        l,
        a,
        r = t(392711),
        o = t.n(r),
        u = t(442837),
        d = t(570140),
        c = t(163268),
        E = t(786761),
        f = t(706454),
        g = t(592125),
        m = t(271383),
        M = t(430824),
        _ = t(375954),
        h = t(699516),
        N = t(594174);
      let I = {};
      function Z(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          s = g.Z.getChannel(e),
          l = null != s ? s.getGuildId() : null;
        return {
          id: e,
          messages: n.map((e) => (0, E.e5)(e)),
          guildId: l,
          loaded: t,
          loading: i,
        };
      }
      function A(e) {
        let { channel: n } = e;
        delete I[n.id];
      }
      function p() {
        o().forEach(I, (e) => {
          e.messages = e.messages.map((e) =>
            e.set("blocked", h.Z.isBlockedForMessage(e)),
          );
        });
      }
      class S extends (i = u.ZP.Store) {
        initialize() {
          this.waitFor(g.Z, M.Z, m.ZP, _.Z, N.default, f.default);
        }
        getPinnedMessages(e) {
          var n;
          return null !== (n = I[e]) && void 0 !== n ? n : void 0;
        }
        loaded(e) {
          return null != I[e] && I[e].loaded;
        }
      }
      (a = "ChannelPinsStore"),
        (l = "displayName") in (s = S)
          ? Object.defineProperty(s, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[l] = a),
        (n.Z = new S(d.Z, {
          CONNECTION_OPEN: function () {
            I = {};
          },
          GUILD_DELETE: function (e) {
            let { guild: n } = e;
            I = o()(I)
              .filter((e) => e.guildId !== n.id)
              .keyBy("id")
              .value();
          },
          MESSAGE_UPDATE: function (e) {
            let n = e.message.id,
              t = e.message.channel_id;
            if (null == t) return !1;
            let i = I[t];
            if (null == i && !e.message.pinned) return !1;
            if (null == e.message.author) {
              if (null != i) {
                let s = o().findIndex(i.messages, (e) => e.id === n);
                if (s >= 0) {
                  let n = i.messages[s],
                    l = (0, E.wi)(n, e.message);
                  if (l !== n) {
                    let e = i.messages.slice();
                    (e[s] = l), (I[t].messages = e);
                  }
                }
              }
              return;
            }
            if (e.message.pinned) {
              if (null == i) {
                (i = Z(t, [e.message], !1)), (I[t] = i);
                return;
              }
              i.messages = i.messages.slice();
              let s = o().findIndex(i.messages, (e) => e.id === n);
              -1 === s
                ? i.messages.unshift((0, E.e5)(e.message))
                : (i.messages[s] = (0, E.wi)(i.messages[s], e.message)),
                (I[t] = i);
            } else {
              if (null == i) return;
              let e = o().findIndex(i.messages, (e) => e.id === n);
              if (-1 === e) return;
              (i.messages = i.messages.slice()),
                i.messages.splice(e, 1),
                (I[t] = i);
            }
          },
          MESSAGE_DELETE: function (e) {
            let { id: n, channelId: t } = e,
              i = I[t];
            if (
              null == i ||
              0 === o().remove(i.messages, (e) => e.id === n).length
            )
              return !1;
            (i.messages = i.messages.slice()), (I[t] = i);
          },
          MESSAGE_DELETE_BULK: function (e) {
            let { ids: n, channelId: t } = e,
              i = I[t];
            if (null != i)
              i.messages = i.messages.filter((e) => -1 === n.indexOf(e.id));
          },
          LOAD_PINNED_MESSAGES: function (e) {
            let { channelId: n } = e;
            I[n] = Z(n, [], !1, !0);
          },
          LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
            let { channelId: n, messages: t } = e;
            I[n] = Z(n, t, !0);
          },
          LOAD_PINNED_MESSAGES_FAILURE: function (e) {
            let { channelId: n } = e;
            delete I[n];
          },
          CHANNEL_DELETE: A,
          THREAD_DELETE: A,
          RELATIONSHIP_ADD: p,
          RELATIONSHIP_REMOVE: p,
          MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
            let { messageId: n, channelId: t } = e,
              i = I[t];
            if (null == i) return;
            let s = o().findIndex(i.messages, (e) => e.id === n);
            if (-1 !== s)
              (i.messages = i.messages.slice()),
                (i.messages[s] = (0, c.Cm)(i.messages[s])),
                (I[t] = i);
          },
        }));
    },
    970257: function (e, n, t) {
      t.d(n, {
        a4: function () {
          return o;
        },
        vc: function () {
          return u;
        },
      });
      var i = t(592125),
        s = t(650774),
        l = t(496675),
        a = t(594174),
        r = t(981631);
      function o(e) {
        return (
          null != e &&
          (function (e) {
            if (null == e) return !1;
            let n = e.id,
              t = a.default.getCurrentUser();
            return null != t && t.id !== n && !0 !== e.system && !0;
          })(e.author)
        );
      }
      function u(e) {
        return (
          null != e &&
          o(e) &&
          (function (e) {
            let n = i.Z.getChannel(e);
            if (null == n) return !1;
            if (n.type === r.d4z.DM || n.type === r.d4z.GROUP_DM) return !0;
            if (
              l.Z.canWithPartialContext(r.Plq.MANAGE_MESSAGES, { channelId: e })
            ) {
              let e = s.Z.getMemberCount(n.getGuildId());
              return null != e && e >= 50;
            }
            return !1;
          })(e.getChannelId())
        );
      }
    },
  },
]);
//# sourceMappingURL=50ec8cf5766514b9b910.js.map
