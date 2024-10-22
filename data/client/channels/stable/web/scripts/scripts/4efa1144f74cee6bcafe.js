"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77564"],
  {
    32750: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(481060),
        r = t(346479),
        o = t(665906),
        s = t(689938);
      function u(e) {
        var n;
        let t = (0, o.C7)(e),
          u = (0, o.tc)(e),
          l = e.isArchivedThread();
        if (l ? u : t)
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
          return f;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(852229),
        r = t(399606),
        o = t(481060),
        s = t(228392),
        u = t(592125),
        l = t(934415),
        d = t(981631),
        c = t(689938);
      function f(e, n, t) {
        let f = (0, r.e7)([u.Z], () => u.Z.getChannel(e.parent_id));
        return (0, i.jsx)(o.MenuItem, {
          id: "channel-copy-link",
          label: c.Z.Messages.COPY_LINK,
          action: () => {
            e.isForumPost() &&
              (0, s.B)({
                postId: e.id,
                location: { section: d.jXE.CONTEXT_MENU },
              }),
              (0, a.J)((0, l.EO)(e, f, n, t));
          },
        });
      }
    },
    323597: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(442837),
        r = t(481060),
        o = t(787014),
        s = t(904245),
        u = t(787263),
        l = t(660189),
        d = t(144140),
        c = t(314897),
        f = t(496675),
        Z = t(709054),
        v = t(981631),
        h = t(689938);
      function E(e) {
        let n = e.isForumPost(),
          t = (0, a.e7)([c.default], () => e.isOwner(c.default.getId()), [e]),
          { canManageChannel: E, canAccessChannel: _ } = (0, a.cj)(
            [f.Z],
            () => ({
              canAccessChannel: f.Z.can(e.accessPermissions, e),
              canManageChannel: f.Z.can(
                e.isThread() ? v.Plq.MANAGE_THREADS : v.Plq.MANAGE_CHANNELS,
                e,
              ),
            }),
            [e],
          ),
          C = (0, a.e7)(
            [d.Z],
            () => {
              var n;
              return null !== (n = d.Z.getCount(e.id)) && void 0 !== n ? n : 0;
            },
            [e.id],
          ),
          { firstMessage: I } = (0, a.e7)([l.Z], () => l.Z.getMessage(e.id), [
            e.id,
          ]),
          T = n && (E || (t && C < 1)),
          A = n && t && !E && C > 0 && null != I;
        return _ && (E || T || A)
          ? (0, i.jsx)(r.MenuItem, {
              id: "delete-channel",
              label: (() => {
                if (e.type === v.d4z.GUILD_CATEGORY)
                  return h.Z.Messages.DELETE_CATEGORY;
                if (e.isForumPost())
                  return T
                    ? h.Z.Messages.DELETE_FORUM_POST
                    : h.Z.Messages.DELETE_MESSAGE;
                if (e.isThread()) return h.Z.Messages.DELETE_THREAD;
                return h.Z.Messages.DELETE_CHANNEL;
              })(),
              color: "danger",
              action: () => {
                (0, u.w)(e, function () {
                  A
                    ? s.Z.deleteMessage(
                        e.id,
                        Z.default.castChannelIdAsMessageId(e.id),
                      )
                    : o.ZP.deleteChannel(e.id);
                });
              },
            })
          : null;
      }
    },
    251746: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
      });
      var i = t(200651),
        a = t(192379),
        r = t(392711),
        o = t.n(r),
        s = t(442837),
        u = t(481060),
        l = t(66999),
        d = t(665906),
        c = t(979651),
        f = t(557135),
        Z = t(689938);
      function v(e) {
        let n = (0, d.Y)(e),
          t = (0, s.e7)([c.Z], () => c.Z.isInChannel(e.id)),
          r = (0, s.e7)(
            [c.Z],
            () => !o().isEmpty(c.Z.getVoiceStatesForChannel(e.id)),
          ),
          { needSubscriptionToAccess: v } = (0, l.Z)(e.id),
          h = a.useCallback(() => {
            f.Z.handleVoiceConnect({
              channel: e,
              connected: t,
              needSubscriptionToAccess: v,
              locked: !1,
            });
          }, [e, t, v]);
        return t || !n
          ? null
          : (0, i.jsx)(u.MenuItem, {
              id: "join-thread-voice",
              label: r ? Z.Z.Messages.JOIN_CALL : Z.Z.Messages.START_CALL,
              action: h,
            });
      }
    },
    193987: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(481060),
        r = t(346479),
        o = t(665906),
        s = t(689938);
      function u(e) {
        let n = (0, o.Xb)(e),
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
          return Z;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(442837),
        r = t(481060),
        o = t(240872),
        s = t(456269),
        u = t(346479),
        l = t(665906),
        d = t(592125),
        c = t(176505),
        f = t(689938);
      function Z(e) {
        let n = (0, a.e7)([d.Z], () => d.Z.getChannel(e.parent_id)),
          t = (0, l.Xb)(e),
          Z = (0, s.kF)(e);
        return (null == n ? void 0 : n.isForumLikeChannel()) && t
          ? e.hasFlag(c.zZ.PINNED)
            ? (0, i.jsx)(r.MenuItem, {
                id: "unpin-thread",
                label: f.Z.Messages.UNPIN_POST,
                action: () => u.Z.unpin(e),
              })
            : (0, i.jsx)(r.MenuItem, {
                id: "pin-thread",
                label: f.Z.Messages.PIN_POST,
                action: function () {
                  null != Z
                    ? o.Z.show({
                        title: f.Z.Messages.FORUM_PIN_CONFIRM_TITLE,
                        body: f.Z.Messages.FORUM_PIN_CONFIRM_BODY,
                        onConfirm: async () => {
                          await u.Z.unpin(Z), u.Z.pin(e);
                        },
                      })
                    : u.Z.pin(e);
                },
              })
          : null;
      }
    },
    13736: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(481060),
        r = t(787014),
        o = t(665906),
        s = t(689938);
      function u(e) {
        let n = (0, o.C7)(e),
          t = (0, o.$R)(e),
          u = (0, o.Gu)(e);
        return !n || !t || u || __OVERLAY__
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
          return _;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var a = t(442837),
        r = t(481060),
        o = t(239091),
        s = t(596454),
        u = t(339085),
        l = t(883429),
        d = t(456269),
        c = t(665906),
        f = t(592125),
        Z = t(710352),
        v = t(689938),
        h = t(37461);
      function E(e) {
        let { tag: n } = e,
          { name: t, emojiId: r, emojiName: o } = n,
          l = (0, a.e7)([u.ZP], () =>
            null != r ? u.ZP.getUsableCustomEmojiById(r) : null,
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            null != o || null != r
              ? (0, i.jsx)(s.Z, {
                  className: h.emoji,
                  emojiId: r,
                  emojiName: o,
                  animated: !!(null == l ? void 0 : l.animated),
                })
              : null,
            t,
          ],
        });
      }
      function _(e) {
        let n = (0, a.e7)([f.Z], () => f.Z.getChannel(e), [e]),
          t = (0, c.C7)(n),
          s = (0, a.e7)(
            [f.Z],
            () => f.Z.getChannel(null == n ? void 0 : n.parent_id),
            [n],
          ),
          u = (0, d.Vm)(s),
          h = (0, d.eV)(n),
          _ = h.length >= Z.Cn,
          C = (0, c.$R)(n);
        if (null == n) return (0, o.Zy)(), null;
        if (
          !t ||
          __OVERLAY__ ||
          !n.isForumPost() ||
          (null == u ? void 0 : u.length) === 0 ||
          !C
        )
          return null;
        let I = (e) => {
            let t = new Set(h);
            if (t.has(e)) t.delete(e);
            else {
              if (_) return;
              t.add(e);
            }
            let i = Array.from(t).map((e) => e.id);
            l.Z.updateForumPostTags(n.id, i);
          },
          T =
            null == u
              ? void 0
              : u.map((e) => {
                  let n = h.includes(e);
                  return (0, i.jsx)(
                    r.MenuCheckboxItem,
                    {
                      id: e.id,
                      label: (0, i.jsx)(E, { tag: e }),
                      disabled: _ && !n,
                      action: () => I(e),
                      checked: n,
                    },
                    e.id,
                  );
                });
        return (0, i.jsx)(r.MenuItem, {
          id: "edit-tags",
          label: v.Z.Messages.FORUM_TAG_POST_EDIT,
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
      var i = t(200651);
      t(192379);
      var a = t(442837),
        r = t(481060),
        o = t(569471),
        s = t(346479),
        u = t(723170),
        l = t(124368),
        d = t(689938);
      function c(e) {
        let n = (0, u.B)(e);
        return (0, a.e7)([o.Z], () => o.Z.hasJoined(e.id))
          ? (0, i.jsx)(r.MenuItem, {
              id: "thread-notifications",
              label: d.Z.Messages.NOTIFICATION_SETTINGS,
              children: (0, l.zb)().map((t) => {
                let { setting: a, label: o } = t;
                return (0, i.jsx)(
                  r.MenuRadioItem,
                  {
                    group: "thread-notifications",
                    id: "".concat(a),
                    label: o,
                    action: () => s.Z.setNotificationSettings(e, { flags: a }),
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
          return l;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(481060),
        r = t(346479),
        o = t(665906),
        s = t(981631),
        u = t(689938);
      function l(e) {
        var n, t;
        if (!(0, o.Xb)(e) || e.type !== s.d4z.PRIVATE_THREAD) return null;
        let l =
          null ===
            (t =
              null === (n = e.threadMetadata) || void 0 === n
                ? void 0
                : n.invitable) ||
          void 0 === t ||
          t;
        return (0, i.jsx)(a.MenuCheckboxItem, {
          id: "toggle-thread-invitable",
          label: u.Z.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
          checked: l,
          action: () => r.Z.setInvitable(e, !l),
        });
      }
    },
    787263: function (e, n, t) {
      t.d(n, {
        w: function () {
          return r;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(481060);
      function r(e, n) {
        return (0, a.openModalLazy)(async () => {
          let { default: a } = await Promise.all([
            t.e("53115"),
            t.e("79521"),
          ]).then(t.bind(t, 207540));
          return (t) =>
            (0, i.jsx)(a, {
              ...t,
              onConfirm: () => {
                t.onClose(), n();
              },
              channel: e,
            });
        });
      }
    },
    117984: function (e, n, t) {
      t.d(n, {
        CM: function () {
          return h;
        },
        UT: function () {
          return v;
        },
        _Z: function () {
          return I;
        },
        kj: function () {
          return f;
        },
        oC: function () {
          return Z;
        },
        s3: function () {
          return _;
        },
        uA: function () {
          return C;
        },
        xh: function () {
          return E;
        },
      }),
        t(47120);
      var i = t(524437),
        a = t(675478),
        r = t(592125),
        o = t(496675),
        s = t(709054),
        u = t(853856),
        l = t(231338);
      function d() {
        let e = u.Z.getFavoriteChannels(),
          n = 1;
        for (let t in e) n = Math.max(n, e[t].order);
        return n + 1;
      }
      function c(e) {
        for (let n in e) {
          let t = e[n];
          if (null == t) {
            delete e[n];
            continue;
          }
          if (t.type === i.Dd.CATEGORY) continue;
          let a = r.Z.getChannel(n);
          if (null == a) {
            delete e[n];
            continue;
          }
          if (!a.isPrivate()) {
            if (!o.Z.can(l.Pl.VIEW_CHANNEL, a)) {
              delete e[n];
              continue;
            }
          }
        }
      }
      function f(e, n) {
        if (!u.Z.isFavorite(e))
          a.hW.updateAsync(
            "favorites",
            (t) => {
              (t.favoriteChannels[e] = i.aV.create({
                nickname: "",
                type: i.Dd.REFERENCE_ORIGINAL,
                position: d(),
                parentId: null != n ? n : "0",
              })),
                c(t.favoriteChannels);
            },
            a.fy.FREQUENT_USER_ACTION,
          );
      }
      function Z(e) {
        let n = u.Z.getFavorite(e);
        if (null != n)
          a.hW.updateAsync(
            "favorites",
            (t) => {
              if ((delete t.favoriteChannels[e], n.type === i.Dd.CATEGORY))
                for (let n in t.favoriteChannels)
                  t.favoriteChannels[n].parentId === e &&
                    (t.favoriteChannels[n].parentId = "0");
              c(t.favoriteChannels);
            },
            a.fy.INFREQUENT_USER_ACTION,
          );
      }
      function v(e, n) {
        if (!!u.Z.isFavorite(e))
          a.hW.updateAsync(
            "favorites",
            (t) => {
              t.favoriteChannels[e].nickname = null != n ? n : "";
            },
            a.fy.INFREQUENT_USER_ACTION,
          );
      }
      function h(e) {
        let n = s.default.fromTimestamp(Date.now());
        a.hW.updateAsync(
          "favorites",
          (t) => {
            t.favoriteChannels[n] = i.aV.create({
              nickname: e,
              type: i.Dd.CATEGORY,
              position: d(),
              parentId: "0",
            });
          },
          a.fy.FREQUENT_USER_ACTION,
        );
      }
      function E(e) {
        Z(e);
      }
      function _(e) {
        a.hW.updateAsync(
          "favorites",
          (n) => {
            for (let i of e)
              if (
                (null != i.position &&
                  (n.favoriteChannels[i.id].position = i.position),
                void 0 !== i.parent_id)
              ) {
                var t;
                n.favoriteChannels[i.id].parentId =
                  null !== (t = i.parent_id) && void 0 !== t ? t : "0";
              }
          },
          a.fy.FREQUENT_USER_ACTION,
        );
      }
      function C(e, n) {
        a.hW.updateAsync(
          "favorites",
          (t) => {
            t.favoriteChannels[e].parentId = null != n ? n : "0";
          },
          a.fy.FREQUENT_USER_ACTION,
        );
      }
      function I() {
        a.hW.updateAsync(
          "favorites",
          (e) => {
            e.muted = !e.muted;
          },
          a.fy.INFREQUENT_USER_ACTION,
        );
      }
    },
    593214: function (e, n, t) {
      t.d(n, {
        Mt: function () {
          return h;
        },
        li: function () {
          return f;
        },
        s4: function () {
          return Z;
        },
        up: function () {
          return E;
        },
        zv: function () {
          return v;
        },
      }),
        t(47120),
        t(653041);
      var i = t(192379),
        a = t(106351),
        r = t(442837);
      t(592125);
      var o = t(984933),
        s = t(914010);
      t(709054);
      var u = t(853856),
        l = t(362658),
        d = t(434065),
        c = t(981631);
      function f(e) {
        let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, l.z)(
            "useCanFavoriteChannel",
          ),
          i = (0, r.e7)([u.Z], () => u.Z.isFavorite(e.id)),
          a = e.isDM() || e.isThread();
        return n && !__OVERLAY__ && !i && (!a || t);
      }
      function Z(e) {
        return (0, r.e7)([u.Z], () => u.Z.getFavorite(e));
      }
      function v() {
        return (0, r.e7)([o.ZP], () => o.ZP.getChannels(c.I_8))[
          a.d.GUILD_CATEGORY
        ].map((e) => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function h() {
        return (0, r.e7)([s.Z], () => s.Z.getGuildId()) === c.I_8;
      }
      function E() {
        let { isFavoritesPerk: e } = (0, l.z)("useFavoriteAdded"),
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
      var i = t(903797),
        a = t(731965);
      let r = (0, i.Z)((e) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, a.j)(() => e({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, a.j)(() => e({ favoriteAdded: !1 })),
      }));
    },
  },
]);
//# sourceMappingURL=4efa1144f74cee6bcafe.js.map
