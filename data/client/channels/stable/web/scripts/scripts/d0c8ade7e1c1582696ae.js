"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40157"],
  {
    108843: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(906732);
      function r(e, n) {
        return function (t) {
          let { analyticsLocations: r } = (0, a.ZP)(n);
          return (0, i.jsx)(a.Gt, {
            value: r,
            children: (0, i.jsx)(e, { ...t }),
          });
        };
      }
    },
    422200: function (e, n, t) {
      t.r(n);
      var i = t(735250);
      t(470079);
      var a = t(481060),
        r = t(239091),
        l = t(108843),
        u = t(100527),
        s = t(299206),
        o = t(895563),
        d = t(32750),
        c = t(109764),
        Z = t(323597),
        f = t(461535),
        h = t(438536),
        M = t(251746),
        _ = t(193987),
        v = t(933793),
        I = t(13736),
        m = t(732393),
        T = t(214906),
        g = t(612856),
        C = t(137591),
        A = t(689938);
      n.default = (0, l.Z)(
        function (e) {
          let { channel: n, onSelect: t } = e,
            l = (0, c.Z)(n),
            u = (0, f.Z)(n),
            E = (0, T.Z)(n),
            O = (0, d.Z)(n),
            p = (0, _.Z)(n),
            j = (0, Z.Z)(n),
            b = (0, s.Z)({ id: n.id, label: A.Z.Messages.COPY_ID_THREAD }),
            R = (0, h.Z)(n, "Context Menu"),
            F = (0, v.Z)(n),
            P = (0, g.Z)(n),
            x = (0, I.Z)(n),
            N = (0, m.Z)(n.id),
            L = (0, M.Z)(n),
            U = (0, C.Z)(n),
            G = (0, o.l)(n),
            D = (0, o.P)(n);
          return (0, i.jsxs)(a.Menu, {
            navId: "thread-context",
            onClose: r.Zy,
            "aria-label": A.Z.Messages.THREAD_ACTIONS_MENU_LABEL,
            onSelect: t,
            children: [
              (0, i.jsxs)(
                a.MenuGroup,
                { children: [u, G] },
                "mark-as-read-or-favorite",
              ),
              (0, i.jsxs)(
                a.MenuGroup,
                { children: [R, L, O, p, x, N, l] },
                "thread-actions",
              ),
              (0, i.jsxs)(a.MenuGroup, { children: [E, P] }, "notifications"),
              (0, i.jsx)(a.MenuGroup, { children: D }),
              (0, i.jsxs)(
                a.MenuGroup,
                { children: [U, F, j] },
                "admin-actions",
              ),
              (0, i.jsx)(a.MenuGroup, { children: b }, "developer-actions"),
            ],
          });
        },
        [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_THREAD_MENU],
      );
    },
    32750: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        r = t(346479),
        l = t(665906),
        u = t(689938);
      function s(e) {
        var n;
        let t = (0, l.C7)(e),
          s = (0, l.tc)(e),
          o = e.isArchivedThread();
        if (o ? s : t)
          return (
            null === (n = e.threadMetadata) || void 0 === n
              ? void 0
              : n.archived
          )
            ? (0, i.jsx)(a.MenuItem, {
                id: "unarchive-thread",
                label: e.isForumPost()
                  ? u.Z.Messages.UNARCHIVE_FORUM_POST
                  : u.Z.Messages.UNARCHIVE_THREAD,
                action: () => r.Z.unarchiveThread(e, !1),
              })
            : (0, i.jsx)(a.MenuItem, {
                id: "archive-thread",
                label: e.isForumPost()
                  ? u.Z.Messages.ARCHIVE_FORUM_POST
                  : u.Z.Messages.ARCHIVE_THREAD,
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
        l = t(481060),
        u = t(228392),
        s = t(592125),
        o = t(934415),
        d = t(981631),
        c = t(689938);
      function Z(e, n, t) {
        let Z = (0, r.e7)([s.Z], () => s.Z.getChannel(e.parent_id));
        return (0, i.jsx)(l.MenuItem, {
          id: "channel-copy-link",
          label: c.Z.Messages.COPY_LINK,
          action: () => {
            e.isForumPost() &&
              (0, u.B)({
                postId: e.id,
                location: { section: d.jXE.CONTEXT_MENU },
              }),
              (0, a.J)((0, o.EO)(e, Z, n, t));
          },
        });
      }
    },
    461535: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var a = t(442837),
        r = t(481060),
        l = t(45114),
        u = t(456269),
        s = t(344185),
        o = t(569471),
        d = t(131704),
        c = t(324067),
        Z = t(306680),
        f = t(981631),
        h = t(689938);
      function M(e) {
        let n = (function (e) {
          let n = (0, u.n2)(e.guild_id, e.id),
            t = (0, a.e7)(
              [Z.ZP, c.Z, s.Z, o.Z],
              () => {
                if (e.isForumPost()) return Z.ZP.isForumPostUnread(e.id);
                if (e.type !== f.d4z.GUILD_CATEGORY)
                  return Z.ZP.hasUnreadOrMentions(e.id);
                {
                  let n = c.Z.getCategories(e.getGuildId());
                  if (null == n[e.id]) return !1;
                  if (
                    n[e.id].some((e) => {
                      let { channel: n } = e;
                      return (
                        (0, d.Em)(n.type) && Z.ZP.hasUnreadOrMentions(n.id)
                      );
                    })
                  )
                    return !0;
                  let t = new Set(n[e.id].map((e) => e.channel.id)),
                    i = s.Z.getThreadsForGuild(e.guild_id);
                  for (let e in i)
                    if (t.has(e)) {
                      for (let n in i[e])
                        if (
                          o.Z.hasJoined(n) &&
                          !o.Z.isMuted(n) &&
                          Z.ZP.hasUnreadOrMentions(n)
                        )
                          return !0;
                    }
                  return !1;
                }
              },
              [e],
            );
          return e.isForumLikeChannel() ? n > 0 : t;
        })(e);
        return (0, i.jsx)(r.MenuItem, {
          id: "mark-channel-read",
          label: h.Z.Messages.MARK_AS_READ,
          action: function () {
            (0, l.U6)(e);
          },
          disabled: !n,
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
        l = t.n(r),
        u = t(442837),
        s = t(481060),
        o = t(66999),
        d = t(665906),
        c = t(979651),
        Z = t(557135),
        f = t(689938);
      function h(e) {
        let n = (0, d.Y)(e),
          t = (0, u.e7)([c.Z], () => c.Z.isInChannel(e.id)),
          r = (0, u.e7)(
            [c.Z],
            () => !l().isEmpty(c.Z.getVoiceStatesForChannel(e.id)),
          ),
          { needSubscriptionToAccess: h } = (0, o.Z)(e.id),
          M = a.useCallback(() => {
            Z.Z.handleVoiceConnect({
              channel: e,
              connected: t,
              needSubscriptionToAccess: h,
              locked: !1,
            });
          }, [e, t, h]);
        return t || !n
          ? null
          : (0, i.jsx)(s.MenuItem, {
              id: "join-thread-voice",
              label: r ? f.Z.Messages.JOIN_CALL : f.Z.Messages.START_CALL,
              action: M,
            });
      }
    },
    193987: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        r = t(346479),
        l = t(665906),
        u = t(689938);
      function s(e) {
        let n = (0, l.Xb)(e),
          t = e.isLockedThread();
        if (n)
          return t
            ? (0, i.jsx)(a.MenuItem, {
                id: "unlock-thread",
                label: e.isForumPost()
                  ? u.Z.Messages.UNLOCK_FORUM_POST
                  : u.Z.Messages.UNLOCK_THREAD,
                action: () => r.Z.unlockThread(e),
              })
            : (0, i.jsx)(a.MenuItem, {
                id: "lock-thread",
                label: e.isForumPost()
                  ? u.Z.Messages.LOCK_FORUM_POST
                  : u.Z.Messages.LOCK_THREAD,
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
        l = t(240872),
        u = t(456269),
        s = t(346479),
        o = t(665906),
        d = t(592125),
        c = t(176505),
        Z = t(689938);
      function f(e) {
        let n = (0, a.e7)([d.Z], () => d.Z.getChannel(e.parent_id)),
          t = (0, o.Xb)(e),
          f = (0, u.kF)(e);
        return (null == n ? void 0 : n.isForumLikeChannel()) && t
          ? e.hasFlag(c.zZ.PINNED)
            ? (0, i.jsx)(r.MenuItem, {
                id: "unpin-thread",
                label: Z.Z.Messages.UNPIN_POST,
                action: () => s.Z.unpin(e),
              })
            : (0, i.jsx)(r.MenuItem, {
                id: "pin-thread",
                label: Z.Z.Messages.PIN_POST,
                action: function () {
                  null != f
                    ? l.Z.show({
                        title: Z.Z.Messages.FORUM_PIN_CONFIRM_TITLE,
                        body: Z.Z.Messages.FORUM_PIN_CONFIRM_BODY,
                        onConfirm: async () => {
                          await s.Z.unpin(f), s.Z.pin(e);
                        },
                      })
                    : s.Z.pin(e);
                },
              })
          : null;
      }
    },
    13736: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        r = t(787014),
        l = t(665906),
        u = t(689938);
      function s(e) {
        let n = (0, l.C7)(e),
          t = (0, l.$R)(e),
          s = (0, l.Gu)(e);
        return !n || !t || s || __OVERLAY__
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "edit-thread",
              label: e.isForumPost()
                ? u.Z.Messages.EDIT_FORUM_POST
                : u.Z.Messages.EDIT_THREAD,
              action: () => {
                (0, a.closeAllModals)(), r.ZP.open(e.id);
              },
            });
      }
    },
    732393: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var a = t(442837),
        r = t(481060),
        l = t(239091),
        u = t(596454),
        s = t(339085),
        o = t(883429),
        d = t(456269),
        c = t(665906),
        Z = t(592125),
        f = t(710352),
        h = t(689938),
        M = t(37461);
      function _(e) {
        let { tag: n } = e,
          { name: t, emojiId: r, emojiName: l } = n,
          o = (0, a.e7)([s.ZP], () =>
            null != r ? s.ZP.getUsableCustomEmojiById(r) : null,
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(u.Z, {
              className: M.emoji,
              emojiId: r,
              emojiName: l,
              animated: !!(null == o ? void 0 : o.animated),
            }),
            t,
          ],
        });
      }
      function v(e) {
        let n = (0, a.e7)([Z.Z], () => Z.Z.getChannel(e), [e]),
          t = (0, c.C7)(n),
          u = (0, a.e7)(
            [Z.Z],
            () => Z.Z.getChannel(null == n ? void 0 : n.parent_id),
            [n],
          ),
          s = (0, d.Vm)(u),
          M = (0, d.eV)(n),
          v = M.length >= f.Cn,
          I = (0, c.$R)(n);
        if (null == n) return (0, l.Zy)(), null;
        if (
          !t ||
          __OVERLAY__ ||
          !n.isForumPost() ||
          (null == s ? void 0 : s.length) === 0 ||
          !I
        )
          return null;
        let m = (e) => {
            let t = new Set(M);
            if (t.has(e)) t.delete(e);
            else {
              if (v) return;
              t.add(e);
            }
            let i = Array.from(t).map((e) => e.id);
            o.Z.updateForumPostTags(n.id, i);
          },
          T =
            null == s
              ? void 0
              : s.map((e) => {
                  let n = M.includes(e);
                  return (0, i.jsx)(
                    r.MenuCheckboxItem,
                    {
                      id: e.id,
                      label: (0, i.jsx)(_, { tag: e }),
                      disabled: v && !n,
                      action: () => m(e),
                      checked: n,
                    },
                    e.id,
                  );
                });
        return (0, i.jsx)(r.MenuItem, {
          id: "edit-tags",
          label: h.Z.Messages.FORUM_TAG_POST_EDIT,
          children: T,
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
        l = t(569471),
        u = t(346479),
        s = t(723170),
        o = t(124368),
        d = t(689938);
      function c(e) {
        let n = (0, s.B)(e);
        return (0, a.e7)([l.Z], () => l.Z.hasJoined(e.id))
          ? (0, i.jsx)(r.MenuItem, {
              id: "thread-notifications",
              label: d.Z.Messages.NOTIFICATION_SETTINGS,
              children: (0, o.zb)().map((t) => {
                let { setting: a, label: l } = t;
                return (0, i.jsx)(
                  r.MenuRadioItem,
                  {
                    group: "thread-notifications",
                    id: "".concat(a),
                    label: l,
                    action: () => u.Z.setNotificationSettings(e, { flags: a }),
                    checked: a === n,
                  },
                  a,
                );
              }),
            })
          : (0, i.jsx)(r.MenuItem, {
              id: "notifications-disabled",
              label: d.Z.Messages.NOTIFICATION_SETTINGS,
              disabled: !0,
            });
      }
    },
    137591: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        r = t(346479),
        l = t(665906),
        u = t(981631),
        s = t(689938);
      function o(e) {
        var n, t;
        if (!(0, l.Xb)(e) || e.type !== u.d4z.PRIVATE_THREAD) return null;
        let o =
          null ===
            (t =
              null === (n = e.threadMetadata) || void 0 === n
                ? void 0
                : n.invitable) ||
          void 0 === t ||
          t;
        return (0, i.jsx)(a.MenuCheckboxItem, {
          id: "toggle-thread-invitable",
          label: s.Z.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
          checked: o,
          action: () => r.Z.setInvitable(e, !o),
        });
      }
    },
    593214: function (e, n, t) {
      t.d(n, {
        Mt: function () {
          return M;
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
      var l = t(984933),
        u = t(914010);
      t(709054);
      var s = t(853856),
        o = t(362658),
        d = t(434065),
        c = t(981631);
      function Z(e) {
        let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, o.z)(
            "useCanFavoriteChannel",
          ),
          i = (0, r.e7)([s.Z], () => s.Z.isFavorite(e.id)),
          a = e.isDM() || e.isThread();
        return n && !__OVERLAY__ && !i && (!a || t);
      }
      function f(e) {
        return (0, r.e7)([s.Z], () => s.Z.getFavorite(e));
      }
      function h() {
        return (0, r.e7)([l.ZP], () => l.ZP.getChannels(c.I_8))[
          a.d.GUILD_CATEGORY
        ].map((e) => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function M() {
        return (0, r.e7)([u.Z], () => u.Z.getGuildId()) === c.I_8;
      }
      function _() {
        let { isFavoritesPerk: e } = (0, o.z)("useFavoriteAdded"),
          n = (0, d.r)(),
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
    895563: function (e, n, t) {
      t.d(n, {
        P: function () {
          return v;
        },
        l: function () {
          return _;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var a = t(392711),
        r = t.n(a),
        l = t(442837),
        u = t(481060),
        s = t(984933),
        o = t(853856),
        d = t(117984),
        c = t(593214),
        Z = t(362658),
        f = t(981631),
        h = t(689938);
      function M(e, n) {
        return e.type === f.d4z.GROUP_DM
          ? n
            ? h.Z.Messages.UNFAVORITE_GDM
            : h.Z.Messages.FAVORITE_GDM
          : e.type === f.d4z.DM
            ? n
              ? h.Z.Messages.UNFAVORITE_DM
              : h.Z.Messages.FAVORITE_DM
            : n
              ? h.Z.Messages.UNFAVORITE_CHANNEL
              : h.Z.Messages.FAVORITE_CHANNEL;
      }
      function _(e) {
        let n = (0, l.e7)([s.ZP], () => s.ZP.getChannels(f.I_8))[
            f.d4z.GUILD_CATEGORY
          ],
          { isFavoritesPerk: t } = (0, Z.z)("58e21a_1"),
          { notifyFavoriteAdded: a } = (0, c.up)();
        if (!(0, c.li)(e)) return null;
        let [[o], h] = r().partition(n, (e) => "null" === e.channel.id);
        function _(n) {
          a(), (0, d.kj)(e.id, n);
        }
        return 0 === h.length
          ? (0, i.jsx)(u.MenuItem, {
              id: "favorite-channel",
              label: M(e, !1),
              action: () => _(null),
            })
          : (0, i.jsxs)(u.MenuItem, {
              id: "favorite-channel",
              label: M(e, !1),
              action: () => _(null),
              children: [
                t &&
                  (0, i.jsx)(u.MenuGroup, {
                    children: (0, i.jsx)(
                      u.MenuItem,
                      {
                        id: "favorite-".concat(o.channel.id),
                        label: o.channel.name,
                        action: () =>
                          _("null" === o.channel.id ? null : o.channel.id),
                      },
                      o.channel.id,
                    ),
                  }),
                (0, i.jsx)(u.MenuGroup, {
                  children: h.map((e) =>
                    (0, i.jsx)(
                      u.MenuItem,
                      {
                        id: "favorite-".concat(e.channel.id),
                        label: e.channel.name,
                        action: () => _(e.channel.id),
                      },
                      e.channel.id,
                    ),
                  ),
                }),
              ],
            });
      }
      function v(e) {
        let n = (0, l.e7)([o.Z], () => o.Z.isFavorite(e.id));
        return __OVERLAY__ || !n
          ? null
          : (0, i.jsx)(u.MenuItem, {
              id: "favorite-channel",
              label: M(e, !0),
              color: "danger",
              action: () =>
                e.type === f.d4z.GUILD_CATEGORY
                  ? (0, u.openModalLazy)(async () => {
                      let { default: n } = await t
                        .e("37720")
                        .then(t.bind(t, 357632));
                      return (t) =>
                        (0, i.jsx)(n, {
                          ...t,
                          onConfirm: () => {
                            t.onClose(), (0, d.oC)(e.id);
                          },
                          channel: e,
                        });
                    })
                  : (0, d.oC)(e.id),
            });
      }
    },
    37461: function (e, n, t) {
      e.exports = { emoji: "emoji_eb856f" };
    },
  },
]);
//# sourceMappingURL=d0c8ade7e1c1582696ae.js.map
