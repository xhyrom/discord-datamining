"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48800"],
  {
    32750: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        r = t(346479),
        d = t(665906),
        s = t(689938);
      function o(e) {
        var n;
        let t = (0, d.C7)(e),
          o = (0, d.tc)(e),
          u = e.isArchivedThread();
        if (u ? o : t)
          return (
            null === (n = e.threadMetadata) || void 0 === n
              ? void 0
              : n.archived
          )
            ? (0, i.jsx)(a.MenuItem, {
                id: "unarchive-thread",
                label: e.isForumPost()
                  ? s.Z.Messages.UNARCHIVE_FORUM_POST
                  : s.Z.Messages.UNARCHIVE_THREAD,
                action: () => r.Z.unarchiveThread(e, !1),
              })
            : (0, i.jsx)(a.MenuItem, {
                id: "archive-thread",
                label: e.isForumPost()
                  ? s.Z.Messages.ARCHIVE_FORUM_POST
                  : s.Z.Messages.ARCHIVE_THREAD,
                action: () => r.Z.archiveThread(e, !1),
              });
      }
    },
    109764: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(852229),
        r = t(399606),
        d = t(481060),
        s = t(228392),
        o = t(592125),
        u = t(934415),
        l = t(981631),
        c = t(689938);
      function Z(e, n, t) {
        let Z = (0, r.e7)([o.Z], () => o.Z.getChannel(e.parent_id));
        return (0, i.jsx)(d.MenuItem, {
          id: "channel-copy-link",
          label: c.Z.Messages.COPY_LINK,
          action: () => {
            e.isForumPost() &&
              (0, s.B)({
                postId: e.id,
                location: { section: l.jXE.CONTEXT_MENU },
              }),
              (0, a.J)((0, u.EO)(e, Z, n, t));
          },
        });
      }
    },
    251746: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(735250),
        a = t(470079),
        r = t(392711),
        d = t.n(r),
        s = t(442837),
        o = t(481060),
        u = t(66999),
        l = t(665906),
        c = t(979651),
        Z = t(557135),
        f = t(689938);
      function h(e) {
        let n = (0, l.Y)(e),
          t = (0, s.e7)([c.Z], () => c.Z.isInChannel(e.id)),
          r = (0, s.e7)(
            [c.Z],
            () => !d().isEmpty(c.Z.getVoiceStatesForChannel(e.id)),
          ),
          { needSubscriptionToAccess: h } = (0, u.Z)(e.id),
          v = a.useCallback(() => {
            Z.Z.handleVoiceConnect({
              channel: e,
              connected: t,
              needSubscriptionToAccess: h,
              locked: !1,
            });
          }, [e, t, h]);
        return t || !n
          ? null
          : (0, i.jsx)(o.MenuItem, {
              id: "join-thread-voice",
              label: r ? f.Z.Messages.JOIN_CALL : f.Z.Messages.START_CALL,
              action: v,
            });
      }
    },
    193987: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        r = t(346479),
        d = t(665906),
        s = t(689938);
      function o(e) {
        let n = (0, d.Xb)(e),
          t = e.isLockedThread();
        if (n)
          return t
            ? (0, i.jsx)(a.MenuItem, {
                id: "unlock-thread",
                label: e.isForumPost()
                  ? s.Z.Messages.UNLOCK_FORUM_POST
                  : s.Z.Messages.UNLOCK_THREAD,
                action: () => r.Z.unlockThread(e),
              })
            : (0, i.jsx)(a.MenuItem, {
                id: "lock-thread",
                label: e.isForumPost()
                  ? s.Z.Messages.LOCK_FORUM_POST
                  : s.Z.Messages.LOCK_THREAD,
                action: () => r.Z.lockThread(e),
              });
      }
    },
    933793: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        r = t(481060),
        d = t(240872),
        s = t(456269),
        o = t(346479),
        u = t(665906),
        l = t(592125),
        c = t(176505),
        Z = t(689938);
      function f(e) {
        let n = (0, a.e7)([l.Z], () => l.Z.getChannel(e.parent_id)),
          t = (0, u.Xb)(e),
          f = (0, s.kF)(e);
        return (null == n ? void 0 : n.isForumLikeChannel()) && t
          ? e.hasFlag(c.zZ.PINNED)
            ? (0, i.jsx)(r.MenuItem, {
                id: "unpin-thread",
                label: Z.Z.Messages.UNPIN_POST,
                action: () => o.Z.unpin(e),
              })
            : (0, i.jsx)(r.MenuItem, {
                id: "pin-thread",
                label: Z.Z.Messages.PIN_POST,
                action: function () {
                  null != f
                    ? d.Z.show({
                        title: Z.Z.Messages.FORUM_PIN_CONFIRM_TITLE,
                        body: Z.Z.Messages.FORUM_PIN_CONFIRM_BODY,
                        onConfirm: async () => {
                          await o.Z.unpin(f), o.Z.pin(e);
                        },
                      })
                    : o.Z.pin(e);
                },
              })
          : null;
      }
    },
    13736: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        r = t(787014),
        d = t(665906),
        s = t(689938);
      function o(e) {
        let n = (0, d.C7)(e),
          t = (0, d.$R)(e),
          o = (0, d.Gu)(e);
        return !n || !t || o || __OVERLAY__
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "edit-thread",
              label: e.isForumPost()
                ? s.Z.Messages.EDIT_FORUM_POST
                : s.Z.Messages.EDIT_THREAD,
              action: () => {
                (0, a.closeAllModals)(), r.ZP.open(e.id);
              },
            });
      }
    },
    732393: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var a = t(442837),
        r = t(481060),
        d = t(239091),
        s = t(596454),
        o = t(339085),
        u = t(883429),
        l = t(456269),
        c = t(665906),
        Z = t(592125),
        f = t(710352),
        h = t(689938),
        v = t(37461);
      function _(e) {
        let { tag: n } = e,
          { name: t, emojiId: r, emojiName: d } = n,
          u = (0, a.e7)([o.ZP], () =>
            null != r ? o.ZP.getUsableCustomEmojiById(r) : null,
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s.Z, {
              className: v.emoji,
              emojiId: r,
              emojiName: d,
              animated: !!(null == u ? void 0 : u.animated),
            }),
            t,
          ],
        });
      }
      function I(e) {
        let n = (0, a.e7)([Z.Z], () => Z.Z.getChannel(e), [e]),
          t = (0, c.C7)(n),
          s = (0, a.e7)(
            [Z.Z],
            () => Z.Z.getChannel(null == n ? void 0 : n.parent_id),
            [n],
          ),
          o = (0, l.Vm)(s),
          v = (0, l.eV)(n),
          I = v.length >= f.Cn,
          M = (0, c.$R)(n);
        if (null == n) return (0, d.Zy)(), null;
        if (
          !t ||
          __OVERLAY__ ||
          !n.isForumPost() ||
          (null == o ? void 0 : o.length) === 0 ||
          !M
        )
          return null;
        let T = (e) => {
            let t = new Set(v);
            if (t.has(e)) t.delete(e);
            else {
              if (I) return;
              t.add(e);
            }
            let i = Array.from(t).map((e) => e.id);
            u.Z.updateForumPostTags(n.id, i);
          },
          m =
            null == o
              ? void 0
              : o.map((e) => {
                  let n = v.includes(e);
                  return (0, i.jsx)(
                    r.MenuCheckboxItem,
                    {
                      id: e.id,
                      label: (0, i.jsx)(_, { tag: e }),
                      disabled: I && !n,
                      action: () => T(e),
                      checked: n,
                    },
                    e.id,
                  );
                });
        return (0, i.jsx)(r.MenuItem, {
          id: "edit-tags",
          label: h.Z.Messages.FORUM_TAG_POST_EDIT,
          children: m,
        });
      }
    },
    612856: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        r = t(481060),
        d = t(569471),
        s = t(346479),
        o = t(723170),
        u = t(124368),
        l = t(689938);
      function c(e) {
        let n = (0, o.B)(e);
        return (0, a.e7)([d.Z], () => d.Z.hasJoined(e.id))
          ? (0, i.jsx)(r.MenuItem, {
              id: "thread-notifications",
              label: l.Z.Messages.NOTIFICATION_SETTINGS,
              children: (0, u.zb)().map((t) => {
                let { setting: a, label: d } = t;
                return (0, i.jsx)(
                  r.MenuRadioItem,
                  {
                    group: "thread-notifications",
                    id: "".concat(a),
                    label: d,
                    action: () => s.Z.setNotificationSettings(e, { flags: a }),
                    checked: a === n,
                  },
                  a,
                );
              }),
            })
          : (0, i.jsx)(r.MenuItem, {
              id: "notifications-disabled",
              label: l.Z.Messages.NOTIFICATION_SETTINGS,
              disabled: !0,
            });
      }
    },
    137591: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        r = t(346479),
        d = t(665906),
        s = t(981631),
        o = t(689938);
      function u(e) {
        var n, t;
        if (!(0, d.Xb)(e) || e.type !== s.d4z.PRIVATE_THREAD) return null;
        let u =
          null ===
            (t =
              null === (n = e.threadMetadata) || void 0 === n
                ? void 0
                : n.invitable) ||
          void 0 === t ||
          t;
        return (0, i.jsx)(a.MenuCheckboxItem, {
          id: "toggle-thread-invitable",
          label: o.Z.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
          checked: u,
          action: () => r.Z.setInvitable(e, !u),
        });
      }
    },
    593214: function (e, n, t) {
      t.d(n, {
        Mt: function () {
          return v;
        },
        li: function () {
          return Z;
        },
        s4: function () {
          return f;
        },
        up: function () {
          return _;
        },
        zv: function () {
          return h;
        },
      }),
        t(47120),
        t(653041);
      var i = t(470079),
        a = t(106351),
        r = t(442837);
      t(592125);
      var d = t(984933),
        s = t(914010);
      t(709054);
      var o = t(853856),
        u = t(362658),
        l = t(434065),
        c = t(981631);
      function Z(e) {
        let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, u.z)(
            "useCanFavoriteChannel",
          ),
          i = (0, r.e7)([o.Z], () => o.Z.isFavorite(e.id)),
          a = e.isDM() || e.isThread();
        return n && !__OVERLAY__ && !i && (!a || t);
      }
      function f(e) {
        return (0, r.e7)([o.Z], () => o.Z.getFavorite(e));
      }
      function h() {
        return (0, r.e7)([d.ZP], () => d.ZP.getChannels(c.I_8))[
          a.d.GUILD_CATEGORY
        ].map((e) => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function v() {
        return (0, r.e7)([s.Z], () => s.Z.getGuildId()) === c.I_8;
      }
      function _() {
        let { isFavoritesPerk: e } = (0, u.z)("useFavoriteAdded"),
          n = (0, l.r)(),
          t = i.useCallback(() => {
            e && n.notifyFavoriteAdded();
          }, [n, e]),
          a = i.useCallback(() => {
            e && n.clearFavoriteAdded();
          }, [n, e]);
        return {
          favoriteAdded: n.favoriteAdded,
          notifyFavoriteAdded: t,
          clearFavoriteAdded: a,
        };
      }
    },
    434065: function (e, n, t) {
      t.d(n, {
        r: function () {
          return r;
        },
      });
      var i = t(652874),
        a = t(731965);
      let r = (0, i.Z)((e) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, a.j)(() => e({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, a.j)(() => e({ favoriteAdded: !1 })),
      }));
    },
  },
]);
//# sourceMappingURL=0b6350b243eb361ec68e.js.map
